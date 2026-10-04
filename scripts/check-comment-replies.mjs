import assert from "node:assert/strict";
import { createServer } from "vite";
const server=await createServer({optimizeDeps:{noDiscovery:true,entries:[]},server:{middlewareMode:true},appType:"custom"});
try {
  const {threadComments,parseCommentBody}=await server.ssrLoadModule("/src/lib/comments.ts");
  const comments=[
    {id:"reply",parent_id:"parent",created_at:"2026-10-04",is_siya:true},
    {id:"newer",created_at:"2026-10-03"},
    {id:"parent",created_at:"2026-09-30"},
  ];
  assert.deepEqual(threadComments(comments).map(c=>c.id),["newer","parent","reply"],"A new reply stays with its original comment, below newer independent discussion");
  assert.deepEqual(threadComments([{id:"orphan",parent_id:"missing"}]).map(c=>c.id),["orphan"],"Replies remain readable when the parent is unavailable");
  assert.equal(parseCommentBody("[[continue:abc|reader|previous]]\nbody").text,"body","Legacy discussion continuation stays compatible");
  console.log("Comment threading and legacy continuation checks passed.");
} finally {await server.close();}
