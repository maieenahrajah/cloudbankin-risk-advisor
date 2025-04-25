
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioAttributes from "@/components/portfolio-dna/PortfolioAttributes";
import LoanTypeMix from "@/components/portfolio-dna/LoanTypeMix";
import IdealPortfolioMatrix from "@/components/portfolio-dna/IdealPortfolioMatrix";
import { portfolioAttributes, loanTypeMix } from "@/data/mockData";

const PortfolioDNA = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio DNA</h1>
        <p className="text-muted-foreground">
          Analyze current portfolio makeup and improvement opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <PortfolioAttributes attributes={portfolioAttributes} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <LoanTypeMix loanTypes={loanTypeMix} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <IdealPortfolioMatrix attributes={portfolioAttributes} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioDNA;
