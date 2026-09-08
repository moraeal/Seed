import { ArrowRight, BookOpenText, Eye, FileSearch, Languages, Scale, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

const copy = {
  ko: {
    kicker: "ABOUT SEED VOICE",
    title: "시민이 스스로 보고, 묻고, 판단할 수 있도록",
    lead: "씨앗의 소리는 자유의 영역을 넓히고, 기업의 도전과 혁신을 보호하며, 국가와 시민사회의 권력을 감시하는 독립 시민저널입니다.",
    introTitle: "더 많은 정보보다 더 나은 시민의 판단을 만듭니다",
    intro: [
      "우리는 매일 수많은 뉴스와 주장에 노출됩니다. 그러나 정보가 많아질수록 사실과 의견의 경계는 흐려지고, 진영이 정해준 언어가 시민 자신의 생각을 대신하기도 합니다.",
      "씨앗의 소리는 시민에게 결론을 대신 내려주는 미디어가 되려 하지 않습니다. 확인된 사실과 아직 확인되지 않은 주장을 구분하고, 제도와 정책이 우리의 세금·일자리·주거·자유에 어떤 영향을 주는지 생활의 언어로 설명합니다.",
      "국가만이 아니라 시민사회와 공익기관도 권력을 가질 수 있습니다. 씨앗의 소리는 어느 진영에도 시민의 이름을 독점할 권리를 주지 않고, 권한을 가진 모든 주체에게 투명성과 책임을 묻습니다.",
    ],
    contentsTitle: "네 개의 창으로 세상을 읽습니다",
    contentsLead: "같은 사건도 질문의 깊이와 독자의 필요에 따라 다른 형식으로 다룹니다.",
    contents: [
      { label: "씨앗의소리", english: "THE VOICE OF SEED", description: "자유·법치·책임과 시민의 관점에서 시대의 쟁점을 분명하게 논평합니다.", path: "/columns" },
      { label: "오늘의뉴스", english: "TODAY'S NEWS", description: "지금 알아야 할 사실을 빠르게 확인하고, 시민의 삶과 연결되는 핵심을 짚습니다.", path: "/news" },
      { label: "씨앗브리핑", english: "SEED CITIZEN BRIEFING", description: "복잡한 정책과 제도를 사실, 맥락, 관찰 지점과 씨드의 판단으로 깊이 설명합니다.", path: "/briefings" },
      { label: "씨앗언어", english: "SEED LANGUAGE", description: "진영이 독점한 시민사회의 말을 해체하고, 시민이 스스로 생각할 수 있는 언어로 다시 정의합니다.", path: "/seed-language" },
    ],
    standardTitle: "사실은 정확하게, 관점은 분명하게, 시민에게는 책임 있게",
    standards: [
      { title: "사실을 먼저 확인합니다", description: "공개 자료와 원문을 찾아 서로 다른 기록을 대조하고, 확인된 사실과 해석을 구분합니다." },
      { title: "관점을 숨기지 않습니다", description: "기계적 중립 뒤에 숨지 않고 자유, 자율, 법치, 책임이라는 기준으로 판단합니다." },
      { title: "권력을 두루 감시합니다", description: "정부와 정당뿐 아니라 시민단체, 공익기관, 언론처럼 시민의 이름으로 영향력을 행사하는 주체도 살핍니다." },
    ],
    aiTitle: "한 사람과 AI가 함께 만들지만, 판단과 책임은 사람이 집니다",
    ai: "씨앗의 소리는 한 사람이 AI와 협업해 운영하는 독립 시민미디어입니다. AI는 자료 탐색, 구조화, 교차검토와 제작을 돕지만 질문을 선택하고 관점을 세우며 최종 결과에 책임지는 주체는 발행인입니다. 오류가 발견되면 근거를 다시 확인하고 투명하게 고치겠습니다.",
    closingTitle: "작은 질문이 시민의 목소리로 자라도록",
    closing: "씨앗은 작고 불완전하지만 스스로 싹을 틔우고 성장할 가능성을 품고 있습니다. 씨앗의 소리는 독자가 누군가의 주장에 올라타는 데 머물지 않고, 자기 질문과 판단을 가진 시민으로 자라도록 돕는 미디어가 되겠습니다.",
    publisher: "발행인 인사말",
    statement: "창립취지 읽기",
  },
  en: {
    kicker: "ABOUT SEED VOICE",
    title: "Helping citizens see, question and judge for themselves",
    lead: "SEED VOICE is an independent civic journal that expands the sphere of freedom, protects enterprise and innovation, and watches power in both the state and civil society.",
    introTitle: "We seek better civic judgment, not simply more information",
    intro: [
      "We encounter an endless stream of news and argument every day. Yet more information can blur the boundary between fact and opinion, while partisan language begins to substitute for citizens’ own thinking.",
      "SEED VOICE does not aim to make decisions for its readers. We distinguish verified facts from unsettled claims and explain in everyday language how institutions and policies affect taxes, jobs, housing and freedom.",
      "Power exists beyond the state. Civic organizations and public-interest institutions can also accumulate influence. We grant no political camp a monopoly on the citizen’s name, and ask every holder of power for transparency and accountability.",
    ],
    contentsTitle: "Four windows on public life",
    contentsLead: "We use different formats according to the depth of the question and what readers need.",
    contents: [
      { label: "Voice of the Seed", english: "THE VOICE OF SEED", description: "Clear commentary on public issues through freedom, the rule of law, responsibility and civic agency.", path: "/columns" },
      { label: "Today's News", english: "TODAY'S NEWS", description: "A timely account of essential facts and why they matter in citizens’ daily lives.", path: "/news" },
      { label: "SEED Briefings", english: "SEED CITIZEN BRIEFING", description: "Deeper explanations of policy and institutions through facts, context, watch points and SEED’s judgment.", path: "/briefings" },
      { label: "SEED Language", english: "SEED LANGUAGE", description: "Reclaiming civic words captured by political camps so citizens can think in language of their own.", path: "/seed-language" },
    ],
    standardTitle: "Accurate in fact, clear in viewpoint, accountable to citizens",
    standards: [
      { title: "Facts come first", description: "We seek original materials, compare records and distinguish established facts from interpretation." },
      { title: "Our viewpoint is visible", description: "We do not hide behind mechanical neutrality; we judge through freedom, autonomy, the rule of law and responsibility." },
      { title: "We watch power wherever it grows", description: "Our scrutiny includes government and parties, but also civic groups, public-interest bodies and media that exercise influence in citizens’ names." },
    ],
    aiTitle: "One person works with AI; human judgment remains accountable",
    ai: "SEED VOICE is an independent civic publication run by one person working with AI. AI assists with research, structure, cross-checking and production. The publisher chooses the questions, forms the viewpoint and remains responsible for every result. When errors are found, we will recheck the evidence and correct them transparently.",
    closingTitle: "So a small question can grow into a civic voice",
    closing: "A seed is small and unfinished, yet carries the capacity to sprout and grow. SEED VOICE will help readers move beyond repeating someone else’s claims and grow as citizens with questions and judgments of their own.",
    publisher: "Publisher's Message",
    statement: "Read Our Founding Vision",
  },
};

const contentIcons = [Eye, FileSearch, BookOpenText, Languages];
const standardIcons = [FileSearch, Scale, Eye];

export default function About() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="bg-paper">
      <header className="relative overflow-hidden border-b border-green-deep/15 bg-green-deep py-12 text-white sm:py-16">
        <img src={`${import.meta.env.BASE_URL}images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png`} alt="" className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 object-contain opacity-15 sm:right-4 sm:h-80 sm:w-80" />
        <div className="container-page relative max-w-5xl">
          <p className="text-xs font-extrabold tracking-[.2em] text-gold-light">{content.kicker}</p>
          <h1 className="editorial-title mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl border-l-2 border-gold pl-6 text-lg leading-8 text-white/78 sm:text-xl">{content.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/publisher-message" className="button-light">{content.publisher}<ArrowRight size={16}/></Link>
            <Link to="/founding-statement" className="button-outline-light">{content.statement}</Link>
          </div>
        </div>
      </header>

      <main className="container-page max-w-5xl py-10 sm:py-14">
        <section className="grid gap-7 border-b border-green-deep/15 pb-10 sm:pb-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-12">
          <div>
            <p className="section-kicker">WHY SEED VOICE</p>
            <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{content.introTitle}</h2>
          </div>
          <div className="space-y-4 text-[17px] leading-[1.8] text-charcoal/72">
            {content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <p className="section-kicker">WHAT WE PUBLISH</p>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{content.contentsTitle}</h2>
          <p className="mt-3 text-base leading-7 text-charcoal/60">{content.contentsLead}</p>
          <div className="mt-7 grid gap-px overflow-hidden border border-green-deep/15 bg-green-deep/15 md:grid-cols-2">
            {content.contents.map((item, index) => {
              const Icon = contentIcons[index];
              return <Link key={item.path} to={item.path} className="group bg-white p-6 transition hover:bg-green-pale/70 sm:p-7">
                <Icon size={24} className="text-green-mid" />
                <p className="mt-5 text-[10px] font-extrabold tracking-[.16em] text-green-deep/55">{item.english}</p>
                <h3 className="editorial-title mt-1.5 text-2xl font-bold text-navy transition group-hover:text-green-mid">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/62">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-green-deep">{language === "ko" ? "콘텐츠 보기" : "Explore"}<ArrowRight size={14}/></span>
              </Link>;
            })}
          </div>
        </section>

        <section className="border-y-2 border-green-deep bg-[#F1F2EC] px-6 py-9 sm:px-9 sm:py-11">
          <p className="section-kicker">EDITORIAL STANDARD</p>
          <h2 className="editorial-title mt-3 max-w-4xl text-3xl font-bold leading-tight text-navy sm:text-4xl">{content.standardTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {content.standards.map((item, index) => {
              const Icon = standardIcons[index];
              return <article key={item.title} className="border-t border-green-deep/20 pt-5">
                <Icon size={22} className="text-gold" />
                <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/62">{item.description}</p>
              </article>;
            })}
          </div>
        </section>

        <section className="grid gap-7 py-10 sm:py-14 lg:grid-cols-2 lg:gap-12">
          <article>
            <Sprout size={26} className="text-green-mid" />
            <h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy">{content.aiTitle}</h2>
            <p className="mt-4 text-base leading-8 text-charcoal/68">{content.ai}</p>
          </article>
          <article className="bg-green-deep p-7 text-white sm:p-9">
            <p className="text-xs font-extrabold tracking-[.18em] text-gold-light">OUR PROMISE</p>
            <h2 className="editorial-title mt-4 text-3xl font-bold leading-tight">{content.closingTitle}</h2>
            <p className="mt-4 text-base leading-8 text-white/72">{content.closing}</p>
            <Link to="/publisher-message" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-gold-light">{content.publisher}<ArrowRight size={16}/></Link>
          </article>
        </section>
      </main>
    </div>
  );
}
