# Star Wars Mainline Canon Timeline Order

A curated chronological watch order for Star Wars films and television, with stable IDs, structured dates, and spoiler-free descriptions for watchlists and timeline apps.

**v2.2.1** · **420 entries** · **13 films** · **407 episodes from 15 series**

## Get the data

| File | Use it for |
| --- | --- |
| [JSON](star-wars-mainline-canon-timeline-order.json) | Readable, structured data for apps and scripts. |
| [Lite JSON](star-wars-mainline-canon-timeline-order-lite.json) | The same records in a compact, single-line array. |
| [CSV](star-wars-mainline-canon-timeline-order.csv) | Importing into Excel, Google Sheets, or other data tools. |
| [JSON Schema](schema.json) | Validating records against the v2 data model. |
| [Date provenance](research/date-provenance.json) | Chronology evidence and qualifications, keyed by entry ID. Contains spoilers. |

All data files use UTF-8 and the same 16 fields. Both JSON files contain identical records; the CSV has one header row followed by one row per entry. A local Excel authoring workbook is excluded from Git by the repository's `*.xlsx` rule.

## Follow the watch order

**Sort by `timeline_order`, ascending.** Positions run from 1 to 420. Each entry represents one film or one television episode; episodes from a season may be separated by other stories.

Use `id` to save watch progress or join records across versions. IDs identify stories independently of their position, so a revised order does not detach progress from an entry. For example: `film:episode-i` or `tv:tales-of-the-jedi:s01e02`.

Dates generally describe the main narrative. Flashbacks, prologues, epilogues, overlapping events, and uncertain placements are explained in the [date provenance](research/date-provenance.json). Within an uncertain interval, a viewing position is a curated choice rather than proof of an exact date. Sorting numerically by year will not reproduce the intended watch order.

Every `notes` value is an original, spoiler-free premise of at most 200 characters, including spaces and punctuation. Descriptions introduce the situation without revealing the outcome. Episode premises were checked against [TVmaze's episode listings](https://www.tvmaze.com/); provider numbering is reconciled to this dataset's stable IDs.

<details>
<summary><strong>What's included</strong></summary>

The nine Skywalker saga films, The Clone Wars film, Solo, Rogue One, and The Mandalorian and Grogu, plus episodes from:

- The Acolyte
- Tales of the Jedi
- Tales of the Empire
- Tales of the Underworld
- The Clone Wars
- The Bad Batch
- Maul – Shadow Lord
- Obi-Wan Kenobi
- Andor
- Rebels
- The Mandalorian
- The Book of Boba Fett
- Ahsoka
- Skeleton Crew
- Resistance

Coverage is a curated selection of mainline screen stories, not a catalogue of every canon work.

</details>

## Understand the dates

**BBY** means before the Battle of Yavin; **ABY** means after it. `date_label` is the display value. Numeric endpoints support filtering and analysis without parsing that text.

| Meaning | Permitted examples |
| --- | --- |
| Single year | `10 BBY` · `10 ABY` |
| Approximate year | `~10 BBY` · `~10 ABY` |
| Bounded interval | `19~18 BBY` · `7~9 ABY` |
| Approximate interval | `~68-58 BBY` · `~9-11 ABY` |
| Yavin transition | `0 BBY - 0 ABY` |

Labels use ASCII `~`, ASCII hyphens, and ordinary spaces. Qualifications belong in the date provenance file. Start and end fields represent the chronologically earlier and later endpoints: `19~18 BBY` starts at 19 BBY and ends at 18 BBY. A single-year label uses the same year and era at both ends.

`date_certainty` describes the date representation, not the strength of its evidence. An `exact` value names a single year; it does not mean every source independently confirms it. Source attributions, inferred bounds, provisional estimates, and conflicting references are documented through `source_url` and the date provenance file. Some print references are cited through secondary sources, as noted there.

## Data model

The [schema](schema.json) uses JSON Schema Draft 2020-12. All 16 fields are required; nullable fields use JSON `null`, not the string `"n/a"`.

| Field | JSON type | Meaning |
| --- | --- | --- |
| `id` | string | Stable story identifier. |
| `timeline_order` | integer | One-based position in the curated watch order. |
| `media_type` | string | `film` or `tv_episode`. |
| `series_id`, `series_title` | string or null | Series identifier and display title; null for films. |
| `item_title` | string | Episode name or full film title. |
| `season_number`, `episode_number` | integer or null | Episode coordinates; null for films. |
| `date_label` | string | In-universe date in the formats above. |
| `date_start_year`, `date_end_year` | integer or null | Nonnegative years at the interval's endpoints. |
| `date_start_era`, `date_end_era` | string or null | `BBY` or `ABY` for each endpoint. |
| `date_certainty` | string | `exact`, `approximate`, or `range` in the current dataset. The schema also supports `on_or_after` and `unknown`. |
| `source_url` | string or null | Supporting source for the placement. |
| `notes` | string | Spoiler-free film or episode premise, at most 200 characters. |

When importing CSV, convert populated integer fields to numbers and empty fields to nulls. In Excel, use numeric cells for integers and blank cells for missing values.

## Use it in JavaScript

Run from the repository directory with Node.js; no dependencies are required.

```js
import { readFileSync } from 'node:fs';

const timeline = JSON.parse(
  readFileSync('star-wars-mainline-canon-timeline-order.json', 'utf8')
);

timeline.sort((a, b) => a.timeline_order - b.timeline_order);

for (const { timeline_order, date_label, item_title } of timeline) {
  console.log(`${timeline_order}. ${item_title} (${date_label})`);
}
```

## Maintain the timeline

- Preserve existing IDs when correcting titles, dates, or positions. Give new stories unique IDs.
- Keep viewing positions consecutive from 1 and export every format in that order.
- For date changes, follow the [timeline-dates skill](skills/timeline-dates/SKILL.md). Keep evidence and qualifications alongside the affected records.
- For new entries and description changes, follow the [timeline-notes skill](skills/timeline-notes/SKILL.md). Validate with `node skills/timeline-notes/scripts/check-notes.mjs` and review each description for spoilers.
- Validate both JSON files against the schema. Compare IDs, order, and typed field values across JSON, lite JSON, CSV, and the local workbook.

## Licence and reuse

The original timeline compilation, descriptions and research writing are licensed under **[CC BY 4.0](LICENSES/CC-BY-4.0.txt)**. Credit EightBitDan, link to this repository and the licence, and indicate any changes. Original software, schema and skill instructions use the **[MIT License](LICENSES/MIT.txt)**. See [LICENSE](LICENSE) for the precise scope and third-party exclusions.

Suggested credit: “Star Wars Mainline Canon Timeline Order by EightBitDan, licensed under CC BY 4.0.” Include the repository URL, licence link and a description of your changes when applicable.

These grants cover only the contributors' rights. Star Wars intellectual property and third-party source material remain subject to their owners' rights and applicable terms.

---

Unofficial fan project. Not affiliated with Lucasfilm or Disney.
