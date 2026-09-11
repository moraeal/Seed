import type { BriefingTranslation } from "./types";
import { briefingTranslations as legacyBriefingTranslations } from "./briefingsLegacy";
import { socialEconomyFairnessTranslation } from "./briefing09";

export const briefingTranslations: Record<string, BriefingTranslation> = {
  "social-economy-fair-competition": socialEconomyFairnessTranslation,
  ...legacyBriefingTranslations,
};
