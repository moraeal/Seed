import type { AuthSession } from "../auth";
import type { CommentRecord } from "./comments";
const url=(import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/,"");
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";
const headers=(session:AuthSession)=>({apikey:key,Authorization:`Bearer ${session.access_token}`,"Content-Type":"application/json"});
export type ReplyJob={comment_id:string;status:"pending"|"generating"|"ready"|"failed"|"skipped"|"posted";draft_body:string;edited_body:string;article_title:string;article_path:string;article_snapshot:string;core_concern:string;error:string;seen_at:string|null;updated_at:string;comments:CommentRecord};
async function read(r:Response){if(!r.ok){const data=await r.json().catch(()=>({}));throw new Error(data.error || data.message || "댓글 관리에 연결하지 못했습니다.");}return r.status===204?null:r.json();}
export async function listReplyJobs(session:AuthSession,offset=0){return read(await fetch(`${url}/rest/v1/comment_reply_queue?select=*,comments!comment_reply_queue_comment_id_fkey(id,post_slug,nickname,body,created_at,parent_id,is_siya)&order=created_at.desc&limit=100&offset=${offset}`,{headers:headers(session)})) as Promise<ReplyJob[]>;}
export async function unreadCommentCount(session:AuthSession){const r=await fetch(`${url}/rest/v1/comment_reply_queue?seen_at=is.null&select=comment_id&limit=1`,{headers:{...headers(session),Prefer:"count=exact"}});await read(r);return Number(r.headers.get("Content-Range")?.split("/")[1] || 0);}
export async function saveReplyJob(session:AuthSession,id:string,update:{edited_body?:string;seen_at?:string}){return read(await fetch(`${url}/rest/v1/comment_reply_queue?comment_id=eq.${id}`,{method:"PATCH",headers:headers(session),body:JSON.stringify(update)}));}
export async function replyAction(session:AuthSession,commentId:string,action:"publish"|"retry"|"skip",body?:string){return read(await fetch(`${url}/functions/v1/siya-comment-replies`,{method:"POST",headers:headers(session),body:JSON.stringify({action,commentId,body})}));}
