import snapshot from "../data/homeSnapshot.json";
import { civicSections, getCivicSectionArticles } from "../data/civicSections";
import { ArrowRight, Clock, Pause, Play, Megaphone } from "lucide-react";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import FeaturedStoryMedia from "../components/FeaturedStoryMedia";
import SafeImage from "../components/SafeImage";
import NewsTrackingCard from "../components/NewsTrackingCard";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { getColumnsNewestFirst } from "../data/columns";
import { getHomepageArchiveCards, selectHotIssueCards } from "../data/hotIssueSelection";
import { localizeBriefing, localizeColumn } from "../data/localizedContent";
import { getNewsTrackingCards, selectNewsTrackingCards } from "../data/newsTracking";
import { getCivicWatchFeed, selectLatestCivicWatchItems, type CivicWatchItem } from "../data/civicWatchFeed";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { getLegislativeCommentaryEdition, legislativeCommentaries, linkedLegislativeColumnCommentaries } from "../data/legislativeCommentaries";
import { getTaxCommentaryEdition, taxCommentaries } from "../data/taxCommentaries";
import { getFeaturedContentCandidates } from "../data/featuredContent";
import { getHomeTopic } from "../data/homeTopics";
import { seedLanguageTerms } from "../data/seedLanguageTerms";
import { topicTaxonomy } from "../data/topicTaxonomy";
import { useLanguage } from "../i18n";
import { useFeaturedContent } from "../hooks/useFeaturedContent";
import { formatFeaturedDate } from "../data/featuredHistory";
import { getHomepageLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

function StoryCarousel({ children, count, ko, label }: { children: (index: number, visible: boolean) => ReactNode; count: number; ko: boolean; label: string }) {
  const [position, setPosition] = useState(0);
  const [slots, setSlots] = useState(4);
  const [resetting, setResetting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const visibleCount = Math.min(slots, count);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setSlots(desktop.matches ? 4 : tablet.matches ? 2 : 1);
      setReducedMotion(motion.matches);
    };
    update();
    for (const query of [desktop, tablet, motion]) query.addEventListener("change", update);
    return () => { for (const query of [desktop, tablet, motion]) query.removeEventListener("change", update); };
  }, []);

  useEffect(() => {
    setPosition(0);
    setResetting(false);
  }, [count]);

  useEffect(() => {
    if (count < 2 || paused || interacting) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setPosition((current) => reducedMotion ? (current + 1) % count : Math.min(current + 1, count));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [count, paused, interacting, reducedMotion]);

  useEffect(() => {
    if (!resetting) return;
    let nextFrame = 0;
    const frame = window.requestAnimationFrame(() => {
      nextFrame = window.requestAnimationFrame(() => setResetting(false));
    });
    return () => { window.cancelAnimationFrame(frame); window.cancelAnimationFrame(nextFrame); };
  }, [resetting]);

  if (!count) return null;
  return (
    <div className="mt-4" role="region" aria-roledescription={ko ? "슬라이드 목록" : "carousel"} aria-label={label}>
      <div
        className="overflow-hidden p-1 -m-1"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={(event) => setInteracting(event.currentTarget.contains(document.activeElement))}
        onFocusCapture={() => setInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
        }}
      >
        <div
          className="flex items-stretch gap-4 sm:gap-5 [--hot-gap:1rem] sm:[--hot-gap:1.25rem]"
          style={{
            "--hot-slots": visibleCount,
            transform: `translateX(calc(-${position} * (100% + var(--hot-gap)) / var(--hot-slots)))`,
            transition: resetting || reducedMotion ? "none" : "transform 500ms ease-in-out",
          } as CSSProperties}
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && event.propertyName === "transform" && position === count) {
              setResetting(true);
              setPosition(0);
            }
          }}
        >
          {Array.from({ length: count + (count > 1 ? visibleCount : 0) }, (_, index) => {
            const visible = index >= position && index < position + visibleCount;
            return <div key={index} className="min-w-0 shrink-0" style={{ flexBasis: "calc((100% - (var(--hot-slots) - 1) * var(--hot-gap)) / var(--hot-slots))" }} aria-hidden={!visible} inert={!visible}>{children(index % count, visible)}</div>;
          })}
        </div>
      </div>
      {count > 1 && <div className="mt-3 flex justify-end"><button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-semibold text-charcoal/60 hover:text-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">{paused ? <Play size={13} aria-hidden="true"/> : <Pause size={13} aria-hidden="true"/>}{paused ? (ko ? "자동 넘김 재생" : "Resume rotation") : (ko ? "자동 넘김 멈춤" : "Pause rotation")}</button></div>}
    </div>
  );
}

type HomeWatchCommentary = {
  slug: string;
  category: "legislation" | "tax";
  date: string;
  readMinutes: number;
  to: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
};

const claimFirstUnseen = <T,>(
  items: T[],
  pathOf: (item: T) => string,
  claimedPaths: Set<string>,
) => {
  const item = items.find((candidate) => !claimedPaths.has(getHomeTopic(pathOf(candidate))));
  if (item) claimedPaths.add(getHomeTopic(pathOf(item)));
  return item;
};

const claimUnseen = <T,>(
  items: T[],
  pathOf: (item: T) => string,
  claimedPaths: Set<string>,
  limit: number,
) => {
  const selected: T[] = [];
  for (const item of items) {
    const path = pathOf(item);
    const topic = getHomeTopic(path);
    if (claimedPaths.has(topic)) continue;
    claimedPaths.add(topic);
    selected.push(item);
    if (selected.length >= limit) break;
  }
  return selected;
};

export default function Home() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const { featuredPath, history: featuredHistory, ready: featuredReady, historyError } = useFeaturedContent();
  const [legislativeBills, setLegislativeBills] = useState<LegislativeBill[]>(snapshot.bills as unknown as LegislativeBill[]);
  const [recommendedTopicPage, setRecommendedTopicPage] = useState(0);
  const [recommendedTopicsPaused, setRecommendedTopicsPaused] = useState(false);
  const allBriefings = getAllBriefingsNewestFirst();
  const localizedBriefings = allBriefings.map((item) => localizeBriefing(item, language));
  const allJournalColumns = getColumnsNewestFirst().map((item) => localizeColumn(item, language));
  const seedLanguageCandidates = [
    ...seedLanguageEnvironmentArticlesKo,
    ...seedLanguageArticlesKo,
  ]
    .filter((item) => item.homeHeroEligible !== false && item.listingEligible !== false)
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .sort((a, b) => b.date.localeCompare(a.date));

  const leadColumn = allJournalColumns[0];
  const featuredCandidates = getFeaturedContentCandidates(language, legislativeBills);
  const configuredLead = featuredCandidates.find((item) => item.path === featuredPath);
  const defaultFeaturedPath = leadColumn ? `/columns/${leadColumn.slug}` : featuredCandidates[0]?.path;
  const featuredLead = featuredReady
    ? configuredLead
      ?? featuredCandidates.find((item) => item.path === defaultFeaturedPath)
      ?? featuredCandidates[0]
    : undefined;
  const activeFeaturedPath = featuredLead?.path;
  // A story gets one position on the homepage. Higher placements claim the route first,
  // and each lower section automatically advances to the next eligible article.
  const claimedHomePaths = new Set(activeFeaturedPath ? [getHomeTopic(activeFeaturedPath)] : []);
  const civicSidebarItems = civicSections.map((section) => {
    if (section.key === "campaign") {
      const path = "/briefings/korean-civic-tax-watch-movement-ktr";
      claimedHomePaths.add(getHomeTopic(path));
      return { section, article: featuredCandidates.find((item) => item.path === path) };
    }
    const article = getCivicSectionArticles(section.key, language, featuredCandidates).find((item) => !claimedHomePaths.has(getHomeTopic(item.path)));
    if (article) claimedHomePaths.add(getHomeTopic(article.path));
    return { section, article };
  });
  const seedLanguageArticle = claimFirstUnseen(
    seedLanguageCandidates,
    (item) => `/seed-language/${item.slug}`,
    claimedHomePaths,
  );
  const seedLanguageTerm = seedLanguageArticle ? seedLanguageTerms[ko ? seedLanguageArticle.term : getSeedLanguageEnvironmentArticle(seedLanguageArticle.slug, "ko")?.term ?? getSeedLanguageArticle(seedLanguageArticle.slug, "ko")?.term ?? ""] : undefined;
  const visibleHotIssueCards = featuredReady ? selectHotIssueCards(
    getHomepageArchiveCards(language, legislativeBills, featuredHistory),
    claimedHomePaths,
    8,
  ) : [];
  for (const card of visibleHotIssueCards) claimedHomePaths.add(getHomeTopic(card.to));

  const newsTrackingCards = featuredReady
    ? selectNewsTrackingCards(getNewsTrackingCards(language), claimedHomePaths, 8)
    : [];
  for (const card of newsTrackingCards) claimedHomePaths.add(getHomeTopic(card.to));

  const upperArticlePaths = new Set([
    activeFeaturedPath,
    ...civicSidebarItems.map((item) => item.article?.path),
    seedLanguageArticle ? `/seed-language/${seedLanguageArticle.slug}` : undefined,
    ...visibleHotIssueCards.map((card) => card.to),
    ...newsTrackingCards.map((card) => card.to),
  ].filter((path): path is string => Boolean(path)));
  const recentCivicWatchItems = selectLatestCivicWatchItems(
    getCivicWatchFeed(language, legislativeBills), upperArticlePaths,
  );
  for (const item of recentCivicWatchItems) claimedHomePaths.add(getHomeTopic(item.to));

  const civicWatchCategoryLabels: Record<CivicWatchItem["category"], string> = {
    issue: ko ? "이슈감시" : "Issue Watch",
    legislation: ko ? "입법감시" : "Legislative Watch",
    tax: ko ? "세금감시" : "Tax Watch",
    "public-interest": ko ? "공익감시" : "Public-interest Watch",
  };

  // Additional legislative and tax commentary appears beneath the latest records.
  // New commentary added to either data source appears here without a homepage edit.
  const commentaryCandidates: HomeWatchCommentary[] = [
    ...linkedLegislativeColumnCommentaries.map((article) => {
      const edition = article.editions[ko ? "ko" : "en"];
      return {
        slug: article.slug,
        category: "legislation" as const,
        date: article.date,
        readMinutes: article.readMinutes,
        to: article.href,
        title: edition.title,
        summary: edition.summary,
        imageSrc: article.heroSrc,
        imageAlt: edition.heroAlt,
      };
    }),
    ...legislativeCommentaries.map((article) => {
      const edition = getLegislativeCommentaryEdition(article, ko ? "ko" : "en");
      return {
        slug: article.slug,
        category: "legislation" as const,
        date: article.date,
        readMinutes: article.readMinutes,
        to: `/monitoring/legislation/commentary/${article.slug}`,
        title: edition.title,
        summary: edition.summary,
        imageSrc: article.heroSrc,
        imageAlt: edition.heroAlt,
      };
    }),
    ...taxCommentaries.map((article) => {
      const edition = getTaxCommentaryEdition(article, ko ? "ko" : "en");
      return {
        slug: article.slug,
        category: "tax" as const,
        date: article.date,
        readMinutes: article.readMinutes,
        to: `/monitoring/tax/commentary/${article.slug}`,
        title: edition.title,
        summary: edition.summary,
        imageSrc: article.heroSrc,
        imageAlt: edition.heroAlt,
      };
    }),
  ]
    .sort((a, b) => b.date.localeCompare(a.date));

  const commentaryItems = claimUnseen(commentaryCandidates, (item) => item.to, claimedHomePaths, 3);
  const briefings = claimUnseen(
    localizedBriefings.filter((item) => item.homeBriefingLeadEligible !== false),
    (item) => `/briefings/${item.slug}`,
    claimedHomePaths,
    5,
  );
  const briefingLead = briefings[0];
  const briefingList = briefings.slice(1);
  const journalColumns = claimUnseen(
    allJournalColumns,
    (item) => `/columns/${item.slug}`,
    claimedHomePaths,
    5,
  );
  const voiceLeadColumn = journalColumns[0];
  const voiceListColumns = journalColumns.slice(1);

  useEffect(() => {
    let active = true;
    let pending = false;
    const refresh = async () => {
      if (pending || document.visibilityState !== "visible") return;
      pending = true;
      try {
        const bills = await getHomepageLegislativeBills();
        if (active) setLegislativeBills(bills);
      } catch { /* Preserve the last successful public snapshot on a temporary failure. */ }
      finally {
        pending = false;
      }
    };
    void refresh();
    const timer = window.setInterval(refresh, 60_000);
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      active = false;
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  useEffect(() => {
    if (recommendedTopicsPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setRecommendedTopicPage((current) => (current + 1) % Math.ceil(topicTaxonomy.length / 4)),
      6000,
    );
    return () => window.clearInterval(interval);
  }, [recommendedTopicsPaused]);

  const newcomerLinks = [
    {
      to: "/about",
      kicker: ko ? "씨앗의 소리 소개" : "ABOUT SEED VOICE",
      title: ko ? "내 삶에 닿는 뉴스, 씨앗과 함께 읽어요" : "News that touches your life",
      summary: ko ? "내가 내는 세금과 동네 병원, 뉴스 속 숫자가 내 삶과 어떻게 연결되는지 쉬운 말로 풀어냅니다." : "Clear explanations of how taxes, local healthcare, and numbers in the news connect to everyday life.",
    },
    {
      to: "/why-seed",
      kicker: ko ? "왜 씨앗인가?" : "WHY SEED?",
      title: ko ? "왜 시민을 ‘씨앗’이라고 부를까요?" : "Why call a citizen a seed?",
      summary: ko ? "작은 질문이 시민의 목소리로 자라는 이유와 씨앗의 소리가 지키는 네 가지 기준을 소개합니다." : "Why small questions grow into a civic voice, and the four principles that guide SEED VOICE.",
    },
    {
      to: "/contributors",
      kicker: ko ? "필진 소개" : "CONTRIBUTORS",
      title: ko ? "서로 다른 자리에서, 함께 묻습니다" : "Different paths, shared questions",
      summary: ko ? "서로 다른 현장과 경험을 지닌 필진이 사실을 확인하고 시민의 자리에서 함께 질문합니다." : "Contributors with different experiences check the facts and ask questions from a citizen's perspective.",
    },
  ];

  const visibleRecommendedTopics = Array.from({ length: 4 }, (_, index) => (
    topicTaxonomy[(recommendedTopicPage * 4 + index) % topicTaxonomy.length]
  ));

  const showMoreTopics = () => setRecommendedTopicPage(
    (current) => (current + 1) % Math.ceil(topicTaxonomy.length / 4),
  );

  return (
    <div className="home-page bg-paper">
      <section className="bg-[#E2E9E1]" aria-labelledby="recommended-series-title">
        <div
          className="container-page grid min-h-[74px] grid-cols-[92px_minmax(0,1fr)] items-stretch gap-2 py-2.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-5 sm:py-0"
          onMouseEnter={() => setRecommendedTopicsPaused(true)}
          onMouseLeave={() => setRecommendedTopicsPaused(false)}
          onFocusCapture={() => setRecommendedTopicsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setRecommendedTopicsPaused(false);
          }}
        >
          <div className="flex flex-col justify-center">
            <p id="recommended-series-title" className="text-[11px] font-black tracking-[-.01em] text-green-mid sm:text-xs">{ko ? "주제별 찾아읽기" : "BROWSE BY TOPIC"}</p>
            <button type="button" onClick={showMoreTopics} className="mt-1 w-fit text-[10px] font-bold text-charcoal/45 underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-green-deep focus-visible:text-green-deep focus-visible:outline-none">{ko ? "더보기" : "More"}</button>
          </div>
          <div key={recommendedTopicPage} className="recommended-topic-group grid min-w-0 grid-cols-2 gap-x-2 gap-y-1 sm:grid-cols-4 sm:gap-3">
            {visibleRecommendedTopics.map((topic, index) => (
              <Link
                key={`${recommendedTopicPage}-${topic.id}-${index}`}
                to={`/search?topic=${topic.id}`}
                className="group flex min-w-0 flex-col justify-center rounded-sm px-2.5 py-2 transition-colors hover:bg-white/45 focus-visible:bg-white/45 focus-visible:outline-none sm:px-3.5"
              >
                <span className="truncate text-[11px] font-extrabold text-navy transition-colors group-hover:text-green-mid sm:text-[13px]">{topic.label[language]}</span>
                <span className="hidden mt-0.5 text-[9px] leading-4 text-charcoal/48 sm:mt-1 sm:line-clamp-1 sm:text-[11px]">{topic.description[language]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-today-section border-b border-green-deep/15 bg-ivory py-4 sm:py-6 lg:py-7">
        <div className="container-page">
          <div className="mb-3 border-b border-green-deep/15 pb-2.5 sm:mb-4">
            <p className="section-kicker">TODAY&apos;S SEED</p>
            <p className="mt-1 text-[13px] font-medium text-charcoal/55 sm:text-sm">{ko ? "오늘 씨앗이 주목하는 문제" : "What SEED is watching today"}</p>
          </div>
          <div className="grid gap-5 sm:gap-6 xl:grid-cols-[minmax(0,1.62fr)_minmax(390px,.92fr)] xl:items-stretch xl:gap-7">
            {featuredLead && (
              <article className="group h-full min-w-0">
                <FeaturedStoryMedia
                  key={featuredLead.path}
                  to={featuredLead.path}
                  imageSrc={resolveImageSrc(featuredLead.image.src)}
                  imageAlt={featuredLead.image.alt}
                  animate={featuredLead.path === "/briefings/inheritance-tax-frozen-allowance-middle-class" && featuredLead.image.src.endsWith("inheritance-frozen-threshold-home-v2.webp")}
                  ko={ko}
                />
                <Link to={featuredLead.path} className="flex flex-col">
                  <p className="mt-3 text-[10px] font-black tracking-[.14em] text-green-deep sm:mt-3.5 sm:text-[11px]">{featuredLead.kicker}</p>
                  <h1 className="editorial-title mt-1.5 max-w-5xl break-keep text-balance text-[1.75rem] font-black leading-[1.12] tracking-[-0.038em] text-navy transition group-hover:text-green-mid sm:text-[clamp(1.9rem,3.5vw,3rem)] sm:leading-[1.09] sm:tracking-[-0.042em]">{featuredLead.title}</h1>
                  <p className="home-lead-summary mt-2 line-clamp-3 max-w-4xl sm:mt-2.5">{featuredLead.summary}</p>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-charcoal/45 sm:text-xs"><time>{featuredLead.date.replace(/-/g, ".")}</time>{featuredLead.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={12}/>{featuredLead.readMinutes}{ko ? "분 읽기" : " min read"}</span>}</div>
                </Link>
              </article>
            )}
            <aside className="divide-y divide-green-deep/15 border-y border-green-deep/20 xl:flex xl:h-full xl:flex-col xl:border-t-0" aria-label={ko ? "시민운동과 시민언어" : "Civic action and language"}>
              {civicSidebarItems.map(({ section, article }) => {
                if (section.key === "campaign") return (
                  <Link key={section.key} to="/briefings/korean-civic-tax-watch-movement-ktr" aria-label={ko ? "시민캠페인: 증세, 더이상은 안돼! — 한국형 세금감시운동 제안 읽기" : "Civic campaign: No More Tax — Read the Korean tax-watch proposal"} className="group my-3 block overflow-hidden bg-navy transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-deep xl:mb-3 xl:mt-0">
                    <SafeImage
                      src={resolveImageSrc("/images/civic/no-more-tax-fiscal-balloon-banner.webp")}
                      alt={ko ? "증세, 더이상은 안돼! No More Tax. 2027년 예산안, 한 해 93조 증가 문구를 담은, 국회의사당 위에서 터지는 붉은 풍선의 캠페인 이미지" : "No More Tax campaign banner: a red balloon bursting above the National Assembly, with Korean text opposing tax increases and describing a 93 trillion won spending increase in the 2027 budget proposal"}
                      width={1670}
                      height={941}
                      loading="eager"
                      className="block h-auto w-full"
                    />
                  </Link>
                );
                const title = article?.title ?? section.title[language];
                const summary = article?.summary ?? section.description[language];
                return <Link key={section.key} to={section.key === "cases" ? section.path : article?.path ?? section.path} className="group cursor-pointer transition-colors duration-200 hover:bg-green-deep/5 focus-visible:bg-green-deep/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 xl:flex-1 xl:grid-cols-[112px_minmax(0,1fr)] xl:content-start xl:py-3 xl:first:pt-0">
                  <div className="flex items-center justify-center overflow-hidden bg-green-deep text-white">
                    {article ? <SafeImage src={resolveImageSrc(article.image.src)} alt={article.image.alt} className="aspect-[4/3] h-full max-h-[110px] w-full object-cover" /> : <Megaphone size={34} aria-hidden="true" className="my-6" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-green-deep">{section.title[language]}</p>
                    <h2 className="editorial-title mt-1 line-clamp-2 break-keep text-[1.02rem] font-bold leading-snug text-navy transition-colors group-hover:text-green-mid group-focus-visible:text-green-mid sm:text-[1.08rem]">{title}</h2>
                    <p className="home-compact-summary mt-1 line-clamp-2">{summary}</p>
                  </div>
                </Link>;
              })}
              {seedLanguageArticle && (
                <Link to={`/seed-language/${seedLanguageArticle.slug}`} className="group cursor-pointer transition-colors duration-200 hover:bg-green-deep/5 focus-visible:bg-green-deep/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 xl:flex-1 xl:grid-cols-[112px_minmax(0,1fr)] xl:content-start xl:py-3">
                  <div className="relative flex aspect-[4/3] h-full max-h-[96px] w-full flex-col items-center justify-center overflow-hidden border border-green-deep/20 bg-green-deep text-center" style={{ containerType: "inline-size" }}>
                    <SafeImage src={resolveImageSrc(seedLanguageArticle.heroImage.src)} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-navy/45" aria-hidden="true" />
                    <div className="relative flex min-w-0 flex-col items-center justify-center px-1 text-white" style={{ textShadow: "1px 0 #102b35, -1px 0 #102b35, 0 1px #102b35, 0 -1px #102b35, 1px 1px #102b35, -1px 1px #102b35, 1px -1px #102b35, -1px -1px #102b35, 0 2px 5px #102b35" }}>
                      <p className={`editorial-title font-black leading-tight ${ko && seedLanguageArticle.term.length <= 6 ? "whitespace-nowrap" : "break-words"}`} style={{ fontSize: ko ? `min(1.5rem, ${88 / Math.max(4, seedLanguageArticle.term.length)}cqw)` : "min(1.5rem, 14cqw)" }}>{ko ? seedLanguageArticle.term : seedLanguageTerm?.english || seedLanguageArticle.term}</p>
                      {ko && seedLanguageTerm && <><p className="mt-1 font-bold" style={{ fontSize: "0.625rem", lineHeight: 1.2 }}>{seedLanguageTerm.hanja}</p><p className="mt-1 max-w-full px-1 font-bold tracking-[.04em]" style={{ fontSize: "0.625rem", lineHeight: 1.2 }}>{seedLanguageTerm.english}</p></>}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-green-deep">{ko ? "시민언어" : "Civic Language"}</p>
                    <h2 className="editorial-title mt-1 truncate text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{seedLanguageArticle.title}</h2>
                    <p className="home-compact-summary mt-1 line-clamp-3">{seedLanguageArticle.summary}</p>
                  </div>
                </Link>
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-6 sm:pt-16 sm:pb-8" aria-labelledby="hot-issues-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3">
            <div>
              <p className="section-kicker">HOT ISSUES</p>
              <h2 id="hot-issues-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "핫이슈" : "Hot Issues"}</h2>
              <p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">
                {ko ? "메인에서 소개한 글을 최근에 올린 순서대로 다시 읽습니다." : "Revisit stories featured on our homepage, with the most recently featured first."}
              </p>
            </div>
            <Link to="/news" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link>
          </div>

          {visibleHotIssueCards.length === 0 && <p className="mt-4 text-sm text-charcoal/55" role="status">{!featuredReady ? (ko ? "불러오는 중입니다." : "Loading stories.") : historyError ? (ko ? "소개한 글을 불러오지 못했습니다. 잠시 후 다시 확인해주세요." : "Could not load featured stories. Please try again shortly.") : (ko ? "메인에서 소개한 지난 글이 이곳에 차례로 쌓입니다." : "Previously featured stories will appear here in order.")}</p>}
          <StoryCarousel key={visibleHotIssueCards.map((card) => card.id).join("|")} count={visibleHotIssueCards.length} ko={ko} label={ko ? "핫이슈 기사 목록" : "Hot issue stories"}>
            {(index, visible) => {
              const item = visibleHotIssueCards[index];
              return (
              <Link
                key={item.id}
                to={item.to}
                tabIndex={visible ? 0 : -1}
                className="group flex h-full flex-col overflow-hidden border-t-[3px] border-green-deep bg-white shadow-[0_10px_26px_rgba(20,55,45,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(20,55,45,.11)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
              >
                <div className="overflow-hidden bg-ivory">
                  <SafeImage
                    src={resolveImageSrc(item.imageSrc)}
                    alt={item.imageAlt}
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-3 text-[10px] font-semibold text-charcoal/40">
                    <span>{ko ? "메인 소개일" : "FEATURED ON"}</span>
                    <time>{formatFeaturedDate(item.updatedAt)}</time>
                  </div>
                  <h3 className="editorial-title mt-2 line-clamp-3 break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.18rem]">{item.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-charcoal/58 sm:text-[13px]">{item.latestChange}</p>
                  <span className="mt-auto inline-flex items-center justify-end gap-1.5 pt-3 text-[11px] font-extrabold text-green-deep">{ko ? "이슈 보기" : "View issue"}<ArrowRight size={13} className="transition-transform group-hover:translate-x-1" aria-hidden="true"/></span>
                </div>
              </Link>
              );
            }}
          </StoryCarousel>
        </div>
      </section>

      <section id="news-tracking" className="bg-green-pale/25 pt-8 pb-6 sm:pt-12 sm:pb-8" aria-labelledby="news-tracking-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-3 sm:gap-4">
            <div>
              <p className="section-kicker">NEWS TRACKING</p>
              <h2 id="news-tracking-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "뉴스트래킹" : "News Tracking"}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-charcoal/65">{ko ? "한 번 보도하고 끝내지 않습니다. 사건의 변화와 남은 쟁점을 계속 확인합니다." : "We keep following the story, recording new developments and the questions that remain."}</p>
            </div>
            <Link to="/monitoring?view=trackers" className="shrink-0 text-sm font-bold text-green-deep hover:underline">{ko ? "전체보기" : "View all"}</Link>
          </div>
          {newsTrackingCards.length > 0 ? (
            <StoryCarousel key={newsTrackingCards.map((card) => card.to).join("|")} count={newsTrackingCards.length} ko={ko} label={ko ? "뉴스트래킹 기사 목록" : "News tracking stories"}>
              {(index) => <NewsTrackingCard card={newsTrackingCards[index]} />}
            </StoryCarousel>
          ) : (
            <p className="mt-4 text-sm leading-6 text-charcoal/55" role="status">{!featuredReady ? (ko ? "불러오는 중입니다." : "Loading stories.") : (ko ? "메인에 소개된 추적 기사 외의 기록은 전체보기에서 확인할 수 있습니다." : "View all to find every tracker, including stories featured elsewhere on this page.")}</p>
          )}
        </div>
      </section>

      {recentCivicWatchItems.length > 0 && (
        <section className="bg-paper pt-8 pb-4 sm:pt-12 sm:pb-5" aria-labelledby="recent-civic-watch-title">
          <div className="container-page">
            <div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3">
              <div>
                <p className="section-kicker">CIVIC WATCH</p>
                <h2 id="recent-civic-watch-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "시민감시" : "Civic Watch"}</h2>
                <p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "현재 감시이슈와 국회 입법안, 세금감시 메뉴에 새로 업데이트된 내용을 모았습니다." : "New findings on major issues, legislation, tax policy and public-interest institutions."}</p>
              </div>
              <Link to="/monitoring" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link>
            </div>
            <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-5 md:grid-cols-3">
              {recentCivicWatchItems.map((item) => (
                <Link key={item.key} to={item.to} className="group flex h-full flex-col border border-green-deep/15 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-green-deep/35 hover:bg-green-pale/35 hover:shadow-[0_12px_28px_rgba(20,55,45,0.10)] focus-visible:-translate-y-1 focus-visible:border-green-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep/20 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-black tracking-[.12em] text-green-deep">{civicWatchCategoryLabels[item.category]}</span>
                    <time className="shrink-0 text-[11px] text-charcoal/40">{item.date.slice(0, 10).replace(/-/g, ".")}</time>
                  </div>
                  <h3 className="editorial-title mt-2 line-clamp-2 break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.2rem]">{item.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-5.5 text-charcoal/58 sm:text-sm sm:leading-6">{item.summary}</p>
                  <div className="mt-3 flex items-center justify-between gap-3 border-t border-green-deep/10 pt-2.5 sm:mt-4 md:mt-auto">
                    <span className="truncate text-[11px] font-bold text-charcoal/45">{item.status}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-extrabold text-green-deep">{ko ? "기록 보기" : "View record"}<ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1"/></span>
                  </div>
                </Link>
              ))}
            </div>
            {commentaryItems.length > 0 && (
              <div className="mt-5 grid gap-3 border-t border-green-deep/15 pt-5 sm:gap-5 md:grid-cols-3">
                {commentaryItems.map((article) => (
                  <Link key={`${article.category}-${article.slug}`} to={article.to} className="group grid grid-cols-[94px_minmax(0,1fr)] gap-3 py-1 sm:grid-cols-[108px_minmax(0,1fr)] md:grid-cols-[96px_minmax(0,1fr)] lg:grid-cols-[112px_minmax(0,1fr)]">
                    <div className="relative min-h-[88px] overflow-hidden bg-transparent">
                      <SafeImage src={resolveImageSrc(article.imageSrc)} alt={article.imageAlt} referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[9px] font-black tracking-[.08em] text-green-deep sm:text-[10px]">
                        <span>{article.category === "legislation" ? (ko ? "입법 논평" : "LEGISLATIVE") : (ko ? "세금 논평" : "TAX")}</span>
                        <time className="font-medium tracking-normal text-charcoal/38">{article.date.replace(/-/g, ".")}</time>
                      </div>
                      <h3 className="editorial-title mt-1 line-clamp-2 break-keep text-[.94rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.02rem]">{article.title}</h3>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-[1.55] text-charcoal/55 sm:text-xs">{article.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-green-deep/12 pt-8 pb-4 sm:pt-12 sm:pb-5"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">BRIEFINGS</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "브리핑" : "Briefings"}</h2><p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "시민에게는 때로 분노의 성명서보다 친절한 설명서가 필요합니다." : "Citizens sometimes need a clear explanation more than an angry statement."}</p></div><Link to="/briefings" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[.95fr_1.05fr]">{briefingLead && <Link to={`/briefings/${briefingLead.slug}`} className="group block">{briefingLead.images?.[0] && <div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(briefingLead.images[0].src)} alt={briefingLead.images[0].alt} referrerPolicy="no-referrer" className="aspect-[16/7.1] w-full object-cover transition duration-500 group-hover:scale-[1.015] sm:aspect-[16/7.8]" /></div>}<h3 className="editorial-title mt-3 break-keep text-[1.3rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{briefingLead.title}</h3><p className="mt-1.5 line-clamp-3 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{briefingLead.summary}</p></Link>}<div className="divide-y divide-green-deep/15 border-t border-green-deep/15 lg:border-t-0">{briefingList.map((briefing, index) => <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid grid-cols-[1.6rem_1fr] gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{briefing.title}</h3><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-2 sm:text-sm sm:leading-6">{briefing.summary}</p></div></Link>)}</div></div></div></section>

      <section className="border-t border-green-deep/12 pt-8 pb-4 sm:pt-12 sm:pb-5"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">COLUMNS</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "칼럼" : "Columns"}</h2><p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "정답을 말하기보다, 익숙한 생각에 질문을 던집니다." : "Rather than declare the answer, we question what has become familiar."}</p></div><Link to="/columns" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[1.05fr_.95fr]"><div className="divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{voiceListColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid grid-cols-[1.6rem_1fr] gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{column.title}</h3><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-2 sm:text-sm sm:leading-6">{column.summary}</p></div></Link>)}</div>{voiceLeadColumn && <Link to={`/columns/${voiceLeadColumn.slug}`} className="group block border-y border-green-deep/15 pt-4 pb-3 lg:border-t-0 lg:pt-0"><div className="hidden overflow-hidden bg-ivory sm:block"><SafeImage src={resolveImageSrc(voiceLeadColumn.heroImage.src)} alt={voiceLeadColumn.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/7.1] w-full object-cover transition duration-500 group-hover:scale-[1.015] sm:aspect-[16/7.8]" /></div><h3 className="editorial-title break-keep text-[1.2rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{voiceLeadColumn.title}</h3><p className="mt-1.5 line-clamp-2 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{voiceLeadColumn.summary}</p></Link>}</div></div></section>

      <section className="border-t border-green-deep/12 pt-4 pb-7 sm:pt-6 sm:pb-12" aria-labelledby="newcomer-title"><div className="container-page"><div><p className="section-kicker">START HERE</p><h2 id="newcomer-title" className="editorial-title mt-1.5 text-[1.55rem] font-bold text-navy sm:mt-2 sm:text-4xl">{ko ? "처음 오셨다면" : "New to SEED VOICE?"}</h2><p className="mt-2 text-[13px] leading-6 text-charcoal/60 sm:mt-2.5 sm:text-base sm:leading-7">{ko ? "씨앗의 소리가 무엇을 보고 어떤 기준으로 판단하는지, 아래 세 글에서 가장 빠르게 확인할 수 있습니다." : "These three pages are the fastest way to understand what SEED VOICE watches and the standards it uses."}</p></div><div className="mt-4 grid gap-3 sm:mt-5 sm:gap-5 md:grid-cols-3">{newcomerLinks.map((item, index) => <Link key={item.to} to={item.to} className="group grid grid-cols-[1.8rem_1fr_auto] items-start gap-2.5 border border-solid border-green-deep/15 bg-white p-4 transition hover:border-green-deep/30 sm:flex sm:min-h-[160px] sm:flex-col sm:p-5 sm:hover:-translate-y-0.5"><span className="pt-0.5 text-[11px] font-black text-charcoal/25 sm:hidden">0{index + 1}</span><div><div className="flex items-center justify-between gap-3"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">{item.kicker}</p><span className="hidden text-[11px] font-black text-charcoal/25 sm:inline sm:text-xs">0{index + 1}</span></div><h3 className="editorial-title mt-1.5 break-keep text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-4 sm:text-2xl">{item.title}</h3><p className="hidden sm:mt-2.5 sm:line-clamp-2 sm:block sm:text-sm sm:leading-6 sm:text-charcoal/58">{item.summary}</p></div><ArrowRight size={15} className="mt-1 text-green-deep sm:hidden"/></Link>)}</div></div></section>

    </div>
  );
}
