import { briefings, type Briefing } from "./briefings";
import { gyeonggiBriefing } from "./gyeonggiBriefing";

const allBriefings: Briefing[] = [gyeonggiBriefing, ...briefings];

export const getAllBriefingsNewestFirst = () => [...allBriefings].sort((a, b) => {
  if (a.issueNumber !== undefined || b.issueNumber !== undefined) {
    return (b.issueNumber ?? -1) - (a.issueNumber ?? -1);
  }
  return b.date.localeCompare(a.date);
});

export const getAllBriefing = (slug: string) => allBriefings.find((briefing) => briefing.slug === slug);

export const getAllLatestBriefing = () => getAllBriefingsNewestFirst()[0];
