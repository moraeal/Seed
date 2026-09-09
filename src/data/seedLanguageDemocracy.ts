import type { Language } from "../i18n";
import type { SeedLanguageArticle } from "./seedLanguage";

const sources = [
  { label: "대한민국 헌법 — 국민주권, 자유민주적 기본질서와 기본권", url: "https://www.law.go.kr/lsEfInfoP.do?lsiSeq=61603" },
  { label: "연합뉴스, 2026.08.24 — 유시민의 여당 대표 선출 관련 ‘왕정’ 비판", url: "https://www.yna.co.kr/view/AKR20260824168500001" },
  { label: "도올 김용옥 특별기고, 2016.11.21 — ‘왕정에서 민주로’", url: "https://www.m-joongang.com/news/articleView.html?idxno=314195" },
  { label: "YTN, 2025.04.08 — 파면 이후 ‘윤 어게인’ 구호와 지지집회", url: "https://www.ytn.co.kr/_ln/0103_202504082029511432" },
  { label: "더불어민주당 — 강령·당헌·당규·윤리규범", url: "https://theminjoo.kr/main/sub/introduce/rule.php" },
];
const sourcesEn = sources.map((source, index) => ({ ...source, label: [
  "Constitution of the Republic of Korea — popular sovereignty, the free democratic basic order and rights",
  "Yonhap, August 24, 2026 — Rhyu Si-min’s criticism of presidential influence over ruling-party leadership",
  "Do-ol Kim Yong-ok, November 21, 2016 — ‘From monarchy to democracy’",
  "YTN, April 8, 2025 — ‘Yoon Again’ slogans following Yoon’s removal from office",
  "Democratic Party of Korea — platform and party rules",
][index] }));

const democracyFeatureKo: SeedLanguageArticle = {
  slug: "democracy-not-a-king",
  newsletterEligible: true,
  term: "민주",
  date: "2026-09-09",
  readMinutes: 5,
  title: "민주는 왕을 뽑는 일이 아니라 권력을 제한하는 일이다",
  subtitle: "좋은 지도자를 기다리는 정치에서, 어떤 지도자도 왕이 될 수 없는 정치로",
  summary: "선거로 권력을 바꾼다고 정치의 관계까지 민주적으로 바뀌는 것은 아니다. ‘왕정’ 비판과 ‘윤어게인’이 드러낸 지도자 중심 정치를 돌아보고, 민주를 정당의 이름이나 진영의 구호가 아닌 시민의 권리로 되찾을 기준을 묻는다.",
  keyPoints: [
    "선거는 권력을 맡기는 절차이지, 지도자에게 모든 것을 허락하는 백지위임장이 아니다.",
    "보수의 과제는 새로운 구원자를 찾는 것이 아니라 검증과 책임이 작동하는 정당을 만드는 것이다.",
    "민주의 진정성은 상대편을 비판할 때보다 우리 편 권력을 제한할 때 드러난다.",
  ],
  heroImage: {
    src: "images/seed-language/democracy-citizens-photo.webp",
    alt: "어두운 홀에서 빈 권력자의 의자 주위에 서서 정면을 바라보는 시민들",
    caption: "권력의 자리는 시민에게서 나온다. 지도자를 선택한 시민은 그 권력을 감시할 권리도 갖는다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 사진 형식의 상징적 장면",
  },
  inlineImageAfterSection: 4,
  inlineImage: {
    src: "images/seed-language/democracy-not-a-king-hero.webp",
    alt: "빈 권력자의 의자를 뒤로하고 같은 높이의 탁자에 모여 토론하는 다양한 시민들",
    caption: "시민은 지도자를 선택한다. 그러나 선택한 순간에도 질문하고 비판하고 교체할 권리를 내려놓지 않는다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 삽화",
  },
  relatedArticle: { slug: "democracy-citizens-deep-read", label: "깊게 읽기 · 민주는 권력자의 깃발이 아니라 시민의 권리다 · 15분" },
  chart: {
    title: "같은 선거, 다른 정치 — 신민의 문법과 시민의 문법",
    headers: ["판단 기준", "신민의 정치", "시민의 정치"],
    rows: [
      ["지도자", "우리를 구원할 사람", "권한을 잠시 위탁받은 공직자"],
      ["선거 승리", "우리 편 뜻을 관철할 허가", "반대자까지 대표할 책임"],
      ["내부 비판", "배신과 불충", "실패를 줄이는 검증"],
      ["권력 실패", "지도자를 지키고 책임을 외부로", "사실을 확인하고 책임을 묻기"],
      ["정치의 목표", "좋은 왕의 등장", "누구도 왕이 될 수 없는 제도"],
    ],
    note: "씨앗의 소리의 분석 도표. 특정 지지자 전체를 분류한 통계가 아니라 권력과 시민의 관계를 비교하는 판단 기준이다.",
    afterSection: 2,
  },
  sources,
  sections: [
    { title: "선거가 끝나면 시민은 왜 다시 관객이 되는가", paragraphs: [
      "선거철이 되면 우리는 비슷한 질문을 되풀이한다. 이번에는 누가 나라를 구할 것인가. 누가 상대를 단번에 꺾고, 어지러운 정치를 정리하고, 우리의 불안을 끝내줄 것인가. 후보의 말과 표정에서 다음 시대의 운명을 찾는다. 그런데 정작 그 사람의 권력을 어떻게 제한할 것인지는 뒤로 밀린다.",
      "이것은 강한 지도자가 필요하냐는 문제와 다르다. 민주사회에도 결단하고 책임질 지도자가 필요하다. 문제는 지도자의 능력을 기대하는 것을 넘어, 시민 자신이 감당해야 할 판단과 감시까지 한 사람에게 맡기는 데 있다. 투표할 때는 주권자였다가 당선 뒤에는 지도자의 성공을 응원하는 관객으로 돌아가는 것이다.",
      "씨앗의 소리가 묻고 싶은 것은 이 간극이다. 대한민국은 민주주의의 제도를 세웠지만, 정치의 일상은 얼마나 민주라는 엔진으로 움직이고 있는가. 왕을 직접 뽑는 것처럼 선거를 이해한다면 투표권이 넓어져도 권력 앞에 서는 태도는 달라지지 않는다.",
    ]},
    { title: "‘왕정’이라는 비판은 진영을 바꿔 돌아왔다", sourceIndices: [1,2], paragraphs: [
      "2026년 8월 24일 연합뉴스 보도에 따르면 유시민 작가는 대통령이 여당 대표를 골라 당선시키려 하는 것은 왕정·귀족정으로 가는 것이라고 비판했다. 이재명 대통령이 특정 당대표 후보를 지지했다는 주장에 대한 유 작가의 평가다. 그 비판 자체와 대통령의 실제 관여가 어느 정도였는지는 구분해야 한다.",
      "2016년 도올 김용옥도 박근혜 정부를 비판하며 ‘왕정에서 민주로’를 말했다. 서로 다른 정부를 향해 같은 말이 등장했다는 사실은 한 가지 질문을 남긴다. 우리는 권력자의 소속만 바꾸고, 권력자와 정당과 시민 사이의 관계는 그대로 두고 있는 것은 아닌가.",
      "물론 대한민국은 법적으로 왕정이 아니라 민주공화국이다. 여기서 왕정은 체제 분류가 아닌 정치문화의 비유다. 공천과 인사가 충성의 보상이 되고, 지도자에 대한 반론이 배신으로 취급되며, 정당이 지도자의 의중을 살피는 조직으로 좁아질 때 민주적 절차 안에서도 왕정적인 관계가 자란다는 뜻이다.",
    ]},
    { title: "민주는 다수가 무엇이든 할 수 있다는 뜻이 아니다", sourceIndices: [0], paragraphs: [
      "민주라는 말은 모두가 사용하지만 그 안에 담는 뜻은 다르다. 누군가는 다수결을, 누군가는 광장 참여를, 누군가는 사회경제적 평등을 먼저 떠올린다. 모두 중요한 논점이다. 그러나 그것만으로 권력의 행사가 정당해지는 것은 아니다. 반드시 누가 결정하는지와 함께 무엇을 해서는 안 되는지를 물어야 한다.",
      "대한민국 헌법은 국민주권을 선언하면서 기본권과 권력분립을 함께 규정한다. 다수결은 의견이 갈릴 때 결정을 내리는 방법이다. 다수가 소수의 표현을 막거나 권력자가 불편한 견제를 없애도 좋다는 허가는 아니다. 자유민주주의에서 선거로 얻은 권력도 법과 권리의 경계 안에 있어야 한다.",
      "그래서 민주의 가장 간단한 시험은 이것이다. 당신이 말하는 국민 안에 당신을 반대하는 사람도 들어 있는가. 광장에 나오지 않은 사람, 반대편 정당에 표를 준 사람도 동등한 주권자다. 그들을 제거해야 할 장애물로 취급한다면 민주라는 말은 시민의 권리가 아니라 집단의 권력을 정당화하는 도구가 된다.",
    ]},
    { title: "보수는 왕을 찾느라 정치인을 키우지 못했다", paragraphs: [
      "보수의 일부가 민주라는 말을 불편해하는 데에는 그 말이 상대 정당의 이름과 정치적 브랜드처럼 들리는 사정도 있을 것이다. 그러나 특정 정당이 민주를 말한다고 민주를 포기할 이유는 없다. 보수가 지켜야 할 자유와 법치, 제한된 권력은 시민의 동등한 주권과 함께 설 때 비로소 온전해진다.",
      "더 깊은 문제는 인물을 대하는 방식이다. 정당이 정책과 의정활동을 통해 사람을 키우고 실패에 책임지게 하기보다, 선거가 다가올 때마다 바깥의 유명 인물에게 구원을 기대한다. 정치 경험이 없다는 이유가 신선함의 증거가 되고, 타협과 설득의 능력을 검증할 시간은 낡은 절차처럼 취급된다.",
      "진보 진영의 조직적 인재 발굴과 대비되는 보수 정치의 한 취약점이다. 그렇다고 모든 진보가 조직으로, 모든 보수가 영웅으로 움직인다는 뜻은 아니다. 조직도 폐쇄적인 이해집단이 되어 시민을 대신할 수 있다. 두 진영에 필요한 것은 조직의 존재나 지도자의 인기 자체가 아니라 시민 앞에서 검증받고 책임지는 통로다.",
    ]},
    { title: "‘윤어게인’은 한 사람과 나라를 겹쳐놓는 위험을 드러낸다", sourceIndices: [3], paragraphs: [
      "윤석열 전 대통령 파면 이후 등장한 ‘윤어게인’은 이 문제를 선명하게 드러낸다. 2025년 4월 YTN은 윤 전 대통령의 재등장을 뜻하는 피켓과 일부 지지자들의 헌법재판소 결정 불복 움직임을 보도했다. 집회 참가자들의 동기까지 하나로 단정할 수는 없다. 상대 진영에 대한 반감이나 절차에 대한 불신도 서로 다른 무게로 작용했을 것이다.",
      "그러나 한 정치인의 복귀를 자유대한민국의 회복과 동일시하는 논리는 비판해야 한다. 대통령과 대한민국은 같은 존재가 아니다. 지도자가 잘못해도 원칙을 지키는 것이 헌정질서를 지키는 일이지, 지도자를 위해 원칙의 예외를 만드는 것이 나라를 지키는 일은 아니다.",
      "윤석열의 책임을 묻는 것과 민주당의 권력 남용을 비판하는 것은 양립한다. 시민은 어느 한쪽을 비판하기 위해 다른 한쪽에 충성할 의무가 없다. 보수의 갱신을 한 사람의 복귀에 묶어놓으면 정책을 고치고 새로운 지도자를 검증할 공간부터 좁아진다.",
    ]},
    { title: "민주를 되찾는 첫걸음은 우리 편 권력을 의심하는 것이다", paragraphs: [
      "민주를 되찾자는 말은 그 단어를 진보에게서 빼앗아 보수의 깃발로 만들자는 뜻이 아니다. 민주라는 당명을 가졌다고 민주적인 것도 아니고, 자유를 외친다고 자유를 지키는 것도 아니다. 판단의 기준은 실제 행동이어야 한다. 우리 편도 반대자의 자유를 존중하는가. 같은 법을 적용받는가. 불리한 결과를 다투더라도 정당한 절차와 권력교체의 가능성을 지키는가.",
      "민주화 다음의 과제는 시민화다. 시민화는 시민에게 정해진 정치적 정답을 가르치는 일이 아니다. 국가와 정당, 지도자와 시민단체의 말까지 스스로 검토하고, 동의하지 않을 자유를 행사하며, 자기 판단의 결과에 책임지는 사람이 많아지는 과정이다. 국가는 법을 공정하게 집행할 능력을 갖추되 시민의 판단까지 대신해서는 안 된다.",
      "정당에서는 공천의 기준과 심사 과정을 공개하고, 당원에게 지도부를 비판할 통로를 열어야 한다. 시민단체는 누구의 위임으로 말하며 재정은 어디에서 오는지 설명해야 한다. 지지자는 자신이 좋아하는 정치인의 주장도 근거와 대조해야 한다. 이런 작은 검증이 쌓여야 민주가 선거일의 의식이 아니라 매일의 작동원리가 된다. 시민의 책임은 투표함 앞에서 끝나지 않는다.",
      "좋은 왕이 나타나기를 기다리는 나라는 왕의 자질에 운명을 건다. 시민의 나라는 지도자가 불완전해도 권리가 지켜지는 제도에 힘을 쏟는다. 민주는 권력을 선택하는 데서 시작하지만, 선택한 권력도 제한할 때 살아 움직인다. 우리가 되찾아야 할 민주는 바로 그것이다.",
    ]},
  ],
};

const democracyFeatureEn: SeedLanguageArticle = {
  ...democracyFeatureKo,
  term: "Democracy",
  title: "Democracy is not choosing a king. It is limiting power.",
  subtitle: "From waiting for a good leader to ensuring that no leader can become a monarch",
  summary: "Elections can change who holds office without changing how citizens relate to power. The language of ‘monarchy’ and the ‘Yoon Again’ movement expose the risks of leader-centered politics. Democracy needs to be reclaimed as a citizen’s right, not a party’s brand.",
  keyPoints: [
    "An election delegates authority; it does not hand a leader a blank check.",
    "Conservatives need parties that cultivate and scrutinize leaders, not another political savior.",
    "Democratic commitment is tested most clearly when we limit the power of our own side.",
  ],
  heroImage: { ...democracyFeatureKo.heroImage, alt: "Citizens stand around an empty seat of power in a dark hall and look directly at the viewer", caption: "Public authority comes from citizens. Choosing a leader preserves the citizen’s right to scrutinize that leader’s power.", credit: "SEED VOICE AI-generated image · photorealistic symbolic scene" },
  inlineImage: { ...democracyFeatureKo.inlineImage!, alt: "Citizens debate at an equal-height table with an empty ceremonial chair behind them", caption: "Citizens choose a leader without surrendering their right to question, criticize and replace that leader.", credit: "SEED VOICE AI-generated conceptual illustration" },
  relatedArticle: { slug: "democracy-citizens-deep-read", label: "Deep Read · Democracy is a citizen’s right, not a ruler’s banner · 15 min" },
  sources: sourcesEn,
  chart: {
    title: "The same election, two relationships with power",
    headers: ["Test", "Politics of subjects", "Politics of citizens"],
    rows: [
      ["Leader", "The person who will save us", "An official temporarily entrusted with power"],
      ["Victory", "Permission to impose our side’s will", "Responsibility toward opponents too"],
      ["Internal criticism", "Betrayal and disloyalty", "Scrutiny that helps prevent failure"],
      ["Failure", "Protect the leader; blame outsiders", "Establish the facts; demand accountability"],
      ["Goal", "A good king", "Institutions that permit no king"],
    ],
    note: "SEED VOICE analytical comparison, not a statistical classification of supporters. These are criteria for examining relationships between citizens and power.",
    afterSection: 2,
  },
  sections: [
    { title: "Why do voters become spectators again after an election?", paragraphs: [
      "Election season brings a familiar question: who will save the country this time? Who can defeat the other side, restore order and end our anxiety? We search a candidate’s words and bearing for signs of the future. How we will limit that person’s power becomes a secondary concern.",
      "This is different from asking whether a democracy needs effective leadership. It does. Leaders must make decisions and accept responsibility. The problem begins when expectations of competence become a transfer of the citizen’s own duties of judgment and oversight. People act as sovereigns on election day, then become spectators cheering the winner.",
      "That gap is SEED VOICE’s concern. South Korea has built democratic institutions. But how much of its everyday politics is actually driven by democracy? If an election is understood as directly choosing a king, broader suffrage alone cannot change how people stand before power.",
    ]},
    { title: "The charge of ‘monarchy’ has crossed political camps", sourceIndices: [1,2], paragraphs: [
      "On August 24, 2026, Yonhap reported writer and political commentator Rhyu Si-min’s criticism that a president choosing a preferred ruling-party leader and seeking that candidate’s election pointed toward monarchy or aristocracy. He was commenting on claims that President Lee Jae-myung supported a particular candidate. Rhyu’s criticism must be distinguished from an independently established account of the president’s actual involvement.",
      "In 2016, philosopher Do-ol Kim Yong-ok invoked ‘from monarchy to democracy’ in criticism of the Park Geun-hye government. The recurrence of this language under different administrations raises a question: have we changed the leader’s political affiliation while leaving the relationship among leader, party and citizen intact?",
      "South Korea is constitutionally a democratic republic, not a monarchy. Here, monarchy is a metaphor for political culture, not a legal classification. Court-like relationships can grow within electoral procedures when nominations and appointments become rewards for loyalty, disagreement becomes betrayal and parties organize themselves around reading the leader’s wishes.",
    ]},
    { title: "Democracy does not mean that a majority may do anything", sourceIndices: [0], paragraphs: [
      "People use democracy to mean different things: majority rule, participation in public squares, or greater social and economic equality. All matter. None alone justifies every exercise of power. Alongside who decides, we must ask what even the decision-maker is forbidden to do.",
      "Korea’s Constitution establishes popular sovereignty together with basic rights and divided powers. Majority voting settles disagreement; it is not permission to silence minorities or remove inconvenient checks. Liberal democracy places even elected authority within the boundaries of law and rights.",
      "The simplest democratic test follows: do the people you claim to represent include those who oppose you? Citizens absent from the rally, or voting for the other party, remain equal members of the sovereign public. Treating them as obstacles to eliminate turns democracy from a citizen’s right into a justification for collective power.",
    ]},
    { title: "The search for a king can crowd out the cultivation of politicians", paragraphs: [
      "Some conservatives may recoil from the word democracy because it sounds like their rival’s name and political brand. But another party’s use of the word is no reason to abandon it. Liberty, law and limited government become more complete when grounded in citizens’ equal political standing.",
      "A deeper weakness concerns leadership selection. Instead of developing people through policy work and public office, with responsibility for failure, a party may turn to an outside celebrity as elections approach. Inexperience becomes proof of freshness; the time needed to test persuasion and compromise becomes an outdated inconvenience.",
      "This exposes a conservative vulnerability when contrasted with organized progressive recruitment. It does not mean every progressive relies on organizations or every conservative on heroes. Organizations can also become closed interest groups claiming to replace citizens. Both camps need channels of scrutiny and accountability, not merely organizations or popular leaders.",
    ]},
    { title: "‘Yoon Again’ exposes the danger of equating one person with the country", sourceIndices: [3], paragraphs: [
      "The ‘Yoon Again’ slogan following former president Yoon Suk Yeol’s removal makes the problem visible. In April 2025, YTN reported placards suggesting his political return and some supporters’ rejection of the Constitutional Court’s decision. Participants cannot be assigned a single motive. Hostility toward the opposing camp and distrust of procedure may have mattered in different ways.",
      "But the logic that equates one politician’s restoration with the restoration of a free Korea deserves criticism. A president and the country are not the same entity. Upholding principles when a leader fails protects constitutional government; inventing exceptions for that leader does not.",
      "Holding Yoon accountable is compatible with criticizing abuses of power by the Democratic Party. Citizens need not pledge loyalty to one side to criticize the other. Tying conservative renewal to one person’s return narrows the space for improving policy and testing new leadership.",
    ]},
    { title: "Reclaiming democracy begins with questioning our own side’s power", paragraphs: [
      "Reclaiming democracy does not mean taking the word from progressives and turning it into a conservative banner. A democratic party name does not guarantee democratic conduct, any more than a freedom slogan guarantees liberty. Actions are the test. Does our side respect opponents’ rights, accept the same law and preserve lawful procedures and the possibility of replacement even while challenging an unfavorable outcome?",
      "After democratization comes civic formation: not teaching citizens a prescribed political answer, but helping more people assess claims made by government, parties, leaders and civic organizations, exercise the freedom to disagree, and take responsibility for their judgments. Government needs the capacity to enforce fair rules without substituting its judgment for that of citizens.",
      "Parties should disclose nomination criteria and procedures, and give members room to criticize their leadership. Civic organizations should explain whom they represent and how they are financed. Supporters should test even a favored politician’s claims against evidence. Accumulated everyday scrutiny makes democracy a working principle, not merely an election-day ritual. Civic responsibility does not end at the ballot box.",
      "A country waiting for a good king gambles on a ruler’s character. A country of citizens invests in institutions that protect rights despite imperfect leaders. Democracy begins with choosing power, but becomes a living principle when citizens also limit the power they have chosen. That is the democracy we need to recover.",
    ]},
  ],
};

const democracyDeepKo: SeedLanguageArticle = {
  slug: "democracy-citizens-deep-read",
  newsletterEligible: false,
  term: "민주 · 깊게 읽기",
  date: "2026-09-09",
  readMinutes: 15,
  title: "민주는 권력자의 깃발이 아니라 시민의 권리다",
  subtitle: "형식적 민주화 이후, 왕정적 정치와 구원자 정치에서 민주를 되찾는 법",
  summary: "같은 ‘민주’를 말하면서도 우리는 다른 정치질서를 상상한다. 말의 의미에서 시작해 자유와 다수결, 왕정적 정치문화, 보수의 구원자 정치와 ‘윤어게인’을 살피고, 민주화 이후 시민화의 기준을 제안한다. 이 글은 사실 자료와 필자의 경험을 바탕으로 한 씨앗의 소리의 정치비평이다.",
  keyPoints: [
    "선거와 정권교체는 소중한 성취다. 그러나 제도의 민주화만으로 지도자와 시민의 관계까지 민주적으로 바뀌지는 않는다.",
    "조직이 시민을 대신하는 정치와 지도자를 구원자로 기다리는 정치는 모두 시민의 자율성을 약하게 한다.",
    "자유는 다수의 폭주를 막고, 민주는 자유가 일부의 특권으로 굳어지는 것을 막는다.",
    "민주를 되찾는다는 것은 우리 편 권력에도 같은 기준을 적용하고 반대자의 권리를 지키는 일이다.",
  ],
  heroImage: {
    src: "images/seed-language/democracy-citizens-deep-hero.webp",
    alt: "분산된 탁자에서 토론하는 시민들과 권력분립을 상징하는 열린 건축 구조",
    caption: "민주의 주체는 하나의 목소리로 뭉뚱그려진 집단이 아니라, 서로 다르게 판단하면서 동등한 권리를 갖는 시민 한 사람 한 사람이다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 삽화",
  },
  inlineImage: {
    src: "images/seed-language/democracy-citizens-meeting.webp",
    alt: "동네 도서관의 공개 모임에서 공직자와 같은 높이로 앉아 자료를 검토하고 질문하는 주민들",
    caption: "시민화는 정해진 정치적 정답을 배우는 일이 아니다. 자신이 선택한 지도자에게도 질문하고 그 답을 검증하는 일상의 습관이다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 삽화",
  },
  showTableOfContents: true,
  relatedArticle: { slug: "democracy-not-a-king", label: "5분 요약본 보기" },
  chart: {
    title: "‘국민의 뜻’ 이후에 무엇을 허용하는가",
    headers: ["질문", "권력을 독점하는 민주 해석", "자유민주주의의 기준"],
    rows: [
      ["누가 국민인가", "특정 집단만을 진정한 인민으로 인정", "반대자를 포함한 모든 시민"],
      ["다수의 한계", "집단의 명분이 기본권보다 우선", "다수도 헌법과 기본권의 제한을 받음"],
      ["반대자의 자리", "극복하거나 배제할 대상", "동등한 권리를 가진 경쟁자"],
      ["제도의 역할", "목표 달성을 가로막는 장애물", "자의적 권력을 막는 독립적 견제"],
      ["패배의 의미", "우리의 정당성을 부정하는 사건", "받아들여야 할 권력교체의 가능성"],
    ],
    note: "씨앗의 소리의 개념 비교. 역사적 인민민주주의의 모든 유형을 요약하거나 특정 정당을 그 체제로 분류한 표가 아니다. 비자유주의적 권력 독점이 나타나는지 판단하기 위한 기준이다.",
    afterSection: 3,
  },
  sources,
  sections: [
    {
      "paragraphs": [
        "우리는 모두 민주주의를 말한다. 그러나 같은 민주주의를 생각하는 것은 아니다.",
        "어떤 사람에게 민주는 선거와 다수결이다. 어떤 사람에게는 광장에 모인 시민의 직접 참여다. 누군가는 사회·경제적 평등을 민주라고 부르고, 다른 사람은 개인의 자유와 권리를 지키는 헌법질서를 민주주의라고 생각한다. 심지어 자신이 지지하는 세력의 결정은 민주이고 상대편의 결정은 반민주라고 믿는 사람도 있다.",
        "그래서 정치에서 가장 위험한 말은 모두가 반대하는 말이 아니라 모두가 찬성한다고 생각하는 말일 수 있다. 같은 단어를 사용하기 때문에 서로 뜻이 통한다고 믿지만, 실제로는 전혀 다른 나라와 정치체제를 머릿속에 그리고 있기 때문이다.",
        "‘민주’가 바로 그런 말이다."
      ],
      "title": "같은 민주를 말해도 같은 정치를 뜻하지는 않는다",
      "overview": "다수결·참여·평등이라는 같은 말도 권력을 어디까지 허용하느냐에 따라 다른 질서를 가리킨다."
    },
    {
      "paragraphs": [
        "오래전 한 인권운동가와 우리 사회의 미래에 관해 대화를 나눈 적이 있다. 나는 우리 사회가 크게 바뀌어야 한다는 뜻으로 “대한민국 사회가 변혁되어야 한다”고 말했다. 내가 사용한 ‘변혁’은 작은 제도 개선을 넘어 낡은 관행과 부조리를 근본적으로 고쳐야 한다는 뜻이었다. 대한민국의 자유민주적 헌정질서를 바탕으로 시민의 자유와 권리를 더욱 넓히자는 의미였다.",
        "그러자 그는 내게 진짜 변혁이 무엇인지 아느냐고 물었다. 내가 변혁을 너무 순진하게 이해하는 것 같다고도 했다. 대화를 이어가며 나는 그가 말하는 변혁을 대한민국의 헌정질서 안에서 이루는 큰 개혁이 아니라, 북한식 체제에 가까운 방향으로 국가의 성격을 바꾸려는 뜻으로 이해했다. 이는 당시 대화에 대한 나의 기억과 해석이며, 상대의 노선이 별도로 확인됐다는 뜻은 아니다.",
        "우리는 같은 단어를 사용했지만 같은 미래를 이야기하고 있지 않았다.",
        "내가 그 대화에서 떠올린 것은 이른바 NL식 사고였다. 그러나 한 사람과 나눈 대화만으로 NL 계열 전체나 오늘의 특정 정당을 하나의 체제 구상에 묶을 수는 없다. 여기에서 중요한 것은 운동권 계보의 단정이 아니라, 일상적인 ‘큰 개혁’과 기존 질서를 대체하려는 ‘체제 변혁’이 같은 말 아래 섞일 수 있다는 점이다.",
        "물론 ‘변혁’이라는 말을 사용한다고 해서 모두 NL이거나 북한식 체제를 지향한다고 단정할 수는 없다. 중요한 것은 단어의 표면이 아니라 그 말로 무엇을 바꾸려 하는지, 변혁의 주체와 대상은 누구인지, 최종적으로 어떤 정치체제를 만들려 하는지를 확인하는 일이다.",
        "대한민국의 헌법질서 안에서 자유를 확대하려는 것인지, 대한민국의 체제 자체를 대체하려는 것인지 물어야 한다. 모든 국민을 동등한 시민으로 보는지, 특정 계급과 집단만을 진정한 민중으로 인정하는지도 살펴야 한다.",
        "정치적 언어에는 사전적 의미만 있는 것이 아니다. 누구나 이해하는 일상적 의미 위에 진영이 부여한 의미가 놓이고, 그 아래에는 특정 조직과 운동권만 정확히 알아듣는 노선적 의미가 숨어 있기도 한다. 변혁·민중·자주·해방·통일·평화·공공성·시민사회 같은 말들이 그렇다. 겉으로는 누구도 쉽게 반대할 수 없는 좋은 말이지만, 그 말이 가리키는 정치체제는 정반대일 수 있다.",
        "‘민주’도 마찬가지다."
      ],
      "title": "같은 말을 사용하며 서로 다른 체제를 꿈꾸다",
      "overview": "‘변혁’을 둘러싼 개인적 대화는 정치언어의 뜻을 당연하게 여기지 말아야 한다는 출발점이다."
    },
    {
      "paragraphs": [
        "민주는 글자 그대로 민이 주인이 되는 것을 뜻한다. 그러나 여기서부터 다시 질문해야 한다.",
        "그 ‘민’은 누구인가. 나와 생각이 다른 사람도 포함되는가. 집권세력을 반대하는 사람도 동등한 시민인가. 소수자와 야당 지지자도 주권자의 일부인가. 아니면 특정 이념과 정치세력을 지지하는 사람만 진정한 국민과 시민으로 인정되는가.",
        "국민이 주인이라는 말과 국민 한 사람 한 사람이 자유롭다는 말은 같지 않다. 국민 전체의 뜻이라는 이름으로 개인의 자유를 억압할 수도 있기 때문이다. 역사적으로 민주와 인민을 내세운 독재체제가 존재했던 이유도 여기에 있다.",
        "다수결만으로 민주주의가 완성된다면 선거에서 이긴 세력은 소수의 자유를 제한하고, 사법부와 언론을 장악하며, 자신에게 불리한 제도까지 마음대로 바꿀 수 있게 된다. 그러나 다수결은 결정을 내리는 방법이지, 다수가 모든 것을 할 수 있도록 허용하는 백지위임장이 아니다.",
        "시민 참여도 마찬가지다. 시민회의와 공론장, 타운홀미팅과 시민단체의 정책 참여는 민주주의를 보완할 수 있다. 그러나 조직되고 훈련된 일부 활동가가 평범한 시민 전체를 대신하기 시작하면 참여민주주의는 새로운 시민권력으로 변질된다. 누가 그들을 대표로 선출했으며 누구에게 책임지는지를 묻지 않는 시민 참여는 대의제를 보완하는 것이 아니라 대의제 위에 또 하나의 권력을 세울 수 있다.",
        "사회·경제적 평등 역시 민주주의의 중요한 조건이다. 형식적인 선거권만 있고 인간다운 생활과 실질적인 참여 기회가 없다면 민주주의는 공허해질 수 있다. 그러나 결과의 평등을 달성하기 위해 국가가 개인의 자유와 재산권, 선택권을 과도하게 제한한다면 민주라는 이름으로 자유를 억압하는 역설이 발생한다.",
        "그러므로 “민주적이다”라는 말만으로는 아무것도 충분히 설명되지 않는다. 반드시 네 가지를 더 물어야 한다.",
        "누가 시민으로 인정되는가. 어떤 절차로 결정하는가. 다수도 침해할 수 없는 권리는 무엇인가. 권력을 맡은 사람을 어떻게 견제하고 교체할 수 있는가."
      ],
      "title": "민이 주인이라는 말만으로는 부족하다",
      "overview": "누가 시민인지, 어떻게 결정하는지, 무엇을 침해할 수 없는지, 누가 권력을 교체할 수 있는지 물어야 한다."
    },
    {
      "paragraphs": [
        "대한민국 헌법은 제1조에서 대한민국이 민주공화국이며 주권이 국민에게 있다고 선언한다. 동시에 제4조에서는 자유민주적 기본질서를 명시한다. 여기서 ‘자유’는 민주 앞에 붙인 장식적인 수식어가 아니다. 민주적 권력이 넘어서는 안 될 경계다.",
        "자유민주주의에서 다수는 결정할 권리를 갖지만 모든 것을 결정할 수는 없다. 선거에서 이긴 권력도 국민 한 사람의 양심과 표현의 자유를 함부로 침해할 수 없다. 국회 다수당도 사법부를 자신의 정치적 목적에 종속시켜서는 안 된다. 국민의 지지를 받은 대통령도 법 위에 설 수 없다.",
        "이 글에서 자유민주주의의 기준으로 삼는 것은 개인의 자율성, 정치적 견해의 다양성, 기본권, 국민주권, 권력분립과 실질적인 정치적 경쟁이다. 민주주의는 단순한 머릿수의 우위가 아니라 서로 다른 사람들이 함께 살아갈 수 있도록 권력을 제한하는 체제여야 한다.",
        "자유 없는 민주는 다수의 독재가 될 수 있다. 반대로 민주 없는 자유도 소수의 특권으로 변질될 수 있다. 권력과 재산을 가진 일부에게만 자유가 허용되고 다수 시민이 정치적 결정에서 배제된다면 그것도 온전한 자유가 아니다.",
        "자유와 민주는 서로 경쟁하는 가치가 아니다. 자유는 민주가 집단권력으로 폭주하는 것을 막고, 민주는 자유가 일부의 특권으로 굳어지는 것을 막는다. 자유민주주의는 두 가치가 서로를 제한하면서 서로를 완성하는 질서다.",
        "역사적 인민민주주의와 자유민주주의를 가르는 핵심 쟁점 가운데 하나는 누가 정치적 주체로 인정되고 누가 그 의사를 해석하느냐는 문제다. 다만 ‘인민’이라는 단어 자체가 독재를 뜻하는 것은 아니다. 여기서 경계하는 인민민주주의적 사고는 특정 세력이 진정한 인민의 의사를 독점한다며 반대자를 배제하는 권력 논리다. 자유민주주의에서는 정부에 반대하는 사람도 동등한 시민이다.",
        "특정 계급이나 집단에만 역사적 정당성을 부여하고 그에 반대하는 사람을 정치공동체의 바깥으로 밀어내면 문제가 달라진다. 특정 세력이 진정한 인민의 뜻을 독점적으로 해석하는 순간 반대자는 경쟁자가 아니라 극복하거나 청산해야 할 대상이 된다. 이 논리는 어느 진영에서든 비자유주의적으로 나타날 수 있다.",
        "민주를 말하는 사람에게 가장 먼저 물어야 할 질문은 이것이다.",
        "당신이 말하는 국민 안에 당신을 반대하는 사람도 들어 있는가."
      ],
      "title": "자유가 빠진 민주는 민주가 아니다",
      "sourceIndices": [0],
      "overview": "자유는 다수의 폭주를 막고 민주는 자유가 소수의 특권이 되는 것을 막는다."
    },
    {
      "paragraphs": [
        "대한민국에는 선거가 있고 정권교체가 가능하다. 국회·법원·정당·언론이라는 민주주의 제도도 갖추고 있다. 민주주의의 차체와 계기판은 어느 정도 만들어졌다. 그러나 실제로 나라를 움직이는 엔진이 민주인가를 물으면 선뜻 그렇다고 답하기 어렵다. 이는 대한민국의 민주주의 제도가 없다는 사실 판단이 아니라, 그 제도와 실제 정치문화의 간극을 겨냥한 이 글의 평가다.",
        "대한민국은 권위주의 통치에서 벗어나 대통령을 직접 선출하고 평화적으로 정권을 교체할 수 있는 나라가 됐다. 이것은 결코 작은 성취가 아니다. 그러나 정치권력을 선택하는 민주화는 이루었지만 권력자를 대하는 시민의 태도와 정당의 운영 방식, 국가와 시민의 관계까지 민주적으로 바꾸지는 못했다.",
        "우리는 대통령을 직접 뽑게 됐지만 대통령을 왕처럼 대하는 습관을 버리지 못했다. 정당을 만들었지만 지도자의 궁정처럼 운영한다. 시민사회가 성장했지만 일부 시민단체가 시민을 대신하려 한다. 국민주권을 외치지만 조직되지 않은 평범한 시민보다 결집한 지지층과 단체의 목소리가 더 큰 힘을 갖는다.",
        "형식적 제도는 민주인데 실제 작동 방식은 왕정적이다. 대통령 선거는 5년마다 강력한 군주를 뽑는 행사처럼 변하고, 정당정치는 지도자와 계파를 중심으로 한 충성 경쟁이 된다. 국회의 다수 의석은 승자가 모든 것을 결정할 수 있다는 권력의 허가증으로 오해된다. 시민 참여는 조직된 지지층의 동원이 되고, 공직 인사는 능력과 책임보다 충성과 관계에 대한 보상으로 변질된다.",
        "대한민국은 민주주의라는 외형을 세우는 데는 성공했지만 민주를 사회의 일상적인 작동원리로 만드는 데까지 나아가지 못했다."
      ],
      "title": "민주의 제도는 세웠지만 민주로 움직이지 않는다",
      "overview": "선거와 정권교체의 성취를 인정하면서도 정당과 시민사회의 일상적 권력관계를 따져야 한다."
    },
    {
      "paragraphs": [
        "엄밀한 체제 분류에서 대한민국은 왕정이 아니라 민주공화국이다. 이 글이 말하는 ‘왕정적 정치’는 법적 국체가 아닌 권력관계의 비유다. 현대의 왕정적 정치는 선거와 정당, 국회라는 외형을 그대로 두면서 그 안의 관계를 전근대적으로 바꿀 수 있다.",
        "대통령이 국민의 수탁자가 아니라 모든 것을 결정하는 군주처럼 행동하고, 여당 지도부가 당원의 판단보다 대통령의 의중을 앞세우며, 국회의원이 권력자의 신하처럼 움직이는 경우를 생각해보자. 공직과 당직이 능력보다 충성에 대한 포상으로 배분되고, 대통령 비판이 정책적 반론이 아니라 배신으로 취급된다면 민주주의 안에 궁정정치가 들어선 것이다.",
        "이런 정치에는 왕관도 궁궐도 없지만 왕과 신하와 신민의 관계가 존재한다. 왕정은 제도의 이름이 아니라 권력관계의 방식으로 되살아난다.",
        "도올 김용옥 교수는 2016년 박근혜 정부를 비판하며 ‘왕정에서 민주로’를 외쳤다. 대통령을 시민의 위임을 받은 공직자가 아니라 왕가의 계승자처럼 바라보는 정치문화를 겨냥한 말이었다.",
        "2026년 8월 24일 연합뉴스 보도에 따르면 유시민 작가는 이재명 대통령이 특정 여당 대표 후보를 지지했다는 주장과 관련해 ‘왕정’이라는 말을 꺼냈다. 대통령이 당대표를 골라 당선시키려 하는 것은 공화정의 정신에 맞지 않는다는 취지의 비판이다. 이 발언이 있었다는 사실과 대통령의 구체적인 관여 정도가 입증됐는지는 구분해야 한다.",
        "서로 다른 시기와 정치세력을 향해 같은 말이 반복됐다는 것은 왕정적 정치문화가 어느 한 진영만의 문제가 아님을 보여준다. 보수의 왕정은 안보·질서·국가를 내세우고 진보의 왕정은 국민주권·개혁·민주를 내세울 수 있다. 사용하는 명분은 다르지만 한 지도자의 의지가 정당과 국회, 사법부와 시민 위에 놓인다면 본질은 같다.",
        "민주공화국의 시민은 권력자를 선택하고 감시하며 교체한다. 왕정의 신민은 권력자의 은혜를 기다리고 충성을 바치며 보호를 요청한다. 민주주의에서 시민이 지켜야 할 것은 대통령이 아니라 헌법이다. 대통령은 시민이 보호해야 할 군주가 아니라 시민의 감시를 받아야 할 공직자다."
      ],
      "title": "왕정은 왕관을 쓰고 돌아오지 않는다",
      "sourceIndices": [1,2],
      "overview": "‘왕정’은 법적 체제명이 아니라 충성·은혜·배신의 문법으로 작동하는 정치문화에 대한 비판이다."
    },
    {
      "paragraphs": [
        "더불어민주당은 공식 강령에서 민주주의와 인권, 국민주권을 선언한다. 따라서 정책적 견해가 다르다는 이유만으로 민주당을 북한식 인민민주주의 정당이라고 단정하는 것은 신중해야 한다. ‘인민민주주의’는 역사적·이념적으로 매우 무거운 개념이다.",
        "비판은 당명이 아니라 행동을 향해야 한다. 공식 강령의 선언과 현실 정치의 실천은 다를 수 있기 때문이다.",
        "민주당이 국회 다수 의석을 국민으로부터 받은 무제한적인 명령처럼 사용하지 않는지 살펴야 한다. 자신들에게 유리한 경우에만 국민주권을 내세우고 있지 않은지, 사법부와 독립기관의 판단이 마음에 들지 않는다는 이유로 제도 자체를 공격하지 않는지 물어야 한다. 자신을 비판하는 언론과 시민을 반민주 세력으로 몰아붙이지 않는지도 보아야 한다.",
        "특정 시민단체와 운동세력을 시민사회 전체의 대표처럼 인정하면서 조직되지 않은 평범한 시민의 목소리를 배제하고 있지 않은지도 점검해야 한다. 자기편의 위법과 거짓에는 침묵하면서 상대편에만 법과 정의를 요구한다면 민주라는 이름은 진영의 무기가 된다.",
        "시민이 없는 시민운동이 허구이듯 민주가 빠진 민주당도 이름과 실체가 어긋난다. 민주라는 간판을 달고 자유와 법치, 권력분립과 다원성을 훼손한다면 그 이름은 더 이상 민주적 실천을 보증하지 못한다. 그러나 이를 판단하려면 법안과 결정, 발언과 절차를 구체적으로 확인해야 한다. 당명만으로 면죄부를 줄 수도, 혐의를 확정할 수도 없다.",
        "그러나 민주당이 민주를 왜곡한다고 해서 보수가 민주를 외면해서는 안 된다. 민주당에 대한 반감이 민주라는 가치에 대한 혐오로 변하는 순간 보수는 자신이 지켜야 할 헌법질서까지 상대에게 넘겨주게 된다."
      ],
      "title": "민주당에 민주가 있는가",
      "sourceIndices": [4],
      "overview": "당명과 강령은 면허가 아니다. 실제 행동이 자유·법치·다원성에 맞는지 검증해야 한다."
    },
    {
      "paragraphs": [
        "오늘의 보수 일부가 민주라는 말을 불편해하는 이유에 대해 나는 다섯 가지 해석을 제안한다. 모든 보수 지지자의 생각을 조사한 결과가 아니라 정치언어를 둘러싼 경향에 대한 분석이다. 첫째는 ‘민주’가 특정 정당과 진보진영의 정치적 브랜드처럼 인식된다는 점이다. 민주당에 대한 반감이 민주라는 가치에 대한 거리두기로 번질 수 있다.",
        "두 번째는 민주화의 역사가 진보진영만의 역사처럼 서술됐기 때문이다. 보수는 산업화와 안보를 담당했고 진보는 민주화를 이끌었다는 이분법이 굳어졌다. 보수는 민주주의 발전에 기여한 자신의 역사와 철학을 충분히 발굴하지 못했고, 권위주의 시대에서 무엇을 계승하고 무엇과 단절할 것인지도 분명하게 정리하지 못했다.",
        "세 번째는 민주주의의 왜곡을 민주주의 자체의 문제로 착각했기 때문이다. 다수 의석의 횡포와 포퓰리즘, 거리의 압력정치와 선동적 여론을 경험하면서 일부 보수는 민주를 머릿수의 정치로 여기게 됐다. 그러나 다수의 폭주는 민주주의의 본질이 아니라 민주주의가 병든 모습이다. 병든 민주가 싫다고 민주 자체를 버리면 권위주의만 남는다.",
        "네 번째는 보수가 시민보다 국가와 지도자를 앞세워온 측면이 있기 때문이다. 안보·질서·성장·통치능력을 강조하는 동안 시민의 참여와 지방자치, 자율적 결사와 권력 감시는 부차적인 것으로 취급됐다. 보수의 중심에 있어야 할 자유롭고 책임 있는 개인은 약해지고, 국가를 운영하는 엘리트와 강한 지도자의 역할만 부각됐다.",
        "다섯 번째는 자유를 민주와 분리했기 때문이다. 보수는 자유를 시장과 경제활동의 언어로 좁혔고, 진보는 민주를 참여와 평등의 언어로 독점했다. 그 결과 보수의 자유는 강자와 기업만을 위한 자유처럼 비쳤고, 진보의 민주는 집단의 의지를 앞세우는 정치로 기울었다.",
        "보수는 민주를 진보에 빼앗긴 것이 아니다. 스스로 민주를 자신의 철학으로 설명하지 않으면서 그 해석권을 넘겨주었다."
      ],
      "title": "오늘의 보수는 왜 민주를 멀리하게 됐는가",
      "overview": "상대 정당에 대한 반감과 다수의 횡포에 대한 불신이 민주라는 가치 자체의 포기로 이어져서는 안 된다."
    },
    {
      "paragraphs": [
        "한국의 진보진영은 오랫동안 학생운동, 노동조합, 시민단체, 지역조직과 사회운동을 통해 사람을 발굴하고 훈련해 왔다. 한 사람이 선거에 나설 때 그 뒤에는 인적 네트워크와 조직, 공동의 언어와 정책 의제가 따라붙는다. 누구를 지도자로 세우든 자신들의 이해와 노선을 대변할 사람을 조직이 찾아내는 구조다. 물론 이는 두 진영 전체에 예외 없이 적용되는 법칙이 아니다. 진보에도 개인 중심 정치가 있고, 보수에도 축적된 조직과 인재 육성의 경험이 있다. 여기서는 보수의 구원자 정치와 대비해 드러나는 조직적 경향을 살피려는 것이다.",
        "이 구조에는 심각한 위험도 있다. 폐쇄적인 운동권 인맥이 권력 카르텔이 될 수 있고, 특정 시민단체와 노동조합의 이해가 시민 전체의 뜻으로 포장될 수 있다. 조직에 충성하는 사람이 시민을 대표하는 정치인보다 우선될 수도 있다. 진보의 문제는 조직이 없는 것이 아니라 조직이 시민을 대체할 수 있다는 데 있다.",
        "반면 보수는 사람을 길러내는 조직보다 위기를 단번에 해결할 영웅을 기다리는 경향이 강하다. 선거가 다가오면 “누가 우리를 구해줄 것인가”를 묻는다. 정당의 철학과 정책, 후보의 정치 경험과 검증된 능력보다 상대 진영을 한 번에 꺾을 강력한 인물을 찾는다.",
        "기존 정치권과 거리가 멀수록 신선하다고 평가하고, 정치 경험이 부족한 것을 오히려 장점으로 받아들인다. 언론과 여론조사에서 이름이 급부상하면 그 사람에게 보수 전체의 운명을 맡긴다. 후보를 선택하는 것이 아니라 구원자를 기다리는 것이다.",
        "시민은 지도자를 선택하지만 신민은 자신을 구원할 왕을 기다린다.",
        "정치 경험이 없다는 것은 기존 정치의 잘못에서 자유롭다는 뜻일 수 있다. 그러나 동시에 민주정치를 운영해본 경험도 없다는 뜻이다. 타협하고 설득하는 능력, 당내 반대를 견디는 태도, 의회와 사법부를 존중하는 습관은 하루아침에 만들어지지 않는다.",
        "보수는 정당 안에서 오랫동안 정책을 만들고 선거와 의정을 경험하며 실패에 책임져온 정치인을 낡은 인물로 취급해 왔다. 반면 정치철학과 통치능력이 충분히 검증되지 않은 유명인을 ‘새로운 얼굴’과 ‘강한 리더십’이라는 이유로 정상에 올렸다.",
        "이 구조에서는 같은 순환이 반복된다. 기존 정치에 실망하고, 정치권 밖의 인물을 발견하고, 검증되지 않은 인물에게 진영 전체의 희망을 건다. 선거 승리를 위해 내부의 비판을 중단하고, 집권하면 지도자를 중심으로 궁정정치가 형성된다. 실패하면 모든 책임을 한 사람에게 돌린 뒤 다시 더 강한 새로운 왕을 찾는다.",
        "보수의 인물난은 사람이 없어서만 생긴 것이 아니다. 왕을 찾느라 정치인을 키우지 않았기 때문에 생겼다."
      ],
      "title": "진보는 조직을 만들고 보수는 왕을 기다린다",
      "overview": "조직이 시민을 대체하는 위험과 영웅에게 검증을 생략하는 위험을 함께 보아야 한다."
    },
    {
      "paragraphs": [
        "‘윤어게인’은 지도자의 실패 이후에도 정치가 그 인물의 복귀 요구에 묶이는 극단적인 징후라고 이 글은 평가한다. 2025년 4월 8일 YTN은 윤석열 전 대통령 파면 이후 그의 재등장을 뜻하는 피켓과 일부 지지자의 헌법재판소 결정 불복 움직임을 보도했다. 구호의 존재는 확인되는 사실이며, 그것을 왕 찾기 정치로 해석하는 것은 이 글의 판단이다.",
        "물론 집회에 참여한 사람들의 동기를 하나로 단정할 수는 없다. 탄핵 절차에 대한 의문, 민주당에 대한 반감, 언론과 사법기관에 대한 불신, 안보와 국가의 미래에 대한 불안이 함께 작용했을 수 있다. 참여자 모두를 개인숭배자로 낙인찍는 것은 옳지 않다.",
        "그러나 윤석열이라는 한 정치인의 복귀를 자유대한민국의 회복과 동일시하는 정치적 구조는 분명히 비판해야 한다. 대통령과 대한민국은 같은 존재가 아니다. 자유대한민국은 어느 정치인이 만들거나 소유하는 나라가 아니다.",
        "왕 찾기 정치의 마지막 단계는 왕의 실패를 인정하지 않는 것이다. 정치적 판단의 실패는 음모가 되고, 책임을 묻는 절차는 박해가 되며, 몰락한 지도자는 순교자로 바뀐다. 지도자를 비판하는 사람은 자유대한민국을 배신한 사람이 된다.",
        "정치는 검증의 영역에서 신앙의 영역으로 옮겨간다.",
        "윤석열 전 대통령의 잘못을 비판하는 것과 민주당의 권력 남용을 비판하는 것은 얼마든지 양립할 수 있다. 어느 한쪽을 비판하기 위해 반드시 다른 한쪽에 충성해야 한다는 생각 자체가 진영정치가 만든 감옥이다. 시민에게는 두 권력을 동시에 비판할 자유가 있다.",
        "윤어게인은 보수를 되살리는 운동처럼 보이지만 오히려 보수의 갱신을 지연시킨다. 실패의 원인을 성찰하지 못하게 하고 새로운 지도자와 정책이 성장할 공간을 막기 때문이다. 보수의 미래는 실패한 왕을 다시 세우는 데 있지 않다. 누구도 왕이 될 수 없는 정당과 정치질서를 만드는 데 있다."
      ],
      "title": "‘윤어게인’, 왕 찾기 정치의 극단",
      "sourceIndices": [3],
      "overview": "참가자의 동기는 다양하지만 한 정치인의 복귀와 나라의 회복을 동일시하는 논리는 비판해야 한다."
    },
    {
      "paragraphs": [
        "진정한 보수라면 민주를 정치철학의 근본에 놓아야 한다.",
        "보수가 지켜야 할 것은 특정 정권과 지도자, 기득권과 과거의 권위가 아니다. 보수가 지켜야 할 것은 시민이 주권자로 살아갈 수 있도록 오랜 시간 형성된 헌법과 제도, 법치와 권력분립, 사법부 독립과 언론의 자유, 복수정당제와 지방자치다.",
        "이 모든 것이 민주주의의 토대다. 민주주의가 무너지면 보수가 보수해야 할 제도도 사라진다.",
        "씨앗이 지향하는 입헌적 보수주의는 인간과 권력의 불완전함을 인정한다. 아무리 선한 목적을 내세우는 권력도 잘못될 수 있고, 유능한 지도자도 타락할 수 있다. 그래서 권력을 나누고 법으로 제한하며 축적된 제도와 규범을 통해 폭주를 막는다. 역사상의 모든 보수주의가 민주적이었다는 뜻이 아니라, 오늘의 보수가 선택하고 지켜야 할 원칙을 말하는 것이다.",
        "보수가 민주를 근본에 놓는다는 것은 다수결을 숭배한다는 뜻이 아니다. 다수의 권력까지 제한하는 민주주의를 지키겠다는 뜻이다. 시민 한 사람의 자유를 보호하고, 권력을 분산하며, 반대자를 동등한 시민으로 인정하고, 자신이 지지하는 세력의 패배와 평화적 정권교체까지 받아들이는 정치다.",
        "진정한 보수는 민주를 두려워하지 않는다. 권력의 오만을 경계하는 사람이야말로 민주를 가장 적극적으로 말해야 한다."
      ],
      "title": "민주를 잃은 보수는 무엇을 보수하는가",
      "overview": "입헌적 보수가 지켜야 할 것은 특정 지도자가 아니라 시민의 자유와 권력을 제한하는 제도다."
    },
    {
      "paragraphs": [
        "민주를 되찾는다는 것은 민주라는 단어를 진보의 소유에서 보수의 소유로 옮기는 일이 아니다. 민주를 또 다른 진영의 깃발로 만드는 것도 아니다.",
        "“우리가 진짜 민주이고 상대는 가짜 민주다”라고 선언하는 것만으로 민주를 되찾을 수는 없다. 그렇게 한다면 우리도 민주를 진영의 도구로 사용하는 잘못을 반복하게 된다. 우리 편의 권력에도 상대편과 똑같은 기준을 적용할 때 비로소 진짜 민주를 말할 수 있다.",
        "우리 편 대통령의 권력도 제한해야 한다. 우리 편 정당의 다수 의석도 견제해야 한다. 우리와 생각이 다른 언론의 자유도 지켜야 한다. 정치적으로 반대하는 시민에게도 동일한 권리와 존엄을 인정해야 한다. 법은 내 편과 상대편에게 똑같이 적용돼야 한다.",
        "민주의 진정성은 다음 질문에서 드러난다.",
        "반대자의 자유를 인정하는가. 다수의 권력에도 한계를 두는가. 법을 내 편과 상대편에게 똑같이 적용하는가. 사법부와 언론의 독립을 존중하는가. 자신의 패배와 평화적인 정권교체를 받아들이는가.",
        "민주는 지도자를 따르는 충성이 아니다. 시민이 지도자를 선택하고 비판하며 교체할 수 있는 권리다. 민주는 광장에 더 많은 사람을 모으는 능력도 아니다. 광장에 나오지 않은 시민과 반대편 광장에 선 시민의 권리까지 함께 지키는 질서다.",
        "민주는 특정 시민단체가 시민을 대신해 권력을 행사하는 것도 아니다. 시민단체는 시민의 목소리를 연결할 수 있지만 시민을 대체할 수는 없다. 시민이 없는 시민운동이 허구이듯, 자유로운 개인이 사라진 민주주의도 허구다."
      ],
      "title": "민주를 되찾는다는 것",
      "overview": "‘우리가 진짜 민주’라는 선언보다 우리 편 권력에도 동일한 기준을 적용하는 실천이 먼저다."
    },
    {
      "paragraphs": [
        "대한민국은 대통령을 국민이 직접 뽑는 민주화를 이루었다. 이제 필요한 것은 시민화다.",
        "민주화가 국민에게 투표권과 정치적 선택권을 돌려주는 과정이었다면, 시민화는 국민 한 사람 한 사람이 국가와 정당, 지도자와 시민단체에 종속되지 않는 주권자로 성장하는 과정이다. 민주화가 권위주의적 왕을 끌어내리는 일이었다면 시민화는 우리 안에 남아 있는 왕과 신민의 관계를 지우는 일이다.",
        "민주가 나라의 엔진이라는 것은 모든 정책을 국민투표로 결정한다는 뜻이 아니다. 시민 한 사람 한 사람을 권력의 주인으로 대하는 원리가 국가와 정당, 시민사회의 일상적인 작동 방식이 된다는 뜻이다.",
        "대통령은 나라의 주인이 아니라 일정 기간 권한을 위탁받은 공직자여야 한다. 국회의원은 대통령과 당 대표의 부하가 아니라 독립된 헌법기관이어야 한다. 야당과 반대자는 국정의 방해자가 아니라 민주주의의 필수 구성원이어야 한다. 시민단체는 시민을 대신하는 권력이 아니라 시민의 자율적인 활동을 돕는 매개체여야 한다.",
        "무엇보다 시민은 국가의 보호와 혜택을 기다리는 신민이 아니라 스스로 판단하고 책임지는 주권자가 되어야 한다.",
        "씨앗의 소리는 민주를 이렇게 정의한다.",
        "민주는 시민이 권력의 주인이 되는 질서다. 그러나 그 시민은 하나의 집단으로 뭉뚱그려진 국민이 아니라, 서로 다르게 생각하고 말하며 선택할 자유를 가진 한 사람 한 사람이다.",
        "민주는 내 편이 권력을 잡는 것이 아니다. 나와 생각이 다른 사람도 자유롭게 말하고 경쟁하며, 다음 선거에서 권력을 바꿀 수 있도록 지켜주는 제도다. 민주주의자는 권력자를 숭배하는 사람이 아니라 어떤 권력자도 시민 위에 서지 못하게 막는 사람이다."
      ],
      "title": "민주화 다음은 시민화다",
      "overview": "투표권의 확대 다음에는 국가·정당·조직에 종속되지 않고 판단하고 책임지는 시민의 성장이 필요하다."
    },
    {
      "paragraphs": [
        "민주를 특정 정당의 이름으로 남겨두어서는 안 된다. 민주를 권력자의 방패로 사용하게 해서도 안 된다. 민주를 말하면서 권력에 줄을 서고, 권력의 독선을 옹호하며, 반대자를 시민의 자리에서 밀어내는 사람들에게 민주의 이름을 맡길 수 없다.",
        "동시에 민주당에 대한 반감 때문에 민주라는 말 자체를 외면하는 보수도 달라져야 한다. 민주를 포기한 보수는 지켜야 할 헌법질서와 시민의 자유까지 함께 포기하게 된다. 진정한 보수라면 민주를 자신의 근본에 놓아야 한다.",
        "민주는 진보의 소유물이 아니다. 보수의 소유물도 아니다. 민주주의는 권력을 가진 사람의 명분이 아니라 권력으로부터 시민을 지키는 공동의 질서다.",
        "이제 민주를 되찾아야 한다.",
        "그러나 한 진영에서 빼앗아 다른 진영에 넘겨주어서는 안 된다. 민주를 정당과 지도자, 운동조직의 깃발 아래 두지 말고 시민 한 사람 한 사람에게 돌려주어야 한다.",
        "자유가 빠진 민주는 민주가 아니다. 시민이 빠진 민주도 민주가 아니다. 반대자의 권리를 지키지 않는 민주 역시 민주가 아니다.",
        "민주는 권력자의 깃발이 아니라 시민의 권리다. 민주는 지도자를 향한 충성이 아니라 권력을 의심할 수 있는 자유다. 민주는 다수의 힘이 아니라 다수의 힘까지 제한하는 질서다.",
        "좋은 왕을 찾는 나라가 아니라 어떤 지도자도 왕이 될 수 없는 나라를 만드는 것, 그것이 대한민국 민주주의가 가야 할 다음 길이다.",
        "그것이 우리가 되찾아야 할 민주다."
      ],
      "title": "민주를 시민에게 돌려주자",
      "overview": "좋은 왕을 기다리는 나라가 아니라 어떤 지도자도 왕이 될 수 없는 나라를 만들어야 한다."
    }
  ],
};

const democracyDeepEn: SeedLanguageArticle = {
  ...democracyDeepKo,
  term: "Democracy · Deep Read",
  title: "Democracy is a citizen’s right, not a ruler’s banner",
  subtitle: "Recovering democracy from court politics and the search for a savior after formal democratization",
  summary: "People use the same word, democracy, while imagining different political orders. This essay moves from contested language to liberty, majority rule, court-like political culture, conservative savior politics and ‘Yoon Again’, then proposes civic formation as the next task. It is SEED VOICE political commentary grounded in public sources and the author’s recollection.",
  keyPoints: [
    "Elections and peaceful transfers of power are real achievements. Institutional democratization does not automatically democratize the relationship between leaders and citizens.",
    "Organizations claiming to replace citizens and movements waiting for a savior both weaken civic autonomy.",
    "Liberty limits majority domination; democracy prevents liberty from hardening into privilege.",
    "Reclaiming democracy means applying the same standards to our own side and protecting opponents’ rights.",
  ],
  heroImage: { ...democracyDeepKo.heroImage, alt: "Citizens debate around separate tables within an open architectural structure symbolizing checks and balances", caption: "The democratic public is not a collective reduced to one voice. It consists of individuals with equal rights and different judgments.", credit: "SEED VOICE AI-generated conceptual illustration" },
  inlineImage: { ...democracyDeepKo.inlineImage!, alt: "Residents examine documents and question a public official at equal table height in a neighborhood library", caption: "Civic formation is not learning an approved political answer. It is the everyday habit of questioning even leaders we chose and examining their answers.", credit: "SEED VOICE AI-generated conceptual illustration" },
  relatedArticle: { slug: "democracy-not-a-king", label: "Read the 5-minute summary" },
  sources: sourcesEn,
  chart: {
    title: "What follows a claim to speak for ‘the people’?",
    headers: ["Question", "An exclusionary claim to democracy", "The liberal-democratic test"],
    rows: [
      ["Who counts?", "Only a favored group is the true people", "All citizens, including opponents"],
      ["Majority limits", "The collective cause overrides rights", "Even majorities face constitutional limits"],
      ["Opponents", "People to overcome or exclude", "Competitors with equal rights"],
      ["Institutions", "Obstacles to the movement’s goals", "Independent checks on arbitrary power"],
      ["Defeat", "A denial of our inherent legitimacy", "A real possibility of replacement"],
    ],
    note: "SEED VOICE conceptual comparison. It neither summarizes every historical form of people’s democracy nor classifies a particular party as such a regime. It offers tests for illiberal monopolization of power.",
    afterSection: 3,
  },
  sections: [
    {
      "title": "The same word can describe different political orders",
      "overview": "Majority rule, participation and equality imply different orders depending on what powers they authorize.",
      "paragraphs": [
        "We all speak of democracy. We do not necessarily mean the same democracy.",
        "For some, democracy means elections and majority voting. For others, it means citizens participating directly in a public square. Some emphasize social and economic equality; others, a constitutional order protecting individual liberty. Still others treat their own camp’s decisions as democratic and their opponents’ decisions as anti-democratic.",
        "The most dangerous political words may therefore be not those everyone rejects, but those everyone assumes they agree on. Shared vocabulary creates the impression of shared meaning while people imagine very different relationships between citizens and power.",
        "Democracy is one of those words."
      ]
    },
    {
      "title": "A shared word can conceal different destinations",
      "overview": "A personal conversation about transformation illustrates why the meaning of political language cannot be taken for granted.",
      "paragraphs": [
        "Years ago, I discussed society’s future with a human-rights activist. I said that South Korean society needed byeonhyeok—transformation. I meant more than a modest adjustment: a major reform of outdated practices and injustice, expanding citizens’ liberty and rights within Korea’s free democratic constitutional order.",
        "The activist asked whether I understood what real transformation meant and suggested that my understanding was naive. As the conversation continued, I understood the activist to mean a change in the character of the state toward something closer to North Korea’s system, rather than reform within the existing constitutional order. This is my recollection and interpretation of that conversation, not an independently verified account of the activist’s political program.",
        "We used the same word without describing the same future.",
        "The encounter brought to mind what is often called an NL, or National Liberation, way of thinking. But one conversation cannot establish the views of the entire NL current, still less those of any contemporary party. The relevant point is not to assign a definitive ideological pedigree. It is that major reform and replacement of a political order can be concealed beneath one shared word.",
        "Using transformation does not by itself identify someone as an NL adherent or supporter of a North Korean-style system. We must ask what the proposed change would alter, who would direct it, and what political order would result.",
        "Would it expand liberty within Korea’s constitutional order or replace that order? Would all people retain equal civic standing, or would only certain classes and groups count as the authentic people?",
        "Political language carries more than dictionary definitions. Everyday meanings can coexist with partisan meanings and more specialized meanings understood within movements. Transformation, the people, autonomy, liberation, unification, peace, the public interest and civil society can all carry such layers. The agreeable surface does not settle what powers a proposal would authorize.",
        "The same caution applies to democracy."
      ]
    },
    {
      "title": "Saying ‘the people rule’ is only the beginning",
      "overview": "Ask who counts, how decisions are made, which rights remain protected and how rulers can be replaced.",
      "paragraphs": [
        "Democracy means rule by the people. That immediately requires another question: who are the people?",
        "Does the category include those who disagree with me? Are opponents of the government equal citizens? Are minorities and opposition voters part of the sovereign public, or does authentic citizenship belong only to supporters of a preferred movement?",
        "Collective popular sovereignty and each person’s individual freedom are related but not identical. A claim to express the will of the whole can be used to suppress the liberty of a person. That is why regimes invoking democracy and the people can nevertheless practice dictatorship.",
        "If majority rule were sufficient, electoral winners could suppress minorities, subordinate the courts and media, and change rules solely for their own advantage. But a voting rule is a method of reaching decisions, not a blank check.",
        "Participation deserves the same scrutiny. Citizens’ assemblies, deliberative forums, town halls and civic organizations can strengthen democracy. Yet when a trained, organized minority claims to stand in for everyone, participation can create another concentration of power. Who authorized these representatives, and to whom do they answer? Without those questions, participation may place a new authority above representative institutions.",
        "Social and economic equality also affects democratic life. A formal vote can feel hollow without decent living conditions or a practical opportunity to participate. Yet an equality objective does not automatically justify excessive interference with liberty, property or choice.",
        "Calling something democratic is therefore not a complete argument. Four questions must follow.",
        "Who is recognized as a citizen? By what procedure is a decision made? Which rights may not be violated even by a majority? How can those entrusted with power be checked and replaced?"
      ]
    },
    {
      "title": "Democracy needs liberty, and liberty needs democracy",
      "sourceIndices": [0],
      "overview": "Liberty restrains majority domination; democracy prevents liberty from becoming a privilege for the few.",
      "paragraphs": [
        "Article 1 of Korea’s Constitution declares the country a democratic republic and locates sovereignty in the people. Article 4 refers to a free democratic basic order in its provision on peaceful unification. Liberty is not a decorative adjective attached to democracy: it marks a boundary that democratic power must respect.",
        "In a liberal democracy, majorities can decide many matters but not everything. Elected authority cannot arbitrarily violate freedom of conscience or expression. A parliamentary majority must not subordinate the judiciary to partisan purposes. A popular president is not above the law.",
        "This essay uses individual autonomy, diversity of political views, basic rights, popular sovereignty, divided powers and genuine political competition as its democratic criteria. Democracy must enable people who disagree to live together, not merely establish whose numbers are larger.",
        "Democracy without liberty can become majority domination. Liberty without democracy can become privilege if a small group enjoys freedom while the wider public is excluded from political decisions.",
        "These values need not compete. Liberty prevents collective power from becoming absolute; democracy prevents freedom from being reserved for a favored few. A liberal-democratic order holds them together so that each checks and strengthens the other.",
        "One central issue in distinguishing historical people’s democracies from liberal democracy is who qualifies as a political agent and who claims authority to interpret that agent’s wishes. The word people does not itself signify dictatorship. The danger examined here is the claim that one political force alone expresses the authentic people and may therefore exclude its opponents. In a liberal democracy, government critics remain equal citizens.",
        "If historical legitimacy is assigned exclusively to a favored class or group, dissenters can be pushed outside the political community. Once one force monopolizes the meaning of the people’s will, opponents cease to be competitors and become obstacles to overcome or remove. That illiberal logic can appear in any camp.",
        "The first question to put to someone claiming democracy is therefore straightforward.",
        "Do the people you speak for include the people who oppose you?"
      ]
    },
    {
      "title": "Democratic institutions do not automatically produce democratic relationships",
      "overview": "Respect electoral achievements while examining everyday power inside parties and civil society.",
      "paragraphs": [
        "Korea has elections, the possibility of changes in government, a legislature, courts, parties and a press. Much of democracy’s institutional machinery exists. Yet it remains necessary to ask what actually drives political behavior. This is an assessment of the gap between institutions and political culture, not a claim that democratic institutions are absent.",
        "The transition away from authoritarian rule, direct presidential elections and peaceful transfers of power are substantial achievements. But democratizing the selection of rulers does not automatically transform attitudes toward rulers, the operation of parties, or the relationship between government and citizens.",
        "We can elect a president while retaining the habit of treating the officeholder as a monarch. We can establish parties that function like personal courts. Civil society can grow while some organizations claim to replace the citizens they should connect. Organized constituencies can command attention that unaffiliated people struggle to obtain.",
        "The danger is a democratic form with a court-like mode of operation: presidential elections understood as periodic choices of an all-powerful ruler; party competition reduced to personal loyalty; a legislative majority mistaken for permission to do anything; participation reduced to mobilizing supporters; and appointments used to reward allegiance rather than ability and responsibility.",
        "Korea’s task is not merely to retain democratic institutions, but to make democracy an everyday principle of how those institutions work."
      ]
    },
    {
      "title": "Court politics does not need a crown",
      "sourceIndices": [1,2],
      "overview": "Monarchy here is a political metaphor for loyalty, favors and betrayal—not a classification of Korea’s constitutional system.",
      "paragraphs": [
        "Strictly speaking, South Korea is a democratic republic, not a monarchy. The phrase monarchical politics in this essay describes a relationship with power rather than a legal form of state. Premodern relationships can reappear within elections, parties and legislatures.",
        "Consider a president behaving as a sovereign master rather than a public trustee, party leaders prioritizing presidential wishes over members’ judgments, and legislators acting as personal retainers. If appointments reward loyalty and criticism becomes betrayal, court politics has entered the democratic structure.",
        "No crown or palace is necessary. Relationships among ruler, retainer and subject are enough. Monarchy returns as a way of exercising and responding to power.",
        "In 2016, Do-ol Kim Yong-ok invoked ‘from monarchy to democracy’ while criticizing the Park Geun-hye government. His intervention challenged a political culture that could treat the presidency as an inherited royal position rather than a public office.",
        "On August 24, 2026, Yonhap reported Rhyu Si-min invoking monarchy in connection with claims that President Lee Jae-myung supported a particular candidate for ruling-party leader. Rhyu argued that a president choosing the party leader and seeking that candidate’s victory conflicted with republican principles. The fact that he made this criticism is distinct from independent proof of the president’s precise involvement.",
        "The recurrence of the metaphor across different governments suggests a question that crosses partisan lines. Court-like politics may invoke security and order on the right, or popular sovereignty and reform on the left. The banners differ; the problem is the same whenever one leader’s will is placed above institutions and citizens.",
        "Citizens choose, scrutinize and replace officeholders. Subjects seek protection, wait for favors and offer loyalty. What citizens must protect is the constitutional order, not a president as a person. The president is a public official to be scrutinized, not a monarch requiring personal devotion."
      ]
    },
    {
      "title": "A democratic party name is not proof of democratic conduct",
      "sourceIndices": [4],
      "overview": "Test actions against liberty, law and pluralism; neither a name nor a platform grants immunity.",
      "paragraphs": [
        "The Democratic Party of Korea formally affirms democracy, human rights and popular sovereignty. Disagreement with its policies is not sufficient grounds to call it a North Korean-style people’s-democracy party. That classification carries substantial historical and ideological claims.",
        "Criticism should address conduct, not rely on a party name. A platform’s declarations and a party’s actual behavior can differ.",
        "Does the party treat a legislative majority as an unlimited popular command? Does it invoke popular sovereignty only when convenient? When courts or independent bodies issue unwelcome judgments, does it contest them through accountable procedures or seek to subordinate the institutions themselves? Does it treat critical journalists and citizens as illegitimate participants?",
        "The same questions apply when particular advocacy groups are treated as if they represented civil society as a whole, leaving unaffiliated citizens unheard. If a camp tolerates dishonesty and wrongdoing among its own members while demanding law and justice only from opponents, democracy becomes a partisan weapon.",
        "Just as a civic movement without citizens contradicts its name, a Democratic Party without democratic practice would separate label from substance. But establishing that criticism requires examination of actual bills, decisions, statements and procedures. A name can neither confer immunity nor establish guilt.",
        "Conservatives should not respond to perceived misuse of democracy by rejecting the value itself. When hostility toward the Democratic Party becomes hostility toward democracy, they surrender part of the constitutional order they should defend."
      ]
    },
    {
      "title": "Why have some conservatives grown distant from democracy as a word?",
      "overview": "Dislike of a rival party and distrust of majority excess must not become rejection of democracy itself.",
      "paragraphs": [
        "I propose five interpretations of that distance. They are an analysis of political language, not findings from a survey of every conservative voter. First, democracy can sound like a progressive brand or the rival party’s proper name. Dislike of that party may spill into reluctance to use the word.",
        "Second, a simplified historical narrative assigns industrialization and security to conservatives and democratization to progressives. Conservatives can fail to explain their own contributions to democratic development, or to clarify what they reject in the authoritarian past. This leaves constitutional democracy sounding like someone else’s achievement.",
        "Third, abuses of democratic forms can be mistaken for democracy itself. Legislative domination, populism and coercive mobilization may lead people to associate democracy with the rule of numbers. Yet majority overreach is a failure to constrain power, not a reason to abandon democratic citizenship.",
        "Fourth, an emphasis on state capacity and strong leadership can crowd out civic autonomy. Security, order and growth matter, but so do participation, local self-government, voluntary association and scrutiny of power. A politics centered on governing elites can leave the free and responsible individual, supposedly central to conservatism, with too little practical agency.",
        "Fifth, freedom and democracy can be separated into rival vocabularies: conservatives speak mainly of markets and enterprise, while progressives claim participation and equality. Freedom then risks sounding like the interest of the strong, while democracy risks becoming the will of a collective.",
        "On this reading, conservatives have not simply had democracy stolen from them. By failing to explain it within their own principles, they have yielded influence over its meaning."
      ]
    },
    {
      "title": "Organizations can replace citizens; saviors can replace scrutiny",
      "overview": "Compare the risks of closed organizational power and the search for an untested political rescuer.",
      "paragraphs": [
        "Korean progressive politics has drawn on student movements, unions, civic groups, local networks and social movements to recruit and train people. Candidates can arrive with relationships, shared language and policy agendas behind them. This is not a universal law: progressives also practice personalistic politics, and conservatives also possess established organizations and traditions of recruitment. The comparison highlights one organizational tendency against the conservative search for a rescuer.",
        "Organizational strength brings dangers of its own. Closed networks can become patronage systems. The interests of particular unions or civic groups can be presented as those of the entire public. Loyalty to an organization can count for more than accountability to citizens. The problem is then not too little organization but an organization claiming to replace the public.",
        "In conservative politics, by contrast, a recurring temptation is to seek a figure who will resolve a crisis at once. As an election approaches, the question becomes who can save us, rather than which party principles, policies and demonstrated abilities can earn a defensible mandate.",
        "Distance from established politics is treated as freshness. Limited political experience becomes an advantage in itself. When a public figure rises in coverage or polling, supporters may invest the camp’s entire future in that person before sufficient scrutiny has taken place.",
        "Citizens choose leaders. Subjects wait for a king who will save them.",
        "Inexperience may mean freedom from some established political failings. It also means limited experience of democratic government. Persuasion, compromise, tolerating internal disagreement and respecting legislative and judicial independence are not skills that appear automatically after electoral success.",
        "When political experience is dismissed as staleness while public fame is taken as evidence of governing ability, parties weaken their own incentives to cultivate leaders. Work on policy, local representation and responsibility for mistakes receives less attention than novelty and the promise of strength.",
        "The cycle can then repeat: disappointment with existing politicians, discovery of an outsider, concentrated hope, suspended internal criticism, personalistic government and failure. Responsibility is finally placed on one individual, and the search begins for another supposedly stronger rescuer.",
        "A shortage of conservative leaders may therefore reflect more than a shortage of talented people. Looking for a king can crowd out the patient work of developing politicians."
      ]
    },
    {
      "title": "‘Yoon Again’ is an extreme sign of the search for a king",
      "sourceIndices": [3],
      "overview": "Supporters have different motives, but one politician’s restoration must not be equated with the country’s recovery.",
      "paragraphs": [
        "This essay reads ‘Yoon Again’ as an extreme sign of politics remaining attached to a leader’s restoration after failure. On April 8, 2025, YTN reported placards suggesting former president Yoon Suk Yeol’s political return following his removal, together with some supporters’ refusal to accept the Constitutional Court’s decision. The slogan’s existence is a reported fact; interpreting it as savior politics is this essay’s judgment.",
        "Participants cannot be reduced to a single motive. Questions about procedure, hostility toward the Democratic Party, distrust of media or judicial institutions, and concern about security or the country’s future may have mattered differently to different people. Branding every participant a personality worshipper would be unfair.",
        "The political logic still deserves scrutiny when Yoon’s return is equated with the recovery of a free Korea. A president is not the country. A constitutional republic is not something any politician owns.",
        "The final danger of savior politics is an inability to acknowledge the leader’s failure. Every adverse finding becomes a conspiracy, accountability becomes persecution, and criticism becomes betrayal. These are warning signs of a political structure, not conclusions about every person who attends a rally.",
        "At that point, political judgment risks becoming an act of faith rather than an examination of evidence.",
        "Criticizing Yoon’s conduct and criticizing abuses by the Democratic Party are entirely compatible. Citizens do not have to swear allegiance to one power in order to challenge another. They are entitled to judge both.",
        "Tying conservative renewal to one person’s return can postpone reflection on failure and restrict room for new leaders and policies. The alternative is not to find another object of devotion. It is to build a party and a political order in which no person can become king."
      ]
    },
    {
      "title": "What does conservatism preserve if it abandons democracy?",
      "overview": "Constitutional conservatism should defend citizens’ liberty and institutions that limit power—not a particular ruler.",
      "paragraphs": [
        "A conservatism worthy of defending constitutional government should place democracy at its foundation.",
        "Its object of preservation should not be one administration, a leader, entrenched privilege or past authority. It should preserve the institutions through which citizens remain sovereign: law, divided powers, independent courts, a free press, political competition and local self-government.",
        "These are foundations of democratic life. Undermining them also destroys institutions that an accountable conservatism should conserve.",
        "The constitutional conservatism SEED VOICE advocates recognizes human and political fallibility. Power can go wrong despite good intentions; capable leaders can abuse authority. Hence power must be divided, legally bounded and restrained by institutional experience. This does not claim that every historical conservatism was democratic. It states the principles contemporary conservatives should choose to defend.",
        "Putting democracy at the center does not mean worshipping majority rule. It means limiting majority power as well: protecting individual liberty, distributing authority, recognizing opponents as equal citizens and accepting that one’s own side may lose office through a peaceful transfer.",
        "A politics alert to arrogance and concentrated power has every reason to speak of democracy affirmatively rather than fear the word."
      ]
    },
    {
      "title": "Reclaiming democracy means applying the test to our own side",
      "overview": "Calling ourselves the real democrats matters less than holding allies to the same standards as opponents.",
      "paragraphs": [
        "Reclaiming democracy does not mean transferring ownership of a word from progressives to conservatives. It does not mean making another partisan banner.",
        "Declaring that we are genuine democrats and our opponents are impostors proves nothing. That would reproduce the very monopolization being criticized. The claim becomes credible only when the same standards apply to our own side.",
        "Our president’s authority must be limited. Our party’s legislative majority must face scrutiny. Media we dislike must retain their freedom. Political opponents must have equal rights and dignity. The law must apply without partisan exceptions.",
        "Democratic commitment becomes visible in practical questions.",
        "Do we respect an opponent’s liberty? Do we accept limits on majority power? Do we apply the law consistently? Do we respect judicial and journalistic independence? Do we accept defeat and the possibility of peaceful replacement?",
        "Democracy is not loyalty to a leader. It is the right to choose, criticize and replace leaders. Nor is it the ability to gather the larger crowd. It protects people absent from our rally and people standing in the opposing square.",
        "Civic organizations can connect citizens’ voices but cannot replace them. A civic movement without citizens is hollow; so is a democracy from which free individuals have disappeared."
      ]
    },
    {
      "title": "After democratization comes civic formation",
      "overview": "Political rights need citizens who can judge and accept responsibility without becoming dependent on states, parties or organizations.",
      "paragraphs": [
        "Korea achieved the democratization of presidential selection. Its next task, in SEED VOICE’s terms, is civic formation.",
        "If democratization returned voting and political choice to the public, civic formation develops people who do not become subordinate to the state, a party, a leader or a civic organization. If democratization removed authoritarian rulers, civic formation addresses the habits of ruler and subject that can remain within us.",
        "Democracy as the country’s engine does not mean holding a referendum on every policy. It means treating each citizen as a source of legitimate authority in the everyday operation of government, parties and civil society.",
        "The president is not the owner of the country but an official entrusted with powers for a limited time. Legislators should not be personal subordinates of a president or party leader. Opposition parties and dissenters are necessary democratic participants, not merely impediments to government. Civic organizations should enable autonomous public activity rather than establish another power over citizens.",
        "Above all, a citizen is not simply a subject waiting for state protection and benefits, but a person who exercises judgment and accepts responsibility.",
        "SEED VOICE defines democracy accordingly.",
        "Democracy is an order in which citizens are the source of power. Those citizens are not an undifferentiated collective, but individuals free to think, speak and choose differently.",
        "Democracy is not our side holding office. It is protecting a system in which others may speak, compete and win the next election. A democrat does not worship the ruler, but prevents any ruler from standing above the citizen."
      ]
    },
    {
      "title": "Return democracy to citizens",
      "overview": "The goal is not a country waiting for a good king, but one where no leader can become a king.",
      "paragraphs": [
        "Democracy should not be left as a party name or used as a ruler’s shield. Claiming democracy while excusing power’s arrogance and excluding critics from equal civic standing empties the word of its public meaning.",
        "Conservatives who turn away from democracy because they dislike the Democratic Party must change as well. Rejecting democracy abandons part of the constitutional order and citizens’ liberty. A constitutional conservatism should make democracy foundational.",
        "Democracy belongs neither to progressives nor to conservatives. It is not a justification possessed by rulers, but a shared order that protects citizens from arbitrary power.",
        "We need to reclaim it.",
        "But reclaiming must not mean taking it from one camp and handing it to another. It means returning it from party, leader and movement to each citizen.",
        "Democracy without liberty is deficient. So is democracy without citizens, or democracy that refuses to protect the rights of opponents.",
        "Democracy is a citizen’s right, not a ruler’s banner. It is the freedom to question power, not a duty of loyalty. It is an order that constrains the majority’s strength as well as enabling collective decisions.",
        "Korea’s next democratic task is to build not a country that searches for a good king, but a country in which no leader can become a king.",
        "That is the democracy we need to recover."
      ]
    }
  ],
};

// Share the topic's visual set across both lengths and localize it together.
const yoonAgainImageKo = {
  src: "images/seed-language/democracy-yoon-again-photo.webp",
  alt: "젖은 광장의 빈 접이식 의자에 기대어 놓인 YOON AGAIN 피켓과 태극기",
  caption: "한 정치인의 복귀와 대한민국의 회복은 같은 일이 아니다. 시민의 판단 기준은 인물에 대한 충성보다 헌정질서와 원칙이어야 한다.",
  credit: "씨앗의 소리 AI 제작 이미지 · 실제 집회 사진이 아닌 상징적 장면",
};
const yoonAgainImageEn = {
  ...yoonAgainImageKo,
  alt: "A YOON AGAIN placard and South Korean flag lean against an empty folding chair on a wet plaza",
  caption: "Restoring a politician is not the same as restoring the republic. Citizens should judge by constitutional principles rather than personal loyalty.",
  credit: "SEED VOICE AI-generated symbolic scene · not a photograph of an actual rally",
};
for (const [shortArticle, deepArticle, inlineImage] of [
  [democracyFeatureKo, democracyDeepKo, yoonAgainImageKo],
  [democracyFeatureEn, democracyDeepEn, yoonAgainImageEn],
] as const) {
  deepArticle.heroImage = shortArticle.heroImage;
  shortArticle.inlineImage = deepArticle.inlineImage = inlineImage;
  shortArticle.inlineImageAfterSection = 4;
  deepArticle.inlineImageAfterSection = deepArticle.sections.findIndex((section) => /윤어게인|Yoon Again/.test(section.title));
  shortArticle.charts = [{ ...deepArticle.chart!, afterSection: 2 }, { ...shortArticle.chart!, afterSection: 3 }];
  deepArticle.charts = [{ ...deepArticle.chart!, afterSection: 3 }, { ...shortArticle.chart!, afterSection: 8 }];
}

export const democracyArticlesKo = [democracyFeatureKo, democracyDeepKo];
export function getDemocracyArticle(slug: string, language: Language) {
  if (slug === democracyFeatureKo.slug) return language === "en" ? democracyFeatureEn : democracyFeatureKo;
  if (slug === democracyDeepKo.slug) return language === "en" ? democracyDeepEn : democracyDeepKo;
  return undefined;
}
