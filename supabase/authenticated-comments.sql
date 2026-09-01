-- SEED 인증회원 댓글 정책
-- Supabase SQL Editor에서 한 번 실행하면 됩니다.

alter table public.comments enable row level security;

-- 댓글 읽기는 누구나 가능하게 유지합니다.
grant select on table public.comments to anon, authenticated;

-- 익명 사용자의 직접 댓글 작성 권한은 제거합니다.
revoke insert on table public.comments from anon;

-- 로그인한 사용자에게만 insert 권한을 부여합니다.
grant insert on table public.comments to authenticated;

-- 인증된 사용자 insert 정책
-- 이미 같은 이름의 정책이 있으면 교체합니다.
drop policy if exists "authenticated members can insert comments" on public.comments;
create policy "authenticated members can insert comments"
on public.comments
for insert
to authenticated
with check (auth.uid() is not null);

-- 기존 공개 읽기 정책이 없다면 아래 정책을 사용합니다.
drop policy if exists "public can read visible comments" on public.comments;
create policy "public can read visible comments"
on public.comments
for select
to anon, authenticated
using (is_visible = true);
