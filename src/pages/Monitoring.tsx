import { ArrowRight, BarChart3, Eye, Landmark, Scale, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import { monitoringItems } from "../data/civicParticipation";
import { monitoringTranslations } from "../data/contentTranslations/staticPrograms";
import { publicInterestWatchCases, LocalizedText } from "../data/publicInterestWatch";
import { useLanguage } from "../i18n";

export default function Monitoring() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const items = monitoringItems.map((item, index) => ko ? item : { ...item, ...monitoringTranslations[index] });
  const t = (value: LocalizedText) => value[language];
  const criteria = [
    { icon: BarChart3, ko: "재정", en: "Finance", detailKo: "모금·운영비·이월금", detailEn: "Income, costs, carryovers" },
    { icon: Landmark, ko: "배분", en: "Allocation", detailKo: "선정 기준과 결과", detailEn: "Selection and outcomes" },
    { icon: Users, ko: "거버넌스", en: "Governance", detailKo: "이사회·이해충돌", detailEn: "Boards and conflicts" },
    { icon: Eye, ko: "시민접근", en: "Civic access", detailKo: "공개·질의·반론권", detailEn: "Disclosure and reply" },
  ];

  return (
    <section className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">PUBLIC-INTEREST WATCH</span>
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "공익감시" : "Public-Interest Watch"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko ? "좋은 뜻은 검증을 면제하는 이유가 아닙니다. 기부금과 공익자원이 시민의 신뢰에 맞게 모이고 쓰이는지, 공개자료와 기관의 답변을 근거로 기록합니다." : "Good intentions do not remove the need for scrutiny. We document whether donations and public-interest resources are raised and used in ways that merit civic trust."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-10">
        <section className="mb-9 grid gap-5 border-y border-green-deep/15 bg-white px-6 py-6 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-8">
          <div>
            <span className="section-kicker">WHY WE WATCH</span>
            <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "공익을 말하는 조직도 시민 앞에 설명할 책임이 있습니다" : "Public-interest organizations also owe citizens an explanation"}</h2>
          </div>
          <div className="space-y-3 text-sm leading-7 text-charcoal/68 sm:text-base">
            <p>{ko ? "공익기관은 정부기관이 아니더라도 기부금, 시민의 자원활동, 공공기금과 사회적 신뢰를 바탕으로 큰 영향력을 행사합니다. 어떤 문제를 공익으로 정의하고, 누구에게 자원을 배분하며, 어떤 목소리를 대표할지를 결정한다는 점에서 하나의 공적 권한을 갖습니다." : "Even when they are not government bodies, public-interest organizations wield significant influence through donations, volunteering, public funds and social trust. They exercise a form of public power by defining needs, allocating resources and deciding which voices to represent."}</p>
            <p>{ko ? "공익감시는 선한 의도를 의심하거나 단체를 공격하는 일이 아닙니다. 공개된 회계자료가 시민의 상식으로 이해되는지, 축적된 자산과 조직의 권한이 설립 목적에 맞게 사용되는지, 현장의 시민이 의사결정에 참여할 수 있는지를 계속 확인하는 신뢰의 장치입니다." : "Public-interest watch is not an attack on good intentions. It is a trust mechanism: testing whether accounts are understandable, assets and authority serve the mission, and citizens at the front line can participate in decisions."}</p>
            <p>{ko ? "씨드는 확인된 사실, 추가로 확인할 질문, 제도 개선 제안을 구분합니다. 기관의 명성이나 정치적 성향에 따라 잣대를 바꾸지 않고, 충분한 반론권과 정정 절차를 보장하면서 시민이 원문을 보고 직접 판단할 수 있는 기록을 쌓습니다." : "SEED separates confirmed facts, open questions and reform proposals. We apply the same standard regardless of reputation or politics, protect the right of reply and correction, and let citizens inspect primary records and judge for themselves."}</p>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="section-kicker">FOCUS WATCH</span><h2 className="mt-2 text-3xl font-extrabold text-navy">{ko ? "기부·공익기관 감시 기록" : "Giving and public-interest institutions"}</h2></div>
            <p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "비난이 아니라 더 나은 신뢰를 위한 공개 질문입니다." : "Public questions for stronger trust—not denunciation."}</p>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {publicInterestWatchCases.map((item) => (
              <Link key={item.slug} to={`/monitoring/${item.slug}`} className="group flex min-h-[300px] flex-col border border-green-deep/15 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,76,58,.10)] sm:p-6">
                <div className="flex items-center justify-between gap-3"><span className="section-kicker">{t(item.eyebrow)}</span><span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{t(item.status)}</span></div>
                <Scale className="mt-5 text-gold" size={25}/>
                <p className="mt-4 text-sm font-extrabold text-green-deep">{t(item.organization)}</p>
                <h3 className="editorial-title mt-2 text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.575rem]">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/60">{t(item.summary)}</p>
                <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-extrabold text-green-deep">{ko ? "감시 기록과 원문 보기" : "View record and sources"}<ArrowRight size={15}/></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map(({ icon: Icon, ...criterion }) => <div key={criterion.ko} className="border border-green-deep/10 bg-ivory p-5"><Icon className="text-gold" size={20}/><strong className="mt-4 block text-sm text-navy">{ko ? criterion.ko : criterion.en}</strong><span className="mt-1 block text-xs text-charcoal/45">{ko ? criterion.detailKo : criterion.detailEn}</span></div>)}
        </section>

        <section className="mt-16">
          <div className="border-b border-green-deep/12 pb-4"><span className="section-kicker">ONGOING WATCH</span><h2 className="mt-2 text-2xl font-extrabold text-navy">{ko ? "함께 추적하는 공공권력 의제" : "Other public-power records"}</h2></div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <Link key={item.title} to={item.link} className="group flex min-h-[290px] flex-col border border-green-deep/15 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,76,58,.10)]">
              <div className="flex items-center justify-between gap-3">
                <span className="section-kicker">{item.tag}</span>
                <span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{item.status}</span>
              </div>
              <Eye className="mt-8 text-gold" size={28} />
              <h2 className="editorial-title mt-6 text-2xl font-bold leading-snug text-navy group-hover:text-green-mid">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.summary}</p>
              <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-extrabold text-green-deep">{ko ? "감시 기록 보기" : "View watch record"}<ArrowRight size={15} /></span>
            </Link>
          ))}
          </div>
        </section>

        <aside className="mt-12 grid gap-6 border-t-2 border-navy pt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="flex items-center gap-3 text-navy"><ShieldCheck className="text-gold"/><h2 className="text-2xl font-extrabold">{ko ? "씨드의 감시 원칙" : "SEED's Monitoring Principle"}</h2></div>
          <p className="text-sm leading-8 text-charcoal/65">{ko ? "진영이나 명성보다 사실과 공익자원의 크기를 봅니다. 확인된 사실, 추가 확인이 필요한 질문, 씨드의 제안을 분리하고 기관의 반론권과 정정 절차를 보장합니다. 감시는 낙인이 아니라 시민이 판단할 수 있게 만드는 공공 기록입니다." : "We judge facts and the scale of public-interest resources, not reputation or partisan convenience. Confirmed facts, open questions and SEED proposals are separated, with a right of reply and correction. Watch records help citizens judge; they do not brand institutions."}</p>
        </aside>

        <div className="mx-auto max-w-4xl"><CommentSection postSlug="monitoring" /></div>
      </div>
    </section>
  );
}
