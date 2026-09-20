// ============================================================================ //
// VELORA DIGITAL — 03 EDITORIAL EXPERIENCE PRESENTATION RENDERER               //
// Art Direction: Independent Design Magazine · Cultural Publication · Broadsheet //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Dedicated Editorial Header (Magazine Masthead Navigation).
 * Renders a publication masthead with volume imprint, editorial chapter links,
 * accessible mobile drawer, and direct consultation trigger.
 */
function EditorialHeader(currentPath) {
    const chapterLink = (hash, label, num) => {
        return `<a href="${hash}" class="editorial-nav-link inline-flex items-baseline gap-1.5 text-xs font-mono uppercase tracking-[0.16em] text-[#5C5C66] hover:text-[#111113] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C]">
            <span class="text-[10px] text-[#B91C1C] font-semibold">${num}</span>
            <span>${label}</span>
        </a>`;
    };

    const mobileChapterLink = (hash, label, num, subtitle) => {
        return `<a href="${hash}" class="editorial-mobile-chapter-link flex items-baseline justify-between py-3.5 border-b border-[#111113]/10 text-[#111113] hover:text-[#B91C1C] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C]">
            <div>
                <span class="editorial-serif text-xl font-medium block">${label}</span>
                <span class="text-[10px] font-mono text-[#5C5C66] uppercase tracking-wider">${subtitle}</span>
            </div>
            <span class="text-xs font-mono text-[#B91C1C] font-semibold uppercase tracking-widest">${num}</span>
        </a>`;
    };

    return `
    <header class="editorial-masthead sticky top-0 z-50 w-full bg-[#F8F8F6]/95 backdrop-blur-md border-b border-[#111113]/15 transition-all duration-300" role="banner" aria-label="Magazine Masthead Navigation">
        <!-- Top Editorial Imprint Strip (Issue & Studio Metadata) -->
        <div class="hidden lg:block border-b border-[#111113]/10 py-1.5 px-4 sm:px-6 lg:px-8 text-[10px] font-mono uppercase tracking-[0.2em] text-[#5C5C66]">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" aria-hidden="true"></span>
                    <span>Vol. 03 // Editorial Design Chronicle &middot; Issue 2026</span>
                </div>
                <span>Curated Web Systems &amp; Technical Discovery</span>
                <span>Gurugram &middot; Delhi NCR &middot; Chandigarh &middot; Bengaluru</span>
            </div>
        </div>

        <!-- Main Broadsheet Titleplate & Chapter Navigation Bar -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div class="flex items-center justify-between gap-6">

                <!-- Publication Brand Mark -->
                <a href="/" class="flex items-baseline gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C]" aria-label="Velora Digital Editorial Homepage">
                    <span class="editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111113] group-hover:text-[#B91C1C] transition-colors">VELORA</span>
                    <span class="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-[#5C5C66] border-l border-[#111113]/20 pl-3">
                        Digital Chronicle &middot; Vol. 03
                    </span>
                </a>

                <!-- Desktop Publication Navigation -->
                <nav class="hidden xl:flex items-center gap-5" aria-label="Editorial Chapters">
                    ${chapterLink('#editorial-cover', 'Cover', '01')}
                    ${chapterLink('#editorial-contents', 'Contents', '02')}
                    ${chapterLink('#editorial-practice', 'Practice', '03')}
                    ${chapterLink('#editorial-works', 'Lookbook', '04')}
                    ${chapterLink('#editorial-margin-notes', 'Notes', '05')}
                    ${chapterLink('#editorial-sectors', 'Sectors', '06')}
                    ${chapterLink('#editorial-workflow', 'Method', '07')}
                    ${chapterLink('#editorial-pricing', 'Rates', '08')}
                </nav>

                <!-- Action Group -->
                <div class="flex items-center gap-3">
                    <a href="#editorial-correspondence" class="inline-flex items-center justify-center px-4 sm:px-5 py-2 min-h-[40px] text-xs font-mono uppercase tracking-[0.18em] font-semibold bg-[#111113] text-[#F8F8F6] hover:bg-[#B91C1C] transition-colors border border-[#111113] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]">
                        <span>Inquire &rarr;</span>
                    </a>

                    <!-- Mobile Menu Button -->
                    <button id="editorial-mobile-menu-btn"
                            type="button"
                            aria-expanded="false"
                            aria-controls="editorial-mobile-drawer"
                            aria-label="Toggle Editorial Index Menu"
                            class="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded border border-[#111113]/20 text-[#111113] hover:text-[#B91C1C] hover:border-[#B91C1C] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C]">
                        <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path class="editorial-menu-burger" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <!-- Accessible Mobile Drawer -->
        <div id="editorial-mobile-drawer"
             class="hidden xl:hidden bg-[#F8F8F6] border-b border-[#111113]/20 px-4 sm:px-6 pt-2 pb-6 shadow-2xl transition-all"
             aria-hidden="true"
             role="region"
             aria-label="Mobile Publication Index">

            <div class="py-2 border-b border-[#111113]/10 text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] flex justify-between items-center">
                <span>Publication Index &middot; Vol. 03</span>
                <span>Independent Web Practice</span>
            </div>

            <div class="divide-y divide-[#111113]/10">
                ${mobileChapterLink('#editorial-cover', 'The Cover', '01', 'Editorial Broadsheet & Standfirst')}
                ${mobileChapterLink('#editorial-contents', 'Contents', '02', 'Oversized Editorial Index')}
                ${mobileChapterLink('#editorial-practice', 'The Practice', '03', 'Three Core Service Disciplines')}
                ${mobileChapterLink('#editorial-works', 'Works Lookbook', '04', 'Three Signature Design Concepts')}
                ${mobileChapterLink('#editorial-margin-notes', 'Margin Notes', '05', 'Strategic Realities & Truths')}
                ${mobileChapterLink('#editorial-sectors', 'Sector Index', '06', 'High-Trust Industry Directory')}
                ${mobileChapterLink('#editorial-workflow', 'Production Spread', '07', '5-Phase Editorial Workflow')}
                ${mobileChapterLink('#editorial-pricing', 'Rate Card', '08', 'Transparent Commercial Pricing')}
                ${mobileChapterLink('#editorial-correspondence', 'Correspondence', '09', 'Direct Technical Teardown')}
                ${mobileChapterLink('#editorial-colophon', 'Colophon', '10', 'FAQs & Studio Specifications')}
            </div>

            <div class="pt-5 mt-2 flex flex-col gap-2 text-xs font-mono text-[#5C5C66]">
                <div class="flex items-center justify-between py-1 border-b border-[#111113]/10">
                    <span>Direct WhatsApp</span>
                    <a href="https://wa.me/${CONFIG.whatsapp}" class="text-[#111113] hover:text-[#B91C1C] font-semibold">${CONFIG.phone}</a>
                </div>
                <div class="flex items-center justify-between py-1">
                    <span>Email Studio</span>
                    <a href="mailto:${CONFIG.email}" class="text-[#111113] hover:text-[#B91C1C] font-semibold">${CONFIG.email}</a>
                </div>
            </div>
        </div>
    </header>`;
}

/**
 * Dedicated Editorial Colophon & Closing Index (Footer).
 * Renders the final spread of the publication with canonical FAQ accordion,
 * studio colophon, typographic credits, and legal links.
 */
function EditorialFooter() {
    return `
    <footer id="editorial-colophon" class="editorial-colophon-footer border-t border-[#111113] pt-16 pb-14 transition-colors" role="contentinfo" aria-label="Editorial Colophon">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <!-- Colophon Top Banner -->
            <div class="border-b border-[#F8F8F6]/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#EF4444] font-semibold block mb-2">COLOPHON &middot; SPREAD 10 / 10</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F8F6]">
                        Studio Colophon &amp; Clarifications
                    </h2>
                </div>
                <p class="text-xs sm:text-sm font-sans text-[#A1A1AA] max-w-md leading-relaxed text-pretty">
                    An authoritative record of operational standards, architectural specifications, and answers to common commercial inquiries.
                </p>
            </div>

            <!-- Chapter 10 FAQ Accordion Spread -->
            <div class="editorial-faq-container border border-[#F8F8F6]/15 divide-y divide-[#F8F8F6]/10">
                ${FAQS.map((faq, idx) => `
                <div class="editorial-faq-item">
                    <button type="button"
                            class="editorial-faq-trigger w-full py-5 px-6 sm:px-8 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444]"
                            aria-expanded="false"
                            aria-controls="editorial-faq-${idx}">
                        <div class="flex items-baseline gap-4">
                            <span class="text-xs font-mono text-[#EF4444] font-semibold">Q${idx + 1}.</span>
                            <span class="editorial-serif text-lg sm:text-xl font-medium text-[#F8F8F6] text-balance">${escapeHTML(faq.q)}</span>
                        </div>
                        <span class="editorial-faq-icon text-lg font-mono text-[#A1A1AA] shrink-0 transition-transform duration-200" aria-hidden="true">+</span>
                    </button>
                    <div id="editorial-faq-${idx}" class="editorial-faq-panel hidden px-6 sm:px-8 pb-6 text-xs sm:text-sm font-sans text-[#A1A1AA] leading-relaxed max-w-3xl pl-12 sm:pl-16">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>

            <!-- Editorial Publication Colophon Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#F8F8F6]/15 text-xs font-mono text-[#A1A1AA]">
                <div class="space-y-3">
                    <span class="text-[10px] uppercase tracking-widest text-[#EF4444] block">Typographic Specimen</span>
                    <p class="text-[11px] leading-relaxed text-[#F8F8F6]/90 font-sans">
                        Composed in Cormorant Garamond for editorial gravitas, Space Grotesk for categorical precision, and system monospace for technical ledgers.
                    </p>
                </div>
                <div class="space-y-3">
                    <span class="text-[10px] uppercase tracking-widest text-[#EF4444] block">Runtime Architecture</span>
                    <p class="text-[11px] leading-relaxed text-[#F8F8F6]/90 font-sans">
                        Engineered with pure Node.js SSR, semantic HTML5, and Tailwind CSS. Built with zero runtime JavaScript frameworks (₹0 licensing overhead).
                    </p>
                </div>
                <div class="space-y-3">
                    <span class="text-[10px] uppercase tracking-widest text-[#EF4444] block">Asset &amp; Code Rights</span>
                    <p class="text-[11px] leading-relaxed text-[#F8F8F6]/90 font-sans">
                        100% intellectual property, bespoke source code, and domain credentials are fully assigned to the client upon final milestone completion.
                    </p>
                </div>
                <div class="space-y-3">
                    <span class="text-[10px] uppercase tracking-widest text-[#EF4444] block">Studio Presence</span>
                    <p class="text-[11px] leading-relaxed text-[#F8F8F6]/90 font-sans">
                        HQ: Gurugram, Haryana. Practicing across Delhi NCR, Chandigarh &amp; Bengaluru for high-trust commercial institutions.
                    </p>
                </div>
            </div>

            <!-- Directory & Legal Footing -->
            <div class="pt-8 border-t border-[#F8F8F6]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#71717A]">
                <div class="flex items-center gap-4 flex-wrap">
                    <a href="/privacy-policy" class="hover:text-[#F8F8F6] transition-colors">Privacy Policy</a>
                    <span>&middot;</span>
                    <a href="/terms" class="hover:text-[#F8F8F6] transition-colors">Terms of Service</a>
                    <span>&middot;</span>
                    <a href="/services" class="hover:text-[#F8F8F6] transition-colors">All Services</a>
                    <span>&middot;</span>
                    <a href="/portfolio" class="hover:text-[#F8F8F6] transition-colors">Case Studies</a>
                </div>
                <div>
                    &copy; 2026 Velora Digital. Editorial Publication Edition No. 03.
                </div>
            </div>

        </div>
    </footer>`;
}

/**
 * Authoritative 03 Editorial Experience Presentation Renderer.
 * Independent design magazine & cultural publication aesthetic.
 * Features asymmetric broadsheet layouts, oversized editorial headlines,
 * horizontal draggable works lookbook, and strict canonical truthfulness.
 */
function renderEditorialExperience(currentPath = "/") {
    const meta = {
        title: 'Velora Digital | Independent Web Chronicle & Local Discovery Studio',
        description: 'Independent design publication aesthetic for high-trust commercial practices. Fast semantic SSR architecture, local search engineering, and complete asset ownership.',
        schema: generateSchema('FAQPage', { faqs: FAQS }),
        breadcrumbs: null
    };

    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spice = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const content = `
    <!-- ===================================================================== -->
    <!-- CHAPTER 01 — THE COVER (EDITORIAL BROADSHEET & STANDFIRST)            -->
    <!-- ===================================================================== -->
    <section class="editorial-section relative pt-10 pb-20 md:pt-16 md:pb-28 bg-[#F8F8F6] overflow-hidden border-b border-[#111113]/15" id="editorial-cover">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <!-- Volume Headline Bar -->
            <div class="border-t-2 border-b border-[#111113] pt-1.5 pb-1.5 mb-10 sm:mb-14 editorial-reveal">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#5C5C66] gap-2">
                    <span class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-[#B91C1C]" aria-hidden="true"></span>
                        <strong class="text-[#111113]">VOL. 03 // ISSUE 01</strong>
                        <span>&middot;</span>
                        <span>DESIGN CHRONICLE</span>
                    </span>
                    <span>EDITION: VERIFIED LOCAL DISCOVERY</span>
                    <span class="hidden md:inline">CIRCULATION: NCR &middot; CHANDIGARH &middot; BENGALURU</span>
                </div>
            </div>

            <!-- Asymmetric Magazine Cover Composition -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                <!-- Left Column: Oversized Cover Statement & Standfirst -->
                <div class="lg:col-span-8 space-y-8">

                    <div class="editorial-reveal">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block pb-2 border-b border-[#B91C1C]/30">
                            [ SPECIAL REPORT // WEB ARCHITECTURE &amp; LOCAL SEARCH ]
                        </span>
                    </div>

                    <div class="editorial-headline-wrap">
                        <h1 class="editorial-serif text-4xl sm:text-6xl xl:text-7xl font-bold text-[#111113] tracking-tight leading-[1.08] text-balance">
                            High-Trust Web Architecture for Commercial Practices.
                        </h1>
                    </div>

                    <p class="text-base sm:text-xl text-[#5C5C66] leading-relaxed max-w-2xl text-pretty font-sans editorial-reveal">
                        A digital design chronicle on engineering fast, mobile-first web systems, verifiable local search foundations, and complete client code ownership for clinics, estate advisory firms, culinary brands, and professional services.
                    </p>

                    <!-- Cover Lines (Editorial Teaser Strip) -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#111113]/15 text-xs font-mono text-[#111113] editorial-reveal">
                        <div class="p-3 bg-[#EFEFEA] border-l-2 border-[#B91C1C]">
                            <span class="text-[9px] uppercase tracking-widest text-[#B91C1C] block font-bold">COVER LINE 01</span>
                            <span class="font-sans font-medium text-[11px] block mt-0.5">2&ndash;4 Week Structured Delivery Benchmark</span>
                        </div>
                        <div class="p-3 bg-[#EFEFEA] border-l-2 border-[#111113]">
                            <span class="text-[9px] uppercase tracking-widest text-[#5C5C66] block font-bold">COVER LINE 02</span>
                            <span class="font-sans font-medium text-[11px] block mt-0.5">Zero Runtime Framework Overhead</span>
                        </div>
                        <div class="p-3 bg-[#EFEFEA] border-l-2 border-[#B91C1C]">
                            <span class="text-[9px] uppercase tracking-widest text-[#B91C1C] block font-bold">COVER LINE 03</span>
                            <span class="font-sans font-medium text-[11px] block mt-0.5">100% Client Code &amp; Domain Rights</span>
                        </div>
                    </div>

                    <!-- Editorial Action Pair -->
                    <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 editorial-reveal">
                        <a href="#editorial-correspondence" id="editorial-hero-primary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-none text-xs font-mono uppercase tracking-[0.2em] font-bold bg-[#111113] text-[#F8F8F6] hover:bg-[#B91C1C] transition-colors border border-[#111113] shadow-sm">
                            Commission an Engagement &rarr;
                        </a>
                        <a href="#editorial-contents" id="editorial-hero-secondary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-none text-xs font-mono uppercase tracking-[0.2em] font-bold bg-white hover:bg-[#EFEFEA] text-[#111113] transition-colors border border-[#111113]/20">
                            Read Table of Contents &darr;
                        </a>
                    </div>
                </div>

                <!-- Right Column: Dominant Editorial Cover Plate -->
                <div class="lg:col-span-4 bg-white p-6 sm:p-8 border-2 border-[#111113] space-y-6 editorial-reveal editorial-shadow">
                    <div class="border-b border-[#111113] pb-4 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B91C1C] block font-bold">Vol. 03 Specimen</span>
                            <h2 class="editorial-serif text-2xl font-bold text-[#111113]">Issue Dossier</h2>
                        </div>
                        <span class="px-2 py-1 bg-[#111113] text-[#F8F8F6] text-[10px] font-mono font-bold uppercase">2026</span>
                    </div>

                    <div class="space-y-4 text-xs font-mono">
                        <div class="border-b border-[#111113]/10 pb-3">
                            <span class="text-[10px] uppercase text-[#5C5C66] block">Publisher / Studio</span>
                            <span class="text-[#111113] font-sans font-semibold text-xs">Velora Digital Architectural Practice</span>
                        </div>
                        <div class="border-b border-[#111113]/10 pb-3">
                            <span class="text-[10px] uppercase text-[#5C5C66] block">Base Commercial Rate</span>
                            <span class="text-[#111113] font-sans font-semibold text-xs">₹14,999 Fixed Milestone Retainer</span>
                        </div>
                        <div class="border-b border-[#111113]/10 pb-3">
                            <span class="text-[10px] uppercase text-[#5C5C66] block">Core Disciplines</span>
                            <span class="text-[#111113] font-sans font-semibold text-xs">Web Engineering &middot; Local Search &middot; Care</span>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase text-[#5C5C66] block">Demonstrated Proof</span>
                            <span class="text-[#111113] font-sans font-semibold text-xs">3 Signature Concept Architectures</span>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-[#111113] text-[11px] text-[#5C5C66] leading-relaxed font-sans bg-[#F8F8F6] p-3 border border-[#111113]/10">
                        <strong class="text-[#111113] block font-mono text-[10px] uppercase tracking-wider mb-1">Standard Notice:</strong>
                        All concept demonstrations are fully coded, interactive SSR prototypes benchmarked on mobile 4G speeds.
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 02 — THE CONTENTS (OVERSIZED EDITORIAL INDEX)                 -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-white border-b border-[#111113]/15" id="editorial-contents">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b-2 border-[#111113] gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 02 // PUBLICATION INDEX ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">Table of Contents</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#5C5C66] max-w-md leading-relaxed text-pretty font-sans">
                    Navigate the chapters of this publication: from core service essays and visual lookbooks to transparent rate sheets and direct studio correspondence.
                </p>
            </div>

            <!-- Oversized Editorial Contents Grid -->
            <div class="divide-y divide-[#111113]/15 border-b border-[#111113]/15">

                <a href="#editorial-cover" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">01.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">The Cover</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Broadsheet &middot; Studio Positioning</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        Executive summary of lightweight web engineering, mobile-first design, and transparent local search foundations.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 01 &rarr;</div>
                </a>

                <a href="#editorial-practice" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">02.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">The Practice</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Feature Essay &middot; Three Disciplines</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        In-depth articles examining Website Design &amp; Development, Local SEO Foundations, and Website Maintenance &amp; Care.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 03 &rarr;</div>
                </a>

                <a href="#editorial-works" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">03.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">Visual Essay</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Works Lookbook &middot; Signature Concepts</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        Interactive horizontal lookbook showcasing Aurora Clinic, Aarav Properties, and The Spice Room demonstration suites.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 05 &rarr;</div>
                </a>

                <a href="#editorial-margin-notes" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">04.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">Margin Notes</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Marginalia &middot; Strategic Truths</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        Editorial interludes addressing the 15MB PDF menu disaster, buried contact friction, and client asset sovereignty.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 07 &rarr;</div>
                </a>

                <a href="#editorial-sectors" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">05.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">Sector Directory</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Verticals &middot; High-Trust Practices</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        Cultural ledger covering Real Estate Brokers, Dining Establishments, Medical Clinics, and Wellness Studios.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 08 &rarr;</div>
                </a>

                <a href="#editorial-workflow" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">06.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">Production Spread</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Blueprint &middot; 5-Stage Process</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        The structured studio method: Discovery, Editorial Design, Semantic Production, Testing, and Deployment.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 10 &rarr;</div>
                </a>

                <a href="#editorial-pricing" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">07.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">Rate Card</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Rate Sheet &middot; Transparent Terms</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        Fixed commercial pricing from ₹14,999 (Essential) to ₹69,999+ (Custom), plus interactive rate estimator.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 12 &rarr;</div>
                </a>

                <a href="#editorial-correspondence" class="editorial-toc-item group py-6 sm:py-8 hover:bg-[#F8F8F6] px-4 sm:px-6 transition-all duration-200">
                    <div class="font-mono text-2xl sm:text-3xl font-bold text-[#B91C1C] group-hover:translate-x-1 transition-transform">08.</div>
                    <div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113] group-hover:text-[#B91C1C] transition-colors leading-tight">Correspondence</h3>
                        <span class="text-[11px] font-mono uppercase tracking-widest text-[#5C5C66] block mt-0.5">Intake Chamber &middot; Direct Channels</span>
                    </div>
                    <div class="font-sans text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                        Submit your URL for technical review or initiate direct WhatsApp/phone contact with the studio.
                    </div>
                    <div class="text-right font-mono text-xs font-semibold text-[#111113] group-hover:text-[#B91C1C]">P. 14 &rarr;</div>
                </a>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 03 — THE PRACTICE / FEATURE ESSAYS (SERVICES SPREAD)          -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-[#F8F8F6] border-b border-[#111113]/15" id="editorial-practice">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            <div class="border-b-2 border-[#111113] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 03 // FEATURE ESSAY ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">The Practice: Three Core Disciplines</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#5C5C66] max-w-md leading-relaxed text-pretty font-sans">
                    A detailed examination of how Velora approaches digital architecture, local search engineering, and continuous infrastructure care for premium enterprises.
                </p>
            </div>

            <!-- Service Feature 1: Website Design & Development -->
            <article class="bg-white border border-[#111113]/15 p-8 sm:p-12 shadow-sm editorial-reveal space-y-8">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#111113]/10 gap-4">
                    <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B91C1C]">
                        <span class="font-bold text-base">DISCIPLINE I</span>
                        <span>&middot;</span>
                        <span class="text-[#111113] font-semibold">WEB DESIGN &amp; DEVELOPMENT</span>
                    </div>
                    <span class="text-xs font-mono text-[#5C5C66]">Turnaround: 2 to 4 Weeks</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    <div class="lg:col-span-7 space-y-6">
                        <h3 class="editorial-serif text-3xl sm:text-4xl font-bold text-[#111113] leading-tight text-balance">
                            Clean, Lightweight Websites Engineered to Build Trust Instantly.
                        </h3>
                        <p class="font-sans text-sm sm:text-base text-[#5C5C66] leading-relaxed">
                            Your website is usually the first touchpoint a potential client evaluates. If it loads slowly, displays poorly on mobile, or hides your phone number, they immediately leave for a competitor. We build clean, lightweight websites designed to establish credibility instantly and turn visitors into actual calls, bookings, and quote requests.
                        </p>

                        <!-- Editorial Pull Quote -->
                        <div class="border-l-2 border-[#B91C1C] pl-5 py-2 my-4 bg-[#F8F8F6]">
                            <span class="text-[9px] font-mono uppercase tracking-wider text-[#B91C1C] block mb-1">STRATEGIC IMPERATIVE</span>
                            <p class="editorial-serif italic text-base sm:text-lg text-[#111113]">
                                &ldquo;Over 70% of local searches occur on smartphones. Every layout is engineered mobile-first with zero page-builder bloat.&rdquo;
                            </p>
                        </div>

                        <div>
                            <a href="/services/website-design" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                <span>Read Comprehensive Specification &rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div class="lg:col-span-5 bg-[#F8F8F6] p-6 sm:p-8 border border-[#111113]/15 space-y-6 font-sans">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">Canonical Deliverables</span>
                        <ul class="space-y-3 text-xs text-[#111113]">
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Mobile-first responsive architecture</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Direct Click-to-Call &amp; WhatsApp conversion triggers</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Ultra-fast page load times on mobile 4G/5G</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Clean semantic markup without page-builder bloat</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Clear service menus, price presentations &amp; portfolios</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Secure contact forms with instant email notifications</span>
                            </li>
                        </ul>
                        <div class="pt-4 border-t border-[#111113]/10 text-[11px] text-[#5C5C66] font-mono">
                            Excluded: Paid advertising management or native iOS/Android packages.
                        </div>
                    </div>
                </div>
            </article>

            <!-- Service Feature 2: Local SEO Foundations -->
            <article class="bg-white border border-[#111113]/15 p-8 sm:p-12 shadow-sm editorial-reveal space-y-8">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#111113]/10 gap-4">
                    <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B91C1C]">
                        <span class="font-bold text-base">DISCIPLINE II</span>
                        <span>&middot;</span>
                        <span class="text-[#111113] font-semibold">LOCAL SEO FOUNDATIONS</span>
                    </div>
                    <span class="text-xs font-mono text-[#5C5C66]">Turnaround: 1 to 2 Weeks</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    <div class="lg:col-span-7 space-y-6">
                        <h3 class="editorial-serif text-3xl sm:text-4xl font-bold text-[#111113] leading-tight text-balance">
                            Technical Search Optimization for Discovery on Google Maps and Local Search.
                        </h3>
                        <p class="font-sans text-sm sm:text-base text-[#5C5C66] leading-relaxed">
                            Having a beautiful website is ineffective if nearby customers cannot discover it when searching "dentist near me", "best cafe in Gurugram", or "commercial broker Delhi". We implement rigorous technical local SEO so search engines understand exactly what services you offer, where you operate, and why you are legitimate.
                        </p>

                        <!-- Editorial Pull Quote -->
                        <div class="border-l-2 border-[#B91C1C] pl-5 py-2 my-4 bg-[#F8F8F6]">
                            <span class="text-[9px] font-mono uppercase tracking-wider text-[#B91C1C] block mb-1">TRUTH IN ADVERTISING</span>
                            <p class="editorial-serif italic text-base sm:text-lg text-[#111113]">
                                &ldquo;We guarantee zero black-hat spam links or fake #1 rankings. We deliver structured data, speed, and exact NAP alignment.&rdquo;
                            </p>
                        </div>

                        <div>
                            <a href="/services/local-seo" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                <span>Read Comprehensive Specification &rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div class="lg:col-span-5 bg-[#F8F8F6] p-6 sm:p-8 border border-[#111113]/15 space-y-6 font-sans">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">Canonical Deliverables</span>
                        <ul class="space-y-3 text-xs text-[#111113]">
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Google Business Profile alignment guidelines</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Local Business Schema.org structured data markup</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Name, Address &amp; Phone (NAP) consistency audits</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Locality &amp; service intent keyword structure</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>XML sitemap generation &amp; Google Search Console indexing</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Core Web Vitals mobile speed compliance</span>
                            </li>
                        </ul>
                        <div class="pt-4 border-t border-[#111113]/10 text-[11px] text-[#5C5C66] font-mono">
                            Excluded: Guaranteed #1 rankings (no honest agency can guarantee algorithmic rankings).
                        </div>
                    </div>
                </div>
            </article>

            <!-- Service Feature 3: Website Maintenance & Care -->
            <article class="bg-white border border-[#111113]/15 p-8 sm:p-12 shadow-sm editorial-reveal space-y-8">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#111113]/10 gap-4">
                    <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B91C1C]">
                        <span class="font-bold text-base">DISCIPLINE III</span>
                        <span>&middot;</span>
                        <span class="text-[#111113] font-semibold">WEBSITE MAINTENANCE &amp; CARE</span>
                    </div>
                    <span class="text-xs font-mono text-[#5C5C66]">Retainer: Monthly or Annual</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    <div class="lg:col-span-7 space-y-6">
                        <h3 class="editorial-serif text-3xl sm:text-4xl font-bold text-[#111113] leading-tight text-balance">
                            Reliable Cloud Hosting, Security Monitoring &amp; Regular Content Updates.
                        </h3>
                        <p class="font-sans text-sm sm:text-base text-[#5C5C66] leading-relaxed">
                            A website is a critical business asset. When forms stop sending emails, links break, or prices become outdated, you quietly lose paying customers. Our maintenance service manages the server infrastructure, monitors uptime, and handles your regular content edits so you can focus entirely on running your business.
                        </p>

                        <!-- Editorial Pull Quote -->
                        <div class="border-l-2 border-[#B91C1C] pl-5 py-2 my-4 bg-[#F8F8F6]">
                            <span class="text-[9px] font-mono uppercase tracking-wider text-[#B91C1C] block mb-1">OPERATIONAL PEACE OF MIND</span>
                            <p class="editorial-serif italic text-base sm:text-lg text-[#111113]">
                                &ldquo;No proprietary lock-in. Straightforward month-to-month or annual terms with direct email and WhatsApp assistance.&rdquo;
                            </p>
                        </div>

                        <div>
                            <a href="/services/website-maintenance" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                <span>Read Comprehensive Specification &rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div class="lg:col-span-5 bg-[#F8F8F6] p-6 sm:p-8 border border-[#111113]/15 space-y-6 font-sans">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">Canonical Deliverables</span>
                        <ul class="space-y-3 text-xs text-[#111113]">
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>High-availability cloud hosting management</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>SSL certificate renewal &amp; security monitoring</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Monthly content updates (prices, menus, team)</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Regular contact form &amp; lead delivery verification</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Performance &amp; uptime monitoring</span>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <span class="text-[#B91C1C] font-mono font-bold">&check;</span>
                                <span>Direct support via WhatsApp and email</span>
                            </li>
                        </ul>
                        <div class="pt-4 border-t border-[#111113]/10 text-[11px] text-[#5C5C66] font-mono">
                            Excluded: Complete redesigns within standard maintenance tiers.
                        </div>
                    </div>
                </div>
            </article>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 04 — WORKS / VISUAL ESSAY (HORIZONTAL LOOKBOOK SPREAD)        -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-white border-b border-[#111113]/15 overflow-hidden" id="editorial-works">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div class="border-b-2 border-[#111113] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 04 // VISUAL ESSAY ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">Works: Three Signature Concepts</h2>
                </div>

                <!-- Lookbook Controls -->
                <div class="flex items-center gap-4">
                    <div id="editorial-lookbook-indicator" class="text-xs font-mono text-[#111113] font-semibold uppercase tracking-widest bg-[#F8F8F6] px-3 py-1.5 border border-[#111113]/20">
                        EXHIBIT <span id="editorial-active-folio">01</span> / 03
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button"
                                id="editorial-lookbook-prev"
                                aria-label="Previous Lookbook Exhibit"
                                class="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#111113] text-[#111113] hover:bg-[#111113] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C]">
                            &larr;
                        </button>
                        <button type="button"
                                id="editorial-lookbook-next"
                                aria-label="Next Lookbook Exhibit"
                                class="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#111113] text-[#111113] hover:bg-[#111113] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C]">
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>

            <!-- Horizontal Lookbook Viewport / Track -->
            <div class="editorial-lookbook-viewport w-full overflow-x-auto pb-6 scrollbar-none" id="editorial-lookbook-track" tabindex="0" role="region" aria-label="Works Lookbook Slider">
                <div class="flex gap-8 w-max min-w-full">

                    <!-- Lookbook Plate 1: Aurora Clinic -->
                    <article class="editorial-lookbook-card w-[85vw] sm:w-[580px] lg:w-[680px] bg-[#F8F8F6] border-2 border-[#111113] p-6 sm:p-10 space-y-6 shrink-0 editorial-shadow">
                        <div class="flex items-center justify-between border-b border-[#111113]/15 pb-4">
                            <span class="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold">PLATE 01 &middot; HEALTHCARE</span>
                            <span class="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold">
                                Signature Design Concept
                            </span>
                        </div>

                        <div>
                            <h3 class="editorial-serif text-3xl sm:text-4xl font-bold text-[#111113]">${escapeHTML(aurora.title)}</h3>
                            <span class="text-xs font-mono text-[#5C5C66] block mt-1">Medical Aesthetics &middot; High-Trust Clinical Layout</span>
                        </div>

                        <!-- Graphic Specimen Plate -->
                        <div class="editorial-specimen-dark p-6 space-y-4">
                            <div class="flex justify-between items-center text-[10px] font-mono text-[#A8A29E] border-b border-[#44403C] pb-2">
                                <span>INTERFACE ARCHITECTURE</span>
                                <span>WCAG 2.1 AA COMPLIANT</span>
                            </div>
                            <div class="space-y-2">
                                <span class="text-xs font-mono text-emerald-400 block font-semibold">Dr. Alisha Verma, MD &middot; Chief Dermatologist</span>
                                <div class="text-xs text-[#E7E5E4] font-sans">
                                    Transparent treatment rate schedules, doctor qualification cards, and zero-PDF structured service accordions.
                                </div>
                            </div>
                            <div class="pt-2 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                                <span>MedicalBusiness Schema</span>
                                <span>One-Tap Booking &rarr;</span>
                            </div>
                        </div>

                        <p class="text-xs sm:text-sm text-[#5C5C66] leading-relaxed font-sans">
                            ${escapeHTML(aurora.summary)}
                        </p>

                        <div class="pt-4 border-t border-[#111113]/15 flex items-center justify-between">
                            <a href="/portfolio#aurora-aesthetics" class="text-xs font-mono uppercase tracking-wider font-bold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                View Architectural Case Study &rarr;
                            </a>
                            <span class="text-[10px] font-mono text-[#5C5C66]">FOLIO: 01 / 03</span>
                        </div>
                    </article>

                    <!-- Lookbook Plate 2: Aarav Properties -->
                    <article class="editorial-lookbook-card w-[85vw] sm:w-[580px] lg:w-[680px] bg-[#F8F8F6] border-2 border-[#111113] p-6 sm:p-10 space-y-6 shrink-0 editorial-shadow">
                        <div class="flex items-center justify-between border-b border-[#111113]/15 pb-4">
                            <span class="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold">PLATE 02 &middot; REAL ESTATE</span>
                            <span class="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 font-semibold">
                                Signature Design Concept
                            </span>
                        </div>

                        <div>
                            <h3 class="editorial-serif text-3xl sm:text-4xl font-bold text-[#111113]">${escapeHTML(aarav.title)}</h3>
                            <span class="text-xs font-mono text-[#5C5C66] block mt-1">High-Trust Property Showcase &middot; Direct Broker WhatsApp</span>
                        </div>

                        <!-- Graphic Specimen Plate -->
                        <div class="editorial-specimen-dark p-6 space-y-4">
                            <div class="flex justify-between items-center text-[10px] font-mono text-[#A1A1AA] border-b border-[#27272A] pb-2">
                                <span>INVENTORY DOSSIER</span>
                                <span>RERA COMPLIANCE STRUCTURE</span>
                            </div>
                            <div class="space-y-2">
                                <span class="text-xs font-mono text-amber-400 block font-semibold">Floor Plan Viewer &middot; Golf Course Road Corridors</span>
                                <div class="text-xs text-[#E4E4E7] font-sans">
                                    Structured residential unit catalog, downloadable architectural floor plans, and direct lead routing without portal commissions.
                                </div>
                            </div>
                            <div class="pt-2 flex items-center justify-between text-[11px] font-mono text-amber-400">
                                <span>RealEstateAgent Schema</span>
                                <span>Direct WhatsApp Route &rarr;</span>
                            </div>
                        </div>

                        <p class="text-xs sm:text-sm text-[#5C5C66] leading-relaxed font-sans">
                            ${escapeHTML(aarav.summary)}
                        </p>

                        <div class="pt-4 border-t border-[#111113]/15 flex items-center justify-between">
                            <a href="/portfolio#aarav-estates" class="text-xs font-mono uppercase tracking-wider font-bold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                View Architectural Case Study &rarr;
                            </a>
                            <span class="text-[10px] font-mono text-[#5C5C66]">FOLIO: 02 / 03</span>
                        </div>
                    </article>

                    <!-- Lookbook Plate 3: The Spice Room -->
                    <article class="editorial-lookbook-card w-[85vw] sm:w-[580px] lg:w-[680px] bg-[#F8F8F6] border-2 border-[#111113] p-6 sm:p-10 space-y-6 shrink-0 editorial-shadow">
                        <div class="flex items-center justify-between border-b border-[#111113]/15 pb-4">
                            <span class="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold">PLATE 03 &middot; HOSPITALITY</span>
                            <span class="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300 font-semibold">
                                Signature Design Concept
                            </span>
                        </div>

                        <div>
                            <h3 class="editorial-serif text-3xl sm:text-4xl font-bold text-[#111113]">${escapeHTML(spice.title)}</h3>
                            <span class="text-xs font-mono text-[#5C5C66] block mt-1">Fine Contemporary Dining &middot; Native HTML Menu</span>
                        </div>

                        <!-- Graphic Specimen Plate -->
                        <div class="editorial-specimen-dark p-6 space-y-4">
                            <div class="flex justify-between items-center text-[10px] font-mono text-[#A8A29E] border-b border-[#44403C] pb-2">
                                <span>CULINARY ARCHITECTURE</span>
                                <span>ZERO-PDF NATIVE MENU</span>
                            </div>
                            <div class="space-y-2">
                                <span class="text-xs font-mono text-rose-400 block font-semibold">Instant Mobile Menu &middot; Dietary Filter Architecture</span>
                                <div class="text-xs text-[#E7E5E4] font-sans">
                                    Converts slow 15MB PDF food menus into lightning-fast native HTML with direct table reservation triggers and 1-tap Google Maps directions.
                                </div>
                            </div>
                            <div class="pt-2 flex items-center justify-between text-[11px] font-mono text-rose-400">
                                <span>Restaurant Schema.org</span>
                                <span>Reserve Table &rarr;</span>
                            </div>
                        </div>

                        <p class="text-xs sm:text-sm text-[#5C5C66] leading-relaxed font-sans">
                            ${escapeHTML(spice.summary)}
                        </p>

                        <div class="pt-4 border-t border-[#111113]/15 flex items-center justify-between">
                            <a href="/portfolio#the-spice-room" class="text-xs font-mono uppercase tracking-wider font-bold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                View Architectural Case Study &rarr;
                            </a>
                            <span class="text-[10px] font-mono text-[#5C5C66]">FOLIO: 03 / 03</span>
                        </div>
                    </article>

                </div>
            </div>

            <!-- Truth In Concept Banner -->
            <div class="p-4 bg-[#EFEFEA] border-l-4 border-[#111113] text-xs font-sans text-[#5C5C66] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span><strong>Concept Transparency:</strong> These demonstrations represent fully engineered code implementations built to showcase mobile response and conversion architecture.</span>
                <span class="font-mono text-[10px] uppercase tracking-wider text-[#111113] shrink-0">No Invented Metric Claims</span>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 05 — THE MARGIN NOTES (EDITORIAL INTERLUDE & PULL QUOTES)     -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 editorial-dark-section bg-[#111113] text-[#F8F8F6] border-b border-[#111113]" id="editorial-margin-notes">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="border-b border-[#F8F8F6]/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#EF4444] font-semibold block mb-2">[ CHAPTER 05 // MARGIN NOTES ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#F8F8F6] tracking-tight">Studio Axioms &amp; Strategic Realities</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#A1A1AA] max-w-md leading-relaxed text-pretty font-sans">
                    Critical observations on local conversion friction, code sovereignty, and user behavior gathered from commercial web practice.
                </p>
            </div>

            <!-- Three Editorial Marginalia Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div class="p-8 editorial-dark-card bg-[#18181B] border border-[#F8F8F6]/15 space-y-6 editorial-reveal">
                    <span class="text-xs font-mono text-[#EF4444] font-bold block">AXIOM 01 &middot; SPEED &amp; PERFORMANCE</span>
                    <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#F8F8F6] leading-snug">
                        The 15MB PDF Menu Disaster
                    </h3>
                    <p class="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
                        Never force mobile diners, salon clients, or dental patients to download a multi-megabyte PDF file just to read prices or treatments. On smartphone cellular connections, native semantic HTML renders in 50ms, adapts to screen width, and is indexed directly by Google search crawlers.
                    </p>
                    <div class="pt-4 border-t border-[#F8F8F6]/10 text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                        Source: Studio Research &middot; Zero-PDF Policy
                    </div>
                </div>

                <div class="p-8 editorial-dark-card bg-[#18181B] border border-[#F8F8F6]/15 space-y-6 editorial-reveal">
                    <span class="text-xs font-mono text-[#EF4444] font-bold block">AXIOM 02 &middot; CONVERSION CLARITY</span>
                    <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#F8F8F6] leading-snug">
                        Buried Contact Information Friction
                    </h3>
                    <p class="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
                        High-intent local clients evaluate services within the first two seconds. If they cannot immediately tap to call or open WhatsApp, they tap the back button and call your competitor. A persistent mobile contact bar with verified phone routing regularly increases direct inquiries by 25%.
                    </p>
                    <div class="pt-4 border-t border-[#F8F8F6]/10 text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                        Source: Conversion Architecture Ledger
                    </div>
                </div>

                <div class="p-8 editorial-dark-card bg-[#18181B] border border-[#F8F8F6]/15 space-y-6 editorial-reveal">
                    <span class="text-xs font-mono text-[#EF4444] font-bold block">AXIOM 03 &middot; ASSET SOVEREIGNTY</span>
                    <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#F8F8F6] leading-snug">
                        100% Client Ownership Standard
                    </h3>
                    <p class="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
                        We explicitly reject vendor lock-in. Many agencies build on proprietary site-builders where you never truly own your source code. Upon final project settlement, you receive 100% ownership of your design files, custom code repository, and domain records without recurring software hostage-taking.
                    </p>
                    <div class="pt-4 border-t border-[#F8F8F6]/10 text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                        Source: Commercial Practice Contract
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 06 — THE SECTOR INDEX (INTERACTIVE CULTURAL DIRECTORY)        -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-[#F8F8F6] border-b border-[#111113]/15" id="editorial-sectors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

            <div class="border-b-2 border-[#111113] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 06 // SECTOR DIRECTORY ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">Commercial Sector Directory</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#5C5C66] max-w-md leading-relaxed text-pretty font-sans">
                    Explore our sector-specific architectural considerations for high-trust commercial verticals across Delhi NCR, Chandigarh, and Bengaluru.
                </p>
            </div>

            <!-- Interactive Sector Directory System -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                <!-- Left Tab Column -->
                <div class="lg:col-span-4 divide-y divide-[#111113]/15 border-y border-[#111113]/15 bg-white">
                    ${INDUSTRIES.map((ind, idx) => `
                    <button type="button"
                            class="editorial-sector-tab w-full text-left p-5 sm:p-6 transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B91C1C] ${idx === 0 ? 'is-active' : ''}"
                            data-sector-index="${idx}"
                            aria-selected="${idx === 0 ? 'true' : 'false'}"
                            role="tab"
                            id="sector-tab-${idx}">
                        <div>
                            <span class="editorial-sector-tag text-[10px] font-mono uppercase tracking-widest block mb-1">0${idx + 1} // VERTICAL</span>
                            <h3 class="editorial-serif text-xl sm:text-2xl font-bold">${escapeHTML(ind.shortName || ind.name)}</h3>
                        </div>
                        <span class="editorial-sector-arrow text-xl" aria-hidden="true">&rarr;</span>
                    </button>
                    `).join('')}
                </div>

                <!-- Right Dossier Panel Column -->
                <div class="lg:col-span-8 bg-white border-2 border-[#111113] p-8 sm:p-12 editorial-shadow">
                    ${INDUSTRIES.map((ind, idx) => `
                    <div class="editorial-sector-panel space-y-8 ${idx === 0 ? '' : 'hidden'}"
                         id="sector-panel-${idx}"
                         role="tabpanel"
                         aria-labelledby="sector-tab-${idx}">

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#111113]/15 gap-4">
                            <div class="flex items-center gap-3">
                                <span class="text-3xl">${ind.icon}</span>
                                <div>
                                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">SECTOR SPECIFICATION</span>
                                    <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113]">${escapeHTML(ind.name)}</h3>
                                </div>
                            </div>
                            <a href="/industries/${escapeHTML(ind.slug)}" class="text-xs font-mono uppercase tracking-wider font-bold text-[#111113] hover:text-[#B91C1C] transition-colors">
                                View Full Industry Brief &rarr;
                            </a>
                        </div>

                        <!-- Core Friction & Solutions -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div class="space-y-2">
                                <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">Primary Conversion Challenge</span>
                                <p class="text-xs sm:text-sm text-[#5C5C66] leading-relaxed font-sans">
                                    ${escapeHTML(ind.challenges)}
                                </p>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[10px] font-mono uppercase tracking-widest text-[#111113] block font-bold">Client Expectation</span>
                                <p class="text-xs sm:text-sm text-[#5C5C66] leading-relaxed font-sans">
                                    ${escapeHTML(ind.expectations)}
                                </p>
                            </div>
                        </div>

                        <!-- Conversion Elements Ledger -->
                        <div class="pt-6 border-t border-[#111113]/15 space-y-4">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">Essential Architecture Elements</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#111113]">
                                ${ind.conversionElements.map(el => `
                                <div class="flex items-start gap-2 p-2.5 bg-[#F8F8F6] border border-[#111113]/10">
                                    <span class="text-[#B91C1C] font-mono font-bold">&bull;</span>
                                    <span>${escapeHTML(el)}</span>
                                </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- SEO Specification Note -->
                        <div class="pt-4 border-t border-[#111113]/15 text-xs font-mono text-[#5C5C66] flex items-center justify-between">
                            <span>Schema: ${escapeHTML(ind.seoConsiderations || 'LocalBusiness / Schema.org')}</span>
                            <a href="/contact" class="font-bold text-[#111113] hover:text-[#B91C1C]">Consult for this Sector &rarr;</a>
                        </div>
                    </div>
                    `).join('')}
                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 07 — PRODUCTION SPREAD (THE 5-PHASE EDITORIAL WORKFLOW)       -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-white border-b border-[#111113]/15" id="editorial-workflow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="border-b-2 border-[#111113] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 07 // PRODUCTION SPREAD ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">The 5-Stage Editorial Production Workflow</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#5C5C66] max-w-md leading-relaxed text-pretty font-sans">
                    A disciplined engineering schedule executed over 2 to 4 weeks, with direct senior developer accountability from initial discovery to cloud handoff.
                </p>
            </div>

            <!-- Workflow Visual Blueprint -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">

                <div class="p-6 bg-[#F8F8F6] border border-[#111113]/15 space-y-4 editorial-reveal relative">
                    <span class="font-mono text-3xl font-bold text-[#B91C1C]">01</span>
                    <div class="space-y-1">
                        <span class="text-[9px] font-mono uppercase tracking-widest text-[#5C5C66] block">WEEK 1</span>
                        <h3 class="editorial-serif text-xl font-bold text-[#111113]">Discovery &amp; Map</h3>
                    </div>
                    <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                        We analyze your local search demand, competitor presence, and map out page hierarchy and conversion triggers.
                    </p>
                </div>

                <div class="p-6 bg-[#F8F8F6] border border-[#111113]/15 space-y-4 editorial-reveal relative">
                    <span class="font-mono text-3xl font-bold text-[#B91C1C]">02</span>
                    <div class="space-y-1">
                        <span class="text-[9px] font-mono uppercase tracking-widest text-[#5C5C66] block">WEEK 1&ndash;2</span>
                        <h3 class="editorial-serif text-xl font-bold text-[#111113]">Editorial Design</h3>
                    </div>
                    <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                        We design high-contrast, responsive layouts focused on readable typography, transparent pricing, and phone actions.
                    </p>
                </div>

                <div class="p-6 bg-[#F8F8F6] border border-[#111113]/15 space-y-4 editorial-reveal relative">
                    <span class="font-mono text-3xl font-bold text-[#B91C1C]">03</span>
                    <div class="space-y-1">
                        <span class="text-[9px] font-mono uppercase tracking-widest text-[#5C5C66] block">WEEK 2&ndash;3</span>
                        <h3 class="editorial-serif text-xl font-bold text-[#111113]">SSR Production</h3>
                    </div>
                    <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                        We code lean, production-grade templates with zero plugin bloat, embedding LocalBusiness Schema and Google tags.
                    </p>
                </div>

                <div class="p-6 bg-[#F8F8F6] border border-[#111113]/15 space-y-4 editorial-reveal relative">
                    <span class="font-mono text-3xl font-bold text-[#B91C1C]">04</span>
                    <div class="space-y-1">
                        <span class="text-[9px] font-mono uppercase tracking-widest text-[#5C5C66] block">WEEK 3&ndash;4</span>
                        <h3 class="editorial-serif text-xl font-bold text-[#111113]">Quality Audit</h3>
                    </div>
                    <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                        Rigorous real-device testing on iOS and Android viewports, form delivery verification, and speed compliance checks.
                    </p>
                </div>

                <div class="p-6 bg-[#F8F8F6] border border-[#111113]/15 space-y-4 editorial-reveal relative">
                    <span class="font-mono text-3xl font-bold text-[#B91C1C]">05</span>
                    <div class="space-y-1">
                        <span class="text-[9px] font-mono uppercase tracking-widest text-[#5C5C66] block">LAUNCH DAY</span>
                        <h3 class="editorial-serif text-xl font-bold text-[#111113]">Cloud Handoff</h3>
                    </div>
                    <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                        Domain configuration, SSL certificates, search console submission, and 100% intellectual property transfer.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 08 — RATE CARD (PUBLICATION RATE SHEET & ESTIMATOR)           -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-[#F8F8F6] border-b border-[#111113]/15" id="editorial-pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="border-b-2 border-[#111113] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 08 // RATE CARD ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">Studio Rate Card &amp; Investment Schedule</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#5C5C66] max-w-md leading-relaxed text-pretty font-sans">
                    Transparent, fixed milestone pricing with zero hidden agency surcharges, zero recurring page-builder licensing fees, and full asset ownership.
                </p>
            </div>

            <!-- Rate Card Tiers -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                <!-- Essential Tier -->
                <div class="bg-white border-2 border-[#111113] p-8 space-y-6 editorial-reveal flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="border-b border-[#111113]/15 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#5C5C66] block">SINGLE-PAGE HIGH CONVERSION</span>
                            <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113]">Essential Folio</h3>
                        </div>
                        <div class="font-mono text-3xl sm:text-4xl font-bold text-[#111113]">
                            ₹14,999
                        </div>
                        <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                            Engineered for new practices needing an immediate, credible mobile presence and Google Maps alignment without bloat.
                        </p>
                        <ul class="space-y-2.5 text-xs font-sans text-[#111113] pt-4 border-t border-[#111113]/10">
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Single-page custom SSR architecture</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Mobile-first responsive performance</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> WhatsApp &amp; phone inquiry routing</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Google Business Profile alignment</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> 7 to 10 days delivery</li>
                        </ul>
                    </div>
                    <div class="pt-6 border-t border-[#111113]/15">
                        <a href="#editorial-correspondence" class="block text-center py-3 px-4 text-xs font-mono uppercase tracking-widest font-bold border border-[#111113] text-[#111113] hover:bg-[#111113] hover:text-white transition-colors">
                            Select Essential &rarr;
                        </a>
                    </div>
                </div>

                <!-- Professional Tier -->
                <div class="bg-white border-2 border-[#B91C1C] p-8 space-y-6 editorial-reveal flex flex-col justify-between editorial-shadow-accent">
                    <div class="space-y-4">
                        <div class="border-b border-[#B91C1C]/30 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">COMPREHENSIVE LOCAL SEARCH</span>
                            <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113]">Professional Edition</h3>
                        </div>
                        <div class="font-mono text-3xl sm:text-4xl font-bold text-[#B91C1C]">
                            ₹34,999
                        </div>
                        <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                            Complete digital presence with dedicated service pages, technical LocalBusiness schema, and locality targeting.
                        </p>
                        <ul class="space-y-2.5 text-xs font-sans text-[#111113] pt-4 border-t border-[#111113]/10">
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Up to 5 bespoke SSR pages</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Comprehensive Schema.org structured data</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Dedicated portfolio &amp; service catalogs</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Google Search Console verification</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> 2 to 3 weeks delivery</li>
                        </ul>
                    </div>
                    <div class="pt-6 border-t border-[#B91C1C]/20">
                        <a href="#editorial-correspondence" class="block text-center py-3 px-4 text-xs font-mono uppercase tracking-widest font-bold editorial-btn-accent hover:bg-[#111113] transition-colors shadow-sm">
                            Select Professional &rarr;
                        </a>
                    </div>
                </div>

                <!-- Custom Tier -->
                <div class="bg-white border-2 border-[#111113] p-8 space-y-6 editorial-reveal flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="border-b border-[#111113]/15 pb-4">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-[#5C5C66] block">ENTERPRISE ARCHITECTURE</span>
                            <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113]">Custom Studio</h3>
                        </div>
                        <div class="font-mono text-3xl sm:text-4xl font-bold text-[#111113]">
                            ₹69,999+
                        </div>
                        <p class="text-xs text-[#5C5C66] font-sans leading-relaxed">
                            Bespoke web applications, multi-branch directories, and advanced custom integrations for established firms.
                        </p>
                        <ul class="space-y-2.5 text-xs font-sans text-[#111113] pt-4 border-t border-[#111113]/10">
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Bespoke architectural scope</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Multi-location directory systems</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> CRM &amp; booking API integrations</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> Advanced speed optimization auditing</li>
                            <li class="flex items-start gap-2"><span class="text-[#B91C1C] font-mono">&check;</span> 4 to 6 weeks delivery</li>
                        </ul>
                    </div>
                    <div class="pt-6 border-t border-[#111113]/15">
                        <a href="#editorial-correspondence" class="block text-center py-3 px-4 text-xs font-mono uppercase tracking-widest font-bold border border-[#111113] text-[#111113] hover:bg-[#111113] hover:text-white transition-colors">
                            Commission Custom &rarr;
                        </a>
                    </div>
                </div>

            </div>

            <!-- Maintenance Retainer Add-on Box -->
            <div class="bg-white border border-[#111113]/15 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 editorial-reveal">
                <div class="space-y-1">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">ADD-ON RETAINER</span>
                    <h3 class="editorial-serif text-xl sm:text-2xl font-bold text-[#111113]">Ongoing Website Maintenance &amp; Care</h3>
                    <p class="text-xs text-[#5C5C66] font-sans max-w-xl leading-relaxed">
                        High-availability cloud hosting management, SSL renewals, monthly content edits (prices, menus, team bios), and continuous uptime monitoring.
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <span class="font-mono text-2xl font-bold text-[#111113] block">₹4,999 / mo</span>
                    <span class="text-[10px] font-mono text-[#5C5C66]">Or ₹15,000 bundled annually</span>
                </div>
            </div>

            <!-- Interactive Investment Estimator -->
            <div class="bg-white border-2 border-[#111113] p-8 sm:p-10 space-y-6 editorial-reveal" id="editorial-estimator">
                <div class="border-b border-[#111113]/15 pb-4">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">ESTIMATION UTILITY</span>
                    <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113]">Interactive Investment Calculator</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div class="md:col-span-8 space-y-6">
                        <div>
                            <label for="editorial-calc-pages" class="block text-xs font-mono uppercase tracking-wider text-[#111113] mb-2 font-semibold">
                                Scope of Unique Pages: <span id="editorial-calc-pages-val" class="text-[#B91C1C] font-bold">5 Pages</span>
                            </label>
                            <input type="range" id="editorial-calc-pages" min="1" max="25" value="5" step="1" class="w-full accent-[#B91C1C] cursor-pointer">
                            <div class="flex justify-between text-[10px] font-mono text-[#5C5C66] mt-1">
                                <span>1 Page (Landing)</span>
                                <span>5 Pages (Standard)</span>
                                <span>25 Pages (Extensive)</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                            <label class="flex items-center gap-2 p-3 bg-[#F8F8F6] border border-[#111113]/10 cursor-pointer">
                                <input type="checkbox" id="editorial-calc-seo" checked class="accent-[#B91C1C]">
                                <span>Local SEO Foundations (+₹17,500)</span>
                            </label>
                            <label class="flex items-center gap-2 p-3 bg-[#F8F8F6] border border-[#111113]/10 cursor-pointer">
                                <input type="checkbox" id="editorial-calc-maint" class="accent-[#B91C1C]">
                                <span>Annual Care Package (+₹15,000)</span>
                            </label>
                        </div>
                    </div>

                    <div class="md:col-span-4 editorial-calc-display bg-[#111113] text-white p-6 sm:p-8 text-center space-y-3">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] block">Estimated Project Total</span>
                        <div id="editorial-calc-total" class="font-mono text-3xl sm:text-4xl font-bold text-[#EF4444]">
                            ₹35,000
                        </div>
                        <span class="text-[10px] font-mono text-[#A1A1AA] block">Milestone: 50% start / 50% launch</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- CHAPTER 09 — CORRESPONDENCE (EDITORIAL INTAKE CHAMBER)                -->
    <!-- ===================================================================== -->
    <section class="editorial-section py-20 md:py-28 bg-white border-b border-[#111113]/15" id="editorial-correspondence">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div class="border-b-2 border-[#111113] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#B91C1C] font-semibold block mb-2">[ CHAPTER 09 // CORRESPONDENCE ]</span>
                    <h2 class="editorial-serif text-3xl sm:text-5xl font-bold text-[#111113] tracking-tight">Direct Studio Correspondence</h2>
                </div>
                <p class="text-xs sm:text-sm text-[#5C5C66] max-w-md leading-relaxed text-pretty font-sans">
                    Request a rigorous technical teardown of your existing website or schedule an introductory consultation with senior studio leadership.
                </p>
            </div>

            <!-- Correspondence Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                <!-- Left Column: Direct Studio Contact Channels -->
                <div class="lg:col-span-5 space-y-8">
                    <div class="space-y-3">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">STUDIO PROTOCOL</span>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-[#111113]">
                            Direct Senior Engineering Contact
                        </h3>
                        <p class="text-xs sm:text-sm text-[#5C5C66] font-sans leading-relaxed">
                            We do not employ high-pressure sales representatives. All prospective client inquiries are reviewed directly by senior engineering leadership within 24 business hours.
                        </p>
                    </div>

                    <div class="space-y-4 text-xs font-mono">
                        <div class="p-4 bg-[#F8F8F6] border border-[#111113]/15 flex items-center justify-between">
                            <div>
                                <span class="text-[9px] uppercase tracking-wider text-[#5C5C66] block">Direct Phone &middot; Studio Line</span>
                                <a href="tel:${CONFIG.phone.replace(/\s+/g, '')}" class="text-sm font-bold text-[#111113] hover:text-[#B91C1C]">${CONFIG.phone}</a>
                            </div>
                            <span class="text-xs text-[#B91C1C] font-bold">CALL &rarr;</span>
                        </div>

                        <div class="p-4 bg-[#F8F8F6] border border-[#111113]/15 flex items-center justify-between">
                            <div>
                                <span class="text-[9px] uppercase tracking-wider text-[#5C5C66] block">Instant WhatsApp &middot; Direct Broker</span>
                                <a href="https://wa.me/${CONFIG.whatsapp}" class="text-sm font-bold text-[#111113] hover:text-[#B91C1C]">Message WhatsApp</a>
                            </div>
                            <span class="text-xs text-[#B91C1C] font-bold">CHAT &rarr;</span>
                        </div>

                        <div class="p-4 bg-[#F8F8F6] border border-[#111113]/15 flex items-center justify-between">
                            <div>
                                <span class="text-[9px] uppercase tracking-wider text-[#5C5C66] block">Studio Email &middot; Inquiries</span>
                                <a href="mailto:${CONFIG.email}" class="text-sm font-bold text-[#111113] hover:text-[#B91C1C]">${CONFIG.email}</a>
                            </div>
                            <span class="text-xs text-[#B91C1C] font-bold">MAIL &rarr;</span>
                        </div>
                    </div>

                    <div class="p-4 bg-[#EFEFEA] border-l-2 border-[#111113] text-[11px] text-[#5C5C66] font-sans">
                        <strong>Studio Location:</strong> Gurugram, Haryana. Servicing commercial clients across Delhi NCR, Chandigarh, and Bengaluru.
                    </div>
                </div>

                <!-- Right Column: Real Technical Teardown Form submitting to /api/audit -->
                <div class="lg:col-span-7 bg-[#F8F8F6] border-2 border-[#111113] p-8 sm:p-12 editorial-shadow">
                    <div class="border-b border-[#111113]/15 pb-4 mb-6">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] block font-bold">TECHNICAL INTAKE</span>
                        <h3 class="editorial-serif text-2xl font-bold text-[#111113]">Request Website Teardown</h3>
                    </div>

                    <form id="editorial-audit-form" class="space-y-5" novalidate>
                        <!-- Honeypot Field -->
                        <div class="hidden" aria-hidden="true">
                            <label for="editorial_website_gotcha">Leave this blank</label>
                            <input type="text" id="editorial_website_gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
                        </div>

                        <div class="space-y-1.5">
                            <label for="editorial-form-url" class="block text-xs font-mono uppercase tracking-wider text-[#111113] font-semibold">
                                Existing Website URL <span class="text-[#B91C1C]">*</span>
                            </label>
                            <input type="url"
                                   id="editorial-form-url"
                                   name="website"
                                   required
                                   placeholder="https://yourbusiness.com"
                                   class="w-full px-4 py-3 text-sm bg-white border border-[#111113]/30 rounded-none focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] font-sans transition-colors">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="space-y-1.5">
                                <label for="editorial-form-name" class="block text-xs font-mono uppercase tracking-wider text-[#111113] font-semibold">
                                    Your Name / Practice
                                </label>
                                <input type="text"
                                       id="editorial-form-name"
                                       name="name"
                                       placeholder="Dr. Verma / Aarav Estates"
                                       class="w-full px-4 py-3 text-sm bg-white border border-[#111113]/30 rounded-none focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] font-sans transition-colors">
                            </div>

                            <div class="space-y-1.5">
                                <label for="editorial-form-phone" class="block text-xs font-mono uppercase tracking-wider text-[#111113] font-semibold">
                                    Phone / WhatsApp
                                </label>
                                <input type="tel"
                                       id="editorial-form-phone"
                                       name="phone"
                                       placeholder="+91 98765 43210"
                                       class="w-full px-4 py-3 text-sm bg-white border border-[#111113]/30 rounded-none focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] font-sans transition-colors">
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label for="editorial-form-industry" class="block text-xs font-mono uppercase tracking-wider text-[#111113] font-semibold">
                                Commercial Sector
                            </label>
                            <select id="editorial-form-industry"
                                    name="industry"
                                    class="w-full px-4 py-3 text-sm bg-white border border-[#111113]/30 rounded-none focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] font-sans transition-colors">
                                <option value="Real Estate & Property">Real Estate &amp; Property</option>
                                <option value="Clinics & Medical">Clinics &amp; Healthcare</option>
                                <option value="Restaurants & Hospitality">Restaurants &amp; Dining</option>
                                <option value="Salons & Wellness">Salons &amp; Wellness</option>
                                <option value="Professional Services">Professional Advisory / Other</option>
                            </select>
                        </div>

                        <!-- Feedback Banners -->
                        <div id="editorial-form-error" class="hidden p-3 bg-rose-50 border border-rose-300 text-rose-800 text-xs font-mono"></div>
                        <div id="editorial-form-success" class="hidden p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-sans space-y-1">
                            <strong class="font-mono block uppercase tracking-wider">Correspondence Received</strong>
                            <span>We have logged your URL for technical review. Senior leadership will review Core Web Vitals and local search structure within 24 hours.</span>
                        </div>

                        <button type="submit"
                                id="editorial-form-submit"
                                class="w-full py-4 px-6 min-h-[48px] editorial-btn-dark bg-[#111113] text-[#F8F8F6] text-xs font-mono uppercase tracking-[0.2em] font-bold hover:bg-[#B91C1C] transition-colors border border-[#111113] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]">
                            Submit Correspondence &amp; Request Teardown &rarr;
                        </button>
                    </form>
                </div>

            </div>

        </div>
    </section>
    `;

    const script = `
        window.initEditorialInteractions = function() {
            // 1. Mobile Menu Drawer Toggle with Accessible ARIA Management
            const menuBtn = document.getElementById('editorial-mobile-menu-btn');
            const drawer = document.getElementById('editorial-mobile-drawer');
            if (menuBtn && drawer) {
                const burgerIcon = menuBtn.querySelector('.editorial-menu-burger');

                const toggleDrawer = (open) => {
                    const isOpening = open !== undefined ? open : drawer.classList.contains('hidden');
                    menuBtn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
                    drawer.setAttribute('aria-hidden', isOpening ? 'false' : 'true');

                    if (isOpening) {
                        drawer.classList.remove('hidden');
                        drawer.classList.add('editorial-mobile-drawer');
                        if (burgerIcon) {
                            burgerIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                        }
                        document.body.style.overflow = 'hidden';
                    } else {
                        drawer.classList.add('hidden');
                        drawer.classList.remove('editorial-mobile-drawer');
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

            // 2. Horizontal Lookbook Slider
            const prevBtn = document.getElementById('editorial-lookbook-prev');
            const nextBtn = document.getElementById('editorial-lookbook-next');
            const track = document.getElementById('editorial-lookbook-track');
            const folioEl = document.getElementById('editorial-active-folio');

            if (track && prevBtn && nextBtn) {
                const updateFolio = () => {
                    if (!folioEl) return;
                    const scrollLeft = track.scrollLeft;
                    const cardWidth = track.firstElementChild ? track.firstElementChild.children[0].offsetWidth : 600;
                    const activeIndex = Math.min(3, Math.max(1, Math.round(scrollLeft / cardWidth) + 1));
                    folioEl.textContent = '0' + activeIndex;
                };

                prevBtn.addEventListener('click', () => {
                    const cardWidth = track.firstElementChild ? track.firstElementChild.children[0].offsetWidth : 600;
                    track.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
                });

                nextBtn.addEventListener('click', () => {
                    const cardWidth = track.firstElementChild ? track.firstElementChild.children[0].offsetWidth : 600;
                    track.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
                });

                track.addEventListener('scroll', updateFolio, { passive: true });

                // Keyboard Arrow navigation when track has focus
                track.addEventListener('keydown', (e) => {
                    const cardWidth = track.firstElementChild ? track.firstElementChild.children[0].offsetWidth : 600;
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        track.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
                    } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        track.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
                    }
                });
            }

            // 3. Sector Directory Tab Switcher
            const sectorTabs = document.querySelectorAll('.editorial-sector-tab');
            const sectorPanels = document.querySelectorAll('.editorial-sector-panel');

            if (sectorTabs.length && sectorPanels.length) {
                sectorTabs.forEach((tab, index) => {
                    const activateTab = () => {
                        sectorTabs.forEach((t, i) => {
                            const isSelected = i === index;
                            t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
                            if (isSelected) {
                                t.classList.add('is-active');
                            } else {
                                t.classList.remove('is-active');
                            }
                        });

                        sectorPanels.forEach((p, i) => {
                            if (i === index) {
                                p.classList.remove('hidden');
                            } else {
                                p.classList.add('hidden');
                            }
                        });
                    };

                    tab.addEventListener('click', activateTab);
                    tab.addEventListener('focus', activateTab);
                });
            }

            // 4. Interactive Investment Estimator
            const pagesInput = document.getElementById('editorial-calc-pages');
            const pagesVal = document.getElementById('editorial-calc-pages-val');
            const seoInput = document.getElementById('editorial-calc-seo');
            const maintInput = document.getElementById('editorial-calc-maint');
            const totalEl = document.getElementById('editorial-calc-total');

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
                };

                pagesInput.addEventListener('input', calculateTotal);
                if (seoInput) seoInput.addEventListener('change', calculateTotal);
                if (maintInput) maintInput.addEventListener('change', calculateTotal);
            }

            // 5. Technical Teardown Form Submission to /api/audit
            const auditForm = document.getElementById('editorial-audit-form');
            if (auditForm) {
                auditForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const errEl = document.getElementById('editorial-form-error');
                    const successEl = document.getElementById('editorial-form-success');
                    const submitBtn = document.getElementById('editorial-form-submit');
                    const urlInput = document.getElementById('editorial-form-url');
                    const gotchaInput = document.getElementById('editorial_website_gotcha');
                    const nameInput = document.getElementById('editorial-form-name');
                    const phoneInput = document.getElementById('editorial-form-phone');
                    const industryInput = document.getElementById('editorial-form-industry');

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
                        submitBtn.textContent = 'Analyzing Site & Submitting...';
                    }

                    try {
                        const payload = {
                            website: rawUrl,
                            source: 'Editorial Experience Intake',
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
                                submitBtn.textContent = 'Submission Confirmed ✓';
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
                            submitBtn.textContent = 'Submit Correspondence & Request Teardown →';
                        }
                    }
                });
            }

            // 6. Colophon FAQ Accordion
            const faqTriggers = document.querySelectorAll('.editorial-faq-trigger');
            faqTriggers.forEach(btn => {
                btn.addEventListener('click', function() {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    const targetId = this.getAttribute('aria-controls');
                    const panel = document.getElementById(targetId);
                    const icon = this.querySelector('.editorial-faq-icon');

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
                const reveals = document.querySelectorAll('.editorial-reveal');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15 });

                reveals.forEach(el => observer.observe(el));
                window.__veloraEditorialObserver = observer;
            } else {
                document.querySelectorAll('.editorial-reveal').forEach(el => el.classList.add('active'));
            }
        };

        window.cleanupEditorialInteractions = function() {
            document.body.style.overflow = '';
            if (window.__veloraEditorialObserver) {
                window.__veloraEditorialObserver.disconnect();
                window.__veloraEditorialObserver = null;
            }
        };

        if (typeof window.initEditorialInteractions === 'function') {
            window.initEditorialInteractions();
        }
    `;

    const styles = `
        html[data-experience="editorial"] {
            --color-bg: #F8F8F6;
            --color-surface: #FFFFFF;
            --color-card: #EFEFEA;
            --color-card-hover: #E8E8E2;
            --color-border: rgba(18, 18, 20, 0.12);
            --color-border-strong: rgba(18, 18, 20, 0.28);
            --color-text-main: #111113;
            --color-text-muted: #5C5C66;
            --color-faint: rgba(18, 18, 20, 0.04);
            --color-faint-hover: rgba(18, 18, 20, 0.08);
            --color-btn-bg: #111113;
            --color-btn-text: #F8F8F6;
            --color-btn-hover: #2A2A30;
            --color-nav-glass: rgba(248, 248, 246, 0.95);
            --color-accent: #B91C1C;
            --color-accent-light: #EF4444;
        }

        /* Suppress global floating CTA in Editorial to preserve broadsheet editorial margins */
        html[data-experience="editorial"] #desktop-floating-cta {
            display: none !important;
        }

        /* Editorial Typography & Broadsheet Styles */
        .editorial-serif {
            font-family: 'Cormorant Garamond', Georgia, Cambria, 'Times New Roman', serif;
            letter-spacing: -0.015em;
        }

        /* High-contrast Editorial Custom Classes */
        .editorial-shadow {
            box-shadow: 6px 6px 0px 0px #111113;
        }
        .editorial-shadow-accent {
            box-shadow: 6px 6px 0px 0px #B91C1C;
        }

        /* Chapter 02: Table of Contents */
        .editorial-toc-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        @media (min-width: 768px) {
            .editorial-toc-item {
                display: grid;
                grid-template-columns: 60px 240px 1fr 90px;
                align-items: baseline;
                gap: 1.5rem;
            }
        }

        /* Chapter 04: Lookbook Cards Desktop & Tablet Width */
        @media (min-width: 640px) {
            .editorial-lookbook-card {
                width: 580px !important;
            }
        }
        @media (min-width: 1024px) {
            .editorial-lookbook-card {
                width: 680px !important;
            }
        }

        /* Chapter 04: Lookbook Specimen */
        .editorial-specimen-dark {
            background-color: #18181B !important;
            border: 1px solid #27272A !important;
            color: #F8F8F6 !important;
        }

        /* Chapter 05: Margin Notes Dark Section */
        .editorial-dark-section {
            background-color: #111113 !important;
            color: #F8F8F6 !important;
        }
        .editorial-dark-card {
            background-color: #18181B !important;
            border: 1px solid rgba(248, 248, 246, 0.15) !important;
            color: #F8F8F6 !important;
        }
        .editorial-dark-card p {
            color: #A1A1AA !important;
        }

        /* Chapter 06: Sector Directory Tabs */
        .editorial-sector-tab.is-active {
            background-color: #111113 !important;
            color: #F8F8F6 !important;
        }
        .editorial-sector-tab.is-active h3 {
            color: #F8F8F6 !important;
        }
        .editorial-sector-tab.is-active .editorial-sector-tag {
            color: #EF4444 !important;
        }
        .editorial-sector-tab.is-active .editorial-sector-arrow {
            color: #EF4444 !important;
        }
        .editorial-sector-tab:not(.is-active) {
            background-color: #FFFFFF !important;
            color: #111113 !important;
        }
        .editorial-sector-tab:not(.is-active):hover {
            background-color: #F8F8F6 !important;
        }
        .editorial-sector-tab:not(.is-active) .editorial-sector-tag {
            color: #5C5C66 !important;
        }
        .editorial-sector-tab:not(.is-active):hover .editorial-sector-tag {
            color: #B91C1C !important;
        }
        .editorial-sector-tab:not(.is-active) .editorial-sector-arrow {
            color: #5C5C66 !important;
        }
        .editorial-sector-tab:not(.is-active):hover .editorial-sector-arrow {
            color: #111113 !important;
        }

        /* Chapter 08: Rate Card & Estimator */
        .editorial-btn-accent {
            background-color: #B91C1C !important;
            color: #FFFFFF !important;
        }
        .editorial-btn-accent:hover {
            background-color: #111113 !important;
        }
        .editorial-btn-dark {
            background-color: #111113 !important;
            color: #F8F8F6 !important;
        }
        .editorial-btn-dark:hover {
            background-color: #B91C1C !important;
        }
        .editorial-calc-display {
            background-color: #111113 !important;
            color: #FFFFFF !important;
        }

        /* Chapter 10: Colophon & FAQs */
        .editorial-colophon-footer {
            background-color: #111113 !important;
            color: #F8F8F6 !important;
        }
        .editorial-faq-container {
            background-color: #18181B !important;
            border: 1px solid rgba(248, 248, 246, 0.15) !important;
        }
        .editorial-faq-item {
            border-bottom: 1px solid rgba(248, 248, 246, 0.1) !important;
        }
        .editorial-faq-item:last-child {
            border-bottom: none !important;
        }
        .editorial-faq-panel {
            color: #A1A1AA !important;
        }

        /* Horizontal Lookbook Rail */
        .editorial-lookbook-viewport {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
        }

        .editorial-lookbook-card {
            scroll-snap-align: start;
        }

        /* Scrollbar polish */
        .scrollbar-none::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Mobile Drawer Entrance */
        .editorial-mobile-drawer {
            animation: editorialDrawerEnter 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes editorialDrawerEnter {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
            .editorial-mobile-drawer {
                animation: none !important;
            }
        }
    `;

    return {
        meta,
        headerContent: EditorialHeader(currentPath),
        mainContent: content,
        footerContent: EditorialFooter(),
        styles,
        script
    };
}

module.exports = {
    renderEditorialExperience
};
