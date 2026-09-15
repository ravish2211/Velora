// ============================================================================ //
// VELORA DIGITAL — 05 ATELIER EXPERIENCE PRESENTATION RENDERER                 //
// Art Direction: Tactile Craft · The Studio Table · Quiet Luxury & Warmth     //
// Technology Stack: Vanilla SSR + Lenis Smooth Scroll + GSAP Choreography      //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require('../components');

function renderAtelierExperience() {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics' || p.id === 'aurora-clinic') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates' || p.id === 'aarav-properties') || PORTFOLIO[1];
    const spiceRoom = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Atelier Boutique Web Design & Local SEO Studio',
        description: 'Velora Digital crafts warm, tactile, high-performance websites and local search architectures for boutique clinics, estate advisory practices, and culinary rooms.',
        schema: generateSchema('Organization'),
        breadcrumbs: [{ title: 'Home', link: '/?exp=atelier' }]
    };

    const content = `
    <!-- ================================================================= -->
    <!-- 1. HERO SECTION: "THE STUDIO TABLE" (TACTILE WARMTH & HUMANITY)   -->
    <!-- ================================================================= -->
    <section class="relative pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-36 overflow-hidden bg-velora-bg text-velora-text border-b border-velora-border" id="atelier-hero">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <!-- Left Column: Intimate, Thoughtful Typography -->
                <div class="lg:col-span-7 space-y-8 atelier-hero-fade">
                    <div class="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-velora-surface border border-velora-border text-[11px] font-mono tracking-widest text-velora-muted uppercase">
                        <span class="w-2 h-2 rounded-full bg-velora-accent"></span>
                        <span>05 ATELIER &middot; BESPOKE DIGITAL PRACTICE</span>
                    </div>

                    <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-velora-text leading-[1.08] text-balance">
                        Websites Crafted with <span class="italic font-serif text-velora-accent">Humanity</span>, Tactility &amp; Enduring Presence
                    </h1>

                    <p class="text-base sm:text-lg text-velora-muted leading-relaxed max-w-2xl text-pretty font-sans">
                        We shape warm, fast-loading digital homes for boutique clinics, estate practices, culinary rooms, and wellness studios. Architectural restraint, tactile details, and absolute asset ownership.
                    </p>

                    <!-- Primary Action Group -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <a href="/contact?tier=professional" id="atelier-hero-primary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-button text-velora-buttonText hover:opacity-90 transition-all duration-300 shadow-sm btn-luxury">
                            Commission a Website &rarr;
                        </a>
                        <a href="#atelier-works" id="atelier-hero-secondary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border transition-all duration-300">
                            Explore Selected Works &darr;
                        </a>
                    </div>

                    <!-- Honest Studio Practice Signals -->
                    <div class="pt-6 border-t border-velora-border grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-velora-muted font-sans">
                        <div class="flex items-center gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                            <span>Direct Founder Oversight</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                            <span>Semantic SSR Architecture</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                            <span>100% Asset Ownership</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: "The Studio Table" Composition Layer -->
                <div class="lg:col-span-5 atelier-hero-fade">
                    <div class="relative bg-velora-surface border border-velora-border rounded-2xl p-7 sm:p-9 space-y-6 shadow-sm">
                        <!-- Studio Index Header -->
                        <div class="flex items-center justify-between pb-5 border-b border-velora-border">
                            <div class="space-y-0.5">
                                <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted">Studio Index // Vol. 05</span>
                                <div class="text-sm font-display font-medium text-velora-text">The Workshop Board</div>
                            </div>
                            <span class="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-velora-card border border-velora-border text-velora-accent">
                                Handcrafted
                            </span>
                        </div>

                        <!-- Tactile Material Swatches & Specs -->
                        <div class="space-y-4">
                            <div class="p-4 rounded-xl bg-velora-card border border-velora-border/70 flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-velora-text">Linen &amp; Earth Palette</div>
                                    <div class="text-[11px] text-velora-muted">Restrained, organic warmth without corporate coldness</div>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-[#F7F5F0] border border-stone-300"></span>
                                    <span class="w-4 h-4 rounded-full bg-[#EFECE4] border border-stone-300"></span>
                                    <span class="w-4 h-4 rounded-full bg-[#9E5B32]"></span>
                                </div>
                            </div>

                            <div class="p-4 rounded-xl bg-velora-card border border-velora-border/70 flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-velora-text">Editorial Type Pairing</div>
                                    <div class="text-[11px] text-velora-muted">Cormorant Garamond &middot; Plus Jakarta Sans</div>
                                </div>
                                <span class="font-serif italic text-lg text-velora-accent">Aa</span>
                            </div>

                            <div class="p-4 rounded-xl bg-velora-card border border-velora-border/70 flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-velora-text">Engineered Performance</div>
                                    <div class="text-[11px] text-velora-muted">Zero runtime frameworks &middot; Native Node.js SSR</div>
                                </div>
                                <span class="text-[10px] font-mono text-velora-accent font-bold">SSR 200</span>
                            </div>
                        </div>

                        <!-- Studio Intake Note -->
                        <div class="pt-4 border-t border-velora-border flex items-center justify-between text-xs text-velora-muted">
                            <span>Current commission fee from:</span>
                            <span class="font-mono font-bold text-velora-text">₹14,999</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 2. SERVICES SECTION: CURATED STUDIO DISCIPLINES                   -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-surface border-b border-velora-border" id="atelier-services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>Studio Disciplines // Three Core Practices</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    Disciplines Shaped for <span class="italic font-serif text-velora-accent">Distinctive</span> Commercial Practices
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    Every discipline is executed directly with bespoke craft. No automated website generators, no generic outsourced templates, and zero monthly lease lock-ins.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${SERVICES.map((s, idx) => `
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-8 flex flex-col justify-between hover:border-velora-borderStrong transition-all duration-300 group">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-mono text-velora-accent tracking-widest">PRACTICE 0${idx + 1}</span>
                            <span class="text-xs font-mono text-velora-muted">${escapeHTML(s.timeline)}</span>
                        </div>
                        <div class="space-y-3">
                            <h3 class="font-display text-2xl font-normal text-velora-text group-hover:text-velora-accent transition-colors">
                                ${escapeHTML(s.title)}
                            </h3>
                            <p class="text-xs text-velora-muted leading-relaxed font-sans">
                                ${escapeHTML(s.short)}
                            </p>
                        </div>
                        <ul class="space-y-2.5 pt-4 border-t border-velora-border/60 text-xs text-velora-muted">
                            ${(s.benefits || []).slice(0, 4).map(f => `
                            <li class="flex items-center gap-2.5">
                                <span class="w-1 h-1 rounded-full bg-velora-accent"></span>
                                <span>${escapeHTML(f)}</span>
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="pt-8 mt-8 border-t border-velora-border/60 flex items-center justify-between">
                        <a href="/services/${s.slug}" class="text-xs font-mono tracking-wider text-velora-accent font-semibold hover:underline inline-flex items-center gap-1.5">
                            <span>Detailed Specifications</span>
                            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                        <span class="text-[11px] font-mono text-velora-muted">${idx === 0 ? 'Foundation' : idx === 1 ? 'Discovery' : 'Continuous'}</span>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 3. SELECTED WORK: CURATED COMMISSIONS                             -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-bg border-b border-velora-border" id="atelier-works">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div class="max-w-2xl space-y-4">
                    <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                        <span>Commission Catalog // Editorial Concepts</span>
                    </div>
                    <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                        Selected Works Crafted for <span class="italic font-serif text-velora-accent">High-Trust</span> Environments
                    </h2>
                </div>
                <div class="text-xs font-mono text-velora-muted">
                    <span>Authentic architectural demonstrations</span>
                </div>
            </div>

            <!-- Lead Concept Feature: Aurora Clinic -->
            <div class="atelier-reveal-card mb-12 bg-velora-surface border border-velora-border rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div class="lg:col-span-6 space-y-6">
                        <div class="flex items-center gap-3">
                            <span class="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-velora-card border border-velora-border text-velora-accent">
                                ${escapeHTML(aurora.type || 'Signature Design Concept')}
                            </span>
                            <span class="text-xs font-mono text-velora-muted">${escapeHTML(aurora.industry)}</span>
                        </div>
                        <h3 class="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-velora-text tracking-tight text-balance">
                            ${escapeHTML(aurora.title)}
                        </h3>
                        <p class="text-sm text-velora-muted leading-relaxed font-sans">
                            ${escapeHTML(aurora.summary)}
                        </p>
                        <div class="pt-4 border-t border-velora-border space-y-3">
                            <div class="text-xs font-mono uppercase tracking-wider text-velora-text font-semibold">Architectural Highlights</div>
                            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-velora-muted">
                                ${(aurora.deliverables || []).slice(0, 4).map(d => `
                                <li class="flex items-center gap-2">
                                    <span class="w-1 h-1 rounded-full bg-velora-accent"></span>
                                    <span>${escapeHTML(d)}</span>
                                </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="pt-4">
                            <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-velora-accent font-bold hover:underline">
                                <span>Inspect Full Portfolio Case</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div class="lg:col-span-6">
                        <div class="bg-velora-card border border-velora-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                            <div class="flex items-center justify-between pb-4 border-b border-velora-border text-xs font-mono">
                                <span class="text-velora-text font-bold">PROJECT PROFILE</span>
                                <span class="text-velora-accent font-semibold">CLINICAL PRECISION</span>
                            </div>
                            <div class="space-y-4 text-xs font-sans text-velora-muted leading-relaxed">
                                <p>
                                    ${escapeHTML(aurora.demonstrates)}
                                </p>
                                <div class="p-4 rounded-xl bg-velora-surface border border-velora-border/60">
                                    <div class="text-[11px] font-mono text-velora-accent uppercase tracking-wider mb-1">Design Rationale</div>
                                    <div class="text-xs text-velora-text">${escapeHTML(aurora.designDirection)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Secondary Paired Works: Aarav Properties & The Spice Room -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Aarav Properties -->
                <div class="atelier-reveal-card bg-velora-surface border border-velora-border rounded-2xl p-8 flex flex-col justify-between space-y-8">
                    <div class="space-y-5">
                        <div class="flex items-center justify-between">
                            <span class="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-velora-card border border-velora-border text-velora-accent">
                                ${escapeHTML(aarav.type || 'Signature Design Concept')}
                            </span>
                            <span class="text-xs font-mono text-velora-muted">${escapeHTML(aarav.industry)}</span>
                        </div>
                        <h3 class="font-display text-2xl sm:text-3xl font-normal text-velora-text">
                            ${escapeHTML(aarav.title)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            ${escapeHTML(aarav.summary)}
                        </p>
                        <div class="pt-4 border-t border-velora-border space-y-2 text-xs text-velora-muted">
                            ${(aarav.deliverables || []).slice(0, 3).map(d => `
                            <div class="flex items-center gap-2">
                                <span class="w-1 h-1 rounded-full bg-velora-accent"></span>
                                <span>${escapeHTML(d)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="pt-4 border-t border-velora-border flex items-center justify-between">
                        <a href="/portfolio" class="text-xs font-mono tracking-wider text-velora-accent font-semibold hover:underline">View Concept Details &rarr;</a>
                        <span class="text-[11px] font-mono text-velora-muted">High-Intent Inquiries</span>
                    </div>
                </div>

                <!-- The Spice Room -->
                <div class="atelier-reveal-card bg-velora-surface border border-velora-border rounded-2xl p-8 flex flex-col justify-between space-y-8">
                    <div class="space-y-5">
                        <div class="flex items-center justify-between">
                            <span class="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-velora-card border border-velora-border text-velora-accent">
                                ${escapeHTML(spiceRoom.type || 'Signature Design Concept')}
                            </span>
                            <span class="text-xs font-mono text-velora-muted">${escapeHTML(spiceRoom.industry)}</span>
                        </div>
                        <h3 class="font-display text-2xl sm:text-3xl font-normal text-velora-text">
                            ${escapeHTML(spiceRoom.title)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            ${escapeHTML(spiceRoom.summary)}
                        </p>
                        <div class="pt-4 border-t border-velora-border space-y-2 text-xs text-velora-muted">
                            ${(spiceRoom.deliverables || []).slice(0, 3).map(d => `
                            <div class="flex items-center gap-2">
                                <span class="w-1 h-1 rounded-full bg-velora-accent"></span>
                                <span>${escapeHTML(d)}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="pt-4 border-t border-velora-border flex items-center justify-between">
                        <a href="/portfolio" class="text-xs font-mono tracking-wider text-velora-accent font-semibold hover:underline">View Concept Details &rarr;</a>
                        <span class="text-[11px] font-mono text-velora-muted">Hospitality Table Booking</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 4. SPECIALIZED SECTORS: PRACTICE AREAS DIRECTORY                  -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-surface border-b border-velora-border" id="atelier-sectors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>Practice Directory // Specialized Sectors</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    Tailored for High-Trust, <span class="italic font-serif text-velora-accent">Service-First</span> Sectors
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    We do not build generic multipurpose brochure sites. We focus exclusively on commercial categories where client trust and immediate contact routing are paramount.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${INDUSTRIES.map(ind => `
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-7 flex flex-col justify-between hover:border-velora-borderStrong transition-all duration-300">
                    <div class="space-y-4">
                        <div class="text-2xl">${ind.icon || '🏢'}</div>
                        <h3 class="font-display text-xl font-normal text-velora-text">
                            ${escapeHTML(ind.name)}
                        </h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            ${escapeHTML(ind.desc)}
                        </p>
                    </div>
                    <div class="pt-6 mt-6 border-t border-velora-border/60">
                        <a href="/industries/${ind.slug}" class="text-xs font-mono text-velora-accent font-semibold hover:underline inline-flex items-center gap-1">
                            <span>Sector Strategies</span>
                            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 5. BEFORE / AFTER: TACTILE COMPARATIVE STUDY                      -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-bg border-b border-velora-border" id="atelier-difference">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>Comparative Study // The Difference is Obvious</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    The Difference is <span class="italic font-serif text-velora-accent">Obvious</span>
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    Compare the reality of commodity template websites against a Velora handcrafted atelier architecture. Drag the wipe handle or use keyboard arrows to inspect the difference.
                </p>
            </div>

            <!-- Comparison Frame with Physical Wipe Slider -->
            <div class="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-velora-border bg-velora-surface select-none shadow-sm premium-border" 
                 id="atelier-before-after-container" 
                 role="slider" 
                 tabindex="0" 
                 aria-label="Before and After Comparison" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 aria-valuenow="85">
                
                <!-- Under Layer: BEFORE (Commodity Site) -->
                <div class="p-8 sm:p-12 lg:p-16 bg-[#EDE8DF] text-[#3D3833] space-y-6">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0DAD0] border border-[#CCC4B6] text-[10px] font-mono tracking-widest text-[#786F63] uppercase">
                        <span>BEFORE // THE COMMODITY TEMPLATE</span>
                    </div>
                    <h3 class="font-display text-2xl sm:text-4xl font-normal text-[#2A2622] leading-tight text-balance">
                        Bloated Templates, Hidden Lock-in &amp; High Friction
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-sans text-[#544E46] leading-relaxed">
                        <div class="p-4 rounded-xl bg-[#FAF8F3] border border-[#DDD5C7] space-y-1">
                            <div class="font-bold text-[#2A2622]">Slow Runtime Overhead</div>
                            <div>Dozens of third-party plugins, unused framework scripts, and sluggish mobile loading.</div>
                        </div>
                        <div class="p-4 rounded-xl bg-[#FAF8F3] border border-[#DDD5C7] space-y-1">
                            <div class="font-bold text-[#2A2622]">Perpetual Lease Dependency</div>
                            <div>You pay indefinitely for a proprietary builder; stop paying, and your business disappears.</div>
                        </div>
                        <div class="p-4 rounded-xl bg-[#FAF8F3] border border-[#DDD5C7] space-y-1">
                            <div class="font-bold text-[#2A2622]">Generic Stock Aesthetic</div>
                            <div>Identical template look-and-feel shared with hundreds of unvetted local competitors.</div>
                        </div>
                        <div class="p-4 rounded-xl bg-[#FAF8F3] border border-[#DDD5C7] space-y-1">
                            <div class="font-bold text-[#2A2622]">Broken Inquiry Routing</div>
                            <div>Unmonitored contact forms that quietly fail to deliver patient or buyer leads.</div>
                        </div>
                    </div>
                </div>

                <!-- Over Layer: AFTER (Velora Atelier) with clip-path wipe -->
                <div id="atelier-after-layer" 
                     class="absolute inset-0 p-8 sm:p-12 lg:p-16 bg-velora-card text-velora-text space-y-6 overflow-hidden" 
                     style="clip-path: inset(0 0 0 85%);">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-velora-surface border border-velora-border text-[10px] font-mono tracking-widest text-velora-accent uppercase">
                        <span>AFTER // VELORA HANDCRAFTED ATELIER</span>
                    </div>
                    <h3 class="font-display text-2xl sm:text-4xl font-normal text-velora-text leading-tight text-balance">
                        Lean Semantic Architecture &amp; 100% Client Ownership
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-sans text-velora-muted leading-relaxed">
                        <div class="p-4 rounded-xl bg-velora-surface border border-velora-border space-y-1">
                            <div class="font-bold text-velora-text">Instant Mobile Loading</div>
                            <div>Zero runtime UI framework overhead. Pure Node.js SSR that responds instantaneously on 4G.</div>
                        </div>
                        <div class="p-4 rounded-xl bg-velora-surface border border-velora-border space-y-1">
                            <div class="font-bold text-velora-text">Complete Asset Independence</div>
                            <div>You own 100% of your source code, design assets, and domains with zero monthly hostage retainers.</div>
                        </div>
                        <div class="p-4 rounded-xl bg-velora-surface border border-velora-border space-y-1">
                            <div class="font-bold text-velora-text">Bespoke Tactile Identity</div>
                            <div>Warm, distinctive typography and editorial layouts calibrated strictly for high-trust practices.</div>
                        </div>
                        <div class="p-4 rounded-xl bg-velora-surface border border-velora-border space-y-1">
                            <div class="font-bold text-velora-text">Direct Patient/Buyer Pathways</div>
                            <div>Reliable one-tap telephone links, WhatsApp routing, and verified lead delivery endpoints.</div>
                        </div>
                    </div>
                </div>

                <!-- Physical Wipe Handle -->
                <div id="atelier-slider-handle" 
                     class="absolute top-0 bottom-0 w-1 bg-velora-accent cursor-ew-resize z-20 flex items-center justify-center -translate-x-1/2" 
                     style="left: 85%;">
                    <div class="w-8 h-8 rounded-full bg-velora-accent text-[#FAF9F6] flex items-center justify-center shadow-lg border-2 border-velora-bg text-[10px] font-bold select-none pointer-events-none">
                        &harr;
                    </div>
                </div>
            </div>
            
            <div class="mt-4 text-center text-xs font-mono text-velora-muted">
                Drag slider or use Left / Right arrow keys &middot; Double-click to reset
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 6. THE VELORA STANDARD: THREE-PILLAR TACTILE TRIPTYCH             -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-surface border-b border-velora-border" id="atelier-standard">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>Studio Principles // The Velora Standard</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    The Pillars of <span class="italic font-serif text-velora-accent">Enduring</span> Digital Quality
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    These three commitments govern every commission we accept. They ensure your investment continues to deliver commercial value for years.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Pillar 1 -->
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-8 space-y-6">
                    <div class="text-xs font-mono text-velora-accent tracking-widest uppercase">PRINCIPLE // 01</div>
                    <h3 class="font-display text-2xl font-normal text-velora-text">Lean by Design</h3>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        We reject the bloat of commodity builders. Clean semantic HTML, modern CSS, and vanilla JavaScript ensure instant load speeds on mobile networks without requiring bloated client-side runtimes.
                    </p>
                    <div class="pt-4 border-t border-velora-border/60 text-[11px] font-mono text-velora-accent">
                        &bull; Zero framework lock-in
                    </div>
                </div>

                <!-- Pillar 2 -->
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-8 space-y-6">
                    <div class="text-xs font-mono text-velora-accent tracking-widest uppercase">PRINCIPLE // 02</div>
                    <h3 class="font-display text-2xl font-normal text-velora-text">Built for Local Conversion</h3>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        Every layout decision is calibrated around the local searcher’s intent. Prominent phone access, frictionless WhatsApp routing, clear pricing transparency, and verified consultation booking paths.
                    </p>
                    <div class="pt-4 border-t border-velora-border/60 text-[11px] font-mono text-velora-accent">
                        &bull; High-intent buyer routing
                    </div>
                </div>

                <!-- Pillar 3 -->
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-8 space-y-6">
                    <div class="text-xs font-mono text-velora-accent tracking-widest uppercase">PRINCIPLE // 03</div>
                    <h3 class="font-display text-2xl font-normal text-velora-text">Complete Asset Ownership</h3>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        You retain 100% intellectual property ownership of your website, repository, domains, and design files upon final handover. No recurring platform lock-in fees or hostage hold-ups.
                    </p>
                    <div class="pt-4 border-t border-velora-border/60 text-[11px] font-mono text-velora-accent">
                        &bull; Permanent digital property
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 7. PROCESS: THE COMMISSION JOURNEY (5 CANONICAL STAGES)           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-bg border-b border-velora-border" id="atelier-process">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>The Commission Journey // Five Structured Stages</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    A Structured, <span class="italic font-serif text-velora-accent">Transparent</span> Studio Process
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    From initial architectural discovery to post-launch care, every milestone is clearly communicated with direct founder oversight.
                </p>
            </div>

            <!-- 5 Stages Mapped from Canonical Data -->
            <div class="space-y-6">
                ${SERVICES[0].process.map((step, idx) => `
                <div class="atelier-reveal-card bg-velora-surface border border-velora-border rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-velora-borderStrong transition-all duration-300">
                    <div class="flex items-start sm:items-center gap-6">
                        <span class="font-serif italic text-3xl sm:text-4xl text-velora-accent/80 font-normal shrink-0 text-balance">
                            ${escapeHTML(step.step)}
                        </span>
                        <div class="space-y-1.5">
                            <div class="text-[10px] font-mono uppercase tracking-widest text-velora-muted">STAGE // 0${idx + 1}</div>
                            <h3 class="font-display text-xl sm:text-2xl font-normal text-velora-text">
                                ${escapeHTML(step.title)}
                            </h3>
                            <p class="text-xs text-velora-muted leading-relaxed font-sans max-w-2xl">
                                ${escapeHTML(step.desc)}
                            </p>
                        </div>
                    </div>
                    <div class="shrink-0 text-xs font-mono text-velora-muted/80 self-end md:self-center">
                        Stage Milestone &check;
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 8. PRICING & SCOPE ESTIMATOR: TRANSPARENT INVESTMENT             -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-surface border-b border-velora-border" id="atelier-pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>Studio Investment // Clear Rates</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    Transparent <span class="italic font-serif text-velora-accent">Commission</span> Rates &amp; Scope Estimator
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    Straightforward pricing with zero surprise charges. All project rates cover end-to-end design, custom SSR engineering, and launch deployment.
                </p>
            </div>

            <!-- Three Canonical Tiers -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Essential -->
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-8 flex flex-col justify-between space-y-8">
                    <div class="space-y-6">
                        <div class="space-y-1">
                            <span class="text-xs font-mono text-velora-accent tracking-widest uppercase">TIER 01 // ESSENTIAL</span>
                            <h3 class="font-display text-2xl font-normal text-velora-text">Essential Presence</h3>
                            <p class="text-xs text-velora-muted leading-relaxed">For independent clinics or boutique practices establishing a verified digital presence.</p>
                        </div>
                        <div class="font-display text-4xl font-normal text-velora-text text-balance">
                            ₹14,999
                        </div>
                        <ul class="space-y-2.5 text-xs text-velora-muted pt-4 border-t border-velora-border/60">
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Custom 1-3 Page Semantic Architecture</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Mobile-First Fast Rendering</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Direct WhatsApp &amp; Phone Lead Pathways</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Basic Local Search Foundation</span></li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="w-full py-3.5 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-surface border border-velora-border hover:bg-velora-border transition-colors">
                        Select Essential &rarr;
                    </a>
                </div>

                <!-- Professional -->
                <div class="atelier-reveal-card bg-velora-card border-2 border-velora-accent rounded-2xl p-8 flex flex-col justify-between space-y-8 relative shadow-md">
                    <div class="absolute -top-3.5 left-8 px-3 py-1 rounded-full bg-velora-accent text-[#FAF9F6] text-[10px] font-mono tracking-widest uppercase font-bold">
                        RECOMMENDED COMMISSION
                    </div>
                    <div class="space-y-6 pt-2">
                        <div class="space-y-1">
                            <span class="text-xs font-mono text-velora-accent tracking-widest uppercase">TIER 02 // PROFESSIONAL</span>
                            <h3 class="font-display text-2xl font-normal text-velora-text">Professional Studio</h3>
                            <p class="text-xs text-velora-muted leading-relaxed">Complete digital practice architecture for competitive local discovery and conversion.</p>
                        </div>
                        <div class="font-display text-4xl font-normal text-velora-text text-balance">
                            ₹34,999
                        </div>
                        <ul class="space-y-2.5 text-xs text-velora-muted pt-4 border-t border-velora-border/60">
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Up to 7 Custom Bespoke Pages</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Comprehensive Local SEO &amp; Schema.org</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Interactive Menu / Treatment Accordion</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Google Business Profile Optimization</span></li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="w-full py-3.5 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity btn-luxury">
                        Commission Professional &rarr;
                    </a>
                </div>

                <!-- Custom -->
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl p-8 flex flex-col justify-between space-y-8">
                    <div class="space-y-6">
                        <div class="space-y-1">
                            <span class="text-xs font-mono text-velora-accent tracking-widest uppercase">TIER 03 // CUSTOM</span>
                            <h3 class="font-display text-2xl font-normal text-velora-text">Bespoke Atelier</h3>
                            <p class="text-xs text-velora-muted leading-relaxed">Tailored multi-location enterprise architectures, bespoke inventory or reservation integrations.</p>
                        </div>
                        <div class="font-display text-4xl font-normal text-velora-text text-balance">
                            ₹69,999+
                        </div>
                        <ul class="space-y-2.5 text-xs text-velora-muted pt-4 border-t border-velora-border/60">
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Full Multi-Location Practice System</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Custom Dynamic Inventory / Table Booking</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Hyper-Local Micro-Market Landing Pages</span></li>
                            <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-velora-accent"></span><span>Priority SLA &amp; Ongoing Architecture</span></li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="w-full py-3.5 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-surface border border-velora-border hover:bg-velora-border transition-colors">
                        Inquire Custom &rarr;
                    </a>
                </div>
            </div>

            <!-- Interactive Project Scope Estimator -->
            <div class="bg-velora-card border border-velora-border rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-sm">
                <div class="max-w-xl mb-8 space-y-2">
                    <div class="text-xs font-mono text-velora-accent tracking-widest uppercase">Interactive Scope Calculator</div>
                    <h3 class="font-display text-2xl sm:text-3xl font-normal text-velora-text">
                        Estimate Your Commission Scope
                    </h3>
                    <p class="text-xs text-velora-muted font-sans">
                        Adjust pages and optional studio additions for an instant indicative estimate.
                    </p>
                </div>

                <div class="space-y-8">
                    <!-- Pages Slider -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between text-xs">
                            <label for="atelier-calc-pages" class="font-mono text-velora-text uppercase tracking-wider">Number of Custom Pages:</label>
                            <span id="atelier-calc-pages-val" class="font-mono font-bold text-velora-accent text-sm">5 Pages</span>
                        </div>
                        <input type="range" 
                               id="atelier-calc-pages" 
                               min="1" 
                               max="20" 
                               value="5" 
                               class="w-full accent-[#9E5B32] cursor-pointer">
                        <div class="flex justify-between text-[10px] font-mono text-velora-muted">
                            <span>1 Page</span>
                            <span>10 Pages</span>
                            <span>20 Pages</span>
                        </div>
                    </div>

                    <!-- Add-on Toggles -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-velora-border">
                        <label class="flex items-start gap-3 p-4 rounded-xl bg-velora-surface border border-velora-border cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input type="checkbox" id="atelier-calc-seo" checked class="mt-1 accent-[#9E5B32]">
                            <div class="space-y-1">
                                <div class="text-xs font-semibold text-velora-text">Local SEO Foundation</div>
                                <div class="text-[11px] text-velora-muted">Schema.org, localized copy &amp; Google Map sync (+₹17,500)</div>
                            </div>
                        </label>

                        <label class="flex items-start gap-3 p-4 rounded-xl bg-velora-surface border border-velora-border cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input type="checkbox" id="atelier-calc-maint" class="mt-1 accent-[#9E5B32]">
                            <div class="space-y-1">
                                <div class="text-xs font-semibold text-velora-text">Quarterly Studio Care</div>
                                <div class="text-[11px] text-velora-muted">Uptime monitoring, edits &amp; performance checks (+₹15,000)</div>
                            </div>
                        </label>
                    </div>

                    <!-- Total & Dynamic Quote CTA -->
                    <div class="pt-6 border-t border-velora-border flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div class="space-y-1 text-center sm:text-left">
                            <div class="text-[11px] font-mono text-velora-muted uppercase tracking-widest">Indicative Investment</div>
                            <div id="atelier-calc-total" class="font-display text-4xl sm:text-5xl font-normal text-velora-text text-balance" style="font-variant-numeric: tabular-nums;">
                                ₹35,000
                            </div>
                        </div>
                        <a href="/contact?pages=5&seo=true&maint=false&est=35000" 
                           id="atelier-calc-quote-btn" 
                           class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity btn-luxury">
                            Request This Scope &rarr;
                        </a>
                    </div>

                    <div class="text-center text-[11px] text-velora-muted pt-4 border-t border-velora-border/60">
                        Project pricing covers website design &amp; development. Domain, hosting, and optional maintenance quoted transparently where required.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 9. DIAGNOSTIC REVIEW: COMPLIMENTARY TECHNICAL TEARDOWN           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-bg border-b border-velora-border" id="atelier-audit">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-velora-surface border border-velora-border rounded-3xl p-8 sm:p-12 lg:p-16 space-y-8 shadow-sm">
                <div class="max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                        <span>Diagnostic Review // Studio Analysis</span>
                    </div>
                    <h2 class="font-display text-3xl sm:text-4xl font-normal text-velora-text tracking-tight text-balance">
                        Request an Honest Technical &amp; Aesthetic Review
                    </h2>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        Submit your current web address. We review mobile rendering speeds, search schema, and local contact pathways personally. No automated marketing spam.
                    </p>
                </div>

                <form id="atelier-audit-form" class="space-y-4">
                    <!-- Honeypot -->
                    <input type="text" name="_gotcha" id="atelier-audit-gotcha" class="hidden" tabindex="-1" autocomplete="off">

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label for="atelier-audit-url" class="text-[11px] font-mono uppercase tracking-wider text-velora-text">Current Website URL *</label>
                            <input type="url" 
                                   id="atelier-audit-url" 
                                   required 
                                   placeholder="https://yourpractice.com" 
                                   class="w-full px-4 py-3 text-xs bg-velora-card border border-velora-border rounded-xl focus:border-velora-accent focus:outline-none text-velora-text">
                        </div>
                        <div class="space-y-1.5">
                            <label for="atelier-audit-email" class="text-[11px] font-mono uppercase tracking-wider text-velora-text">Your Email Address *</label>
                            <input type="email" 
                                   id="atelier-audit-email" 
                                   required 
                                   placeholder="founder@yourpractice.com" 
                                   class="w-full px-4 py-3 text-xs bg-velora-card border border-velora-border rounded-xl focus:border-velora-accent focus:outline-none text-velora-text">
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label for="atelier-audit-notes" class="text-[11px] font-mono uppercase tracking-wider text-velora-text">Specific Questions or Focus (Optional)</label>
                        <textarea id="atelier-audit-notes" 
                                  rows="2" 
                                  placeholder="e.g. Inquiries dropping on mobile, ranking poorly on Google Maps in Gurugram..." 
                                  class="w-full px-4 py-3 text-xs bg-velora-card border border-velora-border rounded-xl focus:border-velora-accent focus:outline-none text-velora-text"></textarea>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                        <button type="submit" 
                                id="atelier-audit-submit-btn" 
                                class="px-8 py-4 text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity btn-luxury">
                            Request Complimentary Review &rarr;
                        </button>
                        <span class="text-[11px] font-mono text-velora-muted">
                            Personal review &middot; No automated spam
                        </span>
                    </div>

                    <!-- Messages -->
                    <div id="atelier-audit-success" class="hidden p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans">
                        Thank you. We have received your web address and will conduct your manual diagnostic review within two business days.
                    </div>
                    <div id="atelier-audit-error" class="hidden p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-sans">
                        Unable to process your request. Please check your connection or contact us directly at ${CONFIG.email}.
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 10. CURATED INQUIRIES: ACCESSIBLE ACCORDION                       -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-velora-surface border-b border-velora-border" id="atelier-faq">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mb-16 space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-velora-accent uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                    <span>Curated Inquiries // FAQ</span>
                </div>
                <h2 class="font-display text-3xl sm:text-5xl font-normal text-velora-text tracking-tight leading-tight text-balance">
                    Frequently Addressed <span class="italic font-serif text-velora-accent">Questions</span>
                </h2>
                <p class="text-base text-velora-muted leading-relaxed font-sans">
                    Everything you need to know about our commissioning process, timelines, code ownership, and technical standards.
                </p>
            </div>

            <!-- Accessible Accordion Structure -->
            <div class="space-y-4">
                ${FAQS.map((faq, idx) => `
                <div class="atelier-reveal-card bg-velora-card border border-velora-border rounded-2xl overflow-hidden">
                    <button type="button" 
                            class="atelier-faq-trigger w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-velora-faint transition-colors" 
                            aria-expanded="false" 
                            aria-controls="atelier-faq-panel-${idx}">
                        <span class="font-display text-lg sm:text-xl font-normal text-velora-text">
                            ${escapeHTML(faq.q)}
                        </span>
                        <span class="atelier-faq-icon font-mono text-velora-accent text-lg shrink-0 transition-transform duration-200">
                            +
                        </span>
                    </button>
                    <div id="atelier-faq-panel-${idx}" 
                         class="atelier-faq-panel hidden px-6 sm:px-8 pb-6 text-xs text-velora-muted leading-relaxed font-sans border-t border-velora-border/40 pt-4">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 11. FINAL CALL TO ACTION: WARM STUDIO CLOSING                     -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-32 lg:py-36 bg-velora-bg text-velora-text" id="atelier-final-cta">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-velora-surface border border-velora-border text-[11px] font-mono tracking-widest text-velora-muted uppercase">
                <span class="w-2 h-2 rounded-full bg-velora-accent"></span>
                <span>BEGIN YOUR COMMISSION</span>
            </div>

            <h2 class="font-display text-4xl sm:text-6xl font-normal tracking-tight text-velora-text leading-tight text-balance">
                Craft Your Practice's <span class="italic font-serif text-velora-accent">Enduring</span> Digital Presence
            </h2>

            <p class="text-base text-velora-muted leading-relaxed max-w-2xl mx-auto font-sans text-pretty">
                Take the first step toward a website that reflects the true caliber of your practice. Clear milestones, direct founder communication, and reliable delivery timelines.
            </p>

            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" class="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity btn-luxury">
                    Request Commission Consultation &rarr;
                </a>
                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-semibold rounded-full bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border transition-colors">
                    Direct WhatsApp Enquiry &rarr;
                </a>
            </div>

            <div class="pt-8 text-xs font-mono text-velora-muted">
                <span>Serving Gurugram, Delhi NCR, Chandigarh &amp; Bengaluru</span>
            </div>
        </div>
    </section>
    `;

    const script = `
        (function() {
            // Global interactive registry for Atelier
            window.cleanupAtelierInteractions = function() {
                if (window.__veloraLenis) {
                    if (window.__veloraLenisTicker && typeof gsap !== 'undefined') {
                        gsap.ticker.remove(window.__veloraLenisTicker);
                        window.__veloraLenisTicker = null;
                    }
                    try {
                        window.__veloraLenis.destroy();
                    } catch(e) {}
                    window.__veloraLenis = null;
                }
                if (window.__veloraLenisTicker && typeof gsap !== 'undefined') {
                    gsap.ticker.remove(window.__veloraLenisTicker);
                    window.__veloraLenisTicker = null;
                }
                if (window.__veloraLenis) {
                    window.__veloraLenis.destroy();
                    window.__veloraLenis = null;
                }
                // Revert Atelier-scoped GSAP context (kills context-owned tweens and triggers)
                if (window.__veloraAtelierCtx) {
                    try {
                        window.__veloraAtelierCtx.revert();
                    } catch(e) {}
                    window.__veloraAtelierCtx = null;
                }
                // Kill explicitly stored Atelier ScrollTrigger references without touching global triggers
                if (Array.isArray(window.__veloraAtelierTriggers)) {
                    window.__veloraAtelierTriggers.forEach(st => {
                        try {
                            if (st && typeof st.kill === 'function') st.kill();
                        } catch(e) {}
                    });
                    window.__veloraAtelierTriggers = [];
                }
            };

            window.initAtelierInteractions = function() {
                // Ensure clean state before initializing
                if (typeof window.cleanupAtelierInteractions === 'function') {
                    window.cleanupAtelierInteractions();
                }

                window.__veloraAtelierTriggers = [];
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                // 1. Lenis & GSAP Initialization
                if (!prefersReducedMotion && typeof Lenis !== 'undefined' && typeof gsap !== 'undefined') {
                    try {
                        if (typeof ScrollTrigger !== 'undefined') {
                            gsap.registerPlugin(ScrollTrigger);
                        }

                        const lenis = new Lenis({
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                            orientation: 'vertical',
                            gestureOrientation: 'vertical',
                            smoothWheel: true,
                            wheelMultiplier: 1,
                            touchMultiplier: 2
                        });
                        window.__veloraLenis = lenis;

                        if (typeof ScrollTrigger !== 'undefined') {
                            lenis.on('scroll', ScrollTrigger.update);
                        }

                        const tickerCallback = (time) => {
                            if (window.__veloraLenis) {
                                window.__veloraLenis.raf(time * 1000);
                            }
                        };
                        window.__veloraLenisTicker = tickerCallback;
                        gsap.ticker.add(tickerCallback);
                        gsap.ticker.lagSmoothing(0);

                        // Scoped GSAP Motion
                        window.__veloraAtelierCtx = gsap.context(() => {
                            gsap.from('.atelier-hero-fade', {
                                opacity: 0,
                                y: 16,
                                duration: 0.8,
                                stagger: 0.12,
                                ease: 'power2.out'
                            });

                            if (typeof ScrollTrigger !== 'undefined') {
                                gsap.utils.toArray('.atelier-reveal-card').forEach(card => {
                                    const anim = gsap.from(card, {
                                        scrollTrigger: {
                                            trigger: card,
                                            start: 'top 88%',
                                            toggleActions: 'play none none none'
                                        },
                                        opacity: 0,
                                        y: 20,
                                        duration: 0.7,
                                        ease: 'power2.out'
                                    });
                                    if (anim && anim.scrollTrigger) {
                                        window.__veloraAtelierTriggers.push(anim.scrollTrigger);
                                    }
                                });
                            }
                        });
                    } catch(err) {
                        console.warn('[Velora Atelier] Motion init fallback:', err);
                    }
                }

                // 2. Before / After Comparison Slider
                const container = document.getElementById('atelier-before-after-container');
                const handle = document.getElementById('atelier-slider-handle');
                const afterLayer = document.getElementById('atelier-after-layer');

                if (container && handle && afterLayer) {
                    let isDragging = false;

                    function setSliderPosition(percentage) {
                        const clamped = Math.max(0, Math.min(100, percentage));
                        handle.style.left = clamped + '%';
                        afterLayer.style.clipPath = 'inset(0 0 0 ' + clamped + '%)';
                        container.setAttribute('aria-valuenow', Math.round(clamped));
                    }

                    function handlePointerMove(e) {
                        if (!isDragging) return;
                        const rect = container.getBoundingClientRect();
                        const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
                        const percent = (x / rect.width) * 100;
                        setSliderPosition(percent);
                    }

                    function stopDragging() {
                        if (isDragging) {
                            isDragging = false;
                            window.removeEventListener('pointermove', handlePointerMove);
                            window.removeEventListener('pointerup', stopDragging);
                            window.removeEventListener('touchmove', handlePointerMove);
                            window.removeEventListener('touchend', stopDragging);
                        }
                    }

                    function startDragging(e) {
                        isDragging = true;
                        handlePointerMove(e);
                        window.addEventListener('pointermove', handlePointerMove);
                        window.addEventListener('pointerup', stopDragging);
                        window.addEventListener('touchmove', handlePointerMove, { passive: true });
                        window.addEventListener('touchend', stopDragging);
                    }

                    container.addEventListener('pointerdown', startDragging);

                    // Keyboard navigation
                    container.addEventListener('keydown', function(e) {
                        const current = parseFloat(container.getAttribute('aria-valuenow')) || 85;
                        if (e.key === 'ArrowLeft') {
                            e.preventDefault();
                            setSliderPosition(current - 5);
                        } else if (e.key === 'ArrowRight') {
                            e.preventDefault();
                            setSliderPosition(current + 5);
                        }
                    });

                    // Double click to reset to 85%
                    container.addEventListener('dblclick', function() {
                        setSliderPosition(85);
                    });
                }

                // 3. Project Scope Estimator
                const pagesInput = document.getElementById('atelier-calc-pages');
                const pagesVal = document.getElementById('atelier-calc-pages-val');
                const seoInput = document.getElementById('atelier-calc-seo');
                const maintInput = document.getElementById('atelier-calc-maint');
                const totalDisplay = document.getElementById('atelier-calc-total');
                const quoteBtn = document.getElementById('atelier-calc-quote-btn');

                if (pagesInput && totalDisplay && quoteBtn) {
                    function recalc() {
                        const pages = parseInt(pagesInput.value, 10) || 5;
                        if (pagesVal) pagesVal.textContent = pages + (pages === 1 ? ' Page' : ' Pages');

                        const base = 10000;
                        const pageCost = pages * 1500;
                        const seoCost = (seoInput && seoInput.checked) ? 17500 : 0;
                        const maintCost = (maintInput && maintInput.checked) ? 15000 : 0;
                        const total = base + pageCost + seoCost + maintCost;

                        totalDisplay.textContent = '₹' + total.toLocaleString('en-IN');
                        quoteBtn.href = '/contact?pages=' + pages + '&seo=' + (seoInput ? seoInput.checked : false) + '&maint=' + (maintInput ? maintInput.checked : false) + '&est=' + total;
                    }

                    pagesInput.addEventListener('input', recalc);
                    if (seoInput) seoInput.addEventListener('change', recalc);
                    if (maintInput) maintInput.addEventListener('change', recalc);
                    recalc();
                }

                // 4. Diagnostic Review Form
                const auditForm = document.getElementById('atelier-audit-form');
                if (auditForm) {
                    auditForm.addEventListener('submit', async function(e) {
                        e.preventDefault();
                        if (typeof window.veloraTrack === 'function') window.veloraTrack('audit_submit');

                        const submitBtn = document.getElementById('atelier-audit-submit-btn');
                        const errorDiv = document.getElementById('atelier-audit-error');
                        const successDiv = document.getElementById('atelier-audit-success');
                        const urlInput = document.getElementById('atelier-audit-url');
                        const emailInput = document.getElementById('atelier-audit-email');
                        const notesInput = document.getElementById('atelier-audit-notes');
                        const gotchaInput = document.getElementById('atelier-audit-gotcha');

                        if (!urlInput || !urlInput.value.trim() || !emailInput || !emailInput.value.trim()) return;

                        if (submitBtn) {
                            submitBtn.disabled = true;
                            submitBtn.textContent = 'Transmitting...';
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
                                    email: emailInput.value.trim(),
                                    notes: notesInput ? notesInput.value.trim() : '',
                                    _gotcha: gotchaInput ? gotchaInput.value : ''
                                })
                            });

                            if (res.ok) {
                                if (successDiv) successDiv.classList.remove('hidden');
                                auditForm.reset();
                            } else {
                                if (errorDiv) errorDiv.classList.remove('hidden');
                            }
                        } catch (err) {
                            if (errorDiv) errorDiv.classList.remove('hidden');
                        } finally {
                            if (submitBtn) {
                                submitBtn.disabled = false;
                                submitBtn.textContent = 'Request Complimentary Review \u2192';
                            }
                        }
                    });
                }

                // 5. Accessible FAQ Accordion (.atelier-faq-panel)
                const faqTriggers = document.querySelectorAll('.atelier-faq-trigger');
                faqTriggers.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const panelId = this.getAttribute('aria-controls');
                        const panel = document.getElementById(panelId);
                        const isExpanded = this.getAttribute('aria-expanded') === 'true';
                        const icon = this.querySelector('.atelier-faq-icon');

                        this.setAttribute('aria-expanded', !isExpanded);
                        if (panel && panel.classList.contains('atelier-faq-panel')) {
                            panel.classList.toggle('hidden');
                        }
                        if (icon) {
                            icon.textContent = isExpanded ? '+' : '\u2212';
                        }
                    });
                });
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', window.initAtelierInteractions);
            } else {
                window.initAtelierInteractions();
            }
        })();
    `;

    return { meta, content, script };
}

module.exports = {
    renderAtelierExperience
};
