'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function LPNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay: 0.3, duration: 1, ease }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-700 ease-liquid ${
        isScrolled
          ? 'h-16 lg:h-20 bg-black/80 backdrop-blur-xl border-b border-border/40'
          : 'h-20 lg:h-24 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="font-black text-2xl sm:text-3xl tracking-tighter text-white select-none"
          >
            <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
              found it
              <span className="text-primary inline-block animate-bounce-dot">.</span>
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
