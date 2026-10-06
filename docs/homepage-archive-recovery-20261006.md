# Homepage article archive recovery — 2026-10-06

The old `/news` archive read only twelve operator-selected lead stories, with four recent cards and eight earlier articles. This recovery also includes published articles previously introduced in the homepage's other desks.

Reviewed 771 source revisions affecting homepage content or layout, rendering the historical Home component and extracting its article links. 748 revisions rendered successfully; fourteen transient revisions could not render (thirteen syntax errors and one missing auth provider). Subsequent valid revisions supply the article evidence; broken intermediate revisions were not treated as publication evidence. The current homepage was checked again after the concurrent inheritance-tax article publication.

`src/data/recoveredHomepageHistory.json` contains 157 unique, currently available article routes. Each retains a source commit and the first observed homepage introduction time. Source commit times are reconstructed introduction dates, not analytics or exact historical deployment timestamps. A branch-only introduction is assigned to the first merge into main. Removed articles and section navigation links are excluded.

The runtime merges these records with `homepage_featured_history`. An actual operator selection timestamp takes precedence for the same route, including later reselection. Routine edits do not move an archived article. Candidate resolution preserves current Korean and English titles, images, and public availability. The homepage carousel remains capped at eight and excludes upper placements; `/news` exposes the complete sorted archive through recent cards and paginated earlier articles, with a total count. Static search-engine links use the same archive.

Do not fill missing history with all category members. Future historical recoveries must append evidence-backed records while preserving existing introduction dates and operator selection times.
