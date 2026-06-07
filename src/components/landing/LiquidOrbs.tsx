'use client';

import { useEffect, useRef } from 'react';

/* Interactive liquid-light orbs.
   Orange plasma blobs drift on their own and flow toward the pointer, blending
   additively so overlaps brighten like liquid light. Canvas-based, GPU-friendly,
   pauses when off-screen or hidden, and respects prefers-reduced-motion. */

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: [number, number, number];
  phase: number;
  pulse: number;
}

const COLORS: [number, number, number][] = [
  [255, 85, 0],
  [249, 115, 22],
  [234, 88, 12],
  [255, 140, 32],
];

export function LiquidOrbs({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    let visible = true;
    const orbs: Orb[] = [];
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      orbs.length = 0;
      const count = w < 640 ? 5 : 7;
      const base = Math.min(Math.max(w, h), 1100);
      for (let i = 0; i < count; i++) {
        orbs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: base * (0.16 + Math.random() * 0.2),
          color: COLORS[i % COLORS.length],
          phase: Math.random() * Math.PI * 2,
          pulse: 0.6 + Math.random() * 0.9,
        });
      }
    };

    const drawOrb = (x: number, y: number, r: number, c: [number, number, number], peak: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${peak})`);
      g.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},${peak * 0.28})`);
      g.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (const o of orbs) {
        const pr = o.r * (1 + Math.sin(t * 0.02 * o.pulse + o.phase) * 0.08);
        drawOrb(o.x, o.y, pr, o.color, 0.26);
      }
      if (pointer.active) {
        drawOrb(pointer.x, pointer.y, Math.min(w, h) * 0.16, [255, 120, 24], 0.16);
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const step = () => {
      t += 1;
      // ease pointer toward last target for buttery motion
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;

      for (const o of orbs) {
        if (pointer.active) {
          const dx = pointer.x - o.x;
          const dy = pointer.y - o.y;
          const dist = Math.hypot(dx, dy) || 1;
          const pull = Math.min(0.05, 9000 / (dist * dist));
          o.vx += (dx / dist) * pull;
          o.vy += (dy / dist) * pull;
        }
        o.x += o.vx;
        o.y += o.vy;
        o.vx *= 0.97;
        o.vy *= 0.97;
        // keep a gentle baseline life so they never fully stop
        o.vx += (Math.random() - 0.5) * 0.02;
        o.vy += (Math.random() - 0.5) * 0.02;
        // soft bounds
        const m = o.r * 0.55;
        if (o.x < -m) { o.x = -m; o.vx = Math.abs(o.vx) * 0.6; }
        if (o.x > w + m) { o.x = w + m; o.vx = -Math.abs(o.vx) * 0.6; }
        if (o.y < -m) { o.y = -m; o.vy = Math.abs(o.vy) * 0.6; }
        if (o.y > h + m) { o.y = h + m; o.vy = -Math.abs(o.vy) * 0.6; }
      }
      render();
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.tx = x;
      pointer.ty = y;
      const inside = x >= 0 && y >= 0 && x <= w && y <= h;
      if (inside && !pointer.active) {
        // jump to position on first entry to avoid a swoop from 0,0
        pointer.x = x;
        pointer.y = y;
      }
      pointer.active = inside;
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

    const ro = new ResizeObserver(() => {
      resize();
      init();
      if (reduce) render();
    });
    ro.observe(parent);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) start();
        else stop();
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    const onVis = () => {
      if (document.hidden) stop();
      else start();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVis);

    if (!reduce) start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
    />
  );
}
