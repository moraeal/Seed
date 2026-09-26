import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import NewsletterSignup from "./NewsletterSignup";

type Stage = "hidden" | "walking" | "ready" | "open";
let dismissedUntilReload = false;

export default function HomepageNewsletterNudge() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [stage, setStage] = useState<Stage>("hidden");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (dismissedUntilReload) return;
    timers.current = [
      window.setTimeout(() => setStage("walking"), 9000),
      window.setTimeout(() => setStage("ready"), 10100),
    ];
    return () => timers.current.forEach(window.clearTimeout);
  }, []);

  if (stage === "hidden") return null;

  const dismiss = () => {
    timers.current.forEach(window.clearTimeout);
    dismissedUntilReload = true;
    setStage("hidden");
  };
  const imageBase = `${import.meta.env.BASE_URL}images/seed-character/`;

  return (
    <aside className="seed-nudge" aria-label={ko ? "씨앗레터 구독 안내" : "SEED LETTER subscription"}>
      {stage === "open" && (
        <div id="seed-nudge-card" className="seed-nudge-card" aria-labelledby="seed-nudge-title">
          <button type="button" className="seed-nudge-close" onClick={dismiss} aria-label={ko ? "씨야 안내 닫기" : "Dismiss Siya"}><X size={20} /></button>
          <p className="section-kicker">SEED LETTER</p>
          <h2 id="seed-nudge-title" className="editorial-title mt-2 text-xl font-bold text-navy">{ko ? "새 글을 놓치지 마세요" : "Never miss a new story"}</h2>
          <p className="my-2.5 text-xs leading-5 text-charcoal/65">{ko ? "씨앗의 소리가 새 글을 이메일로 전해드립니다." : "Get new SEED VOICE stories by email."}</p>
          <NewsletterSignup compact />
        </div>
      )}
      <button
        type="button"
        className="seed-nudge-trigger"
        onClick={() => setStage(stage === "open" ? "ready" : "open")}
        disabled={stage === "walking"}
        aria-label={stage === "open" ? (ko ? "씨야를 눌러 가입창 닫기" : "Close the signup form with Siya") : (ko ? "씨야를 눌러 이메일 가입창 열기" : "Open the email signup form with Siya")}
        aria-controls={stage === "open" ? "seed-nudge-card" : undefined}
        aria-expanded={stage === "open"}
      >
        {stage === "ready" && <span className="seed-nudge-bubble">{ko ? "이메일 구독!" : "Subscribe by email!"}</span>}
        <img
          className={`seed-nudge-character ${stage === "walking" ? "seed-nudge-walking" : "seed-nudge-writing"}`}
          src={`${imageBase}${stage === "walking" ? "seed-18-walking.png" : "seed-12-writing.png"}`}
          alt=""
        />
      </button>
      {stage === "ready" && <button type="button" className="seed-nudge-early-close" onClick={dismiss} aria-label={ko ? "씨야 안내 닫기" : "Dismiss Siya"}><X size={17} /></button>}
    </aside>
  );
}
