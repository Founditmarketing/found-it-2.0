import Image from 'next/image';

/* ─── The face on everything (Trevor, 8/19) ───
   Personal-brand law: Trevor is the BYLINE of the company, never the pitch.
   A founder signing his work reads as authority; a founder pitching himself
   at the top of an ad reads as trying hard (the 8/14 order that pulled the
   self-pitch video still stands — Cory's clip is the proof, Trevor is the
   author). So this is small, consistent, and everywhere: the photo, the
   name, one line of fact. Server-safe — no hooks. */

interface FounderBylineProps {
  size?: 'sm' | 'md' | 'lg';
  /** One line of fact under the name. Third person, no adjectives. */
  line?: string;
  align?: 'left' | 'center';
  className?: string;
}

const PX = { sm: 40, md: 56, lg: 96 } as const;

export function FounderByline({
  size = 'md',
  line = 'Founder. He’s the one who calls you back.',
  align = 'left',
  className = '',
}: FounderBylineProps) {
  const px = PX[size];
  return (
    <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} ${className}`}>
      <span
        className="relative shrink-0 rounded-full overflow-hidden border border-primary/30 bg-card/30"
        style={{ width: px, height: px }}
      >
        <Image
          src="/trevorruby-v2.jpg"
          alt="Trevor Ruby, founder of Found It Software"
          fill
          className="object-cover"
          sizes={`${px}px`}
        />
      </span>
      <span className="min-w-0 text-left">
        <span className={`block font-black text-foreground leading-tight ${size === 'lg' ? 'text-lg' : 'text-sm'}`}>
          Trevor Ruby
        </span>
        <span className={`block text-muted-foreground font-medium leading-snug ${size === 'lg' ? 'text-sm' : 'text-xs'}`}>
          {line}
        </span>
      </span>
    </div>
  );
}
