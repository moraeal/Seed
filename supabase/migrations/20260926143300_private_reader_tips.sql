-- Reader tips are private editorial correspondence. Only the server-side service role may read or insert.
create table if not exists public.reader_tips (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('생활 속 문제', '공공기관·예산', '법·정책', '기업·시장', '기사 제안', '기타')),
  title text not null check (char_length(title) between 3 and 160),
  description text not null check (char_length(description) between 20 and 5000),
  evidence_url text check (evidence_url is null or (char_length(evidence_url) <= 500 and evidence_url ~* '^https?://')),
  name text check (name is null or char_length(name) <= 80),
  email text check (email is null or char_length(email) <= 254),
  source_path text not null default '/about',
  ip_hash text,
  status text not null default 'new' check (status in ('new', 'reviewing', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists reader_tips_created_idx on public.reader_tips (created_at desc);
create index if not exists reader_tips_rate_idx on public.reader_tips (ip_hash, created_at desc);
alter table public.reader_tips enable row level security;
revoke all on public.reader_tips from anon, authenticated;
