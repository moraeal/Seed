import {
  ArrowRight,
  BriefcaseBusiness,
  Eye,
  Landmark,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sprout,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

const copy = {
  ko: {
    kicker: "ABOUT SEED VOICE",
    title: "씨앗의 소리가\n지키려는 것",
    lead: "민주주의는 선거의 승리만으로 완성되지 않습니다. 법의 지배와 권력분립, 시민의 자유가 무너진다면 민주라는 이름만 남습니다.",
    identity: "씨앗의 소리는 자유의 영역을 넓히고, 기업의 도전과 혁신을 보호하며, 국가와 시민사회의 권력을 감시하는 독립 시민저널입니다.",
    publisher: "필진 소개",
    statement: "원고 전문 읽기",
    manifesto: "독재는 반드시 군홧발을 신고 오지 않습니다. 국회의 표결로 올 수도 있고, 개혁이라는 이름을 달고 올 수도 있습니다.",
    crisisKicker: "WHY NOW",
    crisisTitle: "민주화를 외치던 세대도 권력이 되면 감시받아야 합니다",
    crisis: [
      "과거 민주화운동 세대는 독재 타도를 외치며 자유를 부르짖었습니다. 그러나 과거의 민주화 경력이 오늘의 권력을 정당화하는 면허가 될 수는 없습니다. 권력을 잡은 순간부터 그들 역시 감시와 견제의 대상입니다.",
      "다수 의석으로 법을 밀어붙이고, 마음에 들지 않는 제도를 개혁의 이름으로 고치며, 사법부와 수사기관·언론의 질서를 한꺼번에 바꾸려 한다면 시민은 물어야 합니다. 무엇을 고치는가만큼 누가 권한을 갖게 되는가를 보아야 합니다.",
      "정부와 한목소리를 내면서 시민을 대표한다고 말하는 시민단체도 예외가 아닙니다. 시민사회는 국가의 홍위병이나 정권의 이중대가 아닙니다. 공익을 말하며 권한과 예산을 갖는 순간, 그곳 역시 시민의 감시를 받아야 합니다.",
    ],
    citizenKicker: "THE CIVIC AGE",
    citizenTitle: "민주의 시대를 넘어 시민의 시대로",
    citizen: [
      "민주라는 이름을 가진 정당이 민주주의를 독점할 수는 없습니다. 시민이라는 이름을 붙인 단체가 시민을 대신한다고 스스로 선언할 수도 없습니다.",
      "민주주의의 주인은 정당도, 정부도, 시민단체도 아닙니다. 시민입니다. 시민은 통치의 대상이 아니라 권력을 묻고, 제도를 판단하고, 잘못된 결정을 되돌리는 주체입니다.",
      "함석헌은 이름 없는 씨알을 역사의 주체로 보았습니다. 씨앗의 소리는 그 문제의식을 오늘 시민의 자리에서 이어가려 합니다. 이름 없는 한 시민의 질문도 권력의 말보다 가벼울 수 없다는 믿음입니다.",
    ],
    valuesTitle: "씨앗이 지키려는 것",
    valuesLead: "씨앗의 소리는 진영의 구호가 아니라 시민의 자유를 지키는 제도와 기준을 봅니다.",
    values: [
      { title: "법의 지배", description: "권력자의 뜻이 아니라 미리 정한 법과 절차가 국가를 움직여야 합니다." },
      { title: "제한된 정부", description: "국가는 유능해야 하지만 시민의 삶과 선택을 끝없이 지배해서는 안 됩니다." },
      { title: "권력분립", description: "입법·행정·사법이 서로 견제할 때 시민의 권리가 지켜집니다." },
      { title: "표현의 자유", description: "권력자가 듣기 싫어하는 말까지 허용될 때 비로소 자유입니다." },
      { title: "기업의 도전", description: "기업의 자유는 특혜가 아니라 시민의 일자리·선택·도전을 만드는 조건입니다." },
      { title: "시민사회의 독립", description: "시민단체는 정부의 대변인이 아니라 국가권력을 감시하는 독립된 힘이어야 합니다." },
    ],
    watchKicker: "WHAT WE WATCH",
    watchTitle: "권력이 움직이는 곳을 끝까지 보겠습니다",
    watchLead: "선한 명분보다 권한이 어디로 이동하는지, 시민이 어떤 비용을 치르는지, 반대할 자유가 남아 있는지를 확인합니다.",
    watch: [
      { title: "국가권력", description: "입법과 예산, 인사와 사법제도, 수사권력의 재편을 기록합니다." },
      { title: "시장과 기업", description: "기업을 줄 세우는 규제와 부담이 시민의 일자리와 선택에 미치는 영향을 따집니다." },
      { title: "시민사회 권력", description: "공익을 내세운 조직의 예산·성과·대표성과 정부와의 관계를 살핍니다." },
    ],
    standardTitle: "사실은 정확하게, 관점은 분명하게",
    standards: [
      { title: "사실을 먼저 확인합니다", description: "원문과 공개자료를 대조하고 확인된 사실, 해석, 의혹과 판단을 구분합니다." },
      { title: "관점을 숨기지 않습니다", description: "기계적 중립 뒤에 숨지 않고 자유·자율·법치·책임의 기준으로 판단합니다." },
      { title: "같은 잣대로 감시합니다", description: "진보와 보수, 국가와 시민사회를 가리지 않고 권한을 가진 주체에게 책임을 묻습니다." },
    ],
    promiseKicker: "OUR PROMISE",
    promiseTitle: "작은 질문이 시민의 목소리로 자라도록",
    promise: "씨앗의 소리는 거대한 언론사가 아닙니다. 한 사람의 질문에서 시작해 더 많은 시민의 목소리로 자라려는 독립 시민저널입니다. 오류가 확인되면 근거를 다시 살피고 공개적으로 바로잡겠습니다. 권력이 당연하다고 말하는 것을 다시 묻고, 시민이 스스로 보고 판단할 수 있는 사실과 관점을 전하겠습니다.",
    final: "씨앗은 작습니다. 그러나 아무리 거대한 권력도 시민 한 사람의 질문에서부터 흔들리기 시작합니다.",
  },
  en: {
    kicker: "ABOUT SEED VOICE",
    title: "What SEED VOICE\nStands For",
    lead: "Democracy is not secured by electoral victory alone. When the rule of law, separation of powers and civic freedom erode, little remains beyond the name.",
    identity: "SEED VOICE is an independent civic journal that expands the sphere of freedom, protects enterprise and innovation, and watches power in both the state and civil society.",
    publisher: "Meet the Contributors",
    statement: "Read the Full Statement",
    manifesto: "Authoritarianism does not always arrive in military boots. It can come through a parliamentary vote, carrying the banner of reform.",
    crisisKicker: "WHY NOW",
    crisisTitle: "A generation that fought for democracy must still be watched when it holds power",
    crisis: [
      "A generation of South Koreans once resisted dictatorship in the name of freedom. That history cannot become a permanent license for the exercise of power today. The moment democratic activists enter government, they too become subjects of democratic scrutiny.",
      "When a parliamentary majority rushes through laws, rewrites institutions under the banner of reform, and seeks to remake the judiciary, prosecution and media order at once, citizens must look beyond what is being changed. They must ask where power is moving and who will hold it next.",
      "Civic organizations are not exempt. A group that speaks alongside the government cannot claim to represent citizens simply by invoking civil society. Once an organization gains public authority, money or influence in the name of the public good, citizens have the right to scrutinize it.",
    ],
    citizenKicker: "THE CIVIC AGE",
    citizenTitle: "Beyond the age of democratic camps, toward the age of citizens",
    citizen: [
      "No party with democracy in its name can monopolize democracy. No organization with citizen in its name can appoint itself the voice of citizens.",
      "The sovereign of democracy is not a party, a government or a civic organization. It is the citizen: not an object to be governed, but an agent who questions power, judges institutions and reverses decisions that betray freedom.",
      "Korean thinker Ham Seok-heon saw ordinary, unnamed people—the ssial—as the agents of history. SEED VOICE carries that question into civic life today: one unknown citizen’s question cannot be treated as less important than the words of power.",
    ],
    valuesTitle: "What SEED defends",
    valuesLead: "We look beyond partisan slogans to the institutions and principles that protect civic freedom.",
    values: [
      { title: "Rule of law", description: "Government must be bound by established law and procedure, not the wishes of those in power." },
      { title: "Limited government", description: "The state must be capable, but it must not endlessly govern citizens’ lives and choices." },
      { title: "Separated powers", description: "Civic rights survive when the legislative, executive and judicial branches restrain one another." },
      { title: "Freedom of expression", description: "Freedom becomes real when it protects speech that those in power do not want to hear." },
      { title: "Enterprise and initiative", description: "Economic freedom is not a privilege; it sustains citizens’ jobs, choices and capacity to build." },
      { title: "Independent civil society", description: "Civic groups should watch the state as an independent force, not speak as its auxiliary." },
    ],
    watchKicker: "WHAT WE WATCH",
    watchTitle: "We follow power wherever it moves",
    watchLead: "We look past benevolent claims to ask where authority moves, what citizens must pay, and whether the freedom to object remains intact.",
    watch: [
      { title: "State power", description: "We track legislation, budgets, appointments, judicial change and the reorganization of investigative power." },
      { title: "Markets and enterprise", description: "We examine how coercive regulation and political pressure affect jobs, choice and economic initiative." },
      { title: "Civil-society power", description: "We scrutinize the budgets, results, representation and government ties of organizations acting in the public name." },
    ],
    standardTitle: "Accurate in fact, clear in viewpoint",
    standards: [
      { title: "Facts come first", description: "We compare primary sources and public records, separating verified fact, interpretation, suspicion and judgment." },
      { title: "Our viewpoint is visible", description: "We do not hide behind mechanical neutrality; we judge through freedom, autonomy, the rule of law and responsibility." },
      { title: "One standard for every camp", description: "We hold every center of power accountable, whether progressive or conservative, state or civil society." },
    ],
    promiseKicker: "OUR PROMISE",
    promiseTitle: "So a small question can grow into a civic voice",
    promise: "SEED VOICE is not a large media institution. It is an independent civic journal that began with one person’s questions and seeks to grow through the voices of many. When we are wrong, we will return to the evidence and correct the record openly. We will question what power presents as inevitable and give citizens the facts and arguments they need to see and judge for themselves.",
    final: "A seed is small. Yet even the greatest power can begin to tremble when one citizen asks a question.",
  },
};

const valueIcons = [Scale, Landmark, ShieldCheck, MessageSquareText, BriefcaseBusiness, UsersRound];
const watchIcons = [Landmark, BriefcaseBusiness, Eye];

export default function About() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="bg-paper">
      <header className="relative overflow-hidden border-b border-green-deep/15 bg-green-deep py-14 text-white sm:py-20">
        <img src={`${import.meta.env.BASE_URL}images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png`} alt="" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 object-contain opacity-15 sm:right-6 sm:h-[26rem] sm:w-[26rem]" />
        <div className="container-page relative max-w-5xl">
          <p className="text-xs font-extrabold tracking-[.2em] text-gold-light">{content.kicker}</p>
          <h1 className="editorial-title mt-4 max-w-4xl whitespace-pre-line text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">{content.title}</h1>
          <p className="mt-7 max-w-3xl border-l-2 border-gold pl-6 text-lg leading-8 text-white/80 sm:text-xl">{content.lead}</p>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-white/58 sm:text-base">{content.identity}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/publisher-message" className="button-light">{content.publisher}<ArrowRight size={16}/></Link>
            <Link to="/founding-statement" className="button-outline-light">{content.statement}</Link>
          </div>
        </div>
      </header>

      <main className="container-page max-w-5xl py-10 sm:py-14">
        <blockquote className="border-y-2 border-gold/75 bg-[#fbf4e5] px-6 py-8 text-center sm:px-12 sm:py-10">
          <p className="editorial-title mx-auto max-w-4xl text-2xl font-bold leading-relaxed text-green-deep sm:text-3xl">{content.manifesto}</p>
        </blockquote>

        <section className="grid gap-7 border-b border-green-deep/15 py-11 sm:py-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="section-kicker">{content.crisisKicker}</p>
            <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{content.crisisTitle}</h2>
          </div>
          <div className="space-y-5 text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">
            {content.crisis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="grid gap-7 border-b border-green-deep/15 py-11 sm:py-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="section-kicker">{content.citizenKicker}</p>
            <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{content.citizenTitle}</h2>
          </div>
          <div className="space-y-5 text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">
            {content.citizen.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="py-11 sm:py-14">
          <p className="section-kicker">OUR PRINCIPLES</p>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{content.valuesTitle}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal/62">{content.valuesLead}</p>
          <div className="mt-8 grid gap-px overflow-hidden border border-green-deep/15 bg-green-deep/15 md:grid-cols-2 lg:grid-cols-3">
            {content.values.map((item, index) => {
              const Icon = valueIcons[index];
              return <article key={item.title} className="bg-white p-6 sm:p-7">
                <Icon size={24} className="text-green-mid" />
                <h3 className="editorial-title mt-5 text-2xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/65">{item.description}</p>
              </article>;
            })}
          </div>
        </section>

        <section className="bg-green-deep px-6 py-10 text-white sm:px-10 sm:py-12">
          <p className="text-xs font-extrabold tracking-[.18em] text-gold-light">{content.watchKicker}</p>
          <h2 className="editorial-title mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">{content.watchTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">{content.watchLead}</p>
          <div className="mt-9 grid gap-7 md:grid-cols-3">
            {content.watch.map((item, index) => {
              const Icon = watchIcons[index];
              return <article key={item.title} className="border-t border-white/20 pt-5">
                <Icon size={22} className="text-gold-light" />
                <h3 className="mt-4 text-lg font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
              </article>;
            })}
          </div>
        </section>

        <section className="border-b border-green-deep/15 py-11 sm:py-14">
          <p className="section-kicker">EDITORIAL STANDARD</p>
          <h2 className="editorial-title mt-3 max-w-4xl text-3xl font-bold leading-tight text-navy sm:text-4xl">{content.standardTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {content.standards.map((item, index) => (
              <article key={item.title} className="border-t border-green-deep/20 pt-5">
                {index === 0 ? <ShieldCheck size={22} className="text-gold" /> : index === 1 ? <MessageSquareText size={22} className="text-gold" /> : <Eye size={22} className="text-gold" />}
                <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-11 sm:py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-start lg:gap-12">
          <article>
            <Sprout size={28} className="text-green-mid" />
            <p className="section-kicker mt-5">{content.promiseKicker}</p>
            <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{content.promiseTitle}</h2>
            <p className="mt-5 text-[17px] leading-[1.82] text-charcoal/72">{content.promise}</p>
          </article>
          <aside className="border-y-2 border-gold/70 bg-[#fbf4e5] px-7 py-8 sm:px-9 sm:py-10">
            <p className="editorial-title text-2xl font-bold leading-relaxed text-green-deep">{content.final}</p>
            <div className="mt-7 flex flex-col items-start gap-3">
              <Link to="/publisher-message" className="text-link">{content.publisher}<ArrowRight size={16}/></Link>
              <Link to="/founding-statement" className="text-link">{content.statement}<ArrowRight size={16}/></Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
