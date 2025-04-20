
import { useState } from "react";
import FilterPanel from "@/components/loan-segmentation/FilterPanel";
import LoanTable from "@/components/loan-segmentation/LoanTable";
import { loanData } from "@/data/mockData";

const LoanSegmentation = () => {
  const [filters, setFilters] = useState({
    creditScoreMin: 500,
    creditScoreMax: 800,
    dpdMax: 60,
    abbMin: 0,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Loan Segmentation</h1>
        <p className="text-muted-foreground">
          Analyze and segment loan portfolio based on various parameters
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <div className="md:col-span-3">
          <LoanTable loans={loanData} filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default LoanSegmentation;
