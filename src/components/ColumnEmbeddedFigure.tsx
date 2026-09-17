import type { SeedColumn } from "../data/columns";

type Figure = NonNullable<SeedColumn["embeddedFigures"]>[number];

const birthDefectsA: [string, number][] = [
  ["Sudan",82.0],["Saudi Arabia",81.3],["Benin",77.9],["Burkina Faso",77.0],["Occupied Palestinian Territory",76.6],["United Arab Emirates",75.9],["Tajikistan",75.2],["Iraq",75.2],["Kuwait",74.9],["Afghanistan",74.9],["Oman",74.8],["Syria",74.8],["Pakistan",74.3],["Nigeria",73.5],["Kyrgyzstan",73.5],["Qatar",73.4],["Bahrain",73.4],["Jordan",73.3],["Libya",73.1],["Tunisia",73.0],["Morocco",72.7],["Yemen",72.3],["Guinea",72.1],["Congo",71.7],["DR Congo",71.7],["Angola",71.5],["Gabon",71.5],["Sierra Leone",71.3],["Djibouti",70.8],["Laos",67.5],["Algeria",66.9],["Ghana",66.6],["Equatorial Guinea",65.9],["Egypt",65.3],["Liberia",64.9],["Cambodia",64.5],["Iran",64.5],["Niger",64.4],["India",64.3],["Azerbaijan",63.1],["Lebanon",63.0],["Togo",63.0],["Côte d’Ivoire",62.7],["São Tomé and Príncipe",62.5],["Gambia",62.5],["Sri Lanka",62.2],["Turkey",62.0],["Mali",61.4],["Guinea-Bissau",61.4],["Senegal",61.4],["Bahamas",61.2],["Uganda",60.9],["Maldives",60.8],
];

const birthDefectsB: [string, number][] = [
  ["Tuvalu",52.1],["Solomon Islands",52.1],["Lithuania",52.0],["Liechtenstein",51.9],["Japan",51.7],["Luxembourg",51.7],["Iceland",51.6],["Andorra",51.6],["Costa Rica",51.5],["Niue",51.5],["Micronesia",51.5],["Monaco",51.4],["Palau",51.3],["Kiribati",51.3],["Cook Islands",51.3],["Bulgaria",51.3],["Nauru",51.2],["Fiji",51.2],["China",51.2],["Latvia",51.1],["Estonia",51.0],["Slovakia",50.7],["Croatia",50.4],["Hungary",48.9],["Israel",48.5],["Netherlands",48.0],["Portugal",47.9],["United States",47.8],["Cuba",47.2],["New Zealand",46.7],["Denmark",46.5],["Slovenia",46.3],["Norway",45.6],["Canada",45.5],["Sweden",45.1],["Czech Republic",44.9],["Belgium",44.6],["Germany",43.8],["United Kingdom",43.8],["Finland",43.8],["Spain",43.4],["Italy",43.2],["Russian Federation",42.9],["Switzerland",42.5],["Australia",41.7],["Austria",41.6],["France",39.7],
];

function Caption({ figure }: { figure: Figure }) {
  return <figcaption className="border-t border-green-deep/10 px-5 py-4 text-sm leading-6 text-charcoal/65"><strong className="text-navy">{figure.caption}</strong><span className="mt-1 block text-xs text-charcoal/45">{figure.credit}</span></figcaption>;
}

function FlightDoseTable({ ko }: { ko: boolean }) {
  const rows = [["일본","Japan","6.2"],["중국","China","7.9"],["동남아시아","Southeast Asia","15.2"],["호주","Australia","19.0"],["중앙아시아","Central Asia","35.6"],["유럽","Europe","41.6"],["북미","North America","60.6"]];
  return <div className="overflow-x-auto p-5 sm:p-7"><table className="w-full border-collapse text-center text-sm sm:text-base"><thead><tr className="border-y-2 border-green-deep bg-ivory text-navy"><th className="px-4 py-3">{ko ? "행선국" : "Destination"}</th><th className="px-4 py-3">{ko ? "노선선량(µSv)" : "Route dose (µSv)"}</th></tr></thead><tbody>{rows.map(([kr,en,value]) => <tr key={kr} className="border-b border-green-deep/15"><td className="px-4 py-3 font-semibold text-charcoal/75">{ko ? kr : en}</td><td className="px-4 py-3 tabular-nums text-charcoal/75">{value}</td></tr>)}</tbody></table><p className="mt-3 text-xs text-charcoal/50">{ko ? "출처: 한국원자력안전기술원, 2009, 우리나라의 방사선환경" : "Source: Korea Institute of Nuclear Safety, 2009, Radiation Environment in Korea"}</p></div>;
}

function BirthDefectsChart({ ko }: { ko: boolean }) {
  const panel = (data: [string, number][], key: string) => <div className="space-y-1.5" key={key}>{data.map(([country,value]) => <div key={country} className="grid grid-cols-[minmax(8.5rem,1fr)_3fr_2.8rem] items-center gap-2 text-[11px] sm:text-xs"><span className="truncate text-right text-charcoal/65" title={country}>{country}</span><span className="h-3 bg-green-deep/10"><span className="block h-full bg-green-mid" style={{ width: `${value / 90 * 100}%` }} /></span><span className="tabular-nums text-charcoal/55">{value.toFixed(1)}</span></div>)}</div>;
  return <div className="p-4 sm:p-6"><div className="mb-5 flex items-end justify-between gap-4 border-b-2 border-navy pb-3"><h3 className="font-bold text-navy">{ko ? "출생 1,000명당 출생결함" : "Birth defects per 1,000 live births"}</h3><span className="text-xs text-charcoal/45">{ko ? "단위: 명" : "people"}</span></div><div className="grid gap-x-8 gap-y-2 lg:grid-cols-2">{panel(birthDefectsA,"a")}{panel(birthDefectsB,"b")}</div></div>;
}

const energyPoints = [
  ["미국","United States",50,7.0,38,"#D9425F"],["캐나다","Canada",40.5,7.3,17,"#D9425F"],["러시아","Russia",22.5,5.1,28,"#5F9FB7"],["한국","South Korea",29,5.2,20,"#A6B86A"],["호주","Australia",41.5,5.5,16,"#8A4F8E"],["일본","Japan",34.3,3.6,28,"#A6B86A"],["독일","Germany",41,3.8,23,"#5F9FB7"],["EU28","EU28",34.5,3.0,46,"#5F9FB7"],["이탈리아","Italy",32,2.7,17,"#5F9FB7"],["중국","China",8,2.6,50,"#A6B86A"],["인도","India",5,0.6,44,"#A6B86A"],["브라질","Brazil",13,1.6,23,"#D9425F"],["튀르키예","Turkey",16,1.5,19,"#D9425F"],
] as const;

function EnergyGdpChart({ ko }: { ko: boolean }) {
  const x = (v:number) => 58 + v / 65 * 760;
  const y = (v:number) => 410 - v / 8 * 340;
  return <div className="p-3 sm:p-6"><svg viewBox="0 0 900 500" role="img" aria-label={ko ? "1인당 GDP와 1인당 에너지 사용량의 관계" : "Relationship between GDP and energy use per capita"} className="h-auto w-full bg-white"><g stroke="#D7DDD7" strokeWidth="1">{[0,1,2,3,4,5,6,7,8].map(v=><line key={`y${v}`} x1="58" x2="830" y1={y(v)} y2={y(v)}/>)}{[0,10,20,30,40,50,60].map(v=><line key={`x${v}`} y1="70" y2="410" x1={x(v)} x2={x(v)}/>)}</g><g stroke="#233746" strokeWidth="2"><line x1="58" x2="830" y1="410" y2="410"/><line x1="58" x2="58" y1="70" y2="410"/></g><line x1="58" x2="830" y1={y(1.8)} y2={y(1.8)} stroke="#D9425F" strokeWidth="3" strokeDasharray="5 5"/><text x="520" y={y(1.8)+24} fill="#D9425F" fontSize="15">{ko ? "세계 1인당 평균 에너지 사용량" : "World average energy use per capita"}</text>{energyPoints.map(([kr,en,xv,yv,r,c])=><g key={en}><circle cx={x(xv)} cy={y(yv)} r={r} fill={c} fillOpacity=".82" stroke="white" strokeWidth="2"/><text x={x(xv)+r+5} y={y(yv)-2} fontSize="13" fill="#172F43">{ko?kr:en}</text></g>)}<text x="440" y="474" textAnchor="middle" fontSize="17" fill="#233746">{ko ? "1인당 GDP (2011년 USD PPP)" : "GDP per capita (2011 USD PPP)"}</text><text x="18" y="250" transform="rotate(-90 18 250)" textAnchor="middle" fontSize="17" fill="#233746">{ko ? "1인당 에너지 사용량(석유환산톤)" : "Energy use per capita (tonnes of oil equivalent)"}</text></svg></div>;
}

export default function ColumnEmbeddedFigure({ figure, ko }: { figure: Figure; ko: boolean }) {
  return <figure className="my-12 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]">
    {figure.kind === "flight-dose-table" && <FlightDoseTable ko={ko} />}
    {figure.kind === "birth-defects-chart" && <BirthDefectsChart ko={ko} />}
    {figure.kind === "energy-gdp-chart" && <EnergyGdpChart ko={ko} />}
    <Caption figure={figure} />
  </figure>;
}
