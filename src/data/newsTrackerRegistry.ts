import {
  getPublicInterestWatchCase as getBasePublicInterestWatchCase,
  newsTrackerCases as baseNewsTrackerCases,
} from "./publicInterestWatch";
import { olympicParkElectionProtestTracker } from "./olympicParkElectionProtestTracker";

export const newsTrackerCases = [
  olympicParkElectionProtestTracker,
  ...baseNewsTrackerCases,
];

export function getPublicInterestWatchCase(slug: string) {
  if (slug === olympicParkElectionProtestTracker.slug) {
    return olympicParkElectionProtestTracker;
  }

  return getBasePublicInterestWatchCase(slug);
}
