
import { StressScenario, StressTestResult } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCheck, Shield } from "lucide-react";

interface PortfolioResilienceProps {
  results: StressTestResult[];
  scenario: StressScenario;
}

const PortfolioResilience = ({ results, scenario }: PortfolioResilienceProps) => {
  // Calculate overall portfolio resilience
  const overallResilience = results.reduce((acc, result) => {
    const score = result.resilience === "high" ? 3 : result.resilience === "medium" ? 2 : 1;
    return acc + score;
  }, 0) / (results.length * 3) * 100;

  const getResilienceBadge = (resilience: string) => {
    switch (resilience) {
      case "high":
        return <Badge variant="outline" className="bg-good/10 text-good border-good/30">High</Badge>;
      case "medium":
        return <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30">Medium</Badge>;
      case "low":
        return <Badge variant="outline" className="bg-poor/10 text-poor border-poor/30">Low</Badge>;
      default:
        return null;
    }
  };

  const scenarioSeverity = scenario.impactSeverity;

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Portfolio Resilience Analysis</h2>
        <p className="text-sm text-muted-foreground">
          How well your loan portfolio withstands economic stress
        </p>
      </div>

      <div className="bg-muted/20 rounded-xl p-6 border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-medium">Overall Portfolio Resilience</h3>
            <p className="text-sm text-muted-foreground">
              Against {scenario.name.toLowerCase()} scenario
            </p>
          </div>
          <Shield className="h-10 w-10 text-primary opacity-70" />
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2 text-sm">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
          <Progress value={overallResilience} className="h-3" />
          <div className="mt-2 text-center">
            <span className="text-sm font-medium">
              {overallResilience < 40 ? "Low" : overallResilience < 70 ? "Medium" : "High"} Resilience ({Math.round(overallResilience)}%)
            </span>
          </div>
        </div>
      </div>

      <Alert variant={
        scenarioSeverity === "severe" || scenarioSeverity === "high" 
          ? "destructive" 
          : scenarioSeverity === "medium" 
            ? "default" 
            : "outline"
      }>
        {scenarioSeverity === "severe" || scenarioSeverity === "high" ? (
          <AlertTriangle className="h-4 w-4" />
        ) : (
          <CheckCheck className="h-4 w-4" />
        )}
        <AlertTitle>
          {scenarioSeverity === "severe" 
            ? "Significant Vulnerability Detected" 
            : scenarioSeverity === "high"
              ? "Portfolio Vulnerability"
              : scenarioSeverity === "medium"
                ? "Moderate Impact Expected"
                : "Low Impact Expected"
          }
        </AlertTitle>
        <AlertDescription>
          {scenarioSeverity === "severe" 
            ? "Your portfolio shows significant vulnerability to this economic scenario. Consider immediate policy adjustments." 
            : scenarioSeverity === "high"
              ? "Your portfolio is vulnerable to this stress scenario. Risk mitigation strategies are recommended."
              : scenarioSeverity === "medium"
                ? "Your portfolio would experience moderate impact under this scenario."
                : "Your portfolio is well-positioned to withstand this economic scenario."
          }
        </AlertDescription>
      </Alert>

      <div className="space-y-5">
        <h3 className="text-base font-medium">Loan Type Resilience</h3>
        
        {results.map((result) => (
          <div key={result.loanType} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">{result.loanType}</h4>
              {getResilienceBadge(result.resilience)}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">NPA Change</p>
                <p className="text-poor font-medium">+{result.npaChange}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Approval Impact</p>
                <p className="text-poor font-medium">{result.approvalRateChange}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Capital Impact</p>
                <p className="text-poor font-medium">{result.capitalImpact}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Stressed NPA</p>
                <p className="font-medium">{result.stressedNPA}%</p>
              </div>
            </div>
            
            <div className="mt-3">
              <h5 className="text-xs font-medium mb-1">Resilience Strategy</h5>
              <p className="text-xs text-muted-foreground">
                {result.resilience === "low" 
                  ? "Consider reducing exposure or increasing interest rates to compensate for higher risk." 
                  : result.resilience === "medium"
                    ? "Implement stricter underwriting criteria for new loans in this category."
                    : "This loan type demonstrates strong resilience. Consider strategic growth."
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioResilience;
