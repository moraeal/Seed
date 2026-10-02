import WatchPairRow from "../components/WatchPairRow";
import NewsTrackingCard from "../components/NewsTrackingCard";
import { getNewsTrackingCards } from "../data/newsTracking";
import { useSearchParams } from "react-router-dom";
import { getIssueWatchRows } from "../data/civicWatchFeed";
import { useLanguage } from "../i18n";

export default function Monitoring() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [searchParams] = useSearchParams();
  const trackersOnly = searchParams.get("view") === "trackers";
  const trackingCards = trackersOnly ? getNewsTrackingCards(language) : [];
  const rows = getIssueWatchRows(language);

  return <section className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-3 py-5 sm:py-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><span className="section-kicker">{trackersOnly ? "NEWS TRACKING" : "ISSUE WATCH"}</span><h1 className="editorial-title mt-1.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{trackersOnly ? (ko ? "뉴스트래킹" : "News Tracking") : (ko ? "이슈감시" : "Issue Watch")}</h1></div>
        <p className="max-w-2xl text-base leading-7 text-charcoal/65">{trackersOnly ? (ko ? "씨앗이 계속 추적하는 사건들을 최근 변화가 기록된 순서로 모았습니다. 각 기사에서 확인된 사실과 남은 쟁점, 타임라인을 함께 살펴보세요." : "Explore every story SEED continues to follow, ordered by its latest recorded development. Each tracker brings together verified facts, open questions and a timeline.") : (ko ? "이슈감시는 시민의 삶과 자유에 영향을 주는 주요 사건이 어떻게 시작되고 달라지는지 따라갑니다. 확인된 사실과 최근 변화, 아직 풀리지 않은 질문을 뉴스트래커에 기록하고 관련 기사를 함께 보여드립니다. 이어지는 소식까지 살펴보며 독자가 스스로 판단할 수 있도록 돕습니다." : "Issue Watch follows major events that affect people's lives and freedoms, from the first report through later developments. Our news trackers record verified facts, recent changes and unanswered questions alongside related articles, helping readers follow the story and judge for themselves.")}</p>
      </div>
    </header>

    <div className="container-page pt-6 sm:pt-8">
      {trackersOnly ? <section aria-label={ko ? "뉴스트래커 기사 목록" : "News trackers"}>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{trackingCards.map((card) => <NewsTrackingCard key={card.to} card={card}/>)}</div>
        {!trackingCards.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "아직 공개된 추적 기사가 없습니다." : "No published trackers yet."}</p>}
      </section> : <section aria-label={ko ? "이슈감시 기사 목록" : "Issue watch articles"}>
        <div>{rows.map((row) => <WatchPairRow key={row.slug} article={row.tracker} record={row.article} ko={ko}/>)}</div>
        {!rows.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "아직 공개된 기록이 없습니다." : "No published records yet."}</p>}
      </section>}
    </div>
  </section>;
}
