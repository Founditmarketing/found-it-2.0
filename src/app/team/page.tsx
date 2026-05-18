import { Metadata } from 'next';
import TeamPage from './client';

export const metadata: Metadata = {
    title: 'Our Team | The People Behind the Empire',
    description: "Meet the specialized team of strategists, engineers, and creatives building the Generative Engine Optimization (GEO) infrastructure.",
};

export default function Page() {
    return <TeamPage />;
}
