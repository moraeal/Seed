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

const allBriefings: Briefing[] = [skHynixAiHackathonBriefing, hospitalInheritanceTaxBriefing, activistFundingPressureBriefing, socialSolidarityEconomyLawBriefing, futureResponseFundBriefing, partyDissolutionBriefing, yeosuIslandExpoBriefing, hearingAccountabilityBriefing, socialEconomyFairnessBriefing, socialEconomyBriefing, publicInterestTravelBriefing, publicBroadcastingBriefing, nationalBudgetBriefing, gyeonggiBriefingDisplay, ...briefings];

export const getAllBriefingsNewestFirst = () => [...allBriefings].sort((a, b) => {
  const dateOrder = b.date.localeCompare(a.date);
  return dateOrder || (b.issueNumber ?? -1) - (a.issueNumber ?? -1);
});

export const getAllBriefing = (slug: string) => allBriefings.find((briefing) => briefing.slug === slug);

export const getAllLatestBriefing = () => getAllBriefingsNewestFirst()[0];
