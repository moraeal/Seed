import { ArrowUpRight, BookOpenText, HeartHandshake, RefreshCw, ScanSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

const copy = {
  ko: {
    eyebrow: "WHY SEED?",
    title: "왜 시민을 ‘씨앗’이라고 부를까요?",
    lead: "시민은 이미 완성된 이름처럼 들립니다. 씨앗은 조금 다릅니다. 아직 작아도 스스로 자라고, 옆의 씨앗과 만나 더 넓은 세상을 바꿀 수 있으니까요.",
    opening: "동네의 작은 불편을 그냥 넘기지 않고 ‘왜 이럴까?’ 묻는 사람. 뉴스의 숫자를 한 번 더 확인하는 사람. 우리는 그런 사람을 씨앗이라고 부릅니다.",
    originLabel: "씨알에서 씨앗으로",
    originTitle: "한 사람의 생각이 세상을 움직입니다",
    origin: [
      "함석헌 선생은 평범한 사람을 역사의 주체로 보며 ‘씨알’이라는 말을 썼습니다. 남이 시키는 대로만 움직이는 사람이 아니라, 스스로 생각하고 서로 이어지는 사람을 믿었습니다.",
      "씨앗의 소리는 그 생각에서 배웁니다. 다만 ‘씨앗’은 우리가 오늘의 생활에서 새로 쓰는 이름입니다. 세금 고지서를 보다가 든 의문, 동네에서 본 불편, 기사 한 줄에 대한 질문이 자라 공적인 목소리가 될 수 있다는 뜻입니다.",
    ],
    seedLabel: "S · E · E · D",
    seedTitle: "씨앗이 자라는 네 가지 방법",
    seedLead: "영어 이름 SEED에도 우리가 지키려는 태도를 담았습니다. 어려운 약속이 아닙니다. 이렇게 해보자는 이야기입니다.",
    principles: [
      { letter: "S", english: "Subject", title: "주체성", example: "‘누가 해결해 주겠지’ 하고 기다리기보다, 내가 겪은 문제를 먼저 묻습니다.", icon: ScanSearch },
      { letter: "E", english: "Ethics", title: "윤리성", example: "내 편의 잘못에도 같은 기준을 댑니다. 그래야 서로를 믿을 수 있습니다.", icon: HeartHandshake },
      { letter: "E", english: "Evolution", title: "진화성", example: "처음 생각이 틀릴 수도 있습니다. 새 사실을 만나면 배우고 고칩니다.", icon: RefreshCw },
      { letter: "D", english: "Duty", title: "책임성", example: "문제를 말한 뒤에도 결과를 확인하고, 알게 된 것을 다른 사람과 나눕니다.", icon: BookOpenText },
    ],
    aiLabel: "AI 시대의 시민",
    aiTitle: "AI가 똑똑해질수록, 시민도 더 크게 자라야 합니다",
    ai: [
      "이제 한 사람도 AI의 도움을 받아 자료를 찾고, 복잡한 법안을 읽고, 자신의 생각을 널리 전할 수 있습니다. 예전에는 큰 조직만 할 수 있던 일을 개인이 해볼 수 있는 시대입니다.",
      "그 힘에는 위험도 따릅니다. 확인하지 않은 말을 순식간에 퍼뜨리거나, 편리한 답에 판단을 맡기면 한 사람의 실수와 편견도 훨씬 멀리 번집니다. 도구가 커진 만큼 사실을 확인하고 다른 사람의 자유를 존중하는 태도가 필요합니다.",
      "씨앗이 말하는 ‘큰 시민’은 목소리만 큰 사람이 아닙니다. 더 많이 알 수 있는 힘을 스스로 판단하고 책임지는 힘으로 키운 사람입니다. 그런 시민이 많아질수록 권력도 함부로 행동하기 어려워지고, 우리 모두가 더 자유롭고 공정하게 살 수 있습니다.",
    ],
    siyaLabel: "씨야를 소개합니다",
    siyaTitle: "씨야 머리 위의 두 잎은 자유와 공정입니다",
    siya: "한쪽 잎은 누구나 생각하고 말하고 도전할 자유, 다른 잎은 누구에게나 같은 기준을 적용하는 공정입니다. 둘 중 하나만 자라면 씨앗은 곧게 설 수 없습니다. 씨야는 기사를 함께 읽으며 그 두 잎을 기억하자는 작은 친구입니다.",
    closing: "작은 질문 하나가 자라 시민의 목소리가 됩니다.",
    back: "씨앗의 소리 소개로 돌아가기",
    source: "함석헌의 씨알 사상 더 알아보기",
    imageAlt: "한 사람의 질문에서 여러 시민의 대화로 이어지는 수채화",
    siyaAlt: "자유와 공정을 상징하는 두 잎을 가진 씨야",
  },
  en: {
    eyebrow: "WHY SEED?",
    title: "Why do we call a citizen a ‘seed’?",
    lead: "Citizen can sound like a finished identity. A seed is still growing. Small as it is, it can take root beside others and change the ground around it.",
    opening: "Someone notices a problem on their street and asks why. Someone checks a number in the news once more. We call that person a seed.",
    originLabel: "From ssial to seed",
    originTitle: "One person's thought can move a society",
    origin: [
      "Korean thinker Ham Seok-heon used ssial, or ‘seed people,’ for ordinary people he saw as agents of history: people who think for themselves and stand together, rather than merely follow orders.",
      "We learn from that idea, while using ‘seed’ in our own way today. A question about a tax bill, a problem in the neighborhood or a line in a news story can grow into a public voice.",
    ],
    seedLabel: "S · E · E · D",
    seedTitle: "Four ways a seed grows",
    seedLead: "The English name SEED holds four habits we want to practice. They begin with ordinary choices.",
    principles: [
      { letter: "S", english: "Subject", title: "Agency", example: "Instead of waiting for someone else, I begin by asking about a problem I have seen.", icon: ScanSearch },
      { letter: "E", english: "Ethics", title: "Ethics", example: "I apply the same standard when my own side gets something wrong. Trust starts there.", icon: HeartHandshake },
      { letter: "E", english: "Evolution", title: "Learning", example: "My first answer may be wrong. When new facts arrive, I learn and change my mind.", icon: RefreshCw },
      { letter: "D", english: "Duty", title: "Responsibility", example: "After raising a problem, I follow the result and share what I learn.", icon: BookOpenText },
    ],
    aiLabel: "Citizens in the age of AI",
    aiTitle: "As AI grows more capable, citizens must grow with it",
    ai: [
      "With AI, one person can search records, read a complex bill and share an idea widely. Work that once required a large organization is within an individual's reach.",
      "That reach also magnifies mistakes. An unchecked claim can spread quickly, and an easy answer can replace our own judgment. Greater tools call for better fact checking and more respect for other people's freedom.",
      "A ‘larger citizen’ is not simply a louder one. It is someone who turns new capacity into independent judgment and responsibility. When more people do that, power faces closer scrutiny and everyone has a better chance to live freely and fairly.",
    ],
    siyaLabel: "Meet Siya",
    siyaTitle: "Siya's two leaves stand for freedom and fairness",
    siya: "One leaf is the freedom to think, speak and try. The other is fairness: applying the same standard to everyone. A seed needs both to grow upright. Siya is our small reading companion and a reminder to keep both leaves in view.",
    closing: "A small question can grow into a citizen's voice.",
    back: "Back to SEED VOICE",
    source: "Learn about Ham Seok-heon's ssial thought",
    imageAlt: "Watercolor of one person's question growing into a conversation among neighbors",
    siyaAlt: "Siya with two leaves representing freedom and fairness",
  },
};

export default function WhySeed() {
  const { language } = useLanguage();
  const content = copy[language];
  const imageBase = import.meta.env.BASE_URL;

  return (
    <article className="bg-[#fffaf0] text-green-deep">
      <header className="bg-[linear-gradient(135deg,#f7ecc2_0%,#f9f2d9_58%,#e4f0cf_100%)]">
        <div className="container-page grid max-w-6xl items-center gap-8 py-14 sm:py-20 md:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="section-kicker">{content.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,4.4vw,4.25rem)] font-black leading-[1.2] tracking-[-.055em]">{content.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-green-deep/85">{content.lead}</p>
            <p className="mt-5 max-w-2xl text-base font-bold leading-8">{content.opening}</p>
          </div>
          <div className="mx-auto w-full max-w-[350px] rounded-[2.5rem] bg-white/70 p-5 shadow-[10px_14px_0_rgba(84,121,57,.16),0_24px_45px_rgba(30,65,51,.12)]">
            <img src={`${imageBase}images/seed-character/seed-about-greeting.webp`} alt={content.siyaAlt} className="aspect-square w-full object-contain" width="640" height="640" />
          </div>
        </div>
      </header>

      <div className="container-page max-w-6xl py-16 sm:py-24">
        <section className="grid items-center gap-8 md:grid-cols-[.85fr_1.15fr] md:gap-14" aria-labelledby="seed-origin">
          <div>
            <p className="section-kicker">{content.originLabel}</p>
            <h2 id="seed-origin" className="mt-3 text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl">{content.originTitle}</h2>
            {content.origin.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-charcoal/80">{paragraph}</p>)}
            <a href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001879950" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-4">{content.source}<ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <img src={`${imageBase}images/about/seed-journal-origin-watercolor.webp`} alt={content.imageAlt} loading="lazy" className="w-full rounded-[1.75rem] object-cover shadow-[9px_12px_0_rgba(41,86,59,.16)]" />
        </section>
      </div>

      <section className="bg-[#edf4df] py-16 sm:py-24" aria-labelledby="seed-principles">
        <div className="container-page max-w-6xl">
          <p className="section-kicker">{content.seedLabel}</p>
          <h2 id="seed-principles" className="mt-3 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">{content.seedTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8">{content.seedLead}</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.principles.map(({ letter, english, title, example, icon: Icon }, index) => <div key={`${english}-${index}`} className="rounded-2xl border border-green-deep/15 bg-white p-6 shadow-[6px_8px_0_rgba(44,90,58,.12)]">
              <span className="flex items-center justify-between text-green-mid"><span className="text-4xl font-black">{letter}</span><Icon size={26} aria-hidden="true" /></span>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-green-mid">{english}</p>
              <h3 className="mt-1 text-xl font-extrabold">{title}</h3>
              <p className="mt-4 text-base leading-7 text-charcoal/80">{example}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="seed-ai">
        <div className="container-page max-w-4xl">
          <p className="section-kicker">{content.aiLabel}</p>
          <h2 id="seed-ai" className="mt-3 text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl">{content.aiTitle}</h2>
          {content.ai.map((paragraph) => <p key={paragraph} className="mt-6 text-base leading-8 text-charcoal/85 sm:text-lg sm:leading-9">{paragraph}</p>)}
        </div>
      </section>

      <section className="bg-green-deep py-16 text-white sm:py-20" aria-labelledby="seed-siya">
        <div className="container-page grid max-w-5xl items-center gap-7 md:grid-cols-[240px_1fr] md:gap-14">
          <img src={`${imageBase}images/seed-character/seed-about-reading.webp`} alt={content.siyaAlt} loading="lazy" className="mx-auto w-48 object-contain md:w-60" />
          <div>
            <p className="text-sm font-bold text-[#dcefa9]">{content.siyaLabel}</p>
            <h2 id="seed-siya" className="mt-3 text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl">{content.siyaTitle}</h2>
            <p className="mt-5 text-base leading-8 text-white/85">{content.siya}</p>
          </div>
        </div>
      </section>

      <div className="container-page max-w-5xl py-14 text-center sm:py-20">
        <p className="text-2xl font-extrabold leading-relaxed tracking-[-.03em] sm:text-3xl">{content.closing}</p>
        <Link to="/about" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-green-deep px-6 py-3 text-sm font-bold text-white hover:bg-green-mid">{content.back}<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
