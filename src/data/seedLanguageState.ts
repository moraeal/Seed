import type { SeedLanguageArticle } from "./seedLanguageBase";

const imageRoot = "images/seed-language/state-citizens-trust";

const sources = [
  { label: "국가법령정보센터 — 대한민국헌법", url: "https://www.law.go.kr/lsEfInfoP.do?lsiSeq=61603" },
  { label: "Stanford Encyclopedia of Philosophy — Coercion (베버의 국가 정의)", url: "https://plato.stanford.edu/entries/coercion/" },
  { label: "세계은행 — What Is State Capacity?", url: "https://openknowledge.worldbank.org/server/api/core/bitstreams/1a4179ef-c2c9-54ae-8b2a-05e77e0745b5/content" },
  { label: "유엔 우크라이나 인권감시단 — 2026년 9월 민간인 피해", url: "https://ukraine.ohchr.org/en/node/582" },
  { label: "Stanford Encyclopedia of Philosophy — Locke's Political Philosophy", url: "https://plato.stanford.edu/entries/locke-political/" },
  { label: "Stanford Encyclopedia of Philosophy — John Rawls", url: "https://plato.stanford.edu/entries/rawls/" },
  { label: "Stanford Encyclopedia of Philosophy — Robert Nozick's Political Philosophy", url: "https://plato.stanford.edu/entries/nozick-political/" },
  { label: "Stanford Encyclopedia of Philosophy — Conservatism", url: "https://plato.stanford.edu/entries/conservatism/" },
  { label: "Daron Acemoglu·James A. Robinson — The Narrow Corridor", url: "https://voices.uchicago.edu/jamesrobinson/2020/11/24/the-narrow-corridor-states-societies-and-the-fate-of-liberty/" },
  { label: "Elinor Ostrom — Beyond Markets and States, Nobel lecture", url: "https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/lecture/" },
  { label: "Reuters — 2026년 9월 이란 공격과 보복", url: "https://www.reuters.com/world/middle-east/iran-urges-us-comply-with-interim-deal-after-trump-threatens-further-strikes-2026-09-01/" },
  { label: "Reuters — 2026년 9월 미국·이란 협상", url: "https://www.reuters.com/world/middle-east/trump-says-talks-with-iran-continue-he-thinks-settlement-will-be-reached-2026-09-22/" },
  { label: "유엔 헌장 제51조 — 자위권", url: "https://legal.un.org/repertory/art51.shtml" },
  { label: "국제적십자위원회 — 교전 중 민간인 보호", url: "https://www.icrc.org/en/law-and-policy/conduct-hostilities-and-protection-civilians" },
];

export const stateArticleKo: SeedLanguageArticle = {
  slug: "state-citizens-trust",
  term: "국가",
  date: "2026-09-27",
  readMinutes: 11,
  newsletterEligible: false,
  title: "국가는 시민의 주인이 아니라 시민이 권한을 맡긴 제도라는 말이다",
  subtitle: "국가란 무엇인가 — 지킬 힘, 멈출 줄 아는 힘, 시민의 말로 고치는 힘",
  summary: "화재와 침공 앞에서는 국가가 제때 움직여야 합니다. 그러나 국가가 시민의 재산과 자유에 손댈 때는 근거와 한계를 밝혀야 합니다. 씨앗은 국가를 시민의 권한을 맡아 유능하게 일하고, 제한을 받으며, 시민의 경험으로 스스로를 고치는 제도로 봅니다.",
  keyPoints: [
    "국가는 정부나 대통령 한 사람이 아니라 법·행정·사법·공권력이 이어지는 제도입니다.",
    "국가는 시민을 보호할 만큼 유능해야 하지만, 헌법과 법치, 시민의 감시를 벗어나서는 안 됩니다.",
    "시민이 겪은 실패와 제안이 법·예산·행정의 수정으로 돌아올 때 국가는 더 나아집니다.",
  ],
  heroImage: {
    src: `${imageRoot}/hero.webp`,
    alt: "서울의 횡단보도를 건너는 엄마와 아이, 곁에 보이는 구급차와 소방관, 유리 너머 공공건물",
    caption: "국가의 힘은 시민의 평범한 하루를 지키는 데서 시작하고, 시민의 자유 앞에서 한계를 지켜야 합니다.",
    credit: "AI 이미지",
  },
  inlineImage: {
    src: `${imageRoot}/citizen-state-cycle-ko.svg`,
    alt: "시민의 경험이 제보와 기록, 공개된 검토를 거쳐 법과 행정의 수정으로 돌아오는 순환 도표",
    caption: "시민의 경험이 기록되고 정책의 수정으로 돌아와야 국가가 현실에서 배웁니다.",
    credit: "씨앗의 소리 편집 도표",
  },
  inlineImageAfterSection: 6,
  leadParagraphs: [
    "집에 불이 나면 누구나 119가 빨리 오기를 바랍니다. 아이가 다니는 학교 앞 횡단보도가 위험하다면 신호를 바꿔 주기를 바랍니다. 다른 나라의 군대가 국경을 넘는다면 막아 주기를 바랍니다.",
    "그런데 국가기관이 내 통장을 들여다보거나 세금을 걷거나 내 가게의 영업을 멈추라고 할 때는 다른 질문이 생깁니다. 무슨 근거로, 어디까지 할 수 있는가? 필요할 때는 제때 움직여야 하고, 시민의 자유에 손을 댈 때는 멈출 줄도 알아야 합니다. 우리가 국가에 바라는 두 모습입니다.",
  ],
  sections: [
    {
      title: "국가는 대통령이나 정부와 같은 말일까요",
      paragraphs: [
        "국가는 대통령 한 사람도, 선거 때마다 바뀌는 정부도 아닙니다. 법을 만들고 집행하는 기관, 재판하는 법원, 세금을 걷는 제도, 경찰과 군대처럼 오랫동안 이어지는 공적 체계입니다. 정부는 그 체계를 일정 기간 운영합니다.",
        "국가는 다른 조직에는 없는 큰 힘을 가집니다. 세금을 걷고, 법을 어긴 사람을 체포하며, 필요할 때 무력을 사용할 수 있습니다. 사회학자 막스 베버는 이러한 공적 강제력을 국가의 특징으로 보았습니다. 그러나 강제력을 가졌다는 사실만으로 그 사용이 정당해지지는 않습니다.",
        "대한민국 헌법 제1조는 대한민국이 민주공화국이며 주권은 국민에게 있다고 정합니다. 국가의 힘은 시민 위에 저절로 생긴 권한이 아닙니다. 시민이 함께 살아가기 위해 공적 제도에 맡긴 권한입니다. 맡긴 힘이라면 쓰임을 확인하고 잘못 쓰였을 때 고칠 수도 있어야 합니다.",
      ], sourceIndices: [0, 1],
    },
    {
      title: "국가가 없으면 누가 우리를 지킬까요",
      paragraphs: [
        "국가를 경계해야 한다고 해서 국가의 일을 가볍게 볼 수는 없습니다. 새벽에 불이 났는데 소방차가 오지 않는다면, 폭력을 신고했는데 경찰이 피해자를 보호하지 못한다면, 법원의 판결이 있어도 집행되지 않는다면 시민의 자유는 종이 위에만 남습니다.",
        "국가의 능력은 조직의 크기로 측정되지 않습니다. 위험을 알리는 경보가 제때 울리는지, 병원과 구조대가 움직이는지, 범죄 피해자가 보호받는지, 법이 힘없는 사람에게도 똑같이 적용되는지에서 드러납니다.",
        "러시아의 침공을 겪는 우크라이나에서 국가는 지도 위의 국경선만을 뜻하지 않습니다. 집에서 잠잘 수 있는가, 아이가 학교에 갈 수 있는가, 병원이 환자를 받을 수 있는가의 문제입니다. 유엔 인권감시단은 2026년 9월 러시아의 반복된 공격으로 우크라이나의 주택·병원·상점·일터가 피해를 입었다고 보고했습니다. 국가가 시민을 지키지 못할 때 먼저 흔들리는 것은 평범한 하루입니다.",
        "씨앗은 국가가 외부의 위협 앞에서 유능해야 한다고 봅니다. 안보의 목적은 국가의 위세를 과시하는 데 있지 않습니다. 시민이 자유롭고 존엄하게 살 수 있는 집과 거리와 일상을 지키는 데 있습니다.",
      ], sourceIndices: [2, 3],
    },
    {
      title: "유능한 국가는 무엇이든 해도 될까요",
      paragraphs: [
        "국가를 움직이는 힘은 시민을 보호할 수도 있지만 시민에게 향할 수도 있습니다. 범죄를 수사한다는 이유로 누구의 금융정보든 들여다볼 수 있다면 어떨까요. 세금을 걷는다는 이유로 오래된 기준을 한 번도 돌아보지 않는다면 어떨까요. 공익을 위한 사업이라며 정부가 시민단체의 활동 방향까지 정한다면 어떨까요.",
        "씨앗의 [상속세 설명 기사](/briefings/inheritance-tax-frozen-allowance-middle-class)는 집값이 오르는 동안 일괄공제액 5억 원이 1997년부터 유지된 결과, 전에는 세금을 내지 않던 가족도 과세 대상에 들어올 수 있음을 보여줍니다. 세율을 올린다는 발표가 없어도 시민의 부담은 달라질 수 있습니다. 국가는 세금을 걷어 필요한 일을 해야 합니다. 동시에 누가 새로 부담을 지게 됐고 그 기준이 지금의 삶에도 맞는지 설명해야 합니다.",
        "헌법과 법률, 권력분립, 독립적인 재판, 언론의 취재, 감사와 시민의 감시가 국가의 권한을 제한합니다. 절차는 국가의 일을 무조건 늦추기 위해 있는 것이 아닙니다. 권한이 목적을 벗어났을 때 멈추게 하고 피해를 입은 사람이 이의를 제기할 길을 엽니다.",
      ], sourceIndices: [0, 4],
    },
    {
      title: "진보와 보수는 국가를 어떻게 다르게 볼까요",
      paragraphs: [
        "저소득 가정의 아이가 치료비 때문에 병원에 가지 못한다면 진보는 국가가 어떤 지원을 더 해야 하는지 묻는 경우가 많습니다. 보수는 지원이 지속될 재원과 가족·지역·민간의 역할, 국가 개입의 범위를 함께 묻는 경우가 많습니다.",
        "작은 가게에 새 규제가 생길 때도 마찬가지입니다. 진보는 노동자와 소비자의 피해를 막는 효과를 먼저 살필 수 있습니다. 보수는 가게가 감당할 비용과 영업의 자유를 먼저 살필 수 있습니다. 어느 쪽 질문도 그 자체로 버릴 수 없습니다. 피해가 실제로 줄었는지, 그 과정에서 누가 얼마의 비용을 냈는지 확인해야 정책을 판단할 수 있습니다.",
        "진보는 언제나 국가 확대를 원하고 보수는 언제나 작은 국가를 원한다고 설명하면 정확하지 않습니다. 보수도 안보와 질서를 위해 큰 권한을 요구할 수 있고 진보도 국가의 감시와 차별에 맞서 시민의 자유를 지켜 왔습니다. 롤스는 사회의 기본 제도가 자유와 기회를 어떻게 나누는지 살폈고, 노직은 개인의 권리와 국가 개입의 한계를 강하게 강조했습니다. 보수주의 전통은 가족과 지역사회처럼 국가 밖에서 자란 제도의 가치도 중요하게 다룹니다.",
        "씨앗의 기준은 어느 진영의 이름표를 붙이는 데 있지 않습니다. 정책이 시민을 보호했는가. 그 일을 하느라 시민과 기업의 자유를 지나치게 좁히지는 않았는가. 잘못된 결과를 고칠 수 있는가. 같은 질문을 어느 정부에도 적용해야 합니다.",
      ], sourceIndices: [5, 6, 7],
    },
    {
      title: "전쟁에서는 국가의 힘을 어떻게 판단할까요",
      paragraphs: [
        "우크라이나 전쟁이 국가의 방어 능력을 묻게 한다면 이란을 둘러싼 전쟁은 국가가 무력을 사용하기로 한 결정과 그 결과를 어떻게 통제할지 묻게 합니다. 2026년 미국과 이스라엘의 이란 공격 이후 공격과 보복이 이어졌고, 9월에도 군사적 충돌과 협상 보도가 함께 나왔습니다.",
        "안보 위협을 현실적으로 살피는 일은 필요합니다. 그러나 정부가 ‘안보를 위해서’라고 말하는 순간 검증이 끝나는 것은 아닙니다. 어떤 위협이 있었는지, 무력을 사용할 법적 근거가 무엇인지, 다른 수단은 검토했는지, 시민과 의회에는 무엇을 설명했는지 따져야 합니다. 전쟁이 시작된 뒤에도 민간인과 군사목표를 구별하고 민간인 피해를 줄여야 할 의무는 모든 교전 당사자에게 적용됩니다.",
        "씨앗은 위협을 외면하지 않습니다. 그렇기에 더욱 전쟁을 결정하는 국가의 힘을 엄격하게 봅니다. 국가는 시민을 지킬 힘이 있어야 합니다. 그 힘을 쓰는 이유와 방법도 시민 앞에서 설명할 수 있어야 합니다.",
      ], sourceIndices: [10, 11, 12, 13],
    },
    {
      title: "시민의 말이 돌아오지 않으면 국가는 고쳐지지 않습니다",
      paragraphs: [
        "학교 앞 횡단보도를 떠올려 봅시다. 학부모가 여러 번 위험을 알렸는데 민원이 ‘처리 완료’로만 기록된다면 국가는 서류상으로 일했을지 몰라도 아이의 등굣길은 달라지지 않았습니다. 주민의 제보와 사고 기록을 확인하고, 신호 시간이나 도로 구조를 고친 뒤, 실제로 안전해졌는지 다시 살펴야 일이 끝납니다.",
        "씨앗은 시민이 삶에서 문제를 발견하고 말하며 기록한 내용이 법·예산·행정의 수정으로 돌아와야 한다고 봅니다. 시민의 경험이 제도로 돌아오는 과정입니다. 국가는 공익의 유일한 발견자가 아닙니다. 시장과 기업은 필요한 것을 만들고, 시민사회는 서로를 연결하며, 시민은 자신이 살아가는 자리에서 제도의 빈틈을 먼저 알아챕니다.",
        "아세모글루와 로빈슨은 자유를 지키려면 국가의 역량과 국가를 견제할 사회가 함께 필요하다고 설명합니다. 오스트롬은 공공문제를 정부와 시장의 선택으로만 좁히지 않고 시민과 지역이 협력하는 여러 방법을 연구했습니다. 씨앗은 여기에 평범한 시민의 제보가 실제 정책 수정으로 이어지는지도 묻습니다.",
        "시민의 목소리를 듣는다고 해서 어느 한 단체를 시민 전체의 대변자로 정해 버려서는 안 됩니다. 누가 참여했고 누가 빠졌는지, 반대 의견을 낼 길이 있는지도 살펴야 합니다.",
      ], sourceIndices: [8, 9],
    },
    {
      title: "국가는 시민에게 권한을 맡은 제도입니다",
      paragraphs: [
        "씨앗은 국가를 시민의 일을 대신 소유하는 권력으로 보지 않습니다. 시민이 공동의 문제를 해결하기 위해 권한을 맡긴 제도로 봅니다. 그래서 국가는 유능해야 하고, 제한되어야 하며, 계속 고쳐져야 합니다.",
        "국가를 평가할 때 물을 것은 결국 시민의 삶입니다. 위험 앞에서 제때 보호받았는가. 권력이 내 자유를 침해할 때 이의를 제기할 수 있었는가. 내가 알린 잘못이 실제 제도의 변화로 돌아왔는가.",
        "좋은 국가는 시민 대신 모든 것을 결정하는 국가가 아닙니다. 시민을 지킬 힘이 있고, 그 힘을 멈출 줄 알며, 시민이 겪은 실패 앞에서 스스로를 고치는 국가입니다.",
      ],
    },
  ],
  sources,
};

export const stateArticleEn: SeedLanguageArticle = {
  ...stateArticleKo,
  term: "The State",
  title: "The State Is Not the Citizen's Master but an Institution Entrusted with Power",
  subtitle: "What is a state? The ability to protect, the duty to limit power, and the capacity to learn from citizens",
  summary: "We expect public authority to respond to fires and aggression, but to explain its limits when it reaches into our property and freedom. SEED VOICE judges the state by its ability to protect citizens, accept constitutional restraints, and correct policy through their lived experience.",
  keyPoints: [
    "The state is a continuing system of law, administration, courts and public authority; it is not one president or government.",
    "It must be capable of protecting people while remaining subject to constitutional limits, the rule of law and public scrutiny.",
    "A state improves when citizens' experiences and objections lead to changes in law, budgets and administration.",
  ],
  heroImage: {
    ...stateArticleKo.heroImage,
    alt: "A parent and child crossing a Seoul street near an ambulance, firefighter and public building behind glass",
    caption: "Public power begins with protecting an ordinary day and must respect the boundaries of citizens' freedom.",
    credit: "AI image",
  },
  inlineImage: {
    src: `${imageRoot}/citizen-state-cycle-en.svg`,
    alt: "Diagram showing how lived experience and documented problems lead to public review and changes in law and administration",
    caption: "Government learns when what citizens experience is recorded, examined and translated into policy corrections.",
    credit: "SEED VOICE editorial diagram",
  },
  leadParagraphs: [
    "When a house catches fire, we want emergency services to arrive quickly. When a crossing outside a school is dangerous, we want it fixed. When a foreign army crosses a border, we want a defense that works.",
    "Yet when a public agency demands access to a bank account, collects tax, or orders a shop to close, a different question arises: on what authority, and how far may it go? We need a state that can act when necessary and stop at the boundary of our freedoms.",
  ],
  sections: [
    {
      title: "A state is more than a president or a government",
      paragraphs: [
        "The state is a continuing system: legislatures and administrators, courts, tax rules, police and armed forces. Governments come and go while these institutions endure.",
        "It has powers other organizations do not. It can tax, arrest and, under law, use force. Sociologist Max Weber identified this claim to legitimate physical coercion as a defining feature of the modern state. Possessing coercive power, however, does not make every use of it legitimate.",
        "Article 1 of South Korea's Constitution declares the republic democratic and locates sovereignty in the people. Public authority does not arise above citizens by itself. It is entrusted to institutions so people can live together. Citizens must be able to inspect how that authority is used and correct its misuse.",
      ], sourceIndices: [0, 1],
    },
    {
      title: "Who protects us if the state cannot act?",
      paragraphs: [
        "Skepticism about power should not make us dismiss public capacity. If firefighters never come, police cannot protect a victim, or a court judgment cannot be enforced, liberty becomes a promise on paper.",
        "Capacity is measured less by the size of an agency than by results: timely alerts, functioning hospitals and rescue teams, protection for victims, and law that applies even when someone lacks influence.",
        "In Ukraine, facing Russia's invasion, the state is not merely a border on a map. It is whether a child can attend school, a family can sleep at home, and a hospital can treat patients. In September 2026, UN human rights monitors reported repeated Russian attacks damaging homes, hospitals, shops and workplaces. When protection fails, ordinary life is the first casualty.",
        "SEED VOICE believes the state must be capable against external threats. Security exists to preserve people's freedom, dignity and daily lives, not to display the state's prestige.",
      ], sourceIndices: [2, 3],
    },
    {
      title: "Does competence give the state a blank cheque?",
      paragraphs: [
        "The same power that protects can also be directed at citizens. What happens when an investigation allows unrestricted access to financial records, or an old tax threshold is left untouched while the value of homes rises? What happens when public funding lets a government decide which civic groups may speak for society?",
        "SEED VOICE's [report on inheritance-tax allowances](/briefings/inheritance-tax-frozen-allowance-middle-class) shows how a lump-sum allowance fixed at KRW 500 million since 1997 can bring new families into the tax system as home values rise. Tax rates can remain unchanged while the burden changes. Governments need revenue, but must explain who is newly paying and whether the rule still fits today's lives.",
        "Constitutions, laws, divided powers, independent courts, reporting, audits and citizen scrutiny restrain public authority. Procedure gives people a way to challenge and stop power when it strays beyond its purpose.",
      ], sourceIndices: [0, 4],
    },
    {
      title: "How do progressives and conservatives differ?",
      paragraphs: [
        "If a child cannot get medical care because of cost, progressives often ask what additional public support is needed. Conservatives often ask how it will be financed, what families and communities can do, and where state intervention should end.",
        "When new rules apply to a small business, progressives may focus first on preventing harm to workers or consumers. Conservatives may focus first on compliance costs and the freedom to operate. Both questions matter. Did harm decline, and who paid for the change?",
        "The familiar claim that progressives always seek a larger state and conservatives always seek a smaller one is misleading. Conservatives can demand expansive powers for security; progressives have defended liberties against surveillance and discrimination. John Rawls examined how basic institutions distribute liberty and opportunity. Robert Nozick pressed the limits of state interference with individual rights. Conservative traditions also value enduring institutions outside the state, including family and community.",
        "SEED VOICE applies the same tests across governments: did a policy protect people, what did it cost citizens and firms in freedom and resources, and can a mistake be corrected?",
      ], sourceIndices: [5, 6, 7],
    },
    {
      title: "What do wars reveal about state power?",
      paragraphs: [
        "Russia's war against Ukraine raises the question of a state's ability to defend its people. The war involving Iran, the United States and Israel raises another: how should a decision to use force and its consequences be controlled? Following the US-Israeli attacks on Iran in 2026, attacks and reprisals continued; reports in September described both further military action and negotiations.",
        "Security threats require sober assessment. A government's invocation of security does not end scrutiny. What was the threat? What was the legal basis for force? Were other measures considered, and what was explained to lawmakers and the public? Once fighting begins, all parties remain bound by rules protecting civilians, including distinction between civilians and military objectives.",
        "SEED VOICE takes threats seriously. For that very reason, it scrutinizes the state's decision to fight. A state must be able to protect citizens and explain the reasons and limits of its force to them.",
      ], sourceIndices: [10, 11, 12, 13],
    },
    {
      title: "A state must learn from what citizens experience",
      paragraphs: [
        "Consider a dangerous crossing outside a school. If parents report it repeatedly and the complaints are marked 'resolved' while the road stays unsafe, an office may have completed its paperwork but children still face the same danger. Officials need to check reports and incidents, alter signals or street design, and then see whether safety improved.",
        "SEED VOICE asks whether citizens' experience, questions and records return as changes to law, budgets and administration. The state does not own every insight into the public good. Firms make useful goods and services, civic groups connect people, and residents often spot a failure first.",
        "Daron Acemoglu and James Robinson explain why liberty requires both state capacity and a society capable of restraining it. Elinor Ostrom studied how citizens and local institutions cooperate beyond a simple choice between government and markets. SEED VOICE adds a practical test: did an ordinary person's warning actually change the policy?",
        "Listening to civil society must not mean treating one organization as the voice of every citizen. We should ask who participated, who was absent, and whether dissent remained possible.",
      ], sourceIndices: [8, 9],
    },
    {
      title: "Public authority is held in trust for citizens",
      paragraphs: [
        "SEED VOICE sees the state as an institution entrusted with power to solve shared problems, not as the owner of citizens' lives. It must be capable, restrained and willing to correct itself.",
        "The tests return to daily life. Were you protected when danger came? Could you object when authority intruded on your freedom? Did the problem you documented lead to a real change?",
        "A good state does not decide everything in place of its citizens. It has the ability to protect them, knows when to stop, and changes course when their experience shows it has failed.",
      ],
    },
  ],
  sources,
};
