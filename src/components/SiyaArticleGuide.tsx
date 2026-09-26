import { Send, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { getArticleReadingPath } from "../data/articleReadingPaths";
import type { EditorialContentKind } from "../data/editorialContinuations";
import { useLanguage } from "../i18n";

type Stage = "hidden" | "walking" | "ready" | "open";
type Source = { title: string; date: string; url: string };
type Message = { question: string; answer: string; sources: Source[]; grounded: boolean; saved?: boolean };

function continuationLinks(sources: Source[], language: "ko" | "en"): Source[] {
  const links = sources.flatMap((source) => {
    let pathname: string;
    try { pathname = new URL(source.url, window.location.origin).pathname; }
    catch { return []; }
    const match = pathname.match(/^\/(news|briefings|columns|seed-language|monitoring)\/([^/]+)\/?$/);
    if (!match) return [];
    const kind: EditorialContentKind = ({ news: "news", briefings: "briefing", columns: "column", "seed-language": "seed-language", monitoring: "monitoring" } as const)[match[1] as "news" | "briefings" | "columns" | "seed-language" | "monitoring"];
    return getArticleReadingPath(kind, match[2], language).items.map((entry) => ({ title: entry.title, date: "", url: entry.href }));
  });
  const unique = links.filter((link, index) => links.findIndex((item) => item.url === link.url) === index);
  return unique.length ? unique.slice(0, 3) : sources;
}
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export default function SiyaArticleGuide() {
  const { language } = useLanguage();
  const { session } = useAuth();
  const location = useLocation();
  const ko = language === "ko";
  const isArticlePage = /^\/(?:news|briefings|columns|seed-language)\/[^/]+(?:\/commentary)?\/?$/.test(location.pathname)
    || /^\/monitoring\/(?:legislation|tax)\/(?:commentary\/)?[^/]+\/?$/.test(location.pathname)
    || /^\/monitoring\/(?!legislation\/?$|tax\/?$|public-interest\/?$)[^/]+\/?$/.test(location.pathname);
  const example = isArticlePage ? (ko ? "이 기사를 요약해줘" : "Summarize this article") : (ko ? "오늘의 뉴스를 알려줘" : "Tell me today's news");
  const [stage, setStage] = useState<Stage>("hidden");
  const [pose, setPose] = useState(false);
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState<Message | null>(null);
  const [busy, setBusy] = useState(false);
  const [saving, setSaving] = useState(false);
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
  useEffect(() => { if (stage === "open") end.current?.scrollIntoView({ block: "nearest" }); }, [message, stage]);
  if (stage === "hidden") return null;

  const call = async (action: "ask" | "save", text: string) => {
    const response = await fetch(`${supabaseUrl}/functions/v1/siya-article-guide`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: publishableKey, Authorization: `Bearer ${session?.access_token}` },
      body: JSON.stringify({ action, question: text, language, articlePath: location.pathname }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || (ko ? "잠시 연결되지 않았어요. 다시 시도해주세요." : "The guide is temporarily unavailable. Please try again."));
    return data;
  };

  const askQuestion = async (text: string) => {
    if (busy || text.length < 2 || text.length > 500) return;
    setBusy(true); setError(""); setMessage(null); setQuestion("");
    try {
      const result = await call("ask", text);
      setMessage({
        question: text,
        answer: result.grounded ? result.answer : (text === example && isArticlePage
          ? (ko ? "이 페이지의 기사 내용을 아직 확인하지 못했어요. 다른 질문을 해주세요." : "I couldn't find this article's text yet. Please try another question.")
          : (ko ? "죄송해요. 이 질문에 답할 만한 씨앗 기사를 아직 찾지 못했어요. 조금 더 연구해 볼게요." : "Sorry, I couldn't find a SEED article that answers this yet. We'll look into it.")),
        sources: Array.isArray(result.sources) ? result.sources : [],
        grounded: Boolean(result.grounded),
      });
    } catch (caught) { setError(caught instanceof Error ? caught.message : String(caught)); }
    finally { setBusy(false); }
  };
  const ask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void askQuestion(question.trim());
  };

  const save = async (item: Message) => {
    if (saving) return;
    setSaving(true); setError("");
    try {
      await call("save", item.question);
      setMessage((current) => current === item ? { ...current, saved: true } : current);
    } catch (caught) { setError(caught instanceof Error ? caught.message : String(caught)); }
    finally { setSaving(false); }
  };

  const image = stage === "walking" ? "seed-09-listening-guide.webp" : pose ? "seed-10-explaining-guide.webp" : "seed-13-reading-guide.webp";
  return createPortal(
    <aside className="seed-nudge" aria-label={ko ? "씨야 기사 안내" : "Siya article guide"}>
      {stage === "open" && <section id="seed-guide-card" className="seed-nudge-card seed-guide-card" aria-labelledby="seed-guide-title">
        <button type="button" className="seed-guide-close" onClick={() => setStage("ready")}
          aria-label={ko ? "씨야 질문창 닫기" : "Close Siya question window"} title={ko ? "닫기" : "Close"}>
          <X size={18} aria-hidden="true" />
        </button>
        <p className="section-kicker">SEED ARTICLE GUIDE</p>
        <h2 id="seed-guide-title" className="editorial-title mt-2 text-xl font-bold text-navy">{ko ? "기사에 관해 물어보세요" : "Ask about articles"}</h2>
        <p className="my-2.5 text-xs leading-5 text-charcoal/65">{ko ? "씨앗 기사에 관해 물어보세요. 핵심 내용과 기사 링크를 찾아드릴게요." : "Ask about SEED articles. I'll find the key points and story links."}</p>
        <div className="seed-guide-messages" aria-live="polite">
          {!message && !busy && <p className="seed-guide-tip">{ko ? "예: " : "For example: "}<button type="button" onClick={() => void askQuestion(example)} disabled={busy}>{example}</button></p>}
          {busy && <p className="seed-guide-tip">{ko ? "답변을 찾고 있어요…" : "Finding an answer…"}</p>}
          {message && <div className="seed-guide-exchange">
            <p className="seed-guide-question">{message.question}</p>
            <p className="seed-guide-answer">{message.answer}</p>
            {message.sources.length > 0 && <div className="seed-guide-related">
              <p className="seed-guide-related-title">{ko ? "이어 읽기" : "Continue reading"}</p>
              <ul className="seed-guide-sources">{continuationLinks(message.sources, language).map((source) => <li key={source.url}><a href={source.url}>{source.title} <span>↗</span></a></li>)}</ul>
            </div>}
            {!message.grounded && <div className="seed-guide-save">
              <p>{ko ? "이 질문을 저장하면 편집부가 다음 기사 주제로 검토합니다." : "Save this question for our editors to consider as a future story."}</p>
              <button type="button" disabled={message.saved || saving} onClick={() => void save(message)}>{message.saved ? (ko ? "질문을 저장했어요" : "Question saved") : (ko ? "질문 저장" : "Save question")}</button>
            </div>}
          </div>}
          <div ref={end} />
        </div>
        {error && <p className="seed-guide-error" role="alert">{error}</p>}
        <form className="seed-guide-form" onSubmit={(event) => void ask(event)}>
          <label htmlFor="seed-guide-input" className="sr-only">{ko ? "기사에 관한 질문" : "Question about an article"}</label>
          <input id="seed-guide-input" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={500} placeholder={ko ? "기사에 관해 물어보세요" : "Ask about an article"} disabled={busy} />
          <button type="submit" disabled={busy || question.trim().length < 2} aria-label={ko ? "질문 보내기" : "Send question"}><Send size={17} /></button>
        </form>
      </section>}
      <button type="button" className="seed-nudge-trigger" onClick={() => setStage(stage === "open" ? "ready" : "open")} disabled={stage === "walking"}
        aria-label={stage === "open" ? (ko ? "씨야 대화창 닫기" : "Close Siya window") : (ko ? "씨야 기사 안내 열기" : "Open Siya article guide")}
        aria-controls={stage === "open" ? "seed-guide-card" : undefined} aria-expanded={stage === "open"}>
        {stage === "ready" && <span className="seed-nudge-bubble">{ko ? "기사에 관해 물어보세요" : "Ask about articles"}</span>}
        <img className={`seed-nudge-character ${stage === "walking" ? "seed-nudge-walking" : "seed-nudge-writing"}`} src={`${import.meta.env.BASE_URL}images/seed-character/${image}?v=20260926-guide`} alt="" />
      </button>
    </aside>, document.body,
  );
}
