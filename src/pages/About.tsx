import { ArrowRight, Eye, FileText, Gavel, Landmark, Lightbulb, Scale, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AUDITION_URL } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const en = language === "en";

  const functions = en
    ? [
        [Eye, "Civic Watch", "We track how public power, budgets, and institutions change over time. Monitoring does not end with a single criticism."],
        [FileText, "Citizen Briefings", "We turn complex political and social issues into clear facts, visual explanations, and a distinct civic judgment."],
        [Lightbulb, "Citizen Proposals", "We help citizens move from criticism to concrete, testable proposals that can improve institutions and everyday life."],
      ]
    : [
        [Eye, "시민감시", "권력과 예산, 제도가 실제로 어떻게 움직이는지 계속 추적합니다. 한 번의 비판으로 끝내지 않고 후속 결과까지 기록합니다."],
        [FileText, "시민브리핑", "복잡한 정치·사회 이슈를 사실, 그림, 도표, 씨드의 판단으로 정리해 평범한 시민도 한눈에 이해할 수 있게 만듭니다."],
        [Lightbulb, "시민제안", "비판에서 멈추지 않고 무엇을 어떻게 바꿀 것인지 시민의 언어로 제안하고, 실행 가능한 공공의제로 발전시킵니다."],
      ];

  const values = en
    ? [
        [Scale, "Freedom", "Individual freedom and choice should remain the starting point of public policy."],
        [Gavel, "Rule of Law", "Power must be restrained by law, procedure, and independent institutions."],
        [Landmark, "Open Markets", "Markets, enterprise, and private initiative widen opportunity when rules are fair."],
        [ShieldCheck, "Civic Responsibility", "Freedom is sustained by citizens who accept responsibility for facts, institutions, and one another."],
      ]
    : [
        [Scale, "자유", "시민의 선택과 자유를 정책과 제도의 출발점으로 봅니다."],
        [Gavel, "법치", "권력은 법과 절차, 독립된 제도에 의해 제한되어야 합니다."],
        [Landmark, "시장 자율", "공정한 규칙 안에서 기업과 시장, 민간의 자율성이 기회와 번영을 넓힌다고 봅니다."],
        [ShieldCheck, "시민의 책임", "자유는 사실과 제도, 타인의 자유를 존중하는 책임과 함께 지켜집니다."],
      ];

  const process = en
    ? ["Check the facts", "Explain the structure", "Watch the exercise of power", "Turn findings into proposals"]
    : ["사실을 확인합니다", "구조를 쉽게 설명합니다", "권력의 움직임을 감시합니다", "문제를 시민제안으로 바꿉니다"];

  return (
    <>
      <section className="border-b border-green-deep/15 bg-ivory py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span className="section-kicker">ABOUT SEED CIVIC PARTNERS</span>
            <h1 className="editorial-title mt-5 max-w-4xl text-4xl font-bold leading-[1.12] text-navy sm:text-6xl">
              {en ? "Citizens should not be the audience of politics. They should be its watchdogs and authors." : "시민은 정치의 관객이 아니라, 권력을 감시하고 변화를 제안하는 주체여야 합니다."}
            </h1>
          </div>
          <div>
            <p className="text-base leading-8 text-charcoal/68">
              {en
                ? "SEED Civic Partners is an independent civic platform grounded in freedom, the rule of law, open markets, and civic responsibility. We make public issues easier to understand, challenge distortions and abuses of power, and help citizens build practical alternatives."
                : "씨드시민파트너스는 자유, 법치, 시장 자율, 책임 있는 시민사회를 중시하는 독립 시민 플랫폼입니다. 복잡한 공공 이슈를 쉽게 설명하고, 왜곡과 권력 남용을 비판하며, 시민이 직접 대안을 제안할 수 있는 언어와 도구를 만듭니다."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/briefings" className="button-primary">{en ? "Read Briefings" : "시민브리핑 보기"}<ArrowRight size={16}/></Link>
              <Link to="/monitoring" className="button-secondary">{en ? "Civic Watch" : "시민감시 보기"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page">
          <span className="section-kicker">WHAT WE DO</span>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{en ? "Three things SEED does" : "씨드가 하는 세 가지 일"}</h2>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {functions.map(([Icon, title, description]) => {
              const Component = Icon as typeof Eye;
              return (
                <article key={title as string} className="border border-green-deep/12 bg-white p-7 sm:p-8">
                  <Component className="text-gold" size={28}/>
                  <h3 className="editorial-title mt-6 text-2xl font-bold text-navy">{title as string}</h3>
                  <p className="mt-4 text-sm leading-7 text-charcoal/60">{description as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-14 text-white sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="text-[10px] font-extrabold tracking-[.18em] text-gold-light">OUR POINT OF VIEW</span>
            <h2 className="editorial-title mt-4 text-3xl font-bold sm:text-4xl">{en ? "Clear in values, honest about facts" : "가치는 분명하게, 사실에는 정직하게"}</h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
              {en
                ? "SEED starts from a center-right civic perspective. That does not mean standing mechanically in the middle. We challenge progressive arguments when they distort facts or weaken freedom and institutional restraint, while correcting exaggerations from our own side when the evidence does not support them."
                : "씨드는 분명한 보수적 시민 관점에서 출발합니다. 그러나 ‘중도’를 양쪽의 말을 반씩 섞는 태도로 이해하지 않습니다. 진보 진영의 과장·왜곡과 자유·법치를 약화시키는 논리는 적극적으로 비판하되, 우리 쪽 주장도 사실보다 앞서가면 바로잡습니다. 균형의 기준은 좌우가 아니라 사실과 책임입니다."}
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {values.map(([Icon, title, description]) => {
              const Component = Icon as typeof Scale;
              return (
                <article key={title as string} className="bg-green-deep p-7">
                  <Component className="text-gold" size={25}/>
                  <h3 className="mt-5 text-xl font-extrabold">{title as string}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{description as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F2EC] py-14 sm:py-20">
        <div className="container-page">
          <span className="section-kicker">HOW SEED WORKS</span>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{en ? "From facts to civic action" : "사실에서 시민행동까지"}</h2>
          <div className="mt-9 grid border-y border-green-deep/15 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="border-green-deep/15 px-1 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                <span className="font-serif text-sm font-bold text-gold">0{index + 1}</span>
                <p className="mt-4 text-lg font-extrabold leading-7 text-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-page grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="section-kicker">INDEPENDENCE</span>
            <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{en ? "Independent from parties, accountable to citizens" : "정당으로부터 독립하고, 시민에게 책임집니다"}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-charcoal/62">
              {en
                ? "SEED is not a campaign organization or a party affiliate. We judge public power by the same principles regardless of who governs, and we aim to make our evidence, reasoning, and proposals open to public scrutiny."
                : "씨드는 어떤 정당의 선거조직이나 보조조직이 아닙니다. 누가 집권하든 같은 원칙으로 권력을 보고, 근거와 판단과 제안을 시민이 다시 확인할 수 있도록 공개하는 것을 지향합니다."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/proposals" className="button-secondary">{en ? "See Proposals" : "시민제안 보기"}</Link>
            <a href={AUDITION_URL} target="_blank" rel="noreferrer" className="button-primary">{en ? "Submit a Proposal" : "시민제안 참여하기"}<ArrowRight size={16}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
