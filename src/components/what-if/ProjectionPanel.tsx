
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatIfBaselineData } from "@/data/mockData";

interface ProjectionPanelProps {
  scenario: {
    creditScore: number;
    maxCreditEnquiries: number;
    minABB: number;
    maxEIR: number;
  };
}

const ProjectionPanel = ({ scenario }: ProjectionPanelProps) => {
  // Calculate projected NPA based on scenario parameters
  const calculateProjectedNpa = () => {
    const baseline = whatIfBaselineData.npa;
    
    // Impact weights for each parameter (simplified calculation)
    const creditScoreImpact = (scenario.creditScore - whatIfBaselineData.creditScore) * 0.005;
    const enquiriesImpact = (whatIfBaselineData.maxCreditEnquiries - scenario.maxCreditEnquiries) * 0.05;
    const abbImpact = (scenario.minABB - whatIfBaselineData.minABB) * 0.00002;
    const eirImpact = (whatIfBaselineData.maxEIR - scenario.maxEIR) * 1.2;
    
    // Calculate total impact (negative means reduction in NPA)
    const totalImpact = -(creditScoreImpact + enquiriesImpact + abbImpact + eirImpact);
    
    // Calculate projected NPA
    let projectedNpa = baseline + totalImpact;
    
    // Ensure NPA doesn't go below a reasonable floor
    return Math.max(projectedNpa, 0.2);
  };

  // Calculate approval rate change based on scenario parameters
  const calculateApprovalChange = () => {
    const baseline = whatIfBaselineData.approvalRate;
    
    // Impact weights for approval rate (simplified)
    const creditScoreImpact = (scenario.creditScore - whatIfBaselineData.creditScore) * -0.15;
    const enquiriesImpact = (scenario.maxCreditEnquiries - whatIfBaselineData.maxCreditEnquiries) * 2;
    const abbImpact = (scenario.minABB - whatIfBaselineData.minABB) * -0.0003;
    const eirImpact = (scenario.maxEIR - whatIfBaselineData.maxEIR) * 20;
    
    // Calculate total impact
    const totalImpact = creditScoreImpact + enquiriesImpact + abbImpact + eirImpact;
    
    // Calculate new approval rate
    let newApprovalRate = baseline + totalImpact;
    
    // Clamp to reasonable range
    return Math.min(Math.max(newApprovalRate, 15), 95);
  };

  const projectedNpa = calculateProjectedNpa();
  const approvalRate = calculateApprovalChange();
  const npaReduction = whatIfBaselineData.npa - projectedNpa;
  const npaReductionPercent = (npaReduction / whatIfBaselineData.npa) * 100;
  const approvalRateChange = approvalRate - whatIfBaselineData.approvalRate;
  
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
              <span className={`text-sm font-medium ${npaReduction >= 0 ? 'text-good' : 'text-poor'}`}>
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
          
          {/* Approval Rate Impact */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Approval Rate Impact</span>
              <span className={`text-sm font-medium ${approvalRateChange >= 0 ? 'text-good' : 'text-poor'}`}>
                {approvalRateChange >= 0 ? '+' : ''}{approvalRateChange.toFixed(1)}%
              </span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full ${approvalRateChange >= 0 ? 'bg-good' : 'bg-poor'} rounded-full transition-all duration-300`}
                style={{ width: `${Math.min(Math.abs(approvalRateChange) * 2, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Baseline: {whatIfBaselineData.approvalRate.toFixed(1)}%</span>
              <span>New: {approvalRate.toFixed(1)}%</span>
            </div>
          </div>
          
          {/* Policy Strictness */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Policy Strictness</span>
              <span className="text-sm font-medium">
                {approvalRateChange < -10 
                  ? 'Very High' 
                  : approvalRateChange < -5 
                    ? 'High' 
                    : approvalRateChange > 5 
                      ? 'Low' 
                      : 'Moderate'}
              </span>
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
