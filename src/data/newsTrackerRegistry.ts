import {
  getPublicInterestWatchCase as getBasePublicInterestWatchCase,
  newsTrackerCases as baseNewsTrackerCases,
  publicInterestWatchCases as basePublicInterestWatchCases,
} from "./publicInterestWatch";
import { olympicParkElectionProtestTracker } from "./olympicParkElectionProtestTracker";
import { publicInstitutionReformTracker } from "./publicInstitutionReformTracker";
import { supremeCourtRenominationTracker } from "./supremeCourtRenominationTracker";
import { northKoreanPowsProtectionTracker } from "./northKoreanPowsProtectionTracker";

export const publicInterestWatchCases = [
  northKoreanPowsProtectionTracker,
  supremeCourtRenominationTracker,
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...basePublicInterestWatchCases,
];

export const newsTrackerCases = [
  northKoreanPowsProtectionTracker,
  supremeCourtRenominationTracker,
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...baseNewsTrackerCases,
];

export function getPublicInterestWatchCase(slug: string) {
  if (slug === northKoreanPowsProtectionTracker.slug) {
    return northKoreanPowsProtectionTracker;
  }
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
