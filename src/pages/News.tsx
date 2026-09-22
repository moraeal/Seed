import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { useLanguage } from "../i18n";

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const clusters = getHotIssueClusters(language);
  const clusteredPaths = new Set(clusters.flatMap((cluster) => cluster.items.map((item) => item.to)));
  const moreIssues = getHotIssuesNewestFirst(language).filter((item) => !clusteredPaths.has(item.to));

  return (
    <section className="bg-paper pb-14 sm:pb-20">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <span className="section-kicker">HOT ISSUES</span>
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">
              {ko ? "꼭 보아야 할 현안 이슈" : "Essential issues to follow"}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko
              ? "계속 움직이는 문제의 흐름을 한눈에 읽을 수 있도록, 씨앗이 최근 집중해 온 기사·브리핑·칼럼·감시기록을 네 개의 현안으로 묶었습니다."
              : "SEED VOICE groups its recent reporting, briefings, columns and watch records into four continuing issues, so readers can grasp each developing story at a glance."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-11">
        <div className="grid gap-6 lg:grid-cols-2">
          {clusters.map((cluster) => (
            <article id={cluster.id} key={cluster.id} className="scroll-mt-36 border border-green-deep/15 bg-white p-5 shadow-[0_12px_30px_rgba(20,55,45,.055)] sm:p-6">
              <header className="border-b-[3px] border-navy pb-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-black tracking-[.14em] text-green-deep">
                    {ko ? `현안 이슈 ${cluster.number}` : `ISSUE ${cluster.number}`}
                  </p>
                  <time className="text-[11px] font-semibold text-charcoal/40">
                    {ko ? "최근 갱신 " : "Updated "}{cluster.updatedAt.replace(/-/g, ".")}
                  </time>
                </div>
                <h2 className="editorial-title mt-2.5 break-keep text-[1.35rem] font-black leading-tight tracking-[-.02em] text-navy sm:text-[1.55rem]">
                  {cluster.title}
                </h2>
                <p className="mt-2.5 line-clamp-3 text-[13px] leading-6 text-charcoal/60 sm:text-sm">{cluster.summary}</p>
                <p className="mt-3 border-l-[3px] border-gold bg-ivory px-3 py-2.5 text-xs font-bold leading-5 text-navy sm:text-[13px]">
                  {cluster.focus}
                </p>
              </header>

              <div className="divide-y divide-green-deep/15">
                {cluster.items.map((item, index) => (
                  <Link key={item.key} to={item.to} className="group grid grid-cols-[1.8rem_minmax(0,1fr)_auto] gap-2.5 py-3.5 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:gap-3">
                    <span className="pt-0.5 text-[11px] font-black text-green-deep/45">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold text-green-deep">
                        <span>{item.kindLabel}</span>
                        <time className="font-medium text-charcoal/38">{item.date.replace(/-/g, ".")}</time>
                      </div>
                      <h3 className="editorial-title mt-1 break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{item.title}</h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-charcoal/54 sm:text-[13px]">{item.summary}</p>
                    </div>
                    <ArrowRight size={14} className="mt-5 text-green-deep/55 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        {moreIssues.length > 0 && (
          <section className="mt-6 border border-green-deep/15 bg-white p-5 shadow-[0_12px_30px_rgba(20,55,45,.055)] sm:p-6" aria-labelledby="more-hot-issues-title">
            <header className="grid gap-3 border-b-[3px] border-navy pb-4 sm:grid-cols-[.75fr_1.25fr] sm:items-end">
              <div>
                <span className="section-kicker">MORE ISSUES</span>
                <h2 id="more-hot-issues-title" className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">
                  {ko ? "더 살펴볼 이슈" : "More issues to explore"}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-charcoal/58">
                {ko
                  ? "네 개의 현안 이슈에 포함되지 않은 주요 기사와 쟁점 칼럼을 최근 날짜부터 살펴봅니다."
                  : "Explore major reports and issue columns beyond the four current packages, ordered from newest to oldest."}
              </p>
            </header>

            <div className="grid gap-x-8 md:grid-cols-2">
              {moreIssues.map((item, index) => (
                <Link key={item.key} to={item.to} className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] gap-3 border-b border-green-deep/15 py-4 sm:px-1">
                  <span className="pt-0.5 text-[11px] font-black text-green-deep/45">{String(index + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold text-green-deep">
                      <span>{item.kindLabel}</span>
                      <time className="font-medium text-charcoal/38">{item.date.replace(/-/g, ".")}</time>
                    </div>
                    <h3 className="editorial-title mt-1 line-clamp-2 break-keep text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-charcoal/54 sm:text-[13px]">{item.summary}</p>
                  </div>
                  <ArrowRight size={14} className="mt-5 text-green-deep/55 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
