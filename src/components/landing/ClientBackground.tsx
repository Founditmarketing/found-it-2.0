'use client';

/* The global ground (de-hazed 9/3). The wandering LiquidOrbs canvas is
   retired: dim orange on near-black always reads russet-brown, so at any
   size the drifting blobs registered as haze or water stains — and they'd
   park behind the wordmark. Light now comes only from each page's
   intentional, static washes; globally the site gets one warm breath at
   the very top and a crisp grid. The stage stays black. */

export function ClientBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#020202] pointer-events-none overflow-hidden">
            {/* One static warm breath, top-center — a light source above the page */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_-10%,rgba(255,100,20,0.06),transparent_70%)]" />

            {/* Overlay grid for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        </div>
    );
}
