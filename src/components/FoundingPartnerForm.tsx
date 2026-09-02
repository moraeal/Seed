import { Mail, Save } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type PartnerDraft = {
  name: string;
  email: string;
  phone: string;
  affiliation: string;
  region: string;
  role: string;
  interests: string;
  introduction: string;
  contribution: string;
};

const emptyDraft: PartnerDraft = {
  name: "",
  email: "",
  phone: "",
  affiliation: "",
  region: "",
  role: "",
  interests: "",
  introduction: "",
  contribution: "",
};

const storageKey = "seed-founding-partner-draft";

export default function FoundingPartnerForm({ ko }: { ko: boolean }) {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<PartnerDraft>(emptyDraft);
  const [consent, setConsent] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setDraft({ ...emptyDraft, ...JSON.parse(stored) });
    } catch {
      // 저장된 초안을 읽지 못하면 빈 양식으로 시작합니다.
    }
  }, []);

  const update = (field: keyof PartnerDraft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setSaved(false);
  };

  const saveDraft = () => {
    window.localStorage.setItem(storageKey, JSON.stringify(draft));
    setSaved(true);
  };

  const emailBody = useMemo(() => [
    ko ? "[씨드 창립파트너 가입 신청]" : "[SEED Founding Partner Application]",
    "",
    `${ko ? "이름" : "Name"}: ${draft.name}`,
    `${ko ? "이메일" : "Email"}: ${draft.email}`,
    `${ko ? "연락처" : "Phone"}: ${draft.phone || "-"}`,
    `${ko ? "소속·직업" : "Affiliation / Occupation"}: ${draft.affiliation || "-"}`,
    `${ko ? "활동 지역" : "Region"}: ${draft.region || "-"}`,
    `${ko ? "희망 역할" : "Preferred Role"}: ${draft.role}`,
    `${ko ? "관심 의제" : "Issues of Interest"}: ${draft.interests || "-"}`,
    "",
    `[${ko ? "자기소개" : "Introduction"}]`,
    draft.introduction,
    "",
    `[${ko ? "함께하고 싶은 활동" : "How I Hope to Contribute"}]`,
    draft.contribution,
  ].join("\n"), [draft, ko]);

  const mailto = `mailto:seedcivicpartners@gmail.com?subject=${encodeURIComponent(ko ? `[창립파트너 신청] ${draft.name}` : `[Founding Partner Application] ${draft.name}`)}&body=${encodeURIComponent(emailBody)}`;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    saveDraft();

    const mailLink = document.createElement("a");
    mailLink.href = mailto;
    mailLink.target = "_blank";
    mailLink.rel = "noopener noreferrer";
    document.body.appendChild(mailLink);
    mailLink.click();
    mailLink.remove();

    window.setTimeout(() => {
      navigate(ko ? "/" : "/en/", { replace: true });
    }, 300);
  };

  const roles = ko
    ? ["시민브리핑·콘텐츠", "공익감시·자료조사", "시민제안·프로젝트", "전문가 자문", "네트워크·대외협력", "후원·운영 기반", "기타"]
    : ["Civic Briefings & Content", "Public Watch & Research", "Citizen Proposals & Projects", "Professional Advice", "Network & Partnerships", "Support & Operations", "Other"];

  const inputClass = "mt-2 w-full border border-green-deep/15 bg-ivory px-4 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-charcoal/30 focus:border-green-mid focus:ring-2 focus:ring-green-pale";
  const labelClass = "text-sm font-extrabold text-navy";

  return (
    <form id="partner-application" onSubmit={submit} className="scroll-mt-28 border border-green-deep/15 bg-white p-6 shadow-[0_24px_70px_rgba(23,76,58,.09)] sm:p-10">
      <div className="flex flex-col gap-4 border-b border-green-deep/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-kicker">FOUNDING PARTNER APPLICATION</span>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "창립파트너 가입 양식" : "Founding Partner Application"}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/55">{ko ? "씨드가 시작하는 첫 시기에 방향과 신뢰, 활동의 기반을 함께 세워갈 분을 기다립니다." : "We welcome people who want to help shape SEED's direction, trust, and early foundation."}</p>
        </div>
        <button type="button" onClick={saveDraft} className="button-secondary shrink-0 text-xs"><Save size={15}/>{saved ? (ko ? "초안 저장됨" : "Draft saved") : (ko ? "초안 저장" : "Save draft")}</button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className={labelClass}>{ko ? "이름" : "Name"}<span className="text-gold"> *</span><input value={draft.name} onChange={(event) => update("name", event.target.value)} className={inputClass} required /></label>
        <label className={labelClass}>{ko ? "이메일" : "Email"}<span className="text-gold"> *</span><input type="email" value={draft.email} onChange={(event) => update("email", event.target.value)} className={inputClass} required placeholder="name@example.com" /></label>
        <label className={labelClass}>{ko ? "연락처" : "Phone"}<input value={draft.phone} onChange={(event) => update("phone", event.target.value)} className={inputClass} placeholder={ko ? "선택 입력" : "Optional"} /></label>
        <label className={labelClass}>{ko ? "소속 또는 직업" : "Affiliation or occupation"}<input value={draft.affiliation} onChange={(event) => update("affiliation", event.target.value)} className={inputClass} placeholder={ko ? "선택 입력" : "Optional"} /></label>
        <label className={labelClass}>{ko ? "주요 활동 지역" : "Primary region"}<input value={draft.region} onChange={(event) => update("region", event.target.value)} className={inputClass} placeholder={ko ? "예: 서울, 경기 북부" : "e.g. Seoul, Northern Gyeonggi"} /></label>
        <label className={labelClass}>{ko ? "희망 역할" : "Preferred role"}<span className="text-gold"> *</span><select value={draft.role} onChange={(event) => update("role", event.target.value)} className={inputClass} required><option value="">{ko ? "역할 선택" : "Select a role"}</option>{roles.map((role) => <option key={role} value={role}>{role}</option>)}</select></label>
        <label className={`${labelClass} md:col-span-2`}>{ko ? "관심 있는 공공 의제" : "Public issues of interest"}<input value={draft.interests} onChange={(event) => update("interests", event.target.value)} className={inputClass} placeholder={ko ? "예: 공익기관 투명성, 청년, 법치, 교육, 지역사회" : "e.g. institutional accountability, youth, rule of law, education"} /></label>
        <label className={`${labelClass} md:col-span-2`}>{ko ? "간단한 자기소개" : "Brief introduction"}<span className="text-gold"> *</span><textarea value={draft.introduction} onChange={(event) => update("introduction", event.target.value)} className={`${inputClass} min-h-28 resize-y`} required placeholder={ko ? "해오신 일과 씨드에 관심을 갖게 된 계기를 알려주세요." : "Tell us about your work and what brought you to SEED."} /></label>
        <label className={`${labelClass} md:col-span-2`}>{ko ? "씨드에서 함께하고 싶은 활동" : "How would you like to contribute?"}<span className="text-gold"> *</span><textarea value={draft.contribution} onChange={(event) => update("contribution", event.target.value)} className={`${inputClass} min-h-28 resize-y`} required placeholder={ko ? "제안, 조사, 글쓰기, 전문자문, 후원, 네트워크 등 가능한 방식과 기대를 적어주세요." : "Describe the work, expertise, support, or connections you hope to contribute."} /></label>
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3 border-t border-green-deep/10 pt-6 text-xs leading-6 text-charcoal/60"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required className="mt-1 size-4 accent-green-deep"/><span>{ko ? "가입 검토와 연락을 위해 위 개인정보와 신청 내용을 씨드시민파트너스에 전달하는 데 동의합니다. 제출 내용은 창립파트너 협의 외의 목적으로 공개하지 않습니다." : "I agree to share this information with SEED Civic Partners for application review and contact. It will not be made public without prior agreement."}</span></label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="button-primary">{ko ? "이메일로 가입 신청 보내기" : "Send Application by Email"}<Mail size={16}/></button>
        <p className="max-w-xl text-xs leading-6 text-charcoal/45">{ko ? "버튼을 누르면 이메일 앱이 별도로 열리고, 씨드 홈페이지는 메인으로 돌아갑니다. 이메일 앱에서 ‘보내기’를 눌러야 접수가 완료됩니다." : "The email app opens separately and the SEED site returns to the homepage. Press Send in your email app to complete the application."}</p>
      </div>
    </form>
  );
}
