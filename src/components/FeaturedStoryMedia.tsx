import { Pause, Play, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

type Props = {
  to: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  ko: boolean;
};

export default function FeaturedStoryMedia({ to, imageSrc, imageAlt, videoSrc, ko }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [motionReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const showVideo = Boolean(videoSrc) && !motionReduced;

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended || ended) {
      video.currentTime = 0;
      setEnded(false);
    }
    if (video.paused || ended) {
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative overflow-hidden bg-green-deep">
      <Link to={to} className="relative block aspect-[16/8.55] sm:aspect-[16/7.65]" aria-label={ko ? "기사 읽기" : "Read article"}>
        <SafeImage src={imageSrc} alt={imageAlt} loading="eager" fetchPriority="high" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
        {showVideo && (
          <video
            ref={videoRef}
            src={videoSrc}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlaying={() => { setVisible(true); setPlaying(true); setEnded(false); }}
            onPause={() => setPlaying(false)}
            onEnded={() => { setPlaying(false); setEnded(true); }}
            onError={() => { setVisible(false); setPlaying(false); }}
          />
        )}
      </Link>
      {showVideo && visible && (
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute bottom-3 right-3 z-10 grid size-9 place-items-center rounded-full bg-navy/75 text-white transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={ended ? (ko ? "영상 다시 보기" : "Replay video") : playing ? (ko ? "영상 일시정지" : "Pause video") : (ko ? "영상 재생" : "Play video")}
        >
          {ended ? <RotateCcw size={16} /> : playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      )}
    </div>
  );
}
