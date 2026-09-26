import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedStoryMedia from "../components/FeaturedStoryMedia";
import SafeImage from "../components/SafeImage";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { getColumnsNewestFirst, hotIssueColumnTrackerSlugs } from "../data/columns";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { localizeBriefing, localizeColumn } from "../data/localizedContent";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { newsTrackerCases } from "../data/newsTrackerRegistry";
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

const claimFirstUnseen = <T,>(
  items: T[],
  pathOf: (item: T) => string,
  claimedPaths: Set<string>,
) => {
  const item = items.find((candidate) => !claimedPaths.has(pathOf(candidate)));
  if (item) claimedPaths.add(pathOf(item));
  return item;
};

export default function Home() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [featuredPath, setFeaturedPath] = useState<string | null>(null);
  const [featuredReady, setFeaturedReady] = useState(false);
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

  useEffect(() => {
    let active = true;
    void getFeaturedContentPath()
      .then((path) => { if (active) setFeaturedPath(path); })
      .catch(() => { /* Keep the newest featured briefing as the fallback. */ })
      .finally(() => { if (active) setFeaturedReady(true); });
    return () => { active = false; };
  }, []);

  type QuickRead = { to: string; label: string; title: string; summary: string; imageSrc?: string; imageAlt?: string; term?: string; termHanja?: string; termEnglish?: string };
  const quickReads: QuickRead[] = [];
  if (latestHotIssue) quickReads.push({ to: latestHotIssue.to, label: ko ? "핫이슈" : "Hot Issue", title: latestHotIssue.title, summary: latestHotIssue.summary, imageSrc: latestHotIssue.imageSrc, imageAlt: latestHotIssue.imageAlt });
  if (latestBriefing) quickReads.push({ to: `/briefings/${latestBriefing.slug}`, label: ko ? "브리핑" : "Briefing", title: latestBriefing.title, summary: latestBriefing.summary, imageSrc: latestBriefing.images?.[0]?.src, imageAlt: latestBriefing.images?.[0]?.alt });
  if (publicWatchHref && publicWatchTitle && publicWatchSummary) quickReads.push({ to: publicWatchHref, label: ko ? "시민감시" : "Civic Watch", title: publicWatchTitle, summary: publicWatchSummary, imageSrc: publicWatchImage?.src, imageAlt: publicWatchImage?.alt });
  if (seedLanguageArticle) quickReads.push({ to: `/seed-language/${seedLanguageArticle.slug}`, label: ko ? "시민언어" : "Civic Language", title: seedLanguageArticle.title, summary: seedLanguageArticle.summary, term: seedLanguageArticle.term, termHanja: seedLanguageTerm?.hanja, termEnglish: seedLanguageTerm?.english });
  return (
    <div className="home-page bg-paper">
      <section className="home-today-section border-b border-green-deep/15 bg-ivory" aria-labelledby="home-feature-title">
        <div className="container-page">
          <p className="section-kicker mb-3 sm:mb-4">EDITOR&apos;S PICK</p>
          {!featuredReady && <div className="min-h-[330px] animate-pulse rounded-xl bg-green-deep/8" aria-hidden="true" />}
          {featuredLead && (
            <article className="home-feature overflow-hidden rounded-xl bg-[#e9efe4] shadow-[0_18px_42px_rgba(28,54,66,0.18)] ring-1 ring-[#d5e1d5] lg:grid lg:min-h-[360px] lg:grid-cols-[1.05fr_.95fr]">
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
              <Link key={item.to} to={item.to} className="home-quick-card group min-w-0 overflow-hidden rounded-lg border border-green-deep/15 bg-white shadow-[0_8px_22px_rgba(28,54,66,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-green-deep/35 hover:shadow-[0_16px_32px_rgba(28,54,66,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep/40">
                <div className={`home-quick-thumb overflow-hidden ${item.term ? "bg-white" : "bg-green-pale"}`}>
                  {item.imageSrc ? <SafeImage src={resolveImageSrc(item.imageSrc)} alt={item.imageAlt || ""} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" /> : <div className="flex h-full min-w-0 flex-col items-center justify-center px-2 text-center">
                    <span className="editorial-title text-2xl font-black leading-tight text-navy sm:text-4xl">{ko ? item.term : item.termEnglish || item.term}</span>
                    {ko && item.termHanja && <span className="mt-2 text-sm font-bold leading-tight text-charcoal/55 sm:text-lg">{item.termHanja}</span>}
                    {ko && item.termEnglish && <span className="mt-1 max-w-full break-words text-[10px] font-black leading-tight tracking-[.04em] text-green-deep/70 sm:text-xs">{item.termEnglish}</span>}
                  </div>}
                </div>
                <div className="home-quick-copy min-w-0 p-3 sm:p-5"><span className="inline-flex rounded-full bg-green-pale px-2 py-0.5 text-[10px] font-extrabold text-green-deep sm:text-xs">{item.label}</span><h3 className="editorial-title mt-2 line-clamp-3 break-keep text-[.94rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:line-clamp-2 sm:text-[1.2rem]">{item.title}</h3><p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-charcoal/60 sm:text-sm sm:leading-6">{item.summary}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12" aria-labelledby="hot-issues-title">
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
                className="group flex h-full flex-col overflow-hidden rounded-lg border-t-[3px] border-green-deep bg-white shadow-[0_10px_26px_rgba(28,54,66,0.14)] ring-1 ring-green-deep/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(28,54,66,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
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

    </div>
  );
}
