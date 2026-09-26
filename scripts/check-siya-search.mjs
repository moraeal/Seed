import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { asksForLatestLegislation, asksToSummarizeCurrentArticle, findCurrentArticle, searchArticles } from "../supabase/functions/siya-article-guide/search.mjs";

const { entries } = JSON.parse(await readFile(new URL("../public/siya-articles.json", import.meta.url)));
const cases = [
  ["민주란 무엇인가요?", "/seed-language/democracy-not-a-king"],
  ["민주에 대해 알려줘", "/seed-language/democracy-not-a-king"],
  ["씨앗이 말하는 민주란?", "/seed-language/democracy-not-a-king"],
  ["시민에 대해 알려줘", "/seed-language/citizen-as-seed"],
  ["시민은 누구인가요?", "/seed-language/citizen-as-seed"],
  ["씨앗의 소리가 말하는 시민은 무엇인가요?", "/seed-language/citizen-as-seed"],
  ["상속세 과세 기준이 왜 문제인가요?", "/briefings/inheritance-tax-frozen-allowance-middle-class"],
  ["여수세계섬박람회 최신 변화는?", "/monitoring/yeosu-world-island-expo-tracker"],
  ["공공기관 통폐합 현황은?", "/monitoring/public-institution-reform-109"],
  ["검찰청 폐지 이슈를 알려줘", "/monitoring/prosecution-service-abolition-tracker"],
  ["사관학교 통합을 왜 감시하나요?", "/monitoring/military-academy-integration-tracker"],
  ["농지 전수조사 결과가 뭔가요?", "/monitoring/farmland-census-disposal-orders-tracker"],
  ["자살예방 예산은 어떻게 쓰이나요?", "/monitoring/korea-foundation-for-suicide-prevention"],
  ["코인 과세에 관한 씨앗 논평은?", "/monitoring/tax/commentary/virtual-asset-tax-prove-the-gain"],
];
for (const [question, path] of cases) {
  const matches = searchArticles(question, entries);
  assert(matches.some((entry) => entry.path === path), `${question}: expected ${path}; got ${matches.map((entry) => entry.path).join(", ")}`);
  assert(matches.every((entry) => entry.text.length <= 5500), "retrieved excerpt exceeds budget");
}
for (const question of ["최신 입법뉴스 알려줘", "오늘 나온 법안은?", "이번 주 입법감시 법안", "latest legislation"]) {
  assert(asksForLatestLegislation(question), `latest-legislation route missed: ${question}`);
}
for (const question of ["고양이 사료는 무엇인가요?", "양자컴퓨터 칩을 추천해줘"]) {
  assert.equal(searchArticles(question, entries).length, 0, `unrelated question matched: ${question}`);
}
assert(asksToSummarizeCurrentArticle("이 기사를 요약해줘"));
assert(asksToSummarizeCurrentArticle("Summarize this article"));
assert.equal(asksToSummarizeCurrentArticle("오늘의 뉴스를 알려줘"), false);
const sample = entries.find((entry) => entry.path.startsWith("/briefings/"));
assert(sample && findCurrentArticle(sample.path, entries)?.title === sample.title, "current article must resolve by its exact URL");
assert.equal(findCurrentArticle("/", entries), null, "home page must not select an unrelated article");
assert.equal(findCurrentArticle("https://example.com/briefings/other", entries), null, "external URL must not select an article");
console.log(`Siya search checks passed: ${cases.length} article questions, 4 live-legislation questions, 2 unrelated questions`);
