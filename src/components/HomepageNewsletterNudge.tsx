import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import NewsletterSignup from "./NewsletterSignup";

const dismissalKey = "seed-newsletter-nudge-dismissed";
type Stage = "hidden" | "walking" | "writing" | "open";

export default function HomepageNewsletterNudge() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [stage, setStage] = useState<Stage>("hidden");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(dismissalKey) === "1") return;
    } catch { /* The nudge still works when storage is unavailable. */ }

    timers.current = [
      window.setTimeout(() => setStage("walking"), 5000),
      window.setTimeout(() => setStage("writing"), 6100),
      window.setTimeout(() => setStage("open"), 6450),
    ];
    return () => timers.current.forEach(window.clearTimeout);
  }, []);

  if (stage === "hidden") return null;

  const dismiss = () => {
    timers.current.forEach(window.clearTimeout);
    setStage("hidden");
    try { sessionStorage.setItem(dismissalKey, "1"); } catch { /* No storage required. */ }
  };
  const imageBase = `${import.meta.env.BASE_URL}images/seed-character/`;

  return (
    <aside className="seed-nudge" aria-label={ko ? "씨앗레터 구독 안내" : "SEED LETTER subscription"}>
      {stage === "open" && (
        <div className="seed-nudge-card" aria-labelledby="seed-nudge-title">
          <button type="button" className="seed-nudge-close" onClick={dismiss} aria-label={ko ? "구독 안내 닫기" : "Close subscription invitation"}><X size={20} /></button>
          <p className="section-kicker">SEED LETTER</p>
          <h2 id="seed-nudge-title" className="editorial-title mt-2 text-xl font-bold text-navy">{ko ? "새 글을 놓치지 마세요" : "Never miss a new story"}</h2>
          <p className="my-2.5 text-xs leading-5 text-charcoal/65">{ko ? "씨앗의 소리가 새 글을 이메일로 전해드립니다." : "Get new SEED VOICE stories by email."}</p>
          <NewsletterSignup compact />
        </div>
      )}
      <img
        className={`seed-nudge-character ${stage === "walking" ? "seed-nudge-walking" : ""}`}
        src={`${imageBase}${stage === "walking" ? "seed-18-walking.png" : "seed-12-writing.png"}`}
        alt={ko ? "씨앗 캐릭터" : "SEED character"}
      />
      {stage !== "open" && <button type="button" className="seed-nudge-early-close" onClick={dismiss} aria-label={ko ? "구독 안내 닫기" : "Close subscription invitation"}><X size={17} /></button>}
    </aside>
  );
}
