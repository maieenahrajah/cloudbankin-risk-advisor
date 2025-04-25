
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import { LoanRejectionExplanation, LoanApprovalExplanation } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

interface DecisionFlowChartProps {
  loan: LoanRejectionExplanation | LoanApprovalExplanation;
}

const DecisionFlowChart = ({ loan }: DecisionFlowChartProps) => {
  // Check if loan is a rejection or approval explanation
  const isRejection = 'rejectionReason' in loan;
  
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "high":
        return <XCircle className="h-5 w-5 text-poor" />;
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "low":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{loan.borrowerName}</h3>
          <p className="text-sm text-muted-foreground">Decision Flow Analysis</p>
        </div>
        <Badge 
          className="text-md px-3 py-1" 
          variant={isRejection ? "destructive" : "default"}
        >
          {isRejection ? "Rejected" : "Approved"}
        </Badge>
      </div>

      <Alert>
        {isRejection ? (
          <AlertTriangle className="h-4 w-4" />
        ) : (
          <CheckCircle className="h-4 w-4" />
        )}
        <AlertTitle>
          {isRejection ? "Rejection Reason:" : "Approval Reason:"}
        </AlertTitle>
        <AlertDescription>
          {isRejection 
            ? (loan as LoanRejectionExplanation).rejectionReason 
            : (loan as LoanApprovalExplanation).approvalReason}
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h4 className="text-sm font-medium">Decision Factors</h4>
        <div className="space-y-3">
          {isRejection ? (
            // Rejection factors
            (loan as LoanRejectionExplanation).decisionFactors.map((factor, index) => (
              <Card key={index} className={`
                border-l-4 
                ${factor.impact === 'high' 
                  ? 'border-l-poor' 
                  : factor.impact === 'medium' 
                    ? 'border-l-amber-500' 
                    : 'border-l-blue-500'}
              `}>
                <CardContent className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    {getImpactIcon(factor.impact)}
                    <div className="ml-3">
                      <div className="font-medium">{factor.factor}</div>
                      <div className="text-sm text-muted-foreground">
                        Value: {factor.value} (Threshold: {factor.threshold})
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">
                    {factor.impact.charAt(0).toUpperCase() + factor.impact.slice(1)} Impact
                  </Badge>
                </CardContent>
              </Card>
            ))
          ) : (
            // Approval factors
            (loan as LoanApprovalExplanation).decisionFactors.map((factor, index) => (
              <Card key={index} className="border-l-4 border-l-good">
                <CardContent className="py-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-good" />
                  <div className="ml-3">
                    <div className="font-medium">{factor}</div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {isRejection && (
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Alternative Options</h4>
          <div className="space-y-2">
            {(loan as LoanRejectionExplanation).alternatives.map((alternative, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-good mr-2 mt-0.5 shrink-0" />
                <p className="text-sm">{alternative}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionFlowChart;
