
import { Button } from "@/components/ui/button";
import KpiCard from "@/components/dashboard/KpiCard";
import NpaTrendChart from "@/components/dashboard/NpaTrendChart";
import LoanSegmentationChart from "@/components/dashboard/LoanSegmentationChart";
import { kpiData } from "@/data/mockData";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your loan portfolio and key performance indicators
          </p>
        </div>
        <Link to="/policy-simulator">
          <Button size="lg" className="shadow-sm">
            Simulate a Policy
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <KpiCard key={index} kpi={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NpaTrendChart />
        <LoanSegmentationChart />
      </div>
    </div>
  );
};

export default Dashboard;
