
import { useState } from "react";
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { loanData } from "@/data/mockData";

const PatternScatterPlot = () => {
  const [xAxis, setXAxis] = useState("creditScore");
  const [yAxis, setYAxis] = useState("eir");

  const dataFieldMap = {
    creditScore: { name: "Credit Score", domain: [500, 800] },
    dpd: { name: "Days Past Due", domain: [0, 80] },
    abb: { name: "Average Bank Balance (₹)", domain: [0, 100000] },
    eir: { name: "Expense-to-Income Ratio", domain: [0, 1] },
  };

  const formatValue = (value: number, axis: string) => {
    switch (axis) {
      case "eir":
        return `${(value * 100).toFixed(0)}%`;
      case "abb":
        return `₹${value.toLocaleString()}`;
      default:
        return value;
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Pattern Visualization</h2>
        <p className="text-sm text-muted-foreground">
          Explore relationships between loan parameters and identify patterns
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="x-axis" className="text-sm font-medium">X-Axis</label>
          <Select
            value={xAxis}
            onValueChange={setXAxis}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select parameter" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(dataFieldMap).map(([key, { name }]) => (
                <SelectItem key={key} value={key}>{name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="y-axis" className="text-sm font-medium">Y-Axis</label>
          <Select
            value={yAxis}
            onValueChange={setYAxis}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select parameter" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(dataFieldMap).map(([key, { name }]) => (
                <SelectItem key={key} value={key}>{name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              type="number" 
              dataKey={xAxis} 
              name={dataFieldMap[xAxis as keyof typeof dataFieldMap]?.name}
              domain={dataFieldMap[xAxis as keyof typeof dataFieldMap]?.domain}
              tickFormatter={(value) => formatValue(value, xAxis)}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              type="number" 
              dataKey={yAxis} 
              name={dataFieldMap[yAxis as keyof typeof dataFieldMap]?.name}
              domain={dataFieldMap[yAxis as keyof typeof dataFieldMap]?.domain}
              tickFormatter={(value) => formatValue(value, yAxis)}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value, name) => [
                formatValue(value as number, name === dataFieldMap[xAxis as keyof typeof dataFieldMap]?.name ? xAxis : yAxis),
                name
              ]}
              cursor={{ strokeDasharray: '3 3' }}
            />
            <Scatter name="Loans" data={loanData}>
              {loanData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.status === 'Good' ? "#22c55e" : "#ef4444"} 
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-good mr-2" />
          <span className="text-sm">Good Loans</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-poor mr-2" />
          <span className="text-sm">Poor Loans</span>
        </div>
      </div>
    </div>
  );
};

export default PatternScatterPlot;
