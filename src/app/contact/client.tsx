'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CalendarCheck } from 'lucide-react';
import { BUSINESS, LINKS } from '@/lib/site';
import { FounderByline } from '@/components/FounderByline';
import { ContactForm } from './ContactForm';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Config-gated booking calendar — renders only when a URL is set in site.ts. */
const bookingUrl: string = LINKS.bookingCalendar;

const fullAddress = `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`;

const contactMethods = [
  { icon: Mail, label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: MapPin, label: 'Office', value: fullAddress },
  { icon: Clock, label: 'Response time', value: 'Usually within 2 hours' },
];

export default function ContactClient() {
  // NOTE: no Calendly listener here — GoogleTag registers one globally in the
  // root layout; a second registration would double-count every booking.
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[1080px] mx-auto px-6 relative z-10">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="text-center mb-12">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Contact</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Send Your Number.{' '}<span className="text-primary">Trevor Calls You.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            No junior account managers. A straight answer on what would work for your business —
            including whether we&apos;re the right fit to build it — usually within two hours.
          </p>
          <FounderByline
            align="center"
            className="mt-7"
            line="The one who calls you back — not a rep."
          />
        </motion.div>

        {/* Form + direct contact */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 mb-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactMethods.map((method, i) => (
              <div key={i} className="bg-card/10 border border-border/15 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <method.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-faint">{method.label}</span>
                </div>
                {method.href ? (
                  <a href={method.href} className="text-foreground font-bold text-sm hover:text-primary transition-colors">
                    {method.value}
                  </a>
                ) : (
                  <p className="text-foreground font-bold text-sm">{method.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Booking calendar — renders only when LINKS.bookingCalendar is set */}
        {bookingUrl && (
          <motion.section
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
            className="mb-16"
            aria-label="Book a call"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <CalendarCheck className="w-5 h-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground text-center">
                Prefer to Pick a Time? Book It Here.
              </h2>
            </div>
            <div className="bg-card/10 backdrop-blur-xl border border-border/20 rounded-2xl overflow-hidden">
              <iframe
                src={bookingUrl}
                title="Book a free 15-minute call"
                className="w-full min-h-[660px] border-0"
              />
            </div>
          </motion.section>
        )}

      </div>
    </main>
  );
}
