'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Play, Image, Layers } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const posts = [
  { type: 'image', gradient: 'from-amber-700 to-orange-900', label: 'Brand Story', likes: '1.2K', comments: '47' },
  { type: 'carousel', gradient: 'from-blue-700 to-indigo-900', label: 'Educational', likes: '834', comments: '29' },
  { type: 'video', gradient: 'from-rose-700 to-pink-900', label: 'Behind the Scenes', likes: '2.1K', comments: '93' },
  { type: 'image', gradient: 'from-emerald-700 to-teal-900', label: 'Client Feature', likes: '967', comments: '38' },
  { type: 'carousel', gradient: 'from-violet-700 to-purple-900', label: 'Tips & Tricks', likes: '1.5K', comments: '62' },
  { type: 'image', gradient: 'from-sky-700 to-cyan-900', label: 'Event Promo', likes: '743', comments: '21' },
  { type: 'video', gradient: 'from-orange-700 to-red-900', label: 'Testimonial', likes: '1.8K', comments: '84' },
  { type: 'image', gradient: 'from-slate-700 to-zinc-900', label: 'Product Launch', likes: '1.1K', comments: '56' },
  { type: 'carousel', gradient: 'from-teal-700 to-emerald-900', label: 'How-To Guide', likes: '692', comments: '31' },
];

const typeIcons = { image: Image, carousel: Layers, video: Play };

export function ContentGallery() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Content We Create</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">What We Post.</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {posts.map((post, i) => {
            const Icon = typeIcons[post.type as keyof typeof typeIcons];
            return (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: ease as any }}
                className="group relative rounded-2xl overflow-hidden border border-border/20 hover:border-primary/20 transition-all duration-500 aspect-square"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                {/* Type icon */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-white/70" />
                </div>
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/70 text-xs sm:text-sm font-black italic tracking-tighter">{post.label}</span>
                </div>
                {/* Engagement */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-3 text-[10px] text-white/70 font-bold">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {post.comments}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
