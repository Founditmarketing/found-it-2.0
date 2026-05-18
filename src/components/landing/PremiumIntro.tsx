'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PremiumIntro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hold the loading screen just long enough for Next.js to hydrate
    // and the browser to settle, ensuring the follow-up animation is buttery smooth.
    // 1.2 seconds is the sweet spot for perceived performance without feeling slow.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="premium-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020202] pointer-events-auto"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="font-black text-5xl md:text-6xl tracking-tighter text-white flex items-center gap-1 select-none">
              found it
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
                className="text-primary block"
              >
                .
              </motion.span>
            </div>
            
            {/* Elegant loading line */}
            <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
