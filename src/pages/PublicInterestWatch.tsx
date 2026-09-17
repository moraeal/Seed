import { ArrowRight, BookOpenText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MonitoringSubnav from "../components/MonitoringSubnav";
import { civicWatchCases, type LocalizedText } from "../data/publicInterestWatch";
import { useLanguage } from "../i18n";

export default function PublicInterestWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const t = (value: LocalizedText) => value[language];

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">PUBLIC-INTEREST WATCH</span><h1 className="editorial-title mt-2 text-[2.25rem] font-bold text-navy sm:text-[2.75rem]">{ko ? "공익감시" : "Public-Interest Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "시민의 이름으로 권한과 돈을 쓰는 기관과 사업을 기록합니다. 공공기관·공익기관·시민단체·보조사업의 예산, 의사결정, 설명 책임과 실제 결과를 공개자료로 확인합니다." : "We track institutions and programs that use power and money in the public interest—examining budgets, decisions, accountability and results through public records."}</p>
      </div>
    </header>

    <MonitoringSubnav />

    <div className="container-page py-10 sm:py-12">
      <div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div><span className="section-kicker">WATCH RECORDS</span><h2 className="mt-2 text-3xl font-extrabold text-navy">{ko ? "자료로 만든 감시기록" : "Watch records built from evidence"}</h2></div>
        <p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "공개자료, 확인할 질문, 기관의 답변과 정정 내역을 한 기록에 쌓습니다." : "Public records, open questions, institutional replies and corrections stay together."}</p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">{civicWatchCases.map((item) => <Link key={item.slug} to={`/monitoring/${item.slug}`} className="group flex min-h-[300px] flex-col border border-green-deep/15 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,76,58,.10)] sm:p-6"><div className="flex items-center justify-between gap-3"><span className="section-kicker">{t(item.eyebrow)}</span><span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{t(item.status)}</span></div><BookOpenText className="mt-5 text-gold" size={25}/><p className="mt-4 text-sm font-extrabold text-green-deep">{t(item.organization)}</p><h3 className="editorial-title mt-2 text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.575rem]">{t(item.title)}</h3><p className="mt-3 text-sm leading-6 text-charcoal/60">{t(item.summary)}</p><span className="mt-auto flex items-center gap-2 pt-5 text-sm font-extrabold text-green-deep">{ko ? "감시 기록과 원문 보기" : "View record and sources"}<ArrowRight size={15}/></span></Link>)}</div>

      <aside className="mt-12 grid gap-6 border-t-2 border-navy pt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div className="flex items-center gap-3 text-navy"><ShieldCheck className="text-gold"/><h2 className="text-2xl font-extrabold">{ko ? "공익감시가 지키는 원칙" : "The public-interest watch standard"}</h2></div><p className="text-sm leading-8 text-charcoal/65">{ko ? "진영이나 명성보다 사실과 시민이 치르는 비용을 봅니다. 확인된 사실, 아직 남은 질문, 씨앗의 판단을 구분하고 충분한 반론권과 정정 절차를 보장합니다. 선한 목적은 검증의 면허가 아닙니다." : "We examine facts and the cost borne by citizens, not reputation or partisan convenience. Confirmed facts, open questions and Seed Voice's judgment are kept separate, with a right of reply and correction. Good intentions are not immunity from scrutiny."}</p></aside>
    </div>
  </section>;
}
