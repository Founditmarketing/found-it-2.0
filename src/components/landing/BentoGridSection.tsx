'use client';

import {
  LayoutDashboard,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { motion, Variants } from 'framer-motion';

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

const kpiData = [
  { month: 'Jan', revenue: 4000, leads: 24 },
  { month: 'Feb', revenue: 3000, leads: 13 },
  { month: 'Mar', revenue: 5000, leads: 45 },
  { month: 'Apr', revenue: 4780, leads: 39 },
  { month: 'May', revenue: 6890, leads: 48 },
  { month: 'Jun', revenue: 5390, leads: 38 },
];

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly faster for flow
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0.1, scale: 0.99 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: liquidEasing as any,
      duration: 1,
    },
  },
};

export function BentoGridSection() {
  return (
    <section className="bg-background py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="blur-blob w-[500px] h-[500px] bg-primary/10 -top-20 -right-20" />
        <div className="blur-blob w-[400px] h-[400px] bg-blue-500/10 top-1/2 -left-20" />

        <div className="mb-24 lg:grid lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: liquidEasing as any }}
            className="lg:col-span-12"
          >
            <h2 className="text-foreground text-oversized mb-4">
              Your <span className="text-primary">Unfair</span> Advantage.
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl font-medium border-l-8 border-primary pl-8 mt-8">
              For 13 years, we've built the systems that turn local businesses into industry titans. We don&apos;t guess, we measure. Our custom data pipelines and GEO-focused tools give you a real-time, unfair advantage.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-24"
        >
          {/* KPI Dashboard - Offset Left/Up */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 bg-card border border-border/40 p-8 lg:p-12 rounded-[3.5rem] flex flex-col justify-between group hover:border-primary/50 transition-all duration-700 ease-liquid shadow-xl hover:shadow-2xl overflow-hidden relative lg:-ml-12 lg:-mt-12 z-20"
          >
            <div className="relative z-10">
              <LayoutDashboard className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-card-foreground text-3xl font-black italic uppercase tracking-tighter">
                Real-Time KPI Dashboard
              </h3>
              <p className="text-muted-foreground mt-4 text-sm max-w-md font-medium">
                Track every dollar of your ad spend with our custom data
                pipelines. See leads, revenue, and ROI as it happens.
              </p>
            </div>
            <motion.div
              animate={floatAnimation}
              className="mt-12 h-64 w-full -ml-4 opacity-80 group-hover:opacity-100 transition-opacity"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kpiData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value: number) => `$${value / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--foreground))',
                      borderRadius: '1.5rem',
                      border: '1px solid hsl(var(--primary)/0.2)',
                      backdropFilter: 'blur(20px)',
                    }}
                    labelStyle={{ fontWeight: 'black', textTransform: 'uppercase', fontStyle: 'italic' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={4}
                    dot={{ r: 4, fill: 'hsl(var(--primary))', strokeWidth: 2, stroke: 'hsl(var(--background))' }}
                    activeDot={{ r: 8, strokeWidth: 0, fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>

          {/* Medical Case Study: Total Family Solutions - Offset Right */}
          <motion.div variants={itemVariants} className="md:col-span-5 relative lg:translate-x-12 z-10">
            <Link href="/case-studies" className="block h-full bg-card border border-border/40 p-8 lg:p-12 rounded-[3.5rem] flex flex-col justify-between group hover:border-primary/60 transition-all duration-700 ease-liquid shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors animate-pulse" />
              <div className="relative z-10 flex-grow">
                <TrendingUp className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-4">Case Study: Healthcare</h3>
                <h4 className="text-card-foreground text-3xl font-black italic uppercase tracking-tighter leading-tight">
                  Beating Billion-Dollar Giants
                </h4>
                <p className="text-muted-foreground text-lg mt-4 font-medium italic leading-relaxed">
                  We outranked aggregators like ZocDoc, making our client the top local choice and driving massive patient growth.
                </p>
              </div>
              <motion.div
                animate={pulseAnimation}
                className="relative z-10 mt-10 grid grid-cols-3 gap-4 text-center font-mono"
              >
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-primary text-2xl font-black italic">349%</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1">Growth</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-primary text-2xl font-black italic">TOP 3</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1">Rank</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-primary text-2xl font-black italic">#1</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1">LLM</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Case Study: National Dealer - Offset Down/Center */}
          <motion.div variants={itemVariants} className="md:col-span-12 mt-12 lg:-mt-6 z-30">
            <Link href="/case-studies" className="block bg-card border border-border/40 p-8 lg:p-20 rounded-[4rem] flex flex-col group hover:border-primary/60 transition-all duration-700 ease-liquid shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
              <div className="flex-grow relative z-10">
                <Briefcase className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4">Case Study: National Scale</h3>
                <h4 className="text-card-foreground text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">Local Lot to<br />National Powerhouse</h4>
                <p className="text-muted-foreground text-xl lg:text-2xl mt-4 max-w-4xl font-medium leading-relaxed">This 10-year partnership scaled a local equipment dealer from a single lot to a national volume dealer shipping heavy equipment to 48 states.</p>
                <p className="text-primary mt-12 border-l-4 border-primary pl-8 text-2xl lg:text-3xl italic font-black tracking-tighter">"They turned us into a major volume dealer simply by using their service."</p>
              </div>
              <motion.div
                animate={floatAnimation}
                className="mt-16 pt-16 border-t border-border/50 flex flex-wrap justify-between gap-8 text-center font-mono relative z-10"
              >
                <div className="flex-1 min-w-[200px]">
                  <p className="text-primary text-5xl lg:text-7xl font-black italic tracking-tighter">$500M+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-black mt-4">Revenue Growth</p>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <p className="text-primary text-5xl lg:text-7xl font-black italic tracking-tighter">48</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-black mt-4">States Served</p>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <p className="text-primary text-5xl lg:text-7xl font-black italic tracking-tighter">10-YR</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-black mt-4">Partnership</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
