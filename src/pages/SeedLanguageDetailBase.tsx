import { ArrowLeft, BookOpenText, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ArticleContinuation from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import DeepReadBanner from "../components/DeepReadBanner";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import { getEditorialContinuation } from "../data/editorialContinuations";
import { getSeedLanguageArticle } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";

const ENVIRONMENT_HERO = "images/seed-language/environment-shared-condition-hero.webp";
const ENVIRONMENT_FEATURE_SLUG = "environment-shared-condition";
const ENVIRONMENT_DEEP_READ_SLUG = "environment-beyond-camps-deep-read";

export default function SeedLanguageDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const article = getSeedLanguageEnvironmentArticle(slug, language) ?? getSeedLanguageArticle(slug, language);

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "시민언어 글을 찾을 수 없습니다." : "Glossary article not found."}</h1><Link to="/seed-language" className="button-primary mt-7">{ko ? "시민언어 목록" : "Glossary"}</Link></div>;

  const continuation = getEditorialContinuation("seed-language", article.slug, language);

  const isLongRead = article.readMinutes >= 8;
  const isProgressArticle = article.slug === "what-is-true-progress";
  const usesDarkBodyCopy = isProgressArticle || article.slug === "what-is-true-conservatism" || article.slug === "discourse-many-words-no-direction" || article.slug === "politics-is-a-citizens-tool";
  const isEnvironmentArticle = article.slug.startsWith("environment-");
  const relatedSlug = article.relatedArticle?.slug
    ?? (article.slug === ENVIRONMENT_FEATURE_SLUG ? ENVIRONMENT_DEEP_READ_SLUG : undefined);
  const relatedArticle = relatedSlug
    ? getSeedLanguageEnvironmentArticle(relatedSlug, language) ?? getSeedLanguageArticle(relatedSlug, language)
    : undefined;
  const deepReadArticle = relatedArticle && relatedArticle.readMinutes > article.readMinutes ? relatedArticle : undefined;
  const deepReadHref = deepReadArticle ? `/seed-language/${deepReadArticle.slug}` : null;
  const heroImage = isEnvironmentArticle ? {
    src: ENVIRONMENT_HERO,
    alt: ko
      ? "강과 녹지, 시민의 일상, 도시와 산업시설이 한 공간에서 공존하는 풍경"
      : "A river, green space, civic life, city and industry sharing one landscape",
    caption: ko
      ? "환경은 자연만 따로 떼어 보호하는 대상이 아니라 시민의 삶, 도시, 산업, 물과 에너지가 함께 만들어가는 생활 조건입니다."
      : "The environment is not nature isolated behind a boundary. It is the lived condition created together by civic life, cities, industry, water and energy.",
    credit: ko ? "씨앗의 소리 AI 제작 이미지" : "AI image produced by SEED VOICE",
  } : article.heroImage;

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl">
        <Link to="/seed-language" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "시민언어 목록" : "Glossary"}</Link>
        <div className="mt-3 border-t-2 border-navy pt-3">
          <div className="flex items-center gap-3"><span className="section-kicker">GLOSSARY</span><span className="rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep">{article.term}</span></div>
          <h1 className="article-detail-title mt-2">{article.title}</h1>
          <p className="article-detail-subtitle">{article.subtitle}</p>
          <p className="article-summary">{article.summary}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
          <time>{article.date.replace(/-/g, ".")}</time>
          <span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <ShareButton title={article.title} text={article.summary} />
          </div>
        </div>
      </div>
    </header>

    <div className="article-content-frame py-8 sm:py-11">
      <InteractiveFigure src={heroImage.src} alt={heroImage.alt} caption={heroImage.caption} credit={heroImage.credit} figureClassName="overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.09)]" imageClassName="aspect-[16/9] w-full object-cover" />

      <div className="reading-column mt-10">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">{ko ? "핵심 요약" : "KEY POINTS"}</span><ul className="mt-4 space-y-3">{article.keyPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-navy"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{point}</span></li>)}</ul></aside>

        {article.leadParagraphs && <div className={`article-section ${isLongRead ? "article-section-long" : ""}`}>{article.leadParagraphs.map((paragraph) => <p key={paragraph.slice(0, 42)} className={`article-copy ${isLongRead ? "article-copy-long" : ""} ${usesDarkBodyCopy ? "!text-charcoal" : ""}`}>{paragraph}</p>)}</div>}


        {article.sections.map((section, index) => <section id={`article-section-${index + 1}`} key={section.title} className={`article-section scroll-mt-28 ${isLongRead ? "article-section-long" : ""}`}>
          <h2 className="article-section-title">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 42)} className={`article-copy ${isLongRead ? "article-copy-long" : ""} ${usesDarkBodyCopy ? "!text-charcoal" : ""}`}>{paragraph}</p>)}
          {section.sourceIndices && <ul className="mt-4 space-y-2 border-l-2 border-green-deep/20 pl-4">{section.sourceIndices.map((sourceIndex) => article.sources?.[sourceIndex]).filter((source) => Boolean(source)).map((source) => source && <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm leading-6 text-green-deep underline underline-offset-4">{source.label}</a></li>)}</ul>}
          {(article.charts ?? (article.chart ? [article.chart] : [])).filter((chart) => index === chart.afterSection).map((chart, chartIndex) => <figure key={chart.title} className="my-9 border-y-2 border-green-deep bg-white" aria-labelledby={`comparison-${index}-${chartIndex}`}>
            <figcaption id={`comparison-${index}-${chartIndex}`} className="px-4 py-5 text-lg font-bold leading-7 text-navy sm:px-6">{chart.title}</figcaption>
            <div className="max-w-full overflow-x-auto" tabIndex={0} role="region" aria-label={chart.title}><table className="w-full min-w-0 table-fixed border-collapse text-left text-[11px] leading-[1.55] sm:text-sm sm:leading-6"><thead className="bg-green-deep text-white"><tr>{chart.headers.map((header, column) => <th scope="col" key={header} className={`${column === 0 ? "w-[22%]" : column === 1 ? "w-[30%]" : "w-[48%]"} break-words px-2 py-3 align-top font-bold [overflow-wrap:anywhere] sm:px-5 sm:py-4 sm:[word-break:keep-all]`}>{header}</th>)}</tr></thead><tbody>{chart.rows.map((row) => <tr key={row[0]} className="border-b border-green-deep/15 odd:bg-green-pale/40"><th scope="row" className="break-words px-2 py-3 align-top font-bold text-navy [overflow-wrap:anywhere] sm:px-5 sm:py-4 sm:[word-break:keep-all]">{row[0]}</th><td className="break-words px-2 py-3 align-top text-charcoal/80 [overflow-wrap:anywhere] sm:px-5 sm:py-4 sm:[word-break:keep-all]">{row[1]}</td><td className="break-words px-2 py-3 align-top text-green-deep [overflow-wrap:anywhere] sm:px-5 sm:py-4 sm:[word-break:keep-all]">{row[2]}</td></tr>)}</tbody></table></div>
            <p className="px-4 py-4 text-sm leading-6 text-charcoal/65 sm:px-6">{chart.note}</p>
          </figure>)}
          {index === Math.min(article.inlineImageAfterSection ?? 6, article.sections.length - 1) && article.inlineImage && <InteractiveFigure src={article.inlineImage.src} alt={article.inlineImage.alt} caption={article.inlineImage.caption} credit={article.inlineImage.credit} figureClassName="my-8 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName="aspect-[16/9] w-full object-cover" />}
          {index === Math.min(article.secondaryImageAfterSection ?? 6, article.sections.length - 1) && article.secondaryImage && <InteractiveFigure src={article.secondaryImage.src} alt={article.secondaryImage.alt} caption={article.secondaryImage.caption} credit={article.secondaryImage.credit} figureClassName="my-8 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName="aspect-[16/9] w-full object-cover" />}
        </section>)}

        {article.sources && <aside className="my-10 border-t border-green-deep/20 pt-6"><h2 className="text-base font-bold text-navy">{ko ? "출처와 사실 확인" : "Sources and factual basis"}</h2><ul className="mt-4 space-y-3">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm leading-7 text-green-deep underline underline-offset-4">{source.label}</a></li>)}</ul></aside>}
        {deepReadHref && deepReadArticle
          ? <DeepReadBanner href={deepReadHref} />
          : article.relatedArticle && <Link to={`/seed-language/${article.relatedArticle.slug}`} className="my-8 flex items-center gap-3 border border-green-deep/20 bg-white px-5 py-4 text-base font-bold leading-7 text-green-deep hover:bg-green-pale"><BookOpenText size={20} className="shrink-0"/>{article.relatedArticle.label}</Link>}
        <ContentAccountability postSlug={`seed-language-${article.slug}`} publishedDate={article.date}/>
        <CommentSection postSlug={`seed-language-${article.slug}`}/>
        {continuation && continuation.href !== deepReadHref && <ArticleContinuation item={continuation} />}
      </div>
    </div>
  </article>;
}
