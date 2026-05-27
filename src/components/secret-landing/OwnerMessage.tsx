'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MessageSquareQuote } from 'lucide-react';

export function OwnerMessage() {
    return (
        <section className="py-24 bg-card/30 border-y border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="flex justify-center mb-8">
                            <MessageSquareQuote className="w-16 h-16 text-primary opacity-50" />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-center mb-12">
                            A Word from the Owner
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="prose prose-lg dark:prose-invert mx-auto text-lg md:text-xl leading-relaxed text-muted-foreground">
                            <p className="mb-6">
                                Look, I’ll be honest. If you’re looking for a "quick fix" or a "magic pill," this isn’t it.
                                We don’t sell hope; we build systems.
                            </p>
                            <p className="mb-6">
                                I built this agency because I was tired of seeing good businesses fail because of bad marketing.
                                Or worse, businesses getting ripped off by agencies that promise the moon and deliver a handful of dust.
                            </p>
                            <p className="mb-6">
                                Real growth is messy. It takes time. It takes money. And most importantly, it takes
                                <span className="text-foreground font-bold italic"> partnership</span>.
                                If we are treated like a vending machine where a dollar is put in and two dollars are expected out tomorrow,
                                we are not a good fit.
                            </p>
                            <p>
                                But if the goal is to build a digital empire—a system that works while the world sleeps—then
                                we might just be the partners needed.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="mt-12 text-center flex flex-col items-center">
                            <div className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl mb-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/30 hover:ring-4 hover:ring-primary/10">
                                <img
                                    src="/Trevorandfamily.jpg"
                                    alt="Trevor Ruby and Family"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font-black text-2xl uppercase italic tracking-tighter">Trevor Ruby</p>
                            <p className="text-primary font-bold tracking-widest text-sm uppercase">Founder, Found It Marketing</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
