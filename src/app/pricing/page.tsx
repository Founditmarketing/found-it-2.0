import Script from 'next/script';
import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Found It Marketing',
  description: 'View our transparent pricing and marketing packages.',
};

export default function PricingPage() {
  return (
    <main className="pt-32 lg:pt-40 min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Hero */}
      <section className="pb-20 lg:pb-32 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <Tag className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em]">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-4">
              Pricing & Packages<span className="text-primary">.</span>
            </h1>
            <p className="text-primary text-xl lg:text-2xl font-bold italic mb-8">
              Find the right plan to elevate your digital empire.
            </p>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl font-medium border-l-8 border-primary pl-8">
              Whether you are just launching your business or looking to scale a multi-location enterprise, we offer clear, transparent pricing designed to maximize your ROI. Select your plan below to get started.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Widget Section */}
      <section className="py-24 lg:py-32">
        {/* Remove the Zoho "floating card" look that clashes with the dark site */}
        <style>{`
          #zf-widget-root-id-iovzp44nu {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
          }
        `}</style>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            {/* Zoho Pricing Widget Container */}
            <div 
              id="zf-widget-root-id-iovzp44nu" 
              data-pricing-table="true" 
              data-digest="2-909c6d12ec4b3af1f4878aa4b2762a1d1969e250db6bf56bbc3bf476eb563c89a788cb5a3b0b8326b737c2b253195bdfb2df1cb0269783dca262b6d698c356cf" 
              data-product_url="https://billing.zoho.com"
            ></div>
            
            {/* Zoho Pricing Widget Script */}
            <Script 
              src="https://js.zohostatic.com/books/zfwidgets/assets/js/zf-widget.js" 
              strategy="lazyOnload" 
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
