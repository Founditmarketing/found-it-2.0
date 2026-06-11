'use client';

import { useEffect, useRef } from 'react';

/* Ambient liquid-light orbs.
   Orange plasma blobs wander on smooth paths, blending additively so overlaps
   brighten like liquid light. Deliberately NOT cursor-reactive (visitors found
   the follow-glow annoying). Canvas-based and GPU-friendly: capped DPR, paused
   when the tab is hidden or the canvas is off-screen, and a static frame for
   prefers-reduced-motion. Sizes to its parent. */

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: [number, number, number];
  phase: number;
  driftFreq: number;
  pulseFreq: number;
}

const COLORS: [number, number, number][] = [
  [255, 85, 0],
  [249, 115, 22],
  [234, 88, 12],
  [255, 140, 32],
];

interface LiquidOrbsProps {
  className?: string;
  /** Overall opacity multiplier (lower for content-heavy pages). */
  intensity?: number;
}

export function LiquidOrbs({ className = '', intensity = 1 }: LiquidOrbsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    let ctx: CanvasRenderingContext2D | null = null;
    try {
      ctx = canvas.getContext('2d', { alpha: true });
    } catch {
      ctx = null;
    }
    if (!ctx) return;
    const c = ctx; // non-null alias

    const mq = typeof window.matchMedia === 'function' ? window.matchMedia.bind(window) : null;
    const reduce = mq ? mq('(prefers-reduced-motion: reduce)').matches : false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let prevW = 0;
    let prevH = 0;
    let t = 0;
    let raf = 0;
    let visible = true;
    const orbs: Orb[] = [];

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const nw = Math.max(1, rect.width);
      const nh = Math.max(1, rect.height);
      // Rescale existing orbs instead of re-initializing, so iOS address-bar
      // resize during scroll never teleports them.
      if (prevW > 0 && prevH > 0 && orbs.length) {
        const sx = nw / prevW;
        const sy = nh / prevH;
        for (const o of orbs) {
          o.x *= sx;
          o.y *= sy;
        }
      }
      w = nw;
      h = nh;
      prevW = nw;
      prevH = nh;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      orbs.length = 0;
      const count = w < 640 ? 5 : 6;
      const base = Math.min(Math.max(w, h), 1100);
      for (let i = 0; i < count; i++) {
        orbs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: 0,
          vy: 0,
          r: base * (0.16 + Math.random() * 0.2),
          color: COLORS[i % COLORS.length],
          phase: Math.random() * Math.PI * 2,
          driftFreq: 0.6 + Math.random() * 0.8,
          pulseFreq: 0.6 + Math.random() * 0.9,
        });
      }
    };

    const drawOrb = (x: number, y: number, r: number, col: [number, number, number], peak: number) => {
      if (r <= 0) return;
      const a = peak * intensity;
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},${a})`);
      g.addColorStop(0.5, `rgba(${col[0]},${col[1]},${col[2]},${a * 0.28})`);
      g.addColorStop(1, `rgba(${col[0]},${col[1]},${col[2]},0)`);
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    };

    const render = () => {
      if (w <= 0 || h <= 0) return;
      c.clearRect(0, 0, w, h);
      c.globalCompositeOperation = 'lighter';
      for (const o of orbs) {
        const pr = o.r * (1 + Math.sin(t * 0.015 * o.pulseFreq + o.phase) * 0.08);
        drawOrb(o.x, o.y, pr, o.color, 0.22);
      }
      c.globalCompositeOperation = 'source-over';
    };

    const step = () => {
      t += 1;

      for (const o of orbs) {
        // smooth wandering force (no jitter)
        o.phase += 0.0025 * o.driftFreq;
        o.vx += Math.cos(o.phase) * 0.012;
        o.vy += Math.sin(o.phase * 0.8 + 1.7) * 0.012;

        o.x += o.vx;
        o.y += o.vy;
        o.vx *= 0.94;
        o.vy *= 0.94;

        const m = o.r * 0.55;
        if (o.x < -m) { o.x = -m; o.vx = Math.abs(o.vx) * 0.6; }
        if (o.x > w + m) { o.x = w + m; o.vx = -Math.abs(o.vx) * 0.6; }
        if (o.y < -m) { o.y = -m; o.vy = Math.abs(o.vy) * 0.6; }
        if (o.y > h + m) { o.y = h + m; o.vy = -Math.abs(o.vy) * 0.6; }
      }

      render();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (raf || reduce || !visible) return;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    init();
    render();

    let resizeRaf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
        if (reduce) render();
      });
    });
    ro.observe(parent);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVis = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener('visibilitychange', onVis);

    if (!reduce) start();

    return () => {
      stop();
      cancelAnimationFrame(resizeRaf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
    />
  );
}
