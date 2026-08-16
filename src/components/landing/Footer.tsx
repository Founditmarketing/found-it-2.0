'use client';

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

  return (
    <footer className="bg-background text-foreground pt-16 pb-8 relative overflow-hidden border-t border-border/10">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">

          {/* Services — canonical six pillars from site.ts */}
          <div>
            <h4 className={headingClass}>Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className={linkClass}>
                    {SERVICE_SHORT_LABELS[service.slug] ?? service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/about#team" className={linkClass}>Team</Link></li>
              <li><Link href="/who-we-build-for" className={linkClass}>Who It&apos;s For</Link></li>
              <li><Link href="/case-studies" className={linkClass}>Case Studies</Link></li>
              <li><Link href="/pricing" className={linkClass}>Pricing</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className={headingClass}>Industries</h4>
            <ul className="space-y-3">
              <li><Link href="/industries/medical" className={linkClass}>Medical</Link></li>
              <li><Link href="/industries/contractors" className={linkClass}>Contractors</Link></li>
              <li><Link href="/industries/dealerships" className={linkClass}>Dealerships</Link></li>
              <li><Link href="/industries/realtors" className={linkClass}>Real Estate</Link></li>
              <li><Link href="/industries/lawyers" className={linkClass}>Lawyers</Link></li>
            </ul>
          </div>

          {/* Service Areas + Free Tools */}
          <div>
            <h4 className={headingClass}>Service Areas</h4>
            <ul className="space-y-3">
              <li><Link href="/marketing-alexandria" className={linkClass}>Alexandria Marketing</Link></li>
              <li><Link href="/pineville-seo" className={linkClass}>Pineville SEO</Link></li>
              <li><Link href="/central-louisiana-web-design" className={linkClass}>Central Louisiana Web Design</Link></li>
            </ul>
            <h4 className={`${headingClass} mt-8`}>Free Tools</h4>
            <ul className="space-y-3">
              <li><Link href="/fit" className={linkClass}>Check Your Fit (60 sec)</Link></li>
              <li><Link href="/ai-visibility-check" className={linkClass}>AI Visibility Check</Link></li>
              <li>
                <Link
                  href="/guide"
                  onClick={() => trackGuideCTAClick('footer_tools')}
                  className={linkClass}
                >
                  Free Guide: What Do I Get? (PDF)
                </Link>
              </li>
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
              <Link href="/contact" className="block text-sm text-primary font-bold hover:underline">
                Book a Free Call →
              </Link>
              <Link
                href="/guide"
                onClick={() => trackGuideCTAClick('footer_contact')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-bold"
              >
                Download The Free Guide →
              </Link>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-black text-lg tracking-tighter text-foreground">
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
                  aria-label={`Found It Marketing on ${social.label}`}
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
          </div>
        </div>

      </div>
    </footer>
  );
}
