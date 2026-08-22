// ============================================================================ //
// VELORA DIGITAL - REUSABLE UI COMPONENTS & LAYOUT SYSTEM                      //
// ============================================================================ //

const { CONFIG } = require('./data');

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
            "description": "Professional Web Design, Local SEO & Technical Maintenance Studio for Local Businesses",
            "telephone": CONFIG.phone,
            "email": CONFIG.email,
            "address": { "@type": "PostalAddress", "addressCountry": "IN" },
            "priceRange": "₹₹",
            "areaServed": ["Gurugram", "Delhi NCR", "Chandigarh", "Bengaluru", "India"],
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
        };
    }
    if (type === 'Service') {
        return {
            ...base,
            "@type": "Service",
            "name": data.name,
            "description": data.description,
            "provider": { "@type": "ProfessionalService", "name": "Velora Digital" }
        };
    }
    if (type === 'Article') {
        return {
            ...base,
            "@type": "Article",
            "headline": data.title,
            "description": data.summary || data.description,
            "author": { "@type": "Organization", "name": data.author || "Velora Studio" },
            "datePublished": new Date(data.date).toISOString()
        };
    }
    if (type === 'BreadcrumbList') {
        return {
            ...base,
            "@type": "BreadcrumbList",
            "itemListElement": data.items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.title,
                "item": `${CONFIG.baseUrl}${item.link}`
            }))
        };
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
        return `<a href="${href}" class="px-3 py-2 min-h-[44px] flex items-center rounded-lg text-sm tracking-wide transition-all ${isActive ? 'text-velora-gold font-semibold bg-velora-faint' : 'text-velora-muted hover:text-velora-text hover:bg-velora-faint'}">${label}</a>`;
    };

    return `
    <header class="sticky top-0 z-50 nav-glass transition-all duration-300 border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <a href="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-velora-gold rounded-lg min-h-[44px] px-1" id="nav-brand-logo">
                    <img src="/logo.png" alt="Velora Digital Logo" width="36" height="36" class="w-9 h-9 rounded object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 invert dark:invert-0">
                    <div class="flex flex-col">
                        <span class="font-display font-bold text-xl tracking-tight text-velora-text leading-none">VELORA</span>
                        <span class="text-[9px] uppercase tracking-[0.25em] text-velora-muted font-medium mt-1">Digital Studio</span>
                    </div>
                </a>
                <nav class="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
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
                    <button id="theme-toggle-btn" class="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-velora-muted hover:text-velora-text hover:bg-velora-faint focus:outline-none focus:ring-2 focus:ring-velora-gold transition-colors" aria-label="Toggle Theme" aria-pressed="false">
                        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                    <a href="/contact" id="header-cta-btn" class="btn-luxury px-6 py-2.5 min-h-[44px] flex items-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText focus:outline-none focus:ring-2 focus:ring-velora-gold shadow-sm hover:opacity-90 transition-opacity">
                        <span>Get a Quote</span>
                    </a>
                </div>
                <div class="flex items-center xl:hidden">
                    <button id="theme-toggle-mobile-btn" class="p-2 mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-velora-muted hover:text-velora-text focus:outline-none focus:ring-2 focus:ring-velora-gold transition-colors" aria-label="Toggle Theme" aria-pressed="false">
                        <svg id="theme-toggle-light-icon-mob" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg id="theme-toggle-dark-icon-mob" class="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </button>
                    <button id="mobile-menu-btn" aria-expanded="false" aria-label="Toggle Navigation Menu" class="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-velora-muted hover:text-velora-text hover:bg-velora-faint focus:outline-none focus:ring-2 focus:ring-velora-gold">
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
    <footer class="relative bg-velora-bg pt-20 pb-28 sm:pb-12 mt-20 border-t border-velora-border overflow-hidden transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                <div class="lg:col-span-4 space-y-5">
                    <div class="flex items-center gap-3">
                        <img src="/logo.png" alt="Velora Digital Logo" width="32" height="32" class="w-8 h-8 rounded object-cover invert dark:invert-0">
                        <span class="font-display font-bold text-xl tracking-tight text-velora-text">VELORA DIGITAL</span>
                    </div>
                    <p class="text-sm text-velora-muted leading-relaxed max-w-sm text-pretty">
                        A focused web design & local SEO studio. We build clean, fast-loading websites that make serious local businesses easy to discover, trust, and contact.
                    </p>
                    <div class="pt-2 text-xs text-velora-muted space-y-1.5">
                        <div class="flex items-center gap-2">
                            <span class="text-velora-gold">📍</span>
                            <span>Serving Gurugram, Delhi NCR, Chandigarh & Bengaluru</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-velora-gold">✉️</span>
                            <a href="mailto:${CONFIG.email}" class="hover:text-velora-gold transition-colors">${CONFIG.email}</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-velora-gold">📞</span>
                            <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="hover:text-velora-gold transition-colors">${CONFIG.phone}</a>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Services</h4>
                    <ul class="space-y-2.5 text-sm text-velora-muted">
                        <li><a href="/services/website-design" class="block py-1 hover:text-velora-gold transition-colors">Web Design</a></li>
                        <li><a href="/services/local-seo" class="block py-1 hover:text-velora-gold transition-colors">Local SEO</a></li>
                        <li><a href="/services/website-maintenance" class="block py-1 hover:text-velora-gold transition-colors">Maintenance Care</a></li>
                        <li><a href="/services" class="block py-1 hover:text-velora-gold font-medium transition-colors">All Services &rarr;</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-2">
                    <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Industries</h4>
                    <ul class="space-y-2.5 text-sm text-velora-muted">
                        <li><a href="/industries/real-estate" class="block py-1 hover:text-velora-gold transition-colors">Real Estate</a></li>
                        <li><a href="/industries/restaurants" class="block py-1 hover:text-velora-gold transition-colors">Restaurants</a></li>
                        <li><a href="/industries/clinics" class="block py-1 hover:text-velora-gold transition-colors">Clinics & Dentists</a></li>
                        <li><a href="/industries/salons" class="block py-1 hover:text-velora-gold transition-colors">Salons & Spas</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-4">
                    <h4 class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Company & Exploration</h4>
                    <div class="grid grid-cols-2 gap-2 text-sm text-velora-muted mb-6">
                        <a href="/about" class="block py-1 hover:text-velora-gold transition-colors">About Studio</a>
                        <a href="/portfolio" class="block py-1 hover:text-velora-gold transition-colors">Portfolio</a>
                        <a href="/process" class="block py-1 hover:text-velora-gold transition-colors">Our Process</a>
                        <a href="/pricing" class="block py-1 hover:text-velora-gold transition-colors">Pricing & Calculator</a>
                        <a href="/blog" class="block py-1 hover:text-velora-gold transition-colors">Journal & Advice</a>
                        <a href="/locations" class="block py-1 hover:text-velora-gold transition-colors">Service Areas</a>
                    </div>
                    <div class="p-4 rounded-xl bg-velora-surface border border-velora-border">
                        <div class="text-xs font-semibold text-velora-text mb-1">Honest Studio Guarantee</div>
                        <div class="text-xs text-velora-muted leading-relaxed">No fake metrics or inflated agency retainers. Clean code, clear pricing, and reliable delivery.</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-velora-border text-xs text-velora-muted">
                <div>&copy; ${new Date().getFullYear()} Velora Digital. All rights reserved.</div>
                <div class="flex items-center gap-4">
                    <a href="/privacy-policy" class="hover:text-velora-text transition-colors">Privacy Policy</a>
                    <span aria-hidden="true">&bull;</span>
                    <a href="/terms" class="hover:text-velora-text transition-colors">Terms of Service</a>
                    <span aria-hidden="true">&bull;</span>
                    <a href="/sitemap.xml" class="hover:text-velora-text transition-colors">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>`;
}

function FloatingContact(currentPath = '') {
    let defaultMsg = 'Hello Velora Digital, I would like to request a quote for my business website.';
    if (currentPath === '/pricing') defaultMsg = 'Hello Velora Digital, I am reviewing your pricing plans and would like to discuss a project.';
    if (currentPath.startsWith('/services')) defaultMsg = 'Hello Velora Digital, I would like to discuss your web design & SEO services.';

    return `
    <!-- Desktop Floating Quote Button -->
    <div class="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a href="/contact" id="desktop-floating-cta" class="flex items-center gap-3 px-5 py-3 bg-velora-button text-velora-buttonText rounded-full transition-transform duration-300 hover:scale-105 shadow-xl border border-velora-borderStrong focus:outline-none focus:ring-2 focus:ring-velora-gold" aria-label="Get a Quote">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-[0.2em]">Get a Quote</span>
        </a>
    </div>
    
    <!-- Mobile Sticky Contact Bar -->
    <div class="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-velora-surface/95 backdrop-blur-xl border-t border-velora-border pb-safe">
        <div class="flex items-center justify-between px-3 py-2.5 gap-2">
            <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(defaultMsg)}" id="mobile-whatsapp-btn" class="flex-1 flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 py-3 min-h-[44px] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors active:scale-95">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 2c-5.514 0-9.998 4.484-9.998 9.998 0 1.983.58 3.829 1.58 5.385l-1.613 5.888 6.042-1.583c1.492.81 3.208 1.282 5.011 1.282 5.514 0 10.027-4.484 10.027-9.998 0-5.514-4.513-9.998-10.049-9.998zm5.958 14.158c-.247.693-1.229 1.299-1.999 1.464-.528.113-1.218.204-3.535-.758-2.962-1.229-4.869-4.249-5.018-4.448-.148-.198-1.213-1.613-1.213-3.076 0-1.463.766-2.183 1.038-2.48.272-.297.593-.371.791-.371.198 0 .396.002.569.01.183.008.43-.069.673.515.247.585.841 2.052.915 2.201.074.148.124.321.025.519-.099.198-.148.321-.297.495-.148.173-.313.387-.446.52-.148.148-.303.309-.13.606.173.297.771 1.272 1.657 2.062 1.139 1.015 2.1 1.328 2.397 1.476.297.148.47.124.643-.074.173-.198.742-.866.94-1.163.198-.297.396-.247.668-.148.272.099 1.73.816 2.027.965.297.148.495.223.569.346.074.124.074.718-.173 1.411z"/></svg>
                WhatsApp
            </a>
            <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" id="mobile-call-btn" class="flex-1 flex items-center justify-center gap-2 bg-velora-faint hover:bg-velora-faintHover border border-velora-borderStrong text-velora-text py-3 min-h-[44px] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call Us
            </a>
            <a href="/contact" id="mobile-quote-btn" class="flex-1 flex items-center justify-center gap-1.5 bg-velora-button text-velora-buttonText py-3 min-h-[44px] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors active:scale-95">
                Quote
            </a>
        </div>
    </div>`;
}

function Breadcrumbs(items) {
    if (!items || items.length === 0) return '';
    const links = items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return `
            ${idx > 0 ? '<span class="text-velora-muted opacity-40 px-2 text-xs" aria-hidden="true">/</span>' : ''}
            ${isLast ? `<span class="text-velora-gold font-semibold text-xs uppercase tracking-wider" aria-current="page">${item.title}</span>` 
                     : `<a href="${item.link}" class="text-xs uppercase tracking-wider text-velora-muted hover:text-velora-text transition-colors">${item.title}</a>`}
        `;
    }).join('');

    return `
    <nav aria-label="Breadcrumb" class="bg-velora-bg border-b border-velora-border py-3 text-velora-muted">
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
    if (pageSchema) schemas.push(pageSchema);
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);

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
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
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
            --color-nav-glass: rgba(248, 250, 252, 0.92);
        }
        
        html.dark {
            --color-bg: #07090e;
            --color-surface: #0e121a;
            --color-card: #141a24;
            --color-card-hover: #1c2432;
            --color-border: rgba(255, 255, 255, 0.09);
            --color-border-strong: rgba(255, 255, 255, 0.18);
            --color-text-main: #f1f5f9;
            --color-text-muted: #94a3b8;
            --color-faint: rgba(255, 255, 255, 0.05);
            --color-faint-hover: rgba(255, 255, 255, 0.1);
            --color-btn-bg: #ffffff;
            --color-btn-text: #07090e;
            --color-btn-hover: #e2e8f0;
            --color-nav-glass: rgba(7, 9, 14, 0.90);
        }

        body { 
            background-color: var(--color-bg); 
            color: var(--color-text-main); 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            overflow-x: hidden; 
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .pb-safe { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
        @media (max-width: 639px) { body { padding-bottom: 74px; } }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--color-bg); }
        ::-webkit-scrollbar-thumb { background: var(--color-border-strong); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #d4af37; }
        
        ::selection { background-color: #d4af37; color: #000; }
        
        .gold-gradient-text { 
            background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
        }

        html:not(.dark) .text-velora-gold { color: #b8860b !important; }
        html:not(.dark) .hover\\:text-velora-gold:hover { color: #b8860b !important; }
        html:not(.dark) .group:hover .group-hover\\:text-velora-gold { color: #b8860b !important; }
        
        .premium-border { 
            border: 1px solid var(--color-border); 
            transition: all 0.25s ease;
        }
        .premium-border:hover {
            border-color: rgba(212, 175, 55, 0.35);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
        }
        html.dark .premium-border:hover { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.35); }
        
        .input-luxury { transition: all 0.25s ease; }
        .input-luxury:focus { border-color: #d4af37; box-shadow: 0 1px 0 0 #d4af37; }
        .nav-glass { background: var(--color-nav-glass); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid #d4af37; outline-offset: 2px; }
        
        .reveal { opacity: 0; transform: translateY(12px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
    </style>
    
    <script type="application/ld+json">
    ${JSON.stringify(schemas, null, 2)}
    </script>
</head>
<body class="min-h-screen flex flex-col bg-velora-bg text-velora-text">
    ${FloatingContact(req.path)}
    ${Header(req.path)}
    ${meta.breadcrumbs ? Breadcrumbs(meta.breadcrumbs) : ''}
    
    <main class="flex-grow min-h-[70vh]">
        ${bodyContent}
    </main>
    
    ${Footer()}

    <script>
        // Theme toggle
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

        // Mobile menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(menuBtn && menu) {
            menuBtn.addEventListener('click', function() {
                menu.classList.toggle('hidden');
                menuBtn.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
            });
        }

        // Scroll reveal
        document.addEventListener("DOMContentLoaded", function() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
                return;
            }
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('active');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.08 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // Conversion tracking helper
        window.veloraTrack = function(eventName, meta) {
            const eventData = { event: eventName, ...meta, timestamp: Date.now() };
            window.dispatchEvent(new CustomEvent('velora:event', { detail: eventData }));
            if (window.dataLayer && Array.isArray(window.dataLayer)) {
                window.dataLayer.push(eventData);
            }
        };

        ${scriptContent}
    </script>
</body>
</html>`;
}

module.exports = {
    escapeHTML,
    generateSchema,
    Header,
    Footer,
    FloatingContact,
    Breadcrumbs,
    BaseLayout
};
