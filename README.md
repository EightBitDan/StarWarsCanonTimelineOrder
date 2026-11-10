# Star Wars Mainline Canon Timeline Order

A curated watch order for 397 television episodes and 12 films. Follow `timeline_order` from 1 to 409. Episodes from the same season can appear on either side of a film, and multiple entries can share the same in-universe year.

## Files

| Format | Contents |
| --- | --- |
| [CSV](star-wars-mainline-canon-timeline-order.csv) | UTF-8, with one header row and one record per entry. |
| [JSON](star-wars-mainline-canon-timeline-order.json) | Formatted UTF-8 array of timeline entries. |
| [Lite JSON](star-wars-mainline-canon-timeline-order-lite.json) | The same array on one line, with whitespace inside strings preserved. |
| `star-wars-mainline-canon-timeline-order.xlsx` | Local Excel authoring workbook. The repository's `*.xlsx` rule excludes it from Git. |

## Schema v2

All four files use the same 16 fields. Both JSON files follow [schema.json](schema.json). JSON stores integers as numbers and missing values as `null`. Excel uses numeric cells and blank cells respectively. When reading the CSV, parse populated integer fields as numbers and empty fields as nulls.

| Field | Type in JSON | Meaning |
| --- | --- | --- |
| `id` | string | Stable identifier for an entry, such as `tv:tales-of-the-jedi:s01e02`. Use it to save a watchlist or join records across versions. |
| `timeline_order` | integer | One-based watch position. Sort ascending to recover the curated sequence. |
| `media_type` | string | `film` or `tv_episode`. |
| `series_id` | string or null | Stable identifier shared by episodes of a series. Null for films. |
| `series_title` | string or null | Display title of the series. Null for films. |
| `item_title` | string | Episode name for TV or full film title. |
| `season_number` | integer or null | TV season, starting at 1. Null for films. |
| `episode_number` | integer or null | Episode within that season, starting at 1. Null for films. |
| `date_label` | string | Original in-universe date text for display. |
| `date_start_year` | integer or null | Year at the chronologically earlier endpoint, expressed as a nonnegative number. |
| `date_start_era` | string or null | `BBY` (before the Battle of Yavin) or `ABY` (after the Battle of Yavin). |
| `date_end_year` | integer or null | Year at the chronologically later endpoint. A single year uses the same value at both ends. |
| `date_end_era` | string or null | Era of the later endpoint. |
| `date_certainty` | string | `exact`, `approximate`, `range`, or `unknown`. |
| `source_url` | string or null | Source for the entry's timeline placement, when supplied. |
| `notes` | string or null | Additional context for the placement, when supplied. |

An `exact` date identifies a single year. A tilde marks an `approximate` year or span. A `range` has explicit bounds, including spans across eras. For example, `36-35 BBY` starts at 36 BBY and ends at 35 BBY. For `0 BBY - 0 ABY`, both years are zero and the eras differ. An `unknown` date has nulls in all four endpoint fields.

## Migrating from the six-field format

Use `date_label` wherever you previously displayed `Date`. Filter by `media_type` in place of `Type`. For TV episodes, `Title` and `Episode Name` map to `series_title` and `item_title`. For numbered saga films, `item_title` combines the former film title and subtitle. Standalone films keep their original titles.

`Season` and `Episode` become the integer fields `season_number` and `episode_number`. Earlier film records used the string `"n/a"` in those columns. Read JSON nulls or blank spreadsheet fields for films. The original rows supplied the initial watch positions. The migration leaves `source_url` and `notes` null because the original records supplied neither.

## Updating the timeline

Edit the workbook and export its rows in ascending `timeline_order`. Keep existing IDs when correcting a title or revising the watch order. Give a new entry a unique ID and update watch positions to form a consecutive sequence starting at 1.

Validate the formatted JSON against the schema and minify that array for the lite copy. Compare all four files field by field after reading CSV and Excel values with the types above. Check that IDs are unique and that each file lists the same IDs in the same order.
