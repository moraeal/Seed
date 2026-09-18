import type { BriefingTranslation } from "./types";
import { briefingTranslations as legacyBriefingTranslations } from "./briefingsLegacy";
import { socialEconomyFairnessTranslation } from "./briefing09";
import { hearingAccountabilityTranslation } from "./briefing10";
import { partyDissolutionTranslation } from "./briefing11";
import { futureResponseFundTranslation } from "./briefing12";
import { yeosuIslandExpoBriefingTranslation } from "./briefingYeosuIslandExpo";

export const briefingTranslations: Record<string, BriefingTranslation> = {
  "future-response-fund-public-money": futureResponseFundTranslation,
  "can-half-the-nation-be-dissolved": partyDissolutionTranslation,
  "yeosu-world-island-expo": yeosuIslandExpoBriefingTranslation,
  "confirmation-hearings-zero-witnesses": hearingAccountabilityTranslation,
  "social-economy-fair-competition": socialEconomyFairnessTranslation,
  ...legacyBriefingTranslations,
};
