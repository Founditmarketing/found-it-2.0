'use server';

import { Resend } from 'resend';
import { escapeHtml } from '@/lib/server/guards';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const website = formData.get('website') as string;
    const revenue = formData.get('revenue') as string;
    const message = formData.get('message') as string;
    const problem = formData.get('problem') as string;

    // Honeypot field — real users never fill it. Pretend success for bots.
    if ((formData.get('hp') as string)?.trim()) {
        return { success: true, data: null };
    }

    try {
        const data = await resend.emails.send({
            from: 'Found It Marketing <contact@founditmarketing.com>',
            to: ['trevor@founditmarketing.com'],
            subject: `New Lead: ${name} (${problem})`,
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
