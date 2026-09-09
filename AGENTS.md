# SEED publishing rules

- “대표기사” and “대표이미지” are internal editorial terms. Do not expose them in reader-facing labels, article copy, image captions, alt text, metadata, or emails. Use “5분 요약본 보기” for the deep-read link back to its short article, and “Read the 5-minute summary” in English.
- Deep reads are supplementary website articles, never separate newsletter sends. For paired content, only the standalone short article is email-eligible. Require explicit `newsletterEligible === true` when a future newsletter system selects SEED Language articles; missing flags must not opt content in. Eligibility metadata alone does not schedule or send email.

- Every new publishable news article, civic briefing, column, or commentary must ship with both the Korean original and a polished English edition in the same update.
- English editions must be written for international readers, not produced as literal Korean-to-English substitutions. Preserve facts, qualifications, dates, figures, source labels, image descriptions, and SEED's distinction between verified facts and argument.
- Every independently shareable content page must have its own primary image. The build must expose that image through Open Graph and X metadata so SNS link previews use the content's actual artwork.
- Social previews are generated automatically as 1200x630 JPEG files during the production build. Do not point SNS metadata directly to WebP or SVG source artwork.
- Do not publish when the matching English translation or primary preview image is missing. Run the full production build before release.
- Preserve SEED's long-form depth when a subject needs context, evidence, and argument. Do not shorten a briefing or column merely to chase clicks.
- Make long content easy to enter and scan: open with a concise summary or key sentence, use clear intermediate headings, keep paragraphs visually separated, and maintain generous reading space on desktop and mobile.
- Every item estimated at eight minutes or longer must contain at least two meaningful titled sections and at least two purposeful visuals. Use charts or infographics for numbers and systems, and illustrations or photographs for concepts and human context. Do not add decorative images that carry no editorial meaning.
- Keep the visual hierarchy consistent across Korean and English editions. Translate every summary, section heading, image description, and caption; preserve the same editorial structure rather than delivering a thinner English version.
