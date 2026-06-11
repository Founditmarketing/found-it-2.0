'use client';

import { motion } from 'framer-motion';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer,
} from 'recharts';

/* Interactive trajectory of the real client outcome ($4.2K/mo spend -> $42K/mo
   revenue, 10x ROAS in ~90 days). Monthly points are an illustrative curve of
   that verified before/after; scrub with mouse/finger to explore. */

const data = [
  { m: 'Start', revenue: 4200, label: 'Month 0 — $4.2K/mo spend, no tracking' },
  { m: 'M1', revenue: 9800, label: 'Month 1 — rebuilt campaigns + call tracking' },
  { m: 'M2', revenue: 21500, label: 'Month 2 — junk keywords cut, bids tuned' },
  { m: 'M3', revenue: 42000, label: 'Month 3 — $42K/mo new revenue (10x)' },
  { m: 'M4', revenue: 44500, label: 'Month 4 — scaling what is profitable' },
  { m: 'M5', revenue: 47000, label: 'Month 5 — compounding' },
  { m: 'M6', revenue: 51000, label: 'Month 6 — still climbing' },
];

function ChartTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload as (typeof data)[number];
  return (
    <div className="bg-background/95 backdrop-blur-xl border border-primary/25 rounded-xl px-4 py-3 shadow-2xl max-w-[220px]">
      <p className="text-lg font-black italic tracking-tighter text-primary">
        ${(p.revenue / 1000).toFixed(1)}K<span className="text-[10px] text-muted-foreground font-bold">/mo</span>
      </p>
      <p className="text-[11px] text-muted-foreground font-medium leading-snug mt-1">{p.label}</p>
    </div>
  );
}

export function RoasChart() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-6 bg-gradient-to-b from-primary/[0.05] to-transparent border border-primary/15 rounded-2xl p-5">
        <div className="flex items-baseline justify-between mb-3 gap-3 flex-wrap">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-primary/80">
            The 10x Trajectory — scrub it
          </p>
          <p className="text-[10px] text-muted-foreground/50 font-medium">
            Illustrative monthly curve of a real client outcome
          </p>
        </div>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="roasFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff5500" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#ff5500" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <XAxis dataKey="m" stroke="rgba(255,255,255,0.25)" tick={{ fontSize: 10, fontWeight: 700 }} tickLine={false} axisLine={false} />
              <YAxis
                stroke="rgba(255,255,255,0.25)"
                tick={{ fontSize: 10, fontWeight: 700 }}
                tickFormatter={(v: number) => `$${Math.round(v / 1000)}K`}
                tickLine={false}
                axisLine={false}
                width={42}
              />
              <ReferenceLine y={4200} stroke="rgba(255,255,255,0.18)" strokeDasharray="4 4" label={{ value: 'ad spend', fill: 'rgba(255,255,255,0.35)', fontSize: 9, position: 'insideBottomRight' }} />
              <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#ff5500', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#ff5500"
                strokeWidth={3}
                fill="url(#roasFill)"
                animationDuration={1400}
                animationEasing="ease-out"
                activeDot={{ r: 5, fill: '#ff5500', stroke: '#020202', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
