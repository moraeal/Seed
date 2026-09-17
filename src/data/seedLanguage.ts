import type { Language } from "../i18n";
import { freedomArticleKo } from "./seedLanguageFreedom";
import { freedomArticleEn } from "./seedLanguageFreedomEn";
import { partisanLanguageArticleEn, partisanLanguageArticleKo } from "./seedLanguagePartisanLanguage";
import { progressArticleEn, progressArticleKo } from "./seedLanguageProgress";
import { discourseArticleEn, discourseArticleKo } from "./seedLanguageDiscourse";
import { conservatismArticleEn, conservatismArticleKo } from "./seedLanguageConservatism";
import {
  getSeedLanguageArticle as getBaseSeedLanguageArticle,
  seedLanguageArticlesKo as baseSeedLanguageArticlesKo,
} from "./seedLanguageBase";

export type {
  SeedLanguageArticle,
  SeedLanguageImage,
} from "./seedLanguageBase";

export const seedLanguageArticlesKo = [conservatismArticleKo, discourseArticleKo, progressArticleKo, partisanLanguageArticleKo, freedomArticleKo, ...baseSeedLanguageArticlesKo];

export function getSeedLanguageArticle(slug: string, language: Language) {
  if (slug === conservatismArticleKo.slug) return language === "en" ? conservatismArticleEn : conservatismArticleKo;
  if (slug === discourseArticleKo.slug) return language === "en" ? discourseArticleEn : discourseArticleKo;
  if (slug === progressArticleKo.slug) return language === "en" ? progressArticleEn : progressArticleKo;
  if (slug === partisanLanguageArticleKo.slug) return language === "en" ? partisanLanguageArticleEn : partisanLanguageArticleKo;
  if (slug === freedomArticleKo.slug) return language === "en" ? freedomArticleEn : freedomArticleKo;
  return getBaseSeedLanguageArticle(slug, language);
}
