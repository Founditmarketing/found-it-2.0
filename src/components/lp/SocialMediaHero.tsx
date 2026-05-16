'use client';

import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';
import { Heart, MessageCircle, Send, Bookmark, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const orchestrator = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } } };
const lineReveal = { hidden: { y: '110%', rotateX: -25, opacity: 0 }, visible: { y: '0%', rotateX: 0, opacity: 1, transition: { duration: 1.2, ease } } };
const fadeRise = { hidden: { y: 40, opacity: 0, filter: 'blur(8px)' }, visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease } } };

const mockPosts = [
  { gradient: 'from-amber-600 to-orange-800', likes: '847', platform: 'ig' },
  { gradient: 'from-blue-600 to-indigo-800', likes: '1.2K', platform: 'fb' },
  { gradient: 'from-emerald-600 to-teal-800', likes: '634', platform: 'ig' },
];

function PhoneMockup() {
  const [activePost, setActivePost] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActivePost(p => (p + 1) % mockPosts.length), 3000);
    return () => clearInterval(t);
  }, []);
  const post = mockPosts[activePost];

  return (
    <div className="w-[260px] sm:w-[280px] mx-auto">
      <div className="bg-black/80 rounded-[2.5rem] p-3 border border-white/10 shadow-2xl">
        <div className="bg-background rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 py-2 text-[10px] text-white/40 font-bold">
            <span>9:41</span>
            <div className="w-20 h-5 bg-black rounded-full" />
            <span>●●●</span>
          </div>
          {/* App header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/20">
            {post.platform === 'ig' ? <Instagram className="w-5 h-5 text-white" /> : <Facebook className="w-5 h-5 text-blue-400" />}
            <span className="text-xs font-black text-white/80">found.it.marketing</span>
          </div>
          {/* Post image */}
          <motion.div key={activePost} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className={`h-[220px] bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
          >
            <span className="text-white/60 text-sm font-black italic">Client Content</span>
          </motion.div>
          {/* Actions */}
          <div className="px-4 py-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                <MessageCircle className="w-5 h-5 text-white/60" />
                <Send className="w-5 h-5 text-white/60" />
              </div>
              <Bookmark className="w-5 h-5 text-white/60" />
            </div>
            <p className="text-xs font-bold text-white/80">{post.likes} likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialMediaHero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-border/10 pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="flex-grow flex items-center relative z-10 w-full">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div variants={orchestrator} initial="hidden" animate="visible" className="lg:col-span-7 max-w-2xl" style={{ perspective: '1200px' }}>
              <motion.p variants={fadeRise} className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-5 opacity-80">Social Media Management</motion.p>
              <div className="overflow-hidden mb-1 py-1">
                <motion.h1 variants={lineReveal} className="text-white text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  Social Media That Builds
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-1 py-1">
                <motion.h1 variants={lineReveal} className="text-white text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  Your Brand — <motion.span className="text-primary inline-block" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.0, ease }}>Not Just Posts</motion.span>
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6 py-1">
                <motion.h1 variants={lineReveal} className="text-primary text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  To an Empty Feed.
                </motion.h1>
              </div>
              <motion.p variants={fadeRise} className="text-base sm:text-lg text-white/70 font-medium mb-8 leading-relaxed max-w-xl">
                Organic content, paid ads, and full-stack social strategy. We manage social for 100+ businesses across Louisiana and Texas.
              </motion.p>
              <motion.div variants={fadeRise}>
                <Link href="#lp-form" className="w-full sm:w-auto inline-block">
                  <LiquidButton className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 text-sm sm:text-base tracking-normal sm:tracking-[0.1em] shadow-2xl shadow-primary/20">
                    Get a Free 30-Day Content Plan
                  </LiquidButton>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1.2, ease }} className="lg:col-span-5 hidden md:block">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <PhoneMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
