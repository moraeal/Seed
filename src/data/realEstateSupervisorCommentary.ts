import type { LegislativeCommentary } from "./legislativeCommentaries";

export const realEstateSupervisorCommentary: LegislativeCommentary = {
  slug: "real-estate-supervisor-september-bill", billNo: "2221573", date: "2026-09-29", readMinutes: 6,
  heroSrc: "images/columns/real-estate-supervisor/family-home-papers.webp",
  inlineImage: { src: "images/columns/real-estate-supervisor/administrative-review.webp", afterSection: 1, alt: { ko: "거래자료를 검토하는 행정 담당자의 연출 이미지", en: "Illustration of an official reviewing transaction documents" }, caption: { ko: "조사가 시작됐다는 사실만으로 위법이 입증되지는 않는다.", en: "Opening an inquiry does not establish wrongdoing." } },
  relatedExplainer: { href: "/briefings/real-estate-supervisor-bill-2221573-explained", title: { ko: "법안 해설: 조사권과 금융정보 요구의 범위", en: "Bill explainer: inquiry powers and financial information" } },
  sources: [{ label: { ko: "법제처 국민참여입법센터 · 부동산감독원 설치 및 운영에 관한 법률안 제2221573호", en: "Official proposal summary · Real Estate Supervisor Bill 2221573" }, url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221573/detailRP" }],
  editions: {
    ko: {
      title: "감독원에 계좌를 볼 권한까지 맡길 것인가",
      subtitle: "부동산감독원법 재발의안 논평 · 김현정 의원 등 18인 발의",
      summary: "불법거래를 찾겠다는 이유로 새 기관에 직권조사와 금융거래정보 요구권을 함께 준다. 조사·수사 정보 분리만으로 정상 거래자의 권리가 지켜지는 것은 아니다. 착수 기준, 요청 범위, 통지와 이의제기를 법률에서 정해야 한다.",
      keyPoints: ["의안 2221573은 9월 23일 발의돼 28일 정무위에 회부됐다. 아직 시행 법률이 아니다.", "관계기관 조정에 더해 감독원의 직접 조사·수사와 금융정보 요구를 제안한다.", "시민에게 필요한 것은 막연한 비밀보호 약속보다 조사 착수와 자료 요구를 다툴 수 있는 절차다."],
      heroAlt: "계약서와 자금 서류를 보며 대화하는 주택 구입 부부의 연출 이미지", heroCaption: "집을 사기 위해 대출과 가족 간 차용을 함께 쓰는 일은 그 자체로 불법의 단서가 아니다.",
      sections: [
        { title: "불법거래 단속의 필요가 새 권한의 범위를 대신할 수 없다", paragraphs: ["허위계약과 편법증여, 부정청약은 정직하게 집을 구하는 사람에게도 피해를 준다. 국토교통부·국세청·금융당국과 지방자치단체의 자료가 흩어져 있다면 연계가 필요하다. 9월 재발의안은 여기서 더 나아가 국무총리 소속 감독원이 사건을 직접 조사하고 수사할 수 있게 한다.", "신고와 기관 이첩, 거래신고 분석 외에 직권조사 경로도 둔다. 기존 기관이 넘긴 단서를 확인하는 역할과 새 기관이 스스로 사건을 여는 역할은 다르다. 사건 수와 처리 지연, 놓친 위법거래를 먼저 공개해야 새 기관이 필요한 이유를 검증할 수 있다."] },
        { title: "계좌의 문턱은 정확히 써야 한다", paragraphs: ["공개된 제안 요지는 금융회사 특정 점포에 금융거래정보를 요구할 수 있다고 적는다. 거래 자료를 확인할 필요는 있지만, 계좌에는 거래 상대뿐 아니라 가족의 자금 사정과 사적인 지출도 담긴다. 의심의 정도와 대상 계좌·기간·자료 종류가 법률에 분명해야 한다.", "집을 산 부부가 부모에게 빌린 돈을 차용증과 이체 기록으로 설명했다고 하자. 조사 끝에 위법이 없다면 누가 조회 사실을 알리고, 잘못된 정보는 언제 지우며, 같은 의심이 다시 따라붙지 않게 할 것인가. 공개 요지만으로는 이 절차가 충분한지 판단할 수 없다."], quote: "조사받은 시민이 무혐의를 증명한 뒤에도 기록 속 의심을 안고 살게 해서는 안 된다." },
        { title: "내부 분리와 시민의 통제는 서로 다른 장치다", paragraphs: ["법안은 조사와 수사 부서 사이 정보교류를 막고 별도 정보관리체계를 두며 전환심의위원회를 설치하려 한다. 2월 앞선 안을 고친 흔적이다. 그러나 내부 장벽이 시민에게 자료 요구를 통지하거나, 과도한 범위를 이의제기할 권리를 자동으로 만들어주지는 않는다.", "국회는 직권조사의 객관적 문턱, 금융정보 요청의 승인·기록·통지·불복, 무혐의 자료의 파기와 외부 감사 기준을 조문으로 확인해야 한다. 위법거래 적발 건수만큼 정상 거래자가 불필요한 조사를 받은 건수도 공개해야 한다."] },
      ],
      chart: { title: "권한과 시민 통제를 함께 묻는 세 가지 질문", description: "공개 제안 요지를 기준으로 본 심사 쟁점", headers: ["쟁점", "제안된 권한·장치", "국회가 확인할 기준"], rows: [["착수", "신고·이첩·분석과 직권조사", "직권조사의 객관적 요건과 기록"], ["금융정보", "특정 점포에 거래정보 요구", "대상·기간·승인·사후통지"], ["정보 통제", "조사·수사 정보 분리와 심의", "무혐의 자료 파기·이의제기·외부감사"]], note: "제안 요지에 의거한 편집상 비교. 의안 전문을 별도로 검토하지 않아 세부 조문 판단은 유보한다.", afterSection: 1 },
      sourceNote: "2026년 9월 29일 공식 제안 요지와 국회 진행 상태 기준. 의안 전문을 별도로 검토하지 않아 조문별 예외와 제한은 확인되지 않았다. 부부 사례는 가상이다.",
    },
    en: {
      title: "Should a New Property Supervisor See Buyers' Bank Records?", subtitle: "Opinion on Bill 2221573, introduced by Rep. Kim Hyun-jung and 17 others",
      summary: "The revised proposal gives a new agency both own-initiative inquiry powers and access to financial records. Internal separation of inquiry and criminal-investigation data is no substitute for statutory thresholds, limited requests, notice and a way for lawful buyers to challenge a demand.",
      keyPoints: ["Bill 2221573 was introduced September 23 and referred to the National Policy Committee September 28; it is not in force.", "The proposed supervisor would coordinate agencies and investigate and request financial information directly.", "Citizens need reviewable thresholds and remedies, not only a general assurance that information will be protected."],
      heroAlt: "A couple reviewing home purchase and financing documents", heroCaption: "Using a bank loan and documented family borrowing to buy a home is not itself evidence of wrongdoing.",
      sections: [
        { title: "The need to catch illegal trades does not define a new agency's limits", paragraphs: ["False contracts, disguised gifts and improper housing applications hurt honest buyers. Fragmented records across existing authorities may call for coordination. The September bill goes further: it would give a supervisor under the prime minister its own inquiry and criminal-investigation functions.", "It could start from reports, referrals and transaction data, or initiate an inquiry itself. Checking a lead from another agency differs from opening a case independently. Parliament should publish missed cases, delays and costs before judging whether a new institution is needed."] },
        { title: "The threshold for accessing an account must be written precisely", paragraphs: ["The public summary permits requests for transaction information from a specified financial branch. Accounts can reveal family finances and private spending beyond the transaction in question. The required suspicion, accounts, period and types of record must be tightly defined.", "Suppose buyers document a loan from a parent and are cleared. Who tells them what was examined, deletes an erroneous flag and prevents it from following them? The public summary does not establish whether the procedures are adequate."], quote: "Cleared buyers should not have to live with an unresolved suspicion in an official record." },
        { title: "An internal firewall is different from a citizen's remedy", paragraphs: ["The bill proposes a barrier between inquiry and criminal-investigation units, separate information systems and a review committee. These measures address concerns about the earlier February version, but do not by themselves give a person notice or the right to contest an overbroad demand.", "Parliament should set objective triggers for self-initiated cases, approval and notice for financial requests, deletion of cleared cases and external audits. Publish unnecessary inquiries alongside illegal trades detected."] },
      ],
      chart: { title: "Three tests for powers and public control", description: "Questions raised by the published proposal summary", headers: ["Issue", "Proposed power or safeguard", "Question for Parliament"], rows: [["Opening a case", "Reports, referrals, analysis and own initiative", "Objective trigger and record"], ["Financial data", "Request records from a specified branch", "Scope, approval and later notice"], ["Information control", "Separated units and review", "Deletion, challenge and outside audit"]], note: "Editorial comparison from the summary; clause-level limits require the complete bill text.", afterSection: 1 },
      sourceNote: "Based on the official public summary and status on September 29, 2026. The attached full bill was not separately reviewed. The couple is hypothetical.",
    },
  },
};
