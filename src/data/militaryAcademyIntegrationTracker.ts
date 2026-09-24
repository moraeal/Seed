import type { PublicInterestWatchCase } from "./publicInterestWatch";

export const militaryAcademyIntegrationTracker: PublicInterestWatchCase = {
  slug: "military-academy-integration-tracker",
  organization: {
    ko: "국군사관학교 창설",
    en: "Armed Forces Academy Plan",
  },
  eyebrow: {
    ko: "사관학교 통합·장교 양성체계",
    en: "Academy merger · Officer development",
  },
  title: {
    ko: "사관학교를 합치면 군은 강해지나",
    en: "Will Merging the Service Academies Make the Military Stronger?",
  },
  summary: {
    ko: "정부는 육·해·공군 사관학교를 대전 자운대의 4년제 국군사관학교로 통합하는 기본계획을 발표했습니다. 씨앗은 초기 2+2 구상에서 4년 통합안으로 바뀐 과정, ROTC·학사장교의 교육 공백, 공청회와 입법, 비용과 부지 활용, 신임 국방부 장관의 수정 여부를 계속 기록합니다.",
    en: "The government has proposed merging the Army, Navy and Air Force academies into a four-year Armed Forces Academy at Jaun-dae in Daejeon. SEED tracks the shift from an early two-plus-two model to full co-location, gaps in ROTC and officer-candidate education, hearings and legislation, cost and campus reuse, and any revisions under the new defense minister.",
  },
  status: {
    ko: "기본계획 발표·보완 검토",
    en: "Basic plan announced · Revisions under review",
  },
  openedAt: "2025-06-26",
  updatedAt: "2026-09-24",
  nextCheck: {
    ko: "10월 세부계획의 통합 선발 시점과 방식, 자운대 이전 일정·총사업비, 각 군 전문교육 시설, ROTC·학사장교 합동교육 확대안, 국군사관학교 설치법과 2028년 예산 편성 전 선행연구 일정",
    en: "The October detailed plan: admissions timing and model, Jaun-dae schedule and full cost, service-specific facilities, expanded joint education for ROTC and officer candidates, the Armed Forces Academy bill, and studies required before possible 2028 funding",
  },
  heroImage: {
    src: "images/monitoring/military-academy-integration-tracker.webp",
    alt: {
      ko: "육군·해군·공군 모자가 놓인 회의 테이블과 비어 있는 의자를 담은 상징적 장면",
      en: "Army, Navy and Air Force caps sit on a conference table beside an empty chair",
    },
    caption: {
      ko: "사관학교 통합안은 아직 완성된 설계가 아닙니다. 누가 결정하고 무엇을 공개하는지, 교육 효과와 비용이 어떻게 검증되는지를 기록합니다.",
      en: "The academy merger is not yet a completed design. This tracker follows who decides, what is disclosed and how educational outcomes and costs are tested.",
    },
    credit: {
      ko: "씨앗의 소리 AI 제작 이미지",
      en: "AI-assisted image by SEED VOICE",
    },
  },
  sourceBasis: {
    ko: "국방부의 2026년 7월 기본계획 발표와 8월 26일 공청회 영상, 국회에 제출된 육군본부 장교 양성기관별 교육 현황을 인용한 보도, 9월 1일 2027년도 정부 예산안, 9월 16일 국방부 장관 후보자 인사청문회 답변을 날짜별로 대조했습니다. 발표 전 보도에 나온 2+2·장성 이전안과 발표된 자운대 4년 통합안을 구분했습니다.",
    en: "This tracker cross-checks the Defense Ministry's July 2026 basic plan and August 26 hearing video, reporting based on Army commissioning-route data submitted to the National Assembly, the government's September 1 budget proposal for 2027, and the defense minister nominee's September 16 testimony. It distinguishes pre-announcement two-plus-two and Jangseong concepts from the announced four-year Jaun-dae model.",
  },
  caution: {
    ko: "국군사관학교의 첫 통합 선발 시점, 이전 완료 시기와 총사업비는 아직 확정되지 않았습니다. 2027년도 정부 예산안에는 창설 사업비가 별도 반영되지 않았고, 2028년 편성은 선행연구 뒤 검토하는 단계입니다. 2028년 출범과 2032~2036년 이전도 확정 일정이 아닙니다. ‘정치적 징벌’은 공식 확인된 목적이 아니라 대통령과 국방부의 역사 단절 발언에서 제기된 해석입니다.",
    en: "The first integrated class, relocation completion date and total cost remain unsettled. The government's 2027 budget proposal contains no dedicated academy-merger funding; possible 2028 funding remains under review after preliminary studies. A 2028 launch and 2032–36 relocation are also not confirmed schedules. Political punishment is an interpretation prompted by official historical-rupture language, not a confirmed stated purpose.",
  },
  keyChanges: [
    {
      date: "2026-07-16",
      text: {
        ko: "국방부가 2+2 구상에서 자운대 4년 통합교육안으로 방향을 바꿔 기본계획을 발표했습니다.",
        en: "The ministry shifted from a two-plus-two concept to a four-year co-located model at Jaun-dae.",
      },
    },
    {
      date: "2026-07-30",
      text: {
        ko: "ROTC·학사장교가 2024년 신임장교의 약 70%를 배출했지만 합동성 교육은 2시간에 그친다는 육군 자료가 공개됐습니다.",
        en: "Army data showed ROTC and officer-candidate routes produced about 70 percent of 2024 commissions but received two hours of joint instruction.",
      },
    },
    {
      date: "2026-09-01",
      text: {
        ko: "2027년도 정부 국방예산안에 국군사관학교 창설 사업비가 별도 반영되지 않아, 선행연구와 2028년 이후 재원 확보가 새 관문이 됐습니다.",
        en: "The government's 2027 defense budget proposal contains no dedicated academy-merger funding, making preliminary studies and possible funding from 2028 the next hurdle.",
      },
    },
    {
      date: "2026-09-16",
      text: {
        ko: "강신철 국방부 장관 후보자가 통합교육 필요성에는 동의하면서도 현재 안은 불완전하고 보완이 필요하다고 밝혔습니다.",
        en: "Defense minister nominee Kang Shin-chul supported integrated education but called the current plan incomplete and in need of revision.",
      },
    },
  ],
  timeline: [
    {
      date: "2025-06-26",
      title: {
        ko: "국정기획 단계에서 육사·3사부터 단계 통합 검토",
        en: "Transition planners consider phased integration beginning with KMA and the Third Academy",
      },
      description: {
        ko: "대선 공약인 ‘군 교육기관 단계적 통합’을 구체화하면서 육군사관학교와 육군3사관학교를 먼저 합치고 해·공사까지 확대하는 방안이 보도됐습니다. 이 단계에서는 통합 순서와 교육 모델이 확정되지 않았습니다.",
        en: "Officials considered implementing the campaign pledge for phased integration by beginning with the Army academy and Korea Army Academy at Yeongcheon, then expanding to the naval and air academies. No final sequence or educational model had been set.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "CBS노컷뉴스", en: "CBS NoCut News" },
          title: { ko: "[단독] 李공약 ‘사관학교 통합’…‘육사+3사’부터 추진", en: "Transition planners consider merging KMA and the Third Academy first" },
          url: "https://www.nocutnews.co.kr/news/6360375",
          publishedAt: "2025-06-26",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2025-06-26-nocutnews.jpg",
        },
      ],
    },
    {
      date: "2026-02-20",
      title: {
        ko: "대통령, 통합 임관식에서 ‘하나의 군’ 강조",
        en: "President calls for 'one military' at joint commissioning ceremony",
      },
      description: {
        ko: "이재명 대통령은 계룡대 육·해·공군 사관학교 통합 임관식에서 군의 과거와 단절하고 육·해·공군이 하나의 군이 돼야 한다는 방향을 제시했습니다. 사관학교 통합이 교육개혁과 군의 역사·정체성 개편을 함께 상징하기 시작한 시점입니다.",
        en: "At the joint commissioning ceremony, President Lee Jae-myung called for a break with the military's past and for the services to become one force. Academy integration increasingly came to symbolize both education reform and historical and institutional change.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "뉴스핌", en: "NewsPim" },
          title: { ko: "육·해·공군 사관학교 558명, 계룡대서 ‘통합 임관’", en: "558 service-academy graduates commissioned at a joint ceremony" },
          url: "https://www.newspim.com/news/view/20260220000182",
          publishedAt: "2026-02-20",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-02-20-newspim.jpg",
        },
      ],
    },
    {
      date: "2026-07-16",
      title: {
        ko: "자운대 4년제 국군사관학교 기본계획 발표",
        en: "Government announces a four-year Armed Forces Academy at Jaun-dae",
      },
      description: {
        ko: "정부는 발표 전까지 검토한 2+2 방식을 접고 대전 자운대 한 캠퍼스에서 4년간 교육하는 모델을 제시했습니다. 저학년 공통교육과 고학년 군별 전공심화를 병행하고, 군별 인원을 정해 선발하면서 공통선발도 일부 도입하는 방안을 검토하기로 했습니다. 첫 통합 입학 연도와 총사업비는 밝히지 않았습니다.",
        en: "The government dropped the pre-announcement two-plus-two concept and proposed four years on one Jaun-dae campus, combining common early coursework with service-specific upper-level study. It considered service-allocated admissions plus a common pool, but did not set the first class year or full project cost.",
      },
      change: {
        ko: "2+2 분산교육 검토안에서 4년 동일 캠퍼스 통합교육으로 변경",
        en: "Shift from a dispersed two-plus-two concept to four years on one campus",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: { ko: "4년제 통합 국군사관학교 대전 자운대에", en: "Government announces four-year Armed Forces Academy in Daejeon" },
          url: "https://www.yna.co.kr/view/AKR20260716039653001",
          publishedAt: "2026-07-16",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-07-16-yonhap.jpg",
        },
      ],
    },
    {
      date: "2026-07-30",
      title: {
        ko: "ROTC·학사장교 합동성 교육 2시간 확인",
        en: "ROTC and officer-candidate joint instruction measured at two hours",
      },
      description: {
        ko: "육군본부의 장교 양성기관별 교육 현황에 따르면 ROTC·학사장교는 640시간 가운데 합동성 교육을 2시간 받았습니다. 2024년 신임장교 약 5,500명 중 두 과정 출신은 약 70%, 3군 사관학교 출신은 약 14%였습니다. 육사는 3,825시간 가운데 280시간을 합동작전 교육에 배정한 것으로 집계됐습니다.",
        en: "Army data showed two hours of joint instruction within the 640-hour ROTC and officer-candidate programs. Those routes produced about 70 percent of roughly 5,500 new officers in 2024, compared with about 14 percent from the three service academies. KMA allocated 280 of 3,825 hours to joint operations.",
      },
      change: {
        ko: "합동성 명분과 장교 양성 전체 체계 사이의 교육 격차가 수치로 확인",
        en: "Quantified gap between the jointness rationale and the wider commissioning system",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "서울신문", en: "Seoul Shinmun" },
          title: { ko: "합동성 급해 합친다더니 ‘육사 280시간, ROTC는 2시간’", en: "KMA gives 280 hours of joint instruction; ROTC gives two" },
          url: "https://v.daum.net/v/20260730165938000",
          publishedAt: "2026-07-30",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-07-30-seoul.jpg",
        },
      ],
    },
    {
      date: "2026-08-07",
      title: {
        ko: "국방부, ‘잘못된 역사와 단절’ 의미 부여",
        en: "Ministry links integration to a break with a wrongful past",
      },
      description: {
        ko: "국방부는 미래전 대비·교육 효율화·합동성 강화와 함께 통합이 잘못된 역사와 단절하고 헌법과 국민에게 충성하는 국군 정체성을 세우는 초석이 될 것이라고 설명했습니다. 군사교육 개편과 역사적 평가가 한 정책 안에 결합됐습니다.",
        en: "Alongside future-war readiness, efficiency and jointness, the ministry said integration would help break with a wrongful past and establish a force loyal to the Constitution and the people. Military education reform and historical judgment were now explicitly joined in one policy.",
      },
      status: "response",
      sources: [
        {
          publisher: { ko: "동아일보", en: "The Dong-A Ilbo" },
          title: { ko: "국방부 ‘사관학교 통합, 잘못된 역사 단절 초석’", en: "Defense Ministry links academy integration to historical rupture" },
          url: "https://www.donga.com/news/Politics/article/all/20260807/134437766/1",
          publishedAt: "2026-08-07",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-08-07-donga.jpg",
        },
      ],
    },
    {
      date: "2026-08-26",
      title: {
        ko: "첫 공청회, 찬반 토론보다 고성과 충돌이 부각",
        en: "First public hearing is overshadowed by disruption",
      },
      description: {
        ko: "국방부가 찬반 전문가 각 3명이 참여하는 첫 공개 공청회를 열었습니다. 반대 참석자들의 고성과 욕설, 진행 방해가 이어져 토론의 내용보다 충돌이 크게 보도됐습니다. 공청회 전체 영상은 공개됐지만 쟁점별 답변과 반영 결과를 정리한 공식 문서는 추가 확인이 필요합니다.",
        en: "The ministry held its first public hearing with three speakers on each side. Shouting and disruption by opponents overshadowed much of the substantive discussion. The full video is public, but an official issue-by-issue response and record of how comments affected the plan are still needed.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "국방부", en: "Ministry of National Defense" },
          title: { ko: "국군사관학교 창설 관련 공청회 전체 영상", en: "Full public hearing on the Armed Forces Academy" },
          url: "https://www.youtube.com/watch?v=9IqNYQjnUTQ",
          publishedAt: "2026-08-26",
          kind: "video",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-08-26-mnd-youtube.jpg",
        },
      ],
    },
    {
      date: "2026-09-01",
      title: {
        ko: "2027년도 정부 예산안에 창설 사업비 미반영",
        en: "No academy-merger funding in the government's 2027 budget proposal",
      },
      description: {
        ko: "정부가 국회에 제출하기로 한 2027년도 국방예산안 73조2,777억 원에는 국군사관학교 창설 관련 사업비가 별도 반영되지 않았습니다. 국방부는 선행연구로 사업 규모와 소요 재원을 구체화한 뒤 2028년도 예산안 편성을 검토한다는 입장입니다. 이는 통합 철회가 아니라 타당성·비용 검증과 국회 예산 심사가 남았다는 뜻이며, 2028년 편성도 아직 확정되지 않았습니다.",
        en: "The government's proposed 2027 defense budget of KRW 73.2777 trillion contains no dedicated funding for creating the Armed Forces Academy. The ministry says it will define the project's scale and financing through preliminary studies before considering the 2028 budget. This does not cancel the merger, but it leaves feasibility, cost and parliamentary funding review unresolved; 2028 funding is not confirmed.",
      },
      change: {
        ko: "기본계획 발표 뒤에도 첫해 사업비가 편성되지 않아 재원·일정의 불확실성이 공식 예산안에서 확인",
        en: "The first post-plan budget proposal confirms continued uncertainty over financing and schedule",
      },
      status: "new",
      sources: [
        {
          publisher: { ko: "동아일보", en: "The Dong-A Ilbo" },
          title: { ko: "내년 국방예산 70조 첫 돌파…사관학교 통합 예산은 반영 안해", en: "2027 defense budget proposal omits academy-merger funding" },
          url: "https://www.donga.com/news/Politics/article/all/20260901/134583162/1",
          publishedAt: "2026-09-01",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-09-01-donga.jpg",
        },
      ],
    },
    {
      date: "2026-09-16",
      title: {
        ko: "장관 후보자 ‘현재 안은 완전하지 않다’",
        en: "Defense minister nominee calls the current plan incomplete",
      },
      description: {
        ko: "강신철 현 국방부 장관은 후보자 인사청문회에서 사관학교 개혁과 통합교육의 필요성에는 동의했지만 현 기본안에는 보완할 부분이 있다고 밝혔습니다. 물리적 통합뿐 아니라 비물리적 연결도 가능하며 여러 의견을 듣겠다고 말했습니다. 9월 22일 취임했지만 수정안은 아직 발표하지 않아, 10월 세부계획이 기본안의 골격을 얼마나 바꿀지가 관찰 지점입니다.",
        en: "At his confirmation hearing, now-defense minister Kang Shin-chul supported academy reform and integrated education but said the current basic plan needed improvement. He noted that integration could be physical or non-physical and promised to hear competing views. He took office on September 22 but has not announced revisions, making the October detailed plan the next test of how much the July framework may change.",
      },
      change: {
        ko: "차기 국방부 수장이 기본안의 보완 가능성을 공개적으로 인정",
        en: "Incoming defense leadership publicly acknowledges room to revise the basic plan",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: { ko: "강신철 ‘현재 안, 보완할 부분 보여’", en: "Kang Shin-chul says current academy plan needs improvement" },
          url: "https://www.yna.co.kr/amp/view/AKR20260916093451504",
          publishedAt: "2026-09-16",
          kind: "article",
          thumbnailSrc: "images/monitoring/military-academy-news/2026-09-16-yonhap.jpg",
        },
      ],
    },
    {
      date: "2026-10-01",
      title: {
        ko: "세부계획과 설치법안 확인",
        en: "Review the detailed plan and enabling legislation",
      },
      description: {
        ko: "국방부가 예고한 세부계획에서 통합 선발 시점과 방식, 각 군 전문교육, ROTC·학사장교 교육, 자운대 이전 일정과 재원, 기존 부지 활용이 어떻게 정리되는지 확인합니다. 발표 일정이 달라지면 날짜를 수정합니다.",
        en: "SEED will review admissions timing and design, service-specific education, ROTC and officer-candidate reform, the Jaun-dae schedule and financing, and reuse of existing campuses. The date will be updated if the ministry's schedule changes.",
      },
      status: "pending",
    },
  ],
  confirmedFacts: [
    {
      ko: "7월 16일 기본계획은 대전 자운대에서 4년간 통합교육하는 국군사관학교를 제시했지만 첫 통합 입학 연도를 확정하지 않았습니다.",
      en: "The July 16 plan proposed four years of integrated education at Jaun-dae but did not set the first integrated admissions year.",
    },
    {
      ko: "정부는 저학년 공통교육과 고학년 군별 전공심화를 병행하고, 단계적으로 간호사관학교·첨단기술사관학교와 학군·학사 과정까지 연계한다는 구상입니다.",
      en: "The government proposes common early coursework, later service-specific study and eventual links to nursing, advanced-technology, ROTC and officer-candidate programs.",
    },
    {
      ko: "2024년 신임장교의 약 70%는 ROTC·학사장교 출신이었고 3군 사관학교 출신은 약 14%였습니다.",
      en: "ROTC and officer-candidate routes produced about 70 percent of new officers in 2024; the three service academies produced about 14 percent.",
    },
    {
      ko: "ROTC·학사장교의 임관 전 합동성 교육은 2시간, 육사의 합동작전 교육은 280시간으로 집계됐습니다.",
      en: "Pre-commission joint instruction was reported at two hours for ROTC and officer candidates, compared with 280 hours at KMA.",
    },
    {
      ko: "강신철 현 국방부 장관은 후보자였던 9월 16일 현재 기본안이 완전하지 않으며 보완이 필요하다고 밝혔습니다.",
      en: "On September 16, then-defense minister nominee Kang Shin-chul said the current plan was incomplete and needed improvement.",
    },
    {
      ko: "2027년도 정부 국방예산안에는 국군사관학교 창설 사업비가 별도 반영되지 않았으며, 2028년 편성은 선행연구 뒤 검토할 사안입니다.",
      en: "The government's 2027 defense budget proposal contains no dedicated Armed Forces Academy funding; possible 2028 funding remains subject to preliminary studies.",
    },
  ],
  questions: [
    {
      ko: "통합으로 높이겠다는 ‘합동성’을 어떤 시험·훈련·야전 성과로 측정하고, 현행 교육과 비교할 것입니까?",
      en: "What tests, exercises and field outcomes will measure the jointness the merger is meant to improve, and what is the baseline?",
    },
    {
      ko: "초급장교 다수를 배출하는 ROTC·학사장교의 합동성 교육 2시간을 언제, 어느 수준까지 늘릴 계획입니까?",
      en: "When and by how much will the two hours of joint instruction for ROTC and officer candidates be expanded?",
    },
    {
      ko: "자운대 신축·이전과 기존 세 사관학교 시설 재배치의 총사업비, 재원, 단계별 일정은 얼마입니까?",
      en: "What are the full cost, funding source and phased schedule for Jaun-dae construction, relocation and reuse of the three campuses?",
    },
    {
      ko: "해군 함정·해양교육과 공군 비행·항공교육처럼 현장 시설이 필요한 전문교육을 한 캠퍼스에서 어떻게 보장합니까?",
      en: "How will one campus support specialized naval and air-force training that depends on ships, maritime facilities, flight operations and aviation infrastructure?",
    },
    {
      ko: "공청회와 연구용역에서 나온 찬반 의견 가운데 무엇을 수용·배제했는지 근거와 함께 공개할 수 있습니까?",
      en: "Will the ministry publish which hearing and research recommendations it accepted or rejected, with reasons?",
    },
  ],
  proposals: [
    {
      ko: "사관학교·3사·ROTC·학사장교의 인원, 교육시간, 합동교육, 양성비용과 임관 뒤 보직·진급을 같은 표로 공개합니다.",
      en: "Publish one comparable table covering numbers, training hours, joint instruction, cost, assignments and promotion outcomes across every commissioning route.",
    },
    {
      ko: "물리적 통합안과 네트워크형 통합안의 교육 효과·비용·전문성 위험을 독립 평가해 국회 입법 전에 공개합니다.",
      en: "Commission an independent comparison of physical merger and networked integration, covering learning outcomes, cost and risks to service expertise, before legislation.",
    },
    {
      ko: "ROTC·학사장교 합동교육 보강을 사관학교 통합과 같은 일정표에 넣고 매년 교육시간과 성과를 공개합니다.",
      en: "Put ROTC and officer-candidate joint education on the same reform timetable and report annual hours and outcomes.",
    },
    {
      ko: "기존 부지 매각·전용 여부와 자운대 사업비는 별도 시민 원장으로 공개해 교육개혁과 부동산 처분을 분리해 검증합니다.",
      en: "Publish a separate public ledger for campus sale or reuse and Jaun-dae spending so educational reform and property disposal can be audited independently.",
    },
  ],
  sources: [
    {
      label: { ko: "국방부 — 국군사관학교 창설 공청회 전체 영상", en: "Defense Ministry — Full public hearing" },
      url: "https://www.youtube.com/watch?v=9IqNYQjnUTQ",
    },
    {
      label: { ko: "연합뉴스 — 국군사관학교 기본계획", en: "Yonhap — Armed Forces Academy basic plan" },
      url: "https://www.yna.co.kr/view/AKR20260716039653001",
    },
    {
      label: { ko: "서울신문 — 장교 양성기관별 합동성 교육 현황", en: "Seoul Shinmun — Joint education by commissioning route" },
      url: "https://v.daum.net/v/20260730165938000",
    },
    {
      label: { ko: "동아일보 — 국방부의 역사 단절 설명", en: "Dong-A Ilbo — Ministry's historical-rupture explanation" },
      url: "https://www.donga.com/news/Politics/article/all/20260807/134437766/1",
    },
    {
      label: { ko: "연합뉴스 — 국방부 장관 후보자 인사청문회", en: "Yonhap — Defense minister nominee's testimony" },
      url: "https://www.yna.co.kr/amp/view/AKR20260916093451504",
    },
    {
      label: { ko: "동아일보 — 2027년도 정부 국방예산안", en: "The Dong-A Ilbo — Government's 2027 defense budget proposal" },
      url: "https://www.donga.com/news/Politics/article/all/20260901/134583162/1",
    },
  ],
};
