
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { whatIfBaselineData } from "@/data/mockData";
import { calculateRiskScore } from "@/lib/riskCalculations";
import { Badge } from "@/components/ui/badge";

interface AIRecommendationsProps {
  scenario: {
    creditScore: number;
    maxCreditEnquiries: number;
    minABB: number;
    maxEIR: number;
    [key: string]: any;
  };
}

const AIRecommendations = ({ scenario }: AIRecommendationsProps) => {
  // Generate insights based on scenario parameters compared to baseline
  const generateInsights = () => {
    const insights = [];
    
    // Credit score insights
    if (scenario.creditScore > whatIfBaselineData.creditScore + 30) {
      insights.push({
        text: "High credit score threshold may reduce eligible borrower pool significantly.",
        type: "warning",
      });
    } else if (scenario.creditScore < whatIfBaselineData.creditScore - 30) {
      insights.push({
        text: "Low credit score threshold increases NPA risk by 18-25% based on historical data.",
        type: "risk",
      });
    }
    
    // Credit enquiries insights
    if (scenario.maxCreditEnquiries > whatIfBaselineData.maxCreditEnquiries + 2) {
      insights.push({
        text: "Allowing more credit enquiries has strong correlation with default rates in the first 12 months.",
        type: "risk",
      });
    }
    
    // Minimum ABB insights
    if (scenario.minABB > whatIfBaselineData.minABB + 10000) {
      insights.push({
        text: "Higher ABB requirement will reduce approval rates, particularly among self-employed applicants.",
        type: "info",
      });
    }
    
    // EIR insights
    if (scenario.maxEIR > whatIfBaselineData.maxEIR + 0.1) {
      insights.push({
        text: "Higher expense-to-income ratio typically results in 8-12% increased NPA within 18 months.",
        type: "risk",
      });
    }
    
    // Advanced parameter insights
    if (scenario.chequeBounces && scenario.chequeBounces > 0) {
      insights.push({
        text: `${scenario.chequeBounces} cheque bounce(s) increases default probability by ${(scenario.chequeBounces * 15).toFixed(0)}% for similar borrowers.`,
        type: "risk",
      });
    }
    
    if (scenario.willfulDefault) {
      insights.push({
        text: "Willful default in history has 78% correlation with future default events.",
        type: "critical",
      });
    }
    
    const dpd90Plus = (scenario.activeDpd90Plus || 0) + (scenario.closedDpd90Plus || 0);
    if (dpd90Plus > 0) {
      insights.push({
        text: `${dpd90Plus} account(s) with 90+ DPD is a strong predictor of future defaults.`,
        type: "critical",
      });
    }
    
    // Generate recommendations based on risk score
    const riskScore = calculateRiskScore(scenario);
    if (riskScore > 800) {
      insights.push({
        text: "Current policy parameters are overly restrictive. Consider relaxing less impactful criteria.",
        type: "optimization",
      });
    } else if (riskScore < 500) {
      insights.push({
        text: "Current policy parameters create high-risk exposure. Immediate adjustments recommended.",
        type: "critical",
      });
    }
    
    // If we don't have many insights, add a general one
    if (insights.length < 2) {
      insights.push({
        text: "Policy parameters are within reasonable thresholds based on historical performance data.",
        type: "info",
      });
    }
    
    return insights;
  };

  const insights = generateInsights();
  
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">AI Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 pb-2">
              <Badge 
                variant={
                  insight.type === "risk" ? "destructive" : 
                  insight.type === "critical" ? "destructive" : 
                  insight.type === "warning" ? "warning" : 
                  insight.type === "optimization" ? "outline" : 
                  "secondary"
                }
                className="mt-0.5"
              >
                {insight.type === "risk" || insight.type === "critical" ? "Risk" : 
                 insight.type === "warning" ? "Warning" : 
                 insight.type === "optimization" ? "Optimize" : "Info"}
              </Badge>
              <p className="text-sm">{insight.text}</p>
            </div>
          ))}
          
          {insights.some(i => i.type === "critical") && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-2 mt-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <p className="text-xs text-red-600 dark:text-red-400">Critical risk factors detected that significantly increase NPA probability.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
