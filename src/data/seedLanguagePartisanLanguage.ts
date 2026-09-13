import type { SeedLanguageArticle } from "./seedLanguageBase";

const sharedSources = [
  { label: "하상응, 「한국 유권자 차원에서의 정치적 양극화」, 『한국의 사회동향 2022』", url: "https://mods.go.kr/board.es?act=view&bid=12313&list_no=422192&mid=a90104010312" },
  { label: "신정섭, 「온라인 커뮤니티 사용이 유권자의 정서적 양극화에 미치는 영향」, 2024", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003151715" },
  { label: "이종임·박진우·이선민, 「청년 세대의 분노와 혐오 표현의 탄생」, 2021", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002723553" },
  { label: "연지영·이훈, 「혐오가 유머를 만날 때」, 2020", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002635590" },
  { label: "Milli et al., “Engagement, user satisfaction, and the amplification of divisive content on social media,” 2025", url: "https://academic.oup.com/pnasnexus/article/4/3/pgaf062/8052060" },
  { label: "국제신문, 「영 포티, 그리고 틀딱과 이대남」, 2025", url: "https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=1700&key=20251230.22019010567" },
];

export const partisanLanguageArticleKo: SeedLanguageArticle = {
  slug: "words-turn-citizens-into-enemies",
  term: "진영언어",
  date: "2026-09-13",
  readMinutes: 5,
  newsletterEligible: false,
  listingEligible: false,
  title: "말이 시민을 적으로 만든다",
  subtitle: "진영과 알고리즘이 만든 언어를 시민의 말로 되돌려야 한다",
  summary: "신조어는 복잡한 현실을 재치 있게 압축하지만 사람까지 하나의 집단으로 압축할 수 있다. 진영의 딱지와 참여를 좇는 알고리즘이 만날 때 시민은 상대의 주장보다 소속부터 판정하게 된다. 시민의 언어는 좋은 가치를 부정하지 않는다. 사람을 편으로 나누는 대신 문제를 구체적으로 나누고 근거와 비용, 결과와 책임을 묻는다.",
  keyPoints: [
    "우리는 사람의 이름보다 ‘이대남·이대녀·영포티·한남·한녀’ 같은 집단의 이름으로 서로를 부르기 시작했다.",
    "‘혐오·극우·종북·카르텔’ 같은 말은 구체적 근거 없이 사용될 때 상대를 대화할 수 없는 존재로 규정한다.",
    "‘참교육·사이다·나락’은 문제 해결보다 누군가가 응징당하는 장면에 만족하게 만들 수 있다.",
    "시민의 언어는 좋은 가치를 부정하는 말이 아니다. 아무리 좋은 가치라도 근거와 비용, 결과와 책임을 묻는 언어다.",
  ],
  heroImage: {
    src: "images/seed-language/partisan-language-citizen-labels-hero.webp",
    alt: "이대남, 이대녀, 영포티, 극우, 종북, 카르텔이라는 꼬리표를 단 시민들 사이에서 한 여성이 자신의 꼬리표를 떼어내는 장면",
    caption: "집단의 이름이 한 사람의 삶과 판단을 대신하는 순간, 현실을 설명하던 말은 사람을 판결하는 말로 바뀝니다.",
    credit: "씨앗의 소리 AI 제작 이미지 · 상징적 장면",
  },
  inlineImage: {
    src: "images/seed-language/partisan-language-to-civic-language-ko.svg",
    alt: "진영의 언어를 시민의 언어로 바꾸는 세 가지 기준을 비교한 도표",
    caption: "집단의 이름을 제도의 언어로, 선악의 판정을 권리와 책임의 언어로, 좋은 의도를 비용과 결과의 언어로 바꾸는 것이 시민의 언어입니다.",
    credit: "씨앗의 소리 편집 도표",
  },
  inlineImageAfterSection: 6,
  showTableOfContents: false,
  sections: [
    {
      title: "우리는 언제부터 서로의 이름을 잃었나",
      paragraphs: [
        "한 사람을 이해하려면 그가 어떤 삶을 살아왔는지 알아야 한다. 어떤 일을 하고, 무엇을 두려워하며, 어떤 제도로 인해 어려움을 겪고 있는지를 살펴야 한다. 그러나 오늘의 정치와 온라인 공간은 사람을 그렇게 오래 들여다보지 않는다.",
        "대신 짧은 이름을 붙인다. 이대남, 이대녀, 영포티, 한남, 한녀, 틀딱, 맘충이라고 부른다. 사람의 이름은 사라지고 세대와 성별, 계층과 정치 성향을 표시하는 꼬리표만 남는다.",
        "이런 말들은 처음부터 모두 혐오를 위해 만들어진 것은 아니다. ‘이대남·이대녀’는 선거에서 나타난 청년층의 차이를 설명하는 용어로 사용됐고, ‘영포티’는 젊은 감각과 소비력을 지닌 40대를 가리키는 마케팅 용어에서 출발했다. 젊은 세대가 겪는 취업난과 주거 불안, 병역 부담과 젠더 갈등을 드러내고 권위적인 기성세대를 풍자하는 언어도 필요했다.",
        "문제는 현실을 설명하던 말이 사람을 판결하는 말로 바뀌는 순간이다. ‘이대남’이 20대 남성의 다양한 삶을 하나의 정치 성향으로 묶고, ‘이대녀’가 청년 여성의 서로 다른 생각을 하나의 젠더 의식으로 단정할 때 언어는 현실을 설명하지 않는다. 오히려 현실을 지워버린다.",
      ],
      sourceIndices: [5],
    },
    {
      title: "신조어는 현실을 압축하지만 사람도 압축한다",
      paragraphs: [
        "신조어가 모두 나쁜 것은 아니다. 신조어에는 젊은 세대의 재치와 유머가 있고, 기존 언어로는 설명하기 어려운 현실을 단번에 드러내는 힘도 있다.",
        "‘흙수저’는 노력만으로 넘기 어려운 자산 격차를 보여줬다. ‘영끌’은 집값 상승에서 뒤처질지 모른다는 불안을 담았다. ‘벼락거지’는 성실하게 일하고 저축한 사람이 오히려 상대적 박탈감을 느끼게 된 현실을 표현했다.",
        "하지만 이런 말이 반복되면 현실을 바라보는 방식도 달라질 수 있다. 집이 없는 시민은 어느 순간 ‘실패한 사람’으로 취급되고, 자산을 가진 사람은 각자의 형성 과정과 무관하게 ‘기득권’으로 묶인다. 개인이 처한 구체적인 조건보다 어느 집단에 속하는지가 더 중요해진다.",
        "말은 현실을 묘사하는 데서 끝나지 않는다. 무엇을 부러워하고 누구를 원망하며, 어떤 사람과 연대하고 어떤 사람을 배제할 것인지에도 영향을 준다.",
      ],
    },
    {
      title: "진영의 언어는 사람보다 적을 먼저 만든다",
      paragraphs: [
        "좌빨, 종북, 토착왜구, 극우, 개딸, 수박, 카르텔, 반국가세력 같은 말은 서로 기원과 의미가 다르다. 일부는 정치적 분석에 필요한 개념이고, 일부는 특정 집단이 스스로 사용한 이름이며, 일부는 처음부터 상대를 비하하기 위해 만들어졌다.",
        "그러나 이런 말이 구체적인 사실과 행위를 설명하지 않고 사람 전체를 규정하는 딱지로 사용되면 작동 방식은 비슷해진다. 상대의 정책이 왜 잘못됐는지 설명할 필요가 없어지고, 어떤 말이 사실인지 확인할 필요도 사라진다. 상대에게 적절한 이름만 붙이면 판단은 끝난다.",
        "진보 진영의 일부는 반대자를 ‘혐오·극우·기득권’으로 부르고, 보수 진영의 일부는 반대자를 ‘종북·좌파·반국가세력’으로 부른다. 사용하는 단어는 다르지만 상대가 왜 그런 생각을 하는지 묻기보다 어느 편인지 먼저 판정한다는 점에서는 닮아 있다.",
        "그 순간 정치는 정책의 경쟁이 아니라 도덕적 신분의 전쟁이 된다. 우리 편은 실수해도 선한 의도가 있고, 상대편은 옳은 말을 해도 숨은 의도가 있다고 믿는다.",
        "하상응의 2022년 연구는 한국 유권자에게서 중도층이 줄어드는 전형적인 이념 양극화의 증거는 뚜렷하지 않지만, 상대 정당과 지지자를 점점 더 부정적으로 느끼는 정서적 양극화의 흔적은 확인된다고 분석했다. 시민들이 생각의 차이뿐 아니라 감정의 적대에 의해 갈라지고 있다는 경고다.",
      ],
      sourceIndices: [0],
    },
    {
      title: "‘참교육’은 언제 응징의 언어가 되었나",
      paragraphs: [
        "참교육은 본래 참다운 교육, 교육의 본질을 회복하자는 뜻으로 쓰였다. 그러나 온라인 공간에서는 잘못한 사람을 공개적으로 망신주거나 강하게 응징하는 장면을 가리키는 말로도 사용된다.",
        "사이다, 박제, 좌표찍기, 나락 같은 말도 비슷한 장면에서 등장한다. 문제를 해결하는 과정은 길고 복잡하지만 누군가가 몰락하는 장면은 짧고 강렬하다. 시민은 해결 과정에 참여하기보다 응징의 장면을 소비하게 된다.",
        "잘못한 사람에게 책임을 묻는 것은 필요하다. 그러나 책임을 묻는 것과 한 사람을 사회적으로 매장하는 것은 다르다. 법과 제도를 통해 잘못을 바로잡는 것과 온라인 군중이 사실관계와 형벌의 크기를 함께 결정하는 것도 다르다.",
        "연지영·이훈의 2020년 온라인 실험은 유머가 결합된 젠더 혐오표현이 단순한 농담처럼 받아들여지면서, 사람들이 문제 제기를 하지 않고 침묵하는 경향을 강화할 수 있음을 보여줬다. 풍자와 유머는 권력을 비판하는 시민의 무기가 될 수 있지만, 동시에 타인에 대한 적대를 가볍게 유통하는 포장지가 될 수도 있다.",
        "‘참교육’이라는 말이 사용되는 순간 응징하는 사람은 정의의 편에 서고, 응징당하는 사람은 설명할 기회를 잃기 쉽다. 교육의 언어가 처벌의 언어로 뒤집히는 순간이다.",
      ],
      sourceIndices: [2, 3],
    },
    {
      title: "좋은 가치도 권력의 언어가 될 수 있다",
      paragraphs: [
        "인권감수성, 기후위기, 기후정의, 사회적 가치, 공정한 전환, 포용과 다양성은 모두 중요한 문제를 제기하는 말이다. 이 말들이 가리키는 현실까지 부정해서는 안 된다.",
        "기후변화는 과학적으로 검토하고 대응해야 할 현실이며, 인권은 누구에게나 보장돼야 할 기본적인 권리다. 사회적 약자를 보호하고 산업 전환 과정에서 피해를 보는 시민을 살피는 일도 필요하다.",
        "그러나 좋은 가치를 담았다는 이유만으로 그 말이 질문받지 않아도 되는 것은 아니다. ‘인권감수성이 부족하다’는 말로 한 사람의 내면을 판정하기 전에 누구의 어떤 권리가 어떤 행위로 침해됐는지 밝혀야 한다. ‘기후위기’를 말할 때도 대응 정책의 효과와 비용, 산업과 일자리에 미치는 영향, 다른 대안의 가능성을 함께 설명해야 한다.",
        "‘사회적 가치’를 내세우는 사업이라면 누가 혜택을 받았고 얼마의 비용이 들었으며 실제로 어떤 결과가 나타났는지를 공개해야 한다. ‘공정한 전환’도 선언에 그칠 것이 아니라 일자리를 잃는 노동자와 비용을 부담하는 소비자, 결정에서 배제된 지역주민의 목소리를 확인해야 한다.",
        "좋은 말이 검증을 면제받는 순간, 가치는 권력이 된다.",
      ],
    },
    {
      title: "참여를 좇는 알고리즘은 분노의 언어를 키울 수 있다",
      paragraphs: [
        "온라인 커뮤니티와 플랫폼에서는 차분한 설명보다 강한 감정을 담은 말이 빠르게 확산되기 쉽다. 긴 설명보다 짧은 조롱이 공유되기 쉽고, 신중한 질문보다 확신에 찬 비난이 더 많은 반응을 얻는다.",
        "신정섭의 2024년 연구는 제20대 대통령선거 유권자의식조사 자료를 분석한 결과, 온라인 커뮤니티 이용 빈도가 높을수록 상대 정당에 대한 적대적 감정과 정서적 양극화 수준이 높은 관련성을 보였다고 밝혔다. 특히 자신의 경제적 상황에 대한 만족도가 낮은 사람에게서 그 관계가 더 크게 나타났다.",
        "해외 연구에서도 비슷한 위험이 관찰됐다. 2025년 《PNAS Nexus》에 실린 트위터 알고리즘 감사 연구는 참여도를 기준으로 게시물을 배열하는 방식이 단순한 시간순 배열보다 감정적으로 격앙되고 상대 진영에 적대적인 정치 게시물을 더 많이 노출시켰다고 보고했다.",
        "이 결과들만으로 온라인 커뮤니티나 알고리즘이 시민을 직접 극단화한다고 단정할 수는 없다. 이미 강한 정치 성향을 가진 사람이 특정 커뮤니티를 더 자주 이용할 수 있고, 한 플랫폼에서 확인된 결과를 모든 플랫폼에 그대로 적용할 수도 없다.",
        "그러나 경제적 불만과 집단 정체성이 진영의 언어를 만나고, 참여를 좇는 알고리즘이 그 언어를 반복적으로 노출할 때 적대감이 강화될 가능성은 충분히 경계해야 한다. 시민은 판단하는 주체가 아니라 분노를 전달하고 우리 편임을 증명하는 매개체로 작아질 수 있다.",
      ],
      sourceIndices: [1, 4],
    },
    {
      title: "시민의 언어는 문제를 구체적으로 나눈다",
      paragraphs: [
        "진영의 언어는 사람을 편으로 나눈다. 시민의 언어는 문제를 구체적으로 나눈다.",
        "시민의 언어로 되돌린다는 것은 거친 말을 점잖은 말로 순화한다는 뜻이 아니다. 누가 옳은 편인지 판정하기 전에 무엇이 실제로 일어났는지를 묻는 것이다.",
        "‘혐오’라고 규정하기 전에 불쾌한 의견과 모욕, 차별적 대우와 폭력 선동을 구분해야 한다. ‘카르텔’이라고 부르기 전에 누가 어떤 권한과 자원을 독점했고, 어떤 규칙을 이용해 경쟁을 막았는지 밝혀야 한다.",
        "‘이대남이 문제다’라고 말하는 대신 병역·일자리·주거·연금 제도가 서로 다른 청년 남성에게 어떤 부담을 주는지 물어야 한다. ‘기성세대가 탐욕스럽다’고 비난하기 전에 자산과 연금, 고용제도가 세대별·계층별로 어떤 차이를 만드는지 확인해야 한다.",
        "집단의 이름을 구체적인 제도의 언어로 바꾸고, 선악의 판정을 권리와 책임의 언어로 바꾸며, 좋은 의도를 비용과 결과의 언어로 바꾸는 것. 그것이 시민의 언어다.",
      ],
    },
    {
      title: "말을 시민에게 돌려주자",
      paragraphs: [
        "시민은 진영이 붙여준 이름으로 살아가는 존재가 아니다. 시민은 스스로 묻고 판단하며, 국가와 시장과 시민사회의 권력을 감시하는 주체다.",
        "그러나 시민이 상대의 이름을 잃고 진영이 붙인 별명으로 서로를 부르기 시작하면 정치는 시민의 판단을 빼앗는다. 말이 짧아질수록 생각도 짧아지고, 상대를 부르는 이름이 거칠어질수록 함께 해결할 수 있는 문제의 영역은 좁아진다.",
        "씨앗의 소리는 앞으로 자유·민주·공익과 같은 오래된 개념뿐 아니라 지금 시민들의 입과 온라인 공간에서 만들어지고 있는 새로운 말도 살펴보려 한다. 그 말이 어떤 현실에서 태어났고, 언제부터 진영의 언어가 됐으며, 시민의 관계와 판단을 어떻게 변화시키는지 추적할 것이다.",
        "목표는 어느 진영의 언어를 다른 진영의 언어로 교체하는 것이 아니다. 시민이 다시 생각하고 질문할 수 있는 말로 되돌리는 것이다.",
        "사람을 설명하는 말이 사람을 판결하는 말이 되고, 현실을 풍자하는 말이 상대를 제거하는 말이 되며, 공통의 문제를 말하던 언어가 진영을 동원하는 암호가 되는 순간을 경계해야 한다.",
        "진영의 언어는 사람을 편으로 나눈다. 시민의 언어는 문제를 구체적으로 나눈다. 이제 말을 시민에게 돌려줄 때다.",
      ],
    },
  ],
  sources: sharedSources,
};

export const partisanLanguageArticleEn: SeedLanguageArticle = {
  ...partisanLanguageArticleKo,
  term: "Partisan language",
  title: "When Words Turn Citizens into Enemies",
  subtitle: "The language shaped by political camps and algorithms must be returned to citizens",
  summary: "New expressions can compress a complicated reality with wit, but they can also compress people into political types. When partisan labels meet engagement-driven ranking, citizens may judge affiliation before argument. Civic language does not reject worthy causes; it defines the problem precisely and asks about evidence, cost, consequence and responsibility.",
  keyPoints: [
    "Koreans increasingly refer to one another through labels for generations, genders and political camps rather than as individuals.",
    "Terms such as ‘far right,’ ‘pro-North,’ ‘hate’ and ‘cartel’ can make people seem unworthy of dialogue when used without specific evidence.",
    "Online expressions for punishment, public shaming and social ruin can turn accountability into a spectacle of retribution.",
    "Civic language does not deny worthy values. It asks even good causes to answer questions about evidence, cost, results and responsibility.",
  ],
  heroImage: {
    ...partisanLanguageArticleKo.heroImage,
    alt: "Korean citizens wearing labels for generations and political camps as a woman removes her own label",
    caption: "When a group name substitutes for a person's life and judgment, language stops describing reality and starts passing sentence on people.",
    credit: "AI editorial illustration produced by SEED VOICE",
  },
  inlineImage: {
    src: "images/seed-language/partisan-language-to-civic-language-en.svg",
    alt: "A comparison of three shifts from partisan language to civic language",
    caption: "Civic language replaces group labels with institutional questions, moral verdicts with rights and duties, and good intentions with scrutiny of costs and outcomes.",
    credit: "SEED VOICE editorial graphic",
  },
  sections: [
    {
      title: "When did we stop calling one another by name?",
      paragraphs: [
        "To understand a person, we need to know how that person has lived: what work they do, what they fear and which institutions make life difficult. Politics and online discourse rarely look for that long. They attach a short label instead.",
        "Korean debate is crowded with names for groups: idaenam and idaenyeo for men and women in their twenties, young-forty for a supposedly trend-conscious—or now embarrassing—middle-aged cohort, and openly contemptuous labels for Korean men, Korean women, older people and mothers. Individual names disappear; generation, gender, class and presumed politics remain.",
        "Not all these terms began as hate speech. Some emerged from election analysis or marketing, while others captured unemployment, housing insecurity, military-service burdens and gender conflict. Satire aimed at entrenched authority also has a legitimate place.",
        "The problem begins when a word that described a social pattern becomes a verdict on a person. If ‘men in their twenties’ is treated as one political mind, or young women as one gender ideology, language no longer explains reality. It erases it.",
      ],
      sourceIndices: [5],
    },
    {
      title: "New words compress reality—and people",
      paragraphs: [
        "New expressions are not inherently bad. They carry wit and generational experience, and can reveal a reality that older vocabulary misses.",
        "The Korean ‘dirt spoon’ named asset inequality that effort alone cannot overcome. ‘Pulling every resource’ captured the fear of being priced out of housing. ‘Lightning poor’ described workers whose savings suddenly looked worthless beside soaring asset prices.",
        "Yet repetition can change the lens. A person without a home becomes a failure; an owner becomes privileged regardless of how the asset was acquired. The category begins to matter more than individual circumstances.",
        "Words do more than describe. They influence whom we envy, blame, join and exclude.",
      ],
    },
    {
      title: "Partisan language creates an enemy before an argument",
      paragraphs: [
        "Korean politics uses many labels with different origins: some are analytical categories, some began as self-descriptions, and others were coined as insults. ‘Far right,’ ‘pro-North,’ ‘native Japanese collaborator,’ ‘cartel,’ ‘anti-state force,’ and factional nicknames are not interchangeable.",
        "But they work alike when they replace evidence about conduct with a judgment on an entire person. There is no need to explain why a policy is wrong or verify a claim. Once the correct label is attached, judgment is complete.",
        "Some progressives dismiss opponents as hateful, far-right or privileged; some conservatives dismiss opponents as pro-North, leftist or anti-state. The vocabularies differ, but both can classify allegiance before asking why someone thinks as they do.",
        "Politics then becomes a war over moral status rather than a contest of policy. Our side's mistakes retain good intentions; even a sound argument from the other side is presumed to conceal a bad one.",
        "Ha Sang-eung's 2022 analysis found little clear evidence that Korea's political centre was vanishing in a classic pattern of ideological polarization. It did, however, identify signs of affective polarization: supporters of each major camp increasingly viewed the other party negatively.",
      ],
      sourceIndices: [0],
    },
    {
      title: "How did ‘true education’ become a word for punishment?",
      paragraphs: [
        "Chamgyoyuk—literally ‘true education’—once expressed a demand to recover the purpose of education. Online, it is also used for scenes in which a wrongdoer is humiliated or forcefully punished.",
        "Other Korean internet terms celebrate cathartic payback, permanent exposure, coordinated targeting and a person's fall from public favour. Solutions are slow and complicated; a scene of ruin is immediate and emotionally satisfying. Citizens can become spectators of punishment rather than participants in repair.",
        "Accountability is necessary. Social erasure is not the same thing. Correction through law and institutions is also different from an online crowd deciding both the facts and the sentence.",
        "In a 2020 online experiment, Yeon Ji-young and Lee Hoon found that humour could make gender-hostile messages seem like mere jokes and increase a tendency to remain silent rather than challenge them. Satire can be a civic weapon against power, but it can also become packaging that makes hostility easier to circulate.",
        "When punishment is named ‘education,’ the punisher easily occupies the side of justice while the accused loses room to explain. Educational language has been reversed into penal language.",
      ],
      sourceIndices: [2, 3],
    },
    {
      title: "Good values can also become languages of power",
      paragraphs: [
        "Human-rights awareness, the climate crisis, climate justice, social value, a just transition, inclusion and diversity all raise important problems. The realities they name should not be denied.",
        "Climate change is a reality to be examined scientifically and addressed. Human rights belong to everyone. Societies must protect vulnerable people and consider those harmed by industrial transition.",
        "But good content does not place a phrase beyond question. Before judging someone's inner character as insensitive to rights, identify which right was harmed by which act. Climate policy should be discussed with its effectiveness, cost, impact on jobs and industry, and possible alternatives.",
        "A project claiming social value should disclose its beneficiaries, spending and results. A just transition must hear workers who may lose jobs, consumers who bear costs and residents excluded from decisions.",
        "When good words become exempt from verification, value becomes power.",
      ],
    },
    {
      title: "Engagement-driven algorithms can enlarge the language of anger",
      paragraphs: [
        "On social platforms, emotionally forceful language often travels faster than calm explanation. A short taunt is easier to share than a long account; confident blame can win more reaction than a careful question.",
        "Using survey data from Korea's 2022 presidential election, Shin Jungsub reported an association between more frequent online-community use and greater affective polarization, especially hostility toward the opposing party. The association was stronger among respondents less satisfied with their economic circumstances.",
        "A 2025 preregistered audit published in PNAS Nexus found that Twitter's engagement-based ranking amplified emotionally charged, out-group-hostile political posts compared with a reverse-chronological feed.",
        "Neither result proves that communities or algorithms directly radicalize citizens. People with strong political views may choose particular communities more often, and evidence from one platform cannot be applied mechanically to every service.",
        "Still, when economic frustration and group identity meet partisan vocabulary—and an engagement system repeatedly surfaces it—the possibility of intensified hostility deserves attention. Citizens risk shrinking from judging subjects into relays for anger and proofs of camp loyalty.",
      ],
      sourceIndices: [1, 4],
    },
    {
      title: "Civic language divides the problem, not the people",
      paragraphs: [
        "Partisan language divides people into sides. Civic language divides a problem into specific questions.",
        "Returning to civic language does not mean making rough speech polite. It means asking what happened before deciding who belongs to the righteous side.",
        "Before calling something ‘hate,’ distinguish an unwelcome opinion from an insult, discriminatory treatment or incitement to violence. Before alleging a ‘cartel,’ identify who monopolized what authority or resource, and which rule was used to block competition.",
        "Instead of saying that young men are the problem, ask how military service, jobs, housing and pensions burden different young men. Instead of calling older generations greedy, examine how assets, pensions and employment rules create different effects across generations and classes.",
        "Replace the group name with institutional language, moral judgment with rights and responsibility, and good intention with cost and outcome. That is civic language.",
      ],
    },
    {
      title: "Return words to citizens",
      paragraphs: [
        "Citizens do not exist under names assigned by political camps. They ask and judge for themselves, and scrutinize power in the state, the market and civil society.",
        "When citizens lose one another's names and adopt partisan nicknames, politics takes judgment away from them. As words grow shorter, thought can shrink with them; as names become harsher, the space for common problem-solving narrows.",
        "SEED VOICE will examine not only inherited concepts such as freedom, democracy and public interest, but also new expressions being made in everyday speech and online. We will trace the realities that produced them, when they became partisan codes, and how they affect civic relationships and judgment.",
        "The goal is not to replace one camp's vocabulary with another's. It is to restore words with which citizens can think and question again.",
        "We should watch the moment when a word that explains a person passes sentence on them, when satire becomes a tool of removal, and when language for a common problem becomes a code for mobilizing a camp.",
        "Partisan language divides people into sides. Civic language divides problems into questions. It is time to return words to citizens.",
      ],
    },
  ],
  sources: [
    { ...sharedSources[0], label: "Ha Sang-eung, “Political Polarization among Korean Voters,” Korean Social Trends 2022" },
    { ...sharedSources[1], label: "Jungsub Shin, “The Impact of Online Community Usage on Affective Polarization of Korean Voters,” 2024" },
    { ...sharedSources[2], label: "Lee Jongim, Park Jin-woo and Lee Sunmin, “The Birth of Rage and Hate Speech in the Youth Generation,” 2021" },
    { ...sharedSources[3], label: "Ji-young Yeon and Hoon Lee, “When Hate Meets Humor,” 2020" },
    sharedSources[4],
    { ...sharedSources[5], label: "Kookje Shinmun, “Young Forty, Old Geezer and Men in Their Twenties,” 2025 (Korean)" },
  ],
};
