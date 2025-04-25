
import { StressScenario } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

interface ScenarioSelectorProps {
  scenarios: StressScenario[];
  selectedScenario: StressScenario;
  onSelectScenario: (scenario: StressScenario) => void;
}

const ScenarioSelector = ({
  scenarios,
  selectedScenario,
  onSelectScenario,
}: ScenarioSelectorProps) => {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "severe":
        return <Badge variant="destructive">Severe</Badge>;
      case "high":
        return <Badge variant="outline" className="bg-poor/10 text-poor border-poor/30">High</Badge>;
      case "medium":
        return <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30">Medium</Badge>;
      case "low":
        return <Badge variant="outline" className="bg-good/10 text-good border-good/30">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Economic Stress Scenarios</h2>
        <p className="text-sm text-muted-foreground">
          Select a scenario to analyze its impact on your portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`
              p-4 rounded-lg border transition-all cursor-pointer
              ${selectedScenario.id === scenario.id 
                ? "border-primary bg-primary/5" 
                : "hover:border-primary/50 hover:bg-primary/5"}
            `}
            onClick={() => onSelectScenario(scenario)}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-medium">{scenario.name}</h3>
              {getSeverityBadge(scenario.impactSeverity)}
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {scenario.description}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Interest Rate</p>
                <p className={scenario.parameters.interestRateChange > 0 
                  ? "text-poor" 
                  : scenario.parameters.interestRateChange < 0 
                    ? "text-good" 
                    : ""
                }>
                  {scenario.parameters.interestRateChange > 0 ? "+" : ""}
                  {scenario.parameters.interestRateChange}%
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Unemployment</p>
                <p className={scenario.parameters.unemploymentRateChange > 0 
                  ? "text-poor" 
                  : scenario.parameters.unemploymentRateChange < 0 
                    ? "text-good" 
                    : ""
                }>
                  {scenario.parameters.unemploymentRateChange > 0 ? "+" : ""}
                  {scenario.parameters.unemploymentRateChange}%
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">GDP Growth</p>
                <p className={scenario.parameters.gdpGrowthChange > 0 
                  ? "text-good" 
                  : scenario.parameters.gdpGrowthChange < 0 
                    ? "text-poor" 
                    : ""
                }>
                  {scenario.parameters.gdpGrowthChange > 0 ? "+" : ""}
                  {scenario.parameters.gdpGrowthChange}%
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Inflation</p>
                <p className={scenario.parameters.inflationChange > 0 
                  ? "text-poor" 
                  : scenario.parameters.inflationChange < 0 
                    ? "text-good" 
                    : ""
                }>
                  {scenario.parameters.inflationChange > 0 ? "+" : ""}
                  {scenario.parameters.inflationChange}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioSelector;
