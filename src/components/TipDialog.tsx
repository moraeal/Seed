import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, X } from "lucide-react";
import { submitTip, type TipInput } from "../lib/tips";

const empty: TipInput = { category: "생활 속 문제", title: "", description: "", evidenceUrl: "", name: "", email: "" };

export default function TipDialog({ open, onClose, language }: { open: boolean; onClose: () => void; language: "ko" | "en" }) {
  const [input, setInput] = useState<TipInput>(empty);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const ko = language === "ko";

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLInputElement>("input[name=title]")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !sending) onClose();
      if (event.key !== "Tab") return;
      const focusable = [...(dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])") || [])];
      if (!focusable.length) return;
      if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable[focusable.length - 1]?.focus(); }
      else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) { event.preventDefault(); focusable[0].focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", handleKey); previous?.focus(); };
  }, [open, onClose, sending]);

  if (!open) return null;
  const update = (field: keyof TipInput, value: string) => setInput((current) => ({ ...current, [field]: value }));
  const close = () => { if (!sending) { onClose(); setSent(false); setError(""); } };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!consent || sending) return;
    setSending(true); setError("");
    try {
      await submitTip(input);
      setSent(true); setInput(empty); setConsent(false);
    } catch (cause) {
      const code = cause instanceof Error ? cause.message : "submission_failed";
      setError(code === "rate_limited" ? (ko ? "잠시 뒤 다시 시도해주세요." : "Please try again later.") : code === "security_unavailable" ? (ko ? "보안 확인을 사용할 수 없습니다. 잠시 뒤 다시 시도해주세요." : "Security verification is unavailable. Please try again shortly.") : (ko ? "제보를 접수하지 못했습니다. 잠시 뒤 다시 시도해주세요." : "We could not receive your tip. Please try again shortly."));
    } finally { setSending(false); }
  };

  return <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#102a20]/70 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="tip-dialog-title" className="max-h-[min(90dvh,820px)] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#fffaf0] p-5 text-green-deep shadow-2xl sm:p-8">
      <div className="flex items-start justify-between gap-4"><div><p className="section-kicker">SEND A TIP</p><h2 id="tip-dialog-title" className="mt-2 text-2xl font-extrabold sm:text-3xl">{ko ? "씨앗에 이야기 들려주세요" : "Share your story with SEED"}</h2></div><button type="button" onClick={close} disabled={sending} aria-label={ko ? "제보 창 닫기" : "Close tip form"} className="rounded-full p-2 hover:bg-green-deep/10"><X size={23}/></button></div>
      {sent ? <div className="py-12 text-center" role="status"><p className="text-xl font-extrabold">{ko ? "제보가 접수되었습니다." : "Your tip has been received."}</p><p className="mt-3 text-sm leading-6 text-charcoal/70">{ko ? "보내주신 내용을 검토하겠습니다. 답변을 약속드리지는 않지만, 연락이 필요하면 남겨주신 이메일로 연락드릴 수 있습니다." : "We'll review what you shared. We cannot promise a reply, but may contact you by email if needed."}</p><button type="button" onClick={close} className="button-primary mt-8">{ko ? "닫기" : "Close"}</button></div> : <form onSubmit={submit} className="mt-6 space-y-4">
        <p className="text-sm leading-6 text-charcoal/70">{ko ? "생활 속 문제, 확인이 필요한 자료, 놓치면 안 될 이야기를 직접 적어주세요. 이름 없이도 제보할 수 있습니다." : "Tell us about a local issue, a record worth checking, or a story we should not miss. You may submit anonymously."}</p>
        <label className="field"><span>{ko ? "제보 분야" : "Topic"}</span><select value={input.category} onChange={(e) => update("category", e.target.value)}>{["생활 속 문제", "공공기관·예산", "법·정책", "기업·시장", "기사 제안", "기타"].map((category, i) => <option key={category} value={category}>{ko ? category : ["Everyday issue", "Public spending", "Law and policy", "Business and markets", "Story idea", "Other"][i]}</option>)}</select></label>
        <label className="field"><span>{ko ? "제목 *" : "Title *"}</span><input name="title" required minLength={3} maxLength={160} value={input.title} onChange={(e) => update("title", e.target.value)} placeholder={ko ? "어떤 이야기인가요?" : "What is your story about?"}/></label>
        <label className="field"><span>{ko ? "제보 내용 *" : "Details *"}</span><textarea required minLength={20} maxLength={5000} rows={6} value={input.description} onChange={(e) => update("description", e.target.value)} placeholder={ko ? "언제, 어디서, 무엇이 있었는지와 확인할 수 있는 근거를 적어주세요." : "Describe what happened, when and where, and how we can verify it."}/></label>
        <label className="field"><span>{ko ? "자료 링크 (선택)" : "Evidence link (optional)"}</span><input type="url" maxLength={500} value={input.evidenceUrl} onChange={(e) => update("evidenceUrl", e.target.value)} placeholder="https://"/></label>
        <div className="grid gap-4 sm:grid-cols-2"><label className="field"><span>{ko ? "이름 또는 닉네임 (선택)" : "Name or nickname (optional)"}</span><input maxLength={80} value={input.name} onChange={(e) => update("name", e.target.value)}/></label><label className="field"><span>{ko ? "답변받을 이메일 (선택)" : "Reply email (optional)"}</span><input type="email" maxLength={254} value={input.email} onChange={(e) => update("email", e.target.value)}/></label></div>
        <label className="flex items-start gap-2 text-xs leading-5 text-charcoal/70"><input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1"/><span>{ko ? "제보 검토와 필요한 경우의 연락을 위해 입력한 내용을 수집·이용하는 데 동의합니다. 민감한 개인정보는 적지 말아주세요." : "I agree to the collection and use of this information to review my tip and contact me if needed. Please avoid sensitive personal information."}</span></label>
        {error && <p role="alert" className="text-sm font-bold text-red-700">{error}</p>}
        <div className="flex justify-end"><button type="submit" disabled={sending || !consent} className="button-primary"><Send size={16}/>{sending ? (ko ? "접수 중…" : "Sending…") : (ko ? "제보 보내기" : "Send tip")}</button></div>
      </form>}
    </div>
  </div>;
}
