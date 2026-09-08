import { Maximize2, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";
import FigureCaption from "./FigureCaption";
import SafeImage from "./SafeImage";

type InteractiveFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  sourceUrl?: string;
  youtubeId?: string;
  figureClassName?: string;
  imageClassName?: string;
  videoClassName?: string;
  showCaption?: boolean;
  fallbackSrc?: string;
};

const resolveImageSrc = (src: string) => /^https?:\/\//i.test(src)
  ? src
  : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

const getYouTubeId = (url?: string) => url?.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/i)?.[1];

export default function InteractiveFigure({
  src,
  alt,
  caption = "",
  credit = "",
  sourceUrl,
  youtubeId,
  figureClassName = "overflow-hidden border border-green-deep/10 bg-white",
  imageClassName = "aspect-[16/9] w-full object-cover",
  videoClassName = "aspect-video",
  showCaption = true,
  fallbackSrc,
}: InteractiveFigureProps) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [videoOpen, setVideoOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const resolvedSrc = resolveImageSrc(src);
  const resolvedYouTubeId = youtubeId ?? getYouTubeId(sourceUrl);

  useEffect(() => {
    if (!imageOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setImageOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [imageOpen]);

  return (
    <>
      <figure className={figureClassName}>
        <div className="group relative overflow-hidden bg-navy">
          {resolvedYouTubeId && videoOpen ? (
            <div className={videoClassName}>
              <iframe src={`https://www.youtube-nocookie.com/embed/${resolvedYouTubeId}?autoplay=1&rel=0`} title={alt} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          ) : (
            <>
              <button type="button" onClick={() => resolvedYouTubeId ? setVideoOpen(true) : setImageOpen(true)} className="block w-full cursor-zoom-in text-left" aria-label={resolvedYouTubeId ? (ko ? "이 자리에서 영상 재생" : "Play video here") : (ko ? "이미지 크게 보기" : "Enlarge image")}>
                <SafeImage src={resolvedSrc} fallbackSrc={fallbackSrc} alt={alt} referrerPolicy="no-referrer" className={`${imageClassName} transition duration-300 group-hover:scale-[1.01]`} />
                {resolvedYouTubeId && <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span className="flex size-14 items-center justify-center rounded-full bg-white/95 text-green-deep shadow-xl sm:size-16"><Play className="ml-1" size={28} fill="currentColor" /></span></span>}
              </button>
              <button type="button" onClick={() => setImageOpen(true)} className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-sm bg-black/70 px-2.5 py-2 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-black/90" aria-label={ko ? "이미지 원본 확대" : "Enlarge original image"}><Maximize2 size={15}/>{ko ? "확대" : "Enlarge"}</button>
            </>
          )}
        </div>
        {showCaption && <FigureCaption caption={caption} credit={credit} sourceUrl={sourceUrl}/>} 
      </figure>

      {imageOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={ko ? "이미지 확대 보기" : "Image viewer"} onMouseDown={(event) => { if (event.target === event.currentTarget) setImageOpen(false); }}>
          <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
            <button type="button" onClick={() => setImageOpen(false)} className="absolute right-2 top-2 z-20 flex size-10 items-center justify-center rounded-full bg-black/75 text-white shadow-lg transition hover:bg-black sm:-right-3 sm:-top-12" aria-label={ko ? "닫기" : "Close"}><X size={24}/></button>
            <SafeImage src={resolvedSrc} fallbackSrc={fallbackSrc} alt={alt} className="max-h-[92vh] max-w-full object-contain shadow-2xl" />
          </div>
        </div>
      )}
    </>
  );
}
