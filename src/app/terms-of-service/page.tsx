import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Found It Marketing LLC.',
    alternates: { canonical: '/terms-of-service' },
    openGraph: {
        title: 'Terms of Service',
        description: 'Terms of Service for Found It Marketing LLC.',
        type: 'website',
        url: 'https://www.founditsoftware.com/terms-of-service',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
    },
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">📄 Terms of Service</h1>
                    <p className="text-muted-foreground">Effective Date: July 30, 2026</p>
                    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                        Welcome to Found It Marketing LLC ("Company," "we," "our," or "us"). By accessing or using our website, services, or communication channels (including SMS), you agree to the following Terms of Service.
                    </p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">1. Use of Services</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>By using our website or services, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate and truthful information</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Not misuse, disrupt, or attempt to gain unauthorized access to our systems</li>
                        </ul>
                        <p>We reserve the right to refuse service to anyone at our discretion.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">2. Services Provided</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>Found It Marketing LLC, operating as Found It Software, provides custom software services, which may include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Custom AI software and business operating systems (Found It OS)</li>
                            <li>Custom web and mobile app development</li>
                            <li>Website design and development</li>
                            <li>AI search optimization</li>
                            <li>Continued service of existing marketing engagements</li>
                        </ul>
                        <p>The scope of services will be defined in individual agreements, proposals, or invoices.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">3. Payments & Billing</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payment terms will be outlined in your agreement or invoice</li>
                            <li>Late payments may result in service interruption</li>
                            <li>Fees are non-refundable</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">4. Intellectual Property</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>For custom software and development deliverables — including Found It OS, websites, and apps — the client owns the code and the data. If the engagement ends, the system stays with the client.</p>
                        <p>Qualifying Found It OS engagements are governed by a signed agreement incorporating the Owned Software Standard published at <a href="/owned-software" className="underline decoration-primary/40 underline-offset-4">founditsoftware.com/owned-software</a>: the complete repository, the production data and backups, deployment control, credentials, documentation, modification rights, and a disclosure of third-party dependencies. Where this page and a signed agreement differ, the signed agreement controls.</p>
                        <p>Found It Marketing LLC retains ownership of its own name, branding, and pre-existing internal tools and processes.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">5. SMS Communications & Consent</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>By submitting your phone number through our website or forms, you consent to receive SMS messages from Found It Marketing LLC related to your inquiry or service request.</p>
                        <p>These messages may include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Appointment reminders</li>
                            <li>Service updates</li>
                            <li>Customer support messages</li>
                            <li>Follow-ups regarding inquiries</li>
                        </ul>
                        <p>Marketing messages will only be sent if you provide separate, explicit consent.</p>
                        <h3 className="text-xl font-bold text-foreground mt-4">SMS Terms:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Message frequency may vary</li>
                            <li>Message and data rates may apply</li>
                            <li>Consent is not a condition of purchase</li>
                            <li>You can opt out at any time by replying STOP</li>
                            <li>For assistance, reply HELP</li>
                        </ul>
                        <p>We only send messages to users who have provided clear and explicit consent.</p>
                        <p>Carriers are not liable for delayed or undelivered messages.</p>
                        <p>You must be at least 18 years old or have permission from a parent or guardian to receive SMS communications.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">6. No Sharing of SMS Data</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We do not sell, rent, or share your phone number or SMS consent with third parties for marketing purposes.</p>
                        <p>SMS opt-in data will not be shared under any circumstances.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">7. Limitation of Liability</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>Found It Marketing LLC is not liable for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Any indirect, incidental, or consequential damages</li>
                            <li>Loss of revenue, leads, or business opportunities</li>
                            <li>Results from marketing campaigns, as outcomes may vary</li>
                        </ul>
                        <p>All services are provided "as is" without guarantees of specific results.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">8. Indemnification</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>You agree to indemnify and hold harmless Found It Marketing LLC from any claims, damages, or expenses arising from your use of our services or violation of these Terms.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">9. Termination</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        {/* The site sells on "cancel anytime with 30 days' notice" — the
                            terms have to say it too, or the promise isn't backed anywhere. */}
                        <p>Found It OS engagements are month-to-month. You may cancel at any time with 30 days&apos; written notice. There is no exit fee, and the code and data of your system remain yours.</p>
                        <p>We reserve the right to terminate or suspend services at any time due to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Violation of these Terms</li>
                            <li>Non-payment</li>
                            <li>Abuse or misuse of services</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">10. Third-Party Services</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may use third-party platforms (such as CRM systems, hosting providers, or advertising platforms). We are not responsible for the policies or performance of these third-party services.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">11. Privacy Policy</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>Your use of our services is also governed by our Privacy Policy:<br/>👉 <a href="https://www.founditsoftware.com/privacy-policy" className="text-primary hover:underline">https://www.founditsoftware.com/privacy-policy</a></p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">12. Changes to Terms</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may update these Terms of Service at any time. Continued use of our services after updates constitutes acceptance of the revised terms.</p>
                    </div>
                </section>

                <section className="space-y-6 border-t border-border pt-8">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">13. Contact Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <div className="font-semibold text-foreground">
                            <p>Found It Marketing LLC</p>
                            <p>📞 (337) 525-9650</p>
                            <p>📧 <a href="mailto:trevor@founditmarketing.com" className="text-primary hover:underline">trevor@founditmarketing.com</a></p>
                            <p>🌐 <a href="https://www.founditsoftware.com" className="text-primary hover:underline">https://www.founditsoftware.com</a></p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
