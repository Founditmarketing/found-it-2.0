'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

export function LPFooter() {
  return (
    <footer className="relative py-12 lg:py-16 border-t border-border/10 pb-32 lg:pb-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-black text-2xl tracking-tighter text-foreground group"
          >
            found it
            <span className="text-primary inline-block">.</span>
          </Link>

          {/* Legal */}
          <div className="flex items-center gap-6 text-[9px] font-mono uppercase tracking-[0.4em] text-faint">
            <span>© {new Date().getFullYear()} Found It Marketing</span>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
