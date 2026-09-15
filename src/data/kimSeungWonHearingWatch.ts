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
  updatedAt: "2026-09-16",
  nextCheck: {
    ko: "경찰의 재수사 여부 결정, 11월 12일 오후 4시 관련 브로커·제넨셀 설립자 결심공판, 법제사법위원회의 인사청문경과보고서 채택 여부와 대통령의 임명 여부",
    en: "The police decision on whether to reinvestigate, the November 12, 4 p.m. closing hearing for the alleged broker and Genencell founder, whether the Legislation and Judiciary Committee adopts its hearing report, and whether the president proceeds with the appointment",
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
      date: "2026-09-15",
      text: {
        ko: "후보자 측은 소속 보좌진이 청문위원의 질의 자료를 촬영한 사실을 인정하고 사과했으며, 후보자의 지시나 관여는 없었다고 밝혔습니다.",
        en: "Kim's office acknowledged and apologized for a staff member photographing a committee member's questioning notes, while saying the nominee neither directed nor took part in it.",
      },
    },
    {
      date: "2026-09-15",
      text: {
        ko: "공개된 검찰 참고인 진술 보도에서 당시 식약처장 비서는 김 후보자의 문자를 ‘청탁성 메시지’로 인식했다고 밝혔습니다.",
        en: "Reporting on a prosecution witness statement says the food-safety chief's secretary regarded Kim's message as a request carrying the character of a solicitation.",
      },
    },
    {
      date: "2026-09-15",
      text: {
        ko: "관련 브로커와 제넨셀 설립자의 결심공판이 열렸지만 검찰 구형과 변론 종결 없이 11월 12일로 연기됐습니다.",
        en: "The closing hearing for the alleged broker and Genencell founder was held but postponed to November 12 without prosecutors seeking sentences or arguments closing.",
      },
    },
    {
      date: "2026-09-15",
      text: {
        ko: "증인·참고인 0명 상태로 인사청문회가 실제 개최됐습니다.",
        en: "The hearing went ahead with no witnesses or reference witnesses.",
      },
    },
    {
      date: "2026-09-14",
      text: {
        ko: "제넨셀 임상시험에서 신약 후보물질 또는 위약을 투여받은 참여자가 93명이었다는 사실이 보도됐습니다.",
        en: "Reporting established that 93 trial participants received either the Genencell treatment candidate or a placebo.",
      },
    },
    {
      date: "2026-09-15",
      text: {
        ko: "후보자는 식약처에 부당한 압력을 행사한 것이 아니라 지연된 민원 절차를 확인해 달라고 요청했을 뿐이라고 반박했습니다.",
        en: "The nominee denied improper pressure on the regulator and said he had only asked officials to check a delayed petition.",
      },
    },
    {
      date: "2026-09-15",
      text: {
        ko: "후보자는 가족 협동조합의 운영과 배우자의 급여는 학부모 조합원들이 결정하며 배우자에게 돌아갈 별도 이익은 없다고 해명했습니다.",
        en: "Kim said parent-members decide the cooperative's operations and his spouse's pay, and that no separate profit returns to her.",
      },
    },
  ],
  timeline: [
    {
      date: "2026-08-31",
      title: { ko: "법무부 장관 후보자로 지명", en: "Nominated as justice minister" },
      description: {
        ko: "김승원 후보자는 법무부 장관 후보자로 지명된 뒤 새로운 형사사법 체계의 안착과 법무부의 인권보호기관 역할 회복을 가장 시급한 소명으로 제시했습니다. 여당은 환영했지만 야당은 이재명 대통령의 재판과 공소 취소 문제를 거론하며 강한 검증을 예고했습니다.",
        en: "After being nominated as justice minister, Kim identified the transition to a new criminal-justice system and restoration of the ministry's human-rights role as his most urgent missions. The governing party welcomed the nomination, while the opposition signaled intense scrutiny over issues involving the president's trials and possible withdrawal of charges.",
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
        ko: "법무부에 인사청문회 준비단이 꾸려지면서 후보자의 재산·경력과 각종 의혹에 대한 자료 제출 및 검증 절차가 본격적으로 시작됐습니다. 지명 발표가 정치권의 평가 단계에서 국회의 공식 검증 단계로 넘어간 시점입니다.",
        en: "The Justice Ministry formed a hearing preparation team, beginning formal document submission and scrutiny of the nominee's assets, career and surrounding allegations. The nomination moved from initial political reaction into the National Assembly's formal review process.",
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
        ko: "후보자는 임상시험 승인 관련 민원을 식약처에 전달한 과정에서 더욱 신중했어야 했다고 밝혔습니다. 브로커로 지목된 양모 씨와 알고 지낸 사실도 인정했지만, 민원 처리 상황을 확인해 달라는 취지였을 뿐 승인 과정에 영향력을 행사하거나 부정한 청탁을 한 것은 아니라고 반박했습니다.",
        en: "Kim said he should have been more cautious when relaying a petition concerning clinical-trial approval and acknowledged knowing the woman described as a broker. He maintained that he had only asked officials to check the petition's status and denied exerting influence over approval or making an improper request.",
      },
      change: { ko: "후보자의 관계 인정과 첫 구체적 해명", en: "First detailed response acknowledging the relationship" },
      status: "response",
      sources: [
        {
          publisher: { ko: "SBS 뉴스", en: "SBS News" },
          title: { ko: "김승원 \"식약처 부정청탁 안 해\"…민원 전달은 신중했어야", en: "Kim denies improper request to regulator, says petition relay should have been more cautious" },
          url: "https://news.sbs.co.kr/news/endPage.do?cooper=GSTAND&news_id=N1008740610&plink=RSSLINK",
          publishedAt: "2026-09-07",
          thumbnailSrc: "https://img.sbs.co.kr/newimg/news/20260905/202219344_1280.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-09",
      title: { ko: "9월 15일 청문회 확정·증인 합의는 불발", en: "September 15 hearing set; no agreement on witnesses" },
      description: {
        ko: "국회 법제사법위원회는 9월 15일 인사청문회를 열기로 하고 실시계획을 확정했습니다. 그러나 야당이 임상시험 승인 민원과 가족 협동조합 의혹 등을 확인하기 위해 요구한 증인 44명과 참고인 4명에 대해서는 여야가 합의하지 못했습니다.",
        en: "The National Assembly's Legislation and Judiciary Committee confirmed its plan to hold the hearing on September 15. The parties failed, however, to agree on the opposition's request for 44 witnesses and four reference witnesses concerning the clinical-trial petition, family cooperative and other allegations.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "조선일보", en: "The Chosun Ilbo" },
          title: { ko: "김승원 증인·참고인 채택 사실상 무산…야당 ‘맹탕 청문회’", en: "Witness selection for Kim hearing effectively fails as opposition warns of a hollow hearing" },
          url: "https://www.chosun.com/politics/politics_general/2026/09/09/RGILLHFNK5B3JLUDJLOXK24AEE/",
          publishedAt: "2026-09-09",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-10",
      title: { ko: "증인·참고인 채택 최종 무산", en: "Witness requests lapse" },
      description: {
        ko: "증인 출석을 요구할 수 있는 법정 시한이 지나면서 44명의 증인과 4명의 참고인은 모두 채택되지 않았습니다. 이에 따라 청문회는 핵심 관계자의 증언이나 후보자 답변에 대한 교차검증 없이 후보자의 해명을 중심으로 진행되는 구조가 됐습니다.",
        en: "The statutory notice deadline passed with none of the 44 witnesses or four reference witnesses approved. The hearing was therefore set to proceed around the nominee's explanations, without testimony from central figures or witness-based cross-checking of his answers.",
      },
      change: { ko: "교차검증 없이 후보자 답변 중심으로 진행되는 구조 확정", en: "Hearing structure fixed around the nominee's answers without witness cross-checking" },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "동아일보", en: "The Dong-A Ilbo" },
          title: { ko: "김승원 청문회 증인 채택 결국 무산", en: "Witness selection for Kim's hearing ultimately fails" },
          url: "https://www.donga.com/news/Politics/article/all/20260910/134639508/2",
          publishedAt: "2026-09-10",
          thumbnailSrc: "https://dimg.donga.com/wps/NEWS/IMAGE/2026/09/10/134639811.1.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-14",
      title: { ko: "임상시험 참여자 93명 사실 보도", en: "Trial involved 93 participants" },
      description: {
        ko: "식약처 자료를 인용한 보도에서 2022년 국내 임상시험 참여자 93명이 제넨셀 치료제 후보물질 또는 위약을 투여받은 사실이 확인됐습니다. 이 숫자는 피해자 수가 아니라 전체 임상 참여자 수입니다. 식약처는 현재까지 중대한 약물이상반응은 보고되지 않았다고 밝혔습니다.",
        en: "Reporting based on regulator data found that 93 participants in a 2022 domestic trial received either the Genencell candidate or a placebo. The figure represents all trial participants, not a count of victims. The regulator said no serious adverse drug reactions had been reported to date.",
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
        ko: "인사청문회는 증인과 참고인 없이 열렸습니다. 야당은 임상시험 승인 민원과 가족 협동조합의 바우처 제공기관 지정 과정 등을 추궁했습니다. 후보자는 관련 의혹으로 심려를 끼친 데 송구하다고 밝혔지만, 식약처에는 지연된 민원 절차를 확인해 달라고 전달했을 뿐이며 제넨셀의 실험 결과 조작이나 주가조작에는 관여하지 않았다고 반박했습니다. 가족 협동조합에 대해서도 학부모 조합원들이 운영과 급여를 결정하고 배우자에게 돌아갈 별도 이익은 없다고 해명했습니다. 이 답변은 후보자의 해명이며, 증인 진술이나 관련 문서와의 교차검증은 이뤄지지 않았습니다.",
        en: "The hearing was held without witnesses or reference witnesses. The opposition questioned the clinical-trial petition and the designation of the family cooperative as a voucher provider. Kim apologized for causing public concern but said he had only asked officials to check a delayed petition and denied involvement in manipulated trial results or stock manipulation. He also said parent-members decide the cooperative's operations and pay and that no separate profit returns to his spouse. These were the nominee's explanations and were not cross-checked through witness testimony or related records.",
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
        {
          publisher: { ko: "아이뉴스24", en: "iNews24" },
          title: { ko: "여야, 법무장관 청문회 격돌…가족 협동조합 의혹 해명", en: "Parties clash at hearing as Kim addresses family-cooperative allegation" },
          url: "https://www.inews24.com/view/2005755",
          publishedAt: "2026-09-15",
          thumbnailSrc: "https://static.inews24.com/v1/a47c99080ad6ab.jpg",
          kind: "article",
        },
        {
          publisher: { ko: "데일리안", en: "Dailian" },
          title: { ko: "김승원, 제넨셀 실험 조작·주가조작 관여 부인", en: "Kim denies involvement in Genencell trial manipulation or stock manipulation" },
          url: "https://www.dailian.co.kr/news/view/1690738/",
          publishedAt: "2026-09-15",
          thumbnailSrc: "https://cdnimage.dailian.co.kr/news/202609/news_1789458303924_1690738_m_1.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-15",
      title: { ko: "식약처장 비서의 검찰 진술 내용 공개", en: "Prosecution statement by regulator chief's secretary reported" },
      description: {
        ko: "경향신문과 SBS는 2023년 검찰 참고인 조사 기록을 토대로, 당시 김강립 식약처장의 비서였던 공무원이 김 후보자의 문자를 ‘청탁성 메시지’로 인식했다고 진술했다고 보도했습니다. 보도된 기록에 따르면 김 후보자의 문자는 식약처장과 담당 실무진에게 전달됐고, 당시 비서는 김 전 처장이 ‘챙겨보되 다음부터는 이런 얘기가 나오지 않게 해 달라’는 취지로 지시했다고 담당 과장에게 알렸습니다. 다만 해당 비서는 김 전 처장의 정확한 지시는 기억나지 않는다고도 진술했습니다. 이는 참고인의 인식과 진술이며 위법성에 대한 사법 판단은 아닙니다. 김 후보자는 지연된 민원의 처리 상황을 확인해 달라는 요청이었을 뿐 부정한 청탁은 아니었다는 입장을 유지하고 있습니다.",
        en: "The Kyunghyang Shinmun and SBS reported, based on a 2023 prosecution witness statement, that a civil servant who served as the food-safety chief's secretary regarded Kim's message as carrying the character of a solicitation. According to the reported record, Kim's message was relayed to the chief and working-level officials, and the secretary told a division chief that the chief had instructed officials to review it while ensuring such a request would not recur. The secretary also said she could not remember the chief's exact instruction. This was a witness's account and interpretation, not a judicial finding of illegality. Kim continues to maintain that he sought only a check on a delayed petition, not improper influence.",
      },
      change: { ko: "민원 전달 경로와 당시 식약처 내부 인식이 수사기록 보도로 구체화", en: "Reporting adds detail on the message's internal route and how it was perceived inside the regulator" },
      status: "new",
      sources: [
        {
          publisher: { ko: "경향신문", en: "The Kyunghyang Shinmun" },
          title: { ko: "식약처장 비서, 검찰에 ‘국회의원 청탁은 김승원뿐’", en: "Regulator chief's secretary told prosecutors Kim was the only lawmaker to make such a request" },
          url: "https://www.khan.co.kr/article/202609151104001",
          publishedAt: "2026-09-15",
          thumbnailSrc: "https://img.khan.co.kr/news/2026/09/15/news-p.v1.20260915.0194fe8190cf456ab4f0fc43db4e8ffd_P1.jpg",
          kind: "article",
        },
        {
          publisher: { ko: "SBS 뉴스", en: "SBS News" },
          title: { ko: "‘청탁성 분명’ 비서 진술…남긴 메시지엔 ‘국부유출’ 언급", en: "Secretary described message as a solicitation; message mentioned preventing loss of national wealth" },
          url: "https://news.sbs.co.kr/amp/news.amp?news_id=N1008754197",
          publishedAt: "2026-09-15",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-15",
      title: { ko: "관련 브로커 재판, 결심 11월 12일로 연기", en: "Closing hearing in related broker case postponed to November 12" },
      description: {
        ko: "서울서부지법은 제넨셀 임상시험 승인 청탁과 정치후원금 500만 원 제공 약속 혐의로 기소된 브로커 양모 씨와 제넨셀 설립자 강모 씨의 공판을 열었지만, 예정했던 검찰 구형과 변론 종결을 진행하지 않았습니다. 재판부는 강씨의 별도 배임·횡령 사건 항소심 선고가 미뤄진 점을 확인한 뒤 두 사람의 결심공판을 11월 12일 오후 4시로 연기했습니다. 따라서 이날 재판에서는 후보자와 관련한 새로운 법원의 판단이 나오지 않았으며, 쟁점의 사법적 확인은 다음 기일 이후로 미뤄졌습니다.",
        en: "The Seoul Western District Court convened a hearing for the alleged broker and Genencell founder, who are charged over a request for clinical-trial approval and a promised KRW 5 million political donation, but did not proceed with the planned sentencing requests or close arguments. After noting that judgment in the founder's separate breach-of-trust and embezzlement appeal had been delayed, the court postponed the closing hearing to 4 p.m. on November 12. No new judicial finding concerning the nominee emerged that day, leaving judicial clarification of the dispute for a later date.",
      },
      change: { ko: "예정됐던 구형·변론 종결 없이 다음 결심공판 일정만 확정", en: "Only a new closing-hearing date was set; planned sentencing requests and closing arguments did not occur" },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "머니투데이", en: "MoneyToday" },
          title: { ko: "'김승원 신약 청탁 의혹' 브로커 재판 10분 만에 끝나", en: "Broker trial in Kim drug-petition case ends in under 10 minutes" },
          url: "https://www.mt.co.kr/amp/society/2026/09/15/2026091516262841540",
          publishedAt: "2026-09-15",
          kind: "article",
        },
        {
          publisher: { ko: "뉴스핌", en: "NewsPim" },
          title: { ko: "김승원 '신약 청탁' 브로커 양씨, 법원 출석…각종 의혹 '묵묵부답'", en: "Alleged broker in Kim drug-petition case appears in court and declines comment" },
          url: "https://www.newspim.com/news/view/20260915001246",
          publishedAt: "2026-09-15",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-15",
      title: { ko: "보좌진의 청문위원 자료 촬영, 후보자 측 사과", en: "Nominee's office apologizes after staff member photographs committee notes" },
      description: {
        ko: "청문회 도중 김 후보자 의원실 보좌진이 주진우 국민의힘 의원이 검토하던 질의 자료를 촬영한 사실이 중계 화면과 후보자 측 입장으로 확인됐습니다. 김 후보자 측은 부적절한 처신이었다며 사과하고, 해당 직원이 잘못을 인지한 뒤 사진을 삭제했으며 엄중히 조치하겠다고 밝혔습니다. 다만 후보자를 비롯한 누구도 촬영을 지시하거나 관여하지 않았다고 설명했습니다. 촬영 사실과 후보자 측 사과는 확인됐지만, 주 의원이 주장한 조직적 ‘사찰’ 여부나 촬영물이 다른 사람에게 전달됐는지는 확인되지 않았습니다.",
        en: "Broadcast footage and a statement from Kim's office confirmed that a member of his parliamentary staff photographed questioning material being reviewed by People Power Party lawmaker Joo Jin-woo during the hearing. Kim's office apologized for the inappropriate conduct, said the staff member deleted the image after recognizing the mistake and promised disciplinary action. It also said neither Kim nor anyone else directed or participated in the act. The photographing and apology are established, but Joo's claim of organized surveillance and whether the image was shared have not been verified.",
      },
      change: { ko: "후보자 측이 촬영 사실을 인정하고 공식 사과", en: "Kim's office acknowledges the photograph and issues an apology" },
      status: "new",
      sources: [
        {
          publisher: { ko: "이데일리", en: "Edaily" },
          title: { ko: "‘청문회 중 도촬 논란’ 김승원 측 ‘주진우에게 진심으로 사과’", en: "Kim's office apologizes to Joo over photographing controversy during hearing" },
          url: "https://www.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=05733446645580448",
          publishedAt: "2026-09-15",
          thumbnailSrc: "https://image.edaily.co.kr/images/photo/files/NP/S/2026/09/PS26091501610.jpg",
          kind: "article",
        },
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: { ko: "김승원 보좌진 ‘주진우 촬영’ 논란…후보자 측 사과", en: "Kim's staff photographed Joo's notes; nominee's office apologizes" },
          url: "https://www.yna.co.kr/amp/view/AKR20260915089652001",
          publishedAt: "2026-09-15",
          kind: "article",
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
        ko: "민원 전달 사실과 후보자가 양모 씨와 알고 지냈다는 점은 확인됐습니다. 공개된 검찰 참고인 진술 보도에 따르면 당시 식약처장 비서는 해당 문자를 청탁성 메시지로 인식했고, 문자는 담당 실무진까지 전달됐습니다. 그러나 이는 참고인의 진술이며 위법성이나 승인 결정에 미친 영향을 확정한 법원 판단은 아닙니다.",
        en: "The petition and Kim's acquaintance with the woman are established. Reporting on a prosecution witness statement says the regulator chief's secretary regarded the message as a solicitation and that it reached working-level officials. This remains a witness account, however, not a court finding that the contact was illegal or affected approval.",
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
        ko: "후보자는 협동조합이 발달장애 학부모들이 만든 조직이며 운영과 배우자의 급여·근로조건도 학부모 조합원들이 결정한다고 밝혔습니다. 배우자에게 돌아갈 별도 이익은 없고 가족기업도 아니라고 반박했습니다.",
        en: "Kim said the cooperative was formed by parents of children with developmental disabilities and that parent-members decide its operations and his spouse's pay and working conditions. He denied that it generates a separate profit for his spouse or operates as a family business.",
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
    { ko: "후보자가 식약처에 임상시험 승인 관련 민원을 전달한 사실과 양모 씨를 알고 지낸 사실은 후보자의 설명으로 확인됐습니다.", en: "The nominee acknowledged relaying a clinical-trial approval petition to the regulator and knowing the woman associated with the request." },
    { ko: "식약처 자료를 인용한 보도에 따르면 제넨셀 임상시험 참여자 93명은 치료제 후보물질 또는 위약을 투여받았습니다.", en: "According to reporting based on regulator data, 93 Genencell trial participants received either the treatment candidate or a placebo." },
    { ko: "식약처는 현재까지 중대한 약물이상반응이 보고되지 않았다고 밝혔습니다.", en: "The regulator said no serious adverse drug reactions had been reported to date." },
    { ko: "경향신문과 SBS가 보도한 검찰 참고인 조사 기록에 따르면 김 후보자의 문자는 당시 식약처장과 담당 실무진에게 전달됐습니다.", en: "According to the prosecution witness record reported by The Kyunghyang Shinmun and SBS, Kim's message was relayed to the regulator chief and working-level officials." },
    { ko: "김 후보자 측은 소속 보좌진이 청문위원의 질의 자료를 촬영한 사실을 인정하고 사과했으며, 후보자의 지시나 관여는 없었다고 밝혔습니다.", en: "Kim's office acknowledged and apologized for a staff member photographing a committee member's questioning material, while stating that the nominee did not direct or participate in it." },
  ],
  currentControversies: [
    {
      title: { ko: "식약처 민원 전달이 어디까지 영향을 미쳤나", en: "How much influence did the petition relay have?" },
      description: {
        ko: "후보자는 지연된 민원 절차를 확인해 달라고 했을 뿐이라고 설명합니다. 반면 공개된 검찰 참고인 진술 보도에서 당시 식약처장 비서는 이 문자를 청탁성으로 인식했다고 밝혔습니다. 문자가 담당 실무진까지 전달된 경로는 구체화됐지만, 이것이 임상시험 승인 판단에 실제 영향을 미쳤는지와 법적으로 부정한 청탁에 해당하는지는 아직 확인되지 않았습니다.",
        en: "Kim says he only asked officials to check a delayed petition. Reporting on a prosecution witness statement says the regulator chief's secretary regarded the message as a solicitation. The route by which it reached working-level officials is now clearer, but whether it affected approval or legally constituted an improper request remains unresolved.",
      },
    },
    {
      title: { ko: "증인 없는 청문회로 해명이 충분히 검증됐나", en: "Could a witness-free hearing adequately test the explanations?" },
      description: {
        ko: "후보자는 청문회에서 직접 해명했지만 관련 당사자는 한 명도 증언대에 서지 않았습니다. 야당의 44명 요구가 과도했는지와 별개로, 핵심 관계자 몇 명이라도 불러 답변을 대조했어야 한다는 논란은 남아 있습니다.",
        en: "Kim responded directly at the hearing, but no relevant party testified. Separate from whether the opposition's request for 44 witnesses was excessive, controversy remains over the failure to call even a small number of central figures for cross-checking.",
      },
    },
    {
      title: { ko: "가족 협동조합 지정 과정에 특혜가 있었나", en: "Was there preferential treatment for the family cooperative?" },
      description: {
        ko: "바우처 제공기관 지정 과정과 관련한 녹취와 야당의 의혹 제기는 공개됐습니다. 후보자는 학부모 조합원들이 운영과 급여를 결정하고 배우자에게 돌아갈 별도 이익은 없다고 반박했습니다. 그러나 다른 신청기관과 다른 절차가 적용됐는지, 후보자의 영향력이 작용했는지, 실제 위법이나 특혜가 있었는지는 관련 문서와 관계자 증언으로 확인되지 않았습니다.",
        en: "A recording and opposition allegations concerning the cooperative's designation as a voucher provider are public. Kim responded that parent-members decide operations and pay and that no separate profit returns to his spouse. Records and testimony have not established whether different procedures were applied, whether Kim exercised influence, or whether any illegality or preferential treatment occurred.",
      },
    },
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
  sources: [
    {
      label: { ko: "연합뉴스 — 김승원 법무부 장관 후보자 지명과 청문회 준비", en: "Yonhap — Nomination and hearing preparations" },
      url: "https://www.yna.co.kr/view/AKR20260901183300004",
    },
    {
      label: { ko: "SBS — 후보자의 민원 전달·브로커 관계 해명", en: "SBS — Nominee's response on the petition and acquaintance" },
      url: "https://news.sbs.co.kr/news/endPage.do?cooper=GSTAND&news_id=N1008740610&plink=RSSLINK",
    },
    {
      label: { ko: "조선일보 — 증인·참고인 채택 사실상 무산", en: "The Chosun Ilbo — Witness and reference-witness selection effectively fails" },
      url: "https://www.chosun.com/politics/politics_general/2026/09/09/RGILLHFNK5B3JLUDJLOXK24AEE/",
    },
    {
      label: { ko: "동아일보 — 증인·참고인 채택 최종 무산", en: "The Dong-A Ilbo — Witness and reference-witness selection ultimately fails" },
      url: "https://www.donga.com/news/Politics/article/all/20260910/134639508/2",
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
    {
      label: { ko: "아이뉴스24 — 가족 협동조합 의혹에 대한 후보자 해명", en: "iNews24 — Nominee's response on the family-cooperative allegation" },
      url: "https://www.inews24.com/view/2005755",
    },
    {
      label: { ko: "데일리안 — 제넨셀 실험·주가조작 관여 부인", en: "Dailian — Denial of involvement in Genencell trial and stock manipulation" },
      url: "https://www.dailian.co.kr/news/view/1690738/",
    },
    {
      label: { ko: "경향신문 — 식약처장 비서의 검찰 참고인 진술", en: "The Kyunghyang Shinmun — Prosecution witness statement by the regulator chief's secretary" },
      url: "https://www.khan.co.kr/article/202609151104001",
    },
    {
      label: { ko: "SBS — 식약처 내부 전달 경로와 비서 진술", en: "SBS — Internal relay of the message and the secretary's statement" },
      url: "https://news.sbs.co.kr/amp/news.amp?news_id=N1008754197",
    },
    {
      label: { ko: "머니투데이 — 관련 브로커·제넨셀 설립자 결심공판 연기", en: "MoneyToday — Closing hearing postponed in related broker and Genencell founder case" },
      url: "https://www.mt.co.kr/amp/society/2026/09/15/2026091516262841540",
    },
    {
      label: { ko: "뉴스핌 — 관련 재판 다음 기일 11월 12일 오후 4시", en: "NewsPim — Next hearing set for November 12 at 4 p.m." },
      url: "https://www.newspim.com/news/view/20260915001246",
    },
    {
      label: { ko: "이데일리 — 청문위원 자료 촬영에 대한 후보자 측 사과", en: "Edaily — Nominee's office apologizes over photographing committee notes" },
      url: "https://www.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=05733446645580448",
    },
    {
      label: { ko: "연합뉴스 — 보좌진 촬영 사실과 후보자 측 해명", en: "Yonhap — Staff photograph and nominee office's response" },
      url: "https://www.yna.co.kr/amp/view/AKR20260915089652001",
    },
  ],
};
