---
name: timeline-notes
description: Write spoiler-free notes of at most 200 characters when adding or editing film or episode entries in Star Wars Mainline Canon Timeline Order or its Galactic Atlas snapshot.
---

# Timeline notes

Apply automatically when adding timeline entries or changing their `notes`.

- Give every film and episode a nonempty, original English description in `notes`, no more than 200 Unicode characters including spaces and punctuation. Count characters, not words. Never truncate a sentence to fit.
- Describe the opening situation, setting, objective or central dilemma. Avoid endings, deaths, betrayals, surprise identities, returns, mission outcomes, cameos and later-episode revelations. Even an official synopsis can contain spoilers; review it before adapting it.
- Make each description specific to its film or episode. Check the stable ID, title and season/episode mapping; providers sometimes combine multipart stories or number them differently.
- Consult reliable episode guides or publisher synopses when unsure. Paraphrase the premise; do not copy promotional text or invent plot details. For an unreleased entry, use only its officially announced premise.
- Keep date evidence, uncertainty and source qualifications in `research/date-provenance.json`, keyed by stable entry ID. This research file may contain spoilers and must not be bundled as a viewer description. `source_url` continues to identify placement evidence.
- Preserve IDs, chronology and all other fields during notes-only edits. For date edits, also follow the sibling `timeline-dates` skill and record its required qualifications in the research file rather than in the spoiler-free notes.
- Synchronize the full JSON, lite JSON, CSV, local authoring workbook and viewer snapshot/bundle. Use the spreadsheet workflow for workbook changes; report a locked workbook rather than silently leaving a stale copy.
- Run `node skills/timeline-notes/scripts/check-notes.mjs star-wars-mainline-canon-timeline-order.json` from the timeline repository. Check schema and export parity, then run the viewer build and checks. Review spoilers manually: a character-count check cannot assess them.

A skill guides Codex during entry updates; it is not a background process. Repository instructions make this workflow mandatory for future additions, while schema and build checks enforce the length requirement.
