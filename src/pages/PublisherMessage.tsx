import { Fragment } from "react";
import { useLanguage } from "../i18n";

type Section = { title: string; paragraphs: string[] };

const copy = {
  ko: {
    kicker: "PUBLISHER'S MESSAGE",
    title: "한 사람의 씨앗이 시작한 독립 시민미디어",
    lead: "한 시민의 질문과 판단이 세상을 바꾸는 씨앗이 될 수 있다고 믿습니다. 씨앗의 소리는 작아져 있던 한 사람이 자기 목소리를 되찾고, 다른 시민의 가능성을 깨우기 위해 시작한 독립 시민미디어입니다.",
    sections: [
      {
        title: "더 많은 정보, 더 적은 판단",
        paragraphs: [
          "기존 언론이 정보와 의제를 독점하던 시대가 저물고 유튜브와 1인 미디어의 시대가 열렸습니다. 누구나 말할 수 있게 되었고, 누구나 세상에 자신의 콘텐츠를 내놓을 수 있게 되었습니다.",
          "그러나 우리는 정말 더 자유롭게 생각하게 되었을까요. 알고리즘을 타고 밀려오는 자극적인 정보를 끊임없이 받아들이며, 어느 순간 다른 사람의 주장과 분노를 내 생각이라고 착각합니다. 많이 보고 듣지만 시민으로서 꼭 알아야 할 것이 무엇인지는 더욱 분간하기 어려워졌습니다.",
          "정치권력과 시민사회, 공익기관 사이의 경계도 흐려지고 있습니다. 서로를 감시해야 할 기관들이 때로는 서로를 감싸고, 그 관계는 ‘친절한 국가’와 ‘공익’이라는 이름으로 우리의 일상에 들어옵니다. 우리는 세상을 비판하면서도 어느 순간 그 구조에 익숙해집니다.",
        ],
      },
      {
        title: "나의 생각은 정말 나의 것인가",
        paragraphs: [
          "그래서 나 자신에게 묻게 되었습니다. 지금 내가 하는 생각은 정말 나의 것인가. 자유롭고 공정한 세상을 바란다고 말하면서 정작 누군가의 생각에 올라탄 채 떠다니고 있는 것은 아닌가.",
          "나는 나입니다. 그러나 오랫동안 나를 충분히 선언하지 못했습니다. 생각은 있었지만 정리되지 않았고, 목소리는 있었지만 세상에 내놓을 용기가 부족했습니다. 블로그와 SNS에 생각의 조각들을 단편적으로 남겼지만, 그것들은 하나의 관점과 이야기로 이어지지 못했습니다.",
        ],
      },
      {
        title: "AI가 열어준 가능성",
        paragraphs: [
          "그런 나에게 AI는 새로운 가능성을 열어주었습니다. 나를 대신해 생각한 것이 아니라, 내가 무엇을 생각하고 있었는지 더 분명하게 바라보도록 도왔습니다. 흩어진 생각을 정리하고 부족한 자료를 보완하면서, 막연했던 문제의식은 글과 콘텐츠로 자라기 시작했습니다.",
          "씨앗의 소리는 그렇게 시작되었습니다. 코딩이나 웹 개발을 배운 적 없는 한 사람이 AI와 함께 만든 독립 시민미디어입니다. 나는 질문과 판단을 세우고, AI는 자료 조사와 구조화, 사실관계의 교차검토를 돕습니다. 무엇을 질문하고 어떻게 판단할 것인지, 그 결과에 책임지는 일은 온전히 나의 몫입니다.",
        ],
      },
      {
        title: "불완전함을 감추지 않겠습니다",
        paragraphs: [
          "AI는 사실을 보증하는 심판도, 인간의 생각을 대신하는 주인도 아닙니다. 씨앗의 소리는 출처를 확인하고 서로 다른 자료를 대조하며, 오류가 발견되면 공개적으로 바로잡겠습니다. 사실과 의견을 구분하고 AI를 활용한 과정도 숨기지 않겠습니다.",
          "나의 생각은 불완전합니다. 많은 자료를 검토해도 놓치는 사실과 잘못된 판단이 있을 수 있습니다. 중요한 것은 생각하지 않는 완벽함이 아니라, 질문하고 검증하고 수정하면서 성장하는 과정입니다.",
          "나는 이곳에서 지금까지 꺼내지 못했던 목소리를 펼쳐보려 합니다. 권력이 당연하다고 말하는 것을 다시 묻고, 시민사회의 이름으로 행해지는 일도 시민의 관점에서 살펴보겠습니다. 진영이 정해준 생각을 반복하기보다 내가 확인한 사실과 내가 세운 기준으로 판단하겠습니다.",
        ],
      },
      {
        title: "한 사람의 씨앗에서, 더 많은 시민의 씨앗으로",
        paragraphs: [
          "씨앗의 소리는 거대한 언론사가 아닙니다. 한 사람의 씨앗이 시작한 1인 시민미디어입니다. 그러나 작은 씨앗 하나에도 숲으로 성장할 가능성이 들어 있습니다.",
          "AI의 도움으로 한 사람이 자신의 생각을 세우고 세상에 발언할 수 있다면, 다른 시민도 그렇게 할 수 있습니다. 전문가나 유명인만이 아니라 평범한 시민도 자신의 질문과 경험을 공적인 목소리로 발전시킬 수 있습니다.",
        ],
      },
    ] satisfies Section[],
    declaration: ["내가 시민입니다.", "나는 세상을 바꾸는 작은 씨앗입니다."],
    closing: "씨앗의 소리는 나를 다시 세우고 성장시키기 위한 첫 번째 시도입니다. 이 작은 시도가 또 다른 시민이 자신의 목소리를 발견하는 계기가 되고, 한 사람의 씨앗들이 자라 서로 연결되기를 바랍니다.",
    imageAlt: "갈라진 콘크리트에서 돋아난 작은 새싹과 여러 시민을 닮은 그림자",
    imageCaption: "어느 작은 시민의 말이 여러 시민의 목소리로 자랍니다.",
    founderKicker: "PUBLISHER",
    founderName: "한시언",
    founderRole: "씨앗의 소리 발행인",
    founderMeaning: "‘한시언’은 ‘어느 작은 시민의 말’이라는 뜻을 담은 필명입니다.",
    founderBio: "유명인이나 전문가의 권위가 아니라 한 시민의 질문과 판단으로 세상을 바라보겠다는 다짐입니다. 사실을 확인하고 자유와 책임의 기준으로 권력을 살피며, 완성된 답보다 질문하고 수정하며 성장하는 시민의 목소리를 기록하겠습니다.",
  },
  en: {
    kicker: "PUBLISHER'S MESSAGE",
    title: "An independent civic journal, begun by one citizen as a seed",
    lead: "We believe one citizen’s questions and judgment can become a seed of change. SEED VOICE is an independent civic publication begun by one person who decided to recover his own voice and awaken that possibility in others.",
    sections: [
      {
        title: "More information, less independent judgment",
        paragraphs: [
          "The age in which legacy media monopolized information and the public agenda is fading. YouTube and one-person media have opened a new era in which almost anyone can speak and publish.",
          "But has that made us freer thinkers? As algorithms deliver an endless stream of provocative fragments, we can begin to mistake someone else’s argument or anger for our own thinking. We see and hear more than ever, yet it is harder to discern what citizens truly need to know.",
          "The boundaries among political power, civil society, and public-interest institutions are also blurring. Organizations that should scrutinize one another sometimes protect one another, while their relationships enter daily life under the reassuring language of a ‘caring state’ and ‘the public good.’ We criticize these structures, yet quietly grow accustomed to them.",
        ],
      },
      {
        title: "Are my thoughts really my own?",
        paragraphs: [
          "That led me to ask: Are the thoughts I hold truly mine? I say I want a free and fair society—but am I living by my own judgment, or being carried by ideas someone else has already chosen for me?",
          "I am myself. Yet for a long time I did not fully declare who I was. I had thoughts but could not organize them; I had a voice but lacked the courage to put it into the world. I left fragments on blogs and social media, but they did not yet form a coherent perspective or story.",
        ],
      },
      {
        title: "The possibility opened by AI",
        paragraphs: [
          "AI opened a new possibility for me. It did not think in my place; it helped me see more clearly what I had been trying to think. As scattered ideas were organized and missing sources filled in, vague concerns began to grow into public writing.",
          "That is how SEED VOICE began: an independent civic publication built by one person with no training in coding or web development, working alongside AI. I set the questions and make the judgments; AI assists with research, structure, and cross-checking. Responsibility for the result remains entirely mine.",
        ],
      },
      {
        title: "We will not conceal our incompleteness",
        paragraphs: [
          "AI is neither an arbiter that guarantees facts nor a master that replaces human thought. SEED VOICE will check sources, compare records, correct errors openly, distinguish fact from opinion, and be transparent about how AI has been used.",
          "My thinking is incomplete. Research cannot eliminate every omission or mistaken judgment. What matters is not the perfection of never thinking, but the discipline of questioning, verifying, correcting, and growing.",
          "Here I will bring forward a voice I once hesitated to use. I will question what power presents as self-evident and examine actions taken in the name of civil society from the citizen’s point of view. Rather than repeat the opinions assigned by political camps, I will judge by the facts I can verify and the principles I am prepared to defend.",
        ],
      },
      {
        title: "From one seed to many civic seeds",
        paragraphs: [
          "SEED VOICE is not a large news organization. It is a one-person civic publication begun by one human seed. Yet even the smallest seed contains the possibility of a forest.",
          "If AI can help one person organize a judgment and speak in public, others can do the same. Media need not belong only to experts or public figures; ordinary citizens can develop their questions and experience into public voices of their own.",
        ],
      },
    ] satisfies Section[],
    declaration: ["I am a citizen.", "I am a small seed capable of changing the world."],
    closing: "SEED VOICE is my first attempt to stand upright and continue growing. I hope it helps another citizen discover a voice of their own, so that individual seeds may grow and connect.",
    imageAlt: "A small seedling emerging through cracked concrete and casting shadows that resemble a group of citizens",
    imageCaption: "The words of one ordinary citizen can grow into the voices of many.",
    founderKicker: "PUBLISHER",
    founderName: "Han Si-eon",
    founderRole: "Publisher, SEED VOICE",
    founderMeaning: "‘Han Si-eon’ is a pen name meaning ‘the words of one ordinary citizen.’",
    founderBio: "It is a pledge to see the world through one citizen’s questions and judgment, rather than the borrowed authority of fame or expertise. I will verify facts, scrutinize power through the principles of freedom and responsibility, and record the voice of a citizen willing to question, correct, and grow.",
  },
};

export default function PublisherMessage() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">{content.kicker}</p>
          <h1 className="editorial-title mt-4 max-w-4xl text-4xl font-bold leading-tight text-green-deep sm:text-5xl lg:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl border-l-2 border-gold pl-6 text-lg leading-8 text-charcoal/70 sm:text-xl">{content.lead}</p>
        </div>
      </header>

      <main className="py-8 sm:py-10">
        <article className="container-page max-w-5xl">
          <div className="mx-auto max-w-3xl">
            {content.sections.map((section, index) => (
              <Fragment key={section.title}>
                <section className={index === 0 ? "" : "mt-9 border-t border-green-deep/12 pt-9 sm:mt-10 sm:pt-10"}>
                  <h2 className="editorial-title text-3xl font-bold leading-tight text-navy sm:text-4xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
                {index === 1 && (
                  <figure className="my-9 overflow-hidden border-y border-green-deep/15 bg-[#F1F2EC] sm:my-12">
                    <img src={`${import.meta.env.BASE_URL}images/about/one-citizen-many-voices.webp`} alt={content.imageAlt} className="aspect-[3/2] w-full object-cover" />
                    <figcaption className="px-5 py-3 text-sm leading-6 text-charcoal/65 sm:px-6">{content.imageCaption}</figcaption>
                  </figure>
                )}
              </Fragment>
            ))}

            <blockquote className="my-10 border-y-2 border-gold/70 py-7 text-center sm:my-12 sm:py-8">
              {content.declaration.map((line) => <p key={line} className="editorial-title text-3xl font-bold leading-snug text-green-deep sm:text-4xl">{line}</p>)}
            </blockquote>
            <p className="text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">{content.closing}</p>

            <section className="mt-10 border-y border-green-deep/15 bg-[#F1F2EC] px-6 py-7 sm:mt-12 sm:px-10 sm:py-8">
              <p className="section-kicker">{content.founderKicker}</p>
              <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{content.founderName}</h2>
              <p className="mt-2 text-sm font-bold text-green-deep/75">{content.founderRole}</p>
              <p className="mt-4 text-base font-semibold leading-7 text-charcoal/75">{content.founderMeaning}</p>
              <p className="mt-3 text-base leading-7 text-charcoal/68">{content.founderBio}</p>
            </section>
          </div>

        </article>
      </main>
    </div>
  );
}
