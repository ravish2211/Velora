// ============================================================================ //
// 1. IMPORTS & SETUP                                                           //
// ============================================================================ //
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { Resend } = require('resend'); // Ensure Resend SDK is imported

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3000;


// ============================================================================ //
// 2. MIDDLEWARE CONFIG                                                         //
// ============================================================================ //

// Basic HTTP security headers. 
app.use(helmet({
    contentSecurityPolicy: false,
}));

// Gzip compression for faster PageSpeed scores
app.use(compression());

// Serve static assets (logos, images, etc.) from the /public directory
app.use(express.static('public'));

// Parse JSON and URL-encoded bodies for the Contact Form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ============================================================================ //
// 3. CONSTANTS & DATA                                                          //
// ============================================================================ //
const CONFIG = {
    baseUrl: process.env.BASE_URL || 'https://veloradigital.in',
    phone: process.env.CONTACT_PHONE || '+91 73037 33735',
    whatsapp: process.env.CONTACT_WHATSAPP || '917303733735',
    email: process.env.CONTACT_EMAIL || 'ravishnoob123@gmail.com', // Displayed on the frontend
    systemEmail: process.env.SYSTEM_EMAIL || 'jyotimalhotraf9@gmail.com', // Verified email for Resend routing
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
        title: 'Digital Architecture & Design',
        short: 'Bespoke, high-performance digital environments built to elevate your brand equity and drive elite enquiries.',
        icon: '💻',
        benefits: ['Mobile-first layout architecture', 'Frictionless contact pathways', 'Optimized performance', 'Clean, modern typography'],
        longDesc: 'Your website is the ultimate digital reflection of your brand’s authority. We build fast, modern experiences designed to command respect instantly. By focusing on semantic code, conversion-oriented user experience, and accessible design, we ensure your digital storefront works exactly as intended.',
        process: ['Wireframing & UX Planning', 'High-Fidelity UI Design', 'Frontend Engineering', 'Performance Optimization']
    },
    {
        slug: 'local-seo',
        title: 'Search & Authority Positioning',
        short: 'Establish a dominant search foundation so high-intent clientele discover your brand effortlessly.',
        icon: '📍',
        benefits: ['Google Business Profile alignment', 'Structured schema for local search', 'Search intent mapping', 'Targeted geographic pages'],
        longDesc: 'Visibility in the luxury and premium sectors is critical. We structure your website with clean technical SEO, correct schema markup, and geographic context so search engines clearly understand your authority. We bridge the gap between Google Search, Google Maps, and your website.',
        process: ['Technical Auditing', 'Schema Markup Integration', 'On-Page Content Optimization', 'Local Search Alignment']
    },
    {
        slug: 'website-maintenance',
        title: 'Studio Maintenance & Care',
        short: 'Complete technical management, proactive security, and refined content updates handled exclusively by our studio.',
        icon: '🛡️',
        benefits: ['High-performance cloud hosting', 'Proactive security patching', 'Content updates', 'Dedicated support channels'],
        longDesc: 'A premium digital asset requires meticulous ongoing care. Our maintenance portfolios ensure your site remains secure, fast, and seamlessly aligned with the latest web standards. We manage the technical infrastructure so you can focus entirely on your clientele.',
        process: ['Uptime Monitoring', 'Security Patching', 'Asset Optimization', 'Monthly Health Reports']
    }
];

const INDUSTRIES = [
    { 
        slug: 'real-estate', 
        name: 'Elite Real Estate', 
        icon: '🏢', 
        desc: 'Sophisticated property showcases and private enquiry forms for luxury buyers and sellers.',
        challenges: 'Premium real estate clientele demand immediate visual luxury. Cluttered, slow templates instantly erode property value and lose high-net-worth enquiries.',
        solutions: 'We engineer editorial-style property galleries, embed seamless location data, and create frictionless, elegant lead capture forms that connect directly to your brokers.'
    },
    { 
        slug: 'restaurants', 
        name: 'Fine Dining & Hospitality', 
        icon: '🍽️', 
        desc: 'Immersive culinary presentations, seamless reservations, and direct concierge pathways.',
        challenges: 'Patrons searching for dining experiences on mobile abandon slow websites and cumbersome PDF menus.',
        solutions: 'We engineer lightweight, native HTML menus, integrate flawless reservation systems, and ensure your ambiance translates perfectly to the digital screen.'
    },
    { 
        slug: 'clinics', 
        name: 'Healthcare & Aesthetics', 
        icon: '🩺', 
        desc: 'Authority-driven practitioner profiles, treatment overviews, and discreet consultation bookings.',
        challenges: 'Patients demand absolute trust and professionalism before booking medical or aesthetic consultations. Generic templates fail to convey clinical excellence.',
        solutions: 'We emphasize practitioner credentials, refined patient testimonials, clear treatment outlines, and highly secure, elegant appointment request systems.'
    },
    { 
        slug: 'salons', 
        name: 'Boutique Salons & Studios', 
        icon: '💇‍♀️', 
        desc: 'Curated visual portfolios, transparent service menus, and frictionless appointment requests.',
        challenges: 'Discerning clients often struggle to find clear service tiers or aesthetic portfolios, resulting in lost bookings to competitors.',
        solutions: 'We create beautiful visual service menus, high-end portfolio galleries, and intuitive booking pathways that streamline your exclusive customer intake.'
    }
];

const LOCATIONS = [
    { slug: 'gurugram', name: 'Gurugram', region: 'Haryana', desc: 'We design bespoke websites for brands serving elite clientele across Gurugram and the wider Delhi NCR region. Command authority in a highly competitive corporate landscape.' },
    { slug: 'delhi-ncr', name: 'Delhi NCR', region: 'Delhi NCR', desc: 'From luxury clinics in South Delhi to high-end consultancies in Noida, we build digital presences engineered for absolute dominance in the National Capital Region.' },
    { slug: 'chandigarh', name: 'Chandigarh', region: 'Punjab', desc: 'Elevating the digital standard for premium brands across the Tricity. We combine luxury aesthetics with robust, targeted search strategies.' },
    { slug: 'bengaluru', name: 'Bengaluru', region: 'Karnataka', desc: 'In India’s tech capital, your digital presence must perform flawlessly. We build fast, scalable architecture for startups, boutique hospitality, and professional services.' }
];

const PORTFOLIO = [
    {
        id: 'aarav-estates',
        title: 'AARAV ESTATES',
        industry: 'Real Estate Consultancy',
        type: 'Concept Project',
        summary: 'A pristine, high-trust property showcase built exclusively for luxury apartments and commercial land consulting.',
        deliverables: ['Bespoke Mobile Architecture', 'Private Property Inquiries', 'Local SEO Schema'],
        challenge: 'Standard real estate templates look cluttered and fail to convey luxury property standards.',
        solution: 'Designed an elegant property gallery with immediate unit availability query functionality and premium typography.',
        ui: { hero: 'bg-neutral-800', accent: 'bg-amber-600', layout: 'grid-cols-3' },
        imageBg: 'from-amber-950/40 to-black'
    },
    {
        id: 'the-spice-room',
        title: 'THE SPICE ROOM',
        industry: 'Modern Dining',
        type: 'Demo Website',
        summary: 'A rich culinary digital environment featuring an instant native menu, banquet booking, and clear directions.',
        deliverables: ['Mobile-Fast Native Menu', 'Table Reservation Flow', 'Maps Integration'],
        challenge: 'Diners abandon slow PDF menu downloads on smartphones during peak hours.',
        solution: 'Built a lightweight HTML menu loadable instantly on mobile networks, paired with an integrated table booking flow.',
        ui: { hero: 'bg-orange-900/50', accent: 'bg-orange-500', layout: 'grid-cols-2' },
        imageBg: 'from-orange-950/40 to-black'
    }
];

const BLOG = [
    {
        slug: 'why-local-websites-fail',
        title: "The Architecture of Trust: Why Generic Websites Lose High-Value Clientele",
        category: 'Digital Strategy',
        date: 'August 4, 2026',
        readTime: '4 min read',
        author: 'Velora Studio',
        summary: 'Learn why slow loading speeds, hidden contact details, and cluttered layouts quietly turn discerning customers away.',
        content: `
            <p class="text-lg leading-loose text-velora-muted mb-6 text-pretty">When a premium customer searches for a service, they demand instant clarity and aesthetic authority. If your website takes too long to load or buries contact details, they simply exit and select a competitor whose digital presence reflects greater competence.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">1. Elegant Contact Architecture</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Every page must gently guide the visitor toward a deliberate action: commissioning a project, booking a consultation, or requesting an assessment. Making these pathways frictionless is the cornerstone of high-end conversion optimization.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">2. Flawless Mobile Performance</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">The vast majority of searches happen on smartphones. Unoptimized images and slow, templated code result in high bounce rates. Lean, bespoke engineering is absolutely essential for keeping visitors engaged.</p>
            <h3 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight text-balance">3. Signals of Authority</h3>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Clients invest in brands they trust. If a website looks mass-produced, it erodes pricing power and credibility. Refined typography, authentic imagery, and highly deliberate whitespace build the silent authority required for a user to initiate high-value contact.</p>
        `
    }
];


// ============================================================================ //
// 4. UI COMPONENT FUNCTIONS                                                    //
// ============================================================================ //

// XSS Escape Helper
const escapeHTML = (str) => {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
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
            "description": "Premium Web Design & Digital Architecture Studio",
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
        return { ...base, "@type": "Article", "headline": data.title, "description": data.description, "author": { "@type": "Person", "name": data.author }, "datePublished": new Date(data.date).toISOString() };
    }
    if (type === 'BreadcrumbList') {
        return { ...base, "@type": "BreadcrumbList", "itemListElement": data.items.map((item, index) => ({ "@type": "ListItem", "position": index + 1, "name": item.title, "item": `${CONFIG.baseUrl}${item.link}` })) };
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
                    <img src="/logo.png" alt="Velora Digital Logo" class="w-9 h-9 rounded object-cover shadow-lg transition-transform duration-500 cubic-bezier group-hover:scale-105 invert dark:invert-0">
                    <span class="font-display font-bold text-xl tracking-tight text-velora-text transition-colors">
                        VELORA
                    </span>
                </a>
                <nav class="hidden lg:flex items-center gap-1">
                    ${navItem('/services', 'Services')}
                    ${navItem('/industries', 'Industries')}
                    ${navItem('/portfolio', 'Portfolio')}
                    ${navItem('/process', 'Methodology')}
                    ${navItem('/pricing', 'Pricing')}
                    ${navItem('/about', 'Studio')}
                    ${navItem('/blog', 'Journal')}
                    ${navItem('/locations', 'Markets')}
                </nav>
                <div class="hidden lg:flex items-center gap-4">
                    <button id="theme-toggle-btn" class="p-2 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-velora-muted hover:text-velora-text focus:outline-none focus:ring-2 focus:ring-velora-gold transition-colors" aria-label="Toggle Theme" aria-pressed="false">
                        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                    <a href="/contact" class="btn-luxury px-6 py-2.5 min-h-[44px] flex items-center rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-velora-button text-velora-buttonText focus:outline-none focus:ring-2 focus:ring-velora-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                        <span class="relative z-10">Commission a Project</span>
                    </a>
                </div>
                <div class="flex items-center lg:hidden">
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
        <div id="mobile-menu" class="hidden lg:hidden bg-velora-surface border-b border-velora-border px-4 pt-2 pb-6 space-y-1 shadow-2xl">
            <a href="/services" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Services</a>
            <a href="/industries" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Industries</a>
            <a href="/portfolio" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Portfolio</a>
            <a href="/process" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Methodology</a>
            <a href="/pricing" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Pricing</a>
            <a href="/about" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Studio</a>
            <a href="/blog" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Journal</a>
            <a href="/locations" class="block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium text-velora-muted hover:text-velora-text hover:bg-velora-faint transition-colors">Markets</a>
            <a href="/contact" class="btn-luxury block w-full text-center mt-6 px-5 py-3.5 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText">Commission a Project</a>
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
                        Bespoke digital architecture designed to command authority, build absolute credibility, and convert passive searches into elite clientele.
                    </p>
                </div>
                <div class="lg:col-span-2">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text mb-6">Capabilities</h4>
                    <ul class="space-y-2 text-sm text-velora-muted">
                        <li><a href="/services/website-design" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Digital Architecture</a></li>
                        <li><a href="/services/local-seo" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Search Positioning</a></li>
                        <li><a href="/services/website-maintenance" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Studio Maintenance</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-2">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text mb-6">Elite Sectors</h4>
                    <ul class="space-y-2 text-sm text-velora-muted">
                        <li><a href="/industries/real-estate" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Real Estate</a></li>
                        <li><a href="/industries/restaurants" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Hospitality</a></li>
                        <li><a href="/industries/clinics" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Healthcare</a></li>
                        <li><a href="/industries" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">View All &rarr;</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-4">
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text mb-6">The Studio</h4>
                    <ul class="space-y-2 text-sm text-velora-muted">
                        <li><a href="/about" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">About Velora</a></li>
                        <li><a href="/portfolio" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Concept Portfolio</a></li>
                        <li><a href="/process" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Methodology</a></li>
                        <li><a href="/blog" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Journal</a></li>
                        <li><a href="/locations" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Markets</a></li>
                        <li><a href="/contact" class="block py-2 sm:inline sm:py-0 min-h-[44px] sm:min-h-0 hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold">Request Consultation</a></li>
                    </ul>
                    <div class="mt-8 p-4 rounded-xl bg-velora-faint border border-velora-borderStrong backdrop-blur-sm inline-block">
                        <div class="text-xs text-velora-muted tracking-wide">Based in India. Serving globally.</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-velora-border text-xs text-velora-muted">
                <div>&copy; ${new Date().getFullYear()} Velora Studio. Honest by design. <span class="ml-2 text-velora-muted opacity-75 tracking-wide">Made with &hearts; by Ravish</span></div>
                <div class="flex items-center gap-2">
                    <a href="/privacy-policy" class="py-2 px-2 min-h-[44px] flex items-center hover:text-velora-text transition-colors focus:outline-none focus:text-velora-text">Privacy Policy</a>
                    <span aria-hidden="true">&bull;</span>
                    <a href="/terms" class="py-2 px-2 min-h-[44px] flex items-center hover:text-velora-text transition-colors focus:outline-none focus:text-velora-text">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;
}

function FloatingContact() {
    return `
    <!-- Desktop Floating Concierge -->
    <div class="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a href="/contact" class="flex items-center justify-center w-14 h-14 bg-velora-button hover:bg-velora-buttonHover text-velora-buttonText rounded-full transition-transform duration-500 cubic-bezier hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-velora-gold focus:ring-offset-2 focus:ring-offset-velora-bg" aria-label="Request Consultation">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </a>
    </div>
    
    <!-- Sleek Mobile Concierge Bar -->
    <div class="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-velora-bg/80 backdrop-blur-xl border-t border-velora-border pb-safe">
        <div class="flex items-center justify-between px-4 py-3 gap-3">
            <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hello Velora Digital, I would like to request a consultation.')}" class="flex-1 flex items-center justify-center gap-2 bg-velora-faint hover:bg-velora-faintHover border border-velora-borderStrong text-velora-text py-3 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">
                <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 2c-5.514 0-9.998 4.484-9.998 9.998 0 1.983.58 3.829 1.58 5.385l-1.613 5.888 6.042-1.583c1.492.81 3.208 1.282 5.011 1.282 5.514 0 10.027-4.484 10.027-9.998 0-5.514-4.513-9.998-10.049-9.998zm5.958 14.158c-.247.693-1.229 1.299-1.999 1.464-.528.113-1.218.204-3.535-.758-2.962-1.229-4.869-4.249-5.018-4.448-.148-.198-1.213-1.613-1.213-3.076 0-1.463.766-2.183 1.038-2.48.272-.297.593-.371.791-.371.198 0 .396.002.569.01.183.008.43-.069.673.515.247.585.841 2.052.915 2.201.074.148.124.321.025.519-.099.198-.148.321-.297.495-.148.173-.313.387-.446.52-.148.148-.303.309-.13.606.173.297.771 1.272 1.657 2.062 1.139 1.015 2.1 1.328 2.397 1.476.297.148.47.124.643-.074.173-.198.742-.866.94-1.163.198-.297.396-.247.668-.148.272.099 1.73.816 2.027.965.297.148.495.223.569.346.074.124.074.718-.173 1.411z"/></svg>
                Private Chat
            </a>
            <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="btn-luxury flex-1 flex items-center justify-center gap-2 bg-velora-button text-velora-buttonText py-3 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-colors border-transparent">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call Studio
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
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <link rel="canonical" href="${canonical}">
    
    <!-- Favicons -->
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    
    <!-- Open Graph Metadata -->
    <meta property="og:site_name" content="Velora Digital">
    <meta property="og:type" content="${meta.ogType || 'website'}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${CONFIG.baseUrl}/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <!-- Twitter Card Metadata -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${CONFIG.baseUrl}/og-image.jpg">
    <meta name="twitter:site" content="@VeloraDigital">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">

    <script>
        // Init theme immediately to prevent FOUC
        if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    </script>
    <style>
        :root {
            /* LIGHT THEME VARIABLES */
            --color-bg: #f8fafc;
            --color-surface: #ffffff;
            --color-card: #f1f5f9;
            --color-card-hover: #e2e8f0;
            --color-border: rgba(0, 0, 0, 0.08);
            --color-border-strong: rgba(0, 0, 0, 0.15);
            --color-text-main: #0f172a;
            --color-text-muted: #64748b;
            --color-faint: rgba(0, 0, 0, 0.04);
            --color-faint-hover: rgba(0, 0, 0, 0.08);
            --color-btn-bg: #0f172a;
            --color-btn-text: #ffffff;
            --color-btn-hover: #334155;
            --color-nav-glass: rgba(248, 250, 252, 0.85);
        }
        
        html.dark {
            /* DARK THEME VARIABLES (Original Velora) */
            --color-bg: #06080a;
            --color-surface: #0d1116;
            --color-card: #131820;
            --color-card-hover: #1a212c;
            --color-border: rgba(255, 255, 255, 0.05);
            --color-border-strong: rgba(255, 255, 255, 0.1);
            --color-text-main: #f4f5f7;
            --color-text-muted: #8b949e;
            --color-faint: rgba(255, 255, 255, 0.05);
            --color-faint-hover: rgba(255, 255, 255, 0.1);
            --color-btn-bg: #ffffff;
            --color-btn-text: #000000;
            --color-btn-hover: #e5e7eb;
            --color-nav-glass: rgba(6, 8, 10, 0.75);
        }

        body { 
            background-color: var(--color-bg); 
            color: var(--color-text-main); 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            overflow-x: hidden; 
            transition: background-color 0.5s ease, color 0.5s ease;
        }
        
        /* Prevent Concierge Bar Overlap */
        @media (max-width: 639px) { body { padding-bottom: 80px; } }
        
        /* Custom High-End Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--color-bg); }
        ::-webkit-scrollbar-thumb { background: var(--color-card-hover); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #d4af37; }
        
        ::selection { background-color: #d4af37; color: #000; }
        
        .gold-gradient-text { 
            background: linear-gradient(135deg, #f3e5ab 0%, #d4af37 50%, #aa820a 100%); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
        }

        /* Gold Text WCAG Contrast Fix */
        html:not(.dark) .text-velora-gold { color: #997300 !important; }
        html:not(.dark) .hover\\:text-velora-gold:hover { color: #997300 !important; }
        html:not(.dark) .group:hover .group-hover\\:text-velora-gold { color: #997300 !important; }
        
        /* Refined Card Hover Micro-Interactions */
        .premium-border, .bg-velora-surface { 
            position: relative; 
            border: 1px solid var(--color-border); 
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-border::before { 
            content: ""; position: absolute; inset: -1px; 
            background: linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), transparent); 
            z-index: -1; border-radius: inherit; opacity: 0; 
            transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .premium-border:hover {
            border-color: rgba(212,175,55,0.25);
            transform: translateY(-4px);
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.15);
        }
        html.dark .premium-border:hover {
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
        }
        .premium-border:hover::before { opacity: 1; }
        
        /* Form Field Lighting Transitions */
        .input-luxury {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .input-luxury:focus {
            border-color: #d4af37;
            box-shadow: 0 1px 0 0 #d4af37;
            background-color: var(--color-faint);
        }

        .nav-glass { background: var(--color-nav-glass); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid #d4af37; outline-offset: 2px; }
        
        /* Metallic Sheen Micro-interaction for Premium Buttons */
        .btn-luxury { position: relative; overflow: hidden; border: 1px solid transparent; }
        .btn-luxury::after {
            content: ""; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
            transform: skewX(-20deg); transition: all 0.7s ease; z-index: 5;
        }
        html:not(.dark) .btn-luxury::after {
             background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
        }
        .btn-luxury:hover::after { left: 150%; }
        .btn-luxury-dark::after { background: linear-gradient(to right, transparent, rgba(212,175,55,0.15), transparent); }

        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
    </style>
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(schemas, null, 2)}
    </script>
    
    <!-- Google Analytics 4 (GA4) Placeholder -->
    <!--
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
    -->
</head>
<body class="min-h-screen flex flex-col overflow-x-hidden bg-velora-bg text-velora-text transition-colors duration-500">
    ${FloatingContact()}
    ${Header(req.path)}
    ${meta.breadcrumbs ? Breadcrumbs(meta.breadcrumbs) : ''}
    
    <main class="flex-grow min-h-[70vh]">
        ${bodyContent}
    </main>
    
    ${Footer()}

    <script>
        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn && menu) {
            btn.addEventListener('click', function() {
                menu.classList.toggle('hidden');
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', !expanded);
            });
        }

        // Theme Toggle Logic
        const themeToggleBtnDesktop = document.getElementById('theme-toggle-btn');
        const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile-btn');
        const darkIcon = document.getElementById('theme-toggle-dark-icon');
        const lightIcon = document.getElementById('theme-toggle-light-icon');
        const darkIconMob = document.getElementById('theme-toggle-dark-icon-mob');
        const lightIconMob = document.getElementById('theme-toggle-light-icon-mob');

        function updateThemeIcons() {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                if(lightIcon) lightIcon.classList.remove('hidden');
                if(darkIcon) darkIcon.classList.add('hidden');
                if(lightIconMob) lightIconMob.classList.remove('hidden');
                if(darkIconMob) darkIconMob.classList.add('hidden');
                if(themeToggleBtnDesktop) themeToggleBtnDesktop.setAttribute('aria-pressed', 'false');
                if(themeToggleBtnMobile) themeToggleBtnMobile.setAttribute('aria-pressed', 'false');
            } else {
                if(lightIcon) lightIcon.classList.add('hidden');
                if(darkIcon) darkIcon.classList.remove('hidden');
                if(lightIconMob) lightIconMob.classList.add('hidden');
                if(darkIconMob) darkIconMob.classList.remove('hidden');
                if(themeToggleBtnDesktop) themeToggleBtnDesktop.setAttribute('aria-pressed', 'true');
                if(themeToggleBtnMobile) themeToggleBtnMobile.setAttribute('aria-pressed', 'true');
            }
        }

        function handleThemeToggle() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            updateThemeIcons();
        }

        if(themeToggleBtnDesktop) {
            updateThemeIcons();
            themeToggleBtnDesktop.addEventListener('click', handleThemeToggle);
        }
        if(themeToggleBtnMobile) {
            themeToggleBtnMobile.addEventListener('click', handleThemeToggle);
        }

        // Intersection Observer for tasteful scroll reveals
        document.addEventListener("DOMContentLoaded", function() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
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
        title: 'Velora Digital | Premium Web Design & Digital Architecture',
        description: 'Bespoke, high-performance digital experiences designed to build absolute credibility and turn passive searches into elite clientele.',
    };

    const content = `
        <section class="relative pt-24 pb-28 md:pt-32 md:pb-32 overflow-hidden">
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-velora-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-4xl mx-auto text-center space-y-8 reveal">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-velora-faint border border-velora-borderStrong text-[10px] uppercase tracking-[0.2em] text-velora-gold font-bold backdrop-blur-md">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-gold"></span>
                        Digital Architecture Studio
                    </div>
                    <h1 class="font-display text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-tight text-velora-text leading-[1.05] text-balance mx-auto">
                        Digital Architecture for Brands Ready to <span class="gold-gradient-text italic font-medium pr-2">Command Authority.</span>
                    </h1>
                    <p class="text-lg sm:text-xl text-velora-muted leading-relaxed max-w-2xl mx-auto text-pretty">
                        We engineer bespoke, high-performance digital experiences designed to build absolute credibility and turn passive searches into elite clientele.
                    </p>
                    <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a href="/contact" class="btn-luxury w-full sm:w-auto px-8 py-4 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-[0_0_40px_rgba(212,175,55,0.1)] focus:outline-none focus:ring-2 focus:ring-velora-gold">
                            Commission a Project
                        </a>
                        <a href="/portfolio" class="btn-luxury btn-luxury-dark w-full sm:w-auto px-8 py-4 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text hover:bg-velora-faint transition-colors focus:outline-none focus:ring-2 focus:ring-velora-text">
                            Explore Bespoke Concepts
                        </a>
                    </div>
                </div>

                <!-- Quiet Clientele Ribbon -->
                <div class="pt-16 border-t border-velora-border mt-20 max-w-4xl mx-auto text-center reveal" style="transition-delay: 100ms;">
                    <p class="text-[10px] uppercase tracking-[0.3em] text-velora-muted mb-6 text-balance">Designing bespoke digital experiences for elite sectors</p>
                    <div class="flex flex-wrap justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-display tracking-[0.2em] uppercase text-velora-muted opacity-50">
                        <span>Real Estate</span>
                        <span class="text-velora-borderStrong">•</span>
                        <span>Hospitality</span>
                        <span class="text-velora-borderStrong">•</span>
                        <span>Healthcare</span>
                        <span class="text-velora-borderStrong">•</span>
                        <span>Boutique Retail</span>
                    </div>
                </div>

                <div class="mt-24 max-w-5xl mx-auto relative reveal" style="transition-delay: 200ms;">
                    <div class="rounded-2xl border border-velora-borderStrong bg-velora-bg/80 p-2 shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                        <div class="flex items-center justify-between mb-2 px-3 py-2 border-b border-velora-border">
                            <div class="flex items-center gap-2">
                                <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                <div class="ml-4 text-[10px] font-mono text-velora-muted bg-velora-faint px-3 py-1 rounded border border-velora-border hidden sm:block">
                                    veloradigital.in/concept/aarav-estates
                                </div>
                            </div>
                            <span class="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">Flawless Performance</span>
                        </div>
                        
                        <div class="bg-velora-bg rounded-xl border border-velora-border overflow-hidden">
                            <div class="flex justify-between items-center px-6 py-4 border-b border-velora-border">
                                <div class="text-sm font-display font-bold tracking-[0.2em] uppercase text-velora-text">AARAV ESTATES</div>
                                <div class="hidden sm:flex gap-4">
                                    <div class="h-1.5 w-12 bg-velora-faintHover rounded"></div>
                                    <div class="h-1.5 w-12 bg-velora-faintHover rounded"></div>
                                    <div class="h-1.5 w-12 bg-velora-faintHover rounded"></div>
                                </div>
                                <div class="h-8 w-24 bg-velora-gold/20 border border-velora-gold/30 rounded-full flex items-center justify-center">
                                    <div class="h-1.5 w-10 bg-velora-gold rounded"></div>
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
                                    <div class="absolute bottom-4 left-4 right-4 h-16 bg-velora-bg/50 backdrop-blur-md rounded-lg border border-velora-borderStrong flex items-center px-4 gap-4">
                                        <div class="h-8 w-8 bg-velora-borderStrong rounded"></div>
                                        <div class="space-y-2 flex-1">
                                            <div class="h-2 w-1/2 bg-velora-borderStrong rounded"></div>
                                            <div class="h-1.5 w-1/3 bg-velora-faintHover rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 md:py-32 border-y border-velora-border relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal">
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">Architectural Transparency.</h2>
                <p class="text-base sm:text-lg text-velora-muted leading-relaxed text-balance">
                    Velora Digital is built on structured craftsmanship and methodical execution. Our concept portfolio is clearly labeled to demonstrate our capabilities across high-value sectors with complete clarity.
                </p>
                <div class="pt-6">
                    <a href="/about" class="text-[10px] uppercase tracking-[0.2em] font-bold text-velora-gold hover:text-velora-text transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-velora-gold rounded px-2 py-1 inline-flex min-h-[44px]">
                        Explore Our Philosophy <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>

        <section class="py-24 md:py-32 bg-velora-card">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-2xl mb-16 reveal">
                    <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Aesthetic Transformation</span>
                    <h2 class="font-display text-4xl sm:text-5xl font-bold text-velora-text mt-4 tracking-tight text-balance">The Impact of Elite Digital Architecture</h2>
                    <p class="text-base text-velora-muted mt-4 text-pretty leading-relaxed">Drag the slider to observe how Velora upgrades cluttered, outdated pages into fast, high-converting luxury experiences.</p>
                </div>

                <div id="before-after-container" class="relative w-full max-w-5xl mx-auto h-[500px] rounded-2xl border border-velora-borderStrong overflow-hidden select-none shadow-[0_0_40px_rgba(0,0,0,0.15)] dark:shadow-[0_0_40px_rgba(0,0,0,0.8)] reveal">
                    <div class="absolute inset-0 bg-velora-surface flex flex-col">
                        <div class="h-16 flex justify-between items-center px-8 border-b border-velora-border bg-velora-cardHover">
                            <div><h4 class="font-display text-lg font-bold text-velora-text tracking-[0.2em] uppercase">URBAN ROOTS STUDIO</h4></div>
                            <span class="text-[10px] uppercase tracking-[0.2em] text-velora-gold font-bold">Velora Architecture</span>
                        </div>
                        <div class="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1 content-center">
                            <div class="space-y-6">
                                <h3 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">Refined Styling for Discerning Clientele.</h3>
                                <p class="text-sm text-velora-muted leading-relaxed text-pretty hidden sm:block">Commission an appointment seamlessly. Explore our curated aesthetic portfolios.</p>
                                <div class="inline-block px-6 py-3 bg-velora-button text-velora-buttonText text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">Reserve Session</div>
                            </div>
                            <div class="space-y-4 hidden sm:block">
                                <div class="flex justify-between items-center p-4 border border-velora-border rounded-xl bg-velora-faint">
                                    <span class="text-sm text-velora-text font-medium">Bespoke Styling</span>
                                    <span class="text-sm text-velora-muted">From ₹1,500</span>
                                </div>
                                <div class="flex justify-between items-center p-4 border border-velora-border rounded-xl bg-velora-faint">
                                    <span class="text-sm text-velora-text font-medium">Bridal Curation</span>
                                    <span class="text-sm text-velora-muted">Private Consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="before-overlay" class="absolute top-0 left-0 bottom-0 bg-[#e0e0e0] border-r-2 border-velora-gold flex flex-col overflow-hidden" style="width: 50%;">
                        <div class="w-[1000px] flex-1 flex flex-col">
                            <div class="h-16 flex justify-between items-center px-8 border-b border-gray-400 bg-gray-300">
                                <div><h4 class="text-xl font-bold text-blue-800 underline">Urban Roots Parlour</h4></div>
                                <span class="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold">Standard Template</span>
                            </div>
                            <div class="p-10 flex-1 content-center text-center">
                                <h2 class="text-4xl text-red-600 font-bold mb-6">WELCOME TO OUR SITE!!!</h2>
                                <p class="text-xl text-black mb-6">We do hair and makeup for weddings.</p>
                                <marquee class="text-lg text-blue-700 font-bold bg-yellow-300 py-2 mb-8">*** CALL US FOR RATES ***</marquee>
                                <div class="inline-block p-4 border-4 border-dashed border-red-500 text-black">Click Here to download our 15MB PDF Menu</div>
                            </div>
                        </div>
                    </div>

                    <div id="slider-handle" class="absolute top-0 bottom-0 w-1 bg-velora-gold cursor-ew-resize flex items-center justify-center z-20" style="left: 50%; touch-action: none;">
                        <div class="w-10 h-10 rounded-full bg-velora-faint backdrop-blur-md border border-velora-gold text-velora-gold flex items-center justify-center shadow-2xl" aria-hidden="true">
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
                        <h2 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Engineered for Authority</h2>
                    </div>
                    <a href="/services" class="mt-6 md:mt-0 text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold hover:text-velora-text transition-colors focus:outline-none focus:ring-2 focus:ring-velora-gold rounded px-2 py-1 inline-flex min-h-[44px] items-center">Explore All Capabilities &rarr;</a>
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
                                Review Strategy <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="py-32 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-velora-gold/5 pointer-events-none"></div>
            <div class="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10 reveal">
                <h2 class="font-display text-4xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Your Brand Deserves Absolute Digital Excellence.</h2>
                <p class="text-lg text-velora-muted max-w-2xl mx-auto text-pretty leading-relaxed">Let’s discuss how Velora Digital can craft a bespoke environment that positions your brand exactly where it belongs.</p>
                <div class="pt-6">
                    <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-[0_0_30px_rgba(212,175,55,0.15)] focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        Request a Formal Assessment
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
                });
            };
            container.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e.clientX); e.preventDefault(); });
            window.addEventListener('mouseup', () => { isDragging = false; });
            window.addEventListener('mousemove', (e) => { if (isDragging) updateSlider(e.clientX); });
            
            container.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e.touches[0].clientX); });
            window.addEventListener('touchend', () => { isDragging = false; });
            window.addEventListener('touchmove', (e) => { if (isDragging) { e.preventDefault(); updateSlider(e.touches[0].clientX); } });
        }
    `;

    res.send(BaseLayout(req, meta, content, script));
});

app.get('/services', (req, res) => {
    const meta = {
        title: 'Digital Architecture & SEO Services | Velora Studio',
        description: 'Explore our core capabilities: Digital Architecture, Search Positioning, and Studio Maintenance.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Capabilities', link: '/services'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Digital Capabilities</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">We architect everything with absolute intent — prioritizing elite performance, seamless conversion pathways, and long-term search dominance.</p>
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
                                Review Capability
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
        title: `${service.title} | Velora Studio`,
        description: service.short,
        schema: generateSchema('Service', { name: service.title, description: service.short }),
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Capabilities', link: '/services'}, {title: service.title, link: `/services/${service.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Studio Capability</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 leading-tight text-balance tracking-tight">${service.title}</h1>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">${service.longDesc}</p>
            </header>
            
            <div class="space-y-16 reveal" style="transition-delay: 100ms;">
                <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-8 tracking-tight">Strategic Focus</h2>
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
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-8 tracking-tight">Execution Process</h2>
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
                    Commission This Strategy
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/industries', (req, res) => {
    const meta = {
        title: 'Elite Sectors We Serve | Velora Digital',
        description: 'Bespoke digital architecture built for real estate, hospitality, clinics, and professional salons.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Elite Sectors', link: '/industries'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Digital Architecture for Elite Sectors</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">High-value clientele require a frictionless, flawless digital journey. We adapt navigation, aesthetics, and conversion structures to match how discerning buyers behave.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${INDUSTRIES.map((i, idx) => `
                    <a href="/industries/${i.slug}" class="premium-border bg-velora-surface p-10 rounded-3xl group reveal focus:outline-none focus:ring-2 focus:ring-velora-gold" style="transition-delay: ${idx * 100}ms;">
                        <div class="text-4xl mb-6" aria-hidden="true">${i.icon}</div>
                        <h2 class="font-display text-2xl font-bold text-velora-text group-hover:text-velora-gold transition-colors mb-4 tracking-tight">${i.name}</h2>
                        <p class="text-base text-velora-muted leading-relaxed mb-8 text-pretty">${i.desc}</p>
                        <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text group-hover:text-velora-gold transition-colors flex items-center gap-2 min-h-[44px]">
                            Explore Sector Strategy <span aria-hidden="true">&rarr;</span>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/industries/:slug', (req, res) => {
    const ind = INDUSTRIES.find(i => i.slug === req.params.slug);
    if (!ind) return res.status(404).send(NotFoundLayout(req));

    const meta = {
        title: `Digital Strategy for ${ind.name} | Velora Digital`,
        description: `Bespoke digital architecture and positioning specifically for ${ind.name} brands.`,
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Sectors', link: '/industries'}, {title: ind.name, link: `/industries/${ind.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Sector Strategy</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 leading-tight text-balance tracking-tight">${ind.name}</h1>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">${ind.desc}</p>
            </header>
            
            <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl space-y-12 reveal" style="transition-delay: 100ms;">
                <div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">The Sector Challenge</h2>
                    <p class="text-base text-velora-muted leading-relaxed text-pretty">${ind.challenges}</p>
                </div>
                <div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">The Architectural Solution</h2>
                    <p class="text-base text-velora-muted leading-relaxed text-pretty">${ind.solutions}</p>
                </div>
            </div>
            
            <div class="mt-20 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Request a Sector Assessment
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/locations', (req, res) => {
    const meta = {
        title: 'Geographic Markets | Velora Digital',
        description: 'Premium digital architecture for brands across Gurugram, Delhi NCR, Chandigarh, Bengaluru, and beyond.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Markets', link: '/locations'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Serving Key Geographic Markets</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">We partner with elite brands in major commercial hubs to build high-performance digital environments and dominant local search foundations.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${LOCATIONS.map((l, idx) => `
                    <a href="/locations/${l.slug}" class="premium-border bg-velora-surface p-10 rounded-3xl group reveal focus:outline-none focus:ring-2 focus:ring-velora-gold" style="transition-delay: ${idx * 100}ms;">
                        <div class="text-[10px] font-mono text-velora-gold mb-4 uppercase tracking-[0.2em]">${l.region}</div>
                        <h2 class="font-display text-2xl font-bold text-velora-text group-hover:text-velora-gold transition-colors mb-4 tracking-tight">${l.name}</h2>
                        <p class="text-base text-velora-muted leading-relaxed mb-8 text-pretty">${l.desc}</p>
                        <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-text group-hover:text-velora-gold transition-colors flex items-center gap-2 min-h-[44px]">
                            Explore Market Approach <span aria-hidden="true">&rarr;</span>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/locations/:slug', (req, res) => {
    const loc = LOCATIONS.find(l => l.slug === req.params.slug);
    if (!loc) return res.status(404).send(NotFoundLayout(req));

    const meta = {
        title: `Digital Architecture in ${loc.name} | Velora Digital`,
        description: `Premium digital architecture and search positioning for brands serving customers in ${loc.name}.`,
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Markets', link: '/locations'}, {title: loc.name, link: `/locations/${loc.slug}`}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-16 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Market Focus</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 leading-tight text-balance tracking-tight">Digital Authority in ${loc.name}</h1>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">${loc.desc}</p>
            </header>
            
            <div class="premium-border bg-velora-surface p-8 md:p-12 rounded-3xl space-y-12 reveal" style="transition-delay: 100ms;">
                <div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">Why Local Market Strategy Matters</h2>
                    <p class="text-base text-velora-muted leading-relaxed text-pretty">
                        Fierce local competition requires a digital presence that loads instantly, presents absolute authority, and connects seamlessly to your business. We engineer your digital foundation to align perfectly with how high-value customers in ${loc.name} search for your specific services.
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-velora-border">
                    <div class="bg-velora-card p-6 rounded-2xl border border-velora-border">
                        <h3 class="text-sm font-bold text-velora-text mb-2">Targeted Search Dominance</h3>
                        <p class="text-xs text-velora-muted leading-relaxed text-pretty">Structured to align precisely with local search queries and Maps expectations.</p>
                    </div>
                    <div class="bg-velora-card p-6 rounded-2xl border border-velora-border">
                        <h3 class="text-sm font-bold text-velora-text mb-2">Frictionless Communication</h3>
                        <p class="text-xs text-velora-muted leading-relaxed text-pretty">Elegant pathways for clientele to commission your services easily.</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-20 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Commission a Project
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/portfolio', (req, res) => {
    const meta = {
        title: 'Bespoke Concept Portfolio | Velora Digital',
        description: 'Explore our concept architecture projects demonstrating our capabilities in luxury design, structure, and conversion.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Portfolio', link: '/portfolio'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Concept Portfolio</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">To demonstrate our exacting standards with complete transparency, we showcase fully engineered concept environments designed to benchmark our quality across elite sectors.</p>
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
                                    <h3 class="text-[10px] font-bold uppercase text-velora-text tracking-[0.2em] mb-2">The Challenge</h3>
                                    <p class="text-sm text-velora-muted leading-relaxed text-pretty">${p.challenge}</p>
                                </div>
                                <div>
                                    <h3 class="text-[10px] font-bold uppercase text-velora-text tracking-[0.2em] mb-2">The Solution</h3>
                                    <p class="text-sm text-velora-muted leading-relaxed text-pretty">${p.solution}</p>
                                </div>
                            </div>
                            <div class="mt-auto pt-8 border-t border-velora-border">
                                <a href="/contact" class="text-[10px] uppercase tracking-[0.2em] font-bold text-velora-text hover:text-velora-gold transition-colors inline-flex items-center gap-2 focus:outline-none focus:text-velora-gold rounded px-2 py-1 min-h-[44px]">
                                    Commission a Similar Asset <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/process', (req, res) => {
    const meta = {
        title: 'Our Methodology | Velora Digital',
        description: 'A transparent, highly engineered 5-step digital architecture process for premium brands.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Methodology', link: '/process'}]
    };
    
    const steps = [
        { num: '01', name: 'Strategic Discovery', desc: 'We analyze your current brand positioning, market competitors, and the exact information elite clientele require before initiating contact.' },
        { num: '02', name: 'Architectural Planning', desc: 'We map out precise site navigation, content hierarchy, wireframes, and the foundational local SEO architecture.' },
        { num: '03', name: 'Bespoke Design', desc: 'We craft a luxurious, high-contrast visual layout meticulously tailored to elevate your brand equity.' },
        { num: '04', name: 'Performance Engineering', desc: 'We write lean, uncompromising code that ensures flawless speed, proper semantic structure, and seamless mobile fluidity.' },
        { num: '05', name: 'Deployment & Curation', desc: 'We deploy the digital asset, verify all bespoke contact paths, and ensure long-term stability and security.' }
    ];

    const content = `
        <section class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-20 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold">Execution Blueprint</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text mt-4 text-balance tracking-tight">Studio Methodology</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Absolute clarity, precise milestones, and structural delivery handled with quiet competence.</p>
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
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Initiate Discovery
                </a>
            </div>
        </section>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/pricing', (req, res) => {
    const meta = {
        title: 'Investment Portfolio | Velora Digital',
        description: 'Transparent, premium digital architecture investment plans. Essential, Professional, and Bespoke options.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Investment', link: '/pricing'}]
    };
    
    const f = (val) => `${CONFIG.currencySymbol}${val.toLocaleString('en-IN')}`;

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance tracking-tight">Investment Portfolio</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Transparent, premium digital architecture without unnecessary agency overhead.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                <div class="premium-border bg-velora-surface rounded-3xl p-10 flex flex-col reveal" style="transition-delay: 100ms;">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2 tracking-tight">Essential</h2>
                    <p class="text-sm text-velora-muted mb-8 h-10 text-pretty">For a pristine, professional digital presence.</p>
                    <div class="text-4xl font-bold font-display text-velora-text mb-10 tracking-tight">${f(CONFIG.pricing.essential)}</div>
                    <ul class="space-y-4 text-sm text-velora-muted flex-1">
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Up to 5 Bespoke Pages</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Mobile-First Architecture</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Refined Contact Flow</li>
                    </ul>
                    <a href="/contact?tier=essential" class="mt-10 flex items-center justify-center w-full py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text text-center hover:bg-velora-faint transition-all focus:outline-none focus:ring-2 focus:ring-velora-text">Commission Essential</a>
                </div>
                
                <div class="relative bg-gradient-to-b from-velora-surface to-velora-bg border border-velora-gold/50 rounded-3xl p-10 flex flex-col shadow-[0_0_40px_rgba(212,175,55,0.1)] reveal transform lg:-translate-y-4" style="transition-delay: 200ms;">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-velora-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full whitespace-nowrap">Studio Recommendation</div>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2 tracking-tight">Professional</h2>
                    <p class="text-sm text-velora-muted mb-8 h-10 text-pretty">Dominant web presence & SEO architecture.</p>
                    <div class="text-4xl font-bold font-display text-velora-text mb-10 tracking-tight">${f(CONFIG.pricing.professional)}</div>
                    <ul class="space-y-4 text-sm text-velora-muted flex-1">
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Up to 10 Bespoke Pages</li>
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Local SEO Architecture</li>
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Interactive Service Features</li>
                        <li class="flex items-center gap-3"><span class="text-velora-gold" aria-hidden="true">■</span> Performance Optimization</li>
                    </ul>
                    <a href="/contact?tier=professional" class="btn-luxury mt-10 flex items-center justify-center w-full py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText text-center shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">Commission Professional</a>
                </div>
                
                <div class="premium-border bg-velora-surface rounded-3xl p-10 flex flex-col reveal" style="transition-delay: 300ms;">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2 tracking-tight">Bespoke</h2>
                    <p class="text-sm text-velora-muted mb-8 h-10 text-pretty">Advanced architecture and large-scale builds.</p>
                    <div class="text-4xl font-bold font-display text-velora-text mb-10 tracking-tight">Private Quote</div>
                    <ul class="space-y-4 text-sm text-velora-muted flex-1">
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Infinite Landing Pages</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Complex Integrations</li>
                        <li class="flex items-center gap-3"><span class="text-velora-borderStrong" aria-hidden="true">■</span> Ongoing Studio Maintenance</li>
                    </ul>
                    <a href="/contact?tier=custom" class="mt-10 flex items-center justify-center w-full py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text text-center hover:bg-velora-faint transition-all focus:outline-none focus:ring-2 focus:ring-velora-text">Request Assessment</a>
                </div>
            </div>

            <div class="mt-20 max-w-2xl mx-auto text-center reveal border-t border-velora-border pt-16 mb-24">
                <h4 class="font-display text-xl font-bold text-velora-text mb-4 tracking-tight">The Studio Guarantee</h4>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty">Every line of code and pixel of design is meticulously crafted to global standards. We believe in absolute transparency, unwavering performance, and delivering digital assets that genuinely elevate your brand's equity.</p>
            </div>
            
            <div class="border border-velora-borderStrong shadow-2xl bg-velora-bg p-10 md:p-16 max-w-3xl mx-auto reveal">
                <h3 class="font-display text-3xl font-bold text-velora-text mb-4 text-center tracking-tight">Formal Assessment Calculator</h3>
                <p class="text-sm text-velora-muted text-center mb-10 text-pretty">Adjust parameters to calculate an estimated baseline investment.</p>
                <div class="space-y-10">
                    <div>
                        <div class="flex justify-between text-sm font-medium text-velora-text mb-4">
                            <label for="calc-pages">Estimated Page Count</label>
                            <span id="calc-page-val" class="text-velora-gold tracking-tight">5 Pages</span>
                        </div>
                        <input id="calc-pages" type="range" min="1" max="20" value="5" class="w-full h-2 bg-velora-faintHover rounded-lg appearance-none cursor-pointer accent-velora-gold min-h-[44px] p-0">
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label class="flex items-center gap-4 bg-velora-faint p-5 min-h-[44px] rounded-xl border border-velora-border cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input id="calc-seo" type="checkbox" checked class="w-5 h-5 accent-velora-gold">
                            <span class="text-sm text-velora-text font-medium">Include SEO Architecture</span>
                        </label>
                        <label class="flex items-center gap-4 bg-velora-faint p-5 min-h-[44px] rounded-xl border border-velora-border cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input id="calc-maint" type="checkbox" class="w-5 h-5 accent-velora-gold">
                            <span class="text-sm text-velora-text font-medium">Include Studio Maintenance</span>
                        </label>
                    </div>
                    <div class="border-t border-velora-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div class="text-center sm:text-left">
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Estimated Baseline</div>
                            <div id="calc-total" class="text-4xl font-bold font-display text-velora-gold tracking-tight" aria-live="polite">${f(CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon)}</div>
                        </div>
                        <a id="calc-cta" href="/contact?tier=custom&pages=5&seo=true&maint=false&est=${CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon}" class="btn-luxury flex items-center justify-center px-8 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText focus:outline-none focus:ring-2 focus:ring-velora-gold">Request Formal Quote</a>
                    </div>
                </div>
            </div>
        </section>`;
        
    const script = `
        const PRICING = ${JSON.stringify(CONFIG.pricing)};
        const SYM = '${CONFIG.currencySymbol}';
        const pagesInput = document.getElementById('calc-pages');
        const pageVal = document.getElementById('calc-page-val');
        const seoInput = document.getElementById('calc-seo');
        const maintInput = document.getElementById('calc-maint');
        const totalVal = document.getElementById('calc-total');
        const calcCta = document.getElementById('calc-cta');

        if (pagesInput) {
            const calculate = () => {
                const pages = parseInt(pagesInput.value, 10);
                pageVal.innerText = pages + ' Pages';
                let base = PRICING.baseCalculator + (pages * PRICING.perPage);
                if (seoInput.checked) base += PRICING.seoAddon;
                if (maintInput.checked) base += PRICING.maintenanceAddon;
                totalVal.innerText = SYM + base.toLocaleString('en-IN');
                
                if (calcCta) {
                    calcCta.href = \`/contact?tier=custom&pages=\${pages}&seo=\${seoInput.checked}&maint=\${maintInput.checked}&est=\${base}\`;
                }
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
        title: 'Studio Philosophy | Velora Digital',
        description: 'Discover the philosophy behind Velora Digital. Honest, elite-performance web design for premium brands.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Studio', link: '/about'}]
    };

    const content = `
        <article class="py-24 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header class="mb-20 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold block mb-6">The Studio</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text text-balance leading-tight tracking-tight">Engineering Excellence for Discerning Brands</h1>
                <p class="text-xl text-velora-muted mt-8 leading-relaxed text-pretty">
                    Velora Digital was created to solve a persistent gap in the digital landscape. We observed that premium businesses were forced to choose between bloated templates that eroded brand equity, or overpriced agency builds lacking a true focus on conversion.
                </p>
                <p class="text-xl text-velora-muted mt-6 leading-relaxed text-pretty">
                    We built a studio that balances exquisite, sophisticated design with strict technical performance and quiet confidence.
                </p>
            </header>
            
            <div class="space-y-12 reveal" style="transition-delay: 100ms;">
                <div class="premium-border bg-velora-surface p-10 md:p-16 rounded-3xl">
                    <h2 class="font-display text-3xl font-bold text-velora-text mb-8 tracking-tight">Our Postulates</h2>
                    <ul class="space-y-8 text-base text-velora-muted">
                        <li class="pb-8 border-b border-velora-border"><strong class="text-velora-text block mb-2 font-display text-xl tracking-tight">Absolute Honesty</strong> <span class="text-pretty">Transparent execution. We do not invent metrics, fabricate traffic numbers, or exaggerate client histories.</span></li>
                        <li class="pb-8 border-b border-velora-border"><strong class="text-velora-text block mb-2 font-display text-xl tracking-tight">Conversion Centric</strong> <span class="text-pretty">Aesthetic beauty is merely the baseline. A digital asset must intuitively guide the user toward high-value action.</span></li>
                        <li><strong class="text-velora-text block mb-2 font-display text-xl tracking-tight">Flawless Engineering</strong> <span class="text-pretty">We engineer our architecture to load flawlessly on real-world networks, rejecting all unnecessary code bloat.</span></li>
                    </ul>
                </div>
                
                <div class="border border-velora-borderStrong shadow-2xl bg-velora-bg p-10 md:p-16 rounded-3xl">
                    <h2 class="font-display text-3xl font-bold text-velora-text mb-8 tracking-tight">Studio Operations</h2>
                    <p class="text-lg text-velora-muted leading-relaxed mb-6 text-pretty">
                        We prioritize direct communication and exacting milestones. Brand leaders must clearly understand their investment without being obscured by technical jargon.
                    </p>
                    <p class="text-lg text-velora-muted leading-relaxed text-pretty">
                        By maintaining a highly curated focus on actual deliverables rather than expansive agency overhead, we deliver enterprise-grade digital architecture.
                    </p>
                </div>
            </div>
            
            <div class="mt-24 text-center reveal">
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                    Commission the Studio
                </a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/blog', (req, res) => {
    const meta = {
        title: 'Digital Authority Journal | Velora Digital',
        description: 'Elite perspectives on website architecture, search positioning, and converting premium clientele.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Journal', link: '/blog'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-20 reveal">
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text tracking-tight">The Authority Journal</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Exclusive perspectives on digital architecture, search positioning, and creating environments that convert high-value clientele.</p>
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
                            <a href="/blog/${b.slug}" class="font-bold uppercase tracking-[0.2em] text-[10px] text-velora-text hover:text-velora-gold transition-colors focus:outline-none focus:text-velora-gold flex items-center min-h-[44px]">Read Entry <span aria-hidden="true">&rarr;</span></a>
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
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Journal', link: '/blog'}, {title: 'Entry', link: `/blog/${article.slug}`}]
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
            
            <div class="mt-24 p-10 md:p-16 border border-velora-borderStrong shadow-2xl bg-velora-bg rounded-3xl text-center reveal">
                <h3 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">Elevate Your Digital Architecture</h3>
                <p class="text-base text-velora-muted mb-8 text-pretty">Discuss how these principles apply directly to commanding authority in your sector.</p>
                <a href="/contact" class="btn-luxury inline-flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">Request an Assessment</a>
            </div>
        </article>`;
    res.send(BaseLayout(req, meta, content));
});

app.get('/contact', (req, res) => {
    const meta = {
        title: 'Request a Consultation | Velora Digital',
        description: 'Request a digital architecture consultation and discuss your brand positioning with our studio.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Consultation', link: '/contact'}]
    };

    const content = `
        <section class="py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-20 reveal">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold block mb-6">Concierge</span>
                <h1 class="font-display text-5xl sm:text-6xl font-bold text-velora-text tracking-tight">Commission the Studio</h1>
                <p class="text-lg text-velora-muted mt-6 leading-relaxed text-pretty">Reach out via your preferred method. Our team reviews all requests and responds discreetly within one business day.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-6 reveal" style="transition-delay: 100ms;">
                    <h2 class="font-display text-xl font-bold text-velora-text border-b border-velora-border pb-4 mb-6 tracking-tight">Private Channels</h2>
                    
                    <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="flex items-start gap-4 p-6 min-h-[44px] rounded-2xl bg-velora-surface border border-velora-border hover:border-velora-borderStrong transition-all group focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        <div class="text-2xl mt-1" aria-hidden="true">📞</div>
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Call Studio</div>
                            <div class="text-base font-medium text-velora-text group-hover:text-velora-text transition-colors">${CONFIG.phone}</div>
                        </div>
                    </a>

                    <a href="mailto:${CONFIG.email}" class="flex items-start gap-4 p-6 min-h-[44px] rounded-2xl bg-velora-surface border border-velora-border hover:border-velora-borderStrong transition-all group focus:outline-none focus:ring-2 focus:ring-velora-gold">
                        <div class="text-2xl mt-1" aria-hidden="true">✉️</div>
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Email Desk</div>
                            <div class="text-base font-medium text-velora-text group-hover:text-velora-text transition-colors">${CONFIG.email}</div>
                        </div>
                    </a>

                    <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-4 p-6 min-h-[44px] rounded-2xl bg-velora-surface border border-velora-border hover:border-emerald-500/50 transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400">
                        <div class="text-2xl mt-1" aria-hidden="true">💬</div>
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-muted mb-2">Private Chat</div>
                            <div class="text-base font-medium text-velora-text group-hover:text-emerald-400 transition-colors">WhatsApp Concierge</div>
                        </div>
                    </a>
                </div>

                <div class="lg:col-span-8 border border-velora-borderStrong shadow-2xl bg-velora-bg rounded-3xl p-8 sm:p-12 relative reveal" style="transition-delay: 200ms;">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-8 tracking-tight">Formal Assessment Request</h2>
                    <form id="contact-form" class="space-y-8" aria-live="polite">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="name" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Your Name *</label>
                                <input type="text" id="name" name="name" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. John Doe">
                            </div>
                            <div>
                                <label for="business" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Brand / Business *</label>
                                <input type="text" id="business" name="business" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. Acme Corp">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="email" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Email Address *</label>
                                <input type="email" id="email" name="email" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. john@acme.com">
                            </div>
                            <div>
                                <label for="phone" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Phone Number</label>
                                <input type="tel" id="phone" name="phone" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury" placeholder="e.g. +91 9876543210">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="industry" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Elite Sector</label>
                                <select id="industry" name="industry" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury appearance-none">
                                    <option value="real-estate" class="bg-velora-surface text-velora-text">Real Estate / Property</option>
                                    <option value="restaurant" class="bg-velora-surface text-velora-text">Fine Dining / Hospitality</option>
                                    <option value="clinic" class="bg-velora-surface text-velora-text">Clinic / Aesthetics</option>
                                    <option value="salon" class="bg-velora-surface text-velora-text">Boutique Salon / Studio</option>
                                    <option value="other" class="bg-velora-surface text-velora-text" selected>Other / General</option>
                                </select>
                            </div>
                            <div>
                                <label for="budget" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Investment Scope</label>
                                <select id="budget" name="budget" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 min-h-[44px] text-base text-velora-text focus:outline-none input-luxury appearance-none">
                                    <option value="essential" class="bg-velora-surface text-velora-text">₹14,999 – Essential Portfolio</option>
                                    <option value="professional" class="bg-velora-surface text-velora-text" selected>₹34,999 – Professional Portfolio</option>
                                    <option value="custom" class="bg-velora-surface text-velora-text">₹69,999+ – Bespoke Architecture</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="message" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">Assessment Details</label>
                            <textarea id="message" name="message" rows="3" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-3 text-base text-velora-text focus:outline-none input-luxury resize-none" placeholder="Briefly describe your objectives or share an existing domain..."></textarea>
                        </div>

                        <div class="pt-4">
                            <button id="form-submit-btn" type="submit" class="btn-luxury w-full sm:w-auto flex items-center justify-center px-10 py-5 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText shadow-lg focus:outline-none focus:ring-2 focus:ring-velora-gold">
                                Submit Formal Request
                            </button>
                        </div>
                        
                        <div id="form-error" class="hidden text-red-400 text-sm mt-4 font-medium" role="alert"></div>
                    </form>

                    <div id="form-success-message" class="hidden absolute inset-0 bg-velora-bg/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-12 text-center z-10" role="alert">
                        <div class="w-16 h-16 bg-velora-faint border border-velora-borderStrong rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-velora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <h3 class="font-display text-3xl font-bold text-velora-text mb-4 tracking-tight">Request Processed</h3>
                        <p class="text-base text-velora-muted max-w-sm mx-auto mb-10 leading-relaxed text-pretty">Thank you for commissioning Velora Digital. We will meticulously review your assessment details and respond securely within one business day.</p>
                        <button onclick="document.getElementById('contact-form').reset(); document.getElementById('form-success-message').classList.add('hidden'); document.getElementById('contact-form').classList.remove('hidden');" class="px-8 py-3 min-h-[44px] bg-transparent border border-velora-borderStrong hover:border-velora-border transition-colors text-[10px] font-bold uppercase tracking-widest text-velora-text rounded-full focus:outline-none focus:ring-2 focus:ring-velora-text">Submit Another</button>
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

        // Smart Pricing & Calculator Auto-Fill
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
                if (pages) summary += \`\${pages} pages\`;
                if (seo === 'true') summary += ', SEO included';
                if (maint === 'true') summary += ', Maintenance included';
                if (est) summary += \`, ~₹Number(est).toLocaleString('en-IN')\`;
                messageTextarea.value = summary;
            }
        }

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.innerText = 'Processing...';
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
                } else {
                    throw new Error(result.error || 'Submission failed');
                }
            } catch (err) {
                errorDiv.innerText = err.message || 'An error occurred during secure transit. Please try again.';
                errorDiv.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Submit Formal Request';
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
                <p class="text-pretty">At Velora Digital, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.</p>
                <h2>Information Collection</h2>
                <p class="text-pretty">We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, including name, business name, email address, and phone number.</p>
                <h2>Use of Information</h2>
                <p class="text-pretty">We use personal information collected via our website for legitimate business purposes, primarily to communicate with you regarding your project inquiry and to deliver the requested digital services.</p>
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
                <p class="text-pretty">These Terms of Service govern your use of the Velora Digital website and any agreements entered into for our digital design and development services.</p>
                <h2>Project Execution</h2>
                <p class="text-pretty">All projects require a clear agreement detailing the scope of work, deliverables, and payment schedule. Milestones and timelines are established prior to the commencement of engineering.</p>
                <h2>Intellectual Property</h2>
                <p class="text-pretty">Upon final payment, full ownership rights of the customized website frontend and design assets are transferred to the client, excluding proprietary underlying codebases or third-party licenses.</p>
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
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // Limit each IP to 20 requests per windowMs (Fix for CGNAT)
    message: { error: 'Too many inquiries sent from this IP. Please wait an hour or contact us directly via WhatsApp/Phone.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Initialize the Resend Client
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        const { name, business, phone, email, industry, budget, message } = req.body;
        
        if (!name || !business || !email) {
            return res.status(400).json({ error: 'Name, Business Name, and Email are required.' });
        }

        const sanitizedData = {
            name: name.trim(),
            business: business.trim(),
            phone: phone ? phone.trim() : 'Not provided',
            email: email.trim(),
            industry: industry || 'not-specified',
            budget: budget || 'not-specified',
            message: message ? message.trim() : 'No details provided',
            timestamp: new Date().toISOString()
        };

        if (process.env.RESEND_API_KEY) {
            const { data, error } = await resend.emails.send({
                from: process.env.EMAIL_FROM || 'Velora Studio <onboarding@resend.dev>',
                to: CONFIG.systemEmail,
                reply_to: sanitizedData.email !== 'Not provided' ? sanitizedData.email : undefined,
                subject: `New Assessment Request: ${sanitizedData.business}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111; line-height: 1.6; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                        <h2 style="color: #d4af37; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Project Commission Request</h2>
                        <p><strong>Name:</strong> ${escapeHTML(sanitizedData.name)}</p>
                        <p><strong>Brand / Business:</strong> ${escapeHTML(sanitizedData.business)}</p>
                        <p><strong>Phone:</strong> ${escapeHTML(sanitizedData.phone)}</p>
                        <p><strong>Email:</strong> ${escapeHTML(sanitizedData.email)}</p>
                        <p><strong>Elite Sector:</strong> ${escapeHTML(sanitizedData.industry)}</p>
                        <p><strong>Investment Scope:</strong> ${escapeHTML(sanitizedData.budget)}</p>
                        <h3 style="margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Assessment Details</h3>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHTML(sanitizedData.message)}</p>
                        <p style="font-size: 12px; color: #888; margin-top: 30px;">Received at: ${sanitizedData.timestamp}</p>
                    </div>
                `
            });

            if (error) {
                throw new Error(error.message);
            }

            console.log('[API/Contact] Email successfully sent for:', sanitizedData.business);
        } else {
            console.warn('[API/Contact] RESEND_API_KEY config missing! Simulating success for:', sanitizedData);
        }

        return res.status(200).json({ success: true, message: 'Inquiry processed successfully.' });
    } catch (error) {
        console.error('[API/Contact] Error processing inquiry:', error);
        return res.status(500).json({ error: 'An internal server error occurred while sending the request. Please try again later.' });
    }
});


// ============================================================================ //
// 7. ERROR HANDLERS                                                            //
// ============================================================================ //

// 404 Handler
function NotFoundLayout(req) {
    const meta = { title: '404 - Asset Not Found | Velora Digital', description: 'The requested digital asset could not be located.' };
    const content = `
        <section class="py-32 max-w-3xl mx-auto px-4 text-center">
            <h1 class="font-display text-[8rem] font-bold text-velora-gold mb-2 leading-none">404</h1>
            <h2 class="font-display text-3xl font-bold text-velora-text mb-6 tracking-tight">Asset Not Found</h2>
            <p class="text-lg text-velora-muted mb-12 text-pretty">The digital architecture you are looking for does not exist or has been relocated.</p>
            <a href="/" class="btn-luxury inline-flex items-center justify-center px-10 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text hover:bg-velora-faint transition-colors focus:outline-none focus:ring-2 focus:ring-velora-text">
                Return to Studio
            </a>
        </section>`;
    return BaseLayout(req, meta, content);
}

app.use((req, res) => { 
    res.status(404).send(NotFoundLayout(req)); 
});

// 500 Global Error Handler
app.use((err, req, res, next) => {
    console.error('[Server Error]:', err);
    const meta = { title: '500 - Server Exception | Velora Digital', description: 'Internal server exception encountered.' };
    const content = `
        <section class="py-32 max-w-3xl mx-auto px-4 text-center">
            <h1 class="font-display text-[8rem] font-bold text-velora-gold mb-2 leading-none">500</h1>
            <h2 class="font-display text-3xl font-bold text-velora-text mb-6 tracking-tight">Internal Exception</h2>
            <p class="text-lg text-velora-muted mb-12 text-pretty">An unexpected irregularity occurred in our architecture. Please try again momentarily.</p>
            <a href="/" class="btn-luxury inline-flex items-center justify-center px-10 py-4 min-h-[44px] rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-velora-borderStrong text-velora-text hover:bg-velora-faint transition-colors focus:outline-none focus:ring-2 focus:ring-velora-text">
                Return to Studio
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