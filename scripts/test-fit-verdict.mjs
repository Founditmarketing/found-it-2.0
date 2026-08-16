/* Plain assertion script for the fit-check verdict (no test framework in this
   repo). Compiles src/lib/fit.ts + deps with the local tsc, then asserts the
   verdict table. Run: node scripts/test-fit-verdict.mjs */

import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const out = mkdtempSync(join(tmpdir(), 'fit-test-'));
try {
  execSync(
    `npx tsc src/lib/fit.ts --outDir "${out}" --module nodenext --moduleResolution nodenext --target es2020 --skipLibCheck`,
    { stdio: 'inherit', cwd: join(import.meta.dirname, '..') }
  );
  const { fitVerdict, FIT_QUESTIONS } = await import(pathToFileURL(join(out, 'fit.js')).href);

  const base = { vertical: 'trade', revenue: '$1M – $5M / yr', runsOn: 'rented', who: 'owner', books: 'clean' };
  const v = (over) => fitVerdict({ ...base, ...over });

  // STRONG — the ideal customer, and variations that must stay strong.
  assert.equal(v({}).tier, 'strong');
  assert.equal(v({ vertical: 'dealer-parts', revenue: '$5M+ / yr', runsOn: 'qb-paper', books: 'behind' }).tier, 'strong');
  assert.equal(v({ vertical: 'retail', runsOn: 'spreadsheets' }).tier, 'strong');
  assert.equal(v({ vertical: 'other', runsOn: 'nothing' }).tier, 'strong');

  // Hard walls — NOT A FIT no matter how good the other answers are.
  assert.equal(v({ vertical: 'restaurant' }).tier, 'no');
  assert.equal(v({ vertical: 'restaurant', revenue: '$5M+ / yr' }).tier, 'no');
  assert.equal(v({ who: 'send-info' }).tier, 'no');
  assert.equal(v({ revenue: 'Under $250k / yr' }).tier, 'no');

  // One weak answer — BORDERLINE, with the weakness named.
  for (const over of [{ revenue: '$250k – $1M / yr' }, { who: 'manager' }, { books: 'dont-ask' }]) {
    const r = v(over);
    assert.equal(r.tier, 'borderline');
    assert.ok(r.weakness, 'borderline names its weakness');
  }

  // Two or more weak answers — NOT A FIT.
  assert.equal(v({ who: 'manager', books: 'dont-ask' }).tier, 'no');
  assert.equal(v({ revenue: '$250k – $1M / yr', who: 'manager', books: 'dont-ask' }).tier, 'no');

  // NOT A FIT verdicts sell nothing: a kind reason + one free pointer, always.
  for (const r of [v({ vertical: 'restaurant' }), v({ who: 'send-info' }), v({ who: 'manager', books: 'dont-ask' })]) {
    assert.ok(r.reason && r.pointer?.href, 'no-fit carries reason + free pointer');
  }

  // Exhaustive guarantee: restaurant or "just send info" can NEVER reach strong.
  for (const q1 of FIT_QUESTIONS[0].options) for (const q2 of FIT_QUESTIONS[1].options)
  for (const q3 of FIT_QUESTIONS[2].options) for (const q4 of FIT_QUESTIONS[3].options)
  for (const q5 of FIT_QUESTIONS[4].options) {
    const r = fitVerdict({ vertical: q1.value, revenue: q2.value, runsOn: q3.value, who: q4.value, books: q5.value });
    assert.ok(['strong', 'borderline', 'no'].includes(r.tier), 'verdict is total');
    if (q1.value === 'restaurant' || q4.value === 'send-info') assert.equal(r.tier, 'no');
  }

  console.log('fit-verdict: all assertions passed');
} finally {
  rmSync(out, { recursive: true, force: true });
}
