
import { useState } from "react";
import ScenarioControls from "@/components/what-if/ScenarioControls";
import ProjectionPanel from "@/components/what-if/ProjectionPanel";
import { whatIfBaselineData } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIRecommendations from "@/components/what-if/AIRecommendations";
import AdvancedControls from "@/components/what-if/AdvancedControls";
import ScenarioManager from "@/components/what-if/ScenarioManager";

const WhatIfScenarios = () => {
  const [scenario, setScenario] = useState({
    // Basic variables
    creditScore: whatIfBaselineData.creditScore,
    maxCreditEnquiries: whatIfBaselineData.maxCreditEnquiries,
    minABB: whatIfBaselineData.minABB,
    maxEIR: whatIfBaselineData.maxEIR,
    
    // Additional variables
    chequeBounces: whatIfBaselineData.chequeBounces,
    willfulDefault: whatIfBaselineData.willfulDefault,
    unsecuredLoansCount: whatIfBaselineData.unsecuredLoansCount,
    securedLoansCount: whatIfBaselineData.securedLoansCount,
    bureauHistory: whatIfBaselineData.bureauHistory,
    
    // DPD variables
    activeDpd1Plus: whatIfBaselineData.activeDpd1Plus,
    closedDpd1Plus: whatIfBaselineData.closedDpd1Plus,
    activeDpd30Plus: whatIfBaselineData.activeDpd30Plus,
    closedDpd30Plus: whatIfBaselineData.closedDpd30Plus,
    activeDpd60Plus: whatIfBaselineData.activeDpd60Plus,
    closedDpd60Plus: whatIfBaselineData.closedDpd60Plus,
    activeDpd90Plus: whatIfBaselineData.activeDpd90Plus,
    closedDpd90Plus: whatIfBaselineData.closedDpd90Plus,
    
    // Credit card and loan history
    ccSettlements3Years: whatIfBaselineData.ccSettlements3Years,
    ccWriteOffs3Years: whatIfBaselineData.ccWriteOffs3Years,
    nonCcSettlements3Years: whatIfBaselineData.nonCcSettlements3Years,
    nonCcWriteOffs3Years: whatIfBaselineData.nonCcWriteOffs3Years,
    
    // Default and account counts
    activeDefaultsCount: whatIfBaselineData.activeDefaultsCount,
    closedDefaultsCount: whatIfBaselineData.closedDefaultsCount,
    openLoanAccounts: whatIfBaselineData.openLoanAccounts,
    closedLoanAccounts: whatIfBaselineData.closedLoanAccounts,
    
    // EMI bounce counts
    emiBounce0: whatIfBaselineData.emiBounce0,
    emiBounce1: whatIfBaselineData.emiBounce1,
    emiBounce2: whatIfBaselineData.emiBounce2,
    emiBounce3: whatIfBaselineData.emiBounce3,
  });

  const [savedScenarios, setSavedScenarios] = useState([]);
  
  const resetScenario = () => {
    setScenario({
      creditScore: whatIfBaselineData.creditScore,
      maxCreditEnquiries: whatIfBaselineData.maxCreditEnquiries,
      minABB: whatIfBaselineData.minABB,
      maxEIR: whatIfBaselineData.maxEIR,
      
      chequeBounces: whatIfBaselineData.chequeBounces,
      willfulDefault: whatIfBaselineData.willfulDefault,
      unsecuredLoansCount: whatIfBaselineData.unsecuredLoansCount,
      securedLoansCount: whatIfBaselineData.securedLoansCount,
      bureauHistory: whatIfBaselineData.bureauHistory,
      
      activeDpd1Plus: whatIfBaselineData.activeDpd1Plus,
      closedDpd1Plus: whatIfBaselineData.closedDpd1Plus,
      activeDpd30Plus: whatIfBaselineData.activeDpd30Plus,
      closedDpd30Plus: whatIfBaselineData.closedDpd30Plus,
      activeDpd60Plus: whatIfBaselineData.activeDpd60Plus,
      closedDpd60Plus: whatIfBaselineData.closedDpd60Plus,
      activeDpd90Plus: whatIfBaselineData.activeDpd90Plus,
      closedDpd90Plus: whatIfBaselineData.closedDpd90Plus,
      
      ccSettlements3Years: whatIfBaselineData.ccSettlements3Years,
      ccWriteOffs3Years: whatIfBaselineData.ccWriteOffs3Years,
      nonCcSettlements3Years: whatIfBaselineData.nonCcSettlements3Years,
      nonCcWriteOffs3Years: whatIfBaselineData.nonCcWriteOffs3Years,
      
      activeDefaultsCount: whatIfBaselineData.activeDefaultsCount,
      closedDefaultsCount: whatIfBaselineData.closedDefaultsCount,
      openLoanAccounts: whatIfBaselineData.openLoanAccounts,
      closedLoanAccounts: whatIfBaselineData.closedLoanAccounts,
      
      emiBounce0: whatIfBaselineData.emiBounce0,
      emiBounce1: whatIfBaselineData.emiBounce1,
      emiBounce2: whatIfBaselineData.emiBounce2,
      emiBounce3: whatIfBaselineData.emiBounce3,
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
