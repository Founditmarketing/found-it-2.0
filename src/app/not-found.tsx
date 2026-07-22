import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Search } from 'lucide-react';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: 'Google Ads Management', href: '/google-ads-management' },
  { label: 'Web Design', href: '/web-design' },
  { label: 'AI Search Optimization', href: '/ai-search-optimization' },
  { label: 'Case Studies', href: '/case-studies' },
];

export default function NotFound() {
  return (
    <main className="bg-transparent text-foreground min-h-[80dvh] flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[700px] mx-auto px-6 relative z-10 text-center w-full">
        <p className="opacity-0 animate-reveal-up-sm delay-100 text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-6">
          404 — Page Not Found
        </p>

        <h1 className="opacity-0 animate-reveal-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          We Find Customers.{' '}
          <span className="text-primary drop-shadow-[0_0_25px_rgba(249,115,22,0.12)]">Not This Page.</span>
        </h1>

        <p className="opacity-0 animate-reveal-up-sm delay-300 text-lg text-muted-foreground font-medium max-w-md mx-auto leading-relaxed mb-10">
          The page you&apos;re looking for moved, changed, or never existed. Here&apos;s where to go instead.
        </p>

        <div className="opacity-0 animate-reveal-up-sm delay-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between bg-card/10 border border-border/15 rounded-xl px-5 py-4 hover:border-primary/25 transition-all"
              >
                <span className="text-sm font-bold text-foreground">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-8 py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-primary/25 transition-shadow"
            >
              <Search className="w-4 h-4" /> Back to Home
            </Link>
            <a href={phoneHref} className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
              <Phone className="w-4 h-4" /> {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
