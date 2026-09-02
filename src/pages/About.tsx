import {
  ArrowRight,
  CheckCircle2,
  Eye,
  FileText,
  Gavel,
  Landmark,
  Lightbulb,
  Mail,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const en = language === "en";

  const profile = en
    ? [
        ["Name", "SEED Civic Partners"],
        ["Identity", "Independent civic platform and journal"],
        ["Core work", "Civic briefings · Public watch · Citizen proposals"],
        ["Perspective", "Freedom · Rule of law · Open markets · Civic responsibility"],
        ["Based in", "South Korea"],
      ]
    : [
        ["단체명", "씨드시민파트너스"],
        ["성격", "독립 시민 플랫폼·시민저널"],
        ["핵심 활동", "시민브리핑 · 공익감시 · 시민제안"],
        ["판단 기준", "자유 · 법치 · 시장 자율 · 시민의 책임"],
        ["활동 기반", "대한민국"],
      ];

  const work = en
    ? [
        [FileText, "Explain", "We separate verified facts from claims and explain complex public issues in language citizens can use."],
        [Eye, "Watch", "We follow how public power, budgets, and institutions operate—and whether promised changes actually happen."],
        [Lightbulb, "Propose", "We turn civic concerns into practical proposals rather than ending with criticism alone."],
      ]
    : [
        [FileText, "설명합니다", "확인된 사실과 주장을 구분하고, 복잡한 공공 이슈를 시민이 판단할 수 있는 언어로 풀어냅니다."],
        [Eye, "감시합니다", "공적 권한과 재정, 제도가 어떻게 작동하는지 살피고 약속한 변화가 실제로 이어지는지 추적합니다."],
        [Lightbulb, "제안합니다", "비판에서 멈추지 않고 시민의 문제의식을 근거와 실행 가능성을 갖춘 대안으로 발전시킵니다."],
      ];

  const values = en
    ? [
        [Scale, "Freedom", "Public institutions should begin with the dignity, liberty, and choices of the individual."],
        [Gavel, "Rule of law", "Power must remain restrained by law, fair procedure, and independent institutions."],
        [Landmark, "Open markets", "Enterprise and private initiative widen opportunity when rules are fair and transparent."],
        [ShieldCheck, "Civic responsibility", "Freedom lasts when citizens respect facts, institutions, and the freedom of others."],
      ]
    : [
        [Scale, "자유", "정책과 제도는 시민 한 사람의 존엄과 자유, 선택에서 출발해야 합니다."],
        [Gavel, "법치", "권력은 법과 공정한 절차, 독립된 제도에 의해 제한되어야 합니다."],
        [Landmark, "시장 자율", "공정하고 투명한 규칙 안에서 기업과 민간의 자율이 기회와 번영을 넓힙니다."],
        [ShieldCheck, "시민의 책임", "자유는 사실과 제도, 다른 시민의 자유를 존중하는 책임과 함께 지속됩니다."],
      ];

  const principles = en
    ? [
        "We are not a campaign organization or an affiliate of a political party.",
        "We apply the same standards to public power regardless of who governs.",
        "We distinguish facts, interpretation, and proposals so citizens can examine our reasoning.",
      ]
    : [
        "어떤 정당의 선거조직이나 보조조직으로 활동하지 않습니다.",
        "누가 집권하든 같은 원칙과 기준으로 공적 권력을 살핍니다.",
        "사실과 해석, 제안을 구분해 시민이 판단 과정을 다시 확인할 수 있게 합니다.",
      ];

  return (
    <div className="bg-paper">
      <section className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.18fr_.82fr] lg:items-center lg:py-24">
          <div>
            <span className="section-kicker">ABOUT SEED CIVIC PARTNERS</span>
            <h1 className="editorial-title mt-5 max-w-4xl text-4xl font-bold leading-[1.08] text-navy sm:text-6xl">
              {en ? "We help citizens understand, watch, and change public life." : "시민이 공공의 문제를 이해하고, 감시하고, 바꾸는 힘을 키웁니다."}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/68 sm:text-lg sm:leading-9">
              {en
                ? "SEED Civic Partners is an independent civic platform and journal in South Korea. We translate complex public issues into clear civic language, examine power and institutions with evidence, and develop constructive alternatives with citizens."
                : "씨드시민파트너스는 복잡한 공공 이슈를 시민의 언어로 설명하고, 권력과 공익기관을 근거로 살피며, 시민과 함께 대안을 만드는 독립 시민 플랫폼이자 시민저널입니다."}
            </p>
          </div>

          <aside className="border-t-4 border-green-deep bg-white px-6 py-7 shadow-[0_22px_60px_rgba(23,76,58,.09)] sm:px-8 sm:py-8" aria-label={en ? "Organization profile" : "기관 개요"}>
            <div className="flex items-center gap-3 border-b border-green-deep/12 pb-5">
              <Sprout className="text-gold" size={26}/>
              <div><p className="text-xs font-extrabold tracking-[.16em] text-green-deep">ORGANIZATION PROFILE</p><p className="mt-1 text-sm text-charcoal/45">{en ? "SEED at a glance" : "씨드 한눈에 보기"}</p></div>
            </div>
            <dl className="divide-y divide-green-deep/10">
              {profile.map(([label, value]) => (
                <div key={label} className="grid gap-1 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                  <dt className="text-xs font-extrabold text-green-deep/65">{label}</dt>
                  <dd className="text-sm font-semibold leading-6 text-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div>
            <span className="section-kicker">WHY WE EXIST</span>
            <h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {en ? "A public sphere where state and market remain accountable to people" : "국가와 시장이 사람을 위해 존재하도록 붙잡아주는 공공성의 자리"}
            </h2>
          </div>
          <div className="border-l-2 border-gold pl-6 sm:pl-8">
            <p className="text-base leading-8 text-charcoal/68">
              {en
                ? "Politics and administration have grown larger, yet citizens are too often reduced to voters, beneficiaries, or audiences. Civil society should be the place where citizens ask questions, test claims, watch institutions, and take responsibility for shared problems."
                : "정치와 행정의 규모는 커졌지만 시민은 여전히 유권자나 정책 수혜자, 정치의 관객으로 머무는 경우가 많습니다. 시민사회는 국가의 역할을 대신하는 곳도, 시장을 적대하는 곳도 아닙니다. 시민이 질문하고 사실을 확인하며 제도를 감시하고 공동의 문제에 책임지는 자리여야 합니다."}
            </p>
            <p className="mt-5 text-base font-semibold leading-8 text-navy">
              {en
                ? "SEED seeks to grow capable citizens and a strong civil society—not a larger state or another partisan organization."
                : "씨드는 더 큰 국가나 또 하나의 진영조직이 아니라, 스스로 판단하고 행동하는 시민과 강한 시민사회를 만들고자 합니다."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-green-deep/12 bg-[#F1F2EC] py-14 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="section-kicker">OUR WORK</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{en ? "What SEED does" : "씨드의 핵심 활동"}</h2></div>
            <p className="max-w-xl text-sm leading-7 text-charcoal/55">{en ? "These are SEED's organizational functions. Ways to participate are explained separately on the Partners page." : "아래는 씨드라는 단체가 수행하는 기능입니다. 개인의 참여 방식과 역할은 파트너스 페이지에서 별도로 안내합니다."}</p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {work.map(([Icon, title, description], index) => {
              const Component = Icon as typeof Eye;
              return (
                <article key={title as string} className="group border border-green-deep/12 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-mid/35 hover:bg-green-pale/45 hover:shadow-[0_18px_42px_rgba(23,76,58,.08)] sm:p-8">
                  <div className="flex items-center justify-between"><Component className="text-gold" size={28}/><span className="font-serif text-sm font-bold text-green-deep/30">0{index + 1}</span></div>
                  <h3 className="editorial-title mt-7 text-2xl font-bold text-navy">{title as string}</h3>
                  <p className="mt-4 text-base leading-8 text-charcoal/60">{description as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-14 text-white sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <span className="text-xs font-extrabold tracking-[.16em] text-gold-light">OUR STANDARD</span>
            <h2 className="editorial-title mt-4 text-3xl font-bold sm:text-4xl">{en ? "Clear in values, honest about facts" : "가치는 분명하게, 사실에는 정직하게"}</h2>
            <p className="mt-5 text-base leading-8 text-white/64">
              {en
                ? "SEED begins from a center-right civic perspective. Our test is not mechanical balance between left and right, but evidence, liberty, institutional restraint, and civic responsibility."
                : "씨드는 자유와 법치, 시장의 자율과 시민의 책임을 중시하는 중도보수 시민 관점에서 출발합니다. 판단의 기준은 좌우의 기계적 균형이 아니라 사실과 자유, 권력의 절제와 시민의 책임입니다."}
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {values.map(([Icon, title, description]) => {
              const Component = Icon as typeof Scale;
              return (
                <article key={title as string} className="bg-green-deep p-7 transition hover:bg-white/[.04]">
                  <Component className="text-gold" size={25}/>
                  <h3 className="mt-5 text-xl font-extrabold">{title as string}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{description as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="border-t-2 border-navy bg-white p-7 sm:p-9">
            <ShieldCheck className="text-gold" size={29}/>
            <h2 className="editorial-title mt-5 text-3xl font-bold text-navy">{en ? "Independence and accountability" : "독립성과 책임의 원칙"}</h2>
            <ul className="mt-6 grid gap-4">
              {principles.map((principle) => <li key={principle} className="flex gap-3 text-sm leading-7 text-charcoal/65"><CheckCircle2 className="mt-1 shrink-0 text-green-mid" size={18}/><span>{principle}</span></li>)}
            </ul>
          </article>

          <article className="border-t-2 border-gold bg-ivory p-7 sm:p-9">
            <Users className="text-green-deep" size={29}/>
            <p className="mt-5 text-xs font-extrabold tracking-[.16em] text-green-deep">FOUNDER &amp; PRESIDENT</p>
            <h2 className="editorial-title mt-2 text-3xl font-bold text-navy">{en ? "Park Kyung-seuk" : "대표 박경석"}</h2>
            <p className="mt-5 text-sm leading-7 text-charcoal/62">
              {en
                ? "Park Kyung-seuk has worked across civil society, public institutions, and corporate sustainability. His experience includes serving as an external cooperation officer for the Presidential Committee on Social Cohesion, secretary-general of the Federation of Civil Society Organizations, an expert member of the Presidential Commission on Sustainable Development, president of the nonprofit KkumePume, an executive at a public enterprise, and a public-policy advisor to local governments."
                : "시민사회와 공공기관, 기업의 사회책임 현장을 두루 경험했습니다. 대통령소속 사회통합위원회 대외협력관, 범시민사회단체연합 사무총장, 대통령자문 지속가능발전위원회 전문위원, 사단법인 꿈에품에 대표, 공기업 임원과 지방정부 정책자문 활동 등을 거쳤습니다."}
            </p>
            <a href="mailto:seedcivicpartners@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep"><Mail size={16}/>seedcivicpartners@gmail.com</a>
          </article>
        </div>
      </section>

      <section className="border-t border-green-deep/12 bg-ivory py-12 sm:py-16">
        <div className="container-page flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="section-kicker">PARTICIPATE</span>
            <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{en ? "Want to build SEED with us?" : "씨드와 함께 기반을 만들고 싶으신가요?"}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/58">{en ? "The Partners page explains the founding vision, partner roles, and application process." : "창립 취지와 파트너의 역할, 가입 신청은 파트너스 페이지에서 확인하실 수 있습니다."}</p>
          </div>
          <Link to="/partners" className="button-primary shrink-0">{en ? "Go to Partners" : "파트너스 페이지로 가기"}<ArrowRight size={16}/></Link>
        </div>
      </section>
    </div>
  );
}
