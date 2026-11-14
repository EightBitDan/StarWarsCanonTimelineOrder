# Star Wars Mainline Canon Timeline Order

A chronological watch order for Star Wars films and television. Explore the galaxy's history with in-universe dates and spoiler-free descriptions.

<!-- generated:stats:start -->
**v2.2.2** · **420 entries** · **13 films** · **407 episodes from 15 series**
<!-- generated:stats:end -->

**[Explore Galactic Atlas](https://galactic-atlass.vercel.app/)** · **[Get the spreadsheet-ready CSV](star-wars-mainline-canon-timeline-order.csv)**

## Quick preview

Start here: these are the first 20 entries in the watch order. Films and individual episodes are interleaved, so episode numbers can appear outside broadcast order.

<!-- generated:preview:start -->
| # | Film / series | Episode | Date |
| --- | --- | --- | --- |
| 1 | The Acolyte | S01E07 · Choice | 148 BBY |
| 2 | The Acolyte | S01E03 · Destiny | 148 BBY |
| 3 | The Acolyte | S01E01 · Lost / Found | 132 BBY |
| 4 | The Acolyte | S01E02 · Revenge / Justice | 132 BBY |
| 5 | The Acolyte | S01E04 · Day | 132 BBY |
| 6 | The Acolyte | S01E05 · Night | 132 BBY |
| 7 | The Acolyte | S01E06 · Teach / Corrupt | 132 BBY |
| 8 | The Acolyte | S01E08 · The Acolyte | 132 BBY |
| 9 | Tales of the Jedi | S01E02 · Justice | ~68-58 BBY |
| 10 | Tales of the Underworld | S01E04 · The Good Life | ~58-48 BBY |
| 11 | Tales of the Jedi | S01E03 · Choices | ~50-48 BBY |
| 12 | Tales of the Underworld | S01E05 · A Good Turn | ~40 BBY |
| 13 | Tales of the Jedi | S01E01 · Life and Death | 36~35 BBY |
| 14 | Tales of the Underworld | S01E06 · One Good Deed | ~33 BBY |
| 15 | Episode I - The Phantom Menace | Film | 32 BBY |
| 16 | Tales of the Jedi | S01E04 · The Sith Lord | 32 BBY |
| 17 | Episode II - Attack of the Clones | Film | 22 BBY |
| 18 | The Clone Wars | S02E16 · Cat and Mouse | 22 BBY |
| 19 | The Clone Wars | S01E16 · The Hidden Enemy | 22 BBY |
| 20 | The Clone Wars | Film | 22 BBY |
<!-- generated:preview:end -->

The full order continues through **The Rise of Skywalker**. A leading `~` marks an approximate date; intervals preserve uncertainty about a story's placement.

## Start watching

- **Browse and track your progress:** open [Galactic Atlas](https://galactic-atlass.vercel.app/) to explore the full timeline, view spoiler-free descriptions and save watched entries in your browser.
- **Use your own watchlist:** import the [CSV](star-wars-mainline-canon-timeline-order.csv) into Excel or Google Sheets. Follow the rows in order, from position 1 onward.
- **Build something with the data:** use the [JSON](star-wars-mainline-canon-timeline-order.json) and the [developer guide below](#for-developers).

This is a chronological viewing order. It can introduce events before their original on-screen reveal; the short descriptions themselves avoid plot spoilers. Each row represents one film or one episode.

## What's included

The nine Skywalker saga films, **The Clone Wars** film, **Solo**, **Rogue One**, and **The Mandalorian and Grogu**, plus episodes from 15 series:

<details>
<summary>See the included series</summary>

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

</details>

Coverage is a curated selection of mainline screen stories. Books, comics, games and other screen titles are outside this watchlist's scope.

## Understanding the dates

**BBY** means before the Battle of Yavin, the battle at the end of **A New Hope**. **ABY** means after it.

| Date | How to read it |
| --- | --- |
| `10 BBY` or `10 ABY` | A single year before or after the Battle of Yavin. |
| `~10 BBY` or `~10 ABY` | Approximately that year. |
| `19~18 BBY` or `7~9 ABY` | A bounded interval, running from the earlier year to the later year. |
| `~68-58 BBY` or `~9-11 ABY` | An approximate interval. |
| `0 BBY - 0 ABY` | The transition across the Battle of Yavin. |

Dates generally describe the main narrative. Stories with flashbacks, prologues or epilogues may span other periods too. Within an uncertain interval, the viewing position is a curated choice. Follow the listed order rather than sorting by year.

Detailed evidence, conflicting references and placement qualifications are preserved separately in the [date provenance](research/date-provenance.json). **That research file contains spoilers.**

## For developers

### Downloads

| File | Use it for |
| --- | --- |
| [JSON](star-wars-mainline-canon-timeline-order.json) | Readable, structured data for apps and scripts. |
| [Lite JSON](star-wars-mainline-canon-timeline-order-lite.json) | The same records in a compact, single-line array. |
| [CSV](star-wars-mainline-canon-timeline-order.csv) | Importing into spreadsheets and other data tools. |
| [JSON Schema](schema.json) | Validating records against the v2 data model. |
| [Date provenance](research/date-provenance.json) | Chronology evidence keyed by stable entry ID; contains spoilers. |

All exports use UTF-8 and the same 16 fields. Both JSON files contain identical records; CSV has one header row followed by one row per entry. A local Excel authoring workbook is excluded from Git by the `*.xlsx` rule.

Sort by `timeline_order`, ascending. Use `id` to save progress or join records across versions: an ID identifies a story independently of its viewing position. Examples: `film:episode-i` and `tv:tales-of-the-jedi:s01e02`.

### Data model

The [schema](schema.json) uses JSON Schema Draft 2020-12. All 16 fields are required; nullable fields use JSON `null`.

| Field | JSON type | Meaning |
| --- | --- | --- |
| `id` | string | Stable story identifier. |
| `timeline_order` | integer | One-based position in the curated watch order. |
| `media_type` | string | `film` or `tv_episode`. |
| `series_id`, `series_title` | string or null | Series identifier and display title; null for films. |
| `item_title` | string | Episode name or full film title. |
| `season_number`, `episode_number` | integer or null | Episode coordinates; null for films. |
| `date_label` | string | Display date in the formats above. |
| `date_start_year`, `date_end_year` | integer or null | Nonnegative years at the interval's endpoints. |
| `date_start_era`, `date_end_era` | string or null | `BBY` or `ABY` for each endpoint. |
| `date_certainty` | string | `exact`, `approximate`, or `range` in the current dataset. The schema also supports `on_or_after` and `unknown`. |
| `source_url` | string or null | Supporting source for the timeline placement. |
| `notes` | string | Original spoiler-free film or episode premise, at most 200 characters. |

`date_certainty` describes the date representation, not the strength of its evidence. `exact` identifies a single year; supporting sources and qualifications remain in `source_url` and the date provenance file. Some print references were checked through secondary sources, as documented there. Episode premises were checked against [TVmaze's listings](https://www.tvmaze.com/), with provider numbering reconciled to the stable IDs.

Start and end fields represent chronologically earlier and later endpoints. For example, `19~18 BBY` starts at 19 BBY and ends at 18 BBY. A single-year label uses the same year and era at both ends. Labels use ASCII `~`, ASCII hyphens and ordinary spaces.

When importing CSV, convert populated integer fields to numbers and empty fields to nulls. In Excel, use numeric cells for integers and blank cells for missing values.

### JavaScript example

Run from the repository directory as a Node.js ES module, such as `watch-order.mjs`. No dependencies are required.

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

## Contributing

Corrections are welcome. [Open an issue](https://github.com/EightBitDan/StarWarsCanonTimelineOrder/issues) with the film or episode, the proposed correction and a supporting source. For uncertain placements, explain what the evidence establishes and what remains inferred.

When updating the data:

- Preserve existing IDs and keep viewing positions consecutive from 1.
- Validate both JSON exports against the schema and compare typed values across JSON, lite JSON, CSV and the local workbook. Synchronize Galactic Atlas when its snapshot is in scope.

## Licence and reuse

The original timeline compilation, descriptions, research writing and preview artwork use **[CC BY 4.0](LICENSES/CC-BY-4.0.txt)**. Original software, schema and skill instructions use the **[MIT License](LICENSES/MIT.txt)**. See [LICENSE](LICENSE) for the scope and third-party exclusions.

Suggested credit: “Star Wars Mainline Canon Timeline Order by EightBitDan, licensed under CC BY 4.0.” Include the [repository URL](https://github.com/EightBitDan/StarWarsCanonTimelineOrder), [licence link](https://creativecommons.org/licenses/by/4.0/) and an indication of any changes.

These grants cover only the contributors' rights. Star Wars intellectual property and third-party source material remain subject to their owners' rights and applicable terms.

---

Unofficial fan project. Not affiliated with Lucasfilm or Disney.
