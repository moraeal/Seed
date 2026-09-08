import { ArrowLeft, BookOpenText, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import InteractiveFigure from "../components/InteractiveFigure";
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

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "씨앗언어 글을 찾을 수 없습니다." : "SEED Language article not found."}</h1><Link to="/seed-language" className="button-primary mt-7">{ko ? "씨앗언어 목록" : "SEED Language"}</Link></div>;

  const isEnvironmentArticle = article.slug.startsWith("environment-");
  const deepReadHref = article.slug === ENVIRONMENT_FEATURE_SLUG ? `/seed-language/${ENVIRONMENT_DEEP_READ_SLUG}` : null;
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

  const share = async () => {
    if (navigator.share) await navigator.share({ title: article.title, text: article.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert(ko ? "주소를 복사했습니다." : "Link copied."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl">
        <Link to="/seed-language" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "씨앗언어 목록" : "SEED Language"}</Link>
        <div className="mt-3 border-t-2 border-navy pt-3">
          <div className="flex items-center gap-3"><span className="section-kicker">SEED LANGUAGE</span><span className="rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep">{article.term}</span></div>
          <h1 className="editorial-title mt-2 max-w-4xl text-[1.6rem] font-bold leading-[1.15] text-navy sm:text-[2.25rem]">{article.title}</h1>
          <p className="mt-2 font-serif text-base font-bold leading-6 text-green-deep sm:text-lg">{article.subtitle}</p>
          <p className="article-summary">{article.summary}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
          <time>{article.date.replace(/-/g, ".")}</time>
          <span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            {deepReadHref && <Link to={deepReadHref} className="button-primary min-h-8 px-3 py-1.5 text-xs"><BookOpenText size={15}/>{ko ? "깊게 읽기 · 13분" : "Deep Read · 13 min"}</Link>}
            <button onClick={share} className="button-secondary min-h-8 px-3 py-1.5 text-xs"><Share2 size={15}/>{ko ? "공유" : "Share"}</button>
          </div>
        </div>
      </div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-11">
      <InteractiveFigure src={heroImage.src} alt={heroImage.alt} caption={heroImage.caption} credit={heroImage.credit} figureClassName="overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.09)]" imageClassName="aspect-[16/9] w-full object-cover" />

      <div className="reading-column mt-10">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">{ko ? "핵심 요약" : "KEY POINTS"}</span><ul className="mt-4 space-y-3">{article.keyPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-navy"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{point}</span></li>)}</ul></aside>

        {article.sections.map((section, index) => <section key={section.title} className="article-section">
          <h2 className="article-section-title">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 42)} className="article-copy">{paragraph}</p>)}
          {index === 6 && <InteractiveFigure src={article.inlineImage.src} alt={article.inlineImage.alt} caption={article.inlineImage.caption} credit={article.inlineImage.credit} figureClassName="my-8 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" imageClassName="aspect-[16/9] w-full object-cover" />}
        </section>)}

        <ContentAccountability postSlug={`seed-language-${article.slug}`} publishedDate={article.date}/>
        <CommentSection postSlug={`seed-language-${article.slug}`}/>
      </div>
    </div>
  </article>;
}
