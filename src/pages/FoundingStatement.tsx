import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function FoundingStatement() {
  const { language } = useLanguage();
  const ko = language === "ko";

  const sections = ko
    ? [
        ["나의 생각은 정말 나의 것인가", "레거시 미디어의 시대가 저물고 유튜브와 쇼츠, 알고리즘의 시대가 열렸습니다. 우리는 도파민을 자극하는 수많은 정보 속에서 많은 시간을 흘려보냅니다. 반복해서 들은 타인의 이야기를 어느 순간 내 생각이라고 착각하기도 합니다. 그러나 그 정보의 홍수 속에 시민으로서 정말 알아야 할 사실과 질문은 얼마나 남아 있습니까."],
        ["친절한 국가의 얼굴 뒤에서 벌어지는 일", "정치권력과 시민사회, 공익기관의 이해가 결합한 정책이 때로는 친절한 국가의 모습으로 포장되어 일상으로 들어옵니다. 우리는 세상이 잘못됐다고 분노하면서도 누군가가 정해준 입장에 올라타 살아가기 쉽습니다. 씨앗의 소리는 국가와 시장뿐 아니라 공익의 이름으로 행사되는 권력까지 시민의 자리에서 묻고 기록하려 합니다."],
        ["한 사람이 미디어가 되기로 했습니다", "나는 규모 있는 조직이나 언론사를 배경으로 갖고 있지 않습니다. 지금 씨앗의 소리를 움직이는 사람은 나 한 명입니다. 그래서 오히려 내 이름으로 묻고, 내 판단으로 쓰고, 잘못이 있다면 내 책임으로 고칠 수 있습니다. 1인이라는 사실을 약점으로 감추지 않고 이 미디어의 출발점으로 밝히겠습니다."],
        ["AI가 작은 개인을 증강하고 있습니다", "과거 블로그와 SNS에 단편적으로 남겨두었던 생각의 조각들이 AI를 통해 정리되고 확장되고 있습니다. 나는 글의 주제와 문제의식, 하고 싶은 말을 정합니다. AI는 자료를 찾고 사실관계와 데이터를 점검하며 논리의 빈틈을 확인하는 도구가 됩니다. 코딩이나 개발 지식 없이 이 사이트를 직접 만들어가는 일도 그 가능성의 일부입니다."],
        ["AI가 책임을 대신하지는 않습니다", "아무리 많은 자료를 확인하고 AI의 도움을 받아도 나의 생각은 불완전할 수 있습니다. 중요한 것은 그 불완전함을 감추는 것이 아니라, 근거를 공개하고 오류가 확인되면 고치는 태도입니다. 무엇을 중요하게 보고 어떤 주장을 할 것인지, 그 결과를 어떻게 책임질 것인지는 저자에게 남습니다."],
        ["내가 시민입니다", "나는 타인에게 보이는 모습에 나를 맞추기보다 내 생각으로 살아가는 시민이 되고 싶습니다. 시민은 완성된 존재가 아니라 배우고 연결되며 성장하는 씨앗입니다. 한 사람의 작은 시도가 누군가에게 울림이 되고, 더 많은 시민이 자신의 목소리를 세우는 계기가 되기를 바랍니다. 씨앗의 소리는 한 사람의 씨앗에서 시작하지만 더 큰 씨앗들의 사회를 향해 열려 있습니다."],
      ]
    : [
        ["Are my thoughts truly my own?", "The age of legacy-media dominance is fading, while video platforms, short-form feeds, and algorithms increasingly shape attention. We spend hours inside streams engineered for stimulation and can mistake ideas repeated to us for judgments we reached ourselves. Amid that flood, how much of what citizens truly need to know remains visible?"],
        ["Power behind the friendly face of the state", "Policies formed through aligned interests among political power, civic organizations, and public-interest institutions can enter daily life disguised as the kindness of the state. We may denounce what is wrong while still drifting on positions chosen by others. SEED VOICE will question and document power exercised not only by the state and market, but also in the name of the public interest."],
        ["One person decided to become a medium", "I do not have a large organization or media company behind me. At present, SEED VOICE is run by one person. That also means I can ask in my own name, write from my own judgment, and correct mistakes under my own responsibility. I will not hide the fact that this is a one-person outlet; it is the starting point of the work."],
        ["AI is augmenting a small individual", "Fragments once left across blogs and social media can now be organized and developed with AI. I decide the topic, the questions, and what I want to say. AI helps locate sources, examine facts and data, and test gaps in the argument. Building this site without formal coding or development experience is part of the same possibility."],
        ["AI does not replace responsibility", "No amount of research or AI assistance makes my thinking complete. The important thing is not to conceal imperfection, but to show the basis for a claim and correct errors when they are found. The author remains responsible for deciding what matters, what to argue, and how to answer for the result."],
        ["I am a citizen", "I want to live by judgments I can call my own rather than by an image constructed for others. A citizen is not a finished being, but a seed that learns, connects, and grows. I hope one person’s small attempt can resonate with another and encourage more citizens to establish voices of their own. SEED VOICE begins with one seed but remains open toward a society of many growing seeds."],
      ];

  return (
    <article className="bg-paper pb-16 sm:pb-20">
      <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-16">
        <div className="container-page max-w-4xl">
          <Link to="/about" className="text-link"><ArrowLeft size={16}/>{ko ? "소개로 돌아가기" : "Back to About"}</Link>
          <span className="section-kicker mt-8 block">STATEMENT OF PURPOSE</span>
          <h1 className="editorial-title mt-3 text-4xl font-bold leading-tight text-navy sm:text-6xl">{ko ? "씨앗의 소리 취지문" : "Why SEED VOICE Exists"}</h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-charcoal/65">{ko ? "한 사람의 생각과 목소리도 세상을 향해 자랄 수 있다는 믿음" : "A belief that one person’s thought and voice can grow into public life"}</p>
        </div>
      </header>

      <div className="container-page max-w-4xl py-10 sm:py-12">
        <p className="border-y-2 border-green-deep bg-[#fbf4e5] px-6 py-7 editorial-title text-2xl font-bold leading-relaxed text-green-deep sm:px-8 sm:text-3xl">{ko ? "씨앗의 소리는 한 사람의 씨앗이 시작한 독립 시민미디어입니다." : "SEED VOICE is an independent civic media outlet begun by one human seed."}</p>
        <div className="mt-9 space-y-8">
          {sections.map(([title, body]) => <section key={title}><h2 className="editorial-title text-2xl font-bold leading-snug text-navy sm:text-3xl">{title}</h2><p className="mt-3 text-base leading-8 text-charcoal/70">{body}</p></section>)}
        </div>
        <footer className="mt-11 border-t-2 border-navy pt-7">
          <p className="text-sm font-extrabold tracking-[.06em] text-green-deep">{ko ? "2026년 9월 · 박경석, 씨앗의 소리 발행인" : "September 2026 · Park Kyung-seuk, Publisher of SEED VOICE"}</p>
          <Link to="/about" className="button-secondary mt-6">{ko ? "소개로 돌아가기" : "Back to About"}</Link>
        </footer>
      </div>
    </article>
  );
}
