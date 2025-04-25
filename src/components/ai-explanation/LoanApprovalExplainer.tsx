
import { LoanApprovalExplanation } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { MessagesSquare, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoanApprovalExplainerProps {
  approvals: LoanApprovalExplanation[];
  selectedLoanId: string;
  onSelectLoan: (id: string) => void;
}

const LoanApprovalExplainer = ({
  approvals,
  selectedLoanId,
  onSelectLoan,
}: LoanApprovalExplainerProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Approved Loan Applications</h3>
      <div className="space-y-3">
        {approvals.map((approval) => (
          <div
            key={approval.loanId}
            className={`p-4 rounded-lg border transition-all ${
              selectedLoanId === approval.loanId
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 cursor-pointer"
            }`}
            onClick={() => onSelectLoan(approval.loanId)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{approval.borrowerName}</h4>
                <p className="text-xs text-muted-foreground">ID: {approval.loanId}</p>
              </div>
              <Badge
                className="ml-2"
                variant={approval.confidenceScore >= 95 ? "default" : "outline"}
              >
                {approval.confidenceScore}% confidence
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              {approval.approvalReason}
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MessagesSquare className="h-3 w-3 mr-1" />
              <span>{approval.decisionFactors.length} factors</span>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">View All Approvals</Button>
    </div>
  );
};

export default LoanApprovalExplainer;
