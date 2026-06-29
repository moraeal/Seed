export const whyCards = [
  { number: "01", title: "작아진 시민", description: "거대한 정치와 제도 사이에서 시민의 생활 문제와 목소리가 쉽게 사라지고 있습니다." },
  { number: "02", title: "멀어진 공익", description: "공익기관과 정책사업이 시민의 이름으로 만들어졌지만 실제 시민에게 충분히 설명되지 않는 경우가 많습니다." },
  { number: "03", title: "진영화된 공론장", description: "사회문제가 시민의 질문으로 숙의되기보다 진영의 구호와 정쟁으로 소비되고 있습니다." },
  { number: "04", title: "새로운 시민운동의 필요", description: "이제는 분노와 동원만이 아니라 질문, 기록, 브리핑, 실험, 환류의 시민운동이 필요합니다." },
];

export const seedPrinciples = [
  { code: "S", english: "Subject", title: "주체성", description: "시민은 공익의 수혜자나 동원의 대상이 아니라, 문제를 발견하고 질문하는 주체입니다." },
  { code: "E", english: "Ethics", title: "윤리성", description: "자유는 책임과 함께 작동하며, 시민운동은 상대를 파괴하는 것이 아니라 공공성을 세우는 태도에서 출발합니다." },
  { code: "E", english: "Evolution", title: "진화성", description: "완성된 답을 강요하지 않고 현장의 경험에서 배우며, 작은 실험을 통해 계속 수정하고 성장합니다." },
  { code: "D", english: "Duty", title: "책임성", description: "문제 제기에서 끝나지 않고 대안, 실행, 기록, 후속 점검까지 이어지는 시민문화를 지향합니다." },
];

export const activities = [
  { title: "시민질문", description: "생활 속 불편과 사회적 쟁점을 시민의 질문으로 올립니다." },
  { title: "시민브리핑", description: "복잡한 사회문제를 시민의 언어로 해석하고 쟁점을 정리합니다." },
  { title: "씨앗공론장", description: "진영의 언어가 아니라 동료시민의 언어로 토론하는 공간을 만듭니다." },
  { title: "시민실험", description: "작은 제안을 실제 프로젝트로 실행하고 결과를 기록합니다." },
  { title: "공익감시 데이터", description: "공익기관, 위원회, 재단, 정책사업의 결과를 시민 관점에서 살펴봅니다." },
  { title: "씨앗캠페인", description: "시민의 작은 문제의식이 사회적 영향력으로 확장되도록 캠페인을 기획합니다." },
];

export const processSteps = [
  { title: "발견", description: "시민이 생활 속 문제와 사회적 쟁점을 발견합니다." },
  { title: "제안", description: "문제의식을 시민제안으로 올리고 동료시민과 공유합니다." },
  { title: "브리핑", description: "운영진과 전문가가 쟁점, 사실관계, 공공성의 의미를 정리합니다." },
  { title: "공론과 실험", description: "토론으로 해법을 찾고 작은 시민실험으로 가능성을 확인합니다." },
  { title: "공익화", description: "결과를 정책 제안, 제도 개선, 시민자산과 감시 데이터로 연결합니다." },
];

export const differences = [
  { title: "생활 속 문제에서 시작합니다", before: "거대 담론과 정치 의제 중심", after: "시민의 작은 불편과 질문에서 출발" },
  { title: "성찰의 공론을 중시합니다", before: "분노와 감정적 결집", after: "사실 확인, 쟁점 정리, 숙의와 기록" },
  { title: "시민에게 돌아온 결과를 묻습니다", before: "기관과 제도의 설립으로 완료", after: "시민의 삶에 생긴 변화까지 점검" },
  { title: "동료시민 플랫폼을 지향합니다", before: "전문 활동가 중심", after: "시민, 전문가, 단체, 기업, 후원자의 협력" },
];

export const organizationUnits = [
  { title: "시민언어센터", description: "자유와 책임, 공공성의 가치를 시민의 언어로 해석하고 콘텐츠화합니다." },
  { title: "시민브리핑 편집팀", description: "시사 현안과 시민제안을 팩트체크, 토론, 브리핑 콘텐츠로 정리합니다." },
  { title: "시민실험 지원팀", description: "좋은 제안을 작은 프로젝트로 실행할 수 있도록 기획과 연결을 지원합니다." },
  { title: "공익감시 데이터랩", description: "공익기관, 위원회, 정책사업의 예산과 성과를 시민 관점에서 기록합니다." },
  { title: "씨앗시민 네트워크", description: "시민제안자, 청년, 지역 시민, 전문가 파트너를 연결합니다." },
  { title: "후원자 신뢰 파트", description: "후원금 사용, 사업 결과, 시민실험 성과를 투명하게 공유합니다." },
];

export const participationTypes = [
  { title: "씨앗시민", description: "생활 속 문제를 발견하고 시민제안을 올립니다.", action: "참여하기" },
  { title: "시민검증단", description: "팩트체크와 자료 확인, 현장 기록에 참여합니다.", action: "자세히 보기" },
  { title: "전문가 파트너", description: "전문 영역에서 시민브리핑과 실험을 돕습니다.", action: "문의하기" },
  { title: "단체 파트너", description: "시민단체, 연구소, 지역모임이 협력 주체로 참여합니다.", action: "협력 제안" },
  { title: "기업·재단 후원자", description: "건강한 시민영역과 자유시민 생태계를 함께 세웁니다.", action: "후원 문의" },
];
