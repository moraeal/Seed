import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BookOpenText,
  Clock3,
  Database,
  FileSearch,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../i18n";
import TipDialog from "../components/TipDialog";

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
    featuresKicker: "WHAT MAKES SEED DIFFERENT",
    featuresTitle: "새로운 법과 세금, 달라지는 이슈까지 한눈에",
    featuresLead: "발표 한 번으로 끝나지 않는 이야기. 씨앗은 새 자료를 확인하고 변화 과정을 이어서 보여드립니다.",
    policyEyebrow: "01 · AI 시민감시",
    policyTitle: "법과 세금이 바뀌면, 내 삶에는 무슨 일이 생길까요?",
    policyDescription: "AI를 활용한 감시 시스템이 국회와 정부의 공개 자료에서 새 법안과 세금정책을 정기적으로 확인합니다. 중요한 변화를 골라 시민의 부담과 선택에 어떤 영향을 줄지 쉬운 말로 설명합니다.",
    policyFlow: ["국회·정부 공개 자료", "자동 확인과 선별", "생활에 미치는 영향"],
    legislationLink: "입법감시 보기",
    taxLink: "세금감시 보기",
    timelineEyebrow: "02 · 핫이슈 추적",
    timelineTitle: "오늘의 뉴스가 바뀌면, 어제의 이야기에도 이어 붙입니다",
    timelineDescription: "주목받는 이슈의 첫 보도부터 새로 확인된 사실과 남은 쟁점까지 시간순으로 모읍니다. 지금 어디까지 진행됐는지, 무엇을 더 지켜봐야 하는지 한눈에 볼 수 있습니다.",
    timelineSteps: ["처음 알려진 사실", "새로 확인된 변화", "지금 남은 쟁점"],
    issueLink: "핫이슈 타임라인 보기",
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
    featuresKicker: "WHAT MAKES SEED DIFFERENT",
    featuresTitle: "New laws, tax policies and evolving issues at a glance",
    featuresLead: "The story does not end with an announcement. SEED checks new records and follows what changes next.",
    policyEyebrow: "01 · AI-powered civic watch",
    policyTitle: "What will a new law or tax policy mean for your life?",
    policyDescription: "Our AI-assisted watch regularly checks public records from the National Assembly and government for new bills and tax measures. We select consequential changes and explain their effects on people's costs and choices in plain language.",
    policyFlow: ["Public records", "Automated checks and selection", "Impact on daily life"],
    legislationLink: "Explore Legislative Watch",
    taxLink: "Explore Tax Watch",
    timelineEyebrow: "02 · Issue tracking",
    timelineTitle: "When the news changes, follow the story forward",
    timelineDescription: "We put the first report, newly confirmed facts and unresolved questions in chronological order. See where an issue stands now and what still needs checking.",
    timelineSteps: ["First known facts", "New developments", "Questions still open"],
    issueLink: "Explore hot issue timelines",
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
    tip: "Send a tip",
    citizensAlt: "Neighbors talking together on a sunny day",
  },
};

const experienceIcons = [BookOpenText, FileSearch, MessageSquareText];
const questionColors = ["bg-[#f8e9d4]", "bg-[#f3e4c9]", "bg-[#f7ebd8]"];
const woodTextureUrl = `${import.meta.env.BASE_URL}images/about-wood-grain.svg`;
const experienceColors = ["bg-[#dcefa9]", "bg-[#f6ad7e]", "bg-[#d9eff3]"];

export default function About() {
  const { language } = useLanguage();
  const [tipOpen, setTipOpen] = useState(false);
  const content = copy[language];

  return (
    <div className="bg-[#fffaf0] text-green-deep">
      <header className="overflow-hidden bg-[linear-gradient(135deg,#f7ecc2_0%,#f9f2d9_55%,#e4f0cf_100%)]">
        <div className="container-page grid min-h-[540px] items-center gap-5 py-14 lg:grid-cols-[1.13fr_.87fr] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <p className="text-xs font-extrabold tracking-[.2em] text-green-mid">{content.kicker}</p>
            <h1 className="mt-4 text-[clamp(2.15rem,4.4vw,4.25rem)] font-black leading-[1.18] tracking-[-.055em]">{content.title}</h1>
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
                <article key={question.label} className={`${questionColors[index]} relative isolate flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#a67b50] p-6 shadow-[8px_10px_0_rgba(87,59,34,.26),0_22px_38px_rgba(54,43,29,.2)] transition-transform duration-200 hover:-translate-y-1 sm:p-8`} style={{ backgroundImage: `url(${woodTextureUrl})`, backgroundSize: "600px 340px" }}>
                  <span className="pointer-events-none absolute right-5 top-5 size-2 rounded-full bg-[#b58b59] shadow-[inset_1px_1px_2px_rgba(72,45,19,.55),1px_1px_0_rgba(255,255,255,.8)]" aria-hidden="true" />
                  <span className="pointer-events-none absolute bottom-5 left-5 size-2 rounded-full bg-[#b58b59] shadow-[inset_1px_1px_2px_rgba(72,45,19,.55),1px_1px_0_rgba(255,255,255,.8)]" aria-hidden="true" />
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
                return <article key={item.title} className="flex min-h-80 flex-col rounded-2xl border-2 border-[#b59c74] bg-[#fff9ed] p-7 shadow-[8px_10px_0_rgba(90,68,42,.18),0_22px_38px_rgba(30,65,51,.16)] transition-transform duration-200 hover:-translate-y-1" style={{ backgroundImage: `linear-gradient(rgba(255,250,239,.74),rgba(255,250,239,.74)),url(${woodTextureUrl})`, backgroundSize: "auto, 600px 340px" }}>
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
            <p className="text-xs font-extrabold tracking-[.2em] text-[#c5ebad]">{content.featuresKicker}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-5xl">{content.featuresTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{content.featuresLead}</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="flex flex-col rounded-[1.75rem] border border-[#c5ebad]/40 bg-[#f7f8e9] p-6 text-green-deep shadow-[9px_12px_0_rgba(0,0,0,.22)] sm:p-9">
                <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-[#dcefa9]"><Bot size={27} aria-hidden="true" /></span><span className="text-sm font-extrabold text-green-mid">{content.policyEyebrow}</span></div>
                <h3 className="mt-5 text-2xl font-extrabold leading-snug tracking-[-.035em] sm:text-3xl">{content.policyTitle}</h3>
                <p className="mt-4 text-base leading-8 text-charcoal/75">{content.policyDescription}</p>
                <div className="mt-7 rounded-2xl border border-green-deep/15 bg-white p-5" aria-label={content.policyFlow.join(" → ")}>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {content.policyFlow.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-xl bg-[#edf4db] px-4 py-4 text-sm font-extrabold leading-6 sm:flex-col sm:items-start">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-green-deep text-white">{index === 0 ? <Database size={17} aria-hidden="true" /> : index === 1 ? <Bot size={17} aria-hidden="true" /> : <FileSearch size={17} aria-hidden="true" />}</span>{step}
                    </div>)}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-7">
                  <Link to="/monitoring/legislation#today-bills" className="inline-flex items-center gap-1.5 text-sm font-extrabold underline underline-offset-4">{content.legislationLink}<ArrowUpRight size={16}/></Link>
                  <Link to="/monitoring/tax#today-tax-policies" className="inline-flex items-center gap-1.5 text-sm font-extrabold underline underline-offset-4">{content.taxLink}<ArrowUpRight size={16}/></Link>
                </div>
              </article>
              <article className="flex flex-col rounded-[1.75rem] border border-[#c5ebad]/40 bg-[#e8f2f4] p-6 text-green-deep shadow-[9px_12px_0_rgba(0,0,0,.22)] sm:p-9">
                <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-[#c3e3e9]"><Clock3 size={27} aria-hidden="true" /></span><span className="text-sm font-extrabold text-green-mid">{content.timelineEyebrow}</span></div>
                <h3 className="mt-5 text-2xl font-extrabold leading-snug tracking-[-.035em] sm:text-3xl">{content.timelineTitle}</h3>
                <p className="mt-4 text-base leading-8 text-charcoal/75">{content.timelineDescription}</p>
                <ol className="relative mt-7 space-y-0 rounded-2xl border border-green-deep/15 bg-white px-5 py-3">
                  {content.timelineSteps.map((step, index) => <li key={step} className="relative flex min-h-16 items-center gap-4 border-l-2 border-[#9bc7b0] py-3 pl-5 text-sm font-extrabold leading-6 last:border-transparent">
                    <span className="absolute -left-[9px] top-1/2 size-4 -translate-y-1/2 rounded-full border-[3px] border-green-deep bg-white" aria-hidden="true" />
                    <span className="text-green-mid">0{index + 1}</span>{step}
                  </li>)}
                </ol>
                <Link to="/monitoring/yeosu-world-island-expo-tracker#issue-timeline" className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-extrabold underline underline-offset-4">{content.issueLink}<ArrowUpRight size={16}/></Link>
              </article>
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
              {content.standards.map((standard, index) => <li key={standard} className="flex items-start gap-4 rounded-xl border-l-4 border-[#a6c86b] bg-[#f3f6ec] px-5 py-5 font-bold leading-7 shadow-[5px_6px_0_rgba(34,79,56,.16),0_14px_25px_rgba(30,65,51,.1)]" style={{ backgroundImage: `linear-gradient(rgba(243,246,236,.85),rgba(243,246,236,.85)),url(${woodTextureUrl})`, backgroundSize: "auto, 600px 340px" }}>
                {index === 0 ? <ShieldCheck className="mt-0.5 shrink-0 text-green-mid" size={23} /> : index === 1 ? <Scale className="mt-0.5 shrink-0 text-green-mid" size={23} /> : <FileSearch className="mt-0.5 shrink-0 text-green-mid" size={23} />}
                {standard}
              </li>)}
            </ul>
          </div>
        </section>

        <section className="overflow-hidden bg-[#f6a877] py-12 sm:py-16">
          <div className="container-page grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-12 lg:gap-16">
            <img
              src={`${import.meta.env.BASE_URL}images/about-reader-tip.webp`}
              alt={language === "ko" ? "자료를 함께 살펴보며 이야기를 나누는 시민들" : "Citizens discussing a document together"}
              loading="lazy"
              className="mx-auto w-full max-w-[350px] self-end object-contain md:max-w-[440px]"
            />
            <div className="pb-4 md:py-6">
              <Sprout size={29} aria-hidden="true" />
              <p className="mt-3 text-xs font-extrabold tracking-[.2em]">{content.joinKicker}</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{content.joinTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8">{content.joinLead}</p>
              <button type="button" onClick={() => setTipOpen(true)} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-green-deep bg-white px-6 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 hover:shadow-lg">{content.tip}<ArrowUpRight size={16}/></button>
            </div>
          </div>
        </section>
      </main>
      <TipDialog open={tipOpen} onClose={() => setTipOpen(false)} language={language} />
    </div>
  );
}
