import type { Language } from "../i18n";
import { getHotIssueColumnsNewestFirst } from "./columns";
import { localizeColumn, localizeNewsArticle } from "./localizedContent";
import { getNewsNewestFirst } from "./news";
import { supremeCourtRenominationTracker } from "./supremeCourtRenominationTracker";

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
    const listingImage = item.slug === "dmz-security-command-failure"
      ? localized.heroImage
      : {
          src: localized.selectedNews.thumbnailUrl ?? localized.heroImage.src,
          alt: localized.selectedNews.thumbnailAlt ?? localized.heroImage.alt,
        };
    return {
      key: `news-${item.slug}`,
      to: `/news/${item.slug}`,
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      imageSrc: listingImage.src,
      imageAlt: listingImage.alt,
      kindLabel: ko ? "뉴스" : "News",
      readMinutes: item.readMinutes,
    };
  });

  const commentary = getHotIssueColumnsNewestFirst().map((item) => {
    const localized = localizeColumn(item, language);
    return {
      key: `column-${item.slug}`,
      to: `/columns/${item.slug}`,
      title: localized.title,
      summary: localized.summary,
      date: item.date,
      imageSrc: localized.heroImage.src,
      imageAlt: localized.heroImage.alt,
      kindLabel: ko ? "쟁점 칼럼" : "Issue commentary",
      readMinutes: item.readMinutes,
    };
  });

  const supremeCourtTracker: HotIssueListItem = {
    key: `watch-${supremeCourtRenominationTracker.slug}`,
    to: `/monitoring/${supremeCourtRenominationTracker.slug}`,
    title: supremeCourtRenominationTracker.title[language],
    summary: supremeCourtRenominationTracker.summary[language],
    date: supremeCourtRenominationTracker.updatedAt,
    imageSrc: supremeCourtRenominationTracker.heroImage?.src ?? "/images/brand/editorial-image-fallback.svg",
    imageAlt: supremeCourtRenominationTracker.heroImage?.alt[language] ?? supremeCourtRenominationTracker.title[language],
    kindLabel: ko ? "뉴스트래커" : "News tracker",
  };

  return [...news, supremeCourtTracker, ...commentary].sort((a, b) => {
    const dateOrder = b.date.localeCompare(a.date);
    if (dateOrder !== 0) return dateOrder;
    // When a news briefing and its tracker share a date, show the briefing first.
    if (a.key.startsWith("news-") && b.key.startsWith("watch-")) return -1;
    if (a.key.startsWith("watch-") && b.key.startsWith("news-")) return 1;
    return a.title.localeCompare(b.title);
  });
}
