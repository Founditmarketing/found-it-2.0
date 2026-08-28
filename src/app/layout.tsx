import type { Metadata } from 'next';
import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutShell } from '@/components/LayoutShell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.founditsoftware.com'),
  // Brand flip 8/18 (audit full-send): the public identity is Found It
  // Software everywhere a customer reads. The LLC's legal name is unchanged.
  title: {
    default: 'Found It Software | Custom Software That Simplifies Your Business and Makes You Money',
    template: '%s | Found It Software'
  },
  description: "Owned software — the opposite of SaaS. One custom system that does the typing, chases what you're owed, and answers your phone. You own it outright, the code and the data. One published price. Alexandria, LA.",
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
    url: 'https://www.founditsoftware.com',
    siteName: 'Found It Software',
    title: 'Found It Software | Simpler Business. More Money. You Own It.',
    description: "One custom system that does the typing, chases what you're owed, and answers your phone. Simpler life. More money. You own it. One published price.",
    images: [
      {
        url: '/og-image-v3.png',
        width: 1200,
        height: 630,
        alt: 'Found It Software, custom systems local businesses own outright',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Found It Software | Simpler Business. More Money. You Own It.',
    description: "One custom system that does the typing, chases what you're owed, and answers your phone. Simpler life. More money. You own it. One published price.",
    images: ['/og-image-v3.png'],
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
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
