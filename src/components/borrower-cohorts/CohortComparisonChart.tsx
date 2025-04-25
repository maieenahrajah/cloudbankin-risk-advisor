
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from "recharts";
import { BorrowerCohort } from "@/data/mockData";

interface CohortComparisonChartProps {
  cohorts: BorrowerCohort[];
}

const CohortComparisonChart = ({ cohorts }: CohortComparisonChartProps) => {
  // Transform data for chart
  const chartData = cohorts.map((cohort) => ({
    name: cohort.name,
    "NPA Rate": cohort.npaRate,
    "Approval Rate": cohort.approvalRate,
    "Risk Level": cohort.riskLevel,
  }));

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Cohort Performance Comparison</h2>
        <p className="text-sm text-muted-foreground">
          NPA and approval rates by borrower segment
        </p>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#ef4444" />
            <YAxis yAxisId="right" orientation="right" stroke="#22c55e" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="NPA Rate"
              name="NPA Rate (%)"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="Approval Rate"
              name="Approval Rate (%)"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-poor" />
          <span className="text-sm">NPA Rate (%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-good" />
          <span className="text-sm">Approval Rate (%)</span>
        </div>
      </div>
    </div>
  );
};

export default CohortComparisonChart;
