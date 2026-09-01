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
    tag: "재정 투명성",
    status: "제안 초안",
    title: "지방정부 재정을 한 장으로 비교하는 시민 재정표를 공개합시다",
    summary: "채무·지방채·기금 차입·상환계획·의무지출·구조조정 규모를 같은 기준으로 정기 공개하도록 제안합니다.",
    nextStep: "경기도 사례를 기준으로 공개 항목과 시민용 표준안을 설계합니다.",
  },
  {
    tag: "사법 독립",
    status: "제안 검토",
    title: "대법관 제청 협의의 절차와 이견을 기록하는 공개 기준이 필요합니다",
    summary: "헌법기관 사이의 비공개 관행에만 기대지 않고 후보 기준·협의 시점·이견 처리 원칙을 제도화하도록 제안합니다.",
    nextStep: "헌법 제104조와 과거 제청 관행을 비교해 최소 공개 기준을 정리합니다.",
  },
  {
    tag: "정책 성과",
    status: "시민 제안",
    title: "정부 지원사업은 참여자 수보다 6개월·12개월 뒤 결과를 공개합시다",
    summary: "청년 일자리와 복지사업 등에서 단순 참여 인원보다 취업·근속·소득·삶의 변화가 공개되도록 제안합니다.",
    nextStep: "성과 공개가 필요한 주요 정책을 선정해 공통 지표를 만듭니다.",
  },
];
