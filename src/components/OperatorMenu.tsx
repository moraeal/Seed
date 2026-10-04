import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { unreadCommentCount } from "../lib/commentDesk";

export function CommentInboxBadge(){
  const {session,user}=useAuth();const [count,setCount]=useState(0);
  useEffect(()=>{if(!session || user?.app_metadata?.seed_role!=="owner")return;let alive=true;
    const refresh=()=>unreadCommentCount(session).then(n=>{if(alive)setCount(n);}).catch(()=>{});
    void refresh();const timer=window.setInterval(refresh,30000);window.addEventListener("focus",refresh);
    return()=>{alive=false;window.clearInterval(timer);window.removeEventListener("focus",refresh);};
  },[session?.access_token,user?.app_metadata?.seed_role]);
  return count>0?<Link to="/insights/comments" className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700" aria-live="polite">새 댓글 {count}</Link>:null;
}
const groups=[
  {ko:"댓글·공론장",en:"Discussion",items:[["/insights/comments","댓글 확인·씨야 답글 승인","Comments & replies"],["/forum","공개 공론장","Public forum"]]},
  {ko:"기사·편집",en:"Editorial",items:[["/insights/editorial","편집부 원고함","Editorial desk"],["/writer","필자 집필실","Writers' room"],["/insights/featured","메인기사 관리","Homepage stories"],["/insights/legislation","입법감시 관리","Legislation"],["/insights/tax","세금감시 관리","Tax watch"]]},
  {ko:"회원·구독",en:"Members",items:[["/insights/members","회원 관리","Members"],["/insights/subscribers","이메일 구독자","Subscribers"]]},
  {ko:"통계·자료",en:"Analytics & assets",items:[["/insights","운영 현황","Dashboard"],["/insights/content","콘텐츠 통계","Content analytics"],["/insights/traffic","유입 분석","Traffic"],["/insights/images","이미지 보관함","Image archive"]]},
];
export default function OperatorMenu(){const {user}=useAuth();const {pathname}=useLocation();const {language}=useLanguage();const ko=language==="ko";
  if(user?.app_metadata?.seed_role!=="owner" || !pathname.startsWith("/insights"))return null;
  return <div className="container-page pt-6"><details key={pathname} open={pathname==="/insights"} className="rounded-xl border border-green-deep/15 bg-white p-4 sm:p-5"><summary className="cursor-pointer font-extrabold text-navy">{ko?"운영자 메뉴":"Operator menu"}<span className="ml-3 inline-flex"><CommentInboxBadge/></span></summary><nav className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label={ko?"운영자 메뉴":"Operator navigation"}>{groups.map(g=><section key={g.ko}><h2 className="border-b border-green-deep/10 pb-2 text-xs font-bold text-green-mid">{ko?g.ko:g.en}</h2><div className="mt-2 space-y-1">{g.items.map(([path,label,en])=><Link key={path} to={path} aria-current={pathname===path?"page":undefined} className={`block rounded-md px-3 py-2 text-sm font-bold ${pathname===path?"bg-green-deep text-white":"text-navy hover:bg-green-pale"}`}>{ko?label:en}</Link>)}</div></section>)}</nav></details></div>;
}
