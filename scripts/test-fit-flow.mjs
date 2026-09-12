/* Plain assertion script for THE FIT FLOW engine (no test framework in this
   repo). Compiles src/lib/fit-flow.ts + deps with the local tsc, then asserts
   the screen table, the reducer's guards, storage hydration, the lead trail,
   contact validation, and the thank-you hop. Run: node scripts/test-fit-flow.mjs */

import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const out = mkdtempSync(join(tmpdir(), 'fit-flow-test-'));
try {
  execSync(
    `npx tsc src/lib/fit-flow.ts --outDir "${out}" --module nodenext --moduleResolution nodenext --target es2020 --skipLibCheck`,
    { stdio: 'inherit', cwd: join(import.meta.dirname, '..') }
  );
  const {
    SCREENS,
    QUESTION_SCREENS,
    JOBS,
    STORAGE_KEY,
    initialState,
    reduce,
    progressOf,
    serialize,
    hydrateFrom,
    shownFirstBuild,
    rawFirstBuild,
    shownWallReason,
    scrubForDisplay,
    normalizeDashes,
    hasForbiddenWord,
    wallOf,
    buildTrail,
    validateContact,
    normalizePhone,
    thankYouHref,
    isQualified,
  } = await import(pathToFileURL(join(out, 'fit-flow.js')).href);

  const run = (state, ...actions) => actions.reduce(reduce, state);
  const phoneJob = JOBS.find((j) => j.id === 'phone');
  const STRONG = { vertical: 'trade', revenue: '$1M – $5M / yr', runsOn: 'rented', who: 'owner', books: 'clean' };
  const answerAll = (s, a) =>
    QUESTION_SCREENS.reduce((st, id) => reduce(st, { type: 'ANSWER', from: id, id, value: a[id] }), s);
  const READ_OK = { fit: 'likely', heard: 'The phone rings and nobody picks up.', firstTarget: 'After-hours phone intake.', reason: '' };
  const READ_NO = { fit: 'no', heard: 'A restaurant kitchen display.', firstTarget: '', reason: 'Restaurants already have a POS for that.' };

  /* ─── 1. Screens and progress ─── */
  assert.deepEqual(SCREENS, ['want', 'vertical', 'revenue', 'runsOn', 'who', 'books', 'verdict', 'number', 'time']);
  assert.equal(STORAGE_KEY, 'fit.flow.v1');
  assert.deepEqual(
    SCREENS.map((s) => progressOf(s).label),
    ['1 of 8', '2 of 8', '3 of 8', '4 of 8', '5 of 8', '6 of 8', 'Verdict', '7 of 8', '8 of 8']
  );
  assert.deepEqual(
    SCREENS.map((s) => progressOf(s).step),
    [1, 2, 3, 4, 5, 6, 6, 7, 8]
  );
  for (const s of SCREENS) assert.equal(progressOf(s).total, 8);

  /* ─── 2. The stale-tap guard: from must name the current screen ─── */
  const s0 = initialState;
  assert.equal(reduce(s0, { type: 'PICK_WANT', from: 'vertical', job: phoneJob }), s0);
  const s1 = reduce(s0, { type: 'PICK_WANT', from: 'want', job: phoneJob });
  assert.equal(s1.screen, 'vertical');
  assert.deepEqual(s1.want, { kind: 'chip', id: 'phone', title: phoneJob.title, first: phoneJob.first });
  assert.equal(reduce(s1, { type: 'ANSWER', from: 'want', id: 'vertical', value: 'trade' }), s1);
  assert.equal(reduce(s1, { type: 'ANSWER', from: 'revenue', id: 'revenue', value: '$5M+ / yr' }), s1);
  assert.equal(reduce(s1, { type: 'ANSWER', from: 'vertical', id: 'revenue', value: '$5M+ / yr' }), s1, 'id must match the screen');
  assert.equal(reduce(s1, { type: 'ANSWER', from: 'vertical', id: 'vertical', value: 'not-an-option' }), s1);
  assert.equal(reduce(s1, { type: 'GO_NUMBER', from: 'vertical' }), s1);
  assert.equal(reduce(s1, { type: 'NEXT_TIME', from: 'vertical' }), s1);
  assert.equal(reduce(s1, { type: 'SAY_WANT', from: 'vertical', text: 'the phone rings out' }), s1);

  /* ─── 3. ANSWER advances in order and stores the value ─── */
  let st = s1;
  const expectNext = ['revenue', 'runsOn', 'who', 'books', 'verdict'];
  QUESTION_SCREENS.forEach((id, i) => {
    st = reduce(st, { type: 'ANSWER', from: id, id, value: STRONG[id] });
    assert.equal(st.screen, expectNext[i]);
    assert.equal(st.answers[id], STRONG[id]);
    assert.equal(st.dir, 1);
  });
  assert.equal(wallOf(st), null);

  /* ─── 4. BACK never clears an answer and stops at 'want' ─── */
  let b = st;
  for (const expected of ['books', 'who', 'runsOn', 'revenue', 'vertical', 'want', 'want']) {
    b = reduce(b, { type: 'BACK' });
    assert.equal(b.screen, expected);
    assert.equal(b.dir, -1);
    assert.deepEqual(b.answers, STRONG);
    assert.deepEqual(b.want, s1.want);
  }
  // A re-answer from an earlier screen keeps the later answers.
  const re = reduce(reduce(st, { type: 'BACK' }), { type: 'ANSWER', from: 'books', id: 'books', value: 'behind' });
  assert.equal(re.screen, 'verdict');
  assert.deepEqual(re.answers, { ...STRONG, books: 'behind' });

  /* ─── 5. PICK_WANT clears a text want + read; SAY_WANT clears a chip and pends ─── */
  const said = reduce(s0, { type: 'SAY_WANT', from: 'want', text: '  the phone rings and nobody answers it  ' });
  assert.equal(said.screen, 'vertical');
  assert.deepEqual(said.want, { kind: 'text', text: 'the phone rings and nobody answers it' });
  assert.deepEqual(said.tailor, { status: 'pending' });
  assert.equal(reduce(s0, { type: 'SAY_WANT', from: 'want', text: 'short' }), s0, 'under 8 chars is dropped');
  const readDone = reduce(said, { type: 'TAILOR_DONE', read: READ_OK });
  assert.deepEqual(readDone.tailor, { status: 'done', read: READ_OK });
  const backToWant = run(readDone, { type: 'BACK' });
  const repicked = reduce(backToWant, { type: 'PICK_WANT', from: 'want', job: phoneJob });
  assert.equal(repicked.want.kind, 'chip');
  assert.deepEqual(repicked.tailor, { status: 'idle' }, 'a chip clears the read');
  const resaid = reduce(reduce(s1, { type: 'BACK' }), { type: 'SAY_WANT', from: 'want', text: 'orders typed twice every day' });
  assert.equal(resaid.want.kind, 'text');
  assert.deepEqual(resaid.tailor, { status: 'pending' });
  // TAILOR_DONE / FAILED apply only to a pending text want.
  assert.equal(reduce(s1, { type: 'TAILOR_DONE', read: READ_OK }), s1);
  assert.equal(reduce(s1, { type: 'TAILOR_FAILED' }), s1);
  assert.deepEqual(reduce(said, { type: 'TAILOR_FAILED' }).tailor, { status: 'failed' });
  assert.equal(reduce(readDone, { type: 'TAILOR_FAILED' }), readDone, 'done is final');

  /* ─── 6. GO_NUMBER refused on both walls ─── */
  const quizWall = answerAll(s1, { ...STRONG, vertical: 'restaurant' });
  assert.equal(quizWall.screen, 'verdict');
  assert.equal(wallOf(quizWall), 'quiz');
  assert.equal(reduce(quizWall, { type: 'GO_NUMBER', from: 'verdict' }), quizWall);
  const tailorWall = answerAll(reduce(said, { type: 'TAILOR_DONE', read: READ_NO }), STRONG);
  assert.equal(wallOf(tailorWall), 'tailor');
  assert.equal(reduce(tailorWall, { type: 'GO_NUMBER', from: 'verdict' }), tailorWall);
  // Both say no: the quiz wall wins.
  assert.equal(wallOf(answerAll(reduce(said, { type: 'TAILOR_DONE', read: READ_NO }), { ...STRONG, who: 'send-info' })), 'quiz');
  // The tailor-wall escape: back to want, answers kept, text and read gone.
  const escaped = reduce(tailorWall, { type: 'CLEAR_TEXT', from: 'verdict' });
  assert.equal(escaped.screen, 'want');
  assert.equal(escaped.want, null);
  assert.deepEqual(escaped.tailor, { status: 'idle' });
  assert.deepEqual(escaped.answers, STRONG);
  assert.equal(reduce(quizWall, { type: 'CLEAR_TEXT', from: 'books' }), quizWall);
  // Strong goes through.
  const atNumber = reduce(st, { type: 'GO_NUMBER', from: 'verdict' });
  assert.equal(atNumber.screen, 'number');
  // A pending read holds the verdict: nobody leaves until it lands (a late 'no' walls,
  // and a wall can never reach the number screen). Done or failed releases.
  const pendingVerdict = answerAll(said, STRONG);
  assert.equal(reduce(pendingVerdict, { type: 'GO_NUMBER', from: 'verdict' }), pendingVerdict, 'pending holds');
  assert.equal(
    reduce(reduce(pendingVerdict, { type: 'TAILOR_DONE', read: READ_OK }), { type: 'GO_NUMBER', from: 'verdict' }).screen,
    'number'
  );
  assert.equal(
    reduce(reduce(pendingVerdict, { type: 'TAILOR_FAILED' }), { type: 'GO_NUMBER', from: 'verdict' }).screen,
    'number',
    'a failed read releases'
  );

  /* ─── 7. A late 'no' read pulls number/time back to the verdict (the refresh path:
     a stored number screen with a text want and no read hydrates as pending) ─── */
  const pendingNumber = hydrateFrom(
    JSON.stringify({ v: 1, screen: 'number', want: { kind: 'text', text: said.want.text }, answers: STRONG })
  );
  assert.equal(pendingNumber.screen, 'number');
  assert.deepEqual(pendingNumber.tailor, { status: 'pending' });
  const pulled = reduce(pendingNumber, { type: 'TAILOR_DONE', read: READ_NO });
  assert.equal(pulled.screen, 'verdict');
  assert.equal(pulled.dir, -1);
  const pendingTime = run(
    pendingNumber,
    { type: 'SET_CONTACT', patch: { name: 'Cory', phone: '3185550123' } },
    { type: 'NEXT_TIME', from: 'number' }
  );
  assert.equal(pendingTime.screen, 'time');
  const pulledFromTime = reduce(pendingTime, { type: 'TAILOR_DONE', read: READ_NO });
  assert.equal(pulledFromTime.screen, 'verdict');
  assert.equal(pulledFromTime.contact.name, 'Cory', 'contact kept');
  // A 'likely' read leaves the screen alone.
  assert.equal(reduce(pendingTime, { type: 'TAILOR_DONE', read: READ_OK }).screen, 'time');

  /* ─── NEXT_TIME is gated on a valid contact; SEND only on 'time' ─── */
  assert.equal(reduce(atNumber, { type: 'NEXT_TIME', from: 'number' }), atNumber, 'empty contact refused');
  const withContact = reduce(atNumber, { type: 'SET_CONTACT', patch: { name: 'Cory', phone: '(318) 555-0123' } });
  const atTime = reduce(withContact, { type: 'NEXT_TIME', from: 'number' });
  assert.equal(atTime.screen, 'time');
  assert.equal(reduce(withContact, { type: 'SEND' }), withContact);
  const sending = reduce(atTime, { type: 'SEND' });
  assert.equal(sending.send.status, 'sending');
  assert.equal(reduce(sending, { type: 'SEND' }), sending, 'no double send');
  assert.equal(reduce(sending, { type: 'SEND_ERR' }).send.status, 'error');
  assert.equal(reduce(sending, { type: 'SEND_OK' }).send.status, 'idle');
  assert.equal(reduce(atTime, { type: 'BACK' }).screen, 'number');
  assert.equal(reduce(atNumber, { type: 'BACK' }).screen, 'verdict');
  assert.equal(reduce(atTime, { type: 'STARTED' }).started, true);
  assert.deepEqual(reduce(atTime, { type: 'RESTART' }), initialState);

  /* ─── 8. hydrateFrom ─── */
  assert.deepEqual(hydrateFrom(null), initialState);
  assert.deepEqual(hydrateFrom('{not json'), initialState);
  assert.deepEqual(hydrateFrom(JSON.stringify({ v: 2, screen: 'want' })), initialState);
  assert.deepEqual(hydrateFrom(JSON.stringify({ v: 1, screen: 'payment' })), initialState);
  // Round trip: the time screen, strong, chip want.
  const full = run(atTime, { type: 'SET_TIME', day: 'tomorrow' }, { type: 'SET_TIME', window: 'afternoon' });
  const h = hydrateFrom(serialize(full));
  assert.equal(h.screen, 'time');
  assert.deepEqual(h.want, full.want);
  assert.deepEqual(h.answers, STRONG);
  assert.deepEqual(h.time, { day: 'tomorrow', window: 'afternoon' });
  assert.equal(h.contact.name, 'Cory');
  assert.equal(h.contact.hp, '', 'the honeypot is never stored');
  assert.equal(JSON.parse(serialize(full)).contact.hp, undefined);
  assert.equal(h.started, false);
  assert.deepEqual(h.send, { status: 'idle' });
  // Prerequisites: a screen past 'want' with no want falls back to 'want'.
  assert.equal(hydrateFrom(JSON.stringify({ v: 1, screen: 'number', answers: STRONG })).screen, 'want');
  // Verdict with a missing answer falls back to the first unanswered question.
  const partial = { v: 1, screen: 'verdict', want: { kind: 'chip', id: 'phone' }, answers: { vertical: 'trade', revenue: STRONG.revenue } };
  const hp = hydrateFrom(JSON.stringify(partial));
  assert.equal(hp.screen, 'runsOn');
  assert.deepEqual(hp.want, s1.want, 'a chip want is rebuilt from JOBS by id');
  // Number stored behind a quiz wall falls back to the verdict.
  const walled = { v: 1, screen: 'number', want: { kind: 'chip', id: 'phone' }, answers: { ...STRONG, who: 'send-info' } };
  assert.equal(hydrateFrom(JSON.stringify(walled)).screen, 'verdict');
  // An unknown chip id or an invalid answer is dropped.
  assert.equal(hydrateFrom(JSON.stringify({ v: 1, screen: 'vertical', want: { kind: 'chip', id: 'nope' } })).screen, 'want');
  assert.deepEqual(
    hydrateFrom(JSON.stringify({ v: 1, screen: 'want', want: null, answers: { vertical: 'bogus', books: 'clean' } })).answers,
    { books: 'clean' }
  );
  // A stored read comes back as status 'done'; a text want without one is pending (the component refires).
  const hd = hydrateFrom(serialize(readDone));
  assert.deepEqual(hd.tailor, { status: 'done', read: READ_OK });
  const hpend = hydrateFrom(serialize(said));
  assert.deepEqual(hpend.tailor, { status: 'pending' });
  assert.equal(JSON.parse(serialize(said)).tailorRead, undefined, 'a pending read is not stored');
  assert.equal(JSON.parse(serialize(reduce(said, { type: 'TAILOR_FAILED' }))).tailorRead, undefined, 'a failed read is not stored');
  // A chip want ignores any stored read.
  assert.deepEqual(hydrateFrom(JSON.stringify({ v: 1, screen: 'vertical', want: { kind: 'chip', id: 'phone' }, tailorRead: READ_OK })).tailor, { status: 'idle' });
  // A stored 'no' read on the number screen lands on the verdict (the tailor wall).
  const noStored = { v: 1, screen: 'number', want: { kind: 'text', text: 'a restaurant kitchen display' }, answers: STRONG, tailorRead: READ_NO };
  assert.equal(hydrateFrom(JSON.stringify(noStored)).screen, 'verdict');
  // Out-of-allowlist time picks are dropped.
  assert.deepEqual(hydrateFrom(JSON.stringify({ v: 1, screen: 'want', time: { day: 'friday', window: 'evening' } })).time, { day: '', window: 'evening' });

  /* ─── 9. SET_TIME toggles ─── */
  let t = atTime;
  t = reduce(t, { type: 'SET_TIME', day: 'today' });
  assert.deepEqual(t.time, { day: 'today', window: '' });
  t = reduce(t, { type: 'SET_TIME', day: 'tomorrow' });
  assert.deepEqual(t.time, { day: 'tomorrow', window: '' });
  t = reduce(t, { type: 'SET_TIME', day: 'tomorrow' });
  assert.deepEqual(t.time, { day: '', window: '' }, 'same value toggles off');
  t = reduce(t, { type: 'SET_TIME', window: 'morning' });
  t = reduce(t, { type: 'SET_TIME', window: 'morning' });
  assert.deepEqual(t.time, { day: '', window: '' });

  /* ─── 10. shownFirstBuild ─── */
  assert.equal(shownFirstBuild(s1), phoneJob.first);
  assert.equal(shownFirstBuild(said), null, 'pending');
  assert.equal(shownFirstBuild(readDone), 'After-hours phone intake.');
  assert.equal(shownFirstBuild(reduce(said, { type: 'TAILOR_FAILED' })), null);
  assert.equal(shownFirstBuild(reduce(said, { type: 'TAILOR_DONE', read: { ...READ_OK, firstTarget: '  ' } })), null);
  assert.equal(shownFirstBuild(initialState), null);

  /* ─── 10b. The display scrub: dashes become sentence breaks, a forbidden word drops
     the line (the card prints its fallback), the trail carries the raw string ─── */
  assert.equal(
    normalizeDashes('The phone after hours — answered, booked, and filed before anyone calls back.'),
    'The phone after hours. Answered, booked, and filed before anyone calls back.'
  );
  assert.equal(normalizeDashes('Quoting – typed once.'), 'Quoting. Typed once.');
  assert.equal(normalizeDashes('Trailing dash —'), 'Trailing dash');
  assert.equal(normalizeDashes('— leading'), 'leading');
  assert.equal(scrubForDisplay('  A free read of the books.  '), null);
  assert.equal(scrubForDisplay('Guaranteed collections.'), null);
  assert.equal(scrubForDisplay('Freely typed notes.'), 'Freely typed notes.', 'word boundary');
  assert.equal(scrubForDisplay('   '), null);
  assert.equal(hasForbiddenWord('A money-back promise'), true);
  assert.equal(hasForbiddenWord('There is no risk here'), true);
  assert.equal(hasForbiddenWord('Refunds handled'), true);
  assert.equal(hasForbiddenWord('Discounted lines'), true);
  assert.equal(hasForbiddenWord('Order intake, typed once.'), false);
  const dashed = reduce(said, { type: 'TAILOR_DONE', read: { ...READ_OK, firstTarget: 'The phone after hours — answered, booked.' } });
  assert.equal(shownFirstBuild(dashed), 'The phone after hours. Answered, booked.');
  assert.equal(rawFirstBuild(dashed), 'The phone after hours — answered, booked.');
  const badWord = reduce(said, { type: 'TAILOR_DONE', read: { ...READ_OK, firstTarget: 'A free quote engine.' } });
  assert.equal(shownFirstBuild(badWord), null, 'the card prints the fallback');
  assert.equal(rawFirstBuild(badWord), 'A free quote engine.');
  assert.ok(
    buildTrail({ want: said.want, tailor: badWord.tailor, answers: STRONG, time: { day: '', window: '' }, utms: {} }).includes(
      'First build: A free quote engine.'
    ),
    'the inbox sees the raw line'
  );
  assert.equal(shownFirstBuild(s1), phoneJob.first, 'a chip line is house copy and passes untouched');
  assert.equal(shownWallReason({ reason: 'Restaurants already have a POS — for that.' }), 'Restaurants already have a POS. For that.');
  assert.equal(shownWallReason({ reason: '' }), 'That one is outside our lane.');
  assert.equal(shownWallReason({ reason: 'A free tool does that.' }), 'That one is outside our lane.');

  /* ─── 11. buildTrail ─── */
  // (a) chip 'phone' + strong + tomorrow afternoon + one UTM.
  assert.deepEqual(
    buildTrail({
      want: s1.want,
      tailor: { status: 'idle' },
      answers: STRONG,
      time: { day: 'tomorrow', window: 'afternoon' },
      utms: { utm_source: 'fb' },
    }),
    [
      'Want: The phone nobody answers after hours',
      'Revenue: $1M – $5M / yr',
      'Fit check: STRONG',
      'Does: Trade or service work',
      'Runs on: Rented software',
      'In the room: The owner',
      'Books: Clean',
      'Verdict: strong',
      'First build: The phone after hours. Answered, booked, and filed before anyone calls back.',
      'Best time: Tomorrow, Afternoon',
      'Page: fit',
      'utm_source: fb',
    ]
  );
  // (b) text want + done read + borderline + no time.
  assert.deepEqual(
    buildTrail({
      want: said.want,
      tailor: { status: 'done', read: READ_OK },
      answers: { ...STRONG, who: 'manager' },
      time: { day: '', window: '' },
      utms: {},
    }),
    [
      'Want (typed): "the phone rings and nobody answers it"',
      'Heard: The phone rings and nobody picks up.',
      'Revenue: $1M – $5M / yr',
      'Fit check: BORDERLINE (weak: A manager in the chair. The fitting only works with the owner in the room.)',
      'Does: Trade or service work',
      'Runs on: Rented software',
      'In the room: A manager',
      'Books: Clean',
      'Verdict: borderline',
      'AI fit read: likely',
      'First build: After-hours phone intake.',
      'Best time: not given',
      'Page: fit',
    ]
  );
  // (c) a failed read: no 'Heard:', no 'AI fit read:', no 'First build:'; one pick alone; the below-bar band flag.
  const c = buildTrail({
    want: said.want,
    tailor: { status: 'failed' },
    answers: { ...STRONG, revenue: '$250k – $1M / yr' },
    time: { day: '', window: 'morning' },
    utms: {},
  });
  assert.deepEqual(
    c,
    [
      'Want (typed): "the phone rings and nobody answers it"',
      'Revenue: $250k – $1M / yr',
      'Fit check: BORDERLINE (weak: The revenue band. $250k–$1M can work, but the system pays for itself fastest above that.)',
      'Does: Trade or service work',
      'Runs on: Rented software',
      'In the room: The owner',
      'Books: Clean',
      'Verdict: borderline',
      'Best time: Morning',
      'Page: fit',
    ]
  );
  assert.ok(!c.some((l) => l.startsWith('Heard:') || l.startsWith('AI fit read:') || l.startsWith('First build:')));
  // A typed want is capped at 300 characters in the trail.
  const long = 'x'.repeat(400);
  const capped = buildTrail({ want: { kind: 'text', text: long }, tailor: { status: 'failed' }, answers: STRONG, time: { day: '', window: '' }, utms: {} });
  assert.equal(capped[0], `Want (typed): "${'x'.repeat(300)}"`);
  // Qualified per the revenue band.
  assert.equal(isQualified(STRONG), true);
  assert.equal(isQualified({ revenue: 'Under $250k / yr' }), false);

  /* ─── 12. validateContact ─── */
  const ok = (c) => validateContact({ name: '', phone: '', email: '', ...c });
  assert.deepEqual(ok({ name: '', phone: '3185550123' }), { ok: false, errors: { name: 'Need a first name.' } });
  assert.deepEqual(ok({ name: '   ', phone: '3185550123' }).errors, { name: 'Need a first name.' });
  assert.deepEqual(ok({ name: 'Cory', phone: '318555012' }).errors, { phone: 'Need a number Trevor can call.' });
  assert.deepEqual(ok({ name: 'Cory', phone: '3185550123' }), { ok: true, errors: {} });
  assert.deepEqual(ok({ name: 'Cory', phone: '13185550123' }), { ok: true, errors: {} });
  assert.deepEqual(ok({ name: 'Cory', phone: '23185550123' }).errors, { phone: 'Need a number Trevor can call.' }, '11 digits must start with 1');
  assert.deepEqual(ok({ name: 'Cory', phone: '+1 (318) 555-0123' }), { ok: true, errors: {} });
  assert.deepEqual(ok({ name: 'Cory', phone: '318-555-0123', email: 'cory@' }).errors, {
    email: "That email doesn't look right. Fix it or leave it blank.",
  });
  assert.deepEqual(ok({ name: 'Cory', phone: '318-555-0123', email: '' }), { ok: true, errors: {} });
  assert.deepEqual(ok({ name: 'Cory', phone: '318-555-0123', email: '  cory@edwardsroofing.com ' }), { ok: true, errors: {} });
  const all = ok({ name: '', phone: '', email: 'nope' });
  assert.equal(all.ok, false);
  assert.deepEqual(Object.keys(all.errors).sort(), ['email', 'name', 'phone']);
  assert.equal(normalizePhone('+1 (318) 555-0123'), '13185550123');

  /* ─── 13. thankYouHref ─── */
  assert.equal(thankYouHref({ day: '', window: '' }), '/thank-you?from=fit');
  assert.equal(thankYouHref({ day: 'tomorrow', window: '' }), '/thank-you?from=fit&d=tomorrow');
  assert.equal(thankYouHref({ day: '', window: 'afternoon' }), '/thank-you?from=fit&t=afternoon');
  assert.equal(thankYouHref({ day: 'week', window: 'evening' }), '/thank-you?from=fit&d=week&t=evening');

  console.log('fit-flow: all assertions passed');
} finally {
  rmSync(out, { recursive: true, force: true });
}
