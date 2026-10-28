import { toleranceArticleKo, toleranceArticleEn } from "./seedLanguageTolerance2026";
import { citizenshipArticleKo, citizenshipArticleEn } from "./seedLanguageCitizenship2026";
import { foundingArticleKo, foundingArticleEn } from "./seedLanguageFounding";
import { limitedStateArticleKo, limitedStateArticleEn } from "./seedLanguageLimitedState";
import { basicIncomeArticleKo, basicIncomeArticleEn } from "./seedLanguageBasicIncome";
import { augmentedIndividualArticleKo, augmentedIndividualArticleEn } from "./seedLanguageAugmentedIndividual";
import { dialogueArticleKo, dialogueArticleEn } from "./seedLanguageSocialDialogue";
import { corporateCitizenshipArticleKo, corporateCitizenshipArticleEn } from "./seedLanguageCorporateCitizenship";
import { historyArticleKo, historyArticleEn } from "./seedLanguageHistory";
import { petitionArticleKo, petitionArticleEn } from "./seedLanguagePetition";
import type { Language } from "../i18n";
import { freedomArticleKo } from "./seedLanguageFreedom";
import { freedomArticleEn } from "./seedLanguageFreedomEn";
import { progressArticleEn, progressArticleKo } from "./seedLanguageProgress";
import { discourseArticleEn, discourseArticleKo } from "./seedLanguageDiscourse";
import { conservatismArticleEn, conservatismArticleKo } from "./seedLanguageConservatism";
import { politicsArticleEn, politicsArticleKo } from "./seedLanguagePolitics";
import { publicArticleEn, publicArticleKo } from "./seedLanguagePublic";
import { unificationArticleEn, unificationArticleKo } from "./seedLanguageUnification";
import { stateArticleEn, stateArticleKo } from "./seedLanguageState";
import { fairnessArticleEn, fairnessArticleKo } from "./seedLanguageFairness";
import {
  getSeedLanguageArticle as getBaseSeedLanguageArticle,
  seedLanguageArticlesKo as baseSeedLanguageArticlesKo,
} from "./seedLanguageBase";

export type {
  SeedLanguageArticle,
  SeedLanguageImage,
} from "./seedLanguageBase";

export const seedLanguageArticlesKo = [toleranceArticleKo, citizenshipArticleKo, foundingArticleKo, limitedStateArticleKo, basicIncomeArticleKo, augmentedIndividualArticleKo, dialogueArticleKo, historyArticleKo, corporateCitizenshipArticleKo, petitionArticleKo, fairnessArticleKo, stateArticleKo, unificationArticleKo, publicArticleKo, politicsArticleKo, conservatismArticleKo, discourseArticleKo, progressArticleKo, freedomArticleKo, ...baseSeedLanguageArticlesKo];

export function getSeedLanguageArticle(slug: string, language: Language) {
  if (slug === toleranceArticleKo.slug) return language === "en" ? toleranceArticleEn : toleranceArticleKo;
  if (slug === citizenshipArticleKo.slug) return language === "en" ? citizenshipArticleEn : citizenshipArticleKo;
  if (slug === foundingArticleKo.slug) return language === "en" ? foundingArticleEn : foundingArticleKo;
  if (slug === limitedStateArticleKo.slug) return language === "en" ? limitedStateArticleEn : limitedStateArticleKo;
  if (slug === basicIncomeArticleKo.slug) return language === "en" ? basicIncomeArticleEn : basicIncomeArticleKo;
  if (slug === augmentedIndividualArticleKo.slug) return language === "en" ? augmentedIndividualArticleEn : augmentedIndividualArticleKo;
  if (slug === dialogueArticleKo.slug) return language === "en" ? dialogueArticleEn : dialogueArticleKo;
  if (slug === historyArticleKo.slug) return language === "en" ? historyArticleEn : historyArticleKo;
  if (slug === corporateCitizenshipArticleKo.slug) return language === "en" ? corporateCitizenshipArticleEn : corporateCitizenshipArticleKo;
  if (slug === petitionArticleKo.slug) return language === "en" ? petitionArticleEn : petitionArticleKo;
  if (slug === fairnessArticleKo.slug) return language === "en" ? fairnessArticleEn : fairnessArticleKo;
  if (slug === stateArticleKo.slug) return language === "en" ? stateArticleEn : stateArticleKo;
  if (slug === unificationArticleKo.slug) return language === "en" ? unificationArticleEn : unificationArticleKo;
  if (slug === publicArticleKo.slug) return language === "en" ? publicArticleEn : publicArticleKo;
  if (slug === politicsArticleKo.slug) return language === "en" ? politicsArticleEn : politicsArticleKo;
  if (slug === conservatismArticleKo.slug) return language === "en" ? conservatismArticleEn : conservatismArticleKo;
  if (slug === discourseArticleKo.slug) return language === "en" ? discourseArticleEn : discourseArticleKo;
  if (slug === progressArticleKo.slug) return language === "en" ? progressArticleEn : progressArticleKo;
  if (slug === freedomArticleKo.slug) return language === "en" ? freedomArticleEn : freedomArticleKo;
  return getBaseSeedLanguageArticle(slug, language);
}
