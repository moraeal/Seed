import {
  getPublicInterestWatchCase as getBasePublicInterestWatchCase,
  newsTrackerCases as baseNewsTrackerCases,
  publicInterestWatchCases as basePublicInterestWatchCases,
} from "./publicInterestWatch";
import { olympicParkElectionProtestTracker } from "./olympicParkElectionProtestTracker";

export const publicInterestWatchCases = [
  olympicParkElectionProtestTracker,
  ...basePublicInterestWatchCases,
];

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
