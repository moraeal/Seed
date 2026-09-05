import { useState } from "react";
import { ArrowLeft, Clock, Play, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import FigureCaption from "../components/FigureCaption";
import { getColumn } from "../data/columns";
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
  const [videoOpen, setVideoOpen] = useState(false);

  if (!column) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "글을 찾을 수 없습니다." : "Article not found."}</h1><Link to="/columns" className="button-primary mt-7">{ko ? "씨앗의 소리 목록" : "Voice of the Seed"}</Link></div>;

  const share = async () => {
    if (navigator.share) await navigator.share({ title: `${column.title} - ${column.subtitle}`, text: column.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert(ko ? "주소를 복사했습니다." : "Link copied."); }
  };

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
      <div className="container-page max-w-5xl"><Link to="/columns" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "씨앗의 소리 목록" : "Voice of the Seed"}</Link><div className="mt-3 border-t-2 border-navy pt-3"><h1 className="editorial-title max-w-4xl text-[1.75rem] font-bold leading-[1.14] text-navy sm:text-[2.5rem]">{column.title}</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/60 sm:text-[15px]">{column.summary}</p></div><div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45"><time>{column.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${column.readMinutes}분` : `${column.readMinutes} min read`}</span><button onClick={share} className="button-secondary ml-auto min-h-8 px-3 py-1.5 text-xs"><Share2 size={15}/>{ko ? "공유" : "Share"}</button></div></div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-12">
      <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]">{column.heroImage.sourceUrl ? <a href={column.heroImage.sourceUrl} target="_blank" rel="noreferrer" aria-label={ko ? "대표 이미지 원문 보기" : "Open the source for the lead image"} className="group/image block"><img src={imageSrc(column.heroImage.src)} alt={column.heroImage.alt} referrerPolicy="no-referrer" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover/image:scale-[1.012]"/></a> : <img src={imageSrc(column.heroImage.src)} alt={column.heroImage.alt} className="aspect-[16/9] w-full object-cover"/>}<FigureCaption caption={column.heroImage.caption} credit={column.heroImage.credit} sourceUrl={column.heroImage.sourceUrl}/></figure>

      <div className="mx-auto mt-10 max-w-3xl">
        {column.sections.map((section, index) => <section key={`${index}-${section.title}`} className={`${index === 0 ? "" : "mt-10 border-t border-green-deep/10 pt-8"}`}>
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">{section.title}</h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 28)}`} className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">{paragraph}</p>)}
          {section.quote && <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 font-serif text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl">{section.quote.map((line, lineIndex) => <span key={`${lineIndex}-${line}`} className="block">{line}</span>)}</blockquote>}
          {bodyImages.filter((image) => image.afterSection === index).map((image) => <figure key={imageKey(image.src)} className="my-12 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]"><img src={imageSrc(image.src)} alt={image.alt} className={"contain" in image && image.contain ? "block h-auto w-full" : "aspect-[16/10] w-full object-cover"}/><FigureCaption caption={image.caption} credit={image.credit} sourceUrl={image.sourceUrl}/></figure>)}
        </section>)}
        {column.referenceVideo && <section className="mt-10 border-t border-green-deep/10 pt-8" aria-labelledby="reference-video-title">
          <span className="section-kicker">{ko ? "참고 영상" : "REFERENCE VIDEO"}</span>
          <h2 id="reference-video-title" className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{column.referenceVideo.title}</h2>
          <p className="mt-3 text-sm leading-6 text-charcoal/60 sm:text-[15px]">{column.referenceVideo.description}</p>
          <figure className="mt-5 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]">
            {videoOpen ? <div className="aspect-video bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${column.referenceVideo.youtubeId}?autoplay=1`} title={column.referenceVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div> : <button type="button" onClick={() => setVideoOpen(true)} className="group relative block aspect-video w-full overflow-hidden bg-black text-white" aria-label={ko ? `${column.referenceVideo.title} 재생` : `Play ${column.referenceVideo.title}`}>
              <img src={column.referenceVideo.thumbnailSrc} alt={column.referenceVideo.thumbnailAlt} referrerPolicy="no-referrer" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.012]" />
              <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" aria-hidden="true" />
              <span className="absolute inset-0 grid place-items-center" aria-hidden="true"><span className="grid size-16 place-items-center rounded-full border border-white/70 bg-green-deep/90 shadow-xl transition group-hover:scale-105 sm:size-20"><Play className="ml-1" size={30} fill="currentColor" /></span></span>
            </button>}
            <figcaption className="border-t border-green-deep/10 px-5 py-3 text-xs leading-5 text-charcoal/55 sm:px-6">{column.referenceVideo.credit}</figcaption>
          </figure>
        </section>}
        <aside className="mt-10 border-t-2 border-navy pt-6"><span className="section-kicker">{ko ? "자료 주" : "SOURCE NOTE"}</span><p className="mt-3 text-sm leading-6 text-charcoal/60">{column.sourceNote}</p>{column.sources && <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-charcoal/60">{column.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul>}</aside>
        <ContentAccountability postSlug={column.slug} publishedDate={column.date} />
        <CommentSection postSlug={column.slug} />
      </div>
    </div>
  </article>;
}
