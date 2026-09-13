import type { BriefingTranslation } from "./types";
import { briefingTranslations as legacyBriefingTranslations } from "./briefingsLegacy";
import { socialEconomyFairnessTranslation } from "./briefing09";
import { hearingAccountabilityTranslation } from "./briefing10";
import { yeosuIslandExpoBriefingTranslation } from "./briefingYeosuIslandExpo";

export const briefingTranslations: Record<string, BriefingTranslation> = {
  "yeosu-world-island-expo": yeosuIslandExpoBriefingTranslation,
  "confirmation-hearings-zero-witnesses": hearingAccountabilityTranslation,
  "social-economy-fair-competition": socialEconomyFairnessTranslation,
  ...legacyBriefingTranslations,
};
