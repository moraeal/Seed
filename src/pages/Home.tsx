import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { useLanguage } from "../i18n";
import NewsletterSignup from "../components/NewsletterSignup";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

export default function Home() {
  const { language } = useLanguage();
  const [newsPage, setNewsPage] = useState(0);
  const [newsPaused, setNewsPaused] = useState(false);
  const [newsTransition, setNewsTransition] = useState(true);
  const [newsVisibleCount, setNewsVisibleCount] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 3 : 1);
  const [activeColumnIndex, setActiveColumnIndex] = useState(0);
  const ko = language === "ko";
  const briefings = getAllBriefingsNewestFirst().slice(0, 5).map((item) => localizeBriefing(item, language));
  const journalColumns = [...columns].sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue).slice(0, 6).map((item) => localizeColumn(item, language));
  const news = getNewsNewestFirst().slice(0, 5).map((item) => localizeNewsArticle(item, language));
  const leadColumn = journalColumns[activeColumnIndex] ?? journalColumns[0];
  const leadColumnExcerpt = leadColumn?.sections.flatMap((section) => section.paragraphs)[0];
  const rotatingNewsCards = news.length ? [...news, ...news.slice(0, newsVisibleCount)] : [];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateVisibleCount = () => {
      setNewsTransition(false);
      setNewsPage(0);
      setNewsVisibleCount(media.matches ? 3 : 1);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setNewsTransition(true)));
    };
    media.addEventListener("change", updateVisibleCount);
    return () => media.removeEventListener("change", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (newsPaused || news.length <= newsVisibleCount || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setNewsPage((page) => Math.min(page + 1, news.length));
    }, 4500);
    return () => window.clearInterval(timer);
  }, [news.length, newsPaused, newsVisibleCount]);

  useEffect(() => {
    if (!news.length || newsPage < news.length) return;
    const fallback = window.setTimeout(() => {
      setNewsTransition(false);
      setNewsPage(0);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setNewsTransition(true)));
    }, 850);
    return () => window.clearTimeout(fallback);
  }, [news.length, newsPage]);

  const finishNewsTransition = () => {
    if (newsPage < news.length) return;
    setNewsTransition(false);
    setNewsPage(0);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setNewsTransition(true)));
  };

  return (
    <div className="bg-paper">
      <section className="border-b border-green-deep/20 bg-ivory py-5 sm:py-7">
        <div className="container-page grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(350px,.72fr)] xl:gap-6">
          <div className="h-full">
            {leadColumn && (
              <article className="h-full border-t-[3px] border-navy">
                <div className="group -mx-4 h-full px-4 pb-3 pt-3 transition-colors hover:bg-green-pale/60">
                  <div className="relative overflow-hidden bg-navy">
                    <Link to={`/columns/${leadColumn.slug}`} className="block"><img src={resolveImageSrc(leadColumn.heroImage.src)} alt={leadColumn.heroImage.alt} className="aspect-[16/8.6] w-full object-cover transition duration-700 group-hover:scale-[1.018]" /></Link>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-end bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-16 text-white sm:px-6">
                      <time className="rounded-sm bg-black/45 px-2.5 py-1 text-[11px] font-semibold tracking-normal text-white drop-shadow-[0_1px_3px_rgba(0,0,0,.95)] backdrop-blur-sm">{leadColumn.date.replace(/-/g, ".")}</time>
                    </div>
                    {leadColumn.heroImage.sourceUrl && <a href={leadColumn.heroImage.sourceUrl} target="_blank" rel="noreferrer" className="absolute bottom-5 left-5 z-10 rounded-sm bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white underline decoration-white/45 underline-offset-2 backdrop-blur-sm transition hover:bg-black/80 sm:left-6">{leadColumn.heroImage.credit}</a>}
                  </div>
                  <Link to={`/columns/${leadColumn.slug}`} className="block"><h1 className="editorial-title mt-3 max-w-5xl text-2xl font-bold leading-[1.15] text-navy transition group-hover:text-green-mid sm:text-[2.2rem] lg:text-[2.45rem]">{leadColumn.title}</h1>
                    <p className="mt-2.5 max-w-4xl text-base font-medium leading-7 text-charcoal/65 sm:text-[17px]">{leadColumn.summary}</p>
                    {leadColumnExcerpt && <p className="mt-3 max-w-4xl border-l-2 border-gold/70 pl-4 text-[15px] leading-7 text-charcoal/72 sm:line-clamp-4 sm:text-base">{leadColumnExcerpt}</p>}
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "씨앗의 소리 계속 읽기" : "Continue reading SEED's voice"}<ArrowRight size={16}/></span>
                  </Link>
                </div>
              </article>
            )}
          </div>

          <aside className="flex h-full self-stretch flex-col border border-green-deep/15 bg-white text-navy" aria-labelledby="seed-voice-heading">
            <div className="border-b border-white/20 bg-green-deep px-6 py-3.5 text-white sm:px-7">
              <div className="flex items-end justify-between gap-4"><h2 id="seed-voice-heading" className="editorial-title text-xl font-bold sm:text-2xl">THE VOICE OF SEED</h2><Link to="/columns" className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-white/65 hover:text-white">{ko ? "전체보기" : "View all"}<ArrowRight size={13}/></Link></div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              {journalColumns.slice(1, 6).map((column, index) => {
                const columnIndex = index + 1;
                const active = activeColumnIndex === columnIndex;
                return (
                  <Link
                    key={column.slug}
                    to={`/columns/${column.slug}`}
                    onMouseEnter={() => setActiveColumnIndex(columnIndex)}
                    onFocus={() => setActiveColumnIndex(columnIndex)}
                    className={`group flex flex-1 flex-col justify-center border-l-4 px-6 py-2.5 transition sm:px-7 ${active ? "border-gold bg-green-pale/80" : "border-transparent bg-white hover:bg-green-pale/65"} ${index < 4 ? "border-b border-b-green-deep/15" : ""}`}
                  >
                    <time className="text-[11px] text-charcoal/45">{column.date.replace(/-/g, ".")}</time>
                    <h3 className="editorial-title mt-1 text-base font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.05rem]">{column.title}</h3>
                    <p className="mt-1 line-clamp-1 text-[13px] leading-5 text-charcoal/60">{column.summary}</p>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <NewsletterSignup />

      <section className="py-8 sm:py-10">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3">
            <div><p className="section-kicker">TODAY'S NEWS</p><h2 className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "오늘의뉴스" : "Today's News"}</h2></div>
            <Link to="/news" className="text-link shrink-0">{ko ? "오늘의뉴스 전체보기" : "View all"}<ArrowRight size={15}/></Link>
          </div>
          <div
            className="overflow-hidden"
            onMouseEnter={() => setNewsPaused(true)}
            onMouseLeave={() => setNewsPaused(false)}
            onFocusCapture={() => setNewsPaused(true)}
            onBlurCapture={() => setNewsPaused(false)}
            aria-label={ko ? "최신 오늘의뉴스 슬라이드" : "Latest Today's News carousel"}
          >
            <div
              className={`flex ${newsTransition ? "transition-transform duration-700 ease-out" : ""} motion-reduce:transition-none`}
              style={{ transform: `translateX(-${newsPage * (100 / newsVisibleCount)}%)` }}
              onTransitionEnd={(event) => { if (event.target === event.currentTarget) finishNewsTransition(); }}
            >
            {rotatingNewsCards.map((item, index) => (
              <article key={`${item.slug}-${index}`} className="w-full shrink-0 border-b border-green-deep/15 px-5 py-5 transition-colors hover:bg-green-pale/70 md:w-1/3 md:border-r md:px-6">
                <Link to={`/news/${item.slug}`} className="group block">
                  <img src={resolveImageSrc(item.heroImage.src)} alt={item.heroImage.alt} className="aspect-[16/10] w-full object-cover" />
                  <h3 className="editorial-title mt-3 text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-charcoal/58">{item.summary}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-charcoal/38"><time>{item.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{item.readMinutes}{ko ? "분" : " min"}</span></div>
                </Link>
              </article>
            ))}
            </div>
            {news.length > newsVisibleCount && (
              <div className="flex justify-center gap-2 border-t border-green-deep/10 py-3">
                {news.map((item, page) => (
                  <button key={item.slug} type="button" onClick={() => { setNewsTransition(true); setNewsPage(page); }} className={`h-1.5 rounded-full transition-all ${(newsPage % news.length) === page ? "w-6 bg-green-deep" : "w-1.5 bg-green-deep/25 hover:bg-green-deep/50"}`} aria-label={ko ? `${page + 1}번째 오늘의뉴스 보기` : `Show Today's News item ${page + 1}`} aria-current={(newsPage % news.length) === page ? "true" : undefined} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-deep py-4 text-white sm:py-5" aria-labelledby="seed-voice-launch-title">
        <img src={resolveImageSrc("images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png")} alt="" className="pointer-events-none absolute -right-8 -top-12 hidden h-48 w-48 object-contain opacity-20 sm:block" />
        <div className="container-page relative grid gap-4 py-1 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold tracking-[.18em] text-gold">A NEW CIVIC VOICE</p>
            <h2 id="seed-voice-launch-title" className="editorial-title mt-2 text-2xl font-bold text-white sm:text-3xl">
              {ko ? "씨앗의 소리가 새롭게 출범합니다" : "SEED VOICE Begins Anew"}
            </h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-white/72">
              {ko
                ? "한 사람의 질문에서 시작한 독립 시민미디어가 더 많은 시민의 목소리로 자라려 합니다. 씨앗이 되어주세요. 읽고, 나누고, 지지하며 함께 참여해 주세요."
                : "An independent civic journal begun with one person's questions is ready to grow through many citizens' voices. Become a seed: read, share, support and take part."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/account" className="button-light shrink-0">{ko ? "씨앗으로 참여하기" : "Take Part as a Seed"}<ArrowRight size={16}/></Link>
            <Link to="/founding-statement" className="button-outline-light shrink-0">{ko ? "창립취지 읽기" : "Read Our Founding Vision"}</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-8 sm:py-10">
        <div className="container-page grid gap-6 lg:grid-cols-[.5fr_1.5fr] lg:gap-9">
          <div className="bg-white px-5 py-4 sm:px-6"><p className="section-kicker">SEED CITIZEN BRIEFING</p><h2 className="editorial-title mt-2 text-2xl font-bold leading-tight text-navy sm:text-3xl">{ko ? <>사실에서<br />판단까지</> : <>From facts<br />to judgment</>}</h2><p className="mt-2.5 text-sm leading-6 text-charcoal/58">{ko ? "확인된 사실을 먼저 짚고, 논쟁의 맥락과 앞으로 지켜볼 지점을 시민의 언어로 설명합니다." : "We begin with verified facts, explain the context, and identify what citizens should continue to watch."}</p><Link to="/briefings" className="text-link mt-4">{ko ? "시민브리핑 전체보기" : "View all briefings"}<ArrowRight size={15}/></Link></div>
          <div className="border-t-2 border-navy">
            {briefings.slice(0, 4).map((briefing) => (
              <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid gap-2 border-b border-green-deep/15 px-4 py-3.5 transition-colors hover:bg-white/85 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4">
                <div><h3 className="editorial-title text-[1.05rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{briefing.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-charcoal/55">{briefing.summary}</p></div>
                <time className="text-xs text-charcoal/38">{briefing.date.replace(/-/g, ".")}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E7E9E2] py-4 sm:py-5">
        <div className="container-page grid gap-4 py-2 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="section-kicker">OUR EDITORIAL STANDARD</p><h2 className="editorial-title mt-3 text-2xl font-bold text-navy sm:text-3xl">{ko ? "사실은 정확하게, 관점은 분명하게, 시민에게는 책임 있게" : "Accurate in fact, clear in viewpoint, accountable to citizens"}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-charcoal/62">{ko ? "씨앗의 소리는 기계적 중립과 진영의 확신 사이에서, 근거를 확인하고 자유·법치·책임의 관점으로 공공의 문제를 해석합니다." : "SEED VOICE verifies evidence and interprets public affairs through freedom, the rule of law, and civic responsibility."}</p></div>
          <Link to="/about" className="button-primary shrink-0">{ko ? "소개 읽기" : "About"}<ArrowRight size={16}/></Link>
        </div>
      </section>

    </div>
  );
}
