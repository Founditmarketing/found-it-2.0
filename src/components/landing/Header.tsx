'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDown, X, ArrowRight, ChevronRight, Globe, TrendingUp, Building2, Users, UserCheck, Copy, Check, ExternalLink, Lock, BadgeDollarSign, Cpu, Download, Newspaper, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { trackGuideCTAClick } from '@/lib/analytics';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion, AnimatePresence } from 'framer-motion';

/* ───────────────────────────── NAV DATA ───────────────────────────── */

interface NavSublink {
  title: string;
  href: string;
  tag: string | null;
}

interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  sublinks?: NavSublink[];
}

/* MARKETING SALES DEAD (8/26): the Marketing dropdown is gone. The sole
   marketing offer left is AI Search Optimization, a plain link below. */

/* 8/18 audit hierarchy: the brain should conclude in five seconds that this
   company builds operating systems you own — not that it's an agency that
   also codes. Software items ride the line as plain links; marketing is ONE
   subtle dropdown at the end. Verticals live under Who It's For (which
   links every industry page) and the footer. */
const navLinks: NavLink[] = [
  {
    title: 'Found It OS',
    href: '/foundit-os',
    icon: Cpu,
    description: 'One system runs the whole business. You own it',
  },
  {
    title: "Who It's For",
    href: '/who-we-build-for',
    icon: UserCheck,
    description: "The businesses we fit, and the ones we turn down",
  },
  {
    title: 'Results',
    href: '/case-studies',
    icon: Globe,
    description: 'The systems we built, the businesses that own them',
  },
  {
    title: 'Pricing',
    href: '/pricing',
    icon: BadgeDollarSign,
    description: 'What it costs. No games.',
  },
  {
    title: 'Fit Check',
    href: '/fit',
    icon: Building2,
    description: '60 seconds. Are you who we build for?',
  },
  // About + Blog are plain links on the menu line — no dropdown (Trevor
  // 8/16); the team page merged into /about the same day.
  {
    title: 'About',
    href: '/about',
    icon: Users,
    description: 'Who we are. The story and the team',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: Newspaper,
    description: 'Software, ownership, and what we shipped',
  },
  // AI Search left the nav 8/27 (review: "one vestigial limb from the old
  // company") — it lives on in the footer's Beyond the OS. The nav is
  // software only.
];

/* ───── Secret menu: AdWords landing pages (off public nav) ─────
   MARKETING SALES DEAD (8/26): marketing LPs removed. App-development LP
   retired 9/5 (Trevor: "we dont do this") — the list is empty but the
   plumbing stays for future ad LPs. */
const SECRET_LPS: { title: string; href: string }[] = [];

/* ───────────────────────────── ANIMATION CONFIG ───────────────────── */

const ease = [0.22, 1, 0.36, 1] as const;

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const menuVariants = {
  closed: { x: '100%' },
  open: {
    x: '0%',
    transition: { type: 'spring' as const, damping: 30, stiffness: 300, mass: 0.8 },
  },
};

const staggerContainer = {
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const navItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
};

const sublinkVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease },
  },
};

/* ───── Animated Hamburger Icon ───── */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col items-end justify-center gap-[5px] relative">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
        transition={{ duration: 0.4, ease }}
        className="block h-[2px] bg-white rounded-full origin-center"
        style={{ width: 24 }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease }}
        className="block h-[2px] bg-white rounded-full"
        style={{ width: 18 }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 14 }}
        transition={{ duration: 0.4, ease }}
        className="block h-[2px] bg-primary rounded-full origin-center"
        style={{ width: 14 }}
      />
    </div>
  );
}

/* ───── Mobile Nav Item ───── */
function MobileNavItem({
  link,
  onClose,
  index,
}: {
  link: (typeof navLinks)[0];
  onClose: () => void;
  index: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const pathname = usePathname();
  const isActive = pathname === link.href || link.sublinks?.some((s) => pathname === s.href);

  if (!link.sublinks) {
    return (
      <motion.div variants={navItemVariants}>
        <Link
          href={link.href}
          onClick={onClose}
          className={cn(
            'group flex items-center gap-4 py-4 px-2 rounded-2xl transition-all duration-300',
            'active:scale-[0.98]',
            isActive
              ? 'bg-primary/10 border border-primary/20'
              : 'hover:bg-white/5 border border-transparent'
          )}
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
            <link.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </span>
          <div className="flex-1 min-w-0">
            <span
              className={cn(
                'text-base font-semibold block',
                isActive ? 'text-primary' : 'text-foreground'
              )}
            >
              {link.title}
            </span>
            <span className="text-[11px] text-muted-foreground font-medium block mt-0.5 truncate">
              {link.description}
            </span>
          </div>
          <ArrowRight
            className={cn(
              'w-4 h-4 shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0',
              isActive ? 'text-primary opacity-100 translate-x-0' : 'text-muted-foreground'
            )}
          />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={navItemVariants}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          'w-full group flex items-center gap-4 py-4 px-2 rounded-2xl transition-all duration-300',
          'active:scale-[0.98]',
          expanded
            ? 'bg-primary/10 border border-primary/20'
            : 'hover:bg-white/5 border border-transparent'
        )}
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
          <link.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
        </span>
        <div className="flex-1 min-w-0 text-left">
          <span
            className={cn(
              'text-base font-semibold block',
              expanded || isActive ? 'text-primary' : 'text-foreground'
            )}
          >
            {link.title}
          </span>
          <span className="text-[11px] text-muted-foreground font-medium block mt-0.5 truncate">
            {link.description}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300',
            expanded && 'rotate-180 text-primary'
          )}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sublinkVariants}
            className="overflow-hidden"
          >
            <div className="pl-14 pr-2 pb-2 pt-1 space-y-0.5">
              {link.sublinks.map((sublink) => {
                const isSubActive = pathname === sublink.href;
                return (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center justify-between py-3 px-3 rounded-xl transition-all duration-200 min-h-[44px]',
                      'active:scale-[0.97]',
                      isSubActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    )}
                  >
                    <span className="text-sm font-bold">{sublink.title}</span>
                    {sublink.tag && (
                      <span className="text-[9px] uppercase tracking-widest font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {sublink.tag}
                      </span>
                    )}
                    {!sublink.tag && (
                      <ChevronRight className="w-3 h-3 opacity-30" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ───────────────────────────── HEADER COMPONENT ───────────────────── */

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [secretMenuOpen, setSecretMenuOpen] = React.useState(false);
  const [copiedHref, setCopiedHref] = React.useState<string | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  /* Hold the logo 3s → GLOCK MODE (Trevor 8/28: the button is gone; the
     station is a secret handshake now). The old secret AdWords menu moved
     to holding the FOOTER wordmark — the header hold belongs to the music.
     A fired hold also suppresses the logo's navigation on release. */
  const holdFiredRef = React.useRef(false);
  const handlePressStart = () => {
    holdFiredRef.current = false;
    timerRef.current = setTimeout(() => {
      holdFiredRef.current = true;
      window.dispatchEvent(new CustomEvent('glockmode:open'));
    }, 3000);
  };
  const handleLogoClick = (e: React.MouseEvent) => {
    if (holdFiredRef.current) {
      e.preventDefault();
      holdFiredRef.current = false;
    }
  };

  const copyUrl = (href: string) => {
    const url = `https://www.founditsoftware.com${href}`;
    try {
      navigator.clipboard?.writeText(url);
      setCopiedHref(href);
      setTimeout(() => setCopiedHref(null), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handlePressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const menuPanelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The secret AdWords menu now opens from the FOOTER wordmark hold (8/28) —
  // the Footer dispatches this event; the panel still lives here.
  React.useEffect(() => {
    const open = () => setSecretMenuOpen(true);
    window.addEventListener('secretmenu:open', open);
    return () => window.removeEventListener('secretmenu:open', open);
  }, []);

  // Escape key to close menu
  React.useEffect(() => {
    if (!mobileMenuOpen && !secretMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSecretMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, secretMenuOpen]);

  // Focus trap: keep Tab within the menu panel
  React.useEffect(() => {
    if (!mobileMenuOpen || !menuPanelRef.current) return;
    const panel = menuPanelRef.current;
    const focusableSelector = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const handleTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = Array.from(panel.querySelectorAll(focusableSelector)) as HTMLElement[];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleTrap);
    // Auto-focus first focusable element
    const firstFocusable = panel.querySelector(focusableSelector) as HTMLElement | null;
    firstFocusable?.focus();
    return () => window.removeEventListener('keydown', handleTrap);
  }, [mobileMenuOpen]);

  // Lock body scroll when menu is open (position:fixed prevents iOS scroll-through)
  React.useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* CSS entrance (not framer-motion) so the header paints even before JS loads */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 w-full animate-header-in transition-all duration-700 ease-liquid',
          isScrolled
            ? 'h-16 lg:h-20 bg-black/80 backdrop-blur-xl border-b border-border/40'
            : 'h-20 lg:h-24 bg-transparent'
        )}
      >
        <div className="w-full mx-auto px-6 xl:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* ─── Logo ─── */}
            <Link
              href="/"
              className="font-black text-3xl tracking-tighter group relative select-none text-white z-[60] shrink-0 whitespace-nowrap"
              style={{ WebkitTouchCallout: 'none' }}
              onMouseDown={handlePressStart}
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressEnd}
              onTouchStart={handlePressStart}
              onTouchEnd={handlePressEnd}
              onClick={handleLogoClick}
              onContextMenu={(e) => e.preventDefault()}
            >
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                found it
                <span className="text-primary inline-block animate-bounce-dot">.</span>
              </motion.span>
            </Link>

            {/* ─── Desktop Nav ───
                xl, not lg: the full row (6 links + guide + CTA) needs
                ~1250px. Between 1024–1279px — odd monitors, or a laptop at
                125–150% zoom — the row crushed and clipped; those visitors now
                get the mobile menu, which handles any width and any zoom. */}
            <nav className="hidden xl:flex items-center gap-3 2xl:gap-8">
              {navLinks.map((link) =>
                link.sublinks ? (
                  <DropdownMenu key={link.title}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 font-semibold text-sm whitespace-nowrap px-2 2xl:px-4 transition-colors group relative text-white hover:text-white hover:bg-white/10"
                      >
                        {link.title} <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card/90 backdrop-blur-2xl border-border/50 rounded-2xl p-2 min-w-[200px]">
                      {link.sublinks.map((sublink) => (
                        <DropdownMenuItem
                          key={sublink.title}
                          asChild
                          className="rounded-xl focus:bg-primary focus:text-primary-foreground cursor-pointer transition-colors duration-200"
                        >
                          <Link href={sublink.href} className="font-bold py-2">
                            {sublink.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-semibold text-sm whitespace-nowrap transition-colors relative group py-2 text-white hover:text-primary"
                  >
                    {link.title}
                    <motion.span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )
              )}
            </nav>

            {/* ─── Desktop Actions — ONE ask, sitewide (8/18 audit). The
                guide lives on in the mobile menu + footer. ─── */}
            <div className="hidden xl:flex items-center">
              <Link href="/fit" className="block shrink-0">
                <LiquidButton className="h-14 px-5 2xl:px-8 text-xs tracking-[0.2em] whitespace-nowrap magnetic transition-colors duration-300 text-white border-white bg-transparent hover:bg-white hover:text-black">
                  Are We a Fit?
                </LiquidButton>
              </Link>
            </div>

            {/* ─── Mobile / narrow / zoomed: Hamburger ─── */}
            <div className="xl:hidden relative z-[60] flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-xl transition-colors hover:bg-white/10 active:scale-95"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-panel"
              >
                <HamburgerIcon isOpen={mobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  MOBILE MENU — Full-screen immersive experience              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              key="menu"
              ref={menuPanelRef}
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-[161] w-full max-w-[380px] bg-background/95 backdrop-blur-2xl border-l border-border/20 shadow-2xl shadow-black/50 xl:hidden flex flex-col"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/[0.06] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-primary/[0.04] to-transparent pointer-events-none" />

              {/* ─── Close Button + Top Spacing ─── */}
              <div className="h-20 shrink-0 flex items-center justify-end px-5">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* ─── Navigation Links ─── */}
              <motion.div
                className="flex-1 overflow-y-auto px-5 pb-4 no-scrollbar relative z-10"
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <MobileNavItem
                      key={link.title}
                      link={link}
                      onClose={() => setMobileMenuOpen(false)}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>

              {/* ─── Bottom Actions ─── */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease }}
                className="relative z-10 p-5 border-t border-border/20 bg-background/80 backdrop-blur-xl space-y-3"
              >
                {/* CTA */}
                <Link
                  href="/fit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Are We a Fit?
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>

                {/* Guide link retired 8/28 (Trevor: "get that free guide off") —
                    /guide stays live by URL only. */}

                {/* Copyright */}
                <div className="flex items-center justify-center pt-1">
                  <span className="text-[9px] text-faint font-mono uppercase tracking-widest">
                    © {new Date().getFullYear()} Found It
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECRET MENU — hidden AdWords landing pages (hold logo 3s)       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {secretMenuOpen && (
          <>
            <motion.div
              key="secret-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[170] bg-black/80 backdrop-blur-md"
              onClick={() => setSecretMenuOpen(false)}
            />
            <motion.div
              key="secret-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Campaign landing pages"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              className="fixed left-1/2 top-1/2 z-[171] w-[calc(100%-2rem)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-2xl border border-border/30 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/[0.07] to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none">Campaign Pages</p>
                    <p className="text-[10px] text-muted-foreground font-medium mt-1">Internal. AdWords landing pages</p>
                  </div>
                </div>
                <button
                  onClick={() => setSecretMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="relative z-10 px-4 pb-5 max-h-[60vh] overflow-y-auto no-scrollbar space-y-1.5">
                {SECRET_LPS.map((lp) => (
                  <div
                    key={lp.href}
                    className="group flex items-center gap-2 rounded-xl border border-transparent hover:border-primary/20 hover:bg-white/5 transition-all px-3 py-2.5"
                  >
                    <Link
                      href={lp.href}
                      target="_blank"
                      onClick={() => setSecretMenuOpen(false)}
                      className="flex-1 min-w-0"
                    >
                      <p className="text-sm font-bold text-foreground truncate">{lp.title}</p>
                      <p className="text-[11px] text-faint font-mono truncate">{lp.href}</p>
                    </Link>
                    <button
                      onClick={() => copyUrl(lp.href)}
                      className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary/15 transition-colors"
                      aria-label={`Copy ${lp.title} URL`}
                    >
                      {copiedHref === lp.href ? (
                        <Check className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </button>
                    <Link
                      href={lp.href}
                      target="_blank"
                      onClick={() => setSecretMenuOpen(false)}
                      className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary/15 transition-colors"
                      aria-label={`Open ${lp.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
