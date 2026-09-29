import type { SeedLanguageArticle } from "./seedLanguageBase";

const imageRoot = "images/seed-language/fairness-rules-trust";

export const fairnessArticleKo: SeedLanguageArticle = {
  slug: "fairness-rules-trust",
  term: "공정",
  date: "2026-09-29",
  readMinutes: 8,
  newsletterEligible: true,
  title: "공정은 같은 결과가 아니라, 노력의 길을 지키는 약속이다",
  subtitle: "출발선을 살피고, 누구에게나 같은 기준을 적용하며, 바뀐 약속의 책임을 설명하는 사회",
  summary: "청년의 입시와 채용, 소상공인의 빚을 둘러싼 공정 논란에는 하나의 질문이 흐릅니다. 시민이 믿고 준비한 규칙은 권력과 정책의 결정 앞에서도 지켜지는가. 노력의 결과를 보장할 수는 없어도 노력할 길은 지킬 수 있어야 합니다.",
  keyPoints: [
    "공정은 모두에게 같은 성공을 보장하는 일이 아니라 노력이 결과로 이어질 수 있는 길을 지키는 약속입니다.",
    "불리한 출발선을 살피는 일과 공개한 기준을 일관되게 적용하는 일은 함께 필요합니다.",
    "정책을 바꿀 때 이유와 적용 시점, 이미 준비한 사람에 대한 경과조치를 설명하지 않으면 신뢰가 무너집니다.",
  ],
  heroImage: {
    src: `${imageRoot}/hero.webp`,
    alt: "같은 길을 걷던 시민들이 가로막힌 문 앞에 서 있고 한쪽에는 별도의 지름길이 열린 상징적 장면",
    caption: "규칙이 어떤 사람에게는 문이고 다른 사람에게는 벽이라면, 시민은 노력의 길을 믿기 어렵습니다.",
    credit: "AI 이미지",
  },
  inlineImage: {
    src: `${imageRoot}/job-seeker.webp`,
    alt: "책상에서 공부하던 청년이 창밖의 긴 대기 줄을 바라보는 상징적 장면",
    caption: "자격을 준비하는 시간에는 공개된 채용 기준이 지켜질 것이라는 믿음이 깔려 있습니다.",
    credit: "AI 이미지",
  },
  inlineImageAfterSection: 1,
  leadParagraphs: [
    "2019년 조국 전 법무부 장관 자녀의 입시 문제가 불거졌을 때, 청년들이 분노한 것은 남의 집 사정 때문만이 아니었습니다. 이력서의 한 줄을 얻기 위해 시간을 들이는 사람과, 부모의 지위와 인맥으로 허위 경력을 만들어 제출한 사람이 같은 입시 문 앞에 서 있었다는 사실 때문이었습니다. 이후 법원은 딸의 입시에 사용된 일부 인턴·체험활동 확인서와 표창장의 허위성을 인정했고, 조 전 장관의 관련 유죄 판단은 2024년 대법원에서 확정됐습니다. 제도는 누구에게나 열려 있다고 배웠는데, 실제 문을 여는 열쇠는 따로 있는 것처럼 보였습니다.",
    "이듬해 인천국제공항공사의 비정규직 정규직화 논란도 청년들에게 공정이 무엇인지 물었습니다. 공사는 2020년 보안검색요원 1,902명의 직접고용 방침을 발표했습니다. 그 일을 해온 노동자에게 안정적인 일자리를 주어야 한다는 요구가 있었습니다. 한편 채용을 준비하던 청년과 기존 직원들은 어떤 절차와 기준으로 전환하는지 물었습니다. 전환 대상자가 일반 공채 직원과 같은 직무·임금을 받는다는 식의 소문은 사실과 달랐습니다. 그러나 그런 과장을 걷어낸 뒤에도 기존 합의와 입사 시점에 따른 전환 기준을 왜 바꾸었는지 설명해야 한다는 문제는 남았습니다.",
    "두 사건은 같지 않습니다. 입시에 허위 자료를 제출한 일과 노동자의 고용 형태를 바꾸는 정책을 같은 잘못으로 묶을 수는 없습니다. 다만 시민이 느낀 불안에는 공통점이 있습니다. 내가 알고 준비한 규칙이 실제로도 적용되는가. 권력이나 정치적 결정이 들어오면 그 규칙이 다른 사람에게는 달라지는가.",
  ],
  charts: [{
    title: "공정의 약속을 확인하는 네 가지 질문",
    headers: ["기준", "흔들릴 때", "지켜야 할 약속"],
    rows: [
      ["기회", "가정 형편이나 인맥이 입구를 가릅니다", "불리한 출발선을 살피고 접근할 길을 엽니다"],
      ["규칙", "같은 자리에 다른 심사 기준을 씁니다", "공개한 기준을 누구에게나 일관되게 적용합니다"],
      ["절차", "결정의 이유를 알거나 다툴 수 없습니다", "이유를 밝히고 의견과 이의를 들을 길을 둡니다"],
      ["변경의 책임", "준비하던 사람을 하루아침에 제외합니다", "적용 시점과 경과조치를 설명합니다"],
    ],
    note: "씨앗의 소리 편집 도표. 네 질문은 정책의 성패를 수치로 측정한 결과가 아니라 이 글의 판단 기준입니다.",
    afterSection: 2,
  }],
  sections: [
    {
      title: "노력하면 결과를 얻을 수 있다는 믿음",
      paragraphs: [
        "노력한 사람이 언제나 합격하고 성공한다는 보장은 없습니다. 시험에는 자리 수가 있고, 장사에는 경기와 운이 따릅니다. 공정한 사회가 약속해야 할 것은 성공의 보장이 아니라 노력이 결과로 이어질 수 있는 길입니다. 출발할 때 알 수 있는 기준, 같은 일을 한 사람에게 같은 방식으로 적용되는 심사, 결과가 잘못됐다면 다툴 수 있는 절차가 있어야 합니다.",
        "그래서 출발선의 차이도 외면할 수 없습니다. 누군가는 공부할 시간과 돈이 있고, 누군가는 생계를 꾸리며 준비합니다. 존 롤스가 말한 공정한 기회균등은 자격이 된다고 적힌 문을 모두에게 보여주는 데서 끝나지 않습니다. 사회적 배경 때문에 그 문까지 갈 기회가 막히지 않도록 제도를 살핍니다. 동시에 롤스는 모든 시민의 동등한 기본 자유를 우선했습니다. 공정을 모든 사람에게 같은 결과를 주는 일로만 읽으면 그의 주장도 잘못 읽게 됩니다.",
      ],
      sourceIndices: [0, 1, 2, 3],
    },
    {
      title: "좋은 목적도 약속된 절차를 건너뛸 수 없습니다",
      paragraphs: [
        "정부가 좋은 결과를 만들겠다며 사람마다 다른 예외를 정하고 그 기준을 수시로 바꾸면, 시민은 무엇을 믿고 계획해야 할지 알 수 없게 됩니다. 하이에크가 법과 자유의 관계에서 중시한 것도 권력자의 그때그때 판단에 앞서는 일반적인 규칙이었습니다. 물론 규칙이 오래됐다는 이유만으로 그것이 공정해지는 것은 아닙니다. 바꿔야 한다면 바꾸되, 왜 바꾸는지와 이미 그 규칙에 따라 선택한 사람을 어떻게 대할지 밝혀야 합니다.",
        "불리한 출발선을 바로잡으려는 요구와 규칙·책임을 강조하는 요구는 함께 검토할 수 있습니다. 누가 경쟁에 들어갈 기회를 갖는지, 약속한 기준이 실제로 누구에게나 적용되는지 모두 물어야 합니다. 특혜를 그대로 둔 경쟁은 공정하지 않습니다. 좋은 목적을 내세워 약속된 절차를 건너뛰는 결정도 공정하지 않습니다.",
      ],
      sourceIndices: [4, 5],
    },
    {
      title: "어제의 대상자가 오늘 제외될 때",
      paragraphs: [
        "지원사업에 맞춰 가게를 고치거나, 채용 기준에 맞춰 자격증을 준비하거나, 주거정책의 조건에 맞춰 이사를 계획한 사람이 있다고 해봅시다. 신청을 앞둔 어느 날 정부가 기준을 바꾸어 그 사람을 대상에서 제외합니다. 새로운 기준 자체가 더 나을 수도 있습니다. 하지만 변경 시점과 경과조치에 대한 설명이 없다면 시민에게 남는 교훈은 ‘계획대로 준비하라’가 아닙니다. ‘발표를 믿지 말고 권력 주변의 다음 신호를 먼저 읽으라’는 것입니다.",
        "OECD도 잦은 규제 변경이 시민과 기업에 부담을 주고, 규칙의 명확성과 예측 가능성이 계획을 세우는 데 필요하다고 지적합니다. 결정 과정의 공정성을 다룬 연구에서는 의견을 말할 기회, 존중받는 대우, 결정 이유에 대한 설명을 신뢰의 조건으로 꼽았습니다. 정책은 바뀔 수 있습니다. 그럴수록 누가 이미 어떤 약속을 믿고 행동했는지 살펴야 합니다.",
        "규칙이 불투명해지면 노력의 방향도 바뀝니다. 실력을 쌓는 대신 담당자의 의중을 알아내려 하고, 공개된 절차보다 연줄을 찾는 편이 유리하다고 느낄 수 있습니다. 그것이 모든 시민을 곧장 청탁으로 이끈다는 뜻은 아닙니다. 그런 선택이 이익이 된다고 배우는 사회를 만들 위험이 있다는 뜻입니다. 부정한 청탁을 거절할 수 있으려면, 정당한 노력으로도 기회를 얻을 수 있다는 믿음이 살아 있어야 합니다.",
      ],
      sourceIndices: [6, 7],
    },
    {
      title: "공정은 결과보다 길과 약속에서 드러납니다",
      paragraphs: [
        "공정은 누구나 똑같은 결과를 가져야 한다는 말이 아닙니다. 노력과 책임이 헛되지 않고, 불리한 출발선은 살피되, 권력자의 사정에 따라 규칙이 뒤집히지 않는 상태입니다. 어제 약속한 기준을 오늘 바꾸어야 한다면 그 이유와 적용 시점, 기존에 준비한 사람의 처지를 함께 설명해야 합니다. 설명 없이 제외된 사람에게는 정책의 목적보다 깨진 약속이 먼저 남습니다.",
        "오늘의 뉴스 [「빚 갚고 갈아탄 22만 명 앞에서, 이재명 정부는 또 탕감인가」](/news/debt-relief-repaid-borrowers-fairness-2026)는 이 문제를 채무조정 정책에서 보여줍니다. 코로나 때의 빚을 전액 상환하거나 다른 대출로 갈아탄 차주가 약 22만 명인 가운데, 정부는 상환 능력을 잃은 약 19만 7천 명의 장기 연체 채권 약 4조 2천억 원을 새로 조정하려 합니다. 약 22만 명과 대출 잔액 감소분 약 56조 원에는 상환과 대환이 함께 포함돼 있어 모두가 빚을 현금으로 다 갚았다는 뜻은 아닙니다. 정부의 영업 제한으로 피해를 본 사람을 돕겠다는 취지는 이해할 수 있습니다. 하지만 어렵게 갚거나 대환하며 버틴 사람에게 그 선택이 어떻게 대우받는지, 감면 대상과 기준은 어떻게 정했는지 제대로 설명하지 못하면 공정의 약속은 무너집니다.",
        "이런 정책이 반복될수록 시민은 약속을 지키는 것보다 다음 정권의 결정과 권력의 눈치를 살피는 편이 낫다고 생각하게 됩니다. 갚거나 대환한 사람은 다른 사람의 어려움을 의심하고, 지원받는 사람은 자기 처지를 증명해도 특혜를 받았다는 시선을 견뎌야 합니다. 서로를 믿고 함께 규칙을 지킬 이유가 줄어드는 사회에서 공정이라는 말은 오래 버티지 못합니다.",
      ],
      sourceIndices: [8, 9],
    },
  ],
  sources: [
    { label: "연합뉴스 — 조국 전 장관 관련 대법원 판결 (2024.12.12)", url: "https://www.yna.co.kr/view/AKR20241212085353004" },
    { label: "연합뉴스 — 인천공항 보안검색요원 직접고용과 갈등 (2020)", url: "https://www.yna.co.kr/view/AKR20200625001900004" },
    { label: "이데일리 — 인천공항 전환 기준 논란 (2020)", url: "https://www.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=01748246625806312" },
    { label: "연합뉴스 — 인천공항 전환 뒤 고용 형태 (2020)", url: "https://www.yna.co.kr/view/AKR20200704021500004" },
    { label: "Stanford Encyclopedia of Philosophy — John Rawls", url: "https://plato.stanford.edu/entries/rawls/" },
    { label: "University of Chicago Press — F. A. Hayek, Law, Legislation and Liberty", url: "https://press.uchicago.edu/ucp/books/book/chicago/L/bo26122880.html" },
    { label: "OECD — Time for a Regulatory Reset (2025)", url: "https://www.oecd.org/en/publications/oecd-economic-outlook-volume-2025-issue-2_9f653ca1-en/full-report/time-for-a-regulatory-reset_90ca6147.html" },
    { label: "OECD — Perceived Fairness and Regulatory Policy", url: "https://www.oecd.org/en/publications/perceived-fairness-and-regulatory-policy_1629d397-en.html" },
    { label: "씨앗의 소리 — 빚 갚고 갈아탄 22만 명 앞에서, 이재명 정부는 또 탕감인가", url: "/news/debt-relief-repaid-borrowers-fairness-2026" },
    { label: "매일경제 — ‘또 빚탕감’…이미 56조 갚은 22만명 역차별 (2026.09.28)", url: "https://www.mk.co.kr/news/economy/12162886" },
  ],
};

export const fairnessArticleEn: SeedLanguageArticle = {
  ...fairnessArticleKo,
  term: "Fairness",
  title: "Fairness is not equal outcomes but a promise to keep the path of effort open",
  subtitle: "A fair society addresses unequal starting points, applies rules consistently and explains the cost of changing them",
  summary: "Disputes over admissions, hiring and small-business debt relief ask a common question: will the rules people relied on survive a change in political priorities? No society can promise success to everyone, but it can keep open a credible path from effort to opportunity.",
  keyPoints: [
    "Fairness cannot guarantee identical success; it can protect a credible path from effort to opportunity.",
    "Addressing unequal starting points and applying published rules consistently are both necessary.",
    "A policy change needs a reason, a clear effective date and an account of people who acted under the previous rules.",
  ],
  heroImage: { ...fairnessArticleKo.heroImage, alt: "Two citizens facing a blocked common route while a separate shortcut remains open", caption: "When a rule is a door for some and a wall for others, citizens struggle to trust that effort matters.", credit: "AI image" },
  inlineImage: { ...fairnessArticleKo.inlineImage!, alt: "A young job seeker studying at a desk while looking toward a long line outside", caption: "Preparing for a job assumes that published hiring criteria will still count when the decision is made.", credit: "AI image" },
  leadParagraphs: [
    "When controversy erupted in 2019 over the university admissions of former Justice Minister Cho Kuk’s daughter, many young Koreans saw more than one family’s affairs. They saw applicants spending years to earn a line on their résumés alongside an applicant whose record included false credentials connected to her parents’ status and networks. Courts later found that some internship and activity certificates and a university commendation used in her admissions were false. The Supreme Court upheld Cho’s related conviction in 2024. A formally open door appeared to have a different key for the connected.",
    "The 2020 dispute over regularizing contract workers at Incheon International Airport raised a different fairness question. The airport corporation announced direct employment for 1,902 security-screening workers. Those already doing the work had a strong claim to job security. Prospective applicants and existing staff, meanwhile, asked which hiring and transition standards would apply. Claims that the workers would simply receive the same jobs and pay as those hired through open recruitment were inaccurate. Even after correcting that exaggeration, the corporation still owed an explanation of why its transition criteria, including earlier agreements and hiring-date cutoffs, had changed.",
    "These are not the same wrong. Submitting false admissions documents and changing workers’ employment status cannot be equated. Yet both prompted a shared question: Do the rules people studied and relied on apply in practice, or do political decisions change them for someone else?",
  ],
  charts: [{
    title: "Four questions that test a promise of fairness",
    headers: ["Test", "When it fails", "What a credible promise requires"],
    rows: [
      ["Opportunity", "Family resources or connections control entry", "Address barriers and open a path to compete"],
      ["Rules", "Applicants face different standards for the same place", "Apply published standards consistently"],
      ["Process", "People cannot understand or challenge a decision", "Give reasons and a way to be heard"],
      ["Change", "Those who prepared are excluded overnight", "Explain timing and transitional arrangements"],
    ],
    note: "SEED VOICE editorial framework. These are questions for judging policy, not measured outcomes.",
    afterSection: 2,
  }],
  sections: [
    { title: "The belief that effort can lead somewhere", paragraphs: [
      "Effort does not guarantee admission or success. Exams have limited places; businesses face cycles and luck. A fair society promises something narrower and more important: a credible route by which effort can make a difference. People need to know the criteria in advance, face the same assessment for the same work and have a way to challenge errors.",
      "Starting points matter too. Some applicants can afford time and tuition; others study while earning a living. John Rawls’s fair equality of opportunity asks more than whether a door is nominally open to all who qualify. Institutions must consider whether social background prevents people from reaching it. Rawls also gave priority to equal basic liberties. Reading fairness as an order to give everyone the same outcome misreads that argument.",
    ], sourceIndices: [0, 1, 2, 3] },
    { title: "A good purpose cannot erase a promised procedure", paragraphs: [
      "If government makes case-by-case exceptions in pursuit of a good result and repeatedly changes its standards, people lose the basis for planning. F. A. Hayek emphasized general rules that stand ahead of a ruler’s discretion. An old rule is not fair merely because it is old. When change is needed, authorities must explain why and say how they will treat people who acted under the earlier rule.",
      "The demand to correct an uneven starting line and the demand for consistent rules can be examined together. Who gets to enter the competition? Are the announced criteria applied to everyone? Competition that preserves privilege is unfair. So is a decision that bypasses a promised process in the name of a worthy goal.",
    ], sourceIndices: [4, 5] },
    { title: "When yesterday’s eligible person is excluded today", paragraphs: [
      "Imagine a shop owner renovating to meet a support program’s terms, a job seeker obtaining the required certificate or a family moving to qualify for housing assistance. Just before applications open, government changes the criteria and excludes them. The new standard might even be better. Without an explanation of timing and transition, however, the lesson is not to plan carefully. It is to watch for the next signal from those in power.",
      "The OECD has warned that frequent regulatory changes impose costs and that clear, predictable rules help people and businesses plan. Research on perceived procedural fairness likewise points to a chance to speak, respectful treatment and reasons for decisions as conditions of trust. Policies can change. That makes it more necessary to ask who has already acted in reliance on a public promise.",
      "When rules become opaque, effort can be redirected. People may look for an official’s preference or a personal connection instead of building their skills. That does not mean every citizen will resort to improper requests. It means a society risks teaching that influence pays. People can refuse to seek favors more confidently when they believe legitimate effort can still open a door.",
    ], sourceIndices: [6, 7] },
    { title: "Fairness is visible in the path and the promise", paragraphs: [
      "Fairness does not mean everyone receives an identical result. It means effort and responsibility are not made pointless, unequal starting points are taken seriously and rules do not flip with a powerful person’s convenience. If yesterday’s criteria must change, explain why, when they take effect and what happens to those who prepared under them. Without that account, an excluded person remembers the broken promise before the policy’s purpose.",
      "Today’s SEED VOICE report, [‘For 220,000 Who Repaid or Refinanced, Is the Government Offering Yet More Debt Relief?’](/news/debt-relief-repaid-borrowers-fairness-2026), shows this problem in debt policy. About 220,000 borrowers either repaid their pandemic-era loans in full or refinanced them. The government is now pursuing another adjustment of roughly KRW 4.2 trillion in long-delinquent claims involving an estimated 197,000 people who cannot repay. The roughly KRW 56 trillion decline in outstanding loans includes refinancing as well as repayment; it does not mean all that debt was paid off in cash. Aid to people hurt by government-imposed business restrictions has a defensible purpose. But the government must explain how it treats those who struggled to repay or refinance, and how relief eligibility and terms are set.",
      "If such policies recur without that explanation, citizens may decide it is wiser to anticipate the next government’s favors than to keep their commitments. Those who repaid or refinanced may begin to doubt other people’s hardship; recipients may face suspicion of favoritism even after proving their need. In a society where people no longer trust one another to follow shared rules, the word fairness loses its force.",
    ], sourceIndices: [8, 9] },
  ],
  sources: fairnessArticleKo.sources!.map((source, index) => ({ ...source, label: [
    "Yonhap News — Supreme Court ruling in former Justice Minister Cho Kuk’s case (Korean)",
    "Yonhap News — Direct hiring and dispute at Incheon Airport (Korean)",
    "Edaily — Incheon Airport transition criteria (Korean)",
    "Yonhap News — Employment terms following the airport transition (Korean)",
    "Stanford Encyclopedia of Philosophy — John Rawls",
    "University of Chicago Press — F. A. Hayek, Law, Legislation and Liberty",
    "OECD — Time for a Regulatory Reset (2025)",
    "OECD — Perceived Fairness and Regulatory Policy",
    "SEED VOICE — For 220,000 Who Repaid or Refinanced, Is the Government Offering Yet More Debt Relief?",
    "Maeil Business Newspaper — Debt relief and repaid or refinanced borrowers (Korean, 2026.09.28)",
  ][index] })),
};
