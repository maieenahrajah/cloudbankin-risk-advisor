
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { npaTrendData } from "@/data/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const NpaTrendChart = () => {
  return (
    <Card className="shadow-card w-full col-span-2 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-medium">NPA Trend</CardTitle>
        <CardDescription>Non-performing assets over time</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={npaTrendData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="npaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2E7DFF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2E7DFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => `${value}%`}
                domain={[0, 3]}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'NPA']}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}
              />
              <Area 
                type="monotone" 
                dataKey="npa" 
                stroke="#2E7DFF" 
                fillOpacity={1} 
                fill="url(#npaGradient)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default NpaTrendChart;
