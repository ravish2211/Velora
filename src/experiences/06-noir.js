// ============================================================================ //
// VELORA DIGITAL — 06 NOIR EXPERIENCE PRESENTATION RENDERER                    //
// Art Direction: Cinematic Digital Luxury · The Widescreen Repertoire          //
// Motion: Pure Native CSS + IntersectionObserver (Zero Runtime Library Bloat)  //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require('../components');

function renderNoirExperience() {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics' || p.id === 'aurora-clinic') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates' || p.id === 'aarav-properties') || PORTFOLIO[1];
    const spiceRoom = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Noir Cinematic Digital Luxury & High-Performance Web Studio',
        description: 'Velora Digital shapes cinematic, high-performance web presences and local SEO architecture for luxury estates, premier clinics, and fine dining establishments.',
        schema: generateSchema('Organization'),
        breadcrumbs: [{ title: 'Home', link: '/?exp=noir' }]
    };

    const content = `
    <!-- ================================================================= -->
    <!-- 1. HERO SECTION: CINEMATIC OPENING SEQUENCE                        -->
    <!-- ================================================================= -->
    <section class="relative pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-36 overflow-hidden bg-[#08080A] text-[#F5F5F7] border-b border-white/[0.08]" id="noir-hero">
        <!-- Letterbox Cinematic Framing Guides -->
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" aria-hidden="true"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <!-- Left Column: Monumental Cinematic Typography -->
                <div class="lg:col-span-7 space-y-8 noir-reveal" style="transition-delay: 150ms;">
                    <div class="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#101014] border border-white/[0.12] text-[11px] font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                        <span class="w-2 h-2 rounded-full bg-[#C8B28E] animate-pulse"></span>
                        <span>SEQUENCE 01 // CINEMATIC DIGITAL LUXURY</span>
                    </div>

                    <h1 class="noir-headline text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F5F7] leading-[1.05] text-balance">
                        Cinematic Presence. <span class="italic text-[#C8B28E]">Enduring</span> Digital Authority.
                    </h1>

                    <p class="text-base sm:text-lg text-[#8E8E98] leading-relaxed max-w-2xl text-pretty font-sans">
                        We shape high-contrast, filmic digital presences and high-performance search architectures for premier property agencies, elite clinics, culinary destinations, and personal practices. Architectural precision, cinematic restraint, and zero rental dependencies.
                    </p>

                    <!-- Primary Action Group -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <a href="/contact?tier=professional" id="noir-hero-primary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#F5F5F7] text-[#08080A] hover:bg-[#E4E4E8] transition-all duration-300 shadow-lg">
                            Commission a Digital Presence &rarr;
                        </a>
                        <a href="#noir-works" id="noir-hero-secondary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#101014] hover:bg-[#15151B] text-[#F5F5F7] border border-white/[0.15] transition-all duration-300">
                            Review Selected Works &darr;
                        </a>
                    </div>

                    <!-- Factual Studio Standards -->
                    <div class="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-[#8E8E98] font-sans">
                        <div class="flex items-center gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                            <span>Pure Semantic SSR</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                            <span>Zero Runtime Bloat</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                            <span>Complete Client Asset Ownership</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Widescreen Viewfinder Plate -->
                <div class="lg:col-span-5 noir-letterbox" style="transition-delay: 600ms; transition-duration: 2s;">
                    <div class="relative bg-[#101014] border border-white/[0.12] rounded-2xl p-7 sm:p-9 space-y-6 shadow-2xl">
                        <!-- Matte Box Header -->
                        <div class="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                            <div class="space-y-1.5">
                                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E98] block">ASPECT RATIO 2.39:1</span>
                                <div class="text-base noir-headline font-medium text-[#F5F5F7] leading-snug">The Widescreen Monitor</div>
                            </div>
                            <div class="flex items-center gap-2 px-2.5 py-1 text-[10px] font-mono tracking-wider rounded-full bg-[#15151B] border border-white/[0.12] text-[#C8B28E] shrink-0">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E] animate-ping"></span>
                                <span aria-hidden="true">REC &middot; 24 FPS</span>
                            </div>
                        </div>

                        <!-- Optical Metrics Grid -->
                        <div class="space-y-4">
                            <div class="p-4 rounded-xl bg-[#15151B] border border-white/[0.06] flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-[#F5F5F7]">Obsidian &amp; Champagne Palette</div>
                                    <div class="text-[11px] text-[#8E8E98]">Deep darkroom contrast with brushed platinum tones</div>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-[#08080A] border border-white/20"></span>
                                    <span class="w-4 h-4 rounded-full bg-[#15151B] border border-white/20"></span>
                                    <span class="w-4 h-4 rounded-full bg-[#C8B28E]"></span>
                                </div>
                            </div>

                            <div class="p-4 rounded-xl bg-[#15151B] border border-white/[0.06] flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-[#F5F5F7]">Editorial Typography Hierarchy</div>
                                    <div class="text-[11px] text-[#8E8E98]">Classical Display Serif &middot; Plus Jakarta Sans</div>
                                </div>
                                <span class="noir-headline italic text-lg text-[#C8B28E]">Aa</span>
                            </div>

                            <div class="p-4 rounded-xl bg-[#15151B] border border-white/[0.06] flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-[#F5F5F7]">Execution Technology</div>
                                    <div class="text-[11px] text-[#8E8E98]">Pure CSS &middot; Native Node SSR &middot; Zero Frameworks</div>
                                </div>
                                <span class="text-[10px] font-mono text-[#C8B28E] font-bold">200 OK</span>
                            </div>
                        </div>

                        <!-- Studio Intake Rate -->
                        <div class="pt-5 pb-1 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#8E8E98]">
                            <span>Current commission fee from:</span>
                            <span class="font-mono font-bold text-[#F5F5F7]">₹14,999</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 2. SERVICES SECTION: CINEMATIC REPERTOIRE INDEX                   -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#101014] border-b border-white/[0.08]" id="noir-services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>THE CINEMATIC REPERTOIRE // THREE CORE DISCIPLINES</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Disciplines Engineered for <span class="italic text-[#C8B28E]">High-Trust</span> Digital Authority
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Every discipline is executed with editorial rigor, strict technical performance, and conversion architecture focused on high-intent local inquiries.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${SERVICES.map((service, idx) => {
                    const frameNum = String(idx + 1).padStart(2, '0');
                    return `
                    <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all duration-300 flex flex-col justify-between space-y-8 noir-reveal group">
                        <div class="space-y-5">
                            <div class="flex items-center justify-between">
                                <span class="text-[11px] font-mono tracking-widest text-[#C8B28E]">[ FRAME ${frameNum} ]</span>
                                <span class="text-2xl">${escapeHTML(service.icon)}</span>
                            </div>
                            <h3 class="noir-headline text-xl sm:text-2xl font-normal text-[#F5F5F7] group-hover:text-[#DECDB3] transition-colors">
                                ${escapeHTML(service.title)}
                            </h3>
                            <p class="text-sm text-[#8E8E98] leading-relaxed font-sans">
                                ${escapeHTML(service.short)}
                            </p>
                            <ul class="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                                ${service.benefits.slice(0, 3).map(b => `
                                    <li class="flex items-start gap-2">
                                        <span class="text-[#C8B28E] mt-0.5">&bull;</span>
                                        <span>${escapeHTML(b)}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                            <a href="/services/${service.slug}" class="text-xs font-mono uppercase tracking-wider text-[#C8B28E] hover:text-[#DECDB3] transition-colors flex items-center gap-1.5">
                                <span>Detailed Specs</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                            <span class="text-[11px] font-mono text-[#8E8E98]">${escapeHTML(service.timeline)}</span>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 3. SELECTED WORK: FILMIC FEATURE SPREADS                           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#08080A] border-b border-white/[0.08]" id="noir-works">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 noir-reveal">
                <div class="max-w-2xl space-y-4">
                    <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                        <span>SELECTED FEATURE COMPOSITIONS // EDITORIAL CASE STUDIES</span>
                    </div>
                    <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                        Authentic Case Studies. <span class="italic text-[#C8B28E]">Grounded</span> Execution.
                    </h2>
                </div>
                <div class="text-right">
                    <a href="/portfolio" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101014] border border-white/[0.12] text-xs font-mono uppercase tracking-wider text-[#F5F5F7] hover:bg-[#15151B] transition-colors">
                        <span>View Complete Portfolio</span>
                        <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </a>
                </div>
            </div>

            <div class="space-y-12">
                <!-- Case 01: Aurora Clinic -->
                <div class="p-8 sm:p-12 rounded-2xl bg-[#101014] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center noir-reveal">
                    <div class="lg:col-span-7 space-y-6">
                        <div class="flex flex-wrap items-center gap-3">
                            <span class="text-xs font-mono tracking-widest text-[#C8B28E]">[ SCENE 01 // HEALTHCARE ]</span>
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#15151B] border border-white/[0.12] text-[#8E8E98]">
                                ${escapeHTML(aurora.type)}
                            </span>
                        </div>
                        <h3 class="noir-headline text-2xl sm:text-4xl font-normal text-[#F5F5F7] text-balance">
                            ${escapeHTML(aurora.title)}
                        </h3>
                        <p class="text-sm sm:text-base text-[#8E8E98] leading-relaxed font-sans">
                            ${escapeHTML(aurora.summary)}
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                            <div>
                                <span class="font-mono text-[10px] text-[#C8B28E] block uppercase tracking-wider">Target Sector</span>
                                <span class="text-[#F5F5F7]">${escapeHTML(aurora.targetIndustry)}</span>
                            </div>
                            <div>
                                <span class="font-mono text-[10px] text-[#C8B28E] block uppercase tracking-wider">Design Direction</span>
                                <span class="text-[#F5F5F7]">${escapeHTML(aurora.designDirection)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-5 p-6 rounded-xl bg-[#15151B] border border-white/[0.06] space-y-4">
                        <div class="text-xs font-mono uppercase tracking-wider text-[#C8B28E] pb-2 border-b border-white/[0.06]">
                            Key Architectural Deliverables
                        </div>
                        <ul class="space-y-2 text-xs text-[#8E8E98]">
                            ${aurora.deliverables.map(d => `
                                <li class="flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                                    <span>${escapeHTML(d)}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                            <span class="text-[11px] text-[#8E8E98] font-mono">Concept Disclosure</span>
                            <span class="font-mono text-[#C8B28E] font-medium">${escapeHTML(aurora.type)}</span>
                        </div>
                    </div>
                </div>

                <!-- Case 02: Aarav Properties -->
                <div class="p-8 sm:p-12 rounded-2xl bg-[#101014] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center noir-reveal">
                    <div class="lg:col-span-7 space-y-6">
                        <div class="flex flex-wrap items-center gap-3">
                            <span class="text-xs font-mono tracking-widest text-[#C8B28E]">[ SCENE 02 // REAL ESTATE ]</span>
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#15151B] border border-white/[0.12] text-[#8E8E98]">
                                ${escapeHTML(aarav.type)}
                            </span>
                        </div>
                        <h3 class="noir-headline text-2xl sm:text-4xl font-normal text-[#F5F5F7] text-balance">
                            ${escapeHTML(aarav.title)}
                        </h3>
                        <p class="text-sm sm:text-base text-[#8E8E98] leading-relaxed font-sans">
                            ${escapeHTML(aarav.summary)}
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                            <div>
                                <span class="font-mono text-[10px] text-[#C8B28E] block uppercase tracking-wider">Target Sector</span>
                                <span class="text-[#F5F5F7]">${escapeHTML(aarav.targetIndustry)}</span>
                            </div>
                            <div>
                                <span class="font-mono text-[10px] text-[#C8B28E] block uppercase tracking-wider">Design Direction</span>
                                <span class="text-[#F5F5F7]">${escapeHTML(aarav.designDirection)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-5 p-6 rounded-xl bg-[#15151B] border border-white/[0.06] space-y-4">
                        <div class="text-xs font-mono uppercase tracking-wider text-[#C8B28E] pb-2 border-b border-white/[0.06]">
                            Key Architectural Deliverables
                        </div>
                        <ul class="space-y-2 text-xs text-[#8E8E98]">
                            ${aarav.deliverables.map(d => `
                                <li class="flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                                    <span>${escapeHTML(d)}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                            <span class="text-[11px] text-[#8E8E98] font-mono">Concept Disclosure</span>
                            <span class="font-mono text-[#C8B28E] font-medium">${escapeHTML(aarav.type)}</span>
                        </div>
                    </div>
                </div>

                <!-- Case 03: The Spice Room -->
                <div class="p-8 sm:p-12 rounded-2xl bg-[#101014] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center noir-reveal">
                    <div class="lg:col-span-7 space-y-6">
                        <div class="flex flex-wrap items-center gap-3">
                            <span class="text-xs font-mono tracking-widest text-[#C8B28E]">[ SCENE 03 // HOSPITALITY ]</span>
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#15151B] border border-white/[0.12] text-[#8E8E98]">
                                ${escapeHTML(spiceRoom.type)}
                            </span>
                        </div>
                        <h3 class="noir-headline text-2xl sm:text-4xl font-normal text-[#F5F5F7] text-balance">
                            ${escapeHTML(spiceRoom.title)}
                        </h3>
                        <p class="text-sm sm:text-base text-[#8E8E98] leading-relaxed font-sans">
                            ${escapeHTML(spiceRoom.summary)}
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                            <div>
                                <span class="font-mono text-[10px] text-[#C8B28E] block uppercase tracking-wider">Target Sector</span>
                                <span class="text-[#F5F5F7]">${escapeHTML(spiceRoom.targetIndustry)}</span>
                            </div>
                            <div>
                                <span class="font-mono text-[10px] text-[#C8B28E] block uppercase tracking-wider">Design Direction</span>
                                <span class="text-[#F5F5F7]">${escapeHTML(spiceRoom.designDirection)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-5 p-6 rounded-xl bg-[#15151B] border border-white/[0.06] space-y-4">
                        <div class="text-xs font-mono uppercase tracking-wider text-[#C8B28E] pb-2 border-b border-white/[0.06]">
                            Key Architectural Deliverables
                        </div>
                        <ul class="space-y-2 text-xs text-[#8E8E98]">
                            ${spiceRoom.deliverables.map(d => `
                                <li class="flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                                    <span>${escapeHTML(d)}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                            <span class="text-[11px] text-[#8E8E98] font-mono">Concept Disclosure</span>
                            <span class="font-mono text-[#C8B28E] font-medium">${escapeHTML(spiceRoom.type)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 4. SECTORS: CURATED CAPABILITY INDEX                              -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#101014] border-b border-white/[0.08]" id="noir-sectors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>CURATED CAPABILITY INDEX // FOUR HIGH-TRUST SECTORS</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Tailored for High-Trust <span class="italic text-[#C8B28E]">Local Enterprises</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Every commercial industry possesses distinctive conversion behaviors. We engineer specific pathways matching client expectations.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${INDUSTRIES.map((ind, idx) => {
                    const sectorNum = String(idx + 1).padStart(2, '0');
                    return `
                    <div class="p-6 sm:p-8 rounded-2xl bg-[#15151B] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all duration-300 flex flex-col justify-between space-y-6 noir-reveal">
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-[10px] font-mono tracking-widest text-[#C8B28E]">[ SECTOR ${sectorNum} ]</span>
                                <span class="text-xl">${escapeHTML(ind.icon)}</span>
                            </div>
                            <h3 class="noir-headline text-lg sm:text-xl font-normal text-[#F5F5F7]">
                                ${escapeHTML(ind.name)}
                            </h3>
                            <p class="text-xs text-[#8E8E98] leading-relaxed font-sans">
                                ${escapeHTML(ind.desc)}
                            </p>
                        </div>
                        <div class="pt-4 border-t border-white/[0.06]">
                            <a href="/industries/${ind.slug}" class="text-xs font-mono uppercase tracking-wider text-[#C8B28E] hover:text-[#DECDB3] transition-colors flex items-center justify-between">
                                <span>Industry Blueprint</span>
                                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 5. THE DIFFERENCE: DARKROOM EXPOSURE STUDY (WIPE SLIDER)           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#08080A] border-b border-white/[0.08]" id="noir-difference">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-12 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>DARKROOM EXPOSURE STUDY // THE COMPARATIVE STUDY</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    The Difference is <span class="italic text-[#C8B28E]">Obvious</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Drag the physical exposure slider to examine the technical divide between generic commercial web assembly and the Velora Noir standard.
                </p>
            </div>

            <!-- Comparison Slider Container -->
            <div class="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/[0.15] select-none touch-none shadow-2xl " id="noir-before-after-container" class="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/[0.15] select-none touch-none shadow-2xl noir-letterbox" style="transition-delay: 150ms;">
                <!-- Under Layer: The Ordinary Digital Presence (Left / Before) -->
                <div class="w-full bg-[#101014] p-8 sm:p-14 space-y-8" id="noir-layer-before">
                    <div class="flex items-center justify-between border-b border-white/[0.08] pb-4">
                        <span class="text-xs font-mono uppercase tracking-widest text-[#8E8E98]">[ EXPOSURE A: ORDINARY WEB ASSEMBLY ]</span>
                        <span class="text-xs font-mono text-red-400">Sluggish &middot; Bloated</span>
                    </div>
                    <div class="space-y-4 max-w-lg">
                        <h3 class="text-2xl font-bold text-[#8E8E98]">Fragile Templates &amp; Heavy Dependencies</h3>
                        <p class="text-sm text-[#8E8E98]/80 leading-relaxed font-sans">
                            Third-party themes stacked with dozens of redundant plugins. Sluggish mobile load times, broken layouts on phone screens, and recurring monthly rental fees for proprietary site builders.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs text-[#8E8E98]">
                        <div class="p-3 rounded-lg bg-[#15151B] border border-white/[0.06]">
                            <span class="block font-mono text-[10px] text-red-400 uppercase">Load Performance</span>
                            <span>Heavy JavaScript bundles</span>
                        </div>
                        <div class="p-3 rounded-lg bg-[#15151B] border border-white/[0.06]">
                            <span class="block font-mono text-[10px] text-red-400 uppercase">Code Ownership</span>
                            <span>Locked to site builder</span>
                        </div>
                        <div class="p-3 rounded-lg bg-[#15151B] border border-white/[0.06]">
                            <span class="block font-mono text-[10px] text-red-400 uppercase">Conversion Focus</span>
                            <span>Hidden contact methods</span>
                        </div>
                    </div>
                </div>

                <!-- Over Layer: The Velora Noir Standard (Right / After) -->
                <div class="absolute inset-0 w-full h-full bg-[#15151B] p-8 sm:p-14 space-y-8 pointer-events-none" id="noir-layer-after" style="clip-path: polygon(85% 0, 100% 0, 100% 100%, 85% 100%);">
                    <div class="flex items-center justify-between border-b border-white/[0.12] pb-4">
                        <span class="text-xs font-mono uppercase tracking-widest text-[#C8B28E]">[ EXPOSURE B: THE VELORA NOIR STANDARD ]</span>
                        <span class="text-xs font-mono text-[#C8B28E]">Pure SSR &middot; Instant</span>
                    </div>
                    <div class="space-y-4 max-w-lg">
                        <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Cinematic Precision &amp; Complete Ownership</h3>
                        <p class="text-sm text-[#8E8E98] leading-relaxed font-sans">
                            Handcrafted semantic Node SSR markup with zero client-side framework overhead. High-contrast editorial typography, prominent one-thumb call/WhatsApp actions, and 100% permanent asset transfer.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.12] text-xs text-[#8E8E98]">
                        <div class="p-3 rounded-lg bg-[#101014] border border-white/[0.10]">
                            <span class="block font-mono text-[10px] text-[#C8B28E] uppercase">Load Performance</span>
                            <span class="text-[#F5F5F7]">Instant HTML render</span>
                        </div>
                        <div class="p-3 rounded-lg bg-[#101014] border border-white/[0.10]">
                            <span class="block font-mono text-[10px] text-[#C8B28E] uppercase">Code Ownership</span>
                            <span class="text-[#F5F5F7]">100% Client ownership</span>
                        </div>
                        <div class="p-3 rounded-lg bg-[#101014] border border-white/[0.10]">
                            <span class="block font-mono text-[10px] text-[#C8B28E] uppercase">Conversion Focus</span>
                            <span class="text-[#F5F5F7]">Direct Phone &amp; WhatsApp</span>
                        </div>
                    </div>
                </div>

                <!-- Physical Shutter Divider Handle -->
                <div class="absolute top-0 bottom-0 w-1 bg-[#C8B28E] cursor-ew-resize flex items-center justify-center pointer-events-auto shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C8B28E]" id="noir-slider-handle" style="left: 85%;" tabindex="0" role="slider" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="Exposure comparison slider">
                    <div class="w-8 h-8 rounded-full bg-[#C8B28E] text-[#08080A] flex items-center justify-center text-xs font-bold shadow-md">
                        &#x2194;
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 6. THE STANDARD: WIDESCREEN ARCHITECTURAL TRIPTYCH                 -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#101014] border-b border-white/[0.08]" id="noir-standard">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>WIDESCREEN ARCHITECTURAL TRIPTYCH // THREE COMMITMENTS</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Engineered Without <span class="italic text-[#C8B28E]">Compromise</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Three non-negotiable architectural principles that separate Velora from generic digital agencies.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Pillar 01 -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border border-white/[0.08] space-y-6 noir-reveal">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest">[ PILLAR 01 ]</div>
                    <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Lean by Design</h3>
                    <p class="text-sm text-[#8E8E98] leading-relaxed font-sans">
                        Zero runtime UI frameworks. No heavy React hydrations, no client-side state engines, and no sluggish third-party tracking baggage. Pure semantic HTML delivered in a single round-trip.
                    </p>
                    <div class="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#C8B28E]">
                        Instant First Contentful Paint
                    </div>
                </div>

                <!-- Pillar 02 -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border border-white/[0.08] space-y-6 noir-reveal">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest">[ PILLAR 02 ]</div>
                    <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Built for Local Conversion</h3>
                    <p class="text-sm text-[#8E8E98] leading-relaxed font-sans">
                        Every interface is structured to convert local searchers into actual phone calls, WhatsApp inquiries, or appointment reservations. Zero friction, clear pricing, and no confusing menus.
                    </p>
                    <div class="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#C8B28E]">
                        Frictionless Patient &amp; Client Inquiries
                    </div>
                </div>

                <!-- Pillar 03 -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border border-white/[0.08] space-y-6 noir-reveal">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest">[ PILLAR 03 ]</div>
                    <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Complete Asset Ownership</h3>
                    <p class="text-sm text-[#8E8E98] leading-relaxed font-sans">
                        You own 100% of your website, code, design assets, and domain records upon project completion. We never lock you into proprietary hosting or charge artificial maintenance ransom.
                    </p>
                    <div class="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#C8B28E]">
                        Permanent Independence &middot; Zero Lock-in
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 7. PROCESS: 5-STAGE PRODUCTION SEQUENCE                           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#08080A] border-b border-white/[0.08]" id="noir-process">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>PRODUCTION SEQUENCE // FIVE-STAGE PROTOCOL</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    The Five-Stage <span class="italic text-[#C8B28E]">Master Protocol</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Structured like high-end film production—from initial script discovery to the final master release.
                </p>
            </div>

            <div class="space-y-6">
                ${SERVICES[0].process.map((step, idx) => {
                    const titles = ['Pre-Production & Discovery', 'Visual & Typographic Staging', 'Semantic Code Fabrication', 'Calibration & Verification', 'Master Premiere & Handoff'];
                    return `
                    <div class="p-6 sm:p-8 rounded-2xl bg-[#101014] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 noir-reveal">
                        <div class="flex items-start sm:items-center gap-6">
                            <span class="text-xl sm:text-2xl font-mono font-bold text-[#C8B28E] w-12 shrink-0">[ ${step.step} ]</span>
                            <div class="space-y-1">
                                <h3 class="noir-headline text-lg sm:text-xl font-normal text-[#F5F5F7]">
                                    ${titles[idx] || escapeHTML(step.title)}
                                </h3>
                                <p class="text-xs sm:text-sm text-[#8E8E98] max-w-2xl font-sans">
                                    ${escapeHTML(step.desc)}
                                </p>
                            </div>
                        </div>
                        <div class="text-xs font-mono text-[#8E8E98] shrink-0 uppercase tracking-wider">
                            Phase 0${idx + 1}
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 8. PRICING: SCHEDULED INVESTMENT LEDGER & SCOPE ESTIMATOR          -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#101014] border-b border-white/[0.08]" id="noir-pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCHEDULED INVESTMENT LEDGER // TRANSPARENT STUDIO RATES</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Clear Investment. <span class="italic text-[#C8B28E]">Zero Surprises.</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Project pricing covers website design &amp; development. Hosting, domain registration, and ongoing maintenance are quoted separately.
                </p>
            </div>

            <!-- Three Tiers Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <!-- Tier 1: Essential -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border border-white/[0.08] flex flex-col justify-between space-y-8 noir-reveal">
                    <div class="space-y-4">
                        <div class="text-xs font-mono text-[#C8B28E] tracking-widest">[ TIER 01 ]</div>
                        <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Essential Foundation</h3>
                        <div class="pt-2">
                            <span class="text-3xl sm:text-4xl font-mono font-bold text-[#F5F5F7] text-balance">₹14,999</span>
                            <span class="text-xs text-[#8E8E98] block pt-1">One-time investment</span>
                        </div>
                        <p class="text-xs text-[#8E8E98] leading-relaxed font-sans">
                            A fast, focused, single-page or 3-page digital presence for emerging local practices.
                        </p>
                        <ul class="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Up to 3 semantic pages</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Mobile-first responsive build</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> WhatsApp &amp; Call buttons</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Secure contact form</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="w-full py-3 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#101014] text-[#F5F5F7] border border-white/[0.12] hover:bg-white/10 transition-colors">
                        Select Essential &rarr;
                    </a>
                </div>

                <!-- Tier 2: Professional (Featured) -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border-2 border-[#C8B28E] flex flex-col justify-between space-y-8 relative shadow-2xl noir-reveal">
                    <div class="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#C8B28E] text-[#08080A] text-[10px] font-mono font-bold tracking-wider uppercase">
                        Most Requested
                    </div>
                    <div class="space-y-4">
                        <div class="text-xs font-mono text-[#C8B28E] tracking-widest">[ TIER 02 ]</div>
                        <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Professional Studio</h3>
                        <div class="pt-2">
                            <span class="text-3xl sm:text-4xl font-mono font-bold text-[#F5F5F7] text-balance">₹34,999</span>
                            <span class="text-xs text-[#8E8E98] block pt-1">One-time investment</span>
                        </div>
                        <p class="text-xs text-[#8E8E98] leading-relaxed font-sans">
                            Comprehensive multi-page architecture designed for established commercial practices.
                        </p>
                        <ul class="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Up to 8 custom semantic pages</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Local SEO architecture &amp; Schema</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Fast gallery or menu showcases</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Consultation enquiry flows</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Priority 2-3 week delivery</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="w-full py-3.5 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#C8B28E] text-[#08080A] hover:bg-[#DECDB3] transition-colors">
                        Select Professional &rarr;
                    </a>
                </div>

                <!-- Tier 3: Custom Architecture -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#15151B] border border-white/[0.08] flex flex-col justify-between space-y-8 noir-reveal">
                    <div class="space-y-4">
                        <div class="text-xs font-mono text-[#C8B28E] tracking-widest">[ TIER 03 ]</div>
                        <h3 class="noir-headline text-2xl font-normal text-[#F5F5F7]">Custom Enterprise</h3>
                        <div class="pt-2">
                            <span class="text-3xl sm:text-4xl font-mono font-bold text-[#F5F5F7] text-balance">₹69,999+</span>
                            <span class="text-xs text-[#8E8E98] block pt-1">Starting baseline</span>
                        </div>
                        <p class="text-xs text-[#8E8E98] leading-relaxed font-sans">
                            Bespoke multi-location architecture, complex catalogs, and custom technical integrations.
                        </p>
                        <ul class="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#8E8E98]">
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Bespoke multi-page scope</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Multi-location local SEO</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> CRM &amp; contact-system webhooks</li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&bull;</span> Full code &amp; design handoff</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="w-full py-3 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#101014] text-[#F5F5F7] border border-white/[0.12] hover:bg-white/10 transition-colors">
                        Consult on Custom Scope &rarr;
                    </a>
                </div>
            </div>

            <!-- Interactive Scope Estimator -->
            <div class="p-8 sm:p-12 rounded-2xl bg-[#08080A] border border-white/[0.12] space-y-8 max-w-4xl mx-auto noir-reveal">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                    <div class="space-y-1">
                        <span class="text-xs font-mono uppercase tracking-widest text-[#C8B28E]">[ INTERACTIVE SCOPE ESTIMATOR ]</span>
                        <h3 class="noir-headline text-xl sm:text-2xl font-normal text-[#F5F5F7]">Calculate Your Custom Scope</h3>
                    </div>
                    <div class="text-right">
                        <span class="text-xs text-[#8E8E98] block">Estimated Total:</span>
                        <span class="text-3xl font-mono font-bold text-[#F5F5F7] tabular-nums" id="noir-calc-total">₹17,500</span>
                    </div>
                </div>

                <div class="space-y-6">
                    <!-- Page Count Slider -->
                    <div class="space-y-2">
                        <div class="flex justify-between text-xs">
                            <span class="text-[#F5F5F7] font-medium">Number of Custom Pages:</span>
                            <span class="font-mono text-[#C8B28E]" id="noir-calc-pages-val">5 Pages</span>
                        </div>
                        <input type="range" min="1" max="20" value="5" id="noir-calc-pages" class="w-full accent-[#C8B28E] bg-[#15151B] h-2 rounded-lg cursor-pointer">
                        <div class="flex justify-between text-[10px] text-[#8E8E98] font-mono">
                            <span>1 Page</span>
                            <span>10 Pages</span>
                            <span>20 Pages</span>
                        </div>
                    </div>

                    <!-- Add-on Toggles -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                        <label class="p-4 rounded-xl bg-[#15151B] border border-white/[0.06] flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
                            <div class="space-y-0.5">
                                <div class="text-xs font-semibold text-[#F5F5F7]">Local SEO Architecture</div>
                                <div class="text-[11px] text-[#8E8E98]">+₹17,500 one-time</div>
                            </div>
                            <input type="checkbox" id="noir-calc-seo" class="w-4 h-4 accent-[#C8B28E]">
                        </label>

                        <label class="p-4 rounded-xl bg-[#15151B] border border-white/[0.06] flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
                            <div class="space-y-0.5">
                                <div class="text-xs font-semibold text-[#F5F5F7]">Monthly Care &amp; Security</div>
                                <div class="text-[11px] text-[#8E8E98]">+₹15,000 / year</div>
                            </div>
                            <input type="checkbox" id="noir-calc-maint" class="w-4 h-4 accent-[#C8B28E]">
                        </label>
                    </div>

                    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div class="text-[11px] text-[#8E8E98] font-mono">
                            *Formula: Base ₹10k + (Pages &times; ₹1.5k) + Add-ons.
                        </div>
                        <a href="/contact?tier=custom&estimate=17500" id="noir-calc-cta" class="px-6 py-3 text-xs uppercase tracking-widest font-semibold rounded-full bg-[#C8B28E] text-[#08080A] hover:bg-[#DECDB3] transition-colors">
                            Request Quote Based on This Estimate &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 9. TECHNICAL AUDIT: DIAGNOSTIC REVIEW FORM                        -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#08080A] border-b border-white/[0.08]" id="noir-audit">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center mb-12 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>TECHNICAL DIAGNOSTIC REVIEW // COMPLIMENTARY ASSESSMENT</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Examine Your Current <span class="italic text-[#C8B28E]">Digital Presence</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Submit your website address for an objective, manual technical audit covering mobile performance, local SEO foundations, and conversion barriers.
                </p>
                <div class="text-xs text-[#C8B28E] font-mono">
                    Reviewed personally &bull; No automated spam
                </div>
            </div>

            <div class="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl bg-[#101014] border border-white/[0.12] shadow-2xl noir-reveal">
                <form id="noir-audit-form" class="space-y-6">
                    <!-- Honeypot Field -->
                    <div style="display: none;" aria-hidden="true">
                        <input type="text" name="_gotcha" id="noir-audit-gotcha" tabindex="-1" autocomplete="off">
                    </div>

                    <div class="space-y-2">
                        <label for="noir-audit-url" class="block text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">Website URL <span class="text-[#C8B28E]">*</span></label>
                        <input type="url" id="noir-audit-url" name="url" required placeholder="https://yourbusiness.com" class="w-full px-4 py-3 rounded-lg bg-[#15151B] border border-white/[0.12] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#C8B28E] transition-colors">
                    </div>

                    <div class="space-y-2">
                        <label for="noir-audit-email" class="block text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">Your Business Email <span class="text-[#C8B28E]">*</span></label>
                        <input type="email" id="noir-audit-email" name="email" required placeholder="director@yourbusiness.com" class="w-full px-4 py-3 rounded-lg bg-[#15151B] border border-white/[0.12] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#C8B28E] transition-colors">
                    </div>

                    <div class="space-y-2">
                        <label for="noir-audit-notes" class="block text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">Specific Concerns (Optional)</label>
                        <textarea id="noir-audit-notes" name="notes" rows="3" placeholder="e.g., slow mobile load, low local search rankings, poor conversion..." class="w-full px-4 py-3 rounded-lg bg-[#15151B] border border-white/[0.12] text-[#F5F5F7] text-sm focus:outline-none focus:border-[#C8B28E] transition-colors"></textarea>
                    </div>

                    <button type="submit" id="noir-audit-submit" class="w-full py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#C8B28E] text-[#08080A] hover:bg-[#DECDB3] transition-colors shadow-lg">
                        Request Complimentary Review &rarr;
                    </button>

                    <div id="noir-audit-success" class="hidden p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono">
                        Audit request received. We will examine your digital presence and transmit the review within 48 business hours.
                    </div>

                    <div id="noir-audit-error" class="hidden p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs text-center font-mono">
                        Unable to process request right now. Please email us directly or connect via WhatsApp.
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 10. CURATED INQUIRIES: ACCESSIBLE ACCORDION FAQ                   -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-28 lg:py-32 bg-[#101014] border-b border-white/[0.08]" id="noir-faq">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-16 space-y-4 noir-reveal">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>CURATED DARKROOM INQUIRIES // CLARIFICATIONS</span>
                </div>
                <h2 class="noir-headline text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Frequently Answered <span class="italic text-[#C8B28E]">Questions</span>
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans">
                    Straightforward answers about our engineering process, commercial deliverables, and technical terms.
                </p>
            </div>

            <div class="max-w-4xl mx-auto space-y-4">
                ${FAQS.map((faq, idx) => {
                    const qId = 'noir-faq-q-' + idx;
                    const panelId = 'noir-faq-panel-' + idx;
                    return `
                    <div class="rounded-xl bg-[#15151B] border border-white/[0.08] overflow-hidden noir-reveal">
                        <button type="button" class="noir-faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-white/[0.03]" id="${qId}" aria-expanded="false" aria-controls="${panelId}">
                            <span class="text-base font-normal noir-headline text-[#F5F5F7]">${escapeHTML(faq.q)}</span>
                            <span class="noir-faq-icon text-[#C8B28E] text-lg font-mono shrink-0">+</span>
                        </button>
                        <div id="${panelId}" class="noir-faq-panel hidden px-6 pb-6 pt-2 text-sm text-[#8E8E98] leading-relaxed font-sans border-t border-white/[0.04]" role="region" aria-labelledby="${qId}">
                            ${escapeHTML(faq.a)}
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- 11. FINAL CTA: CLOSING CURTAIN STATEMENT                           -->
    <!-- ================================================================= -->
    <section class="py-20 md:py-28 sm:py-32 lg:py-40 bg-[#08080A] relative overflow-hidden" id="noir-final-cta">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10 noir-reveal">
            <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C8B28E] uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                <span>FINALE // COMMENCE YOUR PRODUCTION</span>
            </div>

            <h2 class="noir-headline text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F5F7] tracking-tight max-w-4xl mx-auto leading-[1.05] text-balance">
                Every Great Story Demands an <span class="italic text-[#C8B28E]">Unforgettable</span> Stage.
            </h2>

            <p class="text-base sm:text-lg text-[#8E8E98] max-w-2xl mx-auto leading-relaxed font-sans">
                Elevate your commercial enterprise with an architectural web presence engineered for permanence, lightning-fast rendering, and authentic client trust.
            </p>

            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" class="w-full sm:w-auto px-10 py-5 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#C8B28E] text-[#08080A] hover:bg-[#DECDB3] transition-colors shadow-2xl">
                    Initiate Direct Consultation &rarr;
                </a>
                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-10 py-5 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#101014] text-[#F5F5F7] border border-white/[0.15] hover:bg-[#15151B] transition-colors">
                    Connect on WhatsApp &rarr;
                </a>
            </div>

            <div class="pt-8 text-xs font-mono text-[#8E8E98]">
                Direct Founder Consultation &middot; Detailed Written Proposals &middot; ₹14,999 to ₹69,999+
            </div>
        </div>
    </section>
    `;

    const script = `
        // Scoped Client Runtime for 06 Noir (Cinematic Digital Luxury)
        (function() {
            window.cleanupNoirInteractions = function() {
                if (window.__veloraNoirObserver) {
                    window.__veloraNoirObserver.disconnect();
                    window.__veloraNoirObserver = null;
                }
                if (window.__veloraNoirSliderCleanup) {
                    window.__veloraNoirSliderCleanup();
                    window.__veloraNoirSliderCleanup = null;
                }
            };

            window.initNoirInteractions = function() {
                // Ensure previous observers/listeners are cleared
                if (typeof window.cleanupNoirInteractions === 'function') {
                    window.cleanupNoirInteractions();
                }

                // All reveal animations are handled by the centralized
                // window.__veloraInitReveals() system in components.js.
                // Do NOT add duplicate IntersectionObservers, inline styles, or reveal classes here.

                // 2. Physical Wipe Comparison Slider (#noir-before-after-container)
                const sliderContainer = document.getElementById('noir-before-after-container');
                const handle = document.getElementById('noir-slider-handle');
                const afterLayer = document.getElementById('noir-layer-after');

                if (sliderContainer && handle && afterLayer) {
                    let isDragging = false;

                    function updateSliderPosition(percent) {
                        const clamped = Math.max(0, Math.min(100, percent));
                        handle.style.left = clamped + '%';
                        handle.setAttribute('aria-valuenow', Math.round(clamped));
                        afterLayer.style.clipPath = 'polygon(' + clamped + '% 0, 100% 0, 100% 100%, ' + clamped + '% 100%)';
                    }

                    function onPointerMove(e) {
                        if (!isDragging) return;
                        const rect = sliderContainer.getBoundingClientRect();
                        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
                        const pos = ((clientX - rect.left) / rect.width) * 100;
                        updateSliderPosition(pos);
                    }

                    function onPointerUp() {
                        isDragging = false;
                        window.removeEventListener('pointermove', onPointerMove);
                        window.removeEventListener('pointerup', onPointerUp);
                        window.removeEventListener('touchmove', onPointerMove);
                        window.removeEventListener('touchend', onPointerUp);
                    }

                    function onPointerDown(e) {
                        isDragging = true;
                        onPointerMove(e);
                        window.addEventListener('pointermove', onPointerMove);
                        window.addEventListener('pointerup', onPointerUp);
                        window.addEventListener('touchmove', onPointerMove, { passive: true });
                        window.addEventListener('touchend', onPointerUp);
                    }

                    handle.addEventListener('pointerdown', onPointerDown);
                    sliderContainer.addEventListener('pointerdown', onPointerDown);

                    // Keyboard Navigation for Accessibility (ArrowLeft / ArrowRight)
                    handle.addEventListener('keydown', function(e) {
                        const currentVal = parseFloat(handle.getAttribute('aria-valuenow') || '85');
                        if (e.key === 'ArrowLeft') {
                            e.preventDefault();
                            updateSliderPosition(currentVal - 5);
                        } else if (e.key === 'ArrowRight') {
                            e.preventDefault();
                            updateSliderPosition(currentVal + 5);
                        }
                    });

                    // Set initial state to 85% discovery cue
                    updateSliderPosition(85);

                    window.__veloraNoirSliderCleanup = function() {
                        handle.removeEventListener('pointerdown', onPointerDown);
                        sliderContainer.removeEventListener('pointerdown', onPointerDown);
                        window.removeEventListener('pointermove', onPointerMove);
                        window.removeEventListener('pointerup', onPointerUp);
                        window.removeEventListener('touchmove', onPointerMove);
                        window.removeEventListener('touchend', onPointerUp);
                    };
                }

                // 3. Interactive Scope Estimator
                const pagesInput = document.getElementById('noir-calc-pages');
                const pagesVal = document.getElementById('noir-calc-pages-val');
                const seoCheck = document.getElementById('noir-calc-seo');
                const maintCheck = document.getElementById('noir-calc-maint');
                const totalDisplay = document.getElementById('noir-calc-total');
                const ctaLink = document.getElementById('noir-calc-cta');

                if (pagesInput && totalDisplay) {
                    function recalculate() {
                        const pages = parseInt(pagesInput.value, 10) || 5;
                        if (pagesVal) pagesVal.textContent = pages + (pages === 1 ? ' Page' : ' Pages');

                        const base = 10000;
                        const pageCost = pages * 1500;
                        const seoCost = (seoCheck && seoCheck.checked) ? 17500 : 0;
                        const maintCost = (maintCheck && maintCheck.checked) ? 15000 : 0;
                        const total = base + pageCost + seoCost + maintCost;

                        totalDisplay.textContent = '₹' + total.toLocaleString('en-IN');
                        if (ctaLink) {
                            ctaLink.href = '/contact?tier=custom&estimate=' + total;
                        }
                    }

                    pagesInput.addEventListener('input', recalculate);
                    if (seoCheck) seoCheck.addEventListener('change', recalculate);
                    if (maintCheck) maintCheck.addEventListener('change', recalculate);
                    recalculate();
                }

                // 4. Technical Audit Form Handler (/api/audit)
                const auditForm = document.getElementById('noir-audit-form');
                if (auditForm) {
                    auditForm.addEventListener('submit', async function(e) {
                        e.preventDefault();
                        const urlInput = document.getElementById('noir-audit-url');
                        const emailInput = document.getElementById('noir-audit-email');
                        const notesInput = document.getElementById('noir-audit-notes');
                        const gotchaInput = document.getElementById('noir-audit-gotcha');
                        const submitBtn = document.getElementById('noir-audit-submit');
                        const successDiv = document.getElementById('noir-audit-success');
                        const errorDiv = document.getElementById('noir-audit-error');

                        if (!urlInput || !emailInput) return;

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

                // 5. Accessible FAQ Accordion (.noir-faq-panel)
                const faqTriggers = document.querySelectorAll('.noir-faq-trigger');
                faqTriggers.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const panelId = this.getAttribute('aria-controls');
                        const panel = document.getElementById(panelId);
                        const isExpanded = this.getAttribute('aria-expanded') === 'true';
                        const icon = this.querySelector('.noir-faq-icon');

                        this.setAttribute('aria-expanded', !isExpanded);
                        if (panel && panel.classList.contains('noir-faq-panel')) {
                            panel.classList.toggle('hidden');
                        }
                        if (icon) {
                            icon.textContent = isExpanded ? '+' : '\u2212';
                        }
                    });
                });
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', window.initNoirInteractions);
            } else {
                window.initNoirInteractions();
            }
        })();
    `;

    return { meta, content, script };
}

module.exports = {
    renderNoirExperience
};
