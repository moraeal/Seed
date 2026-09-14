import type { SeedLanguageArticle } from "./seedLanguageBase";

const sources = [
  { label: "Stanford Encyclopedia of Philosophy, ‘Jürgen Habermas’", url: "https://plato.stanford.edu/entries/habermas/" },
  { label: "Stanford Encyclopedia of Philosophy, ‘Michel Foucault’", url: "https://plato.stanford.edu/entries/foucault/" },
];

export const discourseArticleKo: SeedLanguageArticle = {
  slug: "discourse-many-words-no-direction",
  term: "담론",
  date: "2026-09-14",
  readMinutes: 9,
  newsletterEligible: false,
  title: "담론 — 말은 넘치는데 방향은 보이지 않는다",
  subtitle: "談論 · Discourse",
  summary: "담론은 단순한 주장이나 말싸움이 아니라 사회를 해석하고 방향을 정하는 생각의 구조다. 기본사회·사회적경제·기후전환과 선진화·공동체자유주의·자유공화주의가 더 깊은 반론과 내부 논쟁을 거쳐야 한다. 시민화론은 이들을 대체하는 정답이 아니라 시민의 자리에서 살펴보는 하나의 판단 잣대다.",
  keyPoints: [
    "담론은 단순한 주장이나 대화가 아닙니다. 사회를 해석하고 무엇을 문제로 볼 것인지, 어디로 나아갈 것인지를 결정하는 생각의 구조입니다.",
    "한국 사회에는 기본사회·사회적경제·기후전환·선진화·공동체자유주의·자유공화주의 같은 담론이 있습니다. 부족한 것은 담론의 숫자가 아니라 이를 둘러싼 깊고 치열한 논쟁입니다.",
    "시민화론은 기존 담론을 대체하는 정답이 아닙니다. 시민의 자유와 책임, 국가권력의 한계, 시장의 역할과 변화의 비용을 묻는 하나의 판단 기준입니다.",
  ],
  heroImage: {
    src: "images/seed-language/discourse-many-words-no-direction-hero.webp",
    alt: "서로 다른 주장을 펼치는 두 무리와 여러 방향을 가리키는 표지판 사이에서 시민들이 판단하는 공론장",
    caption: "말은 양쪽에서 쏟아지지만 사회가 가야 할 길은 저절로 드러나지 않습니다. 방향은 시민 앞에서 근거와 반론이 부딪칠 때 만들어집니다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 장면",
  },
  inlineImage: {
    src: "images/seed-language/discourse-public-argument.webp",
    alt: "다양한 세대의 시민들이 자료와 지도를 놓고 서로 다른 생각을 검토하는 공론장",
    caption: "좋은 담론은 정답을 내려주는 말이 아니라 서로 다른 생각이 근거와 비용, 결과와 책임을 놓고 검증되는 자리를 엽니다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 장면",
  },
  inlineImageAfterSection: 2,
  showTableOfContents: false,
  leadParagraphs: [
    "한국 정치에는 말이 넘칩니다. 국회와 방송, 유튜브와 SNS에서는 진보와 보수가 하루도 쉬지 않고 충돌합니다. 상대를 비판하고 지지자를 결집하는 말은 갈수록 강해집니다.",
    "그런데 한국 사회가 어디로 가야 하는지는 잘 보이지 않습니다.",
    "우리는 지금 어떤 사회에 살고 있는가. 무엇을 바꾸고 어떤 사회를 만들 것인가. 그 과정에서 국가와 시장, 시민은 무엇을 해야 하는가. 변화의 비용은 누가 부담하고 새롭게 커지는 권력은 어떻게 제한할 것인가.",
    "이 질문을 놓고 벌이는 논쟁이 담론입니다.",
  ],
  sections: [
    {
      title: "담론은 말보다 크다",
      paragraphs: [
        "담론은 일상적으로 어떤 주제를 놓고 나누는 체계적인 논의를 뜻합니다. 학술적으로는 말과 글의 집합을 넘어 사람들이 현실을 이해하는 방식까지 포함합니다.",
        "어떤 현상을 무엇이라고 부르는가. 무엇을 사회문제로 인정하고 무엇을 개인의 책임으로 돌리는가. 누구에게 말할 자격을 주고 누구의 경험을 주변으로 밀어내는가. 어떤 해결책은 당연하게 받아들이면서 다른 해결책은 처음부터 불가능하다고 여기는가.",
        "담론은 이런 판단의 경계를 만듭니다.",
        "같은 현실도 담론에 따라 다르게 보입니다. 가난을 개인의 노력 부족으로 설명하면 해결책은 교육과 자립이 됩니다. 불평등한 사회구조의 결과로 보면 복지와 재분배가 앞에 놓입니다. 두 관점 가운데 하나만 정답이라고 선언하기보다 각 주장이 무엇을 보고 무엇을 놓치는지 따져보는 과정이 담론의 논쟁입니다.",
        "독일 철학자 위르겐 하버마스는 시민들이 국가와 시장으로부터 일정한 거리를 두고 공공문제를 이성적으로 토론하는 공간을 공론장으로 보았습니다. 사회적 지위보다 근거의 타당성이 중요하고, 이미 결정된 정책에 박수치는 것이 아니라 시민의 비판을 통해 정치권력을 정당화해야 한다는 관점입니다.",
        "프랑스 철학자 미셸 푸코는 조금 다른 방향에서 담론을 바라봤습니다. 한 시대에 무엇을 진실로 인정하고 어떤 말을 정상이나 비정상으로 구분하는 데에는 보이지 않는 규칙이 작동한다고 보았습니다. 지식은 권력과 완전히 떨어져 있지 않으며, 담론은 무엇을 말할 수 있고 누가 전문가로 인정받는지를 결정합니다.",
        "하버마스가 시민들이 어떻게 더 나은 근거를 놓고 토론할 수 있는지를 물었다면, 푸코는 그 토론의 의제와 언어, 발언 자격을 누가 정했는지를 물었습니다.",
        "두 관점은 오늘의 담론을 살펴보는 데 모두 필요합니다.",
        "논쟁은 누구에게나 열려 있는가. 주장은 사실과 근거로 검증되는가. 무엇을 문제로 규정하고 어떤 해법을 제외했는가. 그 언어를 통해 누구의 권력이 커지고 누구의 목소리가 작아지는가.",
        "씨앗은 담론을 사회를 해석하고 방향을 제시하면서 시민에게 판단의 자리를 열어주는 생각의 구조로 봅니다.",
      ],
      sourceIndices: [0, 1],
    },
    {
      title: "과거에는 사회의 방향을 놓고 싸웠다",
      paragraphs: [
        "1980년대 진보 진영의 사회구성체 논쟁은 한국 사회의 성격과 핵심 모순, 변화의 주체와 방법을 다뤘습니다. 관념적인 노선투쟁과 분파 갈등으로 흐른 한계도 있었지만, 한국 사회가 무엇이며 어디로 가야 하는지를 놓고 치열하게 다퉜습니다.",
        "민주화 이후에는 경제민주화·복지국가·참여민주주의·사회적경제가 새로운 방향으로 제시됐습니다.",
        "보수에도 선진화·공동체자유주의·자유공화주의가 있었습니다. 선진화론은 산업화와 민주화 이후의 국가 목표를 제시했습니다. 공동체자유주의는 개인의 자유와 공동체적 책임을 함께 보려 했고, 자유공화주의와 공동체적 공화주의는 자의적인 권력에 지배받지 않는 자유와 법치, 권력분립, 시민적 책임을 강조했습니다.",
        "이 담론들이 모두 옳았던 것은 아닙니다. 그러나 상대 진영을 공격하는 데 머물지 않고 한국 사회의 다음 방향을 찾으려 했습니다.",
      ],
    },
    {
      title: "지금의 담론에는 더 깊은 논쟁이 필요하다",
      paragraphs: [
        "오늘의 한국 사회에도 담론은 존재합니다. 각각 중요한 문제를 발견했고 나름의 방향을 제시했습니다.",
        "기본사회가 필요 없다는 것이 아닙니다. 어디까지를 기본으로 보장하고 필요한 재정을 어떻게 마련할 것인지 논쟁해야 합니다. 국가의 책임이 커질수록 그 권한을 시민이 어떻게 통제할 것인지도 함께 말해야 합니다.",
        "사회적경제의 가치도 부정할 이유가 없습니다. 다만 정부의 인증과 보조금이 끝난 뒤에도 시민의 선택을 받으며 살아남을 수 있는지, 실제로 어떤 사회문제를 해결했는지는 따져봐야 합니다.",
        "기후위기의 심각성을 인정하는 것과 모든 대응정책에 동의하는 것은 같은 일이 아닙니다. 노동자의 일자리와 시민의 생활비, 중소기업의 전환비용과 산업경쟁력을 함께 다뤄야 더 오래 지속할 수 있는 전환이 가능합니다.",
        "선진화와 공동체자유주의, 자유공화주의도 다시 논쟁할 가치가 있습니다. 그러나 선진화가 국가와 전문가의 설계에 머물지 않는지, 공동체의 책임이 개인의 자유를 억압하지 않는지, 자유공화주의가 자기 진영의 권력에도 같은 기준을 적용하는지는 살펴봐야 합니다.",
        "비판은 담론을 무너뜨리는 일이 아닙니다. 충분한 반론과 검증 없이 정당의 구호로 소비하는 정치가 오히려 담론을 약하게 만듭니다.",
      ],
    },
    {
      title: "시민화론은 하나의 판단 잣대다",
      paragraphs: [
        "시민화론은 기존 담론을 폐기하고 그 자리를 차지하려는 새로운 정답이 아닙니다. 어느 담론이 최종 승자인지를 결정하려는 주장도 아닙니다.",
        "시민화론은 각각의 담론을 시민의 자리에서 살펴보자는 관점입니다.",
        "그 담론에서 시민은 정책의 수혜자인가, 판단의 주체인가. 시민의 자유와 책임은 함께 커지는가. 국가는 필요한 책임을 다하면서 시민의 판단까지 대신하지 않는가. 시장과 기업의 혁신 가능성을 열어놓고 있는가. 정책의 비용과 권력의 이동은 공개되는가. 자기 진영의 주장에도 같은 기준을 적용하는가.",
        "시민화론 역시 이 질문에서 예외일 수 없습니다. 시민화를 말하는 사람이나 조직이 시민에게 정답을 가르치고 따르라고 한다면 그것은 시민화가 아닙니다.",
        "시민화론은 담론 위에 군림하는 이론이 아닙니다. 담론이 시민을 얼마나 자유롭고 큰 주체로 세우는지 살펴보는 하나의 판단 잣대입니다.",
      ],
    },
    {
      title: "더 깊은 담론을 기대한다",
      paragraphs: [
        "한국 사회에 담론이 사라진 것은 아닙니다. 진보와 보수 모두 의미 있는 문제를 발견했고 나름의 해법을 제시해왔습니다.",
        "아쉬운 것은 이 담론들이 충분한 반론과 내부 논쟁을 거치며 깊어지기보다 정당의 구호와 정부의 정책, 진영의 언어로 소비되고 있다는 점입니다.",
        "기본사회와 사회적경제, 기후전환은 더 깊어져야 합니다. 선진화와 공동체자유주의, 자유공화주의도 다시 논쟁돼야 합니다. 자기 진영 안에서 질문할 수 있고 상대의 타당한 문제의식도 받아들일 수 있어야 사회 전체를 설득하는 담론이 됩니다.",
        "씨앗은 하나의 담론만을 정답으로 선택하려 하지 않습니다. 각각의 담론이 시민의 자유를 얼마나 넓히는지, 시민을 얼마나 큰 주체로 세우는지, 국가와 시장의 힘을 어떻게 다루는지를 살펴보려 합니다.",
        "우리가 기다리는 것은 모든 문제에 답하는 완벽한 이론이 아닙니다. 서로 다른 담론들이 더 치열하게 부딪치고, 자신의 약점을 드러내며, 시민 앞에서 더 깊어지는 모습입니다.",
        "말싸움보다 사회의 방향을 다투는 논쟁을 보고 싶습니다.",
        "담론은 시민에게 정답을 내려주는 말이 아닙니다. 시민이 자신의 판단을 만들 수 있도록 사실과 선택, 반론을 열어주는 말이어야 합니다.",
      ],
    },
  ],
  chart: {
    title: "한국 사회의 주요 담론과 더 깊게 논쟁할 질문",
    headers: ["담론", "제기한 문제", "더 깊게 논쟁할 부분"],
    rows: [
      ["기본사회", "불평등과 불안정한 삶", "재정, 국가권력의 한계, 보장 이후 시민의 책임"],
      ["사회적경제", "국가와 시장이 해결하지 못한 공익", "정부 의존, 자립 가능성, 실제 문제 해결 성과"],
      ["기후위기", "지속 불가능한 생산과 생활방식", "전환비용, 일자리, 에너지 안보, 기업의 혁신"],
      ["선진화", "산업화·민주화 이후의 국가 목표", "국가의 설계를 시민의 실천으로 연결하는 방법"],
      ["공동체자유주의", "개인의 자유와 공동체의 책임", "공동체의 이름으로 자유가 제한될 가능성"],
      ["자유공화주의", "자의적 권력으로부터의 자유", "자기 진영을 포함한 모든 권력에 대한 견제"],
    ],
    note: "각 담론은 중요한 문제를 발견했습니다. 논쟁의 목적은 폐기할 담론을 고르는 것이 아니라, 반론과 검증을 통해 더 깊게 만드는 데 있습니다.",
    afterSection: 2,
  },
  sources,
};

export const discourseArticleEn: SeedLanguageArticle = {
  ...discourseArticleKo,
  term: "Discourse",
  title: "Discourse — Words Overflow, but Direction Is Missing",
  subtitle: "談論 · Discourse",
  summary: "Discourse is not mere assertion or partisan quarrelling. It is a structure of thought that interprets society and sets direction. Citizenization does not replace existing discourses; it offers one standard for examining them from the citizen’s position.",
  keyPoints: [
    "Discourse is more than conversation. It shapes how a society identifies problems and chooses its direction.",
    "Korea does not lack discourses; it lacks sufficiently deep argument, rebuttal and internal scrutiny around them.",
    "Citizenization is not a final answer above other theories. It is one standard asking about civic freedom and responsibility, limits on state power, the role of markets and the cost of change.",
  ],
  leadParagraphs: [
    "Korean politics overflows with words. Progressives and conservatives collide every day in the National Assembly, on television, YouTube and social media, while the language used to attack opponents and mobilize supporters grows stronger.",
    "Yet it is difficult to see where Korean society is going.",
    "What kind of society do we inhabit? What should change, and what should we build? What must the state, markets and citizens do? Who bears the cost of change, and how will newly enlarged power be limited?",
    "Argument over these questions is discourse.",
  ],
  sections: [
    {
      title: "Discourse Is Larger Than Words",
      paragraphs: [
        "In everyday use, discourse means systematic discussion of a subject. In scholarship, it reaches beyond collections of speech and writing to the ways people understand reality.",
        "What do we call a phenomenon? What counts as a social problem, and what is assigned to individual responsibility? Who is authorized to speak, whose experience is pushed aside, and which solutions are treated as natural or impossible from the outset?",
        "Discourse draws these boundaries of judgment.",
        "The same reality looks different through different discourses. If poverty is explained as a lack of individual effort, education and self-reliance become the remedy. If it is seen as the result of unequal structures, welfare and redistribution come first. The work of discourse is not simply declaring one view correct, but testing what each sees and misses.",
        "Jürgen Habermas understood the public sphere as a space where private citizens, at some distance from state and market, debate public matters through rational criticism. The force of reasons should matter more than social rank, and political power should seek legitimacy through public scrutiny rather than applause for decisions already made.",
        "Michel Foucault approached discourse from another direction. Invisible rules help determine what an era accepts as true, what it classifies as normal or abnormal, what can be said and who is recognized as an expert. Knowledge and power are not wholly separate.",
        "Where Habermas asks how citizens can argue through better reasons, Foucault asks who set the agenda, language and qualifications for entry into that argument.",
        "Both perspectives help us examine discourse today.",
        "Is argument open to everyone? Are claims tested by facts and reasons? What has been defined as the problem, and which solutions were excluded? Whose power grows through the language, and whose voice becomes smaller?",
        "SEED sees discourse as a structure of thought that interprets society, proposes direction and opens a place for citizens to judge.",
      ],
      sourceIndices: [0, 1],
    },
    {
      title: "We Once Argued Over Society’s Direction",
      paragraphs: [
        "The social-formation debates of Korea’s progressive camp in the 1980s asked about the character of Korean society, its central contradictions and the agents and methods of change. They often hardened into abstract factional conflict, but they still fought over what Korean society was and where it should go.",
        "After democratization, economic democracy, the welfare state, participatory democracy and the social economy were proposed as new directions.",
        "Conservatives also developed discourses of advancement, communitarian liberalism and liberal republicanism. Advancement proposed a national goal after industrialization and democratization. Communitarian liberalism sought to hold individual freedom together with communal responsibility, while liberal and communitarian republican currents emphasized freedom from arbitrary domination, the rule of law, separated powers and civic responsibility.",
        "None was automatically correct. But they attempted to find society’s next direction rather than merely attack the opposing camp.",
      ],
    },
    {
      title: "Today’s Discourses Need Deeper Argument",
      paragraphs: [
        "Korean society still has discourses. Each has identified an important problem and offered a direction.",
        "The basic-society idea is not unnecessary. It must argue over what counts as a guaranteed minimum, how it will be financed and how citizens will control the enlarged authority of the state.",
        "There is no reason to dismiss the social economy. But we should ask whether organizations can keep earning citizens’ choice after certification and subsidy end, and what problems they have actually solved.",
        "Recognizing the seriousness of climate risk is not identical to accepting every response policy. Jobs, living costs, transition costs for smaller firms, energy security and industrial competitiveness must be considered if transition is to last.",
        "Advancement, communitarian liberalism and liberal republicanism also deserve renewed debate. We should ask whether advancement remains an expert blueprint, whether community suppresses individual freedom, and whether republican checks apply to power held by one’s own camp.",
        "Criticism does not destroy discourse. Politics weakens discourse when it consumes ideas as party slogans without serious rebuttal or verification.",
      ],
    },
    {
      title: "Citizenization Is One Standard of Judgment",
      paragraphs: [
        "Citizenization is not a new final answer seeking to abolish existing discourses or declare a winner among them.",
        "It asks that each discourse be examined from the citizen’s position.",
        "Is the citizen merely a policy beneficiary or an agent of judgment? Do freedom and responsibility grow together? Does the state meet its duties without replacing civic judgment? Does the discourse leave room for market and business innovation? Are costs and shifts of power visible? Does it apply the same standard to its own camp?",
        "Citizenization itself is not exempt. If its advocates teach citizens a correct answer and order them to follow, that is not citizenization.",
        "Citizenization does not rule above discourse. It is one standard for asking how fully a discourse makes citizens free and capable agents.",
      ],
    },
    {
      title: "Expecting Deeper Discourse",
      paragraphs: [
        "Discourse has not disappeared from Korea. Both progressives and conservatives have found meaningful problems and proposed answers.",
        "The disappointment is that these ideas are too often consumed as party slogans, government programs and camp language before rebuttal and internal argument deepen them.",
        "Basic society, the social economy and climate transition must grow deeper. Advancement, communitarian liberalism and liberal republicanism should be argued again. A discourse persuades society only when it permits questions within its own camp and accepts valid concerns raised by opponents.",
        "SEED will not choose one discourse as the sole answer. We will examine how each expands civic freedom, makes citizens larger agents and handles the power of state and market.",
        "We are not waiting for a perfect theory that answers every problem. We want different discourses to collide more rigorously, reveal their weaknesses and deepen before citizens.",
        "We want argument over society’s direction, not merely a war of words.",
        "Discourse should not hand citizens an answer. It should open facts, choices and rebuttals so citizens can form judgments of their own.",
      ],
    },
  ],
  chart: {
    title: "Major Discourses in Korea and Questions That Need Deeper Debate",
    headers: ["Discourse", "Problem raised", "Questions for deeper debate"],
    rows: [
      ["Basic society", "Inequality and insecure lives", "Finance, limits of state power, civic responsibility after guarantees"],
      ["Social economy", "Public needs unmet by state and market", "State dependence, viability, demonstrated outcomes"],
      ["Climate risk", "Unsustainable production and lifestyles", "Transition cost, jobs, energy security, business innovation"],
      ["Advancement", "A national goal after industrialization and democratization", "Connecting state design to civic practice"],
      ["Communitarian liberalism", "Individual freedom and communal responsibility", "Risk of limiting freedom in the name of community"],
      ["Liberal republicanism", "Freedom from arbitrary power", "Checking all power, including one’s own camp"],
    ],
    note: "Each discourse identifies an important problem. The point is not to select one for disposal, but to deepen all of them through rebuttal and scrutiny.",
    afterSection: 2,
  },
  sources,
};
