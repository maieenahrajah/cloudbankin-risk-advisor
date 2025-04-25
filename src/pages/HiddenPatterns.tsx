
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RiskPatternsList from "@/components/hidden-patterns/RiskPatternsList";
import CorrelationHeatmap from "@/components/hidden-patterns/CorrelationHeatmap";
import PatternScatterPlot from "@/components/hidden-patterns/PatternScatterPlot";
import { hiddenRiskPatterns } from "@/data/mockData";

const HiddenPatterns = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hidden Pattern Detector</h1>
        <p className="text-muted-foreground">
          Discover hidden risk patterns in your loan portfolio
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <RiskPatternsList patterns={hiddenRiskPatterns} />
        </CardContent>
      </Card>

      <Tabs defaultValue="correlations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="correlations">Correlation Analysis</TabsTrigger>
          <TabsTrigger value="scatter">Pattern Visualization</TabsTrigger>
        </TabsList>
        
        <TabsContent value="correlations">
          <Card>
            <CardContent className="pt-6">
              <CorrelationHeatmap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scatter">
          <Card>
            <CardContent className="pt-6">
              <PatternScatterPlot />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HiddenPatterns;
