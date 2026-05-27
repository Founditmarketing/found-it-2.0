'use client';

import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion';

const floatCard = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

const testimonials = [
  {
    id: 1,
    name: 'Byron',
    title: 'National Equipment Dealer',
    quote: "We started out as a small group. We never intended to grow as big as we have. It’s been 9 years plus with Found It, and they turned us into a major volume dealer throughout the United States simply by using their service.",
  },
  {
    id: 2,
    name: 'Tyler Griffin',
    title: 'Google Review - 5 Stars',
    quote: "I’ve worked with marketing agencies before, and Found It Marketing stands out in every way. They don't just run ads or “do SEO” — they actually take the time to understand your business, your goals, and what will move the needle. Communication is clear, consistent, and honest. No fluff, no excuses, just real strategy and execution.",
  },
  {
    id: 3,
    name: 'Smith Lake Rentals and Sales',
    title: 'Google Review - 5 Stars',
    quote: "I almost never leave reviews, but after only a week of working with this company, they absolutely earned a five-star review. I am so glad to have this team managing my marketing. They are extremely responsive and use a great app that makes collaboration and communication seamless.",
  },
  {
    id: 4,
    name: 'A C',
    title: 'Google Review - 5 Stars',
    quote: "Trevor convinced me to sign up for his SEO company when I didnt know what SEO was and he put my business at the top of Google. He did what he said he would do and now I call him my friend. Great company.",
  },
  {
    id: 5,
    name: 'Emanuele Romiti',
    title: 'Google Review - 5 Stars',
    quote: "Trevor is fast and efficient, he is available any time of the day and very interested on the well performing marketing actions he takes for the business.",
  },
  {
    id: 6,
    name: 'Cory Chandler',
    title: 'Google Review - 5 Stars',
    quote: "Been working with them for years. Anytime we need something, they are right on it.",
  }
];


export function TestimonialsSection() {

  return (
    <section className="bg-background py-24 lg:py-32 relative z-40 lg:-mt-40">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-left mb-24 max-w-4xl">
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
            REAL RESULTS
          </span>
          <h2 className="text-foreground text-oversized">
            Trusted by Leaders.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about their success with our GEO strategies.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 h-full relative"
                >
                  <motion.div
                    animate={floatCard}
                    className="bg-card rounded-[3rem] border border-border/50 flex flex-col overflow-hidden group h-full p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-primary/50 relative z-10 backdrop-blur-sm"
                  >
                    {/* Subtle Glow on Hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />

                    <div className="flex items-center mb-6 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic text-lg mb-6 flex-grow relative z-10">"{testimonial.quote}"</p>

                    <div className="relative z-10">
                      <p className="font-bold text-card-foreground">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.title}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground bg-secondary hover:bg-muted border -left-4" />
          <CarouselNext className="text-foreground bg-secondary hover:bg-muted border -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
