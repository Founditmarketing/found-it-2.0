'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  heading?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Free Audit & Strategy',
    description:
      'We deep-dive into your market, competitors, and current presence. You get a full action plan — free.',
  },
  {
    number: '02',
    title: 'Custom Build',
    description:
      'Our team designs and deploys your campaigns (or website) using data-driven strategies tailored to your market.',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description:
      'We launch, track every metric, and continuously optimize. You see real leads, real results, real ROI.',
  },
];

export function ProcessSteps({
  heading = 'How It Works',
  steps = defaultSteps,
}: ProcessStepsProps) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">
            The Process
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            {heading}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: ease as any,
              }}
              className="relative group"
            >
              <div className="bg-card/20 backdrop-blur-xl border border-border/20 rounded-[2rem] p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all duration-500 h-full">
                {/* Step number */}
                <span className="text-7xl lg:text-8xl font-black text-primary/10 italic tracking-tighter leading-none absolute top-6 right-8 group-hover:text-primary/20 transition-colors duration-500 select-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Dot indicator */}
                  <div className="w-3 h-3 rounded-full bg-primary mb-6 shadow-lg shadow-primary/30" />

                  <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter mb-4 text-foreground leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
