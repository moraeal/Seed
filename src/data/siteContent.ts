import type { Language } from "../i18n";

export const AUDITION_URL = "https://moraeal.github.io/moraeal/";
export const MAGAZINE_URL = "https://jimd.kr/magazine";

export const content = {
  ko: {
    nav: [
      { label: "뉴스", path: "/news" },
      { label: "브리핑", path: "/briefings" },
      { label: "칼럼", path: "/columns" },
      { label: "아카데미", path: "/academy" },
      { label: "제안", path: "/proposals" },
      { label: "실험", path: "/experiments" },
      { label: "소개", path: "/about" },
    ],
    actions: { proposal: "시민제안 올리기", support: "후원하기", language: "English" },
    footer: {
      title: "SEED Civic Partners | 씨드시민파트너스",
      description:
        "씨드시민파트너스는 시민의 작은 문제의식과 제안을 자유, 법치, 시장, 책임의 언어로 키우는 독립 시민 플랫폼입니다.",
      contact: "Contact: seedcivicpartners@gmail.com",
      location: "Seoul, South Korea",
    },
    home: {
      kicker: "CITIZENSHIP IN ACTION",
      title: "작은 질문을 자유로운 시민의 실험으로 키웁니다.",
      description:
        "씨드시민파트너스는 시민이 국가와 시장의 객체가 아니라 스스로 질문하고 판단하며 책임지는 공공성의 주체로 성장하도록 돕는 독립 시민 플랫폼입니다.",
      primary: "씨드시민파트너스 소개 보기",
      secondary: "시민제안 참여하기",
      stats: [
        ["12", "시민자유 브리핑"],
        ["5", "시민실험"],
        ["30", "Seed Citizen Fellows"],
      ],
      statsLabel: "주요 프로그램",
      pillarsTitle: "우리가 지키는 가치",
      pillars: [
        ["Freedom", "개인의 자유와 선택을 시민 삶의 언어로 설명합니다."],
        ["Rule of Law", "권력이 아니라 법과 절차가 시민의 삶을 보호해야 합니다."],
        ["Free Markets", "기업과 시장은 시민의 선택, 일자리, 번영을 넓히는 파트너입니다."],
        ["Civic Responsibility", "자유는 타인의 자유와 공동체 질서를 존중하는 책임과 함께 자랍니다."],
      ],
      programsTitle: "핵심 프로그램",
      programs: [
        ["Citizen Proposals", "생활 속 부담, 과잉 행정, 규제, 시장과 시민의 오해를 시민이 직접 제안합니다."],
        ["Civic Freedom Briefings", "복잡한 제도와 정책을 전문가 언어가 아니라 시민이 이해할 수 있는 언어로 설명합니다."],
        ["Civic Experiments", "큰 운동 이전에 한 지역, 한 직업군, 한 생활문제에서 작은 해결 모델을 실험합니다."],
        ["Public Records", "제안과 실험이 사라지지 않도록 공개 기록으로 축적하고 시민사회의 학습 자산으로 남깁니다."],
      ],
      issueTitle: "오늘의 시민 의제",
      issues: [
        ["기업과 시민", "기업은 규제의 대상만이 아니라 시민 선택과 혁신을 넓히는 파트너입니다."],
        ["데이터 행정", "알고리즘과 디지털 행정이 시민의 자유와 권리를 침해하지 않도록 시민 언어로 설명합니다."],
        ["공익기관 책임성", "공익의 이름으로 운영되는 제도와 기관이 실제 시민 삶에 어떤 결과를 남기는지 묻습니다."],
      ],
      ctaTitle: "한국 시민사회에 자유의 새 토양을 만듭니다.",
      ctaDescription:
        "정당의 보조 조직이 아니라, 가치에 분명하고 정치적으로 독립적인 시민 플랫폼으로 성장하겠습니다.",
    },
    about: {
      kicker: "ABOUT SEED",
      title: "SEED Civic Partners는 한국 시민사회에 자유의 언어를 다시 심는 독립 시민 플랫폼입니다.",
      description:
        "우리는 시민을 국가 정책의 수혜자나 동원의 대상으로 보지 않습니다. 시민은 공적 문제를 발견하고 질문하고 제안하며 책임 있게 실험할 수 있는 자유로운 주체입니다.",
      missionTitle: "Mission",
      mission:
        "시민의 일상 문제를 자유, 법치, 제한된 정부, 시장 자율성, 시민 책임의 언어로 번역하고, 이를 시민제안, 브리핑, 공론장, 작은 실험, 공개 기록으로 연결합니다.",
      independenceTitle: "Political and Organizational Independence",
      independence:
        "씨드시민파트너스는 어떤 정당의 선거 조직이나 보조 조직이 아닙니다. 우리는 비당파적 정치 독립성을 지키며, 재정과 협력, 프로젝트 결과를 투명하게 기록합니다.",
      valuesTitle: "Freedom, Rule of Law, Free Markets, and Civic Responsibility",
      values:
        "씨드시민파트너스는 개인의 자유, 법치, 제한된 정부, 시장 자율성, 시민사회의 책임을 핵심 가치로 삼습니다. 자유는 무책임한 방임이 아니라 타인의 자유와 공동체 질서를 존중하는 시민 윤리와 함께 지속됩니다.",
      programsTitle: "Programs",
      programs: [
        ["Korea Civic Freedom Initiative", "1년 파일럿 프로젝트로 시민제안 플랫폼, 자유 브리핑, 시민실험, 기업과 시민 자유 포럼, Seed Citizen Fellows를 추진합니다."],
        ["Civic Freedom Briefings", "과잉규제, 기업과 시민의 관계, 재산권과 생활권, 플랫폼 경제, 데이터 행정, 공익기관 책임성을 시민 언어로 정리합니다."],
        ["Citizen Proposals and Civic Experiments", "시민이 직접 제안한 사례를 선정해 작고 검증 가능한 시민실험으로 발전시키고 공개 기록으로 남깁니다."],
        ["Forum on Enterprise and Civic Liberty", "기업을 시민사회의 적이 아니라 자유롭고 책임 있는 사회를 함께 만드는 파트너로 재해석하는 공론장을 엽니다."],
        ["Seed Citizen Fellows", "시민제안, 브리핑, 토론 진행, 실험, 기록, 자유 가치 설명을 훈련받는 시민 리더 30명을 양성합니다."],
      ],
      leadershipTitle: "Leadership",
      leadership:
        "씨드시민파트너스의 리더십은 정당 조직의 청년부나 선거 동원 구조가 아니라, 시민사회 안에서 자유의 가치를 설명하고 실험하는 독립 시민 리더십을 지향합니다.",
      founderTitle: "Founder & President",
      founderName: "Park Kyung-seuk",
      founderBio: "",
      contactTitle: "Contact",
      contact:
        "파트너십, 멘토십, 교육, 후원, 공동 프로젝트 제안은 seedcivicpartners@gmail.com으로 연락해 주세요.",
      principles: [
        ["Subject", "시민은 정책의 객체가 아니라 공적 문제를 발견하고 말할 수 있는 주체입니다."],
        ["Ethics", "자유는 타인의 자유와 공동체 질서를 존중하는 시민 윤리를 필요로 합니다."],
        ["Evolution", "시민은 참여, 기록, 학습, 실험을 통해 성장합니다."],
        ["Duty", "자유로운 사회는 권리만이 아니라 자유를 지키는 시민의 책임과 의무를 필요로 합니다."],
      ],
    },
    simplePages: {
      roadmap: {
        title: "Roadmap",
        subtitle: "씨드시민파트너스는 제안 플랫폼, 자유 브리핑, 시민실험, 시민 리더 훈련으로 단계적으로 성장합니다.",
      },
      support: {
        title: "Support SEED",
        subtitle: "후원은 시민제안 플랫폼, 브리핑 제작, 실험 운영, 투명한 기록 시스템에 사용됩니다.",
      },
      proposalLab: {
        title: "Citizen Proposal Lab",
        subtitle: "생활 속 문제를 2분 제안, 시민 질문, 작은 실험으로 키우는 공간입니다.",
      },
      todayFrame: {
        title: "뉴스",
        subtitle: "오늘의 주요 소식과 시민이 함께 살펴볼 공공 의제를 전합니다.",
      },
      academy: {
        title: "씨드 아카데미",
        subtitle: "시민이 사실을 읽고 질문하며 제안하고 실험하는 힘을 기르는 학습 공간입니다.",
      },
      dictionary: {
        title: "Civic Dictionary",
        subtitle: "어려운 정치와 제도 언어를 시민이 이해할 수 있는 말로 바꿉니다.",
      },
      forum: {
        title: "SEED Public Forum",
        subtitle: "전인미답 매거진을 씨드시민파트너스 공론장 안에서 함께 읽습니다.",
      },
    },
  },
  en: {
    nav: [
      { label: "News", path: "/news" },
      { label: "Briefings", path: "/briefings" },
      { label: "Columns", path: "/columns" },
      { label: "Academy", path: "/academy" },
      { label: "Proposals", path: "/proposals" },
      { label: "Experiments", path: "/experiments" },
      { label: "About", path: "/about" },
    ],
    actions: { proposal: "Submit a Proposal", support: "Support SEED", language: "한국어" },
    footer: {
      title: "SEED Civic Partners",
      description:
        "An independent, nonpartisan civic platform advancing citizen agency, civic responsibility, and an open civil society in South Korea.",
      contact: "Contact: seedcivicpartners@gmail.com",
      location: "Seoul, South Korea",
    },
    home: {
      kicker: "CITIZEN AGENCY · CIVIC RESPONSIBILITY · OPEN CIVIL SOCIETY",
      title: "Helping citizens turn everyday concerns into constructive civic action.",
      description:
        "SEED Civic Partners is an independent, nonpartisan platform in South Korea. We help citizens understand public issues, develop practical proposals, and test solutions grounded in freedom, the rule of law, open markets, and civic responsibility.",
      primary: "About SEED",
      secondary: "Join Citizen Proposals",
      stats: [
        ["12", "Civic freedom briefings"],
        ["5", "Civic experiments"],
        ["30", "Seed Citizen Fellows"],
      ],
      statsLabel: "2026 PILOT GOALS",
      pillarsTitle: "Our Core Values",
      pillars: [
        ["Freedom", "People should have the space and confidence to make choices, voice concerns, and shape their communities."],
        ["Rule of Law", "Public authority should be constrained by clear rules, fair procedures, and meaningful accountability."],
        ["Open and Free Markets", "Open exchange, enterprise, and innovation can widen opportunity and improve everyday life."],
        ["Civic Responsibility", "Freedom is sustained when citizens respect others, contribute to their communities, and take responsibility for shared institutions."],
      ],
      programsTitle: "Core Programs",
      programs: [
        ["Citizen Proposals", "Citizens surface everyday problems and develop focused, constructive proposals for public consideration."],
        ["Civic Briefings", "We make complex institutions and policy questions accessible without sacrificing accuracy or context."],
        ["Civic Experiments", "Small, testable projects allow communities to learn what works before pursuing solutions at a larger scale."],
        ["Public Records", "We document proposals, decisions, and outcomes so that civil society can learn from experience."],
      ],
      issueTitle: "Current Civic Agendas",
      issues: [
        ["Enterprise and Citizens", "Companies are not merely targets of scrutiny but partners in expanding citizen freedom and choice."],
        ["Data Administration", "Digital administration and algorithms must be explained in citizens' language and checked against rights."],
        ["Public-Interest Accountability", "We ask whether public-interest institutions truly return value to citizens' lives."],
      ],
      ctaTitle: "Independent in politics, open to cooperation.",
      ctaDescription:
        "We welcome dialogue and practical collaboration with civic organizations, researchers, foundations, companies, and international partners who share an interest in capable citizens and an open civil society.",
    },
    about: {
      kicker: "ABOUT SEED",
      title: "SEED Civic Partners strengthens citizen agency and civic responsibility in South Korea.",
      description:
        "We see citizens as active participants in public life: people who can identify problems, ask informed questions, develop proposals, and test practical solutions. Our work supports an open civil society in which disagreement is handled through evidence, dialogue, and responsible action.",
      missionTitle: "Mission",
      mission:
        "Our mission is to turn everyday civic concerns into informed questions, practical proposals, accessible briefings, small-scale experiments, and public records. This work is guided by freedom, the rule of law, open and free markets, and civic responsibility.",
      independenceTitle: "Political and Organizational Independence",
      independence:
        "SEED Civic Partners is an independent, nonpartisan civic platform—not a campaign organization or an affiliate of any political party. We are committed to transparency in our partnerships, funding, and project outcomes.",
      valuesTitle: "Freedom, Rule of Law, Open and Free Markets, and Civic Responsibility",
      values:
        "These values provide a practical framework for public life. Individual freedom depends on fair rules and accountable institutions; open markets support choice and innovation; and civic responsibility helps people sustain trust, pluralism, and cooperation.",
      programsTitle: "Programs",
      programs: [
        ["Korea Civic Initiative", "A 2026 pilot bringing together a citizen proposal platform, civic briefings, small-scale experiments, public dialogue, and the Seed Citizen Fellows program."],
        ["Civic Briefings", "Accessible, evidence-informed materials and discussions on regulation, enterprise and citizens, property rights, the platform economy, digital government, and public accountability."],
        ["Citizen Proposals and Civic Experiments", "Cases proposed by citizens are selected and developed into small solution models whose outcomes are publicly recorded."],
        ["Forum on Enterprise and Civic Liberty", "A public space where companies and citizens discuss the conditions of a free society together."],
        ["Seed Citizen Fellows", "A 2026 pilot goal to equip 30 emerging civic leaders with skills in proposal development, public discussion, civic experimentation, and transparent documentation."],
      ],
      leadershipTitle: "Leadership",
      leadership:
        "SEED develops independent civic leadership through careful listening, evidence, dialogue, transparent documentation, and practical experimentation.",
      founderTitle: "Founder & President",
      founderName: "Park Kyung-seuk",
      founderBio:
        "Park Kyung-seuk has worked across civil society, public institutions, and corporate sustainability. His experience includes serving as a specialist member of the Presidential Commission on Sustainable Development (PCSD), executive chair of the Goyang branch of the Korean Federation for Environmental Movement, and founder and representative of the nonprofit KkumePume. He has also held roles related to corporate social contribution and sustainability management, served as an executive at the Korea Minting, Security Printing & ID Card Operating Corporation (KOMSCO), and advised Uijeongbu City.",
      contactTitle: "Contact",
      contact:
        "SEED is based in Seoul, South Korea. We welcome inquiries from civic organizations, think tanks, foundations, educators, researchers, and responsible businesses interested in international exchange or joint projects. Contact seedcivicpartners@gmail.com.",
      principles: [
        ["Subject", "Citizens are not objects of state policy. They are subjects who discover and articulate public problems."],
        ["Ethics", "Liberty requires civic ethics that respect the freedom of others and the order of the community."],
        ["Evolution", "Citizens grow through participation, records, learning, and experimentation."],
        ["Duty", "A free society cannot be sustained by rights alone. It requires responsibility and duty."],
      ],
    },
    simplePages: {
      roadmap: {
        title: "Roadmap",
        subtitle: "SEED grows through a proposal platform, civic freedom briefings, civic experiments, and training for free citizen leaders.",
      },
      support: {
        title: "Support SEED",
        subtitle: "Support helps build the proposal platform, produce briefings, operate experiments, and maintain transparent public records.",
      },
      proposalLab: {
        title: "Citizen Proposal Lab",
        subtitle: "A place where daily problems become two-minute proposals, citizen questions, and small civic experiments.",
      },
      todayFrame: {
        title: "Today Frame",
        subtitle: "We read today's issues through freedom, rule of law, markets, and civic responsibility.",
      },
      academy: {
        title: "SEED Academy",
        subtitle: "A learning space where citizens build the skills to examine facts, ask questions, develop proposals, and test practical solutions.",
      },
      dictionary: {
        title: "Civic Dictionary",
        subtitle: "We translate complex political and institutional language into words citizens can use.",
      },
      forum: {
        title: "Insights & Civic Briefings",
        subtitle: "English-language analysis and project updates are in development. This page will share concise, evidence-informed briefings for international partners and readers.",
      },
    },
  },
} satisfies Record<Language, unknown>;

export function getContent(language: Language) {
  return content[language];
}
