import type { SeedLanguageArticle } from "./seedLanguageBase";

const sharedSources = [
  { label: "Stanford Encyclopedia of Philosophy, ‘Conservatism’", url: "https://plato.stanford.edu/entries/conservatism/" },
  { label: "이지윤, 「2000년대 이후 한국 보수주의의 변화」, 정치사상연구 25(1), 2019", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002470290" },
  { label: "「민주화 이후 한국의 보수주의: 자유민주주의로의 수렴?」", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001159112" },
  { label: "전재호, 「2000년대 한국 보수주의의 이념적 특성에 관한 연구」, 2014", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001870540" },
  { label: "강정인·서희경, 「김성수와 한국민주당 연구」, 한국정치학회보 47(1), 2013", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001760261" },
  { label: "이하나, 「1950~60년대 반공주의 담론과 감성 정치」, 사회와역사 95, 2012", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001702935" },
  { label: "국가기록원, 반공예술인단", url: "https://theme.archives.go.kr/next/history/samilos/sub3_5.do" },
];

export const conservatismArticleKo: SeedLanguageArticle = {
  slug: "what-is-true-conservatism",
  term: "보수",
  date: "2026-09-17",
  readMinutes: 11,
  newsletterEligible: false,
  title: "무엇이 진짜 보수인가",
  subtitle: "보수는 기득권의 방패가 아니라 자유를 지키는 책임이다",
  summary: "나는 보수다. 시민의 자유와 법치, 재산권과 기업의 도전을 지키고 싶기 때문이다. 그러나 보수라는 이름으로 권위주의와 정경유착, 자기편의 특권까지 감쌀 수는 없다. 보수는 낡은 것을 붙드는 정치가 아니라 지킬 만한 가치를 가려 지키고, 그 가치를 해치는 권력은 고치는 태도다.",
  keyPoints: [
    "보수는 모든 변화를 거부하는 사상이 아니라 검증된 질서를 지키기 위해 필요한 변화를 받아들이는 태도다.",
    "한국 보수는 분단·전쟁·산업화를 거치며 안보, 반공, 성장, 강한 국가와 결합했다.",
    "기업의 자유와 기업의 특권, 국가안보와 정권안보, 법치와 자기편 보호는 구분해야 한다.",
    "씨앗이 보는 보수는 자유·법치·도전의 질서를 지키되 그 가치를 해치는 자기편의 권력부터 감시하는 보수다.",
  ],
  heroImage: {
    src: "images/seed-language/what-is-true-conservatism-hero.webp",
    alt: "오래된 석조 건축을 보존하고 수리하면서 여러 통로를 현대적인 거리와 작은 일터로 연결한 도시 풍경",
    caption: "보수는 모든 것을 그대로 두는 일이 아니다. 지킬 토대는 보존하고 시민의 자유와 새로운 도전을 막는 벽에는 통로를 내는 일이다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 장면",
  },
  inlineImage: {
    src: "images/seed-language/conservatism-three-meanings-ko.svg",
    alt: "보수의 본래 의미, 한국에서 통용되는 의미, 씨앗이 보는 보수를 비교한 도표",
    caption: "보수라는 하나의 말 안에는 사상적 원뜻과 한국 현대사의 경험, 씨앗이 제안하는 판단 기준이 겹쳐 있다.",
    credit: "씨앗의 소리 편집 도표",
  },
  inlineImageAfterSection: 5,
  sections: [
    {
      title: "나는 보수다",
      paragraphs: [
        "나는 보수다.",
        "시민의 자유를 믿고, 재산권과 시장경제를 지지하며, 기업가의 도전이 국가의 허락보다 앞서야 한다고 생각한다. 법은 권력자의 의지가 아니라 권력자를 묶는 규칙이어야 하고, 국가는 유능해야 하지만 시민보다 커져서는 안 된다고 믿는다.",
        "그래서 나는 보수다.",
        "그런데 한국 사회에서 보수라고 말하는 일은 이처럼 간단하지 않다. 누군가는 보수를 산업화의 주역이라고 말하고, 누군가는 독재의 후예라고 부른다. 한쪽에서는 자유와 시장을 떠올리고 다른 쪽에서는 반공과 권위주의를 떠올린다. 보수라는 말 안에는 자유민주주의와 권위주의, 시장경제와 관치경제, 국가안보와 정권안보가 뒤엉켜 있다.",
        "그 모든 것을 보수라는 이름으로 함께 지킬 수는 없다.",
        "보수는 낡은 것을 지키는 일이 아니다. 지킬 만한 것을 가려 지키는 일이다.",
      ],
    },
    {
      title: "보수는 변화를 거부하는 말이 아니다",
      paragraphs: [
        "보수(保守)는 지키고 보전한다는 뜻이다. 그러나 무엇이든 오래됐다는 이유만으로 지킨다는 뜻은 아니다.",
        "정치사상으로서 보수주의는 프랑스혁명 이후 뚜렷해졌다. 인간이 이성만으로 사회 전체를 새롭게 설계할 수 있다는 낙관을 경계하고, 오랜 시간 축적된 제도와 관습에는 한 세대가 전부 이해하기 어려운 경험과 지혜가 담겨 있다고 보았다.",
        "사회는 낡은 건물을 부수고 새로 짓듯 한 번에 바꿀 수 있는 대상이 아니다. 하나의 제도를 없애면 예상하지 못했던 다른 질서가 함께 무너질 수 있다. 좋은 의도로 만든 정책도 시민의 삶에서는 전혀 다른 결과를 낳을 수 있다. 그래서 보수주의는 거대한 약속보다 검증된 변화, 전면적인 개조보다 점진적인 개선을 선호한다.",
        "그렇다고 변화를 거부하지는 않는다. 에드먼드 버크의 보수주의도 고쳐야 할 것을 그대로 두자는 사상이 아니었다. 변화할 능력이 없는 국가는 지켜낼 능력도 잃는다. 제도가 현실을 따라가지 못하고 시민의 자유를 억압한다면, 그 제도를 고치는 것이 오히려 보수의 책임이다.",
        "보수와 수구는 여기서 갈라진다. 보수는 지키기 위해 고친다. 수구는 고치지 않기 위해 지킨다고 말한다.",
      ],
      sourceIndices: [0],
    },
    {
      title: "한국의 보수는 전쟁과 산업화 속에서 만들어졌다",
      paragraphs: [
        "한국의 보수는 서구의 보수주의를 그대로 옮겨 놓은 사상이 아니다. 분단과 전쟁, 국가 수립과 산업화라는 한국 현대사의 경험 속에서 형성됐다.",
        "북한이라는 전체주의 체제가 실제로 존재하고 한국전쟁을 경험한 나라에서 안보는 추상적인 구호가 아니었다. 자유민주주의 체제를 지키고 국가의 생존을 확보하는 일은 절박한 과제였다. 한미동맹과 국제질서, 강한 국방을 중시하는 한국 보수의 성향도 이러한 역사에서 나왔다.",
        "산업화 역시 한국 보수가 자부심을 갖는 역사다. 가난한 농업국가가 제조업과 수출을 기반으로 성장했고, 기업가와 노동자들은 세계시장에서 경쟁했다. 경제성장은 시민의 생활을 바꾸고 교육과 민주주의가 성장할 물질적 기반을 넓혔다. 이 성취를 이념적 이유로 지워버리는 것은 정확하지 않다.",
        "그러나 전쟁과 산업화의 공적이 그 과정의 모든 권력을 정당화하지는 않는다.",
        "반공주의는 국가를 지키는 원칙이었지만 정부를 비판하는 시민을 억압하는 도구로도 사용됐다. 1950~60년대 반공주의는 대한민국의 국가 정체성을 형성한 동시에 정권의 통치 논리로 작동했다. 자유당 시기에는 ‘반공예술인단’과 같은 조직이 선거 선전에 동원되기도 했다. 국가안보와 정권안보의 경계가 무너진 것이다.",
        "산업화 과정에서도 마찬가지였다. 한국 보수는 시장경제를 내세우지만 실제 산업화는 국가가 금융과 산업, 수출과 기업 육성에 깊이 개입한 개발국가 방식으로 이루어졌다. 한국 보수 안에 시장과 기업의 자유를 주장하는 얼굴과 강한 국가가 산업과 시민을 이끌어야 한다는 얼굴이 함께 남은 이유다.",
      ],
      sourceIndices: [1, 4, 5, 6],
    },
    {
      title: "기업의 자유와 기업의 특권은 다르다",
      paragraphs: [
        "보수는 기업 활동의 자유를 지켜야 한다. 새로운 기술에 투자하고, 실패할 위험을 감수하며, 일자리와 상품을 만드는 기업가의 도전은 국가가 대신할 수 없다.",
        "그러나 친기업과 친시장은 같은 말이 아니다.",
        "기존 대기업을 보호하기 위해 새로운 사업자의 진입을 막는다면 그것은 시장을 지키는 일이 아니다. 인허가와 보조금, 조달과 세제 혜택을 특정 기업에 집중하면서 시장경제를 말한다면 그것은 경쟁이 아니라 특혜다. 기업이 권력과 가까워야 사업할 수 있는 사회는 자유시장과 거리가 멀다.",
        "시장경제의 중심은 이미 자리를 잡은 기업이 아니다. 아직 시장에 들어오지 못한 사람, 새로운 방식으로 경쟁하려는 기업, 실패를 감수하고 도전하려는 시민이다.",
        "보수가 지켜야 할 것은 기업의 현재 자리가 아니라 도전할 자유다. 기업의 자유를 지키되 기업의 특권은 지키지 않는 것, 그것이 씨앗이 보는 시장보수다.",
      ],
    },
    {
      title: "법과 원칙은 자기편 앞에서 증명된다",
      paragraphs: [
        "보수는 법치와 질서를 강조한다. 사회가 안정적으로 유지되려면 법이 예측 가능해야 하고, 계약이 지켜져야 하며, 폭력보다 제도가 앞서야 한다. 이 원칙은 보수가 지켜야 할 중요한 가치다.",
        "하지만 법과 원칙은 상대편을 처벌할 때 증명되지 않는다.",
        "자기편 정치인의 불법에는 사정을 설명하고, 상대편의 잘못에는 법의 엄정함을 요구한다면 그것은 법치가 아니다. 정권이 바뀔 때마다 수사와 감사의 방향이 바뀌고, 같은 행위가 진영에 따라 달리 평가된다면 시민은 법이 아니라 권력의 눈치를 보게 된다.",
        "질서 역시 시민을 조용히 만드는 일이 아니다. 정부를 비판하는 시민, 경영진을 감시하는 주주, 기업에 항의하는 노동자, 시민단체의 권력을 비판하는 또 다른 시민이 안전하게 말할 수 있어야 한다.",
        "갈등이 보이지 않는 사회가 질서 있는 사회인 것은 아니다. 권력에 이의를 제기해도 불이익을 받지 않는 사회가 법치가 작동하는 사회다.",
        "법과 원칙은 상대를 공격할 때가 아니라 자기편을 심판할 때 증명된다.",
      ],
    },
    {
      title: "안보는 정부를 지키는 말이 아니다",
      paragraphs: [
        "대한민국에서 안보는 가볍게 다룰 수 없는 문제다. 북한은 핵무기를 개발했고, 한반도는 여전히 군사적 대치 상태에 있다. 한미동맹과 국제적 협력, 강한 억지력은 시민의 안전과 직결된다. 한국 보수가 안보를 중시해 온 데에는 충분한 역사적·현실적 이유가 있다.",
        "그렇기 때문에 안보를 정치적으로 소비하는 일은 더 엄격하게 살펴야 한다.",
        "정부의 대북정책을 비판했다는 이유로 친북으로 몰아가거나, 외교정책에 다른 의견을 냈다는 이유로 국가 정체성을 의심한다면 안보는 시민의 안전을 지키는 원칙이 아니라 정치적 배제의 도구가 된다.",
        "국가를 비판하는 것과 국가를 부정하는 것은 다르다. 정부와 정당은 국가 그 자체가 아니다. 정권을 지키는 일을 국가를 지키는 일로 바꾸어 말하는 순간 보수는 권위주의로 기울어진다.",
        "안보는 정부를 지키는 말이 아니다. 시민이 자유롭게 살아갈 나라를 지키는 일이다.",
      ],
    },
    {
      title: "전통은 오래됐다는 이유만으로 옳지 않다",
      paragraphs: [
        "보수는 전통과 공동체를 존중한다. 사회는 법률과 행정명령만으로 유지되지 않는다. 가족과 이웃, 신뢰와 책임, 세대 사이에 이어지는 생활의 규범이 사회를 버티게 한다.",
        "국가가 모든 관계를 대신할 수 없으며, 시민이 스스로 만든 공동체를 함부로 밀어내서도 안 된다. 이 점에서 전통과 공동체는 보수가 지켜야 할 소중한 자산이다.",
        "그러나 오래됐다는 사실이 그 자체로 정당성을 주지는 않는다. 가족이라는 이름으로 폭력을 감추거나, 조직의 전통이라는 이유로 개인의 침묵을 요구하거나, 다수의 관습을 이유로 소수자의 자유를 제한한다면 그것은 지켜야 할 전통이 아니다.",
        "전통은 시민의 자유와 존엄을 지켜주는 동안에는 자산이다. 자유와 존엄을 억압하는 순간에는 개혁의 대상이 된다.",
      ],
    },
    {
      title: "보수는 하나의 얼굴이 아니다",
      paragraphs: [
        "민주화 이전의 보수정권은 자유민주주의를 공식 이념으로 내세우면서도 실제 통치에서는 시민의 정치적 자유를 제한했다. 1987년 이후 한국 보수는 무엇을 지킬 것인지 다시 설명해야 했다. 법치와 시장경제, 재산권과 대의민주주의가 그 앞에 놓였다.",
        "2000년대 뉴라이트는 대한민국의 건국과 산업화를 적극적으로 평가하고 경제적 자유주의를 강조했다. 다만 일부 연구는 이 흐름이 정치적 자유주의보다 경제적 자유주의를 더 강하게 신뢰했다고 분석한다. 이는 한국 보수 전체에 대한 판정이 아니라, 보수가 자유민주주의를 말할 때 어떤 자유를 앞세우고 어떤 자유를 뒤로 미뤘는지 살펴보게 하는 학술적 평가다.",
        "한국 보수 안에는 시장의 자유를 중시하는 사람도 있고 국가의 역할을 더 중요하게 보는 사람도 있다. 외교·안보를 중심으로 판단하는 보수, 가족과 종교적 전통을 중시하는 보수, 일상의 안정과 책임을 중시하는 생활보수도 있다.",
        "주류 보수정당과 극우적 대중운동도 구분해야 한다. 북한의 위협을 경계하는 것과 모든 정치적 반대자를 반국가세력으로 몰아가는 것은 다르다. 전통을 존중하는 것과 다른 시민의 존재를 부정하는 것도 다르다.",
        "보수를 하나로 묶어 독재의 후예라고 부르면 다양한 흐름이 지워진다. 반대로 보수라는 이름만 붙으면 음모론과 혐오, 권위주의까지 감싸는 태도 역시 보수의 가치를 무너뜨린다. 극단을 품는다고 지지층이 넓어지는 것이 아니다. 보수가 지켜야 할 경계가 사라질 뿐이다.",
      ],
      sourceIndices: [1, 2, 3],
    },
    {
      title: "씨앗이 보는 보수",
      paragraphs: [
        "씨앗이 보는 보수는 정치적 우파의 신분증이 아니다. 국가와 시장, 시민사회의 권력을 어떤 기준으로 대할 것인가에 관한 태도다.",
        "씨앗의 보수는 시민의 자유를 지킨다. 시민이 자신의 삶을 선택하고, 재산을 형성하며, 계약을 맺고, 사업에 도전하고, 권력에 이의를 제기할 수 있어야 한다.",
        "씨앗의 보수는 유능하지만 제한된 국가를 원한다. 국가는 국방과 치안, 법질서와 공정한 경쟁을 책임져야 한다. 도움이 필요한 시민에게 다시 일어설 기반도 마련해야 한다. 그러나 시민의 선택을 대신하고 기업의 방향을 명령하며 시민사회를 자신의 하부조직처럼 다루기 시작하면 그 힘은 제한돼야 한다.",
        "씨앗의 보수는 시장을 지키지만 시장에 이미 자리 잡은 권력까지 지키지는 않는다. 기업가의 도전을 보호하고, 담합과 독점, 정경유착과 진입장벽을 감시한다.",
        "씨앗의 보수는 전통을 존중하지만 전통을 심판 밖에 두지 않는다. 가족과 공동체의 자율을 지키되 그 안에서 벌어지는 폭력과 억압을 외면하지 않는다.",
        "씨앗의 보수는 안보를 중시하지만 시민의 입을 막는 데 안보를 사용하지 않는다. 한미동맹과 국제질서를 중시하되 어느 정부와 어느 나라의 판단도 대한민국 시민의 자유보다 앞에 두지 않는다.",
        "그리고 씨앗의 보수는 자기편의 권력을 먼저 감시한다.",
      ],
    },
    {
      title: "무엇을 지켰는지가 아니라 무엇을 지키고 있는가",
      paragraphs: [
        "산업화를 이룬 공적이 오늘의 특권을 보장하지 않는다. 자유민주주의를 지켰다는 자부심이 권위주의를 면책하지 않는다. 시장경제를 외친 이력이 정경유착과 독점을 시장의 이름으로 보호할 권리를 주지도 않는다.",
        "보수 역시 과거의 훈장으로 평가받을 수 없다.",
        "오늘 누구의 자유를 지키고 있는가. 새로 시장에 들어오려는 기업의 도전을 보호하고 있는가. 자기편의 위법에도 같은 법을 적용하고 있는가. 국가안보라는 말이 정권과 정당의 방패로 사용되고 있지는 않은가. 전통과 질서라는 이름 뒤에 시민의 침묵을 요구하고 있지는 않은가.",
        "이 기준 앞에서 자신이 가진 권력까지 고칠 수 있어야 보수다.",
        "변화를 거부하는 보수는 수구가 된다. 자유를 버린 보수는 권위주의가 된다. 시장보다 기업의 자리를 지키는 보수는 기득권이 된다.",
        "보수는 과거로 돌아가는 정치가 아니다. 시민의 자유가 오늘의 충동과 권력에 휩쓸리지 않고 다음 세대까지 이어질 수 있도록 질서를 세우는 일이다.",
        "지킬 것은 자유이고, 바꿀 것은 권력이다.",
        "그것이 씨앗이 말하는 보수다.",
      ],
    },
  ],
  sources: sharedSources,
};

export const conservatismArticleEn: SeedLanguageArticle = {
  ...conservatismArticleKo,
  term: "Conservatism",
  title: "What Is Real Conservatism?",
  subtitle: "Conservatism is not a shield for privilege but a duty to preserve freedom",
  summary: "I am conservative because I want to preserve civic freedom, the rule of law, property rights and the freedom to build a business. But authoritarianism, collusion and partisan privilege cannot all be protected under the same name. Conservatism should distinguish what deserves to endure—and reform the power that corrodes it.",
  keyPoints: [
    "Conservatism is not opposition to all change; it accepts necessary reform to preserve institutions worth keeping.",
    "Korean conservatism was shaped by division, war and industrialization, tying it to security, anti-communism, growth and a strong state.",
    "Business freedom is not corporate privilege, national security is not regime security, and the rule of law is not protection for one's own camp.",
    "For SEED VOICE, conservatism preserves liberty, law and enterprise while scrutinizing the power held by its own side first.",
  ],
  heroImage: {
    ...conservatismArticleKo.heroImage,
    alt: "An old stone civic structure being preserved and repaired as several passages open into a modern street of small workplaces and public life",
    caption: "Conservatism does not leave everything untouched. It preserves sound foundations while opening walls that obstruct freedom and new enterprise.",
    credit: "AI editorial image produced by SEED VOICE",
  },
  inlineImage: {
    src: "images/seed-language/conservatism-three-meanings-en.svg",
    alt: "A comparison of classical conservatism, common Korean usage and the SEED VOICE standard",
    caption: "One word contains several layers: a political tradition, Korea's modern historical experience and SEED VOICE's proposed standard of judgment.",
    credit: "SEED VOICE editorial graphic",
  },
  sections: [
    {
      title: "I am conservative",
      paragraphs: [
        "I am conservative.",
        "I believe in civic freedom, property rights and markets. An entrepreneur's freedom to attempt something new should come before the state's permission. Law should constrain rulers rather than transmit their will, and the state should be capable without becoming larger than the citizen.",
        "That is why I am conservative.",
        "Yet the word is not so simple in Korea. Some hear the architects of industrialization; others hear the heirs of dictatorship. Freedom and markets occupy the same label as anti-communism and authoritarianism. Liberal democracy and authoritarian rule, markets and state direction, national security and regime security all overlap inside the Korean use of conservatism.",
        "They cannot all be preserved under one name.",
        "Conservatism is not the defence of whatever is old. It is the discipline of choosing what deserves to endure.",
      ],
    },
    {
      title: "Conservatism is not the refusal of change",
      paragraphs: [
        "The Korean characters 保守 mean to preserve and guard. They do not mean that age alone makes something worth keeping.",
        "As a modern political philosophy, conservatism took clearer form after the French Revolution. It challenged confidence that reason could redesign an entire society at once and argued that institutions and customs contain accumulated experience no single generation fully understands.",
        "A society cannot be rebuilt as easily as an obsolete structure. Remove one institution and an unseen support may collapse with it. A policy born of good intentions may produce very different effects in ordinary life. Conservatism therefore tends to prefer tested change over sweeping promises and repair over total reconstruction.",
        "That is not a rejection of reform. Burkean conservatism did not demand that defects remain untouched. A state unable to change can also lose the ability to preserve itself. When an institution no longer fits reality or restricts citizens' freedom, reform can be the conservative responsibility.",
        "Conservatism and reaction divide here. Conservatism repairs in order to preserve; reaction invokes preservation in order to avoid repair.",
      ],
      sourceIndices: [0],
    },
    {
      title: "Korean conservatism was made in war and industrialization",
      paragraphs: [
        "Korean conservatism is not a direct copy of its Western counterpart. It was formed through division, war, state-building and compressed industrialization.",
        "In a country that experienced the Korean War and still confronts a totalitarian North Korean regime, security was never merely rhetorical. Preserving the constitutional order and the survival of the state was urgent. The conservative emphasis on the US alliance, international order and military deterrence grew from that experience.",
        "Industrialization is another source of conservative pride. A poor agrarian country built manufacturing and exports, while entrepreneurs and workers competed in world markets. Growth changed daily life and widened the material ground on which education and democracy could expand. Erasing that achievement for ideological convenience would be inaccurate.",
        "But the achievements of war-time survival and industrialization cannot justify every exercise of power along the way.",
        "Anti-communism defended the state, but it also served as an instrument for suppressing citizens who criticized government. In the 1950s and 1960s it helped form South Korea's national identity while functioning as a language of rule. Under the Liberal Party, organizations such as the Anti-Communist Artists Corps were mobilized for election propaganda. The boundary between national security and regime security broke down.",
        "Industrialization carried a similar contradiction. Korean conservatives praise markets, but development depended on a state deeply involved in finance, industry, exports and corporate selection. That history left two impulses inside conservatism: freedom for markets and firms, and confidence in a strong state that directs both industry and citizens.",
      ],
      sourceIndices: [1, 4, 5, 6],
    },
    {
      title: "Business freedom is not corporate privilege",
      paragraphs: [
        "Conservatism should defend the freedom to build and operate a business. Government cannot replace the entrepreneur who invests in new technology, accepts the possibility of failure and creates products and jobs.",
        "But being pro-business is not the same as being pro-market.",
        "Blocking a new entrant to protect an incumbent does not preserve a market. Concentrating permits, subsidies, procurement and tax benefits in favoured firms is privilege, not competition. A society in which a company must be close to political power in order to prosper is far from a free market.",
        "The centre of a market economy is not the company already established. It is the person still outside, the firm trying a different method and the citizen willing to risk failure.",
        "Conservatism should preserve the freedom to attempt, not a firm's existing position. Protect enterprise, but not corporate privilege: that is SEED VOICE's standard for market conservatism.",
      ],
    },
    {
      title: "Law and principle are proved against one's own camp",
      paragraphs: [
        "Conservatives emphasize the rule of law and social order. Law must be predictable, contracts reliable and institutions stronger than violence. These are principles worth preserving.",
        "Yet law and principle are not proved by punishing an opponent.",
        "If wrongdoing by an ally receives context and sympathy while an opponent receives only the full severity of law, the result is not the rule of law. When investigations and audits change direction with each government, citizens learn to watch power rather than trust law.",
        "Order does not mean making citizens quiet. Citizens who criticize government, shareholders who scrutinize management, workers who challenge a company and citizens who question the power of advocacy organizations must all be able to speak safely.",
        "A society without visible conflict is not necessarily orderly. The rule of law is present when a citizen can challenge power without arbitrary punishment.",
        "Law and principle are proved when they judge one's own side.",
      ],
    },
    {
      title: "Security is not a word for protecting government",
      paragraphs: [
        "Security cannot be treated lightly in South Korea. North Korea has developed nuclear weapons, and the peninsula remains under military confrontation. The US alliance, international cooperation and credible deterrence bear directly on citizens' safety. Korean conservatism has strong historical and practical reasons for placing security near its centre.",
        "For the same reason, the political use of security deserves especially strict scrutiny.",
        "When criticism of a North Korea policy becomes evidence of pro-North sympathies, or disagreement over diplomacy becomes doubt about a citizen's national loyalty, security stops protecting people and starts excluding them.",
        "Criticizing the state is not denying the state. A government or party is not the nation itself. Conservatism moves toward authoritarianism when preserving an administration is recast as preserving the country.",
        "Security is not a word for protecting government. It preserves a country in which citizens can live freely.",
      ],
    },
    {
      title: "Tradition is not right simply because it is old",
      paragraphs: [
        "Conservatism respects tradition and community. Statutes and administrative orders do not hold society together by themselves. Families, neighbours, trust, responsibility and practices passed across generations help sustain ordinary life.",
        "The state cannot replace every relationship, and it should not casually displace communities citizens have formed for themselves. Tradition and community are therefore valuable conservative assets.",
        "Age, however, does not create legitimacy on its own. A tradition that hides violence within a family, demands silence within an organization or restricts a minority's freedom through majority custom does not deserve preservation.",
        "Tradition is an asset while it supports freedom and dignity. Once it suppresses them, it becomes an object of reform.",
      ],
    },
    {
      title: "Conservatism does not have one face",
      paragraphs: [
        "Before democratization, conservative governments formally professed liberal democracy while limiting political freedom in practice. After 1987, Korean conservatism had to explain again what it meant to preserve. The rule of law, markets, property rights and representative democracy moved to the foreground.",
        "The New Right of the 2000s offered a positive account of the Republic of Korea's founding and industrialization and emphasized economic liberty. Some scholarship argues that it trusted economic liberalism more strongly than political liberalism. That is not a verdict on all Korean conservatives; it is an academic test of which freedoms conservatism has placed first and which it has postponed.",
        "Korean conservatism includes market liberals, state-oriented conservatives, security conservatives, religious and family traditionalists, and ordinary citizens concerned with stability and responsibility.",
        "Mainstream conservative parties must also be distinguished from far-right mass movements. Recognizing the North Korean threat is not the same as branding every opponent anti-state. Respecting tradition is not denying another citizen's existence.",
        "Treating all conservatives as heirs of dictatorship erases those differences. But shielding conspiracy, hatred and authoritarianism whenever they carry a conservative label also destroys conservatism's own values. Embracing an extreme does not broaden conservatism. It erases the boundary conservatism needs to keep.",
      ],
      sourceIndices: [1, 2, 3],
    },
    {
      title: "The conservatism SEED VOICE sees",
      paragraphs: [
        "For SEED VOICE, conservatism is not an identity card for the political right. It is an attitude toward power in the state, the market and civil society.",
        "It preserves civic freedom: the ability to choose one's life, build property, enter contracts, attempt a business and challenge power.",
        "It seeks a state that is capable but limited. The state must provide defence, public safety, law and fair competition, and help citizens regain their footing after misfortune. But its power must be constrained when it replaces citizens' choices, directs firms by command or treats civil society as an administrative arm.",
        "It preserves markets without protecting the powers already entrenched inside them. It defends enterprise while scrutinizing cartels, monopoly, political collusion and barriers to entry.",
        "It respects tradition without placing tradition beyond judgment. It protects the autonomy of families and communities while refusing to ignore coercion within them.",
        "It values security without using security to silence citizens. It supports alliances and international order but puts no government's preference above the freedom of South Korean citizens.",
        "And it scrutinizes the power held by its own camp first.",
      ],
    },
    {
      title: "Not what conservatism once preserved, but what it preserves now",
      paragraphs: [
        "The achievement of industrialization does not guarantee privilege today. Pride in defending liberal democracy does not excuse authoritarianism. A history of praising markets does not confer a right to protect collusion and monopoly in the market's name.",
        "Conservatism, too, cannot live on medals from the past.",
        "Whose freedom does it protect today? Does it open the market to a new firm? Does it apply the same law to its own side? Has national security become a shield for a government or party? Does the language of tradition and order demand citizens' silence?",
        "Conservatism must be able to repair even the power it already holds.",
        "A conservatism that refuses change becomes reaction. A conservatism that abandons liberty becomes authoritarian. A conservatism that protects corporate position rather than markets becomes vested interest.",
        "Conservatism is not a politics of returning to the past. It builds an order in which citizens' freedom can survive today's passions and powers and endure into the next generation.",
        "Preserve freedom. Reform power.",
        "That is the conservatism SEED VOICE means.",
      ],
    },
  ],
};
