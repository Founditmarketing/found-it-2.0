import Link from 'next/link';

export type OsRailItem = {
  src: string;
  alt: string;
  title: string;
  kind: string;
  /** Phone captures render in a bezel; landscape shots get browser chrome. */
  portrait?: boolean;
};

/* A drifting rail of OS captures — the homepage FLOOR's little sibling,
   reusable on any page. Pure CSS motion (rail-* classes in globals.css):
   the track holds its content twice and translates -50% for a seamless
   loop; hover pauses; reduced motion falls back to manual scroll. Short
   sets repeat until the half-track outruns any viewport. */
export function OsRail({
  items,
  dir = 'left',
  href = '/foundit-os',
  size = 'md',
}: {
  items: OsRailItem[];
  dir?: 'left' | 'right';
  href?: string;
  size?: 'sm' | 'md';
}) {
  const reps = items.length >= 6 ? 1 : Math.ceil(6 / items.length);
  const half: OsRailItem[] = [];
  for (let r = 0; r < reps; r++) half.push(...items);
  const track = [...half, ...half];
  const deskH = size === 'sm' ? 'h-[160px] sm:h-[200px] lg:h-[240px]' : 'h-[200px] sm:h-[240px] lg:h-[300px]';
  const phoneH = size === 'sm' ? 'h-[190px] sm:h-[230px] lg:h-[280px]' : 'h-[240px] sm:h-[280px] lg:h-[320px]';

  return (
    <div className="rail-row">
      <div
        className={`rail-track ${dir === 'left' ? 'rail-track--left' : 'rail-track--right'} items-end gap-4 lg:gap-5 pr-4 lg:pr-5`}
      >
        {track.map((s, i) => {
          const dup = i >= half.length;
          return (
            <Link
              key={`${s.src}-${i}`}
              href={href}
              aria-hidden={dup || undefined}
              tabIndex={dup ? -1 : undefined}
              className="group block shrink-0"
            >
              <div
                className={`overflow-hidden border border-border/25 bg-card/20 shadow-2xl shadow-black/50 transition-colors duration-500 group-hover:border-primary/50 ${
                  s.portrait ? 'rounded-[1.4rem]' : 'rounded-xl'
                }`}
              >
                {!s.portrait && (
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-black/60 border-b border-border/15">
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                  </div>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element -- rail frames
                    render twice for the CSS loop; plain files cache once each */}
                <img
                  src={s.src}
                  alt={dup ? '' : s.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-auto max-w-none ${s.portrait ? phoneH : deskH}`}
                />
                <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/60 border-t border-border/15">
                  <span className="chip">{s.title}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-faint whitespace-nowrap">{s.kind}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
