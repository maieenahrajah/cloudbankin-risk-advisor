
import { Check, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PolicyVersion } from "@/data/mockData";

interface PolicySelectorProps {
  policies: PolicyVersion[];
  selectedPolicies: string[];
  setSelectedPolicies: (policies: string[]) => void;
}

const PolicySelector = ({
  policies,
  selectedPolicies,
  setSelectedPolicies,
}: PolicySelectorProps) => {
  const togglePolicy = (policyId: string) => {
    if (selectedPolicies.includes(policyId)) {
      // Don't remove if it's the last policy
      if (selectedPolicies.length > 1) {
        setSelectedPolicies(selectedPolicies.filter(id => id !== policyId));
      }
    } else {
      setSelectedPolicies([...selectedPolicies, policyId]);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Policy Versions</h2>
        <p className="text-sm text-muted-foreground">
          Select up to 3 policies to compare side by side
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {policies.map((policy) => {
          const isSelected = selectedPolicies.includes(policy.id);
          return (
            <div
              key={policy.id}
              className={`
                p-4 rounded-xl border transition-all cursor-pointer
                ${isSelected 
                  ? "border-primary bg-primary/5" 
                  : "hover:border-primary/50"}
              `}
              onClick={() => togglePolicy(policy.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{policy.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {policy.description}
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full flex items-center justify-center border">
                  {isSelected && <Check className="h-3 w-3" />}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <div>
                  <p className="text-muted-foreground">NPA</p>
                  <p className={`font-semibold ${
                    policy.performance.npa30Day < 3 ? "text-good" : 
                    policy.performance.npa30Day > 4 ? "text-poor" : ""
                  }`}>
                    {policy.performance.npa30Day}%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Approval</p>
                  <p className="font-semibold">
                    {policy.performance.approvalRate}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="p-4 rounded-xl border border-dashed flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
        >
          <div className="bg-muted rounded-full p-2 mb-2">
            <Plus className="h-5 w-5" />
          </div>
          <p className="font-medium">New Policy</p>
          <p className="text-sm text-muted-foreground">
            Create custom policy variant
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicySelector;
