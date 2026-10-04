-- Owner-reviewed Siya replies. The worker can only draft, never publish.
grant usage on schema private to service_role;
alter table public.comments add column if not exists parent_id uuid references public.comments(id);
alter table public.comments add column if not exists is_siya boolean not null default false;
create unique index if not exists comments_one_siya_reply on public.comments(parent_id) where is_siya;
drop policy if exists "authenticated members can insert comments" on public.comments;
create policy "authenticated members can insert comments" on public.comments for insert to authenticated
with check (user_id = (select auth.uid()) and is_visible and not is_siya and parent_id is null and nickname <> '씨야');

create table if not exists public.comment_reply_queue (
  comment_id uuid primary key references public.comments(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','generating','ready','failed','skipped','posted')),
  draft_body text not null default '',
  edited_body text not null default '' check (char_length(edited_body) <= 800),
  article_title text not null default '',
  article_path text not null default '',
  article_snapshot text not null default '',
  core_concern text not null default '',
  error text not null default '',
  seen_at timestamptz,
  claim_id uuid,
  claimed_at timestamptz,
  attempts integer not null default 0,
  approved_by uuid references auth.users(id),
  reply_id uuid references public.comments(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.comment_reply_queue enable row level security;
revoke all on public.comment_reply_queue from public, anon, authenticated;
grant select on public.comment_reply_queue to authenticated;
grant update (edited_body,seen_at) on public.comment_reply_queue to authenticated;
grant all on public.comment_reply_queue to service_role;
drop policy if exists "owner reads reply queue" on public.comment_reply_queue;
create policy "owner reads reply queue" on public.comment_reply_queue for select to authenticated
using ((select auth.jwt()->'app_metadata'->>'seed_role') = 'owner');
drop policy if exists "owner edits reply queue" on public.comment_reply_queue;
create policy "owner edits reply queue" on public.comment_reply_queue for update to authenticated
using ((select auth.jwt()->'app_metadata'->>'seed_role') = 'owner')
with check ((select auth.jwt()->'app_metadata'->>'seed_role') = 'owner');

-- Private trigger needs definer privileges to create a private queue row for a reader.
create or replace function private.queue_comment_reply() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if not new.is_siya and new.is_visible then
    insert into public.comment_reply_queue(comment_id) values(new.id) on conflict do nothing;
  end if;
  return new;
end; $$;
revoke all on function private.queue_comment_reply() from public,anon,authenticated;
drop trigger if exists queue_comment_reply_after_insert on public.comments;
create trigger queue_comment_reply_after_insert after insert on public.comments
for each row execute function private.queue_comment_reply();
insert into public.comment_reply_queue(comment_id)
select id from public.comments where not is_siya and is_visible on conflict do nothing;

create or replace function public.claim_comment_replies() returns setof public.comment_reply_queue
language sql security invoker set search_path = '' as $$
  update public.comment_reply_queue q set status='generating', claim_id=gen_random_uuid(),
    claimed_at=now(),updated_at=now(),attempts=attempts+1
  where comment_id in (
    select q2.comment_id from public.comment_reply_queue q2 join public.comments c on c.id=q2.comment_id
    where c.is_visible and not c.is_siya and q2.attempts < 3
      and (q2.status='pending' or (q2.status='generating' and q2.claimed_at < now()-interval '10 minutes'))
    order by q2.created_at limit 3 for update of q2 skip locked
  ) returning q.*;
$$;
revoke all on function public.claim_comment_replies() from public,anon,authenticated;
grant execute on function public.claim_comment_replies() to service_role;

create or replace function public.publish_comment_reply(p_comment_id uuid,p_body text,p_owner uuid)
returns uuid language plpgsql security invoker set search_path = '' as $$
declare q public.comment_reply_queue; c public.comments; reply uuid;
begin
  if not exists(select 1 from auth.users where id=p_owner and raw_app_meta_data->>'seed_role'='owner') then
    raise exception 'Owner required';
  end if;
  select * into strict q from public.comment_reply_queue where comment_id=p_comment_id for update;
  if q.status='posted' then return q.reply_id; end if;
  if q.status='generating' then raise exception 'Draft is still generating'; end if;
  if char_length(trim(p_body)) not between 2 and 800 then raise exception 'Reply must be 2–800 characters'; end if;
  select * into strict c from public.comments where id=p_comment_id and is_visible and not is_siya;
  insert into public.comments(post_slug,nickname,body,is_visible,parent_id,is_siya,user_id)
  values(c.post_slug,'씨야',trim(p_body),true,c.id,true,p_owner) returning id into reply;
  update public.comment_reply_queue set status='posted',edited_body=trim(p_body),approved_by=p_owner,
    reply_id=reply,seen_at=coalesce(seen_at,now()),updated_at=now() where comment_id=c.id;
  return reply;
end; $$;
revoke all on function public.publish_comment_reply(uuid,text,uuid) from public,anon,authenticated;
grant execute on function public.publish_comment_reply(uuid,text,uuid) to service_role;

do $$ begin
  if not exists(select 1 from vault.secrets where name='seed_comment_worker_token') then
    perform vault.create_secret(encode(extensions.gen_random_bytes(32),'hex'),'seed_comment_worker_token');
  end if;
end; $$;
create or replace function private.verify_comment_worker_token(candidate text) returns boolean
language sql security definer set search_path = '' as $$
  select exists(select 1 from vault.decrypted_secrets where name='seed_comment_worker_token' and decrypted_secret=candidate);
$$;
revoke all on function private.verify_comment_worker_token(text) from public,anon,authenticated;
create or replace function public.verify_comment_worker_token(candidate text) returns boolean
language sql security invoker set search_path = '' as $$ select private.verify_comment_worker_token(candidate); $$;
revoke all on function public.verify_comment_worker_token(text) from public,anon,authenticated;
grant execute on function private.verify_comment_worker_token(text) to service_role;
grant execute on function public.verify_comment_worker_token(text) to service_role;

-- No token is returned to clients; cron dispatches only when there is pending work.
create or replace function private.dispatch_comment_drafts() returns void
language plpgsql security definer set search_path = '' as $$
begin
  update public.comment_reply_queue set status='failed',error='초안 작업이 중단되었습니다. 다시 생성해주세요.',updated_at=now()
  where status='generating' and attempts >= 3 and claimed_at < now()-interval '10 minutes';
  if exists(select 1 from public.comment_reply_queue where attempts < 3 and
    (status='pending' or (status='generating' and claimed_at < now()-interval '10 minutes'))) then
    perform net.http_post(
      url:='https://wajlmbahjyazkftwaeem.supabase.co/functions/v1/siya-comment-replies',
      headers:=jsonb_build_object('Content-Type','application/json','x-comment-worker-token',
        (select decrypted_secret from vault.decrypted_secrets where name='seed_comment_worker_token' limit 1)),
      body:='{"action":"process"}'::jsonb, timeout_milliseconds:=180000);
  end if;
end; $$;
revoke all on function private.dispatch_comment_drafts() from public,anon,authenticated;
select cron.schedule('seed-comment-drafts','* * * * *','select private.dispatch_comment_drafts()');
