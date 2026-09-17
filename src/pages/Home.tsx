import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";
import PopularLatest from "../components/PopularLatest";
import SafeImage from "../components/SafeImage";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { localizeBriefing, localizeColumn } from "../data/localizedContent";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { getFeaturedContentCandidates } from "../data/featuredContent";
import { useLanguage } from "../i18n";
import { getFeaturedContentPath } from "../lib/featuredContent";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const seedLanguageTerms: Record<string, { hanja: string; english: string }> = {
  진영언어: { hanja: "陣營言語", english: "PARTISAN LANGUAGE" },
  시민: { hanja: "市民", english: "CITIZEN" },
  자유: { hanja: "自由", english: "FREEDOM" },
  진보: { hanja: "進步", english: "PROGRESS · PROGRESSIVISM" },
  민주: { hanja: "民主", english: "DEMOCRACY" },
  환경: { hanja: "環境", english: "ENVIRONMENT" },
  공익: { hanja: "公益", english: "PUBLIC INTEREST" },
  담론: { hanja: "談論", english: "DISCOURSE" },
};

export default function Home() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [featuredPath, setFeaturedPath] = useState<string | null>(null);
  const allBriefings = getAllBriefingsNewestFirst();
  const localizedBriefings = allBriefings.map((item) => localizeBriefing(item, language));
  const briefings = localizedBriefings.filter((item) => item.homeBriefingLeadEligible !== false).slice(0, 5);
  const journalColumns = [...columns]
    .sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue)
    .slice(0, 9)
    .map((item) => localizeColumn(item, language));
  const hotIssues = getHotIssuesNewestFirst(language).slice(0, 5);
  const seedLanguageArticle = [
    ...seedLanguageEnvironmentArticlesKo.filter((item) => item.slug !== "environment-beyond-camps-deep-read"),
    ...seedLanguageArticlesKo,
  ]
    .filter((item) => item.homeHeroEligible !== false && item.listingEligible !== false && item.readMinutes < 12)
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .sort((a, b) => b.date.localeCompare(a.date))[0];

  const leadColumn = journalColumns[0];
  const featuredCandidates = getFeaturedContentCandidates(language);
  const defaultFeaturedPath = leadColumn ? `/columns/${leadColumn.slug}` : featuredCandidates[0]?.path;
  const featuredLead = featuredCandidates.find((item) => item.path === featuredPath)
    ?? featuredCandidates.find((item) => item.path === defaultFeaturedPath)
    ?? featuredCandidates[0];
  const voiceLeadColumn = journalColumns[4];
  const voiceListColumns = journalColumns.slice(0, 4);
  const latestHotIssue = hotIssues[0];
  const latestBriefing = briefings[0];
  const briefingList = localizedBriefings.filter((item) => item.slug !== latestBriefing?.slug).slice(0, 4);
  const latestHotIssuePathParts = latestHotIssue?.to.split("/").filter(Boolean) ?? [];
  const latestHotIssueSlug = latestHotIssuePathParts[latestHotIssuePathParts.length - 1]?.replace(/-tracker$/, "");
  const publicWatchBriefingSource = allBriefings.find((item) => (
    item.publicWatch
    && item.slug !== latestBriefing?.slug
    && item.slug !== latestHotIssueSlug
  ));
  const publicWatchBriefing = publicWatchBriefingSource ? localizeBriefing(publicWatchBriefingSource, language) : undefined;
  const publicWatchColumn = journalColumns.find((column) => column.slug === "civic-groups-are-not-state-vanguard-2026") ?? journalColumns[1];
  const publicWatchHref = publicWatchBriefing ? `/briefings/${publicWatchBriefing.slug}` : publicWatchColumn ? `/columns/${publicWatchColumn.slug}` : "";
  const publicWatchTitle = publicWatchBriefing?.title ?? publicWatchColumn?.title;
  const publicWatchSummary = publicWatchBriefing?.summary ?? publicWatchColumn?.summary;
  const publicWatchImage = publicWatchBriefing?.images?.[0] ?? publicWatchColumn?.heroImage;
  const seedLanguageTerm = seedLanguageArticle ? seedLanguageTerms[seedLanguageArticle.term] : undefined;

  useEffect(() => {
    let active = true;
    void getFeaturedContentPath()
      .then((path) => { if (active) setFeaturedPath(path); })
      .catch(() => { /* Keep the newest column as the safe fallback. */ });
    return () => { active = false; };
  }, []);

  const newcomerLinks = [
    {
      to: "/about",
      kicker: ko ? "씨앗의 소리" : "ABOUT SEED VOICE",
      title: ko ? "씨앗의 소리가 지키려는 것" : "What SEED VOICE Stands For",
      summary: ko ? "법의 지배와 권력분립, 시민과 기업의 자유를 지키며 국가와 시민사회의 권력을 감시하는 이유를 밝힙니다." : "Why SEED VOICE defends the rule of law, separated powers, and civic and economic freedom while watching power in the state and civil society.",
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
      title: ko ? "작은씨앗 · 경계의 시민" : "Small Seed · Citizen at the Boundary",
      summary: ko ? "서로 다른 현장과 경험에서 출발한 두 시민이 각자의 질문과 판단으로 씨앗의 소리를 만들어갑니다." : "Two citizens shaped by different fields and experiences build SEED VOICE through their own questions and judgment.",
    },
  ];

  return (
    <div className="home-page bg-paper">
      <section className="border-b border-green-deep/15 bg-ivory py-4 sm:py-6 lg:py-7">
        <div className="container-page">
          <div className="mb-3 border-b border-green-deep/15 pb-2.5 sm:mb-4">
            <p className="section-kicker">TODAY&apos;S SEED</p>
            <p className="mt-1 text-[13px] font-medium text-charcoal/55 sm:text-sm">{ko ? "오늘 씨앗이 주목하는 문제" : "What SEED is watching today"}</p>
          </div>
          <div className="grid gap-5 sm:gap-6 xl:grid-cols-[minmax(0,1.62fr)_minmax(390px,.92fr)] xl:items-stretch xl:gap-7">
            {featuredLead && (
              <article className="group h-full min-w-0">
                <Link to={featuredLead.path} className="flex h-full flex-col">
                  <div className="overflow-hidden bg-green-deep">
                    <SafeImage src={resolveImageSrc(featuredLead.image.src)} alt={featuredLead.image.alt} loading="eager" fetchPriority="high" referrerPolicy="no-referrer" className="aspect-[16/8.55] w-full object-cover transition duration-500 group-hover:scale-[1.01] sm:aspect-[16/7.65]" />
                  </div>
                  <p className="mt-3 text-[10px] font-black tracking-[.14em] text-green-deep sm:mt-3.5 sm:text-[11px]">{featuredLead.kicker}</p>
                  <h1 className="editorial-title mt-1.5 max-w-5xl break-keep text-balance text-[1.75rem] font-black leading-[1.12] tracking-[-0.038em] text-navy transition group-hover:text-green-mid sm:text-[clamp(1.9rem,3.5vw,3rem)] sm:leading-[1.09] sm:tracking-[-0.042em]">{featuredLead.title}</h1>
                  <p className="home-lead-summary mt-2 line-clamp-3 max-w-4xl sm:mt-2.5">{featuredLead.summary}</p>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-charcoal/45 sm:text-xs"><time>{featuredLead.date.replace(/-/g, ".")}</time>{featuredLead.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={12}/>{featuredLead.readMinutes}{ko ? "분 읽기" : " min read"}</span>}</div>
                </Link>
              </article>
            )}
            <aside className="divide-y divide-green-deep/15 border-y border-green-deep/20 xl:flex xl:h-full xl:flex-col xl:border-t-0" aria-label={ko ? "오늘의 핵심 콘텐츠" : "Today’s essential stories"}>
              {latestHotIssue && (
                <Link to={latestHotIssue.to} className="group grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 xl:flex-1 xl:grid-cols-[112px_minmax(0,1fr)] xl:content-start xl:py-3 xl:first:pt-0">
                  <div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(latestHotIssue.imageSrc)} alt={latestHotIssue.imageAlt} referrerPolicy="no-referrer" className="aspect-[4/3] h-full max-h-[96px] w-full object-cover transition duration-500 group-hover:scale-[1.02]" /></div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2"><p className="truncate text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">HOT ISSUES</p><span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-extrabold text-green-deep/70">{ko ? "핫이슈 보기" : "View"}<ArrowRight size={11}/></span></div>
                    <h2 className="editorial-title mt-1 truncate text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{latestHotIssue.title}</h2>
                    <p className="home-compact-summary mt-1 line-clamp-3">{latestHotIssue.summary}</p>
                  </div>
                </Link>
              )}
              {latestBriefing && (
                <Link to={`/briefings/${latestBriefing.slug}`} className="group grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 xl:flex-1 xl:grid-cols-[112px_minmax(0,1fr)] xl:content-start xl:py-3">
                  <div className="overflow-hidden bg-green-deep">{latestBriefing.images?.[0] && <SafeImage src={resolveImageSrc(latestBriefing.images[0].src)} alt={latestBriefing.images[0].alt} referrerPolicy="no-referrer" className="aspect-[4/3] h-full max-h-[96px] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />}</div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2"><p className="truncate text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">BRIEFINGS</p><span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-extrabold text-green-deep/70">{ko ? "브리핑 읽기" : "Read"}<ArrowRight size={11}/></span></div>
                    <h2 className="editorial-title mt-1 truncate text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{latestBriefing.title}</h2>
                    <p className="home-compact-summary mt-1 line-clamp-3">{latestBriefing.summary}</p>
                  </div>
                </Link>
              )}
              {publicWatchHref && publicWatchTitle && publicWatchSummary && publicWatchImage && (
                <Link to={publicWatchHref} className="group grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 xl:flex-1 xl:grid-cols-[112px_minmax(0,1fr)] xl:content-start xl:py-3">
                  <div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(publicWatchImage.src)} alt={publicWatchImage.alt} referrerPolicy="no-referrer" className="aspect-[4/3] h-full max-h-[96px] w-full object-cover transition duration-500 group-hover:scale-[1.02]" /></div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2"><p className="truncate text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">CIVIC WATCH</p><span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-extrabold text-green-deep/70">{ko ? "시민감시 보기" : "Read"}<ArrowRight size={11}/></span></div>
                    <h2 className="editorial-title mt-1 truncate text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{publicWatchTitle}</h2>
                    <p className="home-compact-summary mt-1 line-clamp-3">{publicWatchSummary}</p>
                  </div>
                </Link>
              )}
              {seedLanguageArticle && (
                <Link to={`/seed-language/${seedLanguageArticle.slug}`} className="group grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4 xl:flex-1 xl:grid-cols-[112px_minmax(0,1fr)] xl:content-start xl:py-3">
                  <div className="flex aspect-[4/3] h-full max-h-[96px] w-full flex-col items-center justify-center border border-green-deep/15 bg-green-pale/45 text-center">
                    <p className="editorial-title text-[1.22rem] font-black leading-none text-navy sm:text-[1.32rem]">{ko ? seedLanguageArticle.term : seedLanguageArticle.term.toUpperCase()}</p>
                    {ko && seedLanguageTerm && (
                      <>
                        <p className="mt-1.5 text-[10px] font-bold leading-none text-charcoal/55">{seedLanguageTerm.hanja}</p>
                        <p className="mt-1 max-w-full px-1 text-[8px] font-black leading-tight tracking-[.04em] text-green-deep/65 sm:text-[8px]">{seedLanguageTerm.english}</p>
                      </>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2"><p className="truncate text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">GLOSSARY</p><span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-extrabold text-green-deep/70">{ko ? "용어해설 보기" : "Read"}<ArrowRight size={11}/></span></div>
                    <h2 className="editorial-title mt-1 truncate text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{seedLanguageArticle.title}</h2>
                    <p className="home-compact-summary mt-1 line-clamp-3">{seedLanguageArticle.summary}</p>
                  </div>
                </Link>
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-6 sm:pt-16 sm:pb-8" aria-labelledby="hot-issues-title"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">HOT ISSUES</p><h2 id="hot-issues-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "핫이슈" : "Hot Issues"}</h2><p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "핵심 보도와 뉴스트래커로 사건의 맥락과 변화를 기록합니다." : "Essential reporting and news trackers preserve the context and changes behind each issue."}</p></div><Link to="/news" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="divide-y divide-green-deep/12 pt-1 md:grid md:grid-cols-3 md:gap-8 md:divide-y-0 md:pt-6">{hotIssues.slice(0, 3).map((item) => <article key={item.key} className="group py-4 md:py-0"><Link to={item.to} className="block"><div className="hidden h-[220px] overflow-hidden bg-ivory md:block lg:h-[240px]"><SafeImage src={resolveImageSrc(item.imageSrc)} alt={item.imageAlt} referrerPolicy="no-referrer" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.018]" /></div><p className="mt-3 text-[10px] font-black tracking-[.12em] text-green-deep">{item.kindLabel}</p><h3 className="editorial-title break-keep text-[1.08rem] font-bold leading-snug text-navy transition group-hover:text-green-mid md:mt-1 md:text-[1.35rem]">{item.title}</h3><p className="mt-1.5 line-clamp-3 text-[13px] leading-5 text-charcoal/58 md:mt-2 md:text-sm md:leading-6">{item.summary}</p><div className="mt-2 flex items-center gap-3 text-[11px] text-charcoal/45 sm:text-xs"><time>{item.date.replace(/-/g, ".")}</time>{item.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={12}/>{item.readMinutes}{ko ? "분 읽기" : " min read"}</span>}</div></Link></article>)}</div></div></section>

      <section className="border-t border-green-deep/12 pt-8 pb-4 sm:pt-12 sm:pb-5"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">BRIEFINGS</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "브리핑" : "Briefings"}</h2><p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "시민에게는 때로 분노의 성명서보다 친절한 설명서가 필요합니다." : "Citizens sometimes need a clear explanation more than an angry statement."}</p></div><Link to="/briefings" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[.95fr_1.05fr]">{latestBriefing && <Link to={`/briefings/${latestBriefing.slug}`} className="group block">{latestBriefing.images?.[0] && <div className="overflow-hidden bg-green-deep"><SafeImage src={resolveImageSrc(latestBriefing.images[0].src)} alt={latestBriefing.images[0].alt} referrerPolicy="no-referrer" className="aspect-[16/7.1] w-full object-cover transition duration-500 group-hover:scale-[1.015] sm:aspect-[16/7.8]" /></div>}<h3 className="editorial-title mt-3 break-keep text-[1.3rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{latestBriefing.title}</h3><p className="mt-1.5 line-clamp-3 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{latestBriefing.summary}</p></Link>}<div className="divide-y divide-green-deep/15 border-t border-green-deep/15 lg:border-t-0">{briefingList.map((briefing, index) => <Link key={briefing.slug} to={`/briefings/${briefing.slug}`} className="group grid grid-cols-[1.6rem_1fr] gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{briefing.title}</h3><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-2 sm:text-sm sm:leading-6">{briefing.summary}</p></div></Link>)}</div></div></div></section>

      <section className="border-t border-green-deep/12 py-8 sm:py-12"><div className="container-page"><div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3"><div><p className="section-kicker">COLUMNS</p><h2 className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "칼럼" : "Columns"}</h2><p className="mt-1.5 text-[12px] font-medium leading-5 text-charcoal/55 sm:text-sm sm:leading-6">{ko ? "정답을 말하기보다, 익숙한 생각에 질문을 던집니다." : "Rather than declare the answer, we question what has become familiar."}</p></div><Link to="/columns" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "전체보기" : "View all"}<ArrowRight size={14}/></Link></div><div className="grid gap-5 pt-4 sm:gap-6 sm:pt-4 lg:grid-cols-[.86fr_1.14fr] lg:items-stretch"><div className="flex h-full flex-col divide-y divide-green-deep/15 border-y border-green-deep/15 lg:border-t-0">{voiceListColumns.map((column, index) => <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid flex-1 grid-cols-[1.6rem_1fr] content-center gap-2.5 py-3 sm:grid-cols-[2rem_1fr] sm:gap-3 sm:py-3"><span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span><div><h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{column.title}</h3><p className="mt-1 line-clamp-2 text-[12px] leading-5 text-charcoal/55 sm:line-clamp-2 sm:text-sm sm:leading-6">{column.summary}</p></div></Link>)}</div>{voiceLeadColumn && <Link to={`/columns/${voiceLeadColumn.slug}`} className="group flex h-full flex-col border-y border-green-deep/15 pt-4 pb-3 lg:border-t-0 lg:pt-0"><div className="hidden overflow-hidden bg-ivory sm:block lg:flex lg:min-h-0 lg:flex-1 lg:items-center lg:justify-center"><SafeImage src={resolveImageSrc(voiceLeadColumn.heroImage.src)} alt={voiceLeadColumn.heroImage.alt} referrerPolicy="no-referrer" className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01] lg:max-h-full" /></div><h3 className="editorial-title break-keep text-[1.2rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-3 sm:text-2xl">{voiceLeadColumn.title}</h3><p className="mt-1.5 line-clamp-2 text-[13px] leading-5.5 text-charcoal/60 sm:mt-1.5 sm:text-sm sm:leading-6">{voiceLeadColumn.summary}</p></Link>}</div></div></section>

      <PopularLatest />

      <section className="border-t border-green-deep/12 py-7 sm:py-12" aria-labelledby="newcomer-title"><div className="container-page"><div><p className="section-kicker">START HERE</p><h2 id="newcomer-title" className="editorial-title mt-1.5 text-[1.55rem] font-bold text-navy sm:mt-2 sm:text-4xl">{ko ? "처음 오셨다면" : "New to SEED VOICE?"}</h2><p className="mt-2 whitespace-nowrap text-[13px] leading-6 text-charcoal/60 sm:mt-2.5 sm:text-base sm:leading-7">{ko ? "씨앗의 소리가 무엇을 보고 어떤 기준으로 판단하는지, 아래 세 글에서 가장 빠르게 확인할 수 있습니다." : "These three pages are the fastest way to understand what SEED VOICE watches and the standards it uses."}</p></div><div className="mt-4 grid gap-3 sm:mt-5 sm:gap-5 md:grid-cols-3">{newcomerLinks.map((item, index) => <Link key={item.to} to={item.to} className="group grid grid-cols-[1.8rem_1fr_auto] items-start gap-2.5 border border-solid border-green-deep/15 bg-white p-4 transition hover:border-green-deep/30 sm:flex sm:min-h-[160px] sm:flex-col sm:p-5 sm:hover:-translate-y-0.5"><span className="pt-0.5 text-[11px] font-black text-charcoal/25 sm:hidden">0{index + 1}</span><div><div className="flex items-center justify-between gap-3"><p className="text-[9px] font-black tracking-[.14em] text-green-deep sm:text-[10px]">{item.kicker}</p><span className="hidden text-[11px] font-black text-charcoal/25 sm:inline sm:text-xs">0{index + 1}</span></div><h3 className="editorial-title mt-1.5 break-keep text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-4 sm:text-2xl">{item.title}</h3><p className="hidden sm:mt-2.5 sm:line-clamp-2 sm:block sm:text-sm sm:leading-6 sm:text-charcoal/58">{item.summary}</p></div><ArrowRight size={15} className="mt-1 text-green-deep sm:hidden"/></Link>)}</div></div></section>

      <NewsletterSignup />
    </div>
  );
}
