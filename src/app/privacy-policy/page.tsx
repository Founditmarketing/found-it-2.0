import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy and SMS Communications Consent for Found It Marketing LLC.',
    alternates: { canonical: '/privacy-policy' },
    openGraph: {
        title: 'Privacy Policy',
        description: 'Privacy Policy and SMS Communications Consent for Found It Marketing LLC.',
        type: 'website',
        url: 'https://www.founditsoftware.com/privacy-policy',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Privacy Policy</h1>
                    <p className="text-muted-foreground">Effective Date: April 14, 2026</p>
                    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                        Found It Marketing LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information, including compliance with SMS communication regulations.
                    </p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">1. Information We Collect</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may collect personal information including, but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Business information (if applicable)</li>
                            <li>Any information you voluntarily submit through our website forms, funnels, or communications</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">2. How We Use Your Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to inquiries</li>
                            <li>Provide customer support</li>
                            <li>Send service-related communications</li>
                            <li>Deliver requested services</li>
                            <li>Send marketing communications (only if consent is provided)</li>
                            <li>Improve our services and user experience</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">3. SMS Communications & Consent</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>By providing your phone number and submitting a form on our website, you expressly consent to receive SMS messages from Found It Marketing LLC, which may include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Appointment reminders</li>
                            <li>Service updates</li>
                            <li>Customer support responses</li>
                            <li>Follow-ups regarding your inquiry</li>
                            <li>Marketing messages (if you have opted in)</li>
                        </ul>
                        <h3 className="text-xl font-bold text-foreground mt-4">Consent Details:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Consent is not a condition of purchase</li>
                            <li>Message frequency may vary</li>
                            <li>Message and data rates may apply</li>
                            <li>You can opt out at any time by replying STOP</li>
                            <li>For help, reply HELP or contact us directly</li>
                        </ul>
                        <p>We only send SMS messages to individuals who have provided clear and explicit consent through our forms or communication channels.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">4. No Sharing of SMS Data</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We do not sell, rent, or share your personal information, including phone numbers and SMS consent, with third parties for marketing purposes.</p>
                        <p>SMS opt-in data and consent will never be shared with any third parties.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">5. Data Sharing & Third Parties</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may share limited information with trusted service providers (such as CRM platforms, email providers, or payment processors) strictly for business operations.</p>
                        <p>These providers are contractually obligated to protect your information and may not use it for their own marketing purposes.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">6. Cookies and Tracking</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may use cookies, tracking pixels, and similar technologies (such as Google Analytics or advertising platforms) to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enhance user experience</li>
                            <li>Analyze traffic and performance</li>
                            <li>Improve marketing campaigns</li>
                        </ul>
                        <p>You can control cookie settings through your browser preferences.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">7. Data Security</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or misuse.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">8. Your Rights</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Opt out of SMS communications at any time by replying STOP</li>
                            <li>Request access to or deletion of your personal data (where applicable)</li>
                            <li>Withdraw consent for marketing communications</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6 border-t border-border pt-8">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">9. Contact Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <div className="font-semibold text-foreground">
                            <p>Found It Marketing LLC</p>
                            <p>Phone: (337) 525-9650</p>
                            <p>Email: <a href="mailto:trevor@founditmarketing.com" className="text-primary hover:underline">trevor@founditmarketing.com</a></p>
                            <p>Website: <a href="https://www.founditsoftware.com" className="text-primary hover:underline">https://www.founditsoftware.com</a></p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">10. Updates to This Policy</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
