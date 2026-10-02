-- Isolated, administrator-only chat command bridge. No automatic posting schedule.
begin;
create schema if not exists seed_facebook_chat;
revoke all on schema seed_facebook_chat from public, anon, authenticated, service_role;

create table if not exists public.seed_facebook_chat_auth (
  id text primary key check (id = 'dispatcher'),
  token_hash text not null check (token_hash ~ '^[a-f0-9]{64}$')
);
alter table public.seed_facebook_chat_auth enable row level security;
revoke all on public.seed_facebook_chat_auth from public, anon, authenticated;
grant select on public.seed_facebook_chat_auth to service_role;

create table if not exists public.seed_facebook_chat_jobs (
  id uuid primary key default gen_random_uuid(),
  request_key text unique not null check (length(request_key) between 1 and 200),
  action text not null check (action in ('check', 'create', 'update', 'delete')),
  message text,
  post_id text,
  link text,
  approved boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'processing', 'succeeded', 'failed', 'uncertain')),
  result jsonb,
  network_request_id bigint,
  created_at timestamptz not null default now(),
  started_at timestamptz,
  finished_at timestamptz,
  check (action not in ('create','update') or (message is not null and length(btrim(message)) > 0 and length(message) <= 10000)),
  check (action not in ('update','delete') or (post_id is not null and post_id ~ '^1438854115971733_[0-9]+$')),
  check (link is null or (action = 'create' and link ~ '^https://[^[:space:]]+$'))
);
alter table public.seed_facebook_chat_jobs enable row level security;
revoke all on public.seed_facebook_chat_jobs from public, anon, authenticated;
grant select, update on public.seed_facebook_chat_jobs to service_role;

do $$
begin
  if not exists (select 1 from vault.secrets where name = 'seed_facebook_dispatch_token') then
    perform vault.create_secret(encode(extensions.gen_random_bytes(32), 'hex'), 'seed_facebook_dispatch_token');
  end if;
end $$;
insert into public.seed_facebook_chat_auth (id, token_hash)
select 'dispatcher', encode(extensions.digest(decrypted_secret, 'sha256'), 'hex')
from vault.decrypted_secrets where name = 'seed_facebook_dispatch_token'
on conflict (id) do update set token_hash = excluded.token_hash;

create or replace function seed_facebook_chat.submit(
  p_request_key text, p_action text, p_message text default null,
  p_post_id text default null, p_link text default null, p_approved boolean default false
) returns jsonb language plpgsql security invoker set search_path = '' as $$
declare
  v_job public.seed_facebook_chat_jobs%rowtype;
  v_token text;
  v_network_id bigint;
  v_new boolean;
begin
  if p_approved is distinct from true then raise exception 'Explicit approval required'; end if;
  insert into public.seed_facebook_chat_jobs(request_key,action,message,post_id,link,approved)
  values (p_request_key,p_action,p_message,p_post_id,p_link,true)
  on conflict (request_key) do nothing returning * into v_job;
  v_new := found;
  if not v_new then
    select * into v_job from public.seed_facebook_chat_jobs where request_key = p_request_key;
    if v_job.action is distinct from p_action or v_job.message is distinct from p_message
      or v_job.post_id is distinct from p_post_id or v_job.link is distinct from p_link then
      raise exception 'Request key already used for a different command';
    end if;
    return jsonb_build_object('job_id',v_job.id,'status',v_job.status,'duplicate',true);
  end if;
  select decrypted_secret into strict v_token from vault.decrypted_secrets where name = 'seed_facebook_dispatch_token';
  select net.http_post(
    url := 'https://wajlmbahjyazkftwaeem.supabase.co/functions/v1/facebook-chat-worker',
    body := jsonb_build_object('job_id',v_job.id),
    headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer ' || v_token),
    timeout_milliseconds := 60000
  ) into v_network_id;
  update public.seed_facebook_chat_jobs set network_request_id = v_network_id where id = v_job.id;
  return jsonb_build_object('job_id',v_job.id,'status','pending','duplicate',false);
end $$;
revoke all on function seed_facebook_chat.submit(text,text,text,text,text,boolean) from public, anon, authenticated, service_role;
commit;
