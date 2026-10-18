import { hotIssueColumnTrackerSlugs } from "./columns";

// Each event or policy dispute has one homepage topic. Add all follow-up
// articles and tracker routes here when publishing them. Unlisted routes
// remain their own topics, so broad categories do not hide unrelated work.
const homeTopicGroups: Record<string, string[]> = {
  "france-fiscal-warning-2026": ["/columns/france-fiscal-crisis-korea-spending-no-more-tax-2026"],
  "suicide-prevention-community": ["/columns/suicide-prevention-beyond-mental-illness-2026", "/columns/state-cannot-monopolize-life-2026", "/columns/suicide-prevention-mois-local-community", "/monitoring/korea-foundation-for-suicide-prevention"],
  "atr-wednesday-meeting": ["/columns/atr-taxpayer-movement-04-wednesday-meeting"],
  "housing-tax-promise-2026": ["/columns/housing-tax-promise-policy-uncertainty-2026"],
  "ju-competition-regulator-business-freedom-2026": ["/columns/ju-byung-ki-biased-referee-business-freedom-2026"],
  "korea-us-intelligence-sharing-2026": ["/monitoring/korea-us-intelligence-sharing-tracker-2026"],
  "teen-ai-use-2026": ["/briefings/teen-ai-use-bill-2221842-explained", "/monitoring/legislation/commentary/teen-ai-protection-choice-not-control-2026", "/monitoring/legislation/bill-2221842"],
  "imported-eggs-procurement-2026": ["/monitoring/tax/commentary/imported-eggs-hidden-taxpayer-cost-2026", "/monitoring/tax/imported-eggs-procurement-budget-data-2026"],
  "lh-unsold-housing-2026": ["/monitoring/tax/lh-unsold-housing-purchase-commitment-2026", "/monitoring/tax/commentary/lh-unsold-housing-public-cost-2026"],
  "banking-privacy-ai-hacking-2026": ["/news/privacy-leaks-ai-security-accountability-2026", "/monitoring/banking-privacy-ai-hacking-tracker-2026"],
  "inheritance-tax-frozen-allowances": ["/monitoring/tax/commentary/inheritance-tax-automatic-increase-2026", "/briefings/inheritance-tax-frozen-allowance-middle-class"],
  "card-sales-vat-credit-2026": ["/monitoring/tax/commentary/card-sales-credit-normalization-burden-2026", "/monitoring/tax/card-sales-vat-credit-government-bill-2026"],
  "future-response-fund": [
    "/columns/flattening-housing-government-debt-citizen-burden-2026",
    "/columns/youth-agency-not-policy-targets-2026",
    "/columns/jangjado-future-response-fund-no-more-tax-2026",
    "/briefings/future-response-fund-public-money",
    "/monitoring/legislation/commentary/future-response-fund-parliamentary-control-2026",
  ],
  "assassins-historical-memory-2026": [
    "/columns/film-imagination-history-distortion-ryoma-2026",
    "/columns/assassins-film-history-memory-war-2026",
  ],
  "north-korean-pows-protection": [
    "/columns/north-korean-pows-ukraine-diplomatic-rift-2026",
    "/columns/fuel-shipments-russia-diplomatic-accountability-2026",
    "/monitoring/north-korean-pows-protection-tracker",
    "/briefings/north-korean-pows-south-korea-zelensky-un",
  ],
  "kim-seung-won-confirmation-hearing": [
    "/monitoring/kim-seung-won-confirmation-hearing",
    "/briefings/confirmation-hearings-zero-witnesses",
  ],
  "mfds-sauce-portioning-civic-freedom-2026": [
    "/columns/citizenization-kimchi-jar-freedom-2026",
    "/columns/mfds-sauce-portioning-autonomy-2026",
  ],
  "olympic-park-election-protest-2026": [
    "/news/olympic-park-protest-115-days",
    "/monitoring/olympic-park-election-protest-tracker",
  ],
  "dmz-mine-blast-2026": [
    "/columns/security-slogans-alliance-2026",
    "/columns/chung-dong-young-words-unification-obstacle-2026",
    "/columns/security-pride-vigilance-armed-forces-day-2026",
    "/news/dmz-blast-investigation-timeline-2026",
    "/news/dmz-security-command-failure",
    "/monitoring/dmz-mine-blast-2026",
    "/columns/dmz-mine-response-accountability-2026",
  ],
  "supreme-court-renomination-2026": [
    "/news/supreme-court-renomination-standoff-2026",
    "/monitoring/supreme-court-renomination-tracker-2026",
    "/columns/participatory-democracy-supreme-court-appointments",
  ],
  "real-estate-supervisor-2026": ["/briefings/real-estate-supervisor-citizen-freedom-property-rights", "/briefings/real-estate-supervisor-bill-2221573-explained", "/columns/real-estate-supervisor-citizens-accounts", "/monitoring/legislation/bill-2221573"],
  "monthly-rent-credit-2026": ["/briefings/monthly-rent-tax-credit-2026-bills-explained"],
  "income-tax-family-deduction-2026": [
    "/briefings/income-tax-family-deduction-2026-proposals",
    "/columns/family-deduction-work-income-threshold",
  ],
  "yeosu-world-island-expo": [
    "/columns/yeosu-island-expo-procurement-ledger",
    "/monitoring/yeosu-world-island-expo-tracker",
    "/briefings/yeosu-world-island-expo",
  ],
  "inheritance-tax-business-continuity": [
    "/briefings/hospital-inheritance-tax-maternity-care",
    "/columns/inheritance-tax-capital-and-talent-mobility",
    "/columns/wealth-crosses-borders-inheritance-tax",
  ],
  "prosecution-service-abolition-tracker": [
    "/columns/pspd-prosecution-reform-state-power-watch-2026",
    "/columns/who-watches-power-now-2026",
    "/news/major-crimes-agency-investigator-staffing-2026",
    "/monitoring/legislation/commentary/criminal-investigation-power-and-accountability",
    "/briefings/prosecution-service-abolition",
  ],
  "public-institution-reform-2026": [
    "/news/lh-debt-split-power-five-merge",
    "/monitoring/public-institution-reform-109",
    "/news/lh-split-public-agency-experiment",
    "/columns/lh-reform-politics-2026",
  ],
};

for (const [columnSlug, trackerSlug] of Object.entries(hotIssueColumnTrackerSlugs)) {
  homeTopicGroups[trackerSlug] = [
    ...(homeTopicGroups[trackerSlug] ?? []),
    `/columns/${columnSlug}`,
    `/monitoring/${trackerSlug}`,
  ];
}

homeTopicGroups["farmland-census-disposal-orders-tracker"]?.push("/briefings/farmland-census-elderly-farmers-retirement", "/columns/farmland-solar-cartel-professional-farming-2026", "/columns/farmland-farming-freedom-smart-agriculture-2026");

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

