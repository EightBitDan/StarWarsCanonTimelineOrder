# Star Wars Mainline Canon Timeline Order

A curated in-universe watch order for the Star Wars canon films and television series included in this dataset.

The list follows story chronology rather than release date or episode number. Episodes may therefore appear out of season order or between films and episodes from other series.

## Data formats

The same 409 ordered records are provided in four formats:

| File | Description |
| --- | --- |
| `star-wars-mainline-canon-timeline-order.xlsx` | Excel authoring workbook. TV season and episode values are numeric; film values use `n/a`. |
| `star-wars-mainline-canon-timeline-order.csv` | UTF-8 CSV with one header row. |
| `star-wars-mainline-canon-timeline-order.json` | Human-readable UTF-8 JSON. |
| `star-wars-mainline-canon-timeline-order-lite.json` | Minified UTF-8 JSON containing the same records without indentation or line breaks. |

The two JSON files contain a top-level array. Every JSON field value is a string, including `Season` and `Episode`.

The workbook is currently excluded from Git by the repository's `*.xlsx` ignore rule. Changes to it remain local unless that rule is changed or the file is force-added.

## Schema

| Field | Description |
| --- | --- |
| `Date` | In-universe date or approximate date range using BBY/ABY notation. |
| `Type` | `TV` or `Film`. |
| `Title` | Series or film title. |
| `Episode Name` | Episode name or film subtitle where applicable. |
| `Season` | TV season number, or `n/a` for films. |
| `Episode` | TV episode number, or `n/a` for films. |

## Ordering

File order is significant and must be preserved.

`Date` contains display-oriented values such as exact years, approximate years, ranges, and the BBY-to-ABY transition. It is not directly sortable as an ordinary number or text field. Sorting by `Date`, `Season`, or `Episode` will not reproduce the intended watch order.

## Updating and synchronization

The Excel workbook is the authoring source for the text exports. When updating the dataset:

1. Make the content change in the workbook without changing the six-column schema.
2. Preserve the existing record order unless the chronology itself is being revised.
3. Regenerate the CSV and both JSON files as UTF-8.
4. Remove accidental leading or trailing whitespace from field values.
5. Confirm that all four formats contain the same records in the same order.
6. Confirm that the formatted and lite JSON files parse to identical data.

Recommended checks:

- Every record has all six fields and no null or empty values.
- TV records have numeric season and episode values.
- Film records use `n/a` for season and episode.
- No duplicate full records exist.
- No duplicate TV key exists for `Title + Season + Episode`.
- Unicode punctuation and spacing are preserved without replacement characters.
