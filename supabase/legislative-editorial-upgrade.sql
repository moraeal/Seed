-- Editorial and future subscription fields for the SEED VOICE legislative monitor.
-- This upgrade is additive: existing bills, review states and publication dates are preserved.

alter table public.legislative_bills
  add column if not exists current_stage text not null default '발의',
  add column if not exists is_featured boolean not null default false,
  add column if not exists featured_order integer,
  add column if not exists featured_reason_ko text,
  add column if not exists featured_reason_en text,
  add column if not exists observation_keywords text[] not null default '{}',
  add column if not exists public_summary_ko text,
  add column if not exists public_summary_en text,
  add column if not exists seed_view_ko text,
  add column if not exists seed_view_en text,
  add column if not exists related_content jsonb not null default '[]'::jsonb,
  add column if not exists allow_bookmark boolean not null default true,
  add column if not exists notification_status text not null default 'disabled',
  add column if not exists important_change_status text not null default 'none',
  add column if not exists important_change_note_ko text,
  add column if not exists important_change_note_en text,
  add column if not exists editorial_updated_at timestamptz;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_featured_order_check') then
    alter table public.legislative_bills add constraint legislative_bills_featured_order_check check (featured_order is null or featured_order between 1 and 99);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_notification_status_check') then
    alter table public.legislative_bills add constraint legislative_bills_notification_status_check check (notification_status in ('disabled', 'available', 'active'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_important_change_status_check') then
    alter table public.legislative_bills add constraint legislative_bills_important_change_status_check check (important_change_status in ('none', 'draft', 'approved'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'legislative_bills_related_content_array_check') then
    alter table public.legislative_bills add constraint legislative_bills_related_content_array_check check (jsonb_typeof(related_content) = 'array');
  end if;
end $$;

create index if not exists legislative_bills_featured_order_idx
  on public.legislative_bills (featured_order, published_at desc)
  where is_featured = true and review_state = 'published' and published_at is not null;

create schema if not exists private;

create or replace function private.track_legislative_bill_change()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.current_stage is distinct from old.current_stage then
    insert into public.legislative_bill_events (bill_id, event_key, event_type, event_date, title, description, source_url)
    values (
      new.bill_id, 'stage:' || gen_random_uuid()::text, 'stage_change', current_date,
      '법안 단계 변경: ' || coalesce(old.current_stage, '미확인') || ' → ' || coalesce(new.current_stage, '미확인'),
      case when new.source_status is not null then '국회 공개 상태: ' || new.source_status else null end,
      new.detail_url
    );
  end if;

  if new.source_status is distinct from old.source_status then
    insert into public.legislative_bill_events (bill_id, event_key, event_type, event_date, title, description, source_url)
    values (
      new.bill_id, 'source-status:' || gen_random_uuid()::text, 'source_status', current_date,
      '국회 공개 상태 변경',
      coalesce(old.source_status, '미확인') || ' → ' || coalesce(new.source_status, '미확인'),
      new.detail_url
    );
  end if;

  if new.important_change_status = 'approved'
     and (
       old.important_change_status is distinct from new.important_change_status
       or old.important_change_note_ko is distinct from new.important_change_note_ko
     ) then
    insert into public.legislative_bill_events (bill_id, event_key, event_type, event_date, title, description, source_url)
    values (
      new.bill_id, 'important-change:' || gen_random_uuid()::text, 'approved_change', current_date,
      '중요 변경사항 승인', new.important_change_note_ko, new.detail_url
    );
  end if;

  return new;
end;
$$;

drop trigger if exists legislative_bill_change_history on public.legislative_bills;
create trigger legislative_bill_change_history
after update of current_stage, source_status, important_change_status, important_change_note_ko
on public.legislative_bills
for each row execute function private.track_legislative_bill_change();
