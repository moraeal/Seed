import { futureFundControlArticle } from "../data/futureFundControlArticle";
import { useMemo } from "react";
import WatchPairRow from "../components/WatchPairRow";
import { taxCommentaries } from "../data/taxCommentaries";
import { taxPolicies } from "../data/taxWatch";
import { monthlyRentCreditExplainer } from "../data/monthlyRentCreditExplainer";
import { monthlyRentCreditExplainerTranslation } from "../data/contentTranslations/briefingMonthlyRentCredit";
import { incomeTaxFamilyDeductionBriefing } from "../data/incomeTaxFamilyDeductionBriefing";
import { incomeTaxFamilyDeductionTranslation } from "../data/contentTranslations/briefingIncomeTaxFamilyDeduction";
import { useLanguage } from "../i18n";

export default function TaxWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const rows = useMemo(() => {
    const commentary = new Map(taxCommentaries.map((item) => [item.relatedPolicySlug, item]));
    const policies = taxPolicies.map((policy) => {
      const article = commentary.get(policy.slug);
      const edition = article?.editions[language];
      const official = policy.sources.find((source) => /\.go\.kr|assembly\.go\.kr|lawmaking\.go\.kr|law\.go\.kr|^www\.lh\.or\.kr$/.test(new URL(source.url).hostname));
      return { key: policy.slug, date: policy.checkedAt, article: article && edition ? { href: `/monitoring/tax/commentary/${article.slug}`, label: ko ? "세금 논평" : "TAX COMMENTARY", title: edition.title, summary: edition.summary, image: article.heroSrc, alt: edition.heroAlt, date: article.date } : undefined, record: { href: official?.url || `/monitoring/tax/${policy.slug}`, external: Boolean(official), detailHref: `/monitoring/tax/${policy.slug}`, detailLabel: ko ? "세금정책 쉽게 읽기" : "Read policy explainer", label: ko ? "세금정책 원문" : "TAX POLICY SOURCE", title: policy.title[language], summary: policy.summary[language], image: policy.heroImage[language], alt: policy.heroImage.alt[language], date: policy.checkedAt } };
    });
    const standaloneCommentaries = taxCommentaries.filter((article) => !taxPolicies.some((policy) => policy.slug === article.relatedPolicySlug)).map((article) => {
      const edition = article.editions[language];
      const source = article.sources[0];
      return { key: article.slug, date: article.date, article: { href: `/monitoring/tax/commentary/${article.slug}`, label: ko ? "세금 논평" : "TAX COMMENTARY", title: edition.title, summary: edition.summary, image: article.heroSrc, alt: edition.heroAlt, date: article.date }, record: { href: source.url, external: true, label: ko ? "관련 원문 자료" : "SOURCE DOCUMENT", title: source.label[language], summary: "", date: article.date } };
    });
    const rentExplainer = { key: "rent-explainer", date: monthlyRentCreditExplainer.date, article: { href: `/briefings/${monthlyRentCreditExplainer.slug}`, label: ko ? "세금 해설과 논평" : "EXPLAINER AND OPINION", title: ko ? monthlyRentCreditExplainer.title : monthlyRentCreditExplainerTranslation.title, summary: ko ? monthlyRentCreditExplainer.summary : monthlyRentCreditExplainerTranslation.summary, image: monthlyRentCreditExplainer.images?.[0]?.src, alt: ko ? monthlyRentCreditExplainer.images?.[0]?.alt : monthlyRentCreditExplainerTranslation.images?.[0]?.alt, date: monthlyRentCreditExplainer.date }, record: { href: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221532/detailRP?yType=I", external: true, label: ko ? "관련 법안 원문 · 의안 2221532" : "BILL SOURCE · 2221532", title: ko ? "월세 공제 대상·한도 확대안" : "Rent credit cap proposal", summary: ko ? "별도 이월안은 의안 2221529호입니다." : "The separate carryforward proposal is Bill 2221529.", date: monthlyRentCreditExplainer.date } };
    const family = { key: "family-deduction", date: incomeTaxFamilyDeductionBriefing.date, article: { href: `/briefings/${incomeTaxFamilyDeductionBriefing.slug}`, label: ko ? "세금정책 설명 기사" : "TAX EXPLAINER", title: ko ? incomeTaxFamilyDeductionBriefing.title : incomeTaxFamilyDeductionTranslation.title, summary: ko ? incomeTaxFamilyDeductionBriefing.summary : incomeTaxFamilyDeductionTranslation.summary, image: incomeTaxFamilyDeductionBriefing.images?.[0]?.src, alt: ko ? incomeTaxFamilyDeductionBriefing.images?.[0]?.alt : incomeTaxFamilyDeductionTranslation.images?.[0]?.alt, date: incomeTaxFamilyDeductionBriefing.date }, record: { href: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221581/detailRP", external: true, label: ko ? "관련 법안 원문 · 의안 2221581" : "RELATED BILL SOURCE · 2221581", title: ko ? "소득세법 일부개정법률안" : "Income Tax Act amendment", summary: ko ? "가족 기본공제 소득요건과 관련된 개정안의 제안 내용을 확인하세요." : "Read the proposed change to the family deduction income threshold.", date: incomeTaxFamilyDeductionBriefing.date } };
    const fundEdition = futureFundControlArticle.editions[language];
    const fund = { key: futureFundControlArticle.slug, date: futureFundControlArticle.date, article: { href: `/monitoring/legislation/commentary/${futureFundControlArticle.slug}`, label: ko ? "입법·세금감시 기사" : "LEGISLATIVE & TAX WATCH", title: fundEdition.title, summary: fundEdition.summary, image: futureFundControlArticle.heroSrc, alt: fundEdition.heroAlt, date: futureFundControlArticle.date }, record: { href: futureFundControlArticle.sources[0].url, external: true, label: ko ? "법안 원문 · 의안 2221056" : "BILL SOURCE · 2221056", title: ko ? "국가재정법 일부개정법률안" : "National Finance Act amendment", summary: ko ? "미래대응기금 변경·전출 특례에 관한 정부 제출안입니다." : "Government proposal on fund adjustments and transfers.", date: "2026-09-03" } };
    return [...policies, ...standaloneCommentaries, rentExplainer, family, fund].sort((a, b) => b.date.localeCompare(a.date));
  }, [language, ko]);

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory"><div className="container-page grid gap-3 py-5 sm:py-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="section-kicker">TAX & LEVY WATCH</span><h1 className="editorial-title mt-1.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "세금감시" : "Tax Watch"}</h1></div><p className="max-w-2xl text-base leading-7 text-charcoal/65">{ko ? "시민의 부담과 기업 활동에 영향을 주는 세금정책을 씨앗의 논평과 나란히 살펴봅니다. 오른쪽에서 정부·국회의 공식 자료로 이어집니다." : "Read Seed Voice's commentary alongside tax policy summaries, with official government and legislative sources on the right."}</p></div></header>
    <div className="container-page pt-6 sm:pt-8">
      <div>{rows.map((row) => <WatchPairRow key={row.key} article={row.article} record={row.record} ko={ko} compactRecord/>)}</div>
      {!rows.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "아직 공개된 기록이 없습니다." : "No published records yet."}</p>}
    </div>
  </section>;
}
