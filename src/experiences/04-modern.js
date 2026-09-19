// ============================================================================ //
// VELORA DIGITAL — 04 MODERN EXPERIENCE PRESENTATION RENDERER                  //
// Art Direction: Interactive Spatial System · Geometric Scale · Tactile Engine //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Modern-owned Header Navigation Shell.
 * Renders a floating, segmented spatial dock with active context and accessible mobile drawer.
 */
function ModernHeader(currentPath) {
    const navItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="modern-nav-item px-3 py-1.5 min-h-[36px] flex items-center rounded-lg text-xs font-mono tracking-wider transition-all ${isActive ? 'bg-velora-accent text-white font-bold' : 'text-velora-muted hover:text-velora-text hover:bg-velora-card'}">${label}</a>`;
    };

    const anchorItem = (hash, label) => {
        return `<a href="${hash}" class="modern-anchor-link px-3 py-1.5 min-h-[36px] flex items-center rounded-lg text-xs font-mono tracking-wider text-velora-muted hover:text-velora-text hover:bg-velora-card transition-all">${label}</a>`;
    };

    const mobileNavItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="modern-mobile-nav-link block px-4 py-3 min-h-[44px] rounded-lg text-sm font-mono tracking-wider transition-colors ${isActive ? 'bg-velora-accent text-white font-bold' : 'text-velora-muted hover:text-velora-text hover:bg-velora-card'}">${label}</a>`;
    };

    const mobileAnchorItem = (hash, label) => {
        return `<a href="${hash}" class="modern-mobile-anchor-link block px-4 py-3 min-h-[44px] rounded-lg text-sm font-mono tracking-wider text-velora-muted hover:text-velora-text hover:bg-velora-card transition-colors">${label}</a>`;
    };

    return `
    <header class="modern-header sticky top-0 z-50 w-full transition-all duration-300" role="banner" aria-label="Modern Spatial Navigation">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2">
            <div class="modern-dock flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all">
                <!-- Brand Anchor & Monogram -->
                <a href="/" class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-lg min-h-[44px] px-1" id="modern-brand-logo" aria-label="Velora Digital Home">
                    <div class="w-8 h-8 rounded-lg bg-velora-accent text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm transition-transform duration-300 group-hover:scale-105">
                        VD
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2">
                            <span class="font-display font-bold text-base tracking-tight text-velora-text leading-none">VELORA</span>
                            <span class="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest bg-velora-card border border-velora-border text-velora-accent font-semibold">04 // MODERN</span>
                        </div>
                        <span class="text-[9px] font-mono uppercase tracking-[0.2em] text-velora-muted mt-0.5">Spatial Web Studio</span>
                    </div>
                </a>

                <!-- Desktop Spatial Dock Navigation (Streamlined to fit comfortably) -->
                <nav class="hidden lg:flex items-center gap-1 bg-velora-bg/80 border border-velora-border rounded-xl px-2 py-1" aria-label="Modern Navigation Dock">
                    ${anchorItem('#modern-capabilities', 'Capabilities')}
                    ${anchorItem('#modern-viewport', 'Work Lab')}
                    ${anchorItem('#modern-sectors', 'Sectors')}
                    ${anchorItem('#modern-pipeline', 'Pipeline')}
                    ${anchorItem('#modern-configurator', 'Pricing')}
                    ${anchorItem('#modern-intake', 'Review')}
                    <span class="h-4 w-px bg-velora-border mx-1" aria-hidden="true"></span>
                    ${navItem('/about', 'Studio')}
                </nav>

                <!-- Header Actions: Consultation Trigger & Mobile Toggle -->
                <div class="flex items-center gap-3">
                    <a href="/contact" id="modern-dock-cta" class="modern-header-cta items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent min-h-[40px]">
                        <span>Start Project</span>
                        <span aria-hidden="true">&rarr;</span>
                    </a>

                    <!-- Mobile Menu Hamburger / Close Button -->
                    <button type="button" id="modern-mobile-menu-btn" aria-expanded="false" aria-controls="modern-mobile-dock" aria-label="Open Modern Navigation Menu" class="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-velora-muted hover:text-velora-text hover:bg-velora-card border border-velora-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path id="modern-burger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Navigation Overlay -->
        <div id="modern-mobile-dock" class="modern-mobile-drawer lg:hidden hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2" aria-label="Mobile Navigation Menu" aria-hidden="true">
            <div class="p-4 rounded-2xl bg-velora-surface border border-velora-border shadow-2xl space-y-1">
                <div class="pb-2 mb-2 border-b border-velora-border flex items-center justify-between text-[11px] font-mono text-velora-muted uppercase tracking-wider">
                    <span>Spatial Index</span>
                    <span>Experience 04</span>
                </div>
                ${mobileAnchorItem('#modern-capabilities', '01 // Capabilities')}
                ${mobileAnchorItem('#modern-viewport', '02 // Work Lab')}
                ${mobileAnchorItem('#modern-sectors', '03 // Sectors')}
                ${mobileAnchorItem('#modern-pipeline', '04 // Delivery Pipeline')}
                ${mobileAnchorItem('#modern-configurator', '05 // Scope & Pricing')}
                ${mobileAnchorItem('#modern-intake', '06 // Technical Review')}
                <div class="pt-2 border-t border-velora-border"></div>
                ${mobileNavItem('/services', 'Service Specifications')}
                ${mobileNavItem('/portfolio', 'All Projects')}
                ${mobileNavItem('/about', 'About Studio')}
                ${mobileNavItem('/contact', 'Project Consultation &rarr;')}
            </div>
        </div>
    </header>`;
}

/**
 * Modern-owned Footer Shell.
 * Renders a structured system map, legal links, studio status, and theme menu.
 */
function ModernFooter() {
    return `
    <footer class="modern-footer bg-velora-surface border-t border-velora-border pt-16 pb-24 mt-24 text-velora-text transition-colors duration-300" role="contentinfo" aria-label="Modern System Map">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Modern System Header -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-velora-border">
                <div class="lg:col-span-4 space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg bg-velora-accent text-white flex items-center justify-center font-mono font-bold text-xs">
                            VD
                        </div>
                        <span class="font-display font-bold text-xl tracking-tight text-velora-text">VELORA DIGITAL</span>
                    </div>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans max-w-sm">
                        High-precision web design, semantic SSR code, and dedicated technical Local SEO for high-trust commercial practices.
                    </p>
                    <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-velora-card border border-velora-border text-[10px] font-mono text-velora-muted uppercase tracking-wider">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>System 04: Modern Spatial Active</span>
                    </div>
                </div>

                <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
                    <!-- Column 1: Capabilities -->
                    <div>
                        <span class="text-velora-text font-bold uppercase tracking-wider block mb-3 pb-1 border-b border-velora-border">Capabilities</span>
                        <ul class="space-y-2 text-velora-muted font-sans">
                            <li><a href="/services/website-design" class="hover:text-velora-accent transition-colors block py-1">Web Design</a></li>
                            <li><a href="/services/local-seo" class="hover:text-velora-accent transition-colors block py-1">Local SEO</a></li>
                            <li><a href="/services/website-maintenance" class="hover:text-velora-accent transition-colors block py-1">Maintenance Care</a></li>
                            <li><a href="/services" class="hover:text-velora-accent font-mono text-[11px] block py-1">All Specs &rarr;</a></li>
                        </ul>
                    </div>

                    <!-- Column 2: Sectors -->
                    <div>
                        <span class="text-velora-text font-bold uppercase tracking-wider block mb-3 pb-1 border-b border-velora-border">Sectors</span>
                        <ul class="space-y-2 text-velora-muted font-sans">
                            <li><a href="/industries/real-estate" class="hover:text-velora-accent transition-colors block py-1">Real Estate</a></li>
                            <li><a href="/industries/restaurants" class="hover:text-velora-accent transition-colors block py-1">Restaurants</a></li>
                            <li><a href="/industries/clinics" class="hover:text-velora-accent transition-colors block py-1">Clinics &amp; Dentists</a></li>
                            <li><a href="/industries/salons" class="hover:text-velora-accent transition-colors block py-1">Salons &amp; Spas</a></li>
                        </ul>
                    </div>

                    <!-- Column 3: Locations -->
                    <div>
                        <span class="text-velora-text font-bold uppercase tracking-wider block mb-3 pb-1 border-b border-velora-border">Locations</span>
                        <ul class="space-y-2 text-velora-muted font-sans">
                            <li><a href="/locations/gurugram" class="hover:text-velora-accent transition-colors block py-1">Gurugram</a></li>
                            <li><a href="/locations/delhi-ncr" class="hover:text-velora-accent transition-colors block py-1">Delhi NCR</a></li>
                            <li><a href="/locations/chandigarh" class="hover:text-velora-accent transition-colors block py-1">Chandigarh</a></li>
                            <li><a href="/locations/bengaluru" class="hover:text-velora-accent transition-colors block py-1">Bengaluru</a></li>
                        </ul>
                    </div>

                    <!-- Column 4: System & Legal -->
                    <div>
                        <span class="text-velora-text font-bold uppercase tracking-wider block mb-3 pb-1 border-b border-velora-border">Governance</span>
                        <ul class="space-y-2 text-velora-muted font-sans">
                            <li><a href="/about" class="hover:text-velora-accent transition-colors block py-1">About Studio</a></li>
                            <li><a href="/pricing" class="hover:text-velora-accent transition-colors block py-1">Pricing Guide</a></li>
                            <li><a href="/privacy-policy" class="hover:text-velora-accent transition-colors block py-1">Privacy Policy</a></li>
                            <li><a href="/terms" class="hover:text-velora-accent transition-colors block py-1">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bottom Operational Strip -->
            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-velora-muted">
                <div class="flex items-center gap-3 font-mono text-[11px]">
                    <span>&copy; ${new Date().getFullYear()} Velora Digital.</span>
                    <span class="text-velora-borderStrong" aria-hidden="true">&bull;</span>
                    <span>100% Client Code Ownership Guaranteed.</span>
                </div>

                <!-- Studio Theme Control -->
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <button type="button" id="studio-theme-btn" class="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-velora-card border border-velora-border hover:border-velora-borderStrong text-velora-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent" aria-haspopup="true" aria-expanded="false">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                            <span>Studio Themes</span>
                        </button>
                        <div id="studio-theme-menu" class="absolute bottom-full right-0 mb-2 w-48 bg-velora-surface border border-velora-border rounded-xl shadow-xl p-2 hidden z-50">
                            <button type="button" class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded-lg hover:bg-velora-card transition-colors text-velora-text" data-theme-value="onyx">
                                <span>Onyx / Champagne</span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
                            </button>
                            <button type="button" class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded-lg hover:bg-velora-card transition-colors text-velora-text" data-theme-value="obsidian">
                                <span>Obsidian / Titanium</span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]"></span>
                            </button>
                            <button type="button" class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded-lg hover:bg-velora-card transition-colors text-velora-text" data-theme-value="midnight">
                                <span>Midnight / Cobalt</span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></span>
                            </button>
                        </div>
                    </div>

                    <a href="#modern-command" class="text-xs font-mono text-velora-muted hover:text-velora-accent transition-colors">
                        Top &uarr;
                    </a>
                </div>
            </div>
        </div>
    </footer>`;
}

/**
 * Primary Modern Experience presentation renderer.
 * Composes the Interactive Spatial System across 8 distinct architectural zones.
 */
function renderModernExperience(currentPath = "/") {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spiceRoom = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Modern Spatial Web Design & Local SEO Studio',
        description: 'Velora Digital engineers fast, mobile-first websites with clean semantic architecture and dedicated local search discovery for high-trust commercial practices.',
        schema: generateSchema('Organization'),
        breadcrumbs: currentPath === '/' || currentPath === '' ? null : [{ title: 'Home', link: '/?exp=modern' }]
    };

    const content = `
    <!-- ================================================================= -->
    <!-- ZONE 1: COMMAND DECK (SPATIAL OPENING SYSTEM)                     -->
    <!-- ================================================================= -->
    <section class="relative pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden bg-velora-bg text-velora-text border-b border-velora-border" id="modern-command">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <!-- Left Spatial Plane: High-Precision Typography & Direct Action -->
                <div class="lg:col-span-7 space-y-6">
                    <div class="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-velora-surface border border-velora-border text-[11px] font-mono tracking-wider text-velora-muted uppercase">
                        <span class="w-2 h-2 rounded-full bg-velora-accent"></span>
                        <span>04 Modern Spatial System</span>
                    </div>

                    <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-velora-text leading-[1.06] text-balance">
                        Websites Engineered as High-Precision Systems for Local Commerce
                    </h1>

                    <p class="text-base sm:text-lg text-velora-muted leading-relaxed max-w-2xl text-pretty font-sans">
                        We build fast, mobile-first websites and local search foundations for clinics, real estate firms, restaurants, and salons. Clean semantic SSR code, direct contact pathways, and 100% asset ownership.
                    </p>

                    <!-- Interactive Command Action Deck -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                        <a href="#modern-configurator" class="px-7 py-4 text-center text-xs font-mono uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                            Configure Project Scope &darr;
                        </a>
                        <a href="#modern-viewport" class="px-6 py-4 text-center text-xs font-mono uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                            Explore Work Lab &darr;
                        </a>
                    </div>

                    <!-- Factual Studio Indicators (Truthful Metrics Only) -->
                    <div class="pt-8 border-t border-velora-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-velora-muted">
                        <div class="p-3.5 rounded-xl bg-velora-surface border border-velora-border/70 space-y-1">
                            <span class="text-velora-accent font-bold block text-[10px] uppercase">Engine</span>
                            <span class="text-velora-text font-bold block">Semantic SSR</span>
                            <span class="text-[11px] text-velora-muted">Zero runtime UI framework bloat</span>
                        </div>
                        <div class="p-3.5 rounded-xl bg-velora-surface border border-velora-border/70 space-y-1">
                            <span class="text-velora-accent font-bold block text-[10px] uppercase">Search</span>
                            <span class="text-velora-text font-bold block">Schema.org</span>
                            <span class="text-[11px] text-velora-muted">Verified local business indexing</span>
                        </div>
                        <div class="p-3.5 rounded-xl bg-velora-surface border border-velora-border/70 space-y-1">
                            <span class="text-velora-accent font-bold block text-[10px] uppercase">Control</span>
                            <span class="text-velora-text font-bold block">100% Ownership</span>
                            <span class="text-[11px] text-velora-muted">Source code &amp; domain in client hands</span>
                        </div>
                    </div>
                </div>

                <!-- Right Spatial Plane: Live Concept Quick-Jump Deck -->
                <div class="lg:col-span-5">
                    <div class="bg-velora-surface border border-velora-border rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm">
                        <div class="flex items-center justify-between pb-4 border-b border-velora-border">
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span class="text-xs font-mono font-bold uppercase tracking-wider text-velora-text">Studio Concept Station</span>
                            </div>
                            <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-velora-card border border-velora-border text-velora-accent">Interactive Nodes</span>
                        </div>

                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            Select a sector prototype below to immediately reorient the Work Lab viewport:
                        </p>

                        <!-- Quick-Switch Nodes -->
                        <div class="space-y-3" id="modern-quick-jump-list">
                            <button type="button" class="modern-quick-jump-node w-full text-left p-3.5 rounded-xl bg-velora-bg border border-velora-border hover:border-velora-accent transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent" data-project-id="aurora-aesthetics">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2.5">
                                        <span class="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono text-[10px] font-bold">01</span>
                                        <span class="text-xs font-bold text-velora-text group-hover:text-velora-accent transition-colors">Aurora Aesthetic Clinic</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-velora-muted group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                                </div>
                                <div class="mt-2 text-[11px] text-velora-muted pl-8 font-sans">
                                    Healthcare &amp; Dental · Frictionless consultation booking &amp; practitioner verification
                                </div>
                            </button>

                            <button type="button" class="modern-quick-jump-node w-full text-left p-3.5 rounded-xl bg-velora-bg border border-velora-border hover:border-velora-accent transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent" data-project-id="aarav-estates">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2.5">
                                        <span class="w-6 h-6 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center font-mono text-[10px] font-bold">02</span>
                                        <span class="text-xs font-bold text-velora-text group-hover:text-velora-accent transition-colors">Aarav Properties</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-velora-muted group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                                </div>
                                <div class="mt-2 text-[11px] text-velora-muted pl-8 font-sans">
                                    Real Estate &amp; Advisory · Floor plan downloads &amp; broker WhatsApp routing
                                </div>
                            </button>

                            <button type="button" class="modern-quick-jump-node w-full text-left p-3.5 rounded-xl bg-velora-bg border border-velora-border hover:border-velora-accent transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent" data-project-id="the-spice-room">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2.5">
                                        <span class="w-6 h-6 rounded-md bg-orange-500/10 text-orange-600 flex items-center justify-center font-mono text-[10px] font-bold">03</span>
                                        <span class="text-xs font-bold text-velora-text group-hover:text-velora-accent transition-colors">The Spice Room</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-velora-muted group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                                </div>
                                <div class="mt-2 text-[11px] text-velora-muted pl-8 font-sans">
                                    Dining &amp; Hospitality · Zero-PDF instant HTML menu &amp; table reservations
                                </div>
                            </button>
                        </div>

                        <!-- Fixed Baseline Investment Plate -->
                        <div class="pt-4 border-t border-velora-border flex items-center justify-between text-xs font-mono">
                            <span class="text-velora-muted">Starting Studio Scope</span>
                            <span class="font-bold text-velora-text text-sm" style="font-variant-numeric: tabular-nums;">₹${CONFIG.pricing.essential.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 2: SIGNATURE INTERACTION #1 — SPATIAL CAPABILITY MATRIX       -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-surface border-b border-velora-border" id="modern-capabilities">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-velora-border gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Capability Matrix · Technical Scope</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Modular Architecture, Explicit Scope
                    </h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Activate any studio discipline below to inspect its technical deliverables, boundary guarantees, and commercial application.
                </p>
            </div>

            <!-- Spatial Matrix Tabs & Inspector Panel -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <!-- Capability Selector: Compact horizontal rail on mobile, rich vertical rail on desktop -->
                <div class="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2.5 pb-2 lg:pb-0 scrollbar-none" role="tablist" aria-label="Studio Capabilities">
                    ${SERVICES.map((s, idx) => `
                    <button type="button"
                            role="tab"
                            id="modern-cap-tab-${idx}"
                            aria-selected="${idx === 0 ? 'true' : 'false'}"
                            aria-controls="modern-cap-panel-${idx}"
                            tabindex="${idx === 0 ? '0' : '-1'}"
                            class="modern-cap-trigger min-w-[150px] sm:min-w-[190px] lg:min-w-0 lg:w-full text-left p-3.5 lg:p-5 rounded-xl lg:rounded-2xl border transition-all duration-200 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent ${idx === 0 ? 'bg-velora-bg border-velora-accent shadow-sm' : 'bg-velora-card/60 border-velora-border hover:bg-velora-card hover:border-velora-borderStrong'}">
                        <div class="flex items-center justify-between pb-1 lg:pb-2 gap-2">
                            <span class="text-[10px] lg:text-[11px] font-mono font-bold text-velora-accent whitespace-nowrap">DISCIPLINE 0${idx + 1}</span>
                            <span class="text-[9px] lg:text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-velora-surface border border-velora-border text-velora-muted whitespace-nowrap hidden sm:inline">${escapeHTML(s.heroTag)}</span>
                        </div>
                        <h3 class="font-display text-sm lg:text-lg font-bold text-velora-text mb-1 leading-snug whitespace-nowrap sm:whitespace-normal">${escapeHTML(s.title)}</h3>
                        <p class="text-[11px] lg:text-xs text-velora-muted font-sans leading-relaxed hidden lg:block">${escapeHTML(s.short)}</p>
                    </button>
                    `).join('')}
                </div>

                <!-- Right Column: Interactive Scope Inspector Panel -->
                <div class="lg:col-span-8">
                    ${SERVICES.map((s, idx) => `
                    <div id="modern-cap-panel-${idx}"
                         role="tabpanel"
                         aria-labelledby="modern-cap-tab-${idx}"
                         class="modern-cap-panel ${idx === 0 ? 'block' : 'hidden'} bg-velora-bg border border-velora-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">

                        <!-- Panel Header -->
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-velora-border gap-4">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-xs font-mono font-bold text-velora-accent">SPECIFICATION SHEET 0${idx + 1}</span>
                                    <span class="text-velora-borderStrong">&bull;</span>
                                    <span class="text-xs font-mono text-velora-muted">${escapeHTML(s.heroTag)}</span>
                                </div>
                                <h4 class="font-display text-2xl sm:text-3xl font-bold text-velora-text">${escapeHTML(s.title)}</h4>
                            </div>
                            <div class="text-left sm:text-right">
                                <span class="text-[10px] font-mono uppercase tracking-wider text-velora-muted block">Typical Turnaround</span>
                                <span class="text-xs font-mono font-bold text-velora-text bg-velora-surface px-2.5 py-1 rounded border border-velora-border inline-block mt-1">${escapeHTML(s.timeline)}</span>
                            </div>
                        </div>

                        <!-- Architectural Rationale -->
                        <div>
                            <span class="text-[11px] font-mono uppercase tracking-wider text-velora-muted block mb-2">Commercial Rationale</span>
                            <p class="text-xs sm:text-sm text-velora-text font-sans leading-relaxed max-w-3xl">
                                ${escapeHTML(s.longDesc)}
                            </p>
                        </div>

                        <!-- Deliverables Matrix (Reduced Border Density) -->
                        <div class="space-y-3 pt-2">
                            <span class="text-[11px] font-mono uppercase tracking-wider text-velora-muted block">Direct Engineering Deliverables</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                ${s.benefits.map(b => `
                                <div class="p-3 rounded-xl bg-velora-surface/80 border border-velora-border/60 flex items-start gap-2.5">
                                    <span class="text-velora-accent font-bold text-sm mt-0.5">&check;</span>
                                    <span class="text-xs font-sans text-velora-text leading-snug">${escapeHTML(b)}</span>
                                </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Boundary Guarantees: What Is NOT Included -->
                        <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                            <span class="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block">
                                Commercial Honesty // Excluded From This Scope:
                            </span>
                            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-velora-muted">
                                ${s.notIncluded.map(ex => `
                                <li class="flex items-center gap-2">
                                    <span class="text-amber-600 dark:text-amber-400">&times;</span>
                                    <span>${escapeHTML(ex)}</span>
                                </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Action Footer -->
                        <div class="pt-4 border-t border-velora-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            <div class="text-xs text-velora-muted font-sans">
                                <strong>Target Practice:</strong> ${escapeHTML(s.whoNeedsIt)}
                            </div>
                            <a href="/services/${escapeHTML(s.slug)}" class="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-velora-accent bg-velora-surface hover:bg-velora-card border border-velora-border transition-colors text-center shrink-0">
                                Detailed Specs &rarr;
                            </a>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 3: SIGNATURE INTERACTION #2 — MULTI-STATE WORK LAB            -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-bg border-b border-velora-border" id="modern-viewport">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header & Truthful Disclosure -->
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-velora-border gap-6">
                <div>
                    <div class="flex items-center gap-2.5 mb-2">
                        <span class="text-xs font-mono uppercase tracking-widest text-velora-accent">Work Lab · Specification Prototypes</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-velora-surface border border-velora-border text-velora-muted font-semibold">Concept Prototypes</span>
                    </div>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Multi-State Architectural Demonstrations
                    </h2>
                </div>
                <div class="p-3.5 rounded-xl bg-velora-surface border border-velora-border max-w-sm text-[11px] font-sans text-velora-muted leading-relaxed">
                    <strong class="text-velora-text block font-mono uppercase text-[10px] mb-0.5">Truthful Concept Disclosure:</strong>
                    These showcase studies are custom-engineered design concepts demonstrating mobile speed, schema integration, and friction-free lead capture for high-intent local businesses.
                </div>
            </div>

            <!-- Viewport Controls Deck: Project Switcher + Mode Switcher -->
            <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 rounded-2xl bg-velora-surface border border-velora-border mb-8 shadow-sm">
                <!-- Project Selector Buttons -->
                <div class="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0" role="tablist" aria-label="Portfolio Projects">
                    <button type="button"
                            id="modern-proj-btn-aurora"
                            role="tab"
                            aria-selected="true"
                            aria-controls="modern-viewport-canvas"
                            data-proj="aurora-aesthetics"
                            class="modern-proj-btn px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all bg-velora-accent text-white shadow-sm shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        01 // Aurora Clinic
                    </button>
                    <button type="button"
                            id="modern-proj-btn-aarav"
                            role="tab"
                            aria-selected="false"
                            aria-controls="modern-viewport-canvas"
                            data-proj="aarav-estates"
                            class="modern-proj-btn px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all text-velora-muted hover:text-velora-text hover:bg-velora-card shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        02 // Aarav Properties
                    </button>
                    <button type="button"
                            id="modern-proj-btn-spice"
                            role="tab"
                            aria-selected="false"
                            aria-controls="modern-viewport-canvas"
                            data-proj="the-spice-room"
                            class="modern-proj-btn px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all text-velora-muted hover:text-velora-text hover:bg-velora-card shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        03 // The Spice Room
                    </button>
                </div>

                <!-- Inspection Mode Switcher -->
                <div class="flex items-center gap-1.5 bg-velora-bg p-1 rounded-xl border border-velora-border self-start lg:self-auto shrink-0" role="group" aria-label="Viewport Inspection Mode">
                    <button type="button"
                            id="modern-mode-sim"
                            data-mode="sim"
                            class="modern-mode-btn px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold uppercase transition-all bg-velora-card text-velora-accent border border-velora-border">
                        [Mobile Sim]
                    </button>
                    <button type="button"
                            id="modern-mode-arch"
                            data-mode="arch"
                            class="modern-mode-btn px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase text-velora-muted hover:text-velora-text transition-all">
                        [Search Blueprint]
                    </button>
                    <button type="button"
                            id="modern-mode-conv"
                            data-mode="conv"
                            class="modern-mode-btn px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase text-velora-muted hover:text-velora-text transition-all">
                        [Deliverables]
                    </button>
                </div>
            </div>

            <!-- Viewport Stage Canvas -->
            <div id="modern-viewport-canvas" class="bg-velora-surface border border-velora-border rounded-2xl p-6 sm:p-8 transition-all min-h-[520px]">

                <!-- PROJECT 1: AURORA CLINIC -->
                <div id="modern-proj-aurora-aesthetics" class="modern-proj-view block space-y-8">
                    <!-- Project Header Meta -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-velora-border gap-4">
                        <div>
                            <div class="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                                <span>HEALTHCARE &amp; DENTAL DISCIPLINE</span>
                                <span>&bull;</span>
                                <span class="text-velora-muted font-normal">GURUGRAM &amp; CHANDIGARH TARGET</span>
                            </div>
                            <h3 class="font-display text-2xl sm:text-4xl font-bold text-velora-text">${escapeHTML(aurora.title)}</h3>
                        </div>
                        <span class="text-xs font-mono text-velora-muted bg-velora-card px-3 py-1.5 rounded-xl border border-velora-border self-start sm:self-auto">
                            ${escapeHTML(aurora.type)}
                        </span>
                    </div>

                    <!-- State A: Mobile Simulation View (Guaranteed Scoped Styles) -->
                    <div class="modern-view-sim block">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <!-- Simulated Mobile Frame -->
                            <div class="lg:col-span-5 flex justify-center">
                                <div class="modern-phone-frame w-full max-w-[310px] p-3.5 space-y-4 font-sans">
                                    <!-- Mobile Status Bar -->
                                    <div class="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1 font-mono">
                                        <span>09:41</span>
                                        <div class="flex items-center gap-1">
                                            <span>5G</span>
                                            <span class="w-3 h-2 rounded-sm border border-slate-400"></span>
                                        </div>
                                    </div>

                                    <!-- Clinic Mini Navigation -->
                                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span class="font-bold text-xs tracking-wider text-emerald-400 font-mono">AURORA CLINIC</span>
                                        <span class="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Sector 43</span>
                                    </div>

                                    <!-- Hero Clinic Card -->
                                    <div class="modern-phone-card p-3 space-y-2">
                                        <span class="text-[9px] uppercase tracking-wider text-emerald-400 font-mono font-bold block">Certified Aesthetic Practice</span>
                                        <h4 class="text-sm font-bold text-white leading-tight">Advanced Dermatology &amp; Cosmetic Dental Care</h4>
                                        <p class="text-[11px] text-slate-300 leading-snug">
                                            Evidence-based procedures with transparent consultation fees.
                                        </p>
                                    </div>

                                    <!-- Doctor Credentials Badge -->
                                    <div class="p-2.5 rounded-lg modern-phone-badge-emerald space-y-1">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                            <span class="text-[10px] font-bold text-emerald-300">Dr. Sunita Sharma, MD</span>
                                        </div>
                                        <p class="text-[10px] text-slate-300">AIIMS Fellow · 14+ Years Clinical Experience</p>
                                    </div>

                                    <!-- Sticky Conversion Trigger Bar -->
                                    <div class="pt-2">
                                        <a href="/contact" class="block w-full py-2.5 rounded-lg modern-phone-btn-emerald text-center font-bold text-xs tracking-wide transition-colors">
                                            Book Consultation (1-Tap) &rarr;
                                        </a>
                                        <div class="text-[9px] text-center text-slate-400 mt-1.5 font-mono">
                                            Direct WhatsApp &amp; Clinic Call Enabled
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Mobile Simulation Engineering Rationale -->
                            <div class="lg:col-span-7 space-y-5">
                                <div>
                                    <span class="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Conversion Architecture</span>
                                    <h4 class="font-display text-xl sm:text-2xl font-bold text-velora-text">Ergonomic Trust on Smartphone Screens</h4>
                                </div>
                                <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                                    ${escapeHTML(aurora.keyUxDecisions)}
                                </p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <div class="p-3.5 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block">Patient Trust Trigger</span>
                                        <span class="text-xs font-bold text-velora-text block">Credentials Pre-Fold</span>
                                        <p class="text-[11px] text-velora-muted">Doctor qualifications, board certifications, and sanitized clinic previews placed above the fold.</p>
                                    </div>
                                    <div class="p-3.5 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block">Speed Benchmark</span>
                                        <span class="text-xs font-bold text-velora-text block">Sub-100ms FCP on 4G</span>
                                        <p class="text-[11px] text-velora-muted">Zero PDF menu downloads; lightweight HTML consultation requests without forced account creation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State B: Search Discovery Blueprint View (Redesigned from raw JSON) -->
                    <div class="modern-view-arch hidden space-y-6">
                        <div class="p-6 sm:p-7 rounded-2xl bg-velora-bg border border-velora-border space-y-6">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-velora-border gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-velora-text">Search Discovery Blueprint</span>
                                </div>
                                <span class="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-velora-surface border border-velora-border text-emerald-600 dark:text-emerald-400 font-semibold">Schema.org MedicalBusiness · Concept Blueprint</span>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">01 // Entity Identity</span>
                                    <div class="text-xs font-bold text-velora-text">Verified Practice Profile</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Explicit clinical specialty, verified practitioner credentials, and consultation fee structure codified for local search systems.
                                    </p>
                                </div>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">02 // NAP Synchronization</span>
                                    <div class="text-xs font-bold text-velora-text">Exact Geo-Coordinates</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Identical Name, Address (Sector 43, Gurugram), and Phone (+91 73037 33735) aligned across metadata and map citations.
                                    </p>
                                </div>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">03 // Intent Pathways</span>
                                    <div class="text-xs font-bold text-velora-text">Instant Patient Routing</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Direct click-to-consultation and WhatsApp triggers integrated into rich local search discovery formats.
                                    </p>
                                </div>
                            </div>

                            <!-- Search Result Mockup Representation -->
                            <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/70 space-y-2">
                                <div class="text-[10px] font-mono uppercase text-velora-muted">Local Search Discovery Representation (Concept Demonstration)</div>
                                <div class="space-y-1 font-sans">
                                    <div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">https://veloradigital.co.in/portfolio/aurora-aesthetics</div>
                                    <div class="text-sm font-bold text-velora-text hover:underline cursor-pointer">Aurora Aesthetic Clinic · Dermatology &amp; Cosmetic Dental Care</div>
                                    <div class="text-xs text-velora-muted leading-snug">
                                        Golf Course Road, Sector 43, Gurugram. Evidence-based aesthetic procedures, transparent fees, and verified doctor credentials. Book consultations via WhatsApp or direct phone call.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-xs text-velora-muted font-sans leading-relaxed">
                            <strong>Technical Implementation:</strong> ${escapeHTML(aurora.technicalPriorities)}
                        </div>
                    </div>

                    <!-- State C: Deliverables View -->
                    <div class="modern-view-conv hidden space-y-6">
                        <div>
                            <span class="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Production Deliverables</span>
                            <h4 class="font-display text-xl sm:text-2xl font-bold text-velora-text">End-to-End Clinic Digital Assets</h4>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${aurora.deliverables.map(del => `
                            <div class="p-4 rounded-xl bg-velora-bg border border-velora-border/70 space-y-1">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span class="text-xs font-bold text-velora-text block">${escapeHTML(del)}</span>
                            </div>
                            `).join('')}
                        </div>
                        <p class="text-xs text-velora-muted font-sans">
                            <strong>Commercial Goal:</strong> ${escapeHTML(aurora.conversionObjectives)}
                        </p>
                    </div>
                </div>

                <!-- PROJECT 2: AARAV PROPERTIES -->
                <div id="modern-proj-aarav-estates" class="modern-proj-view hidden space-y-8">
                    <!-- Project Header Meta -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-velora-border gap-4">
                        <div>
                            <div class="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-bold mb-1">
                                <span>REAL ESTATE &amp; ADVISORY DISCIPLINE</span>
                                <span>&bull;</span>
                                <span class="text-velora-muted font-normal">DELHI NCR &amp; NOIDA TARGET</span>
                            </div>
                            <h3 class="font-display text-2xl sm:text-4xl font-bold text-velora-text">${escapeHTML(aarav.title)}</h3>
                        </div>
                        <span class="text-xs font-mono text-velora-muted bg-velora-card px-3 py-1.5 rounded-xl border border-velora-border self-start sm:self-auto">
                            ${escapeHTML(aarav.type)}
                        </span>
                    </div>

                    <!-- State A: Mobile Simulation View -->
                    <div class="modern-view-sim block">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <!-- Simulated Mobile Frame -->
                            <div class="lg:col-span-5 flex justify-center">
                                <div class="modern-phone-frame w-full max-w-[310px] p-3.5 space-y-4 font-sans">
                                    <div class="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1 font-mono">
                                        <span>09:41</span>
                                        <span>5G</span>
                                    </div>

                                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span class="font-bold text-xs tracking-wider text-amber-400 font-mono">AARAV ESTATES</span>
                                        <span class="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">RERA Registered</span>
                                    </div>

                                    <div class="modern-phone-card p-3 space-y-2">
                                        <span class="text-[9px] uppercase tracking-wider text-amber-400 font-mono font-bold block">Prime Residential Inventory</span>
                                        <h4 class="text-sm font-bold text-white leading-tight">Golf Course Ext. · 3 &amp; 4 BHK Luxury Residences</h4>
                                        <div class="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-300 pt-1">
                                            <span class="bg-slate-900 p-1.5 rounded">2,450 Sq.Ft</span>
                                            <span class="bg-slate-900 p-1.5 rounded">Ready Q4 2026</span>
                                        </div>
                                    </div>

                                    <div class="p-2.5 rounded-lg modern-phone-badge-amber space-y-1">
                                        <span class="text-[10px] font-bold text-amber-300">Direct Broker Channel</span>
                                        <p class="text-[10px] text-slate-300">Zero portal aggregation fees · Exclusive inventory</p>
                                    </div>

                                    <div class="pt-2">
                                        <a href="/contact" class="block w-full py-2.5 rounded-lg modern-phone-btn-amber text-center font-bold text-xs tracking-wide transition-colors">
                                            Request Floor Plans (WhatsApp) &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-7 space-y-5">
                                <div>
                                    <span class="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-1">Real Estate Strategy</span>
                                    <h4 class="font-display text-xl sm:text-2xl font-bold text-velora-text">Bypassing Crowded Third-Party Portals</h4>
                                </div>
                                <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                                    ${escapeHTML(aarav.keyUxDecisions)}
                                </p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <div class="p-3.5 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">Lead Capture</span>
                                        <span class="text-xs font-bold text-velora-text block">Direct Broker WhatsApp</span>
                                        <p class="text-[11px] text-velora-muted">Property seekers trigger immediate pre-filled WhatsApp chats for specific unit configurations.</p>
                                    </div>
                                    <div class="p-3.5 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">Compliance</span>
                                        <span class="text-xs font-bold text-velora-text block">Verified RERA Display</span>
                                        <p class="text-[11px] text-velora-muted">Explicit RERA registration numbers and broker licensing displayed clearly to establish legal trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State B: Search Discovery Blueprint View -->
                    <div class="modern-view-arch hidden space-y-6">
                        <div class="p-6 sm:p-7 rounded-2xl bg-velora-bg border border-velora-border space-y-6">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-velora-border gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-velora-text">Search Discovery Blueprint</span>
                                </div>
                                <span class="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-velora-surface border border-velora-border text-amber-600 dark:text-amber-400 font-semibold">Schema.org RealEstateAgent · Concept Blueprint</span>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">01 // Verified Agency</span>
                                    <div class="text-xs font-bold text-velora-text">RealEstateAgent Entity</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        RERA registration numbers and licensed territory coverage codified for search crawl authority.
                                    </p>
                                </div>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">02 // Territory Coverage</span>
                                    <div class="text-xs font-bold text-velora-text">Locality Polygon Indexing</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Exact service areas codified: Golf Course Extension, DLF Phase 5, and Noida Expressway corridors.
                                    </p>
                                </div>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">03 // Direct Inventory</span>
                                    <div class="text-xs font-bold text-velora-text">Zero-Portal Interception</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Direct WhatsApp inquiry routing that bypasses costly aggregator portal bidding and fake listings.
                                    </p>
                                </div>
                            </div>

                            <!-- Search Result Mockup Representation -->
                            <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/70 space-y-2">
                                <div class="text-[10px] font-mono uppercase text-velora-muted">Local Search Discovery Representation (Concept Demonstration)</div>
                                <div class="space-y-1 font-sans">
                                    <div class="text-[11px] text-amber-600 dark:text-amber-400 font-mono">https://veloradigital.co.in/portfolio/aarav-estates</div>
                                    <div class="text-sm font-bold text-velora-text hover:underline cursor-pointer">Aarav Properties · RERA-Registered Luxury Advisory Gurugram</div>
                                    <div class="text-xs text-velora-muted leading-snug">
                                        Verified inventory across Golf Course Extension &amp; DLF. Direct broker WhatsApp consultations, downloadable floor plans, and transparent square-footage pricing.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-xs text-velora-muted font-sans leading-relaxed">
                            <strong>Technical Priorities:</strong> ${escapeHTML(aarav.technicalPriorities)}
                        </div>
                    </div>

                    <!-- State C: Deliverables -->
                    <div class="modern-view-conv hidden space-y-6">
                        <div>
                            <span class="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-1">Production Deliverables</span>
                            <h4 class="font-display text-xl sm:text-2xl font-bold text-velora-text">Commercial Real Estate Package</h4>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${aarav.deliverables.map(del => `
                            <div class="p-4 rounded-xl bg-velora-bg border border-velora-border/70 space-y-1">
                                <span class="text-amber-500 font-bold">&check;</span>
                                <span class="text-xs font-bold text-velora-text block">${escapeHTML(del)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- PROJECT 3: THE SPICE ROOM -->
                <div id="modern-proj-the-spice-room" class="modern-proj-view hidden space-y-8">
                    <!-- Project Header Meta -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-velora-border gap-4">
                        <div>
                            <div class="flex items-center gap-2 text-xs font-mono text-orange-600 dark:text-orange-400 font-bold mb-1">
                                <span>RESTAURANTS &amp; HOSPITALITY DISCIPLINE</span>
                                <span>&bull;</span>
                                <span class="text-velora-muted font-normal">CENTRAL DELHI &amp; SECTOR 29 TARGET</span>
                            </div>
                            <h3 class="font-display text-2xl sm:text-4xl font-bold text-velora-text">${escapeHTML(spiceRoom.title)}</h3>
                        </div>
                        <span class="text-xs font-mono text-velora-muted bg-velora-card px-3 py-1.5 rounded-xl border border-velora-border self-start sm:self-auto">
                            ${escapeHTML(spiceRoom.type)}
                        </span>
                    </div>

                    <!-- State A: Mobile Simulation View -->
                    <div class="modern-view-sim block">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <!-- Simulated Mobile Frame -->
                            <div class="lg:col-span-5 flex justify-center">
                                <div class="modern-phone-frame w-full max-w-[310px] p-3.5 space-y-4 font-sans">
                                    <div class="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1 font-mono">
                                        <span>19:30</span>
                                        <span>5G</span>
                                    </div>

                                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span class="font-bold text-xs tracking-wider text-orange-400 font-mono">THE SPICE ROOM</span>
                                        <span class="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Valet Parking</span>
                                    </div>

                                    <div class="modern-phone-card p-3 space-y-2">
                                        <span class="text-[9px] uppercase tracking-wider text-orange-400 font-mono font-bold block">Progressive Indian Dining</span>
                                        <h4 class="text-sm font-bold text-white leading-tight">Native HTML Menu (Zero Heavy PDF Downloads)</h4>
                                        <div class="space-y-1 text-[11px] text-slate-300 pt-1">
                                            <div class="flex justify-between border-b border-slate-700/40 pb-1">
                                                <span>Smoked Butter Chicken</span>
                                                <span class="font-mono text-orange-300">₹680</span>
                                            </div>
                                            <div class="flex justify-between">
                                                <span>Truffle Kulcha (Veg)</span>
                                                <span class="font-mono text-orange-300">₹240</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pt-2 space-y-2">
                                        <a href="/contact" class="block w-full py-2.5 rounded-lg modern-phone-btn-orange text-center font-bold text-xs tracking-wide transition-colors">
                                            Reserve Table &rarr;
                                        </a>
                                        <div class="text-[9px] text-center text-slate-400 font-mono">
                                            1-Tap Google Maps Routing Included
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-7 space-y-5">
                                <div>
                                    <span class="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold block mb-1">Hospitality UX</span>
                                    <h4 class="font-display text-xl sm:text-2xl font-bold text-velora-text">Eliminating the 15MB PDF Menu Disaster</h4>
                                </div>
                                <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                                    ${escapeHTML(spiceRoom.keyUxDecisions)}
                                </p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <div class="p-3.5 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[10px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold block">Mobile Usability</span>
                                        <span class="text-xs font-bold text-velora-text block">Instant Native HTML</span>
                                        <p class="text-[11px] text-velora-muted">Dishes load immediately without forcing data-heavy PDF downloads in dim restaurant lighting.</p>
                                    </div>
                                    <div class="p-3.5 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[10px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold block">Direct Footfall</span>
                                        <span class="text-xs font-bold text-velora-text block">1-Tap Maps Routing</span>
                                        <p class="text-[11px] text-velora-muted">Immediate directions trigger opens Google Maps with parking and valet guidance preloaded.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State B: Search Discovery Blueprint View -->
                    <div class="modern-view-arch hidden space-y-6">
                        <div class="p-6 sm:p-7 rounded-2xl bg-velora-bg border border-velora-border space-y-6">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-velora-border gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-velora-text">Search Discovery Blueprint</span>
                                </div>
                                <span class="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-velora-surface border border-velora-border text-orange-600 dark:text-orange-400 font-semibold">Schema.org Restaurant · Concept Blueprint</span>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">01 // Culinary Entity</span>
                                    <div class="text-xs font-bold text-velora-text">Restaurant Schema</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Cuisine types, price range (₹₹₹), and structured HTML menu URLs codified for Google Search indexing.
                                    </p>
                                </div>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">02 // Reservation Bridge</span>
                                    <div class="text-xs font-bold text-velora-text">Instant Table Booking</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Direct table reservation pathway connected to Google Maps profile, bypassing high commission aggregator apps.
                                    </p>
                                </div>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60 space-y-2">
                                    <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">03 // Service Hours</span>
                                    <div class="text-xs font-bold text-velora-text">Operating Synchrony</div>
                                    <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                        Exact lunch/dinner timings and valet parking availability synchronized across all local search touchpoints.
                                    </p>
                                </div>
                            </div>

                            <!-- Search Result Mockup Representation -->
                            <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/70 space-y-2">
                                <div class="text-[10px] font-mono uppercase text-velora-muted">Local Search Discovery Representation (Concept Demonstration)</div>
                                <div class="space-y-1 font-sans">
                                    <div class="text-[11px] text-orange-600 dark:text-orange-400 font-mono">https://veloradigital.co.in/portfolio/the-spice-room</div>
                                    <div class="text-sm font-bold text-velora-text hover:underline cursor-pointer">The Spice Room · Progressive Indian Dining &amp; Valet Parking</div>
                                    <div class="text-xs text-velora-muted leading-snug">
                                        Sector 29, Gurugram. Fast, mobile-first native HTML menu. Direct table reservation triggers, curated wine pairings, and 1-tap Google Maps driving directions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State C: Deliverables -->
                    <div class="modern-view-conv hidden space-y-6">
                        <div>
                            <span class="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold block mb-1">Production Deliverables</span>
                            <h4 class="font-display text-xl sm:text-2xl font-bold text-velora-text">Dining Experience Assets</h4>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${spiceRoom.deliverables.map(del => `
                            <div class="p-4 rounded-xl bg-velora-bg border border-velora-border/70 space-y-1">
                                <span class="text-orange-500 font-bold">&check;</span>
                                <span class="text-xs font-bold text-velora-text block">${escapeHTML(del)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 4: SECTOR MATRIX (DYNAMIC INDUSTRY FILTER MATRIX)             -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-surface border-b border-velora-border" id="modern-sectors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-velora-border gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Sector Specialization · Commercial Models</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Local Commercial Specialization
                    </h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Four distinct operational models built for competitive commercial environments across Gurugram, Delhi NCR, Chandigarh, and Bengaluru.
                </p>
            </div>

            <!-- Sector Matrix Selector Rails -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="tablist" aria-label="Commercial Sectors">
                ${INDUSTRIES.map((ind, idx) => `
                <button type="button"
                        role="tab"
                        id="modern-sector-tab-${idx}"
                        aria-selected="${idx === 0 ? 'true' : 'false'}"
                        aria-controls="modern-sector-panel-${idx}"
                        tabindex="${idx === 0 ? '0' : '-1'}"
                        class="modern-sector-btn p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent ${idx === 0 ? 'bg-velora-bg border-velora-accent shadow-sm' : 'bg-velora-card/60 border-velora-border hover:bg-velora-card hover:border-velora-borderStrong'}">
                    <span class="text-xl block mb-2" aria-hidden="true">${ind.icon}</span>
                    <span class="text-xs font-bold text-velora-text block leading-tight">${escapeHTML(ind.shortName)}</span>
                    <span class="text-[10px] font-mono text-velora-muted mt-1 block">Sector 0${idx + 1}</span>
                </button>
                `).join('')}
            </div>

            <!-- Sector Detail Inspector -->
            <div class="bg-velora-bg border border-velora-border rounded-2xl p-6 sm:p-8 shadow-sm">
                ${INDUSTRIES.map((ind, idx) => `
                <div id="modern-sector-panel-${idx}"
                     role="tabpanel"
                     aria-labelledby="modern-sector-tab-${idx}"
                     class="modern-sector-panel ${idx === 0 ? 'block' : 'hidden'} space-y-6">

                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-velora-border gap-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-xs font-mono font-bold text-velora-accent">SECTOR 0${idx + 1}</span>
                                <span class="text-velora-borderStrong">&bull;</span>
                                <span class="text-xs font-mono text-velora-muted">${escapeHTML(ind.shortName)}</span>
                            </div>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text">${escapeHTML(ind.name)}</h3>
                        </div>
                        <a href="/industries/${escapeHTML(ind.slug)}" class="px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-velora-accent bg-velora-surface border border-velora-border hover:bg-velora-card transition-colors self-start sm:self-auto">
                            Sector Architecture &rarr;
                        </a>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <!-- Left: Challenge vs Solution -->
                        <div class="lg:col-span-7 space-y-4">
                            <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/15 space-y-1">
                                <span class="text-[10px] font-mono uppercase text-red-600 dark:text-red-400 font-bold block">Common Local Bottleneck</span>
                                <p class="text-xs text-velora-text font-sans leading-relaxed">${escapeHTML(ind.challenges)}</p>
                            </div>

                            <div class="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15 space-y-1">
                                <span class="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block">The Velora Solution</span>
                                <p class="text-xs text-velora-text font-sans leading-relaxed">${escapeHTML(ind.solutions)}</p>
                            </div>

                            <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/70 space-y-1 text-xs text-velora-muted font-sans">
                                <span class="text-[10px] font-mono uppercase text-velora-accent font-bold block">Mobile Strategy</span>
                                <p>${escapeHTML(ind.mobileConsiderations)}</p>
                            </div>
                        </div>

                        <!-- Right: Conversion Elements Checklist (Humanized Terminology) -->
                        <div class="lg:col-span-5 space-y-3">
                            <span class="text-[11px] font-mono uppercase tracking-wider text-velora-muted block">Essential Customer Pathways</span>
                            <div class="space-y-2">
                                ${ind.conversionElements.map(el => `
                                <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 flex items-start gap-2.5">
                                    <span class="text-velora-accent font-bold text-xs mt-0.5">&bull;</span>
                                    <span class="text-xs font-sans text-velora-text leading-snug">${escapeHTML(el)}</span>
                                </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 5: DELIVERY PIPELINE (SPATIAL 5-STAGE CONTINUUM)             -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-bg border-b border-velora-border" id="modern-pipeline">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-velora-border gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Delivery Pipeline · 5 Structured Stages</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Five Structured Stages to Launch
                    </h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    From local customer intent mapping to production cloud deployment and 100% asset handover.
                </p>
            </div>

            <!-- Pipeline Visual Sequence with Spatial Datum Rail -->
            <div class="modern-pipeline-rail relative">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                    ${SERVICES[0].process.map((st, idx) => `
                    <div class="modern-pipeline-stage bg-velora-surface border border-velora-border/80 rounded-2xl p-5 flex flex-col justify-between hover:border-velora-accent transition-all group relative">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                                <span class="w-8 h-8 rounded-xl bg-velora-accent text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm ring-4 ring-velora-surface">
                                    ${st.step}
                                </span>
                                <span class="text-[9px] font-mono uppercase text-velora-muted">Stage 0${idx + 1}</span>
                            </div>
                            <h3 class="font-display text-base font-bold text-velora-text group-hover:text-velora-accent transition-colors">
                                ${escapeHTML(st.title)}
                            </h3>
                            <p class="text-xs text-velora-muted font-sans leading-relaxed">
                                ${escapeHTML(st.desc)}
                            </p>
                        </div>

                        <div class="pt-4 mt-4 border-t border-velora-border/50 text-[10px] font-mono text-velora-muted">
                            ${idx === 0 ? 'Inputs: Competitors & Intent' : ''}
                            ${idx === 1 ? 'Inputs: Copy & Visual System' : ''}
                            ${idx === 2 ? 'Inputs: Semantic SSR Markup' : ''}
                            ${idx === 3 ? 'Inputs: Device & Form Tests' : ''}
                            ${idx === 4 ? 'Inputs: Cloud SSL & Handoff' : ''}
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 6: INTERACTIVE SCOPE & VALUE CONFIGURATOR (PRICING)          -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-surface border-b border-velora-border" id="modern-configurator">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-velora-border gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Scope &amp; Investment Framework</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Predictable Fixed Pricing &amp; Scope
                    </h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Transparent investment tiers with zero hidden fees, zero ongoing template royalties, and complete source code ownership.
                </div>
            </div>

            <!-- Fixed Pricing Tiers (Canonical Truth - Removed SaaS Badge) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <!-- Plan 1: Essential -->
                <div class="bg-velora-bg border border-velora-border rounded-2xl p-7 flex flex-col justify-between hover:border-velora-borderStrong transition-all shadow-sm">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                            <span class="text-xs font-mono font-bold text-velora-accent uppercase">Tier 01 // Essential</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-velora-surface border border-velora-border text-velora-muted">2-3 WEEKS</span>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-velora-text">Local Practice Launch</h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            Engineered for clinics, consultancies, and independent businesses requiring a fast, trustworthy digital presence.
                        </p>
                        <div class="text-3xl font-display font-bold text-velora-text pt-2" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.essential.toLocaleString('en-IN')}
                        </div>
                        <ul class="space-y-2.5 text-xs text-velora-muted font-sans pt-4 border-t border-velora-border">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Up to 5 bespoke responsive pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Semantic mobile SSR architecture</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Direct Click-to-Call &amp; WhatsApp triggers</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> 100% Code &amp; domain ownership</li>
                        </ul>
                    </div>
                    <div class="pt-6 mt-6 border-t border-velora-border">
                        <a href="/contact?plan=essential" class="block w-full py-3 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider bg-velora-surface hover:bg-velora-card border border-velora-border text-velora-text transition-colors">
                            Select Essential Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- Plan 2: Professional (Dignified Architectural Focus, No SaaS Pill) -->
                <div class="bg-velora-bg border border-velora-accent/80 rounded-2xl p-7 flex flex-col justify-between shadow-md relative">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                            <span class="text-xs font-mono font-bold text-velora-accent uppercase">Tier 02 // Professional</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-velora-surface border border-velora-border text-velora-muted">3-4 WEEKS</span>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-velora-text">Commercial Search Leader</h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            Complete web architecture plus deep technical Local SEO for practices in competitive urban localities.
                        </p>
                        <div class="text-3xl font-display font-bold text-velora-text pt-2" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.professional.toLocaleString('en-IN')}
                        </div>
                        <ul class="space-y-2.5 text-xs text-velora-muted font-sans pt-4 border-t border-velora-border">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Up to 10 bespoke responsive pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Full Local SEO &amp; Schema.org integration</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Google Business Profile alignment</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Instant lead routing &amp; email delivery</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Sub-100ms Core Web Vitals optimization</li>
                        </ul>
                    </div>
                    <div class="pt-6 mt-6 border-t border-velora-border">
                        <a href="/contact?plan=professional" class="block w-full py-3 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors">
                            Select Professional Scope &rarr;
                        </a>
                    </div>
                </div>

                <!-- Plan 3: Custom Scope -->
                <div class="bg-velora-bg border border-velora-border rounded-2xl p-7 flex flex-col justify-between hover:border-velora-borderStrong transition-all shadow-sm">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                            <span class="text-xs font-mono font-bold text-velora-accent uppercase">Tier 03 // Custom</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-velora-surface border border-velora-border text-velora-muted">4-6 WEEKS</span>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-velora-text">Multi-Branch Architecture</h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            Custom multi-location directories, complex booking integrations, and bespoke commercial catalog workflows.
                        </p>
                        <div class="text-3xl font-display font-bold text-velora-text pt-2" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.customBase.toLocaleString('en-IN')}+
                        </div>
                        <ul class="space-y-2.5 text-xs text-velora-muted font-sans pt-4 border-t border-velora-border">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Multi-location directory architecture</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Complex CRM &amp; booking system webhooks</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Bespoke interactive calculators &amp; filters</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Dedicated technical staging environment</li>
                        </ul>
                    </div>
                    <div class="pt-6 mt-6 border-t border-velora-border">
                        <a href="/contact?plan=custom" class="block w-full py-3 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider bg-velora-surface hover:bg-velora-card border border-velora-border text-velora-text transition-colors">
                            Initiate Custom Brief &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <!-- Dynamic Scope Configurator Module -->
            <div class="bg-velora-bg border border-velora-border rounded-2xl p-6 sm:p-8 shadow-sm">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-velora-border gap-4">
                    <div>
                        <span class="text-xs font-mono uppercase tracking-wider text-velora-accent font-bold block mb-1">Interactive Estimator</span>
                        <h3 class="font-display text-xl sm:text-2xl font-bold text-velora-text">Simulate Your Exact Scope</h3>
                    </div>
                    <div class="text-xs text-velora-muted font-sans">
                        Base setup includes architecture, mobile optimization &amp; contact delivery.
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <!-- Sliders & Checkbox Controls -->
                    <div class="lg:col-span-7 space-y-6">
                        <!-- Page Count Slider -->
                        <div class="space-y-2">
                            <div class="flex justify-between text-xs font-mono">
                                <label for="modern-calc-pages" class="text-velora-text font-bold">Total Unique Pages:</label>
                                <span id="modern-calc-pages-val" class="text-velora-accent font-bold" style="font-variant-numeric: tabular-nums;">5 Pages</span>
                            </div>
                            <input type="range" id="modern-calc-pages" min="1" max="20" value="5" class="w-full h-2 bg-velora-surface rounded-lg appearance-none cursor-pointer accent-velora-accent border border-velora-border" aria-label="Select Total Unique Pages">
                            <div class="flex justify-between text-[10px] font-mono text-velora-muted">
                                <span>1 Page</span>
                                <span>10 Pages</span>
                                <span>20 Pages</span>
                            </div>
                        </div>

                        <!-- Add-on Toggles -->
                        <div class="space-y-3 pt-2">
                            <label class="flex items-center justify-between p-3.5 rounded-xl bg-velora-surface border border-velora-border/70 hover:border-velora-borderStrong cursor-pointer transition-colors">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" id="modern-calc-seo" class="w-4 h-4 rounded text-velora-accent focus:ring-velora-accent accent-velora-accent">
                                    <div>
                                        <span class="text-xs font-bold text-velora-text block font-sans">Add Local SEO Foundation Package</span>
                                        <span class="text-[11px] text-velora-muted block font-sans">Schema markup, Google Profile alignment &amp; sitemap indexing</span>
                                    </div>
                                </div>
                                <span class="text-xs font-mono font-bold text-velora-text shrink-0" style="font-variant-numeric: tabular-nums;">+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')}</span>
                            </label>

                            <label class="flex items-center justify-between p-3.5 rounded-xl bg-velora-surface border border-velora-border/70 hover:border-velora-borderStrong cursor-pointer transition-colors">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" id="modern-calc-maint" class="w-4 h-4 rounded text-velora-accent focus:ring-velora-accent accent-velora-accent">
                                    <div>
                                        <span class="text-xs font-bold text-velora-text block font-sans">Add Annual Website Maintenance &amp; Care</span>
                                        <span class="text-[11px] text-velora-muted block font-sans">Cloud hosting, SSL renewals, monthly content updates &amp; uptime monitoring</span>
                                    </div>
                                </div>
                                <span class="text-xs font-mono font-bold text-velora-text shrink-0" style="font-variant-numeric: tabular-nums;">+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Right Column: Live Calculated Estimate -->
                    <div class="lg:col-span-5 bg-velora-surface border border-velora-border rounded-xl p-6 text-center space-y-4 shadow-sm">
                        <span class="text-[11px] font-mono uppercase tracking-wider text-velora-muted block">Estimated Investment Total</span>
                        <div id="modern-calc-total" class="font-display text-4xl sm:text-5xl font-bold text-velora-text" style="font-variant-numeric: tabular-nums;">
                            ₹${(CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage)).toLocaleString('en-IN')}
                        </div>
                        <p class="text-[11px] text-velora-muted font-sans">
                            Indicative investment based on chosen parameters. Final scope is confirmed after discovery consultation.
                        </p>
                        <a href="/contact" id="modern-calc-quote-btn" class="block w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors">
                            Request Quote With This Scope &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 7: DIAGNOSTIC INTAKE TERMINAL (CONTACT & AUDIT SYSTEM)       -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-bg border-b border-velora-border" id="modern-intake">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <!-- Left: Intake Terminal Guidance -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-velora-surface border border-velora-border text-[11px] font-mono text-velora-muted uppercase tracking-wider">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                        <span>06 Technical Review · Free Analysis</span>
                    </div>

                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Request a Technical Website Review
                    </h2>

                    <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans text-pretty">
                        Submit your existing website or business URL. We analyze your mobile speed, local Schema markup, and contact pathways, then send a concise breakdown with actionable steps.
                    </p>

                    <!-- Direct Contact Channels -->
                    <div class="pt-4 border-t border-velora-border space-y-2 text-xs font-mono text-velora-muted">
                        <div class="flex items-center gap-2.5">
                            <span class="text-velora-accent font-bold">WHATSAPP:</span>
                            <a href="https://wa.me/${CONFIG.whatsapp}" class="text-velora-text hover:text-velora-accent transition-colors font-bold">${CONFIG.phone}</a>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <span class="text-velora-accent font-bold">STUDIO EMAIL:</span>
                            <a href="mailto:${CONFIG.email}" class="text-velora-text hover:text-velora-accent transition-colors font-bold">${CONFIG.email}</a>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <span class="text-velora-accent font-bold">LOCATION:</span>
                            <span>Gurugram · Delhi NCR · Chandigarh · Bengaluru</span>
                        </div>
                    </div>
                </div>

                <!-- Right: Async Terminal Intake Form -->
                <div class="lg:col-span-7">
                    <div class="bg-velora-surface border border-velora-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                        <div class="flex items-center justify-between pb-4 border-b border-velora-border text-xs font-mono">
                            <span class="text-velora-text font-bold uppercase">Direct Review Input</span>
                            <span class="text-velora-accent text-[11px] font-mono uppercase tracking-wider">TECHNICAL INTAKE · 24H RESPONSE</span>
                        </div>

                        <!-- The Real Form -->
                        <form id="modern-audit-form" class="space-y-4" novalidate>
                            <!-- Honeypot -->
                            <div class="hidden" aria-hidden="true">
                                <label for="modern-audit-gotcha">Do not fill this</label>
                                <input type="text" id="modern-audit-gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
                            </div>

                            <div class="space-y-1.5">
                                <label for="modern-audit-url" class="block text-xs font-mono text-velora-text uppercase font-bold">
                                    Website URL or Business Name <span class="text-velora-accent">*</span>
                                </label>
                                <input type="url"
                                       id="modern-audit-url"
                                       name="website"
                                       required
                                       placeholder="https://yourbusiness.com"
                                       class="w-full px-4 py-3 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors">
                            </div>

                            <div class="space-y-1.5">
                                <label for="modern-audit-notes" class="block text-xs font-mono text-velora-text uppercase font-bold">
                                    Project Context or Primary Challenge (Optional)
                                </label>
                                <textarea id="modern-audit-notes"
                                          name="notes"
                                          rows="3"
                                          placeholder="e.g. Clinic site is slow on mobile; want more local appointment calls from Gurugram."
                                          class="w-full px-4 py-3 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors resize-none"></textarea>
                            </div>

                            <div class="pt-2">
                                <button type="submit"
                                        id="modern-audit-submit-btn"
                                        class="w-full py-4 text-xs font-mono uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent flex items-center justify-center gap-2">
                                    <span>Initiate Technical Review</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </button>
                            </div>

                            <!-- Success / Error Feedback Containers -->
                            <div id="modern-audit-success" class="hidden p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                                &check; Technical review request received. We will inspect your website's architecture and respond within 24 hours.
                            </div>
                            <div id="modern-audit-error" class="hidden p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs font-mono">
                                Submission failed. Please check your URL and try again.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 8: COMPACT KNOWLEDGE STRIP (FAQS & REASSURANCE)              -->
    <!-- ================================================================= -->
    <section class="py-16 sm:py-24 bg-velora-surface" id="modern-faq">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-velora-border gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Knowledge Base · Operational Clarity</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">
                        Frequently Addressed Questions
                    </h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Clear commercial parameters, technical standards, and governance procedures.
                </div>
            </div>

            <!-- Modern Knowledge Grid (Refined Border Density) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${FAQS.map((faq, idx) => `
                <div class="bg-velora-bg border border-velora-border/70 rounded-2xl p-6 space-y-3 shadow-sm hover:border-velora-borderStrong transition-colors">
                    <div class="flex items-center gap-2">
                        <span class="w-5 h-5 rounded bg-velora-surface border border-velora-border/80 text-velora-accent flex items-center justify-center font-mono text-[10px] font-bold">
                            0${idx + 1}
                        </span>
                        <h3 class="font-display text-base font-bold text-velora-text">${escapeHTML(faq.q)}</h3>
                    </div>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans pl-7">
                        ${escapeHTML(faq.a)}
                    </p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    const styles = `
        /* Hide global floating quote button specifically on Modern */
        html[data-experience="modern"] #desktop-floating-cta {
            display: none !important;
        }

        html[data-experience="modern"] {
            --color-bg: #ffffff;
            --color-surface: #f8fafc;
            --color-card: #f1f5f9;
            --color-card-hover: #e2e8f0;
            --color-border: rgba(15, 23, 42, 0.08);
            --color-border-strong: rgba(15, 23, 42, 0.18);
            --color-text-main: #0f172a;
            --color-text-muted: #64748b;
            --color-faint: rgba(15, 23, 42, 0.03);
            --color-faint-hover: rgba(15, 23, 42, 0.06);
            --color-btn-bg: #2563eb;
            --color-btn-text: #ffffff;
            --color-btn-hover: #1d4ed8;
            --color-nav-glass: rgba(255, 255, 255, 0.98);
            --color-accent: #2563eb;
            --color-accent-light: #60a5fa;
        }

        html[data-experience="modern"][data-theme="obsidian"] {
            --color-bg: #0b0f19;
            --color-surface: #111827;
            --color-card: #1f2937;
            --color-card-hover: #374151;
            --color-border: rgba(255, 255, 255, 0.08);
            --color-border-strong: rgba(255, 255, 255, 0.18);
            --color-text-main: #f9fafb;
            --color-text-muted: #9ca3af;
            --color-faint: rgba(255, 255, 255, 0.03);
            --color-faint-hover: rgba(255, 255, 255, 0.06);
            --color-btn-bg: #3b82f6;
            --color-btn-text: #ffffff;
            --color-btn-hover: #2563eb;
            --color-nav-glass: rgba(17, 24, 39, 0.98);
            --color-accent: #3b82f6;
            --color-accent-light: #93c5fd;
        }

        html[data-experience="modern"][data-theme="midnight"] {
            --color-bg: #030712;
            --color-surface: #0b132b;
            --color-card: #1c2541;
            --color-card-hover: #263352;
            --color-border: rgba(56, 189, 248, 0.12);
            --color-border-strong: rgba(56, 189, 248, 0.25);
            --color-text-main: #f0f9ff;
            --color-text-muted: #7dd3fc;
            --color-faint: rgba(56, 189, 248, 0.04);
            --color-faint-hover: rgba(56, 189, 248, 0.08);
            --color-btn-bg: #0284c7;
            --color-btn-text: #ffffff;
            --color-btn-hover: #0369a1;
            --color-nav-glass: rgba(11, 19, 43, 0.98);
            --color-accent: #0284c7;
            --color-accent-light: #38bdf8;
        }

        /* Modern Spatial Dock (High Opacity to prevent backdrop color bleeding) */
        html[data-experience="modern"] .modern-dock {
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(15, 23, 42, 0.10);
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08);
            transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
        }
        html[data-experience="modern"][data-theme="obsidian"] .modern-dock {
            background-color: rgba(17, 24, 39, 0.98);
            border-color: rgba(255, 255, 255, 0.12);
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.4);
        }
        html[data-experience="modern"][data-theme="midnight"] .modern-dock {
            background-color: rgba(11, 19, 43, 0.98);
            border-color: rgba(56, 189, 248, 0.2);
            box-shadow: 0 4px 20px -2px rgba(3, 7, 18, 0.5);
        }

        /* Desktop Header CTA Display Rule */
        .modern-header-cta {
            display: none;
        }
        @media (min-width: 640px) {
            .modern-header-cta {
                display: inline-flex !important;
            }
        }

        /* Guaranteed Fallback Styles for Mobile Simulation Frame */
        .modern-phone-frame {
            background-color: #0b0f19 !important;
            border: 4px solid #334155 !important;
            color: #f1f5f9 !important;
            border-radius: 32px !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4) !important;
        }
        .modern-phone-card {
            background-color: #1e293b !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
            border-radius: 14px !important;
        }
        .modern-phone-badge-emerald {
            background-color: rgba(6, 78, 59, 0.5) !important;
            border: 1px solid rgba(16, 185, 129, 0.3) !important;
            color: #6ee7b7 !important;
        }
        .modern-phone-badge-amber {
            background-color: rgba(120, 53, 15, 0.5) !important;
            border: 1px solid rgba(245, 158, 11, 0.3) !important;
            color: #fde68a !important;
        }
        .modern-phone-btn-emerald {
            background-color: #10b981 !important;
            color: #022c22 !important;
        }
        .modern-phone-btn-emerald:hover {
            background-color: #34d399 !important;
        }
        .modern-phone-btn-amber {
            background-color: #f59e0b !important;
            color: #451a03 !important;
        }
        .modern-phone-btn-amber:hover {
            background-color: #fbbf24 !important;
        }
        .modern-phone-btn-orange {
            background-color: #f97316 !important;
            color: #431407 !important;
        }
        .modern-phone-btn-orange:hover {
            background-color: #fb923c !important;
        }

        /* Delivery Pipeline Continuum Rail */
        .modern-pipeline-rail {
            position: relative;
        }
        @media (min-width: 768px) {
            .modern-pipeline-rail::before {
                content: '';
                position: absolute;
                top: 40px;
                left: 36px;
                right: 36px;
                height: 2px;
                background: var(--color-border-strong);
                z-index: 0;
            }
        }

        /* Modern Mobile Drawer */
        .modern-mobile-drawer {
            transform-origin: top center;
            transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Tabular numbers for accurate, non-jittering figures */
        .modern-tabular {
            font-variant-numeric: tabular-nums;
        }

        html[data-experience="modern"] .font-display {
            font-family: 'Space Grotesk', sans-serif;
        }
        html[data-experience="modern"] .font-mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        html[data-experience="modern"] .modern-cap-trigger[aria-selected="true"] {
            background-color: var(--color-bg);
            border-color: var(--color-accent);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
        }
        html[data-experience="modern"] .modern-proj-btn[aria-selected="true"] {
            background-color: var(--color-accent);
            color: #ffffff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        html[data-experience="modern"] .modern-sector-btn[aria-selected="true"] {
            background-color: var(--color-bg);
            border-color: var(--color-accent);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
            .modern-dock,
            .modern-mobile-drawer,
            .modern-proj-view,
            .modern-cap-panel,
            .modern-sector-panel {
                transition: none !important;
                animation: none !important;
            }
            html[data-experience="modern"] *,
            html[data-experience="modern"] *::before,
            html[data-experience="modern"] *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;

    const script = `
        (function() {
            window.initModernInteractions = function() {
                // 1. Mobile Menu Drawer Toggle with Accessible Hamburger / Close Icon Switch
                const mobileBtn = document.getElementById('modern-mobile-menu-btn');
                const mobileDrawer = document.getElementById('modern-mobile-dock');
                const mobileLinks = document.querySelectorAll('.modern-mobile-anchor-link, .modern-mobile-nav-link');
                const burgerIcon = document.getElementById('modern-burger-icon');

                function toggleMobileMenu(open) {
                    if (!mobileBtn || !mobileDrawer) return;
                    const isOpen = typeof open === 'boolean' ? open : (mobileBtn.getAttribute('aria-expanded') !== 'true');
                    mobileBtn.setAttribute('aria-expanded', isOpen);
                    if (isOpen) {
                        mobileDrawer.classList.remove('hidden');
                        mobileDrawer.setAttribute('aria-hidden', 'false');
                        mobileBtn.setAttribute('aria-label', 'Close Modern Navigation Menu');
                        if (burgerIcon) burgerIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                    } else {
                        mobileDrawer.classList.add('hidden');
                        mobileDrawer.setAttribute('aria-hidden', 'true');
                        mobileBtn.setAttribute('aria-label', 'Open Modern Navigation Menu');
                        if (burgerIcon) burgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    }
                }

                if (mobileBtn && mobileDrawer) {
                    mobileBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        toggleMobileMenu();
                    });

                    // Close on link tap
                    mobileLinks.forEach(link => {
                        link.addEventListener('click', () => toggleMobileMenu(false));
                    });

                    // Close on Escape
                    window.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape') toggleMobileMenu(false);
                    });

                    // Close on outside click
                    document.addEventListener('click', function(e) {
                        if (!mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
                            toggleMobileMenu(false);
                        }
                    });
                }

                // 2. Capability Matrix Tab Switching (Arrow Key + Click)
                const capTabs = document.querySelectorAll('.modern-cap-trigger');
                const capPanels = document.querySelectorAll('.modern-cap-panel');

                function switchCapTab(targetIndex) {
                    capTabs.forEach((tab, i) => {
                        const isTarget = (i === targetIndex);
                        tab.setAttribute('aria-selected', isTarget);
                        tab.setAttribute('tabindex', isTarget ? '0' : '-1');
                        if (isTarget) {
                            tab.classList.add('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                            tab.classList.remove('bg-velora-card/60', 'border-velora-border');
                        } else {
                            tab.classList.remove('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                            tab.classList.add('bg-velora-card/60', 'border-velora-border');
                        }
                    });

                    capPanels.forEach((panel, i) => {
                        if (i === targetIndex) {
                            panel.classList.remove('hidden');
                            panel.classList.add('block');
                        } else {
                            panel.classList.add('hidden');
                            panel.classList.remove('block');
                        }
                    });
                }

                capTabs.forEach((tab, index) => {
                    tab.addEventListener('click', () => switchCapTab(index));
                    tab.addEventListener('keydown', (e) => {
                        let target = -1;
                        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                            target = (index + 1) % capTabs.length;
                        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                            target = (index - 1 + capTabs.length) % capTabs.length;
                        }
                        if (target !== -1) {
                            e.preventDefault();
                            capTabs[target].focus();
                            switchCapTab(target);
                        }
                    });
                });

                // 3. Multi-State Work Viewport
                const projBtns = document.querySelectorAll('.modern-proj-btn');
                const projViews = document.querySelectorAll('.modern-proj-view');
                const modeBtns = document.querySelectorAll('.modern-mode-btn');

                let activeProjectId = 'aurora-aesthetics';
                let activeMode = 'sim';

                function switchProject(id) {
                    activeProjectId = id;
                    projBtns.forEach(btn => {
                        const isMatch = btn.getAttribute('data-proj') === id;
                        btn.setAttribute('aria-selected', isMatch);
                        if (isMatch) {
                            btn.classList.add('bg-velora-accent', 'text-white', 'shadow-sm', 'font-bold');
                            btn.classList.remove('text-velora-muted');
                        } else {
                            btn.classList.remove('bg-velora-accent', 'text-white', 'shadow-sm', 'font-bold');
                            btn.classList.add('text-velora-muted');
                        }
                    });

                    projViews.forEach(view => {
                        if (view.id === 'modern-proj-' + id) {
                            view.classList.remove('hidden');
                            view.classList.add('block');
                        } else {
                            view.classList.add('hidden');
                            view.classList.remove('block');
                        }
                    });
                }

                function switchMode(mode) {
                    activeMode = mode;
                    modeBtns.forEach(btn => {
                        const isMatch = btn.getAttribute('data-mode') === mode;
                        if (isMatch) {
                            btn.classList.add('bg-velora-card', 'text-velora-accent', 'border', 'border-velora-border', 'font-bold');
                            btn.classList.remove('text-velora-muted');
                        } else {
                            btn.classList.remove('bg-velora-card', 'text-velora-accent', 'border', 'border-velora-border', 'font-bold');
                            btn.classList.add('text-velora-muted');
                        }
                    });

                    // Update within active project view
                    projViews.forEach(view => {
                        const simEl = view.querySelector('.modern-view-sim');
                        const archEl = view.querySelector('.modern-view-arch');
                        const convEl = view.querySelector('.modern-view-conv');

                        if (simEl) simEl.classList.toggle('hidden', mode !== 'sim');
                        if (archEl) archEl.classList.toggle('hidden', mode !== 'arch');
                        if (convEl) convEl.classList.toggle('hidden', mode !== 'conv');
                    });
                }

                projBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        switchProject(this.getAttribute('data-proj'));
                    });
                });

                modeBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        switchMode(this.getAttribute('data-mode'));
                    });
                });

                // Command Deck Quick-Jump Nodes
                const quickJumpNodes = document.querySelectorAll('.modern-quick-jump-node');
                quickJumpNodes.forEach(node => {
                    node.addEventListener('click', function() {
                        const targetId = this.getAttribute('data-project-id');
                        if (targetId) {
                            switchProject(targetId);
                            const viewportSection = document.getElementById('modern-viewport');
                            if (viewportSection) {
                                viewportSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    });
                });

                // 4. Sector Matrix Tab Switching
                const sectorBtns = document.querySelectorAll('.modern-sector-btn');
                const sectorPanels = document.querySelectorAll('.modern-sector-panel');

                function switchSector(targetIndex) {
                    sectorBtns.forEach((btn, i) => {
                        const isTarget = (i === targetIndex);
                        btn.setAttribute('aria-selected', isTarget);
                        btn.setAttribute('tabindex', isTarget ? '0' : '-1');
                        if (isTarget) {
                            btn.classList.add('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                            btn.classList.remove('bg-velora-card/60', 'border-velora-border');
                        } else {
                            btn.classList.remove('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                            btn.classList.add('bg-velora-card/60', 'border-velora-border');
                        }
                    });

                    sectorPanels.forEach((panel, i) => {
                        if (i === targetIndex) {
                            panel.classList.remove('hidden');
                            panel.classList.add('block');
                        } else {
                            panel.classList.add('hidden');
                            panel.classList.remove('block');
                        }
                    });
                }

                sectorBtns.forEach((btn, idx) => {
                    btn.addEventListener('click', () => switchSector(idx));
                    btn.addEventListener('keydown', (e) => {
                        let target = -1;
                        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                            target = (idx + 1) % sectorBtns.length;
                        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                            target = (idx - 1 + sectorBtns.length) % sectorBtns.length;
                        }
                        if (target !== -1) {
                            e.preventDefault();
                            sectorBtns[target].focus();
                            switchSector(target);
                        }
                    });
                });

                // 5. Pricing Scope Configurator
                const pagesInput = document.getElementById('modern-calc-pages');
                const pagesVal = document.getElementById('modern-calc-pages-val');
                const seoInput = document.getElementById('modern-calc-seo');
                const maintInput = document.getElementById('modern-calc-maint');
                const totalDisplay = document.getElementById('modern-calc-total');
                const quoteBtn = document.getElementById('modern-calc-quote-btn');

                if (pagesInput && pagesVal && totalDisplay && quoteBtn) {
                    const base = ${CONFIG.pricing.baseCalculator};
                    const perPage = ${CONFIG.pricing.perPage};
                    const seoAddon = ${CONFIG.pricing.seoAddon};
                    const maintAddon = ${CONFIG.pricing.maintenanceAddon};

                    function recalc() {
                        const pages = parseInt(pagesInput.value, 10) || 5;
                        pagesVal.textContent = pages + (pages === 1 ? ' Page' : ' Pages');

                        let total = base + (pages * perPage);
                        if (seoInput && seoInput.checked) total += seoAddon;
                        if (maintInput && maintInput.checked) total += maintAddon;

                        totalDisplay.textContent = '₹' + total.toLocaleString('en-IN');
                        quoteBtn.href = '/contact?pages=' + pages + '&seo=' + (seoInput && seoInput.checked) + '&maint=' + (maintInput && maintInput.checked) + '&est=' + total;
                    }

                    pagesInput.addEventListener('input', recalc);
                    if (seoInput) seoInput.addEventListener('change', recalc);
                    if (maintInput) maintInput.addEventListener('change', recalc);
                    recalc();
                }

                // 6. Diagnostic Intake Terminal Form
                const auditForm = document.getElementById('modern-audit-form');
                if (auditForm) {
                    auditForm.addEventListener('submit', async function(e) {
                        e.preventDefault();
                        if (typeof window.veloraTrack === 'function') window.veloraTrack('audit_submit');

                        const submitBtn = document.getElementById('modern-audit-submit-btn');
                        const errorDiv = document.getElementById('modern-audit-error');
                        const successDiv = document.getElementById('modern-audit-success');
                        const urlInput = document.getElementById('modern-audit-url');
                        const gotchaInput = document.getElementById('modern-audit-gotcha');

                        if (!urlInput || !urlInput.value.trim()) return;

                        if (submitBtn) {
                            submitBtn.disabled = true;
                            submitBtn.textContent = 'Analyzing Architecture...';
                        }
                        if (errorDiv) errorDiv.classList.add('hidden');
                        if (successDiv) successDiv.classList.add('hidden');

                        try {
                            const res = await fetch('/api/audit', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    website: urlInput.value.trim(),
                                    url: urlInput.value.trim(),
                                    _gotcha: gotchaInput ? gotchaInput.value : ''
                                })
                            });

                            if (res.ok) {
                                if (successDiv) successDiv.classList.remove('hidden');
                                auditForm.reset();
                            } else {
                                const data = await res.json().catch(() => ({}));
                                if (errorDiv) {
                                    errorDiv.textContent = data.message || 'Submission failed. Please check the URL and try again.';
                                    errorDiv.classList.remove('hidden');
                                }
                            }
                        } catch (err) {
                            if (errorDiv) {
                                errorDiv.textContent = err.message || 'Network error. Please try again.';
                                errorDiv.classList.remove('hidden');
                            }
                        } finally {
                            if (submitBtn) {
                                submitBtn.disabled = false;
                                submitBtn.textContent = 'Initiate Technical Review →';
                            }
                        }
                    });
                }
            };

            window.cleanupModernInteractions = function() {
                // Clear any lingering timeouts or global listeners if assigned
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', window.initModernInteractions);
            } else {
                window.initModernInteractions();
            }
        })();
    `;

    return {
        meta,
        headerContent: ModernHeader(currentPath),
        mainContent: content,
        footerContent: ModernFooter(),
        styles,
        script
    };
}

module.exports = {
    renderModernExperience
};
