
import { useState } from "react";
import ScenarioControls from "@/components/what-if/ScenarioControls";
import ProjectionPanel from "@/components/what-if/ProjectionPanel";
import { whatIfBaselineData } from "@/data/mockData";

const WhatIfScenarios = () => {
  const [scenario, setScenario] = useState({
    creditScore: whatIfBaselineData.creditScore,
    maxCreditEnquiries: whatIfBaselineData.maxCreditEnquiries,
    minABB: whatIfBaselineData.minABB,
    maxEIR: whatIfBaselineData.maxEIR,
  });

  const resetScenario = () => {
    setScenario({
      creditScore: whatIfBaselineData.creditScore,
      maxCreditEnquiries: whatIfBaselineData.maxCreditEnquiries,
      minABB: whatIfBaselineData.minABB,
      maxEIR: whatIfBaselineData.maxEIR,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">What-If Scenarios</h1>
        <p className="text-muted-foreground">
          Test different policy changes and simulate their impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScenarioControls 
          scenario={scenario} 
          setScenario={setScenario}
          resetScenario={resetScenario}
        />
        <ProjectionPanel scenario={scenario} />
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-2">About What-If Scenarios</h3>
        <p className="text-sm text-muted-foreground">
          This tool helps you test hypothetical policy changes before implementation.
          Adjust the policy parameters on the left to see how they would affect your NPA 
          and loan approval rates. Results are based on historical data analysis.
        </p>
      </div>
    </div>
  );
};

export default WhatIfScenarios;
