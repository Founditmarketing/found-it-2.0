'use client';

import {
  Bot,
  Search,
  Sparkles,
  Loader2,
  ServerCrash,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { type AIVisibilityOutput } from '@/ai/schemas/ai-visibility-check';
import { checkAIVisibility } from '@/ai/flows/ai-visibility-check';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const defaultQuestion = "What's the best brand for my needs?";

export function GeoSimulatorSection() {
  const [isClient, setIsClient] = useState(false);
  const [url, setUrl] = useState('');
  const [question, setQuestion] = useState(defaultQuestion);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AIVisibilityOutput | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError(null);
    setResult(null);

    // Update the question based on the URL
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      setQuestion(`Should I use ${domain} for my business?`);
    } catch (_) {
      setQuestion(`What is ${url}?`);
    }

    try {
      const res = await checkAIVisibility({ url });
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResult(null);
    setError(null);
    setLoading(false);
    setQuestion(defaultQuestion);
  };

  const liquidEasing = [0.16, 1, 0.3, 1] as const;

  const renderGeoContent = () => {
    if (loading) {
      return (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: liquidEasing as any }}
          className="relative flex flex-col items-center justify-center text-center h-[350px] bg-black/40 rounded-2xl border-2 border-primary/20 overflow-hidden px-6"
        >
          {/* Scanning Line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-20 shadow-[0_0_20px_rgba(249,115,22,0.6)]"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <Loader2 className="h-16 w-16 text-primary animate-spin-slow mx-auto mb-8 opacity-50" strokeWidth={0.5} />
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter opacity-80">
              Bypassing Filters...
            </h3>
            <p className="text-primary font-mono text-[10px] mt-4 tracking-[0.4em] bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full animate-pulse uppercase">
              Entity Scan In Progress
            </p>
          </div>
        </motion.div>
      );
    }

    if (error) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center h-[350px] bg-red-900/5 rounded-2xl border-2 border-destructive/20 p-6"
        >
          <ServerCrash className="h-12 w-12 text-destructive mb-6 opacity-50" strokeWidth={1} />
          <p className="text-white font-black uppercase italic tracking-tighter text-2xl">Uplink Failed</p>
          <p className="text-red-300 text-xs font-mono mt-3 mb-8 opacity-60 uppercase tracking-widest">{error}</p>
          <Button onClick={handleReset} variant="destructive" size="sm" className="font-black uppercase tracking-tighter italic h-12 px-8 rounded-xl shadow-2xl shadow-destructive/20 active:scale-95 transition-all">
            Retry Connection
          </Button>
        </motion.div>
      );
    }

    if (result) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: liquidEasing as any }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-2xl border border-primary/10">
            <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 border border-white/5 shadow-lg">
              <Search className="w-5 h-5 text-muted-foreground opacity-50" />
            </div>
            <p className="text-foreground/80 font-mono text-xs leading-relaxed pt-1.5 italic uppercase tracking-widest">{question}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-primary/10 items-center justify-center shrink-0 border-2 border-primary/30 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <div className="flex-1 space-y-6 min-w-0 w-full">
              <div className="bg-background/80 p-4 sm:p-6 rounded-3xl border-l-4 border-primary shadow-2xl backdrop-blur-xl">
                <p className="text-foreground leading-relaxed text-base sm:text-lg font-medium italic uppercase tracking-tight opacity-90 break-words">{result.summary}</p>
              </div>

              <div className="bg-primary/5 border-2 border-primary/10 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <p className="font-black text-primary text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping shrink-0" />
                  Strategic Directive:
                </p>
                <p className="text-foreground text-lg sm:text-xl font-black leading-tight uppercase tracking-tight italic relative z-10 break-words">
                  {result.recommendation}
                </p>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 pt-6 border-t border-primary/10 relative z-10 gap-4'>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-black font-mono text-muted-foreground uppercase opacity-40">Authority Index:</span>
                    <span className="text-3xl font-black italic text-primary drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">{result.score}<span className="text-sm ml-1 opacity-50">/100</span></span>
                  </div>
                  <Button onClick={handleReset} variant="ghost" className="h-10 px-4 text-xs font-black uppercase tracking-widest hover:bg-primary/10 text-primary transition-all rounded-xl w-full sm:w-auto">
                    New Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    // Initial state with the input form
    return (
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-muted/40 rounded-2xl border border-primary/10">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-white/10 shadow-lg">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-foreground/90 font-mono text-sm leading-tight pt-1 italic uppercase tracking-tighter">{question}</p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
            <ChevronRight className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground leading-snug font-mono text-xs uppercase tracking-tighter mb-4 opacity-70">
              Input competitor URL. Expose their GEO weakness. Dominate the AI entity landscape.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="https://competitor.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="h-12 bg-background/50 border-primary/20 focus:border-primary/50 text-sm font-mono uppercase tracking-tighter rounded-xl w-full"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground h-12 px-6 shrink-0 rounded-xl font-black uppercase italic tracking-tighter shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Launch'}
              </Button>
            </form>
          </div>
        </div>
      </div >
    );
  };

  return (
    <section className="bg-background py-24 lg:py-32 border-b">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-foreground font-black text-[36px] md:text-[45px] leading-tight mb-4 uppercase italic tracking-tighter">
            Show, <span className="text-primary">Don't Tell.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Your customers aren't just searching anymore—they're asking.
            Generative Engine Optimization (GEO) ensures your brand is the
            definitive answer, not just another blue link. See the difference
            for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch">
          {/* Old World: SEO */}
          <div className="hidden lg:flex bg-card border rounded-3xl p-6 lg:p-8 flex-col w-full overflow-hidden">
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-center text-red-400/80 mb-1">
                THE OLD WORLD
              </h3>
              <p className="text-card-foreground text-center font-mono text-2xl lg:text-3xl tracking-tighter">
                SEO
              </p>
            </div>
            <div className="bg-background rounded-xl p-4 flex-grow border shadow-inner">
              <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-md mb-4 border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <p className="text-muted-foreground">
                  best brand for my business
                </p>
              </div>

              <div className="space-y-3 animate-pulse">
                <div className="p-3 bg-muted/70 rounded">
                  <p className="text-xs text-yellow-400 font-bold">
                    Ad{' '}
                    <span className="text-muted-foreground font-normal ml-2">
                      www.generic-brand.com
                    </span>
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    A Brand You've Never Heard Of
                  </p>
                </div>
                <div className="p-3 bg-muted/70 rounded">
                  <p className="text-xs text-yellow-400 font-bold">
                    Ad{' '}
                    <span className="text-muted-foreground font-normal ml-2">
                      www.buy-now.com
                    </span>
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    A Cheaper, Lower-Quality Option
                  </p>
                </div>
                <div className="p-3 bg-muted/70 rounded">
                  <p className="text-faint text-xs">
                    www.forbes.com/reviews
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    The 10 Best Brands of{' '}
                    {isClient ? new Date().getFullYear() : '...'} - Forbes
                  </p>
                </div>
                <div className="p-3 bg-muted/70 rounded">
                  <p className="text-faint text-xs">
                    www.yourcompetitor.com
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    Your Competitor's Brand - A Top Result
                  </p>
                </div>
                <div className="p-3 bg-muted/70 rounded opacity-50">
                  <p className="text-faint text-xs">
                    www.random-listicle.net
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    15 Brands Compared - A Listicle
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm italic">
              Result: Lost in the noise.
            </p>
          </div>

          {/* New World: GEO */}
          <div className="bg-primary/10 border-2 border-primary/80 rounded-3xl p-6 lg:p-8 flex flex-col shadow-2xl shadow-primary/20 lg:scale-[1.02] w-full overflow-hidden">
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-center text-primary mb-1">
                THE NEW WORLD
              </h3>
              <p className="text-foreground text-center font-mono text-2xl lg:text-3xl tracking-tighter">
                GEO
              </p>
            </div>
            <div className="bg-background/50 rounded-xl p-4 flex-grow border border-primary/20 shadow-inner min-h-[300px] flex flex-col justify-center">
              {renderGeoContent()}
            </div>
            <p className="text-center text-primary/80 mt-4 text-sm font-bold">
              Result: You are the definitive answer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
