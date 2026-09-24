import { Check, Clock3, ExternalLink, Newspaper, Pause, RefreshCw, Save, Star, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { AuthSession } from "../auth";
import {
  getLegislativeAdminData,
  approveLegislativeMediaCoverage,
  setLegislativeReviewState,
  updateLegislativeEditorial,
  type LegislativeBill,
  type LegislativeEditorialPatch,
  type LegislativeReviewState,
  type LegislativeSyncRun,
} from "../lib/legislativeMonitoring";

const stateLabels: Record<LegislativeReviewState, string> = {
  collected: "일반 수집", queued: "분석 대기", analyzing: "분석 중", review: "검토 필요", published: "공개", held: "보류", excluded: "제외", error: "오류",
};
const importanceLabels = { critical: "매우 중요", high: "중요", medium: "관찰", low: "일반", unrated: "미평가" } as const;
const stages = ["발의", "소관위", "심사", "본회의", "공포"];

type EditorialDraft = {
  currentStage: string;
  isFeatured: boolean;
  featuredOrder: string;
  featuredReason: string;
  keywords: string;
  publicSummary: string;
  seedView: string;
  allowBookmark: boolean;
};

const makeDraft = (bill: LegislativeBill): EditorialDraft => ({
  currentStage: bill.current_stage || "발의",
  isFeatured: bill.is_featured,
  featuredOrder: bill.featured_order?.toString() || "",
  featuredReason: bill.featured_reason_ko || "",
  keywords: (bill.observation_keywords || []).join(", "),
  publicSummary: bill.public_summary_ko || "",
  seedView: bill.seed_view_ko || "",
  allowBookmark: bill.allow_bookmark,
});
const nullable = (value: string) => value.trim() || null;

export default function LegislativeAdminPanel({ session }: { session: AuthSession }) {
  const [bills, setBills] = useState<LegislativeBill[]>([]);
  const [runs, setRuns] = useState<LegislativeSyncRun[]>([]);
  const [stateFilter, setStateFilter] = useState<LegislativeReviewState | "all">("review");
  const [importanceFilter, setImportanceFilter] = useState<LegislativeBill["importance_level"] | "all">("all");
  const [featuredFilter, setFeaturedFilter] = useState<"all" | "featured" | "standard">("all");
  const [openEditor, setOpenEditor] = useState("");
  const [drafts, setDrafts] = useState<Record<string, EditorialDraft>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState("");
  const [notice, setNotice] = useState("");

  const refresh = async () => {
    setLoading(true);
    setNotice("");
    try {
      const data = await getLegislativeAdminData(session);
      setBills(data.bills);
      setRuns(data.runs);
    } catch {
      setNotice("입법감시 자료를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void refresh(); }, [session.access_token]);

  const counts = useMemo(() => bills.reduce<Record<string, number>>((result, bill) => {
    result[bill.review_state] = (result[bill.review_state] || 0) + 1;
    return result;
  }, {}), [bills]);
  const filtered = useMemo(() => bills.filter((bill) => {
    if (stateFilter !== "all" && bill.review_state !== stateFilter) return false;
    if (importanceFilter !== "all" && bill.importance_level !== importanceFilter) return false;
    if (featuredFilter === "featured" && !bill.is_featured) return false;
    if (featuredFilter === "standard" && bill.is_featured) return false;
    return true;
  }), [bills, featuredFilter, importanceFilter, stateFilter]);
  const latestRun = runs[0];
  const featuredCount = bills.filter((bill) => bill.is_featured).length;

  const updateState = async (bill: LegislativeBill, state: LegislativeReviewState) => {
    setSaving(bill.bill_id);
    setNotice("");
    try {
      const updated = await setLegislativeReviewState(session, bill.bill_id, state);
      if (updated) setBills((current) => current.map((item) => item.bill_id === bill.bill_id ? updated : item));
      setNotice(state === "published" ? "입법감시 페이지에 공개했습니다." : `${stateLabels[state]} 상태로 변경했습니다.`);
    } catch {
      setNotice("상태를 변경하지 못했습니다.");
    } finally {
      setSaving("");
    }
  };

  const toggleEditor = (bill: LegislativeBill) => {
    setDrafts((current) => ({ ...current, [bill.bill_id]: current[bill.bill_id] || makeDraft(bill) }));
    setOpenEditor((current) => current === bill.bill_id ? "" : bill.bill_id);
  };

  const approveMedia = async (bill: LegislativeBill) => {
    setSaving(bill.bill_id);
    setNotice("");
    try {
      const updated = await approveLegislativeMediaCoverage(session, bill.bill_id, bill.media_coverage_draft || []);
      if (updated) setBills((current) => current.map((item) => item.bill_id === bill.bill_id ? updated : item));
      setNotice("언론보도 요약을 상세페이지에 공개했습니다.");
    } catch {
      setNotice("언론보도 요약을 공개하지 못했습니다.");
    } finally {
      setSaving("");
    }
  };
  const changeDraft = (billId: string, patch: Partial<EditorialDraft>) => {
    setDrafts((current) => ({ ...current, [billId]: { ...current[billId], ...patch } }));
  };

  const saveEditorial = async (bill: LegislativeBill) => {
    const draft = drafts[bill.bill_id] || makeDraft(bill);
    const keywords = draft.keywords.split(",").map((keyword) => keyword.trim()).filter(Boolean);
    if (draft.isFeatured && !bill.is_featured && featuredCount >= 5) {
      setNotice("주목 법안은 최대 5건입니다. 기존 주목 지정을 먼저 해제해 주세요.");
      return;
    }
    if (draft.isFeatured && (!draft.featuredReason.trim() || keywords.length < 2 || keywords.length > 4)) {
      setNotice("주목 법안은 주목 사유와 관찰 키워드 2~4개가 필요합니다.");
      return;
    }
    const order = draft.isFeatured ? Number(draft.featuredOrder || featuredCount + (bill.is_featured ? 0 : 1)) : null;
    if (draft.isFeatured && (order === null || !Number.isInteger(order) || order < 1 || order > 5)) {
      setNotice("주목 법안 노출 순서는 1~5 사이에서 지정해 주세요.");
      return;
    }
    if (draft.isFeatured && order !== null && bills.some((item) => item.bill_id !== bill.bill_id && item.is_featured && item.featured_order === order)) {
      setNotice("같은 노출 순서를 사용하는 주목 법안이 있습니다. 1~5 중 비어 있는 순서를 선택해 주세요.");
      return;
    }

    const patch: LegislativeEditorialPatch = {
      current_stage: draft.currentStage,
      is_featured: draft.isFeatured,
      featured_order: order,
      featured_reason_ko: nullable(draft.featuredReason),
      featured_reason_en: bill.featured_reason_en,
      observation_keywords: keywords,
      public_summary_ko: nullable(draft.publicSummary),
      public_summary_en: bill.public_summary_en,
      seed_view_ko: nullable(draft.seedView),
      seed_view_en: bill.seed_view_en,
      allow_bookmark: draft.allowBookmark,
      notification_status: bill.notification_status,
    };

    setSaving(bill.bill_id);
    setNotice("");
    try {
      const updated = await updateLegislativeEditorial(session, bill.bill_id, patch);
      if (updated) {
        setBills((current) => current.map((item) => item.bill_id === bill.bill_id ? updated : item));
        setDrafts((current) => ({ ...current, [bill.bill_id]: makeDraft(updated) }));
      }
      setNotice("공개용 편집 내용을 저장했습니다.");
    } catch {
      setNotice("편집 내용을 저장하지 못했습니다.");
    } finally {
      setSaving("");
    }
  };

  return <section>
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy pb-5">
      <div><p className="section-kicker">LEGISLATIVE MONITOR</p><h2 className="editorial-title mt-2 text-3xl font-bold text-navy">입법감시 관리</h2><p className="mt-2 text-sm leading-6 text-charcoal/55">새 발의안은 수집·분석 후 검토 목록에 쌓이며, 검토한 법안만 공개할 수 있습니다. 본회의 통과법안은 기존 화·금 점검을 이어갑니다. 의안번호와 진행 단계를 확인하고 문안을 다듬어 주세요.</p></div>
      <button type="button" onClick={() => void refresh()} disabled={loading} className="button-secondary"><RefreshCw size={15} className={loading ? "animate-spin" : ""}/>새로고침</button>
    </div>

    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"><Stat label="전체 수집" value={bills.length}/><Stat label="검토 필요" value={counts.review || 0}/><Stat label="분석 대기" value={counts.queued || 0}/><Stat label="공개" value={counts.published || 0}/><Stat label="주목 법안" value={featuredCount}/></div>
    {latestRun && <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border border-green-deep/10 bg-green-pale/45 px-4 py-3 text-xs text-charcoal/60"><span className="flex items-center gap-1.5 font-bold text-green-deep"><Clock3 size={14}/>최근 수집 {new Date(latestRun.started_at).toLocaleString("ko-KR")}</span><span>상태 {latestRun.status}</span><span>확인 {latestRun.fetched_count}건</span><span>중요 법안 {latestRun.queued_count}건</span>{latestRun.error_message && <span className="font-bold text-red-700">{latestRun.error_message}</span>}</div>}

    <div className="mt-6 space-y-3 border-y border-green-deep/15 bg-white p-4">
      <div className="flex flex-wrap gap-2">{(["review", "queued", "collected", "published", "held", "excluded", "error", "all"] as const).map((state) => <button key={state} type="button" onClick={() => setStateFilter(state)} className={`px-3 py-2 text-xs font-extrabold ${stateFilter === state ? "bg-green-deep text-white" : "border border-green-deep/15 bg-white text-green-deep"}`}>{state === "all" ? "전체" : stateLabels[state]} {state !== "all" ? counts[state] || 0 : bills.length}</button>)}</div>
      <div className="flex flex-wrap gap-3"><select value={importanceFilter} onChange={(event) => setImportanceFilter(event.target.value as typeof importanceFilter)} className="border border-green-deep/15 bg-white px-3 py-2 text-xs font-bold text-navy"><option value="all">중요도 전체</option>{Object.entries(importanceLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><select value={featuredFilter} onChange={(event) => setFeaturedFilter(event.target.value as typeof featuredFilter)} className="border border-green-deep/15 bg-white px-3 py-2 text-xs font-bold text-navy"><option value="all">주목 여부 전체</option><option value="featured">주목 법안</option><option value="standard">일반 법안</option></select></div>
    </div>

    {notice && <p className="mt-4 border-l-4 border-gold bg-green-pale/45 px-4 py-3 text-sm font-bold text-green-deep">{notice}</p>}
    {loading && <p className="py-14 text-center text-sm text-charcoal/45">자료를 불러오는 중입니다.</p>}
    {!loading && filtered.length === 0 && <p className="border-b border-green-deep/15 py-14 text-center text-sm text-charcoal/45">조건에 맞는 법안이 없습니다.</p>}

    <div className="mt-4">{filtered.map((bill) => {
      const draft = drafts[bill.bill_id] || makeDraft(bill);
      const isOpen = openEditor === bill.bill_id;
      return <article key={bill.bill_id} className="border-b border-green-deep/15 bg-white">
        <div className="grid gap-4 p-5 lg:grid-cols-[110px_1fr_auto] lg:items-center">
          <div><span className={`inline-flex px-2 py-1 text-[11px] font-black ${bill.importance_score >= 90 ? "bg-red-800 text-white" : bill.importance_score >= 75 ? "bg-gold text-navy" : "bg-green-pale text-green-deep"}`}>중요도 {bill.importance_score}</span>{bill.direction_risk_score >= 60 && <span className="mt-2 inline-flex bg-red-50 px-2 py-1 text-[11px] font-black text-red-800">역방향 신호 {bill.direction_risk_score}</span>}{bill.is_featured && <span className="mt-2 inline-flex items-center gap-1 bg-green-deep px-2 py-1 text-[11px] font-black text-white"><Star size={11} fill="currentColor"/>주목 {bill.featured_order || "—"}</span>}<time className="mt-2 block text-xs text-charcoal/45">{bill.proposed_date?.replace(/-/g, ".") || "—"}</time><span className="mt-1 block text-[11px] font-bold text-charcoal/40">{stateLabels[bill.review_state]}</span></div>
          <div><div className="flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || "소관위 미정"}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}<span className="text-charcoal/40">현재 {bill.current_stage || "발의"}</span></div><h3 className="mt-2 text-lg font-extrabold leading-7 text-navy">{bill.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/55">{bill.public_summary_ko || bill.analysis?.summary_ko || bill.official_summary || bill.proposal_reason || "분석에 필요한 공식 상세자료를 확인하고 있습니다."}</p><div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span>{bill.proposer || bill.representative_proposer || "제안자 확인 중"}</span>{bill.detail_url && <a href={bill.detail_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-green-deep">국회 원문<ExternalLink size={12}/></a>}<Link to={`/monitoring/legislation/${bill.slug}`} className="font-bold text-green-deep">미리보기</Link></div></div>
          <div className="flex flex-wrap gap-2 lg:max-w-[280px] lg:justify-end">
            {bill.review_state !== "published" && <button type="button" disabled={saving === bill.bill_id || !bill.analysis?.summary_ko || !bill.analysis?.summary_en || !bill.analysis?.title_en} onClick={() => void updateState(bill, "published")} title={!bill.analysis?.summary_ko || !bill.analysis?.summary_en || !bill.analysis?.title_en ? "한·영문 분석이 완료된 뒤 공개할 수 있습니다." : undefined} className="inline-flex items-center gap-1.5 bg-green-deep px-3 py-2 text-xs font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-35"><Check size={14}/>공개</button>}
            {bill.review_state !== "held" && <button type="button" disabled={saving === bill.bill_id} onClick={() => void updateState(bill, "held")} className="inline-flex items-center gap-1.5 border border-green-deep/20 px-3 py-2 text-xs font-extrabold text-green-deep"><Pause size={14}/>보류</button>}
            {bill.review_state !== "excluded" && <button type="button" disabled={saving === bill.bill_id} onClick={() => void updateState(bill, "excluded")} className="inline-flex items-center gap-1.5 border border-red-800/20 px-3 py-2 text-xs font-extrabold text-red-800"><X size={14}/>제외</button>}
            {bill.media_coverage_draft?.length > 0 && <button type="button" disabled={saving === bill.bill_id} onClick={() => void approveMedia(bill)} className="inline-flex items-center gap-1.5 border border-green-deep/20 bg-green-pale px-3 py-2 text-xs font-extrabold text-green-deep"><Newspaper size={14}/>언론요약 다시 반영 {bill.media_coverage_draft.length}</button>}
            <button type="button" onClick={() => toggleEditor(bill)} className="inline-flex items-center gap-1.5 border border-gold bg-ivory px-3 py-2 text-xs font-extrabold text-navy"><Star size={14}/>{isOpen ? "편집 닫기" : "공개 문안 편집"}</button>
          </div>
        </div>

        {isOpen && <div className="border-t border-green-deep/10 bg-ivory/70 p-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <label className="text-xs font-extrabold text-navy">현재 진행 단계<select value={draft.currentStage} onChange={(event) => changeDraft(bill.bill_id, { currentStage: event.target.value })} className="mt-2 block w-full border border-green-deep/20 bg-white px-3 py-3 text-sm font-normal">{stages.map((stage) => <option key={stage}>{stage}</option>)}</select></label>
            <div className="grid grid-cols-[1fr_130px] gap-3"><button type="button" onClick={() => changeDraft(bill.bill_id, { isFeatured: !draft.isFeatured, featuredOrder: !draft.isFeatured ? draft.featuredOrder || String(Math.min(featuredCount + 1, 5)) : "" })} className={`mt-6 inline-flex items-center justify-center gap-2 border px-4 py-3 text-sm font-extrabold ${draft.isFeatured ? "border-green-deep bg-green-deep text-white" : "border-green-deep/20 bg-white text-green-deep"}`}><Star size={15} fill={draft.isFeatured ? "currentColor" : "none"}/>{draft.isFeatured ? "주목 지정됨" : "주목 지정"}</button><label className="text-xs font-extrabold text-navy">노출 순서<select value={draft.featuredOrder} disabled={!draft.isFeatured} onChange={(event) => changeDraft(bill.bill_id, { featuredOrder: event.target.value })} className="mt-2 block w-full border border-green-deep/20 bg-white px-3 py-3 text-sm font-normal disabled:opacity-40"><option value="">선택</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></label></div>
            <label className="lg:col-span-2 text-xs font-extrabold text-navy">왜 지금 이 법안을 봐야 하는가<textarea value={draft.featuredReason} onChange={(event) => changeDraft(bill.bill_id, { featuredReason: event.target.value })} rows={3} placeholder="주목 법안 카드에 표시할 2~3줄의 이유" className="mt-2 block w-full border border-green-deep/20 bg-white px-3 py-3 text-sm font-normal leading-6"/></label>
            <label className="lg:col-span-2 text-xs font-extrabold text-navy">씨앗 관찰 키워드<textarea value={draft.keywords} onChange={(event) => changeDraft(bill.bill_id, { keywords: event.target.value })} rows={2} placeholder="시민의 권리, 재정 부담, 권력 통제 (쉼표로 2~4개)" className="mt-2 block w-full border border-green-deep/20 bg-white px-3 py-3 text-sm font-normal leading-6"/></label>
            <label className="lg:col-span-2 text-xs font-extrabold text-navy">공개용 핵심 요약<textarea value={draft.publicSummary} onChange={(event) => changeDraft(bill.bill_id, { publicSummary: event.target.value })} rows={4} placeholder="자동 분석 요약을 검토·수정한 공개 문안" className="mt-2 block w-full border border-green-deep/20 bg-white px-3 py-3 text-sm font-normal leading-6"/></label>
            <label className="lg:col-span-2 text-xs font-extrabold text-navy">씨앗은 이렇게 봅니다<textarea value={draft.seedView} onChange={(event) => changeDraft(bill.bill_id, { seedView: event.target.value })} rows={5} placeholder="근거·질문·우려를 중심으로 씨드보이스의 관찰과 판단을 작성합니다." className="mt-2 block w-full border border-green-deep/20 bg-white px-3 py-3 text-sm font-normal leading-6"/></label>
            {bill.direction_risk_flags?.length > 0 && <div className="lg:col-span-2 border border-red-800/15 bg-red-50/60 p-4"><p className="text-xs font-extrabold text-red-800">역방향 입법 자동 신호</p><ul className="mt-2 space-y-1 text-sm leading-6 text-charcoal/65">{bill.direction_risk_flags.map((flag) => <li key={flag}>• {flag}</li>)}</ul></div>}
            {bill.media_coverage_draft?.length > 0 && <div className="lg:col-span-2 border border-green-deep/15 bg-white p-4"><p className="text-xs font-extrabold text-navy">자동 공개된 관련 언론보도 — 오류가 있으면 제외·수정</p><div className="mt-3 divide-y divide-green-deep/10">{bill.media_coverage_draft.map((item) => <div key={`${item.url}-${item.title}`} className="py-3"><a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-green-deep">{item.source} · {item.title}<ExternalLink size={12}/></a><p className="mt-1 text-sm leading-6 text-charcoal/60">{item.summary_ko}</p></div>)}</div></div>}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-green-deep/10 pt-4"><label className="flex items-center gap-2 text-xs font-bold text-charcoal/60"><input type="checkbox" checked={draft.allowBookmark} onChange={(event) => changeDraft(bill.bill_id, { allowBookmark: event.target.checked })}/>향후 관심 법안 저장 허용</label><button type="button" disabled={saving === bill.bill_id} onClick={() => void saveEditorial(bill)} className="button-primary"><Save size={15}/>{saving === bill.bill_id ? "저장 중" : "편집 내용 저장"}</button></div>
        </div>}
      </article>;
    })}</div>
  </section>;
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="border border-green-deep/15 bg-white p-4"><span className="text-xs font-bold text-charcoal/45">{label}</span><strong className="mt-1 block text-2xl text-navy">{value.toLocaleString()}건</strong></div>;
}
