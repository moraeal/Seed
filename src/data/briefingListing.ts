import type { Language } from "../i18n";
import { getAllBriefingsNewestFirst } from "./allBriefings";
import { localizeBriefing } from "./localizedContent";
import { inheritanceTaxAutomaticIncreaseCommentary } from "./inheritanceTaxAutomaticIncrease2026";

// Cross-listed articles retain their original detail route and share its copy.
export function getBriefingListing(language: Language) {
  const article = inheritanceTaxAutomaticIncreaseCommentary;
  const edition = article.editions[language];
  const items = getAllBriefingsNewestFirst().map((item) => ({
    ...localizeBriefing(item, language),
    path: `/briefings/${item.slug}`,
  }));
  items.push({
    slug: article.slug,
    path: `/monitoring/tax/commentary/${article.slug}`,
    category: language === "ko" ? "세금 브리핑" : "Tax briefing",
    title: edition.title,
    summary: edition.summary,
    date: article.date,
    author: language === "ko" ? "씨앗의 소리" : "Seed Voice",
    readMinutes: article.readMinutes,
    images: [{ src: article.heroSrc, alt: edition.heroAlt, caption: "", credit: "", sourceUrl: "" }],
    content: [],
    watchPoints: [],
  });
  return items.sort((a, b) => b.date.localeCompare(a.date) || (b.issueNumber ?? -1) - (a.issueNumber ?? -1));
}
