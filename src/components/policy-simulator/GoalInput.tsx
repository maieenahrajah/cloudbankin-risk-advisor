
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface GoalInputProps {
  targetNpa: number;
  setTargetNpa: (value: number) => void;
  currentNpa: number;
}

const GoalInput = ({ targetNpa, setTargetNpa, currentNpa }: GoalInputProps) => {
  const handleChange = (value: number[]) => {
    setTargetNpa(value[0]);
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Define Your Goal</CardTitle>
        <CardDescription>Set target NPA for policy recommendations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="targetNpa">Target Non-Performing Assets (NPA)</Label>
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <Slider
                id="targetNpa"
                min={0.1}
                max={3}
                step={0.1}
                value={[targetNpa]}
                onValueChange={handleChange}
              />
            </div>
            <div className="w-16 text-center font-mono text-lg">
              {targetNpa.toFixed(1)}%
            </div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Current NPA: {currentNpa.toFixed(1)}%</span>
            <span>Reduction Goal: {(currentNpa - targetNpa).toFixed(1)}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalInput;
