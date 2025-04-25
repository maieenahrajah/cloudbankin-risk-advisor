
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { PolicyVersion } from "@/data/mockData";

interface PerformanceComparisonProps {
  policies: PolicyVersion[];
}

const PerformanceComparison = ({ policies }: PerformanceComparisonProps) => {
  // Format data for the charts
  const npaData = policies.map(policy => ({
    name: policy.name,
    value: policy.performance.npaRate,
    fill: getColorForNPA(policy.performance.npaRate)
  }));

  const approvalData = policies.map(policy => ({
    name: policy.name,
    value: policy.performance.approvalRate,
    fill: getColorForApproval(policy.performance.approvalRate)
  }));

  const volumeData = policies.map(policy => ({
    name: policy.name,
    value: policy.performance.loanVolume / 1000000, // Convert to millions
    fill: "#3b82f6"
  }));

  const roiData = policies.map(policy => ({
    name: policy.name,
    value: policy.performance.avgROI,
    fill: getColorForROI(policy.performance.avgROI)
  }));

  function getColorForNPA(npaRate: number) {
    if (npaRate <= 2) return "#22c55e";
    if (npaRate <= 3.5) return "#fbbf24";
    return "#ef4444";
  }

  function getColorForApproval(approvalRate: number) {
    if (approvalRate >= 75) return "#22c55e";
    if (approvalRate >= 60) return "#fbbf24";
    return "#ef4444";
  }

  function getColorForROI(roi: number) {
    if (roi >= 15) return "#22c55e";
    if (roi >= 12) return "#fbbf24";
    return "#ef4444";
  }

  // Determine recommended policy based on a simple heuristic
  const recommendedPolicy = policies.reduce((best, current) => {
    // Score based on low NPA, high approval, and good ROI
    const bestScore = (1 / best.performance.npaRate) * best.performance.approvalRate * best.performance.avgROI;
    const currentScore = (1 / current.performance.npaRate) * current.performance.approvalRate * current.performance.avgROI;
    
    return currentScore > bestScore ? current : best;
  }, policies[0]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">Performance Metrics</h2>
        <p className="text-sm text-muted-foreground">
          Compare key performance indicators across selected policies
        </p>
      </div>

      {policies.length > 1 && recommendedPolicy && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-full">
            <Badge className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">AI Recommendation</h3>
            <p className="text-sm">
              <span className="font-medium">{recommendedPolicy.name}</span> offers the best balance of NPA reduction and approval rate
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base font-medium mb-3">NPA Rate (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={npaData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 'dataMax']} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} />
                <Tooltip formatter={(value) => [`${value}%`, 'NPA Rate']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Approval Rate (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={approvalData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} />
                <Tooltip formatter={(value) => [`${value}%`, 'Approval Rate']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Loan Volume (₹ Millions)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} />
                <Tooltip formatter={(value) => [`₹${value.toFixed(1)}M`, 'Loan Volume']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-3">Average ROI (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roiData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 20]} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} />
                <Tooltip formatter={(value) => [`${value}%`, 'ROI']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComparison;
