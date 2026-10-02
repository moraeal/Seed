-- Keep actual homepage selections, independently of publication/update dates.
create table public.homepage_featured_history (
  content_path text primary key check (content_path ~ '^/((columns|news|briefings|seed-language)|monitoring(/(legislation|tax)(/commentary)?)?)/[a-z0-9][a-z0-9-]*$'),
  featured_at timestamptz not null default clock_timestamp()
);
alter table public.homepage_featured_history enable row level security;
grant select on public.homepage_featured_history to anon, authenticated;
grant insert, update on public.homepage_featured_history to authenticated;
grant all on public.homepage_featured_history to service_role;
create policy "Public feature history is readable"
on public.homepage_featured_history for select to anon, authenticated using (true);
create policy "Owner can record feature history"
on public.homepage_featured_history for insert to authenticated
with check (((select auth.jwt())->'app_metadata'->>'seed_role') = 'owner');
create policy "Owner can update feature history"
on public.homepage_featured_history for update to authenticated
using (((select auth.jwt())->'app_metadata'->>'seed_role') = 'owner')
with check (((select auth.jwt())->'app_metadata'->>'seed_role') = 'owner');
create index homepage_featured_history_order on public.homepage_featured_history (featured_at desc, content_path);

create function public.record_homepage_feature_selection()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if TG_OP = 'UPDATE' then
    if new.content_path = old.content_path then return new; end if;
  end if;
  insert into public.homepage_featured_history (content_path, featured_at)
  values (new.content_path, clock_timestamp())
  on conflict (content_path) do update set featured_at = excluded.featured_at;
  return new;
end;
$$;
revoke all on function public.record_homepage_feature_selection() from public, anon, authenticated;
create trigger record_homepage_feature_selection
after insert or update of content_path on public.homepage_featured_content
for each row execute function public.record_homepage_feature_selection();

-- Older manual selections were overwritten; seed only the verified current one.
insert into public.homepage_featured_history (content_path, featured_at)
select content_path, updated_at from public.homepage_featured_content;
