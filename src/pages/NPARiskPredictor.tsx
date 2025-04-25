
import { Card, CardContent } from "@/components/ui/card";
import NPAForecastChart from "@/components/npa-predictor/NPAForecastChart";
import RiskCategoryTable from "@/components/npa-predictor/RiskCategoryTable";
import PredictionInsights from "@/components/npa-predictor/PredictionInsights";
import { npaForecastData, riskCategoryForecasts } from "@/data/mockData";

const NPARiskPredictor = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">NPA Risk Predictor</h1>
        <p className="text-muted-foreground">
          Predict future NPA levels based on historical loan data
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <NPAForecastChart data={npaForecastData} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <RiskCategoryTable categories={riskCategoryForecasts} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <PredictionInsights />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NPARiskPredictor;
