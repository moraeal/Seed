import type { SeedLanguageArticle } from "./seedLanguageBase";
import { freedomArticleKo } from "./seedLanguageFreedom";

export const freedomArticleEn: SeedLanguageArticle = {
  ...freedomArticleKo,
  term: "Freedom",
  title: "Freedom Is Not Laissez-Faire; It Is the Work of Making Citizens Agents",
  subtitle: "Beyond non-interference: freedom from arbitrary domination, real opportunities to choose, and responsibility for choice",
  summary: "Freedom is not simply a condition in which government does nothing. It requires protection from unjustified interference, safeguards against arbitrary domination, and real opportunities for citizens to choose. The state should build the conditions for judgment and choice rather than choose on citizens’ behalf.",
  keyPoints: [
    "Freedom is more than non-interference: citizens must not live at the mercy of arbitrary power and must be able to judge for themselves.",
    "Formal rights are thin when people lack education, information, mobility, work opportunities, or other practical conditions for meaningful choice.",
    "Freedom, responsibility, and fairness must operate together if citizens are to stand as agents rather than as objects of protection or mobilization.",
  ],
  heroImage: {
    ...freedomArticleKo.heroImage,
    alt: "A citizen standing at a crossroads in a city and considering different paths",
    caption: "Freedom does not choose the road for citizens. It keeps the roads open so they can judge and choose for themselves.",
    credit: "AI image produced by SEED VOICE",
  },
  inlineImage: {
    ...freedomArticleKo.inlineImage!,
    alt: "A citizen looking from a transparent dome of safety and welfare toward a landscape of diverse choices",
    caption: "Protection is necessary, but when protection becomes a system of permission, review, and control that replaces choice, the space for freedom narrows.",
    credit: "AI image produced by SEED VOICE",
  },
  sections: [
    {
      title: "The argument goes wrong when freedom is confused with laissez-faire",
      paragraphs: [
        "Freedom is often pictured as a scene in which the state withdraws and individuals are left to manage on their own, or as a simple reduction of regulation. Those images capture part of freedom, but not the whole of it.",
        "A person is not necessarily free merely because no one is actively interfering at this moment. If speaking depends on another person’s favor, if one arbitrary decision can overturn a life, or if meaningful alternatives are closed, formal non-interference may coexist with deep dependence.",
        "A free society therefore does not abandon citizens, nor does it prescribe the correct answer for them. It limits power and enlarges the conditions in which people can judge, choose, fail, learn, and choose again.",
      ],
    },
    {
      title: "The first freedom is freedom from unjustified interference",
      paragraphs: [
        "Isaiah Berlin’s account of negative liberty remains the basic starting point. Individuals need a protected sphere into which the state or other people cannot simply intrude. Thought, speech, movement, association, property, and occupation require clear limits on coercive intervention.",
        "Good intentions do not automatically justify interference. A policy may pursue safety, welfare, or equality and still restrict citizens beyond what its purpose warrants.",
        "Yet low interference alone does not complete freedom. Citizens face power not only from the state but also from employers, large organizations, dominant platforms, and local hierarchies. The further question is whether they can speak and revise their choices without depending on another actor’s permission.",
      ],
      sourceIndices: [0],
    },
    {
      title: "The second freedom is freedom from arbitrary domination",
      paragraphs: [
        "Philip Pettit’s republican account describes freedom as non-domination. Even when a powerful actor does not interfere today, dependence remains if that actor could arbitrarily reverse another person’s choices tomorrow.",
        "Citizens can therefore be unfree under a benevolent ruler. If permission can be withdrawn without reasons, rules vary by person, or there is no independent route of appeal, people must live by the goodwill of power.",
        "The central safeguard is not the ruler’s virtue but institutions: general and predictable law, divided authority, independent review, transparent procedure, and meaningful rights of challenge. Freedom is less about finding a good person to wield power than about making arbitrary power difficult for anyone to wield.",
      ],
      sourceIndices: [1],
    },
    {
      title: "The third freedom is a real opportunity to choose",
      paragraphs: [
        "Amartya Sen’s capability approach distinguishes rights written on paper from the real ability to use them. A nominal freedom of choice is thin when people lack education, information, mobility, or realistic access to work and other opportunities.",
        "This is where a legitimate public role emerges. The state should not decide what citizens must choose; it should strengthen the capabilities and conditions that make choice real. Education, basic security, access to information, fair competition, mobility, and the rule of law convert formal liberty into practical agency.",
        "Youth employment illustrates the distinction. Training, job-search support, and emergency employment programs can help, but the longer-term objective should be to widen pathways, reduce entry barriers and information gaps, and enable young people to compare options, take risks, recover from failure, and choose again.",
      ],
      sourceIndices: [2, 3],
    },
    {
      title: "Protection must be watched when it begins to replace citizens’ choices",
      paragraphs: [
        "Korea’s recent petroleum price cap offers a useful boundary case. During a sharp international oil-price shock, limiting sudden fuel-price increases can be a temporary emergency measure to reduce household pain. The government estimated that the measure lowered August consumer-price inflation by 0.5 percentage points.",
        "The harder questions concern duration, cost, and exit. If emergency protection has no transparent end condition and the state continually substitutes its own price decisions for decentralized choices, short-term stability can weaken the structure of responsibility and choice.",
        "Good intervention should be designed to restore agency rather than permanently replace it: disclose exit conditions, target support toward vulnerable groups, diversify supply, strengthen competition, and return decisions to citizens and markets when the emergency passes.",
      ],
      sourceIndices: [4],
    },
    {
      title: "Freedom, responsibility, and fairness must move together",
      paragraphs: [
        "Freedom without responsibility can become a license to impose costs on others. Responsibility without meaningful choice turns citizens into objects of mobilization for goals they did not choose.",
        "Fairness is equally necessary. If rules are relaxed for some and tightened for others, the language of freedom becomes a privilege of power. Fairness begins with general, predictable rules and legitimate opportunities, not with making every outcome identical.",
        "SEED VOICE therefore places three sentences together: responsibility without freedom is mobilization; freedom without responsibility breeds distrust; freedom without fairness becomes privilege. Separating these values makes civic agency harder, not easier.",
      ],
    },
    {
      title: "The state should enable choice, not make choices in place of citizens",
      paragraphs: [
        "A free state is not necessarily a weak state. It can be capable and effective at constraining arbitrary power, enforcing fair rules, and building the educational, informational, infrastructural, and security foundations of choice.",
        "What matters is the direction of that capacity. The state should act as a trustee that protects the conditions for citizens to judge, recover from failure, and live free of arbitrary domination, rather than as a guardian that designs every detail of life for them.",
        "Freedom is not the act of leaving citizens alone. It gives them room to think, keeps real paths open, and returns authority over the consequences of choice. Freedom is ultimately the work of making citizens agents.",
      ],
    },
  ],
};
