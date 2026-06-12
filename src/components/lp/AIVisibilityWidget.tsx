'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useCallback } from 'react';
import { Search, AlertCircle, CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const industries = [
  'Legal', 'Medical', 'Home Services', 'Retail', 'Restaurant', 'B2B Services', 'Other',
];

interface QueryResult {
  question: string;
  mentioned: boolean;
  businesses: string[];
  excerpt: string;
}

interface VisibilityResult {
  businessName: string;
  city: string;
  queries: QueryResult[];
  competitors: string[];
  mentionedCount: number;
  total: number;
}

const VERDICTS = {
  none: {
    eyebrow: '⚠️ Visibility Alert',
    color: 'text-red-400/80',
    headline: (name: string) => `AI is not recommending ${name}`,
  },
  partial: {
    eyebrow: '⚠️ Partial Visibility',
    color: 'text-yellow-400/80',
    headline: (name: string) => `AI barely knows ${name} exists`,
  },
  full: {
    eyebrow: '✓ AI Knows You',
    color: 'text-emerald-400/80',
    headline: (name: string) => `AI recommends ${name} — protect that lead`,
  },
} as const;

interface AIVisibilityWidgetProps {
  onBusinessNameCaptured?: (name: string) => void;
  /** Where the bottom CTA sends people (lead form anchor or page). */
  ctaHref?: string;
}

export function AIVisibilityWidget({ onBusinessNameCaptured, ctaHref = '#lp-form' }: AIVisibilityWidgetProps) {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const [phase, setPhase] = useState<'input' | 'scanning' | 'results' | 'error'>('input');
  const [scanIndex, setScanIndex] = useState(0);
  const [scanSteps, setScanSteps] = useState<string[]>([]);
  const [result, setResult] = useState<VisibilityResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const hpRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async () => {
    if (!businessName.trim() || !city.trim() || !industry) return;
    const hp = hpRef.current?.value || '';

    // Fire GA4 event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'audit_request', {
        event_category: 'conversion',
        event_label: 'ai_visibility_audit',
        business_name: businessName,
        city,
        industry,
      });
    }

    // Capture the lead immediately — even if the scan fails, Trevor gets it.
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessName, city, industry, source: 'ai-visibility-widget', hp }),
    }).catch(() => {});

    onBusinessNameCaptured?.(businessName);

    const steps = [
      `Asking AI: best ${industry.toLowerCase()} in ${city}...`,
      'Asking AI: who would you recommend...',
      'Asking AI: who should I contact...',
      'Analyzing responses for your business...',
    ];
    setScanSteps(steps);
    setPhase('scanning');
    setScanIndex(0);

    // Advance the step indicator while the real queries run.
    let step = 0;
    const interval = setInterval(() => {
      step = Math.min(step + 1, steps.length - 1);
      setScanIndex(step);
    }, 2200);

    const startedAt = Date.now();
    try {
      const res = await fetch('/api/ai-visibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, city, industry, hp }),
      });
      const data = await res.json();
      // Let the scan animation play for at least 4s so it reads as a real scan.
      const elapsed = Date.now() - startedAt;
      if (elapsed < 4000) await new Promise((r) => setTimeout(r, 4000 - elapsed));
      clearInterval(interval);
      if (!res.ok) {
        setErrorMsg(data.error || 'The AI check failed. Try again in a moment.');
        setPhase('error');
        return;
      }
      setResult(data);
      setPhase('results');
    } catch {
      clearInterval(interval);
      setErrorMsg('The AI check failed. Try again in a moment.');
      setPhase('error');
    }
  }, [businessName, city, industry, onBusinessNameCaptured]);

  const verdict = result
    ? result.mentionedCount === 0
      ? VERDICTS.none
      : result.mentionedCount < result.total
        ? VERDICTS.partial
        : VERDICTS.full
    : VERDICTS.none;

  return (
    <section id="ai-widget" className="relative py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-[700px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: ease as any }}
          className="bg-card/15 backdrop-blur-2xl border border-border/20 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-6 lg:px-8 py-5 border-b border-border/10 flex items-center gap-3">
            <Search className="w-5 h-5 text-primary" />
            <p className="font-black uppercase italic tracking-tighter text-sm text-foreground">AI Visibility Check</p>
            <span className="ml-auto text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">Live Test</span>
          </div>

          <div className="p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {/* ─── INPUT PHASE ─── */}
              {phase === 'input' && (
                <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  {/* Honeypot — invisible to humans */}
                  <input ref={hpRef} type="text" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
                    className="absolute -left-[9999px] top-0 h-px w-px opacity-0" />
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-1.5 block">Business Name</label>
                    <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="e.g. Smith & Associates Law"
                      className="w-full bg-white/5 border border-border/30 rounded-xl px-4 py-3.5 text-foreground font-medium placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-1.5 block">City</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Alexandria, LA"
                      className="w-full bg-white/5 border border-border/30 rounded-xl px-4 py-3.5 text-foreground font-medium placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-1.5 block">Industry</label>
                    <select value={industry} onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-white/5 border border-border/30 rounded-xl px-4 py-3.5 text-foreground font-medium focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-background">Select your industry</option>
                      {industries.map((ind) => (<option key={ind} value={ind} className="bg-background">{ind}</option>))}
                    </select>
                  </div>
                  <button onClick={handleSubmit} disabled={!businessName.trim() || !city.trim() || !industry}
                    className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none mt-2"
                  >
                    <Search className="w-4 h-4" /> Check My AI Visibility
                  </button>
                  <p className="text-[11px] text-muted-foreground/40 font-medium text-center">
                    Runs a live test: we ask Google&apos;s AI real customer questions and check if it names your business.
                  </p>
                </motion.div>
              )}

              {/* ─── SCANNING PHASE ─── */}
              {phase === 'scanning' && (
                <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-8 text-center space-y-8">
                  <div className="w-16 h-16 mx-auto relative">
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                  </div>
                  <div className="space-y-3">
                    {scanSteps.map((text, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: i <= scanIndex ? 1 : 0.2, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-3 justify-center ${i <= scanIndex ? 'text-foreground' : 'text-muted-foreground/30'}`}
                      >
                        <Sparkles className="w-4 h-4 text-primary/60 shrink-0" />
                        <span className="font-bold text-sm">{text}</span>
                        {i < scanIndex && <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />}
                        {i === scanIndex && <Loader2 className="w-4 h-4 text-primary animate-spin shrink-0" />}
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground/40 uppercase tracking-widest font-black">
                    Live-testing {businessName}...
                  </p>
                </motion.div>
              )}

              {/* ─── ERROR PHASE ─── */}
              {phase === 'error' && (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6 text-center space-y-6">
                  <AlertCircle className="w-10 h-10 text-yellow-400 mx-auto" />
                  <p className="text-sm font-bold text-foreground max-w-sm mx-auto">{errorMsg}</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button onClick={() => setPhase('input')}
                      className="bg-white/5 border border-border/30 text-foreground font-black uppercase italic tracking-tighter px-6 py-3 rounded-xl text-xs hover:border-primary/30 transition-colors">
                      Try Again
                    </button>
                    <a href={ctaHref}
                      className="bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-6 py-3 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-primary/20">
                      Get a Manual Check Instead <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* ─── RESULTS PHASE ─── */}
              {phase === 'results' && result && (
                <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: ease as any }} className="space-y-4">
                  <div className="text-center mb-6">
                    <p className={`text-xs font-black uppercase tracking-[0.3em] mb-2 ${verdict.color}`}>{verdict.eyebrow}</p>
                    <p className="text-lg font-black text-foreground italic">{verdict.headline(result.businessName)}</p>
                    <p className="text-xs text-muted-foreground/60 font-medium mt-2">
                      Mentioned in {result.mentionedCount} of {result.total} live AI queries for {result.city}
                    </p>
                  </div>

                  {result.queries.map((q, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12, duration: 0.4 }}
                      className={`border rounded-xl px-4 py-3.5 ${q.mentioned ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}
                    >
                      <div className="flex items-start gap-3">
                        {q.mentioned
                          ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          : <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-black text-foreground leading-snug">&ldquo;{q.question}&rdquo;</p>
                          <p className={`text-xs font-medium mt-1 ${q.mentioned ? 'text-emerald-400' : 'text-red-400'}`}>
                            {q.mentioned
                              ? 'AI mentioned your business'
                              : q.businesses.length
                                ? `AI recommended: ${q.businesses.join(', ')} — not you`
                                : 'AI named no one — that recommendation slot is wide open'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {result.competitors.length > 0 && (
                    <div className="bg-white/[0.03] border border-border/20 rounded-xl px-4 py-3.5">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/50 mb-2">Who AI recommends in your market</p>
                      <div className="flex flex-wrap gap-2">
                        {result.competitors.map((c) => (
                          <span key={c} className="text-xs font-bold text-foreground/80 bg-white/5 border border-border/20 rounded-full px-3 py-1">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-[10px] text-muted-foreground/40 font-medium text-center">
                    Live test against Google&apos;s Gemini — the AI behind Google&apos;s AI answers. ChatGPT &amp; Perplexity results included in the full audit.
                  </p>

                  <a href={ctaHref}
                    className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all mt-4"
                  >
                    See Full Audit + Action Plan — Book Free Call <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
