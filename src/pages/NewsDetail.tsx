import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import SourceArticleCard from "../components/SourceArticleCard";
import { localizeNewsArticle } from "../data/localizedContent";
import { getNewsArticle } from "../data/news";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function NewsDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const originalArticle = getNewsArticle(slug);
  const article = originalArticle ? localizeNewsArticle(originalArticle, language) : undefined;

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "뉴스를 찾을 수 없습니다." : "News article not found."}</h1><Link to="/news" className="button-primary mt-7">{ko ? "뉴스 목록" : "News"}</Link></div>;

  const share = async () => {
    if (navigator.share) await navigator.share({ title: article.title, text: article.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert(ko ? "주소를 복사했습니다." : "Link copied."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-20">
      <div className="container-page max-w-5xl"><Link to="/news" className="text-link"><ArrowLeft size={16}/>{ko ? "씨드뉴스 목록" : "SEED News"}</Link><div className="mt-10 border-t-2 border-navy pt-8"><span className="section-kicker">{ko ? `씨드뉴스 ${String(article.issue).padStart(2, "0")}` : `SEED NEWS ${String(article.issue).padStart(2, "0")}`} · {article.category}</span><h1 className="editorial-title mt-5 max-w-4xl text-4xl font-bold leading-[1.1] text-navy sm:text-6xl">{article.title}</h1><p className="mt-5 max-w-4xl text-xl font-semibold leading-9 text-charcoal/70 sm:text-2xl">{article.subtitle}</p><p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/60">{article.summary}</p></div><div className="mt-9 flex flex-wrap items-center gap-5 border-t border-green-deep/10 pt-5 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span><button onClick={share} className="button-secondary ml-auto min-h-9 px-3 py-2 text-xs"><Share2 size={15}/>{ko ? "공유" : "Share"}</button></div></div>
    </header>

    <div className="container-page max-w-4xl py-12 sm:py-20">
      <SourceArticleCard news={article.selectedNews} ko={ko}/>
      <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]"><img src={imageSrc(article.heroImage.src)} alt={article.heroImage.alt} className="aspect-[16/9] w-full object-cover"/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{article.heroImage.caption}</span>{article.heroImage.sourceUrl ? <a href={article.heroImage.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{article.heroImage.credit}</a> : <span className="shrink-0">{article.heroImage.credit}</span>}</figcaption></figure>

      <div className="mx-auto mt-12 max-w-3xl">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-7 sm:px-8"><span className="section-kicker">{ko ? "오늘의 한 문장" : "ONE SENTENCE"}</span><p className="mt-3 font-serif text-xl font-bold leading-9 text-green-deep sm:text-2xl">{article.keySentence}</p></aside>

        {article.sections.map((section, index) => <section key={`${index}-${section.title}`} className="mt-16 border-t border-green-deep/10 pt-12">
          <span className="font-serif text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-2 text-2xl font-extrabold leading-snug text-navy sm:text-3xl">{section.title}</h2>
          {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 32)}`} className="mt-6 text-base leading-9 text-charcoal/80 sm:text-lg">{paragraph}</p>)}
          {section.bullets && <ul className="mt-7 grid gap-3 text-base leading-8 text-charcoal/75 sm:text-lg">{section.bullets.map((bullet, bulletIndex) => <li key={`${bulletIndex}-${bullet}`} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"/><span>{bullet}</span></li>)}</ul>}
          {index === Math.min(2, article.sections.length - 1) && <figure className="my-16 overflow-hidden border border-green-deep/10 bg-white"><img src={imageSrc(article.inlineImage.src)} alt={article.inlineImage.alt} className="aspect-[16/10] w-full object-cover"/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{article.inlineImage.caption}</span>{article.inlineImage.sourceUrl ? <a href={article.inlineImage.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{article.inlineImage.credit}</a> : <span className="shrink-0">{article.inlineImage.credit}</span>}</figcaption></figure>}
        </section>)}

        <section className="mt-16 border-t-2 border-navy pt-10"><span className="section-kicker">{ko ? "앞으로 확인할 지점" : "WHAT TO WATCH"}</span><ol className="mt-6 grid gap-4 sm:grid-cols-2">{article.watchPoints.map((point, index) => <li key={`${index}-${point}`} className="border border-green-deep/15 bg-white p-5"><span className="font-serif text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-semibold leading-7 text-navy">{point}</p></li>)}</ol></section>

        <aside className="mt-16 bg-green-deep px-6 py-10 text-white sm:px-10"><span className="text-xs font-bold tracking-[.22em] text-gold">SEED PERSPECTIVE</span><h2 className="mt-3 text-3xl font-extrabold">{ko ? "씨드의 관점" : "SEED's View"}</h2>{article.seedPerspective.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 32)}`} className="mt-6 text-base leading-9 text-white/80 sm:text-lg">{paragraph}</p>)}</aside>

        <section className="mt-16 border-t border-green-deep/15 pt-8"><span className="section-kicker">{ko ? "확인한 자료" : "SOURCES"}</span><p className="mt-3 text-xs leading-6 text-charcoal/45">{ko ? "기사 작성일 기준 공개된 공식자료와 보도를 교차 확인했습니다. 이후 정책 내용은 변경될 수 있습니다." : "Sources reflect public materials available at the time of writing. Later official decisions or policy changes may update the picture."}</p><ul className="mt-5 grid gap-3 text-sm leading-7 text-charcoal/65">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul></section>
        <CommentSection postSlug={article.slug} />
      </div>
    </div>
  </article>;
}
