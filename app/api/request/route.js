import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phone, serviceNeeded, message } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: 'Full name and email address are required.' },
        { status: 400 }
      );
    }

    // Read environment variables dynamically
    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL || 'welcome@mail.besidebanq.com';
    const senderName = process.env.SENDER_NAME || 'BesideBanq';
    const adminNotifyEmail = process.env.ADMIN_NOTIFY_EMAIL;
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    const results = {
      brevoContact: false,
      clientEmail: false,
      adminEmail: false,
      googleSheet: false,
    };

    // ── 1. BREVO CRM CONTACT CREATION ───────────────────────────────────────
    if (brevoApiKey) {
      try {
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            attributes: {
              FIRSTNAME: firstName,
              LASTNAME: lastName,
              COMPANY: companyName || '',
              SMS: phone || '',
              SERVICE_NEEDED: serviceNeeded || '',
            },
            updateEnabled: true,
          }),
        });

        results.brevoContact = contactRes.ok || contactRes.status === 204;
      } catch (err) {
        console.error('Brevo Contact Upsert Error:', err);
      }
    }

    // ── 2. BREVO TRANSACTIONAL CONFIRMATION EMAIL TO CLIENT ─────────────────
    if (brevoApiKey && senderEmail) {
      try {
        const clientFirstName = fullName.trim().split(' ')[0];
        const clientEmailHtml = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Request Confirmation — BesideBanq</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #0f172a; -webkit-font-smoothing: antialiased; }
                .wrapper { width: 100%; background-color: #f8fafc; padding: 32px 16px; box-sizing: border-box; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 12px 40px rgba(44,43,154,0.08); }
                .header { background: #0D0D24; padding: 32px 36px; text-align: left; border-bottom: 3px solid #2C2B9A; }
                .logo-img { height: 36px; width: auto; display: block; filter: brightness(0) invert(1); }
                .tagline { color: rgba(255,255,255,0.6); font-size: 12px; margin-top: 6px; font-weight: 500; }
                .body-content { padding: 36px; }
                .badge { display: inline-block; background: rgba(44,43,154,0.08); color: #2C2B9A; border: 1px solid rgba(44,43,154,0.18); font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 14px; border-radius: 20px; margin-bottom: 20px; }
                h1 { color: #0f172a; font-size: 24px; font-weight: 800; margin: 0 0 12px 0; line-height: 1.25; }
                p { font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 20px 0; }
                .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; margin: 24px 0; }
                .summary-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 12px; }
                .summary-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; border-bottom: 1px dashed #cbd5e1; }
                .summary-row:last-child { border-bottom: none; }
                .summary-label { color: #64748b; font-weight: 500; }
                .summary-val { color: #0f172a; font-weight: 700; text-align: right; }
                .btn-cta { display: inline-block; background: linear-gradient(135deg, #1D1E81 0%, #4F46E5 100%); color: #ffffff !important; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 12px; text-decoration: none; margin-top: 10px; box-shadow: 0 4px 14px rgba(44,43,154,0.25); }
                .footer { background: #0D0D24; padding: 32px 36px; text-align: center; color: rgba(255,255,255,0.5); font-size: 12px; line-height: 1.6; }
                .footer a { color: #0AECD1; text-decoration: none; font-weight: 600; }
                .social-row { margin-bottom: 16px; }
                .social-row a { margin: 0 8px; color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 600; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="wrapper">
                <div class="container">
                  
                  <!-- Header with Official Logo -->
                  <div class="header">
                    <img src="https://besidebanq.com/besidebanq-logo.svg" alt="BesideBanq" class="logo-img" style="height:36px;" />
                    <div class="tagline">Helping people live a better life, globally.</div>
                  </div>

                  <!-- Main Content -->
                  <div class="body-content">
                    <div class="badge">Inquiry Confirmation</div>
                    <h1>Hi ${clientFirstName}, thank you for reaching out!</h1>
                    <p>We have successfully received your inquiry for <strong>${serviceNeeded || 'BesideBanq Global Services'}</strong>.</p>
                    
                    <div class="summary-card">
                      <div class="summary-title">Summary of Your Request</div>
                      <div style="font-size: 13px; color: #334155; line-height: 1.8;">
                        <strong>Name:</strong> ${fullName}<br />
                        <strong>Company:</strong> ${companyName || 'N/A'}<br />
                        <strong>Service Requested:</strong> ${serviceNeeded || 'General Inquiry'}<br />
                        ${phone ? `<strong>Phone/WhatsApp:</strong> ${phone}<br />` : ''}
                        <strong>Date Received:</strong> ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>

                    <p>Our global trade &amp; liquidity specialists are reviewing your requirements and will get back to you directly within 24 hours.</p>

                    <div style="margin-top: 24px; text-align: center;">
                      <a href="https://besidebanq.com" class="btn-cta">Visit BesideBanq &rarr;</a>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div class="footer">
                    <div class="social-row">
                      <a href="https://x.com/besidebanq">Twitter / X</a> &bull;
                      <a href="https://instagram.com/besidebanq">Instagram</a> &bull;
                      <a href="https://linkedin.com/company/besidebanq">LinkedIn</a> &bull;
                      <a href="https://besidebanq.com/contact">Contact Us</a>
                    </div>
                    <p style="margin: 0 0 8px 0; color: rgba(255,255,255,0.4);">
                      © ${new Date().getFullYear()} BesideBanq Inc. All rights reserved.
                    </p>
                    <p style="margin: 0; font-size: 11px; color: rgba(255,255,255,0.3);">
                      BesideBanq is a borderless financial super-app enabling global money movement, USD savings, and trade liquidity across 60+ markets.
                    </p>
                  </div>

                </div>
              </div>
            </body>
          </html>
        `;

        const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify({
            sender: { email: senderEmail, name: senderName },
            to: [{ email: email.trim().toLowerCase(), name: fullName }],
            subject: `Request Confirmation — BesideBanq Global Services`,
            htmlContent: clientEmailHtml,
          }),
        });

        results.clientEmail = emailRes.ok;
      } catch (err) {
        console.error('Brevo Client Email Error:', err);
      }
    }

    // ── 3. BREVO ADMIN LEAD NOTIFICATION EMAIL ──────────────────────────────
    if (brevoApiKey && senderEmail && adminNotifyEmail) {
      try {
        const adminEmailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #0d0d24; margin: 0; padding: 20px; color: #ffffff; }
                .card { max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 16px; padding: 32px; border: 1px solid #334155; }
                .badge { display: inline-block; background: #0AECD1; color: #0f172a; font-weight: 800; font-size: 11px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; margin-bottom: 16px; }
                h2 { color: #ffffff; margin-top: 0; font-size: 20px; }
                .table-info { width: 100%; border-collapse: collapse; margin: 20px 0; background: #0f172a; border-radius: 10px; overflow: hidden; }
                .table-info td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid #1e293b; color: #cbd5e1; }
                .table-info td.label { font-weight: 700; color: #94a3b8; width: 35%; }
                .msg-box { background: #0f172a; border-left: 4px solid #0AECD1; padding: 16px; border-radius: 8px; margin: 16px 0; font-size: 14px; color: #e2e8f0; }
                .btn-reply { display: inline-block; background: #4F46E5; color: #ffffff !important; font-weight: 700; font-size: 13px; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 16px; }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="badge">🚨 New Lead Alert</div>
                <h2>New Contact Form Inquiry</h2>
                <table class="table-info">
                  <tr><td class="label">Full Name</td><td>${fullName}</td></tr>
                  <tr><td class="label">Company</td><td>${companyName || 'N/A'}</td></tr>
                  <tr><td class="label">Email</td><td><a href="mailto:${email}" style="color:#0AECD1;">${email}</a></td></tr>
                  <tr><td class="label">Phone / WhatsApp</td><td>${phone || 'N/A'}</td></tr>
                  <tr><td class="label">Service Needed</td><td>${serviceNeeded || 'N/A'}</td></tr>
                  <tr><td class="label">Timestamp</td><td>${new Date().toLocaleString()}</td></tr>
                </table>
                <div style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">Message Content:</div>
                <div class="msg-box">${message || 'No additional details provided.'}</div>
                <a href="mailto:${email}?subject=RE:%20BesideBanq%20Inquiry%20-${encodeURIComponent(serviceNeeded || 'General')}" class="btn-cta btn-reply">Reply Direct to Client &rarr;</a>
              </div>
            </body>
          </html>
        `;

        const adminRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify({
            sender: { email: senderEmail, name: senderName },
            to: [{ email: adminNotifyEmail }],
            subject: `[Lead Alert] New Contact Inquiry from ${companyName || fullName}`,
            htmlContent: adminEmailHtml,
          }),
        });

        results.adminEmail = adminRes.ok;
      } catch (err) {
        console.error('Brevo Admin Email Error:', err);
      }
    }

    // ── 4. GOOGLE SHEETS WEBHOOK ─────────────────────────────────────────────
    if (googleSheetWebhookUrl) {
      try {
        const sheetRes = await fetch(googleSheetWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            fullName,
            companyName: companyName || '',
            email,
            phone: phone || '',
            serviceNeeded: serviceNeeded || '',
            message: message || '',
          }),
        });

        results.googleSheet = sheetRes.ok;
      } catch (err) {
        console.error('Google Sheet Webhook Error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your request has been received successfully. Check your email for confirmation.',
      results,
    });
  } catch (error) {
    console.error('API /api/request handler error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
