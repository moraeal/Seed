import type { Language } from "../i18n";
import { getAllBriefingsNewestFirst } from "./allBriefings";
import { columns } from "./columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "./localizedContent";
import { getNewsNewestFirst } from "./news";
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
  readMinutes: number;
  image: { src: string; alt: string };
};

export function getFeaturedContentCandidates(language: Language): FeaturedContent[] {
  const ko = language === "ko";
  const columnItems: FeaturedContent[] = columns.map((item) => {
    const localized = localizeColumn(item, language);
    return {
      path: `/columns/${item.slug}`,
      category: "column",
      categoryLabel: ko ? "씨앗의 소리" : "Voice",
      kicker: "THE VOICE OF SEED",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    };
  });

  const newsItems: FeaturedContent[] = getNewsNewestFirst().map((item) => {
    const localized = localizeNewsArticle(item, language);
    return {
      path: `/news/${item.slug}`,
      category: "news",
      categoryLabel: ko ? "오늘의 뉴스" : "News",
      kicker: "TODAY'S NEWS",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    };
  });

  const briefingItems: FeaturedContent[] = getAllBriefingsNewestFirst().map((item) => {
    const localized = localizeBriefing(item, language);
    const watch = Boolean(item.publicWatch);
    return {
      path: `/briefings/${item.slug}`,
      category: watch ? "watch" : "briefing",
      categoryLabel: watch ? (ko ? "씨앗의 눈" : "Watch") : (ko ? "씨앗브리핑" : "Briefing"),
      kicker: watch ? "SEED WATCH" : "SEED BRIEFING",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.images?.[0] ?? { src: "/images/brand/editorial-image-fallback.svg", alt: localized.title },
    };
  });

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
      categoryLabel: ko ? "씨앗언어" : "Seed Language",
      kicker: "SEED LANGUAGE",
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    }];
  });

  return [...columnItems, ...newsItems, ...briefingItems, ...languageItems]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
