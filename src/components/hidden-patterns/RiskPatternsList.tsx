
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";

interface RiskPattern {
  id: string;
  pattern: string;  // Changed from title
  description: string;
  confidence: number;
  impact: number;
  variables: string[];
  actionable: boolean;
  impactedLoans: number;
  defaultRate: number;
  averageRate: number;
  increase: number;
}

interface RiskPatternsListProps {
  patterns: RiskPattern[];
}

const RiskPatternsList = ({ patterns }: RiskPatternsListProps) => {
  return (
    <div className="space-y-5">
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">AI-Detected Risk Patterns</h2>
        <p className="text-sm text-muted-foreground">
          Patterns identified by AI with significant deviation from average default rates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patterns.map((pattern) => (
          <Card key={pattern.id} className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-6 py-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">{pattern.pattern}</h3>
                <Badge variant={pattern.confidence >= 90 ? "default" : "outline"}>
                  {pattern.confidence}% confidence
                </Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <AlertTriangle className="h-4 w-4 mr-1 text-poor" />
                <span>Affects {pattern.impactedLoans} loans</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Default Rate</p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-lg font-semibold">{pattern.defaultRate}%</span>
                    <span className="text-poor text-xs">
                      +{pattern.increase.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Portfolio Average</p>
                  <span className="text-lg font-semibold">{pattern.averageRate}%</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Portfolio Average</span>
                  <span>Pattern</span>
                </div>
                <Progress 
                  value={(pattern.defaultRate / (pattern.defaultRate * 1.2)) * 100} 
                  className="h-2"
                />
              </div>

              <p className="mt-4 text-sm">{pattern.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RiskPatternsList;
