
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RegionData } from "@/data/mockData";

interface RegionDetailsProps {
  region: RegionData;
}

const RegionDetails = ({ region }: RegionDetailsProps) => {
  // Format data for district chart
  const districtData = region.districts?.map(district => ({
    name: district.name,
    npa: district.npaRate,
    fill: district.npaRate > 4 ? "#ef4444" : district.npaRate > 3 ? "#fbbf24" : "#22c55e"
  }));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-medium mb-1">{region.name}</h2>
          <p className="text-sm text-muted-foreground">
            Risk profile and policy recommendations
          </p>
        </div>
        <Badge
          variant={region.riskLevel === "low" ? "default" : region.riskLevel === "medium" ? "outline" : "destructive"}
        >
          {region.riskLevel.charAt(0).toUpperCase() + region.riskLevel.slice(1)} Risk
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">NPA Rate</p>
          <p className="text-2xl font-semibold">{region.npaRate}%</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Approval Rate</p>
          <p className="text-2xl font-semibold">{region.approvalRate}%</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Loan Volume</p>
          <p className="text-2xl font-semibold">₹{(region.loanVolume / 10000000).toFixed(1)}Cr</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Suggested EIR Cap</p>
          <p className="text-2xl font-semibold">{region.suggestedEIRCap}%</p>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-medium mb-3">District NPA Rates</h3>
        <div className="h-60">
          {districtData && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={districtData}
                layout="vertical"
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 6]} tick={{ fontSize: 11 }} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={70} 
                  tick={{ fontSize: 11 }} 
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'NPA Rate']}
                  contentStyle={{ fontSize: '12px' }}
                />
                <Bar dataKey="npa" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
        <h3 className="text-sm font-medium mb-2">Policy Recommendations</h3>
        <ul className="text-sm space-y-2">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              {region.riskLevel === "high" 
                ? "Increase credit score threshold by 30-50 points" 
                : region.riskLevel === "medium"
                  ? "Consider stricter EIR caps for certain loan types"
                  : "Maintain current policies with minor optimizations"}
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              {region.riskLevel === "high" 
                ? "Lower maximum loan amount by 15-20%" 
                : region.riskLevel === "medium"
                  ? "Increase documentation requirements"
                  : "Opportunity to increase market penetration"}
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              Suggested EIR cap: <span className="font-medium">{region.suggestedEIRCap}%</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegionDetails;
