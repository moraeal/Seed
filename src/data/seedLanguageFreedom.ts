import type { SeedLanguageArticle } from "./seedLanguageBase";

export const freedomInfographic = {
  src: "images/seed-language/freedom-subject-infographic.webp",
  alt: "간섭받지 않을 자유, 지배받지 않을 자유, 선택할 수 있는 기회, 선택에 대한 책임이 가운데 자유는 주체라는 원을 둘러싼 도표",
  caption: "자유는 간섭의 부재만이 아니라 비지배, 실질적 선택 기회, 선택에 대한 책임이 함께 작동할 때 시민을 주체로 세웁니다.",
  credit: "씨앗의 소리 제작 인포그래픽",
};

const bodyImage = {
  src: "images/seed-language/freedom-protection-control-dome.webp",
  alt: "안전과 보호의 장치와 그 너머의 선택지를 바라보는 시민",
  caption: "보호는 필요하지만 시민의 선택을 대신하기 시작하면 자유의 공간은 좁아집니다.",
  credit: "씨앗의 소리 AI 제작 이미지",
};

export const freedomArticleKo: SeedLanguageArticle = {
  slug: "freedom-as-citizen-agency",
  term: "자유",
  date: "2026-09-12",
  readMinutes: 5,
  newsletterEligible: true,
  title: "자유는 방임이 아니라 주체를 세우는 일이다",
  subtitle: "간섭받지 않을 자유를 넘어, 스스로 판단하고 선택하며 책임지는 시민의 조건",
  summary: "자유의 목적은 시민을 혼자 내버려두는 데 있지 않습니다. 국가와 조직과 다수의 판단에 자신의 삶을 맡기지 않고 스스로 판단할 수 있게 하는 데 있습니다. 자유와 책임과 공정이 함께 있을 때 시민은 비로소 자신의 삶의 주체가 됩니다.",
  keyPoints: [
    "자유는 시민을 내버려두는 것이 아니라 스스로 판단하고 선택할 수 있게 하는 조건입니다.",
    "자유 없는 책임은 동원이고, 책임 없는 자유는 불신이며, 공정 없는 자유는 특권입니다.",
    "선택할 공간과 실패할 자유, 다시 도전할 기회가 있을 때 작은 시민은 큰 시민으로 자랍니다.",
  ],
  heroImage: bodyImage,
  inlineImage: bodyImage,
  inlineImageAfterSection: 0,
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