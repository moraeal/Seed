import type { PublicInterestWatchCase } from "./publicInterestWatch";

// The legislative timeline is the main subject, so this remains a News Tracker article.
export const democracyMeritBillTracker: PublicInterestWatchCase = {
  slug: "democracy-merit-bill-tracker-2026",
  organization: {
    ko: "민주유공자 예우에 관한 법률안 · 의안 2200274",
    en: "Bill on Honoring Contributors to Democratization · No. 2200274",
  },
  eyebrow: { ko: "입법 경과 · 민주유공자 예우", en: "Legislative progress · Recognition for democratization" },
  title: {
    ko: "민주유공자법, 거부권 2년 반 만에 다시 본회의로",
    en: "South Korea’s Democratic Merit Bill Returns to the Floor Two and a Half Years After a Veto",
  },
  summary: {
    ko: "2024년 재의요구로 폐기된 민주유공자법이 11월 19일 국회 본회의에 다시 올랐습니다. 20일 오전 기준으로 표결은 오후에 예정돼 있습니다. 보훈부가 예상한 유공자 635명의 범위와 자녀 대입 특별전형 논란도 함께 추적합니다.",
    en: "The bill returned to South Korea’s National Assembly floor on November 19 after a presidential veto ended its previous run in 2024. As of the morning of November 20, a vote was expected that afternoon. This tracker follows the ministry’s estimate of 635 potential honorees and the debate over their children’s university admissions eligibility.",
  },
  status: { ko: "본회의 상정 · 표결 예정", en: "On the Assembly floor · Vote pending" },
  openedAt: "2000-12-04",
  publishedAt: "2026-11-20",
  updatedAt: "2026-11-20",
  continuationEligible: false,
  heroImage: {
    src: "/images/legislation/democracy-merit-2026/hero.webp",
    alt: {
      ko: "민주화에 나선 시민들이 새겨진 벽과 원서를 든 학생, 메달 모양 열쇠로 열리는 대학 문",
      en: "A student holding an application faces a university gate opened by a medal-shaped key, beside a mural of democracy demonstrators",
    },
    caption: {
      ko: "부모의 유공자 지위가 자녀의 대입 지원 자격과 연결될 가능성을 표현했습니다.",
      en: "A medal becomes a key to a university gate, illustrating a possible link between parental recognition and a child’s admissions options.",
    },
    credit: { ko: "AI 이미지", en: "AI image" },
  },
  bodyImages: [
    {
      src: "/images/legislation/democracy-merit-2026/anonymous-citizens.webp",
      alt: { ko: "비에 젖은 돌바닥 위에 놓인 낡은 운동화와 붕대", en: "Worn canvas shoes and a bandage on rain-dark paving stones" },
      caption: {
        ko: "누구를 예우할지 가리는 과정에서 기록이 남지 않은 피해를 어떻게 확인할지도 살펴야 합니다.",
        en: "A recognition process also has to account for injuries and losses that left little documentary evidence.",
      },
      credit: { ko: "AI 이미지", en: "AI image" },
    },
    {
      src: {
        ko: "/images/columns/nameless-citizens-democracy-2026/connection-ko.svg",
        en: "/images/columns/nameless-citizens-democracy-2026/connection-en.svg",
      },
      alt: {
        ko: "법안의 유공자 등록에서 기존 보훈 제도와 대입 사회통합전형으로 이어질 수 있는 경로",
        en: "The possible path from recognition under the bill through the existing veterans framework to social integration admissions",
      },
      caption: {
        ko: "대입 지원 자격은 대학별 모집요강과 보훈관서의 증명서 발급 기준까지 확인해야 합니다.",
        en: "Actual eligibility depends on university admissions requirements and the rules for issuing a veterans-affairs certificate.",
      },
      credit: { ko: "씨앗의 소리", en: "SEED Voice" },
    },
  ],
  sourceBasis: {
    ko: "2026년 11월 20일 오전 기준. 공개 의안 기록, 보도, 현행 고등교육법 시행령과 대학 모집요강을 대조했습니다. 법사위 의결본 전문은 직접 열람할 수 없어 해당 조문 설명은 국회 심사 자료를 대조한 보도를 참조했습니다.",
    en: "Checked on the morning of November 20, 2026, against public legislative records, reporting, the current higher education decree and a university admissions guide. The full committee-approved text could not be retrieved directly, so descriptions of those provisions rely on reporting that reviewed the Assembly documents.",
  },
  timeline: [
    {
      date: "2026-11-20",
      title: { ko: "무제한토론 종결과 법안 표결 추진", en: "Governing party seeks to close debate and hold a vote" },
      description: {
        ko: "더불어민주당은 오후에 무제한토론을 종결한 뒤 법안을 표결에 부칠 계획이다. 오전 확인 기준으로 표결 결과는 나오지 않았다. [2]",
        en: "The Democratic Party said it would seek to end debate and put the bill to a vote that afternoon. No vote result was available as of the morning check. [2]",
      },
      status: "pending",
    },
    {
      date: "2026-11-19",
      title: { ko: "본회의 상정과 무제한토론", en: "Bill reaches the floor and the opposition begins a filibuster" },
      description: {
        ko: "제439회 국회 제13차 본회의에 법안이 상정됐다. 국민의힘은 무제한토론을 시작했고, 더불어민주당은 토론 종결 동의안을 냈다. [1] [4]",
        en: "The bill was taken up at the 13th plenary meeting of the 439th session. The People Power Party began a filibuster, and the Democratic Party filed a motion to end debate. [1] [4]",
      },
      status: "new",
    },
    {
      date: "2026-11-05",
      title: { ko: "본회의 상정 불발", en: "Bill left off the floor agenda" },
      description: {
        ko: "더불어민주당이 상정을 요청했으나 이날 본회의 안건에는 오르지 않았다. 민주당은 정기국회 안에 처리하겠다는 방침을 밝혔다. [5]",
        en: "The Democratic Party sought to have the bill taken up, but it did not make the agenda. The party said it would seek passage before the regular session closed. [5]",
      },
      status: "confirmed",
    },
    {
      date: "2026-03-30",
      title: { ko: "법제사법위원회 수정 의결", en: "Judiciary committee approves an amended bill" },
      description: {
        ko: "법제사법위원회가 재석 15명 중 찬성 10명, 반대 5명으로 수정안을 의결했다. 권오을 국가보훈부 장관은 법 적용이 예상되는 인원이 635명이라고 밝혔다. [3] [6]",
        en: "The Legislation and Judiciary Committee approved an amended bill by 10 votes to 5, with 15 members present. Veterans Affairs Minister Kwon Oh-eul estimated that 635 people fell within its intended scope. [3] [6]",
      },
      status: "confirmed",
    },
    {
      date: "2025-09-25",
      title: { ko: "본회의에서 신속처리안건 지정", en: "Assembly puts the bill on the fast track" },
      description: {
        ko: "신속처리안건 지정 표결에서 명패 수보다 투표수가 한 표 많아 국민의힘이 항의했다. 우원식 국회의장은 결과에 영향이 없다고 판단해 개표를 진행했다. 법안은 신속처리안건으로 지정됐다. [7]",
        en: "In a secret ballot on fast-tracking, the number of ballots exceeded the count of lawmakers’ nameplates by one. The People Power Party protested. Speaker Woo Won-shik said the discrepancy would not change the result, proceeded with the count and the bill was placed on the fast track. [7]",
      },
      status: "confirmed",
    },
    {
      date: "2024-06-10",
      title: { ko: "제22대 국회에서 다시 발의", en: "Bill reintroduced in the 22nd National Assembly" },
      description: {
        ko: "전재수 의원 등 10명이 「민주유공자 예우에 관한 법률안」을 다시 발의했다. 의안번호는 2200274호다. [8] [9]",
        en: "Lawmaker Jeon Jae-su and nine colleagues reintroduced the proposal as Bill No. 2200274. [8] [9]",
      },
      status: "confirmed",
    },
    {
      date: "2024-05-29",
      title: { ko: "대통령 재의요구 후 임기 만료로 폐기", en: "Presidential veto leaves the bill to lapse" },
      description: {
        ko: "윤석열 당시 대통령이 재의를 요구했다. 국회가 다시 표결하지 못해 제21대 국회 임기 만료로 법안이 폐기됐다. [10] [11]",
        en: "Then-President Yoon Suk Yeol returned the bill for reconsideration. The 21st Assembly’s term expired before lawmakers could vote again, and the bill lapsed. [10] [11]",
      },
      status: "confirmed",
    },
    {
      date: "2024-05-28",
      title: { ko: "제21대 국회 본회의 통과", en: "Bill passes the floor in the 21st Assembly" },
      description: {
        ko: "국회 본회의가 정무위원회 대안(의안 2126698호)을 가결했다. [10]",
        en: "The National Assembly passed the National Policy Committee’s substitute bill, No. 2126698. [10]",
      },
      status: "confirmed",
    },
    {
      date: "2022-11-03",
      title: { ko: "전재수 의원 예우법안 발의", en: "Jeon Jae-su introduces a recognition bill" },
      description: {
        ko: "전재수 의원 등 11명이 유신 반대 투쟁, 6월 민주항쟁, 부마민주항쟁 관련 희생자와 유족에 대한 예우 필요성을 들어 법안을 발의했다. [14]",
        en: "Jeon and ten other lawmakers introduced a bill to extend recognition to victims and surviving families from movements including opposition to the Yushin system, the June Democratic Uprising and the Busan–Masan protests. [14]",
      },
      status: "confirmed",
    },
    {
      date: "2021-03-30",
      title: { ko: "설훈 의원안 철회", en: "Sul Hoon withdraws a separate bill" },
      description: {
        ko: "설훈 의원은 유공자와 유족·가족의 교육·취업·의료 지원을 담은 별도 법안을 발의했다가 논란이 일자 철회했다. [13]",
        en: "Sul Hoon withdrew a separate proposal after controversy over its provisions for education, employment and medical support for honorees and their families. [13]",
      },
      status: "confirmed",
    },
    {
      date: "2020-09-23",
      title: { ko: "우원식 의원안에 교육·취업 지원 포함", en: "Woo Won-shik’s bill includes education and employment assistance" },
      description: {
        ko: "우원식 의원 등 20명이 낸 법안에는 의료·양로 지원과 함께 유공자 및 유족·가족의 교육·취업 지원이 포함됐다. [12]",
        en: "Woo and nineteen colleagues proposed health and elder care as well as education and employment assistance for honorees and eligible family members. [12]",
      },
      status: "confirmed",
    },
    {
      date: "2000-12-04",
      title: { ko: "제16대 국회에서 민주유공자 예우법안 발의", en: "Early bill introduced in the 16th Assembly" },
      description: {
        ko: "이훈평 의원이 민주유공자 예우법안을 대표발의했다. 당시 국회는 적용 범위를 광주 5·18 관련자로 좁혀 예우법을 마련했다. 이후 제17~20대 국회에서도 다른 민주화운동 관련자를 예우하는 법안이 발의됐다. [15]",
        en: "Lee Hun-pyeong introduced a bill to recognize contributors to democratization. Lawmakers narrowed its scope to the May 18 uprising in Gwangju before passing it. Proposals for other democracy movements were introduced again in the 17th through 20th Assemblies. [15]",
      },
      status: "confirmed",
    },
  ],
  sectionHeadings: {
    facts: { ko: "635명은 어떻게 산정했나", en: "Who is counted in the estimate of 635?" },
    controversies: { ko: "유공자 심사와 자녀 대입 자격", en: "Recognition and university admissions eligibility" },
    followUp: { ko: "다음에 확인할 기록", en: "Records to check next" },
  },
  confirmedFacts: [
    {
      ko: "법안은 1964년 3월 24일 이후의 민주화운동을 다룬다. 민주화운동 보상법이나 부마민주항쟁 보상법에 따라 이미 관련자로 인정된 사람 가운데 사망·행방불명자와 장해등급을 받은 부상자가 심사 대상이다. [1] [4] [6]",
      en: "The bill covers democracy movements from March 24, 1964 onward. It applies to people already recognized under either of two compensation laws who died, went missing or sustained an injury with a formal disability rating. [1] [4] [6]",
    },
    {
      ko: "보훈부가 제시한 635명은 유공자 본인 기준 예상 인원이다. 등록 여부는 신청과 심사를 거쳐 결정된다. [3] [6]",
      en: "The ministry’s estimate of 635 counts potential honorees themselves. Registration would be decided after an application and review. [3] [6]",
    },
    {
      ko: "의료·양로·요양 지원이 중심이다. 배우자·자녀·부모 등 유족과 가족에게도 지원 항목에 따라 예우를 적용한다. [1] [6]",
      en: "Medical care, residential elder care and long-term care are central to the proposal. Eligible survivors and family members, including spouses, children and parents, would receive support according to the rules for each benefit. [1] [6]",
    },
  ],
  currentControversies: [
    {
      title: { ko: "누가 ‘사회적 공감대’를 판단하나", en: "Who determines whether there is public consensus?" },
      description: {
        ko: "민주당은 오랫동안 치료와 생활에 어려움을 겪은 피해자와 유족을 국가가 돌봐야 한다고 설명한다. 국민의힘은 유공자를 가리는 기준이 불명확하다고 지적한다. 법안의 ‘사회적 공감대’를 어떤 자료로 판단하는지, 심사 기준과 결정 이유를 어느 범위까지 공개하는지가 남은 쟁점이다. [4] [6]",
        en: "The Democratic Party says the state should care for victims and families who have faced years of medical and financial hardship. The People Power Party says the recognition criteria are too vague. What evidence would establish the bill’s required public consensus, and how much would reviewers disclose about their criteria and decisions? [4] [6]",
      },
    },
    {
      title: { ko: "자녀가 대입 특별전형에 지원할 수 있나", en: "Could children of honorees apply through a special admissions route?" },
      description: {
        ko: "현재 본회의에 오른 안에는 교육비나 취업을 직접 지원하는 조항이 없다. 현행 「고등교육법 시행령」 제42조의6은 대학 사회통합전형에 국가보훈대상자를 포함한다. 보훈부는 2024년 국회 검토 과정에서 민주유공자 본인과 자녀가 이 전형의 대상이 될 가능성을 제기했다. 연세대 2027학년도 수시 모집요강은 보훈 관계 법령상 교육지원 대상자에게 지원 자격을 부여하고 보훈관서가 발급한 증명서를 요구한다. 실제 적용은 교육부·보훈부의 해석과 대학 모집요강에서 확인해야 한다. [6] [16] [17] [18]",
        en: "The bill before the Assembly contains no direct education or employment benefit. Article 42-6 of the Higher Education Act’s enforcement decree includes veterans-affairs beneficiaries in social integration admissions. During legislative review in 2024, the veterans ministry said the route could extend to honorees and their children. Yonsei University’s 2027 early admissions guide requires eligibility for education assistance under veterans law and a certificate from a veterans affairs office. Whether the route applies will depend on official guidance and each university’s rules. [6] [16] [17] [18]",
      },
    },
  ],
  questions: [],
  proposals: [],
  followUpChecks: [
    {
      ko: "국회 본회의의 무제한토론 종결 여부, 표결 결과와 최종 의결문을 확인한다.",
      en: "Check whether the Assembly ends the filibuster, how lawmakers vote and what the final adopted text says.",
    },
    {
      ko: "법이 공포될 경우 보훈부가 제시하는 인정 증빙과 심사 기준, 등록·탈락 통계와 이의제기 절차를 확인한다.",
      en: "If enacted, track evidence requirements, review criteria, approval and rejection counts, and appeal procedures.",
    },
    {
      ko: "교육부와 대학의 사회통합전형 적용 해석, 보훈관서의 증명서 발급 기준과 대학 모집요강 변경을 확인한다.",
      en: "Track how authorities and universities interpret social integration admissions, who can obtain a certificate and how admissions guides change.",
    },
  ],
  relatedContents: [
    {
      href: "/monitoring/legislation/commentary/democracy-merit-bill-admissions-fairness-2026",
      label: { ko: "입법논평", en: "Legislative commentary" },
      title: {
        ko: "이름 없이 피 흘린 시민들 앞에서, 국회는 누구를 유공자로 정하는가",
        en: "Who Gets Credit for Korea’s Democracy When So Many Sacrificed in Anonymity?",
      },
      summary: {
        ko: "유공자 인정 기준과 자녀의 대입 특별전형 적용 가능성을 살폈습니다.",
        en: "A closer look at recognition criteria and the possible effect on children’s university admissions.",
      },
      date: "2026-11-05",
    },
    {
      href: "/columns/nameless-citizens-democracy-2026",
      label: { ko: "칼럼", en: "Column" },
      title: { ko: "나는 민주화유공자가 아니다", en: "I Am Not a Democratic Merit Honoree" },
      summary: {
        ko: "1987년 6월 항쟁에서 함께했던 이름 없는 시민들을 돌아봅니다.",
        en: "A firsthand account remembers the citizens who stood together in June 1987.",
      },
      date: "2026-11-05",
    },
  ],
  sources: [
    { label: { ko: "연합뉴스 · 국회 본회의 상정 (2026.11.19)", en: "Yonhap · Bill tabled in the Assembly (Nov. 19, 2026)" }, url: "https://www.yna.co.kr/view/AKR20261119109000001" },
    { label: { ko: "경향신문 · 본회의 표결 예정 (2026.11.20)", en: "Kyunghyang Shinmun · Expected floor vote (Nov. 20, 2026)" }, url: "https://www.khan.co.kr/article/202611200836001" },
    { label: { ko: "아시아경제 · 법사위 의결 및 보훈부 적용 예상 인원 (2026.03.30)", en: "Asia Business Daily · Committee vote and ministry estimate (Mar. 30, 2026)" }, url: "https://view.asiae.co.kr/article/2026033016530999179" },
    { label: { ko: "MBC · 본회의 상정 및 여야 입장 (2026.11.19)", en: "MBC · Floor debate and party positions (Nov. 19, 2026)" }, url: "https://imnews.imbc.com/news/2026/politics/article/6866971_36911.html" },
    { label: { ko: "뉴시스 · 11월 5일 본회의 상정 불발 (2026.11.05)", en: "Newsis · Bill left off the floor agenda (Nov. 5, 2026)" }, url: "https://nwww.newsis.com/view/NISX20261105_0003856854" },
    { label: { ko: "넥스트저널 · 법안과 국회 심사 자료 대조 (2026.11.13)", en: "Next Journal · Guide to the bill and Assembly review documents (Nov. 13, 2026)" }, url: "https://nextjournal.kr/democratic-merit-act-no-education-aid" },
    { label: { ko: "연합뉴스 · 신속처리안건 지정 표결 (2025.09.25)", en: "Yonhap · Fast-track vote (Sept. 25, 2025)" }, url: "https://www.yna.co.kr/view/AKR20250925166251001" },
    { label: { ko: "국회 의안정보시스템 · 민주유공자 예우에 관한 법률안 제2200274호", en: "National Assembly · Bill No. 2200274" }, url: "https://likms.assembly.go.kr/bill/billDetail.do?ageFrom=22&ageTo=22&billId=PRC_M2L4K0I6R0S3Q1O7N2O2K3I1H3I8M1" },
    { label: { ko: "열려라국회 · 의안 제2200274호 발의 기록 (2024.06.10)", en: "Open Assembly · Introduction record for Bill No. 2200274 (June 10, 2024)" }, url: "https://watch.peoplepower21.org/BillDetail/2200274" },
    { label: { ko: "국회입법조사처 · 제21대 국회 입법활동 분석 (2024.12.19)", en: "National Assembly Research Service · Legislative activity of the 21st Assembly (Dec. 19, 2024)" }, url: "https://www.nars.go.kr/fileDownload2.do?doc_id=1PFLwEoRWbV&fileName=%28NARS+%EC%9E%85%EB%B2%95%C2%B7%EC%A0%95%EC%B1%85-20241219%29%EC%A0%9C21%EB%8C%80+%EA%B5%AD%ED%9A%8C+%EC%9E%85%EB%B2%95%ED%99%9C%EB%8F%99+%EB%B6%84%EC%84%9D.pdf" },
    { label: { ko: "연합뉴스 · 대통령 재의요구 (2024.05.29)", en: "Yonhap · Presidential veto (May 29, 2024)" }, url: "https://www.yna.co.kr/view/AKR20240529143600001" },
    { label: { ko: "팔로 · 우원식 의원안 제2104148호 (2020.09.23)", en: "Follaw · Woo Won-shik’s Bill No. 2104148 (Sept. 23, 2020)" }, url: "https://www.follaw.co.kr/bill/PRC_V2Q0P0I9U0A8T1Y7Y4C1H2N5Q2B5M9" },
    { label: { ko: "MBC · 설훈 의원안 철회 (2021.03.30)", en: "MBC · Sul Hoon withdraws his bill (Mar. 30, 2021)" }, url: "https://imnews.imbc.com/news/2021/politics/article/6134216_34866.html" },
    { label: { ko: "국민참여입법센터 · 전재수 의원안 제2118086호 (2022.11.03)", en: "Ministry of Government Legislation · Jeon Jae-su’s Bill No. 2118086 (Nov. 3, 2022)" }, url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2118086/detailRP" },
    { label: { ko: "부산대 법학연구 · 국가보훈과 민주화운동관련자예우 (2022)", en: "Pusan National University Law Review · National veterans affairs and recognition of democracy movement participants (2022)" }, url: "https://his.pusan.ac.kr/bbs/lawstudy/8676/782906/download.do" },
    { label: { ko: "국가법령정보센터 · 고등교육법 시행령 제42조의6", en: "Korean Law Information Center · Higher Education Act Enforcement Decree, Article 42-6" }, url: "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B3%A0%EB%93%B1%EA%B5%90%EC%9C%A1%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9/%EC%A0%9C42%EC%A1%B0%EC%9D%986" },
    { label: { ko: "뉴데일리 · 국회 검토보고서와 보훈부 의견 (2026.11.04)", en: "New Daily · Assembly review and veterans ministry’s position (Nov. 4, 2026)" }, url: "https://www.newdaily.co.kr/site/data/html/2026/11/04/2026110400047.html" },
    { label: { ko: "연세대학교 · 2027학년도 수시모집 국가보훈대상자 전형 요강", en: "Yonsei University · 2027 early admissions guide for veterans-affairs applicants" }, url: "https://www2.yonsei.ac.kr/entrance/2027/susi/upload/X_2.pdf" },
  ],
};
