
/**
 * Calculate risk score based on scenario parameters
 * Lower score is better (less risky)
 */
export const calculateRiskScore = (scenario: any): number => {
  let score = 700; // Base score
  
  // Basic parameter impact - amplified for more visible changes
  score -= Math.max(0, scenario.creditScore - 650) * 1.2; // Higher credit score reduces risk (increased impact)
  score += Math.max(0, 650 - scenario.creditScore) * 2.0; // Lower credit score increases risk (increased impact)
  score += scenario.maxCreditEnquiries * 25; // More credit enquiries increase risk (increased impact)
  score -= Math.min(30000, scenario.minABB) / 800; // Higher minimum balance reduces risk (increased impact)
  score += scenario.maxEIR * 300; // Higher expense-to-income ratio increases risk (increased impact)
  
  // Advanced parameter impacts - amplified for more visible changes
  if (scenario.chequeBounces) {
    score += scenario.chequeBounces * 50; // Increased impact
  }
  
  if (scenario.willfulDefault) {
    score += 200; // Larger penalty for willful default
  }
  
  // Loan counts - amplified impacts
  if (scenario.unsecuredLoansCount) {
    score += scenario.unsecuredLoansCount * 35; // Increased impact
  }
  
  if (scenario.securedLoansCount) {
    score += scenario.securedLoansCount * 15; // Increased impact but still less than unsecured
  }
  
  // DPD impacts - more severe the longer the DPD - amplified impacts
  score += (scenario.activeDpd1Plus || 0) * 15;
  score += (scenario.closedDpd1Plus || 0) * 8;
  score += (scenario.activeDpd30Plus || 0) * 30;
  score += (scenario.closedDpd30Plus || 0) * 15;
  score += (scenario.activeDpd60Plus || 0) * 60;
  score += (scenario.closedDpd60Plus || 0) * 30;
  score += (scenario.activeDpd90Plus || 0) * 100;
  score += (scenario.closedDpd90Plus || 0) * 50;
  
  // Settlements and write-offs - amplified impacts
  score += (scenario.ccSettlements3Years || 0) * 60;
  score += (scenario.ccWriteOffs3Years || 0) * 90;
  score += (scenario.nonCcSettlements3Years || 0) * 70;
  score += (scenario.nonCcWriteOffs3Years || 0) * 100;
  
  // Default counts - amplified impacts
  score += (scenario.activeDefaultsCount || 0) * 80;
  score += (scenario.closedDefaultsCount || 0) * 40;
  
  // EMI bounces - amplified impacts
  score += (scenario.emiBounce0 || 0) * 10;
  score += (scenario.emiBounce1 || 0) * 20;
  score += (scenario.emiBounce2 || 0) * 35;
  score += (scenario.emiBounce3 || 0) * 60;
  
  // Add credit history length impact (shorter history = higher risk)
  const bureauHistory = scenario.bureauHistory || 36; // Default to 36 months if not specified
  if (bureauHistory < 12) {
    score += 150; // Significant penalty for very short credit history
  } else if (bureauHistory < 24) {
    score += 75; // Moderate penalty for shorter credit history
  } else if (bureauHistory < 36) {
    score += 25; // Small penalty for medium credit history
  } else {
    score -= Math.min((bureauHistory - 36) * 5, 50); // Bonus for longer history, capped at 50
  }
  
  // Impact of total open accounts (too many or too few can be risky)
  const totalOpenAccounts = (scenario.openLoanAccounts || 0); 
  if (totalOpenAccounts === 0) {
    score += 50; // Penalty for no credit history
  } else if (totalOpenAccounts > 5) {
    score += (totalOpenAccounts - 5) * 20; // Penalty for too many open accounts
  }
  
  // Clamp score to reasonable range - widened range for more dramatic effect
  return Math.max(Math.min(score, 1000), 300);
};

// Additional risk calculation functions can be added here

