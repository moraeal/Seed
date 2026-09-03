import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import { getColumn } from "../data/columns";
import { localizeColumn } from "../data/localizedContent";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function ColumnDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const originalColumn = getColumn(slug);
  const column = originalColumn ? localizeColumn(originalColumn, language) : undefined;

  if (!column) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "글을 찾을 수 없습니다." : "Article not found."}</h1><Link to="/columns" className="button-primary mt-7">{ko ? "씨앗의 소리 목록" : "Voice of the Seed"}</Link></div>;

  const share = async () => {
    if (navigator.share) await navigator.share({ title: `${column.title} - ${column.subtitle}`, text: column.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert(ko ? "주소를 복사했습니다." : "Link copied."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-20">
      <div className="container-page max-w-5xl"><Link to="/columns" className="text-link"><ArrowLeft size={16}/>{ko ? "씨앗의 소리 목록" : "Voice of the Seed"}</Link><div className="mt-10 border-t-2 border-navy pt-8"><h1 className="editorial-title max-w-4xl text-5xl font-bold leading-[1.08] text-navy sm:text-7xl">{column.title}</h1><p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/60">{column.summary}</p></div><div className="mt-9 flex flex-wrap items-center gap-5 border-t border-green-deep/10 pt-5 text-xs text-charcoal/45"><time>{column.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${column.readMinutes}분` : `${column.readMinutes} min read`}</span><button onClick={share} className="button-secondary ml-auto min-h-9 px-3 py-2 text-xs"><Share2 size={15}/>{ko ? "공유" : "Share"}</button></div></div>
    </header>

    <div className="container-page max-w-4xl py-12 sm:py-20">
      <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]"><img src={imageSrc(column.heroImage.src)} alt={column.heroImage.alt} className="aspect-[16/9] w-full object-cover"/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{column.heroImage.caption}</span>{column.heroImage.sourceUrl ? <a href={column.heroImage.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{column.heroImage.credit}</a> : <span className="shrink-0">{column.heroImage.credit}</span>}</figcaption></figure>

      <div className="mx-auto mt-16 max-w-3xl">
        {column.sections.map((section, index) => <section key={`${index}-${section.title}`} className={`${index === 0 ? "" : "mt-16 border-t border-green-deep/10 pt-12"}`}>
          <h2 className="text-2xl font-extrabold leading-snug text-navy sm:text-3xl">{section.title}</h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 28)}`} className="mt-6 text-base leading-9 text-charcoal/80 sm:text-lg">{paragraph}</p>)}
          {section.quote && <blockquote className="my-10 border-l-4 border-gold bg-green-pale px-6 py-7 font-serif text-lg font-bold leading-9 text-green-deep sm:px-8 sm:text-xl">{section.quote.map((line, lineIndex) => <span key={`${lineIndex}-${line}`} className="block">{line}</span>)}</blockquote>}
          {index === 3 && <figure className="my-20 overflow-hidden border border-green-deep/10 bg-white"><img src={imageSrc(column.inlineImage.src)} alt={column.inlineImage.alt} className="aspect-[16/10] w-full object-cover"/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{column.inlineImage.caption}</span>{column.inlineImage.sourceUrl ? <a href={column.inlineImage.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{column.inlineImage.credit}</a> : <span className="shrink-0">{column.inlineImage.credit}</span>}</figcaption></figure>}
          {column.additionalImages?.filter((image) => image.afterSection === index).map((image) => <figure key={image.src} className="my-20 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]"><img src={imageSrc(image.src)} alt={image.alt} className={`aspect-[16/10] w-full ${image.contain ? "object-contain p-3 sm:p-6" : "object-cover"}`}/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{image.caption}</span>{image.sourceUrl ? <a href={image.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{image.credit}</a> : <span className="shrink-0">{image.credit}</span>}</figcaption></figure>)}
        </section>)}
        <aside className="mt-16 border-t-2 border-navy pt-8"><span className="section-kicker">{ko ? "자료 주" : "SOURCE NOTE"}</span><p className="mt-4 text-sm leading-7 text-charcoal/60">{column.sourceNote}</p>{column.sources && <ul className="mt-5 grid gap-2 text-sm leading-6 text-charcoal/60">{column.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul>}</aside>
        <CommentSection postSlug={column.slug} />
      </div>
    </div>
  </article>;
}
