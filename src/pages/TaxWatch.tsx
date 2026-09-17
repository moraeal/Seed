import { ArrowRight, Building2, CalendarClock, CircleDollarSign, FileCheck2, Landmark, ReceiptText, Scale, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MonitoringSubnav from "../components/MonitoringSubnav";
import { useLanguage } from "../i18n";

const sources = [
  { icon: Landmark, ko: "정부 세제 발표", en: "Government tax policy", detailKo: "기획재정부의 세제개편안·보도자료와 입법예고", detailEn: "Tax reform plans, releases and legislative notices" },
  { icon: Scale, ko: "국회 심사", en: "National Assembly review", detailKo: "세법 개정안의 발의·심사·의결과 달라진 조문", detailEn: "Bills, review, votes and changing provisions" },
  { icon: FileCheck2, ko: "집행 기준", en: "Implementation rules", detailKo: "시행령·고시·국세청 안내로 확인되는 실제 적용", detailEn: "Actual application in decrees, notices and NTS guidance" },
];

const questions = [
  { icon: CircleDollarSign, ko: "누가 더 내고, 누가 덜 내는가", en: "Who pays more or less?", detailKo: "직장인·자영업자·중소기업·투자자·주택보유자에게 미칠 차이를 살핍니다.", detailEn: "We identify different effects on workers, small businesses, investors and property owners." },
  { icon: ReceiptText, ko: "부담은 무엇이 어떻게 바뀌는가", en: "What burden changes?", detailKo: "세율·공제·과세 기준·신고 의무와 함께 부담금 등 준조세도 구분해 기록합니다.", detailEn: "Rates, deductions, thresholds, filing duties and levy-like charges are tracked separately." },
  { icon: CalendarClock, ko: "언제 확정되고 실제 적용되는가", en: "When does it take effect?", detailKo: "발표와 확정, 시행일을 구분하고 소급 적용 여부와 남은 절차를 표시합니다.", detailEn: "Announcement, enactment and effective dates are separated, including retroactivity and remaining steps." },
  { icon: ShieldCheck, ko: "정부의 권한과 책임은 커지는가", en: "Does discretion expand?", detailKo: "감면·예외·조사·징수 과정에서 행정재량과 시민의 예측 가능성이 어떻게 달라지는지 봅니다.", detailEn: "We examine discretion, exceptions, audits, collection and predictability for citizens." },
];

export default function TaxWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">TAX & LEVY WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "세금감시" : "Tax Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "세금은 법안 하나로 끝나지 않습니다. 정부의 발표와 세법·시행령, 국세청의 집행 기준이 시민과 기업의 실제 부담을 어떻게 바꾸는지 한 정책 기록으로 이어서 살핍니다. 공식 자료와 씨앗의 판단은 분명히 구분합니다." : "Taxes do not end with a bill. We follow how government announcements, tax laws, decrees and enforcement rules change the real burden on citizens and businesses, keeping official records separate from Seed Voice's judgment."}</p>
      </div>
    </header>
    <MonitoringSubnav />

    <div className="container-page py-9 sm:py-11">
      <section className="border-y-2 border-navy bg-green-pale/45 p-6 sm:p-8" aria-labelledby="tax-method-title">
        <div className="max-w-3xl"><span className="section-kicker">ONE POLICY, ONE RECORD</span><h2 id="tax-method-title" className="editorial-title mt-2 text-3xl font-bold text-navy">{ko ? "발표부터 실제 부담까지, 한 정책으로 추적합니다" : "One policy record, from announcement to burden"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/65">{ko ? "같은 세제 변화가 정부 발표·국회 법안·시행령·국세청 안내로 나뉘어 흩어지지 않도록 하나의 기록으로 묶습니다. 입법 절차는 입법감시와 연결하고, 여기서는 시민과 기업에 미치는 실제 변화와 시행 시점을 중심으로 읽습니다." : "A single record connects an announcement, bill, decree and tax guidance. Legislative procedure links to Legislative Watch; this page centers on practical effects and timing."}</p></div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">{sources.map(({ icon: Icon, ko: titleKo, en: titleEn, detailKo, detailEn }, index) => <article key={titleKo} className="bg-white p-5"><span className="text-[11px] font-black tracking-[.16em] text-gold-dark">STEP {String(index + 1).padStart(2, "0")}</span><Icon className="mt-5 text-green-deep" size={24}/><h3 className="mt-3 text-lg font-extrabold text-navy">{ko ? titleKo : titleEn}</h3><p className="mt-2 text-sm leading-6 text-charcoal/60">{ko ? detailKo : detailEn}</p></article>)}</div>
      </section>

      <section className="mt-14" aria-labelledby="tax-questions-title">
        <div className="border-b-2 border-navy pb-5"><span className="section-kicker">SEED VOICE CHECKPOINTS</span><h2 id="tax-questions-title" className="editorial-title mt-2 text-3xl font-bold text-navy">{ko ? "세금정책을 이렇게 확인합니다" : "How we read tax policy"}</h2></div>
        <div className="grid border-b border-green-deep/15 md:grid-cols-2">{questions.map(({ icon: Icon, ko: titleKo, en: titleEn, detailKo, detailEn }) => <article key={titleKo} className="border-b border-green-deep/15 p-6 last:border-b-0 md:border-b-0 md:border-r md:[&:nth-child(even)]:border-r-0 sm:p-7"><Icon className="text-gold-dark" size={25}/><h3 className="editorial-title mt-4 text-xl font-bold text-navy">{ko ? titleKo : titleEn}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-charcoal/60">{ko ? detailKo : detailEn}</p></article>)}</div>
      </section>

      <section className="mt-14 border-2 border-green-deep bg-ivory px-6 py-10 text-center sm:px-10" aria-labelledby="tax-records-title">
        <span className="section-kicker">APPROVED RECORDS</span><h2 id="tax-records-title" className="editorial-title mt-2 text-2xl font-bold text-navy">{ko ? "공개할 세금정책 기록을 준비하고 있습니다" : "Approved tax policy records are being prepared"}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-charcoal/60">{ko ? "공식 원문을 수집한 뒤, 세 부담 변화와 시행 시점·불확실한 부분을 검토해 대표 승인 후 공개합니다. 자동 게시와 자동 알림 발송은 하지 않습니다." : "We collect official source material, review burden changes, timing and uncertainty, then publish only after editorial approval. There is no automatic publication or notification."}</p>
        <Link to="/monitoring/legislation" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "입법감시에서 조세 법안 보기" : "View tax bills in Legislative Watch"}<ArrowRight size={15}/></Link>
      </section>
    </div>
  </section>;
}
