
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Info, TrendingUp, ChartLine, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const PredictionInsights = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">AI Prediction Insights</h2>
        <p className="text-sm text-muted-foreground">
          Key drivers and insights behind NPA forecasts
        </p>
      </div>

      <Alert className="border-primary/30 bg-primary/5">
        <TrendingUp className="h-4 w-4 text-primary" />
        <AlertTitle className="font-medium">Overall NPA Trend</AlertTitle>
        <AlertDescription className="text-sm mt-1">
          The NPA is projected to increase slightly by 0.3% over the next 6 months, 
          primarily driven by seasonal factors and projected interest rate changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-sm font-medium flex items-center gap-2">
          <ChartLine className="h-4 w-4" />
          Key Risk Factors
        </h3>
        
        <Card 
          className="bg-poor/5 border-l-4 border-poor rounded p-3 cursor-pointer transition-all hover:shadow-md"
          onClick={() => toggleExpand('personal')}
        >
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-poor mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Personal Loans</p>
              <p className="text-sm mt-0.5">
                Forecast predicts an increase in NPA rate from 3.2% to 3.8% due to rising 
                defaults among new-to-credit customers.
              </p>
              
              {expanded === 'personal' && (
                <div className="mt-3 text-sm border-t pt-2 space-y-1 text-muted-foreground">
                  <p><span className="font-medium text-foreground">Key Drivers:</span> Higher interest rates, economic slowdown in retail sectors</p>
                  <p><span className="font-medium text-foreground">Risk Mitigation:</span> Increase credit score threshold for new customers by 25 points</p>
                  <p><span className="font-medium text-foreground">Impact Estimate:</span> 0.4% reduction in projected NPA with suggested changes</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card 
          className="bg-amber-500/5 border-l-4 border-amber-500 rounded p-3 cursor-pointer transition-all hover:shadow-md"
          onClick={() => toggleExpand('business')}
        >
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Business Loans</p>
              <p className="text-sm mt-0.5">
                Projected increase from 4.1% to 5.2% NPA due to macroeconomic headwinds 
                affecting small businesses.
              </p>
              
              {expanded === 'business' && (
                <div className="mt-3 text-sm border-t pt-2 space-y-1 text-muted-foreground">
                  <p><span className="font-medium text-foreground">Key Drivers:</span> Supply chain disruptions, rising operational costs</p>
                  <p><span className="font-medium text-foreground">Risk Mitigation:</span> Enhanced cash flow analysis for high-risk sectors</p>
                  <p><span className="font-medium text-foreground">Impact Estimate:</span> 0.7% reduction in projected NPA with suggested changes</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card 
          className="bg-good/5 border-l-4 border-good rounded p-3 cursor-pointer transition-all hover:shadow-md"
          onClick={() => toggleExpand('home')}
        >
          <div className="flex items-start">
            <Info className="h-5 w-5 text-good mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Home Loans</p>
              <p className="text-sm mt-0.5">
                Expected to remain stable with only a marginal increase from 1.1% to 1.2% 
                due to strong collateral support.
              </p>
              
              {expanded === 'home' && (
                <div className="mt-3 text-sm border-t pt-2 space-y-1 text-muted-foreground">
                  <p><span className="font-medium text-foreground">Key Drivers:</span> Stable property market, good borrower profiles</p>
                  <p><span className="font-medium text-foreground">Risk Mitigation:</span> Maintain current policies, consider expansion</p>
                  <p><span className="font-medium text-foreground">Impact Estimate:</span> Potential for 0.2% growth in portfolio size with minimal risk</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-3 mt-2">
        <h3 className="text-sm font-medium flex items-center gap-2">
          <Gauge className="h-4 w-4" />
          Policy Recommendations
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start">
            <Badge variant="outline" className="mt-0.5 mr-2 bg-primary/5">1</Badge>
            <p>
              Tighten credit policy for personal loans by increasing minimum credit score 
              requirement to 700+ for new customers.
            </p>
          </div>
          <div className="flex items-start">
            <Badge variant="outline" className="mt-0.5 mr-2 bg-primary/5">2</Badge>
            <p>
              Implement enhanced cash flow analysis for business loans to better assess 
              repayment capacity.
            </p>
          </div>
          <div className="flex items-start">
            <Badge variant="outline" className="mt-0.5 mr-2 bg-primary/5">3</Badge>
            <p>
              Consider offering debt consolidation products to high-risk customers
              to reduce default probability.
            </p>
          </div>
          <div className="flex items-start">
            <Badge variant="outline" className="mt-0.5 mr-2 bg-primary/5">4</Badge>
            <p>
              Establish early warning systems based on account behavior patterns to identify
              potential defaults 60-90 days in advance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionInsights;
