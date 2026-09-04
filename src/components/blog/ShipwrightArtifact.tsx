'use client';

/* ─── The Shipwright's cycle-one artifact (9/4, reviewer round) ───
 * "That one artifact is worth more than three extra sections of prose."
 * The redacted work order, the authority matrix, and the honest scoreboard,
 * shown as a document instead of described. EVERY line here restates a fact
 * the post body already publishes — nothing new is claimed, and the
 * scoreboard is human-checked and dated per the About-page ONE RULE
 * (nothing may merely look live). Update the STATUS block by hand when the
 * owner decides; this page is a living field report. */

import { useState } from 'react';
import Link from 'next/link';

const MONO = 'font-mono text-[9px] font-black uppercase tracking-[0.18em]';

const STATUS = {
  cycle: '01',
  state: 'Proposal awaiting the owner’s decision',
  codeShipped: '0',
  customersContacted: '0',
  revenueClaimed: '$0.00',
  checked: 'Checked by a person · Sep 4, 2026',
};

const ORDER_ROWS: [string, string][] = [
  ['Cycle', 'Monday, before dawn · cycle one'],
  ['Sources read', 'Its own gap lists and screen-usage events · what the e-commerce market shipped that week · what new technology unlocks'],
  ['Evidence', '114 carts reached checkout and left in fourteen days · $498,691.18 gross cart value · the board showing them was looked at, never worked'],
  ['Selected', 'A morning call queue — the five biggest walkaways, ranked by dollars, freshness, and whether the customer has bought before. Phone numbers first; an AI-drafted script in the company’s own voice.'],
  ['Scoring rule', 'A dollar counts only when the order lands in the books. Never when a button gets tapped.'],
  ['Estimated effort', 'Two and a half days · every file to touch named in the build order'],
  ['Skipped on purpose', '“Buzzing phones before the queue ranks dollars is noise-first plumbing… right build, wrong week.” · “The most technically interesting item on the board, which is exactly the warning: five to seven days of chassis and on day seven the owner feels nothing.”'],
  ['Forbidden', 'Auto-dialing · sending anything to a customer without a person committing it'],
  ['Build authority', 'NONE — nothing builds from research without the owner’s one word: go, or skip'],
];

const AUTHORITY: [string, boolean][] = [
  ['Read its own gap lists', true],
  ['Inspect which screens get looked at, never worked', true],
  ['Research the market and new technology', true],
  ['Write one proposal a week', true],
  ['Modify production code', false],
  ['Contact a customer', false],
  ['Auto-dial anybody', false],
  ['Grade its own homework', false],
];

export default function ShipwrightArtifact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-6 mb-10">
      {/* the honest scoreboard, first */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-border/15 divide-x divide-border/10 mb-6">
        {[
          ['Cycle', STATUS.cycle],
          ['Code shipped', STATUS.codeShipped],
          ['Customers contacted', STATUS.customersContacted],
          ['Revenue claimed', STATUS.revenueClaimed],
        ].map(([l, v]) => (
          <div key={l} className="py-3.5 px-3 text-center">
            <p className="text-xl sm:text-2xl font-black italic tracking-tighter text-foreground leading-none tabular-nums">{v}</p>
            <p className={`${MONO} text-faint mt-1.5 leading-tight`}>{l}</p>
          </div>
        ))}
      </div>

      {/* the artifact */}
      <div className="border border-border/25 rounded-2xl bg-card/10 overflow-hidden">
        <div className="px-5 sm:px-6 pt-5 flex flex-wrap items-baseline justify-between gap-2">
          <p className={`${MONO} text-primary tracking-[0.24em]`}>Shipwright · Cycle 01</p>
          <p className={`${MONO} text-faint`}>Real client · name withheld at the owner’s request</p>
        </div>
        <div className="px-5 sm:px-6 py-4">
          <p className="text-lg sm:text-xl font-black uppercase italic tracking-tight text-foreground leading-tight">
            Abandoned-checkout call queue
          </p>
          <p className="text-sm text-muted-foreground font-medium mt-1">
            114 carts · <span className="text-foreground font-bold">$498,691.18</span> gross cart
            value · est. 2.5 days ·{' '}
            <span className="text-primary font-black uppercase text-xs tracking-wide">{STATUS.state}</span>
          </p>
          <p className={`${MONO} text-faint mt-2`}>
            Gross cart value — not booked revenue, not a recovery forecast
          </p>
        </div>

        {open && (
          <div className="border-t border-border/15 divide-y divide-border/10">
            {ORDER_ROWS.map(([k, v]) => (
              <div key={k} className="px-5 sm:px-6 py-3 grid grid-cols-[120px_1fr] gap-4 items-baseline">
                <p className={`${MONO} text-faint`}>{k}</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{v}</p>
              </div>
            ))}

            {/* the authority matrix — "asks permission" as architecture */}
            <div className="px-5 sm:px-6 py-4">
              <p className={`${MONO} text-faint mb-3`}>Authority matrix</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {AUTHORITY.map(([action, allowed]) => (
                  <p key={action} className="flex items-baseline justify-between gap-3 text-sm font-medium">
                    <span className="text-muted-foreground">{action}</span>
                    <span className={`${MONO} shrink-0 ${allowed ? 'text-emerald-400' : 'text-red-400'}`}>
                      {allowed ? 'Allowed' : 'Blocked'}
                    </span>
                  </p>
                ))}
              </div>
            </div>

            {/* the shape of a cycle */}
            <div className="px-5 sm:px-6 py-4 text-center">
              <p className={`${MONO} text-faint mb-2`}>The shape of a cycle</p>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground leading-loose">
                gap lists · market · new unlocks
                <span className="block text-primary" aria-hidden>↓</span>
                one ranked proposal
                <span className="block text-primary" aria-hidden>↓</span>
                <span className="text-foreground">owner gate: go / skip</span>
              </p>
            </div>
          </div>
        )}

        <div className="border-t border-border/15 px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="text-xs font-black uppercase tracking-wide text-primary hover:underline"
          >
            {open ? 'Close the work order' : 'Open the redacted work order →'}
          </button>
          <Link href="/blog/giving-owners-full-control" className={`${MONO} text-faint hover:text-foreground transition-colors`}>
            The same walls as Owner Mode
          </Link>
        </div>
      </div>
      <p className={`${MONO} text-faint mt-3`}>{STATUS.checked} · this page updates when the owner decides</p>
    </div>
  );
}
