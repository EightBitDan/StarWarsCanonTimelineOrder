---
name: timeline-dates
description: Update date labels and date metadata in Star Wars Mainline Canon Timeline Order and its SWCTO viewer snapshot while enforcing the user's strict date syntax.
---

# Timeline dates

Apply when changing dates in StarWarsCanonTimelineOrder or SWCTO-viewer. Read the current data and relevant research before choosing dates.

## Required date_label grammar

Only the following shapes are allowed, substituting nonnegative integer years:

```text
10 BBY
10 ABY
~10 BBY
~10 ABY
10~11 BBY
10~11 ABY
~10-11 BBY
~10-11 ABY
0 BBY - 0 ABY
```

Use literal ASCII `~`, hyphen `-`, and ordinary spaces. No backslash belongs in the stored value. No en dash, nonbreaking space, `c.`, prose, parenthetical qualifiers, or other cross-era form is permitted. This is the user's explicit format requirement.

- Single supported year: `10 BBY` / `10 ABY`, certainty `exact`.
- Approximate/provisional year: `~10 BBY` / `~10 ABY`, certainty `approximate`.
- Bounded range: `10~11 ABY`, certainty `range`. BBY endpoints run from larger to smaller: `19~18 BBY`.
- Approximate range: `~68-58 BBY`, certainty `approximate`.
- Preserve the special `0 BBY - 0 ABY` representation when appropriate.

Keep numeric start/end fields and eras consistent with the label. A single-year label has equal populated endpoints. A range records chronologically earlier/later endpoints. The label's syntax describes the numerical placement; reliability and evidence are separate.

For open-ended or unresolved dates, retain a defensible provisional year with a leading tilde when supported by the existing editorial placement. State the actual lower bound, unknown year, relative-order constraint and inference in `notes`. Never describe the provisional year as confirmed. If no defensible estimate or bounds exist, obtain clarification instead of inventing a year or adding an unsupported label format.

For Resolve, `~17 BBY` is a provisional estimate inherited from its curated placement after Maul, not an independently established year. Notes must preserve the 19 BBY prologue and the official after-Chapter-7 constraint. For later Bad Batch entries, `~18 BBY` is an approximate placement; notes retain the during-or-after-18 evidence limitation.

## Synchronization and verification

Preserve stable IDs and unaffected viewing order. Date-only edits do not authorize reordering. If order changes are requested, renumber consecutively and retain IDs.

Update formatted JSON, lite JSON, CSV, Excel and the viewer's `timeline-source.json` together, then rebuild the browser bundle. Use the spreadsheet skill for Excel editing. If the original workbook is locked, preserve it and provide a corrected replacement, explicitly identifying which file could not be overwritten. Use the latest corrected workbook as the baseline, not a stale locked copy.

Validate every label against:

```regex
^(?:~?[0-9]+ (?:BBY|ABY)|[0-9]+~[0-9]+ (?:BBY|ABY)|~[0-9]+-[0-9]+ (?:BBY|ABY)|0 BBY - 0 ABY)$
```

Also verify endpoint chronology, certainty and matching export values; a regex alone does not prove the date is correct. Run the viewer build and existing checks. Preserve uncertainty and source qualifications in notes and document materially changed conventions in the project README.
