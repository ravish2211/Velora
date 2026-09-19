// ============================================================================ //
// VELORA DIGITAL — 04 MODERN EXPERIENCE PRESENTATION RENDERER                  //
// Art Direction: Contemporary Clarity · Structured Usability · Geometric Scale //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema, Header, Footer } = require("../components");

function renderModernExperience(currentPath = "/") {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates') || PORTFOLIO[1];
    const spiceRoom = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Modern Boutique Web Design & Local SEO Studio',
        description: 'Velora Digital engineers fast, mobile-first websites with clean semantic architecture and dedicated local search discovery for high-trust commercial practices.',
        schema: generateSchema('Organization'),
        breadcrumbs: [{ title: 'Home', link: '/?exp=modern' }]
    };

    const content = `
    <!-- ================================================================= -->
    <!-- 1. HERO SECTION (CONTEMPORARY CLARITY & ARCHITECTURAL GRID)       -->
    <!-- ================================================================= -->
    <section class="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-velora-bg text-velora-text border-b border-velora-border" id="modern-hero">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <!-- Left Column: Confident Contemporary Typography -->
                <div class="lg:col-span-7 space-y-6">
                    <div class="inline-flex items-center gap-2.5 px-3 py-1 bg-velora-surface border border-velora-border text-[11px] font-mono tracking-wider text-velora-muted uppercase modern-reveal">
                        <span class="w-1.5 h-1.5 rounded-full bg-velora-accent"></span>
                        <span>04 Modern // Contemporary Clarity</span>
                    </div>

                    <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-velora-text leading-[1.08] text-balance modern-reveal">
                        Websites Engineered for Commercial Clarity &amp; Local Discovery
                    </h1>

                    <p class="text-base sm:text-lg text-velora-muted leading-relaxed max-w-2xl text-pretty font-sans modern-reveal">
                        We build fast, mobile-first websites and local search foundations for high-trust practices. Clean semantic code, direct patient contact pathways, and 100% asset ownership.
                    </p>

                    <!-- Primary Action Group -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 modern-reveal">
                        <a href="/contact" id="modern-hero-primary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors btn-luxury">
                            Start Project Consultation &rarr;
                        </a>
                        <a href="#modern-work" id="modern-hero-secondary-cta" class="px-7 py-4 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border transition-colors">
                            Explore Selected Work &darr;
                        </a>
                    </div>

                    <!-- Factual Studio Indicators -->
                    <div class="pt-6 border-t border-velora-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-velora-muted font-sans modern-reveal">
                        <div class="flex items-center gap-2">
                            <span class="text-velora-accent font-mono font-bold">&bull;</span>
                            <span>Semantic SSR Architecture</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-velora-accent font-mono font-bold">&bull;</span>
                            <span>Local Search Schema.org</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-velora-accent font-mono font-bold">&bull;</span>
                            <span>100% Client Code Ownership</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Geometric Production Specification Composition -->
                <div class="lg:col-span-5">
                    <div class="bg-velora-surface border border-velora-border p-6 sm:p-8 space-y-6 modern-reveal">
                        <div class="flex items-center justify-between pb-4 border-b border-velora-border text-xs font-mono">
                            <span class="text-velora-text font-bold uppercase tracking-wider">Production Blueprint</span>
                            <span class="text-velora-accent tracking-wider font-semibold">PRODUCTION STANDARDS</span>
                        </div>

                        <!-- Deliverable Module 1 -->
                        <div class="space-y-1.5">
                            <div class="flex items-center justify-between text-xs">
                                <span class="font-semibold text-velora-text font-sans">1. Semantic SSR &amp; Mobile Engineering</span>
                                <span class="text-[10px] font-mono text-velora-muted">LIGHTWEIGHT</span>
                            </div>
                            <div class="w-full bg-velora-bg h-2 border border-velora-border overflow-hidden">
                                <div class="bg-velora-accent h-full w-full"></div>
                            </div>
                            <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                Clean HTML/CSS without bloated runtime frameworks. Tested across real mobile screen dimensions.
                            </p>
                        </div>

                        <!-- Deliverable Module 2 -->
                        <div class="space-y-1.5">
                            <div class="flex items-center justify-between text-xs">
                                <span class="font-semibold text-velora-text font-sans">2. Local Search &amp; Schema Integration</span>
                                <span class="text-[10px] font-mono text-velora-muted">STRUCTURED</span>
                            </div>
                            <div class="w-full bg-velora-bg h-2 border border-velora-border overflow-hidden">
                                <div class="bg-velora-accent h-full w-full"></div>
                            </div>
                            <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                Precise local business structured data and Google Business Profile alignment for neighborhood discovery.
                            </p>
                        </div>

                        <!-- Deliverable Module 3 -->
                        <div class="space-y-1.5">
                            <div class="flex items-center justify-between text-xs">
                                <span class="font-semibold text-velora-text font-sans">3. Complete Client Asset Ownership</span>
                                <span class="text-[10px] font-mono text-velora-muted">INDEPENDENT</span>
                            </div>
                            <div class="w-full bg-velora-bg h-2 border border-velora-border overflow-hidden">
                                <div class="bg-velora-accent h-full w-full"></div>
                            </div>
                            <p class="text-[11px] text-velora-muted leading-relaxed font-sans">
                                100% ownership of source code, domains, and content. Zero proprietary lock-in.
                            </p>
                        </div>

                        <div class="pt-4 border-t border-velora-border flex items-center justify-between text-xs">
                            <span class="text-velora-muted font-sans">Starting Project Investment</span>
                            <span class="font-display font-bold text-velora-text text-base" style="font-variant-numeric: tabular-nums;">₹${CONFIG.pricing.essential.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 2. CORE SERVICES (CONTEMPORARY CAPABILITY SYSTEM)                 -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-surface border-b border-velora-border" id="modern-services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-velora-border gap-6 modern-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Core Studio Capabilities</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Structured for Commercial Results</h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Three tightly integrated services designed to establish client trust, strengthen local search foundations, and safeguard digital assets.
                </p>
            </div>

            <!-- Contemporary Horizontal Capabilities Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                ${SERVICES.map((s, idx) => `
                <div class="bg-velora-bg border border-velora-border p-8 flex flex-col justify-between hover:border-velora-borderStrong transition-colors modern-reveal modern-card-hover">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between pb-4 border-b border-velora-border">
                            <span class="text-xs font-mono text-velora-accent font-bold">DISCIPLINE // 0${idx + 1}</span>
                            <span class="text-[10px] font-mono uppercase px-2 py-0.5 bg-velora-surface border border-velora-border text-velora-muted">${escapeHTML(s.heroTag)}</span>
                        </div>

                        <div>
                            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">${escapeHTML(s.title)}</h3>
                            <p class="text-xs text-velora-muted leading-relaxed font-sans">${escapeHTML(s.short)}</p>
                        </div>

                        <div class="pt-4 border-t border-velora-border space-y-2.5">
                            <span class="text-[10px] font-mono uppercase tracking-wider text-velora-muted block">Core Deliverables:</span>
                            <ul class="space-y-2 text-xs text-velora-muted font-sans">
                                ${s.benefits.slice(0, 4).map(b => `
                                <li class="flex items-start gap-2">
                                    <span class="text-velora-accent font-bold mt-0.5">&check;</span>
                                    <span>${escapeHTML(b)}</span>
                                </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="pt-8 mt-8 border-t border-velora-border flex items-center justify-between">
                        <span class="text-[11px] text-velora-muted font-mono">${escapeHTML(s.timeline)}</span>
                        <a href="/services/${escapeHTML(s.slug)}" class="text-xs font-bold uppercase tracking-wider text-velora-accent hover:text-velora-text transition-colors flex items-center gap-1">
                            <span>Specifications</span>
                            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 3. SELECTED WORK (MODULAR RHYTHM & CONCEPT DEMONSTRATIONS)        -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-bg border-b border-velora-border" id="modern-work">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-velora-border gap-6 modern-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Selected Case Studies</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Signature Concept Demonstrations</h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Editorial concept studies illustrating conversion pathways and semantic architecture across competitive local sectors.
                </div>
            </div>

            <!-- Project Rhythm: 1 Large Lead Study + 2 Balanced Secondary Studies -->
            <div class="space-y-8">
                <!-- Lead Project 01: Aurora Clinic -->
                <div class="bg-velora-surface border border-velora-border p-8 sm:p-12 modern-reveal">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-7 space-y-6">
                            <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
                                <span class="px-2.5 py-1 bg-velora-bg border border-velora-border text-velora-accent font-bold">CASE // 01</span>
                                <span class="px-2.5 py-1 bg-velora-bg border border-velora-border text-velora-muted">${escapeHTML(aurora.industry)}</span>
                                <span class="px-2.5 py-1 bg-velora-accent text-velora-buttonText font-bold text-[10px] tracking-wider uppercase">Signature Design Concept</span>
                            </div>

                            <h3 class="font-display text-3xl sm:text-4xl font-bold text-velora-text text-balance">${escapeHTML(aurora.title)}</h3>
                            <p class="text-sm text-velora-muted leading-relaxed font-sans max-w-2xl">${escapeHTML(aurora.summary || '')}</p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-velora-border text-xs font-sans">
                                <div>
                                    <span class="font-mono text-[10px] uppercase tracking-wider text-velora-accent block mb-1">Client Challenge:</span>
                                    <p class="text-velora-muted leading-relaxed">${escapeHTML(aurora.projectGoals || '')}</p>
                                </div>
                                <div>
                                    <span class="font-mono text-[10px] uppercase tracking-wider text-velora-accent block mb-1">Studio Solution:</span>
                                    <p class="text-velora-muted leading-relaxed">${escapeHTML(aurora.keyUxDecisions || '')}</p>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-5 bg-velora-bg border border-velora-border p-6 space-y-4">
                            <div class="text-xs font-mono uppercase tracking-wider text-velora-accent font-bold pb-2 border-b border-velora-border">
                                Deliverable Specifications
                            </div>
                            <div class="space-y-3 text-xs font-sans">
                                <div class="flex items-center justify-between">
                                    <span class="text-velora-muted">Scope Structure</span>
                                    <span class="text-velora-text font-medium">Bespoke 8-Page System</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-velora-muted">Mobile Pathways</span>
                                    <span class="text-velora-text font-medium">Direct WhatsApp &amp; Call</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-velora-muted">Search Optimization</span>
                                    <span class="text-velora-text font-medium">Local Medical Schema.org</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-velora-muted">Asset Rights</span>
                                    <span class="text-velora-text font-medium">100% Client Ownership</span>
                                </div>
                            </div>
                            <a href="/portfolio" class="block w-full py-3 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border transition-colors mt-4">
                                Examine Portfolio Index &rarr;
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Secondary Projects Grid: 02 Aarav Properties & 03 The Spice Room -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Project 02: Aarav Properties -->
                    <div class="bg-velora-surface border border-velora-border p-8 flex flex-col justify-between space-y-6 modern-reveal modern-card-hover">
                        <div class="space-y-4">
                            <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
                                <span class="px-2 py-0.5 bg-velora-bg border border-velora-border text-velora-accent font-bold">CASE // 02</span>
                                <span class="px-2 py-0.5 bg-velora-bg border border-velora-border text-velora-muted">${escapeHTML(aarav.industry)}</span>
                                <span class="px-2 py-0.5 bg-velora-bg border border-velora-border text-velora-muted text-[10px]">Signature Design Concept</span>
                            </div>

                            <h3 class="font-display text-2xl font-bold text-velora-text">${escapeHTML(aarav.title)}</h3>
                            <p class="text-xs text-velora-muted leading-relaxed font-sans">${escapeHTML(aarav.summary || '')}</p>

                            <div class="pt-4 border-t border-velora-border space-y-2 text-xs font-sans text-velora-muted">
                                <div><strong class="text-velora-text font-medium">Focus:</strong> High-ticket buyer confidence &amp; fast property enquiry dispatch.</div>
                                <div><strong class="text-velora-text font-medium">Structure:</strong> Clean portfolio catalog without third-party portal dependence.</div>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-velora-border">
                            <a href="/portfolio" class="text-xs font-bold uppercase tracking-wider text-velora-accent hover:text-velora-text transition-colors flex items-center justify-between">
                                <span>View Case Study Details</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <!-- Project 03: The Spice Room -->
                    <div class="bg-velora-surface border border-velora-border p-8 flex flex-col justify-between space-y-6 modern-reveal modern-card-hover">
                        <div class="space-y-4">
                            <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
                                <span class="px-2 py-0.5 bg-velora-bg border border-velora-border text-velora-accent font-bold">CASE // 03</span>
                                <span class="px-2 py-0.5 bg-velora-bg border border-velora-border text-velora-muted">${escapeHTML(spiceRoom.industry)}</span>
                                <span class="px-2 py-0.5 bg-velora-bg border border-velora-border text-velora-muted text-[10px]">Signature Design Concept</span>
                            </div>

                            <h3 class="font-display text-2xl font-bold text-velora-text">${escapeHTML(spiceRoom.title)}</h3>
                            <p class="text-xs text-velora-muted leading-relaxed font-sans">${escapeHTML(spiceRoom.summary || '')}</p>

                            <div class="pt-4 border-t border-velora-border space-y-2 text-xs font-sans text-velora-muted">
                                <div><strong class="text-velora-text font-medium">Focus:</strong> Instant mobile reservations without heavy third-party menu aggregators.</div>
                                <div><strong class="text-velora-text font-medium">Structure:</strong> Mobile-first menu hierarchy with direct table booking triggers.</div>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-velora-border">
                            <a href="/portfolio" class="text-xs font-bold uppercase tracking-wider text-velora-accent hover:text-velora-text transition-colors flex items-center justify-between">
                                <span>View Case Study Details</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 4. SPECIALIZED SECTORS (TYPOGRAPHIC DIRECTORY GRID)               -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-surface border-b border-velora-border" id="modern-sectors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-velora-border gap-6 modern-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Commercial Focus</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Specialized Sector Architectures</h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Custom conversion architectures tailored specifically to how local customers make buying and appointment decisions.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${INDUSTRIES.map((ind, idx) => `
                <div class="bg-velora-bg border border-velora-border p-6 flex flex-col justify-between hover:border-velora-borderStrong transition-colors modern-reveal modern-card-hover">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-mono text-velora-accent font-bold">SECTOR // 0${idx + 1}</span>
                            <span class="text-xl">${ind.icon}</span>
                        </div>
                        <h3 class="font-display text-xl font-bold text-velora-text">${escapeHTML(ind.name)}</h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">${escapeHTML(ind.heroDesc || ind.desc)}</p>
                    </div>

                    <div class="pt-6 mt-6 border-t border-velora-border">
                        <a href="/industries/${escapeHTML(ind.slug)}" class="text-xs font-bold uppercase tracking-wider text-velora-accent hover:text-velora-text transition-colors flex items-center justify-between">
                            <span>Sector Roadmap</span>
                            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 5. BEFORE / AFTER (PHYSICAL WIPE & ARCHITECTURAL CONTRAST)        -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-bg border-b border-velora-border" id="modern-difference">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 modern-reveal">
                <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Technical Contrast</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">The Difference is Obvious</h2>
                <p class="mt-4 text-sm text-velora-muted leading-relaxed font-sans text-pretty">
                    Compare unoptimized template assembly against Velora's lightweight semantic architecture. Drag the handle horizontally to evaluate the structural difference.
                </p>
            </div>

            <!-- Comparison Frame with Physical Wipe Slider -->
            <div id="modern-before-after-container" class="relative overflow-hidden border border-velora-border bg-velora-surface select-none touch-none h-[480px] sm:h-[440px] modern-reveal premium-border">
                <!-- BEFORE: Unoptimized Template Site (Base Layer) -->
                <div class="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between bg-[#111318] text-[#94A3B8]">
                    <div>
                        <div class="flex items-center gap-2 mb-4 text-xs font-mono text-red-400">
                            <span class="w-2 h-2 rounded-full bg-red-500"></span>
                            <span class="uppercase tracking-wider font-bold">Unoptimized Template Architecture</span>
                        </div>
                        <h3 class="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                            Generic Page Builder Bloat
                        </h3>
                        <p class="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed font-sans mb-6">
                            Heavy framework libraries, uncompressed image assets, buried contact phone numbers, and dependency on third-party aggregators.
                        </p>
                        <div class="space-y-2 text-xs font-sans text-gray-400">
                            <div class="flex items-center gap-2 text-red-400">&times; Bloated visual builder scripts slowing down mobile devices</div>
                            <div class="flex items-center gap-2 text-red-400">&times; PDF menus or brochures requiring external downloads</div>
                            <div class="flex items-center gap-2 text-red-400">&times; Buried or hidden Click-to-Call and WhatsApp pathways</div>
                            <div class="flex items-center gap-2 text-red-400">&times; Closed ecosystem with monthly platform rental fees</div>
                        </div>
                    </div>
                    <div class="pt-4 border-t border-gray-800 text-[11px] font-mono text-gray-500">
                        Typical Commercial Baseline // Generic Assembly
                    </div>
                </div>

                <!-- AFTER: Velora Modern Semantic Architecture (Clipped Top Layer) -->
                <div id="modern-after-layer" class="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between bg-velora-surface text-velora-text" style="clip-path: polygon(0 0, 85% 0, 85% 100%, 0 100%);">
                    <div>
                        <div class="flex items-center gap-2 mb-4 text-xs font-mono text-velora-accent">
                            <span class="w-2 h-2 rounded-full bg-velora-accent"></span>
                            <span class="uppercase tracking-wider font-bold">Velora Modern Semantic Architecture</span>
                        </div>
                        <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text mb-4">
                            Lightweight Mobile-First Architecture
                        </h3>
                        <p class="text-xs sm:text-sm text-velora-muted max-w-md leading-relaxed font-sans mb-6">
                            Clean server-rendered HTML, structured Local Business Schema, prominent conversion pathways, and 100% complete asset ownership.
                        </p>
                        <div class="space-y-2 text-xs font-sans text-velora-text">
                            <div class="flex items-center gap-2 text-emerald-600 font-medium">&check; Semantic SSR without runtime framework overhead</div>
                            <div class="flex items-center gap-2 text-emerald-600 font-medium">&check; Immediate native mobile menu &amp; direct appointment links</div>
                            <div class="flex items-center gap-2 text-emerald-600 font-medium">&check; Sticky phone, WhatsApp &amp; quote actions on touchscreens</div>
                            <div class="flex items-center gap-2 text-emerald-600 font-medium">&check; 100% full client code and domain ownership</div>
                        </div>
                    </div>
                    <div class="pt-4 border-t border-velora-border text-[11px] font-mono text-velora-muted">
                        Velora Standard Architecture // Bespoke Engineering
                    </div>
                </div>

                <!-- Draggable Divider Handle -->
                <div id="modern-slider-handle" class="absolute top-0 bottom-0 w-1 bg-velora-accent cursor-ew-resize z-20 flex items-center justify-center -translate-x-1/2" style="left: 85%;">
                    <div class="w-8 h-8 rounded-full bg-velora-button text-velora-buttonText border border-velora-border flex items-center justify-center shadow-md btn-luxury">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 6. THE VELORA STANDARD (MODULAR ARCHITECTURAL TRIPTYCH)           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-surface border-b border-velora-border" id="modern-standard">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 modern-reveal">
                <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Core Commitments</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">The Velora Standard</h2>
                <p class="mt-4 text-sm text-velora-muted leading-relaxed font-sans text-pretty">
                    Every commercial project we deliver is governed by three non-negotiable architectural principles.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Pillar 01: Lean by Design -->
                <div class="bg-velora-bg border border-velora-border p-8 space-y-4 modern-reveal">
                    <div class="text-xs font-mono text-velora-accent font-bold pb-3 border-b border-velora-border">
                        PRINCIPLE // 01
                    </div>
                    <h3 class="font-display text-2xl font-bold text-velora-text">Lean by Design</h3>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        Zero bloated site-builder scripts. Zero unnecessary third-party plugins. We write clean, semantic SSR code engineered for real mobile network connections.
                    </p>
                    <ul class="pt-4 border-t border-velora-border space-y-2 text-xs text-velora-muted font-sans">
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Semantic HTML5 &amp; Modern Tailwind</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Strict ₹0 library license overhead</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Lightweight delivery on cellular data</li>
                    </ul>
                </div>

                <!-- Pillar 02: Built for Local Conversion -->
                <div class="bg-velora-bg border border-velora-border p-8 space-y-4 modern-reveal">
                    <div class="text-xs font-mono text-velora-accent font-bold pb-3 border-b border-velora-border">
                        PRINCIPLE // 02
                    </div>
                    <h3 class="font-display text-2xl font-bold text-velora-text">Built for Local Conversion</h3>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        Traffic without contact is wasted effort. Every layout puts phone calls, WhatsApp inquiries, and consult requests within immediate thumb reach.
                    </p>
                    <ul class="pt-4 border-t border-velora-border space-y-2 text-xs text-velora-muted font-sans">
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Sticky mobile contact actions</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Structured Local Business Schema.org</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Frictionless appointment pathways</li>
                    </ul>
                </div>

                <!-- Pillar 03: Complete Asset Ownership -->
                <div class="bg-velora-bg border border-velora-border p-8 space-y-4 modern-reveal">
                    <div class="text-xs font-mono text-velora-accent font-bold pb-3 border-b border-velora-border">
                        PRINCIPLE // 03
                    </div>
                    <h3 class="font-display text-2xl font-bold text-velora-text">Complete Asset Ownership</h3>
                    <p class="text-xs text-velora-muted leading-relaxed font-sans">
                        You own 100% of your website code, design files, and domain records upon project handoff. We never hold your business digital assets hostage.
                    </p>
                    <ul class="pt-4 border-t border-velora-border space-y-2 text-xs text-velora-muted font-sans">
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Full repository and code handoff</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Zero proprietary platform lock-in</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent">&bull;</span> Independent cloud deployment rights</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 7. PROCESS (CANONICAL 5-STAGE PROGRESSION)                         -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-bg border-b border-velora-border" id="modern-process">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-velora-border gap-6 modern-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Delivery Methodology</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">How We Build Your Website</h2>
                </div>
                <div class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    A disciplined 5-stage engineering timeline from initial discovery map to final production launch.
                </div>
            </div>

            <!-- Dynamic Canonical Mapping from SERVICES[0].process -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                ${SERVICES[0].process.map((p) => `
                <div class="bg-velora-surface border border-velora-border p-6 flex flex-col justify-between space-y-4 modern-reveal">
                    <div class="space-y-3">
                        <span class="text-xs font-mono font-bold text-velora-accent">STAGE // ${escapeHTML(p.step)}</span>
                        <h3 class="font-display text-lg font-bold text-velora-text">${escapeHTML(p.title)}</h3>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">${escapeHTML(p.desc)}</p>
                    </div>
                    <div class="pt-4 border-t border-velora-border text-[10px] font-mono text-velora-muted">
                        Verified Stage Deliverable
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 8. TRANSPARENT PRICING & SCOPE ESTIMATOR                          -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-surface border-b border-velora-border" id="modern-pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-velora-border gap-6 modern-reveal">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent block mb-2">Commercial Investment</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Clear, Transparent Project Pricing</h2>
                </div>
                <p class="text-xs text-velora-muted max-w-sm font-sans leading-relaxed">
                    Predictable project rates grounded in repository data. No hidden recurring platform fees or artificial markups.
                </p>
            </div>

            <!-- Canonical Pricing Tiers -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <!-- Tier 1: Essential -->
                <div class="bg-velora-bg border border-velora-border p-8 flex flex-col justify-between modern-reveal modern-card-hover">
                    <div class="space-y-6">
                        <div class="pb-4 border-b border-velora-border">
                            <span class="text-xs font-mono uppercase tracking-wider text-velora-muted block mb-1">TIER 01 // ESSENTIAL</span>
                            <h3 class="font-display text-2xl font-bold text-velora-text">Essential</h3>
                            <div class="font-display text-3xl font-bold text-velora-text mt-3" style="font-variant-numeric: tabular-nums;">
                                ₹${CONFIG.pricing.essential.toLocaleString('en-IN')}
                            </div>
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            Designed for single-location practices requiring a fast, trustworthy digital presence.
                        </p>
                        <ul class="space-y-2.5 text-xs text-velora-muted font-sans">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Up to 5 Custom Mobile-First Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Direct Phone &amp; WhatsApp Integration</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Mobile-First Lightweight SSR</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Secure SSL &amp; Cloud Deployment</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="mt-8 w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border block transition-colors">
                        Select Essential Scope &rarr;
                    </a>
                </div>

                <!-- Tier 2: Professional (Featured Standard) -->
                <div class="bg-velora-bg border-2 border-velora-accent p-8 flex flex-col justify-between relative shadow-sm modern-reveal modern-card-hover">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-velora-accent text-velora-buttonText text-[10px] font-mono uppercase tracking-widest font-bold">
                        Commercial Standard
                    </div>
                    <div class="space-y-6">
                        <div class="pb-4 border-b border-velora-border">
                            <span class="text-xs font-mono uppercase tracking-wider text-velora-accent block mb-1">TIER 02 // PROFESSIONAL</span>
                            <h3 class="font-display text-2xl font-bold text-velora-text">Professional</h3>
                            <div class="font-display text-3xl font-bold text-velora-text mt-3" style="font-variant-numeric: tabular-nums;">
                                ₹${CONFIG.pricing.professional.toLocaleString('en-IN')}
                            </div>
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            For competitive regional practices seeking dominant local search discovery and patient trust.
                        </p>
                        <ul class="space-y-2.5 text-xs text-velora-muted font-sans">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Up to 10 Bespoke Designed Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Local Search Schema.org Foundation</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Google Business Profile Synchronization</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> 3 Months Active Maintenance Included</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="mt-8 w-full py-3.5 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover block transition-colors btn-luxury">
                        Select Professional Scope &rarr;
                    </a>
                </div>

                <!-- Tier 3: Custom -->
                <div class="bg-velora-bg border border-velora-border p-8 flex flex-col justify-between modern-reveal modern-card-hover">
                    <div class="space-y-6">
                        <div class="pb-4 border-b border-velora-border">
                            <span class="text-xs font-mono uppercase tracking-wider text-velora-muted block mb-1">TIER 03 // CUSTOM</span>
                            <h3 class="font-display text-2xl font-bold text-velora-text">Custom</h3>
                            <div class="font-display text-3xl font-bold text-velora-text mt-3" style="font-variant-numeric: tabular-nums;">
                                ₹${CONFIG.pricing.customBase.toLocaleString('en-IN')}+
                            </div>
                        </div>
                        <p class="text-xs text-velora-muted leading-relaxed font-sans">
                            For multi-location groups, high-end portfolios, and bespoke commercial workflows.
                        </p>
                        <ul class="space-y-2.5 text-xs text-velora-muted font-sans">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Unlimited Custom Architecture</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Multi-Location Local SEO Matrices</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Custom API &amp; CRM Integrations</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">&check;</span> Priority Engineering &amp; SLA Support</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="mt-8 w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border block transition-colors">
                        Consult Custom Scope &rarr;
                    </a>
                </div>
            </div>

            <!-- Scope Estimator Tool -->
            <div class="bg-velora-bg border border-velora-border p-8 sm:p-10 modern-reveal">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-velora-border gap-4">
                    <div>
                        <span class="text-xs font-mono uppercase tracking-wider text-velora-accent font-bold block mb-1">Interactive Scope Calculator</span>
                        <h3 class="font-display text-xl font-bold text-velora-text">Estimate Your Custom Project Scope</h3>
                    </div>
                    <div class="text-xs font-mono text-velora-muted">
                        Base Setup: ₹${CONFIG.pricing.baseCalculator.toLocaleString('en-IN')} + ₹${CONFIG.pricing.perPage.toLocaleString('en-IN')}/page
                    </div>
                </div>

                <div class="space-y-6 font-sans">
                    <div>
                        <div class="flex justify-between items-center mb-2 text-xs">
                            <label for="modern-calc-pages" class="font-mono uppercase text-velora-text font-semibold">Total Custom Pages:</label>
                            <span id="modern-calc-pages-val" class="font-mono font-bold text-velora-accent" style="font-variant-numeric: tabular-nums;">5 Pages</span>
                        </div>
                        <input type="range" id="modern-calc-pages" min="1" max="15" value="5" class="w-full accent-[#0284C7] cursor-pointer">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-velora-border">
                        <label class="flex items-center gap-3 p-3 bg-velora-surface border border-velora-border cursor-pointer text-xs">
                            <input type="checkbox" id="modern-calc-seo" checked class="accent-[#0284C7]">
                            <div>
                                <span class="block font-semibold text-velora-text">Local SEO Foundation</span>
                                <span class="text-velora-muted text-[10px]">+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')} one-time</span>
                            </div>
                        </label>

                        <label class="flex items-center gap-3 p-3 bg-velora-surface border border-velora-border cursor-pointer text-xs">
                            <input type="checkbox" id="modern-calc-maint" class="accent-[#0284C7]">
                            <div>
                                <span class="block font-semibold text-velora-text">Ongoing Care &amp; Maintenance</span>
                                <span class="text-velora-muted text-[10px]">+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')}/year</span>
                            </div>
                        </label>
                    </div>

                    <div class="pt-6 border-t border-velora-border flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted block">Estimated Investment</span>
                            <div id="modern-calc-total" class="font-display text-3xl sm:text-4xl font-bold text-velora-text text-balance" style="font-variant-numeric: tabular-nums;">
                                ₹${(CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon).toLocaleString('en-IN')}
                            </div>
                        </div>
                        <a id="modern-calc-quote-btn" href="/contact?pages=5&amp;seo=true&amp;maint=false&amp;est=35000" class="w-full sm:w-auto px-8 py-3.5 text-center text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors btn-luxury">
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

    <!-- ================================================================= -->
    <!-- 9. DIAGNOSTIC REVIEW (FREE TECHNICAL WEBSITE AUDIT FORM)           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-bg border-b border-velora-border" id="modern-audit">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto bg-velora-surface border border-velora-border p-8 sm:p-12 modern-reveal">
                <div class="text-center mb-8">
                    <span class="text-xs font-mono uppercase tracking-widest text-velora-accent font-bold block mb-2">Technical Website &amp; Local SEO Review</span>
                    <h2 class="font-display text-2xl sm:text-4xl font-bold text-velora-text tracking-tight text-balance">Want an Honest Review of Your Current Website?</h2>
                    <p class="mt-3 text-xs sm:text-sm text-velora-muted leading-relaxed font-sans max-w-xl mx-auto">
                        Submit your website URL. We inspect mobile viewport rendering, technical Local Business Schema, and direct conversion pathways.
                    </p>
                </div>

                <form id="modern-audit-form" class="space-y-4">
                    <div class="relative">
                        <label for="modern-audit-url" class="sr-only">Website URL</label>
                        <input type="url" id="modern-audit-url" name="url" required placeholder="https://yourbusiness.com" autocomplete="url" class="w-full px-4 py-3.5 bg-velora-bg border border-velora-border text-velora-text placeholder-velora-muted text-xs font-sans focus:outline-none focus:ring-2 focus:ring-velora-accent">
                    </div>

                    <!-- Honeypot Field for Spam Defense -->
                    <div class="hidden" aria-hidden="true">
                        <input type="text" id="modern-audit-gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
                    </div>

                    <button type="submit" id="modern-audit-submit-btn" class="w-full py-3.5 text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors btn-luxury">
                        Request Technical Review &rarr;
                    </button>

                    <div id="modern-audit-success" class="hidden p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs text-center font-sans">
                        Audit request received. We examine your architecture and reply with findings.
                    </div>
                    <div id="modern-audit-error" class="hidden p-4 bg-red-500/10 border border-red-500/30 text-red-600 text-xs text-center font-sans">
                        Submission failed. Please verify the URL format and try again.
                    </div>
                </form>

                <div class="pt-6 mt-6 border-t border-velora-border text-center text-[11px] text-velora-muted font-sans">
                    Complimentary engineering review &middot; Direct communication &middot; Zero sales pressure
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 10. FAQ SECTION (ACCESSIBLE CONTEMPORARY ACCORDION)               -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-surface border-b border-velora-border" id="modern-faq">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 modern-reveal">
                <span class="text-xs font-mono uppercase tracking-widest text-velora-accent font-bold block mb-2">Frequently Addressed Questions</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight text-balance">Common Commercial Enquiries</h2>
            </div>

            <div class="space-y-4">
                ${FAQS.map((faq, idx) => `
                <div class="bg-velora-bg border border-velora-border overflow-hidden modern-reveal">
                    <button type="button" class="modern-faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-velora-accent" aria-expanded="false" aria-controls="modern-faq-panel-${idx}">
                        <span class="font-display text-base font-bold text-velora-text">${escapeHTML(faq.q)}</span>
                        <span class="modern-faq-icon text-xs font-mono text-velora-accent font-bold transition-transform duration-200">+</span>
                    </button>
                    <div id="modern-faq-panel-${idx}" class="modern-faq-panel hidden px-6 pb-6 text-xs text-velora-muted leading-relaxed font-sans border-t border-velora-border pt-4">
                        ${escapeHTML(faq.a)}
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 11. FINAL HIGH-CONVERTING CTA BLOCK                               -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 bg-velora-bg text-velora-text" id="modern-final-cta">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 modern-reveal">
            <span class="text-xs font-mono uppercase tracking-widest text-velora-accent font-bold block">
                Begin Engagement
            </span>
            <h2 class="font-display text-4xl sm:text-6xl font-bold tracking-tight text-velora-text leading-tight text-balance">
                Ready for a Website That Actually Brings in Customers?
            </h2>
            <p class="text-base text-velora-muted leading-relaxed max-w-xl mx-auto font-sans text-pretty">
                Contact our studio to discuss your project scope, schedule an audit, or receive a formal written proposal.
            </p>

            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" class="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-wider font-bold bg-velora-button text-velora-buttonText hover:bg-velora-buttonHover transition-colors btn-luxury">
                    Start Your Project Consultation &rarr;
                </a>
                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-wider font-semibold bg-velora-surface hover:bg-velora-card text-velora-text border border-velora-border transition-colors">
                    Direct WhatsApp Enquiry &rarr;
                </a>
            </div>

            <div class="pt-8 text-[11px] font-mono text-velora-muted">
                Velora Digital &middot; Boutique Web Design &amp; Technical Local SEO
            </div>
        </div>
    </section>
    `;

    const script = `
        (function() {
            window.initModernInteractions = function() {
                // 0. Modern Scroll-Triggered Reveal Observer
                // All reveal animations are handled by the centralized
                // window.__veloraInitReveals() system in components.js.
                // Do NOT add duplicate IntersectionObservers or reveal classes here.

                // 1. Before / After Comparison Slider
                const container = document.getElementById('modern-before-after-container');
                const afterLayer = document.getElementById('modern-after-layer');
                const handle = document.getElementById('modern-slider-handle');

                if (container && afterLayer && handle) {
                    let isDragging = false;

                    function setSliderPosition(percentage) {
                        const clamped = Math.max(5, Math.min(95, percentage));
                        afterLayer.style.clipPath = 'polygon(0 0, ' + clamped + '% 0, ' + clamped + '% 100%, 0 100%)';
                        handle.style.left = clamped + '%';
                    }

                    function handleMove(e) {
                        if (!isDragging) return;
                        const rect = container.getBoundingClientRect();
                        const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
                        const percent = ((clientX - rect.left) / rect.width) * 100;
                        setSliderPosition(percent);
                    }

                    function stopDrag() {
                        isDragging = false;
                        window.removeEventListener('mousemove', handleMove);
                        window.removeEventListener('mouseup', stopDrag);
                        window.removeEventListener('touchmove', handleMove);
                        window.removeEventListener('touchend', stopDrag);
                    }

                    function startDrag(e) {
                        isDragging = true;
                        handleMove(e);
                        window.addEventListener('mousemove', handleMove);
                        window.addEventListener('mouseup', stopDrag);
                        window.addEventListener('touchmove', handleMove);
                        window.addEventListener('touchend', stopDrag);
                    }

                    container.addEventListener('mousedown', startDrag);
                    container.addEventListener('touchstart', startDrag, { passive: true });

                    window.__veloraModernSliderCleanup = function() {
                        stopDrag();
                    };

                    // Keyboard Accessibility
                    handle.setAttribute('tabindex', '0');
                    handle.setAttribute('role', 'slider');
                    handle.setAttribute('aria-label', 'Visual Comparison Wipe');
                    handle.setAttribute('aria-valuenow', '85');
                    handle.addEventListener('keydown', function(e) {
                        let current = parseFloat(handle.style.left) || 85;
                        if (e.key === 'ArrowLeft') {
                            setSliderPosition(current - 5);
                            e.preventDefault();
                        } else if (e.key === 'ArrowRight') {
                            setSliderPosition(current + 5);
                            e.preventDefault();
                        }
                    });

                    // Subtle Discovery Pulse (85% -> 80% -> 85%)
                    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                        setTimeout(() => {
                            setSliderPosition(80);
                            setTimeout(() => {
                                setSliderPosition(85);
                            }, 400);
                        }, 900);
                    }
                }

                // 2. Pricing Scope Calculator
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
                        quoteBtn.href = '/contact?pages=' + pages + '&seo=' + (seoInput ? seoInput.checked : false) + '&maint=' + (maintInput ? maintInput.checked : false) + '&est=' + total;
                    }

                    pagesInput.addEventListener('input', recalc);
                    if (seoInput) seoInput.addEventListener('change', recalc);
                    if (maintInput) maintInput.addEventListener('change', recalc);
                    recalc();
                }

                // 3. Technical Audit Form
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
                            if (submitBtn.disabled) return;
                            submitBtn.disabled = true;
                            submitBtn.textContent = 'Analyzing...';
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
                                errorDiv.textContent = err.message || 'Submission failed. Please check your connection and try again.';
                                errorDiv.classList.remove('hidden');
                            }
                        } finally {
                            if (submitBtn) {
                                submitBtn.disabled = false;
                                submitBtn.textContent = 'Request Technical Review \u2192';
                            }
                        }
                    });
                }

                // 4. FAQ Accordion Interaction
                const faqTriggers = document.querySelectorAll('.modern-faq-trigger');
                faqTriggers.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const panelId = this.getAttribute('aria-controls');
                        const panel = document.getElementById(panelId);
                        const isExpanded = this.getAttribute('aria-expanded') === 'true';
                        const icon = this.querySelector('.modern-faq-icon');

                        // Toggle current panel
                        this.setAttribute('aria-expanded', !isExpanded);
                        if (panel) {
                            panel.classList.toggle('hidden');
                        }
                        if (icon) {
                            icon.textContent = isExpanded ? '+' : '\u2212';
                        }
                    });
                });
            };

            window.cleanupModernInteractions = function() {
                if (window.__veloraModernObserver) {
                    window.__veloraModernObserver.disconnect();
                    window.__veloraModernObserver = null;
                }
                if (typeof window.__veloraModernSliderCleanup === 'function') {
                    window.__veloraModernSliderCleanup();
                    window.__veloraModernSliderCleanup = null;
                }
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', window.initModernInteractions);
            } else {
                window.initModernInteractions();
            }
        })();
    `;

    return { meta, headerContent: Header(currentPath), mainContent: content, footerContent: Footer(), script };
}

module.exports = {
    renderModernExperience
};
