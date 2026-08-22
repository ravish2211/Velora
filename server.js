require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const path = require('path');
const { Resend } = require('resend');

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, BLOG, FAQS } = require('./src/data');
const { BaseLayout, escapeHTML } = require('./src/components');
const {
    renderHomePage,
    renderServicesPage,
    renderServiceDetailPage,
    renderIndustriesPage,
    renderIndustryDetailPage,
    renderLocationsPage,
    renderLocationDetailPage,
    renderPortfolioPage,
    renderProcessPage,
    renderPricingPage,
    renderAboutPage,
    renderBlogPage,
    renderBlogDetailPage,
    renderContactPage,
    renderPrivacyPage,
    renderTermsPage,
    renderNotFoundPage,
    renderServerErrorPage
} = require('./src/pages');

const app = express();
const PORT = 3000;

app.set('trust proxy', 1);

// Security & Performance Middlewares
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

// Global Rate Limiter
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});
app.use(globalLimiter);

// Strict Contact API Rate Limiter
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many contact requests from this IP. Please call or email us directly.' },
    standardHeaders: true,
    legacyHeaders: false
});

// Lazy Resend Client
let resendClient = null;
function getResend() {
    if (!resendClient && process.env.RESEND_API_KEY) {
        resendClient = new Resend(process.env.RESEND_API_KEY);
    }
    return resendClient;
}

// ============================================================================ //
// PAGE ROUTES                                                                  //
// ============================================================================ //

app.get('/', (req, res) => {
    const { meta, content, script } = renderHomePage();
    res.send(BaseLayout(req, meta, content, script));
});

app.get('/services', (req, res) => {
    const { meta, content } = renderServicesPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/services/:slug', (req, res) => {
    const service = SERVICES.find(s => s.slug === req.params.slug);
    if (!service) {
        const { meta, content } = renderNotFoundPage();
        return res.status(404).send(BaseLayout(req, meta, content));
    }
    const { meta, content } = renderServiceDetailPage(service);
    res.send(BaseLayout(req, meta, content));
});

app.get('/industries', (req, res) => {
    const { meta, content } = renderIndustriesPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/industries/:slug', (req, res) => {
    const industry = INDUSTRIES.find(i => i.slug === req.params.slug);
    if (!industry) {
        const { meta, content } = renderNotFoundPage();
        return res.status(404).send(BaseLayout(req, meta, content));
    }
    const { meta, content } = renderIndustryDetailPage(industry);
    res.send(BaseLayout(req, meta, content));
});

app.get('/locations', (req, res) => {
    const { meta, content } = renderLocationsPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/locations/:slug', (req, res) => {
    const location = LOCATIONS.find(l => l.slug === req.params.slug);
    if (!location) {
        const { meta, content } = renderNotFoundPage();
        return res.status(404).send(BaseLayout(req, meta, content));
    }
    const { meta, content } = renderLocationDetailPage(location);
    res.send(BaseLayout(req, meta, content));
});

app.get('/portfolio', (req, res) => {
    const { meta, content } = renderPortfolioPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/process', (req, res) => {
    const { meta, content } = renderProcessPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/pricing', (req, res) => {
    const { meta, content, script } = renderPricingPage();
    res.send(BaseLayout(req, meta, content, script));
});

app.get('/about', (req, res) => {
    const { meta, content } = renderAboutPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/blog', (req, res) => {
    const { meta, content } = renderBlogPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/blog/:slug', (req, res) => {
    const article = BLOG.find(b => b.slug === req.params.slug);
    if (!article) {
        const { meta, content } = renderNotFoundPage();
        return res.status(404).send(BaseLayout(req, meta, content));
    }
    const { meta, content } = renderBlogDetailPage(article);
    res.send(BaseLayout(req, meta, content));
});

app.get('/contact', (req, res) => {
    const { meta, content, script } = renderContactPage();
    res.send(BaseLayout(req, meta, content, script));
});

app.get('/privacy-policy', (req, res) => {
    const { meta, content } = renderPrivacyPage();
    res.send(BaseLayout(req, meta, content));
});

app.get('/terms', (req, res) => {
    const { meta, content } = renderTermsPage();
    res.send(BaseLayout(req, meta, content));
});

// SEO SITEMAP & ROBOTS
app.get('/sitemap.xml', (req, res) => {
    const urls = [
        '/',
        '/services',
        '/industries',
        '/locations',
        '/portfolio',
        '/process',
        '/pricing',
        '/about',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/terms'
    ];
    SERVICES.forEach(s => urls.push(`/services/${s.slug}`));
    INDUSTRIES.forEach(i => urls.push(`/industries/${i.slug}`));
    LOCATIONS.forEach(l => urls.push(`/locations/${l.slug}`));
    BLOG.forEach(b => urls.push(`/blog/${b.slug}`));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${CONFIG.baseUrl}${url}</loc>
        <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
        <priority>${url === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap.trim());
});

app.get('/robots.txt', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${CONFIG.baseUrl}/sitemap.xml`);
});

// ============================================================================ //
// API ENDPOINTS                                                                //
// ============================================================================ //

app.get('/api/estimate', (req, res) => {
    const pages = Math.max(1, Math.min(50, parseInt(req.query.pages, 10) || 5));
    const seo = req.query.seo === 'true';
    const maint = req.query.maint === 'true';

    let total = CONFIG.pricing.baseCalculator + (pages * CONFIG.pricing.perPage);
    if (seo) total += CONFIG.pricing.seoAddon;
    if (maint) total += CONFIG.pricing.maintenanceAddon;

    res.json({
        estimate: total,
        formatted: `${CONFIG.currencySymbol}${total.toLocaleString('en-IN')}`
    });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        const body = req.body || {};

        // Anti-spam Honeypot Check
        if (body._gotcha && body._gotcha.trim() !== '') {
            return res.status(200).json({ success: true, message: 'Enquiry received.' });
        }

        // Server-Side Input Validation
        const name = typeof body.name === 'string' ? body.name.trim() : '';
        const business = typeof body.business === 'string' ? body.business.trim() : '';
        const email = typeof body.email === 'string' ? body.email.trim() : '';
        const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
        const industry = typeof body.industry === 'string' ? body.industry.trim() : 'other';
        const budget = typeof body.budget === 'string' ? body.budget.trim() : 'professional';
        const message = typeof body.message === 'string' ? body.message.trim() : '';

        if (!name || name.length < 2 || name.length > 100) {
            return res.status(400).json({ success: false, message: 'Please provide a valid name (2-100 characters).' });
        }

        if (!business || business.length < 2 || business.length > 100) {
            return res.status(400).json({ success: false, message: 'Please provide your business name (2-100 characters).' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email) || email.length > 255) {
            return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
        }

        if (phone && phone.length > 30) {
            return res.status(400).json({ success: false, message: 'Phone number exceeds maximum length.' });
        }

        if (message && message.length > 2000) {
            return res.status(400).json({ success: false, message: 'Project details message is too long (max 2000 characters).' });
        }

        const allowedIndustries = ['real-estate', 'restaurant', 'clinic', 'salon', 'other'];
        const validatedIndustry = allowedIndustries.includes(industry) ? industry : 'other';

        const allowedBudgets = ['essential', 'professional', 'custom'];
        const validatedBudget = allowedBudgets.includes(budget) ? budget : 'professional';

        const emailText = `
New Website Project Inquiry via Velora Digital:
----------------------------------------------
Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone || 'Not provided'}
Industry: ${validatedIndustry}
Budget Tier: ${validatedBudget}

Project Details:
${message || 'No additional details provided.'}
        `.trim();

        const emailHtml = `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
    <div style="background: #0f172a; padding: 24px; border-radius: 8px 8px 0 0; color: #fff;">
        <h2 style="margin: 0; font-size: 20px; color: #d4af37;">Velora Digital — New Inquiry</h2>
    </div>
    <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <p><strong>From:</strong> ${escapeHTML(name)} (${escapeHTML(business)})</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHTML(email)}">${escapeHTML(email)}</a></p>
        <p><strong>Phone:</strong> ${escapeHTML(phone || 'Not provided')}</p>
        <p><strong>Industry:</strong> ${escapeHTML(validatedIndustry)}</p>
        <p><strong>Budget Tier:</strong> ${escapeHTML(validatedBudget)}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <h3 style="font-size: 16px; margin-bottom: 8px;">Project Details:</h3>
        <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 6px; font-size: 14px;">${escapeHTML(message || 'No additional details provided.')}</p>
    </div>
</div>
        `;

        const resend = getResend();
        if (resend) {
            const { data, error } = await resend.emails.send({
                from: CONFIG.emailFrom,
                to: CONFIG.systemEmail || CONFIG.email,
                replyTo: email,
                subject: `[New Inquiry] ${business} - ${name}`,
                text: emailText,
                html: emailHtml
            });
            if (error) {
                console.error('[Resend Error]:', error);
                throw new Error(error.message || 'Email delivery failed');
            }
        } else {
            console.error('[System Error]: RESEND_API_KEY is not configured in the environment. Enquiry could not be sent.');
            throw new Error('Email service is not configured.');
        }

        return res.status(200).json({
            success: true,
            message: 'Thank you. Your inquiry has been received. We will respond within 24 hours.'
        });

    } catch (err) {
        console.error('[Contact Form Processing Error]:', err);
        return res.status(500).json({
            success: false,
            message: 'Unable to process inquiry at this moment. Please call or message us on WhatsApp directly.'
        });
    }
});

// ============================================================================ //
// ERROR HANDLERS                                                               //
// ============================================================================ //

app.use((req, res) => {
    const { meta, content } = renderNotFoundPage();
    res.status(404).send(BaseLayout(req, meta, content));
});

app.use((err, req, res, next) => {
    console.error('[Server Error Handler]:', err);
    const { meta, content } = renderServerErrorPage();
    res.status(500).send(BaseLayout(req, meta, content));
});

// ============================================================================ //
// SERVER LAUNCH                                                                //
// ============================================================================ //
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Velora Digital Production SSR running at http://0.0.0.0:${PORT}`);
});
