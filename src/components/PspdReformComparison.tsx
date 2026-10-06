const rows = [
  {
    ko: ["검찰 권한의 집중", "권한 남용을 검찰청 폐지의 배경으로 평가한다.", "개혁의 필요성과 새 제도의 효과는 별개다. 후속 기관의 독립성과 책임을 입증해야 한다."],
    en: ["Concentrated prosecutorial power", "Treats abuses of power as the background to abolishing the prosecution service.", "The need for reform does not establish the effectiveness of its replacement. Independence and accountability must be demonstrated."],
  },
  {
    ko: ["수사 기능의 이전", "검사의 수사 관련 규정을 정비하고 인력·시설을 수사기관으로 옮길 것을 요구한다.", "국가의 수사권은 남는다. 새 기관의 인사·사건 배당·수사 지휘를 누가 통제하는지 물어야 한다."],
    en: ["Transfer of investigative functions", "Calls for revising prosecutors’ investigative provisions and transferring personnel and facilities to investigative agencies.", "State investigative power remains. Who controls appointments, case allocation and investigative direction in the successor bodies?"],
  },
  {
    ko: ["새 기관의 역량", "새 기관이 제 역할을 하도록 준비와 역량 확보를 촉구한다.", "수사 역량과 견제 장치를 함께 확충해야 한다. 부실·위법 수사의 시정과 시민의 구제 통로가 검증 대상이다."],
    en: ["Capacity of the new agencies", "Urges preparation and capacity so that the new bodies can perform their roles.", "Capacity must grow alongside safeguards: correction of flawed or unlawful investigations and accessible remedies for citizens."],
  },
  {
    ko: ["제2의 검찰청 우려", "중수청이 제2의 검찰청이 될 위험도 경고한다.", "이 경고는 타당하다. 권력 집중을 막을 구체적인 인사·사건 통제·외부 감시 장치로 이어져야 한다."],
    en: ["A second prosecution service", "Also warns that the major-crimes agency could become a second prosecution service.", "That warning is sound. It should lead to concrete safeguards for appointments, case control and independent oversight."],
  },
];

export default function PspdReformComparison({ ko }: { ko: boolean }) {
  return <section aria-labelledby="pspd-comparison-title" className="my-10 rounded-lg bg-white p-4 shadow-[0_8px_28px_rgba(15,36,56,.07)] sm:p-6">
    <h2 id="pspd-comparison-title" className="font-sans text-xl font-bold text-navy">{ko ? "참여연대 주장과 씨앗의 반론" : "PSPD’s position and SEED’s response"}</h2>
    <p className="mt-3 font-sans text-sm leading-7 text-charcoal/75">{ko ? "2026년 10월 2일 논평을 쟁점별로 요약했습니다. 직접 인용문이 아니며, 씨앗의 평가는 별도 열에 표시했습니다." : "A thematic summary of PSPD’s October 2, 2026 statement. These are paraphrases; SEED’s assessments appear separately."}</p>
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left font-sans text-sm leading-7">
        <thead className="bg-ivory text-navy"><tr>{(ko ? ["쟁점", "참여연대 논평 요지", "씨앗의 반론·검증 질문"] : ["Issue", "PSPD’s position", "SEED’s response and questions"]).map(label => <th key={label} scope="col" className="p-3 font-bold">{label}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => <tr key={i} className="border-b border-green-deep/10">{row[ko ? "ko" : "en"].map((cell, j) => j === 0 ? <th key={j} scope="row" className="w-[18%] p-3 align-top font-bold text-navy">{cell}</th> : <td key={j} className="w-[41%] p-3 align-top text-charcoal/85">{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <p className="mt-4 font-sans text-sm leading-7 text-charcoal/70">{ko ? "공수처의 전국 단위 확대 구상은 아래 본문에서 별도 보도로 다룹니다. 이 논평이 제안한 내용으로 보아서는 안 됩니다." : "The proposal to expand the CIO nationwide is discussed below as a separate reported proposal. It is not presented as a proposal in this PSPD statement."}</p>
    <a href="https://peoplepower21.org/judiciary/2030292?cat=12&paged=0" target="_blank" rel="noreferrer" className="mt-3 inline-block font-sans text-sm font-semibold text-green-deep underline underline-offset-4">{ko ? "참여연대 논평 원문 읽기 ↗" : "Read PSPD’s original statement ↗"}</a>
  </section>;
}
