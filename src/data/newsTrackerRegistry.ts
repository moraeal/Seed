import { bankingPrivacyTracker } from "./bankingPrivacyTracker";
import {
  getPublicInterestWatchCase as getBasePublicInterestWatchCase,
  newsTrackerCases as baseNewsTrackerCases,
  publicInterestWatchCases as basePublicInterestWatchCases,
} from "./publicInterestWatch";
import { olympicParkElectionProtestTracker } from "./olympicParkElectionProtestTracker";
import { publicInstitutionReformTracker } from "./publicInstitutionReformTracker";
import { supremeCourtRenominationTracker } from "./supremeCourtRenominationTracker";
import { northKoreanPowsProtectionTracker } from "./northKoreanPowsProtectionTracker";
import { dmzMineBlastTracker } from "./dmzMineBlastTracker";

export const publicInterestWatchCases = [
  bankingPrivacyTracker,
  dmzMineBlastTracker,
  northKoreanPowsProtectionTracker,
  supremeCourtRenominationTracker,
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...basePublicInterestWatchCases,
];

export const newsTrackerCases = [
  bankingPrivacyTracker,
  dmzMineBlastTracker,
  northKoreanPowsProtectionTracker,
  supremeCourtRenominationTracker,
  publicInstitutionReformTracker,
  olympicParkElectionProtestTracker,
  ...baseNewsTrackerCases,
];

export function getPublicInterestWatchCase(slug: string) {
  if (slug === bankingPrivacyTracker.slug) return bankingPrivacyTracker;
  if (slug === dmzMineBlastTracker.slug) return dmzMineBlastTracker;
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
