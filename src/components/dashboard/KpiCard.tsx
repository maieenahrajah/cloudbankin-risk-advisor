
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { KPI } from "@/data/mockData";
import { ArrowDown, ArrowUp } from "lucide-react";

interface KpiCardProps {
  kpi: KPI;
}

const KpiCard = ({ kpi }: KpiCardProps) => {
  return (
    <Card className="shadow-card overflow-hidden animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {kpi.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {kpi.value}
            {kpi.unit && <span className="ml-1 text-sm text-muted-foreground">{kpi.unit}</span>}
          </div>
          <div className={cn(
            "flex items-center text-xs font-medium",
            kpi.trend === "up" 
              ? "text-good" 
              : kpi.trend === "down" 
                ? kpi.title.includes("DPD") ? "text-good" : "text-poor" 
                : "text-muted-foreground"
          )}>
            {kpi.trend === "up" && <ArrowUp className="mr-1 h-3 w-3" />}
            {kpi.trend === "down" && <ArrowDown className="mr-1 h-3 w-3" />}
            {kpi.change > 0 ? "+" : ""}{kpi.change}%
          </div>
        </div>
        {kpi.description && (
          <CardDescription className="mt-2 text-xs">
            {kpi.description}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;
