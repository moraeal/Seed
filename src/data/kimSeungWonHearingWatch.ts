import type { PublicInterestWatchCase } from "./publicInterestWatch";

export const kimSeungWonHearingWatch: PublicInterestWatchCase = {
  slug: "kim-seung-won-confirmation-hearing",
  organization: { ko: "김승원 법무부 장관 후보자 인사청문회", en: "Confirmation hearing of Justice Minister nominee Kim Seung-won" },
  eyebrow: { ko: "인사청문회·시민의 검증권", en: "Confirmation hearing · Citizens' right to scrutiny" },
  title: {
    ko: "증인 없는 청문회에서 의혹은 어디까지 검증됐나",
    en: "How far could scrutiny go in a hearing with no witnesses?",
  },
  summary: {
    ko: "김승원 법무부 장관 후보자 지명 이후 제넨셀 임상시험 승인 민원, 증인 채택 무산, 가족 협동조합 의혹과 후보자의 해명까지 흩어진 사실을 시간순으로 연결합니다. 확인된 사실과 정치권의 주장, 아직 남은 질문을 구분해 청문경과보고서와 임명 여부까지 계속 기록합니다.",
    en: "This record connects the nomination of Justice Minister nominee Kim Seung-won, the Genencell clinical-trial petition, the failure to call witnesses, questions involving a family cooperative and the nominee's responses. It separates verified facts, political claims and unresolved questions, and will continue through the committee report and appointment decision.",
  },
  status: { ko: "청문회 개최·후속 확인 중", en: "Hearing held · Follow-up under way" },
  openedAt: "2026-08-31",
  updatedAt: "2026-09-15",
  nextCheck: {
    ko: "법제사법위원회의 인사청문경과보고서 채택 여부와 대통령의 임명 여부",
    en: "Whether the Legislation and Judiciary Committee adopts its hearing report and whether the president proceeds with the appointment",
  },
  heroImage: {
    src: "images/briefings/briefing-10-empty-witness-seats.webp",
    alt: {
      ko: "증인 없이 진행된 인사청문회를 상징하는 비어 있는 증인석",
      en: "Empty witness seats symbolizing a confirmation hearing held without witnesses",
    },
    caption: {
      ko: "증인이 없으면 후보자의 답변을 관계자의 증언과 대조할 교차검증 통로도 사라집니다.",
      en: "Without witnesses, lawmakers lose a central route for testing the nominee's answers against testimony from relevant people.",
    },
    credit: { ko: "씨앗의 소리 AI 제작 이미지", en: "AI-assisted image by SEED VOICE" },
  },
  sourceBasis: {
    ko: "국회 청문회 일정과 의결 기록, 후보자와 여야의 공개 발언, 식품의약품안전처 자료를 인용한 보도를 날짜별로 대조했습니다. 의혹 제기와 후보자의 반박은 확인된 사실과 분리해 기록했습니다.",
    en: "This timeline cross-checks National Assembly schedules and decisions, public statements from the nominee and both parties, and reporting based on Ministry of Food and Drug Safety records. Allegations and the nominee's rebuttals are kept separate from verified facts.",
  },
  keyChanges: [
    {
      ko: "증인·참고인 0명 상태로 9월 15일 인사청문회가 실제 개최됐습니다.",
      en: "The hearing went ahead on September 15 with no witnesses or reference witnesses.",
    },
    {
      ko: "제넨셀 임상시험에서 신약 또는 위약을 투여받은 참여자가 93명이었다는 사실이 새롭게 보도됐습니다.",
      en: "New reporting established that 93 trial participants received either the Genencell treatment candidate or a placebo.",
    },
    {
      ko: "후보자는 청문회에서 식약처에 부당한 압력을 행사한 것이 아니라 지연된 민원 절차를 확인해 달라고 요청했을 뿐이라고 반박했습니다.",
      en: "At the hearing, the nominee denied improper pressure on the regulator and said he had only asked officials to check a delayed petition.",
    },
    {
      ko: "가족 협동조합의 바우처 기관 지정 과정과 관련한 녹취가 청문회 당일 공개돼 새로운 확인 과제가 생겼습니다.",
      en: "A recording released on the day of the hearing raised a new question about the designation of a family cooperative as a voucher-service provider.",
    },
  ],
  timeline: [
    {
      date: "2026-08-31",
      title: { ko: "법무부 장관 후보자로 지명", en: "Nominated as justice minister" },
      description: {
        ko: "김승원 후보자는 새로운 형사사법 체계의 안착을 가장 시급한 소명으로 제시했습니다.",
        en: "Kim described the transition to a new criminal-justice system as his most urgent mission.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "SBS 뉴스", en: "SBS News" },
          title: { ko: "새 형사법 안착이 소명…김승원 법무부 장관 후보자 지명", en: "Kim nominated as justice minister, pledges transition to new criminal-law system" },
          url: "https://www.youtube.com/watch?v=THahJu6anZg",
          publishedAt: "2026-08-31",
          thumbnailSrc: "https://i.ytimg.com/vi/THahJu6anZg/hqdefault.jpg",
          kind: "video",
        },
      ],
    },
    {
      date: "2026-09-03",
      title: { ko: "인사청문회 준비단 출범", en: "Hearing preparation team begins work" },
      description: {
        ko: "법무부에 준비단이 꾸려지고 후보자 검증 절차가 본격적으로 시작됐습니다.",
        en: "The Justice Ministry formed a preparation team as formal scrutiny began.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: { ko: "김승원 법무부 장관 후보자 지명과 인사청문회 준비", en: "Kim Seung-won nomination and hearing preparations" },
          url: "https://www.yna.co.kr/view/AKR20260901183300004",
          publishedAt: "2026-09-03",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-07",
      title: { ko: "후보자, 민원 전달의 신중함과 브로커 친분 언급", en: "Nominee addresses the petition and acknowledges an acquaintance" },
      description: {
        ko: "후보자는 임상 승인 관련 민원 전달에 더욱 신중했어야 했다고 밝혔고, 브로커로 지목된 양모 씨와 알고 지낸 사실을 인정했습니다. 다만 부정한 청탁은 없었다고 반박했습니다.",
        en: "Kim said he should have been more cautious when relaying the clinical-trial petition and acknowledged knowing the woman described as a broker, while denying any improper request.",
      },
      change: { ko: "후보자의 관계 인정과 첫 구체적 해명", en: "First detailed response acknowledging the relationship" },
      status: "response",
      sources: [
        {
          publisher: { ko: "MBC 뉴스데스크", en: "MBC Newsdesk" },
          title: { ko: "후보자, 민원 전달의 신중함과 브로커 친분 언급", en: "Nominee addresses the petition and acknowledges an acquaintance" },
          url: "https://imnews.imbc.com/replay/2026/nwdesk/article/6850172_37004.html",
          publishedAt: "2026-09-07",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-09",
      title: { ko: "9월 15일 청문회 확정·증인 합의는 불발", en: "September 15 hearing set; no agreement on witnesses" },
      description: {
        ko: "법제사법위원회는 청문회 실시계획을 확정했지만, 야당이 요구한 증인 44명과 참고인 4명에 대해 여야가 합의하지 못했습니다.",
        en: "The committee confirmed the hearing plan but the parties failed to agree on the opposition's request for 44 witnesses and four reference witnesses.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "MBC 뉴스", en: "MBC News" },
          title: { ko: "청문회 일정 확정…증인·참고인 채택은 여야 합의 불발", en: "Hearing date set as parties fail to agree on witnesses" },
          url: "https://imnews.imbc.com/replay/2026/nwdesk/article/6851006_37004.html",
          publishedAt: "2026-09-09",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-10",
      title: { ko: "증인·참고인 채택 최종 무산", en: "Witness requests lapse" },
      description: {
        ko: "법정 출석 요구 시한이 지나면서 청문회는 증인과 참고인 없이 열리게 됐습니다.",
        en: "The statutory notice deadline passed, leaving the hearing to proceed without witnesses or reference witnesses.",
      },
      change: { ko: "교차검증 없이 후보자 답변 중심으로 진행되는 구조 확정", en: "Hearing structure fixed around the nominee's answers without witness cross-checking" },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "MBC 뉴스", en: "MBC News" },
          title: { ko: "증인 44명·참고인 4명 채택 무산", en: "Requests for 44 witnesses and four reference witnesses fail" },
          url: "https://imnews.imbc.com/replay/2026/nwdesk/article/6851006_37004.html",
          publishedAt: "2026-09-10",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-14",
      title: { ko: "임상시험 참여자 93명 사실 보도", en: "Trial involved 93 participants" },
      description: {
        ko: "식약처 자료를 인용한 보도에서 2022년 국내 임상시험 참여자 93명이 제넨셀 치료제 후보물질 또는 위약을 투여받은 사실이 확인됐습니다. 식약처는 현재까지 중대한 약물이상반응은 보고되지 않았다고 밝혔습니다.",
        en: "Reporting based on regulator data found that 93 participants in a 2022 domestic trial received either the Genencell candidate or a placebo. The regulator said no serious adverse drug reactions had been reported to date.",
      },
      change: { ko: "논쟁이 승인 절차를 넘어 실제 인체 임상 범위로 확대", en: "The dispute expands from the approval process to the scale of the human trial" },
      status: "new",
      sources: [
        {
          publisher: { ko: "SBS 뉴스", en: "SBS News" },
          title: { ko: "제넨셀 임상시험 참여자 93명과 청문회 쟁점", en: "Ninety-three Genencell trial participants and the hearing issues" },
          url: "https://news.sbs.co.kr/news/endPage.do?newsId=N1008752902",
          publishedAt: "2026-09-14",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-15",
      title: { ko: "증인 0명으로 인사청문회 개최", en: "Hearing held with zero witnesses" },
      description: {
        ko: "야당은 임상시험 승인 민원과 가족 협동조합 등을 추궁했고, 후보자는 지연된 절차를 확인해 달라는 민원 전달이었을 뿐 부당한 개입은 없었다고 반박했습니다.",
        en: "The opposition questioned the clinical-trial petition and the family cooperative. Kim said he merely relayed a request to check a delayed procedure and denied improper intervention.",
      },
      change: { ko: "예정됐던 증인 없는 청문회가 실제로 진행", en: "The planned witness-free hearing takes place" },
      status: "new",
      sources: [
        {
          publisher: { ko: "국회방송", en: "National Assembly TV" },
          title: { ko: "김승원 법무부 장관 후보자 인사청문회 생중계", en: "Kim Seung-won confirmation hearing live coverage" },
          url: "https://www.youtube.com/watch?v=5C1fnWXbMvs",
          publishedAt: "2026-09-15",
          thumbnailSrc: "https://i.ytimg.com/vi/5C1fnWXbMvs/hqdefault.jpg",
          kind: "video",
        },
      ],
    },
    {
      date: "다음",
      title: { ko: "청문경과보고서와 임명 여부 확인", en: "Committee report and appointment decision" },
      description: {
        ko: "법제사법위원회가 경과보고서를 채택하는지, 미채택 시 대통령이 재송부를 요청하거나 임명을 강행하는지 확인합니다.",
        en: "SEED will track whether the committee adopts its report and, if it does not, whether the president requests reconsideration or proceeds with the appointment.",
      },
      status: "pending",
    },
  ],
  issues: [
    {
      title: { ko: "제넨셀 임상시험 승인 민원", en: "Genencell clinical-trial petition" },
      claim: {
        ko: "야당은 후보자가 브로커의 요청을 받아 식약처 승인 과정에 영향력을 행사했다는 의혹을 제기했습니다.",
        en: "The opposition alleges that Kim used his influence with the regulator after receiving a request through a broker.",
      },
      response: {
        ko: "후보자는 지연된 공익 민원 절차를 확인해 달라고 전달했을 뿐 승인 과정에 부당하게 개입하지 않았다고 반박했습니다.",
        en: "Kim says he only asked officials to check a delayed public-interest petition and did not improperly intervene in approval.",
      },
      assessment: {
        ko: "민원 전달 사실과 후보자가 양모 씨와 알고 지냈다는 점은 확인됐습니다. 전달의 적절성과 실제 영향력 행사는 양측 주장이 충돌합니다.",
        en: "The petition and Kim's acquaintance with the woman are established. The propriety and effect of his intervention remain contested.",
      },
      status: "contested",
    },
    {
      title: { ko: "증인·참고인 채택", en: "Witness selection" },
      claim: {
        ko: "야당은 핵심 관계자의 증언 없이는 후보자의 해명을 교차검증할 수 없다고 주장했습니다.",
        en: "The opposition argued that the nominee's account could not be tested without testimony from central figures.",
      },
      response: {
        ko: "여당은 44명 요구가 과도하고 관련 수사가 기소유예로 종결됐다는 점 등을 들어 채택에 응하지 않았습니다.",
        en: "The governing party said the request for 44 witnesses was excessive and pointed to the earlier prosecutorial disposition of the case.",
      },
      assessment: {
        ko: "44명과 참고인 4명은 모두 채택되지 않았고 9월 15일 청문회는 증인·참고인 0명으로 열렸습니다.",
        en: "None of the 44 witnesses or four reference witnesses was approved, and the September 15 hearing proceeded with none.",
      },
      status: "confirmed",
    },
    {
      title: { ko: "임상시험 참여자 93명", en: "Ninety-three trial participants" },
      claim: {
        ko: "야당은 승인 자료의 누락·조작 의혹이 제기된 상황에서 인체 대상 임상이 진행된 경위를 검증해야 한다고 주장했습니다.",
        en: "The opposition says the human trial requires scrutiny because allegations had been raised about omitted or manipulated approval data.",
      },
      response: {
        ko: "후보자는 임상시험의 진행 과정을 알지 못했고 관여하지 않았다고 밝혔습니다. 식약처는 중대한 약물이상반응이 보고되지 않았다고 설명했습니다.",
        en: "Kim says he did not know about or participate in the conduct of the trial. The regulator says no serious adverse drug reactions were reported.",
      },
      assessment: {
        ko: "93명은 치료제 후보물질 또는 위약을 투여받은 전체 참여자 수입니다. 이를 후보자의 책임이나 피해 인원으로 곧바로 해석할 수는 없습니다.",
        en: "The figure covers all participants who received either the candidate or placebo. It cannot itself be treated as a count of harmed people or proof of Kim's responsibility.",
      },
      status: "confirmed",
    },
    {
      title: { ko: "가족 협동조합의 기관 지정", en: "Designation of the family cooperative" },
      claim: {
        ko: "야당은 후보자 배우자가 운영한 협동조합이 바우처 제공기관으로 지정되는 과정에서 편의를 받았다는 녹취를 근거로 특혜 의혹을 제기했습니다.",
        en: "The opposition cites a recording to allege preferential treatment when a cooperative run by Kim's spouse was designated as a voucher provider.",
      },
      response: {
        ko: "협동조합 측과 수원시의 자료, 후보자의 최종 해명을 추가로 확인해야 합니다.",
        en: "Records from the cooperative and Suwon City, as well as the nominee's full response, still need to be checked.",
      },
      assessment: {
        ko: "녹취 공개와 의혹 제기는 확인됐지만 실제 절차 위반이나 특혜 여부는 아직 확인되지 않았습니다.",
        en: "The recording and allegation are public, but a procedural violation or preferential treatment has not been established.",
      },
      status: "pending",
    },
  ],
  confirmedFacts: [
    { ko: "김승원 후보자 인사청문회는 2026년 9월 15일 증인·참고인 없이 개최됐습니다.", en: "Kim Seung-won's confirmation hearing was held on September 15, 2026 without witnesses or reference witnesses." },
    { ko: "국민의힘은 증인 44명과 참고인 4명을 요구했으며 최종적으로 모두 채택되지 않았습니다.", en: "The People Power Party requested 44 witnesses and four reference witnesses; none was approved." },
    { ko: "식약처 자료를 인용한 보도에 따르면 제넨셀 임상시험 참여자 93명은 치료제 후보물질 또는 위약을 투여받았습니다.", en: "According to reporting based on regulator data, 93 Genencell trial participants received either the treatment candidate or a placebo." },
  ],
  questions: [
    { ko: "핵심 관계자 한두 명의 증언조차 없이 후보자의 해명을 충분히 교차검증할 수 있었습니까?", en: "Could the nominee's account be adequately tested without testimony from even one or two central figures?" },
    { ko: "식약처에 전달된 요청의 내용과 처리 경로, 승인 판단에 미친 영향은 관련 문서로 확인할 수 있습니까?", en: "Can records establish what was relayed to the regulator, how it was processed and whether it affected approval?" },
    { ko: "가족 협동조합의 제공기관 지정 과정에서 다른 신청기관과 다른 편의나 절차가 적용됐습니까?", en: "Did the family cooperative receive procedural accommodation unavailable to other applicants?" },
    { ko: "청문경과보고서는 어떤 확인 사실과 미해소 의혹을 구분해 기록합니까?", en: "Will the committee report distinguish verified facts from allegations that remain unresolved?" },
  ],
  proposals: [
    { ko: "여야가 요구 인원 전체를 놓고 대치하기보다 핵심 증인과 정치공세성 증인을 구분하는 최소 합의 절차를 마련합니다.", en: "Create a minimum-agreement process that distinguishes central witnesses from politically performative requests instead of bargaining over an all-or-nothing list." },
    { ko: "후보자별 증인·참고인 신청, 채택, 출석과 자료 제출 현황을 국회가 표준화해 공개합니다.", en: "The National Assembly should publish standardized nominee-level records of requested, approved and attending witnesses and document submissions." },
    { ko: "청문회 이후 경과보고서와 임명 결과까지 하나의 공개 기록으로 연결합니다.", en: "Connect the hearing, committee report and final appointment decision in a single public record." },
  ],
  caution: {
    ko: "임상시험 참여자 93명은 치료제 후보물질 또는 위약을 투여받은 전체 참여자 수입니다. 중대한 약물이상반응이 보고되지 않았다는 식약처 설명도 함께 확인해야 합니다. 이 수치를 피해자 수나 후보자의 책임으로 단정해서는 안 됩니다. 가족 협동조합 관련 녹취 역시 실제 특혜나 위법행위의 확정 증거는 아닙니다.",
    en: "The 93 figure covers all participants receiving either the candidate or placebo, and must be read alongside the regulator's statement that no serious adverse drug reactions were reported. It is not a victim count or proof of the nominee's responsibility. The family-cooperative recording likewise does not by itself establish preferential treatment or illegality.",
  },
  relatedContents: [
    {
      href: "/briefings/confirmation-hearings-zero-witnesses",
      label: { ko: "관련 씨앗브리핑", en: "Related civic briefing" },
      title: { ko: "청문회 80%가 증인 0명—이쯤 가면 막 하자는 겁니까", en: "Zero Witnesses in Nearly 80% of Hearings—Has Scrutiny Collapsed?" },
      summary: {
        ko: "2026년 6월까지 열린 총리·국무위원 후보자 청문회 24건을 국회 공식 기록으로 직접 대조한 씨앗브리핑입니다.",
        en: "SEED's briefing cross-checking 24 prime-ministerial and ministerial hearings held through June 2026 against National Assembly records.",
      },
      date: "2026-09-13",
    },
  ],
  sources: [
    {
      label: { ko: "연합뉴스 — 김승원 법무부 장관 후보자 지명과 청문회 준비", en: "Yonhap — Nomination and hearing preparations" },
      url: "https://www.yna.co.kr/view/AKR20260901183300004",
    },
    {
      label: { ko: "MBC — 후보자의 민원 전달·브로커 관계 해명", en: "MBC — Nominee's response on the petition and acquaintance" },
      url: "https://imnews.imbc.com/replay/2026/nwdesk/article/6850172_37004.html",
    },
    {
      label: { ko: "MBC — 증인 44명·참고인 4명 채택 무산", en: "MBC — Failure to approve 44 witnesses and four reference witnesses" },
      url: "https://imnews.imbc.com/replay/2026/nwdesk/article/6851006_37004.html",
    },
    {
      label: { ko: "SBS — 임상시험 참여자 93명과 청문회 쟁점", en: "SBS — Ninety-three trial participants and the hearing issues" },
      url: "https://news.sbs.co.kr/news/endPage.do?newsId=N1008752902",
    },
    {
      label: { ko: "국회방송 — 김승원 후보자 인사청문회 생중계", en: "National Assembly TV — Live hearing coverage" },
      url: "https://www.youtube.com/watch?v=5C1fnWXbMvs",
      note: { ko: "2026년 9월 15일 법제사법위원회 전체회의", en: "Legislation and Judiciary Committee meeting, September 15, 2026" },
    },
  ],
};
