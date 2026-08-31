import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getNewsNewestFirst } from "../data/news";

export default function News() {
  const articles = getNewsNewestFirst();

  return <section className="bg-paper pb-20 sm:pb-28">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">SEED NEWS</span><h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">씨드뉴스</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">매일 한 가지 정치·사회 뉴스를 확인된 사실과 맥락으로 정리합니다. 무엇이 발표됐고 무엇이 아직 확인되지 않았는지 구분한 뒤, 시민이 지켜볼 기준을 씨드의 관점으로 제안합니다.</p>
      </div>
    </header>
    <div className="container-page py-12 sm:py-16">
      <div className="border-t-2 border-navy">
        {articles.map((article) => <Link key={article.slug} to={`/news/${article.slug}`} className="group grid gap-7 border-b border-green-deep/15 py-9 md:grid-cols-[280px_1fr] md:items-center">
          <div className="overflow-hidden bg-green-deep"><img src={`${import.meta.env.BASE_URL}${article.heroImage.src}`} alt={article.heroImage.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
          <div><span className="section-kicker">씨드뉴스 {String(article.issue).padStart(2, "0")} · {article.category}</span><h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-4xl">{article.title}</h2><p className="mt-2 text-lg font-semibold text-charcoal/70">{article.subtitle}</p><p className="mt-5 max-w-3xl text-sm leading-7 text-charcoal/55">{article.summary}</p><div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13}/>{article.readMinutes}분</span><span className="ml-auto flex items-center gap-2 font-bold text-green-deep">뉴스 읽기<ArrowRight size={15}/></span></div></div>
        </Link>)}
      </div>
    </div>
  </section>;
}
