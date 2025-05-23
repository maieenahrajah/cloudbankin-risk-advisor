
import { useState } from "react";
import ScenarioControls from "@/components/what-if/ScenarioControls";
import ProjectionPanel from "@/components/what-if/ProjectionPanel";
import { whatIfBaselineData } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIRecommendations from "@/components/what-if/AIRecommendations";
import AdvancedControls from "@/components/what-if/AdvancedControls";
import ScenarioManager from "@/components/what-if/ScenarioManager";

const WhatIfScenarios = () => {
  // Create more dramatic default scenario with varied values for advanced parameters
  const [scenario, setScenario] = useState({
    // Basic variables
    creditScore: whatIfBaselineData.creditScore,
    maxCreditEnquiries: whatIfBaselineData.maxCreditEnquiries,
    minABB: whatIfBaselineData.minABB,
    maxEIR: whatIfBaselineData.maxEIR,
    
    // Additional variables with more dramatic values
    chequeBounces: 3,
    willfulDefault: false,
    unsecuredLoansCount: 4,
    securedLoansCount: 2,
    bureauHistory: 24, // Relatively short history (2 years)
    
    // DPD variables with more varied values
    activeDpd1Plus: 3,
    closedDpd1Plus: 2,
    activeDpd30Plus: 2,
    closedDpd30Plus: 1,
    activeDpd60Plus: 1,
    closedDpd60Plus: 1,
    activeDpd90Plus: 0,
    closedDpd90Plus: 1,
    
    // Credit card and loan history with more significant values
    ccSettlements3Years: 1,
    ccWriteOffs3Years: 1,
    nonCcSettlements3Years: 0,
    nonCcWriteOffs3Years: 1,
    
    // Default and account counts
    activeDefaultsCount: 1,
    closedDefaultsCount: 2,
    openLoanAccounts: 3,
    closedLoanAccounts: 4,
    
    // EMI bounce counts with more variation
    emiBounce0: 1,
    emiBounce1: 2,
    emiBounce2: 1,
    emiBounce3: 0,
  });

  const [savedScenarios, setSavedScenarios] = useState([]);
  
  const resetScenario = () => {
    setScenario({
      // Basic variables
      creditScore: whatIfBaselineData.creditScore,
      maxCreditEnquiries: whatIfBaselineData.maxCreditEnquiries,
      minABB: whatIfBaselineData.minABB,
      maxEIR: whatIfBaselineData.maxEIR,
      
      // Additional variables with more dramatic values
      chequeBounces: 3,
      willfulDefault: false,
      unsecuredLoansCount: 4,
      securedLoansCount: 2,
      bureauHistory: 24,
      
      // DPD variables with more varied values
      activeDpd1Plus: 3,
      closedDpd1Plus: 2,
      activeDpd30Plus: 2,
      closedDpd30Plus: 1,
      activeDpd60Plus: 1,
      closedDpd60Plus: 1,
      activeDpd90Plus: 0,
      closedDpd90Plus: 1,
      
      // Credit card and loan history with more significant values
      ccSettlements3Years: 1,
      ccWriteOffs3Years: 1,
      nonCcSettlements3Years: 0,
      nonCcWriteOffs3Years: 1,
      
      // Default and account counts
      activeDefaultsCount: 1,
      closedDefaultsCount: 2,
      openLoanAccounts: 3,
      closedLoanAccounts: 4,
      
      // EMI bounce counts with more variation
      emiBounce0: 1,
      emiBounce1: 2,
      emiBounce2: 1,
      emiBounce3: 0,
    });
  };

  const saveScenario = (name) => {
    setSavedScenarios([...savedScenarios, {
      id: Date.now(),
      name,
      data: { ...scenario },
      timestamp: new Date().toISOString()
    }]);
  };

  const loadScenario = (savedScenario) => {
    setScenario({ ...savedScenario.data });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">What-If Scenarios</h1>
        <p className="text-muted-foreground">
          Test different policy changes and simulate their impact
        </p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="basic">Basic Controls</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Controls</TabsTrigger>
        </TabsList>
        <div className="space-y-6">
          <TabsContent value="basic" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScenarioControls 
                scenario={scenario} 
                setScenario={setScenario}
                resetScenario={resetScenario}
                saveScenario={saveScenario}
              />
              <div className="space-y-6">
                <ProjectionPanel scenario={scenario} />
                <AIRecommendations scenario={scenario} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdvancedControls 
                scenario={scenario} 
                setScenario={setScenario}
              />
              <div className="space-y-6">
                <ProjectionPanel scenario={scenario} />
                <AIRecommendations scenario={scenario} />
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
      
      <ScenarioManager 
        savedScenarios={savedScenarios} 
        loadScenario={loadScenario} 
        saveScenario={saveScenario}
      />

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-2">About What-If Scenarios</h3>
        <p className="text-sm text-muted-foreground">
          This tool helps you test hypothetical policy changes before implementation.
          Adjust the policy parameters to see how they would affect your NPA 
          and loan approval rates. Advanced mode provides deeper analysis with 
          additional risk factors.
        </p>
      </div>
    </div>
  );
};

export default WhatIfScenarios;
