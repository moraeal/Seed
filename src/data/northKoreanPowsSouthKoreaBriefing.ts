import type { Briefing } from "./briefings";

const reuters = "https://www.reuters.com/business/aerospace-defense/ukraine-sent-two-captured-north-korean-soldiers-south-korea-zelenskiy-says-2026-09-23/";
const dw = "https://amp.dw.com/en/north-korean-pows-stuck-in-ukraine-as-seoul-hesitates/a-76020092";
const hrw = "https://www.hrw.org/news/2026/02/26/a-year-on-two-north-korean-pows-in-ukraine-fear-forced-return";
const joongang = "https://www.koreadaily.com/article/20260923170455577";

export const northKoreanPowsSouthKoreaBriefing: Briefing = {
  slug: "north-korean-pows-south-korea-zelensky-un",
  category: "시민브리핑 · 깊게 읽기",
  title: "북한군 포로 두 명이 한국으로 왔다…그들이 전쟁터에서 잃을 뻔한 선택권",
  subtitle: "유엔 발표와 한국 정부의 답변, 외신이 기록한 20개월을 함께 읽습니다",
  summary: "젤렌스키는 유엔에서 북한군 포로 두 명을 최근 한국에 보냈다고 밝혔습니다. 정부는 협의 사실을 설명하면서도 신변 안전을 이유로 이송 세부 사항을 확인하지 않았습니다. 로이터·DW·인권단체와 중앙일보 보도를 통해 그 사이의 시간을 짚습니다.",
  date: "2026-09-24",
  author: "씨앗의 소리",
  readMinutes: 10,
  featured: true,
  homeBriefingLeadEligible: true,
  images: [
    {
      src: "images/briefings/north-korean-pows-2025-telegram.jpg",
      alt: "2025년 1월 우크라이나군에 생포된 북한군 포로 두 명의 모습. 젤렌스키 대통령 텔레그램 공개 사진",
      caption: "2025년 1월 생포 당시 젤렌스키 대통령이 텔레그램에 공개한 사진을 중앙일보가 인용했습니다. 2026년 9월 한국 입국 장면이 아닙니다. 사진을 누르면 중앙일보 원보도로 이동합니다.",
      credit: "젤렌스키 텔레그램 공개 사진 · 중앙일보 기사 인용",
      sourceUrl: joongang,
    },
    {
      src: "images/briefings/zelensky-un-2026.webp",
      alt: "2026년 9월 23일 유엔총회 연단에서 연설하는 볼로디미르 젤렌스키 우크라이나 대통령",
      caption: "젤렌스키 대통령은 9월 23일 유엔총회 연설에서 두 포로의 한국행을 공개했습니다. 유엔 공식 연설 페이지에 게재된 사진입니다.",
      credit: "UN Photo · 제81차 유엔총회 일반토의",
      sourceUrl: "https://gadebate.un.org/en/81/ukraine",
      contain: true,
    },
  ],
  sourceArticle: {
    title: "젤렌스키 “北포로 2명, 한국행”…정부 ‘이달 입국’ 사실상 시인",
    publisher: "중앙일보 · 정혜정 기자",
    publishedAt: "2026-09-24",
    url: joongang,
    imageSrc: "https://www.koreadaily.com/data/photo/2026/09/24/a053ca6b-20db-4e00-a508-863067a0ad71.jpg",
    imageAlt: "중앙일보 원보도에 인용된, 2025년 1월 젤렌스키 대통령 텔레그램의 북한군 포로 사진",
    imageCredit: "중앙일보 기사 인용 이미지 · 젤렌스키 텔레그램 캡처. 사진을 누르면 원보도로 이동합니다. 당사자와 가족 보호를 위해 신원 정보를 덧붙이지 않습니다.",
    note: "중앙일보는 두 사람이 2025년 1월 쿠르스크에서 생포됐으며 9월 중순 한국에 들어온 것으로 확인됐다고 전했습니다. 외교부는 협의 사실을 밝히면서도 당사자·가족의 안전을 이유로 개별 이송 여부, 시기와 경로는 확인하지 않았습니다. 입국 시점은 중앙일보 취재 결과이며 정부가 공식 발표한 날짜가 아닙니다.",
  },
  keyHighlights: [
    "젤렌스키의 9월 23일 유엔 발표: 북한군 포로 두 명을 최근 대한민국에 보냈다고 말했습니다.",
    "한국 외교부: 관련국과 협의했지만 당사자와 가족의 안전을 들어 개별 이송의 시기·경로를 확인하지 않았습니다.",
    "두 포로의 의사와 강제 북송 위험을 살피는 동시에, 북한의 파병과 전투 경험이 남길 안보 문제를 확인해야 합니다.",
  ],
  content: [
    "러시아 쿠르스크 전장에서 생포된 북한군 병사 두 명의 한국행을 처음 공개한 곳은 서울이 아니라 뉴욕의 유엔총회장이었습니다. 볼로디미르 젤렌스키 우크라이나 대통령은 9월 23일 연설에서 우크라이나가 최근 두 사람을 대한민국으로 보냈다고 밝혔습니다. 한국 외교부는 우크라이나 등과 협의해 왔다고 답했으나, 당사자와 가족의 안전을 이유로 개별 인원의 이송 여부와 시기·경로는 확인하지 않았습니다.",
    "중앙일보는 두 사람이 9월 중순 입국한 것으로 확인됐다고 후속 보도했습니다. 이는 해당 언론사의 취재 결과입니다. 한국 정부가 구체적인 입국 날짜나 경로를 발표한 것으로 바꿔 읽어서는 안 됩니다. 두 사람은 2025년 1월 생포됐고 한국행을 원한다는 뜻이 인터뷰와 편지 등을 통해 전해졌습니다. 공개 발표까지 약 20개월이 흘렀습니다.",
  ],
  sections: [
    {
      title: "외신 깊게 읽기 ① | 로이터는 발표와 공백을 함께 전했습니다",
      paragraphs: [
        "로이터의 9월 23일 보도는 젤렌스키의 유엔 연설을 첫머리에 놓습니다. 그는 두 포로를 한국에 보냈다고 말하면서, 한 사람이 생포될 당시 목숨을 끊으려 했다고 전했습니다. 이는 대통령의 발언을 전한 것이지 이 매체가 당사자의 직접 증언을 새로 확인했다는 뜻은 아닙니다. 젤렌스키는 북한 지도부가 병사를 대가를 얻는 수단으로 이용한다고도 비판했습니다.",
        "로이터는 생포 초기 젤렌스키가 이들을 러시아에 붙잡힌 우크라이나 포로와 교환할 가능성을 거론했던 배경을 되짚었습니다. 동시에 북한 송환 시의 위험을 지적한 인권단체의 우려와 한국 외교부가 안전상 이유로 이송 세부 사항을 밝히지 않은 답변을 실었습니다. 보도에 등장하는 북한 파병 규모 1만4천~1만5천 명은 한국·우크라이나 측의 추정치로, 확인된 이송 인원 두 명과 다른 숫자입니다.",
      ],
    },
    {
      title: "외신 깊게 읽기 ② | DW가 기록한 한국행 이전의 두려움",
      paragraphs: [
        "독일 DW의 2026년 2월 기사는 이번 발표보다 일곱 달 앞서 나왔습니다. 당시 두 사람은 여전히 우크라이나에 머물렀습니다. DW는 두 사람이 한국으로 가고 싶다는 뜻을 전한 과정과 탈북민·활동가의 반응을 취재했습니다. 북한으로 돌아갈 경우 생포 사실 때문에 처벌받거나 북한의 가족에게 불이익이 미칠 수 있다는 두려움이 핵심이었습니다.",
        "당시 활동가 일부는 한국 정부의 대응이 느리다고 비판했습니다. 그 평가는 2월에 나온 주장입니다. 6월 한·우크라 외교장관 협의, 7월 정상회담과 9월의 발표를 건너뛰고 당시 평가를 지금의 정부 행동에 대한 확정적 판정처럼 인용할 수는 없습니다. 오히려 DW 보도는 당사자에게 기다림이 어떤 시간이었는지를 보여줍니다.",
      ],
    },
    {
      title: "인권단체가 물은 것 | 포로는 어디로 돌아가야 합니까",
      paragraphs: [
        "휴먼라이츠워치는 2월 분석에서 포로를 적대행위가 끝날 때까지 억류할 수 있지만 조기 석방이나 제3국 이송의 길도 있다고 설명했습니다. 북한에 돌려보낼 경우 고문·강제노동 등의 위험을 제기하며, 우크라이나와 한국이 협력해 강제 북송을 피하라고 촉구했습니다. 국제적십자위원회도 심각한 박해·고문·사망 위험이 있다면 본인의 의사에 반해 송환해서는 안 된다는 원칙을 설명합니다.",
        "그렇다고 우크라이나가 곧바로 한국에 보내야 할 단일한 법적 의무가 이미 확정돼 있었다는 뜻은 아닙니다. 포로를 보호하고 본인의 자유의사를 살피는 절차가 중요합니다. 유엔 북한인권특별보고관은 얼굴과 신상이 널리 알려질 때 북한에 남은 가족에게 위험이 커질 수 있다고 경고했습니다. 두 사람을 보호한다면서 그들의 위치와 신원을 캐내는 보도는 그 목적을 해칩니다.",
      ],
    },
    {
      title: "중앙일보 후속 보도가 채운 한 칸",
      paragraphs: [
        "중앙일보는 젤렌스키의 연설과 한국 외교부의 답변을 전하며 두 사람이 이달 중순 한국에 들어온 것으로 확인됐다고 보도했습니다. 한국 외교부는 관련국·기관과 협의했고 당사자의 자유의사를 존중하며 국제법과 인도주의 원칙에 맞게 다뤄야 한다는 입장을 되풀이했습니다. 그러나 개별 신병 처리와 경로를 확인하지는 않았습니다. ‘사실상 시인’은 정부 발표문의 문구가 아니라 언론이 이 답변을 읽은 평가입니다.",
        "7월 이재명 대통령과 젤렌스키 대통령의 회담에서도 두 사람의 자유의사와 인도주의 원칙이 논의됐습니다. 공개 발표를 앞둔 협의의 흔적은 확인되지만, 그 이면의 구체적인 절차와 보호 조치는 공개 자료만으로 확정할 수 없습니다. 이 공백을 추정으로 채우지 않는 것이 당사자의 안전에도 맞습니다.",
      ],
    },
    {
      title: "두 사람의 선택권, 그리고 한반도에 남는 질문",
      paragraphs: [
        "북한 지도부가 보낸 전쟁에서 병사들은 전장에 갈지 스스로 정할 수 없었습니다. 생포 뒤에는 돌아가면 어떻게 될지 두려워했습니다. 이 사건에서 지켜야 할 기준은 이들을 어느 나라의 선전 도구로 만들 것인가가 아니라 그들이 표현한 뜻을 실제로 존중했는가입니다. 한국에 왔다는 발표가 끝이 아니라 이후 안전과 정착을 지킬 제도가 시작되는 지점입니다.",
        "젤렌스키는 유엔에서 북한군의 참전과 미사일·드론 역량도 경고했습니다. 북한의 전투 경험이 개별 무기의 성능을 얼마나 바꿨는지는 공개된 수치만으로 증명되지 않습니다. 다만 북·러 군사협력과 훈련·기술 이전의 실제 변화는 한국이 계속 검증해야 합니다. 두 사람을 안전하게 보호하는 일과 전쟁이 한반도로 가져올 위험을 살피는 일은 모두 시민의 과제입니다.",
      ],
    },
  ],
  paragraphLinks: [
    { sectionIndex: 0, paragraphIndex: 0, links: [{ label: "로이터 원문", url: reuters }] },
    { sectionIndex: 1, paragraphIndex: 0, links: [{ label: "DW 원문", url: dw }] },
    { sectionIndex: 2, paragraphIndex: 0, links: [{ label: "휴먼라이츠워치 원문", url: hrw }, { label: "국제적십자 해설", url: "https://www.icrc.org/en/document/prisoners-war-what-you-need-know" }] },
    { sectionIndex: 2, paragraphIndex: 1, links: [{ label: "특별보고관 발언 보도", url: "https://www.koreajoongangdaily.com/korea/un-special-rapporteur-urges-media-restraint-on-north-korean-pows-dialogue-with-pyongyang/12401259" }] },
    { sectionIndex: 3, paragraphIndex: 0, links: [{ label: "중앙일보 원문", url: joongang }] },
    { sectionIndex: 3, paragraphIndex: 1, links: [{ label: "외교장관 회담 보도", url: "https://en.yna.co.kr/view/AEN20260630006551315" }] },
  ],
  watchTitle: "씨앗이 계속 확인할 것",
  watchPoints: [
    "두 사람이 표현한 의사를 존중하고, 북한에 남은 가족의 신변을 해치지 않는 보호와 정착 지원이 이뤄지는지",
    "공개 가능한 범위에서 정부가 이송·보호 절차의 원칙을 설명하는지",
    "북·러 군사협력의 병력·훈련·기술 이전 변화에 관해 검증 가능한 자료가 나오는지",
  ],
  sources: [
    { label: "중앙일보 · 젤렌스키 ‘北포로 2명, 한국행’ (2026.9.24)", url: joongang },
    { label: "Reuters · Ukraine sent two captured North Korean soldiers to South Korea (2026.9.23)", url: reuters },
    { label: "DW · North Korean POWs stuck in Ukraine as Seoul hesitates (2026.2.18)", url: dw },
    { label: "Human Rights Watch · A year on, two North Korean POWs in Ukraine fear forced return (2026.2.26)", url: hrw },
    { label: "ICRC · Prisoners of war: what you need to know", url: "https://www.icrc.org/en/document/prisoners-war-what-you-need-know" },
    { label: "연합뉴스 · 한·우크라 외교장관 협의 (2026.6.30)", url: "https://en.yna.co.kr/view/AEN20260630006551315" },
    { label: "유엔 · 젤렌스키 대통령 제81차 총회 연설 (2026.9.23)", url: "https://gadebate.un.org/en/81/ukraine" },
  ],
  sourceNote: "2026년 9월 24일 확인한 공개 보도를 기준으로 작성했습니다. 중앙일보의 ‘9월 중순 입국’은 해당 매체의 취재 결과이며, 외교부가 날짜·경로를 공식 확인한 내용은 아닙니다. 대표 이미지와 원보도 박스의 사진은 중앙일보에 실린 2025년 1월 젤렌스키 텔레그램 공개 사진이며, 사진을 누르면 해당 기사로 이동합니다.",
};
