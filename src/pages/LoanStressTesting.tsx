
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScenarioSelector from "@/components/loan-stress/ScenarioSelector";
import StressImpactChart from "@/components/loan-stress/StressImpactChart";
import PortfolioResilience from "@/components/loan-stress/PortfolioResilience";
import { stressScenarios, stressTestResults } from "@/data/mockData";

const LoanStressTesting = () => {
  const [selectedScenario, setSelectedScenario] = useState(stressScenarios[1]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Loan Stress Testing</h1>
        <p className="text-muted-foreground">
          Simulate economic shocks and their impact on your loan portfolio
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <ScenarioSelector
            scenarios={stressScenarios}
            selectedScenario={selectedScenario}
            onSelectScenario={setSelectedScenario}
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="impact" className="space-y-4">
        <TabsList>
          <TabsTrigger value="impact">Stress Impact</TabsTrigger>
          <TabsTrigger value="resilience">Portfolio Resilience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="impact" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <StressImpactChart 
                results={stressTestResults} 
                scenario={selectedScenario} 
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resilience">
          <Card>
            <CardContent className="pt-6">
              <PortfolioResilience 
                results={stressTestResults}
                scenario={selectedScenario}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoanStressTesting;
