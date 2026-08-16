// ============================================================================ //
// 1. IMPORTS & SETUP                                                           //
// ============================================================================ //
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3000;

// ============================================================================ //
// 2. MIDDLEWARE CONFIG                                                         //
// ============================================================================ //

// Strict security headers with functional CSP
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
            frameAncestors: ["'none'"],
            formAction: ["'self'"],
        },
    },
    crossOriginEmbedderPolicy: false,
}));

app.use(compression());
app.use(express.static('public'));

// Payload limits to prevent memory exhaustion attacks
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ============================================================================ //
// 3. CONSTANTS & DATA                                                          //
// ============================================================================ //
const CONFIG = {
    baseUrl: process.env.BASE_URL || 'https://veloradigital.in',
    phone: process.env.CONTACT_PHONE || '+91 99997 33735',
    whatsapp: process.env.CONTACT_WHATSAPP || '919999733735',
    email: process.env.CONTACT_EMAIL || 'hello@veloradigital.in', 
    currencySymbol: '₹',
    pricing: {
        essential: 14999,
        professional: 34999,
        customBase: 69999,
        seoAddon: 7500,
        maintenanceAddon: 5000,
        perPage: 1500,
        baseCalculator: 10000
    }
};

const SERVICES = [
    {
        slug: 'website-design',
        title: 'Website Design & Development',
        short: 'Professional, fast-loading websites built to build trust and make contacting your business effortless.',
        icon: '💻',
        benefits: ['Mobile-first layouts', 'Clear contact forms', 'Fast loading speeds', 'Modern, clean design'],
        longDesc: 'Your website is often the first interaction a customer has with your business. We build fast, professional websites designed to build trust instantly. By focusing on clear communication, easy navigation, and mobile performance, we ensure your site turns visitors into actual enquiries.',
        process: ['Structure Planning', 'Visual Design', 'Web Development', 'Speed Optimization']
    },
    {
        slug: 'local-seo',
        title: 'Local SEO Foundations',
        short: 'Technical optimization to help your business get discovered by customers searching in your city.',
        icon: '📍',
        benefits: ['Google Business Profile alignment', 'Local search schema', 'Keyword intent mapping', 'Location pages'],
        longDesc: 'Having a great website is useless if local customers cannot find it. We structure your website with clean technical SEO and correct location data so search engines understand exactly what you do and where you operate, bridging the gap between Google Search, Maps, and your business.',
        process: ['Technical Audit', 'Schema Integration', 'Content Optimization', 'Google Maps Alignment']
    },
    {
        slug: 'website-maintenance',
        title: 'Website Maintenance & Care',
        short: 'Ongoing technical support, security patching, and content updates handled by our team.',
        icon: '🛡️',
        benefits: ['Reliable cloud hosting', 'Security updates', 'Content changes', 'Direct support'],
        longDesc: 'A professional website requires ongoing attention to stay secure and fast. Our maintenance packages ensure your site remains technically sound and up-to-date with current web standards. We manage the technical headaches so you can focus entirely on running your business.',
        process: ['Uptime Monitoring', 'Security Patches', 'Performance Checks', 'Monthly Reports']
    }
];

const INDUSTRIES = [
    { 
        slug: 'real-estate', 
        name: 'Real Estate & Property', 
        icon: '🏢', 
        desc: 'Clean property showcases and reliable enquiry forms for brokers and agencies.',
        challenges: 'Real estate clients need immediate access to property details and availability. Slow, cluttered templates frustrate buyers and lose valuable leads.',
        solutions: 'We build professional property galleries, clear location data, and simple, working contact forms that send leads directly to your sales team.'
    },
    { 
        slug: 'restaurants', 
        name: 'Restaurants & Hospitality', 
        icon: '🍽️', 
        desc: 'Fast-loading menus, simple reservations, and clear location details.',
        challenges: 'Customers searching for a place to eat on their phones will abandon a website if they have to download a slow PDF menu to see prices.',
        solutions: 'We build fast, native HTML menus, integrate reliable reservation links, and ensure your phone number and address are immediately visible on mobile.'
    },
    { 
        slug: 'clinics', 
        name: 'Clinics & Dentists', 
        icon: '🩺', 
        desc: 'Professional practitioner profiles, treatment lists, and simple appointment requests.',
        challenges: 'Patients need to feel trust before booking a medical or aesthetic consultation. A broken or generic website makes a clinic look unprofessional.',
        solutions: 'We design clean layouts that highlight practitioner credentials, patient reviews, clear treatments, and secure appointment request forms.'
    },
    { 
        slug: 'salons', 
        name: 'Salons & Studios', 
        icon: '💇‍♀️', 
        desc: 'Visual portfolios, clear service menus, and easy booking pathways.',
        challenges: 'Clients often struggle to find accurate pricing or see real examples of a salon’s work on outdated websites.',
        solutions: 'We create visually appealing service menus, organized photo galleries, and clear booking buttons that simplify how new clients reach you.'
    }
];

const LOCATIONS = [
    { slug: 'gurugram', name: 'Gurugram', region: 'Haryana', desc: 'Professional web design for local businesses across Gurugram and the wider Delhi NCR region. Stand out in a highly competitive market.' },
    { slug: 'delhi-ncr', name: 'Delhi NCR', region: 'Delhi NCR', desc: 'From clinics in South Delhi to consultancies in Noida, we build websites engineered for local discovery in the National Capital Region.' },
    { slug: 'chandigarh', name: 'Chandigarh', region: 'Punjab', desc: 'Improving the digital standard for serious businesses across the Tricity with clean design and reliable local SEO.' },
    { slug: 'bengaluru', name: 'Bengaluru', region: 'Karnataka', desc: 'In India’s tech hub, your website must load fast and work flawlessly on mobile. We build reliable digital presences for startups and local services.' }
];

const PORTFOLIO = [
    {
        id: 'aurora-aesthetics',
        title: 'AURORA CLINIC',
        industry: 'Healthcare',
        type: 'Demo Project',
        summary: 'A clean, professional clinic layout designed to build patient trust and simplify consultation requests.',
        deliverables: ['Trust-Focused Layout', 'Appointment Flow', 'Service Menus'],
        challenge: 'Standard medical templates often look outdated and fail to render well on mobile devices.',
        solution: 'Engineered a calming layout emphasizing real credentials, easy-to-read treatments, and a one-click contact method.',
        ui: { hero: 'bg-stone-800', accent: 'bg-emerald-600', layout: 'grid-cols-2' },
        imageBg: 'from-stone-900/40 to-black'
    },
    {
        id: 'aarav-estates',
        title: 'AARAV PROPERTIES',
        industry: 'Real Estate',
        type: 'Concept Project',
        summary: 'A structured property showcase built to present commercial and residential listings clearly.',
        deliverables: ['Mobile Navigation', 'Property Inquiries', 'Local SEO Schema'],
        challenge: 'Real estate websites often bury contact details behind intrusive pop-ups.',
        solution: 'Designed a property gallery with immediate unit availability and straightforward lead capture forms.',
        ui: { hero: 'bg-neutral-800', accent: 'bg-amber-600', layout: 'grid-cols-3' },
        imageBg: 'from-amber-950/40 to-black'
    },
    {
        id: 'the-spice-room',
        title: 'THE SPICE ROOM',
        industry: 'Restaurants',
        type: 'Demo Website',
        summary: 'A fast culinary website featuring a readable mobile menu and clear directions.',
        deliverables: ['Mobile-Fast Menu', 'Table Reservation', 'Maps Integration'],
        challenge: 'Diners abandon slow PDF menu downloads on smartphones while on the move.',
        solution: 'Built a lightweight text-based menu that loads instantly on mobile networks, paired with clear booking links.',
        ui: { hero: 'bg-orange-900/50', accent: 'bg-orange-500', layout: 'grid-cols-2' },
        imageBg: 'from-orange-950/40 to-black'
    }
];

const BLOG = [
    {
        slug: 'why-local-websites-fail',
        title: "Why Local Business Websites Lose Enquiries (And How to Fix It)",
        category: 'Strategy',
        date: 'August 4, 2026',
        readTime: '4 min read',
        author: 'Velora Studio',
        summary: 'Learn why slow loading speeds, hidden phone numbers, and cluttered layouts quietly turn paying customers away.',
        content: `
            <p class="text-lg leading-loose text-velora-muted mb-6 text-pretty">When a customer searches for a local service, they want answers immediately. If your website takes too long to load or buries your phone number, they simply hit the back button and go to your competitor.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">1. Make Contacting You Effortless</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Every page must clearly guide the visitor toward an action: calling you, booking an appointment, or getting directions. Hiding your contact form at the bottom of an obscure page kills conversions.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">2. Stop Using PDF Menus and Price Lists</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">The vast majority of local searches happen on mobile phones. Forcing a user to download a 5MB PDF to see your prices or menu is a terrible user experience. Put your text on the actual website.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">3. Build Trust Immediately</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Customers need to know you are a legitimate, active business. Keep your address current, show real photos of your premises if possible, and ensure your site doesn't look broken on a smartphone.</p>
        `
    },
    {
        slug: 'website-cost-indian-businesses',
        title: "How Much Should a Website Cost for an Indian Local Business?",
        category: 'Pricing',
        date: 'August 10, 2026',
        readTime: '3 min read',
        author: 'Velora Studio',
        summary: 'A transparent breakdown of website pricing, what you actually pay for, and how to avoid being overcharged or scammed by cheap templates.',
        content: `
            <p class="text-lg leading-loose text-velora-muted mb-6 text-pretty">If you ask ten different agencies for a website quote in India, you will get ten wildly different numbers, ranging from ₹3,000 to ₹3,00,000. Here is what you are actually paying for.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">The Danger of the ₹3,000 Website</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Extremely cheap websites are almost always pirated themes or mass-produced templates. They are rarely optimized for Google, load slowly, and break easily. More importantly, the freelancer usually disappears when you need an update.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">The ₹15,000 - ₹40,000 Sweet Spot</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">For a standard local business (a clinic, salon, or restaurant), this is a reasonable budget. It allows a professional studio to properly plan the layout, write clean code, ensure it works perfectly on mobile, and set up basic local SEO.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">When to Pay More</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">You should only push into higher budgets (₹70,000+) if you require complex custom features like integrated inventory management, deep CRM connections, or a massive amount of custom content and pages.</p>
        `
    },
    {
        slug: 'local-seo-fundamentals',
        title: "Local SEO Basics: How to Get Found on Google Maps",
        category: 'SEO',
        date: 'August 12, 2026',
        readTime: '5 min read',
        author: 'Velora Studio',
        summary: 'Getting to the top of Google Maps isn\'t magic. It requires consistent data, a fast website, and genuine customer reviews.',
        content: `
            <p class="text-lg leading-loose text-velora-muted mb-6 text-pretty">When someone types "dentist near me" or "best cafe in Gurugram", Google decides who to show based on relevance, distance, and prominence. Here is how to fix your foundation.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">1. The NAP Consistency Rule</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">NAP stands for Name, Address, Phone Number. This data must be exactly the same on your website, your Google Business Profile, and your social media. If your website says "Shop 4" but Google says "Store 4", it hurts your rankings.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">2. Website Speed Matters</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Google heavily penalizes slow websites on mobile. If your site takes 6 seconds to load, Google is less likely to recommend it to a searcher. Clean code and compressed images are mandatory.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">3. Local Schema Markup</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Schema is hidden code that explicitly tells Google what your business is, what your opening hours are, and where you are located. It removes the guesswork for search engines.</p>
        `
    }
];

// ============================================================================ //
// 4. UI COMPONENT FUNCTIONS                                                    //
// ============================================================================ //

const escapeHTML = (str) => {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
};

function generateSchema(type, data = {}) {
    const base = {
        "@context": "https://schema.org",
        "url": data.url || CONFIG.baseUrl,
        "publisher": {
            "@type": "Organization",
            "name": "Velora Digital",
            "logo": { "@type": "ImageObject", "url": `${CONFIG.baseUrl}/logo.png` }
        }
    };

    if (type === 'Organization') {
        return {
            ...base,
            "@type": "ProfessionalService",
            "name": "Velora Digital",
            "description": "Professional Web Design & Local SEO Studio",
            "telephone": CONFIG.phone,
            "email": CONFIG.email,
            "address": { "@type": "PostalAddress", "addressCountry": "IN" },
            "priceRange": "₹₹₹"
        };
    }
    if (type === 'Service') {
        return { ...base, "@type": "Service", "name": data.name, "description": data.description, "provider": { "@type": "ProfessionalService", "name": "Velora Digital" } };
    }
    if (type === 'Article') {
        return { ...base, "@type": "Article", "headline": data.title, "description": data.description, "author": { "@type": "Organization", "name": data.author }, "datePublished": new Date(data.date).toISOString() };
    }
    if (type === 'BreadcrumbList') {
        return { ...base, "@type": "BreadcrumbList", "itemListElement": data.items.map((item, index) => ({ "@type": "ListItem", "position": index + 1, "name": item.title, "item": `${CONFIG.baseUrl}${item.link}` })) };
    }
    if (type === 'FAQPage') {
        return {
            ...base,
            "@type": "FAQPage",
            "mainEntity": data.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        };
    }
    return base;
}

function Header(currentPath) {
    const navItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="px-3 py-2 min-h-[44px] flex items-center rounded-md text-sm tracking-wide transition-all ${isActive ? 'text-velora-gold font-medium' : 'text-velora-muted hover:text-velora-text'}">${label}</a>`;
    };

    return `
    <header class="sticky top-0 z-50 nav-glass transition-all duration-300 border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <a href="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-velora-gold rounded-lg min-h-[44px]">
                    <img src="/logo.png" alt="Velora Digital Logo" width="36" height="36" class="w-9 h-9 rounded object-cover shadow-lg transition-transform duration-500 cubic-bezier group-hover:scale-105 invert dark:invert-0">
                    <span class="font-display font-bold text-xl tracking-tight text-velora-text transition-colors">
                        VELORA
                    </span>
                </a>
                <nav class="hidden xl:flex items-center gap-1">
                    ${navItem('/services', 'Services')}
                    ${navItem('/industries', 'Industries')}
                    ${navItem('/portfolio', 'Portfolio')}
                    ${navItem('/process', 'Process')}
                    ${navItem('/pricing', 'Pricing')}
                    ${navItem('/about', 'About')}
                    ${navItem('/blog', 'Journal')}
                    ${navItem('/locations', 'Locations')}
                </nav>
                <div class="hidden xl:flex items-center gap-4">
                    <button id="theme-toggle-btn" class="p-2 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-velora-muted hover:text-velora-text focus:outline-none focus:ring-2 focus:ring-velora-gold transition-colors" aria-label="Toggle Theme" aria-pressed="false">
                        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                    <a href="/contact" class="btn-luxury px-6 py-2.5 min-h-[44px] flex items-center rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-velora-button text-velora-buttonText focus:outline-none focus:ring-2 focus:ring-velora-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                        <span class="relative z-10">Get a Quote</span>
                    </a>
                </div>
                <div class="flex items-center xl:hidden">
                    <button id="theme-toggle-mobile-btn" class="p-2 mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-velora-muted hover:text-velora-text focus:outline-none focus:ring-2 focus:ring-velora-gold transition-colors" aria-label="Toggle Theme" aria-pressed="false">
                        <svg id="theme-toggle-light-icon-mob" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-toggle-dark-icon-mob" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                    <button id="mobile-menu-btn" aria-expanded="false" aria-label="Toggle Navigation Menu" class="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-velora-muted hover:text-velora-text focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden xl:hidden bg-velora-surface border-b border-velora-border px-4 pt-2 pb-6 space-y-1 shadow-2xl">
            <a href="/services" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Services</a>
            <a href="/industries" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Industries</a>
            <a href="/portfolio" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Portfolio</a>
            <a href="/process" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Process</a>
            <a href="/pricing" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Pricing</a>
            <a href="/about" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">About</a>
            <a href="/blog" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Journal</a>
            <a href="/locations" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Locations</a>
            <a href="/contact" class="btn-luxury block w-full text-center mt-6 px-5 py-3.5 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText">Get a Quote</a>
        </div>
    </header>`;
}

function Footer() {
    return `
    <footer class="relative bg-velora-bg pt-24 pb-24 sm:pb-12 mt-20 border-t border-velora-border overflow-hidden transition-colors duration-500">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-velora-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                <div class="lg:col-span-4 space-y-6">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-velora-gold flex items-center justify-center text-black font-bold font-display text-base">V</div>
                        <span class="font-display font-bold text-xl tracking-tight text-velora-text">VELORA</span>
                    </div>
                    <p class="text-sm text-velora-muted leading-loose max-w-sm text-pretty">
                        Professional websites and digital presence for serious local businesses. We build sites that load fast, get found, and drive actual enquiries.
                    </p>
                </div>
                <div class="lg:col-span-2">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text mb-6">Services</h4>
                    <ul class="space-y-2 text-sm text-velora-muted">
                        <li><a href="/services/website-design" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Web Design</a></li>
                        <li><a href="/services/local-seo" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Local SEO</a></li>
                        <li><a href="/services/website-maintenance" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Maintenance</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-2">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text mb-6">Industries</h4>
                    <ul class="space-y-2 text-sm text-velora-muted">
                        <li><a href="/industries/real-estate" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Real Estate</a></li>
                        <li><a href="/industries/restaurants" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Restaurants</a></li>
                        <li><a href="/industries/clinics" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Clinics</a></li>
                        <li><a href="/industries" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">View All &rarr;</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-4">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text mb-6">Company</h4>
                    <ul class="space-y-2 text-sm text-velora-muted">
                        <li><a href="/about" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">About Us</a></li>
                        <li><a href="/portfolio" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Portfolio</a></li>
                        <li><a href="/process" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Process</a></li>
                        <li><a href="/blog" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Journal</a></li>
                        <li><a href="/locations" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Locations</a></li>
                        <li><a href="/contact" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Contact</a></li>
                    </ul>
                    <div class="mt-8 p-4 rounded-xl bg-velora-faint border border-velora-borderStrong backdrop-blur-sm inline-block">
                        <div class="text-xs text-velora-muted tracking-wide">Based in India. Serving local businesses.</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-velora-border text-xs text-velora-muted">
                <div>&copy; ${new Date().getFullYear()} Velora Digital. <span class="ml-2 text-velora-muted opacity-75 tracking-wide">Straightforward Web Design.</span></div>
                <div class="flex items-center gap-2">
                    <a href="/privacy-policy" class="py-2 px-2 min-h-[44px] flex items-center hover:text-velora-text transition-colors focus:outline-none focus:text-velora-text">Privacy Policy</a>
                    <span aria-hidden="true">&bull;</span>
                    <a href="/terms" class="py-2 px-2 min-h-[44px] flex items-center hover:text-velora-text transition-colors focus:outline-none focus:text-velora-text">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;
}

function FloatingContact(currentPath = '') {
    let defaultMsg = 'Hello Velora Digital, I would like to request a website quote.';
    if (currentPath === '/pricing') defaultMsg = 'Hello Velora Digital, I am reviewing your pricing and would like to discuss a project.';

    return `
    <!-- Desktop Floating Contact -->
    <div class="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a href="/contact" class="flex items-center justify-center w-14 h-14 bg-velora-button hover:bg-velora-buttonHover text-velora-buttonText rounded-full transition-transform duration-500 cubic-bezier hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-velora-gold focus:ring-offset-2 focus:ring-offset-velora-bg" aria-label="Contact Us">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </a>
    </div>
    
    <!-- Mobile Contact Bar -->
    <div class="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-velora-bg/80 backdrop-blur-xl border-t border-velora-border pb-safe">
        <div class="flex items-center justify-between px-4 py-3 gap-3">
            <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(defaultMsg)}" class="flex-1 flex items-center justify-center gap-2 bg-velora-faint hover:bg-velora-faintHover border border-velora-borderStrong text-velora-text py-3 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">
                <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 2c-5.514 0-9.998 4.484-9.998 9.998 0 1.983.58 3.829 1.58 5.385l-1.613 5.888 6.042-1.583c1.492.81 3.208 1.282 5.011 1.282 5.514 0 10.027-4.484 10.027-9.998 0-5.514-4.513-9.998-10.049-9.998zm5.958 14.158c-.247.693-1.229 1.299-1.999 1.464-.528.113-1.218.204-3.535-.758-2.962-1.229-4.869-4.249-5.018-4.448-.148-.198-1.213-1.613-1.213-3.076 0-1.463.766-2.183 1.038-2.48.272-.297.593-.371.791-.371.198 0 .396.002.569.01.183.008.43-.069.673.515.247.585.841 2.052.915 2.201.074.148.124.321.025.519-.099.198-.148.321-.297.495-.148.173-.313.387-.446.52-.148.148-.303.309-.13.606.173.297.771 1.272 1.657 2.062 1.139 1.015 2.1 1.328 2.397 1.476.297.148.47.124.643-.074.173-.198.742-.866.94-1.163.198-.297.396-.247.668-.148.272.099 1.73.816 2.027.965.297.148.495.223.569.346.074.124.074.718-.173 1.411z"/></svg>
                WhatsApp
            </a>
            <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="btn-luxury flex-1 flex items-center justify-center gap-2 bg-velora-button text-velora-buttonText py-3 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-colors border-transparent">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call Us
            </a>
        </div>
    </div>`;
}

function Breadcrumbs(items) {
    if(!items || items.length === 0) return '';
    const links = items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return `
            ${idx > 0 ? '<span class="text-velora-muted opacity-50 px-2 text-[10px]" aria-hidden="true">/</span>' : ''}
            ${isLast ? `<span class="text-velora-gold font-medium uppercase tracking-[0.2em] text-[10px]" aria-current="page">${item.title}</span>` 
                     : `<a href="${item.link}" class="uppercase tracking-[0.2em] text-[10px] hover:text-velora-text transition-colors focus:outline-none focus:text-velora-text">${item.title}</a>`}
        `;
    }).join('');

    return `
    <nav aria-label="Breadcrumb" class="bg-velora-bg/80 border-b border-velora-border py-3 text-velora-muted backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-wrap gap-y-1">
            ${links}
        </div>
    </nav>`;
}

function BaseLayout(req, meta, bodyContent, scriptContent = '') {
    const canonical = `${CONFIG.baseUrl}${escapeHTML(req.path)}`;
    const schemaOrg = generateSchema('Organization');
    const pageSchema = meta.schema ? meta.schema : null;
    const breadcrumbSchema = meta.breadcrumbs ? generateSchema('BreadcrumbList', { items: meta.breadcrumbs }) : null;
    
    const schemas = [schemaOrg];
    if(pageSchema) schemas.push(pageSchema);
    if(breadcrumbSchema) schemas.push(breadcrumbSchema);

    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHTML(meta.title)}</title>
    <meta name="description" content="${escapeHTML(meta.description)}">
    <link rel="canonical" href="${canonical}">
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    
    <!-- Open Graph Metadata -->
    <meta property="og:site_name" content="Velora Digital">
    <meta property="og:type" content="${escapeHTML(meta.ogType || 'website')}">
    <meta property="og:title" content="${escapeHTML(meta.title)}">
    <meta property="og:description" content="${escapeHTML(meta.description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${CONFIG.baseUrl}/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHTML(meta.title)}">
    <meta name="twitter:description" content="${escapeHTML(meta.description)}">
    <meta name="twitter:image" content="${CONFIG.baseUrl}/og-image.jpg">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">

    <script>
        if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    </script>
    <style>
        :root {
            --color-bg: #f8fafc;
            --color-surface: #ffffff;
            --color-card: #f1f5f9;
            --color-card-hover: #e2e8f0;
            --color-border: rgba(0, 0, 0, 0.08);
            --color-border-strong: rgba(0, 0, 0, 0.15);
            --color-text-main: #0f172a;
            --color-text-muted: #475569;
            --color-faint: rgba(0, 0, 0, 0.04);
            --color-faint-hover: rgba(0, 0, 0, 0.08);
            --color-btn-bg: #0f172a;
            --color-btn-text: #ffffff;
            --color-btn-hover: #334155;
            --color-nav-glass: rgba(248, 250, 252, 0.95);
        }
        
        html.dark {
            --color-bg: #06080a;
            --color-surface: #0d1116;
            --color-card: #131820;
            --color-card-hover: #1a212c;
            --color-border: rgba(255, 255, 255, 0.08);
            --color-border-strong: rgba(255, 255, 255, 0.15);
            --color-text-main: #f1f5f9;
            --color-text-muted: #94a3b8;
            --color-faint: rgba(255, 255, 255, 0.05);
            --color-faint-hover: rgba(255, 255, 255, 0.1);
            --color-btn-bg: #ffffff;
            --color-btn-text: #000000;
            --color-btn-hover: #e2e8f0;
            --color-nav-glass: rgba(6, 8, 10, 0.85);
        }

        body { 
            background-color: var(--color-bg); 
            color: var(--color-text-main); 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            overflow-x: hidden; 
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .pb-safe { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
        @media (max-width: 639px) { body { padding-bottom: 80px; } }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--color-bg); }
        ::-webkit-scrollbar-thumb { background: var(--color-border-strong); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #d4af37; }
        
        ::selection { background-color: #d4af37; color: #000; }
        
        .gold-gradient-text { 
            background: linear-gradient(135deg, #d4af37 0%, #aa820a 100%); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
        }

        html:not(.dark) .text-velora-gold { color: #b8860b !important; }
        html:not(.dark) .hover\\:text-velora-gold:hover { color: #b8860b !important; }
        html:not(.dark) .group:hover .group-hover\\:text-velora-gold { color: #b8860b !important; }
        
        .premium-border, .bg-velora-surface { 
            border: 1px solid var(--color-border); 
            transition: all 0.3s ease;
        }
        .premium-border:hover {
            border-color: rgba(212,175,55,0.3);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }
        html.dark .premium-border:hover { box-shadow: 0 10px 30px -10px rgba(0,0,0,0.4); }
        
        .input-luxury { transition: all 0.3s ease; }
        .input-luxury:focus { border-color: #d4af37; box-shadow: 0 1px 0 0 #d4af37; background-color: var(--color-faint); }
        .nav-glass { background: var(--color-nav-glass); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid #d4af37; outline-offset: 2px; }
        
        .reveal { opacity: 0; transform: translateY(15px); transition: all 0.6s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
    </style>
    
    <script type="application/ld+json">
    ${JSON.stringify(schemas, null, 2)}
    </script>
</head>
<body class="min-h-screen flex flex-col overflow-x-hidden bg-velora-bg text-velora-text">
    ${FloatingContact(req.path)}
    ${Header(req.path)}
    ${meta.breadcrumbs ? Breadcrumbs(meta.breadcrumbs) : ''}
    
    <main class="flex-grow min-h-[70vh]">
        ${bodyContent}
    </main>
    
    ${Footer()}

    <script>
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn && menu) {
            btn.addEventListener('click', function() {
                menu.classList.toggle('hidden');
                btn.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
            });
        }

        const themeToggleBtnDesktop = document.getElementById('theme-toggle-btn');
        const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile-btn');

        function updateThemeIcons() {
            const isDark = document.documentElement.classList.contains('dark');
            ['desktop', 'mobile'].forEach(type => {
                const light = document.getElementById('theme-toggle-light-icon' + (type==='mobile'?'-mob':''));
                const dark = document.getElementById('theme-toggle-dark-icon' + (type==='mobile'?'-mob':''));
                const btn = type==='mobile' ? themeToggleBtnMobile : themeToggleBtnDesktop;
                if(light) light.classList.toggle('hidden', !isDark);
                if(dark) dark.classList.toggle('hidden', isDark);
                if(btn) btn.setAttribute('aria-pressed', isDark ? 'false' : 'true');
            });
        }

        function handleThemeToggle() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            updateThemeIcons();
        }

        if(themeToggleBtnDesktop) { updateThemeIcons(); themeToggleBtnDesktop.addEventListener('click', handleThemeToggle); }
        if(themeToggleBtnMobile) { themeToggleBtnMobile.addEventListener('click', handleThemeToggle); }

        document.addEventListener("DOMContentLoaded", function() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('active');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        ${scriptContent}
    </script>
</body>
</html>`;
}

// ============================================================================ //
// 5. PAGE ROUTES                                                               //
// ============================================================================ //

app.get('/', (req, res) => {
    const meta = {
        title: 'Velora Digital | Professional Web Design & Local SEO',
        description: 'Fast, professional websites and local SEO designed to build trust and drive enquiries for serious local businesses.',
    };

    const content = `
        <section class="relative pt-24 pb-28 md:pt-32 md:pb-32 overflow-hidden">
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-velora-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-4xl mx-auto text-center space-y-8 reveal">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-velora-faint border border-velora-borderStrong text-[10px] uppercase tracking-[0.2em] text-velora-gold font-bold backdrop-blur-md">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-gold"></span>
                        Professional Digital Studio
                    </div>
                    <h1 class="font-display text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-tight text-velora-text leading-[1.05] text-balance mx-auto">
                        Professional Websites That Build Trust and <span class="gold-gradient-text italic font-medium pr-2">Drive Local Enquiries.</span>
                    </h1>
                    <p class="text-lg sm:text-xl text-velora-muted leading-relaxed max-w-2xl mx-auto text-pretty">
                        We build fast, reliable websites and local SEO foundations for real estate, clinics, and restaurants that want to stop losing leads to competitors.
                    </p>
                    <div class="pt-6 flex flex-col items-center justify-center gap-5">
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
                            <a href="/contact" class="btn-luxury w-full sm:w-auto px-8 py-4 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">
                                Get a Quote
                            </a>
                            <a href="/portfolio" class="btn-luxury btn-luxury-dark w-full sm:w-auto px-8 py-4 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text hover:bg-velora-faint transition-colors focus:outline-none focus:ring-2 focus:ring-velora-text">
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>

                <div class="pt-16 border-t border-velora-border mt-20 max-w-4xl mx-auto text-center reveal" style="transition-delay: 100ms;">
                    <p class="text-[10px] uppercase tracking-[0.3em] text-velora-muted mb-6 text-balance">Trusted by serious local businesses</p>
                    <div class="flex flex-wrap justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-display tracking-[0.2em] uppercase text-velora-muted opacity-80">
                        <span>Real Estate</span>
                        <span class="text-velora-borderStrong">•</span>
                        <span>Restaurants</span>
                        <span class="text-velora-borderStrong">•</span>
                        <span>Clinics</span>
                        <span class="text-velora-borderStrong">•</span>
                        <span>Salons</span>
                    </div>
                </div>

                <div class="mt-24 max-w-5xl mx-auto relative reveal" style="transition-delay: 200ms;">
                    <div class="rounded-2xl border border-velora-borderStrong bg-velora-bg/80 p-2 shadow-xl backdrop-blur-xl">
                        <div class="flex items-center justify-between mb-2 px-3 py-2 border-b border-velora-border">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                <div class="ml-4 text-[10px] font-mono text-velora-muted bg-velora-faint px-3 py-1 rounded border border-velora-border hidden sm:block">
                                    veloradigital.in/concept/aarav-estates
                                </div>
                            </div>
                            <span class="text-[10px] font-mono text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">Fast Mobile Performance</span>
                        </div>
                        
                        <div class="bg-velora-bg rounded-xl border border-velora-border overflow-hidden">
                            <div class="flex justify-between items-center px-6 py-4 border-b border-velora-border">
                                <div class="text-sm font-display font-bold tracking-[0.2em] uppercase text-velora-text">AARAV PROPERTIES</div>
                                <div class="hidden sm:flex gap-4">
                                    <div class="h-1.5 w-12 bg-velora-borderStrong rounded"></div>
                                    <div class="h-1.5 w-12 bg-velora-borderStrong rounded"></div>
                                    <div class="h-1.5 w-12 bg-velora-borderStrong rounded"></div>
                                </div>
                                <div class="h-8 w-24 bg-velora-faintHover border border-velora-borderStrong rounded-full flex items-center justify-center">
                                    <div class="h-1.5 w-10 bg-velora-text rounded opacity-50"></div>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-8 p-8 sm:p-12">
                                <div class="space-y-6 flex flex-col justify-center">
                                    <div class="h-3 w-32 bg-velora-borderStrong rounded"></div>
                                    <div class="space-y-3">
                                        <div class="h-8 sm:h-12 w-full bg-velora-faintHover rounded-md"></div>
                                        <div class="h-8 sm:h-12 w-3/4 bg-velora-faintHover rounded-md"></div>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="h-2 w-full bg-velora-faint rounded"></div>
                                        <div class="h-2 w-5/6 bg-velora-faint rounded"></div>
                                    </div>
                                    <div class="flex gap-4 pt-4">
                                        <div class="h-10 w-32 bg-velora-button rounded-full"></div>
                                        <div class="h-10 w-10 bg-velora-faintHover rounded-full"></div>
                                    </div>
                                </div>
                                <div class="aspect-[4/3] rounded-xl bg-gradient-to-br from-velora-faintHover to-transparent border border-velora-border relative overflow-hidden">
                                    <div class="absolute bottom-4 left-4 right-4 h-16 bg-velora-bg/80 backdrop-blur-md rounded-lg border border-velora-borderStrong flex items-center px-4 gap-4">
                                        <div class="h-8 w-8 bg-velora-borderStrong rounded"></div>
                                        <div class="space-y-2 flex-1">
                                            <div class="h-2 w-1/2 bg-velora-borderStrong rounded"></div>
                                            <div class="h-1.5 w-1/3 bg-velora-borderStrong rounded opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 md:py-32 bg-velora-card">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-2xl mb-16 reveal">
                    <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Honest Demonstration</span>
                    <h2 class="font-display text-4xl sm:text-5xl font-bold text-velora-text mt-4 tracking-tight text-balance">Before vs. Velora Digital</h2>
                    <p class="text-base text-velora-muted mt-4 text-pretty leading-relaxed">Drag the slider to see how we upgrade cluttered, outdated templates into clean, fast-loading websites that customers trust.</p>
                </div>

                <div id="before-after-container" class="relative w-full max-w-5xl mx-auto h-[500px] rounded-2xl border border-velora-borderStrong overflow-hidden select-none shadow-lg reveal">
                    <div class="absolute inset-0 bg-velora-surface flex flex-col">
                        <div class="h-16 flex justify-between items-center px-8 border-b border-velora-border bg-velora-cardHover">
                            <div><h4 class="font-display text-lg font-bold text-velora-text tracking-[0.2em] uppercase">URBAN ROOTS STUDIO</h4></div>
                            <span class="text-[10px] uppercase tracking-[0.2em] text-velora-gold font-bold">Velora Website</span>
                        </div>
                        <div class="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1 content-center">
                            <div class="space-y-6">
                                <h3 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">Professional Styling.</h3>
                                <p class="text-sm text-velora-muted leading-relaxed text-pretty hidden sm:block">Book an appointment easily. View our clean service menu.</p>
                                <div class="inline-block px-6 py-3 bg-velora-button text-velora-buttonText text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">Book Session</div>
                            </div>
                            <div class="space-y-4 hidden sm:block">
                                <div class="flex justify-between items-center p-4 border border-velora-border rounded-xl bg-velora-faint">
                                    <span class="text-sm text-velora-text font-medium">Hair Styling</span>
                                    <span class="text-sm text-velora-muted">From ₹1,500</span>
                                </div>
                                <div class="flex justify-between items-center p-4 border border-velora-border rounded-xl bg-velora-faint">
                                    <span class="text-sm text-velora-text font-medium">Bridal Makeup</span>
                                    <span class="text-sm text-velora-muted">Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="before-overlay" class="absolute top-0 left-0 bottom-0 bg-[#e0e0e0] border-r-2 border-velora-gold flex flex-col overflow-hidden" style="width: 50%;">
                        <div class="w-[1000px] flex-1 flex flex-col">
                            <div class="h-16 flex justify-between items-center px-8 border-b border-gray-400 bg-gray-300">
                                <div><h4 class="text-xl font-bold text-blue-800 underline">Urban Roots Parlour</h4></div>
                                <span class="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold">Old Template</span>
                            </div>
                            <div class="p-10 flex-1 content-center text-center">
                                <h2 class="text-4xl text-red-600 font-bold mb-6">WELCOME TO OUR SITE!!!</h2>
                                <p class="text-xl text-black mb-6">We do hair and makeup for weddings.</p>
                                <marquee class="text-lg text-blue-700 font-bold bg-yellow-300 py-2 mb-8">*** CALL US FOR RATES ***</marquee>
                                <div class="inline-block p-4 border-4 border-dashed border-red-500 text-black">Click Here to download our 15MB PDF Menu</div>
                            </div>
                        </div>
                    </div>

                    <div id="slider-handle" tabindex="0" role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="Before and after comparison slider" class="absolute top-0 bottom-0 w-1 bg-velora-gold cursor-ew-resize flex items-center justify-center z-20 focus:outline-none focus:ring-4 focus:ring-velora-gold/50" style="left: 50%; touch-action: none;">
                        <div class="w-10 h-10 rounded-full bg-velora-surface border border-velora-gold text-velora-gold flex items-center justify-center shadow-lg" aria-hidden="true">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-4 4 4 4m8-8l4 4-4 4"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 md:py-32 border-t border-velora-border">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
                    <div class="max-w-2xl">
                        <h2 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">What We Do</h2>
                    </div>
                    <a href="/services" class="mt-6 md:mt-0 text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold hover:text-velora-text transition-colors focus:outline-none focus:ring-2 focus:ring-velora-gold rounded px-2 py-1 inline-flex min-h-[44px] items-center">View All Services &rarr;</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${SERVICES.map((s, idx) => `
                        <div class="premium-border bg-velora-surface p-8 rounded-2xl flex flex-col justify-between group reveal" style="transition-delay: ${idx * 100}ms;">
                            <div>
                                <div class="w-12 h-12 rounded-full bg-velora-faint flex items-center justify-center text-xl mb-6 border border-velora-borderStrong" aria-hidden="true">${s.icon}</div>
                                <h3 class="font-display text-2xl font-bold text-velora-text mb-4 group-hover:text-velora-gold transition-colors tracking-tight">${s.title}</h3>
                                <p class="text-sm text-velora-muted leading-relaxed mb-8 text-pretty">${s.short}</p>
                            </div>
                            <a href="/services/${s.slug}" class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text group-hover:text-velora-gold flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-velora-gold rounded px-2 py-1 inline-flex w-max min-h-[44px]">
                                Read More <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="py-32 relative overflow-hidden bg-velora-card">
            <div class="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10 reveal">
                <h2 class="font-display text-4xl sm:text-5xl font-bold text-velora-text text-balance tracking-tight">Stop Losing Leads to Competitors.</h2>
                <p class="text-lg text-velora-muted max-w-2xl mx-auto text-pretty leading-relaxed">Let's discuss how a fast, professional website can help your local business grow.</p>
                <div class="pt-6">
                    <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        Get a Free Quote
                    </a>
                </div>
            </div>
        </section>
    `;

    const script = `
        const container = document.getElementById('before-after-container');
        const overlay = document.getElementById('before-overlay');
        const handle = document.getElementById('slider-handle');
        if(container && overlay && handle) {
            let isDragging = false;
            let rafId = null;
            const updateSlider = (x) => {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    const rect = container.getBoundingClientRect();
                    let position = x - rect.left;
                    if (position < 0) position = 0;
                    if (position > rect.width) position = rect.width;
                    const percentage = (position / rect.width) * 100;
                    overlay.style.width = percentage + '%';
                    handle.style.left = percentage + '%';
                    handle.setAttribute('aria-valuenow', Math.round(percentage));
                });
            };
            container.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e.clientX); e.preventDefault(); });
            window.addEventListener('mouseup', () => { isDragging = false; });
            window.addEventListener('mousemove', (e) => { if (isDragging) updateSlider(e.clientX); });
            
            container.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e.touches[0].clientX); }, { passive: false });
            window.addEventListener('touchend', () => { isDragging = false; });
            window.addEventListener('touchmove', (e) => { if (isDragging) { e.preventDefault(); updateSlider(e.touches[0].clientX); } }, { passive: false });

            handle.addEventListener('keydown', (e) => {
                const rect = container.getBoundingClientRect();
                let currentPos = (parseFloat(handle.style.left || '50') / 100) * rect.width;
                const step = rect.width * 0.05;
                if (e.key === 'ArrowLeft') {
                    updateSlider(rect.left + currentPos - step);
                    e.preventDefault();
                } else if (e.key === 'ArrowRight') {
                    updateSlider(rect.left + currentPos + step);
                    e.preventDefault();
                }
            });
        }
    `;

    res.send(BaseLayout(req, meta, content, script));
});

app.get('/services', (req, res) => {
    const meta = {
        title: 'Web Design & Local SEO Services | Velora Digital',
        description: 'Professional web design, local SEO, and maintenance services for local businesses.',
        breadcrumbs: [{title: 'Home', link: '/services'}, {title: 'Services', link: '/services'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Our Services</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">We focus entirely on what local businesses actually need: fast websites that get found on Google and convince customers to contact you.</p>
            </div>
            <div class="space-y-8">
                ${SERVICES.map((s, idx) => `
                    <div class="premium-border bg-velora-surface rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-start justify-between gap-12 reveal" style="transition-delay: ${idx * 100}ms;">
                        <div class="max-w-2xl">
                            <div class="w-14 h-14 rounded-full bg-velora-faint flex items-center justify-center text-2xl mb-8 border border-velora-borderStrong" aria-hidden="true">${s.icon}</div>
                            <h2 class="font-display text-3xl font-bold text-velora-text mb-4 tracking-tight text-balance">${s.title}</h2>
                            <p class="text-base text-velora-muted leading-relaxed mb-8 text-pretty">${s.short}</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                ${s.benefits.map(b => `<div class="flex items-center gap-3 text-sm text-velora-muted"><span class="text-velora-gold text-lg leading-none" aria-hidden="true">•</span> ${b}</div>`).join('')}
                            </div>
                        </div>
                        <div class="w-full lg:w-auto flex-shrink-0">
                            <a href="/services/${s.slug}" class="btn-luxury btn-luxury-dark flex items-center justify-center w-full px-8 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text text-center focus:outline-none focus:ring-2 focus:ring-velora-gold">
                                Learn More
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/services/:slug', (req, res) => {
    const service = SERVICES.find(s => s.slug === req.params.slug);
    if (!service) return res.status(404).send(NotFoundLayout(req));

    const meta = {
        title: `${service.title} | Velora Digital`,
        description: service.short,
        schema: generateSchema('Service', { name: service.title, description: service.short }),
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Services', link: '/services'}, {title: service.title, link: `/services/${service.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Service Details</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 leading-tight text-balance tracking-tight">${service.title}</h1>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">${service.longDesc}</p>
            </header>
            
            <div class="space-y-16 reveal" style="transition-delay: 100ms;">
                <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-8 tracking-tight">What's Included</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        ${service.benefits.map(b => `
                            <div class="flex items-start gap-4">
                                <span class="text-velora-gold text-xl" aria-hidden="true">✔</span>
                                <span class="text-base text-velora-muted">${b}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-8 tracking-tight">How It Works</h2>
                    <ul class="space-y-8">
                        ${service.process.map((step, i) => `
                            <li class="flex items-start gap-6 pb-8 border-b border-velora-border last:border-0 last:pb-0">
                                <span class="text-sm font-mono text-velora-gold mt-1 block" aria-hidden="true">0${i+1}</span>
                                <span class="text-lg text-velora-text font-medium">${step}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="mt-20 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Get a Quote
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/industries', (req, res) => {
    const meta = {
        title: 'Industries We Serve | Velora Digital',
        description: 'Professional web design built for real estate, restaurants, clinics, and salons.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Industries', link: '/industries'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Industries We Help</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">We understand the specific problems local businesses face online, and we build websites that solve them.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${INDUSTRIES.map((i, idx) => `
                    <div class="premium-border bg-velora-surface p-10 rounded-3xl flex flex-col justify-between group reveal" style="transition-delay: ${idx * 100}ms;">
                        <div>
                            <div class="text-4xl mb-6" aria-hidden="true">${i.icon}</div>
                            <h2 class="font-display text-2xl font-bold text-velora-text group-hover:text-velora-gold transition-colors mb-4 tracking-tight">${i.name}</h2>
                            <p class="text-base text-velora-muted leading-relaxed mb-8 text-pretty">${i.desc}</p>
                        </div>
                        <a href="/industries/${i.slug}" class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text group-hover:text-velora-gold transition-colors flex items-center gap-2 min-h-[44px] focus:outline-none focus:text-velora-gold w-max">
                            Read More <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/industries/:slug', (req, res) => {
    const ind = INDUSTRIES.find(i => i.slug === req.params.slug);
    if (!ind) return res.status(404).send(NotFoundLayout(req));

    const meta = {
        title: `Web Design for ${ind.name} | Velora Digital`,
        description: `Professional website design and local SEO for ${ind.name}.`,
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Industries', link: '/industries'}, {title: ind.name, link: `/industries/${ind.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Industry Approach</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 leading-tight text-balance tracking-tight">${ind.name}</h1>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">${ind.desc}</p>
            </header>
            
            <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl space-y-12 reveal" style="transition-delay: 100ms;">
                <div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">The Problem</h2>
                    <p class="text-base text-velora-muted leading-relaxed text-pretty">${ind.challenges}</p>
                </div>
                <div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">How We Fix It</h2>
                    <p class="text-base text-velora-muted leading-relaxed text-pretty">${ind.solutions}</p>
                </div>
            </div>
            
            <div class="mt-20 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Get a Quote
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/locations', (req, res) => {
    const meta = {
        title: 'Locations | Velora Digital',
        description: 'Professional web design for businesses across Gurugram, Delhi NCR, Chandigarh, Bengaluru, and beyond.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Locations', link: '/locations'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Locations We Serve</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">We work with local businesses across India's major hubs to help them dominate their local search results.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${LOCATIONS.map((l, idx) => `
                    <div class="premium-border bg-velora-surface p-10 rounded-3xl flex flex-col justify-between group reveal" style="transition-delay: ${idx * 100}ms;">
                        <div>
                            <div class="text-[10px] font-mono text-velora-gold mb-4 uppercase tracking-[0.2em]">${l.region}</div>
                            <h2 class="font-display text-2xl font-bold text-velora-text group-hover:text-velora-gold transition-colors mb-4 tracking-tight">${l.name}</h2>
                            <p class="text-base text-velora-muted leading-relaxed mb-8 text-pretty">${l.desc}</p>
                        </div>
                        <a href="/locations/${l.slug}" class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text group-hover:text-velora-gold transition-colors flex items-center gap-2 min-h-[44px] focus:outline-none focus:text-velora-gold w-max">
                            Read More <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/locations/:slug', (req, res) => {
    const loc = LOCATIONS.find(l => l.slug === req.params.slug);
    if (!loc) return res.status(404).send(NotFoundLayout(req));

    const meta = {
        title: `Web Design in ${loc.name} | Velora Digital`,
        description: `Professional website design and local SEO for businesses in ${loc.name}.`,
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Locations', link: '/locations'}, {title: loc.name, link: `/locations/${loc.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Local Web Design</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 leading-tight text-balance tracking-tight">Web Design in ${loc.name}</h1>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">${loc.desc}</p>
            </header>
            
            <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl space-y-12 reveal" style="transition-delay: 100ms;">
                <div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">Why Local Strategy Matters</h2>
                    <p class="text-base text-velora-muted leading-relaxed text-pretty">
                        Fierce local competition in ${loc.name} requires a website that loads instantly and proves your business is legitimate. We build websites that connect seamlessly to how customers in your specific city search on Google Maps.
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-velora-border">
                    <div class="bg-velora-card p-6 rounded-2xl border border-velora-border">
                        <h3 class="text-sm font-bold text-velora-text mb-2">Google Maps Alignment</h3>
                        <p class="text-xs text-velora-muted leading-relaxed text-pretty">We structure your site data to match local search queries perfectly.</p>
                    </div>
                    <div class="bg-velora-card p-6 rounded-2xl border border-velora-border">
                        <h3 class="text-sm font-bold text-velora-text mb-2">Easy Contact Forms</h3>
                        <p class="text-xs text-velora-muted leading-relaxed text-pretty">Clear pathways for customers to call you or book a service.</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-20 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Get a Quote
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/portfolio', (req, res) => {
    const meta = {
        title: 'Portfolio | Velora Digital',
        description: 'Explore our web design concept projects demonstrating clean, fast, and functional websites.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Portfolio', link: '/portfolio'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Our Work</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">We showcase fully engineered demo projects to benchmark our quality. These are concept sites designed to show you exactly how we build.</p>
            </div>
            <div class="space-y-16">
                ${PORTFOLIO.map((p, idx) => `
                    <article class="premium-border bg-velora-surface rounded-3xl overflow-hidden reveal flex flex-col lg:flex-row" style="transition-delay: ${idx * 100}ms;">
                        <div class="lg:w-1/2 p-6 md:p-10 bg-velora-bg border-b lg:border-b-0 lg:border-r border-velora-border flex items-center justify-center min-h-[300px]">
                            <div class="w-full max-w-sm rounded-lg border border-velora-borderStrong bg-velora-surface shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                                <div class="h-6 bg-velora-cardHover border-b border-velora-border flex items-center px-3 gap-1.5" aria-hidden="true">
                                    <div class="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                    <div class="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                    <div class="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <div class="p-4" aria-hidden="true">
                                    <div class="h-2 w-24 bg-velora-borderStrong rounded mb-4"></div>
                                    <div class="h-24 w-full ${p.ui?.hero || 'bg-velora-faintHover'} rounded mb-4"></div>
                                    <div class="grid ${p.ui?.layout || 'grid-cols-2'} gap-2">
                                        <div class="h-16 ${p.ui?.accent || 'bg-velora-faintHover'} rounded"></div>
                                        <div class="h-16 bg-velora-faint rounded"></div>
                                        ${p.ui?.layout === 'grid-cols-3' ? '<div class="h-16 bg-velora-faint rounded"></div>' : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div class="flex items-center gap-3 mb-6">
                                <span class="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 bg-velora-faint text-velora-gold rounded-full border border-velora-borderStrong">${p.type}</span>
                                <span class="text-xs font-mono text-velora-muted">${p.industry}</span>
                            </div>
                            <h2 class="font-display text-3xl font-bold text-velora-text mb-6 tracking-tight">${p.title}</h2>
                            <p class="text-base text-velora-muted leading-relaxed mb-8 text-pretty">${p.summary}</p>
                            <div class="space-y-6 mb-8">
                                <div>
                                    <h3 class="text-[10px] font-bold uppercase text-velora-text tracking-[0.2em] mb-2">The Problem</h3>
                                    <p class="text-sm text-velora-muted leading-relaxed text-pretty">${p.challenge}</p>
                                </div>
                                <div>
                                    <h3 class="text-[10px] font-bold uppercase text-velora-text tracking-[0.2em] mb-2">How We Fixed It</h3>
                                    <p class="text-sm text-velora-muted leading-relaxed text-pretty">${p.solution}</p>
                                </div>
                            </div>
                            <div class="mt-auto pt-8 border-t border-velora-border">
                                <a href="/contact" class="text-[10px] uppercase tracking-[0.2em] font-bold text-velora-text hover:text-velora-gold transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-velora-gold rounded px-2 py-1 min-h-[44px]">
                                    Want Something Similar? Contact Us <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
            
            <div class="mt-20 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-[0_0_30px_rgba(212,175,55,0.15)] focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Start a Conversation
                </a>
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/process', (req, res) => {
    const meta = {
        title: 'Our Process | Velora Digital',
        description: 'Our simple, honest 5-step website design process for local businesses.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Process', link: '/process'}]
    };
    
    const steps = [
        { num: '01', name: 'Discovery', desc: 'We ask simple questions about your business, what your customers want, and what information they need before calling you.' },
        { num: '02', name: 'Planning', desc: 'We map out the website pages, ensuring the navigation is clear and your phone number/forms are easy to find.' },
        { num: '03', name: 'Design', desc: 'We create a clean, professional design that makes your business look trustworthy.' },
        { num: '04', name: 'Development', desc: 'We build the site with fast, clean code so it loads instantly on mobile networks.' },
        { num: '05', name: 'Launch & Support', desc: 'We launch the site, test all the contact forms, and provide ongoing support to keep it secure.' }
    ];

    const content = `
        <section class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-20 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">How We Work</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 text-balance tracking-tight">Our Process</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">No confusing jargon. Just a clear, structured way to get your website built on time.</p>
            </div>
            <div class="space-y-12">
                ${steps.map((s, idx) => `
                    <div class="flex flex-col sm:flex-row items-start gap-8 reveal" style="transition-delay: ${idx * 50}ms;">
                        <div class="text-3xl font-bold font-display text-velora-gold/20 select-none" aria-hidden="true">
                            ${s.num}
                        </div>
                        <div class="pb-12 border-b border-velora-border flex-1">
                            <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">${s.name}</h2>
                            <p class="text-base text-velora-muted leading-relaxed text-pretty">${s.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-16 reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Start a Project
                </a>
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/pricing', (req, res) => {
    const FAQS = [
        { q: "How long does it take to build a website?", a: "Most essential and professional websites are built and launched within 4 to 6 weeks. Larger projects vary based on size." },
        { q: "Do you use cheap templates?", a: "No. Every website we build is coded specifically for your business to ensure it loads fast and looks professional." },
        { q: "Is hosting included in the price?", a: "Our maintenance packages include reliable hosting, security updates, and regular changes. The initial build cost covers the design and development only." },
        { q: "What do you need from me to start?", a: "We need basic details about your business, photos of your work or location, and your current domain details if you have one." }
    ];

    const meta = {
        title: 'Pricing | Velora Digital',
        description: 'Clear, transparent pricing for professional local business websites.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Pricing', link: '/pricing'}],
        schema: generateSchema('FAQPage', { faqs: FAQS })
    };
    
    const f = (val) => `${CONFIG.currencySymbol}${val.toLocaleString('en-IN')}`;

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Website Pricing</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Transparent pricing. No hidden fees. We build websites that actually help your business grow.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                <div class="premium-border bg-velora-surface rounded-3xl p-10 flex flex-col reveal" style="transition-delay: 100ms;">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2 tracking-tight">Essential</h2>
                    <p class="text-sm text-velora-muted mb-8 h-10 text-pretty">A professional online presence.</p>
                    <div class="text-4xl font-bold font-display text-velora-text mb-10 tracking-tight">${f(CONFIG.pricing.essential)}</div>
                    <ul class="space-y-4 text-sm text-velora-muted flex-1">
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Up to 5 Custom Pages</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Mobile-Friendly Design</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Working Contact Forms</li>
                    </ul>
                    <a href="/contact?tier=essential" class="mt-10 flex items-center justify-center w-full py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text text-center hover:bg-velora-faint transition-all focus:outline-none focus:ring-2 focus:ring-velora-text">Select Essential</a>
                </div>
                
                <div class="relative bg-velora-surface border-2 border-velora-gold rounded-3xl p-10 flex flex-col shadow-lg reveal transform lg:-translate-y-4" style="transition-delay: 200ms;">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-velora-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full whitespace-nowrap">Recommended</div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2 tracking-tight">Professional</h2>
                    <p class="text-sm text-velora-muted mb-8 h-10 text-pretty">Built to rank on Google and get leads.</p>
                    <div class="text-4xl font-bold font-display text-velora-text mb-10 tracking-tight">${f(CONFIG.pricing.professional)}</div>
                    <ul class="space-y-4 text-sm text-velora-muted flex-1">
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Up to 10 Custom Pages</li>
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Local SEO Setup</li>
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Fast Loading Speeds</li>
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Click-to-Call Buttons</li>
                    </ul>
                    <a href="/contact?tier=professional" class="btn-luxury mt-10 flex items-center justify-center w-full py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText text-center shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">Select Professional</a>
                </div>
                
                <div class="premium-border bg-velora-surface rounded-3xl p-10 flex flex-col reveal" style="transition-delay: 300ms;">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2 tracking-tight">Custom</h2>
                    <p class="text-sm text-velora-muted mb-8 h-10 text-pretty">For larger businesses and custom features.</p>
                    <div class="text-4xl font-bold font-display text-velora-text mb-10 tracking-tight">Quote</div>
                    <ul class="space-y-4 text-sm text-velora-muted flex-1">
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Unlimited Pages</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Complex Features</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Priority Maintenance</li>
                    </ul>
                    <a href="/contact?tier=custom" class="mt-10 flex items-center justify-center w-full py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text text-center hover:bg-velora-faint transition-all focus:outline-none focus:ring-2 focus:ring-velora-text">Get a Custom Quote</a>
                </div>
            </div>
            
            <div class="border border-velora-borderStrong shadow-lg bg-velora-bg p-10 md:p-16 max-w-3xl mx-auto reveal mb-32 rounded-3xl">
                <h3 class="font-display text-3xl font-bold text-velora-text mb-4 text-center tracking-tight">Price Calculator</h3>
                <p class="text-sm text-velora-muted text-center mb-10 text-pretty">Adjust the slider to see how the number of pages affects the price.</p>
                <div class="space-y-10">
                    <div>
                        <div class="flex justify-between text-sm font-medium text-velora-text mb-4">
                            <label for="calc-pages">Number of Pages</label>
                            <span id="calc-page-val" class="text-velora-gold tracking-tight">5 Pages</span>
                        </div>
                        <input id="calc-pages" type="range" min="1" max="20" value="5" aria-valuemin="1" aria-valuemax="20" aria-valuenow="5" class="w-full h-2 bg-velora-faintHover rounded-lg appearance-none cursor-pointer accent-velora-gold min-h-[44px] p-0">
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label class="flex items-center gap-4 bg-velora-faint p-5 min-h-[44px] rounded-xl border border-velora-border cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input id="calc-seo" type="checkbox" checked class="w-5 h-5 accent-velora-gold focus:ring-velora-gold">
                            <span class="text-sm text-velora-text font-medium">Add Local SEO Setup</span>
                        </label>
                        <label class="flex items-center gap-4 bg-velora-faint p-5 min-h-[44px] rounded-xl border border-velora-border cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input id="calc-maint" type="checkbox" class="w-5 h-5 accent-velora-gold focus:ring-velora-gold">
                            <span class="text-sm text-velora-text font-medium">Add 1 Year Maintenance</span>
                        </label>
                    </div>
                    <div class="border-t border-velora-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div class="text-center sm:text-left">
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Estimated Cost</div>
                            <div id="calc-total" class="text-4xl font-bold font-display text-velora-gold tracking-tight" aria-live="polite">${f(CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon)}</div>
                        </div>
                        <a id="calc-cta" href="/contact?tier=custom&pages=5&seo=true&maint=false&est=${CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon}" class="btn-luxury flex items-center justify-center px-8 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText focus:outline-none focus:ring-2 focus:ring-velora-gold">Get This Quote</a>
                    </div>
                </div>
            </div>
            
            <div class="max-w-3xl mx-auto border-t border-velora-border pt-24 reveal">
                <h2 class="font-display text-3xl font-bold text-velora-text mb-12 text-center tracking-tight">Common Questions</h2>
                <div class="space-y-6">
                    ${FAQS.map((faq, i) => `
                        <details class="group premium-border bg-velora-surface rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-velora-text font-medium focus:outline-none focus:ring-2 focus:ring-velora-gold rounded-2xl">
                                ${faq.q}
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-opacity text-velora-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-opacity text-velora-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" /></svg>
                                </span>
                            </summary>
                            <p class="px-6 pb-6 pt-0 text-sm text-velora-muted leading-relaxed text-pretty border-t border-velora-borderStrong pt-4 mt-2">
                                ${faq.a}
                            </p>
                        </details>
                    `).join('')}
                </div>
            </div>
        </section>`;
        
    const script = `
        const pagesInput = document.getElementById('calc-pages');
        const pageVal = document.getElementById('calc-page-val');
        const seoInput = document.getElementById('calc-seo');
        const maintInput = document.getElementById('calc-maint');
        const totalVal = document.getElementById('calc-total');
        const calcCta = document.getElementById('calc-cta');
        
        let debounceTimer;

        if (pagesInput) {
            const calculate = () => {
                const pages = parseInt(pagesInput.value, 10);
                pageVal.innerText = pages + ' Pages';
                pagesInput.setAttribute('aria-valuenow', pages);
                
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(async () => {
                    try {
                        const res = await fetch('/api/estimate?pages=' + pages + '&seo=' + seoInput.checked + '&maint=' + maintInput.checked);
                        if (!res.ok) return;
                        const data = await res.json();
                        
                        totalVal.innerText = data.formatted;
                        if (calcCta) {
                            calcCta.href = '/contact?tier=custom&pages=' + pages + '&seo=' + seoInput.checked + '&maint=' + maintInput.checked + '&est=' + data.estimate;
                        }
                    } catch (err) {
                        // Keep visible state if API fails
                    }
                }, 100);
            };
            
            pagesInput.addEventListener('input', calculate);
            seoInput.addEventListener('change', calculate);
            maintInput.addEventListener('change', calculate);
        }
    `;

    res.send(BaseLayout(req, meta, content, script));
});

app.get('/about', (req, res) => {
    const meta = {
        title: 'About Us | Velora Digital',
        description: 'We are a small, capable web design studio in India focused on helping local businesses succeed online.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'About Us', link: '/about'}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-20 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold block mb-6">About Us</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance leading-tight tracking-tight">Honest Web Design for Real Businesses</h1>
                <p class="text-xl text-velora-muted mt-8 leading-relaxed text-pretty">
                    Most small businesses have two bad choices when they need a website. They either buy a cheap template that breaks and never gets found on Google, or they hire an expensive agency that talks in confusing jargon.
                </p>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">
                    We built Velora Digital to be the middle ground. We are a small, capable studio that delivers professional, fast-loading websites without the agency nonsense.
                </p>
            </header>
            
            <div class="space-y-12 reveal" style="transition-delay: 100ms;">
                <div class="premium-border bg-velora-surface p-10 md:p-16 rounded-3xl">
                    <h2 class="font-display text-3xl font-bold text-velora-text mb-8 tracking-tight">Our Rules</h2>
                    <ul class="space-y-8 text-base text-velora-muted">
                        <li class="pb-8 border-b border-velora-border"><strong class="text-velora-text block mb-2 font-display text-xl tracking-tight">No Fake Promises</strong> <span class="text-pretty">We won't guarantee you page 1 on Google by tomorrow, because it's impossible. We tell the truth about what it takes to win online.</span></li>
                        <li class="pb-8 border-b border-velora-border"><strong class="text-velora-text block mb-2 font-display text-xl tracking-tight">Built for Customers</strong> <span class="text-pretty">A website that looks pretty but doesn't have a visible phone number is useless. We design everything to get your phone ringing.</span></li>
                        <li><strong class="text-velora-text block mb-2 font-display text-xl tracking-tight">Technical Honesty</strong> <span class="text-pretty">We don't use heavy builders that slow down your site. We write clean code. You can test this exact website on Google PageSpeed Insights—we practice what we preach.</span></li>
                    </ul>
                </div>
            </div>
            
            <div class="mt-24 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Contact Our Team
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/blog', (req, res) => {
    const meta = {
        title: 'Blog & Advice | Velora Digital',
        description: 'Advice on website design, local SEO, and online marketing for local businesses.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Blog', link: '/blog'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text tracking-tight">Advice & Articles</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Practical advice for local business owners on how to fix their websites and get found online.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${BLOG.map((b, idx) => `
                    <article class="premium-border bg-velora-surface rounded-3xl p-10 hover:bg-velora-cardHover transition-colors flex flex-col justify-between reveal" style="transition-delay: ${idx * 100}ms;">
                        <div class="space-y-6">
                            <div class="flex items-center gap-3 text-[10px] text-velora-muted">
                                <span class="text-velora-gold font-bold uppercase tracking-[0.2em]">${b.category}</span>
                                <span>•</span>
                                <span>${b.readTime}</span>
                            </div>
                            <h2 class="font-display text-3xl font-bold text-velora-text leading-tight tracking-tight">
                                <a href="/blog/${b.slug}" class="hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold rounded px-1 -mx-1">${b.title}</a>
                            </h2>
                            <p class="text-base text-velora-muted leading-relaxed text-pretty">${b.summary}</p>
                        </div>
                        <div class="mt-12 pt-6 border-t border-velora-border flex items-center justify-between text-xs text-velora-muted">
                            <time datetime="${new Date(b.date).toISOString()}">${b.date}</time>
                            <a href="/blog/${b.slug}" class="font-bold uppercase tracking-[0.2em] text-[10px] text-velora-text hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold flex items-center min-h-[44px]">Read Post <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/blog/:slug', (req, res) => {
    const article = BLOG.find(b => b.slug === req.params.slug);
    if (!article) return res.status(404).send(NotFoundLayout(req));

    const meta = {
        title: `${article.title} | Velora Digital`,
        description: article.summary,
        ogType: 'article',
        schema: generateSchema('Article', article),
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Blog', link: '/blog'}, {title: 'Read', link: `/blog/${article.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 pb-12 border-b border-velora-border reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold block mb-6">${article.category}</span>
                <h1 class="font-display text-4xl sm:text-5xl font-bold text-velora-text leading-tight text-balance tracking-tight">${article.title}</h1>
                <div class="flex flex-wrap items-center gap-4 text-sm text-velora-muted mt-8">
                    <span>By <strong class="text-velora-text font-medium">${article.author}</strong></span>
                    <span>•</span>
                    <time datetime="${new Date(article.date).toISOString()}">${article.date}</time>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
            </header>
            
            <div class="prose prose-invert prose-lg max-w-none text-velora-text prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-velora-gold hover:prose-a:text-velora-light reveal" style="transition-delay: 100ms;">
                ${article.content}
            </div>
            
            <div class="mt-24 p-10 md:p-16 border border-velora-borderStrong shadow-lg bg-velora-bg rounded-3xl text-center reveal">
                <h3 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">Need Help With Your Website?</h3>
                <p class="text-base text-velora-muted mb-8 text-pretty">We can apply these fixes directly to your business to help you get more customers.</p>
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">Contact Us Today</a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/contact', (req, res) => {
    const meta = {
        title: 'Contact Us | Velora Digital',
        description: 'Get in touch for a website quote. We reply within one business day.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Contact', link: '/contact'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-20 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold block mb-6">Contact</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text tracking-tight">Get a Free Quote</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Send us a message or call us directly. We reply to all messages within 24 hours.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-6 reveal" style="transition-delay: 100ms;">
                    <h2 class="font-display text-xl font-bold text-velora-text border-b border-velora-border pb-4 mb-6 tracking-tight">Direct Contact</h2>
                    
                    <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="flex items-start gap-4 p-6 min-h-[44px] rounded-2xl bg-velora-surface border border-velora-border hover:border-velora-borderStrong transition-all group focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        <div class="text-2xl mt-1" aria-hidden="true">📞</div>
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Call Us</div>
                            <div class="text-base font-medium text-velora-text group-hover:text-velora-text transition-colors">${CONFIG.phone}</div>
                        </div>
                    </a>

                    <a href="mailto:${CONFIG.email}" class="flex items-start gap-4 p-6 min-h-[44px] rounded-2xl bg-velora-surface border border-velora-border hover:border-velora-borderStrong transition-all group focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        <div class="text-2xl mt-1" aria-hidden="true">✉️</div>
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Email</div>
                            <div class="text-base font-medium text-velora-text group-hover:text-velora-text transition-colors">${CONFIG.email}</div>
                        </div>
                    </a>

                    <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-4 p-6 min-h-[44px] rounded-2xl bg-velora-surface border border-velora-border hover:border-emerald-500/50 transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400">
                        <div class="text-2xl mt-1" aria-hidden="true">💬</div>
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">WhatsApp</div>
                            <div class="text-base font-medium text-velora-text group-hover:text-emerald-500 transition-colors">Chat With Us</div>
                        </div>
                    </a>
                </div>

                <div class="lg:col-span-8 border border-velora-borderStrong shadow-lg bg-velora-bg rounded-3xl p-8 sm:p-12 relative reveal" style="transition-delay: 200ms;">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-8 tracking-tight">Send Us a Message</h2>
                    <form id="contact-form" class="space-y-8" aria-live="polite">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="name" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Your Name *</label>
                                <input type="text" id="name" name="name" maxlength="100" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. John Doe">
                            </div>
                            <div>
                                <label for="business" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Business Name *</label>
                                <input type="text" id="business" name="business" maxlength="100" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. Acme Corp">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="email" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Email Address *</label>
                                <input type="email" id="email" name="email" maxlength="255" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. john@acme.com">
                            </div>
                            <div>
                                <label for="phone" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Phone Number</label>
                                <input type="tel" id="phone" name="phone" maxlength="20" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. +91 9876543210">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="industry" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Industry</label>
                                <select id="industry" name="industry" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury appearance-none">
                                    <option value="real-estate" class="bg-velora-surface text-velora-text">Real Estate</option>
                                    <option value="restaurant" class="bg-velora-surface text-velora-text">Restaurants / Hospitality</option>
                                    <option value="clinic" class="bg-velora-surface text-velora-text">Clinics / Dentists</option>
                                    <option value="salon" class="bg-velora-surface text-velora-text">Salons / Studios</option>
                                    <option value="other" class="bg-velora-surface text-velora-text" selected>Other</option>
                                </select>
                            </div>
                            <div>
                                <label for="budget" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Budget</label>
                                <select id="budget" name="budget" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury appearance-none">
                                    <option value="essential" class="bg-velora-surface text-velora-text">₹14,999 – Essential</option>
                                    <option value="professional" class="bg-velora-surface text-velora-text" selected>₹34,999 – Professional</option>
                                    <option value="custom" class="bg-velora-surface text-velora-text">₹69,999+ – Custom</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="message" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Project Details</label>
                            <textarea id="message" name="message" rows="3" maxlength="1500" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 text-base text-velora-text focus:outline-none input-luxury resize-none" placeholder="Tell us about what you need..."></textarea>
                        </div>

                        <div class="pt-4">
                            <button id="form-submit-btn" type="submit" class="btn-luxury w-full sm:w-auto flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-md focus:outline-none focus:ring-2 focus:ring-velora-gold">
                                Send Message
                            </button>
                        </div>
                        
                        <div id="form-error" class="hidden text-red-500 text-sm mt-4 font-medium" role="alert"></div>
                    </form>

                    <div id="form-success-message" class="hidden absolute inset-0 bg-velora-bg/95 backdrop-blur-md rounded-3xl flex-col items-center justify-center p-12 text-center z-10" role="alert">
                        <div class="w-16 h-16 bg-velora-faint border border-velora-borderStrong rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-velora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <h3 class="font-display text-3xl font-bold text-velora-text mb-4 tracking-tight">Message Sent</h3>
                        <p class="text-base text-velora-muted max-w-sm mx-auto mb-10 leading-relaxed text-pretty">Thank you for contacting Velora Digital. We will review your message and reply via email or phone within 24 hours.</p>
                        <button id="send-another-btn" type="button" class="px-8 py-3 min-h-[44px] bg-transparent border border-velora-borderStrong hover:border-velora-border transition-colors text-[10px] font-bold uppercase tracking-widest text-velora-text rounded-full focus:outline-none focus:ring-2 focus:ring-velora-text">Send Another</button>
                    </div>
                </div>
            </div>
        </section>`;

    const script = `
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('form-submit-btn');
        const errorDiv = document.getElementById('form-error');
        const successDiv = document.getElementById('form-success-message');
        const budgetSelect = document.getElementById('budget');
        const messageTextarea = document.getElementById('message');
        const sendAnotherBtn = document.getElementById('send-another-btn');

        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', () => {
                form.reset();
                successDiv.classList.add('hidden');
                successDiv.classList.remove('flex');
                form.classList.remove('hidden');
            });
        }

        if (budgetSelect && messageTextarea) {
            const urlParams = new URLSearchParams(window.location.search);
            const tier = urlParams.get('tier');
            const pages = urlParams.get('pages');
            const seo = urlParams.get('seo');
            const maint = urlParams.get('maint');
            const est = urlParams.get('est');

            if (tier) {
                for (let i = 0; i < budgetSelect.options.length; i++) {
                    if (budgetSelect.options[i].value === tier) {
                        budgetSelect.selectedIndex = i;
                        break;
                    }
                }
            }

            if (pages || est) {
                let summary = 'Estimated via calculator: ';
                if (pages) summary += pages + ' pages';
                if (seo === 'true') summary += ', SEO included';
                if (maint === 'true') summary += ', Maintenance included';
                if (est) summary += ', ~₹' + Number(est).toLocaleString('en-IN');
                messageTextarea.value = summary;
            }
        }

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';
            errorDiv.classList.add('hidden');

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if(response.ok) {
                    form.classList.add('hidden');
                    successDiv.classList.remove('hidden');
                    successDiv.classList.add('flex');
                } else {
                    throw new Error(result.error || 'Failed to send message.');
                }
            } catch (err) {
                const safeError = err instanceof Error ? err.message : String(err);
                errorDiv.innerText = safeError || 'Something went wrong. Please call or email us directly.';
                errorDiv.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Send Message';
            }
        });
    `;

    res.send(BaseLayout(req, meta, content, script));
});

app.get('/privacy-policy', (req, res) => {
    const meta = { title: 'Privacy Policy | Velora Digital', description: 'Privacy Policy and data handling procedures for Velora Digital.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Privacy Policy', link: '/privacy-policy'}] };
    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h1 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight">Privacy Policy</h1>
            <p class="text-sm text-velora-muted border-b border-velora-border pb-8">Last Updated: ${new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
            <div class="prose prose-invert prose-lg max-w-none text-velora-muted prose-headings:font-display prose-headings:font-bold prose-headings:text-velora-text prose-headings:tracking-tight">
                <p class="text-pretty">At Velora Digital, we respect your privacy. This privacy policy explains how we collect and use your information.</p>
                <h2>Information Collection</h2>
                <p class="text-pretty">We collect information that you voluntarily provide to us when asking for a quote, including name, business name, email address, and phone number.</p>
                <h2>Use of Information</h2>
                <p class="text-pretty">We only use this information to communicate with you about your project. We do not sell your data to third parties.</p>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/terms', (req, res) => {
    const meta = { title: 'Terms of Service | Velora Digital', description: 'Terms of Service for engaging with Velora Digital.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Terms of Service', link: '/terms'}] };
    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h1 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight">Terms of Service</h1>
            <p class="text-sm text-velora-muted border-b border-velora-border pb-8">Last Updated: ${new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
            <div class="prose prose-invert prose-lg max-w-none text-velora-muted prose-headings:font-display prose-headings:font-bold prose-headings:text-velora-text prose-headings:tracking-tight">
                <p class="text-pretty">These Terms of Service govern your use of the Velora Digital website and our services.</p>
                <h2>Project Agreements</h2>
                <p class="text-pretty">All web design projects are governed by a specific agreement signed before work begins, detailing the price, scope, and timeline.</p>
                <h2>Ownership</h2>
                <p class="text-pretty">Once the final payment is made, you own the website design and content, excluding third-party software licenses or proprietary codebases used to run the site.</p>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/sitemap.xml', (req, res) => {
    const urls = ['/', '/services', '/industries', '/locations', '/portfolio', '/process', '/pricing', '/about', '/blog', '/contact', '/privacy-policy', '/terms'];
    SERVICES.forEach(s => urls.push(`/services/${s.slug}`));
    INDUSTRIES.forEach(i => urls.push(`/industries/${i.slug}`));
    LOCATIONS.forEach(l => urls.push(`/locations/${l.slug}`));
    BLOG.forEach(b => urls.push(`/blog/${b.slug}`));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `    <url>\n        <loc>${CONFIG.baseUrl}${url}</loc>\n        <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>\n        <priority>${url === '/' ? '1.0' : '0.8'}</priority>\n    </url>\n`).join('')}</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(sitemap.trim());
});

app.get('/robots.txt', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${CONFIG.baseUrl}/sitemap.xml`);
});

// ============================================================================ //
// 6. API ROUTES                                                                //
// ============================================================================ //

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 15,
    message: { error: 'Too many requests. Please wait or call us directly.' },
    standardHeaders: true,
    legacyHeaders: false,
});

app.get('/api/estimate', (req, res) => {
    const pages = parseInt(req.query.pages, 10) || 5;
    const seo = req.query.seo === 'true';
    const maint = req.query.maint === 'true';

    let base = CONFIG.pricing.baseCalculator + (pages * CONFIG.pricing.perPage);
    if (seo) base += CONFIG.pricing.seoAddon;
    if (maint) base += CONFIG.pricing.maintenanceAddon;

    res.json({ 
        estimate: base, 
        formatted: `${CONFIG.currencySymbol}${base.toLocaleString('en-IN')}` 
    });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        const { name, business, phone, email, industry, budget, message } = req.body;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
            return res.status(400).json({ error: 'Valid name is required.' });
        }
        if (!business || typeof business !== 'string' || business.trim().length === 0 || business.length > 100) {
            return res.status(400).json({ error: 'Valid business name is required.' });
        }
        if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 255) {
            return res.status(400).json({ error: 'Valid email is required.' });
        }
        if (message && message.length > 1500) {
            return res.status(400).json({ error: 'Message exceeds allowed limit.' });
        }

        const sanitizedData = {
            name: escapeHTML(name.trim()),
            business: escapeHTML(business.trim()),
            phone: escapeHTML(phone ? phone.trim() : 'Not provided'),
            email: escapeHTML(email.trim()),
            industry: escapeHTML(industry || 'not-specified'),
            budget: escapeHTML(budget || 'not-specified'),
            message: escapeHTML(message ? message.trim() : 'No details provided'),
            timestamp: new Date().toISOString()
        };

        if (process.env.WEB3FORMS_ACCESS_KEY) {
            const web3response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                },
                body: JSON.stringify({
                    access_key: process.env.WEB3FORMS_ACCESS_KEY,
                    name: sanitizedData.name,
                    email: sanitizedData.email,
                    subject: `New Lead: ${sanitizedData.business}`,
                    from_name: 'Velora Digital Studio',
                    replyto: sanitizedData.email !== 'Not provided' ? sanitizedData.email : undefined,
                    message: `Name: ${sanitizedData.name}\nBusiness: ${sanitizedData.business}\nPhone: ${sanitizedData.phone}\nEmail: ${sanitizedData.email}\nIndustry: ${sanitizedData.industry}\nBudget: ${sanitizedData.budget}\n\nProject Details:\n${sanitizedData.message}`
                })
            });

            const responseText = await web3response.text();
            let result;
            
            try {
                result = JSON.parse(responseText);
            } catch (e) {
                console.error('[Web3Forms WAF Block]:', responseText.substring(0, 200));
                throw new Error('The secure gateway blocked the request. Please call the studio directly.');
            }

            if (!web3response.ok || !result.success) {
                console.error('[Web3Forms Error Details]:', result);
                throw new Error('Email service unavailable.');
            }
            
            console.log(`[API/Contact] Lead successfully routed via Web3Forms for: ${sanitizedData.business}`);
        } else {
            console.warn('[API/Contact] WEB3FORMS_ACCESS_KEY missing! Simulating success for lead:', sanitizedData.email);
        }

        return res.status(200).json({ success: true, message: 'Message sent.' });
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error('[API/Contact] Catch Block Error:', errorMsg);
        return res.status(500).json({ error: 'Server could not process the request. Please call us directly.' });
    }
});

// ============================================================================ //
// 7. ERROR HANDLERS                                                            //
// ============================================================================ //

function NotFoundLayout(req) {
    const meta = { title: '404 - Page Not Found | Velora Digital', description: 'The requested page could not be found.' };
    const content = `
        <section class="py-32 max-w-3xl mx-auto px-4 text-center">
            <h1 class="font-display text-[8rem] font-bold text-velora-gold mb-2 leading-none">404</h1>
            <h2 class="font-display text-3xl font-bold text-velora-text mb-6 tracking-tight">Page Not Found</h2>
            <p class="text-lg text-velora-muted mb-12 text-pretty">The page you are looking for has moved or does not exist.</p>
            <a href="/" class="btn-luxury inline-flex items-center justify-center px-10 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text hover:bg-velora-faint transition-colors focus:outline-none focus:ring-2 focus:ring-velora-text">
                Return Home
            </a>
        </section>`;
    return BaseLayout(req, meta, content);
}

app.use((req, res) => { res.status(404).send(NotFoundLayout(req)); });

app.use((err, req, res, next) => {
    console.error('[Server Error]:', err);
    const meta = { title: '500 - Server Error | Velora Digital', description: 'An unexpected error occurred.' };
    const content = `
        <section class="py-32 max-w-3xl mx-auto px-4 text-center">
            <h1 class="font-display text-[8rem] font-bold text-velora-gold mb-2 leading-none">500</h1>
            <h2 class="font-display text-3xl font-bold text-velora-text mb-6 tracking-tight">Something Went Wrong</h2>
            <p class="text-lg text-velora-muted mb-12 text-pretty">We are currently experiencing technical difficulties. Please try again soon.</p>
            <a href="/" class="btn-luxury inline-flex items-center justify-center px-10 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text hover:bg-velora-faint transition-colors focus:outline-none focus:ring-2 focus:ring-velora-text">
                Return Home
            </a>
        </section>`;
    res.status(500).send(BaseLayout(req, meta, content));
});

// ============================================================================ //
// 8. SERVER INITIALIZATION                                                     //
// ============================================================================ //
app.listen(PORT, () => { 
    console.log(`Velora Digital SSR running at http://localhost:${PORT}`); 
});