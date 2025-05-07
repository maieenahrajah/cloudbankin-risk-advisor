import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatIfBaselineData } from "@/data/mockData";
import { calculateRiskScore } from "@/lib/riskCalculations";
import { Gauge } from "lucide-react";
import { useMemo } from "react";

interface ProjectionPanelProps {
  scenario: {
    creditScore: number;
    maxCreditEnquiries: number;
    minABB: number;
    maxEIR: number;
    chequeBounces?: number;
    willfulDefault?: boolean;
    unsecuredLoansCount?: number;
    securedLoansCount?: number;
    bureauHistory?: number;
    activeDpd1Plus?: number;
    closedDpd1Plus?: number;
    activeDpd30Plus?: number;
    closedDpd30Plus?: number;
    activeDpd60Plus?: number;
    closedDpd60Plus?: number;
    activeDpd90Plus?: number;
    closedDpd90Plus?: number;
    ccSettlements3Years?: number;
    ccWriteOffs3Years?: number;
    nonCcSettlements3Years?: number;
    nonCcWriteOffs3Years?: number;
    activeDefaultsCount?: number;
    closedDefaultsCount?: number;
    openLoanAccounts?: number;
    closedLoanAccounts?: number;
    emiBounce0?: number;
    emiBounce1?: number;
    emiBounce2?: number;
    emiBounce3?: number;
    [key: string]: any;
  };
}

const ProjectionPanel = ({ scenario }: ProjectionPanelProps) => {
  // Calculate projected NPA based on scenario parameters
  const calculateProjectedNpa = () => {
    const baseline = whatIfBaselineData.npa;
    
    // Impact weights for basic parameters
    const creditScoreImpact = (scenario.creditScore - whatIfBaselineData.creditScore) * 0.005;
    const enquiriesImpact = (whatIfBaselineData.maxCreditEnquiries - scenario.maxCreditEnquiries) * 0.05;
    const abbImpact = (scenario.minABB - whatIfBaselineData.minABB) * 0.00002;
    const eirImpact = (whatIfBaselineData.maxEIR - scenario.maxEIR) * 1.2;
    
    // Impact weights for advanced parameters - set defaults if not present
    const chequeBounces = scenario.chequeBounces || 0;
    const willfulDefault = scenario.willfulDefault ? 0.8 : 0;
    const unsecuredImpact = ((scenario.unsecuredLoansCount || 0) - whatIfBaselineData.unsecuredLoansCount) * 0.15;
    const securedImpact = ((scenario.securedLoansCount || 0) - whatIfBaselineData.securedLoansCount) * 0.05;
    
    // DPD impacts
    const dpd1PlusImpact = ((scenario.activeDpd1Plus || 0) + (scenario.closedDpd1Plus || 0) * 0.5) * 0.1;
    const dpd30PlusImpact = ((scenario.activeDpd30Plus || 0) + (scenario.closedDpd30Plus || 0) * 0.5) * 0.2;
    const dpd60PlusImpact = ((scenario.activeDpd60Plus || 0) + (scenario.closedDpd60Plus || 0) * 0.5) * 0.4;
    const dpd90PlusImpact = ((scenario.activeDpd90Plus || 0) + (scenario.closedDpd90Plus || 0) * 0.5) * 0.8;
    
    // Credit card and loan settlement impacts
    const ccSettlementsImpact = (scenario.ccSettlements3Years || 0) * 0.3;
    const ccWriteOffsImpact = (scenario.ccWriteOffs3Years || 0) * 0.5;
    const nonCcSettlementsImpact = (scenario.nonCcSettlements3Years || 0) * 0.4;
    const nonCcWriteOffsImpact = (scenario.nonCcWriteOffs3Years || 0) * 0.7;
    
    // Default and account impacts
    const activeDefaultsImpact = (scenario.activeDefaultsCount || 0) * 0.3;
    const closedDefaultsImpact = (scenario.closedDefaultsCount || 0) * 0.15;
    
    // EMI bounce impacts
    const emiBounceImpact = 
      (scenario.emiBounce0 || 0) * 0.05 + 
      (scenario.emiBounce1 || 0) * 0.1 + 
      (scenario.emiBounce2 || 0) * 0.2 + 
      (scenario.emiBounce3 || 0) * 0.3;
    
    // Calculate advanced impacts
    const advancedImpact = 
      chequeBounces * 0.2 + 
      willfulDefault + 
      unsecuredImpact + 
      securedImpact +
      dpd1PlusImpact +
      dpd30PlusImpact +
      dpd60PlusImpact +
      dpd90PlusImpact +
      ccSettlementsImpact +
      ccWriteOffsImpact +
      nonCcSettlementsImpact +
      nonCcWriteOffsImpact +
      activeDefaultsImpact +
      closedDefaultsImpact +
      emiBounceImpact;
    
    // Calculate total impact (negative means reduction in NPA)
    const basicImpact = -(creditScoreImpact + enquiriesImpact + abbImpact + eirImpact);
    const totalImpact = basicImpact + advancedImpact;
    
    // Calculate projected NPA
    let projectedNpa = baseline + totalImpact;
    
    // Ensure NPA doesn't go below a reasonable floor
    return Math.max(projectedNpa, 0.2);
  };

  // Calculate approval rate change based on scenario parameters
  const calculateApprovalChange = () => {
    const baseline = whatIfBaselineData.approvalRate;
    
    // Impact weights for basic parameters
    const creditScoreImpact = (scenario.creditScore - whatIfBaselineData.creditScore) * -0.15;
    const enquiriesImpact = (scenario.maxCreditEnquiries - whatIfBaselineData.maxCreditEnquiries) * 2;
    const abbImpact = (scenario.minABB - whatIfBaselineData.minABB) * -0.0003;
    const eirImpact = (scenario.maxEIR - whatIfBaselineData.maxEIR) * 20;
    
    // Impact from advanced parameters
    const chequeBounces = (scenario.chequeBounces || 0) * -2.5;
    const willfulDefault = scenario.willfulDefault ? -15 : 0;
    const unsecuredImpact = ((scenario.unsecuredLoansCount || 0) - whatIfBaselineData.unsecuredLoansCount) * -1.2;
    const dpd90PlusImpact = ((scenario.activeDpd90Plus || 0) + (scenario.closedDpd90Plus || 0) * 0.5) * -3;
    const writeOffsImpact = ((scenario.ccWriteOffs3Years || 0) + (scenario.nonCcWriteOffs3Years || 0)) * -4;
    
    // Calculate advanced impacts
    const advancedImpact = chequeBounces + willfulDefault + unsecuredImpact + dpd90PlusImpact + writeOffsImpact;
    
    // Calculate total impact
    const basicImpact = creditScoreImpact + enquiriesImpact + abbImpact + eirImpact;
    const totalImpact = basicImpact + advancedImpact;
    
    // Calculate new approval rate
    let newApprovalRate = baseline + totalImpact;
    
    // Clamp to reasonable range
    return Math.min(Math.max(newApprovalRate, 15), 95);
  };

  // Calculate risk score & metrics
  const projectedNpa = useMemo(() => calculateProjectedNpa(), [scenario]);
  const approvalRate = useMemo(() => calculateApprovalChange(), [scenario]);
  const npaReduction = whatIfBaselineData.npa - projectedNpa;
  const npaReductionPercent = (npaReduction / whatIfBaselineData.npa) * 100;
  const approvalRateChange = approvalRate - whatIfBaselineData.approvalRate;
  const riskScore = useMemo(() => calculateRiskScore(scenario), [scenario]);
  const baselineRiskScore = useMemo(() => calculateRiskScore(whatIfBaselineData), []);
  const riskScoreChange = riskScore - baselineRiskScore;
  
  // Calculate risk category with adjusted thresholds for more variation
  const getRiskCategory = (score: number) => {
    if (score < 550) return { label: "Very Low Risk", color: "#16a34a" };
    if (score < 650) return { label: "Low Risk", color: "#84cc16" };
    if (score < 725) return { label: "Moderate Risk", color: "#facc15" };
    if (score < 800) return { label: "High Risk", color: "#f97316" };
    return { label: "Very High Risk", color: "#ef4444" };
  };
  
  const riskCategory = getRiskCategory(riskScore);
  const baselineCategory = getRiskCategory(baselineRiskScore);
  
  // Calculate gauge position for risk meter (adjusted range for better visualization)
  const gaugePosition = Math.min(Math.max((riskScore - 450) / 550 * 100, 0), 100);
  
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Projected Outcomes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* NPA Projection */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Projected NPA</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{projectedNpa.toFixed(1)}%</span>
              <span className={`text-sm font-medium ${npaReduction >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {npaReduction >= 0 ? '↓' : '↑'} {Math.abs(npaReduction).toFixed(1)}%
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-1">
              {npaReductionPercent >= 0 
                ? `${npaReductionPercent.toFixed(0)}% reduction from baseline`
                : `${Math.abs(npaReductionPercent).toFixed(0)}% increase from baseline`
              }
            </span>
          </div>
          
          {/* Risk Score */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Risk Score</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{riskScore}</span>
              <span className={`text-sm font-medium ${riskScoreChange <= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {riskScoreChange <= 0 ? '↓' : '↑'} {Math.abs(riskScoreChange)}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-1">
              {riskScoreChange <= 0 
                ? `${Math.abs(riskScoreChange)} points better than baseline`
                : `${riskScoreChange} points worse than baseline`
              }
            </span>
          </div>
          
          {/* Risk Meter */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm">Risk Category</span>
              <span className="text-sm font-medium" style={{ color: riskCategory.color }}>
                {riskCategory.label}
              </span>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full">
              <div 
                className="h-4 w-1 bg-white border border-gray-300 rounded-full relative -top-1"
                style={{ marginLeft: `${gaugePosition}%`, transition: "margin 0.5s ease" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Low Risk</span>
              <span>High Risk</span>
            </div>
          </div>
          
          {/* Approval Rate Impact */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Approval Rate Impact</span>
              <span className={`text-sm font-medium ${approvalRateChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {approvalRateChange >= 0 ? '+' : ''}{approvalRateChange.toFixed(1)}%
              </span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full ${approvalRateChange >= 0 ? 'bg-green-500' : 'bg-red-500'} rounded-full transition-all duration-300`}
                style={{ width: `${Math.min(Math.abs(approvalRateChange) * 2, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Baseline: {whatIfBaselineData.approvalRate.toFixed(1)}%</span>
              <span>New: {approvalRate.toFixed(1)}%</span>
            </div>
          </div>
          
          {/* Key Factors */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Gauge className="h-4 w-4" />
              <span>Key Risk Factors</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Credit Enquiries:</span> 
                <span>{scenario.maxCreditEnquiries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Credit Score:</span>
                <span>{scenario.creditScore}</span>
              </div>
              {scenario.chequeBounces && scenario.chequeBounces > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cheque Bounces:</span>
                  <span className="text-red-500 font-medium">{scenario.chequeBounces}</span>
                </div>
              )}
              {scenario.activeDpd90Plus && scenario.activeDpd90Plus > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">90+ DPD:</span>
                  <span className="text-red-500 font-medium">{scenario.activeDpd90Plus}</span>
                </div>
              )}
              {scenario.willfulDefault && (
                <div className="flex justify-between col-span-2">
                  <span className="text-muted-foreground">Willful Default:</span>
                  <span className="text-red-500 font-medium">Yes</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="pt-2 text-xs text-muted-foreground">
            <p>These projections are based on historical data analysis and statistical modeling.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectionPanel;
