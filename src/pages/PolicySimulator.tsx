
import { useState } from "react";
import GoalInput from "@/components/policy-simulator/GoalInput";
import RecommendationCard from "@/components/policy-simulator/RecommendationCard";
import NpaImpactChart from "@/components/policy-simulator/NpaImpactChart";
import { policyRecommendations } from "@/data/mockData";

const PolicySimulator = () => {
  const [targetNpa, setTargetNpa] = useState(1.0);
  const currentNpa = 2.0; // Mock current NPA

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Policy Simulator</h1>
        <p className="text-muted-foreground">
          Set a goal and receive AI-driven policy recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <GoalInput 
            targetNpa={targetNpa} 
            setTargetNpa={setTargetNpa} 
            currentNpa={currentNpa} 
          />
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {policyRecommendations.map((recommendation, index) => (
            <RecommendationCard 
              key={index} 
              recommendation={recommendation} 
            />
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <NpaImpactChart currentNpa={currentNpa} targetNpa={targetNpa} />
        </div>
      </div>
    </div>
  );
};

export default PolicySimulator;
