import type { SeedLanguageArticle } from "./seedLanguageBase";
const root="images/seed-language/founding-state-1948-2026/";
const sources=[
{label:"국가법령정보센터 — 대한민국 제헌헌법 (1948.7.17.)",url:"https://www.law.go.kr/lsInfoP.do?lsiSeq=53081"},
{label:"국사편찬위원회 — 유엔총회 결의 제195(III)호 (1948.12.12.)",url:"https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0130"},
{label:"국사편찬위원회 — 유엔 소총회 남한 선거 결의 (1948.2.26.)",url:"https://contents.history.go.kr/front/hm/print.do?levelId=hm_145_0030"},
{label:"미국 국무부 사료 — 1948년 한국 총선거 관련 문서",url:"https://history.state.gov/historicaldocuments/frus1948v06/d767"},
{label:"국사편찬위원회 — 대한민국 역사 자료 (정부 수립과 국가 승인)",url:"https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0130"}
];
export const foundingArticleKo:SeedLanguageArticle={
slug:"founding-nation-sovereignty-republic-1948-2026",term:"건국",date:"2026-10-20",readMinutes:11,newsletterEligible:false,
title:"건국은 오래된 왕조를 이어받는 것이 아니라 국민의 나라를 세우는 말이다",
subtitle:"쿠르드족의 현실에서 1919년 임시정부, 1948년 대한민국 정부 수립까지",
summary:"민족의 존재와 국가의 성립은 다릅니다. 대한민국은 독립운동의 정통성을 계승하면서 1948년 실효적 국가제도를 마련했습니다. 조선왕조와 구별되는 국민주권의 의미를 묻습니다.",
keyPoints:["민족의 역사, 독립 선언, 실제 국가의 성립과 국제적 승인은 구별됩니다.","1919년 임시정부의 공화주의적 이상과 1948년 실효적 국가 수립은 함께 설명할 수 있습니다.","건국의 의미는 특정 지도자에 대한 찬반보다 국가의 주인이 누구인가에서 드러납니다."],
heroImage:{src:root+"hero.png",alt:"왕조의 궁궐과 시민의 의회가 대비되는 창작 상징 그림",caption:"왕의 통치에서 국민주권으로. 서로 다른 국가질서의 성립을 상징적으로 표현했습니다.",credit:"씨앗의 소리 편집 일러스트"},
inlineImage:{src:root+"declaration.png",alt:"1919년의 독립 선언과 1948년의 통치기구 수립을 대조한 창작 그림",caption:"독립국가의 이상을 선언하는 것과 실제 통치기구를 수립하는 것은 서로 다른 차원의 일입니다.",credit:"씨앗의 소리 편집 일러스트"},inlineImageAfterSection:3,
additionalImages:[{src:root+"timeline-ko.png",alt:"1910년 국권 상실, 1919년 임시정부, 1948년 헌법과 정부 및 유엔 결의를 순서대로 표현한 연표",caption:"국권 상실, 공화국의 선언, 헌정정부의 수립과 국제적 지위의 형성은 각각 구분해 읽을 사건입니다.",credit:"씨앗의 소리 편집 그래픽",afterSection:2}],
leadParagraphs:[
"수천만 명의 사람이 같은 언어와 문화를 나누고 살아도 자기 이름으로 된 독립국가가 없을 수 있습니다. 쿠르드족 이야기입니다. 그렇다면 수천 년의 역사를 지닌 민족은 그 역사만으로 이미 나라를 가진 것일까요.",
"우리는 대한민국의 건국을 두고 자주 1919년이냐 1948년이냐 다툽니다. 이승만을 건국대통령이라고 부르는 사람과 그 표현을 거부하는 사람이 맞섭니다. 정작 시민에게 가장 중요한 질문은 뒤로 밀립니다. 나라가 세워졌다는 것은 도대체 무엇을 뜻합니까.",
"씨앗은 오래된 민족의 역사와 실효적 주권국가의 성립을 구별합니다. 조선의 문화와 독립운동의 정통성을 소중히 여기는 일은 왕조의 통치질서를 계승한다는 주장과 다릅니다."
],
sections:[
{title:"민족이 있다고 독립국가까지 있는 것은 아닙니다",paragraphs:[
"쿠르드족은 튀르키예·이라크·이란·시리아 등에 걸쳐 살아갑니다. 고유한 언어와 문화, 민족의식이 있습니다. 이라크 쿠르디스탄에는 자치정부도 있지만, 쿠르드족 전체를 대표하는 독립 주권국가는 존재하지 않습니다.",
"민족은 역사와 문화를 공유하는 공동체입니다. 국가는 주민과 영토를 바탕으로 독립적인 정부가 통치권을 행사하는 정치·법적 조직입니다. 둘은 겹칠 수 있지만 같은 말이 아닙니다.",
"국제법에서 국가의 성립을 판단할 때는 일정한 주민, 영토, 정부, 독립적인 대외관계 능력 등이 논의됩니다. 외교적 승인은 매우 중요하지만 승인이 없으면 국가가 무조건 존재하지 않는다는 뜻도 아닙니다. 건국을 둘러싼 논쟁이 복잡한 이유입니다."
]},
{title:"조선은 우리의 역사이지만 대한민국과 같은 국가질서는 아닙니다",paragraphs:[
"조선은 군주가 다스리던 왕조였습니다. 신분제와 관료제, 유교적 통치질서가 사회를 조직했습니다. 농업과 상업의 변화, 조선 말기 개혁 시도는 존재했습니다. 그러나 국민이 주권의 주체라는 현대적 헌정질서를 완성하지는 못했습니다.",
"대한민국은 조선의 언어·문화·역사를 이어받았습니다. 그 사실과 왕의 통치권을 이어받았다는 주장은 다릅니다. 1948년 제헌헌법 제1조는 대한민국을 민주공화국으로, 제2조는 국민을 주권자로 규정했습니다.[1]",
"왕의 나라와 국민의 나라를 구별하는 것은 조선의 역사를 부정하는 일이 아닙니다. 역사적 연속성과 정치제도의 근본적 변화가 동시에 존재한다는 뜻입니다."
]},
{title:"1919년 임시정부는 무엇을 세웠을까요",paragraphs:[
"1910년 국권을 빼앗긴 뒤 한국인은 독립을 위해 싸웠습니다. 1919년 3·1운동과 대한민국 임시정부 수립은 왕조의 복원이 아니라 민주공화국의 건설을 지향했습니다. 이것은 한국 근현대사에서 결정적인 정치적 변화였습니다.",
"임시정부는 국호와 제도를 정하고 독립운동과 외교활동을 이끌었습니다. 그러나 한반도에서 경찰·행정·사법권을 실제로 행사하지는 못했고, 독립국가의 정부로서 주요 국가들로부터 공식 승인도 확보하지 못했습니다.",
"그렇다고 임시정부의 의미가 사라지는 것은 아닙니다. 1948년 제헌헌법 전문은 3·1운동으로 대한민국을 건립해 세계에 선포한 독립정신을 계승해 민주독립국가를 재건한다고 명시했습니다.[1] 독립운동의 정통성과 실제 국가제도의 성립은 함께 설명할 수 있습니다."
]},
{title:"1948년, 새로운 헌정국가가 실제로 움직이기 시작했습니다",paragraphs:[
"해방 뒤에도 한반도에는 곧바로 독립된 한국 정부가 세워지지 않았습니다. 미소 군정과 분단 속에서 선거를 둘러싼 갈등이 이어졌고, 유엔은 접근할 수 있는 지역에서 선거를 실시하는 방안을 추진했습니다.[3][4]",
"1948년 5월 10일 남한에서 총선거가 실시됐습니다. 제헌국회는 헌법을 만들었고 8월 15일 대한민국 정부가 출범했습니다. 이승만은 초대 대통령으로 선출되어 국가기구의 수립을 주도했습니다.",
"같은 해 12월 12일 유엔총회 결의 제195(III)호는 대한민국 정부가 유엔위원단이 선거를 관찰할 수 있었던 지역에서 유효한 선거에 기초해 성립했고, 그 지역에 실효적 통치권과 관할권을 행사한다고 확인했습니다.[2] 이것은 유엔 가입이나 전 세계의 일괄적 국가승인을 뜻하지 않습니다.",
"당시 정부의 실효적 관할은 남한에 한정됐습니다. 분단이라는 한계는 분명했습니다. 하지만 독립의 이상을 주장하는 정치조직과 실제로 국가기관을 운영하는 정부 사이에 중대한 변화가 일어났다는 사실도 분명합니다."
]},
{title:"이승만의 건국을 둘러싼 싸움에서 빠지는 질문",paragraphs:[
"1919년 건국론은 임시정부의 법통과 독립운동의 정통성을 강조합니다. 1948년 건국론은 헌법·선거·정부·실효적 통치의 성립을 강조합니다. 서로 다른 질문에 답하는 두 견해를 무조건 하나로 만들 필요는 없습니다.",
"이승만이 1948년 정부 수립을 주도했다는 사실과 집권 뒤 민주주의를 훼손했다는 역사는 함께 기록할 수 있습니다. 그의 공적을 이유로 장기집권과 부정선거를 지울 수도, 그 잘못을 이유로 정부 수립의 역할을 없앨 수도 없습니다.",
"특정 교육단체를 둘러싼 의혹을 이승만 연구와 1948년 건국론 전체에 덧씌우는 것도 논증은 아닙니다. 단체의 행위는 사실대로 검증하고 역사적 주장은 사료로 따져보는 것이 시민의 판단입니다.",
"더 근본적인 질문은 이것입니다. 1948년에 처음으로 실제 운영된 새로운 공화국은 이전의 왕조와 어떤 원리에서 달랐습니까. 그 차이를 국가의 이름보다 시민의 권리에서 보아야 합니다."
]},
{title:"씨앗의 관점 — 건국을 묻는 것은 지금도 나라의 주인이 누구인지 묻는 일입니다",paragraphs:[
"씨앗은 대한민국을 조선왕조의 이름만 바꾼 나라로 보지 않습니다. 독립운동의 역사적 이상을 계승하면서 왕조적 통치질서와 구별되는 국민주권의 헌정국가를 현실 속에 수립한 나라로 봅니다.",
"건국은 모든 자유가 완성된 날을 뜻하지 않습니다. 헌법의 선언과 실제 삶 사이에는 언제나 거리가 있었습니다. 시민의 자유와 민주주의를 발전시킨 후대의 노력 역시 대한민국의 역사입니다.",
"우리가 건국을 배우는 이유는 어느 대통령을 숭배하거나 비난하기 위해서가 아닙니다. 국민이 국가를 위해 존재하는지, 국가가 국민의 자유를 지키기 위해 존재하는지를 다시 묻기 위해서입니다.",
"대한민국의 주인은 왕도, 대통령도, 정당도 아닙니다. 국민입니다. 건국의 의미는 그 약속을 오늘의 권력 앞에서도 지키는 데 있습니다."
]}],
sources
};
export const foundingArticleEn:SeedLanguageArticle={
...foundingArticleKo,term:"Founding a State",title:"Founding a State Means Establishing Popular Sovereignty, Not Restoring a Dynasty",subtitle:"From the Kurdish experience to Korea’s 1919 provisional government and the 1948 republic",summary:"A nation’s identity is not the same as an operational sovereign state. The Republic of Korea inherited the ideals of independence while establishing functioning constitutional institutions in 1948.",keyPoints:["National identity, independence declarations, statehood and diplomatic recognition are distinct concepts.","The 1919 provisional government’s republican ideals and the 1948 government’s effective jurisdiction can both matter.","The central civic question is not personal allegiance to a founder, but who holds sovereignty."],
heroImage:{...foundingArticleKo.heroImage,alt:"Original editorial illustration contrasting a royal palace and a civic assembly",caption:"From royal government to popular sovereignty: an artistic representation of different constitutional orders."},
inlineImage:{...foundingArticleKo.inlineImage!,alt:"Original graphic contrasting a 1919 declaration with the institutions established in 1948",caption:"A declaration of an independent republic and a functioning government are different achievements."},
additionalImages:[{...foundingArticleKo.additionalImages![0],src:root+"timeline-en.png",alt:"Timeline of the loss of Korean sovereignty in 1910, the 1919 provisional government, and the 1948 constitution, government and UN resolution",caption:"Independence, constitutional ideals, functioning institutions and diplomatic status developed through distinct milestones."}],
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