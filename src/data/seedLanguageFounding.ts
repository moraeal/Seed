import type { SeedLanguageArticle } from "./seedLanguageBase";
const root="images/seed-language/founding-state-1948-2026/";
const sources=[
{label:"Wikimedia Commons / 미 육군 통신대 — 1948년 8월 15일 서울 도심 정부 수립 축하 기록사진",url:"https://commons.wikimedia.org/wiki/File:1948_downtown_Seoul,_Republic_of_Korea_(now_Sejong-daero)_on_15_August_with_crowds_celebrating_inauguration_of_new_Korean_government.jpg"},
{label:"Wikimedia Commons — 1948년 대한민국 정부 수립 국민축하식 컬러 보정 기록사진",url:"https://commons.wikimedia.org/wiki/File:Ceremony_inaugurating_the_government_of_the_Republic_of_Korea_(colored).jpg"},
{label:"국가법령정보센터 — 대한민국 제헌헌법 (1948.7.17.)",url:"https://www.law.go.kr/lsInfoP.do?lsiSeq=53081"},
{label:"국사편찬위원회 — 유엔총회 결의 제195(III)호 (1948.12.12.)",url:"https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0130"},
{label:"국사편찬위원회 — 유엔 소총회 남한 선거 결의 (1948.2.26.)",url:"https://contents.history.go.kr/front/hm/print.do?levelId=hm_145_0030"},
{label:"미국 국무부 사료 — 1948년 한국 총선거 관련 문서",url:"https://history.state.gov/historicaldocuments/frus1948v06/d767"},
{label:"국사편찬위원회 — 대한민국 역사 자료 (정부 수립과 국가 승인)",url:"https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0130"}
];
export const foundingArticleKo:SeedLanguageArticle={
  "slug": "founding-nation-sovereignty-republic-1948-2026",
  "term": "건국",
  "date": "2026-10-20",
  "readMinutes": 11,
  "newsletterEligible": false,
  "title": "건국(建國) — 대한민국은 조선의 연장이 아니라 국민이 세운 새로운 나라다",
  "subtitle": "1919년의 공화국 정통을 이어 1948년 건국한 근대 국민국가, 그 출발점을 다시 묻는다",
  "summary": "조선왕조와 대한제국은 국권을 지켜내지 못했고, 일제강점기에는 독립된 국가가 존재하지 않았다. 국민들은 1919년 왕정이 아닌 민주공화국을 선언했고, 1948년 헌법과 선거, 실효적인 정부를 통해 대한민국을 건국했다. 나라의 주인은 왕이 아니라 국민이라는 근본적 단절에 주목한다.",
  "keyPoints": [
    "대한민국은 조선왕조의 왕권을 물려받아 이름만 바꾼 나라가 아니라 국민주권 위에 새로 수립된 민주공화국이다.",
    "1919년 3·1운동과 대한민국 임시정부는 민주공화국의 이름·이상·정통을 세웠고, 그 정신은 대한민국 헌정의 뿌리가 되었다.",
    "1948년의 선거·제헌헌법·정부 수립은 국민주권의 이상을 실제 국가기관과 통치체제로 구현한 건국의 역사다."
  ],
  "heroImage": {
    "src": "images/seed-language/founding-state-1948-2026/republic-born-hero.png",
    "alt": "부서지는 왕관과 식민지의 쇠사슬, 시민들이 높이 든 태극기와 떠오르는 햇빛으로 새 민주공화국의 건국을 상징한 그림",
    "caption": "왕의 나라와 식민지의 시대를 넘어 국민이 주인이 된 나라. 대한민국의 건국은 정치권력의 주인이 바뀐 역사였다.",
    "credit": "씨앗의 소리 제작 · AI 상징 이미지"
  },
  "inlineImage": {
    "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Ceremony%20inaugurating%20the%20government%20of%20the%20Republic%20of%20Korea%20(colored).jpg?width=1200",
    "alt": "1948년 8월 15일 대한민국 정부 수립 국민축하식의 기록사진",
    "caption": "1948년 대한민국 정부 수립 국민축하식. 1919년에 선언한 공화국의 이상이 실제 헌법과 정부로 이어졌다.",
    "credit": "대한민국 정부 수립 국민축하식 기록사진 · Wikimedia Commons"
  },
  "inlineImageAfterSection": 6,
  "additionalImages": [
    {
      "src": "images/seed-language/founding-state-1948-2026/timeline-ko.svg",
      "alt": "1910년 강제병합, 1919년 3·1운동과 임시정부, 1948년 제헌헌법·정부 수립·유엔 결의를 구분해 보여 주는 역사 연표",
      "caption": "1910년 국권 상실, 1919년 공화국의 선언, 1948년 헌정국가의 실질적 성립은 같은 사건이 아니다.",
      "credit": "씨앗의 소리 편집 그래픽",
      "afterSection": 5
    }
  ],
  "leadParagraphs": [
    "나라를 잃었다는 말은 너무 익숙해서, 그 말이 뜻하는 끔찍한 현실을 잊기 쉽다. 우리의 조상들은 자기 땅에 살면서도 자기 나라의 법과 정부를 갖지 못했다. 일본 제국의 지배 아래에서 조선의 백성은 스스로 나라의 주인이 될 수 없었다.",
    "그런데 더 중요한 질문이 남는다. 그렇게 빼앗겼던 나라를 되찾은 뒤, 우리는 다시 왕이 다스리는 조선을 세웠는가? 아니면 역사상 전혀 다른 원리로 움직이는 새로운 나라를 세웠는가?",
    "**대한민국은 조선왕조의 연장이 아니다. 1919년 독립운동이 세운 공화국의 정통을 이어받아, 1948년 국민주권의 헌법과 실제 정부를 갖춘 새로운 나라로 건국됐다.** 이 차이를 이해해야 대한민국의 출발과 오늘의 자유가 무엇을 뜻하는지 알 수 있다."
  ],
  "sections": [
    {
      "title": "조선의 역사가 대한민국의 정치체제가 된 것은 아니다",
      "paragraphs": [
        "고조선부터 삼국, 고려, 조선으로 이어지는 우리 역사는 소중한 유산이다. 그러나 수천 년의 역사와 오늘날 대한민국이라는 국가의 성립은 같은 말이 아니다. 문화와 언어를 계승하는 것과 왕조의 권력을 계승하는 것은 다르다.",
        "조선은 왕이 나라를 다스리는 군주국이었다. 정치의 정당성은 국민의 투표가 아니라 왕조와 신분질서에서 나왔고, 백성에게는 오늘날의 보통선거권도 국민주권도 없었다.",
        "1897년 조선은 대한제국으로 국호와 국가 형식을 바꾸었다. 근대적 개혁을 추진하려는 노력도 있었지만, 황제가 통치하는 군주제라는 기본 구조가 국민이 주인인 민주공화국으로 전환된 것은 아니었다.",
        "**대한민국은 조선의 왕이 가지고 있던 통치권을 넘겨받은 국가가 아니다.** 왕이 아닌 국민이 주권의 원천이라는 선언에서 근본적으로 새 출발한 국가다."
      ],
      "sourceIndices": [
        2
      ]
    },
    {
      "title": "왕조는 국권을 지켜내지 못했고, 한반도는 일본의 식민지가 됐다",
      "paragraphs": [
        "대한제국은 일본의 침략과 외교·군사적 강압 속에서 주권을 잃어 갔다. 1905년 을사늑약으로 외교권을 빼앗겼고, 1910년에는 강제로 병합됐다. 나라의 주권을 일본에 넘긴 것이 정당한 국민적 선택이었던 것은 결코 아니다.",
        "일본의 식민지로 편입된 한반도에서는 독립된 한국 정부가 통치권을 행사하지 못했다. 법과 경찰, 행정과 교육의 중심에는 일본 제국의 권력이 있었고, 한국인들은 자기 나라의 정치적 미래를 스스로 결정할 권리를 빼앗겼다.",
        "그렇다면 일제강점기에도 우리 민족과 역사가 존재했다는 이유만으로 독립국가 대한민국이 실질적으로 존재했다고 말할 수 있을까? 민족과 문화가 사라지지 않았다는 사실은 중요하지만, 그것만으로 나라의 주권이 행사됐던 것은 아니다.",
        "나라를 잃은 역사를 기억한다는 것은 식민통치를 우리 역사의 자연스러운 연장으로 받아들이는 일이 아니다. **국권을 빼앗긴 현실에서 누가, 어떤 나라를 다시 세우려 했는지 확인하는 일이다.**"
      ]
    },
    {
      "title": "1919년, 백성들은 왕의 나라로 돌아가기를 거부했다",
      "paragraphs": [
        "1919년 3월, 독립을 외치는 사람들이 거리로 나왔다. 그들에게 필요한 것은 일본을 몰아낸 자리에 새로운 임금을 앉히는 일이 아니었다. 누구의 신민이 아닌, 스스로 나라의 주인이 되는 독립이었다.",
        "3·1운동을 계기로 수립된 대한민국 임시정부는 새 나라의 이름을 ‘대한민국’이라고 정하고 민주공화제를 지향했다. 군주제가 아닌 공화제를 선택했다는 사실은 우리 정치사에서 하나의 거대한 단절이었다.",
        "이전의 조선에서 백성은 통치의 대상이었다. 새롭게 선언된 공화국에서 국민은 통치권의 근거였다. 독립운동은 단순히 빼앗긴 왕조를 복구하려는 운동에 그치지 않고, 국민의 나라를 만들려는 정치적 결단으로 발전했다.",
        "**1919년은 대한민국이라는 이름과 민주공화국의 정통이 역사 속에 분명하게 등장한 해다.** 독립운동가들의 희생과 임시정부의 공화주의적 결단이 없었다면 1948년의 건국도 그 의미를 온전히 설명하기 어렵다."
      ],
      "sourceIndices": [
        2
      ]
    },
    {
      "title": "그러나 나라를 선언하는 것과 실제로 세우는 것은 다르다",
      "paragraphs": [
        "건국이란 무엇인가. 어떤 집단이 나라를 세우겠다고 선언하거나 헌법의 원칙을 적는 것만으로 실효적인 주권국가가 완성되지는 않는다. 일정한 영토와 주민, 정부, 독립적으로 통치할 능력이 현실에서 갖추어지는지가 중요하다.",
        "임시정부는 독립운동의 정치적 중심이었고 대한민국의 역사적 정통을 형성했다. 그러나 식민지 한반도에서 세금을 걷고 법을 집행하며 행정·사법기관을 운영하는 실효적 정부는 될 수 없었다.",
        "이 구분이 임시정부의 가치를 낮추는 것은 아니다. 오히려 왜 독립운동가들이 독립을 위해 그렇게 오랜 세월 싸웠는지를 선명하게 보여 준다. 선언이 곧바로 국가가 됐다면 해방과 정부 수립을 위한 투쟁은 필요하지 않았을 것이다.",
        "**1919년에는 세워야 할 공화국의 원리를 선언했다. 그 공화국이 실제로 국민을 통치하는 국가가 되는 과정은 그 뒤에도 계속됐다.**"
      ]
    },
    {
      "title": "1945년 해방됐지만, 우리 정부를 바로 세우지는 못했다",
      "paragraphs": [
        "1945년 일본이 패전하면서 식민지배는 끝났다. 온 국민이 해방을 기뻐했지만, 일본이 물러난 자리에 곧장 우리 국민이 선출한 통일 정부가 들어선 것은 아니었다.",
        "한반도 남쪽에는 미군이, 북쪽에는 소련군이 진주해 군정을 실시했다. 나라의 미래를 스스로 결정할 통일된 정치체제를 세우기 어려웠고, 민족의 독립이라는 열망 앞에는 분단과 국제정치의 장벽이 놓여 있었다.",
        "해방과 건국은 따라서 서로 다른 사건이다. **해방은 식민지배에서 벗어난 역사이고, 건국은 그 이후 독립된 헌법과 국가기관을 갖춘 나라를 실제로 세운 역사다.** 이 둘을 뒤섞으면 1945년부터 1948년까지 무슨 일이 벌어졌는지 설명하기 어렵다."
      ],
      "sourceIndices": [
        3,
        4
      ]
    },
    {
      "title": "1948년, 선언했던 공화국이 현실의 국가가 됐다",
      "paragraphs": [
        "1948년 5월 10일, 유엔이 관여한 선거가 한반도 남부에서 실시됐다. 남북 전체가 참여하는 선거는 이뤄지지 못했지만, 선거를 통해 제헌국회가 구성되고 우리 국민의 대표가 새로운 국가의 헌법을 마련하는 단계로 나아갔다.",
        "7월 17일 공포된 제헌헌법 제1조는 ‘대한민국은 민주공화국이다’라고 선언했다. 제2조는 대한민국의 주권이 국민에게 있고 모든 권력이 국민으로부터 나온다고 규정했다. 이 두 조문은 조선왕조와 대한민국을 가르는 가장 분명한 선이다.",
        "8월 15일 대한민국 정부가 수립됐다. 대통령과 국회, 행정기관 등 헌법상 국가기구가 실제 운영되기 시작했다. 국민의 권리를 보장하고 권력의 근거를 국민에게 두는 헌정체제가 추상적 구호를 넘어 현실의 국가로 등장한 것이다.",
        "12월 유엔총회 결의 제195(III)호는 유엔 감시가 가능했던 지역에서 실시된 선거로 수립된 대한민국 정부가 그 지역에 실효적인 통치권과 관할권을 행사함을 확인했다. 이것이 당시 한반도 전역을 실효적으로 통치했다는 뜻은 아니며, 분단은 건국이 안고 출발한 비극적 한계였다.",
        "그러나 그 한계가 1948년의 역사적 의미를 없애지는 못한다. **1948년은 국민이 주권자라는 공화국의 원리를 선거·헌법·정부라는 실질적 국가체제로 구현한 건국의 해였다.**"
      ],
      "sourceIndices": [
        2,
        3
      ]
    },
    {
      "title": "1919년의 정통과 1948년의 건국은 서로 충돌하지 않는다",
      "paragraphs": [
        "대한민국의 건국을 1948년이라고 설명하면 1919년 임시정부를 부정하는 것처럼 말하는 이들이 있다. 반대로 1919년을 강조하면 1948년 건국의 역사적 의미를 지우려는 시도도 보인다. 두 시기의 역할을 하나로 섞어 놓았기 때문에 생기는 혼란이다.",
        "1919년 3·1운동과 임시정부는 독립된 민주공화국을 세우겠다는 국민적 의지와 정통의 출발점이었다. 1948년은 그 이상을 잇는 정부가 헌법에 따라 실제 통치할 수 있는 국가기관을 갖춘 시점이었다. 정통의 형성과 실질적인 국가 수립은 서로 다른 차원의 역사다.",
        "1948년 제헌헌법 전문도 기미 삼일운동으로 대한민국을 건립해 세계에 선포한 독립정신을 계승한다고 밝혔다. 제헌국회와 정부 수립이 독립운동과 단절된 새로운 역사라는 설명은 그래서 정확하지 않다.",
        "**대한민국은 조선왕조의 통치체제와는 단절했고, 1919년 독립운동의 민주공화국 정신과는 이어졌다.** 우리의 정치적 선택은 조선으로 돌아가는 것이 아니라, 임시정부가 염원한 공화국을 현실 속에서 세우는 것이었다."
      ],
      "sourceIndices": [
        2
      ]
    },
    {
      "title": "건국의 주인공은 한 사람의 대통령이 아니라 국민이다",
      "paragraphs": [
        "1948년 정부 수립을 주도한 이승만의 역할은 역사적 사실이다. 그는 독립운동에 참여했고 초대 대통령이 됐으며, 대한민국의 외교와 국가체제 형성에서 중요한 결정을 내렸다.",
        "하지만 이승만 혼자 나라를 세운 것은 아니다. 3·1운동에 나선 수많은 사람과 독립운동가들, 제헌국회 의원들, 당시 유권자들의 참여가 있었기에 국가 수립이 가능했다. 새로운 공화국의 정당성도 어느 지도자의 혈통이나 개인적 권위가 아니라 국민주권에서 나온다.",
        "이승만 집권기에 있었던 권위주의적 통치와 3·15 부정선거, 그리고 4·19혁명 역시 숨길 수 없는 역사다. 그 잘못에 대한 평가와 1948년 정부 수립의 역사적 의의를 구별하는 것은 한쪽을 지우려는 일이 아니라 사실을 정확히 보려는 일이다.",
        "우리가 건국을 기억하는 이유는 특정 대통령을 숭배하기 위해서가 아니다. **국가가 국민의 자유를 위해 존재한다는 원리, 권력자는 국민에게서 권한을 위임받은 존재라는 원리를 기억하기 위해서다.**"
      ]
    },
    {
      "title": "씨앗의 관점 — 대한민국은 왕의 나라가 아니라 국민의 나라다",
      "paragraphs": [
        "오늘날에도 국가가 국민을 가르치고 통제해야 할 대상으로 바라보는 장면을 자주 만난다. 세금을 내는 국민이 예산의 주인인지, 권력이 헌법과 법률의 한계 안에서 움직이는지, 시민의 자유가 정치적 필요에 따라 가볍게 취급되고 있지는 않은지 묻게 된다.",
        "조선의 백성은 왕을 선택할 수 없었다. 식민지 조선의 주민은 자신의 정부를 선택할 주권을 빼앗겼다. 대한민국의 국민은 선거로 권력을 구성하고 헌법으로 그 권력의 한계를 정하는 나라의 주인이다.",
        "건국이 민주주의의 완성을 뜻하지는 않는다. 헌법의 약속이 실제 권리로 뿌리내리기까지는 여러 세대의 노력과 민주화운동이 뒤따랐다. 하지만 그 노력이 가능했던 출발점에는 국민주권이라는 공화국의 원리가 놓여 있다.",
        "1948년 대한민국 건국은 낡은 왕조의 부활도, 일제 식민통치의 연장도 아니었다. 1919년의 공화국 정신을 이어받아 국민이 헌법의 주인으로 나선 새 국가의 출범이었다.",
        "**나라의 주인은 왕도 아니고 대통령도 아니며 정당도 아니다. 국민이다.** 대한민국의 건국을 기억한다는 것은 이 단순하고도 엄중한 약속이 오늘날에도 지켜지고 있는지 묻는 일이다."
      ]
    },
    {
      "title": "시민언어 한 줄 정리",
      "paragraphs": [
        "**건국(建國)은 국민과 영토, 실제로 작동하는 독립적인 통치체제를 갖춘 나라를 세우는 일이다. 대한민국은 1919년에 민주공화국의 정통을 세웠고, 1948년 국민주권의 헌법과 정부를 수립해 근대적 국가로 건국됐다.**"
      ]
    }
  ]
};
export const foundingArticleEn:SeedLanguageArticle={
...foundingArticleKo,term:"Founding a State",title:"Founding a State Means Establishing Popular Sovereignty, Not Restoring a Dynasty",subtitle:"From the Kurdish experience to Korea’s 1919 provisional government and the 1948 republic",summary:"A nation’s identity is not the same as an operational sovereign state. The Republic of Korea inherited the ideals of independence while establishing functioning constitutional institutions in 1948.",keyPoints:["National identity, independence declarations, statehood and diplomatic recognition are distinct concepts.","The 1919 provisional government’s republican ideals and the 1948 government’s effective jurisdiction can both matter.","The central civic question is not personal allegiance to a founder, but who holds sovereignty."],
heroImage:{...foundingArticleKo.heroImage,alt:"Archival photograph of crowds celebrating the inauguration of the Korean government in Seoul on August 15, 1948",caption:"Citizens gathered in Seoul on August 15, 1948 to celebrate the inauguration of the Republic of Korea government."},
inlineImage:{...foundingArticleKo.inlineImage!,alt:"Archival photograph of the August 15, 1948 ceremony inaugurating the government of the Republic of Korea",caption:"The 1948 inauguration ceremony. The aspirations of independence and the establishment of functioning institutions mark distinct stages."},
additionalImages:[{...foundingArticleKo.additionalImages![0],src:root+"timeline-en.svg",alt:"Timeline of the loss of Korean sovereignty in 1910, the 1919 provisional government, and the 1948 constitution, government and UN resolution",caption:"Independence, constitutional ideals, functioning institutions and diplomatic status developed through distinct milestones."}],
leadParagraphs:[
"Millions of people can share a language and cultural identity and yet lack an independent state. The Kurds are a vivid example. Does a nation’s long history, by itself, amount to statehood?",
"In South Korea, public arguments often focus on whether the republic began in 1919 or 1948 and whether Syngman Rhee deserves to be called a founder. Before choosing a date, citizens need to ask what it means to found a state.",
"SEED distinguishes historical continuity from the establishment of functioning constitutional institutions. Acknowledging Korea’s cultural heritage and independence movement does not mean the modern republic inherited royal power."
],
sections:[
{title:"A people and a state are not identical",paragraphs:["Kurds live across Turkey, Iraq, Iran and Syria. Their shared identity and, in Iraqi Kurdistan, autonomous institutions have not produced one internationally recognized sovereign state representing all Kurds.","A nation describes a historical and cultural community. A state entails territory, a population and a government able to exercise political authority independently. International recognition matters enormously, but it is not the sole legal test of statehood."]},
{title:"From a royal state to constitutional citizenship",paragraphs:["Joseon was a hereditary monarchy governed through a stratified social order and Confucian institutions. Markets evolved and reformers pursued change, but the kingdom did not establish modern popular sovereignty.","The 1948 Constitution described the Republic of Korea as a democratic republic and placed sovereignty in the people.[1] Historical and cultural continuity therefore coexisted with a fundamental transformation of political legitimacy."]},
{title:"What was achieved in 1919?",paragraphs:["After Japan annexed Korea in 1910, independence activists sought to regain self-government. The March First Movement and the Korean Provisional Government of 1919 envisioned a democratic republic rather than a restored monarchy.","The provisional government organized independence work and diplomacy, but it did not exercise effective executive, judicial or police authority in Korea or secure formal recognition from major governments.","The preamble to the 1948 Constitution explicitly claimed continuity with the independence spirit proclaimed through the March First Movement.[1] This makes the provisional government’s historic legitimacy compatible with a separate discussion of practical state formation."]},
{title:"What changed in 1948?",paragraphs:["The end of Japanese rule did not immediately produce a unified independent government. US and Soviet occupation and a divided peninsula framed the elections. The UN process moved toward elections in areas accessible to its commission.[3][4]","Elections were held in the South on May 10, 1948. A constituent assembly adopted a constitution, and the Republic of Korea government was inaugurated on August 15. Syngman Rhee became its first president.","UN General Assembly Resolution 195 (III), adopted on December 12, described the government as lawfully established through elections in the area monitored by the UN commission and as exercising effective control there.[2] This was neither UN membership nor blanket diplomatic recognition by every country.","Division constrained the government’s effective territorial jurisdiction. But the emergence of operating institutions marked a real change from a government-in-exile pursuing independence."]},
{title:"The debate over Rhee and the founding date",paragraphs:["A 1919 account emphasizes republican ideals and the independence movement’s legal and moral lineage. A 1948 account emphasizes elections, constitutional institutions and effective jurisdiction. Those questions should not be confused.","Rhee’s role in establishing the 1948 government can be acknowledged alongside his later abuses of constitutional government. Recognizing the first does not excuse authoritarian actions, and recognizing the second does not erase the first.","Allegations involving an educational organization likewise cannot establish whether a historical theory is right. Its activities require factual scrutiny; claims about state formation require historical evidence."]},
{title:"SEED’s view: Whose country is it?",paragraphs:["The Republic of Korea is neither a renamed Joseon monarchy nor a state without a past. Its modern institutions emerged from a history of independence movements and a decisive shift toward popular sovereignty.","Founding was a beginning, not the completion of every democratic promise. Subsequent generations struggled to make constitutional freedoms effective.","The reason to study founding is not to venerate or condemn a single president. It is to ask whether the state serves its citizens or demands that citizens serve the state. Sovereignty belongs to the people. That is the founding principle citizens must continue to defend."]}]
};