import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { escapeHtml, rateLimit, clientIp } from '@/lib/server/guards';
import { phoneDisplay, phoneHref } from '@/lib/phone';
import { SITE_URL } from '@/lib/site';

export const runtime = 'nodejs';
export const maxDuration = 15;

const checkSchema = z.object({
  label: z.string().max(120),
  pass: z.boolean(),
  detail: z.string().max(300),
  impact: z.string().max(300).optional(),
});

const reportSchema = z.object({
  email: z.string().email().max(254),
  phone: z.string().max(40).optional(),
  hp: z.string().max(200).optional(),
  result: z.object({
    url: z.string().max(500),
    score: z.number().min(0).max(100),
    grade: z.enum(['green', 'yellow', 'red']),
    scannedMs: z.number().optional(),
    groups: z
      .array(z.object({ name: z.string().max(60), checks: z.array(checkSchema).max(12) }))
      .max(6),
  }),
});

const GRADE_COPY = {
  green: { color: '#22c55e', label: 'Solid foundation' },
  yellow: { color: '#eab308', label: 'Leaking opportunity' },
  red: { color: '#ef4444', label: 'Bleeding customers' },
} as const;

function reportHtml(data: z.infer<typeof reportSchema>['result']): string {
  const grade = GRADE_COPY[data.grade];
  const groupsHtml = data.groups
    .map((g) => {
      const rows = g.checks
        .map(
          (c) => `
            <tr>
              <td style="padding:8px 10px;border-bottom:1px solid #f1f1f1;font-size:18px;width:28px">${c.pass ? '✅' : '❌'}</td>
              <td style="padding:8px 10px;border-bottom:1px solid #f1f1f1">
                <strong style="font-size:14px;color:#111">${escapeHtml(c.label)}</strong><br/>
                <span style="font-size:12px;color:#666">${escapeHtml(c.detail)}</span>
                ${!c.pass && c.impact ? `<br/><span style="font-size:12px;color:#b45309">⚠ ${escapeHtml(c.impact)}</span>` : ''}
              </td>
            </tr>`
        )
        .join('');
      return `
        <h3 style="margin:24px 0 8px;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#ff5500">${escapeHtml(g.name)}</h3>
        <table style="width:100%;border-collapse:collapse">${rows}</table>`;
    })
    .join('');

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#111">
    <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#ff5500;font-weight:bold;margin:0 0 16px">Found It Marketing — Site Scan Report</p>
    <h1 style="font-size:26px;margin:0 0 4px;font-style:italic;text-transform:uppercase">Your Website Scored <span style="color:${grade.color}">${data.score}/100</span></h1>
    <p style="font-size:15px;color:${grade.color};font-weight:bold;margin:0 0 4px">${grade.label}</p>
    <p style="font-size:13px;color:#666;margin:0 0 20px">Scanned: ${escapeHtml(data.url)}</p>
    ${groupsHtml}
    <div style="margin-top:32px;padding:20px;background:#fff7f2;border:1px solid #ffd9c2;border-radius:12px">
      <p style="font-size:15px;font-weight:bold;margin:0 0 6px">This scan only checks the surface.</p>
      <p style="font-size:13px;color:#444;margin:0 0 14px">The real audit looks at your ad spend, conversion tracking, rankings, and AI visibility — free, no strings. Call Trevor and he'll walk you through exactly what to fix first.</p>
      <p style="margin:0">
        <a href="${phoneHref}" style="display:inline-block;background:#ff5500;color:#fff;font-weight:bold;text-decoration:none;padding:12px 22px;border-radius:8px;font-size:14px">Call ${phoneDisplay}</a>
        &nbsp;&nbsp;
        <a href="${SITE_URL}/contact" style="display:inline-block;color:#ff5500;font-weight:bold;text-decoration:none;padding:12px 0;font-size:14px">Book a free call →</a>
      </p>
    </div>
    <p style="font-size:11px;color:#999;margin-top:24px">Found It Marketing · Alexandria, Louisiana · You received this because you requested a scan report at founditsoftware.com</p>
  </div>`;
}

export async function POST(req: Request) {
  try {
    if (!rateLimit(`audit-report:${clientIp(req)}`, 4, 60_000)) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
    }

    const parsed = reportSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }
    const { email, phone, hp, result } = parsed.data;
    if (hp) return NextResponse.json({ ok: true });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const failed = result.groups.flatMap((g) => g.checks.filter((c) => !c.pass).map((c) => c.label));

    // 1) The prospect gets their branded report.
    // 2) Trevor gets the lead with everything he needs for the follow-up call.
    const [reportRes, leadRes] = await Promise.allSettled([
      resend.emails.send({
        from: 'Found It Marketing <contact@founditmarketing.com>',
        to: [email],
        subject: `Your website scan: ${result.score}/100 — ${GRADE_COPY[result.grade].label}`,
        html: reportHtml(result),
      }),
      resend.emails.send({
        from: 'Found It Marketing <contact@founditmarketing.com>',
        to: ['trevor@founditmarketing.com'],
        subject: `Audit Lead: ${email} scanned ${result.url} (${result.score}/100)${phone ? ' — left a text number' : ''}`,
        html: `
          <h1 style="margin:0 0 12px">Instant Audit Lead</h1>
          <p style="margin:4px 0"><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p style="margin:4px 0"><strong>Mobile (asked for a text):</strong> ${escapeHtml(phone)}</p>` : ''}
          <p style="margin:4px 0"><strong>Site:</strong> ${escapeHtml(result.url)}</p>
          <p style="margin:4px 0"><strong>Score:</strong> ${result.score}/100 (${result.grade})</p>
          <p style="margin:4px 0"><strong>Failing checks:</strong> ${failed.length ? escapeHtml(failed.join(', ')) : 'None'}</p>
        `,
      }),
    ]);

    if (reportRes.status === 'rejected' && leadRes.status === 'rejected') {
      return NextResponse.json({ error: 'Could not send the report. Try again.' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Could not send the report. Try again.' }, { status: 500 });
  }
}
