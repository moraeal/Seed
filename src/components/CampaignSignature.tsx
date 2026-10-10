import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { createComment, loadComments, loadOwnCampaignSignatures, manageCampaignSignature, type CommentRecord } from "../lib/comments";

const signatureSlug = "campaign-no-more-tax-signatures";
const returnTo = "/civic-campaign#campaign-signature";

const campaignDemands = [
  {
    title: { ko: "월급쟁이 유리지갑, 더 이상 털지 마라!", en: "Let workers keep more of what they earn" },
    fact: { ko: "한국의 근로소득세 최고세율은 지방소득세를 포함해 49.5%입니다. 최고 과세구간에서는 추가로 번 소득의 절반 가까이를 세금으로 내야 합니다.", en: "South Korea's top marginal income-tax rate is 49.5%, including local income tax. In the highest bracket, nearly half of each additional unit of taxable income goes to tax." },
    demand: { ko: "근로소득세 최고세율을 낮추고 과세구간을 현실화해, 노력의 대가가 개인에게 더 많이 돌아가도록 해야 합니다.", en: "Lower the top income-tax rate and update tax brackets so individuals retain more of the rewards of their work." },
    source: "https://g.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7873&mi=6594",
    sourceLabel: { ko: "국세청 · 근로소득 세율", en: "National Tax Service · Earned-income tax rates" },
  },
  {
    title: { ko: "집 한 채 지키는 데도 세금 걱정? 부동산 보유세를 바꾸자!", en: "Owning a home should not mean an unpredictable tax bill" },
    fact: { ko: "집값이 올라도 당장 현금이 생기는 것은 아닙니다. 그런데 공시가격 상승과 세제 변경으로 보유세 부담은 늘어날 수 있습니다. 특히 은퇴자와 장기 실거주자에게는 큰 부담입니다.", en: "A higher home value does not put cash in the owner's pocket. Yet rising assessed values and changes to tax rules can increase property holding taxes, putting particular pressure on retirees and long-term residents." },
    demand: { ko: "보유세는 취득가액을 중심으로 개편하고, 실제 매각으로 발생한 이익에 과세해 세금의 예측 가능성을 높여야 합니다.", en: "Reform holding taxes around acquisition value and taxation of gains realized on sale to make the tax burden more predictable." },
    source: "https://ems.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7739&mi=40401",
    sourceLabel: { ko: "국세청 · 종합부동산세 안내", en: "National Tax Service · Comprehensive real estate holding tax" },
  },
  {
    title: { ko: "기업에 세금 더 걷기보다 투자와 일자리를 늘려라!", en: "Leave more room for investment and jobs" },
    fact: { ko: "한국의 법인세 최고세율은 2026년 25%로 인상돼 지방소득세를 포함하면 27.5%에 달합니다. 기업의 투자와 고용을 촉진해야 할 시기에 세금 부담부터 늘려서는 안 됩니다.", en: "South Korea's top corporate income-tax rate rose to 25% in 2026, reaching 27.5% with local income tax. At a time when investment and hiring need encouragement, businesses should not first face higher taxes." },
    demand: { ko: "법인세율을 낮추고 누진구조를 단순화해, 기업이 투자와 일자리 창출에 더 많은 자금을 활용하도록 해야 합니다.", en: "Lower corporate tax rates and simplify the progressive structure so businesses can put more funds toward investment and job creation." },
    source: "https://d.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7746&mi=2372",
    sourceLabel: { ko: "국세청 · 2026년 이후 법인세율", en: "National Tax Service · Corporate tax rates from 2026" },
  },
  {
    title: { ko: "평생 일군 재산, 자녀에게 물려주는 것까지 벌주지 마라!", en: "Protect the right to pass on a lifetime's work" },
    fact: { ko: "한국의 상속세 최고세율은 50%입니다. 반면 스웨덴은 상속세를 폐지했고, 중국 본토에는 일반적인 상속세가 없으며, 대만은 최고세율이 20%입니다. 미국은 2026년 기준 1인당 1,500만 달러(약 200억 원)의 연방 상속세 기본공제를 적용합니다.", en: "South Korea's top inheritance-tax rate is 50%. Sweden abolished inheritance tax, mainland China has no general inheritance tax, and Taiwan's top rate is 20%. The United States applies a federal estate-tax basic exclusion of USD 15 million per person in 2026, roughly KRW 20 billion." },
    demand: { ko: "상속세율을 대폭 낮추고 공제액을 현실화해, 가족의 정당한 재산 승계가 과도한 세금으로 가로막히지 않도록 해야 합니다.", en: "Substantially lower inheritance-tax rates and update allowances so excessive taxation does not obstruct legitimate transfers of family assets." },
    source: "https://ems.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7957&mi=6529",
    sourceLabel: { ko: "국세청 · 상속세 계산", en: "National Tax Service · Inheritance tax calculation" },
    extraSource: "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax",
    extraLabel: { ko: "미국 IRS · 2026년 상속·증여세 기본공제", en: "US IRS · 2026 estate and gift tax exclusion" },
  },
  {
    title: { ko: "국민연금·건강보험료, 올리는 것만이 개혁인가!", en: "Reform social insurance beyond raising contributions" },
    fact: { ko: "국민연금 보험료율은 2033년까지 소득의 13%로 인상됩니다. 기준소득월액이 300만 원인 지역가입 자영업자의 보험료는 2026년 월 28만 5천 원에서 2033년 39만 원으로 늘어납니다. 건강보험료까지 더하면 부담은 더욱 큽니다.", en: "The National Pension contribution rate will rise to 13% by 2033. A self-employed person insured individually with assessed monthly income of KRW 3 million pays KRW 285,000 a month in 2026 and KRW 390,000 in 2033. Health insurance adds a separate burden." },
    demand: { ko: "보험료 인상에 의존하기보다 기금 운용과 지출구조를 개혁해, 자영업자와 미래세대의 부담을 줄여야 합니다.", en: "Reform fund management and spending rather than relying on contribution increases, easing the burden on the self-employed and future generations." },
    source: "https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0104M0.do",
    sourceLabel: { ko: "국민연금공단 · 연금개혁 FAQ", en: "National Pension Service · Pension reform FAQ" },
  },
];

export default function CampaignSignature() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const defaultSignature = ko ? "동의합니다" : "I agree.";
  const { user, session, nickname, isVerified, loading } = useAuth();
  const [body, setBody] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [signatures, setSignatures] = useState<CommentRecord[]>([]);
  const [mine, setMine] = useState<CommentRecord[]>([]);
  const [mineLoading, setMineLoading] = useState(true);
  const [mineError, setMineError] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editBody, setEditBody] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const atLimit = mine.length >= 2;
  const limitMessage = ko ? "서명글은 한 계정당 최대 2개까지 등록할 수 있습니다. 기존 글을 수정하거나 삭제해주세요." : "You can register up to two signatures per account. Edit or delete an existing signature.";
  useEffect(() => {
    let active = true;
    setMine([]); setEditing(null); setDeleting(null); setMineError(false);
    if (!user || !session) { setMineLoading(false); return; }
    setMineLoading(true);
    void loadOwnCampaignSignatures(signatureSlug, session.access_token, user.id)
      .then(rows => { if (active) setMine(rows); })
      .catch(() => { if (active) setMineError(true); })
      .finally(() => { if (active) setMineLoading(false); });
    return () => { active = false; };
  }, [user?.id, session?.access_token]);

  async function manage(id: string, remove = false) {
    if (!user || !session || busyId || submitting || !mine.some(row => row.id === id)) return;
    const text = editBody.replace(/\s+/g, " ").trim();
    if (!remove && (text.length < 2 || text.length > 120)) {
      setNotice(ko ? "서명글은 2~120자로 입력해주세요." : "Please enter 2–120 characters."); return;
    }
    setBusyId(id); setNotice("");
    try {
      await manageCampaignSignature(id, session.access_token, user.id, remove ? undefined : text);
      const change = (rows: CommentRecord[]) => remove ? rows.filter(row => row.id !== id) : rows.map(row => row.id === id ? { ...row, body: text } : row);
      setMine(change); setSignatures(change); setEditing(null); setDeleting(null);
      setNotice(remove ? (ko ? "서명글이 삭제되었습니다." : "Your signature was deleted.") : (ko ? "서명글이 수정되었습니다." : "Your signature was updated."));
      void loadComments(signatureSlug).then(setSignatures);
    } catch {
      setNotice(ko ? "처리하지 못했습니다. 로그인 상태를 확인한 뒤 다시 시도해주세요." : "The change failed. Check your login and try again.");
    } finally { setBusyId(null); }
  }

  useEffect(() => { void loadComments(signatureSlug).then(setSignatures); }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (submitting || busyId || mineLoading || mineError) return;
    if (atLimit) { setNotice(limitMessage); return; }
    if (!user || !session || !isVerified || !consent) return;
    const text = body.replace(/\s+/g, " ").trim() || defaultSignature;
    if (text.length < 2 || text.length > 120) {
      setNotice(ko ? "서명글은 2~120자로 입력해주세요." : "Please enter 2–120 characters.");
      return;
    }
    setSubmitting(true);
    setNotice("");
    try {
      await createComment(signatureSlug, nickname, text, session.access_token, user.id);
      setBody("");
      setConsent(false);
      setNotice(ko ? "서명글이 등록되었습니다. 함께해주셔서 감사합니다." : "Your signature was registered. Thank you for joining.");
      setMine(await loadOwnCampaignSignatures(signatureSlug, session.access_token, user.id));
      setSignatures(await loadComments(signatureSlug));
    } catch (error) {
      if (error instanceof Error && error.message === "CAMPAIGN_SIGNATURE_LIMIT") {
        setNotice(limitMessage);
        void loadOwnCampaignSignatures(signatureSlug, session.access_token, user.id).then(setMine).catch(() => setMineError(true));
      } else setNotice(ko ? "서명글을 등록하지 못했습니다. 로그인 상태를 확인한 뒤 다시 시도해주세요." : "Your signature could not be registered. Check your login and try again.");
    } finally { setSubmitting(false); }
  }

  return <section id="campaign-signature" className="reading-column mb-8 scroll-mt-52 border-2 border-green-deep bg-white p-5 sm:p-7" aria-labelledby="campaign-signature-title">
    <header className="relative isolate -mx-5 -mt-5 overflow-hidden border-b-2 border-green-deep px-5 pb-7 pt-5 sm:-mx-7 sm:-mt-7 sm:px-7 sm:pt-7">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-[0.18]" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/civic/no-more-tax-textless-background.webp)` }} />
      <p className="text-sm font-bold tracking-widest text-green-deep">{ko ? "씨앗의 소리 · 국민 재산권 보호 서명운동" : "SEED VOICE · A CAMPAIGN TO PROTECT PROPERTY RIGHTS"}</p>
      <p className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">NO MORE TAX!</p>
      <h2 id="campaign-signature-title" className="mt-4 text-2xl font-black leading-snug text-green-deep sm:text-3xl">{ko ? "증세는 그만! 국민의 재산권을 지켜라!" : "Stop tax increases. Protect people's property rights."}</h2>
      <p className="mt-5 text-xl font-bold leading-8 text-navy">{ko ? "국민이 번 돈은 국민의 것입니다." : "The money people earn belongs to them."}</p>
      <p className="mt-2 text-base leading-7">{ko ? "국가가 더 가져가는 것이 아니라, 국민이 더 많이 지킬 수 있어야 합니다. 세금은 국가 운영을 위한 수단이지, 국민의 성취를 빼앗는 수단이 되어서는 안 됩니다." : "People should be able to keep more of their earnings. Taxes fund the state; they should not strip people of the rewards of their work."}</p>
      <p className="mt-3 text-base leading-7">{ko ? "끝없이 늘어나는 세금과 사회보험료, 이제는 국민이 직접 제동을 걸어야 합니다." : "Citizens must put a brake on rising taxes and social insurance contributions."}</p>
    </header>
    <div className="divide-y divide-green-deep/20">
      {campaignDemands.map((item, index) => <article key={item.source} className="py-6 sm:py-7">
        <h3 className="text-xl font-black leading-8 text-navy"><span className="mr-2 text-green-deep">{index + 1}.</span>{item.title[language]}</h3>
        <p className="mt-3 text-base leading-7 text-charcoal/80">{item.fact[language]}</p>
        <p className="mt-3 border-l-4 border-green-deep pl-4 text-base font-bold leading-7 text-green-deep">{item.demand[language]}</p>
      </article>)}
    </div>
    <div className="bg-ivory p-5 sm:p-6">
      <p className="text-lg font-bold leading-8 text-navy">{ko ? "국가의 재정을 위해 국민이 존재하는 것이 아닙니다. 국가가 국민의 삶을 위해 존재해야 합니다." : "People do not exist to serve the state's finances. The state exists to serve people's lives."}</p>
      <p className="mt-4 text-lg font-black leading-8 text-green-deep">{ko ? "증세보다 지출개혁! 과세보다 경제성장! 국가보다 국민의 재산권!" : "Spending reform before tax hikes. Growth before heavier taxation. Put people's property rights first."}</p>
    </div>
    <p className="mt-4 text-sm leading-6 text-charcoal/60">{ko ? "수치 기준: 2026년 10월. 최고세율은 전체 소득·재산이 아닌 해당 과세구간 초과분에 적용되며, 지방소득세는 표준세율 기준입니다. 법인세 인상은 2026년 시작 사업연도부터 적용됩니다. 미국 공제는 시민권자·상속세법상 거주자 기준이며 생전 증여와 주별 세금은 별도 고려합니다. 약 200억 원은 환율에 따른 근삿값입니다. 연금 예시는 동일 소득 유지, 지원·감면 전 기준입니다." : "Figures checked in October 2026. Top rates apply to the portion above the relevant taxable threshold, not all income or assets; local tax uses standard rates. The corporate increase applies to tax years beginning in 2026. The US exclusion is for citizens and residents under estate-tax domicile rules; lifetime gifts and state taxes must also be considered. The KRW conversion is approximate. The pension example assumes unchanged assessed income before subsidies or reductions."}</p>
    <div id="campaign-signature-form" className="mt-8 scroll-mt-52 border-t-2 border-green-deep pt-6">
      <h3 className="text-2xl font-black text-green-deep">{ko ? "NO MORE TAX! 지금 서명으로 뜻을 모아주세요." : "NO MORE TAX! Add your signature."}</h3>
      <p className="mt-3 text-base leading-7 text-charcoal/75">{ko ? "위 다섯 가지 개혁 요구에 동의하시면 서명해주세요. 한 줄 의견도 함께 남길 수 있습니다." : "Sign to support these five reform demands. You can also leave a short message."}</p>
    </div>
    {loading ? <p className="mt-5" role="status">{ko ? "로그인 상태 확인 중" : "Checking login"}</p> : user && session && isVerified ? <form onSubmit={submit} className="mt-5">
      <p className="mb-3 text-sm text-charcoal/75">{ko ? "한 계정당 최대 2개까지 등록할 수 있으며, 내 서명글에서 수정·삭제할 수 있습니다." : "Up to two signatures per account. Manage them under My signatures."}</p>
      {atLimit && <p className="mb-3 text-sm font-bold text-green-deep">{limitMessage}</p>}
      {mineError && <p role="alert" className="mb-3 text-sm">{ko ? "내 서명글을 불러오지 못했습니다. 페이지를 새로고침해주세요." : "Unable to load your signatures. Refresh this page."}</p>}
      <p className="text-sm font-bold text-navy">{ko ? "서명 닉네임" : "Signing as"}: {nickname}</p>
      <label className="field mt-4"><span>{ko ? "한 줄 서명글 (선택)" : "Your one-line signature (optional)"}</span><input value={body} onChange={event => setBody(event.target.value)} minLength={2} maxLength={120} placeholder={defaultSignature} aria-describedby="campaign-signature-hint" /></label>
      <p id="campaign-signature-hint" className="mt-2 text-sm leading-6 text-charcoal/70">{ko ? "원하는 글을 직접 쓰거나, 비워두고 등록하면 ‘동의합니다’로 서명됩니다." : "Write your own message, or leave this blank to sign with ‘I agree.’"}</p>
      <label className="mt-4 flex items-start gap-3 text-sm leading-6"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} required className="mt-1 size-4 shrink-0" /><span>{ko ? "위 다섯 가지 개혁 요구에 동의하며, 내 닉네임과 서명글 공개에 동의합니다." : "I support the five reform demands and agree to publish my nickname and signature."}</span></label>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><span className="text-sm text-charcoal/55">{body.length}/120</span><button type="submit" className="button-primary" disabled={submitting || !consent || atLimit || mineLoading || mineError || Boolean(busyId)}>{submitting ? (ko ? "등록 중" : "Registering") : (ko ? "서명 등록하기" : "Register signature")}</button></div>
    </form> : <div className="mt-5">
      <p className="text-sm leading-6 text-charcoal/70">{ko ? "서명글은 이메일 인증회원이 등록할 수 있습니다. 닉네임과 서명글이 공개됩니다." : "Email-verified members can sign. Your nickname and signature will be public."}</p>
      <div className="mt-4 flex flex-wrap gap-3"><Link className="button-primary" to={`/account?mode=login&returnTo=${encodeURIComponent(returnTo)}`}>{ko ? "로그인하고 서명하기" : "Log in to sign"}</Link><Link className="button-secondary" to={`/account?mode=signup&returnTo=${encodeURIComponent(returnTo)}`}>{ko ? "가입하고 서명하기" : "Sign up to sign"}</Link></div>
    </div>}
    {user && session && mine.length > 0 && <div className="mt-6 border-t border-green-deep/15 pt-4">
      <h3 className="text-base font-bold text-navy">{ko ? "내 서명글" : "My signatures"} ({mine.length}/2)</h3>
      <ul className="mt-3 space-y-4">{mine.map(signature => <li key={signature.id} className="border border-green-deep/15 p-4 text-sm leading-6">
        <strong className="text-green-deep">{signature.nickname}</strong>
        {editing === signature.id ? <form onSubmit={event => { event.preventDefault(); void manage(signature.id); }}>
          <label className="field mt-2"><span>{ko ? "서명글 수정" : "Edit signature"}</span><input autoFocus value={editBody} onChange={event => setEditBody(event.target.value)} minLength={2} maxLength={120} required disabled={Boolean(busyId)} /></label>
          <p className="mt-2 text-charcoal/55">{editBody.length}/120</p>
          <div className="mt-2 flex gap-3"><button className="button-primary" type="submit" disabled={Boolean(busyId) || submitting}>{busyId ? (ko ? "저장 중" : "Saving") : (ko ? "저장" : "Save")}</button><button type="button" className="button-secondary" disabled={Boolean(busyId)} onClick={() => setEditing(null)}>{ko ? "취소" : "Cancel"}</button></div>
        </form> : <><p className="mt-1 break-words">{signature.body}</p>
          {deleting === signature.id ? <div className="mt-3"><p>{ko ? "이 서명글을 삭제하시겠습니까? 삭제한 글은 복구할 수 없습니다." : "Delete this signature? This cannot be undone."}</p><div className="mt-2 flex flex-wrap gap-3"><button type="button" className="button-primary" disabled={Boolean(busyId) || submitting} onClick={() => void manage(signature.id, true)}>{busyId ? (ko ? "삭제 중" : "Deleting") : (ko ? "삭제 확인" : "Confirm deletion")}</button><button type="button" className="button-secondary" disabled={Boolean(busyId)} onClick={() => setDeleting(null)}>{ko ? "취소" : "Cancel"}</button></div></div> : <div className="mt-3 flex gap-3"><button type="button" className="button-secondary" disabled={Boolean(busyId) || submitting} onClick={() => { setEditing(signature.id); setEditBody(signature.body); setDeleting(null); }}>{ko ? "수정" : "Edit"}</button><button type="button" className="button-secondary" disabled={Boolean(busyId) || submitting} onClick={() => { setDeleting(signature.id); setEditing(null); }}>{ko ? "삭제" : "Delete"}</button></div>}
        </>}
      </li>)}</ul>
    </div>}
    {notice && <p className="mt-4 text-sm font-bold text-green-deep" role="status">{notice}</p>}
    {signatures.length > 0 && <div className="mt-6 border-t border-green-deep/15 pt-4"><h3 className="text-base font-bold text-navy">{ko ? "최근 서명글" : "Recent signatures"}</h3><ul className="mt-3 space-y-3">{signatures.slice(0, 10).map(signature => <li key={signature.id} className="text-sm leading-6"><strong className="mr-3 text-green-deep">{signature.nickname}</strong>{signature.body}</li>)}</ul></div>}
  </section>;
}
