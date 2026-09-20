// ============================================================================ //
// VELORA DIGITAL — 02 CLASSIC EXPERIENCE PRESENTATION RENDERER                  //
// Art Direction: Architectural Monograph · Editorial Publication · Measured Craft //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Classic-owned Publication Masthead Navigation.
 * Renders a publication masthead with volume imprint, folio links, and accessible chapter drawer.
 */
function ClassicHeader(currentPath) {
    const chapterLink = (hash, label, folioNum) => {
        return `<a href="${hash}" class="classic-masthead-link inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-[#57534E] hover:text-[#1C1917] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]">
            <span class="text-[9px] font-mono text-[#78716C]/60">${folioNum}</span>
            <span>${label}</span>
        </a>`;
    };

    const mobileChapterLink = (hash, label, folioNum) => {
        return `<a href="${hash}" class="classic-mobile-chapter-link flex items-baseline justify-between py-3 border-b border-[#1C1917]/10 text-sm text-[#1C1917] hover:text-[#57534E] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]">
            <span class="classic-serif text-lg font-medium">${label}</span>
            <span class="text-[10px] font-mono text-[#78716C] uppercase tracking-widest">${folioNum}</span>
        </a>`;
    };

    const mobileStaticLink = (href, label) => {
        const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
        return `<a href="${href}" class="block py-2 text-xs uppercase tracking-[0.15em] ${isActive ? 'font-bold text-[#1C1917]' : 'text-[#78716C] hover:text-[#1C1917]'} transition-colors">${label}</a>`;
    };

    return `
    <header class="classic-masthead sticky top-0 z-50 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[rgba(41,37,36,0.14)] transition-all duration-300" role="banner" aria-label="Publication Masthead">
        <!-- Top Imprint Bar (Publication Metadata) -->
        <div class="hidden lg:block border-b border-[rgba(41,37,36,0.08)] py-1 px-4 sm:px-6 lg:px-8 text-[10px] font-mono uppercase tracking-[0.2em] text-[#78716C]">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <span>Velora Digital &middot; Architectural Web Practice &middot; Edition No. 02</span>
                <span>Established 2026 &middot; Vol. II Monograph</span>
                <span>Studio: Gurugram &middot; Serving NCR, Chandigarh &amp; Bengaluru</span>
            </div>
        </div>

        <!-- Main Masthead Body -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div class="flex items-center justify-between gap-4">

                <!-- Publication Titleplate & Volume -->
                <a href="/" class="flex items-baseline gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]" aria-label="Velora Digital Publication Home">
                    <span class="classic-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] group-hover:opacity-85 transition-opacity">VELORA</span>
                    <span class="hidden sm:inline-block text-[9px] font-mono uppercase tracking-[0.25em] text-[#78716C] border-l border-[rgba(41,37,36,0.2)] pl-3">
                        Monograph Vol. II &middot; Classic
                    </span>
                </a>

                <!-- Desktop Chapter Navigation -->
                <nav class="hidden xl:flex items-center gap-5" aria-label="Monograph Chapters">
                    ${chapterLink('#classic-ch2-practice', 'Practice', '02')}
                    ${chapterLink('#classic-ch3-portfolio', 'Archive', '03')}
                    ${chapterLink('#classic-ch4-directory', 'Directory', '04')}
                    ${chapterLink('#classic-ch5-standard', 'Standard', '05')}
                    ${chapterLink('#classic-ch6-method', 'Method', '06')}
                    ${chapterLink('#classic-ch7-investment', 'Investment', '07')}
                    ${chapterLink('#classic-ch8-correspondence', 'Correspondence', '08')}
                    ${chapterLink('#classic-ch9-enquiries', 'Colophon', '09')}
                </nav>

                <!-- Right Action & Mobile Trigger -->
                <div class="flex items-center gap-3">
                    <a href="/contact" class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#1C1917] text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]">
                        <span>Consultation</span>
                        <span aria-hidden="true">&rarr;</span>
                    </a>

                    <!-- Mobile Chapter Index Button -->
                    <button type="button"
                            id="classic-mobile-menu-btn"
                            aria-expanded="false"
                            aria-controls="classic-mobile-drawer"
                            aria-label="Open Monograph Chapter Index"
                            class="xl:hidden px-3 py-2 min-h-[44px] min-w-[44px] border border-[rgba(41,37,36,0.2)] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-[#1C1917] hover:bg-[#F4EFE6] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]">
                        <span id="classic-burger-text">INDEX</span>
                        <svg id="classic-burger-icon" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path id="classic-burger-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <!-- Mobile Publication Chapter Drawer -->
        <div id="classic-mobile-drawer"
             class="classic-mobile-drawer xl:hidden hidden border-t border-[rgba(41,37,36,0.15)] bg-[#FAF8F5] px-6 py-6 shadow-2xl transition-all"
             aria-label="Publication Chapter Index"
             aria-hidden="true">
            <div class="max-w-xl mx-auto space-y-6">
                <div class="flex items-center justify-between border-b border-[#1C1917]/15 pb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#78716C]">
                    <span>Monograph Chapters</span>
                    <span>Experience 02</span>
                </div>

                <div class="space-y-1">
                    ${mobileChapterLink('#classic-ch1-frontispiece', 'Frontispiece', 'Folio 01')}
                    ${mobileChapterLink('#classic-ch2-practice', 'The Practice', 'Folio 02')}
                    ${mobileChapterLink('#classic-ch3-portfolio', 'Selected Archive', 'Folio 03')}
                    ${mobileChapterLink('#classic-ch4-directory', 'Commercial Directory', 'Folio 04')}
                    ${mobileChapterLink('#classic-ch5-standard', 'The Standard & Comparison', 'Folio 05')}
                    ${mobileChapterLink('#classic-ch6-method', 'Production Method', 'Folio 06')}
                    ${mobileChapterLink('#classic-ch7-investment', 'Investment Schedule', 'Folio 07')}
                    ${mobileChapterLink('#classic-ch8-correspondence', 'Correspondence', 'Folio 08')}
                    ${mobileChapterLink('#classic-ch9-enquiries', 'Enquiries & Colophon', 'Folio 09')}
                </div>

                <div class="pt-4 border-t border-[#1C1917]/15 space-y-2">
                    <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#78716C] mb-2">Studio Exploration</div>
                    ${mobileStaticLink('/services', 'All Services')}
                    ${mobileStaticLink('/portfolio', 'Portfolio Catalog')}
                    ${mobileStaticLink('/about', 'About Studio')}
                    ${mobileStaticLink('/contact', 'Project Consultation &rarr;')}
                </div>
            </div>
        </div>
    </header>`;
}

/**
 * Classic-owned Publication Colophon Footer.
 * Renders an archival colophon, studio location index, direct contact coordinates, and theme switcher.
 */
function ClassicFooter() {
    return `
    <footer class="classic-footer bg-[#F4EFE6] border-t border-[rgba(41,37,36,0.18)] pt-20 pb-28 text-[#1C1917] transition-colors duration-300" role="contentinfo" aria-label="Publication Colophon">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Double Hairline Top Framing -->
            <div class="border-t-2 border-b border-[rgba(41,37,36,0.25)] pt-1.5 pb-1.5 mb-14">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#78716C] gap-2">
                    <span>PUBLICATION COLOPHON &middot; IMPRINT</span>
                    <span>VELORA DIGITAL MONOGRAPH &middot; EDITION 2026</span>
                    <span>ALL ASSETS CLIENT SOVEREIGN</span>
                </div>
            </div>

            <!-- Colophon Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(41,37,36,0.15)]">

                <!-- Studio Imprint & Statement -->
                <div class="lg:col-span-4 space-y-4">
                    <span class="classic-serif text-2xl font-bold tracking-tight text-[#1C1917]">VELORA DIGITAL</span>
                    <p class="text-xs text-[#57534E] leading-relaxed font-sans max-w-sm text-pretty">
                        A focused web design &amp; local SEO practice. We write lean, hand-crafted code that loads fast and makes serious local commercial businesses easy to discover, trust, and contact.
                    </p>
                    <div class="pt-2 text-xs text-[#78716C] space-y-1.5 font-mono">
                        <div>Published in Gurugram, Haryana, India</div>
                        <div>Serving Gurugram, Delhi NCR, Chandigarh &amp; Bengaluru</div>
                    </div>
                </div>

                <!-- Practice Disciplines -->
                <div class="lg:col-span-2 space-y-3">
                    <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1C1917] font-bold block pb-1 border-b border-[rgba(41,37,36,0.15)]">Disciplines</span>
                    <ul class="space-y-2 text-xs text-[#57534E]">
                        <li><a href="/services/website-design" class="hover:text-[#1C1917] transition-colors py-1 block">Website Design</a></li>
                        <li><a href="/services/local-seo" class="hover:text-[#1C1917] transition-colors py-1 block">Local SEO</a></li>
                        <li><a href="/services/website-maintenance" class="hover:text-[#1C1917] transition-colors py-1 block">Maintenance Care</a></li>
                        <li><a href="/services" class="hover:text-[#1C1917] font-semibold transition-colors py-1 block">All Services &rarr;</a></li>
                    </ul>
                </div>

                <!-- Target Sectors -->
                <div class="lg:col-span-3 space-y-3">
                    <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1C1917] font-bold block pb-1 border-b border-[rgba(41,37,36,0.15)]">Sectors of Focus</span>
                    <ul class="space-y-2 text-xs text-[#57534E]">
                        <li><a href="/industries/real-estate" class="hover:text-[#1C1917] transition-colors py-1 block">Real Estate &amp; Advisory</a></li>
                        <li><a href="/industries/restaurants" class="hover:text-[#1C1917] transition-colors py-1 block">Restaurants &amp; Hospitality</a></li>
                        <li><a href="/industries/clinics" class="hover:text-[#1C1917] transition-colors py-1 block">Clinics &amp; Aesthetic Practices</a></li>
                        <li><a href="/industries/salons" class="hover:text-[#1C1917] transition-colors py-1 block">Salons &amp; Wellness Studios</a></li>
                    </ul>
                </div>

                <!-- Direct Studio Contact Lines -->
                <div class="lg:col-span-3 space-y-3">
                    <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1C1917] font-bold block pb-1 border-b border-[rgba(41,37,36,0.15)]">Correspondence</span>
                    <div class="space-y-2 text-xs text-[#57534E]">
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-[#78716C]">Tel:</span>
                            <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="hover:text-[#1C1917] transition-colors font-medium">${CONFIG.phone}</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-[#78716C]">Mail:</span>
                            <a href="mailto:${CONFIG.email}" class="hover:text-[#1C1917] transition-colors font-medium">${CONFIG.email}</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-[#78716C]">WhatsApp:</span>
                            <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="hover:text-[#1C1917] transition-colors font-medium">+${CONFIG.whatsapp}</a>
                        </div>
                        <div class="pt-2">
                            <a href="/contact" class="inline-block px-4 py-2 border border-[#1C1917] text-[10px] font-mono uppercase tracking-widest text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-colors">
                                Open Inquiry &rarr;
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Colophon Baseline & Theme Selector -->
            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
                <div class="flex items-center gap-4 flex-wrap">
                    <span>&copy; ${new Date().getFullYear()} Velora Digital Studio. All rights reserved.</span>
                    <span aria-hidden="true">&middot;</span>
                    <div class="relative inline-block text-left">
                        <button id="studio-theme-btn"
                                type="button"
                                class="inline-flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#1C1917] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]"
                                aria-haspopup="true"
                                aria-expanded="false">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                            <span>Palette Settings</span>
                        </button>
                        <div id="studio-theme-menu" class="absolute bottom-full left-0 mb-2 w-48 bg-[#FFFFFF] border border-[rgba(41,37,36,0.18)] shadow-lg p-1.5 hidden z-50">
                            <button class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded hover:bg-[#F4EFE6] transition-colors text-[#1C1917]" data-theme-value="onyx">
                                <span>Onyx / Champagne</span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#d4af37]"></span>
                            </button>
                            <button class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded hover:bg-[#F4EFE6] transition-colors text-[#1C1917]" data-theme-value="obsidian">
                                <span>Obsidian / Titanium</span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]"></span>
                            </button>
                            <button class="theme-option w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded hover:bg-[#F4EFE6] transition-colors text-[#1C1917]" data-theme-value="midnight">
                                <span>Midnight / Cobalt</span>
                                <span class="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-4 text-xs">
                    <a href="/privacy-policy" class="hover:text-[#1C1917] transition-colors">Privacy Policy</a>
                    <span aria-hidden="true">&middot;</span>
                    <a href="/terms" class="hover:text-[#1C1917] transition-colors">Terms of Engagement</a>
                    <span aria-hidden="true">&middot;</span>
                    <a href="/sitemap.xml" class="hover:text-[#1C1917] transition-colors">Sitemap</a>
                </div>
            </div>

        </div>
    </footer>`;
}

/**
 * Authoritative 02 Classic Experience Presentation Renderer.
 * Aesthetic: Architectural Monograph & Editorial Business Publication.
 * Visual Personality: Quiet, confident, literary, refined, spacious, timeless, intentional.
 */
function renderClassicExperience(currentPath = "/") {
    const meta = {
        title: 'Velora Digital | Architectural Web Practice & Local SEO Monograph',
        description: 'Boutique web design practice and technical local search foundations for high-trust commercial clients. Timeless editorial craft, sub-second mobile speeds, and sovereign asset ownership.',
        schema: generateSchema('FAQPage', { faqs: FAQS }),
        breadcrumbs: null
    };

    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spice = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const content = `
    <!-- Signature Interaction: Live Folio Scroll Tracker -->
    <div id="classic-folio-counter"
         class="classic-folio-tracker fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 px-3.5 py-2 bg-[#FAF8F5]/95 backdrop-blur-md border border-[rgba(41,37,36,0.22)] shadow-sm text-xs font-serif text-[#1C1917] opacity-0 pointer-events-none transition-opacity duration-300"
         aria-live="polite"
         aria-label="Monograph Chapter Tracker">
        <span class="classic-folio-page font-mono text-[10px] uppercase tracking-widest text-[#78716C]" id="classic-folio-num">FOLIO 01 / 09</span>
        <span class="w-1 h-1 rounded-full bg-[#1C1917]/40"></span>
        <span class="classic-folio-title uppercase tracking-wider text-[10px] font-sans font-semibold text-[#1C1917]" id="classic-folio-label">FRONTISPIECE</span>
    </div>

    <!-- ===================================================================== -->
    <!-- CHAPTER I — FRONTISPIECE (OPENING PAGE OF THE PUBLICATION)             -->
    <!-- ===================================================================== -->
    <section id="classic-ch1-frontispiece" class="classic-chapter relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FAF8F5] border-b border-[rgba(41,37,36,0.15)] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Publication Volume Header Rule -->
            <div class="border-t-2 border-b border-[rgba(41,37,36,0.25)] pt-1.5 pb-1.5 mb-12 sm:mb-16">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#78716C] gap-2">
                    <span class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#1C1917]" aria-hidden="true"></span>
                        <span>Velora Digital &middot; Web Architecture &amp; Local SEO</span>
                    </span>
                    <span>VOLUME II &middot; FIRST EDITION &middot; REGISTERED 2026</span>
                    <span class="hidden md:inline">FOLIO 01 / 09 &middot; FRONTISPIECE</span>
                </div>
            </div>

            <!-- Monumental Frontispiece Composition -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <!-- Left: Dominant Thesis & Narrative -->
                <div class="lg:col-span-8 space-y-8">
                    <div class="inline-block">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block pb-2 border-b border-[rgba(41,37,36,0.2)]">
                            Architectural Monograph &middot; Studio Practice
                        </span>
                    </div>

                    <h1 class="classic-serif text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-[#1C1917] leading-[1.08] text-balance">
                        Websites of Enduring Craft, Measured Speed, and Commercial Dignity.
                    </h1>

                    <p class="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl font-sans text-pretty">
                        We design and construct fast, mobile-first websites and technical local search foundations for clinics, property advisories, restaurants, and private practices. Hand-crafted code without page-builder bloat, platform lock-in, or recurring template fees.
                    </p>

                    <!-- Restrained Editorial Actions -->
                    <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] font-bold bg-[#1C1917] text-[#FAF8F5] hover:bg-[#44403C] transition-colors border border-[#1C1917] shadow-sm">
                            Request Studio Consultation &rarr;
                        </a>
                        <a href="#classic-ch2-practice" class="inline-flex items-center justify-center px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] font-semibold bg-[#FFFFFF] hover:bg-[#F4EFE6] text-[#1C1917] transition-colors border border-[rgba(41,37,36,0.2)]">
                            Read Practice Index &darr;
                        </a>
                    </div>
                </div>

                <!-- Right: Frontispiece Titleplate & Imprint Ledger -->
                <div class="lg:col-span-4 bg-[#FFFFFF] p-6 sm:p-8 border border-[rgba(41,37,36,0.18)] shadow-sm space-y-6">
                    <div class="border-b border-[rgba(41,37,36,0.15)] pb-4">
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#78716C] block mb-1">Monograph Particulars</span>
                        <h2 class="classic-serif text-2xl font-semibold text-[#1C1917]">Practice Ledger</h2>
                    </div>

                    <dl class="space-y-4 text-xs font-sans">
                        <div class="border-b border-[rgba(41,37,36,0.1)] pb-3 flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-[#78716C]">Engineering</dt>
                            <dd class="text-right font-medium text-[#1C1917]">Lean Semantic SSR &middot; Zero Bloat</dd>
                        </div>
                        <div class="border-b border-[rgba(41,37,36,0.1)] pb-3 flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-[#78716C]">Discovery</dt>
                            <dd class="text-right font-medium text-[#1C1917]">Local SEO &middot; Schema.org JSON-LD</dd>
                        </div>
                        <div class="border-b border-[rgba(41,37,36,0.1)] pb-3 flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-[#78716C]">Timeframe</dt>
                            <dd class="text-right font-medium text-[#1C1917]">2 to 4 Weeks Structured Workflow</dd>
                        </div>
                        <div class="flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-[#78716C]">Sovereignty</dt>
                            <dd class="text-right font-medium text-[#1C1917]">100% Client Code &amp; Domain Rights</dd>
                        </div>
                    </dl>

                    <div class="pt-4 border-t border-[rgba(41,37,36,0.15)]">
                        <div class="text-[11px] text-[#57534E] leading-relaxed">
                            Serving serious commercial enterprises with transparent fixed rate schedules and direct engineering accountability.
                        </div>
                    </div>
                </div>

            </div>

            <!-- Hallmarks of the Practice -->
            <div class="mt-14 pt-8 border-t border-[rgba(41,37,36,0.15)] grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs text-[#1C1917]">
                <div class="flex items-start gap-3">
                    <span class="classic-serif text-2xl leading-none font-bold text-[#1C1917]">I.</span>
                    <div>
                        <strong class="block font-sans font-semibold text-[#1C1917] mb-1">Mobile-First Semantic Code</strong>
                        <span class="text-[#57534E] leading-relaxed">Sub-second loading times on standard cellular networks without heavy JavaScript runtimes.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="classic-serif text-2xl leading-none font-bold text-[#1C1917]">II.</span>
                    <div>
                        <strong class="block font-sans font-semibold text-[#1C1917] mb-1">Direct Commercial Pathways</strong>
                        <span class="text-[#57534E] leading-relaxed">Prominent click-to-call, instant WhatsApp inquiry triggers, and clear rate presentations.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="classic-serif text-2xl leading-none font-bold text-[#1C1917]">III.</span>
                    <div>
                        <strong class="block font-sans font-semibold text-[#1C1917] mb-1">Sovereign Client Ownership</strong>
                        <span class="text-[#57534E] leading-relaxed">Zero ongoing platform locks, proprietary monthly theme fees, or hostage domain records.</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER II — THE PRACTICE (NARRATIVE SERVICES INDEX)                   -->
    <!-- ===================================================================== -->
    <section id="classic-ch2-practice" class="classic-chapter py-20 md:py-28 bg-[#F4EFE6] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[rgba(41,37,36,0.2)] gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER II // THE PRACTICE</span>
                    <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Core Disciplines &amp; Architectural Scope</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed font-sans">
                    Three specialized disciplines engineered to establish immediate credibility, sub-second mobile performance, and verifiable local enquiries.
                </p>
            </div>

            <!-- Narrative Index Layout (No Cards) -->
            <div class="space-y-16">
                ${SERVICES.map((s, idx) => {
                    const romanNumerals = ['01', '02', '03'];
                    const num = romanNumerals[idx] || `0${idx + 1}`;
                    return `
                    <article class="classic-practice-entry border-b border-[rgba(41,37,36,0.18)] pb-14 last:border-b-0">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                            <!-- Large Numeral & Title Column -->
                            <div class="lg:col-span-4 space-y-3">
                                <span class="classic-serif text-5xl sm:text-6xl font-light text-[#78716C]/60 block leading-none">${num}</span>
                                <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] block">${escapeHTML(s.heroTag || 'STUDIO DISCIPLINE')}</span>
                                <h3 class="classic-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] leading-tight">
                                    ${escapeHTML(s.title)}
                                </h3>
                                <div class="pt-2 text-xs font-mono text-[#78716C]">
                                    Timeline: ${escapeHTML(s.timeline)}
                                </div>
                            </div>

                            <!-- Narrative & Scope Column -->
                            <div class="lg:col-span-8 space-y-6">
                                <p class="text-sm sm:text-base text-[#1C1917] leading-relaxed font-sans">
                                    ${escapeHTML(s.short)}
                                </p>
                                <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                                    ${escapeHTML(s.longDesc)}
                                </p>

                                <!-- Included Scope Deliverables Ledger -->
                                <div class="bg-[#FFFFFF] p-6 border border-[rgba(41,37,36,0.15)] space-y-3">
                                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#1C1917] font-bold block pb-2 border-b border-[rgba(41,37,36,0.1)]">
                                        Included Scope &amp; Deliverables:
                                    </span>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                        ${s.benefits.map(b => `
                                            <div class="flex items-start gap-2.5 text-xs text-[#57534E]">
                                                <span class="classic-serif text-sm text-[#1C1917] leading-none">&mdash;</span>
                                                <span>${escapeHTML(b)}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>

                                <div class="pt-2 flex items-center justify-between">
                                    <a href="/services/${escapeHTML(s.slug)}" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#1C1917] hover:underline">
                                        <span>Examine Full ${escapeHTML(s.title)} Specifications</span>
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </article>
                    `;
                }).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER III — PORTFOLIO FOLIOS (ASYMMETRIC EDITORIAL ARCHIVE)          -->
    <!-- ===================================================================== -->
    <section id="classic-ch3-portfolio" class="classic-chapter py-20 md:py-28 bg-[#FAF8F5] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[rgba(41,37,36,0.2)] gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER III // ARCHIVE</span>
                    <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Selected Concept Folios</h2>
                </div>
                <div class="text-xs text-[#57534E] max-w-sm leading-relaxed font-sans">
                    Production-grade concept websites engineered to benchmark technical speed, conversion architecture, and local SEO structure. All demonstrations represent signature studio design concepts.
                </div>
            </div>

            <!-- Deliberately Asymmetric Editorial Folios -->
            <div class="space-y-20">

                <!-- FOLIO 01: AURORA CLINIC (Large Left Editorial Plate) -->
                <article class="classic-folio-item bg-[#FFFFFF] p-8 sm:p-12 border border-[rgba(41,37,36,0.18)] shadow-sm">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        <!-- Left: Editorial Monograph Plate -->
                        <div class="lg:col-span-7 space-y-6">
                            <div class="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#78716C] pb-3 border-b border-[rgba(41,37,36,0.12)]">
                                <span>FOLIO 03.1 &middot; ${escapeHTML(aurora.industry)}</span>
                                <span>&middot;</span>
                                <span class="font-semibold text-[#1C1917]">${escapeHTML(aurora.type || 'Signature Design Concept')}</span>
                            </div>

                            <h3 class="classic-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                                ${escapeHTML(aurora.title)}
                            </h3>

                            <p class="text-sm text-[#57534E] leading-relaxed font-sans">
                                ${escapeHTML(aurora.summary)}
                            </p>

                            <!-- Archival Plate Simulation Viewport -->
                            <div class="bg-[#F4EFE6] p-6 border border-[rgba(41,37,36,0.15)] space-y-4">
                                <div class="flex items-center justify-between text-[10px] font-mono uppercase text-[#78716C] pb-2 border-b border-[rgba(41,37,36,0.15)]">
                                    <span>Archival Plate Demonstration</span>
                                    <span>MedicalBusiness Schema</span>
                                </div>
                                <div class="space-y-2 text-xs text-[#1C1917] font-sans">
                                    <div class="classic-serif text-xl font-medium">Aesthetic Dermatology &middot; Consult Intake</div>
                                    <p class="text-[#57534E] text-xs leading-relaxed">Structured treatment menu replacing 15MB PDF catalog. Direct doctor credential hierarchy, zero patient registration wall.</p>
                                </div>
                                <div class="pt-2 flex items-center gap-3 text-[11px] font-mono text-[#1C1917]">
                                    <span class="px-2 py-1 bg-[#FFFFFF] border border-[rgba(41,37,36,0.2)]">1-Tap Booking Trigger</span>
                                    <span class="px-2 py-1 bg-[#FFFFFF] border border-[rgba(41,37,36,0.2)]">Direct Telephone Routing</span>
                                </div>
                            </div>

                            <div class="pt-2">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#1C1917] hover:underline">
                                    <span>Examine Clinic Architecture Folio</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <!-- Right: Architectural Specifications Ledger -->
                        <div class="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 border border-[rgba(41,37,36,0.15)] space-y-6">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] block pb-2 border-b border-[rgba(41,37,36,0.15)]">
                                Architectural Decision Ledger
                            </span>

                            <div class="space-y-2 text-xs">
                                <strong class="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">UX Decision:</strong>
                                <p class="text-[#1C1917] italic leading-relaxed font-serif text-sm">
                                    "${escapeHTML(aurora.keyUxDecisions || 'Replaced heavy PDF service menus with structured HTML accordions; moved doctor credentials above the fold.')}"
                                </p>
                            </div>

                            <div class="space-y-2 text-xs">
                                <strong class="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">Technical Priority:</strong>
                                <p class="text-[#57534E] leading-relaxed">
                                    ${escapeHTML(aurora.technicalPriorities || 'Lightning-fast mobile load time on 4G networks; semantic MedicalBusiness schema integration; strict accessibility compliance.')}
                                </p>
                            </div>

                            <div class="pt-4 border-t border-[rgba(41,37,36,0.15)] space-y-2">
                                <strong class="text-[10px] font-mono uppercase tracking-wider text-[#1C1917] block">Delivered Specifications:</strong>
                                <ul class="space-y-1.5 text-xs text-[#57534E]">
                                    ${aurora.deliverables ? aurora.deliverables.map(d => `
                                        <li class="flex items-start gap-2">
                                            <span class="text-[#1C1917]">&bull;</span>
                                            <span>${escapeHTML(d)}</span>
                                        </li>
                                    `).join('') : ''}
                                </ul>
                            </div>
                        </div>

                    </div>
                </article>

                <!-- FOLIO 03.2: AARAV PROPERTIES (Narrow Offset Composition) -->
                <article class="classic-folio-item bg-[#FFFFFF] p-8 sm:p-12 border border-[rgba(41,37,36,0.18)] shadow-sm">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        <!-- Left: Specification Ledger -->
                        <div class="lg:col-span-5 order-2 lg:order-1 bg-[#FAF8F5] p-6 sm:p-8 border border-[rgba(41,37,36,0.15)] space-y-6">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] block pb-2 border-b border-[rgba(41,37,36,0.15)]">
                                Architectural Decision Ledger
                            </span>

                            <div class="space-y-2 text-xs">
                                <strong class="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">UX Decision:</strong>
                                <p class="text-[#1C1917] italic leading-relaxed font-serif text-sm">
                                    "${escapeHTML(aarav.keyUxDecisions || 'Eliminated invasive newsletter pop-ups; structured property specs into scannable data tables.')}"
                                </p>
                            </div>

                            <div class="space-y-2 text-xs">
                                <strong class="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">Technical Priority:</strong>
                                <p class="text-[#57534E] leading-relaxed">
                                    ${escapeHTML(aarav.technicalPriorities || 'Optimized image delivery for large property galleries; implemented localized RealEstateAgent Schema.')}
                                </p>
                            </div>

                            <div class="pt-4 border-t border-[rgba(41,37,36,0.15)] space-y-2">
                                <strong class="text-[10px] font-mono uppercase tracking-wider text-[#1C1917] block">Delivered Specifications:</strong>
                                <ul class="space-y-1.5 text-xs text-[#57534E]">
                                    ${aarav.deliverables ? aarav.deliverables.map(d => `
                                        <li class="flex items-start gap-2">
                                            <span class="text-[#1C1917]">&bull;</span>
                                            <span>${escapeHTML(d)}</span>
                                        </li>
                                    `).join('') : ''}
                                </ul>
                            </div>
                        </div>

                        <!-- Right: Editorial Narrative & Property Sheet -->
                        <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
                            <div class="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#78716C] pb-3 border-b border-[rgba(41,37,36,0.12)]">
                                <span>FOLIO 03.2 &middot; ${escapeHTML(aarav.industry)}</span>
                                <span>&middot;</span>
                                <span class="font-semibold text-[#1C1917]">${escapeHTML(aarav.type || 'Signature Design Concept')}</span>
                            </div>

                            <h3 class="classic-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] text-balance">
                                ${escapeHTML(aarav.title)}
                            </h3>

                            <p class="text-sm text-[#57534E] leading-relaxed font-sans">
                                ${escapeHTML(aarav.summary)}
                            </p>

                            <!-- Archival Property Ledger Preview -->
                            <div class="bg-[#F4EFE6] p-6 border border-[rgba(41,37,36,0.15)] space-y-4">
                                <div class="flex items-center justify-between text-[10px] font-mono uppercase text-[#78716C] pb-2 border-b border-[rgba(41,37,36,0.15)]">
                                    <span>Residential Showcase Architecture</span>
                                    <span>RealEstateAgent Schema</span>
                                </div>
                                <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                                    <div class="p-2 bg-[#FFFFFF] border border-[rgba(41,37,36,0.15)]">
                                        <div class="text-[9px] text-[#78716C] uppercase">Inventory</div>
                                        <div class="font-bold text-[#1C1917]">Floor Plans</div>
                                    </div>
                                    <div class="p-2 bg-[#FFFFFF] border border-[rgba(41,37,36,0.15)]">
                                        <div class="text-[9px] text-[#78716C] uppercase">Compliance</div>
                                        <div class="font-bold text-[#1C1917]">RERA Structure</div>
                                    </div>
                                    <div class="p-2 bg-[#FFFFFF] border border-[rgba(41,37,36,0.15)]">
                                        <div class="text-[9px] text-[#78716C] uppercase">Lead Route</div>
                                        <div class="font-bold text-[#1C1917]">WhatsApp Desk</div>
                                    </div>
                                </div>
                            </div>

                            <div class="pt-2">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#1C1917] hover:underline">
                                    <span>Examine Real Estate Architecture Folio</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </article>

                <!-- FOLIO 03: THE SPICE ROOM (Full-Width Archival Spread) -->
                <article class="classic-folio-item bg-[#FFFFFF] p-8 sm:p-12 border border-[rgba(41,37,36,0.18)] shadow-sm">
                    <div class="space-y-8">

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(41,37,36,0.15)] gap-2">
                            <div class="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#78716C]">
                                <span>FOLIO 03.3 &middot; ${escapeHTML(spice.industry)}</span>
                                <span>&middot;</span>
                                <span class="font-semibold text-[#1C1917]">${escapeHTML(spice.type || 'Signature Design Concept')}</span>
                            </div>
                            <span class="text-[10px] font-mono uppercase tracking-wider text-[#78716C]">Restaurant Schema &middot; Zero-PDF Architecture</span>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            <div class="lg:col-span-5 space-y-4">
                                <h3 class="classic-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]">
                                    ${escapeHTML(spice.title)}
                                </h3>
                                <p class="text-sm text-[#57534E] leading-relaxed font-sans">
                                    ${escapeHTML(spice.summary)}
                                </p>
                                <div class="pt-2">
                                    <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#1C1917] hover:underline">
                                        <span>Examine Hospitality Architecture Folio</span>
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>

                            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF8F5] p-6 sm:p-8 border border-[rgba(41,37,36,0.15)]">
                                <div class="space-y-3">
                                    <strong class="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">UX Transformation:</strong>
                                    <p class="text-xs text-[#1C1917] leading-relaxed italic font-serif">
                                        "${escapeHTML(spice.keyUxDecisions || 'Converted all menu items from PDF to native HTML for lightning-fast loading; added one-tap Get Directions button.')}"
                                    </p>
                                </div>
                                <div class="space-y-3">
                                    <strong class="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">Technical Foundation:</strong>
                                    <p class="text-xs text-[#57534E] leading-relaxed">
                                        ${escapeHTML(spice.technicalPriorities || 'Lightning-fast First Contentful Paint; comprehensive Restaurant Schema for rich snippet generation on Google Maps.')}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </article>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER IV — THE DIRECTORY (STUDIO DIRECTORY LEDGER)                   -->
    <!-- ===================================================================== -->
    <section id="classic-ch4-directory" class="classic-chapter py-20 md:py-28 bg-[#F4EFE6] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="max-w-2xl mb-16">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER IV // DIRECTORY</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Commercial Practice Directory</h2>
                <p class="mt-3 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                    Four commercial sectors where digital clarity, mobile load speed, and structured local search directly govern customer acquisition.
                </p>
            </div>

            <!-- Formal Directory Ledger (No Cards) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                ${INDUSTRIES.map((ind, idx) => `
                <article class="classic-directory-entry bg-[#FFFFFF] p-8 border border-[rgba(41,37,36,0.18)] shadow-sm flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-[rgba(41,37,36,0.12)] text-[10px] font-mono uppercase tracking-widest text-[#78716C]">
                            <span>DIRECTORY ENTRY 0${idx + 1}</span>
                            <span>${escapeHTML(ind.shortName)}</span>
                        </div>

                        <h3 class="classic-serif text-2xl font-semibold text-[#1C1917]">
                            ${escapeHTML(ind.name)}
                        </h3>

                        <div class="space-y-3 text-xs text-[#57534E] font-sans">
                            <div>
                                <strong class="text-[#1C1917] block font-mono text-[10px] uppercase tracking-wider mb-1">Common Local Bottleneck:</strong>
                                <p class="leading-relaxed">${escapeHTML(ind.challenges)}</p>
                            </div>
                            <div>
                                <strong class="text-[#1C1917] block font-mono text-[10px] uppercase tracking-wider mb-1">The Velora Solution:</strong>
                                <p class="leading-relaxed">${escapeHTML(ind.solutions)}</p>
                            </div>
                        </div>
                    </div>

                    <div class="pt-6 mt-6 border-t border-[rgba(41,37,36,0.12)]">
                        <a href="/industries/${escapeHTML(ind.slug)}" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#1C1917] hover:underline">
                            <span>Examine ${escapeHTML(ind.shortName)} Blueprint</span>
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </article>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER V — THE STANDARD & COMPARISON (EDITORIAL TREATISE)             -->
    <!-- ===================================================================== -->
    <section id="classic-ch5-standard" class="classic-chapter py-20 md:py-28 bg-[#FAF8F5] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="max-w-3xl mb-16">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER V // THE STANDARD</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Foundational Philosophy &amp; Comparative Quality</h2>
                <p class="mt-3 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                    Every interface we engineer is guided by three non-negotiable principles designed to deliver measurable, permanent business value.
                </p>
            </div>

            <!-- Monograph Treatise Statement -->
            <div class="border-t-2 border-b-2 border-[rgba(41,37,36,0.25)] py-10 my-12 text-center">
                <blockquote class="classic-serif text-2xl sm:text-4xl text-[#1C1917] leading-snug max-w-3xl mx-auto font-medium">
                    &ldquo;Code Written by Hand. Retained by the Client. Measured by the Second.&rdquo;
                </blockquote>
                <div class="mt-4 text-[10px] font-mono uppercase tracking-[0.25em] text-[#78716C]">
                    The Velora Standard &middot; Core Engineering Thesis
                </div>
            </div>

            <!-- The Three Foundational Principles -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div class="bg-[#FFFFFF] p-8 border border-[rgba(41,37,36,0.18)] space-y-4">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] pb-2 border-b border-[rgba(41,37,36,0.12)] block">PRINCIPLE I // ARCHITECTURE</span>
                    <h3 class="classic-serif text-2xl font-semibold text-[#1C1917]">Lean by Design</h3>
                    <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                        We write lightweight, semantic code crafted specifically for your business. Zero bloated page builders and zero unnecessary runtime scripts&mdash;ensuring pages render instantly on standard mobile connections.
                    </p>
                </div>

                <div class="bg-[#FFFFFF] p-8 border border-[rgba(41,37,36,0.18)] space-y-4">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] pb-2 border-b border-[rgba(41,37,36,0.12)] block">PRINCIPLE II // CONVERSION</span>
                    <h3 class="classic-serif text-2xl font-semibold text-[#1C1917]">Built for Local Conversion</h3>
                    <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                        Every interface is structured around direct commercial outcomes: prominent click-to-call, instant WhatsApp triggers, scannable service menus, and Schema.org JSON-LD structured data for Google Maps discovery.
                    </p>
                </div>

                <div class="bg-[#FFFFFF] p-8 border border-[rgba(41,37,36,0.18)] space-y-4">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] pb-2 border-b border-[rgba(41,37,36,0.12)] block">PRINCIPLE III // SOVEREIGNTY</span>
                    <h3 class="classic-serif text-2xl font-semibold text-[#1C1917]">Complete Asset Ownership</h3>
                    <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                        When your project goes live, full ownership of your custom code, assets, and domain records transfers directly to you. No ongoing platform fees, no subscription traps, and no proprietary vendor lock-in.
                    </p>
                </div>
            </div>

            <!-- Archival Physical Wipe Comparison Plate -->
            <div class="max-w-4xl mx-auto space-y-4">
                <div class="text-center pb-2">
                    <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#78716C] block">Archival Contrast Plate</span>
                    <h3 class="classic-serif text-2xl font-semibold text-[#1C1917]">The Difference is Measurable</h3>
                </div>

                <div id="classic-before-after-container"
                     tabindex="0"
                     role="slider"
                     aria-valuemin="0"
                     aria-valuemax="100"
                     aria-valuenow="85"
                     aria-label="Before and After Architectural Comparison"
                     class="relative w-full min-h-[420px] sm:min-h-0 sm:aspect-[16/9] select-none touch-none focus:outline-none focus:ring-1 focus:ring-[#1C1917] border border-[rgba(41,37,36,0.25)] shadow-md overflow-hidden bg-[#FFFFFF]">

                    <!-- Background Layers (Physical Clip-Path Wipe) -->
                    <div class="absolute inset-0 bg-[#ECE7DE]" id="classic-before-bg"></div>
                    <div class="absolute inset-0 bg-[#FFFFFF]" id="classic-after-bg" style="clip-path: polygon(0 0, 85% 0, 85% 100%, 0 100%);"></div>

                    <!-- Before Content Layer -->
                    <div id="classic-before-content" class="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none transition-opacity duration-200" style="opacity: 0;">
                        <div class="pb-4 border-b border-[#D5CFC4] flex items-center justify-between">
                            <span class="classic-serif text-xl sm:text-2xl font-bold text-[#57534E]">Standard Agency Template</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#E7E0D3] text-[#78716C] border border-[#D5CFC4]">Heavy Builder &middot; Slow Render</span>
                        </div>
                        <div class="my-auto space-y-3 max-w-lg">
                            <div class="classic-serif text-2xl sm:text-3xl text-[#292524] leading-snug">
                                &ldquo;Please download our 18MB PDF brochure to view our services and prices.&rdquo;
                            </div>
                            <p class="text-xs text-[#78716C] leading-relaxed font-sans">
                                Buried phone numbers, slow mobile rendering on cellular networks, unoptimized scripts, and zero structured local schema.
                            </p>
                        </div>
                        <div class="pt-3 border-t border-[#D5CFC4] text-[11px] font-mono text-[#78716C] flex items-center gap-4">
                            <span>High Bounce Rates</span>
                            <span>&middot;</span>
                            <span>Unreadable on Mobile</span>
                            <span>&middot;</span>
                            <span>No Schema Markup</span>
                        </div>
                    </div>

                    <!-- After Content Layer -->
                    <div id="classic-after-content" class="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none transition-opacity duration-200" style="opacity: 1;">
                        <div class="pb-4 border-b border-[rgba(41,37,36,0.18)] flex items-center justify-between">
                            <span class="classic-serif text-xl sm:text-2xl font-bold text-[#1C1917]">Velora Editorial Architecture</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] text-[#1C1917] border border-[#1C1917]/30 font-bold">Sub-Second Mobile &middot; Clean SSR</span>
                        </div>
                        <div class="my-auto space-y-3 max-w-lg">
                            <div class="classic-serif text-2xl sm:text-3xl text-[#1C1917] leading-snug">
                                Fast HTML Menus, Prominent Direct Contact &amp; Local Google Search Visibility
                            </div>
                            <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                                Legible typography, one-tap WhatsApp enquiries, clear service rates, and comprehensive Schema.org JSON-LD structured data.
                            </p>
                        </div>
                        <div class="pt-3 border-t border-[rgba(41,37,36,0.18)] text-[11px] font-mono text-[#1C1917] font-semibold flex items-center gap-4">
                            <span>Verified Local Speed</span>
                            <span>&middot;</span>
                            <span>Direct Enquiry Routing</span>
                            <span>&middot;</span>
                            <span>Full Client Ownership</span>
                        </div>
                    </div>

                    <!-- Draggable Physical Divider Handle -->
                    <div id="classic-slider-handle" class="absolute top-0 bottom-0 w-1 bg-[#1C1917] cursor-ew-resize z-20 flex items-center justify-center -translate-x-1/2" style="left: 85%;">
                        <div class="w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#1C1917] shadow-md flex items-center justify-center text-[#1C1917] text-xs font-bold font-mono">
                            &harr;
                        </div>
                    </div>

                </div>

                <div class="text-center text-[11px] font-mono text-[#78716C]">
                    Drag divider or use keyboard Left / Right keys to examine architectural contrast.
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER VI — THE METHOD (CHRONOLOGICAL PRODUCTION SEQUENCE)            -->
    <!-- ===================================================================== -->
    <section id="classic-ch6-method" class="classic-chapter py-20 md:py-28 bg-[#F4EFE6] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="max-w-2xl mb-16">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER VI // THE METHOD</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Chronological Production Sequence</h2>
                <p class="mt-3 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                    A structured 2-to-4 week engineering workflow with clear milestones and absolute transparency from first intake to sovereign handoff.
                </p>
            </div>

            <!-- Chronological Sequence (I through V) -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                ${SERVICES[0].process.map((step, idx) => {
                    const romanPhases = ['I', 'II', 'III', 'IV', 'V'];
                    const phase = romanPhases[idx] || (idx + 1);
                    return `
                    <div class="classic-method-step bg-[#FFFFFF] p-6 border border-[rgba(41,37,36,0.18)] shadow-sm flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between pb-3 border-b border-[rgba(41,37,36,0.12)]">
                                <span class="classic-serif text-2xl font-bold text-[#1C1917]">${phase}.</span>
                                <span class="text-[9px] font-mono uppercase tracking-widest text-[#78716C]">PHASE 0${idx + 1}</span>
                            </div>
                            <h3 class="classic-serif text-lg font-semibold text-[#1C1917] leading-snug">
                                ${escapeHTML(step.title)}
                            </h3>
                            <p class="text-xs text-[#57534E] leading-relaxed font-sans">
                                ${escapeHTML(step.desc)}
                            </p>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER VII — INVESTMENT (FORMAL RATE SCHEDULE & LEDGER)               -->
    <!-- ===================================================================== -->
    <section id="classic-ch7-investment" class="classic-chapter py-20 md:py-28 bg-[#FAF8F5] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="max-w-3xl mb-16">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER VII // INVESTMENT</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Formal Rate Schedule &amp; Investment Memorandum</h2>
                <p class="mt-3 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                    Clear, transparent rate schedules based strictly on architectural scope and delivery requirements. No hidden retainer lock-in.
                </p>
            </div>

            <!-- Formal Rate Schedule Ledger (No Rounded Cards, No "Most Popular" Badges) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">

                <!-- Schedule 01: Essential -->
                <div class="classic-investment-schedule bg-[#FFFFFF] p-8 sm:p-10 border border-[rgba(41,37,36,0.2)] flex flex-col justify-between shadow-sm">
                    <div>
                        <div class="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(41,37,36,0.15)] text-[10px] font-mono uppercase tracking-widest text-[#78716C]">
                            <span>SCHEDULE 01</span>
                            <span>SINGLE LOCATION</span>
                        </div>
                        <h3 class="classic-serif text-2xl font-semibold text-[#1C1917] mb-2">Essential Web</h3>
                        <div class="text-3xl font-semibold text-[#1C1917] classic-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.essential.toLocaleString('en-IN')}
                        </div>
                        <p class="text-xs text-[#57534E] leading-relaxed font-sans mb-6">
                            Designed for single-location practices requiring an immediate, high-trust digital storefront.
                        </p>
                        <ul class="space-y-3 text-xs text-[#57534E] font-sans mb-8">
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Up to 5 Custom Mobile-First Pages</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Direct Phone &amp; WhatsApp Integration</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Sub-Second Mobile Load Times</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Secure SSL &amp; Cloud Deployment</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#1C1917] border border-[rgba(41,37,36,0.25)] block transition-colors">
                        Engage Essential Scope &rarr;
                    </a>
                </div>

                <!-- Schedule 02: Professional + SEO -->
                <div class="classic-investment-schedule bg-[#FFFFFF] p-8 sm:p-10 border-2 border-[#1C1917] flex flex-col justify-between shadow-md relative">
                    <div class="absolute -top-3 left-6 px-3 py-0.5 bg-[#1C1917] text-[#FAF8F5] text-[9px] font-mono uppercase tracking-widest font-bold">
                        Commercial Standard
                    </div>
                    <div>
                        <div class="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(41,37,36,0.15)] text-[10px] font-mono uppercase tracking-widest text-[#1C1917] font-semibold">
                            <span>SCHEDULE 02</span>
                            <span>REGIONAL PRACTICE</span>
                        </div>
                        <h3 class="classic-serif text-2xl font-semibold text-[#1C1917] mb-2">Professional + SEO</h3>
                        <div class="text-3xl font-semibold text-[#1C1917] classic-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.professional.toLocaleString('en-IN')}
                        </div>
                        <p class="text-xs text-[#57534E] leading-relaxed font-sans mb-6">
                            For competitive practices seeking dominant local search discovery and immediate patient trust.
                        </p>
                        <ul class="space-y-3 text-xs text-[#57534E] font-sans mb-8">
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Up to 10 Bespoke Designed Pages</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Local Search Schema.org Foundation</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Google Business Profile Synchronization</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Direct WhatsApp &amp; Telephone Routing</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-bold bg-[#1C1917] text-[#FAF8F5] hover:bg-[#44403C] block transition-colors shadow-sm">
                        Engage Professional Scope &rarr;
                    </a>
                </div>

                <!-- Schedule 03: Custom -->
                <div class="classic-investment-schedule bg-[#FFFFFF] p-8 sm:p-10 border border-[rgba(41,37,36,0.2)] flex flex-col justify-between shadow-sm">
                    <div>
                        <div class="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(41,37,36,0.15)] text-[10px] font-mono uppercase tracking-widest text-[#78716C]">
                            <span>SCHEDULE 03</span>
                            <span>ENTERPRISE &amp; MULTI-BRANCH</span>
                        </div>
                        <h3 class="classic-serif text-2xl font-semibold text-[#1C1917] mb-2">Custom Scope</h3>
                        <div class="text-3xl font-semibold text-[#1C1917] classic-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.customBase.toLocaleString('en-IN')}+
                        </div>
                        <p class="text-xs text-[#57534E] leading-relaxed font-sans mb-6">
                            For multi-branch clinics, extensive real estate portfolios, and private commercial institutions.
                        </p>
                        <ul class="space-y-3 text-xs text-[#57534E] font-sans mb-8">
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Multi-Location Architecture</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Custom Catalog &amp; Booking Integrations</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Comprehensive Local Directory Structuring</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917] font-serif text-sm">&mdash;</span> Priority Engineering Support</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#1C1917] border border-[rgba(41,37,36,0.25)] block transition-colors">
                        Request Custom Consultation &rarr;
                    </a>
                </div>

            </div>

            <!-- Interactive Specification Ledger (The Calculator) -->
            <div class="max-w-3xl mx-auto p-6 sm:p-10 bg-[#FFFFFF] border border-[rgba(41,37,36,0.22)] shadow-sm">
                <div class="text-center pb-6 mb-6 border-b border-[rgba(41,37,36,0.15)]">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] block mb-1">Specification Ledger</span>
                    <h3 class="classic-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">Estimate Your Architectural Scope</h3>
                </div>

                <div class="space-y-6 font-sans">
                    <div>
                        <div class="flex justify-between items-center mb-2 text-xs">
                            <label for="classic-calc-pages" class="font-mono uppercase text-[#1C1917] tracking-wider">Page Scope:</label>
                            <span id="classic-calc-pages-val" class="font-mono font-bold text-[#1C1917]" style="font-variant-numeric: tabular-nums;">5 Pages</span>
                        </div>
                        <input type="range" id="classic-calc-pages" min="1" max="15" value="5" class="w-full accent-[#1C1917] cursor-pointer">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[rgba(41,37,36,0.12)]">
                        <label class="flex items-center gap-3 p-3 bg-[#FAF8F5] border border-[rgba(41,37,36,0.15)] cursor-pointer text-xs">
                            <input type="checkbox" id="classic-calc-seo" checked class="accent-[#1C1917]">
                            <div>
                                <span class="block font-semibold text-[#1C1917]">Local SEO Foundation</span>
                                <span class="text-[#78716C] text-[10px] font-mono">+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')} one-time</span>
                            </div>
                        </label>

                        <label class="flex items-center gap-3 p-3 bg-[#FAF8F5] border border-[rgba(41,37,36,0.15)] cursor-pointer text-xs">
                            <input type="checkbox" id="classic-calc-maint" class="accent-[#1C1917]">
                            <div>
                                <span class="block font-semibold text-[#1C1917]">Ongoing Maintenance Care</span>
                                <span class="text-[#78716C] text-[10px] font-mono">+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')}/year</span>
                            </div>
                        </label>
                    </div>

                    <div class="pt-6 border-t border-[rgba(41,37,36,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#78716C] block">Estimated Investment</span>
                            <div id="classic-calc-total" class="classic-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]" style="font-variant-numeric: tabular-nums;">
                                ₹35,000
                            </div>
                        </div>
                        <a id="classic-calc-quote-btn" href="/contact?tier=professional" class="w-full sm:w-auto px-8 py-3.5 text-center text-xs font-mono uppercase tracking-widest font-bold bg-[#1C1917] text-[#FAF8F5] hover:bg-[#44403C] transition-colors shadow-sm">
                            Request Quote For This Scope &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <!-- Sourced Scope Disclaimer -->
            <div class="mt-8 text-center text-[11px] text-[#78716C] max-w-2xl mx-auto font-sans">
                Project pricing covers website design &amp; development. Domain, hosting, third-party services and optional ongoing maintenance are quoted separately where applicable.
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER VIII — CORRESPONDENCE (STUDIO INTAKE CHAMBER)                  -->
    <!-- ===================================================================== -->
    <section id="classic-ch8-correspondence" class="classic-chapter py-20 md:py-28 bg-[#F4EFE6] border-b border-[rgba(41,37,36,0.15)]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-8 sm:p-12 bg-[#FFFFFF] border border-[rgba(41,37,36,0.22)] shadow-sm">

                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                    <!-- Left: Studio Intake Narrative -->
                    <div class="md:col-span-6 space-y-4">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block">CHAPTER VIII // CORRESPONDENCE</span>
                        <h2 class="classic-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] leading-snug">
                            Open Correspondence with the Studio
                        </h2>
                        <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                            Enter your current website address below to receive a complimentary technical evaluation of your mobile speed, conversion architecture, and local search structure within 24 hours.
                        </p>

                        <ul class="space-y-2 text-xs text-[#57534E] pt-2 font-sans">
                            <li class="flex items-center gap-2"><span class="text-[#1C1917]">&bull;</span> Speed &amp; Core Web Vitals Audit</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917]">&bull;</span> Direct Conversion Pathway Inspection</li>
                            <li class="flex items-center gap-2"><span class="text-[#1C1917]">&bull;</span> Schema.org &amp; Google Maps Discovery Review</li>
                        </ul>
                    </div>

                    <!-- Right: Direct Submission Form -->
                    <div class="md:col-span-6">
                        <div class="bg-[#FAF8F5] p-6 border border-[rgba(41,37,36,0.18)]">
                            <form id="classic-audit-form" class="space-y-4">
                                <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden" aria-hidden="true">
                                    <input type="text" name="_gotcha" id="classic-audit-gotcha" tabindex="-1" autocomplete="off">
                                </div>

                                <div>
                                    <label for="classic-audit-url" class="block text-xs font-mono uppercase tracking-wider text-[#1C1917] mb-2 font-semibold">
                                        Website Address:
                                    </label>
                                    <input type="url"
                                           id="classic-audit-url"
                                           name="website"
                                           placeholder="https://yourpractice.com"
                                           autocomplete="url"
                                           required
                                           class="w-full px-4 py-3 bg-[#FFFFFF] border border-[rgba(41,37,36,0.22)] text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:ring-1 focus:ring-[#1C1917]">
                                </div>

                                <div id="classic-audit-error" class="hidden text-xs text-red-600 font-medium"></div>

                                <button type="submit" id="classic-audit-submit-btn" class="w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-bold bg-[#1C1917] text-[#FAF8F5] hover:bg-[#44403C] transition-colors border border-[#1C1917]">
                                    Request Technical Evaluation &rarr;
                                </button>
                            </form>

                            <div id="classic-audit-success" class="hidden flex-col items-center justify-center text-center py-6 space-y-2">
                                <span class="text-[#1C1917] classic-serif text-3xl font-bold">&check;</span>
                                <h3 class="classic-serif text-xl font-semibold text-[#1C1917]">Correspondence Received</h3>
                                <p class="text-xs text-[#57534E] leading-relaxed font-sans">
                                    Our studio will inspect your website against Core Web Vitals and local SEO criteria.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER IX — ENQUIRIES & COLOPHON (ACCESSIBLE ACCORDION & IMPRINT)     -->
    <!-- ===================================================================== -->
    <section id="classic-ch9-enquiries" class="classic-chapter py-20 md:py-28 bg-[#FAF8F5]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Chapter Header -->
            <div class="max-w-2xl mb-16">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#78716C] block mb-2">CHAPTER IX // ENQUIRIES</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-[#1C1917] tracking-tight">Frequently Addressed Enquiries</h2>
                <p class="mt-3 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                    Direct answers concerning our engineering standards, commercial terms, and development process.
                </p>
            </div>

            <!-- Classical Accordion List -->
            <div class="space-y-4">
                ${FAQS.map((faq, idx) => `
                <div class="bg-[#FFFFFF] border border-[rgba(41,37,36,0.18)] shadow-sm">
                    <button type="button"
                            class="classic-faq-trigger w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]"
                            aria-expanded="false"
                            aria-controls="classic-faq-ans-${idx}"
                            id="classic-faq-btn-${idx}">
                        <span class="classic-serif text-lg sm:text-xl font-semibold text-[#1C1917] pr-4">
                            &sect; 0${idx + 1}. ${escapeHTML(faq.q)}
                        </span>
                        <span class="classic-faq-icon shrink-0 text-[#1C1917] font-mono text-base transition-transform duration-200">
                            +
                        </span>
                    </button>
                    <div id="classic-faq-ans-${idx}"
                         role="region"
                         aria-labelledby="classic-faq-btn-${idx}"
                         class="classic-faq-panel hidden px-6 pb-6 pt-2 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans border-t border-[rgba(41,37,36,0.1)]">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>
    `;

    const script = `
        // ===================================================================== //
        // 02 CLASSIC EXPERIENCE INTERACTION CONTROLLER                          //
        // Art Direction: Architectural Monograph & Editorial Publication        //
        // ===================================================================== //
        window.initClassicInteractions = function() {
            // 1. Signature Interaction: Live Chapter Folio Counter
            const chapters = document.querySelectorAll('.classic-chapter');
            const folioCounter = document.getElementById('classic-folio-counter');
            const folioNum = document.getElementById('classic-folio-num');
            const folioLabel = document.getElementById('classic-folio-label');

            const chapterDirectory = {
                'classic-ch1-frontispiece': { num: 'FOLIO 01 / 09', label: 'FRONTISPIECE' },
                'classic-ch2-practice': { num: 'FOLIO 02 / 09', label: 'THE PRACTICE' },
                'classic-ch3-portfolio': { num: 'FOLIO 03 / 09', label: 'ARCHIVE' },
                'classic-ch4-directory': { num: 'FOLIO 04 / 09', label: 'DIRECTORY' },
                'classic-ch5-standard': { num: 'FOLIO 05 / 09', label: 'THE STANDARD' },
                'classic-ch6-method': { num: 'FOLIO 06 / 09', label: 'THE METHOD' },
                'classic-ch7-investment': { num: 'FOLIO 07 / 09', label: 'INVESTMENT' },
                'classic-ch8-correspondence': { num: 'FOLIO 08 / 09', label: 'CORRESPONDENCE' },
                'classic-ch9-enquiries': { num: 'FOLIO 09 / 09', label: 'ENQUIRIES' }
            };

            if (folioCounter) {
                let ticking = false;
                const updateFolioVisibility = () => {
                    if (window.scrollY > 160) {
                        folioCounter.classList.remove('opacity-0', 'pointer-events-none');
                        folioCounter.classList.add('opacity-100', 'pointer-events-auto');
                    } else {
                        folioCounter.classList.add('opacity-0', 'pointer-events-none');
                        folioCounter.classList.remove('opacity-100', 'pointer-events-auto');
                    }
                    ticking = false;
                };

                const onScroll = () => {
                    if (!ticking) {
                        window.requestAnimationFrame(updateFolioVisibility);
                        ticking = true;
                    }
                };

                window.addEventListener('scroll', onScroll, { passive: true });
                updateFolioVisibility();

                window.__veloraClassicScrollCleanup = () => {
                    window.removeEventListener('scroll', onScroll);
                };
            }

            if (chapters.length > 0 && folioNum && folioLabel && 'IntersectionObserver' in window) {
                const folioObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const info = chapterDirectory[entry.target.id];
                            if (info) {
                                folioNum.textContent = info.num;
                                folioLabel.textContent = info.label;
                            }
                        }
                    });
                }, { threshold: 0.25 });

                chapters.forEach(ch => folioObserver.observe(ch));
                window.__veloraClassicFolioObserver = folioObserver;
            }

            // 2. Mobile Chapter Drawer Controller
            const menuBtn = document.getElementById('classic-mobile-menu-btn');
            const drawer = document.getElementById('classic-mobile-drawer');
            const burgerPath = document.getElementById('classic-burger-path');
            const burgerText = document.getElementById('classic-burger-text');

            if (menuBtn && drawer) {
                let isOpen = false;

                function toggleMenu(forceState) {
                    isOpen = typeof forceState === 'boolean' ? forceState : !isOpen;
                    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

                    if (isOpen) {
                        drawer.classList.remove('hidden');
                        if (burgerPath) burgerPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                        if (burgerText) burgerText.textContent = 'CLOSE';
                        document.body.style.overflow = 'hidden';
                    } else {
                        drawer.classList.add('hidden');
                        if (burgerPath) burgerPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                        if (burgerText) burgerText.textContent = 'INDEX';
                        document.body.style.overflow = '';
                    }
                }

                menuBtn.addEventListener('click', () => toggleMenu());

                // Close drawer on chapter link click
                const links = drawer.querySelectorAll('a');
                links.forEach(link => {
                    link.addEventListener('click', () => toggleMenu(false));
                });

                // Escape key support
                const onKeyDown = (e) => {
                    if (e.key === 'Escape' && isOpen) {
                        toggleMenu(false);
                        menuBtn.focus();
                    }
                };
                window.addEventListener('keydown', onKeyDown);

                window.__veloraClassicDrawerCleanup = () => {
                    window.removeEventListener('keydown', onKeyDown);
                    document.body.style.overflow = '';
                };
            }

            // 3. Before/After Comparison Plate Wipe
            const container = document.getElementById('classic-before-after-container');
            const afterBg = document.getElementById('classic-after-bg');
            const beforeContent = document.getElementById('classic-before-content');
            const afterContent = document.getElementById('classic-after-content');
            const handle = document.getElementById('classic-slider-handle');

            if (container && afterBg && handle) {
                let isDragging = false;
                let currentPos = 0.85;

                function updatePosition(pct) {
                    currentPos = Math.max(0, Math.min(1, pct));
                    const percentage = currentPos * 100;

                    afterBg.style.clipPath = 'polygon(0 0, ' + percentage + '% 0, ' + percentage + '% 100%, 0 100%)';
                    handle.style.left = percentage + '%';
                    container.setAttribute('aria-valuenow', Math.round(percentage));

                    if (currentPos < 0.45) {
                        beforeContent.style.opacity = '1';
                        afterContent.style.opacity = '0';
                    } else if (currentPos > 0.55) {
                        beforeContent.style.opacity = '0';
                        afterContent.style.opacity = '1';
                    } else {
                        const factor = (currentPos - 0.45) / 0.10;
                        beforeContent.style.opacity = (1 - factor).toFixed(2);
                        afterContent.style.opacity = factor.toFixed(2);
                    }
                }

                function getPointerPct(e) {
                    const rect = container.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    return (clientX - rect.left) / rect.width;
                }

                function onStart(e) {
                    isDragging = true;
                    updatePosition(getPointerPct(e));
                }

                function onMove(e) {
                    if (!isDragging) return;
                    updatePosition(getPointerPct(e));
                }

                function onEnd() {
                    isDragging = false;
                }

                container.addEventListener('mousedown', onStart);
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onEnd);

                container.addEventListener('touchstart', onStart, { passive: true });
                window.addEventListener('touchmove', onMove, { passive: true });
                window.addEventListener('touchend', onEnd);

                container.addEventListener('keydown', function(e) {
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        updatePosition(currentPos - 0.05);
                    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        updatePosition(currentPos + 0.05);
                    } else if (e.key === 'Home') {
                        e.preventDefault();
                        updatePosition(0);
                    } else if (e.key === 'End') {
                        e.preventDefault();
                        updatePosition(1);
                    }
                });

                window.__veloraClassicSliderCleanup = function() {
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mouseup', onEnd);
                    window.removeEventListener('touchmove', onMove);
                    window.removeEventListener('touchend', onEnd);
                };
            }

            // 4. Scope Estimator Ledger
            const pagesInput = document.getElementById('classic-calc-pages');
            const pagesVal = document.getElementById('classic-calc-pages-val');
            const seoInput = document.getElementById('classic-calc-seo');
            const maintInput = document.getElementById('classic-calc-maint');
            const totalDisplay = document.getElementById('classic-calc-total');
            const quoteBtn = document.getElementById('classic-calc-quote-btn');

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
                    quoteBtn.href = '/contact?pages=' + pages + '&seo=' + (seoInput ? seoInput.checked : false) + '&maint=' + (maintInput ? maintInput.checked : false) + '&est=' + total;
                }

                pagesInput.addEventListener('input', recalc);
                if (seoInput) seoInput.addEventListener('change', recalc);
                if (maintInput) maintInput.addEventListener('change', recalc);
                recalc();
            }

            // 5. Correspondence Form Submission
            const auditForm = document.getElementById('classic-audit-form');
            if (auditForm) {
                auditForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    if (typeof window.veloraTrack === 'function') window.veloraTrack('audit_submit');

                    const submitBtn = document.getElementById('classic-audit-submit-btn');
                    if (submitBtn && submitBtn.disabled) return;
                    const errorDiv = document.getElementById('classic-audit-error');
                    const successDiv = document.getElementById('classic-audit-success');
                    const urlInput = document.getElementById('classic-audit-url');
                    const gotchaInput = document.getElementById('classic-audit-gotcha');

                    if (!urlInput || !urlInput.value) return;

                    submitBtn.disabled = true;
                    submitBtn.innerText = 'Analyzing...';
                    errorDiv.classList.add('hidden');
                    errorDiv.innerText = '';

                    try {
                        const res = await fetch('/api/audit', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                website: urlInput.value,
                                _gotcha: gotchaInput ? gotchaInput.value : '',
                                source: 'Classic Monograph Inquiry'
                            })
                        });
                        const data = await res.json();
                        if (data.success) {
                            if (typeof window.veloraTrack === 'function') window.veloraTrack('audit_success');
                            auditForm.classList.add('hidden');
                            successDiv.classList.remove('hidden');
                            successDiv.classList.add('flex');
                        } else {
                            throw new Error(data.message || 'Submission failed');
                        }
                    } catch(err) {
                        if (typeof window.veloraTrack === 'function') window.veloraTrack('audit_error');
                        errorDiv.innerText = err.message || 'Something went wrong. Please try again.';
                        errorDiv.classList.remove('hidden');
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = 'Request Technical Evaluation &rarr;';
                    }
                });
            }

            // 6. Classical FAQ Accordion List
            const triggers = document.querySelectorAll('.classic-faq-trigger');
            triggers.forEach(btn => {
                btn.addEventListener('click', function() {
                    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                    const panelId = btn.getAttribute('aria-controls');
                    const panel = document.getElementById(panelId);
                    const icon = btn.querySelector('.classic-faq-icon');

                    // Collapse all others
                    triggers.forEach(otherBtn => {
                        if (otherBtn !== btn) {
                            otherBtn.setAttribute('aria-expanded', 'false');
                            const otherPanel = document.getElementById(otherBtn.getAttribute('aria-controls'));
                            if (otherPanel) otherPanel.classList.add('hidden');
                            const otherIcon = otherBtn.querySelector('.classic-faq-icon');
                            if (otherIcon) otherIcon.textContent = '+';
                        }
                    });

                    // Toggle current
                    btn.setAttribute('aria-expanded', !isExpanded);
                    if (panel) panel.classList.toggle('hidden', isExpanded);
                    if (icon) icon.textContent = isExpanded ? '+' : '&minus;';
                });
            });
        };

        window.cleanupClassicInteractions = function() {
            if (window.__veloraClassicFolioObserver) {
                window.__veloraClassicFolioObserver.disconnect();
                window.__veloraClassicFolioObserver = null;
            }
            if (typeof window.__veloraClassicScrollCleanup === 'function') {
                window.__veloraClassicScrollCleanup();
                window.__veloraClassicScrollCleanup = null;
            }
            if (typeof window.__veloraClassicDrawerCleanup === 'function') {
                window.__veloraClassicDrawerCleanup();
                window.__veloraClassicDrawerCleanup = null;
            }
            if (typeof window.__veloraClassicSliderCleanup === 'function') {
                window.__veloraClassicSliderCleanup();
                window.__veloraClassicSliderCleanup = null;
            }
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', window.initClassicInteractions);
        } else {
            window.initClassicInteractions();
        }
    `;

    const styles = `
        html[data-experience="classic"] {
            --color-bg: #FAF8F5;
            --color-surface: #FFFFFF;
            --color-card: #F4EFE6;
            --color-card-hover: #ECE5D8;
            --color-border: rgba(41, 37, 36, 0.14);
            --color-border-strong: rgba(41, 37, 36, 0.28);
            --color-text-main: #1C1917;
            --color-text-muted: #57534E;
            --color-faint: rgba(41, 37, 36, 0.04);
            --color-faint-hover: rgba(41, 37, 36, 0.08);
            --color-btn-bg: #1C1917;
            --color-btn-text: #FAF8F5;
            --color-btn-hover: #44403C;
            --color-nav-glass: rgba(250, 248, 245, 0.96);
            --color-accent: #1C1917;
            --color-accent-light: #57534E;
        }

        html[data-experience="classic"] body {
            background-color: #FAF8F5 !important;
            color: #1C1917 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        /* Publication Serif Typography Hierarchy */
        .classic-serif {
            font-family: 'Cormorant Garamond', Georgia, Cambria, 'Times New Roman', Times, serif;
            letter-spacing: -0.015em;
        }

        /* Suppress global floating CTA in Classic to preserve publication purity */
        html[data-experience="classic"] #desktop-floating-cta {
            display: none !important;
        }

        /* Scoped Classical Rules */
        .classic-masthead-link {
            transition: color 0.2s ease;
        }
        .classic-masthead-link:hover {
            color: #1C1917;
        }

        /* Folio Item Hover Restraint */
        .classic-folio-item {
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .classic-folio-item:hover {
            border-color: rgba(41, 37, 36, 0.35);
        }

        /* Directory Ledger Hover */
        .classic-directory-entry {
            transition: border-color 0.25s ease;
        }
        .classic-directory-entry:hover {
            border-color: rgba(41, 37, 36, 0.35);
        }

        /* Schedule Card Alignment */
        .classic-investment-schedule {
            transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .classic-investment-schedule:hover {
            border-color: rgba(41, 37, 36, 0.4);
        }

        /* Mobile Drawer Transition */
        .classic-mobile-drawer {
            animation: classicDrawerEnter 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes classicDrawerEnter {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
            .classic-mobile-drawer {
                animation: none !important;
            }
        }
    `;

    return {
        meta,
        headerContent: ClassicHeader(currentPath),
        mainContent: content,
        footerContent: ClassicFooter(),
        styles,
        script
    };
}

module.exports = {
    renderClassicExperience
};
