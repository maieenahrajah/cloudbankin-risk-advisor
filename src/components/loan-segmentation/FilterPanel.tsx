
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface FilterPanelProps {
  filters: {
    creditScoreMin: number;
    creditScoreMax: number;
    dpdMax: number;
    abbMin: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    creditScoreMin: number;
    creditScoreMax: number;
    dpdMax: number;
    abbMin: number;
  }>>;
}

const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  const handleCreditScoreChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      creditScoreMin: value[0],
      creditScoreMax: value[1],
    }));
  };

  const handleDpdMaxChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      dpdMax: value[0],
    }));
  };

  const handleAbbMinChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      abbMin: value[0],
    }));
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Filters</CardTitle>
        <CardDescription>Refine the loan portfolio view</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Credit Score Range */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="creditScore">Credit Score Range</Label>
            <span className="text-sm text-muted-foreground">
              {filters.creditScoreMin} - {filters.creditScoreMax}
            </span>
          </div>
          <Slider
            id="creditScore"
            min={500}
            max={800}
            step={10}
            value={[filters.creditScoreMin, filters.creditScoreMax]}
            onValueChange={handleCreditScoreChange}
            className="py-4"
          />
        </div>

        {/* Max DPD */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="dpd">Max Days Past Due (DPD)</Label>
            <span className="text-sm text-muted-foreground">{filters.dpdMax} days</span>
          </div>
          <Slider
            id="dpd"
            min={0}
            max={90}
            step={5}
            value={[filters.dpdMax]}
            onValueChange={handleDpdMaxChange}
            className="py-4"
          />
        </div>

        {/* Min Average Bank Balance */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="abb">Min Avg. Bank Balance</Label>
            <span className="text-sm text-muted-foreground">${filters.abbMin.toLocaleString()}</span>
          </div>
          <Slider
            id="abb"
            min={0}
            max={100000}
            step={5000}
            value={[filters.abbMin]}
            onValueChange={handleAbbMinChange}
            className="py-4"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterPanel;
