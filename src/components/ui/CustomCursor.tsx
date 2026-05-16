'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    /* Refs to avoid re-creating listeners on every hover */
    const magneticTargetRef = useRef<DOMRect | null>(null);
    const magneticStrengthRef = useRef(0);

    const moveCursor = useCallback((e: MouseEvent) => {
        const mt = magneticTargetRef.current;
        if (mt) {
            const centerX = mt.left + mt.width / 2;
            const centerY = mt.top + mt.height / 2;
            const str = magneticStrengthRef.current;
            cursorX.set(e.clientX + (centerX - e.clientX) * str);
            cursorY.set(e.clientY + (centerY - e.clientY) * str);
        } else {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        }
    }, [cursorX, cursorY]);

    useEffect(() => {
        setIsMounted(true);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, .interactive');
            if (interactive) {
                if (interactive.classList.contains('magnetic')) {
                    magneticTargetRef.current = interactive.getBoundingClientRect();
                    magneticStrengthRef.current = 0.35;
                } else {
                    magneticTargetRef.current = null;
                    magneticStrengthRef.current = 0;
                }
            } else {
                magneticTargetRef.current = null;
                magneticStrengthRef.current = 0;
            }
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [moveCursor]);

    if (!isMounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000] hidden lg:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        />
    );
}
