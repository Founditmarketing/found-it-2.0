'use client';

import { ReactNode, useEffect, useRef, Suspense } from 'react';
import Lenis from 'lenis';
import { usePathname, useSearchParams } from 'next/navigation';

function SmoothScrollEffects() {
    const lenisRef = useRef<Lenis | null>(null);
    const rafIdRef = useRef<number | null>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        }

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, searchParams]);

    return null;
}

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    return (
        <>
            <Suspense fallback={null}>
                <SmoothScrollEffects />
            </Suspense>
            {children}
        </>
    );
}
