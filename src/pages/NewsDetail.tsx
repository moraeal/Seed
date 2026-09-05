import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import FigureCaption from "../components/FigureCaption";
import SourceArticleCard from "../components/SourceArticleCard";
import { localizeNewsArticle } from "../data/localizedContent";
import { getNewsArticle } from "../data/news";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
const imageKey = (src: string) => imageSrc(src).replace(/#.*$/, "").replace(/\?.*$/, "");

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

  const heroImageKey = imageKey(article.heroImage.src);
  const inlineImageKey = imageKey(article.inlineImage.src);
  const selectedNews = article.selectedNews.thumbnailUrl && [heroImageKey, inlineImageKey].includes(imageKey(article.selectedNews.thumbnailUrl))
    ? { ...article.selectedNews, thumbnailUrl: undefined }
    : article.selectedNews;
  const showInlineImage = inlineImageKey !== heroImageKey;

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl"><Link to="/news" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "오늘의뉴스 목록" : "Today's News"}</Link><div className="mt-3 border-t-2 border-navy pt-3"><h1 className="editorial-title max-w-4xl text-[1.6rem] font-bold leading-[1.15] text-navy sm:text-[2.25rem]">{article.title}</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/60 sm:text-[15px]">{article.summary}</p></div><div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span><button onClick={share} className="button-secondary ml-auto min-h-8 px-3 py-1.5 text-xs"><Share2 size={15}/>{ko ? "공유" : "Share"}</button></div></div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-12">
      {article.video && <section className="mb-12 overflow-hidden border border-green-deep/15 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]">
        <div className="px-5 py-5 sm:px-7"><span className="section-kicker">{ko ? "현장의 목소리" : "VOICE FROM THE FIELD"}</span><h2 className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{article.video.title}</h2><p className="mt-2 text-sm leading-7 text-charcoal/65">{article.video.description}</p></div>
        <div className="aspect-video bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${article.video.youtubeId}`} title={article.video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        <p className="border-t border-green-deep/10 bg-ivory px-5 py-4 text-xs leading-6 text-charcoal/50 sm:px-7">※ {article.video.disclaimer}</p>
      </section>}
      <SourceArticleCard news={selectedNews} ko={ko}/>
      <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]">{article.heroImage.sourceUrl ? <a href={article.heroImage.sourceUrl} target="_blank" rel="noreferrer" aria-label={ko ? "사진 원문 기사 보기" : "Open the original article for this photo"} className="group/image block"><img src={imageSrc(article.heroImage.src)} alt={article.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover/image:scale-[1.012]"/></a> : <img src={imageSrc(article.heroImage.src)} alt={article.heroImage.alt} className="aspect-[16/9] w-full object-cover"/>}<FigureCaption caption={article.heroImage.caption} credit={article.heroImage.credit} sourceUrl={article.heroImage.sourceUrl}/></figure>

      <div className="mx-auto mt-8 max-w-3xl">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-7 sm:px-8"><span className="section-kicker">{ko ? "오늘의 한 문장" : "ONE SENTENCE"}</span><p className="mt-3 font-serif text-xl font-bold leading-9 text-green-deep sm:text-2xl">{article.keySentence}</p></aside>

        {article.sections.map((section, index) => <section key={`${index}-${section.title}`} className="mt-10 border-t border-green-deep/10 pt-8">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">{section.title}</h2>
          {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 32)}`} className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">{paragraph}</p>)}
          {section.bullets && <ul className="mt-5 grid gap-2.5 text-base leading-7 text-charcoal/75 sm:text-[17px]">{section.bullets.map((bullet, bulletIndex) => <li key={`${bulletIndex}-${bullet}`} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"/><span>{bullet}</span></li>)}</ul>}
          {showInlineImage && index === Math.min(2, article.sections.length - 1) && <figure className="my-10 overflow-hidden border border-green-deep/10 bg-white"><img src={imageSrc(article.inlineImage.src)} alt={article.inlineImage.alt} className="aspect-[16/10] w-full object-cover"/><FigureCaption caption={article.inlineImage.caption} credit={article.inlineImage.credit} sourceUrl={article.inlineImage.sourceUrl}/></figure>}
        </section>)}

        <section className="mt-10 border-t-2 border-navy pt-7"><span className="section-kicker">{ko ? "앞으로 확인할 지점" : "WHAT TO WATCH"}</span><ol className="mt-4 grid gap-3 sm:grid-cols-2">{article.watchPoints.map((point, index) => <li key={`${index}-${point}`} className="border border-green-deep/15 bg-white p-4"><p className="text-sm font-semibold leading-6 text-navy">{point}</p></li>)}</ol></section>

        <aside className="mt-10 bg-green-deep px-6 py-7 text-white sm:px-8"><span className="text-xs font-bold tracking-[.22em] text-gold">SEED PERSPECTIVE</span><h2 className="mt-2 text-2xl font-extrabold">{ko ? "씨드의 관점" : "SEED's View"}</h2>{article.seedPerspective.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 32)}`} className="mt-4 text-base leading-8 text-white/80 sm:text-[17px]">{paragraph}</p>)}</aside>

        <section className="mt-10 border-t border-green-deep/15 pt-6"><span className="section-kicker">{ko ? "확인한 자료" : "SOURCES"}</span><p className="mt-2 text-xs leading-6 text-charcoal/45">{ko ? "기사 작성일 기준 공개된 공식자료와 보도를 교차 확인했습니다. 이후 정책 내용은 변경될 수 있습니다." : "Sources reflect public materials available at the time of writing. Later official decisions or policy changes may update the picture."}</p><ul className="mt-4 grid gap-2 text-sm leading-6 text-charcoal/65">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul></section>
        <ContentAccountability postSlug={article.slug} publishedDate={article.date} />
        <CommentSection postSlug={article.slug} />
      </div>
    </div>
  </article>;
}
