'use client';

import { motion } from 'framer-motion';
import { Play, MapPin } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { useState } from 'react';
import { trackVideoPlay } from '@/lib/analytics';

const ease = [0.16, 1, 0.3, 1] as const;

interface FounderVideoProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  body: string;
  /** MP4 URL or a YouTube/Vimeo *embed* URL. Leave empty to show the placeholder. */
  videoSrc?: string;
  /** Poster/thumbnail image shown before playing. */
  poster?: string;
  /** Video aspect — 'landscape' (16:9) or 'portrait' (phone reel). */
  orientation?: 'landscape' | 'portrait';
  /** CSS aspect-ratio for portrait videos, e.g. '2 / 3' or '9 / 16'. */
  portraitRatio?: string;
  ctaText?: string;
  ctaHref?: string;
  founderName?: string;
  /** Poster caption after the name — keep it truthful to the actual clip length. */
  captionText?: string;
  /** Quiet secondary link under the CTA — e.g. the deep case-study artifact. */
  secondaryLink?: { label: string; href: string };
}

export function FounderVideo({
  eyebrow = 'Meet Your Local Team',
  heading,
  headingAccent,
  body,
  videoSrc,
  poster = '/team-member-1.jpeg',
  orientation = 'landscape',
  portraitRatio = '2 / 3',
  ctaText = 'Book Your Free In-Person AI Demo',
  ctaHref = '#lp-form',
  founderName = 'Trevor Ruby',
  captionText = 'Watch the 27-sec intro',
  secondaryLink,
}: FounderVideoProps) {
  const [playing, setPlaying] = useState(false);
  const isYouTubeOrVimeo = !!videoSrc && /youtube|vimeo/.test(videoSrc);
  const isPortrait = orientation === 'portrait';

  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ─── Video / placeholder ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: ease as any }}
            className={`relative w-full overflow-hidden rounded-[2rem] border border-border/20 shadow-2xl bg-card/20 ${
              isPortrait ? 'max-w-[340px] mx-auto' : 'aspect-video'
            }`}
            style={isPortrait ? { aspectRatio: portraitRatio } : undefined}
          >
            {playing && videoSrc ? (
              isYouTubeOrVimeo ? (
                <iframe
                  src={`${videoSrc}${videoSrc.includes('?') ? '&' : '?'}autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  title="Founder introduction video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video src={videoSrc} className="absolute inset-0 w-full h-full object-cover" controls autoPlay />
              )
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (!videoSrc) return;
                  trackVideoPlay(videoSrc);
                  setPlaying(true);
                }}
                className="group absolute inset-0 w-full h-full cursor-pointer"
                aria-label={videoSrc ? 'Play founder introduction video' : 'Founder video coming soon'}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={poster} alt={founderName} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Play button */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" aria-hidden="true" />
                  </span>
                </span>

                {/* Caption */}
                <span className="absolute bottom-5 left-5 right-5 flex items-center gap-2 text-left">
                  <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-bold text-white">
                    {founderName} · {videoSrc ? captionText : 'Video walkthrough coming soon'}
                  </span>
                </span>
              </button>
            )}
          </motion.div>

          {/* ─── Copy ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: ease as any }}
          >
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
              {eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-6">
              {heading}{' '}
              {headingAccent && <span className="text-primary">{headingAccent}</span>}
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
              {body}
            </p>
            <Link href={ctaHref} className="inline-block">
              <LiquidButton className="px-10 h-14 text-sm sm:text-base tracking-[0.05em] shadow-xl shadow-primary/20">
                {ctaText}
              </LiquidButton>
            </Link>
            {secondaryLink && (
              <p className="mt-4">
                <Link
                  href={secondaryLink.href}
                  className="text-sm font-bold text-white/60 hover:text-primary transition-colors"
                >
                  {secondaryLink.label} →
                </Link>
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
