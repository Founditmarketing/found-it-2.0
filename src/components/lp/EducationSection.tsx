'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '60%', description: 'of Google searches now end without a click', source: 'SparkToro / SimilarWeb' },
  { value: '500M+', description: 'weekly ChatGPT users searching for businesses like yours', source: 'OpenAI' },
  { value: '30%+', description: 'of Google searches now show AI Overviews', source: 'BrightEdge' },
];

export function EducationSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">The Shift</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            The Search Landscape<br /><span className="text-primary">Just Changed.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-16">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-[2rem] p-8 lg:p-10 text-center group hover:border-primary/20 transition-all duration-500"
            >
              <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary italic tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500">
                {stat.value}
              </p>
              <p className="mt-4 text-foreground font-bold text-sm lg:text-base leading-snug">{stat.description}</p>
              <p className="mt-2 text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40">Source: {stat.source}</p>
            </motion.div>
          ))}
        </div>

        {/* Explainer */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}
          className="max-w-3xl mx-auto space-y-6 text-muted-foreground font-medium leading-relaxed text-base lg:text-lg"
        >
          <p>
            For twenty years, the game was simple: rank on Google, get clicks, get customers. That era is ending. Today, Google itself answers the query before the user ever sees your website. And increasingly, your customers aren&apos;t even using Google — they&apos;re asking ChatGPT, Perplexity, and voice assistants for recommendations.
          </p>
          <p>
            <span className="text-foreground font-bold">Traditional SEO is now necessary but not sufficient.</span> You still need it — it feeds the AI engines. But if your business isn&apos;t structured to be cited by AI, you&apos;re invisible to a rapidly growing share of your market.
          </p>
          <p>
            Generative Engine Optimization (GEO) is the discipline of making your business the answer when AI recommends. It&apos;s not a gimmick — it&apos;s the next evolution of search marketing. And right now, almost nobody is doing it. <span className="text-primary font-bold">That&apos;s your window.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
