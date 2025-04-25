
import { LoanTypeMix } from "@/data/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface LoanTypeMixProps {
  loanTypes: LoanTypeMix[];
}

const COLORS = ["#22c55e", "#3b82f6", "#fbbf24", "#8b5cf6", "#ef4444"];

const LoanTypeMixComponent = ({ loanTypes }: LoanTypeMixProps) => {
  const currentData = loanTypes.map((type, index) => ({
    name: type.type,
    value: type.currentPercentage,
    color: COLORS[index % COLORS.length],
  }));

  const idealData = loanTypes.map((type, index) => ({
    name: type.type,
    value: type.idealPercentage,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Loan Type Distribution</h2>
        <p className="text-sm text-muted-foreground">
          Current vs ideal loan type mix
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium mb-2 text-center">Current Mix</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={currentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {currentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Percentage']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2 text-center">Ideal Mix</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={idealData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {idealData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Percentage']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left text-sm font-medium">Loan Type</th>
            <th className="text-right text-sm font-medium">Risk</th>
            <th className="text-right text-sm font-medium">Avg ROI</th>
            <th className="text-right text-sm font-medium">Change</th>
          </tr>
        </thead>
        <tbody>
          {loanTypes.map((type, index) => {
            const change = type.idealPercentage - type.currentPercentage;
            return (
              <tr key={index} className="border-t">
                <td className="py-2">
                  <div className="flex items-center">
                    <div
                      className="h-3 w-3 mr-2 rounded"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    {type.type}
                  </div>
                </td>
                <td className="text-right">
                  <span className={
                    type.risk === "high" 
                      ? "text-poor" 
                      : type.risk === "low" 
                        ? "text-good" 
                        : ""
                  }>
                    {type.risk.charAt(0).toUpperCase() + type.risk.slice(1)}
                  </span>
                </td>
                <td className="text-right">{type.avgROI}%</td>
                <td className="text-right">
                  <span className={change > 0 ? "text-good" : change < 0 ? "text-poor" : ""}>
                    {change > 0 ? "+" : ""}{change}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTypeMixComponent;
