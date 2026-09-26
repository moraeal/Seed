import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleContinuation from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import ColumnEmbeddedFigure from "../components/ColumnEmbeddedFigure";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import SourceDocumentPanel from "../components/SourceDocumentPanel";
import { getColumn, isHotIssueColumn } from "../data/columns";
import { localizeColumn } from "../data/localizedContent";
import { getArticleReadingPath } from "../data/articleReadingPaths";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
const imageKey = (src: string) => imageSrc(src).replace(/#.*$/, "").replace(/\?.*$/, "");

function InlineLinkedText({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;

    const [, label, href] = match;
    const className = "font-semibold text-green-deep underline decoration-green-deep/35 underline-offset-4 hover:decoration-green-deep";
    return href.startsWith("/")
      ? <Link key={`${href}-${index}`} to={href} className={className}>{label}</Link>
      : <a key={`${href}-${index}`} href={href} target="_blank" rel="noreferrer" className={className}>{label}</a>;
  })}</>;
}

export default function ColumnDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const originalColumn = getColumn(slug);
  const column = originalColumn ? localizeColumn(originalColumn, language) : undefined;

  if (!column) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "글을 찾을 수 없습니다." : "Article not found."}</h1><Link to="/columns" className="button-primary mt-7">{ko ? "칼럼 목록" : "Columns"}</Link></div>;

  const isLongRead = column.readMinutes >= 8;
  const hotIssue = isHotIssueColumn(column.slug);
  const readingPath = getArticleReadingPath("column", column.slug, language);

  const seenImages = new Set(column.displayHero === false ? [] : [imageKey(column.heroImage.src)]);
  const bodyImages = [
    ...(column.displayInlineImage === false ? [] : [{ ...column.inlineImage, afterSection: 3 }]),
    ...(column.additionalImages ?? []),
  ].filter((image) => {
    const key = imageKey(image.src);
    if (seenImages.has(key)) return false;
    seenImages.add(key);
    return true;
  });

  const referenceVideoSection = column.referenceVideo && <section className={`article-section ${isLongRead ? "article-section-long" : ""}`} aria-labelledby="reference-video-title">
    <span className="section-kicker">{ko ? "참고 영상" : "REFERENCE VIDEO"}</span>
    <h2 id="reference-video-title" className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{column.referenceVideo.title}</h2>
    <p className="mt-3 text-sm leading-6 text-charcoal/60 sm:text-[15px]">{column.referenceVideo.description}</p>
    <InteractiveFigure src={column.referenceVideo.thumbnailSrc} alt={column.referenceVideo.thumbnailAlt} caption={column.referenceVideo.description} credit={column.referenceVideo.credit} sourceUrl={`https://www.youtube.com/watch?v=${column.referenceVideo.youtubeId}`} youtubeId={column.referenceVideo.youtubeId} figureClassName="mt-5 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName="aspect-video w-full object-cover" />
  </section>;

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl">{hotIssue && <Link to="/news" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "핫이슈 목록" : "Hot Issues"}</Link>}<div className="pt-3"><h1 className="article-detail-title">{column.title}</h1>{column.slug === "real-estate-supervisor-citizens-accounts" && <p className="mt-4 text-sm leading-7 text-charcoal/80 sm:text-base">
        {ko ? "이 글은 김현정 의원이 2026년 9월 23일 재발의한 「부동산감독원 설치 및 운영에 관한 법률안」(의안번호 2221573)에 대한 논평입니다. " : "This commentary examines Rep. Kim Hyun-jung's revised Real Estate Supervisory Agency Bill, introduced on September 23, 2026 (bill no. 2221573). "}
        <Link to="/monitoring/legislation/bill-2221573/" className="font-semibold text-green-deep underline underline-offset-4">{ko ? "법안과 쟁점 보기" : "Bill and key issues"}</Link>
        <span className="mx-2 text-charcoal/35" aria-hidden="true">·</span>
        <a href="https://v.daum.net/v/20260923210127048" target="_blank" rel="noreferrer" className="font-semibold text-green-deep underline underline-offset-4">{ko ? "9월 23일 관련 보도 보기(아이뉴스24)" : "September 23 report (iNews24)"}</a>
      </p>}<p className="article-summary">{column.summary}</p></div><div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">{hotIssue && <span className="font-extrabold text-green-deep">{ko ? "핫이슈 · 쟁점 칼럼" : "HOT ISSUE · COMMENTARY"}</span>}<div className="group relative"><button type="button" aria-describedby={column.authorBio ? "column-author-bio" : undefined} className="font-extrabold text-green-deep underline decoration-green-deep/25 underline-offset-4 outline-none transition hover:text-navy focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">{column.author}</button>{column.authorBio && <div id="column-author-bio" role="tooltip" className="invisible absolute left-0 top-full z-30 mt-2 w-[min(22rem,calc(100vw-2rem))] translate-y-1 border border-green-deep/15 bg-white p-4 text-left text-sm font-normal leading-6 text-charcoal/70 opacity-0 shadow-[0_16px_45px_rgba(15,36,56,.18)] transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"><strong className="block text-sm font-extrabold text-navy">{column.author}</strong><span className="mt-1.5 block">{column.authorBio}</span></div>}</div><time>{column.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${column.readMinutes}분` : `${column.readMinutes} min read`}</span>{column.sourceDocument && <a href="#source-document" className="flex items-center gap-1 font-bold text-green-deep hover:underline"><FileText size={14}/>{ko ? "성명서 원문 대조" : "Compare source"}</a>}<ShareButton title={`${column.title} - ${column.subtitle}`} text={column.summary} className="ml-auto" /></div></div>
    </header>

    <div className="article-content-frame py-8 sm:py-12">
      {column.displayHero !== false && <InteractiveFigure src={column.heroImage.src} alt={column.heroImage.alt} caption={column.heroImage.caption} credit={column.heroImage.credit} sourceUrl={column.heroImage.sourceUrl} figureClassName="overflow-hidden bg-white shadow-[0_12px_34px_rgba(23,76,58,.08)]" imageClassName="aspect-[16/9] w-full object-cover" />}

      {column.sourceDocument && <SourceDocumentPanel document={column.sourceDocument} ko={ko} />}

      <div className="reading-column mt-10">
        {column.sections.map((section, index) => <Fragment key={`${index}-${section.title}`}><section className={index === 0 ? "" : `article-section ${isLongRead ? "article-section-long" : ""}`}>
          {section.title && <h2 className="article-section-title">{section.title}</h2>}
          {section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 28)}`} className={`article-copy ${isLongRead ? "article-copy-long" : ""}`}><InlineLinkedText text={paragraph}/></p>)}
          {section.quote && <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl">{section.quote.map((line, lineIndex) => <span key={`${lineIndex}-${line}`} className="block">{line}</span>)}</blockquote>}
          {bodyImages.filter((image) => image.afterSection === index).map((image) => <InteractiveFigure key={imageKey(image.src)} src={image.src} alt={image.alt} caption={image.caption} credit={image.credit} sourceUrl={image.sourceUrl} figureClassName="my-12 overflow-hidden bg-white shadow-[0_12px_34px_rgba(23,76,58,.08)]" imageClassName={"contain" in image && image.contain ? "block h-auto w-full" : "aspect-[16/10] w-full object-cover"} />)}
          {column.embeddedFigures?.filter((figure) => figure.afterSection === index).map((figure) => <ColumnEmbeddedFigure key={`${figure.kind}-${index}`} figure={figure} ko={ko} />)}
        </section>{column.referenceVideo?.afterSection === index && referenceVideoSection}</Fragment>)}
        {column.referenceVideo && column.referenceVideo.afterSection === undefined && referenceVideoSection}
        <aside className="mt-10 border-t-2 border-navy pt-6"><span className="section-kicker">{ko ? "자료 주" : "SOURCE NOTE"}</span><p className="mt-3 text-sm leading-6 text-charcoal/60">{column.sourceNote}</p>{column.sources && <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-charcoal/60">{column.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul>}</aside>
        <ContentAccountability postSlug={column.slug} publishedDate={column.date} />
        <CommentSection postSlug={column.slug} />
        <ArticleContinuation {...readingPath} />
      </div>
    </div>
  </article>;
}
