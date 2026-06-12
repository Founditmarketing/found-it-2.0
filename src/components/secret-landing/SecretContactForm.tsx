'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { submitSecretForm } from '@/app/actions/forms';
import { useToast } from '@/hooks/use-toast';
import { motion, Variants } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: liquidEasing as any,
            duration: 1.0,
        },
    },
};

export function SecretContactForm() {
    const { toast } = useToast();
    const [urgency, setUrgency] = useState([5]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        formData.append('urgency', urgency[0].toString());

        try {
            const result = await submitSecretForm(formData);

            if (result.success) {
                setSubmitted(true);
                toast({
                    title: "Application Received",
                    description: "We are reviewing your submission. Expect a response shortly.",
                });
            } else {
                toast({
                    title: "Submission Failed",
                    description: result.error || "An unexpected error occurred.",
                    variant: "destructive",
                });
            }
        } catch (err) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="apply">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                            Application for <span className="text-primary">Partnership</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Complete the form below to see if you qualify for our Comprehensive Marketing Systems.
                        </p>
                    </div>
                </ScrollReveal>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-card border border-border/50 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                    {submitted ? (
                        <div className="text-center py-20 animate-in fade-in-50 duration-1000 slide-in-from-bottom-10">
                            <CheckCircle2 className="w-24 h-24 text-primary mx-auto mb-8" />
                            <h2 className="text-4xl font-black text-foreground italic uppercase tracking-tighter mb-4">Application Sent.</h2>
                            <p className="text-xl text-muted-foreground mb-12 max-w-sm mx-auto font-medium">
                                We check every application manually. If you're a fit, we'll reach out within 24 hours.
                            </p>
                            <Button
                                variant="outline"
                                className="rounded-full px-12 h-16 text-lg font-black border-primary text-primary hover:bg-primary/10 transition-all uppercase italic tracking-tighter"
                                onClick={() => { setSubmitted(false); }}
                            >
                                Submit Another Application
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            {/* Honeypot — invisible to humans, bots auto-fill it and get silently dropped */}
                            <input
                                type="text"
                                name="hp"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="absolute -left-[9999px] top-0 h-px w-px opacity-0"
                            />
                            <motion.div variants={itemVariants} className="space-y-4">
                                <Label className="text-foreground font-black uppercase tracking-[0.2em] text-xs opacity-70">
                                    Business Information
                                </Label>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input name="businessName" placeholder="Business Name" required className="bg-background/50 h-14 rounded-xl" />
                                    <Input name="industry" placeholder="Industry (e.g. HVAC, Dentistry)" required className="bg-background/50 h-14 rounded-xl" />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-4">
                                <Label className="text-foreground font-black uppercase tracking-[0.2em] text-xs opacity-70">
                                    Contact Details
                                </Label>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input name="name" placeholder="Contact Name" required className="bg-background/50 h-14 rounded-xl" />
                                    <Input name="email" type="email" placeholder="Best Email Address" required className="bg-background/50 h-14 rounded-xl" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input name="phone" type="tel" placeholder="Best Phone Number" required className="bg-background/50 h-14 rounded-xl" />
                                    <Input name="state" placeholder="State" required className="bg-background/50 h-14 rounded-xl" />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-4">
                                <Label className="text-foreground font-black uppercase tracking-[0.2em] text-xs opacity-70">
                                    Metric Data
                                </Label>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="jobsPerMonth" className="text-sm font-medium">Jobs Completed Per Month</Label>
                                        <Input id="jobsPerMonth" name="jobsPerMonth" type="number" placeholder="e.g. 20" required className="bg-background/50 h-14 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="averageJobWorth" className="text-sm font-medium">Average Job Worth ($)</Label>
                                        <Input id="averageJobWorth" name="averageJobWorth" type="number" placeholder="e.g. 5000" required className="bg-background/50 h-14 rounded-xl" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-6 pt-4">
                                <div className="flex justify-between items-center">
                                    <Label className="text-foreground font-black uppercase tracking-[0.2em] text-xs opacity-70">
                                        Problem Urgency (1-10)
                                    </Label>
                                    <span className="font-mono text-2xl font-bold text-primary">{urgency[0]}</span>
                                </div>
                                <div className="px-2">
                                    <Slider
                                        defaultValue={[5]}
                                        max={10}
                                        min={1}
                                        step={1}
                                        value={urgency}
                                        onValueChange={setUrgency}
                                        className="py-4"
                                    />
                                    <p className="text-sm text-muted-foreground mt-2 text-center italic">
                                        How badly do you need this problem fixed?
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="pt-6">
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-primary-foreground font-black h-20 text-xl uppercase italic tracking-tighter rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                            <span>Processing...</span>
                                        </div>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </Button>
                                <p className="text-center text-xs text-muted-foreground mt-4">
                                    By submitting this form, you agree to our <Link href="/terms-of-service" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>, and consent to receive SMS communications. Message frequency varies. Reply STOP to opt out.
                                </p>
                            </motion.div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
