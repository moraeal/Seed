export type CivicMonitoringItem = {
  tag: string;
  status: string;
  title: string;
  summary: string;
  link: string;
};

export type CitizenProposalItem = {
  tag: string;
  status: string;
  perspective: string;
  title: string;
  summary: string;
  nextStep: string;
};

export const monitoringItems: CivicMonitoringItem[] = [
  {
    tag: "재정·세금",
    status: "집중 추적",
    title: "경기도 재정비상, 빚의 속도와 구조조정을 계속 봅니다",
    summary: "지방채 발행, 기금 차입, 필수예산 편성, 세출 구조조정이 실제로 정상화되는지 숫자로 추적합니다.",
    link: "/briefings/gyeonggi-fiscal-emergency",
  },
  {
    tag: "헌법·사법",
    status: "권력 감시",
    title: "대법관 재제청과 사법부 독립, 권력의 선을 감시합니다",
    summary: "대통령의 임명권, 대법원장의 제청권, 국회의 동의·탄핵권이 서로의 권한을 삼키지 않는지 살핍니다.",
    link: "/columns/majority-power-must-not-command-the-judiciary",
  },
  {
    tag: "수사·법치",
    status: "제도 점검",
    title: "검찰청 폐지 뒤 수사권력은 어디로 이동하는가",
    summary: "조직의 이름이 아니라 경찰·중수청으로 이동하는 권력이 시민의 권리와 자유를 침해하지 않는지 점검합니다.",
    link: "/briefings/prosecution-service-abolition",
  },
];

export const proposalItems: CitizenProposalItem[] = [
  {
    tag: "돌봄·생활",
    status: "시민제안 예시",
    perspective: "맞벌이 부모 관점",
    title: "방학이 되면 돌봄도 멈춥니다—동네별 돌봄 공백 지도를 만들어 주세요",
    summary: "맞벌이 부모에게 방학은 매번 비상입니다. 신청 가능한 돌봄교실과 지역아동센터, 운영시간, 남은 자리를 한곳에서 볼 수 없어 전화를 돌리다 포기할 때가 많습니다. 동네별 돌봄 공백을 먼저 공개하고, 저녁과 방학에 비는 시간부터 연결해 주세요.",
    nextStep: "한 개 자치구를 정해 기관별 운영시간·대상·정원·대기 인원을 같은 형식으로 공개하는 지도를 시험합니다.",
  },
  {
    tag: "소상공인·행정",
    status: "시민제안 예시",
    perspective: "동네 자영업자 관점",
    title: "지원사업 공고를 찾아다니는 것도 사장 몫입니까? 한 장으로 비교해 주세요",
    summary: "가게 문을 열고 장사하기도 바쁜데 구청, 공단, 진흥원 홈페이지를 따로 찾아다녀야 합니다. 막상 공고를 찾으면 자격과 제출서류가 제각각이라 신청 전에 지칩니다. 지원금을 더 만들기 전에 대상, 금액, 자부담, 마감일을 한 장에서 비교할 수 있게 해 주세요.",
    nextStep: "지역 내 소상공인 지원사업을 모아 공통 항목의 주간 비교표를 만들고, 실제 신청자에게 이해하기 쉬운지 확인합니다.",
  },
  {
    tag: "생활예산·책임",
    status: "시민제안 예시",
    perspective: "예산 감시 주민 관점",
    title: "보도블록을 또 뜯는 이유, 현장 QR로 예산과 보증기간을 공개해 주세요",
    summary: "같은 길을 다시 파는 공사를 보면 정말 필요한 공사인지 시민은 알기 어렵습니다. 공사 안내판에 사업명만 적지 말고 예산, 교체 사유, 시공업체, 하자보증 기간과 담당 부서를 QR로 공개해 주세요. 문제가 생기면 사진으로 남기고 처리 결과도 확인할 수 있어야 합니다.",
    nextStep: "반복 민원이 많은 보행로 한 곳에서 공개 항목과 신고·처리 기록을 연결한 QR 안내판을 시범 운영합니다.",
  },
];
