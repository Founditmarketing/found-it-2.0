'use client';

/* ─── Local Landing Page Lead Form ───
   Small native lead form that POSTs to the hardened /api/lead endpoint
   (rate-limited, honeypot-aware, validated server-side). Used on the local
   pages: /marketing-alexandria, /pineville-seo, /central-louisiana-web-design.
   On success it fires trackLead() and redirects to /thank-you — the same
   conversion convention the LP form embeds use. */

import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { trackLead } from '@/lib/analytics';

interface LocalLeadFormProps {
  /** Attribution tag sent to /api/lead, e.g. 'local_pineville_seo' */
  source: string;
  heading: string;
  subheading?: string;
  buttonLabel?: string;
  /** Placeholder for the message box, tailored per page */
  messagePlaceholder?: string;
  className?: string;
}

const inputClass =
  'w-full bg-background/60 border border-border/30 rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors';

const labelClass =
  'block text-xs font-black uppercase tracking-[0.15em] text-muted-foreground mb-1.5';

export function LocalLeadForm({
  source,
  heading,
  subheading,
  buttonLabel = 'Get My Free Audit',
  messagePlaceholder = 'What do you need help with?',
  className = '',
}: LocalLeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const idFor = (field: string) => `${source}-${field}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      source,
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      message: String(fd.get('message') || '').trim(),
      hp: String(fd.get('hp') || ''),
    };

    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('lead submit failed');

      setStatus('success');
      trackLead(source);
      // Small delay so the conversion beacon has time to leave the page.
      window.setTimeout(() => {
        window.location.href = '/thank-you';
      }, 150);
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={className}>
      <div className="bg-card/10 backdrop-blur-2xl border border-border/20 rounded-[2rem] p-6 lg:p-8 shadow-2xl">
        <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-2 leading-tight">
          {heading}
        </h3>
        {subheading && (
          <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6">{subheading}</p>
        )}

        <form onSubmit={handleSubmit} className="relative space-y-4">
          {/* Honeypot — humans never see this field; bots fill it. */}
          <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor={idFor('hp')}>Leave this field empty</label>
            <input id={idFor('hp')} name="hp" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={idFor('name')} className={labelClass}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id={idFor('name')}
                name="name"
                type="text"
                required
                maxLength={200}
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor={idFor('phone')} className={labelClass}>
                Phone <span aria-hidden="true">*</span>
              </label>
              <input
                id={idFor('phone')}
                name="phone"
                type="tel"
                required
                maxLength={40}
                autoComplete="tel"
                placeholder="(318) 555-0123"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor={idFor('email')} className={labelClass}>
              Email <span className="text-faint normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id={idFor('email')}
              name="email"
              type="email"
              maxLength={254}
              autoComplete="email"
              placeholder="you@business.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={idFor('message')} className={labelClass}>
              What do you need? <span className="text-faint normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              id={idFor('message')}
              name="message"
              rows={3}
              maxLength={4000}
              placeholder={messagePlaceholder}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Got It — One Sec…' : buttonLabel}
          </button>

          {/* Announce results to assistive tech */}
          <p role="status" aria-live="polite" className="sr-only">
            {status === 'submitting' && 'Sending your request.'}
            {status === 'success' && 'Request received. Redirecting to confirmation page.'}
          </p>
          {status === 'error' && (
            <p role="alert" className="text-sm font-bold text-destructive">
              Something went wrong sending that. Try again in a minute — or just call us instead.
            </p>
          )}
        </form>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-faint font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-primary/70 shrink-0" aria-hidden="true" />
        Free &amp; no obligation. One human replies — and we never sell your info.
      </p>
    </div>
  );
}
