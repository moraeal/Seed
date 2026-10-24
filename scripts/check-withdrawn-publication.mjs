// Fail production builds if a withdrawn editorial article has a crawlable route or link.
// Run after generate-seo: node scripts/check-withdrawn-publication.mjs
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
const root = process.cwd();
const dist = path.join(root, "dist");
const policy = JSON.parse(await readFile(path.join(root,"editorial/withdrawn-slugs.json"),"utf8"));
if(policy.schemaVersion!==1 || !Array.isArray(policy.slugs) || !policy.slugs.length) throw Error("Invalid withdrawn-article registry");
const denied=new Set(policy.slugs);
for(const slug of denied)if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))throw Error("Invalid withdrawn slug: "+slug);
if(!(await stat(path.join(dist,"index.html"))).isFile())throw Error("Production dist/index.html is missing");
const errors=[];
let examined=0;
async function walk(folder){
  for(const entry of await readdir(folder,{withFileTypes:true})){
    const absolute=path.join(folder,entry.name);
    if(entry.isDirectory()){await walk(absolute);continue;}
    if(!entry.isFile() || !/\.(?:html|xml)$/i.test(entry.name))continue;
    examined++;
    const body=await readFile(absolute,"utf8");
    const relative=path.relative(dist,absolute).replaceAll(path.sep,"/");
    for(const slug of denied){
      if(relative.includes(slug) || body.includes(slug))errors.push(relative+" references withdrawn slug "+slug);
    }
  }
}
await walk(dist);
if(errors.length){console.error("WITHDRAWN ARTICLE LEAK:\n"+errors.join("\n"));process.exit(1);}
console.log("PASS: "+denied.size+" withdrawn article(s) absent from "+examined+" generated HTML/XML documents");
