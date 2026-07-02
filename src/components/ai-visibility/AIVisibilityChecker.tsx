'use client';

import {
  Sparkles,
  Loader2,
  ServerCrash,
  FileText,
  Lightbulb,
  ShieldCheck,
  Zap,
  Activity,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { type AIVisibilityOutput } from '@/ai/schemas/ai-visibility-check';
import { checkAIVisibility } from '@/ai/flows/ai-visibility-check';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AIVisibilityChecker() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AIVisibilityOutput | null>(null);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (result?.score === undefined) return;

    let start = 0;
    const end = result.score;
    const duration = 2000;
    const range = end - start;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      const currentVal = Math.floor(start + easeProgress * range);
      setAnimatedScore(currentVal);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setAnimatedScore(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [result]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    // Basic URL cleanup
    let cleanUrl = url.trim();
    if (!cleanUrl) {
      setLoading(false);
      setError("Please enter a valid URL.");
      return;
    }

    if (!cleanUrl.startsWith('http')) {
      cleanUrl = `https://${cleanUrl}`;
    }

    try {
      console.log('Initiating AI Visibility Check for:', cleanUrl);
      const res = await checkAIVisibility({ url: cleanUrl });
      console.log('AI Visibility Check Result:', res);
      if (!res) {
        throw new Error("No data received from AI service.");
      }
      setResult(res);
    } catch (err: any) {
      console.error('AI Visibility Check Failed:', err);
      // Detailed error message for the user
      const errorMessage = err.message || 'An unexpected error occurred during analysis.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4">
      <AnimatePresence mode="wait">
        {!loading && !result && !error && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, scale: 0.98, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/40 backdrop-blur-3xl border border-border/50 p-6 lg:p-24 rounded-[2.5rem] lg:rounded-[4rem] shadow-3xl relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-12">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Security & Authority Protocol</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-10 max-w-2xl mx-auto">
                  <div className="relative group">
                    <Input
                      type="text"
                      placeholder="ENTER DOMAIN..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      className="h-16 lg:h-24 text-xl lg:text-3xl font-black uppercase italic tracking-tighter bg-background/50 border-primary/10 focus:border-primary/50 transition-all rounded-[1.5rem] lg:rounded-[2rem] text-center placeholder:text-muted-foreground px-6 lg:px-10 shadow-inner"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[2.2rem] opacity-0 group-focus-within:opacity-100 transition-opacity blur-lg pointer-events-none" />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-primary-foreground font-black h-16 lg:h-24 px-10 lg:px-16 uppercase italic tracking-tighter text-xl lg:text-3xl rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl shadow-primary/30 hover:scale-[1.05] transition-all magnetic"
                  >
                    Initiate Scan
                    <ChevronRight className="ml-2 lg:ml-4 w-6 h-6 lg:w-10 lg:h-10" strokeWidth={3} />
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-12 font-mono uppercase tracking-[0.4em] opacity-40 animate-pulse">
                  Ready for GEO Entity Recognition Analysis // v2.4.0
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-black rounded-[2.5rem] lg:rounded-[4rem] border border-primary/20 p-12 lg:p-24 overflow-hidden min-h-[400px] lg:min-h-[600px] flex flex-col items-center justify-center text-center shadow-[0_0_100px_rgba(249,115,22,0.1)]"
          >
            {/* Background Data Stream Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none font-mono text-[12px] leading-tight text-primary overflow-hidden select-none">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="whitespace-nowrap flex gap-4" style={{ transform: `translateX(${Math.sin(i) * 50}px)` }}>
                  <span className="animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
                    {Math.random().toString(36).substring(2, 50).repeat(3)}
                  </span>
                  <span className="text-white/5 font-black uppercase italic tracking-tighter">
                    ANALYZING_AUTHORITY_NODES::SCANNING_GEO_ENTITIES::LLM_RECOMMENDATION_CALIBRATION
                  </span>
                </div>
              ))}
            </div>

            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-20 shadow-[0_0_30px_rgba(249,115,22,1)]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-12">
                <Loader2 className="h-32 w-32 text-primary animate-spin" strokeWidth={0.5} />
                <Activity className="absolute inset-0 m-auto h-12 w-12 text-primary animate-pulse" />
              </div>
              <h3 className="text-3xl lg:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 lg:mb-8 leading-none">
                Analyzing<br />Authority Nodes
              </h3>
              <div className="flex items-center gap-6 text-primary font-mono text-sm tracking-[0.4em] bg-primary/10 border border-primary/20 px-8 py-4 rounded-full uppercase font-black">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Running GEO Entity Evaluation...
              </div>
            </div>
          </motion.div>
        )}

        {result && (
          <div className="space-y-16">
            <motion.div
              key="result-header"
              initial={{ opacity: 0, y: 60, scale: 0.98, filter: 'blur(20px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card/40 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] lg:rounded-[4rem] p-6 lg:p-24 shadow-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                <Zap className="w-96 h-96 text-primary" strokeWidth={1} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 text-center lg:text-left">
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-primary/10"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: result.score / 100 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        className="text-primary drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground mb-[-8px]">V-Score Power Level</span>
                      <span className="text-8xl lg:text-[12rem] font-black text-foreground tabular-nums italic tracking-tighter leading-none">
                        {animatedScore}
                      </span>
                      <span className="text-primary font-black uppercase italic tracking-tighter text-2xl lg:text-4xl">Dominance</span>
                    </div>
                  </div>

                  <div className="mt-12 bg-primary/10 border border-primary/20 rounded-3xl px-12 py-6 text-center">
                    <p className="text-sm font-mono uppercase tracking-[0.4em] text-primary font-black mb-2">Protocol Status</p>
                    <p className="text-3xl lg:text-5xl font-black uppercase italic tracking-tighter text-foreground">
                      {result.score > 80 ? 'Market Leader' : result.score > 50 ? 'Strong Contender' : 'Legacy Exposure'}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-12">
                  <div className="bg-muted/30 p-12 lg:p-20 rounded-[3rem] border-l-[16px] border-primary">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="p-4 bg-primary/10 rounded-2xl">
                        <FileText className="w-10 h-10 text-primary" strokeWidth={1} />
                      </div>
                      <h4 className="text-3xl font-black italic uppercase tracking-tighter">Strategic Analysis</h4>
                    </div>
                    <p className="text-xl lg:text-2xl text-foreground font-medium italic border-white/5 pt-4">
                      {result.summary}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary/5 p-12 lg:p-20 rounded-[3.5rem] border-2 border-primary/10 shadow-2xl"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Lightbulb className="w-10 h-10 text-primary" strokeWidth={1} />
                  </div>
                  <h4 className="text-3xl font-black italic uppercase tracking-tighter text-primary">Mastery Directive</h4>
                </div>
                <p className="text-2xl lg:text-4xl font-black text-foreground italic tracking-tighter leading-tight">
                  {result.recommendation}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/30 backdrop-blur-xl p-12 lg:p-20 rounded-[3.5rem] border border-border/50 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-6 mb-12">
                    <Activity className="w-12 h-12 text-primary" strokeWidth={1} />
                    <span className="text-sm font-mono uppercase tracking-[0.5em] text-muted-foreground font-black">Real-time Intelligence Uplink</span>
                  </div>
                  <p className="text-xl text-muted-foreground font-medium italic mb-12">
                    This analysis is based on current LLM indexing patterns for Gemini and OpenAI models. Ready to secure your position?
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button onClick={handleReset} variant="outline" className="h-20 px-12 rounded-2xl font-black italic uppercase tracking-tighter text-xl border-border/50 hover:bg-white/5 transition-all">
                    New Analysis
                  </Button>
                  <Button asChild className="h-20 px-12 rounded-2xl font-black italic uppercase tracking-tighter text-xl bg-primary text-primary-foreground shadow-2xl shadow-primary/30 magnetic flex-1">
                    <a href="/contact">Claim Position</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-red-900/5 backdrop-blur-3xl p-12 lg:p-24 rounded-[2.5rem] lg:rounded-[4rem] border-2 border-destructive/20 max-w-4xl mx-auto shadow-3xl"
          >
            <div className="p-6 lg:p-8 bg-destructive/10 rounded-full w-fit mx-auto mb-6 lg:mb-10">
              <ServerCrash className="h-12 w-12 lg:h-20 lg:w-20 text-destructive" strokeWidth={1} />
            </div>
            <h3 className="text-3xl lg:text-7xl font-black text-white italic uppercase tracking-tighter mb-4 lg:mb-8 leading-none">Uplink<br />Interrupted</h3>
            <p className="text-red-300 font-mono text-sm lg:text-xl mb-8 lg:mb-12 uppercase tracking-widest px-4">{error}</p>
            <Button onClick={handleReset} variant="destructive" className="h-16 lg:h-24 px-8 lg:px-16 rounded-[1.5rem] lg:rounded-[2rem] font-black italic uppercase tracking-tighter text-xl lg:text-3xl shadow-2xl shadow-destructive/20 active:scale-95 transition-all">
              Re-Establish Connection
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

