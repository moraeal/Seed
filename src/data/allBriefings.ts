import { policyFundRiskBriefing } from "./policyFundRiskBriefing";
import { ktrCampaign } from "./ktrCampaign";
import { taxWatchCase, civicNotice } from "./civicHubArticles";
import { pensionReciprocityBriefing } from "./pensionReciprocityBriefing";
import { realEstateSupervisorCitizenFreedomBriefing } from "./realEstateSupervisorCitizenFreedomBriefing";
import { briefings, type Briefing } from "./briefings";
import { gyeonggiBriefingDisplay } from "./gyeonggiBriefingDisplay";
import { nationalBudgetBriefing } from "./nationalBudgetBriefing";
import { publicBroadcastingBriefing } from "./publicBroadcastingBriefing";
import { publicInterestTravelBriefing } from "./publicInterestTravelBriefing";
import { socialEconomyBriefing } from "./socialEconomyBriefing";
import { socialEconomyFairnessBriefing } from "./socialEconomyFairnessBriefing";
import { hearingAccountabilityBriefing } from "./hearingAccountabilityBriefing";
import { partyDissolutionBriefing } from "./partyDissolutionBriefing";
import { yeosuIslandExpoBriefing } from "./yeosuIslandExpoBriefing";
import { futureResponseFundBriefing } from "./futureResponseFundBriefing";
import { socialSolidarityEconomyLawBriefing } from "./socialSolidarityEconomyLawBriefing";
import { activistFundingPressureBriefing } from "./activistFundingPressureBriefing";
import { hospitalInheritanceTaxBriefing } from "./hospitalInheritanceTaxBriefing";
import { skHynixAiHackathonBriefing } from "./skHynixAiHackathonBriefing";
import { seojinSchoolNeighborsBriefing } from "./seojinSchoolNeighborsBriefing";
import { northKoreanPowsSouthKoreaBriefing } from "./northKoreanPowsSouthKoreaBriefing";
import { platformAdvertisingBriefing } from "./platformAdvertisingBriefing";
import { inheritanceTaxFrozenThresholdBriefing } from "./inheritanceTaxFrozenThresholdBriefing";
import { incomeTaxFamilyDeductionBriefing } from "./incomeTaxFamilyDeductionBriefing";
import { realEstateSupervisorExplainer } from "./realEstateSupervisorExplainer";
import { monthlyRentCreditExplainer } from "./monthlyRentCreditExplainer";
import { farmlandRetirementBriefing } from "./farmlandRetirementBriefing";

const allBriefings: Briefing[] = [policyFundRiskBriefing, ktrCampaign, taxWatchCase, civicNotice, pensionReciprocityBriefing, realEstateSupervisorCitizenFreedomBriefing, farmlandRetirementBriefing, realEstateSupervisorExplainer, monthlyRentCreditExplainer, incomeTaxFamilyDeductionBriefing, inheritanceTaxFrozenThresholdBriefing, platformAdvertisingBriefing, northKoreanPowsSouthKoreaBriefing, seojinSchoolNeighborsBriefing, skHynixAiHackathonBriefing, hospitalInheritanceTaxBriefing, activistFundingPressureBriefing, socialSolidarityEconomyLawBriefing, futureResponseFundBriefing, partyDissolutionBriefing, yeosuIslandExpoBriefing, hearingAccountabilityBriefing, socialEconomyFairnessBriefing, socialEconomyBriefing, publicInterestTravelBriefing, publicBroadcastingBriefing, nationalBudgetBriefing, gyeonggiBriefingDisplay, ...briefings];

export const getAllBriefingsNewestFirst = () => [...allBriefings].sort((a, b) => {
  const dateOrder = b.date.localeCompare(a.date);
  return dateOrder || (b.issueNumber ?? -1) - (a.issueNumber ?? -1);
});

export const getAllBriefing = (slug: string) => allBriefings.find((briefing) => briefing.slug === slug);

export const getAllLatestBriefing = () => getAllBriefingsNewestFirst()[0];
