import { ArrowRight, CalendarDays, ExternalLink, ReceiptText } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MonitoringSubnav from "../components/MonitoringSubnav";
import { taxPolicies } from "../data/taxWatch";
import { useLanguage } from "../i18n";

const dateText = (date: string) => date.replace(/-/g, ".");

const getKoreaWeek = () => {
  const koreaNow = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const mondayOffset = (koreaNow.getUTCDay() + 6) % 7;
  const start = new Date(Date.UTC(koreaNow.getUTCFullYear(), koreaNow.getUTCMonth(), koreaNow.getUTCDate() - mondayOffset));
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 6);
  return { start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) };
};

function PolicyRow({ policy, ko, index }: { policy: (typeof taxPolicies)[number]; ko: boolean; index: number }) {
  return <Link to={`/monitoring/tax/${policy.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-3 py-7 transition hover:bg-green-pale/55 sm:px-6 lg:grid-cols-[160px_1fr_auto] lg:items-center">
    <div><span className={`inline-flex px-2.5 py-1 text-[11px] font-black ${policy.importance >= 85 ? "bg-red-800 text-white" : "bg-gold text-navy"}`}>{ko ? `중요도 ${policy.importance}` : `Impact ${policy.importance}`}</span><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/50"><CalendarDays size={14}/>{ko ? `확인 ${dateText(policy.checkedAt)}` : `Checked ${policy.checkedAt}`}</p></div>
    <div><div className="mb-2 flex flex-wrap gap-2 text-xs font-bold text-green-deep"><span>{String(index + 1).padStart(2, "0")}</span><span className="text-charcoal/40">{ko ? policy.status.ko : policy.status.en}</span><span className="text-charcoal/40">{ko ? `의견 제출 ${dateText(policy.deadline)}까지` : `Comments due ${policy.deadline}`}</span></div><h2 className="editorial-title text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.55rem]">{ko ? policy.title.ko : policy.title.en}</h2><p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-7 text-charcoal/60">{ko ? policy.summary.ko : policy.summary.en}</p><p className="mt-3 flex items-center gap-2 text-xs text-charcoal/45"><ReceiptText size={14}/>{ko ? policy.affected.ko : policy.affected.en}</p></div>
    <span className="flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "분석 보기" : "View analysis"}<ArrowRight size={15}/></span>
  </Link>;
}

export default function TaxWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [activeTab, setActiveTab] = useState<"weekly" | "archive">("weekly");
  const week = useMemo(() => getKoreaWeek(), []);
  const weeklySelection = useMemo(() => taxPolicies.filter((policy) => policy.checkedAt >= week.start && policy.checkedAt <= week.end), [week.end, week.start]);
  const archivedPolicies = useMemo(() => taxPolicies.filter((policy) => !weeklySelection.includes(policy)), [weeklySelection]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">TAX & LEVY WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "세금감시" : "Tax Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "정부와 국회가 추진하는 세금정책 가운데 시민의 부담, 기업 활동, 재산권에 큰 영향을 미치는 사안을 골라 보여드립니다. 중요도 75점 이상인 정책은 씨앗의 관점으로 쉽게 설명하고 이후 진행 과정도 계속 추적합니다." : "We select tax policies with major effects on citizens, enterprise and property rights. Measures scoring 75 or above receive a plain-language Seed Voice analysis and continuing status updates."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-8 sm:py-10">
      <div role="tablist" aria-label={ko ? "세금감시 보기" : "Tax Watch views"} className="grid border-b-2 border-navy sm:grid-cols-2">
        <button type="button" role="tab" aria-selected={activeTab === "weekly"} aria-controls="weekly-tax-panel" onClick={() => setActiveTab("weekly")} className={`px-5 py-4 text-left text-sm font-black transition sm:text-base ${activeTab === "weekly" ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{ko ? "씨앗이 선정한 이번 주 세금정책" : "Seed Voice Tax Policies of the Week"}<span className={`ml-2 text-xs ${activeTab === "weekly" ? "text-gold" : "text-charcoal/35"}`}>{weeklySelection.length}</span></button>
        <button type="button" role="tab" aria-selected={activeTab === "archive"} aria-controls="tax-archive-panel" onClick={() => setActiveTab("archive")} className={`border-t border-green-deep/15 px-5 py-4 text-left text-sm font-black transition sm:border-l sm:border-t-0 sm:text-base ${activeTab === "archive" ? "bg-green-deep text-white" : "bg-white text-charcoal/55 hover:bg-green-pale"}`}>{ko ? "세금감시 목록" : "Tax Watch List"}<span className={`ml-2 text-xs ${activeTab === "archive" ? "text-gold" : "text-charcoal/35"}`}>{archivedPolicies.length}</span></button>
      </div>

      {activeTab === "weekly" && <div id="weekly-tax-panel" role="tabpanel">
        <div className="flex flex-col gap-3 border-b border-green-deep/15 bg-ivory px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-7 text-charcoal/60"><strong className="text-navy">{dateText(week.start)} – {dateText(week.end)}</strong><br/>{ko ? "중요도 75점 이상이며 시민과 기업의 부담에 큰 영향을 줄 수 있는 정책을 골랐습니다. 공개가 승인된 정책만 보이며 다음 주에는 세금감시 목록으로 이동합니다." : "These approved policies score 75 or above and may materially affect citizens or businesses. They move to the Tax Watch List next week."}</p>
          <a href="https://opinion.lawmaking.go.kr/gcom/ogLmPp" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "입법예고 검색·의견 제출" : "Search notices and comment"}<ExternalLink size={13}/></a>
        </div>
        <div>{weeklySelection.map((policy, index) => <PolicyRow key={policy.slug} policy={policy} ko={ko} index={index}/>)}</div>
        {weeklySelection.length === 0 && <div className="py-16 text-center"><ReceiptText className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "이번 주 공개된 세금정책이 없습니다." : "No selected tax policy has been published this week."}</p></div>}
      </div>}

      {activeTab === "archive" && <div id="tax-archive-panel" role="tabpanel">{archivedPolicies.length ? archivedPolicies.map((policy, index) => <PolicyRow key={policy.slug} policy={policy} ko={ko} index={index}/>) : <div className="py-16 text-center"><ReceiptText className="mx-auto text-gold"/><p className="mt-4 text-sm font-bold text-navy">{ko ? "아직 세금감시 목록으로 이동한 정책이 없습니다." : "No policies have moved to the Tax Watch List yet."}</p><p className="mt-2 text-xs leading-6 text-charcoal/50">{ko ? "이번 주 선정 정책은 다음 주에 이곳으로 이동합니다." : "This week's selected policies will move here next week."}</p></div>}</div>}
    </div>
  </section>;
}
