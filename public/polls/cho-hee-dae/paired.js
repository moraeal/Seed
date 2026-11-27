const cutoff=document.querySelector('.datebox time').dateTime;
const directPolls=polls.filter(p=>p.kind==='직접 찬반' && p.published<=cutoff).sort((a,b)=>a.published.localeCompare(b.published));
const directAgencies=[...new Set(directPolls.map(p=>p.org))].sort((a,b)=>a.localeCompare(b,'ko'));
const stamp = d => Date.parse(d+'T00:00:00Z');
const svgNS = 'http://www.w3.org/2000/svg';
function mark(tag,attrs,txt) {
  const e=document.createElementNS(svgNS,tag);
  for(const [k,v] of Object.entries(attrs)) e.setAttribute(k,v);
  if(txt!=null) e.textContent=txt;
  return e;
}
// A series always uses the same pollster and interview mode.
const inkColors=['#12644c','#76549e','#b55216','#2568a6','#a43863','#466226','#8d4933','#5862a7','#007581','#605c53'];
const shapes=['●','◆','▲','■','✚','▼','★','⬟','✖','◀'];
const agencyStyles=new Map(directAgencies.map((name,i)=>[name,{ink:inkColors[i%inkColors.length],shape:shapes[i%shapes.length]}]));
let highlighted='';
const pairButtons=byId('orgLegend');
function chooseAgency(name) {
  highlighted=highlighted===name?'':name;
  renderPair();
}
function buildKey(name) {
  const b=el('button','org-choice');
  b.type='button';
  if(name){
    const style=agencyStyles.get(name), symbol=el('span','key-mark',style.shape);
    symbol.style.color=style.ink;symbol.setAttribute('aria-hidden','true');
    b.append(symbol,el('span','',shortName(directPolls.find(p=>p.org===name))));
  }else b.textContent='전체 기관';
  b.dataset.agency=name;
  b.onclick=()=>chooseAgency(name);
  pairButtons.append(b);
}
buildKey('');
directAgencies.forEach(buildKey);
function grouped(records) {
  const groups=new Map();
  for(const p of records) {
    const key=p.org+'|'+p.method;
    if(!groups.has(key)) groups.set(key,[]);
    groups.get(key).push(p);
  }
  return [...groups.values()];
}

function drawPairFigure(box, index, records, from, to) {
  const width=Math.max(230,Math.floor(box.getBoundingClientRect().width));
  const left=32,right=width<320?86:103,top=22,base=202,height=238;
  const x=d=>left+(stamp(d)-from)/(to-from)*(width-left-right);
  const allValues=records.flatMap(p=>p.values.slice(0,2));
  const low=Math.max(0,Math.floor(Math.min(...allValues,30)/10)*10-10);
  const high=Math.min(100,Math.ceil(Math.max(...allValues,50)/10)*10);
  const y=v=>base-(v-low)/(high-low)*(base-top);
  const label=index===0?'찬성':'반대';
  const svg=mark('svg',{width:'100%',height,viewBox:'0 0 '+width+' '+height,role:'group','aria-label':label+' 응답 비율, 조사기관별 변화'});
  for(let tick=low;tick<=high;tick+=10) {
    svg.append(mark('line',{x1:left,x2:width-right,y1:y(tick),y2:y(tick),stroke:tick===50?'#97aaa0':'#e1e7e2','stroke-dasharray':tick===50?'3 3':'none'}),mark('text',{x:left-5,y:y(tick)+4,'text-anchor':'end',class:'axis-label'},tick+'%'));
  }
  // Keep the two endpoint labels visible at every width. Intermediate ticks
  // follow calendar months and share exactly the same positions in both charts.
  const startDate=new Date(from);
  const endDate=new Date(to);
  const innerWidth=width-left-right;
  function dateTick(pos, text, anchor) {
    svg.append(mark('line',{x1:pos,x2:pos,y1:base,y2:base+4,stroke:'#a4afa6'}),
      mark('text',{x:pos,y:base+19,'text-anchor':anchor,class:'axis-label'},text));
  }
  const endpoint=d=>d.toISOString().slice(2,10).replaceAll('-','.');
  dateTick(left,endpoint(startDate),'start');
  let prior=left+55;
  for(let m=Date.UTC(startDate.getUTCFullYear(),startDate.getUTCMonth()+1,1);m<to;){
    const date=new Date(m),pos=left+(m-from)/(to-from)*innerWidth;
    if(pos-prior>=42 && width-right-pos>=75){
      dateTick(pos,(date.getUTCFullYear()+'').slice(2)+'.'+String(date.getUTCMonth()+1).padStart(2,'0'),'middle');
      prior=pos;
    }
    m=Date.UTC(date.getUTCFullYear(),date.getUTCMonth()+1,1);
  }
  dateTick(width-right,endpoint(endDate),'end');
  const groups=grouped(records).sort((a,b)=>Number(a[0].org===highlighted)-Number(b[0].org===highlighted));
  for(const group of groups) {
    const org=group[0].org,style=agencyStyles.get(org);
    const faded=Boolean(highlighted && highlighted!==org);
    const layer=mark('g',{opacity:faded ? 0.13 : 1});
    if(group.length>1){
      // Dashes indicate a comparison with wording not verified identical at both dates.
      for(let i=1;i<group.length;i++){
        const a=group[i-1],b=group[i];
        const exact=a.series && a.series===b.series;
        layer.append(mark('line',{x1:x(a.published),y1:y(a.values[index]),x2:x(b.published),y2:y(b.values[index]),stroke:style.ink,'stroke-width':highlighted===org?2.8:1.8,'stroke-dasharray':exact?'none':'5 4'}));
      }
    }
    for(const p of group){
      const cx=x(p.published),cy=y(p.values[index]);
      const desc=shortName(p)+' · '+p.published+' 발표 · '+shortMode(p)+' · '+label+' '+pct(p.values[index]);
      const dot=mark('g',{role:'button',tabindex:faded?-1:0,'aria-label':desc,class:'pair-point'});
      dot.append(mark('title',{},desc),mark('circle',{cx,cy,r:10,fill:'transparent'}),mark('text',{x:cx,y:cy,fill:style.ink,'text-anchor':'middle',dy:'.35em',class:'pair-glyph'},style.shape));
      dot.onclick=()=>openPoll(p);
      dot.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPoll(p);}};
      layer.append(dot);
    }
    svg.append(layer);
  }
  // Give repeated surveys direct labels. Space adjacent endpoints in the margin.
  const lastMarks=groups.filter(group=>highlighted ? group[0].org===highlighted : group.length>1)
    .map(group=>group.at(-1)).sort((a,b)=>b.values[index]-a.values[index]);
  const spacing=17, lastY=base-1;
  let previous=top-spacing;
  const positions=lastMarks.map(p=>{
    previous=Math.max(y(p.values[index]),previous+spacing);
    return previous;
  });
  for(let i=positions.length-1;i>=0;i--){
    positions[i]=Math.min(positions[i],i===positions.length-1 ? lastY : positions[i+1]-spacing);
  }
  lastMarks.forEach((p,i)=>{
    const org=p.org,ink=agencyStyles.get(org).ink, modeCount=groups.filter(g=>g[0].org===org).length;
    const name=shortName(p).replace('전국지표조사','NBS').replace('코리아정보리서치','코리아정보');
    const suffix=modeCount>1?(p.method.includes('면접')?' 면접':' ARS'):'';
    const value=p.values[index];
    const lx=width-right+4,ly=positions[i],cx=x(p.published),cy=y(value);
    svg.append(mark('path',{d:'M '+(cx+4)+' '+cy+' L '+(lx-6)+' '+ly,stroke:'#78857c',opacity:.45,fill:'none','stroke-width':.85}),
      mark('text',{x:lx,y:ly+4,fill:ink,class:'end-label'},name+suffix+' '+value));
  });
  box.replaceChildren(svg);
}
function renderPair(){
  const records=directPolls;
  const firstDay=records[0].published;
  const from=stamp(firstDay),to=stamp(cutoff);
  byId('chartsub').textContent='수록된 첫 조사 발표일 '+firstDay.replaceAll('-','.')+' – '+cutoff.replaceAll('-','.')+' · '+directAgencies.length+'개 기관·공동조사 · '+records.length+'건';
  pairButtons.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.agency===highlighted)));
  drawPairFigure(byId('yesPlot'),0,records,from,to);
  drawPairFigure(byId('noPlot'),1,records,from,to);
}
// A text alternative also gives keyboard and touch readers access to overlapping points.
for(const p of [...directPolls].reverse()){
  const b=el('button','source-poll',p.published+' · '+shortName(p)+' · '+shortMode(p)+' · 찬성 '+pct(p.values[0])+' / 반대 '+pct(p.values[1]));
  b.onclick=()=>openPoll(p);
  byId('sources').append(b);
}
let priorWidth=-1;
new ResizeObserver(entries=>{
  const width=entries[0].contentRect.width;
  if(width && width!==priorWidth){priorWidth=width;renderPair();}
}).observe(byId('yesPlot'));
renderPair();
