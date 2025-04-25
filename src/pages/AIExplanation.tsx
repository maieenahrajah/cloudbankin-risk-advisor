
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoanRejectionExplainer from "@/components/ai-explanation/LoanRejectionExplainer";
import LoanApprovalExplainer from "@/components/ai-explanation/LoanApprovalExplainer";
import DecisionFlowChart from "@/components/ai-explanation/DecisionFlowChart";
import { rejectionExplanations, approvalExplanations } from "@/data/mockData";

const AIExplanation = () => {
  const [selectedRejectionId, setSelectedRejectionId] = useState(rejectionExplanations[0].loanId);
  const [selectedApprovalId, setSelectedApprovalId] = useState(approvalExplanations[0].loanId);

  const selectedRejection = rejectionExplanations.find(
    (loan) => loan.loanId === selectedRejectionId
  ) || rejectionExplanations[0];

  const selectedApproval = approvalExplanations.find(
    (loan) => loan.loanId === selectedApprovalId
  ) || approvalExplanations[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Explanation Engine</h1>
        <p className="text-muted-foreground">
          Understand loan decisions with AI-powered explanations
        </p>
      </div>

      <Tabs defaultValue="rejections" className="space-y-4">
        <TabsList>
          <TabsTrigger value="rejections">Loan Rejections</TabsTrigger>
          <TabsTrigger value="approvals">Loan Approvals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rejections" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardContent className="pt-6">
                <LoanRejectionExplainer 
                  rejections={rejectionExplanations}
                  selectedLoanId={selectedRejectionId}
                  onSelectLoan={setSelectedRejectionId}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <DecisionFlowChart loan={selectedRejection} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approvals" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardContent className="pt-6">
                <LoanApprovalExplainer
                  approvals={approvalExplanations}
                  selectedLoanId={selectedApprovalId}
                  onSelectLoan={setSelectedApprovalId}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <DecisionFlowChart loan={selectedApproval} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIExplanation;
