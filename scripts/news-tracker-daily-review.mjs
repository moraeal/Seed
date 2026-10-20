#!/usr/bin/env node
// DISCOVERY ONLY: Headlines from RSS are unverified editorial leads, never facts to publish.
import { readFile, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const TRACKERS = [
  ["france-protests-fiscal-crisis-2026", "프랑스 시위·재정위기", "franceProtestsTracker.ts", "프랑스 시위 파리 집회 긴축 예산 재정"],
  ["korea-us-intelligence-sharing-tracker-2026", "한미 정보공유 제한", "koreaUsIntelligenceTracker.ts", "한미 정보 공유 제한 정동영 강경화 합참"],
  ["banking-privacy-ai-hacking-tracker-2026", "은행 개인정보 유출", "bankingPrivacyTracker.ts", "신한은행 개인정보 유출 해킹 금감원 피해 보상"],
  ["dmz-mine-blast-2026", "DMZ 지뢰폭발", "dmzMineBlastTracker.ts", "DMZ 북한 지뢰 폭발 제거 국방부"],
  ["north-korean-pows-protection-tracker", "북한군 포로 보호", "northKoreanPowsProtectionTracker.ts", "북한군 포로 한국행 보호 정착 우크라이나"],
  ["supreme-court-renomination-tracker-2026", "대법관 재제청 갈등", "supremeCourtRenominationTracker.ts", "손봉기 대법관 재제청 조희대 임명동의"],
  ["public-institution-reform-109", "공공기관 109개 개편", "publicInstitutionReformTracker.ts", "공공기관 109개 통합 발전공기업 LH 코레일"],
  ["olympic-park-election-protest-tracker", "올림픽공원 선거 관련 농성", "olympicParkElectionProtestTracker.ts", "올림픽공원 선거 투표지 부족 선관위 특검 농성"],
  ["military-academy-integration-tracker", "사관학교 통합", "militaryAcademyIntegrationTracker.ts", "국군사관학교 통합 국방부 국회 육군 해군 공군"],
  ["democratic-party-nuclear-policy-reversal-tracker", "원전정책 변화", "nuclearPolicyReversalTracker.ts", "신규 원전 공론화위원회 전력수급기본계획"],
  ["farmland-census-disposal-orders-tracker", "농지 전수조사", "farmlandCensusTracker.ts", "농지 전수조사 특별조치법 농지은행 농림축산식품부"],
  ["prosecution-service-abolition-tracker", "검찰청 폐지·수사권 이전", "prosecutionServiceAbolitionTracker.ts", "공소청 중대범죄수사청 수사 이관 보완수사"],
  ["yeosu-world-island-expo-tracker", "여수세계섬박람회", "yeosuIslandExpoTracker.ts", "여수세계섬박람회 예산 관람객 수익 정산"],
  ["kim-seung-won-confirmation-hearing", "김승원 후보자 후속", "kimSeungWonHearingWatch.ts", "김승원 제넨셀 도당 회계 수사 법무부 장관 후보"],
];

// Each case must match at least one event-specific term in the *headline*.
// This deliberately favors precision over recall; editor can still search manually.
const TOPIC = new Map([
  ["france-protests-fiscal-crisis-2026", /프랑스.{0,18}(시위|파업|집회|예산|긴축|재정|부채)|파리.{0,12}(시위|집회)|프랑스.{0,8}통행금지|프랑스.{0,8}국민의회/i],
  ["korea-us-intelligence-sharing-tracker-2026", /한미.{0,12}정보|정보.{0,8}공유|정동영|강경화|한미동맹/i],
  ["banking-privacy-ai-hacking-tracker-2026", /신한은행|국민은행|하나은행|은행장|은행.{0,10}해킹|고객정보|개인정보.{0,8}유출|금융권.{0,8}해킹/i],
  ["dmz-mine-blast-2026", /DMZ|지뢰|비무장지대|25사단/i],
  ["north-korean-pows-protection-tracker", /북한군.{0,8}포로|포로.{0,10}한국|쿠르스크.{0,10}포로/i],
  ["supreme-court-renomination-tracker-2026", /손봉기|대법관.{0,10}제청|재제청|조희대.{0,15}(제청|후보|임명)/i],
  ["public-institution-reform-109", /공공기관.{0,10}(109|감축|개편|통합)|발전공기업.{0,8}통합|코레일.{0,8}자회사|LH.{0,8}(분리|개편)/i],
  ["olympic-park-election-protest-tracker", /올림픽공원.{0,12}(시위|농성|선거)|선관위.{0,10}특검|투표지.{0,8}(부족|검증)|재선거.{0,8}요구/i],
  ["military-academy-integration-tracker", /사관학교.{0,12}(통합|폐교|국감|국군)|국군사관학교|육해공.{0,10}사관학교/i],
  ["democratic-party-nuclear-policy-reversal-tracker", /원전|원자력.{0,10}(발전|정책)|전력수급기본계획|공론화.{0,8}(위원|원전)/i],
  ["farmland-census-disposal-orders-tracker", /농지.{0,10}(전수조사|처분|은행|조사)|농지은행|농지법.{0,8}개정/i],
  ["prosecution-service-abolition-tracker", /검찰청.{0,8}폐지|공소청|중수청|중대범죄수사청|보완수사/i],
  ["yeosu-world-island-expo-tracker", /여수.{0,10}섬박람회|여수세계섬박람회|섬박람회.{0,8}(관람|예산|행사|실적|정산)/i],
  ["kim-seung-won-confirmation-hearing", /김승원|제넨셀.{0,12}(수사|재판|항소)|도당.{0,10}회계.{0,8}의혹/i],
]);

function decodeXml(value) {
  return String(value || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&(?:amp|lt|gt|quot|apos|nbsp);/g, (x) => ({
      "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
      "&apos;": "'", "&nbsp;": " ",
    }[x])).trim();
}
function xmlField(xml, field) {
  const m = xml.match(new RegExp("<" + field + "(?:\\s[^>]*)?>([\\s\\S]*?)</" + field + ">", "i"));
  return decodeXml(m?.[1] || "");
}
function parseRss(xml) {
  return [...String(xml).matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)]
    .map((m) => {
      const b = m[1], title = xmlField(b, "title"), link = xmlField(b, "link");
      return { title, link, source: xmlField(b, "source"), published: new Date(xmlField(b, "pubDate")) };
    }).filter((x) => x.title && /^https:\/\/news\.google\.com\//i.test(x.link) && !Number.isNaN(x.published.getTime()));
}
const KST_DAY = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
const ageDays = (date, today) => Math.round((Date.parse(today + "T00:00:00Z") - Date.parse(date + "T00:00:00Z")) / 86400000);
// Only verified event dates count as a change: ignore citation dates and pending steps.
function arraySection(content, key) {
  const marker = new RegExp("(?:^|[\\n \\t,])(?:[\"']?" + key + "[\"']?)\\s*:\\s*\\[", "m");
  const found = marker.exec(content);
  if (!found) return null;
  const start = found.index + found[0].lastIndexOf("[");
  let depth = 0, quote = null, escaped = false;
  for (let i = start; i < content.length; i++) {
    const c = content[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === "'" || c === '"' || c.charCodeAt(0) === 96) { quote = c; continue; }
    if (c === "[") depth++;
    if (c === "]") {
      depth--;
      if (depth === 0) return content.slice(start + 1, i);
    }
  }
  throw Error("Unclosed date array: " + key);
}
function topLevelObjects(content) {
  if (!content) return [];
  const found = [];
  let depth = 0, quote = null, escaped = false, start = -1;
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === "'" || c === '"' || c.charCodeAt(0) === 96) { quote = c; continue; }
    if (c === "{") { if (!depth) start = i; depth++; }
    else if (c === "}") {
      depth--;
      if (depth === 0 && start !== -1) {
        found.push(content.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return found;
}
function latestEventDate(source, today) {
  const events = topLevelObjects(arraySection(source, "timeline"))
    .filter(entry => !/["']?status["']?\s*:\s*["']pending["']/.test(entry));
  const changes = topLevelObjects(arraySection(source, "keyChanges"));
  const dates = [...events, ...changes]
    .map(entry => entry.match(/["']?date["']?\s*:\s*["'](\d{4}-\d\d-\d\d)["']/)?.[1])
    .filter(date => date && date <= today && !Number.isNaN(Date.parse(date)));
  return dates.sort().at(-1) ?? null;
}
async function metadataFor(slug, file, today) {
  const content = await readFile("src/data/" + file, "utf8");
  let i = content.indexOf('slug: "' + slug + '"');
  if (i < 0) i = content.indexOf('"slug": "' + slug + '"');
  if (i < 0) throw Error("Slug not found: " + slug);
  const record = content.slice(i);
  const modifiedAt = record.match(/["']?updatedAt["']?\s*:\s*["'](\d{4}-\d\d-\d\d)["']/)?.[1];
  if (!modifiedAt) throw Error("Missing updatedAt: " + slug);
  const lastEvent = latestEventDate(record, today);
  if (!lastEvent) throw Error("Missing verified dated event: " + slug);
  return { modifiedAt, lastEvent };
}
const IGNORED = /(한겨레|오마이뉴스|문화방송|(^|\s|-)MBC(\s|$)|ohmynews|hani\.co\.kr|Calgary Roughnecks|바카라|토토|카지노|룰렛|슬롯머신|도박|스포츠베팅)/i;
const safe = (s) => String(s).replace(/\|/g, "\\|").replace(/[\r\n]/g, " ").replace(/\]/g, "\\]").slice(0, 160);
async function rssLeads(query, slug) {
  const url = "https://news.google.com/rss/search?q=" + encodeURIComponent(query + " when:3d") + "&hl=ko&gl=KR&ceid=KR:ko";
  const res = await fetch(url, { headers: { "User-Agent": "SeedVoiceTrackerReview/1.0 (+https://seedvoice.kr)" }, signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw Error("HTTP " + res.status);
  const xml = await res.text();
  if (!xml.includes("<rss")) throw Error("Invalid RSS response");
  const now = Date.now();
  return parseRss(xml).filter((x) => {
    const d = x.published.getTime();
    return d > now - 3 * 86400000 && d <= now + 3600000 && !IGNORED.test(x.source) && !IGNORED.test(x.title) && TOPIC.get(slug)?.test(x.title);
  }).sort((a, b) => b.published - a.published).slice(0, 4);
}
async function main() {
  if (process.argv.includes("--self-test")) {
    const xml = '<rss><item><title><![CDATA[제목 & 확인]]></title><link>https://news.google.com/rss/articles/a</link><pubDate>Mon, 19 Oct 2026 02:00:00 GMT</pubDate><source>연합뉴스</source></item></rss>';
    assert.equal(parseRss(xml)[0]?.title, "제목 & 확인");
    assert.equal(ageDays("2026-10-19", "2026-10-20"), 1);
    assert.equal(TRACKERS.length, 14);
    assert.equal(TOPIC.size, TRACKERS.length);
    assert.equal(TOPIC.get("dmz-mine-blast-2026").test("DMZ 지뢰 추가 제거"), true);
    assert.equal(TOPIC.get("dmz-mine-blast-2026").test("로또 광고"), false);
    assert.equal(IGNORED.test("Calgary Roughnecks"), true);
    const pows = await metadataFor("north-korean-pows-protection-tracker", "northKoreanPowsProtectionTracker.ts", KST_DAY());
    assert.ok(pows.lastEvent <= pows.modifiedAt);
    const france = await metadataFor("france-protests-fiscal-crisis-2026", "franceProtestsTracker.ts", KST_DAY());
    assert.ok(france.lastEvent <= france.modifiedAt);
    assert.equal(new Set(TRACKERS.map(x => x[0])).size, TRACKERS.length);
    console.log("News tracker self-test passed");
    return;
  }
  const today = KST_DAY(), results = [];
  // A small batch size makes provider failures visible without burst traffic.
  for (let i = 0; i < TRACKERS.length; i += 3) {
    const batch = await Promise.all(TRACKERS.slice(i, i + 3).map(async ([slug, label, file, query]) => {
      let modifiedAt = "불명", lastEvent = "불명", leads = [], errors = [];
      try { ({ modifiedAt, lastEvent } = await metadataFor(slug, file, today)); }
      catch (e) { errors.push("파일: " + e.message); }
      try { leads = await rssLeads(query, slug); } catch (e) { errors.push("RSS: " + e.message); }
      return { slug, label, modifiedAt, lastEvent, leads, errors };
    }));
    results.push(...batch);
  }
  const lines = [
    "# 씨앗의 소리 뉴스트래커 일일 점검 — " + today, "",
    "> **이 문서는 자동으로 수집된 뉴스 후보 목록입니다. 제목만으로 사건 발생이나 사실관계를 확정하지 않습니다. 검증과 편집 승인 전에는 기존 기사를 자동 변경하거나 게시하지 않습니다.**", "",
    "| 사건 | 마지막 사건 변화일 | 기사 수정일 | 변화 후 경과 | 뉴스 후보 | 상태 |", "|---|---|---|---:|---:|---|",
    ...results.map((r) => "| [" + r.label + "](https://seedvoice.kr/monitoring/" + r.slug + ") | " + r.lastEvent + " | " + r.modifiedAt + " | " + (r.lastEvent === "불명" ? "?" : ageDays(r.lastEvent, today) + "일") + " | " + r.leads.length + " | " + (r.errors.length ? "수집/메타데이터 확인 필요" : ageDays(r.lastEvent, today) >= 14 ? "장기 미갱신·추가 확인" : "수집 완료") + " |"),
    "", "## 사건별 검토 후보 (최근 3일)", "",
  ];
  for (const r of results) {
    lines.push("### " + r.label, "");
    for (const error of r.errors) lines.push("⚠️ 오류: " + safe(error));
    if (!r.leads.length) lines.push("기사 후보 없음. **새 사건이 발생하지 않았다는 확인은 아닙니다.**");
    for (const n of r.leads) lines.push("- **" + safe(n.title) + "** — " + safe(n.source) + ", " + n.published.toISOString().slice(0, 10) + " · [뉴스 검색 연결](" + n.link + ")");
    lines.push("");
  }
  lines.push("## 편집 검수", "", "1. 원문 기사·발행일·사건 날짜 확인", "2. 독립 언론 또는 1차 공적 기록과 교차 검증", "3. 사실·주장·예정 절차·반론 구분", "4. 기존 타임라인을 먼저 수정한 뒤 이미지와 링크 확인", "5. GitHub Pages 배포 및 모바일 표시 검증", "",
    "수집 오류는 새 보도 없음과 다릅니다. 실패한 사건은 별도 수동 확인이 필요합니다.", "");
  if (!process.argv[2]) throw Error("Report output path required");
  await writeFile(process.argv[2], lines.join("\n"), "utf8");
  const failed = results.filter((r) => r.errors.length).length;
  console.log("Trackers: " + results.length + ", candidate headlines: " + results.reduce((n, r) => n + r.leads.length, 0) + ", failed: " + failed);
  if (failed === results.length) process.exitCode = 1;
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
