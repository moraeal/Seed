import {
  getPublicInterestWatchCase as getBasePublicInterestWatchCase,
  newsTrackerCases as baseNewsTrackerCases,
  publicInterestWatchCases as basePublicInterestWatchCases,
} from "./publicInterestWatch";
import { olympicParkElectionProtestTracker } from "./olympicParkElectionProtestTracker";
import { publicInstitutionReformTracker } from "./publicInstitutionReformTracker";
import { supremeCourtRenominationTracker } from "./supremeCourtRenominationTracker";

export const publicInterestWatchCases = [
  supremeCourtRenominationTracker,
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...basePublicInterestWatchCases,
];

export const newsTrackerCases = [
  supremeCourtRenominationTracker,
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...baseNewsTrackerCases,
];

export function getPublicInterestWatchCase(slug: string) {
  if (slug === supremeCourtRenominationTracker.slug) {
    return supremeCourtRenominationTracker;
  }

  if (slug === publicInstitutionReformTracker.slug) {
    return publicInstitutionReformTracker;
  }

  if (slug === olympicParkElectionProtestTracker.slug) {
    return olympicParkElectionProtestTracker;
  }

  return getBasePublicInterestWatchCase(slug);
}
