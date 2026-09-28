import { FileSearch } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import MonitoringSubnav from "../components/MonitoringSubnav";
import WatchPairRow, { type WatchSide } from "../components/WatchPairRow";
import { legislativeCommentaries } from "../data/legislativeCommentaries";
import { incomeTaxFamilyDeductionBriefing } from "../data/incomeTaxFamilyDeductionBriefing";
import { incomeTaxFamilyDeductionTranslation } from "../data/contentTranslations/briefingIncomeTaxFamilyDeduction";
import { useLanguage } from "../i18n";
import { getPublishedLegislativeBills, type LegislativeBill } from "../lib/legislativeMonitoring";

const sourceUrl = (bill: LegislativeBill) => bill.full_text_url || bill.detail_url || "";

export default function LegislativeWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [bills, setBills] = useState<LegislativeBill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;
    getPublishedLegislativeBills().then((items) => { if (active) setBills(items); })
      .catch(() => { if (active) setError(ko ? "입법감시 자료를 불러오지 못했습니다." : "Could not load legislative records."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [ko]);

  const rows = useMemo(() => {
    const used = new Set<string>();
    const paired = legislativeCommentaries.map((article) => {
      const bill = bills.find((item) => item.bill_no === article.billNo || item.slug === article.relatedBillSlug);
      if (bill) used.add(bill.bill_id);
      const edition = article.editions[language];
      const official = article.sources.find((source) => /assembly.go.kr|lawmaking.go.kr/.test(source.url));
      return { key: article.slug, date: article.date, article: { href: `/monitoring/legislation/commentary/${article.slug}`, label: ko ? "입법 논평" : "LEGISLATIVE COMMENTARY", title: edition.title, summary: edition.summary, image: article.heroSrc, alt: edition.heroAlt, date: article.date }, record: bill ? {
        href: sourceUrl(bill) || `/monitoring/legislation/${bill.slug}`, external: Boolean(sourceUrl(bill)), detailHref: `/monitoring/legislation/${bill.slug}`, label: ko ? `법안 원문 · 의안 ${bill.bill_no || ""}` : `BILL SOURCE · ${bill.bill_no || ""}`, title: ko ? bill.title : bill.analysis?.title_en || bill.title, summary: ko ? bill.official_summary || bill.public_summary_ko || bill.analysis?.summary_ko || "공식 제안 자료를 확인하세요." : bill.analysis?.official_rationale_en || bill.public_summary_en || bill.analysis?.summary_en || "Open the official bill record.", date: bill.proposed_date || undefined,
      } : { href: official?.url || `/monitoring/legislation/commentary/${article.slug}`, external: Boolean(official), label: ko ? `법안 원문 · 의안 ${article.billNo}` : `BILL SOURCE · ${article.billNo}`, title: ko ? article.editions.ko.subtitle : article.editions.en.subtitle, summary: ko ? "국회에 공개된 제안 이유와 주요 내용을 원문에서 확인하세요." : "Read the proposal's stated purpose and provisions in the official record.", date: article.date } };
    });
    const explainerBill = bills.find((item) => item.bill_no === "2221581");
    if (explainerBill) used.add(explainerBill.bill_id);
    const explainer = { key: "family-deduction", date: incomeTaxFamilyDeductionBriefing.date, article: { href: `/briefings/${incomeTaxFamilyDeductionBriefing.slug}`, label: ko ? "법안 설명 기사" : "BILL EXPLAINER", title: ko ? incomeTaxFamilyDeductionBriefing.title : incomeTaxFamilyDeductionTranslation.title, summary: ko ? incomeTaxFamilyDeductionBriefing.summary : incomeTaxFamilyDeductionTranslation.summary, image: incomeTaxFamilyDeductionBriefing.images?.[0]?.src, alt: ko ? incomeTaxFamilyDeductionBriefing.images?.[0]?.alt : incomeTaxFamilyDeductionTranslation.images?.[0]?.alt, date: incomeTaxFamilyDeductionBriefing.date }, record: explainerBill ? { href: sourceUrl(explainerBill) || `/monitoring/legislation/${explainerBill.slug}`, external: Boolean(sourceUrl(explainerBill)), detailHref: `/monitoring/legislation/${explainerBill.slug}`, label: ko ? "법안 원문 · 의안 2221581" : "BILL SOURCE · 2221581", title: ko ? explainerBill.title : explainerBill.analysis?.title_en || explainerBill.title, summary: ko ? explainerBill.official_summary || explainerBill.public_summary_ko || "국회 원문에서 개정안 내용을 확인하세요." : explainerBill.analysis?.official_rationale_en || explainerBill.public_summary_en || "Read the official proposal.", date: explainerBill.proposed_date || undefined } : { href: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221581/detailRP", external: true, label: ko ? "법안 원문 · 의안 2221581" : "BILL SOURCE · 2221581", title: ko ? "소득세법 일부개정법률안" : "Income Tax Act amendment", summary: ko ? "가족 기본공제 소득요건에 관한 제안 내용을 국회 공개 자료에서 확인하세요." : "Read the proposal on the family deduction income threshold.", date: incomeTaxFamilyDeductionBriefing.date } };
    const remaining: Array<{ key: string; date: string; article?: WatchSide; record: WatchSide }> = bills.filter((bill) => !used.has(bill.bill_id)).map((bill) => ({ key: bill.bill_id, date: bill.published_at || bill.proposed_date || "", record: { href: sourceUrl(bill) || `/monitoring/legislation/${bill.slug}`, external: Boolean(sourceUrl(bill)), detailHref: `/monitoring/legislation/${bill.slug}`, label: ko ? `법안 원문 · 의안 ${bill.bill_no || ""}` : `BILL SOURCE · ${bill.bill_no || ""}`, title: ko ? bill.title : bill.analysis?.title_en || bill.title, summary: ko ? bill.official_summary || bill.public_summary_ko || bill.analysis?.summary_ko || "법안 원문을 확인하세요." : bill.analysis?.official_rationale_en || bill.public_summary_en || bill.analysis?.summary_en || "Read the official proposal.", date: bill.proposed_date || undefined } }));
    return [...paired, explainer, ...remaining].sort((a, b) => b.date.localeCompare(a.date));
  }, [bills, language, ko]);
  const filtered = rows.filter((row) => !query.trim() || [row.article?.title, row.record.title, row.article?.summary, row.record.summary].some((value) => value?.toLowerCase().includes(query.trim().toLowerCase())));

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory"><div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-2 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div><p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "새 법안의 내용과 시민 영향을 씨앗 기사와 나란히 살펴봅니다. 오른쪽에서 국회에 공개된 제안 자료와 원문을 확인할 수 있습니다." : "Read Seed Voice's analysis alongside the proposed bill. Open the official legislative record from the right-hand panel."}</p></div></header>
    <MonitoringSubnav />
    <div className="container-page py-10 sm:py-12"><div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">LEGISLATIVE WATCH</span><h2 className="mt-2 text-3xl font-extrabold text-navy">{ko ? "입법감시 목록" : "Legislative Watch"}</h2></div><p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "왼쪽은 씨앗의 기사, 오른쪽은 법안 요약과 원문입니다." : "Seed Voice articles appear beside bill summaries and source links."}</p></div>
      <label className="mt-6 flex items-center gap-3 border border-green-deep/15 bg-white px-4 py-3"><FileSearch size={18} className="text-charcoal/45"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "법안·기사 검색" : "Search bills and articles"} className="w-full bg-transparent text-sm outline-none"/></label>
      {loading && <p className="py-5 text-sm text-charcoal/50">{ko ? "최신 입법 기록을 불러오는 중입니다." : "Loading current bill records…"}</p>}{error && <p className="py-5 text-sm text-red-700">{error}</p>}
      <div className="mt-3">{filtered.map((row) => <WatchPairRow key={row.key} article={row.article} record={row.record} ko={ko}/>)}</div>
      {!filtered.length && !loading && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "검색 결과가 없습니다." : "No matching records."}</p>}
    </div>
  </section>;
}
