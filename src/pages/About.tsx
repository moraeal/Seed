import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  FileCheck2,
  Landmark,
  MessageSquareQuote,
  Newspaper,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const ko = language === "ko";

  const sections = ko
    ? [
        [Newspaper, "씨드뉴스", "하루의 뉴스 가운데 시민이 반드시 알아야 할 사안을 골라, 확인된 사실과 아직 확인되지 않은 주장을 구분합니다."],
        [FileCheck2, "시민브리핑", "복잡한 정책과 제도 논쟁을 사실, 맥락, 쟁점, 지속해서 지켜볼 지점의 순서로 차분하게 설명합니다."],
        [MessageSquareQuote, "씨앗의 소리", "자유·법치·책임·시장 자율과 강한 시민사회의 관점에서 오늘의 사건을 해석하고 분명한 논지를 제시합니다."],
      ]
    : [
        [Newspaper, "SEED News", "We select public issues citizens need to understand and separate verified facts from claims that remain uncertain."],
        [FileCheck2, "Civic Briefings", "We explain complex policy and institutional debates through facts, context, points of dispute, and what citizens should keep watching."],
        [MessageSquareQuote, "Voice of the Seed", "We offer clear arguments grounded in freedom, the rule of law, civic responsibility, open markets, and a strong civil society."],
      ];

  const standards = ko
    ? [
        [Scale, "사실과 해석을 구분합니다", "무엇이 확인됐고 무엇이 주장인지 먼저 밝힌 뒤, 씨앗의 소리의 해석과 판단을 제시합니다."],
        [Landmark, "권력을 같은 기준으로 봅니다", "누가 집권했는지가 아니라 자유, 법치, 권력분립과 시민의 책임이라는 기준으로 판단합니다."],
        [ShieldCheck, "기계적 중립에 숨지 않습니다", "근거가 가리키는 결론을 피하지 않되, 우리 편의 과장과 오류도 사실에 맞지 않으면 바로잡습니다."],
        [BookOpenText, "시민이 다시 확인할 수 있게 씁니다", "출처와 논리의 흐름을 드러내 독자가 결론만 소비하지 않고 스스로 판단하도록 돕습니다."],
      ]
    : [
        [Scale, "We distinguish fact from interpretation", "We identify what is verified and what remains a claim before presenting our analysis."],
        [Landmark, "We apply consistent standards to power", "Our standards are freedom, the rule of law, separated powers, and civic responsibility—not the party in office."],
        [ShieldCheck, "We do not hide behind false balance", "We follow the evidence while correcting exaggeration and error, including from those closest to our own viewpoint."],
        [BookOpenText, "We make our reasoning inspectable", "We show sources and lines of reasoning so readers can form their own judgment."],
      ];

  return (
    <main className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="section-kicker">ABOUT SEED VOICE</p>
            <h1 className="editorial-title mt-4 max-w-4xl text-4xl font-bold leading-[1.08] text-navy sm:text-6xl">
              {ko ? "시민이 스스로 판단할 수 있도록 사실과 맥락, 관점을 전합니다." : "Facts, context, and viewpoint for citizens who judge for themselves."}
            </h1>
          </div>
          <p className="border-l-2 border-gold pl-6 text-base leading-8 text-charcoal/68 sm:text-lg">
            {ko ? "씨앗의 소리는 국가와 시장, 시민사회의 중요한 변화를 시민의 언어로 기록하고 해석하는 1인 독립 시민미디어입니다. 진영의 구호를 반복하지 않고, 확인된 사실에서 출발해 자유와 책임의 관점으로 공공의 문제를 살핍니다." : "SEED VOICE is a one-person independent civic publication that explains changes in the state, market, and civil society. We begin with verified facts and examine public affairs through freedom and responsibility."}
          </p>
        </div>
      </header>

      <section className="py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
            <div>
              <p className="section-kicker">WHY A CIVIC JOURNAL</p>
              <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "시민에게 필요한 것은 더 많은 구호가 아니라 판단할 수 있는 언어입니다." : "Citizens need language for judgment, not more slogans."}</h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-charcoal/68">
              <p>{ko ? "정치와 행정은 더 많은 권한과 예산을 다루고, 시장과 기술은 빠르게 복잡해지고 있습니다. 그러나 많은 정보는 진영의 확신을 강화하거나 분노를 키우는 방식으로 소비됩니다. 시민은 사실을 확인하고 제도의 작동을 이해하기보다 누군가가 정해준 입장을 선택하라는 압박을 받습니다." : "Politics commands greater authority and budgets, while markets and technology grow more complex. Yet information is often used to reinforce partisan certainty rather than civic understanding."}</p>
              <p className="font-semibold text-navy">{ko ? "씨앗의 소리는 시민을 정치의 관객이나 정보의 소비자로 보지 않습니다. 시민이 사건의 맥락을 이해하고 권력을 질문하며 자신의 판단을 세울 수 있도록 돕는 것이 저널의 역할이라고 믿습니다." : "We do not see citizens as political spectators or passive consumers of information. A civic journal should help them understand context, question power, and reach their own judgments."}</p>
            </div>
          </div>

          <figure className="mt-8 overflow-hidden border border-green-deep/15 bg-white">
            <img src={`${import.meta.env.BASE_URL}images/about/seed-journal-origin-watercolor.webp`} alt={ko ? "한 시민이 작은 씨앗과 노트북을 앞에 두고 생각을 글로 키워가는 따뜻한 수채화" : "Warm watercolor of one citizen developing small seeds of thought through writing and a laptop"} className="aspect-[16/7.2] w-full object-cover" />
            <figcaption className="flex flex-col gap-1 border-t border-green-deep/10 px-5 py-3 text-[13px] leading-6 text-charcoal/58 sm:flex-row sm:justify-between sm:gap-6">
              <span>{ko ? "한 사람의 작은 사유가 기록되고 연결될 때 시민의 목소리가 됩니다." : "A citizen’s small reflections become a public voice when they are recorded and connected."}</span>
              <span className="shrink-0 text-right font-semibold text-green-deep/70">{ko ? "© 2026 씨앗의 소리" : "© 2026 SEED VOICE"}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-10 sm:py-14">
        <div className="container-page">
          <div className="border-b-[3px] border-navy pb-4">
            <p className="section-kicker">OUR PAGES</p>
            <h2 className="editorial-title mt-2 text-3xl font-bold text-navy sm:text-4xl">{ko ? "세 개의 편집면에 집중합니다" : "Three editorial desks"}</h2>
          </div>
          <div className="grid md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {sections.map(([Icon, title, description]) => {
              const Component = Icon as typeof Newspaper;
              return <article key={title as string} className="border-b border-green-deep/15 py-7 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"><Component size={27} className="text-gold"/><h3 className="editorial-title mt-4 text-2xl font-bold text-navy">{title as string}</h3><p className="mt-3 text-sm leading-7 text-charcoal/62">{description as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-10 text-white sm:py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-14">
          <div>
            <p className="text-[10px] font-extrabold tracking-[.2em] text-gold-light">EDITORIAL STANDARD</p>
            <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight sm:text-4xl">{ko ? "가치는 분명하게, 사실에는 정직하게" : "Clear in values, honest about facts"}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{ko ? "씨앗의 소리는 자유와 법치, 시장의 자율과 시민의 책임을 중시하는 중도보수 시민 관점에서 출발합니다." : "SEED VOICE begins from a center-right civic perspective that values freedom, the rule of law, open markets, and civic responsibility."}</p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {standards.map(([Icon, title, description]) => {
              const Component = Icon as typeof Scale;
              return <article key={title as string} className="bg-green-deep p-6"><Component size={24} className="text-gold"/><h3 className="mt-4 text-lg font-extrabold">{title as string}</h3><p className="mt-2 text-sm leading-7 text-white/58">{description as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <div className="border-t-2 border-navy bg-white py-7 sm:px-8">
            <p className="section-kicker">INDEPENDENCE</p>
            <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{ko ? "정당과 정부로부터 독립된 시민의 편집실" : "A civic editorial room independent of party and government"}</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-charcoal/66">{ko ? "씨앗의 소리는 어떤 정당의 선거조직이나 정부사업의 동원 수단이 되지 않습니다. 누가 집권하든 같은 원칙으로 권력을 살피고, 공익을 말하는 조직과 주장도 시민 앞에 근거를 제시해야 한다고 믿습니다. 한 사람의 시민이 왜 이 매체를 시작했는지, 어떤 가능성을 만들고 싶은지는 씨앗의 소리 취지문에 담았습니다." : "SEED VOICE is not an electoral arm of any party or a vehicle for government mobilization. We apply the same principles regardless of who holds power. Our Statement of Purpose explains why one citizen began this publication and what possibility it seeks to create."}</p>
            <ul className="mt-5 grid gap-3 text-sm text-charcoal/62 sm:grid-cols-2">
              <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-mid"/>{ko ? "사실·해석·주장을 구분합니다." : "We distinguish facts, interpretation, and claims."}</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-mid"/>{ko ? "출처와 판단 근거를 독자에게 공개합니다." : "We show readers our sources and reasoning."}</li>
            </ul>
            <Link to="/founding-statement" className="button-secondary mt-6">{ko ? "씨앗의 소리 취지문 읽기" : "Read the Statement of Purpose"}<ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-green-deep/15 bg-ivory py-10 sm:py-14">
        <div className="container-page max-w-5xl grid gap-8 sm:grid-cols-[210px_1fr] sm:items-center lg:gap-12">
          <img src={`${import.meta.env.BASE_URL}images/about/park-kyung-seok.jpg`} alt={ko ? "씨앗의 소리 발행인 박경석" : "Park Kyung-seuk, publisher of SEED VOICE"} className="w-[190px] border border-green-deep/15 bg-white object-cover shadow-[12px_12px_0_rgba(23,76,58,.08)] sm:w-full" />
          <div>
            <p className="section-kicker">PUBLISHER</p>
            <h2 className="editorial-title mt-3 text-4xl font-bold text-navy">{ko ? "박경석" : "Park Kyung-seuk"}</h2>
            <p className="mt-2 text-sm font-bold text-green-deep">{ko ? "씨앗의 소리 발행인" : "Publisher, SEED VOICE"}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/68">{ko ? "시민사회 현장에서 오래 일했습니다. 사회통합위원회 대외협력관, 범시민사회단체연합 사무총장과 공기업 임원 등을 지냈습니다. 지금은 한 사람의 시민도 자신의 생각을 세우고 공공의 목소리를 낼 수 있다는 가능성을 보여주기 위해 1인 독립 시민미디어 씨앗의 소리를 만들고 있습니다." : "He has worked for many years in Korean civil society, including roles in social integration, civic-sector cooperation, and public enterprise. He now publishes SEED VOICE to demonstrate that one citizen can develop an independent judgment and bring an accountable public voice into the world."}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
