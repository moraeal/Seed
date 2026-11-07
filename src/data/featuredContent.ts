import type { Language } from "../i18n";
import { getAllBriefingsNewestFirst } from "./allBriefings";
import { getColumnsNewestFirst, getPublicInterestColumnsNewestFirst } from "./columns";
import { getHotIssuesNewestFirst } from "./hotIssues";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "./localizedContent";
import { getNewsNewestFirst } from "./news";
import { publicInterestWatchCases } from "./newsTrackerRegistry";
import { legislativeCommentaries } from "./legislativeCommentaries";
import { taxCommentaries } from "./taxCommentaries";
import { taxPolicies } from "./taxWatch";
import type { LegislativeBill } from "../lib/legislativeMonitoring";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "./seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "./seedLanguageEnvironment";

export type FeaturedContent = {
  path: string;
  category: "column" | "news" | "briefing" | "watch" | "language";
  categoryLabel: string;
  kicker: string;
  title: string;
  summary: string;
  bodyExcerpt?: string;
  date: string;
  readMinutes?: number;
  image: { src: string; alt: string };
};

// The homepage preview is plain text inside a link: retain article wording,
// while removing citation markup and inline link targets from the short excerpt.
function bodyExcerpt(paragraphs: (string | null | undefined)[]): string {
  return paragraphs.filter((paragraph): paragraph is string => Boolean(paragraph?.trim()))
    .slice(0, 4)
    .join(" ")
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, "$1")
    .replace(/\[\d+\]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 800);
}

export function getFeaturedContentCandidates(language: Language, legislativeBills: LegislativeBill[] = []): FeaturedContent[] {
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
      bodyExcerpt: bodyExcerpt(localized.sections.flatMap((section) => section.paragraphs)),
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    };
  });

  const newsByPath = new Map(getNewsNewestFirst().map((item) => [`/news/${item.slug}`, localizeNewsArticle(item, language)]));
  const columnsByPath = new Map(getColumnsNewestFirst().map((item) => [`/columns/${item.slug}`, localizeColumn(item, language)]));
  const trackerByPath = new Map(publicInterestWatchCases.map((item) => [`/monitoring/${item.slug}`, item]));
  const newsItems: FeaturedContent[] = getHotIssuesNewestFirst(language).map((item) => {
    const story = newsByPath.get(item.to) ?? columnsByPath.get(item.to);
    const tracker = trackerByPath.get(item.to);
    return {
      path: item.to,
      category: "news",
      categoryLabel: ko ? "핫이슈" : "Hot Issues",
      kicker: "HOT ISSUES",
      title: item.title,
      summary: item.summary,
      bodyExcerpt: story
        ? bodyExcerpt(story.sections.flatMap((section) => section.paragraphs))
        : bodyExcerpt(tracker?.confirmedFacts.map((fact) => fact[language]) ?? []),
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
      categoryLabel: item.category.startsWith("슬기로운 시민생활") ? (ko ? "슬기로운 시민생활" : "Wise Civic Life") : watch ? (ko ? "시민감시" : "Civic Watch") : (ko ? "브리핑" : "Briefings"),
      kicker: watch ? "CIVIC WATCH" : "BRIEFINGS",
      title: localized.title,
      summary: localized.summary,
      bodyExcerpt: bodyExcerpt([...localized.content, ...(localized.sections?.flatMap((section) => section.paragraphs ?? []) ?? [])]),
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.images?.[0] ?? { src: "/images/brand/editorial-image-fallback.svg", alt: localized.title },
    };
  });

  const publicInterestColumnItems: FeaturedContent[] = getPublicInterestColumnsNewestFirst().map((item) => {
    const localized = localizeColumn(item, language);
    return {
      path: `/columns/${item.slug}`,
      category: "watch",
      categoryLabel: ko ? "공익감시" : "Public-interest Watch",
      kicker: "CIVIC WATCH",
      title: localized.title,
      summary: localized.summary,
      bodyExcerpt: bodyExcerpt(localized.sections.flatMap((section) => section.paragraphs)),
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    };
  });

  const trackerItems: FeaturedContent[] = publicInterestWatchCases.map((item) => ({
    path: `/monitoring/${item.slug}`,
    category: "watch",
    categoryLabel: ko ? "시민감시" : "Civic Watch",
    kicker: "CIVIC WATCH · NEWS TRACKER",
    title: item.title[language],
    summary: item.summary[language],
    bodyExcerpt: bodyExcerpt(item.confirmedFacts.map((fact) => fact[language])),
    date: item.updatedAt,
    image: {
      src: item.heroImage?.src ?? "/images/brand/editorial-image-fallback.svg",
      alt: item.heroImage?.alt[language] ?? item.title[language],
    },
  }));

  const legislativeItems: FeaturedContent[] = legislativeCommentaries.map((item) => {
    const edition = item.editions[language];
    return {
      path: `/monitoring/legislation/commentary/${item.slug}`,
      category: "watch",
      categoryLabel: ko ? "입법감시" : "Legislative Watch",
      kicker: "CIVIC WATCH · LEGISLATION",
      title: edition.title,
      summary: edition.summary,
      bodyExcerpt: bodyExcerpt(edition.sections.flatMap((section) => section.paragraphs)),
      date: item.date,
      readMinutes: item.readMinutes,
      image: { src: item.heroSrc, alt: edition.heroAlt },
    };
  });

  const legislativeBillItems: FeaturedContent[] = legislativeBills
    .filter((item) => item.review_state === "published" && item.editorial_image?.status === "ready" && item.editorial_image.src && item.editorial_image.verified_at)
    .map((item) => {
      const title = ko ? item.title : item.analysis?.title_en || item.title;
      return {
        path: `/monitoring/legislation/${item.slug}`,
        category: "watch",
        categoryLabel: ko ? "입법감시" : "Legislative Watch",
        kicker: "CIVIC WATCH · LEGISLATION",
        title,
        summary: ko
          ? item.public_summary_ko || item.analysis?.summary_ko || item.official_summary || ""
          : item.public_summary_en || item.analysis?.summary_en || "",
        bodyExcerpt: bodyExcerpt(ko ? item.analysis?.changes_ko ?? [] : item.analysis?.changes_en ?? []),
        date: (item.editorial_updated_at || item.published_at || item.updated_at || item.proposed_date || "").slice(0, 10),
        image: { src: item.editorial_image!.src!, alt: (ko ? item.editorial_image!.alt_ko : item.editorial_image!.alt_en) || title },
      };
    });

  const taxItems: FeaturedContent[] = taxPolicies.map((item) => ({
    path: `/monitoring/tax/${item.slug}`,
    category: "watch",
    categoryLabel: ko ? "세금감시" : "Tax Watch",
    kicker: "CIVIC WATCH · TAX",
    title: item.title[language],
    summary: item.summary[language],
    bodyExcerpt: bodyExcerpt([item.oneSentence[language], ...item.keyChanges.map((change) => change.body[language])]),
    date: item.checkedAt,
    image: { src: item.heroImage[language], alt: item.heroImage.alt[language] },
  }));

  const taxCommentaryItems: FeaturedContent[] = taxCommentaries.map((item) => {
    const edition = item.editions[language];
    return {
      path: `/monitoring/tax/commentary/${item.slug}`,
      category: "watch",
      categoryLabel: ko ? "세금감시" : "Tax Watch",
      kicker: "CIVIC WATCH · TAX",
      title: edition.title,
      summary: edition.summary,
      bodyExcerpt: bodyExcerpt(edition.sections.flatMap((section) => section.paragraphs)),
      date: item.date,
      readMinutes: item.readMinutes,
      image: { src: item.heroSrc, alt: edition.heroAlt },
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
      categoryLabel: ko ? "시민언어" : "Glossary",
      kicker: "GLOSSARY",
      title: localized.title,
      summary: localized.summary,
      bodyExcerpt: bodyExcerpt([...(localized.leadParagraphs ?? []), ...localized.sections.flatMap((section) => section.paragraphs)]),
      date: item.date,
      readMinutes: item.readMinutes,
      image: localized.heroImage,
    }];
  });

  const candidates = [...columnItems, ...newsItems, ...publicInterestColumnItems, ...trackerItems, ...legislativeItems, ...legislativeBillItems, ...taxItems, ...taxCommentaryItems, ...briefingItems, ...languageItems]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
  const seenPaths = new Set<string>();
  return candidates.filter((item) => {
    if (seenPaths.has(item.path)) return false;
    seenPaths.add(item.path);
    return true;
  });
}
