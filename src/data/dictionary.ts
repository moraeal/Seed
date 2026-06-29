export type DictionaryEntry = {
  word: string;
  oldImage: string;
  seedDefinition: string;
  civicMeaning: string;
  category: string;
};

export const dictionary: DictionaryEntry[] = [
  {
    word: "자유",
    category: "시민성",
    oldImage: "개인주의, 시장주의, 기득권의 언어",
    seedDefinition:
      "자유는 국가와 진영권력이 시민의 삶을 대신 결정하지 못하게 하는 방어선입니다.",
    civicMeaning: "스스로 판단하고 선택하며 그 결과를 함께 책임지는 시민의 힘",
  },
  {
    word: "책임",
    category: "시민성",
    oldImage: "약자에게 부담을 떠넘기는 말",
    seedDefinition:
      "책임은 시민을 탓하는 언어가 아니라 시민이 자랄 수 있다는 믿음의 언어입니다.",
    civicMeaning: "비판 이후의 대안, 실행, 점검까지 이어가는 태도",
  },
  {
    word: "공공성",
    category: "공론장",
    oldImage: "국가 개입과 공공부문 확대의 명분",
    seedDefinition:
      "공공성은 국가의 독점물이 아니라 시민 안에서 자라나는 씨앗입니다.",
    civicMeaning: "서로의 자유를 지키며 함께 살아갈 질서를 만드는 능력",
  },
  {
    word: "시장",
    category: "기업과 시장",
    oldImage: "탐욕과 불평등의 공간",
    seedDefinition:
      "시장은 시민의 선택, 창의, 도전이 실제 삶을 움직이는 생활세계입니다.",
    civicMeaning: "다양한 시도와 책임 있는 교환이 축적되는 사회적 공간",
  },
  {
    word: "기업",
    category: "기업과 시장",
    oldImage: "감시와 규제의 대상",
    seedDefinition:
      "기업은 일자리, 혁신, 생활 기반을 만드는 사회적 주체입니다.",
    civicMeaning: "자유롭게 도전하되 공동체 안에서 책임을 설명해야 하는 시민 파트너",
  },
  {
    word: "법치",
    category: "제도",
    oldImage: "권력 유지나 처벌의 언어",
    seedDefinition:
      "법치는 누구도 선한 명분으로 시민의 자유를 임의로 침해할 수 없게 하는 약속입니다.",
    civicMeaning: "권력과 다수의 감정 앞에서도 개인의 자유를 지키는 최소 질서",
  },
  {
    word: "공론장",
    category: "공론장",
    oldImage: "목소리 큰 집단의 주장 경쟁",
    seedDefinition:
      "공론장은 정답을 선포하는 무대가 아니라 다른 시민의 판단을 설득하는 책임 있는 공간입니다.",
    civicMeaning: "의견 차이를 공동의 학습으로 바꾸는 시민사회 인프라",
  },
];
