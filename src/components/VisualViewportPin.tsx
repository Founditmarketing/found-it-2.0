'use client';

import { useEffect } from 'react';

/**
 * VisualViewportPin (9/12, iOS Chrome): one shared pin for every bottom dock.
 * Fixed elements are positioned to the layout viewport; the iOS keyboard, zoom
 * and the collapsing toolbar shrink the VISUAL viewport underneath it, which
 * strands a bottom dock mid-screen. This mounts once in the root layout and
 * keeps two CSS variables on <html> current:
 *   --vv-bottom  = innerHeight - visualViewport.height - visualViewport.offsetTop
 *                  (how far the visual viewport's bottom edge sits above the
 *                  layout viewport's bottom edge; 0 on desktop)
 *   --vv-height  = visualViewport.height (falls back to innerHeight)
 * Bottom docks use bottom: calc(<gap> + var(--vv-bottom, 0px)).
 */
export function VisualViewportPin() {
  useEffect(() => {
    const root = document.documentElement;
    const vv = window.visualViewport;

    const update = () => {
      const height = vv ? vv.height : window.innerHeight;
      const offsetTop = vv ? vv.offsetTop : 0;
      const bottom = Math.max(0, Math.round(window.innerHeight - height - offsetTop));
      root.style.setProperty('--vv-bottom', `${bottom}px`);
      root.style.setProperty('--vv-height', `${Math.round(height)}px`);
    };

    update();
    window.addEventListener('resize', update);
    vv?.addEventListener('resize', update);
    vv?.addEventListener('scroll', update);
    return () => {
      window.removeEventListener('resize', update);
      vv?.removeEventListener('resize', update);
      vv?.removeEventListener('scroll', update);
      root.style.removeProperty('--vv-bottom');
      root.style.removeProperty('--vv-height');
    };
  }, []);

  return null;
}
