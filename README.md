# Velora Digital

Production website for Velora Digital, built with Node.js, Express, and server-rendered HTML.

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set the required values.
3. Build the stylesheet with `npm run build:css`.
4. Start the site with `npm start`.

The local server listens on `http://localhost:3000` unless `PORT` is set.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `PORT` | Port supplied by the host; Render sets this automatically. |
| `NODE_ENV` | Use `production` in Render. |
| `BASE_URL` | Canonical public site URL used in metadata, structured data, and the sitemap. |
| `CONTACT_PHONE`, `CONTACT_WHATSAPP`, `CONTACT_EMAIL` | Public contact details displayed on the site. |
| `RESEND_API_KEY` | Resend API key used by the contact form. |
| `EMAIL_FROM` | A Resend-verified sender address. |
| `SYSTEM_EMAIL` | Inbox that receives enquiry emails. |

Never commit `.env` or any production secret.

## Render deployment checklist

Set all production environment variables in Render, then deploy with the existing start command: `npm start`.

After deployment, check:

- The home page, pricing page, contact page, sitemap, and robots file load successfully.
- Light and dark modes work on desktop and mobile navigation.
- The pricing calculator carries its selection into the contact form.
- A real contact submission reaches the configured inbox and the reply address is correct.
- Social-preview metadata resolves to `/og-image.jpg`.
