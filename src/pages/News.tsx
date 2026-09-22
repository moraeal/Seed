import { ArrowRight, Clock, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleArchive from "../components/ArticleArchive";
import SafeImage from "../components/SafeImage";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const clusters = getHotIssueClusters(language);
  const clusteredPaths = new Set(clusters.flatMap((cluster) => cluster.items.map((item) => item.to)));
  const earlierIssues = getHotIssuesNewestFirst(language).filter((item) => !clusteredPaths.has(item.to));

  return (
    <section className="bg-paper pb-14 sm:pb-20">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <span className="section-kicker">HOT ISSUES</span>
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "지금 가장 뜨거운 네 가지 이슈" : "Four issues defining the moment"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko
              ? "하루의 기사 순서가 아니라, 계속 움직이는 문제의 흐름으로 읽습니다. 씨앗이 최근 집중해 온 기사·브리핑·칼럼·감시기록을 네 개의 이슈로 묶었습니다."
              : "Read the news as developing issues, not a daily stack of headlines. SEED VOICE groups its recent reporting, briefings, columns and watch records into four continuing stories."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-11">
        <nav className="grid gap-px overflow-hidden border border-green-deep/15 bg-green-deep/15 sm:grid-cols-2 lg:grid-cols-4" aria-label={ko ? "핫이슈 바로가기" : "Hot issue shortcuts"}>
          {clusters.map((cluster) => (
            <a key={cluster.id} href={`#${cluster.id}`} className="group flex min-h-[96px] gap-3 bg-white p-4 transition-colors hover:bg-green-pale/55 sm:p-5">
              <span className="text-xs font-black text-green-deep/45">{cluster.number}</span>
              <span className="editorial-title break-keep text-[.98rem] font-bold leading-snug text-navy transition group-hover:text-green-mid">{cluster.title}</span>
            </a>
          ))}
        </nav>

        <div className="mt-8 grid gap-7 sm:mt-10 sm:gap-10 xl:grid-cols-2">
          {clusters.map((cluster) => {
            const lead = cluster.items[0];
            const related = cluster.items.slice(1);

            return (
              <article id={cluster.id} key={cluster.id} className="scroll-mt-36 overflow-hidden border-t-[4px] border-navy bg-white shadow-[0_14px_38px_rgba(20,55,45,.07)]">
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-black tracking-[.12em] text-green-deep">
                      <Radio size={14} aria-hidden="true" />
                      <span>{ko ? "집중 이슈" : "FOCUS ISSUE"}</span>
                      <span className="text-charcoal/30">{cluster.number}</span>
                    </div>
                    <time className="text-[11px] font-semibold text-charcoal/40">{ko ? "최근 갱신 " : "Updated "}{cluster.updatedAt.replace(/-/g, ".")}</time>
                  </div>
                  <h2 className="editorial-title mt-3 break-keep text-[1.55rem] font-black leading-tight tracking-[-.025em] text-navy sm:text-[1.85rem]">{cluster.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-charcoal/62 sm:text-[15px]">{cluster.summary}</p>
                  <p className="mt-4 border-l-[3px] border-gold bg-ivory px-4 py-3 text-[13px] font-bold leading-6 text-navy">{cluster.focus}</p>
                </div>

                <Link to={lead.to} className="group block border-y border-green-deep/12 bg-ivory/35">
                  <div className="overflow-hidden bg-green-deep">
                    <SafeImage src={imageSrc(lead.imageSrc)} alt={lead.imageAlt} referrerPolicy="no-referrer" className="aspect-[16/8.2] w-full object-cover transition duration-500 group-hover:scale-[1.018]" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-black tracking-[.1em] text-green-deep">
                      <span>{ko ? "가장 최근 기사" : "LATEST"}</span>
                      <span className="tracking-normal text-charcoal/38">{lead.kindLabel}</span>
                    </div>
                    <h3 className="editorial-title mt-2 break-keep text-[1.25rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.45rem]">{lead.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-charcoal/58">{lead.summary}</p>
                    <div className="mt-4 flex items-center gap-3 border-t border-green-deep/10 pt-3 text-[11px] text-charcoal/42">
                      <time>{lead.date.replace(/-/g, ".")}</time>
                      {lead.readMinutes && <span className="inline-flex items-center gap-1"><Clock size={12} />{lead.readMinutes}{ko ? "분" : " min"}</span>}
                      {lead.status && <span className="font-bold text-green-deep/70">{lead.status}</span>}
                      <span className="ml-auto inline-flex items-center gap-1 font-extrabold text-green-deep">{ko ? "읽기" : "Read"}<ArrowRight size={13} /></span>
                    </div>
                  </div>
                </Link>

                <div className="divide-y divide-green-deep/12 px-5 sm:px-6">
                  {related.map((item, index) => (
                    <Link key={item.key} to={item.to} className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] gap-2.5 py-4 sm:grid-cols-[2.4rem_minmax(0,1fr)_auto] sm:gap-3.5">
                      <span className="pt-0.5 text-[11px] font-black text-charcoal/28">{String(index + 2).padStart(2, "0")}</span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold text-green-deep">
                          <span>{item.kindLabel}</span>
                          <time className="font-medium text-charcoal/36">{item.date.replace(/-/g, ".")}</time>
                        </div>
                        <h3 className="editorial-title mt-1 break-keep text-[1.02rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.08rem]">{item.title}</h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-charcoal/52 sm:text-[13px]">{item.summary}</p>
                      </div>
                      <ArrowRight size={15} className="mt-5 text-green-deep/55 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {earlierIssues.length > 0 && (
          <section className="mt-12 border-t-[3px] border-navy pt-5 sm:mt-16 sm:pt-7" aria-labelledby="earlier-hot-issues-title">
            <div className="grid gap-3 sm:grid-cols-[.75fr_1.25fr] sm:items-end">
              <div>
                <span className="section-kicker">MORE ISSUES</span>
                <h2 id="earlier-hot-issues-title" className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "기존 핫이슈도 이어서 살펴보기" : "Explore earlier hot issues"}</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-charcoal/58">{ko ? "네 개의 집중 이슈에 포함되지 않은 기존 기사와 쟁점 칼럼입니다. 최근 날짜부터 차례로 볼 수 있습니다." : "Reports and issue columns not included in the four focus packages, ordered from newest to oldest."}</p>
            </div>
            <ArticleArchive
              ko={ko}
              items={earlierIssues.map((item) => ({ key: item.key, to: item.to, title: item.title, summary: item.summary, date: item.date }))}
            />
          </section>
        )}
      </div>
    </section>
  );
}
