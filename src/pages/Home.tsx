import { ArrowRight, Clock, Eye, Lightbulb, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { getNewsNewestFirst } from "../data/news";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const outlinedText = {
  WebkitTextStroke: "0.55px rgba(4, 15, 20, 0.72)",
  textShadow: "0 2px 4px rgba(0,0,0,.95), 1px 1px 0 rgba(0,0,0,.75), -1px 1px 0 rgba(0,0,0,.75), 1px -1px 0 rgba(0,0,0,.75), -1px -1px 0 rgba(0,0,0,.75)",
};

const monitoringItems = [
  ["경기도 재정 정상화", "지방채·기금 차입과 구조조정 이후 실제 채무가 꺾이는지 계속 추적합니다."],
  ["사법부 독립", "대법관 제청·임명과 대법원장 압박이 권력분립의 선을 넘지 않는지 기록합니다."],
  ["수사권력 이동", "검찰청 폐지 이후 경찰·중수청으로 이동한 권력이 시민의 통제를 받는지 확인합니다."],
];

const proposalItems = [
  ["지방재정 공개 대시보드", "지방채·기금·상환계획·사업 구조조정을 시민이 한 화면에서 볼 수 있게 공개합니다."],
  ["대법관 제청 절차 공개", "제청과 임명 과정의 협의 기준과 이견을 기록해 헌법기관의 책임성을 높입니다."],
  ["정책 성과 공개 원칙", "지원금과 공익사업은 투입액이 아니라 실제 효과와 지속 가능성을 함께 공개하게 합니다."],
];

export default function Home() {
  const { language } = useLanguage();
  const latestBriefing = getAllBriefingsNewestFirst()[0];
  const latestColumns = [...columns].sort((a, b) => b.issue - a.issue).slice(0, 2);
  const latestNews = getNewsNewestFirst().slice(0, 3);
  const briefingImage = latestBriefing.images?.[0];

  const ko = language === "ko";

  return (
    <>
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-8 sm:py-10 lg:grid-cols-[1.55fr_.75fr] lg:gap-8 lg:py-12">
          <Link
            to={`/briefings/${latestBriefing.slug}`}
            className="group relative min-h-[520px] overflow-hidden bg-navy shadow-[0_24px_70px_rgba(23,76,58,.16)] sm:min-h-[590px]"
          >
            {briefingImage && (
              <img
                src={resolveImageSrc(briefingImage.src)}
                alt={briefingImage.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.018]"
              />
            )}
            <div className="absolute inset-0 bg-black/24" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-black/12" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <span className="inline-flex border border-white/45 bg-green-deep/75 px-3 py-1.5 text-[10px] font-extrabold tracking-[.18em] text-white backdrop-blur-sm">
                {ko ? "LATEST CITIZEN BRIEFING" : "LATEST CIVIC BRIEFING"}
              </span>
              <p className="mt-5 text-xs font-extrabold tracking-[.13em] text-gold-light" style={outlinedText}>
                {latestBriefing.category} · {latestBriefing.date.replace(/-/g, ".")}
              </p>
              <h1 className="editorial-title mt-3 max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]" style={outlinedText}>
                {latestBriefing.title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/95 sm:text-base" style={outlinedText}>
                {latestBriefing.summary}
              </p>
              <div className="mt-7 flex items-center gap-5 text-xs font-bold text-white" style={outlinedText}>
                <span className="flex items-center gap-1.5"><Clock size={14} />{latestBriefing.readMinutes}분</span>
                <span className="flex items-center gap-1.5">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={15} /></span>
              </div>
            </div>
          </Link>

          <aside className="flex flex-col border-y-2 border-navy bg-paper">
            <div className="flex items-center justify-between border-b border-green-deep/15 px-1 py-5">
              <div>
                <span className="section-kicker">SEED COLUMN</span>
                <h2 className="editorial-title mt-2 text-2xl font-bold text-navy">{ko ? "최신 칼럼" : "Latest Columns"}</h2>
              </div>
              <Link to="/columns" className="text-link text-xs">{ko ? "전체보기" : "View all"}<ArrowRight size={14} /></Link>
            </div>

            {latestColumns.map((column, index) => (
              <Link
                key={column.slug}
                to={`/columns/${column.slug}`}
                className={`group flex flex-1 flex-col justify-center px-1 py-8 ${index === 0 ? "border-b border-green-deep/15" : ""}`}
              >
                <div className="flex items-center gap-3 text-[10px] font-extrabold tracking-[.14em] text-green-mid">
                  <span>씨드칼럼 {String(column.issue).padStart(2, "0")}</span>
                  <time className="text-charcoal/35">{column.date.replace(/-/g, ".")}</time>
                </div>
                <h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-3xl">
                  {column.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-charcoal/65">{column.subtitle}</p>
                <span className="mt-6 flex items-center gap-2 text-xs font-bold text-green-deep">{ko ? "칼럼 읽기" : "Read column"}<ArrowRight size={14} /></span>
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 border-b-2 border-navy pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">SEED NEWS</span>
              <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "지금 읽어야 할 뉴스" : "News to Read Now"}</h2>
            </div>
            <Link to="/news" className="text-link">{ko ? "뉴스 전체보기" : "View all news"}<ArrowRight size={16} /></Link>
          </div>

          <div className="grid border-b border-green-deep/15 md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {latestNews.map((item, index) => (
              <Link key={item.slug} to={`/news/${item.slug}`} className={`group py-8 ${index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}`}>
                <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[.14em] text-green-mid"><Newspaper size={14} />씨드뉴스 {String(item.issue).padStart(2, "0")} · {item.category}</div>
                <h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/55">{item.summary}</p>
                <time className="mt-6 block text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-14 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <section className="border-t-2 border-green-deep pt-6">
            <div className="flex items-end justify-between gap-4">
              <div><span className="section-kicker">CITIZEN WATCH</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{ko ? "시민감시" : "Citizen Watch"}</h2></div>
              <Link to="/monitoring" className="text-link text-xs">{ko ? "감시 의제 보기" : "View watchlist"}<ArrowRight size={14} /></Link>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/55">{ko ? "뉴스가 지나가도 숫자와 약속은 남습니다. 씨드는 권력과 정책의 후속 결과를 계속 확인합니다." : "We continue tracking the promises, numbers, and institutional consequences after the headlines move on."}</p>
            <div className="mt-7 divide-y divide-green-deep/12 border-y border-green-deep/12 bg-paper/70">
              {monitoringItems.map(([title, description]) => (
                <article key={title} className="flex gap-4 px-5 py-5"><Eye className="mt-1 shrink-0 text-green-mid" size={20} /><div><h3 className="font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-charcoal/55">{description}</p></div></article>
              ))}
            </div>
          </section>

          <section className="border-t-2 border-gold pt-6">
            <div className="flex items-end justify-between gap-4">
              <div><span className="section-kicker">CITIZEN PROPOSALS</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{ko ? "시민제안" : "Citizen Proposals"}</h2></div>
              <Link to="/proposals" className="text-link text-xs">{ko ? "제안 보기" : "View proposals"}<ArrowRight size={14} /></Link>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/55">{ko ? "비판에서 멈추지 않습니다. 확인한 문제를 시민이 사용할 수 있는 제도와 실행 아이디어로 바꿉니다." : "We turn verified problems into practical institutional and civic proposals rather than stopping at criticism."}</p>
            <div className="mt-7 divide-y divide-green-deep/12 border-y border-green-deep/12 bg-paper/70">
              {proposalItems.map(([title, description]) => (
                <article key={title} className="flex gap-4 px-5 py-5"><Lightbulb className="mt-1 shrink-0 text-gold" size={20} /><div><h3 className="font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-charcoal/55">{description}</p></div></article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
