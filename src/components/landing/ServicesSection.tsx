'use client';

import {
  ArrowRight,
  BarChartBig,
  Code2,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
};

const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'SEO Management',
    description:
      'Dominate search results and capture high-intent traffic with proprietary tech.',
    linkText: 'Explore SEO',
    linkUrl: '/contact?problem=website',
  },
  {
    icon: BarChartBig,
    title: 'PPC Advertising',
    description:
      'Instant visibility with a focus on cost-per-acquisition and ROI.',
    linkText: 'Explore PPC',
    linkUrl: '/contact?problem=google',
  },
  {
    icon: MessageSquare,
    title: 'Content Strategy',
    description:
      'Strategic storytelling that builds authority and drives organic conversions.',
    linkText: 'Explore Content',
    linkUrl: '/contact?problem=content',
  },
  {
    icon: Code2,
    title: 'Custom AI Websites',
    description:
      'Custom-coded websites with professional-level AI to drive conversions and automate your business.',
    linkText: 'Explore AI',
    linkUrl: '/contact?problem=ai',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0.1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 1,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="bg-background py-24 lg:py-48 border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-primary font-mono text-sm font-black uppercase tracking-[0.4em] mb-6 block opacity-80">
              Our GEO Framework
            </span>
            <h2 className="text-foreground text-oversized mb-8">
              The Four Pillars of <span className="text-primary">Authority.</span>
            </h2>
            <p className="text-muted-foreground text-xl lg:text-2xl max-w-3xl leading-relaxed font-medium italic border-l-4 border-primary pl-10">
              We implement a comprehensive Generative Engine Optimization framework that establishes your brand as the definitive authority in your space.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={service.linkUrl} className="block group h-full">
                <div className="bg-card/30 backdrop-blur-xl p-10 rounded-[2.5rem] border border-border/50 group-hover:border-primary/40 group-hover:shadow-3xl group-hover:shadow-primary/5 transition-all duration-700 ease-liquid h-full flex flex-col items-start text-left">
                  <div className="mb-8 p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-10 h-10 text-primary transition-transform duration-700 ease-liquid group-hover:scale-110" strokeWidth={1} />
                  </div>
                  <h3 className="font-black text-2xl lg:text-3xl mb-4 italic uppercase tracking-tighter text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 flex-grow leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <span className="text-primary font-black text-xs uppercase tracking-[0.2em] flex items-center group-hover:gap-4 transition-all">
                    {service.linkText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
