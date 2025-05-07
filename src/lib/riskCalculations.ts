
// Risk calculation utilities for the What-If scenario module

/**
 * Calculate risk score based on scenario parameters
 * Lower score is better (less risky)
 */
export const calculateRiskScore = (scenario: any): number => {
  // Base score - lower is better
  let score = 500;
  
  // Credit score impact (good credit score lowers risk)
  score -= (scenario.creditScore - 650) * 0.5;
  
  // Credit enquiries impact (more enquiries increases risk)
  score += scenario.maxCreditEnquiries * 10;
  
  // Bank balance impact (higher balance lowers risk)
  score -= Math.min(scenario.minABB / 1000, 30);
  
  // EIR impact (higher EIR increases risk)
  score += scenario.maxEIR * 100;
  
  // Additional factors impact
  if (scenario.chequeBounces) {
    score += scenario.chequeBounces * 20;
  }
  
  if (scenario.willfulDefault) {
    score += 150;
  }
  
  if (scenario.unsecuredLoansCount) {
    score += scenario.unsecuredLoansCount * 15;
  }
  
  if (scenario.securedLoansCount) {
    score += scenario.securedLoansCount * 7;
  }
  
  // DPD impacts
  if (scenario.activeDpd1Plus) {
    score += scenario.activeDpd1Plus * 5;
  }
  
  if (scenario.closedDpd1Plus) {
    score += scenario.closedDpd1Plus * 3;
  }
  
  if (scenario.activeDpd30Plus) {
    score += scenario.activeDpd30Plus * 15;
  }
  
  if (scenario.closedDpd30Plus) {
    score += scenario.closedDpd30Plus * 10;
  }
  
  if (scenario.activeDpd60Plus) {
    score += scenario.activeDpd60Plus * 30;
  }
  
  if (scenario.closedDpd60Plus) {
    score += scenario.closedDpd60Plus * 20;
  }
  
  if (scenario.activeDpd90Plus) {
    score += scenario.activeDpd90Plus * 50;
  }
  
  if (scenario.closedDpd90Plus) {
    score += scenario.closedDpd90Plus * 35;
  }
  
  // Settlements and write-offs
  if (scenario.ccSettlements3Years) {
    score += scenario.ccSettlements3Years * 25;
  }
  
  if (scenario.ccWriteOffs3Years) {
    score += scenario.ccWriteOffs3Years * 40;
  }
  
  if (scenario.nonCcSettlements3Years) {
    score += scenario.nonCcSettlements3Years * 30;
  }
  
  if (scenario.nonCcWriteOffs3Years) {
    score += scenario.nonCcWriteOffs3Years * 45;
  }
  
  // Defaults
  if (scenario.activeDefaultsCount) {
    score += scenario.activeDefaultsCount * 35;
  }
  
  if (scenario.closedDefaultsCount) {
    score += scenario.closedDefaultsCount * 20;
  }
  
  // Open and closed accounts
  if (scenario.openLoanAccounts > 2) {
    score += (scenario.openLoanAccounts - 2) * 10;
  }
  
  // EMI bounces
  if (scenario.emiBounce0) {
    score += scenario.emiBounce0 * 25;
  }
  
  if (scenario.emiBounce1) {
    score += scenario.emiBounce1 * 20;
  }
  
  if (scenario.emiBounce2) {
    score += scenario.emiBounce2 * 15;
  }
  
  if (scenario.emiBounce3) {
    score += scenario.emiBounce3 * 10;
  }
  
  // Bureau history (longer history is better)
  if (scenario.bureauHistory < 24) {
    score += (24 - scenario.bureauHistory) * 2;
  } else {
    score -= Math.min((scenario.bureauHistory - 24) * 0.5, 10);
  }
  
  // Ensure score stays within reasonable bounds (300-900, like credit scores)
  return Math.max(Math.min(Math.round(score), 900), 300);
};
