
import { BorrowerCohort } from "@/data/mockData";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CohortTableProps {
  cohorts: BorrowerCohort[];
}

const CohortTable = ({ cohorts }: CohortTableProps) => {
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

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-1">Detailed Cohort Analysis</h2>
        <p className="text-sm text-muted-foreground">
          Key metrics across borrower segments
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Segment</TableHead>
            <TableHead>Count</TableHead>
            <TableHead>NPA Rate</TableHead>
            <TableHead>Avg DPD</TableHead>
            <TableHead>Approval Rate</TableHead>
            <TableHead>Avg Loan Amount</TableHead>
            <TableHead>Risk Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cohorts.map((cohort) => (
            <TableRow key={cohort.id}>
              <TableCell className="font-medium">{cohort.name}</TableCell>
              <TableCell>{cohort.count.toLocaleString()}</TableCell>
              <TableCell className={
                cohort.npaRate > 5 
                  ? "text-poor" 
                  : cohort.npaRate < 3 
                    ? "text-good" 
                    : ""
              }>
                {cohort.npaRate}%
              </TableCell>
              <TableCell>{cohort.avgDPD.toFixed(1)}</TableCell>
              <TableCell>{cohort.approvalRate}%</TableCell>
              <TableCell>₹{cohort.avgLoanAmount.toLocaleString()}</TableCell>
              <TableCell>{getRiskBadge(cohort.riskLevel)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CohortTable;
