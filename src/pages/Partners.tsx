import { ArrowRight, BookOpenText, Eye, FileText, Handshake, Lightbulb, Network, SearchCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FoundingPartnerForm from "../components/FoundingPartnerForm";
import { useLanguage } from "../i18n";

const imageSrc = `${import.meta.env.BASE_URL}images/partners/founding-partners-workshop-watercolor.webp`;

export default function Partners() {
  const { language } = useLanguage();
  const ko = language === "ko";

  const directions = ko
    ? [
        [Eye, "공익감시", "공익기관과 공공제도의 예산·권한·성과를 시민의 눈으로 확인하고 후속 변화를 기록합니다."],
        [FileText, "시민브리핑", "복잡한 정치·사회 이슈의 사실과 맥락을 시민이 판단할 수 있는 언어로 정리합니다."],
        [Lightbulb, "시민제안", "생활 속 문제의식을 근거와 실행 가능성을 갖춘 공공의 제안으로 발전시킵니다."],
        [Network, "시민 네트워크", "청년, 전문가, 지역 시민과 책임 있는 기업·재단을 독립 시민사회의 협력자로 연결합니다."],
      ]
    : [
        [Eye, "Public-Interest Watch", "Review the budgets, powers, and outcomes of public-interest institutions and record what changes next."],
        [FileText, "Civic Briefings", "Explain the facts and context of complex public issues in language citizens can use for judgment."],
        [Lightbulb, "Citizen Proposals", "Develop everyday concerns into evidence-based public proposals with a practical path to action."],
        [Network, "Civic Network", "Connect young leaders, experts, local citizens, and responsible institutions as partners in an independent civil society."],
      ];

  const roles = ko
    ? [
        [SearchCheck, "질문하고 검증하는 사람", "브리핑과 공익감시 의제를 제안하고 자료 확인과 사실 검증에 참여합니다."],
        [BookOpenText, "지식과 경험을 나누는 사람", "자신의 전문성과 현장 경험으로 콘텐츠, 제안, 시민 프로젝트의 완성도를 높입니다."],
        [Users, "사람과 기회를 연결하는 사람", "좋은 시민, 단체, 연구자, 기업과 재단을 씨드의 협력 생태계로 연결합니다."],
        [Handshake, "기반을 함께 세우는 사람", "초기 운영, 후원, 공간, 기술과 프로젝트 자원을 보태 독립성을 지켜줍니다."],
      ]
    : [
        [SearchCheck, "Question and verify", "Suggest issues for briefings and public watch, and help check sources and facts."],
        [BookOpenText, "Share knowledge and experience", "Bring professional and field experience to SEED's content, proposals, and civic projects."],
        [Users, "Connect people and opportunities", "Introduce citizens, organizations, researchers, businesses, and foundations that can strengthen the network."],
        [Handshake, "Build the foundation", "Contribute support, space, technology, and project resources while protecting SEED's independence."],
      ];

  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page py-8 sm:py-10">
          <div className="relative isolate min-h-[360px] overflow-hidden border-y-2 border-green-deep bg-[#fbf4e5] sm:min-h-[420px]">
            <img src={imageSrc} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[62%_50%] opacity-85"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0] via-[#fffaf0]/96 to-[#fffaf0]/20"/>
            <div className="relative flex min-h-[360px] max-w-3xl flex-col justify-center px-6 py-10 sm:min-h-[420px] sm:px-10 lg:px-12">
              <span className="section-kicker">SEED FOUNDING PARTNERS</span>
              <h1 className="editorial-title mt-4 max-w-2xl text-4xl font-bold leading-[1.08] text-navy sm:text-6xl">{ko ? "시민이 자라는 기반을 함께 세웁니다" : "Building the Ground Where Citizens Can Grow"}</h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-charcoal/70">{ko ? "창립파트너는 씨드의 이름만 함께 쓰는 회원이 아닙니다. 독립 시민사회가 필요하다는 문제의식을 공유하고, 공익감시·시민브리핑·시민제안의 첫 기반을 함께 만드는 동료시민입니다." : "Founding Partners are not members in name only. They share the need for an independent civil society and help build the first foundation for public watch, civic briefings, and citizen proposals."}</p>
              <div className="mt-7 flex flex-wrap gap-3"><button type="button" onClick={() => document.getElementById("partner-application")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="button-primary">{ko ? "창립파트너 가입하기" : "Join as a Founding Partner"}<ArrowRight size={16}/></button><Link to="/partners/founding-statement" className="button-secondary">{ko ? "창립취지문 전문 보기" : "Read the Founding Statement"}</Link></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <section className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><span className="section-kicker">WHY SEED, WHY NOW</span><h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "국가와 시장 사이, 시민사회의 힘을 다시 세웁니다" : "Rebuilding Civic Strength Between State and Market"}</h2></div>
          <div className="border-l-2 border-gold pl-6 text-base leading-8 text-charcoal/68 sm:pl-8"><p>{ko ? "정치의 규모는 커졌지만 시민의 목소리는 진영의 구호 속에서 작아졌습니다. 공익의 이름으로 움직이는 기관과 제도도 시민에게 충분히 설명되지 않는 경우가 많습니다." : "Politics has grown larger while citizens' voices have often become smaller inside partisan slogans. Institutions acting in the public interest do not always explain their power and results clearly to citizens."}</p><p className="mt-4">{ko ? "씨드는 자유와 책임, 법치와 시장의 자율, 강한 시민사회를 바탕으로 시민이 사실을 확인하고 권력을 감시하며 대안을 만드는 새로운 시민운동을 시작합니다. 정당이나 정부의 보조조직이 아니라 시민에게 책임지는 독립 플랫폼으로 서겠습니다." : "SEED begins a new civic effort grounded in freedom and responsibility, the rule of law, open markets, and a strong civil society. We aim to remain independent of parties and government and accountable to citizens."}</p></div>
        </section>

        <section className="mt-16 border-t-2 border-navy pt-9 sm:mt-20"><span className="section-kicker">WHAT WE WILL BUILD</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "파트너와 함께 시작할 활동" : "What Partners Will Help Build"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{directions.map(([Icon, title, description]) => { const Component = Icon as typeof Eye; return <article key={title as string} className="border border-green-deep/12 bg-white p-7"><Component size={25} className="text-gold"/><h3 className="editorial-title mt-5 text-2xl font-bold text-navy">{title as string}</h3><p className="mt-3 text-sm leading-7 text-charcoal/60">{description as string}</p></article>; })}</div></section>

        <section className="mt-16 bg-green-deep px-6 py-10 text-white sm:mt-20 sm:px-10 sm:py-12"><span className="text-xs font-extrabold tracking-[.16em] text-gold-light">ROLE OF FOUNDING PARTNERS</span><h2 className="editorial-title mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">{ko ? "창립파트너는 씨드의 방향과 신뢰를 함께 만드는 사람입니다" : "Founding Partners Help Shape SEED's Direction and Trust"}</h2><div className="mt-8 grid gap-px bg-white/15 md:grid-cols-2">{roles.map(([Icon, title, description]) => { const Component = Icon as typeof SearchCheck; return <article key={title as string} className="bg-green-deep p-6 sm:p-7"><Component size={22} className="text-gold"/><h3 className="mt-4 text-xl font-extrabold">{title as string}</h3><p className="mt-3 text-sm leading-7 text-white/62">{description as string}</p></article>; })}</div><p className="mt-7 max-w-4xl text-sm leading-7 text-white/55">{ko ? "모든 파트너가 같은 방식으로 활동할 필요는 없습니다. 각자의 시간과 전문성, 관계와 자원을 가능한 만큼 보태되, 사실에 정직하고 정당으로부터 독립하며 서로의 자유를 존중한다는 원칙을 함께 지킵니다." : "Partners contribute in different ways according to their time, expertise, relationships, and resources. What we share is honesty about facts, independence from parties, and respect for one another's freedom."}</p></section>

        <section className="mt-16 sm:mt-20"><FoundingPartnerForm ko={ko}/></section>
      </div>
    </section>
  );
}
