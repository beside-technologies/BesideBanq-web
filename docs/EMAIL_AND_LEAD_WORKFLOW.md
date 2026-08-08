# BesideBanq — Fintech Contact & Email System Documentation

**Version:** 1.0  
**Status:** Active Production Specification  
**Component:** Contact & Client Inquiry System (`/contact`, `/api/request`)

---

## 1. System Overview & Architecture

The BesideBanq Contact & Inquiry System provides a high-reliability, compliant data pipeline for receiving client inquiries, logging records for compliance auditing, updating CRM contacts, and dispatching transactional confirmation emails.

```
 Client Submission (/contact)
            │
            ▼
 Next.js API Route (/api/request)
    ├── Environment Validation & Data Sanitation
    │
    ├── 1. Brevo CRM API (/v3/contacts) ──► Contact Created/Updated
    │
    ├── 2. Brevo Transactional Email (/v3/smtp/email) ──► Branded Client Confirmation Email
    │
    ├── 3. Brevo Admin Lead Alert (/v3/smtp/email) ──► Internal Support Alert
    │
    └── 4. Google Sheets Webhook ──► Real-Time Audit Spreadsheet Record
```

---

## 2. Best Practices for Fintech Email Deliverability & Compliance

### 2.1 Sender Authentication & Reputation Isolation
- **Domain Authentication:** `besidebanq.com` is authenticated via **DKIM** (DomainKeys Identified Mail), **SPF** (Sender Policy Framework), and **DMARC** (Domain-based Message Authentication, Reporting, and Conformance).
- **Subdomain Isolation:** Emails are dispatched via `welcome@mail.besidebanq.com`. Isolating transactional emails on a `mail.` subdomain protects main domain (`besidebanq.com`) deliverability reputation.

### 2.2 Reply-To & Support Routing
- In compliance with fintech customer support standards, transactional confirmation emails include a configured `replyTo` parameter pointing to `support@besidebanq.com`.
- If a client replies to their automated receipt email, the message is routed directly to the BesideBanq Customer Support team.

### 2.3 Auditability & Data Trails
Every inquiry generates **3 independent audit records**:
1. **Brevo Transaction Logs:** Message-ID, SMTP status code, delivery timestamp, and recipient metadata.
2. **Brevo CRM:** Contact profile updated with `FIRSTNAME`, `LASTNAME`, `COMPANY`, `WEBSITE`, `SMS`, and `SERVICE_NEEDED`.
3. **Google Spreadsheet:** Immutable row appended with `Timestamp`, `FullName`, `CompanyName`, `CompanyWebsite`, `Email`, `Phone`, `ServiceNeeded`, and `Message`.

---

## 3. Environment Variables Specification

The system relies strictly on environment variables (no hardcoded keys or addresses):

| Environment Variable | Description | Example / Value |
|---|---|---|
| `BREVO_API_KEY` | Secret API Key for Brevo REST API v3 | `xkeysib-...` |
| `SENDER_EMAIL` | Verified sender email address | `welcome@mail.besidebanq.com` |
| `SENDER_NAME` | Display name for outgoing emails | `BesideBanq` |
| `ADMIN_NOTIFY_EMAIL` | Admin email address receiving lead alerts | `support@besidebanq.com` |
| `GOOGLE_SHEET_WEBHOOK_URL` | Deployed Google Apps Script Web App URL | `https://script.google.com/macros/s/.../exec` |

---

## 4. API Request Payload & Response Schema

### `POST /api/request`

#### Request Body (JSON)
```json
{
  "fullName": "Amara Okafor",
  "companyName": "Guangzhou Trading Co.",
  "website": "https://example.com",
  "email": "amara@example.com",
  "phone": "+1 (555) 000-0000",
  "serviceNeeded": "Chinese Supplier Payouts (CNY)",
  "message": "Inquiring about monthly CNY payout rates."
}
```

#### Response Body (200 OK)
```json
{
  "success": true,
  "message": "Your request has been received successfully. Check your email for confirmation.",
  "results": {
    "brevoContact": true,
    "clientEmail": true,
    "adminEmail": true,
    "googleSheet": true
  }
}
```

---

## 5. Security & Privacy Disclosures

- **Transport Layer Security (TLS):** All API payloads in transit are encrypted via 256-bit HTTPS/TLS.
- **Credential Storage:** API keys (`BREVO_API_KEY`) are kept strictly on the server-side environment (`process.env`) and are never exposed to the client browser bundle.
- **Privacy Notice:** Email templates include institutional privacy disclaimers and corporate registry notices.
