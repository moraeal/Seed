import { Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ArticleContinuation, { getFollowingItem } from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import { getColumn, getColumnsNewestFirst } from "../data/columns";
import { localizeColumn } from "../data/localizedContent";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
const imageKey = (src: string) => imageSrc(src).replace(/#.*$/, "").replace(/\?.*$/, "");

export default function ColumnDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const originalColumn = getColumn(slug);
  const column = originalColumn ? localizeColumn(originalColumn, language) : undefined;

  if (!column) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "글을 찾을 수 없습니다." : "Article not found."}</h1><Link to="/columns" className="button-primary mt-7">{ko ? "씨앗의 소리 목록" : "Voice of the Seed"}</Link></div>;

  const nextOriginalColumn = getFollowingItem(getColumnsNewestFirst(), column.slug);
  const nextColumn = nextOriginalColumn ? localizeColumn(nextOriginalColumn, language) : undefined;

  const seenImages = new Set([imageKey(column.heroImage.src)]);
  const bodyImages = [
    { ...column.inlineImage, afterSection: 3 },
    ...(column.additionalImages ?? []),
  ].filter((image) => {
    const key = imageKey(image.src);
    if (seenImages.has(key)) return false;
    seenImages.add(key);
    return true;
  });

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl"><div className="pt-3 text-center"><h1 className="editorial-title mx-auto max-w-4xl text-[1.75rem] font-bold leading-[1.14] text-navy sm:text-[2.5rem]">{column.title}</h1><p className="article-summary mx-auto">{column.summary}</p></div><div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45"><time>{column.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${column.readMinutes}분` : `${column.readMinutes} min read`}</span><ShareButton title={`${column.title} - ${column.subtitle}`} text={column.summary} className="ml-auto" /></div></div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-12">
      <InteractiveFigure src={column.heroImage.src} alt={column.heroImage.alt} caption={column.heroImage.caption} credit={column.heroImage.credit} sourceUrl={column.heroImage.sourceUrl} figureClassName="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]" imageClassName="aspect-[16/9] w-full object-cover" />

      <div className="reading-column mt-10">
        {column.sections.map((section, index) => <section key={`${index}-${section.title}`} className={index === 0 ? "" : "article-section"}>
          <h2 className="article-section-title">{section.title}</h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 28)}`} className="article-copy">{paragraph}</p>)}
          {section.quote && <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 font-serif text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl">{section.quote.map((line, lineIndex) => <span key={`${lineIndex}-${line}`} className="block">{line}</span>)}</blockquote>}
          {bodyImages.filter((image) => image.afterSection === index).map((image) => <InteractiveFigure key={imageKey(image.src)} src={image.src} alt={image.alt} caption={image.caption} credit={image.credit} sourceUrl={image.sourceUrl} figureClassName="my-12 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName={"contain" in image && image.contain ? "block h-auto w-full" : "aspect-[16/10] w-full object-cover"} />)}
        </section>)}
        {column.referenceVideo && <section className="mt-10 border-t border-green-deep/10 pt-8" aria-labelledby="reference-video-title">
          <span className="section-kicker">{ko ? "참고 영상" : "REFERENCE VIDEO"}</span>
          <h2 id="reference-video-title" className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{column.referenceVideo.title}</h2>
          <p className="mt-3 text-sm leading-6 text-charcoal/60 sm:text-[15px]">{column.referenceVideo.description}</p>
          <InteractiveFigure src={column.referenceVideo.thumbnailSrc} alt={column.referenceVideo.thumbnailAlt} caption={column.referenceVideo.description} credit={column.referenceVideo.credit} sourceUrl={`https://www.youtube.com/watch?v=${column.referenceVideo.youtubeId}`} youtubeId={column.referenceVideo.youtubeId} figureClassName="mt-5 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName="aspect-video w-full object-cover" />
        </section>}
        <aside className="mt-10 border-t-2 border-navy pt-6"><span className="section-kicker">{ko ? "자료 주" : "SOURCE NOTE"}</span><p className="mt-3 text-sm leading-6 text-charcoal/60">{column.sourceNote}</p>{column.sources && <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-charcoal/60">{column.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul>}</aside>
        <ContentAccountability postSlug={column.slug} publishedDate={column.date} />
        <CommentSection postSlug={column.slug} />
        {nextColumn && <ArticleContinuation item={{ href: `/columns/${nextColumn.slug}`, title: nextColumn.title, summary: nextColumn.summary }} listHref="/columns" listLabel={ko ? "칼럼 전체 보기" : "All columns"} />}
      </div>
    </div>
  </article>;
}
