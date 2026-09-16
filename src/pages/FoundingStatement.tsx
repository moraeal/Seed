import { ArrowLeft, ExternalLink } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

type Section = {
  title: string;
  paragraphs: string[];
  source?: { label: string; url: string };
};

const copy = {
  ko: {
    kicker: "STATEMENT OF PURPOSE",
    title: "왜 지금 씨앗의 소리인가",
    subtitle: "민주의 시대를 넘어 시민의 시대로",
    summary: "다수결은 민주주의의 수단이지 민주주의 그 자체가 아닙니다. 씨앗의 소리는 법의 지배와 제한된 정부, 권력분립과 시민의 자유를 지키기 위해 권력이 움직이는 곳을 끝까지 보겠습니다.",
    intro: [
      "민주화를 외치던 세대가 권력을 잡았습니다. 독재 타도를 외치며 자유를 부르짖었던 사람들이 이제 ‘개혁’이라는 이름으로 권력의 칼을 휘두르고 있습니다. 자신들의 길을 막으면 탄핵을 꺼내 들고, 기존 제도가 불편하면 법을 바꾸며, 반대하는 목소리는 낡은 세력의 저항으로 몰아붙입니다.",
      "독재는 반드시 군홧발을 신고 오지 않습니다. 국회의 표결로 올 수도 있고, 개혁이라는 이름을 달고 올 수도 있습니다. 민주적 절차를 거쳤다는 이유만으로 모든 권력 행사가 민주주의가 되는 것은 아닙니다.",
      "지금 대한민국을 보며 묻지 않을 수 없습니다.",
      "민주진영에 정말 민주가 남아 있습니까.",
    ],
    sections: [
      {
        title: "다수의 힘이 민주주의의 전부인가",
        paragraphs: [
          "국회 다수당은 의석수로 밀어붙일 수 있는 거의 모든 법을 밀어붙이고 있습니다. 야당이 필리버스터에 나서도 재적 의원 5분의 3이 동의하면 24시간 뒤 토론을 끝낼 수 있습니다. 필리버스터라는 이름은 남아 있지만 다수당 앞에서는 하루짜리 저항에 불과합니다.",
          "소수 정당은 무기력하게 퇴장하고, 국회는 토론과 타협의 공간이 아니라 숫자로 승패를 결정하는 표결장이 되어 갑니다.",
          "다수결은 민주주의의 수단이지 민주주의 그 자체가 아닙니다. 다수의 힘을 제한하는 법치, 소수의 발언권, 권력분립과 사법부 독립이 함께 작동해야 민주주의가 유지됩니다. 선거에서 이겼다는 이유로 이 모든 안전장치를 거추장스러운 장애물처럼 여긴다면 그것은 민주주의가 아닙니다.",
          "감히 말하고 싶습니다. 입법독재의 시대가 다가오고 있습니다.",
        ],
      },
      {
        title: "사법개혁인가, 사법권력의 재편인가",
        paragraphs: [
          "대법관 수를 현행 14명에서 26명으로 늘리는 법은 이미 국회를 통과했습니다. 법에는 상고심 사건 부담을 줄이고 충실한 심리를 보장한다는 명분이 담겨 있습니다. 실제로 대법원의 과도한 사건 부담은 오래된 문제입니다.",
          "그러나 왜 하필 지금이며, 왜 한 정권의 임기 동안 대법원 구성이 크게 바뀌는 방식이어야 합니까.",
          "사법부 개혁이 필요하다는 말과 정부·여당이 원하는 방향으로 사법부를 재편해도 된다는 말은 전혀 다릅니다. 일부 여권 의원들은 대법원장 탄핵 추진까지 공개적으로 거론했습니다. 마음에 들지 않는 판결이 나올 때마다 판사를 공격하고, 대법원장을 불러 세우고, 탄핵을 말한다면 사법부가 정치권력으로부터 독립해 판단할 수 있겠습니까.",
          "대법관이 많아지는 것보다 더 두려운 것은 대법관이 권력의 대변인처럼 여겨지는 사회입니다. 판결이 마음에 들지 않는다고 법원을 길들이기 시작하면 마지막에 무너지는 것은 시민의 권리입니다.",
        ],
        source: { label: "법원조직법 — 대법관 정원 26명", url: "https://www.law.go.kr/LSW//lsInfoP.do?ancYnChk=0&chrClsCd=010202&efYd=20260312&lsiSeq=284023&urlMode=lsInfoP" },
      },
      {
        title: "권력을 견제하던 칼을 누가 쥐는가",
        paragraphs: [
          "오는 10월 2일 검찰청법은 폐지됩니다. 검찰청은 공소청과 중대범죄수사청으로 나뉩니다. 수사와 기소를 분리해 상호 견제를 강화하겠다는 것이 정부의 설명입니다.",
          "검찰이 무소불위의 권력을 행사해서는 안 된다는 데 이견은 없습니다. 검찰도 개혁해야 합니다. 그러나 기존 권력을 해체하는 것만으로 개혁이 완성되는 것은 아닙니다. 그 권한을 어디로 옮기는지, 새 수사기관을 누가 지휘하는지, 정치권력에 대한 수사가 실제로 독립될 수 있는지를 봐야 합니다.",
          "권력기관의 간판을 바꾸는 일은 쉽습니다. 권력으로부터 독립된 수사체계를 만드는 일은 어렵습니다. 정치인을 겨누던 칼을 빼앗아 정권이 다루기 편한 기관에 쥐여 준다면 그것은 검찰개혁이 아니라 수사권력의 재배치일 뿐입니다.",
        ],
        source: { label: "검찰청법 폐지와 공소청·중대범죄수사청 출범 근거", url: "https://www.law.go.kr/LSW/lsRvsRsnListP.do?lsId=015092" },
      },
      {
        title: "표현의 자유는 누구에게나 같은가",
        paragraphs: [
          "정부와 여당은 허위·조작정보의 폐해를 막겠다며 징벌적 손해배상과 과징금을 담은 법을 만들었습니다. 거짓말로 타인에게 피해를 주는 행위는 책임을 져야 합니다. 그러나 무엇이 허위이고 무엇이 비판인지를 권력이 판단하기 시작하면 언론과 시민은 권력의 눈치를 볼 수밖에 없습니다.",
          "국가안보를 위협하는 주장과 선동에는 관대하다는 비판을 받으면서, 정부와 정치인을 비판하는 말에는 무거운 책임을 묻겠다고 나선다면 시민은 그 기준을 신뢰하기 어렵습니다.",
          "권력이 시민의 입에 재갈을 물리는 순간, 민주주의는 껍데기만 남습니다. 자유는 내가 듣고 싶은 말에만 허용하는 권리가 아닙니다. 권력자가 듣기 싫어하는 말을 할 수 있을 때 비로소 자유입니다.",
        ],
        source: { label: "정보통신망법 개정 이유 — 허위·조작정보 손해배상과 과징금", url: "https://www.law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=000030" },
      },
      {
        title: "민주화를 말하던 사람들이 왜 시민을 두려워하는가",
        paragraphs: [
          "과거 민주화운동 세력은 국가권력의 폭력을 비판했습니다. 권력분립과 언론 자유를 외쳤고, 인권을 말했으며, 시민사회의 자율성을 강조했습니다.",
          "그런데 자신들이 권력을 잡자 태도가 달라졌습니다. 시민단체들은 정부 정책을 감시하기보다 개혁의 이름으로 정부와 한목소리를 내는 경우가 많아졌습니다. 정권과 한편이 되어 시민을 참칭하고, 비판하는 시민을 반개혁 세력으로 몰아세운다면 시민단체는 시민사회의 대표가 아니라 권력의 이중대가 됩니다.",
          "시민단체는 정부의 홍위병이 아닙니다. 공익은 정권의 전유물이 아니며, 시민사회는 정부 정책을 대신 홍보하기 위해 존재하지 않습니다.",
          "국가의 권력만 위험한 것이 아닙니다. 정부 예산과 제도적 지위를 등에 업은 시민사회 권력도 감시받아야 합니다.",
        ],
      },
      {
        title: "빚을 권리처럼 말하는 정치",
        paragraphs: [
          "정부는 지출을 늘리고 기본소득과 각종 지원을 확대하려 합니다. 필요한 복지는 해야 합니다. 위기에 처한 국민을 돕는 것은 국가의 책임입니다.",
          "그러나 오늘의 정치가 쓰는 돈은 하늘에서 떨어지지 않습니다. 세금이거나 빚입니다. 현재 세대가 혜택을 받고 미래세대가 갚는 구조라면 그것은 복지정책인 동시에 세대 간 부담 이전입니다.",
          "기업을 불러 세워 호통치고, 정부가 기업의 투자 방향과 입지를 정하며, 기업에서 걷은 돈을 각종 기금에 쌓아 정부가 쓰려 한다면 시장은 정부의 허가를 기다리는 공간으로 바뀝니다.",
          "기업은 정부의 현금인출기가 아닙니다. 기업의 자유는 재벌을 위한 특혜가 아니라 시민의 일자리와 도전, 선택을 지키는 조건입니다. 기업이 잘못하면 법에 따라 책임을 물어야 합니다. 그러나 정부의 마음에 들지 않는다는 이유로 기업을 길들이기 시작하면 경제는 권력의 눈치를 보는 체제로 변합니다.",
        ],
      },
      {
        title: "함석헌이라면 지금 무엇이라고 말했을까",
        paragraphs: [
          "함석헌은 씨알을 통치의 대상이 아니라 역사의 주체로 보았습니다. 이름 없는 한 사람, 힘없는 한 사람의 목소리가 권력보다 귀하다고 말했습니다.",
          "그가 지금의 대한민국을 본다면 무엇이라고 했을까요.",
          "민주화를 외쳤다는 과거의 경력이 오늘의 권력을 정당화해 주지는 않는다고 하지 않았을까요. 독재에 저항했던 사람이 권력을 잡은 뒤 독재적 수단을 사용한다면, 과거의 민주화 경력은 면죄부가 아니라 더 무거운 책임이 된다고 말하지 않았을까요.",
          "‘정의사회 구현.’ 우리는 이 구호를 기억합니다. 권력은 언제나 정의를 말했습니다. 독재자도 국가를 위한다고 했고, 시민을 억압하면서도 질서와 개혁을 내세웠습니다. 지금 개혁을 외치는 사람들이 자신들이 그토록 증오했던 권력의 언어를 닮아가고 있지는 않습니까.",
        ],
      },
      {
        title: "이제 민주의 시대를 넘어 시민의 시대로",
        paragraphs: [
          "민주라는 이름을 가진 정당이 민주주의를 독점할 수는 없습니다. 시민이라는 이름을 붙인 단체가 시민을 대표한다고 스스로 선언할 수도 없습니다.",
          "민주주의의 주인은 정당도, 정부도, 시민단체도 아닙니다. 시민입니다.",
          "이제 민주의 시대를 넘어 시민의 시대로 가야 합니다. 진영이 시민을 대신하는 시대를 끝내고, 시민 한 사람 한 사람이 권력을 감시하고 판단하는 사회로 가야 합니다.",
          "씨앗의 소리는 그래서 지금 필요합니다.",
          "국회의 다수 권력을 감시할 것입니다. 대통령의 권력을 감시할 것입니다. 사법부를 정치의 도구로 만들려는 시도를 지켜볼 것입니다. 검찰청 폐지 이후 수사권력이 어디로 이동하는지 확인할 것입니다. 언론과 시민의 입을 막는 법이 어떻게 집행되는지 기록할 것입니다. 시민을 내세워 정부의 이중대 노릇을 하는 시민단체의 권력도 감시할 것입니다. 기업을 길들이고 미래세대의 몫을 끌어다 쓰는 정치도 따져 물을 것입니다.",
        ],
      },
    ] satisfies Section[],
    closingQuestions: ["이게 나라입니까.", "왜 아무 말도 하지 않습니까.", "이 땅의 시민들은 눈을 가리고, 귀를 막고, 입을 닫은 채 살아가야 합니까."],
    declaration: "씨앗의 소리는 피 토하는 마음으로 외칩니다. 자유민주주의를 지킵시다. 법의 지배를 지킵시다. 정부의 권력을 제한합시다. 입법·행정·사법이 서로를 견제하는 나라를 지킵시다. 시민이 국가를 두려워하는 사회가 아니라 국가가 시민의 눈을 두려워하는 사회를 만듭시다.",
    final: ["씨앗은 작습니다.", "그러나 아무리 거대한 권력도 시민 한 사람의 질문에서부터 흔들리기 시작합니다."],
    firstImageAlt: "국회, 정부와 법원이 서로 균형을 이루며 시민의 자유를 지키는 권력분립의 상징 이미지",
    firstImageCaption: "다수결은 민주주의의 수단입니다. 민주주의를 지키는 것은 법치와 권력분립, 소수의 발언권입니다.",
    secondImageAlt: "씨알사상을 통해 이름 없는 시민을 역사의 주체로 바라본 함석헌 선생",
    secondImageCaption: "함석헌은 이름 없는 씨알을 통치의 대상이 아니라 역사의 주체로 보았습니다.",
    author: "2026년 9월 · 어느 작은 시민의 말, 씨앗의 소리 발행인",
    back: "소개로 돌아가기",
  },
  en: {
    kicker: "STATEMENT OF PURPOSE",
    title: "Why SEED VOICE, Why Now",
    subtitle: "Beyond the age of democratic camps, toward the age of citizens",
    summary: "Majority rule is a democratic instrument, not democracy itself. SEED VOICE follows power wherever it moves in order to defend the rule of law, limited government, separated powers and civic freedom.",
    intro: [
      "A generation that once fought for democracy now holds power. People who cried out against dictatorship in the name of freedom increasingly wield the blade of ‘reform’: reaching for impeachment when institutions resist, rewriting rules that stand in their way, and dismissing dissent as the resistance of a discredited past.",
      "Authoritarianism does not always arrive in military boots. It can come through a parliamentary vote, carrying the banner of reform. Democratic procedure alone does not make every exercise of power democratic.",
      "Looking at South Korea today, one question cannot be avoided.",
      "How much democracy remains within the democratic camp?",
    ],
    sections: [
      {
        title: "Is majority power the whole of democracy?",
        paragraphs: [
          "The parliamentary majority is using its numbers to pass nearly everything those numbers can deliver. The opposition may begin a filibuster, but three-fifths of all lawmakers can end debate after twenty-four hours. The institution survives in name, yet against a commanding majority it often amounts to one day of resistance.",
          "Smaller parties leave the chamber powerless, while parliament becomes less a place of argument and compromise than an arena where arithmetic decides the result.",
          "Majority rule is an instrument of democracy, not democracy itself. Democracy also requires law that limits the majority, a voice for the minority, separated powers and judicial independence. When electoral victory turns these safeguards into inconveniences to be removed, democracy begins to hollow out.",
          "We must be willing to say it plainly: an age of legislative authoritarianism is approaching.",
        ],
      },
      {
        title: "Judicial reform—or a redistribution of judicial power?",
        paragraphs: [
          "Legislation expanding the Supreme Court from fourteen justices to twenty-six has passed the National Assembly. Its stated purpose is to reduce the Court’s caseload and allow fuller review, and the Court’s excessive burden is a genuine, longstanding problem.",
          "But why now, and why through a design that allows the Court’s composition to change so extensively during one presidential term?",
          "The need for judicial reform does not mean the governing camp may remake the judiciary in its preferred image. Some governing-bloc lawmakers have publicly raised impeaching the Chief Justice. If judges are attacked whenever a ruling displeases politics, and if the Chief Justice is summoned and threatened with removal, can courts still decide independently of political power?",
          "The deeper danger is not simply a larger Court. It is a society that comes to regard justices as political spokespeople. When government begins to discipline courts for unwelcome judgments, citizens’ rights are what ultimately collapse.",
        ],
        source: { label: "Court Organization Act — twenty-six Supreme Court justices", url: "https://www.law.go.kr/LSW//lsInfoP.do?ancYnChk=0&chrClsCd=010202&efYd=20260312&lsiSeq=284023&urlMode=lsInfoP" },
      },
      {
        title: "Who will hold the blade that once checked power?",
        paragraphs: [
          "On October 2, the Prosecutors’ Office Act will be repealed. The existing service will give way to a Prosecution Service and a Serious Crimes Investigation Agency. The government says separating investigation from prosecution will create mutual checks.",
          "The prosecution must not exercise unchecked power, and reform is necessary. But dismantling one institution does not complete reform. Citizens must follow where its powers go, who directs the new investigative body, and whether investigations of political authority will remain genuinely independent.",
          "Changing the nameplate of a powerful institution is easy. Building an investigative system independent of government is hard. If the blade once capable of pointing at politicians is transferred to bodies more convenient for the incumbent government, this is not reform but a redistribution of investigative power.",
        ],
        source: { label: "Legal basis for abolishing the Prosecutors’ Office and establishing the new agencies", url: "https://www.law.go.kr/LSW/lsRvsRsnListP.do?lsId=015092" },
      },
      {
        title: "Is freedom of expression equal for everyone?",
        paragraphs: [
          "The government and governing party enacted punitive damages and administrative fines to address false and manipulated information. Those who knowingly cause harm through lies should be accountable. But once political power begins deciding what is false and what is legitimate criticism, journalists and citizens inevitably begin watching the government’s mood.",
          "When a government is criticized as lenient toward rhetoric that threatens national security while imposing heavier liability on speech critical of officials, citizens will struggle to trust the standard.",
          "The moment power places a gag in the citizen’s mouth, only democracy’s shell remains. Freedom is not a right reserved for speech we want to hear. It becomes real when citizens can say what those in power do not want to hear.",
        ],
        source: { label: "Information and Communications Network Act — damages and fines for manipulated information", url: "https://www.law.go.kr/LSW/lsRvsRsnListP.do?chrClsCd=010102&lsId=000030" },
      },
      {
        title: "Why does a generation of democrats now fear citizens?",
        paragraphs: [
          "The democracy movement once condemned state violence. It defended separated powers, a free press, human rights and the autonomy of civil society.",
          "Power has changed that posture. Too many civic organizations now echo government policy in the name of reform instead of scrutinizing it. When groups align with government, claim the name of the citizen and dismiss critics as enemies of reform, they cease to represent civil society and become auxiliaries of power.",
          "Civic organizations are not the government’s Red Guards. The public interest does not belong to the ruling camp, and civil society does not exist to publicize government policy.",
          "State power is not the only power that can become dangerous. Civil-society organizations backed by public money and institutional status must also face civic scrutiny.",
        ],
      },
      {
        title: "Politics that speaks of debt as an entitlement",
        paragraphs: [
          "Government is expanding expenditure and proposing basic-income programs and other forms of support. Necessary welfare should be provided; helping citizens in crisis is a responsibility of the state.",
          "But political spending does not fall from the sky. It is financed by taxes or debt. When the present generation receives the benefit and a future generation must repay it, welfare policy also becomes an intergenerational transfer of burdens.",
          "When officials summon companies for public scolding, dictate where and how firms should invest, and accumulate business-derived revenue in funds controlled by government, the market becomes a place that waits for political permission.",
          "Companies are not government cash machines. Economic freedom is not a privilege for conglomerates; it sustains citizens’ jobs, initiative and choice. Businesses that break the law must answer under law. But when government disciplines firms simply because it dislikes their decisions, the economy begins to organize itself around the wishes of power.",
        ],
      },
      {
        title: "What would Ham Seok-heon say now?",
        paragraphs: [
          "Ham Seok-heon understood the ssial—the ordinary, unnamed person—not as an object of rule but as the agent of history. He held that the voice of one powerless person could matter more than power itself.",
          "What would he say if he saw South Korea today?",
          "Would he not say that a past in the democracy movement cannot legitimize the exercise of power today? If someone who resisted dictatorship adopts authoritarian means after taking office, that history becomes not an exemption but a heavier responsibility.",
          "‘Building a just society.’ Koreans remember the slogan. Power has always spoken in the language of justice. Dictators claimed to act for the nation and invoked order and reform while suppressing citizens. Are today’s reformers beginning to resemble the language of the power they once despised?",
        ],
      },
      {
        title: "Beyond the age of democratic camps, toward the age of citizens",
        paragraphs: [
          "No party with democracy in its name can monopolize democracy. No organization with citizen in its name can appoint itself the representative of citizens.",
          "The sovereign of democracy is not a party, a government or a civic organization. It is the citizen.",
          "We must move beyond the age of democratic camps and into the age of citizens. The era in which political camps speak in the citizen’s place must end. Citizens themselves must watch power and judge institutions.",
          "That is why SEED VOICE is needed now.",
          "We will watch parliamentary majorities and presidential power. We will follow attempts to turn courts into instruments of politics. We will track where investigative power moves after the abolition of the Prosecutors’ Office. We will record how laws regulating speech are enforced. We will scrutinize civic organizations that invoke citizens while acting as government auxiliaries. And we will question politics that disciplines enterprise and spends the inheritance of future generations.",
        ],
      },
    ] satisfies Section[],
    closingQuestions: ["Is this what a country should be?", "Why are so many silent?", "Must citizens live with their eyes covered, their ears stopped and their mouths closed?"],
    declaration: "SEED VOICE speaks with urgency. Defend liberal democracy. Defend the rule of law. Limit government power. Preserve a country in which the legislative, executive and judicial branches restrain one another. Build a society in which citizens do not fear the state, but the state remains mindful of the citizen’s watchful eye.",
    final: ["A seed is small.", "Yet even the greatest power can begin to tremble when one citizen asks a question."],
    firstImageAlt: "A symbolic image of separated powers protecting civic freedom through balance among parliament, government and the courts",
    firstImageCaption: "Majority rule is a democratic instrument. The rule of law, separated powers and minority voice are what keep democracy alive.",
    secondImageAlt: "Korean thinker Ham Seok-heon, who saw ordinary unnamed people as the agents of history",
    secondImageCaption: "Ham Seok-heon saw the unnamed ssial not as objects of rule, but as the agents of history.",
    author: "September 2026 · Words of an Ordinary Citizen, Publisher of SEED VOICE",
    back: "Back to About",
  },
};

export default function FoundingStatement() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <article className="bg-paper pb-16 sm:pb-20">
      <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-16">
        <div className="container-page max-w-4xl">
          <Link to="/about" className="text-link"><ArrowLeft size={16}/>{content.back}</Link>
          <span className="section-kicker mt-8 block">{content.kicker}</span>
          <h1 className="editorial-title mt-3 text-4xl font-bold leading-tight text-navy sm:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-8 text-green-deep sm:text-2xl">{content.subtitle}</p>
          <p className="mt-5 max-w-3xl border-l-2 border-gold pl-5 text-base leading-7 text-charcoal/65 sm:text-lg">{content.summary}</p>
        </div>
      </header>

      <div className="container-page max-w-4xl py-10 sm:py-12">
        <div className="space-y-5 text-[17px] leading-[1.82] text-charcoal/76 sm:text-lg">
          {content.intro.map((paragraph, index) => (
            <p key={paragraph} className={index === content.intro.length - 1 ? "editorial-title pt-2 text-2xl font-bold text-green-deep sm:text-3xl" : ""}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-11 space-y-11 sm:mt-14 sm:space-y-14">
          {content.sections.map((section, index) => (
            <Fragment key={section.title}>
              <section className="border-t border-green-deep/15 pt-8 sm:pt-10">
                <h2 className="editorial-title text-3xl font-bold leading-tight text-navy sm:text-4xl">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[17px] leading-[1.82] text-charcoal/76 sm:text-lg">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.source && (
                  <a href={section.source.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-deep underline decoration-gold/70 underline-offset-4">
                    {section.source.label}<ExternalLink size={14}/>
                  </a>
                )}
              </section>

              {index === 1 && (
                <figure className="overflow-hidden border-y border-green-deep/15 bg-[#F1F2EC]">
                  <img src={`${import.meta.env.BASE_URL}images/columns/checks-and-balances.png`} alt={content.firstImageAlt} className="aspect-[16/9] w-full object-cover" />
                  <figcaption className="px-5 py-3 text-sm leading-6 text-charcoal/65 sm:px-6">{content.firstImageCaption}</figcaption>
                </figure>
              )}

              {index === 6 && (
                <figure className="mx-auto max-w-2xl overflow-hidden border-y border-green-deep/15 bg-[#F1F2EC]">
                  <img src={`${import.meta.env.BASE_URL}images/columns/ham-seok-heon-portrait.jpg`} alt={content.secondImageAlt} className="aspect-[16/10] w-full object-cover object-[center_28%] grayscale" />
                  <figcaption className="px-5 py-3 text-sm leading-6 text-charcoal/65 sm:px-6">{content.secondImageCaption}</figcaption>
                </figure>
              )}
            </Fragment>
          ))}
        </div>

        <section className="mt-12 border-y-2 border-gold/75 bg-[#fbf4e5] px-6 py-8 sm:mt-16 sm:px-10 sm:py-10">
          <div className="space-y-2 editorial-title text-2xl font-bold leading-relaxed text-green-deep sm:text-3xl">
            {content.closingQuestions.map((line) => <p key={line}>{line}</p>)}
          </div>
          <p className="mt-7 text-[17px] font-semibold leading-[1.82] text-charcoal/78 sm:text-lg">{content.declaration}</p>
        </section>

        <blockquote className="my-10 border-y-2 border-green-deep py-8 text-center sm:my-12 sm:py-10">
          {content.final.map((line) => <p key={line} className="editorial-title text-3xl font-bold leading-relaxed text-green-deep sm:text-4xl">{line}</p>)}
        </blockquote>

        <footer className="border-t border-green-deep/15 pt-7">
          <p className="text-sm font-extrabold tracking-[.04em] text-green-deep">{content.author}</p>
          <Link to="/about" className="button-secondary mt-6">{content.back}</Link>
        </footer>
      </div>
    </article>
  );
}
