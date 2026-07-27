import type { Language } from "../i18n";

export const AUDITION_URL = "https://moraeal.github.io/moraeal/";
export const MAGAZINE_URL = "https://jimd.kr/magazine";
export const CONTACT_EMAIL = "hello@seedcivicpartners.org";
export const CONTACT_URL = `mailto:${CONTACT_EMAIL}`;
export const PARTNERSHIP_URL = `mailto:${CONTACT_EMAIL}?subject=Partnership%20Inquiry%20for%20SEED%20Civic%20Partners`;

type NavItem = { label: string; path: string } | { label: string; url: string };

type SiteContent = {
  nav: NavItem[];
  actions: {
    proposal: string;
    support: string;
    language: string;
  };
  footer: {
    title: string;
    description: string;
    profile: string;
    contact: string;
  };
  home: {
    kicker: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    goalsLabel: string;
    stats: [string, string][];
    pillarsTitle: string;
    pillars: [string, string][];
    programsTitle: string;
    programs: [string, string][];
    issueTitle: string;
    issues: [string, string][];
    ctaTitle: string;
    ctaDescription: string;
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    missionTitle: string;
    mission: string;
    atlasAlignment: string;
    independenceTitle: string;
    independence: string;
    valuesTitle: string;
    values: string;
    organizationProfileTitle: string;
    organizationProfile: [string, string][];
    organizationProfileNote: string;
    programsTitle: string;
    programs: [string, string][];
    leadershipTitle: string;
    founderRole: string;
    founderName: string;
    founderBio: string;
    leadershipApproachTitle: string;
    leadership: string;
    contactTitle: string;
    contact: string;
    nonDiscriminationTitle: string;
    nonDiscrimination: string;
    principles: [string, string][];
  };
  roadmap: {
    title: string;
    subtitle: string;
    phases: {
      title: string;
      items: string[];
    }[];
  };
  support: {
    title: string;
    subtitle: string;
    body: string[];
    button: string;
  };
  simplePages: {
    proposalLab: { title: string; subtitle: string };
    todayFrame: { title: string; subtitle: string };
    dictionary: { title: string; subtitle: string };
    forum: { title: string; subtitle: string };
  };
};

export const content: Record<Language, SiteContent> = {
  ko: {
    nav: [
      { label: "씨앗연대 소개", path: "/about" },
      { label: "시민제안", url: AUDITION_URL },
      { label: "씨앗 공론장", path: "/forum" },
      { label: "로드맵", path: "/roadmap" },
      { label: "협력 및 후원", path: "/support" },
    ],
    actions: { proposal: "시민제안 올리기", support: "씨앗연대와 협력하기", language: "English" },
    footer: {
      title: "SEED Civic Partners | 씨앗연대",
      description: "씨앗연대는 시민제안, 브리핑, 시민실험, 공개기록을 통해 자유와 책임의 시민사회 인프라를 세우는 독립적 비당파 시민 플랫폼입니다.",
      profile: "2026년 설립 · 대한민국 · 독립적·비당파적 시민 플랫폼",
      contact: `Contact: ${CONTACT_EMAIL}`,
    },
    home: {
      kicker: "CITIZENSHIP IN ACTION",
      title: "작은 질문을 자유로운 시민의 실험으로 키웁니다.",
      description:
        "씨앗연대는 2026년 대한민국에서 출범한 신생 시민사회 이니셔티브입니다. 자유, 법치, 제한된 정부, 사유재산, 자유시장과 시민적 책임을 시민의 일상 언어로 번역합니다.",
      primary: "씨앗연대 소개 보기",
      secondary: "시민제안 참여하기",
      goalsLabel: "2026년 파일럿 목표",
      stats: [
        ["12", "시민자유 브리핑 제작 목표"],
        ["5", "시민실험 실행 목표"],
        ["30", "Seed Citizen Fellows 양성 목표"],
      ],
      pillarsTitle: "우리가 지키는 가치",
      pillars: [
        ["Freedom", "개인의 자유와 선택을 시민 삶의 언어로 설명합니다."],
        ["Rule of Law", "권력이 아니라 법과 절차가 시민의 삶을 보호해야 합니다."],
        ["Free Markets", "우리는 사유재산, 자발적 교환, 기업가정신과 열린 경쟁을 자유와 혁신, 공동 번영의 기반으로 존중합니다."],
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
      ctaTitle: "정당 정치가 아니라 자유를 위한 시민 플랫폼입니다.",
      ctaDescription: "씨앗연대는 특정 정당이나 선거운동의 하부조직이 아닌, 가치에 분명하고 조직적으로 독립적인 비당파 시민 플랫폼입니다.",
    },
    about: {
      kicker: "ABOUT SEED",
      title: "씨앗연대는 한국 시민사회에 자유의 언어를 다시 심는 독립적 비당파 시민 플랫폼입니다.",
      description:
        "우리는 시민을 국가 정책의 수혜자나 동원의 대상으로 보지 않습니다. 시민은 공적 문제를 발견하고 질문하고 제안하며 책임 있게 실험할 수 있는 자유로운 주체입니다.",
      missionTitle: "Mission",
      mission:
        "시민의 일상 문제를 자유, 법치, 제한된 정부, 시장 자율성, 시민 책임의 언어로 번역하고, 이를 시민제안, 브리핑, 공론장, 작은 실험, 공개 기록으로 연결합니다.",
      atlasAlignment:
        "씨앗연대는 제한된 정부가 법치와 사유재산, 자유시장과 모든 개인의 동등한 권리를 보호하는 자유롭고 번영하며 평화로운 사회를 지향합니다.",
      independenceTitle: "Political and Organizational Independence",
      independence:
        "씨앗연대는 어떤 정당의 선거 조직이나 보조 조직이 아닙니다. 우리는 비당파적 정치 독립성을 지키며, 재정과 협력, 프로젝트 결과를 투명하게 기록합니다.",
      valuesTitle: "Freedom, Rule of Law, Free Markets, and Civic Responsibility",
      values:
        "씨앗연대는 개인의 자유, 법치, 제한된 정부, 시장 자율성, 사유재산과 시민사회의 책임을 핵심 가치로 삼습니다. 자유는 무책임한 방임이 아니라 타인의 자유와 공동체 질서를 존중하는 시민 윤리와 함께 지속됩니다.",
      organizationProfileTitle: "Organization Profile",
      organizationProfile: [
        ["조직명", "씨앗연대·SEED Civic Partners"],
        ["설립연도", "2026년"],
        ["소재 국가", "대한민국"],
        ["조직 상태", "독립적인 비영리 시민사회 조직으로 발전 중인 시민 이니셔티브"],
        ["정치적 지위", "비당파적이며 조직적으로 독립"],
        ["연락처", CONTACT_EMAIL],
      ],
      organizationProfileNote:
        "씨앗연대는 2026년 대한민국에서 출범한 독립적이고 비당파적인 시민 이니셔티브입니다. 현재 비영리 시민사회 조직으로 성장하기 위한 거버넌스, 파트너십, 프로그램과 독립적 법적 기반을 구축하고 있습니다.",
      programsTitle: "Programs",
      programs: [
        ["Korea Civic Freedom Initiative", "1년 파일럿 프로젝트로 시민제안 플랫폼, 자유 브리핑, 시민실험, 기업과 시민 자유 포럼, Seed Citizen Fellows를 추진합니다."],
        ["Civic Freedom Briefings", "과잉규제, 기업과 시민의 관계, 재산권과 생활권, 플랫폼 경제, 데이터 행정, 공익기관 책임성을 시민 언어로 정리합니다."],
        ["Citizen Proposals and Civic Experiments", "시민이 직접 제안한 사례를 선정해 작고 검증 가능한 시민실험으로 발전시키고 공개 기록으로 남깁니다."],
        ["Forum on Enterprise and Civic Liberty", "기업을 시민사회의 적이 아니라 자유롭고 책임 있는 사회를 함께 만드는 파트너로 재해석하는 공론장을 엽니다."],
        ["Seed Citizen Fellows", "시민제안, 브리핑, 토론 진행, 실험, 기록, 자유 가치 설명을 훈련받는 시민 리더 30명을 양성합니다."],
      ],
      leadershipTitle: "Leadership",
      founderRole: "창립자·대표",
      founderName: "박경석",
      founderBio:
        "박경석 대표는 공공·기업·시민사회 거버넌스 분야의 경험을 가진 시민사회 활동가입니다. 대통령 자문 지속가능발전위원회 전문위원과 고양환경운동연합 집행위원장으로 활동했습니다.",
      leadershipApproachTitle: "Our Leadership Approach",
      leadership:
        "씨앗연대의 리더십은 정당 조직의 청년부나 선거 동원 구조가 아니라, 시민사회 안에서 자유의 가치를 설명하고 실험하는 독립 시민 리더십을 지향합니다.",
      contactTitle: "Contact",
      contact: "파트너십, 멘토십, 교육, 연구, 공동 프로젝트, 미디어 협력, 기관 후원 제안은 hello@seedcivicpartners.org 로 연락해 주세요.",
      nonDiscriminationTitle: "동등한 존엄과 비차별",
      nonDiscrimination:
        "씨앗연대는 모든 사람의 동등한 존엄과 개인의 권리를 존중합니다. 우리는 직업적 지위, 성적 지향, 성별, 연령, 인종, 혼인 여부, 민족 또는 종교를 이유로 한 차별과 불관용에 반대합니다.",
      principles: [
        ["Subject", "시민은 정책의 객체가 아니라 공적 문제를 발견하고 말할 수 있는 주체입니다."],
        ["Ethics", "자유는 타인의 자유와 공동체 질서를 존중하는 시민 윤리를 필요로 합니다."],
        ["Evolution", "시민은 참여, 기록, 학습, 실험을 통해 성장합니다."],
        ["Duty", "자유로운 사회는 권리만이 아니라 자유를 지키는 시민의 책임과 의무를 필요로 합니다."],
      ],
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "씨앗연대는 승인되지 않은 파트너십을 전제로 하지 않고, 독립적인 시민사회 인프라를 단계적으로 구축합니다.",
      phases: [
        {
          title: "1단계 — 기반 구축 | 2026년",
          items: [
            "씨앗연대의 거버넌스와 운영원칙 정립",
            "국문·영문 공식 홈페이지 구축",
            "법률·미디어·연구·기업·시민사회 파트너 네트워크 형성",
            "국제 자유주의 시민사회 네트워크의 교육과 파트너십 기회 모색",
            "시민제안과 공개기록 기반 구축",
          ],
        },
        {
          title: "2단계 — 첫해 파일럿 | 최초 12개월",
          items: [
            "시민자유 브리핑 12편 제작",
            "작고 측정 가능한 시민실험 5건 실행",
            "Seed Citizen Fellows 30명 양성",
            "기업과 시민의 자유 포럼 개최",
            "미디어·법률·기업 파트너와 공동 프로젝트 1건 이상 실행",
            "투명한 연간 활동·재정보고서 발행",
          ],
        },
        {
          title: "3단계 — 시민사회 생태계 확장 | 파일럿 이후",
          items: [
            "독립적인 시민사회 액터와 프로젝트팀 지원",
            "의제별·지역별 파트너 네트워크 확장",
            "시민지식과 시민실험 공개 아카이브 구축",
            "한국 시민사회 생태계 연례보고서 개발",
            "지속 가능하고 독립적인 비영리 제도 기반 확립",
          ],
        },
      ],
    },
    support: {
      title: "협력 및 후원",
      subtitle: "씨앗연대는 창립 파트너십, 멘토십, 교육, 연구, 공동 시민 프로젝트, 미디어 협력과 기관 후원 제안을 기다립니다.",
      body: [
        "씨앗연대는 창립 파트너십, 멘토십, 교육, 연구, 공동 시민 프로젝트, 미디어 협력과 기관 후원에 관한 제안을 기다립니다.",
        "현재 독립적인 비영리 조직 및 재정 기반을 구축하고 있으며, 공개 온라인 기부 시스템은 아직 운영하지 않습니다.",
      ],
      button: "씨앗연대에 문의하기",
    },
    simplePages: {
      proposalLab: { title: "Citizen Proposal Lab", subtitle: "생활 속 문제를 2분 제안, 시민 질문, 작은 실험으로 키우는 공간입니다." },
      todayFrame: { title: "Today Frame", subtitle: "오늘의 이슈를 자유, 법치, 시장, 시민 책임의 관점으로 다시 읽습니다." },
      dictionary: { title: "Civic Dictionary", subtitle: "어려운 정치와 제도 언어를 시민이 이해할 수 있는 말로 바꿉니다." },
      forum: { title: "SEED Public Forum", subtitle: "전인미답 매거진을 씨앗연대 공론장 안에서 함께 읽습니다." },
    },
  },
  en: {
    nav: [
      { label: "About SEED", path: "/about" },
      { label: "Citizen Proposals", url: AUDITION_URL },
      { label: "Public Forum", path: "/forum" },
      { label: "Roadmap", path: "/roadmap" },
      { label: "Partnership & Support", path: "/support" },
    ],
    actions: { proposal: "Submit a Proposal", support: "Partner with SEED", language: "한국어" },
    footer: {
      title: "SEED Civic Partners",
      description:
        "An independent and nonpartisan civic initiative building pro-liberty civic infrastructure in South Korea through citizen proposals, briefings, civic experiments, and public records.",
      profile: "Founded in 2026 · Republic of Korea · Independent and Nonpartisan",
      contact: `Contact: ${CONTACT_EMAIL}`,
    },
    home: {
      kicker: "BUILDING PRO-LIBERTY CIVIC INFRASTRUCTURE",
      title: "Planting new civic soil for liberty in South Korea.",
      description:
        "SEED Civic Partners is a new civic initiative founded in South Korea in 2026. We translate freedom, rule of law, limited government, private property, free markets, and civic responsibility into citizens' everyday language.",
      primary: "About SEED",
      secondary: "Join Citizen Proposals",
      goalsLabel: "2026 PILOT GOALS",
      stats: [
        ["12", "Civic Freedom Briefings planned"],
        ["5", "Civic Experiments planned"],
        ["30", "Seed Citizen Fellows to be trained"],
      ],
      pillarsTitle: "Values We Stand For",
      pillars: [
        ["Freedom", "We explain liberty as a practical civic value for ordinary citizens."],
        ["Rule of Law", "Public power must be limited by law, procedure, and accountability."],
        ["Free Markets", "We defend private property, voluntary exchange, entrepreneurship, and open competition as foundations of freedom, innovation, and shared prosperity."],
        ["Civic Responsibility", "A free society requires citizens who respect the freedom of others."],
      ],
      programsTitle: "Core Programs",
      programs: [
        ["Citizen Proposals", "Citizens identify daily burdens, excessive administration, regulations, and tensions between markets and citizens."],
        ["Civic Freedom Briefings", "Complex institutions and policies are explained in citizen-friendly language."],
        ["Civic Experiments", "SEED begins with small solution models in one community, one profession, or one daily-life problem."],
        ["Public Records", "Proposals and experiments become civic assets that help civil society learn and grow."],
      ],
      issueTitle: "Current Civic Agendas",
      issues: [
        ["Enterprise and Citizens", "Companies are not merely targets of scrutiny but partners in expanding citizen freedom and choice."],
        ["Data Administration", "Digital administration and algorithms must be explained in citizens' language and checked against rights."],
        ["Public-Interest Accountability", "We ask whether public-interest institutions truly return value to citizens' lives."],
      ],
      ctaTitle: "Nonpartisan in politics, clear in values.",
      ctaDescription:
        "SEED Civic Partners is not an auxiliary organization of any political party or election campaign. It is an independent civil society platform designed to defend a free society.",
    },
    about: {
      kicker: "ABOUT SEED",
      title: "SEED Civic Partners is an independent civic platform reviving the language of liberty in Korean civil society.",
      description:
        "We do not see citizens as passive beneficiaries of state policy or objects of political mobilization. Citizens are free and responsible agents who can discover public problems, ask questions, make proposals, and test solutions.",
      missionTitle: "Mission",
      mission:
        "Our mission is to translate citizens' daily problems into the language of freedom, rule of law, limited government, market autonomy, and civic responsibility, then connect them to citizen proposals, civic briefings, forums, small experiments, and public records.",
      atlasAlignment:
        "SEED works toward a free, prosperous, and peaceful society where limited government safeguards the rule of law, private property, free markets, and equal individual rights.",
      independenceTitle: "Political and Organizational Independence",
      independence:
        "SEED Civic Partners is not a campaign organization or an auxiliary body of any political party. We remain nonpartisan in politics, transparent in finance and partnerships, and independent in organization.",
      valuesTitle: "Freedom, Rule of Law, Free Markets, and Civic Responsibility",
      values:
        "SEED stands for individual freedom, the rule of law, limited government, private property, market autonomy, and the responsibility of civil society. Liberty is not irresponsible laissez-faire. It grows with civic ethics, respect for the freedom of others, and responsibility for the community.",
      organizationProfileTitle: "Organization Profile",
      organizationProfile: [
        ["Organization", "SEED Civic Partners"],
        ["Founded", "2026"],
        ["Country", "Republic of Korea"],
        ["Organizational Status", "Independent civic initiative being developed as a nonprofit civil society organization"],
        ["Political Position", "Nonpartisan and organizationally independent"],
        ["Contact", CONTACT_EMAIL],
      ],
      organizationProfileNote:
        "SEED Civic Partners was founded in 2026 as an independent and nonpartisan civic initiative in South Korea. We are currently developing our governance, partnerships, programs, and independent legal structure as a nonprofit civil society organization.",
      programsTitle: "Programs",
      programs: [
        ["Korea Civic Freedom Initiative", "A one-year pilot to build the proposal platform, civic freedom briefings, civic experiments, enterprise-citizen forums, and Seed Citizen Fellows."],
        ["Civic Freedom Briefings", "Citizen-friendly reports, card-news content, short videos, and public discussions on overregulation, enterprise and citizens, property rights, platform regulation, data administration, and public accountability."],
        ["Citizen Proposals and Civic Experiments", "Cases proposed by citizens are selected and developed into small solution models whose outcomes are publicly recorded."],
        ["Forum on Enterprise and Civic Liberty", "A public space where companies and citizens discuss the conditions of a free society together."],
        ["Seed Citizen Fellows", "A training track for 30 civic leaders in proposals, briefings, public discussion, civic experimentation, public recording, and explaining liberty."],
      ],
      leadershipTitle: "Leadership",
      founderRole: "Founder and Executive Director",
      founderName: "Park Kyung-seuk",
      founderBio:
        "Park Kyung-seuk is a Korean civil society organizer with experience in public-private-civic governance. He served as an expert committee member of the Presidential Commission on Sustainable Development and as Executive Committee Chair of the Goyang Federation for Environmental Movement.",
      leadershipApproachTitle: "Our Leadership Approach",
      leadership:
        "SEED cultivates independent civic leaders, not youth wings of political parties. Leaders are trained to speak about liberty inside civil society through records, dialogue, and practical experiments.",
      contactTitle: "Contact",
      contact:
        "For founding partnerships, mentorship, training, research, joint civic projects, media collaboration, or institutional support, contact hello@seedcivicpartners.org.",
      nonDiscriminationTitle: "Equal Dignity and Non-Discrimination",
      nonDiscrimination:
        "SEED Civic Partners respects the equal dignity and individual rights of all people. We oppose discrimination and intolerance based on professional status, sexual orientation, gender, age, race, marital status, ethnicity, or religion.",
      principles: [
        ["Subject", "Citizens are not objects of state policy. They are subjects who discover and articulate public problems."],
        ["Ethics", "Liberty requires civic ethics that respect the freedom of others and the order of the community."],
        ["Evolution", "Citizens grow through participation, records, learning, and experimentation."],
        ["Duty", "A free society cannot be sustained by rights alone. It requires responsibility and duty."],
      ],
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "SEED Civic Partners is building independent civil society infrastructure step by step without implying any approved partnership in advance.",
      phases: [
        {
          title: "Phase 1 — Foundation | 2026",
          items: [
            "Establish SEED’s governance and operating principles",
            "Develop the English and Korean public website",
            "Build networks with legal, media, research, corporate, and civic partners",
            "Pursue training and partnership opportunities with international pro-liberty networks",
            "Launch the citizen proposal and public-record infrastructure",
          ],
        },
        {
          title: "Phase 2 — First-Year Pilot | First 12 Months",
          items: [
            "Publish 12 Civic Freedom Briefings",
            "Conduct 5 small and measurable Civic Experiments",
            "Train 30 Seed Citizen Fellows",
            "Convene a Forum on Enterprise and Civic Liberty",
            "Launch at least one joint project with a media, legal, or corporate partner",
            "Publish a transparent annual activity and financial report",
          ],
        },
        {
          title: "Phase 3 — Civic Ecosystem Growth | After the Pilot",
          items: [
            "Support independent civic actors and project teams",
            "Expand issue-based and regional partner networks",
            "Build a public archive of civic knowledge and experiments",
            "Develop an annual Korean Civil Society Ecosystem Report",
            "Establish a sustainable and independent nonprofit institutional structure",
          ],
        },
      ],
    },
    support: {
      title: "Partnership & Support",
      subtitle: "SEED Civic Partners welcomes inquiries regarding founding partnerships, mentorship, training, research, joint civic projects, media collaboration, and institutional support.",
      body: [
        "SEED Civic Partners welcomes inquiries regarding founding partnerships, mentorship, training, research, joint civic projects, media collaboration, and institutional support.",
        "We are currently building our independent nonprofit and financial infrastructure. A public online donation system is not yet in operation.",
      ],
      button: "Contact SEED",
    },
    simplePages: {
      proposalLab: { title: "Citizen Proposal Lab", subtitle: "A place where daily problems become two-minute proposals, citizen questions, and small civic experiments." },
      todayFrame: { title: "Today Frame", subtitle: "We read today's issues through freedom, rule of law, markets, and civic responsibility." },
      dictionary: { title: "Civic Dictionary", subtitle: "We translate complex political and institutional language into words citizens can use." },
      forum: { title: "SEED Public Forum", subtitle: "Read JIMD Magazine inside the SEED public forum frame." },
    },
  },
};

export function getContent(language: Language) {
  return content[language];
}
