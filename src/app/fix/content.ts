/* ─── /fix/[slug] — paid problem-landers (9/5) ───
   Three variants, one law: the visitor lands on the problem the ad named,
   sees ONE real proof, and books the walkthrough with a thumb. The page
   produces an APPOINTMENT — never a checkout. No dev diary, no site nav.

   PROOF LAW: every proof block below REUSES a published case file from
   src/lib/case-files.ts / the case-studies evidence room — same names, same
   words, same statuses. Nothing here is authored fresh; if a fact changes in
   the record, change it there and mirror it here. Never invent a quote,
   figure, or client. */

export type FixSlug = 'missed-calls' | 'paperwork' | 'disconnected-systems';

export interface FixProof {
  /** Which published case file this reuses — the whole block is drawn from it. */
  caseName: string;
  trade: string;
  status: 'LIVE' | 'RUNNING IN PARALLEL';
  /** Owner's published quote, verbatim from the case record (optional). */
  quote?: string;
  quoteBy?: string;
  before: string;
  after: string;
  receipt: string;
  receiptLabel: string;
  /** Plain statement of what this example shows for THIS problem. */
  shows: string;
}

export interface FixVariant {
  slug: FixSlug;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  headlineAccent: string;
  /** One plain problem line under the headline — drawn from published copy. */
  problem: string;
  proof: FixProof;
}

export const FIX_VARIANTS: Record<FixSlug, FixVariant> = {
  'missed-calls': {
    slug: 'missed-calls',
    metaTitle: 'The Calls You Miss Are Jobs You Lose',
    metaDescription:
      'After-hours calls answered, booked, and filed while you sleep. Custom software with AI doing the repetitive work. Price public. Book a 30-minute walkthrough.',
    headline: 'The Calls You Miss',
    headlineAccent: 'Are Jobs You Lose.',
    problem:
      'The 9 PM call goes to voicemail. Whoever answers first gets the work.',
    // Doggett proof PULLED 9/5 (client hasn't seen his app - the LIVE stamp
    // and present-tense delivery copy were overclaims). DJ's published
    // after-hours story stands in; every line mirrors the case record.
    proof: {
      caseName: 'DJ\u2019s Bail Bonds',
      trade: 'Bail Bonds \u00b7 Alexandria',
      status: 'RUNNING IN PARALLEL',
      before:
        'Bail work happens at midnight. The paperwork kept office hours \u2014 one pen filled out every application that came through the door, the same names copied paper to paper.',
      after:
        'Now the office texts a link the moment the call comes in, and the application writes itself on a phone while the office sleeps. Every answer saves as they type.',
      receipt: '11:52 PM',
      receiptLabel: 'a bail application filling itself out, hours after the office closed (demo data)',
      shows:
        'This is a bail office. Yours might be a shop or a crew \u2014 the after-hours call dies the same way in both.',
    },
  },
  paperwork: {
    slug: 'paperwork',
    metaTitle: 'Your Office Types The Same Name Five Times',
    metaDescription:
      'Paperwork that fills itself out. Custom software with AI doing the repetitive typing. Price public. Book a 30-minute walkthrough.',
    headline: 'Your Office Types The Same Name',
    headlineAccent: 'Five Times A Day.',
    problem:
      'The same names, copied paper to paper, for years. One missed line and somebody eats the loss.',
    proof: {
      caseName: 'DJ’s Bail Bonds',
      trade: 'Bail Bonds · Alexandria',
      status: 'RUNNING IN PARALLEL',
      quote: 'She’s never gonna have to use that pen, ever again.',
      quoteBy: 'DJ, out loud, in front of everybody',
      before:
        'One pen filled out every application that came through the door — defendant file, co-signer file, three references each, payment sheets. The same names, copied paper to paper, for years.',
      after:
        'A family opens the link at midnight and the application writes itself while the office sleeps. Every payment on every plan prints, every time — the code will not hide one.',
      receipt: '11:52 PM',
      receiptLabel: 'a bail application filling itself out, hours after the office closed (demo data)',
      shows:
        'This is a bail office. The paperwork is different in yours — the retyping is not.',
    },
  },
  'disconnected-systems': {
    slug: 'disconnected-systems',
    metaTitle: 'Five Programs. None Of Them Talk.',
    metaDescription:
      'One custom system instead of five programs that don’t talk. AI does the repetitive work. Price public. Book a 30-minute walkthrough.',
    headline: 'Five Programs.',
    headlineAccent: 'None Of Them Talk.',
    problem:
      'The business lives in eight places at once. You are the only thing connecting them.',
    proof: {
      caseName: 'Roxanne’s OS',
      trade: 'Wholesale Nursery · Central Louisiana',
      status: 'LIVE',
      quote: 'When can I cancel QuickBooks?',
      quoteBy: 'what she said after the demo',
      before:
        'The business lived in eight places at once: a QuickBooks she never opened, Google Sheets, Apple Notes screenshots texted to the crew, a drawer of old invoices, and her own memory. Orders arrived from fifteen brokers in fifteen formats.',
      after:
        'She pastes an order in exactly as it came. Every line lands or holds in red — never silently dropped. Order intake, pull sheets, receivables, and inventory in one system fitted to the nursery.',
      receipt: 'Lines in = lines out',
      receiptLabel: 'the rule one dropped order wrote, now enforced by the system',
      shows:
        'This is a wholesale nursery. Swap the plants for your parts, jobs, or orders — the eight places are the same.',
    },
  },
};

export const FIX_SLUGS = Object.keys(FIX_VARIANTS) as FixSlug[];
