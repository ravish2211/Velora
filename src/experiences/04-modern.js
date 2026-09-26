// ============================================================================ //
// VELORA DIGITAL — 04 MODERN EXPERIENCE PRESENTATION RENDERER                  //
// Architecture V6: Interactive Spatial Website Exhibition                     //
// Zero-framework SSR · Strict ₹0 runtime libraries · WCAG 2.1 AA Compliant    //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, FAQS } = require('../data');
const { escapeHTML, generateSchema } = require("../components");

/**
 * Modern Studio Minimalist Gallery Masthead
 */
function ModernHeader(currentPath) {
    const navLink = (hash, label, num) => {
        return `<a href="${hash}" class="modern-masthead-link px-3.5 py-1.5 min-h-[40px] flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors">
            <span class="text-[10px] text-blue-600 font-bold">${num}</span>
            <span>${label}</span>
        </a>`;
    };

    const mobileLink = (hash, label, num) => {
        return `<a href="${hash}" class="modern-mobile-link flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-sm font-semibold tracking-wide text-slate-800 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors">
            <span class="flex items-center gap-3">
                <span class="text-xs font-bold text-blue-600">${num}</span>
                <span>${label}</span>
            </span>
            <span class="text-xs text-slate-400">→</span>
        </a>`;
    };

    return `
    <header class="modern-header sticky top-0 z-50 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-slate-200/80 transition-colors duration-500" role="banner" aria-label="Velora Modern Gallery Navigation">
        <div class="w-full px-4 sm:px-6 lg:px-10">
            <div class="flex items-center justify-between h-14 sm:h-16">
                
                <!-- Studio Exhibition Mark -->
                <a href="/" class="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1" aria-label="Velora Digital Home">
                    <div class="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-sm transition-transform duration-200 group-hover:scale-105">
                        VD
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center gap-1.5">
                            <span class="font-black text-sm tracking-tight text-slate-900 leading-none">VELORA</span>
                            <span class="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-blue-100 text-blue-800">MODERN V6</span>
                        </div>
                        <span class="text-[9px] font-bold uppercase tracking-widest text-slate-500">Spatial Exhibition</span>
                    </div>
                </a>

                <!-- Desktop Exhibition Beacons -->
                <nav class="hidden md:flex items-center gap-1 bg-white/90 border border-slate-200/90 rounded-full px-3 py-0.5 shadow-xs" aria-label="Exhibition Sections">
                    ${navLink('#exhibition-stage', 'Website Worlds', '01')}
                    ${navLink('#spatial-pricing', 'Typographic Tariff', '02')}
                    ${navLink('#spatial-intake', 'Studio Commission', '03')}
                </nav>

                <!-- Action CTA & Mobile Trigger -->
                <div class="flex items-center gap-2.5">
                    <a href="#spatial-intake" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full text-xs font-bold tracking-wider uppercase bg-slate-900 hover:bg-blue-600 text-white shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                        <span>Commission Studio</span>
                        <span aria-hidden="true">→</span>
                    </a>
                    <button type="button" id="modern-mobile-menu-btn" class="md:hidden p-2 min-h-[44px] min-w-[44px] rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" aria-label="Toggle exhibition index" aria-expanded="false" aria-controls="modern-mobile-drawer">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="modern-mobile-drawer" class="hidden md:hidden fixed inset-x-4 top-16 z-50 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xl transition-all" role="dialog" aria-modal="true" aria-label="Mobile Exhibition Index">
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <span class="text-xs font-bold uppercase tracking-widest text-slate-500">Exhibition Index</span>
                <button type="button" id="modern-mobile-close-btn" class="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" aria-label="Close navigation menu">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col gap-1">
                ${mobileLink('#exhibition-stage', 'Website Worlds Exhibition', '01')}
                ${mobileLink('#spatial-pricing', 'Typographic Tariff (Pricing)', '02')}
                ${mobileLink('#spatial-intake', 'Studio Commission & Intake', '03')}
            </div>
            <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-500">Velora Digital Studio</span>
                <a href="#spatial-intake" class="text-xs font-bold text-blue-600 hover:underline">Commission →</a>
            </div>
        </div>
    </header>`;
}

/**
 * Aurora Clinic Website World
 * Visual Grammar: Organic / Calm / Refined / Editorial / Flowing
 * Geometry: Fluid Asymmetric Curvature (rounded-[2.5rem]), Botanical SVG orbits, Parchment surface
 */
function renderAuroraWorld() {
    return `
    <div id="world-aurora" class="website-world active transition-all duration-700 w-full" data-world="aurora" aria-label="Aurora Clinic Signature Design Concept">
        <div class="relative bg-[#FAF7F2] text-[#1F2421] rounded-2xl sm:rounded-[2.5rem] border border-[#E8E2D8] shadow-2xl overflow-hidden transition-all duration-500">

            <!-- Aurora Internal Masthead -->
            <div class="px-5 sm:px-10 py-4 sm:py-5 border-b border-[#E8E2D8]/80 flex items-center justify-between bg-[#FAF7F2]/90">
                <div class="flex items-center gap-2 sm:gap-3">
                    <span class="font-serif text-lg sm:text-xl font-normal tracking-wide text-[#1F2421]">AURORA</span>
                    <span class="text-[10px] uppercase tracking-widest text-[#4A6B5D] font-medium hidden sm:inline-block">· Aesthetic Medicine</span>
                </div>
                <div class="flex items-center gap-3 sm:gap-6 text-xs text-[#525E57] font-medium">
                    <span class="hidden md:inline-block hover:text-[#1F2421] transition-colors cursor-pointer">Approach</span>
                    <span class="hover:text-[#1F2421] transition-colors cursor-pointer">Services</span>
                    <span class="hidden sm:inline-block hover:text-[#1F2421] transition-colors cursor-pointer">Spaces</span>
                    <span class="hover:text-[#1F2421] transition-colors cursor-pointer">Enquiries</span>
                    <span class="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-semibold bg-[#4A6B5D]/10 text-[#4A6B5D] border border-[#4A6B5D]/20">Concept</span>
                </div>
            </div>

            <!-- Aurora Hero Stage: Asymmetric Organic Flow -->
            <div class="p-5 sm:p-10 lg:p-12 relative">
                
                <!-- Curatorial Design Lens Overlay Layer (Collision-Free Responsive Anchoring) -->
                <div class="design-lens-layer absolute inset-0 z-30 pointer-events-none opacity-0 transition-opacity duration-300">
                    <!-- Desktop/Tablet Upper Cluster: Anchored in Hero Stage Top-Right Negative Space -->
                    <div class="absolute top-4 sm:top-6 right-4 sm:right-8 flex flex-col items-end gap-2 max-w-[280px] sm:max-w-xs text-right hidden sm:flex">
                        <div class="bg-[#1F2421]/90 text-white text-[10px] sm:text-[11px] font-mono px-3 py-1.5 rounded-md backdrop-blur-sm shadow-md">
                            <span>LENS: ORGANIC EDITORIAL COMPOSITION</span>
                        </div>
                        <div class="border border-dashed border-[#4A6B5D] p-1.5 sm:p-2 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-sm text-[9px] sm:text-[10px] text-[#4A6B5D] font-mono">
                            <span>[TYPOGRAPHIC HIERARCHY: High-Contrast Display Serif + Restrained Sans]</span>
                        </div>
                    </div>
                    <!-- Lower annotations tucked into stable hero bottom margins -->
                    <div class="absolute bottom-3 sm:bottom-4 left-4 sm:left-8 border border-dashed border-emerald-600 p-1.5 sm:p-2 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-sm text-[9px] sm:text-[10px] text-emerald-800 font-mono hidden lg:block">
                        <span>[SPATIAL BREATHING: 60% Negative Space Builds Clinical Trust]</span>
                    </div>
                    <div class="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 border border-dashed border-[#C28D75] p-1.5 sm:p-2 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-sm text-[9px] sm:text-[10px] text-[#C28D75] font-mono hidden sm:block">
                        <span>[CONVERSION PATHWAY: Frictionless Low-Anxiety Intake Trigger]</span>
                    </div>
                </div>

                <!-- Background Botanical Flow Art (SVG) with Native Interaction Motion -->
                <div id="aurora-botanical-art" class="absolute top-0 right-0 w-1/2 sm:w-7/12 h-full opacity-35 sm:opacity-50 pointer-events-none overflow-hidden transition-all duration-700 ease-out" aria-hidden="true">
                    <svg viewBox="0 0 500 500" class="w-full h-full object-cover">
                        <defs>
                            <linearGradient id="aurora-grad-v6" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#4A6B5D" stop-opacity="0.35"/>
                                <stop offset="100%" stop-color="#C28D75" stop-opacity="0.12"/>
                            </linearGradient>
                        </defs>
                        <path d="M 300,50 C 420,80 480,200 450,320 C 420,440 280,480 180,450 C 80,420 50,300 80,180 C 110,60 200,20 300,50 Z" fill="url(#aurora-grad-v6)"/>
                        <path d="M 350,120 Q 420,220 360,350 T 200,380" fill="none" stroke="#4A6B5D" stroke-width="1.5" stroke-dasharray="4 4"/>
                        <circle cx="360" cy="220" r="4" fill="#C28D75"/>
                        <circle cx="200" cy="380" r="3" fill="#4A6B5D"/>
                    </svg>
                </div>

                <div class="relative z-10 max-w-2xl">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D9] text-[#4A6B5D] text-[10px] font-semibold tracking-wider uppercase mb-4 sm:mb-5">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#4A6B5D]"></span>
                        <span>Signature Design Concept</span>
                    </div>

                    <h3 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#1F2421] leading-[1.15] max-w-lg mb-4 sm:mb-6">
                        Architectural Spatial Balance &amp; Interface Typography.
                    </h3>

                    <p class="text-xs sm:text-base text-[#525E57] font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
                        A bespoke digital experience designed for understated elegance. Every user pathway is calibrated for frictionless routing, visual clarity, and unhurried interaction.
                    </p>

                    <!-- Mobile In-Flow Curatorial Callout (<sm screens only, zero overlap) -->
                    <div class="mobile-lens-callout hidden sm:hidden mb-4 p-2.5 rounded-lg border border-dashed border-[#4A6B5D] bg-[#FAF7F2]/95 text-[10px] font-mono text-[#4A6B5D] flex items-center justify-between gap-2">
                        <span class="font-bold">[LENS: ORGANIC EDITORIAL]</span>
                        <span class="text-[9px] text-[#C28D75] text-right">[Display Serif + Sans]</span>
                    </div>

                    <!-- Aurora Interactive Status Notification (Expands on Trigger Interaction) -->
                    <div id="aurora-interactive-status" class="overflow-hidden transition-all duration-500 max-h-0 opacity-0 mb-4 sm:mb-6 text-[10px] sm:text-[11px] font-mono text-[#4A6B5D] bg-[#4A6B5D]/10 border border-[#4A6B5D]/30 rounded-lg px-3 py-2 flex items-center justify-between">
                        <span>[SPATIAL STATE: Organic Editorial Flow Re-articulated · Negative Space Shifted]</span>
                        <span class="text-[9px] font-bold uppercase tracking-wider bg-[#4A6B5D] text-white px-1.5 py-0.5 rounded">Active</span>
                    </div>

                    <!-- Aurora Conceptual Service Pillars with Native Kinematics -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div id="aurora-pillar-1" class="aurora-pillar p-3.5 sm:p-4 rounded-xl bg-white/75 border border-[#E8E2D8] backdrop-blur-xs transition-all duration-500">
                            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#4A6B5D] block mb-1">01 / Structure</span>
                            <span class="text-xs font-semibold text-[#1F2421] block">Visual Study 01</span>
                            <span class="text-[10px] sm:text-[11px] text-[#7A8780] block mt-0.5">Typography hierarchy</span>
                        </div>
                        <div id="aurora-pillar-2" class="aurora-pillar p-3.5 sm:p-4 rounded-xl bg-white/75 border border-[#E8E2D8] backdrop-blur-xs transition-all duration-500">
                            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#4A6B5D] block mb-1">02 / Rhythm</span>
                            <span class="text-xs font-semibold text-[#1F2421] block">Composition 02</span>
                            <span class="text-[10px] sm:text-[11px] text-[#7A8780] block mt-0.5">Spatial relationships</span>
                        </div>
                        <div id="aurora-pillar-3" class="aurora-pillar p-3.5 sm:p-4 rounded-xl bg-white/75 border border-[#E8E2D8] backdrop-blur-xs transition-all duration-500">
                            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#4A6B5D] block mb-1">03 / Balance</span>
                            <span class="text-xs font-semibold text-[#1F2421] block">Interface Study 03</span>
                            <span class="text-[10px] sm:text-[11px] text-[#7A8780] block mt-0.5">Fluid breakpoints</span>
                        </div>
                    </div>

                    <!-- Aurora Action Row with Tactile Trigger Control -->
                    <div class="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                        <button type="button" id="aurora-interaction-trigger" class="tactile-control px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1F2421] text-[#FAF7F2] text-xs font-semibold tracking-wider hover:bg-[#4A6B5D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F2421] flex items-center gap-2">
                            <span class="btn-label">Trigger Interaction</span>
                            <span class="interaction-arrow inline-block transition-transform duration-300">→</span>
                        </button>
                        <span class="text-[11px] sm:text-xs text-[#7A8780] italic">Direct interaction vector without third-party frameworks.</span>
                    </div>
                </div>
            </div>

            <!-- Aurora Bottom Subtle Colophon Bar -->
            <div class="px-5 sm:px-10 py-3 bg-[#EAE4D9]/60 border-t border-[#E8E2D8] flex items-center justify-between text-[10px] sm:text-[11px] text-[#7A8780]">
                <span>Conceptual Aesthetic Interface · Designed for High-Trust Practices</span>
                <span class="font-mono text-[9px] sm:text-[10px]">AURORA-SPECIMEN-01</span>
            </div>
        </div>
    </div>`;
}

/**
 * Aarav Properties Website World
 * Visual Grammar: Monumental / Geometric / Architectural / Directional
 * Geometry: Sharp right-angles (rounded-none), Architectural Grid, Axonometric Elevation Blueprint
 */
function renderAaravWorld() {
    return `
    <div id="world-aarav" class="website-world hidden transition-all duration-700 w-full" data-world="aarav" aria-label="Aarav Properties Signature Design Concept">
        <div class="relative bg-[#12161A] text-[#E5DECE] rounded-none border-2 border-[#2A323D] shadow-2xl overflow-hidden transition-all duration-500">

            <!-- Architectural Linework Background Grid (SVG) -->
            <div id="aarav-grid-bg" class="absolute inset-0 opacity-15 pointer-events-none transition-all duration-700 ease-out" aria-hidden="true">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="aarav-grid-v6" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5DECE" stroke-width="0.75"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#aarav-grid-v6)"/>
                </svg>
            </div>

            <!-- Aarav Masthead: Heavy Monolith Axis -->
            <div class="px-5 sm:px-10 py-4 sm:py-5 border-b border-[#2A323D] flex items-center justify-between bg-[#12161A]/95 relative z-10">
                <div class="flex items-center gap-2 sm:gap-3">
                    <span class="font-mono text-xs text-[#C5A059] font-bold tracking-widest">+</span>
                    <span class="font-sans font-black text-base sm:text-xl tracking-wider text-white">AARAV PROPERTIES</span>
                </div>
                <div class="flex items-center gap-3 sm:gap-6 text-xs text-[#9EACB5] font-mono">
                    <span class="hidden md:inline-block hover:text-white transition-colors cursor-pointer">[01] Portfolio</span>
                    <span class="hover:text-white transition-colors cursor-pointer">[02] Spaces</span>
                    <span class="hidden sm:inline-block hover:text-white transition-colors cursor-pointer">[03] Advisory</span>
                    <span class="hover:text-white transition-colors cursor-pointer">[04] Enquiries</span>
                    <span class="px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40">Concept</span>
                </div>
            </div>

            <!-- Aarav Architectural Body -->
            <div class="p-5 sm:p-10 lg:p-12 relative z-10">
                
                <!-- Curatorial Design Lens Overlay Layer (Collision-Free Responsive Anchoring) -->
                <div class="design-lens-layer absolute inset-0 z-30 pointer-events-none opacity-0 transition-opacity duration-300">
                    <!-- Desktop/Tablet Upper Cluster: Anchored in Hero Stage Top-Right Negative Space -->
                    <div class="absolute top-4 sm:top-6 right-4 sm:right-8 flex flex-col items-end gap-2 max-w-[280px] sm:max-w-xs text-right hidden sm:flex">
                        <div class="bg-[#C5A059] text-slate-950 text-[10px] sm:text-[11px] font-mono px-3 py-1.5 font-bold shadow-md">
                            <span>LENS: MONUMENTAL ARCHITECTURAL GRID</span>
                        </div>
                        <div class="border border-dashed border-[#C5A059] p-1.5 sm:p-2 bg-[#12161A]/95 text-[9px] sm:text-[10px] text-[#C5A059] font-mono">
                            <span>[STRUCTURAL RATIO: Strict Modular Axes with Monospaced Coordinates]</span>
                        </div>
                    </div>
                    <!-- Lower annotations tucked into stable hero bottom margins -->
                    <div class="absolute bottom-3 sm:bottom-4 left-4 sm:left-8 border border-dashed border-[#E5DECE] p-1.5 sm:p-2 bg-[#12161A]/95 text-[9px] sm:text-[10px] text-[#E5DECE] font-mono hidden sm:block">
                        <span>[INFORMATION DENSITY: High Scannability for Ultra-High-Net-Worth Inquiries]</span>
                    </div>
                    <div class="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 border border-dashed border-[#C5A059]/60 p-1.5 sm:p-2 bg-[#12161A]/95 text-[9px] sm:text-[10px] text-[#9EACB5] font-mono hidden lg:block">
                        <span>[AXONOMETRIC SPEC: Modular Z-Axis Depth Mapping]</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    
                    <!-- Left: Monumental Typography & Overview -->
                    <div class="lg:col-span-7">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#1E252D] text-[#C5A059] text-[9px] sm:text-[10px] font-mono tracking-widest uppercase mb-4 sm:mb-5 border-l-2 border-[#C5A059]">
                            <span>SIGNATURE DESIGN CONCEPT · RESIDENTIAL ADVISORY</span>
                        </div>

                        <h3 class="font-sans text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6">
                            MONUMENTAL COMPOSITIONS. DIRECTIONAL LAYOUTS.
                        </h3>

                        <p class="text-xs sm:text-base text-[#9EACB5] font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
                            Curated spatial portfolios designed for visual clarity. Uncompromising structural elegance, direct conversion routing, and zero third-party framework bloat.
                        </p>

                        <!-- Mobile In-Flow Curatorial Callout (<sm screens only, zero overlap) -->
                        <div class="mobile-lens-callout hidden sm:hidden mb-4 p-2.5 rounded border border-dashed border-[#C5A059] bg-[#181F26] text-[10px] font-mono text-[#C5A059] flex items-center justify-between gap-2">
                            <span class="font-bold">[LENS: MONUMENTAL ARCHITECTURAL]</span>
                            <span class="text-[9px] text-[#E5DECE] text-right">[Modular Axes + Grid]</span>
                        </div>

                        <!-- Aarav Interactive Status Notification (Expands on Trigger Interaction) -->
                        <div id="aarav-interactive-status" class="overflow-hidden transition-all duration-500 max-h-0 opacity-0 mb-4 sm:mb-6 text-[10px] sm:text-[11px] font-mono text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/30 rounded px-3 py-2 flex items-center justify-between">
                            <span>[STRUCTURAL RECONFIGURATION: Z-Axis Elevation Uncoupled · 120mm Pitch]</span>
                            <span class="text-[9px] font-bold uppercase tracking-wider bg-[#C5A059] text-slate-950 px-1.5 py-0.5 rounded-none">Active</span>
                        </div>

                        <!-- Architectural Dimension Specs with Interactive Lighting -->
                        <div id="aarav-spec-boxes" class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 font-mono mb-6 sm:mb-8">
                            <div class="p-2.5 sm:p-3 bg-[#181F26] border border-[#2A323D] transition-all duration-300">
                                <span class="text-[9px] text-[#71828D] block uppercase">Inventory Type</span>
                                <span class="text-xs font-bold text-[#E5DECE] block mt-0.5">Property Study 01</span>
                            </div>
                            <div class="p-2.5 sm:p-3 bg-[#181F26] border border-[#2A323D] transition-all duration-300">
                                <span class="text-[9px] text-[#71828D] block uppercase">Coordination</span>
                                <span class="text-xs font-bold text-[#C5A059] block mt-0.5">Advisory Interface</span>
                            </div>
                            <div class="p-2.5 sm:p-3 bg-[#181F26] border border-[#2A323D] col-span-2 sm:col-span-1 transition-all duration-300">
                                <span class="text-[9px] text-[#71828D] block uppercase">Architecture</span>
                                <span class="text-xs font-bold text-[#E5DECE] block mt-0.5">Spatial Module 03</span>
                            </div>
                        </div>

                        <div class="flex flex-wrap items-center gap-3 sm:gap-4">
                            <button type="button" id="aarav-interaction-trigger" class="tactile-control px-5 sm:px-6 py-2.5 sm:py-3 rounded-none bg-[#C5A059] text-slate-950 text-xs font-bold font-mono tracking-wider hover:bg-[#E5DECE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] flex items-center gap-2">
                                <span class="btn-label">EXPLORE PORTFOLIO</span>
                                <span class="interaction-arrow inline-block transition-transform duration-300">→</span>
                            </button>
                            <span class="text-[11px] sm:text-xs font-mono text-[#71828D]">Direct Principal Consultation</span>
                        </div>
                    </div>

                    <!-- Right: Architectural Isometric Elevation Diagram (SVG) -->
                    <div class="lg:col-span-5 bg-[#181F26] p-4 sm:p-6 border border-[#2A323D] relative overflow-hidden">
                        <div class="flex items-center justify-between text-[10px] font-mono text-[#71828D] mb-3 pb-2 border-b border-[#2A323D]">
                            <span>AXONOMETRIC SPECIFICATION</span>
                            <span id="aarav-fig-label" class="text-[#C5A059] transition-colors duration-300">[FIG. 04-A]</span>
                        </div>
                        <div class="h-44 sm:h-52 flex items-center justify-center">
                            <svg viewBox="0 0 240 180" class="w-full h-full max-h-48">
                                <g transform="translate(120, 95)">
                                    <g id="aarav-elevation-poly" class="transition-transform duration-500 ease-out">
                                        <polygon points="0,-55 55,-22 0,10 -55,-22" fill="#1E252D" stroke="#C5A059" stroke-width="1.5"/>
                                        <circle cx="0" cy="-55" r="3" fill="#C5A059"/>
                                        <circle cx="55" cy="-22" r="3" fill="#E5DECE"/>
                                        <circle cx="-55" cy="-22" r="3" fill="#E5DECE"/>
                                    </g>
                                    <polygon points="-55,-22 0,10 0,55 -55,22" fill="#151A20" stroke="#2A323D" stroke-width="1"/>
                                    <polygon points="0,10 55,-22 55,22 0,55" fill="#1C232B" stroke="#2A323D" stroke-width="1"/>
                                    <line x1="-55" y1="-5" x2="0" y2="28" stroke="#C5A059" stroke-width="0.75" stroke-dasharray="2 2"/>
                                    <line x1="0" y1="28" x2="55" y2="-5" stroke="#C5A059" stroke-width="0.75" stroke-dasharray="2 2"/>
                                    <line x1="-55" y1="10" x2="0" y2="42" stroke="#C5A059" stroke-width="0.75"/>
                                    <line x1="0" y1="42" x2="55" y2="10" stroke="#C5A059" stroke-width="0.75"/>
                                </g>
                            </svg>
                        </div>
                        <div class="flex items-center justify-between text-[9px] font-mono text-[#71828D] mt-2 pt-2 border-t border-[#2A323D]">
                            <span>GRID: 28.4595° N, 77.0266° E</span>
                            <span>STRUCTURAL CADENCE</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Aarav Bottom Colophon -->
            <div class="px-5 sm:px-10 py-3 bg-[#0D1013] border-t border-[#2A323D] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#71828D]">
                <span>ARCHITECTURAL REAL ESTATE PRESENTATION MODEL</span>
                <span class="text-[#C5A059]">AARAV-SPECIMEN-02</span>
            </div>
        </div>
    </div>`;
}

/**
 * The Spice Room Website World
 * Visual Grammar: Sensory / Warm / Expressive / Layered / Typographic Hospitality
 * Geometry: Layered Asymmetric Arch (rounded-t-[3rem] rounded-b-xl), Radiating Terracotta Halo
 */
function renderSpiceWorld() {
    return `
    <div id="world-spice" class="website-world hidden transition-all duration-700 w-full" data-world="spice" aria-label="The Spice Room Signature Design Concept">
        <div class="relative bg-[#2B0E14] text-[#F7EBE1] rounded-2xl sm:rounded-t-[3rem] sm:rounded-b-xl border border-[#4A1D27] shadow-2xl overflow-hidden transition-all duration-500">

            <!-- Warm Terracotta Radial Ambient Halo (SVG) -->
            <div id="spice-halo-1" class="spice-ambient-halo absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#D9532F]/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out" aria-hidden="true"></div>
            <div id="spice-halo-2" class="spice-ambient-halo absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#8C2D19]/30 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out" aria-hidden="true"></div>

            <!-- Spice Masthead: Classical Dining Balance -->
            <div class="px-5 sm:px-10 py-4 sm:py-5 border-b border-[#4A1D27] flex items-center justify-between bg-[#2B0E14]/90 relative z-10">
                <div class="flex items-center gap-2 sm:gap-3">
                    <span class="font-serif italic text-base sm:text-xl font-normal text-[#F7EBE1]">The Spice Room</span>
                    <span class="text-[9px] uppercase tracking-widest text-[#D9532F] font-bold hidden sm:inline-block">· Culinary Atelier</span>
                </div>
                <div class="flex items-center gap-3 sm:gap-6 text-xs text-[#D8B9B0] font-sans">
                    <span class="hidden md:inline-block hover:text-white transition-colors cursor-pointer">The Hearth</span>
                    <span class="hover:text-white transition-colors cursor-pointer">Collection</span>
                    <span class="hidden sm:inline-block hover:text-white transition-colors cursor-pointer">Cellar</span>
                    <span class="hover:text-white transition-colors cursor-pointer">Visit</span>
                    <span class="px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold bg-[#D9532F]/20 text-[#D9532F] border border-[#D9532F]/40 rounded-full">Concept</span>
                </div>
            </div>

            <!-- Spice Hero Body -->
            <div class="p-5 sm:p-10 lg:p-12 relative z-10">
                
                <!-- Curatorial Design Lens Overlay Layer (Collision-Free Responsive Anchoring) -->
                <div class="design-lens-layer absolute inset-0 z-30 pointer-events-none opacity-0 transition-opacity duration-300">
                    <!-- Desktop/Tablet Upper Cluster: Anchored in Hero Stage Top-Right Negative Space -->
                    <div class="absolute top-4 sm:top-6 right-4 sm:right-8 flex flex-col items-end gap-2 max-w-[280px] sm:max-w-xs text-right hidden sm:flex">
                        <div class="bg-[#D9532F] text-white text-[10px] sm:text-[11px] font-mono px-3 py-1.5 font-bold shadow-md">
                            <span>LENS: SENSORY HOSPITALITY TYPOGRAPHY</span>
                        </div>
                        <div class="border border-dashed border-[#D9532F] p-1.5 sm:p-2 bg-[#2B0E14]/95 text-[9px] sm:text-[10px] text-[#F7EBE1] font-mono">
                            <span>[ATMOSPHERIC EMOTION: Radial Warm Ambient Halos Drive Dining Appetite]</span>
                        </div>
                    </div>
                    <!-- Lower annotations tucked into stable hero bottom margins -->
                    <div class="absolute bottom-3 sm:bottom-4 left-4 sm:left-8 border border-dashed border-[#D9532F] p-1.5 sm:p-2 bg-[#2B0E14]/95 text-[9px] sm:text-[10px] text-[#D8B9B0] font-mono hidden lg:block">
                        <span>[SENSORY TAXONOMY: Layered Terracotta Terroir System]</span>
                    </div>
                    <div class="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 border border-dashed border-[#F7EBE1]/80 p-1.5 sm:p-2 bg-[#2B0E14]/95 text-[9px] sm:text-[10px] text-[#F7EBE1] font-mono hidden sm:block">
                        <span>[DIRECT RESERVATION VECTOR: One-Tap High-Intent Dining Booking]</span>
                    </div>
                </div>

                <div class="max-w-2xl">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D1820] text-[#D9532F] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase mb-4 sm:mb-5 border border-[#4A1D27]">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#D9532F]"></span>
                        <span>Signature Design Concept · Regional Cuisine</span>
                    </div>

                    <h3 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F7EBE1] leading-[1.18] max-w-lg mb-4 sm:mb-6">
                        An Expressive Sequence of Warmth &amp; Typographic Terroir.
                    </h3>

                    <p class="text-xs sm:text-base text-[#D8B9B0] font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
                        Elevating regional hospitality into an immersive digital sequence. Fast, lightweight HTML presentations eliminate cumbersome loading times, allowing visual craftsmanship to shine.
                    </p>

                    <!-- Mobile In-Flow Curatorial Callout (<sm screens only, zero overlap) -->
                    <div class="mobile-lens-callout hidden sm:hidden mb-4 p-2.5 rounded-xl border border-dashed border-[#D9532F] bg-[#3D1820] text-[10px] font-mono text-[#D9532F] flex items-center justify-between gap-2">
                        <span class="font-bold">[LENS: SENSORY HOSPITALITY]</span>
                        <span class="text-[9px] text-[#F7EBE1] text-right">[Warm Ambient Terroir]</span>
                    </div>

                    <!-- Spice Interactive Status Notification (Expands on Trigger Interaction) -->
                    <div id="spice-interactive-status" class="overflow-hidden transition-all duration-500 max-h-0 opacity-0 mb-4 sm:mb-6 text-[10px] sm:text-[11px] font-mono text-[#D9532F] bg-[#3D1820] border border-[#D9532F]/40 rounded-xl px-3 py-2 flex items-center justify-between">
                        <span>[SEQUENCE EXPANSION: Tactile Depth Unfolded · Sensorial Terroir Active]</span>
                        <span class="text-[9px] font-bold uppercase tracking-wider bg-[#D9532F] text-white px-1.5 py-0.5 rounded-full">Active</span>
                    </div>

                    <!-- Culinary Sequences with Kinetic Depth Layers -->
                    <div id="spice-layers" class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div id="spice-layer-1" class="spice-layer p-3.5 sm:p-4 rounded-xl bg-[#3D1820]/60 border border-[#4A1D27] transition-all duration-500">
                            <span class="text-[9px] sm:text-[10px] font-serif italic text-[#D9532F] block mb-1">Layer I</span>
                            <span class="text-xs font-semibold text-[#F7EBE1] block">Composition 01</span>
                            <span class="text-[10px] sm:text-[11px] text-[#A67E75] block mt-0.5">Atmospheric emotion</span>
                        </div>
                        <div id="spice-layer-2" class="spice-layer p-3.5 sm:p-4 rounded-xl bg-[#3D1820]/60 border border-[#4A1D27] transition-all duration-500">
                            <span class="text-[9px] sm:text-[10px] font-serif italic text-[#D9532F] block mb-1">Layer II</span>
                            <span class="text-xs font-semibold text-[#F7EBE1] block">Experience Layer 02</span>
                            <span class="text-[10px] sm:text-[11px] text-[#A67E75] block mt-0.5">Typographic warmth</span>
                        </div>
                        <div id="spice-layer-3" class="spice-layer p-3.5 sm:p-4 rounded-xl bg-[#3D1820]/60 border border-[#4A1D27] transition-all duration-500">
                            <span class="text-[9px] sm:text-[10px] font-serif italic text-[#D9532F] block mb-1">Layer III</span>
                            <span class="text-xs font-semibold text-[#F7EBE1] block">Menu System 01</span>
                            <span class="text-[10px] sm:text-[11px] text-[#A67E75] block mt-0.5">Structured delivery</span>
                        </div>
                    </div>

                    <!-- Action Row with Tactile Trigger Control -->
                    <div class="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                        <button type="button" id="spice-interaction-trigger" class="tactile-control px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#D9532F] text-white text-xs font-bold tracking-wider hover:bg-[#8C2D19] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9532F] flex items-center gap-2">
                            <span class="btn-label">Initiate Sequence</span>
                            <span class="interaction-arrow inline-block transition-transform duration-300">→</span>
                        </button>
                        <span class="text-[11px] sm:text-xs text-[#A67E75] italic">Direct conversion vector without third-party commissions.</span>
                    </div>
                </div>
            </div>

            <!-- Spice Bottom Colophon -->
            <div class="px-5 sm:px-10 py-3 bg-[#200A0F] border-t border-[#4A1D27] flex items-center justify-between text-[10px] sm:text-[11px] text-[#A67E75]">
                <span>BOUTIQUE HOSPITALITY DIGITAL ARCHITECTURE</span>
                <span class="text-[#D9532F]">SPICE-SPECIMEN-03</span>
            </div>
        </div>
    </div>`;
}

/**
 * Zone 1: Spatial Exhibition Canvas (Dominant First Viewport on Desktop & Mobile!)
 * Mobile Art-Direction: Artwork appears immediately below a sleek horizontal selector rail!
 */
function renderSpatialExhibition() {
    return `
    <section id="exhibition-stage" class="spatial-exhibition-stage relative w-full pt-2 sm:pt-4 pb-16 lg:pb-24 overflow-hidden" aria-label="Velora Digital Website Worlds Exhibition">
        
        <!-- Spatial Ambient Backdrop Canvas (Dynamically shifts tone per world) -->
        <div id="ambient-color-field" class="absolute inset-0 pointer-events-none transition-colors duration-1000 -z-10 bg-[#FAF7F2]" aria-hidden="true"></div>

        <div class="w-full px-3 sm:px-6 lg:px-10 max-w-[1600px] mx-auto">
            
            <!-- MOBILE ART-DIRECTED TOP RAIL (< lg screens) -->
            <!-- Ensures Artwork Dominates 70%+ of the First Viewport on Mobile! -->
            <div class="lg:hidden flex flex-col gap-2.5 mb-3 pt-1">
                <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">EXHIBITION · 3 WORLDS</span>
                    <button type="button" id="mobile-design-lens-toggle" class="tactile-control text-[10px] font-mono px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                        Lens: OFF
                    </button>
                </div>
                <!-- Horizontal Fast-Switch Rail -->
                <div class="grid grid-cols-3 gap-1.5 p-1 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-2xs" role="tablist" aria-label="Mobile World Switcher">
                    <button type="button" id="mobile-btn-world-aurora" class="tactile-control mobile-tab-btn active py-2 px-1 rounded-lg text-center text-[11px] font-bold transition-all bg-slate-900 text-white shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" role="tab" aria-selected="true">
                        01 Aurora
                    </button>
                    <button type="button" id="mobile-btn-world-aarav" class="tactile-control mobile-tab-btn py-2 px-1 rounded-lg text-center text-[11px] font-bold transition-all text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" role="tab" aria-selected="false">
                        02 Aarav
                    </button>
                    <button type="button" id="mobile-btn-world-spice" class="tactile-control mobile-tab-btn py-2 px-1 rounded-lg text-center text-[11px] font-bold transition-all text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" role="tab" aria-selected="false">
                        03 Spice
                    </button>
                </div>
            </div>

            <!-- DESKTOP SPATIAL COMPOSITION (Side-by-side Placard + Monumental Artwork) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                <!-- Desktop Placard / Curatorial Overview (Hidden on Mobile top, visible on lg) -->
                <div class="hidden lg:flex lg:col-span-4 flex-col justify-between pt-4">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-widest uppercase mb-4 shadow-xs">
                            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span>LIVING EXHIBITION · 3 WORLDS</span>
                        </div>

                        <h1 class="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mb-4">
                            Websites As Spatial Architecture.
                        </h1>

                        <p class="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                            Three distinct client environments engineered by Velora Digital. Experience how bespoke typography, responsive rhythm, and visual geometry establish market authority.
                        </p>

                        <!-- World Selector Controls: Immediate, Tactile, High-Contrast -->
                        <div class="bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1.5 mb-6" role="tablist" aria-label="Select Website World">
                            
                            <button type="button" id="btn-world-aurora" class="tactile-control world-tab-btn active w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 bg-slate-900 text-white shadow-sm" role="tab" aria-selected="true" aria-controls="world-aurora">
                                <div class="flex items-center gap-3">
                                    <span class="w-2.5 h-2.5 rounded-full bg-[#4A6B5D] border border-white/40"></span>
                                    <div>
                                        <div class="text-xs font-bold tracking-wide">01 / AURORA CLINIC</div>
                                        <div class="text-[10px] opacity-75">Organic · Flowing Editorial</div>
                                    </div>
                                </div>
                                <span class="text-xs font-mono text-blue-400">View ↗</span>
                            </button>

                            <button type="button" id="btn-world-aarav" class="tactile-control world-tab-btn w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 hover:bg-slate-100 text-slate-800" role="tab" aria-selected="false" aria-controls="world-aarav">
                                <div class="flex items-center gap-3">
                                    <span class="w-2.5 h-2.5 rounded-full bg-[#C5A059] border border-slate-400"></span>
                                    <div>
                                        <div class="text-xs font-bold tracking-wide">02 / AARAV PROPERTIES</div>
                                        <div class="text-[10px] text-slate-500">Monumental · Architectural Grid</div>
                                    </div>
                                </div>
                                <span class="text-xs font-mono text-slate-400">View ↗</span>
                            </button>

                            <button type="button" id="btn-world-spice" class="tactile-control world-tab-btn w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 hover:bg-slate-100 text-slate-800" role="tab" aria-selected="false" aria-controls="world-spice">
                                <div class="flex items-center gap-3">
                                    <span class="w-2.5 h-2.5 rounded-full bg-[#D9532F] border border-slate-400"></span>
                                    <div>
                                        <div class="text-xs font-bold tracking-wide">03 / THE SPICE ROOM</div>
                                        <div class="text-[10px] text-slate-500">Sensory · Warm Hospitality</div>
                                    </div>
                                </div>
                                <span class="text-xs font-mono text-slate-400">View ↗</span>
                            </button>

                        </div>

                        <!-- Analytical Design Lens Toggle -->
                        <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs mb-6">
                            <div class="flex flex-col">
                                <span class="text-xs font-bold text-slate-900">Curatorial Design Lens</span>
                                <span class="text-[10px] text-slate-500">Inspect typography, spacing &amp; hierarchy</span>
                            </div>
                            <button type="button" id="design-lens-toggle" class="tactile-control px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors" aria-pressed="false">
                                <span>Lens: OFF</span>
                            </button>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-normal">
                        <span class="font-bold text-slate-700 block mb-0.5">EXHIBITION PRINCIPLE</span>
                        Specimens are live responsive compositions designed by Velora. No templates, no generic framework bloat.
                    </div>
                </div>

                <!-- Main Exhibition Artwork Stage (>65% on Desktop, Dominant on First Viewport!) -->
                <div class="lg:col-span-8 relative min-h-[460px] sm:min-h-[540px] flex items-center justify-center">
                    <div id="artwork-stage-container" class="w-full relative transition-transform duration-500">
                        ${renderAuroraWorld()}
                        ${renderAaravWorld()}
                        ${renderSpiceWorld()}
                    </div>
                </div>

            </div>

            <!-- Mobile Sub-Specimen Philosophy Strip (Appears below the dominant mobile artwork) -->
            <div class="lg:hidden mt-8 p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-xs">
                <span class="font-black text-slate-900 uppercase tracking-wider block mb-1">Websites As Spatial Architecture</span>
                Velora Digital engineers bespoke digital environments for clinics, real estate advisories, and culinary destinations. Each website world features independent geometry, tailored typography, and friction-free inquiry vectors.
            </div>

        </div>
    </section>`;
}

/**
 * Zone 2: Typographic Pricing Exhibition (Spatial Tariff)
 * STRICT V6 RULE: NO SaaS cards, NO comparison tables, NO calculators!
 * Pure spatial typography and architectural gridlines.
 */
function renderTypographicPricing() {
    return `
    <section id="spatial-pricing" class="spatial-pricing-zone relative w-full py-16 sm:py-24 bg-slate-900 text-white overflow-hidden" aria-label="Velora Studio Pricing Tariff">
        
        <!-- Architectural Gridlines -->
        <div class="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="white" stroke-width="1"/>
                <line x1="0" y1="80%" x2="100%" y2="80%" stroke="white" stroke-width="1"/>
                <line x1="33%" y1="0" x2="33%" y2="100%" stroke="white" stroke-width="1"/>
                <line x1="66%" y1="0" x2="66%" y2="100%" stroke="white" stroke-width="1"/>
            </svg>
        </div>

        <div class="w-full px-4 sm:px-6 lg:px-10 max-w-[1600px] mx-auto relative z-10">
            
            <!-- Section Header: Monumental Typographic Tag -->
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-800">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">[02] STUDIO TARIFF &amp; SCOPES</span>
                    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Transparent Commercial Investment.</h2>
                </div>
                <div class="mt-4 md:mt-0 text-xs font-mono text-slate-400 max-w-sm">
                    Guaranteed fixed investments. Full IP ownership upon final sign-off. Strict ₹0 monthly licensing lock-ins.
                </div>
            </div>

            <!-- Spatial Typographic Grid (No Cards!) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 border-y border-slate-800 mb-16">
                
                <!-- Tier 1: Essential -->
                <div class="spatial-reveal-item pricing-tier-card py-8 lg:py-10 lg:pr-8 flex flex-col justify-between rounded-xl px-4 lg:px-6">
                    <div>
                        <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
                            <span>TIER // 01</span>
                            <span>ESSENTIAL</span>
                        </div>
                        <div class="mb-6">
                            <span class="font-sans text-5xl sm:text-6xl font-black text-white tracking-tight">₹14,999</span>
                            <span class="text-xs text-slate-400 block mt-1 font-mono">One-time studio investment</span>
                        </div>
                        <p class="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                            For emerging clinics, boutique practices, and single-location businesses requiring immediate digital authority.
                        </p>
                        <ul class="flex flex-col gap-2.5 text-xs text-slate-300 font-medium mb-8">
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>3 to 5 Bespoke Responsive Pages</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Direct Tap-to-Call &amp; WhatsApp Integration</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Google Maps &amp; Schema.org Foundation</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Sub-second 4G/5G Performance Baseline</span>
                            </li>
                        </ul>
                    </div>
                    <a href="#spatial-intake" class="tactile-control w-full py-3.5 rounded-xl bg-slate-800 text-white text-xs font-bold text-center uppercase tracking-wider hover:bg-white hover:text-slate-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border border-slate-700">
                        Commission Essential →
                    </a>
                </div>

                <!-- Tier 2: Professional (Elevated Center Column) -->
                <div class="spatial-reveal-item pricing-tier-card py-8 lg:py-10 lg:px-8 flex flex-col justify-between rounded-xl px-4 lg:px-6">
                    <div>
                        <div class="flex items-center justify-between text-xs font-mono text-blue-400 mb-6">
                            <span>TIER // 02</span>
                            <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold">POPULAR CHOICE</span>
                        </div>
                        <div class="mb-6">
                            <span class="font-sans text-5xl sm:text-6xl font-black text-white tracking-tight">₹34,999</span>
                            <span class="text-xs text-slate-400 block mt-1 font-mono">One-time studio investment</span>
                        </div>
                        <p class="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                            For established commercial operators commanding regional market authority and continuous client inquiries.
                        </p>
                        <ul class="flex flex-col gap-2.5 text-xs text-slate-300 font-medium mb-8">
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Up to 10 Custom Structured Templates</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Complete Local SEO Foundation &amp; Schema</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Interactive Case Study &amp; Gallery Architecture</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Frictionless Inquiry Booking Forms</span>
                            </li>
                        </ul>
                    </div>
                    <a href="#spatial-intake" class="tactile-control w-full py-3.5 rounded-xl bg-blue-600 text-white text-xs font-bold text-center uppercase tracking-wider hover:bg-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                        Commission Professional →
                    </a>
                </div>

                <!-- Tier 3: Custom Architecture -->
                <div class="spatial-reveal-item pricing-tier-card py-8 lg:py-10 lg:pl-8 flex flex-col justify-between rounded-xl px-4 lg:px-6">
                    <div>
                        <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
                            <span>TIER // 03</span>
                            <span>CUSTOM ARCHITECTURE</span>
                        </div>
                        <div class="mb-6">
                            <span class="font-sans text-5xl sm:text-6xl font-black text-white tracking-tight">₹69,999+</span>
                            <span class="text-xs text-slate-400 block mt-1 font-mono">Bespoke flagship scope</span>
                        </div>
                        <p class="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                            Full digital flagships for multi-partner practices, real estate brokers, and bespoke hospitality portfolios.
                        </p>
                        <ul class="flex flex-col gap-2.5 text-xs text-slate-300 font-medium mb-8">
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Unconstrained Architectural Design Scope</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Complex Multi-Location Directory Structures</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Advanced Conversion Logic &amp; Routing</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-blue-400 font-bold">✓</span>
                                <span>Dedicated Principal Design Direction</span>
                            </li>
                        </ul>
                    </div>
                    <a href="#spatial-intake" class="tactile-control w-full py-3.5 rounded-xl bg-slate-800 text-white text-xs font-bold text-center uppercase tracking-wider hover:bg-white hover:text-slate-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border border-slate-700">
                        Commission Custom Flagship →
                    </a>
                </div>

            </div>

            <!-- Add-On Modular Extensions (Strict Canonical Truth) -->
            <div class="spatial-reveal-item pt-8 border-t border-slate-800">
                <span class="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-6">MODULAR ADDITIONS &amp; CARE SERVICES</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                    <div class="flex items-center justify-between pb-3 md:pb-0 border-b md:border-b-0 border-slate-800">
                        <span class="text-slate-300">Additional Custom Page</span>
                        <span class="text-white font-bold text-sm">₹1,500 / page</span>
                    </div>
                    <div class="flex items-center justify-between pb-3 md:pb-0 border-b md:border-b-0 border-slate-800">
                        <span class="text-slate-300">Local SEO Foundation</span>
                        <span class="text-white font-bold text-sm">₹17,500</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-slate-300">Annual Maintenance &amp; Care</span>
                        <span class="text-white font-bold text-sm">₹15,000 / year</span>
                    </div>
                </div>
            </div>

        </div>
    </section>`;
}

/**
 * Zone 3: Architectural Project Intake (Contact / Handoff)
 * Functional SSR contact form linked to /api/contact, honeypot, accessible labels
 */
function renderSpatialIntake() {
    return `
    <section id="spatial-intake" class="spatial-intake-zone relative w-full py-16 sm:py-24 bg-[#FAF9F5] border-t border-slate-200 overflow-hidden" aria-label="Commission Velora Studio">
        <div class="w-full px-4 sm:px-6 lg:px-10 max-w-[1600px] mx-auto">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                <!-- Left: Studio Manifesto & Direct Contacts -->
                <div class="spatial-reveal-item lg:col-span-5">
                    <span class="text-xs font-mono uppercase tracking-widest text-blue-600 block mb-2">[03] STUDIO COMMISSION INTAKE</span>
                    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6">
                        Commission an Architectural Digital Flagship.
                    </h2>
                    
                    <p class="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                        Every project at Velora Digital is designed and authored directly by principal practitioners. No junior handoffs, no template recycling.
                    </p>

                    <div class="flex flex-col gap-3 font-mono text-xs text-slate-700 mb-8">
                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <span class="text-slate-400">TELEPHONE</span>
                            <a href="tel:+917303733735" class="font-bold text-slate-900 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">+91 73037 33735</a>
                        </div>
                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <span class="text-slate-400">WHATSAPP</span>
                            <a href="https://wa.me/917303733735" target="_blank" rel="noopener noreferrer" class="font-bold text-slate-900 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">+91 73037 33735</a>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                        <span class="font-bold block mb-1">PROPOSAL CONSULTATION</span>
                        Proposal timeline and structural roadmap discussed directly after initial brief review.
                    </div>
                </div>

                <!-- Right: High-Contrast Architectural Commission Form (Seamless integration) -->
                <div class="spatial-reveal-item lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
                    <form id="modern-commission-form" method="POST" action="/api/contact" class="flex flex-col gap-5" novalidate>
                        
                        <!-- Honeypot anti-spam -->
                        <div class="hidden" aria-hidden="true">
                            <label for="modern-website_url">Website URL</label>
                            <input type="text" id="modern-website_url" name="website_url" tabindex="-1" autocomplete="off">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="modern-name" class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                                    Your Full Name <span class="text-rose-500">*</span>
                                </label>
                                <input type="text" id="modern-name" name="name" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all placeholder:text-slate-400" placeholder="e.g. Dr. Alistair Vance">
                            </div>
                            <div>
                                <label for="modern-business" class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                                    Practice / Enterprise <span class="text-rose-500">*</span>
                                </label>
                                <input type="text" id="modern-business" name="business" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all placeholder:text-slate-400" placeholder="e.g. Vance Aesthetic Clinic">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label for="modern-email" class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                                    Direct Email <span class="text-rose-500">*</span>
                                </label>
                                <input type="email" id="modern-email" name="email" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all placeholder:text-slate-400" placeholder="alistair@vanceclinic.in">
                            </div>
                            <div>
                                <label for="modern-phone" class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                                    Phone / WhatsApp <span class="text-rose-500">*</span>
                                </label>
                                <input type="tel" id="modern-phone" name="phone" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all placeholder:text-slate-400" placeholder="+91 98765 43210">
                            </div>
                        </div>

                        <div>
                            <label for="modern-scope" class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                                Intended Scope Tier
                            </label>
                            <select id="modern-scope" name="scope" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all">
                                <option value="Professional — ₹34,999">Professional — ₹34,999 (Recommended)</option>
                                <option value="Essential — ₹14,999">Essential — ₹14,999</option>
                                <option value="Custom Architecture — ₹69,999+">Custom Architecture — ₹69,999+</option>
                            </select>
                        </div>

                        <div>
                            <label for="modern-message" class="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                                Architectural Requirements &amp; Goals
                            </label>
                            <textarea id="modern-message" name="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all placeholder:text-slate-400" placeholder="Describe your current conversion challenges, target clientele, or specific launch timeline..."></textarea>
                        </div>

                        <!-- Feedback area -->
                        <div id="modern-form-feedback" class="hidden p-4 rounded-xl text-xs font-semibold" role="alert"></div>

                        <button type="submit" id="modern-submit-btn" class="tactile-control w-full py-4 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shadow-md">
                            <span>Transmitting Studio Commission Brief →</span>
                        </button>

                        <div class="text-[11px] text-slate-400 text-center">
                            Protected by Velora Digital privacy guarantee. Zero spam, strictly confidential.
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </section>`;
}

/**
 * Modern Studio Colophon & Footer
 */
function renderModernFooter() {
    return `
    <footer class="modern-footer bg-[#FAF9F5] border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-10 text-xs text-slate-500" role="contentinfo">
        <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-3">
                <span class="font-black text-slate-900">VELORA DIGITAL</span>
                <span>· Modern V6 Spatial Exhibition</span>
            </div>
            
            <div class="flex items-center gap-6">
                <a href="#exhibition-stage" class="hover:text-slate-900 transition-colors">Exhibition</a>
                <a href="#spatial-pricing" class="hover:text-slate-900 transition-colors">Tariff</a>
                <a href="#spatial-intake" class="hover:text-slate-900 transition-colors">Commission</a>
                <a href="/privacy" class="hover:text-slate-900 transition-colors">Privacy</a>
            </div>

            <div class="text-[11px] text-slate-400">
                © 2026 Velora Digital. All Rights Reserved.
            </div>
        </div>
    </footer>`;
}

/**
 * Main Modern V6 SSR Presentation Renderer
 */
function renderModernExperience(currentPath) {
    const meta = {
        title: "Velora Digital — Modern Spatial Website Exhibition",
        description: "An interactive spatial exhibition of three website worlds engineered by Velora Digital: Aurora Clinic, Aarav Properties, and The Spice Room."
    };

    const headerContent = ModernHeader(currentPath);

    const mainContent = `
        <main id="main-content" class="modern-v6-container w-full" role="main">
            ${renderSpatialExhibition()}
            ${renderTypographicPricing()}
            ${renderSpatialIntake()}
        </main>
    `;

    const footerContent = renderModernFooter();

    const styles = `
        <style id="modern-v7-styles">
            /* V7 Tactile Physical Controls */
            .tactile-control {
                transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.18s, border-color 0.18s, box-shadow 0.18s;
            }
            .tactile-control:hover {
                transform: translateY(-1.5px);
            }
            .tactile-control:active {
                transform: scale(0.97) translateY(0);
            }

            /* V7 Spatial Canvas Transitions */
            .website-world {
                display: none;
                opacity: 0;
                transform: translateY(16px) scale(0.98);
                transition: opacity 0.4s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .website-world.active {
                display: block;
                opacity: 1;
                transform: translateY(0) scale(1);
            }

            /* World-Specific Spatial Exit Transitions */
            .website-world.world-exiting-aurora {
                display: block !important;
                transform: scale(0.96) translateY(-10px);
                opacity: 0;
                transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
            }
            .website-world.world-exiting-aarav {
                display: block !important;
                transform: translateX(-24px) scale(0.97);
                opacity: 0;
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
            }
            .website-world.world-exiting-spice {
                display: block !important;
                transform: translateY(14px) scale(0.96);
                opacity: 0;
                transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
            }

            /* World-Specific Spatial Arrival Orientations */
            .website-world.world-entering-aurora {
                display: block !important;
                opacity: 0;
                transform: scale(1.02) translateY(16px);
            }
            .website-world.world-entering-aarav {
                display: block !important;
                opacity: 0;
                transform: translateX(24px) scale(0.98);
            }
            .website-world.world-entering-spice {
                display: block !important;
                opacity: 0;
                transform: translateY(-16px) scale(0.98);
            }

            /* Curatorial Design Lens Overlay Mode */
            .show-lens .design-lens-layer {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            @media (max-width: 639px) {
                .show-lens .mobile-lens-callout {
                    display: flex !important;
                }
            }

            /* Specimen Native Interactive States (Trigger Interaction Transformations) */
            /* 1. Aurora Organic Editorial Transformation */
            #world-aurora.specimen-interactive-active #aurora-botanical-art {
                transform: scale(1.15) rotate(8deg) translate(3%, -2%);
                opacity: 0.72;
            }
            #world-aurora.specimen-interactive-active #aurora-pillar-1 {
                transform: translateY(-6px);
                border-color: #4A6B5D;
                box-shadow: 0 12px 24px -6px rgba(74, 107, 93, 0.18);
            }
            #world-aurora.specimen-interactive-active #aurora-pillar-2 {
                transform: translateY(-2px);
                border-color: #C28D75;
                box-shadow: 0 12px 24px -6px rgba(194, 141, 117, 0.18);
            }
            #world-aurora.specimen-interactive-active #aurora-pillar-3 {
                transform: translateY(2px);
                border-color: #4A6B5D;
                box-shadow: 0 12px 24px -6px rgba(74, 107, 93, 0.18);
            }
            #world-aurora.specimen-interactive-active #aurora-interactive-status {
                max-height: 48px;
                opacity: 1;
            }

            /* 2. Aarav Monumental Architectural Transformation */
            #world-aarav.specimen-interactive-active #aarav-elevation-poly {
                transform: translateY(-16px);
            }
            #world-aarav.specimen-interactive-active #aarav-spec-boxes > div {
                border-color: #C5A059;
                background-color: #1E252D;
                transform: translateY(-3px);
            }
            #world-aarav.specimen-interactive-active #aarav-grid-bg {
                opacity: 0.32;
                transform: scale(1.03);
            }
            #world-aarav.specimen-interactive-active #aarav-interactive-status {
                max-height: 48px;
                opacity: 1;
            }

            /* 3. Spice Sensory Layered Transformation */
            #world-spice.specimen-interactive-active #spice-layer-1 {
                transform: translateY(-8px) scale(1.02);
                border-color: #D9532F;
                background-color: #4A1D27;
            }
            #world-spice.specimen-interactive-active #spice-layer-2 {
                transform: translateY(-2px);
                border-color: #D9532F;
                background-color: #3D1820;
            }
            #world-spice.specimen-interactive-active #spice-layer-3 {
                transform: translateY(4px) scale(0.99);
                border-color: #8C2D19;
            }
            #world-spice.specimen-interactive-active .spice-ambient-halo {
                transform: scale(1.25);
                opacity: 0.42;
            }
            #world-spice.specimen-interactive-active #spice-interactive-status {
                max-height: 48px;
                opacity: 1;
            }

            /* Lower Sections Spatial Reveals */
            .spatial-reveal-item {
                opacity: 0;
                transform: translateY(18px);
                transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .spatial-reveal-item.revealed {
                opacity: 1;
                transform: translateY(0);
            }

            .pricing-tier-card {
                transition: background-color 0.25s ease, transform 0.25s ease;
            }
            .pricing-tier-card:hover {
                background-color: rgba(255, 255, 255, 0.025);
                transform: translateY(-2px);
            }

            /* High-legibility Tabular Numerics */
            .font-mono {
                font-variant-numeric: tabular-nums;
            }

            /* Reduced Motion Accessibility Respect */
            @media (prefers-reduced-motion: reduce) {
                .website-world,
                .transition-all,
                .transition-colors,
                .transition-opacity,
                .tactile-control,
                .spatial-reveal-item,
                .pricing-tier-card,
                .aurora-pillar,
                .spice-layer {
                    transition-duration: 0.01ms !important;
                    animation-duration: 0.01ms !important;
                    transform: none !important;
                }
                #world-aurora.specimen-interactive-active #aurora-botanical-art,
                #world-aurora.specimen-interactive-active #aurora-pillar-1,
                #world-aurora.specimen-interactive-active #aurora-pillar-2,
                #world-aurora.specimen-interactive-active #aurora-pillar-3,
                #world-aarav.specimen-interactive-active #aarav-elevation-poly,
                #world-aarav.specimen-interactive-active #aarav-spec-boxes > div,
                #world-aarav.specimen-interactive-active #aarav-grid-bg,
                #world-spice.specimen-interactive-active #spice-layer-1,
                #world-spice.specimen-interactive-active #spice-layer-2,
                #world-spice.specimen-interactive-active #spice-layer-3,
                #world-spice.specimen-interactive-active .spice-ambient-halo {
                    transform: none !important;
                }
            }
        </style>
    `;

    const script = `
        (function() {
            window.__veloraModernCleanups = window.__veloraModernCleanups || [];

            function addListener(target, event, handler, options) {
                if (!target) return;
                target.addEventListener(event, handler, options);
                window.__veloraModernCleanups.push(() => {
                    target.removeEventListener(event, handler, options);
                });
            }

            window.initModernInteractions = function() {
                // 1. Spatial World Switching Sequence (Aurora -> Aarav -> Spice)
                const desktopTabs = {
                    aurora: document.getElementById('btn-world-aurora'),
                    aarav: document.getElementById('btn-world-aarav'),
                    spice: document.getElementById('btn-world-spice')
                };

                const mobileTabs = {
                    aurora: document.getElementById('mobile-btn-world-aurora'),
                    aarav: document.getElementById('mobile-btn-world-aarav'),
                    spice: document.getElementById('mobile-btn-world-spice')
                };

                const worlds = {
                    aurora: document.getElementById('world-aurora'),
                    aarav: document.getElementById('world-aarav'),
                    spice: document.getElementById('world-spice')
                };

                const ambientBg = document.getElementById('ambient-color-field');

                const ambientColors = {
                    aurora: '#FAF7F2',
                    aarav: '#12161A',
                    spice: '#2B0E14'
                };

                let activeWorldKey = 'aurora';
                let isSwitching = false;
                let switchTimeout = null;

                function updateTabStyles(targetKey) {
                    Object.keys(worlds).forEach(key => {
                        const dTab = desktopTabs[key];
                        const mTab = mobileTabs[key];
                        const isActive = (key === targetKey);

                        if (dTab) {
                            dTab.setAttribute('aria-selected', String(isActive));
                            if (isActive) {
                                dTab.className = 'tactile-control world-tab-btn active w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 bg-slate-900 text-white shadow-sm';
                                const arrow = dTab.querySelector('.font-mono');
                                if (arrow) arrow.className = 'text-xs font-mono text-blue-400';
                            } else {
                                dTab.className = 'tactile-control world-tab-btn w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 hover:bg-slate-100 text-slate-800';
                                const arrow = dTab.querySelector('.font-mono');
                                if (arrow) arrow.className = 'text-xs font-mono text-slate-400';
                            }
                        }

                        if (mTab) {
                            mTab.setAttribute('aria-selected', String(isActive));
                            if (isActive) {
                                mTab.className = 'tactile-control mobile-tab-btn active py-2 px-1 rounded-lg text-center text-[11px] font-bold transition-all bg-slate-900 text-white shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';
                            } else {
                                mTab.className = 'tactile-control mobile-tab-btn py-2 px-1 rounded-lg text-center text-[11px] font-bold transition-all text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';
                            }
                        }
                    });
                }

                function resetWorldInteraction(worldKey) {
                    const worldEl = worlds[worldKey];
                    if (!worldEl) return;
                    worldEl.classList.remove('specimen-interactive-active');

                    if (worldKey === 'aurora') {
                        const btn = document.getElementById('aurora-interaction-trigger');
                        if (btn) {
                            const lbl = btn.querySelector('.btn-label');
                            const arr = btn.querySelector('.interaction-arrow');
                            if (lbl) lbl.textContent = 'Trigger Interaction';
                            if (arr) arr.classList.remove('rotate-180');
                        }
                    } else if (worldKey === 'aarav') {
                        const btn = document.getElementById('aarav-interaction-trigger');
                        if (btn) {
                            const lbl = btn.querySelector('.btn-label');
                            const arr = btn.querySelector('.interaction-arrow');
                            if (lbl) lbl.textContent = 'EXPLORE PORTFOLIO';
                            if (arr) arr.classList.remove('rotate-180');
                        }
                        const figLbl = document.getElementById('aarav-fig-label');
                        if (figLbl) figLbl.textContent = '[FIG. 04-A]';
                    } else if (worldKey === 'spice') {
                        const btn = document.getElementById('spice-interaction-trigger');
                        if (btn) {
                            const lbl = btn.querySelector('.btn-label');
                            const arr = btn.querySelector('.interaction-arrow');
                            if (lbl) lbl.textContent = 'Initiate Sequence';
                            if (arr) arr.classList.remove('rotate-180');
                        }
                    }
                }

                function switchWorld(targetKey) {
                    if (targetKey === activeWorldKey || isSwitching) return;
                    isSwitching = true;

                    if (switchTimeout) {
                        clearTimeout(switchTimeout);
                        switchTimeout = null;
                    }

                    const prevKey = activeWorldKey;
                    const currentWorldEl = worlds[prevKey];
                    const targetWorldEl = worlds[targetKey];
                    activeWorldKey = targetKey;

                    // Clean previous world interaction
                    resetWorldInteraction(prevKey);

                    // Immediate tactile tab synchronization
                    updateTabStyles(targetKey);

                    // Phase 1: Spatial Exit of outgoing world
                    if (currentWorldEl) {
                        currentWorldEl.classList.remove('active');
                        currentWorldEl.classList.add('world-exiting-' + prevKey);
                    }

                    // Phase 2: Ambient Background Bridge
                    if (ambientBg && ambientColors[targetKey]) {
                        ambientBg.style.backgroundColor = ambientColors[targetKey];
                    }

                    // Phase 3: Spatial Entrance of incoming world
                    switchTimeout = setTimeout(() => {
                        if (currentWorldEl) {
                            currentWorldEl.classList.remove('world-exiting-' + prevKey);
                            currentWorldEl.classList.add('hidden');
                        }

                        if (targetWorldEl) {
                            targetWorldEl.classList.remove('hidden');
                            targetWorldEl.classList.add('world-entering-' + targetKey);

                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    targetWorldEl.classList.add('active');
                                    targetWorldEl.classList.remove('world-entering-' + targetKey);
                                    isSwitching = false;
                                });
                            });
                        } else {
                            isSwitching = false;
                        }
                    }, 300);
                }

                if (desktopTabs.aurora) addListener(desktopTabs.aurora, 'click', () => switchWorld('aurora'));
                if (desktopTabs.aarav) addListener(desktopTabs.aarav, 'click', () => switchWorld('aarav'));
                if (desktopTabs.spice) addListener(desktopTabs.spice, 'click', () => switchWorld('spice'));

                if (mobileTabs.aurora) addListener(mobileTabs.aurora, 'click', () => switchWorld('aurora'));
                if (mobileTabs.aarav) addListener(mobileTabs.aarav, 'click', () => switchWorld('aarav'));
                if (mobileTabs.spice) addListener(mobileTabs.spice, 'click', () => switchWorld('spice'));

                // 2. Specimen Native Interaction Triggers
                // Aurora Trigger
                const auroraBtn = document.getElementById('aurora-interaction-trigger');
                if (auroraBtn) {
                    addListener(auroraBtn, 'click', () => {
                        const auroraWorld = worlds.aurora;
                        if (!auroraWorld) return;
                        const isActive = auroraWorld.classList.toggle('specimen-interactive-active');
                        const lbl = auroraBtn.querySelector('.btn-label');
                        const arr = auroraBtn.querySelector('.interaction-arrow');
                        if (lbl) lbl.textContent = isActive ? 'Restore Composition' : 'Trigger Interaction';
                        if (arr) arr.classList.toggle('rotate-180', isActive);
                    });
                }

                // Aarav Trigger
                const aaravBtn = document.getElementById('aarav-interaction-trigger');
                if (aaravBtn) {
                    addListener(aaravBtn, 'click', () => {
                        const aaravWorld = worlds.aarav;
                        if (!aaravWorld) return;
                        const isActive = aaravWorld.classList.toggle('specimen-interactive-active');
                        const lbl = aaravBtn.querySelector('.btn-label');
                        const arr = aaravBtn.querySelector('.interaction-arrow');
                        if (lbl) lbl.textContent = isActive ? 'RESET ELEVATION' : 'EXPLORE PORTFOLIO';
                        if (arr) arr.classList.toggle('rotate-180', isActive);
                        const figLbl = document.getElementById('aarav-fig-label');
                        if (figLbl) figLbl.textContent = isActive ? '[FIG. 04-A // EXPANDED]' : '[FIG. 04-A]';
                    });
                }

                // Spice Trigger
                const spiceBtn = document.getElementById('spice-interaction-trigger');
                if (spiceBtn) {
                    addListener(spiceBtn, 'click', () => {
                        const spiceWorld = worlds.spice;
                        if (!spiceWorld) return;
                        const isActive = spiceWorld.classList.toggle('specimen-interactive-active');
                        const lbl = spiceBtn.querySelector('.btn-label');
                        const arr = spiceBtn.querySelector('.interaction-arrow');
                        if (lbl) lbl.textContent = isActive ? 'Collapse Sequence' : 'Initiate Sequence';
                        if (arr) arr.classList.toggle('rotate-180', isActive);
                    });
                }

                // 3. Curatorial Design Lens Toggle
                const lensBtn = document.getElementById('design-lens-toggle');
                const mobileLensBtn = document.getElementById('mobile-design-lens-toggle');
                const stageContainer = document.getElementById('artwork-stage-container');

                if (stageContainer) {
                    let lensActive = false;
                    const toggleLens = () => {
                        lensActive = !lensActive;
                        if (lensBtn) lensBtn.setAttribute('aria-pressed', String(lensActive));
                        if (mobileLensBtn) mobileLensBtn.setAttribute('aria-pressed', String(lensActive));

                        if (lensActive) {
                            stageContainer.classList.add('show-lens');
                            if (lensBtn) {
                                lensBtn.innerHTML = '<span>Lens: ON</span>';
                                lensBtn.className = 'tactile-control px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-blue-600 bg-blue-600 text-white shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors';
                            }
                            if (mobileLensBtn) {
                                mobileLensBtn.textContent = 'Lens: ON';
                                mobileLensBtn.className = 'tactile-control text-[10px] font-mono px-2.5 py-1 rounded bg-blue-600 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';
                            }
                        } else {
                            stageContainer.classList.remove('show-lens');
                            if (lensBtn) {
                                lensBtn.innerHTML = '<span>Lens: OFF</span>';
                                lensBtn.className = 'tactile-control px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors';
                            }
                            if (mobileLensBtn) {
                                mobileLensBtn.textContent = 'Lens: OFF';
                                mobileLensBtn.className = 'tactile-control text-[10px] font-mono px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';
                            }
                        }
                    };

                    if (lensBtn) addListener(lensBtn, 'click', toggleLens);
                    if (mobileLensBtn) addListener(mobileLensBtn, 'click', toggleLens);
                }

                // 4. Lower Sections Staggered Spatial Reveals (IntersectionObserver)
                if ('IntersectionObserver' in window) {
                    const revealItems = document.querySelectorAll('.spatial-reveal-item');
                    if (revealItems.length > 0) {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('revealed');
                                    observer.unobserve(entry.target);
                                }
                            });
                        }, { threshold: 0.12 });

                        revealItems.forEach((el, index) => {
                            el.style.transitionDelay = ((index % 3) * 90) + 'ms';
                            observer.observe(el);
                        });

                        window.__veloraModernCleanups.push(() => observer.disconnect());
                    }
                } else {
                    document.querySelectorAll('.spatial-reveal-item').forEach(el => el.classList.add('revealed'));
                }

                // 5. Restrained Native Scroll Parallax (Desktop Only & Reduced Motion Safe)
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (!prefersReducedMotion && window.innerWidth >= 1024 && stageContainer) {
                    const exhibitionStage = document.getElementById('exhibition-stage');
                    let rafPending = false;

                    const handleScroll = () => {
                        if (!rafPending && exhibitionStage) {
                            rafPending = true;
                            requestAnimationFrame(() => {
                                const rect = exhibitionStage.getBoundingClientRect();
                                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                                    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                                    const offset = Math.min(Math.max((progress - 0.5) * 28, -14), 14);
                                    stageContainer.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
                                }
                                rafPending = false;
                            });
                        }
                    };

                    addListener(window, 'scroll', handleScroll, { passive: true });
                    window.__veloraModernCleanups.push(() => {
                        if (stageContainer) stageContainer.style.transform = '';
                    });
                }

                // 6. Mobile Navigation Drawer
                const mobileMenuBtn = document.getElementById('modern-mobile-menu-btn');
                const mobileCloseBtn = document.getElementById('modern-mobile-close-btn');
                const mobileDrawer = document.getElementById('modern-mobile-drawer');

                if (mobileMenuBtn && mobileDrawer) {
                    const toggleDrawer = (open) => {
                        mobileDrawer.classList.toggle('hidden', !open);
                        mobileMenuBtn.setAttribute('aria-expanded', String(open));
                        if (open) {
                            document.body.style.overflow = 'hidden';
                        } else {
                            document.body.style.overflow = '';
                        }
                    };

                    addListener(mobileMenuBtn, 'click', () => toggleDrawer(mobileDrawer.classList.contains('hidden')));
                    if (mobileCloseBtn) addListener(mobileCloseBtn, 'click', () => toggleDrawer(false));

                    document.querySelectorAll('.modern-mobile-link').forEach(link => {
                        addListener(link, 'click', () => toggleDrawer(false));
                    });

                    addListener(document, 'keydown', (e) => {
                        if (e.key === 'Escape' && !mobileDrawer.classList.contains('hidden')) {
                            toggleDrawer(false);
                            mobileMenuBtn.focus();
                        }
                    });
                }

                // 7. Commission Contact Form Async Submission
                const form = document.getElementById('modern-commission-form');
                const submitBtn = document.getElementById('modern-submit-btn');
                const feedback = document.getElementById('modern-form-feedback');

                if (form && submitBtn && feedback) {
                    addListener(form, 'submit', async (e) => {
                        e.preventDefault();

                        const nameInput = document.getElementById('modern-name');
                        const businessInput = document.getElementById('modern-business');
                        const emailInput = document.getElementById('modern-email');
                        const phoneInput = document.getElementById('modern-phone');
                        const scopeInput = document.getElementById('modern-scope');
                        const msgInput = document.getElementById('modern-message');
                        const honeypot = document.getElementById('modern-website_url');

                        if (honeypot && honeypot.value) return; // bot reject

                        if (!nameInput.value.trim() || !businessInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
                            feedback.className = 'p-4 rounded-xl text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 block';
                            feedback.textContent = 'Please fill in all required fields (Name, Business, Email, and Phone).';
                            return;
                        }

                        submitBtn.disabled = true;
                        const originalText = submitBtn.innerHTML;
                        submitBtn.innerHTML = '<span>Transmitting Brief...</span>';

                        try {
                            const res = await fetch('/api/contact', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    name: nameInput.value.trim(),
                                    business: businessInput.value.trim(),
                                    email: emailInput.value.trim(),
                                    phone: phoneInput.value.trim(),
                                    services: [scopeInput.value],
                                    message: msgInput ? msgInput.value.trim() : ''
                                })
                            });

                            const data = await res.json();

                            if (res.ok && data.success) {
                                feedback.className = 'p-4 rounded-xl text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 block';
                                feedback.textContent = 'Brief received. We will review your project details and follow up directly.';
                                form.reset();
                            } else {
                                feedback.className = 'p-4 rounded-xl text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 block';
                                feedback.textContent = data.error || 'Submission failed. Please call our direct studio line +91 73037 33735.';
                            }
                        } catch (err) {
                            feedback.className = 'p-4 rounded-xl text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 block';
                            feedback.textContent = 'Network communication error. Please message us via WhatsApp (+91 73037 33735).';
                        } finally {
                            submitBtn.disabled = false;
                            submitBtn.innerHTML = originalText;
                        }
                    });
                }
            };

            window.cleanupModernInteractions = function() {
                if (window.__veloraModernCleanups) {
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
        headerContent,
        mainContent,
        footerContent,
        styles,
        script
    };
}

module.exports = {
    renderModernExperience
};
