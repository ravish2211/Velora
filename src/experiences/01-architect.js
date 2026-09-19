// ============================================================================ //
// VELORA DIGITAL — 01 ARCHITECT EXPERIENCE PRESENTATION                         //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, BLOG, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");


function ArchitectHeader(currentPath) {
    const navItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="px-3 py-2 min-h-[44px] flex items-center rounded-lg text-sm tracking-wide transition-all ${isActive ? 'text-velora-accent font-semibold bg-velora-faint' : 'text-velora-muted hover:text-velora-text hover:bg-velora-faint'}">${label}</a>`;
    };

    const mobileNavItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="mobile-nav-link block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-velora-accent font-semibold bg-velora-faint' : 'text-velora-muted hover:text-velora-text hover:bg-velora-faint'}">${label}</a>`;
    };

    return `
    <header class="sticky top-0 z-50 bg-velora-bg/95 backdrop-blur-md transition-all duration-300 border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <a href="/" class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-lg min-h-[44px] px-1" id="nav-brand-logo">
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
                    <a href="/contact" id="header-cta-btn" class="btn-luxury px-6 py-2.5 min-h-[44px] flex items-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent shadow-sm hover:opacity-90 transition-opacity">
                        <span>Get a Quote</span>
                    </a>
                </div>
                <div class="flex items-center xl:hidden">
                    <button id="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle Navigation Menu" class="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-velora-muted hover:text-velora-text hover:bg-velora-faint focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="mobile-nav-drawer xl:hidden bg-velora-surface border-b border-velora-border px-4 pt-2 pb-6 space-y-1 shadow-2xl" aria-hidden="true" role="region" aria-label="Mobile Navigation Drawer">
            ${mobileNavItem('/services', 'Services')}
            ${mobileNavItem('/industries', 'Industries')}
            ${mobileNavItem('/portfolio', 'Portfolio')}
            ${mobileNavItem('/process', 'Process')}
            ${mobileNavItem('/pricing', 'Pricing')}
            ${mobileNavItem('/about', 'About')}
            ${mobileNavItem('/blog', 'Journal')}
            ${mobileNavItem('/locations', 'Locations')}
            <a href="/contact" class="mobile-nav-link btn-luxury block w-full text-center mt-6 px-5 py-3.5 min-h-[44px] flex items-center justify-center rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText">Get a Quote</a>
        </div>
    </header>`;
}

function ArchitectFooter() {
    return `
    <footer class="relative bg-velora-bg pt-20 pb-28 sm:pb-24 mt-20 border-t border-velora-border overflow-hidden transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                <div class="lg:col-span-3 space-y-5">
                    <div class="flex items-center gap-3">
                        <img src="/logo.png" alt="Velora Digital Logo" width="32" height="32" class="w-8 h-8 rounded object-cover invert dark:invert-0">
                        <span class="font-display font-bold text-xl tracking-tight text-velora-text">VELORA DIGITAL</span>
                    </div>
                    <p class="text-sm text-velora-muted leading-relaxed max-w-sm text-pretty">
                        A focused web design & local SEO studio. We build clean, fast-loading websites that make serious local businesses easy to discover, trust, and contact.
                    </p>
                    <div class="pt-2 text-xs text-velora-muted space-y-1.5">
                        <div class="flex items-center gap-2">
                            <span class="text-velora-accent">📍</span>
                            <span>Serving Gurugram, Delhi NCR, Chandigarh & Bengaluru</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-velora-accent">✉️</span>
                            <a href="mailto:${CONFIG.email}" onclick="if(window.veloraTrack) window.veloraTrack('email_click', { url: this.href })" class="hover:text-velora-accent transition-colors">${CONFIG.email}</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-velora-accent">📞</span>
                            <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" onclick="if(window.veloraTrack) window.veloraTrack('phone_click', { url: this.href })" class="hover:text-velora-accent transition-colors">${CONFIG.phone}</a>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Services</p>
                    <ul class="space-y-2.5 text-sm text-velora-muted">
                        <li><a href="/services/website-design" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Web Design</a></li>
                        <li><a href="/services/local-seo" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Local SEO</a></li>
                        <li><a href="/services/website-maintenance" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Maintenance Care</a></li>
                        <li><a href="/services" class="flex items-center min-h-[44px] hover:text-velora-accent font-medium transition-colors">All Services &rarr;</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-2">
                    <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Industries</p>
                    <ul class="space-y-2.5 text-sm text-velora-muted">
                        <li><a href="/industries/real-estate" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Real Estate</a></li>
                        <li><a href="/industries/restaurants" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Restaurants</a></li>
                        <li><a href="/industries/clinics" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Clinics & Dentists</a></li>
                        <li><a href="/industries/salons" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Salons & Spas</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-2">
                    <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Locations</p>
                    <ul class="space-y-2.5 text-sm text-velora-muted">
                        <li><a href="/locations/gurugram" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Gurugram</a></li>
                        <li><a href="/locations/delhi-ncr" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Delhi NCR</a></li>
                        <li><a href="/locations/chandigarh" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Chandigarh</a></li>
                        <li><a href="/locations/bengaluru" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Bengaluru</a></li>
                    </ul>
                </div>
                <div class="lg:col-span-3">
                    <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-velora-text mb-5">Company & Exploration</p>
                    <div class="grid grid-cols-2 gap-2 text-sm text-velora-muted mb-6">
                        <a href="/about" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">About Studio</a>
                        <a href="/portfolio" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Portfolio</a>
                        <a href="/process" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Our Process</a>
                        <a href="/pricing" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Pricing & Calculator</a>
                        <a href="/blog" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Journal & Advice</a>
                        <a href="/locations" class="flex items-center min-h-[44px] hover:text-velora-accent transition-colors">Service Areas</a>
                    </div>
                    <div class="p-4 rounded-xl bg-velora-surface border border-velora-border">
                        <div class="text-xs font-semibold text-velora-text mb-1">Honest Studio Guarantee</div>
                        <div class="text-xs text-gray-400 leading-relaxed">No fake metrics or inflated agency retainers. Clean code, clear pricing, and reliable delivery.</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-velora-border text-xs text-gray-400">
                <div class="flex items-center gap-4 flex-wrap justify-center">
                    <div>&copy; ${new Date().getFullYear()} Velora Digital. All rights reserved.</div>
                    <span aria-hidden="true" class="hidden md:inline">&bull;</span>
                    <div class="relative group">
                        <button id="studio-theme-btn" class="flex items-center gap-1.5 hover:text-velora-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded px-1.5 py-0.5" aria-haspopup="true" aria-expanded="false">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                            <span>Studio Themes</span>
                        </button>
                        <div id="studio-theme-menu" class="absolute bottom-full left-0 mb-2 w-48 bg-velora-surface border border-velora-border rounded-xl shadow-xl p-2 hidden z-50">
                            <button class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-sm rounded-lg hover:bg-velora-faint transition-colors text-velora-text" data-theme-value="onyx">
                                <span>Onyx / Champagne</span>
                                <span class="w-3 h-3 rounded-full bg-velora-accent"></span>
                            </button>
                            <button class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-sm rounded-lg hover:bg-velora-faint transition-colors text-velora-text" data-theme-value="obsidian">
                                <span>Obsidian / Titanium</span>
                                <span class="w-3 h-3 rounded-full bg-[#E2E8F0]"></span>
                            </button>
                            <button class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-sm rounded-lg hover:bg-velora-faint transition-colors text-velora-text" data-theme-value="midnight">
                                <span>Midnight / Cobalt</span>
                                <span class="w-3 h-3 rounded-full bg-[#0ea5e9]"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-4 flex-wrap justify-center md:justify-end md:pr-36">
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

function renderArchitectExperience(currentPath = "/") {
    const meta = {
        title: 'Velora Digital | Web Design, Local SEO & Maintenance Studio',
        description: 'We engineer fast, mobile-first websites and local search foundations for serious businesses across India. Transparent pricing, clean code, no fluff.',
        schema: generateSchema('FAQPage', { faqs: FAQS }),
        breadcrumbs: null
    };

    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spice = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const content = `
    <!-- 1. HERO SECTION -->
    <section id="hero" class="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div class="w-full lg:w-[55%] xl:w-[60%]">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-velora-faint border-none text-xs font-semibold uppercase tracking-widest text-velora-accent mb-8 arch-reveal">
                    <span class="w-2 h-2 rounded-full bg-velora-accent animate-pulse"></span>
                    <span>Engineering High-Converting Local Websites</span>
                </div>
                <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-velora-text leading-[1.08] text-balance arch-reveal" style="transition-delay: 50ms;">
                    Websites That Build Instant Trust & <span class="accent-gradient-text">Drive Local Calls</span>.
                </h1>
                <p class="mt-6 text-lg sm:text-xl text-velora-muted leading-relaxed max-w-2xl text-pretty arch-reveal" style="transition-delay: 100ms;">
                    We design and develop fast, mobile-first websites and technical local SEO for clinics, restaurants, real estate firms, and local businesses in India. No bloated page-builders, no fake promises.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 arch-reveal" style="transition-delay: 150ms;">
                    <a href="/contact" id="hero-primary-cta" class="btn-luxury inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:opacity-95 transition-opacity shadow-lg relative group">
                        <span class="relative z-10">Get a Free Project Quote</span>
                        <div class="absolute inset-0 rounded-full bg-velora-accent opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                    </a>
                    <a href="/portfolio" id="hero-secondary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-faint hover:bg-velora-faintHover border-none text-velora-text transition-colors">
                        Explore Concept Work &rarr;
                    </a>
                </div>
                <div class="mt-12 pt-8 border-t border-velora-border flex relative arch-rule flex-wrap items-center gap-6 sm:gap-10 text-xs font-medium text-velora-muted arch-reveal" style="transition-delay: 200ms;">
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>Lightning-fast Mobile Load Speed</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>100% Custom Coded, Zero Builder Bloat</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>Full Code & Domain Ownership</span>
                    </div>
                </div>
            </div>
            
            <!-- HERO RIGHT: Architectural Drafting Composition (Desktop Only) -->
            <div class="w-full lg:w-[45%] xl:w-[40%] block mt-16 lg:mt-0 relative" aria-hidden="true">
                <!-- Extremely subtle ambient radiance -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-velora-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div class="w-full max-w-[480px] mx-auto relative hero-drafting-plate">
                    <!-- Layer 1: Recessed Base (Dark Architectural Backing Plane) -->
                    <div class="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-velora-bg/80 border border-velora-border/40 shadow-2xl pointer-events-none">
                        <!-- Corner Registration Ticks on Recessed Layer -->
                        <div class="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-velora-border"></div>
                        <div class="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-velora-border"></div>
                        <div class="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-velora-border"></div>
                        <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-velora-border"></div>
                    </div>

                    <!-- Layer 2: Primary Drafting Plate -->
                    <div class="relative z-10 w-full rounded-3xl bg-velora-card/90 border border-velora-borderStrong/50 p-5 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-sm">
                        <!-- Corner Accent Crosshairs -->
                        <div class="absolute top-3 left-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>
                        <div class="absolute top-3 right-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>
                        <div class="absolute bottom-3 left-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>
                        <div class="absolute bottom-3 right-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>

                        <!-- Architectural Vector Drafting Plate SVG (ViewBox 0 0 440 540) -->
                        <svg class="w-full h-auto block select-none" viewBox="0 0 440 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- PHASE 1: Primary Structural Framework (Frame, Datum, Registration) -->
                            <g class="drafting-phase-1">
                                <!-- Registration Corner Crosses -->
                                <path d="M 12 18 h 12 M 18 12 v 12" stroke="var(--color-border-strong)" stroke-width="0.75" />
                                <path d="M 416 18 h 12 M 422 12 v 12" stroke="var(--color-border-strong)" stroke-width="0.75" />

                                <!-- Primary Datum Ruler Line -->
                                <line x1="18" y1="36" x2="422" y2="36" stroke="var(--color-border)" stroke-width="1" />
                                
                                <!-- Calibration Ticks along Datum -->
                                <line x1="18" y1="32" x2="18" y2="40" stroke="var(--color-border-strong)" stroke-width="1" />
                                <line x1="85" y1="34" x2="85" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                                <line x1="152" y1="34" x2="152" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                                <line x1="220" y1="32" x2="220" y2="40" stroke="var(--color-accent)" stroke-width="1" />
                                <line x1="288" y1="34" x2="288" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                                <line x1="355" y1="34" x2="355" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                                <line x1="422" y1="32" x2="422" y2="40" stroke="var(--color-border-strong)" stroke-width="1" />

                                <!-- Secondary Horizontal Rule (Grid Ceiling) -->
                                <line x1="18" y1="66" x2="422" y2="66" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="2 3" />

                                <!-- Primary Architectural Proportion Frame (Golden Section Specimen Box) -->
                                <rect x="60" y="96" width="288" height="178" rx="2" fill="var(--color-surface)" fill-opacity="0.5" stroke="var(--color-border-strong)" stroke-width="1" stroke-opacity="0.6" />

                                <!-- Grid Base Datum Line -->
                                <line x1="18" y1="412" x2="422" y2="412" stroke="var(--color-border)" stroke-width="1" />

                                <!-- Footer Plate Notation Line -->
                                <line x1="112" y1="490" x2="412" y2="490" stroke="var(--color-border)" stroke-width="0.5" />
                            </g>

                            <!-- PHASE 2: Secondary Construction (Grid, Guides, Calipers, Sub-Modules) -->
                            <g class="drafting-phase-2">
                                <!-- Subtle 12-Column Structural Grid (Hairlines) -->
                                <line x1="28" y1="66" x2="28" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="60" y1="66" x2="60" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="92" y1="66" x2="92" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="124" y1="66" x2="124" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="156" y1="66" x2="156" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="188" y1="66" x2="188" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="220" y1="66" x2="220" y2="412" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="4 4" stroke-opacity="0.4" />
                                <line x1="252" y1="66" x2="252" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="284" y1="66" x2="284" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="316" y1="66" x2="316" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="348" y1="66" x2="348" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="380" y1="66" x2="380" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="412" y1="66" x2="412" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />

                                <!-- Horizontal Baseline Guide Lines -->
                                <line x1="18" y1="120" x2="422" y2="120" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                                <line x1="18" y1="174" x2="422" y2="174" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                                <line x1="18" y1="228" x2="422" y2="228" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                                <line x1="18" y1="282" x2="422" y2="282" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                                <line x1="18" y1="336" x2="422" y2="336" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                                <line x1="18" y1="390" x2="422" y2="390" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />

                                <!-- Diagonal Dynamic Construction Vector -->
                                <line x1="60" y1="96" x2="348" y2="274" stroke="var(--color-accent)" stroke-width="0.75" stroke-dasharray="3 4" stroke-opacity="0.35" />

                                <!-- Golden Cut Vertical Harmonic Rule -->
                                <line x1="238" y1="96" x2="238" y2="274" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="2 2" stroke-opacity="0.5" />

                                <!-- Dimension Caliper / Margin Callout: Left Margin Lines -->
                                <g stroke="var(--color-accent)" stroke-width="0.75" stroke-opacity="0.7">
                                    <line x1="28" y1="185" x2="60" y2="185" />
                                    <line x1="28" y1="180" x2="28" y2="190" />
                                    <line x1="60" y1="180" x2="60" y2="190" />
                                </g>

                                <!-- Proportion Annotation: Right of Frame Lines -->
                                <g stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.5">
                                    <line x1="358" y1="148" x2="412" y2="148" />
                                    <line x1="412" y1="148" x2="412" y2="230" />
                                    <line x1="358" y1="230" x2="412" y2="230" />
                                </g>

                                <!-- Horizontal Fluid Axis Line & Markers -->
                                <line x1="28" y1="298" x2="412" y2="298" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.6" />
                                <circle cx="28" cy="298" r="2" fill="var(--color-accent)" />
                                <circle cx="412" cy="298" r="2" fill="var(--color-accent)" />
                                <rect x="156" y="291" width="128" height="14" rx="2" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="0.5" />

                                <!-- Modular Sub-Layout Modules (y: 326 - 386) -->
                                <rect x="60" y="326" width="96" height="60" rx="3" fill="var(--color-surface)" fill-opacity="0.4" stroke="var(--color-border)" stroke-width="0.75" />
                                <line x1="70" y1="368" x2="140" y2="368" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 2" />

                                <rect x="166" y="326" width="214" height="60" rx="3" fill="var(--color-surface)" fill-opacity="0.4" stroke="var(--color-border)" stroke-width="0.75" />
                                <line x1="178" y1="368" x2="350" y2="368" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 2" />

                                <!-- Architectural Target Motif (Precision Crosshair) -->
                                <g>
                                    <circle cx="66" cy="472" r="24" fill="none" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="2 3" stroke-opacity="0.6" />
                                    <circle cx="66" cy="472" r="14" fill="none" stroke="var(--color-accent)" stroke-width="0.75" stroke-opacity="0.6" />
                                    <circle cx="66" cy="472" r="2.5" fill="var(--color-accent)" />
                                    <line x1="36" y1="472" x2="96" y2="472" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.8" />
                                    <line x1="66" y1="442" x2="66" y2="502" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.8" />
                                    <line x1="58" y1="464" x2="74" y2="480" stroke="var(--color-accent)" stroke-width="0.5" stroke-opacity="0.3" />
                                    <line x1="58" y1="480" x2="74" y2="464" stroke="var(--color-accent)" stroke-width="0.5" stroke-opacity="0.3" />
                                </g>
                            </g>

                            <!-- PHASE 3: Finishing Annotations & Typography -->
                            <g class="drafting-phase-3">
                                <!-- Header Micro-Typography -->
                                <text x="36" y="22" font-family="'Space Grotesk', monospace" font-size="8.5" font-weight="600" letter-spacing="0.18em" fill="var(--color-accent)">SYSTEM // 12-COL MODULAR</text>
                                <text x="404" y="22" font-family="'Space Grotesk', monospace" font-size="8" letter-spacing="0.16em" fill="var(--color-text-muted)" text-anchor="end">RATIO: 1.618 ── Φ</text>

                                <!-- Sub-datum Coordinate Reference -->
                                <text x="36" y="54" font-family="'Space Grotesk', monospace" font-size="7.5" letter-spacing="0.14em" fill="var(--color-text-muted)" fill-opacity="0.7">CANVAS // 01-A [PRIMARY COMPOSITION]</text>
                                <text x="404" y="54" font-family="'Space Grotesk', monospace" font-size="7.5" letter-spacing="0.12em" fill="var(--color-text-muted)" fill-opacity="0.7" text-anchor="end">SCALE // PROPORTIONAL DATUM</text>

                                <!-- Architectural Typographic Specimen: Monumental Outline Glyph "V" -->
                                <text x="96" y="222" font-family="'Space Grotesk', sans-serif" font-size="96" font-weight="700" fill="none" stroke="var(--color-border-strong)" stroke-width="1" stroke-opacity="0.25" letter-spacing="-0.04em">V</text>

                                <!-- Dimension Caliper / Margin Callout Text -->
                                <text x="44" y="178" font-family="'Space Grotesk', monospace" font-size="6.5" font-weight="600" fill="var(--color-accent)" text-anchor="middle" letter-spacing="0.1em">64 PX</text>

                                <!-- Proportion Annotation Texts -->
                                <text x="358" y="122" font-family="'Space Grotesk', monospace" font-size="7" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.1em">DISPLAY</text>
                                <text x="358" y="133" font-family="'Space Grotesk', monospace" font-size="6.5" fill="var(--color-text-muted)" fill-opacity="0.8" letter-spacing="0.08em">SCALE // Φ</text>
                                <text x="358" y="144" font-family="'Space Grotesk', monospace" font-size="6.5" fill="var(--color-text-muted)" fill-opacity="0.6" letter-spacing="0.08em">RHYTHM: 1.08</text>
                                <text x="358" y="244" font-family="'Space Grotesk', monospace" font-size="7" fill="var(--color-accent)" letter-spacing="0.1em">RATIO: Φ (1.618)</text>

                                <!-- Horizontal Fluid Axis Annotation Text -->
                                <text x="220" y="301" font-family="'Space Grotesk', monospace" font-size="7" font-weight="600" fill="var(--color-text-muted)" text-anchor="middle" letter-spacing="0.14em">COMPOSITIONAL AXIS // DATUM</text>

                                <!-- Modular Sub-Layout Texts -->
                                <text x="70" y="344" font-family="'Space Grotesk', monospace" font-size="7.5" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.1em">MOD // LATERAL AXIS</text>
                                <text x="70" y="358" font-family="'Space Grotesk', monospace" font-size="6.5" fill="var(--color-accent)" letter-spacing="0.08em">WIDTH: 25.0%</text>

                                <text x="178" y="344" font-family="'Space Grotesk', monospace" font-size="7.5" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.1em">MOD // EDITORIAL CORE</text>
                                <text x="178" y="358" font-family="'Space Grotesk', monospace" font-size="6.5" fill="var(--color-accent)" letter-spacing="0.08em">WIDTH: 75.0%</text>

                                <!-- Metadata Specification Block Texts -->
                                <text x="112" y="458" font-family="'Space Grotesk', monospace" font-size="8.5" font-weight="700" fill="var(--color-accent)" letter-spacing="0.16em">TARGET: TRUST</text>
                                <text x="250" y="458" font-family="'Space Grotesk', monospace" font-size="8" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.14em">DISCIPLINE: BESPOKE</text>
                                <text x="112" y="478" font-family="'Space Grotesk', monospace" font-size="7.5" fill="var(--color-text-muted)" fill-opacity="0.8" letter-spacing="0.12em">ARCHITECTURE: BESPOKE DIGITAL SYSTEMS</text>

                                <!-- Footer Plate Notation Texts -->
                                <text x="112" y="506" font-family="'Space Grotesk', monospace" font-size="7" fill="var(--color-text-muted)" fill-opacity="0.6" letter-spacing="0.12em">VELORA // ARCHITECTURAL DRAFTING PLATE</text>
                                <text x="412" y="506" font-family="'Space Grotesk', monospace" font-size="7" font-weight="600" fill="var(--color-accent)" letter-spacing="0.12em" text-anchor="end">PLATE NO. 01</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. CORE SERVICES (Structured Editorial Service Index) -->
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 arch-reveal">
            <div>
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Studio Disciplines</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">What We Build & Support</h2>
            </div>
            <a href="/services" class="text-xs uppercase tracking-[0.2em] font-bold text-velora-accent hover:text-velora-text transition-colors inline-flex py-3 items-center gap-2">
                Explore All Services <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
        </div>

        <div class="border-t border-velora-border/60 divide-y divide-velora-border/40">
            ${SERVICES.map((s, idx) => {
                const num = (idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`;
                const deliverables = [
                    ['Mobile-First Responsive Architecture', 'Click-to-Call & WhatsApp Triggers', 'Ultra-Fast Mobile Speed', 'Clean Semantic Code'],
                    ['Google Business Profile Alignment', 'Schema.org Structured Data', 'NAP Consistency Audits', 'Local Search Intent Architecture'],
                    ['High-Availability Cloud Hosting', 'SSL & Security Monitoring', 'Monthly Content Updates', 'Uptime & Lead Delivery Verification']
                ][idx] || s.benefits.slice(0, 4);

                return `
                <article class="group py-8 sm:py-10 lg:py-12 transition-colors duration-200 arch-reveal service-row-hover" style="transition-delay: ${idx * 60}ms;">
                    <!-- Row Header: Index Numeral + Service Title -->
                    <div class="flex items-baseline gap-4 sm:gap-6 mb-3 sm:mb-4">
                        <span class="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-velora-accent tracking-tight select-none text-balance">${num}</span>
                        <h3 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-velora-text tracking-tight group-hover:text-velora-accent transition-colors duration-200 text-balance">
                            <a href="/services/${s.slug}">${s.title}</a>
                        </h3>
                    </div>

                    <!-- Indented Content: Narrative Description + Deliverables & CTA -->
                    <div class="pl-10 sm:pl-14 lg:pl-16">
                        <p class="text-base text-velora-muted leading-relaxed mb-4 max-w-3xl text-pretty">
                            ${s.short}
                        </p>
                        
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                            <div class="text-xs sm:text-sm text-velora-text/80 font-normal leading-relaxed flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                ${deliverables.map((b, i) => `
                                    <span class="inline-flex items-center">
                                        ${i > 0 ? '<span class="text-velora-accent/50 select-none text-xs mx-2">&middot;</span>' : ''}
                                        <span>${b}</span>
                                    </span>
                                `).join('')}
                            </div>
                            <a href="/services/${s.slug}" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-velora-accent hover:text-velora-text transition-colors flex-shrink-0">
                                <span>View Service Details</span>
                                <span class="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </article>
                `;
            }).join('')}
        </div>
        <div class="border-b border-velora-border/60"></div>
    </section>

    <!-- 3. SELECTED WORK / PORTFOLIO -->
    <section class="py-20 md:py-28  bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 arch-reveal">
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-velora-faint border-none text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">
                        <span>Transparent Architecture</span>
                    </div>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Engineered Concept Demonstrations</h2>
                    <p class="mt-4 text-base text-velora-muted max-w-xl text-pretty">
                        We don't invent fake client metrics or paid awards. These production-ready prototypes benchmark our code speed, mobile UX, and conversion architecture.
                    </p>
                </div>
                <a href="/portfolio" class="text-xs uppercase tracking-[0.2em] font-bold text-velora-accent hover:text-velora-text transition-colors inline-flex py-3 items-center gap-2">
                    View Complete Portfolio <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
            </div>

            <!-- Asymmetric Editorial Showcase -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 pt-8 border-t border-velora-border/60">
                <!-- FLAGSHIP LEAD: AURORA CLINIC (lg:col-span-7) -->
                <div class="lg:col-span-7 flex flex-col justify-between arch-reveal">
                    <div>
                        <!-- Datum header line -->
                        <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-4 border-b border-velora-border/60">
                            <span class="font-mono text-xs font-semibold tracking-wider text-velora-accent">01 // HEALTHCARE &amp; CLINICAL AESTHETICS</span>
                            <span class="font-mono text-[10px] font-semibold uppercase tracking-widest text-velora-muted">Signature Design Concept</span>
                        </div>

                        <!-- Title & Positioning -->
                        <div class="mt-6 mb-5">
                            <h3 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-velora-text tracking-tight mb-2 text-balance">
                                ${aurora.title}
                            </h3>
                            <div class="text-sm sm:text-base font-semibold text-velora-accent">
                                ${aurora.industry} &bull; Conversion Architecture Benchmark
                            </div>
                        </div>

                        <!-- Summary -->
                        <p class="text-base text-velora-muted leading-relaxed mb-6 text-pretty">
                            ${aurora.summary}
                        </p>

                        <!-- Strategic Demonstration Rationale (Open Framing) -->
                        <div class="py-5 border-y border-velora-border/60 mb-6 space-y-4">
                            <div>
                                <div class="font-mono text-[10px] font-bold uppercase tracking-wider text-velora-accent mb-1">Strategic Objective</div>
                                <p class="text-sm text-velora-text font-medium leading-relaxed">${aurora.demonstrates}</p>
                            </div>
                            <div>
                                <div class="font-mono text-[10px] font-bold uppercase tracking-wider text-velora-muted mb-1">Key UX Decisions</div>
                                <p class="text-xs text-velora-muted leading-relaxed">${aurora.keyUxDecisions}</p>
                            </div>
                        </div>

                        <!-- Key Deliverables -->
                        <div class="mb-6">
                            <div class="font-mono text-[10px] font-bold uppercase tracking-wider text-velora-muted mb-3">Architectural Deliverables</div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-velora-muted">
                                ${aurora.deliverables.slice(0, 4).map(d => `
                                    <div class="flex items-start gap-2">
                                        <span class="text-velora-accent font-bold mt-px">&mdash;</span>
                                        <span class="leading-snug">${d}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Action Link -->
                    <div class="pt-6 border-t border-velora-border/60">
                        <a href="/portfolio#${aurora.id}" class="group inline-flex items-center justify-between w-full py-2 text-xs uppercase tracking-[0.2em] font-bold text-velora-text hover:text-velora-accent transition-colors">
                            <span>Inspect Technical Specifications</span>
                            <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                    </div>
                </div>

                <!-- SUPPORTING STUDIES: AARAV PROPERTIES & THE SPICE ROOM (lg:col-span-5) -->
                <div class="lg:col-span-5 lg:border-l border-velora-border/60 lg:pl-8 xl:pl-12 flex flex-col justify-between pt-10 lg:pt-0 border-t lg:border-t-0 border-velora-border/60">
                    <!-- Study 02: Aarav Properties -->
                    <div class="flex flex-col justify-between flex-1 pb-10 border-b border-velora-border/60 arch-reveal arch-rule" style="transition-delay: 100ms;">
                        <div>
                            <!-- Datum header line -->
                            <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-3 border-b border-velora-border/60">
                                <span class="font-mono text-[11px] xl:text-xs font-semibold tracking-wider text-velora-accent sm:whitespace-nowrap">02 // REAL ESTATE &amp; PROPERTY</span>
                                <span class="font-mono text-[10px] font-semibold uppercase tracking-widest text-velora-muted">Signature Concept</span>
                            </div>

                            <!-- Title & Subtitle -->
                            <div class="mt-5 mb-3">
                                <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text tracking-tight mb-1">
                                    ${aarav.title}
                                </h3>
                                <div class="text-xs font-semibold text-velora-muted mb-3">
                                    ${aarav.industry}
                                </div>
                                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                                    ${aarav.summary}
                                </p>
                            </div>

                            <!-- Demonstration Objective (Open Framing) -->
                            <div class="pt-3 border-t border-velora-border/50 mb-6">
                                <div class="font-mono text-[10px] font-bold uppercase tracking-wider text-velora-accent mb-1">Strategic Objective</div>
                                <p class="text-xs text-velora-muted leading-relaxed">${aarav.demonstrates}</p>
                            </div>
                        </div>

                        <!-- Action Link -->
                        <a href="/portfolio#${aarav.id}" class="group inline-flex items-center justify-between w-full py-2 text-xs uppercase tracking-[0.18em] font-bold text-velora-text hover:text-velora-accent transition-colors">
                            <span>Inspect Technical Specs</span>
                            <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                    </div>

                    <!-- Study 03: The Spice Room -->
                    <div class="flex flex-col justify-between flex-1 pt-10 arch-reveal" style="transition-delay: 200ms;">
                        <div>
                            <!-- Datum header line -->
                            <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-3 border-b border-velora-border/60">
                                <span class="font-mono text-[11px] xl:text-xs font-semibold tracking-wider text-velora-accent sm:whitespace-nowrap">03 // RESTAURANTS &amp; HOSPITALITY</span>
                                <span class="font-mono text-[10px] font-semibold uppercase tracking-widest text-velora-muted">Signature Concept</span>
                            </div>

                            <!-- Title & Subtitle -->
                            <div class="mt-5 mb-3">
                                <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text tracking-tight mb-1">
                                    ${spice.title}
                                </h3>
                                <div class="text-xs font-semibold text-velora-muted mb-3">
                                    ${spice.industry}
                                </div>
                                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                                    ${spice.summary}
                                </p>
                            </div>

                            <!-- Demonstration Objective (Open Framing) -->
                            <div class="pt-3 border-t border-velora-border/50 mb-6">
                                <div class="font-mono text-[10px] font-bold uppercase tracking-wider text-velora-accent mb-1">Strategic Objective</div>
                                <p class="text-xs text-velora-muted leading-relaxed">${spice.demonstrates}</p>
                            </div>
                        </div>

                        <!-- Action Link -->
                        <a href="/portfolio#${spice.id}" class="group inline-flex items-center justify-between w-full py-2 text-xs uppercase tracking-[0.18em] font-bold text-velora-text hover:text-velora-accent transition-colors">
                            <span>Inspect Technical Specs</span>
                            <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. SPECIALIZED SECTORS (Restrained Typographic Identifiers, Zero Emojis) -->
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16 arch-reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Specialized Sectors</span>
            <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Built for High-Intent Local Customers</h2>
            <p class="mt-4 text-base text-velora-muted text-pretty">
                We tailor our site structures around the specific conversion points your customers care about most.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${INDUSTRIES.map((ind, idx) => {
                const sectorCodes = [
                    '01 // REAL ESTATE',
                    '02 // RESTAURANTS',
                    '03 // HEALTHCARE',
                    '04 // SALONS & WELLNESS'
                ];
                const code = sectorCodes[idx] || `0${idx + 1} // INDUSTRY`;

                return `
                <a href="/industries/${ind.slug}" class=" bg-velora-surface p-8 rounded-3xl group block arch-reveal" style="transition-delay: ${idx * 75}ms;">
                    <div class="font-mono text-xs font-semibold tracking-wider text-velora-accent mb-5">${code}</div>
                    <h3 class="font-display text-xl font-bold text-velora-text group-hover:text-velora-accent transition-colors mb-3">${ind.name}</h3>
                    <p class="text-xs text-velora-muted leading-relaxed mb-6 text-pretty">${ind.desc}</p>
                    <span class="text-[11px] font-bold uppercase tracking-widest text-velora-accent flex items-center gap-1">
                        View Industry Strategy &rarr;
                    </span>
                </a>
                `;
            }).join('')}
        </div>
    </section>

    <!-- 5. BEFORE VS AFTER COMPARISON (INTERACTIVE) -->
    <section class="py-20 md:py-28 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center mb-12 arch-reveal">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Live Comparison</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">The Difference Is Obvious</h2>
                <p class="mt-4 text-base text-velora-muted text-pretty">
                    Slide between a typical bloated local business website and a high-performance Velora build.
                </p>
            </div>

            <div class="max-w-4xl mx-auto arch-reveal">
                <div class="relative w-full min-h-[400px] sm:min-h-0 sm:aspect-[16/9] select-none touch-pan-y focus:outline-none" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-label="Before and After Comparison" id="before-after-container">
                    <!-- Background Comparison Wrapper -->
                    <div class="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl border-none">
                        <div class="absolute inset-0 bg-[#1e1b18]" id="before-bg"></div>
                        <div class="absolute inset-0 bg-velora-card" id="after-bg" style="clip-path: polygon(0 0, 85% 0, 85% 100%, 0 100%);"></div>
                    </div>

                    <!-- Before Content Layer -->
                    <div class="absolute inset-0 text-[#a89f91] p-6 sm:p-10 flex flex-col justify-between font-serif pointer-events-none transition-opacity duration-200" id="before-content" style="opacity: 0;">
                        <div class="border-b border-[#3d3830] pb-4 flex justify-between items-center">
                            <span class="text-xl italic text-velora-accent">Old-Style Template</span>
                            <span class="text-xs px-2 py-1 bg-red-950/80 text-red-400 rounded border border-red-800">Slow Load Times • Poor Mobile Score</span>
                        </div>
                        <div class="my-auto space-y-4 max-w-lg">
                            <div class="text-2xl sm:text-3xl text-white">"Welcome to Our Website - Please Download Our 20MB PDF Catalog"</div>
                            <div class="text-sm opacity-70">Generic stock photos, hidden contact numbers, unreadable small text on mobile screens.</div>
                        </div>
                        <div class="text-xs opacity-50 border-t border-[#3d3830] pt-3">
                            Missing Schema • Broken WhatsApp Link • High Bounce Rate
                        </div>
                    </div>

                    <!-- After Content Layer -->
                    <div class="absolute inset-0 text-velora-text p-6 sm:p-10 flex flex-col justify-between font-sans pointer-events-none transition-opacity duration-200" id="after-content" style="opacity: 1;">
                        <div class="border-b border-velora-border pb-4 flex justify-between items-center">
                            <span class="font-display text-xl font-bold tracking-tight text-velora-text">Velora Digital Build</span>
                            <span class="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/30 font-mono font-bold">Built for Speed • Core Web Vitals Focused</span>
                        </div>
                        <div class="my-auto space-y-4 max-w-lg">
                            <div class="font-display text-2xl sm:text-3xl font-bold text-velora-text">Fast Mobile Menu, Tap-to-Call & Local Google Visibility</div>
                            <div class="text-sm text-velora-muted">Crisp typography, instant WhatsApp inquiries, structured opening hours, and clear pricing.</div>
                        </div>
                        <div class="flex items-center gap-4 text-xs font-semibold text-velora-accent border-t border-velora-border pt-3">
                            <span>✓ Local Schema.org</span>
                            <span>✓ Sticky Mobile CTA Bar</span>
                            <span>✓ Lean, Purpose-Built Code</span>
                        </div>
                    </div>

                    <!-- Slider Handle -->
                    <div class="absolute top-0 bottom-0 w-1 bg-velora-accent cursor-ew-resize z-20 flex items-center justify-center pointer-events-none" id="slider-handle" style="left: 85%;">
                        <div class="w-8 h-8 rounded-full bg-velora-card border-2 border-velora-accent shadow-lg flex items-center justify-center gap-1 pointer-events-auto">
                            <div class="w-0.5 h-3 bg-velora-muted rounded-full"></div>
                            <div class="w-0.5 h-3 bg-velora-muted rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex justify-between text-xs text-velora-muted px-2 font-medium">
                    <span>&larr; Drag left for Outdated Template</span>
                    <span>Drag right for Velora Standard &rarr;</span>
                </div>
            </div>
        </div>
    </section>

    <!-- 6. THE VELORA STANDARD (Restrained Positive Positioning) -->
    <section class="py-20 md:py-28 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mb-16 arch-reveal">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Studio Philosophy</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">The Velora Standard</h2>
                <p class="mt-4 text-base text-velora-muted leading-relaxed text-pretty">
                    Every website we engineer is guided by three non-negotiable principles designed to deliver measurable, lasting business value.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Principle 1: Lean by Design -->
                <div class="p-8 rounded-2xl bg-velora-bg border border-velora-border/60 shadow-lg arch-reveal">
                    <span class="font-mono text-xs font-semibold tracking-wider text-velora-accent block mb-3">01 // ARCHITECTURE</span>
                    <h3 class="font-display text-xl font-bold text-velora-text mb-3">Lean by Design</h3>
                    <p class="text-sm text-velora-muted leading-relaxed mb-4 text-pretty">
                        We write lightweight, semantic code crafted specifically for your business. Zero bloated page builders and zero unnecessary runtime scripts—ensuring pages render instantly on standard mobile connections.
                    </p>
                    <div class="text-xs text-velora-text/70 font-mono">Custom-coded &middot; Instant mobile rendering</div>
                </div>

                <!-- Principle 2: Built for Local Conversion -->
                <div class="p-8 rounded-2xl bg-velora-bg border border-velora-border/60 shadow-lg arch-reveal" style="transition-delay: 100ms;">
                    <span class="font-mono text-xs font-semibold tracking-wider text-velora-accent block mb-3">02 // CONVERSION</span>
                    <h3 class="font-display text-xl font-bold text-velora-text mb-3">Built for Local Conversion</h3>
                    <p class="text-sm text-velora-muted leading-relaxed mb-4 text-pretty">
                        Every interface is structured around direct commercial outcomes: prominent click-to-call, instant WhatsApp triggers, scannable service menus, and Schema.org JSON-LD structured data for Google Maps discovery.
                    </p>
                    <div class="text-xs text-velora-text/70 font-mono">Schema.org JSON-LD &middot; Instant enquiry triggers</div>
                </div>

                <!-- Principle 3: Complete Asset Ownership -->
                <div class="p-8 rounded-2xl bg-velora-bg border border-velora-border/60 shadow-lg arch-reveal" style="transition-delay: 200ms;">
                    <span class="font-mono text-xs font-semibold tracking-wider text-velora-accent block mb-3">03 // OWNERSHIP</span>
                    <h3 class="font-display text-xl font-bold text-velora-text mb-3">Complete Asset Ownership</h3>
                    <p class="text-sm text-velora-muted leading-relaxed mb-4 text-pretty">
                        When your project goes live, full ownership of your custom code, assets, and domain records transfers directly to you. No ongoing platform fees, no subscription traps, and no proprietary vendor lock-in.
                    </p>
                    <div class="text-xs text-velora-text/70 font-mono">100% Client owned &middot; Zero vendor lock-in</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. OUR 5-STEP PROCESS -->
    <section id="process" class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16 arch-reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Straightforward Delivery</span>
            <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">How We Build Your Website</h2>
            <p class="mt-4 text-base text-velora-muted text-pretty">
                A structured 2-to-4 week workflow with clear milestones and zero guesswork.
            </p>
        </div>

        <div class="relative max-w-4xl mx-auto">
            <!-- Mobile/Tablet Left Vertical Spine (< lg) -->
            <div class="timeline-spine-mobile lg:hidden"></div>

            <!-- Desktop Center Vertical Spine (lg+) -->
            <div class="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-velora-border via-velora-borderStrong to-transparent -translate-x-1/2"></div>

            <div class="space-y-10 lg:space-y-0">
                
                <div class="relative flex flex-col lg:flex-row items-start group arch-reveal">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-end pr-12 pt-1">
                        <div class="text-right">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">01</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-accent/60 text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm">
                        01
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-accent bg-velora-bg mt-4 z-10 transition-transform group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pl-12">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Discovery</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We clarify your services, local customer search terms, and contact goals before writing a single line of code.</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col lg:flex-row-reverse items-start group arch-reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-start pl-12 pt-1">
                        <div class="text-left">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">02</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-borderStrong text-velora-muted group-hover:border-velora-accent group-hover:text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm transition-colors">
                        02
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-borderStrong bg-velora-bg mt-4 z-10 transition-transform group-hover:border-velora-accent group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pr-12 lg:pl-0 text-left lg:text-right">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Content Map</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We organize your menus, rate cards, and practitioner credentials into a scannable, conversion-focused layout.</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col lg:flex-row items-start group arch-reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-end pr-12 pt-1">
                        <div class="text-right">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">03</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-borderStrong text-velora-muted group-hover:border-velora-accent group-hover:text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm transition-colors">
                        03
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-borderStrong bg-velora-bg mt-4 z-10 transition-transform group-hover:border-velora-accent group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pl-12">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Custom Code</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We write lightweight, fast-loading code tested rigorously across iOS and Android devices for instant load times.</p>
                        </div>
                    </div>
                </div>
                
                <div class="relative flex flex-col lg:flex-row-reverse items-start group arch-reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-start pl-12 pt-1">
                        <div class="text-left">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">04</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-borderStrong text-velora-muted group-hover:border-velora-accent group-hover:text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm transition-colors">
                        04
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-borderStrong bg-velora-bg mt-4 z-10 transition-transform group-hover:border-velora-accent group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pr-12 lg:pl-0 text-left lg:text-right">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">SEO & QA</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We configure detailed Schema.org markup, verify SSL, test lead delivery, and audit against WCAG 2.1 AA accessibility guidelines.</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col lg:flex-row items-start group arch-reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-end pr-12 pt-1">
                        <div class="text-right">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">05</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-accent/60 text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm">
                        05
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-accent bg-velora-bg mt-4 z-10 transition-transform group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pl-12">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Live Launch</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We deploy to enterprise-grade cloud hosting and transfer 100% code and domain ownership directly to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. TRANSPARENT PRICING PREVIEW -->
    <section class="py-20 md:py-28 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center mb-16 arch-reveal">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Transparent Investment</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Clear, Fixed Pricing</h2>
                <p class="mt-4 text-base text-velora-muted text-pretty">
                    No hidden fees or surprise invoices. Choose the package that fits your stage of business.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <!-- Essential -->
                <div class="p-8 sm:p-10 rounded-3xl bg-velora-bg shadow-xl flex flex-col justify-between arch-reveal">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-velora-muted block mb-2">Starter Package</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-2">Essential Web</h3>
                        <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4 text-balance">₹14,999</div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">Ideal for single-location businesses needing a clean, fast mobile presence.</p>

                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Up to 5 Custom Mobile-First Pages</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Click-to-Call & WhatsApp Triggers</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Lightning-fast Mobile Loading Speed</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Secure Contact Form & Email Alerts</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> SSL Certificate & Cloud Deployment</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText block">Choose Essential</a>
                </div>

                <!-- Professional (Highlighted) -->
                <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface border border-velora-accent/30 shadow-2xl relative flex flex-col justify-between arch-reveal lg:scale-105 lg:-translate-y-2 z-10 group" style="transition-delay: 100ms;">
                    <div class="absolute inset-0 bg-velora-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-velora-accent text-black text-[10px] font-bold uppercase tracking-widest">
                        Most Popular For Growth
                    </div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-velora-accent block mb-2">Complete System</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-2">Professional + SEO</h3>
                        <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4 text-balance">₹34,999</div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">For competitive local businesses that need maximum search visibility and high conversions.</p>

                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Up to 10 Custom Designed Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Full Local SEO Schema.org Markup</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Google Business Profile Alignment</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Service Menu / Property Showcase Cards</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Conversion Tracking Integration</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> 3 Months Technical Maintenance Included</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-accent text-black block hover:opacity-95">Choose Professional</a>
                </div>

                <!-- Custom -->
                <div class="p-8 sm:p-10 rounded-3xl bg-velora-bg shadow-xl flex flex-col justify-between arch-reveal" style="transition-delay: 200ms;">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-velora-muted block mb-2">Tailored Scale</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-2">Custom & Multi-Location</h3>
                        <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4 text-balance">₹69,999+</div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">For multi-branch clinics, large property catalogs, or specialized workflows.</p>

                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Multi-Branch / Location Page Architecture</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Custom CMS or Catalog Integration</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Advanced Local Directory Structuring</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Priority WhatsApp Engineering Support</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText block">Request Custom Scope</a>
                </div>
            </div>

            <div class="mt-12 text-center arch-reveal">
                <a href="/pricing" class="text-xs uppercase tracking-widest font-bold text-velora-accent hover:text-velora-text transition-colors inline-flex py-3 mb-4">
                    Use our Interactive Price Calculator &rarr;
                </a>
                <p class="text-[10px] text-velora-muted leading-relaxed max-w-2xl mx-auto">
                    Project pricing covers website design & development. Domain, hosting, third-party services and optional ongoing maintenance are quoted separately where applicable.
                </p>
            </div>
        </div>
    </section>

    <!-- 9. DIAGNOSTIC REVIEW / FREE WEBSITE AUDIT -->
    <section class="py-20 md:py-28 bg-velora-bg">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-2xl arch-reveal relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-velora-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
                <div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div class="md:w-1/2">
                        <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Diagnostic Review</span>
                        <h2 class="font-display text-2xl sm:text-3xl font-bold text-velora-text tracking-tight mb-4">Want an Honest Review of Your Current Website?</h2>
                        <p class="text-sm text-velora-muted leading-relaxed mb-6">
                            Enter your website URL below. We will manually review your site for speed, mobile usability, and local SEO, and send you a free, no-obligation technical teardown.
                        </p>
                        <ul class="space-y-2 text-xs text-velora-muted font-medium mb-2">
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold text-base">✓</span> Speed & Performance Check</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold text-base">✓</span> Conversion Rate Analysis</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold text-base">✓</span> Local SEO Visibility Check</li>
                        </ul>
                    </div>
                    <div class="md:w-1/2 w-full">
                        <div id="audit-form-container-1" class="bg-velora-bg p-6 rounded-2xl border-none relative">
                            <form class="homepage-audit-form space-y-4" onsubmit="
                                event.preventDefault();
                                if(window.veloraTrack) window.veloraTrack('audit_submit');
                                const form = this;
                                const submitBtn = form.querySelector('.audit-submit-btn');
                                if (submitBtn && submitBtn.disabled) return;
                                const errorDiv = form.querySelector('.audit-error');
                                const successDiv = form.nextElementSibling;
                                const website = form.querySelector('.audit-url').value;
                                const gotcha = form.querySelector('.audit_gotcha').value;

                                if(!website) return;
                                submitBtn.disabled = true;
                                submitBtn.innerText = 'Submitting...';
                                errorDiv.classList.add('hidden');
                                errorDiv.innerText = '';

                                fetch('/api/audit', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ website: website, _gotcha: gotcha, source: 'Homepage Diagnostic Inquiry' })
                                }).then(res => res.json()).then(data => {
                                    if (data.success) {
                                        if(window.veloraTrack) window.veloraTrack('audit_success');
                                        form.classList.add('hidden');
                                        successDiv.classList.remove('hidden');
                                        successDiv.classList.add('flex');
                                    } else {
                                        throw new Error(data.message || 'Submission failed');
                                    }
                                }).catch(err => {
                                    if(window.veloraTrack) window.veloraTrack('audit_error');
                                    errorDiv.innerText = err.message || 'Something went wrong. Please try again.';
                                    errorDiv.classList.remove('hidden');
                                    submitBtn.disabled = false;
                                    submitBtn.innerHTML = 'Request Free Audit &rarr;';
                                });
                            ">
                                <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden" aria-hidden="true">
                                    <input type="text" name="_gotcha" class="audit_gotcha" tabindex="-1" autocomplete="off">
                                </div>
                                <div>
                                    <label for="audit-website-url" class="sr-only">Website URL</label>
                                    <input type="url" id="audit-website-url" class="audit-url input-luxury w-full px-4 py-3 bg-velora-surface border-none rounded-xl text-base md:text-sm text-velora-text placeholder-velora-muted focus:outline-none focus:ring-1 focus:ring-velora-accent" name="website" placeholder="https://yourwebsite.com" autocomplete="url" required>
                                </div>
                                <div class="audit-error hidden text-xs text-red-500 font-medium"></div>
                                <button type="submit" class="audit-submit-btn btn-luxury w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText hover:opacity-95 transition-opacity shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                                    Request Free Audit &rarr;
                                </button>
                                <p class="text-[10px] text-velora-muted text-center mt-3">Reviewed personally by our studio &middot; No automated spam</p>
                            </form>
                            <div class="audit-success hidden flex-col items-center justify-center text-center space-y-3 py-4">
                                <div class="text-emerald-500 text-3xl">✓</div>
                                <h3 class="font-display text-lg font-bold text-velora-text">Audit Request Received</h3>
                                <p class="text-xs text-velora-muted">We will review your site and email you the teardown shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. FAQ SECTION -->
    <section class="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 arch-reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Honest Answers</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-6">
            ${FAQS.map((faq, idx) => `
                <div class="p-8 rounded-2xl bg-velora-surface border-none arch-reveal" style="transition-delay: ${idx * 50}ms;">
                    <h3 class="font-display text-lg font-bold text-velora-text mb-3 tracking-tight">${faq.q}</h3>
                    <p class="text-sm text-velora-muted leading-relaxed text-pretty">${faq.a}</p>
                </div>
            `).join('')}
        </div>
    </section>

    <!-- 11. FINAL HIGH-CONVERTING CTA BLOCK -->
    <section class="py-20 md:py-28 bg-velora-surface border-t border-velora-border">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-10 sm:p-16 rounded-3xl bg-velora-bg shadow-2xl shadow-2xl text-center relative overflow-hidden arch-reveal">
                <div class="max-w-2xl mx-auto relative z-10">
                    <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-4">Start Your Project</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight leading-tight text-balance">
                        Ready for a Website That Actually Brings in Customers?
                    </h2>
                    <p class="mt-6 text-base sm:text-lg text-velora-muted leading-relaxed text-pretty">
                        Tell us about your business and goals. We will review your project and send a detailed, transparent proposal within 24 hours.
                    </p>
                    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/contact" id="final-cta-quote-btn" onclick="if(window.veloraTrack) window.veloraTrack('cta_click', { button: 'final-cta-quote-btn' })" class="btn-luxury w-full sm:w-auto px-10 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity">
                            Get a Free Quote
                        </a>
                        <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" id="final-cta-whatsapp-btn" class="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2">
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    const script = `
        // Before/After Slider Interaction
        window.initBeforeAfterSlider = function() {
            const container = document.getElementById('before-after-container');
            const afterBg = document.getElementById('after-bg');
            const beforeContent = document.getElementById('before-content');
            const afterContent = document.getElementById('after-content');
            const handle = document.getElementById('slider-handle');

            if (container && afterBg && beforeContent && afterContent && handle) {
                let isDragging = false;
                let currentTextState = 'after';
                let currentPos = 0.85;

                function updatePosition(x, fromKeyboard = false) {
                    let pos;
                    if (fromKeyboard) {
                        pos = x;
                    } else {
                        const rect = container.getBoundingClientRect();
                        pos = (x - rect.left) / rect.width;
                    }

                    if (pos < 0) pos = 0;
                    if (pos > 1) pos = 1;
                    currentPos = pos;

                    const percent = pos * 100;

                    handle.style.left = percent + '%';
                    afterBg.style.clipPath = 'polygon(0 0, ' + percent + '% 0, ' + percent + '% 100%, 0 100%)';
                    container.setAttribute('aria-valuenow', Math.round(percent));

                    const roundedPercent = Math.round(percent);
                    if (roundedPercent <= 45 && currentTextState !== 'before') {
                        currentTextState = 'before';
                        beforeContent.style.opacity = '1';
                        afterContent.style.opacity = '0';
                    } else if (roundedPercent >= 55 && currentTextState !== 'after') {
                        currentTextState = 'after';
                        beforeContent.style.opacity = '0';
                        afterContent.style.opacity = '1';
                    }
                }

                // User interaction cancellation for discovery cue
                let hasUserInteracted = false;
                let discoveryRafId = null;

                function cancelDiscovery() {
                    hasUserInteracted = true;
                    if (discoveryRafId) {
                        cancelAnimationFrame(discoveryRafId);
                        discoveryRafId = null;
                    }
                }

                container.addEventListener('pointerdown', (e) => {
                    cancelDiscovery();
                    isDragging = true;
                    container.setPointerCapture(e.pointerId);
                    updatePosition(e.clientX);
                });

                container.addEventListener('touchstart', cancelDiscovery, { passive: true });

                container.addEventListener('pointermove', (e) => {
                    if (!isDragging) return;
                    updatePosition(e.clientX);
                });

                container.addEventListener('pointerup', () => {
                    isDragging = false;
                });

                container.addEventListener('pointercancel', () => {
                    isDragging = false;
                });

                container.addEventListener('keydown', (e) => {
                    cancelDiscovery();
                    const step = 0.05;
                    if (e.key === 'ArrowLeft') {
                        updatePosition(currentPos - step, true);
                        e.preventDefault();
                    } else if (e.key === 'ArrowRight') {
                        updatePosition(currentPos + step, true);
                        e.preventDefault();
                    } else if (e.key === 'Home') {
                        updatePosition(0, true);
                        e.preventDefault();
                    } else if (e.key === 'End') {
                        updatePosition(1, true);
                        e.preventDefault();
                    }
                });

                // Initialize
                updatePosition(0.85, true);

                // One-Time Discovery Cue on First Viewport Intersection
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
                    let discoveryTriggered = false;
                    const cueObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting && !discoveryTriggered && !hasUserInteracted) {
                                discoveryTriggered = true;
                                cueObserver.disconnect();
                                setTimeout(() => {
                                    if (hasUserInteracted) return;
                                    const cueStartTime = performance.now();
                                    const cueDuration = 480;
                                    const startP = 0.85;
                                    const apexP = 0.80;

                                    function cueStep(now) {
                                        if (hasUserInteracted) return;
                                        const elapsed = now - cueStartTime;
                                        const t = Math.min(elapsed / cueDuration, 1);
                                        const dip = Math.sin(t * Math.PI);
                                        const pos = startP - (startP - apexP) * dip;
                                        updatePosition(pos, true);

                                        if (t < 1) {
                                            discoveryRafId = requestAnimationFrame(cueStep);
                                        } else {
                                            discoveryRafId = null;
                                            updatePosition(0.85, true);
                                        }
                                    }
                                    discoveryRafId = requestAnimationFrame(cueStep);
                                }, 350);
                            }
                        });
                    }, { threshold: 0.25 });
                    cueObserver.observe(container);

                    window.__veloraArchitectCleanup = function() {
                        cancelDiscovery();
                        if (cueObserver) {
                            cueObserver.disconnect();
                        }
                    };
                }
            } else {
                window.__veloraArchitectCleanup = function() {
                    cancelDiscovery();
                };
            }
        };

        window.initArchitectInteractions = function() {
            // 1. Initialize Before/After Slider
            if (typeof window.initBeforeAfterSlider === 'function') {
                window.initBeforeAfterSlider();
            }
            // All arch-reveal animations are handled by the centralized
            // window.__veloraInitReveals() system in components.js.
            // Do NOT add duplicate IntersectionObservers or arch-reveal classes here.
        };

        window.cleanupArchitectInteractions = function() {
            if (typeof window.__veloraArchitectCleanup === 'function') {
                window.__veloraArchitectCleanup();
                window.__veloraArchitectCleanup = null;
            }
            if (window.__veloraArchObserver) {
                window.__veloraArchObserver.disconnect();
                window.__veloraArchObserver = null;
            }
        };

        window.initArchitectInteractions();
    `;

    return { meta, headerContent: ArchitectHeader(currentPath), mainContent: content, footerContent: ArchitectFooter(), script };
}

module.exports = {
    renderArchitectExperience
};
