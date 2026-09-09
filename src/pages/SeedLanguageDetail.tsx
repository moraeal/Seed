import { ArrowLeft, BookOpenText, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ArticleContinuation, { getFollowingItem } from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";

const ENVIRONMENT_HERO = "images/seed-language/environment-shared-condition-hero.webp";
const ENVIRONMENT_FEATURE_SLUG = "environment-shared-condition";
const ENVIRONMENT_DEEP_READ_SLUG = "environment-beyond-camps-deep-read";

export default function SeedLanguageDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const article = getSeedLanguageEnvironmentArticle(slug, language) ?? getSeedLanguageArticle(slug, language);

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "씨앗언어 글을 찾을 수 없습니다." : "SEED Language article not found."}</h1><Link to="/seed-language" className="button-primary mt-7">{ko ? "씨앗언어 목록" : "SEED Language"}</Link></div>;

  const nextArticleSource = getFollowingItem([...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo], article.slug);
  const nextArticle = nextArticleSource
    ? getSeedLanguageEnvironmentArticle(nextArticleSource.slug, language) ?? getSeedLanguageArticle(nextArticleSource.slug, language)
    : undefined;

  const isTypographyPilot = article.slug === "democracy-not-a-king";
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
        <Link to="/seed-language" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "씨앗언어 목록" : "SEED Language"}</Link>
        <div className="mt-3 border-t-2 border-navy pt-3">
          <div className="flex items-center gap-3"><span className="section-kicker">SEED LANGUAGE</span><span className="rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep">{article.term}</span></div>
          <h1 className={`${isTypographyPilot ? "font-sans font-extrabold" : "editorial-title font-bold"} mt-2 max-w-4xl text-[1.6rem] leading-[1.15] tracking-[-.035em] text-navy sm:text-[2.25rem]`}>{article.title}</h1>
          <p className={`mt-2 text-base font-bold leading-6 text-green-deep sm:text-lg ${isTypographyPilot ? "font-sans" : "font-serif"}`}>{article.subtitle}</p>
          <p className="article-summary">{article.summary}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
          <time>{article.date.replace(/-/g, ".")}</time>
          <span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            {deepReadHref && deepReadArticle && <Link to={deepReadHref} className="button-primary min-h-10 px-4 py-2 text-sm"><BookOpenText size={16}/>{ko ? `깊게 읽기 · ${deepReadArticle.readMinutes}분` : `Deep Read · ${deepReadArticle.readMinutes} min`}</Link>}
            <ShareButton title={article.title} text={article.summary} />
          </div>
        </div>
      </div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-11">
      {article.showTableOfContents && <nav id="article-contents" aria-labelledby="contents-title" className="mb-10 scroll-mt-28 border-t-2 border-navy bg-white px-5 py-6 sm:px-8">
        <h2 id="contents-title" className="editorial-title text-xl font-bold text-navy">{ko ? "목차로 먼저 읽기" : "Read the argument at a glance"}</h2>
        <p className="mt-2 text-sm leading-7 text-charcoal/65">{ko ? "각 항목은 이 글의 핵심 주장입니다. 목차만 읽어 흐름을 살피거나, 궁금한 항목을 눌러 본문으로 이동할 수 있습니다." : "Each entry states a central claim. Read this outline on its own, or select a section to explore the argument."}</p>
        <ol className="mt-5 divide-y divide-green-deep/10">{article.sections.map((section, index) => <li key={section.title}><a href={`#article-section-${index + 1}`} className="flex gap-4 py-4 text-navy hover:text-green-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-deep"><span className="pt-0.5 text-sm font-bold text-green-deep" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span><span className="block text-base font-bold leading-7">{section.title}</span>{section.overview && <span className="mt-1 block text-sm leading-6 text-charcoal/65">{section.overview}</span>}</span></a></li>)}</ol>
      </nav>}
      <InteractiveFigure src={heroImage.src} alt={heroImage.alt} caption={heroImage.caption} credit={heroImage.credit} figureClassName="overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.09)]" imageClassName="aspect-[16/9] w-full object-cover" />

      <div className="reading-column mt-10">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">{ko ? "핵심 요약" : "KEY POINTS"}</span><ul className="mt-4 space-y-3">{article.keyPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-navy"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{point}</span></li>)}</ul></aside>


        {article.sections.map((section, index) => <section id={`article-section-${index + 1}`} key={section.title} className={`article-section scroll-mt-28 ${isTypographyPilot ? "mt-9 border-t-0 pt-0 sm:mt-10 sm:pt-0" : ""}`}>
          <h2 className={`article-section-title ${isTypographyPilot ? "text-[1.4rem] leading-[1.35] sm:text-2xl" : ""}`}>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 42)} className={`article-copy ${isTypographyPilot ? "mt-3 leading-[1.78] sm:leading-[1.78]" : ""}`}>{paragraph}</p>)}
          {section.sourceIndices && <ul className="mt-4 space-y-2 border-l-2 border-green-deep/20 pl-4">{section.sourceIndices.map((sourceIndex) => article.sources?.[sourceIndex]).filter((source) => Boolean(source)).map((source) => source && <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm leading-6 text-green-deep underline underline-offset-4">{source.label}</a></li>)}</ul>}
          {(article.charts ?? (article.chart ? [article.chart] : [])).filter((chart) => index === chart.afterSection).map((chart, chartIndex) => <figure key={chart.title} className="my-9 border-y-2 border-green-deep bg-white" aria-labelledby={`comparison-${index}-${chartIndex}`}>
            <figcaption id={`comparison-${index}-${chartIndex}`} className="px-4 py-5 text-lg font-bold leading-7 text-navy sm:px-6">{chart.title}</figcaption>
            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={chart.title}><table className="w-full min-w-[300px] table-fixed border-collapse text-left text-sm leading-6"><thead className="bg-green-deep text-white"><tr>{chart.headers.map((header, column) => <th scope="col" key={header} className={`${column === 0 ? "w-[20%]" : "w-[40%]"} px-3 py-4 align-top font-bold sm:px-5`}>{header}</th>)}</tr></thead><tbody>{chart.rows.map((row) => <tr key={row[0]} className="border-b border-green-deep/15 odd:bg-green-pale/40"><th scope="row" className="px-3 py-4 align-top font-bold text-navy sm:px-5">{row[0]}</th><td className="px-3 py-4 align-top text-charcoal/80 sm:px-5">{row[1]}</td><td className="px-3 py-4 align-top text-green-deep sm:px-5">{row[2]}</td></tr>)}</tbody></table></div>
            <p className="px-4 py-4 text-sm leading-6 text-charcoal/65 sm:px-6">{chart.note}</p>
          </figure>)}
          {index === Math.min(article.inlineImageAfterSection ?? 6, article.sections.length - 1) && article.inlineImage && <InteractiveFigure src={article.inlineImage.src} alt={article.inlineImage.alt} caption={article.inlineImage.caption} credit={article.inlineImage.credit} figureClassName="my-8 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName="aspect-[16/9] w-full object-cover" />}
          {article.showTableOfContents && <a href="#article-contents" className="mt-4 inline-block text-sm font-semibold text-green-deep underline underline-offset-4">{ko ? "목차로 돌아가기" : "Back to contents"}</a>}
        </section>)}

        {article.sources && <aside className="my-10 border-t border-green-deep/20 pt-6"><h2 className="text-base font-bold text-navy">{ko ? "출처와 사실 확인" : "Sources and factual basis"}</h2><ul className="mt-4 space-y-3">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm leading-7 text-green-deep underline underline-offset-4">{source.label}</a></li>)}</ul></aside>}
        {article.relatedArticle && <Link to={`/seed-language/${article.relatedArticle.slug}`} className="my-8 flex items-center gap-3 border border-green-deep/20 bg-white px-5 py-4 text-base font-bold leading-7 text-green-deep hover:bg-green-pale"><BookOpenText size={20} className="shrink-0"/>{article.relatedArticle.label}</Link>}
        <ContentAccountability postSlug={`seed-language-${article.slug}`} publishedDate={article.date}/>
        <CommentSection postSlug={`seed-language-${article.slug}`}/>
        {nextArticle && <ArticleContinuation item={{ href: `/seed-language/${nextArticle.slug}`, title: nextArticle.title, summary: nextArticle.summary }} listHref="/seed-language" listLabel={ko ? "씨앗언어 전체 보기" : "All SEED Language"} />}
      </div>
    </div>
  </article>;
}
