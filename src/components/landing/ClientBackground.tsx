'use client';

export function ClientBackground({ showOrbs = true }: { showOrbs?: boolean }) {
    return (
        <div className="fixed inset-0 z-[0] bg-[#020202] pointer-events-none overflow-hidden">
            {/* Drifting gradient orbs (GPU-accelerated transforms, no blur filter).
                Slow, distinct paths per orb; static for reduced-motion users. */}
            {showOrbs && (
                <>
                    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_center,rgba(255,85,0,0.18)_0%,transparent_70%)] rounded-full animate-drift-1 motion-reduce:animate-none transform-gpu will-change-transform" />
                    <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18)_0%,transparent_70%)] rounded-full animate-drift-2 animation-delay-2000 motion-reduce:animate-none transform-gpu will-change-transform" />
                    <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.16)_0%,transparent_70%)] rounded-full animate-drift-3 animation-delay-4000 motion-reduce:animate-none transform-gpu will-change-transform" />
                    <div className="absolute top-[40%] left-[45%] w-[35vw] h-[35vw] bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.12)_0%,transparent_70%)] rounded-full animate-drift-2 motion-reduce:animate-none transform-gpu will-change-transform" />
                </>
            )}

            {/* Overlay grid for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        </div>
    );
}
