
import { LoanRejectionExplanation } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

interface LoanRejectionExplainerProps {
  rejections: LoanRejectionExplanation[];
  selectedLoanId: string;
  onSelectLoan: (id: string) => void;
}

const LoanRejectionExplainer = ({
  rejections,
  selectedLoanId,
  onSelectLoan,
}: LoanRejectionExplainerProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Rejected Loan Applications</h3>
      <div className="space-y-3">
        {rejections.map((rejection) => (
          <div
            key={rejection.loanId}
            className={`p-4 rounded-lg border transition-all ${
              selectedLoanId === rejection.loanId
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 cursor-pointer"
            }`}
            onClick={() => onSelectLoan(rejection.loanId)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{rejection.borrowerName}</h4>
                <p className="text-xs text-muted-foreground">ID: {rejection.loanId}</p>
              </div>
              <Badge
                className="ml-2"
                variant={rejection.confidenceScore >= 95 ? "default" : "outline"}
              >
                {rejection.confidenceScore}% confidence
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              {rejection.rejectionReason}
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MessagesSquare className="h-3 w-3 mr-1" />
              <span>{rejection.decisionFactors.length} factors</span>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">View All Rejections</Button>
    </div>
  );
};

export default LoanRejectionExplainer;
