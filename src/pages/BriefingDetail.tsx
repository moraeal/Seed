import { ArrowLeft, Clock, Download, FileText, Maximize2, Play, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import FigureCaption from "../components/FigureCaption";
import { getAllBriefing } from "../data/allBriefings";
import { localizeBriefing } from "../data/localizedContent";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src: string) => {
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

const getYouTubeId = (url?: string) => {
  if (!url) return undefined;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/i);
  return match?.[1];
};

type ActiveMedia = {
  src: string;
  alt: string;
};

export default function BriefingDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const [activeMedia, setActiveMedia] = useState<ActiveMedia>();
  const [playingVideoId, setPlayingVideoId] = useState<string>();
  const ko = language === "ko";
  const originalBriefing = getAllBriefing(slug);
  const briefing = originalBriefing ? localizeBriefing(originalBriefing, language) : undefined;

  useEffect(() => {
    if (!activeMedia) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMedia(undefined);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeMedia]);

  if (!briefing) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-extrabold text-navy">{ko ? "브리핑을 찾을 수 없습니다." : "Briefing not found."}</h1>
        <Link to="/briefings" className="button-primary mt-7">{ko ? "목록으로" : "Briefings"}</Link>
      </div>
    );
  }

  const share = async () => {
    if (navigator.share) await navigator.share({ title: briefing.title, text: briefing.summary, url: location.href });
    else {
      await navigator.clipboard.writeText(location.href);
      alert(ko ? "주소를 복사했습니다." : "Link copied.");
    }
  };

  const renderFigure = (image: NonNullable<typeof briefing.images>[number], prominent = false) => {
    const imageSrc = resolveImageSrc(image.src);
    const youtubeId = getYouTubeId(image.sourceUrl);
    const imageClass = image.contain ? "block h-auto w-full" : `${prominent ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/9]"} w-full object-cover`;

    return (
      <figure className={`${prominent ? "mb-8 shadow-[0_18px_55px_rgba(23,76,58,.08)]" : "mt-8"} overflow-hidden border border-green-deep/10 bg-white`}>
        <div className="group relative overflow-hidden bg-navy">
          {youtubeId && playingVideoId === youtubeId ? (
            <div className="aspect-video">
              <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`} title={image.alt} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => youtubeId ? setPlayingVideoId(youtubeId) : setActiveMedia({ src: imageSrc, alt: image.alt })}
                className="block w-full cursor-zoom-in text-left"
                aria-label={youtubeId ? (ko ? "이 자리에서 영상 재생" : "Play video here") : (ko ? "이미지 크게 보기" : "Enlarge image")}
              >
                <img src={imageSrc} alt={image.alt} className={`${imageClass} transition duration-300 group-hover:scale-[1.01]`} />
                {youtubeId && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
                    <span className="flex size-14 items-center justify-center rounded-full bg-white/95 text-green-deep shadow-xl sm:size-16"><Play className="ml-1" size={28} fill="currentColor" /></span>
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia({ src: imageSrc, alt: image.alt })}
                className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-sm bg-black/70 px-2.5 py-2 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-black/90"
                aria-label={ko ? "이미지 원본 확대" : "Enlarge original image"}
              >
                <Maximize2 size={15} />{ko ? "확대" : "Enlarge"}
              </button>
            </>
          )}
        </div>
        <FigureCaption caption={image.caption} credit={image.credit} sourceUrl={image.sourceUrl} />
      </figure>
    );
  };

  return (
    <article className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
        <div className="container-page max-w-5xl">
          <Link to="/briefings" className="text-link text-xs"><ArrowLeft size={14} />{ko ? "시민브리핑 목록" : "Civic Briefings"}</Link>
          <div className="mt-3 border-t-2 border-navy pt-3">
            <h1 className="editorial-title max-w-4xl text-[1.6rem] font-bold leading-[1.15] text-navy sm:text-[2.25rem]">{briefing.title}</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/65 sm:text-[15px]">{briefing.summary}</p>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
            <span>{briefing.author}</span>
            <time>{briefing.date.replace(/-/g, ".")} {ko ? "기준" : "as of"}</time>
            <span className="flex items-center gap-1"><Clock size={14} />{ko ? `읽는 시간 ${briefing.readMinutes}분` : `${briefing.readMinutes} min read`}</span>
            <div className="flex w-full flex-wrap gap-2 sm:ml-auto sm:w-auto">
              <button onClick={share} className="button-secondary min-h-8 px-3 py-1.5 text-xs"><Share2 size={15} />{ko ? "공유" : "Share"}</button>
              {briefing.commentary && <Link to={`/briefings/${briefing.slug}/commentary`} className="button-secondary min-h-8 px-3 py-1.5 text-xs"><FileText size={15} />{ko ? "논평 보기" : "Read commentary"}</Link>}
              {briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-primary min-h-8 px-3 py-1.5 text-xs"><Download size={15} />{ko ? "PDF 원문 내려받기" : "Download PDF"}</a>}
            </div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl py-8 sm:py-12">
        {briefing.images?.[0] && renderFigure(briefing.images[0], true)}

        <div className="space-y-4">
          {briefing.content.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 20)}`} className="text-base leading-8 text-charcoal/80 sm:text-[17px]">{paragraph}</p>
          ))}
        </div>

        {briefing.images?.[1] && renderFigure(briefing.images[1])}

        {briefing.sections?.map((section, index) => (
          <div key={`${index}-${section.title}`}>
            <section className="mt-9 border-t border-green-deep/10 pt-6">
              <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">{section.title}</h2>
              {section.paragraphs && <div className="mt-4 space-y-3.5">{section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 24)}`} className="text-base leading-7 text-charcoal/75">{paragraph}</p>)}</div>}
              {section.bullets && <ul className="mt-4 space-y-3">{section.bullets.map((bullet, bulletIndex) => <li key={`${bulletIndex}-${bullet.slice(0, 24)}`} className="flex gap-3 text-base leading-7 text-charcoal/75"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />{bullet}</li>)}</ul>}
            </section>
            {briefing.images?.slice(2).filter((image) => image.afterSection === index).map((image) => (
              <div key={image.src}>{renderFigure(image)}</div>
            ))}
          </div>
        ))}

        {briefing.verdicts && (
          <section className="mt-9">
            <span className="section-kicker">CITIZEN VERDICT</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">{ko ? "현재까지의 시민 판정" : "Citizen assessment so far"}</h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-green-deep/10">
              <table className="w-full min-w-[680px] border-collapse bg-white text-left text-sm">
                <thead className="bg-green-deep text-white"><tr><th className="px-5 py-4">{ko ? "주장" : "Claim"}</th><th className="px-5 py-4">{ko ? "시민 판정" : "Assessment"}</th><th className="px-5 py-4">{ko ? "이유" : "Basis"}</th></tr></thead>
                <tbody className="divide-y divide-green-deep/10">
                  {briefing.verdicts.map((item) => (
                    <tr key={item.claim}><td className="px-5 py-4 leading-6 text-charcoal/75">{item.claim}</td><td className="whitespace-nowrap px-5 py-4 font-extrabold text-green-deep">{item.status}</td><td className="px-5 py-4 leading-6 text-charcoal/60">{item.basis}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {briefing.images?.slice(2).filter((image) => image.afterSection === undefined).map((image) => <div key={image.src}>{renderFigure(image)}</div>)}

        <aside className="mt-9 rounded-lg border-l-4 border-gold bg-green-pale p-5 sm:p-6">
          <h2 className="text-xl font-extrabold text-green-deep">{ko ? "지속해서 관찰할 지점" : "What to keep watching"}</h2>
          <ul className="mt-4 space-y-2">{briefing.watchPoints.map((point, index) => <li key={`${index}-${point}`} className="flex gap-3 text-sm leading-6 text-charcoal/75"><span className="font-serif text-gold">●</span>{point}</li>)}</ul>
        </aside>

        {briefing.quote && <blockquote className="mt-9 rounded-xl bg-green-deep p-6 font-serif text-lg font-bold leading-8 text-white sm:p-7 sm:text-xl">“{briefing.quote}”</blockquote>}
        {briefing.sourceNote && <p className="mt-6 rounded-lg border border-green-deep/10 bg-white p-4 text-sm leading-6 text-charcoal/60">{briefing.sourceNote}</p>}

        {briefing.sources && (
          <section className="mt-9 border-t border-green-deep/10 pt-6">
            <h2 className="text-xl font-extrabold text-navy">{ko ? "자료 출처 및 확인 기준" : "Sources and verification basis"}</h2>
            <ol className="mt-4 space-y-2">{briefing.sources.map((source, index) => <li key={source.url} className="flex gap-3 text-sm leading-6"><span className="font-serif text-gold">{index + 1}.</span><a href={source.url} target="_blank" rel="noreferrer" className="text-charcoal/65 underline decoration-green-deep/20 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ol>
            <p className="mt-4 text-xs leading-6 text-charcoal/45">{ko ? "확인 기준: 각 브리핑의 기준일 현재 공개자료입니다. 이후 판결·법령·공식 발표가 나오면 판단은 업데이트될 수 있습니다." : "Verification basis: public materials available as of each briefing's reference date. Later court decisions, laws or official announcements may require updates."}</p>
          </section>
        )}

        <ContentAccountability postSlug={briefing.slug} publishedDate={briefing.date} />
        <CommentSection postSlug={briefing.slug} />
      </div>

      {activeMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={ko ? "이미지 확대 보기" : "Image viewer"} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveMedia(undefined); }}>
          <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
            <button type="button" onClick={() => setActiveMedia(undefined)} className="absolute right-2 top-2 z-20 flex size-10 items-center justify-center rounded-full bg-black/75 text-white shadow-lg transition hover:bg-black sm:-right-3 sm:-top-12" aria-label={ko ? "닫기" : "Close"}><X size={24} /></button>
            <img src={activeMedia.src} alt={activeMedia.alt} className="max-h-[92vh] max-w-full object-contain shadow-2xl" />
          </div>
        </div>
      )}
    </article>
  );
}
