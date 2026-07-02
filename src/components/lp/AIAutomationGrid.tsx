'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Share2,
  Search,
  Target,
  Globe,
  Star,
  type LucideIcon,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

interface AutomationArea {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const defaultAreas: AutomationArea[] = [
  {
    icon: MessageSquare,
    title: 'Lead Follow-Up & Booking',
    detail: 'Instant text and voice replies that answer questions and book the appointment, 24/7.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    detail: 'AI drafts, designs, and schedules your posts in your brand voice, so your feed never goes quiet.',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    detail: 'AI-assisted pages, blogs, and local SEO that keep you ranking on Google and recommended by AI search.',
  },
  {
    icon: Target,
    title: 'Google Ads',
    detail: 'Automated budget pacing, bid adjustments, and ad-copy testing that squeeze more leads from every dollar.',
  },
  {
    icon: Globe,
    title: 'Your Website',
    detail: 'On-site chat, smart forms, and instant quote flows that turn visitors into booked calls.',
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    detail: 'Automatic review requests after every job, plus AI-drafted replies that keep your rating climbing.',
  },
];

interface AIAutomationGridProps {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  subheading?: string;
  areas?: AutomationArea[];
}

export function AIAutomationGrid({
  eyebrow = 'It Is Not Just Chatbots',
  heading = 'AI Can Run Your',
  headingAccent = 'Entire Marketing Engine.',
  subheading = 'Most agencies sell you one bot and call it a day. We build connected AI systems across every channel that brings you customers.',
  areas = defaultAreas,
}: AIAutomationGridProps) {
  return (
    <section className="relative py-20 lg:py-28" aria-label="What we automate with AI">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-5">
            {heading}{' '}
            <span className="text-primary">{headingAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">{subheading}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: ease as any }}
                className="group bg-card/15 backdrop-blur-xl border border-border/20 rounded-3xl p-7 lg:p-8 hover:border-primary/25 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground mb-2 leading-tight">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground/90 font-medium leading-relaxed">
                  {area.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
