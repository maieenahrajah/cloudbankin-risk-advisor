
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoanRejectionExplainer from "@/components/ai-explanation/LoanRejectionExplainer";
import DecisionFlowChart from "@/components/ai-explanation/DecisionFlowChart";
import { rejectionExplanations } from "@/data/mockData";

const AIExplanation = () => {
  const [selectedLoanId, setSelectedLoanId] = useState(rejectionExplanations[0].loanId);

  const selectedLoan = rejectionExplanations.find(
    (loan) => loan.loanId === selectedLoanId
  ) || rejectionExplanations[0];

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
                  selectedLoanId={selectedLoanId}
                  onSelectLoan={setSelectedLoanId}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <DecisionFlowChart loan={selectedLoan} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approvals">
          <Card>
            <CardContent className="pt-6 flex items-center justify-center h-64">
              <p className="text-muted-foreground text-center">
                Loan approval explanations feature coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIExplanation;
