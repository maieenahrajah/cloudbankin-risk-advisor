// Mock Data for Credit Policy Agent application
export interface KPI {
  id: string;
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  unit?: string;
  description?: string;
}

export interface Loan {
  id: string;
  borrowerName: string;
  creditScore: number;
  dpd: number; // Days Past Due
  abb: number; // Average Bank Balance
  eir: number; // Expense-to-Income Ratio
  status: 'Good' | 'Poor';
}

export interface Parameter {
  id: string;
  name: string;
  impact: number; // Impact on default (1-10)
  description: string;
}

export interface PolicyRecommendation {
  parameter: string;
  currentValue: number | string;
  suggestedValue: number | string;
  justification: string;
  impact: number; // percentage impact on NPA
}

// Dashboard KPIs
export const kpiData: KPI[] = [
  {
    id: 'total-loans',
    title: 'Total Loans',
    value: '8,294',
    change: 12.5,
    trend: 'up',
    description: 'Total active loans in the portfolio',
  },
  {
    id: 'good-loans',
    title: '% Good Loans',
    value: '78.2%',
    change: 3.1,
    trend: 'up',
    description: 'Percentage of performing loans',
  },
  {
    id: 'avg-dpd',
    title: 'Avg DPD',
    value: 12.3,
    change: -4.2,
    trend: 'down',
    unit: 'days',
    description: 'Average days past due',
  },
  {
    id: 'portfolio-health',
    title: 'Portfolio Health',
    value: 87,
    change: 2.5,
    trend: 'up',
    unit: '/100',
    description: 'Overall health score based on multiple factors',
  },
];

// Mock NPA trend data
export const npaTrendData = [
  { month: 'Jan', npa: 2.1 },
  { month: 'Feb', npa: 2.3 },
  { month: 'Mar', npa: 2.4 },
  { month: 'Apr', npa: 2.2 },
  { month: 'May', npa: 2.0 },
  { month: 'Jun', npa: 1.9 },
  { month: 'Jul', npa: 1.8 },
  { month: 'Aug', npa: 1.7 },
  { month: 'Sep', npa: 1.6 },
  { month: 'Oct', npa: 1.5 },
  { month: 'Nov', npa: 1.4 },
  { month: 'Dec', npa: 1.3 },
];

// Mock loan segmentation data
export const loanSegmentationData = [
  { name: 'Good Loans', value: 78.2 },
  { name: 'Poor Loans', value: 21.8 },
];

// Mock loan data
export const generateLoans = (count: number): Loan[] => {
  const loans: Loan[] = [];
  const firstNames = ['John', 'Jane', 'Michael', 'David', 'Sarah', 'Emma', 'Richard', 'Thomas', 'Jessica', 'Daniel'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];

  for (let i = 0; i < count; i++) {
    const creditScore = Math.floor(Math.random() * 300) + 500; // 500-800
    const dpd = Math.floor(Math.random() * 80); // 0-80
    const abb = Math.floor(Math.random() * 90000) + 10000; // 10000-100000
    const eir = (Math.random() * 0.5) + 0.2; // 0.2-0.7
    const status = creditScore > 650 && dpd < 30 && eir < 0.5 ? 'Good' : 'Poor';
    
    loans.push({
      id: `L${100000 + i}`,
      borrowerName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      creditScore,
      dpd,
      abb,
      eir,
      status,
    });
  }

  return loans;
};

export const loanData = generateLoans(100);

// Mock parameter analysis data
export const parameterImpactData = [
  { parameter: 'Credit Score', impact: 8.7 },
  { parameter: 'Days Past Due', impact: 9.2 },
  { parameter: 'Expense-to-Income Ratio', impact: 7.8 },
  { parameter: 'Average Bank Balance', impact: 6.9 },
  { parameter: 'Previous Defaults', impact: 8.3 },
];

// Mock default rate by credit score
export const defaultRateByCreditScore = [
  { band: '500-550', defaultRate: 27.4 },
  { band: '551-600', defaultRate: 19.8 },
  { band: '601-650', defaultRate: 12.5 },
  { band: '651-700', defaultRate: 7.3 },
  { band: '701-750', defaultRate: 3.8 },
  { band: '751-800', defaultRate: 1.2 },
];

// Mock policy recommendations
export const policyRecommendations: PolicyRecommendation[] = [
  {
    parameter: 'Credit Score',
    currentValue: 650,
    suggestedValue: 690,
    justification: '2.8x higher default rate below 690',
    impact: -0.6,
  },
  {
    parameter: 'Max DPD',
    currentValue: 30,
    suggestedValue: 20,
    justification: 'Strong correlation with defaults after 20 days',
    impact: -0.4,
  },
  {
    parameter: 'Min ABB',
    currentValue: 15000,
    suggestedValue: 25000,
    justification: 'Higher balances indicate better repayment ability',
    impact: -0.3,
  },
  {
    parameter: 'Max EIR',
    currentValue: '50%',
    suggestedValue: '40%',
    justification: 'Significantly higher risk above 40% EIR',
    impact: -0.2,
  },
];

// Mock what-if scenario data
export const whatIfBaselineData = {
  npa: 2.0,
  approvalRate: 65.0,
  creditScore: 650,
  maxCreditEnquiries: 3,
  minABB: 15000,
  maxEIR: 0.5,
};

// Mock heatmap data
export const correlationHeatmapData = [
  { parameter1: 'Credit Score', parameter2: 'Default', value: -0.87 },
  { parameter1: 'DPD', parameter2: 'Default', value: 0.92 },
  { parameter1: 'ABB', parameter2: 'Default', value: -0.69 },
  { parameter1: 'EIR', parameter2: 'Default', value: 0.78 },
  { parameter1: 'Previous Defaults', parameter2: 'Default', value: 0.83 },
];

// AI Explanation Engine Mock Data
export interface LoanRejectionExplanation {
  loanId: string;
  borrowerName: string;
  rejectionReason: string;
  confidenceScore: number;
  decisionFactors: {
    factor: string;
    impact: 'high' | 'medium' | 'low';
    value: string | number;
    threshold: string | number;
  }[];
  alternatives: string[];
}

export const rejectionExplanations: LoanRejectionExplanation[] = [
  {
    loanId: "L100024",
    borrowerName: "Rajesh Kumar",
    rejectionReason: "Low credit score combined with high expense-to-income ratio",
    confidenceScore: 95,
    decisionFactors: [
      { factor: "Credit Score", impact: "high", value: 580, threshold: 650 },
      { factor: "Expense-to-Income Ratio", impact: "high", value: "62%", threshold: "50%" },
      { factor: "Days Past Due", impact: "medium", value: 45, threshold: 30 },
      { factor: "Average Bank Balance", impact: "low", value: "₹18,500", threshold: "₹15,000" }
    ],
    alternatives: [
      "Improve credit score to at least 650",
      "Reduce expenses to bring EIR below 50%",
      "Apply with a co-borrower with better credit history"
    ]
  },
  {
    loanId: "L100045",
    borrowerName: "Priya Singh",
    rejectionReason: "Recent defaults on existing loan obligations",
    confidenceScore: 98,
    decisionFactors: [
      { factor: "Recent Defaults", impact: "high", value: 2, threshold: 0 },
      { factor: "Days Past Due", impact: "high", value: 60, threshold: 30 },
      { factor: "Credit Score", impact: "medium", value: 620, threshold: 650 },
      { factor: "Loan Amount", impact: "low", value: "₹500,000", threshold: "₹300,000" }
    ],
    alternatives: [
      "Clear existing defaults and reapply after 3 months",
      "Apply for a lower loan amount below ₹300,000",
      "Provide additional collateral to secure the loan"
    ]
  },
  {
    loanId: "L100089",
    borrowerName: "Amit Patel",
    rejectionReason: "Insufficient income documentation and unstable employment history",
    confidenceScore: 92,
    decisionFactors: [
      { factor: "Income Proof", impact: "high", value: "Incomplete", threshold: "Complete" },
      { factor: "Employment Stability", impact: "high", value: "8 months", threshold: "12 months" },
      { factor: "Average Bank Balance", impact: "medium", value: "₹12,000", threshold: "₹15,000" },
      { factor: "Credit Enquiries", impact: "low", value: 4, threshold: 3 }
    ],
    alternatives: [
      "Provide complete income documentation for the last 24 months",
      "Complete 4 more months at current employment",
      "Maintain higher average balance of at least ₹15,000 for 3 months"
    ]
  }
];

// Hidden Pattern Detector Mock Data
export interface RiskPattern {
  id: string;
  pattern: string;
  confidence: number;
  defaultRate: number;
  averageRate: number;
  increase: number;
  description: string;
  impactedLoans: number;
}

export const hiddenRiskPatterns: RiskPattern[] = [
  {
    id: "pattern-1",
    pattern: "High Income + High Credit Enquiries",
    confidence: 87,
    defaultRate: 24.5,
    averageRate: 12.8,
    increase: 91.4,
    description: "Borrowers with monthly income > ₹80,000 and credit enquiries > 5 in last 3 months have a significantly higher default rate",
    impactedLoans: 243
  },
  {
    id: "pattern-2",
    pattern: "Job Change + High Loan Amount",
    confidence: 92,
    defaultRate: 32.7,
    averageRate: 12.8,
    increase: 155.5,
    description: "Borrowers who changed jobs within 6 months and applied for loans > ₹5,00,000 default at much higher rates",
    impactedLoans: 178
  },
  {
    id: "pattern-3",
    pattern: "Low Credit + High ABB",
    confidence: 84,
    defaultRate: 29.2,
    averageRate: 12.8,
    increase: 128.1,
    description: "Borrowers with credit scores < 600 but average bank balance > ₹50,000 show surprising default patterns",
    impactedLoans: 156
  },
  {
    id: "pattern-4",
    pattern: "Self-Employed + Multiple Active Loans",
    confidence: 89,
    defaultRate: 27.8,
    averageRate: 12.8,
    increase: 117.2,
    description: "Self-employed borrowers with 3+ active loans have significantly higher default rates compared to average",
    impactedLoans: 203
  }
];

export interface CorrelationData {
  parameter1: string;
  parameter2: string;
  value: number;
}

export const multidimensionalCorrelations: CorrelationData[] = [
  { parameter1: "Income", parameter2: "Credit Enquiries", value: 0.78 },
  { parameter1: "Credit Score", parameter2: "Credit Enquiries", value: -0.62 },
  { parameter1: "Income", parameter2: "Loan Amount", value: 0.85 },
  { parameter1: "ABB", parameter2: "Income", value: 0.71 },
  { parameter1: "Credit Score", parameter2: "DPD", value: -0.84 },
  { parameter1: "ABB", parameter2: "DPD", value: -0.58 },
  { parameter1: "Income", parameter2: "DPD", value: -0.52 },
  { parameter1: "Credit Enquiries", parameter2: "DPD", value: 0.67 },
  { parameter1: "ABB", parameter2: "Loan Amount", value: 0.64 },
  { parameter1: "Credit Score", parameter2: "ABB", value: 0.49 },
];

// Policy A/B Testing Mock Data
export interface PolicyVersion {
  id: string;
  name: string;
  description: string;
  criteria: {
    minCreditScore: number;
    maxEIR: number;
    minABB: number;
    maxDPD: number;
    maxEnquiries: number;
  };
  performance: {
    npaRate: number;
    approvalRate: number;
    loanVolume: number;
    avgROI: number;
  };
}

export const policyVersions: PolicyVersion[] = [
  {
    id: "policy-a",
    name: "Current Policy",
    description: "Our current lending policy with standard risk parameters",
    criteria: {
      minCreditScore: 650,
      maxEIR: 50,
      minABB: 15000,
      maxDPD: 30,
      maxEnquiries: 3
    },
    performance: {
      npaRate: 3.2,
      approvalRate: 68.4,
      loanVolume: 24500000,
      avgROI: 14.5
    }
  },
  {
    id: "policy-b",
    name: "Conservative Policy",
    description: "More stringent criteria focusing on borrower quality",
    criteria: {
      minCreditScore: 700,
      maxEIR: 40,
      minABB: 25000,
      maxDPD: 15,
      maxEnquiries: 2
    },
    performance: {
      npaRate: 1.8,
      approvalRate: 42.3,
      loanVolume: 15700000,
      avgROI: 15.2
    }
  },
  {
    id: "policy-c",
    name: "Growth Policy",
    description: "More relaxed criteria to increase loan volume",
    criteria: {
      minCreditScore: 600,
      maxEIR: 60,
      minABB: 10000,
      maxDPD: 45,
      maxEnquiries: 4
    },
    performance: {
      npaRate: 5.1,
      approvalRate: 82.7,
      loanVolume: 36800000,
      avgROI: 13.8
    }
  }
];

// Geo-Risk Map Data
export interface RegionData {
  state: string;
  npaRate: number;
  approvalRate: number;
  loanVolume: number;
  suggestedEIRCap: number;
  riskLevel: 'high' | 'medium' | 'low';
  districts?: {
    name: string;
    npaRate: number;
    approvalRate: number;
    loanVolume: number;
  }[];
}

export const geoRiskData: RegionData[] = [
  {
    state: "Maharashtra",
    npaRate: 2.8,
    approvalRate: 72.5,
    loanVolume: 4500000000,
    suggestedEIRCap: 60,
    riskLevel: "low",
    districts: [
      { name: "Mumbai", npaRate: 2.1, approvalRate: 78.2, loanVolume: 2200000000 },
      { name: "Pune", npaRate: 2.4, approvalRate: 75.8, loanVolume: 980000000 },
      { name: "Nagpur", npaRate: 3.2, approvalRate: 68.4, loanVolume: 420000000 }
    ]
  },
  {
    state: "Tamil Nadu",
    npaRate: 3.1,
    approvalRate: 70.2,
    loanVolume: 3200000000,
    suggestedEIRCap: 55,
    riskLevel: "medium",
    districts: [
      { name: "Chennai", npaRate: 2.8, approvalRate: 72.6, loanVolume: 1800000000 },
      { name: "Coimbatore", npaRate: 3.2, approvalRate: 69.4, loanVolume: 740000000 },
      { name: "Madurai", npaRate: 3.5, approvalRate: 67.2, loanVolume: 380000000 }
    ]
  },
  {
    state: "Uttar Pradesh",
    npaRate: 4.5,
    approvalRate: 58.7,
    loanVolume: 2800000000,
    suggestedEIRCap: 45,
    riskLevel: "high",
    districts: [
      { name: "Lucknow", npaRate: 3.9, approvalRate: 62.3, loanVolume: 940000000 },
      { name: "Kanpur", npaRate: 4.6, approvalRate: 57.5, loanVolume: 680000000 },
      { name: "Varanasi", npaRate: 5.2, approvalRate: 54.8, loanVolume: 420000000 }
    ]
  },
  {
    state: "Karnataka",
    npaRate: 2.5,
    approvalRate: 76.3,
    loanVolume: 3800000000,
    suggestedEIRCap: 65,
    riskLevel: "low",
    districts: [
      { name: "Bangalore", npaRate: 2.2, approvalRate: 78.5, loanVolume: 2400000000 },
      { name: "Mysore", npaRate: 2.7, approvalRate: 74.2, loanVolume: 680000000 },
      { name: "Hubli", npaRate: 3.1, approvalRate: 70.8, loanVolume: 420000000 }
    ]
  },
  {
    state: "Gujarat",
    npaRate: 2.9,
    approvalRate: 73.8,
    loanVolume: 3100000000,
    suggestedEIRCap: 58,
    riskLevel: "medium",
    districts: [
      { name: "Ahmedabad", npaRate: 2.6, approvalRate: 75.4, loanVolume: 1600000000 },
      { name: "Surat", npaRate: 3.0, approvalRate: 72.1, loanVolume: 850000000 },
      { name: "Vadodara", npaRate: 3.2, approvalRate: 71.5, loanVolume: 420000000 }
    ]
  }
];

// Borrower Cohort Explorer Data
export interface BorrowerCohort {
  id: string;
  name: string;
  count: number;
  npaRate: number;
  avgDPD: number;
  approvalRate: number;
  avgLoanAmount: number;
  riskLevel: 'high' | 'medium' | 'low';
}

export const ageCohorts: BorrowerCohort[] = [
  {
    id: "age-1",
    name: "21-25",
    count: 1845,
    npaRate: 6.2,
    avgDPD: 18.4,
    approvalRate: 52.7,
    avgLoanAmount: 150000,
    riskLevel: "high"
  },
  {
    id: "age-2",
    name: "26-30",
    count: 3250,
    npaRate: 3.8,
    avgDPD: 12.6,
    approvalRate: 67.5,
    avgLoanAmount: 320000,
    riskLevel: "medium"
  },
  {
    id: "age-3",
    name: "31-40",
    count: 2780,
    npaRate: 2.5,
    avgDPD: 8.4,
    approvalRate: 78.3,
    avgLoanAmount: 480000,
    riskLevel: "low"
  },
  {
    id: "age-4",
    name: "41-50",
    count: 1920,
    npaRate: 1.9,
    avgDPD: 6.8,
    approvalRate: 82.1,
    avgLoanAmount: 620000,
    riskLevel: "low"
  },
  {
    id: "age-5",
    name: "51+",
    count: 980,
    npaRate: 2.7,
    avgDPD: 9.2,
    approvalRate: 74.5,
    avgLoanAmount: 540000,
    riskLevel: "medium"
  }
];

export const incomeCohorts: BorrowerCohort[] = [
  {
    id: "income-1",
    name: "₹10K-₹25K",
    count: 2150,
    npaRate: 5.8,
    avgDPD: 17.6,
    approvalRate: 48.5,
    avgLoanAmount: 120000,
    riskLevel: "high"
  },
  {
    id: "income-2",
    name: "₹25K-₹50K",
    count: 3680,
    npaRate: 3.5,
    avgDPD: 11.2,
    approvalRate: 62.8,
    avgLoanAmount: 280000,
    riskLevel: "medium"
  },
  {
    id: "income-3",
    name: "₹50K-₹75K",
    count: 2410,
    npaRate: 2.2,
    avgDPD: 7.5,
    approvalRate: 75.4,
    avgLoanAmount: 450000,
    riskLevel: "low"
  },
  {
    id: "income-4",
    name: "₹75K-₹1L",
    count: 1540,
    npaRate: 1.8,
    avgDPD: 5.9,
    approvalRate: 84.2,
    avgLoanAmount: 680000,
    riskLevel: "low"
  },
  {
    id: "income-5",
    name: "₹1L+",
    count: 850,
    npaRate: 1.5,
    avgDPD: 4.5,
    approvalRate: 89.7,
    avgLoanAmount: 1250000,
    riskLevel: "low"
  }
];

export const employmentCohorts: BorrowerCohort[] = [
  {
    id: "employment-1",
    name: "Salaried - Private",
    count: 5280,
    npaRate: 2.8,
    avgDPD: 8.6,
    approvalRate: 74.5,
    avgLoanAmount: 380000,
    riskLevel: "low"
  },
  {
    id: "employment-2",
    name: "Salaried - Public",
    count: 1850,
    npaRate: 1.5,
    avgDPD: 5.2,
    approvalRate: 86.3,
    avgLoanAmount: 420000,
    riskLevel: "low"
  },
  {
    id: "employment-3",
    name: "Self-Employed",
    count: 2450,
    npaRate: 4.7,
    avgDPD: 14.8,
    approvalRate: 58.2,
    avgLoanAmount: 560000,
    riskLevel: "high"
  },
  {
    id: "employment-4",
    name: "Business Owner",
    count: 1250,
    npaRate: 3.2,
    avgDPD: 10.5,
    approvalRate: 68.7,
    avgLoanAmount: 780000,
    riskLevel: "medium"
  }
];

// Portfolio DNA Mock Data
export interface PortfolioAttributes {
  category: string;
  currentValue: number;
  idealValue: number;
  improvementPotential: number;
  recommendation: string;
}

export const portfolioAttributes: PortfolioAttributes[] = [
  {
    category: "High Credit Score Loans (700+)",
    currentValue: 38,
    idealValue: 55,
    improvementPotential: 17,
    recommendation: "Increase marketing to high-quality borrowers"
  },
  {
    category: "Low DTI Ratio (<40%)",
    currentValue: 42,
    idealValue: 60,
    improvementPotential: 18,
    recommendation: "Adjust DTI requirements in underwriting"
  },
  {
    category: "High Income Borrowers (₹75K+)",
    currentValue: 28,
    idealValue: 40,
    improvementPotential: 12,
    recommendation: "Create premium loan products for high-income segments"
  },
  {
    category: "Stable Employment (>2 years)",
    currentValue: 45,
    idealValue: 60,
    improvementPotential: 15,
    recommendation: "Give more weightage to employment stability"
  },
  {
    category: "Low Utilization (<30%)",
    currentValue: 36,
    idealValue: 50,
    improvementPotential: 14,
    recommendation: "Include credit utilization in scoring models"
  },
  {
    category: "Zero DPD Accounts",
    currentValue: 58,
    idealValue: 70,
    improvementPotential: 12,
    recommendation: "Improve early warning systems to prevent DPD"
  }
];

export interface LoanTypeMix {
  type: string;
  currentPercentage: number;
  idealPercentage: number;
  risk: 'high' | 'medium' | 'low';
  avgROI: number;
}

export const loanTypeMix: LoanTypeMix[] = [
  {
    type: "Personal Loan",
    currentPercentage: 42,
    idealPercentage: 35,
    risk: "high",
    avgROI: 18.5
  },
  {
    type: "Home Loan",
    currentPercentage: 28,
    idealPercentage: 35,
    risk: "low",
    avgROI: 9.8
  },
  {
    type: "Vehicle Loan",
    currentPercentage: 18,
    idealPercentage: 20,
    risk: "medium",
    avgROI: 12.5
  },
  {
    type: "Education Loan",
    currentPercentage: 7,
    idealPercentage: 5,
    risk: "medium",
    avgROI: 11.2
  },
  {
    type: "Business Loan",
    currentPercentage: 5,
    idealPercentage: 5,
    risk: "high",
    avgROI: 16.8
  }
];

// NPA Risk Predictor Mock Data
export interface NPAForecast {
  month: string;
  actual?: number;
  predicted: number;
  lowerBound: number;
  upperBound: number;
}

export const npaForecastData: NPAForecast[] = [
  { month: "Jan", actual: 2.1, predicted: 2.1, lowerBound: 2.0, upperBound: 2.2 },
  { month: "Feb", actual: 2.3, predicted: 2.2, lowerBound: 2.1, upperBound: 2.4 },
  { month: "Mar", actual: 2.4, predicted: 2.4, lowerBound: 2.2, upperBound: 2.5 },
  { month: "Apr", actual: 2.2, predicted: 2.3, lowerBound: 2.1, upperBound: 2.6 },
  { month: "May", actual: 2.0, predicted: 2.1, lowerBound: 1.9, upperBound: 2.4 },
  { month: "Jun", actual: 1.9, predicted: 1.9, lowerBound: 1.7, upperBound: 2.1 },
  { month: "Jul", actual: 1.8, predicted: 1.8, lowerBound: 1.6, upperBound: 2.0 },
  { month: "Aug", actual: 1.7, predicted: 1.7, lowerBound: 1.5, upperBound: 1.9 },
  { month: "Sep", actual: 1.6, predicted: 1.6, lowerBound: 1.4, upperBound: 1.8 },
  { month: "Oct", actual: 1.5, predicted: 1.5, lowerBound: 1.3, upperBound: 1.7 },
  { month: "Nov", actual: 1.4, predicted: 1.4, lowerBound: 1.2, upperBound: 1.6 },
  { month: "Dec", actual: 1.3, predicted: 1.3, lowerBound: 1.1, upperBound: 1.5 },
  { month: "Jan", predicted: 1.4, lowerBound: 1.2, upperBound: 1.6 },
  { month: "Feb", predicted: 1.5, lowerBound: 1.2, upperBound: 1.8 },
  { month: "Mar", predicted: 1.6, lowerBound: 1.3, upperBound: 1.9 },
  { month: "Apr", predicted: 1.7, lowerBound: 1.4, upperBound: 2.0 },
  { month: "May", predicted: 1.8, lowerBound: 1.5, upperBound: 2.1 },
  { month: "Jun", predicted: 1.9, lowerBound: 1.6, upperBound: 2.2 }
];

export interface RiskCategoryForecast {
  category: string;
  currentNPA: number;
  forecastNPA: number;
  change: number;
  riskLevel: 'high' | 'medium' | 'low';
}

export const riskCategoryForecasts: RiskCategoryForecast[] = [
  {
    category: "Personal Loans",
    currentNPA: 3.2,
    forecastNPA: 3.8,
    change: 0.6,
    riskLevel: "high"
  },
  {
    category: "Home Loans",
    currentNPA: 1.1,
    forecastNPA: 1.2,
    change: 0.1,
    riskLevel: "low"
  },
  {
    category: "Vehicle Loans",
    currentNPA: 2.4,
    forecastNPA: 2.7,
    change: 0.3,
    riskLevel: "medium"
  },
  {
    category: "Business Loans",
    currentNPA: 4.1,
    forecastNPA: 5.2,
    change: 1.1,
    riskLevel: "high"
  },
  {
    category: "Credit Cards",
    currentNPA: 5.7,
    forecastNPA: 6.8,
    change: 1.1,
    riskLevel: "high"
  }
];

// Loan Stress Testing Mock Data
export interface StressScenario {
  id: string;
  name: string;
  description: string;
  impactSeverity: 'low' | 'medium' | 'high' | 'severe';
  parameters: {
    interestRateChange: number;
    unemploymentRateChange: number;
    gdpGrowthChange: number;
    inflationChange: number;
  };
}

export const stressScenarios: StressScenario[] = [
  {
    id: "baseline",
    name: "Baseline",
    description: "Current economic conditions with no stress factors",
    impactSeverity: "low",
    parameters: {
      interestRateChange: 0,
      unemploymentRateChange: 0,
      gdpGrowthChange: 0,
      inflationChange: 0
    }
  },
  {
    id: "mild-recession",
    name: "Mild Recession",
    description: "Mild economic downturn with moderate impact on loan performance",
    impactSeverity: "medium",
    parameters: {
      interestRateChange: 1,
      unemploymentRateChange: 2,
      gdpGrowthChange: -1.5,
      inflationChange: 1.5
    }
  },
  {
    id: "severe-recession",
    name: "Severe Recession",
    description: "Significant economic downturn with major impact on loan performance",
    impactSeverity: "high",
    parameters: {
      interestRateChange: 2.5,
      unemploymentRateChange: 4,
      gdpGrowthChange: -3.5,
      inflationChange: 3
    }
  },
  {
    id: "financial-crisis",
    name: "Financial Crisis",
    description: "Extreme economic shock similar to 2008 financial crisis",
    impactSeverity: "severe",
    parameters: {
      interestRateChange: 4,
      unemploymentRateChange: 7,
      gdpGrowthChange: -6,
      inflationChange: 5
    }
  }
];

export interface StressTestResult {
  loanType: string;
  baselineNPA: number;
  stressedNPA: number;
  npaChange: number;
  approvalRateChange: number;
  capitalImpact: number;
  resilience: 'high' | 'medium' | 'low';
}

export const stressTestResults: StressTestResult[] = [
  {
    loanType: "Personal Loans",
    baselineNPA: 3.2,
    stressedNPA: 7.8,
    npaChange: 4.6,
    approvalRateChange: -28.5,
    capitalImpact: -12.4,
    resilience: "low"
  },
  {
    loanType: "Home Loans",
    baselineNPA: 1.1,
    stressedNPA: 2.4,
    npaChange: 1.3,
    approvalRateChange: -15.2,
    capitalImpact: -5.8,
    resilience: "high"
  },
  {
    loanType: "Vehicle Loans",
    baselineNPA: 2.4,
    stressedNPA: 5.7,
    npaChange: 3.3,
    approvalRateChange: -22.6,
    capitalImpact: -9.7,
    resilience: "medium"
  },
  {
    loanType: "Business Loans",
    baselineNPA: 4.1,
    stressedNPA: 10.2,
    npaChange: 6.1,
    approvalRateChange: -34.5,
    capitalImpact: -18.3,
    resilience: "low"
  },
  {
    loanType: "Education Loans",
    baselineNPA: 2.8,
    stressedNPA: 5.1,
    npaChange: 2.3,
    approvalRateChange: -19.8,
    capitalImpact: -7.6,
    resilience: "medium"
  }
];

export interface LoanApprovalExplanation {
  loanId: string;
  borrowerName: string;
  approvalReason: string;
  confidenceScore: number;
  decisionFactors: string[];
  flowChartData: FlowChartNode[];
}

export const approvalExplanations: LoanApprovalExplanation[] = [
  {
    loanId: "LA001",
    borrowerName: "Rajesh Kumar",
    approvalReason: "Strong credit history and stable income profile",
    confidenceScore: 98,
    decisionFactors: [
      "Credit score above 750",
      "Income stability for 24+ months",
      "Low debt-to-income ratio",
      "Clean repayment history"
    ],
    flowChartData: [
      {
        id: "1",
        type: "input",
        data: { label: "Loan Application" }
      },
      {
        id: "2",
        type: "default",
        data: { label: "Credit Score Check: 780" }
      },
      {
        id: "3",
        type: "default",
        data: { label: "Income Verification: ₹85,000/month" }
      },
      {
        id: "4",
        type: "output",
        data: { label: "Approved: Low Risk Profile" }
      }
    ]
  },
  {
    loanId: "LA002",
    borrowerName: "Priya Singh",
    approvalReason: "Excellent debt service coverage ratio",
    confidenceScore: 95,
    decisionFactors: [
      "Consistent income growth",
      "Low existing debt",
      "High savings ratio",
      "Strong asset backing"
    ],
    flowChartData: [
      {
        id: "1",
        type: "input",
        data: { label: "Loan Application" }
      },
      {
        id: "2",
        type: "default",
        data: { label: "Income Analysis: Positive Trend" }
      },
      {
        id: "3",
        type: "default",
        data: { label: "Debt Analysis: Low Risk" }
      },
      {
        id: "4",
        type: "output",
        data: { label: "Approved: Strong Financial Health" }
      }
    ]
  }
];
