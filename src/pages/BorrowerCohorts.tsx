
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CohortComparisonChart from "@/components/borrower-cohorts/CohortComparisonChart";
import CohortTable from "@/components/borrower-cohorts/CohortTable";
import { ageCohorts, employmentCohorts, incomeCohorts } from "@/data/mockData";

type CohortType = "age" | "income" | "employment";

const BorrowerCohorts = () => {
  const [cohortType, setCohortType] = useState<CohortType>("age");

  const getCohortData = () => {
    switch (cohortType) {
      case "age":
        return ageCohorts;
      case "income":
        return incomeCohorts;
      case "employment":
        return employmentCohorts;
      default:
        return ageCohorts;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Borrower Cohort Explorer</h1>
        <p className="text-muted-foreground">
          Analyze borrower segments and their risk profiles
        </p>
      </div>

      <Tabs 
        defaultValue="age" 
        className="space-y-4"
        onValueChange={(value) => setCohortType(value as CohortType)}
      >
        <TabsList>
          <TabsTrigger value="age">Age Groups</TabsTrigger>
          <TabsTrigger value="income">Income Levels</TabsTrigger>
          <TabsTrigger value="employment">Employment Types</TabsTrigger>
        </TabsList>
        
        <TabsContent value="age" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <CohortComparisonChart cohorts={ageCohorts} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <CohortTable cohorts={ageCohorts} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <CohortComparisonChart cohorts={incomeCohorts} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <CohortTable cohorts={incomeCohorts} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employment" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <CohortComparisonChart cohorts={employmentCohorts} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <CohortTable cohorts={employmentCohorts} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BorrowerCohorts;
