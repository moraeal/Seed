import FigureCaption from "../components/FigureCaption";
import { useLanguage } from "../i18n";

type Section = { title: string; paragraphs: string[] };

const copy = {
  ko: {
    kicker: "ABOUT SEED JOURNAL",
    title: "한 사람의 씨앗이 시작한 독립 시민미디어",
    lead: "한 시민의 질문과 판단이 세상을 바꾸는 시작이 될 수 있다고 믿습니다. 씨드저널은 작아져 있던 한 사람이 자기 목소리를 되찾고, 다른 시민의 가능성을 깨우기 위해 시작한 1인 시민미디어입니다.",
    imageAlt: "한 시민의 생각이 씨앗과 잎으로 자라 여러 시민의 공론장으로 이어지는 따뜻한 수채화",
    imageCaption: "한 사람의 질문에서 시작된 작은 생각의 씨앗은 기록과 대화를 통해 더 많은 시민의 가능성으로 자라납니다.",
    sections: [
      {
        title: "더 많은 정보, 더 적은 판단",
        paragraphs: [
          "기존 언론이 정보와 의제를 독점하던 시대가 저물고 유튜브와 1인 미디어의 시대가 열렸습니다. 누구나 말할 수 있게 되었고, 누구나 세상에 자신의 콘텐츠를 내놓을 수 있게 되었습니다.",
          "그러나 우리는 정말 더 자유롭게 생각하게 되었을까요. 수많은 영상과 쇼츠가 알고리즘을 타고 하루 종일 우리에게 말을 겁니다. 도파민이 터지는 자극적인 정보를 끊임없이 받아들이면서, 어느 순간 다른 사람의 주장과 분노를 내 생각이라고 착각합니다. 많은 것을 보고 들었지만 정작 시민으로서 꼭 알아야 할 것이 무엇인지는 더욱 분간하기 어려워졌습니다.",
          "정치권력과 시민사회, 공익기관 사이의 경계도 흐려지고 있습니다. 서로를 감시해야 할 기관들이 때로는 서로를 감싸고, 그 관계는 ‘친절한 국가’와 ‘공익’이라는 이름으로 포장되어 우리의 일상에 들어옵니다. 우리는 세상이 잘못되었다고 분노하고 비판하지만, 어느 순간 그 구조에 익숙해진 채 살아갑니다.",
        ],
      },
      {
        title: "나의 생각은 정말 나의 것인가",
        paragraphs: [
          "그래서 나 자신에게 묻게 되었습니다. 지금 내가 하는 생각은 정말 나의 것인가. 나는 자유롭고 공정하며 민주적인 세상을 바란다고 말하면서, 정작 나 자신의 생각으로 살아가고 있는가. 타인에게 보이는 나를 만들기 위해 스스로를 포장하고 합리화하면서, 누군가의 생각에 올라탄 채 떠다니고 있는 것은 아닌가.",
          "나는 나입니다. 그러나 오랫동안 나를 충분히 선언하지 못했습니다. 생각은 있었지만 정리되지 않았고, 목소리는 있었지만 세상에 내놓을 용기가 부족했습니다. 블로그와 SNS에 생각의 조각들을 단편적으로 남겼지만, 그것들은 하나의 관점과 이야기로 이어지지 못했습니다.",
        ],
      },
      {
        title: "AI가 열어준 가능성",
        paragraphs: [
          "그런 나에게 AI는 새로운 가능성을 열어주었습니다. AI가 나를 대신해 생각해준 것은 아닙니다. 오히려 내가 무엇을 생각하고 있었는지 더 분명하게 바라보도록 도와주었습니다. 흩어져 있던 생각을 정리하고, 부족한 지식과 자료를 보완하고, 막연한 문제의식을 하나의 글과 콘텐츠로 발전시킬 수 있게 해주었습니다. 작고 불완전했던 사유의 씨앗들이 비로소 연결되고 확장되기 시작했습니다.",
          "씨드저널은 그렇게 시작되었습니다. 이 사이트는 코딩이나 웹 개발을 배운 적 없는 한 사람이 AI와 함께 만든 독립 시민미디어입니다. 글을 쓸 때 나는 먼저 질문을 정하고, 무엇을 말하고 싶은지 밝힙니다. AI는 관련 자료를 찾고 구조를 정리하며 사실관계를 교차검토하는 데 도움을 줍니다. 그러나 무엇을 질문하고 어떻게 판단할 것인지, 그리고 그 결과에 책임지는 일은 온전히 나의 몫입니다.",
        ],
      },
      {
        title: "불완전함을 감추지 않겠습니다",
        paragraphs: [
          "AI는 사실을 보증하는 심판도 아니고, 인간의 생각을 대신하는 주인도 아닙니다. 씨드저널은 가능한 한 출처를 확인하고 서로 다른 자료를 대조하며, 오류가 발견되면 공개적으로 바로잡겠습니다. 사실과 의견을 구분하고 AI를 활용한 과정도 숨기지 않겠습니다.",
          "나의 생각은 분명히 불완전합니다. 아무리 많은 자료를 확인하고 데이터를 검토해도 놓치는 사실과 잘못된 판단이 있을 수 있습니다. 그러나 불완전하다는 이유로 자신의 생각을 포기할 필요는 없습니다. 중요한 것은 생각하지 않는 완벽함이 아니라, 질문하고 검증하고 수정하면서 성장하는 과정입니다.",
          "나는 이곳에서 지금까지 꺼내지 못했던 목소리를 펼쳐보려 합니다. 권력이 당연하다고 말하는 것을 다시 묻고, 시민사회의 이름으로 행해지는 일도 시민의 관점에서 살펴보겠습니다. 진영이 정해준 생각을 반복하기보다 내가 확인한 사실과 내가 세운 기준으로 판단하겠습니다.",
        ],
      },
      {
        title: "한 사람의 씨앗에서, 더 많은 시민의 씨앗으로",
        paragraphs: [
          "씨드저널은 거대한 언론사가 아닙니다. 한 사람의 씨앗이 시작한 1인 시민미디어입니다. 그러나 작은 씨앗 하나에도 숲으로 성장할 가능성이 들어 있습니다.",
          "AI의 도움으로 한 사람이 자신의 생각을 세우고 세상에 발언할 수 있다면, 다른 시민도 그렇게 할 수 있습니다. 전문가나 유명인만 미디어의 주인이 되는 시대가 아니라, 평범한 시민도 자신의 질문과 경험과 전문성을 공적인 목소리로 발전시킬 수 있는 시대가 열리고 있습니다.",
        ],
      },
    ] satisfies Section[],
    declaration: ["내가 시민입니다.", "나는 세상을 바꾸는 작은 씨앗입니다."],
    closing: "씨드저널은 나를 다시 세우고 성장시키기 위한 첫 번째 시도입니다. 이 작은 시도가 누군가에게 울림으로 전해지고, 또 다른 시민이 자신의 목소리를 발견하는 계기가 되기를 바랍니다. 그렇게 한 사람의 씨앗들이 자라고 서로 연결되어, 진짜 시민들이 살아 움직이는 큰 씨앗의 사회가 열리기를 희망합니다.",
    founderKicker: "PUBLISHER & EDITOR",
    founderName: "박경석",
    founderRole: "씨드저널 발행인·에디터",
    founderBio: "시민사회와 공공영역의 현장에서 활동해 왔습니다. 아직 정리되지 않은 한 시민의 질문을 기록하고, AI와 함께 사실을 확인하며 씨드저널을 만들어가고 있습니다. 완성된 답을 내세우기보다 질문하고 수정하며 성장하는 시민이 되고자 합니다.",
  },
  en: {
    kicker: "ABOUT SEED JOURNAL",
    title: "An independent civic journal, begun by one citizen as a seed",
    lead: "We believe one citizen’s questions and judgment can become the beginning of change. SEED Journal is a one-person civic publication created by someone who had learned to make himself small—and decided to recover his own voice while awakening that possibility in others.",
    imageAlt: "Warm watercolor of one citizen’s ideas growing into seeds, leaves, and a public space shared by many citizens",
    imageCaption: "A small seed of thought, beginning with one person’s question, can grow through writing and dialogue into possibility for many citizens.",
    sections: [
      {
        title: "More information, less independent judgment",
        paragraphs: [
          "The age in which legacy media monopolized information and the public agenda is fading. YouTube and one-person media have opened a new era in which almost anyone can speak and publish.",
          "But has that made us freer thinkers? An endless stream of videos and shorts follows the logic of algorithms and speaks to us throughout the day. Surrounded by stimulating fragments of information, we can begin to mistake someone else’s argument or anger for our own thinking. We see and hear more than ever, yet it has become harder to discern what citizens truly need to know.",
          "The boundaries among political power, civil society, and public-interest institutions are also becoming blurred. Organizations that should scrutinize one another sometimes protect one another, while their relationships enter our daily lives under the reassuring language of a ‘caring state’ and ‘the public good.’ We condemn what is wrong with the world, yet quietly grow accustomed to the very structures we criticize.",
        ],
      },
      {
        title: "Are my thoughts really my own?",
        paragraphs: [
          "That led me to ask myself: Are the thoughts I hold truly mine? I say I want a free, fair, democratic, and humane society—but am I living as the author of my own judgment? Or am I packaging and rationalizing myself for the gaze of others, carried along by ideas that someone else has already chosen for me?",
          "I am myself. Yet for a long time I did not fully declare who I was. I had thoughts but could not organize them; I had a voice but lacked the courage to put it into the world. I left fragments on blogs and social media, but they did not yet form a coherent perspective or story.",
        ],
      },
      {
        title: "The possibility opened by AI",
        paragraphs: [
          "AI opened a new possibility for me. It did not think in my place. Instead, it helped me see more clearly what I had been trying to think. It helped organize scattered ideas, identify missing knowledge and sources, and develop a vague concern into an article or piece of public analysis. Small, unfinished seeds of thought began to connect and grow.",
          "That is how SEED Journal began. This website is an independent civic publication built by one person with no training in coding or web development, working alongside AI. I begin each article by choosing the question and stating what I want to say. AI assists with research, structure, and cross-checking. But the choice of question, the judgment that follows, and responsibility for the result remain entirely mine.",
        ],
      },
      {
        title: "We will not conceal our incompleteness",
        paragraphs: [
          "AI is neither an arbiter that guarantees facts nor a master that replaces human thought. SEED Journal will check sources, compare different records, and correct errors openly when they are found. We will distinguish fact from opinion and be transparent about how AI has been used.",
          "My thinking is inevitably incomplete. No amount of research or data review can eliminate every omission or mistaken judgment. But incompleteness is not a reason to surrender one’s own mind. What matters is not the perfection of never thinking, but the discipline of questioning, verifying, correcting, and growing.",
          "Here I will bring forward a voice I once hesitated to use. I will question what power presents as self-evident and examine actions taken in the name of civil society from the citizen’s point of view. Rather than repeat the opinions assigned by political camps, I will judge by the facts I can verify and the principles I am prepared to defend.",
        ],
      },
      {
        title: "From one seed to many civic seeds",
        paragraphs: [
          "SEED Journal is not a large news organization. It is a one-person civic publication begun by one human seed. Yet even the smallest seed contains the possibility of a forest.",
          "If AI can help one person organize a judgment and speak in public, others can do the same. Media need not belong only to experts or public figures. Ordinary citizens can develop their questions, experience, and knowledge into public voices of their own.",
        ],
      },
    ] satisfies Section[],
    declaration: ["I am a citizen.", "I am a small seed capable of changing the world."],
    closing: "SEED Journal is my first attempt to stand upright and continue growing. I hope this small effort resonates with someone else and helps another citizen discover a voice of their own. May individual seeds grow, connect, and open the way to a society alive with citizens who think and act for themselves.",
    founderKicker: "PUBLISHER & EDITOR",
    founderName: "Park Kyung-seok",
    founderRole: "Publisher and Editor, SEED Journal",
    founderBio: "I have worked across civil society and the public sphere. Through SEED Journal, I record the unfinished questions of one citizen and use AI to help verify facts and organize ideas. I do not claim to possess final answers; I hope to remain a citizen who questions, corrects, and grows.",
  },
};

export default function About() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">{content.kicker}</p>
          <h1 className="editorial-title mt-5 max-w-4xl text-4xl font-bold leading-[1.08] text-navy sm:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl border-l-2 border-gold pl-6 text-lg leading-8 text-charcoal/70 sm:text-xl">{content.lead}</p>
        </div>
      </header>

      <main className="py-8 sm:py-10">
        <article className="container-page max-w-5xl">
          <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(20,54,43,.10)]">
            <img src={`${import.meta.env.BASE_URL}images/about/seed-journal-origin-watercolor.webp`} alt={content.imageAlt} className="aspect-[16/9] w-full object-cover" />
            <FigureCaption caption={content.imageCaption} credit="AI image by SEED Civic Partners" />
          </figure>

          <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
            {content.sections.map((section, index) => (
              <section key={section.title} className={index === 0 ? "" : "mt-9 border-t border-green-deep/12 pt-9 sm:mt-10 sm:pt-10"}>
                <h2 className="editorial-title text-3xl font-bold leading-tight text-navy sm:text-4xl">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}

            <blockquote className="my-10 border-y-2 border-gold/70 py-7 text-center sm:my-12 sm:py-8">
              {content.declaration.map((line) => <p key={line} className="editorial-title text-3xl font-bold leading-snug text-green-deep sm:text-4xl">{line}</p>)}
            </blockquote>
            <p className="text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">{content.closing}</p>
          </div>

          <section className="mt-12 border-y border-green-deep/15 bg-[#F1F2EC] px-6 py-7 sm:mt-16 sm:px-10 sm:py-8">
            <div className="grid gap-7 sm:grid-cols-[150px_1fr] sm:items-center sm:gap-10">
              <img src={`${import.meta.env.BASE_URL}images/about/park-kyung-seok.jpg`} alt={content.founderName} className="aspect-[3/4] w-32 border-4 border-white object-cover shadow-md sm:w-[150px]" />
              <div>
                <p className="section-kicker">{content.founderKicker}</p>
                <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{content.founderName}</h2>
                <p className="mt-2 text-sm font-bold text-green-deep/75">{content.founderRole}</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/68">{content.founderBio}</p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
