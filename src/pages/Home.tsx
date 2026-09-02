import { ArrowRight, ChevronLeft, ChevronRight, Lightbulb, Newspaper, Scale } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SourceArticleCard from "../components/SourceArticleCard";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { proposalItems } from "../data/civicParticipation";
import { columns } from "../data/columns";
import { proposalTranslations } from "../data/contentTranslations/staticPrograms";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { LocalizedText, publicInterestWatchCases } from "../data/publicInterestWatch";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const splitBriefingTitle = (title: string): [string, string] => {
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return [title, ""];

  const target = title.length / 2;
  let bestIndex = 1;
  let bestScore = Number.POSITIVE_INFINITY;
  let runningLength = 0;

  for (let index = 1; index < words.length; index += 1) {
    runningLength += words[index - 1].length + (index > 1 ? 1 : 0);
    const punctuationBonus = /[,.:;!?·—-]$/.test(words[index - 1]) ? -3 : 0;
    const score = Math.abs(runningLength - target) + punctuationBonus;
    if (score < bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }

  return [words.slice(0, bestIndex).join(" "), words.slice(bestIndex).join(" ")];
};

const heroTextShadow = { textShadow: "0 2px 10px rgba(0,0,0,.82)" };
const BRIEFING_SLIDE_INTERVAL = 4000;

export default function Home() {
  const { language } = useLanguage();
  const briefingSlides = getAllBriefingsNewestFirst().slice(0, 4).map((item) => localizeBriefing(item, language));
  const latestColumns = [...columns].sort((a, b) => b.issue - a.issue).slice(0, 3).map((item) => localizeColumn(item, language));
  const latestNews = getNewsNewestFirst().slice(0, 3).map((item) => localizeNewsArticle(item, language));
  const featuredProposals = proposalItems.map((item, index) => language === "ko" ? item : { ...item, ...proposalTranslations[index] });
  const [activeBriefing, setActiveBriefing] = useState(0);
  const [briefingPaused, setBriefingPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const ko = language === "ko";
  const t = (value: LocalizedText) => value[language];

  useEffect(() => {
    if (briefingPaused || briefingSlides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveBriefing((current) => (current + 1) % briefingSlides.length);
    }, BRIEFING_SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [briefingPaused, briefingSlides.length]);

  const moveBriefing = (direction: number) => {
    setActiveBriefing((current) => (current + direction + briefingSlides.length) % briefingSlides.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 45) return;
    moveBriefing(delta < 0 ? 1 : -1);
  };

  return (
    <>
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid items-start gap-6 pt-8 pb-5 sm:pt-10 sm:pb-6 lg:grid-cols-[1.55fr_.75fr] lg:gap-8 lg:pt-12 lg:pb-7">
          <div
            className="group relative h-[370px] overflow-hidden bg-navy shadow-[0_24px_70px_rgba(23,76,58,.16)] sm:h-[420px]"
            onMouseEnter={() => setBriefingPaused(true)}
            onMouseLeave={() => setBriefingPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {briefingSlides.map((briefing, index) => {
              const briefingImage = briefing.images?.[0];
              const active = index === activeBriefing;
              const [titleLine1, titleLine2] = splitBriefingTitle(briefing.title);
              return (
                <Link
                  key={briefing.slug}
                  to={`/briefings/${briefing.slug}`}
                  aria-hidden={!active}
                  tabIndex={active ? 0 : -1}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${active ? "pointer-events-auto z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
                >
                  {briefingImage && (
                    <img
                      src={resolveImageSrc(briefingImage.src)}
                      alt={briefingImage.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[5000ms] ease-out ${active ? "scale-[1.025]" : "scale-100"}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/18" />
                  <div className={`absolute inset-x-0 bottom-0 p-5 pt-16 transition-all duration-700 sm:p-7 sm:pt-20 lg:p-8 lg:pt-20 ${active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
                    <p className="text-[11px] font-extrabold tracking-[.12em] text-gold-light sm:text-xs" style={heroTextShadow}>{briefing.category} · {briefing.date.replace(/-/g, ".")}</p>
                    <h1 className="editorial-title mt-1.5 max-w-4xl text-[1.8rem] font-bold leading-[1.08] text-white sm:text-[2.15rem] lg:text-[2.4rem]" style={heroTextShadow}>
                      <span className="block sm:whitespace-nowrap">{titleLine1}</span>
                      {titleLine2 && <span className="block sm:whitespace-nowrap">{titleLine2}</span>}
                    </h1>
                    <p className="mt-2 line-clamp-2 max-w-3xl text-sm font-semibold leading-6 text-white/95 sm:text-[15px]" style={heroTextShadow}>{briefing.summary}</p>
                    <div className="mt-3 flex items-center text-[11px] font-bold text-white sm:text-xs" style={heroTextShadow}><span className="flex items-center gap-1.5">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={14}/></span></div>
                  </div>
                </Link>
              );
            })}

            <div className="absolute left-4 top-4 z-30 flex flex-col items-start gap-2 sm:left-5 sm:top-5">
              <span className="inline-flex border border-white/45 bg-green-deep/82 px-2.5 py-1.5 text-[11px] font-extrabold tracking-[.13em] text-white backdrop-blur-sm">Civic Briefing</span>
              {briefingSlides.length > 1 && (
                <div className="flex items-center gap-1.5">
                  {briefingSlides.map((briefing, index) => (
                    <button
                      key={briefing.slug}
                      type="button"
                      onClick={() => setActiveBriefing(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === activeBriefing ? "w-7 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"}`}
                      aria-label={`${ko ? "브리핑" : "Briefing"} ${index + 1}`}
                      aria-current={index === activeBriefing ? "true" : undefined}
                    />
                  ))}
                </div>
              )}
            </div>

            {briefingSlides.length > 1 && (
              <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 sm:bottom-4 sm:right-4">
                <button type="button" onClick={() => moveBriefing(-1)} className="grid size-8 place-items-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55" aria-label={ko ? "이전 브리핑" : "Previous briefing"}><ChevronLeft size={16}/></button>
                <button type="button" onClick={() => moveBriefing(1)} className="grid size-8 place-items-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55" aria-label={ko ? "다음 브리핑" : "Next briefing"}><ChevronRight size={16}/></button>
              </div>
            )}
          </div>

          <aside className="flex flex-col overflow-hidden border-y-2 border-green-deep bg-paper lg:h-[420px]">
            <div className="flex shrink-0 items-center justify-between bg-green-deep px-6 py-3 text-white sm:px-7"><div><span className="text-[11px] font-extrabold tracking-[.14em] text-white/65">SEED COLUMN</span><h2 className="editorial-title mt-0.5 text-xl font-bold text-white">{ko ? "최신 칼럼" : "Latest Columns"}</h2></div><Link to="/columns" className="inline-flex items-center gap-1 text-xs font-bold text-white/80 transition hover:text-white">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div>
            {latestColumns.map((column, index) => (
              <Link key={column.slug} to={`/columns/${column.slug}`} className={`group flex min-h-0 flex-1 flex-col justify-center px-6 py-1.5 transition-colors duration-200 hover:bg-green-pale/55 focus-visible:bg-green-pale/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-mid/35 sm:px-7 ${index < latestColumns.length - 1 ? "border-b border-green-deep/15" : ""}`}>
                <div className="flex shrink-0 items-center gap-3 text-[11px] font-extrabold tracking-[.11em] text-green-mid"><span>{ko ? `씨드칼럼 ${String(column.issue).padStart(2, "0")}` : `SEED COLUMN ${String(column.issue).padStart(2, "0")}`}</span><time className="text-charcoal/35">{column.date.replace(/-/g, ".")}</time></div>
                <h3 className="editorial-title mt-1 line-clamp-2 text-[17px] font-bold leading-6 text-navy transition group-hover:text-green-mid">{column.title}</h3>
                <p className="mt-1 line-clamp-2 text-[13px] font-semibold leading-5 text-charcoal/65">{column.subtitle}</p>
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <section className="border-b border-green-deep/15 bg-ivory py-12 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="flex items-end justify-between gap-4 border-b-2 border-navy pb-4">
              <div><span className="section-kicker">PUBLIC-INTEREST WATCH</span><h2 className="editorial-title mt-2 text-[1.75rem] font-bold text-navy sm:text-[2rem]">{ko ? "공익감시" : "Public-Interest Watch"}</h2></div>
              <Link to="/monitoring" className="text-link shrink-0 text-xs">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link>
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/60">{ko ? "기부금과 공익자원이 시민의 신뢰에 맞게 쓰이는지 공개자료와 기관의 답변을 근거로 기록합니다." : "We examine public records and institutional responses to see whether donations and public-interest resources merit civic trust."}</p>
            <div className="mt-5 divide-y divide-green-deep/12 border-y border-green-deep/12 bg-white">
              {publicInterestWatchCases.map((item) => (
                <Link key={item.slug} to={`/monitoring/${item.slug}`} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 transition hover:bg-green-pale/45 sm:px-5">
                  <Scale size={18} className="text-gold"/>
                  <div className="min-w-0"><p className="text-[11px] font-extrabold tracking-[.1em] text-green-mid">{t(item.organization)} · {t(item.status)}</p><h3 className="mt-1 line-clamp-1 text-base font-bold leading-6 text-navy group-hover:text-green-mid">{t(item.title)}</h3></div>
                  <ArrowRight size={15} className="text-green-deep/45 transition group-hover:translate-x-1 group-hover:text-green-deep"/>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4 border-b-2 border-navy pb-4">
              <div><span className="section-kicker">CITIZEN PROPOSALS</span><h2 className="editorial-title mt-2 text-[1.75rem] font-bold text-navy sm:text-[2rem]">{ko ? "시민제안" : "Citizen Proposals"}</h2></div>
              <Link to="/proposals" className="text-link shrink-0 text-xs">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link>
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/60">{ko ? "시민의 작은 불편과 질문을 근거와 실행 가능성을 갖춘 공공의 제안으로 키웁니다." : "We turn everyday civic concerns into public proposals grounded in evidence and practical action."}</p>
            <div className="mt-5 divide-y divide-green-deep/12 border-y border-green-deep/12 bg-white">
              {featuredProposals.map((item) => (
                <Link key={item.title} to="/proposals" className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 transition hover:bg-green-pale/45 sm:px-5">
                  <Lightbulb size={18} className="text-gold"/>
                  <div className="min-w-0"><p className="text-[11px] font-extrabold tracking-[.1em] text-green-mid">{item.tag} · {item.status}</p><h3 className="mt-1 line-clamp-1 text-base font-bold leading-6 text-navy group-hover:text-green-mid">{item.title}</h3></div>
                  <ArrowRight size={15} className="text-green-deep/45 transition group-hover:translate-x-1 group-hover:text-green-deep"/>
                </Link>
              ))}
            </div>
            <Link to="/proposals" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "나의 시민제안 작성하기" : "Write a citizen proposal"}<ArrowRight size={15}/></Link>
          </div>
        </div>
      </section>

      <section className="bg-paper pt-5 pb-14 sm:pt-7 sm:pb-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 border-b-2 border-navy pb-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">SEED NEWS</span><h2 className="editorial-title mt-3 text-[1.75rem] font-bold text-navy sm:text-[2rem]">{ko ? "지금 읽어야 할 뉴스" : "News to Read Now"}</h2></div><Link to="/news" className="text-link">{ko ? "뉴스 전체보기" : "View all news"}<ArrowRight size={16}/></Link></div>
          <div className="grid border-b border-green-deep/15 md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {latestNews.map((item) => <article key={item.slug} className="flex flex-col px-5 py-8 sm:px-7 md:px-8"><Link to={`/news/${item.slug}`} className="group block"><div className="flex items-center gap-2 text-[11px] font-extrabold tracking-[.12em] text-green-mid"><Newspaper size={14}/>{ko ? `씨드뉴스 ${String(item.issue).padStart(2, "0")}` : `SEED NEWS ${String(item.issue).padStart(2, "0")}`} · {item.category}</div><h3 className="editorial-title mt-4 text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3><p className="mt-4 line-clamp-4 text-[15px] leading-7 text-charcoal/55">{item.summary}</p><time className="mt-5 block text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time></Link><SourceArticleCard news={item.selectedNews} compact ko={ko}/></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
