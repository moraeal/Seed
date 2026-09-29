import { hotIssueColumnTrackerSlugs } from "./columns";

// Each event or policy dispute has one homepage topic. Add all follow-up
// articles and tracker routes here when publishing them. Unlisted routes
// remain their own topics, so broad categories do not hide unrelated work.
const homeTopicGroups: Record<string, string[]> = {
  "olympic-park-election-protest-2026": [
    "/news/olympic-park-protest-115-days",
    "/monitoring/olympic-park-election-protest-tracker",
  ],
  "dmz-mine-blast-2026": [
    "/news/dmz-blast-investigation-timeline-2026",
    "/news/dmz-security-command-failure",
    "/monitoring/dmz-mine-blast-2026",
  ],
  "supreme-court-renomination-2026": [
    "/news/supreme-court-renomination-standoff-2026",
    "/monitoring/supreme-court-renomination-tracker-2026",
    "/columns/participatory-democracy-supreme-court-appointments",
  ],
  "real-estate-supervisor-2026": ["/briefings/real-estate-supervisor-bill-2221573-explained", "/monitoring/legislation/commentary/real-estate-supervisor-september-bill"],
  "monthly-rent-credit-2026": ["/briefings/monthly-rent-tax-credit-2026-bills-explained", "/monitoring/tax/commentary/monthly-rent-credit-benefit-gap", "/monitoring/tax/monthly-rent-credit-2026-bills"],
  "income-tax-family-deduction-2026": [
    "/briefings/income-tax-family-deduction-2026-proposals",
    "/columns/family-deduction-work-income-threshold",
  ],
};

for (const [columnSlug, trackerSlug] of Object.entries(hotIssueColumnTrackerSlugs)) {
  homeTopicGroups[trackerSlug] = [`/columns/${columnSlug}`, `/monitoring/${trackerSlug}`];
}

const topicByPath = new Map(
  Object.entries(homeTopicGroups).flatMap(([topic, paths]) => paths.map((path) => [path, topic] as const)),
);

export const getHomeTopic = (path: string) => topicByPath.get(path) ?? path;

export function claimHomeStory<T>(
  items: T[],
  pathOf: (item: T) => string,
  claimedTopics: Set<string>,
): T | undefined {
  const item = items.find((candidate) => !claimedTopics.has(getHomeTopic(pathOf(candidate))));
  if (item) claimedTopics.add(getHomeTopic(pathOf(item)));
  return item;
}
