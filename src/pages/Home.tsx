import { ArrowLeft, ArrowRight, Clock, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";
import NewsletterSignup from "../components/NewsletterSignup";
import SafeImage from "../components/SafeImage";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

type LeadStory = {
  key: string;
  menu: string;
  eyebrow: string;
  title: string;
  summary: string;
  excerpt?: string;
  date: string;
  readMinutes: number;
  href: string;
  cta: string;
  image: {
    src: string;
    alt: string;
    credit: string;
    sourceUrl?: string;
  };
};

export default function Home() {
  const { language } = useLanguage();
  const [newsPage, setNewsPage] = useState(0);
  const [newsPaused, setNewsPaused] = useState(false);
  const [newsTransition, setNewsTransition] = useState(true);
  const [newsVisibleCount, setNewsVisibleCount] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 3 : 1);
  const [briefingPage, setBriefingPage] = useState(0);
  const [briefingPaused, setBriefingPaused] = useState(false);
  const [briefingTransition, setBriefingTransition] = useState(true);
  const [briefingVisibleCount, setBriefingVisibleCount] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 3 : 1);
  const [leadStoryIndex, setLeadStoryIndex] = useState(0);
  const [leadStoryInteractionPaused, setLeadStoryInteractionPaused] = useState(false);
  const [leadStoryAutoplayPaused, setLeadStoryAutoplayPaused] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [leadStoryTransition, setLeadStoryTransition] = useState(true);
  const [previewColumnIndex, setPreviewColumnIndex] = useState<number | null>(null);
  const ko = language === "ko";
  const briefings = getAllBriefingsNewestFirst().slice(0, 5).map((item) => localizeBriefing(item, language));
  const journalColumns = [...columns].sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue).slice(0, 5).map((item) => localizeColumn(item, language));
  const news = getNewsNewestFirst().slice(0, 5).map((item) => localizeNewsArticle(item, language));
  const seedLanguageArticle = [
    ...seedLanguageEnvironmentArticlesKo.filter((item) => item.slug !== "environment-beyond-camps-deep-read"),
    ...seedLanguageArticlesKo,
  ]
    .filter((item) => item.readMinutes < 12)
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .sort((a, b) => b.date.localeCompare(a.date))[0];
  const latestBriefing = briefings[0];
  const latestNews = news[0];
  const columnLeadStories: LeadStory[] = journalColumns.map((column) => ({
    key: `column-${column.slug}`,
    menu: ko ? "씨앗의소리" : "SEED's Voice",
    eyebrow: "THE VOICE OF SEED",
    title: column.title,
    summary: column.summary,
    excerpt: column.sections.flatMap((section) => section.paragraphs)[0],
    date: column.date,
    readMinutes: column.readMinutes,
    href: `/columns/${column.slug}`,
    cta: ko ? "씨앗의소리 읽기" : "Read SEED's Voice",
    image: column.heroImage,
  }));
  const leadStories = [
    columnLeadStories[0],
    latestBriefing?.images?.[0] && {
      key: `briefing-${latestBriefing.slug}`,
      menu: ko ? "브리핑" : "Briefing",
      eyebrow: "SEED CITIZEN BRIEFING",
      title: latestBriefing.title,
      summary: latestBriefing.summary,
      excerpt: latestBriefing.sections?.[0]?.paragraphs?.[0] ?? latestBriefing.content[0],
      date: latestBriefing.date,
      readMinutes: latestBriefing.readMinutes,
      href: `/briefings/${latestBriefing.slug}`,
      cta: ko ? "브리핑 읽기" : "Read briefing",
      image: latestBriefing.images[0],
    },
    latestNews && {
      key: `news-${latestNews.slug}`,
      menu: ko ? "오늘의뉴스" : "Today's News",
      eyebrow: "TODAY'S NEWS",
      title: latestNews.title,
      summary: latestNews.summary,
      excerpt: latestNews.keySentence,
      date: latestNews.date,
      readMinutes: latestNews.readMinutes,
      href: `/news/${latestNews.slug}`,
      cta: ko ? "오늘의뉴스 읽기" : "Read today's news",
      image: {
        ...latestNews.heroImage,
        src: latestNews.slug === "lh-split-public-agency-experiment" ? "images/news/lh-split-hero-v2.webp" : latestNews.heroImage.src,
        credit: latestNews.slug === "lh-split-public-agency-experiment" ? (ko ? "씨앗의소리 AI 제작 이미지" : "AI image by SEED VOICE") : latestNews.heroImage.credit,
        sourceUrl: latestNews.slug === "lh-split-public-agency-experiment" ? undefined : latestNews.heroImage.sourceUrl,
      },
    },
    seedLanguageArticle && {
      key: `language-${seedLanguageArticle.slug}`,
      menu: ko ? "씨앗언어" : "SEED Language",
      eyebrow: "SEED LANGUAGE",
      title: seedLanguageArticle.title,
      summary: seedLanguageArticle.summary,
      excerpt: seedLanguageArticle.keyPoints[0],
      date: seedLanguageArticle.date,
      readMinutes: seedLanguageArticle.readMinutes,
      href: `/seed-language/${seedLanguageArticle.slug}`,
      cta: ko ? "씨앗언어 읽기" : "Read SEED Language",
      image: seedLanguageArticle.heroImage,
    },
  ].filter((story): story is LeadStory => Boolean(story))
    .sort((a, b) => b.date.localeCompare(a.date));
  const rotatingLeadStories = leadStories.length ? [...leadStories, leadStories[0]] : [];
  const displayedLeadStories = previewColumnIndex === null
    ? rotatingLeadStories
    : [columnLeadStories[previewColumnIndex] ?? leadStories[0]];
  const displayedLeadStoryIndex = previewColumnIndex === null ? leadStoryIndex : 0;
  const rotatingNewsCards = news.length ? [...news, ...news.slice(0, newsVisibleCount)] : [];
  const rotatingBriefingCards = briefings.length ? [...briefings, ...briefings.slice(0, briefingVisibleCount)] : [];

  useEffect(() => {
    setLeadStoryIndex(0);
  }, [language]);

  useEffect(() => {
    if (leadStoryInteractionPaused || leadStoryAutoplayPaused || previewColumnIndex !== null || leadStories.length <= 1) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setLeadStoryTransition(true);
      setLeadStoryIndex((index) => Math.min(index + 1, leadStories.length));
    }, 7000);
    return () => window.clearInterval(timer);
  }, [leadStories.length, leadStoryInteractionPaused, leadStoryAutoplayPaused, previewColumnIndex]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pauseForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) setLeadStoryAutoplayPaused(true);
    };
    media.addEventListener("change", pauseForReducedMotion);
    return () => media.removeEventListener("change", pauseForReducedMotion);
  }, []);

  useEffect(() => {
    if (previewColumnIndex !== null || !leadStories.length || leadStoryIndex < leadStories.length) return;
    const fallback = window.setTimeout(() => {
      setLeadStoryTransition(false);
      setLeadStoryIndex(0);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setLeadStoryTransition(true)));
    }, 850);
    return () => window.clearTimeout(fallback);
  }, [leadStories.length, leadStoryIndex, previewColumnIndex]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateVisibleCount = () => {
      setNewsTransition(false);
      setBriefingTransition(false);
      setNewsPage(0);
      setBriefingPage(0);
      setNewsVisibleCount(media.matches ? 3 : 1);
      setBriefingVisibleCount(media.matches ? 3 : 1);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        setNewsTransition(true);
        setBriefingTransition(true);
      }));
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

  useEffect(() => {
    if (briefingPaused || briefings.length <= briefingVisibleCount || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setBriefingPage((page) => Math.min(page + 1, briefings.length));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [briefingPaused, briefings.length, briefingVisibleCount]);

  useEffect(() => {
    if (!briefings.length || briefingPage < briefings.length) return;
    const fallback = window.setTimeout(() => {
      setBriefingTransition(false);
      setBriefingPage(0);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setBriefingTransition(true)));
    }, 850);
    return () => window.clearTimeout(fallback);
  }, [briefingPage, briefings.length]);

  const finishNewsTransition = () => {
    if (newsPage < news.length) return;
    setNewsTransition(false);
    setNewsPage(0);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setNewsTransition(true)));
  };

  const finishBriefingTransition = () => {
    if (briefingPage < briefings.length) return;
    setBriefingTransition(false);
    setBriefingPage(0);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setBriefingTransition(true)));
  };

  const finishLeadStoryTransition = () => {
    if (previewColumnIndex !== null || leadStoryIndex < leadStories.length) return;
    setLeadStoryTransition(false);
    setLeadStoryIndex(0);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setLeadStoryTransition(true)));
  };

  const moveLeadStory = (direction: number) => {
    setPreviewColumnIndex(null);
    setLeadStoryTransition(true);
    setLeadStoryIndex((index) => direction > 0
      ? Math.min((index >= leadStories.length ? 0 : index) + 1, leadStories.length)
      : ((index >= leadStories.length ? 0 : index) - 1 + leadStories.length) % leadStories.length);
  };

  const showColumnPreview = (index: number) => {
    setLeadStoryTransition(false);
    setLeadStoryIndex((current) => current >= leadStories.length ? 0 : current);
    setPreviewColumnIndex(index);
  };

  const clearColumnPreview = () => {
    setLeadStoryTransition(false);
    setPreviewColumnIndex(null);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setLeadStoryTransition(true)));
  };

  return (
    <div className="bg-paper">
      <section className="border-b border-green-deep/20 bg-ivory py-5 sm:py-7">
        <div className="container-page grid items-stretch gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(350px,.72fr)] xl:gap-6">
          <div
            className="h-full overflow-hidden bg-white"
            onMouseEnter={() => setLeadStoryInteractionPaused(true)}
            onMouseLeave={() => setLeadStoryInteractionPaused(false)}
            onFocusCapture={() => setLeadStoryInteractionPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setLeadStoryInteractionPaused(false);
            }}
            aria-label={ko ? "네 가지 최신 기사 소개" : "Four latest featured stories"}
            aria-roledescription="carousel"
          >
            <div className={`flex h-full ${previewColumnIndex === null && leadStoryTransition ? "transition-transform duration-700 ease-out" : ""} motion-reduce:transition-none`} style={{ transform: `translateX(-${displayedLeadStoryIndex * 100}%)` }} onTransitionEnd={(event) => { if (event.target === event.currentTarget) finishLeadStoryTransition(); }}>
              {displayedLeadStories.map((story, index) => {
                const active = index === displayedLeadStoryIndex;
                return (
                  <article key={`${story.key}-${index}`} className="w-full shrink-0 bg-white" aria-hidden={!active} aria-label={`${story.menu}: ${story.title}`}>
                    <div className="group -mx-4 flex h-full flex-col px-4 pb-3 transition-colors hover:bg-green-pale/60">
                      <div className="relative overflow-hidden bg-ivory">
                        <Link to={story.href} tabIndex={active ? undefined : -1} className="block">
                          <SafeImage src={resolveImageSrc(story.image.src)} alt={story.image.alt} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} referrerPolicy="no-referrer" className="aspect-[16/8.6] w-full object-cover transition duration-700 group-hover:scale-[1.018]" />
                          <div className="pointer-events-none absolute inset-0 flex items-end px-5 pb-8 sm:px-6 sm:pb-9">
                            <h1 className="line-clamp-2 max-w-[92%] break-keep text-balance font-sans text-[clamp(1.35rem,3vw,2.55rem)] font-black leading-[1.08] tracking-[-0.045em] text-paper sm:max-w-[86%]" style={{ WebkitTextStroke: "1px rgba(9, 29, 22, 0.95)", paintOrder: "stroke fill", textShadow: "3px 3px 4px rgba(0, 0, 0, 0.78)" }}>{story.title}</h1>
                          </div>
                        </Link>
                        <div className="pointer-events-none absolute left-5 top-5 sm:left-6">
                          <p className="rounded-sm bg-green-deep px-3 py-1.5 text-[10px] font-black tracking-[.13em] text-white shadow-sm">{story.eyebrow}</p>
                        </div>
                        {leadStories.length > 1 && (
                          <div className="absolute right-5 top-5 z-10 flex gap-1.5 sm:right-6">
                            <button type="button" onClick={() => moveLeadStory(-1)} className="grid h-9 w-9 place-items-center rounded-full border border-green-deep/15 bg-paper/90 text-green-deep shadow-sm backdrop-blur-sm transition hover:bg-green-deep hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep" aria-label={ko ? "이전 최신 기사" : "Previous featured story"}><ArrowLeft size={17}/></button>
                            <button type="button" onClick={() => setLeadStoryAutoplayPaused((paused) => !paused)} className="grid h-9 w-9 place-items-center rounded-full border border-green-deep/15 bg-paper/90 text-green-deep shadow-sm backdrop-blur-sm transition hover:bg-green-deep hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep" aria-label={leadStoryAutoplayPaused ? (ko ? "최신 기사 자동 넘김 재생" : "Play featured stories") : (ko ? "최신 기사 자동 넘김 일시정지" : "Pause featured stories")} aria-pressed={leadStoryAutoplayPaused}>{leadStoryAutoplayPaused ? <Play size={16} fill="currentColor"/> : <Pause size={16} fill="currentColor"/>}</button>
                            <button type="button" onClick={() => moveLeadStory(1)} className="grid h-9 w-9 place-items-center rounded-full border border-green-deep/15 bg-paper/90 text-green-deep shadow-sm backdrop-blur-sm transition hover:bg-green-deep hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep" aria-label={ko ? "다음 최신 기사" : "Next featured story"}><ArrowRight size={17}/></button>
                          </div>
                        )}
                      </div>
                      <Link to={story.href} tabIndex={active ? undefined : -1} className="flex flex-1 flex-col px-5 sm:px-6">
                        <p className="mt-3 line-clamp-2 max-w-4xl text-base font-medium leading-7 text-charcoal/65 sm:text-[17px]">{story.summary}</p>
                        {story.excerpt && <p className="mt-3 max-w-4xl border-l-2 border-gold/70 pl-4 text-[15px] leading-7 text-charcoal/72 line-clamp-3 sm:text-base">{story.excerpt}</p>}
                        <span className="mt-auto inline-flex w-fit items-center gap-2 border-b-2 border-gold pb-1 pt-4 text-sm font-extrabold text-green-deep transition group-hover:border-green-deep">{story.cta}<ArrowRight size={16}/></span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            {leadStories.length > 1 && (
              <div className="flex items-center justify-center gap-2 border-t border-green-deep/10 py-3">
                <span className="sr-only" aria-live={leadStoryInteractionPaused || leadStoryAutoplayPaused ? "polite" : "off"}>{ko ? `${(leadStoryIndex % leadStories.length) + 1}번째 기사, ${leadStories[leadStoryIndex % leadStories.length]?.title}` : `Story ${(leadStoryIndex % leadStories.length) + 1}, ${leadStories[leadStoryIndex % leadStories.length]?.title}`}</span>
                {leadStories.map((story, index) => <button key={story.key} type="button" onClick={() => { setPreviewColumnIndex(null); setLeadStoryTransition(true); setLeadStoryIndex(index); }} className={`h-1.5 rounded-full transition-all ${previewColumnIndex === null && (leadStoryIndex % leadStories.length) === index ? "w-7 bg-green-deep" : "w-1.5 bg-green-deep/25 hover:bg-green-deep/50"}`} aria-label={ko ? `${story.menu} 최신 기사 보기` : `Show latest ${story.menu} story`} aria-current={previewColumnIndex === null && (leadStoryIndex % leadStories.length) === index ? "true" : undefined} />)}
              </div>
            )}
          </div>

          <aside className="flex h-full self-stretch flex-col border border-green-deep/15 bg-white text-navy" aria-labelledby="seed-voice-heading">
            <div className="border-b border-white/20 bg-green-deep px-6 py-3.5 text-white sm:px-7">
              <div className="flex items-end justify-between gap-4"><h2 id="seed-voice-heading" className="editorial-title text-xl font-bold sm:text-2xl">THE VOICE OF SEED</h2><Link to="/columns" className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-white/65 hover:text-white">{ko ? "전체보기" : "View all"}<ArrowRight size={13}/></Link></div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              {journalColumns.slice(0, 5).map((column, index) => {
                const active = previewColumnIndex === index;
                return (
                  <Link
                    key={column.slug}
                    to={`/columns/${column.slug}`}
                    onMouseEnter={() => showColumnPreview(index)}
                    onMouseLeave={clearColumnPreview}
                    onFocus={() => showColumnPreview(index)}
                    onBlur={clearColumnPreview}
                    className={`group flex flex-1 flex-col justify-center border-l-4 px-6 py-2.5 transition sm:px-7 ${active ? "border-gold bg-green-pale/80" : "border-transparent bg-white hover:border-gold hover:bg-green-pale/65 focus-visible:border-gold focus-visible:bg-green-pale/65"} ${index < 4 ? "border-b border-b-green-deep/15" : ""}`}
                  >
                    <time className="text-[11px] text-charcoal/45">{column.date.replace(/-/g, ".")}</time>
                    <h3 className="editorial-title mt-1 text-base font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.05rem]">{column.title}</h3>
                    <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-charcoal/60">{column.summary}</p>
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
                  <div className="relative overflow-hidden bg-green-deep">
                    <SafeImage src={resolveImageSrc(item.heroImage.src)} alt={item.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                    <span className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] rounded-sm bg-black/65 px-2 py-1 text-[10px] font-semibold leading-4 text-white backdrop-blur-sm">{item.heroImage.credit}</span>
                  </div>
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
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 border-b-[3px] border-navy pb-3">
            <div><p className="section-kicker">SEED CITIZEN BRIEFING</p><h2 className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "시민브리핑" : "Citizen Briefing"}</h2></div>
            <Link to="/briefings" className="text-link shrink-0">{ko ? "시민브리핑 전체보기" : "View all briefings"}<ArrowRight size={15}/></Link>
          </div>
          <div
            className="overflow-hidden bg-white/45"
            onMouseEnter={() => setBriefingPaused(true)}
            onMouseLeave={() => setBriefingPaused(false)}
            onFocusCapture={() => setBriefingPaused(true)}
            onBlurCapture={() => setBriefingPaused(false)}
            aria-label={ko ? "최신 시민브리핑 슬라이드" : "Latest Citizen Briefing carousel"}
          >
            <div
              className={`flex ${briefingTransition ? "transition-transform duration-700 ease-out" : ""} motion-reduce:transition-none`}
              style={{ transform: `translateX(-${briefingPage * (100 / briefingVisibleCount)}%)` }}
              onTransitionEnd={(event) => { if (event.target === event.currentTarget) finishBriefingTransition(); }}
            >
              {rotatingBriefingCards.map((briefing, index) => {
                const image = briefing.images?.[0];
                return (
                  <article key={`${briefing.slug}-${index}`} className="w-full shrink-0 border-b border-green-deep/15 px-5 py-5 transition-colors hover:bg-white md:w-1/3 md:border-r md:px-6">
                    <Link to={`/briefings/${briefing.slug}`} className="group block">
                      {image && (
                        <div className="relative overflow-hidden bg-green-deep">
                          <SafeImage src={resolveImageSrc(image.src)} alt={image.alt} referrerPolicy="no-referrer" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                          <span className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] rounded-sm bg-black/65 px-2 py-1 text-[10px] font-semibold leading-4 text-white backdrop-blur-sm">{image.credit}</span>
                        </div>
                      )}
                      <h3 className="editorial-title mt-3 line-clamp-2 text-balance text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid">{briefing.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/58">{briefing.summary}</p>
                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-green-deep/10 pt-3 text-xs"><time className="text-charcoal/38">{briefing.date.replace(/-/g, ".")}</time><span className="inline-flex items-center gap-1 font-extrabold text-green-deep">{ko ? "브리핑 읽기" : "Read briefing"}<ArrowRight size={13}/></span></div>
                    </Link>
                  </article>
                );
              })}
            </div>
            {briefings.length > briefingVisibleCount && (
              <div className="flex justify-center gap-2 border-t border-green-deep/10 py-3">
                {briefings.map((briefing, page) => (
                  <button key={briefing.slug} type="button" onClick={() => { setBriefingTransition(true); setBriefingPage(page); }} className={`h-1.5 rounded-full transition-all ${(briefingPage % briefings.length) === page ? "w-6 bg-green-deep" : "w-1.5 bg-green-deep/25 hover:bg-green-deep/50"}`} aria-label={ko ? `${page + 1}번째 시민브리핑 보기` : `Show Citizen Briefing item ${page + 1}`} aria-current={(briefingPage % briefings.length) === page ? "true" : undefined} />
                ))}
              </div>
            )}
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
