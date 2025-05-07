
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TopRiskIndicators = () => {
  // Mock data for parameter impacts
  const parameterImpactData = [
    { name: "Credit Score", impact: 85, trend: "stable" },
    { name: "DTI Ratio", impact: 72, trend: "up" },
    { name: "Payment History", impact: 65, trend: "stable" },
    { name: "Income Stability", impact: 58, trend: "up" },
    { name: "Loan-to-Value", impact: 52, trend: "down" },
    { name: "Account Age", impact: 45, trend: "stable" },
    { name: "Recent Enquiries", impact: 38, trend: "up" }
  ];
  
  // Sort parameters by impact (descending)
  const sortedParameters = [...parameterImpactData].sort((a, b) => b.impact - a.impact);
  
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Top Risk Indicators</CardTitle>
        <CardDescription>Parameters with highest impact on loan defaults</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedParameters.map((param, index) => (
            <div 
              key={param.name} 
              className="flex items-center justify-between p-3 rounded-lg bg-card border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                  {index + 1}
                </Badge>
                <span className="font-medium">{param.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm bg-secondary/80 px-3 py-1 rounded-full">
                  Impact Score: <span className="font-medium">{param.impact.toFixed(1)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Impact scores are calculated based on correlation strength and predictive power using AI analysis.
        </p>
      </CardContent>
    </Card>
  );
};

export default TopRiskIndicators;
