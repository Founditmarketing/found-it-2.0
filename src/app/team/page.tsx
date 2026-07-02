import { Metadata } from 'next';
import TeamPage from './client';

export const metadata: Metadata = {
    title: 'Our Team | Real People, No Handoffs',
    description: 'Meet the Found It Marketing team — the senior strategists in Alexandria, Louisiana who run your ads, build your website, and pick up the phone when you call.',
};

export default function Page() {
    return <TeamPage />;
}
