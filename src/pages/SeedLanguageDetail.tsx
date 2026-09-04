import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import FigureCaption from "../components/FigureCaption";
import { getSeedLanguageArticle } from "../data/seedLanguage";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function SeedLanguageDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const article = getSeedLanguageArticle(slug, language);

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "씨앗언어 글을 찾을 수 없습니다." : "SEED Language article not found."}</h1><Link to="/seed-language" className="button-primary mt-7">{ko ? "씨앗언어 목록" : "SEED Language"}</Link></div>;

  const share = async () => {
    if (navigator.share) await navigator.share({ title: article.title, text: article.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert(ko ? "주소를 복사했습니다." : "Link copied."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-8 sm:py-11">
      <div className="container-page max-w-5xl">
        <Link to="/seed-language" className="text-link"><ArrowLeft size={16}/>{ko ? "씨앗언어 목록" : "SEED Language"}</Link>
        <div className="mt-5 border-t-2 border-navy pt-5">
          <div className="flex items-center gap-3"><span className="section-kicker">SEED LANGUAGE</span><span className="rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep">{article.term}</span></div>
          <h1 className="editorial-title mt-3 max-w-4xl text-[1.6rem] font-bold leading-[1.15] text-navy sm:text-[2.625rem]">{article.title}</h1>
          <p className="mt-3 font-serif text-lg font-bold leading-7 text-green-deep sm:text-xl">{article.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-charcoal/65">{article.summary}</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span><button onClick={share} className="button-secondary ml-auto min-h-9 px-3 py-2 text-xs"><Share2 size={15}/>{ko ? "공유" : "Share"}</button></div>
      </div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-11">
      <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.09)]"><img src={imageSrc(article.heroImage.src)} alt={article.heroImage.alt} className="aspect-[16/9] w-full object-cover"/><FigureCaption caption={article.heroImage.caption} credit={article.heroImage.credit}/></figure>

      <div className="mx-auto mt-10 max-w-3xl">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">{ko ? "핵심 요약" : "KEY POINTS"}</span><ul className="mt-4 space-y-3">{article.keyPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-navy"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{point}</span></li>)}</ul></aside>

        {article.sections.map((section, index) => <section key={section.title} className="mt-9 border-t border-green-deep/10 pt-6">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 42)} className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">{paragraph}</p>)}
          {index === 6 && <figure className="my-8 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]"><img src={imageSrc(article.inlineImage.src)} alt={article.inlineImage.alt} className="aspect-[16/9] w-full object-cover"/><FigureCaption caption={article.inlineImage.caption} credit={article.inlineImage.credit}/></figure>}
        </section>)}

        <ContentAccountability postSlug={`seed-language-${article.slug}`} publishedDate={article.date}/>
        <CommentSection postSlug={`seed-language-${article.slug}`}/>
      </div>
    </div>
  </article>;
}
