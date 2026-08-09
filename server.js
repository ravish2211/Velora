// ============================================================================ //
// 1. IMPORTS & SETUP                                                           //
// ============================================================================ //
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { Resend } = require('resend');

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3000;

// Initialize Resend HTTPS API Client
const resend = new Resend(process.env.RESEND_API_KEY);


// ============================================================================ //
// 2. MIDDLEWARE CONFIG                                                         //
// ============================================================================ //

app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use(compression());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ============================================================================ //
// 3. CONSTANTS & DATA                                                          //
// ============================================================================ //
const CONFIG = {
    baseUrl: process.env.BASE_URL || 'https://veloradigital.in',
    phone: process.env.CONTACT_PHONE || '+91 73037 33735',
    whatsapp: process.env.CONTACT_WHATSAPP || '917303733735',
    email: process.env.CONTACT_EMAIL || 'ravishnoob123@gmail.com',
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
            --color-text-muted: #64748b;
            --color-faint: rgba(0, 0, 0, 0.04);
            --color-faint-hover: rgba(0, 0, 0, 0.08);
            --color-btn-bg: #0f172a;
            --color-btn-text: #ffffff;
            --color-btn-hover: #334155;
            --color-nav-glass: rgba(248, 250, 252, 0.85);
        }
        
        html.dark {
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
        
        @media (max-width: 639px) { body { padding-bottom: 80px; } }
        
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

        html:not(.dark) .text-velora-gold { color: #997300 !important; }
        html:not(.dark) .hover\\:text-velora-gold:hover { color: #997300 !important; }
        html:not(.dark) .group:hover .group-hover\\:text-velora-gold { color: #997300 !important; }
        
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
    
    <script type="application/ld+json">
    ${JSON.stringify(schemas, null, 2)}
    </script>
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
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn && menu) {
            btn.addEventListener('click', function() {
                menu.classList.toggle('hidden');
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', !expanded);
            });
        }

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
            </div>
        </section>
    `;

    res.send(BaseLayout(req, meta, content));
});

app.get('/services', (req, res) => {
    const meta = {
        title: 'Digital Architecture & SEO Services | Velora Studio',
        description: 'Explore our core capabilities: Digital Architecture, Search Positioning, and Studio Maintenance.',
        breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Capabilities', link: '/services'}]
    };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Capabilities</h1></div>'));
});

app.get('/industries', (req, res) => {
    const meta = { title: 'Elite Sectors | Velora Digital', description: 'Elite sectors we serve.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Industries', link: '/industries'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Elite Sectors</h1></div>'));
});

app.get('/locations', (req, res) => {
    const meta = { title: 'Geographic Markets | Velora Digital', description: 'Markets we serve.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Markets', link: '/locations'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Markets</h1></div>'));
});

app.get('/portfolio', (req, res) => {
    const meta = { title: 'Concept Portfolio | Velora Digital', description: 'Portfolio.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Portfolio', link: '/portfolio'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Portfolio</h1></div>'));
});

app.get('/process', (req, res) => {
    const meta = { title: 'Methodology | Velora Digital', description: 'Methodology.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Methodology', link: '/process'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Methodology</h1></div>'));
});

app.get('/pricing', (req, res) => {
    const meta = { title: 'Investment | Velora Digital', description: 'Pricing.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Investment', link: '/pricing'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Investment</h1></div>'));
});

app.get('/about', (req, res) => {
    const meta = { title: 'Studio Philosophy | Velora Digital', description: 'About.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Studio', link: '/about'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Studio</h1></div>'));
});

app.get('/blog', (req, res) => {
    const meta = { title: 'Journal | Velora Digital', description: 'Journal.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Journal', link: '/blog'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Journal</h1></div>'));
});

app.get('/privacy-policy', (req, res) => {
    const meta = { title: 'Privacy Policy | Velora Digital', description: 'Privacy Policy.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Privacy Policy', link: '/privacy-policy'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Privacy Policy</h1></div>'));
});

app.get('/terms', (req, res) => {
    const meta = { title: 'Terms of Service | Velora Digital', description: 'Terms.', breadcrumbs: [{title: 'Home', link: '/'}, {title: 'Terms of Service', link: '/terms'}] };
    res.send(BaseLayout(req, meta, '<div class="py-32 text-center"><h1 class="text-4xl font-bold font-display">Terms of Service</h1></div>'));
});

app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://veloradigital.in/</loc></url></urlset>');
});

app.get('/robots.txt', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.send('User-agent: *\nAllow: /');
});


// ============================================================================ //
// 6. API ROUTES (RESEND HTTPS INTEGRATION)                                     //
// ============================================================================ //

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 20,
    message: { error: 'Too many inquiries sent from this IP. Please wait an hour or contact us directly via WhatsApp/Phone.' },
    standardHeaders: true,
    legacyHeaders: false,
});

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

        const htmlTemplate = `
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
        `;

        // Dispatch via Resend HTTPS API (Port 443) - Bypasses Render SMTP Blocking entirely
        if (process.env.RESEND_API_KEY) {
            const { data, error } = await resend.emails.send({
                from: 'Velora Digital Studio <onboarding@resend.dev>',
                to: [CONFIG.email],
                replyTo: sanitizedData.email !== 'Not provided' ? sanitizedData.email : undefined,
                subject: `New Assessment Request: ${sanitizedData.business}`,
                html: htmlTemplate
            });

            if (error) {
                console.error('[API/Contact] Resend API Error:', error);
                throw new Error(error.message || 'Failed to dispatch email via Resend API.');
            }

            console.log('[API/Contact] Email successfully dispatched via Resend for:', sanitizedData.business);
        } else {
            console.warn('[API/Contact] RESEND_API_KEY missing! Simulating success for:', sanitizedData);
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

app.use((err, req, res, next) => {
    console.error('[Server Error]:', err);
    res.status(500).send('Internal Server Exception');
});


// ============================================================================ //
// 8. SERVER INITIALIZATION                                                     //
// ============================================================================ //

app.listen(PORT, () => { 
    console.log(`Velora Digital SSR running at http://localhost:${PORT}`); 
});