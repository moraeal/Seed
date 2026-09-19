import type { Language } from "../i18n";
import { getAllBriefingsNewestFirst } from "./allBriefings";
import { getColumnsNewestFirst } from "./columns";
import { getHotIssuesNewestFirst } from "./hotIssues";
import { localizeBriefing, localizeColumn } from "./localizedContent";
import { newsTrackerCases } from "./newsTrackerRegistry";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "./seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "./seedLanguageEnvironment";

export type FeaturedContent = {
  path: string;
  category: "column" | "news" | "briefing" | "watch" | "language";
  categoryLabel: string;
  kicker: string;
  title: string;
  summary: string;
  date: string;
  readMinutes?: number;
  image: { src: string; alt: string };
};

export function getFeaturedContentCandidates(language: Language): FeaturedContent[] {
  const ko = language === "ko";
  const columnItems: FeaturedContent[] = getColumnsNewestFirst().map((item) => {
    const localized = localizeColumn(item, language);
    return {
      path: `/columns/${item.slug}`,
      category: "column",
      categoryLabel: ko ? "칼럼" : "Columns",
      kicker: "COLUMNS",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    };
  });

  const newsItems: FeaturedContent[] = getHotIssuesNewestFirst(language).map((item) => {
    return {
      path: item.to,
      category: "news",
      categoryLabel: ko ? "핫이슈" : "Hot Issues",
      kicker: "HOT ISSUES",
      title: item.title,
      summary: item.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: { src: item.imageSrc, alt: item.imageAlt },
    };
  });

  const briefingItems: FeaturedContent[] = getAllBriefingsNewestFirst().map((item) => {
    const localized = localizeBriefing(item, language);
    const watch = Boolean(item.publicWatch);
    return {
      path: `/briefings/${item.slug}`,
      category: watch ? "watch" : "briefing",
      categoryLabel: watch ? (ko ? "시민감시" : "Civic Watch") : (ko ? "브리핑" : "Briefings"),
      kicker: watch ? "CIVIC WATCH" : "BRIEFINGS",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.images?.[0] ?? { src: "/images/brand/editorial-image-fallback.svg", alt: localized.title },
    };
  });

  const trackerItems: FeaturedContent[] = newsTrackerCases.map((item) => ({
    path: `/monitoring/${item.slug}`,
    category: "watch",
    categoryLabel: ko ? "시민감시" : "Civic Watch",
    kicker: "CIVIC WATCH · NEWS TRACKER",
    title: item.title[language],
    summary: item.summary[language],
    date: item.updatedAt,
    image: {
      src: item.heroImage?.src ?? "/images/brand/editorial-image-fallback.svg",
      alt: item.heroImage?.alt[language] ?? item.title[language],
    },
  }));

  const languageSources = [
    ...seedLanguageEnvironmentArticlesKo,
    ...seedLanguageArticlesKo,
  ].filter((item) => item.listingEligible !== false);
  const seenLanguageSlugs = new Set<string>();
  const languageItems: FeaturedContent[] = languageSources.flatMap((item) => {
    if (seenLanguageSlugs.has(item.slug)) return [];
    seenLanguageSlugs.add(item.slug);
    const localized = getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language);
    if (!localized) return [];
    return [{
      path: `/seed-language/${item.slug}`,
      category: "language",
      categoryLabel: ko ? "시민언어" : "Glossary",
      kicker: "GLOSSARY",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    }];
  });

  return [...columnItems, ...newsItems, ...trackerItems, ...briefingItems, ...languageItems]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
