# Facebook commands from the connected chat

Page: 씨앗의 소리, Graph API Page ID `1438854115971733`.
The existing `facebook-page-manager` endpoint remains the owner-session API.
The separate `facebook-chat-worker` is callable only with a server-generated dispatch credential.
Facebook tokens stay in Edge Function Secrets. The dispatch credential stays in Vault; neither is returned to chat.

The connected Supabase administrative tool submits a command:

```sql
select seed_facebook_chat.submit(
  p_request_key := 'unique-command-id',
  p_action := 'check',
  p_approved := true
);
```

Actions: `check`, `create`, `update`, `delete`. Create/update require `p_message`.
Update/delete require `p_post_id`, including the Page prefix. Create may include an HTTPS `p_link`.
Use SQL parameters or safely quoted literals for user copy. Always preview new public test wording before publishing.
Submit writes only after the user's instruction authorizes the exact operation and text.

Read only the relevant result:

```sql
select id, action, status, result, created_at, finished_at
from public.seed_facebook_chat_jobs
where request_key = 'unique-command-id';
```

Reuse the same request key when checking an existing command: duplicates never dispatch twice.
Pending/processing/uncertain are not success. If a request times out or returns uncertain, inspect the Page and recorded results before any retry.
Never expose Vault contents, request headers, service-role keys, Facebook tokens, or raw upstream errors.
Anonymous and authenticated site members cannot submit, read, claim or edit chat jobs. Administrative Supabase access is required in each chat using this bridge.

No recurring schedule is enabled by this bridge. Article selection, recurring posting times and ongoing posting approval require a separate editorial policy.
The current Facebook token expires on December 1, 2026; replace it in Secrets before expiry.

Recovery: disable `facebook-chat-worker` to stop execution. Preserve job records when reconciling uncertain outcomes. Remove these isolated objects only after no pending or processing writes remain.
