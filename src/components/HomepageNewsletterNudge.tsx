import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n";
import NewsletterSignup from "./NewsletterSignup";
import { useAuth } from "../auth";
import SiyaArticleGuide from "./SiyaArticleGuide";

type Stage = "hidden" | "walking" | "ready" | "open";
function NewsletterNudge() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [stage, setStage] = useState<Stage>("hidden");
  const [pose, setPose] = useState<"writing" | "checked">("writing");
  const timers = useRef<number[]>([]);
  const poseInterval = useRef<number | null>(null);

  useEffect(() => {
    const checkedImage = new Image();
    checkedImage.src = `${import.meta.env.BASE_URL}images/seed-character/seed-14-checked.webp?v=20260926-three-poses`;
    timers.current = [
      window.setTimeout(() => setStage("walking"), 2000),
      window.setTimeout(() => {
        setStage("ready");
        poseInterval.current = window.setInterval(() => {
          setPose((current) => current === "writing" ? "checked" : "writing");
        }, 3000);
      }, 3350),
    ];
    return () => {
      timers.current.forEach(window.clearTimeout);
      if (poseInterval.current !== null) window.clearInterval(poseInterval.current);
    };
  }, []);

  if (stage === "hidden") return null;

  const imageBase = `${import.meta.env.BASE_URL}images/seed-character/`;

  return createPortal(
    <aside className="seed-nudge" aria-label={ko ? "씨앗레터 구독 안내" : "SEED LETTER subscription"}>
      {stage === "open" && (
        <div id="seed-nudge-card" className="seed-nudge-card" aria-labelledby="seed-nudge-title">
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
          src={`${imageBase}${stage === "walking" ? "seed-18-walking.png" : pose === "writing" ? "seed-12-writing.png" : "seed-14-checked.webp"}?v=20260926-three-poses`}
          alt=""
        />
      </button>
    </aside>,
    document.body,
  );
}

export default function HomepageNewsletterNudge() {
  const { isVerified, loading } = useAuth();
  if (loading) return null;
  return isVerified ? <SiyaArticleGuide /> : <NewsletterNudge />;
}
