
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
} from "recharts";

interface NPAForecastChartProps {
  data: NPAForecast[];
}

const NPAForecastChart = ({ data }: NPAForecastChartProps) => {
  // Find where actual data ends and predictions begin
  const actualDataEndIndex = data.findIndex((d) => d.actual === undefined) - 1;
  
  return (
    <div>
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
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 'dataMax + 0.5']} />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'NPA Rate']}
            />
            <Legend />
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
              fillOpacity={0.1}
              name="Upper Bound"
            />
            <Area
              type="monotone"
              dataKey="lowerBound"
              stroke="transparent"
              fill="#22c55e"
              fillOpacity={0.1}
              name="Lower Bound"
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Actual NPA"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#8b5cf6"
              strokeWidth={2}
              strokeDasharray={actualDataEndIndex >= 0 ? "0" : "3 3"}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Predicted NPA"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
          <span className="text-sm">Historical NPA</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
          <span className="text-sm">Predicted NPA</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-3 rounded-full bg-gradient-to-r from-transparent to-red-500/20 mr-2" />
          <span className="text-sm">Confidence Range</span>
        </div>
      </div>
    </div>
  );
};

export default NPAForecastChart;
