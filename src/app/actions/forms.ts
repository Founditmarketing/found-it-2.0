'use server';

import { sendEmail } from '@/actions/sendEmail';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(200),
    email: z.string().email('Invalid email address').max(320),
    website: z.string().url('Invalid website URL').max(500).optional().or(z.literal('')),
    revenue: z.string().max(100).optional(),
    message: z.string().min(1, 'Message is required').max(5000),
    problem: z.string().max(200).optional(),
});

export async function submitContactForm(formData: FormData) {
    const rawData = Object.fromEntries(formData.entries());

    // 1. Basic Validation
    const validatedFields = contactFormSchema.safeParse(rawData);
    if (!validatedFields.success) {
        return {
            error: 'Invalid inputs',
            details: validatedFields.error.flatten().fieldErrors
        };
    }

    // 2. Add defaults
    if (!formData.get('problem')) {
        formData.append('problem', 'General Inquiry');
    }

    // 3. Delegate to centralized sender
    const result = await sendEmail(formData);

    if (result.success) {
        return { success: true };
    } else {
        return { error: 'Failed to send email. please try again.' };
    }
}

export async function notifyAISubmission(url: string, score: number, summary: string) {
    // Lead from AI Visibility Check
    const formData = new FormData();
    formData.append('name', 'AI Visibility Lead');
    formData.append('email', 'ai-visibility@founditmarketing.com');
    formData.append('problem', 'AI Scan Completed');
    formData.append('message', `Target URL: ${url}\nVisibility Score: ${score}\n\nSummary:\n${summary}`);

    await sendEmail(formData);
}

export async function notifySolutionSubmission(businessName: string, industry: string, summary: string) {
    // Lead from Solution Strategist
    const formData = new FormData();
    formData.append('name', 'Solution Strategist Lead');
    formData.append('email', 'strategist@founditmarketing.com');
    formData.append('problem', 'Strategy Generated');
    formData.append('message', `Business: ${businessName}\nIndustry: ${industry}\n\nAI Summary:\n${summary}`);

    await sendEmail(formData);
}


export async function notifyFeasibilitySubmission(concept: string, score: number, summary: string) {
    // Lead from Feasibility Study
    const formData = new FormData();
    formData.append('name', 'Feasibility Study Lead');
    formData.append('email', 'feasibility@founditmarketing.com');
    formData.append('problem', 'Feasibility Study Completed');
    formData.append('message', `Business Concept: ${concept}\nFeasibility Score: ${score}\n\nSummary:\n${summary}`);

    await sendEmail(formData);
}

const secretFormSchema = z.object({
    businessName: z.string().min(2, 'Business Name is required').max(200),
    industry: z.string().min(2, 'Industry is required').max(200),
    name: z.string().min(2, 'Name is required').max(200),
    email: z.string().email('Invalid email address').max(320),
    phone: z.string().min(7, 'Phone number is required').max(30),
    state: z.string().min(2, 'State is required').max(50),
    jobsPerMonth: z.string().max(50),
    averageJobWorth: z.string().max(50),
    urgency: z.string().max(10),
});

export async function submitSecretForm(formData: FormData) {
    const rawData = Object.fromEntries(formData.entries());

    const validatedFields = secretFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            error: 'Invalid inputs',
            details: validatedFields.error.flatten().fieldErrors
        };
    }

    const message = `
    New Comprehensive Marketing Application:
    
    Business Name: ${rawData.businessName}
    Industry: ${rawData.industry}
    Contact Name: ${rawData.name}
    Email: ${rawData.email}
    Phone: ${rawData.phone}
    State: ${rawData.state}
    
    Metrics:
    Jobs Per Month: ${rawData.jobsPerMonth}
    Average Job Worth: $${rawData.averageJobWorth}
    Urgency (1-10): ${rawData.urgency}
    `;

    const emailData = new FormData();
    emailData.append('name', rawData.name as string);
    emailData.append('email', rawData.email as string);
    emailData.append('problem', 'Comprehensive Marketing Application');
    emailData.append('message', message);

    const result = await sendEmail(emailData);

    if (result.success) {
        return { success: true };
    } else {
        return { error: 'Failed to send application. Please try again.' };
    }
}

