import { partisanLanguageArticleEn } from "../../seedLanguagePartisanLanguage";
import type { ColumnTranslation } from "../types";

export const issue29: ColumnTranslation = {
  title: partisanLanguageArticleEn.title,
  subtitle: partisanLanguageArticleEn.subtitle,
  author: "Small Seed",
  summary: partisanLanguageArticleEn.summary,
  heroImage: {
    alt: partisanLanguageArticleEn.heroImage.alt,
    caption: partisanLanguageArticleEn.heroImage.caption,
    credit: partisanLanguageArticleEn.heroImage.credit,
  },
  inlineImage: partisanLanguageArticleEn.inlineImage ? {
    alt: partisanLanguageArticleEn.inlineImage.alt,
    caption: partisanLanguageArticleEn.inlineImage.caption,
    credit: partisanLanguageArticleEn.inlineImage.credit,
  } : undefined,
  additionalImages: partisanLanguageArticleEn.inlineImage ? [{
    alt: partisanLanguageArticleEn.inlineImage.alt,
    caption: partisanLanguageArticleEn.inlineImage.caption,
    credit: partisanLanguageArticleEn.inlineImage.credit,
  }] : undefined,
  sections: partisanLanguageArticleEn.sections.map((section) => ({ title: section.title, paragraphs: section.paragraphs })),
  sourceNote: "This column examines how partisan labels, group identity and engagement-driven platforms can turn language from a tool of explanation into a tool of judgment. Its purpose is not to ban rough speech, but to restore specific questions about evidence, rights, cost, results and responsibility.",
  sourceLabels: partisanLanguageArticleEn.sources?.map((source) => source.label),
};
