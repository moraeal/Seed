drop policy if exists "Authors can update editable drafts" on public.article_drafts;
drop policy if exists "Owner can update all drafts" on public.article_drafts;
create policy "Authors update own drafts and owner updates all"
  on public.article_drafts for update
  to authenticated
  using (
    (select private.has_seed_role(array['owner']))
    or (
      (select private.has_seed_role(array['author']))
      and author_id = (select auth.uid())
      and status in ('draft', 'submitted', 'changes_requested')
    )
  )
  with check (
    (select private.has_seed_role(array['owner']))
    or (
      (select private.has_seed_role(array['author']))
      and author_id = (select auth.uid())
      and status in ('draft', 'submitted')
    )
  );

drop policy if exists "Authors can delete editable drafts" on public.article_drafts;
drop policy if exists "Owner can delete all drafts" on public.article_drafts;
create policy "Authors delete own drafts and owner deletes all"
  on public.article_drafts for delete
  to authenticated
  using (
    (select private.has_seed_role(array['owner']))
    or (
      (select private.has_seed_role(array['author']))
      and author_id = (select auth.uid())
      and status in ('draft', 'changes_requested')
    )
  );

create or replace function private.set_member_seed_role(target_user_id uuid, target_role text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  normalized_role text := nullif(btrim(coalesce(target_role, '')), '');
  current_role text;
begin
  if not public.is_seed_owner() then
    raise exception 'not authorized' using errcode = '42501';
  end if;

  if target_user_id = auth.uid() then
    raise exception 'owner role cannot be changed here' using errcode = '22023';
  end if;

  if normalized_role is not null and normalized_role <> 'author' then
    raise exception 'invalid role' using errcode = '22023';
  end if;

  select u.raw_app_meta_data ->> 'seed_role'
    into current_role
    from auth.users u
   where u.id = target_user_id
     and u.deleted_at is null
     and u.email_confirmed_at is not null
   for update;

  if not found then
    raise exception 'verified member not found' using errcode = 'P0002';
  end if;

  if current_role = 'owner' then
    raise exception 'owner role cannot be changed here' using errcode = '22023';
  end if;

  update auth.users
     set raw_app_meta_data = case
       when normalized_role is null then coalesce(raw_app_meta_data, '{}'::jsonb) - 'seed_role'
       else jsonb_set(coalesce(raw_app_meta_data, '{}'::jsonb), '{seed_role}', to_jsonb(normalized_role), true)
     end,
     updated_at = now()
   where id = target_user_id;

  return coalesce(normalized_role, 'member');
end;
$$;

create or replace function public.set_member_seed_role(target_user_id uuid, target_role text)
returns text
language sql
security invoker
set search_path = pg_catalog
as $$
  select private.set_member_seed_role(target_user_id, target_role);
$$;

revoke all on function private.set_member_seed_role(uuid, text) from public, anon, authenticated;
revoke all on function public.set_member_seed_role(uuid, text) from public, anon, authenticated;
grant execute on function private.set_member_seed_role(uuid, text) to authenticated;
grant execute on function public.set_member_seed_role(uuid, text) to authenticated;
