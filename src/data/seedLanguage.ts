import type { Language } from "../i18n";
import { freedomArticleKo } from "./seedLanguageFreedom";
import { freedomArticleEn } from "./seedLanguageFreedomEn";
import { progressArticleEn, progressArticleKo } from "./seedLanguageProgress";
import { discourseArticleEn, discourseArticleKo } from "./seedLanguageDiscourse";
import { conservatismArticleEn, conservatismArticleKo } from "./seedLanguageConservatism";
import { politicsArticleEn, politicsArticleKo } from "./seedLanguagePolitics";
import { publicArticleEn, publicArticleKo } from "./seedLanguagePublic";
import {
  getSeedLanguageArticle as getBaseSeedLanguageArticle,
  seedLanguageArticlesKo as baseSeedLanguageArticlesKo,
} from "./seedLanguageBase";

export type {
  SeedLanguageArticle,
  SeedLanguageImage,
} from "./seedLanguageBase";

export const seedLanguageArticlesKo = [publicArticleKo, politicsArticleKo, conservatismArticleKo, discourseArticleKo, progressArticleKo, freedomArticleKo, ...baseSeedLanguageArticlesKo];

export function getSeedLanguageArticle(slug: string, language: Language) {
  if (slug === publicArticleKo.slug) return language === "en" ? publicArticleEn : publicArticleKo;
  if (slug === politicsArticleKo.slug) return language === "en" ? politicsArticleEn : politicsArticleKo;
  if (slug === conservatismArticleKo.slug) return language === "en" ? conservatismArticleEn : conservatismArticleKo;
  if (slug === discourseArticleKo.slug) return language === "en" ? discourseArticleEn : discourseArticleKo;
  if (slug === progressArticleKo.slug) return language === "en" ? progressArticleEn : progressArticleKo;
  if (slug === freedomArticleKo.slug) return language === "en" ? freedomArticleEn : freedomArticleKo;
  return getBaseSeedLanguageArticle(slug, language);
}
