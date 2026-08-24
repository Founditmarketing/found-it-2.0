'use client';

import { useEffect, useId, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  FileText,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { trackLead, trackFormStart, captureUTMs, getStoredUTMs } from '@/lib/analytics';
import { GUIDE_PDF_PATH, GUIDE_DOWNLOAD_NAME, GUIDE_TITLE, GUIDE_SOURCE_PREFIX } from '@/lib/guide';
import { OS_PRICING } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

const inputClass =
  'w-full bg-card/20 border border-border/20 rounded-xl px-4 py-3.5 text-base text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors';

const labelClass =
  'block text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface GuideDownloadSectionProps {
  /** LP slug for attribution, e.g. 'auto-shop' — becomes part of the source tag. */
  page: string;
  /**
   * Full source-tag override for non-LP surfaces (e.g. 'guide_page' on /guide).
   * When omitted, the tag stays the LP default: `${GUIDE_SOURCE_PREFIX}_${page}`.
   */
  source?: string;
}

/**
 * The "What Do I Get?" gated guide — the lighter ask on every OS landing page.
 * Deliberately fewer fields than the main form (first name + email, phone
 * optional): the visitor is trading an email for a PDF, not booking a call.
 *
 * On submit: posts to the same hardened /api/lead pipe with a guide-specific
 * source tag, fires trackLead() with that tag, starts the PDF download
 * immediately, then routes to /lp/thanks (which re-offers the file and points
 * at the one next step — the free walkthrough call).
 */
export function GuideDownloadSection({ page, source: sourceOverride }: GuideDownloadSectionProps) {
  const uid = useId();
  const source = sourceOverride ?? `${GUIDE_SOURCE_PREFIX}_${page}`;
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [started, setStarted] = useState(false);
  const [fields, setFields] = useState({ firstName: '', email: '', phone: '', hp: '' });

  // Same attribution discipline as NativeLeadForm: stash UTMs on mount so
  // paid-traffic context survives to submit time.
  useEffect(() => {
    captureUTMs();
  }, []);

  const update =
    (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    if (!fields.firstName.trim() || !fields.email.trim()) {
      setStatus('error');
      setErrorMsg("First name and email are required — that's where the guide goes.");
      return;
    }
    if (!/^\S+@\S+\.\S{2,}$/.test(fields.email.trim())) {
      setStatus('error');
      setErrorMsg("That email doesn't look right — double-check it.");
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Attribution rides in the message body — the lead API's field set stays
    // fixed, and the source tag alone already distinguishes guide downloads.
    const utms = getStoredUTMs();
    const trail = [`Page: ${page}`, ...Object.entries(utms).map(([k, v]) => `${k}: ${v}`)];
    const message = `Guide download — "${GUIDE_TITLE}" PDF\n\n— ${trail.join(' · ')}`;

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: fields.firstName.trim(),
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          message,
          hp: fields.hp,
        }),
      });
      if (!res.ok) throw new Error('lead_failed');

      trackLead(source);
      if (typeof console !== 'undefined') {
        console.log(`[Found It] Guide lead fired — source: ${source}`);
      }
      setStatus('success');

      // Deliver the PDF immediately — the thank-you page re-offers it in case
      // this download doesn't fire (some mobile browsers defer it).
      const a = document.createElement('a');
      a.href = GUIDE_PDF_PATH;
      a.download = GUIDE_DOWNLOAD_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Full page load (not SPA nav) — same idiom as the main lead form, so
      // analytics on /lp/thanks fires from a fresh gtag config.
      window.setTimeout(() => {
        window.location.href = '/lp/thanks';
      }, 900);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong sending that. Try again — or call us and we’ll email it to you.');
    }
  }

  return (
    // lp-guide: light-ask anchor — deliberately NOT #lp-form (the hero owns it).
    <section id="lp-guide" className="relative py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease as any }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left — what's inside */}
          <div className="lg:col-span-6">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
              Free Guide · PDF
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] mb-5 text-foreground">
              Not Ready To Book? <span className="text-primary">Take The Guide.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 leading-relaxed">
              &ldquo;{GUIDE_TITLE}&rdquo; — four pages, plain English, zero tech specs. Read it in
              two minutes, hand it to your business partner.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'What one custom system replaces — and the industries already running on one',
                'The money story: the stack you rent every month vs. one flat public price',
                'How a fitting works: free walkthrough → runs beside your old system → you own it',
                `The promise it's all built on: “${OS_PRICING.promise}”`,
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: ease as any }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-bold text-sm">{line}</p>
                </motion.div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 bg-card/20 border border-border/20 rounded-full px-4 py-2">
              <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                PDF · 4 pages · 2-minute read
              </span>
            </div>
          </div>

          {/* Right — the light gate */}
          <div className="lg:col-span-6">
            {status === 'success' ? (
              <div
                role="status"
                className="bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl p-8 lg:p-10 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-5 border border-primary/20">
                  <Download className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-2">
                  It&apos;s Downloading.
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Your copy of &ldquo;{GUIDE_TITLE}&rdquo; is on its way…
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                data-lead-form
                onFocusCapture={() => {
                  if (!started) {
                    setStarted(true);
                    trackFormStart(source);
                  }
                }}
                className="relative bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8"
              >
                <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-1 leading-tight">
                  Get The Free Guide — &ldquo;{GUIDE_TITLE}&rdquo;
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-6">
                  Instant download. First name and email is all it takes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor={`${uid}-first-name`} className={labelClass}>
                      First Name *
                    </label>
                    <input
                      id={`${uid}-first-name`}
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      maxLength={200}
                      value={fields.firstName}
                      onChange={update('firstName')}
                      placeholder="Your first name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-email`} className={labelClass}>
                      Email *
                    </label>
                    <input
                      id={`${uid}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={fields.email}
                      onChange={update('email')}
                      placeholder="you@yourbusiness.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor={`${uid}-phone`} className={labelClass}>
                    Phone <span className="opacity-50 normal-case tracking-normal">(optional)</span>
                  </label>
                  <input
                    id={`${uid}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    value={fields.phone}
                    onChange={update('phone')}
                    placeholder="(318) 555-0123"
                    className={inputClass}
                  />
                </div>

                {/* Honeypot — same trap as the main form: meaningless name so
                    Chrome autofill never fills it and drops a real human. */}
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
                    <p className="text-sm text-foreground font-medium">{errorMsg}</p>
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
                      <Download className="w-4 h-4" aria-hidden="true" /> Get The Free Guide
                    </>
                  )}
                </button>

                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-faint font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary/70 shrink-0" aria-hidden="true" />
                  Instant download. No spam.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
