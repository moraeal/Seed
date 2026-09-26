// Pure retrieval code is shared with the local regression checks.
const STOP = new Set(["기사", "씨야", "씨앗", "내용", "알려줘", "알려", "어떻게", "무엇", "무엇인가요", "뭔가요", "뭐야", "어떤", "대해", "대한", "최근", "최신", "지금", "오늘", "설명", "해줘", "보여줘", "관련", "소리", "생각", "관점", "현황", "이슈", "뉴스", "변화", "정리", "뜻", "의미"]);
const PARTICLE = /(에서는|으로는|이라고|이라는|에게는|부터는|까지는|에서|에게|으로|라고|처럼|마다|보다|이나|하고|은|는|이|가|을|를|에|의|도|와|과|로|란)$/;

function normalize(value) {
  return value.toLowerCase().replace(/[^가-힣a-z0-9]+/g, " ").trim();
}

function terms(question) {
  const expanded = question.replace(/여수세계섬박람회/g, "여수섬박람회").replace(/여수 세계섬박람회/g, "여수섬박람회");
  return [...new Set(normalize(expanded).split(/\s+/).map((word) => {
    const stripped = word.replace(PARTICLE, "");
    return stripped.length > 1 ? stripped : word;
  }).filter((word) => word.length > 1 && !STOP.has(word)))];
}

function contains(text, term) {
  return text.includes(term);
}

function isTopic(question, topic) {
  if (!topic) return false;
  const base = normalize(topic).split(" ")[0];
  if (!base || base.length < 2) return false;
  return normalize(question).split(" ").some((word) => word === base || (word.startsWith(base) && PARTICLE.test(word.slice(base.length))));
}

export function asksForLatestLegislation(question) {
  return (/(최신|최근|새로|이번\s*주|오늘|요즘)/.test(question) && /(입법|법안|법률안|국회\s*(?:통과|법안))/.test(question))
    || (/\b(latest|recent|new)\b/i.test(question) && /\b(bills?|legislation|legislative)\b/i.test(question));
}

export function searchArticles(question, entries) {
  const keywords = terms(question);
  if (!keywords.length) return [];
  const scored = entries.map((entry) => {
    const title = normalize(entry.title);
    const summary = normalize(entry.summary ?? "");
    const paragraphs = entry.text.split(/\n+/).map((text) => text.trim()).filter(Boolean);
    const titleHits = keywords.filter((word) => contains(title, word)).length;
    const summaryHits = keywords.filter((word) => contains(summary, word)).length;
    const topic = isTopic(question, entry.term);
    const ranked = paragraphs.map((text, index) => ({ text, index, hits: keywords.filter((word) => contains(normalize(text), word)).length }))
      .sort((a, b) => b.hits - a.hits || a.index - b.index);
    const bestHits = ranked[0]?.hits ?? 0;
    const eligible = topic || titleHits > 0 || summaryHits > 0 || (keywords.length > 1 && bestHits >= 2);
    const score = (topic ? 60 : 0) + titleHits * 12 + summaryHits * 5 + bestHits * 2;
    return { entry, score, eligible, ranked };
  }).filter((item) => item.eligible)
    .sort((a, b) => b.score - a.score || b.entry.date.localeCompare(a.entry.date));
  // A glossary question about one exact term should start with its editorial definition.
  const topical = keywords.length === 1 ? scored.filter((item) => isTopic(question, item.entry.term)) : [];
  const selected = (topical.length ? topical : scored).slice(0, 4);

  return selected.map(({ entry, ranked }) => {
    // Keep the beginning for context and the best matching passages for the answer.
    const chosen = new Set([0, ...ranked.filter((item) => item.hits > 0).slice(0, 5).map((item) => item.index)]);
    let text = "";
    for (const index of [...chosen].sort((a, b) => a - b)) {
      const paragraph = entry.text.split(/\n+/)[index];
      if (!paragraph) continue;
      const remaining = 5500 - text.length;
      if (remaining <= 0) break;
      text += `${paragraph.slice(0, remaining)}\n`;
    }
    return { ...entry, text: text.trim() };
  });
}
