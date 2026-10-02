import { useEffect, useMemo, useState } from "react";
import WatchPairRow, { type WatchSide } from "../components/WatchPairRow";
import { legislativeCommentaries } from "../data/legislativeCommentaries";
import { realEstateSupervisorExplainer } from "../data/realEstateSupervisorExplainer";
import { realEstateSupervisorExplainerTranslation } from "../data/contentTranslations/briefingRealEstateSupervisor";
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
      const official = article.billNo ? article.sources.find((source) => /assembly.go.kr|lawmaking.go.kr/.test(source.url)) : article.sources[0];
      return { key: article.slug, date: article.date, article: { href: `/monitoring/legislation/commentary/${article.slug}`, label: ko ? "입법감시 기사" : "LEGISLATIVE WATCH", title: edition.title, summary: edition.summary, image: article.heroSrc, alt: edition.heroAlt, date: article.date }, record: bill ? {
        href: sourceUrl(bill) || `/monitoring/legislation/${bill.slug}`, external: Boolean(sourceUrl(bill)), detailHref: `/monitoring/legislation/${bill.slug}`, detailLabel: ko ? "법안 쉽게 읽기" : "Read bill explainer", label: ko ? `법안 원문 · 의안 ${bill.bill_no || ""}` : `BILL SOURCE · ${bill.bill_no || ""}`, title: ko ? bill.title : bill.analysis?.title_en || bill.title, summary: ko ? bill.public_summary_ko || bill.analysis?.summary_ko || bill.official_summary || "공식 제안 자료를 확인하세요." : bill.analysis?.official_rationale_en || bill.public_summary_en || bill.analysis?.summary_en || "Open the official bill record.", date: bill.proposed_date || undefined,
      } : { href: official?.url || article.sources[0]?.url || `/monitoring/legislation/commentary/${article.slug}`, external: Boolean(official || article.sources[0]), label: article.billNo ? (ko ? `법안 원문 · 의안 ${article.billNo}` : `BILL SOURCE · ${article.billNo}`) : (ko ? "정부 공식 브리핑 · 국회 제출 예정" : "GOVERNMENT BRIEFING · PENDING SUBMISSION"), title: ko ? article.editions.ko.subtitle : article.editions.en.subtitle, summary: article.billNo ? (ko ? "국회에 공개된 제안 이유와 주요 내용을 원문에서 확인하세요." : "Read the proposal's stated purpose and provisions in the official record.") : (ko ? "국무회의 의결 사실과 7월 입법예고안의 범위를 확인하세요. 최종 국회 제출안은 추후 대조가 필요합니다." : "Read the Cabinet decision and July consultation draft; the final tabled text requires a separate comparison."), date: article.date } };
    });
    const supervisorBill = bills.find((item) => item.bill_no === "2221573");
    if (supervisorBill) used.add(supervisorBill.bill_id);
    const supervisor = { key: "supervisor-explainer", date: realEstateSupervisorExplainer.date, article: { href: `/briefings/${realEstateSupervisorExplainer.slug}`, label: ko ? "법안 해설과 논평" : "EXPLAINER AND OPINION", title: ko ? realEstateSupervisorExplainer.title : realEstateSupervisorExplainerTranslation.title, summary: ko ? realEstateSupervisorExplainer.summary : realEstateSupervisorExplainerTranslation.summary, image: realEstateSupervisorExplainer.images?.[0]?.src, alt: ko ? realEstateSupervisorExplainer.images?.[0]?.alt : realEstateSupervisorExplainerTranslation.images?.[0]?.alt, date: realEstateSupervisorExplainer.date }, record: { href: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221573/detailRP", external: true, label: ko ? "관련 법안 원문 · 의안 2221573" : "BILL SOURCE · 2221573", title: ko ? "부동산감독원 설치 및 운영에 관한 법률안" : "Real Estate Supervisor Bill", summary: ko ? "공개된 제안 이유와 주요 내용을 확인하세요." : "Read the published proposal summary.", date: realEstateSupervisorExplainer.date } };
    const explainerBill = bills.find((item) => item.bill_no === "2221581");
    if (explainerBill) used.add(explainerBill.bill_id);
    const explainer = { key: "family-deduction", date: incomeTaxFamilyDeductionBriefing.date, article: { href: `/briefings/${incomeTaxFamilyDeductionBriefing.slug}`, label: ko ? "법안 설명 기사" : "BILL EXPLAINER", title: ko ? incomeTaxFamilyDeductionBriefing.title : incomeTaxFamilyDeductionTranslation.title, summary: ko ? incomeTaxFamilyDeductionBriefing.summary : incomeTaxFamilyDeductionTranslation.summary, image: incomeTaxFamilyDeductionBriefing.images?.[0]?.src, alt: ko ? incomeTaxFamilyDeductionBriefing.images?.[0]?.alt : incomeTaxFamilyDeductionTranslation.images?.[0]?.alt, date: incomeTaxFamilyDeductionBriefing.date }, record: explainerBill ? { href: sourceUrl(explainerBill) || `/monitoring/legislation/${explainerBill.slug}`, external: Boolean(sourceUrl(explainerBill)), detailHref: `/monitoring/legislation/${explainerBill.slug}`, detailLabel: ko ? "법안 쉽게 읽기" : "Read bill explainer", label: ko ? "법안 원문 · 의안 2221581" : "BILL SOURCE · 2221581", title: ko ? explainerBill.title : explainerBill.analysis?.title_en || explainerBill.title, summary: ko ? explainerBill.public_summary_ko || explainerBill.analysis?.summary_ko || explainerBill.official_summary || "국회 원문에서 개정안 내용을 확인하세요." : explainerBill.analysis?.official_rationale_en || explainerBill.public_summary_en || "Read the official proposal.", date: explainerBill.proposed_date || undefined } : { href: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221581/detailRP", external: true, label: ko ? "법안 원문 · 의안 2221581" : "BILL SOURCE · 2221581", title: ko ? "소득세법 일부개정법률안" : "Income Tax Act amendment", summary: ko ? "가족 기본공제 소득요건에 관한 제안 내용을 국회 공개 자료에서 확인하세요." : "Read the proposal on the family deduction income threshold.", date: incomeTaxFamilyDeductionBriefing.date } };
    const remaining: Array<{ key: string; date: string; article?: WatchSide; record: WatchSide }> = bills.filter((bill) => !used.has(bill.bill_id) && bill.editorial_image?.status === "ready" && bill.editorial_image.src && bill.editorial_image.verified_at).map((bill) => ({
      key: bill.bill_id,
      date: bill.published_at || bill.proposed_date || "",
      article: {
        href: `/monitoring/legislation/${bill.slug}`,
        label: ko ? "쉽게 읽는 법안" : "BILL EXPLAINER",
        title: ko ? bill.title : bill.analysis?.title_en || bill.title,
        summary: ko ? bill.public_summary_ko || bill.analysis?.summary_ko || bill.official_summary || "제안 내용과 시민에게 생길 변화를 살펴봅니다." : bill.public_summary_en || bill.analysis?.summary_en || "Explore the proposal and its possible effects.",
        image: bill.editorial_image!.src,
        alt: (ko ? bill.editorial_image!.alt_ko : bill.editorial_image!.alt_en) || bill.title,
        date: bill.published_at?.split("T")[0] || bill.proposed_date || undefined,
      },
      record: {
        href: sourceUrl(bill) || `/monitoring/legislation/${bill.slug}`,
        external: Boolean(sourceUrl(bill)),
        label: ko ? `법안 원문 · 의안 ${bill.bill_no || ""}` : `BILL SOURCE · ${bill.bill_no || ""}`,
        title: ko ? bill.title : bill.analysis?.title_en || bill.title,
        summary: ko ? bill.official_summary || "국회 공개 제안 자료를 확인하세요." : bill.analysis?.official_rationale_en || "Read the official proposal.",
        date: bill.proposed_date || undefined,
      },
    }));
    return [...paired, supervisor, explainer, ...remaining].sort((a, b) => b.date.localeCompare(a.date));
  }, [bills, language, ko]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory"><div className="container-page grid gap-3 py-5 sm:py-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="section-kicker">LEGISLATIVE WATCH</span><h1 className="editorial-title mt-1.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "입법감시" : "Legislative Watch"}</h1></div><p className="max-w-2xl text-base leading-7 text-charcoal/65">{ko ? "새 법안의 내용과 시민 영향을 씨앗 기사와 나란히 살펴봅니다. 오른쪽에서 국회에 공개된 제안 자료와 원문을 확인할 수 있습니다." : "Read Seed Voice's analysis alongside the proposed bill. Open the official legislative record from the right-hand panel."}</p></div></header>
    <div className="container-page pt-6 sm:pt-8">
      {loading && <p className="py-5 text-sm text-charcoal/50">{ko ? "최신 입법 기록을 불러오는 중입니다." : "Loading current bill records…"}</p>}{error && <p className="py-5 text-sm text-red-700">{error}</p>}
      <div>{rows.map((row) => <WatchPairRow key={row.key} article={row.article} record={row.record} ko={ko} compactRecord/>)}</div>
      {!rows.length && !loading && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "아직 공개된 기록이 없습니다." : "No published records yet."}</p>}
    </div>
  </section>;
}
