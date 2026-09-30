-- Social accounts receive a SEED nickname before the existing registry trigger runs.
-- Existing users and email/password registrations are unchanged.
create or replace function private.prepare_social_member_nickname()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
declare
  candidate text;
begin
  if coalesce(new.raw_app_meta_data ->> 'provider', '') not in ('google', 'kakao') then
    return new;
  end if;
  candidate := '씨앗' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 24);
  new.raw_user_meta_data := coalesce(new.raw_user_meta_data, '{}'::jsonb)
    || jsonb_build_object('nickname', candidate, 'language', 'ko');
  return new;
end;
$$;
revoke all on function private.prepare_social_member_nickname() from public, anon, authenticated;
drop trigger if exists prepare_social_member_nickname on auth.users;
create trigger prepare_social_member_nickname
before insert on auth.users
for each row execute function private.prepare_social_member_nickname();
