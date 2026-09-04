import { CheckCircle2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { subscribeToNewsletter } from "../lib/engagement";

export default function NewsletterSignup() {
  const { language } = useLanguage();
  const location = useLocation();
  const ko = language === "ko";
  const [email, setEmail] = useState("");
  const [consented, setConsented] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (website || !consented || status === "submitting") return;
    setStatus("submitting");
    try {
      await subscribeToNewsletter(email.trim(), language, location.pathname);
      setStatus("success");
      setEmail("");
      setConsented(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-green-deep/15 bg-[#E8EFE9] py-6 sm:py-7" aria-labelledby="newsletter-title">
      <div className="container-page grid gap-4 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-8">
        <div>
          <p className="section-kicker">SEED LETTER</p>
          <h2 id="newsletter-title" className="editorial-title mt-2 text-2xl font-bold text-navy sm:text-3xl">{ko ? "새 글을 놓치지 마세요" : "Never miss a new story"}</h2>
          <p className="mt-2 text-sm leading-6 text-charcoal/62">{ko ? "씨앗의 소리가 새 콘텐츠와 주요 소식을 전할 이메일을 등록합니다." : "Register the email where SEED VOICE can send new stories and important updates."}</p>
        </div>
        {status === "success" ? (
          <div className="flex items-center gap-3 border-l-2 border-green-mid bg-white/70 px-5 py-4 text-sm font-bold text-green-deep" role="status"><CheckCircle2 size={20}/>{ko ? "구독 신청이 기록되었습니다." : "Your subscription request has been recorded."}</div>
        ) : (
          <form onSubmit={submit} className="grid gap-3" aria-label={ko ? "이메일 구독 신청" : "Email subscription"}>
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">{ko ? "이메일" : "Email"}</label>
              <input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-12 flex-1 rounded-sm border border-green-deep/20 bg-white px-4 text-sm outline-none focus:border-green-mid focus:ring-2 focus:ring-green-mid/10" placeholder="name@example.com" autoComplete="email" required />
              <button type="submit" className="button-primary min-w-32" disabled={!consented || status === "submitting"}><Mail size={16}/>{status === "submitting" ? (ko ? "등록 중" : "Saving") : (ko ? "구독 신청" : "Subscribe")}</button>
            </div>
            <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-charcoal/55"><input type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} className="mt-1 accent-green-deep" required/><span>{ko ? "수집 항목: 이메일 · 이용 목적: 새 콘텐츠 알림 · 보유 기간: 구독 철회 시까지. 수집·이용에 동의합니다. 철회: seedcivicpartners@gmail.com" : "Data: email · Purpose: new-content notices · Retention: until you unsubscribe. I agree. Unsubscribe: seedcivicpartners@gmail.com"}</span></label>
            <label className="absolute -left-[10000px]" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
            {status === "error" && <p className="text-xs font-semibold text-red-700" role="alert">{ko ? "지금은 등록할 수 없습니다. 잠시 후 다시 시도해주세요." : "We could not save your request. Please try again shortly."}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
