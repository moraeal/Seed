import type { Language } from "../i18n";
import type { Briefing } from "./briefings";
import type { SeedColumn } from "./columns";
import type { NewsArticle } from "./news";
import { briefingTranslations } from "./contentTranslations/briefings";
import { columnTranslations } from "./contentTranslations/columns";
import { newsTranslations } from "./contentTranslations/news";

export function localizeColumn(column: SeedColumn, language: Language): SeedColumn {
  if (language !== "en") return column;
  const translated = columnTranslations[column.issue];
  if (!translated) return column;

  return {
    ...column,
    title: translated.title,
    subtitle: translated.subtitle,
    author: translated.author ?? column.author,
    summary: translated.summary,
    heroImage: { ...column.heroImage, ...translated.heroImage },
    inlineImage: { ...column.inlineImage, ...translated.inlineImage },
    additionalImages: column.additionalImages?.map((image, index) => ({
      ...image,
      ...(translated.additionalImages?.[index] ?? {}),
    })),
    sections: translated.sections,
    sourceNote: translated.sourceNote,
    sources: column.sources?.map((source, index) => ({
      ...source,
      label: translated.sourceLabels?.[index] ?? source.label,
    })),
  };
}

export function localizeBriefing(briefing: Briefing, language: Language): Briefing {
  if (language !== "en") return briefing;
  const translated = briefingTranslations[briefing.slug];
  if (!translated) return briefing;

  const isGyeonggiDisplay = briefing.slug === "gyeonggi-fiscal-emergency" && (briefing.images?.length ?? 0) === 4;

  return {
    ...briefing,
    category: translated.category,
    title: translated.title,
    summary: translated.summary,
    author: translated.author ?? briefing.author,
    images: briefing.images?.map((image, index) => {
      if (isGyeonggiDisplay && index === 0) {
        return {
          ...image,
          alt: "Calculator and budget documents representing public finance and budgeting",
          caption: "Fiscal stress is not only about a single number. Citizens should be able to see clearly how revenue, spending, debt and public funds interact. This is a symbolic budget image.",
          credit: "Unsplash · symbolic public-finance image",
        };
      }
      const translationIndex = isGyeonggiDisplay ? index - 1 : index;
      return {
        ...image,
        ...(translated.images?.[translationIndex] ?? {}),
      };
    }),
    content: translated.content,
    sections: translated.sections ?? briefing.sections,
    verdicts: translated.verdicts ?? briefing.verdicts,
    watchPoints: translated.watchPoints,
    quote: translated.quote ?? briefing.quote,
    sourceNote: translated.sourceNote ?? briefing.sourceNote,
    sources: briefing.sources?.map((source, index) => ({
      ...source,
      label: translated.sourceLabels?.[index] ?? source.label,
    })),
    commentary: translated.commentary ?? briefing.commentary,
  };
}

export function localizeNewsArticle(article: NewsArticle, language: Language): NewsArticle {
  if (language !== "en") return article;
  const translated = newsTranslations[article.slug];
  if (!translated) return article;

  return {
    ...article,
    category: translated.category,
    title: translated.title,
    subtitle: translated.subtitle,
    summary: translated.summary,
    keySentence: translated.keySentence,
    video: translated.video ? { ...article.video, ...translated.video } : article.video,
    selectedNews: {
      ...article.selectedNews,
      ...translated.selectedNews,
      url: article.selectedNews.url,
      publishedAt: article.selectedNews.publishedAt,
    },
    heroImage: { ...article.heroImage, ...translated.heroImage },
    inlineImage: { ...article.inlineImage, ...translated.inlineImage },
    sections: translated.sections,
    watchPoints: translated.watchPoints,
    seedPerspective: translated.seedPerspective,
    sources: article.sources.map((source, index) => ({
      ...source,
      label: translated.sourceLabels?.[index] ?? source.label,
    })),
  };
}
