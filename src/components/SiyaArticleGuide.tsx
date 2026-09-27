import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { getArticleReadingPath } from "../data/articleReadingPaths";
import type { EditorialContentKind } from "../data/editorialContinuations";
import { useLanguage } from "../i18n";

type Stage = "hidden" | "walking" | "ready" | "open";
type Source = { title: string; date: string; url: string };
type Summary = { answer: string; sources: Source[]; grounded: boolean };
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

function relatedReadingPaths(path: string, language: "ko" | "en"): Source[] {
  const match = path.match(/^\/(news|briefings|columns|seed-language|monitoring)\/([^/]+)\/?$/);
  if (!match) return [];
  const kinds = { news: "news", briefings: "briefing", columns: "column", "seed-language": "seed-language", monitoring: "monitoring" } as const;
  const kind: EditorialContentKind = kinds[match[1] as keyof typeof kinds];
  return getArticleReadingPath(kind, match[2], language).items.map((entry) => ({ title: entry.title, date: "", url: entry.href }));
}

export default function SiyaArticleGuide() {
  const { language } = useLanguage();
  const { session } = useAuth();
  const { pathname } = useLocation();
  const ko = language === "ko";
  const isArticlePage = /^\/(?:news|briefings|columns|seed-language)\/[^/]+(?:\/commentary)?\/?$/.test(pathname)
    || /^\/monitoring\/(?:legislation|tax)\/(?:commentary\/)?[^/]+\/?$/.test(pathname)
    || /^\/monitoring\/(?!legislation\/?$|tax\/?$|public-interest\/?$)[^/]+\/?$/.test(pathname);
  const [stage, setStage] = useState<Stage>("hidden");
  const [pose, setPose] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preload = new Image();
    preload.src = `${import.meta.env.BASE_URL}images/seed-character/seed-13-reading-guide.webp`;
    const entrance = window.setTimeout(() => setStage("walking"), 2000);
    const ready = window.setTimeout(() => setStage("ready"), 3350);
    const interval = window.setInterval(() => setPose((current) => !current), 3000);
    return () => { window.clearTimeout(entrance); window.clearTimeout(ready); window.clearInterval(interval); };
  }, []);
  useEffect(() => { setSummary(null); setError(""); }, [pathname, language]);
  useEffect(() => { if (stage === "open") end.current?.scrollIntoView({ block: "nearest" }); }, [summary, stage]);
  if (!isArticlePage || stage === "hidden") return null;

  const summarize = async () => {
    if (busy || summary) return;
    setBusy(true); setError("");
    const requestedPath = pathname;
    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/siya-article-guide`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: publishableKey, Authorization: `Bearer ${session?.access_token}` },
        body: JSON.stringify({ action: "summarize", language, articlePath: pathname }),
      });
      const result = await response.json().catch(() => ({}));
      if (window.location.pathname !== requestedPath) return;
      if (!response.ok) throw new Error(result.error || (ko ? "잠시 연결되지 않았어요. 다시 시도해주세요." : "The guide is temporarily unavailable. Please try again."));
      setSummary({ answer: result.grounded ? result.answer : (ko ? "이 기사의 내용을 아직 확인하지 못했어요." : "I couldn't find this article's text yet."), sources: Array.isArray(result.sources) ? result.sources : [], grounded: Boolean(result.grounded) });
    } catch (caught) { if (window.location.pathname === requestedPath) setError(caught instanceof Error ? caught.message : String(caught)); }
    finally { setBusy(false); }
  };

  const related = summary ? [...relatedReadingPaths(pathname, language), ...summary.sources]
    .filter((source) => {
      try { return new URL(source.url, window.location.origin).pathname.replace(/\/$/, "") !== pathname.replace(/\/$/, ""); }
      catch { return false; }
    })
    .filter((source, index, list) => list.findIndex((item) => item.url === source.url) === index).slice(0, 3) : [];
  const image = stage === "walking" ? "seed-09-listening-guide.webp" : pose ? "seed-10-explaining-guide.webp" : "seed-13-reading-guide.webp";
  return createPortal(
    <aside className="seed-nudge" aria-label={ko ? "씨야 기사 안내" : "Siya article guide"}>
      {stage === "open" && <section id="seed-guide-card" className="seed-nudge-card seed-guide-card" aria-labelledby="seed-guide-title">
        <button type="button" className="seed-guide-close" onClick={() => setStage("ready")} aria-label={ko ? "씨야 안내창 닫기" : "Close Siya guide"} title={ko ? "닫기" : "Close"}><X size={18} aria-hidden="true" /></button>
        <p className="section-kicker">SEED ARTICLE GUIDE</p>
        <h2 id="seed-guide-title" className="editorial-title mt-2 text-xl font-bold text-navy">{ko ? "씨야의 기사 안내" : "Siya's article guide"}</h2>
        <div className="seed-guide-messages" aria-live="polite">
          {!summary && <p className="seed-guide-tip">{ko ? "지금 읽고 있는 기사의 핵심을 짧게 정리하고, 이어 읽을 글을 안내해 드려요." : "Get a short summary of this story and more to read."}</p>}
          {!summary && <button type="button" className="seed-guide-summary-button" onClick={() => void summarize()} disabled={busy}>{busy ? (ko ? "기사를 요약하고 있어요…" : "Summarizing…") : (ko ? "이 기사 간단히 요약하기" : "Summarize this article")}</button>}
          {summary && <div className="seed-guide-exchange">
            <p className="seed-guide-answer">{summary.answer}</p>
            {summary.grounded && <div className="seed-guide-related">
              <p className="seed-guide-answer">{ko ? "이어서 읽을 관련 기사도 안내해 드릴게요." : "Here are related stories to read next."}</p>
              {related.length > 0 ? <ul className="seed-guide-sources">{related.map((source) => <li key={source.url}><a href={source.url}>{source.title} <span>↗</span></a></li>)}</ul>
                : <p className="seed-guide-tip">{ko ? "지금 연결할 관련 기사가 없어요." : "No related story is available yet."}</p>}
            </div>}
          </div>}
          <div ref={end} />
        </div>
        {error && <p className="seed-guide-error" role="alert">{error}</p>}
      </section>}
      <button type="button" className="seed-nudge-trigger" onClick={() => setStage(stage === "open" ? "ready" : "open")} disabled={stage === "walking"}
        aria-label={stage === "open" ? (ko ? "씨야 안내창 닫기" : "Close Siya guide") : (ko ? "씨야 기사 요약 열기" : "Open Siya article summary")}
        aria-controls={stage === "open" ? "seed-guide-card" : undefined} aria-expanded={stage === "open"}>
        {stage === "ready" && <span className="seed-nudge-bubble">{summary?.grounded ? (ko ? "관련 기사도 안내해 드릴게요" : "Explore related stories") : (ko ? "이 기사를 간단히 요약해 드릴까요?" : "Shall I summarize this article?")}</span>}
        <img className={`seed-nudge-character ${stage === "walking" ? "seed-nudge-walking" : "seed-nudge-writing"}`} src={`${import.meta.env.BASE_URL}images/seed-character/${image}?v=20260926-guide`} alt="" />
      </button>
    </aside>, document.body,
  );
}
