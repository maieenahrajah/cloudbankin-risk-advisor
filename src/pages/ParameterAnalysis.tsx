
import CorrelationHeatmap from "@/components/parameter-analysis/CorrelationHeatmap";
import DefaultRateChart from "@/components/parameter-analysis/DefaultRateChart";
import TopRiskIndicators from "@/components/parameter-analysis/TopRiskIndicators";

const ParameterAnalysis = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Parameter Analysis</h1>
        <p className="text-muted-foreground">
          Analyze risk indicators that impact loan performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DefaultRateChart />
        <CorrelationHeatmap />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <TopRiskIndicators />
      </div>
    </div>
  );
};

export default ParameterAnalysis;
