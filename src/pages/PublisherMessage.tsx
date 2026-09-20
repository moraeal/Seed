import { Minus, Plus } from "lucide-react";
import { Fragment, useState } from "react";
import { useLanguage } from "../i18n";

type Section = { title: string; paragraphs: string[] };

const copy = {
  ko: {
    kicker: "OUR STORY",
    title: "작은씨앗으로 시작한\n독립 시민저널",
    lead: "씨앗의 소리는 작은씨앗 한 사람의 질문에서 출발했습니다. 지금은 서로 다른 경험을 가진 필진이 시민의 자리에서 사실을 확인하고 권력의 움직임을 살피는 독립 시민저널입니다.",
    sections: [
      {
        title: "많이 보는 시대, 스스로 판단하기 어려운 시대",
        paragraphs: [
          "뉴스와 정보는 넘쳐납니다. 유튜브와 개인 미디어의 등장으로 누구나 말할 수 있게 되었지만, 알고리즘이 골라준 주장과 분노를 자기 생각으로 받아들이기도 쉬워졌습니다. 많이 보고 듣는 것과 스스로 판단하는 것은 같은 일이 아닙니다.",
          "정치권력과 시민사회, 공익기관의 경계도 흐려지고 있습니다. 서로를 감시해야 할 조직이 서로를 감싸고, 권한과 예산은 ‘친절한 국가’와 ‘공익’이라는 말 뒤에서 커집니다. 선한 이름을 가졌다는 이유만으로 감시에서 벗어날 수는 없습니다.",
        ],
      },
      {
        title: "시민의 자리에서 다시 봅니다",
        paragraphs: [
          "씨앗의 소리는 진영이 정해준 답을 반복하지 않습니다. 진보와 보수, 정부와 시민사회를 가리지 않고 확인된 사실과 같은 기준으로 판단합니다. 사실과 의견을 구분하되, 확인된 사실이 요구하는 판단까지 피하지 않습니다.",
          "국가는 유능해야 하지만 제한되어야 합니다. 기업의 도전은 특혜가 아니라 시민의 일자리와 선택을 만드는 힘입니다. 공익을 내세운 조직도 권한과 예산을 갖는 순간 시민의 질문 앞에 서야 합니다.",
        ],
      },
      {
        title: "작은씨앗에서 더 많은 시민의 목소리로",
        paragraphs: [
          "씨앗의 소리는 거대한 언론사가 아닙니다. 한 사람의 질문으로 시작해 다른 필진의 경험과 관점을 더하며 자라고 있습니다. 규모보다 중요한 것은 누구의 눈으로 세상을 보느냐는 것입니다.",
          "전문가나 유명인만 공적인 목소리를 가질 수 있는 것은 아닙니다. 평범한 시민의 질문과 경험도 세상을 움직이는 글이 될 수 있습니다. 씨앗의 소리는 그 작은 목소리가 사라지지 않도록 기록하겠습니다.",
        ],
      },
    ] satisfies Section[],
    aiKicker: "AI USE",
    aiTitle: "AI를 활용합니다",
    aiBody: "자료 조사와 구조화, 사실관계의 교차검토에 AI를 활용합니다. 질문과 판단, 원고의 최종 책임은 필진에게 있습니다.",
    declaration: ["시민은 정치의 관객이 아닙니다.", "질문하고 판단하며 권력을 지켜보는 주체입니다."],
    closing: "작은씨앗에서 시작한 목소리는 이제 다른 시민의 질문과 만나고 있습니다. 씨앗은 작습니다. 그러나 시민의 판단이 연결되면 권력의 방향을 바꿀 수 있습니다.",
    imageAlt: "갈라진 콘크리트에서 돋아난 작은 새싹과 여러 시민을 닮은 그림자",
    imageCaption: "작은씨앗에서 시작한 목소리가 여러 시민의 목소리로 자랍니다.",
    contributorsKicker: "CONTRIBUTORS",
    contributorsTitle: "필진 소개",
    contributorsLead: "서로 다른 현장을 경험한 시민들이 각자의 질문으로 씨앗의 소리를 함께 만듭니다. 이름을 선택하면 소개를 볼 수 있습니다.",
    closeProfile: "소개 접기",
    openProfile: "소개 보기",
    contributors: [
      {
        name: "작은씨앗",
        focus: "시민사회 · 공익 · 권력감시",
        bio: "시민사회와 공공영역, 기업 현장을 두루 경험해 온 시민사회 활동가이자 공익 기획자입니다. 국가·시장·시민사회가 만나는 여러 현장에서 활동하며 제도와 조직이 시민의 삶에 어떤 영향을 미치는지 지켜봐 왔습니다. 씨앗의 소리에서는 특정 진영이나 권위에 기대지 않고, 한 시민의 질문과 판단으로 사실을 확인하고 자유와 책임의 기준에서 국가와 시민사회의 권력을 함께 살피고자 합니다.",
      },
      {
        name: "경계의 시민",
        focus: "국방 · 안보 · 북한",
        bio: "공군 부사관과 장교로 복무하며 국방·교육·공보 현장을 경험했습니다. 북한학을 전공하고 러시아·CIS 지역의 정치와 국제관계를 연구하고 있습니다. 씨앗의 소리에서는 군과 안보, 북한과 통일 문제를 시민의 자유와 권리라는 자리에서 살펴봅니다. 안보의 필요성을 인정하면서도 그 이름 아래 시민의 권리가 가려지지 않는지 묻습니다.",
      },
      {
        name: "생각 너머",
        focus: "과학 · 에너지 · 환경",
        bio: "학생운동과 진보정당 활동을 거쳐 원자력과 에너지 문제를 다시 공부해 온 시민입니다. 원자력계의 주장을 반박하려 자료를 찾다가 자신이 믿어온 전제부터 다시 확인하게 되었고, 찬반 양쪽의 자료를 교차 검증하며 판단을 바꾸었습니다. 사실과 과학 네트웤 정책간사로 활동하며, 씨앗의 소리에서는 익숙한 믿음보다 측정과 현장, 과학적 근거를 따라 에너지·방사선·환경 문제를 살펴봅니다.",
      },
      {
        name: "푸른지평",
        focus: "시장경제 · 기업 · 지속가능성",
        bio: "민간 정책연구기관에서 시장경제와 기업정책을 연구했다. 현재는 환경 분야 연구·기획자로 일하며 지속가능한 사회를 위한 다양한 프로젝트를 맡고 있다. 성장과 환경, 기업가정신과 지속가능성이 함께 갈 수 있는 제도와 정책에 관심을 두고 글을 쓴다.",
      },
      {
        name: "이음",
        focus: "기업 · 시민사회 · 사회적 책임",
        bio: "기업과 시민사회가 함께 사회문제를 해결하는 방법을 고민해 왔습니다. 여러 협력사업을 기획하고 현장을 연결하며 서로 다른 언어와 이해관계가 만나는 지점을 살펴왔습니다. 씨앗의 소리에서는 기업의 성장과 사회적 책임이 함께 설 수 있는 현실적인 해법을 찾고자 합니다.",
      },
    ],
  },
  en: {
    kicker: "OUR STORY",
    title: "An Independent Civic Journal That Began with Small Seed",
    lead: "SEED VOICE began with a single question from Small Seed. Today, contributors with different experiences examine facts and follow the movement of power from the citizen’s point of view.",
    sections: [
      {
        title: "More to watch, less room to judge",
        paragraphs: [
          "News and information are abundant. YouTube and independent media have made it possible for almost anyone to publish, but algorithms also make it easy to absorb someone else’s arguments and anger as one’s own. Seeing more is not the same as judging independently.",
          "The boundaries among political power, civil society, and public-interest institutions are also blurring. Organizations meant to scrutinize one another can end up protecting one another, while authority and public funding expand behind benevolent language. A good name is not an exemption from scrutiny.",
        ],
      },
      {
        title: "Looking again from the citizen’s place",
        paragraphs: [
          "SEED VOICE does not repeat answers assigned by political camps. Progressive and conservative claims, government and civil society are tested against verified facts and the same standards. Facts are separated from opinion, but judgment is not avoided when the evidence supports it.",
          "The state should be capable but limited. Enterprise is not a privilege; it sustains jobs, choice, and innovation. Organizations acting in the public interest must also answer citizens’ questions when they hold authority and public money.",
        ],
      },
      {
        title: "From Small Seed to more civic voices",
        paragraphs: [
          "SEED VOICE is not a large media institution. It began with one person’s questions and is growing by adding the experience and perspective of other contributors. The decisive question is not size, but whose eyes are used to see the world.",
          "Public speech does not belong only to experts and prominent figures. The questions and experience of ordinary citizens can also become writing that moves society. SEED VOICE exists to keep those small voices from disappearing.",
        ],
      },
    ] satisfies Section[],
    aiKicker: "AI USE",
    aiTitle: "How AI is used",
    aiBody: "AI assists with research, structure, and factual cross-checking. Contributors remain responsible for the questions, judgments, and final text.",
    declaration: ["Citizens are not spectators in politics.", "They question, judge, and keep watch over power."],
    closing: "The voice that began with Small Seed is now meeting the questions of other citizens. A seed is small. But connected civic judgment can change the direction of power.",
    imageAlt: "A small seedling emerging through cracked concrete and casting shadows that resemble a group of citizens",
    imageCaption: "The voice that began with Small Seed can grow into the voices of many citizens.",
    contributorsKicker: "CONTRIBUTORS",
    contributorsTitle: "Meet the Contributors",
    contributorsLead: "Citizens with experience in different fields bring their own questions to SEED VOICE. Select a name to read the contributor’s profile.",
    closeProfile: "Close profile",
    openProfile: "View profile",
    contributors: [
      {
        name: "Small Seed",
        focus: "Civil society · Public interest · Accountability",
        bio: "A civic-society activist and public-interest planner with experience across civil society, public institutions, and the business sector. Having worked where government, markets, and civil society meet, Small Seed has watched closely how institutions and organizations affect citizens’ everyday lives. At SEED VOICE, Small Seed verifies facts and scrutinizes power in both the state and civil society through the principles of freedom and responsibility, without relying on partisan camps or borrowed authority.",
      },
      {
        name: "Citizen at the Boundary",
        focus: "Defense · Security · North Korea",
        bio: "A former Air Force noncommissioned officer and commissioned officer with experience in defense, education, and public affairs. His research focuses on North Korea and the politics and international relations of Russia and the CIS. At SEED VOICE, he examines the military, security, North Korea, and unification from the standpoint of civic freedom and rights. He recognizes the necessity of security while asking whether citizens’ rights are being obscured in its name.",
      },
      {
        name: "Beyond Thought",
        focus: "Science · Energy · Environment",
        bio: "A citizen who came to reconsider nuclear power and energy after years in the student movement and progressive politics. While gathering evidence to rebut the nuclear industry, he began testing his own assumptions, cross-checked the claims of both sides and changed his judgment. As a policy coordinator with the Facts and Science Network, he examines energy, radiation and environmental questions through measurement, field observation and scientific evidence rather than familiar belief.",
      },
      {
        name: "Blue Horizon",
        focus: "Markets · Enterprise · Sustainability",
        bio: "Previously researched market economics and business policy at a private policy institute. Now works in environmental research and planning, leading projects for a sustainable society. Writes about institutions and policies that can bring growth and the environment, entrepreneurship and sustainability together.",
      },
      {
        name: "Link",
        focus: "Enterprise · Civil society · Social responsibility",
        bio: "Has long explored how businesses and civil society can work together to address social problems. Through planning collaborative initiatives and connecting people in the field, Link has observed where different vocabularies and interests meet. At SEED VOICE, Link looks for practical ways to align business growth with social responsibility.",
      },
    ],
  },
};

export default function PublisherMessage() {
  const { language } = useLanguage();
  const content = copy[language];
  const [activeContributor, setActiveContributor] = useState<number | null>(null);

  return (
    <div className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">{content.kicker}</p>
          <h1 className="editorial-title mt-4 max-w-4xl whitespace-pre-line text-4xl font-bold leading-tight text-green-deep sm:text-5xl lg:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl border-l-2 border-gold pl-6 text-lg leading-8 text-charcoal/70 sm:text-xl">{content.lead}</p>
        </div>
      </header>

      <main className="py-8 sm:py-10">
        <article className="container-page max-w-5xl">
          <section className="mx-auto mb-10 max-w-4xl border-y border-green-deep/15 bg-[#F1F2EC] px-5 py-7 sm:mb-12 sm:px-8 sm:py-9">
            <div className="flex flex-col gap-3 border-b border-green-deep/15 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div>
              <p className="section-kicker">{content.contributorsKicker}</p>
              <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{content.contributorsTitle}</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-charcoal/60 sm:text-right">{content.contributorsLead}</p>
            </div>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {content.contributors.map((contributor, index) => {
                const isActive = activeContributor === index;
                return (
                  <button
                    key={contributor.name}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`contributor-profile-${index}`}
                    onClick={() => setActiveContributor(isActive ? null : index)}
                    className={`group flex min-h-[94px] w-full items-center justify-between gap-4 border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid/35 ${isActive ? "border-green-deep bg-green-deep text-white" : "border-green-deep/15 bg-white text-navy hover:-translate-y-0.5 hover:border-green-deep/35 hover:shadow-[0_8px_22px_rgba(20,55,45,0.08)]"}`}
                  >
                    <span className="min-w-0">
                      <span className="editorial-title block text-xl font-bold leading-tight">{contributor.name}</span>
                      <span className={`mt-2 block text-xs font-semibold leading-5 ${isActive ? "text-white/65" : "text-charcoal/52"}`}>{contributor.focus}</span>
                    </span>
                    <span className={`grid size-8 shrink-0 place-items-center rounded-full border ${isActive ? "border-white/25 text-white" : "border-green-deep/15 text-green-deep"}`} aria-hidden="true">
                      {isActive ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                    <span className="sr-only">{isActive ? content.closeProfile : content.openProfile}</span>
                  </button>
                );
              })}
            </div>

            {activeContributor !== null && (
              <article id={`contributor-profile-${activeContributor}`} className="mt-3 border-l-4 border-gold bg-white px-5 py-5 sm:px-7 sm:py-6" aria-live="polite">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="editorial-title text-2xl font-bold text-navy">{content.contributors[activeContributor].name}</h3>
                  <p className="text-xs font-extrabold tracking-[.06em] text-green-deep/65">{content.contributors[activeContributor].focus}</p>
                </div>
                <p className="mt-4 text-base leading-7 text-charcoal/68">{content.contributors[activeContributor].bio}</p>
              </article>
            )}
          </section>

          <div className="mx-auto max-w-3xl">

            {content.sections.map((section, index) => (
              <Fragment key={section.title}>
                <section className={index === 0 ? "" : "mt-9 border-t border-green-deep/12 pt-9 sm:mt-10 sm:pt-10"}>
                  <h2 className="editorial-title text-3xl font-bold leading-tight text-navy sm:text-4xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
                {index === 0 && (
                  <figure className="my-9 overflow-hidden border-y border-green-deep/15 bg-[#F1F2EC] sm:my-12">
                    <img src={`${import.meta.env.BASE_URL}images/about/one-citizen-many-voices.webp`} alt={content.imageAlt} className="aspect-[3/2] w-full object-cover" />
                    <figcaption className="px-5 py-3 text-sm leading-6 text-charcoal/65 sm:px-6">{content.imageCaption}</figcaption>
                  </figure>
                )}
              </Fragment>
            ))}

            <aside className="mt-10 border-l-4 border-gold bg-[#fbf4e5] px-6 py-6 sm:mt-12 sm:px-8">
              <p className="section-kicker">{content.aiKicker}</p>
              <h2 className="editorial-title mt-2 text-2xl font-bold text-navy">{content.aiTitle}</h2>
              <p className="mt-3 text-base leading-7 text-charcoal/70">{content.aiBody}</p>
            </aside>

            <blockquote className="my-10 border-y-2 border-gold/70 py-7 text-center sm:my-12 sm:py-8">
              {content.declaration.map((line) => <p key={line} className="editorial-title text-3xl font-bold leading-snug text-green-deep sm:text-4xl">{line}</p>)}
            </blockquote>
            <p className="text-[17px] leading-[1.82] text-charcoal/75 sm:text-lg">{content.closing}</p>

          </div>

        </article>
      </main>
    </div>
  );
}
