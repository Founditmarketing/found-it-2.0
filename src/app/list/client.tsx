'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { trackLead, trackFormStart, captureUTMs, getStoredUTMs } from '@/lib/analytics';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';
import { VoiceAgentWidget } from '@/components/lp/VoiceAgentWidget';
import { FounderByline } from '@/components/FounderByline';
import { AutomationReel } from '@/components/os/AutomationReel';

/* THE TOO GOOD TO BE TRUE LIST — premium dark editorial article with a
   paywall-style gate after item 03. Copy law: list copy is FINAL; the only
   client name is Cory Edwards and every figure is a sanctioned one already
   public on the Edwards case study; never any refund/guarantee language,
   never a price. The gate costs ONE thing — a cell number — and posts to
   the house /api/lead pipe: same rails, same inbox, same pixels. The page
   ends on her: the AI secretary from item 01, live, in both states — a
   visitor who won't type a cell can say it instead (8/22). */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Attribution tag on /api/lead + every analytics event from this page. */
const SOURCE = 'too-good-list';

/** Her attribution — beside the gate's tag, tellable at a glance in the inbox. */
const VOICE_SOURCE = 'too-good-list-voice';
/** Her first line here: she knows they just read the list. */
const VOICE_OPENER =
  'You just read the list. Which number would you want running by Monday? Tell me the number, your name and your cell, and Trevor will call you.';

/** What she reads aloud from the "Let her read it to you" tap (8/22 — Trevor:
    "a button that activates the secretary reading the page… for those that
    want it narrated"). The same nine, the same sanctioned numbers, spoken. */
const LIST_NARRATION = `Here's Trevor's list. Nine things real Louisiana businesses do every day that sound like lies. It takes about a minute.
One. Your phone, answered at 9 p.m. Calls and texts after close get answered and booked. The job's on your screen by morning.
Two. Your paperwork reads itself. Snap a photo of a ticket and it's typed in before you're back in the truck.
Three. Your books post themselves. Ring up a sale and the books write themselves. One dealership matched QuickBooks to the penny, all 37 accounts.
Four. Your prices protect themselves. Load your suppliers' price lists and nothing sells below cost again.
Five. Your lost money gets found. It found a tree service 268 thousand dollars. It found Cory Edwards of Edwards Roofing 195 thousand, 882 dollars and 75 cents he'd already earned.
Six. Your invoices collect themselves. The bill goes out by text, the customer taps Pay, and the money lands in your account.
Seven. You can ask your business anything. Who owes me the most? Straight answer, from your own records.
Eight. Your follow-ups happen without you. The thank-you, the reminder, the quote nobody answered. Handled.
Nine. Your Monday writes itself. What sold, what's late, who owes you. In plain sentences, before you unlock the door.
That's the nine. The catch? None of it is store-bought. It's built for your business, and you own it, the code and the data. Nobody rents you your own business back.
So. Which number would you want running by Monday? Tell me the number, and your name and phone number, and Trevor will call you himself.`;

/** Returning visitors stay unlocked — the gate charges once. */
const UNLOCK_KEY = 'fis_list_unlocked';

/** OPEN LIST (Trevor 8/19: "just give the whole list for free right now").
 *  true = every item renders for everyone, no gate, no cell number. The
 *  GateCard + Twilio Verify flow stays intact below — flip this back to
 *  false to charge a cell number again. */
const LIST_OPEN = true;

type Item = { n: string; head: string; body: string };

/** Items 01–03 — open to everyone. Plain-English rewrite 8/22 (Trevor: "don't
    make them work for it"); the numbers are the sanctioned ones and nothing else. */
const ITEMS_OPEN: Item[] = [
  {
    n: '01',
    head: 'Your phone, answered at 9pm.',
    body: "Calls and texts after close get answered and booked. The job's on your screen by morning.",
  },
  {
    n: '02',
    head: 'Your paperwork reads itself.',
    body: "Snap a photo of an invoice or a handwritten ticket. It's typed in before you're back in the truck.",
  },
  {
    n: '03',
    head: 'Your books post themselves.',
    body: 'Ring up a sale and the books write themselves. At one dealership, all 37 accounts matched QuickBooks to the penny.',
  },
];

/** Items 04–09 — behind the gate when it's on. Same plain rewrite. */
const ITEMS_GATED: Item[] = [
  {
    n: '04',
    head: 'Your prices protect themselves.',
    body: "Load your suppliers' price lists and nothing sells below cost again. One parts counter caught about 1,200 stale prices its first week. The owner okayed the fixes with his thumb.",
  },
  {
    n: '05',
    head: 'Your lost money gets found.',
    body: "Forgotten jobs and unpaid invoices get pulled onto one screen. It found a tree service $268,000. It found Cory Edwards of Edwards Roofing $195,882.75 he'd already earned. It also caught a $19,000 bookkeeping error his old software never saw.",
  },
  {
    n: '06',
    head: 'Your invoices collect themselves.',
    body: 'The bill goes out by text, the customer taps Pay on their phone, and the money lands in your account. Slow payers get a polite nudge.',
  },
  {
    n: '07',
    head: 'You can ask your business anything.',
    body: 'Ask "Who owes me the most?" and get a straight answer from your own records, not the internet.',
  },
  {
    n: '08',
    head: 'Your follow-ups happen without you.',
    body: 'The thank-you after the job. The reminder before the next appointment. The quote the customer never answered. All of it handled.',
  },
  {
    n: '09',
    head: 'Your Monday writes itself.',
    body: "What sold, what's late, who owes you. In plain sentences, waiting before you unlock the door.",
  },
];

/** Dollar figures — the receipts — get the accent they earn. Split keeps the
    captured figures in the array; the anchored test tells them from prose. */
const MONEY_SPLIT = /(\$[\d,]+(?:\.\d{2})?)/;
const IS_MONEY = /^\$[\d,]+(?:\.\d{2})?$/;

function ItemBody({ body }: { body: string }) {
  return (
    <p className="text-[17px] leading-relaxed text-foreground/75">
      {body.split(MONEY_SPLIT).map((part, i) =>
        IS_MONEY.test(part) ? (
          <span key={i} className="font-bold text-primary">
            {part}
          </span>
        ) : (
          part
        ),
      )}
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

/* ─── The gate ───

   Two steps in one card. Step 1 takes the cell and asks /api/list/verify to
   text a one-time code (Twilio Verify — sends from Twilio's own registered
   channels, so the marketing number's A2P status doesn't matter). Step 2
   takes the code; on a good check the lead posts to /api/lead exactly as it
   always has, with "Phone verified by SMS code." on the trail.

   DEGRADATION: when the server has no Twilio env it answers
   { ok: true, skipped: true } to 'start', and the gate behaves exactly as it
   did before verification existed — cell in, lead posted, list unlocked,
   no verified note on the trail. */

const gateInputClass =
  'w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition-colors';
// 16px is the floor that keeps iOS from zooming the page on focus.
const phoneInputClass = `${gateInputClass} text-base`;
// Big spaced digits read like the text they came from; placeholder stays plain.
const codeInputClass = `${gateInputClass} text-[22px] font-bold tracking-[0.3em] text-center placeholder:text-base placeholder:font-medium placeholder:tracking-normal`;

const gateLinkClass =
  'underline underline-offset-4 decoration-white/30 hover:text-foreground transition-colors disabled:no-underline disabled:cursor-default disabled:hover:text-muted-foreground';

/** A plausible US cell: ten digits, or eleven with a leading country code 1. */
function isPlausibleUsPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

/** (318) 555-0100 — for "we texted a code to …". */
function formatUsPhone(raw: string): string {
  const d = raw.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : raw;
}

/** Seconds before "Send again" re-arms — the client-side throttle. */
const RESEND_COOLDOWN = 30;

type VerifyReply = { ok: boolean; skipped?: boolean; error?: string };

/** One call to the verify route. Throws on a network/server failure;
    otherwise returns the server's verdict, including ok:false with its
    plain-English reason. */
async function callVerify(body: Record<string, string>): Promise<VerifyReply> {
  const res = await fetch('/api/list/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => null)) as VerifyReply | null;
  if (!data) throw new Error('verify_failed');
  return data;
}

function GateCard({ onUnlocked }: { onUnlocked: () => void }) {
  const uid = useId();
  const codeRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [note, setNote] = useState('');
  const [cooldown, setCooldown] = useState(0);
  // A code that already checked out stays checked out — if the lead post
  // fails after a good check, retrying must not re-check a spent code.
  const [verified, setVerified] = useState(false);
  const [started, setStarted] = useState(false);
  const [fields, setFields] = useState({ phone: '', code: '', hp: '' });

  const update =
    (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  // Resend throttle: counts down once a second while armed.
  const coolingDown = cooldown > 0;
  useEffect(() => {
    if (!coolingDown) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [coolingDown]);

  // Step 2 lands with the cursor in the code box.
  useEffect(() => {
    if (step === 'code') codeRef.current?.focus();
  }, [step]);

  function showError(msg: string) {
    setStatus('error');
    setErrorMsg(msg);
  }

  /** Ask the server to text a code. Returns its reply, or null if it failed
      (the error is already on screen). */
  async function sendCode(): Promise<VerifyReply | null> {
    try {
      const r = await callVerify({ action: 'start', phone: fields.phone.trim(), hp: fields.hp });
      if (!r.ok) {
        showError(r.error || "Couldn't send the code right now.");
        return null;
      }
      return r;
    } catch {
      showError('Something went wrong sending that.');
      return null;
    }
  }

  /** The lead post — same rails, same inbox, same pixels as before
      verification existed. The only difference is the note on the trail
      when the code checked out. */
  async function finish(phoneVerified: boolean) {
    // Attribution rides in the message body — the lead API has a fixed field
    // set, and this keeps page + campaign context on the notification.
    const utms = getStoredUTMs();
    const trail = [
      'Page: list (The Too Good To Be True List)',
      ...Object.entries(utms).map(([k, v]) => `${k}: ${v}`),
    ];
    if (phoneVerified) trail.push('Phone verified by SMS code.');
    const message = `Unlocked the Too Good To Be True List.\n\n— ${trail.join(' · ')}`;

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Cell-only on purpose: /api/lead takes name and email as optional,
        // so neither is sent — no placeholder name, nothing faked.
        body: JSON.stringify({
          source: SOURCE,
          phone: fields.phone.trim(),
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
      showError('Something went wrong sending that.');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;
    setNote('');

    if (step === 'phone') {
      // One field, one check — the gate costs a cell number and nothing else.
      if (!isPlausibleUsPhone(fields.phone)) {
        showError("That doesn't look like a US cell — ten digits, please.");
        return;
      }
      setStatus('submitting');
      setErrorMsg('');
      const r = await sendCode();
      if (!r) return;
      // No Twilio env on the server: cell-only unlock, exactly as before.
      if (r.skipped) {
        await finish(false);
        return;
      }
      setStatus('idle');
      setCooldown(RESEND_COOLDOWN);
      setStep('code');
      return;
    }

    // step === 'code'
    if (verified) {
      setStatus('submitting');
      await finish(true);
      return;
    }
    const code = fields.code.replace(/\D/g, '');
    if (code.length !== 6) {
      showError('Enter the 6-digit code from the text.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const r = await callVerify({
        action: 'check',
        phone: fields.phone.trim(),
        code,
        hp: fields.hp,
      });
      if (!r.ok) {
        showError(r.error || "That code isn't right. Check the text and try again.");
        return;
      }
      if (!r.skipped) setVerified(true);
      await finish(!r.skipped);
    } catch {
      showError('Something went wrong sending that.');
    }
  }

  async function handleResend() {
    if (status === 'submitting' || coolingDown) return;
    setStatus('submitting');
    setErrorMsg('');
    setNote('');
    const r = await sendCode();
    if (!r) return;
    if (r.skipped) {
      await finish(false);
      return;
    }
    setStatus('idle');
    setFields((f) => ({ ...f, code: '' }));
    setCooldown(RESEND_COOLDOWN);
    setNote('Sent another code.');
    codeRef.current?.focus();
  }

  function handleWrongNumber() {
    if (status === 'submitting') return;
    setStep('phone');
    setStatus('idle');
    setErrorMsg('');
    setNote('');
    setVerified(false);
    setFields((f) => ({ ...f, code: '' }));
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
          The other six cost your cell number.
        </h3>
        {step === 'phone' ? (
          <p className="mt-2 mb-6 text-[15px] text-muted-foreground font-medium">
            That&rsquo;s it. No form, no spam. The October edition comes by text when it prints.
          </p>
        ) : (
          <p className="mt-2 mb-6 text-[15px] text-muted-foreground font-medium">
            We texted a 6-digit code to{' '}
            <span className="font-bold text-foreground whitespace-nowrap">
              {formatUsPhone(fields.phone)}
            </span>
            .
          </p>
        )}

        {step === 'phone' ? (
          <>
            <label htmlFor={`${uid}-phone`} className="sr-only">
              Cell
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              maxLength={40}
              value={fields.phone}
              onChange={update('phone')}
              placeholder="Cell"
              className={phoneInputClass}
            />
          </>
        ) : (
          <>
            <label htmlFor={`${uid}-code`} className="sr-only">
              6-digit code
            </label>
            <input
              ref={codeRef}
              id={`${uid}-code`}
              name="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]*"
              maxLength={6}
              required
              value={fields.code}
              onChange={(e) =>
                setFields((f) => ({ ...f, code: e.target.value.replace(/\D/g, '').slice(0, 6) }))
              }
              placeholder="6-digit code"
              className={codeInputClass}
            />
          </>
        )}

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
        {note && status !== 'error' && (
          <p className="mt-3 text-[13px] font-medium text-muted-foreground">{note}</p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-5 w-full h-14 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />{' '}
              {step === 'phone' ? 'Sending…' : 'Unlocking…'}
            </>
          ) : step === 'phone' ? (
            'Text me a code'
          ) : (
            'Unlock the list'
          )}
        </button>

        {step === 'phone' ? (
          <>
            <p className="mt-4 text-[13px] text-muted-foreground font-medium text-center">
              We&rsquo;ll text you a code to make sure it&rsquo;s really you.
            </p>
            {/* TCPA consent language — final copy, do not edit. */}
            <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground/70 text-center">
              By texting the code we&rsquo;re confirming your number. We&rsquo;ll only text you
              this list and its October edition. Reply STOP anytime.
            </p>
          </>
        ) : (
          <div className="mt-4 flex items-center justify-between gap-4 text-[13px] font-medium text-muted-foreground">
            <button
              type="button"
              onClick={handleResend}
              disabled={status === 'submitting' || coolingDown}
              className={gateLinkClass}
            >
              {coolingDown
                ? `Didn’t get it? Send again in ${cooldown}s`
                : 'Didn’t get it? Send again'}
            </button>
            <button
              type="button"
              onClick={handleWrongNumber}
              disabled={status === 'submitting'}
              className={`${gateLinkClass} shrink-0`}
            >
              Wrong number?
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

/* ─── Page ─── */

export default function ListClient() {
  const [unlocked, setUnlocked] = useState(LIST_OPEN);
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
            Nine things real Louisiana businesses do every day. All of them sound like lies.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <FounderByline line="Found It Software, Alexandria LA" />
            <span className="text-xs text-muted-foreground/80 font-medium uppercase tracking-widest">A 2-minute read</span>
          </div>
        </motion.header>

        {/* ─── Let her read it (8/22) — she used to be the last thing on the
            page; now she's the first. One tap: mic, and she reads the nine. ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          className="mt-8"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Don&rsquo;t feel like reading?
          </p>
          <VoiceAgentWidget
            pageSlug="too-good-list"
            source={VOICE_SOURCE}
            mode="narrate"
            script={LIST_NARRATION}
            idleTitle="Let her read it to you"
            idleLines={['Tap once. She reads the list out loud — cut in with a question anytime.']}
            sticky
            fallbackHref="/foundit-os#lead-form"
          />
        </motion.div>

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
            He&rsquo;s right. Keep that rule. It&rsquo;s kept a lot of good men from getting
            robbed. Now point it at this list.
          </p>
          <p className="text-[17px] leading-relaxed text-foreground/85">
            This isn&rsquo;t a someday list. Every line below is running{' '}
            <span className="font-bold text-foreground">right now</span>, inside a real Louisiana
            business.
          </p>
        </motion.div>

        {/* ─── Six of the nine, running (8/22) ───
            The reel breaks out of the 680px column: one stage, six chapters,
            numbers that travel from the world into the books. Demo books. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="mt-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Don&rsquo;t take my word for it
          </p>
          <p className="text-[17px] leading-relaxed text-foreground/85">
            Six of the nine, running. One day in a shop like yours. Nobody at the desk. Watch:
          </p>
        </motion.div>
        <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 px-5">
          <div className="mx-auto max-w-[1040px]">
            <AutomationReel />
          </div>
        </div>

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

              {/* ─── Things we won't do — the anti-hype beat, kept quiet ─── */}
              <div className="rounded-2xl border border-white/10 bg-card/10 px-6 py-6 sm:px-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Things we won&rsquo;t do
                </p>
                <ul className="space-y-3 text-[15px] leading-relaxed text-foreground/70">
                  <li>
                    <span className="font-bold text-foreground/90">Payroll.</span> We don&rsquo;t
                    touch it. It stays where it is.
                  </li>
                  <li>
                    <span className="font-bold text-foreground/90">Taxes.</span> We track them to
                    the penny. Your CPA still files.
                  </li>
                  <li>
                    <span className="font-bold text-foreground/90">Promises.</span> Nothing here
                    is a guess. Every line is running today.
                  </li>
                </ul>
              </div>

              {/* ─── The catch ─── */}
              <div className="pt-4 border-t border-primary/20">
                <h2 className="font-heading text-3xl font-black uppercase italic tracking-tighter text-foreground mb-5">
                  The HVAC guy was right.
                </h2>
                <p className="text-[17px] leading-relaxed text-foreground/85">
                  It does sound like a lie. That&rsquo;s why I said watch, don&rsquo;t believe. Now the
                  catch: we build it for one business — <span className="font-bold">yours</span>. You
                  own it, the code and the data. Month to month. If you ever leave, it all goes with
                  you.
                </p>
                <p className="mt-5 text-[17px] leading-relaxed text-foreground/85 italic">
                  Hunt for the trap all you want. The only catch is it&rsquo;s yours.
                </p>
                <p className="mt-10 font-heading text-3xl sm:text-4xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground">
                  Nobody rents you your own business back<span className="text-primary">.</span>
                </p>
              </div>
            </motion.div>
          ) : (
            <GateCard onUnlocked={handleUnlocked} />
          )}
        </div>

        {/* ─── Or just tell her ───
            Item 01, live. Closes the article in BOTH states — after the gate
            when locked, after the doctrine line when open. Her card is the
            only UI here: no band, no button, an editorial lead-in and her. */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Which one?
          </p>
          <p className="text-[17px] leading-relaxed text-foreground/85">
            Nine things up there. Pick the one you wish you&rsquo;d had last week. If I sent you
            this, reply with just that number and I&rsquo;ll take it from there.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">
            Or tap below and tell her the number. She&rsquo;s number one on the list, running right
            now. She&rsquo;ll take your name and cell, and I&rsquo;ll call you back.
          </p>
          <VoiceAgentWidget
            pageSlug="too-good-list"
            source={VOICE_SOURCE}
            opener={VOICE_OPENER}
            idleTitle="Tell her the number"
            idleLines={['Tap once. Say the number, your name, and your cell — Trevor calls you back.']}
            fallbackHref="/foundit-os#lead-form"
            sticky
            className="mt-6"
          />
          <p className="mt-8 text-sm text-muted-foreground font-medium">
            The October edition will be longer. This stuff doesn&rsquo;t slow down.
          </p>
        </div>
      </article>
    </main>
  );
}
