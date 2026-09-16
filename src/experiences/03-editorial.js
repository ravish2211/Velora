// ============================================================================ //
// VELORA DIGITAL — 03 EDITORIAL EXPERIENCE PRESENTATION                         //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require('../components');

/**
 * Authoritative 03 Editorial Experience Presentation Renderer.
 * Independent design journal and cultural publication aesthetic.
 * Features asymmetric broadsheet layouts, oversized editorial headlines,
 * disciplined hairline rules, and strict data integration from src/data.js.
 */
function renderEditorialExperience() {
    const meta = {
        title: 'Velora Digital | Editorial Studio Architecture & Local Web Design',
        description: 'Independent design publication aesthetic for high-trust commercial practices. Typography-led layouts, lightweight mobile architecture, and complete asset ownership.',
        schema: generateSchema('FAQPage', { faqs: FAQS }),
        breadcrumbs: null
    };

    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spice = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const content = `
    <!-- ===================================================================== -->
    <!-- 1. EDITORIAL HERO SECTION (BROADSHEET MASTHEAD & OPENING SPREAD)      -->
    <!-- ===================================================================== -->
    <section class="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-velora-bg overflow-hidden border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Editorial Masthead Header Bar -->
            <div class="border-t-2 border-b border-velora-borderStrong pt-1 pb-1 mb-10 sm:mb-14 editorial-reveal">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-velora-muted gap-2">
                    <span class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-accent" aria-hidden="true"></span>
                        <span>Velora Digital &middot; Independent Web Studio</span>
                    </span>
                    <span>Art Direction 03 // Editorial Presentation</span>
                    <span class="hidden md:inline">Gurugram &middot; Delhi NCR &middot; Bengaluru &middot; Chandigarh</span>
                </div>
            </div>

            <!-- Asymmetric Broadsheet Grid Composition -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                <!-- Left Column: Oversized Editorial Statement -->
                <div class="lg:col-span-8 space-y-8">
                    <div class="editorial-reveal" style="transition-delay: 150ms;">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block pb-2 border-b border-velora-accent/40">
                            [ EDITORIAL PRACTICE // WEB DESIGN &amp; LOCAL SEARCH ]
                        </span>
                    </div>

                    <div class="editorial-line-mask">
                        <h1 class="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-semibold text-velora-text text-balance">
                            Typography, Restraint &amp; Digital Authority for Local Practices.
                        </h1>
                    </div>

                    <p class="text-base sm:text-lg text-velora-muted leading-relaxed max-w-2xl text-pretty font-sans editorial-reveal" style="transition-delay: 450ms;">
                        We design and develop fast, mobile-first websites and technical local search foundations for clinics, dining establishments, real estate firms, and commercial services. Engineered without page-builder bloat.
                    </p>

                    <!-- Editorial Action Pair -->
                    <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 editorial-reveal" style="transition-delay: 600ms;">
                        <a href="/contact" id="editorial-hero-primary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-none text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors border border-velora-button shadow-sm btn-luxury">
                            Request Studio Consultation &rarr;
                        </a>
                        <a href="#editorial-work" id="editorial-hero-secondary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-none text-xs uppercase tracking-[0.2em] font-bold bg-velora-surface hover:bg-velora-card text-velora-text transition-colors border border-velora-border">
                            Review Featured Work &darr;
                        </a>
                    </div>
                </div>

                <!-- Right Column: Editorial Specification Index Box -->
                <div class="lg:col-span-4 bg-velora-surface p-6 sm:p-8 border border-velora-border space-y-6 editorial-reveal" style="transition-delay: 750ms;">
                    <div class="border-b border-velora-border pb-4">
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-velora-accent block mb-1">Studio Folio</span>
                        <h2 class="editorial-serif text-2xl font-semibold text-velora-text">Practice Index</h2>
                    </div>

                    <div class="space-y-4 text-xs font-mono">
                        <div class="border-b border-velora-border/60 pb-3">
                            <span class="text-[10px] uppercase text-velora-muted block">Discipline</span>
                            <span class="text-velora-text font-sans font-medium text-xs">Lean SSR Web Design &amp; Local SEO</span>
                        </div>
                        <div class="border-b border-velora-border/60 pb-3">
                            <span class="text-[10px] uppercase text-velora-muted block">Turnaround</span>
                            <span class="text-velora-text font-sans font-medium text-xs">2 to 4 Weeks Structured Workflow</span>
                        </div>
                        <div class="border-b border-velora-border/60 pb-3">
                            <span class="text-[10px] uppercase text-velora-muted block">Asset Rights</span>
                            <span class="text-velora-text font-sans font-medium text-xs">100% Client Code &amp; Domain Ownership</span>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase text-velora-muted block">Engineering Benchmark</span>
                            <span class="text-velora-text font-sans font-medium text-xs">Lightweight Semantic SSR Architecture</span>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-velora-border text-[11px] text-velora-muted leading-relaxed font-sans">
                        Transparent fixed pricing with direct senior engineering accountability across all commercial engagements.
                    </div>
                </div>

            </div>

            <!-- Factual Ticker Strip -->
            <div class="mt-14 pt-8 border-t border-velora-border grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-velora-text font-sans editorial-reveal">
                <div class="flex items-start gap-3">
                    <span class="text-velora-accent font-mono text-sm font-bold">01.</span>
                    <div>
                        <strong class="block font-semibold text-velora-text">Clean Semantic Markup</strong>
                        <span class="text-velora-muted">Fast rendering without heavy runtime UI frameworks.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="text-velora-accent font-mono text-sm font-bold">02.</span>
                    <div>
                        <strong class="block font-semibold text-velora-text">Direct Conversion Pathways</strong>
                        <span class="text-velora-muted">Prominent phone, WhatsApp, and inquiry routing.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="text-velora-accent font-mono text-sm font-bold">03.</span>
                    <div>
                        <strong class="block font-semibold text-velora-text">Full Asset Ownership</strong>
                        <span class="text-velora-muted">Complete domain, design, and code rights transferred.</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 2. SERVICES SECTION (EDITORIAL CONTENTS / DISCIPLINE INDEX)           -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="editorial-services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-velora-border gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ INDEX // 02 ] &mdash; SERVICES</span>
                    <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Disciplines of Practice</h2>
                </div>
                <p class="text-xs sm:text-sm text-velora-muted max-w-md leading-relaxed text-pretty font-sans">
                    Three core disciplines engineered to establish immediate credibility and drive verifiable local enquiries.
                </p>
            </div>

            <!-- Editorial Table of Contents / Disciplines List -->
            <div class="divide-y divide-velora-border border-y border-velora-border">
                ${SERVICES.map((s, idx) => `
                <article class="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-velora-card/50 transition-colors px-4 sm:px-6 editorial-reveal editorial-card-hover">
                    <div class="lg:col-span-1">
                        <span class="font-mono text-xl sm:text-2xl font-bold text-velora-accent">0${idx + 1}.</span>
                    </div>

                    <div class="lg:col-span-4 space-y-2">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block">${escapeHTML(s.heroTag || 'STUDIO DISCIPLINE')}</span>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-semibold text-velora-text leading-snug">
                            ${escapeHTML(s.title)}
                        </h3>
                    </div>

                    <div class="lg:col-span-5 space-y-4 font-sans text-xs sm:text-sm text-velora-muted leading-relaxed">
                        <p>${escapeHTML(s.short)}</p>
                        
                        <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs pt-2">
                            ${s.benefits.slice(0, 3).map(b => `
                                <span class="flex items-center gap-1.5 text-velora-text/80">
                                    <span class="text-velora-accent font-mono">&bull;</span>
                                    <span>${escapeHTML(b)}</span>
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                        <a href="/services/${escapeHTML(s.slug)}" class="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-text hover:text-velora-accent transition-colors">
                            <span>Examine Brief</span>
                            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </article>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 3. SELECTED WORK (EDITORIAL FEATURE ARTICLE SPREADS)                  -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="editorial-work">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-velora-border gap-6 editorial-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ FEATURES // 03 ] &mdash; PORTFOLIO</span>
                    <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Selected Concept Demonstrations</h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm leading-relaxed font-sans">
                    Production-grade concept websites engineered to benchmark technical speed, conversion architecture, and local SEO structure.
                </div>
            </div>

            <div class="space-y-20">
                
                <!-- Feature 1: AURORA CLINIC (Lead Cover Feature) -->
                <article class="border border-velora-border bg-velora-surface p-8 sm:p-12 shadow-sm editorial-reveal ">
                    <div class="border-b border-velora-border pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-velora-accent">
                            <span class="font-bold">FEATURE 01 // ${escapeHTML(aurora.industry)}</span>
                            <span>&middot;</span>
                            <span class="px-2 py-0.5 border border-velora-accent/40 bg-velora-card font-semibold">${escapeHTML(aurora.type || 'Signature Design Concept')}</span>
                        </div>
                        <span class="text-xs font-mono text-velora-muted">Clinical Healthcare Architecture</span>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        <div class="lg:col-span-7 space-y-6">
                            <h3 class="editorial-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-velora-text leading-tight text-balance">
                                ${escapeHTML(aurora.title)}
                            </h3>
                            
                            <p class="text-sm sm:text-base text-velora-muted leading-relaxed font-sans">
                                ${escapeHTML(aurora.summary)}
                            </p>

                            <!-- Editorial Quote Pullout -->
                            <div class="border-l-2 border-velora-accent pl-5 py-2 my-6">
                                <span class="text-[10px] font-mono uppercase tracking-wider text-velora-accent block mb-1">Architectural UX Decision</span>
                                <p class="editorial-serif italic text-base sm:text-lg text-velora-text leading-snug">
                                    &ldquo;${escapeHTML(aurora.keyUxDecisions || 'Replaced heavy PDF service menus with structured HTML accordions; moved doctor credentials above the fold.')}&rdquo;
                                </p>
                            </div>

                            <div>
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-buttonText bg-velora-button px-6 py-3 hover:bg-velora-buttonHover transition-colors btn-luxury">
                                    <span>Examine Complete Case Study</span>
                                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-5 bg-velora-card p-6 sm:p-8 border border-velora-border space-y-6 font-sans">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block pb-2 border-b border-velora-border">Specifications &amp; Deliverables</span>
                            
                            <ul class="space-y-3 text-xs text-velora-muted">
                                ${aurora.deliverables ? aurora.deliverables.map(d => `
                                    <li class="flex items-start gap-2.5">
                                        <span class="text-velora-accent font-mono font-bold">&mdash;</span>
                                        <span class="text-velora-text">${escapeHTML(d)}</span>
                                    </li>
                                `).join('') : ''}
                            </ul>

                            <div class="pt-4 border-t border-velora-border text-xs space-y-1">
                                <strong class="text-velora-text block font-mono text-[10px] uppercase tracking-wider">Technical Priority:</strong>
                                <p class="text-velora-muted leading-relaxed">${escapeHTML(aurora.technicalPriorities || 'Lightning-fast mobile load time on 4G networks; semantic MedicalBusiness schema integration.')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Two-Column Asymmetric Spread: Projects 2 & 3 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    <!-- Feature 2: AARAV PROPERTIES -->
                    <article class="border border-velora-border bg-velora-surface p-8 sm:p-10 shadow-sm flex flex-col justify-between editorial-reveal editorial-card-hover ">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between pb-4 border-b border-velora-border text-xs font-mono">
                                <span class="text-velora-accent uppercase tracking-wider font-bold">FEATURE 02 // ${escapeHTML(aarav.industry)}</span>
                                <span class="text-[10px] px-2 py-0.5 border border-velora-accent/40 bg-velora-card font-semibold">${escapeHTML(aarav.type || 'Signature Design Concept')}</span>
                            </div>

                            <h3 class="editorial-headline text-2xl sm:text-3xl font-semibold text-velora-text">
                                ${escapeHTML(aarav.title)}
                            </h3>

                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                                ${escapeHTML(aarav.summary)}
                            </p>

                            <div class="p-4 bg-velora-card border border-velora-border text-xs font-sans space-y-2">
                                <span class="text-[10px] font-mono uppercase text-velora-accent block">UX Architecture</span>
                                <p class="text-velora-text italic">${escapeHTML(aarav.keyUxDecisions || 'Eliminated invasive newsletter pop-ups; structured property specs into scannable data tables.')}</p>
                            </div>

                            <div class="space-y-2 pt-2 text-xs font-sans text-velora-muted">
                                ${aarav.deliverables ? aarav.deliverables.slice(0, 3).map(d => `
                                    <div class="flex items-center gap-2">
                                        <span class="text-velora-accent font-mono">&bull;</span>
                                        <span>${escapeHTML(d)}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </div>

                        <div class="pt-8 mt-8 border-t border-velora-border">
                            <a href="/portfolio" class="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-text hover:text-velora-accent transition-colors">
                                <span>Examine Case Study</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </article>

                    <!-- Feature 3: THE SPICE ROOM -->
                    <article class="border border-velora-border bg-velora-surface p-8 sm:p-10 shadow-sm flex flex-col justify-between editorial-reveal editorial-card-hover ">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between pb-4 border-b border-velora-border text-xs font-mono">
                                <span class="text-velora-accent uppercase tracking-wider font-bold">FEATURE 03 // ${escapeHTML(spice.industry)}</span>
                                <span class="text-[10px] px-2 py-0.5 border border-velora-accent/40 bg-velora-card font-semibold">${escapeHTML(spice.type || 'Signature Design Concept')}</span>
                            </div>

                            <h3 class="editorial-headline text-2xl sm:text-3xl font-semibold text-velora-text">
                                ${escapeHTML(spice.title)}
                            </h3>

                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                                ${escapeHTML(spice.summary)}
                            </p>

                            <div class="p-4 bg-velora-card border border-velora-border text-xs font-sans space-y-2">
                                <span class="text-[10px] font-mono uppercase text-velora-accent block">UX Architecture</span>
                                <p class="text-velora-text italic">${escapeHTML(spice.keyUxDecisions || 'Converted all menu items from PDF to native HTML for lightning-fast loading; added one-tap Get Directions button.')}</p>
                            </div>

                            <div class="space-y-2 pt-2 text-xs font-sans text-velora-muted">
                                ${spice.deliverables ? spice.deliverables.slice(0, 3).map(d => `
                                    <div class="flex items-center gap-2">
                                        <span class="text-velora-accent font-mono">&bull;</span>
                                        <span>${escapeHTML(d)}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </div>

                        <div class="pt-8 mt-8 border-t border-velora-border">
                            <a href="/portfolio" class="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-text hover:text-velora-accent transition-colors">
                                <span>Examine Case Study</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </article>

                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 4. SPECIALIZED SECTORS (EDITORIAL SECTOR INDEX)                       -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="editorial-sectors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 editorial-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ SECTORS // 04 ] &mdash; COMMERCIAL SCOPE</span>
                <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Commercial Sectors of Focus</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                    Four distinct practice disciplines where digital clarity and local discovery directly influence client acquisition.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${INDUSTRIES.map((ind, idx) => `
                <div class="p-6 sm:p-8 bg-velora-card border border-velora-border flex flex-col justify-between shadow-sm editorial-reveal editorial-card-hover">
                    <div>
                        <div class="text-[10px] font-mono text-velora-accent uppercase tracking-widest pb-3 mb-4 border-b border-velora-border">
                            &sect; 0${idx + 1}
                        </div>
                        <h3 class="editorial-serif text-xl sm:text-2xl font-semibold text-velora-text mb-3">
                            ${escapeHTML(ind.name)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6 font-sans">
                            ${escapeHTML(ind.desc)}
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border">
                        <a href="/industries/${escapeHTML(ind.slug)}" class="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-velora-text hover:text-velora-accent transition-colors">
                            <span>Sector Blueprint</span>
                            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 5. BEFORE / AFTER (PHYSICAL EDITORIAL COMPARISON SLIDER)               -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="editorial-comparison">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-3xl mx-auto text-center mb-14 editorial-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ COMPARISON // 05 ] &mdash; TECHNICAL AUDIT</span>
                <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">The Difference is Obvious</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                    Compare an unoptimized generic local template against Velora&rsquo;s lightweight editorial architecture.
                </p>
            </div>

            <!-- Comparison Canvas -->
            <div class="max-w-4xl mx-auto editorial-reveal">
                <div id="editorial-before-after-container" 
                     tabindex="0" 
                     role="slider" 
                     aria-valuemin="0" 
                     aria-valuemax="100" 
                     aria-valuenow="85" 
                     aria-label="Before and After Comparison" 
                     class="relative w-full min-h-[420px] sm:min-h-0 sm:aspect-[16/9] select-none touch-none focus:outline-none focus:ring-2 focus:ring-velora-accent border border-velora-borderStrong shadow-md overflow-hidden bg-velora-card ">
                    
                    <!-- Background Layers -->
                    <div class="absolute inset-0 bg-[#E8E6DE]" id="editorial-before-bg"></div>
                    <div class="absolute inset-0 bg-[#FFFFFF]" id="editorial-after-bg" style="clip-path: polygon(0 0, 85% 0, 85% 100%, 0 100%);"></div>

                    <!-- Before Content Layer -->
                    <div id="editorial-before-content" class="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none transition-opacity duration-200" style="opacity: 0;">
                        <div class="pb-4 border-b border-[#D2CDC1] flex items-center justify-between">
                            <span class="editorial-serif text-xl sm:text-2xl font-bold text-[#4B4842]">Unoptimized Template Architecture</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#DDD8CC] text-[#6E685C] border border-[#D2CDC1]">Heavy Builder &middot; Unstructured Layout</span>
                        </div>
                        <div class="my-auto space-y-3 max-w-lg">
                            <div class="editorial-serif text-2xl sm:text-3xl text-[#2B2925] leading-snug">
                                &ldquo;Please download our attached PDF document to view our service list and pricing.&rdquo;
                            </div>
                            <p class="text-xs text-[#6E685C] leading-relaxed font-sans">
                                Buried phone numbers, slow mobile rendering on cellular networks, unoptimized scripts, and zero structured local schema.
                            </p>
                        </div>
                        <div class="pt-3 border-t border-[#D2CDC1] text-[11px] font-mono text-[#6E685C] flex items-center gap-4">
                            <span>Buried Contact Actions</span>
                            <span>&middot;</span>
                            <span>PDF-Locked Information</span>
                            <span>&middot;</span>
                            <span>Missing Structured Schema</span>
                        </div>
                    </div>

                    <!-- After Content Layer -->
                    <div id="editorial-after-content" class="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none transition-opacity duration-200" style="opacity: 1;">
                        <div class="pb-4 border-b border-velora-border flex items-center justify-between">
                            <span class="editorial-serif text-xl sm:text-2xl font-bold text-velora-text">Velora Editorial Architecture</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-velora-surface text-velora-accent border border-velora-accent/40 font-bold">Lightweight Architecture &middot; Semantic SSR</span>
                        </div>
                        <div class="my-auto space-y-3 max-w-lg">
                            <div class="editorial-serif text-2xl sm:text-3xl text-velora-text leading-snug">
                                Fast HTML Menus, Prominent Direct Contact &amp; Local Google Search Visibility
                            </div>
                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                                Legible typography, one-tap WhatsApp enquiries, clear service rates, and comprehensive Schema.org JSON-LD structured data.
                            </p>
                        </div>
                        <div class="pt-3 border-t border-velora-border text-[11px] font-mono text-velora-accent font-semibold flex items-center gap-4">
                            <span>Semantic SSR Code</span>
                            <span>&middot;</span>
                            <span>Direct Conversion Pathways</span>
                            <span>&middot;</span>
                            <span>Full Asset Ownership</span>
                        </div>
                    </div>

                    <!-- Draggable Physical Divider Handle -->
                    <div id="editorial-slider-handle" class="absolute top-0 bottom-0 w-1 bg-velora-accent cursor-ew-resize z-20 flex items-center justify-center -translate-x-1/2" style="left: 85%;">
                        <div class="w-8 h-8 rounded-full bg-velora-card border-2 border-velora-accent shadow-md flex items-center justify-center text-velora-accent text-xs font-bold font-mono">
                            &harr;
                        </div>
                    </div>

                </div>

                <!-- Accessibility Instructions -->
                <div class="mt-4 text-center text-[11px] font-mono text-velora-muted">
                    Drag divider handle or focus and navigate using Left / Right arrow keys.
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 6. THE VELORA STANDARD (EDITORIAL MANIFESTO)                          -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="editorial-standard">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-3xl mb-16 editorial-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ MANIFESTO // 06 ] &mdash; PRINCIPLES</span>
                <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">The Velora Standard</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                    Every website we engineer is guided by three non-negotiable principles designed to deliver measurable, lasting business value.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Principle 1: Lean by Design -->
                <div class="bg-velora-card p-8 sm:p-10 border border-velora-border shadow-sm flex flex-col justify-between editorial-reveal">
                    <div class="space-y-4">
                        <div class="text-[11px] font-mono uppercase tracking-widest text-velora-accent pb-3 border-b border-velora-border">
                            PRINCIPLE 01 // ARCHITECTURE
                        </div>
                        <h3 class="editorial-serif text-2xl font-semibold text-velora-text">Lean by Design</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                            We write lightweight, semantic code crafted specifically for your business. Zero bloated page builders and zero unnecessary runtime scripts&mdash;ensuring pages render instantly on standard mobile connections.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border text-[11px] font-mono text-velora-text/80 mt-6">
                        Custom-coded &middot; Instant mobile rendering
                    </div>
                </div>

                <!-- Principle 2: Built for Local Conversion -->
                <div class="bg-velora-card p-8 sm:p-10 border border-velora-border shadow-sm flex flex-col justify-between editorial-reveal">
                    <div class="space-y-4">
                        <div class="text-[11px] font-mono uppercase tracking-widest text-velora-accent pb-3 border-b border-velora-border">
                            PRINCIPLE 02 // CONVERSION
                        </div>
                        <h3 class="editorial-serif text-2xl font-semibold text-velora-text">Built for Local Conversion</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                            Every interface is structured around direct commercial outcomes: prominent click-to-call, instant WhatsApp triggers, scannable service menus, and Schema.org JSON-LD structured data for Google Maps discovery.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border text-[11px] font-mono text-velora-text/80 mt-6">
                        Schema.org JSON-LD &middot; Instant enquiry routing
                    </div>
                </div>

                <!-- Principle 3: Complete Asset Ownership -->
                <div class="bg-velora-card p-8 sm:p-10 border border-velora-border shadow-sm flex flex-col justify-between editorial-reveal">
                    <div class="space-y-4">
                        <div class="text-[11px] font-mono uppercase tracking-widest text-velora-accent pb-3 border-b border-velora-border">
                            PRINCIPLE 03 // OWNERSHIP
                        </div>
                        <h3 class="editorial-serif text-2xl font-semibold text-velora-text">Complete Asset Ownership</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                            When your project goes live, full ownership of your custom code, assets, and domain records transfers directly to you. No ongoing platform fees, no subscription traps, and no proprietary vendor lock-in.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border text-[11px] font-mono text-velora-text/80 mt-6">
                        100% Client owned &middot; Zero vendor lock-in
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 7. PRACTICE METHODOLOGY (CHRONOLOGICAL PRODUCTION NOTES)               -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="editorial-process">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 editorial-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ METHODOLOGY // 07 ] &mdash; PRODUCTION CHRONOLOGY</span>
                <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">How We Build Your Website</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                    A structured 2-to-4 week workflow with clear milestones and zero guesswork.
                </p>
            </div>

            <!-- Dynamically Mapped Canonical Process Steps -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                ${SERVICES[0].process.map((step, idx) => `
                <div class="p-6 bg-velora-surface border border-velora-border flex flex-col justify-between shadow-sm relative editorial-reveal">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                            <span class="font-mono text-xl font-bold text-velora-accent">${escapeHTML(step.step)}</span>
                            <span class="text-[9px] font-mono uppercase tracking-widest text-velora-muted">PHASE 0${idx + 1}</span>
                        </div>
                        <h3 class="editorial-serif text-lg font-semibold text-velora-text leading-snug">
                            ${escapeHTML(step.title)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            ${escapeHTML(step.desc)}
                        </p>
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 8. PRICING SCHEDULE (EDITORIAL INVESTMENT LEDGER & ESTIMATOR)         -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="editorial-pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-3xl mx-auto text-center mb-16 editorial-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ INVESTMENT // 08 ] &mdash; COMMERCIAL SCHEDULE</span>
                <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Standard Project Pricing</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                    Clear, transparent pricing schedules based on scope and architectural requirements.
                </p>
            </div>

            <!-- Pricing Tiers Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
                
                <!-- Essential Web -->
                <div class="p-8 sm:p-10 bg-velora-card border border-velora-border flex flex-col justify-between shadow-sm editorial-reveal editorial-card-hover">
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-velora-muted pb-3 mb-4 border-b border-velora-border">
                            TIER 01 // ESSENTIAL
                        </div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-2">Essential Web</h3>
                        <div class="text-3xl font-semibold text-velora-text editorial-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.essential.toLocaleString('en-IN')}
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6 font-sans">
                            Designed for single-location practices requiring an immediate, high-trust digital presence.
                        </p>
                        <ul class="space-y-3 text-xs text-velora-muted mb-8 font-sans">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Up to 5 Custom Mobile-First Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Direct Phone &amp; WhatsApp Integration</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Mobile-First Lightweight SSR</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Secure SSL &amp; Cloud Deployment</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border block transition-colors">
                        Engage Essential Scope &rarr;
                    </a>
                </div>

                <!-- Professional (Commercial Standard) -->
                <div class="p-8 sm:p-10 bg-velora-card border-2 border-velora-accent flex flex-col justify-between shadow-md relative editorial-reveal editorial-card-hover">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-velora-accent text-velora-buttonText text-[9px] font-mono uppercase tracking-widest font-bold">
                        Commercial Standard
                    </div>
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-velora-accent pb-3 mb-4 border-b border-velora-border">
                            TIER 02 // PROFESSIONAL
                        </div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-2">Professional</h3>
                        <div class="text-3xl font-semibold text-velora-text editorial-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.professional.toLocaleString('en-IN')}
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6 font-sans">
                            For competitive regional practices seeking dominant local search discovery and patient trust.
                        </p>
                        <ul class="space-y-3 text-xs text-velora-muted mb-8 font-sans">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Up to 10 Bespoke Designed Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Local Search Schema.org Foundation</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Google Business Profile Synchronization</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> 3 Months Active Maintenance Included</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="w-full py-3.5 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover block transition-colors btn-luxury">
                        Engage Professional Scope &rarr;
                    </a>
                </div>

                <!-- Custom Scope -->
                <div class="p-8 sm:p-10 bg-velora-card border border-velora-border flex flex-col justify-between shadow-sm editorial-reveal editorial-card-hover">
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-velora-muted pb-3 mb-4 border-b border-velora-border">
                            TIER 03 // CUSTOM
                        </div>
                        <h3 class="editorial-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-2">Custom Scope</h3>
                        <div class="text-3xl font-semibold text-velora-text editorial-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.customBase.toLocaleString('en-IN')}+
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6 font-sans">
                            For multi-branch clinics, extensive real estate portfolios, and private institutions.
                        </p>
                        <ul class="space-y-3 text-xs text-velora-muted mb-8 font-sans">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Multi-Location Architecture</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Custom Catalog &amp; Booking Integrations</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Comprehensive Local Directory Structuring</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&mdash;</span> Priority Engineering Support</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border block transition-colors">
                        Request Custom Consultation &rarr;
                    </a>
                </div>

            </div>

            <!-- Interactive Editorial Scope Estimator -->
            <div class="max-w-3xl mx-auto p-6 sm:p-8 bg-velora-card border border-velora-border shadow-sm editorial-reveal">
                <div class="text-center pb-6 mb-6 border-b border-velora-border">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-velora-accent block mb-1">Specification Tool</span>
                    <h3 class="editorial-serif text-2xl font-semibold text-velora-text">Estimate Your Project Scope</h3>
                </div>

                <div class="space-y-6 font-sans">
                    <div>
                        <div class="flex justify-between items-center mb-2 text-xs">
                            <label for="editorial-calc-pages" class="font-mono uppercase text-velora-text">Custom Page Scope:</label>
                            <span id="editorial-calc-pages-val" class="font-mono font-bold text-velora-accent" style="font-variant-numeric: tabular-nums;">5 Pages</span>
                        </div>
                        <input type="range" id="editorial-calc-pages" min="1" max="15" value="5" class="w-full accent-[#A53222] cursor-pointer">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-velora-border">
                        <label class="flex items-center gap-3 p-3 bg-velora-surface border border-velora-border cursor-pointer text-xs">
                            <input type="checkbox" id="editorial-calc-seo" checked class="accent-[#A53222]">
                            <div>
                                <span class="block font-semibold text-velora-text">Local SEO Foundation</span>
                                <span class="text-velora-muted text-[10px]">+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')} one-time</span>
                            </div>
                        </label>

                        <label class="flex items-center gap-3 p-3 bg-velora-surface border border-velora-border cursor-pointer text-xs">
                            <input type="checkbox" id="editorial-calc-maint" class="accent-[#A53222]">
                            <div>
                                <span class="block font-semibold text-velora-text">Ongoing Maintenance</span>
                                <span class="text-velora-muted text-[10px]">+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')}/year</span>
                            </div>
                        </label>
                    </div>

                    <div class="pt-6 border-t border-velora-border flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block">Estimated Investment</span>
                            <div id="editorial-calc-total" class="editorial-serif text-3xl sm:text-4xl font-semibold text-velora-text text-balance" style="font-variant-numeric: tabular-nums;">
                                ₹35,000
                            </div>
                        </div>
                        <a id="editorial-calc-quote-btn" href="/contact?tier=professional" class="w-full sm:w-auto px-8 py-3.5 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors btn-luxury">
                            Request Quote For This Scope &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <!-- Sourced Pricing Scope Disclaimer -->
            <div class="mt-8 text-center text-[11px] text-velora-muted max-w-2xl mx-auto font-sans">
                Project pricing covers website design &amp; development. Domain, hosting, third-party services and optional ongoing maintenance are quoted separately where applicable.
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 9. DIAGNOSTIC REVIEW (EDITORIAL TECHNICAL AUDIT FORM)                 -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="editorial-audit">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-8 sm:p-12 bg-velora-surface border border-velora-border shadow-sm editorial-reveal">
                
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    
                    <div class="md:col-span-6 space-y-4 font-sans">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block">[ EVALUATION // 09 ]</span>
                        <h2 class="editorial-headline text-2xl sm:text-3xl font-semibold text-velora-text leading-snug">
                            Complimentary Website &amp; Local SEO Evaluation
                        </h2>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed">
                            Enter your website URL below to receive a technical evaluation of your mobile speed, conversion architecture, and local search structure.
                        </p>
                        
                        <ul class="space-y-2.5 text-xs text-velora-muted pt-2">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&bull;</span> Speed &amp; Mobile Usability Check</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&bull;</span> Conversion Architecture Review</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-mono">&bull;</span> Local SEO &amp; Schema Foundation</li>
                        </ul>
                    </div>

                    <div class="md:col-span-6">
                        <div class="bg-velora-card p-6 border border-velora-border shadow-sm">
                            <form id="editorial-audit-form" class="space-y-4">
                                <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden" aria-hidden="true">
                                    <input type="text" name="_gotcha" id="editorial-audit-gotcha" tabindex="-1" autocomplete="off">
                                </div>

                                <div>
                                    <label for="editorial-audit-url" class="block text-xs font-mono uppercase tracking-wider text-velora-text mb-2">
                                        Website Address:
                                    </label>
                                    <input type="url" 
                                           id="editorial-audit-url" 
                                           name="website" 
                                           placeholder="https://yourwebsite.com" 
                                           autocomplete="url" 
                                           required 
                                           class="w-full px-4 py-3 bg-velora-surface border border-velora-border text-xs text-velora-text placeholder-velora-muted focus:outline-none focus:ring-1 focus:ring-velora-accent">
                                </div>

                                <div id="editorial-audit-error" class="hidden text-xs text-red-600 font-medium font-sans"></div>

                                <button type="submit" id="editorial-audit-submit-btn" class="w-full py-3.5 text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors border border-velora-button btn-luxury">
                                    Request Technical Teardown &rarr;
                                </button>
                            </form>

                            <div id="editorial-audit-success" class="hidden flex-col items-center justify-center text-center py-6 space-y-2 font-sans">
                                <span class="text-velora-accent font-mono text-2xl font-bold">&check;</span>
                                <h3 class="editorial-serif text-xl font-semibold text-velora-text">Audit Request Received</h3>
                                <p class="text-xs text-velora-muted leading-relaxed">
                                    We will inspect your website against Core Web Vitals and local SEO criteria.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 10. FREQUENTLY ADDRESSED ENQUIRIES (EDITORIAL Q&A ACCORDION)          -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="editorial-faq">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 editorial-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">[ ENQUIRIES // 10 ] &mdash; FAQS</span>
                <h2 class="editorial-headline text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Frequently Addressed Enquiries</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans">
                    Direct answers concerning our technical standards, commercial terms, and development process.
                </p>
            </div>

            <!-- Editorial Accordion List -->
            <div class="space-y-4">
                ${FAQS.map((faq, idx) => `
                <div class="bg-velora-card border border-velora-border shadow-sm editorial-reveal">
                    <button type="button" 
                            class="editorial-faq-trigger w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-velora-accent" 
                            aria-expanded="false" 
                            aria-controls="editorial-faq-ans-${idx}" 
                            id="editorial-faq-btn-${idx}">
                        <span class="editorial-serif text-lg sm:text-xl font-semibold text-velora-text pr-4">
                            ${escapeHTML(faq.q)}
                        </span>
                        <span class="editorial-faq-icon shrink-0 text-velora-accent font-mono text-sm transition-transform duration-200">
                            +
                        </span>
                    </button>
                    <div id="editorial-faq-ans-${idx}" 
                         role="region" 
                         aria-labelledby="editorial-faq-btn-${idx}" 
                         class="editorial-faq-panel hidden px-6 pb-6 pt-2 text-xs sm:text-sm text-velora-muted leading-relaxed border-t border-velora-border/60 font-sans">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 11. FINAL INVITATION (MAGAZINE BACK-COVER COLOPHON)                   -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg" id="editorial-colophon">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 editorial-reveal">
            
            <div class="border-t border-b border-velora-borderStrong py-1 inline-block">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold px-4">
                    [ COLOPHON // 11 ]
                </span>
            </div>

            <h2 class="editorial-headline text-3xl sm:text-5xl lg:text-6xl font-semibold text-velora-text tracking-tight max-w-3xl mx-auto leading-tight text-balance">
                Ready for a Website That Actually Brings in Customers?
            </h2>

            <p class="text-xs sm:text-base text-velora-muted leading-relaxed max-w-2xl mx-auto text-pretty font-sans">
                We design and build fast, mobile-first websites and technical local search foundations for clinics, dining establishments, real estate firms, and commercial services.
            </p>

            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" class="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors border border-velora-button shadow-sm btn-luxury">
                    Start Your Project Consultation &rarr;
                </a>
                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border transition-colors">
                    Direct WhatsApp Enquiry &rarr;
                </a>
            </div>

        </div>
    </section>
    `;

    const script = `
        // ===================================================================== //
        // 03 EDITORIAL EXPERIENCE INTERACTION CONTROLLER                        //
        // ===================================================================== //
        window.initEditorialInteractions = function() {
            // 0. Editorial Scroll-Triggered Reveal Observer
            // All reveal animations are handled by the centralized
            // window.__veloraInitReveals() system in components.js.
            // Do NOT add duplicate IntersectionObservers or reveal classes here.

            // 1. Editorial Before/After Comparison Slider
            const container = document.getElementById('editorial-before-after-container');
            const afterBg = document.getElementById('editorial-after-bg');
            const beforeContent = document.getElementById('editorial-before-content');
            const afterContent = document.getElementById('editorial-after-content');
            const handle = document.getElementById('editorial-slider-handle');

            if (container && afterBg && handle) {
                let isDragging = false;
                let currentPos = 0.85;
                let hasUserInteracted = false;
                let rafId = null;

                function updatePosition(pct, isInternal = false) {
                    if (!isInternal) hasUserInteracted = true;
                    currentPos = Math.max(0, Math.min(1, pct));
                    const percentage = currentPos * 100;
                    
                    afterBg.style.clipPath = 'polygon(0 0, ' + percentage + '% 0, ' + percentage + '% 100%, 0 100%)';
                    handle.style.left = percentage + '%';
                    container.setAttribute('aria-valuenow', Math.round(percentage));

                    // Smooth opacity crossfade with zero text collision
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

                window.__veloraEditorialSliderCleanup = function() {
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mouseup', onEnd);
                    window.removeEventListener('touchmove', onMove);
                    window.removeEventListener('touchend', onEnd);
                };

                // Accessible Keyboard navigation
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

                // Subtle Discovery Cue (85 -> 80 -> 85)
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
                    let discoveryFired = false;
                    const cueObserver = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting && !discoveryFired && !hasUserInteracted) {
                                discoveryFired = true;
                                cueObserver.disconnect();
                                setTimeout(() => {
                                    if (hasUserInteracted) return;
                                    const startTime = performance.now();
                                    const duration = 480;
                                    const startVal = 0.85;
                                    const dipVal = 0.80;

                                    function step(now) {
                                        if (hasUserInteracted) return;
                                        const elapsed = now - startTime;
                                        const progress = Math.min(elapsed / duration, 1);
                                        const dip = Math.sin(progress * Math.PI);
                                        const pos = startVal - (startVal - dipVal) * dip;
                                        updatePosition(pos, true);

                                        if (progress < 1) {
                                            rafId = requestAnimationFrame(step);
                                        } else {
                                            updatePosition(0.85, true);
                                        }
                                    }
                                    rafId = requestAnimationFrame(step);
                                }, 350);
                            }
                        });
                    }, { threshold: 0.25 });
                    cueObserver.observe(container);
                }
            }

            // 2. Editorial Pricing Estimator
            const pagesInput = document.getElementById('editorial-calc-pages');
            const pagesVal = document.getElementById('editorial-calc-pages-val');
            const seoInput = document.getElementById('editorial-calc-seo');
            const maintInput = document.getElementById('editorial-calc-maint');
            const totalDisplay = document.getElementById('editorial-calc-total');
            const quoteBtn = document.getElementById('editorial-calc-quote-btn');

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

            // 3. Editorial Audit Form Submission
            const auditForm = document.getElementById('editorial-audit-form');
            if (auditForm) {
                auditForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    if (typeof window.veloraTrack === 'function') window.veloraTrack('audit_submit');
                    
                    const submitBtn = document.getElementById('editorial-audit-submit-btn');
                    if (submitBtn && submitBtn.disabled) return;
                    const errorDiv = document.getElementById('editorial-audit-error');
                    const successDiv = document.getElementById('editorial-audit-success');
                    const urlInput = document.getElementById('editorial-audit-url');
                    const gotchaInput = document.getElementById('editorial-audit-gotcha');

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
                                source: 'Editorial Diagnostic Inquiry'
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
                        submitBtn.innerHTML = 'Request Technical Teardown &rarr;';
                    }
                });
            }

            // 4. Editorial FAQ Accordion
            const triggers = document.querySelectorAll('.editorial-faq-trigger');
            triggers.forEach(trigger => {
                trigger.addEventListener('click', function() {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    const panelId = this.getAttribute('aria-controls');
                    const panel = document.getElementById(panelId);
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
        };

        window.cleanupEditorialInteractions = function() {
            if (window.__veloraEditorialObserver) {
                window.__veloraEditorialObserver.disconnect();
                window.__veloraEditorialObserver = null;
            }
            if (typeof window.__veloraEditorialSliderCleanup === 'function') {
                window.__veloraEditorialSliderCleanup();
                window.__veloraEditorialSliderCleanup = null;
            }
        };

        // Initialize immediately if script executes in direct SSR context
        if (typeof window.initEditorialInteractions === 'function') {
            window.initEditorialInteractions();
        }
    `;

    return { meta, content, script };
}

module.exports = {
    renderEditorialExperience
};
