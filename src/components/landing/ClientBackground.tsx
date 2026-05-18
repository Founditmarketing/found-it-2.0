'use client';

export function ClientBackground() {
    return (
        <div className="fixed inset-0 z-[0] bg-[#020202] pointer-events-none overflow-hidden">
            {/* Subtle moving gradients (GPU optimized, no blur filter) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_center,rgba(255,85,0,0.15)_0%,transparent_70%)] rounded-full animate-blob transform-gpu" />
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] rounded-full animate-blob animation-delay-2000 transform-gpu" />
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.15)_0%,transparent_70%)] rounded-full animate-blob animation-delay-4000 transform-gpu" />
            
            {/* Overlay grid for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        </div>
    );
}
