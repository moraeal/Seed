import { ArrowRight, ChevronLeft, ChevronRight, Clock, Newspaper } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const heroTextShadow = { textShadow: "0 2px 10px rgba(0,0,0,.82)" };
const BRIEFING_SLIDE_INTERVAL = 4000;

export default function Home() {
  const { language } = useLanguage();
  const briefingSlides = getAllBriefingsNewestFirst().slice(0, 4);
  const latestColumns = [...columns].sort((a, b) => b.issue - a.issue).slice(0, 2);
  const latestNews = getNewsNewestFirst().slice(0, 3);
  const [activeBriefing, setActiveBriefing] = useState(0);
  const [briefingPaused, setBriefingPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const ko = language === "ko";

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
        <div className="container-page grid items-start gap-6 py-8 sm:py-10 lg:grid-cols-[1.55fr_.75fr] lg:gap-8 lg:py-12">
          <div
            className="group relative h-[255px] overflow-hidden bg-navy shadow-[0_24px_70px_rgba(23,76,58,.16)] sm:h-[290px]"
            onMouseEnter={() => setBriefingPaused(true)}
            onMouseLeave={() => setBriefingPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {briefingSlides.map((briefing, index) => {
              const briefingImage = briefing.images?.[0];
              const active = index === activeBriefing;
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
                  <div className={`absolute inset-x-0 bottom-0 p-5 pt-16 transition-all duration-700 sm:p-6 sm:pt-20 lg:p-7 lg:pt-20 ${active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
                    <p className="text-[10px] font-extrabold tracking-[.12em] text-gold-light sm:text-[11px]" style={heroTextShadow}>{briefing.category} · {briefing.date.replace(/-/g, ".")}</p>
                    <h1 className="editorial-title mt-1.5 line-clamp-2 max-w-4xl text-[1.7rem] font-bold leading-[1.08] text-white sm:text-[2.05rem] lg:text-[2.25rem]" style={heroTextShadow}>{briefing.title}</h1>
                    <p className="mt-2 line-clamp-1 max-w-3xl text-xs font-semibold leading-5 text-white/95 sm:text-sm" style={heroTextShadow}>{briefing.summary}</p>
                    <div className="mt-3 flex items-center gap-4 text-[11px] font-bold text-white sm:text-xs" style={heroTextShadow}><span className="flex items-center gap-1.5"><Clock size={13}/>{briefing.readMinutes}분</span><span className="flex items-center gap-1.5">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={14}/></span></div>
                  </div>
                </Link>
              );
            })}

            <div className="absolute left-4 top-4 z-30 flex flex-col items-start gap-2 sm:left-5 sm:top-5">
              <span className="inline-flex border border-white/45 bg-green-deep/82 px-2.5 py-1.5 text-[9px] font-extrabold tracking-[.17em] text-white backdrop-blur-sm sm:text-[10px]">{ko ? "CITIZEN BRIEFING" : "CIVIC BRIEFING"}</span>
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

          <aside className="flex flex-col border-y-2 border-navy bg-paper lg:h-[290px]">
            <div className="flex items-center justify-between border-b border-green-deep/15 px-6 py-3.5 sm:px-7"><div><span className="section-kicker">SEED COLUMN</span><h2 className="editorial-title mt-1 text-xl font-bold text-navy">{ko ? "최신 칼럼" : "Latest Columns"}</h2></div><Link to="/columns" className="text-link text-xs">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div>
            {latestColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className={`group flex min-h-0 flex-1 flex-col justify-center px-6 py-3 sm:px-7 ${index === 0 ? "border-b border-green-deep/15" : ""}`}><div className="flex items-center gap-3 text-[9px] font-extrabold tracking-[.13em] text-green-mid"><span>씨드칼럼 {String(column.issue).padStart(2, "0")}</span><time className="text-charcoal/35">{column.date.replace(/-/g, ".")}</time></div><h3 className="editorial-title mt-2 line-clamp-2 text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-xl">{column.title}</h3><p className="mt-1.5 line-clamp-1 text-xs font-semibold leading-5 text-charcoal/65 sm:text-sm">{column.subtitle}</p><span className="mt-2 flex items-center gap-2 text-[11px] font-bold text-green-deep">{ko ? "칼럼 읽기" : "Read column"}<ArrowRight size={13}/></span></Link>)}
          </aside>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 border-b-2 border-navy pb-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">SEED NEWS</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "지금 읽어야 할 뉴스" : "News to Read Now"}</h2></div><Link to="/news" className="text-link">{ko ? "뉴스 전체보기" : "View all news"}<ArrowRight size={16}/></Link></div>
          <div className="grid border-b border-green-deep/15 md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {latestNews.map((item) => <Link key={item.slug} to={`/news/${item.slug}`} className="group px-5 py-8 sm:px-7 md:px-8"><div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[.14em] text-green-mid"><Newspaper size={14}/>씨드뉴스 {String(item.issue).padStart(2, "0")} · {item.category}</div><h3 className="editorial-title mt-4 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/55">{item.summary}</p><time className="mt-6 block text-xs text-charcoal/40">{item.date.replace(/-/g, ".")}</time></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
