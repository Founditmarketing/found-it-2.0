/* ─── THE HARBORMASTER'S LOG ───
   One flat, chronological list of everything that shipped. The ShipLog
   component splits it into the two marquee rows and derives LATEST_SHIP
   from the last entry — so APPEND ONLY, newest last.

   THE HARBORMASTER (daily cron, first light) appends here. Entry format:
   ['MMM D', 'dry line', category] where category is exactly one of:
   'system' (a whole system put in someone's hands), 'capability' (a real
   feature added to a system or the site's machinery), 'site' (site copy,
   story, pages, presentation). Never write summary chips that re-count
   other entries. Its laws:
   - Only real ships. A day with nothing real gets nothing written.
   - 0–3 chips per day, dates do the bragging, lines stay dry (< ~9 words).
   - Never a client, lead, or staff name. Never a dollar figure except the
     sanctioned $195,882.75. Never a passcode or gated URL.
   - Never edit or delete an existing line. Append after the LAST entry,
     before the closing bracket. */

export const SHIPS = [
  ['AUG 14', 'The AI secretary takes her first live calls', 'capability'],
  ['AUG 16', 'The fit check starts guarding the front door', 'capability'],
  ['AUG 22', 'The automation reel — a day running itself', 'site'],
  ['AUG 22', 'She learns to read the site out loud', 'capability'],
  ['AUG 28', 'FixFirst: type your business, it writes the fixes', 'capability'],
  ['AUG 28', 'The Owned Software Standard, in writing', 'site'],
  ['AUG 29', 'The Record — systems publish their own receipts', 'capability'],
  ['AUG 29', 'The 8-question Software Map intake', 'capability'],
  ['AUG 29', '"Your New Employee" ships as post and ad', 'site'],
  ['AUG 30', 'vs Grok and vs Viktor, side by side', 'site'],
  ['AUG 30', 'The secretary takes over the link previews', 'capability'],
  ['AUG 31', 'The whole site re-cut for phones', 'site'],
  ['SEP 1', 'The machine posts its own odds on the boss', 'site'],
  ['SEP 1', 'The full blog catalog, back on the shelf', 'site'],
  ['SEP 2', 'The site deletes its own bragging — 45 lines', 'site'],
  ['SEP 2', 'The site fixes its own broken links', 'capability'],
  ['SEP 2', 'The drivable OS gets its own stage at /drive', 'system'],
  ['SEP 3', 'The secretary learns to be interrupted', 'capability'],
  ['SEP 3', 'The About page takes its walls off', 'site'],
  ['SEP 4', 'The Shipwright — it researches, writes the work order, and waits', 'system'],
  ['SEP 4', 'The evidence room — status stamps on every claim', 'site'],
  ['SEP 5', 'The communication law: say less, show more — sitewide', 'site'],
  ['SEP 5', 'The homepage price becomes an object', 'site'],
  ['SEP 5', 'The software page becomes the demo itself', 'site'],
  ['SEP 5', 'The handover manifest — all six items, one document', 'capability'],
  ['SEP 5', 'Owner Mode holds live levers on two pages', 'capability'],
  ['SEP 5', 'A dealership demo, serial to sold, books balanced', 'system'],
  ['SEP 5', 'THE HANDSHAKE — no unit leaves before the check clears', 'capability'],
  ['SEP 6', 'The Dare goes public — bring your worst problem', 'site'],
  ['SEP 6', '"My Bet!" — the ownership thesis, published', 'site'],
  ['SEP 7', 'A contractor’s phone secretary answers the missed calls', 'system'],
  ['SEP 7', 'Scan the sign, pay the space, pass on your phone', 'system'],
  ['SEP 7', 'Roof inspections: photos up, homeowner report out', 'capability'],
  ['SEP 7', 'A billboard ledger where invoices write their own dates', 'system'],
  ['SEP 7', 'Real card payments wired, waiting on one key', 'capability'],
  ['SEP 7', 'A tree service texts back in nine seconds', 'system'],
  ['SEP 7', 'A nursery lander: text order in, pull sheet out', 'site'],
  ['SEP 7', 'The blog earns a Google preferred-source button', 'capability'],
  ['SEP 9', 'The setup fee is dead — the price is the price', 'site'],
  ['SEP 9', 'Orders get signed with a finger, then paid', 'capability'],
  ['SEP 9', 'Billboards answer what a board earned', 'capability'],
] as const;

export type ShipCategory = 'system' | 'capability' | 'site';
export type Ship = readonly [string, string, ShipCategory];
