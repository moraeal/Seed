-- Enforce nickname uniqueness for Auth metadata updates, including API calls.
-- Old nicknames remain reserved so another member cannot impersonate them.
create or replace function private.register_member_nickname_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  candidate text;
  candidate_key text;
begin
  if (new.raw_user_meta_data->>'nickname') is not distinct from (old.raw_user_meta_data->>'nickname') then
    return new;
  end if;
  candidate := regexp_replace(btrim(coalesce(new.raw_user_meta_data->>'nickname', '')), '[[:space:]]+', ' ', 'g');
  if char_length(candidate) not between 2 and 30 then
    raise exception 'invalid_nickname' using errcode = '22023';
  end if;
  candidate_key := public.normalize_seed_nickname(candidate);
  if exists (select 1 from public.nickname_registry where nickname_key = candidate_key and user_id = new.id) then
    update public.nickname_registry set nickname = candidate where nickname_key = candidate_key and user_id = new.id;
  else
    update public.nickname_registry set user_id = null where user_id = new.id;
    begin
      insert into public.nickname_registry(nickname_key, nickname, user_id) values (candidate_key, candidate, new.id);
    exception when unique_violation then
      raise exception 'nickname_already_taken' using errcode = '23505';
    end;
  end if;
  new.raw_user_meta_data := jsonb_set(new.raw_user_meta_data, '{nickname}', to_jsonb(candidate));
  return new;
end;
$$;
revoke all on function private.register_member_nickname_update() from public, anon, authenticated;
drop trigger if exists register_member_nickname_update on auth.users;
create trigger register_member_nickname_update
before update of raw_user_meta_data on auth.users
for each row execute function private.register_member_nickname_update();
