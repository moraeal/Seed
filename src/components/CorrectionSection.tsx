import { CheckCircle2, ExternalLink, FileWarning, LockKeyhole, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { CorrectionRecord, CorrectionStatus, correctionsReady, createCorrection, loadCorrections } from "../lib/corrections";
import { useLanguage } from "../i18n";

const statusCopy: Record<CorrectionStatus, { ko: string; en: string; className: string }> = {
  open: { ko: "접수됨", en: "Submitted", className: "bg-gold/15 text-[#7a5610]" },
  reviewing: { ko: "검토 중", en: "Under review", className: "bg-blue-100 text-blue-800" },
  accepted: { ko: "반영 예정", en: "Accepted", className: "bg-green-pale text-green-deep" },
  resolved: { ko: "반영 완료", en: "Resolved", className: "bg-green-deep text-white" },
  rejected: { ko: "반영하지 않음", en: "Not accepted", className: "bg-charcoal/10 text-charcoal/65" },
};

export default function CorrectionSection({ postSlug }: { postSlug: string }) {
  const { session, user, nickname, isVerified, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const location = useLocation();
  const [records, setRecords] = useState<CorrectionRecord[]>([]);
  const [targetExcerpt, setTargetExcerpt] = useState("");
  const [description, setDescription] = useState("");
  const [evidenceUrl, setEvidenceUrl] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const refresh = () => loadCorrections(postSlug).then(setRecords).catch(() => setNotice(ko ? "제보 기록을 불러오지 못했습니다." : "Could not load correction reports."));

  useEffect(() => { void refresh(); }, [postSlug]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!user || !session || !isVerified) return setNotice(ko ? "이메일 인증회원만 사실 확인을 요청할 수 있습니다." : "Only email-verified members may submit a correction.");
    if (targetExcerpt.trim().length < 2 || description.trim().length < 10) return setNotice(ko ? "확인할 부분은 2자 이상, 설명은 10자 이상 입력해주세요." : "Enter at least 2 characters for the target and 10 for the explanation.");
    if (evidenceUrl && !/^https?:\/\//i.test(evidenceUrl)) return setNotice(ko ? "근거 링크는 http:// 또는 https://로 시작해야 합니다." : "The evidence link must begin with http:// or https://.");

    setSubmitting(true);
    setNotice("");
    try {
      await createCorrection({ postSlug, nickname, targetExcerpt: targetExcerpt.trim(), description: description.trim(), evidenceUrl: evidenceUrl.trim(), accessToken: session.access_token, userId: user.id });
      setTargetExcerpt(""); setDescription(""); setEvidenceUrl("");
      setNotice(ko ? "사실 확인 요청이 공개 기록에 등록되었습니다." : "Your correction request is now in the public record.");
      await refresh();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "등록하지 못했습니다." : "Could not submit the report."));
    } finally { setSubmitting(false); }
  };

  const returnTo = `${location.pathname}${location.search}#fact-check-request`;
  const loginPath = `/account?mode=login&returnTo=${encodeURIComponent(returnTo)}`;
  const signupPath = `/account?mode=signup&returnTo=${encodeURIComponent(returnTo)}`;

  return <section id="fact-check-request" className="mt-8 scroll-mt-28 border-t border-green-deep/10 pt-7" aria-labelledby="corrections-title">
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div><span className="section-kicker">FACT-CHECK REQUESTS</span><h3 id="corrections-title" className="mt-2 text-xl font-extrabold text-navy">{ko ? "독자 사실 확인 요청" : "Reader fact-check requests"}</h3></div>
      <span className="rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep">{ko ? `공개 기록 ${records.length}건` : `${records.length} public records`}</span>
    </div>
    <p className="mt-3 text-sm leading-6 text-charcoal/55">{ko ? "잘못된 사실이나 빠진 맥락을 발견했다면 대상 문장과 근거를 남겨주세요. 요청과 검토 결과는 누구나 볼 수 있습니다." : "If you find an error or missing context, identify the passage and provide evidence. Requests and review outcomes are public."}</p>

    {!authLoading && (!user || !isVerified) ? <div className="mt-5 flex flex-col gap-4 rounded-lg border border-green-deep/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3"><LockKeyhole className="mt-0.5 shrink-0 text-green-mid" size={19}/><p className="text-sm leading-6 text-charcoal/65">{ko ? "읽기는 누구나 가능하며, 제보는 이메일 인증회원만 작성할 수 있습니다." : "Anyone may read the record; verified members may submit reports."}</p></div>
      <div className="flex shrink-0 gap-2"><Link to={loginPath} className="button-secondary text-xs">{ko ? "로그인" : "Log in"}</Link><Link to={signupPath} className="button-primary text-xs">{ko ? "회원가입" : "Sign up"}</Link></div>
    </div> : <form onSubmit={submit} className="mt-5 rounded-lg border border-green-deep/10 bg-white p-5">
      <div className="flex items-center gap-2 border-b border-green-deep/10 pb-4"><strong className="text-sm text-navy">{nickname}</strong><span className="inline-flex items-center gap-1 rounded-full bg-green-pale px-2.5 py-1 text-[11px] font-extrabold text-green-deep"><CheckCircle2 size={13}/>{ko ? "인증회원" : "Verified"}</span></div>
      <label className="field mt-4"><span>{ko ? "확인이 필요한 문장 또는 부분" : "Passage or section to check"}</span><textarea rows={2} maxLength={500} value={targetExcerpt} onChange={(e) => setTargetExcerpt(e.target.value)} placeholder={ko ? "본문 문장을 붙여넣거나 중간 제목을 적어주세요." : "Paste the passage or name the section."} required/></label>
      <label className="field mt-4"><span>{ko ? "잘못되었다고 보는 이유" : "What may be wrong and why"}</span><textarea rows={4} maxLength={1500} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={ko ? "정정할 내용과 판단 근거를 구체적으로 적어주세요." : "Describe the proposed correction and its basis."} required/></label>
      <label className="field mt-4"><span>{ko ? "근거 링크 (선택)" : "Evidence link (optional)"}</span><input type="url" maxLength={500} value={evidenceUrl} onChange={(e) => setEvidenceUrl(e.target.value)} placeholder="https://"/></label>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><span className="text-xs text-charcoal/45">{ko ? "개인정보·비방 표현은 남기지 마세요." : "Do not include personal data or abusive language."}</span><button type="submit" className="button-primary" disabled={submitting || !correctionsReady}><Send size={15}/>{submitting ? (ko ? "등록 중" : "Submitting") : (ko ? "사실 확인 요청" : "Submit request")}</button></div>
    </form>}
    {notice && <p className="mt-3 text-sm font-semibold text-green-deep" role="status">{notice}</p>}

    <div className="mt-5 divide-y divide-green-deep/10 border-y border-green-deep/10">
      {records.map((record) => { const status = statusCopy[record.status]; return <article key={record.id} className="py-5">
        <div className="flex flex-wrap items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold ${status.className}`}>{ko ? status.ko : status.en}</span><strong className="text-sm text-navy">{record.nickname}</strong><time className="ml-auto text-xs text-charcoal/40">{new Date(record.created_at).toLocaleDateString(ko ? "ko-KR" : "en-US")}</time></div>
        <p className="mt-3 border-l-2 border-gold pl-3 text-sm font-semibold leading-6 text-navy">“{record.target_excerpt}”</p>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-charcoal/70">{record.description}</p>
        {record.evidence_url && <a href={record.evidence_url} target="_blank" rel="noreferrer nofollow" className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold text-green-deep underline underline-offset-4">{ko ? "제시한 근거 보기" : "View submitted evidence"}<ExternalLink size={12}/></a>}
        {record.resolution_note && <div className="mt-4 rounded-md bg-green-pale p-4"><p className="text-xs font-extrabold text-green-deep">{ko ? "검토 결과" : "Review outcome"}</p><p className="mt-2 text-sm leading-6 text-charcoal/70">{record.resolution_note}</p></div>}
      </article>; })}
      {records.length === 0 && <div className="flex items-center justify-center gap-2 py-7 text-sm text-charcoal/45"><FileWarning size={16}/>{ko ? "현재 공개된 사실 확인 요청이 없습니다." : "There are no public fact-check requests."}</div>}
    </div>
  </section>;
}

