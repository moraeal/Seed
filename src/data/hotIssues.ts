import type { Language } from "../i18n";
import { getHotIssueColumnsNewestFirst } from "./columns";
import { localizeColumn, localizeNewsArticle } from "./localizedContent";
import { getNewsNewestFirst } from "./news";

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

  return [...news, ...commentary].sort((a, b) => {
    const dateOrder = b.date.localeCompare(a.date);
    if (dateOrder !== 0) return dateOrder;
    return a.title.localeCompare(b.title);
  });
}
