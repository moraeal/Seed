import { Check, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";
import { recordAnalyticsEvent } from "../lib/engagement";

type ShareButtonProps = {
  title: string;
  text?: string;
  className?: string;
};

type ShareStatus = "idle" | "copied" | "failed";

export default function ShareButton({ title, text, className = "" }: ShareButtonProps) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [status, setStatus] = useState<ShareStatus>("idle");

  const recordShare = () => {
    void recordAnalyticsEvent("share_click", window.location.pathname, language).catch(() => {
      // Sharing must remain available if analytics is unavailable.
    });
  };

  useEffect(() => {
    if (status === "idle") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus("copied");
      recordShare();
    } catch {
      setStatus("failed");
    }
  };

  const share = async () => {
    setStatus("idle");

    if (!navigator.share) {
      await copyLink();
      return;
    }

    try {
      await navigator.share({ title, text, url: window.location.href });
      recordShare();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      await copyLink();
    }
  };

  const label = status === "copied"
    ? (ko ? "링크 복사됨" : "Link copied")
    : status === "failed"
      ? (ko ? "복사 실패" : "Copy failed")
      : (ko ? "공유" : "Share");

  return (
    <button
      type="button"
      onClick={share}
      className={`button-secondary min-h-8 px-3 py-1.5 text-xs ${className}`.trim()}
      aria-label={label}
    >
      {status === "copied" ? <Check size={15} aria-hidden="true" /> : <Share2 size={15} aria-hidden="true" />}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
