import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleArchive from "../components/ArticleArchive";
import SafeImage from "../components/SafeImage";
import { getHotIssueCards } from "../data/hotIssueSelection";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";
import { useLanguage } from "../i18n";
import { useFeaturedContent } from "../hooks/useFeaturedContent";
import { formatFeaturedDate } from "../data/featuredHistory";

const FEATURED_ISSUE_COUNT = 4;

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const { history, ready, historyError } = useFeaturedContent();
  const [legislativeBills, setLegislativeBills] = useState<LegislativeBill[]>([]);
  useEffect(() => {
    let active = true;
    void getPublishedLegislativeBills(1000).then((bills) => {
      if (active) setLegislativeBills(bills);
    }).catch(() => { /* Static published content stays available. */ });
    return () => { active = false; };
  }, []);
  const issues = getHotIssueCards(language, legislativeBills, history).map((card) => ({
    ...card,
    key: card.id,
    date: formatFeaturedDate(card.updatedAt),
    summary: card.latestChange,
    latestChange: undefined as string | undefined,
    kindLabel: ko ? "메인에서 소개한 글" : "Featured on our homepage",
    readMinutes: undefined as number | undefined,
  }));
  const featuredIssues = issues.slice(0, FEATURED_ISSUE_COUNT);
  const archiveIssues = issues.slice(FEATURED_ISSUE_COUNT);

  return (
    <section className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-3 py-5 sm:py-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="section-kicker">HOT ISSUES</span>
            <h1 className="editorial-title mt-1.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "핫이슈" : "Hot Issues"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-charcoal/65">
            {ko ? "메인페이지에서 소개했던 글을 모았습니다. 메인에 최근에 올린 글부터 순서대로 다시 읽을 수 있습니다." : "Explore stories previously featured on our homepage, ordered by when they were featured, newest first."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-10">
        <div className="mb-4 flex items-end justify-between gap-4 border-b-2 border-navy pb-3">
          <div><span className="section-kicker">LATEST</span><h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "메인에서 소개한 글" : "Stories from our homepage"}</h2></div>
          <p className="text-xs font-semibold text-charcoal/45">{ko ? "최근 소개한 글" : "Recently featured"}</p>
        </div>
        {issues.length === 0 && <p className="py-8 text-sm text-charcoal/55" role="status">{!ready ? (ko ? "불러오는 중입니다." : "Loading stories.") : historyError ? (ko ? "소개한 글을 불러오지 못했습니다. 잠시 후 다시 확인해주세요." : "Could not load featured stories. Please try again shortly.") : (ko ? "메인에서 소개한 글이 이곳에 차례로 쌓입니다." : "Featured stories will appear here in order.")}</p>}
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
                  <time>{ko ? "메인 소개일" : "Featured on"} · {issue.date}</time>
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
