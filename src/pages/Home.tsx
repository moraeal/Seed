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
  const ko = language === "ko";
  const briefings = getAllBriefingsNewestFirst().slice(0, 5).map((item) => localizeBriefing(item, language));
  const journalColumns = [...columns].sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue).slice(0, 5).map((item) => localizeColumn(item, language));
  const news = getNewsNewestFirst().slice(0, 5).map((item) => localizeNewsArticle(item, language));
  const leadColumn = journalColumns[0];
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
    const timer = window.setInterval(() => setNewsPage((page) => page + 1), 4500);
    return () => window.clearInterval(timer);
  }, [news.length, newsPaused, newsVisibleCount]);

  const finishNewsTransition = () => {
    if (newsPage !== news.length) return;
    setNewsTransition(false);
    setNewsPage(0);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setNewsTransition(true)));
  };

  return (
    <div className="bg-paper">
      <section className="border-b border-green-deep/20 bg-ivory py-7 sm:py-10">
        <div className="container-page grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(350px,.72fr)] xl:gap-10">
          <div className="h-full">
            {leadColumn && (
              <article className="h-full border-t-[3px] border-navy">
                <Link to={`/columns/${leadColumn.slug}`} className="group -mx-4 block h-full px-4 pb-5 pt-4 transition-colors hover:bg-green-pale/60">
                  <div className="relative overflow-hidden bg-navy">
                    <img src={resolveImageSrc(leadColumn.heroImage.src)} alt={leadColumn.heroImage.alt} className="aspect-[16/8.6] w-full object-cover transition duration-700 group-hover:scale-[1.018]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-16 text-white sm:px-6">
                      <span className="text-xs font-extrabold tracking-[.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,.95)] sm:text-sm">SEED'S VOICE</span>
                      <time className="rounded-sm bg-black/45 px-2.5 py-1 text-[11px] font-semibold tracking-normal text-white drop-shadow-[0_1px_3px_rgba(0,0,0,.95)] backdrop-blur-sm">{leadColumn.date.replace(/-/g, ".")}</time>
                    </div>
                  </div>
                  <h1 className="editorial-title mt-5 max-w-5xl text-[2.15rem] font-bold leading-[1.1] text-navy transition group-hover:text-green-mid sm:text-[3.15rem] lg:text-[3.5rem]">{leadColumn.title}</h1>
                  <p className="mt-4 max-w-4xl text-base font-medium leading-7 text-charcoal/65 sm:text-[17px] sm:leading-8">{leadColumn.summary}</p>
                  {leadColumnExcerpt && <p className="mt-5 max-w-4xl border-l-2 border-gold/70 pl-5 text-[15px] leading-8 text-charcoal/72 sm:line-clamp-5 sm:text-base">{leadColumnExcerpt}</p>}
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "씨앗의 소리 계속 읽기" : "Continue reading SEED's voice"}<ArrowRight size={16}/></span>
                </Link>
              </article>
            )}
          </div>

          <aside className="flex h-full self-stretch flex-col bg-green-deep text-white" aria-labelledby="seed-voice-heading">
            <div className="border-b border-white/20 px-6 py-5 sm:px-7">
              <div className="flex items-end justify-between gap-4"><h2 id="seed-voice-heading" className="editorial-title text-3xl font-bold">씨앗의 소리</h2><Link to="/columns" className="inline-flex items-center gap-1 text-xs font-bold text-white/65 hover:text-white">{ko ? "전체보기" : "View all"}<ArrowRight size={13}/></Link></div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              {journalColumns.slice(1, 5).map((column, index) => (
                <Link key={column.slug} to={`/columns/${column.slug}`} className={`group flex flex-1 flex-col justify-center bg-white/[.075] px-6 py-4 transition hover:bg-white/[.14] sm:px-7 ${index < 3 ? "border-b border-white/20" : ""}`}>
                  <time className="text-[11px] text-white/45">{column.date.replace(/-/g, ".")}</time>
                  <h3 className="editorial-title mt-1.5 text-lg font-bold leading-snug text-white transition group-hover:text-gold-light sm:text-xl">{column.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/65">{column.summary}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <NewsletterSignup />

      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-5 border-b-[3px] border-navy pb-4">
            <div><p className="section-kicker">TODAY'S NEWS</p><h2 className="editorial-title mt-2 text-3xl font-bold text-navy sm:text-4xl">{ko ? "오늘의뉴스" : "Today's News"}</h2></div>
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
              <article key={`${item.slug}-${index}`} className="w-full shrink-0 border-b border-green-deep/15 px-5 py-7 transition-colors hover:bg-green-pale/70 md:w-1/3 md:border-r md:px-7">
                <Link to={`/news/${item.slug}`} className="group block">
                  <img src={resolveImageSrc(item.heroImage.src)} alt={item.heroImage.alt} className="aspect-[16/10] w-full object-cover" />
                  <h3 className="editorial-title mt-5 text-2xl font-bold leading-snug text-navy transition group-hover:text-green-mid">{item.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-charcoal/58">{item.summary}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-charcoal/38"><time>{item.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={12}/>{item.readMinutes}{ko ? "분" : " min"}</span></div>
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

      <section className="pb-12 sm:pb-16" aria-labelledby="citizens-as-seeds-title">
        <div className="container-page">
          <div className="relative isolate min-h-[230px] overflow-hidden border-y-2 border-green-deep bg-[#fbf4e5] sm:min-h-[220px]">
            <img
              src={resolveImageSrc("images/support/founding-partners-watercolor.webp")}
              alt="서로 다른 청년들이 함께 웃으며 이야기를 나누는 모습"
              className="absolute inset-0 h-full w-full object-cover object-[67%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0] via-[#fffaf0]/95 to-[#fffaf0]/20 sm:via-[#fffaf0]/88 sm:to-transparent" />
            <div className="relative z-10 flex min-h-[230px] max-w-[82%] flex-col justify-center px-6 py-7 sm:min-h-[220px] sm:max-w-[66%] sm:px-10 lg:max-w-[61%] lg:px-12">
              <p className="section-kicker">CITIZENS AS SEEDS</p>
              <h2 id="citizens-as-seeds-title" className="editorial-title mt-2 text-[1.75rem] font-bold leading-tight text-navy sm:text-[2.15rem]">
                {ko ? "우리는 시민을 씨앗으로 봅니다" : "We See Every Citizen as a Seed"}
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] font-medium leading-6 text-charcoal/72 sm:text-[15px] sm:leading-7">
                {ko
                  ? "시민은 자유와 책임을 배우고 관계 속에서 자라며 사회를 변화시키는 존재입니다. 그래서 씨앗의 소리는 성장 가능성과 생명을 품은 시민을 ‘씨앗’이라고 부릅니다."
                  : "Citizens learn freedom and responsibility, grow through relationships, and change society. SEED VOICE therefore calls each citizen a seed: a living source of possibility and growth."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-12 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[.5fr_1.5fr] lg:gap-14">
          <div><p className="section-kicker">CIVIC BRIEFINGS</p><h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "사실에서 판단까지" : "From facts to judgment"}</h2><p className="mt-4 text-sm leading-7 text-charcoal/58">{ko ? "확인된 사실을 먼저 짚고, 논쟁의 맥락과 앞으로 지켜볼 지점을 시민의 언어로 설명합니다." : "We begin with verified facts, explain the context, and identify what citizens should continue to watch."}</p><Link to="/briefings" className="text-link mt-6">{ko ? "시민브리핑 전체보기" : "View all briefings"}<ArrowRight size={15}/></Link></div>
          <div className="border-t-2 border-navy">
            {briefings.slice(0, 4).map((briefing) => (
              <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid gap-2 border-b border-green-deep/15 px-4 py-5 transition-colors hover:bg-white/85 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5">
                <div><h3 className="editorial-title text-xl font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-2xl">{briefing.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/55">{briefing.summary}</p></div>
                <time className="text-xs text-charcoal/38">{briefing.date.replace(/-/g, ".")}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16">
        <div className="container-page grid gap-8 border-y-2 border-green-deep py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="section-kicker">OUR EDITORIAL STANDARD</p><h2 className="editorial-title mt-3 text-2xl font-bold text-navy sm:text-3xl">{ko ? "사실은 정확하게, 관점은 분명하게, 시민에게는 책임 있게" : "Accurate in fact, clear in viewpoint, accountable to citizens"}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-charcoal/62">{ko ? "씨앗의 소리는 기계적 중립과 진영의 확신 사이에서, 근거를 확인하고 자유·법치·책임의 관점으로 공공의 문제를 해석합니다." : "SEED VOICE verifies evidence and interprets public affairs through freedom, the rule of law, and civic responsibility."}</p></div>
          <Link to="/about" className="button-primary shrink-0">{ko ? "소개 읽기" : "About"}<ArrowRight size={16}/></Link>
        </div>
      </section>
    </div>
  );
}
