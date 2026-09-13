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
    referenceVideo: column.referenceVideo ? { ...column.referenceVideo, ...translated.referenceVideo } : undefined,
    inlineImage: { ...column.inlineImage, ...translated.inlineImage },
    additionalImages: column.additionalImages?.map((image, index) => ({
      ...image,
      ...(translated.additionalImages?.[index] ?? {}),
    })),
    sourceDocument: column.sourceDocument ? { ...column.sourceDocument, ...translated.sourceDocument } : undefined,
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
    introTitle: translated.introTitle ?? briefing.introTitle,
    keyHighlights: translated.keyHighlights ?? briefing.keyHighlights,
    author: translated.author ?? briefing.author,
    images: briefing.images?.map((image, index) => {
      if (isGyeonggiDisplay && index === 0) {
        return {
          ...image,
          alt: "MBN News coverage of Gyeonggi Province's local-bond and fiscal-emergency controversy",
          caption: "The report examines Gyeonggi's use of 99.6 percent of its local-bond issuance ceiling and the resulting fiscal debate. Select the image to watch the MBN report.",
          credit: "Video still · MBN News",
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
