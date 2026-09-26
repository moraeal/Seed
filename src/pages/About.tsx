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
    title: <>내 삶에 닿는 뉴스,<br /><span className="text-[#bd613d]">씨앗과 함께 읽어요.</span></>,
    lead: "세금이 어디에 쓰이는지, 동네 병원의 변화가 진료에 어떤 영향을 줄지, 뉴스 속 숫자가 왜 다르게 보이는지 궁금할 때가 있죠. 씨앗의 소리는 흩어진 자료를 찾아 쉬운 말로 풀고, 그 일이 우리 생활과 어떻게 이어지는지 함께 살핍니다.",
    identity: "어려운 뉴스를 내 삶의 질문으로 바꾸는 독립 시민저널입니다.",
    readToday: "오늘의 기사 읽기",
    questionsKicker: "MY LIFE, MY QUESTIONS",
    questionsTitle: "이런 궁금증, 그냥 넘기지 마세요",
    questions: [
      { label: "01 · 세금", text: "내가 낸 세금, 그 공공사업에는 어떻게 쓰였을까?" },
      { label: "02 · 의료", text: "동네 병원이 어려워지면 우리 가족의 진료는 어떻게 될까?" },
      { label: "03 · 뉴스", text: "서로 다른 숫자를 내놓는 기사, 무엇을 비교해야 할까?" },
    ],
    experienceKicker: "HOW TO READ SEED VOICE",
    experienceTitle: "씨앗이 궁금증을 풀어드릴게요",
    experiences: [
      { title: "바쁜 날에도 핵심부터", description: "브리핑에서 무슨 일이 있었는지 먼저 읽어보세요. 법과 정책 이야기가 내 생활과 만나는 지점도 짚어드립니다.", link: "브리핑 읽기", to: "/briefings" },
      { title: "내 세금의 쓰임까지", description: "시민감시는 공공사업의 예산과 계약 자료를 따라갑니다. 발표 뒤에 놓인 숫자와 기록을 함께 확인해보세요.", link: "시민감시 읽기", to: "/monitoring" },
      { title: "낯선 말도 내 말로", description: "‘공익’이나 ‘개혁’이라는 말이 실제로 누구에게 어떤 변화를 만드는지, 시민언어와 칼럼에서 쉽게 생각해봅니다.", link: "시민언어 읽기", to: "/seed-language" },
    ],
    storiesKicker: "START READING",
    storiesTitle: "이 이야기부터 읽어보세요",
    storiesLead: "숫자와 제도가 내 일상과 연결되는 순간을, 실제 기사에서 만나보세요.",
    stories: [
      { label: "뉴스의 숫자가 헷갈릴 때", title: "나랏빚 106조 늘었는데 채무비율은 하락?", description: "서로 다른 기준의 숫자를 어떻게 읽을까요?", to: "/news/national-debt-ratio-gdp-comparison" },
      { label: "내 세금의 쓰임이 궁금할 때", title: "여수섬박람회 돈의 흐름을 다시 세다", description: "공고와 계약 자료를 따라가 봅니다.", to: "/columns/yeosu-island-expo-procurement-ledger" },
      { label: "동네 의료가 걱정될 때", title: "상속세 40억원이 330억원으로", description: "병원의 계속 운영과 진료를 함께 생각합니다.", to: "/briefings/hospital-inheritance-tax-maternity-care" },
      { label: "말 때문에 사람이 가려질 때", title: "말이 시민을 적으로 만든다", description: "진영의 이름보다 사람을 먼저 봅니다.", to: "/columns/words-turn-citizens-into-enemies" },
    ],
    standardKicker: "OUR STANDARD",
    standardTitle: "씨앗의 기준",
    standardLead: "내 삶에 닿는 기사일수록 사실과 의견을 분명히 나누고, 누구나 다시 살펴볼 수 있는 근거를 남기겠습니다.",
    standards: [
      "확인된 사실과 씨앗의 판단을 구분합니다.",
      "권한을 가진 곳에는 같은 기준으로 책임을 묻습니다.",
      "시민이 다시 확인할 수 있는 근거를 남깁니다.",
    ],
    values: ["법의 지배", "권력분립", "표현의 자유", "기업의 도전", "시민사회의 독립"],
    statement: "씨앗의 취지문 읽기",
    contributors: "필진 소개",
    joinKicker: "GROW WITH SEED VOICE",
    joinTitle: "당신의 궁금증에서 시작합니다",
    joinLead: "읽다가 떠오른 질문이 있나요? 생활 속에서 발견한 자료나 놓치면 안 될 이야기를 알려주세요. 함께 확인하고 더 쉽게 전하겠습니다.",
    read: "기사 읽기",
    tip: "제보하기",
    citizensAlt: "햇살이 드는 동네에서 밝게 이야기를 나누는 시민들",
  },
  en: {
    kicker: "ABOUT SEED VOICE",
    title: <>News that touches your life,<br /><span className="text-[#bd613d]">made clearer together.</span></>,
    lead: "Wondering where your taxes go, how a neighborhood hospital's future may affect care, or why two news stories give different figures? SEED VOICE finds the records, explains them in plain language, and connects the story to everyday life.",
    identity: "An independent civic journal turning complicated news into questions you can use.",
    readToday: "Read today's stories",
    questionsKicker: "MY LIFE, MY QUESTIONS",
    questionsTitle: "Questions worth asking",
    questions: [
      { label: "01 · Taxes", text: "How was my tax money spent on that public project?" },
      { label: "02 · Health", text: "If a local hospital struggles, what happens to care for my family?" },
      { label: "03 · News", text: "When reports use different figures, what should I compare?" },
    ],
    experienceKicker: "HOW TO READ SEED VOICE",
    experienceTitle: "A clearer way into the story",
    experiences: [
      { title: "Start with the essentials", description: "Our briefings tell you what happened, then explain where laws and policies meet daily life.", link: "Read briefings", to: "/briefings" },
      { title: "See where your taxes went", description: "Civic Watch traces public budgets and contracts so you can check the records behind an announcement.", link: "Read Civic Watch", to: "/monitoring" },
      { title: "Make sense of big words", description: "Our essays ask what words like ‘public good’ and ‘reform’ mean for the choices real people have.", link: "Read civic language", to: "/seed-language" },
    ],
    storiesKicker: "START READING",
    storiesTitle: "Start with a story that speaks to you",
    storiesLead: "See how public figures and policies connect to everyday choices in these reported stories.",
    stories: [
      { label: "When figures don't add up", title: "Debt rises by 106 trillion won. Why does the ratio fall?", description: "Learn which figures are being compared.", to: "/news/national-debt-ratio-gdp-comparison" },
      { label: "When you wonder where taxes went", title: "Tracing the Yeosu Island Expo's contracts", description: "Follow the tenders and contracts.", to: "/columns/yeosu-island-expo-procurement-ledger" },
      { label: "When local care matters", title: "A maternity hospital faces a steep inheritance tax", description: "Consider what continuity means for staff and patients.", to: "/briefings/hospital-inheritance-tax-maternity-care" },
      { label: "When labels drown out people", title: "When words turn citizens into enemies", description: "Look at the people behind partisan labels.", to: "/columns/words-turn-citizens-into-enemies" },
    ],
    standardKicker: "OUR STANDARD",
    standardTitle: "What guides SEED",
    standardLead: "The closer a story is to your life, the more clearly we must separate facts from opinion and show the records behind our reporting.",
    standards: [
      "We distinguish verified facts from our own judgments.",
      "We hold every center of power to the same standard.",
      "We leave evidence that citizens can check for themselves.",
    ],
    values: ["Rule of law", "Separated powers", "Free expression", "Enterprise", "Independent civil society"],
    statement: "Read our founding statement",
    contributors: "Meet the contributors",
    joinKicker: "GROW WITH SEED VOICE",
    joinTitle: "It begins with your question",
    joinLead: "Have a question after reading? Share a record or an everyday story that deserves a closer look. We'll check it and explain what we find.",
    read: "Read stories",
    tip: "Send a tip",
    citizensAlt: "Neighbors talking together on a sunny day",
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
            </div>
          </div>
          <div className="relative order-first mx-auto w-full max-w-xl lg:order-last">
            <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-[#dceba9] sm:-inset-4" aria-hidden="true" />
            <img src={`${import.meta.env.BASE_URL}images/about-citizens.webp`} alt={content.citizensAlt} className="relative aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover shadow-[0_22px_45px_rgba(30,65,51,.16)]" />
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
                <article key={question.label} className={`${questionColors[index]} flex min-h-44 flex-col justify-between rounded-3xl border-2 border-green-deep/20 p-6 shadow-[8px_10px_0_rgba(34,79,56,.22),0_22px_38px_rgba(30,65,51,.18)] transition-transform duration-200 hover:-translate-y-1 sm:p-8`}>
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
                return <article key={item.title} className="flex min-h-80 flex-col rounded-3xl border-2 border-green-deep/10 bg-white p-7 shadow-[8px_10px_0_rgba(34,79,56,.18),0_22px_38px_rgba(30,65,51,.16)] transition-transform duration-200 hover:-translate-y-1">
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
              {content.stories.map((story) => <Link key={story.to} to={story.to} className="flex min-h-52 flex-col rounded-3xl border-2 border-white/40 bg-white/10 p-7 shadow-[8px_10px_0_rgba(188,225,170,.3),0_22px_38px_rgba(0,0,0,.22)] transition duration-200 hover:-translate-y-1 hover:bg-white/20">
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
              {content.standards.map((standard, index) => <li key={standard} className="flex items-start gap-4 rounded-2xl border-l-4 border-[#a6c86b] bg-[#f3f6ec] px-5 py-5 font-bold leading-7 shadow-[5px_6px_0_rgba(34,79,56,.16),0_14px_25px_rgba(30,65,51,.1)]">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
