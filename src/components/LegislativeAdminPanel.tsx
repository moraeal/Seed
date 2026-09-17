import { Check, Clock3, ExternalLink, Pause, RefreshCw, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { AuthSession } from "../auth";
import { getLegislativeAdminData, setLegislativeReviewState, type LegislativeBill, type LegislativeReviewState, type LegislativeSyncRun } from "../lib/legislativeMonitoring";

const stateLabels: Record<LegislativeReviewState, string> = {
  collected: "일반 수집", queued: "분석 대기", analyzing: "분석 중", review: "검토 필요", published: "공개", held: "보류", excluded: "제외", error: "오류",
};

export default function LegislativeAdminPanel({ session }: { session: AuthSession }) {
  const [bills, setBills] = useState<LegislativeBill[]>([]);
  const [runs, setRuns] = useState<LegislativeSyncRun[]>([]);
  const [filter, setFilter] = useState<LegislativeReviewState | "all">("review");
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
  const filtered = filter === "all" ? bills : bills.filter((bill) => bill.review_state === filter);
  const latestRun = runs[0];

  const update = async (bill: LegislativeBill, state: LegislativeReviewState) => {
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

  return <section>
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy pb-5">
      <div><p className="section-kicker">LEGISLATIVE MONITOR</p><h2 className="editorial-title mt-2 text-3xl font-bold text-navy">입법감시 관리</h2><p className="mt-2 text-sm leading-6 text-charcoal/55">국회에서 자동 수집한 법안을 검토하고 공개·보류·제외합니다.</p></div>
      <button type="button" onClick={() => void refresh()} disabled={loading} className="button-secondary"><RefreshCw size={15} className={loading ? "animate-spin" : ""}/>새로고침</button>
    </div>

    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div className="border border-green-deep/15 bg-white p-4"><span className="text-xs font-bold text-charcoal/45">전체 수집</span><strong className="mt-1 block text-2xl text-navy">{bills.length.toLocaleString()}건</strong></div>
      <div className="border border-green-deep/15 bg-white p-4"><span className="text-xs font-bold text-charcoal/45">검토 필요</span><strong className="mt-1 block text-2xl text-navy">{(counts.review || 0).toLocaleString()}건</strong></div>
      <div className="border border-green-deep/15 bg-white p-4"><span className="text-xs font-bold text-charcoal/45">분석 대기</span><strong className="mt-1 block text-2xl text-navy">{(counts.queued || 0).toLocaleString()}건</strong></div>
      <div className="border border-green-deep/15 bg-white p-4"><span className="text-xs font-bold text-charcoal/45">공개</span><strong className="mt-1 block text-2xl text-navy">{(counts.published || 0).toLocaleString()}건</strong></div>
    </div>

    {latestRun && <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border border-green-deep/10 bg-green-pale/45 px-4 py-3 text-xs text-charcoal/60"><span className="flex items-center gap-1.5 font-bold text-green-deep"><Clock3 size={14}/>최근 수집 {new Date(latestRun.started_at).toLocaleString("ko-KR")}</span><span>상태 {latestRun.status}</span><span>확인 {latestRun.fetched_count}건</span><span>중요 법안 {latestRun.queued_count}건</span>{latestRun.error_message && <span className="font-bold text-red-700">{latestRun.error_message}</span>}</div>}

    <div className="mt-6 flex flex-wrap gap-2">
      {(["review", "queued", "collected", "published", "held", "excluded", "error", "all"] as const).map((state) => <button key={state} type="button" onClick={() => setFilter(state)} className={`px-3 py-2 text-xs font-extrabold ${filter === state ? "bg-green-deep text-white" : "border border-green-deep/15 bg-white text-green-deep"}`}>{state === "all" ? "전체" : stateLabels[state]} {state !== "all" ? counts[state] || 0 : bills.length}</button>)}
    </div>

    {notice && <p className="mt-4 text-sm font-bold text-green-deep">{notice}</p>}
    {loading && <p className="py-14 text-center text-sm text-charcoal/45">자료를 불러오는 중입니다.</p>}
    {!loading && filtered.length === 0 && <p className="border-b border-green-deep/15 py-14 text-center text-sm text-charcoal/45">해당 상태의 법안이 없습니다.</p>}

    <div className="mt-4">{filtered.map((bill) => <article key={bill.bill_id} className="grid gap-4 border-b border-green-deep/15 bg-white p-5 lg:grid-cols-[110px_1fr_auto] lg:items-center">
      <div><span className={`inline-flex px-2 py-1 text-[11px] font-black ${bill.importance_score >= 85 ? "bg-red-800 text-white" : bill.importance_score >= 60 ? "bg-gold text-navy" : "bg-green-pale text-green-deep"}`}>중요도 {bill.importance_score}</span><time className="mt-2 block text-xs text-charcoal/45">{bill.proposed_date?.replace(/-/g, ".") || "—"}</time><span className="mt-1 block text-[11px] font-bold text-charcoal/40">{stateLabels[bill.review_state]}</span></div>
      <div><div className="flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{bill.committee || "소관위 미정"}</span>{bill.bill_no && <span className="text-charcoal/40">{bill.bill_no}</span>}</div><h3 className="mt-2 text-lg font-extrabold leading-7 text-navy">{bill.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/55">{bill.analysis?.summary_ko || bill.official_summary || bill.proposal_reason || "분석에 필요한 공식 상세자료를 확인하고 있습니다."}</p><div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span>{bill.proposer || bill.representative_proposer || "제안자 확인 중"}</span>{bill.detail_url && <a href={bill.detail_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-green-deep">국회 원문<ExternalLink size={12}/></a>}<Link to={`/monitoring/legislation/${bill.slug}`} className="font-bold text-green-deep">미리보기</Link></div></div>
      <div className="flex flex-wrap gap-2 lg:max-w-[210px] lg:justify-end">
        {bill.review_state !== "published" && <button type="button" disabled={saving === bill.bill_id || !bill.analysis?.summary_ko || !bill.analysis?.summary_en || !bill.analysis?.title_en} onClick={() => void update(bill, "published")} title={!bill.analysis?.summary_ko || !bill.analysis?.summary_en || !bill.analysis?.title_en ? "한·영문 분석이 완료된 뒤 공개할 수 있습니다." : undefined} className="inline-flex items-center gap-1.5 bg-green-deep px-3 py-2 text-xs font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-35"><Check size={14}/>공개</button>}
        {bill.review_state !== "held" && <button type="button" disabled={saving === bill.bill_id} onClick={() => void update(bill, "held")} className="inline-flex items-center gap-1.5 border border-green-deep/20 px-3 py-2 text-xs font-extrabold text-green-deep"><Pause size={14}/>보류</button>}
        {bill.review_state !== "excluded" && <button type="button" disabled={saving === bill.bill_id} onClick={() => void update(bill, "excluded")} className="inline-flex items-center gap-1.5 border border-red-800/20 px-3 py-2 text-xs font-extrabold text-red-800"><X size={14}/>제외</button>}
      </div>
    </article>)}</div>
  </section>;
}
