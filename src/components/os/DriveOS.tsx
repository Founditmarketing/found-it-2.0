'use client';

/* ═══ DRIVE THE OS — the flagship's first viewport ═══
   THESIS: the flagship demos itself. A drivable, fully-simulated Found It OS
   sits in the first viewport; the visitor rings a sale, tries to edit
   history, chases money, and watches the midnight check compute to $0.00.
   Refused: the category default (feature list + screenshot carousel).
   OWN-WORLD: the house dark cockpit (ink + #FF5500 command accent),
   deepened with ledger emerald for money-truth and receipt-paper cream for
   the physical artifact; Outfit italic caps display, mono for data, glass
   panels over ambient glow.
   STORY: "I drove it. It caught me trying to cheat the books. The numbers
   tied." → Show Me What You'd Build.
   FIRST VIEWPORT: compact h1, then this window at full width; primary CTA
   directly under the window's edge.
   FORM: user-pinned "Drive the OS" (Trevor, 9/2) — pinned choice, no roll.
   FINISH: unreviewed and undocumented is unfinished; this build ends with
   the finish review, the verdict, and DESIGN.md.

   LAWS: demo data only (every name invented, badge always visible); no
   guarantee words; the AI drafts, never sends — the owner's tap is the law
   here exactly as it is in the real systems. */

import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BookOpenCheck,
  CircleDollarSign,
  LayoutDashboard,
  Pencil,
  PhoneCall,
  Receipt,
} from 'lucide-react';

/* ─── demo world ─── */

const SHOP = 'Cypress Tire & Auto';

type Entry = {
  id: string;
  time: string;
  label: string;
  amount: number; // positive = money in / billed, negative = correction
  by: 'the system' | 'the secretary' | 'you';
  kind: 'sale' | 'payment' | 'correction' | 'note';
};

type Debtor = {
  id: string;
  name: string;
  job: string;
  amount: number;
  age: string;
  status: 'open' | 'draft' | 'sent';
};

const SEED_ENTRIES: Entry[] = [
  { id: 's1', time: '7:58 AM', label: 'Nightly backup verified', amount: 0, by: 'the system', kind: 'note' },
  { id: 's2', time: '8:12 AM', label: '4 tires + alignment — J. Broussard, rung at the counter', amount: 741.48, by: 'the system', kind: 'sale' },
  { id: 's3', time: '9:41 AM', label: 'Payment received — inv #2189, T. Guidry', amount: 412.75, by: 'the system', kind: 'payment' },
  { id: 's4', time: '10:05 AM', label: 'Synthetic oil change — walk-in, rung at the counter', amount: 89.95, by: 'the system', kind: 'sale' },
];

const NIGHT_LOG = [
  ['9:02 PM', 'Answered the phone. Took the whole story. Booked 7:30 AM.'],
  ['11:47 PM', 'Drafted 3 payment reminders. Waiting for your tap.'],
  ['12:00 AM', 'Billed = collected + open. Difference: $0.00.'],
  ['2:14 AM', 'Audit pass: found $1,362.50 finished but never invoiced.'],
] as const;

const SEED_DEBTORS: Debtor[] = [
  { id: 'd1', name: 'Marcus Landry', job: 'Front brakes, inv #2214', amount: 486.2, age: '31 days', status: 'open' },
  { id: 'd2', name: 'Aline Fontenot', job: 'Set of 4 + TPMS, inv #2221', amount: 838.9, age: '18 days', status: 'open' },
  { id: 'd3', name: 'Bayou Lawn Co.', job: 'Trailer tires ×6, inv #2228', amount: 1362.5, age: '9 days', status: 'open' },
];

const SERVICES = [
  { label: '4 tires, mounted + balanced', price: 612.48 },
  { label: 'Alignment', price: 129.0 },
  { label: 'Synthetic oil change', price: 89.95 },
  { label: 'Front brake pads + rotors', price: 389.5 },
  { label: 'State inspection', price: 25.0 },
  { label: 'Flat repair', price: 32.0 },
] as const;

const CALL_SCRIPT = [
  ['caller', 'Y’all open? I got a trailer tire shredded on the 28 outside Boyce.'],
  ['os', 'We open at 7:30. I can hold the first bay — what size is the tire?'],
  ['caller', 'ST205/75. Two of ’em honestly. It’s a dump trailer.'],
  ['os', 'Two ST205/75R15, first bay, 7:30. Name and best number?'],
  ['caller', 'Dwayne Cormier, 318-555-0163.'],
  ['os', 'You’re booked, Mr. Cormier. The estimate will be waiting when the owner opens the shop.'],
] as const;

/* ─── state ─── */

type S = {
  entries: Entry[];
  debtors: Debtor[];
  cart: number[]; // indexes into SERVICES
  receipt: { lines: { label: string; price: number }[]; total: number; n: number } | null;
  editWarn: string | null; // entry id being "edited"
  ringCount: number;
};

type A =
  | { t: 'add'; i: number }
  | { t: 'clear' }
  | { t: 'ring'; time: string }
  | { t: 'dismissReceipt' }
  | { t: 'tryEdit'; id: string }
  | { t: 'correct'; id: string; time: string }
  | { t: 'dismissWarn' }
  | { t: 'draft'; id: string }
  | { t: 'send'; id: string; time: string }
  | { t: 'idlePay'; time: string };

function money(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function reducer(s: S, a: A): S {
  switch (a.t) {
    case 'add':
      return { ...s, cart: [...s.cart, a.i], receipt: null };
    case 'clear':
      return { ...s, cart: [] };
    case 'ring': {
      if (s.cart.length === 0) return s;
      const lines = s.cart.map((i) => ({ label: SERVICES[i].label, price: SERVICES[i].price }));
      const total = lines.reduce((n, l) => n + l.price, 0);
      const entry: Entry = {
        id: 'y' + Date.now(),
        time: a.time,
        label: `${lines.length} item${lines.length > 1 ? 's' : ''} — rung by you, paid card`,
        amount: total,
        by: 'you',
        kind: 'sale',
      };
      return {
        ...s,
        cart: [],
        entries: [...s.entries, entry],
        receipt: { lines, total, n: 2231 + s.ringCount },
        ringCount: s.ringCount + 1,
      };
    }
    case 'dismissReceipt':
      return { ...s, receipt: null };
    case 'tryEdit':
      return { ...s, editWarn: a.id };
    case 'dismissWarn':
      return { ...s, editWarn: null };
    case 'correct': {
      const target = s.entries.find((e) => e.id === a.id);
      if (!target || target.amount === 0) return { ...s, editWarn: null };
      const entry: Entry = {
        id: 'c' + Date.now(),
        time: a.time,
        label: 'Correction posted — the original entry stays on the record',
        amount: -target.amount,
        by: 'you',
        kind: 'correction',
      };
      return { ...s, editWarn: null, entries: [...s.entries, entry] };
    }
    case 'draft':
      return { ...s, debtors: s.debtors.map((d) => (d.id === a.id ? { ...d, status: 'draft' } : d)) };
    case 'send':
      return {
        ...s,
        debtors: s.debtors.map((d) => (d.id === a.id ? { ...d, status: 'sent' } : d)),
        entries: [
          ...s.entries,
          {
            id: 'r' + Date.now(),
            time: a.time,
            label: 'Payment reminder sent — approved by your tap',
            amount: 0,
            by: 'the secretary',
            kind: 'note',
          },
        ],
      };
    case 'idlePay': {
      const d = s.debtors.find((x) => x.id === 'd2');
      if (!d) return s;
      return {
        ...s,
        debtors: s.debtors.filter((x) => x.id !== 'd2'),
        entries: [
          ...s.entries,
          {
            id: 'p' + Date.now(),
            time: a.time,
            label: 'Payment received — inv #2221, A. Fontenot paid in full',
            amount: d.amount,
            by: 'the system',
            kind: 'payment',
          },
        ],
      };
    }
  }
}

const INITIAL: S = {
  entries: SEED_ENTRIES,
  debtors: SEED_DEBTORS,
  cart: [],
  receipt: null,
  editWarn: null,
  ringCount: 0,
};

/* ─── small pieces ─── */

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function clock(d: Date | null) {
  if (!d) return '—:—';
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function greeting(d: Date | null) {
  const h = (d ?? new Date()).getHours();
  return h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : 'Evening';
}

/** Spring number: counts to value on mount / change. Remembers its last
    value per slot so returning to a tab doesn't re-count from zero. */
const AMOUNT_MEMORY = new Map<string, number>();
function Amount({ k, value, className }: { k: string; value: number; className?: string }) {
  const reduce = useReducedMotion();
  const start = AMOUNT_MEMORY.get(k) ?? value * 0.65;
  const [shown, setShown] = useState(reduce ? value : start);
  const prev = useRef(start);
  useEffect(() => {
    if (reduce) { setShown(value); return; }
    const from = prev.current;
    prev.current = value;
    const t0 = performance.now();
    const D = 700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / D);
      const e = 1 - Math.pow(1 - p, 3);
      setShown(from + (value - from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, reduce]);
  useEffect(() => { AMOUNT_MEMORY.set(k, value); }, [k, value]);
  return <span className={className}>{money(shown)}</span>;
}

const TABS = [
  { id: 'today', label: 'Today', icon: LayoutDashboard },
  { id: 'register', label: 'Register', icon: Receipt },
  { id: 'money', label: 'Money', icon: CircleDollarSign },
  { id: 'books', label: 'Books', icon: BookOpenCheck },
  { id: 'secretary', label: 'Secretary', icon: PhoneCall },
] as const;

type TabId = (typeof TABS)[number]['id'];

/* ─── the machine ─── */

/* Chrome whisper: the OS murmurs what it did while nobody watched. */
const WHISPERS = [
  'penny-matched at 12:00 AM',
  '3 drafts waiting on your tap',
  'backup verified 7:58 AM',
  'she has the phones tonight',
] as const;

export function DriveOS({ appMode = false }: { appMode?: boolean } = {}) {
  const [s, dispatch] = useReducer(reducer, INITIAL);
  const [tab, setTab] = useState<TabId>('today');
  const [visited, setVisited] = useState<Set<TabId>>(() => new Set(['today']));
  const now = useNow();
  const reduce = useReducedMotion();

  /* sizzle: boot, whispers, idle life, action pulse, correction stamp */
  const [booted, setBooted] = useState(false);
  const [whisper, setWhisper] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [pulseKey, setPulseKey] = useState(0);
  const [stamp, setStamp] = useState(false);
  const pulse = () => setPulseKey((k) => k + 1);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), reduce ? 0 : 1150);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (!booted) return;
    const t = setInterval(() => setWhisper((w) => (w + 1) % WHISPERS.length), 4500);
    return () => clearInterval(t);
  }, [booted]);

  /* The shop keeps working while the visitor watches: ~9s in, a payment
     lands on its own — the demo of "runs itself" nobody has to click. */
  const idleFired = useRef(false);
  useEffect(() => {
    if (!booted || idleFired.current) return;
    const t = setTimeout(() => {
      idleFired.current = true;
      dispatch({ t: 'idlePay', time: clock(new Date()) });
      setToast('Payment landed · $838.90');
      pulse();
      const clear = setTimeout(() => setToast(null), 4500);
      return () => clearTimeout(clear);
    }, 9000);
    return () => clearTimeout(t);
  }, [booted]);

  const collected = useMemo(
    () => s.entries.filter((e) => e.amount !== 0).reduce((n, e) => n + e.amount, 0),
    [s.entries]
  );
  const open = useMemo(
    () => s.debtors.reduce((n, d) => n + d.amount, 0),
    [s.debtors]
  );
  const billed = collected + open;
  // computed live, on purpose — abs+round kills float residue and -$0.00
  const difference = Math.abs(Math.round((billed - collected - open) * 100) / 100);

  const [slideDir, setSlideDir] = useState(1);
  const go = (t: TabId) => {
    const from = TABS.findIndex((x) => x.id === tab);
    const to = TABS.findIndex((x) => x.id === t);
    setSlideDir(to >= from ? 1 : -1);
    setTab(t);
    setVisited((v) => new Set(v).add(t));
  };

  const t = () => clock(now ?? new Date());

  /* "cool looking but just ok" fix (Trevor 9/3): the demo answers you, the
     demo tracks what you've tried, the demo wears your name. All of it reads
     the live reducer state — nothing canned, the arithmetic spine untouched. */
  const [shop, setShop] = useState(SHOP);
  const [naming, setNaming] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  const [asked, setAsked] = useState(false);
  const [triedCheat, setTriedCheat] = useState(false);
  const [askQ, setAskQ] = useState('');
  const [askAnswer, setAskAnswer] = useState<{ lead: string; rows?: { l: string; v: string }[] } | null>(null);
  const [askMiss, setAskMiss] = useState(false);
  useEffect(() => { if (s.editWarn) setTriedCheat(true); }, [s.editWarn]);
  const landed = s.entries.some((e) => e.id.startsWith('p'));
  const sentChase = s.debtors.some((d) => d.status === 'sent');
  const drives: { done: boolean; label: string; goTo: TabId; hint?: string }[] = [
    { done: s.ringCount > 0, label: 'Ring a sale yourself', goTo: 'register' },
    { done: triedCheat, label: 'Try to cheat the books', goTo: 'books' },
    { done: asked, label: 'Ask the books a question', goTo: 'books' },
    { done: sentChase, label: 'Send a chase — your tap, not hers', goTo: 'money' },
    { done: landed, label: 'Catch money landing on its own', goTo: 'today', hint: 'just wait — the shop works while you look around' },
  ];
  const doneCount = drives.filter((d) => d.done).length;

  /* Answers computed from the live books — rings you just made are in them. */
  const askBooks = (raw: string) => {
    const q = raw.trim();
    if (!q) return;
    if (/match|difference|balanc|penny|reconcil|check/i.test(q)) {
      setAskAnswer({
        lead: `Billed ${money(billed)} = collected + open. Difference: ${money(difference)}.`,
        rows: [{ l: 'Checked every night, automatically', v: '12:00 AM' }],
      });
    } else if (/owe|unpaid|outstanding|receivab|money|late/i.test(q)) {
      setAskAnswer({
        lead: `${s.debtors.length} open invoice${s.debtors.length === 1 ? '' : 's'} — ${money(open)} out there right now.`,
        rows: s.debtors.map((d) => ({ l: `${d.name} · ${d.age}`, v: money(d.amount) })),
      });
    } else if (/today|collect|made|ring|rang|sale|revenue|bank/i.test(q)) {
      const you = s.entries.filter((e) => e.by === 'you' && e.amount > 0).reduce((n, e) => n + e.amount, 0);
      setAskAnswer({
        lead: `Collected today: ${money(collected)}.`,
        rows: you > 0 ? [{ l: 'Rung by you, just now', v: money(you) }] : undefined,
      });
    } else {
      setAskMiss(true);
      setAskAnswer(null);
      return;
    }
    setAskMiss(false);
    setAsked(true);
    setAskQ('');
  };

  const saveName = () => {
    const clean = nameDraft.replace(/[<>]/g, '').trim().slice(0, 28);
    setNaming(false);
    if (!clean || clean === shop) return;
    setShop(clean);
    setToast(`Fitted to ${clean}`);
    pulse();
    setTimeout(() => setToast(null), 3200);
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="relative"
    >
      {/* ambient light the window sits in */}
      <div aria-hidden className={`absolute -inset-8 sm:-inset-12 pointer-events-none ${appMode ? 'hidden sm:block' : ''}`}>
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_30%_20%,rgba(255,85,0,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_90%,rgba(52,211,153,0.06),transparent_70%)]" />
      </div>

      <div id="drive-os" className={`relative rounded-3xl border border-primary/25 ${appMode ? 'max-sm:-mx-4 max-sm:rounded-none max-sm:border-x-0 max-sm:overflow-visible' : ''} bg-[#0B0B0B]/90 backdrop-blur-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_10px_30px_-10px_rgba(255,85,0,0.15)] overflow-hidden [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:44px_44px]`}>
        {/* chrome */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-white/[0.07] bg-black/50">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden sm:flex items-center gap-1.5" aria-hidden>
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </div>
            <p className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-white/70 truncate">
              {shop}<span className="hidden sm:inline"> <span className="text-white/30">·</span> Found It OS</span>
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden md:inline-flex items-center overflow-hidden" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={toast ?? whisper}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] ${toast ? 'text-emerald-400 font-black' : 'text-white/50'}`}
                >
                  {toast ?? WHISPERS[whisper]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-white/45 tabular-nums">{clock(now)}</span>
            <span className="bg-primary text-black font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-[0.16em] px-2.5 py-1 rounded-full">
              Demo data · Drive it
            </span>
          </div>
        </div>

        {/* phones: the whisper slot is desktop-only, so moments that matter
            drop in as a pill — the shop working on its own must be SEEN */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="md:hidden absolute left-1/2 -translate-x-1/2 top-14 z-30 bg-emerald-400 text-black font-mono text-[10px] font-black uppercase tracking-[0.1em] px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] whitespace-nowrap max-w-[88vw] overflow-hidden text-ellipsis"
              role="status"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* one ring of light per committed action */}
        <AnimatePresence>
          {pulseKey > 0 && (
            <motion.div
              key={pulseKey}
              aria-hidden
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-0 rounded-3xl ring-2 ring-primary/70 pointer-events-none z-30"
            />
          )}
        </AnimatePresence>

        {/* boot: the machine wakes up once */}
        <AnimatePresence>
          {!booted && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 z-40 bg-[#070707] flex flex-col items-center justify-center overflow-hidden"
              aria-hidden
            >
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: [0, 1, 0.4, 1] }}
                transition={{ duration: 0.6, times: [0, 0.4, 0.6, 1] }}
                className="font-heading font-black italic uppercase tracking-tight text-2xl sm:text-3xl text-white"
              >
                Found It <span className="text-primary">OS</span>
              </motion.p>
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40"
              >
                Fitted to {shop}
              </motion.p>
              {!reduce && (
                <motion.div
                  initial={{ top: '-8%' }}
                  animate={{ top: '108%' }}
                  transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-primary/15 to-transparent"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row">
          {/* rail (desktop) */}
          <nav aria-label="Demo OS sections" className="hidden sm:flex flex-col gap-1 p-3 border-r border-white/[0.07] bg-black/30 w-44 shrink-0">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => go(id)}
                aria-current={tab === id ? 'page' : undefined}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-bold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  tab === id
                    ? 'bg-primary text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden />
                {label}
                {id === 'books' && s.entries.some((e) => e.by === 'you') && tab !== 'books' && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden />
                )}
              </button>
            ))}
            <p className="mt-auto px-3 pb-1 font-mono text-[9px] uppercase tracking-[0.14em] leading-relaxed text-white/45">
              Every tap here is the real behavior
            </p>
          </nav>

          {/* panel */}
          <div className="relative flex-1 min-w-0 sm:h-[520px] max-sm:min-h-[380px] sm:overflow-y-auto p-4 sm:p-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,85,0,0.4)_transparent]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={reduce ? false : { opacity: 0, x: 26 * slideDir }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -22 * slideDir }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                {tab === 'today' && (
                  <div>
                    <p className="text-xl sm:text-2xl font-black italic tracking-tight text-white mb-1">
                      {greeting(now)}, boss.
                    </p>
                    <p className="text-[13px] text-white/50 font-medium mb-2">
                      Here&rsquo;s what happened while you were away.
                    </p>
                    <div className="flex items-center gap-2.5 mb-5 flex-wrap min-h-[30px]">
                      {!naming ? (
                        <>
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">{shop} · demo books</span>
                          <button
                            type="button"
                            onClick={() => { setNaming(true); setNameDraft(''); }}
                            className="font-mono text-[10px] font-black uppercase tracking-[0.14em] text-primary hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                          >
                            put your name on it →
                          </button>
                        </>
                      ) : (
                        <form onSubmit={(e) => { e.preventDefault(); saveName(); }} className="flex items-center gap-2">
                          <input
                            value={nameDraft}
                            onChange={(e) => setNameDraft(e.target.value)}
                            maxLength={28}
                            placeholder="Your shop&rsquo;s name"
                            autoFocus
                            aria-label="Put your shop's name on the demo"
                            className="w-48 rounded-full bg-black/40 border border-primary/40 px-3.5 py-1.5 font-mono text-base sm:text-[11px] text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                          />
                          <button type="submit" className="px-3.5 py-1.5 rounded-full bg-primary text-black font-mono text-[10px] font-black uppercase tracking-wider hover:opacity-90">
                            Fit it
                          </button>
                        </form>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                        <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-white/40 mb-1.5">Collected today</p>
                        <Amount k="collected" value={collected} className="text-xl sm:text-2xl font-black tracking-tight text-emerald-400 tabular-nums" />
                      </div>
                      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                        <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-white/40 mb-1.5">Owed, oldest first</p>
                        <Amount k="open" value={open} className="text-xl sm:text-2xl font-black tracking-tight text-primary tabular-nums" />
                      </div>
                    </div>
                    <div className={`rounded-2xl border p-4 mb-6 transition-colors duration-500 ${doneCount === 5 ? 'border-emerald-400/50 bg-emerald-400/[0.06]' : 'border-primary/25 bg-primary/[0.04]'}`}>
                      <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-white/40 mb-2.5">
                        Drive it · <span className={doneCount === 5 ? 'text-emerald-400' : 'text-primary'}>{doneCount}/5</span>
                      </p>
                      {doneCount === 5 ? (
                        <div>
                          <p className="text-[14px] font-black italic tracking-tight text-emerald-400 mb-1">
                            You just ran a shop for two minutes. The books kept up with every move.
                          </p>
                          <a href="#lead-form" className="text-[13px] font-bold text-white underline decoration-emerald-400/50 underline-offset-4 hover:decoration-emerald-400 transition-colors">
                            That was theirs — now see yours →
                          </a>
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {drives.map((d) => (
                            <li key={d.label}>
                              <button
                                type="button"
                                onClick={() => go(d.goTo)}
                                className="flex items-center gap-2.5 text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded"
                              >
                                <span
                                  className={`w-4 h-4 rounded-full border flex items-center justify-center text-[9px] font-black shrink-0 transition-colors ${
                                    d.done ? 'bg-emerald-400 border-emerald-400 text-black' : 'border-white/25 text-transparent group-hover:border-primary/60'
                                  }`}
                                  aria-hidden
                                >
                                  ✓
                                </span>
                                <span className={`text-[12.5px] font-medium transition-colors ${d.done ? 'text-white/40 line-through decoration-white/25' : 'text-white/80 group-hover:text-white'}`}>
                                  {d.label}
                                  {!d.done && d.hint && <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-white/35">{d.hint}</span>}
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-white/40 mb-3">Overnight, by the secretary</p>
                    <ul className="space-y-2.5">
                      {NIGHT_LOG.map(([time, line]) => (
                        <li key={time} className="flex gap-3 items-baseline">
                          <span className="font-mono text-[10px] text-primary/80 tabular-nums w-16 shrink-0">{time}</span>
                          <span className={`text-[13px] font-medium leading-snug ${line.includes('$0.00') ? 'text-emerald-400' : 'text-white/75'}`}>{line}</span>
                        </li>
                      ))}
                    </ul>
                    {s.entries.some((e) => e.by !== 'the system' && !SEED_ENTRIES.includes(e)) && (
                      <>
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-primary mt-5 mb-3">Since you got here</p>
                        <ul className="space-y-2">
                          {s.entries.filter((e) => e.by !== 'the system' && !SEED_ENTRIES.includes(e)).map((e) => (
                            <li key={e.id} className="flex gap-3 items-baseline">
                              <span className="font-mono text-[10px] text-primary/80 tabular-nums w-16 shrink-0">{e.time}</span>
                              <span className="text-[13px] font-medium leading-snug text-white/75">{e.label}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => go('register')}
                      className="mt-6 inline-flex items-center gap-2 px-5 h-11 rounded-full bg-primary text-black font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {s.ringCount > 0 ? 'Ring another →' : 'Ring a sale yourself →'}
                    </button>
                  </div>
                )}

                {tab === 'register' && (
                  <div className="relative">
                    <p className="text-lg sm:text-xl font-black italic tracking-tight text-white mb-1">The register.</p>
                    <p className="text-[13px] text-white/50 font-medium mb-4">
                      Tap work onto the ticket, then ring it. Watch the books catch it.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                      {SERVICES.map((sv, i) => (
                        <button
                          key={sv.label}
                          type="button"
                          onClick={() => dispatch({ t: 'add', i })}
                          className="text-left rounded-xl border border-white/[0.09] bg-white/[0.03] hover:border-primary/50 hover:bg-primary/[0.06] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all px-3.5 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                        >
                          <p className="text-[12.5px] font-bold text-white/85 leading-tight mb-1">{sv.label}</p>
                          <p className="font-mono text-[11px] text-primary tabular-nums">{money(sv.price)}</p>
                        </button>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-white/[0.09] bg-black/40 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
                          Ticket · {s.cart.length} item{s.cart.length === 1 ? '' : 's'}
                        </p>
                        {s.cart.length > 0 && (
                          <button type="button" onClick={() => dispatch({ t: 'clear' })} className="font-mono text-[10px] text-white/40 hover:text-white/80 transition-colors">
                            clear
                          </button>
                        )}
                      </div>
                      {s.cart.length === 0 ? (
                        <p className="text-[13px] text-white/50 font-medium">Empty. The 4-tire set is the crowd favorite.</p>
                      ) : (
                        <ul className="space-y-1 mb-3">
                          {s.cart.map((i, k) => (
                            <li key={k} className="flex justify-between text-[13px] font-medium text-white/75">
                              <span>{SERVICES[i].label}</span>
                              <span className="font-mono tabular-nums">{money(SERVICES[i].price)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
                        <span className="font-mono text-[11px] font-black uppercase tracking-[0.14em] text-white/60">Total</span>
                        <span className="text-lg font-black text-white tabular-nums">
                          {money(s.cart.reduce((n, i) => n + SERVICES[i].price, 0))}
                        </span>
                      </div>
                      <button
                        type="button"
                        disabled={s.cart.length === 0}
                        onClick={() => { dispatch({ t: 'ring', time: t() }); pulse(); }}
                        className="mt-3 w-full h-12 rounded-xl bg-primary text-black font-black uppercase tracking-wider text-sm max-sm:hidden disabled:opacity-30 hover:opacity-90 active:scale-[0.99] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Ring it
                      </button>
                    </div>

                    {s.cart.length > 0 && (
                      <div className="sm:hidden sticky bottom-[calc(58px_+_max(env(safe-area-inset-bottom),6px))] -mx-4 mt-3 px-4 py-3 bg-black/85 backdrop-blur-md border-t border-white/[0.08] z-10">
                        <button
                          type="button"
                          onClick={() => { dispatch({ t: 'ring', time: t() }); pulse(); }}
                          className="w-full h-12 rounded-xl bg-primary text-black font-black uppercase tracking-wider text-sm hover:opacity-90 active:scale-[0.99] transition-all"
                        >
                          Ring it · {money(s.cart.reduce((n, i) => n + SERVICES[i].price, 0))}
                        </button>
                      </div>
                    )}

                    {s.ringCount > 0 && (
                      <motion.div
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 rounded-2xl border border-primary/40 bg-primary/[0.07] p-4"
                      >
                        <p className="text-[14px] font-black italic tracking-tight text-white mb-1">
                          One sale. The journal, the books, today&rsquo;s totals — all updated.
                        </p>
                        <p className="text-[12px] text-white/60 font-medium mb-3">Nothing re-keyed. Nothing carried between systems by hand.</p>
                        <a
                          href="#lead-form"
                          className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-primary text-black font-black uppercase tracking-wider text-[11px] hover:opacity-90 transition-opacity"
                        >
                          That was theirs. Show me mine →
                        </a>
                      </motion.div>
                    )}

                    <AnimatePresence>
                      {s.receipt && (
                        <motion.button
                          type="button"
                          onClick={() => { dispatch({ t: 'dismissReceipt' }); go('books'); }}
                          initial={reduce ? false : { opacity: 0, y: 40, rotate: 0 }}
                          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), 95% 100%, 90% calc(100% - 5px), 85% 100%, 80% calc(100% - 5px), 75% 100%, 70% calc(100% - 5px), 65% 100%, 60% calc(100% - 5px), 55% 100%, 50% calc(100% - 5px), 45% 100%, 40% calc(100% - 5px), 35% 100%, 30% calc(100% - 5px), 25% 100%, 20% calc(100% - 5px), 15% 100%, 10% calc(100% - 5px), 5% 100%, 0 calc(100% - 5px))' }}
                          className="absolute right-2 bottom-2 max-sm:bottom-20 w-60 text-left bg-[#F4EFE6] text-[#141414] rounded-t-lg p-4 pb-5 shadow-[0_18px_50px_rgba(0,0,0,0.6)] font-mono cursor-pointer"
                          aria-label="Receipt printed — tap to see it land in the books"
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-center">{shop}</p>
                          <p className="text-[9px] uppercase tracking-[0.12em] text-center text-black/50 mb-2">Ticket #{s.receipt.n} · {t()}</p>
                          <div className="border-t border-dashed border-black/30 my-2" />
                          {s.receipt.lines.map((l) => (
                            <div key={l.label} className="flex justify-between text-[10.5px] leading-relaxed">
                              <span className="truncate pr-2">{l.label}</span>
                              <span className="tabular-nums">{l.price.toFixed(2)}</span>
                            </div>
                          ))}
                          <div className="border-t border-dashed border-black/30 my-2" />
                          <div className="flex justify-between text-[12px] font-black">
                            <span>TOTAL</span>
                            <span className="tabular-nums">{money(s.receipt.total)}</span>
                          </div>
                          <p className="text-[9px] text-black/50 mt-2 text-center">already in the books → tap</p>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {tab === 'money' && (
                  <div>
                    <p className="text-lg sm:text-xl font-black italic tracking-tight text-white mb-1">Money owed.</p>
                    <p className="text-[13px] text-white/50 font-medium mb-4">
                      Oldest first. She drafts the chase — <span className="text-white/80 font-bold">nothing sends without your tap.</span>
                    </p>
                    <ul className="space-y-3">
                      {s.debtors.map((d) => (
                        <li key={d.id} className="rounded-2xl border border-white/[0.09] bg-white/[0.03] p-4">
                          <div className="flex items-baseline justify-between gap-3 mb-1">
                            <p className="text-[14px] font-bold text-white/90 truncate">{d.name}</p>
                            <span className="font-mono text-[13px] font-black text-primary tabular-nums shrink-0">{money(d.amount)}</span>
                          </div>
                          <p className="text-[12px] text-white/45 font-medium mb-3">{d.job} · open {d.age}</p>
                          {d.status === 'open' && (
                            <button
                              type="button"
                              onClick={() => dispatch({ t: 'draft', id: d.id })}
                              className="inline-flex items-center px-4 h-11 sm:h-9 rounded-full border border-primary/50 text-primary font-black uppercase tracking-wider text-[10px] hover:bg-primary/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                            >
                              Have her chase it
                            </button>
                          )}
                          {d.status === 'draft' && (
                            <div className="rounded-xl bg-black/40 border border-white/[0.07] p-3">
                              <p className="text-[12px] text-white/70 font-medium leading-relaxed mb-2">
                                &ldquo;Hey {d.name.split(' ')[0]} — {shop} here. {d.job.split(',')[0]} is still open,{' '}
                                {money(d.amount)}. Want a payment link?&rdquo;
                              </p>
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => { dispatch({ t: 'send', id: d.id, time: t() }); pulse(); }}
                                  className="inline-flex items-center px-4 h-11 sm:h-9 rounded-full bg-primary text-black font-black uppercase tracking-wider text-[10px] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                  Approve &amp; send
                                </button>
                                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">Draft · waiting on you</span>
                              </div>
                            </div>
                          )}
                          {d.status === 'sent' && (
                            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
                              Sent {t()} · watching for the reply
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tab === 'books' && (
                  <div className="relative">
                    <AnimatePresence>
                      {stamp && (
                        <motion.div
                          aria-hidden
                          initial={reduce ? false : { opacity: 0, scale: 1.6, rotate: -14 }}
                          animate={{ opacity: 1, scale: 1, rotate: -8 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                          className="absolute right-2 top-10 z-10 border-4 border-primary text-primary font-mono text-[11px] font-black uppercase tracking-[0.18em] px-4 py-2 rounded-lg bg-black/70 pointer-events-none"
                        >
                          Correction posted<br />original stays
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <p className="text-lg sm:text-xl font-black italic tracking-tight text-white mb-1">The books.</p>
                    <p className="text-[13px] text-white/50 font-medium mb-4">
                      Every line permanent. Go ahead — try the little pencil. Or just ask.
                    </p>
                    <form onSubmit={(e) => { e.preventDefault(); askBooks(askQ); }} className="mb-4">
                      <div className="flex gap-2">
                        <input
                          value={askQ}
                          onChange={(e) => { setAskQ(e.target.value); if (askMiss) setAskMiss(false); }}
                          placeholder="Ask the books…"
                          aria-label="Ask the demo books a question in plain English"
                          className="flex-1 min-w-0 rounded-full bg-black/40 border border-white/[0.12] px-4 py-2.5 font-mono text-base sm:text-[12px] text-white placeholder:text-white/35 focus:outline-none focus:border-primary/60 transition-colors"
                        />
                        <button type="submit" className="shrink-0 px-4 rounded-full bg-primary text-black font-black uppercase tracking-wider text-[10px] hover:opacity-90 transition-opacity">
                          Ask
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {['Who owes me money right now?', 'Do the books match?', 'What did we collect today?'].map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => askBooks(c)}
                            className="rounded-full border border-white/[0.12] px-3 py-1 font-mono text-[10px] text-white/60 hover:border-primary/50 hover:text-white transition-colors"
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                      {askMiss && (
                        <p className="mt-2 font-mono text-[10px] text-white/45">
                          These demo books know money owed, matching, and today — tap a question above.
                        </p>
                      )}
                      <AnimatePresence>
                        {askAnswer && (
                          <motion.div
                            initial={reduce ? false : { opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.05] p-3.5"
                            aria-live="polite"
                          >
                            <p className="text-[13px] font-bold text-emerald-400 mb-1.5">{askAnswer.lead}</p>
                            {askAnswer.rows && (
                              <ul className="space-y-1">
                                {askAnswer.rows.map((r) => (
                                  <li key={r.l} className="flex justify-between gap-3 text-[12px] font-medium text-white/70">
                                    <span className="truncate">{r.l}</span>
                                    <span className="font-mono tabular-nums shrink-0">{r.v}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
                              Answered from these books, live — including what you just did
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                    <div aria-live="polite">
                      <AnimatePresence>
                        {s.editWarn && (
                          <motion.div
                            initial={reduce ? false : { opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mb-3 rounded-xl border border-primary/50 bg-primary/[0.08] p-3.5"
                          >
                            <p className="text-[13px] font-bold text-white mb-2">
                              The ledger doesn&rsquo;t erase. Not for you, not for anybody.
                            </p>
                            <p className="text-[12px] text-white/60 font-medium mb-3">
                              Banks post corrections. So does this. The original stays on the record.
                            </p>
                            <div className="flex gap-2.5">
                              <button
                                type="button"
                                onClick={() => { dispatch({ t: 'correct', id: s.editWarn!, time: t() }); pulse(); setStamp(true); setTimeout(() => setStamp(false), 1600); }}
                                className="px-4 h-11 sm:h-9 rounded-full bg-primary text-black font-black uppercase tracking-wider text-[10px] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                              >
                                Post a correction
                              </button>
                              <button
                                type="button"
                                onClick={() => dispatch({ t: 'dismissWarn' })}
                                className="px-4 h-11 sm:h-9 rounded-full border border-white/[0.15] text-white/70 font-black uppercase tracking-wider text-[10px] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                              >
                                Leave it
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <ul className="space-y-1">
                      {s.entries.map((e) => (
                        <motion.li
                          key={e.id}
                          layout={reduce ? false : true}
                          initial={reduce ? false : { opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`group flex items-center gap-3 rounded-lg px-2.5 py-2 ${e.by === 'you' ? 'bg-primary/[0.06]' : ''}`}
                        >
                          <span className="font-mono text-[10px] text-white/50 tabular-nums w-16 shrink-0">{e.time}</span>
                          <span className={`flex-1 min-w-0 text-[12.5px] font-medium ${e.kind === 'correction' ? 'text-primary' : 'truncate text-white/75'}`}>
                            {e.label}
                            {e.by === 'you' && <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.12em] text-primary/80">you</span>}
                          </span>
                          {e.amount !== 0 && (
                            <span className={`font-mono text-[12px] tabular-nums shrink-0 ${e.amount < 0 ? 'text-primary' : 'text-emerald-400'}`}>
                              {e.amount < 0 ? '−' : ''}{money(Math.abs(e.amount))}
                            </span>
                          )}
                          {e.kind !== 'note' && (
                            <button
                              type="button"
                              aria-label={`Try to edit: ${e.label}`}
                              onClick={() => dispatch({ t: 'tryEdit', id: e.id })}
                              className="opacity-40 group-hover:opacity-100 transition-opacity text-white/60 hover:text-primary p-2 -m-1 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                            >
                              <Pencil className="w-3.5 h-3.5" aria-hidden />
                            </button>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.05] px-4 py-3">
                      <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-white/60 leading-relaxed">
                        Midnight check · billed <span className="text-white tabular-nums">{money(billed)}</span> = collected{' '}
                        <span className="text-emerald-400 tabular-nums">{money(collected)}</span> + open{' '}
                        <span className="text-primary tabular-nums">{money(open)}</span>
                        <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 font-black text-emerald-400">
                          Difference: {money(difference)}
                        </span>
                      </p>
                    </div>
                  </div>
                )}

                {tab === 'secretary' && <SecretaryPanel started={visited.has('secretary')} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* tab bar (mobile) */}
        <nav aria-label="Demo OS sections" className={`sm:hidden flex sticky bottom-0 z-20 border-t border-white/[0.07] bg-black/85 backdrop-blur-md ${appMode ? 'pb-[max(env(safe-area-inset-bottom),6px)]' : ''}`}>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              aria-current={tab === id ? 'page' : undefined}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[9px] font-black uppercase tracking-[0.08em] transition-all active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary ${
                tab === id ? 'text-primary' : 'text-white/45'
              }`}
            >
              <Icon className="w-[18px] h-[18px]" aria-hidden />
              {label}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

/* ─── secretary transcript ─── */

function SecretaryPanel({ started }: { started: boolean }) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? CALL_SCRIPT.length : 0);
  useEffect(() => {
    if (reduce || !started) return;
    if (shown >= CALL_SCRIPT.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 400 : 1100);
    return () => clearTimeout(t);
  }, [shown, reduce, started]);

  return (
    <div>
      <p className="text-lg sm:text-xl font-black italic tracking-tight text-white mb-1">Last night, 9:02 PM.</p>
      <p className="text-[13px] text-white/50 font-medium mb-4">
        The shop was dark. The phone still got answered. Real transcript format, invented caller.
      </p>
      <ul className="space-y-2.5 mb-5">
        {CALL_SCRIPT.slice(0, shown).map(([who, line], i) => (
          <motion.li
            key={i}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] font-medium leading-snug ${
              who === 'os'
                ? 'ml-auto bg-primary/[0.12] border border-primary/30 text-white'
                : 'bg-white/[0.05] border border-white/[0.08] text-white/80'
            }`}
          >
            <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] mb-1 opacity-60">
              {who === 'os' ? 'The secretary' : 'Caller'}
            </span>
            {line}
          </motion.li>
        ))}
        {started && shown < CALL_SCRIPT.length && !reduce && (
          <li
            aria-hidden
            className={`flex gap-1.5 items-center rounded-2xl px-4 py-3 w-fit ${
              CALL_SCRIPT[shown][0] === 'os'
                ? 'ml-auto bg-primary/[0.12] border border-primary/30'
                : 'bg-white/[0.05] border border-white/[0.08]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:300ms]" />
          </li>
        )}
      </ul>
      {shown >= CALL_SCRIPT.length && (
        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400 mb-4">
            Filed: 7:30 AM · first bay · estimate drafted for your coffee
          </p>
          <a
            href="#talk-to-her"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-primary text-black font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Talk to the live one ↓
          </a>
        </motion.div>
      )}
    </div>
  );
}
