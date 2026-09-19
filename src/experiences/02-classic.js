// ============================================================================ //
// VELORA DIGITAL — 02 CLASSIC EXPERIENCE PRESENTATION                           //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema, Header, Footer } = require("../components");

/**
 * Authoritative 02 Classic Experience Presentation Renderer.
 * Timeless confidence, clarity, craftsmanship, trust, and professional restraint.
 * Features Cormorant Garamond serif headlines, classical rules, warm ivory paper canvas,
 * and strict factual data integration from src/data.js.
 */
function renderClassicExperience(currentPath = "/") {
    const meta = {
        title: 'Velora Digital | Classic Studio Architecture & Local Web Design',
        description: 'Boutique web design studio and technical local SEO for serious commercial practices. Timeless editorial craft, sub-second mobile speeds, and complete asset ownership.',
        schema: generateSchema('FAQPage', { faqs: FAQS }),
        breadcrumbs: null
    };

    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spice = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const content = `
    <!-- ===================================================================== -->
    <!-- 1. CLASSIC HERO SECTION (MONUMENTAL EDITORIAL STATEMENT)             -->
    <!-- ===================================================================== -->
    <section id="classic-hero" class="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-velora-bg overflow-hidden border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Classical Double-Rule Framing Top -->
            <div class="border-t-2 border-b border-velora-borderStrong pt-1 pb-1 mb-10 sm:mb-14 classic-rule-reveal">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-velora-muted gap-2">
                    <span class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-accent" aria-hidden="true"></span>
                        <span>Velora Digital &middot; Web Design &amp; Local SEO</span>
                    </span>
                    <span>Editorial Volume II &middot; Art Direction Classic</span>
                    <span class="hidden md:inline">Gurugram &middot; Delhi NCR &middot; Bengaluru &middot; Chandigarh</span>
                </div>
            </div>

            <!-- Balanced Dual-Column Editorial Composition -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                <!-- Left Column: Monumental Headline & Narrative -->
                <div class="lg:col-span-8 space-y-8">
                    <div class="inline-block classic-reveal" style="transition-delay: 150ms;">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block pb-2 border-b border-velora-accent/40">
                            Boutique Web Design &amp; Local SEO Studio
                        </span>
                    </div>

                    <h1 class="classic-serif text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-velora-text leading-[1.08] text-balance classic-reveal" style="transition-delay: 300ms;">
                        Websites of Enduring Craft &amp; Commercial Clarity.
                    </h1>

                    <p class="text-base sm:text-lg text-velora-muted leading-relaxed max-w-2xl text-pretty classic-reveal" style="transition-delay: 450ms;">
                        We design and develop fast, mobile-first websites and technical local search foundations for clinics, dining establishments, real estate firms, and commercial services. Crafted without page-builder bloat.
                    </p>

                    <!-- Dual Consultative Actions -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 classic-reveal" style="transition-delay: 600ms;">
                        <a href="/contact" id="classic-hero-primary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-none text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors border border-velora-button shadow-sm btn-luxury">
                            Request Project Consultation &rarr;
                        </a>
                        <a href="#classic-work" id="classic-hero-secondary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-none text-xs uppercase tracking-[0.2em] font-bold bg-velora-surface hover:bg-velora-card text-velora-text transition-colors border border-velora-border">
                            Examine Concept Work &darr;
                        </a>
                    </div>
                </div>

                <!-- Right Column: Editorial Titleplate & Specification Ledger -->
                <div class="lg:col-span-4 bg-velora-surface p-6 sm:p-8 border border-velora-border shadow-sm space-y-6 classic-reveal" style="transition-delay: 750ms;">
                    <div class="border-b border-velora-border pb-4">
                        <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-velora-accent block mb-1">Practice Overview</span>
                        <h2 class="classic-serif text-2xl font-semibold text-velora-text">Studio Specifications</h2>
                    </div>

                    <dl class="space-y-4 text-xs">
                        <div class="border-b border-velora-border/60 pb-3 flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-velora-muted">Architecture</dt>
                            <dd class="text-right font-medium text-velora-text">Lean SSR &middot; Zero Framework Bloat</dd>
                        </div>
                        <div class="border-b border-velora-border/60 pb-3 flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-velora-muted">Discovery</dt>
                            <dd class="text-right font-medium text-velora-text">Local SEO &middot; Schema.org JSON-LD</dd>
                        </div>
                        <div class="border-b border-velora-border/60 pb-3 flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-velora-muted">Delivery</dt>
                            <dd class="text-right font-medium text-velora-text">2 to 4 Weeks Structured Workflow</dd>
                        </div>
                        <div class="flex justify-between items-baseline gap-4">
                            <dt class="font-mono uppercase tracking-wider text-velora-muted">Asset Rights</dt>
                            <dd class="text-right font-medium text-velora-text">100% Client Code &amp; Domain Ownership</dd>
                        </div>
                    </dl>

                    <div class="pt-4 border-t border-velora-border">
                        <div class="text-[11px] text-velora-muted leading-relaxed">
                            Serving high-trust commercial clients with transparent fixed pricing and direct engineering accountability.
                        </div>
                    </div>
                </div>
            </div>

            <!-- Factual Technical Quality Indicators -->
            <div class="mt-14 pt-8 border-t border-velora-border classic-rule-reveal grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-velora-text classic-reveal" style="transition-delay: 250ms;">
                <div class="flex items-start gap-3">
                    <span class="text-velora-accent font-serif text-lg leading-none font-bold">I.</span>
                    <div>
                        <strong class="block font-sans font-semibold text-velora-text">Mobile-First Semantic Code</strong>
                        <span class="text-velora-muted">Ultra-fast page loads tested on real cellular networks.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="text-velora-accent font-serif text-lg leading-none font-bold">II.</span>
                    <div>
                        <strong class="block font-sans font-semibold text-velora-text">Direct Conversion Pathways</strong>
                        <span class="text-velora-muted">Immediate phone, WhatsApp, and consult request routing.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="text-velora-accent font-serif text-lg leading-none font-bold">III.</span>
                    <div>
                        <strong class="block font-sans font-semibold text-velora-text">Full Client Ownership</strong>
                        <span class="text-velora-muted">Zero proprietary lock-in or recurring builder licenses.</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 2. PRACTICE DISCIPLINES & SERVICES (EDITORIAL MONOGRAPH CATALOGUE)     -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-velora-border gap-6 classic-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Core Services</span>
                    <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Practice Disciplines &amp; Architecture</h2>
                </div>
                <p class="text-xs sm:text-sm text-velora-muted max-w-md leading-relaxed text-pretty">
                    Three specialized disciplines engineered to establish immediate credibility and drive verifiable local enquiries.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                ${SERVICES.map((s, idx) => {
                    const romanNumerals = ['I', 'II', 'III'];
                    const roman = romanNumerals[idx] || (idx + 1);
                    return `
                    <article class="bg-velora-card p-8 sm:p-10 border border-velora-border flex flex-col justify-between shadow-sm relative classic-reveal classic-card-hover" style="transition-delay: ${idx * 100}ms;">
                        <div>
                            <!-- Numbered Monograph Header -->
                            <div class="flex items-center justify-between pb-6 mb-6 border-b border-velora-border">
                                <span class="classic-serif text-2xl font-bold text-velora-accent">${roman}.</span>
                                <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted">${escapeHTML(s.heroTag || 'STUDIO DISCIPLINE')}</span>
                            </div>

                            <h3 class="classic-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-4 leading-snug">
                                ${escapeHTML(s.title)}
                            </h3>

                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed mb-8">
                                ${escapeHTML(s.short)}
                            </p>

                            <!-- Sourced Deliverables Breakdown -->
                            <div class="space-y-3 mb-8">
                                <span class="text-[10px] font-mono uppercase tracking-wider text-velora-text font-bold block mb-2">Scope Deliverables:</span>
                                ${s.benefits.slice(0, 4).map(b => `
                                    <div class="flex items-start gap-2.5 text-xs text-velora-muted">
                                        <span class="text-velora-accent font-serif text-sm leading-none">&mdash;</span>
                                        <span>${escapeHTML(b)}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="pt-6 border-t border-velora-border">
                            <a href="/services/${escapeHTML(s.slug)}" class="group inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-wider font-semibold text-velora-text hover:text-velora-accent transition-colors">
                                <span>Examine Scope Specifications</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </article>
                    `;
                }).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 3. SELECTED WORK (EDITORIAL MONOGRAPH SPREADS)                        -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="classic-work">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-velora-border gap-6 classic-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Portfolio</span>
                    <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Selected Concept Demonstrations</h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm leading-relaxed">
                    Production-grade concept websites engineered to benchmark technical speed, conversion architecture, and local SEO structure.
                </div>
            </div>

            <div class="space-y-16 sm:space-y-20">
                
                <!-- Project 1: AURORA CLINIC -->
                <article class="p-8 sm:p-12 bg-velora-surface border border-velora-border shadow-sm classic-reveal classic-card-hover">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widest text-velora-accent">
                                <span>01 // ${escapeHTML(aurora.industry)}</span>
                                <span>&middot;</span>
                                <span class="px-2 py-0.5 border border-velora-accent/40 bg-velora-card font-semibold">${escapeHTML(aurora.type || 'Signature Design Concept')}</span>
                            </div>
                            <h3 class="classic-serif text-3xl sm:text-4xl font-semibold text-velora-text text-balance">${escapeHTML(aurora.title)}</h3>
                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed">${escapeHTML(aurora.summary)}</p>
                            
                            <div class="pt-4 border-t border-velora-border/80 space-y-2 text-xs">
                                <div class="text-[10px] font-mono uppercase tracking-wider text-velora-muted">UX Decision:</div>
                                <p class="text-velora-text italic text-xs leading-relaxed">${escapeHTML(aurora.keyUxDecisions || 'Replaced heavy PDF service menus with structured HTML accordions; moved doctor credentials above the fold.')}</p>
                            </div>

                            <div class="pt-4">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-accent hover:text-velora-text transition-colors">
                                    <span>Examine Concept Architecture</span>
                                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-7 bg-velora-card p-6 sm:p-8 border border-velora-border space-y-6">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block pb-2 border-b border-velora-border">Delivered Architecture &amp; Specifications</span>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                ${aurora.deliverables ? aurora.deliverables.map(d => `
                                    <div class="p-3 bg-velora-surface border border-velora-border/60">
                                        <span class="text-velora-accent font-serif mr-1.5">&bull;</span>
                                        <span class="text-velora-text">${escapeHTML(d)}</span>
                                    </div>
                                `).join('') : ''}
                            </div>

                            <div class="p-4 bg-velora-surface border border-velora-border text-xs space-y-1.5">
                                <strong class="text-velora-text block font-mono text-[10px] uppercase tracking-wider">Technical Priority:</strong>
                                <p class="text-velora-muted leading-relaxed">${escapeHTML(aurora.technicalPriorities || 'Lightning-fast mobile load time on 4G networks; semantic MedicalBusiness schema integration; strict accessibility compliance.')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Project 2: AARAV PROPERTIES -->
                <article class="p-8 sm:p-12 bg-velora-surface border border-velora-border shadow-sm classic-reveal classic-card-hover">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widest text-velora-accent">
                                <span>02 // ${escapeHTML(aarav.industry)}</span>
                                <span>&middot;</span>
                                <span class="px-2 py-0.5 border border-velora-accent/40 bg-velora-card font-semibold">${escapeHTML(aarav.type || 'Signature Design Concept')}</span>
                            </div>
                            <h3 class="classic-serif text-3xl sm:text-4xl font-semibold text-velora-text text-balance">${escapeHTML(aarav.title)}</h3>
                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed">${escapeHTML(aarav.summary)}</p>
                            
                            <div class="pt-4 border-t border-velora-border/80 space-y-2 text-xs">
                                <div class="text-[10px] font-mono uppercase tracking-wider text-velora-muted">UX Decision:</div>
                                <p class="text-velora-text italic text-xs leading-relaxed">${escapeHTML(aarav.keyUxDecisions || 'Eliminated invasive newsletter pop-ups; structured property specs into scannable data tables.')}</p>
                            </div>

                            <div class="pt-4">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-accent hover:text-velora-text transition-colors">
                                    <span>Examine Concept Architecture</span>
                                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-7 bg-velora-card p-6 sm:p-8 border border-velora-border space-y-6">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block pb-2 border-b border-velora-border">Delivered Architecture &amp; Specifications</span>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                ${aarav.deliverables ? aarav.deliverables.map(d => `
                                    <div class="p-3 bg-velora-surface border border-velora-border/60">
                                        <span class="text-velora-accent font-serif mr-1.5">&bull;</span>
                                        <span class="text-velora-text">${escapeHTML(d)}</span>
                                    </div>
                                `).join('') : ''}
                            </div>

                            <div class="p-4 bg-velora-surface border border-velora-border text-xs space-y-1.5">
                                <strong class="text-velora-text block font-mono text-[10px] uppercase tracking-wider">Technical Priority:</strong>
                                <p class="text-velora-muted leading-relaxed">${escapeHTML(aarav.technicalPriorities || 'Optimized image delivery for large property galleries; implemented localized RealEstateAgent Schema.')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Project 3: THE SPICE ROOM -->
                <article class="p-8 sm:p-12 bg-velora-surface border border-velora-border shadow-sm classic-reveal classic-card-hover">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-widest text-velora-accent">
                                <span>03 // ${escapeHTML(spice.industry)}</span>
                                <span>&middot;</span>
                                <span class="px-2 py-0.5 border border-velora-accent/40 bg-velora-card font-semibold">${escapeHTML(spice.type || 'Signature Design Concept')}</span>
                            </div>
                            <h3 class="classic-serif text-3xl sm:text-4xl font-semibold text-velora-text text-balance">${escapeHTML(spice.title)}</h3>
                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed">${escapeHTML(spice.summary)}</p>
                            
                            <div class="pt-4 border-t border-velora-border/80 space-y-2 text-xs">
                                <div class="text-[10px] font-mono uppercase tracking-wider text-velora-muted">UX Decision:</div>
                                <p class="text-velora-text italic text-xs leading-relaxed">${escapeHTML(spice.keyUxDecisions || 'Converted all menu items from PDF to native HTML for lightning-fast loading; added one-tap Get Directions button.')}</p>
                            </div>

                            <div class="pt-4">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-velora-accent hover:text-velora-text transition-colors">
                                    <span>Examine Concept Architecture</span>
                                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-7 bg-velora-card p-6 sm:p-8 border border-velora-border space-y-6">
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block pb-2 border-b border-velora-border">Delivered Architecture &amp; Specifications</span>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                ${spice.deliverables ? spice.deliverables.map(d => `
                                    <div class="p-3 bg-velora-surface border border-velora-border/60">
                                        <span class="text-velora-accent font-serif mr-1.5">&bull;</span>
                                        <span class="text-velora-text">${escapeHTML(d)}</span>
                                    </div>
                                `).join('') : ''}
                            </div>

                            <div class="p-4 bg-velora-surface border border-velora-border text-xs space-y-1.5">
                                <strong class="text-velora-text block font-mono text-[10px] uppercase tracking-wider">Technical Priority:</strong>
                                <p class="text-velora-muted leading-relaxed">${escapeHTML(spice.technicalPriorities || 'Lightning-fast First Contentful Paint; comprehensive Restaurant Schema for rich snippet generation on Google Maps.')}</p>
                            </div>
                        </div>
                    </div>
                </article>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 4. SPECIALIZED SECTORS (CLASSICAL 4-COLUMN LEDGER)                    -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 classic-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Target Industries</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Commercial Sectors of Focus</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed">
                    Four distinct practice disciplines where digital clarity and local discovery directly influence client acquisition.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${INDUSTRIES.map((ind, idx) => `
                <div class="p-6 sm:p-8 bg-velora-card border border-velora-border flex flex-col justify-between shadow-sm classic-reveal classic-card-hover" style="transition-delay: ${idx * 75}ms;">
                    <div>
                        <div class="text-[10px] font-mono text-velora-accent uppercase tracking-widest pb-3 mb-4 border-b border-velora-border">
                            SECTOR 0${idx + 1}
                        </div>
                        <h3 class="classic-serif text-xl sm:text-2xl font-semibold text-velora-text mb-3">
                            ${escapeHTML(ind.name)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">
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
    <!-- ===================================================================== -->
    <!-- 5. BEFORE / AFTER COMPARISON (PHYSICAL WIPE SLIDER)                  -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-3xl mx-auto text-center mb-14 classic-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Live Structural Comparison</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">The Difference is Obvious</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed">
                    Compare an unoptimized generic local template against Velora&rsquo;s lightweight editorial architecture.
                </p>
            </div>

            <!-- Comparison Canvas -->
            <div class="max-w-4xl mx-auto classic-reveal">
                <div id="classic-before-after-container" 
                     tabindex="0" 
                     role="slider" 
                     aria-valuemin="0" 
                     aria-valuemax="100" 
                     aria-valuenow="85" 
                     aria-label="Before and After Comparison" 
                     class="relative w-full min-h-[420px] sm:min-h-0 sm:aspect-[16/9] select-none touch-none focus:outline-none focus:ring-2 focus:ring-velora-accent border border-velora-borderStrong shadow-md overflow-hidden bg-velora-card premium-border">
                    
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
                            <p class="text-xs text-[#78716C] leading-relaxed">
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
                        <div class="pb-4 border-b border-velora-border flex items-center justify-between">
                            <span class="classic-serif text-xl sm:text-2xl font-bold text-velora-text">Velora Editorial Architecture</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-velora-surface text-velora-accent border border-velora-accent/40 font-bold">Sub-Second Mobile &middot; Clean SSR</span>
                        </div>
                        <div class="my-auto space-y-3 max-w-lg">
                            <div class="classic-serif text-2xl sm:text-3xl text-velora-text leading-snug">
                                Fast HTML Menus, Prominent Direct Contact &amp; Local Google Search Visibility
                            </div>
                            <p class="text-xs sm:text-sm text-velora-muted leading-relaxed">
                                Legible typography, one-tap WhatsApp enquiries, clear service rates, and comprehensive Schema.org JSON-LD structured data.
                            </p>
                        </div>
                        <div class="pt-3 border-t border-velora-border classic-rule-reveal text-[11px] font-mono text-velora-accent font-semibold flex items-center gap-4">
                            <span>Verified Local Speed</span>
                            <span>&middot;</span>
                            <span>Direct Enquiry Routing</span>
                            <span>&middot;</span>
                            <span>Full Client Ownership</span>
                        </div>
                    </div>

                    <!-- Draggable Physical Divider Handle -->
                    <div id="classic-slider-handle" class="absolute top-0 bottom-0 w-1 bg-velora-accent cursor-ew-resize z-20 flex items-center justify-center -translate-x-1/2" style="left: 85%;">
                        <div class="w-8 h-8 rounded-full bg-velora-card border-2 border-velora-accent shadow-md flex items-center justify-center text-velora-accent text-xs font-bold font-mono">
                            &harr;
                        </div>
                    </div>

                </div>

                <!-- Accessibility Instructions -->
                <div class="mt-4 text-center text-[11px] font-mono text-velora-muted">
                    Drag handle or focus with keyboard and use Left / Right arrow keys to examine differences.
                </div>
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 6. THE VELORA STANDARD (EDITORIAL MANIFESTO TRIPTYCH)                 -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 classic-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Foundational Philosophy</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">The Velora Standard</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed text-pretty">
                    Every website we engineer is guided by three non-negotiable principles designed to deliver measurable, lasting business value.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Principle 1: Lean by Design -->
                <div class="bg-velora-card p-8 sm:p-10 border border-velora-border shadow-sm flex flex-col justify-between classic-reveal classic-card-hover">
                    <div>
                        <div class="text-[11px] font-mono uppercase tracking-widest text-velora-accent pb-3 mb-4 border-b border-velora-border">
                            PRINCIPLE I // ARCHITECTURE
                        </div>
                        <h3 class="classic-serif text-2xl font-semibold text-velora-text mb-4">Lean by Design</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed mb-6">
                            We write lightweight, semantic code crafted specifically for your business. Zero bloated page builders and zero unnecessary runtime scripts&mdash;ensuring pages render instantly on standard mobile connections.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border classic-rule-reveal text-[11px] font-mono text-velora-text/80">
                        Custom-coded &middot; Instant mobile rendering
                    </div>
                </div>

                <!-- Principle 2: Built for Local Conversion -->
                <div class="bg-velora-card p-8 sm:p-10 border border-velora-border shadow-sm flex flex-col justify-between classic-reveal classic-card-hover" style="transition-delay: 100ms;">
                    <div>
                        <div class="text-[11px] font-mono uppercase tracking-widest text-velora-accent pb-3 mb-4 border-b border-velora-border">
                            PRINCIPLE II // CONVERSION
                        </div>
                        <h3 class="classic-serif text-2xl font-semibold text-velora-text mb-4">Built for Local Conversion</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed mb-6">
                            Every interface is structured around direct commercial outcomes: prominent click-to-call, instant WhatsApp triggers, scannable service menus, and Schema.org JSON-LD structured data for Google Maps discovery.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border classic-rule-reveal text-[11px] font-mono text-velora-text/80">
                        Schema.org JSON-LD &middot; Instant enquiry triggers
                    </div>
                </div>

                <!-- Principle 3: Complete Asset Ownership -->
                <div class="bg-velora-card p-8 sm:p-10 border border-velora-border shadow-sm flex flex-col justify-between classic-reveal classic-card-hover" style="transition-delay: 200ms;">
                    <div>
                        <div class="text-[11px] font-mono uppercase tracking-widest text-velora-accent pb-3 mb-4 border-b border-velora-border">
                            PRINCIPLE III // RIGHTS
                        </div>
                        <h3 class="classic-serif text-2xl font-semibold text-velora-text mb-4">Complete Asset Ownership</h3>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed mb-6">
                            When your project goes live, full ownership of your custom code, assets, and domain records transfers directly to you. No ongoing platform fees, no subscription traps, and no proprietary vendor lock-in.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-velora-border classic-rule-reveal text-[11px] font-mono text-velora-text/80">
                        100% Client owned &middot; Zero vendor lock-in
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 7. PRACTICE METHODOLOGY (CHRONOLOGICAL PROGRESSION)                   -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="classic-process">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 classic-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Practice Methodology</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">How We Build Your Website</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed">
                    A structured 2-to-4 week workflow with clear milestones and zero guesswork.
                </p>
            </div>

            <!-- Horizontal Chronological Progression on Desktop / Clean Stack on Mobile -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                ${SERVICES[0].process.map((step, idx) => `
                <div class="p-6 bg-velora-surface border border-velora-border flex flex-col justify-between shadow-sm relative classic-reveal classic-card-hover" style="transition-delay: ${idx * 60}ms;">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between pb-3 border-b border-velora-border">
                            <span class="classic-serif text-xl font-bold text-velora-accent">${escapeHTML(step.step)}</span>
                            <span class="text-[9px] font-mono uppercase tracking-widest text-velora-muted">PHASE 0${idx + 1}</span>
                        </div>
                        <h3 class="classic-serif text-lg font-semibold text-velora-text leading-snug">
                            ${escapeHTML(step.title)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed">
                            ${escapeHTML(step.desc)}
                        </p>
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 8. PRICING SCHEDULE (CLASSICAL INVESTMENT LEDGER & ESTIMATOR)         -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="classic-pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-3xl mx-auto text-center mb-16 classic-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Investment Schedule</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Standard Project Pricing</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed">
                    Clear, transparent pricing schedules based on scope and architectural requirements.
                </p>
            </div>

            <!-- Pricing Tiers Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
                
                <!-- Essential Web -->
                <div class="p-8 sm:p-10 bg-velora-card border border-velora-border flex flex-col justify-between shadow-sm classic-reveal classic-card-hover">
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-velora-muted pb-3 mb-4 border-b border-velora-border">
                            TIER I // ESSENTIAL
                        </div>
                        <h3 class="classic-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-2">Essential Web</h3>
                        <div class="text-3xl font-semibold text-velora-text classic-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.essential.toLocaleString('en-IN')}
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">
                            Designed for single-location practices requiring an immediate, high-trust digital presence.
                        </p>
                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Up to 5 Custom Mobile-First Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Direct Phone &amp; WhatsApp Integration</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Sub-Second Mobile Load Times</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Secure SSL &amp; Cloud Deployment</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border block transition-colors">
                        Engage Essential Scope &rarr;
                    </a>
                </div>

                <!-- Professional + SEO (Featured) -->
                <div class="p-8 sm:p-10 bg-velora-card border-2 border-velora-accent flex flex-col justify-between shadow-md relative classic-reveal classic-card-hover" style="transition-delay: 100ms;">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-velora-accent text-velora-buttonText text-[9px] font-mono uppercase tracking-widest font-bold">
                        Commercial Standard
                    </div>
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-velora-accent pb-3 mb-4 border-b border-velora-border">
                            TIER II // PROFESSIONAL
                        </div>
                        <h3 class="classic-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-2">Professional + SEO</h3>
                        <div class="text-3xl font-semibold text-velora-text classic-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.professional.toLocaleString('en-IN')}
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">
                            For competitive regional practices seeking dominant local search discovery and patient trust.
                        </p>
                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Up to 10 Bespoke Designed Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Local Search Schema.org Foundation</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Google Business Profile Synchronization</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> 3 Months Active Maintenance Included</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="w-full py-3.5 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover block transition-colors btn-luxury">
                        Engage Professional Scope &rarr;
                    </a>
                </div>

                <!-- Custom Architecture -->
                <div class="p-8 sm:p-10 bg-velora-card border border-velora-border flex flex-col justify-between shadow-sm classic-reveal classic-card-hover" style="transition-delay: 200ms;">
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-velora-muted pb-3 mb-4 border-b border-velora-border">
                            TIER III // CUSTOM
                        </div>
                        <h3 class="classic-serif text-2xl sm:text-3xl font-semibold text-velora-text mb-2">Custom Scope</h3>
                        <div class="text-3xl font-semibold text-velora-text classic-serif mb-4" style="font-variant-numeric: tabular-nums;">
                            ₹${CONFIG.pricing.customBase.toLocaleString('en-IN')}+
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">
                            For multi-branch clinics, extensive real estate portfolios, and private institutions.
                        </p>
                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Multi-Location Architecture</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Custom Catalog &amp; Booking Integrations</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Comprehensive Local Directory Structuring</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif text-sm">&mdash;</span> Priority Engineering Support</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border block transition-colors">
                        Request Custom Consultation &rarr;
                    </a>
                </div>

            </div>

            <!-- Interactive Classic Scope Estimator -->
            <div class="max-w-3xl mx-auto p-6 sm:p-8 bg-velora-card border border-velora-border shadow-sm classic-reveal">
                <div class="text-center pb-6 mb-6 border-b border-velora-border">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-velora-accent block mb-1">Interactive Specification Tool</span>
                    <h3 class="classic-serif text-2xl font-semibold text-velora-text">Estimate Your Project Scope</h3>
                </div>

                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between items-center mb-2 text-xs">
                            <label for="classic-calc-pages" class="font-mono uppercase text-velora-text">Page Scope:</label>
                            <span id="classic-calc-pages-val" class="font-mono font-bold text-velora-accent" style="font-variant-numeric: tabular-nums;">5 Pages</span>
                        </div>
                        <input type="range" id="classic-calc-pages" min="1" max="15" value="5" class="w-full accent-[#9A7B38] cursor-pointer">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-velora-border">
                        <label class="flex items-center gap-3 p-3 bg-velora-surface border border-velora-border cursor-pointer text-xs">
                            <input type="checkbox" id="classic-calc-seo" checked class="accent-[#9A7B38]">
                            <div>
                                <span class="block font-semibold text-velora-text">Local SEO Foundation</span>
                                <span class="text-velora-muted text-[10px]">+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')} one-time</span>
                            </div>
                        </label>

                        <label class="flex items-center gap-3 p-3 bg-velora-surface border border-velora-border cursor-pointer text-xs">
                            <input type="checkbox" id="classic-calc-maint" class="accent-[#9A7B38]">
                            <div>
                                <span class="block font-semibold text-velora-text">Ongoing Maintenance</span>
                                <span class="text-velora-muted text-[10px]">+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')}/year</span>
                            </div>
                        </label>
                    </div>

                    <div class="pt-6 border-t border-velora-border classic-rule-reveal flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block">Estimated Investment</span>
                            <div id="classic-calc-total" class="classic-serif text-3xl sm:text-4xl font-semibold text-velora-text text-balance" style="font-variant-numeric: tabular-nums;">
                                ₹35,000
                            </div>
                        </div>
                        <a id="classic-calc-quote-btn" href="/contact?tier=professional" class="w-full sm:w-auto px-8 py-3.5 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors btn-luxury">
                            Request Quote For This Scope &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <!-- Sourced Pricing Scope Disclaimer -->
            <div class="mt-8 text-center text-[11px] text-velora-muted max-w-2xl mx-auto">
                Project pricing covers website design &amp; development. Domain, hosting, third-party services and optional ongoing maintenance are quoted separately where applicable.
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 9. DIAGNOSTIC REVIEW (COMPLIMENTARY TECHNICAL AUDIT FORM)             -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg border-b border-velora-border" id="classic-audit">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-8 sm:p-12 bg-velora-surface border border-velora-border shadow-sm classic-reveal">
                
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    
                    <div class="md:col-span-6 space-y-4">
                        <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block">Diagnostic Teardown</span>
                        <h2 class="classic-serif text-2xl sm:text-3xl font-semibold text-velora-text leading-snug">
                            Complimentary Website &amp; Local SEO Evaluation
                        </h2>
                        <p class="text-xs sm:text-sm text-velora-muted leading-relaxed">
                            Enter your website URL below to receive a technical evaluation of your mobile speed, conversion architecture, and local search structure.
                        </p>
                        
                        <ul class="space-y-2.5 text-xs text-velora-muted pt-2">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif">&bull;</span> Speed &amp; Mobile Usability Check</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif">&bull;</span> Conversion Architecture Review</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-serif">&bull;</span> Local SEO &amp; Schema Foundation</li>
                        </ul>
                    </div>

                    <div class="md:col-span-6">
                        <div class="bg-velora-card p-6 border border-velora-border shadow-sm">
                            <form id="classic-audit-form" class="space-y-4">
                                <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden" aria-hidden="true">
                                    <input type="text" name="_gotcha" id="classic-audit-gotcha" tabindex="-1" autocomplete="off">
                                </div>

                                <div>
                                    <label for="classic-audit-url" class="block text-xs font-mono uppercase tracking-wider text-velora-text mb-2">
                                        Website Address:
                                    </label>
                                    <input type="url" 
                                           id="classic-audit-url" 
                                           name="website" 
                                           placeholder="https://yourwebsite.com" 
                                           autocomplete="url" 
                                           required 
                                           class="w-full px-4 py-3 bg-velora-surface border border-velora-border text-xs text-velora-text placeholder-velora-muted focus:outline-none focus:ring-1 focus:ring-velora-accent">
                                </div>

                                <div id="classic-audit-error" class="hidden text-xs text-red-600 font-medium"></div>

                                <button type="submit" id="classic-audit-submit-btn" class="w-full py-3.5 text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors border border-velora-button btn-luxury">
                                    Request Technical Teardown &rarr;
                                </button>
                            </form>

                            <div id="classic-audit-success" class="hidden flex-col items-center justify-center text-center py-6 space-y-2">
                                <span class="text-velora-accent font-serif text-2xl font-bold">&check;</span>
                                <h3 class="classic-serif text-xl font-semibold text-velora-text">Audit Request Received</h3>
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
    <!-- 10. FREQUENTLY ADDRESSED ENQUIRIES (ACCESSIBLE ACCORDION LIST)        -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-surface border-b border-velora-border" id="classic-faq">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="max-w-2xl mb-14 classic-reveal">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold block mb-2">Enquiries</span>
                <h2 class="classic-serif text-3xl sm:text-5xl font-semibold text-velora-text tracking-tight text-balance">Frequently Addressed Enquiries</h2>
                <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed">
                    Direct answers concerning our technical standards, commercial terms, and development process.
                </p>
            </div>

            <!-- Classical Accordion List -->
            <div class="space-y-4">
                ${FAQS.map((faq, idx) => `
                <div class="bg-velora-card border border-velora-border shadow-sm classic-reveal" style="transition-delay: ${idx * 40}ms;">
                    <button type="button" 
                            class="classic-faq-trigger w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-velora-accent" 
                            aria-expanded="false" 
                            aria-controls="classic-faq-ans-${idx}" 
                            id="classic-faq-btn-${idx}">
                        <span class="classic-serif text-lg sm:text-xl font-semibold text-velora-text pr-4">
                            ${escapeHTML(faq.q)}
                        </span>
                        <span class="classic-faq-icon shrink-0 text-velora-accent font-mono text-sm transition-transform duration-200">
                            +
                        </span>
                    </button>
                    <div id="classic-faq-ans-${idx}" 
                         role="region" 
                         aria-labelledby="classic-faq-btn-${idx}" 
                         class="classic-faq-panel hidden px-6 pb-6 pt-2 text-xs sm:text-sm text-velora-muted leading-relaxed border-t border-velora-border/60">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>

        </div>
    </section>

    <!-- ===================================================================== -->
    <!-- 11. FINAL INVITATION (MONUMENTAL EDITORIAL CALL-TO-ACTION)            -->
    <!-- ===================================================================== -->
    <section class="py-20 md:py-28  bg-velora-bg">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 classic-reveal">
            
            <div class="border-t border-b border-velora-borderStrong py-1 inline-block">
                <span class="text-xs font-mono uppercase tracking-[0.25em] text-velora-accent font-semibold px-4">
                    Next Steps
                </span>
            </div>

            <h2 class="classic-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-velora-text tracking-tight max-w-3xl mx-auto leading-tight text-balance">
                Ready for a Website That Actually Brings in Customers?
            </h2>

            <p class="text-xs sm:text-base text-velora-muted leading-relaxed max-w-2xl mx-auto text-pretty">
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
        // 02 CLASSIC EXPERIENCE INTERACTION CONTROLLER                          //
        // ===================================================================== //
        window.initClassicInteractions = function() {
            // 1. Classic Before/After Comparison Slider
            const container = document.getElementById('classic-before-after-container');
            const afterBg = document.getElementById('classic-after-bg');
            const beforeContent = document.getElementById('classic-before-content');
            const afterContent = document.getElementById('classic-after-content');
            const handle = document.getElementById('classic-slider-handle');

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

                window.__veloraClassicSliderCleanup = function() {
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

            // 2. Classic Pricing Estimator
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

            // 3. Classic Audit Form Submission
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
                                source: 'Classic Diagnostic Inquiry'
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

            // 4. Classic FAQ Accordion
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

            // 5. Scroll Reveals
            // All reveal animations are handled by the centralized
            // window.__veloraInitReveals() system in components.js.
            // Do NOT add duplicate IntersectionObservers or reveal classes here.
        };

        window.cleanupClassicInteractions = function() {
            if (typeof window.__veloraClassicSliderCleanup === 'function') {
                window.__veloraClassicSliderCleanup();
                window.__veloraClassicSliderCleanup = null;
            }
            if (window.__veloraClassicObserver) {
                window.__veloraClassicObserver.disconnect();
                window.__veloraClassicObserver = null;
            }
        };

        // Initialize immediately on initial load
        if (typeof window.initClassicInteractions === 'function') {
            window.initClassicInteractions();
        }
    `;

    return { meta, headerContent: Header(currentPath), mainContent: content, footerContent: Footer(), script };
}

module.exports = {
    renderClassicExperience
};
