import { Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";

type Stage = "hidden" | "walking" | "ready" | "open";
type Source = { title: string; date: string; url: string };
type Message = { question: string; answer: string; sources: Source[]; grounded: boolean; saved?: boolean };
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export default function SiyaArticleGuide() {
  const { language } = useLanguage();
  const { session } = useAuth();
  const ko = language === "ko";
  const [stage, setStage] = useState<Stage>("hidden");
  const [pose, setPose] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [saving, setSaving] = useState<number | null>(null);
  const [error, setError] = useState("");
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preload = new Image();
    preload.src = `${import.meta.env.BASE_URL}images/seed-character/seed-13-reading-guide.webp`;
    const entrance = window.setTimeout(() => setStage("walking"), 9000);
    const ready = window.setTimeout(() => setStage("ready"), 10350);
    const interval = window.setInterval(() => setPose((current) => !current), 3000);
    return () => { window.clearTimeout(entrance); window.clearTimeout(ready); window.clearInterval(interval); };
  }, []);
  useEffect(() => { if (stage === "open") end.current?.scrollIntoView({ block: "nearest" }); }, [messages, stage]);
  if (stage === "hidden") return null;

  const call = async (action: "ask" | "save", text: string) => {
    const response = await fetch(`${supabaseUrl}/functions/v1/siya-article-guide`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: publishableKey, Authorization: `Bearer ${session?.access_token}` },
      body: JSON.stringify({ action, question: text, language }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || (ko ? "잠시 연결되지 않았어요. 다시 시도해주세요." : "The guide is temporarily unavailable. Please try again."));
    return data;
  };

  const ask = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = question.trim();
    if (busy || text.length < 2 || text.length > 500) return;
    setBusy(true); setError("");
    try {
      const result = await call("ask", text);
      setMessages((current) => [...current, {
        question: text,
        answer: result.grounded ? result.answer : (ko ? "죄송해요. 이 질문에 답할 만한 씨앗 기사를 아직 찾지 못했어요. 조금 더 연구해 볼게요." : "Sorry, I couldn't find a SEED article that answers this yet. We'll look into it."),
        sources: Array.isArray(result.sources) ? result.sources : [],
        grounded: Boolean(result.grounded),
      }]);
      setQuestion("");
    } catch (caught) { setError(caught instanceof Error ? caught.message : String(caught)); }
    finally { setBusy(false); }
  };

  const save = async (index: number) => {
    if (saving !== null) return;
    setSaving(index); setError("");
    try {
      await call("save", messages[index].question);
      setMessages((current) => current.map((item, position) => position === index ? { ...item, saved: true } : item));
    } catch (caught) { setError(caught instanceof Error ? caught.message : String(caught)); }
    finally { setSaving(null); }
  };

  const image = stage === "walking" ? "seed-09-listening-guide.webp" : pose ? "seed-10-explaining-guide.webp" : "seed-13-reading-guide.webp";
  return createPortal(
    <aside className="seed-nudge" aria-label={ko ? "씨야 기사 안내" : "Siya article guide"}>
      {stage === "open" && <section id="seed-guide-card" className="seed-nudge-card seed-guide-card" aria-labelledby="seed-guide-title">
        <p className="section-kicker">SEED ARTICLE GUIDE</p>
        <h2 id="seed-guide-title" className="editorial-title mt-2 text-xl font-bold text-navy">{ko ? "씨야와 대화해요" : "Talk with Siya"}</h2>
        <p className="my-2.5 text-xs leading-5 text-charcoal/65">{ko ? "씨앗 기사에 관해 물어보세요. 핵심 내용과 기사 링크를 찾아드릴게요." : "Ask about SEED articles. I'll find the key points and story links."}</p>
        <div className="seed-guide-messages" aria-live="polite">
          {messages.length === 0 && <p className="seed-guide-tip">{ko ? "예: 상속세 과세 기준이 왜 문제인가요?" : "For example: Why is the inheritance tax threshold debated?"}</p>}
          {messages.map((item, index) => <div className="seed-guide-exchange" key={`${index}-${item.question}`}>
            <p className="seed-guide-question">{item.question}</p>
            <p className="seed-guide-answer">{item.answer}</p>
            {item.sources.length > 0 && <ul className="seed-guide-sources">{item.sources.map((source) => <li key={source.url}><a href={source.url}>{source.title} <span>↗</span></a></li>)}</ul>}
            {!item.grounded && <div className="seed-guide-save">
              <p>{ko ? "이 질문을 저장하면 편집부가 다음 기사 주제로 검토합니다." : "Save this question for our editors to consider as a future story."}</p>
              <button type="button" disabled={item.saved || saving === index} onClick={() => void save(index)}>{item.saved ? (ko ? "질문을 저장했어요" : "Question saved") : (ko ? "질문 저장" : "Save question")}</button>
            </div>}
          </div>)}
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
        {stage === "ready" && <span className="seed-nudge-bubble">{ko ? "씨야와 대화해요" : "Talk with Siya"}</span>}
        <img className={`seed-nudge-character ${stage === "walking" ? "seed-nudge-walking" : "seed-nudge-writing"}`} src={`${import.meta.env.BASE_URL}images/seed-character/${image}?v=20260926-guide`} alt="" />
      </button>
    </aside>, document.body,
  );
}
