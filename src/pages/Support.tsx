import {
  ArrowDown,
  Check,
  ClipboardCheck,
  Eye,
  HandHeart,
  Mail,
  Scale,
  ShieldCheck,
  UserRoundCheck,
  X,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useLanguage } from "../i18n";

type PledgeDraft = {
  supporterType: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  supportMethod: string;
  amount: string;
  customAmount: string;
  supportArea: string;
  recognition: string;
  message: string;
};

const emptyDraft: PledgeDraft = {
  supporterType: "",
  name: "",
  contactPerson: "",
  email: "",
  phone: "",
  supportMethod: "",
  amount: "",
  customAmount: "",
  supportArea: "",
  recognition: "",
  message: "",
};

const inputClass = "mt-2 w-full border border-green-deep/15 bg-ivory px-4 py-3.5 text-base text-charcoal outline-none transition placeholder:text-charcoal/30 focus:border-green-mid focus:ring-2 focus:ring-green-pale";
const labelClass = "text-sm font-extrabold text-navy";

function SupportPledgeForm({ ko }: { ko: boolean }) {
  const [draft, setDraft] = useState<PledgeDraft>(emptyDraft);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [independenceConsent, setIndependenceConsent] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const update = (field: keyof PledgeDraft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPreviewOpen(true);
  };

  const supporterTypes = ko
    ? ["개인", "기업", "단체·기관", "전문가·전문조직", "기타"]
    : ["Individual", "Company", "Organization", "Professional / Professional Firm", "Other"];
  const supportMethods = ko
    ? ["매월 정기후원", "일시후원", "사업·프로젝트 후원", "전문지식·재능기부", "물품·서비스 후원", "상담 후 결정"]
    : ["Monthly support", "One-time support", "Project sponsorship", "Pro bono expertise", "In-kind goods or services", "Decide after consultation"];
  const amounts = ko
    ? ["월 1만 원", "월 3만 원", "월 5만 원", "월 10만 원", "일시 10만 원", "일시 50만 원", "직접 입력", "금액 협의"]
    : ["KRW 10,000 monthly", "KRW 30,000 monthly", "KRW 50,000 monthly", "KRW 100,000 monthly", "KRW 100,000 once", "KRW 500,000 once", "Enter another amount", "Discuss amount"];
  const supportAreas = ko
    ? ["용도를 정하지 않는 일반후원", "시민감시", "입법감시", "세금감시", "칼럼·브리핑 제작", "시민언어·시민교육", "취재·데이터·기술 기반", "협의 후 결정"]
    : ["Unrestricted support", "Civic watchdog work", "Legislative monitoring", "Tax monitoring", "Columns and briefings", "Civic language and education", "Reporting, data and technology", "Decide after consultation"];

  const displayedAmount = draft.amount === (ko ? "직접 입력" : "Enter another amount")
    ? draft.customAmount
    : draft.amount;

  const emailBody = useMemo(() => [
    ko ? "[씨앗의 소리 후원 약정]" : "[SEED VOICE Support Pledge]",
    "",
    `${ko ? "후원자 구분" : "Supporter type"}: ${draft.supporterType}`,
    `${ko ? "이름·기업·단체명" : "Name / organization"}: ${draft.name}`,
    `${ko ? "담당자" : "Contact person"}: ${draft.contactPerson || "-"}`,
    `${ko ? "이메일" : "Email"}: ${draft.email}`,
    `${ko ? "연락처" : "Phone"}: ${draft.phone || "-"}`,
    "",
    `${ko ? "후원 방식" : "Support method"}: ${draft.supportMethod}`,
    `${ko ? "약정 금액" : "Pledge amount"}: ${displayedAmount || "-"}`,
    `${ko ? "희망 후원 분야" : "Preferred area"}: ${draft.supportArea}`,
    `${ko ? "후원자 표시" : "Recognition preference"}: ${draft.recognition}`,
    "",
    `[${ko ? "남길 말씀" : "Message"}]`,
    draft.message || "-",
    "",
    ko
      ? "개인정보 수집·이용과 씨앗의 소리 편집권 독립 원칙을 확인하고 동의했습니다."
      : "I have read and agreed to the privacy notice and SEED VOICE's editorial-independence principle.",
  ].join("\n"), [displayedAmount, draft, ko]);

  const mailto = `mailto:seedvoicekr@gmail.com?subject=${encodeURIComponent(ko ? `[후원 약정] ${draft.name}` : `[Support Pledge] ${draft.name}`)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>
      <form id="support-pledge" onSubmit={submit} className="scroll-mt-28 border border-green-deep/15 bg-white p-6 shadow-[0_24px_70px_rgba(23,76,58,.09)] sm:p-10">
        <div className="border-b border-green-deep/10 pb-7">
          <span className="section-kicker">SUPPORT PLEDGE</span>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">
            {ko ? "후원 약정서" : "Support Pledge"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/60">
            {ko
              ? "약정을 보내주시면 확인 후 후원 방법과 필요한 절차를 이메일 또는 전화로 안내드립니다. 이 양식만으로 결제나 출금이 이루어지지는 않습니다."
              : "After receiving your pledge, we will contact you with payment details and any necessary steps. Submitting this form does not initiate a payment or bank withdrawal."}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className={labelClass}>{ko ? "후원자 구분" : "Supporter type"}<span className="text-gold"> *</span><select value={draft.supporterType} onChange={(event) => update("supporterType", event.target.value)} className={inputClass} required><option value="">{ko ? "선택해주세요" : "Select"}</option>{supporterTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className={labelClass}>{ko ? "이름·기업·단체명" : "Name or organization"}<span className="text-gold"> *</span><input value={draft.name} onChange={(event) => update("name", event.target.value)} className={inputClass} required /></label>
          <label className={labelClass}>{ko ? "담당자 이름" : "Contact person"}<input value={draft.contactPerson} onChange={(event) => update("contactPerson", event.target.value)} className={inputClass} placeholder={ko ? "기업·단체인 경우" : "For companies and organizations"} /></label>
          <label className={labelClass}>{ko ? "이메일" : "Email"}<span className="text-gold"> *</span><input type="email" value={draft.email} onChange={(event) => update("email", event.target.value)} className={inputClass} required placeholder="name@example.com" /></label>
          <label className={labelClass}>{ko ? "연락처" : "Phone"}<input value={draft.phone} onChange={(event) => update("phone", event.target.value)} className={inputClass} placeholder={ko ? "선택 입력" : "Optional"} /></label>
          <label className={labelClass}>{ko ? "후원 방식" : "Support method"}<span className="text-gold"> *</span><select value={draft.supportMethod} onChange={(event) => update("supportMethod", event.target.value)} className={inputClass} required><option value="">{ko ? "선택해주세요" : "Select"}</option>{supportMethods.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className={labelClass}>{ko ? "약정 금액" : "Pledge amount"}<span className="text-gold"> *</span><select value={draft.amount} onChange={(event) => update("amount", event.target.value)} className={inputClass} required><option value="">{ko ? "선택해주세요" : "Select"}</option>{amounts.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className={labelClass}>{ko ? "희망 후원 분야" : "Preferred area"}<span className="text-gold"> *</span><select value={draft.supportArea} onChange={(event) => update("supportArea", event.target.value)} className={inputClass} required><option value="">{ko ? "선택해주세요" : "Select"}</option>{supportAreas.map((item) => <option key={item}>{item}</option>)}</select></label>
          {draft.amount === (ko ? "직접 입력" : "Enter another amount") && <label className={`${labelClass} md:col-span-2`}>{ko ? "희망 금액" : "Custom amount"}<span className="text-gold"> *</span><input value={draft.customAmount} onChange={(event) => update("customAmount", event.target.value)} className={inputClass} required placeholder={ko ? "예: 월 20만 원, 일시 300만 원" : "e.g. KRW 200,000 monthly"} /></label>}
          <label className={`${labelClass} md:col-span-2`}>{ko ? "후원자 표시 방법" : "Recognition preference"}<span className="text-gold"> *</span><select value={draft.recognition} onChange={(event) => update("recognition", event.target.value)} className={inputClass} required><option value="">{ko ? "선택해주세요" : "Select"}</option><option>{ko ? "이름·기업·단체명 공개 가능" : "Name may be publicly recognized"}</option><option>{ko ? "익명 후원" : "Anonymous support"}</option><option>{ko ? "협의 후 결정" : "Decide after consultation"}</option></select></label>
          <label className={`${labelClass} md:col-span-2`}>{ko ? "남기실 말씀" : "Message"}<textarea value={draft.message} onChange={(event) => update("message", event.target.value)} className={`${inputClass} min-h-28 resize-y`} placeholder={ko ? "후원을 결심한 이유, 함께 살펴보고 싶은 의제, 전문지식이나 협력 제안 등을 자유롭게 적어주세요." : "Tell us why you wish to support SEED, the issues you care about, or any expertise and partnership you would like to offer."} /></label>
        </div>

        <div className="mt-8 space-y-4 border-t border-green-deep/10 pt-6">
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-6 text-charcoal/65"><input type="checkbox" checked={privacyConsent} onChange={(event) => setPrivacyConsent(event.target.checked)} required className="mt-1 size-4 shrink-0 accent-green-deep"/><span>{ko ? "후원 상담과 약정 확인을 위해 이름·연락처·이메일·약정 내용을 수집하고 이용하는 데 동의합니다. 해당 정보는 후원 협의와 관리 목적 외에 공개하지 않습니다." : "I consent to the collection and use of my name, contact details and pledge information for support consultation and administration. This information will not be made public without permission."}</span></label>
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-6 text-charcoal/65"><input type="checkbox" checked={independenceConsent} onChange={(event) => setIndependenceConsent(event.target.checked)} required className="mt-1 size-4 shrink-0 accent-green-deep"/><span>{ko ? "후원은 씨앗의 소리의 특정 기사·논평·감시 대상 선정이나 편집 방향에 대한 영향력을 부여하지 않는다는 원칙을 확인했습니다." : "I understand that support does not confer influence over SEED VOICE's reporting, commentary, watchdog targets or editorial direction."}</span></label>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button type="submit" className="button-primary">{ko ? "약정 내용 확인하기" : "Review pledge"}<ClipboardCheck size={16}/></button>
          <p className="max-w-xl text-xs leading-6 text-charcoal/45">{ko ? "작성하신 내용은 이 단계에서 아직 전송되지 않습니다." : "Your information is not sent until you complete the email step."}</p>
        </div>
      </form>

      {previewOpen && (
        <div className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-navy/70 px-4 py-8" role="dialog" aria-modal="true" aria-labelledby="pledge-preview-title">
          <div className="w-full max-w-2xl border border-white/20 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-green-deep/10 p-6 sm:p-8"><div><span className="section-kicker">FINAL REVIEW</span><h2 id="pledge-preview-title" className="editorial-title mt-3 text-2xl font-bold text-navy">{ko ? "후원 약정을 확인해주세요" : "Review your pledge"}</h2></div><button type="button" onClick={() => setPreviewOpen(false)} aria-label={ko ? "닫기" : "Close"} className="grid size-9 place-items-center border border-green-deep/15 text-charcoal/50 hover:text-green-deep"><X size={18}/></button></div>
            <div className="max-h-[55vh] overflow-y-auto p-6 sm:p-8">
              <dl className="grid gap-x-6 gap-y-5 text-sm md:grid-cols-2">
                {([
                  [ko ? "후원자" : "Supporter", `${draft.name} · ${draft.supporterType}`],
                  [ko ? "연락" : "Contact", `${draft.email}${draft.phone ? ` · ${draft.phone}` : ""}`],
                  [ko ? "후원 방식" : "Support method", draft.supportMethod],
                  [ko ? "약정 금액" : "Pledge amount", displayedAmount],
                  [ko ? "후원 분야" : "Support area", draft.supportArea],
                  [ko ? "후원자 표시" : "Recognition", draft.recognition],
                ] as const).map(([label, value]) => <div key={label}><dt className="text-xs font-extrabold tracking-[.1em] text-green-deep">{label}</dt><dd className="mt-1.5 text-charcoal/70">{value || "-"}</dd></div>)}
              </dl>
              {draft.message && <div className="mt-6 border-t border-green-deep/10 pt-5"><p className="text-xs font-extrabold tracking-[.1em] text-green-deep">{ko ? "남기실 말씀" : "Message"}</p><p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-charcoal/65">{draft.message}</p></div>}
            </div>
            <div className="border-t border-green-deep/10 bg-ivory p-6 sm:p-8"><p className="text-xs leading-6 text-charcoal/58">{ko ? "아래 버튼을 누르면 이메일 앱에 약정 내용이 입력됩니다. 이메일 앱에서 마지막 ‘보내기’를 눌러야 접수가 완료됩니다. 접수 후 후원 방법을 별도로 안내드립니다." : "The button below opens your email app with the pledge filled in. Press Send in your email app to complete submission. We will then contact you with payment details."}</p><div className="mt-5 flex flex-wrap gap-3"><a href={mailto} className="button-primary">{ko ? "이메일로 약정 보내기" : "Send pledge by email"}<Mail size={16}/></a><button type="button" onClick={() => setPreviewOpen(false)} className="button-secondary">{ko ? "돌아가서 수정" : "Continue editing"}</button></div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Support() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const audiences = ko
    ? ["씨앗의 문제의식에 공감하는 개인", "자유와 책임의 시민사회를 함께 키우려는 기업", "공익적 협력을 원하는 단체·기관", "지식과 경험을 나누려는 전문가"]
    : ["Individuals who share SEED's concerns", "Companies committed to a free and responsible civil society", "Organizations seeking public-interest collaboration", "Professionals offering knowledge and experience"];
  const uses = ko
    ? ["시민감시·입법감시·세금감시를 위한 조사와 자료 검증", "칼럼·브리핑·시민언어 콘텐츠 제작", "데이터·기술·보안과 공개 기록 시스템 운영", "시민 제안, 전문가 협력과 독립 취재 기반 마련"]
    : ["Research and verification for civic, legislative and tax monitoring", "Production of columns, briefings and civic-language content", "Data, technology, security and public-record systems", "Citizen proposals, professional collaboration and independent reporting"];

  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden bg-[#112B25] text-white">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(135deg,transparent_0%,rgba(210,164,63,.14)_100%)]" />
        <div className="container-page relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:py-24">
          <div>
            <span className="text-xs font-extrabold tracking-[.2em] text-gold-light">SUPPORT SEED VOICE</span>
            <h1 className="editorial-title mt-5 max-w-4xl text-4xl font-bold leading-[1.18] sm:text-5xl lg:text-6xl">
              {ko ? "감시는 독립적이어야 하고, 독립은 시민의 힘으로 이어져야 합니다." : "Watchdog work must be independent—and independence must be sustained by citizens."}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              {ko ? "씨앗의 소리에 공감하고 시민감시 활동이 꾸준히 이어지기를 바라는 분이라면 누구나 후원인이 될 수 있습니다. 개인과 기업, 단체와 기관, 전문가의 후원과 협력을 기다립니다." : "Anyone who shares SEED VOICE's purpose and wants independent civic watchdog work to continue can become a supporter. We welcome individuals, companies, organizations, institutions and professionals."}
            </p>
            <a href="#support-pledge" className="mt-8 inline-flex min-h-11 items-center gap-2 bg-gold px-5 text-sm font-extrabold text-navy transition hover:bg-gold-light">{ko ? "후원 약정 작성하기" : "Make a support pledge"}<ArrowDown size={17}/></a>
          </div>
          <aside className="border-l-2 border-gold/70 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-extrabold tracking-[.17em] text-gold-light">OUR PROMISE</p>
            <p className="mt-4 text-xl font-bold leading-8 sm:text-2xl">{ko ? "후원은 발언권을 사는 일이 아닙니다." : "Support does not buy editorial influence."}</p>
            <p className="mt-4 text-sm leading-7 text-white/65">{ko ? "후원 규모와 관계없이 기사, 논평, 감시 대상 선정은 편집 원칙과 공익적 판단에 따라 독립적으로 결정합니다." : "Regardless of the amount, reporting, commentary and watchdog priorities remain governed by editorial principles and public-interest judgment."}</p>
          </aside>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div><span className="section-kicker">WHO CAN SUPPORT</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "뜻을 나누는 누구나 함께할 수 있습니다" : "Everyone who shares the purpose can take part"}</h2><p className="mt-5 text-sm leading-7 text-charcoal/62">{ko ? "정기후원과 일시후원뿐 아니라 전문 자문, 데이터 분석, 법률·회계·기술 지원, 취재 협력과 물품·서비스 후원도 소중한 참여입니다." : "Participation may take the form of recurring or one-time support, professional advice, data analysis, legal, accounting or technical help, reporting collaboration, or in-kind services."}</p></div>
          <div className="grid gap-px overflow-hidden border border-green-deep/10 bg-green-deep/10 sm:grid-cols-2">{audiences.map((item, index) => <div key={item} className="flex min-h-28 gap-4 bg-white p-6"><span className="text-sm font-extrabold text-gold">0{index + 1}</span><p className="font-bold leading-7 text-navy">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div><span className="section-kicker">WHERE SUPPORT GOES</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "후원은 감시를 멈추지 않게 하는 기반입니다" : "Support keeps civic scrutiny going"}</h2><div className="mt-8 grid gap-4">{uses.map((item) => <div key={item} className="flex gap-3 border-b border-green-deep/10 pb-4 text-sm font-bold leading-7 text-charcoal/72"><Check className="mt-1 shrink-0 text-green-mid" size={18}/><span>{item}</span></div>)}</div></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="bg-green-deep p-6 text-white sm:p-7"><Eye className="text-gold-light" size={25}/><h3 className="mt-5 text-xl font-bold">{ko ? "투명한 기록" : "Transparent records"}</h3><p className="mt-3 text-sm leading-7 text-white/65">{ko ? "후원금의 목적과 사용 원칙을 분명히 하고, 활동과 성과를 꾸준히 공개하겠습니다." : "We will state the purpose and use principles clearly and report our work and results consistently."}</p></div>
              <div className="border border-green-deep/12 bg-white p-6 sm:p-7"><Scale className="text-green-mid" size={25}/><h3 className="mt-5 text-xl font-bold text-navy">{ko ? "편집권 독립" : "Editorial independence"}</h3><p className="mt-3 text-sm leading-7 text-charcoal/62">{ko ? "후원자는 취재와 논평의 결론, 감시 대상 선정에 개입할 수 없습니다." : "Supporters may not direct reporting conclusions, commentary or the selection of watchdog targets."}</p></div>
              <div className="border border-green-deep/12 bg-white p-6 sm:p-7"><ShieldCheck className="text-green-mid" size={25}/><h3 className="mt-5 text-xl font-bold text-navy">{ko ? "이해충돌 확인" : "Conflict checks"}</h3><p className="mt-3 text-sm leading-7 text-charcoal/62">{ko ? "특정 사업이나 의제와 이해관계가 있는 후원은 사전에 확인하고 필요한 경우 공개하거나 받지 않겠습니다." : "Support tied to a specific issue or interest will be reviewed, disclosed when appropriate, or declined."}</p></div>
              <div className="border border-green-deep/12 bg-white p-6 sm:p-7"><UserRoundCheck className="text-green-mid" size={25}/><h3 className="mt-5 text-xl font-bold text-navy">{ko ? "후원자 선택 존중" : "Supporter choice"}</h3><p className="mt-3 text-sm leading-7 text-charcoal/62">{ko ? "이름 공개 여부를 후원자가 정하며, 개인정보는 후원 관리 목적에 한해 다룹니다." : "Supporters choose whether to be publicly recognized, and personal information is used only to administer support."}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="mb-9 flex max-w-3xl items-start gap-4"><span className="grid size-12 shrink-0 place-items-center bg-green-deep text-gold-light"><HandHeart size={24}/></span><div><span className="section-kicker">TAKE PART</span><h2 className="editorial-title mt-2 text-3xl font-bold text-navy sm:text-4xl">{ko ? "씨앗의 소리 후원인이 되어주세요" : "Become a supporter of SEED VOICE"}</h2></div></div>
        <SupportPledgeForm ko={ko} />
        <p className="mt-6 text-xs leading-6 text-charcoal/48">{ko ? "후원금 영수증이나 세제 혜택의 적용 여부는 후원 주체와 방식에 따라 달라질 수 있으며, 약정 확인 과정에서 별도로 안내드립니다. 문의: seedvoicekr@gmail.com" : "Receipt and tax-benefit eligibility may vary by supporter and arrangement and will be explained during confirmation. Contact: seedvoicekr@gmail.com"}</p>
      </section>
    </div>
  );
}
