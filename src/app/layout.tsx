import type { Metadata } from 'next';
import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { LayoutShell } from '@/components/LayoutShell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://founditmarketing.com'),
  title: {
    default: 'Found It Marketing | Web Design & Digital Marketing Agency',
    template: '%s | Found It Marketing'
  },
  description: "Custom web design & digital marketing agency powered by FoundIt OS™. From startups to multi-location empires — AI-powered GEO, tiered website packages, and full-funnel marketing across 48 states.",
  keywords: [
    'Digital Marketing Agency',
    'Custom Web Design',
    'Generative Engine Optimization',
    'GEO Optimization',
    'AI Marketing Agency',
    'SEO Agency',
    'PPC Management',
    'Web Design Alexandria LA',
    'Medical Marketing',
    'Contractor Marketing',
    'Dealership Marketing',
    'Real Estate Marketing',
    'Found It Marketing',
    'FoundIt OS',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://founditmarketing.com',
    siteName: 'Found It Marketing',
    title: 'Found It Marketing | Web Design & Digital Marketing Agency',
    description: "Custom web design & digital marketing powered by FoundIt OS™. AI-powered GEO, tiered packages, and full-funnel marketing for service businesses nationwide.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Found It Marketing — Web Design & Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Found It Marketing | Web Design & Digital Marketing Agency',
    description: "Custom web design & digital marketing powered by FoundIt OS™. AI-powered GEO, tiered packages, and full-funnel marketing for service businesses nationwide.",
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
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';

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
        <MetaPixel />
        <GoogleTag />
        <LocalBusinessSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
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
