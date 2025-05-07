
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DefaultRateChart = () => {
  // Mock data for default rates by credit score bands
  const defaultRateByCreditScore = [
    { band: "500-550", defaultRate: 18.5 },
    { band: "551-600", defaultRate: 12.3 },
    { band: "601-650", defaultRate: 7.8 },
    { band: "651-700", defaultRate: 4.2 },
    { band: "701-750", defaultRate: 2.1 },
    { band: "751-800", defaultRate: 0.9 },
    { band: "801-850", defaultRate: 0.3 }
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Default Rate by Credit Score</CardTitle>
        <CardDescription>How default rate varies across credit score bands</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={defaultRateByCreditScore}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="band" 
                tick={{ fontSize: 12 }} 
                label={{ 
                  value: 'Credit Score Range', 
                  position: 'insideBottom', 
                  offset: -5,
                  fontSize: 12
                }}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => `${value}%`}
                label={{ 
                  value: 'Default Rate', 
                  angle: -90, 
                  position: 'insideLeft',
                  fontSize: 12
                }}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Default Rate']}
                labelFormatter={(label) => `Credit Score: ${label}`}
                contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}
              />
              <Bar 
                dataKey="defaultRate" 
                fill="#2E7DFF"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DefaultRateChart;
