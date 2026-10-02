import type { Language } from "../i18n";
import { getHomeTopic } from "./homeTopics";
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
    return {
      to: `/monitoring/${record.slug}`,
      title: record.title[language],
      latestChange: latest?.text[language] || timeline?.change?.[language] || timeline?.description[language] || record.summary[language],
      changeDate: latest?.date || timeline?.date || record.publishedAt || record.updatedAt,
      imageSrc: record.heroImage?.src,
      imageAlt: record.heroImage?.alt[language] || record.title[language],
    };
  }).sort((a, b) => b.changeDate.localeCompare(a.changeDate) || a.to.localeCompare(b.to));
  return cards.filter((card, index) => cards.findIndex((candidate) => candidate.to === card.to) === index);
}

export function selectNewsTrackingCards(cards: NewsTrackingCard[], claimedTopics: ReadonlySet<string>, limit = 4): NewsTrackingCard[] {
  const seen = new Set(claimedTopics);
  return cards.filter((card) => {
    const topic = getHomeTopic(card.to);
    if (seen.has(topic)) return false;
    seen.add(topic);
    return true;
  }).slice(0, Math.max(0, limit));
}
