import type { SeedLanguageArticle } from "./seedLanguageBase";

const imageRoot = "images/seed-language/public-beyond-state-ownership";

export const publicArticleKo: SeedLanguageArticle = {
  slug: "public-beyond-state-ownership",
  term: "공공",
  date: "2026-09-22",
  readMinutes: 9,
  newsletterEligible: true,
  title: "공공 — 국가가 운영하면 모두 시민의 것이 되는가",
  subtitle: "공익이 우리가 이루려는 가치라면, 공공은 그 가치를 함께 만들고 책임지는 방식이다",
  summary: "공공은 국가가 소유하거나 운영한다는 뜻만이 아닙니다. 우리의 선택이 다른 사람의 삶에 영향을 주고, 그 결과를 함께 말하고 조정하며 책임지는 관계를 뜻합니다. 공익이 목적이라면 공공은 그 목적을 시민과 함께 이루는 방식입니다.",
  keyPoints: [
    "공익은 우리가 이루려는 좋은 결과이고, 공공은 그 결과를 함께 만들고 책임지는 방식입니다.",
    "국가가 운영한다고 저절로 공공적인 것도, 민간이 운영한다고 공공성이 없는 것도 아닙니다.",
    "시민이 필요한 기능을 실제로 이용하고, 결정 과정에 말할 수 있으며, 결과를 확인할 수 있어야 공공은 살아납니다.",
  ],
  heroImage: {
    src: `${imageRoot}/hero.webp`,
    alt: "공공기관과 민간의원이 마주한 보행로를 여러 세대의 시민이 함께 이용하는 모습",
    caption: "공공은 건물의 소유 표지보다 시민이 함께 이용하고 서로의 삶에 영향을 주는 관계에서 시작됩니다.",
    credit: "씨앗의 소리 AI 제작 이미지",
  },
  inlineImage: {
    src: `${imageRoot}/local-bus.webp`,
    alt: "지역 버스정류장에서 노인과 학생, 의료인과 유아 동반 시민이 버스를 이용하는 모습",
    caption: "버스 한 대가 시민의 일상을 잇기 위해서는 행정의 기준, 민간 운영자의 책임, 노동자의 서비스, 시민의 이용이 함께 작동해야 합니다.",
    credit: "씨앗의 소리 AI 제작 이미지",
  },
  inlineImageAfterSection: 2,
  leadParagraphs: [
    "동네의 민간 산부인과에는 의사와 간호사가 있고 분만실도 열려 있습니다. 가까운 공공병원에는 간판과 건물은 있지만 분만할 의료진이 없습니다. 이때 주민에게 더 공공적인 병원은 어디일까요.",
    "최근 씨앗의 소리는 [「공공의료는 병원 간판으로 증명되지 않는다」](/columns/public-health-proved-by-function)에서 이 질문을 다뤘습니다. 김천의 분만병원, 안동의 닥터헬기, 전남의 공공·민간 분만망은 공공의료가 소유 형태 하나로 유지되지 않는다는 사실을 보여줬습니다.",
    "이 사례는 의료만의 이야기가 아닙니다. 버스와 학교, 공원과 도서관, 돌봄과 재난 대응에서도 우리는 ‘공공’이라는 말을 자주 씁니다. 그러나 국가나 지방자치단체가 운영하면 곧 공공이고, 민간이 운영하면 사적인 것이라고 나누는 순간 중요한 질문이 사라집니다. 시민에게 필요한 기능이 실제로 작동하는가. 결정 과정에 시민의 목소리가 들어가는가. 결과에 대해 누가 설명하고 책임지는가.",
  ],
  charts: [
    {
      title: "공익과 공공은 무엇이 다른가",
      headers: ["구분", "뜻", "시민이 확인할 질문"],
      rows: [
        ["공익", "공동체에 이로운 가치와 결과", "누구의 삶이 실제로 나아졌는가"],
        ["공공", "그 가치를 함께 만들고 조정하고 책임지는 관계와 방식", "누가 결정했고, 시민은 말할 수 있었으며, 결과가 공개됐는가"],
        ["공공기관", "공공의 목적을 수행하도록 만든 하나의 수단", "간판이 아니라 필요한 기능을 제대로 수행했는가"],
      ],
      note: "공익과 공공은 서로 떨어진 말이 아닙니다. 좋은 목적만 있고 시민의 참여와 책임이 없으면 공공성이 약해지고, 절차만 갖추고 시민의 삶이 나아지지 않으면 공익을 이루었다고 보기 어렵습니다.",
      afterSection: 1,
    },
  ],
  sections: [
    {
      title: "공공은 ‘국가의 것’이 아니라 ‘함께 관련된 것’입니다",
      paragraphs: [
        "한자로 공공(公共)은 공평할 공(公)과 함께할 공(共)이 만난 말입니다. 오늘 우리가 쓰는 ‘공공’은 개인 한 사람에게만 속하지 않고 여러 사람에게 함께 관련된 일을 가리킵니다. 영어 public도 라틴어 publicus에서 왔고, 시민 전체와 관련된 것이라는 뜻을 품고 있습니다.",
        "그래서 공공의 반대는 단순히 민간이 아닙니다. 다른 사람의 삶에 영향을 주면서도 그 영향을 함께 의논하지 않고, 책임도 나누지 않는 상태가 공공과 더 멀리 있습니다.",
        "국가와 지방자치단체는 공공을 지키는 중요한 제도입니다. 세금을 걷고 규칙을 만들며 시장만으로 유지하기 어려운 서비스를 책임집니다. 그러나 국가가 소유했다는 사실 하나만으로 시민의 필요가 충족되는 것은 아닙니다. 문이 닫힌 공공시설, 이용하기 어려운 행정서비스, 시민의 질문에 답하지 않는 위원회는 법적으로 공공의 이름을 가졌어도 공공성을 충분히 이루었다고 보기 어렵습니다.",
      ],
      sourceIndices: [0, 1, 2],
    },
    {
      title: "공익은 목적이고, 공공은 그 목적을 이루는 방식입니다",
      paragraphs: [
        "공익은 사회 전체에 이로운 가치나 결과를 말합니다. 아이들이 안전하게 학교에 가는 것, 아픈 사람이 제때 치료받는 것, 누구나 깨끗한 공기와 물을 누리는 것이 공익입니다.",
        "공공은 그 좋은 결과를 누가 정하고, 어떻게 만들며, 실패했을 때 누가 책임질지를 다루는 말입니다. 통학로의 안전이 공익이라면, 주민과 학교, 경찰과 지방정부가 위험을 확인하고 해결책을 조정하며 결과를 공개하는 과정이 공공입니다.",
        "좋은 목적을 내세웠다고 모든 방식이 공공적인 것은 아닙니다. 시민에게 설명하지 않고 전문가와 기관만 결정하거나, 지원을 받은 조직이 성과를 공개하지 않거나, 반대 의견을 공익의 적으로 몰아세운다면 목적이 좋아도 공공성은 약해집니다.",
      ],
    },
    {
      title: "공공은 멀리 있지 않습니다",
      paragraphs: [
        "아파트 층간소음은 두 집만의 다툼처럼 보입니다. 그러나 소리가 여러 세대의 생활에 영향을 주고, 관리규약과 건축기준, 중재 절차가 필요해지는 순간 공공의 문제가 됩니다. 철학자 존 듀이는 한 행동의 결과가 당사자를 넘어 다른 사람들에게 넓게 미칠 때 그 영향을 다룰 ‘공중’이 생긴다고 설명했습니다.",
        "동네 버스도 마찬가지입니다. 버스 회사는 민간기업일 수 있지만 노선이 사라지면 학생의 통학, 노인의 진료, 노동자의 출근이 함께 흔들립니다. 지방정부가 노선을 정하고 재정을 지원하는 것만으로는 충분하지 않습니다. 실제 운행 횟수와 안전, 접근성, 주민의 필요를 함께 확인해야 공공성이 생깁니다.",
        "공원은 지방정부 소유라서만 공공적인 것이 아닙니다. 장애인과 유아차가 들어갈 수 있는지, 특정 행사나 상업시설이 공간을 사실상 독점하지 않는지, 이용 규칙을 시민이 납득할 수 있는지가 중요합니다. 공공은 우리 생활에서 ‘나만의 선택’과 ‘함께 사는 조건’이 만나는 자리마다 나타납니다.",
      ],
      sourceIndices: [3],
    },
    {
      title: "공공은 시민이 말할 수 있을 때 살아납니다",
      paragraphs: [
        "시민은 공공서비스의 손님만이 아닙니다. 세금을 내고 서비스를 이용하는 데서 끝나지 않고, 무엇이 필요한지 말하고 결정의 이유를 듣고 결과를 따질 수 있어야 합니다.",
        "한나 아렌트는 사람들이 서로 다른 관점을 드러내며 함께 말하고 행동하는 공간을 정치의 중요한 조건으로 봤습니다. 위르겐 하버마스가 말한 공론장도 시민이 권력의 결정을 그대로 받아들이는 대신 공개적으로 이유를 묻고 의견을 만드는 공간에 가깝습니다.",
        "주민설명회를 한 번 열고, 이미 정한 계획을 발표하고, 질문 몇 개를 받았다고 공공성이 완성되지는 않습니다. 어떤 의견이 반영됐고 무엇이 받아들여지지 않았는지, 그 이유가 무엇인지 다시 시민에게 돌아와야 합니다. 참여의 횟수가 아니라 결정이 열려 있었는지가 중요합니다.",
      ],
      sourceIndices: [4, 5],
    },
    {
      title: "공공의료는 왜 병원 간판으로 증명되지 않는가",
      paragraphs: [
        "공공의료는 공공을 가장 선명하게 보여주는 사례입니다. 「공공보건의료에 관한 법률」은 공공보건의료를 국가·지방자치단체와 보건의료기관이 지역과 계층, 분야에 관계없이 국민의 보편적인 의료 이용을 보장하고 건강을 보호·증진하는 활동으로 정의합니다. 주체에 보건의료기관이 포함된다는 점은 공공의료를 국공립병원 소유와 같게 볼 수 없다는 뜻입니다.",
        "김천에서는 민간병원이 먼저 분만취약지 지원사업을 맡았고, 이후 김천의료원도 15년 만에 분만 산부인과를 다시 열었습니다. 안동의 민간병원은 닥터헬기의 거점 역할을 맡고 있습니다. 전남에서는 공공병원과 민간병원이 함께 분만망을 구성했습니다.",
        "여기서 국가의 책임이 줄어드는 것은 아닙니다. 오히려 더 구체적으로 바뀝니다. 지역에 꼭 필요한 기능을 정하고, 공공과 민간 가운데 실제 수행할 기관과 계약하며, 인력과 비용을 지원하고, 진료시간·수용률·전원율·치료 결과를 공개해야 합니다.",
        "공공병원은 필요합니다. 그러나 공공병원만 세었다고 공공의료가 완성되지는 않습니다. 시민이 필요한 순간 실제로 치료받을 수 있어야 합니다. 공공의 성적표는 소유권이 아니라 시민의 이동거리와 기다린 시간, 끝까지 이어진 치료에서 나옵니다.",
      ],
      sourceIndices: [0, 7],
    },
    {
      title: "국가와 시장 가운데 하나만 고를 필요는 없습니다",
      paragraphs: [
        "공공을 말하면 국가가 직접 해야 한다는 주장과 시장에 맡겨야 한다는 주장이 곧바로 맞섭니다. 그러나 우리의 생활은 이미 그 둘만으로 나뉘지 않습니다. 주민이 함께 관리하는 공동체 공간, 협동조합, 민간이 운영하지만 공적 책임을 계약한 병원과 버스처럼 여러 방식이 존재합니다.",
        "엘리너 오스트롬은 공동의 자원을 정부나 시장 가운데 하나만이 아니라, 이용자들이 스스로 만든 규칙과 감시를 통해 지속 가능하게 관리할 수 있음을 보여줬습니다. 중요한 것은 운영 주체의 이름보다 규칙이 분명한지, 영향을 받는 사람이 결정에 참여하는지, 책임을 피할 수 없게 되어 있는지입니다.",
        "국가는 최소한의 권리와 접근성을 보장하고, 시장은 다양한 해법과 역량을 제공할 수 있습니다. 시민과 공동체는 현장의 필요를 발견하고 감시하며 직접 해결책을 만들 수 있습니다. 어느 하나가 다른 모두를 대신하려 할 때 공공은 약해집니다.",
      ],
      sourceIndices: [6],
    },
    {
      title: "씨앗은 공공을 이렇게 봅니다",
      paragraphs: [
        "씨앗은 공공을 국가의 크기로 판단하지 않습니다. 공공기관의 수가 늘고 예산이 커졌다는 사실만으로 시민의 삶이 나아졌다고 말하지 않습니다. 반대로 민간이 참여했다는 이유만으로 공공성이 사라졌다고 보지도 않습니다.",
        "필요한 기능이 실제로 작동하는가. 누구나 접근할 수 있는가. 영향을 받는 시민이 말할 수 있는가. 결정과 비용, 결과가 공개되는가. 실패했을 때 책임을 묻고 고칠 수 있는가. 씨앗이 보는 공공의 기준은 이 다섯 가지입니다.",
        "공공은 어느 조직의 소유물이 아닙니다. 국가가 독점할 수도 없고, 시장에 맡겨 두기만 해서도 지켜지지 않습니다. 시민이 함께 영향을 받고, 함께 말하며, 함께 책임질 수 있을 때 공공은 비로소 살아납니다.",
        "공공의 주어는 국가가 아닙니다. 시민입니다.",
      ],
    },
  ],
  sources: [
    { label: "국가법령정보센터 — 공공보건의료에 관한 법률 제2조", url: "https://law.go.kr/LSW//lsLawLinkInfo.do?chrClsCd=010202&lsId=002019&lsJoLnkSeq=900122218&print=print" },
    { label: "한국보건사회연구원 — 보건복지의 공공성, 넉넉한 접근이 필요하다", url: "https://www.kihasa.re.kr/hswr/v.42/1/5/%EB%B3%B4%EA%B1%B4%EB%B3%B5%EC%A7%80%EC%9D%98%2B%EA%B3%B5%EA%B3%B5%EC%84%B1%2B%EB%84%89%EB%84%89%ED%95%9C%2B%EC%A0%91%EA%B7%BC%EC%9D%B4%2B%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4" },
    { label: "임의영 — 공공성의 개념, 위기, 활성화의 조건", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART000856313" },
    { label: "Stanford Encyclopedia of Philosophy — John Dewey’s Political Philosophy", url: "https://plato.stanford.edu/entries/dewey-political/" },
    { label: "Stanford Encyclopedia of Philosophy — Hannah Arendt", url: "https://plato.stanford.edu/entries/arendt/" },
    { label: "Stanford Encyclopedia of Philosophy — Jürgen Habermas", url: "https://plato.stanford.edu/entries/habermas/" },
    { label: "Elinor Ostrom — Beyond Markets and States: Polycentric Governance of Complex Economic Systems", url: "https://www.aeaweb.org/articles?id=10.1257%2Faer.100.3.641" },
    { label: "씨앗의 소리 — 공공의료는 병원 간판으로 증명되지 않는다", url: "/columns/public-health-proved-by-function" },
  ],
};

export const publicArticleEn: SeedLanguageArticle = {
  ...publicArticleKo,
  term: "Publicness",
  title: "Public — Does State Operation Make Something Belong to Every Citizen?",
  subtitle: "If public interest is the value we seek, publicness is how we create and take responsibility for it together",
  summary: "The public is not simply whatever the state owns or operates. It describes a relationship in which our choices affect other people and citizens can deliberate, coordinate and share responsibility for the consequences. Public interest is the goal; publicness is how citizens pursue it together.",
  keyPoints: [
    "Public interest names a beneficial outcome; publicness names the way people create and take responsibility for it together.",
    "State operation does not automatically create publicness, and private operation does not automatically remove it.",
    "Publicness lives when citizens can use an essential function, speak into decisions and verify the results.",
  ],
  heroImage: {
    ...publicArticleKo.heroImage,
    alt: "Residents of several generations using a shared walkway between a public-service building and a private clinic",
    caption: "Publicness begins less with the ownership label on a building than with the relationships through which citizens share access and consequences.",
    credit: "AI image produced by SEED VOICE",
  },
  inlineImage: {
    ...publicArticleKo.inlineImage!,
    alt: "An older resident, a student, a health worker and a parent with a child using a regional bus stop",
    caption: "One bus route works only when public rules, an operator’s responsibility, workers’ service and citizens’ use function together.",
    credit: "AI image produced by SEED VOICE",
  },
  leadParagraphs: [
    "A privately owned maternity clinic in town has doctors, nurses and an open delivery room. The nearby public hospital has a building and a public name, but no staff able to deliver babies. Which hospital is more public to the resident who needs care?",
    "SEED VOICE recently examined that question in [‘Public Healthcare Is Not Proven by the Name on the Hospital.’](/columns/public-health-proved-by-function) Maternity care in Gimcheon, the doctor helicopter based in Andong and South Jeolla’s public-private maternity network all show that public healthcare cannot be sustained by ownership form alone.",
    "The question reaches beyond medicine. We use the word public for buses, schools, parks, libraries, care and disaster response. But dividing them into public because government operates them and private because a company does erases the questions that matter: Does the needed function work? Can citizens influence the decision? Who explains and answers for the outcome?",
  ],
  charts: [{
    title: "Public interest and publicness: what is the difference?",
    headers: ["Term", "Meaning", "The citizen’s test"],
    rows: [
      ["Public interest", "A value or outcome beneficial to the community", "Whose life actually improved?"],
      ["Publicness", "The relationship and method through which people create, coordinate and answer for that value", "Who decided, could citizens speak, and were results disclosed?"],
      ["Public institution", "One instrument established to serve a public purpose", "Did it deliver the needed function, beyond the label?"],
    ],
    note: "The two ideas belong together. A worthy goal without participation and accountability lacks publicness; a formal process that does not improve citizens’ lives has not achieved the public interest.",
    afterSection: 1,
  }],
  sections: [
    {
      title: "Public does not simply mean ‘owned by the state’",
      paragraphs: [
        "The Korean word gong-gong (公共) combines ideas of openness, fairness and what is held in common. The English public likewise descends from the Latin publicus, meaning what concerns the people as a whole. Both point beyond one person’s private possession toward matters that affect many people together.",
        "The opposite of public, then, is not simply private enterprise. A condition in which one actor affects many lives without shared deliberation or responsibility is further from publicness than a particular ownership form is.",
        "National and local governments remain essential institutions for protecting the public. They collect taxes, establish rules and sustain services the market alone may not provide. Yet government ownership by itself cannot meet a citizen’s need. A closed public facility, an inaccessible administrative service or a committee that will not answer questions may be legally public while falling short in publicness.",
      ], sourceIndices: [0, 1, 2],
    },
    {
      title: "Public interest is the goal; publicness is the method",
      paragraphs: [
        "Public interest describes a value or outcome that benefits the wider community: children reaching school safely, patients receiving timely care, and everyone having clean air and water.",
        "Publicness asks who defines that outcome, how it is produced and who answers when the effort fails. If a safe school route is the public interest, the process through which residents, schools, police and local government identify hazards, coordinate a remedy and disclose results is publicness.",
        "A worthy purpose does not make every method public. Publicness weakens when institutions and experts decide without explanation, funded organizations hide outcomes or dissenters are treated as enemies of the public interest.",
      ],
    },
    {
      title: "Publicness is part of ordinary life",
      paragraphs: [
        "Noise between two apartments may look like a private dispute. Once it affects several households and requires building standards, management rules and mediation, it becomes a public problem. John Dewey explained that a public forms when the consequences of an action extend beyond the people directly involved and require organized attention.",
        "A neighborhood bus makes the same point. Its operator may be private, but losing the route disrupts students’ journeys, older residents’ medical visits and workers’ commutes. A local subsidy is not enough; citizens must be able to examine frequency, safety, accessibility and whether the route meets local need.",
        "A park is not public only because a municipality owns it. What matters is whether wheelchair users and parents with strollers can enter, whether a commercial event effectively monopolizes the space, and whether citizens can understand its rules. Publicness appears wherever personal choice meets the conditions of living together.",
      ], sourceIndices: [3],
    },
    {
      title: "Publicness lives when citizens can speak",
      paragraphs: [
        "Citizens are not merely customers of public services. Beyond paying taxes and receiving services, they must be able to state what is needed, hear the reasons for decisions and scrutinize the results.",
        "Hannah Arendt treated a space in which different people reveal their perspectives through speech and action as a vital condition of politics. Jürgen Habermas’s public sphere similarly describes a space where citizens publicly test reasons and form opinions rather than passively accepting power’s decisions.",
        "One public hearing does not complete publicness if officials only announce a finished plan and take a few questions. Citizens should be told which views changed the decision, which did not and why. The real test is not the number of participation events but whether the decision itself remained open.",
      ], sourceIndices: [4, 5],
    },
    {
      title: "Why a hospital sign cannot prove public healthcare",
      paragraphs: [
        "Healthcare makes publicness especially concrete. Korea’s Public Health and Medical Services Act defines public healthcare as activities by the state, local governments and healthcare institutions to ensure universal access and protect and improve health across regions, classes and fields. Including healthcare institutions among the actors matters: public healthcare is not identical to public ownership.",
        "In Gimcheon, a private hospital first joined the government’s support program for areas lacking maternity care; the public Gimcheon Medical Center later reopened obstetric delivery after fifteen years. A private hospital in Andong anchors the regional doctor-helicopter service. In South Jeolla, public and private hospitals have operated as one maternity network.",
        "This does not shrink the state’s duty. It makes that duty more precise: identify indispensable local functions, contract with capable public or private providers, support staffing and costs, and disclose opening hours, acceptance rates, transfers and treatment outcomes.",
        "Public hospitals are necessary, but building one does not complete public healthcare. Care must be available when a citizen needs it. The scorecard is not ownership; it is the distance citizens travel, the time they wait and whether treatment continues to completion.",
      ], sourceIndices: [0, 7],
    },
    {
      title: "We do not have to choose only state or market",
      paragraphs: [
        "Debate over the public often collapses into two claims: government must provide it directly, or the market should handle it. Everyday life already contains more arrangements—community-managed spaces, cooperatives, and privately operated hospitals and buses bound by public-service contracts.",
        "Elinor Ostrom showed that shared resources can be governed sustainably not only by government or markets but through rules and monitoring created by their users. The important tests are clearer than the operator’s name: Are the rules explicit? Can affected people participate? Is accountability enforceable?",
        "Government can guarantee minimum rights and access. Markets can offer diverse solutions and capabilities. Citizens and communities can identify needs, monitor performance and build solutions themselves. Publicness weakens when any one of them tries to replace all the others.",
      ], sourceIndices: [6],
    },
    {
      title: "How SEED understands the public",
      paragraphs: [
        "SEED does not measure publicness by the size of the state. More public institutions and larger budgets do not by themselves prove that citizens’ lives improved. Nor does private participation automatically erase publicness.",
        "Does the needed function actually work? Can everyone reach it? Can affected citizens speak? Are decisions, costs and outcomes public? Can failure be challenged and corrected? These are SEED’s five tests of publicness.",
        "The public belongs to no organization. The state cannot monopolize it, and the market cannot preserve it unattended. Publicness comes alive when citizens share consequences, speak together and can share responsibility.",
        "The subject of the public is not the state. It is the citizen.",
      ],
    },
  ],
  sources: [
    { label: "Korea Law Information Center — Public Health and Medical Services Act, Article 2 (Korean)", url: publicArticleKo.sources![0].url },
    { label: "Korea Institute for Health and Social Affairs — Publicness in health and welfare (Korean)", url: publicArticleKo.sources![1].url },
    { label: "Eui-Young Lim — The concept, crisis and conditions of publicness (Korean)", url: publicArticleKo.sources![2].url },
    { label: "Stanford Encyclopedia of Philosophy — John Dewey’s Political Philosophy", url: publicArticleKo.sources![3].url },
    { label: "Stanford Encyclopedia of Philosophy — Hannah Arendt", url: publicArticleKo.sources![4].url },
    { label: "Stanford Encyclopedia of Philosophy — Jürgen Habermas", url: publicArticleKo.sources![5].url },
    { label: "Elinor Ostrom — Beyond Markets and States", url: publicArticleKo.sources![6].url },
    { label: "SEED VOICE — Public Healthcare Is Not Proven by the Name on the Hospital", url: "/columns/public-health-proved-by-function" },
  ],
};
