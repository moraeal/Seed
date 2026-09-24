import type { PublicInterestWatchCase } from "./publicInterestWatch";

export const olympicParkElectionProtestTracker: PublicInterestWatchCase = {
  slug: "olympic-park-election-protest-tracker",
  organization: {
    ko: "올림픽공원 시민들은 왜 아직 떠나지 않았나",
    en: "Why have the citizens at Olympic Park still not left?",
  },
  eyebrow: {
    ko: "투표용지 부족·재선거 요구·선관위 특검",
    en: "Ballot shortage · Re-election demand · Special investigation",
  },
  title: {
    ko: "올공 100일, 투표지는 모자랐고 불신은 남았다",
    en: "100 days at Olympic Park: ballots ran short, distrust remained",
  },
  summary: {
    ko: "제9회 전국동시지방선거에서 발생한 투표용지 부족 사태 뒤 시민들은 올림픽공원에 농성장을 꾸리고 재선거, 당일투표, 수개표를 요구해 왔다. 이 기록은 확인된 선거관리 실패와 특검 수사 대상, 아직 입증되지 않은 부정선거 주장을 구분해 추적한다.",
    en: "After ballot shortages disrupted Korea's ninth nationwide local elections, citizens established a protest camp at Olympic Park demanding a new election, same-day voting and hand counting. This tracker separates confirmed election-management failures, matters under special investigation and fraud claims that remain unproven.",
  },
  status: {
    ko: "특검 수사 진행·현장 시위 계속",
    en: "Special investigation active · Protest continuing",
  },
  openedAt: "2026-06-03",
  publishedAt: "2026-09-18",
  updatedAt: "2026-09-24",
  sourceBasis: {
    ko: "선거관리위원회 조사 결과를 인용한 보도, 선거소송 심리와 결정, 선관위 특검법과 압수수색 보도, 올림픽공원 현장 보도를 교차 확인했다. 사실·수사 중인 의혹·확인되지 않은 주장을 같은 층위에 놓지 않았다.",
    en: "This record cross-checks reporting on the election commission's findings, election-litigation proceedings, the special-prosecutor law and searches, and coverage from the Olympic Park site. Confirmed facts, allegations under investigation and unverified claims are kept distinct.",
  },
  caution: {
    ko: "투표용지 부족과 투표 중단은 확인된 선거관리 실패다. 그러나 조직적인 개표 조작, 외국 세력 개입, 선거 전체가 조작됐다는 주장은 현재까지 법원이나 수사기관이 확정한 사실이 아니다.",
    en: "Ballot shortages and voting suspensions are confirmed election-management failures. Claims of organized count manipulation, foreign intervention or a wholly rigged election have not been established by a court or investigative authority.",
  },
  nextCheck: {
    ko: "특검의 서버·문서 분석 결과와 피의자 소환·기소 여부, 투표용지 인쇄 기준 변경의 책임선, 실제 투표권 침해 규모, 다음 선거 제도개선안을 확인한다.",
    en: "Next checks: forensic findings from servers and documents, summonses or indictments, responsibility for changing ballot-printing thresholds, the true scale of disenfranchisement and reforms before the next election.",
  },
  heroImage: {
    src: "/images/monitoring/olympic-park-election-protest-20260614.jpg",
    alt: {
      ko: "서울 올림픽공원에서 재선거를 요구하며 집회 중인 시민들",
      en: "Citizens rallying at Seoul Olympic Park to demand a new election",
    },
    caption: {
      ko: "투표용지 부족 사태 이후 이어진 올림픽공원 농성 현장을 관련 보도를 바탕으로 재구성한 이미지.",
      en: "A reconstructed image of the continuing Olympic Park protest, based on reporting from the scene following the ballot shortage.",
    },
    credit: {
      ko: "이미지: 씨앗의 소리",
      en: "Image: SEED VOICE",
    },
  },
  keyChanges: [
    {
      date: "2026-08-11",
      text: {
        ko: "서울시장 선거무효소송은 기각됐다. 법원은 위법한 선거관리 행위가 있었더라도 결과에 영향을 미쳤다고 볼 증거는 부족하다고 판단했다.",
        en: "The Seoul mayoral election petition was dismissed. The court found insufficient evidence that acknowledged management violations affected the result.",
      },
    },
    {
      date: "2026-09-12",
      text: {
        ko: "올림픽공원 농성이 100일을 맞았다. 현장은 재선거·당일투표·수개표 요구를 계속했다.",
        en: "The Olympic Park sit-in reached 100 days, with calls for a re-election, same-day voting and hand counting continuing.",
      },
    },
    {
      date: "2026-09-17",
      text: {
        ko: "선관위 특검이 중앙선관위 등 10곳을 약 12시간 압수수색했다. 투표용지 부족과 투표율 통계 조작 의혹 등을 포함한 12개 항목을 수사하고 있다.",
        en: "The special prosecutor searched ten election-commission locations for about 12 hours, investigating twelve categories including ballot shortages and alleged turnout-statistics manipulation.",
      },
    },
  ],
  timeline: [
    {
      date: "2026-06-03",
      title: {
        ko: "투표용지 부족으로 투표 중단 사태 발생",
        en: "Ballot shortages interrupt voting",
      },
      description: {
        ko: "지방선거 당일 여러 투표소에서 투표용지가 부족해 투표가 중단되거나 지연됐다. 잠실7동에서는 투표를 하지 못한 시민들이 투표함 이송을 막으며 책임 규명을 요구했다.",
        en: "On local-election day, ballot shortages interrupted or delayed voting at multiple polling stations. In Jamsil 7-dong, citizens who could not vote blocked the removal of ballot boxes and demanded accountability.",
      },
      change: {
        ko: "단순 현장 착오가 아니라 전국 단위 선거관리 실패인지 확인해야 할 사건이 됐다.",
        en: "The incident raised the question of whether this was a nationwide management failure rather than an isolated error.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "BBC 코리아", en: "BBC Korean" },
          title: {
            ko: "투표용지 부족 사태 현장 보도",
            en: "On-site report on the ballot shortage",
          },
          url: "https://www.youtube.com/watch?v=9jKRDm2_MFA",
          publishedAt: "2026-06-04",
          thumbnailSrc: "https://i.ytimg.com/vi/9jKRDm2_MFA/maxresdefault.jpg",
          kind: "video",
        },
      ],
    },
    {
      date: "2026-06-05",
      title: {
        ko: "시민 농성, 잠실7동에서 올림픽공원으로 이동",
        en: "Citizen protest moves from Jamsil 7-dong to Olympic Park",
      },
      description: {
        ko: "투표함 대치가 끝난 뒤 시민들은 올림픽공원으로 자리를 옮겨 농성장을 꾸렸다. 재선거와 선거관리 책임 규명 요구가 장기 현장 행동으로 이어졌다.",
        en: "After the ballot-box standoff ended, citizens moved to Olympic Park and established a protest camp, turning demands for a new election and accountability into a sustained action.",
      },
      change: {
        ko: "일회성 항의가 상시 농성으로 전환됐다.",
        en: "A one-off protest became a standing encampment.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "뉴스토마토", en: "NewsTomato" },
          title: {
            ko: "투표용지 부족 항의 시민들, 올림픽공원으로 이동",
            en: "Ballot-shortage protesters move to Olympic Park",
          },
          url: "https://www.newstomato.com/readnews.aspx?no=1303147",
          publishedAt: "2026-06-05",
          thumbnailSrc: "/images/monitoring/olympic-park/20260605-newstomato.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-06-07",
      title: {
        ko: "현장 집회 확대와 시민 자율 운영",
        en: "The rally expands and develops citizen-run operations",
      },
      description: {
        ko: "농성 참가자들은 천막과 집회 공간을 유지하며 재선거, 당일투표, 수개표를 핵심 요구로 내걸었다. 현장에는 다양한 정치적 주장도 함께 유입되기 시작했다.",
        en: "Participants maintained tents and rally space while centering demands for a re-election, same-day voting and hand counting. A wider range of political claims also began entering the site.",
      },
      change: {
        ko: "올림픽공원이 선거 불신을 표출하는 상징 공간으로 굳어지기 시작했다.",
        en: "Olympic Park began to solidify as a symbolic space for electoral distrust.",
      },
      status: "response",
      sources: [
        {
          publisher: { ko: "조선비즈", en: "ChosunBiz" },
          title: {
            ko: "재선거 요구와 시민 자율 운영이 이어진 올림픽공원 현장",
            en: "Olympic Park protesters sustain re-election calls and citizen-run operations",
          },
          url: "https://v.daum.net/v/20260608142301278",
          publishedAt: "2026-06-08",
          thumbnailSrc: "/images/monitoring/olympic-park/20260608-chosunbiz.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-06-08",
      title: {
        ko: "선관위 조사, 91곳 부족·26곳 투표 중단 확인",
        en: "Election commission review confirms shortages at 91 sites and suspensions at 26",
      },
      description: {
        ko: "선관위는 투표용지를 추가 송부한 투표소가 140곳이며, 그중 추가 용지를 실제 사용한 곳은 91곳이라고 밝혔다. 26곳에서는 투표가 잠시 중단됐다가 재개됐다.",
        en: "The commission said extra ballots were dispatched to 140 polling stations, used at 91 of them, and that voting was temporarily suspended and resumed at 26.",
      },
      change: {
        ko: "투표용지 부족과 투표 중단은 공식 조사로 확인된 사실이 됐다.",
        en: "The ballot shortages and voting suspensions became officially established facts.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "동아일보", en: "The Dong-A Ilbo" },
          title: {
            ko: "선관위, 용지 부족 91곳·투표 중단 26곳 확인",
            en: "Election commission confirms shortages at 91 sites and suspensions at 26",
          },
          url: "https://www.donga.com/news/Politics/article/all/20260608/134073703/2",
          publishedAt: "2026-06-08",
          thumbnailSrc: "/images/monitoring/olympic-park/20260608-donga.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-06-19",
      title: {
        ko: "진상조사위, 총체적 선거관리 실패로 결론",
        en: "Inquiry concludes the election-management system failed",
      },
      description: {
        ko: "선관위 진상조사위는 투표용지 인쇄·배부와 보고·대응 과정 전반에 문제가 있었다고 판단하고 관련자 수사를 권고했다. 관리 실패의 책임선과 고의·은폐 여부는 이후 수사에서 가려질 사안으로 남았다.",
        en: "The commission's inquiry found failures across ballot printing, distribution, reporting and response, and recommended investigation of those involved. Lines of responsibility and whether intent or concealment was involved remained for investigators to determine.",
      },
      change: {
        ko: "선관위 스스로 현장 몇 곳의 실수가 아니라 관리 체계 전반의 실패를 인정했다.",
        en: "The commission acknowledged a system-wide failure rather than a handful of isolated mistakes.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: {
            ko: "진상규명위, 선거관리 총체적 부실 결론",
            en: "Inquiry finds systemic election-management failures",
          },
          url: "https://www.yna.co.kr/view/AKR20260619071551001",
          publishedAt: "2026-06-19",
          thumbnailSrc: "/images/monitoring/olympic-park/20260619-yonhap.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-06-21",
      title: {
        ko: "주말 집회 계속, 재선거 요구 장기화",
        en: "Weekend rallies continue as re-election demand persists",
      },
      description: {
        ko: "시민들은 올림픽공원에서 집회를 이어가며 선관위 책임 규명과 재선거를 요구했다. 선거관리 실패에 대한 항의와 선거 전체가 조작됐다는 주장이 현장에서 동시에 제기됐다.",
        en: "Citizens continued rallies at Olympic Park demanding accountability and a new election. Protest over confirmed management failures coexisted with claims that the entire election had been rigged.",
      },
      change: {
        ko: "확인된 행정 실패와 입증되지 않은 부정선거 주장을 구분할 필요가 커졌다.",
        en: "The need grew to distinguish confirmed administrative failures from unproven fraud claims.",
      },
      status: "response",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: {
            ko: "올림픽공원 재선거 요구 집회",
            en: "Olympic Park rally calling for a new election",
          },
          url: "https://www.yna.co.kr/view/AKR20260621019200004",
          publishedAt: "2026-06-21",
          thumbnailSrc: "/images/monitoring/olympic-park/20260621-yonhap.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-07-27",
      title: {
        ko: "서울시장 선거무효소송 공개 심리",
        en: "Public hearing held in Seoul mayoral election petition",
      },
      description: {
        ko: "법원은 투표용지 부족과 선거관리 위법이 선거 결과에 영향을 미쳤는지를 심리했다. 선거관리 실패의 존재와 선거무효의 법적 요건은 별개의 쟁점으로 다뤄졌다.",
        en: "The court examined whether ballot shortages and unlawful election administration affected the result, treating the existence of management failures and the legal threshold for annulment as separate questions.",
      },
      change: {
        ko: "현장 요구가 법원의 선거무효 판단 절차와 맞물렸다.",
        en: "The protest's demand became linked to the court's annulment proceedings.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: {
            ko: "서울시장 선거무효소송 심리",
            en: "Hearing in the Seoul mayoral election petition",
          },
          url: "https://www.yna.co.kr/view/AKR20260727115500001",
          publishedAt: "2026-07-27",
          thumbnailSrc: "/images/monitoring/olympic-park/20260727-yonhap.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-08-11",
      title: {
        ko: "서울시장 선거무효소송 기각",
        en: "Seoul mayoral election petition dismissed",
      },
      description: {
        ko: "법원은 선거관리상 위법이 있었더라도 그것이 선거 결과에 영향을 미쳤다고 인정할 증거가 부족하다며 청구를 기각했다. 기각 결정은 관리 실패 자체가 없었다는 판단과는 다르다.",
        en: "The court dismissed the petition for lack of evidence that election-management violations affected the result. The dismissal did not amount to a finding that no management failures occurred.",
      },
      change: {
        ko: "재선거 요구는 법원에서 받아들여지지 않았지만 책임 규명 문제는 남았다.",
        en: "The court did not accept the demand for a new election, but accountability questions remained.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "연합뉴스TV", en: "Yonhap News TV" },
          title: {
            ko: "서울시장 선거무효소송 기각",
            en: "Seoul mayoral election petition dismissed",
          },
          url: "https://www.yonhapnewstv.co.kr/news/MYH202608120026536A2",
          publishedAt: "2026-08-12",
          thumbnailSrc: "/images/monitoring/olympic-park/20260812-yonhaptv.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-08-12",
      title: {
        ko: "선관위, 선거무효·당선무효 소청 261건 모두 기각·각하",
        en: "Election commission rejects or dismisses all 261 annulment appeals",
      },
      description: {
        ko: "중앙선관위는 지방선거와 관련해 접수된 선거무효·당선무효 소청 261건을 모두 기각하거나 각하했다. 투표용지 부족 등 관리 문제만으로 선거 또는 당선 결과를 무효로 할 법적 요건이 충족됐다고 보지 않았다.",
        en: "The National Election Commission rejected or dismissed all 261 administrative appeals seeking to void elections or elected results. It found that ballot shortages and other management failures did not, by themselves, satisfy the legal requirements for annulment.",
      },
      change: {
        ko: "전국 단위 행정심판에서도 재선거 요구가 받아들여지지 않았다.",
        en: "The nationwide administrative-review process did not accept demands for new elections.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "YTN", en: "YTN" },
          title: {
            ko: "선관위, '재선거 요구' 거부…소청 261건 기각·각하",
            en: "Election commission rejects re-election demands in 261 appeals",
          },
          url: "https://www.ytn.co.kr/_ln/0101_202608122302212951",
          publishedAt: "2026-08-12",
          thumbnailSrc: "/images/monitoring/olympic-park/20260812-ytn-appeals.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-01",
      title: {
        ko: "헌재, 투표용지 부족 관련 헌법소원 4건 모두 각하",
        en: "Constitutional Court dismisses all four ballot-shortage petitions",
      },
      description: {
        ko: "헌법재판소는 투표용지 부족으로 참정권이 침해됐다는 헌법소원 4건을 모두 각하했다. 9월 1일 종결된 마지막 사건에서는 청구인 대다수가 자신의 투표권 행사에 지장이 있었다는 주장·자료를 내지 못해 자기관련성을 갖추지 못했고, 지연 뒤 투표를 마친 청구인도 선거권 제한이 인정되지 않았다.",
        en: "The Constitutional Court dismissed all four constitutional petitions alleging voting-rights violations from the ballot shortage. In the final case, closed on September 1, most petitioners did not show that their own voting rights had been impeded, while those who voted after a delay were not found to have suffered a restriction of the franchise.",
      },
      change: {
        ko: "헌재는 선거관리 실패의 실체를 본안 판단하지 않고 절차 요건 부족으로 사건을 종결했다.",
        en: "The court closed the cases on procedural grounds without deciding the merits of the management failures.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "동아일보", en: "The Dong-A Ilbo" },
          title: {
            ko: "헌재, '6·3 지선 투표용지 부족' 헌법소원 각하…4건 모두 종결",
            en: "Constitutional Court dismisses petitions over local-election ballot shortages",
          },
          url: "https://www.donga.com/news/Society/article/all/20260902/134594491/1",
          publishedAt: "2026-09-02",
          thumbnailSrc: "/images/monitoring/olympic-park/20260902-donga-constitutional-court.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-09-07",
      title: {
        ko: "선관위 특검 수사 개시",
        en: "Special prosecutor begins election-commission investigation",
      },
      description: {
        ko: "특별검사팀이 투표용지 부족, 인쇄 기준 변경, 은폐 의혹, 투표율 통계 조작 의혹 등 12개 항목에 대한 수사에 착수했다.",
        en: "The special-prosecutor team began investigating twelve categories including ballot shortages, changes to printing thresholds, alleged concealment and alleged manipulation of turnout statistics.",
      },
      change: {
        ko: "행정조사와 재판을 넘어 형사수사 단계로 넘어갔다.",
        en: "The matter moved beyond administrative review and litigation into a criminal investigation.",
      },
      status: "new",
      sources: [
        {
          publisher: { ko: "뉴스핌", en: "NewsPim" },
          title: {
            ko: "이태한 선관위 특검 공식 출범",
            en: "Election-commission special prosecutor formally launches",
          },
          url: "https://www.newspim.com/news/view/20260907000572",
          publishedAt: "2026-09-07",
          thumbnailSrc: "/images/monitoring/olympic-park/20260907-newspim.jpg",
          kind: "article",
        },
        {
          publisher: { ko: "국회입법예고", en: "National Assembly legislative information" },
          title: {
            ko: "선거관리위원회 관련 의혹 특별검사 법률안",
            en: "Special-prosecutor legislation on election-commission allegations",
          },
          url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2219127/detailRP?yType=I",
          kind: "document",
        },
      ],
    },
    {
      date: "2026-09-12",
      title: {
        ko: "올림픽공원 농성 100일",
        en: "Olympic Park sit-in reaches 100 days",
      },
      description: {
        ko: "시민 농성은 100일을 넘겼다. 참가자들은 재선거·당일투표·수개표를 계속 요구하며 특검 수사 결과를 지켜보겠다고 밝혔다.",
        en: "The citizen sit-in passed 100 days. Participants continued calling for a re-election, same-day voting and hand counting while awaiting the investigation's findings.",
      },
      change: {
        ko: "선거 당일의 분노가 장기적인 제도 불신으로 이어졌음을 보여줬다.",
        en: "The milestone showed how election-day anger had become long-running institutional distrust.",
      },
      status: "response",
      sources: [
        {
          publisher: { ko: "현장 영상", en: "On-site video" },
          title: {
            ko: "올림픽공원 농성 100일 현장",
            en: "The Olympic Park protest at 100 days",
          },
          url: "https://www.youtube.com/watch?v=lOLqizXgTlM",
          publishedAt: "2026-09-12",
          thumbnailSrc: "https://img.youtube.com/vi/lOLqizXgTlM/hqdefault.jpg",
          kind: "video",
        },
      ],
    },
    {
      date: "2026-09-17",
      title: {
        ko: "특검, 중앙선관위 등 10곳 압수수색",
        en: "Special prosecutor searches ten election-commission locations",
      },
      description: {
        ko: "특검은 75명을 투입해 중앙선관위와 지역 선관위 등 10곳을 약 12시간 압수수색하고 내부 서버와 관련 자료를 확보했다.",
        en: "The special prosecutor deployed 75 personnel to search ten central and regional election-commission locations for about twelve hours and seized internal server data and related materials.",
      },
      change: {
        ko: "수사는 자료 확보 단계에 들어갔고, 고의성·은폐·책임선 판단이 다음 쟁점이 됐다.",
        en: "The investigation entered its evidence-gathering phase; intent, concealment and lines of responsibility are now the next questions.",
      },
      status: "new",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: {
            ko: "선관위 특검, 중앙선관위 등 10곳 압수수색",
            en: "Special prosecutor searches ten election-commission sites",
          },
          url: "https://www.yna.co.kr/view/AKR20260917047655004",
          publishedAt: "2026-09-17",
          thumbnailSrc: "/images/monitoring/olympic-park/20260917-yonhap.jpg",
          kind: "article",
        },
      ],
    },
    {
      date: "다음 확인",
      title: {
        ko: "압수물 분석·소환·기소와 제도개선",
        en: "Forensic review, summonses, indictments and reform",
      },
      description: {
        ko: "특검이 어떤 자료로 누구의 책임을 특정하는지, 수사 결과가 인쇄·배부·현장 대응 절차와 선거제도 개선으로 이어지는지 확인한다.",
        en: "The tracker will examine what evidence identifies whose responsibility and whether the findings lead to reforms in printing, distribution, polling-place response and the wider electoral system.",
      },
      status: "pending",
    },
  ],
  confirmedFacts: [
    {
      ko: "선관위는 투표용지를 추가 송부한 투표소가 140곳이며, 그중 추가 용지를 실제 사용한 곳은 91곳이라고 밝혔다. 26곳에서는 투표가 잠시 중단됐다가 재개됐다.",
      en: "The commission said extra ballots were dispatched to 140 polling stations, used at 91 of them, and voting was temporarily suspended and resumed at 26.",
    },
    {
      ko: "투표용지 인쇄 하한은 60%에서 50%로 낮아졌고, 이 변경은 선관위 전체회의의 정식 의결 없이 내부 결재로 이뤄진 것으로 보도됐다.",
      en: "The minimum ballot-printing threshold was lowered from 60% to 50%, reportedly through internal approvals rather than a formal plenary vote.",
    },
    {
      ko: "투표용지 부족 때문에 일부 시민은 정해진 시간에 투표하지 못했고, 선관위 진상조사위는 이를 총체적 선거관리 실패로 판단했다.",
      en: "Some citizens were unable to vote at the scheduled time because ballots ran out, and the commission's inquiry described the episode as a systemic management failure.",
    },
    {
      ko: "서울시장 선거무효소송은 기각됐다. 법원은 관리상 위법과 선거 결과에 미친 영향 사이의 인과관계가 입증되지 않았다고 판단했다.",
      en: "The Seoul mayoral election petition was dismissed because the court found no proven causal link between management violations and the election result.",
    },
    {
      ko: "중앙선관위는 선거무효·당선무효 소청 261건을 모두 기각·각하했고, 헌법재판소는 투표용지 부족 관련 헌법소원 4건을 절차 요건 부족으로 모두 각하했다.",
      en: "The election commission rejected or dismissed all 261 election and result-annulment appeals, and the Constitutional Court dismissed all four ballot-shortage petitions for procedural deficiencies.",
    },
    {
      ko: "특검은 12개 의혹을 수사 중이며 9월 17일 중앙선관위 등 10곳을 압수수색했다.",
      en: "The special prosecutor is investigating twelve categories of allegations and searched ten election-commission sites on September 17.",
    },
  ],
  currentControversies: [
    {
      title: {
        ko: "행정 실패인가, 고의적 조작인가",
        en: "Administrative failure or deliberate manipulation?",
      },
      description: {
        ko: "투표용지 부족과 투표 중단은 확인됐다. 다만 인쇄 기준 변경과 현장 대응 실패가 무능·오판에 따른 것인지, 고의와 은폐가 개입했는지는 특검이 입증해야 한다.",
        en: "The shortages and suspensions are established. Whether changes to printing thresholds and failures on the ground arose from incompetence and misjudgment or involved intent and concealment remains for investigators to prove.",
      },
    },
    {
      title: {
        ko: "선거관리 위법과 선거무효의 간격",
        en: "The gap between unlawful administration and annulment",
      },
      description: {
        ko: "법원은 관리상 위법이 있었다는 점과 그것이 결과를 바꿀 정도였는지를 구분했다. 관리 책임을 묻는 일과 선거 전체를 무효로 판단하는 일은 법적으로 같은 결론이 아니다.",
        en: "The court distinguished management violations from proof that they changed the result. Establishing administrative responsibility and annulling an entire election are not legally equivalent.",
      },
    },
    {
      title: {
        ko: "현장의 정당한 문제제기와 미확인 주장",
        en: "Legitimate grievances and unverified claims at the protest",
      },
      description: {
        ko: "투표권 침해와 선관위 책임을 묻는 요구에는 확인된 근거가 있다. 그러나 조직적 개표 조작, 외국 세력 개입, 선거 전체 조작 주장은 별도의 증거가 필요한 미확인 주장이다.",
        en: "Demands for accountability over disenfranchisement have a confirmed factual basis. Claims of organized count manipulation, foreign intervention or a wholly rigged election require separate evidence and remain unverified.",
      },
    },
    {
      title: {
        ko: "당일투표·수개표 요구의 제도화",
        en: "Institutionalizing same-day voting and hand counting",
      },
      description: {
        ko: "현장 구호를 실제 제도로 옮기려면 사전투표의 접근성, 개표 정확도, 처리 시간, 비용, 참관과 검증 가능성을 함께 비교해야 한다.",
        en: "Turning the protest's demands into policy requires comparing accessibility, count accuracy, processing time, cost and the ability to observe and verify the process.",
      },
    },
  ],
  followUpChecks: [
    {
      ko: "특검이 확보한 서버·결재 문서에서 인쇄 기준 변경 지시와 보고 경로가 어떻게 확인되는가",
      en: "What do seized servers and approval records show about who ordered and reported the printing-threshold change?",
    },
    {
      ko: "선관위가 권고한 12명 가운데 누가 어떤 혐의로 소환·입건·기소되는가",
      en: "Which of the twelve people referred by the commission are summoned, booked or indicted, and on what allegations?",
    },
    {
      ko: "실제로 투표하지 못한 유권자 수와 사후 구제 절차가 공식적으로 집계되는가",
      en: "Will authorities officially count voters who were unable to vote and provide a remedy?",
    },
    {
      ko: "투표용지 인쇄·수송·재고관리·비상 발급 절차가 다음 선거 전에 어떻게 바뀌는가",
      en: "How will ballot printing, transport, inventory control and emergency issuance change before the next election?",
    },
    {
      ko: "투표율 통계 조작 의혹에 대해 원자료와 수정 이력, 공개 검증 결과가 제시되는가",
      en: "Will raw turnout data, change logs and independently checkable findings be released regarding alleged statistical manipulation?",
    },
    {
      ko: "올림픽공원 농성이 특검 결과 뒤에도 이어지는지, 요구가 구체적 제도개선안으로 발전하는가",
      en: "Will the Olympic Park protest continue after the special prosecutor reports, and will its demands develop into concrete reform proposals?",
    },
  ],
  sectionHeadings: {
    facts: {
      ko: "확인된 선거관리 실패",
      en: "Confirmed election-management failures",
    },
    controversies: {
      ko: "수사 중인 의혹과 확인되지 않은 주장",
      en: "Allegations under investigation and unverified claims",
    },
    followUp: {
      ko: "특검과 다음 선거에서 확인할 기준",
      en: "What to verify in the investigation and the next election",
    },
  },
  questions: [],
  proposals: [],
  sources: [
    {
      label: { ko: "연합뉴스 — 6월 14일 올림픽공원 집회", en: "Yonhap — June 14 Olympic Park rally" },
      url: "https://www.yna.co.kr/view/AKR20260614024200004",
    },
    {
      label: { ko: "뉴스토마토 — 6월 5일 농성 이동", en: "NewsTomato — June 5 protest relocation" },
      url: "https://www.newstomato.com/readnews.aspx?no=1303147",
    },
    {
      label: { ko: "YTN — 6월 8일 투표용지 부족 현황", en: "YTN — June 8 ballot-shortage findings" },
      url: "https://www.ytn.co.kr/_ln/0101_202606082157403306",
    },
    {
      label: { ko: "연합뉴스 — 7월 27일 선거소송 심리", en: "Yonhap — July 27 election-litigation hearing" },
      url: "https://www.yna.co.kr/view/AKR20260727115500001",
    },
    {
      label: { ko: "연합뉴스TV — 서울시장 선거무효소송 기각", en: "Yonhap News TV — Seoul mayoral petition dismissed" },
      url: "https://www.yonhapnewstv.co.kr/news/MYH202608120026536A2",
    },
    {
      label: { ko: "YTN — 선거무효·당선무효 소청 261건 기각·각하", en: "YTN — 261 election-annulment appeals rejected or dismissed" },
      url: "https://www.ytn.co.kr/_ln/0101_202608122302212951",
    },
    {
      label: { ko: "동아일보 — 투표용지 부족 헌법소원 4건 각하", en: "The Dong-A Ilbo — Four ballot-shortage petitions dismissed" },
      url: "https://www.donga.com/news/Society/article/all/20260902/134594491/1",
    },
    {
      label: { ko: "국회입법예고 — 선관위 특검 법률안", en: "National Assembly — special-prosecutor legislation" },
      url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2219127/detailRP?yType=I",
    },
    {
      label: { ko: "연합뉴스 — 9월 17일 특검 압수수색", en: "Yonhap — September 17 special-prosecutor searches" },
      url: "https://www.yna.co.kr/view/AKR20260917047655004",
    },
    {
      label: { ko: "현장 영상 — 올림픽공원 농성 100일", en: "On-site video — 100 days at Olympic Park" },
      url: "https://www.youtube.com/watch?v=lOLqizXgTlM",
    },
  ],
  continuationEligible: false,
};
