/* ─── THE HARBORMASTER'S LOG ───
   One flat, chronological list of everything that shipped. The ShipLog
   component splits it into the two marquee rows and derives LATEST_SHIP
   from the last entry — so APPEND ONLY, newest last.

   THE HARBORMASTER (daily cron, first light) appends here. Its laws:
   - Only real ships. A day with nothing real gets nothing written.
   - 0–3 chips per day, dates do the bragging, lines stay dry (< ~9 words).
   - Never a client, lead, or staff name. Never a dollar figure except the
     sanctioned $195,882.75. Never a passcode or gated URL.
   - Never edit or delete an existing line. Append after the LAST entry,
     before the closing bracket. */

export const SHIPS = [
  ['AUG 14', 'The AI secretary takes her first live calls'],
  ['AUG 16', 'The fit check starts guarding the front door'],
  ['AUG 22', 'The automation reel — a day running itself'],
  ['AUG 22', 'She learns to read the site out loud'],
  ['AUG 28', 'FixFirst: type your business, it writes the fixes'],
  ['AUG 28', 'The Owned Software Standard, in writing'],
  ['AUG 29', 'The Record — systems publish their own receipts'],
  ['AUG 29', 'The 8-question Software Map intake'],
  ['AUG 29', '"Your New Employee" ships as post and ad'],
  ['AUG 30', 'vs Grok and vs Viktor, side by side'],
  ['AUG 30', 'The secretary takes over the link previews'],
  ['AUG 31', 'The whole site re-cut for phones'],
  ['SEP 1', 'The machine posts its own odds on the boss'],
  ['SEP 1', 'The full blog catalog, back on the shelf'],
  ['SEP 2', 'The site deletes its own bragging — 45 lines'],
  ['SEP 2', 'ALL-CAPS links learn to find lowercase pages'],
  ['SEP 2', 'The drivable OS gets its own stage at /drive'],
  ['SEP 3', 'The secretary learns to be interrupted'],
  ['SEP 3', 'The About page takes its walls off'],
  ['SEP 4', 'The Shipwright — it researches, writes the work order, and waits'],
  ['SEP 4', 'The evidence room — status stamps on every claim'],
  ['SEP 5', 'The communication law: say less, show more — sitewide'],
  ['SEP 5', 'The homepage price becomes an object'],
  ['SEP 5', 'The OS page decides it is the demo'],
  ['SEP 5', 'The handover manifest — all six items, one document'],
  ['SEP 5', 'Owner Mode holds live levers on two pages'],
  ['SEP 5', 'A dealership demo runs serial-to-sold, books that foot'],
  ['SEP 5', 'THE HANDSHAKE — no unit leaves before the check clears'],
  ['SEP 6', 'The Dare goes public — bring your worst problem'],
  ['SEP 6', '"My Bet!" — the ownership thesis, published'],
  ['SEP 7', 'A contractor’s phone secretary answers the missed calls'],
  ['SEP 7', 'Scan the sign, pay the space, pass on your phone'],
  ['SEP 7', 'Roof inspections: photos up, homeowner report out'],
  ['SEP 7', 'A billboard ledger where invoices write their own dates'],
  ['SEP 7', 'Real payment rails built, dormant till the key turns'],
  ['SEP 7', 'A tree service texts back in nine seconds'],
  ['SEP 7', 'Five systems in one Labor Day — all live by dark'],
] as const;

export type Ship = readonly [string, string];
