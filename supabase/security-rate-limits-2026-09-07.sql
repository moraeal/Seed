-- SEED VOICE public RPC abuse protection
-- Applied to production on 2026-09-07.
-- Raw client IP addresses are never stored. Request identities are SHA-256 hashed.
-- Limits:
--   nickname lookup: 60 requests / 5 minutes / request identity
--   newsletter signup: 20 requests / 10 minutes / request identity
--   newsletter signup: 3 requests / 60 minutes / email address
--   content views: 120 requests / 5 minutes / request identity

create schema if not exists private;
revoke all on schema private from public;

create table if not exists private.rpc_rate_limits (
  action text not null,
  fingerprint text not null,
  window_started_at timestamptz not null,
  request_count integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (action, fingerprint, window_started_at)
);

revoke all on table private.rpc_rate_limits from public, anon, authenticated;

create index if not exists rpc_rate_limits_updated_at_idx
  on private.rpc_rate_limits (updated_at);

create or replace function private.enforce_rpc_rate_limit(
  p_action text,
  p_subject text,
  p_limit integer,
  p_window_seconds integer
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_headers jsonb := coalesce(nullif(current_setting('request.headers', true), '')::jsonb, '{}'::jsonb);
  v_ip text := nullif(btrim(split_part(coalesce(v_headers ->> 'x-forwarded-for', ''), ',', 1)), '');
  v_user_agent text := nullif(left(btrim(coalesce(v_headers ->> 'user-agent', '')), 240), '');
  v_uid text := coalesce(auth.uid()::text, 'anon');
  v_identity text;
  v_fingerprint text;
  v_window_started_at timestamptz;
  v_count integer;
begin
  if p_limit < 1 or p_window_seconds < 1 then
    raise exception 'invalid rate-limit configuration';
  end if;

  if p_subject is not null and btrim(p_subject) <> '' then
    v_identity := 'subject|' || lower(btrim(p_subject));
  else
    v_identity := 'request|' || coalesce(v_ip, 'no-ip') || '|' || coalesce(v_user_agent, 'no-ua') || '|' || v_uid;
  end if;

  v_fingerprint := encode(extensions.digest(v_identity || '|seedvoice-rate-limit-v1', 'sha256'), 'hex');
  v_window_started_at := to_timestamp(
    floor(extract(epoch from clock_timestamp()) / p_window_seconds) * p_window_seconds
  );

  insert into private.rpc_rate_limits (action, fingerprint, window_started_at, request_count, updated_at)
  values (p_action, v_fingerprint, v_window_started_at, 1, now())
  on conflict (action, fingerprint, window_started_at)
  do update set
    request_count = private.rpc_rate_limits.request_count + 1,
    updated_at = excluded.updated_at
  returning request_count into v_count;

  if v_count > p_limit then
    raise sqlstate 'PGRST' using
      message = json_build_object('message', 'Too many requests. Please try again shortly.')::text,
      detail = json_build_object('status', 429, 'status_text', 'Too Many Requests')::text;
  end if;

  -- Keep the small counter table bounded without requiring pg_cron.
  if random() < 0.01 then
    delete from private.rpc_rate_limits where updated_at < now() - interval '2 days';
  end if;
end;
$$;

revoke all on function private.enforce_rpc_rate_limit(text, text, integer, integer)
  from public, anon, authenticated;

create or replace function public.is_nickname_available(candidate text)
returns boolean
language plpgsql
volatile
security definer
set search_path = ''
as $$
begin
  perform private.enforce_rpc_rate_limit('nickname_lookup', null, 60, 300);

  return
    char_length(regexp_replace(trim(coalesce(candidate, '')), '[[:space:]]+', ' ', 'g')) between 2 and 30
    and not exists (
      select 1
      from public.nickname_registry nr
      where nr.nickname_key = public.normalize_seed_nickname(candidate)
    );
end;
$$;

revoke all on function public.is_nickname_available(text) from public, anon, authenticated;
grant execute on function public.is_nickname_available(text) to anon, authenticated;

create or replace function public.subscribe_newsletter(
  p_email text,
  p_language text default 'ko',
  p_source_path text default '/'
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_email text := lower(btrim(coalesce(p_email, '')));
  v_language text := case when p_language = 'en' then 'en' else 'ko' end;
  v_source_path text := left(coalesce(nullif(p_source_path, ''), '/'), 300);
begin
  perform private.enforce_rpc_rate_limit('newsletter_ip', null, 20, 600);
  perform private.enforce_rpc_rate_limit('newsletter_email', v_email, 3, 3600);

  if char_length(v_email) < 5 or char_length(v_email) > 254
    or v_email !~* '^[A-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$'
  then
    raise exception 'invalid email address' using errcode = '22023';
  end if;

  if left(v_source_path, 1) <> '/' then
    v_source_path := '/';
  end if;

  insert into public.newsletter_subscribers (email, language, source_path, status, consented_at, updated_at)
  values (v_email, v_language, v_source_path, 'active', now(), now())
  on conflict (email) do update set
    language = excluded.language,
    source_path = excluded.source_path,
    status = 'active',
    consented_at = now(),
    updated_at = now();
end;
$$;

revoke all on function public.subscribe_newsletter(text, text, text) from public, anon, authenticated;
grant execute on function public.subscribe_newsletter(text, text, text) to anon, authenticated;

create or replace function public.record_content_view(
  p_path text,
  p_language text default 'ko',
  p_referrer_host text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_path text := left(coalesce(nullif(p_path, ''), '/'), 300);
  v_language text := case when p_language = 'en' then 'en' else 'ko' end;
  v_referrer text := nullif(left(btrim(coalesce(p_referrer_host, '')), 200), '');
begin
  perform private.enforce_rpc_rate_limit('content_view', null, 120, 300);

  if left(v_path, 1) <> '/' then
    v_path := '/';
  end if;

  insert into public.content_page_views (page_path, language, referrer_host)
  values (v_path, v_language, v_referrer);
end;
$$;

revoke all on function public.record_content_view(text, text, text) from public, anon, authenticated;
grant execute on function public.record_content_view(text, text, text) to anon, authenticated;
