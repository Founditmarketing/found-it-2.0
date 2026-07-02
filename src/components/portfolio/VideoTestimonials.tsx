'use client';

import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

/* Filmed client testimonials — compressed 720p copies in public/videos/.
   Names match the footage exactly.
   preload="none" + poster means zero video bytes load before a click. */
const testimonials = [
  {
    id: 'blake-knoll',
    title: 'Blake Knoll',
    src: '/videos/blake-knoll-testimonial.mp4',
    poster: '/videos/blake-knoll-testimonial-poster.jpg',
  },
  {
    id: 'byron',
    title: 'Byron',
    src: '/videos/byron-testimonial.mp4',
    poster: '/videos/byron-testimonial-poster.jpg',
  },
  {
    id: 'walls-tree-service',
    title: 'Walls Tree Service',
    src: '/videos/walls-tree-service-testimonial.mp4',
    poster: '/videos/walls-tree-service-testimonial-poster.jpg',
  },
  {
    id: 'lecaze',
    title: 'Lecaze',
    src: '/videos/lecaze-testimonial.mp4',
    poster: '/videos/lecaze-testimonial-poster.jpg',
  },
];

/**
 * Click-to-play video testimonials with preload="none" and a poster
 * image so the page ships no video bytes until a visitor presses play.
 */
export function VideoTestimonials() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    if (playingIndex !== null && playingIndex !== index) {
      videoRefs.current[playingIndex]?.pause();
    }
    setPlayingIndex(index);
    videoRefs.current[index]?.play();
  };

  return (
    <section aria-label="Client video testimonials" className="mb-16">
      <div className="mb-8">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">On Camera</p>
        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-4">
          Hear It From{' '}
          <span className="text-primary">The Clients.</span>
        </h2>
        <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
          No scripts, no actors. Real business owners on camera, in their own words.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((video, index) => (
          <div
            key={video.id}
            className="group relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-border/20 hover:border-primary/40 transition-colors duration-300"
          >
            <video
              ref={(el) => { videoRefs.current[index] = el; }}
              src={video.src}
              poster={video.poster}
              className="w-full h-full object-cover"
              controls={playingIndex === index}
              onPlay={() => handlePlay(index)}
              playsInline
              preload="none"
            >
              Your browser does not support the video tag.
            </video>

            {playingIndex !== index && (
              <button
                type="button"
                aria-label={`Play testimonial from ${video.title}`}
                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors cursor-pointer w-full"
                onClick={() => handlePlay(index)}
              >
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-current ml-1" aria-hidden="true" />
                </span>
                <span className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-left">
                  <span className="block text-white font-bold text-lg md:text-xl">{video.title}</span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
