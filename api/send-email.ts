export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        'RESEND_API_KEY is not defined. Please add it in Vercel Dashboard → Settings → Environment Variables.'
      );
    }

    const { name, email, property, projectType, investmentTier, machineryAccess } = await req.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const htmlBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #1a1a1a; padding: 32px; text-align: center;">
          <h1 style="color: #c9a84c; font-size: 24px; margin: 0; font-weight: 300; letter-spacing: 2px;">
            MIDWEST WINDMILL
          </h1>
          <p style="color: #888; font-size: 11px; letter-spacing: 3px; margin-top: 8px;">
            NEW CONSULTATION REQUEST
          </p>
        </div>
        <div style="padding: 32px; background: #f9f8f6; border: 1px solid #e8e4dc;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; font-size: 15px;">
                <a href="mailto:${email}" style="color: #1a1a1a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Property</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; font-size: 15px;">${property || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Project Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; font-size: 15px;">${projectType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Investment Tier</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e4dc; font-size: 15px;">${investmentTier || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Machinery Access</td>
              <td style="padding: 12px 0; font-size: 15px;">${machineryAccess || 'Not specified'}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 20px 32px; background: #1a1a1a; text-align: center;">
          <p style="color: #666; font-size: 11px; margin: 0;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Midwest Windmill <hello@midwestwindmillcompany.com>',
        to: ['markhenry@midwestwindmillcompany.com'],
        reply_to: email,
        subject: `New Quote Request from ${name} — ${projectType || 'General Inquiry'}`,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const errorData = await resendRes.json();
      console.error('Resend API Error:', errorData);
      throw new Error(errorData.message || 'Failed to send email');
    }

    const data = await resendRes.json();
    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Send Email Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
