import WatchPairRow, { type WatchSide } from "../components/WatchPairRow";
import { mfdsSaucePortioningColumn } from "../data/columns/mfdsSaucePortioningColumn";
import { getEditorialContinuation } from "../data/editorialContinuations";
import { localizeColumn } from "../data/localizedContent";
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

  return <section className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-3 py-5 sm:py-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><span className="section-kicker">ISSUE WATCH</span><h1 className="editorial-title mt-1.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "이슈감시" : "Issue Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-7 text-charcoal/65">{ko ? "이슈감시는 시민의 삶과 자유에 영향을 주는 주요 사건이 어떻게 시작되고 달라지는지 따라갑니다. 확인된 사실과 최근 변화, 아직 풀리지 않은 질문을 뉴스트래커에 기록하고 관련 기사를 함께 보여드립니다. 이어지는 소식까지 살펴보며 독자가 스스로 판단할 수 있도록 돕습니다." : "Issue Watch follows major events that affect people's lives and freedoms, from the first report through later developments. Our news trackers record verified facts, recent changes and unanswered questions alongside related articles, helping readers follow the story and judge for themselves."}</p>
      </div>
    </header>

    <div className="container-page pt-6 sm:pt-8">
      <section aria-label={ko ? "이슈감시 기사 목록" : "Issue watch articles"}>
        <div>{rows.map((row) => <WatchPairRow key={row.slug} article={row.tracker} record={row.article} ko={ko}/>)}</div>
        {!rows.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "아직 공개된 기록이 없습니다." : "No published records yet."}</p>}
      </section>
    </div>
  </section>;
}
