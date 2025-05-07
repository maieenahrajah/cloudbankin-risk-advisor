
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CorrelationItem {
  parameter1: string;
  value: number;
}

const CorrelationHeatmap = () => {
  // Mock data for correlations
  const correlationData: CorrelationItem[] = [
    { parameter1: "Credit Score", value: -0.75 },
    { parameter1: "DPD", value: 0.82 },
    { parameter1: "ABB", value: -0.51 },
    { parameter1: "EIR", value: 0.65 },
    { parameter1: "Previous Defaults", value: 0.72 }
  ];
  
  // Helper function to get color based on correlation value
  const getCorrelationColor = (value: number) => {
    const absValue = Math.abs(value);
    // Positive correlations are blue, negative are red
    if (value > 0) {
      return `rgb(44, 123, 229, ${absValue})`;
    }
    return `rgb(239, 68, 68, ${absValue})`;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Risk Correlation</CardTitle>
        <CardDescription>Correlation of parameters with default risk</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          {correlationData.map((parameter) => {
            const correlation = parameter.value;
            const absCorrelation = Math.abs(correlation);
            
            return (
              <div key={parameter.parameter1} className="flex items-center">
                <div className="w-32 text-sm">{parameter.parameter1}</div>
                <div className="flex-1 px-2">
                  <div className="w-full h-6 bg-secondary rounded-md relative">
                    <div 
                      className="absolute top-0 bottom-0 rounded-md transition-all duration-300"
                      style={{
                        width: `${absCorrelation * 100}%`,
                        backgroundColor: getCorrelationColor(correlation),
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right font-mono text-sm">
                  {correlation.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>Positive values indicate higher default risk, negative values indicate lower risk.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CorrelationHeatmap;
