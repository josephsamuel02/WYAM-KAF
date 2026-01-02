# EmailJS Setup Guide

This project uses EmailJS to send emails directly from the contact form without requiring a backend server.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

### 2. Add an Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Copy the **Service ID** (e.g., `service_xxxxx`)

### 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**

```
Hello,

You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

**Settings:**

- To Email: `mrsamd02@gmail.com` (or your email)
- From Name: `{{from_name}}`
- From Email: `{{from_email}}`
- Reply To: `{{reply_to}}`

4. Copy the **Template ID** (e.g., `template_xxxxx`) template_uimih0e

### 4. Get Your Public Key

1. Go to **Account** → **General** in your dashboard
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

### 5. Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Your Development Server

After adding the environment variables, restart your dev server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (mrsamd02@gmail.com) for the message

## Troubleshooting

### Common Issues

- **"EmailJS configuration is missing"**: Make sure your `.env` file exists and contains all three variables

- **"Failed to send email"**: Check that your EmailJS service is properly connected and your template is set up correctly

- **"Gmail_API: Request had insufficient authentication scopes" (Error 412)**:
  This means your Gmail service needs to be re-authenticated. Follow these steps:

  1. Go to your EmailJS dashboard → **Email Services**
  2. Find your Gmail service and click on it
  3. Click **"Reconnect"** or **"Update"**
  4. Grant all requested permissions (make sure to allow all scopes)
  5. Complete the OAuth flow
  6. Test the form again

- **"Gmail authentication error"**:

  - Reconnect your Gmail service in EmailJS dashboard
  - Make sure you're using a Gmail account (not Google Workspace)
  - Try disconnecting and reconnecting the service
  - Alternative: Use Outlook or another email service instead

- **Emails not received**:
  - Check your spam folder
  - Verify the "To Email" in your template matches your email address
  - Check EmailJS dashboard for any service errors
  - Verify your email service is active and connected

### Alternative Email Services

If Gmail continues to have issues, consider using:

- **Outlook/Hotmail**: More reliable for EmailJS
- **SendGrid**: Professional email service (requires setup)
- **SMTP Service**: Any SMTP-compatible service

## Security Note

The Public Key is safe to expose in frontend code. EmailJS handles rate limiting and security on their end. Never expose your Private Key (if you have one).

## Free Tier Limits

- 200 emails per month
- Perfect for small to medium websites
- Upgrade available if you need more
