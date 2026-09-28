import { FileSearch } from "lucide-react";
import { useMemo, useState } from "react";
import WatchPairRow from "../components/WatchPairRow";
import { taxCommentaries } from "../data/taxCommentaries";
import { taxPolicies } from "../data/taxWatch";
import { incomeTaxFamilyDeductionBriefing } from "../data/incomeTaxFamilyDeductionBriefing";
import { incomeTaxFamilyDeductionTranslation } from "../data/contentTranslations/briefingIncomeTaxFamilyDeduction";
import { useLanguage } from "../i18n";

export default function TaxWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    const commentary = new Map(taxCommentaries.map((item) => [item.relatedPolicySlug, item]));
    const policies = taxPolicies.map((policy) => {
      const article = commentary.get(policy.slug);
      const edition = article?.editions[language];
      const official = policy.sources.find((source) => /\.go\.kr|assembly\.go\.kr|lawmaking\.go\.kr|law\.go\.kr/.test(new URL(source.url).hostname));
      return { key: policy.slug, date: policy.checkedAt, article: article && edition ? { href: `/monitoring/tax/commentary/${article.slug}`, label: ko ? "세금 논평" : "TAX COMMENTARY", title: edition.title, summary: edition.summary, image: article.heroSrc, alt: edition.heroAlt, date: article.date } : undefined, record: { href: official?.url || `/monitoring/tax/${policy.slug}`, external: Boolean(official), detailHref: `/monitoring/tax/${policy.slug}`, label: ko ? "세금정책 원문" : "TAX POLICY SOURCE", title: policy.title[language], summary: policy.summary[language], image: policy.heroImage[language], alt: policy.heroImage.alt[language], date: policy.checkedAt } };
    });
    const family = { key: "family-deduction", date: incomeTaxFamilyDeductionBriefing.date, article: { href: `/briefings/${incomeTaxFamilyDeductionBriefing.slug}`, label: ko ? "세금정책 설명 기사" : "TAX EXPLAINER", title: ko ? incomeTaxFamilyDeductionBriefing.title : incomeTaxFamilyDeductionTranslation.title, summary: ko ? incomeTaxFamilyDeductionBriefing.summary : incomeTaxFamilyDeductionTranslation.summary, image: incomeTaxFamilyDeductionBriefing.images?.[0]?.src, alt: ko ? incomeTaxFamilyDeductionBriefing.images?.[0]?.alt : incomeTaxFamilyDeductionTranslation.images?.[0]?.alt, date: incomeTaxFamilyDeductionBriefing.date }, record: { href: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221581/detailRP", external: true, label: ko ? "관련 법안 원문 · 의안 2221581" : "RELATED BILL SOURCE · 2221581", title: ko ? "소득세법 일부개정법률안" : "Income Tax Act amendment", summary: ko ? "가족 기본공제 소득요건과 관련된 개정안의 제안 내용을 확인하세요." : "Read the proposed change to the family deduction income threshold.", date: incomeTaxFamilyDeductionBriefing.date } };
    return [...policies, family].sort((a, b) => b.date.localeCompare(a.date));
  }, [language, ko]);
  const filtered = rows.filter((row) => !query.trim() || [row.article?.title, row.record.title, row.article?.summary, row.record.summary].some((value) => value?.toLowerCase().includes(query.trim().toLowerCase())));

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory"><div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="section-kicker">TAX & LEVY WATCH</span><h1 className="editorial-title mt-2 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "세금감시" : "Tax Watch"}</h1></div><p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "시민의 부담과 기업 활동에 영향을 주는 세금정책을 씨앗의 논평과 나란히 살펴봅니다. 오른쪽에서 정부·국회의 공식 자료로 이어집니다." : "Read Seed Voice's commentary alongside tax policy summaries, with official government and legislative sources on the right."}</p></div></header>
    <div className="container-page py-10 sm:py-12"><div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">TAX WATCH</span><h2 className="mt-2 text-3xl font-extrabold text-navy">{ko ? "세금감시 목록" : "Tax Watch"}</h2></div><p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "왼쪽은 씨앗의 기사, 오른쪽은 정책 요약과 공식 원문입니다." : "Seed Voice articles appear beside policy summaries and official sources."}</p></div>
      <label className="mt-6 flex items-center gap-3 border border-green-deep/15 bg-white px-4 py-3"><FileSearch size={18} className="text-charcoal/45"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ko ? "정책·기사 검색" : "Search policies and articles"} className="w-full bg-transparent text-sm outline-none"/></label>
      <div className="mt-3">{filtered.map((row) => <WatchPairRow key={row.key} article={row.article} record={row.record} ko={ko}/>)}</div>
      {!filtered.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "검색 결과가 없습니다." : "No matching records."}</p>}
    </div>
  </section>;
}
