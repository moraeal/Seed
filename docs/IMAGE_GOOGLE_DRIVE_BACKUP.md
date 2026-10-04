# Public image disaster recovery

Drive destination: https://drive.google.com/drive/folders/132VuRdS_RWmz-T45br3osk2x7kUFgNGN

Includes every image under `public/images` plus all image objects in public Supabase buckets. It excludes private uploads, third-party image links, and unpublished originals stored elsewhere.

`Public image backup snapshot` creates a complete GitHub transfer snapshot daily at 04:25 Asia/Seoul (GitHub may delay execution). A connected-app transfer checks at 09:00 Asia/Seoul. The GitHub snapshot is temporary (7 days); Drive receives only images whose SHA-256 differs from the last verified receipt. A complete snapshot lets the next successful transfer catch up even after a missed day. Deleted source paths are recorded, never removed from Drive.

## Transfer procedure

1. Download the latest successful snapshot artifact and verify its published artifact digest. Extract only safe relative paths into a new temporary directory.
2. Find the newest verified `seedvoice-images-*-receipt.json` in the destination folder. Use paginated listing when required. Validate all referenced part IDs and sizes. If no verified receipt exists, make a full baseline.
3. Run `python3 image-backup.py delta --snapshot SNAPSHOT --output NEW_OUTPUT --previous PREVIOUS_RECEIPT`. Omit `--previous` for the baseline. Each ZIP part is under 25 MiB.
4. Upload missing parts, verifying sizes and downloadable checksums. Reuse existing matching parts after interruptions; never overwrite image history. Reject mismatched duplicates.
5. Only after all parts pass verification, add their Drive IDs and verification time to the receipt and set `verified_drive_upload=true`. Upload the receipt last and verify readback. If no bytes changed, a new receipt still records the check and deletions.
6. Failure must leave the previous verified receipt as the trusted state. Never advertise an unverified receipt as a successful backup. No automatic deletions are enabled.

## Restore

Read the selected receipt and walk `parent_created_at` back to the baseline. Download referenced parts, validate each ZIP SHA-256 and each image SHA-256. Build a map from original path to latest bytes through the selected date. Keep older versions intact. For repository images restore paths under `public/images`; for Storage images restore the named bucket and object path. Compare the final path/hash map with the selected complete manifest before changing production.

Keep the baseline and every delta required by a retained restore point. Never expire a parent delta independently. Quarterly, restore a sample to a temporary directory and verify hashes. Encrypted database and repository archives are separate and must never be decrypted by the transfer task.
