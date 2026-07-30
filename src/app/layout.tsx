import type { Metadata } from 'next';
import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutShell } from '@/components/LayoutShell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://founditmarketing.com'),
  title: {
    default: 'Found It Marketing | Custom AI Software, Google Ads & Web Design | Alexandria, LA',
    template: '%s | Found It Marketing'
  },
  description: "Custom AI software that improves your life and saves you time — plus Google Ads, web design, SEO, and AI search optimization for local businesses. No contracts. You own everything. Based in Alexandria, LA.",
  keywords: [
    'custom AI software',
    'custom business operating system',
    'Found It OS',
    'custom software Alexandria LA',
    'Google Ads management',
    'web design Alexandria LA',
    'SEO agency Louisiana',
    'AI search optimization',
    'digital marketing agency',
    'local business marketing',
    'PPC management',
    'social media management',
    'medical marketing',
    'contractor marketing',
    'dealership marketing',
    'real estate marketing',
    'Found It Marketing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://founditmarketing.com',
    siteName: 'Found It Marketing',
    title: 'Found It Marketing | Custom AI Software, Google Ads & Web Design',
    description: "Custom AI software that improves your life and saves you time — plus Google Ads, web design, and AI search. No contracts. You own everything.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Found It Marketing — Custom AI Software, Google Ads & Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Found It Marketing | Custom AI Software, Google Ads & Web Design',
    description: "Custom AI software that improves your life and saves you time — plus Google Ads, web design, and AI search. No contracts. You own everything.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Alexandria',
    'geo.position': '31.2829;-92.4812',
    'ICBM': '31.2829, -92.4812',
  }
};

import { MetaPixel } from '@/components/analytics/MetaPixel';
import { GoogleTag } from '@/components/analytics/GoogleTag';
import { GoogleTagManager } from '@/components/analytics/GoogleTagManager';
import { LinkedInInsight } from '@/components/analytics/LinkedInInsight';
import { SiteSchema } from '@/components/seo/SiteSchema';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased overflow-x-hidden',
          inter.variable,
          outfit.variable
        )}
      >
        <GoogleTagManager />
        <MetaPixel />
        <GoogleTag />
        <LinkedInInsight />
        <SiteSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutShell>
            {children}
          </LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
