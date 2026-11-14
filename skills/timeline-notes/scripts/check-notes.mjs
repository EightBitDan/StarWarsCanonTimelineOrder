import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

export function validateNotes(rows) {
  assert.ok(Array.isArray(rows) && rows.length, 'Expected a nonempty timeline array');
  const ids = new Set();
  for (const row of rows) {
    assert.ok(row.id && !ids.has(row.id), `Missing or duplicate ID: ${row.id}`);
    ids.add(row.id);
    assert.equal(typeof row.notes, 'string', `Missing description: ${row.id}`);
    assert.ok(row.notes.trim().length > 0, `Empty description: ${row.id}`);
    assert.ok(!/[\r\n]/.test(row.notes), `Description must be a single paragraph: ${row.id}`);
    assert.ok([...row.notes].length <= 200, `Description exceeds 200 characters: ${row.id}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const rows = JSON.parse(readFileSync(process.argv[2] ?? 'star-wars-mainline-canon-timeline-order.json', 'utf8'));
  validateNotes(rows);
  console.log(`Verified ${rows.length} nonempty descriptions of at most 200 characters. Review spoilers manually.`);
}
