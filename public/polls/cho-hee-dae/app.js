const byId = id => document.getElementById(id);
const pct = n => n + '%';
const range = p => p.start.slice(5).replace('-', '.') + '–' + (p.start.slice(0,7) === p.end.slice(0,7) ? p.end.slice(8) : p.end.slice(5).replace('-', '.'));
const shortMode = p => p.method.includes('면접') ? '전화면접' : p.method.startsWith('유무선') ? '유무선 ARS' : '무선 ARS';
const shortName = p => p.org.includes('KSOI') ? 'KSOI' : p.org.includes('NBS') ? '전국지표조사' : p.org;
const monthName = m => m.slice(0,4) + '년 ' + Number(m.slice(5)) + '월';
function el(tag, cls, label) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (label !== undefined) node.textContent = label;
  return node;
}
function link(label, href) {
  const a = el('a', '', label);
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
}
function metadata(p) {
  const meta = el('div','metadata');
  const question = el('p');
  question.append(el('strong','',p.questionLabel ? p.questionLabel+'　' : p.quoted ? '질문 원문　' : '문항 요지　'),p.q);
  meta.append(question);
  const dl = el('dl');
  const fields=[['결과 발표일',p.published],['조사 기간',p.start+' ~ '+p.end],['조사 대상','전국 만 18세 이상'],['응답자',p.n.toLocaleString('ko-KR')+'명'],['조사 방식',p.method],['의뢰·주관',p.client]];
  if(p.rate != null) fields.push(['응답률',pct(p.rate)]);
  if(p.err != null) fields.push(['표본오차','95% 신뢰수준에서 ±'+p.err.toFixed(1)+'%p']);
  fields.forEach(([label,value])=>{const pair=el('div');pair.append(el('dt','',label),el('dd','',value));dl.append(pair);});
  meta.append(dl);
  if(p.note) meta.append(el('p','',p.note));
  const sourceLabel = url => url.includes('cdn.imweb.me') ? '질문과 응답 원본 이미지' : url.includes('nesdc.go.kr') ? '중앙여심위 등록 자료' : url.includes('flowerresearch') || url.includes('nbsurvey.kr') || url.includes('ksoi.org') || url.includes('gallup.co.kr') ? (url.includes('fileDownload') || url.includes('.pdf') ? '조사표 PDF' : '조사기관 자료') : url.includes('.pdf') ? '조사 결과 PDF' : '결과 보도';
  meta.append(link(sourceLabel(p.url),p.url));
  if(p.extra) meta.append(link(sourceLabel(p.extra),p.extra));
  return meta;
}
function openPoll(p) {
  byId('matrixDetailTitle').textContent=p.org+' · '+shortMode(p);
  const values=el('div','detail-values');
  p.values.forEach((v,i)=>{
    const item=el('div','value-'+i);
    item.append(el('span','',p.labels[i]),el('b','',pct(v)));
    values.append(item);
  });
  const body=byId('matrixDetailBody');
  body.replaceChildren(el('p','detail-period',p.start+' ~ '+p.end),values,metadata(p));
  byId('matrixDetail').showModal();
}

byId('closeDetail').onclick=()=>byId('matrixDetail').close();
