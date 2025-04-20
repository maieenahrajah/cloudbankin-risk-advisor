
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface NpaImpactChartProps {
  currentNpa: number;
  targetNpa: number;
}

const NpaImpactChart = ({ currentNpa, targetNpa }: NpaImpactChartProps) => {
  const data = [
    { name: 'Current', npa: currentNpa },
    { name: 'Target', npa: targetNpa },
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">NPA Impact</CardTitle>
        <CardDescription>Current vs projected NPA after policy changes</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => `${value}%`}
                domain={[0, Math.ceil(currentNpa * 1.2)]}
              />
              <Tooltip 
                formatter={(value: number) => [`${value.toFixed(1)}%`, 'NPA']}
                contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}
              />
              <Bar 
                dataKey="npa" 
                fill={(d) => d.name === 'Current' ? '#ef4444' : '#22c55e'}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Expected Reduction:</span>
            <span className="font-medium">{(currentNpa - targetNpa).toFixed(1)}%</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-muted-foreground">Improvement:</span>
            <span className="font-medium text-good">
              {((currentNpa - targetNpa) / currentNpa * 100).toFixed(0)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NpaImpactChart;
