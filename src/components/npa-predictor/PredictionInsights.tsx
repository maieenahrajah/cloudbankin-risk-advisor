
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Info, TrendingUp } from "lucide-react";

const PredictionInsights = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">AI Prediction Insights</h2>
        <p className="text-sm text-muted-foreground">
          Key drivers and insights behind NPA forecasts
        </p>
      </div>

      <Alert>
        <TrendingUp className="h-4 w-4" />
        <AlertTitle className="font-medium">Overall NPA Trend</AlertTitle>
        <AlertDescription className="text-sm mt-1">
          The NPA is projected to increase slightly by 0.3% over the next 6 months, 
          primarily driven by seasonal factors and projected interest rate changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Key Risk Factors</h3>
        
        <div className="bg-poor/5 border-l-4 border-poor rounded p-3">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-poor mr-2 mt-0.5" />
            <div>
              <p className="font-medium">Personal Loans</p>
              <p className="text-sm mt-0.5">
                Forecast predicts an increase in NPA rate from 3.2% to 3.8% due to rising 
                defaults among new-to-credit customers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded p-3">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
            <div>
              <p className="font-medium">Business Loans</p>
              <p className="text-sm mt-0.5">
                Projected increase from 4.1% to 5.2% NPA due to macroeconomic headwinds 
                affecting small businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-good/5 border-l-4 border-good rounded p-3">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-good mr-2 mt-0.5" />
            <div>
              <p className="font-medium">Home Loans</p>
              <p className="text-sm mt-0.5">
                Expected to remain stable with only a marginal increase from 1.1% to 1.2% 
                due to strong collateral support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Recommendations</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <Badge className="mt-0.5 mr-2">1</Badge>
            <p>
              Tighten credit policy for personal loans by increasing minimum credit score 
              requirement to 700+ for new customers.
            </p>
          </div>
          <div className="flex items-start">
            <Badge className="mt-0.5 mr-2">2</Badge>
            <p>
              Implement enhanced cash flow analysis for business loans to better assess 
              repayment capacity.
            </p>
          </div>
          <div className="flex items-start">
            <Badge className="mt-0.5 mr-2">3</Badge>
            <p>
              Consider offering debt consolidation products to high-risk customers
              to reduce default probability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionInsights;
