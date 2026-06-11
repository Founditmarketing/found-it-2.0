'use client';

import { LiquidOrbs } from './LiquidOrbs';

export function ClientBackground() {
    return (
        <div data-fancy className="fixed inset-0 z-0 bg-[#020202] pointer-events-none overflow-hidden">
            {/* Interactive liquid-light orbs (reacts to the cursor) */}
            <LiquidOrbs />

            {/* Overlay grid for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        </div>
    );
}
