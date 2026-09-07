import { Clock, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import InteractiveFigure from "../components/InteractiveFigure";

const hero = "images/columns/lh-reform-2026.jpg";

export default function LhReformColumn() {
  const share = async () => {
    const title = "내용 없는 깡통이 더 요란하다 — LH를 쪼개면 개혁인가";
    const text = "개혁은 조직도를 다시 그리는 일이 아니라 실패의 원인을 증명하는 일이다.";
    if (navigator.share) await navigator.share({ title, text, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert("주소를 복사했습니다."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl">
        <div className="pt-3 text-center">
          <h1 className="editorial-title mx-auto max-w-4xl text-[1.75rem] font-bold leading-[1.14] text-navy sm:text-[2.5rem]">내용 없는 깡통이 더 요란하다</h1>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-charcoal/60 sm:text-[15px]">LH를 쪼개는 것이 개혁인가. 지금 필요한 것은 새로운 조직도가 아니라 부동산 정책 실패에 대한 냉정한 진단이다.</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
          <time>2026.09.07</time><span className="flex items-center gap-1"><Clock size={14}/>읽는 시간 7분</span><button onClick={share} className="button-secondary ml-auto min-h-8 px-3 py-1.5 text-xs"><Share2 size={15}/>공유</button>
        </div>
      </div>
    </header>

    <div className="container-page max-w-4xl py-8 sm:py-12">
      <InteractiveFigure src={hero} alt="LH 상징물이 개혁이라는 이름의 충격으로 부서지고 뒤편에 아파트 도시가 보이는 상징 이미지" caption="조직을 부수는 장면은 강렬하다. 그러나 개혁의 기준은 장면이 아니라 시민의 삶이 실제로 나아지는가에 있어야 한다." credit="씨앗의 소리 제작 이미지" sourceUrl="" figureClassName="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]" imageClassName="aspect-[16/9] w-full object-cover" />

      <div className="mx-auto mt-10 max-w-3xl">
        <section>
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">개혁이라는 이름이 요란하다</h2>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">내용 없는 깡통이 더 요란한 법이다. 유난히 이번 정부 들어 ‘개혁’이라는 이름으로 공공기관을 뜯어고치고 조직을 흔드는 일이 많다. 합치고, 나누고, 없애고, 새로 만든다. 무엇인가 대단한 일을 하고 있다는 인상을 주기에는 조직개편만큼 눈에 잘 보이는 것도 없다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">정부는 LH 분리를 포함한 조직개편을 추진하고 있다. 주택 공급의 속도를 높이겠다는 명분이다. 그러나 여기서 먼저 물어야 한다. 지금의 주택시장 문제가 정말 LH의 조직도가 잘못돼서 생긴 것인가.</p>
          <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 font-serif text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl"><span className="block">“치대국 약팽소선(治大國若烹小鮮)”</span><span className="block">큰 나라를 다스리는 것은 작은 생선을 굽는 것과 같다.</span></blockquote>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">노자 『도덕경』의 말이다. 생선을 빨리 익히겠다고 계속 뒤집고 찌르고 손대면 결국 살이 부서진다. 국가와 공공조직도 마찬가지다. 조직이 크고 복잡할수록 무엇을 바꿀지 정확히 알고 손대야 한다. 그런데 지금 LH를 둘러싼 논의를 보면 생선을 어떻게 잘 익힐 것인가보다 얼마나 세게 뒤집을 것인가에 관심이 더 많은 듯하다.</p>
        </section>

        <section className="mt-10 border-t border-green-deep/10 pt-8">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">부동산 정책은 실패했는데, LH부터 쪼갠다</h2>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">지금 정부가 가장 먼저 설명해야 할 것은 LH의 조직도가 아니다. 왜 주택 공급이 충분히 늘지 않았는지, 왜 시민들의 주거 불안이 커졌는지, 민간 공급과 정비사업을 가로막은 요인은 무엇이었는지, 금융과 세제·인허가 정책이 시장에 어떤 결과를 만들었는지를 먼저 설명해야 한다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">그런데 실패의 원인을 충분히 입증하기도 전에 거대한 조직분리라는 처방이 먼저 등장했다. 답을 먼저 정해 놓고 이유를 뒤에서 맞춰가는 것처럼 보이는 이유다. LH가 너무 커서 공급이 늦어진 것이라면 어느 사업에서 얼마의 지연과 비용이 생겼는지를 보여줘야 한다. 분리하면 공급기간이 얼마나 줄고 비용이 얼마나 절감되는지도 숫자로 제시해야 한다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">정책 실패 직후 대규모 개혁안을 꺼내 들면 정치적으로는 장면을 바꾸기 쉽다. 어제까지의 실패보다 오늘의 ‘개혁 드라이브’가 뉴스가 된다. 당장 강한 정부, 일하는 정부처럼 보일 수 있다. 그러나 정치적 속도와 주택 공급의 속도는 같은 것이 아니다.</p>
        </section>

        <section className="mt-10 border-t border-green-deep/10 pt-8">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">수천 명 조직을 쪼개는 동안 개혁의 시간은 흘러간다</h2>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">LH는 현재도 전국의 택지개발, 공공분양, 임대주택, 보상, 주거복지 사업을 동시에 수행하고 있다. 이런 조직을 둘로 나누는 일은 간판 두 개를 다는 것으로 끝나지 않는다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">인력을 나누고 자산을 나누고 부채를 나눠야 한다. 진행 중인 사업과 계약, 토지와 임대주택, 보증과 채무관계의 귀속도 정해야 한다. 본사와 지역조직, 전산망, 회계와 인사체계도 다시 설계해야 한다. 그 과정에서 몇 년이 흘러갈 수도 있다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">정부에는 조직개편의 시간이지만 시민에게는 삶의 시간이다. 공급이 늦어지면 집을 기다리는 사람이 비용을 낸다. 부채 이전이 불투명하면 납세자가 위험을 떠안는다. 기관 사이 책임이 흐려지면 문제가 발생했을 때 다시 시민이 그 대가를 치른다. 시민의 생활 인프라를 정치의 실험실로 만들어서는 안 된다.</p>
        </section>

        <section className="mt-10 border-t border-green-deep/10 pt-8">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">집을 가진 시민을 도덕적으로 심판하지 말라</h2>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">부동산 정책에서 더 우려되는 것은 주택을 바라보는 국가의 태도다. 다주택자를 하나의 시장 참여자가 아니라 투기자와 규제 대상으로만 바라보는 시선이 반복돼 왔다. 이런 접근이 넓어지면 오래 한 집에서 살아온 시민까지 집값이 올랐다는 이유로 마치 부당한 이익을 얻은 사람처럼 취급하는 분위기가 만들어진다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">투기가 있다면 투기를 잡으면 된다. 불법이 있다면 처벌하면 된다. 그러나 주택 소유 자체를 도덕적으로 심판하는 순간 국가는 전혀 다른 영역으로 들어간다. 집을 여러 채 가진 사람이라고 자동으로 범죄자가 되는 것도 아니고, 한 채를 가진 시민이 국가에 죄책감을 느껴야 할 이유도 없다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">좋은 주택정책은 자가주택, 민간임대, 공공임대 가운데 하나를 정답으로 강요하지 않는다. 시민이 형편과 판단에 따라 선택할 수 있도록 공급과 이동의 자유를 넓혀주는 정책이어야 한다. 국가가 모든 시민을 공공임대의 수요자로 만드는 것이 주거정책의 목표가 되어서는 안 된다.</p>
        </section>

        <section className="mt-10 border-t border-green-deep/10 pt-8">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">씨앗은 LH를 그대로 두자고 말하지 않는다</h2>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">씨앗의 소리는 LH를 지금 모습 그대로 유지하자고 말하지 않는다. LH에는 개혁해야 할 문제가 많다. 비대한 조직, 개발과 공공성의 충돌, 부채와 회계의 투명성, 내부 통제와 과거 투기 사건까지 손볼 문제가 분명히 존재한다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">그러나 공공기관 개혁의 첫 단추는 조직도를 다시 그리는 것이 아니다. 문제의 원인을 정확히 증명하는 일이다. LH의 어떤 구조가 공급을 방해했는지, 분리 외에 해결 방법은 없는지, 분리했을 때 얻는 편익이 전환비용보다 큰지를 먼저 시민 앞에 내놓아야 한다.</p>
          <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 font-serif text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl"><span className="block">개혁은 많이 뜯어고치는 능력이 아니다.</span><span className="block">무엇을 바꾸고 무엇은 함부로 건드리지 말아야 하는지 아는 능력이다.</span></blockquote>
        </section>

        <section className="mt-10 border-t border-green-deep/10 pt-8">
          <h2 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">유능한 정부는 함부로 뒤집지 않는다</h2>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">유능한 정부는 많이 뜯어고치는 정부가 아니다. 무엇을 바꿔야 하고 무엇은 함부로 건드리지 말아야 하는지를 아는 정부다.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">LH 분리가 정말 필요하다면 정부는 먼저 시민 앞에 숫자와 책임으로 답해야 한다. 왜 나누는가. 나누면 무엇이 좋아지는가. 그 과정에서 시민이 치러야 할 비용은 얼마인가.</p>
          <p className="mt-4 text-base leading-8 text-charcoal/80 sm:text-[17px]">개혁은 시끄럽다고 개혁이 아니다. 좋은 개혁은 결과로 증명된다. 국가를 운영하는 사람에게 때로 가장 필요한 능력은 무엇인가를 뒤집는 힘이 아니라 함부로 뒤집지 않는 절제다.</p>
        </section>

        <aside className="mt-10 border-t-2 border-navy pt-6"><span className="section-kicker">자료 주</span><p className="mt-3 text-sm leading-6 text-charcoal/60">LH 조직개편 논의와 주택공급 정책에 관한 공개 자료와 보도를 참고해 씨앗의 소리 관점으로 작성했다.</p></aside>
        <ContentAccountability postSlug="lh-reform-politics-2026" publishedDate="2026-09-07" />
        <CommentSection postSlug="lh-reform-politics-2026" />
        <div className="mt-8"><Link to="/columns" className="text-link">씨앗의 소리 목록으로</Link></div>
      </div>
    </div>
  </article>;
}
