'use client';

import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Trevor Ruby',
    role: 'Founder',
    image: '/trevorruby.jpeg',
  },
  {
    name: 'Reese Roberts',
    role: 'Head of Search & Generative Optimization',
    image: '/reese-roberts.jpeg',
  },
  {
    name: 'Thomas Dombrowski',
    role: 'Director of Client Relations',
    image: '/thomas-dombrowski.jpeg',
    objectPosition: 'center 10%',
  },
  {
    name: 'Jason Albright',
    role: 'Director of Web Development',
    image: '/jason-albright.jpeg',
  },
  {
    name: 'Bethany Hernandez',
    role: 'Head of Google Ads',
    image: '/bethany-hernandez.jpeg',
  },
  {
    name: 'Megan Sanguinetti',
    role: 'Head of Social Media',
    image: '/megan-sanguinetti.jpeg',
  }
];

export default function TeamPage() {
  return (
    <main className="bg-transparent text-foreground py-24 lg:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-oversized leading-[0.85] mb-8">
              <TextScramble text="The Architects." delay={200} /><br />
              <span className="text-primary">
                <TextScramble text="Behind the Empire." delay={800} />
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-4xl border-l-[12px] border-primary pl-10 font-medium italic">
              Algorithms don't build empires alone. Meet the specialized minds who engineer the data, train the models, and drive the revenue. 
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="text-right">
              <span className="text-primary font-mono text-xl font-black uppercase tracking-[0.3em] block mb-4">
                TEAM SIZE
              </span>
              <p className="text-muted-foreground text-lg uppercase tracking-widest font-bold">
                20+ Specialists
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-card/30 backdrop-blur-xl border border-border/50 hover:border-primary/50 flex flex-col p-8 lg:p-10 rounded-[3rem] shadow-2xl relative group overflow-hidden transition-colors"
            >
              <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] bg-muted/30 flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: member.objectPosition || 'center' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <User className="w-1/3 h-1/3 text-muted-foreground/30 transition-transform duration-700 group-hover:scale-110" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-end text-center lg:text-left">
                <p className="text-sm text-primary font-mono font-black mb-2 tracking-[0.2em] uppercase opacity-80">
                  {member.role}
                </p>
                <h3 className="text-2xl lg:text-3xl font-black text-foreground uppercase italic tracking-tight">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 relative">
          <div className="bg-card border border-border/50 p-12 lg:p-24 rounded-[4rem] text-center max-w-5xl mx-auto overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-8 max-w-2xl mx-auto leading-tight">
              Join the Vanguard of <span className="text-primary">Search.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-medium">
              We're always looking for elite talent to join our Alexandria headquarters. If you speak data fluently, we want to talk.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-black uppercase italic tracking-[0.2em] px-12 py-6 rounded-full hover:scale-105 transition-transform"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
