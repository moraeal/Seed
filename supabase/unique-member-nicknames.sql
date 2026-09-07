create or replace function public.normalize_seed_nickname(value text)
returns text
language sql
immutable
as $$
  select lower(regexp_replace(trim(coalesce(value, '')), '[[:space:]]+', ' ', 'g'));
$$;

create table if not exists public.nickname_registry (
  nickname_key text primary key,
  nickname text not null,
  user_id uuid unique references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint nickname_registry_length check (char_length(nickname) between 2 and 30)
);

alter table public.nickname_registry enable row level security;
revoke all on table public.nickname_registry from anon, authenticated;

insert into public.nickname_registry (nickname_key, nickname)
select
  public.normalize_seed_nickname(raw_user_meta_data->>'nickname') as nickname_key,
  min(regexp_replace(trim(raw_user_meta_data->>'nickname'), '[[:space:]]+', ' ', 'g')) as nickname
from auth.users
where char_length(regexp_replace(trim(coalesce(raw_user_meta_data->>'nickname', '')), '[[:space:]]+', ' ', 'g')) between 2 and 30
group by public.normalize_seed_nickname(raw_user_meta_data->>'nickname')
on conflict (nickname_key) do nothing;

create or replace function public.is_nickname_available(candidate text)
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select
    char_length(regexp_replace(trim(coalesce(candidate, '')), '[[:space:]]+', ' ', 'g')) between 2 and 30
    and not exists (
      select 1
      from public.nickname_registry nr
      where nr.nickname_key = public.normalize_seed_nickname(candidate)
    );
$$;

revoke all on function public.is_nickname_available(text) from public;
grant execute on function public.is_nickname_available(text) to anon, authenticated;

create or replace function public.register_auth_user_nickname()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  display_nickname text;
  normalized_key text;
begin
  display_nickname := regexp_replace(trim(coalesce(new.raw_user_meta_data->>'nickname', '')), '[[:space:]]+', ' ', 'g');

  if display_nickname = '' then
    return new;
  end if;

  if char_length(display_nickname) < 2 or char_length(display_nickname) > 30 then
    raise exception 'invalid_nickname' using errcode = '22023';
  end if;

  normalized_key := public.normalize_seed_nickname(display_nickname);

  begin
    insert into public.nickname_registry (nickname_key, nickname, user_id)
    values (normalized_key, display_nickname, new.id);
  exception
    when unique_violation then
      raise exception 'nickname_already_taken' using errcode = '23505';
  end;

  return new;
end;
$$;

drop trigger if exists register_unique_nickname_after_signup on auth.users;
create trigger register_unique_nickname_after_signup
after insert on auth.users
for each row
execute function public.register_auth_user_nickname();
