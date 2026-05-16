'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Search, AlertCircle, CheckCircle2, MinusCircle, ArrowRight, Loader2 } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const industries = [
  'Legal', 'Medical', 'Home Services', 'Retail', 'Restaurant', 'B2B Services', 'Other',
];

const scanSteps = [
  { text: 'Querying ChatGPT...', icon: '🤖' },
  { text: 'Checking Perplexity...', icon: '🔍' },
  { text: 'Scanning Google AI Overviews...', icon: '🌐' },
  { text: 'Analyzing Gemini...', icon: '✨' },
];

type Status = 'red' | 'yellow' | 'green';
interface Result { platform: string; status: Status; message: string }

const simulatedResults: Result[] = [
  { platform: 'ChatGPT', status: 'red', message: 'Not currently mentioned for your top queries' },
  { platform: 'Perplexity', status: 'yellow', message: 'Mentioned in 1 of 5 queries' },
  { platform: 'Google AI Overviews', status: 'red', message: 'Not appearing' },
  { platform: 'Gemini', status: 'red', message: 'Not mentioned' },
];

const statusColors: Record<Status, { bg: string; text: string; icon: typeof AlertCircle }> = {
  red: { bg: 'bg-red-500/10 border-red-500/20', text: 'text-red-400', icon: AlertCircle },
  yellow: { bg: 'bg-yellow-500/10 border-yellow-500/20', text: 'text-yellow-400', icon: MinusCircle },
  green: { bg: 'bg-emerald-500/10 border-emerald-500/20', text: 'text-emerald-400', icon: CheckCircle2 },
};

interface AIVisibilityWidgetProps {
  onBusinessNameCaptured?: (name: string) => void;
}

export function AIVisibilityWidget({ onBusinessNameCaptured }: AIVisibilityWidgetProps) {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const [phase, setPhase] = useState<'input' | 'scanning' | 'results'>('input');
  const [scanIndex, setScanIndex] = useState(0);

  const handleSubmit = useCallback(() => {
    if (!businessName.trim() || !city.trim() || !industry) return;

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

    // Post lead to API (fire-and-forget)
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ businessName, city, industry, source: 'ai-visibility-widget' }),
    }).catch(() => {});

    onBusinessNameCaptured?.(businessName);
    setPhase('scanning');
    setScanIndex(0);

    // Animate through scan steps
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= scanSteps.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('results'), 800);
      } else {
        setScanIndex(step);
      }
    }, 900);
  }, [businessName, city, industry, onBusinessNameCaptured]);

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
            <span className="ml-auto text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">Free</span>
          </div>

          <div className="p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {/* ─── INPUT PHASE ─── */}
              {phase === 'input' && (
                <motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
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
                </motion.div>
              )}

              {/* ─── SCANNING PHASE ─── */}
              {phase === 'scanning' && (
                <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-8 text-center space-y-8">
                  <div className="w-16 h-16 mx-auto relative">
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                  </div>
                  <div className="space-y-3">
                    {scanSteps.map((step, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: i <= scanIndex ? 1 : 0.2, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-3 justify-center ${i <= scanIndex ? 'text-foreground' : 'text-muted-foreground/30'}`}
                      >
                        <span className="text-lg">{step.icon}</span>
                        <span className="font-bold text-sm">{step.text}</span>
                        {i < scanIndex && <CheckCircle2 className="w-4 h-4 text-primary" />}
                        {i === scanIndex && <Loader2 className="w-4 h-4 text-primary animate-spin" />}
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground/40 uppercase tracking-widest font-black">
                    Analyzing {businessName}...
                  </p>
                </motion.div>
              )}

              {/* ─── RESULTS PHASE ─── */}
              {phase === 'results' && (
                <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: ease as any }} className="space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-red-400/80 mb-2">⚠️ Visibility Alert</p>
                    <p className="text-lg font-black text-foreground italic">{businessName} has limited AI visibility</p>
                  </div>
                  {simulatedResults.map((result, i) => {
                    const style = statusColors[result.status];
                    const Icon = style.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-4 ${style.bg} border rounded-xl px-4 py-3.5`}
                      >
                        <Icon className={`w-5 h-5 ${style.text} shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-black text-foreground">{result.platform}</p>
                          <p className={`text-xs font-medium ${style.text}`}>{result.message}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                  <a href="#lp-form"
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
