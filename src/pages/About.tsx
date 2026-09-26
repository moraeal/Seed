import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  FileSearch,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

const copy = {
  ko: {
    kicker: "ABOUT SEED VOICE",
    title: <>세상을 판단하는 힘,<br /><span className="text-[#bd613d]">시민에게.</span></>,
    lead: "법안 하나가 내 삶을 어떻게 바꾸는지, 공익을 내세운 사업에 세금이 어떻게 쓰였는지, 기업의 도전을 막는 제도는 없는지. 씨앗의 소리는 자료를 확인하고 권력이 움직이는 방향을 끝까지 살핍니다.",
    identity: "시민과 기업의 자유, 공익을 지키는 독립 시민저널. 사실은 정확하게, 관점은 분명하게 전하겠습니다.",
    readToday: "오늘의 기사 읽기",
    subscribe: "씨앗레터 구독신청",
    questionsKicker: "THE QUESTIONS",
    questionsTitle: "이런 질문에서 씨앗은 시작합니다",
    questions: [
      { label: "01 · 숫자", text: "나랏빚이 늘었는데, 정부는 왜 채무비율이 낮아졌다고 할까?" },
      { label: "02 · 예산", text: "공익을 위한 사업이라는데, 예산과 계약을 시민도 확인할 수 있을까?" },
      { label: "03 · 자유", text: "편법을 막는다는 제도가 정상적인 기업의 운영까지 어렵게 만들지는 않을까?" },
    ],
    experienceKicker: "HOW TO READ SEED VOICE",
    experienceTitle: "씨앗에서는 이렇게 읽을 수 있습니다",
    experiences: [
      { title: "오늘의 일을 이해합니다", description: "브리핑은 발표와 보도의 핵심을 짚고, 그 일이 시민의 삶에 어떤 영향을 주는지 설명합니다.", link: "브리핑 보러 가기", to: "/briefings" },
      { title: "권력과 예산의 흐름을 따라갑니다", description: "시민감시는 법안·예산·계약·제도의 변화를 기록합니다. 발표된 숫자와 실제 자료가 어디서 달라지는지도 확인합니다.", link: "시민감시 보러 가기", to: "/monitoring" },
      { title: "익숙한 말을 다시 생각합니다", description: "시민언어와 칼럼은 ‘공익’, ‘개혁’, ‘자유’ 같은 말이 현실에서 누구의 권한을 넓히고 누구의 선택을 좁히는지 묻습니다.", link: "시민언어 보러 가기", to: "/seed-language" },
    ],
    storiesKicker: "START READING",
    storiesTitle: "처음 읽을 기사",
    storiesLead: "씨앗이 숫자와 제도, 시민의 언어를 어떻게 살피는지 네 편의 기사로 확인해보세요.",
    stories: [
      { label: "숫자를 다시 읽기", title: "나랏빚 106조 늘었는데 채무비율은 하락?", description: "같은 기준의 숫자를 나란히 놓습니다.", to: "/news/national-debt-ratio-gdp-comparison" },
      { label: "예산을 끝까지 확인하기", title: "여수섬박람회 돈의 흐름을 다시 세다", description: "공고와 계약 자료를 연결합니다.", to: "/columns/yeosu-island-expo-procurement-ledger" },
      { label: "기업의 자유 살피기", title: "상속세 40억원이 330억원으로", description: "편법 단속과 사업의 계속 운영을 함께 봅니다.", to: "/briefings/hospital-inheritance-tax-maternity-care" },
      { label: "말의 힘 다시 생각하기", title: "말이 시민을 적으로 만든다", description: "진영의 이름 뒤에 가려진 사람을 봅니다.", to: "/columns/words-turn-citizens-into-enemies" },
    ],
    standardKicker: "OUR STANDARD",
    standardTitle: "씨앗의 기준",
    standardLead: "법의 지배와 권력분립, 표현의 자유, 기업의 도전, 시민사회의 독립을 지킵니다.",
    standards: [
      "확인된 사실과 씨앗의 판단을 구분합니다.",
      "권한을 가진 곳에는 같은 기준으로 책임을 묻습니다.",
      "시민이 다시 확인할 수 있는 근거를 남깁니다.",
    ],
    values: ["법의 지배", "권력분립", "표현의 자유", "기업의 도전", "시민사회의 독립"],
    statement: "씨앗의 취지문 읽기",
    contributors: "필진 소개",
    joinKicker: "GROW WITH SEED VOICE",
    joinTitle: "작은 질문을 함께 키워주세요",
    joinLead: "기사를 읽고, 놓친 자료를 제보하고, 씨앗레터를 받아보세요. 시민이 다시 확인할 수 있는 근거를 쌓아가겠습니다.",
    read: "기사 읽기",
    tip: "제보하기",
    characterAlt: "펜을 든 씨야 캐릭터",
    characterBubble: "함께 확인해요!",
  },
  en: {
    kicker: "ABOUT SEED VOICE",
    title: <>The power to judge the world,<br /><span className="text-[#bd613d]">in citizens' hands.</span></>,
    lead: "How does a new bill change daily life? Where does the money go when a project claims to serve the public? Does a rule against abuse also obstruct a legitimate business? SEED VOICE checks the records and follows where power moves.",
    identity: "An independent civic journal defending freedom for citizens and enterprise and the public good. Accurate in fact, clear in viewpoint.",
    readToday: "Read today's stories",
    subscribe: "Subscribe to SEED LETTER",
    questionsKicker: "THE QUESTIONS",
    questionsTitle: "SEED begins with questions like these",
    questions: [
      { label: "01 · Numbers", text: "If public debt is rising, why does the government say the debt ratio has fallen?" },
      { label: "02 · Budgets", text: "Can citizens trace the contracts and spending behind a project said to serve the public?" },
      { label: "03 · Freedom", text: "Could a rule meant to stop abuse also make a legitimate enterprise harder to sustain?" },
    ],
    experienceKicker: "HOW TO READ SEED VOICE",
    experienceTitle: "Three ways to read SEED",
    experiences: [
      { title: "Understand the day's events", description: "Our briefings explain the essential facts in announcements and reports and what they mean for citizens' lives.", link: "Explore briefings", to: "/briefings" },
      { title: "Follow power and public money", description: "Civic Watch tracks bills, budgets, contracts and institutional change. We compare public claims with the underlying records.", link: "Explore Civic Watch", to: "/monitoring" },
      { title: "Reconsider familiar words", description: "Our language essays and columns ask whose authority grows, and whose choices shrink, when people invoke the public good, reform or freedom.", link: "Explore civic language", to: "/seed-language" },
    ],
    storiesKicker: "START READING",
    storiesTitle: "Start with these stories",
    storiesLead: "Four examples show how SEED examines numbers, institutions, business freedom and civic language.",
    stories: [
      { label: "Read the numbers", title: "Debt rises by 106 trillion won. Why does the ratio fall?", description: "Compare figures calculated on the same basis.", to: "/news/national-debt-ratio-gdp-comparison" },
      { label: "Follow the budget", title: "Tracing the Yeosu Island Expo's contracts", description: "Connect tender notices with contract records.", to: "/columns/yeosu-island-expo-procurement-ledger" },
      { label: "Examine enterprise", title: "A maternity hospital faces a steep inheritance tax", description: "Distinguish sham businesses from continuing ones.", to: "/briefings/hospital-inheritance-tax-maternity-care" },
      { label: "Examine language", title: "When words turn citizens into enemies", description: "Look beyond partisan labels to the people affected.", to: "/columns/words-turn-citizens-into-enemies" },
    ],
    standardKicker: "OUR STANDARD",
    standardTitle: "What guides SEED",
    standardLead: "We defend the rule of law, separated powers, freedom of expression, enterprise and an independent civil society.",
    standards: [
      "We distinguish verified facts from our own judgments.",
      "We hold every center of power to the same standard.",
      "We leave evidence that citizens can check for themselves.",
    ],
    values: ["Rule of law", "Separated powers", "Free expression", "Enterprise", "Independent civil society"],
    statement: "Read our founding statement",
    contributors: "Meet the contributors",
    joinKicker: "GROW WITH SEED VOICE",
    joinTitle: "Help a small question grow",
    joinLead: "Read a story, share a record we missed, or subscribe to SEED LETTER. Together we can build a record citizens can check.",
    read: "Read stories",
    tip: "Send a tip",
    characterAlt: "Siya, SEED's character, holding a pen",
    characterBubble: "Let's check together!",
  },
};

const experienceIcons = [BookOpenText, FileSearch, MessageSquareText];
const questionColors = ["bg-[#fff0e3]", "bg-[#e7f1d5]", "bg-[#e4f1f3]"];
const experienceColors = ["bg-[#dcefa9]", "bg-[#f6ad7e]", "bg-[#d9eff3]"];

export default function About() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="bg-[#fffaf0] text-green-deep">
      <header className="overflow-hidden bg-[linear-gradient(135deg,#f7ecc2_0%,#f9f2d9_55%,#e4f0cf_100%)]">
        <div className="container-page grid min-h-[540px] items-center gap-5 py-14 lg:grid-cols-[1.13fr_.87fr] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <p className="text-xs font-extrabold tracking-[.2em] text-green-mid">{content.kicker}</p>
            <h1 className="mt-4 text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[1.13] tracking-[-.065em]">{content.title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-green-deep/85 sm:text-lg">{content.lead}</p>
            <p className="mt-5 max-w-2xl font-extrabold leading-7">{content.identity}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/news" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-green-deep px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-lg">{content.readToday}<ArrowUpRight size={17}/></Link>
              <Link to="/account?mode=signup" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-green-deep bg-white px-6 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 hover:shadow-lg">{content.subscribe}<ArrowUpRight size={17}/></Link>
            </div>
          </div>
          <div className="relative order-first mx-auto grid h-72 w-72 place-items-center lg:order-last lg:h-[420px] lg:w-[420px]">
            <div className="absolute inset-2 rounded-full bg-[#dceba9] shadow-[inset_-18px_-18px_0_rgba(39,89,66,.07),0_20px_44px_rgba(30,65,51,.11)]" />
            <img src={`${import.meta.env.BASE_URL}images/seed-character/seed-12-writing.png`} alt={content.characterAlt} className="relative z-10 h-[82%] w-[82%] object-contain drop-shadow-[0_18px_12px_rgba(30,70,44,.16)]" />
            <div className="absolute right-0 top-3 z-20 rotate-6 rounded-2xl border border-green-deep bg-white px-4 py-2 text-xs font-extrabold shadow-[6px_6px_0_#f6a877] sm:text-sm">{content.characterBubble}</div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white py-16 sm:py-24">
          <div className="container-page max-w-6xl">
            <p className="section-kicker">{content.questionsKicker}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{content.questionsTitle}</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {content.questions.map((question, index) => (
                <article key={question.label} className={`${questionColors[index]} flex min-h-44 flex-col justify-between rounded-3xl border border-green-deep/10 p-6 shadow-[0_16px_34px_rgba(30,65,51,.09)] sm:p-8`}>
                  <p className="text-xs font-extrabold tracking-widest text-green-deep/65">{question.label}</p>
                  <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-[-.035em]">“{question.text}”</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5ea] py-16 sm:py-24">
          <div className="container-page max-w-6xl">
            <p className="section-kicker">{content.experienceKicker}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{content.experienceTitle}</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {content.experiences.map((item, index) => {
                const Icon = experienceIcons[index];
                return <article key={item.title} className="flex min-h-80 flex-col rounded-3xl bg-white p-7 shadow-[0_20px_44px_rgba(30,65,51,.1)]">
                  <div className={`${experienceColors[index]} grid size-14 place-items-center rounded-2xl`}><Icon size={27} aria-hidden="true" /></div>
                  <h3 className="mt-6 text-2xl font-extrabold leading-snug tracking-[-.04em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-charcoal/70">{item.description}</p>
                  <Link to={item.to} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold underline underline-offset-4">{item.link}<ArrowUpRight size={15}/></Link>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-green-deep py-16 text-white sm:py-24">
          <div className="container-page max-w-6xl">
            <p className="text-xs font-extrabold tracking-[.2em] text-[#c5ebad]">{content.storiesKicker}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{content.storiesTitle}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">{content.storiesLead}</p>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {content.stories.map((story) => <Link key={story.to} to={story.to} className="flex min-h-52 flex-col rounded-3xl border border-white/25 bg-white/10 p-7 transition hover:-translate-y-1 hover:bg-white/20">
                <span className="text-xs font-extrabold text-[#c5ebad]">{story.label}</span>
                <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-[-.035em] sm:text-2xl">{story.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm text-white/75">{story.description}<ArrowUpRight size={15}/></span>
              </Link>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="container-page grid max-w-6xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="section-kicker">{content.standardKicker}</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{content.standardTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/75">{content.standardLead}</p>
              <div className="mt-6 flex flex-wrap gap-2">{content.values.map(value => <span key={value} className="rounded-full bg-[#e7f1d5] px-3 py-1.5 text-xs font-bold">{value}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link to="/founding-statement" className="inline-flex items-center gap-2 text-sm font-extrabold underline underline-offset-4">{content.statement}<ArrowRight size={16}/></Link>
                <Link to="/publisher-message" className="inline-flex items-center gap-2 text-sm font-extrabold underline underline-offset-4">{content.contributors}<ArrowRight size={16}/></Link>
              </div>
            </div>
            <ul className="grid content-start gap-3">
              {content.standards.map((standard, index) => <li key={standard} className="flex items-start gap-4 rounded-2xl border-l-4 border-[#a6c86b] bg-[#f3f6ec] px-5 py-5 font-bold leading-7">
                {index === 0 ? <ShieldCheck className="mt-0.5 shrink-0 text-green-mid" size={23} /> : index === 1 ? <Scale className="mt-0.5 shrink-0 text-green-mid" size={23} /> : <FileSearch className="mt-0.5 shrink-0 text-green-mid" size={23} />}
                {standard}
              </li>)}
            </ul>
          </div>
        </section>

        <section className="bg-[#f6a877] py-16 sm:py-20">
          <div className="container-page grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Sprout size={29} aria-hidden="true" />
              <p className="mt-3 text-xs font-extrabold tracking-[.2em]">{content.joinKicker}</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{content.joinTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8">{content.joinLead}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:max-w-80">
              <Link to="/news" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-green-deep bg-white px-5 py-3 text-sm font-extrabold">{content.read}<ArrowUpRight size={16}/></Link>
              <a href="mailto:seedvoicekr@gmail.com" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-green-deep bg-white px-5 py-3 text-sm font-extrabold">{content.tip}<ArrowUpRight size={16}/></a>
              <Link to="/account?mode=signup" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-green-deep px-5 py-3 text-sm font-extrabold text-white">{content.subscribe}<ArrowUpRight size={16}/></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
