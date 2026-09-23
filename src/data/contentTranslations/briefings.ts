import type { BriefingTranslation } from "./types";
import { briefingTranslations as legacyBriefingTranslations } from "./briefingsLegacy";
import { socialEconomyFairnessTranslation } from "./briefing09";
import { hearingAccountabilityTranslation } from "./briefing10";
import { partyDissolutionTranslation } from "./briefing11";
import { futureResponseFundTranslation } from "./briefing12";
import { socialSolidarityEconomyLawTranslation } from "./briefing13";
import { yeosuIslandExpoBriefingTranslation } from "./briefingYeosuIslandExpo";
import { activistFundingPressureTranslation } from "./briefing14";
import { hospitalInheritanceTaxTranslation } from "./briefingHospitalInheritanceTax";
import { skHynixAiHackathonTranslation } from "./briefingSkHynixAiHackathon";
import { seojinSchoolNeighborsTranslation } from "./briefingSeojinSchoolNeighbors";

export const briefingTranslations: Record<string, BriefingTranslation> = {
  "seojin-school-neighbors-civic-solidarity": seojinSchoolNeighborsTranslation,
  "sk-hynix-ai-hackathon-skills-first-hiring": skHynixAiHackathonTranslation,
  "hospital-inheritance-tax-maternity-care": hospitalInheritanceTaxTranslation,
  "activist-support-political-pressure": activistFundingPressureTranslation,
  "social-solidarity-economy-law-conservative-silence": socialSolidarityEconomyLawTranslation,
  "future-response-fund-public-money": futureResponseFundTranslation,
  "can-half-the-nation-be-dissolved": partyDissolutionTranslation,
  "yeosu-world-island-expo": yeosuIslandExpoBriefingTranslation,
  "confirmation-hearings-zero-witnesses": hearingAccountabilityTranslation,
  "social-economy-fair-competition": socialEconomyFairnessTranslation,
  ...legacyBriefingTranslations,
};
