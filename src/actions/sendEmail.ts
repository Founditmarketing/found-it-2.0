'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';
import { escapeHtml, rateLimit } from '@/lib/server/guards';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Hard caps per field so a scripted client can't stuff megabytes into the inbox. */
const CAPS = {
    name: 200,
    email: 320,
    website: 500,
    revenue: 100,
    problem: 200,
    message: 5000,
} as const;

function field(formData: FormData, key: keyof typeof CAPS): string {
    return String(formData.get(key) ?? '').slice(0, CAPS[key]);
}

export async function sendEmail(formData: FormData) {
    // Server actions are publicly invokable endpoints — throttle per IP.
    const h = headers();
    const fwd = h.get('x-forwarded-for');
    const ip = fwd ? fwd.split(',')[0].trim() : h.get('x-real-ip') || 'unknown';
    if (!rateLimit(`email:${ip}`, 5, 600_000) || !rateLimit(`email-day:${ip}`, 20, 86_400_000)) {
        return { success: false, error: 'rate_limited' };
    }

    const name = field(formData, 'name');
    const email = field(formData, 'email');
    const website = field(formData, 'website');
    const revenue = field(formData, 'revenue');
    const message = field(formData, 'message');
    const problem = field(formData, 'problem');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, error: 'invalid_email' };
    }

    // Honeypot field — real users never fill it. Pretend success for bots.
    if ((formData.get('hp') as string)?.trim()) {
        return { success: true, data: null };
    }

    // Subject is an email header — never let newlines through it.
    const subject = `New Lead: ${name} (${problem})`.replace(/[\r\n]+/g, ' ').slice(0, 150);

    try {
        const data = await resend.emails.send({
            from: 'Found It Marketing <contact@founditmarketing.com>',
            to: ['trevor@founditmarketing.com'],
            subject,
            html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Website:</strong> ${escapeHtml(website)}</p>
        <p><strong>Revenue:</strong> ${escapeHtml(revenue)}</p>
        <p><strong>Problem Area:</strong> ${escapeHtml(problem)}</p>
        <hr />
        <h3>Message:</h3>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}
