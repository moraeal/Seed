import { Bell, Clock3, ExternalLink, FileText, RefreshCw, Save } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { AuthSession } from "../auth";
import {
  getTaxWatchAdminData,
  updateTaxWatchSettings,
  type TaxWatchDecision,
  type TaxWatchItem,
  type TaxWatchRun,
  type TaxWatchSettings,
} from "../lib/taxWatchAdmin";

const decisionLabels: Record<TaxWatchDecision, string> = {
  notice_only: "참고 알림",
  commentary_draft: "논평 대상",
  ignored: "편집방침 밖",
  error: "처리 오류",
};

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="border border-green-deep/10 bg-white p-4"><p className="text-xs font-bold text-charcoal/45">{label}</p><p className="mt-1 text-2xl font-black text-navy">{value.toLocaleString()}</p></div>;
}

export default function TaxWatchAdminPanel({ session }: { session: AuthSession }) {
  const [settings, setSettings] = useState<TaxWatchSettings | null>(null);
  const [items, setItems] = useState<TaxWatchItem[]>([]);
  const [runs, setRuns] = useState<TaxWatchRun[]>([]);
  const [filter, setFilter] = useState<TaxWatchDecision | "all">("all");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");

  const refresh = async () => {
    setLoading(true);
    setNotice("");
    try {
      const data = await getTaxWatchAdminData(session);
      setSettings(data.settings);
      setItems(data.items);
      setRuns(data.runs);
    } catch {
      setNotice("세금감시 자료를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void refresh(); }, [session.access_token]);

  const counts = useMemo(() => items.reduce<Record<string, number>>((result, item) => {
    result[item.editorial_decision] = (result[item.editorial_decision] || 0) + 1;
    return result;
  }, {}), [items]);
  const filtered = filter === "all" ? items : items.filter((item) => item.editorial_decision === filter);
  const latestRun = runs[0];

  const saveSettings = async () => {
    if (!settings) return;
    setSaving(true);
    setNotice("");
    try {
      const saved = await updateTaxWatchSettings(session, {
        enabled: settings.enabled,
        commentary_threshold: Math.max(0, Math.min(100, Number(settings.commentary_threshold))),
      });
      if (saved) setSettings(saved);
      setNotice("세금감시 설정을 저장했습니다.");
    } catch {
      setNotice("설정을 저장하지 못했습니다.");
    } finally {
      setSaving(false);
    }
  };

  return <section>
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy pb-5">
      <div><p className="section-kicker">DAILY TAX WATCH</p><h1 className="editorial-title mt-2 text-4xl font-bold text-navy">세금감시 관리</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/55">매일 오전 6시 30분 새 세금정책을 확인합니다. 씨앗의 관심사와 거리가 있는 사안은 참고 알림으로만 남기고, 시민의 권리·부담·재산권·기업활동·행정권한에 중대한 사안은 편집부 원고함에 비공개 논평 초안을 만듭니다.</p></div>
      <button type="button" onClick={() => void refresh()} disabled={loading} className="button-secondary"><RefreshCw size={15} className={loading ? "animate-spin" : ""}/>새로고침</button>
    </div>

    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"><Stat label="전체 후보" value={items.length}/><Stat label="참고 알림" value={counts.notice_only || 0}/><Stat label="논평 대상" value={counts.commentary_draft || 0}/><Stat label="논평 초안" value={items.filter((item) => item.article_draft_id).length}/><Stat label="편집방침 밖" value={counts.ignored || 0}/></div>

    {latestRun && <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border border-green-deep/10 bg-green-pale/45 px-4 py-3 text-xs text-charcoal/60"><span className="flex items-center gap-1.5 font-bold text-green-deep"><Clock3 size={14}/>최근 확인 {new Date(latestRun.started_at).toLocaleString("ko-KR")}</span><span>상태 {latestRun.status}</span><span>수집 {latestRun.fetched_count}건</span><span>신규 {latestRun.new_count}건</span><span>초안 {latestRun.commentary_count}건</span>{latestRun.error_message && <span className="font-bold text-red-700">{latestRun.error_message}</span>}</div>}

    {settings && <div className="mt-5 flex flex-wrap items-end gap-4 border border-green-deep/15 bg-white p-4">
      <label className="flex min-h-10 items-center gap-2 text-sm font-bold text-navy"><input type="checkbox" checked={settings.enabled} onChange={(event) => setSettings({ ...settings, enabled: event.target.checked })} className="h-4 w-4 accent-green-deep"/>매일 자동 확인</label>
      <label className="text-xs font-extrabold text-navy">논평 초안 기준 점수<input type="number" min={0} max={100} value={settings.commentary_threshold} onChange={(event) => setSettings({ ...settings, commentary_threshold: Number(event.target.value) })} className="ml-2 w-20 border border-green-deep/20 px-3 py-2 text-sm font-normal"/></label>
      <button type="button" onClick={() => void saveSettings()} disabled={saving} className="button-primary"><Save size={14}/>{saving ? "저장 중" : "설정 저장"}</button>
      <p className="text-xs leading-5 text-charcoal/45">중요도 기준 기본값은 75점입니다. 자동 공개는 하지 않습니다.</p>
    </div>}

    <div className="mt-6 flex gap-2 overflow-x-auto pb-1">{(["all", "notice_only", "commentary_draft", "ignored", "error"] as const).map((value) => <button key={value} type="button" onClick={() => setFilter(value)} className={`whitespace-nowrap px-3 py-2 text-xs font-extrabold ${filter === value ? "bg-green-deep text-white" : "border border-green-deep/15 bg-white text-green-deep"}`}>{value === "all" ? "전체" : decisionLabels[value]} {value === "all" ? items.length : counts[value] || 0}</button>)}</div>
    {notice && <p className="mt-4 border-l-4 border-gold bg-green-pale/45 px-4 py-3 text-sm font-bold text-green-deep">{notice}</p>}
    {loading && <p className="py-14 text-center text-sm text-charcoal/45">자료를 불러오는 중입니다.</p>}
    {!loading && filtered.length === 0 && <p className="border-b border-green-deep/15 py-14 text-center text-sm text-charcoal/45">아직 조건에 맞는 세금정책 후보가 없습니다.</p>}

    <div className="mt-4 divide-y divide-green-deep/15 border-t-2 border-navy bg-white">{filtered.map((item) => <article key={item.id} className="grid gap-4 p-5 lg:grid-cols-[105px_minmax(0,1fr)_auto] lg:items-start">
      <div><span className={`inline-flex px-2 py-1 text-[11px] font-black ${item.relevance_score >= 90 ? "bg-red-800 text-white" : item.relevance_score >= 75 ? "bg-gold text-navy" : "bg-green-pale text-green-deep"}`}>중요도 {item.relevance_score}</span><span className="mt-2 block text-[11px] font-bold text-charcoal/45">{decisionLabels[item.editorial_decision]}</span><time className="mt-1 block text-[11px] text-charcoal/40">{new Date(item.published_at || item.checked_at).toLocaleDateString("ko-KR")}</time></div>
      <div><div className="flex flex-wrap items-center gap-2 text-xs font-bold text-green-deep"><span>{item.source_name}</span><span className="text-charcoal/35">{item.source_kind === "official" ? "공식자료" : "언론보도"}</span>{item.topics.map((topic) => <span key={topic} className="bg-green-pale px-2 py-0.5 text-[10px]">{topic}</span>)}</div><h2 className="mt-2 text-lg font-extrabold leading-7 text-navy">{item.issue_title_ko || item.source_title}</h2><p className="mt-2 text-sm leading-6 text-charcoal/60">{item.summary_ko || item.relevance_reason_ko}</p>{item.evidence_gaps_ko.length > 0 && <p className="mt-2 text-xs leading-5 text-amber-800">추가 확인: {item.evidence_gaps_ko.join(" · ")}</p>}{item.processing_error && <p className="mt-2 text-xs font-bold text-red-700">처리 오류: {item.processing_error}</p>}</div>
      <div className="flex flex-wrap gap-2 lg:max-w-[190px] lg:justify-end"><a href={item.source_url} target="_blank" rel="noreferrer" className="button-secondary">원문<ExternalLink size={13}/></a>{item.article_draft_id ? <Link to="/insights/editorial" className="button-primary"><FileText size={14}/>논평 초안</Link> : <span className="inline-flex items-center gap-1 px-2 py-2 text-xs font-bold text-charcoal/40"><Bell size={13}/>알림만</span>}</div>
    </article>)}</div>
  </section>;
}
