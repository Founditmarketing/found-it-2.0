'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { trackLead, trackFormStart, captureUTMs, getStoredUTMs } from '@/lib/analytics';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';

/* THE TOO GOOD TO BE TRUE LIST — a text thread, not an article. The Facebook
   ad shows a real exchange; this page keeps it going in the same bubbles.
   Copy law: the list copy is FINAL (judge-panel pass), no client names, and
   never any refund/guarantee language. The gate is a reply composer posting
   to the house /api/lead pipe — same rails, same inbox, same pixels. */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Attribution tag on /api/lead + every analytics event from this page. */
const SOURCE = 'too-good-list';

/** Returning visitors stay unlocked — the gate charges once. */
const UNLOCK_KEY = 'fis_list_unlocked';

/** The thread renders in the system UI stack, not the site fonts — the
    bubbles only read as a real conversation in the phone's own type. */
const SYSTEM_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

type Item = { head: string; body: string };

/** Items 1–3 — open to everyone. Verbatim, do not edit. */
const ITEMS_OPEN: Item[] = [
  {
    head: 'Your phone, answered at 9pm.',
    body: 'Calls and texts after close get answered, the customer gets a straight update, and the booking is on your screen in the morning. What happened to the last call you missed at 4:45?',
  },
  {
    head: 'Your paperwork reads itself.',
    body: "Snap a photo of an order, an invoice, a handwritten ticket — it's read line by line and typed in before you're back in the truck.",
  },
  {
    head: 'Your books post themselves.',
    body: 'Ring the sale; the ledger entry writes itself, clean enough for your accountant. Done right, they match QuickBooks to the penny.',
  },
];

/** Items 4–9 — behind the gate. Verbatim, do not edit. */
const ITEMS_GATED: Item[] = [
  {
    head: 'Your prices protect themselves.',
    body: "Load your suppliers' price files and nothing sells below cost again. You approve every fix with your thumb.",
  },
  {
    head: 'Your lost money gets found.',
    body: 'Forgotten jobs, quotes nobody chased, invoices aging in a drawer — pulled onto one screen. This one found a tree service $268,000.',
  },
  {
    head: 'Your invoices collect themselves.',
    body: "Sent by text, paid by card or bank from the customer's phone, money in your account. The quiet ones get a polite nudge on schedule.",
  },
  {
    head: 'You can ask your business anything.',
    body: '"Who owes me the most?" "Which customers went quiet this year?" Plain English in, straight answer out — from your records, not the internet.',
  },
  {
    head: 'Your follow-ups happen without you.',
    body: 'The check-in after the job. The reminder before the appointment. The estimate that went silent. Handled, politely, every time.',
  },
  {
    head: 'Your Monday writes itself.',
    body: "What sold, what's aging, who owes — in sentences, waiting before you unlock the door.",
  },
];

/** Three closing sends. Verbatim, do not edit. */
const CLOSERS: string[] = [
  'Now the catch. His rule says there has to be one.',
  "Here it is: none of this comes off a shelf. Each one gets built for one business — yours — and you own it. Code and data. Month to month. If we ever part ways, it all leaves with you.",
  'Nobody rents you your own business back.',
];

const GATE_LINE =
  "The other six cost your name and number. Still free — I just want to know who's reading.";

/* ─── Thread primitives ─── */

/** Centered gray metadata line (timestamps, edition note). */
function ThreadMeta({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[11px] font-medium text-[#8e8e93] px-4">{children}</p>
  );
}

/** Gray incoming bubble, left-aligned. */
function IncomingBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-[18px] rounded-bl-[6px] bg-[#e9e9eb] px-4 py-2.5 text-[15px] leading-snug text-[#111111] break-words">
        {children}
      </div>
    </div>
  );
}

/** Blue outgoing bubble, right-aligned. */
function OutgoingBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-[18px] rounded-br-[6px] bg-[#0b93f6] px-4 py-2.5 text-[15px] leading-snug text-white break-words">
        {children}
      </div>
    </div>
  );
}

/** A list item as an outgoing send: bold first line, then the body. */
function ItemBubble({ item }: { item: Item }) {
  return (
    <OutgoingBubble>
      <span className="block font-bold">{item.head}</span>
      <span className="block mt-0.5">{item.body}</span>
    </OutgoingBubble>
  );
}

/* ─── The gate: a reply composer at the bottom of the thread ─── */

const composerInputClass =
  'w-full rounded-full bg-white border border-[#d1d1d6] px-4 py-2.5 text-[15px] text-[#111111] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#0b93f6] transition-colors';

function GateComposer({ onUnlocked }: { onUnlocked: () => void }) {
  const uid = useId();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [started, setStarted] = useState(false);
  const [fields, setFields] = useState({ name: '', phone: '', email: '', hp: '' });

  const update =
    (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!fields.name.trim() || !fields.phone.trim()) {
      setStatus('error');
      setErrorMsg('Name and cell are required — that is the whole price.');
      return;
    }

    // Email is optional, but the API rejects malformed non-empty emails —
    // never let a valid name+phone lead die over an optional field.
    const email = fields.email.trim();
    if (email && !/^\S+@\S+\.\S{2,}$/.test(email)) {
      setStatus('error');
      setErrorMsg("That email doesn't look right — fix it or leave it blank.");
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Attribution rides in the message body — the lead API has a fixed field
    // set, and this keeps page + campaign context on the notification.
    const utms = getStoredUTMs();
    const trail = [
      'Page: list (The Too Good To Be True List)',
      ...Object.entries(utms).map(([k, v]) => `${k}: ${v}`),
    ];
    const message = `Unlocked the Too Good To Be True List.\n\n— ${trail.join(' · ')}`;

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: SOURCE,
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email,
          message,
          hp: fields.hp,
        }),
      });
      if (!res.ok) throw new Error('lead_failed');

      // Same conversion discipline as every other gate: trackLead fires the
      // GA4 lead event + Google Ads lead conversion + Meta pixel Lead. No
      // revenue band asked here, so it trains as qualified (house default).
      trackLead(SOURCE);
      onUnlocked();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong sending that.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      data-lead-form
      onFocusCapture={() => {
        if (!started) {
          setStarted(true);
          trackFormStart(SOURCE);
        }
      }}
      className="relative mt-5 border-t border-[#d1d1d6]/70 pt-4 space-y-2.5"
    >
      <label htmlFor={`${uid}-name`} className="sr-only">
        Name
      </label>
      <input
        id={`${uid}-name`}
        name="name"
        type="text"
        autoComplete="name"
        required
        maxLength={200}
        value={fields.name}
        onChange={update('name')}
        placeholder="Name"
        className={composerInputClass}
      />
      <label htmlFor={`${uid}-phone`} className="sr-only">
        Cell
      </label>
      <input
        id={`${uid}-phone`}
        name="phone"
        type="tel"
        autoComplete="tel"
        required
        maxLength={40}
        value={fields.phone}
        onChange={update('phone')}
        placeholder="Cell"
        className={composerInputClass}
      />
      <label htmlFor={`${uid}-email`} className="sr-only">
        Email
      </label>
      <input
        id={`${uid}-email`}
        name="email"
        type="email"
        autoComplete="email"
        maxLength={254}
        value={fields.email}
        onChange={update('email')}
        placeholder="Email (optional)"
        className={composerInputClass}
      />

      {/* Honeypot — humans never see this; bots fill it and get silently
          dropped server-side. Same deliberately meaningless name as the house
          form: a field named "company" gets filled by Chrome autofill. */}
      <div
        className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${uid}-fim-extra`}>Leave this field empty</label>
        <input
          id={`${uid}-fim-extra`}
          name="fim_extra_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.hp}
          onChange={update('hp')}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-[13px] font-medium text-[#d70015] px-1">
          {errorMsg}{' '}
          {errorMsg.startsWith('Something') && (
            <>
              Text or call instead: <TrackedPhoneLink />
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-bold text-[15px] py-2.5 hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          'Send'
        )}
      </button>
    </form>
  );
}

/* ─── Page ─── */

export default function ListClient() {
  const [unlocked, setUnlocked] = useState(false);
  // Distinguishes a fresh submit (animate the reveal) from a returning
  // visitor restored via localStorage (content is just there, no theater).
  const [justUnlocked, setJustUnlocked] = useState(false);

  useEffect(() => {
    captureUTMs();
    try {
      if (window.localStorage.getItem(UNLOCK_KEY)) setUnlocked(true);
    } catch {
      /* storage blocked — the gate simply asks again */
    }
  }, []);

  function handleUnlocked() {
    setJustUnlocked(true);
    setUnlocked(true);
    try {
      window.localStorage.setItem(UNLOCK_KEY, '1');
    } catch {
      /* storage blocked — unlock still works for this visit */
    }
  }

  return (
    <main className="bg-transparent text-foreground pt-28 lg:pt-36 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[430px] px-4">
        {/* ─── Site-chrome header above the thread ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-8"
        >
          <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-3">
            The Too Good To Be True List
          </h1>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed">
            Nine things real Louisiana businesses run every day that sound like lies.
            August&ndash;October 2026 edition.
          </p>
        </motion.div>

        {/* ─── The thread ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
          className="rounded-3xl bg-white shadow-2xl shadow-black/40 px-4 py-6 space-y-3"
          style={{ fontFamily: SYSTEM_STACK }}
        >
          <ThreadMeta>HVAC Contractor · Tue 4:38 PM</ThreadMeta>

          <IncomingBubble>If something sounds too good to be true, it generally is.</IncomingBubble>
          <OutgoingBubble>Fair. Come watch it run.</OutgoingBubble>

          {ITEMS_OPEN.map((item) => (
            <ItemBubble key={item.head} item={item} />
          ))}

          {/* The gate */}
          <IncomingBubble>{GATE_LINE}</IncomingBubble>

          {unlocked ? (
            <motion.div
              initial={justUnlocked ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="space-y-3"
            >
              <p className="text-right text-[11px] font-medium text-[#8e8e93] px-1">Delivered</p>

              {ITEMS_GATED.map((item) => (
                <ItemBubble key={item.head} item={item} />
              ))}

              {CLOSERS.map((line) => (
                <OutgoingBubble key={line}>{line}</OutgoingBubble>
              ))}

              <div className="pt-2">
                <ThreadMeta>
                  The October edition will be longer. This stuff doesn&rsquo;t slow down.
                </ThreadMeta>
              </div>
            </motion.div>
          ) : (
            <GateComposer onUnlocked={handleUnlocked} />
          )}
        </motion.div>

        {/* ─── Site-styled CTA band, only once the whole list is read ─── */}
        {unlocked && (
          <motion.div
            initial={justUnlocked ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: justUnlocked ? 0.3 : 0, duration: 0.7, ease }}
            className="mt-10 bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl p-6 text-center"
          >
            <h2 className="font-heading text-xl font-black uppercase italic tracking-tighter text-foreground mb-4 leading-tight">
              Want one of these running in your business?
            </h2>
            <Link
              href="/foundit-os#lead-form"
              className="inline-flex w-full items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Get My Software Map
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-medium">
              Or text or call Trevor: <TrackedPhoneLink />
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
