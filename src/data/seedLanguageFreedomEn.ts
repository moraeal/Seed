import type { SeedLanguageArticle } from "./seedLanguageBase";
import { freedomArticleKo } from "./seedLanguageFreedom";

export const freedomArticleEn: SeedLanguageArticle = {
  ...freedomArticleKo,
  term: "Freedom",
  title: "Freedom Is Not Laissez-Faire; It Is the Work of Making Citizens Agents",
  subtitle: "Beyond non-interference: freedom as the condition for citizens to judge, choose, and take responsibility",
  summary: "The purpose of freedom is not to leave citizens alone. It is to enable them to judge for themselves rather than hand their lives over to the state, organizations, or majority opinion. Citizens become agents of their own lives when freedom, responsibility, and fairness stand together.",
  keyPoints: [
    "Freedom is not abandonment; it is the condition that allows citizens to judge and choose for themselves.",
    "Responsibility without freedom is mobilization, freedom without responsibility breeds distrust, and freedom without fairness becomes privilege.",
    "Citizens grow when society leaves room to choose, permits failure, and keeps open the chance to try again.",
  ],
  heroImage: {
    ...freedomArticleKo.heroImage,
    alt: "A citizen looking beyond systems of safety and protection toward open choices",
    caption: "Protection matters, but the space for freedom narrows when protection begins to replace citizens' own choices.",
    credit: "AI image produced by SEED VOICE",
  },
  inlineImage: {
    ...freedomArticleKo.inlineImage!,
    alt: "A citizen looking beyond systems of safety and protection toward open choices",
    caption: "Protection matters, but the space for freedom narrows when protection begins to replace citizens' own choices.",
    credit: "AI image produced by SEED VOICE",
  },
  sections: [
    {
      title: "Freedom makes citizens larger",
      paragraphs: [
        "The purpose of freedom is not to leave citizens alone.",
        "It is to enable citizens to judge for themselves rather than entrust their lives to the state, organizations, or the judgment of the majority.",
        "A free society therefore needs strong citizens.",
        "Citizens who do not merely wait for the state to provide, but ask the state for reasons.",
        "Citizens who do not wait for experts to hand down the correct answer, but listen to information and judge for themselves.",
        "Citizens who do not withdraw their words simply because they think differently from the majority.",
        "And citizens who know how to take responsibility for the consequences of their own choices.",
        "Freedom is not a matter of choosing only one among these values.",
        "When freedom, responsibility, and fairness stand together, citizens finally become agents of their own lives.",
        "In a society where the state chooses in place of citizens, citizens gradually become smaller.",
        "By contrast, in a society that leaves room for choice, accepts the freedom to fail, and keeps open the chance to try again, citizens grow.",
        "This is why SEED places such importance on freedom.",
        "Freedom is not leaving citizens alone.",
        "It is the work of making citizens agents and helping small citizens grow into larger citizens.",
      ],
    },
  ],
};