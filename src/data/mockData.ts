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

export const loanPortfolioData = [
  { label: "Agriculture", value: 15, color: "#0088FE" },
  { label: "Manufacturing", value: 25, color: "#00C49F" },
  { label: "Services", value: 30, color: "#FFBB28" },
  { label: "Retail", value: 20, color: "#FF8042" },
  { label: "Other", value: 10, color: "#8884d8" },
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
