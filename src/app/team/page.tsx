import { Metadata } from 'next';
import TeamPage from './client';

export const metadata: Metadata = {
    title: 'Our Team | Real People, No Handoffs',
    description: 'Meet the Found It Marketing team — the senior strategists in Alexandria, Louisiana who run your ads, build your website, and pick up the phone when you call.',
    alternates: { canonical: '/team' },
    openGraph: {
        title: 'Our Team | Real People, No Handoffs',
        description: 'Meet the Found It Marketing team — the senior strategists in Alexandria, Louisiana who run your ads, build your website, and pick up the phone when you call.',
        type: 'website',
        url: 'https://www.founditsoftware.com/team',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
    },
};

export default function Page() {
    return <TeamPage />;
}
