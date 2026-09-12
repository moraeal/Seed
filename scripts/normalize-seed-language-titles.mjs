import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');
const files = fs.readdirSync(dataDir)
  .filter((name) => /^seedLanguage.*\.ts$/.test(name))
  .map((name) => path.join(dataDir, name));

const articlePattern = /(\bslug:\s*"[^"]+"[\s\S]{0,1200}?\btitle:\s*")([^"]+)(")/g;
const replacements = new Map();
const approvedTitleExceptions = new Set([
  '자유는 방임이 아니라 주체를 세우는 일이다',
]);

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const normalized = source.replace(articlePattern, (full, prefix, title, suffix) => {
    if (approvedTitleExceptions.has(title)) return full;
    if (title.includes('아니라') && title.endsWith('다') && !title.endsWith('말이다')) {
      const next = `${title.slice(0, -1)}라는 말이다`;
      replacements.set(title, next);
      return `${prefix}${next}${suffix}`;
    }
    return full;
  });
  fs.writeFileSync(file, normalized, 'utf8');
}

// Synchronize related-article labels and any other duplicated title references.
for (const file of files) {
  let source = fs.readFileSync(file, 'utf8');
  for (const [before, after] of replacements) {
    source = source.split(before).join(after);
  }
  fs.writeFileSync(file, source, 'utf8');
}

if (replacements.size) {
  console.log('씨앗언어 제목 형식 정규화:');
  for (const [before, after] of replacements) {
    console.log(`- ${before} -> ${after}`);
  }
} else {
  console.log('씨앗언어 제목 형식: 변경 없음');
}
