import type { PublicInterestWatchCase } from "./publicInterestWatch";

export const northKoreanPowsProtectionTracker: PublicInterestWatchCase = {
  slug: "north-korean-pows-protection-tracker",
  organization: { ko: "한국 정부·우크라이나 대통령실", en: "South Korean government · Ukrainian presidential office" },
  eyebrow: { ko: "북한군 포로·한국행 이후의 보호", en: "North Korean POWs · Protection after transfer" },
  title: {
    ko: "북한군 포로 2명 한국행, 이제 두 사람의 삶은 누가 지키나",
    en: "Two North Korean POWs reached South Korea. Who protects their choices now?",
  },
  summary: {
    ko: "쿠르스크에서 생포된 두 병사의 한국행이 성사됐습니다. 이송 발표의 공개 범위를 둘러싼 양국의 설명은 엇갈립니다. 씨앗은 신원과 가족을 보호하면서도 당사자의 의사, 보호결정과 정착의 선택권이 어떻게 보장되는지 날짜별로 기록합니다.",
    en: "Two soldiers captured in Russia's Kursk region have reached South Korea. Seoul and Kyiv disagree over whether disclosure breached a confidentiality agreement. This tracker follows how their wishes, family safety, protection decisions and freedom to settle are handled, without exposing their identities.",
  },
  status: { ko: "한국행 확인·보호 절차 확인 중", en: "Transfer confirmed · Protection under review" },
  publishedAt: "2026-09-28",
  updatedAt: "2026-09-28",
  continuationEligible: false,
  heroImage: {
    src: "/images/monitoring/north-korean-pows-protection-tracker.webp",
    alt: { ko: "빈 의자 두 개와 열린 문을 담아 보호와 선택을 상징한 이미지", en: "Two empty chairs and an open doorway symbolize protection and choice" },
    caption: { ko: "두 사람의 신원과 실제 소재를 묘사하지 않은 상징 이미지입니다.", en: "A symbolic scene that does not depict the men or their location." },
    credit: { ko: "AI 이미지", en: "AI image" },
  },
  displayMode: "layered",
  snapshot: {
    conclusion: {
      ko: "포로 두 명의 한국행은 성사됐습니다. 이제 쟁점은 어느 기관이 어떤 근거로 보호를 결정하고, 조사와 정착 과정에서 두 사람의 뜻을 어떻게 존중하는가입니다.",
      en: "The two POWs have reached South Korea. The question now is which authorities decide their protection, on what grounds, and how the men's wishes shape investigation and settlement.",
    },
    keyFacts: [
      { ko: "두 사람은 2025년 1월 러시아 쿠르스크에서 우크라이나군에 생포됐고 한국행 의사를 밝혔습니다.", en: "Ukrainian forces captured the two men in Russia's Kursk region in January 2025; they later said they wanted to go to South Korea." },
      { ko: "젤렌스키 대통령은 2026년 9월 23일 유엔총회에서 한국 이송을 발표했고, 한국 정부는 우크라이나와 협의해 왔다고 밝혔습니다.", en: "President Volodymyr Zelenskyy announced the transfer at the UN on September 23, 2026; Seoul said it had worked with Kyiv." },
      { ko: "우크라이나 대통령실은 직접 협의를 확인하고 러시아의 반복적 인도 요청 주장은 부인했습니다.", en: "Ukraine's presidential office confirmed direct talks with Seoul and denied claims that Russia had repeatedly sought custody of the men." },
    ],
    tracking: [
      { ko: "개인 정보를 제외한 보호결정의 법적 근거와 담당 기관이 공개되는가", en: "Whether Seoul identifies the legal basis and decision-making authority without disclosing personal data" },
      { ko: "조사·치료·정착 과정에 당사자의 의사와 가족의 안전이 반영되는가", en: "Whether the men's wishes and their families' safety shape investigation, care and settlement" },
      { ko: "이송 발표의 비공개 합의 여부에 공식 기록이 제시되는가", en: "Whether either side produces a record clarifying the disputed confidentiality agreement" },
    ],
  },
  keyChanges: [
    { date: "2026-09-26", text: { ko: "우크라이나 대통령실 보좌관은 이송 사실을 비공개하기로 한 합의가 없었다고 주장했습니다. 이재명 대통령의 24일 ‘비공개 합의 위반’ 주장과 충돌합니다. 합의 문안은 공개되지 않았습니다.", en: "A Ukrainian presidential aide said there had been no agreement to keep the transfer secret, contradicting President Lee Jae Myung's September 24 account. No agreement text has been released." } },
    { date: "2026-09-24", text: { ko: "우크라이나 대통령실은 한국과 직접 대화해 이송했다고 설명하고, 러시아의 반복적 인도 요청설은 부인했습니다. 러시아와의 포로 교환 대가가 있었다는 공개 근거는 없습니다.", en: "Ukraine's presidential office described direct talks with Seoul and denied repeated Russian requests for the men. There is no public evidence of a prisoner-exchange payment or bargain." } },
    { date: "2026-09-23", text: { ko: "젤렌스키 대통령의 유엔총회 발표로 쟁점이 우크라이나에서의 송환 위험에서 한국 입국 이후의 보호와 선택권으로 옮겨갔습니다.", en: "Zelenskyy's UN announcement shifted the immediate issue from possible repatriation out of Ukraine to protection and personal choice after arrival in South Korea." } },
  ],
  issues: [
    {
      title: { ko: "무엇을 비공개로 해야 하나", en: "What should remain confidential?" },
      claim: { ko: "이재명 대통령은 우크라이나가 이송 사실의 비공개 합의를 어겼으며 외교·안보와 신변 안전상 비공개가 타당했다고 말했습니다.", en: "President Lee said Ukraine violated an agreement to keep the transfer confidential and argued secrecy was warranted for diplomatic and safety reasons." },
      response: { ko: "우크라이나 대통령실 보좌관은 그런 비공개 합의가 없었다고 반박했습니다. 양측이 합의한 정확한 공개 범위를 보여주는 문서는 나오지 않았습니다.", en: "A Ukrainian presidential aide denied any such confidentiality agreement. Neither side has released a document establishing its exact scope." },
      assessment: { ko: "두 사람의 이름·거처·이동 경로와 북한 가족의 정보는 보호할 이유가 있습니다. 정부는 그런 정보를 뺀 채 적용 법률과 보호결정 절차를 설명할 수 있습니다.", en: "There are sound reasons to protect names, whereabouts, travel details and family information. Seoul can still explain the legal basis and decision process without exposing those details." },
      status: "contested",
    },
    {
      title: { ko: "한국에 온 뒤 누구의 선택인가", en: "Whose choice governs life after arrival?" },
      claim: { ko: "두 사람은 언론 인터뷰와 편지 등으로 한국행 의사를 밝혔고, 한국 정부도 수용 의사를 표시했습니다.", en: "The men expressed a wish to go to South Korea through interviews and letters; Seoul said it would receive POWs who chose that destination." },
      response: { ko: "한국 입국 뒤 어떤 보호 방식이 적용되고 조사와 정착 과정에서 의사를 어떻게 확인하는지는 공개적으로 확정되지 않았습니다.", en: "The precise protection arrangements and how the men can exercise choice during investigation and settlement have not been publicly settled." },
      assessment: { ko: "한국행은 본인의 뜻을 반영한 성과입니다. 그 뜻은 도착과 함께 끝나지 않습니다. 치료와 조사에 필요한 보호가 생활 전반의 무기한 통제로 바뀌는지, 법적 근거와 결정 절차를 확인해야 합니다.", en: "The transfer respected their expressed wishes. Those wishes still matter after arrival. The legal grounds and review process will show whether necessary protection becomes open-ended control over everyday life." },
      status: "pending",
    },
  ],
  timeline: [
    { date: "2026-09-26", title: { ko: "우크라이나 대통령실 보좌관, 비공개 합의 부인", en: "Ukrainian presidential aide denies confidentiality agreement" }, description: { ko: "드미트로 리트빈 보좌관은 이송 사실을 숨기기로 한 합의가 없었다고 밝혔습니다. 한국 대통령의 주장과 다른 설명이며 합의 문서는 공개되지 않았습니다.", en: "Aide Dmytro Lytvyn said there was no agreement to hide the transfer, contradicting the South Korean president's account. The agreement has not been made public." }, change: { ko: "공개 범위의 설명 충돌", en: "Conflicting accounts of disclosure" }, status: "new", sources: [{ publisher: { ko: "동아일보", en: "The Dong-A Ilbo" }, title: { ko: "북한군 포로 송환 비공개 합의 여부 논쟁", en: "Dispute over confidentiality of POW transfer" }, url: "https://www.donga.com/news/Inter/article/all/20260926/134733715/1", publishedAt: "2026-09-26", kind: "article" }] },
    { date: "2026-09-24", title: { ko: "이 대통령, 공개에 유감 표명", en: "President Lee criticizes disclosure" }, description: { ko: "이 대통령은 비공개 합의를 어기고 공개했다며 신변 안전과 한반도 정세를 이유로 들었습니다. 당사자의 개인정보와 이송 경로는 한국 정부가 공개하지 않았습니다.", en: "Lee said the announcement breached a confidentiality agreement and cited personal safety and Korean Peninsula security. Seoul withheld the men's personal details and travel route." }, change: { ko: "공개를 둘러싼 외교 논쟁", en: "Diplomatic disagreement over disclosure" }, status: "response", sources: [{ publisher: { ko: "연합뉴스", en: "Yonhap" }, title: { ko: "이 대통령, 우크라의 비공개 합의 위반 주장", en: "Lee says Ukraine broke a confidentiality agreement" }, url: "https://www.yna.co.kr/view/AKR20260924055000001", publishedAt: "2026-09-24", kind: "article" }] },
    { date: "2026-09-24", title: { ko: "우크라이나 대통령실, 한국과 직접 협의 확인", en: "Kyiv confirms direct talks with Seoul" }, description: { ko: "우크라이나 대통령실은 이송이 한국과의 직접 대화를 통해 진행됐다고 밝혔고 러시아가 두 사람의 인도를 반복 요구했다는 말은 사실이 아니라고 했습니다.", en: "Ukraine's presidential office said the transfer resulted from direct talks with Seoul and denied claims that Russia had repeatedly asked for the men." }, change: { ko: "이송 경위 확인", en: "Transfer process clarified" }, status: "confirmed", sources: [{ publisher: { ko: "연합뉴스", en: "Yonhap" }, title: { ko: "우크라, 북한군 포로 한국행은 한국과 직접 대화", en: "Ukraine says POW transfer followed direct talks with South Korea" }, url: "https://www.yna.co.kr/amp/view/AKR20260924050500109", publishedAt: "2026-09-24", kind: "article" }] },
    { date: "2026-09-23", title: { ko: "젤렌스키 대통령, 유엔에서 한국 이송 발표", en: "Zelenskyy announces transfer at the UN" }, description: { ko: "젤렌스키 대통령은 북한군 포로 두 명을 최근 한국에 보냈다고 밝혔습니다. 한국 정부는 관련국과의 협의 사실을 설명하면서 당사자와 가족의 안전을 이유로 입국 세부 사항은 밝히지 않았습니다.", en: "Zelenskyy said Ukraine had recently sent two North Korean POWs to South Korea. Seoul described its consultations but withheld arrival details for the men's and families' safety." }, change: { ko: "한국행 확인", en: "Transfer disclosed" }, status: "confirmed", sources: [{ publisher: { ko: "연합뉴스", en: "Yonhap" }, title: { ko: "우크라전 참전 북한군 포로 2명 한국행", en: "Two captured North Korean soldiers reach South Korea" }, url: "https://www.yna.co.kr/view/AKR20260924005554109", publishedAt: "2026-09-24", kind: "article" }] },
    { date: "2026-06-23", title: { ko: "한국 외교부, 본인 의사에 따른 수용 입장", en: "Seoul says it will accept POWs who choose South Korea" }, description: { ko: "외교부는 우크라이나에 잡힌 북한군 포로가 한국행을 선택하면 수용하겠다고 밝혔습니다.", en: "The Foreign Ministry said South Korea would accept North Korean POWs captured by Ukraine if they chose to come." }, change: { ko: "수용 원칙 확인", en: "Reception policy stated" }, status: "confirmed", sources: [{ publisher: { ko: "로이터", en: "Reuters" }, title: { ko: "한국, 원한다면 북한군 포로 수용", en: "South Korea to accept North Korean POWs if they wish" }, url: "https://www.reuters.com/world/asia-pacific/south-korea-accept-all-north-korean-pows-ukraine-if-they-desire-ministry-says-2026-06-23/", publishedAt: "2026-06-23", kind: "article" }] },
    { date: "2026-02-26", title: { ko: "휴먼라이츠워치, 강제송환 위험 경고", en: "Human Rights Watch warns against forced return" }, description: { ko: "두 사람이 한국행을 원하며 북한에 돌아가면 중대한 인권침해 위험에 처할 수 있다고 경고했습니다. 국제적십자위원회의 제네바협약 해설도 본국에서 기본권 침해의 실제 위험이 있을 때 송환 의무에 예외를 둡니다.", en: "The group reported that both men wanted to go to South Korea and warned of grave abuse if returned north. It cited the ICRC commentary allowing an exception to repatriation where a POW faces a real risk of fundamental-rights violations at home." }, change: { ko: "당사자 의사와 인권 원칙", en: "Personal wishes and protection principle" }, status: "confirmed", sources: [{ publisher: { ko: "휴먼라이츠워치", en: "Human Rights Watch" }, title: { ko: "북한군 포로 두 명의 강제송환 우려", en: "Two North Korean POWs fear forced return" }, url: "https://www.hrw.org/news/2026/02/26/a-year-on-two-north-korean-pows-in-ukraine-fear-forced-return", publishedAt: "2026-02-26", kind: "article" }] },
  ],
  sourceBasis: {
    ko: "2026년 9월 28일 오전까지 공개된 연합뉴스·로이터·동아일보 보도와 휴먼라이츠워치의 제네바협약 해설 인용을 대조했습니다. 한국 입국 사실과 보호 방식의 확정 여부를 구분했습니다. 양국의 비공개 합의 문안은 공개되지 않았으며 당사자의 신원·거처·가족 정보는 재현하지 않습니다.",
    en: "Checked against Yonhap, Reuters, The Dong-A Ilbo and Human Rights Watch material available by the morning of September 28, 2026. Arrival is established; the final protection arrangements are not public. No confidentiality agreement text has been released. Identities, whereabouts and family details are omitted.",
  },
  confirmedFacts: [
    { ko: "두 사람은 한국행을 원한다고 밝혔고 한국·우크라이나의 협의 끝에 한국에 왔습니다.", en: "The men said they wanted to go to South Korea and arrived after consultations between Seoul and Kyiv." },
    { ko: "우크라이나 대통령실은 러시아가 이들의 인도를 반복 요구했다는 주장을 부인했습니다.", en: "Ukraine's presidential office denied that Russia repeatedly requested custody of the men." },
    { ko: "정부는 당사자와 가족의 안전을 이유로 입국 경로와 현재 소재를 공개하지 않았습니다.", en: "Seoul withheld arrival details and current whereabouts, citing the men's and families' safety." },
  ],
  questions: [
    { ko: "보호결정은 어떤 법률에 따라 어느 기관이 내립니까?", en: "Which law and institution govern the protection decision?" },
    { ko: "조사와 치료, 정착 과정에서 당사자가 선택하고 이의를 제기할 절차는 무엇입니까?", en: "How can the men exercise choice or challenge decisions during investigation, care and settlement?" },
  ],
  proposals: [
    { ko: "개인 정보와 가족의 안전을 가리면서 법적 보호 원칙과 결정 절차는 설명합니다.", en: "Explain the legal protection principles and process without exposing the men or their families." },
    { ko: "보호조치의 목적과 기간, 의료·심리·법률 지원에 대한 접근을 당사자에게 명확히 알립니다.", en: "Make the purpose and duration of protection and access to medical, psychological and legal assistance clear to the men." },
  ],
  followUpChecks: [
    { ko: "보호결정의 근거 법률·담당 기관과 결정 시점", en: "The law, authority and date of the protection decision" },
    { ko: "조사와 정착에서 당사자의 의사를 확인하고 반영하는 절차", en: "The procedure for seeking and respecting the men's wishes through investigation and settlement" },
    { ko: "비공개 합의에 관한 양국의 공식 기록 또는 정정 설명", en: "Any official record or correction addressing the confidentiality dispute" },
  ],
  nextCheck: {
    ko: "개인 정보를 공개하지 않은 채 보호결정의 근거와 담당 기관이 설명되는지 확인합니다. 비공개 합의 논쟁은 당사자의 안전 조치와 구분해 양국의 공식 기록으로 대조합니다.",
    en: "Check whether Seoul explains the legal basis and decision-making authority without identifying the men. Assess the confidentiality dispute against official records while keeping it separate from immediate safety measures.",
  },
  relatedContents: [{
    href: "/briefings/north-korean-pows-south-korea-zelensky-un",
    label: { ko: "시민브리핑 · 깊게 읽기", en: "Civic briefing · Deep read" },
    title: { ko: "북한군 포로 두 명은 한국에 왔다. 이제 무엇을 지켜야 하나", en: "Two North Korean POWs are in South Korea. What must be protected now?" },
    summary: { ko: "한국행까지의 경위와 가족 보호, 정착의 선택권을 풀어 읽습니다.", en: "A deeper account of the transfer, family safety and the men's freedom to shape their lives." },
    date: "2026-09-25",
  }],
  sources: [
    { label: { ko: "연합뉴스 · 북한군 포로 두 명 한국행 (9.24)", en: "Yonhap · Two North Korean POWs arrive in South Korea (Sep. 24)" }, url: "https://www.yna.co.kr/view/AKR20260924005554109" },
    { label: { ko: "연합뉴스 · 우크라이나 대통령실의 직접 협의 설명 (9.24)", en: "Yonhap · Ukrainian presidential office on direct talks (Sep. 24)" }, url: "https://www.yna.co.kr/amp/view/AKR20260924050500109" },
    { label: { ko: "연합뉴스 · 이 대통령의 비공개 합의 주장 (9.24)", en: "Yonhap · President Lee's confidentiality claim (Sep. 24)" }, url: "https://www.yna.co.kr/view/AKR20260924055000001" },
    { label: { ko: "동아일보 · 우크라이나 측의 상반된 주장 (9.26)", en: "The Dong-A Ilbo · Conflicting Ukrainian account (Sep. 26)" }, url: "https://www.donga.com/news/Inter/article/all/20260926/134733715/1" },
    { label: { ko: "로이터 · 한국 외교부의 수용 입장 (6.23)", en: "Reuters · South Korean Foreign Ministry's reception policy (Jun. 23)" }, url: "https://www.reuters.com/world/asia-pacific/south-korea-accept-all-north-korean-pows-ukraine-if-they-desire-ministry-says-2026-06-23/" },
    { label: { ko: "휴먼라이츠워치 · 강제송환 위험과 제네바협약 해설 (2.26)", en: "Human Rights Watch · Forced-return risk and Geneva Convention commentary (Feb. 26)" }, url: "https://www.hrw.org/news/2026/02/26/a-year-on-two-north-korean-pows-in-ukraine-fear-forced-return" },
  ],
};
