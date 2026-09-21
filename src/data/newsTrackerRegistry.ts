import {
  getPublicInterestWatchCase as getBasePublicInterestWatchCase,
  newsTrackerCases as baseNewsTrackerCases,
  publicInterestWatchCases as basePublicInterestWatchCases,
} from "./publicInterestWatch";
import { olympicParkElectionProtestTracker } from "./olympicParkElectionProtestTracker";
import { publicInstitutionReformTracker } from "./publicInstitutionReformTracker";

export const publicInterestWatchCases = [
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...basePublicInterestWatchCases,
];

export const newsTrackerCases = [
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...baseNewsTrackerCases,
];

export function getPublicInterestWatchCase(slug: string) {
  if (slug === publicInstitutionReformTracker.slug) {
    return publicInstitutionReformTracker;
  }

  if (slug === olympicParkElectionProtestTracker.slug) {
    return olympicParkElectionProtestTracker;
  }

  return getBasePublicInterestWatchCase(slug);
}
