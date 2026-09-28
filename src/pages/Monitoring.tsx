import { FileSearch } from "lucide-react";
import { useState } from "react";
import WatchPairRow from "../components/WatchPairRow";
import { getEditorialContinuation } from "../data/editorialContinuations";
import { publicInterestWatchCases } from "../data/newsTrackerRegistry";
import { useLanguage } from "../i18n";

const recentUpdate = (publishedAt: string | undefined, updatedAt: string) => {
  if (!publishedAt || updatedAt <= publishedAt) return false;
  const todayInKorea = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const age = Date.parse(`${todayInKorea}T00:00:00Z`) - Date.parse(`${updatedAt}T00:00:00Z`);
  return age >= 0 && age < 7 * 24 * 60 * 60 * 1000;
};

export default function Monitoring() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [query, setQuery] = useState("");
  const cases = [...publicInterestWatchCases].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.title[language].localeCompare(b.title[language]));
  const rows = cases.map((item) => {
    const related = item.relatedContents?.[0];
    const continuation = related ? undefined : getEditorialContinuation("monitoring", item.slug, language);
    const article = related ? {
      href: related.href, label: related.label[language], title: related.title[language], summary: related.summary[language], date: related.date,
    } : continuation ? {
      href: continuation.href, label: ko ? "관련 기사" : "RELATED ARTICLE", title: continuation.title, summary: continuation.reason,
    } : undefined;
    return { slug: item.slug, tracker: {
      href: `/monitoring/${item.slug}`, label: item.timeline?.length ? (ko ? "뉴스트래커" : "NEWS TRACKER") : (ko ? "이슈감시" : "ISSUE WATCH"),
      title: item.title[language], summary: item.summary[language], image: item.heroImage?.src, alt: item.heroImage?.alt[language], date: item.updatedAt,
      badge: item.timeline?.length && recentUpdate(item.publishedAt, item.updatedAt) ? (ko ? "업데이트" : "UPDATED") : undefined,
    }, article };
  });
  const filtered = rows.filter((row) => !query.trim() || [row.tracker.title, row.tracker.summary, row.article?.title, row.article?.summary].some((value) => value?.toLowerCase().includes(query.trim().toLowerCase())));

  return <section className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-4 py-5 sm:py-7 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><span className="section-kicker">CIVIC WATCH</span><h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "시민감시" : "Civic Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-7 text-charcoal/65">{ko ? "시민감시는 시민의 삶과 기업 활동에 영향을 주는 자유와 규제의 흐름을 살펴봅니다. 주요 사건과 법안, 세금정책, 공익기관의 활동을 분야별로 기록하고 무엇이 어떻게 달라지는지 쉽게 설명합니다. 확인된 사실과 아직 풀리지 않은 질문, 씨앗의 판단을 나누어 독자가 직접 판단할 수 있도록 돕습니다." : "Civic Watch examines how freedom and regulation affect citizens' lives and business activity. We organize major events, legislation, tax policy, and the work of public-interest institutions by subject, explaining in plain language what is changing and how. By separating verified facts, unresolved questions and Seed Voice's judgment, we help readers reach their own conclusions."}</p>
      </div>
    </header>

    <div className="container-page pt-6 sm:pt-8">
      <section aria-label={ko ? "이슈감시 기사 검색 및 목록" : "Issue watch articles and search"}>
        <label className="flex items-center gap-3 border border-green-deep/15 bg-white px-4 py-3"><FileSearch size={18} className="text-charcoal/45"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "이슈·기사 검색" : "Search issues and articles"} className="w-full bg-transparent text-sm outline-none"/></label>
        <div className="mt-3">{filtered.map((row) => <WatchPairRow key={row.slug} article={row.tracker} record={row.article} ko={ko}/>)}</div>
        {!filtered.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "검색 결과가 없습니다." : "No matching records."}</p>}
      </section>
    </div>
  </section>;
}
