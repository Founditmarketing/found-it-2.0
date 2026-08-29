'use client';

import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Loader2, Send } from 'lucide-react';
import { trackLead } from '@/lib/analytics';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';
import { REVENUE_BANDS } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-card/20 border border-border/20 rounded-xl px-4 py-3.5 text-base text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors';

const labelClass =
  'block text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2';

/**
 * Native lead form for /contact. POSTs directly to the hardened /api/lead
 * endpoint (rate-limited, validated, honeypot-protected) and fires the
 * lead conversion only on a real successful submit, then hands off to
 * /thank-you with a full page load so the URL-rule Ads conversion fires.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [revBand, setRevBand] = useState('');
  const [fields, setFields] = useState({ name: '', phone: '', email: '', message: '', hp: '' });

  const update =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    if (!fields.name.trim() || !fields.phone.trim()) {
      setStatus('error');
      setErrorMsg("Name and phone number are required — that's how Trevor calls you back.");
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

    // Revenue band rides in the message body — same additive mechanism as
    // NativeLeadForm, so /api/lead's field set stays fixed.
    const band = REVENUE_BANDS.find((b) => b.label === revBand);
    const message = [
      fields.message.trim(),
      band ? `— Revenue: ${band.label}${band.qualified ? '' : ' (BELOW BAR)'}` : '',
    ]
      .filter(Boolean)
      .join('\n\n');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'contact_page',
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email: fields.email.trim(),
          message,
          hp: fields.hp,
        }),
      });
      if (!res.ok) throw new Error('lead_failed');

      trackLead('contact_page', band ? { qualified: band.qualified } : undefined);
      setStatus('success');
      // Full page load (not SPA nav) so the /thank-you URL-rule conversion fires.
      window.setTimeout(() => {
        window.location.href = '/thank-you';
      }, 900);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong sending that.');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl p-8 lg:p-10 text-center"
      >
        <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-5 border border-primary/20">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-2">
          Got It.
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          Trevor will call you back.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8"
    >
      <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-1">
        Tell Us What&apos;s Broken.
      </h2>
      <p className="text-sm text-muted-foreground font-medium mb-6">
        Fill this out — Trevor calls you back.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={200}
            value={fields.name}
            onChange={update('name')}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={40}
            value={fields.phone}
            onChange={update('phone')}
            placeholder="(318) 555-0123"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-4">
        <span className={labelClass}>
          What&apos;s the business doing a year, roughly?{' '}
          <span className="opacity-50 normal-case tracking-normal">(optional)</span>
        </span>
        <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Yearly revenue range">
          {REVENUE_BANDS.map((b) => (
            <button
              key={b.label}
              type="button"
              role="radio"
              aria-checked={revBand === b.label}
              onClick={() => setRevBand(revBand === b.label ? '' : b.label)}
              className={`rounded-xl border px-3 py-2.5 text-sm font-bold transition-colors text-center ${
                revBand === b.label
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/20 border-border/20 text-foreground hover:border-primary/40'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="contact-email" className={labelClass}>
          Email <span className="opacity-50 normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          value={fields.email}
          onChange={update('email')}
          placeholder="you@yourbusiness.com"
          className={inputClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className={labelClass}>
          What do you need? <span className="opacity-50 normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={4000}
          value={fields.message}
          onChange={update('message')}
          placeholder="Too many systems, money you can't see, work falling through the cracks. Tell us what's not working today."
          className={`${inputClass} resize-y min-h-[110px]`}
        />
      </div>

      {/* Honeypot — humans never see this; bots fill it and get silently dropped.
          Deliberately meaningless name/label: a field named "company" gets filled
          by Chrome's address autofill (which ignores autocomplete="off"), turning
          real submissions into silently-dropped ones. */}
      <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-fim-extra">Leave this field empty</label>
        <input
          id="contact-fim-extra"
          name="fim_extra_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.hp}
          onChange={update('hp')}
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 mb-5"
        >
          <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-foreground font-medium">
            {errorMsg} {errorMsg.startsWith('Something') && (
              <>
                Call or text Trevor directly instead: <TrackedPhoneLink />
              </>
            )}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-4 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" /> Get My Call Back
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-muted-foreground/70 font-medium text-center">
        Your info goes to Trevor and nobody else.
      </p>
    </form>
  );
}
