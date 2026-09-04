import type { Language } from "../i18n";

export type SeedLanguageImage = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export type SeedLanguageArticle = {
  slug: string;
  term: string;
  date: string;
  readMinutes: number;
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  sections: { title: string; paragraphs: string[] }[];
  heroImage: SeedLanguageImage;
  inlineImage: SeedLanguageImage;
};

const citizenKo: SeedLanguageArticle = {
  slug: "citizen-as-seed",
  term: "시민",
  date: "2026-09-04",
  readMinutes: 5,
  title: "시민은 주어지는 이름이 아니라 자라나는 존재다",
  subtitle: "국민에서 시민으로, 시민에서 씨앗시민으로",
  summary: "정치권·기업·시민단체·지방정부가 서로 다른 뜻으로 사용하는 ‘시민’을 다시 묻습니다. 씨앗의소리가 말하는 시민은 행정구역에 존재하는 주민에 머물지 않고, 자신이 공적인 존재임을 자각하며 자유와 책임을 함께 키워가는 사람입니다.",
  keyPoints: [
    "‘시민’은 정치권·기업·시민단체·지방정부가 서로 다른 뜻으로 사용하는 다층적인 언어입니다.",
    "씨앗의소리가 말하는 시민은 행정구역 안에 존재하는 주민에 머물지 않고 자신이 공적인 존재임을 자각한 사람입니다.",
    "AI로 개인의 능력이 커질수록 기술교육이나 이념교육보다 자유·책임·공공성을 함께 키우는 시민의 성장이 중요해집니다.",
  ],
  heroImage: {
    src: "images/seed-language/citizen-as-seed-hero-diverse.webp",
    alt: "회색 도시의 익명적 군중에서 다양한 이웃과 나무를 심는 시민들로 이어지는 수채화",
    caption: "시민은 주어진 자리에 머무는 이름이 아니라, 이웃과 공공의 문제를 발견하며 성장하는 존재입니다.",
    credit: "씨앗의 소리 AI 제작 이미지",
  },
  inlineImage: {
    src: "images/seed-language/citizen-as-seed-ai-diverse.webp",
    alt: "AI와 로봇을 고립이 아닌 공동체 문제 해결에 사용하는 다양한 세대의 시민들",
    caption: "AI는 개인의 능력을 키워주지만 그 능력을 어디에 사용할지는 결정해주지 않습니다. 기술이 커질수록 시민성도 함께 자라야 합니다.",
    credit: "씨앗의 소리 AI 제작 이미지",
  },
  sections: [
    {
      title: "국민이 물러난 자리에 시민이 들어왔습니다",
      paragraphs: [
        "과거에는 ‘국민’이라는 말을 일상에서 훨씬 자주 들었습니다. 국민교육헌장, 국민학교, 국민체조처럼 국가가 국민을 교육하고 규율하며 하나의 공동체로 묶는 언어가 사회 곳곳에 있었습니다.",
        "국민은 주로 국가와의 관계에서 정의되는 말입니다. 한 나라의 구성원이며 국가가 보호하고 교육하고 때로는 동원하는 대상이라는 의미가 강했습니다. 산업화와 국가건설의 시대에는 국민이라는 단어가 공동체의 중심 언어가 될 수밖에 없었습니다.",
        "오늘날 국민이라는 말이 사라진 것은 아닙니다. 헌법과 법률, 선거와 국가적 위기의 순간에는 여전히 중요한 의미를 갖습니다. 그러나 일상적인 공공언어의 중심에서는 조금씩 물러나고 있습니다. 그 자리에 ‘시민’이 들어왔습니다.",
        "정부는 시민참여를 말하고 지방자치단체는 시민과의 소통을 강조합니다. 학교에서는 민주시민교육을 이야기하고 사회운동 조직은 시민사회의 이름으로 활동합니다. 하지만 시민이라는 말이 널리 사용된다고 해서 그 의미까지 같아진 것은 아닙니다.",
      ],
    },
    {
      title: "같은 시민이지만 뜻은 서로 다릅니다",
      paragraphs: [
        "정치인 한동훈은 ‘동료시민’이라는 표현을 사용했습니다. 국민을 통치하거나 계몽해야 할 대상으로 보기보다 자유와 권리를 함께 가진 동등한 공동체 구성원으로 부르려는 정치적 언어라고 볼 수 있습니다.",
        "포스코는 ‘기업시민’이라는 말을 경영이념으로 사용해왔습니다. 기업 역시 사회의 구성원이며 이윤 창출을 넘어 공동체에 대한 책임을 져야 한다는 뜻입니다. 여기에서 시민은 개인에게만 붙는 이름이 아니라 공적 책임을 가진 조직의 성격을 설명하는 말로 확장됩니다.",
        "진보 진영은 ‘민주시민’이라는 표현을 즐겨 사용합니다. 민주주의의 가치와 인권, 평등, 참여, 연대의식을 갖춘 사람을 시민으로 길러야 한다는 문제의식이 담겨 있습니다. 보수 진영에서도 시민은 자유와 책임, 법치와 공동체 질서를 함께 지켜가는 주체라는 의미로 사용됩니다.",
        "지방정부가 사용하는 시민은 또 다릅니다. 서울시민, 부산시민처럼 특정 행정구역에 거주하는 사람을 가리키는 경우가 많습니다. 일반인의 일상 언어에서는 국민과 시민이 큰 구분 없이 사용되기도 합니다. 하나의 단어 안에 법적 지위, 거주자의 신분, 정치적 가치, 기업의 책임, 공동체 구성원이라는 여러 의미가 겹쳐 있는 것입니다.",
      ],
    },
    {
      title: "시민단체가 시민을 독점할 수는 없습니다",
      paragraphs: [
        "우리 사회에서 ‘시민단체’라는 말은 반드시 좋은 이미지로만 들리지 않습니다. 시민단체라고 하면 집회하고 싸우고 정부나 기업을 비판하는 사람들을 먼저 떠올리는 이들이 많습니다. 일부 단체가 특정 정치 진영과 밀접하게 움직이거나 정부 지원에 의존하면서도 시민 전체를 대표하는 것처럼 말해온 데 대한 피로감도 쌓였습니다.",
        "물론 시민단체의 비판과 감시 활동은 민주사회에 필요합니다. 권력을 감시하고 드러나지 않는 피해를 공론화하며 제도 개선을 요구하는 역할까지 부정할 수는 없습니다.",
        "그러나 시민단체가 곧 시민사회는 아닙니다. 시민이라는 이름을 사용한다고 해서 자동으로 시민을 대표하는 것도 아닙니다. 시민단체는 시민사회 안에 존재하는 여러 조직 가운데 하나일 뿐입니다.",
        "누구를 대표하는지, 어떤 위임을 받았는지, 재정은 어디에서 오는지, 다른 의견에도 열려 있는지를 설명해야 합니다. 시민의 이름을 더 크게 사용할수록 더 엄격한 책임과 검증을 받아야 합니다. 시민이라는 말이 특정 진영이나 전문 활동가 집단의 독점적 언어로 굳어진다면 평범한 사람들은 자신을 시민이라고 느끼지 못하게 됩니다.",
      ],
    },
    {
      title: "존재하는 시민과 자각하는 시민은 다릅니다",
      paragraphs: [
        "행정구역 안에 본래적으로 존재하는 사람이라는 의미에서 시민은 정태적인 개념입니다. 서울에 살면 서울시민이고 부산에 살면 부산시민입니다. 특별한 결심이나 행동이 없어도 시민이라고 불립니다. 철학적 표현을 빌리면 이는 아직 자신을 적극적으로 자각하지 않더라도 사회 안에 존재하고 있다는 사실로 성립하는 ‘즉자적인 시민’입니다.",
        "씨앗의소리가 말하는 시민은 여기에서 한 걸음 더 나아갑니다. 한 개인이 자신을 공공의 바깥에 있는 순수한 사적 존재로만 생각할 때 그는 프라이빗 퍼슨(private person), 즉 사적 개인에 머뭅니다. 가족을 돌보고 일하며 취미생활을 하는 평범한 개인입니다. 그 자체로 잘못된 것은 없습니다.",
        "그러나 어느 순간 자신이 혼자 살아가는 존재가 아니라는 사실을 깨닫게 됩니다. 내가 낸 세금이 어떻게 사용되는지, 내 아이가 어떤 교육을 받는지, 이웃이 어떤 어려움에 놓여 있는지, 내가 사는 사회가 공정하고 자유로운지를 생각하기 시작합니다.",
        "‘내가 사는 사회는 지금 어떤 모습인가’, ‘이대로 괜찮은가’, ‘무엇이 달라져야 하는가’, ‘나는 무엇을 할 수 있는가’라고 질문하는 순간 사적 개인은 시민으로 움직이기 시작합니다. 단순히 사회 안에 존재하는 사람에서 자신이 공적인 존재임을 자각한 ‘대자적인 시민’으로 성장하는 것입니다.",
      ],
    },
    {
      title: "씨앗시민은 완성된 모범시민이 아닙니다",
      paragraphs: [
        "씨앗의소리는 이러한 동태적 시민을 ‘씨앗시민’이라고 부릅니다. 씨앗은 작고 불완전합니다. 아직 어떤 모습으로 자랄지도 확정되지 않았습니다. 그러나 스스로 싹을 틔우고 뿌리를 내리며 성장할 가능성을 품고 있습니다.",
        "씨앗시민도 처음부터 모든 사실을 알고 올바른 판단을 내리는 사람이 아닙니다. 때로는 잘못된 정보를 믿고 자신의 이해관계를 공익이라고 착각하며 감정에 휩쓸릴 수 있습니다.",
        "중요한 것은 완전함이 아니라 성장입니다. 자신의 판단을 사실과 대조하고, 다른 의견을 듣고, 잘못을 인정하며, 주장한 내용의 결과까지 책임지는 과정이 시민을 자라게 합니다.",
        "시민화는 국가가 정한 모범답안을 배우는 과정이 아닙니다. 개인이 자신의 자유를 지키면서도 이웃과 사회에 대한 책임을 깨닫고 공공성의 주체로 성장해가는 과정입니다.",
      ],
    },
    {
      title: "민주시민교육만으로 시민이 만들어지지는 않습니다",
      paragraphs: [
        "진보 진영이 사용하는 ‘민주시민교육’에는 민주주의가 제도만으로 유지되지 않으며 시민에게 인권·참여·관용·연대의 태도가 필요하다는 문제의식이 담겨 있습니다.",
        "그러나 시민이라는 말 앞에 반드시 ‘민주’를 붙이고 특정한 가치와 태도를 교육해야 시민이 된다고 설명하기 시작하면 문제가 달라집니다. 누가 민주적인 시민의 기준을 정하는지, 그 교육이 다양한 관점을 허용하는지, 국가나 특정 진영이 바람직한 시민상을 주입하는 것은 아닌지 물어야 합니다.",
        "민주주의를 배우는 것과 특정한 정치적 관점을 배우는 것은 같은 일이 아닙니다. 정해진 결론에 동의하도록 만드는 교육은 시민교육이 아니라 순응교육이 될 수 있습니다.",
        "건강한 시민은 정답을 잘 외우는 사람이 아닙니다. 권위 있는 기관의 설명도 의심하고 자신이 지지하는 진영의 주장도 검증하며 스스로 판단할 수 있는 사람입니다. 시민은 교육의 결과물에 앞서 자각의 주체여야 합니다.",
      ],
    },
    {
      title: "AI는 개인을 키우지만 시민까지 만들어주지는 않습니다",
      paragraphs: [
        "AI 시대에는 한 개인이 가진 능력이 과거와 비교하기 어려울 만큼 커집니다. 거대한 자료를 분석하고 글과 영상과 프로그램을 만들며 혼자서도 조직이나 언론사가 하던 일을 수행할 수 있습니다. 앞으로 피지컬 로봇까지 결합하면 개인의 물리적 행동 능력도 크게 증강될 것입니다.",
        "그러나 증강된 개인이 곧 성장한 시민을 의미하지는 않습니다. 강력한 기술을 가진 개인이 공공성과 책임을 배우지 못한다면 거짓정보를 대량으로 만들고 타인을 조종하며 공동체의 신뢰를 무너뜨릴 수도 있습니다. 자신의 욕망과 분노가 기술을 통해 증폭될 때 그 결과는 과거보다 훨씬 파괴적일 수 있습니다.",
        "AI는 개인의 능력을 키워주지만 그 능력을 어디에 사용해야 하는지까지 결정해주지는 않습니다. 기술이 커질수록 시민성도 함께 자라야 합니다.",
        "앞으로의 사회가 필요로 하는 사람은 단순한 ‘증강된 개인’이 아닙니다. 커진 능력을 공공의 문제와 연결하고, 자유를 책임 있게 사용하며, 이웃과 함께 살아갈 질서를 고민하는 ‘증강된 씨앗시민’입니다.",
      ],
    },
    {
      title: "시민이라는 말을 다시 살아 움직이게 해야 합니다",
      paragraphs: [
        "씨앗의소리가 말하는 시민은 국민을 대체하기 위한 새로운 신분이 아닙니다. 특정 정당을 지지하거나 시민단체에 가입한 사람, 민주시민교육을 이수해 인증받은 사람을 뜻하지도 않습니다.",
        "시민은 자신의 삶이 사회와 연결되어 있음을 깨닫는 사람입니다. 세상이 어떻게 움직이는지 스스로 묻고, 무엇이 잘못되었는지 판단하며, 더 나은 방향을 제안하는 사람입니다. 타인의 생각에 올라타는 데서 멈추지 않고 자신의 언어로 말하며 그 말에 책임지는 사람입니다.",
        "사적 개인이 공공성의 주체로 깨어나는 순간 시민이라는 말은 정태적인 신분에서 동태적인 삶으로 바뀝니다. ‘나는 지금 누구의 언어로 세상을 보고 있는가’, ‘내 생각은 정말 나의 것인가’, ‘나는 이 사회가 어떻게 달라지기를 바라는가’, ‘그 변화를 위해 감당할 작은 책임은 무엇인가’라는 질문에서 변화는 시작됩니다.",
        "시민은 이미 완성되어 있는 존재가 아닙니다. 시민은 자각하고 판단하고 책임지면서 끊임없이 되어가는 존재입니다. 씨앗의소리가 되찾고자 하는 시민의 의미는 바로 여기에 있습니다.",
      ],
    },
  ],
};

const citizenEn: SeedLanguageArticle = {
  ...citizenKo,
  term: "Citizen",
  title: "Citizenship is not a given label; it is something we grow into",
  subtitle: "From national subject to citizen, and from citizen to Seed Citizen",
  summary: "Politics, business, civic organizations and local government all use the word ‘citizen’ differently. For SEED VOICE, a citizen is more than a resident within an administrative boundary: it is a person who awakens to public responsibility and grows freedom together with accountability.",
  keyPoints: [
    "‘Citizen’ is a layered word used differently by politics, business, civic organizations and local government.",
    "For SEED VOICE, citizenship begins when a resident recognizes that they are also a public and social being.",
    "As AI expands individual power, the growth of freedom, responsibility and public-mindedness matters more than ideological instruction alone.",
  ],
  heroImage: {
    ...citizenKo.heroImage,
    alt: "Watercolor showing anonymous urban residents becoming diverse neighbors who plant and care for a tree together",
    caption: "Citizenship is not a name for remaining where one is placed. It grows as people recognize neighbors and public problems as their own concern.",
    credit: "AI image produced by SEED VOICE",
  },
  inlineImage: {
    ...citizenKo.inlineImage,
    alt: "Citizens of different generations using AI and a robot to solve a shared community problem rather than retreat into isolation",
    caption: "AI can enlarge individual capacity, but it cannot decide what that power should serve. Civic character must grow with technology.",
    credit: "AI image produced by SEED VOICE",
  },
  sections: [
    { title: "As ‘the nation’ receded, ‘the citizen’ moved forward", paragraphs: [
      "In earlier decades, Koreans heard the word ‘national’ everywhere: the National Charter of Education, national elementary schools and national calisthenics. The language reflected a state seeking to educate, discipline and unite its people.",
      "A national subject is defined primarily through a relationship with the state—as a member to be protected, educated and at times mobilized. That language suited an era of industrialization and state-building.",
      "The word has not disappeared. It remains essential in the Constitution, law, elections and moments of national crisis. Yet it has gradually moved away from the center of everyday public language, and ‘citizen’ has entered the space.",
      "Government speaks of citizen participation, local authorities of communication with citizens, schools of democratic citizenship education, and advocacy organizations of civil society. Yet widespread use has not produced a shared meaning.",
    ]},
    { title: "One word, several different citizens", paragraphs: [
      "Politician Han Dong-hoon has used the expression ‘fellow citizens.’ It can be read as political language that addresses people as equal members sharing freedom and rights, rather than subjects to be governed or enlightened.",
      "POSCO has long used ‘corporate citizenship’ as a management philosophy. The phrase extends citizenship beyond individuals, suggesting that a company is also a social member with obligations beyond profit.",
      "Progressives often speak of ‘democratic citizens,’ stressing human rights, equality, participation and solidarity. Conservatives also use citizen to describe an agent who sustains freedom, responsibility, the rule of law and social order.",
      "Local government usually means a resident of a jurisdiction—a Seoul citizen or Busan citizen. In ordinary conversation, people often use citizen and national almost interchangeably. Legal status, residence, political values, corporate responsibility and membership in a community are all layered into the same word.",
    ]},
    { title: "Civic organizations cannot monopolize the citizen", paragraphs: [
      "In Korea, the phrase ‘civic organization’ does not always carry a positive image. Many picture protest, conflict and constant criticism of government or business. Fatigue has also grown where some organizations appear aligned with a political camp or dependent on government support while speaking as if they represented citizens as a whole.",
      "Criticism and oversight by civic organizations remain necessary. They monitor power, reveal neglected harms and press institutions to improve.",
      "But civic organizations are not identical to civil society, nor does the citizen label confer automatic representation. They are among the many organizations that exist within civil society.",
      "The larger the claim to speak for citizens, the greater the duty to explain who is represented, what mandate exists, where funding comes from and whether dissenting views are welcome. If one camp or professional activist class monopolizes the word, ordinary people stop recognizing themselves as citizens.",
    ]},
    { title: "A citizen who exists and a citizen who awakens are different", paragraphs: [
      "In the static sense, a citizen is simply someone who lives within a jurisdiction. A Seoul resident is a Seoul citizen without making any special decision or taking public action. Philosophically, this is a citizen ‘in itself’: present in society without yet actively understanding that position.",
      "SEED VOICE goes one step further. When someone sees themselves only as a private person outside public life, they remain an ordinary individual caring for family, work and personal interests. There is nothing wrong with that life.",
      "But a change begins when the person realizes that no one lives alone: taxes are spent, children are educated, neighbors face hardship, and institutions shape whether society is free and fair.",
      "The questions ‘What kind of society do I live in?’, ‘Is this acceptable?’, ‘What should change?’ and ‘What can I do?’ move a private person into citizenship. The resident becomes a citizen ‘for itself’—a person conscious of being a subject of public life.",
    ]},
    { title: "A Seed Citizen is not a finished model citizen", paragraphs: [
      "SEED VOICE calls this dynamic person a ‘Seed Citizen.’ A seed is small and unfinished. Its final form is not fixed, yet it contains the ability to sprout, take root and grow.",
      "A Seed Citizen does not begin with complete knowledge or flawless judgment. Anyone can believe false information, confuse private interest with the public good or be swept up by emotion.",
      "What matters is growth rather than perfection: testing judgment against facts, hearing disagreement, admitting error and accepting responsibility for the consequences of one’s claims.",
      "Civic formation is not the memorization of a model answer written by the state. It is the process by which a person protects freedom while awakening to responsibility for neighbors, society and the public realm.",
    ]},
    { title: "Democratic citizenship education alone does not make citizens", paragraphs: [
      "The progressive idea of democratic citizenship education starts from a valid concern: institutions alone cannot sustain democracy; citizens also need habits of human rights, participation, tolerance and solidarity.",
      "But a problem arises when ‘democratic’ becomes a compulsory prefix and a particular set of approved values is treated as the qualification for citizenship. We must ask who defines the democratic citizen, whether the curriculum permits genuine pluralism, and whether the state or a political camp is prescribing its preferred person.",
      "Learning democracy is not the same as learning a particular political conclusion. Education designed to produce agreement with predetermined answers can become training in compliance rather than citizenship.",
      "A healthy citizen does not merely recite the correct answer. They question authoritative institutions, verify the claims of their own political side and make judgments for themselves. Before citizenship is an educational outcome, it must be an act of self-awareness.",
    ]},
    { title: "AI enlarges individuals, but it cannot make them citizens", paragraphs: [
      "AI gives one person powers once held by large organizations: analyzing vast records, producing writing and video, building software and distributing ideas. When physical robots join these systems, individual capacity to act in the material world will grow as well.",
      "Yet an augmented individual is not necessarily a mature citizen. Without public responsibility, powerful tools can multiply falsehood, manipulation and distrust. Technology can amplify private anger and appetite as readily as it can expand knowledge.",
      "AI can increase capacity, but it cannot decide what that capacity should serve. The more technology grows, the more civic character must grow with it.",
      "The future needs more than augmented individuals. It needs augmented Seed Citizens who connect their power to public problems, use freedom responsibly and consider the shared order in which neighbors live together.",
    ]},
    { title: "The word citizen must be made alive again", paragraphs: [
      "The citizen described by SEED VOICE is not a new status meant to replace national belonging. It is not reserved for members of a political party, an advocacy organization or graduates of a citizenship course.",
      "A citizen is someone who recognizes that personal life is connected to society: someone who asks how the world works, judges what is wrong, proposes a better direction and accepts responsibility for speaking in their own voice.",
      "When a private person awakens as a subject of public life, citizenship changes from a static status into a dynamic way of living. The change begins by asking: Whose language shapes my view? Are these thoughts really mine? What should society become? What small responsibility will I accept?",
      "Citizens are not finished beings. They are always becoming through awareness, judgment and responsibility. That is the meaning SEED VOICE seeks to recover.",
    ]},
  ],
};

export const seedLanguageArticlesKo = [citizenKo];

export function getSeedLanguageArticle(slug: string, language: Language) {
  if (slug !== citizenKo.slug) return undefined;
  return language === "en" ? citizenEn : citizenKo;
}
