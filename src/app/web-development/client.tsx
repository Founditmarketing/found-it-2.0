'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowRight, Mouse } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { TextScramble } from '@/components/ui/TextScramble';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// 11 Banger Projects!
const projects = [
  {
    id: 2,
    client: 'Matteo Perin',
    category: 'Apparel',
    color: 'from-emerald-500/20 to-teal-500/20',
    url: 'https://www.matteoperin.com',
    image: '/images/projects/matteoperin.png'
  },
  {
    id: 12,
    client: 'Insight',
    category: 'Business',
    color: 'from-sky-500/20 to-indigo-500/20',
    url: 'https://new-insight.vercel.app/',
    image: '/images/projects/new-insight.png'
  },
  {
    id: 7,
    client: 'Elite Seamless',
    category: 'Contracting',
    color: 'from-yellow-500/20 to-lime-500/20',
    url: 'https://elite-seamless.vercel.app/',
    image: '/images/projects/elite-seamless-v2.png'
  },
  {
    id: 10,
    client: 'Last Wild River',
    category: 'Conservation',
    color: 'from-orange-500/20 to-amber-500/20',
    url: 'https://last-wild-river.vercel.app/',
    image: '/images/projects/last-wild-river.png'
  },
  {
    id: 6,
    client: 'Work Truck One',
    category: 'Automotive',
    color: 'from-fuchsia-500/20 to-pink-500/20',
    url: 'https://work-truck-one.vercel.app/',
    image: '/images/projects/work-truck-one.png'
  },
  {
    id: 5,
    client: 'Southern Longview Auto',
    category: 'Automotive',
    color: 'from-cyan-500/20 to-blue-500/20',
    url: 'https://southern-longview-auto.vercel.app/',
    image: '/images/projects/southern-longview-auto-v2.png'
  },
  {
    id: 4,
    client: 'Pop-A-Lock',
    category: 'Services',
    color: 'from-amber-500/20 to-red-500/20',
    url: 'https://pop-a-lock.vercel.app/',
    image: '/images/projects/pop-a-lock-v2.png'
  },
  {
    id: 1,
    client: 'Cave Wave Car Wash',
    category: 'Car Wash',
    color: 'from-blue-500/20 to-purple-500/20',
    url: 'https://www.cavewavecarwash.com',
    image: '/images/projects/cavewavecarwash.png'
  },
  {
    id: 3,
    client: 'Weiss Goldring',
    category: 'Apparel',
    color: 'from-rose-500/20 to-orange-500/20',
    url: 'https://www.weissgoldring.com',
    image: '/images/projects/weissgoldring.png'
  },
  {
    id: 8,
    client: 'DP Contractors',
    category: 'HVAC',
    color: 'from-indigo-500/20 to-violet-500/20',
    url: 'https://dp-contractors.vercel.app/',
    image: '/images/projects/dp-contractors-v2.png'
  },
  {
    id: 9,
    client: 'Status',
    category: 'HVAC',
    color: 'from-green-500/20 to-emerald-500/20',
    url: 'https://status-4593.vercel.app/',
    image: '/images/projects/status-4593.png'
  },
  {
    id: 11,
    client: 'Griffen',
    category: 'Clinic',
    color: 'from-teal-500/20 to-cyan-500/20',
    url: 'https://griffen.vercel.app/',
    image: '/images/projects/griffen.png'
  }
];

function ProjectSlide({ 
    project, 
    index, 
    scrollYProgress, 
    totalProjects,
    plateau
}: { 
    project: any; 
    index: number; 
    scrollYProgress: MotionValue<number>;
    totalProjects: number;
    plateau: number;
}) {
    // Determine the ideal progress milestone for this specific slide
    const targetProgress = index / (totalProjects - 1);
    const range = 1 / (totalProjects - 1);

    // 3D Spiral Effects! As it comes into view, it spins, rises, and scales up
    // We utilize the exact plateau to LOCK the transformation while the slide is centered.
    const rotateYOffset = useTransform(
        scrollYProgress,
        [targetProgress - range, targetProgress - plateau, targetProgress + plateau, targetProgress + range],
        [50, 0, 0, -50]
    );

    const scaleOffset = useTransform(
        scrollYProgress,
        [targetProgress - range, targetProgress - plateau, targetProgress + plateau, targetProgress + range],
        [0.6, 1, 1, 0.6]
    );

    const opacityOffset = useTransform(
        scrollYProgress,
        [
            targetProgress - range * 1.5, 
            targetProgress - range, 
            targetProgress - plateau, 
            targetProgress + plateau, 
            targetProgress + range, 
            targetProgress + range * 1.5
        ],
        [0, 0.2, 1, 1, 0.2, 0]
    );

    const rotateZOffset = useTransform(
        scrollYProgress,
        [targetProgress - range, targetProgress - plateau, targetProgress + plateau, targetProgress + range],
        [5, 0, 0, -5]
    );
    
    // Offset each website as we scroll down to give it that "spiral down" motion
    const yOffset = useTransform(
        scrollYProgress,
        [targetProgress - range, targetProgress - plateau, targetProgress + plateau, targetProgress + range],
        [400, 0, 0, -400]
    );

    return (
        <div className="h-[100dvh] w-screen flex items-center justify-center p-6 lg:p-24 relative overflow-hidden shrink-0 perspective-[2500px]">
          <motion.div 
            style={{
                rotateY: rotateYOffset,
                rotateZ: rotateZOffset,
                scale: scaleOffset,
                opacity: opacityOffset,
                y: yOffset,
                transformStyle: 'preserve-3d',
                willChange: 'transform'
            }}
            className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-24 items-center content-center relative z-10 h-full origin-center"
          >
            {/* Background Ambient Glow locked to the card - Simplified for mobile rendering performance */}
            <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] blur-[80px] lg:blur-[150px] opacity-[0.10] lg:opacity-[0.15] pointer-events-none rounded-full bg-gradient-to-br -z-10 transform-gpu", project.color)} />
            
            {/* Left: Scattered Project Info (OUTSIDE the window) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8 order-2 lg:order-1 relative z-20">
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm lg:text-base tracking-widest uppercase text-primary/60 font-semibold">
                  {project.category}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] font-black italic tracking-tighter text-foreground drop-shadow-2xl leading-[0.85] uppercase selection:bg-primary/30 relative z-30 lg:-mr-[150px] xl:-mr-[250px] pointer-events-none">
                {project.client}
              </h2>
              
              <div className="pt-4 lg:pt-6">
                <Button
                  asChild
                  className="bg-white/10 text-white hover:bg-primary font-black h-12 lg:h-14 px-6 lg:px-8 uppercase italic tracking-widest text-lg lg:text-xl rounded-full shadow-2xl backdrop-blur-xl border border-white/20 hover:border-primary transition-all duration-300 pointer-events-auto"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 cursor-none">
                    Launch Site
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
              
              {/* Enormous Watermark Number */}
              <div className="absolute -left-4 lg:-left-24 top-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] lg:text-[25rem] xl:text-[30rem] font-black italic text-foreground/[0.03] -z-10 pointer-events-none select-none drop-shadow-sm">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>

            {/* Right: The Dedicated Browser Window Mockup */}
            {/* WIDER ASPECT RATIO applied here (aspect-[16/10] and lg:col-span-8) */}
            <div className="lg:col-span-8 w-full aspect-[16/10] max-h-[60vh] lg:max-h-[75vh] relative order-1 lg:order-2 group perspective-[2000px]">
                
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-none group-hover:scale-[1.02] transition-transform duration-700 ease-liquid">
                    
                    {/* Inner and Outer Glows */}
                    <div className={cn("absolute -inset-10 bg-gradient-to-tr opacity-20 blur-2xl lg:opacity-30 lg:blur-3xl group-hover:opacity-60 transition-opacity duration-1000 transform-gpu", project.color)} />
                    
                    {/* Browser Mockup Glass Frame */}
                    <div className="relative w-full h-full rounded-xl lg:rounded-[2rem] border-[1px] border-white/20 bg-background/50 backdrop-blur-lg lg:backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] lg:shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transform-gpu">
                        
                        {/* Safari Chrome Header */}
                        <div className="h-8 lg:h-14 w-full bg-white/5 border-b border-white/10 flex items-center px-4 lg:px-6 gap-2 shrink-0 backdrop-blur-md">
                            <div className="flex gap-1.5 lg:gap-2.5">
                                <div className="w-2 h-2 lg:w-3.5 lg:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-[0_0_10px_rgba(255,95,86,0.4)]" />
                                <div className="w-2 h-2 lg:w-3.5 lg:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-[0_0_10px_rgba(255,189,46,0.4)]" />
                                <div className="w-2 h-2 lg:w-3.5 lg:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-[0_0_10px_rgba(39,201,63,0.4)]" />
                            </div>
                        </div>
                        
                        {/* Image Container */}
                        <div className="relative w-full flex-grow overflow-hidden bg-black">
                            <Image 
                                src={project.image} 
                                alt={project.client} 
                                fill 
                                priority={index < 3}
                                className="object-cover object-top opacity-100 group-hover:scale-[1.03] transition-all duration-700 pointer-events-none" 
                            />
                        </div>

                    </div>
                </a>
            </div>

          </motion.div>
        </div>
    );
}

export default function WebDevelopmentPage() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const total = projects.length;
  const range = 1 / (total - 1);
  const plateau = range * 0.15; // 15% lock duration

  // Construct plateaus for horizontal scroll so it cleanly STOPS scrolling per slide
  const xInput: number[] = [];
  const xOutput: string[] = [];

  for (let i = 0; i < total; i++) {
    const target = i * range;
    if (i === 0) {
      xInput.push(target, target + plateau);
      xOutput.push(`0vw`, `0vw`);
    } else if (i === total - 1) {
      xInput.push(target - plateau, target);
      xOutput.push(`-${100 * i}vw`, `-${100 * i}vw`);
    } else {
      xInput.push(target - plateau, target + plateau);
      xOutput.push(`-${100 * i}vw`, `-${100 * i}vw`);
    }
  }

  // Transforms overall scroll [0..1] into a horizontal shift with calculated plateaus
  const x = useTransform(scrollYProgress, xInput, xOutput);

  return (
    // FIX: Removed `overflow-hidden` so sticky positioning works across browsers
    <main className="bg-transparent text-foreground relative">
      
      {/* Intro Header Section */}
      <section className="py-32 lg:py-48 max-w-[1440px] mx-auto px-6 relative z-10 min-h-[100dvh] flex flex-col justify-center">
        <div className="lg:grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-12">
            {/* Using vw on mobile ensures perfectly bounded massive text without ever wrapping onto a third line */}
            <h1 className="text-[10vw] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-black italic tracking-tighter leading-[0.85] uppercase mb-6 md:mb-8 text-foreground">
              <span className="whitespace-nowrap block">
                <TextScramble text="Engineered to" delay={200} />
              </span>
              <span className="text-primary italic whitespace-nowrap block">
                <TextScramble text="Perform & Pop." delay={800} />
              </span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl text-muted-foreground max-w-5xl border-l-4 md:border-l-[12px] border-primary pl-6 md:pl-10 font-medium italic mb-12 md:mb-16 leading-relaxed">
              11 of our most recent digital masterpieces. We don't build generic websites; we architect high-converting digital empires, seamlessly supercharged by AI.
            </p>
            <div className="flex items-center gap-3 md:gap-4 text-primary animate-pulse ml-6 md:ml-10">
                <Mouse className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-lg lg:text-xl uppercase tracking-widest font-black italic">Scroll to Traverse</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Horizontal Scroll Section - STICKY FIXED */}
      <section ref={targetRef} className="relative h-[1200vh]"> {/* 100vh per project (12 total) */}
        <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
          <motion.div style={{ x }} className="flex h-full">
            {projects.map((project, index) => (
                <ProjectSlide 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    scrollYProgress={scrollYProgress} 
                    totalProjects={projects.length} 
                    plateau={plateau}
                />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-32 lg:py-64 relative z-10 border-t border-border/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="bg-card/40 backdrop-blur-3xl border border-border/30 p-16 lg:p-32 rounded-[6rem] text-center shadow-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-oversized mb-12 drop-shadow-xl">Build Your Empire.</h2>
                    <p className="text-2xl lg:text-4xl text-muted-foreground font-medium italic mb-20 leading-relaxed">
                        We engineer sites that outrank, outpace, and outconvert your competition. 
                        Let's create something exceptional together.
                    </p>
                    <Button
                    asChild
                    className="bg-primary text-primary-foreground font-black h-24 px-16 uppercase italic tracking-tighter text-3xl rounded-[2rem] shadow-2xl shadow-primary/30 hover:scale-[1.05] transition-all magnetic cursor-none"
                    >
                    <Link href="/contact" className="flex items-center gap-4">
                        Start Your Project
                        <ArrowRight className="w-10 h-10" />
                    </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}


