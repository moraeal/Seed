import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { useLanguage } from "../i18n";

export default function News() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articles = getNewsNewestFirst().map((article) => localizeNewsArticle(article, language));

  return <section className="bg-paper pb-20 sm:pb-28">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">TODAY'S NEWS</span><h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">{ko ? "오늘의뉴스" : "Today's News"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "매일 한 가지 정치·사회 뉴스를 확인된 사실과 맥락으로 정리합니다. 무엇이 발표됐고 무엇이 아직 확인되지 않았는지 구분한 뒤, 시민이 지켜볼 기준을 씨앗의 소리의 관점으로 제안합니다." : "Today's News explains current political and social issues through verified facts and context. We distinguish what is confirmed from what remains uncertain, then identify practical points citizens should continue to watch."}</p>
      </div>
    </header>
    <div className="container-page py-12 sm:py-16">
      <div className="border-t-2 border-navy">
        {articles.map((article) => <Link key={article.slug} to={`/news/${article.slug}`} className="group grid gap-7 border-b border-green-deep/15 px-5 py-9 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
          <div className="overflow-hidden bg-green-deep"><img src={`${import.meta.env.BASE_URL}${article.heroImage.src.replace(/^\//, "")}`} alt={article.heroImage.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
          <div><h2 className="editorial-title text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-4xl">{article.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/55">{article.summary}</p><div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13}/>{ko ? `${article.readMinutes}분` : `${article.readMinutes} min`}</span><span className="ml-auto flex items-center gap-2 font-bold text-green-deep">{ko ? "뉴스 읽기" : "Read news"}<ArrowRight size={15}/></span></div></div>
        </Link>)}
      </div>
    </div>
  </section>;
}
