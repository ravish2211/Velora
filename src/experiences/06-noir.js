// ============================================================================ //
// VELORA DIGITAL — 06 NOIR EXPERIENCE PRESENTATION RENDERER                    //
// Art Direction: Cinematic Luxury Studio · The Private Screening Repertoire    //
// Palette: Obsidian (#08080A), Graphite (#121218), Platinum Champagne (#C8B28E) //
// Motion: Pure Native CSS + IntersectionObserver + RAF Aperture Spotlight       //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Dedicated Noir Header (Cinematic Letterbox Masthead & Chapter Aperture).
 * Features letterbox framing, live chapter indicator, chapter index drawer trigger,
 * and direct commission action. Fully accessible with keyboard trapping and scroll lock.
 */
function NoirHeader(currentPath) {
    const sceneLink = (hash, num, label) => {
        return `<a href="${hash}" class="noir-nav-link inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#8E8E98] hover:text-[#F5F5F7] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]">
            <span class="text-[10px] text-[#C8B28E] font-semibold">${num}</span>
            <span>${label}</span>
        </a>`;
    };

    return `
    <header class="noir-masthead sticky top-0 z-50 w-full bg-[#08080A]/95 backdrop-blur-md border-b border-white/[0.08] transition-all duration-300" role="banner" aria-label="Cinematic Studio Navigation">
        <!-- Letterbox Framing Timecode Strip -->
        <div class="hidden lg:block border-b border-white/[0.05] py-1.5 px-4 sm:px-6 lg:px-8 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E8E98]">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E] animate-pulse" aria-hidden="true"></span>
                    <span class="text-[#F5F5F7]">REEL NO. 06</span>
                    <span class="text-white/20">//</span>
                    <span>PRIVATE SCREENING REPERTOIRE</span>
                </div>
                <div class="flex items-center gap-4 text-white/40">
                    <span>ASPECT: 2.39:1 WIDESCREEN</span>
                    <span>SHUTTER: 180°</span>
                    <span>CODEC: SSR 200 OK</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-[#C8B28E]">DIRECTOR'S CUT</span>
                    <span class="text-white/20">&middot;</span>
                    <span>GURUGRAM &middot; DELHI NCR &middot; CHANDIGARH &middot; BENGALURU</span>
                </div>
            </div>
        </div>

        <!-- Main Masthead Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div class="flex items-center justify-between gap-6">

                <!-- Studio Brand Mark -->
                <a href="/" class="flex items-baseline gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]" aria-label="Velora Digital Noir Repertoire Home">
                    <span class="noir-display text-2xl sm:text-3xl font-semibold tracking-wider text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">VELORA</span>
                    <span class="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E8E98] border-l border-white/20 pl-3">
                        NOIR &middot; VOL. 06
                    </span>
                </a>

                <!-- Desktop Scene Navigation -->
                <nav class="hidden xl:flex items-center gap-6" aria-label="Cinematic Scenes">
                    ${sceneLink('#scene-practice', '01', 'PRACTICE')}
                    ${sceneLink('#scene-work', '02', 'DOSSIERS')}
                    ${sceneLink('#scene-subjects', '03', 'SUBJECTS')}
                    ${sceneLink('#scene-method', '04', 'METHOD')}
                    ${sceneLink('#scene-investment', '05', 'RATES')}
                    ${sceneLink('#scene-screening', '06', 'SCREENING')}
                    ${sceneLink('#scene-dossier', '07', 'REVIEW')}
                </nav>

                <!-- Right Action Cluster: Chapter Menu Button + Direct Commission -->
                <div class="flex items-center gap-3">
                    <!-- Chapter Index Aperture Button -->
                    <button type="button"
                            id="noir-chapter-trigger"
                            aria-expanded="false"
                            aria-controls="noir-chapter-drawer"
                            aria-label="Open Noir Chapter Index"
                            class="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono tracking-widest text-[#F5F5F7] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E] min-h-[44px]">
                        <svg class="w-3.5 h-3.5 text-[#C8B28E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 3a9 9 0 0 1 4 9 9 9 0 0 1-4 9 9 9 0 0 1-4-9 9 9 0 0 1 4-9z" />
                        </svg>
                        <span class="hidden sm:inline">CHAPTERS</span>
                        <span class="sm:hidden text-[11px]">INDEX</span>
                    </button>

                    <!-- Direct Commission CTA -->
                    <a href="#scene-dossier"
                       id="noir-header-cta"
                       class="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5F5F7] text-[#08080A] hover:bg-[#E4E4E8] text-xs font-mono uppercase tracking-widest font-semibold transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8B28E] min-h-[44px]">
                        <span>Commission</span>
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Fullscreen Chapter Navigation Drawer -->
    <div id="noir-chapter-drawer"
         class="fixed inset-0 z-[99999] bg-[#08080A] hidden flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
         role="dialog"
         aria-modal="true"
         aria-label="Film Chapter Index"
         tabindex="-1">

            <!-- Drawer Header -->
            <div class="max-w-6xl mx-auto w-full flex items-center justify-between pb-8 border-b border-white/10">
                <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-[#C8B28E] animate-ping" aria-hidden="true"></span>
                    <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#8E8E98]">SCENE DIRECTORY // NOIR VOL. 06</span>
                </div>
                <button type="button"
                        id="noir-chapter-close"
                        aria-label="Close Scene Directory"
                        class="px-4 py-2 min-h-[44px] min-w-[44px] rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest text-[#F5F5F7] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]">
                    <span>Close [ESC]</span>
                </button>
            </div>

            <!-- Chapter Grid Links -->
            <div class="max-w-6xl mx-auto w-full py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <a href="#scene-title" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 00</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">Title Sequence</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">The opening widescreen thesis and architectural manifesto.</p>
                </a>
                <a href="#scene-practice" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 01</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">The Practice</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">Three core disciplines: Design, Local SEO, and Maintenance.</p>
                </a>
                <a href="#scene-work" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 02</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">Selected Dossiers</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">Cinematic case plates: Aurora, Aarav, and The Spice Room.</p>
                </a>
                <a href="#scene-subjects" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 03</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">The Subjects</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">Four commercial environments engineered for local action.</p>
                </a>
                <a href="#scene-method" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 04</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">The Method</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">5-phase production reel from audit to cloud handoff.</p>
                </a>
                <a href="#scene-investment" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 05</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">The Investment</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">Exact canonical rates from ₹14,999 and scope estimator.</p>
                </a>
                <a href="#scene-screening" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 06</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">Screening Room</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">Three monolithic tenets of zero-overhead digital craft.</p>
                </a>
                <a href="#scene-dossier" class="noir-drawer-link group block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all">
                    <div class="text-xs font-mono text-[#C8B28E] tracking-widest mb-1">SCENE 07</div>
                    <div class="noir-display text-xl text-[#F5F5F7] group-hover:text-[#C8B28E] transition-colors">The Dossier</div>
                    <p class="text-xs text-[#8E8E98] mt-2 font-sans">Confidential architectural audit intake and inquiry desk.</p>
                </a>
            </div>

            <!-- Drawer Footer -->
            <div class="max-w-6xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8E98]">
                <span>Velora Digital &middot; Cinematic Studio Repertoire</span>
                <span>Direct Inquiries: <a href="mailto:${CONFIG.email}" class="text-[#F5F5F7] hover:text-[#C8B28E]">${CONFIG.email}</a></span>
            </div>
        </div>`;
}

/**
 * Dedicated Noir Footer (Closing Credits & Colophon Sequence).
 * Renders an authentic film credits crawl structure with studio directory,
 * legal covenants, and universal experience switcher.
 */
function NoirFooter() {
    return `
    <footer class="noir-footer bg-[#050507] text-[#8E8E98] border-t border-white/[0.08] pt-20 pb-16 relative z-10" role="contentinfo" aria-label="Cinematic Credits & Colophon">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <!-- Closing Title Card -->
            <div class="text-center space-y-4 max-w-3xl mx-auto">
                <div class="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8B28E]">
                    END OF REPERTOIRE // REEL 06
                </div>
                <div class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-wider">
                    VELORA DIGITAL
                </div>
                <p class="text-xs sm:text-sm text-[#8E8E98] font-sans leading-relaxed text-pretty">
                    An independent digital web studio and local search consultancy. Engineered with architectural precision, cinematic restraint, and zero rental platform dependencies.
                </p>
            </div>

            <!-- Cinematic Credits Matrix -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 border-t border-white/[0.08] text-xs font-sans">
                <!-- Column 01: Production Tenets -->
                <div class="space-y-3">
                    <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Execution Architecture</div>
                    <ul class="space-y-2 text-[#8E8E98]">
                        <li>Pure Semantic SSR (Node.js)</li>
                        <li>Zero Client-Side Runtime Bloat</li>
                        <li>Sub-Second Mobile TTFB</li>
                        <li>100% Client Code &amp; Domain Ownership</li>
                    </ul>
                </div>

                <!-- Column 02: Repertoire Disciplines -->
                <div class="space-y-3">
                    <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Repertoire Index</div>
                    <ul class="space-y-2">
                        <li><a href="/services/website-design" class="hover:text-[#F5F5F7] transition-colors">Website Design &amp; Development</a></li>
                        <li><a href="/services/local-seo" class="hover:text-[#F5F5F7] transition-colors">Local SEO Foundations</a></li>
                        <li><a href="/services/website-maintenance" class="hover:text-[#F5F5F7] transition-colors">Website Maintenance &amp; Care</a></li>
                        <li><a href="/portfolio" class="hover:text-[#F5F5F7] transition-colors">Commercial Case Studies</a></li>
                    </ul>
                </div>

                <!-- Column 03: Service Footprint -->
                <div class="space-y-3">
                    <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Regional Markets</div>
                    <ul class="space-y-2 text-[#8E8E98]">
                        <li><a href="/locations/gurugram" class="hover:text-[#F5F5F7] transition-colors">Gurugram (Cyber City &middot; Golf Course Rd)</a></li>
                        <li><a href="/locations/delhi-ncr" class="hover:text-[#F5F5F7] transition-colors">Delhi NCR (South &middot; Central &middot; Noida)</a></li>
                        <li><a href="/locations/chandigarh" class="hover:text-[#F5F5F7] transition-colors">Chandigarh (Tricity &middot; Sectors 8-17)</a></li>
                        <li><a href="/locations/bengaluru" class="hover:text-[#F5F5F7] transition-colors">Bengaluru (Indiranagar &middot; Koramangala)</a></li>
                    </ul>
                </div>

                <!-- Column 04: Correspondence -->
                <div class="space-y-3">
                    <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Studio Correspondence</div>
                    <div class="space-y-2 text-[#8E8E98]">
                        <p>Principal: <a href="mailto:${CONFIG.email}" class="text-[#F5F5F7] hover:text-[#C8B28E]">${CONFIG.email}</a></p>
                        <p>Studio Phone: <a href="tel:${CONFIG.phone.replace(/\s+/g, '')}" class="text-[#F5F5F7] hover:text-[#C8B28E]">${CONFIG.phone}</a></p>
                        <p class="text-[11px] text-[#8E8E98]/70 pt-2">Direct response within 24 business hours.</p>
                    </div>
                </div>
            </div>

            <!-- Experience Switcher & Legal Bar -->
            <div class="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono">
                <div class="flex items-center gap-4 flex-wrap text-[#8E8E98]">
                    <span>ART DIRECTION SWITCH:</span>
                    <a href="/?exp=architect" class="hover:text-[#F5F5F7] transition-colors">01 Architect</a>
                    <span class="text-white/20">&middot;</span>
                    <a href="/?exp=classic" class="hover:text-[#F5F5F7] transition-colors">02 Classic</a>
                    <span class="text-white/20">&middot;</span>
                    <a href="/?exp=editorial" class="hover:text-[#F5F5F7] transition-colors">03 Editorial</a>
                    <span class="text-white/20">&middot;</span>
                    <a href="/?exp=modern" class="hover:text-[#F5F5F7] transition-colors">04 Modern</a>
                    <span class="text-white/20">&middot;</span>
                    <a href="/?exp=atelier" class="hover:text-[#F5F5F7] transition-colors">05 Atelier</a>
                    <span class="text-white/20">&middot;</span>
                    <span class="text-[#C8B28E] font-bold">06 Noir (Active)</span>
                </div>

                <div class="flex items-center gap-4 text-[#8E8E98]">
                    <a href="/privacy-policy" class="hover:text-[#F5F5F7] transition-colors">Privacy Policy</a>
                    <span class="text-white/20">&middot;</span>
                    <a href="/terms-of-service" class="hover:text-[#F5F5F7] transition-colors">Terms of Service</a>
                    <span class="text-white/20">&middot;</span>
                    <span>&copy; 2026 Velora Digital. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </footer>`;
}

/**
 * Primary Experience 06 — Noir Renderer.
 * Assembles the complete 8-scene cinematic sequence with dedicated letterbox chrome,
 * floating progress indicator, aperture spotlight surface, and lifecycle scripts.
 */
function renderNoirExperience(currentPath = "/") {
    const aurora = PORTFOLIO.find(p => p.id === 'aurora-aesthetics' || p.id === 'aurora-clinic') || PORTFOLIO[0];
    const aarav = PORTFOLIO.find(p => p.id === 'aarav-estates' || p.id === 'aarav-properties') || PORTFOLIO[1];
    const spiceRoom = PORTFOLIO.find(p => p.id === 'the-spice-room') || PORTFOLIO[2];

    const meta = {
        title: 'Velora Digital | Noir Cinematic Luxury Web Studio & Local SEO Architecture',
        description: 'Velora Digital shapes high-contrast, filmic digital presences and high-performance search architectures for premier property advisory firms, elite clinics, and culinary destinations.',
        schema: generateSchema('Organization')
        // NOTE: breadcrumbs omitted on home to preserve pristine widescreen letterbox presentation
    };

    const content = `
    <!-- Floating Cinematic Scene Progress Indicator -->
    <div id="noir-scene-indicator"
         class="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#08080A]/95 border border-white/15 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#8E8E98] shadow-2xl transition-all duration-300 pointer-events-auto"
         aria-live="polite"
         aria-atomic="true">
        <span class="w-2 h-2 rounded-full bg-[#C8B28E] animate-pulse" aria-hidden="true"></span>
        <span id="noir-scene-num" class="text-[#F5F5F7] font-bold">SCENE 00</span>
        <span class="text-white/30">/</span>
        <span>08</span>
        <span class="h-3 w-px bg-white/20 mx-1" aria-hidden="true"></span>
        <span id="noir-scene-title" class="text-[#C8B28E] uppercase tracking-wider text-[10px]">Title Sequence</span>
    </div>

    <!-- ================================================================= -->
    <!-- SCENE 00: THE TITLE SEQUENCE (Opening Widescreen Presentation)     -->
    <!-- ================================================================= -->
    <section id="scene-title" class="noir-scene relative pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-36 bg-[#08080A] text-[#F5F5F7] border-b border-white/[0.08] overflow-hidden noir-spotlight-surface">
        <!-- Letterbox Matte Guides -->
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" aria-hidden="true"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <!-- Left Column: Monumental Cinematic Title & Thesis -->
                <div class="lg:col-span-7 space-y-8">
                    <div class="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#121218] border border-white/[0.12] text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#C8B28E] uppercase">
                        <span class="w-2 h-2 rounded-full bg-[#C8B28E]"></span>
                        <span>SCENE 00 // THE TITLE SEQUENCE</span>
                    </div>

                    <h1 class="noir-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F5F7] leading-[1.04] text-balance">
                        Cinematic Presence. <span class="italic text-[#C8B28E]">Enduring</span> Local Authority.
                    </h1>

                    <p class="text-base sm:text-lg text-[#8E8E98] leading-relaxed max-w-2xl font-sans text-pretty">
                        We build high-contrast digital presences and high-performance local search foundations for businesses worth noticing: premier clinics, high-trust property advisors, and culinary destinations. Engineered without framework bloat, rental lock-in, or performance compromise.
                    </p>

                    <!-- Primary Action Group -->
                    <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <a href="#scene-dossier" id="noir-hero-primary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#F5F5F7] text-[#08080A] hover:bg-[#E4E4E8] transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center">
                            Initiate Private Dossier &rarr;
                        </a>
                        <a href="#scene-work" id="noir-hero-secondary-cta" class="px-8 py-4 text-center text-xs uppercase tracking-widest font-semibold rounded-full bg-[#121218] hover:bg-[#181820] text-[#F5F5F7] border border-white/[0.15] transition-all duration-300 min-h-[44px] flex items-center justify-center">
                            Inspect Selected Works &darr;
                        </a>
                    </div>

                    <!-- Factual Studio Standards Strip -->
                    <div class="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-[#8E8E98] font-mono">
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
                            <span>100% Client Ownership</span>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Widescreen Viewfinder Plate & Optical Readout -->
                <div class="lg:col-span-5">
                    <div class="relative bg-[#101015] border border-white/[0.12] rounded-2xl p-7 sm:p-9 space-y-6 shadow-2xl">
                        <!-- Matte Box Header Strip -->
                        <div class="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                            <div class="space-y-1">
                                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E98] block">OPTICAL MONITOR // FRAME 2.39:1</span>
                                <div class="text-base noir-display font-medium text-[#F5F5F7] leading-snug">The Widescreen Specification</div>
                            </div>
                            <div class="flex items-center gap-2 px-2.5 py-1 text-[10px] font-mono tracking-wider rounded-full bg-[#15151D] border border-white/[0.12] text-[#C8B28E] shrink-0">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E] animate-ping" aria-hidden="true"></span>
                                <span>REC &middot; 24 FPS</span>
                            </div>
                        </div>

                        <!-- Optical Metrics Grid -->
                        <div class="space-y-3.5 font-sans">
                            <div class="p-4 rounded-xl bg-[#15151D] border border-white/[0.06] flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-[#F5F5F7]">Obsidian &amp; Champagne Palette</div>
                                    <div class="text-[11px] text-[#8E8E98]">Deep darkroom contrast with brushed platinum tones</div>
                                </div>
                                <div class="flex items-center gap-1.5" aria-hidden="true">
                                    <span class="w-3.5 h-3.5 rounded-full bg-[#08080A] border border-white/20"></span>
                                    <span class="w-3.5 h-3.5 rounded-full bg-[#15151D] border border-white/20"></span>
                                    <span class="w-3.5 h-3.5 rounded-full bg-[#C8B28E]"></span>
                                </div>
                            </div>

                            <div class="p-4 rounded-xl bg-[#15151D] border border-white/[0.06] flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-[#F5F5F7]">Cinematic Typography Hierarchy</div>
                                    <div class="text-[11px] text-[#8E8E98]">Cinzel Roman Display Serif &middot; Plus Jakarta Sans</div>
                                </div>
                                <span class="noir-display italic text-lg text-[#C8B28E]" aria-hidden="true">Aa</span>
                            </div>

                            <div class="p-4 rounded-xl bg-[#15151D] border border-white/[0.06] flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="text-xs font-semibold text-[#F5F5F7]">Engineering Baseline</div>
                                    <div class="text-[11px] text-[#8E8E98]">Vanilla Node SSR &middot; Zero Frameworks &middot; WCAG 2.1 AA</div>
                                </div>
                                <span class="text-[11px] font-mono text-[#C8B28E] font-bold">200 OK</span>
                            </div>
                        </div>

                        <!-- Studio Intake Rate -->
                        <div class="pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#8E8E98]">
                            <span>Current commission fee from:</span>
                            <span class="font-mono font-bold text-base text-[#F5F5F7]">₹14,999</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 01: THE PRACTICE (Disciplines as Cinematic Title Cards)       -->
    <!-- ================================================================= -->
    <section id="scene-practice" class="noir-scene py-24 sm:py-32 bg-[#0D0D11] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 01 // THE PRACTICE</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Disciplines Engineered for <span class="italic text-[#C8B28E]">High-Trust</span> Commercial Impact
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    We do not offer a confusing catalog of fifty generic services. We focus exclusively on the three critical disciplines required to turn local search intent into booked consultations, property viewings, and dining reservations.
                </p>
            </div>

            <!-- Three Cinematic Widescreen Discipline Plates -->
            <div class="space-y-8">

                <!-- Discipline 01: Web Architecture -->
                <div class="p-8 sm:p-12 rounded-2xl bg-[#121218] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all duration-300">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8B28E]">DISCIPLINE 01 // ARCHITECTURE</div>
                            <h3 class="noir-display text-2xl sm:text-3xl text-[#F5F5F7]">Website Design &amp; Development</h3>
                            <p class="text-sm font-sans text-[#8E8E98] leading-relaxed text-pretty">
                                Fast, mobile-first websites engineered to build trust and make contacting your business effortless. Built with lean semantic markup—zero bloated page-builder plugins or runtime dependencies slowing down customer inquiries.
                            </p>
                            <div class="pt-2 text-xs font-mono text-[#8E8E98]">
                                <span>Typical Timeline: 2 to 4 weeks</span> &middot; <span class="text-[#F5F5F7]">100% Client Ownership</span>
                            </div>
                        </div>

                        <div class="lg:col-span-7 bg-[#08080A] p-6 sm:p-8 rounded-xl border border-white/[0.06] space-y-5">
                            <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E98]">Core Production Deliverables</div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F5F5F7] font-sans">
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Mobile-first responsive architecture</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Direct Click-to-Call &amp; WhatsApp routing</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Ultra-fast page load times on 4G/5G</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Clean semantic SSR markup</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Clear service menus &amp; transparent rate cards</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Secure lead forms with instant notification</span>
                                </div>
                            </div>
                            <div class="pt-2 border-t border-white/[0.06]">
                                <a href="/services/website-design" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B28E] hover:underline">
                                    <span>Examine Full Technical Specifications</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Discipline 02: Local SEO -->
                <div class="p-8 sm:p-12 rounded-2xl bg-[#121218] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all duration-300">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8B28E]">DISCIPLINE 02 // VISIBILITY</div>
                            <h3 class="noir-display text-2xl sm:text-3xl text-[#F5F5F7]">Local SEO Foundations</h3>
                            <p class="text-sm font-sans text-[#8E8E98] leading-relaxed text-pretty">
                                Rigorous technical search optimization to help your business get discovered on Google Maps and high-intent local searches. We feed search engines structured Schema.org code so they understand your exact coordinates, operating hours, and services without guesswork.
                            </p>
                            <div class="pt-2 text-xs font-mono text-[#8E8E98]">
                                <span>Typical Timeline: 1 to 2 weeks</span> &middot; <span class="text-[#F5F5F7]">Zero Black-Hat Schemes</span>
                            </div>
                        </div>

                        <div class="lg:col-span-7 bg-[#08080A] p-6 sm:p-8 rounded-xl border border-white/[0.06] space-y-5">
                            <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E98]">Core Production Deliverables</div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F5F5F7] font-sans">
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>LocalBusiness Schema.org structured data</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Google Business Profile consistency alignment</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Name, Address &amp; Phone (NAP) audit</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Locality &amp; intent keyword mapping</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>XML sitemap &amp; Search Console indexing</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Core Web Vitals mobile speed compliance</span>
                                </div>
                            </div>
                            <div class="pt-2 border-t border-white/[0.06]">
                                <a href="/services/local-seo" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B28E] hover:underline">
                                    <span>Examine Local Search Architecture</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Discipline 03: Website Maintenance & Care -->
                <div class="p-8 sm:p-12 rounded-2xl bg-[#121218] border border-white/[0.08] hover:border-[#C8B28E]/40 transition-all duration-300">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8B28E]">DISCIPLINE 03 // RELIABILITY</div>
                            <h3 class="noir-display text-2xl sm:text-3xl text-[#F5F5F7]">Website Maintenance &amp; Care</h3>
                            <p class="text-sm font-sans text-[#8E8E98] leading-relaxed text-pretty">
                                Reliable cloud infrastructure management, continuous uptime monitoring, and regular content edits so your digital presence stays fast, secure, and accurate without hiring internal technical staff.
                            </p>
                            <div class="pt-2 text-xs font-mono text-[#8E8E98]">
                                <span>Engagement: Monthly or Annual</span> &middot; <span class="text-[#F5F5F7]">Cancel Anytime</span>
                            </div>
                        </div>

                        <div class="lg:col-span-7 bg-[#08080A] p-6 sm:p-8 rounded-xl border border-white/[0.06] space-y-5">
                            <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E98]">Core Production Deliverables</div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F5F5F7] font-sans">
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>High-availability cloud hosting management</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Automated SSL certificate renewal</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Monthly content updates (prices, menus, team)</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Lead pathway &amp; form delivery checks</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Performance &amp; uptime monitoring</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[#C8B28E] font-bold">&check;</span>
                                    <span>Direct priority support via WhatsApp &amp; Email</span>
                                </div>
                            </div>
                            <div class="pt-2 border-t border-white/[0.06]">
                                <a href="/services/website-maintenance" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B28E] hover:underline">
                                    <span>Examine Ongoing Maintenance Agreement</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 02: THE WORK (Cinematic Project Dossiers / Widescreen Stills)  -->
    <!-- ================================================================= -->
    <section id="scene-work" class="noir-scene py-24 sm:py-32 bg-[#08080A] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 02 // SELECTED DOSSIERS</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Cinematic Project Dossiers
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    Every project below is an engineered concept benchmark demonstrating mobile-first execution, conversion architecture, and zero-bloat code quality. Transparently declared under our honest studio policy.
                </p>
            </div>

            <!-- Dossier Tab Selector (Cinematic Clapperboard / Cue Controls) -->
            <div class="flex flex-wrap gap-3 pb-2 border-b border-white/10" role="tablist" aria-label="Project Dossiers">
                <button type="button"
                        role="tab"
                        id="noir-tab-0"
                        aria-selected="true"
                        aria-controls="noir-dossier-0"
                        class="noir-dossier-tab is-active px-5 py-3 min-h-[44px] inline-flex items-center rounded-xl text-xs font-mono uppercase tracking-wider border border-white/20 bg-[#15151D] text-[#F5F5F7] font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]">
                    <span class="text-[#C8B28E] mr-2">01</span> Aurora Clinic &middot; Healthcare
                </button>
                <button type="button"
                        role="tab"
                        id="noir-tab-1"
                        aria-selected="false"
                        aria-controls="noir-dossier-1"
                        class="noir-dossier-tab px-5 py-3 min-h-[44px] inline-flex items-center rounded-xl text-xs font-mono uppercase tracking-wider border border-white/[0.08] bg-[#0E0E12] text-[#8E8E98] hover:text-[#F5F5F7] hover:border-white/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]">
                    <span class="text-white/40 mr-2">02</span> Aarav Properties &middot; Real Estate
                </button>
                <button type="button"
                        role="tab"
                        id="noir-tab-2"
                        aria-selected="false"
                        aria-controls="noir-dossier-2"
                        class="noir-dossier-tab px-5 py-3 min-h-[44px] inline-flex items-center rounded-xl text-xs font-mono uppercase tracking-wider border border-white/[0.08] bg-[#0E0E12] text-[#8E8E98] hover:text-[#F5F5F7] hover:border-white/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]">
                    <span class="text-white/40 mr-2">03</span> The Spice Room &middot; Hospitality
                </button>
            </div>

            <!-- Project Dossier Panels -->
            <div class="space-y-8">

                <!-- DOSSIER 01: Aurora Clinic -->
                <div id="noir-dossier-0" class="noir-dossier-panel space-y-8" role="tabpanel" aria-labelledby="noir-tab-0">
                    <!-- Widescreen Cinematic Viewfinder Frame (2.39:1) -->
                    <div class="noir-widescreen-frame relative rounded-2xl overflow-hidden bg-[#101016] border border-white/15 p-8 sm:p-12 flex flex-col justify-between">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" aria-hidden="true"></div>

                        <!-- Top Viewfinder Timecode -->
                        <div class="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#C8B28E]">
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>CAM A // FRAME 01 &middot; 2.39:1</span>
                            </div>
                            <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px]">
                                ${escapeHTML(aurora.type || 'Signature Design Concept')}
                            </span>
                        </div>

                        <!-- Mid Viewfinder Graphic Plate -->
                        <div class="relative z-10 max-w-2xl space-y-3">
                            <span class="text-xs font-mono text-[#8E8E98] uppercase tracking-[0.2em] block">${escapeHTML(aurora.industry)}</span>
                            <div class="noir-display text-3xl sm:text-5xl font-medium text-[#F5F5F7] tracking-tight">
                                ${escapeHTML(aurora.title)}
                            </div>
                            <p class="text-sm font-sans text-[#8E8E98] leading-relaxed max-w-xl text-pretty">
                                ${escapeHTML(aurora.summary)}
                            </p>
                        </div>

                        <!-- Bottom Frame Metadata -->
                        <div class="relative z-10 flex items-center justify-between text-xs font-mono text-[#8E8E98] pt-4 border-t border-white/10">
                            <span>SCHEMA: MedicalBusiness</span>
                            <span>TTFB: &lt; 120ms</span>
                        </div>
                    </div>

                    <!-- Dossier Specifics & Deliverables Matrix -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-2xl bg-[#101016] border border-white/[0.08]">
                        <div class="lg:col-span-6 space-y-4 font-sans">
                            <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Cinematic Design Rationale</div>
                            <p class="text-xs text-[#8E8E98] leading-relaxed">${escapeHTML(aurora.designDirection)}</p>
                            <div class="p-4 rounded-xl bg-[#08080A] border border-white/[0.06] space-y-1">
                                <div class="text-[10px] font-mono text-[#C8B28E] uppercase">Key Interaction Decisions:</div>
                                <p class="text-xs text-[#F5F5F7]">${escapeHTML(aurora.keyUxDecisions)}</p>
                            </div>
                        </div>

                        <div class="lg:col-span-6 space-y-4 font-sans">
                            <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Verified Production Deliverables</div>
                            <ul class="space-y-2 text-xs text-[#F5F5F7]">
                                ${aurora.deliverables.map(d => `<li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>${escapeHTML(d)}</span></li>`).join('')}
                            </ul>
                            <div class="pt-4 border-t border-white/10">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B28E] hover:underline">
                                    <span>Examine Complete Case Dossier</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- DOSSIER 02: Aarav Properties -->
                <div id="noir-dossier-1" class="noir-dossier-panel space-y-8 hidden" role="tabpanel" aria-labelledby="noir-tab-1">
                    <!-- Widescreen Cinematic Viewfinder Frame (2.39:1) -->
                    <div class="noir-widescreen-frame relative rounded-2xl overflow-hidden bg-[#14120E] border border-white/15 p-8 sm:p-12 flex flex-col justify-between">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" aria-hidden="true"></div>

                        <!-- Top Viewfinder Timecode -->
                        <div class="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#C8B28E]">
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                                <span>CAM B // FRAME 02 &middot; 2.39:1</span>
                            </div>
                            <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px]">
                                ${escapeHTML(aarav.type || 'Signature Design Concept')}
                            </span>
                        </div>

                        <!-- Mid Viewfinder Graphic Plate -->
                        <div class="relative z-10 max-w-2xl space-y-3">
                            <span class="text-xs font-mono text-[#8E8E98] uppercase tracking-[0.2em] block">${escapeHTML(aarav.industry)}</span>
                            <div class="noir-display text-3xl sm:text-5xl font-medium text-[#F5F5F7] tracking-tight">
                                ${escapeHTML(aarav.title)}
                            </div>
                            <p class="text-sm font-sans text-[#8E8E98] leading-relaxed max-w-xl text-pretty">
                                ${escapeHTML(aarav.summary)}
                            </p>
                        </div>

                        <!-- Bottom Frame Metadata -->
                        <div class="relative z-10 flex items-center justify-between text-xs font-mono text-[#8E8E98] pt-4 border-t border-white/10">
                            <span>SCHEMA: RealEstateAgent</span>
                            <span>INQUIRY: Direct Broker Routing</span>
                        </div>
                    </div>

                    <!-- Dossier Specifics & Deliverables Matrix -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-2xl bg-[#101016] border border-white/[0.08]">
                        <div class="lg:col-span-6 space-y-4 font-sans">
                            <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Cinematic Design Rationale</div>
                            <p class="text-xs text-[#8E8E98] leading-relaxed">${escapeHTML(aarav.designDirection)}</p>
                            <div class="p-4 rounded-xl bg-[#08080A] border border-white/[0.06] space-y-1">
                                <div class="text-[10px] font-mono text-[#C8B28E] uppercase">Key Interaction Decisions:</div>
                                <p class="text-xs text-[#F5F5F7]">${escapeHTML(aarav.keyUxDecisions)}</p>
                            </div>
                        </div>

                        <div class="lg:col-span-6 space-y-4 font-sans">
                            <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Verified Production Deliverables</div>
                            <ul class="space-y-2 text-xs text-[#F5F5F7]">
                                ${aarav.deliverables.map(d => `<li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>${escapeHTML(d)}</span></li>`).join('')}
                            </ul>
                            <div class="pt-4 border-t border-white/10">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B28E] hover:underline">
                                    <span>Examine Complete Case Dossier</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- DOSSIER 03: The Spice Room -->
                <div id="noir-dossier-2" class="noir-dossier-panel space-y-8 hidden" role="tabpanel" aria-labelledby="noir-tab-2">
                    <!-- Widescreen Cinematic Viewfinder Frame (2.39:1) -->
                    <div class="noir-widescreen-frame relative rounded-2xl overflow-hidden bg-[#160E0E] border border-white/15 p-8 sm:p-12 flex flex-col justify-between">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" aria-hidden="true"></div>

                        <!-- Top Viewfinder Timecode -->
                        <div class="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#C8B28E]">
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-rose-400"></span>
                                <span>CAM C // FRAME 03 &middot; 2.39:1</span>
                            </div>
                            <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px]">
                                ${escapeHTML(spiceRoom.type || 'Signature Design Concept')}
                            </span>
                        </div>

                        <!-- Mid Viewfinder Graphic Plate -->
                        <div class="relative z-10 max-w-2xl space-y-3">
                            <span class="text-xs font-mono text-[#8E8E98] uppercase tracking-[0.2em] block">${escapeHTML(spiceRoom.industry)}</span>
                            <div class="noir-display text-3xl sm:text-5xl font-medium text-[#F5F5F7] tracking-tight">
                                ${escapeHTML(spiceRoom.title)}
                            </div>
                            <p class="text-sm font-sans text-[#8E8E98] leading-relaxed max-w-xl text-pretty">
                                ${escapeHTML(spiceRoom.summary)}
                            </p>
                        </div>

                        <!-- Bottom Frame Metadata -->
                        <div class="relative z-10 flex items-center justify-between text-xs font-mono text-[#8E8E98] pt-4 border-t border-white/10">
                            <span>SCHEMA: Restaurant / FoodEstablishment</span>
                            <span>MENU: Native SSR HTML (Zero PDF)</span>
                        </div>
                    </div>

                    <!-- Dossier Specifics & Deliverables Matrix -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-2xl bg-[#101016] border border-white/[0.08]">
                        <div class="lg:col-span-6 space-y-4 font-sans">
                            <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Cinematic Design Rationale</div>
                            <p class="text-xs text-[#8E8E98] leading-relaxed">${escapeHTML(spiceRoom.designDirection)}</p>
                            <div class="p-4 rounded-xl bg-[#08080A] border border-white/[0.06] space-y-1">
                                <div class="text-[10px] font-mono text-[#C8B28E] uppercase">Key Interaction Decisions:</div>
                                <p class="text-xs text-[#F5F5F7]">${escapeHTML(spiceRoom.keyUxDecisions)}</p>
                            </div>
                        </div>

                        <div class="lg:col-span-6 space-y-4 font-sans">
                            <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">Verified Production Deliverables</div>
                            <ul class="space-y-2 text-xs text-[#F5F5F7]">
                                ${spiceRoom.deliverables.map(d => `<li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>${escapeHTML(d)}</span></li>`).join('')}
                            </ul>
                            <div class="pt-4 border-t border-white/10">
                                <a href="/portfolio" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B28E] hover:underline">
                                    <span>Examine Complete Case Dossier</span>
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 03: THE SUBJECTS (The Four Commercial Environments)         -->
    <!-- ================================================================= -->
    <section id="scene-subjects" class="noir-scene py-24 sm:py-32 bg-[#0D0D11] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 03 // THE SUBJECTS</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Commercial Environments Formed for Action
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    Generic templates treat a medical clinic the same as a burger cafe. In our studio, each industry environment is calibrated around the exact psychological threshold required for direct customer conversion.
                </p>
            </div>

            <!-- Four Sector Environment Plates -->
            <div class="noir-grid-4">
                <!-- Sector 01: Clinics -->
                <div class="p-8 rounded-2xl bg-[#121218] border border-white/[0.08] space-y-5 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-3">
                        <div class="text-[10px] font-mono text-[#C8B28E] uppercase tracking-widest">GENRE 01 // HEALTHCARE</div>
                        <h3 class="noir-display text-xl text-[#F5F5F7]">Specialty Clinics &amp; Doctors</h3>
                        <p class="text-xs font-serif italic text-[#C8B28E]">"Trust must arrive before the appointment."</p>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed">
                            Verified doctor credentials, transparent pricing menus, and one-tap consultation booking eliminate patient hesitation.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#8E8E98] space-y-1">
                        <div>SCHEMA: MedicalBusiness</div>
                        <div>ACTION: Direct Consultation Booking</div>
                    </div>
                </div>

                <!-- Sector 02: Real Estate -->
                <div class="p-8 rounded-2xl bg-[#121218] border border-white/[0.08] space-y-5 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-3">
                        <div class="text-[10px] font-mono text-[#C8B28E] uppercase tracking-widest">GENRE 02 // PROPERTY</div>
                        <h3 class="noir-display text-xl text-[#F5F5F7]">Real Estate Advisory</h3>
                        <p class="text-xs font-serif italic text-[#C8B28E]">"The architecture must be understood before the inquiry."</p>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed">
                            Floor plan catalogs, RERA compliance display, and direct WhatsApp routing connect brokers directly with qualified buyers.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#8E8E98] space-y-1">
                        <div>SCHEMA: RealEstateAgent</div>
                        <div>ACTION: Direct Broker WhatsApp</div>
                    </div>
                </div>

                <!-- Sector 03: Hospitality -->
                <div class="p-8 rounded-2xl bg-[#121218] border border-white/[0.08] space-y-5 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-3">
                        <div class="text-[10px] font-mono text-[#C8B28E] uppercase tracking-widest">GENRE 03 // CULINARY</div>
                        <h3 class="noir-display text-xl text-[#F5F5F7]">Fine Dining &amp; Hospitality</h3>
                        <p class="text-xs font-serif italic text-[#C8B28E]">"The atmosphere must survive the digital screen."</p>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed">
                            Lightning-fast native HTML menus, tap-to-reserve links, and one-click Google Maps driving routes eliminate mobile drop-offs.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#8E8E98] space-y-1">
                        <div>SCHEMA: Restaurant / Food</div>
                        <div>ACTION: One-Tap Maps &amp; Booking</div>
                    </div>
                </div>

                <!-- Sector 04: Wellness -->
                <div class="p-8 rounded-2xl bg-[#121218] border border-white/[0.08] space-y-5 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-3">
                        <div class="text-[10px] font-mono text-[#C8B28E] uppercase tracking-widest">GENRE 04 // AESTHETICS</div>
                        <h3 class="noir-display text-xl text-[#F5F5F7]">Salons &amp; Wellness Studios</h3>
                        <p class="text-xs font-serif italic text-[#C8B28E]">"The craft must be evident at first glance."</p>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed">
                            Visual transformation galleries, transparent service rate cards with duration estimates, and pre-filled WhatsApp booking links.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#8E8E98] space-y-1">
                        <div>SCHEMA: HealthAndBeautyBusiness</div>
                        <div>ACTION: Pre-filled WhatsApp Slot</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 04: THE METHOD (Cinematic 5-Phase Production Reel)           -->
    <!-- ================================================================= -->
    <section id="scene-method" class="noir-scene py-24 sm:py-32 bg-[#08080A] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 04 // THE METHOD</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    The Production Reel: From Script to Deployment
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    A rigorous 5-stage engineering sequence. We do not use fragmented offshore teams or black-box handoffs. Every stage is delivered directly by the studio principal.
                </p>
            </div>

            <!-- 5-Phase Cinematic Timeline -->
            <div class="space-y-6">
                <!-- Phase 01 -->
                <div class="p-6 sm:p-8 rounded-xl bg-[#101016] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C8B28E]/40 transition-all">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <span class="text-xl sm:text-2xl font-mono text-[#C8B28E] font-bold">01</span>
                        <div class="space-y-1">
                            <h3 class="noir-display text-xl text-[#F5F5F7]">Discovery &amp; Locality Strategy</h3>
                            <p class="text-xs text-[#8E8E98] font-sans max-w-2xl">
                                We analyze target localities, competitor search positions, and current business listings across your target neighborhoods in Gurugram, Delhi NCR, Chandigarh, or Bengaluru.
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider shrink-0">Phase 01 // Week 1</span>
                </div>

                <!-- Phase 02 -->
                <div class="p-6 sm:p-8 rounded-xl bg-[#101016] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C8B28E]/40 transition-all">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <span class="text-xl sm:text-2xl font-mono text-[#C8B28E] font-bold">02</span>
                        <div class="space-y-1">
                            <h3 class="noir-display text-xl text-[#F5F5F7]">Visual &amp; Information Architecture</h3>
                            <p class="text-xs text-[#8E8E98] font-sans max-w-2xl">
                                We design high-contrast, responsive layouts centered on legible typography, scannable service rate cards, and direct conversion pathways.
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider shrink-0">Phase 02 // Week 2</span>
                </div>

                <!-- Phase 03 -->
                <div class="p-6 sm:p-8 rounded-xl bg-[#101016] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C8B28E]/40 transition-all">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <span class="text-xl sm:text-2xl font-mono text-[#C8B28E] font-bold">03</span>
                        <div class="space-y-1">
                            <h3 class="noir-display text-xl text-[#F5F5F7]">Zero-Bloat Code Engineering</h3>
                            <p class="text-xs text-[#8E8E98] font-sans max-w-2xl">
                                We build with pure semantic HTML and modular CSS. No heavy site builders, no slow CMS plugins, and zero unnecessary runtime libraries.
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider shrink-0">Phase 03 // Week 2-3</span>
                </div>

                <!-- Phase 04 -->
                <div class="p-6 sm:p-8 rounded-xl bg-[#101016] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C8B28E]/40 transition-all">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <span class="text-xl sm:text-2xl font-mono text-[#C8B28E] font-bold">04</span>
                        <div class="space-y-1">
                            <h3 class="noir-display text-xl text-[#F5F5F7]">Mobile Screen &amp; Search Rigor</h3>
                            <p class="text-xs text-[#8E8E98] font-sans max-w-2xl">
                                We test across real iOS and Android viewports, verify email lead dispatch, embed Schema.org structured data, and benchmark Core Web Vitals.
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider shrink-0">Phase 04 // Week 3</span>
                </div>

                <!-- Phase 05 -->
                <div class="p-6 sm:p-8 rounded-xl bg-[#101016] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C8B28E]/40 transition-all">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <span class="text-xl sm:text-2xl font-mono text-[#C8B28E] font-bold">05</span>
                        <div class="space-y-1">
                            <h3 class="noir-display text-xl text-[#F5F5F7]">Cloud Handoff &amp; Asset Rights</h3>
                            <p class="text-xs text-[#8E8E98] font-sans max-w-2xl">
                                We deploy to high-speed cloud infrastructure, submit XML sitemaps to Google Search Console, and hand over 100% ownership of code, copy, and domain keys.
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider shrink-0">Phase 05 // Launch</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 05: THE INVESTMENT (Commission Rates & Interactive Scope)   -->
    <!-- ================================================================= -->
    <section id="scene-investment" class="noir-scene py-24 sm:py-32 bg-[#0D0D11] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 05 // THE INVESTMENT</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Production Rates &amp; Transparent Valuation
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    Fixed, milestone-based commission fees. No hidden maintenance locks, no surprise hosting markups, and zero artificial discounts.
                </p>
            </div>

            <!-- Three Canonical Pricing Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                <!-- Tier 01: Essential Foundation -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#121218] border border-white/[0.08] flex flex-col justify-between space-y-8 hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <span class="text-[11px] font-mono text-[#C8B28E] uppercase tracking-widest">TIER 01</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-[#8E8E98]">Fixed Rate</span>
                        </div>
                        <div class="space-y-2">
                            <h3 class="noir-display text-2xl text-[#F5F5F7]">Essential Foundation</h3>
                            <p class="text-xs text-[#8E8E98] font-sans">For local professionals needing a fast, high-trust single-page presence.</p>
                        </div>
                        <div class="pt-4 border-t border-white/[0.08]">
                            <div class="font-mono text-4xl font-bold text-[#F5F5F7]">₹14,999</div>
                            <div class="text-[11px] font-mono text-[#8E8E98] mt-1">One-time investment &middot; 2 to 3 weeks</div>
                        </div>
                        <ul class="space-y-2.5 text-xs text-[#8E8E98] font-sans pt-2">
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Single high-converting page layout</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Mobile-first responsive architecture</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Direct Click-to-Call &amp; WhatsApp routing</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Core Web Vitals mobile compliance</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Basic LocalBusiness Schema markup</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>100% complete asset ownership</span></li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="block w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#F5F5F7] border border-white/20 transition-all min-h-[44px]">
                        Commission Essential &rarr;
                    </a>
                </div>

                <!-- Tier 02: Professional Studio (Featured) -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#171720] border-2 border-[#C8B28E] flex flex-col justify-between space-y-8 relative shadow-2xl">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <span class="text-[11px] font-mono text-[#C8B28E] uppercase tracking-widest font-bold">TIER 02 // STUDIO STANDARD</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#C8B28E]/20 text-[#C8B28E] font-semibold">Recommended</span>
                        </div>
                        <div class="space-y-2">
                            <h3 class="noir-display text-2xl text-[#F5F5F7]">Professional Studio</h3>
                            <p class="text-xs text-[#8E8E98] font-sans">A complete multi-page presence with structured service breakdown and local search foundation.</p>
                        </div>
                        <div class="pt-4 border-t border-white/[0.08]">
                            <div class="font-mono text-4xl font-bold text-[#C8B28E]">₹34,999</div>
                            <div class="text-[11px] font-mono text-[#8E8E98] mt-1">One-time investment &middot; 3 to 4 weeks</div>
                        </div>
                        <ul class="space-y-2.5 text-xs text-[#F5F5F7] font-sans pt-2">
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E] font-bold">&check;</span> <span>Up to 5 custom-designed page templates</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E] font-bold">&check;</span> <span>Full Local SEO Foundation integration</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E] font-bold">&check;</span> <span>Comprehensive LocalBusiness Schema.org</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E] font-bold">&check;</span> <span>Google Search Console indexing &amp; XML sitemap</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E] font-bold">&check;</span> <span>Frictionless consultation booking pathways</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E] font-bold">&check;</span> <span>Full source code &amp; domain ownership</span></li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="block w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold rounded-full bg-[#F5F5F7] hover:bg-[#E4E4E8] text-[#08080A] transition-all shadow-xl min-h-[44px]">
                        Commission Professional &rarr;
                    </a>
                </div>

                <!-- Tier 03: Custom Production -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#121218] border border-white/[0.08] flex flex-col justify-between space-y-8 hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <span class="text-[11px] font-mono text-[#C8B28E] uppercase tracking-widest">TIER 03</span>
                            <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-[#8E8E98]">Bespoke Scope</span>
                        </div>
                        <div class="space-y-2">
                            <h3 class="noir-display text-2xl text-[#F5F5F7]">Custom Production</h3>
                            <p class="text-xs text-[#8E8E98] font-sans">For multi-location practices, luxury developers, or deep bespoke workflows.</p>
                        </div>
                        <div class="pt-4 border-t border-white/[0.08]">
                            <div class="font-mono text-4xl font-bold text-[#F5F5F7]">₹69,999+</div>
                            <div class="text-[11px] font-mono text-[#8E8E98] mt-1">Milestone scope &middot; 4 to 6 weeks</div>
                        </div>
                        <ul class="space-y-2.5 text-xs text-[#8E8E98] font-sans pt-2">
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Unlimited custom template architecture</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Multi-location neighborhood landing pages</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Custom interactive estimators &amp; lead calculators</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Custom CRM / WhatsApp API webhooks</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Dedicated performance benchmarking &amp; audit</span></li>
                            <li class="flex items-center gap-2"><span class="text-[#C8B28E]">&check;</span> <span>Direct principal advisory through launch</span></li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="block w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#F5F5F7] border border-white/20 transition-all min-h-[44px]">
                        Inquire Custom Scope &rarr;
                    </a>
                </div>

            </div>

            <!-- Interactive Production Scope Estimator -->
            <div class="p-8 sm:p-12 rounded-2xl bg-[#121218] border border-white/[0.08] space-y-8">
                <div class="space-y-2">
                    <div class="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C8B28E]">DYNAMIC VALUATION ENGINE</div>
                    <h3 class="noir-display text-2xl sm:text-3xl text-[#F5F5F7]">Calculate Your Custom Scope</h3>
                    <p class="text-xs text-[#8E8E98] font-sans max-w-xl">
                        Adjust parameters to calculate an indicative investment for custom requirements. Base architecture fee begins at ₹10,000.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/[0.06]">
                    <!-- Control Sliders & Checks -->
                    <div class="lg:col-span-7 space-y-6">
                        <!-- Pages Slider -->
                        <div class="space-y-2">
                            <div class="flex items-center justify-between text-xs font-mono">
                                <label for="noir-calc-pages" class="text-[#F5F5F7]">Total Custom Pages (₹1,500/page):</label>
                                <span id="noir-calc-pages-val" class="text-[#C8B28E] font-bold">5 Pages</span>
                            </div>
                            <input type="range"
                                   id="noir-calc-pages"
                                   min="1"
                                   max="20"
                                   value="5"
                                   class="w-full accent-[#C8B28E] cursor-pointer bg-white/10 rounded-lg h-2" />
                        </div>

                        <!-- Checkboxes -->
                        <div class="space-y-3 pt-2">
                            <label class="flex items-center gap-3 cursor-pointer select-none py-2 min-h-[44px]">
                                <input type="checkbox" id="noir-calc-seo" class="w-4 h-4 rounded accent-[#C8B28E] bg-[#08080A] border-white/20" />
                                <span class="text-xs text-[#8E8E98] font-sans">
                                    Include <strong class="text-[#F5F5F7]">Local SEO Foundation</strong> (+₹17,500)
                                </span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer select-none py-2 min-h-[44px]">
                                <input type="checkbox" id="noir-calc-maint" class="w-4 h-4 rounded accent-[#C8B28E] bg-[#08080A] border-white/20" />
                                <span class="text-xs text-[#8E8E98] font-sans">
                                    Include <strong class="text-[#F5F5F7]">Annual Maintenance &amp; Care</strong> (+₹15,000)
                                </span>
                            </label>
                        </div>
                    </div>

                    <!-- Output Display Card -->
                    <div class="lg:col-span-5 bg-[#08080A] p-6 sm:p-8 rounded-xl border border-white/[0.08] text-center space-y-4">
                        <div class="text-[10px] font-mono uppercase tracking-widest text-[#8E8E98]">Indicative Production Total</div>
                        <div id="noir-calc-total" class="noir-display text-4xl sm:text-5xl font-bold text-[#F5F5F7] tracking-tight noir-tabular">
                            ₹17,500
                        </div>
                        <p class="text-[11px] text-[#8E8E98] font-sans">Transparent milestone contract. Zero hidden platform fees.</p>
                        <a href="/contact?tier=custom&estimate=17500"
                           id="noir-calc-cta"
                           class="inline-block w-full py-3 text-center text-xs font-mono uppercase tracking-widest font-semibold rounded-full bg-[#C8B28E] text-[#08080A] hover:bg-[#DECDB3] transition-all min-h-[44px] flex items-center justify-center">
                            Lock In This Estimate &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 06: THE SCREENING ROOM (Studio Principles)                  -->
    <!-- ================================================================= -->
    <section id="scene-screening" class="noir-scene py-24 sm:py-32 bg-[#08080A] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 06 // THE SCREENING ROOM</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Three Foundational Tenets of Digital Authority
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    Commercial websites fail when they prioritize agency vanity over customer utility. Our architectural philosophy is anchored in three non-negotiable standards.
                </p>
            </div>

            <!-- Monolithic Screening Statements -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Statement 01 -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#101016] border border-white/[0.08] space-y-4 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-4">
                        <span class="text-2xl font-mono text-[#C8B28E] font-bold">01</span>
                        <h3 class="noir-display text-2xl text-[#F5F5F7]">Lean by Design</h3>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed text-pretty">
                            We reject fragile page-builder plugins, bloated third-party scripts, and heavy client-side frameworks. Every kilobyte must earn its place on the mobile network. Clean HTML and CSS render instantaneously on 4G connections.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#C8B28E] tracking-widest uppercase">
                        Zero Framework Overhead
                    </div>
                </div>

                <!-- Statement 02 -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#101016] border border-white/[0.08] space-y-4 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-4">
                        <span class="text-2xl font-mono text-[#C8B28E] font-bold">02</span>
                        <h3 class="noir-display text-2xl text-[#F5F5F7]">Built for Local Conversion</h3>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed text-pretty">
                            Aesthetic elegance is meaningless if potential clients cannot find your phone number or driving directions within three seconds. Every layout is calibrated to convert high-intent searches into genuine business inquiries.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#C8B28E] tracking-widest uppercase">
                        High-Intent Contact Flow
                    </div>
                </div>

                <!-- Statement 03 -->
                <div class="p-8 sm:p-10 rounded-2xl bg-[#101016] border border-white/[0.08] space-y-4 flex flex-col justify-between hover:border-[#C8B28E]/40 transition-all">
                    <div class="space-y-4">
                        <span class="text-2xl font-mono text-[#C8B28E] font-bold">03</span>
                        <h3 class="noir-display text-2xl text-[#F5F5F7]">Complete Client Ownership</h3>
                        <p class="text-xs text-[#8E8E98] font-sans leading-relaxed text-pretty">
                            We do not rent your website to you. Upon final project settlement, you receive 100% full ownership of custom code, layout files, written copy, and domain access keys. No proprietary vendor lock-in.
                        </p>
                    </div>
                    <div class="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#C8B28E] tracking-widest uppercase">
                        100% Client Rights
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 07: THE DOSSIER (Confidential Review & Correspondence)       -->
    <!-- ================================================================= -->
    <section id="scene-dossier" class="noir-scene py-24 sm:py-32 bg-[#0D0D11] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>SCENE 07 // THE DOSSIER</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Request a Confidential Architectural Review
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    Submit your current web address or commercial project brief. We will analyze your mobile speed, local search markup, and conversion structure, delivering an actionable audit within 24 business hours.
                </p>
            </div>

            <!-- Intake Matrix & Contact Form -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                <!-- Left Column: Direct Studio Channels -->
                <div class="lg:col-span-5 space-y-8 font-sans">
                    <div class="p-8 rounded-2xl bg-[#121218] border border-white/[0.08] space-y-6">
                        <div class="text-xs font-mono uppercase tracking-[0.2em] text-[#C8B28E]">DIRECT CORRESPONDENCE</div>

                        <div class="space-y-4 text-xs text-[#8E8E98]">
                            <div>
                                <span class="block text-[#F5F5F7] font-semibold mb-1">Direct Studio Phone:</span>
                                <a href="tel:${CONFIG.phone.replace(/\s+/g, '')}" class="text-sm font-mono text-[#C8B28E] hover:underline">${CONFIG.phone}</a>
                            </div>

                            <div>
                                <span class="block text-[#F5F5F7] font-semibold mb-1">Studio Inquiries:</span>
                                <a href="mailto:${CONFIG.email}" class="text-sm font-mono text-[#C8B28E] hover:underline">${CONFIG.email}</a>
                            </div>

                            <div>
                                <span class="block text-[#F5F5F7] font-semibold mb-1">Direct WhatsApp Pathway:</span>
                                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="text-sm font-mono text-[#C8B28E] hover:underline">
                                    Initiate WhatsApp Discussion &rarr;
                                </a>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-white/10 text-[11px] font-mono text-[#8E8E98]">
                            Direct response from principal within 24 business hours.
                        </div>
                    </div>

                    <!-- Factual Studio Integrity Note -->
                    <div class="p-6 rounded-xl bg-[#121218] border border-white/[0.06] space-y-2 text-xs text-[#8E8E98]">
                        <div class="font-mono text-[#C8B28E] uppercase tracking-wider text-[10px]">Studio Privacy Guarantee:</div>
                        <p>We never share your information, sell marketing leads, or spam your inbox with automated drip campaigns. All communications are confidential and direct.</p>
                    </div>
                </div>

                <!-- Right Column: Requisition Form (/api/audit) -->
                <div class="lg:col-span-7 bg-[#121218] border border-white/[0.08] rounded-2xl p-8 sm:p-10 space-y-6">
                    <div class="space-y-2">
                        <div class="text-[10px] font-mono uppercase tracking-widest text-[#C8B28E]">REQUISITION ORDER // FORM AUDIT</div>
                        <h3 class="noir-display text-2xl text-[#F5F5F7]">Confidential Review Order</h3>
                    </div>

                    <!-- Feedback Banners -->
                    <div id="noir-audit-success" class="hidden p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 font-sans" role="alert">
                        <strong>Requisition Confirmed.</strong> Your technical audit request has been registered. The studio principal will review your architecture and respond within 24 business hours.
                    </div>
                    <div id="noir-audit-error" class="hidden p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 font-sans" role="alert">
                        Unable to process requisition. Please email us directly at ${CONFIG.email}.
                    </div>

                    <form id="noir-audit-form" class="space-y-5" novalidate>
                        <!-- Honeypot -->
                        <div class="hidden" aria-hidden="true">
                            <label for="noir-audit-gotcha">Do not fill this field</label>
                            <input type="text" id="noir-audit-gotcha" name="_gotcha" tabindex="-1" autocomplete="off" />
                        </div>

                        <div class="space-y-1.5">
                            <label for="noir-audit-url" class="block text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">
                                Current Website or Business Name *
                            </label>
                            <input type="text"
                                   id="noir-audit-url"
                                   name="url"
                                   required
                                   placeholder="e.g. www.yourbusiness.com"
                                   class="w-full px-4 py-3 rounded-lg bg-[#08080A] border border-white/15 text-xs font-sans text-[#F5F5F7] placeholder-white/30 focus:outline-none focus:border-[#C8B28E] focus:ring-1 focus:ring-[#C8B28E] transition-colors min-h-[44px]" />
                        </div>

                        <div class="space-y-1.5">
                            <label for="noir-audit-email" class="block text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">
                                Principal Contact Email *
                            </label>
                            <input type="email"
                                   id="noir-audit-email"
                                   name="email"
                                   required
                                   placeholder="principal@yourfirm.com"
                                   class="w-full px-4 py-3 rounded-lg bg-[#08080A] border border-white/15 text-xs font-sans text-[#F5F5F7] placeholder-white/30 focus:outline-none focus:border-[#C8B28E] focus:ring-1 focus:ring-[#C8B28E] transition-colors min-h-[44px]" />
                        </div>

                        <div class="space-y-1.5">
                            <label for="noir-audit-notes" class="block text-xs font-mono uppercase tracking-wider text-[#F5F5F7]">
                                Project Scope or Current Pain Points (Optional)
                            </label>
                            <textarea id="noir-audit-notes"
                                      name="notes"
                                      rows="3"
                                      placeholder="Briefly describe your goals (e.g. higher Google Maps visibility, modern mobile aesthetic, faster consultation inquiries)..."
                                      class="w-full px-4 py-3 rounded-lg bg-[#08080A] border border-white/15 text-xs font-sans text-[#F5F5F7] placeholder-white/30 focus:outline-none focus:border-[#C8B28E] focus:ring-1 focus:ring-[#C8B28E] transition-colors"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit"
                                    id="noir-audit-submit"
                                    class="w-full py-4 text-center text-xs font-mono uppercase tracking-widest font-semibold rounded-full bg-[#F5F5F7] text-[#08080A] hover:bg-[#E4E4E8] transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center">
                                Request Confidential Review &rarr;
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <!-- ================================================================= -->
    <!-- SCENE 08: STUDIO QUESTIONS (Accessible FAQ Inquiries)               -->
    <!-- ================================================================= -->
    <section id="scene-faqs" class="noir-scene py-24 sm:py-32 bg-[#08080A] text-[#F5F5F7] border-b border-white/[0.08] noir-spotlight-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <!-- Scene Header -->
            <div class="max-w-3xl space-y-4">
                <div class="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C8B28E] uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#C8B28E]"></span>
                    <span>STUDIO INQUIRIES // FAQ</span>
                </div>
                <h2 class="noir-display text-3xl sm:text-5xl font-normal text-[#F5F5F7] tracking-tight leading-tight text-balance">
                    Frequently Clarified Questions
                </h2>
                <p class="text-base text-[#8E8E98] leading-relaxed font-sans text-pretty">
                    Direct answers regarding code ownership, delivery timelines, search optimization, and hosting independence.
                </p>
            </div>

            <!-- Accessible Accordions -->
            <div class="space-y-4 max-w-4xl">
                ${FAQS.map((faq, idx) => `
                <div class="rounded-xl bg-[#101016] border border-white/[0.08] overflow-hidden">
                    <button type="button"
                            id="noir-faq-btn-${idx}"
                            class="noir-faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8B28E]"
                            aria-expanded="false"
                            aria-controls="noir-faq-panel-${idx}">
                        <div class="flex items-center gap-3">
                            <span class="text-xs font-mono text-[#C8B28E]">0${idx + 1}</span>
                            <span class="text-sm sm:text-base font-normal noir-display text-[#F5F5F7]">${escapeHTML(faq.q)}</span>
                        </div>
                        <span class="noir-faq-icon text-base font-mono text-[#C8B28E] shrink-0" aria-hidden="true">+</span>
                    </button>
                    <div id="noir-faq-panel-${idx}"
                         class="noir-faq-panel hidden px-6 pb-6 pt-1 border-t border-white/[0.04]"
                         role="region"
                         aria-labelledby="noir-faq-btn-${idx}">
                        <p class="text-xs sm:text-sm text-[#8E8E98] leading-relaxed font-sans">${escapeHTML(faq.a)}</p>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    const styles = `
        /* ============================================================= */
        /* NOIR EXPERIENCE STYLES (Cinematic Widescreen & Typography)    */
        /* ============================================================= */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&display=swap');

        html[data-experience="noir"] {
            --color-bg: #08080A;
            --color-surface: #101016;
            --color-card: #121218;
            --color-card-hover: #171720;
            --color-border: rgba(255, 255, 255, 0.08);
            --color-border-strong: rgba(255, 255, 255, 0.18);
            --color-text-main: #F5F5F7;
            --color-text-muted: #8E8E98;
            --color-faint: rgba(255, 255, 255, 0.03);
            --color-faint-hover: rgba(255, 255, 255, 0.06);
            --color-btn-bg: #F5F5F7;
            --color-btn-text: #08080A;
            --color-btn-hover: #E4E4E8;
            --color-nav-glass: rgba(8, 8, 10, 0.95);
            --color-accent: #C8B28E;
            --color-accent-light: #DECDB3;
        }

        /* Suppress global floating CTA in Noir to preserve cinematic letterbox composition */
        html[data-experience="noir"] #desktop-floating-cta {
            display: none !important;
        }

        /* Fullscreen Chapter Drawer Solid Background & Stacking */
        #noir-chapter-drawer {
            background-color: #08080A !important;
            z-index: 99999 !important;
        }

        /* Cinematic Headline Typography */
        .noir-display {
            font-family: 'Cinzel', 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;
            letter-spacing: -0.015em;
        }

        /* Tabular Figures for Number Stability */
        .noir-tabular {
            font-variant-numeric: tabular-nums;
        }

        /* Widescreen 2.39:1 Frame Ratio */
        .noir-widescreen-frame {
            aspect-ratio: 2.39 / 1;
        }
        @media (max-width: 768px) {
            .noir-widescreen-frame {
                aspect-ratio: 16 / 9;
            }
        }

        /* 4-Column Grid Utility (Guaranteed compiled CSS) */
        .noir-grid-4 {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        @media (min-width: 640px) {
            .noir-grid-4 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (min-width: 1024px) {
            .noir-grid-4 {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
        }

        /* Active Dossier Tab Highlight */
        .noir-dossier-tab.is-active {
            border-color: #C8B28E !important;
            background-color: #171720 !important;
            color: #F5F5F7 !important;
        }

        /* Signature Interaction 02: Subtle Aperture Pointer Spotlight */
        .noir-spotlight-surface {
            position: relative;
        }
        .noir-spotlight-surface::before {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            background: radial-gradient(650px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(200, 178, 142, 0.06), transparent 70%);
            z-index: 1;
        }
        .noir-spotlight-surface:hover::before {
            opacity: 1;
        }

        @media (max-width: 768px), (prefers-reduced-motion: reduce) {
            .noir-spotlight-surface::before {
                display: none !important;
            }
            .noir-scene {
                transition: none !important;
            }
        }
    `;

    const script = `
        (function() {
            window.initNoirInteractions = function() {
                // 1. Chapter Menu Drawer Toggle & Scroll Lock
                const drawerTrigger = document.getElementById('noir-chapter-trigger');
                const drawerClose = document.getElementById('noir-chapter-close');
                const drawer = document.getElementById('noir-chapter-drawer');

                if (drawerTrigger && drawer && drawerClose) {
                    function openDrawer() {
                        drawer.classList.remove('hidden');
                        drawerTrigger.setAttribute('aria-expanded', 'true');
                        document.body.style.overflow = 'hidden';
                        drawerClose.focus();
                    }

                    function closeDrawer() {
                        drawer.classList.add('hidden');
                        drawerTrigger.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = '';
                        drawerTrigger.focus();
                    }

                    drawerTrigger.addEventListener('click', openDrawer);
                    drawerClose.addEventListener('click', closeDrawer);

                    drawer.querySelectorAll('.noir-drawer-link').forEach(link => {
                        link.addEventListener('click', function() {
                            drawer.classList.add('hidden');
                            drawerTrigger.setAttribute('aria-expanded', 'false');
                            document.body.style.overflow = '';
                        });
                    });

                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
                            closeDrawer();
                        }
                    });
                }

                // 2. Signature Interaction 01: Scene Progress Observer
                const scenes = document.querySelectorAll('.noir-scene');
                const sceneNumEl = document.getElementById('noir-scene-num');
                const sceneTitleEl = document.getElementById('noir-scene-title');

                const sceneMetadata = {
                    'scene-title': { num: 'SCENE 00', title: 'Title Sequence' },
                    'scene-practice': { num: 'SCENE 01', title: 'The Practice' },
                    'scene-work': { num: 'SCENE 02', title: 'Selected Dossiers' },
                    'scene-subjects': { num: 'SCENE 03', title: 'The Subjects' },
                    'scene-method': { num: 'SCENE 04', title: 'The Method' },
                    'scene-investment': { num: 'SCENE 05', title: 'The Investment' },
                    'scene-screening': { num: 'SCENE 06', title: 'Screening Room' },
                    'scene-dossier': { num: 'SCENE 07', title: 'The Dossier' },
                    'scene-faqs': { num: 'SCENE 08', title: 'Studio Inquiries' }
                };

                if ('IntersectionObserver' in window && scenes.length > 0) {
                    window.__veloraNoirObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const id = entry.target.id;
                                const meta = sceneMetadata[id];
                                if (meta) {
                                    if (sceneNumEl) sceneNumEl.textContent = meta.num;
                                    if (sceneTitleEl) sceneTitleEl.textContent = meta.title;
                                }
                            }
                        });
                    }, { threshold: 0.25 });

                    scenes.forEach(s => window.__veloraNoirObserver.observe(s));
                }

                // 3. Signature Interaction 02: Aperture Pointer Spotlight
                let rafSpot = null;
                const spotlightSurfaces = document.querySelectorAll('.noir-spotlight-surface');
                if (window.innerWidth >= 768 && spotlightSurfaces.length > 0) {
                    spotlightSurfaces.forEach(surface => {
                        surface.addEventListener('pointermove', function(e) {
                            if (rafSpot) cancelAnimationFrame(rafSpot);
                            rafSpot = requestAnimationFrame(() => {
                                const rect = surface.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                surface.style.setProperty('--spot-x', x + 'px');
                                surface.style.setProperty('--spot-y', y + 'px');
                            });
                        });
                    });
                }

                // 4. Project Dossier Tabs Switcher
                const dossierTabs = document.querySelectorAll('.noir-dossier-tab');
                const dossierPanels = document.querySelectorAll('.noir-dossier-panel');

                dossierTabs.forEach((tab, index) => {
                    tab.addEventListener('click', function() {
                        dossierTabs.forEach(t => {
                            t.classList.remove('is-active');
                            t.setAttribute('aria-selected', 'false');
                            t.classList.add('bg-[#0E0E12]', 'text-[#8E8E98]');
                            t.classList.remove('bg-[#15151D]', 'text-[#F5F5F7]');
                        });

                        tab.classList.add('is-active');
                        tab.setAttribute('aria-selected', 'true');
                        tab.classList.remove('bg-[#0E0E12]', 'text-[#8E8E98]');
                        tab.classList.add('bg-[#15151D]', 'text-[#F5F5F7]');

                        dossierPanels.forEach((panel, pIdx) => {
                            if (pIdx === index) {
                                panel.classList.remove('hidden');
                            } else {
                                panel.classList.add('hidden');
                            }
                        });
                    });
                });

                // 5. Interactive Scope Estimator
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

                // 6. Confidential Review Order Form Submission (/api/audit)
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
                            if (submitBtn.disabled) return;
                            submitBtn.disabled = true;
                            submitBtn.textContent = 'Transmitting Requisition...';
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
                                const data = await res.json().catch(() => ({}));
                                if (errorDiv) {
                                    errorDiv.textContent = data.message || 'Unable to process requisition right now. Please email us directly.';
                                    errorDiv.classList.remove('hidden');
                                }
                            }
                        } catch (err) {
                            if (errorDiv) {
                                errorDiv.textContent = err.message || 'Unable to process requisition right now. Please email us directly.';
                                errorDiv.classList.remove('hidden');
                            }
                        } finally {
                            if (submitBtn) {
                                submitBtn.disabled = false;
                                submitBtn.textContent = 'Request Confidential Review \u2192';
                            }
                        }
                    });
                }

                // 7. Accessible FAQ Accordions
                const faqTriggers = document.querySelectorAll('.noir-faq-trigger');
                faqTriggers.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const panelId = this.getAttribute('aria-controls');
                        const panel = document.getElementById(panelId);
                        const isExpanded = this.getAttribute('aria-expanded') === 'true';
                        const icon = this.querySelector('.noir-faq-icon');

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

            // Complete lifecycle cleanup on experience unmount
            window.cleanupNoirInteractions = function() {
                document.body.style.overflow = '';
                if (window.__veloraNoirObserver) {
                    window.__veloraNoirObserver.disconnect();
                    window.__veloraNoirObserver = null;
                }
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', window.initNoirInteractions);
            } else {
                window.initNoirInteractions();
            }
        })();
    `;

    return {
        meta,
        headerContent: NoirHeader(currentPath),
        mainContent: content,
        footerContent: NoirFooter(),
        styles,
        script
    };
}

module.exports = {
    renderNoirExperience
};
