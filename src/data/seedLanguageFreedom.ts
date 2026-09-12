import type { Language } from "../i18n";
import type { SeedLanguageArticle } from "./seedLanguage";

const freedomKo: SeedLanguageArticle = {
  slug: "freedom-is-not-neglect-but-subjecthood-2026",
  term: "자유",
  date: "2026-09-12",
  readMinutes: 5,
  newsletterEligible: true,
  title: "자유는 방임이 아니라 주체를 세우는 일이다",
  subtitle: "간섭받지 않을 자유를 넘어, 지배받지 않고 선택할 수 있는 시민의 조건",
  summary: "자유는 단순히 간섭받지 않는 상태가 아닙니다. 누구에게도 자의적으로 종속되지 않고 스스로 판단하고 선택할 수 있는 조건입니다. 국가는 시민 대신 선택하기보다 시민이 선택할 수 있는 실제 조건을 넓혀야 합니다. 자유와 책임과 공정이 함께 갈 때 시민은 비로소 주체가 됩니다.",
  keyPoints: [
    "자유는 단순한 비간섭이나 방임이 아니라 누구에게도 자의적으로 종속되지 않는 조건입니다.",
    "국가는 시민 대신 선택하기보다 시민이 판단하고 선택할 수 있는 실제 기회를 넓혀야 합니다.",
    "자유·책임·공정이 함께 설 때 시민은 정책의 대상이 아니라 선택의 주체가 됩니다.",
  ],
  heroImage: {
    src: "images/seed-language/freedom-protection-control-glass-dome-hd.svg",
    alt: "시민을 보호하는 장치가 동시에 통제의 장벽이 될 수 있음을 표현한 이미지",
    caption: "국가의 보호가 시민의 선택권을 대신하기 시작하면 보호와 통제의 경계는 흐려집니다.",
    credit: "씨앗의 소리 도식 이미지",
  },
  inlineImage: {
    src: "images/seed-language/freedom-protection-control-glass-dome-hd.svg",
    alt: "시민을 보호하는 장치가 동시에 통제의 장벽이 될 수 있음을 표현한 이미지",
    caption: "국가의 보호가 시민의 선택권을 대신하기 시작하면 보호와 통제의 경계는 흐려집니다.",
    credit: "씨앗의 소리 도식 이미지",
  },
  inlineImageAfterSection: 0,
  additionalImages: [
    {
      afterSection: 1,
      src: "images/seed-language/freedom-subject-four-box-diagram-hd.svg",
      alt: "간섭받지 않을 자유, 지배받지 않을 자유, 선택할 수 있는 기회, 선택에 대한 책임이 가운데 자유는 주체라는 원으로 연결되는 도표",
      caption: "자유는 네 조건이 함께 작동할 때 시민을 주체로 세웁니다.",
      credit: "씨앗의 소리 도식",
      contain: true,
    },
  ],
  sections: [
    {
      title: "자유는 시민을 크게 만든다",
      paragraphs: [
        "자유의 목적은 시민을 혼자 내버려두는 데 있지 않다.",
        "시민이 국가와 조직과 다수의 판단에 자신의 삶을 맡기지 않고 스스로 판단할 수 있게 하는 데 있다.",
        "그래서 자유로운 사회에는 강한 시민이 필요하다.",
        "국가가 무엇을 해주기만 기다리는 시민이 아니라 국가에 이유를 묻는 시민.",
        "전문가가 정답을 내려주기를 기다리는 시민이 아니라 정보를 듣고 스스로 판단하는 시민.",
        "다수와 생각이 다르다는 이유만으로 자신의 말을 거두지 않는 시민.",
        "그리고 자신이 선택한 결과에 대해서는 책임질 줄 아는 시민이다.",
      ],
      quote: ["자유 없는 책임은 동원이고,", "책임 없는 자유는 불신이며,", "공정 없는 자유는 특권이다."],
    },
    {
      title: "자유와 책임과 공정이 함께 있을 때 시민은 주체가 된다",
      paragraphs: [
        "자유는 이 셋 가운데 하나만 고르는 문제가 아니다.",
        "자유와 책임과 공정이 함께 있을 때 시민은 비로소 자신의 삶의 주체가 된다.",
        "국가가 시민을 대신 선택하는 사회에서는 시민이 점점 작아진다.",
        "반대로 시민에게 선택할 공간을 주고, 실패할 자유를 인정하며, 다시 도전할 기회를 열어주는 사회에서는 시민이 자란다.",
        "씨앗이 자유를 중요하게 보는 이유도 여기에 있다.",
        "자유는 시민을 내버려두는 것이 아니다.",
        "시민을 주체로 세우고, 작은 시민을 큰 시민으로 자라게 하는 일이다.",
      ],
    },
  ],
};

const freedomEn: SeedLanguageArticle = {
  ...freedomKo,
  term: "Freedom",
  title: "Freedom Is Not Neglect; It Is the Work of Making Citizens Subjects",
  subtitle: "Beyond non-interference: freedom as non-domination, real opportunity, and responsibility",
  summary: "Freedom is not merely the absence of interference. It is the condition in which citizens are not arbitrarily subordinated to anyone and can judge, choose and take responsibility for themselves. The state should widen the conditions for choice rather than choose on citizens' behalf. When freedom, responsibility and fairness stand together, citizens become subjects of public life.",
  keyPoints: [
    "Freedom is not simple non-interference or neglect; it requires protection from arbitrary subordination.",
    "The state should widen real opportunities for citizens to judge and choose rather than choosing on their behalf.",
    "When freedom, responsibility and fairness stand together, citizens become subjects of choice rather than objects of policy.",
  ],
  heroImage: {
    ...freedomKo.heroImage,
    alt: "A symbolic image showing the boundary between protection and control",
    caption: "When state protection begins to replace citizens' own choices, the line between protection and control becomes blurred.",
    credit: "SEED VOICE diagram image",
  },
  inlineImage: {
    ...freedomKo.inlineImage!,
    alt: "A symbolic image showing the boundary between protection and control",
    caption: "When state protection begins to replace citizens' own choices, the line between protection and control becomes blurred.",
    credit: "SEED VOICE diagram image",
  },
  additionalImages: [
    {
      ...freedomKo.additionalImages![0],
      alt: "A diagram with freedom equals subjecthood at the center, connected to freedom from interference, freedom from domination, real opportunity to choose, and responsibility for choice",
      caption: "Freedom makes citizens subjects only when all four conditions operate together.",
      credit: "SEED VOICE diagram",
    },
  ],
  sections: [
    {
      title: "Freedom Makes Citizens Larger",
      paragraphs: [
        "The purpose of freedom is not to leave citizens alone.",
        "It is to enable citizens to judge for themselves rather than entrusting their lives to the judgment of the state, organizations, or the majority.",
        "That is why a free society needs strong citizens.",
        "Citizens who do not merely wait for the state to provide for them, but ask the state for reasons.",
        "Citizens who do not wait for experts to hand down the correct answer, but listen to information and make their own judgments.",
        "Citizens who do not withdraw their words simply because they think differently from the majority.",
        "And citizens who know how to take responsibility for the consequences of their own choices.",
      ],
      quote: ["Responsibility without freedom is mobilization,", "freedom without responsibility is distrust,", "and freedom without fairness is privilege."],
    },
    {
      title: "Citizens Become Subjects When Freedom, Responsibility, and Fairness Stand Together",
      paragraphs: [
        "Freedom is not a matter of choosing only one of these three.",
        "When freedom, responsibility, and fairness stand together, citizens finally become subjects of their own lives.",
        "In a society where the state chooses on behalf of citizens, citizens gradually become smaller.",
        "By contrast, in a society that gives citizens room to choose, recognizes the freedom to fail, and opens opportunities to try again, citizens grow.",
        "This is why SEED places such importance on freedom.",
        "Freedom is not leaving citizens alone.",
        "It is the work of making citizens subjects and helping small citizens grow into larger citizens.",
      ],
    },
  ],
};

export const freedomArticlesKo = [freedomKo];

export function getFreedomArticle(slug: string, language: Language) {
  if (slug !== freedomKo.slug) return undefined;
  return language === "en" ? freedomEn : freedomKo;
}
