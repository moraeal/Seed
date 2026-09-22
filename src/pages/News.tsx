import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { useLanguage } from "../i18n";

const INITIAL_MORE_ISSUES = 9;
const RISING_ISSUE_KEY = "news-dmz-security-command-failure";

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [showAll, setShowAll] = useState(false);
  const clusters = getHotIssueClusters(language);
  const clusteredPaths = new Set(clusters.flatMap((cluster) => cluster.items.map((item) => item.to)));
  const moreIssues = getHotIssuesNewestFirst(language).filter((item) => !clusteredPaths.has(item.to));
  const risingIssue = moreIssues.find((item) => item.key === RISING_ISSUE_KEY) ?? moreIssues[0];
  const remainingIssues = moreIssues.filter((item) => item.key !== risingIssue?.key);
  const visibleMoreIssues = showAll ? remainingIssues : remainingIssues.slice(0, INITIAL_MORE_ISSUES);

  return (
    <section className="bg-paper pb-14 sm:pb-20">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page py-9 sm:py-12">
          <span className="section-kicker">HOT ISSUES</span>
          <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">
            {ko ? "꼭 보아야 할 현안 이슈" : "Essential issues to follow"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/62 sm:text-base">
            {ko
              ? "지금 시민이 알아야 할 네 가지 흐름을 씨앗의 관점으로 정리합니다."
              : "Four developing issues citizens need to understand now, organized from SEED VOICE's perspective."}
          </p>
        </div>
      </header>

      <div className="container-page py-7 sm:py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {clusters.map((cluster, index) => (
            <Link
              to={`/news/issues/${cluster.id}`}
              key={cluster.id}
              className="group flex h-full flex-col overflow-hidden border-t-4 border-green-deep bg-white shadow-[0_12px_32px_rgba(20,55,45,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(20,55,45,.11)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
            >
              <div className="overflow-hidden bg-ivory">
                <SafeImage
                  src={cluster.imageSrc}
                  alt={cluster.imageAlt}
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  referrerPolicy="no-referrer"
                  className="aspect-[16/8.6] w-full object-cover transition duration-500 group-hover:scale-[1.018]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-charcoal/42">
                  <span>{ko ? "최근 변화" : "LATEST CHANGE"}</span>
                  <time>{cluster.updatedAt.replace(/-/g, ".")}</time>
                </div>
                <h2 className="editorial-title mt-2.5 break-keep text-[1.3rem] font-black leading-tight tracking-[-.02em] text-navy transition group-hover:text-green-mid sm:text-[1.5rem]">
                  {cluster.title}
                </h2>
                <p className="mt-2.5 line-clamp-2 text-[13px] leading-6 text-charcoal/60 sm:text-sm">{cluster.latestChange}</p>
                <div className="mt-auto flex items-end justify-between gap-4 border-t border-green-deep/12 pt-4">
                  <p className="border-l-[3px] border-gold pl-3 text-xs font-bold leading-5 text-navy sm:text-[13px]">{cluster.focus.replace(/^지금 볼 질문 · |^Question now · /, "")}</p>
                  <ArrowRight size={17} className="mb-0.5 shrink-0 text-green-deep transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {risingIssue && (
          <section className="mt-9 grid gap-8 border-y border-t-[3px] border-green-deep/15 border-t-navy pb-5 pt-5 sm:mt-12 sm:pb-6 sm:pt-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-10" aria-label={ko ? "새롭게 떠오르는 이슈와 더 살펴볼 이슈" : "Rising and further issues"}>
            <div className="flex h-full flex-col">
              <header>
                <span className="section-kicker">RISING ISSUE</span>
                <h2 className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">
                  {ko ? "지금 막 떠오르는 이슈" : "An issue now emerging"}
                </h2>
              </header>

              <Link to={risingIssue.to} className="group mt-4 flex flex-1 flex-col">
                <div className="relative overflow-hidden bg-ivory">
                  <SafeImage
                    src={risingIssue.imageSrc}
                    alt={risingIssue.imageAlt}
                    referrerPolicy="no-referrer"
                    className="aspect-[16/8.7] w-full object-cover transition duration-500 group-hover:scale-[1.018]"
                  />
                  <span className="absolute left-0 top-0 bg-green-deep px-3 py-2 text-[10px] font-black tracking-[.12em] text-white">{risingIssue.kindLabel}</span>
                </div>
                <div className="flex flex-1 flex-col pt-3">
                  <div className="flex items-center justify-between gap-3 text-[11px] font-semibold text-charcoal/42">
                    <span>{ko ? "새로 주목할 흐름" : "NEWLY EMERGING"}</span>
                    <time>{risingIssue.date.replace(/-/g, ".")}</time>
                  </div>
                  <h3 className="editorial-title mt-2 break-keep text-[1.35rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.65rem]">{risingIssue.title}</h3>
                  <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-charcoal/60 sm:text-sm sm:leading-7">{risingIssue.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs font-extrabold text-green-deep">{ko ? "이슈 읽기" : "Read issue"}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true"/></span>
                </div>
              </Link>
            </div>

            <div className="flex h-full flex-col">
              <header className="flex items-end justify-between gap-4">
                <div>
                  <span className="section-kicker">MORE ISSUES</span>
                  <h2 id="more-hot-issues-title" className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">
                    {ko ? "더 살펴볼 이슈" : "More issues to explore"}
                  </h2>
                </div>
                {remainingIssues.length > INITIAL_MORE_ISSUES && (
                  <button
                    type="button"
                    onClick={() => setShowAll((current) => !current)}
                    aria-expanded={showAll}
                    className="inline-flex shrink-0 items-center gap-2 py-2 text-xs font-extrabold text-green-deep hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:text-sm"
                  >
                    {showAll ? (ko ? "간단히 보기" : "Show less") : (ko ? "전체 보기" : "View all")}
                    <ArrowRight size={14} className={showAll ? "rotate-[-90deg]" : ""} aria-hidden="true" />
                  </button>
                )}
              </header>

              <div className="mt-4 flex-1">
                {visibleMoreIssues.map((item) => (
                  <Link key={item.key} to={item.to} className="group grid gap-1 border-t border-green-deep/15 py-3.5 sm:grid-cols-[6.5rem_minmax(0,1fr)_5.8rem] sm:items-center sm:gap-3 sm:py-4">
                    <span className="text-[10px] font-extrabold tracking-[.08em] text-green-deep">{item.kindLabel}</span>
                    <h3 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.05rem]">{item.title}</h3>
                    <time className="text-[11px] font-medium text-charcoal/40 sm:text-right">{item.date.replace(/-/g, ".")}</time>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
