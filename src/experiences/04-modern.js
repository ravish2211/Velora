// ============================================================================ //
// VELORA DIGITAL — 04 MODERN EXPERIENCE PRESENTATION RENDERER                  //
// Art Direction: Interactive Spatial Design Canvas · Visual Playground        //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Modern Floating Island Command Dock
 * Compact floating control capsule with direct section beacons
 */
function ModernHeader(currentPath) {
    const dockLink = (hash, label, icon) => {
        return `<a href="${hash}" class="modern-nav-pill px-3 py-1.5 min-h-[36px] flex items-center gap-1.5 rounded-xl text-xs font-mono tracking-wide text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <span class="text-[11px] text-blue-400">${icon}</span>
            <span>${label}</span>
        </a>`;
    };

    const mobileLink = (hash, label, icon) => {
        return `<a href="${hash}" class="modern-mobile-link flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-xs font-mono tracking-wider text-slate-200 hover:bg-white/10 transition-colors">
            <span class="flex items-center gap-2.5">
                <span class="text-blue-400 text-sm">${icon}</span>
                <span>${label}</span>
            </span>
            <span class="text-[10px] text-slate-400 font-mono">→</span>
        </a>`;
    };

    return `
    <header class="modern-header sticky top-0 z-50 w-full transition-all duration-300" role="banner" aria-label="Modern Command Navigation">
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-2">
            <div class="modern-dock flex items-center justify-between px-3 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all">
                
                <!-- Brand Capsule -->
                <a href="/" class="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl min-h-[40px] px-1.5" id="modern-brand-logo" aria-label="Velora Digital Home">
                    <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 text-white flex items-center justify-center font-mono font-black text-xs shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                        VD
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-1.5">
                            <span class="font-display font-black text-sm tracking-tight text-white leading-none">VELORA</span>
                            <span class="px-1.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-widest bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold">04 // MODERN</span>
                        </div>
                        <span class="text-[8px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mt-0.5 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            INTERACTIVE CANVAS
                        </span>
                    </div>
                </a>

                <!-- Desktop Navigation Beacons -->
                <nav class="hidden lg:flex items-center gap-1 bg-black/40 border border-white/10 rounded-xl px-2 py-1 shadow-inner" aria-label="Modern Canvas Navigation">
                    ${dockLink('#modern-canvas', 'Canvas', '◈')}
                    ${dockLink('#modern-gallery', 'Work Gallery', '◎')}
                    ${dockLink('#modern-field', 'Capabilities', '▦')}
                    ${dockLink('#modern-continuum', 'Continuum', '◬')}
                    ${dockLink('#modern-configurator', 'Configurator', '⚙')}
                </nav>

                <!-- Quick Action CTA & Mobile Trigger -->
                <div class="flex items-center gap-2">
                    <a href="#modern-configurator" class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-mono font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                        <span>Launch Scope</span>
                        <span class="text-xs">→</span>
                    </a>
                    <button type="button" id="modern-mobile-menu-btn" class="lg:hidden p-2 min-h-[44px] min-w-[44px] rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="modern-mobile-drawer">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="modern-mobile-drawer" class="hidden lg:hidden fixed inset-x-3 top-20 z-50 p-4 rounded-2xl bg-slate-900/98 backdrop-blur-2xl border border-white/15 shadow-2xl transition-all" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">SPATIAL INDEX</span>
                <button type="button" id="modern-mobile-close-btn" class="p-1 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Close menu">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col gap-1">
                ${mobileLink('#modern-canvas', 'Interactive Design Canvas', '◈')}
                ${mobileLink('#modern-gallery', 'Visual Work Gallery', '◎')}
                ${mobileLink('#modern-field', 'Asymmetric Color Field', '▦')}
                ${mobileLink('#modern-continuum', 'Delivery Continuum', '◬')}
                ${mobileLink('#modern-configurator', 'Studio Configurator', '⚙')}
                ${mobileLink('#modern-contact', 'Start Project Intake', '✉')}
            </div>
            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span class="text-[10px] font-mono text-slate-400">VELORA DIGITAL // 2026</span>
                <a href="#modern-configurator" class="text-xs font-mono font-bold text-blue-400 hover:underline">Estimate Scope →</a>
            </div>
        </div>
    </header>`;
}

/**
 * Modern Architectural Studio Footer
 */
function ModernFooter() {
    return `
    <footer class="modern-footer border-t border-white/10 bg-slate-950 text-slate-400 py-12" role="contentinfo">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                <div class="space-y-3">
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">VD</div>
                        <span class="font-display font-bold text-sm tracking-tight text-white">VELORA DIGITAL</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed font-mono">
                        Boutique digital studio engineering high-conversion web architectures and structured local visibility.
                    </p>
                    <div class="text-[10px] font-mono text-slate-400 flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>04 // MODERN PLAYGROUND</span>
                    </div>
                </div>

                <div>
                    <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-3">CANVAS INDEX</h3>
                    <ul class="space-y-2 text-xs font-mono text-slate-400">
                        <li><a href="#modern-canvas" class="hover:text-blue-400 transition-colors">Opening Canvas</a></li>
                        <li><a href="#modern-gallery" class="hover:text-blue-400 transition-colors">Visual Work Gallery</a></li>
                        <li><a href="#modern-field" class="hover:text-blue-400 transition-colors">Asymmetric Capabilities</a></li>
                        <li><a href="#modern-continuum" class="hover:text-blue-400 transition-colors">Delivery Continuum</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-3">PLATFORM TIERS</h3>
                    <ul class="space-y-2 text-xs font-mono text-slate-400">
                        <li><a href="#modern-configurator" class="hover:text-blue-400 transition-colors">Essential Web Build (₹14,999)</a></li>
                        <li><a href="#modern-configurator" class="hover:text-blue-400 transition-colors">Professional Platform (₹34,999)</a></li>
                        <li><a href="#modern-configurator" class="hover:text-blue-400 transition-colors">Structured Local SEO (+₹17,500)</a></li>
                        <li><a href="#modern-configurator" class="hover:text-blue-400 transition-colors">Annual Site Care (+₹15,000)</a></li>
                    </ul>
                </div>

                <div class="space-y-3">
                    <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-3">STUDIO PALETTE</h3>
                    <p class="text-xs text-slate-400 font-mono">Switch semantic color space:</p>
                    <div class="relative">
                        <button type="button" id="modern-theme-selector-btn" class="w-full px-3 py-2 min-h-[40px] rounded-xl bg-slate-900 border border-white/15 text-xs font-mono text-slate-200 flex items-center justify-between hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-haspopup="true" aria-expanded="false">
                            <span class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span id="modern-theme-label">Midnight / Cobalt</span>
                            </span>
                            <span class="text-[10px] text-slate-400">▼</span>
                        </button>
                        <div id="modern-theme-menu" class="hidden absolute left-0 right-0 bottom-full mb-1 z-50 p-1.5 rounded-xl bg-slate-900 border border-white/15 shadow-2xl space-y-1" role="menu">
                            <button type="button" class="modern-theme-opt w-full text-left px-3 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2" data-theme-value="midnight" role="menuitem">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span> Midnight / Cobalt
                            </button>
                            <button type="button" class="modern-theme-opt w-full text-left px-3 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2" data-theme-value="onyx" role="menuitem">
                                <span class="w-2 h-2 rounded-full bg-amber-500"></span> Onyx / Champagne
                            </button>
                            <button type="button" class="modern-theme-opt w-full text-left px-3 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2" data-theme-value="obsidian" role="menuitem">
                                <span class="w-2 h-2 rounded-full bg-slate-400"></span> Obsidian / Titanium
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
                <p>© 2026 Velora Digital. All Rights Reserved. Engineered Native SSR HTML/CSS.</p>
                <div class="flex items-center gap-4">
                    <a href="#modern-configurator" class="hover:text-white transition-colors">Scope Calculator</a>
                    <span>·</span>
                    <a href="#modern-contact" class="hover:text-white transition-colors">Technical Intake</a>
                </div>
            </div>
        </div>
    </footer>`;
}

/**
 * Main Experience 04 — Modern Presentation Renderer
 */
function renderModernExperience(currentPath = '/') {
    const meta = {
        title: "Velora Digital | Modern Interactive Digital Studio & Visual Canvas",
        description: "Explore the Modern interactive design canvas: living website specimens, tactile configurator, and structured local visibility engineering for high-trust commercial practices.",
        canonicalUrl: "https://veloradigital.com/",
        ogImage: "https://veloradigital.com/og-image.jpg"
    };

    const content = `
    <div class="modern-playground-root w-full overflow-hidden bg-[#0a0b12] text-slate-100 selection:bg-blue-500 selection:text-white font-sans">

        <!-- =================================================================== -->
        <!-- ENVIRONMENT 01: THE OPENING CANVAS (#modern-canvas)                 -->
        <!-- Spatial Poster Canvas: NOT 50/50 hero! Layered, full-bleed & interactive -->
        <!-- =================================================================== -->
        <section id="modern-canvas" class="relative pt-6 pb-16 md:pt-10 md:pb-24 border-b border-white/10 bg-gradient-to-b from-slate-950 via-[#0d0f1a] to-[#0a0b12]">
            
            <!-- Ambient Background Mesh Glows -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div class="absolute -top-32 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
                <div class="absolute top-48 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                
                <!-- 1. Oversized Kinetic Headline Band -->
                <div class="mb-6 md:mb-8">
                    <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 mb-3">
                        <span class="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-blue-400 font-bold">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                            STUDIO SPECIMEN 2026
                        </span>
                        <span class="hidden sm:inline">HIGH-CONVERSION ARCHITECTURE // ZERO FRAMEWORK TAX</span>
                        <span class="text-emerald-400 font-bold">100% OWNED CODE</span>
                    </div>

                    <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.98] uppercase">
                        DIGITAL SPACES <br/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">THAT MOVE</span>
                        <span class="font-serif italic font-normal text-slate-400 lowercase"> clients.</span>
                    </h1>
                </div>

                <!-- 2. The Living Interactive Stage Canvas (Centerpiece Workspace) -->
                <div class="rounded-3xl border border-white/15 bg-slate-900/80 shadow-2xl overflow-hidden backdrop-blur-xl relative">
                    
                    <!-- Top Floating Control Ribbon -->
                    <div class="px-4 sm:px-6 py-3 border-b border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-3">
                        <div class="flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block"></span>
                            <span class="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">interactive_specimen.view</span>
                        </div>

                        <!-- Interactive Sector Pills -->
                        <div class="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10" role="tablist" aria-label="Interactive Canvas Sector Selector">
                            <button type="button" class="modern-canvas-sector-tab px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all bg-blue-600 text-white shadow-sm" data-canvas-sector="clinic" role="tab" aria-selected="true" aria-controls="canvas-panel-clinic">
                                01 CLINIC
                            </button>
                            <button type="button" class="modern-canvas-sector-tab px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all text-slate-400 hover:text-white" data-canvas-sector="realty" role="tab" aria-selected="false" aria-controls="canvas-panel-realty">
                                02 REALTY
                            </button>
                            <button type="button" class="modern-canvas-sector-tab px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all text-slate-400 hover:text-white" data-canvas-sector="dining" role="tab" aria-selected="false" aria-controls="canvas-panel-dining">
                                03 DINING
                            </button>
                        </div>

                        <div class="text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                            <span>LIVE SPECIMEN</span>
                        </div>
                    </div>

                    <!-- Canvas Interactive Surface Area -->
                    <div class="p-6 sm:p-8 lg:p-10 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between relative bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900">
                        
                        <!-- CLINIC SPECIMEN -->
                        <div id="canvas-panel-clinic" class="modern-canvas-panel space-y-6" role="tabpanel">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                                <div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                        HEALTHCARE CONVERSION ENGINE
                                    </span>
                                    <h2 class="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                                        Aurora Aesthetic & Dermatology Studio
                                    </h2>
                                    <p class="text-xs sm:text-sm font-mono text-slate-400 mt-0.5">High-trust patient appointment scheduling with direct WhatsApp concierge sync.</p>
                                </div>
                                <div class="text-right hidden sm:block">
                                    <div class="text-xs font-mono text-emerald-400 font-bold">✓ Pure Native SSR</div>
                                    <div class="text-[10px] font-mono text-slate-400">Zero Framework Overhead</div>
                                </div>
                            </div>

                            <!-- Interactive Mini Procedure Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer">
                                    <div class="text-[10px] font-mono text-blue-400 font-bold">01 // FACIAL AESTHETICS</div>
                                    <div class="text-sm font-bold text-white mt-1">Micro-Needling & PRP</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2 flex items-center justify-between">
                                        <span>45 Min Session</span>
                                        <span class="text-emerald-400">Slots Open</span>
                                    </div>
                                </div>

                                <div class="p-4 rounded-2xl bg-white/5 border border-blue-500/40 bg-blue-500/10 transition-all cursor-pointer">
                                    <div class="text-[10px] font-mono text-blue-400 font-bold">02 // DERMATOLOGY</div>
                                    <div class="text-sm font-bold text-white mt-1">Laser Skin Rejuvenation</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2 flex items-center justify-between">
                                        <span>Dr. Sen Attending</span>
                                        <span class="text-blue-400 font-bold">Selected</span>
                                    </div>
                                </div>

                                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer">
                                    <div class="text-[10px] font-mono text-blue-400 font-bold">03 // CLINIC VERIFICATION</div>
                                    <div class="text-sm font-bold text-white mt-1">Verified Schema & Hours</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2 flex items-center justify-between">
                                        <span>Park Street, Kolkata</span>
                                        <span class="text-purple-400">Medical Entity</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Interactive Booking Rail -->
                            <div class="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-mono text-slate-300 font-bold">SELECT CONSULTATION SLOT:</span>
                                    <div class="flex items-center gap-2">
                                        <button type="button" class="modern-slot-btn px-2.5 py-1 rounded-lg text-xs font-mono border border-white/20 hover:border-blue-400 transition-colors">10:30 AM</button>
                                        <button type="button" class="modern-slot-btn px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-600 text-white font-bold border border-blue-500">02:15 PM</button>
                                        <button type="button" class="modern-slot-btn px-2.5 py-1 rounded-lg text-xs font-mono border border-white/20 hover:border-blue-400 transition-colors">04:45 PM</button>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                                        <span>🔒</span> Encrypted Intake
                                    </span>
                                    <a href="#modern-gallery" class="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold shadow-sm transition-all">
                                        Inspect Full Case →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- REALTY SPECIMEN -->
                        <div id="canvas-panel-realty" class="modern-canvas-panel hidden space-y-6" role="tabpanel">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                                <div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                        BOUTIQUE REAL ESTATE PORTAL
                                    </span>
                                    <h2 class="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                                        Aarav Luxury Properties & Advisory
                                    </h2>
                                    <p class="text-xs sm:text-sm font-mono text-slate-400 mt-0.5">Confidential asset dossiers and direct partner inquiry for high-value commercial acquisitions.</p>
                                </div>
                                <div class="text-right hidden sm:block">
                                    <div class="text-xs font-mono text-amber-400 font-bold">BKC & South Mumbai</div>
                                    <div class="text-[10px] font-mono text-slate-400">Zero Portal Intermediaries</div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div class="text-[10px] font-mono text-amber-400 font-bold">ASSET 01 // PENTHOUSE</div>
                                    <div class="text-sm font-bold text-white mt-1">Worli Seaface Triplex</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2">Private Architectural Plan</div>
                                </div>
                                <div class="p-4 rounded-2xl bg-white/5 border border-amber-500/40 bg-amber-500/10">
                                    <div class="text-[10px] font-mono text-amber-400 font-bold">ASSET 02 // COMMERCIAL</div>
                                    <div class="text-sm font-bold text-white mt-1">BKC Prime Office Floor</div>
                                    <div class="text-xs text-amber-400 font-mono mt-2 font-bold">Direct Partner Lead</div>
                                </div>
                                <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div class="text-[10px] font-mono text-amber-400 font-bold">ASSET 03 // DISCOVERY</div>
                                    <div class="text-sm font-bold text-white mt-1">RealEstateAgent Schema</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2">Verified GeoRadius</div>
                                </div>
                            </div>

                            <div class="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span class="text-xs font-mono text-slate-300">REQUEST CONFIDENTIAL DOSSIER // DIRECT ADVISOR LINE:</span>
                                <div class="flex items-center gap-3">
                                    <span class="text-xs font-mono text-amber-400 font-bold">+91 92791 80000</span>
                                    <a href="#modern-gallery" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold shadow-sm transition-all">
                                        Inspect Full Case →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- DINING SPECIMEN -->
                        <div id="canvas-panel-dining" class="modern-canvas-panel hidden space-y-6" role="tabpanel">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                                <div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        PROGRESSIVE HOSPITALITY ENGINE
                                    </span>
                                    <h2 class="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                                        The Spice Room & Botanical Lounge
                                    </h2>
                                    <p class="text-xs sm:text-sm font-mono text-slate-400 mt-0.5">Sensory evening tasting menus and direct seat reservations eliminating commission portals.</p>
                                </div>
                                <div class="text-right hidden sm:block">
                                    <div class="text-xs font-mono text-purple-400 font-bold">Bangalore, Indiranagar</div>
                                    <div class="text-[10px] font-mono text-slate-400">100% Direct Table Holds</div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div class="text-[10px] font-mono text-purple-400 font-bold">MENU 01 // BOTANICAL</div>
                                    <div class="text-sm font-bold text-white mt-1">7-Course Tasting Journey</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2">Cardamom Gin Pairing</div>
                                </div>
                                <div class="p-4 rounded-2xl bg-white/5 border border-purple-500/40 bg-purple-500/10">
                                    <div class="text-[10px] font-mono text-purple-400 font-bold">SEATING // INTIMATE</div>
                                    <div class="text-sm font-bold text-white mt-1">Chef's Cellar Counter</div>
                                    <div class="text-xs text-purple-400 font-mono mt-2 font-bold">12 Covers Max</div>
                                </div>
                                <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div class="text-[10px] font-mono text-purple-400 font-bold">SCHEMA // DISCOVERY</div>
                                    <div class="text-sm font-bold text-white mt-1">Restaurant Rich Snippets</div>
                                    <div class="text-xs text-slate-400 font-mono mt-2">Accepted Currencies & Hours</div>
                                </div>
                            </div>

                            <div class="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span class="text-xs font-mono text-slate-300">SELECT PARTY SIZE FOR DIRECT HOLD:</span>
                                <div class="flex items-center gap-2">
                                    <button type="button" class="modern-slot-btn px-2.5 py-1 rounded-lg text-xs font-mono border border-white/20 hover:border-purple-400">2 Guests</button>
                                    <button type="button" class="modern-slot-btn px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-600 text-white font-bold border border-purple-500">4 Guests</button>
                                    <button type="button" class="modern-slot-btn px-2.5 py-1 rounded-lg text-xs font-mono border border-white/20 hover:border-purple-400">Private Dining</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- 3. Bottom Spatial Action Ribbons -->
                <div class="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div class="flex flex-wrap items-center gap-3">
                        <a href="#modern-gallery" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2">
                            <span>Inspect Visual Work Gallery</span>
                            <span>↓</span>
                        </a>
                        <a href="#modern-configurator" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono text-xs font-bold transition-all flex items-center gap-2">
                            <span>Open Studio Configurator</span>
                            <span>⚙</span>
                        </a>
                    </div>
                    <div class="text-xs font-mono text-slate-400 flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>Touch or click interactive controls to test living behaviors</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- =================================================================== -->
        <!-- ENVIRONMENT 02: THE VISUAL WORK GALLERY (#modern-gallery)           -->
        <!-- Authentic rendered website compositions, NOT bullet cards!          -->
        <!-- =================================================================== -->
        <section id="modern-gallery" class="py-16 md:py-24 border-b border-white/10 bg-[#0c0d16] relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Gallery Header -->
                <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
                    <div>
                        <span class="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">02 // COMMISSIONED WORK</span>
                        <h2 class="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
                            VISUAL WORK GALLERY
                        </h2>
                    </div>

                    <!-- Dual Interactive Controllers (Project & Mode) -->
                    <div class="flex flex-wrap items-center gap-3">
                        <!-- Project Selector -->
                        <div class="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10" role="tablist" aria-label="Work Project Selector">
                            <button type="button" class="modern-gallery-proj-btn px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-blue-600 text-white transition-all" data-proj="aurora" role="tab" aria-selected="true">
                                01 AURORA CLINIC
                            </button>
                            <button type="button" class="modern-gallery-proj-btn px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-400 hover:text-white transition-all" data-proj="aarav" role="tab" aria-selected="false">
                                02 AARAV PROPERTIES
                            </button>
                            <button type="button" class="modern-gallery-proj-btn px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-400 hover:text-white transition-all" data-proj="spice" role="tab" aria-selected="false">
                                03 THE SPICE ROOM
                            </button>
                        </div>

                        <!-- Mode Selector -->
                        <div class="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10" role="tablist" aria-label="Inspection Mode">
                            <button type="button" class="modern-gallery-mode-btn px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-white/15 text-white transition-all" data-mode="desktop" role="tab" aria-selected="true">
                                Desktop
                            </button>
                            <button type="button" class="modern-gallery-mode-btn px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-400 hover:text-white transition-all" data-mode="mobile" role="tab" aria-selected="false">
                                Mobile
                            </button>
                            <button type="button" class="modern-gallery-mode-btn px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-400 hover:text-white transition-all" data-mode="funnel" role="tab" aria-selected="false">
                                Funnel
                            </button>
                        </div>
                    </div>
                </div>

                <!-- High-Fidelity Website Specimen Container -->
                <div id="modern-work-specimen-root" class="rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl p-4 sm:p-8 backdrop-blur-xl transition-all duration-300">
                    
                    <!-- 1. AURORA CLINIC SPECIMEN -->
                    <div id="specimen-aurora" class="modern-project-specimen space-y-6">
                        
                        <!-- Desktop Viewport Composition -->
                        <div class="modern-view-desktop rounded-2xl border border-white/15 bg-slate-950 overflow-hidden shadow-inner">
                            <!-- Mini Browser Top Bar -->
                            <div class="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                                <div class="flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                                    <span class="text-slate-400 ml-2">https://auroraaesthetics.in</span>
                                </div>
                                <span class="text-blue-400 font-bold">KOLKATA // DERMATOLOGY</span>
                            </div>

                            <!-- Rendered Website Composition -->
                            <div class="p-6 sm:p-10 space-y-8 bg-gradient-to-br from-slate-950 via-[#0e101c] to-slate-950">
                                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div class="font-serif italic text-xl sm:text-2xl text-white tracking-wide">AURORA CLINIC</div>
                                    <div class="hidden sm:flex items-center gap-6 text-xs font-mono text-slate-300">
                                        <span>Treatments</span>
                                        <span>Physicians</span>
                                        <span>Results</span>
                                        <span class="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold">Book Consult</span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    <div class="lg:col-span-7 space-y-4">
                                        <span class="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase">
                                            AESTHETIC DERMATOLOGY & SURGICAL PRECISION
                                        </span>
                                        <h3 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                                            Restoring balance with <span class="italic text-blue-300">clinical restraint</span>.
                                        </h3>
                                        <p class="text-xs sm:text-sm font-mono text-slate-400 max-w-lg leading-relaxed">
                                            Board-certified cosmetic dermatologists delivering bespoke facial rejuvenation, laser protocols, and non-surgical body contouring in Park Street.
                                        </p>
                                        <div class="flex items-center gap-3 pt-2">
                                            <button type="button" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold">Reserve Appointment</button>
                                            <button type="button" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs">View Credentials</button>
                                        </div>
                                    </div>

                                    <!-- Visual Treatment Specimen Card -->
                                    <div class="lg:col-span-5 rounded-2xl border border-blue-500/30 bg-blue-950/20 p-5 space-y-3">
                                        <div class="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">TREATMENT ARCHITECTURE</div>
                                        <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                            <span class="text-xs font-bold text-white">Full-Face Micro-Sculpting</span>
                                            <span class="text-xs font-mono text-blue-400">Dr. Sen, MD</span>
                                        </div>
                                        <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                            <span class="text-xs font-bold text-white">Targeted Pigmentation Laser</span>
                                            <span class="text-xs font-mono text-emerald-400">Slots Open</span>
                                        </div>
                                        <div class="p-2.5 rounded-xl bg-blue-500/20 text-center text-xs font-mono text-blue-300 font-bold">
                                            WhatsApp Concierge Synchronized
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Viewport Composition (Hidden by default, shown in Mobile mode) -->
                        <div class="modern-view-mobile hidden flex justify-center py-4">
                            <div class="w-full max-w-[340px] rounded-3xl border-4 border-slate-700 bg-slate-950 p-4 shadow-2xl space-y-4">
                                <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-white/10 pb-2">
                                    <span>09:41</span>
                                    <span class="w-16 h-3.5 rounded-full bg-slate-800 inline-block"></span>
                                    <span>5G 100%</span>
                                </div>
                                <div class="font-serif italic text-lg text-white">AURORA CLINIC</div>
                                <div class="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-2">
                                    <div class="text-xs font-bold text-white">Cosmetic Consultation</div>
                                    <div class="text-[10px] font-mono text-blue-400">Direct Doctor WhatsApp Routing</div>
                                    <button type="button" class="w-full py-2 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold">Instant Booking →</button>
                                </div>
                                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                                    Park Street Commercial Hub, Kolkata
                                </div>
                            </div>
                        </div>

                        <!-- Funnel Diagram (Hidden by default, shown in Funnel mode) -->
                        <div class="modern-view-funnel hidden p-6 rounded-2xl border border-white/15 bg-slate-950 font-mono text-xs space-y-4">
                            <div class="text-sm font-bold text-blue-400">// AURORA CONVERSION FUNNEL ARCHITECTURE</div>
                            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-blue-400 font-bold">01 INTENT SEARCH</div>
                                    <div class="text-slate-300 mt-1">"Aesthetic clinic Park Street" high-intent Google query.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-purple-400 font-bold">02 SCHEMA RICH CARD</div>
                                    <div class="text-slate-300 mt-1">MedicalBusiness JSON-LD reveals verified hours and telephone.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-indigo-400 font-bold">03 NATIVE SSR LANDING</div>
                                    <div class="text-slate-300 mt-1">Lightweight server-rendered mobile experience with instant access.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                                    <div class="text-emerald-400 font-bold">04 1-TAP INTAKE</div>
                                    <div class="text-slate-200 mt-1">Direct slot hold synced directly to clinic receptionist.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- 2. AARAV PROPERTIES SPECIMEN -->
                    <div id="specimen-aarav" class="modern-project-specimen hidden space-y-6">
                        
                        <div class="modern-view-desktop rounded-2xl border border-white/15 bg-slate-950 overflow-hidden shadow-inner">
                            <div class="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                                <div class="flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                                    <span class="text-slate-400 ml-2">https://aaravproperties.com</span>
                                </div>
                                <span class="text-amber-400 font-bold">MUMBAI // REAL ESTATE ADVISORY</span>
                            </div>

                            <div class="p-6 sm:p-10 space-y-8 bg-gradient-to-br from-slate-950 via-[#18140c] to-slate-950">
                                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div class="font-display font-black text-xl text-white tracking-widest uppercase">AARAV ADVISORY</div>
                                    <div class="hidden sm:flex items-center gap-6 text-xs font-mono text-slate-300">
                                        <span>Private Folio</span>
                                        <span>BKC Commercial</span>
                                        <span>Worli Villas</span>
                                        <span class="px-3 py-1 rounded-lg bg-amber-500 text-black font-bold">Private Dossier</span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    <div class="lg:col-span-7 space-y-4">
                                        <span class="px-2.5 py-1 rounded-lg text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold uppercase">
                                            HIGH-VALUE RESIDENTIAL & COMMERCIAL ACQUISITIONS
                                        </span>
                                        <h3 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                            Private dossiers for <span class="text-amber-400">discerning investors</span>.
                                        </h3>
                                        <p class="text-xs sm:text-sm font-mono text-slate-400 max-w-lg leading-relaxed">
                                            Advising family offices and corporate leaders on prime Mumbai freehold real estate. Zero public aggregator clutter, 100% confidential.
                                        </p>
                                        <div class="flex items-center gap-3 pt-2">
                                            <button type="button" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold">Request Asset Dossier</button>
                                            <button type="button" class="px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-xs">Direct Advisor Line</button>
                                        </div>
                                    </div>

                                    <div class="lg:col-span-5 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 space-y-3">
                                        <div class="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">CURATED ASSETS</div>
                                        <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                            <span class="text-xs font-bold text-white">Worli Seaface Penthouse</span>
                                            <span class="text-xs font-mono text-amber-400">Exclusive</span>
                                        </div>
                                        <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                            <span class="text-xs font-bold text-white">BKC Commercial Office Wing</span>
                                            <span class="text-xs font-mono text-emerald-400">Clear Title</span>
                                        </div>
                                        <div class="p-2.5 rounded-xl bg-amber-500/20 text-center text-xs font-mono text-amber-300 font-bold">
                                            RealEstateAgent Schema Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modern-view-mobile hidden flex justify-center py-4">
                            <div class="w-full max-w-[340px] rounded-3xl border-4 border-slate-700 bg-slate-950 p-4 shadow-2xl space-y-4">
                                <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-white/10 pb-2">
                                    <span>09:41</span>
                                    <span class="w-16 h-3.5 rounded-full bg-slate-800 inline-block"></span>
                                    <span>5G 100%</span>
                                </div>
                                <div class="font-display font-black text-base text-white">AARAV ADVISORY</div>
                                <div class="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-2">
                                    <div class="text-xs font-bold text-white">Confidential Asset Dossier</div>
                                    <div class="text-[10px] font-mono text-amber-400">Verified WhatsApp Inquiry</div>
                                    <button type="button" class="w-full py-2 rounded-lg bg-amber-500 text-black font-mono text-xs font-bold">Access Dossier →</button>
                                </div>
                            </div>
                        </div>

                        <div class="modern-view-funnel hidden p-6 rounded-2xl border border-white/15 bg-slate-950 font-mono text-xs space-y-4">
                            <div class="text-sm font-bold text-amber-400">// AARAV PROPERTY CONVERSION FUNNEL</div>
                            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-amber-400 font-bold">01 HNWI INQUIRY</div>
                                    <div class="text-slate-300 mt-1">Targeted investor search for Bandra & Worli assets.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-amber-300 font-bold">02 ZERO PORTALS</div>
                                    <div class="text-slate-300 mt-1">Direct private site avoids broker spam and fake listings.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-emerald-400 font-bold">03 VERIFIED BLUEPRINTS</div>
                                    <div class="text-slate-300 mt-1">Floor plans and regulatory clearances presented cleanly.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40">
                                    <div class="text-amber-400 font-bold">04 PARTNER DISPATCH</div>
                                    <div class="text-slate-200 mt-1">Direct private appointment set with founding partner.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- 3. THE SPICE ROOM SPECIMEN -->
                    <div id="specimen-spice" class="modern-project-specimen hidden space-y-6">
                        
                        <div class="modern-view-desktop rounded-2xl border border-white/15 bg-slate-950 overflow-hidden shadow-inner">
                            <div class="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                                <div class="flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                                    <span class="text-slate-400 ml-2">https://thespiceroom.in</span>
                                </div>
                                <span class="text-purple-400 font-bold">BANGALORE // PROGRESSIVE DINING</span>
                            </div>

                            <div class="p-6 sm:p-10 space-y-8 bg-gradient-to-br from-slate-950 via-[#140c1a] to-slate-950">
                                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div class="font-serif text-xl sm:text-2xl text-white tracking-wider">THE SPICE ROOM</div>
                                    <div class="hidden sm:flex items-center gap-6 text-xs font-mono text-slate-300">
                                        <span>Tasting Menu</span>
                                        <span>Cellar</span>
                                        <span>Chef's Counter</span>
                                        <span class="px-3 py-1 rounded-lg bg-purple-600 text-white font-bold">Hold Table</span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    <div class="lg:col-span-7 space-y-4">
                                        <span class="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold uppercase">
                                            PROGRESSIVE BOTANICAL CUISINE & COCKTAILS
                                        </span>
                                        <h3 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                                            Sensory Indian dining with <span class="italic text-purple-300">zero commissions</span>.
                                        </h3>
                                        <p class="text-xs sm:text-sm font-mono text-slate-400 max-w-lg leading-relaxed">
                                            A 7-course seasonal tasting menu celebrating indigenous coastal botanicals. Direct table reservations eliminating aggregator cuts.
                                        </p>
                                        <div class="flex items-center gap-3 pt-2">
                                            <button type="button" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold">Reserve Evening Service</button>
                                            <button type="button" class="px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-xs">Explore Cellar</button>
                                        </div>
                                    </div>

                                    <div class="lg:col-span-5 rounded-2xl border border-purple-500/30 bg-purple-950/20 p-5 space-y-3">
                                        <div class="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-widest">EVENING TASTING</div>
                                        <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                            <span class="text-xs font-bold text-white">Cardamom Botanical Duck</span>
                                            <span class="text-xs font-mono text-purple-400">Course 04</span>
                                        </div>
                                        <div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                            <span class="text-xs font-bold text-white">Cellar Seating (12 Covers)</span>
                                            <span class="text-xs font-mono text-emerald-400">Tables Left</span>
                                        </div>
                                        <div class="p-2.5 rounded-xl bg-purple-500/20 text-center text-xs font-mono text-purple-300 font-bold">
                                            Restaurant Schema & Direct SMS Sync
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modern-view-mobile hidden flex justify-center py-4">
                            <div class="w-full max-w-[340px] rounded-3xl border-4 border-slate-700 bg-slate-950 p-4 shadow-2xl space-y-4">
                                <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-white/10 pb-2">
                                    <span>09:41</span>
                                    <span class="w-16 h-3.5 rounded-full bg-slate-800 inline-block"></span>
                                    <span>5G 100%</span>
                                </div>
                                <div class="font-serif text-base text-white">THE SPICE ROOM</div>
                                <div class="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                                    <div class="text-xs font-bold text-white">Table Reservation</div>
                                    <div class="text-[10px] font-mono text-purple-400">Direct Hold • Zero Cut</div>
                                    <button type="button" class="w-full py-2 rounded-lg bg-purple-600 text-white font-mono text-xs font-bold">Confirm Seating →</button>
                                </div>
                            </div>
                        </div>

                        <div class="modern-view-funnel hidden p-6 rounded-2xl border border-white/15 bg-slate-950 font-mono text-xs space-y-4">
                            <div class="text-sm font-bold text-purple-400">// THE SPICE ROOM HOSPITALITY CONVERSION</div>
                            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-purple-400 font-bold">01 LOCAL DINING</div>
                                    <div class="text-slate-300 mt-1">High-intent searches for degustation dining in Indiranagar.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-purple-300 font-bold">02 VISUAL MENU</div>
                                    <div class="text-slate-300 mt-1">Sensory dish presentation and sommelier pairings.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                    <div class="text-emerald-400 font-bold">03 DIRECT HOLD</div>
                                    <div class="text-slate-300 mt-1">Immediate SMS/WhatsApp booking confirmation.</div>
                                </div>
                                <div class="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/40">
                                    <div class="text-purple-400 font-bold">04 ZERO AGGREGATOR</div>
                                    <div class="text-slate-200 mt-1">Eliminates 15-25% table commission taxes forever.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

        <!-- =================================================================== -->
        <!-- ENVIRONMENT 03: THE ASYMMETRIC COLOR FIELD (#modern-field)          -->
        <!-- Large non-uniform spatial blocks with bold colored surfaces         -->
        <!-- =================================================================== -->
        <section id="modern-field" class="py-16 md:py-24 border-b border-white/10 bg-[#0a0b12]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="mb-10">
                    <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">03 // ENGINEERING CAPABILITIES</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
                        ASYMMETRIC COLOR FIELD
                    </h2>
                    <p class="text-xs sm:text-sm font-mono text-slate-400 mt-1 max-w-xl">
                        Five core engineering disciplines engineered as an asymmetric physical surface. No repetitive card templates.
                    </p>
                </div>

                <!-- Asymmetric Multi-Scale Grid (Not uniform cards!) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    
                    <!-- BLOCK 1: Native SSR (MASSIVE Electric Blue Block - Cols 8) -->
                    <div class="lg:col-span-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-900/60 via-blue-950/80 to-slate-900 border border-blue-500/40 shadow-xl flex flex-col justify-between space-y-6">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    01 // WEB ARCHITECTURE
                                </span>
                                <span class="text-xs font-mono text-blue-300 font-semibold">ZERO RUNTIME FRAMEWORKS</span>
                            </div>
                            <h3 class="font-display text-2xl sm:text-4xl font-black text-white">
                                Pure Server-Side Rendering
                            </h3>
                            <p class="text-xs sm:text-sm font-mono text-blue-100/80 max-w-2xl leading-relaxed">
                                We eliminate client-side UI frameworks entirely. Clean, semantic HTML parses instantly in the browser engine without hydration lag, heavy CPU drain, or third-party bundle vulnerabilities.
                            </p>
                        </div>

                        <!-- Interactive Performance Simulator Widget -->
                        <div class="p-4 rounded-2xl bg-black/50 border border-blue-500/30 font-mono text-xs space-y-3">
                            <div class="flex items-center justify-between border-b border-white/10 pb-2">
                                <span class="text-[11px] text-slate-400">ARCHITECTURE COMPARISON</span>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" class="modern-field-ssr-toggle px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white" data-arch="velora">VELORA SSR</button>
                                    <button type="button" class="modern-field-ssr-toggle px-2.5 py-0.5 rounded text-[10px] text-slate-400 hover:text-white" data-arch="spa">TYPICAL SPA</button>
                                </div>
                            </div>
                            <div id="field-perf-velora" class="space-y-1.5 text-[11px] text-emerald-400">
                                <div class="flex items-center justify-between">
                                    <span>HTML Stream Ready:</span>
                                    <span class="font-bold">Stream-Rendered HTML (Zero Client Hydration)</span>
                                </div>
                                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div class="bg-emerald-400 h-full w-[95%]"></div>
                                </div>
                                <div class="text-[10px] text-slate-400 pt-1">Zero framework overhead • Minimal layout shifts • Clean native browser rendering</div>
                            </div>
                            <div id="field-perf-spa" class="hidden space-y-1.5 text-[11px] text-rose-400">
                                <div class="flex items-center justify-between">
                                    <span>Hydration Delay:</span>
                                    <span class="font-bold">Heavy Client Runtime Blocking</span>
                                </div>
                                <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div class="bg-rose-500 h-full w-[35%]"></div>
                                </div>
                                <div class="text-[10px] text-slate-400 pt-1">Heavy client CPU consumption • Mobile frame drops • Plugin bloat</div>
                            </div>
                        </div>
                    </div>

                    <!-- BLOCK 2: Structured Discovery (Vivid Violet Block - Cols 4) -->
                    <div class="lg:col-span-4 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-900/60 via-purple-950/80 to-slate-900 border border-purple-500/40 shadow-xl flex flex-col justify-between space-y-6">
                        <div class="space-y-3">
                            <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                02 // LOCAL DISCOVERY
                            </span>
                            <h3 class="font-display text-2xl font-bold text-white">
                                Schema.org Graph
                            </h3>
                            <p class="text-xs font-mono text-purple-100/80 leading-relaxed">
                                Entity-level JSON-LD schema linking physical address, operating hours, physician/agent credentials, and service areas directly to search engine crawlers.
                            </p>
                        </div>

                        <!-- Visual Entity Node Graph -->
                        <div class="p-3.5 rounded-2xl bg-black/50 border border-purple-500/30 font-mono text-xs space-y-2">
                            <div class="text-[10px] text-purple-400 font-bold uppercase">ENTITY TOPOLOGY</div>
                            <div class="flex items-center gap-2 text-slate-300 text-[11px]">
                                <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                                <span>Entity: Commercial Practice</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-300 text-[11px] pl-3 border-l border-purple-500/40">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>GeoCoordinates [Lat/Long]</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-300 text-[11px] pl-3 border-l border-purple-500/40">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span>Verified Opening Hours</span>
                            </div>
                        </div>
                    </div>

                    <!-- BLOCK 3: Lead Conversion (Emerald Green Block - Cols 4) -->
                    <div class="lg:col-span-4 rounded-3xl p-6 bg-gradient-to-br from-emerald-900/60 via-emerald-950/80 to-slate-900 border border-emerald-500/40 shadow-xl flex flex-col justify-between space-y-4">
                        <div>
                            <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                03 // CONVERSION
                            </span>
                            <h3 class="font-display text-xl font-bold text-white mt-2">
                                Frictionless Lead Engine
                            </h3>
                            <p class="text-xs font-mono text-emerald-100/80 mt-1 leading-relaxed">
                                1-touch WhatsApp routing and confidential consultation dispatch that turns visitors into booked commercial clients.
                            </p>
                        </div>
                        <div class="p-3 rounded-2xl bg-black/40 border border-emerald-500/30 font-mono text-[11px] text-emerald-300 flex items-center justify-between">
                            <span>Direct Pathway:</span>
                            <span class="font-bold">1-Touch WhatsApp & Lead Sync</span>
                        </div>
                    </div>

                    <!-- BLOCK 4: Annual Site Care (Warm Amber Block - Cols 4) -->
                    <div class="lg:col-span-4 rounded-3xl p-6 bg-gradient-to-br from-amber-900/60 via-amber-950/80 to-slate-900 border border-amber-500/40 shadow-xl flex flex-col justify-between space-y-4">
                        <div>
                            <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                04 // SITE CARE
                            </span>
                            <h3 class="font-display text-xl font-bold text-white mt-2">
                                Annual Maintenance
                            </h3>
                            <p class="text-xs font-mono text-amber-100/80 mt-1 leading-relaxed">
                                High-availability cloud hosting management, SSL certificate renewals, monthly content updates, and continuous uptime monitoring.
                            </p>
                        </div>
                        <div class="p-3 rounded-2xl bg-black/40 border border-amber-500/30 font-mono text-[11px] text-amber-300 flex items-center justify-between">
                            <span>Inclusions:</span>
                            <span class="font-bold">Hosting + SSL + Monthly Edits</span>
                        </div>
                    </div>

                    <!-- BLOCK 5: 100% Asset Ownership (Coral/Rose Block - Cols 4) -->
                    <div class="lg:col-span-4 rounded-3xl p-6 bg-gradient-to-br from-rose-900/60 via-rose-950/80 to-slate-900 border border-rose-500/40 shadow-xl flex flex-col justify-between space-y-4">
                        <div>
                            <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                05 // ASSET RIGHTS
                            </span>
                            <h3 class="font-display text-xl font-bold text-white mt-2">
                                Complete Ownership
                            </h3>
                            <p class="text-xs font-mono text-rose-100/80 mt-1 leading-relaxed">
                                100% client code ownership. Complete Git repository handover with zero proprietary website-builder lock-in or recurring template taxes.
                            </p>
                        </div>
                        <div class="p-3 rounded-2xl bg-black/40 border border-rose-500/30 font-mono text-[11px] text-rose-300 flex items-center justify-between">
                            <span>Repository:</span>
                            <span class="font-bold">Full Git Transfer</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- =================================================================== -->
        <!-- ENVIRONMENT 04: THE INTERACTIVE DELIVERY CONTINUUM (#modern-continuum) -->
        <!-- Horizontal visual system with expanding artifact panes              -->
        <!-- =================================================================== -->
        <section id="modern-continuum" class="py-16 md:py-24 border-b border-white/10 bg-[#0c0e18]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <span class="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">04 // SPRINT EXECUTION</span>
                        <h2 class="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
                            DELIVERY CONTINUUM
                        </h2>
                    </div>
                    <p class="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
                        18-day commercial sprint. Select any milestone below to inspect its delivered technical artifacts.
                    </p>
                </div>

                <!-- Horizontal Ribbon Controller (Horizontal scroll on mobile, flex on desktop) -->
                <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none" role="tablist" aria-label="Delivery Continuum Milestones">
                    <button type="button" class="modern-continuum-tab shrink-0 px-4 py-3 rounded-2xl border border-blue-500 bg-blue-600 text-white font-mono text-xs font-bold transition-all text-left shadow-md" data-stage="0" role="tab" aria-selected="true">
                        <div class="text-[10px] text-blue-200 uppercase">DAYS 01–03</div>
                        <div class="text-sm font-bold mt-0.5">01 DISCOVER</div>
                    </button>
                    <button type="button" class="modern-continuum-tab shrink-0 px-4 py-3 rounded-2xl border border-white/10 bg-slate-900 text-slate-400 hover:text-white font-mono text-xs font-semibold transition-all text-left" data-stage="1" role="tab" aria-selected="false">
                        <div class="text-[10px] uppercase">DAYS 04–07</div>
                        <div class="text-sm font-bold mt-0.5">02 DESIGN</div>
                    </button>
                    <button type="button" class="modern-continuum-tab shrink-0 px-4 py-3 rounded-2xl border border-white/10 bg-slate-900 text-slate-400 hover:text-white font-mono text-xs font-semibold transition-all text-left" data-stage="2" role="tab" aria-selected="false">
                        <div class="text-[10px] uppercase">DAYS 08–12</div>
                        <div class="text-sm font-bold mt-0.5">03 SSR BUILD</div>
                    </button>
                    <button type="button" class="modern-continuum-tab shrink-0 px-4 py-3 rounded-2xl border border-white/10 bg-slate-900 text-slate-400 hover:text-white font-mono text-xs font-semibold transition-all text-left" data-stage="3" role="tab" aria-selected="false">
                        <div class="text-[10px] uppercase">DAYS 13–15</div>
                        <div class="text-sm font-bold mt-0.5">04 SCHEMA</div>
                    </button>
                    <button type="button" class="modern-continuum-tab shrink-0 px-4 py-3 rounded-2xl border border-white/10 bg-slate-900 text-slate-400 hover:text-white font-mono text-xs font-semibold transition-all text-left" data-stage="4" role="tab" aria-selected="false">
                        <div class="text-[10px] uppercase">DAYS 16–18</div>
                        <div class="text-sm font-bold mt-0.5">05 LAUNCH</div>
                    </button>
                </div>

                <!-- Expanded Visual Artifact Stage -->
                <div id="modern-continuum-stage" class="rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                        <div>
                            <span id="stage-badge" class="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">MILESTONE 01 // ARCHITECTURE</span>
                            <h3 id="stage-title" class="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                                Commercial Discovery & Spatial Sizing
                            </h3>
                        </div>
                        <span id="stage-timeline" class="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                            Window: Days 01–03
                        </span>
                    </div>

                    <!-- Visual Artifact Specimens Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4" id="stage-artifacts-container">
                        <div class="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                            <div class="text-[10px] font-mono text-blue-400 font-bold uppercase">ARTIFACT 01</div>
                            <div class="text-xs font-bold text-white" id="art-1-title">Site Hierarchy & Sizing Spec</div>
                            <p class="text-[11px] font-mono text-slate-400 leading-relaxed" id="art-1-desc">Complete tree of commercial conversion routes and lead capture pathways.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                            <div class="text-[10px] font-mono text-purple-400 font-bold uppercase">ARTIFACT 02</div>
                            <div class="text-xs font-bold text-white" id="art-2-title">Service Inventory & Offers</div>
                            <p class="text-[11px] font-mono text-slate-400 leading-relaxed" id="art-2-desc">Structured catalog of treatments, properties, or culinary menus.</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                            <div class="text-[10px] font-mono text-emerald-400 font-bold uppercase">ARTIFACT 03</div>
                            <div class="text-xs font-bold text-white" id="art-3-title">Technical Hosting Strategy</div>
                            <p class="text-[11px] font-mono text-slate-400 leading-relaxed" id="art-3-desc">Node.js SSR server-side routing specification and edge caching plan.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- =================================================================== -->
        <!-- ENVIRONMENT 05: THE PHYSICAL CONTROL CONFIGURATOR (#modern-configurator) -->
        <!-- Instrument console aesthetic with live animated tabular calculations  -->
        <!-- =================================================================== -->
        <section id="modern-configurator" class="py-16 md:py-24 border-b border-white/10 bg-[#0a0b12]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <span class="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">05 // COMMERCIAL INSTRUMENT</span>
                        <h2 class="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
                            STUDIO CONFIGURATOR
                        </h2>
                    </div>
                    <p class="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
                        Configure scope parameters in real time. Transparent canonical rates with zero recurring percentage commissions.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    <!-- Left: Control Panels (Cols 7) -->
                    <div class="lg:col-span-7 space-y-6">
                        
                        <!-- 1. Tier Selection Tablets -->
                        <div class="space-y-3">
                            <label class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                                STEP 01 // PLATFORM TIER
                            </label>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Platform Tier">
                                
                                <button type="button" class="modern-cfg-tier-btn p-4 rounded-2xl border border-white/10 bg-slate-900/90 text-left transition-all hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-tier="essential" data-price="14999" data-base-pages="5" role="radio" aria-checked="false">
                                    <div class="text-[10px] font-mono text-slate-400 uppercase font-bold">ESSENTIAL</div>
                                    <div class="text-2xl font-mono font-black text-white mt-1">₹14,999</div>
                                    <div class="text-[11px] font-mono text-slate-400 mt-2">Up to 5 pages. Native SSR, mobile responsive, core schema.</div>
                                </button>

                                <button type="button" class="modern-cfg-tier-btn p-4 rounded-2xl border-2 border-blue-500 bg-blue-950/40 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-tier="professional" data-price="34999" data-base-pages="10" role="radio" aria-checked="true">
                                    <div class="flex items-center justify-between">
                                        <span class="text-[10px] font-mono text-blue-400 uppercase font-bold">STUDIO CHOICE</span>
                                        <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                                    </div>
                                    <div class="text-2xl font-mono font-black text-white mt-1">₹34,999</div>
                                    <div class="text-[11px] font-mono text-slate-300 mt-2">Up to 10 pages. Bespoke UI, local SEO engine, conversion rail.</div>
                                </button>

                                <button type="button" class="modern-cfg-tier-btn p-4 rounded-2xl border border-white/10 bg-slate-900/90 text-left transition-all hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-tier="custom" data-price="69999" data-base-pages="15" role="radio" aria-checked="false">
                                    <div class="text-[10px] font-mono text-slate-400 uppercase font-bold">ENTERPRISE</div>
                                    <div class="text-2xl font-mono font-black text-white mt-1">₹69,999+</div>
                                    <div class="text-[11px] font-mono text-slate-400 mt-2">15+ pages. Multi-location system, dedicated engineering.</div>
                                </button>

                            </div>
                        </div>

                        <!-- 2. Page Count Slider -->
                        <div class="p-6 rounded-2xl border border-white/10 bg-slate-900/90 space-y-3">
                            <div class="flex items-center justify-between">
                                <label for="modern-cfg-slider" class="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
                                    STEP 02 // PAGE COUNT SCOPE
                                </label>
                                <span class="text-sm font-mono font-bold text-blue-400">
                                    <span id="cfg-page-count" style="font-variant-numeric: tabular-nums;">10</span> Pages Scope
                                </span>
                            </div>
                            <input type="range" id="modern-cfg-slider" min="5" max="25" value="10" step="1" class="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg" aria-label="Select total pages" />
                            <div class="flex items-center justify-between text-[10px] font-mono text-slate-400">
                                <span>5 Pages (Core Baseline)</span>
                                <span>+₹1,500 / additional page</span>
                                <span>25 Pages (Expanded)</span>
                            </div>
                        </div>

                        <!-- 3. Add-on Modules -->
                        <div class="space-y-3">
                            <label class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                                STEP 03 // OPTIONAL SERVICE MODULES
                            </label>
                            <div class="space-y-2">
                                <label class="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-slate-900/90 hover:bg-slate-800/90 cursor-pointer transition-colors">
                                    <div class="flex items-center gap-3">
                                        <input type="checkbox" id="cfg-addon-seo" class="modern-cfg-addon w-4 h-4 rounded border-white/20 text-blue-600 focus:ring-blue-500" data-price="17500" checked />
                                        <div>
                                            <div class="text-xs font-bold text-white">Advanced Local SEO & Schema Graph</div>
                                            <div class="text-[10px] font-mono text-slate-400">Schema.org entity topology, local citations, NAP validation</div>
                                        </div>
                                    </div>
                                    <span class="text-xs font-mono font-bold text-blue-400">+₹17,500</span>
                                </label>

                                <label class="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-slate-900/90 hover:bg-slate-800/90 cursor-pointer transition-colors">
                                    <div class="flex items-center gap-3">
                                        <input type="checkbox" id="cfg-addon-care" class="modern-cfg-addon w-4 h-4 rounded border-white/20 text-blue-600 focus:ring-blue-500" data-price="15000" />
                                        <div>
                                            <div class="text-xs font-bold text-white">Annual Maintenance & Site Care</div>
                                            <div class="text-[10px] font-mono text-slate-400">Cloud hosting, SSL automation, monthly content edits, uptime checks</div>
                                        </div>
                                    </div>
                                    <span class="text-xs font-mono font-bold text-emerald-400">+₹15,000/yr</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <!-- Right: Instrument LED Total Console (Cols 5) -->
                    <div class="lg:col-span-5 sticky top-24">
                        <div class="rounded-3xl border-2 border-blue-500/50 bg-slate-950 p-6 sm:p-8 shadow-2xl space-y-6">
                            <div class="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <span class="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">CALCULATED COMMITMENT</span>
                                    <h3 class="font-display text-xl font-black text-white">ESTIMATED INVESTMENT</h3>
                                </div>
                                <div class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                            </div>

                            <!-- Line Item Breakdown -->
                            <div class="space-y-3 font-mono text-xs text-slate-400">
                                <div class="flex items-center justify-between">
                                    <span>Base Tier (<span id="cfg-summary-tier">Professional</span>):</span>
                                    <span class="text-white font-bold" id="cfg-summary-tier-cost" style="font-variant-numeric: tabular-nums;">₹34,999</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span>Extra Pages (<span id="cfg-summary-extra-count">0</span>):</span>
                                    <span class="text-white font-bold" id="cfg-summary-page-cost" style="font-variant-numeric: tabular-nums;">₹0</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span>Selected Modules:</span>
                                    <span class="text-white font-bold" id="cfg-summary-addon-cost" style="font-variant-numeric: tabular-nums;">₹17,500</span>
                                </div>
                            </div>

                            <!-- Giant LED Numerical Display -->
                            <div class="pt-4 border-t border-white/10">
                                <div class="text-[10px] font-mono text-slate-400 uppercase font-bold">TOTAL FIXED RATE ESTIMATE</div>
                                <div class="text-4xl sm:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mt-2" id="cfg-grand-total" style="font-variant-numeric: tabular-nums;">
                                    ₹52,499
                                </div>
                                <div class="text-[10px] font-mono text-slate-400 mt-2">Zero recurring platform taxes. Full code ownership upon settlement.</div>
                            </div>

                            <!-- Lock Scope & Inquire Button -->
                            <div class="pt-2">
                                <button type="button" id="modern-cfg-lock-btn" class="w-full py-4 px-4 min-h-[48px] rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                                    <span>Lock Scope & Open Intake</span>
                                    <span>→</span>
                                </button>
                                <p class="text-[10px] font-mono text-center text-slate-400 mt-2">
                                    Auto-synchronizes the technical brief below.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- =================================================================== -->
        <!-- ENVIRONMENT 06: PROGRESSIVE INTAKE & HANDOFF (#modern-contact)      -->
        <!-- Minimal initial prompt expanding into clean direct intake           -->
        <!-- =================================================================== -->
        <section id="modern-contact" class="py-16 md:py-24 bg-[#0a0b12]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    <!-- Direct Studio Channels -->
                    <div class="lg:col-span-5 space-y-6">
                        <div>
                            <span class="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">06 // DIRECT HANDOFF</span>
                            <h2 class="font-display text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                                START YOUR PROJECT
                            </h2>
                            <p class="text-xs sm:text-sm font-mono text-slate-400 mt-2 leading-relaxed">
                                Connect directly with our lead architectural engineer. We review your requirements and provide an exact fixed-price contract.
                            </p>
                        </div>

                        <!-- Direct Communication Channels -->
                        <div class="space-y-3">
                            <a href="https://wa.me/919279180000" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 hover:border-emerald-500 transition-all">
                                <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-lg">💬</div>
                                <div>
                                    <div class="text-[10px] font-mono text-emerald-400 uppercase font-bold">WHATSAPP DIRECT CONCIERGE</div>
                                    <div class="text-xs font-mono font-bold text-white">+91 92791 80000</div>
                                </div>
                            </a>

                            <a href="tel:+919279180000" class="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-slate-900/90 hover:border-blue-500 transition-all">
                                <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-lg">☎</div>
                                <div>
                                    <div class="text-[10px] font-mono text-slate-400 uppercase font-bold">DIRECT TELEPHONE</div>
                                    <div class="text-xs font-mono font-bold text-white">+91 92791 80000</div>
                                </div>
                            </a>

                            <a href="mailto:hello@veloradigital.com" class="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-slate-900/90 hover:border-purple-500 transition-all">
                                <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono text-lg">✉</div>
                                <div>
                                    <div class="text-[10px] font-mono text-slate-400 uppercase font-bold">STUDIO EMAIL</div>
                                    <div class="text-xs font-mono font-bold text-white">hello@veloradigital.com</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Intake Console Form -->
                    <div class="lg:col-span-7">
                        <div class="rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                            
                            <!-- Synchronized Scope Badge -->
                            <div class="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 mb-6 flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                    <span class="text-xs font-mono text-slate-300">Configured Scope:</span>
                                    <span id="intake-scope-label" class="text-xs font-mono font-bold text-white">Professional Tier (10 Pages) + SEO</span>
                                </div>
                                <span id="intake-scope-price" class="text-xs font-mono font-bold text-blue-400" style="font-variant-numeric: tabular-nums;">₹52,499</span>
                            </div>

                            <form id="modern-contact-form" class="space-y-4" novalidate>
                                <input type="hidden" id="modern-scope-payload" name="configured_scope" value="Professional Tier (10 Pages) + SEO (₹52,499)" />
                                
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label for="contact-name" class="block text-xs font-mono text-slate-400 mb-1 font-semibold">YOUR NAME *</label>
                                        <input type="text" id="contact-name" name="name" required class="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Dr. Aditi Sen" />
                                    </div>
                                    <div>
                                        <label for="contact-business" class="block text-xs font-mono text-slate-400 mb-1 font-semibold">BUSINESS / PRACTICE *</label>
                                        <input type="text" id="contact-business" name="business" required class="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Sen Aesthetics Clinic" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label for="contact-email" class="block text-xs font-mono text-slate-400 mb-1 font-semibold">EMAIL ADDRESS *</label>
                                        <input type="email" id="contact-email" name="email" required class="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="aditi@senaesthetics.com" />
                                    </div>
                                    <div>
                                        <label for="contact-phone" class="block text-xs font-mono text-slate-400 mb-1 font-semibold">TELEPHONE / WHATSAPP *</label>
                                        <input type="tel" id="contact-phone" name="phone" required class="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 98300 00000" />
                                    </div>
                                </div>

                                <div>
                                    <label for="contact-notes" class="block text-xs font-mono text-slate-400 mb-1 font-semibold">PROJECT REQUIREMENTS / TIMELINE</label>
                                    <textarea id="contact-notes" name="notes" rows="3" class="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Briefly describe your objectives, target launch date, or current website URL..."></textarea>
                                </div>

                                <div id="modern-form-status" class="hidden p-3 rounded-xl text-xs font-mono" role="status" aria-live="polite"></div>

                                <button type="submit" id="modern-submit-btn" class="w-full py-4 px-4 min-h-[48px] rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                                    <span>Transmit Project Scoping Brief</span>
                                    <span>→</span>
                                </button>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </section>

    </div>
    `;

    const styles = `
        /* Modern Experience Living Interactive Playground Scoped Styles */
        .modern-playground-root {
            font-feature-settings: "cv02", "cv03", "cv04", "cv11";
        }
        
        .modern-playground-root * {
            box-sizing: border-box;
        }

        .modern-playground-root [style*="tabular-nums"] {
            font-variant-numeric: tabular-nums;
        }

        .modern-slot-btn:hover {
            transform: translateY(-1px);
        }

        .scrollbar-none::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        @media (prefers-reduced-motion: reduce) {
            .modern-playground-root * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;

    const script = `
        (function() {
            window.__veloraModernCleanups = window.__veloraModernCleanups || [];

            function addListener(element, event, handler) {
                if (!element) return;
                element.addEventListener(event, handler);
                window.__veloraModernCleanups.push(function() {
                    element.removeEventListener(event, handler);
                });
            }

            window.initModernInteractions = function() {
                if (typeof window.cleanupModernInteractions === 'function') {
                    window.cleanupModernInteractions();
                }

                // -------------------------------------------------------------
                // 1. Mobile Menu Drawer Navigation
                // -------------------------------------------------------------
                const mobileBtn = document.getElementById('modern-mobile-menu-btn');
                const closeBtn = document.getElementById('modern-mobile-close-btn');
                const drawer = document.getElementById('modern-mobile-drawer');

                if (mobileBtn && drawer) {
                    addListener(mobileBtn, 'click', function() {
                        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
                        if (isExpanded) {
                            drawer.classList.add('hidden');
                            mobileBtn.setAttribute('aria-expanded', 'false');
                        } else {
                            drawer.classList.remove('hidden');
                            mobileBtn.setAttribute('aria-expanded', 'true');
                            if (closeBtn) closeBtn.focus();
                        }
                    });

                    if (closeBtn) {
                        addListener(closeBtn, 'click', function() {
                            drawer.classList.add('hidden');
                            mobileBtn.setAttribute('aria-expanded', 'false');
                            mobileBtn.focus();
                        });
                    }

                    drawer.querySelectorAll('a').forEach(link => {
                        addListener(link, 'click', function() {
                            drawer.classList.add('hidden');
                            mobileBtn.setAttribute('aria-expanded', 'false');
                        });
                    });

                    addListener(document, 'keydown', function(e) {
                        if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
                            drawer.classList.add('hidden');
                            mobileBtn.setAttribute('aria-expanded', 'false');
                            mobileBtn.focus();
                        }
                    });
                }

                // -------------------------------------------------------------
                // 2. Opening Canvas Sector Switcher
                // -------------------------------------------------------------
                const canvasTabs = document.querySelectorAll('.modern-canvas-sector-tab');
                const canvasPanels = document.querySelectorAll('.modern-canvas-panel');

                canvasTabs.forEach(tab => {
                    addListener(tab, 'click', function() {
                        const target = this.getAttribute('data-canvas-sector');
                        canvasTabs.forEach(t => {
                            t.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
                            t.classList.add('text-slate-400');
                            t.setAttribute('aria-selected', 'false');
                        });
                        this.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
                        this.classList.remove('text-slate-400');
                        this.setAttribute('aria-selected', 'true');

                        canvasPanels.forEach(p => {
                            if (p.id === 'canvas-panel-' + target) {
                                p.classList.remove('hidden');
                            } else {
                                p.classList.add('hidden');
                            }
                        });
                    });
                });

                // Slot selection simulation
                document.querySelectorAll('.modern-slot-btn').forEach(slot => {
                    addListener(slot, 'click', function() {
                        const parent = this.parentElement;
                        if (parent) {
                            parent.querySelectorAll('.modern-slot-btn').forEach(s => {
                                s.classList.remove('bg-blue-600', 'bg-purple-600', 'text-white', 'font-bold');
                            });
                            this.classList.add('bg-blue-600', 'text-white', 'font-bold');
                        }
                    });
                });

                // -------------------------------------------------------------
                // 3. Visual Work Gallery Controllers (Projects & Modes)
                // -------------------------------------------------------------
                const projBtns = document.querySelectorAll('.modern-gallery-proj-btn');
                const modeBtns = document.querySelectorAll('.modern-gallery-mode-btn');
                let currentProject = 'aurora';
                let currentMode = 'desktop';

                function updateGalleryView() {
                    document.querySelectorAll('.modern-project-specimen').forEach(spec => {
                        const isTarget = spec.id === 'specimen-' + currentProject;
                        spec.classList.toggle('hidden', !isTarget);
                        if (isTarget) {
                            const desktopView = spec.querySelector('.modern-view-desktop');
                            const mobileView = spec.querySelector('.modern-view-mobile');
                            const funnelView = spec.querySelector('.modern-view-funnel');
                            if (desktopView) desktopView.classList.toggle('hidden', currentMode !== 'desktop');
                            if (mobileView) mobileView.classList.toggle('hidden', currentMode !== 'mobile');
                            if (funnelView) funnelView.classList.toggle('hidden', currentMode !== 'funnel');
                        }
                    });
                }

                projBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        currentProject = this.getAttribute('data-proj');
                        projBtns.forEach(b => {
                            b.classList.remove('bg-blue-600', 'text-white');
                            b.classList.add('text-slate-400');
                            b.setAttribute('aria-selected', 'false');
                        });
                        this.classList.add('bg-blue-600', 'text-white');
                        this.classList.remove('text-slate-400');
                        this.setAttribute('aria-selected', 'true');
                        updateGalleryView();
                    });
                });

                modeBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        currentMode = this.getAttribute('data-mode');
                        modeBtns.forEach(b => {
                            b.classList.remove('bg-white/15', 'text-white');
                            b.classList.add('text-slate-400');
                            b.setAttribute('aria-selected', 'false');
                        });
                        this.classList.add('bg-white/15', 'text-white');
                        this.classList.remove('text-slate-400');
                        this.setAttribute('aria-selected', 'true');
                        updateGalleryView();
                    });
                });

                // -------------------------------------------------------------
                // 4. Asymmetric Color Field: Architecture Toggle
                // -------------------------------------------------------------
                const archToggles = document.querySelectorAll('.modern-field-ssr-toggle');
                archToggles.forEach(t => {
                    addListener(t, 'click', function() {
                        const arch = this.getAttribute('data-arch');
                        archToggles.forEach(b => {
                            b.classList.remove('bg-blue-600', 'text-white');
                            b.classList.add('text-slate-400');
                        });
                        this.classList.add('bg-blue-600', 'text-white');
                        this.classList.remove('text-slate-400');

                        const veloraPerf = document.getElementById('field-perf-velora');
                        const spaPerf = document.getElementById('field-perf-spa');
                        if (veloraPerf) veloraPerf.classList.toggle('hidden', arch !== 'velora');
                        if (spaPerf) spaPerf.classList.toggle('hidden', arch !== 'spa');
                    });
                });

                // -------------------------------------------------------------
                // 5. Delivery Continuum Milestone Controller
                // -------------------------------------------------------------
                const continuumData = [
                    {
                        badge: "MILESTONE 01 // ARCHITECTURE",
                        title: "Commercial Discovery & Spatial Sizing",
                        timeline: "Window: Days 01–03",
                        a1T: "Site Hierarchy & Sizing Spec",
                        a1D: "Complete tree of commercial conversion routes and lead capture pathways.",
                        a2T: "Service Inventory & Offers",
                        a2D: "Structured catalog of treatments, properties, or culinary menus.",
                        a3T: "Technical Hosting Strategy",
                        a3D: "Node.js SSR server-side routing specification and edge caching plan."
                    },
                    {
                        badge: "MILESTONE 02 // VISUAL DESIGN",
                        title: "Bespoke Interface Design & Interaction Prototyping",
                        timeline: "Window: Days 04–07",
                        a1T: "Editorial Font & Visual Hierarchy",
                        a1D: "Type pairing, color tokens, and accessible WCAG 2.1 AA contrast specs.",
                        a2T: "Desktop & Mobile Canvas Prototypes",
                        a2D: "Interactive viewport models for core conversion flows.",
                        a3T: "Visual Asset Preparation",
                        a3D: "Responsive WebP image optimization and vector iconography."
                    },
                    {
                        badge: "MILESTONE 03 // SSR IMPLEMENTATION",
                        title: "High-Performance Native SSR Engine",
                        timeline: "Window: Days 08–12",
                        a1T: "Semantic HTML5 Pre-Render Engine",
                        a1D: "Zero client-side UI framework overhead for instant browser parsing.",
                        a2T: "Multi-Viewport Layout Integrity",
                        a2D: "Zero-overflow verification across 375px, 390px, 1280px, and 1440px.",
                        a3T: "Keyboard & Focus Trapping",
                        a3D: "Full accessibility navigation, ARIA controls, and escape handling."
                    },
                    {
                        badge: "MILESTONE 04 // LOCAL DISCOVERY",
                        title: "Structured Schema Graph & Citation Alignment",
                        timeline: "Window: Days 13–15",
                        a1T: "JSON-LD Entity Graph",
                        a1D: "Schema.org validation for MedicalBusiness, RealEstateAgent, or Restaurant.",
                        a2T: "Canonical Robots & Sitemap Sync",
                        a2D: "Automated XML sitemaps and OpenGraph social metadata.",
                        a3T: "Local Directory Alignment",
                        a3D: "Name, address, telephone consistency across Indian digital directories."
                    },
                    {
                        badge: "MILESTONE 05 // LAUNCH & HANDOVER",
                        title: "Production Deployment & Complete Asset Sovereignty",
                        timeline: "Window: Days 16–18",
                        a1T: "Cloud Edge Provisioning",
                        a1D: "Global CDN distribution with automated SSL certificates.",
                        a2T: "Full Git Repository Handover",
                        a2D: "100% source code ownership transferred to client account.",
                        a3T: "Studio Operations Briefing",
                        a3D: "Live orientation on content editing and direct inquiry routing."
                    }
                ];

                const continuumTabs = document.querySelectorAll('.modern-continuum-tab');
                continuumTabs.forEach(tab => {
                    addListener(tab, 'click', function() {
                        const stageIdx = parseInt(this.getAttribute('data-stage'), 10);
                        const data = continuumData[stageIdx];
                        if (!data) return;

                        continuumTabs.forEach(t => {
                            t.classList.remove('border-blue-500', 'bg-blue-600', 'text-white', 'shadow-md');
                            t.classList.add('border-white/10', 'bg-slate-900', 'text-slate-400');
                            t.setAttribute('aria-selected', 'false');
                        });
                        this.classList.add('border-blue-500', 'bg-blue-600', 'text-white', 'shadow-md');
                        this.classList.remove('border-white/10', 'bg-slate-900', 'text-slate-400');
                        this.setAttribute('aria-selected', 'true');

                        const badge = document.getElementById('stage-badge');
                        const title = document.getElementById('stage-title');
                        const timeline = document.getElementById('stage-timeline');
                        const a1T = document.getElementById('art-1-title');
                        const a1D = document.getElementById('art-1-desc');
                        const a2T = document.getElementById('art-2-title');
                        const a2D = document.getElementById('art-2-desc');
                        const a3T = document.getElementById('art-3-title');
                        const a3D = document.getElementById('art-3-desc');

                        if (badge) badge.textContent = data.badge;
                        if (title) title.textContent = data.title;
                        if (timeline) timeline.textContent = data.timeline;
                        if (a1T) a1T.textContent = data.a1T;
                        if (a1D) a1D.textContent = data.a1D;
                        if (a2T) a2T.textContent = data.a2T;
                        if (a2D) a2D.textContent = data.a2D;
                        if (a3T) a3T.textContent = data.a3T;
                        if (a3D) a3D.textContent = data.a3D;
                    });
                });

                // -------------------------------------------------------------
                // 6. Physical Control Surface Configurator Math
                // -------------------------------------------------------------
                let tierKey = 'professional';
                let basePrice = 34999;
                let basePages = 10;
                const cfgSlider = document.getElementById('modern-cfg-slider');
                const cfgPageCount = document.getElementById('cfg-page-count');
                const cfgAddons = document.querySelectorAll('.modern-cfg-addon');
                const cfgTotalDisplay = document.getElementById('cfg-grand-total');
                const cfgTierName = document.getElementById('cfg-summary-tier');
                const cfgTierCost = document.getElementById('cfg-summary-tier-cost');
                const cfgExtraCount = document.getElementById('cfg-summary-extra-count');
                const cfgPageCost = document.getElementById('cfg-summary-page-cost');
                const cfgAddonCost = document.getElementById('cfg-summary-addon-cost');
                const cfgLockBtn = document.getElementById('modern-cfg-lock-btn');
                const intakeLabel = document.getElementById('intake-scope-label');
                const intakePrice = document.getElementById('intake-scope-price');
                const intakePayload = document.getElementById('modern-scope-payload');

                function updateConfigurator() {
                    const pages = cfgSlider ? parseInt(cfgSlider.value, 10) : 10;
                    if (cfgPageCount) cfgPageCount.textContent = pages;

                    const extra = Math.max(0, pages - basePages);
                    const pageCost = extra * 1500;

                    let addonsSum = 0;
                    let addonTags = [];
                    cfgAddons.forEach(cb => {
                        if (cb.checked) {
                            const p = parseInt(cb.getAttribute('data-price'), 10) || 0;
                            addonsSum += p;
                            if (cb.id === 'cfg-addon-seo') addonTags.push('SEO');
                            if (cb.id === 'cfg-addon-care') addonTags.push('Care');
                        }
                    });

                    const total = basePrice + pageCost + addonsSum;
                    const formatted = '₹' + total.toLocaleString('en-IN');

                    if (cfgTotalDisplay) cfgTotalDisplay.textContent = formatted;
                    if (cfgTierCost) cfgTierCost.textContent = '₹' + basePrice.toLocaleString('en-IN');
                    if (cfgExtraCount) cfgExtraCount.textContent = extra;
                    if (cfgPageCost) cfgPageCost.textContent = '₹' + pageCost.toLocaleString('en-IN');
                    if (cfgAddonCost) cfgAddonCost.textContent = '₹' + addonsSum.toLocaleString('en-IN');

                    const capTier = tierKey.charAt(0).toUpperCase() + tierKey.slice(1);
                    if (cfgTierName) cfgTierName.textContent = capTier;

                    const addonStr = addonTags.length > 0 ? ' + ' + addonTags.join(', ') : '';
                    const fullSummary = capTier + ' Tier (' + pages + ' Pages)' + addonStr;

                    if (intakeLabel) intakeLabel.textContent = fullSummary;
                    if (intakePrice) intakePrice.textContent = formatted;
                    if (intakePayload) intakePayload.value = fullSummary + ' (' + formatted + ')';
                }

                const tierBtns = document.querySelectorAll('.modern-cfg-tier-btn');
                tierBtns.forEach(btn => {
                    addListener(btn, 'click', function() {
                        tierBtns.forEach(b => {
                            b.classList.remove('border-2', 'border-blue-500', 'bg-blue-950/40');
                            b.classList.add('border', 'border-white/10', 'bg-slate-900/90');
                            b.setAttribute('aria-checked', 'false');
                        });
                        this.classList.add('border-2', 'border-blue-500', 'bg-blue-950/40');
                        this.classList.remove('border-white/10', 'bg-slate-900/90');
                        this.setAttribute('aria-checked', 'true');

                        tierKey = this.getAttribute('data-tier');
                        basePrice = parseInt(this.getAttribute('data-price'), 10);
                        basePages = parseInt(this.getAttribute('data-base-pages'), 10);

                        if (cfgSlider && basePages > parseInt(cfgSlider.value, 10)) {
                            cfgSlider.value = basePages;
                        }
                        updateConfigurator();
                    });
                });

                if (cfgSlider) addListener(cfgSlider, 'input', updateConfigurator);
                cfgAddons.forEach(cb => addListener(cb, 'change', updateConfigurator));

                if (cfgLockBtn) {
                    addListener(cfgLockBtn, 'click', function() {
                        const contactSec = document.getElementById('modern-contact');
                        if (contactSec) {
                            contactSec.scrollIntoView({ behavior: 'smooth' });
                            const nameEl = document.getElementById('contact-name');
                            if (nameEl) setTimeout(() => nameEl.focus(), 500);
                        }
                    });
                }

                updateConfigurator();

                // -------------------------------------------------------------
                // 7. Contact Form Submission
                // -------------------------------------------------------------
                const form = document.getElementById('modern-contact-form');
                const formStatus = document.getElementById('modern-form-status');
                const submitBtn = document.getElementById('modern-submit-btn');

                if (form) {
                    addListener(form, 'submit', function(e) {
                        e.preventDefault();
                        if (!form.checkValidity()) {
                            form.reportValidity();
                            return;
                        }

                        if (submitBtn) {
                            submitBtn.disabled = true;
                            submitBtn.innerHTML = '<span>Transmitting...</span>';
                        }

                        const fd = new FormData(form);
                        const payload = {
                            name: fd.get('name'),
                            business: fd.get('business'),
                            email: fd.get('email'),
                            phone: fd.get('phone'),
                            notes: fd.get('notes'),
                            configured_scope: fd.get('configured_scope')
                        };

                        fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        })
                        .then(r => r.json())
                        .then(() => {
                            if (formStatus) {
                                formStatus.classList.remove('hidden', 'bg-rose-500/10', 'text-rose-400');
                                formStatus.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
                                formStatus.textContent = '✓ Scoping inquiry received. Our lead architectural engineer will connect within 24 hours.';
                            }
                            form.reset();
                            updateConfigurator();
                        })
                        .catch(() => {
                            if (formStatus) {
                                formStatus.classList.remove('hidden', 'bg-emerald-500/20', 'text-emerald-300');
                                formStatus.classList.add('bg-rose-500/20', 'text-rose-400', 'border', 'border-rose-500/30');
                                formStatus.textContent = 'Direct transmission delayed. Connect immediately via WhatsApp or direct phone.';
                            }
                        })
                        .finally(() => {
                            if (submitBtn) {
                                submitBtn.disabled = false;
                                submitBtn.innerHTML = '<span>Transmit Project Scoping Brief</span> <span>→</span>';
                            }
                        });
                    });
                }

                // -------------------------------------------------------------
                // 8. Studio Palette Theme Selector
                // -------------------------------------------------------------
                const themeBtn = document.getElementById('modern-theme-selector-btn');
                const themeMenu = document.getElementById('modern-theme-menu');
                const themeLabel = document.getElementById('modern-theme-label');

                if (themeBtn && themeMenu) {
                    addListener(themeBtn, 'click', function(e) {
                        e.stopPropagation();
                        const isOpen = themeBtn.getAttribute('aria-expanded') === 'true';
                        themeMenu.classList.toggle('hidden', isOpen);
                        themeBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
                    });

                    addListener(document, 'click', function(e) {
                        if (!themeMenu.contains(e.target) && !themeBtn.contains(e.target)) {
                            themeMenu.classList.add('hidden');
                            themeBtn.setAttribute('aria-expanded', 'false');
                        }
                    });

                    themeMenu.querySelectorAll('.modern-theme-opt').forEach(opt => {
                        addListener(opt, 'click', function() {
                            const val = this.getAttribute('data-theme-value');
                            if (val) {
                                document.documentElement.setAttribute('data-theme', val);
                                try { localStorage.setItem('velora_theme', val); } catch (e) {}
                                if (themeLabel) {
                                    if (val === 'midnight') themeLabel.textContent = 'Midnight / Cobalt';
                                    if (val === 'onyx') themeLabel.textContent = 'Onyx / Champagne';
                                    if (val === 'obsidian') themeLabel.textContent = 'Obsidian / Titanium';
                                }
                                themeMenu.classList.add('hidden');
                                themeBtn.setAttribute('aria-expanded', 'false');
                            }
                        });
                    });
                }
            };

            window.cleanupModernInteractions = function() {
                if (Array.isArray(window.__veloraModernCleanups)) {
                    window.__veloraModernCleanups.forEach(fn => {
                        try { fn(); } catch (e) {}
                    });
                    window.__veloraModernCleanups = [];
                }
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
