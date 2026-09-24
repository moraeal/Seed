import type { PublicInterestWatchCase } from "./publicInterestWatch";

export const farmlandCensusTracker: PublicInterestWatchCase = {
  slug: "farmland-census-disposal-orders-tracker",
  organization: {
    ko: "전국 농지 전수조사",
    en: "National Farmland Census",
  },
  eyebrow: {
    ko: "농지 소유·처분·이행강제금",
    en: "Ownership · Disposal · Enforcement charges",
  },
  title: {
    ko: "농지 27%는 누가 사나",
    en: "Who Will Buy the 27 Percent of Farmland Flagged for Review?",
  },
  summary: {
    ko: "전국 농지 기본조사에서 약 30만㏊가 법 위반 의심 대상으로 분류됐습니다. 아직 위법이 확정된 농지가 아닙니다. 씨앗은 심층조사 결과부터 처분명령, 매년 25%의 이행강제금, 농지은행의 수용 능력과 실제 농민에게 이전된 면적까지 한 기록에서 추적합니다.",
    en: "Administrative screening flagged roughly 300,000 hectares—about 27 percent of the area reviewed—for possible violations. These are not confirmed violations. SEED tracks the field-review results, disposal orders, annual 25 percent enforcement charges, the Farmland Bank's capacity and the area that ultimately reaches working farmers.",
  },
  status: {
    ko: "당정 후속조치 발표·심층조사 진행",
    en: "Follow-up measures announced · Field review under way",
  },
  openedAt: "2026-02-24",
  updatedAt: "2026-09-24",
  nextCheck: {
    ko: "11월 15일까지의 임대차 특별정비 결과, 심층조사 후 실제 위법 확정 면적, 연내 의결을 목표로 한 처분 유예·사후 전용 추인 특별조치법의 발의·심사, 농지은행 위탁·매입 실적",
    en: "Results of the lease regularization period through November 15; area confirmed in violation after field review; introduction and review of the special-act bill on deferrals and retroactive conversion approval, which the government aims to pass by year-end; and Farmland Bank trust and purchase results",
  },
  heroImage: {
    src: "images/monitoring/farmland-census-tracker-hero.webp",
    alt: {
      ko: "조사원들이 농촌 현장에서 항공사진과 태블릿을 대조하며 농지를 확인하는 모습",
      en: "Inspectors compare aerial imagery with a tablet while checking farmland in the field",
    },
    caption: {
      ko: "행정정보가 의심 농지를 추려낼 수는 있습니다. 위법 확정과 처분은 현장 확인, 소명, 구제 절차를 거쳐야 합니다.",
      en: "Administrative data can flag land for review. A final violation finding and disposal order require field verification, explanation and meaningful remedies.",
    },
    credit: {
      ko: "씨앗의 소리 AI 제작 이미지",
      en: "AI-assisted image by SEED VOICE",
    },
  },
  sourceBasis: {
    ko: "농림축산식품부의 조사계획·법 개정 보도자료·예산안과 2026년 9월 17일 농지은행 임대위탁 실적, 9월 21일 당정 후속조치, 9월 22일 청와대 설명, 국가법령정보센터의 현행 농지법과 헌법재판소 결정례, 7월 말 기본조사 결과를 날짜별로 대조했습니다. 27%를 위법 확정 비율로 쓰지 않았고, 처분 유예와 사후 전용 추인은 아직 특별조치법 제정이 필요한 정책 방향으로 구분했습니다.",
    en: "This record cross-checks the Agriculture Ministry's census plan, legislative releases and budget proposal, Farmland Bank lease-entrustment results released on September 17, the government-party follow-up measures announced on September 21, the presidential office's September 22 briefing, the current Farmland Act, Constitutional Court decisions and the late-July screening results. It does not treat 27 percent as a confirmed violation rate, and distinguishes disposal deferrals and retroactive conversion approval as policy proposals that still require special legislation.",
  },
  caution: {
    ko: "27%는 행정정보 기본조사에서 추출된 위반 의심 비율입니다. 실제 위법과 처분 대상 규모는 심층조사와 소명 절차 뒤 달라질 수 있습니다. ‘4년이면 100%’는 첫 부과 뒤 평가액이 변하지 않고 매년 25%씩 네 번 부과된다는 단순 계산입니다.",
    en: "The 27 percent figure is an administrative-screening result, not a confirmed violation rate. The final area in violation or subject to disposal may change after field review. The four-year, 100 percent illustration assumes an unchanged valuation and four annual charges after the first assessment.",
  },
  keyChanges: [
    {
      date: "2026-09-22",
      text: {
        ko: "청와대는 이번 전수조사에서 처분 관련 통지가 아직 한 건도 나가지 않았다고 확인했습니다. 27% 의심 분류가 처분 단계로 넘어간 수치는 아니라는 점이 공식 확인됐습니다.",
        en: "The presidential office confirmed that no disposal notice had yet been issued from this census. The 27 percent flagged in screening is not a count that has advanced to disposal.",
      },
    },
    {
      date: "2026-09-21",
      text: {
        ko: "당정은 투기성·중대한 위반은 법대로 조치하되 관행적 임대차는 농지은행 위탁 시 처분을 유예하고, 경미한 불법 전용은 사후 추인하는 특별조치법의 국회 의결을 연내 마무리하겠다고 밝혔습니다.",
        en: "The government and ruling party said speculative and serious violations would face enforcement, while customary leases could receive disposal deferrals through the Farmland Bank and minor unauthorized conversions could be regularized under special legislation they aim to pass by year-end.",
      },
    },
    {
      date: "2026-09-17",
      text: {
        ko: "5월 18일부터 9월 14일까지 농지은행 임대위탁은 3만3,168건·1만909㏊로 집계돼 전년 동기보다 건수는 78.3%, 면적은 84.9% 증가했습니다.",
        en: "From May 18 through September 14, Farmland Bank lease entrustments reached 33,168 contracts covering 10,909 hectares, up 78.3 percent in contracts and 84.9 percent in area year on year.",
      },
    },
    {
      date: "2026-07-30",
      text: {
        ko: "기본조사 대상의 약 97%를 확인한 결과 약 27%, 30만㏊가 위반 의심 대상으로 분류됐습니다.",
        en: "With about 97 percent of the administrative screening complete, roughly 27 percent—300,000 hectares—was flagged for further review.",
      },
    },
    {
      date: "2026-08-28",
      text: {
        ko: "개정 농지법이 시행되면서 농지 전수조사와 처분명령 집행을 위한 권한이 강화됐습니다.",
        en: "Amendments strengthening the legal basis for the census and disposal enforcement took effect.",
      },
    },
    {
      date: "2026-09-10",
      text: {
        ko: "경실련은 농민 피해 가능성을 인정하면서도 정부에 전수조사를 좌고우면하지 말고 완수하라고 촉구했습니다.",
        en: "CCEJ acknowledged potential harm to farmers while urging the government to complete the census without hesitation.",
      },
    },
  ],
  timeline: [
    {
      date: "2026-02-24",
      title: {
        ko: "대통령, 농지 사용실태 전수조사 검토 지시",
        en: "President orders review of a nationwide farmland census",
      },
      description: {
        ko: "국무회의에서 농지 가격과 투기 문제를 거론하며 농지 사용실태 전수조사와 사후관리 강화를 검토하라고 지시했습니다. 전국 조사 추진의 정치적 출발점입니다.",
        en: "At a cabinet meeting, the president raised farmland prices and speculation and ordered review of a nationwide use census and stronger follow-up management. This became the political starting point of the current program.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "미주중앙일보", en: "Korea Daily" },
          title: { ko: "이 대통령 ‘농지 사놓고 농사짓지 않으면 강제매각해야’…전수조사 지시", en: "President orders farmland census and calls for forced sale of unused farmland" },
          url: "https://www.koreadaily.com/article/20260223210612398",
          publishedAt: "2026-02-24",
          kind: "article",
          thumbnailSrc: "https://www.koreadaily.com/data/photo/2026/02/24/bf8b3761-3149-44ea-aebb-6dcbb702fb8a.jpg",
        },
      ],
    },
    {
      date: "2026-03-31",
      title: {
        ko: "2년에 걸친 전수조사 계획 공개",
        en: "Two-year census plan is published",
      },
      description: {
        ko: "정부는 2026년에 1996년 농지법 시행 이후 취득 농지를, 2027년에 그 이전 취득 농지를 조사하기로 했습니다. 행정정보·항공사진·위성·드론과 AI로 의심 농지를 추출하고 현장점검을 병행하는 방식입니다.",
        en: "The government said it would review land acquired after the Farmland Act took effect in 1996 during 2026, then examine earlier acquisitions in 2027. Administrative data, aerial and satellite imagery, drones and AI would flag parcels for field review.",
      },
      change: {
        ko: "일부 위험군 조사에서 전국 단위 조사로 확대",
        en: "Review expands from risk groups to a nationwide program",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "매일경제", en: "Maeil Business Newspaper" },
          title: { ko: "농사 안 짓는 농지 다 잡는다…5월부터 수도권 중심으로 전수조사", en: "Nationwide farmland census begins with the Seoul metropolitan area in May" },
          url: "https://www.mk.co.kr/news/economy/12005586",
          publishedAt: "2026-04-01",
          kind: "article",
          thumbnailSrc: "https://pimg.mk.co.kr/news/cms/202604/01/news-g.v1.20260401.d943a43891b8403597c474ab326d52f8_R.jpg",
        },
      ],
    },
    {
      date: "2026-05-07",
      title: {
        ko: "전수조사·처분명령 강화 농지법 개정안 통과",
        en: "Amendments strengthen census and disposal enforcement",
      },
      description: {
        ko: "국회 본회의가 조사원의 토지 출입 근거, 불법 임대차 신고포상금 확대와 농지 처분명령 강화를 담은 개정안을 의결했습니다. 조사 결과를 실제 행정처분으로 연결할 법적 기반이 강화됐습니다.",
        en: "The National Assembly approved provisions covering inspectors' access to land, rewards for reporting illegal leases and stronger disposal enforcement. The amendments expanded the legal basis for turning census findings into administrative action.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "뉴스프리존", en: "News Free Zone" },
          title: { ko: "농지 전수조사 법제화…전북 긴장", en: "Farmland census written into law" },
          url: "https://www.newsfreezone.co.kr/news/articleView.html?idxno=688571",
          publishedAt: "2026-05-07",
          kind: "article",
          thumbnailSrc: "https://cdn.newsfreezone.co.kr/news/thumbnail/202605/688571_732223_2717_v150.jpg",
        },
      ],
    },
    {
      date: "2026-05-18",
      title: {
        ko: "전국 농지 기본조사 시작",
        en: "Nationwide administrative screening begins",
      },
      description: {
        ko: "1996년 이후 취득 농지를 중심으로 기본조사가 시작됐습니다. 정부는 5~7월 행정정보를 확인하고 8월부터 의심 농지와 투기 위험군을 현장에서 점검하는 일정을 제시했습니다.",
        en: "Administrative screening began with land acquired since 1996. The government scheduled data review from May through July and field checks of flagged parcels and speculation-risk groups from August.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "동아일보", en: "The Dong-A Ilbo" },
          title: { ko: "사상 첫 농지 전수조사 오늘 착수…투기 의심지역 현장조사", en: "First nationwide farmland census begins" },
          url: "https://www.donga.com/news/Economy/article/all/20260517/133939093/2",
          publishedAt: "2026-05-18",
          kind: "article",
          thumbnailSrc: "https://dimg.donga.com/wps/NEWS/IMAGE/2026/05/18/133940385.1.jpg",
        },
      ],
    },
    {
      date: "2026-07-30",
      title: {
        ko: "약 27%·30만㏊가 위반 의심 대상으로 분류",
        en: "About 27 percent—300,000 hectares—is flagged",
      },
      description: {
        ko: "기본조사 대상의 약 97%를 확인한 시점에 전체의 약 27%가 위반 의심 대상으로 분류됐습니다. 불법 임대차 의심 21.1%, 무단 휴경 11.6%, 불법 전용 9.0%, 소유 제한 위반 1.4% 등이었으며 유형은 중복될 수 있습니다. 이 수치는 위법 확정 비율이 아닙니다.",
        en: "When about 97 percent of the screening had been completed, roughly 27 percent was flagged. Categories included suspected illegal leases at 21.1 percent, unauthorized idling at 11.6 percent, unauthorized conversion at 9.0 percent and ownership-limit issues at 1.4 percent. Categories may overlap, and the figure is not a confirmed violation rate.",
      },
      change: {
        ko: "전수조사의 첫 전국 규모 수치 공개",
        en: "First nationwide screening figure released",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "매일경제", en: "Maeil Business Newspaper" },
          title: { ko: "농지 27% ‘법 위반’ 의심…내달 심층조사", en: "Twenty-seven percent of farmland flagged for possible violations" },
          url: "https://www.mk.co.kr/news/economy/12112144",
          publishedAt: "2026-07-30",
          kind: "article",
          thumbnailSrc: "https://pimg.mk.co.kr/news/cms/202607/31/20260731_01160112000001_M00.jpg",
        },
      ],
    },
    {
      date: "2026-08-01",
      title: {
        ko: "위반 의심 농지 현장 심층조사 시작",
        en: "Field review of flagged land begins",
      },
      description: {
        ko: "정부는 기본조사에서 추출한 의심 농지와 토지거래허가구역·수도권·경매 취득자·외국인 소유 농지 등 위험군을 현장에서 확인하기 시작했습니다. 실제 위법과 처분 대상 규모는 이 단계의 소명과 판정으로 달라질 수 있습니다.",
        en: "Officials began field checks of parcels flagged in screening and risk groups such as land in transaction-permit zones, the Seoul metropolitan area, auction acquisitions and foreign-owned farmland. The final violation and disposal totals may change through explanation and review at this stage.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "팜인사이트", en: "Farm Insight" },
          title: { ko: "농지 전수조사 결과 27% ‘위반 의심’…8월부터 심층조사 돌입", en: "Field review begins in August after 27 percent is flagged" },
          url: "https://www.farminsight.net/news/articleView.html?idxno=16705",
          publishedAt: "2026-07-31",
          kind: "article",
          thumbnailSrc: "https://www.farminsight.net/news/photo/202607/16705_24024_4715.jpg",
        },
      ],
    },
    {
      date: "2026-09-10",
      title: {
        ko: "경실련, ‘좌고우면 말고 완수’ 촉구",
        en: "CCEJ urges completion without hesitation",
      },
      description: {
        ko: "경실련은 농지 투기와 위장농업인 문제를 들어 전수조사를 계획대로 완수하라고 촉구했습니다. 동시에 고령화·영농승계·관행적 임대차와 임차농 피해 가능성을 인정하고 보완책을 주문했습니다. 조사 속도와 처분의 현실적 출구를 어떻게 함께 확보할지가 남았습니다.",
        en: "CCEJ cited speculation and sham farmers in urging completion of the census. It also acknowledged aging, succession, customary leasing and potential harm to tenant farmers, and called for safeguards. The unresolved question is how enforcement can proceed without eliminating a workable exit.",
      },
      status: "response",
      sources: [
        {
          publisher: { ko: "프레시안", en: "Pressian" },
          title: { ko: "경실련 ‘농지조사가 공산주의? 장동혁, 이념공세 멈춰야’", en: "CCEJ urges government to complete farmland census" },
          url: "https://www.pressian.com/pages/articles/2026091017275817849",
          publishedAt: "2026-09-11",
          kind: "article",
          thumbnailSrc: "https://www.pressian.com/_resources/10/2026/09/11/2026091017273283345_l.jpg",
        },
      ],
    },
    {
      date: "2026-09-17",
      title: {
        ko: "농지은행 임대위탁 1만909㏊…전년보다 84.9% 증가",
        en: "Farmland Bank lease entrustments rise 84.9 percent to 10,909 hectares",
      },
      description: {
        ko: "농식품부는 5월 18일부터 9월 14일까지 농지은행 임대위탁 계약이 3만3,168건·1만909㏊로 집계됐다고 밝혔습니다. 전년 동기 1만8,603건·5,899㏊보다 건수는 78.3%, 면적은 84.9% 늘었습니다. 이는 음성적 임대차를 농지은행 계약으로 전환한 실적이며, 청년농·자경농에게 최종 이전된 면적을 뜻하지는 않습니다.",
        en: "The Agriculture Ministry reported 33,168 Farmland Bank lease-entrustment contracts covering 10,909 hectares from May 18 through September 14. That was 78.3 percent more contracts and 84.9 percent more area than the 18,603 contracts and 5,899 hectares recorded a year earlier. The figures measure leases formalized through the Farmland Bank, not final transfers to young or working farmers.",
      },
      change: {
        ko: "전수조사 이후 임대차 정상화가 실제 계약 실적으로 나타나기 시작했습니다.",
        en: "Lease regularization after the census began to appear in actual contract data.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "농림축산식품부", en: "Ministry of Agriculture, Food and Rural Affairs" },
          title: {
            ko: "“투기와 농촌의 일반적 위반은 구분한다” 농지 전수조사 원칙은 항상 분명했습니다.",
            en: "Ministry briefing distinguishes speculation from customary rural violations",
          },
          url: "https://www.mafra.go.kr/bbs/home/793/579216/artclView.do",
          publishedAt: "2026-09-17",
          kind: "document",
        },
      ],
    },
    {
      date: "2026-09-21",
      title: {
        ko: "관행적 임대차 처분 유예·불법 전용 양성화 방침 발표",
        en: "Government announces deferrals for customary leases and a path to regularize minor conversions",
      },
      description: {
        ko: "당정은 투기 목적의 농지 보유와 농업진흥지역의 중대한 불법 전용은 현행법에 따라 조치하되, 투기와 무관한 관행적 임대차는 농지은행에 위탁하면 처분을 유예하기로 했습니다. 임대차 특별정비 기간은 11월 15일까지 연장합니다. 소유한 지 3년이 지난 농지를 조사기간 안에 농지은행에 위탁 임대하면 보완조사에서 제외하고 임대차 위반으로 보지 않는 방안도 추진합니다. 경미한 불법 전용은 요건 심사와 농지보전부담금 부과 뒤 사후 추인하며, 정부는 이를 위한 특별조치법의 국회 의결을 연내 마치겠다고 밝혔습니다. 법률이 아직 제정된 것은 아니며, 실제 위법 확정과 처분의무 통지 등 사후 절차는 심층조사를 거쳐 2027년 이후 본격 진행될 예정입니다.",
        en: "The government and ruling party said speculative holdings and serious unauthorized conversion in agricultural promotion zones would remain subject to enforcement. Customary leases unrelated to speculation could receive a disposal deferral if entrusted to the Farmland Bank, and the lease regularization period was extended through November 15. They also proposed excluding land held for more than three years from supplementary review—and not treating it as an unlawful lease—when it is entrusted to the Farmland Bank during the review period. Minor unauthorized conversions could receive retroactive approval after eligibility review and payment of farmland-preservation charges. The government aims to complete National Assembly passage of the special legislation by year-end, but the law has not yet been enacted. Final violation findings and disposal-duty notices are expected to proceed in earnest only after field review, from 2027 onward.",
      },
      change: {
        ko: "일률적 처분 우려에서 위반 유형별 처분·유예·정상화 체계로 정책 방향 구체화",
        en: "Policy shifts from fears of blanket disposal toward differentiated enforcement, deferral and regularization",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "매일경제", en: "Maeil Business Newspaper" },
          title: {
            ko: "농지 27% 위법 의심 … 정부 \"처분절차는 내년부터\" 일단 진화",
            en: "Government says farmland disposal procedures will begin from 2027",
          },
          url: "https://www.mk.co.kr/news/economy/12158491",
          publishedAt: "2026-09-21",
          thumbnailSrc: "/images/monitoring/farmland-census-news/2026-09-21-mk-disposal-2027.jpg",
          kind: "article",
        },
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: {
            ko: "상속·고령농지 일괄처분 면제…'관행 임대차' 조건부 처분유예",
            en: "Conditional disposal deferrals announced for inherited, elderly-owned and customary leased farmland",
          },
          url: "https://www.yna.co.kr/view/AKR20260921008700030",
          publishedAt: "2026-09-21",
          thumbnailSrc: "/images/monitoring/farmland-census-news/2026-09-21-yonhap.webp",
          kind: "article",
        },
        {
          publisher: { ko: "농림축산식품부", en: "Ministry of Agriculture, Food and Rural Affairs" },
          title: { ko: "농촌의 관행적 위반은 정상화·양성화…농지 전수조사 후속조치", en: "Follow-up measures distinguish speculative violations from customary rural practices" },
          url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156782609",
          publishedAt: "2026-09-21",
          kind: "document",
        },
      ],
    },
    {
      date: "2026-09-22",
      title: {
        ko: "전수조사 처분 통지 ‘0건’ 공식 확인",
        en: "Presidential office confirms zero disposal notices from the census",
      },
      description: {
        ko: "청와대 농림축산비서관은 9월 22일까지 2026년 농지 전수조사로 발송된 처분 관련 통지가 한 건도 없다고 밝혔습니다. 매년 실시하는 농지 이용실태조사의 통지와는 구분해야 합니다. 정부는 토지거래허가구역에서 취득했거나 경매 등으로 공유 취득했거나 허위 농업법인으로 취득한 농지 가운데 불법 임대·휴경이 확인된 경우를 투기 판정의 주요 대상으로 제시했습니다. 농지은행은 일반 농지를 감정평가에 따른 시세로, 투기 농지를 공시지가로 매입할 방침이라고 설명했습니다. 다만 심층조사의 위법 확정 통계와 세부 판정·불복 기준은 아직 공개되지 않았습니다.",
        en: "The presidential office said that, as of September 22, no disposal-related notice had been issued from the 2026 census; notices from the separate annual farmland-use survey must not be conflated with this figure. It identified likely speculation cases as unlawfully leased or idle land acquired in transaction-permit zones, through shared auction purchases or via sham agricultural corporations. The Farmland Bank plans to buy ordinary land at appraised market value and speculative land at the officially assessed value. Final field-review totals and detailed decision and appeal standards remain unpublished.",
      },
      change: {
        ko: "의심 분류 30만㏊와 실제 처분 집행 사이의 현재 간극을 수치로 확인",
        en: "Quantifies the current gap between 300,000 hectares flagged and actual disposal enforcement",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "SBS", en: "SBS News" },
          title: { ko: "‘농지 헐값 매입?’ 불안 커지자…청와대 직접 해명", en: "Presidential office responds to concerns over forced, below-market farmland purchases" },
          url: "https://news.sbs.co.kr/news/endPage.do?news_id=N1008765922",
          publishedAt: "2026-09-22",
          thumbnailSrc: "/images/monitoring/farmland-census-news/2026-09-22-sbs.webp",
          kind: "article",
        },
        {
          publisher: { ko: "청와대", en: "Office of the President" },
          title: { ko: "팩트방앗간: ‘농지 전수조사, 걱정하지 않으셔도 됩니다’", en: "Fact Mill: What the farmland census does and does not do" },
          url: "https://www.youtube.com/watch?v=R4na1PfwBIc",
          publishedAt: "2026-09-22",
          kind: "video",
        },
      ],
    },
  ],
  confirmedFacts: [
    {
      ko: "5월 18일부터 9월 14일까지 농지은행 임대위탁은 3만3,168건·1만909㏊였습니다. 전년 동기보다 건수는 78.3%, 면적은 84.9% 늘었지만, 이는 청년농·자경농에게 소유권이 최종 이전된 면적이 아닙니다.",
      en: "From May 18 through September 14, Farmland Bank lease entrustments totaled 33,168 contracts and 10,909 hectares, up 78.3 percent and 84.9 percent year on year. This is not the area whose ownership was ultimately transferred to young or working farmers.",
    },
    {
      ko: "청와대는 9월 22일까지 2026년 농지 전수조사에서 처분 관련 통지가 한 건도 발송되지 않았다고 확인했습니다. 이는 별도로 매년 실시하는 농지 이용실태조사의 통지 건수까지 0이라는 뜻은 아닙니다.",
      en: "The presidential office confirmed that no disposal-related notice had been issued from the 2026 census as of September 22. This does not mean that the separate annual farmland-use survey issued no notices.",
    },
    {
      ko: "정부는 특별조치법의 국회 의결을 2026년 말까지 마치겠다는 목표를 제시했지만, 9월 22일 현재 법안이 제정된 것은 아닙니다.",
      en: "The government aims to complete National Assembly passage of the special legislation by the end of 2026, but no such law had been enacted as of September 22.",
    },
    {
      ko: "9월 21일 발표된 처분 유예와 경미한 불법 전용 사후 추인은 확정 시행 제도가 아니라 특별조치법 제정이 필요한 정책 방향입니다.",
      en: "The disposal deferrals and retroactive approval for minor unauthorized conversions announced on September 21 are policy proposals requiring special legislation, not rules already in force.",
    },
    {
      ko: "기본조사의 약 27%는 위법 확정 비율이 아니라 심층조사를 위한 의심 분류입니다.",
      en: "The roughly 27 percent figure is a screening category for field review, not a confirmed violation rate.",
    },
    {
      ko: "농지 처분명령 불이행 시 감정가격과 공시지가 중 높은 금액의 25%가 이행강제금 기준이 될 수 있으며, 이행할 때까지 매년 한 차례 반복될 수 있습니다.",
      en: "Failure to comply with a disposal order can trigger an annual charge equal to 25 percent of the higher of appraised value or officially assessed land value until compliance.",
    },
    {
      ko: "첫 이행강제금 부과 전에는 원칙적으로 1년의 처분의무기간과 최장 6개월의 처분명령 단계가 있습니다.",
      en: "Before the first charge, the process generally includes a one-year disposal-obligation period and a disposal order allowing up to six additional months.",
    },
    {
      ko: "평가액이 1억원으로 변하지 않는다는 가정에서 네 차례 부과액은 누적 1억원이지만, 납부해도 처분의무는 사라지지 않습니다.",
      en: "At an unchanged KRW 100 million valuation, four annual charges total KRW 100 million, but payment does not extinguish the disposal duty.",
    },
    {
      ko: "정부의 2027년 농지 공급 지원 목표는 6,800㏊이며, 조사에서 위반 의심으로 분류된 면적은 약 30만㏊입니다. 두 수치는 직접 비교 가능한 동일한 통계는 아닙니다.",
      en: "The government's 2027 supported-supply target is 6,800 hectares, while about 300,000 hectares was flagged in screening. The two figures are not directly comparable measures.",
    },
  ],
  questions: [
    {
      ko: "특별조치법은 어떤 위반을 ‘관행적·경미한 위반’으로 규정하고, 투기와 구분하기 위한 증거·심사·불복 절차를 어떻게 설계합니까?",
      en: "How will the special-act bill define customary or minor violations, and what evidence, review and appeal procedures will distinguish them from speculation?",
    },
    {
      ko: "매수자를 찾지 못했거나 농지은행이 매입을 거절한 경우도 처분명령 불이행으로 동일하게 처리합니까?",
      en: "Is an owner treated as noncompliant even after failing to find a buyer or being refused by the Farmland Bank?",
    },
    {
      ko: "투기성 보유와 상속·고령·질병·관행적 임대차를 어떤 증거와 기준으로 구분합니까?",
      en: "What evidence distinguishes speculation from inheritance, age, illness and customary leasing?",
    },
    {
      ko: "처분된 농지가 실제 자경농과 청년농에게 얼마에, 얼마나 이전됐습니까?",
      en: "How much disposed land reaches working and young farmers, and at what price?",
    },
  ],
  proposals: [
    {
      ko: "처분 유예·사후 전용 추인의 대상과 제외 기준을 법률에 구체화하고, 투기 판정의 증거와 이의신청 절차를 함께 공개합니다.",
      en: "Define eligibility and exclusions for deferrals and retroactive approval in statute, and publish the evidence standards and appeal process used to identify speculation.",
    },
    {
      ko: "위반 확정·정당한 사유 인정·처분의무·처분명령·이행강제금을 단계별로 분리해 공개합니다.",
      en: "Publish separate totals for confirmed violations, legitimate-reason findings, disposal duties, disposal orders and enforcement charges.",
    },
    {
      ko: "농지은행 매수청구 접수·거절 사유·실제 매입면적과 매입가격을 지역별로 공개합니다.",
      en: "Disclose Farmland Bank purchase requests, refusal reasons, area purchased and prices by region.",
    },
    {
      ko: "실제 매각을 시도했지만 적격 매수자가 없었던 소유자에게 적용할 유예·구제 기준을 공개합니다.",
      en: "Publish deferral and relief standards for owners who made genuine sale attempts but found no eligible buyer.",
    },
  ],
  currentControversies: [
    {
      title: {
        ko: "처분 유예가 이미 시행되는가",
        en: "Are the disposal deferrals already in force?",
      },
      description: {
        ko: "아닙니다. 정부가 9월 21일 방향을 발표했지만 처분 유예와 사후 전용 추인의 구체적 대상·절차는 특별조치법 제정이 필요합니다. 법안 문구와 국회 심사 결과를 확인해야 합니다.",
        en: "No. The government announced the direction on September 21, but the scope and procedure for deferrals and retroactive approval require special legislation. The bill text and legislative outcome still need to be examined.",
      },
    },
    {
      title: {
        ko: "27%가 실제 처분 대상인가",
        en: "Will 27 percent actually face disposal?",
      },
      description: {
        ko: "아닙니다. 현재 수치는 행정정보상 의심 분류입니다. 심층조사 뒤 위법이 확인되고 정당한 사유가 인정되지 않아야 처분 절차로 이어집니다.",
        en: "No. The figure is an administrative flag. Disposal requires a confirmed violation after field review and no accepted legitimate reason.",
      },
    },
    {
      title: {
        ko: "팔리지 않는 땅에도 매년 25%를 부과할 수 있나",
        en: "Can a 25 percent annual charge apply when no buyer exists?",
      },
      description: {
        ko: "현행 제도는 정당한 사유와 매수청구 절차를 두고 있습니다. 그러나 실제 매수 노력과 농지은행 거절이 어떤 경우 면책 또는 유예로 인정되는지는 집행 사례를 통해 확인해야 합니다.",
        en: "The law recognizes legitimate reasons and a public-purchase request. How genuine sale efforts and Farmland Bank refusals affect relief must be tested through actual enforcement cases.",
      },
    },
    {
      title: {
        ko: "농지은행이 처분 물량을 받아낼 수 있나",
        en: "Can the Farmland Bank absorb the volume?",
      },
      description: {
        ko: "2027년 공급 지원 확대계획은 확인됐지만 전수조사로 나올 처분 물량과 지역별 매입 능력을 연결한 공식 수급표는 아직 확인되지 않았습니다.",
        en: "The 2027 expansion plan is public, but no official supply-demand table yet connects likely census-driven disposals with regional purchase capacity.",
      },
    },
  ],
  followUpChecks: [
    { ko: "11월 15일까지의 임대차 특별정비 신청·위탁·제외 실적", en: "Applications, Farmland Bank trusts and exclusions during the lease regularization period through November 15" },
    { ko: "연내 의결 목표인 처분 유예·사후 전용 추인 특별조치법의 발의안·심사·시행 기준", en: "Bill text, review and implementation standards for the year-end-targeted special act on deferrals and retroactive approval" },
    { ko: "심층조사 완료 면적과 실제 위법 확정 비율", en: "Area field-reviewed and final violation rate" },
    { ko: "유형별 처분의무 통지와 처분명령 건수", en: "Disposal duties and orders by violation category" },
    { ko: "이의신청·행정소송과 처분 취소 사례", en: "Appeals, administrative suits and canceled orders" },
    { ko: "이행강제금 부과·징수·체납액", en: "Enforcement charges assessed, collected and unpaid" },
    { ko: "농지은행 매수청구·거절·매입 면적", en: "Farmland Bank requests, refusals and purchases" },
    { ko: "처분 전후 지역별 농지 실거래가격", en: "Regional transaction prices before and after disposals" },
    { ko: "청년농·자경농에게 이전된 면적과 실제 경작 여부", en: "Area reaching young and working farmers and whether it is cultivated" },
    { ko: "고령농·상속농지·임차농에 적용된 예외와 구제 결과", en: "Exceptions and relief for elderly farmers, inherited land and tenants" },
  ],
  sectionHeadings: {
    facts: { ko: "지금까지 확인된 숫자와 절차", en: "Numbers and procedures established so far" },
    controversies: { ko: "아직 답이 나오지 않은 문제", en: "Questions still unresolved" },
    followUp: { ko: "앞으로 확인할 처분과 이전 결과", en: "Disposal and transfer outcomes to track" },
  },
  continuationEligible: true,
  sources: [
    {
      label: { ko: "매일경제 — 실제 처분절차는 2027년 이후", en: "Maeil Business Newspaper — Disposal procedures expected from 2027" },
      url: "https://www.mk.co.kr/news/economy/12158491",
      note: { ko: "심층조사 이후 위법 확정·처분의무 통지 일정", en: "Timing for final violation findings and disposal-duty notices after field review" },
    },
    {
      label: { ko: "농림축산식품부 — 농지은행 임대위탁 실적", en: "Agriculture Ministry — Farmland Bank lease-entrustment results" },
      url: "https://www.mafra.go.kr/bbs/home/793/579216/artclView.do",
      note: { ko: "2026년 5월 18일~9월 14일 3만3,168건·1만909㏊", en: "33,168 contracts and 10,909 hectares from May 18 through September 14, 2026" },
    },
    {
      label: { ko: "연합뉴스 — 상속·고령농지와 관행 임대차 후속조치", en: "Yonhap — Follow-up measures for inherited, elderly-owned and customarily leased farmland" },
      url: "https://www.yna.co.kr/view/AKR20260921008700030",
      note: { ko: "연내 특별조치법 의결 목표·3년 이상 보유 농지 위탁 기준", en: "Year-end legislative target and proposed Farmland Bank rule for land held more than three years" },
    },
    {
      label: { ko: "농림축산식품부 농지 전수조사 후속조치", en: "Agriculture Ministry follow-up measures for the farmland census" },
      url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156782609",
      note: { ko: "2026년 9월 21일 당정협의 결과·처분 유예·특별조치법 추진 방향", en: "September 21 government-party measures on disposal deferrals and proposed special legislation" },
    },
    {
      label: { ko: "정부·여당 농지 전수조사 추진계획", en: "Government farmland census plan" },
      url: "https://www.mafra.go.kr/bbs/home/792/596131/download.do",
      note: { ko: "2년 조사 범위와 행정정보·현장조사 방식", en: "Two-year scope and data/field-review method" },
    },
    {
      label: { ko: "농림축산식품부 농지법 개정 보도자료", en: "Agriculture Ministry release on Farmland Act amendments" },
      url: "https://www.mafra.go.kr/bbs/home/792/577856/artclView.do",
    },
    {
      label: { ko: "매일경제 기본조사 결과 보도", en: "Maeil Business Newspaper on screening results" },
      url: "https://www.mk.co.kr/news/economy/12112144",
    },
    {
      label: { ko: "농림축산식품부 농지제도 안내서", en: "Agriculture Ministry farmland-system guide" },
      url: "https://www.mafra.go.kr/bbs/mafra/71/254918/download.do",
      note: { ko: "처분명령과 매년 25% 이행강제금 절차", en: "Disposal-order and annual 25 percent charge process" },
    },
    {
      label: { ko: "농림축산식품부 2027년 예산안", en: "Agriculture Ministry 2027 budget proposal" },
      url: "https://www.mafra.go.kr/bbs/home/792/599930/download.do",
      note: { ko: "농지 공급 지원 5,230㏊에서 6,800㏊ 확대계획", en: "Plan to expand supported farmland supply from 5,230 to 6,800 hectares" },
    },
    {
      label: { ko: "헌법재판소 농지 이행강제금 결정", en: "Constitutional Court decision on farmland enforcement charges" },
      url: "https://law.go.kr/LSW/detcInfoP.do?detcSeq=13001&mode=1",
    },
    {
      label: { ko: "경실련 농지전수조사 성명", en: "CCEJ statement on the farmland census" },
      url: "https://ccej.or.kr/posts/kZtq6wb",
    },
  ],
};
