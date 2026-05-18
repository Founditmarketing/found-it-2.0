'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

interface Bullet {
  title: string;
  detail: string;
}

interface ObjectionBulletsProps {
  bullets: [Bullet, Bullet, Bullet];
}

export function ObjectionBullets({ bullets }: ObjectionBulletsProps) {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="space-y-6">
          {bullets.map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
              className="flex items-start gap-4 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-lg font-black uppercase italic tracking-tighter text-foreground leading-snug">
                  {bullet.title}
                </p>
                <p className="text-sm text-muted-foreground font-medium mt-1 leading-relaxed">
                  {bullet.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
