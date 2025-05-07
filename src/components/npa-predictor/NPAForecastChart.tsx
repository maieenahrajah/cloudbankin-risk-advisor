
import { NPAForecast } from "@/data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
  Label,
  Brush,
  Scatter,
} from "recharts";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface NPAForecastChartProps {
  data: NPAForecast[];
}

const NPAForecastChart = ({ data }: NPAForecastChartProps) => {
  // Find where actual data ends and predictions begin
  const actualDataEndIndex = data.findIndex((d) => d.actual === undefined) - 1;
  
  // Animation state for loading charts
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    // Add a slight delay to trigger animation after component mount
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Card className="p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">NPA Forecast (Next 6 Months)</h2>
        <p className="text-sm text-muted-foreground">
          Historical trends and AI-powered NPA predictions
        </p>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          >
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
            >
              <Label value="Month" position="bottom" style={{ fontSize: 12, fill: '#6b7280' }} />
            </XAxis>
            <YAxis 
              domain={[0, 'dataMax + 0.5']} 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            >
              <Label value="NPA Rate (%)" angle={-90} position="insideLeft" style={{ fontSize: 12, fill: '#6b7280' }} />
            </YAxis>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'NPA Rate']}
              contentStyle={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              labelStyle={{ fontWeight: 600 }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: 10 }} 
              iconType="circle"
              iconSize={8}
            />
            {actualDataEndIndex >= 0 && (
              <ReferenceLine
                x={data[actualDataEndIndex].month}
                stroke="#737373"
                strokeDasharray="3 3"
                label={{ value: "Forecast Start", position: "insideTopLeft", fill: "#737373", fontSize: 12 }}
              />
            )}
            <Area
              type="monotone"
              dataKey="upperBound"
              stroke="transparent"
              fill="#ef4444"
              fillOpacity={animated ? 0.1 : 0}
              name="Upper Bound"
              isAnimationActive={true}
              animationDuration={1000}
              animationBegin={300}
            />
            <Area
              type="monotone"
              dataKey="lowerBound"
              stroke="transparent"
              fill="#22c55e"
              fillOpacity={animated ? 0.1 : 0}
              name="Lower Bound"
              isAnimationActive={true}
              animationDuration={1000}
              animationBegin={300}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 1, stroke: "#fff" }}
              name="Actual NPA"
              isAnimationActive={true}
              animationDuration={1000}
              animationBegin={0}
              fill="url(#colorActual)"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#8b5cf6"
              strokeWidth={2}
              strokeDasharray={actualDataEndIndex >= 0 ? "0" : "3 3"}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 1, stroke: "#fff" }}
              name="Predicted NPA"
              isAnimationActive={true}
              animationDuration={1000}
              animationBegin={600}
              fill="url(#colorPredicted)"
            />
            <Brush 
              dataKey="month" 
              height={30} 
              stroke="#8884d8"
              startIndex={Math.max(0, data.length - 8)}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t pt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
          <span>Historical NPA</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
          <span>Predicted NPA</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-3 rounded-full bg-gradient-to-r from-green-500/20 to-red-500/20 mr-2" />
          <span>Confidence Range</span>
        </div>
      </div>
    </Card>
  );
};

export default NPAForecastChart;
