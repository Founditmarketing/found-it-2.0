'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Check, X, ArrowRight, Loader2, Mail, Bot, Smartphone, TriangleAlert } from 'lucide-react';
import Link from 'next/link';
import { trackAuditRequest, trackLead } from '@/lib/analytics';
import { usePersonalization } from '@/lib/personalization';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type AuditState = 'idle' | 'scanning' | 'done' | 'error';

interface CheckResult { label: string; pass: boolean; detail: string; impact?: string }
interface AuditResult {
  url: string;
  scannedMs: number;
  score: number;
  grade: 'green' | 'yellow' | 'red';
  groups: { name: string; checks: CheckResult[] }[];
}

const GRADE = {
  green: { color: '#22c55e', label: 'Solid foundation' },
  yellow: { color: '#eab308', label: 'Leaking opportunity' },
  red: { color: '#ef4444', label: 'Bleeding customers' },
} as const;

/** Bakes the visitor's geo city into the `{city}` placeholders the scan API
 *  leaves in its business-impact translations. */
function localizeResult(result: AuditResult, city: string | null): AuditResult {
  const cityName = city ?? 'your area';
  return {
    ...result,
    groups: result.groups.map((g) => ({
      ...g,
      checks: g.checks.map((c) =>
        c.impact ? { ...c, impact: c.impact.replace(/\{city\}/g, cityName) } : c
      ),
    })),
  };
}

/** Animated wireframe "site scan" shown while the audit runs. */
function ScanAnimation() {
  return (
    <div className="relative w-full max-w-md mx-auto h-44 rounded-2xl border border-primary/25 bg-card/20 overflow-hidden">
      {/* wireframe skeleton */}
      <div className="absolute inset-4 space-y-2 opacity-60">
        <div className="h-5 w-1/2 rounded bg-white/10" />
        <div className="h-3 w-5/6 rounded bg-white/[0.07]" />
        <div className="h-3 w-2/3 rounded bg-white/[0.07]" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-12 rounded bg-white/[0.06]" />
          <div className="h-12 rounded bg-white/[0.06]" />
          <div className="h-12 rounded bg-white/[0.06]" />
        </div>
        <div className="h-3 w-3/4 rounded bg-white/[0.07]" />
      </div>
      {/* sweeping scan line */}
      <motion.div
        initial={{ top: '-12%' }}
        animate={{ top: '108%' }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,85,0,0.28), transparent)' }}
      />
      <motion.div
        initial={{ top: '-2%' }}
        animate={{ top: '102%' }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-[2px] bg-primary shadow-[0_0_18px_rgba(255,85,0,0.9)] pointer-events-none"
      />
      <p className="absolute bottom-2 inset-x-0 text-center text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">
        Scanning speed · SEO · tracking
      </p>
    </div>
  );
}

/** The "human layer" break under the automated checks: where the machine stops,
 *  Trevor starts. Sends the full report + captures the lead (email + optional text number). */
function HumanLayerGate({ result, city }: { result: AuditResult; city: string | null }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const send = async () => {
    const value = email.trim();
    if (!value || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/instant-audit/report', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: value, phone: phone.trim() || undefined, result }),
      });
      if (!res.ok) throw new Error();
      trackLead('instant_audit_report');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3.5 mb-6 text-center">
        <Check className="w-4 h-4 text-green-500 shrink-0" />
        <p className="text-sm font-bold text-green-400">
          On the way — check your inbox.{phone.trim() ? ' Trevor will text you what he finds in your market.' : ' Trevor eyeballs every scan by hand.'}
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] via-primary/[0.05] to-transparent overflow-hidden">
      <div className="px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5 text-primary" aria-hidden="true" />
          </span>
          <p className="text-sm sm:text-base font-black uppercase italic tracking-tighter text-foreground leading-tight">
            Automation ends here. <span className="text-primary">Human strategy begins.</span>
          </p>
        </div>
        <p className="text-xs sm:text-[13px] text-muted-foreground font-medium leading-relaxed mb-4">
          The scanner reads your code. It can&apos;t see what competitors in {city ?? 'your market'} are
          spending on Google Ads to outrank you, or which keywords they own — Trevor checks that part by
          hand. Drop your email and he&apos;ll send this full report plus what your top competitor is doing
          to take your clicks.
        </p>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); send(); }}
        className="flex flex-col sm:flex-row items-stretch gap-2 px-5 pb-3 sm:px-6"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0 bg-white/[0.04] border border-border/25 rounded-xl px-3 focus-within:border-primary/50 transition-colors">
          <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@business.com"
            aria-label="Email address for your full report"
            className="flex-1 min-w-0 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-bold text-base md:text-sm py-2.5"
          />
        </div>
        <div className="flex items-center gap-2 sm:w-[180px] bg-white/[0.04] border border-border/25 rounded-xl px-3 focus-within:border-primary/50 transition-colors">
          <Smartphone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <input
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile (optional)"
            aria-label="Mobile number for a personal text from Trevor (optional)"
            className="flex-1 min-w-0 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-bold text-base md:text-sm py-2.5"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending' || !email.trim()}
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-5 py-3 rounded-xl text-xs disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
        >
          {status === 'sending' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Send My Full Breakdown'}
        </button>
      </form>
      <p className="text-[11px] text-faint font-medium px-5 sm:px-6 pb-4">
        {status === 'error'
          ? <span role="alert" className="text-red-400 font-bold">Could not send — try again in a moment.</span>
          : 'One report. One personal follow-up. Nothing else.'}
      </p>
    </div>
  );
}

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative w-28 h-28 shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <motion.circle
          cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * score) / 100 }}
          transition={{ duration: 1.1, ease }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black italic tracking-tighter" style={{ color }}>{score}</span>
        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-faint">/ 100</span>
      </div>
    </div>
  );
}

interface InstantAuditProps {
  /** Notifies the parent when the audit starts/finishes (e.g. to pause hero fade-out effects). */
  onStateChange?: (state: AuditState) => void;
}

export function InstantAudit({ onStateChange }: InstantAuditProps = {}) {
  const [url, setUrl] = useState('');
  const [state, setStateRaw] = useState<AuditState>('idle');
  const [error, setError] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const capturedDomains = useRef(new Set<string>());
  const { city } = usePersonalization();

  const setState = (s: AuditState) => {
    setStateRaw(s);
    onStateChange?.(s);
  };

  const run = async () => {
    const value = url.trim();
    if (!value) return;
    // Dismiss the mobile keyboard so the scan animation and report aren't hidden behind it.
    inputRef.current?.blur();
    setState('scanning');
    setError('');
    setResult(null);
    trackAuditRequest('instant_audit_hero');
    // Whoever scans a site almost always owns it — capture the domain as a lead
    // even if they never leave an email. Fire-and-forget; never blocks the scan.
    // Deduped per domain so retries after errors don't re-email Trevor.
    const domain = value.toLowerCase().replace(/^https?:\/\//, '').split('/')[0];
    if (!capturedDomains.current.has(domain)) {
      capturedDomains.current.add(domain);
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ source: 'instant-audit-scan', website: value.slice(0, 300) }),
      }).catch(() => {});
    }
    const startedAt = Date.now();
    try {
      const res = await fetch('/api/instant-audit', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ url: value }),
      });
      const data = await res.json();
      // let the scan animation breathe for at least 1.6s
      const elapsed = Date.now() - startedAt;
      if (elapsed < 1600) await new Promise((r) => setTimeout(r, 1600 - elapsed));
      if (!res.ok) {
        setError(data.error || 'Scan failed.');
        setState('error');
        return;
      }
      setResult(data);
      setState('done');
    } catch {
      setError('Scan failed. Try again in a moment.');
      setState('error');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input bar */}
      <form
        onSubmit={(e) => { e.preventDefault(); run(); }}
        className="relative flex items-center gap-2 bg-card/20 backdrop-blur-xl border border-primary/25 rounded-2xl p-2 shadow-2xl shadow-primary/10 focus-within:border-primary/50 transition-colors"
      >
        <Search className="w-5 h-5 text-primary shrink-0 ml-3" aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          inputMode="url"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="yourwebsite.com"
          aria-label="Your website URL"
          className="flex-1 min-w-0 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-bold text-base py-3"
        />
        <button
          type="submit"
          disabled={state === 'scanning' || !url.trim()}
          className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-5 sm:px-7 py-3.5 rounded-xl text-sm disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
        >
          {state === 'scanning' ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Scan Free<ArrowRight className="w-4 h-4 hidden sm:block" /></>}
        </button>
      </form>
      <p className="text-center text-xs text-faint font-medium mt-3">
        Enter your URL. See what your competitors already know about your site — in seconds.
      </p>

      <AnimatePresence mode="wait">
        {state === 'scanning' && (
          <motion.div key="scan" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease }} className="mt-6">
            <ScanAnimation />
          </motion.div>
        )}

        {state === 'error' && (
          <motion.p key="err" role="alert" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 text-center text-sm font-bold text-red-400">
            {error}
          </motion.p>
        )}

        {state === 'done' && result && (() => {
          const localized = localizeResult(result, city);
          const failCount = localized.groups.flatMap((g) => g.checks).filter((c) => !c.pass).length;
          return (
          <motion.div
            key="result"
            role="status"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mt-6 bg-card/20 backdrop-blur-xl border border-border/25 rounded-3xl p-6 sm:p-8 text-left"
          >
            <div className="flex items-center gap-5 mb-6">
              <ScoreRing score={localized.score} color={GRADE[localized.grade].color} />
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint truncate">{localized.url}</p>
                <p className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter" style={{ color: GRADE[localized.grade].color }}>
                  {GRADE[localized.grade].label}
                </p>
                <p className="text-xs text-muted-foreground font-medium mt-1">Scanned in {(localized.scannedMs / 1000).toFixed(1)}s</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {localized.groups.map((g) => (
                <div key={g.name}>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/70 mb-2">{g.name}</p>
                  <ul className="space-y-2">
                    {g.checks.map((c) => (
                      <li key={c.label} className="flex items-start gap-2">
                        {c.pass
                          ? <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                          : <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />}
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-foreground leading-tight">{c.label}</p>
                          <p className="text-[11px] text-muted-foreground/70 leading-snug">{c.detail}</p>
                          {!c.pass && c.impact && (
                            <p className="mt-1 flex items-start gap-1.5 text-[11px] leading-snug font-medium text-amber-400/90">
                              <TriangleAlert className="w-3 h-3 shrink-0 mt-[1.5px]" aria-hidden="true" />
                              <span>{c.impact}</span>
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <HumanLayerGate result={localized} city={city} />

            <div className="border-t border-border/15 pt-5 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">
                  {failCount > 0
                    ? <>Fix {failCount === 1 ? 'this' : 'these'} <span className="text-primary">{failCount} {failCount === 1 ? 'leak' : 'leaks'}</span> — free.</>
                    : <>This is just the surface. <span className="text-primary">Call Trevor for the real audit.</span></>}
                </p>
                {failCount > 0 && (
                  <p className="text-[11px] text-muted-foreground/70 font-medium mt-1">
                    15-minute screen-share. Trevor walks you through patching them yourself.
                  </p>
                )}
              </div>
              <Link href="/contact" className="text-xs font-bold whitespace-nowrap text-muted-foreground hover:text-primary transition-colors">
                {failCount > 0 ? 'Book the walkthrough →' : 'Book a call →'}
              </Link>
            </div>
          </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
