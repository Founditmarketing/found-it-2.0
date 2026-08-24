/* ─── The Fit Check: questions + deterministic verdict ───
   Five chip-tap answers in, one honest verdict out. Pure and total — no
   randomness, no scoring theater. Tested by scripts/test-fit-verdict.mjs.
   HOUSE LAWS: price references come from OS_PRICING only; restaurants and
   "just send info" can NEVER reach STRONG; the NOT-A-FIT tier sells nothing
   and captures no email — walking away clean is the flex. */

import { REVENUE_BANDS, OS_PRICING } from './site';

export type Vertical = 'dealer-parts' | 'trade' | 'retail' | 'restaurant' | 'other';
export type RunsOn = 'rented' | 'qb-paper' | 'spreadsheets' | 'nothing';
export type Who = 'owner' | 'manager' | 'send-info';
export type Books = 'clean' | 'behind' | 'dont-ask';

export interface FitAnswers {
  vertical: Vertical;
  /** A REVENUE_BANDS label, verbatim — the bands are the single source of truth. */
  revenue: string;
  runsOn: RunsOn;
  who: Who;
  books: Books;
}

export interface FitOption {
  value: string;
  label: string;
}

export interface FitQuestion {
  id: keyof FitAnswers;
  prompt: string;
  options: FitOption[];
}

/** The five questions, in order. Chips only — nobody types until the end. */
export const FIT_QUESTIONS: FitQuestion[] = [
  {
    id: 'vertical',
    prompt: 'What does the business do?',
    options: [
      { value: 'dealer-parts', label: 'Dealer / parts & equipment' },
      { value: 'trade', label: 'Trade or service work' },
      { value: 'retail', label: 'Retail store' },
      { value: 'restaurant', label: 'Restaurant or bar' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'revenue',
    prompt: "What's it doing a year, roughly?",
    options: REVENUE_BANDS.map((b) => ({ value: b.label, label: b.label })),
  },
  {
    id: 'runsOn',
    prompt: 'What runs it today?',
    options: [
      { value: 'rented', label: 'Rented software' },
      { value: 'qb-paper', label: 'QuickBooks + paper' },
      { value: 'spreadsheets', label: 'Spreadsheets' },
      { value: 'nothing', label: 'Nothing, really' },
    ],
  },
  {
    id: 'who',
    prompt: "Who'd sit with us for the hour?",
    options: [
      { value: 'owner', label: 'The owner' },
      { value: 'manager', label: 'A manager' },
      { value: 'send-info', label: 'Just send info' },
    ],
  },
  {
    id: 'books',
    prompt: 'How are the books?',
    options: [
      { value: 'clean', label: 'Clean' },
      { value: 'behind', label: 'Behind' },
      { value: 'dont-ask', label: "Don't ask" },
    ],
  },
];

export type FitTier = 'strong' | 'borderline' | 'no';

export interface FitVerdict {
  tier: FitTier;
  /** BORDERLINE only: the one weak answer, named plainly. */
  weakness?: string;
  /** NOT A FIT only: one kind sentence why. */
  reason?: string;
  /** NOT A FIT only: one genuinely useful free thing — a read, not a capture. */
  pointer?: { label: string; href: string };
}

const UNDER_250K = REVENUE_BANDS[0].label; // 'Under $250k / yr' — the unqualified band
const BAND_250K_1M = REVENUE_BANDS[1].label; // qualified, but below the sweet spot

/** Free reads, no email gate — the only thing the NOT-A-FIT tier points at. */
const READ_MAP = { label: 'What we’d show you on the call, a free read', href: '/blog/what-is-a-software-map' };
const READ_RENT = { label: 'The Rent Isn’t the Problem. The Hostage Is. — a free read', href: '/blog/rented-software-no-data-rights' };

/**
 * The verdict. Deterministic and honest:
 * - Hard walls (restaurant · under $250k · "just send info") → NOT A FIT.
 * - Otherwise count weak answers ($250k–$1M · a manager · "don't ask" books):
 *   0 → STRONG, 1 → BORDERLINE (named), 2+ → NOT A FIT.
 */
export function fitVerdict(a: FitAnswers): FitVerdict {
  // Hard walls — the true turn-downs, checked in the order asked.
  if (a.vertical === 'restaurant') {
    return {
      tier: 'no',
      reason:
        "We don't build for restaurants — a purpose-built restaurant POS already does that job well, and custom software wouldn't beat it.",
      pointer: READ_RENT,
    };
  }
  if (a.revenue === UNDER_250K) {
    return {
      tier: 'no',
      reason: `Under $250k a year, ${OS_PRICING.monthly} a month is too big a slice of the business. We'd be a bad buy — so we won't sell you one.`,
      pointer: READ_MAP,
    };
  }
  if (a.who === 'send-info') {
    return {
      tier: 'no',
      reason:
        "We only build with the owner in the room. There's no info packet that can size up a business.",
      pointer: READ_MAP,
    };
  }

  const weaknesses: string[] = [];
  if (a.revenue === BAND_250K_1M) {
    weaknesses.push(
      'The revenue band. $250k–$1M is workable, but below the size where a system like this pays for itself fastest.'
    );
  }
  if (a.who === 'manager') {
    weaknesses.push(
      'A manager in the chair. Managers start great conversations — but the fitting only works with the owner in the room.'
    );
  }
  if (a.books === 'dont-ask') {
    weaknesses.push(
      "The books. “Don't ask” is exactly what the nightly penny-match untangles — but the owner has to be willing to open them."
    );
  }

  if (weaknesses.length === 0) return { tier: 'strong' };
  if (weaknesses.length === 1) return { tier: 'borderline', weakness: weaknesses[0] };
  return {
    tier: 'no',
    reason:
      "More than one answer lands outside our lane — and we'd rather tell you now than after you've paid us.",
    pointer: READ_MAP,
  };
}

/** Human-readable answer labels for the lead trail (email body attribution). */
export function fitTrail(a: FitAnswers, verdict: FitVerdict): string[] {
  const label = (id: keyof FitAnswers, value: string) =>
    FIT_QUESTIONS.find((q) => q.id === id)?.options.find((o) => o.value === value)?.label ?? value;
  return [
    `Fit check: ${verdict.tier.toUpperCase()}${verdict.weakness ? ` (weak: ${verdict.weakness})` : ''}`,
    `Does: ${label('vertical', a.vertical)}`,
    `Runs on: ${label('runsOn', a.runsOn)}`,
    `In the room: ${label('who', a.who)}`,
    `Books: ${label('books', a.books)}`,
  ];
}
