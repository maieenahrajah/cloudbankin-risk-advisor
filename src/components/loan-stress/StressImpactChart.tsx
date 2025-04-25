
import { StressScenario, StressTestResult } from "@/data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface StressImpactChartProps {
  results: StressTestResult[];
  scenario: StressScenario;
}

const StressImpactChart = ({ results, scenario }: StressImpactChartProps) => {
  // Transform data for chart
  const chartData = results.map((result) => ({
    loanType: result.loanType,
    "Baseline NPA": result.baselineNPA,
    "Stressed NPA": result.stressedNPA,
  }));

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">
          {scenario.name} Impact on NPA Rates
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparison of baseline vs stressed NPA rates by loan type
        </p>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="loanType" />
            <YAxis 
              label={{ 
                value: 'NPA Rate (%)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }} 
            />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'NPA Rate']}
            />
            <Legend />
            <ReferenceLine y={3} stroke="#737373" strokeDasharray="3 3" />
            <Bar
              dataKey="Baseline NPA"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              name="Baseline NPA (%)"
            />
            <Bar
              dataKey="Stressed NPA"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
              name="Stressed NPA (%)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3">Loan Type</th>
              <th className="text-center p-3">Baseline NPA</th>
              <th className="text-center p-3">Stressed NPA</th>
              <th className="text-center p-3">Change</th>
              <th className="text-center p-3">Approval Impact</th>
              <th className="text-center p-3">Capital Impact</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.loanType} className="border-t">
                <td className="p-3 font-medium">{result.loanType}</td>
                <td className="p-3 text-center">{result.baselineNPA}%</td>
                <td className="p-3 text-center">{result.stressedNPA}%</td>
                <td className="p-3 text-center text-poor">
                  +{result.npaChange}%
                </td>
                <td className="p-3 text-center text-poor">
                  {result.approvalRateChange}%
                </td>
                <td className="p-3 text-center text-poor">
                  {result.capitalImpact}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StressImpactChart;
