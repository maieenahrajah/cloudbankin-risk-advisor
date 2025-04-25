
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  ChartLine,
  CircleCheck, 
  Home,
  Search,
  SlidersHorizontal,
  MessagesSquare,
  Network,
  Database,
  Map,
  Users,
  Dna,
  LineChart,
  FileBarChart
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  href: string;
  title: string;
  isActive: boolean;
}

const NavItem = ({ icon, href, title, isActive }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground hover:bg-secondary"
    )}
  >
    <div className="flex h-6 w-6 items-center justify-center">
      {icon}
    </div>
    <span>{title}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: <Home className="h-5 w-5" />,
      href: "/",
      title: "Dashboard",
    },
    {
      icon: <CircleCheck className="h-5 w-5" />,
      href: "/loan-segmentation",
      title: "Loan Segmentation",
    },
    {
      icon: <ChartLine className="h-5 w-5" />,
      href: "/parameter-analysis",
      title: "Parameter Analysis",
    },
    {
      icon: <Search className="h-5 w-5" />,
      href: "/policy-simulator",
      title: "Policy Simulator",
    },
    {
      icon: <SlidersHorizontal className="h-5 w-5" />,
      href: "/what-if-scenarios",
      title: "What-If Scenarios",
    },
    {
      icon: <MessagesSquare className="h-5 w-5" />,
      href: "/ai-explanation",
      title: "AI Explanation",
    },
    {
      icon: <Network className="h-5 w-5" />,
      href: "/hidden-patterns",
      title: "Hidden Patterns",
    },
    {
      icon: <Database className="h-5 w-5" />,
      href: "/policy-ab-testing",
      title: "Policy A/B Testing",
    },
    {
      icon: <Map className="h-5 w-5" />,
      href: "/geo-risk-map",
      title: "Geo-Risk Map",
    },
    {
      icon: <Users className="h-5 w-5" />,
      href: "/borrower-cohorts",
      title: "Borrower Cohorts",
    },
    {
      icon: <Dna className="h-5 w-5" />,
      href: "/portfolio-dna",
      title: "Portfolio DNA",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      href: "/npa-predictor",
      title: "NPA Predictor",
    },
    {
      icon: <FileBarChart className="h-5 w-5" />,
      href: "/stress-testing",
      title: "Stress Testing",
    },
  ];

  return (
    <aside className="group/sidebar w-64 flex-shrink-0 border-r px-4 py-6 hidden md:block">
      <div className="flex flex-col gap-2">
        <div className="flex h-12 items-center px-3">
          <BarChart className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-semibold tracking-tight">CPA</span>
        </div>
        <nav className="grid gap-1 px-2 pt-4 max-h-[calc(100vh-110px)] overflow-y-auto">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              icon={item.icon}
              href={item.href}
              title={item.title}
              isActive={location.pathname === item.href}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
