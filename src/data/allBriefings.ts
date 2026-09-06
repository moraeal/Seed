import { briefings, type Briefing } from "./briefings";
import { gyeonggiBriefingDisplay } from "./gyeonggiBriefingDisplay";
import { nationalBudgetBriefing } from "./nationalBudgetBriefing";
import { publicBroadcastingBriefing } from "./publicBroadcastingBriefing";
import { publicInterestTravelBriefing } from "./publicInterestTravelBriefing";

const allBriefings: Briefing[] = [publicInterestTravelBriefing, publicBroadcastingBriefing, nationalBudgetBriefing, gyeonggiBriefingDisplay, ...briefings];

export const getAllBriefingsNewestFirst = () => [...allBriefings].sort((a, b) => {
  const dateOrder = b.date.localeCompare(a.date);
  return dateOrder || (b.issueNumber ?? -1) - (a.issueNumber ?? -1);
});

export const getAllBriefing = (slug: string) => allBriefings.find((briefing) => briefing.slug === slug);

export const getAllLatestBriefing = () => getAllBriefingsNewestFirst()[0];
