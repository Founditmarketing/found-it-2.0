import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { escapeHtml, rateLimit, clientIp } from '@/lib/server/guards';

export const runtime = 'nodejs';
export const maxDuration = 15;

const leadSchema = z.object({
  source: z.string().min(1).max(100),
  businessName: z.string().max(200).optional(),
  city: z.string().max(120).optional(),
  industry: z.string().max(120).optional(),
  name: z.string().max(200).optional(),
  email: z.string().email().max(254).optional().or(z.literal('')),
  phone: z.string().max(40).optional(),
  website: z.string().max(300).optional(),
  message: z.string().max(4000).optional(),
  /** Honeypot — humans never see this field; bots fill it. */
  hp: z.string().max(200).optional(),
});

const FIELD_LABELS: Record<string, string> = {
  businessName: 'Business',
  city: 'City',
  industry: 'Industry',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  website: 'Website',
  message: 'Message',
};

export async function POST(req: Request) {
  try {
    const parsed = leadSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid lead payload.' }, { status: 400 });
    }
    const lead = parsed.data;

    // Automatic scan captures get their own budget — they must never drain the
    // bucket a real human needs for the contact/chat/local lead forms.
    const bucket = lead.source === 'instant-audit-scan' ? 'lead-scan' : 'lead';
    if (!rateLimit(`${bucket}:${clientIp(req)}`, 6, 60_000)) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
    }

    // Honeypot tripped — swallow silently so bots think it worked.
    if (lead.hp) return NextResponse.json({ ok: true });

    // Require at least one identifying field beyond the source tag.
    const hasContent = [lead.businessName, lead.name, lead.email, lead.phone, lead.website, lead.message]
      .some((v) => v && v.trim());
    if (!hasContent) {
      return NextResponse.json({ error: 'Empty lead.' }, { status: 400 });
    }

    const rows = Object.entries(FIELD_LABELS)
      .map(([key, label]) => {
        const value = (lead as Record<string, string | undefined>)[key];
        if (!value || !value.trim()) return '';
        return `<p style="margin:4px 0"><strong>${label}:</strong> ${escapeHtml(value)}</p>`;
      })
      .join('');

    const resend = new Resend(process.env.RESEND_API_KEY);
    const who = lead.businessName || lead.name || lead.email || 'Unknown';
    // Guide downloads ride the same hardened pipe but must be tellable at a
    // glance in the inbox — a PDF grab is a lighter intent than a walkthrough
    // or map request, and the follow-up call is a different conversation.
    const isGuideDownload = lead.source.startsWith('lp_guide_download');
    await resend.emails.send({
      from: 'Found It Marketing <contact@founditmarketing.com>',
      // Both inboxes on purpose: founditmarketing is the official book,
      // gmail is the one that buzzes the phone — a lead should never wait
      // on which inbox happens to be open.
      to: ['trevor@founditmarketing.com', 'trevorruby@gmail.com'],
      subject: `${isGuideDownload ? 'Guide Download' : 'New Lead'}: ${who} (${lead.source})`,
      html: `
        <h1 style="margin:0 0 12px">${isGuideDownload ? 'New Guide Download' : 'New Website Lead'}</h1>
        <p style="margin:4px 0"><strong>Source:</strong> ${escapeHtml(lead.source)}</p>
        ${rows}
      `,
    });

    // Speed-to-lead, made visible: leads that come with an email get an
    // instant confirmation while they're still on the page (the voice
    // secretary tells them to check their inbox mid-call). Best-effort —
    // a failure here never fails the lead itself.
    let confirmationEmailed = false;
    if (lead.email && !isGuideDownload) {
      try {
        const first = escapeHtml((lead.name || '').trim().split(/\s+/)[0] || 'there');
        await resend.emails.send({
          from: 'Found It Software <contact@founditmarketing.com>',
          to: [lead.email],
          subject: 'Got it — Trevor’s on it',
          html: `
            <p style="margin:0 0 12px">Hey ${first},</p>
            <p style="margin:0 0 12px">Your info just landed with Found It Software — Trevor will reach out shortly, usually within 2 hours during the day.</p>
            <p style="margin:0 0 12px">On the call: a free 30-minute software map — the app we&rsquo;d build if we owned your company. You keep the map either way, hire us or don&rsquo;t.</p>
            <p style="margin:0">— Trevor Ruby, Found It Software, Alexandria LA</p>
          `,
        });
        confirmationEmailed = true;
      } catch { /* best-effort only */ }
    }

    return NextResponse.json({ ok: true, confirmationEmailed });
  } catch {
    return NextResponse.json({ error: 'Failed to capture lead.' }, { status: 500 });
  }
}
