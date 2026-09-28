import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleArchive from "../components/ArticleArchive";
import SafeImage from "../components/SafeImage";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { useLanguage } from "../i18n";

const FEATURED_ISSUE_COUNT = 4;

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const clusters = getHotIssueClusters(language);
  const clusteredPaths = new Set(clusters.flatMap((cluster) => cluster.items.map((item) => item.to)));
  const standaloneIssues = getHotIssuesNewestFirst(language).filter((item) => !clusteredPaths.has(item.to));
  const issues = [
    ...clusters.map((cluster) => ({
      key: `cluster-${cluster.id}`, to: `/news/issues/${cluster.id}`,
      title: cluster.title, summary: cluster.summary, latestChange: cluster.latestChange, date: cluster.updatedAt,
      imageSrc: cluster.imageSrc, imageAlt: cluster.imageAlt,
      kindLabel: ko ? "현안 모음" : "Issue collection", readMinutes: undefined as number | undefined,
    })),
    ...standaloneIssues.map((issue) => ({ ...issue, latestChange: undefined as string | undefined })),
  ].sort((a, b) => b.date.localeCompare(a.date) ||
    Number(b.key.startsWith("cluster-")) - Number(a.key.startsWith("cluster-")));
  const featuredIssues = issues.slice(0, FEATURED_ISSUE_COUNT);
  const archiveIssues = issues.slice(FEATURED_ISSUE_COUNT);

  return (
    <section className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">HOT ISSUES</span>
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "핫이슈" : "Hot Issues"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko ? "한 번의 보도로 끝나지 않는 현안을 따라갑니다. 확인된 사실과 엇갈린 주장, 이후 달라진 내용을 모아 시민의 삶에 어떤 영향을 주는지 살펴봅니다." : "We follow issues beyond a single report. Read the established facts, competing claims, and later developments to understand what they mean for citizens' lives."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-10">
        <div className="mb-4 flex items-end justify-between gap-4 border-b-2 border-navy pb-3">
          <div><span className="section-kicker">LATEST</span><h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "꼭 보아야 할 현안 이슈" : "Essential issues to follow"}</h2></div>
          <p className="text-xs font-semibold text-charcoal/45">{ko ? "최근 4건" : "Latest four"}</p>
        </div>
        <div>
          {featuredIssues.map((issue, index) => (
            <Link key={issue.key} to={issue.to} className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
              <div className="overflow-hidden bg-green-deep">
                <SafeImage src={issue.imageSrc} alt={issue.imageAlt} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} referrerPolicy="no-referrer" className="aspect-[4/3] w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.025]" />
              </div>
              <div>
                <span className="section-kicker">{issue.kindLabel}</span>
                <h3 className="editorial-title line-clamp-2 text-balance text-[1.3rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.575rem]">{issue.title}</h3>
                <p className="mt-2 line-clamp-3 max-w-3xl text-base leading-7 text-charcoal/60">{issue.summary}</p>
                {issue.latestChange && <p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/60"><span className="font-bold text-green-deep">{ko ? "최근 변화" : "Latest development"} · </span>{issue.latestChange}</p>}
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45">
                  <time>{issue.date.replace(/-/g, ".")}</time>
                  {issue.readMinutes && <span className="flex items-center gap-1"><Clock size={13} />{ko ? `${issue.readMinutes}분` : `${issue.readMinutes} min`}</span>}
                  <span className="ml-auto flex items-center gap-2 font-extrabold text-green-deep">{ko ? "이슈 읽기" : "Read issue"}<ArrowRight size={15} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <ArticleArchive ko={ko} items={archiveIssues.map((issue) => ({ key: issue.key, to: issue.to, title: issue.title, summary: issue.latestChange ? `${issue.summary} ${ko ? "최근 변화:" : "Latest development:"} ${issue.latestChange}` : issue.summary, date: issue.date }))} />
      </div>
    </section>
  );
}
