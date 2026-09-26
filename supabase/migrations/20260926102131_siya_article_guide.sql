-- The reader explicitly saves a question only after the guide cannot answer it.
create table if not exists public.siya_reader_questions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question text not null check (char_length(question) between 2 and 500),
  language text not null check (language in ('ko', 'en')),
  status text not null default 'new' check (status in ('new', 'reviewing', 'considered', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists siya_reader_questions_created_idx on public.siya_reader_questions (created_at desc);
alter table public.siya_reader_questions enable row level security;
revoke all on public.siya_reader_questions from anon, authenticated;
grant all on public.siya_reader_questions to service_role;

create table if not exists public.siya_guide_requests (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists siya_guide_requests_user_created_idx on public.siya_guide_requests (user_id, created_at desc);
alter table public.siya_guide_requests enable row level security;
revoke all on public.siya_guide_requests from anon, authenticated;
grant all on public.siya_guide_requests to service_role;

create or replace function public.siya_allow_request(p_user_id uuid)
returns boolean language plpgsql security invoker set search_path = public as $$
begin
  perform pg_advisory_xact_lock(hashtext(p_user_id::text));
  if (select count(*) from public.siya_guide_requests
      where user_id = p_user_id and created_at > now() - interval '24 hours') >= 30 then
    return false;
  end if;
  insert into public.siya_guide_requests (user_id) values (p_user_id);
  return true;
end;
$$;
revoke all on function public.siya_allow_request(uuid) from public, anon, authenticated;
grant execute on function public.siya_allow_request(uuid) to service_role;
