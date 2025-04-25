
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PolicySelector from "@/components/policy-ab-testing/PolicySelector";
import PerformanceComparison from "@/components/policy-ab-testing/PerformanceComparison";
import CriteriaEditor from "@/components/policy-ab-testing/CriteriaEditor";
import { policyVersions } from "@/data/mockData";

const PolicyABTesting = () => {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([
    policyVersions[0].id,
    policyVersions[1].id,
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Policy A/B Testing</h1>
        <p className="text-muted-foreground">
          Compare different policy versions and their impact on performance
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <PolicySelector
            policies={policyVersions}
            selectedPolicies={selectedPolicies}
            setSelectedPolicies={setSelectedPolicies}
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance Comparison</TabsTrigger>
          <TabsTrigger value="criteria">Criteria Editor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <PerformanceComparison
                policies={policyVersions.filter(policy =>
                  selectedPolicies.includes(policy.id)
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="criteria">
          <Card>
            <CardContent className="pt-6">
              <CriteriaEditor
                policies={policyVersions.filter(policy =>
                  selectedPolicies.includes(policy.id)
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PolicyABTesting;
