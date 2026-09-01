import { ArrowRight, ArrowUpRight, Clock, Eye, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { monitoringItems, proposalItems } from "../data/civicParticipation";
import { columns } from "../data/columns";
import { getNewsNewestFirst } from "../data/news";
import { AUDITION_URL } from "../data/siteContent";

export default function Home() {
  const latestBriefing = getAllBriefingsNewestFirst()[0];
  const latestColumns = [...columns].sort((a, b) => b.issue - a.issue).slice(0, 2);
  const latestNews = getNewsNewestFirst().slice(0, 3);
  const briefingImage = latestBriefing.images?.[0];

  return (
    <>
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-7 py-8 sm:py-10 lg:grid-cols-[1.45fr_.75fr] lg:py-12">
          <Link
            to={`/briefings/${latestBriefing.slug}`}
            className="group overflow-hidden border border-green-deep/15 bg-paper shadow-[0_24px_70px_rgba(23,76,58,.12)]"
          >
            <div className="relative overflow-hidden bg-green-deep">
              {briefingImage ? (
                <img
                  src={`${import.meta.env.BASE_URL}${briefingImage.src}`}
                  alt={briefingImage.alt}
                  className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                />
              ) : (
                <div className="grid aspect-[16/9] place-items-center text-xs font-extrabold tracking-[.2em] text-gold-light">SEED CITIZEN BRIEFING</div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-green-deep/85 to-transparent" />
              <span className="absolute left-6 top-6 border border-white/25 bg-green-deep/85 px-3 py-1.5 text-[10px] font-extrabold tracking-[.18em] text-white">LATEST CITIZEN BRIEFING</span>
            </div>
            <div className="p-7 sm:p-9">
              <span className="section-kicker">시민브리핑 {String(latestBriefing.issueNumber ?? "").padStart(2, "0")}</span>
              <h1 className="editorial-title mt-4 max-w-4xl text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-5xl">{latestBriefing.title}</h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-charcoal/62 sm:text-base">{latestBriefing.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-5 text-xs text-charcoal/45">
                <time>{latestBriefing.date.replace(/-/g, ".")}</time>
                <span className="flex items-center gap-1"><Clock size={13}/>{latestBriefing.readMinutes}분</span>
                <span className="ml-auto flex items-center gap-2 font-extrabold text-green-deep">브리핑 읽기<ArrowRight size={15}/></span>
              </div>
            </div>
          </Link>

          <aside className="flex flex-col border-t-2 border-navy bg-paper">
            <div className="flex items-end justify-between gap-4 px-1 py-5">
              <div><span className="section-kicker">SEED COLUMN</span><h2 className="editorial-title mt-2 text-2xl font-bold text-navy">최신 칼럼</h2></div>
              <Link to="/columns" className="text-link text-xs">전체보기<ArrowRight size={14}/></Link>
            </div>
            <div className="grid flex-1 divide-y divide-green-deep/12 border-y border-green-deep/12">
              {latestColumns.map((column) => (
                <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid gap-4 py-6 sm:grid-cols-[120px_1fr] lg:grid-cols-1 xl:grid-cols-[132px_1fr]">
                  <div className="overflow-hidden bg-green-deep">
                    <img src={`${import.meta.env.BASE_URL}${column.heroImage.src}`} alt={column.heroImage.alt} className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="px-1">
                    <span className="text-[10px] font-extrabold tracking-[.15em] text-green-mid">씨드칼럼 {String(column.issue).padStart(2, "0")}</span>
                    <h3 className="editorial-title mt-2 text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{column.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-charcoal/55">{column.subtitle}</p>
                    <time className="mt-3 block text-[11px] text-charcoal/40">{column.date.replace(/-/g, ".")}</time>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-5 border-b-2 border-navy pb-6">
            <div><span className="section-kicker">SEED NEWS</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">지금 봐야 할 뉴스</h2></div>
            <Link to="/news" className="text-link">뉴스 전체보기<ArrowRight size={16}/></Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {latestNews.map((news) => (
              <Link key={news.slug} to={`/news/${news.slug}`} className="group overflow-hidden border border-green-deep/12 bg-white">
                <div className="overflow-hidden bg-green-deep"><img src={`${import.meta.env.BASE_URL}${news.heroImage.src}`} alt={news.heroImage.alt} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]" /></div>
                <div className="p-6">
                  <span className="section-kicker">씨드뉴스 {String(news.issue).padStart(2, "0")} · {news.category}</span>
                  <h3 className="editorial-title mt-3 text-2xl font-bold leading-snug text-navy group-hover:text-green-mid">{news.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-charcoal/55">{news.subtitle}</p>
                  <time className="mt-5 block text-xs text-charcoal/40">{news.date.replace(/-/g, ".")}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-14 text-white sm:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-5 border-b border-white/20 pb-6">
            <div><span className="text-[10px] font-extrabold tracking-[.18em] text-gold-light">CIVIC WATCH</span><h2 className="editorial-title mt-3 text-3xl font-bold sm:text-4xl">시민감시</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">한 번 비판하고 끝내지 않습니다. 권력과 예산, 제도의 변화가 실제로 어떻게 이어지는지 계속 기록합니다.</p></div>
            <Link to="/monitoring" className="hidden items-center gap-2 text-sm font-extrabold text-gold-light sm:flex">감시 전체보기<ArrowRight size={16}/></Link>
          </div>
          <div className="mt-8 grid gap-px bg-white/15 lg:grid-cols-3">
            {monitoringItems.map((item) => (
              <Link key={item.title} to={item.link} className="group flex min-h-[280px] flex-col bg-green-deep p-7 hover:bg-white/[.04]">
                <div className="flex items-center justify-between gap-3"><span className="text-[10px] font-extrabold tracking-[.15em] text-gold-light">{item.tag}</span><span className="text-[11px] font-bold text-white/45">{item.status}</span></div>
                <Eye className="mt-8 text-gold" size={25}/>
                <h3 className="editorial-title mt-5 text-2xl font-bold leading-snug group-hover:text-gold-light">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{item.summary}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-extrabold text-gold-light">추적 기록 보기<ArrowRight size={15}/></span>
              </Link>
            ))}
          </div>
          <Link to="/monitoring" className="mt-6 flex items-center gap-2 text-sm font-extrabold text-gold-light sm:hidden">감시 전체보기<ArrowRight size={16}/></Link>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 border-b-2 border-navy pb-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><span className="section-kicker">CITIZEN PROPOSALS</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">시민제안</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/60">문제를 발견하는 시민에서 해결을 제안하는 시민으로. 근거와 실행 가능성을 붙여 작은 아이디어를 공공의 의제로 키웁니다.</p></div>
            <div className="flex flex-wrap gap-3"><Link to="/proposals" className="button-secondary">제안 보기<ArrowRight size={15}/></Link><a href={AUDITION_URL} target="_blank" rel="noreferrer" className="button-primary">시민제안 올리기<ArrowUpRight size={15}/></a></div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {proposalItems.map((item) => (
              <article key={item.title} className="flex min-h-[290px] flex-col border border-green-deep/12 bg-paper p-7">
                <div className="flex items-center justify-between gap-3"><span className="section-kicker">{item.tag}</span><span className="text-[11px] font-extrabold text-[#85671F]">{item.status}</span></div>
                <Lightbulb className="mt-8 text-gold" size={25}/>
                <h3 className="editorial-title mt-5 text-2xl font-bold leading-snug text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/58">{item.summary}</p>
                <p className="mt-auto border-t border-green-deep/10 pt-5 text-xs leading-6 text-charcoal/45"><strong className="text-green-deep">다음 단계</strong> · {item.nextStep}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
