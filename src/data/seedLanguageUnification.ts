import type { SeedLanguageArticle } from "./seedLanguageBase";

const imageRoot = "images/seed-language/unification-freedom-responsibility";

export const unificationArticleKo: SeedLanguageArticle = {
  slug: "unification-freedom-responsibility",
  term: "통일",
  date: "2026-09-23",
  readMinutes: 12,
  newsletterEligible: true,
  title: "통일 — 북에 구걸하는 평화가 아니라 자유를 넓히는 국가의 책임",
  subtitle: "사라진 구호를 넘어 북한 주민의 자유와 다음 세대의 현실로 다시 묻는다",
  summary: "통일은 북한 정권의 허락을 구하는 일도, 당장 국경을 허무는 일도 아닙니다. 자유민주적 기본질서와 평화적 방법 위에서 북한 주민의 권리를 회복하고 다음 세대가 감당할 제도와 질서를 준비하는 대한민국의 미완의 책임입니다.",
  keyPoints: [
    "평화는 통일로 가는 방법이어야지 분단을 영구화하는 명분이 되어서는 안 됩니다.",
    "대한민국이 바라봐야 할 대상은 북한 정권의 체면이 아니라 자유를 빼앗긴 북한 주민입니다.",
    "통일은 정권의 유행어가 아니라 안보·인권·비용·법과 제도를 꾸준히 준비하는 국가의 장기 과제입니다.",
  ],
  heroImage: {
    src: `${imageRoot}/hero.webp`,
    alt: "철책과 닫힌 관문 너머로 도로와 철도가 북쪽 산맥을 향해 이어지는 비무장지대의 새벽",
    caption: "통일은 철책을 성급히 허무는 구호가 아니라, 자유를 지킬 힘 위에서 끊어진 길을 다시 이을 조건을 준비하는 일입니다.",
    credit: "AI 이미지",
  },
  inlineImage: {
    src: `${imageRoot}/separated-family.webp`,
    alt: "오래된 이산가족 사진과 편지를 함께 살펴보는 노년 여성과 젊은 여성",
    caption: "분단은 과거의 사건으로 끝나지 않았습니다. 만나지 못한 가족의 기억을 다음 세대가 어떤 책임으로 이어갈 것인지가 남아 있습니다.",
    credit: "AI 이미지",
  },
  inlineImageAfterSection: 5,
  leadParagraphs: [
    "‘통일’이라는 말이 사라지고 있습니다. 북한은 남과 북을 같은 민족의 관계가 아니라 적대하는 두 국가라고 선언했습니다. 대한민국에서는 통일보다 평화공존을 앞세우는 목소리가 커졌고, 젊은 세대에게 통일은 나의 삶과 거리가 먼 낡은 구호가 되어가고 있습니다.",
    "서울대학교 통일평화연구원의 2025년 조사에서 19~29세 가운데 통일이 필요하다고 답한 비율은 24.4%였습니다. 필요하지 않다는 응답은 50.7%였습니다. 2019년에는 각각 41.1%와 25.3%였습니다. 불과 6년 사이 인식이 거의 뒤집혔습니다.",
    "청년들이 특별히 냉정해서가 아닙니다. 지금까지의 통일 논의가 청년의 질문에 제대로 답하지 못했습니다. 통일하면 취업과 주거, 세금과 복지는 어떻게 되는가. 북한 주민과 어떤 법과 제도 아래 함께 살 것인가. 핵무기와 군대는 어떻게 처리할 것인가. 이런 질문에는 답하지 않으면서 ‘우리는 한민족’이라는 말만 되풀이했습니다.",
  ],
  charts: [{
    title: "20대의 통일 인식은 6년 사이 어떻게 달라졌나",
    headers: ["응답", "2019년", "2025년"],
    rows: [
      ["통일이 필요하다", "41.1%", "24.4%"],
      ["통일이 필요하지 않다", "25.3%", "50.7%"],
      ["변화", "필요 응답이 우세", "불필요 응답이 과반"],
    ],
    note: "서울대학교 통일평화연구원 2025 통일의식조사. ‘매우·약간 필요하다’와 ‘별로·전혀 필요하지 않다’를 각각 합산한 비율입니다.",
    afterSection: 0,
  }],
  sections: [
    {
      title: "흩어진 것을 하나의 질서로 다시 세우는 일",
      paragraphs: [
        "통일의 한자는 ‘統一’입니다. 갈라지고 흩어진 것을 하나의 질서로 모은다는 뜻입니다. 한반도의 통일은 영토 두 조각을 붙이는 일이 아닙니다. 전쟁과 분단으로 갈라진 사람과 가족, 역사와 생활권을 다시 잇고, 전혀 다른 체제에서 살아온 주민들이 하나의 헌법과 법치 아래 살아갈 수 있도록 만드는 긴 과정입니다.",
        "대한민국 헌법 제4조는 통일의 방향까지 정하고 있습니다. 대한민국은 통일을 지향하며 ‘자유민주적 기본질서에 입각한 평화적 통일정책’을 수립하고 추진해야 합니다. 대통령에게도 평화적 통일을 위한 성실한 의무가 있습니다.",
        "여기에서 ‘평화’만 떼어내서도 안 되고 ‘통일’만 떼어내서도 안 됩니다. 더구나 ‘자유민주적 기본질서’를 지워서는 안 됩니다. 충돌을 피하고 대화를 이어가는 일은 필요하지만, 충돌하지 않는 상태가 곧 통일은 아닙니다. 평화는 통일로 가는 방법이어야지 분단을 영구화하는 명분이 되어서는 안 됩니다.",
      ],
      sourceIndices: [0, 1],
    },
    {
      title: "북한 정권과 북한 주민은 다릅니다",
      paragraphs: [
        "북한은 잘못된 체제입니다. 이 말은 북한 주민을 적으로 돌리는 말이 아닙니다. 오히려 정권과 주민을 분리해서 보겠다는 말입니다. 북한 주민은 지도자를 바꿀 권리도, 자유롭게 말하고 이동할 권리도 갖지 못했습니다.",
        "유엔 북한인권조사위원회는 북한에서 조직적이고 광범위하며 중대한 인권침해가 자행됐고 일부는 반인도범죄에 해당할 수 있다고 판단했습니다. 이런 현실을 외면한 채 북한 정권의 체면과 심기만 살피는 것은 포용이 아닙니다. 북한 주민의 고통을 정권 뒤에 감추는 일입니다.",
        "대한민국이 책임져야 할 대상은 김정은 정권의 권력이 아니라 자유를 빼앗긴 약 2천600만 북한 주민입니다. 통일은 그들에게 시혜를 베푸는 일이 아닙니다. 한반도의 모든 주민이 생명과 재산, 표현과 이동, 신앙과 직업 선택의 자유를 누릴 수 있도록 헌법의 공간을 넓히는 일입니다. 씨앗은 통일을 자유의 영토를 넓히는 일이라고 봅니다.",
      ],
      sourceIndices: [2, 3],
    },
    {
      title: "대화는 필요하지만 구걸은 정책이 아닙니다",
      paragraphs: [
        "최근 정동영 통일부 장관의 발언과 행보가 도마 위에 오른 것도 이 기준에서 살펴봐야 합니다. 정 장관은 국회에서 북한의 우라늄 농축시설 지역으로 영변·강선과 함께 평안북도 구성을 언급했습니다. 이후 미국이 한국에 제공하던 북한 핵·대량살상무기 관련 위성정보 공유를 일부 제한한 것으로 보도됐습니다.",
        "정부 보안조사에서는 미국이 제공한 정보가 정 장관에게 유출됐다는 정황을 찾지 못했습니다. 정 장관도 공개자료에 근거한 발언이라고 반박했습니다. 따라서 ‘기밀을 누설해 정보망을 끊었다’고 확정하는 것은 확인된 사실을 넘어섭니다.",
        "그러나 기밀 유출이 아니었다고 책임이 모두 사라지는 것도 아닙니다. 외교·안보 책임자의 말은 공개자료인지 아닌지만으로 평가되지 않습니다. 동맹국이 어떤 정보의 공개를 민감하게 받아들이는지, 발언이 정보자산과 공조체계에 어떤 영향을 미칠지까지 살펴야 합니다. 실제 정보 공유가 제한됐다면 그것은 동맹의 신뢰 관리에 경고등이 켜진 일입니다.",
        "현 정부가 북한의 ‘적대적 두 국가론’을 공식 수용했다고 단정할 근거는 없습니다. 그러나 북한을 ‘조선’으로 부르는 문제와 평화공존 구상을 앞세우며 대한민국의 헌법적 통일 목표를 흐리는 듯한 신호를 반복한다면, 북한의 주장과 방향에 가까이 다가간다는 비판을 피하기 어렵습니다. 북한의 요구는 적극적으로 설명하면서 북한 주민의 자유와 우리의 안보는 뒤로 밀려서는 안 됩니다.",
        "대화의 문은 열어두어야 합니다. 그러나 상대가 핵무기를 고도화하고 대한민국을 적대국으로 규정하는데도 우리가 먼저 헌법의 언어를 내려놓을 이유는 없습니다. 안보와 원칙을 포기한 채 만남을 구걸하는 것은 대화가 아니라 굴종입니다.",
      ],
      sourceIndices: [4, 5, 6],
    },
    {
      title: "‘통일대박’이 남긴 가능성과 한계",
      paragraphs: [
        "2014년 박근혜 정부는 ‘통일은 대박’이라는 말로 통일을 다시 국가의 중심 의제로 끌어올렸습니다. 드레스덴 구상을 발표하고 대통령이 직접 위원장을 맡는 통일준비위원회도 출범시켰습니다. 진보진영이 주도하던 통일 담론을 보수정부가 경제적 기회와 국가 발전의 언어로 꺼냈다는 점은 의미가 있었습니다.",
        "그러나 대박론은 오래가지 못했습니다. 북한과 신뢰를 쌓을 구체적 경로가 부족했고, 통일이 가져올 갈등과 비용도 충분히 설명하지 못했습니다. 세월호 참사와 탄핵 정국을 거치며 통일 의제는 국정의 중심에서 밀려났습니다.",
        "그 시도가 남긴 교훈은 분명합니다. 통일은 진보의 전유물도, 보수의 장식물도 되어서는 안 됩니다. 진보정부가 화해와 지원만 강조하고 보수정부가 압박과 경제적 이익만 내세운다면, 통일정책은 정권이 바뀔 때마다 처음부터 다시 시작할 수밖에 없습니다.",
      ],
      sourceIndices: [7, 8],
    },
    {
      title: "통일을 다시 현실의 언어로 바꿔야 합니다",
      paragraphs: [
        "통일을 포기하지 않는다는 것은 당장 국경을 허물자는 뜻이 아닙니다. 전쟁이나 강제적인 흡수통일을 주장하는 것도 아닙니다. 북한 주민에게 외부 정보가 들어갈 길을 넓히고, 북한 인권을 남북대화의 방해물로 취급하지 않으며, 자유와 법치를 받아들일 사회적 조건을 꾸준히 만드는 일입니다.",
        "통일 비용뿐 아니라 분단 비용도 계산해야 합니다. 군사적 긴장과 핵 위협, 이산가족의 고통, 접경지역의 제약, 대륙과 단절된 경제적 비용은 지금도 계속 발생합니다. 동시에 청년에게 부담을 감추지 말아야 합니다. 통일 이후의 조세·복지·토지·기업 활동·주민 이동·법적 통합을 구체적으로 연구하고 공개해야 합니다.",
        "어느 정부가 들어서더라도 지켜야 할 최저선도 필요합니다. 평화적 방법, 자유민주적 기본질서, 북한 주민의 인권, 튼튼한 안보와 동맹은 정권에 따라 바뀌어서는 안 됩니다. 통일은 대통령 한 사람의 임기 안에 성과를 내기 위한 정치상품이 아니라 세대를 건너 준비하는 국가의 기본 과제입니다.",
      ],
    },
    {
      title: "통일은 완성되지 않은 대한민국의 과제입니다",
      paragraphs: [
        "한반도는 우리 스스로 원해서 갈라진 땅이 아닙니다. 분단은 수많은 가족을 찢어놓았고, 이산가족 대부분은 고향과 가족을 다시 만나지 못한 채 세상을 떠났습니다. 그 고통이 오래됐다는 이유로 없었던 일이 되는 것은 아닙니다.",
        "북한이 두 국가를 선언했다고 해서 우리까지 통일을 포기할 이유는 없습니다. 오히려 북한 정권이 민족과 통일의 언어를 지우려 할수록 대한민국은 통일의 의미를 더 분명히 세워야 합니다.",
        "구걸하는 통일은 없습니다. 강요하는 통일도 오래갈 수 없습니다. 씨앗이 말하는 통일은 자유를 지킬 힘 위에서 평화를 준비하고, 북한 주민의 권리를 외면하지 않으며, 다음 세대가 감당할 제도와 질서를 차근차근 세워가는 일입니다.",
        "통일은 사라진 옛말이 아닙니다. 대한민국이 아직 끝내지 못한 책임입니다.",
      ],
    },
  ],
  sources: [
    { label: "국가법령정보센터 — 대한민국헌법 제4조", url: "https://www.law.go.kr/lsSc.do?query=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%ED%97%8C%EB%B2%95" },
    { label: "국가법령정보센터 — 헌법 제66조 제3항", url: "https://www.law.go.kr/LSW/lsSideInfoP.do?docCls=jo&joBrNo=00&joNo=0066&lsiSeq=61603&urlMode=lsScJoRltInfoR" },
    { label: "유엔 인권최고대표사무소 — 북한인권조사위원회", url: "https://seoul.ohchr.org/en/node/400" },
    { label: "유엔 인구기금 — 북한 인구 자료", url: "https://www.unfpa.org/data/world-population/KP" },
    { label: "한국일보 — 정동영 ‘구성시’ 발언과 대북정보 공유 제한", url: "https://www.hankookilbo.com/News/Read/A2026052214290003841" },
    { label: "정부 보안조사와 정동영 장관 반박 보도", url: "https://www.khan.co.kr/article/202604210601011" },
    { label: "연합뉴스 — 정동영 장관의 한반도 평화공존 구상", url: "https://www.yna.co.kr/view/AKR20260617122500504" },
    { label: "연합뉴스 — 박근혜 정부 드레스덴 구상", url: "https://www.yna.co.kr/view/AKR20140328160700001" },
    { label: "연합뉴스 — 통일준비위원회 출범", url: "https://www.yna.co.kr/view/AKR20140715075400001" },
    { label: "서울대학교 통일평화연구원 — 2025 통일의식조사", url: "https://ipus.snu.ac.kr/wp-content/uploads/2026/01/2025%ED%86%B5%EC%9D%BC%EC%9D%98%EC%8B%9D%EC%A1%B0%EC%82%AC-%EB%82%B4%EC%A7%80-1218.pdf" },
  ],
};

export const unificationArticleEn: SeedLanguageArticle = {
  ...unificationArticleKo,
  term: "Unification",
  readMinutes: 11,
  title: "Unification Is Not Peace Begged from Pyongyang, but a Duty to Expand Freedom",
  subtitle: "Beyond a fading slogan: reframing unification around liberty, constitutional duty and the lives of North Koreans",
  summary: "Korean unification does not mean seeking permission from the North Korean regime or tearing down the border tomorrow. It is South Korea's unfinished responsibility to restore the rights of North Koreans and prepare institutions the next generation can sustain—peacefully and on the foundation of liberal democracy.",
  keyPoints: [
    "Peace must remain the method of unification, not an excuse to make division permanent.",
    "Seoul's moral concern should center on North Korean people, not the dignity or preferences of their regime.",
    "Unification is a long-term national task of preparing security, rights, law and institutions—not a slogan tied to one administration.",
  ],
  heroImage: {
    ...unificationArticleKo.heroImage,
    alt: "A DMZ fence and closed gate at dawn, with a road and railway continuing toward northern mountains",
    caption: "Unification is not a call to tear down the fence overnight. It is the work of building the conditions to reconnect the peninsula while protecting freedom.",
    credit: "AI image produced by SEED VOICE",
  },
  inlineImage: {
    ...unificationArticleKo.inlineImage!,
    alt: "An elderly woman and a young woman examining an old separated-family photograph and letters",
    caption: "Division did not end as a historical event. The next generation must decide what responsibility it carries for families that never met again.",
    credit: "AI image produced by SEED VOICE",
  },
  leadParagraphs: [
    "The word unification is disappearing from South Korean public life. North Korea now defines the two Koreas as hostile states. In the South, coexistence increasingly displaces unification, while many younger Koreans see the issue as a distant and burdensome relic.",
    "Seoul National University's 2025 Unification Perception Survey found that only 24.4 percent of respondents aged 19 to 29 considered unification necessary, while 50.7 percent said it was unnecessary. In 2019, the figures were 41.1 and 25.3 percent. The balance nearly reversed in six years.",
    "This is not simply youthful indifference. Public debate has failed to answer practical questions: What happens to jobs, housing, taxes and welfare? Under what laws could people raised in radically different systems live together? How would nuclear weapons, armed forces and property be handled? Ethnic appeals alone cannot answer those questions.",
  ],
  charts: [{
    title: "How opinion among South Koreans in their twenties changed in six years",
    headers: ["Response", "2019", "2025"],
    rows: [
      ["Unification is necessary", "41.1%", "24.4%"],
      ["Unification is unnecessary", "25.3%", "50.7%"],
      ["Balance", "Necessity led", "Unnecessary exceeded half"],
    ],
    note: "Seoul National University Institute for Peace and Unification Studies, 2025 Unification Perception Survey. Combined positive and negative response categories.",
    afterSection: 0,
  }],
  sections: [
    {
      title: "Rebuilding one civic and constitutional order",
      paragraphs: [
        "The Korean term tongil, written with the characters 統一, means bringing what has been divided into one order. On the peninsula, that cannot be reduced to attaching two territories. It means reconnecting people, families and communities divided by war, and building a legal order in which residents formed under radically different systems can live together.",
        "Article 4 of South Korea's Constitution both mandates and limits that task: the Republic of Korea shall seek unification and pursue it peacefully on the basis of the free and democratic basic order. The Constitution also places a duty on the president to work faithfully for peaceful unification.",
        "None of those elements is disposable. Peace cannot be separated from unification, and neither can the liberal-democratic foundation. Avoiding conflict and maintaining dialogue are necessary, but the absence of fighting is not unification. Peace should be the method, not the rationale for making division permanent.",
      ],
      sourceIndices: [0, 1],
    },
    {
      title: "The regime and the people are not the same",
      paragraphs: [
        "North Korea is a profoundly unjust system. Saying so does not make North Koreans the enemy; it separates the population from the regime. North Koreans cannot change their rulers, speak freely or move freely.",
        "The UN Commission of Inquiry documented systematic, widespread and grave violations, some potentially amounting to crimes against humanity. A policy preoccupied with the regime's dignity while muting this reality is not inclusion. It hides citizens' suffering behind the state that controls them.",
        "South Korea's responsibility is not to preserve Kim Jong Un's power. It is to keep sight of roughly 26 million people denied basic freedom. Unification should expand the constitutional space in which every Korean can enjoy security, property, expression, movement, faith and occupational choice. SEED understands unification as the expansion of freedom.",
      ],
      sourceIndices: [2, 3],
    },
    {
      title: "Dialogue is necessary; supplication is not policy",
      paragraphs: [
        "The controversy surrounding Unification Minister Chung Dong-young illustrates the standard required of senior officials. In a parliamentary hearing, Chung named Kusong alongside Yongbyon and Kangson as sites associated with North Korea's uranium-enrichment program. Reports later said the United States had restricted some satellite intelligence sharing on North Korean nuclear and weapons-of-mass-destruction targets.",
        "A South Korean security review found no indication that US-supplied intelligence had been leaked to Chung, who said he relied on public information. It would therefore go beyond verified facts to state as settled that he disclosed a secret and caused the channel to close.",
        "But the absence of a proven leak does not erase responsibility. A national-security official must consider not only whether information is public, but how an ally assesses its sensitivity and whether a statement could damage intelligence cooperation. If sharing was restricted, alliance trust plainly required better management.",
        "There is also insufficient evidence to claim that the Lee administration has formally accepted Pyongyang's hostile two-state doctrine. Yet official language that emphasizes permanent coexistence or experiments with calling the North 'Joseon' can blur South Korea's constitutional objective. When Seoul explains the regime's demands more energetically than it defends North Korean rights and allied security, criticism that it is drifting toward Pyongyang's frame is justified.",
        "The door to dialogue should remain open. But when the other side is expanding its nuclear arsenal and designating South Korea a hostile state, Seoul has no reason to discard its constitutional language first. Abandoning security and principle in pursuit of a meeting is not dialogue. It is submission.",
      ],
      sourceIndices: [4, 5, 6],
    },
    {
      title: "What the 'unification jackpot' debate left behind",
      paragraphs: [
        "In 2014, the conservative Park Geun-hye administration restored unification to the center of national politics through the phrase 'unification is a jackpot,' the Dresden initiative and a presidential committee for preparation. It mattered that a conservative government recast a debate long associated with progressives in terms of opportunity and national development.",
        "The agenda did not last. It lacked a workable path for building trust with Pyongyang and did not sufficiently explain the conflict and cost of integration. Domestic crises eventually pushed it out of the government's center.",
        "The lesson remains valuable. Unification cannot be a progressive monopoly or a conservative ornament. If progressive governments speak only of engagement and aid while conservative governments speak only of pressure and economic gain, policy will restart with every transfer of power.",
      ],
      sourceIndices: [7, 8],
    },
    {
      title: "Returning unification to the language of real life",
      paragraphs: [
        "Refusing to abandon unification does not mean opening the border tomorrow or advocating war and forced absorption. It means expanding access to outside information, refusing to treat human rights as an obstacle to diplomacy, and patiently building the social foundations for liberty and rule of law.",
        "South Korea must calculate not only the cost of unification but the continuing cost of division: nuclear danger, military tension, separated families, restrictions on border regions and economic isolation from the continent. It must also be candid with younger citizens about burdens, with concrete work on taxation, welfare, land, business, migration and legal integration.",
        "A democratic consensus needs a floor that survives changes of government: peaceful means, liberal-democratic order, the rights of North Koreans, credible defense and trusted alliances. Unification is not a political product designed for one presidential term. It is a national task prepared across generations.",
      ],
    },
    {
      title: "South Korea's unfinished responsibility",
      paragraphs: [
        "Koreans did not freely choose the division of the peninsula. It tore apart families, and most members of separated families have died without returning home or meeting relatives. Time does not erase that injury.",
        "Pyongyang's declaration of two states does not oblige Seoul to abandon unification. The more the North Korean regime tries to erase the language of shared nationhood and unification, the more clearly South Korea should state what unification means.",
        "Unification cannot be begged from the North, and it cannot be sustainably imposed. For SEED, it means preparing peace from a position capable of defending freedom, refusing to forget the rights of North Koreans, and steadily building institutions the next generation can sustain.",
        "Unification is not a vanished word. It is the Republic of Korea's unfinished responsibility.",
      ],
    },
  ],
};

