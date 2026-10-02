import type { Language } from "../i18n";
import type { WatchSide } from "../components/WatchPairRow";
import type { LegislativeBill } from "../lib/legislativeMonitoring";
import { mfdsSaucePortioningColumn } from "./columns/mfdsSaucePortioningColumn";
import { getPublicInterestColumnsNewestFirst } from "./columns";
import { getEditorialContinuation } from "./editorialContinuations";
import { localizeColumn } from "./localizedContent";
import { publicInterestWatchCases } from "./newsTrackerRegistry";
import { taxPolicies } from "./taxWatch";

export type CivicWatchItem = {
  key: string;
  category: "issue" | "legislation" | "tax" | "public-interest";
  date: string;
  updatedAt?: string;
  to: string;
  title: string;
  summary: string;
  status: string;
};

const watchTimestamp = (value: string) => Date.parse(value.length === 10 ? `${value}T00:00:00+09:00` : value) || 0;
const newestFirst = (a: CivicWatchItem, b: CivicWatchItem) =>
  watchTimestamp(b.updatedAt || b.date) - watchTimestamp(a.updatedAt || a.date) || a.to.localeCompare(b.to);
const koreaDate = (value: string) => value.length === 10 ? value : new Date(watchTimestamp(value) + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
const billDate = (bill: LegislativeBill) => [bill.editorial_updated_at, bill.published_at]
  .filter((value): value is string => Boolean(value))
  .sort((a, b) => watchTimestamp(b) - watchTimestamp(a))[0]
  || bill.updated_at || bill.proposed_date || "";

const recentUpdate = (publishedAt: string | undefined, updatedAt: string) => {
  if (!publishedAt || updatedAt <= publishedAt) return false;
  const todayInKorea = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const age = Date.parse(`${todayInKorea}T00:00:00Z`) - Date.parse(`${updatedAt}T00:00:00Z`);
  return age >= 0 && age < 7 * 24 * 60 * 60 * 1000;
};


// The issue list and homepage consume the same records and article registrations.
export function getIssueWatchRows(language: Language) {
  const ko = language === "ko";
  const cases = [...publicInterestWatchCases].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.title[language].localeCompare(b.title[language]));
  const rows: { slug: string; date: string; tracker: WatchSide; article?: WatchSide }[] = cases.map((item) => {
    const related = item.relatedContents?.[0];
    const continuation = related ? undefined : getEditorialContinuation("monitoring", item.slug, language);
    const article = related ? {
      href: related.href, label: related.label[language], title: related.title[language], summary: related.summary[language], date: related.date,
    } : continuation ? {
      href: continuation.href, label: ko ? "관련 기사" : "RELATED ARTICLE", title: continuation.title, summary: continuation.reason,
    } : undefined;
    return { slug: item.slug, date: item.updatedAt, tracker: {
      href: `/monitoring/${item.slug}`, label: item.timeline?.length ? (ko ? "뉴스트래커" : "NEWS TRACKER") : (ko ? "이슈감시" : "ISSUE WATCH"),
      title: item.title[language], summary: item.summary[language], image: item.heroImage?.src, alt: item.heroImage?.alt[language], date: item.updatedAt,
      badge: item.timeline?.length && recentUpdate(item.publishedAt, item.updatedAt) ? (ko ? "업데이트" : "UPDATED") : undefined,
    }, article };
  });
  const sauceArticle = localizeColumn(mfdsSaucePortioningColumn, language);
  rows.push({
    slug: sauceArticle.slug,
    date: sauceArticle.date,
    tracker: {
      href: `/columns/${sauceArticle.slug}`,
      label: ko ? "식약처 고시 · 씨앗 논평" : "MFDS RULES · SEED COMMENTARY",
      title: sauceArticle.title,
      summary: sauceArticle.summary,
      image: sauceArticle.heroImage.src,
      alt: sauceArticle.heroImage.alt,
      date: sauceArticle.date,
    },
    article: {
      href: "https://www.mfds.go.kr/brd/m_207/view.do?seq=15182",
      external: true,
      label: ko ? "식약처 고시 원문 · 제2026-55호" : "OFFICIAL MFDS NOTICE · NO. 2026-55",
      title: ko ? "식품의 기준 및 규격 — 소스류 소분·위생관리" : "Food Standards and Specifications — Sauce Portioning and Hygiene",
      summary: ko ? "2026년 10월 1일 시행. 손님이 직접 덜어 먹는 소스류 등을 위생적으로 소분해 제공하도록 하는 기준입니다. 냉동식품 해동·얼음 분리·배달용기 오염 방지 기준도 함께 정비했습니다." : "Effective October 1, 2026. Sets hygienic portioning requirements for sauces that customers serve themselves, alongside rules for thawing frozen food, separating ice and preventing delivery-container contamination.",
      date: "2026-07-31",
    },
  });
  rows.sort((a, b) => b.date.localeCompare(a.date) || a.tracker.title.localeCompare(b.tracker.title));
  return rows;
}

export function getCivicWatchFeed(language: Language, bills: LegislativeBill[] = []): CivicWatchItem[] {
  const ko = language === "ko";
  const items: CivicWatchItem[] = [
    ...getIssueWatchRows(language).map((row) => {
      const record = publicInterestWatchCases.find((item) => item.slug === row.slug);
      return {
      key: `issue-${row.slug}`,
      category: record && !record.timeline?.length ? "public-interest" as const : "issue" as const,
      date: row.date,
      to: row.tracker.href,
      title: row.tracker.title,
      summary: row.tracker.summary,
      status: record?.status[language] || row.tracker.label,
    }; }),
    ...getPublicInterestColumnsNewestFirst().map((column) => {
      const item = localizeColumn(column, language);
      return { key: `public-interest-${item.slug}`, category: "public-interest" as const, date: item.date,
        to: `/columns/${item.slug}`, title: item.title, summary: item.summary,
        status: ko ? "공익감시 기사" : "Public-interest article" };
    }),
    ...bills.filter((bill) => bill.review_state === "published" && bill.editorial_image?.status === "ready"
      && bill.editorial_image.src && bill.editorial_image.verified_at).map((bill) => ({
      key: `legislation-${bill.bill_id}`,
      category: "legislation" as const,
      date: koreaDate(billDate(bill)),
      updatedAt: billDate(bill),
      to: `/monitoring/legislation/${bill.slug}`,
      title: ko ? bill.title : bill.analysis?.title_en || bill.title,
      summary: ko ? bill.public_summary_ko || bill.analysis?.summary_ko || bill.official_summary || "공식 자료와 조문을 검토한 입법감시 기록입니다."
        : bill.public_summary_en || bill.analysis?.summary_en || "A legislative watch record based on official documents and bill text.",
      status: ko ? `중요도 ${bill.importance_score}` : `Impact ${bill.importance_score}`,
    })),
    ...taxPolicies.map((item) => ({
      key: `tax-${item.slug}`, category: "tax" as const, date: item.checkedAt,
      to: `/monitoring/tax/${item.slug}`, title: item.title[language], summary: item.summary[language], status: item.status[language],
    })),
  ];
  return items.sort(newestFirst);
}

// Keep every category eligible: fixed category slots must not bury newer articles.
// Exclude exact articles, so a new analysis can accompany a related lead story.
export function selectLatestCivicWatchItems(items: CivicWatchItem[], excludedPaths: ReadonlySet<string>, limit = 3) {
  const seen = new Set(excludedPaths);
  return [...items].sort(newestFirst)
    .filter((item) => {
      if (seen.has(item.to)) return false;
      seen.add(item.to);
      return true;
    }).slice(0, limit);
}
