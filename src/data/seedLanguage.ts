import type { Language } from "../i18n";
import { freedomArticleKo } from "./seedLanguageFreedom";
import {
  getSeedLanguageArticle as getBaseSeedLanguageArticle,
  seedLanguageArticlesKo as baseSeedLanguageArticlesKo,
} from "./seedLanguageBase";

export type {
  SeedLanguageArticle,
  SeedLanguageImage,
} from "./seedLanguageBase";

export const seedLanguageArticlesKo = [freedomArticleKo, ...baseSeedLanguageArticlesKo];

export function getSeedLanguageArticle(slug: string, language: Language) {
  if (slug === freedomArticleKo.slug) return freedomArticleKo;
  return getBaseSeedLanguageArticle(slug, language);
}
