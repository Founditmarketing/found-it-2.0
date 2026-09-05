/* ─── THE SHIP LOG (Trevor 8/31: "let em know they cant keep up even if
   they tried") ───
   The receipts version of that sentence: every line below is a real thing
   that shipped in August, dated, live right now on this site or inside a
   client's system. Two counter-scrolling marquee rows — pure CSS, no JS,
   pauses on hover, collapses to a static wrapped list under
   prefers-reduced-motion. Per the voice law the copy stays dry: the dates
   do the bragging. Add new ships to the arrays; the stat line counts them
   itself. */

const ROW_A = [
  ['AUG 14', 'The AI secretary takes her first live calls'],
  ['AUG 16', 'The fit check starts guarding the front door'],
  ['AUG 22', 'The automation reel — a day running itself'],
  ['AUG 22', 'She learns to read the site out loud'],
  ['AUG 28', 'FixFirst: type your business, it writes the fixes'],
  ['AUG 28', 'The Owned Software Standard, in writing'],
  ['SEP 1', 'The machine posts its own odds on the boss'],
  ['SEP 2', 'The site deletes its own bragging — 45 lines'],
  ['SEP 4', 'The Shipwright — it researches, writes the work order, and waits'],
  ['SEP 5', 'The communication law: say less, show more — sitewide'],
  ['SEP 5', 'The homepage price becomes an object'],
  ['SEP 5', 'The OS page decides it is the demo'],
] as const;

const ROW_B = [
  ['AUG 29', 'The Record — systems publish their own receipts'],
  ['AUG 29', 'The 8-question Software Map intake'],
  ['AUG 29', '"Your New Employee" ships as post and ad'],
  ['AUG 30', 'vs Grok and vs Viktor, side by side'],
  ['AUG 30', 'The secretary takes over the link previews'],
  ['AUG 31', 'The whole site re-cut for phones'],
  ['SEP 1', 'The full blog catalog, back on the shelf'],
  ['SEP 2', 'ALL-CAPS links learn to find lowercase pages'],
  ['SEP 2', 'The drivable OS gets its own stage at /drive'],
  ['SEP 3', 'The secretary learns to be interrupted'],
  ['SEP 3', 'The About page takes its walls off'],
  ['SEP 4', 'The evidence room — status stamps on every claim'],
  ['SEP 5', 'The handover manifest — all six items, one document'],
  ['SEP 5', 'Owner Mode holds live levers on two pages'],
] as const;

/** Newest entry — the About page's live strip reads it so "last ship" has
 *  exactly one source of truth. */
export const LATEST_SHIP = ROW_B[ROW_B.length - 1];

const SHIPS = ROW_A.length + ROW_B.length;

function Chip({ date, item }: { date: string; item: string }) {
  return (
    <span className="inline-flex items-center gap-3 shrink-0 border border-border/25 bg-card/15 rounded-full pl-4 pr-5 py-2.5 whitespace-nowrap">
      <span className="font-mono text-[10px] font-black tracking-[0.2em] text-primary">{date}</span>
      <span className="text-sm font-bold text-foreground/85 tracking-tight">{item}</span>
    </span>
  );
}

function Row({ items, reverse = false }: { items: ReadonlyArray<readonly [string, string]>; reverse?: boolean }) {
  // Track holds the list twice; the loop translates exactly one list-width.
  return (
    <div className="shiplog-row overflow-hidden">
      <div className={`shiplog-track flex w-max gap-3 ${reverse ? 'shiplog-reverse' : ''}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-3 pr-3" data-copy={copy}>
            {items.map(([date, item]) => (
              <Chip key={date + item} date={date} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShipLog() {
  return (
    <section id="ship-log" className="relative py-16 lg:py-24 overflow-hidden scroll-mt-24">
      <div className="max-w-[1000px] mx-auto px-6 text-center mb-10">
        <p className="text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-5">
          The Ship Log · Since Aug 14 · All of It Real
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
          Keep Up.
        </h2>
        <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          Everything below shipped in the last three weeks, and every line is live right now — on this
          site or inside a client&rsquo;s system.
        </p>
      </div>

      {/* The moving rows are decoration to a screen reader; the sr-only list
          below is the real content, read once. */}
      <div aria-hidden className="space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
      <ul className="sr-only">
        {[...ROW_A, ...ROW_B].map(([date, item]) => (
          <li key={date + item}>{date}: {item}</li>
        ))}
      </ul>

      <p className="text-center font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-muted-foreground mt-10">
        {SHIPS} ships &middot; 22 days &middot; <span className="text-primary">yours runs at the same pace</span>
      </p>

      {/* dangerouslySetInnerHTML, not a text child: the server HTML-escapes
          the `>` combinators in style text while the client doesn't, and the
          mismatch made React throw away and re-render the whole document —
          every page flashed background-only for seconds before hydrating. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .shiplog-track { animation: shiplog-scroll 55s linear infinite; }
        .shiplog-track.shiplog-reverse { animation-direction: reverse; }
        .shiplog-row:hover .shiplog-track { animation-play-state: paused; }
        @keyframes shiplog-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .shiplog-track { animation: none; width: auto; flex-wrap: wrap; justify-content: center; }
          .shiplog-track > div[data-copy="1"] { display: none; }
          .shiplog-track > div { flex-wrap: wrap; justify-content: center; }
        }
      `,
        }}
      />
    </section>
  );
}
