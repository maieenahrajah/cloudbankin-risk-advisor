
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

interface ScenarioControlsProps {
  scenario: {
    creditScore: number;
    maxCreditEnquiries: number;
    minABB: number;
    maxEIR: number;
  };
  setScenario: React.Dispatch<React.SetStateAction<{
    creditScore: number;
    maxCreditEnquiries: number;
    minABB: number;
    maxEIR: number;
  }>>;
  resetScenario: () => void;
}

const ScenarioControls = ({ scenario, setScenario, resetScenario }: ScenarioControlsProps) => {
  const handleCreditScoreChange = (value: number[]) => {
    setScenario((prev) => ({
      ...prev,
      creditScore: value[0],
    }));
  };

  const handleMaxCreditEnquiriesChange = (value: number[]) => {
    setScenario((prev) => ({
      ...prev,
      maxCreditEnquiries: value[0],
    }));
  };

  const handleMinABBChange = (value: number[]) => {
    setScenario((prev) => ({
      ...prev,
      minABB: value[0],
    }));
  };

  const handleMaxEIRChange = (value: number[]) => {
    setScenario((prev) => ({
      ...prev,
      maxEIR: value[0] / 100,
    }));
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Scenario Controls</CardTitle>
        <CardDescription>Adjust parameters to test "What-If" scenarios</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Credit Score Threshold */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="creditScore">Credit Score Threshold</Label>
            <span className="text-sm font-mono">{scenario.creditScore}</span>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowUp className="h-4 w-4 text-muted-foreground" />
            <Slider
              id="creditScore"
              min={500}
              max={800}
              step={5}
              value={[scenario.creditScore]}
              onValueChange={handleCreditScoreChange}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-muted-foreground">Minimum credit score required for approval</p>
        </div>

        {/* Max Credit Enquiries */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="maxCreditEnquiries">Max Credit Enquiries</Label>
            <span className="text-sm font-mono">{scenario.maxCreditEnquiries}</span>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
            <Slider
              id="maxCreditEnquiries"
              min={0}
              max={10}
              step={1}
              value={[scenario.maxCreditEnquiries]}
              onValueChange={handleMaxCreditEnquiriesChange}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-muted-foreground">Maximum number of recent credit enquiries allowed</p>
        </div>

        {/* Min ABB */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="minABB">Min Average Bank Balance</Label>
            <span className="text-sm font-mono">${scenario.minABB.toLocaleString()}</span>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowUp className="h-4 w-4 text-muted-foreground" />
            <Slider
              id="minABB"
              min={0}
              max={50000}
              step={1000}
              value={[scenario.minABB]}
              onValueChange={handleMinABBChange}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-muted-foreground">Minimum average bank balance required</p>
        </div>

        {/* Max EIR */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="maxEIR">Max Expense-to-Income Ratio</Label>
            <span className="text-sm font-mono">{(scenario.maxEIR * 100).toFixed(0)}%</span>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
            <Slider
              id="maxEIR"
              min={20}
              max={70}
              step={5}
              value={[scenario.maxEIR * 100]}
              onValueChange={handleMaxEIRChange}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-muted-foreground">Maximum allowed ratio of expenses to income</p>
        </div>

        <div className="pt-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={resetScenario}
          >
            Reset to Baseline
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScenarioControls;
