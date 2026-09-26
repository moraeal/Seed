import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";
import HomepageNewsletterNudge from "../components/HomepageNewsletterNudge";
import FeaturedStoryMedia from "../components/FeaturedStoryMedia";
import SafeImage from "../components/SafeImage";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { getColumnsNewestFirst, hotIssueColumnTrackerSlugs } from "../data/columns";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { localizeBriefing, localizeColumn } from "../data/localizedContent";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { newsTrackerCases } from "../data/newsTrackerRegistry";
import { civicWatchCases } from "../data/publicInterestWatch";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { taxPolicies } from "../data/taxWatch";
import { getLegislativeCommentaryEdition, legislativeCommentaries, linkedLegislativeColumnCommentaries } from "../data/legislativeCommentaries";
import { getTaxCommentaryEdition, taxCommentaries } from "../data/taxCommentaries";
import { getFeaturedContentCandidates } from "../data/featuredContent";
import { topicTaxonomy } from "../data/topicTaxonomy";
import { useLanguage } from "../i18n";
import { getFeaturedContentPath } from "../lib/featuredContent";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const seedLanguageTerms: Record<string, { hanja: string; english: string }> = {
  통일: { hanja: "統一", english: "UNIFICATION" },
  정치: { hanja: "政治", english: "POLITICS" },
  진영언어: { hanja: "陣營言語", english: "PARTISAN LANGUAGE" },
  시민: { hanja: "市民", english: "CITIZEN" },
  자유: { hanja: "自由", english: "FREEDOM" },
  진보: { hanja: "進步", english: "PROGRESS · PROGRESSIVISM" },
  보수: { hanja: "保守", english: "CONSERVATIVE · CONSERVATISM" },
  민주: { hanja: "民主", english: "DEMOCRACY" },
  환경: { hanja: "環境", english: "ENVIRONMENT" },
  공익: { hanja: "公益", english: "PUBLIC INTEREST" },
  공공: { hanja: "公共", english: "PUBLIC · PUBLICNESS" },
  담론: { hanja: "談論", english: "DISCOURSE" },
};

type HomeCivicWatchItem = {
  key: string;
  category: "issue" | "legislation" | "tax" | "public-interest";
  date: string;
  to: string;
  title: string;
  summary: string;
  status: string;
};

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
  const item = items.find((candidate) => !claimedPaths.has(pathOf(candidate)));
  if (item) claimedPaths.add(pathOf(item));
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
    if (claimedPaths.has(path)) continue;
    claimedPaths.add(path);
    selected.push(item);
    if (selected.length >= limit) break;
  }
  return selected;
};

export default function Home() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [featuredPath, setFeaturedPath] = useState<string | null>(null);
  const [featuredReady, setFeaturedReady] = useState(false);
  const [legislativeBills, setLegislativeBills] = useState<LegislativeBill[]>([]);
  const [recommendedTopicPage, setRecommendedTopicPage] = useState(0);
  const [recommendedTopicsPaused, setRecommendedTopicsPaused] = useState(false);
  const allBriefings = getAllBriefingsNewestFirst();
  const localizedBriefings = allBriefings.map((item) => localizeBriefing(item, language));
  const allJournalColumns = getColumnsNewestFirst().map((item) => localizeColumn(item, language));
  const hotIssues = getHotIssuesNewestFirst(language);
  const hotIssueClusters = getHotIssueClusters(language);
  const seedLanguageCandidates = [
    ...seedLanguageEnvironmentArticlesKo,
    ...seedLanguageArticlesKo,
  ]
    .filter((item) => item.homeHeroEligible !== false && item.listingEligible !== false)
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .sort((a, b) => b.date.localeCompare(a.date));

  const leadColumn = allJournalColumns[0];
  const featuredCandidates = getFeaturedContentCandidates(language);
  const newestFeaturedBriefing = allBriefings.find((item) => item.featured && item.homeBriefingLeadEligible !== false);
  const newestBriefingLead = featuredCandidates.find((item) => item.path === `/briefings/${newestFeaturedBriefing?.slug}`);
  const configuredLead = featuredCandidates.find((item) => item.path === featuredPath);
  const defaultFeaturedPath = leadColumn ? `/columns/${leadColumn.slug}` : featuredCandidates[0]?.path;
  const featuredLead = featuredReady
    ? (newestBriefingLead && (!configuredLead || newestBriefingLead.date >= configuredLead.date) ? newestBriefingLead : configuredLead)
      ?? featuredCandidates.find((item) => item.path === defaultFeaturedPath)
      ?? featuredCandidates[0]
    : undefined;
  const activeFeaturedPath = featuredLead?.path;
  // A story gets one position on the homepage. Higher placements claim the route first,
  // and each lower section automatically advances to the next eligible article.
  const claimedHomePaths = new Set(activeFeaturedPath ? [activeFeaturedPath] : []);
  const latestHotIssue = claimFirstUnseen(hotIssues, (item) => item.to, claimedHomePaths);
  const latestBriefing = claimFirstUnseen(
    localizedBriefings.filter((item) => item.homeBriefingLeadEligible !== false),
    (item) => `/briefings/${item.slug}`,
    claimedHomePaths,
  );
  const latestHotIssueColumnSlug = latestHotIssue?.key.startsWith("column-") ? latestHotIssue.key.replace(/^column-/, "") : undefined;
  const pairedTrackerSlug = latestHotIssueColumnSlug ? hotIssueColumnTrackerSlugs[latestHotIssueColumnSlug] : undefined;
  const publicWatchTracker = [...newsTrackerCases]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .find((item) => item.slug !== pairedTrackerSlug && !claimedHomePaths.has(`/monitoring/${item.slug}`))
    ?? newsTrackerCases.find((item) => !claimedHomePaths.has(`/monitoring/${item.slug}`));
  const publicWatchHref = publicWatchTracker ? `/monitoring/${publicWatchTracker.slug}` : "";
  if (publicWatchHref) claimedHomePaths.add(publicWatchHref);
  const publicWatchTitle = publicWatchTracker?.title[language];
  const publicWatchSummary = publicWatchTracker?.summary[language];
  const publicWatchImage = publicWatchTracker?.heroImage ? {
    src: publicWatchTracker.heroImage.src,
    alt: publicWatchTracker.heroImage.alt[language],
  } : undefined;
  const seedLanguageArticle = claimFirstUnseen(
    seedLanguageCandidates,
    (item) => `/seed-language/${item.slug}`,
    claimedHomePaths,
  );
  const seedLanguageTerm = seedLanguageArticle ? seedLanguageTerms[seedLanguageArticle.term] : undefined;

  const civicWatchCandidates: HomeCivicWatchItem[] = [
    ...newsTrackerCases.map((item) => ({
      key: `issue-${item.slug}`,
      category: "issue" as const,
      date: item.updatedAt,
      to: `/monitoring/${item.slug}`,
      title: item.title[language],
      summary: item.summary[language],
      status: item.status[language],
    })),
    ...legislativeBills
      .filter((bill) => bill.review_state === "published")
      .map((bill) => ({
        key: `legislation-${bill.bill_id}`,
        category: "legislation" as const,
        date: (bill.editorial_updated_at || bill.published_at || bill.updated_at || bill.proposed_date || "").slice(0, 10),
        to: `/monitoring/legislation/${bill.slug}`,
        title: ko ? bill.title : bill.analysis?.title_en || bill.title,
        summary: ko
          ? bill.public_summary_ko || bill.analysis?.summary_ko || bill.official_summary || "공식 자료와 조문을 검토한 입법감시 기록입니다."
          : bill.public_summary_en || bill.analysis?.summary_en || "A legislative watch record based on official documents and bill text.",
        status: ko ? `중요도 ${bill.importance_score}` : `Impact ${bill.importance_score}`,
      })),
    ...taxPolicies.map((item) => ({
      key: `tax-${item.slug}`,
      category: "tax" as const,
      date: item.checkedAt,
      to: `/monitoring/tax/${item.slug}`,
      title: item.title[language],
      summary: item.summary[language],
      status: item.status[language],
    })),
    ...civicWatchCases.map((item) => ({
      key: `public-interest-${item.slug}`,
      category: "public-interest" as const,
      date: item.updatedAt,
      to: `/monitoring/${item.slug}`,
      title: item.title[language],
      summary: item.summary[language],
      status: item.status[language],
    })),
  ]
    .filter((item) => !claimedHomePaths.has(item.to))
    .sort((a, b) => b.date.localeCompare(a.date));

  const recentCivicWatchItems = civicWatchCandidates.reduce<HomeCivicWatchItem[]>((selected, item) => {
    if (
      selected.length >= 3
      || claimedHomePaths.has(item.to)
      || selected.some((candidate) => candidate.category === item.category)
    ) return selected;
    claimedHomePaths.add(item.to);
    selected.push(item);
    return selected;
  }, []);

  const civicWatchCategoryLabels: Record<HomeCivicWatchItem["category"], string> = {
    issue: ko ? "이슈감시" : "Issue Watch",
    legislation: ko ? "입법감시" : "Legislative Watch",
    tax: ko ? "세금감시" : "Tax Watch",
    "public-interest": ko ? "공익감시" : "Public-interest Watch",
  };

  // Commentary is deliberately separate from the factual monitoring records above.
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
    void getFeaturedContentPath()
      .then((path) => { if (active) setFeaturedPath(path); })
      .catch(() => { /* Keep the newest featured briefing as the fallback. */ })
      .finally(() => { if (active) setFeaturedReady(true); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    let active = true;
    void getPublishedLegislativeBills(20)
      .then((bills) => { if (active) setLegislativeBills(bills); })
      .catch(() => { /* Static civic-watch records remain available as the safe fallback. */ });
    return () => { active = false; };
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
      kicker: ko ? "씨앗의 소리" : "ABOUT SEED VOICE",
      title: ko ? "씨앗의 소리가 지키려는 것" : "What SEED VOICE Stands For",
      summary: ko ? "법의 지배와 권력분립을 토대로 시민과 기업의 자유를 지키고, 공익을 바로 세우며 국가와 시민사회의 권력을 감시하는 이유를 밝힙니다." : "Why SEED VOICE defends the rule of law, separated powers, and freedom for citizens and enterprise while scrutinizing power and restoring integrity to the public good.",
    },
    {
      to: "/founding-statement",
      kicker: ko ? "취지문 전문" : "FULL STATEMENT",
      title: ko ? "왜 지금 씨앗의 소리인가" : "Why SEED VOICE, Why Now",
      summary: ko ? "민주의 시대를 넘어 시민의 시대로 가야 하는 이유와 씨앗의 소리가 감시할 권력을 밝힌 원고 전문입니다." : "The full statement on moving beyond political camps toward an age of citizens—and the powers SEED VOICE will watch.",
    },
    {
      to: "/publisher-message",
      kicker: ko ? "필진 소개" : "CONTRIBUTORS",
      title: ko ? "작은씨앗 · 경계의 시민 · 생각 너머 · 푸른지평 ···" : "Small Seed · Citizen at the Boundary · Beyond Thought · Blue Horizon ···",
      summary: ko ? "서로 다른 현장과 경험에서 출발한 필진이 각자의 질문과 판단으로 씨앗의 소리를 만들어갑니다." : "Contributors shaped by different fields and experiences build SEED VOICE through their own questions and judgment.",
    },
  ];

  type QuickRead = { to: string; label: string; title: string; summary: string; imageSrc?: string; imageAlt?: string; term?: string };
  const quickReads: QuickRead[] = [];
  if (latestHotIssue) quickReads.push({ to: latestHotIssue.to, label: ko ? "핫이슈" : "Hot Issue", title: latestHotIssue.title, summary: latestHotIssue.summary, imageSrc: latestHotIssue.imageSrc, imageAlt: latestHotIssue.imageAlt });
  if (latestBriefing) quickReads.push({ to: `/briefings/${latestBriefing.slug}`, label: ko ? "브리핑" : "Briefing", title: latestBriefing.title, summary: latestBriefing.summary, imageSrc: latestBriefing.images?.[0]?.src, imageAlt: latestBriefing.images?.[0]?.alt });
  if (publicWatchHref && publicWatchTitle && publicWatchSummary) quickReads.push({ to: publicWatchHref, label: ko ? "시민감시" : "Civic Watch", title: publicWatchTitle, summary: publicWatchSummary, imageSrc: publicWatchImage?.src, imageAlt: publicWatchImage?.alt });
  if (seedLanguageArticle) quickReads.push({ to: `/seed-language/${seedLanguageArticle.slug}`, label: ko ? "시민언어" : "Civic Language", title: seedLanguageArticle.title, summary: seedLanguageArticle.summary, term: ko ? seedLanguageArticle.term : seedLanguageTerm?.english || seedLanguageArticle.term });
  const trackedIssues = ["public-institution-reform", "prosecution-power-transfer", "yeosu-island-expo"]
    .map((id) => hotIssueClusters.find((item) => item.id === id))
    .filter((item): item is (typeof hotIssueClusters)[number] => Boolean(item));

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
                <span className="mt-0.5 line-clamp-1 text-[9px] leading-4 text-charcoal/48 sm:mt-1 sm:text-[11px]">{topic.description[language]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-today-section border-b border-green-deep/15 bg-ivory" aria-labelledby="home-feature-title">
        <div className="container-page">
          <p className="section-kicker mb-3 sm:mb-4">EDITOR&apos;S PICK</p>
          {!featuredReady && <div className="min-h-[330px] animate-pulse rounded-xl bg-green-deep/8" aria-hidden="true" />}
          {featuredLead && (
            <article className="home-feature overflow-hidden rounded-xl bg-[#e9efe4] lg:grid lg:min-h-[360px] lg:grid-cols-[1.05fr_.95fr]">
              <div className="home-feature-copy flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <p className="text-[11px] font-black tracking-[.12em] text-green-deep">{featuredLead.kicker}</p>
                <Link to={featuredLead.path} className="group mt-3 block">
                  <h1 id="home-feature-title" className="editorial-title max-w-[620px] break-keep text-[1.6rem] font-black leading-[1.27] text-navy transition group-hover:text-green-mid sm:text-[2.2rem] lg:text-[clamp(2rem,2.8vw,3rem)]">{featuredLead.title}</h1>
                  <p className="home-lead-summary mt-3 line-clamp-3 max-w-[570px]">{featuredLead.summary}</p>
                </Link>
                <div className="mt-4 flex items-center gap-3 text-xs text-charcoal/55"><time>{featuredLead.date.replace(/-/g, ".")}</time>{featuredLead.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={13}/>{featuredLead.readMinutes}{ko ? "분 읽기" : " min read"}</span>}</div>
                <Link to={featuredLead.path} className="mt-5 inline-flex w-fit items-center gap-1 border-b-2 border-green-deep pb-1 text-sm font-extrabold text-green-deep">{ko ? "기사 읽기" : "Read article"}<ArrowRight size={15}/></Link>
              </div>
              <div className="home-feature-media order-first bg-green-deep lg:order-last">
                <FeaturedStoryMedia
                  key={featuredLead.path}
                  to={featuredLead.path}
                  imageSrc={resolveImageSrc(featuredLead.image.src)}
                  imageAlt={featuredLead.image.alt}
                  animate={featuredLead.path === "/briefings/inheritance-tax-frozen-allowance-middle-class" && featuredLead.image.src.endsWith("inheritance-frozen-threshold-home-v2.webp")}
                  ko={ko}
                />
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="bg-paper py-8 sm:py-11" aria-labelledby="quick-reads-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-3">
            <div><p className="section-kicker">START HERE</p><h2 id="quick-reads-title" className="editorial-title mt-1 text-[1.55rem] font-bold text-navy sm:text-3xl">{ko ? "빠르게 읽을 4가지" : "Four stories to start with"}</h2><p className="mt-1 text-[13px] text-charcoal/60 sm:text-sm">{ko ? "오늘의 쟁점을 살피고, 궁금한 기사로 들어가세요." : "A clear path into the issues worth your attention."}</p></div>
            <Link to="/search" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체 기사" : "All stories"}<ArrowRight size={14}/></Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-4">
            {quickReads.map((item) => (
              <Link key={item.to} to={item.to} className="home-quick-card group min-w-0 overflow-hidden rounded-lg border border-green-deep/15 bg-white transition hover:-translate-y-0.5 hover:border-green-deep/35 hover:shadow-[0_12px_28px_rgba(20,55,45,.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep/40">
                <div className="home-quick-thumb overflow-hidden bg-green-pale">
                  {item.imageSrc ? <SafeImage src={resolveImageSrc(item.imageSrc)} alt={item.imageAlt || ""} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" /> : <span className="flex h-full items-center justify-center text-3xl font-black text-green-deep sm:text-5xl">{item.term}</span>}
                </div>
                <div className="home-quick-copy min-w-0 p-3 sm:p-5"><span className="inline-flex rounded-full bg-green-pale px-2 py-0.5 text-[10px] font-extrabold text-green-deep sm:text-xs">{item.label}</span><h3 className="editorial-title mt-2 line-clamp-3 break-keep text-[.94rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:line-clamp-2 sm:text-[1.2rem]">{item.title}</h3><p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-charcoal/60 sm:text-sm sm:leading-6">{item.summary}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper pb-9 sm:pb-14" aria-labelledby="follow-issues-title">
        <div className="container-page"><div className="rounded-xl bg-green-deep px-5 py-6 text-white sm:px-8 sm:py-8">
          <p className="text-[11px] font-black tracking-[.14em] text-[#d6e752]">FOLLOW THE ISSUE</p><div className="mt-1 flex items-end justify-between gap-3"><h2 id="follow-issues-title" className="editorial-title text-[1.55rem] font-bold sm:text-3xl">{ko ? "계속 추적할 이슈" : "Issues we keep tracking"}</h2><Link to="/monitoring" className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#dce987] sm:text-sm">{ko ? "시민감시 전체" : "All trackers"}<ArrowRight size={14}/></Link></div>
          <div className="mt-5 grid gap-2.5 md:grid-cols-3 md:gap-4">{trackedIssues.map((item) => <Link key={item.id} to={`/news/issues/${item.id}`} className="group block rounded-lg border border-white/20 bg-white/10 p-4 transition hover:bg-white/15 sm:p-5"><h3 className="line-clamp-2 break-keep text-[1rem] font-bold leading-snug sm:text-lg">{item.title}</h3><p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/75 sm:text-sm sm:leading-6">{item.latestChange}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#dce987]">{ko ? "최근 변화 확인" : "See the latest"}<ArrowRight size={13}/></span></Link>)}</div>
        </div></div>
      </section>

      <NewsletterSignup />

      <section className="pt-9 pb-6 sm:pt-16 sm:pb-8" aria-labelledby="hot-issues-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3">
            <div>
              <p className="section-kicker">HOT ISSUES</p>
              <h2 id="hot-issues-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "핫이슈" : "Hot Issues"}</h2>
              <p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">
                {ko ? "지금 시민이 알아야 할 네 가지 흐름을 씨앗의 관점으로 정리합니다." : "Four developing issues citizens need to understand now, organized from SEED VOICE's perspective."}
              </p>
            </div>
            <Link to="/news" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {hotIssueClusters.map((item, index) => (
              <Link
                key={item.id}
                to={`/news/issues/${item.id}`}
                className="group flex h-full flex-col overflow-hidden border-t-[3px] border-green-deep bg-white shadow-[0_10px_26px_rgba(20,55,45,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(20,55,45,.11)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
              >
                <div className="overflow-hidden bg-ivory">
                  <SafeImage
                    src={resolveImageSrc(item.imageSrc)}
                    alt={item.imageAlt}
                    loading={index < 2 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-3 text-[10px] font-semibold text-charcoal/40">
                    <span>{ko ? "최근 변화" : "LATEST CHANGE"}</span>
                    <time>{item.updatedAt.replace(/-/g, ".")}</time>
                  </div>
                  <h3 className="editorial-title mt-2 line-clamp-3 break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.18rem]">{item.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-charcoal/58 sm:text-[13px]">{item.latestChange}</p>
                  <span className="mt-auto inline-flex items-center justify-end gap-1.5 pt-3 text-[11px] font-extrabold text-green-deep">{ko ? "이슈 보기" : "View issue"}<ArrowRight size={13} className="transition-transform group-hover:translate-x-1" aria-hidden="true"/></span>
                </div>
              </Link>
            ))}
          </div>
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
                    <time className="shrink-0 text-[11px] text-charcoal/40">{item.date.replace(/-/g, ".")}</time>
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
                    <div className="overflow-hidden bg-green-deep">
                      <SafeImage src={resolveImageSrc(article.imageSrc)} alt={article.imageAlt} referrerPolicy="no-referrer" className="aspect-[4/3] h-full max-h-[88px] w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
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

      <section className="border-t border-green-deep/12 py-8 sm:py-12"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">COLUMNS</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "칼럼" : "Columns"}</h2><p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "정답을 말하기보다, 익숙한 생각에 질문을 던집니다." : "Rather than declare the answer, we question what has become familiar."}</p></div><Link to="/columns" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[1.05fr_.95fr]"><div className="divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{voiceListColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid grid-cols-[1.6rem_1fr] gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{column.title}</h3><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-2 sm:text-sm sm:leading-6">{column.summary}</p></div></Link>)}</div>{voiceLeadColumn && <Link to={`/columns/${voiceLeadColumn.slug}`} className="group block border-y border-green-deep/15 pt-4 pb-3 lg:border-t-0 lg:pt-0"><div className="hidden overflow-hidden bg-ivory sm:block"><SafeImage src={resolveImageSrc(voiceLeadColumn.heroImage.src)} alt={voiceLeadColumn.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/7.1] w-full object-cover transition duration-500 group-hover:scale-[1.015] sm:aspect-[16/7.8]" /></div><h3 className="editorial-title break-keep text-[1.2rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{voiceLeadColumn.title}</h3><p className="mt-1.5 line-clamp-2 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{voiceLeadColumn.summary}</p></Link>}</div></div></section>

      <section className="border-t border-green-deep/12 py-7 sm:py-12" aria-labelledby="newcomer-title"><div className="container-page"><div><p className="section-kicker">START HERE</p><h2 id="newcomer-title" className="editorial-title mt-1.5 text-[1.55rem] font-bold text-navy sm:mt-2 sm:text-4xl">{ko ? "처음 오셨다면" : "New to SEED VOICE?"}</h2><p className="mt-2 text-[13px] leading-6 text-charcoal/60 sm:mt-2.5 sm:text-base sm:leading-7">{ko ? "씨앗의 소리가 무엇을 보고 어떤 기준으로 판단하는지, 아래 세 글에서 가장 빠르게 확인할 수 있습니다." : "These three pages are the fastest way to understand what SEED VOICE watches and the standards it uses."}</p></div><div className="mt-4 grid gap-3 sm:mt-5 sm:gap-5 md:grid-cols-3">{newcomerLinks.map((item, index) => <Link key={item.to} to={item.to} className="group grid grid-cols-[1.8rem_1fr_auto] items-start gap-2.5 border border-solid border-green-deep/15 bg-white p-4 transition hover:border-green-deep/30 sm:flex sm:min-h-[160px] sm:flex-col sm:p-5 sm:hover:-translate-y-0.5"><span className="pt-0.5 text-[11px] font-black text-charcoal/25 sm:hidden">0{index + 1}</span><div><div className="flex items-center justify-between gap-3"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">{item.kicker}</p><span className="hidden text-[11px] font-black text-charcoal/25 sm:inline sm:text-xs">0{index + 1}</span></div><h3 className="editorial-title mt-1.5 break-keep text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-4 sm:text-2xl">{item.title}</h3><p className="hidden sm:mt-2.5 sm:line-clamp-2 sm:block sm:text-sm sm:leading-6 sm:text-charcoal/58">{item.summary}</p></div><ArrowRight size={15} className="mt-1 text-green-deep sm:hidden"/></Link>)}</div></div></section>

      <HomepageNewsletterNudge />
    </div>
  );
}
