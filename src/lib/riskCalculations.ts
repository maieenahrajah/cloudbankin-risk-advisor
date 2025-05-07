
/**
 * Calculate risk score based on scenario parameters
 * Lower score is better (less risky)
 */
export const calculateRiskScore = (scenario: any): number => {
  let score = 700; // Base score
  
  // Basic parameter impact
  score -= Math.max(0, scenario.creditScore - 650) * 0.5; // Higher credit score reduces risk
  score += Math.max(0, 650 - scenario.creditScore) * 1.0; // Lower credit score increases risk
  score += scenario.maxCreditEnquiries * 15; // More credit enquiries increase risk
  score -= Math.min(30000, scenario.minABB) / 1000; // Higher minimum balance reduces risk
  score += scenario.maxEIR * 200; // Higher expense-to-income ratio increases risk
  
  // Advanced parameter impacts
  if (scenario.chequeBounces) {
    score += scenario.chequeBounces * 30;
  }
  
  if (scenario.willfulDefault) {
    score += 150; // Large penalty for willful default
  }
  
  // Loan counts
  if (scenario.unsecuredLoansCount) {
    score += scenario.unsecuredLoansCount * 20;
  }
  
  if (scenario.securedLoansCount) {
    score += scenario.securedLoansCount * 10; // Less impact than unsecured
  }
  
  // DPD impacts - more severe the longer the DPD
  score += (scenario.activeDpd1Plus || 0) * 10;
  score += (scenario.closedDpd1Plus || 0) * 5;
  score += (scenario.activeDpd30Plus || 0) * 20;
  score += (scenario.closedDpd30Plus || 0) * 10;
  score += (scenario.activeDpd60Plus || 0) * 40;
  score += (scenario.closedDpd60Plus || 0) * 20;
  score += (scenario.activeDpd90Plus || 0) * 80;
  score += (scenario.closedDpd90Plus || 0) * 40;
  
  // Settlements and write-offs
  score += (scenario.ccSettlements3Years || 0) * 40;
  score += (scenario.ccWriteOffs3Years || 0) * 60;
  score += (scenario.nonCcSettlements3Years || 0) * 50;
  score += (scenario.nonCcWriteOffs3Years || 0) * 70;
  
  // Default counts
  score += (scenario.activeDefaultsCount || 0) * 50;
  score += (scenario.closedDefaultsCount || 0) * 25;
  
  // EMI bounces
  score += (scenario.emiBounce0 || 0) * 5;
  score += (scenario.emiBounce1 || 0) * 10;
  score += (scenario.emiBounce2 || 0) * 20;
  score += (scenario.emiBounce3 || 0) * 40;
  
  // Clamp score to reasonable range
  return Math.max(Math.min(score, 1000), 300);
};

// Additional risk calculation functions can be added here
