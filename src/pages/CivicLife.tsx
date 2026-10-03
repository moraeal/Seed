import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getCivicLifeArticles } from "../data/civicSections";
import { useLanguage } from "../i18n";

export default function CivicLife() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articles = getCivicLifeArticles(language);
  return <div className="container-page py-8 sm:py-12">
    <header className="border-b-2 border-navy pb-6">
      <h1 className="editorial-title text-3xl font-black text-navy sm:text-4xl">{ko ? "시민생활" : "Civic Life"}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal/70">{ko ? "일상의 이야기부터 이웃, 일자리, 주거와 건강까지, 시민의 생활에 닿는 글을 모았습니다." : "Stories of everyday life, neighbors, work, housing and health."}</p>
    </header>
    <div className="mt-6 space-y-6">
      {articles.map((article) => <Link key={article.path} to={article.path} className="group grid gap-4 border-b border-green-deep/15 pb-6 transition hover:border-green-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-deep sm:grid-cols-[220px_minmax(0,1fr)]">
        <SafeImage src={article.image.src} alt={article.image.alt} className="aspect-[16/9] w-full object-cover shadow-sm" />
        <article>
          <p className="text-sm text-charcoal/55">{article.categoryLabel}<span className="mx-2">·</span>{article.date.replace(/-/g, ".")}</p>
          <h2 className="mt-2 text-xl font-bold leading-8 text-navy group-hover:text-green-mid">{article.title}</h2>
          <p className="mt-2 text-base leading-7 text-charcoal/75">{article.summary}</p>
          <span className="mt-3 inline-block text-sm font-bold text-green-deep underline underline-offset-4">{ko ? "자세히 읽기" : "Read more"}</span>
        </article>
      </Link>)}
    </div>
  </div>;
}
