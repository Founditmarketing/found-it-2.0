'use client';

import * as React from 'react';
import { Phone, Mail, MapPin, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { SafePhone, SafePhoneText } from '@/components/landing/SafePhone';
import { trackCallClick, trackGuideCTAClick } from '@/lib/analytics';
import { BUSINESS, SERVICES, SAME_AS, LINKS, TRACK_RECORD, SERVICE_SHORT_LABELS } from '@/lib/site';

/** Short footer labels for the canonical service pillars (keyed by slug).
    The set + order come from SERVICES in site.ts — same list the header uses. */
/** Map a SAME_AS profile URL to its icon + accessible label. */
function socialFor(url: string): { Icon: LucideIcon; label: string } | null {
  if (url.includes('facebook')) return { Icon: Facebook, label: 'Facebook' };
  if (url.includes('instagram')) return { Icon: Instagram, label: 'Instagram' };
  if (url.includes('linkedin')) return { Icon: Linkedin, label: 'LinkedIn' };
  if (url.includes('twitter') || url.includes('x.com')) return { Icon: Twitter, label: 'X (Twitter)' };
  if (url.includes('youtube')) return { Icon: Youtube, label: 'YouTube' };
  return null;
}

const linkClass =
  'text-sm text-muted-foreground hover:text-primary transition-colors font-medium';
const headingClass =
  'font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-5 opacity-80';

export function Footer() {
  // LINKS values are config-gated: render the review link only when a real URL is set.
  const googleReviewUrl: string = LINKS.googleBusinessProfile;

  /* The secret AdWords menu's new home (8/28): hold THIS wordmark 3s.
     The header logo's hold now belongs to Glock Mode. */
  const secretTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const secretFired = React.useRef(false);
  const secretStart = () => {
    secretFired.current = false;
    secretTimer.current = setTimeout(() => {
      secretFired.current = true;
      window.dispatchEvent(new CustomEvent('secretmenu:open'));
    }, 3000);
  };
  const secretEnd = () => {
    if (secretTimer.current) {
      clearTimeout(secretTimer.current);
      secretTimer.current = null;
    }
  };
  const secretClick = (e: React.MouseEvent) => {
    if (secretFired.current) {
      e.preventDefault();
      secretFired.current = false;
    }
  };

  return (
    <footer className="bg-background text-foreground pt-16 pb-8 relative overflow-hidden border-t border-border/10">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Main footer grid — software first */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">

          {/* The software */}
          <div>
            <h4 className={headingClass}>The Software</h4>
            <ul className="space-y-3">
              <li><Link href="/foundit-os" className={linkClass}>Found It OS</Link></li>
              <li><Link href="/owned-software" className={linkClass}>What Is Owned Software?</Link></li>
              <li><Link href="/pricing" className={linkClass}>Pricing</Link></li>
              <li><Link href="/who-we-build-for" className={linkClass}>Who It&apos;s For</Link></li>
              <li><Link href="/fit" className={linkClass}>Check Your Fit (60 sec)</Link></li>
              <li><Link href="/security" className={linkClass}>Security &amp; Continuity</Link></li>
              <li><Link href="/case-studies" className={linkClass}>Case Studies</Link></li>
            </ul>
          </div>

          {/* Beyond the OS — MARKETING SALES DEAD (8/26): AI Search is the
              sole marketing offer left; everything else here is software. */}
          <div>
            <h4 className={headingClass}>Beyond the OS</h4>
            <ul className="space-y-3">
              {SERVICES.filter((s) => s.slug !== 'foundit-os').map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className={linkClass}>
                    {SERVICE_SHORT_LABELS[service.slug] ?? service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + free things */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
              <li><Link href="/ai-visibility-check" className={linkClass}>AI Visibility Check</Link></li>
            </ul>
          </div>

          {/* Contact — full visible NAP for local-SEO citations */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className={headingClass}>Contact</h4>
            <address className="not-italic space-y-4">
              <SafePhone
                onClick={() => trackCallClick()}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <SafePhoneText />
              </SafePhone>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium break-all"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                {BUSINESS.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-muted-foreground font-medium leading-relaxed">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.name}
                  <br />
                  {BUSINESS.address.streetAddress}
                  <br />
                  {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}{' '}
                  {BUSINESS.address.postalCode}
                </span>
              </p>
              {googleReviewUrl && (
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <Star className="w-4 h-4 text-primary fill-primary shrink-0" />
                  Rated {TRACK_RECORD.googleRating} on Google
                </a>
              )}
              <Link href="/fit" className="block text-sm text-primary font-bold hover:underline">
                See If Your Business Fits →
              </Link>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-black text-lg tracking-tighter text-foreground select-none"
              style={{ WebkitTouchCallout: 'none' }}
              onMouseDown={secretStart}
              onMouseUp={secretEnd}
              onMouseLeave={secretEnd}
              onTouchStart={secretStart}
              onTouchEnd={secretEnd}
              onClick={secretClick}
              onContextMenu={(e) => e.preventDefault()}
            >
              found it<span className="text-primary">.</span>
            </Link>
            <span className="text-faint text-xs font-mono">
              © {new Date().getFullYear()}
            </span>
          </div>

          {/* Social profiles (SAME_AS in site.ts) */}
          <div className="flex items-center gap-2">
            {SAME_AS.map((url) => {
              const social = socialFor(url);
              if (!social) return null;
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Found It Software on ${social.label}`}
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="text-[10px] text-faint hover:text-primary transition-colors font-bold uppercase tracking-widest">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-[10px] text-faint hover:text-primary transition-colors font-bold uppercase tracking-widest">
              Privacy
            </Link>
            <Link href="/media" className="text-[10px] text-faint hover:text-primary transition-colors font-bold uppercase tracking-widest">
              Media Kit
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
