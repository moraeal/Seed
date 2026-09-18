# Supabase encrypted Google Drive backup

The `supabase-drive-backup.yml` workflow creates a Supabase-aware database dump, encrypts it before upload, and stores only encrypted files in the dedicated Google Drive folder.

## Coverage

- Included: database roles, schema, data, RLS policies, functions, triggers, and Auth database records.
- Not included: Supabase Storage object bytes, Edge Function secrets, OAuth provider settings, SMTP settings, DNS, or GitHub-hosted site assets.
- Site source, articles, and site images remain protected by GitHub history.

## Required GitHub Actions secrets

Add these under **Settings > Secrets and variables > Actions**. Never paste them into an issue, commit, workflow file, or chat.

1. `SUPABASE_DB_URL`: the Supabase Session Pooler connection string from the project **Connect** panel, including the database password.
2. `BACKUP_ENCRYPTION_PASSPHRASE`: a long random passphrase kept separately in a password manager. Losing it makes the backups unreadable.
3. `RCLONE_CONFIG_GDRIVE_TOKEN`: the token JSON produced by authorizing the `drive` backend with rclone for the target Google account.

Until all three secrets exist, scheduled runs exit successfully without creating or uploading a backup.

## Retention

- Daily encrypted backups: 14 days.
- First-day-of-month encrypted backups: approximately 12 months.
- The workflow uploads a SHA-256 checksum alongside every encrypted archive and verifies the Drive upload.

## Restore outline

1. Download the `.gpg` archive and matching `.sha256` file from Google Drive.
2. Verify the encrypted archive checksum with `sha256sum -c`.
3. Decrypt with GnuPG using the separately stored passphrase.
4. Extract `roles.sql`, `schema.sql`, and `data.sql`.
5. Restore into a new Supabase project in that order and verify table counts, Auth users, extensions, and application login before changing production traffic.

Run a test restore at least once per quarter. A backup is not considered reliable until a restore has been verified.
