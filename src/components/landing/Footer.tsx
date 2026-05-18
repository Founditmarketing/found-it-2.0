'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { phoneHref as centralPhoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import { trackCallClick } from '@/lib/analytics';

export function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const phoneNumber = phoneDisplay;
  const phoneHref = centralPhoneHref;

  return (
    <footer className="bg-background text-foreground pt-16 pb-8 relative overflow-hidden border-t border-border/10">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16 mb-16">

          {/* Services */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-5 opacity-60">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/lp/google-ads-management" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Google Ads</Link></li>
              <li><Link href="/lp/web-design" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Web Design</Link></li>
              <li><Link href="/lp/ai-search-seo" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">AI Search / SEO</Link></li>
              <li><Link href="/lp/social-media-management" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Social Media</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-5 opacity-60">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">About</Link></li>
              <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Team</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-5 opacity-60">Industries</h4>
            <ul className="space-y-3">
              <li><Link href="/industries/medical" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Medical</Link></li>
              <li><Link href="/industries/contractors" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Contractors</Link></li>
              <li><Link href="/industries/dealerships" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Dealerships</Link></li>
              <li><Link href="/industries/realtors" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Real Estate</Link></li>
              <li><Link href="/industries/lawyers" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Lawyers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-5 opacity-60">Contact</h4>
            <div className="space-y-4">
              <a
                href={mounted ? phoneHref : '#'}
                onClick={() => trackCallClick()}
                className={`flex items-center gap-2 text-foreground hover:text-primary transition-colors font-bold text-sm ${CALLRAIL_CLASS}`}
              >
                <Phone className="w-4 h-4 text-primary" />
                {mounted ? phoneNumber : '...'}
              </a>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Alexandria, LA 71303
              </p>
              <Link href="/contact" className="text-sm text-primary font-bold hover:underline">
                Book a Free Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-black text-lg tracking-tighter text-foreground">
              found it<span className="text-primary">.</span>
            </Link>
            <span className="text-muted-foreground/30 text-xs font-mono">
              © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors font-bold uppercase tracking-widest">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors font-bold uppercase tracking-widest">
              Privacy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
