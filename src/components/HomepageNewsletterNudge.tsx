import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { isReadingPage } from "../lib/readingRoutes";
import { useAuth } from "../auth";
import SiyaArticleGuide from "./SiyaArticleGuide";

type Stage = "hidden" | "walking" | "ready" | "open";
function NewsletterNudge({ reading }: { reading: boolean }) {
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
    <aside className={`seed-nudge${reading ? " seed-nudge--reading" : ""}`} aria-label={ko ? "무료 구독 안내" : "Free subscription"}>
      {stage === "open" && (
        <div id="seed-nudge-card" className="seed-nudge-card" aria-labelledby="seed-nudge-title">
          <p className="section-kicker">SEED LETTER</p>
          <h2 id="seed-nudge-title" className="editorial-title mt-2 text-xl font-bold text-navy">{ko ? "새 글을 놓치지 마세요" : "Never miss a new story"}</h2>
          <p className="my-2.5 text-sm leading-6 text-charcoal/65">{ko ? "무료 구독신청 후 모든 기사를 읽고 새 글을 이메일로 받아보세요." : "Subscribe for free to read every story and receive new articles by email."}</p>
          <Link to={`/account?mode=signup&returnTo=${encodeURIComponent(window.location.pathname)}`} onClick={() => setStage("ready")} className="button-primary w-full justify-center">{ko ? "무료 구독신청" : "Subscribe for free"}</Link>
        </div>
      )}
      <button
        type="button"
        className="seed-nudge-trigger"
        onClick={() => setStage(stage === "open" ? "ready" : "open")}
        disabled={stage === "walking"}
        aria-label={stage === "open" ? (ko ? "씨야를 눌러 구독신청 창 닫기" : "Close the subscription form with Siya") : (ko ? "씨야를 눌러 이메일 구독신청 창 열기" : "Open the email subscription form with Siya")}
        aria-controls={stage === "open" ? "seed-nudge-card" : undefined}
        aria-expanded={stage === "open"}
      >
        {stage === "ready" && (
          <span className="seed-nudge-bubble">
            {pose === "writing"
              ? (ko ? "구독신청 하시면.." : "When you subscribe...")
              : (ko ? "기사 전체를 무료로 볼 수 있어요" : "You can read every article in full for free")}
          </span>
        )}
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
  const { pathname } = useLocation();
  if (loading) return null;
  if (isVerified) return <SiyaArticleGuide />;
  return <NewsletterNudge reading={isReadingPage(pathname)} />;
}
