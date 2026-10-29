import type { Language } from "../i18n";
import { claimHomeStories } from "./homeTopics";
import { newsTrackerCases } from "./newsTrackerRegistry";
import type { PublicInterestWatchCase } from "./publicInterestWatch";

export type NewsTrackingCard = {
  to: string;
  title: string;
  latestChange: string;
  changeDate: string;
  imageSrc?: string;
  imageAlt: string;
};

// Dated developments determine freshness, not cosmetic edits to updatedAt.
// Future events and questions awaiting confirmation are not new developments.
export function getNewsTrackingCards(language: Language, records: PublicInterestWatchCase[] = newsTrackerCases): NewsTrackingCard[] {
  const today = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const validDate = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Date.parse(date)) && date <= today;
  const cards = records.filter((record) => Boolean(record.timeline?.length)).map((record) => {
    const changes = record.keyChanges?.filter((change) => validDate(change.date)) ?? [];
    const latest = [...changes].sort((a, b) => b.date.localeCompare(a.date))[0];
    const timeline = [...(record.timeline ?? [])]
      .filter((entry) => entry.status !== "pending" && validDate(entry.date))
      .sort((a, b) => b.date.localeCompare(a.date))[0];
    // A newer dated timeline entry must supersede an older keyChanges entry.
    // If both share a date, prefer the editor's curated key-change summary.
    const useKeyChange = Boolean(latest && (!timeline || latest.date >= timeline.date));
    return {
      to: `/monitoring/${record.slug}`,
      title: record.title[language],
      latestChange: (useKeyChange ? latest?.text[language] : timeline?.change?.[language] || timeline?.description[language]) || record.summary[language],
      changeDate: (useKeyChange ? latest?.date : timeline?.date) || record.publishedAt || record.updatedAt,
      imageSrc: record.heroImage?.src,
      imageAlt: record.heroImage?.alt[language] || record.title[language],
    };
  }).sort((a, b) => b.changeDate.localeCompare(a.changeDate) || a.to.localeCompare(b.to));
  return cards.filter((card, index) => cards.findIndex((candidate) => candidate.to === card.to) === index);
}

export function selectNewsTrackingCards(cards: NewsTrackingCard[], claimedTopics: ReadonlySet<string>, limit = 4): NewsTrackingCard[] {
  return claimHomeStories(cards, (card) => card.to, new Set(claimedTopics), limit);
}
