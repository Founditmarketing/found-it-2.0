'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { trackLead, trackFormStart, captureUTMs, getStoredUTMs } from '@/lib/analytics';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';

/* THE TOO GOOD TO BE TRUE LIST — premium dark editorial article with a
   paywall-style gate after item 03. Copy law: list copy is FINAL, no client
   names, never any refund/guarantee language. The gate posts to the house
   /api/lead pipe — same rails, same inbox, same pixels. */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Attribution tag on /api/lead + every analytics event from this page. */
const SOURCE = 'too-good-list';

/** Returning visitors stay unlocked — the gate charges once. */
const UNLOCK_KEY = 'fis_list_unlocked';

type Item = { n: string; head: string; body: string };

/** Items 01–03 — open to everyone. Verbatim, do not edit. */
const ITEMS_OPEN: Item[] = [
  {
    n: '01',
    head: 'Your phone, answered at 9pm.',
    body: 'Calls and texts after close get answered, the customer gets a straight update, and the booking is on your screen in the morning. What happened to the last call you missed at 4:45?',
  },
  {
    n: '02',
    head: 'Your paperwork reads itself.',
    body: "Snap a photo of an order, an invoice, a handwritten ticket — it's read line by line and typed in before you're back in the truck.",
  },
  {
    n: '03',
    head: 'Your books post themselves.',
    body: 'Ring the sale; the ledger entry writes itself, clean enough for your accountant. Done right, they match QuickBooks to the penny.',
  },
];

/** Items 04–09 — behind the gate. Verbatim, do not edit. */
const ITEMS_GATED: Item[] = [
  {
    n: '04',
    head: 'Your prices protect themselves.',
    body: "Load your suppliers' price files and nothing sells below cost again. You approve every fix with your thumb.",
  },
  {
    n: '05',
    head: 'Your lost money gets found.',
    body: 'Forgotten jobs, quotes nobody chased, invoices aging in a drawer — pulled onto one screen. This one found a tree service $268,000.',
  },
  {
    n: '06',
    head: 'Your invoices collect themselves.',
    body: "Sent by text, paid by card or bank from the customer's phone, money in your account. The quiet ones get a polite nudge on schedule.",
  },
  {
    n: '07',
    head: 'You can ask your business anything.',
    body: '"Who owes me the most?" "Which customers went quiet this year?" Plain English in, straight answer out — from your records, not the internet.',
  },
  {
    n: '08',
    head: 'Your follow-ups happen without you.',
    body: 'The check-in after the job. The reminder before the appointment. The estimate that went silent. Handled, politely, every time.',
  },
  {
    n: '09',
    head: 'Your Monday writes itself.',
    body: "What sold, what's aging, who owes — in sentences, waiting before you unlock the door.",
  },
];

/** Renders an item body, giving the $268,000 figure the accent it earns. */
function ItemBody({ body }: { body: string }) {
  const MONEY = '$268,000';
  if (!body.includes(MONEY)) {
    return <p className="text-[17px] leading-relaxed text-foreground/75">{body}</p>;
  }
  const [before, after] = body.split(MONEY);
  return (
    <p className="text-[17px] leading-relaxed text-foreground/75">
      {before}
      <span className="font-bold text-primary">{MONEY}</span>
      {after}
    </p>
  );
}

/** One editorial entry: ghost numeral, bold head, short body. */
function Entry({ item, animate = false }: { item: Item; animate?: boolean }) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease }}
      className="relative pl-2"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 -left-2 font-heading text-[84px] sm:text-[96px] font-black italic leading-none text-primary/[0.09]"
      >
        {item.n}
      </span>
      <div className="relative">
        <h2 className="font-heading text-2xl sm:text-[26px] font-extrabold tracking-tight text-foreground mb-2.5">
          {item.head}
        </h2>
        <ItemBody body={item.body} />
      </div>
    </motion.div>
  );
}

/* ─── The gate ─── */

const gateInputClass =
  'w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition-colors';

function GateCard({ onUnlocked }: { onUnlocked: () => void }) {
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
      // GA4 lead event + Google Ads lead conversion + Meta pixel Lead.
      trackLead(SOURCE);
      onUnlocked();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong sending that.');
    }
  }

  return (
    <div className="relative">
      {/* The tease: item 04 starts, then fades into the gate. */}
      <div aria-hidden="true" className="relative pl-2 pointer-events-none">
        <span className="select-none absolute -top-10 -left-2 font-heading text-[84px] sm:text-[96px] font-black italic leading-none text-primary/[0.09]">
          04
        </span>
        <h2 className="relative font-heading text-2xl sm:text-[26px] font-extrabold tracking-tight text-foreground/90 mb-2.5">
          Your prices protect themselves.
        </h2>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

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
        className="relative mt-6 rounded-2xl border border-primary/25 bg-card/15 backdrop-blur-xl p-6 sm:p-8"
      >
        <h3 className="font-heading text-2xl font-black tracking-tight text-foreground leading-snug">
          The other six cost your name and number.
        </h3>
        <p className="mt-2 mb-6 text-[15px] text-muted-foreground font-medium">
          Still free — I just want to know who&rsquo;s reading.
        </p>

        <div className="space-y-3">
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
            className={gateInputClass}
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
            className={gateInputClass}
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
            className={gateInputClass}
          />
        </div>

        {/* Honeypot — humans never see this; bots fill it and get silently
            dropped server-side. Same field name as the house form. */}
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
          <p role="alert" className="mt-3 text-[13px] font-medium text-red-400">
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
          className="mt-5 w-full h-14 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Unlocking…
            </>
          ) : (
            'Unlock the list'
          )}
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground/80">
          No spam. The October edition comes to you automatically.
        </p>
      </form>
    </div>
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

      <article className="relative z-10 mx-auto w-full max-w-[680px] px-5">
        {/* ─── Masthead ─── */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
            The August&ndash;October 2026 Edition
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.92] text-foreground">
            The Too Good
            <br />
            To Be True List
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
            Nine things real Louisiana businesses run every day that sound like lies.
          </p>
          <p className="mt-5 text-xs text-muted-foreground/80 font-medium uppercase tracking-widest">
            Trevor Ruby &nbsp;·&nbsp; Found It Software, Alexandria LA &nbsp;·&nbsp; A 2-minute read
          </p>
        </motion.header>

        {/* ─── The text that started it ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
          className="mt-12 border-l-4 border-primary bg-card/20 rounded-r-2xl px-6 py-6"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            A text I got last week
          </p>
          <p className="font-heading text-2xl sm:text-[28px] font-bold italic tracking-tight leading-snug text-foreground">
            &ldquo;If something sounds too good to be true, it generally is.&rdquo;
          </p>
          <p className="mt-3 text-sm text-muted-foreground font-medium">— an HVAC contractor</p>
        </motion.div>

        {/* ─── Intro ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
          className="mt-10 space-y-5"
        >
          <p className="text-[17px] leading-relaxed text-foreground/85">
            He&rsquo;s right. Keep that rule — it&rsquo;s kept a lot of good men from getting
            robbed. Point it at this list.
          </p>
          <p className="text-[17px] leading-relaxed text-foreground/85">
            Because this isn&rsquo;t a brochure of someday. Every line below is possible for your
            business <span className="font-bold text-foreground">today</span> — and every one is
            already running inside a real Louisiana business while you read this.
          </p>
        </motion.div>

        {/* ─── Items 01–03, open ─── */}
        <div className="mt-20 space-y-16 sm:space-y-20">
          {ITEMS_OPEN.map((item) => (
            <Entry key={item.n} item={item} animate />
          ))}
        </div>

        {/* ─── The gate, or the rest of the list ─── */}
        <div className="mt-20">
          {unlocked ? (
            <motion.div
              initial={justUnlocked ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="space-y-16 sm:space-y-20"
            >
              {ITEMS_GATED.map((item) => (
                <Entry key={item.n} item={item} animate={justUnlocked} />
              ))}

              {/* ─── The catch ─── */}
              <div className="pt-4 border-t border-primary/20">
                <h2 className="font-heading text-3xl font-black uppercase italic tracking-tighter text-foreground mb-5">
                  Now the catch.
                </h2>
                <p className="text-[17px] leading-relaxed text-foreground/85">
                  His rule says there has to be one. Here it is: none of this comes off a shelf.
                  Each one gets built for one business — <span className="font-bold">yours</span> —
                  and you own it. Code and data. Month to month. If we ever part ways, it all
                  leaves with you.
                </p>
                <p className="mt-5 text-[17px] leading-relaxed text-foreground/85 italic">
                  Hunt for the trap. Take your time. The catch cuts the other way.
                </p>
                <p className="mt-10 font-heading text-3xl sm:text-4xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground">
                  Nobody rents you your own business back<span className="text-primary">.</span>
                </p>
                <p className="mt-8 text-sm text-muted-foreground font-medium">
                  The October edition will be longer. This stuff doesn&rsquo;t slow down.
                </p>
              </div>
            </motion.div>
          ) : (
            <GateCard onUnlocked={handleUnlocked} />
          )}
        </div>

        {/* ─── CTA band, only once the whole list is read ─── */}
        {unlocked && (
          <motion.div
            initial={justUnlocked ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: justUnlocked ? 0.3 : 0, duration: 0.7, ease }}
            className="mt-16 bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl p-6 sm:p-8 text-center"
          >
            <h2 className="font-heading text-xl sm:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-4 leading-tight">
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
      </article>
    </main>
  );
}
