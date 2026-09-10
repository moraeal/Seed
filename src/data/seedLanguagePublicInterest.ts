import type { Language } from "../i18n";
import type { SeedLanguageArticle } from "./seedLanguage";

const publicInterestKo: SeedLanguageArticle = {
  slug: "public-interest-belongs-to-citizens",
  term: "공익",
  date: "2026-09-10",
  readMinutes: 6,
  newsletterEligible: true,
  homeHeroEligible: false,
  title: "공익은 국가의 것이 아니라 시민의 것이다",
  subtitle: "공익이 국가로 가면 관료화되고, 진영으로 가면 권력이 됩니다. 공익을 다시 시민에게 돌려줘야 합니다.",
  summary: "공익은 정부나 공익기관이 시민에게 베푸는 선의가 아닙니다. 시민이 공동체의 문제를 발견하고 서로 연결되어 직접 해결해 나가는 과정에서 만들어지는 사회적 가치입니다. 씨앗은 공익자금의 목적을 기존 조직의 유지가 아니라 새로운 시민의 참여를 키우는 데서 찾습니다.",
  keyPoints: [
    "공익의 최종 주인은 국가·기관·단체가 아니라 문제를 발견하고 책임 있게 행동하는 시민입니다.",
    "공익은 국가에서 관료화되고, 조직에서 자기보존의 수단이 되며, 진영에서 권력의 언어가 될 위험이 있습니다.",
    "공익의 시민화는 국가 책임을 떠넘기는 일이 아니라 평범한 시민이 작은 자원으로 공공의 문제를 직접 풀 수 있게 하는 일입니다.",
  ],
  heroImage: {
    src: "images/seed-language/public-interest-citizens-hero.webp",
    alt: "다양한 시민들이 동네 지도와 작은 프로젝트 카드에 씨앗 모양의 자원을 나누어 놓는 모습",
    caption: "공익의 자원은 한 조직에 쌓일 때보다 더 많은 시민의 작은 실천으로 이어질 때 사회를 넓게 바꿉니다.",
    credit: "씨앗의 소리 AI 제작 이미지",
  },
  inlineImage: {
    src: "images/seed-language/public-interest-citizens-action.webp",
    alt: "여러 세대의 시민들이 동네 지도를 보며 생활 문제의 해결책을 함께 논의하는 모습",
    caption: "강한 시민사회는 조직의 수가 아니라 문제를 발견하고 서로 연결되어 행동하는 시민의 수에서 시작됩니다.",
    credit: "씨앗의 소리 AI 제작 이미지",
  },
  inlineImageAfterSection: 6,
  sections: [
    {
      title: "공익이라는 말의 주인은 누구입니까",
      paragraphs: [
        "공익사업, 공익법인, 공익재단, 공익단체, 공익위원회. 이름 앞에 ‘공익’이라는 두 글자를 붙이면 그 조직과 사업은 특별한 정당성과 도덕성을 얻은 것처럼 보입니다. 그러나 공익이라는 명칭이 곧 공익을 보증하지는 않습니다.",
        "정부도, 공익기관도, 시민단체도 공익을 소유할 수 없습니다. 이들은 시민이 함께 만든 공익을 맡아 집행하거나 연결하는 수단일 뿐입니다. 수단이 주인처럼 행동하기 시작하면 시민은 자금을 내고 서비스를 받는 대상으로만 남게 됩니다.",
        "씨앗은 공익을 시민이 공동체의 문제를 발견하고, 서로 연결되고, 스스로 해결해 나가는 과정에서 만들어지는 사회적 가치로 봅니다. 따라서 공익의 최종 주인은 언제나 시민이어야 합니다.",
      ],
    },
    {
      title: "200억 원보다 더 중요한 질문",
      paragraphs: [
        "지방 체육 분야 보조금 조사는 이 원칙을 현실에서 보여주는 한 사례입니다. 국민권익위원회의 조사 보도에 따르면 일부 지방체육단체는 참가비·입장료·협찬금 등 자체 수익을 정산에서 누락하거나 증빙을 제대로 갖추지 못했습니다. 관련 사업에 투입된 지방보조금은 최소 200억 원 이상이었습니다.",
        "다만 200억 원 전부가 사라졌거나 횡령됐다는 뜻은 아닙니다. 이 숫자는 문제가 확인된 사업에 투입된 보조금 규모입니다. 정확한 피해액과 환수액은 따로 확인해야 합니다.",
        "더 근본적인 질문은 ‘왜 시민의 세금으로 만들어진 공익자금이 시민의 눈에서 멀어졌는가’입니다. 공익의 이름으로 집행된 돈이라면 수익과 비용, 결과와 책임이 시민에게 다시 설명되어야 합니다.",
      ],
      sourceIndices: [0, 1],
    },
    {
      title: "공익이 국가로 가면 관료화될 수 있습니다",
      paragraphs: [
        "공익이 정부 예산이 되는 순간 규정과 절차가 필요해집니다. 세금을 다루는 만큼 당연한 일입니다. 문제는 절차가 목적을 대신할 때 생깁니다. 사업을 왜 시작했는지보다 예산을 얼마나 집행했는지, 시민의 삶이 나아졌는지보다 서류를 빠짐없이 제출했는지가 성과가 되기 쉽습니다.",
        "국가는 공익을 독점적으로 생산하는 주체가 아니라 시민의 자유로운 활동이 가능하도록 최소한의 기준을 세우고, 부정과 특혜를 막고, 결과를 공개하는 조정자여야 합니다. 국가가 모든 문제의 해답을 정하면 시민은 참여자가 아니라 정책의 대상이 됩니다.",
      ],
    },
    {
      title: "공익이 조직으로 가면 기득권이 될 수 있습니다",
      paragraphs: [
        "처음에는 공익을 지원하기 위해 조직을 만듭니다. 조직을 운영하려면 직원과 사무실이 필요하고, 이를 유지하려면 예산과 사업이 계속 필요합니다. 이 과정이 반복되면 어느 순간 공익을 위해 조직이 존재하는 것이 아니라 조직을 유지하기 위해 공익사업이 필요한 관계로 뒤집힐 수 있습니다.",
        "씨앗이 정리한 「사회복지공동모금회 조직 평가 분석」은 독점적 지위에 따른 관료화, 지정기탁 중심의 재원구조, 풀뿌리 시민사회와의 거리 같은 구조적 질문을 제기합니다. 특히 공식 총모금액 기준과 함께 용도 제약이 없는 일반모금액을 기준으로 한 운영비 비율도 공개할 필요가 있다고 봅니다.",
        "이는 현행 법정 산식을 부정하거나 곧바로 법 위반을 주장하는 것이 아닙니다. 시민과 기업이 내놓은 자원 가운데 실제로 조직 유지에 들어가는 비용을 여러 기준으로 투명하게 공개하고 평가하자는 제안입니다.",
      ],
      sourceIndices: [2],
    },
    {
      title: "공익이 진영으로 가면 권력이 됩니다",
      paragraphs: [
        "시민사회는 본래 국가와 시장의 권력을 감시하는 공간입니다. 그러나 정부가 시민단체를 지원하고, 단체 출신 인사가 위원회에 들어가며, 다시 정부 사업을 같은 생태계의 조직이 수행하는 관계가 닫힌 순환으로 굳어지면 국가와 시민사회의 경계는 흐려집니다.",
        "특정한 정치적 가치가 ‘공익’이라는 이름으로 제도화될 때 자신들의 정책은 공익이 되고, 반대하는 시민은 공익에 반대하는 사람처럼 취급될 수 있습니다. 어느 진영도 시민 전체를 대신해 공익을 독점할 수 없습니다.",
        "공익을 주장할수록 대표성, 재정, 의사결정, 이해충돌을 더 투명하게 밝혀야 합니다. 공익은 비판을 면제하는 훈장이 아니라 더 높은 설명책임을 요구하는 약속이어야 합니다.",
      ],
    },
    {
      title: "가장 먼저 밀려나는 사람은 평범한 시민입니다",
      paragraphs: [
        "사회문제를 가장 가까이에서 발견하는 작은 모임이 오히려 공익자금에 접근하기 어려운 경우가 많습니다. 동네 주민이 위험한 통학로를 바꾸고 싶어도 법인이 없고, 청년들이 지역문제를 해결하려 해도 사업실적과 전문 회계인력이 없습니다.",
        "반면 오래된 조직은 직원과 사무실, 실적과 행정 역량을 이미 갖추고 있습니다. 같은 기관이 지원을 받아 다시 실적을 만들고 다음 지원에서도 유리해지는 구조가 반복되면 공익자금은 새로운 시민활동을 만드는 자본이 아니라 기존 조직을 재생산하는 자본이 됩니다.",
      ],
    },
    {
      title: "기업의 사회공헌도 시민과 함께 생산되어야 합니다",
      paragraphs: [
        "기업이 내놓는 사회공헌자금도 마찬가지입니다. 큰 재단과 중간지원조직을 거치면 전문적인 심사와 관리가 가능하지만, 조직과 위원회, 보고서를 유지하는 비용도 함께 커집니다. 정작 현장에서 작은 실험을 시작하는 시민에게는 자원이 닿지 않을 수 있습니다.",
        "기업시민은 기부금을 내는 기업을 뜻하는 데 그쳐서는 안 됩니다. 기업이 시민의 문제 발견과 실행을 존중하고, 자원과 전문성을 연결하며, 성과와 실패를 함께 공개하는 공익의 공동생산자가 되어야 합니다. 시민 역시 단순한 수혜자가 아니라 문제를 정의하고 해법을 시험하는 파트너여야 합니다.",
      ],
    },
    {
      title: "공익의 시민화는 국가 책임을 떠넘기는 일이 아닙니다",
      paragraphs: [
        "공익의 시민화는 정부의 일을 시민단체에 넘기거나 시민단체 보조금을 늘리자는 주장이 아닙니다. 안전, 법 집행, 기본적인 복지와 같은 국가의 책임은 분명히 남습니다. 시민화는 국가가 해야 할 일과 시민이 스스로 할 수 있는 일을 구분하고, 시민의 자율적 행동을 불필요하게 가로막지 않는 원칙입니다.",
        "정부와 기업의 공익자금 가운데 더 많은 부분을 기존 조직의 유지가 아니라 새로운 시민의 참여를 만드는 데 사용할 수 있습니다. 100억 원짜리 하나의 사업만 설계하기보다 300만 원, 500만 원, 1천만 원의 작은 씨앗자본으로 수많은 시민의 실험을 열어주는 방식입니다.",
        "작은 실험이 성공하면 다음 단계의 자원을 연결하고, 실패하면 원인과 교훈을 공개하면 됩니다. 공익은 실패하지 않는 거대한 사업 하나보다 새로운 시민이 계속 공공의 문제에 참여하도록 만드는 과정에서 더 단단해질 수 있습니다.",
      ],
    },
    {
      title: "공익의 주인을 다시 묻습니다",
      paragraphs: [
        "공익기관의 숫자가 많다고 시민사회가 강한 것은 아닙니다. 시민단체와 위원회가 늘어도 시민이 문제를 발견하고 말하고 행동할 통로가 좁다면 사회는 강해지지 않습니다.",
        "강한 시민사회는 스스로 문제를 발견하고, 서로 연결되고, 작은 자원을 가지고 직접 행동하는 시민이 많을 때 만들어집니다. 국가는 공정한 규칙과 공개를 책임지고, 기업은 자원과 역량을 연결하며, 공익조직은 시민의 행동을 대신하지 않고 돕는 역할로 돌아가야 합니다.",
        "공익은 국가가 시민에게 베푸는 것이 아닙니다. 조직이 시민을 대신해 소유하는 것도 아닙니다. 공익은 시민이 공동체의 문제에 직접 참여하면서 만들어내는 사회적 가치입니다. 공익을 국가에서 사회로, 기관에서 시민으로, 보조금에서 참여의 씨앗으로 돌려줘야 합니다.",
      ],
    },
  ],
  charts: [
    {
      title: "공익이 이동할 때 생기는 위험과 시민화의 기준",
      headers: ["경로", "구조적 위험", "시민화의 기준"],
      rows: [
        ["국가", "절차와 집행률이 목적과 결과를 대신하는 관료화", "최소한의 규칙, 결과 공개, 시민의 제안권"],
        ["조직", "사업이 조직 유지의 수단이 되는 자기보존과 기득권화", "운영비 공개, 일몰과 재평가, 신규 참여 기회"],
        ["진영", "특정 관점이 공익을 독점하고 반대 의견을 배제하는 권력화", "복수 관점, 반론권, 시민의 선택과 검증"],
      ],
      note: "국가·조직·진영이 언제나 공익을 해친다는 뜻은 아닙니다. 공익의 주인이 시민이라는 원칙이 사라질 때 생길 수 있는 위험을 구분한 것입니다.",
      afterSection: 4,
    },
  ],
  sources: [
    { label: "YTN — 권익위 ‘지방정부 체육보조금 부실 운영…환수 및 수사 의뢰’ (2026.09.10)", url: "https://www.ytn.co.kr/_ln/0101_202609101133502243" },
    { label: "오늘의뉴스 — 200억 원 체육보조금, 수익과 증빙은 왜 정산에서 빠졌나", url: "/news/local-sports-subsidy-accountability" },
    { label: "공익감시 — 사회복지공동모금회", url: "/monitoring/community-chest-of-korea" },
  ],
};

const publicInterestEn: SeedLanguageArticle = {
  ...publicInterestKo,
  term: "Public interest",
  title: "Public Interest Belongs to Citizens, Not the State",
  subtitle: "When public interest moves into the state it can become bureaucracy; when it moves into a camp it can become power. It must be returned to citizens.",
  summary: "Public interest is not a favor delivered by government or institutions. It is social value created when citizens identify shared problems, connect with one another and act. SEED argues that public-interest funding should cultivate new civic participation rather than merely preserve established organizations.",
  keyPoints: [
    "The final owners of public interest are citizens who identify problems and act responsibly—not governments, institutions or advocacy groups.",
    "Public interest risks bureaucratization in the state, self-preservation in organizations and political power when captured by a camp.",
    "Citizenizing public interest does not offload state duties; it enables ordinary people to test practical solutions with small, accessible resources.",
  ],
  heroImage: {
    ...publicInterestKo.heroImage,
    alt: "Citizens distributing seed-like resources among small neighborhood project cards around a local map",
    caption: "Public resources can change society more broadly when they enable many small civic actions instead of accumulating inside one organization.",
    credit: "AI image produced by SEED VOICE",
  },
  inlineImage: {
    ...publicInterestKo.inlineImage!,
    alt: "Citizens of several generations discussing solutions around a neighborhood map",
    caption: "A strong civil society begins not with the number of organizations, but with the number of citizens who identify problems, connect and act.",
    credit: "AI image produced by SEED VOICE",
  },
  sections: [
    { title: "Who owns the words ‘public interest’?", paragraphs: [
      "Public-interest projects, foundations, organizations and committees gain a special moral legitimacy from those two words. Yet a label cannot prove that an activity serves the public.",
      "Neither government nor a nonprofit can own public interest. They are instruments for implementing or connecting value citizens create together. When the instrument behaves like the owner, citizens are reduced to taxpayers, donors and recipients.",
      "SEED defines public interest as the social value created when citizens identify shared problems, connect with one another and work toward solutions. Its final owner must therefore remain the citizen.",
    ]},
    { title: "The question beyond KRW 20 billion", paragraphs: [
      "A recent review of local sports grants offers one concrete example. According to reporting on the Anti-Corruption and Civil Rights Commission's findings, some local sports bodies omitted participation fees, ticket revenue and sponsorship income from settlement records or failed to provide adequate evidence. At least KRW 20 billion in local grants had gone to the projects in question.",
      "That figure does not mean all KRW 20 billion was lost or embezzled. It is the amount of grant funding attached to projects where problems were identified. The actual loss and recovery amounts require separate verification.",
      "The deeper question is why public-interest money created from citizens' taxes became so distant from public view. Money spent in the name of public interest must be explained back to citizens through its revenue, costs, results and accountability.",
    ], sourceIndices: [0, 1]},
    { title: "Inside the state, public interest can become bureaucracy", paragraphs: [
      "Once public interest becomes a government budget, rules and procedures are necessary. The problem begins when procedure replaces purpose—when spending rates and complete forms count more than whether citizens' lives improved.",
      "The state should not monopolize the production of public value. It should set minimum rules, prevent fraud and favoritism, disclose outcomes and leave room for citizens to act. When government defines every answer, citizens become policy objects rather than participants.",
    ]},
    { title: "Inside organizations, public interest can become a vested interest", paragraphs: [
      "Organizations are created to support public causes. Staff, offices and budgets are then needed to run them. Repeated over time, the relationship can reverse: the organization no longer exists for the cause; the cause becomes necessary to preserve the organization.",
      "SEED's organizational review of the Community Chest of Korea raises structural questions about bureaucratization under an exclusive statutory position, reliance on designated giving and distance from grassroots civil society. It argues that operating costs should be disclosed not only against total fundraising but also against unrestricted general donations.",
      "This does not reject the statutory formula or allege a legal violation. It proposes transparent parallel measures that help citizens see how much genuinely flexible public-interest funding supports institutional maintenance.",
    ], sourceIndices: [2, 3]},
    { title: "Inside a political camp, public interest becomes power", paragraphs: [
      "Civil society should watch state and market power. But when government funds civic groups, their alumni enter public committees and the same network implements government projects in a closed loop, the boundary between state and civil society can blur.",
      "Once one political worldview is institutionalized as ‘the public interest,’ its preferred policy becomes public virtue and dissenting citizens can be treated as enemies of the public. No camp can represent all citizens or monopolize the public good.",
      "Those who invoke public interest should disclose representation, finances, decisions and conflicts of interest more clearly. Public interest is not a badge that exempts scrutiny; it is a promise of greater accountability.",
    ]},
    { title: "Ordinary citizens are pushed out first", paragraphs: [
      "Small groups closest to a problem often have the least access to public-interest funding. Neighbors seeking a safer school route may lack legal status; young residents testing a local solution may lack a track record or accounting staff.",
      "Established organizations already possess staff, offices, grant histories and administrative capacity. If the same institutions repeatedly win support and use it to strengthen their next application, public money reproduces organizations instead of cultivating new civic action.",
    ]},
    { title: "Corporate citizenship must also be co-produced with citizens", paragraphs: [
      "Large foundations and intermediaries can provide professional review and management, but they also add organizations, committees, reports and overhead between corporate social funding and civic action. Resources may never reach citizens ready to test a small solution.",
      "Corporate citizenship must mean more than corporate giving. Companies should respect citizens' ability to define problems, connect resources and expertise, and disclose both success and failure. Citizens should be partners who design and test solutions, not merely beneficiaries.",
    ]},
    { title: "Citizenization does not mean offloading the state's duties", paragraphs: [
      "Citizenizing public interest does not mean outsourcing government responsibilities to NGOs or increasing NGO subsidies. The state remains responsible for safety, law enforcement and basic social protection. Citizenization distinguishes those duties from the space in which citizens can act freely.",
      "A larger share of government and corporate public-interest funding can cultivate new participation rather than preserve existing institutions. Alongside a single KRW 10 billion program, society can open thousands of experiments with seed grants of KRW 3 million, 5 million or 10 million.",
      "Successful experiments can receive the next stage of support; failed ones can disclose what was learned. Public interest may grow stronger through a continuing flow of new citizens into public life than through one giant project designed never to fail.",
    ]},
    { title: "Ask again who owns public interest", paragraphs: [
      "More public-interest institutions do not automatically create a stronger civil society. More organizations and committees matter little if ordinary citizens lack room to identify problems, speak and act.",
      "A strong civil society grows when many citizens discover problems, connect with one another and act with small resources. The state should guarantee fair rules and disclosure, companies should connect resources and capabilities, and public-interest organizations should enable rather than replace civic action.",
      "Public interest is neither a state favor nor an institutional possession. It is social value created through citizens' direct participation in shared problems. We should move public interest from the state to society, from institutions to citizens, and from subsidy dependence to seeds of participation.",
    ]},
  ],
  charts: [{
    title: "Structural risks and citizen-centered safeguards",
    headers: ["Where it moves", "Structural risk", "Citizen-centered standard"],
    rows: [
      ["State", "Procedures and spending rates replace purpose and outcomes", "Minimum rules, public results, citizens' right to propose"],
      ["Organization", "Projects become instruments of institutional self-preservation", "Overhead disclosure, sunset review, access for newcomers"],
      ["Political camp", "One worldview monopolizes the public good and excludes dissent", "Plural viewpoints, right of reply, citizen choice and scrutiny"],
    ],
    note: "States, organizations and political groups do not inevitably harm public interest. These are the risks that emerge when the principle of citizen ownership disappears.",
    afterSection: 4,
  }],
  sources: [
    { label: "YTN — Local sports-grant review and recovery referrals (Sep. 10, 2026, Korean)", url: "https://www.ytn.co.kr/_ln/0101_202609101133502243" },
    { label: "Today's News — KRW 20 billion in sports grants: why were revenue and receipts missing?", url: "/news/local-sports-subsidy-accountability" },
    { label: "Public-Interest Watch — Community Chest of Korea", url: "/monitoring/community-chest-of-korea" },
  ],
};

export const publicInterestArticlesKo = [publicInterestKo];

export function getPublicInterestArticle(slug: string, language: Language) {
  if (slug !== publicInterestKo.slug) return undefined;
  return language === "en" ? publicInterestEn : publicInterestKo;
}
