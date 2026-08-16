'use client';

import { useEffect, useId, useState } from 'react';
import { CheckCircle2, AlertTriangle, Loader2, Send, ShieldCheck, Plus } from 'lucide-react';
import { trackLead, trackFormStart, captureUTMs, getStoredUTMs } from '@/lib/analytics';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';
import { REVENUE_BANDS } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-card/20 border border-border/20 rounded-xl px-4 py-3.5 text-base text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors';

const labelClass =
  'block text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2';

export interface NativeLeadFormProps {
  /** Attribution tag sent to /api/lead, e.g. 'service_foundit_os'. */
  source: string;
  /** Page slug recorded alongside the lead, e.g. 'foundit-os'. */
  pageSlug?: string;
  /** Optional heading rendered above the fields. */
  heading?: string;
  /** Optional line under the heading. */
  subheading?: string;
  /** Submit button label. */
  ctaLabel?: string;
  /** Reassurance line under the button. Pass '' to hide. */
  privacyNote?: string;
  /** Show the optional "Business" field (useful on service/LP pages). */
  showBusiness?: boolean;
  /** Name + phone + button only; optional fields collapse behind a toggle.
   *  A five-field wall suppresses form STARTS — perceived effort is priced
   *  before the first tap, and the promise is only ever name + number. */
  compact?: boolean;
  /** Success-state line — say what happens next in the page's own promise. */
  successNote?: string;
  /** Ask the revenue band. `true` = required (OS ad funnel — gates
   *  ad-platform conversions: only qualified bands train Meta/Google).
   *  `'optional'` = same ask, skippable — the sitewide default, so every
   *  lead form carries the qualification signal without adding friction.
   *  `false` hides it (the guide gate and other light asks). */
  qualify?: boolean | 'optional';
  className?: string;
}

/**
 * The one lead form on this site. Replaced the GoHighLevel iframe embeds so
 * leads land in our own hardened /api/lead pipe (zod-validated, rate-limited,
 * honeypotted, emailed via Resend) instead of a third-party CRM we do not own.
 *
 * UTMs captured on load are appended to the message body, so paid-traffic
 * attribution survives the move off the LeadConnector query-string mechanism.
 */
export function NativeLeadForm({
  source,
  pageSlug,
  heading,
  subheading,
  ctaLabel = 'Get My Call Back',
  privacyNote = 'We reply within two hours.',
  showBusiness = false,
  compact = false,
  successNote = 'Trevor will call you back within 2 hours.',
  qualify = 'optional',
  className = '',
}: NativeLeadFormProps) {
  const uid = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showDetails, setShowDetails] = useState(!compact);
  const [started, setStarted] = useState(false);
  const [revBand, setRevBand] = useState('');
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    message: '',
    hp: '',
  });

  // Stash UTMs on mount so they are available at submit time even if the
  // visitor navigates before converting.
  useEffect(() => {
    captureUTMs();
  }, []);

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

    if (qualify === true && !revBand) {
      setStatus('error');
      setErrorMsg('Pick the closest revenue range — it tells us whether this is a fit.');
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

    // Attribution rides along in the message body: the lead API has a fixed
    // field set, and this keeps page + campaign context on every notification.
    const band = REVENUE_BANDS.find((b) => b.label === revBand);
    const utms = getStoredUTMs();
    const trail = [
      band ? `Revenue: ${band.label}${band.qualified ? '' : ' (BELOW BAR)'}` : '',
      pageSlug ? `Page: ${pageSlug}` : '',
      ...Object.entries(utms).map(([k, v]) => `${k}: ${v}`),
    ].filter(Boolean);
    const message = [fields.message.trim(), trail.length ? `— ${trail.join(' · ')}` : '']
      .filter(Boolean)
      .join('\n\n');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email,
          businessName: fields.businessName.trim(),
          message,
          hp: fields.hp,
        }),
      });
      if (!res.ok) throw new Error('lead_failed');

      trackLead(source, band ? { qualified: band.qualified } : undefined);
      setStatus('success');
      // Full page load (not SPA nav) so the /thank-you URL-rule Ads conversion fires.
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
        className={`bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl p-8 lg:p-10 text-center ${className}`}
      >
        <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-5 border border-primary/20">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-2">
          Got It.
        </h3>
        <p className="text-sm text-muted-foreground font-medium">{successNote}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        noValidate
        data-lead-form
        onFocusCapture={() => {
          // The funnel's missing middle: clicks and submits were measured,
          // the death in between wasn't. Fires once per form instance.
          if (!started) {
            setStarted(true);
            trackFormStart(source);
          }
        }}
        className="relative bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8"
      >
        {heading && (
          <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-1 leading-tight">
            {heading}
          </h3>
        )}
        {subheading && (
          <p className="text-sm text-muted-foreground font-medium mb-6">{subheading}</p>
        )}
        {heading && !subheading && <div className="mb-6" />}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor={`${uid}-name`} className={labelClass}>
              Name *
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
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${uid}-phone`} className={labelClass}>
              Phone *
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
              placeholder="(318) 555-0123"
              className={inputClass}
            />
          </div>
        </div>

        {qualify && (
          <div className="mb-5">
            <span className={labelClass}>
              What&apos;s the business doing a year, roughly?{' '}
              {qualify === true ? (
                '*'
              ) : (
                <span className="opacity-50 normal-case tracking-normal">(optional)</span>
              )}
            </span>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Yearly revenue range">
              {REVENUE_BANDS.map((b) => (
                <button
                  key={b.label}
                  type="button"
                  role="radio"
                  aria-checked={revBand === b.label}
                  onClick={() => setRevBand(b.label)}
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
        )}

        {!showDetails && (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" /> Add a note or email (optional)
          </button>
        )}

        {showDetails && (
        <>
        <div className={showBusiness ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4' : 'mb-4'}>
          <div>
            <label htmlFor={`${uid}-email`} className={labelClass}>
              Email <span className="opacity-50 normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id={`${uid}-email`}
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
          {showBusiness && (
            <div>
              <label htmlFor={`${uid}-business`} className={labelClass}>
                Business <span className="opacity-50 normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id={`${uid}-business`}
                name="businessName"
                type="text"
                autoComplete="organization"
                maxLength={200}
                value={fields.businessName}
                onChange={update('businessName')}
                placeholder="Your business"
                className={inputClass}
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor={`${uid}-message`} className={labelClass}>
            What do you need?{' '}
            <span className="opacity-50 normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={compact ? 2 : 4}
            maxLength={4000}
            value={fields.message}
            onChange={update('message')}
            placeholder="Tell us how your business runs today — the software, the paper, the workarounds."
            className={`${inputClass} resize-y ${compact ? 'min-h-[64px]' : 'min-h-[110px]'}`}
          />
        </div>
        </>
        )}

        {/* Honeypot — humans never see this; bots fill it and get silently dropped.
            Deliberately meaningless name: a field named "company" gets filled by
            Chrome's address autofill (which ignores autocomplete="off"), turning
            real submissions into silently-dropped ones. */}
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
          <div
            role="alert"
            className="flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 mb-5"
          >
            <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-foreground font-medium">
              {errorMsg}{' '}
              {errorMsg.startsWith('Something') && (
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
              <Send className="w-4 h-4" aria-hidden="true" /> {ctaLabel}
            </>
          )}
        </button>
      </form>

      {privacyNote && (
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-faint font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-primary/70 shrink-0" aria-hidden="true" />
          {privacyNote}
        </p>
      )}
    </div>
  );
}
