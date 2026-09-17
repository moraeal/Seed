import { ArrowLeft, CalendarDays, ExternalLink, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../auth";
import ContentAccountability from "../components/ContentAccountability";
import { useLanguage } from "../i18n";
import { getLegislativeBillBySlug, getLegislativeBillEvents, type LegislativeBill, type LegislativeBillEvent } from "../lib/legislativeMonitoring";

function Bullets({ items, ko }: { items?: string[]; ko: boolean }) {
  if (!items?.length) return <p className="text-sm leading-7 text-charcoal/50">{ko ? "확인할 수 있는 공식 자료가 충분하지 않습니다." : "The available official record is not sufficient to assess this point."}</p>;
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-base leading-8 text-charcoal/75"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{item}</span></li>)}</ul>;
}

export default function LegislativeBillDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const { session } = useAuth();
  const ko = language === "ko";
  const [bill, setBill] = useState<LegislativeBill | null>(null);
  const [events, setEvents] = useState<LegislativeBillEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLegislativeBillBySlug(slug, session).then(async (item) => {
      setBill(item);
      if (item) setEvents(await getLegislativeBillEvents(item.bill_id, session));
    }).finally(() => setLoading(false));
  }, [slug, session?.access_token]);

  if (loading) return <div className="container-page min-h-[55vh] py-24 text-center text-sm text-charcoal/50">{ko ? "법안 자료를 불러오는 중입니다." : "Loading bill record…"}</div>;
  if (!bill) return <div className="container-page min-h-[55vh] py-24 text-center"><h1 className="editorial-title text-3xl font-bold text-navy">{ko ? "공개된 법안 기록을 찾을 수 없습니다." : "This published bill record could not be found."}</h1><Link to="/monitoring/legislation" className="button-primary mt-7">{ko ? "입법감시 목록" : "Legislative Watch"}</Link></div>;

  const analysis = bill.analysis || {};
  const summary = ko ? analysis.summary_ko : analysis.summary_en;
  const title = ko ? bill.title : analysis.title_en || bill.title;
  const officialRationale = ko ? (bill.proposal_reason || bill.main_content || bill.official_summary) : analysis.official_rationale_en;
  const sections = [
    [ko ? "무엇이 달라지는가" : "What would change", ko ? analysis.changes_ko : analysis.changes_en],
    [ko ? "기대되는 효과" : "Expected benefits", ko ? analysis.positive_effects_ko : analysis.positive_effects_en],
    [ko ? "시민에게 미치는 영향" : "Impact on citizens", ko ? analysis.citizen_impact_ko : analysis.citizen_impact_en],
    [ko ? "기업과 시장에 미치는 영향" : "Impact on enterprise and markets", ko ? analysis.business_impact_ko : analysis.business_impact_en],
    [ko ? "권한은 어디로 이동하는가" : "Where authority shifts", ko ? analysis.authority_shift_ko : analysis.authority_shift_en],
    [ko ? "부작용과 위험" : "Risks and unintended effects", ko ? analysis.risks_ko : analysis.risks_en],
    [ko ? "시민이 계속 볼 지점" : "What citizens should keep watching", ko ? analysis.watch_points_ko : analysis.watch_points_en],
  ] as [string, string[] | undefined][];

  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory py-9 sm:py-12"><div className="container-page max-w-5xl"><Link to="/monitoring/legislation" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "입법감시 목록" : "Legislative Watch"}</Link><div className="mt-4 border-t-2 border-navy pt-4"><div className="flex flex-wrap gap-2 text-xs font-extrabold text-green-deep"><span>{bill.committee || (ko ? "소관위 미정" : "Committee pending")}</span>{bill.bill_no && <span className="text-charcoal/45">{bill.bill_no}</span>}</div><h1 className="article-detail-title mt-3">{title}</h1><p className="article-summary">{summary || (ko ? bill.official_summary : undefined) || (ko ? "공식 제안 자료를 바탕으로 법안의 영향을 검토합니다." : "This record examines the bill using its official proposal materials.")}</p><div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/50"><span className="flex items-center gap-1.5"><CalendarDays size={14}/>{bill.proposed_date?.replace(/-/g, ".") || "—"}</span><span>{bill.proposer || bill.representative_proposer}</span><span className="ml-auto flex items-center gap-1.5 font-bold text-green-deep"><Scale size={14}/>{ko ? `시민영향도 ${bill.importance_score}` : `Civic impact ${bill.importance_score}`}</span></div></div></div></header>

    <div className="article-content-frame py-9 sm:py-12">
      <aside className="reading-column border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">{ko ? "먼저 확인할 점" : "READ THIS FIRST"}</span><p className="mt-3 text-base font-semibold leading-8 text-navy">{summary || (ko ? "이 페이지는 국회 공개자료를 바탕으로 자동 수집한 뒤 편집 검토를 거쳐 공개했습니다. 예상 효과와 위험은 확정된 사실이 아니라 법안 내용에서 도출한 분석입니다." : "This page was collected from official National Assembly records and published after editorial review. Expected effects and risks are analysis, not established facts.")}</p></aside>

      {officialRationale && <section className="article-section article-section-long reading-column"><h2 className="article-section-title">{ko ? "국회가 밝힌 제안 이유와 주요 내용" : "Official rationale and principal provisions"}</h2><p className="article-copy article-copy-long">{officialRationale}</p>{ko && bill.proposal_reason && bill.main_content && <p className="article-copy article-copy-long">{bill.main_content}</p>}</section>}

      {sections.map(([sectionTitle, items]) => <section key={sectionTitle} className="article-section article-section-long reading-column"><h2 className="article-section-title">{sectionTitle}</h2><Bullets items={items} ko={ko}/></section>)}

      {events.length > 0 && <section className="article-section article-section-long reading-column"><h2 className="article-section-title">{ko ? "법안 진행 기록" : "Legislative timeline"}</h2><ol className="space-y-5 border-l-2 border-green-deep/20 pl-6">{events.map((event) => <li key={event.id}><time className="text-xs font-black text-green-deep">{event.event_date?.replace(/-/g, ".") || "—"}</time><h3 className="mt-1 font-bold text-navy">{event.title}</h3>{event.description && <p className="mt-1 text-sm leading-7 text-charcoal/60">{event.description}</p>}</li>)}</ol></section>}

      <aside className="reading-column mt-10 border-t-2 border-navy pt-6"><h2 className="text-base font-bold text-navy">{ko ? "출처와 확인 상태" : "Sources and verification status"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/60">{ko ? `국회 공개자료 · 마지막 확인 ${bill.source_checked_at.slice(0, 10).replace(/-/g, ".")} · 분석 신뢰도 ${analysis.confidence || "자료 부족"}` : `National Assembly public data · Last checked ${bill.source_checked_at.slice(0, 10)} · Analysis confidence ${analysis.confidence || "insufficient evidence"}`}</p><div className="mt-4 flex flex-wrap gap-3">{bill.detail_url && <a href={bill.detail_url} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "국회 의안정보" : "Official bill record"}<ExternalLink size={14}/></a>}{bill.full_text_url && <a href={bill.full_text_url} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "법안 원문" : "Bill text"}<ExternalLink size={14}/></a>}</div></aside>
      <ContentAccountability postSlug={`legislation-${bill.slug}`} publishedDate={(bill.published_at || bill.proposed_date || bill.created_at).slice(0, 10)}/>
    </div>
  </article>;
}
