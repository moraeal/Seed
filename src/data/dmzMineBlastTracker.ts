import type { PublicInterestWatchCase, WatchTimelineSource } from "./publicInterestWatch";

const source = (publisher: string, enPublisher: string, title: string, enTitle: string, url: string, publishedAt: string): WatchTimelineSource => ({
  publisher: { ko: publisher, en: enPublisher }, title: { ko: title, en: enTitle }, url, publishedAt, kind: "article",
});

const initial = source("연합뉴스", "Yonhap", "DMZ 수색 중 폭발로 장병 3명 부상", "Three soldiers injured in DMZ blasts", "https://www.yna.co.kr/view/AKR20260921095652504", "2026-09-21");
const mission = source("연합뉴스", "Yonhap", "북한 지뢰 의심지대 확인을 위한 수색로 개척 중 사고", "Blasts occurred during route-clearing mission", "https://www.yna.co.kr/view/AKR20260922096100504", "2026-09-22");
const account23 = source("뉴스핌", "NewsPim", "합참, 18명 투입·두 차례 폭발 경위 설명", "Joint Chiefs detail 18-person mission and two blasts", "https://ir.newspim.com/news/view/20260923001071", "2026-09-23");
const dispute24 = source("중앙일보", "JoongAng Ilbo", "현장조사 지연 논란에 합참 안전 준비 설명", "Joint Chiefs explain safety preparations amid delay dispute", "https://www.joongang.co.kr/article/25464699", "2026-09-24");
const preparation = source("연합뉴스", "Yonhap", "합참의장 현장조사 준비 점검·유엔사 협의 설명", "Joint Chiefs describe investigation preparations", "https://www.yna.co.kr/view/AKR20260925034700504", "2026-09-25");
const approach = source("연합뉴스", "Yonhap", "군·유엔사 조사팀 폭발 원점 미도달", "Military and UN Command team could not reach blast sites", "https://www.yna.co.kr/view/AKR20260927050700504", "2026-09-27");
const interim = source("연합뉴스", "Yonhap", "합참, 북한군 지뢰 가능성 매우 높다는 중간 조사 발표", "Joint Chiefs say North Korean mine highly likely in interim assessment", "https://www.yna.co.kr/view/AKR20260928162751504", "2026-09-28");
const route = source("연합뉴스", "Yonhap", "MDL 남쪽 10여m 위험지역에서 사고", "Blasts occurred roughly 10 meters south of the MDL", "https://www.yna.co.kr/view/AKR20260928168000504", "2026-09-28");
const hearing = source("연합뉴스", "Yonhap", "국방위 29일 현안질의 예고", "Defense committee schedules September 29 hearing", "https://www.yna.co.kr/view/AKR20260928102100001", "2026-09-28");
const hearing29 = source("YTN", "YTN", "국방위 29일 긴급 현안질의 예정", "Defense committee to question officials on September 29", "https://www.ytn.co.kr/_ln/0101_202609290046222514", "2026-09-29");

export const dmzMineBlastTracker: PublicInterestWatchCase = {
  slug: "dmz-mine-blast-2026",
  organization: { ko: "합동참모본부·국방부·유엔군사령부", en: "Joint Chiefs of Staff · Defense Ministry · UN Command" },
  eyebrow: { ko: "DMZ 지뢰폭발·장병 보호", en: "DMZ mine blasts · Soldier safety" },
  title: { ko: "DMZ 지뢰폭발, 장병 3명이 다친 9월 21일부터 무엇이 밝혀졌나", en: "Three soldiers injured in DMZ blasts: What has emerged since September 21?" },
  summary: {
    ko: "9월 21일 수색로 개척 중 두 차례 폭발이 나 장병 3명이 다쳤습니다. 군은 28일 북한군 지뢰 가능성이 매우 높다고 발표했습니다. 지뢰 실물과 매설 주체의 최종 확인, 사고 전 위험평가와 사고 뒤 현장조사 경과는 계속 확인할 대상입니다.",
    en: "Two blasts injured three soldiers clearing a route on September 21. On September 28, South Korea's military said a North Korean mine was highly likely. The physical device, final attribution, pre-mission risk assessment and the investigation timeline remain under review.",
  },
  status: { ko: "북한군 지뢰 가능성 높다는 중간 판단·최종 조사 진행", en: "North Korean mine deemed highly likely · Final inquiry ongoing" },
  openedAt: "2026-09-21",
  publishedAt: "2026-09-21",
  updatedAt: "2026-09-29",
  continuationEligible: false,
  heroImage: {
    src: "/images/news/dmz-blast-investigation-timeline-2026.webp",
    alt: { ko: "지뢰 위험 표지 뒤로 이어지는 DMZ 진흙길과 철책을 표현한 상징 이미지", en: "Symbolic muddy DMZ path leading past a mine warning sign toward a fence" },
    caption: { ko: "9월 21일 사고부터 중간 조사까지의 기록입니다. 실제 사고 현장을 촬영한 사진은 아닙니다.", en: "A visual for the record from the September 21 blasts through the interim findings; this is not the accident site." },
    credit: { ko: "AI 이미지", en: "AI image" },
  },
  snapshot: {
    conclusion: {
      ko: "국과수의 장구류 1차 감정과 현장 정황을 근거로 군은 북한군 수지 반보병지뢰 가능성이 매우 높다고 판단했습니다. 이는 최종 판정과 다릅니다. 장병을 왜 그 위험지대로 보냈는지, 사고 뒤 조사 준비에는 왜 닷새가 걸렸는지도 별도로 확인해야 합니다.",
      en: "Based on initial forensic tests of soldiers' equipment and site evidence, the military considers a North Korean plastic-bodied antipersonnel mine highly likely. This is not a final attribution. The pre-mission risk decision and the five days before on-site preparations also require scrutiny.",
    },
    keyFacts: [
      { ko: "21일 오전 육군 25사단 수색로 개척 작전 중 폭발 두 차례로 3명이 다쳤습니다.", en: "On September 21, two blasts injured three soldiers during a 25th Division route-clearing mission." },
      { ko: "26일 군·유엔사가 기동로를 준비했고, 27일 조사팀은 폭발 추정 지점 가까이 갔으나 원점에 도달하지 못했습니다.", en: "The military and UN Command prepared an access route on September 26; investigators approached but did not reach the blast sites on September 27." },
      { ko: "28일 합참은 장구류에서 TNT·갈색 이물질이 검출되고 아군 지뢰에서 예상되는 철제 파편은 나오지 않았다며 북한군 지뢰 가능성이 매우 높다고 밝혔습니다.", en: "On September 28, the Joint Chiefs cited TNT and brown residue on gear, and no metal fragments expected from South Korean mines, in assessing a North Korean mine as highly likely." },
    ],
    tracking: [
      { ko: "미폭발 지뢰 1발의 실물 확보와 폭발 원점 조사, 국과수 최종 감정은 이뤄지는가", en: "Whether investigators recover the reported unexploded mine, reach the blast sites and complete forensic testing" },
      { ko: "북한군 지뢰의 종류와 매설 시점·주체를 군·유엔사가 어떤 증거로 최종 판단하는가", en: "What evidence underpins a final military and UN Command finding on device type, placement date and actor" },
      { ko: "작전 전 지형 변화·지뢰 위험평가와 보호조치, 21~26일 조사 준비의 결정 기록이 공개되는가", en: "Whether the pre-mission risk assessment, protective measures and decisions from September 21–26 are disclosed" },
    ],
  },
  keyChanges: [
    { date: "2026-09-29", text: { ko: "국회 국방위원회가 이날 국방부 장관과 합참 관계자를 상대로 사고 원인·초기 대응·조사 경과를 물을 예정입니다. 오전 확인 시점에는 회의 결과가 나오지 않았습니다.", en: "The defense committee is due to question the defense minister and Joint Chiefs officials about the cause, initial response and investigation. No hearing outcome was available at the morning check." } },
    { date: "2026-09-28", text: { ko: "합참이 국과수 1차 감정과 현장 정황을 공개하며 북한군 지뢰 가능성이 매우 높다고 중간 판단했습니다. 현장에서 목격했다는 미폭발 지뢰는 아직 실물 확인이 남았습니다.", en: "The Joint Chiefs released initial forensic results and assessed a North Korean mine as highly likely. A reportedly sighted unexploded mine still awaits physical verification." } },
    { date: "2026-09-28", text: { ko: "국회 국방위원회가 사고 부대의 조사 상황을 점검했고 29일 현안질의를 열기로 했습니다. 29일 질의 결과는 아직 이 기록에 반영되지 않았습니다.", en: "Lawmakers reviewed the inquiry at the unit and scheduled a defense committee hearing for September 29. The hearing's outcome is not yet part of this record." } },
    { date: "2026-09-27", text: { ko: "군·유엔사 합동 조사팀이 사고 지점 가까이 접근했지만 폭발 원점에는 도달하지 못했습니다.", en: "The joint military and UN Command team approached the site but could not reach the blast points." } },
  ],
  issues: [
    {
      title: { ko: "북한군 지뢰인가, 누가 언제 매설했나", en: "Was it a North Korean mine, and when was it placed?" },
      claim: { ko: "합참은 TNT와 갈색 이물질, 철제 파편 부재, 인근 북한군 매설 흔적을 종합해 북한군 수지 반보병지뢰 가능성이 매우 높다고 발표했습니다.", en: "The Joint Chiefs cited TNT, brown residue, lack of metal fragments and indications of nearby North Korean mining in assessing a North Korean plastic-bodied mine as highly likely." },
      response: { ko: "28일 발표는 중간 조사입니다. 현장에서 목격됐다는 미폭발 지뢰는 아직 확보되지 않았고 폭발물의 종류·매설 주체·시점에 대한 군·유엔사의 최종 결론도 나오지 않았습니다.", en: "The September 28 finding is interim. The reportedly sighted unexploded device had not been recovered, and the military and UN Command had not reached a final conclusion on the device, actor or timing." },
      assessment: { ko: "북한군 지뢰 가능성을 뒷받침하는 물증은 커졌습니다. 실물 감정과 현장 위치 관계가 확인되면 지뢰의 출처와 의도적 대인 공격 여부를 구분해 판단할 수 있습니다.", en: "The evidence for a North Korean mine has strengthened. Recovery and site mapping are needed to distinguish the device's origin from any claim of an intentional attack on soldiers." },
      status: "contested",
    },
    {
      title: { ko: "예고된 위험 앞에서 장병은 어떻게 보호됐나", en: "How were soldiers protected from a known risk?" },
      claim: { ko: "군은 유엔사 조사에 앞서 북한군 지뢰 매설 의심지대를 확인할 수색로를 개척하던 작전이라고 설명했습니다.", en: "The military said troops were clearing a path to inspect suspected North Korean mining before a UN Command survey." },
      response: { ko: "28일 설명대로 사고 지점은 MDL 남쪽 10여m, 북한군 지뢰 매설 의심 지형 변화 지역에서도 10여m 거리였습니다. 작전 전 위험평가와 명령, 장병에게 전달된 정보의 범위는 공개되지 않았습니다.", en: "The site was roughly 10 meters south of the demarcation line and near suspected North Korean mining. The pre-mission assessment, orders and information given to the soldiers have not been disclosed." },
      assessment: { ko: "지뢰 출처가 북한으로 확정되더라도 장병 보호 책임을 따로 점검해야 합니다. 위험을 알고도 작전을 시행했다면 어떤 탐지 장비와 중단 기준을 적용했는지 기록으로 확인할 필요가 있습니다.", en: "Even if attribution to North Korea is confirmed, the duty to protect soldiers warrants a separate examination of detection equipment, stop-work rules and mission orders." },
      status: "pending",
    },
    {
      title: { ko: "현장조사까지 걸린 시간은 어떻게 설명되는가", en: "What explains the delay before site access?" },
      claim: { ko: "합참은 유엔사와 초기부터 안전대책을 협의했으며 재폭발 위험 때문에 현장 진입 준비가 필요했다고 설명했습니다.", en: "The Joint Chiefs said safety preparations and consultations with the UN Command were needed to avoid a second blast." },
      response: { ko: "유엔사 군정위가 22일 부대를 방문했고, 군·유엔사는 26일 기동로 확보에 나섰습니다. 21일부터의 일별 협의·결정 기록은 공개되지 않았습니다.", en: "A UN Command armistice delegation visited the unit on September 22, while route preparations started September 26. The daily record of decisions has not been released." },
      assessment: { ko: "재폭발 방지는 필수입니다. 안전을 확보하기 위해 그 사이 어느 날 어떤 조치를 했는지 밝히면 불가피한 준비와 피할 수 있었던 공백을 가를 수 있습니다.", en: "Preventing another injury is essential. A dated account of safety decisions would show which time was necessary and which, if any, was avoidable." },
      status: "pending",
    },
  ],
  timeline: [
    { date: "2026-09-29", title: { ko: "국방위 긴급 현안질의 예정", en: "Defense committee hearing scheduled" }, description: { ko: "국회 국방위원회는 이날 전체회의에서 강신철 국방부 장관과 합참 관계자에게 사고 원인, 초기 대응, 현장조사 경과를 질의할 예정입니다. 오전 기준 예정된 일정이며 실제 답변이나 새 증거는 확인 후 별도로 추가합니다.", en: "The National Assembly's defense committee is scheduled to question Defense Minister Kang Shin-cheol and Joint Chiefs officials on the cause, initial response and site inquiry. This was a scheduled event as of the morning check; answers and new evidence will be added only after verification." }, change: { ko: "국회 검증 일정 확인·결과 대기", en: "Hearing scheduled; findings pending" }, status: "response", sources: [hearing29] },
    { date: "2026-09-28", title: { ko: "합참, 북한군 지뢰 가능성 매우 높다고 중간 발표", en: "Joint Chiefs make interim North Korean mine assessment" }, description: { ko: "국과수 1차 감정에서 장병 장구류에 TNT와 갈색 이물질이 검출됐고 철제 파편은 나오지 않았습니다. 합참은 북한군 수지 반보병지뢰 가능성이 매우 높다고 했습니다. 사고 때 두 발이 폭발하고 철수 중 세 번째 미폭발 지뢰를 봤다는 장병 진술도 전했습니다. 실물 확보와 최종 판정은 남아 있습니다.", en: "Initial tests found TNT and brown residue on the soldiers' gear, but no metal fragments. The Joint Chiefs assessed a North Korean plastic-bodied antipersonnel mine as highly likely and reported soldiers' account of two detonations and a third unexploded device. Recovery and final attribution remain outstanding." }, change: { ko: "원인에 관한 중간 판단과 물증 공개", en: "Interim attribution and forensic evidence" }, status: "new", sources: [interim] },
    { date: "2026-09-28", title: { ko: "사고 지점과 작전 경로 설명·국방위 29일 질의 예고", en: "Location and mission route detailed; hearing scheduled" }, description: { ko: "합참 설명상 사고 위치는 군사분계선 남쪽 10여m이며, 북한군 지뢰 매설 의심 지형 변화 지점과도 10여m 떨어졌습니다. 국회 국방위원회는 28일 부대에서 조사 상황을 살폈고 29일 현안질의를 예고했습니다. 질의가 열렸다는 결과까지 앞당겨 적지 않습니다.", en: "According to the military, the blasts occurred about 10 meters south of the MDL and about 10 meters from terrain where North Korean mines were suspected. Lawmakers reviewed the inquiry on September 28 and scheduled a hearing for September 29; no hearing outcome is claimed here." }, change: { ko: "위험지역과 국회 점검 일정 확인", en: "Risk location and parliamentary review" }, status: "response", sources: [route, hearing] },
    { date: "2026-09-27", title: { ko: "군·유엔사 조사팀, 폭발 원점 접근 실패", en: "Joint team approaches but cannot reach blast points" }, description: { ko: "조사팀 약 40명이 지뢰를 탐색하며 폭발 추정 지점 가까이 갔지만 안전 문제로 원점에 도달하지 못했습니다. 추가 조사를 예고했습니다.", en: "A team of roughly 40 searched for mines and approached the suspected blast sites but stopped short for safety reasons, with further work planned." }, change: { ko: "첫 합동 현장조사·원점 미확인", en: "First joint site inquiry; blast sites not reached" }, status: "confirmed", sources: [approach] },
    { date: "2026-09-26", title: { ko: "현장조사 대비 기동로 확보 시작", en: "Teams begin preparing a safe access route" }, description: { ko: "군과 유엔사가 DMZ에 들어가 현장조사를 위한 기동로와 작전환경을 점검했습니다. 폭발 원점을 조사한 날과 구분합니다.", en: "South Korean and UN Command personnel entered the DMZ to assess and prepare an access route. This was preparation, not an examination of the blast points." }, change: { ko: "현장 접근 준비", en: "Site-access preparation" }, status: "confirmed", sources: [approach] },
    { date: "2026-09-25", title: { ko: "합참의장 부대 방문·유엔사 협의 설명", en: "Joint Chiefs chairman visits unit; consultations described" }, description: { ko: "합참은 22일 유엔사 군정위가 사고 부대를 방문해 상황을 확인했고 초기부터 안전대책을 협의했다고 설명했습니다. 21일부터 25일까지의 세부 결정 기록은 공개되지 않았습니다.", en: "The Joint Chiefs said a UN Command delegation visited the unit on September 22 and both sides discussed safety from the outset. A detailed day-by-day decision record has not been published." }, change: { ko: "조사 준비 경위에 관한 군 설명", en: "Military account of preparations" }, status: "response", sources: [preparation] },
    { date: "2026-09-24", title: { ko: "현장조사 지연 공방·합참 안전 준비 설명", en: "Site-access delay disputed; military details safety work" }, description: { ko: "야권은 현장조사가 늦다고 비판했습니다. 합참은 2015년 사건과 달리 처음 개척하던 군사분계선 근접 수색로여서 재폭발 위험이 크다며 조사 인원 편성·훈련, 이동로 안전성 평가, 감시·통신 점검과 유엔사 임무 협의를 진행한다고 밝혔습니다. 군은 22일 국과수에 장구류와 시료의 감정을 의뢰했다고 설명했습니다. 고의 지연 여부는 확인되지 않았습니다.", en: "Opposition politicians criticized the pace of site access. The Joint Chiefs said the newly cleared route near the demarcation line carried a risk of another blast and described team training, route safety checks, communications checks and UN Command coordination. It said gear and samples had been sent for forensic testing on September 22. Intentional delay was not established." }, change: { ko: "현장조사 지연 쟁점과 군의 대응 공개", en: "Delay dispute and military response emerge" }, status: "response", sources: [dispute24] },
    { date: "2026-09-23", title: { ko: "18명 투입·두 차례 폭발 경위 설명", en: "Military details 18-person mission and two blasts" }, description: { ko: "합참은 간부 15명과 병사 3명이 새 수색로를 개척했으며 공병의 탐지·예초 작업 중 첫 폭발, 안전조치 과정에서 두 번째 폭발이 있었다는 초동 진술을 공개했습니다. 중상자 2명은 수술 뒤 회복 중이고 경상자 1명은 입원 치료 중이라고 했습니다. 당시에는 현장 정밀조사 전이라 원인·지뢰 종류·고의성을 단정하지 않았습니다.", en: "The Joint Chiefs said 15 officers and NCOs and three enlisted soldiers were clearing a new route. Initial accounts described one blast during detection and clearing, then another as the commander approached for safety measures. Two seriously injured soldiers were recovering after surgery and a third was hospitalized. The cause, device type and intent were not yet determined." }, change: { ko: "작전 인원·초동 진술·부상 경과 공개", en: "Mission size, initial accounts and injuries detailed" }, status: "confirmed", sources: [account23] },
    { date: "2026-09-22", title: { ko: "수색로 개척 작전의 목적 공개", en: "Military explains the route-clearing mission" }, description: { ko: "합참은 21일 작전이 북한군 지뢰 매설 의심지대를 확인할 유엔사 현장조사에 앞서 수색로를 만드는 임무였다고 설명했습니다. 유엔사 군정위도 이날 사고 부대를 방문했습니다.", en: "The Joint Chiefs said the September 21 mission was to clear a route for a UN Command survey of suspected North Korean mining. A UN Command armistice delegation visited the unit that day." }, change: { ko: "사고 당시 임무 목적 확인", en: "Mission purpose clarified" }, status: "confirmed", sources: [mission, preparation] },
    { date: "2026-09-21", title: { ko: "DMZ 수색로 개척 중 두 차례 폭발, 장병 3명 부상", en: "Two blasts injure three soldiers clearing a DMZ route" }, description: { ko: "오전 10시 50분께 육군 25사단 관할 서부전선 DMZ에서 수색로를 개척하던 중 폭발이 두 차례 났습니다. 수색대대장 등 2명이 중상, 1명이 경상을 입어 후송됐습니다. 당시 폭발물의 출처는 확인되지 않았습니다.", en: "At about 10:50 a.m., two blasts occurred while a 25th Division team cleared a route in the western DMZ. Two soldiers, including the reconnaissance battalion commander, were seriously injured and a third was lightly injured. The device's origin was then unknown." }, change: { ko: "사건 발생", en: "Incident begins" }, status: "confirmed", sources: [initial, mission] },
  ],
  sourceBasis: {
    ko: "9월 21일 최초 사고 보도일을 이 기록의 시작일로 삼아 29일 오전까지 나온 새 사실과 발표를 보도된 날짜에 따라 재구성했습니다. 29일 국회 현안질의는 오전 현재 예정 단계입니다. 군의 판단·현장 목격 진술·국과수 1차 감정과 최종 판정을 구분했습니다.",
    en: "This retrospective timeline starts with the first accident report on September 21 and places subsequent reporting and official statements on their respective dates through the morning of September 29. The parliamentary hearing was still scheduled, not concluded. Military assessments, witness accounts, initial forensic results and final attribution are distinguished.",
  },
  caution: {
    ko: "TNT 검출 자체만으로 지뢰의 제조·매설 주체를 특정할 수는 없습니다. 군의 ‘북한군 지뢰 가능성 매우 높음’은 여러 정황을 합친 중간 판단입니다. 미폭발 지뢰 목격은 진술이며, 북한이 장병을 겨냥해 새로 매설했다는 의도와 시점까지 확정한 결과는 아닙니다.",
    en: "TNT alone cannot establish who made or planted the device. The military's 'highly likely' assessment combines several indicators. The unexploded-mine sighting remains testimony; the timing of placement and any intent to target soldiers are not established findings.",
  },
  confirmedFacts: [
    { ko: "21일 수색로 개척 중 두 번의 폭발로 장병 3명이 다쳤습니다.", en: "Two blasts injured three soldiers during the September 21 route-clearing operation." },
    { ko: "28일 합참은 장구류 1차 감정과 현장 정황에 근거해 북한군 지뢰 가능성이 매우 높다고 발표했습니다.", en: "On September 28, the Joint Chiefs assessed a North Korean mine as highly likely based on initial tests and site information." },
  ],
  currentControversies: [
    {
      title: { ko: "북한군 지뢰인가, 매설 시점은 언제인가", en: "Was it a North Korean mine, and when was it placed?" },
      description: { ko: "합참은 북한군 지뢰 가능성이 매우 높다고 중간 판단했습니다. 미폭발 지뢰의 실물 확보와 최종 감정, 매설 주체·시점 판단은 남아 있습니다. 북한이 장병을 겨냥해 최근 매설했다는 의도까지 확인된 것은 아닙니다.", en: "The Joint Chiefs' interim assessment says a North Korean mine is highly likely. Recovery of the reported unexploded device, final testing, and attribution of who placed it and when remain pending. Intent to target the soldiers has not been established." },
    },
    {
      title: { ko: "위험을 알고도 장병을 어떻게 보호했나", en: "How were soldiers protected from a known risk?" },
      description: { ko: "군은 사전에 안전성 평가를 거쳐 탐지 장비와 보호 장구를 사용했다고 설명했습니다. 사고 지점과 지뢰 매설 의심 지역의 관계가 드러난 만큼, 실제 위험평가·작전 명령·중단 기준을 기록으로 확인해야 합니다.", en: "The military says it assessed safety and used detection equipment and protective gear. Given the site's proximity to suspected mining, the actual risk assessment, orders and stop-work criteria need documentary review." },
    },
    {
      title: { ko: "현장조사까지 닷새, 준비와 공백은 무엇이었나", en: "What happened in the five days before site access?" },
      description: { ko: "합참은 재폭발 위험 때문에 유엔사와 안전조치를 준비했다고 설명했고, 야권은 조사가 늦었다고 비판했습니다. 21일부터 26일까지 날짜별 협의와 결정 기록이 공개돼야 필요한 준비와 피할 수 있었던 지연을 구분할 수 있습니다.", en: "The Joint Chiefs cites safety preparations with the UN Command; opposition politicians criticized the delay. A dated record of consultations and decisions from September 21 to 26 is needed to distinguish necessary precautions from any avoidable delay." },
    },
  ],
  questions: [
    { ko: "장병을 투입하기 전 어떤 위험평가와 중단 기준이 승인됐습니까?", en: "What risk assessment and stop-work criteria were approved before the soldiers entered?" },
    { ko: "21일부터 26일까지 군·유엔사는 날짜별로 어떤 안전·현장조사 결정을 내렸습니까?", en: "What safety and access decisions did the military and UN Command make each day from September 21–26?" },
  ],
  proposals: [
    { ko: "작전상 좌표를 제외한 사전 위험평가와 현장조사 결정 시각·이유를 공개합니다.", en: "Release the pre-mission risk assessment and a dated account of access decisions without exposing operational coordinates." },
    { ko: "최종 감정과 유엔사 공동 평가가 나오면 중간 판단에서 달라진 내용을 분리해 기록합니다.", en: "When final testing and joint assessment are available, record changes from the interim findings explicitly." },
  ],
  followUpChecks: [
    { ko: "현장 원점과 미폭발 지뢰 실물 확보·국과수 최종 감정", en: "Blast-site access, recovery of the reported device and final forensic results" },
    { ko: "북한군 매설 시점·주체에 대한 군과 유엔사의 최종 평가", en: "Final military and UN Command assessment of who planted the device and when" },
    { ko: "작전 전 위험평가 및 21~26일 조사 협의·안전조치 기록", en: "Pre-mission risk assessment and dated records of safety and investigation decisions" },
    { ko: "29일 국회 국방위원회 질의에서 새로 확인된 자료와 답변", en: "Any new documents or answers from the September 29 defense committee hearing" },
  ],
  nextCheck: {
    ko: "국방위 현안질의 이후 실제 제출된 자료와 답변을 확인합니다. 군·유엔사의 재진입, 미폭발 지뢰 실물 확보, 국과수 최종 감정이 나오면 중간 판단과 비교해 갱신합니다.",
    en: "Review documents and answers after the defense committee hearing. Update this record against the interim assessment when teams re-enter, recover the reported device or release final forensic findings.",
  },
  relatedContents: [
    { href: "/news/dmz-security-command-failure", label: { ko: "관련 기사 · 사고 전 보호", en: "Related report · Pre-mission safety" }, title: { ko: "장병은 발목을 잃었는데, 국방부는 무엇을 하고 있었나", en: "A soldier lost a foot. What was the Defense Ministry doing?" }, summary: { ko: "사고 전 지형 변화와 위험평가, 장병 보호조치를 따집니다.", en: "Examines terrain changes, risk assessment and precautions before the mission." }, date: "2026-09-25" },
    { href: "/news/dmz-blast-investigation-timeline-2026", label: { ko: "후속 기사 · 사고 뒤 조사", en: "Follow-up · Investigation" }, title: { ko: "사고 엿새 만에 현장조사, 폭발 지점엔 못 갔다", en: "Six days later, investigators still had not reached the blast sites" }, summary: { ko: "현장 접근까지의 닷새와 군·유엔사의 결정 경과를 묻습니다.", en: "Follows the days before site access and the military and UN Command decisions." }, date: "2026-09-28" },
  ],
  sources: [
    { label: { ko: "연합뉴스 · 21일 사고와 부상 상황", en: "Yonhap · September 21 blasts and injuries" }, url: initial.url },
    { label: { ko: "연합뉴스 · 22일 수색로 개척 목적", en: "Yonhap · September 22 account of route-clearing mission" }, url: mission.url },
    { label: { ko: "뉴스핌 · 23일 작전 인원과 초동 진술", en: "NewsPim · September 23 mission and initial accounts" }, url: account23.url },
    { label: { ko: "중앙일보 · 24일 조사 지연 공방과 군 설명", en: "JoongAng Ilbo · September 24 delay dispute and military account" }, url: dispute24.url },
    { label: { ko: "연합뉴스 · 25일 군·유엔사 조사 준비 설명", en: "Yonhap · September 25 account of preparations" }, url: preparation.url },
    { label: { ko: "연합뉴스 · 27일 폭발 원점 미도달", en: "Yonhap · September 27 site investigation" }, url: approach.url },
    { label: { ko: "연합뉴스 · 28일 합참 중간 조사 발표", en: "Yonhap · September 28 interim assessment" }, url: interim.url },
    { label: { ko: "연합뉴스 · 28일 사고 지점과 작전 경로", en: "Yonhap · September 28 location and mission route" }, url: route.url },
    { label: { ko: "연합뉴스 · 29일 국방위 현안질의 예고", en: "Yonhap · September 29 hearing scheduled" }, url: hearing.url },
    { label: { ko: "YTN · 29일 국방위 긴급 현안질의 예정", en: "YTN · September 29 committee hearing scheduled" }, url: hearing29.url },
    { label: { ko: "씨앗의 소리 · 사고 전 보호와 지휘 책임", en: "SEED VOICE · Pre-mission protection and command" }, url: "https://seedvoice.kr/news/dmz-security-command-failure" },
    { label: { ko: "씨앗의 소리 · 사고 뒤 현장조사 경과", en: "SEED VOICE · Investigation timeline" }, url: "https://seedvoice.kr/news/dmz-blast-investigation-timeline-2026" },
  ],
};
