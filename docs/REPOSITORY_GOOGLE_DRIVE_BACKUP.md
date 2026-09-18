# Encrypted repository backup

The `repository-drive-backup.yml` workflow creates a complete Git bundle, verifies it, encrypts it, and stages the encrypted file for transfer to the Google Drive backup folder owned by `moraeal@gmail.com`.

## Coverage

- Included: Git commit history, branches, tags, source code, site content stored in the repository, and repository-hosted images.
- Not included: Supabase database contents, Supabase Storage object bytes, GitHub repository settings, GitHub Actions secrets, custom-domain DNS settings, or third-party service configuration.
- The existing Supabase workflow covers the database separately.

## Restore points

Before a large change, create an annotated tag from the verified `main` commit and push it:

```bash
git tag -a "restore/YYYYMMDD-HHMM-short-label" -m "Restore point before short-label"
git push origin "restore/YYYYMMDD-HHMM-short-label"
```

Use a normal `git revert` commit for routine rollback. Avoid rewriting shared history.

## Restore outline

1. Download the encrypted repository backup ZIP and the separately retained encryption passphrase.
2. Extract the ZIP, verify the `.gpg` checksum, and decrypt the archive.
3. Verify the inner Git bundle checksum.
4. Clone the bundle into a clean directory.
5. Add a new GitHub repository as the remote and push all required branches and tags.
6. Restore GitHub Actions secrets, Pages settings, custom-domain settings, and external service configuration separately.

Test a full repository restore at least once per quarter.
