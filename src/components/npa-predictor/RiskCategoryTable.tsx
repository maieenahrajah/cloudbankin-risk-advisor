
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "lucide-react";

interface RiskCategoryForecast {
  category: string;
  currentNPA: number;
  forecast1Month: number;
  forecast3Month: number;
  forecast6Month: number;
  trend: "up" | "down" | "stable";
  riskLevel: "low" | "medium" | "high" | "severe";
  // Add computed properties for use in the component
  forecastNPA?: number;
  change?: number;
}

interface RiskCategoryTableProps {
  categories: RiskCategoryForecast[];
}

const RiskCategoryTable = ({ categories }: RiskCategoryTableProps) => {
  // Add computed properties to each category
  const processedCategories = categories.map(category => {
    // Use forecast3Month as the main forecast display
    const forecastNPA = category.forecast3Month;
    const change = forecastNPA - category.currentNPA;
    
    return {
      ...category,
      forecastNPA,
      change
    };
  });

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="outline">Medium</Badge>;
      case "low":
        return <Badge variant="default">Low</Badge>;
      default:
        return null;
    }
  };

  const getTrendIcon = (change: number) => {
    if (change > 0.3) return <ArrowUpIcon className="h-4 w-4 text-poor" />;
    if (change < -0.3) return <ArrowDownIcon className="h-4 w-4 text-good" />;
    return <MinusIcon className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Risk Category Forecast</h2>
        <p className="text-sm text-muted-foreground">
          Projected NPA changes by loan category
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Loan Category</TableHead>
            <TableHead>Current NPA</TableHead>
            <TableHead>Forecast NPA</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Trend</TableHead>
            <TableHead className="text-right">Risk Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processedCategories.map((category) => (
            <TableRow key={category.category}>
              <TableCell className="font-medium">{category.category}</TableCell>
              <TableCell>{category.currentNPA}%</TableCell>
              <TableCell>{category.forecastNPA}%</TableCell>
              <TableCell 
                className={
                  category.change > 0.3 
                    ? "text-poor" 
                    : category.change < -0.3 
                      ? "text-good" 
                      : ""
                }
              >
                {category.change > 0 ? "+" : ""}{category.change}%
              </TableCell>
              <TableCell>{getTrendIcon(category.change)}</TableCell>
              <TableCell className="text-right">{getRiskBadge(category.riskLevel)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RiskCategoryTable;
