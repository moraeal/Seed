import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function FoundingStatement() {
  const { language } = useLanguage();
  const ko = language === "ko";

  const sections = ko
    ? [
        ["시민은 커진 정치의 관객이 되어서는 안 됩니다", "오늘의 정치는 시민의 삶을 바꾸는 거대한 권한과 예산을 다루지만, 정작 시민은 진영의 구호를 반복하거나 선거 때 한 표를 행사하는 역할에 머무르기 쉽습니다. 국가는 더 많은 일을 맡고 시장은 더 복잡해졌지만, 국가와 시장을 시민의 삶에 책임지게 할 시민사회의 힘은 충분히 자라지 못했습니다. 우리는 민주주의의 다음 과제가 시민을 다시 공공의 주체로 세우는 일이라고 믿습니다."],
        ["공익은 어느 진영과 기관의 전유물이 아닙니다", "공익기관, 시민단체, 재단과 각종 위원회는 시민의 신뢰와 기부, 공공재정을 바탕으로 영향력을 행사합니다. 그러나 좋은 이름과 선한 의도만으로 공익이 증명되지는 않습니다. 누구의 문제를 다루었는지, 자원은 어디에 쓰였는지, 시민의 삶에 어떤 변화가 생겼는지를 설명해야 합니다. 공익을 말하는 조직일수록 더 투명하게 질문받고 답할 책임이 있습니다."],
        ["자유로운 시민과 강한 사회가 필요합니다", "우리는 자유, 법치, 시장의 자율과 시민의 책임을 소중히 여깁니다. 유능한 국가는 필요하지만 국가의 힘에는 헌법과 법률의 한계가 있어야 합니다. 역동적인 시장도 필요하지만 공정한 규칙과 사회적 신뢰 위에서 작동해야 합니다. 기업도 이윤을 만드는 시장의 주체를 넘어 지역과 사회의 문제 해결에 책임을 나누는 기업시민으로 참여할 수 있습니다. 국가와 시장이 사람을 위해 존재하도록 붙잡아주는 공공성의 자리가 바로 시민사회입니다. 씨드는 자유로운 개인 시민과 책임 있는 기업시민이 각자의 자율성을 지키며 공익을 위해 협력하는 강한 시민사회를 만들겠습니다."],
        ["사실을 확인하고 맥락을 설명하겠습니다", "가짜뉴스와 선동, 진영화된 정보는 시민의 판단을 흐립니다. 씨드는 기계적 중립이나 억지스러운 양비론을 택하지 않습니다. 자유와 책임의 관점에서 잘못된 권력과 주장을 분명히 비판하되, 우리 편의 과장과 오류도 사실에 맞지 않으면 바로잡겠습니다. 판단의 기준은 좌우의 균형이 아니라 확인된 사실과 책임 있는 논리입니다."],
        ["비판을 시민의 제안과 행동으로 연결하겠습니다", "문제를 드러내는 것만으로 사회가 바뀌지는 않습니다. 씨드는 공익감시로 권한과 예산의 흐름을 기록하고, 시민브리핑으로 사실과 구조를 설명하며, 시민제안으로 대안을 구체화하겠습니다. 작은 제안은 토론과 검증을 거쳐 시민 프로젝트로 시험하고, 그 결과를 다시 공개하겠습니다. 질문에서 기록으로, 기록에서 제안으로, 제안에서 실행과 점검으로 이어지는 시민운동을 만들겠습니다."],
        ["정당과 정부로부터 독립하겠습니다", "씨드는 어떤 정당의 선거조직이나 정부사업의 동원조직이 되지 않겠습니다. 누가 집권하든 같은 원칙으로 권력을 살피고, 재정과 활동의 근거를 시민에게 설명하겠습니다. 정부의 지원이나 특정 후원자의 요구가 우리의 판단을 대신하지 않도록 독립성과 투명성을 지키겠습니다. 서로 다른 생각을 가진 시민도 사실과 책임의 원칙 아래 협력할 수 있는 공론장을 열겠습니다."],
        ["씨앗처럼 자라고 연결되는 시민을 기다립니다", "씨앗은 이미 생명을 품고 있지만 아직 완성된 존재는 아닙니다. 시민도 관계 속에서 배우고 책임을 감당하며 더 나은 시민으로 자랍니다. 씨드시민파트너스는 완성된 답을 가진 사람들의 조직이 아니라, 함께 질문하고 배우며 행동하는 동료시민의 플랫폼이 되고자 합니다. 우리의 첫 방향과 신뢰, 활동의 기반을 함께 세울 창립파트너를 기다립니다."],
      ]
    : [
        ["Citizens Must Be More Than an Audience to Expanding Politics", "Politics commands immense authority and budgets, yet citizens are often reduced to repeating partisan slogans or casting a vote at election time. The state has taken on more responsibilities and markets have become more complex, while civil society has not grown strong enough to hold either accountable to citizens. We believe democracy's next task is to restore citizens as active public agents."],
        ["The Public Interest Belongs to No Camp or Institution", "Public-interest organizations, civic groups, foundations, and commissions exercise influence based on public trust, donations, and public funds. Good names and intentions alone do not prove public benefit. Institutions should explain whose problems they address, how resources are used, and what changed in citizens' lives. Organizations that speak in the name of the public interest bear a special duty to answer public questions."],
        ["A Free Citizenry and a Strong Society", "We value freedom, the rule of law, open markets, and civic responsibility. A capable state is necessary, but its power must remain limited by constitutional law. Dynamic markets are necessary, but they depend on fair rules and social trust. Businesses, too, can go beyond their role as market actors and participate as corporate citizens that share responsibility for solving problems in their communities and society. Civil society is the public space that keeps state and market accountable to human life. SEED seeks to build a strong civil society in which free individual citizens and responsible corporate citizens cooperate for the public good while preserving their autonomy."],
        ["We Will Verify Facts and Explain Context", "Disinformation, manipulation, and partisan information weaken civic judgment. SEED rejects both mechanical neutrality and false equivalence. From the standpoint of freedom and responsibility, we will clearly criticize abuses of power and flawed arguments while correcting exaggeration from our own side when evidence does not support it. Our standard is not a balance between left and right, but verified facts and responsible reasoning."],
        ["From Criticism to Civic Proposals and Action", "Exposing problems alone does not change society. SEED will record authority and budgets through public-interest watch, explain facts and structures through civic briefings, and develop alternatives through citizen proposals. Small proposals can be discussed, verified, tested as civic projects, and publicly reviewed. We seek a civic movement that moves from questions to records, from records to proposals, and from proposals to action and accountability."],
        ["Independent of Parties and Government", "SEED will not become an electoral arm of any party or a mobilization vehicle for government programs. We will scrutinize power by the same principles regardless of who governs and explain our finances and work to citizens. We will protect our independence so that no public grant or private donor replaces our judgment. We will open a public forum where people with different views can cooperate under shared standards of fact and responsibility."],
        ["We Welcome Citizens Who Grow and Connect Like Seeds", "A seed already carries life, but it is not complete. Citizens also learn through relationships, accept responsibility, and grow toward fuller civic capacity. SEED Civic Partners seeks to be a platform not for people who claim to possess all the answers, but for fellow citizens who question, learn, and act together. We invite Founding Partners to help establish our first direction, trust, and foundation for action."],
      ];

  return (
    <article className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory py-14 sm:py-20">
        <div className="container-page max-w-5xl"><Link to="/partners" className="text-link"><ArrowLeft size={16}/>{ko ? "파트너스 페이지" : "Partners"}</Link><span className="section-kicker mt-10 block">FOUNDING STATEMENT</span><h1 className="editorial-title mt-4 text-4xl font-bold leading-tight text-navy sm:text-6xl">{ko ? "씨드시민파트너스 창립취지문" : "Founding Statement of SEED Civic Partners"}</h1><p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-charcoal/65">{ko ? "자유로운 시민, 책임 있는 공익, 국가와 시장을 바로 세우는 강한 시민사회를 향해" : "Toward free citizens, accountable public purpose, and a strong civil society that keeps state and market in balance"}</p></div>
      </header>

      <div className="container-page max-w-5xl py-12 sm:py-16">
        <div className="border-y-2 border-green-deep bg-[#fbf4e5] px-6 py-8 sm:px-10"><p className="editorial-title text-2xl font-bold leading-relaxed text-green-deep sm:text-3xl">{ko ? "시민이 자라면 사회가 강해집니다. 강한 시민사회는 국가와 시장을 시민의 삶에 책임지게 합니다." : "When citizens grow, society becomes stronger. A strong civil society keeps both state and market accountable to human life."}</p></div>
        <div className="mt-12 space-y-12">{sections.map(([title, body], index) => <section key={title}><div className="flex items-baseline gap-4"><span className="font-serif text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span><h2 className="editorial-title text-2xl font-bold leading-snug text-navy sm:text-3xl">{title}</h2></div><p className="mt-5 text-base leading-8 text-charcoal/68 sm:pl-10">{body}</p></section>)}</div>
        <footer className="mt-16 border-t-2 border-navy pt-9"><p className="text-sm font-extrabold tracking-[.08em] text-green-deep">{ko ? "2026년 9월 · 씨드시민파트너스 창립준비위원회" : "September 2026 · Founding Committee, SEED Civic Partners"}</p><div className="mt-7 flex flex-wrap gap-3"><Link to="/partners#partner-application" className="button-primary">{ko ? "창립파트너로 함께하기" : "Join as a Founding Partner"}<ArrowRight size={16}/></Link><Link to="/partners" className="button-secondary">{ko ? "파트너스 안내로 돌아가기" : "Back to Partners"}</Link></div></footer>
      </div>
    </article>
  );
}
