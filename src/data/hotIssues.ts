import type { Language } from "../i18n";
import { localizeNewsArticle } from "./localizedContent";
import { getNewsNewestFirst } from "./news";
import { newsTrackerCases } from "./publicInterestWatch";

export type HotIssueListItem = {
  key: string;
  to: string;
  title: string;
  summary: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  kindLabel: string;
  readMinutes?: number;
  status?: string;
};

export function getHotIssuesNewestFirst(language: Language): HotIssueListItem[] {
  const ko = language === "ko";
  const news = getNewsNewestFirst().map((item) => {
    const localized = localizeNewsArticle(item, language);
    return {
      key: `news-${item.slug}`,
      to: `/news/${item.slug}`,
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      imageSrc: localized.selectedNews.thumbnailUrl ?? localized.heroImage.src,
      imageAlt: localized.selectedNews.thumbnailAlt ?? localized.heroImage.alt,
      kindLabel: ko ? "뉴스" : "News",
      readMinutes: item.readMinutes,
    };
  });

  const trackers = newsTrackerCases.map((item) => ({
    key: `tracker-${item.slug}`,
    to: `/news/${item.slug}`,
    title: item.title[language],
    summary: item.summary[language],
    date: item.updatedAt,
    imageSrc: item.heroImage?.src ?? "/images/brand/editorial-image-fallback.svg",
    imageAlt: item.heroImage?.alt[language] ?? item.title[language],
    kindLabel: ko ? "뉴스트래커" : "News tracker",
    status: item.status[language],
  }));

  return [...news, ...trackers].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
