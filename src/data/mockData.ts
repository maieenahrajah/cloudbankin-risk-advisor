export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Loan Segmentation",
    href: "/loan-segmentation",
  },
  {
    name: "Parameter Analysis",
    href: "/parameter-analysis",
  },
  {
    name: "Policy Simulator",
    href: "/policy-simulator",
  },
  {
    name: "What-If Scenarios",
    href: "/what-if-scenarios",
  },
  {
    name: "AI Explanation",
    href: "/ai-explanation",
  },
  {
    name: "Hidden Patterns",
    href: "/hidden-patterns",
  },
  {
    name: "Policy A/B Testing",
    href: "/policy-ab-testing",
  },
  {
    name: "Geo Risk Map",
    href: "/geo-risk-map",
  },
  {
    name: "Borrower Cohorts",
    href: "/borrower-cohorts",
  },
  {
    name: "Portfolio DNA",
    href: "/portfolio-dna",
  },
  {
    name: "NPA Risk Predictor",
    href: "/npa-predictor",
  },
  {
    name: "Loan Stress Testing",
    href: "/stress-testing",
  },
];

export interface NPAForecast {
  month: string;
  actual?: number;
  predicted?: number;
  upperBound?: number;
  lowerBound?: number;
}

export const npaForecastData: NPAForecast[] = [
  { month: "Jan", actual: 3.2 },
  { month: "Feb", actual: 3.5 },
  { month: "Mar", actual: 3.1 },
  { month: "Apr", actual: 3.4 },
  { month: "May", actual: 3.3 },
  { month: "Jun", actual: 3.6 },
  { month: "Jul", predicted: 3.5, upperBound: 3.8, lowerBound: 3.2 },
  { month: "Aug", predicted: 3.7, upperBound: 4.0, lowerBound: 3.4 },
  { month: "Sep", predicted: 3.6, upperBound: 3.9, lowerBound: 3.3 },
  { month: "Oct", predicted: 3.8, upperBound: 4.1, lowerBound: 3.5 },
  { month: "Nov", predicted: 3.7, upperBound: 4.0, lowerBound: 3.4 },
  { month: "Dec", predicted: 3.9, upperBound: 4.2, lowerBound: 3.6 },
];

export const npaTrendData = [
  { month: "Jan", npa: 1.8 },
  { month: "Feb", npa: 2.0 },
  { month: "Mar", npa: 2.2 },
  { month: "Apr", npa: 2.0 },
  { month: "May", npa: 1.9 },
  { month: "Jun", npa: 2.1 },
  { month: "Jul", npa: 2.3 },
  { month: "Aug", npa: 2.5 },
  { month: "Sep", npa: 2.7 },
  { month: "Oct", npa: 2.6 },
  { month: "Nov", npa: 2.7 },
  { month: "Dec", npa: 2.9 },
];

export const loanPortfolioData = [
  { label: "Agriculture", value: 15, color: "#0088FE" },
  { label: "Manufacturing", value: 25, color: "#00C49F" },
  { label: "Services", value: 30, color: "#FFBB28" },
  { label: "Retail", value: 20, color: "#FF8042" },
  { label: "Other", value: 10, color: "#8884d8" },
];

// Loan segmentation data for pie chart
export const loanSegmentationData = [
  { name: "Good Loans", value: 85 },
  { name: "Poor Loans", value: 15 },
];

export const geoRiskData = [
  { state: "Alabama", riskScore: 62 },
  { state: "Alaska", riskScore: 48 },
  { state: "Arizona", riskScore: 55 },
  { state: "Arkansas", riskScore: 68 },
  { state: "California", riskScore: 45 },
  { state: "Colorado", riskScore: 52 },
  { state: "Connecticut", riskScore: 58 },
  { state: "Delaware", riskScore: 65 },
  { state: "Florida", riskScore: 50 },
  { state: "Georgia", riskScore: 60 },
  { state: "Hawaii", riskScore: 47 },
  { state: "Idaho", riskScore: 53 },
  { state: "Illinois", riskScore: 57 },
  { state: "Indiana", riskScore: 63 },
  { state: "Iowa", riskScore: 66 },
  { state: "Kansas", riskScore: 59 },
  { state: "Kentucky", riskScore: 70 },
  { state: "Louisiana", riskScore: 64 },
  { state: "Maine", riskScore: 51 },
  { state: "Maryland", riskScore: 56 },
  { state: "Massachusetts", riskScore: 49 },
  { state: "Michigan", riskScore: 61 },
  { state: "Minnesota", riskScore: 54 },
  { state: "Mississippi", riskScore: 69 },
  { state: "Missouri", riskScore: 67 },
  { state: "Montana", riskScore: 46 },
  { state: "Nebraska", riskScore: 63 },
  { state: "Nevada", riskScore: 52 },
  { state: "New Hampshire", riskScore: 58 },
  { state: "New Jersey", riskScore: 44 },
  { state: "New Mexico", riskScore: 65 },
  { state: "New York", riskScore: 43 },
  { state: "North Carolina", riskScore: 59 },
  { state: "North Dakota", riskScore: 66 },
  { state: "Ohio", riskScore: 55 },
  { state: "Oklahoma", riskScore: 62 },
  { state: "Oregon", riskScore: 50 },
  { state: "Pennsylvania", riskScore: 57 },
  { state: "Rhode Island", riskScore: 64 },
  { state: "South Carolina", riskScore: 60 },
  { state: "South Dakota", riskScore: 67 },
  { state: "Tennessee", riskScore: 53 },
  { state: "Texas", riskScore: 56 },
  { state: "Utah", riskScore: 48 },
  { state: "Vermont", riskScore: 61 },
  { state: "Virginia", riskScore: 54 },
  { state: "Washington", riskScore: 49 },
  { state: "West Virginia", riskScore: 71 },
  { state: "Wisconsin", riskScore: 51 },
  { state: "Wyoming", riskScore: 68 },
];

export const policySimulatorData = [
  {
    parameter: "Credit Score",
    current: 650,
    proposed: 680,
    impact: "+0.5% Approval Rate",
  },
  {
    parameter: "Debt-to-Income Ratio",
    current: "35%",
    proposed: "30%",
    impact: "-1.2% NPA",
  },
  {
    parameter: "Loan Term",
    current: "60 months",
    proposed: "48 months",
    impact: "-0.8% Default Rate",
  },
  {
    parameter: "Interest Rate",
    current: "8.5%",
    proposed: "8.0%",
    impact: "+0.3% Market Share",
  },
];

// Extended What-If baseline data with additional variables
export const whatIfBaselineData = {
  // Original variables
  creditScore: 650,
  maxCreditEnquiries: 3,
  minABB: 15000,
  maxEIR: 0.5,
  npa: 3.8,
  approvalRate: 65.0,
  
  // Additional variables (newly added)
  chequeBounces: 0,
  willfulDefault: false,
  unsecuredLoansCount: 1,
  securedLoansCount: 1,
  bureauHistory: 36, // months
  
  // DPD variables
  activeDpd1Plus: 0,
  closedDpd1Plus: 0,
  activeDpd30Plus: 0,
  closedDpd30Plus: 0,
  activeDpd60Plus: 0,
  closedDpd60Plus: 0,
  activeDpd90Plus: 0,
  closedDpd90Plus: 0,
  
  // Credit card and loan history
  ccSettlements3Years: 0,
  ccWriteOffs3Years: 0,
  nonCcSettlements3Years: 0,
  nonCcWriteOffs3Years: 0,
  
  // Default and account counts
  activeDefaultsCount: 0,
  closedDefaultsCount: 0,
  openLoanAccounts: 1,
  closedLoanAccounts: 0,
  
  // EMI bounce counts
  emiBounce0: 0,
  emiBounce1: 0,
  emiBounce2: 0,
  emiBounce3: 0,
  
  // Risk scoring
  riskScore: 720,
};

// Add missing types and data

// AI Explanation types and data
export interface LoanApprovalExplanation {
  loanId: string;
  borrowerName: string;
  approvalReason: string;
  confidenceScore: number;
  decisionFactors: { factor: string; impact: string; value: string | number; threshold?: string | number; }[];
}

export interface LoanRejectionExplanation {
  loanId: string;
  borrowerName: string;
  rejectionReason: string;
  confidenceScore: number;
  decisionFactors: { factor: string; impact: string; value: string | number; threshold?: string | number; }[];
}

export const approvalExplanations: LoanApprovalExplanation[] = [
  {
    loanId: "L-APR-001",
    borrowerName: "Raj Kumar",
    approvalReason: "Strong credit profile with reliable income and good repayment history",
    confidenceScore: 97,
    decisionFactors: [
      { factor: "Credit Score", impact: "low", value: 780, threshold: 650 },
      { factor: "Income Stability", impact: "low", value: "High", threshold: "Medium" },
      { factor: "Debt-to-Income Ratio", impact: "low", value: "22%", threshold: "35%" }
    ]
  },
  {
    loanId: "L-APR-002",
    borrowerName: "Priya Sharma",
    approvalReason: "Adequate credit history and stable employment position",
    confidenceScore: 85,
    decisionFactors: [
      { factor: "Credit Score", impact: "medium", value: 705, threshold: 650 },
      { factor: "Employment Duration", impact: "low", value: "4 years", threshold: "2 years" },
      { factor: "Existing Loans", impact: "medium", value: 2, threshold: 3 }
    ]
  }
];

export const rejectionExplanations: LoanRejectionExplanation[] = [
  {
    loanId: "L-REJ-001",
    borrowerName: "Amit Singh",
    rejectionReason: "Low credit score and high debt-to-income ratio",
    confidenceScore: 92,
    decisionFactors: [
      { factor: "Credit Score", impact: "high", value: 590, threshold: 650 },
      { factor: "Debt-to-Income Ratio", impact: "high", value: "48%", threshold: "35%" },
      { factor: "Recent Credit Enquiries", impact: "medium", value: 5, threshold: 3 }
    ]
  },
  {
    loanId: "L-REJ-002",
    borrowerName: "Sanjay Patel",
    rejectionReason: "Insufficient income and unstable employment history",
    confidenceScore: 88,
    decisionFactors: [
      { factor: "Monthly Income", impact: "high", value: "₹18,000", threshold: "₹25,000" },
      { factor: "Employment Stability", impact: "high", value: "Frequent changes", threshold: "Stable" },
      { factor: "Credit History Length", impact: "medium", value: "8 months", threshold: "12 months" }
    ]
  }
];

// Borrower Cohorts
export interface BorrowerCohort {
  id: string;
  name: string;
  count: number;
  npaRate: number;
  avgDPD: number;
  approvalRate: number;
  avgLoanAmount: number;
  riskLevel: "low" | "medium" | "high";
}

export const ageCohorts: BorrowerCohort[] = [
  {
    id: "age-20-30",
    name: "Age: 20-30",
    count: 12500,
    npaRate: 4.8,
    avgDPD: 12.4,
    approvalRate: 56,
    avgLoanAmount: 450000,
    riskLevel: "high"
  },
  {
    id: "age-31-40",
    name: "Age: 31-40",
    count: 28000,
    npaRate: 3.2,
    avgDPD: 8.1,
    approvalRate: 72,
    avgLoanAmount: 850000,
    riskLevel: "medium"
  },
  {
    id: "age-41-50",
    name: "Age: 41-50",
    count: 19500,
    npaRate: 2.1,
    avgDPD: 5.3,
    approvalRate: 81,
    avgLoanAmount: 1200000,
    riskLevel: "low"
  }
];

export const employmentCohorts: BorrowerCohort[] = [
  {
    id: "salaried",
    name: "Salaried",
    count: 42000,
    npaRate: 2.4,
    avgDPD: 6.8,
    approvalRate: 79,
    avgLoanAmount: 750000,
    riskLevel: "low"
  },
  {
    id: "self-employed",
    name: "Self-Employed",
    count: 28000,
    npaRate: 4.6,
    avgDPD: 11.3,
    approvalRate: 61,
    avgLoanAmount: 950000,
    riskLevel: "medium"
  },
  {
    id: "business-owner",
    name: "Business Owner",
    count: 15000,
    npaRate: 3.8,
    avgDPD: 9.2,
    approvalRate: 68,
    avgLoanAmount: 1500000,
    riskLevel: "medium"
  }
];

export const incomeCohorts: BorrowerCohort[] = [
  {
    id: "low-income",
    name: "Low Income (<5L)",
    count: 35000,
    npaRate: 5.2,
    avgDPD: 14.1,
    approvalRate: 51,
    avgLoanAmount: 350000,
    riskLevel: "high"
  },
  {
    id: "mid-income",
    name: "Mid Income (5-12L)",
    count: 48000,
    npaRate: 3.1,
    avgDPD: 8.3,
    approvalRate: 73,
    avgLoanAmount: 750000,
    riskLevel: "medium"
  },
  {
    id: "high-income",
    name: "High Income (>12L)",
    count: 22000,
    npaRate: 1.8,
    avgDPD: 4.2,
    approvalRate: 87,
    avgLoanAmount: 1800000,
    riskLevel: "low"
  }
];

// Dashboard KPI data
export interface KPI {
  id: string;
  title: string;
  value: string;
  unit?: string;
  trend: "up" | "down" | "flat";
  change: number;
  description?: string;
}

export const kpiData: KPI[] = [
  {
    id: "npa-rate",
    title: "NPA Rate",
    value: "3.2",
    unit: "%",
    trend: "down",
    change: 0.4,
    description: "vs. last quarter"
  },
  {
    id: "loan-approval",
    title: "Loan Approval Rate",
    value: "68.5",
    unit: "%",
    trend: "up",
    change: 2.1,
    description: "vs. last quarter"
  },
  {
    id: "dpd-90",
    title: "90+ DPD",
    value: "2.8",
    unit: "%",
    trend: "down",
    change: 0.3,
    description: "vs. last quarter"
  },
  {
    id: "risk-adjusted-return",
    title: "Risk-Adjusted Return",
    value: "11.2",
    unit: "%",
    trend: "up",
    change: 0.8,
    description: "vs. last quarter"
  }
];

// Loan data
export interface Loan {
  id: string;
  borrowerName: string;
  creditScore: number;
  dpd: number;
  abb: number;
  eir: number;
  status: string;
}

export const loanData: Loan[] = [
  { id: "L001", borrowerName: "Vijay Singh", creditScore: 720, dpd: 0, abb: 25000, eir: 0.09, status: "Good" },
  { id: "L002", borrowerName: "Priya Verma", creditScore: 760, dpd: 0, abb: 32000, eir: 0.085, status: "Good" },
  { id: "L003", borrowerName: "Rahul Kumar", creditScore: 580, dpd: 45, abb: 8000, eir: 0.14, status: "At Risk" },
  { id: "L004", borrowerName: "Ananya Sharma", creditScore: 690, dpd: 10, abb: 18000, eir: 0.095, status: "Good" },
  { id: "L005", borrowerName: "Ravi Patel", creditScore: 520, dpd: 90, abb: 5000, eir: 0.15, status: "Default" },
  { id: "L006", borrowerName: "Nisha Iyer", creditScore: 710, dpd: 0, abb: 22000, eir: 0.09, status: "Good" }
];

// Stress testing scenarios and results
export interface StressScenario {
  id: string;
  name: string;
  description: string;
  impactSeverity: "low" | "medium" | "high" | "severe";
  parameters: {
    interestRateChange: number;
    unemploymentRateChange: number;
    gdpGrowthChange: number;
    inflationChange: number;
  };
}

export interface StressTestResult {
  loanType: string;
  baselineNPA: number;
  stressedNPA: number;
  npaChange: number;
  approvalRateChange: number;
  capitalImpact: number;
  resilience: "low" | "medium" | "high";
}

export const stressScenarios: StressScenario[] = [
  {
    id: "scenario-1",
    name: "Moderate Economic Downturn",
    description: "Simulates a moderate economic slowdown with gradual rate increases",
    impactSeverity: "medium",
    parameters: {
      interestRateChange: 1.5,
      unemploymentRateChange: 2.0,
      gdpGrowthChange: -1.5,
      inflationChange: 2.0
    }
  },
  {
    id: "scenario-2",
    name: "Severe Recession",
    description: "Models a severe economic recession with significant market disruption",
    impactSeverity: "severe",
    parameters: {
      interestRateChange: 3.0,
      unemploymentRateChange: 5.0,
      gdpGrowthChange: -3.8,
      inflationChange: 4.5
    }
  },
  {
    id: "scenario-3",
    name: "Inflation Spike",
    description: "Focuses on rapid inflation increase and subsequent monetary tightening",
    impactSeverity: "high",
    parameters: {
      interestRateChange: 2.5,
      unemploymentRateChange: 1.5,
      gdpGrowthChange: -0.8,
      inflationChange: 6.0
    }
  },
  {
    id: "scenario-4",
    name: "Mild Slowdown",
    description: "Projects impacts of a mild and temporary economic slowdown",
    impactSeverity: "low",
    parameters: {
      interestRateChange: 0.5,
      unemploymentRateChange: 0.8,
      gdpGrowthChange: -0.5,
      inflationChange: 1.0
    }
  }
];

export const stressTestResults: StressTestResult[] = [
  {
    loanType: "Personal Loans",
    baselineNPA: 3.2,
    stressedNPA: 5.7,
    npaChange: 2.5,
    approvalRateChange: -8.5,
    capitalImpact: 2.8,
    resilience: "medium"
  },
  {
    loanType: "Home Loans",
    baselineNPA: 1.8,
    stressedNPA: 3.2,
    npaChange: 1.4,
    approvalRateChange: -5.2,
    capitalImpact: 1.6,
    resilience: "high"
  },
  {
    loanType: "Auto Loans",
    baselineNPA: 2.5,
    stressedNPA: 5.1,
    npaChange: 2.6,
    approvalRateChange: -7.8,
    capitalImpact: 2.3,
    resilience: "medium"
  },
  {
    loanType: "Credit Cards",
    baselineNPA: 4.8,
    stressedNPA: 9.6,
    npaChange: 4.8,
    approvalRateChange: -12.5,
    capitalImpact: 5.2,
    resilience: "low"
  },
  {
    loanType: "Business Loans",
    baselineNPA: 2.9,
    stressedNPA: 6.8,
    npaChange: 3.9,
    approvalRateChange: -9.8,
    capitalImpact: 4.1,
    resilience: "low"
  }
];

// Risk Category Forecasts for NPA Predictor
export interface RiskCategoryForecast {
  category: string;
  currentNPA: number;
  forecast1Month: number;
  forecast3Month: number;
  forecast6Month: number;
  trend: "up" | "down" | "stable";
  riskLevel: "low" | "medium" | "high" | "severe";
}

export const riskCategoryForecasts: RiskCategoryForecast[] = [
  {
    category: "Secured Loans",
    currentNPA: 1.8,
    forecast1Month: 1.9,
    forecast3Month: 2.1,
    forecast6Month: 2.3,
    trend: "up",
    riskLevel: "low"
  },
  {
    category: "Unsecured Personal",
    currentNPA: 4.2,
    forecast1Month: 4.5,
    forecast3Month: 5.1,
    forecast6Month: 5.8,
    trend: "up",
    riskLevel: "high"
  },
  {
    category: "Small Business",
    currentNPA: 3.5,
    forecast1Month: 3.6,
    forecast3Month: 3.8,
    forecast6Month: 4.0,
    trend: "up",
    riskLevel: "medium"
  },
  {
    category: "Agriculture",
    currentNPA: 5.2,
    forecast1Month: 5.0,
    forecast3Month: 4.7,
    forecast6Month: 4.5,
    trend: "down",
    riskLevel: "medium"
  }
];

// Parameter analysis data
export const correlationHeatmapData = [
  [1.00, 0.82, -0.75, 0.56, 0.33, 0.65, -0.42],
  [0.82, 1.00, -0.68, 0.48, 0.28, 0.72, -0.35],
  [-0.75, -0.68, 1.00, -0.51, -0.22, -0.58, 0.31],
  [0.56, 0.48, -0.51, 1.00, 0.15, 0.35, -0.25],
  [0.33, 0.28, -0.22, 0.15, 1.00, 0.18, -0.12],
  [0.65, 0.72, -0.58, 0.35, 0.18, 1.00, -0.28],
  [-0.42, -0.35, 0.31, -0.25, -0.12, -0.28, 1.00]
];

export const parameterImpactData = [
  { name: "Credit Score", impact: 85, trend: "stable" },
  { name: "DTI Ratio", impact: 72, trend: "up" },
  { name: "Payment History", impact: 65, trend: "stable" },
  { name: "Income Stability", impact: 58, trend: "up" },
  { name: "Loan-to-Value", impact: 52, trend: "down" },
  { name: "Account Age", impact: 45, trend: "stable" },
  { name: "Recent Enquiries", impact: 38, trend: "up" },
  { name: "Existing Credit Lines", impact: 35, trend: "stable" }
];

export const defaultRateByCreditScore = [
  { score: "500-550", defaultRate: 18.5 },
  { score: "551-600", defaultRate: 12.3 },
  { score: "601-650", defaultRate: 7.8 },
  { score: "651-700", defaultRate: 4.2 },
  { score: "701-750", defaultRate: 2.1 },
  { score: "751-800", defaultRate: 0.9 },
  { score: "801-850", defaultRate: 0.3 }
];

// Policy A/B Testing
export interface PolicyVersion {
  id: string;
  name: string;
  description: string;
  criteria: {
    creditScore: number;
    maxDti: number;
    minIncome: number;
    maxLoanToValue: number;
  };
  performance: {
    approvalRate: number;
    conversionRate: number;
    npa30Day: number;
    npa90Day: number;
    averageLoanSize: number;
    returnOnAssets: number;
  };
  status: "active" | "testing" | "draft";
}

export const policyVersions: PolicyVersion[] = [
  {
    id: "policy-a",
    name: "Current Policy",
    description: "Our standard policy with balanced risk approach",
    criteria: {
      creditScore: 650,
      maxDti: 40,
      minIncome: 25000,
      maxLoanToValue: 80
    },
    performance: {
      approvalRate: 65.2,
      conversionRate: 42.8,
      npa30Day: 4.2,
      npa90Day: 1.8,
      averageLoanSize: 850000,
      returnOnAssets: 3.5
    },
    status: "active"
  },
  {
    id: "policy-b",
    name: "Test Policy",
    description: "More stringent credit requirements with higher income threshold",
    criteria: {
      creditScore: 680,
      maxDti: 35,
      minIncome: 30000,
      maxLoanToValue: 75
    },
    performance: {
      approvalRate: 58.5,
      conversionRate: 45.2,
      npa30Day: 3.1,
      npa90Day: 1.2,
      averageLoanSize: 920000,
      returnOnAssets: 3.8
    },
    status: "testing"
  },
  {
    id: "policy-c",
    name: "Draft Policy",
    description: "Expanded criteria for lower credit tiers with risk-based pricing",
    criteria: {
      creditScore: 620,
      maxDti: 45,
      minIncome: 22000,
      maxLoanToValue: 85
    },
    performance: {
      approvalRate: 72.5,
      conversionRate: 40.1,
      npa30Day: 5.3,
      npa90Day: 2.4,
      averageLoanSize: 780000,
      returnOnAssets: 3.2
    },
    status: "draft"
  }
];

export interface PolicyRecommendation {
  id: string;
  parameter: string;
  currentValue: string | number;
  recommendedValue: string | number;
  impact: {
    npa: number;
    approvalRate: number;
    revenue: number;
  };
  confidence: number;
  implementation: "easy" | "medium" | "complex";
}

export const policyRecommendations: PolicyRecommendation[] = [
  {
    id: "rec-1",
    parameter: "Credit Score Threshold",
    currentValue: 650,
    recommendedValue: 670,
    impact: {
      npa: -0.8,
      approvalRate: -3.5,
      revenue: -1.2
    },
    confidence: 85,
    implementation: "easy"
  },
  {
    id: "rec-2",
    parameter: "Debt-to-Income Ratio",
    currentValue: "40%",
    recommendedValue: "35%",
    impact: {
      npa: -1.2,
      approvalRate: -4.8,
      revenue: -2.1
    },
    confidence: 92,
    implementation: "medium"
  },
  {
    id: "rec-3",
    parameter: "Risk-Based Pricing Tiers",
    currentValue: 3,
    recommendedValue: 5,
    impact: {
      npa: -0.5,
      approvalRate: 2.8,
      revenue: 3.5
    },
    confidence: 78,
    implementation: "complex"
  },
  {
    id: "rec-4",
    parameter: "Maximum Loan-to-Value",
    currentValue: "80%",
    recommendedValue: "75%",
    impact: {
      npa: -0.7,
      approvalRate: -3.2,
      revenue: -1.8
    },
    confidence: 88,
    implementation: "easy"
  }
];

// Portfolio DNA
export interface PortfolioAttributes {
  id: string;
  name: string;
  currentValue: number;
  idealValue: number;
  status: "optimal" | "acceptable" | "attention" | "critical";
}
