
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LoanSegmentation from "./pages/LoanSegmentation";
import ParameterAnalysis from "./pages/ParameterAnalysis";
import PolicySimulator from "./pages/PolicySimulator";
import WhatIfScenarios from "./pages/WhatIfScenarios";
import AIExplanation from "./pages/AIExplanation";
import HiddenPatterns from "./pages/HiddenPatterns";
import PolicyABTesting from "./pages/PolicyABTesting";
import GeoRiskMap from "./pages/GeoRiskMap";
import BorrowerCohorts from "./pages/BorrowerCohorts";
import PortfolioDNA from "./pages/PortfolioDNA";
import NPARiskPredictor from "./pages/NPARiskPredictor";
import LoanStressTesting from "./pages/LoanStressTesting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loan-segmentation" element={<LoanSegmentation />} />
              <Route path="/parameter-analysis" element={<ParameterAnalysis />} />
              <Route path="/policy-simulator" element={<PolicySimulator />} />
              <Route path="/what-if-scenarios" element={<WhatIfScenarios />} />
              <Route path="/ai-explanation" element={<AIExplanation />} />
              <Route path="/hidden-patterns" element={<HiddenPatterns />} />
              <Route path="/policy-ab-testing" element={<PolicyABTesting />} />
              <Route path="/geo-risk-map" element={<GeoRiskMap />} />
              <Route path="/borrower-cohorts" element={<BorrowerCohorts />} />
              <Route path="/portfolio-dna" element={<PortfolioDNA />} />
              <Route path="/npa-predictor" element={<NPARiskPredictor />} />
              <Route path="/stress-testing" element={<LoanStressTesting />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
