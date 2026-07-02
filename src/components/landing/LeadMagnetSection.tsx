'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const industries = [
  { value: '', label: 'Select Your Industry' },
  { value: 'medical', label: 'Medical / Healthcare' },
  { value: 'contractors', label: 'Contractors / Home Services' },
  { value: 'dealerships', label: 'Dealerships / Automotive' },
  { value: 'retail', label: 'Retail / Stores' },
  { value: 'realtors', label: 'Real Estate' },
  { value: 'lawyers', label: 'Legal / Law Firms' },
  { value: 'other', label: 'Other' },
];

export function LeadMagnetSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-12 sm:py-24 lg:py-32 overflow-hidden relative border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Decorative */}
        <div className="blur-blob w-[500px] h-[500px] bg-primary/10 bottom-0 right-0" />

        <div className="bg-card border border-border/40 rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Copy & Social Proof */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: liquidEasing as any }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="p-4 bg-primary/10 rounded-2xl border border-primary/20 w-fit mb-8"
                >
                  <FileText className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </motion.div>

                <h2 className="text-card-foreground font-black text-3xl sm:text-4xl lg:text-5xl italic uppercase tracking-tighter mb-6 leading-[0.9]">
                  See How We&apos;ve Transformed Businesses Like Yours.
                </h2>

                <p className="text-muted-foreground text-base lg:text-lg font-medium leading-relaxed mb-10">
                  Select your industry and get a custom case study showing real results from businesses just like yours. No fluff — just data, strategy, and outcomes.
                </p>

                {/* Social proof snippet */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium italic">
                      <span className="text-foreground font-bold not-italic">349% growth</span> for a healthcare practice competing against billion-dollar aggregators
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium italic">
                      <span className="text-foreground font-bold not-italic">$500M+ revenue</span> scaling a local equipment dealer to 48 states
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium italic">
                      <span className="text-foreground font-bold not-italic">#1 AI/LLM ranking</span> for multiple client verticals across major AI platforms
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: liquidEasing as any }}
              >
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-background/50 backdrop-blur-2xl border border-border/30 rounded-[2.5rem] p-8 lg:p-12 shadow-xl"
                  >
                    <h3 className="text-card-foreground font-black text-xl uppercase italic tracking-tighter mb-8">
                      Get Your Custom Case Study
                    </h3>

                    <div className="space-y-5">
                      {/* Industry Dropdown */}
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] mb-2 block">
                          Your Industry
                        </label>
                        <select
                          required
                          value={formData.industry}
                          onChange={(e) =>
                            setFormData({ ...formData, industry: e.target.value })
                          }
                          className="w-full bg-card border border-border/50 rounded-xl px-5 py-4 text-foreground font-medium appearance-none cursor-pointer hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          {industries.map((ind) => (
                            <option key={ind.value} value={ind.value}>
                              {ind.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Name */}
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] mb-2 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-card border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground font-medium hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] mb-2 block">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@business.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-card border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground font-medium hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] mb-2 block">
                          Phone <span className="opacity-40">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-card border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground font-medium hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full mt-8 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-5 px-8 rounded-2xl text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                    >
                      Get My Case Study
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-[10px] text-muted-foreground text-center mt-4 opacity-50">
                      No spam. We&apos;ll send your case study and that&apos;s it.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-background/50 backdrop-blur-2xl border border-primary/30 rounded-[2.5rem] p-12 lg:p-16 shadow-xl text-center"
                  >
                    <div className="p-5 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-card-foreground font-black text-2xl uppercase italic tracking-tighter mb-4">
                      Case Study Incoming!
                    </h3>
                    <p className="text-muted-foreground text-base font-medium">
                      Check your inbox — your custom case study for the{' '}
                      <span className="text-primary font-bold">
                        {industries.find((i) => i.value === formData.industry)
                          ?.label || 'your'}
                      </span>{' '}
                      industry is on its way.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
