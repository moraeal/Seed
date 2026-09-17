import { polanyiColumn } from "./columns/polanyiColumn";
import { electricityPrepaymentColumn } from "./columns/electricityPrepaymentColumn";
import { civicSocietyStateizationColumn } from "./columns/civicSocietyStateizationColumn";
import { civicPowerWatchColumn } from "./columns/civicPowerWatchColumn";

export type SeedColumn = {
  slug: string;
  issue: number;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  authorBio?: string;
  readMinutes: number;
  summary: string;
  heroImage: { src: string; socialSrc?: string; alt: string; caption: string; credit: string; sourceUrl: string };
  referenceVideo?: {
    youtubeId: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
    title: string;
    description: string;
    credit: string;
    afterSection?: number;
  };
  inlineImage: { src: string; alt: string; caption: string; credit: string; sourceUrl: string };
  additionalImages?: {
    afterSection: number;
    src: string;
    alt: string;
    caption: string;
    credit: string;
    sourceUrl: string;
    contain?: boolean;
  }[];
  sourceDocument?: {
    title: string;
    description: string;
    pdfPath: string;
    pageImages: string[];
  };
  sections: { title: string; paragraphs: string[]; quote?: string[] }[];
  sourceNote: string;
  sources?: { label: string; url: string }[];
};

export const columns: SeedColumn[] = [
  civicPowerWatchColumn,
  civicSocietyStateizationColumn,
  electricityPrepaymentColumn,
  polanyiColumn,
  {
    slug: "citizenship-managed-by-the-state",
    issue: 8,
    title: "국가가 관리하는 시민",
    subtitle: "‘숙의민주주의’라는 좋은 말 뒤에서 시민사회의 국가화가 시작되고 있다",
    date: "2026-09-02",
    author: "작은씨앗",
    readMinutes: 15,
    summary: "모두의 광장, 숙의 프로그램, 민주시민교육, 시민사회 지원, 국가시민참여위원회가 중앙과 지역을 잇는 하나의 상설 체계로 결합하고 있습니다. 참여를 넓히겠다는 취지와 별개로, 국가가 시민의 의제와 대표성을 설계하는 구조가 될 위험을 살펴봅니다.",
    heroImage: {
      src: "images/columns/civic-system-portal.webp",
      alt: "다양한 시민이 투명한 참여 창구에 의견을 넣고 뒤편의 행정 체계가 이를 분류하는 상징적 장면",
      caption: "디지털 참여 창구가 넓어질수록 누가 시민의 의견을 분류하고 어떤 제안을 정책 의제로 올리는지 더 투명해야 합니다.",
      credit: "씨앗의 소리 제작 이미지",
      sourceUrl: "",
    },
    inlineImage: {
      src: "images/columns/civic-system-deliberation.webp",
      alt: "원탁에서 토론하는 시민들 위로 거대한 제도적 손이 자료와 마이크를 조정하는 상징적 장면",
      caption: "시민이 말할 기회를 얻는 것과 시민이 의제·자료·결과를 통제하는 것은 다릅니다. 숙의의 설계권을 함께 살펴야 합니다.",
      credit: "씨앗의 소리 제작 이미지",
      sourceUrl: "",
    },
    additionalImages: [
      {
        afterSection: 1,
        src: "images/columns/civic-system-flow.svg",
        alt: "시민의 제안이 모두의 광장과 AI 분류, 숙의 프로그램, 국가시민참여위원회를 거쳐 정부·국회·지역 체계로 연결되는 구조도",
        caption: "정부가 밝힌 참여 플랫폼과 국가시민참여위원회 구상을 토대로 재구성한 흐름입니다. 세부 운영 방식은 입법과 시행 과정에서 달라질 수 있습니다.",
        credit: "씨앗의 소리 도식",
        sourceUrl: "",
        contain: true,
      },
      {
        afterSection: 4,
        src: "images/columns/civic-system-network.webp",
        alt: "중앙의 거대한 제도 허브가 여러 지역 조직과 연결되고 그 밖의 시민들은 독립된 불빛을 들고 있는 상징적 장면",
        caption: "중앙 플랫폼과 위원회, 지역 조직과 지원 체계가 결합하면 시민참여는 하나의 전국적 행정망으로 발전할 수 있습니다.",
        credit: "씨앗의 소리 제작 이미지",
        sourceUrl: "",
      },
    ],
    sections: [
      {
        title: "‘국민공회’라는 한 기구보다 더 큰 체계가 오고 있습니다",
        paragraphs: [
          "처음에는 국민공회나 시민의회처럼 눈에 띄는 하나의 기구가 논쟁의 중심이었습니다. 그러나 지금 정부가 추진하는 방향은 단일 회의체보다 넓습니다. 온라인 참여 플랫폼, 숙의 프로그램, 민주시민교육, 시민사회 지원, 중앙위원회와 지역 조직을 서로 연결하는 상설 국가 시스템에 가깝습니다.",
          "행정안전부는 2026년 8월 업무보고에서 범정부 국민참여 플랫폼 ‘모두의 광장’을 시행하고, 시민참여기본법에 따라 만들어질 국가시민참여위원회가 시민정책참여·숙의공론화·민주시민교육의 컨트롤타워 역할을 하게 하겠다고 밝혔습니다. 모두의 광장은 11월까지 마련하겠다는 일정도 제시했습니다.",
          "참여를 확대하고 흩어진 제도를 연결한다는 취지는 그 자체로 나쁘지 않습니다. 문제는 국가가 참여의 입구부터 의제의 선별, 숙의의 설계, 교육과 지원, 정책 반영까지 한 체계 안에서 관리할 때 생깁니다. 시민의 목소리를 듣는 국가와 국가가 인정하는 시민을 만들어 내는 국가는 전혀 다르기 때문입니다.",
        ],
        quote: ["시민의 참여를 돕는 제도와", "시민을 제도 안에 길들이는 체제는 종이 한 장 차이입니다."],
      },
      {
        title: "‘모두의 광장’에 의견을 올리면 어떻게 되는가",
        paragraphs: [
          "모두의 광장은 누구나 온라인에서 정책을 제안하고 토론하며 그 결과를 정책 결정에 반영하도록 만든다는 범정부 플랫폼입니다. 정부 설명에 따르면 AI가 시민의 아이디어를 자동 분류하고 구체화·고도화해 정책이나 사업으로 연결합니다. 기존 소통24에도 제안, 국민심사, 설문, 토론회와 정책반영 절차가 한곳에 제시돼 있습니다.",
          "편리함은 분명합니다. 부처마다 흩어진 창구를 찾지 않아도 되고, 작은 제안도 더 쉽게 공론의 장에 들어갈 수 있습니다. 그러나 AI와 행정기관이 무엇을 비슷한 의견으로 묶는지, 어떤 제안을 우선순위에 올리는지, ‘구체화’ 과정에서 원래 뜻을 어떻게 바꾸는지는 새로운 권력이 됩니다.",
          "온라인에 올라온 다수 의견은 국민 전체의 뜻이 아닙니다. 적극적인 이용자, 조직된 집단, 디지털 접근성이 높은 사람의 목소리가 크게 보일 수 있습니다. 따라서 분류 기준과 추천 알고리즘, 담당자의 개입, 대표성의 한계, 이의제기 절차를 공개하지 않으면 ‘모두의 광장’은 모두의 목소리를 듣는 곳이 아니라 국가가 들을 목소리를 고르는 관문이 될 수 있습니다.",
        ],
      },
      {
        title: "시민들이 모여 토론하면 모두 숙의민주주의인가",
        paragraphs: [
          "숙의민주주의는 단순히 사람을 모아 토론시키는 방식이 아닙니다. 참여자가 균형 잡힌 자료를 받고, 서로 다른 전문가를 만나며, 결론을 강요받지 않고 판단할 수 있어야 합니다. 의제를 누가 정했는지, 질문을 어떤 문장으로 제시했는지, 진행자와 자료 제공자를 누가 선정했는지가 결과에 큰 영향을 줍니다.",
          "정부 주최 숙의 프로그램은 행정력과 예산, 정보 접근성을 갖는다는 장점이 있습니다. 동시에 정부가 해결하고 싶은 문제를 먼저 정하고, 정부가 선정한 자료�