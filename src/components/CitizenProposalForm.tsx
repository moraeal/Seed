import { ClipboardCheck, Mail, Save, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type ProposalDraft = {
  nickname: string;
  email: string;
  title: string;
  category: string;
  region: string;
  problem: string;
  publicReason: string;
  solution: string;
  evidence: string;
};

const emptyDraft: ProposalDraft = {
  nickname: "",
  email: "",
  title: "",
  category: "",
  region: "",
  problem: "",
  publicReason: "",
  solution: "",
  evidence: "",
};

const storageKey = "seed-citizen-proposal-draft";

export default function CitizenProposalForm({ ko }: { ko: boolean }) {
  const [draft, setDraft] = useState<ProposalDraft>(emptyDraft);
  const [consent, setConsent] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setDraft({ ...emptyDraft, ...JSON.parse(stored) });
    } catch {
      // 저장된 초안을 읽을 수 없으면 빈 양식으로 시작합니다.
    }
  }, []);

  const update = (field: keyof ProposalDraft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setSaved(false);
  };

  const saveDraft = () => {
    window.localStorage.setItem(storageKey, JSON.stringify(draft));
    setSaved(true);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    saveDraft();
    setPreviewOpen(true);
  };

  const emailBody = useMemo(() => [
    `[${ko ? "시민제안" : "Citizen Proposal"}] ${draft.title}`,
    "",
    `${ko ? "제안자" : "Name"}: ${draft.nickname}`,
    `${ko ? "회신 이메일" : "Email"}: ${draft.email}`,
    `${ko ? "분야" : "Category"}: ${draft.category}`,
    `${ko ? "지역·대상" : "Region / Community"}: ${draft.region || "-"}`,
    "",
    `[${ko ? "문제 설명" : "Problem"}]`, draft.problem,
    "",
    `[${ko ? "공공적 문제인 이유" : "Why It Matters Publicly"}]`, draft.publicReason,
    "",
    `[${ko ? "제안하는 해결책" : "Proposed Solution"}]`, draft.solution,
    "",
    `[${ko ? "근거·자료" : "Evidence / Sources"}]`, draft.evidence || "-",
  ].join("\n"), [draft, ko]);

  const mailto = `mailto:seedcivicpartners@gmail.com?subject=${encodeURIComponent(`[${ko ? "시민제안" : "Citizen Proposal"}] ${draft.title}`)}&body=${encodeURIComponent(emailBody)}`;
  const inputClass = "mt-2 w-full border border-green-deep/15 bg-ivory px-4 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-charcoal/30 focus:border-green-mid focus:ring-2 focus:ring-green-pale";
  const labelClass = "text-sm font-extrabold text-navy";

  return (
    <>
      <form id="proposal-form" onSubmit={submit} className="scroll-mt-28 border border-green-deep/15 bg-white p-6 shadow-[0_20px_60px_rgba(23,76,58,.08)] sm:p-10">
        <div className="flex flex-col gap-4 border-b border-green-deep/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="section-kicker">PROPOSAL FORM</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "씨앗시민 제안서" : "Citizen Proposal Form"}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/55">{ko ? "완성된 정책이 아니어도 괜찮습니다. 생활에서 발견한 문제와 왜 함께 다뤄야 하는지를 구체적으로 적어주세요." : "Your idea does not need to be a finished policy. Describe the problem you have seen and why citizens should address it together."}</p></div>
          <button type="button" onClick={saveDraft} className="button-secondary shrink-0 text-xs"><Save size={15}/>{saved ? (ko ? "초안 저장됨" : "Draft saved") : (ko ? "초안 저장" : "Save draft")}</button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>{ko ? "이름 또는 닉네임" : "Name or nickname"}<span className="text-gold"> *</span><input value={draft.nickname} onChange={(e) => update("nickname", e.target.value)} className={inputClass} required placeholder={ko ? "공개 시 사용할 이름" : "Name to use publicly"}/></label>
          <label className={labelClass}>{ko ? "회신받을 이메일" : "Reply email"}<span className="text-gold"> *</span><input type="email" value={draft.email} onChange={(e) => update("email", e.target.value)} className={inputClass} required placeholder="name@example.com"/></label>
          <label className={`${labelClass} md:col-span-2`}>{ko ? "제안 제목" : "Proposal title"}<span className="text-gold"> *</span><input value={draft.title} onChange={(e) => update("title", e.target.value)} className={inputClass} required placeholder={ko ? "바꾸고 싶은 내용을 한 문장으로 적어주세요" : "Describe the change in one sentence"}/></label>
          <label className={labelClass}>{ko ? "관련 분야" : "Category"}<span className="text-gold"> *</span><select value={draft.category} onChange={(e) => update("category", e.target.value)} className={inputClass} required><option value="">{ko ? "분야 선택" : "Select"}</option>{(ko ? ["생활·행정", "복지·교육", "청년·일자리", "지역·환경", "법치·제도", "시장·기업", "기타"] : ["Daily Life & Administration", "Welfare & Education", "Youth & Jobs", "Local & Environment", "Law & Institutions", "Markets & Business", "Other"]).map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className={labelClass}>{ko ? "관련 지역 또는 대상" : "Region or community"}<input value={draft.region} onChange={(e) => update("region", e.target.value)} className={inputClass} placeholder={ko ? "예: 의정부시, 청년 구직자" : "e.g. Uijeongbu, young job seekers"}/></label>
          <label className={`${labelClass} md:col-span-2`}>{ko ? "어떤 문제가 있습니까?" : "What is the problem?"}<span className="text-gold"> *</span><textarea value={draft.problem} onChange={(e) => update("problem", e.target.value)} className={`${inputClass} min-h-32 resize-y`} required placeholder={ko ? "직접 겪었거나 관찰한 사실을 중심으로 적어주세요." : "Focus on facts you experienced or observed."}/></label>
          <label className={`${labelClass} md:col-span-2`}>{ko ? "왜 공공적으로 함께 다뤄야 합니까?" : "Why should citizens address it together?"}<span className="text-gold"> *</span><textarea value={draft.publicReason} onChange={(e) => update("publicReason", e.target.value)} className={`${inputClass} min-h-32 resize-y`} required placeholder={ko ? "누구에게 어떤 부담이나 불공정이 생기는지 설명해주세요." : "Explain who bears the burden and what public value is at stake."}/></label>
          <label className={`${labelClass} md:col-span-2`}>{ko ? "어떻게 바꾸면 좋겠습니까?" : "What should change?"}<span className="text-gold"> *</span><textarea value={draft.solution} onChange={(e) => update("solution", e.target.value)} className={`${inputClass} min-h-32 resize-y`} required placeholder={ko ? "정부에 요구하는 것만이 아니라 시민·시장·지역사회가 할 수 있는 방법도 제안해주세요." : "Consider what citizens, markets and communities can do as well as government."}/></label>
          <label className={`${labelClass} md:col-span-2`}>{ko ? "참고할 근거·자료·링크" : "Evidence, sources or links"}<textarea value={draft.evidence} onChange={(e) => update("evidence", e.target.value)} className={`${inputClass} min-h-24 resize-y`} placeholder={ko ? "기사, 통계, 사진, 문서 등의 링크가 있다면 적어주세요." : "Add links to articles, data, photos or documents if available."}/></label>
        </div>

        <label className="mt-7 flex cursor-pointer items-start gap-3 border-t border-green-deep/10 pt-6 text-xs leading-6 text-charcoal/60"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-1 size-4 accent-green-deep"/><span>{ko ? "제안 검토와 회신을 위해 이름·이메일과 제안 내용을 씨드시민파트너스에 전달하는 데 동의합니다. 공개할 경우에는 사전에 제안자와 협의합니다." : "I agree to share my name, email and proposal with SEED Civic Partners for review and response. Publication will be discussed with the proposer in advance."}</span></label>
        <div className="mt-7 flex flex-wrap items-center gap-3"><button type="submit" className="button-primary">{ko ? "제안서 확인하기" : "Review proposal"}<ClipboardCheck size={16}/></button><span className="text-xs leading-5 text-charcoal/40">{ko ? "작성 내용은 먼저 이 브라우저에 초안으로 저장됩니다." : "Your draft is first saved in this browser."}</span></div>
      </form>

      {previewOpen && (
        <div className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-navy/65 px-4 py-8" role="dialog" aria-modal="true" aria-labelledby="proposal-preview-title">
          <div className="w-full max-w-2xl border border-white/20 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-green-deep/10 p-6 sm:p-8"><div><span className="section-kicker">FINAL REVIEW</span><h2 id="proposal-preview-title" className="editorial-title mt-3 text-2xl font-bold text-navy">{ko ? "제안서를 확인해주세요" : "Review your proposal"}</h2></div><button type="button" onClick={() => setPreviewOpen(false)} aria-label={ko ? "닫기" : "Close"} className="grid size-9 place-items-center border border-green-deep/15 text-charcoal/50 hover:text-green-deep"><X size={18}/></button></div>
            <div className="max-h-[55vh] overflow-y-auto p-6 text-sm leading-7 sm:p-8"><p className="text-xs font-bold text-green-mid">{draft.category}{draft.region ? ` · ${draft.region}` : ""}</p><h3 className="mt-2 text-xl font-extrabold text-navy">{draft.title}</h3><dl className="mt-6 grid gap-5">{([[ko ? "문제" : "Problem", draft.problem], [ko ? "공공적 의미" : "Public significance", draft.publicReason], [ko ? "제안" : "Proposal", draft.solution], [ko ? "근거·자료" : "Evidence", draft.evidence || (ko ? "별도 자료 없음" : "No additional sources")]] as const).map(([label, value]) => <div key={label}><dt className="text-xs font-extrabold tracking-[.12em] text-green-deep">{label}</dt><dd className="mt-1 whitespace-pre-wrap text-charcoal/65">{value}</dd></div>)}</dl></div>
            <div className="border-t border-green-deep/10 bg-ivory p-6 sm:p-8"><p className="text-xs leading-6 text-charcoal/55">{ko ? "현재 홈페이지에는 별도 접수 데이터베이스가 없습니다. 아래 버튼을 누르면 기본 이메일 앱에 작성 내용이 입력되며, 마지막 ‘보내기’를 눌러야 실제 접수됩니다." : "The site does not yet have a proposal database. The button below opens your email app with the proposal filled in; you must press Send to submit it."}</p><div className="mt-5 flex flex-wrap gap-3"><a href={mailto} className="button-primary" onClick={() => window.localStorage.removeItem(storageKey)}>{ko ? "이메일 앱에서 보내기" : "Send with email app"}<Mail size={16}/></a><button type="button" onClick={() => setPreviewOpen(false)} className="button-secondary">{ko ? "돌아가서 수정" : "Continue editing"}</button></div></div>
          </div>
        </div>
      )}
    </>
  );
}
