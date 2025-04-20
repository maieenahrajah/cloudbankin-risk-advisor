
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
