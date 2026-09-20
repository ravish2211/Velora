// ============================================================================ //
// VELORA DIGITAL — 05 ATELIER EXPERIENCE PRESENTATION RENDERER                 //
// Art Direction: Physical Creative Workshop · Tactile Workbench · Quiet Luxury //
// Core Principle: Handcrafted Digital Objects with Architectural Care          //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Dedicated Atelier Header (Studio Workshop Masthead Navigation).
 * Renders an artisan studio masthead with workshop imprint, tactile index links,
 * accessible mobile drawer with body scroll lock, and direct commission trigger.
 */
function AtelierHeader(currentPath) {
    const workshopLink = (hash, label, num) => {
        return `<a href="${hash}" class="atelier-nav-link inline-flex items-baseline gap-1 text-xs font-mono uppercase tracking-[0.15em] text-[#5C5349] hover:text-[#1E1B18] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9C4A2F]">
            <span class="text-[9px] text-[#9C4A2F] font-semibold">${num}</span>
            <span>${label}</span>
        </a>`;
    };

    const mobileWorkshopLink = (hash, label, num, desc) => {
        return `<a href="${hash}" class="atelier-mobile-link flex items-baseline justify-between py-3.5 border-b border-[#2C2723]/10 text-[#1E1B18] hover:text-[#9C4A2F] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9C4A2F]">
            <div>
                <span class="atelier-serif text-xl font-medium block">${label}</span>
                <span class="text-[10px] font-mono text-[#7A6F62] uppercase tracking-wider">${desc}</span>
            </div>
            <span class="text-xs font-mono text-[#9C4A2F] font-semibold tracking-widest">${num}</span>
        </a>`;
    };

    return `
    <header class="atelier-masthead sticky top-0 z-50 w-full bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#2C2723]/12 transition-all duration-300" role="banner" aria-label="Studio Workshop Navigation">
        <!-- Top Workshop Imprint Strip (Metadata & Physical Attributes) -->
        <div class="hidden lg:block border-b border-[#2C2723]/8 py-1.5 px-4 sm:px-6 lg:px-8 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7A6F62]">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]" aria-hidden="true"></span>
                    <span>Studio Workshop // Vol. 05 &middot; Handcrafted Digital Objects</span>
                </div>
                <span>Architecture &middot; Local Search &middot; Physical Care</span>
                <span>Gurugram &middot; Delhi NCR &middot; Chandigarh &middot; Bengaluru</span>
            </div>
        </div>

        <!-- Main Studio Masthead Body -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div class="flex items-center justify-between gap-6">

                <!-- Studio Brand Mark -->
                <a href="/" class="flex items-baseline gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9C4A2F]" aria-label="Velora Digital Atelier Homepage">
                    <span class="atelier-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1B18] group-hover:text-[#9C4A2F] transition-colors">VELORA</span>
                    <span class="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.22em] text-[#7A6F62] border-l border-[#2C2723]/20 pl-3">
                        Atelier &middot; Vol. 05
                    </span>
                </a>

                <!-- Desktop Workshop Navigation -->
                <nav class="hidden xl:flex items-center gap-5" aria-label="Studio Workshop Sections">
                    ${workshopLink('#atelier-table', 'Table', '01')}
                    ${workshopLink('#atelier-workbench', 'Workbench', '02')}
                    ${workshopLink('#atelier-folders', 'Folders', '03')}
                    ${workshopLink('#atelier-materials', 'Materials', '04')}
                    ${workshopLink('#atelier-wall', 'Principles', '05')}
                    ${workshopLink('#atelier-making', 'Making', '06')}
                    ${workshopLink('#atelier-rates', 'Rates', '07')}
                </nav>

                <!-- Action Group -->
                <div class="flex items-center gap-3">
                    <a href="#atelier-desk" class="atelier-btn-craft inline-flex items-center justify-center px-4 sm:px-5 py-2 min-h-[40px] text-xs font-mono uppercase tracking-[0.16em] font-semibold bg-[#1E1B18] text-[#FBF9F4] hover:bg-[#9C4A2F] transition-colors border border-[#1E1B18] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F]">
                        <span>Commission Work &rarr;</span>
                    </a>

                    <!-- Mobile Menu Button -->
                    <button id="atelier-mobile-menu-btn"
                            type="button"
                            aria-expanded="false"
                            aria-controls="atelier-mobile-drawer"
                            aria-label="Toggle Atelier Studio Index"
                            class="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded border border-[#2C2723]/20 text-[#1E1B18] hover:text-[#9C4A2F] hover:border-[#9C4A2F] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9C4A2F]">
                        <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path class="atelier-menu-burger" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <!-- Accessible Mobile Drawer -->
        <div id="atelier-mobile-drawer"
             class="hidden xl:hidden bg-[#FBF9F4] border-b border-[#2C2723]/20 px-4 sm:px-6 pt-2 pb-6 shadow-2xl transition-all"
             aria-hidden="true"
             role="region"
             aria-label="Mobile Studio Workshop Index">

            <div class="py-2 border-b border-[#2C2723]/10 text-[10px] font-mono uppercase tracking-widest text-[#9C4A2F] flex justify-between items-center">
                <span>Studio Workshop Index &middot; Vol. 05</span>
                <span>Tactile Digital Practice</span>
            </div>

            <div class="divide-y divide-[#2C2723]/10">
                ${mobileWorkshopLink('#atelier-table', 'The Studio Table', '01', 'Opening Workbench & Material Board')}
                ${mobileWorkshopLink('#atelier-workbench', 'The Workbench', '02', 'Three Core Studio Disciplines')}
                ${mobileWorkshopLink('#atelier-folders', 'Project Folders', '03', 'Three Signature Work Files')}
                ${mobileWorkshopLink('#atelier-materials', 'Material Catalog', '04', 'Specialized Sector Swatches')}
                ${mobileWorkshopLink('#atelier-wall', 'The Wall of Principles', '05', 'Pinned Commitments & Asset Truth')}
                ${mobileWorkshopLink('#atelier-making', 'The Making Sequence', '06', '5-Phase Handcrafted Workflow')}
                ${mobileWorkshopLink('#atelier-rates', 'Commission Rates', '07', 'Transparent Commercial Ledger')}
                ${mobileWorkshopLink('#atelier-desk', 'The Commission Desk', '08', 'Direct Technical Intake')}
                ${mobileWorkshopLink('#atelier-notes', 'Studio Notes', '09', 'Operational Clarifications & FAQs')}
            </div>

            <div class="pt-5 mt-2 flex flex-col gap-2 text-xs font-mono text-[#7A6F62]">
                <div class="flex items-center justify-between py-1 border-b border-[#2C2723]/10">
                    <span>Direct WhatsApp</span>
                    <a href="https://wa.me/${CONFIG.whatsapp}" class="text-[#1E1B18] hover:text-[#9C4A2F] font-semibold">${CONFIG.phone}</a>
                </div>
                <div class="flex items-center justify-between py-1">
                    <span>Direct Studio Email</span>
                    <a href="mailto:${CONFIG.email}" class="text-[#1E1B18] hover:text-[#9C4A2F] font-semibold">${CONFIG.email}</a>
                </div>
            </div>
        </div>
    </header>`;
}

/**
 * Dedicated Atelier Footer (Closing Studio Colophon & Wall).
 * Renders the studio closing colophon with typographic credits, full navigation,
 * legal links, and experience switcher.
 */
function AtelierFooter() {
    return `
    <footer id="atelier-colophon" class="atelier-colophon-bg border-t border-[#2C2723] pt-16 pb-14 transition-colors" role="contentinfo" aria-label="Studio Colophon">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <!-- Colophon Top Banner -->
            <div class="border-b border-[#FBF9F4]/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D97757] font-semibold block mb-2">COLOPHON &middot; STUDIO ATELIER // VOL. 05</span>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF9F4]">
                        Velora Digital &middot; Boutique Web Studio
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#B0A695] max-w-md leading-relaxed text-pretty">
                    An authoritative record of physical craftsmanship translated into clean, lightweight web architectures and high-trust local search systems.
                </p>
            </div>

            <!-- Colophon Four-Column Directory Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-mono">
                <!-- Col 1: Disciplines -->
                <div class="space-y-4">
                    <div class="text-[11px] uppercase tracking-[0.2em] text-[#D97757] font-semibold border-b border-[#FBF9F4]/15 pb-2">
                        Studio Disciplines
                    </div>
                    <ul class="space-y-2.5 text-[#B0A695]">
                        <li><a href="/services/website-design" class="hover:text-[#FBF9F4] transition-colors">01. Website Architecture &amp; Craft</a></li>
                        <li><a href="/services/local-seo" class="hover:text-[#FBF9F4] transition-colors">02. Local SEO Foundations</a></li>
                        <li><a href="/services/website-maintenance" class="hover:text-[#FBF9F4] transition-colors">03. Continuous Maintenance &amp; Care</a></li>
                        <li><a href="/portfolio" class="hover:text-[#FBF9F4] transition-colors">04. Signature Project Archive</a></li>
                    </ul>
                </div>

                <!-- Col 2: Sectors -->
                <div class="space-y-4">
                    <div class="text-[11px] uppercase tracking-[0.2em] text-[#D97757] font-semibold border-b border-[#FBF9F4]/15 pb-2">
                        Practice Sectors
                    </div>
                    <ul class="space-y-2.5 text-[#B0A695]">
                        <li><a href="/industries/clinics" class="hover:text-[#FBF9F4] transition-colors">Clinics &amp; Medical Practices</a></li>
                        <li><a href="/industries/real-estate" class="hover:text-[#FBF9F4] transition-colors">Real Estate &amp; Estates Advisory</a></li>
                        <li><a href="/industries/restaurants" class="hover:text-[#FBF9F4] transition-colors">Culinary Rooms &amp; Hospitality</a></li>
                        <li><a href="/industries/salons" class="hover:text-[#FBF9F4] transition-colors">Salons, Spas &amp; Wellness</a></li>
                    </ul>
                </div>

                <!-- Col 3: Studio Footprint & Direct Contact -->
                <div class="space-y-4">
                    <div class="text-[11px] uppercase tracking-[0.2em] text-[#D97757] font-semibold border-b border-[#FBF9F4]/15 pb-2">
                        Studio Footprint
                    </div>
                    <div class="space-y-2 text-[#B0A695]">
                        <p>Serving Commercial Clients Across:</p>
                        <p class="text-[#FBF9F4]">Gurugram &middot; Delhi NCR &middot; Chandigarh &middot; Bengaluru</p>
                        <div class="pt-2 border-t border-[#FBF9F4]/10 space-y-1">
                            <p>Direct Phone: <a href="tel:${CONFIG.phone.replace(/\\s+/g, '')}" class="text-[#FBF9F4] hover:text-[#D97757]">${CONFIG.phone}</a></p>
                            <p>Studio Email: <a href="mailto:${CONFIG.email}" class="text-[#FBF9F4] hover:text-[#D97757]">${CONFIG.email}</a></p>
                        </div>
                    </div>
                </div>

                <!-- Col 4: Operational Commitments -->
                <div class="space-y-4">
                    <div class="text-[11px] uppercase tracking-[0.2em] text-[#D97757] font-semibold border-b border-[#FBF9F4]/15 pb-2">
                        Studio Commitments
                    </div>
                    <ul class="space-y-2 text-[#B0A695]">
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span><span>Zero Framework Runtime Bloat</span></li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span><span>100% Client Code &amp; Domain Rights</span></li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span><span>Direct WhatsApp &amp; Phone Triggers</span></li>
                        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span><span>WCAG 2.1 AA Compliant Structure</span></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Imprint & Experience Switcher Row -->
            <div class="pt-8 border-t border-[#FBF9F4]/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-[#B0A695]">
                <div>
                    &copy; 2026 Velora Digital. All rights reserved. &middot; <a href="/privacy-policy" class="hover:text-[#FBF9F4] underline">Privacy Policy</a> &middot; <a href="/terms" class="hover:text-[#FBF9F4] underline">Terms of Service</a>
                </div>

                <!-- Studio Experience System Switcher -->
                <div class="flex flex-wrap items-center gap-2" aria-label="Studio Experience Modes">
                    <span class="text-[10px] uppercase tracking-widest text-[#7A6F62] mr-1">Experience:</span>
                    <a href="/?exp=architect" class="px-2 py-1 bg-[#2C2723] hover:bg-[#3C3530] text-[#B0A695] hover:text-[#FBF9F4] border border-[#FBF9F4]/10 transition-colors">01 Architect</a>
                    <a href="/?exp=classic" class="px-2 py-1 bg-[#2C2723] hover:bg-[#3C3530] text-[#B0A695] hover:text-[#FBF9F4] border border-[#FBF9F4]/10 transition-colors">02 Classic</a>
                    <a href="/?exp=editorial" class="px-2 py-1 bg-[#2C2723] hover:bg-[#3C3530] text-[#B0A695] hover:text-[#FBF9F4] border border-[#FBF9F4]/10 transition-colors">03 Editorial</a>
                    <a href="/?exp=modern" class="px-2 py-1 bg-[#2C2723] hover:bg-[#3C3530] text-[#B0A695] hover:text-[#FBF9F4] border border-[#FBF9F4]/10 transition-colors">04 Modern</a>
                    <span class="px-2 py-1 bg-[#9C4A2F] text-[#FBF9F4] font-semibold border border-[#9C4A2F]">05 Atelier</span>
                    <a href="/?exp=noir" class="px-2 py-1 bg-[#2C2723] hover:bg-[#3C3530] text-[#B0A695] hover:text-[#FBF9F4] border border-[#FBF9F4]/10 transition-colors">06 Noir</a>
                </div>
            </div>

        </div>
    </footer>`;
}

/**
 * Main Atelier Experience Renderer.
 * Generates the full SSR HTML, Scoped CSS, and Interactive Client Script.
 */
function renderAtelierExperience(currentPath = "/") {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics' || p.id === 'aurora-clinic') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates' || p.id === 'aarav-properties') || PORTFOLIO[1];
    const spice = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Atelier — Handcrafted Web Architecture & Local SEO Studio',
        description: 'Velora Digital Atelier is an independent web design and local SEO workshop engineering tactile, ultra-fast websites for clinics, estate practices, culinary rooms, and professional services.',
        schema: generateSchema('Organization')
    };

    const content = `
    <!-- ================================================================= -->
    <!-- ZONE 01: THE STUDIO TABLE (OPENING WORKBENCH & MATERIAL BOARD)    -->
    <!-- ================================================================= -->
    <section id="atelier-table" class="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 bg-[#F5F2EB] text-[#1E1B18] border-b border-[#2C2723]/15 overflow-hidden">

        <!-- Physical Measurement Scale Ruler along top of table -->
        <div class="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-[9px] font-mono uppercase tracking-[0.25em] text-[#7A6F62]/70 border-b border-[#2C2723]/10">
            <span>[ WORKBENCH 01 // SCALE 1:1 ]</span>
            <span class="hidden lg:inline">0mm ········· 25mm ········· 50mm ········· 75mm ········· 100mm</span>
            <span>SSR 200 &middot; ₹0 RUNTIME FRAMEWORKS &middot; 100% ASSET OWNERSHIP</span>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <!-- Left Spatial Composition: Studio Manifesto & Core Calls -->
                <div class="lg:col-span-7 space-y-8 atelier-reveal">

                    <!-- Tactile Studio Tag -->
                    <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#EFECE4] border border-[#2C2723]/18 text-xs font-mono uppercase tracking-[0.18em] text-[#1E1B18] shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-[#9C4A2F]" aria-hidden="true"></span>
                        <span>ATELIER VOL. 05 &middot; PHYSICAL DIGITAL WORKSHOP</span>
                    </div>

                    <!-- Primary Workshop Statement -->
                    <h1 class="atelier-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E1B18] leading-[1.05] text-balance">
                        Digital Objects Shaped with <span class="italic text-[#9C4A2F] font-normal">Physical Care</span> &amp; Architectural Restraint.
                    </h1>

                    <!-- Grounded Narrative -->
                    <p class="text-base sm:text-lg text-[#5C5349] leading-relaxed max-w-2xl text-pretty font-sans">
                        Velora is an independent digital workshop engineering tactile, lightweight websites and localized search foundations for clinics, real estate advisory practices, culinary rooms, and professional consultancies. We eliminate bloated page builders and corporate template coldness to produce enduring digital craft.
                    </p>

                    <!-- Primary Action Triggers -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <a href="#atelier-desk" class="atelier-btn-craft px-7 py-3.5 text-center text-xs font-mono uppercase tracking-[0.18em] font-semibold bg-[#1E1B18] text-[#FBF9F4] hover:bg-[#9C4A2F] transition-colors border border-[#1E1B18] shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F]">
                            Commission a Web System &rarr;
                        </a>
                        <a href="#atelier-folders" class="px-7 py-3.5 text-center text-xs font-mono uppercase tracking-[0.18em] font-semibold bg-[#EFECE4] text-[#1E1B18] hover:bg-[#FBF9F4] transition-colors border border-[#2C2723]/20 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1B18]">
                            Examine Workshop Files &darr;
                        </a>
                    </div>

                    <!-- Grounded Studio Practice Signals -->
                    <div class="pt-6 border-t border-[#2C2723]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#7A6F62]">
                        <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                            <span>Direct Founder Oversight</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                            <span>Native Node.js SSR</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                            <span>100% Code &amp; Domain Rights</span>
                        </div>
                    </div>

                </div>

                <!-- Right Spatial Composition: Tactile Material Board & Architectural Specimen -->
                <div class="lg:col-span-5 space-y-6 atelier-reveal">

                    <!-- Architectural Specimen Sheet (Paper layer with drafting tape effect) -->
                    <div class="atelier-paper-sheet relative bg-[#FBF9F4] border border-[#2C2723]/20 p-6 sm:p-8 atelier-shadow space-y-6">

                        <!-- Pinned Tape Mark Graphic -->
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#EFECE4]/90 border-x border-[#2C2723]/20 shadow-xs rotate-[-1deg]" aria-hidden="true"></div>

                        <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-4">
                            <div>
                                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-semibold block">TACTILE MATERIAL BOARD</span>
                                <span class="atelier-serif text-lg font-bold text-[#1E1B18]">Natural Palettes &amp; Physical Craft</span>
                            </div>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] text-[#1E1B18] border border-[#2C2723]/20 uppercase">
                                Sample Ref. 05
                            </span>
                        </div>

                        <!-- Interactive Swatch Selector Buttons -->
                        <div class="space-y-3">
                            <label class="text-[10px] font-mono uppercase tracking-widest text-[#7A6F62] block">Select Workshop Material Sample:</label>
                            <div class="atelier-swatch-grid" role="tablist" aria-label="Tactile Material Swatches">
                                <button type="button"
                                        role="tab"
                                        aria-selected="true"
                                        aria-controls="atelier-material-panel"
                                        data-swatch="linen"
                                        data-title="Fine Linen &amp; Warm Parchment"
                                        data-hex="#FBF9F4"
                                        data-desc="Natural unbleached paper texture offering quiet visual warmth, high textual contrast, and zero artificial gloss."
                                        data-tactile="Dense paper weight with soft micro-texture"
                                        class="atelier-swatch-btn is-active p-2 rounded border border-[#2C2723]/30 bg-[#FBF9F4] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F] transition-all">
                                    <span class="block w-6 h-6 mx-auto rounded-full bg-[#F5F2EB] border border-[#2C2723]/30 mb-1"></span>
                                    <span class="text-[9px] font-mono uppercase text-[#1E1B18] block font-bold">Linen</span>
                                </button>

                                <button type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="atelier-material-panel"
                                        data-swatch="charcoal"
                                        data-title="Smoked Charcoal &amp; Drafting Ink"
                                        data-hex="#24211E"
                                        data-desc="Deep mineral carbon providing authoritative typographic hierarchy, permanent legibility, and architectural precision."
                                        data-tactile="Matte ink saturation on unpressed board"
                                        class="atelier-swatch-btn p-2 rounded border border-[#2C2723]/20 bg-[#EFECE4] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F] transition-all">
                                    <span class="block w-6 h-6 mx-auto rounded-full bg-[#24211E] border border-black mb-1"></span>
                                    <span class="text-[9px] font-mono uppercase text-[#5C5349] block">Ink</span>
                                </button>

                                <button type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="atelier-material-panel"
                                        data-swatch="terracotta"
                                        data-title="Raw Terracotta &amp; Clay"
                                        data-hex="#9C4A2F"
                                        data-desc="Earthy, ceramic warmth calibrated to guide high-intent commercial contact triggers without synthetic neon aggression."
                                        data-tactile="Fired unglazed clay with warm undertones"
                                        class="atelier-swatch-btn p-2 rounded border border-[#2C2723]/20 bg-[#EFECE4] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F] transition-all">
                                    <span class="block w-6 h-6 mx-auto rounded-full bg-[#9C4A2F] border border-[#7C361E] mb-1"></span>
                                    <span class="text-[9px] font-mono uppercase text-[#5C5349] block">Clay</span>
                                </button>

                                <button type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="atelier-material-panel"
                                        data-swatch="sage"
                                        data-title="Mineral Sage &amp; Olive"
                                        data-hex="#5E6B56"
                                        data-desc="Botanical mineral calm engineered for clinical and aesthetic practices requiring reassuring trust and spatial serenity."
                                        data-tactile="Smooth river stone and crushed pigment"
                                        class="atelier-swatch-btn p-2 rounded border border-[#2C2723]/20 bg-[#EFECE4] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F] transition-all">
                                    <span class="block w-6 h-6 mx-auto rounded-full bg-[#5E6B56] border border-[#44503E] mb-1"></span>
                                    <span class="text-[9px] font-mono uppercase text-[#5C5349] block">Sage</span>
                                </button>
                            </div>
                        </div>

                        <!-- Dynamic Material Specification Panel -->
                        <div id="atelier-material-panel" class="p-4 bg-[#EFECE4] border border-[#2C2723]/15 rounded space-y-2.5" role="region" aria-live="polite">
                            <div class="flex items-center justify-between text-xs font-mono">
                                <span id="atelier-mat-title" class="font-bold text-[#1E1B18]">Fine Linen &amp; Warm Parchment</span>
                                <span id="atelier-mat-hex" class="px-1.5 py-0.5 bg-[#FBF9F4] border border-[#2C2723]/15 text-[#9C4A2F] text-[10px]">#FBF9F4</span>
                            </div>
                            <p id="atelier-mat-desc" class="text-xs font-sans text-[#5C5349] leading-relaxed">
                                Natural unbleached paper texture offering quiet visual warmth, high textual contrast, and zero artificial gloss.
                            </p>
                            <div class="pt-2 border-t border-[#2C2723]/10 flex items-center justify-between text-[10px] font-mono text-[#7A6F62]">
                                <span>Tactile Property:</span>
                                <span id="atelier-mat-tactile" class="font-semibold text-[#1E1B18]">Dense paper weight with soft micro-texture</span>
                            </div>
                        </div>

                        <!-- Specimen Footer Meta -->
                        <div class="pt-2 flex items-center justify-between text-[10px] font-mono text-[#7A6F62]">
                            <span>Foundational Baseline:</span>
                            <span class="text-[#1E1B18] font-bold">Essential Tier from ₹14,999</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 02: THE WORKBENCH (THREE CANONICAL DISCIPLINES)              -->
    <!-- ================================================================= -->
    <section id="atelier-workbench" class="py-20 sm:py-28 bg-[#EFECE4] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <!-- Section Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>THE WORKBENCH // THREE CORE DISCIPLINES</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        Three Crafts Practiced with Deliberate Rigour.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#5C5349] max-w-md leading-relaxed text-pretty">
                    We assemble zero generic templates from visual page builders. Every discipline is crafted as an engineered digital object built to win local search and convert high-intent enquiries.
                </p>
            </div>

            <!-- Workbench Workpieces (Three spatial physical pieces) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                <!-- Workpiece 01: Website Architecture & Craft -->
                <div class="atelier-workpiece bg-[#FBF9F4] border border-[#2C2723]/20 p-8 atelier-shadow flex flex-col justify-between space-y-8 transition-transform duration-300 atelier-reveal">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">DISCIPLINE 01 // ARCHITECTURE</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] border border-[#2C2723]/15 text-[#5C5349]">${escapeHTML(SERVICES[0].timeline)}</span>
                        </div>
                        <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                            ${escapeHTML(SERVICES[0].title)}
                        </h3>
                        <p class="text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed">
                            ${escapeHTML(SERVICES[0].short)}
                        </p>

                        <div class="space-y-2 pt-4 border-t border-[#2C2723]/12">
                            <div class="text-[10px] font-mono uppercase tracking-wider text-[#7A6F62] font-semibold">Canonical Deliverables:</div>
                            <ul class="space-y-2 text-xs font-sans text-[#5C5349]">
                                ${(SERVICES[0].benefits || []).slice(0, 5).map(b => `
                                <li class="flex items-start gap-2">
                                    <span class="text-[#9C4A2F] font-bold mt-0.5">&check;</span>
                                    <span>${escapeHTML(b)}</span>
                                </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-[#2C2723]/15 flex items-center justify-between">
                        <a href="/services/website-design" class="text-xs font-mono uppercase tracking-wider text-[#9C4A2F] font-bold hover:underline inline-flex items-center gap-1">
                            <span>Examine Specification</span>
                            <span>&rarr;</span>
                        </a>
                        <span class="text-[10px] font-mono text-[#7A6F62]">Foundation</span>
                    </div>
                </div>

                <!-- Workpiece 02: Local SEO Foundations -->
                <div class="atelier-workpiece bg-[#FBF9F4] border border-[#2C2723]/20 p-8 atelier-shadow flex flex-col justify-between space-y-8 transition-transform duration-300 atelier-reveal">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">DISCIPLINE 02 // SEARCH FOUNDATIONS</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] border border-[#2C2723]/15 text-[#5C5349]">1 to 2 Weeks (Built-In)</span>
                        </div>
                        <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                            ${escapeHTML(SERVICES[1].title)}
                        </h3>
                        <p class="text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed">
                            ${escapeHTML(SERVICES[1].short)}
                        </p>

                        <div class="space-y-2 pt-4 border-t border-[#2C2723]/12">
                            <div class="text-[10px] font-mono uppercase tracking-wider text-[#7A6F62] font-semibold">Canonical Deliverables:</div>
                            <ul class="space-y-2 text-xs font-sans text-[#5C5349]">
                                ${(SERVICES[1].benefits || []).slice(0, 5).map(b => `
                                <li class="flex items-start gap-2">
                                    <span class="text-[#9C4A2F] font-bold mt-0.5">&check;</span>
                                    <span>${escapeHTML(b)}</span>
                                </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-[#2C2723]/15 flex items-center justify-between">
                        <a href="/services/local-seo" class="text-xs font-mono uppercase tracking-wider text-[#9C4A2F] font-bold hover:underline inline-flex items-center gap-1">
                            <span>Examine Specification</span>
                            <span>&rarr;</span>
                        </a>
                        <span class="text-[10px] font-mono text-[#7A6F62]">Discovery</span>
                    </div>
                </div>

                <!-- Workpiece 03: Website Maintenance & Care -->
                <div class="atelier-workpiece bg-[#FBF9F4] border border-[#2C2723]/20 p-8 atelier-shadow flex flex-col justify-between space-y-8 transition-transform duration-300 atelier-reveal">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">DISCIPLINE 03 // STEWARDSHIP</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] border border-[#2C2723]/15 text-[#5C5349]">Continuous Care</span>
                        </div>
                        <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                            ${escapeHTML(SERVICES[2].title)}
                        </h3>
                        <p class="text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed">
                            ${escapeHTML(SERVICES[2].short)}
                        </p>

                        <div class="space-y-2 pt-4 border-t border-[#2C2723]/12">
                            <div class="text-[10px] font-mono uppercase tracking-wider text-[#7A6F62] font-semibold">Canonical Deliverables:</div>
                            <ul class="space-y-2 text-xs font-sans text-[#5C5349]">
                                ${(SERVICES[2].benefits || []).slice(0, 5).map(b => `
                                <li class="flex items-start gap-2">
                                    <span class="text-[#9C4A2F] font-bold mt-0.5">&check;</span>
                                    <span>${escapeHTML(b)}</span>
                                </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-[#2C2723]/15 flex items-center justify-between">
                        <a href="/services/website-maintenance" class="text-xs font-mono uppercase tracking-wider text-[#9C4A2F] font-bold hover:underline inline-flex items-center gap-1">
                            <span>Examine Specification</span>
                            <span>&rarr;</span>
                        </a>
                        <span class="text-[10px] font-mono text-[#7A6F62]">Continuous</span>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 03: THE PROJECT FOLDERS (PORTFOLIO ARCHIVE WORK FILES)        -->
    <!-- ================================================================= -->
    <section id="atelier-folders" class="py-20 sm:py-28 bg-[#F5F2EB] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <!-- Section Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>STUDIO ARCHIVE // THREE SIGNATURE FOLDERS</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        Project Files from the Workshop Floor.
                    </h2>
                </div>
                <div class="text-xs font-mono text-[#7A6F62] space-y-1">
                    <div>Authentic Architectural Concepts</div>
                    <div class="text-[#9C4A2F] font-semibold">Zero Invented Metric Claims</div>
                </div>
            </div>

            <!-- Folder Tabs Controller -->
            <div class="flex flex-wrap gap-2 sm:gap-3 border-b border-[#2C2723]/15 pb-4" role="tablist" aria-label="Project Folders">
                <button type="button"
                        role="tab"
                        id="folder-tab-0"
                        aria-selected="true"
                        aria-controls="folder-panel-0"
                        class="atelier-folder-tab is-active px-5 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#2C2723]/25 bg-[#FBF9F4] text-[#1E1B18] font-bold shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F]">
                    <span class="text-[#9C4A2F] mr-1.5">01</span> Aurora Clinic &middot; Healthcare
                </button>
                <button type="button"
                        role="tab"
                        id="folder-tab-1"
                        aria-selected="false"
                        aria-controls="folder-panel-1"
                        class="atelier-folder-tab px-5 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#2C2723]/20 bg-[#EFECE4] text-[#5C5349] hover:bg-[#FBF9F4] hover:text-[#1E1B18] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F]">
                    <span class="text-[#7A6F62] mr-1.5">02</span> Aarav Properties &middot; Real Estate
                </button>
                <button type="button"
                        role="tab"
                        id="folder-tab-2"
                        aria-selected="false"
                        aria-controls="folder-panel-2"
                        class="atelier-folder-tab px-5 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#2C2723]/20 bg-[#EFECE4] text-[#5C5349] hover:bg-[#FBF9F4] hover:text-[#1E1B18] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F]">
                    <span class="text-[#7A6F62] mr-1.5">03</span> The Spice Room &middot; Hospitality
                </button>
            </div>

            <!-- Project Folder Panels -->
            <div class="space-y-8">

                <!-- FOLDER 01: Aurora Clinic -->
                <div id="folder-panel-0" class="atelier-folder-panel bg-[#FBF9F4] border border-[#2C2723]/25 p-8 sm:p-12 atelier-shadow-deep space-y-8" role="tabpanel" aria-labelledby="folder-tab-0">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        <div class="lg:col-span-7 space-y-6">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#EFECE4] border border-[#2C2723]/20 text-[#9C4A2F] font-semibold">
                                    ${escapeHTML(aurora.type || 'Signature Design Concept')}
                                </span>
                                <span class="text-xs font-mono text-[#7A6F62]">${escapeHTML(aurora.industry)}</span>
                            </div>

                            <h3 class="atelier-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
                                ${escapeHTML(aurora.title)}
                            </h3>

                            <p class="text-sm font-sans text-[#5C5349] leading-relaxed">
                                ${escapeHTML(aurora.summary)}
                            </p>

                            <div class="p-5 bg-[#EFECE4] border border-[#2C2723]/15 rounded space-y-2">
                                <div class="text-[10px] font-mono uppercase tracking-wider text-[#9C4A2F] font-bold">Design Rationale &amp; Tactile Execution:</div>
                                <p class="text-xs font-sans text-[#1E1B18] leading-relaxed">${escapeHTML(aurora.designDirection)}</p>
                            </div>

                            <div class="pt-4 border-t border-[#2C2723]/12">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9C4A2F] font-bold hover:underline">
                                    <span>Examine Complete Case Dossier</span>
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <!-- Right Folder Specimen: Clinical Structure -->
                        <div class="lg:col-span-5 bg-[#24211E] text-[#F5F2EB] border border-black p-6 sm:p-8 atelier-shadow space-y-6">
                            <div class="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-4">
                                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D97757]">DOSSIER 01 / CLINICAL</span>
                                <span class="text-[10px] font-mono text-[#A89F91]">WCAG 2.1 AA</span>
                            </div>

                            <div class="space-y-4">
                                <div class="text-xs font-mono text-[#D97757] uppercase tracking-wider">Dr. Alisha Verma, MD &middot; Chief Dermatologist</div>
                                <p class="text-xs font-sans text-[#A89F91] leading-relaxed">
                                    Transparent treatment rate schedules, doctor qualification credentials, and zero-PDF structured service accordions.
                                </p>
                            </div>

                            <div class="pt-4 border-t border-[#F5F2EB]/15 space-y-2 text-xs font-mono text-[#A89F91]">
                                <div class="text-[10px] uppercase tracking-wider text-[#D97757] font-semibold">Deliverables Included:</div>
                                ${(aurora.deliverables || []).map(d => `
                                <div class="flex items-center gap-2">
                                    <span class="w-1 h-1 rounded-full bg-[#D97757]"></span>
                                    <span>${escapeHTML(d)}</span>
                                </div>
                                `).join('')}
                            </div>

                            <div class="pt-4 border-t border-[#F5F2EB]/15 flex items-center justify-between text-[10px] font-mono text-[#A89F91]">
                                <span>Structured Markup:</span>
                                <span class="text-[#F5F2EB] font-bold">MedicalBusiness Schema</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- FOLDER 02: Aarav Properties -->
                <div id="folder-panel-1" class="atelier-folder-panel hidden bg-[#FBF9F4] border border-[#2C2723]/25 p-8 sm:p-12 atelier-shadow-deep space-y-8" role="tabpanel" aria-labelledby="folder-tab-1">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        <div class="lg:col-span-7 space-y-6">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#EFECE4] border border-[#2C2723]/20 text-[#9C4A2F] font-semibold">
                                    ${escapeHTML(aarav.type || 'Signature Design Concept')}
                                </span>
                                <span class="text-xs font-mono text-[#7A6F62]">${escapeHTML(aarav.industry)}</span>
                            </div>

                            <h3 class="atelier-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
                                ${escapeHTML(aarav.title)}
                            </h3>

                            <p class="text-sm font-sans text-[#5C5349] leading-relaxed">
                                ${escapeHTML(aarav.summary)}
                            </p>

                            <div class="p-5 bg-[#EFECE4] border border-[#2C2723]/15 rounded space-y-2">
                                <div class="text-[10px] font-mono uppercase tracking-wider text-[#9C4A2F] font-bold">Design Rationale &amp; Tactile Execution:</div>
                                <p class="text-xs font-sans text-[#1E1B18] leading-relaxed">${escapeHTML(aarav.designDirection)}</p>
                            </div>

                            <div class="pt-4 border-t border-[#2C2723]/12">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9C4A2F] font-bold hover:underline">
                                    <span>Examine Complete Case Dossier</span>
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <!-- Right Folder Specimen: Real Estate Spec -->
                        <div class="lg:col-span-5 bg-[#24211E] text-[#F5F2EB] border border-black p-6 sm:p-8 atelier-shadow space-y-6">
                            <div class="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-4">
                                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D97757]">DOSSIER 02 / REAL ESTATE</span>
                                <span class="text-[10px] font-mono text-[#A89F91]">RERA STRUCTURE</span>
                            </div>

                            <div class="space-y-4">
                                <div class="text-xs font-mono text-[#D97757] uppercase tracking-wider">Floor Plan Viewer &middot; Golf Course Road Corridors</div>
                                <p class="text-xs font-sans text-[#A89F91] leading-relaxed">
                                    Structured residential unit catalog, downloadable architectural floor plans, and direct broker lead routing without portal commissions.
                                </p>
                            </div>

                            <div class="pt-4 border-t border-[#F5F2EB]/15 space-y-2 text-xs font-mono text-[#A89F91]">
                                <div class="text-[10px] uppercase tracking-wider text-[#D97757] font-semibold">Deliverables Included:</div>
                                ${(aarav.deliverables || []).map(d => `
                                <div class="flex items-center gap-2">
                                    <span class="w-1 h-1 rounded-full bg-[#D97757]"></span>
                                    <span>${escapeHTML(d)}</span>
                                </div>
                                `).join('')}
                            </div>

                            <div class="pt-4 border-t border-[#F5F2EB]/15 flex items-center justify-between text-[10px] font-mono text-[#A89F91]">
                                <span>Structured Markup:</span>
                                <span class="text-[#F5F2EB] font-bold">RealEstateAgent Schema</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- FOLDER 03: The Spice Room -->
                <div id="folder-panel-2" class="atelier-folder-panel hidden bg-[#FBF9F4] border border-[#2C2723]/25 p-8 sm:p-12 atelier-shadow-deep space-y-8" role="tabpanel" aria-labelledby="folder-tab-2">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        <div class="lg:col-span-7 space-y-6">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#EFECE4] border border-[#2C2723]/20 text-[#9C4A2F] font-semibold">
                                    ${escapeHTML(spice.type || 'Signature Design Concept')}
                                </span>
                                <span class="text-xs font-mono text-[#7A6F62]">${escapeHTML(spice.industry)}</span>
                            </div>

                            <h3 class="atelier-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
                                ${escapeHTML(spice.title)}
                            </h3>

                            <p class="text-sm font-sans text-[#5C5349] leading-relaxed">
                                ${escapeHTML(spice.summary)}
                            </p>

                            <div class="p-5 bg-[#EFECE4] border border-[#2C2723]/15 rounded space-y-2">
                                <div class="text-[10px] font-mono uppercase tracking-wider text-[#9C4A2F] font-bold">Design Rationale &amp; Tactile Execution:</div>
                                <p class="text-xs font-sans text-[#1E1B18] leading-relaxed">${escapeHTML(spice.designDirection)}</p>
                            </div>

                            <div class="pt-4 border-t border-[#2C2723]/12">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9C4A2F] font-bold hover:underline">
                                    <span>Examine Complete Case Dossier</span>
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <!-- Right Folder Specimen: Hospitality Spec -->
                        <div class="lg:col-span-5 bg-[#24211E] text-[#F5F2EB] border border-black p-6 sm:p-8 atelier-shadow space-y-6">
                            <div class="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-4">
                                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D97757]">DOSSIER 03 / HOSPITALITY</span>
                                <span class="text-[10px] font-mono text-[#A89F91]">ZERO-PDF ARCHITECTURE</span>
                            </div>

                            <div class="space-y-4">
                                <div class="text-xs font-mono text-[#D97757] uppercase tracking-wider">Instant Mobile HTML Menu &middot; Direct Table Reservations</div>
                                <p class="text-xs font-sans text-[#A89F91] leading-relaxed">
                                    Native HTML menu eliminating 15MB PDF downloads, frictionless table booking pathways, and 1-tap Google Maps directions.
                                </p>
                            </div>

                            <div class="pt-4 border-t border-[#F5F2EB]/15 space-y-2 text-xs font-mono text-[#A89F91]">
                                <div class="text-[10px] uppercase tracking-wider text-[#D97757] font-semibold">Deliverables Included:</div>
                                ${(spice.deliverables || []).map(d => `
                                <div class="flex items-center gap-2">
                                    <span class="w-1 h-1 rounded-full bg-[#D97757]"></span>
                                    <span>${escapeHTML(d)}</span>
                                </div>
                                `).join('')}
                            </div>

                            <div class="pt-4 border-t border-[#F5F2EB]/15 flex items-center justify-between text-[10px] font-mono text-[#A89F91]">
                                <span>Structured Markup:</span>
                                <span class="text-[#F5F2EB] font-bold">Restaurant Schema.org</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 04: MATERIAL & SECTOR INDEX (PINBOARD CATALOGUE)             -->
    <!-- ================================================================= -->
    <section id="atelier-materials" class="py-20 sm:py-28 bg-[#EFECE4] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>PRACTICE DIRECTORY // FOUR HIGH-TRUST SECTORS</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        Material References for Specialized Commercial Sectors.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#5C5349] max-w-md leading-relaxed text-pretty">
                    We concentrate exclusively on four sectors where trust, immediate proximity, and friction-free direct contact define commercial viability.
                </p>
            </div>

            <!-- Sector Pinboard Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${INDUSTRIES.map((ind, idx) => `
                <div class="atelier-sector-card bg-[#FBF9F4] border border-[#2C2723]/20 p-7 flex flex-col justify-between space-y-6 atelier-shadow transition-all duration-300 atelier-reveal">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-3">
                            <span class="text-2xl" aria-hidden="true">${ind.icon || '🏢'}</span>
                            <span class="text-[10px] font-mono text-[#9C4A2F] uppercase font-bold">REF. 0${idx + 1}</span>
                        </div>
                        <h3 class="atelier-serif text-2xl font-bold text-[#1E1B18]">
                            ${escapeHTML(ind.name)}
                        </h3>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            ${escapeHTML(ind.desc)}
                        </p>

                        <div class="pt-3 border-t border-[#2C2723]/10 space-y-1.5">
                            <div class="text-[10px] font-mono uppercase tracking-wider text-[#7A6F62] font-semibold">Critical Conversion Priority:</div>
                            <div class="text-xs font-sans text-[#1E1B18] font-medium">${escapeHTML(ind.conversionElements ? ind.conversionElements[0] : 'Direct Lead Routing')}</div>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-[#2C2723]/10 flex items-center justify-between text-[11px] font-mono">
                        <a href="/industries/${ind.slug}" class="text-[#9C4A2F] font-bold hover:underline">View Guidelines &rarr;</a>
                        <span class="text-[#7A6F62]">${idx === 0 ? 'Broker WhatsApp' : idx === 1 ? 'HTML Menus' : idx === 2 ? 'Doctor Trust' : 'Service Rates'}</span>
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 05: THE WALL OF PRINCIPLES (PINNED COMMITMENTS)              -->
    <!-- ================================================================= -->
    <section id="atelier-wall" class="py-20 sm:py-28 bg-[#24211E] text-[#FBF9F4] border-b border-[#2C2723] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FBF9F4]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D97757]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#D97757]"></span>
                        <span>STUDIO WALL // THREE NON-NEGOTIABLE PRINCIPLES</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FBF9F4]">
                        Pinned Commitments from the Studio Wall.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#B0A695] max-w-md leading-relaxed text-pretty">
                    Every digital object that leaves this studio is bound by three foundational engineering commitments. No compromises, no leasehold traps.
                </p>
            </div>

            <!-- Pinned Paper Sheets on Charcoal Wall -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                <!-- Principle 1: Lean by Design -->
                <div class="atelier-pinned-note relative bg-[#FBF9F4] text-[#1E1B18] p-8 border border-[#2C2723]/30 shadow-2xl space-y-6 rotate-[-0.75deg] transition-transform duration-300 hover:rotate-0 atelier-reveal">
                    <!-- Taped corner graphic -->
                    <div class="absolute -top-3 left-6 w-16 h-5 bg-[#EFECE4]/95 border border-[#2C2723]/20 shadow-xs" aria-hidden="true"></div>

                    <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-3 pt-2">
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">PRINCIPLE I &middot; ENGINEERING</span>
                        <span class="text-[10px] font-mono text-[#7A6F62]">LCP &lt; 1.2s</span>
                    </div>

                    <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                        Lean by Design.
                    </h3>

                    <p class="text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed">
                        Zero runtime framework overhead. No React, no Next.js, no Vue, and no bloated visual page builders. Clean, semantic SSR HTML, lightweight Tailwind CSS, and vanilla JavaScript that loads instantly on mobile 4G/5G networks.
                    </p>

                    <div class="pt-4 border-t border-[#2C2723]/12 text-[10px] font-mono text-[#7A6F62] space-y-1">
                        <div>Hydration Overhead: 0 MB</div>
                        <div class="text-[#9C4A2F] font-semibold">Sub-50KB Compiled Global Style</div>
                    </div>
                </div>

                <!-- Principle 2: Built for Local Conversion -->
                <div class="atelier-pinned-note relative bg-[#FBF9F4] text-[#1E1B18] p-8 border border-[#2C2723]/30 shadow-2xl space-y-6 rotate-[0.75deg] transition-transform duration-300 hover:rotate-0 atelier-reveal">
                    <!-- Taped corner graphic -->
                    <div class="absolute -top-3 right-6 w-16 h-5 bg-[#EFECE4]/95 border border-[#2C2723]/20 shadow-xs" aria-hidden="true"></div>

                    <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-3 pt-2">
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">PRINCIPLE II &middot; REVENUE</span>
                        <span class="text-[10px] font-mono text-[#7A6F62]">CONVERSION FIRST</span>
                    </div>

                    <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                        Engineered for Local Action.
                    </h3>

                    <p class="text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed">
                        A commercial website exists to generate phone calls, bookings, and quote inquiries. We place Click-to-Call, WhatsApp lead routing, and clear service pricing directly at thumb reach without invasive newsletter popups.
                    </p>

                    <div class="pt-4 border-t border-[#2C2723]/12 text-[10px] font-mono text-[#7A6F62] space-y-1">
                        <div>Touch Target Standard: &ge;44&times;44px</div>
                        <div class="text-[#9C4A2F] font-semibold">Zero-PDF Menu &amp; Catalog Architecture</div>
                    </div>
                </div>

                <!-- Principle 3: Complete Asset Ownership -->
                <div class="atelier-pinned-note relative bg-[#FBF9F4] text-[#1E1B18] p-8 border border-[#2C2723]/30 shadow-2xl space-y-6 rotate-[-0.5deg] transition-transform duration-300 hover:rotate-0 atelier-reveal">
                    <!-- Taped corner graphic -->
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#EFECE4]/95 border border-[#2C2723]/20 shadow-xs" aria-hidden="true"></div>

                    <div class="flex items-center justify-between border-b border-[#2C2723]/15 pb-3 pt-2">
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">PRINCIPLE III &middot; SOVEREIGNTY</span>
                        <span class="text-[10px] font-mono text-[#7A6F62]">100% OWNERSHIP</span>
                    </div>

                    <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                        Complete Client Rights.
                    </h3>

                    <p class="text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed">
                        You own your custom code, design files, and domain records permanently. We never hold your business hostage with recurring monthly website leaseholds or proprietary software lock-ins.
                    </p>

                    <div class="pt-4 border-t border-[#2C2723]/12 text-[10px] font-mono text-[#7A6F62] space-y-1">
                        <div>Monthly Platform Rent: ₹0</div>
                        <div class="text-[#9C4A2F] font-semibold">Full Git Source &amp; DNS Cutover Handoff</div>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 06: THE MAKING TABLE (CANONICAL 5-STAGE WORKFLOW)            -->
    <!-- ================================================================= -->
    <section id="atelier-making" class="py-20 sm:py-28 bg-[#F5F2EB] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>PRODUCTION WORKFLOW // THE 5-STAGE MAKING SEQUENCE</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        The Handcrafted Making Sequence.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#5C5349] max-w-md leading-relaxed text-pretty">
                    From initial search discovery through code engineering to production deployment, every engagement follows a disciplined 5-phase path.
                </p>
            </div>

            <!-- 5 Sequential Making Stations -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">

                <!-- Station 1 -->
                <div class="atelier-station-card bg-[#FBF9F4] border border-[#2C2723]/20 p-6 atelier-shadow flex flex-col justify-between space-y-6 atelier-reveal">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-2">
                            <span class="text-xs font-mono text-[#9C4A2F] font-bold">STATION 01</span>
                            <span class="text-[10px] font-mono text-[#7A6F62]">Week 1</span>
                        </div>
                        <h3 class="atelier-serif text-xl font-bold text-[#1E1B18]">Discovery &amp; Architecture</h3>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Analyze target search queries across Gurugram, Delhi NCR, Chandigarh, or Bengaluru. Map high-intent page wireframes.
                        </p>
                    </div>
                    <div class="pt-3 border-t border-[#2C2723]/10 text-[10px] font-mono text-[#7A6F62]">
                        Deliverable: Structural Map
                    </div>
                </div>

                <!-- Station 2 -->
                <div class="atelier-station-card bg-[#FBF9F4] border border-[#2C2723]/20 p-6 atelier-shadow flex flex-col justify-between space-y-6 atelier-reveal">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-2">
                            <span class="text-xs font-mono text-[#9C4A2F] font-bold">STATION 02</span>
                            <span class="text-[10px] font-mono text-[#7A6F62]">Week 1–2</span>
                        </div>
                        <h3 class="atelier-serif text-xl font-bold text-[#1E1B18]">Visual Direction &amp; Layout</h3>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Bespoke typography pairings, material palettes, readable layout specifications, and mobile conversion pathways.
                        </p>
                    </div>
                    <div class="pt-3 border-t border-[#2C2723]/10 text-[10px] font-mono text-[#7A6F62]">
                        Deliverable: Approved Layouts
                    </div>
                </div>

                <!-- Station 3 -->
                <div class="atelier-station-card bg-[#FBF9F4] border border-[#2C2723]/20 p-6 atelier-shadow flex flex-col justify-between space-y-6 atelier-reveal">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-2">
                            <span class="text-xs font-mono text-[#9C4A2F] font-bold">STATION 03</span>
                            <span class="text-[10px] font-mono text-[#7A6F62]">Week 2–3</span>
                        </div>
                        <h3 class="atelier-serif text-xl font-bold text-[#1E1B18]">Code Engineering</h3>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Lightweight Node.js SSR development, semantic HTML5 markup, Tailwind styling, and Schema.org structured data.
                        </p>
                    </div>
                    <div class="pt-3 border-t border-[#2C2723]/10 text-[10px] font-mono text-[#7A6F62]">
                        Deliverable: Production SSR Code
                    </div>
                </div>

                <!-- Station 4 -->
                <div class="atelier-station-card bg-[#FBF9F4] border border-[#2C2723]/20 p-6 atelier-shadow flex flex-col justify-between space-y-6 atelier-reveal">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-2">
                            <span class="text-xs font-mono text-[#9C4A2F] font-bold">STATION 04</span>
                            <span class="text-[10px] font-mono text-[#7A6F62]">Week 3–4</span>
                        </div>
                        <h3 class="atelier-serif text-xl font-bold text-[#1E1B18]">Mobile &amp; Audit Pass</h3>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Exhaustive testing across real iOS and Android viewports. Core Web Vitals audit, form testing, and SSL validation.
                        </p>
                    </div>
                    <div class="pt-3 border-t border-[#2C2723]/10 text-[10px] font-mono text-[#7A6F62]">
                        Deliverable: Verified Audit Pass
                    </div>
                </div>

                <!-- Station 5 -->
                <div class="atelier-station-card bg-[#FBF9F4] border border-[#2C2723]/20 p-6 atelier-shadow flex flex-col justify-between space-y-6 atelier-reveal">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-2">
                            <span class="text-xs font-mono text-[#9C4A2F] font-bold">STATION 05</span>
                            <span class="text-[10px] font-mono text-[#7A6F62]">Week 4</span>
                        </div>
                        <h3 class="atelier-serif text-xl font-bold text-[#1E1B18]">Cloud Deployment</h3>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Deployment to fast cloud infrastructure, DNS cutover, Google Search Console sitemap submission, and code handoff.
                        </p>
                    </div>
                    <div class="pt-3 border-t border-[#2C2723]/10 text-[10px] font-mono text-[#7A6F62]">
                        Deliverable: Live Launch &amp; Rights
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 07: THE COMMISSION MENU (CANONICAL RATES & ESTIMATOR)        -->
    <!-- ================================================================= -->
    <section id="atelier-rates" class="py-20 sm:py-28 bg-[#EFECE4] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>COMMERCIAL RATES // ARTISAN COMMISSION MENU</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        Transparent Commercial Commission Rates.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#5C5349] max-w-md leading-relaxed text-pretty">
                    Straightforward studio pricing with zero recurring platform rent, hidden lock-ins, or inflated retainers.
                </p>
            </div>

            <!-- Three Canonical Pricing Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                <!-- Essential -->
                <div class="atelier-rate-card bg-[#FBF9F4] border border-[#2C2723]/20 p-8 atelier-shadow flex flex-col justify-between space-y-8 atelier-reveal">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7A6F62]">TIER 01 // ESSENTIAL</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] text-[#5C5349]">7 to 10 Days</span>
                        </div>
                        <div>
                            <div class="atelier-serif text-4xl sm:text-5xl font-bold text-[#1E1B18]">₹14,999</div>
                            <div class="text-[11px] font-mono text-[#7A6F62] uppercase tracking-wider mt-1">One-time engagement fee</div>
                        </div>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Single-page high-converting architectural landing page engineered for local businesses needing a credible digital presence immediately.
                        </p>

                        <div class="space-y-2 pt-4 border-t border-[#2C2723]/10 text-xs font-sans text-[#5C5349]">
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>High-speed mobile responsive layout</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Click-to-Call &amp; direct WhatsApp routing</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Clear service presentation &amp; pricing</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Secure lead intake form with instant alerts</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>100% complete asset &amp; domain ownership</span></div>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-[#2C2723]/15">
                        <a href="/contact?tier=essential" class="w-full block text-center py-3 text-xs font-mono uppercase tracking-[0.16em] font-semibold bg-[#EFECE4] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-[#FBF9F4] transition-colors border border-[#2C2723]/20">
                            Commission Essential &rarr;
                        </a>
                    </div>
                </div>

                <!-- Professional -->
                <div class="atelier-rate-card bg-[#FBF9F4] border-2 border-[#1E1B18] p-8 atelier-shadow-deep flex flex-col justify-between space-y-8 relative atelier-reveal">
                    <div class="absolute -top-3 left-8 px-3 py-0.5 bg-[#1E1B18] text-[#FBF9F4] text-[9px] font-mono uppercase tracking-[0.2em]">
                        Standard Studio Benchmark
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-4 pt-2">
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold">TIER 02 // PROFESSIONAL</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] text-[#5C5349]">2 to 3 Weeks</span>
                        </div>
                        <div>
                            <div class="atelier-serif text-4xl sm:text-5xl font-bold text-[#1E1B18]">₹34,999</div>
                            <div class="text-[11px] font-mono text-[#7A6F62] uppercase tracking-wider mt-1">One-time engagement fee</div>
                        </div>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Comprehensive multi-page custom web system engineered for established clinics, brokers, dining rooms, and consultancies.
                        </p>

                        <div class="space-y-2 pt-4 border-t border-[#2C2723]/10 text-xs font-sans text-[#5C5349]">
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Up to 5 bespoke multi-page layouts</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Full Local SEO Schema structured data</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Detailed service showcases &amp; portfolios</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Google Business Profile alignment guidelines</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Sub-second load times on mobile 4G/5G</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>100% complete asset &amp; domain ownership</span></div>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-[#2C2723]/15">
                        <a href="/contact?tier=professional" class="w-full block text-center py-3 text-xs font-mono uppercase tracking-[0.16em] font-semibold bg-[#1E1B18] text-[#FBF9F4] hover:bg-[#9C4A2F] transition-colors border border-[#1E1B18]">
                            Commission Professional &rarr;
                        </a>
                    </div>
                </div>

                <!-- Custom -->
                <div class="atelier-rate-card bg-[#FBF9F4] border border-[#2C2723]/20 p-8 atelier-shadow flex flex-col justify-between space-y-8 atelier-reveal">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between border-b border-[#2C2723]/10 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7A6F62]">TIER 03 // CUSTOM</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 bg-[#EFECE4] text-[#5C5349]">3 to 4 Weeks</span>
                        </div>
                        <div>
                            <div class="atelier-serif text-4xl sm:text-5xl font-bold text-[#1E1B18]">₹69,999<span class="text-2xl font-normal text-[#7A6F62]">+</span></div>
                            <div class="text-[11px] font-mono text-[#7A6F62] uppercase tracking-wider mt-1">Starting engagement fee</div>
                        </div>
                        <p class="text-xs font-sans text-[#5C5349] leading-relaxed">
                            Tailored multi-location architecture, multi-practitioner directory systems, or specialized commercial requirements.
                        </p>

                        <div class="space-y-2 pt-4 border-t border-[#2C2723]/10 text-xs font-sans text-[#5C5349]">
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Tailored multi-page &amp; multi-branch scope</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Advanced custom interactive estimators</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Full multi-neighborhood SEO hierarchy</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Custom API &amp; CRM webhook integrations</span></div>
                            <div class="flex items-start gap-2"><span class="text-[#9C4A2F] font-bold">&check;</span><span>Priority direct founder channel support</span></div>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-[#2C2723]/15">
                        <a href="/contact?tier=custom" class="w-full block text-center py-3 text-xs font-mono uppercase tracking-[0.16em] font-semibold bg-[#EFECE4] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-[#FBF9F4] transition-colors border border-[#2C2723]/20">
                            Commission Custom &rarr;
                        </a>
                    </div>
                </div>

            </div>

            <!-- Interactive Commission Estimator Ledger -->
            <div class="bg-[#FBF9F4] border border-[#2C2723]/20 p-8 sm:p-10 atelier-shadow space-y-8 atelier-reveal">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2C2723]/10 pb-6">
                    <div>
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-semibold block">INTERACTIVE ESTIMATOR</span>
                        <h3 class="atelier-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">Configure a Project Scope</h3>
                    </div>
                    <div class="text-xs font-mono text-[#7A6F62]">
                        Base Architecture: ₹10,000 + ₹1,500/page
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    <!-- Sliders & Checkboxes -->
                    <div class="lg:col-span-7 space-y-6">
                        <div class="space-y-2">
                            <div class="flex justify-between text-xs font-mono">
                                <label for="atelier-calc-pages" class="text-[#1E1B18] font-bold">Number of Unique Pages:</label>
                                <span id="atelier-calc-pages-val" class="text-[#9C4A2F] font-bold">5 Pages</span>
                            </div>
                            <input type="range" id="atelier-calc-pages" min="1" max="20" value="5" class="w-full accent-[#9C4A2F] cursor-pointer">
                            <div class="flex justify-between text-[10px] font-mono text-[#7A6F62]">
                                <span>1 Page</span>
                                <span>10 Pages</span>
                                <span>20 Pages</span>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-[#2C2723]/10 space-y-3">
                            <label class="flex items-center gap-3 cursor-pointer select-none">
                                <input type="checkbox" id="atelier-calc-seo" checked class="w-4 h-4 accent-[#9C4A2F] rounded">
                                <span class="text-xs font-mono text-[#1E1B18]">Include Local SEO Foundations (+₹17,500)</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer select-none">
                                <input type="checkbox" id="atelier-calc-maint" class="w-4 h-4 accent-[#9C4A2F] rounded">
                                <span class="text-xs font-mono text-[#1E1B18]">Include Annual Maintenance Care (+₹15,000)</span>
                            </label>
                        </div>
                    </div>

                    <!-- Computed Total Display -->
                    <div class="lg:col-span-5 bg-[#24211E] text-[#F5F2EB] p-6 sm:p-8 rounded border border-black space-y-5 text-center sm:text-left">
                        <div class="text-[10px] font-mono uppercase tracking-widest text-[#D97757]">
                            Calculated Studio Estimate
                        </div>
                        <div>
                            <div id="atelier-calc-total" class="atelier-serif text-4xl sm:text-5xl font-bold tabular-nums text-[#FBF9F4]">
                                ₹35,000
                            </div>
                            <div class="text-[10px] font-mono text-[#A89F91] mt-1">
                                Fully Transparent &middot; ₹0 Recurring Platform Rent
                            </div>
                        </div>
                        <a id="atelier-calc-quote-btn" href="/contact?pages=5&seo=true&maint=false&est=35000" class="block w-full text-center py-3 text-xs font-mono uppercase tracking-widest font-semibold bg-[#9C4A2F] text-[#FBF9F4] hover:bg-[#7C361E] transition-colors border border-[#9C4A2F]">
                            Request This Scope &rarr;
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 08: THE COMMISSION DESK (INTAKE & TECHNICAL AUDIT FORM)      -->
    <!-- ================================================================= -->
    <section id="atelier-desk" class="py-20 sm:py-28 bg-[#F5F2EB] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>INTAKE DESK // DIRECT STUDIO CORRESPONDENCE</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        The Commission Desk &amp; Teardown.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#5C5349] max-w-md leading-relaxed text-pretty">
                    Submit your current website URL or practice requirements. We provide a frank architectural audit identifying speed bottlenecks, search gaps, and conversion leaks within 24 hours.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                <!-- Left Column: Direct Studio Contact Channels -->
                <div class="lg:col-span-5 space-y-8 atelier-reveal">
                    <div class="bg-[#FBF9F4] border border-[#2C2723]/20 p-8 atelier-shadow space-y-6">
                        <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9C4A2F] font-bold border-b border-[#2C2723]/10 pb-3">
                            Direct Studio Dispatch
                        </div>

                        <div class="space-y-4 text-xs font-mono">
                            <div class="space-y-1">
                                <div class="text-[#7A6F62]">Direct WhatsApp:</div>
                                <a href="https://wa.me/${CONFIG.whatsapp}" class="text-sm font-bold text-[#1E1B18] hover:text-[#9C4A2F] transition-colors block">
                                    ${CONFIG.phone}
                                </a>
                            </div>

                            <div class="space-y-1">
                                <div class="text-[#7A6F62]">Studio Email:</div>
                                <a href="mailto:${CONFIG.email}" class="text-sm font-bold text-[#1E1B18] hover:text-[#9C4A2F] transition-colors block">
                                    ${CONFIG.email}
                                </a>
                            </div>

                            <div class="space-y-1">
                                <div class="text-[#7A6F62]">Studio Practice Corridor:</div>
                                <p class="text-xs font-sans text-[#5C5349]">
                                    Gurugram, Delhi NCR, Chandigarh, and Bengaluru. Engagements scheduled by appointment.
                                </p>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-[#2C2723]/10 text-[10px] font-mono text-[#7A6F62]">
                            Typical Teardown Delivery: 24 Business Hours
                        </div>
                    </div>
                </div>

                <!-- Right Column: Intake Form -->
                <div class="lg:col-span-7 atelier-reveal">
                    <div class="bg-[#FBF9F4] border border-[#2C2723]/20 p-8 sm:p-10 atelier-shadow space-y-6">

                        <div class="border-b border-[#2C2723]/10 pb-4">
                            <h3 class="atelier-serif text-2xl font-bold text-[#1E1B18]">Request Complimentary Technical Audit</h3>
                            <p class="text-xs font-sans text-[#5C5349] mt-1">Submit your website URL for a detailed performance, local SEO, and mobile conversion analysis.</p>
                        </div>

                        <!-- Success Alert -->
                        <div id="atelier-form-success" class="hidden p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono rounded">
                            ✓ Teardown dossier received. We will review your site and dispatch findings within 24 business hours.
                        </div>

                        <!-- Error Alert -->
                        <div id="atelier-form-error" class="hidden p-4 bg-rose-50 border border-rose-300 text-rose-900 text-xs font-mono rounded">
                            Error submitting request. Please verify your connection or message our studio directly.
                        </div>

                        <form id="atelier-audit-form" class="space-y-5" novalidate>
                            <!-- Honeypot -->
                            <input type="text" name="_gotcha" id="atelier-audit-gotcha" class="hidden" tabindex="-1" autocomplete="off">

                            <div>
                                <label for="atelier-audit-url" class="block text-xs font-mono uppercase tracking-wider text-[#1E1B18] font-bold mb-1.5">
                                    Website URL to Teardown <span class="text-[#9C4A2F]">*</span>
                                </label>
                                <input type="url"
                                       id="atelier-audit-url"
                                       name="website"
                                       required
                                       placeholder="https://yourclinic-or-practice.com"
                                       class="w-full px-4 py-3 bg-[#EFECE4] border border-[#2C2723]/25 text-xs font-mono text-[#1E1B18] placeholder-[#7A6F62]/60 focus:outline-none focus:border-[#9C4A2F] focus:bg-[#FBF9F4] transition-colors rounded">
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label for="atelier-audit-name" class="block text-xs font-mono uppercase tracking-wider text-[#1E1B18] font-bold mb-1.5">
                                        Your Name
                                    </label>
                                    <input type="text"
                                           id="atelier-audit-name"
                                           name="name"
                                           placeholder="Dr. Verma / Principal"
                                           class="w-full px-4 py-3 bg-[#EFECE4] border border-[#2C2723]/25 text-xs font-mono text-[#1E1B18] placeholder-[#7A6F62]/60 focus:outline-none focus:border-[#9C4A2F] focus:bg-[#FBF9F4] transition-colors rounded">
                                </div>
                                <div>
                                    <label for="atelier-audit-phone" class="block text-xs font-mono uppercase tracking-wider text-[#1E1B18] font-bold mb-1.5">
                                        WhatsApp or Phone
                                    </label>
                                    <input type="tel"
                                           id="atelier-audit-phone"
                                           name="phone"
                                           placeholder="+91 98765 43210"
                                           class="w-full px-4 py-3 bg-[#EFECE4] border border-[#2C2723]/25 text-xs font-mono text-[#1E1B18] placeholder-[#7A6F62]/60 focus:outline-none focus:border-[#9C4A2F] focus:bg-[#FBF9F4] transition-colors rounded">
                                </div>
                            </div>

                            <div>
                                <label for="atelier-audit-industry" class="block text-xs font-mono uppercase tracking-wider text-[#1E1B18] font-bold mb-1.5">
                                    Commercial Sector
                                </label>
                                <select id="atelier-audit-industry" name="industry" class="w-full px-4 py-3 bg-[#EFECE4] border border-[#2C2723]/25 text-xs font-mono text-[#1E1B18] focus:outline-none focus:border-[#9C4A2F] focus:bg-[#FBF9F4] transition-colors rounded">
                                    <option value="Clinics & Aesthetics">Clinics, Dentists &amp; Medical Aesthetics</option>
                                    <option value="Real Estate">Real Estate Developers &amp; Property Advisory</option>
                                    <option value="Restaurants & Hospitality">Restaurants, Cafes &amp; Hospitality</option>
                                    <option value="Salons & Wellness">Salons, Spas &amp; Wellness Practices</option>
                                    <option value="Professional Services">Professional Consultancies &amp; Services</option>
                                </select>
                            </div>

                            <button type="submit"
                                    id="atelier-audit-submit-btn"
                                    class="w-full py-4 text-xs font-mono uppercase tracking-[0.2em] font-semibold bg-[#1E1B18] text-[#FBF9F4] hover:bg-[#9C4A2F] transition-colors border border-[#1E1B18] shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C4A2F]">
                                Transmit Project Dossier &rarr;
                            </button>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ================================================================= -->
    <!-- ZONE 09: STUDIO NOTES & CLARIFICATIONS (CANONICAL FAQS)           -->
    <!-- ================================================================= -->
    <section id="atelier-notes" class="py-20 sm:py-28 bg-[#EFECE4] text-[#1E1B18] border-b border-[#2C2723]/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2723]/15 pb-8 atelier-reveal">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9C4A2F]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#9C4A2F]"></span>
                        <span>STUDIO ARCHIVE // NOTES &amp; CLARIFICATIONS</span>
                    </div>
                    <h2 class="atelier-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1B18]">
                        Studio Clarifications &amp; Inquiries.
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#5C5349] max-w-md leading-relaxed text-pretty">
                    Authoritative answers to common commercial, technical, and operational questions regarding studio engagements.
                </p>
            </div>

            <!-- Paper-Sheet Accordion Notes -->
            <div class="max-w-4xl mx-auto bg-[#FBF9F4] border border-[#2C2723]/20 divide-y divide-[#2C2723]/10 atelier-shadow">
                ${FAQS.map((faq, idx) => `
                <div class="atelier-faq-item">
                    <button type="button"
                            class="atelier-faq-trigger w-full py-5 px-6 sm:px-8 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9C4A2F]"
                            aria-expanded="false"
                            aria-controls="atelier-faq-panel-${idx}">
                        <div class="flex items-start gap-4">
                            <span class="text-xs font-mono text-[#9C4A2F] font-semibold mt-0.5">NOTE 0${idx + 1}</span>
                            <span class="atelier-serif text-lg sm:text-xl font-bold text-[#1E1B18]">${escapeHTML(faq.q)}</span>
                        </div>
                        <span class="atelier-faq-icon text-base font-mono text-[#7A6F62] shrink-0 transition-transform duration-200" aria-hidden="true">+</span>
                    </button>
                    <div id="atelier-faq-panel-${idx}" class="atelier-faq-panel hidden px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm font-sans text-[#5C5349] leading-relaxed pl-14 sm:pl-16">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>
    `;

    const script = `
        window.initAtelierInteractions = function() {
            // 1. Mobile Menu Drawer Toggle with Accessible ARIA & Body Scroll Lock
            const menuBtn = document.getElementById('atelier-mobile-menu-btn');
            const drawer = document.getElementById('atelier-mobile-drawer');
            if (menuBtn && drawer) {
                const burgerIcon = menuBtn.querySelector('.atelier-menu-burger');

                const toggleDrawer = (open) => {
                    const isOpening = open !== undefined ? open : drawer.classList.contains('hidden');
                    menuBtn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
                    drawer.setAttribute('aria-hidden', isOpening ? 'false' : 'true');

                    if (isOpening) {
                        drawer.classList.remove('hidden');
                        drawer.classList.add('atelier-mobile-drawer');
                        if (burgerIcon) {
                            burgerIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                        }
                        document.body.style.overflow = 'hidden';
                    } else {
                        drawer.classList.add('hidden');
                        drawer.classList.remove('atelier-mobile-drawer');
                        if (burgerIcon) {
                            burgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                        }
                        document.body.style.overflow = '';
                    }
                };

                menuBtn.addEventListener('click', () => toggleDrawer());

                // Close on link click inside drawer
                const links = drawer.querySelectorAll('a');
                links.forEach(l => {
                    l.addEventListener('click', () => toggleDrawer(false));
                });

                // Close on Escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
                        toggleDrawer(false);
                        menuBtn.focus();
                    }
                });
            }

            // 2. Interactive Tactile Material Board Swatches
            const swatchBtns = document.querySelectorAll('.atelier-swatch-btn');
            const matTitle = document.getElementById('atelier-mat-title');
            const matHex = document.getElementById('atelier-mat-hex');
            const matDesc = document.getElementById('atelier-mat-desc');
            const matTactile = document.getElementById('atelier-mat-tactile');

            if (swatchBtns.length && matTitle) {
                swatchBtns.forEach(btn => {
                    const activateSwatch = () => {
                        swatchBtns.forEach(b => {
                            b.setAttribute('aria-selected', 'false');
                            b.classList.remove('is-active');
                        });
                        btn.setAttribute('aria-selected', 'true');
                        btn.classList.add('is-active');

                        matTitle.textContent = btn.dataset.title || '';
                        matHex.textContent = btn.dataset.hex || '';
                        matDesc.textContent = btn.dataset.desc || '';
                        if (matTactile) matTactile.textContent = btn.dataset.tactile || '';
                    };

                    btn.addEventListener('click', activateSwatch);
                    btn.addEventListener('focus', activateSwatch);
                });
            }

            // 3. Project Folders Tab Switcher
            const folderTabs = document.querySelectorAll('.atelier-folder-tab');
            const folderPanels = document.querySelectorAll('.atelier-folder-panel');

            if (folderTabs.length && folderPanels.length) {
                folderTabs.forEach((tab, index) => {
                    const activateFolder = () => {
                        folderTabs.forEach((t, i) => {
                            const isSelected = i === index;
                            t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
                            if (isSelected) {
                                t.classList.add('is-active');
                            } else {
                                t.classList.remove('is-active');
                            }
                        });

                        folderPanels.forEach((p, i) => {
                            if (i === index) {
                                p.classList.remove('hidden');
                            } else {
                                p.classList.add('hidden');
                            }
                        });
                    };

                    tab.addEventListener('click', activateFolder);
                    tab.addEventListener('focus', activateFolder);
                });
            }

            // 4. Interactive Commission Estimator
            const pagesInput = document.getElementById('atelier-calc-pages');
            const pagesVal = document.getElementById('atelier-calc-pages-val');
            const seoInput = document.getElementById('atelier-calc-seo');
            const maintInput = document.getElementById('atelier-calc-maint');
            const totalEl = document.getElementById('atelier-calc-total');
            const quoteBtn = document.getElementById('atelier-calc-quote-btn');

            if (pagesInput && totalEl) {
                const calculateTotal = () => {
                    const pages = parseInt(pagesInput.value, 10) || 5;
                    if (pagesVal) pagesVal.textContent = pages + (pages === 1 ? ' Page' : ' Pages');

                    const hasSeo = seoInput ? seoInput.checked : false;
                    const hasMaint = maintInput ? maintInput.checked : false;

                    let total = 10000 + (pages * 1500);
                    if (hasSeo) total += 17500;
                    if (hasMaint) total += 15000;

                    totalEl.textContent = '₹' + total.toLocaleString('en-IN');
                    if (quoteBtn) {
                        quoteBtn.href = '/contact?pages=' + pages + '&seo=' + hasSeo + '&maint=' + hasMaint + '&est=' + total;
                    }
                };

                pagesInput.addEventListener('input', calculateTotal);
                if (seoInput) seoInput.addEventListener('change', calculateTotal);
                if (maintInput) maintInput.addEventListener('change', calculateTotal);
            }

            // 5. Commission Desk Form Submission to /api/audit
            const auditForm = document.getElementById('atelier-audit-form');
            if (auditForm) {
                auditForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const errEl = document.getElementById('atelier-form-error');
                    const successEl = document.getElementById('atelier-form-success');
                    const submitBtn = document.getElementById('atelier-audit-submit-btn');
                    const urlInput = document.getElementById('atelier-audit-url');
                    const gotchaInput = document.getElementById('atelier-audit-gotcha');
                    const nameInput = document.getElementById('atelier-audit-name');
                    const phoneInput = document.getElementById('atelier-audit-phone');
                    const industryInput = document.getElementById('atelier-audit-industry');

                    if (errEl) errEl.classList.add('hidden');
                    if (successEl) successEl.classList.add('hidden');

                    const rawUrl = urlInput ? urlInput.value.trim() : '';
                    if (!rawUrl) {
                        if (errEl) {
                            errEl.textContent = 'Please provide a valid website URL.';
                            errEl.classList.remove('hidden');
                        }
                        if (urlInput) urlInput.focus();
                        return;
                    }

                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.textContent = 'Analyzing Site & Transmitting...';
                    }

                    try {
                        const payload = {
                            website: rawUrl,
                            source: 'Atelier Experience Intake',
                            _gotcha: gotchaInput ? gotchaInput.value : '',
                            name: nameInput ? nameInput.value : '',
                            phone: phoneInput ? phoneInput.value : '',
                            industry: industryInput ? industryInput.value : ''
                        };

                        const response = await fetch('/api/audit', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });

                        const data = await response.json();

                        if (response.ok && data.success) {
                            if (successEl) successEl.classList.remove('hidden');
                            auditForm.reset();
                            if (submitBtn) {
                                submitBtn.textContent = 'Dossier Transmitted ✓';
                            }
                        } else {
                            throw new Error(data.message || 'Submission encountered an error. Please try again.');
                        }
                    } catch (err) {
                        if (errEl) {
                            errEl.textContent = err.message || 'Network error occurred. Please verify your connection.';
                            errEl.classList.remove('hidden');
                        }
                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.textContent = 'Transmit Project Dossier →';
                        }
                    }
                });
            }

            // 6. Studio Notes (FAQ) Accordion
            const faqTriggers = document.querySelectorAll('.atelier-faq-trigger');
            faqTriggers.forEach(btn => {
                btn.addEventListener('click', function() {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    const targetId = this.getAttribute('aria-controls');
                    const panel = document.getElementById(targetId);
                    const icon = this.querySelector('.atelier-faq-icon');

                    if (panel) {
                        if (isExpanded) {
                            this.setAttribute('aria-expanded', 'false');
                            panel.classList.add('hidden');
                            if (icon) {
                                icon.textContent = '+';
                                icon.style.transform = 'none';
                            }
                        } else {
                            this.setAttribute('aria-expanded', 'true');
                            panel.classList.remove('hidden');
                            if (icon) {
                                icon.textContent = '–';
                                icon.style.transform = 'rotate(180deg)';
                            }
                        }
                    }
                });
            });

            // 7. Kinetic IntersectionObserver Reveal
            if ('IntersectionObserver' in window) {
                const reveals = document.querySelectorAll('.atelier-reveal');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15 });

                reveals.forEach(el => observer.observe(el));
                window.__veloraAtelierObserver = observer;
            } else {
                document.querySelectorAll('.atelier-reveal').forEach(el => el.classList.add('active'));
            }
        };

        window.cleanupAtelierInteractions = function() {
            document.body.style.overflow = '';
            if (window.__veloraAtelierObserver) {
                window.__veloraAtelierObserver.disconnect();
                window.__veloraAtelierObserver = null;
            }
        };

        if (typeof window.initAtelierInteractions === 'function') {
            window.initAtelierInteractions();
        }
    `;

    const styles = `
        html[data-experience="atelier"] {
            --color-bg: #F5F2EB;
            --color-surface: #FBF9F4;
            --color-card: #EFECE4;
            --color-card-hover: #E8E4D8;
            --color-border: rgba(44, 39, 35, 0.14);
            --color-border-strong: rgba(44, 39, 35, 0.28);
            --color-text-main: #1E1B18;
            --color-text-muted: #5C5349;
            --color-faint: rgba(44, 39, 35, 0.04);
            --color-faint-hover: rgba(44, 39, 35, 0.08);
            --color-btn-bg: #1E1B18;
            --color-btn-text: #FBF9F4;
            --color-btn-hover: #9C4A2F;
            --color-nav-glass: rgba(251, 249, 244, 0.95);
            --color-accent: #9C4A2F;
            --color-accent-light: #D97757;
        }

        /* Suppress global floating CTA in Atelier to preserve workshop workbench margins */
        html[data-experience="atelier"] #desktop-floating-cta {
            display: none !important;
        }

        /* Atelier Typography & Display Font */
        .atelier-serif {
            font-family: 'Cormorant Garamond', Georgia, Cambria, 'Times New Roman', serif;
            letter-spacing: -0.015em;
        }

        /* Tactile Shadows */
        .atelier-shadow {
            box-shadow: 4px 6px 18px rgba(44, 39, 35, 0.07), 0 1px 3px rgba(44, 39, 35, 0.03);
        }
        .atelier-shadow-deep {
            box-shadow: 8px 12px 28px rgba(44, 39, 35, 0.11), 0 2px 6px rgba(44, 39, 35, 0.05);
        }

        /* Material Swatch Grid */
        .atelier-swatch-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 0.5rem;
        }

        /* Material Board Swatch Tabs */
        .atelier-swatch-btn.is-active {
            border-color: #9C4A2F !important;
            background-color: #FBF9F4 !important;
            box-shadow: 0 0 0 1px #9C4A2F, 0 2px 8px rgba(156, 74, 47, 0.15) !important;
            transform: translateY(-2px);
        }

        /* Project Folder Tabs */
        .atelier-folder-tab.is-active {
            border-color: #1E1B18 !important;
            background-color: #FBF9F4 !important;
            color: #1E1B18 !important;
            border-bottom: 2px solid #9C4A2F !important;
            transform: translateY(-2px);
        }

        /* Workbench Lift Effect on Hover & Focus */
        .atelier-workpiece:hover,
        .atelier-workpiece:focus-within {
            transform: translateY(-6px);
            box-shadow: 8px 16px 32px rgba(44, 39, 35, 0.13), 0 3px 8px rgba(44, 39, 35, 0.06);
        }

        /* Closing Colophon Dark Styling */
        .atelier-colophon-bg {
            background-color: #1A1816 !important;
            color: #FBF9F4 !important;
        }

        /* Mobile Drawer Entrance */
        .atelier-mobile-drawer {
            animation: atelierDrawerEnter 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes atelierDrawerEnter {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Kinetic IntersectionObserver Reveal */
        .atelier-reveal {
            opacity: 0;
            transform: translateY(16px);
            transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .atelier-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
            .atelier-mobile-drawer {
                animation: none !important;
            }
            .atelier-reveal {
                opacity: 1 !important;
                transform: none !important;
                transition: none !important;
            }
            .atelier-workpiece:hover,
            .atelier-workpiece:focus-within {
                transform: none !important;
            }
        }
    `;

    return {
        meta,
        headerContent: AtelierHeader(currentPath),
        mainContent: content,
        footerContent: AtelierFooter(),
        styles,
        script
    };
}

module.exports = {
    renderAtelierExperience
};
