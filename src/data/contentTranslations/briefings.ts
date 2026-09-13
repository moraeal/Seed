import type { BriefingTranslation } from "./types";
import { briefingTranslations as legacyBriefingTranslations } from "./briefingsLegacy";
import { socialEconomyFairnessTranslation } from "./briefing09";
import { hearingAccountabilityTranslation } from "./briefing10";

export const briefingTranslations: Record<string, BriefingTranslation> = {
  "confirmation-hearings-zero-witnesses": hearingAccountabilityTranslation,
  "social-economy-fair-competition": socialEconomyFairnessTranslation,
  ...legacyBriefingTranslations,
};
