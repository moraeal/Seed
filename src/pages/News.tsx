import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getHotIssuesNewestFirst } from "../data/hotIssues";
import { useLanguage } from "../i18n";
import SafeImage from "../components/SafeImage";
import ArticleArchive, { RECENT_ARTICLE_COUNT } from "../components/ArticleArchive";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articles = getHotIssuesNewestFirst(language);
  const recentArticles = articles.slice(0, RECENT_ARTICLE_COUNT);
  const archiveArticles = articles.slice(RECENT_ARTICLE_COUNT);

  return <section className="bg-paper pb-12 sm:pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">HOT ISSUES</span><h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "핫이슈" : "Hot Issues"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "뉴스트래커가 쌓은 사실과 흐름을 바탕으로 사건의 핵심 쟁점과 시민에게 미치는 영향을 설명합니다. 빠르게 변하는 사안은 핵심 보도로, 판단이 필요한 사안은 쟁점 칼럼으로 다룹니다." : "Hot Issues explains the stakes and civic consequences behind the facts preserved in Civic Watch trackers. Fast-moving developments appear as essential reporting; issues requiring judgment appear as issue commentary."}</p>
      </div>
    </header>
    <div className="container-page py-8 sm:py-10">
      <div className="mb-4 flex items-end justify-between gap-4 border-b-2 border-navy pb-3">
        <div><span className="section-kicker">LATEST</span><h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "최근 기사" : "Latest articles"}</h2></div>
        <p className="text-xs font-semibold text-charcoal/45">{ko ? "최근 5건" : "Latest five"}</p>
      </div>
      <div>
        {recentArticles.map((article) => <Link key={article.key} to={article.to} className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
          <div className="relative overflow-hidden bg-green-deep"><SafeImage src={imageSrc(article.imageSrc)} alt={article.imageAlt} referrerPolicy="no-referrer" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /><span className="absolute bottom-2 left-2 rounded-sm bg-black/65 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">{article.kindLabel}</span></div>
          <div><div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-extrabold text-green-deep"><span>{article.kindLabel}</span>{article.status && <span className="text-charcoal/45">{article.status}</span>}</div><h2 className="editorial-title line-clamp-2 text-balance text-[1.3rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.575rem]">{article.title}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-base leading-7 text-charcoal/60">{article.summary}</p><div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time>{article.readMinutes && <span className="flex items-center gap-1"><Clock size={13}/>{ko ? `${article.readMinutes}분` : `${article.readMinutes} min`}</span>}<span className="ml-auto flex items-center gap-2 font-extrabold text-green-deep">{ko ? "핫이슈 보기" : "View issue"}<ArrowRight size={15}/></span></div></div>
        </Link>)}
      </div>
      <ArticleArchive ko={ko} items={archiveArticles.map((article) => ({ key: article.key, to: article.to, title: article.title, summary: article.summary, date: article.date }))} />
    </div>
  </section>;
}
