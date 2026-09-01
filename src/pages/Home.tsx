import { ArrowRight, BookOpenCheck, Clock, Eye, FlaskConical, Lightbulb, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollRevealPanel from "../components/ScrollRevealPanel";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { monitoringItems, proposalItems } from "../data/civicParticipation";
import { columns } from "../data/columns";
import { getNewsNewestFirst } from "../data/news";
import { academyItems, experimentItems } from "../data/programContent";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const heroTextShadow = { textShadow: "0 2px 10px rgba(0,0,0,.82)" };

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
          <Link to={`/briefings/${latestBriefing.slug}`} className="group relative min-h-[520px] overflow-hidden bg-navy shadow-[0_24px_70px_rgba(23,76,58,.16)] sm:min-h-[590px]">
            {briefingImage && <img src={resolveImageSrc(briefingImage.src)} alt={briefingImage.alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.018]" />}
            <div className="absolute inset-0 bg-black/38" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/48 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <span className="inline-flex border border-white/45 bg-green-deep/80 px-3 py-1.5 text-[10px] font-extrabold tracking-[.18em] text-white backdrop-blur-sm">{ko ? "LATEST CITIZEN BRIEFING" : "LATEST CIVIC BRIEFING"}</span>
              <p className="mt-5 text-xs font-extrabold tracking-[.13em] text-gold-light" style={heroTextShadow}>{latestBriefing.category} · {latestBriefing.date.replace(/-/g, ".")}</p>
              <h1 className="editorial-title mt-3 max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]" style={heroTextShadow}>{latestBriefing.title}</h1>
              <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/95 sm:text-base" style={heroTextShadow}>{latestBriefing.summary}</p>
              <div className="mt-7 flex items-center gap-5 text-xs font-bold text-white" style={heroTextShadow}><span className="flex items-center gap-1.5"><Clock size={14}/>{latestBriefing.readMinutes}분</span><span className="flex items-center gap-1.5">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={15}/></span></div>
            </div>
          </Link>

          <aside className="flex flex-col border-y-2 border-navy bg-paper">
            <div className="flex items-center justify-between border-b border-green-deep/15 px-1 py-5"><div><span className="section-kicker">SEED COLUMN</span><h2 className="editorial-title mt-2 text-2xl font-bold text-navy">{ko ? "최신 칼럼" : "Latest Columns"}</h2></div><Link to="/columns" className="text-link text-xs">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div>
            {latestColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className={`group flex flex-1 flex-col justify-center px-1 py-8 ${index === 0 ? "border-b border-green-deep/15" : ""}`}><div className="flex items-center gap-3 text-[10px] font-extrabold tracking-[.14em] text-green-mid"><span>씨드칼럼 {String(column.issue).padStart(2, "0")}</span><time className="text-charcoal/35">{column.date.replace(/-/g, ".")}</time></div><h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-3xl">{column.title}</h3><p className="mt-4 text-sm font-semibold leading-7 text-charcoal/65">{column.subtitle}</p><span className="mt-6 flex items-center gap-2 text-xs font-bold text-green-deep">{ko ? "칼럼 읽기" : "Read column"}<ArrowRight size={14}/></span></Link>)}
          </aside>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 border-b-2 border-navy pb-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">SEED NEWS</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "지금 읽어야 할 뉴스" : "News to Read Now"}</h2></div><Link to="/news" className="text-link">{ko ? "뉴스 전체보기" : "View all news"}<ArrowRight size={16}/></Link></div>
          <div className="grid border-b border-green-deep/15 md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {latestNews.map((item, index) => <Link key={item.slug} to={`/news/${item.slug}`} className={`group py-8 ${index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}`}><div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[.14em] text-green-mid"><Newspaper size={14}/>씨드뉴스 {String(item.issue).padStart(2, "0")} · {item.category}</div><h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/55">{item.summary}</p><time className="mt-6 block text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time></Link>)}
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-12 sm:py-16">
        <div className="container-page space-y-3">
          <ScrollRevealPanel kicker="CITIZEN WATCH" title={ko ? "시민감시" : "Citizen Watch"} description={ko ? "뉴스가 지나가도 숫자와 약속은 남습니다. 씨드는 권력과 정책의 후속 결과를 계속 확인합니다." : "We continue tracking promises, numbers, and institutional consequences after the headlines move on."} link="/monitoring" linkLabel={ko ? "감시 의제 보기" : "View watchlist"} accent="green">
            <div className="grid gap-4 lg:grid-cols-3">{monitoringItems.map((item) => <Link key={item.title} to={item.link} className="group border border-green-deep/12 bg-white p-6"><div className="flex items-center justify-between gap-3"><span className="section-kicker">{item.tag}</span><span className="text-[11px] font-bold text-charcoal/40">{item.status}</span></div><Eye className="mt-6 text-green-mid" size={22}/><h3 className="mt-4 text-lg font-extrabold leading-snug text-navy group-hover:text-green-mid">{item.title}</h3><p className="mt-3 text-sm leading-6 text-charcoal/55">{item.summary}</p></Link>)}</div>
          </ScrollRevealPanel>

          <ScrollRevealPanel kicker="CITIZEN PROPOSALS" title={ko ? "시민제안" : "Citizen Proposals"} description={ko ? "비판에서 멈추지 않습니다. 확인한 문제를 시민이 사용할 수 있는 제도와 실행 아이디어로 바꿉니다." : "We turn verified problems into practical civic and institutional proposals."} link="/proposals" linkLabel={ko ? "제안 보기" : "View proposals"} accent="gold">
            <div className="grid gap-4 lg:grid-cols-3">{proposalItems.map((item) => <article key={item.title} className="border border-green-deep/12 bg-white p-6"><div className="flex items-center justify-between gap-3"><span className="section-kicker">{item.tag}</span><span className="text-[11px] font-bold text-[#85671F]">{item.status}</span></div><Lightbulb className="mt-6 text-gold" size={22}/><h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-charcoal/55">{item.summary}</p></article>)}</div>
          </ScrollRevealPanel>

          <ScrollRevealPanel kicker="CIVIC EXPERIMENTS" title={ko ? "시민실험" : "Civic Experiments"} description={ko ? "큰 구호 이전에 작은 해결 모델을 시험합니다. 성공뿐 아니라 실패와 수정 과정도 시민사회의 학습 자산으로 남깁니다." : "We test small solution models and document what works, what fails, and what should change."} link="/experiments" linkLabel={ko ? "실험 보기" : "View experiments"} accent="navy">
            <div className="grid gap-4 lg:grid-cols-3">{experimentItems.map((item) => <article key={item.title} className="border border-green-deep/12 bg-white p-6"><span className="section-kicker">{item.status}</span><FlaskConical className="mt-6 text-navy" size={22}/><h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-charcoal/55">{item.summary}</p></article>)}</div>
          </ScrollRevealPanel>

          <ScrollRevealPanel kicker="SEED ACADEMY" title={ko ? "씨드 아카데미" : "SEED Academy"} description={ko ? "시민이 사실을 읽고 권력을 이해하며 스스로 제안할 수 있도록 실제 이슈를 중심으로 학습합니다." : "Practical learning for citizens to read facts, understand power, and develop proposals."} link="/academy" linkLabel={ko ? "아카데미 보기" : "View academy"} accent="soft">
            <div className="grid gap-4 lg:grid-cols-3">{academyItems.map((item) => <article key={item.title} className="border border-green-deep/12 bg-white p-6"><span className="section-kicker">{item.status}</span><BookOpenCheck className="mt-6 text-green-mid" size={22}/><h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-charcoal/55">{item.summary}</p></article>)}</div>
          </ScrollRevealPanel>
        </div>
      </section>
    </>
  );
}
