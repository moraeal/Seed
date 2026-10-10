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

export const seedLanguageArticlesKo = [augmentedIndividualArticleKo, dialogueArticleKo, historyArticleKo, corporateCitizenshipArticleKo, petitionArticleKo, fairnessArticleKo, stateArticleKo, unificationArticleKo, publicArticleKo, politicsArticleKo, conservatismArticleKo, discourseArticleKo, progressArticleKo, freedomArticleKo, ...baseSeedLanguageArticlesKo];

export function getSeedLanguageArticle(slug: string, language: Language) {
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
