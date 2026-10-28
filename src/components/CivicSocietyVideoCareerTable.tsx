type Row = [string, string, string];
const civic: Row[] = [
  ["홍종학", "경실련 재벌개혁위원장", "19대 민주통합당 비례대표 의원 · 중소벤처기업부 장관"],
  ["남인순", "한국여성단체연합 대표", "19대 민주통합당 비례대표 의원 · 이후 지역구 의원"],
  ["김광진", "순천 YMCA 재정이사", "19대 민주통합당 비례대표 의원"],
  ["김기식", "참여연대 사무처장", "19대 민주통합당 비례대표 의원 · 금융감독원장"],
  ["윤미향", "정의기억연대 이사장", "21대 더불어시민당 비례대표 의원"],
  ["양이원영", "환경운동연합 활동 · 에너지전환포럼 사무처장", "21대 더불어시민당 비례대표 의원"],
  ["김제남", "녹색연합 사무처장", "19대 통합진보당 비례대표 의원 · 정의당 활동 · 청와대 수석 · 한국원자력안전재단 이사장"]
];
const publicRoles: Row[] = [
  ["박원순", "참여연대 창립 주도", "서울특별시장"],
  ["조희연", "참여연대 창립 참여", "서울특별시교육감"],
  ["조국", "참여연대 사법감시센터 소장", "청와대 민정수석 · 법무부 장관"],
  ["장하성", "참여연대 경제민주화위원장", "청와대 정책실장 · 주중대사"],
  ["김상조", "참여연대 경제개혁센터 소장", "공정거래위원장 · 청와대 정책실장"],
  ["정현백", "참여연대 공동대표", "여성가족부 장관"],
  ["안경환", "참여연대 사법감시센터 활동", "법무부 장관 후보자 (취임하지 않음)"],
  ["하승창", "경실련 정책실장 · 함께하는 시민행동 사무처장", "청와대 사회혁신수석"],
  ["김혜애", "녹색연합 공동대표", "청와대 기후환경비서관"],
  ["김은경", "지속가능성센터 지우 대표 · 환경운동 경력", "환경부 장관"],
  ["안병옥", "환경운동연합 사무총장 · 시민환경연구소장", "환경부 차관 · 한국환경공단 이사장"],
  ["서주원", "환경운동연합 사무총장", "수도권매립지관리공사 사장"],
  ["장준영", "녹색환경운동 이사장", "한국환경공단 이사장"],
  ["박재현", "4대강 정책 관련 활동 · 인제대 교수", "한국수자원공사 사장"],
  ["김제남", "녹색연합 사무처장", "청와대 기후환경비서관 · 시민사회수석 · 한국원자력안전재단 이사장"],
  ["유창복", "사단법인 마을 창립·대표", "서울시 마을공동체 종합지원센터장 · 서울시 협치자문관"]
];
const separated: Row[] = [
  ["김민웅", "촛불행동 상임대표", "영상에 언급된 정부·국회 임용 사례가 아님"],
  ["양이원영", "전 더불어민주당 의원", "2026년 한수원 비상임이사 지원 철회 · 한전기술 상임감사 지원은 임용과 구별"],
  ["안경환", "법학자·참여연대 활동", "법무부 장관 후보자 지명 후 취임하지 않음"]
];
const translate = (rows: Row[], en: boolean): Row[] => en ? rows.map(([name, group, office]) => [name, group, office]) : rows;
export default function CivicSocietyVideoCareerTable({ ko }: { ko: boolean }) {
  const groups = [
    { title: ko ? "국회의원으로 진출한 인사" : "Civic leaders who entered parliament", rows: civic },
    { title: ko ? "정부 고위직·공공기관장·지자체장" : "Senior government, agency and local positions", rows: publicRoles },
    { title: ko ? "후보 지명·지원 등 실제 취임과 구분해야 할 사례" : "Nominations and applications, not appointments", rows: separated }
  ];
  return <section className="article-section article-section-long my-12" aria-label={ko ? "시민단체 출신 주요 인사 경력표" : "Civic leadership and public office career table"}>
    <span className="section-kicker">{ko ? "인물·직책 확인표" : "CAREER RECORD"}</span>
    <h2 className="article-section-title">{ko ? "영상에 등장한 인사들의 시민단체 경력과 공직 진출" : "Civic backgrounds and subsequent public roles"}</h2>
    <p className="article-copy">{ko ? "영상에서 언급된 실명 인사들을 중심으로 당시 이력과 실제 직책을 대조했다. 시민단체 경력 자체는 위법·특혜의 증거가 아니며, 직책은 현직이 아닌 과거 재직 경력을 뜻한다." : "The table records past roles, not necessarily current positions. Participation in civil society is not proof of an unlawful favor or conflict of interest. Korean names and office labels are preserved for traceability."}</p>
    {groups.map((group, index) => <div key={index} className="mt-9">
      <h3 className="mb-3 text-lg font-bold text-navy">{group.title}</h3>
      <div className="overflow-x-auto border-y border-green-deep/15">
        <table className="w-full min-w-[610px] border-collapse text-left text-sm leading-6">
          <thead><tr className="bg-ivory text-navy"><th scope="col" className="w-24 px-3 py-3">{ko ? "이름" : "Name"}</th><th scope="col" className="w-[41%] px-3 py-3">{ko ? "시민단체 경력" : "Civil-society background (Korean)"}</th><th scope="col" className="px-3 py-3">{ko ? "이후 직책 / 구분" : "Subsequent role / distinction (Korean)"}</th></tr></thead>
          <tbody>{translate(group.rows, !ko).map(([name, group, office]) => <tr key={name+"-"+office} className="border-t border-green-deep/10 align-top"><th scope="row" className="px-3 py-3 font-semibold text-navy">{name}</th><td className="px-3 py-3 text-charcoal/85">{group}</td><td className="px-3 py-3 text-charcoal/85">{office}</td></tr>)}</tbody>
        </table>
      </div>
    </div>)}
    <p className="mt-5 text-xs leading-6 text-charcoal/65">{ko ? "자료: 2012·2020·2024년 비례대표 후보명단, 2017~2022년 인사·공공기관 취임자료, 서울시의회 회의록. 각 기사 하단의 원문 출처를 참조." : "Sources: election candidate lists (2012, 2020, 2024), public appointment records, and Seoul Metropolitan Council proceedings. See the article's source list."}</p>
  </section>;
}
