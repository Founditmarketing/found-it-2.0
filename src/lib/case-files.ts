/* ─── The case files — single source of truth (9/4) ───
   Extracted from /before-after so every page that cites the record (the
   Before & After page, the case-studies evidence room, anywhere counts
   appear) reads the SAME files and the SAME statuses. The About-page law
   applies: nothing may merely look live — a status here is a published
   assertion, and counts are DERIVED from this array, never hand-typed.
   Change a status in one place and every page follows. */

export type CaseFile = {
  name: string;
  trade: string;
  status: 'LIVE' | 'RUNNING IN PARALLEL';
  filed: string;
  beforeQuote?: string;
  before: string[];
  work: string;
  after: string[];
  receipt: string;
  receiptLabel: string;
  stillTrue: string;
  img?: { src: string; alt: string };
  /* Full desktop dashboards are illegible at phone width — imgPhone is a tight
     crop of the story-relevant card (the Roxanne focus pattern), served below
     sm with the full shot on sm+. */
  imgPhone?: { src: string; alt: string };
};

/** Stable anchor id for a case on /before-after, DERIVED from its name —
    never hand-typed ("DJ’s Bail Bonds" → "djs-bail-bonds"). Any page that
    cites a case deep-links it with `/before-after#${caseAnchor(name)}`. */
export function caseAnchor(name: string): string {
  return name
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const CASE_FILES: CaseFile[] = [
  {
    name: 'Roxanne’s OS',
    trade: 'Wholesale Nursery · Central Louisiana',
    status: 'LIVE',
    filed: 'Filed August 2026',
    beforeQuote: 'When can I cancel QuickBooks?',
    before: [
      'The business lived in eight places at once: a QuickBooks she never opened, Google Sheets, Apple Notes screenshots texted to the crew, a drawer of old invoices, and her own memory.',
      'Orders arrived from fifteen brokers in fifteen formats — texts, emails, photos of handwriting. One hand-copied order dropped its last line: 44 plants, about $1,000 in freight, nearly left behind.',
    ],
    work:
      'Order intake, pull sheets, receivables, and living inventory fitted to the nursery. Her records migrated in. The books run beside her QuickBooks, matched against the bank, until she says kill it.',
    after: [
      'She pastes an order in exactly as it came. Every line lands or holds in red — never silently dropped.',
      'Seven months of her books rebuilt straight from the bank statements, every month tied to the penny. The quote above is what she said after the demo.',
    ],
    receipt: 'Lines in = lines out',
    receiptLabel: 'the rule the 44 plants wrote, now enforced by the system',
    stillTrue:
      'Her bookkeeper stays. Prices never print on crew-facing paper — her rule, written into the code.',
    img: {
      src: '/images/blog/roxanne-blog-intake-focus-v1.png',
      alt: 'Order intake: every line captured, the unreadable one held in red (demo data)',
    },
  },
  {
    name: 'DJ’s Bail Bonds',
    trade: 'Bail Bonds · Alexandria',
    status: 'RUNNING IN PARALLEL',
    filed: 'Filed August 2026',
    beforeQuote: 'She’s never gonna have to use that pen, ever again.',
    before: [
      'One pen filled out every application that came through the door — defendant file, co-signer file, three references each, payment sheets. The same names, copied paper to paper, for years.',
      'The printed payment form had six lines. Plans often ran twelve payments. Payments seven through twelve were real and owed — they just never appeared on the paper anyone signed.',
    ],
    work:
      'Applications that fill themselves out on the defendant’s phone, payment plans that populate their own dates, court paper that prints from the file. The old software keeps running; every night the two totals go up side by side.',
    after: [
      'A family opens the link at midnight and the application writes itself while the office sleeps. Every payment on every plan prints, every time — the code will not hide one.',
      'The quote above is what DJ said, out loud, in front of everybody.',
    ],
    receipt: '11:52 PM',
    receiptLabel: 'a bail application filling itself out, hours after the office closed (demo data)',
    stillTrue:
      'The system is banned from answering his phone — the ban is printed on its front screen. Jail calls come collect; a robot answering kills the call, and that call is the whole business. The phone stays human, forever.',
    img: {
      src: '/images/blog/djs-blog-today-v1.png',
      alt: 'The morning screen: money due, applications in flight, court dates (demo data)',
    },
    imgPhone: {
      src: '/images/blog/djs-blog-today-phone-v1.png',
      alt: 'Zoomed: the money-due list — names, due dates, dollars — and an application filling itself in (demo data)',
    },
  },
  {
    name: 'Doggett Law Firm',
    trade: 'Injury & Family Law · Alexandria',
    status: 'LIVE',
    filed: 'Filed August 2026',
    before: [
      'A one-man firm, third generation. The big cases come in by phone, and a solo lawyer’s phone doesn’t keep office hours — the 9 PM call went to voicemail.',
      'He was about to hire somebody just to catch it. A desk seat runs about $2,500 a month around here.',
    ],
    work:
      'An AI secretary fitted to the firm: answers after hours, takes the story, books the consult, opens the file, drafts the welcome text — and waits for his tap to send anything.',
    after: [
      'The dog-bite call at supper gets answered, booked, and filed. He reads all of it with his coffee on a screen that greets him by name.',
      'The demand letter drafts itself from the file, on his letterhead, under a stamp it cannot sign.',
    ],
    receipt: '$2,500/mo',
    receiptLabel: 'the desk seat he didn’t have to hire',
    stillTrue:
      'She will not calculate a deadline and cannot touch a dollar of client money — the two things that end law careers stay in Kenneth’s hands. He types every date himself; ignore one two days and it turns red and gets loud.',
    img: {
      src: '/images/blog/doggett-blog-today-focus-v1.png',
      alt: 'The morning screen: calls the secretary took, dates needing his eyes (demo data)',
    },
    imgPhone: {
      src: '/images/blog/doggett-blog-secretary-phone-v1.png',
      alt: 'Zoomed: the secretary’s log — calls answered, drafts waiting for his approval, nothing sends itself (demo data)',
    },
  },
  {
    name: 'Walls Tree Service',
    trade: 'Tree Work & Land Clearing · Louisiana',
    status: 'LIVE',
    filed: 'Filed August 2026',
    before: [
      'When Louisiana lets a road job, every bidder’s price on every line item becomes public record. Going back years. Read by almost no one with a chainsaw.',
      'The big contractors pay whole departments to read those filings. Tyler found out about work after it was gone — a $2.5–$5 million job sat in a public filing system for weeks, written for lawyers.',
    ],
    work:
      'A bid department built into his system: it reads the state’s filings daily, matches clearing work, prices it from what actually won, and hands him the paper.',
    after: [
      'LA 557 was on his board before his coffee got cold. One tap prices a sub-quote from real winning bids, sources printed on page two.',
      'The week this was written, nine live jobs sat on his board worth $50M–$81M in lettings.',
    ],
    receipt: '78,019',
    receiptLabel: 'public bid lines his machine has read so he never guesses a price',
    stillTrue:
      'It is banned from bidding. It never submits in his name, and when an item has no history, the box comes up blank — it does not invent numbers. The handshake stays his.',
    img: {
      src: '/images/blog/walls-scout-board-v1.png',
      alt: 'The board: open public bids matched to clearing work, scored and priced',
    },
    imgPhone: {
      src: '/images/blog/walls-scout-la557-phone-v1.png',
      alt: 'Zoomed: LA 557 on the board — matched, scored, priced at $2.5M–$5M from real winning bids',
    },
  },
  {
    name: 'The Books Case',
    trade: 'Client anonymous · the numbers are not',
    status: 'RUNNING IN PARALLEL',
    filed: 'Filed August 2026',
    before: [
      'Her accounting software swore her bank account was millions of dollars underwater. Her real balance was healthy.',
      'Nobody typed the lie in. The books had drifted from the bank, one unmatched month at a time, for years — and the software never said a word.',
    ],
    work:
      'Seven straight months of her books rebuilt from the bank statements themselves. The new books run beside the software she pays for today, matched to the cent, night after night.',
    after: [
      'Every month ties to the penny — from the January opening balance to the July close, exactly.',
      'She knows her real numbers for the first time in years. The old software still runs; it just isn’t trusted alone anymore.',
    ],
    receipt: '7 months',
    receiptLabel: 'rebuilt from bank statements, every one tied to the penny',
    stillTrue:
      'Her accountant stays — the system hands over clean numbers, not a shoebox. Payroll and tax filing are never built, at any price. And she stays anonymous because her business is hers; the method doesn’t need her name to be true.',
    img: {
      src: '/images/blog/books-blog-payables-v1.png',
      alt: 'Bills and checks with the badge proving Accounts Payable ties to the penny (demo data)',
    },
  },
];

/** Derived, never hand-typed — the proof strip reads these. */
export const CASE_COUNTS = {
  total: CASE_FILES.length,
  live: CASE_FILES.filter((f) => f.status === 'LIVE').length,
  parallel: CASE_FILES.filter((f) => f.status === 'RUNNING IN PARALLEL').length,
} as const;
