export type Frame = {
  issue: string;
  progressiveFrame: string;
  missedQuestion: string;
  seedInterpretation: string;
  citizenSentence: string;
  category: string;
};

export const frameCategories = [
  "전체",
  "기업과 시장",
  "시민사회",
  "교육",
  "표현의 자유",
  "공공성",
  "지방정부",
  "청년",
];

export const frames: Frame[] = [
  {
    issue: "기업 규제 강화",
    category: "기업과 시장",
    progressiveFrame: "기업의 사회적 책임을 강화해야 한다",
    missedQuestion: "정치권력은 기업의 판단에 어디까지 개입할 수 있는가",
    seedInterpretation:
      "기업의 책임은 필요하지만, 정치권력이 기업의 자유를 대체해서는 안 됩니다.",
    citizenSentence:
      "기업의 자유가 무너지면 시민의 일자리와 선택도 함께 줄어듭니다.",
  },
  {
    issue: "시민단체 보조금 논란",
    category: "시민사회",
    progressiveFrame: "공익활동을 위해 시민단체 지원이 필요하다",
    missedQuestion:
      "공익의 이름으로 운영되는 조직은 시민에게 얼마나 책임지고 있는가",
    seedInterpretation:
      "공익은 예산을 받는 명분이 아니라 시민에게 검증받아야 할 책임입니다.",
    citizenSentence:
      "공익은 시민을 대신하는 권한이 아니라 시민에게 돌아가야 할 책임입니다.",
  },
  {
    issue: "표현의 자유와 혐오 표현 논란",
    category: "표현의 자유",
    progressiveFrame: "차별과 혐오를 막기 위해 표현을 제한해야 한다",
    missedQuestion: "누가 어떤 기준으로 허용 가능한 생각을 결정하는가",
    seedInterpretation:
      "타인의 존엄을 해치지 않는 책임은 필요하지만, 생각의 자유까지 위축시켜서는 안 됩니다.",
    citizenSentence: "다양성은 생각의 자유까지 포함해야 합니다.",
  },
  {
    issue: "학교 시민교육 편향성",
    category: "교육",
    progressiveFrame: "민주시민교육을 강화해야 한다",
    missedQuestion: "시민교육은 다양한 관점의 토론을 보장하고 있는가",
    seedInterpretation:
      "시민교육은 하나의 정답을 주입하는 과정이 아니라 판단 능력을 키우는 공론장이어야 합니다.",
    citizenSentence:
      "좋은 시민교육은 무엇을 믿으라고 말하기보다 어떻게 판단할지 묻습니다.",
  },
  {
    issue: "지방정부 위원회 운영",
    category: "지방정부",
    progressiveFrame: "더 많은 시민참여 기구가 필요하다",
    missedQuestion: "참여의 형식이 실제 책임과 권한으로 이어지고 있는가",
    seedInterpretation:
      "참여는 숫자와 명단이 아니라 결정 과정의 투명성과 후속 책임으로 평가되어야 합니다.",
    citizenSentence: "참여는 장식이 아니라 시민에게 돌아오는 책임의 통로입니다.",
  },
  {
    issue: "청년 정책 대표성",
    category: "청년",
    progressiveFrame: "청년에게 더 많은 지원을 제공해야 한다",
    missedQuestion: "청년을 수혜자가 아니라 제안자로 세우고 있는가",
    seedInterpretation:
      "청년정책은 지원을 넘어 스스로 문제를 정의하고 실행할 기회를 열어야 합니다.",
    citizenSentence: "청년은 정책의 대상이 아니라 다음 공공성을 만드는 주체입니다.",
  },
];
