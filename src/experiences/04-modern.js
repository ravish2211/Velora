// ============================================================================ //
// VELORA DIGITAL — 04 MODERN EXPERIENCE PRESENTATION RENDERER                  //
// Art Direction: Interactive Spatial Operating Canvas · Bento · Command Dock    //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Modern-owned Persistent Floating Command Dock.
 * Replaces the conventional top agency header with an application-grade control surface.
 */
function ModernHeader(currentPath) {
    const navItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="modern-nav-item px-2.5 py-1.5 min-h-[36px] flex items-center rounded-lg text-[11px] font-mono tracking-wider transition-all ${isActive ? 'bg-velora-accent text-white font-bold' : 'text-velora-muted hover:text-velora-text hover:bg-velora-card'}">${label}</a>`;
    };

    const anchorItem = (hash, label, icon) => {
        return `<a href="${hash}" class="modern-anchor-link px-2.5 py-1.5 min-h-[36px] flex items-center gap-1.5 rounded-lg text-[11px] font-mono tracking-wider text-velora-muted hover:text-velora-text hover:bg-velora-card transition-all">
            ${icon ? `<span class="opacity-60 text-[10px]">${icon}</span>` : ''}
            <span>${label}</span>
        </a>`;
    };

    const mobileNavItem = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="modern-mobile-nav-link block px-4 py-3 min-h-[44px] rounded-xl text-xs font-mono tracking-wider transition-colors ${isActive ? 'bg-velora-accent text-white font-bold' : 'text-velora-muted hover:text-velora-text hover:bg-velora-card'}">${label}</a>`;
    };

    const mobileAnchorItem = (hash, label) => {
        return `<a href="${hash}" class="modern-mobile-anchor-link block px-4 py-3 min-h-[44px] rounded-xl text-xs font-mono tracking-wider text-velora-muted hover:text-velora-text hover:bg-velora-card transition-colors">${label}</a>`;
    };

    return `
    <header class="modern-header sticky top-0 z-50 w-full transition-all duration-300" role="banner" aria-label="Modern Spatial Navigation">
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-2">
            <div class="modern-dock flex items-center justify-between px-3.5 py-2 rounded-2xl transition-all">
                <!-- Brand Anchor & Monogram -->
                <a href="/" class="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent rounded-lg min-h-[44px] px-1" id="modern-brand-logo" aria-label="Velora Digital Home">
                    <div class="w-7 h-7 rounded-lg bg-velora-accent text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm transition-transform duration-300 group-hover:scale-105">
                        VD
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-1.5">
                            <span class="font-display font-bold text-sm tracking-tight text-velora-text leading-none">VELORA</span>
                            <span class="px-1.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-widest bg-velora-card border border-velora-border text-velora-accent font-semibold">04 // MODERN</span>
                        </div>
                        <span class="text-[8px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-semibold mt-0.5 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            OPERATING CANVAS
                        </span>
                    </div>
                </a>

                <!-- Desktop Spatial Dock Navigation (Persistent Application Rail) -->
                <nav class="hidden lg:flex items-center gap-1 bg-velora-bg/90 border border-velora-border rounded-xl px-2 py-1 shadow-inner" aria-label="Modern Command Rail">
                    ${anchorItem('#modern-command', 'Canvas', '◈')}
                    ${anchorItem('#modern-capabilities', 'Bento Specs', '▦')}
                    ${anchorItem('#modern-workspace', 'Work Lab', '◎')}
                    ${anchorItem('#modern-configurator', 'Configurator', '⚙')}
                    ${anchorItem('#modern-intake', 'Dispatch', '↗')}
                    ${anchorItem('#modern-knowledge', 'Knowledge', 'ℹ')}
                    <span class="h-3.5 w-px bg-velora-border mx-1" aria-hidden="true"></span>
                    ${navItem('/about', 'Studio')}
                </nav>

                <!-- Header Actions: Immediate Dispatch Trigger & Mobile Drawer Button -->
                <div class="flex items-center gap-2.5">
                    <a href="#modern-configurator" id="modern-dock-cta" class="modern-header-cta items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent min-h-[38px]">
                        <span>Configure</span>
                        <span aria-hidden="true">&darr;</span>
                    </a>

                    <!-- Mobile Menu Hamburger / Close Button -->
                    <button type="button" id="modern-mobile-menu-btn" aria-expanded="false" aria-controls="modern-mobile-dock" aria-label="Open Modern Navigation Menu" class="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-velora-muted hover:text-velora-text hover:bg-velora-card border border-velora-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path id="modern-burger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Navigation Overlay -->
        <div id="modern-mobile-dock" class="modern-mobile-drawer lg:hidden hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2" aria-label="Mobile Navigation Menu" aria-hidden="true">
            <div class="p-4 rounded-2xl bg-velora-surface border border-velora-border shadow-2xl space-y-1.5">
                <div class="pb-2 mb-2 border-b border-velora-border flex items-center justify-between text-[10px] font-mono text-velora-muted uppercase tracking-wider">
                    <span>Spatial Command Rail</span>
                    <span class="text-emerald-500 font-bold">● System Active</span>
                </div>
                ${mobileAnchorItem('#modern-command', '01 // System Boot Canvas')}
                ${mobileAnchorItem('#modern-capabilities', '02 // Bento Capability Matrix')}
                ${mobileAnchorItem('#modern-workspace', '03 // Work Lab & Sector Matrix')}
                ${mobileAnchorItem('#modern-configurator', '04 // Scope & Pricing Configurator')}
                ${mobileAnchorItem('#modern-intake', '05 // Technical Dispatch Terminal')}
                ${mobileAnchorItem('#modern-knowledge', '06 // Contextual Knowledge Base')}
                <div class="pt-2 border-t border-velora-border"></div>
                ${mobileNavItem('/services', 'All Service Specifications')}
                ${mobileNavItem('/portfolio', 'All Work Prototypes')}
                ${mobileNavItem('/about', 'About Studio & Code Ownership')}
                ${mobileNavItem('/contact', 'Direct Studio Contact &rarr;')}
            </div>
        </div>
    </header>`;
}

/**
 * Modern-owned System Shutdown & Handoff Footer.
 * Replaces the conventional 4-column link directory with a compact operational conclusion.
 */
function ModernFooter() {
    return `
    <footer class="modern-footer bg-velora-surface border-t border-velora-border pt-12 pb-16 text-velora-text transition-colors duration-300" role="contentinfo" aria-label="Modern System Handoff">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Operational Status Strip -->
            <div class="p-6 rounded-2xl bg-velora-bg border border-velora-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm mb-10">
                <div class="space-y-1.5">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span class="font-mono text-xs uppercase font-bold text-velora-text tracking-wider">System Handoff Ready</span>
                        <span class="text-velora-borderStrong" aria-hidden="true">&bull;</span>
                        <span class="text-[10px] font-mono text-velora-muted uppercase">100% Client Code Ownership</span>
                    </div>
                    <p class="text-xs text-velora-muted font-sans max-w-xl">
                        Velora Digital builds fast, semantic websites with dedicated local search integration. Source code, production assets, and domains are delivered directly to your practice.
                    </p>
                </div>

                <!-- Immediate Action Triggers -->
                <div class="flex flex-wrap items-center gap-2.5 shrink-0">
                    <a href="#modern-configurator" class="px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-velora-surface hover:bg-velora-card border border-velora-border text-velora-text transition-colors">
                        Reconfigure Scope
                    </a>
                    <a href="#modern-intake" class="px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors shadow-sm">
                        Dispatch Brief &rarr;
                    </a>
                </div>
            </div>

            <!-- Territory & Governance Matrix -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-velora-border text-xs font-mono text-velora-muted">
                <div>
                    <span class="text-velora-text font-bold uppercase tracking-wider block mb-2 text-[10px]">Studio Operating Hub</span>
                    <p class="text-velora-muted font-sans text-xs leading-relaxed">
                        Gurugram, Haryana.<br>
                        Serving Delhi NCR, Chandigarh &amp; Bengaluru commercial practices.
                    </p>
                </div>

                <div>
                    <span class="text-velora-text font-bold uppercase tracking-wider block mb-2 text-[10px]">Direct Channels</span>
                    <ul class="space-y-1 font-sans text-xs">
                        <li><a href="https://wa.me/${CONFIG.whatsapp}" class="text-velora-text hover:text-velora-accent transition-colors">WhatsApp: ${CONFIG.phone}</a></li>
                        <li><a href="mailto:${CONFIG.email}" class="text-velora-text hover:text-velora-accent transition-colors">Studio: ${CONFIG.email}</a></li>
                    </ul>
                </div>

                <div>
                    <span class="text-velora-text font-bold uppercase tracking-wider block mb-2 text-[10px]">Governance &amp; Specs</span>
                    <ul class="space-y-1 font-sans text-xs">
                        <li><a href="/privacy-policy" class="hover:text-velora-accent transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" class="hover:text-velora-accent transition-colors">Terms of Service</a></li>
                        <li><a href="/services" class="hover:text-velora-accent transition-colors">Service Specifications</a></li>
                    </ul>
                </div>

                <div>
                    <span class="text-velora-text font-bold uppercase tracking-wider block mb-2 text-[10px]">Studio Theme Engine</span>
                    <div class="relative">
                        <button type="button" id="studio-theme-btn" class="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-velora-card border border-velora-border hover:border-velora-borderStrong text-velora-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent" aria-haspopup="true" aria-expanded="false">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                            <span>Studio Palette</span>
                        </button>
                        <div id="studio-theme-menu" class="absolute bottom-full left-0 mb-2 w-48 bg-velora-surface border border-velora-border rounded-xl shadow-xl p-2 hidden z-50">
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
                </div>
            </div>

            <!-- Colophon Copyright Line -->
            <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-velora-muted">
                <div>
                    &copy; ${new Date().getFullYear()} Velora Digital · Experience 04 Modern Spatial System.
                </div>
                <a href="#modern-command" class="hover:text-velora-accent transition-colors flex items-center gap-1">
                    <span>Return to Command Canvas</span>
                    <span>&uarr;</span>
                </a>
            </div>
        </div>
    </footer>`;
}

/**
 * Primary Modern Experience presentation renderer.
 * Composes the Interactive Spatial Operating Canvas across 6 radically distinct architectural zones.
 */
function renderModernExperience(currentPath = "/") {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spiceRoom = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Modern Spatial Web Design & Local SEO Studio',
        description: 'Velora Digital engineers fast, mobile-first websites with clean semantic SSR architecture and dedicated local search discovery for high-trust commercial practices.',
        schema: generateSchema('Organization'),
        breadcrumbs: currentPath === '/' || currentPath === '' ? null : [{ title: 'Home', link: '/?exp=modern' }]
    };

    const content = `
    <!-- ================================================================= -->
    <!-- ZONE 1: SYSTEM BOOT / COMMAND CANVAS (MULTI-ZONE OPENING)          -->
    <!-- ================================================================= -->
    <section class="relative pt-4 pb-12 sm:pt-6 sm:pb-16 overflow-hidden bg-velora-bg text-velora-text border-b border-velora-border" id="modern-command">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Studio Telemetry Strip: Immediately signals live system environment -->
            <div class="flex flex-wrap items-center justify-between gap-2.5 py-2 px-3.5 mb-6 rounded-xl bg-velora-surface border border-velora-border/80 text-[10px] font-mono text-velora-muted">
                <div class="flex items-center gap-3">
                    <span class="flex items-center gap-1.5 text-emerald-500 font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        SYSTEM: OPERATIONAL
                    </span>
                    <span class="text-velora-borderStrong" aria-hidden="true">&bull;</span>
                    <span>ENGINE: SEMANTIC SSR</span>
                    <span class="text-velora-borderStrong" aria-hidden="true">&bull;</span>
                    <span class="hidden sm:inline">PERFORMANCE: LIGHTWEIGHT SSR</span>
                </div>
                <div class="flex items-center gap-3">
                    <span>SCHEMA: VERIFIED LOCAL</span>
                    <span class="text-velora-borderStrong" aria-hidden="true">&bull;</span>
                    <span class="text-velora-accent font-bold">OWNERSHIP: 100% CLIENT</span>
                </div>
            </div>

            <!-- Command Center Two-Column Canvas -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <!-- Left Column (7 cols): System Declaration & Action Hub -->
                <div class="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-velora-surface border border-velora-border shadow-sm space-y-6">
                    <div class="space-y-4">
                        <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-velora-card border border-velora-border text-[10px] font-mono uppercase tracking-wider text-velora-accent font-semibold">
                            <span>◈ STUDIO COMMAND CANVAS</span>
                        </div>

                        <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-velora-text leading-[1.08] text-balance">
                            High-Precision Web Systems for Local Commercial Practices
                        </h1>

                        <p class="text-sm sm:text-base text-velora-muted leading-relaxed max-w-2xl font-sans text-pretty">
                            We build fast, mobile-first websites and verified local search discovery foundations for clinics, real estate advisory firms, restaurants, and professional practices. Clean semantic SSR code, zero runtime framework bloat, and direct patient/client inquiry routing.
                        </p>
                    </div>

                    <!-- Direct Operating Triggers -->
                    <div class="pt-4 border-t border-velora-border flex flex-wrap items-center gap-3">
                        <a href="#modern-configurator" class="px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                            Open Scope Configurator &darr;
                        </a>
                        <a href="#modern-workspace" class="px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold bg-velora-bg hover:bg-velora-card text-velora-text border border-velora-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                            Enter Work Lab &darr;
                        </a>
                        <a href="#modern-intake" class="px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-velora-muted hover:text-velora-accent transition-colors">
                            Technical Dispatch &rarr;
                        </a>
                    </div>
                </div>

                <!-- Right Column (5 cols): Live Interactive Concept Station -->
                <div class="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-velora-surface border border-velora-border shadow-sm space-y-6">
                    <div>
                        <div class="flex items-center justify-between pb-3 mb-4 border-b border-velora-border">
                            <span class="text-xs font-mono font-bold uppercase tracking-wider text-velora-text">Studio Concept Station</span>
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">Live Testing Nodes</span>
                        </div>

                        <p class="text-xs text-velora-muted font-sans leading-relaxed mb-4">
                            Select any sector node below to instantly inspect its conversion architecture in the Work Lab:
                        </p>

                        <!-- Concept Quick Nodes -->
                        <div class="space-y-2.5">
                            <button type="button" class="modern-quick-jump-node w-full text-left p-3 rounded-xl bg-velora-bg border border-velora-border hover:border-velora-accent transition-all group" data-project-id="aurora-aesthetics">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="w-5 h-5 rounded bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono text-[9px] font-bold">01</span>
                                        <span class="text-xs font-bold text-velora-text group-hover:text-velora-accent transition-colors">Aurora Aesthetic Clinic</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-velora-muted group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                                </div>
                                <div class="text-[10px] text-velora-muted font-sans mt-1 pl-7">Healthcare · Doctor credentials &amp; 1-tap consultation booking</div>
                            </button>

                            <button type="button" class="modern-quick-jump-node w-full text-left p-3 rounded-xl bg-velora-bg border border-velora-border hover:border-velora-accent transition-all group" data-project-id="aarav-estates">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="w-5 h-5 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center font-mono text-[9px] font-bold">02</span>
                                        <span class="text-xs font-bold text-velora-text group-hover:text-velora-accent transition-colors">Aarav Properties</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-velora-muted group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                                </div>
                                <div class="text-[10px] text-velora-muted font-sans mt-1 pl-7">Real Estate · Floor plan downloads &amp; broker WhatsApp routing</div>
                            </button>

                            <button type="button" class="modern-quick-jump-node w-full text-left p-3 rounded-xl bg-velora-bg border border-velora-border hover:border-velora-accent transition-all group" data-project-id="the-spice-room">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="w-5 h-5 rounded bg-orange-500/10 text-orange-600 flex items-center justify-center font-mono text-[9px] font-bold">03</span>
                                        <span class="text-xs font-bold text-velora-text group-hover:text-velora-accent transition-colors">The Spice Room</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-velora-muted group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                                </div>
                                <div class="text-[10px] text-velora-muted font-sans mt-1 pl-7">Hospitality · Instant HTML menu &amp; direct table reservation</div>
                            </button>
                        </div>
                    </div>

                    <!-- Base Investment Metric Card -->
                    <div class="pt-3 border-t border-velora-border flex items-center justify-between text-xs font-mono">
                        <span class="text-velora-muted">Starting Studio Investment:</span>
                        <span class="font-bold text-velora-text text-sm modern-tabular">₹${CONFIG.pricing.essential.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 2: MODULAR CAPABILITY BENTO CANVAS (ASYMMETRIC GRID)          -->
    <!-- ================================================================= -->
    <section class="py-14 sm:py-20 bg-velora-surface border-b border-velora-border" id="modern-capabilities">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-velora-border gap-4">
                <div>
                    <span class="text-[10px] font-mono uppercase tracking-widest text-velora-accent block mb-1.5">Bento Specification Canvas</span>
                    <h2 class="font-display text-2xl sm:text-4xl font-bold text-velora-text tracking-tight">
                        Modular Architecture, Explicit Scope
                    </h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Four engineered capability modules with distinct spatial roles, explicit deliverables, and zero third-party lock-in.
                </p>
            </div>

            <!-- Asymmetric Bento Grid (Replaces uniform 3-card grid) -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                <!-- Module 1: Large Anchor Module (Span 8) — Semantic SSR & Speed -->
                <div class="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-velora-bg border border-velora-border flex flex-col justify-between space-y-6 shadow-sm">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-velora-accent px-2 py-0.5 rounded bg-velora-surface border border-velora-border">
                                MODULE 01 // CORE ARCHITECTURE
                            </span>
                            <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Mobile-First SSR Performance</span>
                        </div>

                        <h3 class="font-display text-xl sm:text-3xl font-bold text-velora-text">
                            Semantic SSR Engineering &amp; Complete Asset Independence
                        </h3>

                        <p class="text-xs sm:text-sm text-velora-muted font-sans leading-relaxed max-w-2xl">
                            We build without heavy visual page-builder plugins, proprietary SaaS platforms, or ongoing template fees. Your website executes on clean, server-rendered Node.js HTML with atomic Tailwind CSS. All code, design files, and domain keys belong 100% to your business.
                        </p>

                        <!-- Deliverables Checklist -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-sans text-velora-text">
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 flex items-start gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span>Mobile-first responsive architecture</span>
                            </div>
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 flex items-start gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span>Zero runtime UI framework bloat</span>
                            </div>
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 flex items-start gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span>100% Source code &amp; domain ownership</span>
                            </div>
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 flex items-start gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span>Secure contact forms &amp; instant notifications</span>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-velora-border flex items-center justify-between text-[11px] font-mono text-velora-muted">
                        <span>Turnaround: 2–4 Weeks</span>
                        <a href="/services/website-design" class="text-velora-accent hover:underline font-bold">Detailed Web Specs &rarr;</a>
                    </div>
                </div>

                <!-- Module 2: Compact Module (Span 4) — Local Search & Schema Authority -->
                <div class="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-velora-bg border border-velora-border flex flex-col justify-between space-y-4 shadow-sm">
                    <div class="space-y-3">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-velora-accent px-2 py-0.5 rounded bg-velora-surface border border-velora-border inline-block">
                            MODULE 02 // LOCAL SEO
                        </span>

                        <h3 class="font-display text-lg sm:text-xl font-bold text-velora-text">
                            Schema.org &amp; Map Search Synchronization
                        </h3>

                        <p class="text-xs text-velora-muted font-sans leading-relaxed">
                            Structured data codified for Google search engines: exact geo-coordinates, verified practice credentials, and NAP consistency across directories.
                        </p>

                        <div class="space-y-2 pt-2">
                            <div class="p-2.5 rounded-lg bg-velora-surface border border-velora-border/60 text-xs font-sans text-velora-text flex items-center gap-2">
                                <span class="text-velora-accent">&bull;</span>
                                <span>MedicalBusiness / RealEstate Schema</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-velora-surface border border-velora-border/60 text-xs font-sans text-velora-text flex items-center gap-2">
                                <span class="text-velora-accent">&bull;</span>
                                <span>Google Business Profile alignment</span>
                            </div>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-velora-border text-[11px] font-mono">
                        <a href="/services/local-seo" class="text-velora-accent hover:underline font-bold block">Local SEO Specs &rarr;</a>
                    </div>
                </div>

                <!-- Module 3: Compact Module (Span 4) — Cloud Care & Maintenance -->
                <div class="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-velora-bg border border-velora-border flex flex-col justify-between space-y-4 shadow-sm">
                    <div class="space-y-3">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-velora-accent px-2 py-0.5 rounded bg-velora-surface border border-velora-border inline-block">
                            MODULE 03 // MAINTENANCE
                        </span>

                        <h3 class="font-display text-lg sm:text-xl font-bold text-velora-text">
                            Continuous Care &amp; Uptime Assurance
                        </h3>

                        <p class="text-xs text-velora-muted font-sans leading-relaxed">
                            Ongoing peace of mind: automated cloud backups, SSL certificate renewals, monthly content edits, and prompt technical response.
                        </p>

                        <div class="space-y-2 pt-2">
                            <div class="p-2.5 rounded-lg bg-velora-surface border border-velora-border/60 text-xs font-sans text-velora-text flex items-center gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span>Monthly content updates included</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-velora-surface border border-velora-border/60 text-xs font-sans text-velora-text flex items-center gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span>High-availability cloud hosting management</span>
                            </div>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-velora-border text-[11px] font-mono">
                        <a href="/services/website-maintenance" class="text-velora-accent hover:underline font-bold block">Maintenance Specs &rarr;</a>
                    </div>
                </div>

                <!-- Module 4: Wide Panoramic Module (Span 8) — Instant Lead Pathways -->
                <div class="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-velora-bg border border-velora-border flex flex-col justify-between space-y-4 shadow-sm">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-velora-accent px-2 py-0.5 rounded bg-velora-surface border border-velora-border">
                                MODULE 04 // CONVERSION CHANNELS
                            </span>
                            <span class="text-xs font-mono text-velora-muted">Frictionless Pathways</span>
                        </div>

                        <h3 class="font-display text-xl sm:text-2xl font-bold text-velora-text">
                            Direct Inquiry Architecture Built for High-Intent Mobile Users
                        </h3>

                        <p class="text-xs sm:text-sm text-velora-muted font-sans leading-relaxed">
                            Local customers do not want multi-step signup walls or broken PDF downloads. Every interface we engineer features immediate 1-tap WhatsApp triggers, direct click-to-call routing, and verified practitioner credentials positioned above the mobile fold.
                        </p>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 space-y-1 text-xs font-sans">
                                <span class="font-mono font-bold text-[10px] text-velora-accent block uppercase">Channel 01</span>
                                <span class="font-bold text-velora-text block">1-Tap WhatsApp</span>
                                <span class="text-velora-muted text-[11px]">Instant customer bridge bypassing aggregators</span>
                            </div>
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 space-y-1 text-xs font-sans">
                                <span class="font-mono font-bold text-velora-accent block uppercase">Channel 02</span>
                                <span class="font-bold text-velora-text block">Verified Credentials</span>
                                <span class="text-velora-muted text-[11px]">Doctor, broker &amp; chef credentials upfront</span>
                            </div>
                            <div class="p-3 rounded-xl bg-velora-surface border border-velora-border/60 space-y-1 text-xs font-sans">
                                <span class="font-mono font-bold text-velora-accent block uppercase">Channel 03</span>
                                <span class="font-bold text-velora-text block">Native HTML Data</span>
                                <span class="text-velora-muted text-[11px]">Zero PDF menus or complex floor plan apps</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 3: LIVE PROJECT WORKSPACE + INTEGRATED SECTOR MATRIX          -->
    <!-- (Merges Portfolio & Sectors: Eliminates standalone 4-card grid)    -->
    <!-- ================================================================= -->
    <section class="py-14 sm:py-20 bg-velora-bg border-b border-velora-border" id="modern-workspace">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-velora-border gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-velora-accent">Work Lab // Unified Sector Workspace</span>
                        <span class="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-velora-surface border border-velora-border text-velora-muted font-semibold">Concept Prototypes</span>
                    </div>
                    <h2 class="font-display text-2xl sm:text-4xl font-bold text-velora-text tracking-tight">
                        Live Project Workspace &amp; Sector Solutions
                    </h2>
                </div>
                <div class="p-3 rounded-xl bg-velora-surface border border-velora-border max-w-sm text-[11px] font-sans text-velora-muted leading-relaxed">
                    <strong class="text-velora-text block font-mono uppercase text-[9px] mb-0.5">Truthful Concept Disclosure:</strong>
                    Showcase studies below are custom-engineered design concepts demonstrating mobile ergonomics, schema integration, and direct lead capture for commercial practices.
                </div>
            </div>

            <!-- Integrated Sector Operating Matrix (Segmented Control) -->
            <div class="mb-6 p-2 rounded-2xl bg-velora-surface border border-velora-border">
                <div class="text-[10px] font-mono uppercase tracking-wider text-velora-muted px-2 py-1 mb-1">
                    Select Commercial Sector to Contextualize Workspace:
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" role="tablist" aria-label="Commercial Sectors">
                    ${INDUSTRIES.map((ind, idx) => `
                    <button type="button"
                            role="tab"
                            id="modern-sector-tab-${idx}"
                            aria-selected="${idx === 0 ? 'true' : 'false'}"
                            aria-controls="modern-sector-desc-${idx}"
                            data-sector-index="${idx}"
                            class="modern-sector-btn p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent ${idx === 0 ? 'bg-velora-bg border-velora-accent shadow-sm' : 'bg-velora-card/60 border-velora-border hover:bg-velora-card'}">
                        <div class="flex items-center gap-2">
                            <span class="text-base" aria-hidden="true">${ind.icon}</span>
                            <span class="text-xs font-bold text-velora-text block leading-tight truncate">${escapeHTML(ind.shortName)}</span>
                        </div>
                        <span class="text-[9px] font-mono text-velora-muted mt-1 block truncate">${idx === 0 ? 'Aurora Prototype' : (idx === 1 ? 'Aarav Prototype' : (idx === 2 ? 'Spice Room' : 'Consulting Specs'))}</span>
                    </button>
                    `).join('')}
                </div>
            </div>

            <!-- Contextual Sector Strategy Banner -->
            <div class="mb-8">
                ${INDUSTRIES.map((ind, idx) => `
                <div id="modern-sector-desc-${idx}" class="modern-sector-desc ${idx === 0 ? 'block' : 'hidden'} p-4 rounded-xl bg-velora-surface border border-velora-border text-xs font-sans space-y-2">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-velora-border/60 pb-2">
                        <span class="font-bold text-velora-text text-sm">${escapeHTML(ind.name)} Operational Strategy</span>
                        <a href="/industries/${escapeHTML(ind.slug)}" class="text-velora-accent font-mono text-[11px] hover:underline">Full Sector Blueprint &rarr;</a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-velora-muted">
                        <div><strong class="text-velora-text">Common Local Bottleneck:</strong> ${escapeHTML(ind.challenges)}</div>
                        <div><strong class="text-velora-text">The Velora Architecture:</strong> ${escapeHTML(ind.solutions)}</div>
                    </div>
                </div>
                `).join('')}
            </div>

            <!-- Workspace Viewport Controls Deck: Project Switcher + Inspection Mode Switcher -->
            <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 p-3 rounded-2xl bg-velora-surface border border-velora-border mb-6 shadow-sm">
                <!-- Project Selector Buttons -->
                <div class="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0" role="tablist" aria-label="Portfolio Projects">
                    <button type="button"
                            id="modern-proj-btn-aurora"
                            role="tab"
                            aria-selected="true"
                            aria-controls="modern-viewport-canvas"
                            data-proj="aurora-aesthetics"
                            class="modern-proj-btn px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all bg-velora-accent text-white shadow-sm shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        01 // Aurora Clinic
                    </button>
                    <button type="button"
                            id="modern-proj-btn-aarav"
                            role="tab"
                            aria-selected="false"
                            aria-controls="modern-viewport-canvas"
                            data-proj="aarav-estates"
                            class="modern-proj-btn px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all text-velora-muted hover:text-velora-text hover:bg-velora-card shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        02 // Aarav Properties
                    </button>
                    <button type="button"
                            id="modern-proj-btn-spice"
                            role="tab"
                            aria-selected="false"
                            aria-controls="modern-viewport-canvas"
                            data-proj="the-spice-room"
                            class="modern-proj-btn px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all text-velora-muted hover:text-velora-text hover:bg-velora-card shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent">
                        03 // The Spice Room
                    </button>
                </div>

                <!-- Inspection Mode Switcher -->
                <div class="flex items-center gap-1.5 bg-velora-bg p-1 rounded-xl border border-velora-border self-start lg:self-auto shrink-0" role="group" aria-label="Viewport Inspection Mode">
                    <button type="button"
                            id="modern-mode-sim"
                            data-mode="sim"
                            class="modern-mode-btn px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all bg-velora-card text-velora-accent border border-velora-border">
                        [Mobile Sim]
                    </button>
                    <button type="button"
                            id="modern-mode-arch"
                            data-mode="arch"
                            class="modern-mode-btn px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase text-velora-muted hover:text-velora-text transition-all">
                        [Search Blueprint]
                    </button>
                    <button type="button"
                            id="modern-mode-conv"
                            data-mode="conv"
                            class="modern-mode-btn px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase text-velora-muted hover:text-velora-text transition-all">
                        [Deliverables]
                    </button>
                </div>
            </div>

            <!-- Viewport Stage Canvas -->
            <div id="modern-viewport-canvas" class="bg-velora-surface border border-velora-border rounded-2xl p-6 sm:p-8 transition-all min-h-[480px]">

                <!-- PROJECT 1: AURORA CLINIC -->
                <div id="modern-proj-aurora-aesthetics" class="modern-proj-view block space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-velora-border gap-2">
                        <div>
                            <div class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
                                HEALTHCARE &amp; DENTAL · GURUGRAM &amp; CHANDIGARH
                            </div>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text">${escapeHTML(aurora.title)}</h3>
                        </div>
                        <span class="text-xs font-mono text-velora-muted bg-velora-card px-2.5 py-1 rounded-lg border border-velora-border self-start sm:self-auto">
                            ${escapeHTML(aurora.type)}
                        </span>
                    </div>

                    <!-- State A: Mobile Simulation View -->
                    <div class="modern-view-sim block">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div class="lg:col-span-5 flex justify-center">
                                <div class="modern-phone-frame w-full max-w-[300px] p-3.5 space-y-3 font-sans">
                                    <div class="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1 font-mono">
                                        <span>09:41</span>
                                        <span>5G</span>
                                    </div>
                                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span class="font-bold text-xs tracking-wider text-emerald-400 font-mono">AURORA CLINIC</span>
                                        <span class="text-[9px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">Sector 43</span>
                                    </div>
                                    <div class="modern-phone-card p-3 space-y-1.5">
                                        <span class="text-[8px] uppercase tracking-wider text-emerald-400 font-mono font-bold block">Certified Aesthetic Practice</span>
                                        <h4 class="text-xs font-bold text-white leading-tight">Advanced Dermatology &amp; Cosmetic Dental Care</h4>
                                        <p class="text-[10px] text-slate-300 leading-snug">Evidence-based procedures with transparent fees.</p>
                                    </div>
                                    <div class="p-2 rounded-lg modern-phone-badge-emerald space-y-0.5">
                                        <div class="text-[10px] font-bold text-emerald-300">Dr. Sunita Sharma, MD</div>
                                        <p class="text-[9px] text-slate-300">AIIMS Fellow · 14+ Years Clinical Experience</p>
                                    </div>
                                    <div class="pt-1">
                                        <a href="/contact" class="block w-full py-2 rounded-lg modern-phone-btn-emerald text-center font-bold text-[11px] tracking-wide transition-colors">
                                            Book Consultation (1-Tap) &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-7 space-y-4">
                                <div>
                                    <span class="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Conversion Architecture</span>
                                    <h4 class="font-display text-xl font-bold text-velora-text">Ergonomic Trust on Smartphone Screens</h4>
                                </div>
                                <p class="text-xs text-velora-muted leading-relaxed font-sans">
                                    ${escapeHTML(aurora.keyUxDecisions)}
                                </p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <div class="p-3 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[9px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block">Patient Trust Trigger</span>
                                        <span class="text-xs font-bold text-velora-text block">Credentials Pre-Fold</span>
                                        <p class="text-[10px] text-velora-muted">Doctor qualifications, board certifications, and clinic previews placed above the fold.</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[9px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block">Speed Architecture</span>
                                        <span class="text-xs font-bold text-velora-text block">Fast Mobile-First Load</span>
                                        <p class="text-[10px] text-velora-muted">Lightweight semantic HTML consultation requests without forced account creation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State B: Search Discovery Blueprint View -->
                    <div class="modern-view-arch hidden space-y-4">
                        <div class="p-5 rounded-xl bg-velora-bg border border-velora-border space-y-4">
                            <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                                <span class="text-xs font-mono font-bold uppercase text-velora-text">Schema.org MedicalBusiness · Concept Blueprint</span>
                                <span class="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">SECTOR 43 GURUGRAM</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">01 // Entity Profile</span>
                                    <div class="font-bold text-velora-text">Verified Clinical Specialty</div>
                                    <p class="text-[11px] text-velora-muted">AIIMS credentials codified for Google local search indexing.</p>
                                </div>
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">02 // NAP Synchronization</span>
                                    <div class="font-bold text-velora-text">Exact Geo-Coordinates</div>
                                    <p class="text-[11px] text-velora-muted">Sector 43, Gurugram aligned across structured data and map citations.</p>
                                </div>
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">03 // Intent Pathways</span>
                                    <div class="font-bold text-velora-text">Direct Routing</div>
                                    <p class="text-[11px] text-velora-muted">Direct click-to-consultation and WhatsApp triggers integrated.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State C: Deliverables View -->
                    <div class="modern-view-conv hidden space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            ${aurora.deliverables.map(del => `
                            <div class="p-3 rounded-xl bg-velora-bg border border-velora-border text-xs font-sans flex items-start gap-2">
                                <span class="text-emerald-500 font-bold">&check;</span>
                                <span class="font-bold text-velora-text">${escapeHTML(del)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- PROJECT 2: AARAV PROPERTIES (100% CANONICAL TRUTH — ZERO FABRICATED SPECS) -->
                <div id="modern-proj-aarav-estates" class="modern-proj-view hidden space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-velora-border gap-2">
                        <div>
                            <div class="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold mb-0.5">
                                REAL ESTATE &amp; ADVISORY · DELHI NCR &amp; NOIDA
                            </div>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text">${escapeHTML(aarav.title)}</h3>
                        </div>
                        <span class="text-xs font-mono text-velora-muted bg-velora-card px-2.5 py-1 rounded-lg border border-velora-border self-start sm:self-auto">
                            ${escapeHTML(aarav.type)}
                        </span>
                    </div>

                    <!-- State A: Mobile Simulation View -->
                    <div class="modern-view-sim block">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div class="lg:col-span-5 flex justify-center">
                                <div class="modern-phone-frame w-full max-w-[300px] p-3.5 space-y-3 font-sans">
                                    <div class="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1 font-mono">
                                        <span>09:41</span>
                                        <span>5G</span>
                                    </div>
                                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span class="font-bold text-xs tracking-wider text-amber-400 font-mono">AARAV ESTATES</span>
                                        <span class="text-[9px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">RERA Registered</span>
                                    </div>
                                    <div class="modern-phone-card p-3 space-y-1.5">
                                        <span class="text-[8px] uppercase tracking-wider text-amber-400 font-mono font-bold block">Commercial Catalog</span>
                                        <h4 class="text-xs font-bold text-white leading-tight">Property Catalog &amp; Floor Plan Viewer</h4>
                                        <p class="text-[10px] text-slate-300 leading-snug">Verified residential &amp; commercial property listings.</p>
                                    </div>
                                    <div class="p-2 rounded-lg modern-phone-badge-amber space-y-0.5">
                                        <div class="text-[10px] font-bold text-amber-300">RERA Verified Advisory</div>
                                        <p class="text-[9px] text-slate-300">Direct WhatsApp floor plan dispatches</p>
                                    </div>
                                    <div class="pt-1">
                                        <a href="/contact" class="block w-full py-2 rounded-lg modern-phone-btn-amber text-center font-bold text-[11px] tracking-wide transition-colors">
                                            WhatsApp Floor Plans &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-7 space-y-4">
                                <div>
                                    <span class="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-1">Advisory Architecture</span>
                                    <h4 class="font-display text-xl font-bold text-velora-text">Instant WhatsApp Lead Routing for High-Ticket Buyers</h4>
                                </div>
                                <p class="text-xs text-velora-muted leading-relaxed font-sans">
                                    ${escapeHTML(aarav.keyUxDecisions)}
                                </p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <div class="p-3 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[9px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">Compliance Marker</span>
                                        <span class="text-xs font-bold text-velora-text block">Prominent RERA ID</span>
                                        <p class="text-[10px] text-velora-muted">Registration numbers displayed prominently across all mobile property headers.</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[9px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">Lead Acceleration</span>
                                        <span class="text-xs font-bold text-velora-text block">1-Tap Document Dispatch</span>
                                        <p class="text-[10px] text-velora-muted">Direct PDF and brochure requests routed to senior advisory desks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State B: Search Blueprint View -->
                    <div class="modern-view-arch hidden space-y-4">
                        <div class="p-5 rounded-xl bg-velora-bg border border-velora-border space-y-4">
                            <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                                <span class="text-xs font-mono font-bold uppercase text-velora-text">Schema.org RealEstateAgent · Concept Blueprint</span>
                                <span class="text-[9px] font-mono text-amber-600 dark:text-amber-400 font-bold">DELHI NCR &amp; NOIDA</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">01 // Advisory Entity</span>
                                    <div class="font-bold text-velora-text">RealEstateAgent Schema</div>
                                    <p class="text-[11px] text-velora-muted">RERA registration metadata and area specializations codified.</p>
                                </div>
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">02 // Local Geo Mapping</span>
                                    <div class="font-bold text-velora-text">Locality Indexing</div>
                                    <p class="text-[11px] text-velora-muted">Noida and Delhi NCR sector boundaries mapped for high-intent search.</p>
                                </div>
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">03 // Document Bridge</span>
                                    <div class="font-bold text-velora-text">Direct Brochure Link</div>
                                    <p class="text-[11px] text-velora-muted">Frictionless WhatsApp document routing for verified property enquiries.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State C: Deliverables View -->
                    <div class="modern-view-conv hidden space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            ${aarav.deliverables.map(del => `
                            <div class="p-3 rounded-xl bg-velora-bg border border-velora-border text-xs font-sans flex items-start gap-2">
                                <span class="text-amber-500 font-bold">&check;</span>
                                <span class="font-bold text-velora-text">${escapeHTML(del)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- PROJECT 3: THE SPICE ROOM -->
                <div id="modern-proj-the-spice-room" class="modern-proj-view hidden space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-velora-border gap-2">
                        <div>
                            <div class="text-[11px] font-mono text-orange-600 dark:text-orange-400 font-bold mb-0.5">
                                DINING &amp; HOSPITALITY · GURUGRAM SECTOR 29
                            </div>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text">${escapeHTML(spiceRoom.title)}</h3>
                        </div>
                        <span class="text-xs font-mono text-velora-muted bg-velora-card px-2.5 py-1 rounded-lg border border-velora-border self-start sm:self-auto">
                            ${escapeHTML(spiceRoom.type)}
                        </span>
                    </div>

                    <!-- State A: Mobile Simulation View -->
                    <div class="modern-view-sim block">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div class="lg:col-span-5 flex justify-center">
                                <div class="modern-phone-frame w-full max-w-[300px] p-3.5 space-y-3 font-sans">
                                    <div class="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1 font-mono">
                                        <span>09:41</span>
                                        <span>5G</span>
                                    </div>
                                    <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                                        <span class="font-bold text-xs tracking-wider text-orange-400 font-mono">THE SPICE ROOM</span>
                                        <span class="text-[9px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">Sector 29</span>
                                    </div>
                                    <div class="modern-phone-card p-3 space-y-1.5">
                                        <span class="text-[8px] uppercase tracking-wider text-orange-400 font-mono font-bold block">Culinary Experience</span>
                                        <h4 class="text-xs font-bold text-white leading-tight">Progressive Indian Dining &amp; Valet Parking</h4>
                                        <p class="text-[10px] text-slate-300 leading-snug">Instant mobile menu &amp; direct table reservation.</p>
                                    </div>
                                    <div class="p-2 rounded-lg modern-phone-badge-orange space-y-0.5">
                                        <div class="text-[10px] font-bold text-orange-300">Live Table Reservations</div>
                                        <p class="text-[9px] text-slate-300">Direct booking bypassing high-commission apps</p>
                                    </div>
                                    <div class="pt-1">
                                        <a href="/contact" class="block w-full py-2 rounded-lg modern-phone-btn-orange text-center font-bold text-[11px] tracking-wide transition-colors">
                                            Reserve Table &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-7 space-y-4">
                                <div>
                                    <span class="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold block mb-1">Hospitality Architecture</span>
                                    <h4 class="font-display text-xl font-bold text-velora-text">Zero-PDF Instant HTML Menus on Smartphone 4G</h4>
                                </div>
                                <p class="text-xs text-velora-muted leading-relaxed font-sans">
                                    ${escapeHTML(spiceRoom.keyUxDecisions)}
                                </p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <div class="p-3 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[9px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold block">Mobile Experience</span>
                                        <span class="text-xs font-bold text-velora-text block">Zero PDF Downloads</span>
                                        <p class="text-[10px] text-velora-muted">Dishes, allergens, and prices load immediately in readable HTML without pinching or zooming.</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-velora-bg border border-velora-border space-y-1">
                                        <span class="text-[9px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold block">Commission Protection</span>
                                        <span class="text-xs font-bold text-velora-text block">Direct Booking Bridge</span>
                                        <p class="text-[10px] text-velora-muted">Table reservations flow directly into the restaurant manager's WhatsApp phone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State B: Search Blueprint View -->
                    <div class="modern-view-arch hidden space-y-4">
                        <div class="p-5 rounded-xl bg-velora-bg border border-velora-border space-y-4">
                            <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                                <span class="text-xs font-mono font-bold uppercase text-velora-text">Schema.org Restaurant · Concept Blueprint</span>
                                <span class="text-[9px] font-mono text-orange-600 dark:text-orange-400 font-bold">SECTOR 29 GURUGRAM</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">01 // Culinary Entity</span>
                                    <div class="font-bold text-velora-text">Restaurant Schema</div>
                                    <p class="text-[11px] text-velora-muted">Cuisine types, price range, and structured HTML menu URLs codified.</p>
                                </div>
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">02 // Direct Table Link</span>
                                    <div class="font-bold text-velora-text">Google Maps Sync</div>
                                    <p class="text-[11px] text-velora-muted">Direct reservation trigger integrated into Google Maps profile.</p>
                                </div>
                                <div class="p-3 rounded-lg bg-velora-surface border border-velora-border/60 space-y-1">
                                    <span class="text-[9px] font-mono text-velora-accent font-bold block">03 // Service Hours</span>
                                    <div class="font-bold text-velora-text">Operating Synchrony</div>
                                    <p class="text-[11px] text-velora-muted">Lunch/dinner timings and valet parking status synchronized.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- State C: Deliverables View -->
                    <div class="modern-view-conv hidden space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            ${spiceRoom.deliverables.map(del => `
                            <div class="p-3 rounded-xl bg-velora-bg border border-velora-border text-xs font-sans flex items-start gap-2">
                                <span class="text-orange-500 font-bold">&check;</span>
                                <span class="font-bold text-velora-text">${escapeHTML(del)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 4: UNIFIED PROJECT CONFIGURATION CANVAS                      -->
    <!-- (Merges Process + Scope + Pricing: Eliminates 3 separate blocks)   -->
    <!-- ================================================================= -->
    <section class="py-14 sm:py-20 bg-velora-surface border-b border-velora-border" id="modern-configurator">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-velora-border gap-4">
                <div>
                    <span class="text-[10px] font-mono uppercase tracking-widest text-velora-accent block mb-1.5">Unified Configuration Engine</span>
                    <h2 class="font-display text-2xl sm:text-4xl font-bold text-velora-text tracking-tight">
                        Interactive Project Scope, Timeline &amp; Pricing
                    </h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Manipulate scope parameters below to immediately observe delivery stages, timeline milestones, and fixed canonical investment totals.
                </div>
            </div>

            <!-- Main Interactive Canvas -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <!-- Left Column (7 cols): Configuration Controls -->
                <div class="lg:col-span-7 space-y-6">
                    <!-- Base Tier Selector (3 Canonical Plans) -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between text-xs font-mono">
                            <span class="text-velora-text font-bold uppercase">1. Select Base Scope Architecture:</span>
                            <span class="text-velora-muted text-[10px]">Fixed Milestone Pricing</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Base Scope Tiers">
                            <!-- Tier 1: Essential -->
                            <button type="button"
                                    class="modern-tier-btn p-4 rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent bg-velora-bg border-velora-border hover:border-velora-borderStrong"
                                    data-tier-id="essential"
                                    data-base-price="${CONFIG.pricing.essential}"
                                    data-timeline="2–3 Weeks"
                                    data-max-pages="5">
                                <div class="flex items-center justify-between text-[10px] font-mono text-velora-muted pb-1">
                                    <span>TIER 01</span>
                                    <span>2–3 WEEKS</span>
                                </div>
                                <div class="font-display font-bold text-base text-velora-text">Essential</div>
                                <div class="text-xs font-mono font-bold text-velora-accent mt-1 modern-tabular">₹${CONFIG.pricing.essential.toLocaleString('en-IN')}</div>
                                <div class="text-[10px] text-velora-muted font-sans mt-1">Up to 5 pages, SSR, direct WhatsApp</div>
                            </button>

                            <!-- Tier 2: Professional (Active Default) -->
                            <button type="button"
                                    class="modern-tier-btn p-4 rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent bg-velora-bg border-velora-accent ring-1 ring-velora-accent shadow-sm"
                                    data-tier-id="professional"
                                    data-base-price="${CONFIG.pricing.professional}"
                                    data-timeline="3–4 Weeks"
                                    data-max-pages="10">
                                <div class="flex items-center justify-between text-[10px] font-mono text-velora-accent font-bold pb-1">
                                    <span>TIER 02</span>
                                    <span>3–4 WEEKS</span>
                                </div>
                                <div class="font-display font-bold text-base text-velora-text">Professional</div>
                                <div class="text-xs font-mono font-bold text-velora-accent mt-1 modern-tabular">₹${CONFIG.pricing.professional.toLocaleString('en-IN')}</div>
                                <div class="text-[10px] text-velora-muted font-sans mt-1">Up to 10 pages + Full Local SEO</div>
                            </button>

                            <!-- Tier 3: Custom -->
                            <button type="button"
                                    class="modern-tier-btn p-4 rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent bg-velora-bg border-velora-border hover:border-velora-borderStrong"
                                    data-tier-id="custom"
                                    data-base-price="${CONFIG.pricing.customBase}"
                                    data-timeline="4–6 Weeks"
                                    data-max-pages="15">
                                <div class="flex items-center justify-between text-[10px] font-mono text-velora-muted pb-1">
                                    <span>TIER 03</span>
                                    <span>4–6 WEEKS</span>
                                </div>
                                <div class="font-display font-bold text-base text-velora-text">Custom</div>
                                <div class="text-xs font-mono font-bold text-velora-accent mt-1 modern-tabular">₹${CONFIG.pricing.customBase.toLocaleString('en-IN')}+</div>
                                <div class="text-[10px] text-velora-muted font-sans mt-1">Multi-location &amp; CRM integration</div>
                            </button>
                        </div>
                    </div>

                    <!-- Scope Add-ons & Modifiers -->
                    <div class="p-5 rounded-2xl bg-velora-bg border border-velora-border space-y-4 shadow-sm">
                        <span class="text-xs font-mono font-bold uppercase text-velora-text block">2. Fine-Tune Scope Parameters:</span>

                        <!-- Page Count Slider -->
                        <div class="space-y-1.5">
                            <div class="flex justify-between text-xs font-mono">
                                <label for="modern-calc-pages" class="text-velora-muted">Total Unique Responsive Pages:</label>
                                <span id="modern-calc-pages-val" class="text-velora-accent font-bold modern-tabular">5 Pages</span>
                            </div>
                            <input type="range" id="modern-calc-pages" min="1" max="20" value="5" class="w-full h-2 bg-velora-surface rounded-lg appearance-none cursor-pointer accent-velora-accent border border-velora-border" aria-label="Total Unique Responsive Pages">
                            <div class="flex justify-between text-[10px] font-mono text-velora-muted">
                                <span>1 Page</span>
                                <span>10 Pages</span>
                                <span>20 Pages</span>
                            </div>
                        </div>

                        <!-- Checkbox Add-ons -->
                        <div class="space-y-2.5 pt-1">
                            <label class="flex items-center justify-between p-3 rounded-xl bg-velora-surface border border-velora-border/70 hover:border-velora-borderStrong cursor-pointer transition-colors">
                                <div class="flex items-center gap-2.5">
                                    <input type="checkbox" id="modern-calc-seo" class="w-4 h-4 rounded text-velora-accent focus:ring-velora-accent accent-velora-accent">
                                    <div>
                                        <span class="text-xs font-bold text-velora-text block font-sans">Add Local SEO Foundation Package</span>
                                        <span class="text-[10px] text-velora-muted block font-sans">Schema markup, Google Profile alignment &amp; sitemap indexing</span>
                                    </div>
                                </div>
                                <span class="text-xs font-mono font-bold text-velora-text shrink-0 modern-tabular">+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')}</span>
                            </label>

                            <label class="flex items-center justify-between p-3 rounded-xl bg-velora-surface border border-velora-border/70 hover:border-velora-borderStrong cursor-pointer transition-colors">
                                <div class="flex items-center gap-2.5">
                                    <input type="checkbox" id="modern-calc-maint" class="w-4 h-4 rounded text-velora-accent focus:ring-velora-accent accent-velora-accent">
                                    <div>
                                        <span class="text-xs font-bold text-velora-text block font-sans">Add Annual Website Maintenance &amp; Care</span>
                                        <span class="text-[10px] text-velora-muted block font-sans">Cloud hosting, SSL renewals, monthly content updates &amp; uptime monitoring</span>
                                    </div>
                                </div>
                                <span class="text-xs font-mono font-bold text-velora-text shrink-0 modern-tabular">+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Right Column (5 cols): Dynamic Output & 5-Stage Delivery Timeline -->
                <div class="lg:col-span-5 space-y-5">
                    <!-- Calculated Investment Summary Box -->
                    <div class="p-6 rounded-2xl bg-velora-bg border border-velora-border text-center space-y-3 shadow-sm">
                        <span class="text-[10px] font-mono uppercase tracking-wider text-velora-muted block">Estimated Indicative Scope</span>
                        <div id="modern-calc-total" class="font-display text-4xl sm:text-5xl font-bold text-velora-text modern-tabular">
                            ₹${(CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage)).toLocaleString('en-IN')}
                        </div>
                        <div id="modern-active-timeline" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                            Estimated Turnaround: 2–4 Weeks
                        </div>
                        <p class="text-[11px] text-velora-muted font-sans max-w-xs mx-auto">
                            Indicative investment based on chosen parameters. Zero ongoing template royalties or platform commissions.
                        </p>
                        <div class="pt-2">
                            <a href="#modern-intake" id="modern-calc-quote-btn" class="block w-full py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors shadow-sm">
                                Lock Scope &amp; Dispatch Brief &rarr;
                            </a>
                        </div>
                    </div>

                    <!-- Synchronized 5-Stage Delivery Continuum (Replaces separate Process section) -->
                    <div class="p-5 rounded-2xl bg-velora-bg border border-velora-border space-y-3 shadow-sm">
                        <div class="flex items-center justify-between pb-2 border-b border-velora-border text-[10px] font-mono text-velora-muted uppercase">
                            <span>Delivery Continuum</span>
                            <span class="text-velora-accent font-bold">5 Fixed Stages</span>
                        </div>
                        <div class="space-y-2 text-xs font-sans">
                            <div class="flex items-start gap-2.5 p-2 rounded-lg bg-velora-surface border border-velora-border/60">
                                <span class="w-5 h-5 rounded bg-velora-accent text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">01</span>
                                <div>
                                    <strong class="text-velora-text block leading-tight">Discovery &amp; Intent Mapping</strong>
                                    <span class="text-[11px] text-velora-muted">Customer search queries &amp; competitor benchmarks</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2.5 p-2 rounded-lg bg-velora-surface border border-velora-border/60">
                                <span class="w-5 h-5 rounded bg-velora-accent text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">02</span>
                                <div>
                                    <strong class="text-velora-text block leading-tight">Content &amp; Visual Design</strong>
                                    <span class="text-[11px] text-velora-muted">Readable typography, conversion triggers &amp; verified copy</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2.5 p-2 rounded-lg bg-velora-surface border border-velora-border/60">
                                <span class="w-5 h-5 rounded bg-velora-accent text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">03</span>
                                <div>
                                    <strong class="text-velora-text block leading-tight">Lightweight Semantic SSR Code</strong>
                                    <span class="text-[11px] text-velora-muted">Node.js SSR, Tailwind CSS, zero runtime bloated plugins</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2.5 p-2 rounded-lg bg-velora-surface border border-velora-border/60">
                                <span class="w-5 h-5 rounded bg-velora-accent text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">04</span>
                                <div>
                                    <strong class="text-velora-text block leading-tight">Mobile &amp; Form QA Testing</strong>
                                    <span class="text-[11px] text-velora-muted">Real device testing, SSL verification, click-to-call tests</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2.5 p-2 rounded-lg bg-velora-surface border border-velora-border/60">
                                <span class="w-5 h-5 rounded bg-velora-accent text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">05</span>
                                <div>
                                    <strong class="text-velora-text block leading-tight">Cloud Launch &amp; Asset Handoff</strong>
                                    <span class="text-[11px] text-velora-muted">Production DNS, domain configuration &amp; 100% asset handover</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 5: COMMAND DISPATCH CONSOLE (INTEGRATED INTAKE TERMINAL)      -->
    <!-- (Replaces the generic 2-column agency form)                       -->
    <!-- ================================================================= -->
    <section class="py-14 sm:py-20 bg-velora-bg border-b border-velora-border" id="modern-intake">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <!-- Left: Terminal Directives -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-velora-surface border border-velora-border text-[10px] font-mono text-velora-muted uppercase tracking-wider">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>05 Instant Technical Dispatch</span>
                    </div>

                    <h2 class="font-display text-2xl sm:text-4xl font-bold text-velora-text tracking-tight">
                        Initiate Project Brief or Architecture Review
                    </h2>

                    <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans text-pretty">
                        Submit your practice details below. We review your current digital footprint, verify local search discoverability, and dispatch an actionable architecture proposal within 24 business hours.
                    </p>

                    <!-- Direct Technical Channels -->
                    <div class="p-5 rounded-2xl bg-velora-surface border border-velora-border space-y-3 text-xs font-mono">
                        <span class="text-[10px] text-velora-muted uppercase font-bold block pb-1 border-b border-velora-border">Direct Communication Lines:</span>
                        <div class="flex items-center justify-between">
                            <span class="text-velora-muted">WHATSAPP:</span>
                            <a href="https://wa.me/${CONFIG.whatsapp}" class="text-velora-text hover:text-velora-accent font-bold transition-colors">${CONFIG.phone}</a>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-velora-muted">STUDIO EMAIL:</span>
                            <a href="mailto:${CONFIG.email}" class="text-velora-text hover:text-velora-accent font-bold transition-colors">${CONFIG.email}</a>
                        </div>
                        <div class="flex items-center justify-between text-[11px]">
                            <span class="text-velora-muted">TURNAROUND:</span>
                            <span class="text-emerald-600 dark:text-emerald-400 font-bold">&le; 24 Business Hours Response</span>
                        </div>
                    </div>
                </div>

                <!-- Right: High-Precision Dispatch Terminal Form -->
                <div class="lg:col-span-7">
                    <div class="bg-velora-surface border border-velora-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border text-xs font-mono">
                            <span class="text-velora-text font-bold uppercase">Project Dispatch Terminal</span>
                            <span class="text-[10px] text-velora-accent font-mono">SECURE DIRECT INTAKE</span>
                        </div>

                        <!-- Real Technical Form Connected to Existing Backend -->
                        <form id="modern-dispatch-form" class="space-y-4" novalidate>
                            <!-- Honeypot -->
                            <div class="hidden" aria-hidden="true">
                                <label for="modern-gotcha">Do not fill this</label>
                                <input type="text" id="modern-gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
                            </div>

                            <!-- Pre-populated Scope Indicator -->
                            <div class="p-3 rounded-xl bg-velora-bg border border-velora-border/80 flex items-center justify-between text-xs font-mono">
                                <span class="text-velora-muted">Target Scope:</span>
                                <span id="modern-form-scope-badge" class="font-bold text-velora-accent">Professional Scope (~₹34,999)</span>
                                <input type="hidden" id="modern-form-scope-input" name="scope" value="Professional">
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-1">
                                    <label for="modern-form-name" class="block text-[11px] font-mono text-velora-text uppercase font-bold">
                                        Your Name / Principal <span class="text-velora-accent">*</span>
                                    </label>
                                    <input type="text"
                                           id="modern-form-name"
                                           name="name"
                                           required
                                           placeholder="Dr. Rajesh / Sunita Sharma"
                                           class="w-full px-3.5 py-2.5 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors">
                                </div>

                                <div class="space-y-1">
                                    <label for="modern-form-phone" class="block text-[11px] font-mono text-velora-text uppercase font-bold">
                                        Direct Phone / WhatsApp <span class="text-velora-accent">*</span>
                                    </label>
                                    <input type="tel"
                                           id="modern-form-phone"
                                           name="phone"
                                           required
                                           placeholder="+91 98765 43210"
                                           class="w-full px-3.5 py-2.5 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-1">
                                    <label for="modern-form-email" class="block text-[11px] font-mono text-velora-text uppercase font-bold">
                                        Work Email Address <span class="text-velora-accent">*</span>
                                    </label>
                                    <input type="email"
                                           id="modern-form-email"
                                           name="email"
                                           required
                                           placeholder="director@yourpractice.com"
                                           class="w-full px-3.5 py-2.5 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors">
                                </div>

                                <div class="space-y-1">
                                    <label for="modern-form-website" class="block text-[11px] font-mono text-velora-text uppercase font-bold">
                                        Current Website or Practice Name
                                    </label>
                                    <input type="text"
                                           id="modern-form-website"
                                           name="website"
                                           placeholder="https://yourpractice.com"
                                           class="w-full px-3.5 py-2.5 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors">
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="modern-form-message" class="block text-[11px] font-mono text-velora-text uppercase font-bold">
                                    Primary Objective or Challenge
                                </label>
                                <textarea id="modern-form-message"
                                          name="message"
                                          rows="2"
                                          placeholder="e.g. Existing clinic website is slow on mobile; want more local booking calls from Gurugram."
                                          class="w-full px-3.5 py-2.5 text-xs font-mono bg-velora-bg border border-velora-border rounded-xl text-velora-text placeholder-velora-muted/60 focus:outline-none focus:border-velora-accent transition-colors resize-none"></textarea>
                            </div>

                            <div class="pt-1">
                                <button type="submit"
                                        id="modern-dispatch-submit-btn"
                                        class="w-full py-3.5 text-xs font-mono uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent flex items-center justify-center gap-2">
                                    <span>Transmit Dispatch Brief</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </button>
                            </div>

                            <!-- Success / Error Feedback Containers -->
                            <div id="modern-dispatch-success" class="hidden p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                                &check; Dispatch received. We have logged your project scope and will transmit an architecture review within 24 business hours.
                            </div>
                            <div id="modern-dispatch-error" class="hidden p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs font-mono">
                                Transmission failed. Please verify your contact details and try again.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 6: CONTEXTUAL KNOWLEDGE INTERFACE (REPLACES 8-ROW ACCORDION)  -->
    <!-- ================================================================= -->
    <section class="py-14 sm:py-20 bg-velora-surface" id="modern-knowledge">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-velora-border gap-4">
                <div>
                    <span class="text-[10px] font-mono uppercase tracking-widest text-velora-accent block mb-1.5">Contextual Knowledge Console</span>
                    <h2 class="font-display text-2xl sm:text-4xl font-bold text-velora-text tracking-tight">
                        Operating Standards &amp; Inquiries
                    </h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Direct technical parameters, complete code ownership, and delivery governance. Select any topic to inspect its authoritative answer.
                </div>
            </div>

            <!-- Two-Dimensional Knowledge Browser (Replaces uniform 8-row accordion) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <!-- Left: Question Rail (Chips & Categorized Index) -->
                <div class="lg:col-span-5 space-y-2" role="tablist" aria-label="Knowledge Topics">
                    ${FAQS.map((faq, idx) => `
                    <button type="button"
                            role="tab"
                            id="modern-faq-tab-${idx}"
                            aria-selected="${idx === 0 ? 'true' : 'false'}"
                            aria-controls="modern-faq-panel-${idx}"
                            data-faq-index="${idx}"
                            class="modern-faq-btn w-full text-left p-3 rounded-xl border text-xs font-sans transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent flex items-center justify-between gap-3 ${idx === 0 ? 'bg-velora-bg border-velora-accent shadow-sm' : 'bg-velora-card/60 border-velora-border hover:bg-velora-card'}">
                        <div class="flex items-center gap-2.5 truncate">
                            <span class="w-5 h-5 rounded bg-velora-surface border border-velora-border text-velora-accent flex items-center justify-center font-mono text-[9px] font-bold shrink-0">
                                0${idx + 1}
                            </span>
                            <span class="font-bold text-velora-text truncate">${escapeHTML(faq.q)}</span>
                        </div>
                        <span class="text-[10px] font-mono text-velora-muted shrink-0">&rarr;</span>
                    </button>
                    `).join('')}
                </div>

                <!-- Right: Active Knowledge Display Console -->
                <div class="lg:col-span-7 bg-velora-bg border border-velora-border rounded-2xl p-6 sm:p-8 shadow-sm min-h-[300px] flex flex-col justify-between">
                    ${FAQS.map((faq, idx) => `
                    <div id="modern-faq-panel-${idx}"
                         role="tabpanel"
                         aria-labelledby="modern-faq-tab-${idx}"
                         class="modern-faq-panel ${idx === 0 ? 'block' : 'hidden'} space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border text-xs font-mono">
                            <span class="text-velora-accent font-bold">KNOWLEDGE DISCLOSURE 0${idx + 1} // AUTHENTICATED</span>
                            <span class="text-velora-muted text-[10px]">CANONICAL SPECIFICATION</span>
                        </div>
                        <h3 class="font-display text-xl sm:text-2xl font-bold text-velora-text">${escapeHTML(faq.q)}</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                            ${escapeHTML(faq.a)}
                        </p>
                    </div>
                    `).join('')}

                    <div class="pt-6 border-t border-velora-border flex items-center justify-between text-[11px] font-mono text-velora-muted">
                        <span>Have a custom technical question?</span>
                        <a href="https://wa.me/${CONFIG.whatsapp}" class="text-velora-accent hover:underline font-bold">Chat on WhatsApp &rarr;</a>
                    </div>
                </div>
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

        /* Modern Spatial Dock */
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

        /* Mobile Drawer */
        .modern-mobile-drawer {
            transform-origin: top center;
            transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Simulated Mobile Phone Frame */
        .modern-phone-frame {
            background-color: #0b0f19 !important;
            border: 4px solid #334155 !important;
            color: #f1f5f9 !important;
            border-radius: 28px !important;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4) !important;
        }
        .modern-phone-card {
            background-color: #1e293b !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
            border-radius: 12px !important;
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
        .modern-phone-badge-orange {
            background-color: rgba(124, 45, 18, 0.5) !important;
            border: 1px solid rgba(249, 115, 22, 0.3) !important;
            color: #fdba74 !important;
        }
        .modern-phone-btn-emerald {
            background-color: #10b981 !important;
            color: #022c22 !important;
        }
        .modern-phone-btn-amber {
            background-color: #f59e0b !important;
            color: #451a03 !important;
        }
        .modern-phone-btn-orange {
            background-color: #f97316 !important;
            color: #431407 !important;
        }

        /* Tabular numerics */
        .modern-tabular {
            font-variant-numeric: tabular-nums;
        }

        html[data-experience="modern"] .font-display {
            font-family: 'Space Grotesk', sans-serif;
        }
        html[data-experience="modern"] .font-mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }

        @media (prefers-reduced-motion: reduce) {
            .modern-dock,
            .modern-mobile-drawer,
            .modern-proj-view,
            .modern-sector-desc,
            .modern-faq-panel {
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
                // Clear any prior listeners before initializing
                if (typeof window.cleanupModernInteractions === 'function') {
                    window.cleanupModernInteractions();
                }

                window.__veloraModernCleanups = [];
                function addListener(target, event, handler, options) {
                    if (!target) return;
                    target.addEventListener(event, handler, options);
                    window.__veloraModernCleanups.push(function() {
                        try { target.removeEventListener(event, handler, options); } catch (e) {}
                    });
                }

                // 1. Mobile Menu Drawer Toggle
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
                        document.body.style.overflow = 'hidden';
                    } else {
                        mobileDrawer.classList.add('hidden');
                        mobileDrawer.setAttribute('aria-hidden', 'true');
                        mobileBtn.setAttribute('aria-label', 'Open Modern Navigation Menu');
                        if (burgerIcon) burgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                        document.body.style.overflow = '';
                    }
                }

                if (mobileBtn && mobileDrawer) {
                    addListener(mobileBtn, 'click', function(e) {
                        e.stopPropagation();
                        toggleMobileMenu();
                    });

                    mobileLinks.forEach(link => {
                        addListener(link, 'click', () => toggleMobileMenu(false));
                    });

                    addListener(window, 'keydown', function(e) {
                        if (e.key === 'Escape' && mobileBtn.getAttribute('aria-expanded') === 'true') {
                            toggleMobileMenu(false);
                            try { mobileBtn.focus(); } catch (err) {}
                        }
                    });

                    addListener(document, 'click', function(e) {
                        if (mobileBtn.getAttribute('aria-expanded') === 'true' && !mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
                            toggleMobileMenu(false);
                        }
                    });

                    addListener(window, 'resize', function() {
                        if (window.innerWidth >= 1024 && mobileBtn.getAttribute('aria-expanded') === 'true') {
                            toggleMobileMenu(false);
                        }
                    });
                }

                // 2. Project Workspace Viewport & Mode Controller
                const projBtns = document.querySelectorAll('.modern-proj-btn');
                const projViews = document.querySelectorAll('.modern-proj-view');
                const modeBtns = document.querySelectorAll('.modern-mode-btn');

                function switchProject(projId) {
                    projBtns.forEach(btn => {
                        const isMatch = btn.getAttribute('data-proj') === projId;
                        btn.setAttribute('aria-selected', isMatch);
                        if (isMatch) {
                            btn.className = 'modern-proj-btn px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all bg-velora-accent text-white shadow-sm shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent';
                        } else {
                            btn.className = 'modern-proj-btn px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all text-velora-muted hover:text-velora-text hover:bg-velora-card shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent';
                        }
                    });

                    projViews.forEach(view => {
                        if (view.id === 'modern-proj-' + projId) {
                            view.classList.remove('hidden');
                            view.classList.add('block');
                        } else {
                            view.classList.add('hidden');
                            view.classList.remove('block');
                        }
                    });
                }

                projBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        const pid = this.getAttribute('data-proj');
                        if (pid) switchProject(pid);
                    });
                });

                // Quick jump buttons in Hero
                const quickNodes = document.querySelectorAll('.modern-quick-jump-node');
                quickNodes.forEach(node => {
                    addListener(node, 'click', function() {
                        const pid = this.getAttribute('data-project-id');
                        if (pid) {
                            switchProject(pid);
                            const ws = document.getElementById('modern-workspace');
                            if (ws) ws.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                });

                // Inspection Mode Switcher
                function switchMode(mode) {
                    modeBtns.forEach(btn => {
                        const isMatch = btn.getAttribute('data-mode') === mode;
                        if (isMatch) {
                            btn.className = 'modern-mode-btn px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all bg-velora-card text-velora-accent border border-velora-border';
                        } else {
                            btn.className = 'modern-mode-btn px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase text-velora-muted hover:text-velora-text transition-all';
                        }
                    });

                    const simViews = document.querySelectorAll('.modern-view-sim');
                    const archViews = document.querySelectorAll('.modern-view-arch');
                    const convViews = document.querySelectorAll('.modern-view-conv');

                    simViews.forEach(v => {
                        if (mode === 'sim') { v.classList.remove('hidden'); v.classList.add('block'); }
                        else { v.classList.add('hidden'); v.classList.remove('block'); }
                    });
                    archViews.forEach(v => {
                        if (mode === 'arch') { v.classList.remove('hidden'); v.classList.add('block'); }
                        else { v.classList.add('hidden'); v.classList.remove('block'); }
                    });
                    convViews.forEach(v => {
                        if (mode === 'conv') { v.classList.remove('hidden'); v.classList.add('block'); }
                        else { v.classList.add('hidden'); v.classList.remove('block'); }
                    });
                }

                modeBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        const mode = this.getAttribute('data-mode');
                        if (mode) switchMode(mode);
                    });
                });

                // 3. Integrated Sector Matrix Switcher
                const sectorBtns = document.querySelectorAll('.modern-sector-btn');
                const sectorDescs = document.querySelectorAll('.modern-sector-desc');

                sectorBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        const idx = this.getAttribute('data-sector-index');
                        sectorBtns.forEach(b => {
                            const match = b.getAttribute('data-sector-index') === idx;
                            b.setAttribute('aria-selected', match);
                            if (match) {
                                b.classList.add('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                                b.classList.remove('bg-velora-card/60', 'border-velora-border');
                            } else {
                                b.classList.remove('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                                b.classList.add('bg-velora-card/60', 'border-velora-border');
                            }
                        });

                        sectorDescs.forEach((d, i) => {
                            if (String(i) === idx) {
                                d.classList.remove('hidden');
                                d.classList.add('block');
                            } else {
                                d.classList.add('hidden');
                                d.classList.remove('block');
                            }
                        });

                        // Optionally map sector to corresponding project
                        if (idx === '0') switchProject('aurora-aesthetics');
                        else if (idx === '1') switchProject('aarav-estates');
                        else if (idx === '2') switchProject('the-spice-room');
                    });
                });

                // 4. Unified Scope & Pricing Configurator
                const tierBtns = document.querySelectorAll('.modern-tier-btn');
                const pageSlider = document.getElementById('modern-calc-pages');
                const pageDisplay = document.getElementById('modern-calc-pages-val');
                const seoCheck = document.getElementById('modern-calc-seo');
                const maintCheck = document.getElementById('modern-calc-maint');
                const totalDisplay = document.getElementById('modern-calc-total');
                const timelineDisplay = document.getElementById('modern-active-timeline');
                const formScopeBadge = document.getElementById('modern-form-scope-badge');
                const formScopeInput = document.getElementById('modern-form-scope-input');

                let currentBasePrice = ${CONFIG.pricing.professional};
                let currentTierName = 'Professional';
                let currentTimeline = '3–4 Weeks';

                function updateConfigurator() {
                    const pages = parseInt(pageSlider ? pageSlider.value : 5, 10);
                    if (pageDisplay) pageDisplay.textContent = pages + (pages === 1 ? ' Page' : ' Pages');

                    let total = currentBasePrice;
                    // Add pages beyond base if applicable
                    if (pages > 5) {
                        total += (pages - 5) * ${CONFIG.pricing.perPage};
                    }
                    if (seoCheck && seoCheck.checked) total += ${CONFIG.pricing.seoAddon};
                    if (maintCheck && maintCheck.checked) total += ${CONFIG.pricing.maintenanceAddon};

                    if (totalDisplay) totalDisplay.textContent = '₹' + total.toLocaleString('en-IN') + (currentTierName === 'Custom' ? '+' : '');
                    if (timelineDisplay) timelineDisplay.textContent = 'Estimated Turnaround: ' + currentTimeline;

                    const scopeSummary = currentTierName + ' Scope (' + pages + ' Pages' + (seoCheck && seoCheck.checked ? ' + SEO' : '') + (maintCheck && maintCheck.checked ? ' + Maint' : '') + ') ~ ₹' + total.toLocaleString('en-IN');
                    if (formScopeBadge) formScopeBadge.textContent = scopeSummary;
                    if (formScopeInput) formScopeInput.value = scopeSummary;
                }

                tierBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        tierBtns.forEach(b => {
                            b.classList.remove('border-velora-accent', 'ring-1', 'ring-velora-accent', 'shadow-sm');
                            b.classList.add('border-velora-border');
                        });
                        this.classList.add('border-velora-accent', 'ring-1', 'ring-velora-accent', 'shadow-sm');
                        this.classList.remove('border-velora-border');

                        currentBasePrice = parseInt(this.getAttribute('data-base-price'), 10) || ${CONFIG.pricing.professional};
                        currentTimeline = this.getAttribute('data-timeline') || '3–4 Weeks';
                        const tid = this.getAttribute('data-tier-id');
                        currentTierName = tid === 'essential' ? 'Essential' : (tid === 'custom' ? 'Custom' : 'Professional');

                        if (pageSlider) {
                            pageSlider.value = this.getAttribute('data-max-pages') || 5;
                        }
                        updateConfigurator();
                    });
                });

                if (pageSlider) addListener(pageSlider, 'input', updateConfigurator);
                if (seoCheck) addListener(seoCheck, 'change', updateConfigurator);
                if (maintCheck) addListener(maintCheck, 'change', updateConfigurator);

                // Initial calculation
                updateConfigurator();

                // 5. Contextual Knowledge Console Switcher
                const faqBtns = document.querySelectorAll('.modern-faq-btn');
                const faqPanels = document.querySelectorAll('.modern-faq-panel');

                faqBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        const idx = this.getAttribute('data-faq-index');
                        faqBtns.forEach(b => {
                            const match = b.getAttribute('data-faq-index') === idx;
                            b.setAttribute('aria-selected', match);
                            if (match) {
                                b.classList.add('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                                b.classList.remove('bg-velora-card/60', 'border-velora-border');
                            } else {
                                b.classList.remove('bg-velora-bg', 'border-velora-accent', 'shadow-sm');
                                b.classList.add('bg-velora-card/60', 'border-velora-border');
                            }
                        });

                        faqPanels.forEach((p, i) => {
                            if (String(i) === idx) {
                                p.classList.remove('hidden');
                                p.classList.add('block');
                            } else {
                                p.classList.add('hidden');
                                p.classList.remove('block');
                            }
                        });
                    });
                });

                // 6. Command Dispatch Form Submission Handler
                const dispatchForm = document.getElementById('modern-dispatch-form');
                const dispatchSuccess = document.getElementById('modern-dispatch-success');
                const dispatchError = document.getElementById('modern-dispatch-error');
                const dispatchSubmitBtn = document.getElementById('modern-dispatch-submit-btn');

                if (dispatchForm) {
                    addListener(dispatchForm, 'submit', async function(e) {
                        e.preventDefault();
                        if (dispatchSuccess) dispatchSuccess.classList.add('hidden');
                        if (dispatchError) dispatchError.classList.add('hidden');

                        const nameInput = document.getElementById('modern-form-name');
                        const phoneInput = document.getElementById('modern-form-phone');
                        const emailInput = document.getElementById('modern-form-email');
                        const websiteInput = document.getElementById('modern-form-website');
                        const messageInput = document.getElementById('modern-form-message');
                        const gotchaInput = document.getElementById('modern-gotcha');

                        // Honeypot check
                        if (gotchaInput && gotchaInput.value.trim().length > 0) {
                            return;
                        }

                        if (!nameInput || !nameInput.value.trim() || !phoneInput || !phoneInput.value.trim() || !emailInput || !emailInput.value.trim()) {
                            if (dispatchError) {
                                dispatchError.textContent = 'Please provide your name, direct phone/WhatsApp number, and email address.';
                                dispatchError.classList.remove('hidden');
                            }
                            return;
                        }

                        const payload = {
                            name: nameInput.value.trim(),
                            phone: phoneInput.value.trim(),
                            email: emailInput.value.trim(),
                            website: websiteInput ? websiteInput.value.trim() : '',
                            service: formScopeInput ? formScopeInput.value : 'Professional Plan',
                            message: messageInput ? messageInput.value.trim() : 'Modern Experience Dispatch'
                        };

                        if (dispatchSubmitBtn) {
                            dispatchSubmitBtn.disabled = true;
                            dispatchSubmitBtn.innerHTML = '<span>Transmitting...</span>';
                        }

                        try {
                            const res = await fetch('/api/contact', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(payload)
                            });

                            if (res.ok) {
                                if (dispatchSuccess) dispatchSuccess.classList.remove('hidden');
                                dispatchForm.reset();
                                updateConfigurator();
                            } else {
                                const data = await res.json().catch(() => ({}));
                                if (dispatchError) {
                                    dispatchError.textContent = data.error || 'Submission failed. Please message us directly on WhatsApp.';
                                    dispatchError.classList.remove('hidden');
                                }
                            }
                        } catch (err) {
                            if (dispatchError) {
                                dispatchError.textContent = 'Network connection interrupted. Please contact us via WhatsApp directly.';
                                dispatchError.classList.remove('hidden');
                            }
                        } finally {
                            if (dispatchSubmitBtn) {
                                dispatchSubmitBtn.disabled = false;
                                dispatchSubmitBtn.innerHTML = '<span>Transmit Dispatch Brief</span><span aria-hidden="true">&rarr;</span>';
                            }
                        }
                    });
                }

                // 7. Studio Theme Menu Toggle & Handler
                const themeBtn = document.getElementById('studio-theme-btn');
                const themeMenu = document.getElementById('studio-theme-menu');
                if (themeBtn && themeMenu) {
                    addListener(themeBtn, 'click', function(e) {
                        e.stopPropagation();
                        const isHidden = themeMenu.classList.contains('hidden');
                        if (isHidden) {
                            themeMenu.classList.remove('hidden');
                            themeBtn.setAttribute('aria-expanded', 'true');
                        } else {
                            themeMenu.classList.add('hidden');
                            themeBtn.setAttribute('aria-expanded', 'false');
                        }
                    });

                    addListener(document, 'click', function(e) {
                        if (!themeMenu.contains(e.target) && !themeBtn.contains(e.target)) {
                            themeMenu.classList.add('hidden');
                            themeBtn.setAttribute('aria-expanded', 'false');
                        }
                    });

                    const themeOpts = themeMenu.querySelectorAll('.theme-option');
                    themeOpts.forEach(opt => {
                        addListener(opt, 'click', function() {
                            const val = this.getAttribute('data-theme-value');
                            if (val) {
                                document.documentElement.setAttribute('data-theme', val);
                                try { localStorage.setItem('velora_theme', val); } catch (e) {}
                                themeMenu.classList.add('hidden');
                                themeBtn.setAttribute('aria-expanded', 'false');
                            }
                        });
                    });
                }
            };

            window.cleanupModernInteractions = function() {
                if (Array.isArray(window.__veloraModernCleanups)) {
                    window.__veloraModernCleanups.forEach(function(fn) {
                        try { fn(); } catch (e) {}
                    });
                    window.__veloraModernCleanups = [];
                }
                document.body.style.overflow = '';
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
