'use client';

import {
  useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState,
  type ComponentType, type MutableRefObject, type ReactNode, type RefObject,
} from 'react';
import {
  AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useTransform, type PanInfo,
} from 'framer-motion';
import { Camera, FileText, Phone, Scale, Sunrise, Banknote, Check, Printer, Bell, type LucideIcon } from 'lucide-react';

/* ─── The automation reel (Trevor + brother 8/19 · critics + concept panel 8/22) ───
   "It looks like we're selling admin dashboards. People want to VISUALIZE the
   automations — their shit automated like it's 2026."

   So: no screens. One stage, one day, nobody at the desk. The stage has two
   permanent zones — THE WORLD on the left (phones, paper, calls, the old
   software: things arrive here) and YOUR BOOKS on the right (where they land).
   Every chapter, the payload itself TRAVELS: a scrawled line lifts off a photo
   and lands typed on the pull sheet; $4,850.00 lifts off the customer's receipt,
   an orange rail draws ahead of it, and it docks as a ledger line while "Owed
   to you" and "In the bank today" move in lockstep; "Tue 9:00" leaves her
   sentence and lands on Tuesday. A clock in the corner rolls from 8:02 AM to
   the next morning. Time passing with nothing touched is the proof.

   Laws: demo data only (the sanctioned demo books — Melancon / Broussard /
   Richard / Dauzat; "about 1,200" stale prices; Edwards' $195,882.75 and
   $19,000 are the only real figures and are sanctioned); transforms + opacity
   only (mobile flicker law — no blur, no backdrop, no layout animation);
   orange is only the traveler, the rail, the scan line, the clock digits, her
   chip and the verdict chip (orange fill, black text); no red, no green; a
   total never rests on $0.00 — it goes from what it was to what it is by
   exactly what just docked; nothing repeats forever (the phone rings twice);
   runs only while in view and the tab is visible; reduced-motion gets each
   chapter's final frame, swapping every 6s. */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const LEAD_MS = 550;   // cut (250ms clear-up) + an empty beat before a chapter's first step
const HOLD_MS = 2200;  // the final frame holds while the caption is read

/* ─── Demo constants — derived, never typed twice ─── */
const ACCOUNTS = [
  { n: 'Melancon', v: 4850 },
  { n: 'Broussard', v: 2300 },
  { n: 'Richard', v: 1175 },
  { n: 'Dauzat', v: 3600 },
];
const OWED_OPEN = ACCOUNTS.reduce((a, b) => a + b.v, 0);   // 11,925.00
const OWED_AFTER = OWED_OPEN - ACCOUNTS[0].v;              // 7,075.00 once Melancon pays
const EDWARDS = { found: 195882.75, error: 19000 };
const fmt = (v: number) => v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const label = 'text-[10px] font-black uppercase tracking-[0.22em] text-faint';
const mono = 'font-mono text-[12px] md:text-[13px]';
const paper = 'bg-[#efe9dc] text-black shadow-[0_14px_34px_rgba(0,0,0,0.45)]';

/* ─── Primitives ─── */

/** Something from the world enters from the left edge (or rises, with `up`). */
const Arrive = ({ show, up = false, delay = 0, className = '', children }: {
  show: boolean; up?: boolean; delay?: number; className?: string; children: ReactNode;
}) => (
  <motion.div
    initial={false}
    animate={show ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: up ? 0 : -16, y: up ? 24 : 0 }}
    transition={{ duration: 0.45, ease, delay: show ? delay : 0 }}
    className={className}
  >
    {children}
  </motion.div>
);

/** A destination reveals with a dock pop the beat after the traveler lands. */
const Dock = ({ show, className = '', children }: { show: boolean; className?: string; children: ReactNode }) => (
  <motion.span
    initial={false}
    animate={show ? { opacity: 1, scale: [1.04, 1] } : { opacity: 0, scale: 1 }}
    transition={{ duration: 0.22, ease }}
    className={`inline-flex items-center gap-1.5 ${className}`}
  >
    {children}
  </motion.span>
);

/** A footer segment that fades in as the chapter earns it. */
const Seg = ({ show, children }: { show: boolean; children: ReactNode }) => (
  <motion.span initial={false} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.3 }}>{children}</motion.span>
);

/** The verdict: the brand chip (orange fill, black text). One per chapter, last beat. */
const Chip = ({ show, children }: { show: boolean; children: ReactNode }) => (
  <span className="relative inline-flex">
    <motion.span
      initial={false}
      animate={show ? { opacity: 1, scale: [1.3, 0.96, 1] } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.38, ease }}
      className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-primary px-2.5 py-[3px] text-[10px] font-black uppercase tracking-[0.18em] text-black"
    >
      {children}
    </motion.span>
    <motion.span
      aria-hidden
      initial={false}
      animate={show ? { scale: [1, 1.9], opacity: [0.6, 0] } : { scale: 1, opacity: 0 }}
      transition={{ duration: 0.6, ease }}
      className="pointer-events-none absolute inset-0 rounded-full border border-primary"
    />
  </span>
);

/** A money figure that moves from what it was to what it is. MotionValue-driven:
    zero React renders per frame. `snap` sets it without animating (chapter jumps). */
function Money({ value, snap = false, dur = 0.7, prefix = '$', hidden = false, className = '' }: {
  value: number; snap?: boolean; dur?: number; prefix?: string; hidden?: boolean; className?: string;
}) {
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => prefix + fmt(v));
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current || snap) { mounted.current = true; mv.set(value); return; }
    const c = animate(mv, value, { duration: dur, ease });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, snap]);
  return (
    <motion.span
      initial={false}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 6 : 0 }}
      transition={{ duration: 0.3, ease }}
      className={`inline-block tabular-nums ${className}`}
    >
      {text}
    </motion.span>
  );
}

/** Text that types itself (MotionValue → slice; no per-character renders). */
function Type({ text, on, cps = 40 }: { text: string; on: boolean; cps?: number }) {
  const p = useMotionValue(on ? 1 : 0);
  const out = useTransform(p, (v) => text.slice(0, Math.round(v * text.length)));
  useEffect(() => {
    if (!on) { p.set(0); return; }
    const c = animate(p, 1, { duration: text.length / cps, ease: 'linear' });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on]);
  return <motion.span>{out}</motion.span>;
}

/** The clock: digits roll up when the chapter cuts. */
function Clock({ value }: { value: string }) {
  return (
    <span className="relative inline-block h-5 overflow-hidden align-middle">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          className="block whitespace-nowrap font-mono text-[13px] font-black tracking-wide text-primary"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─── Fly: the payload travels from a world element to a books element ───
   Measures once on mount, renders a clone (styled as the traveler) absolute
   in the stage, lifts it, draws a 1px orange rail ahead of it, moves it on the
   ease curve and scales it to rest. The clock drives everything: the flight
   is mounted for exactly its beat; the destination docks on the next step. */
type RefMap = MutableRefObject<Record<string, HTMLElement | null>>;
type Geo = { sx: number; sy: number; tx: number; ty: number; rail: { x: number; y: number; len: number; rot: number } };
function Fly({ refs, stage, from, to, ms, children }: {
  refs: RefMap; stage: RefObject<HTMLDivElement>; from: string; to: string; ms: number; children: ReactNode;
}) {
  const [geo, setGeo] = useState<Geo | null>(null);
  useLayoutEffect(() => {
    const s = stage.current?.getBoundingClientRect();
    const a = refs.current[from]?.getBoundingClientRect();
    const b = refs.current[to]?.getBoundingClientRect();
    if (!s || !a || !b || !a.width || !b.width) return;
    const sx = a.left - s.left, sy = a.top - s.top, tx = b.left - s.left, ty = b.top - s.top;
    const cx1 = sx + a.width / 2, cy1 = sy + a.height / 2, cx2 = tx + b.width / 2, cy2 = ty + b.height / 2;
    const dx = cx2 - cx1, dy = cy2 - cy1;
    setGeo({ sx, sy, tx, ty, rail: { x: cx1, y: cy1, len: Math.hypot(dx, dy), rot: (Math.atan2(dy, dx) * 180) / Math.PI } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!geo) return null;
  const dur = Math.max(0.35, (ms - 140) / 1000);
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 z-10 block origin-left" style={{ transform: `translate(${geo.rail.x}px, ${geo.rail.y}px) rotate(${geo.rail.rot}deg)`, width: geo.rail.len }}>
        <motion.span
          className="block h-px w-full origin-left bg-primary"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
          transition={{ scaleX: { duration: 0.3, ease }, opacity: { duration: dur + 0.4, times: [0, 0.08, 0.7, 1] } }}
        />
      </span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 inline-flex whitespace-nowrap will-change-transform"
        initial={{ x: geo.sx, y: geo.sy, scale: 1.06 }}
        animate={{ x: geo.tx, y: geo.ty, scale: 1 }}
        transition={{ duration: dur, ease, delay: 0.12 }}
      >
        {children}
      </motion.span>
    </>
  );
}

function useRegistry() {
  const refs = useRef<Record<string, HTMLElement | null>>({});
  const cache = useRef<Record<string, (el: HTMLElement | null) => void>>({});
  const reg = useCallback((name: string) => {
    if (!cache.current[name]) cache.current[name] = (el) => { refs.current[name] = el; };
    return cache.current[name];
  }, []);
  return { refs, reg };
}

type Reg = (name: string) => (el: HTMLElement | null) => void;
type ZoneProps = { step: number; live: boolean; reg: Reg };
type Flight = { at: number; from: string; to: string; node: ReactNode };
const traveler = 'font-mono text-[12px] md:text-[13px] font-black text-primary';

/* ═══ Chapter 1 · 8:02 AM · Your paperwork reads itself ═══
   A photo of a scribbled ticket. A scan line passes; each line lifts off the
   paper and lands typed on the pull sheet. The odd one lands in the held tray. */
const TICKET = ['40 loropetalum 3g', '25 crape myrtle 7g', '12 ligustrum 15g', '6 live oak 30 gal'];
const SHEET = [['40', 'Loropetalum', '3 gal'], ['25', 'Crape Myrtle', '7 gal'], ['12', 'Ligustrum', '15 gal']];
const SCRAWL = [{ x: 1, r: 0.4 }, { x: 3, r: -0.5 }, { x: 2, r: 0.3 }, { x: 1, r: -0.4 }];
function W1({ step, live, reg }: ZoneProps) {
  const paperRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(150);
  useLayoutEffect(() => { if (paperRef.current) setH(paperRef.current.offsetHeight); }, []);
  const scanning = step >= 1 && step < 6 && live;
  const scan = useMemo(() => (scanning ? { y: [0, h - 2], opacity: [0, 1, 1, 0] } : { opacity: 0 }), [scanning, h]);
  return (
    <>
      <motion.span aria-hidden initial={false} animate={step === 0 ? { opacity: [0, 0.16, 0] } : { opacity: 0 }} transition={{ duration: 0.16 }} className="pointer-events-none absolute inset-0 bg-white" />
      <p className={`${label} mb-3 flex items-center gap-1.5`}><Camera className="h-3 w-3" /> A photo from the truck</p>
      <Arrive show={step >= 0} up className="max-w-[330px]">
        <div ref={paperRef} className={`relative rotate-[-3deg] rounded-[3px] px-5 py-4 ${paper}`}>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">Dauzat — for Tues</p>
          <div className="mt-2 space-y-1">
            {TICKET.map((l, i) => (
              <motion.p
                key={l}
                ref={reg(`p${i}`)}
                initial={false}
                animate={{ opacity: step >= 2 + i ? 0.3 : 1 }}
                style={{ x: SCRAWL[i].x, rotate: SCRAWL[i].r }}
                className="w-fit font-mono text-[14px] font-bold italic leading-[1.5]"
              >
                {l}
              </motion.p>
            ))}
          </div>
          <motion.span aria-hidden initial={false} animate={scan} transition={{ duration: 2.4, ease: 'linear', times: [0, 0.05, 0.95, 1] }} className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-primary" />
        </div>
      </Arrive>
    </>
  );
}
function B1({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-2`}>Pull sheet · Dauzat · Tues</p>
      <div className="space-y-1.5">
        {SHEET.map((r, i) => (
          <div key={r[1]} className={`${mono} flex h-8 items-center justify-between rounded-lg bg-white/[0.04] px-3`}>
            <Dock show={step > 2 + i}><span ref={reg(`r${i}`)} className="text-foreground"><b className="font-black">{r[0]}</b> · {r[1]} · {r[2]}</span></Dock>
            <Dock show={step > 2 + i}><Check className="h-4 w-4 text-primary" /></Dock>
          </div>
        ))}
        <div className={`${mono} flex h-8 items-center justify-between rounded-lg border border-dashed border-white/25 px-3`}>
          <Dock show={step > 5}><span ref={reg('held')} className="text-foreground"><b className="font-black">6</b> · Live Oak · 30 gal</span></Dock>
          <Dock show={step > 5}><span className="text-[10px] italic text-muted-foreground">not in your book · held</span></Dock>
        </div>
      </div>
      <div className="mt-3 flex flex-col-reverse items-start gap-1.5 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className={`${mono} text-muted-foreground`}><Seg show={step >= 3}>3 on the sheet</Seg><Seg show={step >= 6}> · 1 held for you</Seg></p>
        <Chip show={step >= 6}><Printer className="h-3 w-3" /> Typed in · printed</Chip>
      </div>
    </>
  );
}
const F1: Flight[] = [
  ...SHEET.map((r, i) => ({ at: 2 + i, from: `p${i}`, to: `r${i}`, node: <span className={traveler}>{r[0]} · {r[1]} · {r[2]}</span> })),
  { at: 5, from: 'p3', to: 'held', node: <span className={traveler}>6 · Live Oak · 30 gal</span> },
];

/* ═══ Chapter 2 · 2:14 PM · An invoice becomes money in the books (the signature) ═══
   The invoice goes out by text. The customer's thumb presses Pay. $4,850.00 lifts
   off his receipt, rides the rail into the ledger, and the two running totals
   move in lockstep by exactly that amount. */
function W2({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-3 flex items-center gap-1.5`}><FileText className="h-3 w-3" /> Invoice 1042 · Melancon</p>
      <Arrive show={step >= 0} className="max-w-[340px] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-bold text-foreground">Invoice</span>
          <span className={`${mono} text-faint`}>sent by text</span>
        </div>
        <p className="mt-0.5 text-3xl font-black italic tracking-tighter text-foreground">$4,850.00</p>
      </Arrive>
      <Arrive show={step >= 1} className="mt-4 max-w-[300px] rounded-[20px] border border-white/15 bg-black/40 px-4 pb-4 pt-3">
        <span className="mx-auto mb-3 block h-1 w-14 rounded-full bg-white/20" />
        <p className={`${mono} text-faint`}>Melancon&rsquo;s phone</p>
        <motion.span
          initial={false}
          animate={step >= 2 ? { scale: [1, 0.94, 1] } : { scale: 1 }}
          transition={{ duration: 0.14 }}
          className="mt-2 inline-flex rounded-full bg-primary px-3.5 py-1.5 text-[12px] font-black text-black"
        >
          Pay $4,850 · card or bank
        </motion.span>
        <Arrive show={step >= 2} className={`${mono} mt-3 flex items-center justify-between text-foreground/85`}>
          <span>Paid · card · 2:14 PM</span>
          <motion.span ref={reg('receipt')} initial={false} animate={{ opacity: step >= 3 ? 0.35 : 1 }} className="font-black">$4,850.00</motion.span>
        </Arrive>
      </Arrive>
    </>
  );
}
function B2({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-2`}>Ledger · owed to you</p>
      <div>
        {ACCOUNTS.map((a, i) => (
          <motion.div key={a.n} initial={false} animate={{ opacity: i === 0 && step >= 3 ? 0.3 : 0.7 }} className={`${mono} flex h-6 items-center justify-between text-foreground`}>
            <span>{a.n}</span><span>{fmt(a.v)}</span>
          </motion.div>
        ))}
      </div>
      <p className={`${label} mb-1.5 mt-2 border-t border-white/10 pt-2`}>Today</p>
      <div className={`${mono} flex h-8 items-center justify-between rounded-lg bg-white/[0.04] px-3`}>
        <Dock show={step > 3}><span className="text-foreground">Melancon · paid &rarr; in the bank</span></Dock>
        <Dock show={step > 3}><span ref={reg('ledger')} className="font-black text-foreground">$4,850.00</span></Dock>
      </div>
      <div className="mt-3 flex flex-col-reverse items-start gap-1.5 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className={`${mono} text-muted-foreground`}><Seg show={step >= 4}>Written into your books</Seg></p>
        <Chip show={step >= 5}><Check className="h-3 w-3" /> Posted</Chip>
      </div>
    </>
  );
}
const F2: Flight[] = [{ at: 3, from: 'receipt', to: 'ledger', node: <span className={traveler}>$4,850.00</span> }];

/* ═══ Chapter 3 · 6:12 PM · A missed call becomes a booking ═══
   It rings twice. Nobody at the desk. She answers; "Tue 9:00 · new customer"
   is born on her chip and lands on Tuesday. */
const BARS = [0, 1, 2, 3, 4, 5, 6, 7];
const RING_ON = { scale: [1, 1.8], opacity: [0.8, 0] };
const RING_OFF = { opacity: 0 };
const WAVE_ON = { scaleY: [0.3, 1, 0.4] };
const WAVE_OFF = { scaleY: 0.35 };
const WEEK: [string, string | null][] = [['Mon', '8:00 · Broussard · tune-up'], ['Tue', null], ['Wed', '10:30 · Richard · tires'], ['Thu', '9:00 · Melancon · brakes'], ['Fri', '—']];
function W3({ step, live, reg }: ZoneProps) {
  const ringing = step === 0 && live;
  const talking = step >= 1 && step < 4 && live;
  return (
    <>
      <p className={`${label} mb-3 flex items-center gap-1.5`}><Phone className="h-3 w-3" /> After close · the shop line</p>
      <Arrive show={step >= 0} className="flex max-w-[360px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
          <Phone className="h-4 w-4 text-black" />
          <motion.span className="absolute inset-0 rounded-full border-2 border-primary/70" initial={false} animate={ringing ? RING_ON : RING_OFF} transition={ringing ? { duration: 1, repeat: 1, ease: 'easeOut' } : { duration: 0.2 }} />
        </span>
        <div className="min-w-0">
          <p className="text-[14px] font-bold text-foreground">Incoming · (318) ••• ••42</p>
          <p className={`${mono} text-faint`}>{step >= 1 ? 'she picked up' : 'nobody at the desk'}</p>
        </div>
      </Arrive>
      <Arrive show={step >= 1} className="mt-3 flex h-6 items-end gap-[3px] pl-1">
        {BARS.map((i) => (
          <motion.span key={i} className="w-[3px] rounded-full bg-primary" style={{ height: 20, transformOrigin: 'bottom' }} initial={false} animate={talking ? WAVE_ON : WAVE_OFF} transition={talking ? { duration: 0.7, repeat: 3, delay: i * 0.08 } : { duration: 0.2 }} />
        ))}
        <span className="ml-2 text-[11px] font-black uppercase tracking-[0.15em] text-primary">She answers</span>
      </Arrive>
      <Arrive show={step >= 2} className="mt-3 max-w-[86%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-4 py-2.5 text-[14px] leading-snug text-foreground/90">
        &ldquo;Can somebody come look at it this week?&rdquo;
      </Arrive>
      <Arrive show={step >= 3} className="ml-auto mt-2 w-fit max-w-[90%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-[13px] font-bold leading-snug text-black">
        Tuesday at 9 works &mdash; I&rsquo;ll have you on the calendar.
        <motion.span ref={reg('her')} initial={false} animate={{ opacity: step >= 4 ? 0.4 : 1 }} className="mt-1.5 block w-fit rounded-md bg-black/85 px-2 py-0.5 font-mono text-[11px] font-black text-primary">
          Tue 9:00 · new customer
        </motion.span>
      </Arrive>
    </>
  );
}
function B3({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-2`}>This week</p>
      <div className="space-y-0.5">
        {WEEK.map(([d, v]) => (
          <div key={d} className={`${mono} flex h-7 items-center gap-3 rounded-lg px-2 ${d === 'Tue' ? 'bg-white/[0.04]' : ''}`}>
            <span className="w-7 shrink-0 text-faint">{d}</span>
            {d === 'Tue'
              ? <Dock show={step > 4}><span ref={reg('tue')} className="rounded-md bg-white/[0.08] px-2 py-0.5 font-black text-foreground">Tue 9:00 · new customer</span></Dock>
              : <span className="truncate text-foreground/70">{v}</span>}
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-col-reverse items-start gap-1.5 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className={`${mono} text-muted-foreground`}><Seg show={step >= 5}>On your screen by morning</Seg></p>
        <Chip show={step >= 5}><Check className="h-3 w-3" /> Booked</Chip>
      </div>
    </>
  );
}
const F3: Flight[] = [{ at: 4, from: 'her', to: 'tue', node: <span className={traveler}>Tue 9:00 · new customer</span> }];

/* ═══ Chapter 4 · 11:59 PM · Two sets of books agree ═══
   Your old software on the left; each figure flies across to the new system;
   the new total climbs by exactly what docked until the two agree. */
const OLD = [{ n: 'Melancon', v: 0, note: 'paid today' }, { n: 'Broussard', v: 2300 }, { n: 'Richard', v: 1175 }, { n: 'Dauzat', v: 3600 }];
const NEWTOT = [0, 0, 2300, 3475, 7075];
function W4({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-3 flex items-center gap-1.5`}><Scale className="h-3 w-3" /> Your old software · tonight</p>
      <motion.div initial={false} animate={step >= 7 ? { opacity: 0.3, x: -8 } : { opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }} className="max-w-[340px] rounded-md border border-white/15 bg-[#1a1a1a] px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">A/R aging · export</p>
        <div className="mt-2">
          {OLD.map((o, i) => (
            <Arrive key={o.n} show={step >= 0} delay={i * 0.2} className={`${mono} flex h-6 items-center justify-between text-white/75`}>
              <span>{o.n}{o.note && <span className="text-white/35"> · {o.note}</span>}</span>
              <motion.span ref={reg(`o${i}`)} initial={false} animate={{ opacity: step >= 1 + i ? 0.35 : 1 }}>{fmt(o.v)}</motion.span>
            </Arrive>
          ))}
        </div>
        <Arrive show={step >= 0} delay={0.9} className={`${mono} mt-1.5 flex items-center justify-between border-t border-white/15 pt-1.5 text-white/80`}>
          <span className="uppercase tracking-[0.15em] text-[10px]">total</span><span className="font-black">{fmt(OWED_AFTER)}</span>
        </Arrive>
      </motion.div>
    </>
  );
}
function B4({ step, reg }: ZoneProps) {
  const k = Math.min(Math.max(step - 1, 0), 4); // the total climbs only when a figure DOCKS (the beat after its flight)
  return (
    <>
      <p className={`${label} mb-2`}>Your new system · tonight</p>
      <div>
        {OLD.map((o, i) => (
          <div key={o.n} className={`${mono} flex h-6 items-center justify-between text-foreground`}>
            <Dock show={step > 1 + i}><Check className="h-3.5 w-3.5 text-primary" /> {o.n}</Dock>
            <Dock show={step > 1 + i}><span ref={reg(`n${i}`)} className="font-black">{fmt(o.v)}</span></Dock>
          </div>
        ))}
      </div>
      <div className={`${mono} mt-1.5 flex items-center justify-between border-t border-white/10 pt-1.5`}>
        <span className={label}>total</span>
        <Money value={NEWTOT[k]} snap={step < 0} prefix="" className="font-black text-primary" />
      </div>
      <div className="mt-3 flex flex-col-reverse items-start gap-1.5 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className={`${mono} text-muted-foreground`}><Seg show={step >= 5}>{fmt(OWED_AFTER)} = {fmt(OWED_AFTER)}</Seg></p>
        <Chip show={step >= 6}><Check className="h-3 w-3" /> Matched · to the penny</Chip>
      </div>
    </>
  );
}
const F4: Flight[] = OLD.map((o, i) => ({ at: 1 + i, from: `o${i}`, to: `n${i}`, node: <span className={traveler}>{fmt(o.v)}</span> }));

/* ═══ Chapter 5 · 6:40 AM · Your Monday writes itself ═══
   The shop is dark. His phone fills with what happened; the brief types itself. */
const PINGS = [
  'Dauzat · ticket typed in · pull sheet printed',
  'Melancon · paid $4,850.00 · posted',
  'Tue 9:00 · new customer · booked',
  'Books matched · to the penny',
];
const BRIEF = `Owed to you $${fmt(OWED_AFTER)}. An estimate went quiet — she's nudging it today. About 1,200 prices checked. Nothing below cost.`;
const DARK = ['8:02 AM · a ticket from the truck', '2:14 PM · Melancon paid', '6:12 PM · a call after close', '11:59 PM · the books checked'];
function W5({ step }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-3 flex items-center gap-1.5`}><Sunrise className="h-3 w-3" /> Before open</p>
      <Arrive show={step >= 0} className="max-w-[340px]">
        <p className="text-[14px] font-bold text-foreground/80">The shop is dark.</p>
        <p className={`${mono} mt-1 text-faint`}>Nothing touched since 11:59 PM.</p>
      </Arrive>
      <div className="mt-5 max-w-[340px] space-y-1.5 border-l border-white/10 pl-3">
        {DARK.map((d, i) => (
          <motion.p key={d} initial={false} animate={{ opacity: step >= 1 + i ? 0.7 : step >= 0 ? 0.22 : 0 }} transition={{ duration: 0.4, ease }} className={`${mono} text-foreground`}>{d}</motion.p>
        ))}
      </div>
      <Arrive show={step >= 6} className={`${mono} mt-5 max-w-[340px] text-faint`}>Doors open at 7:30. It&rsquo;s already done.</Arrive>
    </>
  );
}
function B5({ step }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-2`}>Your phone</p>
      <div className="rounded-[18px] border border-white/15 bg-black/40 px-3.5 pb-3 pt-2.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[18px] font-black tracking-tight text-foreground">6:40</span>
          <Bell className="h-3.5 w-3.5 text-faint" />
        </div>
        <div className="mt-2 space-y-1">
          {PINGS.map((p, i) => (
            <Arrive key={p} show={step >= 1 + i} className={`${mono} flex items-center gap-2 rounded-md bg-white/[0.06] px-2.5 py-1 text-foreground/90`}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span className="truncate">{p}</span>
            </Arrive>
          ))}
        </div>
        <div className={`${mono} mt-2 min-h-[54px] rounded-md border border-primary/30 bg-primary/[0.06] px-2.5 py-1.5 leading-snug text-foreground`}>
          <Type text={BRIEF} on={step >= 5} cps={44} />
        </div>
      </div>
      <div className="mt-3 flex flex-col-reverse items-start gap-1.5 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className={`${mono} text-muted-foreground`}><Seg show={step >= 6}>In sentences, not a dashboard</Seg></p>
        <Chip show={step >= 6}><Check className="h-3 w-3" /> Ready</Chip>
      </div>
    </>
  );
}

/* ═══ Chapter 6 · Week one · Found money (the coda — the only real figures on stage) ═══
   Four slips in a drawer. One by one they straighten, fly, and stack; the figure
   settles on $195,882.75 exactly as the last one lands. */
const SLIPS = ['Job finished · never billed', 'Quote sent · never chased', 'Invoice · aging in a drawer', 'Extra work · never added'];
const SCATTER = [{ l: 0, y: 0, r: -4 }, { l: 42, y: 22, r: 2 }, { l: 8, y: 74, r: -1 }, { l: 44, y: 96, r: 3 }];
function W6({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-3 flex items-center gap-1.5`}><Banknote className="h-3 w-3" /> Edwards Roofing · the drawer</p>
      <div className="relative h-[170px] max-w-[340px]">
        {SLIPS.map((s, i) => (
          <motion.div
            key={s}
            ref={reg(`s${i}`)}
            initial={false}
            animate={step >= 0 ? { opacity: step >= 2 + i ? 0.3 : 1, y: SCATTER[i].y, rotate: step >= 2 + i ? 0 : SCATTER[i].r } : { opacity: 0, y: SCATTER[i].y + 24, rotate: SCATTER[i].r }}
            transition={{ duration: 0.45, ease, delay: step === 0 ? i * 0.12 : 0 }}
            style={{ left: `${SCATTER[i].l}%` }}
            className={`absolute top-0 w-fit whitespace-nowrap rounded-[2px] px-3 py-1.5 font-mono text-[11px] font-bold ${paper}`}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </>
  );
}
function B6({ step, reg }: ZoneProps) {
  return (
    <>
      <p className={`${label} mb-2`}>Found · week one</p>
      <div className="space-y-1">
        {SLIPS.map((s, i) => (
          <div key={s} className={`${mono} flex h-7 items-center rounded-lg bg-white/[0.04] px-3`}>
            <Dock show={step > 2 + i}><Check className="h-3.5 w-3.5 text-primary" /><span ref={reg(`f${i}`)} className="text-foreground">{s}</span></Dock>
          </div>
        ))}
      </div>
      <Arrive show={step >= 7} className={`${mono} mt-3 text-foreground/85`}>
        and a <span className="relative inline-block font-black text-foreground">${fmt(EDWARDS.error)}<motion.span initial={false} animate={{ scaleX: step >= 7 ? 1 : 0 }} transition={{ duration: 0.45, ease, delay: 0.3 }} className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary" /></span> bookkeeping error his old software never saw
      </Arrive>
      <div className="mt-3 flex flex-col-reverse items-start gap-1.5 md:flex-row md:items-center md:justify-between md:gap-3">
        <p className={`${mono} text-muted-foreground`}><Seg show={step >= 6}>Found, not projected</Seg></p>
        <Chip show={step >= 8}><Check className="h-3 w-3" /> Already earned</Chip>
      </div>
    </>
  );
}
const F6: Flight[] = SLIPS.map((s, i) => ({ at: 2 + i, from: `s${i}`, to: `f${i}`, node: <span className={traveler}>{s}</span> }));

/* ─── The chapters ─── */
type Scene = {
  key: string; time: string; title: string; caption: string; Icon: LucideIcon;
  steps: number[]; World: ComponentType<ZoneProps>; Books: ComponentType<ZoneProps>; flights: Flight[];
  footer: 'totals' | 'found';
};
const SCENES: Scene[] = [
  { key: 'paper', time: '8:02 AM', title: 'Your paperwork reads itself.', Icon: Camera, World: W1, Books: B1, flights: F1, footer: 'totals',
    steps: [1200, 500, 650, 650, 650, 800, 400],
    caption: 'A photo of a scribbled order. Typed in before you’re back in the truck. The odd one held — never guessed.' },
  { key: 'money', time: '2:14 PM', title: 'An invoice becomes money in the books.', Icon: FileText, World: W2, Books: B2, flights: F2, footer: 'totals',
    steps: [1400, 1200, 700, 900, 900, 400],
    caption: 'Sent by text. Paid from his phone. Written into your books. Nobody typed a thing.' },
  { key: 'call', time: '6:12 PM', title: 'A missed call becomes a booking.', Icon: Phone, World: W3, Books: B3, flights: F3, footer: 'totals',
    steps: [2200, 600, 1000, 1200, 800, 400],
    caption: 'She answers after close. It’s on your screen in the morning. You were at dinner.' },
  { key: 'match', time: '11:59 PM', title: 'Two sets of books agree.', Icon: Scale, World: W4, Books: B4, flights: F4, footer: 'totals',
    steps: [1300, 550, 550, 550, 550, 700, 400, 500],
    caption: 'Runs beside your old software, checked every night, until you say go.' },
  { key: 'monday', time: '6:40 AM', title: 'Your Monday writes itself.', Icon: Sunrise, World: W5, Books: B5, flights: [], footer: 'totals',
    steps: [800, 550, 550, 550, 550, 3000, 400],
    caption: 'What sold, what’s aging, who owes — in sentences, waiting before you unlock the door.' },
  { key: 'found', time: 'Week one', title: 'Found money.', Icon: Banknote, World: W6, Books: B6, flights: F6, footer: 'found',
    steps: [900, 800, 500, 500, 500, 500, 600, 900, 400],
    caption: 'Money he’d already earned. Found, not projected.' },
];
const sceneMs = (s: Scene) => LEAD_MS + s.steps.reduce((a, b) => a + b, 0) + HOLD_MS;

/** One setTimeout chain per chapter. Restarts at -1 whenever `key` changes or
    playback resumes; frozen = the last step, always. */
function useSceneClock(durations: number[], run: boolean, frozen: boolean, key: string, onDone: () => void) {
  const [step, setStep] = useState(frozen ? durations.length - 1 : -1);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  const durRef = useRef(durations);
  durRef.current = durations;
  useEffect(() => {
    if (frozen) { setStep(durRef.current.length - 1); return; }
    setStep(-1);
    if (!run) return;
    let i = -1;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      if (i >= durRef.current.length) { t = setTimeout(() => doneRef.current(), HOLD_MS); return; }
      setStep(i);
      t = setTimeout(tick, durRef.current[i]);
    };
    t = setTimeout(tick, LEAD_MS);
    return () => clearTimeout(t);
  }, [run, frozen, key]);
  return step;
}

const cut = { initial: false as const, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -12 }, transition: { duration: 0.25, ease } };

export function AutomationReel({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const frozen = !!useReducedMotion();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const f = () => setVisible(document.visibilityState === 'visible');
    f();
    document.addEventListener('visibilitychange', f);
    return () => document.removeEventListener('visibilitychange', f);
  }, []);
  const run = inView && visible && !frozen;
  // On phones the page's chat launcher sits over the stage's corner — it steps aside while the reel is on.
  useEffect(() => {
    document.body.classList.toggle('reel-live', inView);
    return () => document.body.classList.remove('reel-live');
  }, [inView]);

  const [idx, setIdx] = useState(0);
  const [cycle, setCycle] = useState(0);
  const go = useCallback((i: number) => { setIdx(((i % SCENES.length) + SCENES.length) % SCENES.length); setCycle((c) => c + 1); }, []);
  const next = useCallback(() => { setIdx((i) => (i + 1) % SCENES.length); setCycle((c) => c + 1); }, []);
  const prev = useCallback(() => { setIdx((i) => (i - 1 + SCENES.length) % SCENES.length); setCycle((c) => c + 1); }, []);
  // Scrolled away and back: restart the current chapter at beat 0 — never resume mid-flight.
  const wasIn = useRef(false);
  useEffect(() => { if (inView && wasIn.current) setCycle((c) => c + 1); wasIn.current = inView; }, [inView]);
  // Reduced motion: final frames, swapping every 6s.
  useEffect(() => {
    if (!frozen || !inView) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [frozen, inView, next]);

  const scene = SCENES[idx];
  const bodyKey = `${scene.key}-${cycle}`;
  const step = useSceneClock(scene.steps, run, frozen, bodyKey, next);
  const live = run;
  const { refs, reg } = useRegistry();
  const ms = sceneMs(scene);

  // The running totals survive every cut; chapter 2, beat 4 moves them in lockstep.
  const paid = idx > 1 || (idx === 1 && step >= 4);
  const owed = paid ? OWED_AFTER : OWED_OPEN;
  const bank = paid ? ACCOUNTS[0].v : 0;
  const snap = step < 0;

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <div ref={ref} className={className}>
      {/* ── The stage ── */}
      <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.06} onDragEnd={onDragEnd} className="select-none">
        <div ref={stageRef} className="relative mx-auto h-[680px] max-w-[1040px] overflow-hidden rounded-2xl border border-white/10 bg-card/20 md:h-[560px]">
          {/* top bar: the clock narrates */}
          <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 md:px-6">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <Clock value={scene.time} />
            </div>
            <span className="font-mono text-[11px] text-faint">Demo books · real behavior</span>
          </div>
          <div className="grid h-[calc(100%-44px)] grid-rows-[46fr_54fr] md:grid-cols-[56fr_44fr] md:grid-rows-none">
            {/* THE WORLD */}
            <div className="relative overflow-hidden p-4 md:p-6">
              <AnimatePresence mode="wait">
                <motion.div key={bodyKey} {...cut} className="relative h-full">
                  <scene.World step={step} live={live} reg={reg} />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* YOUR BOOKS */}
            <div className="relative flex flex-col overflow-hidden border-t border-white/10 bg-white/[0.03] p-4 md:border-l md:border-t-0 md:p-6">
              <p className={`${label} mb-3 text-primary`}>Your books</p>
              <div className="relative min-h-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div key={bodyKey} {...cut} className="h-full">
                    <scene.Books step={step} live={live} reg={reg} />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* the running figures — they never clear */}
              <div className="mt-3 border-t border-white/10 pt-3">
                <AnimatePresence mode="wait" initial={false}>
                  {scene.footer === 'totals' ? (
                    <motion.div key="totals" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="grid grid-cols-2 gap-3">
                      <div>
                        <p className={label}>Owed to you</p>
                        <Money value={owed} snap={snap} className="text-xl font-black italic tracking-tighter text-foreground md:text-2xl" />
                      </div>
                      <div>
                        <p className={label}>In the bank today</p>
                        <Money value={bank} snap={snap} className="text-xl font-black italic tracking-tighter text-primary md:text-2xl" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="found" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="grid grid-cols-2 gap-3">
                      <div>
                        <p className={label}>Found in week one</p>
                        <Money value={step >= 2 ? EDWARDS.found : 0} hidden={step < 2} dur={2.0} className="text-xl font-black italic tracking-tighter text-primary md:text-2xl" />
                      </div>
                      <div>
                        <p className={label}>Error caught</p>
                        <Money value={EDWARDS.error} snap hidden={step < 7} className="text-xl font-black italic tracking-tighter text-foreground md:text-2xl" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* in flight — one at a time */}
          {!frozen && scene.flights.filter((f) => f.at === step).map((f) => (
            <Fly key={`${bodyKey}-${f.at}`} refs={refs} stage={stageRef} from={f.from} to={f.to} ms={scene.steps[f.at]}>{f.node}</Fly>
          ))}
        </div>
      </motion.div>

      {/* ── The chapter rail ── */}
      <div className="mx-auto mt-4 max-w-[1040px]">
        <ol className="hidden grid-cols-6 gap-2 md:grid">
          {SCENES.map((s, i) => {
            const active = i === idx;
            return (
              <li key={s.key}>
                <button type="button" onClick={() => go(i)} aria-current={active ? 'true' : undefined} className="group relative w-full overflow-hidden rounded-lg px-2 pb-3 pt-2 text-left transition-colors hover:bg-white/[0.03]">
                  <p className={`font-mono text-[11px] font-black tracking-wide transition-colors ${active ? 'text-primary' : 'text-faint group-hover:text-foreground/70'}`}>{s.time}</p>
                  <p className={`mt-0.5 text-[12px] font-bold leading-tight tracking-tight transition-colors ${active ? 'text-foreground' : 'text-foreground/50 group-hover:text-foreground/80'}`}>{s.title}</p>
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-white/[0.08]" />
                  {active && (
                    <motion.span key={cycle} className="absolute bottom-0 left-2 right-2 h-[2px] origin-left rounded-full bg-primary" initial={{ scaleX: 0 }} animate={{ scaleX: run || frozen ? 1 : 0 }} transition={run ? { duration: ms / 1000, ease: 'linear' } : frozen ? { duration: 6, ease: 'linear' } : { duration: 0.25 }} />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
        <div className="flex gap-1.5 md:hidden">
          {SCENES.map((s, i) => (
            <button key={s.key} type="button" aria-label={s.title} onClick={() => go(i)} className="flex-1 py-2">
              <span className="block h-[3px] w-full overflow-hidden rounded-full bg-white/[0.1]">
                <motion.span key={`${i}-${cycle}`} className="block h-full w-full origin-left bg-primary" initial={false} animate={{ scaleX: i < idx ? 1 : i === idx ? (run || frozen ? 1 : 0) : 0 }} transition={i === idx && (run || frozen) ? { duration: (frozen ? 6000 : ms) / 1000, ease: 'linear' } : { duration: 0.25 }} />
              </span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="mt-3 px-1 md:mt-4 md:text-center">
            <p className="flex items-center gap-2 text-sm font-black tracking-tight text-foreground md:hidden">
              <scene.Icon className="h-3.5 w-3.5 text-primary" /> {scene.time} · {scene.title}
            </p>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground md:mt-0 md:text-base">{scene.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
