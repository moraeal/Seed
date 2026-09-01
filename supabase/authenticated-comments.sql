-- SEED 인증회원 댓글 정책
-- 현재 Supabase 프로젝트에 적용된 정책과 동일한 기준입니다.

alter table public.comments add column if not exists user_id uuid references auth.users(id) on delete set null;
create index if not exists comments_user_id_idx on public.comments(user_id);

alter table public.comments enable row level security;

grant select on table public.comments to anon, authenticated;
revoke insert on table public.comments from anon;
grant insert on table public.comments to authenticated;

drop policy if exists "public can submit comments" on public.comments;
drop policy if exists "public can read visible comments" on public.comments;
drop policy if exists "authenticated members can insert comments" on public.comments;

create policy "public can read visible comments"
on public.comments
for select
to anon, authenticated
using (is_visible = true);

create policy "authenticated members can insert comments"
on public.comments
for insert
to authenticated
with check (
  auth.uid() is not null
  and user_id = auth.uid()
  and is_visible = true
  and nickname = coalesce(
    auth.jwt() -> 'user_metadata' ->> 'nickname',
    split_part(auth.jwt() ->> 'email', '@', 1)
  )
);
