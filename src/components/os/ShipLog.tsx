/* ─── THE SHIP LOG (Trevor 8/31: "let em know they cant keep up even if
   they tried") ───
   The receipts version of that sentence: every line below is a real thing
   that shipped in August, dated, live right now on this site or inside a
   client's system. Two counter-scrolling marquee rows — pure CSS, no JS,
   pauses on hover, collapses to a static wrapped list under
   prefers-reduced-motion. Per the voice law the copy stays dry: the dates
   do the bragging. Add new ships to the arrays; the stat line counts them
   itself. */

import { SHIPS as LOG, type Ship } from './harbormaster-log';

/* The flat chronological log lives in harbormaster-log.ts (THE HARBORMASTER —
   the daily first-light cron — appends there). The moving tracks feature only
   the heavyweight work (systems + capabilities); site-and-story entries live
   in the full log below, so the record hides nothing and the tracks carry
   only finished output. Alternating split keeps both tracks balanced. */
const FEATURED: Ship[] = LOG.filter((s) => s[2] !== 'site');
const ROW_A: Ship[] = FEATURED.filter((_, i) => i % 2 === 0);
const ROW_B: Ship[] = FEATURED.filter((_, i) => i % 2 === 1);

/** Newest entry — the About page's live strip reads it so "last ship" has
 *  exactly one source of truth. */
export const LATEST_SHIP = LOG[LOG.length - 1];

const N_SYSTEM = LOG.filter((s) => s[2] === 'system').length;

/* Rebuilt on every Harbormaster push, so the day count stays true without
   anyone touching it. */
const DAYS = Math.max(1, Math.round((Date.now() - new Date('2026-08-14T00:00:00-05:00').getTime()) / 86400000));

function Chip({ date, item }: { date: string; item: string }) {
  return (
    <span className="inline-flex items-center gap-3 shrink-0 border border-border/40 bg-card/25 rounded-[3px] pl-3.5 pr-4 py-2 whitespace-nowrap">
      <span className="font-mono text-[10px] font-black tracking-[0.18em] text-primary">{date}</span>
      <span className="text-[15px] font-bold text-foreground tracking-tight">{item}</span>
    </span>
  );
}

function Row({ items, reverse = false }: { items: ReadonlyArray<Ship>; reverse?: boolean }) {
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
    <section id="ship-log" className="relative pt-10 pb-24 lg:pt-14 lg:pb-28 overflow-hidden scroll-mt-24">
      <div className="max-w-[1000px] mx-auto px-6 text-center mb-8">
        <p className="text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4">
          Work Log
        </p>
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
          Keep up.
          <span className="block text-primary">With me.</span>
        </h2>

        {/* The flex. Two huge numbers, small labels, one orange punch. */}
        <div className="grid grid-cols-2 gap-6 max-w-sm sm:max-w-md mx-auto items-end mt-8">
          <div>
            <div className="text-[88px] sm:text-[104px] lg:text-[128px] font-black leading-[0.85] tracking-tighter text-foreground tabular-nums">{N_SYSTEM}</div>
            <div className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-2">Systems</div>
          </div>
          <div>
            <div className="text-[88px] sm:text-[104px] lg:text-[128px] font-black leading-[0.85] tracking-tighter text-foreground tabular-nums">{DAYS}</div>
            <div className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-2">Days</div>
          </div>
        </div>
        <div className="text-primary font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-none mt-4">
          ONE SHOP.
        </div>
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

      {/* The skeptic's door: every entry, readable, nothing truncated. */}
      <details className="max-w-xl mx-auto mt-10 px-6 group">
        <summary className="cursor-pointer list-none text-center font-mono text-[11px] font-black uppercase tracking-[0.12em] text-primary select-none">
          Read the whole log <span className="group-open:hidden">↘</span><span className="hidden group-open:inline">↖</span>
        </summary>
        <ul className="mt-6 space-y-2.5 text-left">
          {[...LOG].reverse().map(([date, item, cat]) => (
            <li key={date + item} className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] font-black tracking-[0.15em] text-primary shrink-0 w-14">{date}</span>
              <span className="text-sm font-medium text-foreground/85 leading-snug">{item}</span>
              <span className="ml-auto font-mono text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground/50 shrink-0">{cat === 'site' ? 'site & story' : cat}</span>
            </li>
          ))}
        </ul>
      </details>

      {/* Extra bottom clearance keeps the floating chat control out of the
          button's collision zone on phones. */}
      <div className="text-center mt-14 pb-10 sm:pb-0">
        <a
          href="/dare"
          className="inline-block border border-primary/40 text-primary font-black tracking-tight rounded-full px-7 py-3.5 text-base hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Now put us to work on yours &rarr;
        </a>
      </div>

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
