// ============================================================================ //
// VELORA DIGITAL - PAGE TEMPLATES & VIEW RENDERERS                             //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, LOCATIONS, PORTFOLIO, BLOG, FAQS } = require('./data');
const { escapeHTML, generateSchema } = require('./components');

function renderHomePage() {
    const meta = {
        title: 'Velora Digital | Web Design, Local SEO & Maintenance Studio',
        description: 'We engineer fast, mobile-first websites and local search foundations for serious businesses across India. Transparent pricing, clean code, no fluff.',
        schema: generateSchema('FAQPage', { faqs: FAQS }),
        breadcrumbs: null
    };

    const content = `
    <!-- 1. HERO SECTION -->
    <section class="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div class="w-full lg:w-[55%] xl:w-[60%]">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-velora-faint border-none text-xs font-semibold uppercase tracking-widest text-velora-accent mb-8 reveal">
                    <span class="w-2 h-2 rounded-full bg-velora-accent animate-pulse"></span>
                    <span>Engineering High-Converting Local Websites</span>
                </div>
                <h1 class="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-velora-text leading-[1.08] text-balance reveal" style="transition-delay: 50ms;">
                    Websites That Build Instant Trust & <span class="accent-gradient-text">Drive Local Calls</span>.
                </h1>
                <p class="mt-6 text-lg sm:text-xl text-velora-muted leading-relaxed max-w-2xl text-pretty reveal" style="transition-delay: 100ms;">
                    We design and develop fast, mobile-first websites and technical local SEO for clinics, restaurants, real estate firms, and local businesses in India. No bloated page-builders, no fake promises.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 reveal" style="transition-delay: 150ms;">
                    <a href="/contact" id="hero-primary-cta" class="btn-luxury inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:opacity-95 transition-opacity shadow-lg relative group">
                        <span class="relative z-10">Get a Free Project Quote</span>
                        <div class="absolute inset-0 rounded-full bg-velora-accent opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                    </a>
                    <a href="/portfolio" id="hero-secondary-cta" class="inline-flex items-center justify-center px-8 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-faint hover:bg-velora-faintHover border-none text-velora-text transition-colors">
                        Explore Concept Work &rarr;
                    </a>
                </div>
                <div class="mt-12 pt-8 border-t border-velora-border flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-medium text-velora-muted reveal" style="transition-delay: 200ms;">
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>Lightning-fast Mobile Load Speed</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>100% Custom Coded, Zero Builder Bloat</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>Full Code & Domain Ownership</span>
                    </div>
                </div>
            </div>
            
            <!-- HERO RIGHT: Architectural Drafting Composition (Desktop Only) -->
            <div class="w-full lg:w-[45%] xl:w-[40%] hidden lg:block relative" aria-hidden="true">
                <!-- Extremely subtle ambient radiance -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-velora-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div class="w-full max-w-[480px] mx-auto relative hero-drafting-plate">
                    <!-- Layer 1: Recessed Base (Dark Architectural Backing Plane) -->
                    <div class="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-velora-bg/80 border border-velora-border/40 shadow-2xl pointer-events-none">
                        <!-- Corner Registration Ticks on Recessed Layer -->
                        <div class="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-velora-border"></div>
                        <div class="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-velora-border"></div>
                        <div class="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-velora-border"></div>
                        <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-velora-border"></div>
                    </div>

                    <!-- Layer 2: Primary Drafting Plate -->
                    <div class="relative z-10 w-full rounded-3xl bg-velora-card/90 border border-velora-borderStrong/50 p-5 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-sm">
                        <!-- Corner Accent Crosshairs -->
                        <div class="absolute top-3 left-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>
                        <div class="absolute top-3 right-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>
                        <div class="absolute bottom-3 left-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>
                        <div class="absolute bottom-3 right-3 w-2.5 h-2.5 pointer-events-none">
                            <div class="absolute top-1.5 left-0 w-2.5 h-px bg-velora-borderStrong"></div>
                            <div class="absolute top-0 left-1.5 w-px h-2.5 bg-velora-borderStrong"></div>
                        </div>

                        <!-- Architectural Vector Drafting Plate SVG (ViewBox 0 0 440 540) -->
                        <svg class="w-full h-auto block select-none" viewBox="0 0 440 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- ================= ZONE 1: HEADER / DATUM (y: 10 - 75) ================= -->
                            <!-- Registration Corner Crosses -->
                            <path d="M 12 18 h 12 M 18 12 v 12" stroke="var(--color-border-strong)" stroke-width="0.75" />
                            <path d="M 416 18 h 12 M 422 12 v 12" stroke="var(--color-border-strong)" stroke-width="0.75" />

                            <!-- Header Micro-Typography -->
                            <text x="36" y="22" font-family="'Space Grotesk', monospace" font-size="8.5" font-weight="600" letter-spacing="0.18em" fill="var(--color-accent)">SYSTEM // 12-COL MODULAR</text>
                            <text x="404" y="22" font-family="'Space Grotesk', monospace" font-size="8" letter-spacing="0.16em" fill="var(--color-text-muted)" text-anchor="end">RATIO: 1.618 ── Φ</text>

                            <!-- Primary Datum Ruler Line -->
                            <line x1="18" y1="36" x2="422" y2="36" stroke="var(--color-border)" stroke-width="1" />
                            
                            <!-- Calibration Ticks along Datum -->
                            <line x1="18" y1="32" x2="18" y2="40" stroke="var(--color-border-strong)" stroke-width="1" />
                            <line x1="85" y1="34" x2="85" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                            <line x1="152" y1="34" x2="152" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                            <line x1="220" y1="32" x2="220" y2="40" stroke="var(--color-accent)" stroke-width="1" />
                            <line x1="288" y1="34" x2="288" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                            <line x1="355" y1="34" x2="355" y2="38" stroke="var(--color-border)" stroke-width="0.75" />
                            <line x1="422" y1="32" x2="422" y2="40" stroke="var(--color-border-strong)" stroke-width="1" />

                            <!-- Sub-datum Coordinate Reference -->
                            <text x="36" y="54" font-family="'Space Grotesk', monospace" font-size="7.5" letter-spacing="0.14em" fill="var(--color-text-muted)" fill-opacity="0.7">CANVAS // 01-A [DESKTOP PRIMARY]</text>
                            <text x="404" y="54" font-family="'Space Grotesk', monospace" font-size="7.5" letter-spacing="0.12em" fill="var(--color-text-muted)" fill-opacity="0.7" text-anchor="end">W: 1280 • H: FLUID</text>

                            <!-- Secondary Horizontal Rule (Grid Ceiling) -->
                            <line x1="18" y1="66" x2="422" y2="66" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="2 3" />

                            <!-- ================= ZONE 2: ARCHITECTURAL GRID (y: 66 - 412) ================= -->
                            <!-- Subtle 12-Column Structural Grid (Hairlines) -->
                            <line x1="28" y1="66" x2="28" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="60" y1="66" x2="60" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="92" y1="66" x2="92" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="124" y1="66" x2="124" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="156" y1="66" x2="156" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="188" y1="66" x2="188" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="220" y1="66" x2="220" y2="412" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="4 4" stroke-opacity="0.4" />
                            <line x1="252" y1="66" x2="252" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="284" y1="66" x2="284" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="316" y1="66" x2="316" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="348" y1="66" x2="348" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="380" y1="66" x2="380" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />
                            <line x1="412" y1="66" x2="412" y2="412" stroke="var(--color-border)" stroke-width="0.5" stroke-opacity="0.3" />

                            <!-- Horizontal Baseline Guide Lines -->
                            <line x1="18" y1="120" x2="422" y2="120" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                            <line x1="18" y1="174" x2="422" y2="174" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                            <line x1="18" y1="228" x2="422" y2="228" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                            <line x1="18" y1="282" x2="422" y2="282" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                            <line x1="18" y1="336" x2="422" y2="336" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />
                            <line x1="18" y1="390" x2="422" y2="390" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 4" stroke-opacity="0.25" />

                            <!-- Primary Architectural Proportion Frame (Golden Section Specimen Box) -->
                            <rect x="60" y="96" width="288" height="178" rx="2" fill="var(--color-surface)" fill-opacity="0.5" stroke="var(--color-border-strong)" stroke-width="1" stroke-opacity="0.6" />

                            <!-- Diagonal Dynamic Construction Vector -->
                            <line x1="60" y1="96" x2="348" y2="274" stroke="var(--color-accent)" stroke-width="0.75" stroke-dasharray="3 4" stroke-opacity="0.35" />

                            <!-- Golden Cut Vertical Harmonic Rule -->
                            <line x1="238" y1="96" x2="238" y2="274" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="2 2" stroke-opacity="0.5" />

                            <!-- Architectural Typographic Specimen: Monumental Outline Glyph "V" -->
                            <text x="96" y="222" font-family="'Space Grotesk', sans-serif" font-size="96" font-weight="700" fill="none" stroke="var(--color-border-strong)" stroke-width="1" stroke-opacity="0.25" letter-spacing="-0.04em">V</text>

                            <!-- Dimension Caliper / Margin Callout: Left Margin -->
                            <g stroke="var(--color-accent)" stroke-width="0.75" stroke-opacity="0.7">
                                <line x1="28" y1="185" x2="60" y2="185" />
                                <line x1="28" y1="180" x2="28" y2="190" />
                                <line x1="60" y1="180" x2="60" y2="190" />
                            </g>
                            <text x="44" y="178" font-family="'Space Grotesk', monospace" font-size="6.5" font-weight="600" fill="var(--color-accent)" text-anchor="middle" letter-spacing="0.1em">64 PX</text>

                            <!-- Proportion Annotation: Right of Frame -->
                            <text x="358" y="125" font-family="'Space Grotesk', monospace" font-size="7.5" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.12em">H1 // 56PX PROPORTION</text>
                            <text x="358" y="138" font-family="'Space Grotesk', monospace" font-size="7" fill="var(--color-text-muted)" fill-opacity="0.6" letter-spacing="0.1em">LINE-HEIGHT: 1.08</text>
                            
                            <g stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.5">
                                <line x1="358" y1="148" x2="412" y2="148" />
                                <line x1="412" y1="148" x2="412" y2="230" />
                                <line x1="358" y1="230" x2="412" y2="230" />
                            </g>
                            <text x="358" y="244" font-family="'Space Grotesk', monospace" font-size="7" fill="var(--color-accent)" letter-spacing="0.1em">RATIO: Φ (1.618)</text>

                            <!-- Horizontal Fluid Axis Annotation (y: 298) -->
                            <line x1="28" y1="298" x2="412" y2="298" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.6" />
                            <circle cx="28" cy="298" r="2" fill="var(--color-accent)" />
                            <circle cx="412" cy="298" r="2" fill="var(--color-accent)" />
                            <rect x="156" y="291" width="128" height="14" rx="2" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="0.5" />
                            <text x="220" y="301" font-family="'Space Grotesk', monospace" font-size="7" font-weight="600" fill="var(--color-text-muted)" text-anchor="middle" letter-spacing="0.14em">FLUID CONTENT AXIS // 1280 MAX</text>

                            <!-- Modular Sub-Layout Modules (y: 326 - 386) -->
                            <!-- Column Module A (Left: 3 cols) -->
                            <rect x="60" y="326" width="96" height="60" rx="3" fill="var(--color-surface)" fill-opacity="0.4" stroke="var(--color-border)" stroke-width="0.75" />
                            <text x="70" y="344" font-family="'Space Grotesk', monospace" font-size="7.5" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.1em">MOD // NAV-SIDE</text>
                            <text x="70" y="358" font-family="'Space Grotesk', monospace" font-size="6.5" fill="var(--color-accent)" letter-spacing="0.08em">WIDTH: 25.0%</text>
                            <line x1="70" y1="368" x2="140" y2="368" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 2" />

                            <!-- Column Module B (Right: 7 cols) -->
                            <rect x="166" y="326" width="214" height="60" rx="3" fill="var(--color-surface)" fill-opacity="0.4" stroke="var(--color-border)" stroke-width="0.75" />
                            <text x="178" y="344" font-family="'Space Grotesk', monospace" font-size="7.5" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.1em">MOD // EDITORIAL CORE</text>
                            <text x="178" y="358" font-family="'Space Grotesk', monospace" font-size="6.5" fill="var(--color-accent)" letter-spacing="0.08em">WIDTH: 75.0%</text>
                            <line x1="178" y1="368" x2="350" y2="368" stroke="var(--color-border)" stroke-width="0.5" stroke-dasharray="2 2" />

                            <!-- Grid Base Datum Line -->
                            <line x1="18" y1="412" x2="422" y2="412" stroke="var(--color-border)" stroke-width="1" />

                            <!-- ================= ZONE 3: CONVERSION / FOCAL ANCHOR (y: 412 - 525) ================= -->
                            <!-- Architectural Target Motif (Precision Crosshair) -->
                            <g>
                                <circle cx="66" cy="472" r="24" fill="none" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-dasharray="2 3" stroke-opacity="0.6" />
                                <circle cx="66" cy="472" r="14" fill="none" stroke="var(--color-accent)" stroke-width="0.75" stroke-opacity="0.6" />
                                <circle cx="66" cy="472" r="2.5" fill="var(--color-accent)" />
                                <line x1="36" y1="472" x2="96" y2="472" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.8" />
                                <line x1="66" y1="442" x2="66" y2="502" stroke="var(--color-border-strong)" stroke-width="0.75" stroke-opacity="0.8" />
                                <line x1="58" y1="464" x2="74" y2="480" stroke="var(--color-accent)" stroke-width="0.5" stroke-opacity="0.3" />
                                <line x1="58" y1="480" x2="74" y2="464" stroke="var(--color-accent)" stroke-width="0.5" stroke-opacity="0.3" />
                            </g>

                            <!-- Metadata Specification Block -->
                            <text x="112" y="458" font-family="'Space Grotesk', monospace" font-size="8.5" font-weight="700" fill="var(--color-accent)" letter-spacing="0.16em">TARGET: TRUST</text>
                            <text x="250" y="458" font-family="'Space Grotesk', monospace" font-size="8" font-weight="600" fill="var(--color-text-muted)" letter-spacing="0.14em">DISCIPLINE: BESPOKE</text>

                            <!-- Sub-Specification -->
                            <text x="112" y="478" font-family="'Space Grotesk', monospace" font-size="7.5" fill="var(--color-text-muted)" fill-opacity="0.8" letter-spacing="0.12em">ARCHITECTURE: 100% HAND-CRAFTED SSR</text>

                            <!-- Footer Plate Notation -->
                            <line x1="112" y1="490" x2="412" y2="490" stroke="var(--color-border)" stroke-width="0.5" />
                            <text x="112" y="506" font-family="'Space Grotesk', monospace" font-size="7" fill="var(--color-text-muted)" fill-opacity="0.6" letter-spacing="0.12em">VELORA // ARCHITECTURAL DRAFTING PLATE</text>
                            <text x="412" y="506" font-family="'Space Grotesk', monospace" font-size="7" font-weight="600" fill="var(--color-accent)" letter-spacing="0.12em" text-anchor="end">PLATE NO. 01</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 9.5 WEBSITE AUDIT LEAD MAGNET -->
    <section class="py-24 bg-velora-bg">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-2xl reveal relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-velora-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
                <div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div class="md:w-1/2">
                        <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Free Website Audit</span>
                        <h2 class="font-display text-2xl sm:text-3xl font-bold text-velora-text tracking-tight mb-4">Is Your Current Website Losing Customers?</h2>
                        <p class="text-sm text-velora-muted leading-relaxed mb-6">
                            Enter your website URL below. We will manually review your site for speed, mobile usability, and local SEO, and send you a free, no-obligation technical teardown.
                        </p>
                        <ul class="space-y-2 text-xs text-velora-muted font-medium mb-2">
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold text-base">✓</span> Speed & Performance Check</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold text-base">✓</span> Conversion Rate Analysis</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold text-base">✓</span> Local SEO Visibility Check</li>
                        </ul>
                    </div>
                    <div class="md:w-1/2 w-full">
                        <div id="audit-form-container-1" class="bg-velora-bg p-6 rounded-2xl border-none relative">
                            <form class="homepage-audit-form space-y-4" onsubmit="
                                event.preventDefault();
                                if(window.veloraTrack) window.veloraTrack('audit_submit');
                                const form = this;
                                const submitBtn = form.querySelector('.audit-submit-btn');
                                const errorDiv = form.querySelector('.audit-error');
                                const successDiv = form.nextElementSibling;
                                const website = form.querySelector('.audit-url').value;
                                const gotcha = form.querySelector('.audit_gotcha').value;

                                if(!website) return;
                                submitBtn.disabled = true;
                                submitBtn.innerText = 'Submitting...';
                                errorDiv.classList.add('hidden');
                                errorDiv.innerText = '';

                                fetch('/api/audit', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ website: website, _gotcha: gotcha, source: 'Homepage Lead Magnet' })
                                }).then(res => res.json()).then(data => {
                                    if (data.success) {
                                        if(window.veloraTrack) window.veloraTrack('audit_success');
                                        form.classList.add('hidden');
                                        successDiv.classList.remove('hidden');
                                        successDiv.classList.add('flex');
                                    } else {
                                        throw new Error(data.message || 'Submission failed');
                                    }
                                }).catch(err => {
                                    if(window.veloraTrack) window.veloraTrack('audit_error');
                                    errorDiv.innerText = err.message || 'Something went wrong. Please try again.';
                                    errorDiv.classList.remove('hidden');
                                    submitBtn.disabled = false;
                                    submitBtn.innerHTML = 'Get Free Audit &rarr;';
                                });
                            ">
                                <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden" aria-hidden="true">
                                    <input type="text" name="_gotcha" class="audit_gotcha" tabindex="-1" autocomplete="off">
                                </div>
                                <div>
                                    <label for="audit-website-url" class="sr-only">Website URL</label>
                                    <input type="url" id="audit-website-url" class="audit-url input-luxury w-full px-4 py-3 bg-velora-surface border-none rounded-xl text-base md:text-sm text-velora-text placeholder-velora-muted focus:outline-none focus:ring-1 focus:ring-velora-accent" name="website" placeholder="https://yourwebsite.com" required>
                                </div>
                                <div class="audit-error hidden text-xs text-red-500 font-medium"></div>
                                <button type="submit" class="audit-submit-btn btn-luxury w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText hover:opacity-95 transition-opacity shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                                    Get My Free Audit
                                </button>
                                <p class="text-[10px] text-velora-muted text-center mt-3">Reviewed personally • No automated spam</p>
                            </form>
                            <div class="audit-success hidden flex-col items-center justify-center text-center space-y-3 py-4">
                                <div class="text-emerald-500 text-3xl">✓</div>
                                <h3 class="font-display text-lg font-bold text-velora-text">Audit Request Received</h3>
                                <p class="text-xs text-velora-muted">We will review your site and email you the teardown shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. WHY VELORA / VALUE PROPOSITION COMPARISON -->
    <section class="py-20 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mb-16 reveal">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Honest Comparison</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight">Why Most Local Websites Fail</h2>
                <p class="mt-4 text-base text-velora-muted leading-relaxed text-pretty">
                    Local businesses are usually forced to choose between cheap, broken templates or overpriced agencies with confusing retainers. Here is how we do things differently.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Freelance Template -->
                <div class="p-8 rounded-2xl bg-velora-surface border-none shadow-lg opacity-85 reveal">
                    <div class="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Typical Cheap Freelancer</div>
                    <div class="font-display text-xl font-bold text-velora-text mb-4">Pirated Template Trap</div>
                    <ul class="space-y-3 text-sm text-velora-muted">
                        <li class="flex items-start gap-2.5"><span class="text-red-500">✕</span> <span>Uses heavy visual builders with 40+ plugins</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-red-500">✕</span> <span>Takes 5-8 seconds to load on mobile 4G</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-red-500">✕</span> <span>Broken contact forms and missed leads</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-red-500">✕</span> <span>Freelancer disappears after initial payment</span></li>
                    </ul>
                </div>

                <!-- Bloated Agency -->
                <div class="p-8 rounded-2xl bg-velora-surface border-none shadow-lg opacity-85 reveal" style="transition-delay: 100ms;">
                    <div class="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">Traditional Big Agency</div>
                    <div class="font-display text-xl font-bold text-velora-text mb-4">Expensive Agency Bloat</div>
                    <ul class="space-y-3 text-sm text-velora-muted">
                        <li class="flex items-start gap-2.5"><span class="text-amber-500">✕</span> <span>Huge retainers starting at ₹1,50,000+</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-amber-500">✕</span> <span>Complicated account managers and endless meetings</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-amber-500">✕</span> <span>Work outsourced to junior interns</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-amber-500">✕</span> <span>Locks you into proprietary server software</span></li>
                    </ul>
                </div>

                <!-- Velora Digital -->
                <div class="p-8 rounded-2xl bg-velora-bg border-2 border-velora-accent/40 shadow-xl relative reveal" style="transition-delay: 200ms;">
                    <div class="absolute -top-3 right-6 px-3 py-1 rounded-full bg-velora-accent text-black text-[10px] font-bold uppercase tracking-widest">Engineered Right</div>
                    <div class="text-xs font-bold uppercase tracking-widest text-velora-accent mb-4">The Velora Standard</div>
                    <div class="font-display text-xl font-bold text-velora-text mb-4">Clean Code & Direct Outcomes</div>
                    <ul class="space-y-3 text-sm text-velora-muted">
                        <li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">✓</span> <span>Lightweight semantic code built for lightning-fast speeds</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">✓</span> <span>Transparent fixed pricing from ₹14,999 to ₹34,999</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">✓</span> <span>Local Schema.org metadata and click-to-call conversions</span></li>
                        <li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">✓</span> <span>100% full ownership of your domain and codebase</span></li>
                    </ul>
                </div>
            </div>

            <div class="mt-16 overflow-x-auto reveal" style="transition-delay: 300ms;">
                <table class="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            <th class="py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-velora-muted border-b border-velora-border w-1/3">Feature</th>
                            <th class="py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-velora-muted border-b border-velora-border w-1/3">Standard Templates</th>
                            <th class="py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-velora-accent border-b border-velora-accent/30 bg-velora-accent/5 w-1/3 rounded-tl-xl rounded-tr-xl">Velora Digital</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr class="border-b border-velora-border/50">
                            <td class="py-5 px-6 font-semibold text-velora-text">Architecture</td>
                            <td class="py-5 px-6 text-velora-muted">Template with 30+ plugins</td>
                            <td class="py-5 px-6 text-velora-text font-medium bg-velora-accent/5">Custom coded, lightweight</td>
                        </tr>
                        <tr class="border-b border-velora-border/50">
                            <td class="py-5 px-6 font-semibold text-velora-text">Mobile Speed</td>
                            <td class="py-5 px-6 text-velora-muted">4-8 seconds (kills conversions)</td>
                            <td class="py-5 px-6 text-emerald-400 font-medium bg-velora-accent/5">Lightning-fast loading</td>
                        </tr>
                        <tr class="border-b border-velora-border/50">
                            <td class="py-5 px-6 font-semibold text-velora-text">SEO Foundation</td>
                            <td class="py-5 px-6 text-velora-muted">Basic meta tags only</td>
                            <td class="py-5 px-6 text-velora-text font-medium bg-velora-accent/5">Deep local Schema.org JSON-LD</td>
                        </tr>
                        <tr class="border-b border-velora-border/50">
                            <td class="py-5 px-6 font-semibold text-velora-text">Security</td>
                            <td class="py-5 px-6 text-velora-muted">Vulnerable to plugin exploits</td>
                            <td class="py-5 px-6 text-velora-text font-medium bg-velora-accent/5">Static rendering, no database</td>
                        </tr>
                        <tr>
                            <td class="py-5 px-6 font-semibold text-velora-text rounded-bl-xl">Asset Ownership</td>
                            <td class="py-5 px-6 text-velora-muted">Tied to monthly platform fees</td>
                            <td class="py-5 px-6 text-velora-text font-medium bg-velora-accent/5 rounded-br-xl">100% Client Owned forever</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- 2.5. INTERACTIVE RECOMMENDATION TOOL -->
    <section class="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-12 rounded-3xl bg-velora-bg shadow-2xl shadow-2xl relative reveal">
            <div class="text-center mb-10">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Project Blueprint</span>
                <h2 class="font-display text-3xl font-bold text-velora-text tracking-tight">What We'd Build For You</h2>
                <p class="mt-3 text-sm text-velora-muted">Select your industry and primary goal to see our recommended approach.</p>
            </div>

            <!-- Step 1: Industry -->
            <div id="rec-step-1" class="space-y-6">
                <p class="block text-[10px] font-bold uppercase tracking-widest text-velora-text mb-4 text-center">1. Select Your Industry</p>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    ${INDUSTRIES.map(ind => `
                        <button type="button" onclick="setRecIndustry('${ind.slug}')" class="p-4 rounded-2xl border-none bg-velora-surface hover:border-velora-accent transition-colors text-center group">
                            <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">${ind.icon}</div>
                            <div class="text-xs font-bold text-velora-text">${ind.shortName || ind.name}</div>
                        </button>
                    `).join('')}
                    <button type="button" onclick="setRecIndustry('other')" class="p-4 rounded-2xl border-none bg-velora-surface hover:border-velora-accent transition-colors text-center group">
                        <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">🏢</div>
                        <div class="text-[10px] font-bold text-velora-text">Other Business</div>
                    </button>
                </div>
            </div>

            <!-- Step 2: Goal (Hidden initially) -->
            <div id="rec-step-2" class="hidden space-y-6">
                <p class="block text-[10px] font-bold uppercase tracking-widest text-velora-text mb-4 text-center">2. What is your primary goal?</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <button type="button" onclick="setRecGoal('more-enquiries')" class="p-4 rounded-2xl border-none bg-velora-surface hover:border-velora-accent transition-colors text-left flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-velora-bg flex items-center justify-center text-velora-accent font-bold">1</div>
                        <div>
                            <div class="text-sm font-bold text-velora-text">More Leads & Enquiries</div>
                            <div class="text-[10px] text-velora-muted mt-1">I want more form submissions</div>
                        </div>
                    </button>
                    <button type="button" onclick="setRecGoal('more-calls')" class="p-4 rounded-2xl border-none bg-velora-surface hover:border-velora-accent transition-colors text-left flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-velora-bg flex items-center justify-center text-velora-accent font-bold">2</div>
                        <div>
                            <div class="text-sm font-bold text-velora-text">Direct Phone Calls</div>
                            <div class="text-[10px] text-velora-muted mt-1">I want my phone to ring</div>
                        </div>
                    </button>
                    <button type="button" onclick="setRecGoal('better-visibility')" class="p-4 rounded-2xl border-none bg-velora-surface hover:border-velora-accent transition-colors text-left flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-velora-bg flex items-center justify-center text-velora-accent font-bold">3</div>
                        <div>
                            <div class="text-sm font-bold text-velora-text">Google Maps Visibility</div>
                            <div class="text-[10px] text-velora-muted mt-1">I need better local SEO</div>
                        </div>
                    </button>
                    <button type="button" onclick="setRecGoal('stronger-presence')" class="p-4 rounded-2xl border-none bg-velora-surface hover:border-velora-accent transition-colors text-left flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-velora-bg flex items-center justify-center text-velora-accent font-bold">4</div>
                        <div>
                            <div class="text-sm font-bold text-velora-text">Stronger Brand Trust</div>
                            <div class="text-[10px] text-velora-muted mt-1">I need a premium presence</div>
                        </div>
                    </button>
                </div>
                <div class="text-center mt-6">
                    <button type="button" onclick="resetRecTool()" class="text-[10px] font-bold uppercase tracking-widest text-velora-muted hover:text-velora-text transition-colors">&larr; Back to Industry</button>
                </div>
            </div>

            <!-- Step 3: Recommendation (Hidden initially) -->
            <div id="rec-step-3" class="hidden">
                <div class="p-8 rounded-2xl bg-velora-surface border-2 border-velora-accent/30">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-velora-accent block mb-2">Our Recommendation</span>
                    <h3 id="rec-result-title" class="font-display text-2xl font-bold text-velora-text mb-4">...</h3>
                    <p id="rec-result-desc" class="text-sm text-velora-muted leading-relaxed mb-8">...</p>

                    <div class="flex flex-col sm:flex-row items-center gap-4">
                        <a id="rec-cta-btn" href="/contact" onclick="if(window.veloraTrack) window.veloraTrack('cta_click', { button: 'rec-cta-btn' })" class="btn-luxury w-full sm:w-auto px-8 py-3.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-velora-accent text-black text-center">
                            Request Quote for this Setup
                        </a>
                        <button type="button" onclick="resetRecTool()" class="w-full sm:w-auto px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-velora-muted border-none hover:border-velora-borderStrong hover:text-velora-text transition-colors">Start Over</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. SERVICES OVERVIEW -->
    <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div>
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Our Core Services</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight">What We Build & Support</h2>
            </div>
            <a href="/services" class="text-xs uppercase tracking-[0.2em] font-bold text-velora-accent hover:text-velora-text transition-colors inline-flex py-3 items-center gap-2">
                Explore All Services <span>&rarr;</span>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${SERVICES.map((s, idx) => `
                <div class="premium-border bg-velora-surface p-8 sm:p-10 rounded-3xl flex flex-col justify-between reveal" style="transition-delay: ${idx * 100}ms;">
                    <div>
                        <div class="text-3xl mb-6">${s.icon}</div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-accent block mb-2">${s.heroTag}</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">${s.title}</h3>
                        <p class="text-sm text-velora-muted leading-relaxed mb-6 text-pretty">${s.short}</p>

                        <ul class="space-y-2.5 text-xs text-velora-muted mb-8">
                            ${s.benefits.slice(0, 4).map(b => `<li class="flex items-center gap-2"><span class="text-velora-accent">✓</span> <span>${b}</span></li>`).join('')}
                        </ul>
                    </div>
                    <a href="/services/${s.slug}" class="inline-flex items-center justify-between py-3 text-xs uppercase tracking-[0.15em] font-bold text-velora-text hover:text-velora-accent border-t border-velora-border transition-colors">
                        <span>View Service Details</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            `).join('')}
        </div>
    </section>

    <!-- 4. BEFORE VS AFTER COMPARISON (INTERACTIVE) -->
    <section class="py-20 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center mb-12 reveal">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Live Comparison</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight">The Difference Is Obvious</h2>
                <p class="mt-4 text-base text-velora-muted text-pretty">
                    Slide between a typical bloated local business website and a high-performance Velora build.
                </p>
            </div>

            <div class="max-w-4xl mx-auto reveal">
                <div class="relative w-full min-h-[400px] sm:min-h-0 sm:aspect-[16/9] select-none touch-pan-y focus:outline-none" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-label="Before and After Comparison" id="before-after-container">
                    <!-- Background Comparison Wrapper -->
                    <div class="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl border-none">
                        <div class="absolute inset-0 bg-[#1e1b18]" id="before-bg"></div>
                        <div class="absolute inset-0 bg-velora-card" id="after-bg" style="clip-path: polygon(0 0, 85% 0, 85% 100%, 0 100%);"></div>
                    </div>

                    <!-- Before Content Layer -->
                    <div class="absolute inset-0 text-[#a89f91] p-6 sm:p-10 flex flex-col justify-between font-serif pointer-events-none transition-opacity duration-200" id="before-content" style="opacity: 0;">
                        <div class="border-b border-[#3d3830] pb-4 flex justify-between items-center">
                            <span class="text-xl italic text-velora-accent">Old-Style Template</span>
                            <span class="text-xs px-2 py-1 bg-red-950/80 text-red-400 rounded border border-red-800">Slow Load Times • Poor Mobile Score</span>
                        </div>
                        <div class="my-auto space-y-4 max-w-lg">
                            <div class="text-2xl sm:text-3xl text-white">"Welcome to Our Website - Please Download Our 20MB PDF Catalog"</div>
                            <div class="text-sm opacity-70">Generic stock photos, hidden contact numbers, unreadable small text on mobile screens.</div>
                        </div>
                        <div class="text-xs opacity-50 border-t border-[#3d3830] pt-3">
                            Missing Schema • Broken WhatsApp Link • High Bounce Rate
                        </div>
                    </div>

                    <!-- After Content Layer -->
                    <div class="absolute inset-0 text-velora-text p-6 sm:p-10 flex flex-col justify-between font-sans pointer-events-none transition-opacity duration-200" id="after-content" style="opacity: 1;">
                        <div class="border-b border-velora-border pb-4 flex justify-between items-center">
                            <span class="font-display text-xl font-bold tracking-tight text-velora-text">Velora Digital Build</span>
                            <span class="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/30 font-mono font-bold">Built for Speed • Core Web Vitals Focused</span>
                        </div>
                        <div class="my-auto space-y-4 max-w-lg">
                            <div class="font-display text-2xl sm:text-3xl font-bold text-velora-text">Fast Mobile Menu, Tap-to-Call & Local Google Visibility</div>
                            <div class="text-sm text-velora-muted">Crisp typography, instant WhatsApp inquiries, structured opening hours, and clear pricing.</div>
                        </div>
                        <div class="flex items-center gap-4 text-xs font-semibold text-velora-accent border-t border-velora-border pt-3">
                            <span>✓ Local Schema.org</span>
                            <span>✓ Sticky Mobile CTA Bar</span>
                            <span>✓ Lean, Purpose-Built Code</span>
                        </div>
                    </div>

                    <!-- Slider Handle -->
                    <div class="absolute top-0 bottom-0 w-1 bg-velora-accent cursor-ew-resize z-20 flex items-center justify-center pointer-events-none" id="slider-handle" style="left: 85%;">
                        <div class="w-8 h-8 rounded-full bg-velora-card border-2 border-velora-accent shadow-lg flex items-center justify-center gap-1 pointer-events-auto">
                            <div class="w-0.5 h-3 bg-velora-muted rounded-full"></div>
                            <div class="w-0.5 h-3 bg-velora-muted rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex justify-between text-xs text-velora-muted px-2 font-medium">
                    <span>&larr; Drag left for Outdated Template</span>
                    <span>Drag right for Velora Standard &rarr;</span>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. INDUSTRIES WE SERVE -->
    <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Specialized Sectors</span>
            <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight">Built for High-Intent Local Customers</h2>
            <p class="mt-4 text-base text-velora-muted text-pretty">
                We tailor our site structures around the specific conversion points your customers care about most.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${INDUSTRIES.map((ind, idx) => `
                <a href="/industries/${ind.slug}" class="premium-border bg-velora-surface p-8 rounded-3xl group block reveal" style="transition-delay: ${idx * 75}ms;">
                    <div class="text-3xl mb-5">${ind.icon}</div>
                    <h3 class="font-display text-xl font-bold text-velora-text group-hover:text-velora-accent transition-colors mb-3">${ind.name}</h3>
                    <p class="text-xs text-velora-muted leading-relaxed mb-6 text-pretty">${ind.desc}</p>
                    <span class="text-[11px] font-bold uppercase tracking-widest text-velora-accent flex items-center gap-1">
                        View Industry Strategy &rarr;
                    </span>
                </a>
            `).join('')}
        </div>
    </section>

    <!-- 6. HONEST CONCEPT WORK SHOWCASE -->
    <section class="py-20 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-velora-faint border-none text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-3">
                        <span>Transparent Architecture</span>
                    </div>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight">Engineered Concept Demonstrations</h2>
                    <p class="mt-4 text-base text-velora-muted max-w-xl text-pretty">
                        We don't invent fake client metrics or paid awards. These production-ready prototypes benchmark our code speed, mobile UX, and conversion architecture.
                    </p>
                </div>
                <a href="/portfolio" class="text-xs uppercase tracking-[0.2em] font-bold text-velora-accent hover:text-velora-text transition-colors inline-flex py-3 items-center gap-2">
                    View Complete Portfolio <span>&rarr;</span>
                </a>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                ${PORTFOLIO.map((p, idx) => `
                    <div class="premium-border bg-velora-bg rounded-3xl p-8 flex flex-col justify-between reveal" style="transition-delay: ${idx * 100}ms;">
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-6">
                                <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${p.badgeColor}">${p.type}</span>
                                <span class="text-xs font-semibold text-velora-muted">${p.industry}</span>
                            </div>
                            <h3 class="font-display text-2xl font-bold text-velora-text mb-3 tracking-tight">${p.title}</h3>
                            <p class="text-sm text-velora-muted leading-relaxed mb-6 text-pretty">${p.summary}</p>

                            <div class="p-4 rounded-2xl bg-velora-surface border-none mb-6">
                                <div class="text-[10px] font-bold uppercase tracking-wider text-velora-accent mb-1">What It Proves</div>
                                <div class="text-xs text-velora-muted leading-relaxed">${p.demonstrates}</div>
                            </div>
                        </div>

                        <a href="/portfolio#${p.id}" class="inline-flex items-center justify-between py-3 text-xs uppercase tracking-[0.15em] font-bold text-velora-text hover:text-velora-accent border-t border-velora-border transition-colors">
                            <span>Inspect Technical Specs</span>
                            <span>&rarr;</span>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- 7. OUR 5-STEP PROCESS -->
    <section id="process" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Straightforward Delivery</span>
            <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight">How We Build Your Website</h2>
            <p class="mt-4 text-base text-velora-muted text-pretty">
                A structured 2-to-4 week workflow with clear milestones and zero guesswork.
            </p>
        </div>

        <div class="relative max-w-4xl mx-auto">
            <!-- Mobile/Tablet Left Vertical Spine (< lg) -->
            <div class="timeline-spine-mobile lg:hidden"></div>

            <!-- Desktop Center Vertical Spine (lg+) -->
            <div class="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-velora-border via-velora-borderStrong to-transparent -translate-x-1/2"></div>

            <div class="space-y-10 lg:space-y-0">
                
                <div class="relative flex flex-col lg:flex-row items-start group reveal">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-end pr-12 pt-1">
                        <div class="text-right">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">01</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-accent/60 text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm">
                        01
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-accent bg-velora-bg mt-4 z-10 transition-transform group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pl-12">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Discovery</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We clarify your services, local customer search terms, and contact goals before writing a single line of code.</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col lg:flex-row-reverse items-start group reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-start pl-12 pt-1">
                        <div class="text-left">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">02</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-borderStrong text-velora-muted group-hover:border-velora-accent group-hover:text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm transition-colors">
                        02
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-borderStrong bg-velora-bg mt-4 z-10 transition-transform group-hover:border-velora-accent group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pr-12 lg:pl-0 text-left lg:text-right">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Content Map</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We organize your menus, rate cards, and practitioner credentials into a scannable, conversion-focused layout.</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col lg:flex-row items-start group reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-end pr-12 pt-1">
                        <div class="text-right">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">03</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-borderStrong text-velora-muted group-hover:border-velora-accent group-hover:text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm transition-colors">
                        03
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-borderStrong bg-velora-bg mt-4 z-10 transition-transform group-hover:border-velora-accent group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pl-12">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Custom Code</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We write lightweight, fast-loading code tested rigorously across iOS and Android devices for instant load times.</p>
                        </div>
                    </div>
                </div>
                
                <div class="relative flex flex-col lg:flex-row-reverse items-start group reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-start pl-12 pt-1">
                        <div class="text-left">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">04</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-borderStrong text-velora-muted group-hover:border-velora-accent group-hover:text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm transition-colors">
                        04
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-borderStrong bg-velora-bg mt-4 z-10 transition-transform group-hover:border-velora-accent group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pr-12 lg:pl-0 text-left lg:text-right">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">SEO & QA</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We configure detailed Schema.org markup, verify SSL, test lead delivery, and ensure 100% WCAG accessibility compliance.</p>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col lg:flex-row items-start group reveal lg:-mt-12">
                    <!-- Desktop Hollow Step Number -->
                    <div class="hidden lg:flex w-1/2 justify-end pr-12 pt-1">
                        <div class="text-right">
                            <span class="font-display text-6xl font-bold text-velora-bg text-stroke">05</span>
                        </div>
                    </div>

                    <!-- Mobile/Tablet Left-Aligned Milestone Node (< lg) -->
                    <div class="lg:hidden absolute left-4 -translate-x-1/2 top-5 z-10 w-7 h-7 rounded-full bg-velora-surface border border-velora-accent/60 text-velora-accent flex items-center justify-center font-display text-xs font-bold shadow-sm">
                        05
                    </div>

                    <!-- Desktop Milestone Center Dot (lg+) -->
                    <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-velora-accent bg-velora-bg mt-4 z-10 transition-transform group-hover:scale-150"></div>

                    <!-- Step Content Card -->
                    <div class="w-full lg:w-1/2 pl-11 sm:pl-12 lg:pl-12">
                        <div class="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-velora-surface shadow-xl hover:-translate-y-1 transition-transform duration-500">
                            <h3 class="font-display text-lg font-bold text-velora-text mb-2">Live Launch</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">We deploy to enterprise-grade cloud hosting and transfer 100% code and domain ownership directly to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. TRANSPARENT PRICING PREVIEW -->
    <section class="py-20 bg-velora-surface border-y border-velora-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center mb-16 reveal">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Transparent Investment</span>
                <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight">Clear, Fixed Pricing</h2>
                <p class="mt-4 text-base text-velora-muted text-pretty">
                    No hidden fees or surprise invoices. Choose the package that fits your stage of business.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <!-- Essential -->
                <div class="p-8 sm:p-10 rounded-3xl bg-velora-bg shadow-xl flex flex-col justify-between reveal">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-velora-muted block mb-2">Starter Package</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-2">Essential Web</h3>
                        <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4">₹14,999</div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">Ideal for single-location businesses needing a clean, fast mobile presence.</p>

                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Up to 5 Custom Mobile-First Pages</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Click-to-Call & WhatsApp Triggers</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Lightning-fast Mobile Loading Speed</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Secure Contact Form & Email Alerts</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> SSL Certificate & Cloud Deployment</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=essential" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText block">Choose Essential</a>
                </div>

                <!-- Professional (Highlighted) -->
                <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface border border-velora-accent/30 shadow-2xl relative flex flex-col justify-between reveal lg:scale-105 lg:-translate-y-2 z-10 group" style="transition-delay: 100ms;">
                    <div class="absolute inset-0 bg-velora-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-velora-accent text-black text-[10px] font-bold uppercase tracking-widest">
                        Most Popular For Growth
                    </div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-velora-accent block mb-2">Complete System</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-2">Professional + SEO</h3>
                        <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4">₹34,999</div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">For competitive local businesses that need maximum search visibility and high conversions.</p>

                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Up to 10 Custom Designed Pages</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Full Local SEO Schema.org Markup</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Google Business Profile Alignment</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Service Menu / Property Showcase Cards</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Conversion Tracking Integration</li>
                            <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> 3 Months Technical Maintenance Included</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=professional" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-accent text-black block hover:opacity-95">Choose Professional</a>
                </div>

                <!-- Custom -->
                <div class="p-8 sm:p-10 rounded-3xl bg-velora-bg shadow-xl flex flex-col justify-between reveal" style="transition-delay: 200ms;">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-velora-muted block mb-2">Tailored Scale</span>
                        <h3 class="font-display text-2xl font-bold text-velora-text mb-2">Custom & Multi-Location</h3>
                        <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4">₹69,999+</div>
                        <p class="text-xs text-velora-muted leading-relaxed mb-6">For multi-branch clinics, large property catalogs, or specialized workflows.</p>

                        <ul class="space-y-3 text-xs text-velora-muted mb-8">
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Multi-Branch / Location Page Architecture</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Custom CMS or Catalog Integration</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Advanced Local Directory Structuring</li>
                            <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Priority WhatsApp Engineering Support</li>
                        </ul>
                    </div>
                    <a href="/contact?tier=custom" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText block">Request Custom Scope</a>
                </div>
            </div>

            <div class="mt-12 text-center reveal">
                <a href="/pricing" class="text-xs uppercase tracking-widest font-bold text-velora-accent hover:text-velora-text transition-colors inline-flex py-3 mb-4">
                    Use our Interactive Price Calculator &rarr;
                </a>
                <p class="text-[10px] text-velora-muted leading-relaxed max-w-2xl mx-auto">
                    Project pricing covers website design & development. Domain, hosting, third-party services and optional ongoing maintenance are quoted separately where applicable.
                </p>
            </div>
        </div>
    </section>

    <!-- 9. FAQ SECTION -->
    <section class="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Honest Answers</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-velora-text tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-6">
            ${FAQS.map((faq, idx) => `
                <div class="p-8 rounded-2xl bg-velora-surface border-none reveal" style="transition-delay: ${idx * 50}ms;">
                    <h3 class="font-display text-lg font-bold text-velora-text mb-3 tracking-tight">${faq.q}</h3>
                    <p class="text-sm text-velora-muted leading-relaxed text-pretty">${faq.a}</p>
                </div>
            `).join('')}
        </div>
    </section>



    <!-- 10. FINAL HIGH-CONVERTING CTA BLOCK -->
    <section class="py-20 bg-velora-surface border-t border-velora-border">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="p-10 sm:p-16 rounded-3xl bg-velora-bg shadow-2xl shadow-2xl text-center relative overflow-hidden reveal">
                <div class="max-w-2xl mx-auto relative z-10">
                    <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-4">Start Your Project</span>
                    <h2 class="font-display text-3xl sm:text-5xl font-bold text-velora-text tracking-tight leading-tight">
                        Ready for a Website That Actually Brings in Customers?
                    </h2>
                    <p class="mt-6 text-base sm:text-lg text-velora-muted leading-relaxed text-pretty">
                        Tell us about your business and goals. We will review your project and send a detailed, transparent proposal within 24 hours.
                    </p>
                    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/contact" id="final-cta-quote-btn" onclick="if(window.veloraTrack) window.veloraTrack('cta_click', { button: 'final-cta-quote-btn' })" class="btn-luxury w-full sm:w-auto px-10 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity">
                            Get a Free Quote
                        </a>
                        <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" id="final-cta-whatsapp-btn" class="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2">
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    const script = `
        // Before/After Slider Interaction
        const container = document.getElementById('before-after-container');
        const afterBg = document.getElementById('after-bg');
        const beforeContent = document.getElementById('before-content');
        const afterContent = document.getElementById('after-content');
        const handle = document.getElementById('slider-handle');

        if (container && afterBg && beforeContent && afterContent && handle) {
            let isDragging = false;
            let currentTextState = 'after';
            let currentPos = 0.85;

            function updatePosition(x, fromKeyboard = false) {
                const rect = container.getBoundingClientRect();
                let pos;
                if (fromKeyboard) {
                    pos = x;
                } else {
                    pos = (x - rect.left) / rect.width;
                }

                if (pos < 0) pos = 0;
                if (pos > 1) pos = 1;
                currentPos = pos;

                const percent = pos * 100;

                handle.style.left = percent + '%';
                afterBg.style.clipPath = 'polygon(0 0, ' + percent + '% 0, ' + percent + '% 100%, 0 100%)';
                container.setAttribute('aria-valuenow', Math.round(percent));

                const roundedPercent = Math.round(percent);
                if (roundedPercent <= 45 && currentTextState !== 'before') {
                    currentTextState = 'before';
                    beforeContent.style.opacity = '1';
                    afterContent.style.opacity = '0';
                } else if (roundedPercent >= 55 && currentTextState !== 'after') {
                    currentTextState = 'after';
                    beforeContent.style.opacity = '0';
                    afterContent.style.opacity = '1';
                }
            }

            container.addEventListener('pointerdown', (e) => {
                isDragging = true;
                container.setPointerCapture(e.pointerId);
                updatePosition(e.clientX);
            });

            container.addEventListener('pointermove', (e) => {
                if (!isDragging) return;
                updatePosition(e.clientX);
            });

            container.addEventListener('pointerup', () => {
                isDragging = false;
            });

            container.addEventListener('pointercancel', () => {
                isDragging = false;
            });

            container.addEventListener('keydown', (e) => {
                const step = 0.05;
                if (e.key === 'ArrowLeft') {
                    updatePosition(currentPos - step, true);
                    e.preventDefault();
                } else if (e.key === 'ArrowRight') {
                    updatePosition(currentPos + step, true);
                    e.preventDefault();
                } else if (e.key === 'Home') {
                    updatePosition(0, true);
                    e.preventDefault();
                } else if (e.key === 'End') {
                    updatePosition(1, true);
                    e.preventDefault();
                }
            });

            // Initialize
            updatePosition(0.85, true);
        }

        // Recommendation Tool Logic
        let selectedIndustry = null;
        let selectedGoal = null;

        function setRecIndustry(slug) {
            selectedIndustry = slug;
            document.getElementById('rec-step-1').classList.add('hidden');
            document.getElementById('rec-step-2').classList.remove('hidden');
        }

        function setRecGoal(goal) {
            selectedGoal = goal;
            document.getElementById('rec-step-2').classList.add('hidden');
            document.getElementById('rec-step-3').classList.remove('hidden');

            const recs = {
                'real-estate': {
                    'more-enquiries': { t: 'Property Showcase + Lead Capture', d: 'We recommend a custom portfolio layout showcasing your best properties, paired with aggressive lead capture forms on every listing. A clean, ultra-fast mobile experience will out-convert generic broker sites.' },
                    'better-visibility': { t: 'Local SEO Real Estate Authority', d: 'We recommend building deep neighborhood-specific landing pages and integrating RealEstateAgent Schema.org markup so you dominate "property dealer near me" searches in your territory.' }
                },
                'restaurant': {
                    'more-calls': { t: 'Mobile-First Direct Booking', d: 'We recommend a streamlined mobile interface with a sticky "Call to Book" or "WhatsApp Booking" bar, combined with a fast-loading text-based menu to maximize immediate covers.' },
                    'better-visibility': { t: 'Google Business Alignment', d: 'We recommend a site heavily optimized with Restaurant and Menu Schema.org JSON-LD, linking perfectly with your Google Maps profile to dominate local dining discovery.' }
                },
                'clinic': {
                    'more-enquiries': { t: 'Trust & Direct Booking Engine', d: 'We recommend featuring doctor credentials, real patient outcomes, and transparent procedures, paired with sticky mobile booking buttons so anxious patients can book consultations instantly.' },
                    'stronger-presence': { t: 'Clinical Authority Platform', d: 'We recommend a robust, multi-page MedicalClinic structure featuring detailed treatment pages, physician bios, and deep local SEO architecture to establish definitive regional trust.' }
                },
                'salon': {
                    'more-enquiries': { t: 'Visual Portfolio + Pricing', d: 'We recommend an aesthetic, fast-loading gallery of your work paired with a clear, transparent service menu and direct WhatsApp booking links to eliminate pricing confusion.' },
                    'better-visibility': { t: 'Local Beauty Authority', d: 'We recommend deep optimization using HealthAndBeautyBusiness Schema, pushing local keywords for your specific treatments to capture high-intent local searches.' }
                },
                'other': {
                    'more-enquiries': { t: 'High-Conversion Local Setup', d: 'We recommend our proven local business architecture: a fast-loading, mobile-perfect site with clear service breakdowns, trust signals, and direct call-to-actions to turn visitors into leads.' },
                    'stronger-presence': { t: 'Brand Authority Build', d: 'We recommend a multi-page setup that thoroughly explains your unique value, showcases case studies, and utilizes professional layout design to elevate you above local competitors.' }
                }
            };

            let result = null;
            if (recs[selectedIndustry] && recs[selectedIndustry][selectedGoal]) {
                result = recs[selectedIndustry][selectedGoal];
            } else {
                result = {
                    t: 'Custom High-Performance Build',
                    d: 'We recommend a tailored, high-speed website that clearly communicates your value and makes it incredibly easy for local customers to contact you.'
                };
            }

            document.getElementById('rec-result-title').innerText = result.t;
            document.getElementById('rec-result-desc').innerText = result.d;
            document.getElementById('rec-cta-btn').href = '/contact?industry=' + selectedIndustry + '&goal=' + selectedGoal;

            if (window.veloraTrack) {
                window.veloraTrack('recommendation_completed', { industry: selectedIndustry, goal: selectedGoal });
            }
        }

        function resetRecTool() {
            selectedIndustry = null;
            selectedGoal = null;
            document.getElementById('rec-step-3').classList.add('hidden');
            document.getElementById('rec-step-2').classList.add('hidden');
            document.getElementById('rec-step-1').classList.remove('hidden');
        }

        window.setRecIndustry = setRecIndustry;
        window.setRecGoal = setRecGoal;
        window.resetRecTool = resetRecTool;
    `;

    return { meta, content, script };
}

function renderServicesPage() {
    const meta = {
        title: 'Web Design & Local SEO Services | Velora Digital',
        description: 'Explore our core services: high-speed website design, technical local SEO, and ongoing maintenance care for local businesses.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Services', link: '/services' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Our Core Capabilities</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Engineered for Real Business Growth</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed text-pretty">
                We focus exclusively on the three critical pillars local businesses need to win online: high-speed website design, technical local search visibility, and reliable ongoing care.
            </p>
        </div>

        <div class="space-y-12">
            ${SERVICES.map((s, idx) => `
                <div class="premium-border bg-velora-surface p-8 sm:p-12 rounded-3xl reveal">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="text-4xl">${s.icon}</div>
                            <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-velora-accent block">${s.heroTag}</span>
                            <h2 class="font-display text-3xl font-bold text-velora-text tracking-tight">${s.title}</h2>
                            <p class="text-sm text-velora-muted leading-relaxed text-pretty">${s.longDesc}</p>
                            <div class="pt-4">
                                <a href="/services/${s.slug}" class="btn-luxury inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                                    <span>Detailed Specs & Pricing</span>
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-velora-bg p-6 sm:p-8 rounded-2xl border-none">
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">What's Included</h4>
                                <ul class="space-y-2.5 text-xs text-velora-muted">
                                    ${s.benefits.map(b => `<li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span> <span>${b}</span></li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-widest text-velora-accent mb-3">Ideal For</h4>
                                <p class="text-xs text-velora-muted leading-relaxed mb-6">${s.whoNeedsIt}</p>

                                <div class="text-xs font-bold uppercase tracking-widest text-velora-text mb-1">Standard Delivery Timeline</div>
                                <div class="text-xs text-velora-muted">${s.timeline}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
    `;

    return { meta, content };
}

function renderServiceDetailPage(service) {
    const meta = {
        title: `${service.title} | Velora Digital`,
        description: service.short,
        schema: [
            generateSchema('Service', { name: service.title, description: service.short }),
            generateSchema('FAQPage', { faqs: service.faqs })
        ],
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Services', link: '/services' }, { title: service.title, link: `/services/${service.slug}` }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">${service.heroTag}</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight leading-tight">${service.title}</h1>
            <p class="mt-6 text-xl text-velora-muted leading-relaxed max-w-3xl text-pretty">${service.short}</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
            <div class="p-8 rounded-3xl bg-velora-surface shadow-xl">
                <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">What Is Included</h2>
                <ul class="space-y-3 text-sm text-velora-muted">
                    ${service.benefits.map(b => `<li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">✓</span> <span>${b}</span></li>`).join('')}
                </ul>
            </div>

            <div class="p-8 rounded-3xl bg-velora-surface shadow-xl">
                <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">What Is NOT Included</h2>
                <ul class="space-y-3 text-sm text-velora-muted mb-6">
                    ${service.notIncluded.map(n => `<li class="flex items-start gap-2.5"><span class="text-red-500">✕</span> <span>${n}</span></li>`).join('')}
                </ul>
                <div class="p-4 rounded-xl bg-velora-surface border-none shadow-md text-xs text-velora-muted">
                    <strong class="text-velora-text block mb-1">Expected Timeline:</strong>
                    <span>${service.timeline}</span>
                </div>
            </div>
        </div>

        <!-- 5-Step Process for this service -->
        <div class="mb-16 p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-xl reveal">
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-velora-text mb-8 tracking-tight">Step-by-Step Delivery Workflow</h2>
            <div class="space-y-6">
                ${service.process.map(p => `
                    <div class="flex items-start gap-4 pb-6 border-b border-velora-border last:border-0 last:pb-0">
                        <span class="font-display text-xl font-bold text-velora-accent shrink-0">${p.step}</span>
                        <div>
                            <h3 class="font-display text-base font-bold text-velora-text mb-1">${p.title}</h3>
                            <p class="text-sm text-velora-muted leading-relaxed">${p.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Service FAQs -->
        <div class="mb-16 reveal">
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-velora-text mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div class="space-y-4">
                ${service.faqs.map(faq => `
                    <div class="p-6 rounded-2xl bg-velora-surface border-none">
                        <h3 class="font-display text-base font-bold text-velora-text mb-2">${faq.q}</h3>
                        <p class="text-sm text-velora-muted leading-relaxed">${faq.a}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- CTA Box -->
        <div class="p-10 rounded-3xl bg-velora-bg shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">Ready to Discuss ${service.title}?</h3>
            <p class="text-sm text-velora-muted max-w-md mx-auto mb-8">Send us a quick message with your project goals for a fast, honest estimate.</p>
            <a href="/contact" class="btn-luxury inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Request a Free Quote
            </a>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderIndustriesPage() {
    const meta = {
        title: 'Industries We Serve | Velora Digital',
        description: 'Specialized web design and local SEO strategies for real estate agencies, restaurants, clinics, and salons.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Industries', link: '/industries' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Focused Industry Expertise</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Built for Your Exact Customer Flow</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed text-pretty">
                Every business sector has different customer friction points. We build layouts engineered around what your specific local buyers expect.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${INDUSTRIES.map((ind, idx) => `
                <div class="premium-border bg-velora-surface p-8 sm:p-10 rounded-3xl flex flex-col justify-between reveal" style="transition-delay: ${idx * 75}ms;">
                    <div>
                        <div class="text-4xl mb-4">${ind.icon}</div>
                        <h2 class="font-display text-2xl font-bold text-velora-text mb-3 tracking-tight">${ind.name}</h2>
                        <p class="text-sm text-velora-muted leading-relaxed mb-6 text-pretty">${ind.desc}</p>

                        <div class="space-y-4 mb-8">
                            <div class="p-4 rounded-xl bg-velora-surface border-none shadow-md">
                                <div class="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">Common Problem</div>
                                <div class="text-xs text-velora-muted leading-relaxed">${ind.challenges}</div>
                            </div>
                            <div class="p-4 rounded-xl bg-velora-surface border-none shadow-md">
                                <div class="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">Velora Solution</div>
                                <div class="text-xs text-velora-muted leading-relaxed">${ind.solutions}</div>
                            </div>
                        </div>
                    </div>

                    <a href="/industries/${ind.slug}" class="btn-luxury inline-flex items-center justify-between px-6 py-3.5 min-h-[44px] rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                        <span>Read Full ${ind.shortName} Strategy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            `).join('')}
        </div>
    </section>
    `;

    return { meta, content };
}

function renderIndustryDetailPage(industry) {
    const meta = {
        title: `${industry.name} Web Design & Local SEO | Velora Digital`,
        description: industry.desc,
        schema: [
            generateSchema('Service', {
                name: `Web Design & Local SEO for ${industry.name}`,
                description: industry.desc,
                url: `${CONFIG.baseUrl}/industries/${industry.slug}`
            })
        ],
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Industries', link: '/industries' }, { title: industry.name, link: `/industries/${industry.slug}` }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-16 reveal">
            <div class="text-4xl mb-4">${industry.icon}</div>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Industry Playbook</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight leading-tight">${industry.name}</h1>
            <p class="mt-6 text-xl text-velora-muted leading-relaxed max-w-3xl text-pretty">${industry.desc}</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
            <div class="p-8 rounded-3xl bg-velora-surface shadow-xl">
                <span class="text-xs font-bold uppercase tracking-widest text-red-500 block mb-2">Common Industry Friction</span>
                <h2 class="font-display text-xl font-bold text-velora-text mb-4 tracking-tight">Why Most Websites in This Sector Fail</h2>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty">${industry.challenges}</p>
            </div>

            <div class="p-8 rounded-3xl bg-velora-surface shadow-xl">
                <span class="text-xs font-bold uppercase tracking-widest text-emerald-500 block mb-2">Customer Expectations</span>
                <h2 class="font-display text-xl font-bold text-velora-text mb-4 tracking-tight">What High-Intent Visitors Look For</h2>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty">${industry.expectations}</p>
            </div>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-xl mb-16 reveal">
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-velora-text mb-6 tracking-tight">Essential Conversion Elements We Build</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${industry.conversionElements.map(el => `
                    <div class="flex items-center gap-3 p-4 rounded-xl bg-velora-surface border-none shadow-md text-sm text-velora-text font-medium">
                        <span class="text-velora-accent font-bold">✓</span>
                        <span>${el}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
            <div class="p-8 rounded-3xl bg-velora-surface shadow-xl">
                <h3 class="font-display text-lg font-bold text-velora-text mb-3 tracking-tight">Mobile Experience Focus</h3>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty">${industry.mobileConsiderations}</p>
            </div>
            <div class="p-8 rounded-3xl bg-velora-surface shadow-xl">
                <h3 class="font-display text-lg font-bold text-velora-text mb-3 tracking-tight">Local SEO Strategy</h3>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty">${industry.seoConsiderations}</p>
            </div>
        </div>

        <!-- NEW: Custom Strategy Recommendation -->
        <div class="p-8 sm:p-12 rounded-3xl bg-velora-bg shadow-2xl shadow-lg mb-16 reveal">
            <div class="mb-8">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Our Core Strategy</span>
                <h2 class="font-display text-2xl sm:text-3xl font-bold text-velora-text tracking-tight">How We Position ${industry.shortName}</h2>
                <p class="mt-3 text-sm text-velora-muted leading-relaxed text-pretty">${industry.whatWeRecommend}</p>
            </div>

            <div class="pt-8 border-t border-velora-border">
                <h3 class="text-xs font-bold uppercase tracking-widest text-velora-text mb-4">Recommended Architecture</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    ${(industry.keyFeatures || []).map(feature => `
                        <li class="flex flex-col gap-2 p-4 rounded-xl border-none bg-velora-surface">
                            <span class="text-velora-accent font-bold text-lg">✓</span>
                            <span class="text-xs text-velora-text font-medium">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>

        <!-- CTA Box -->
        <div class="p-10 rounded-3xl bg-velora-bg shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">Upgrade Your ${industry.shortName} Website</h3>
            <p class="text-sm text-velora-muted max-w-md mx-auto mb-8">Get a modern, fast website tailored specifically for your customers.</p>
            <a href="/contact?industry=${industry.slug}" class="btn-luxury inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Get a Quote for ${industry.shortName}
            </a>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderLocationsPage() {
    const meta = {
        title: 'Service Areas & Locations | Velora Digital',
        description: 'Web design and local SEO studio serving Gurugram, Delhi NCR, Chandigarh Tricity, and Bengaluru.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Locations', link: '/locations' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Geographic Reach</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Local Web Design Across Key Business Hubs</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed text-pretty">
                We support serious businesses in competitive regional corridors where local search visibility and smartphone conversion are essential to winning customers.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${LOCATIONS.map((loc, idx) => `
                <div class="premium-border bg-velora-surface p-8 sm:p-10 rounded-3xl flex flex-col justify-between reveal" style="transition-delay: ${idx * 75}ms;">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-4">
                            <span class="text-xs font-bold uppercase tracking-widest text-velora-accent">${loc.region}</span>
                            <span class="text-xs text-velora-muted">Hub Profile</span>
                        </div>
                        <h2 class="font-display text-3xl font-bold text-velora-text mb-3 tracking-tight">${loc.name}</h2>
                        <p class="text-sm text-velora-muted leading-relaxed mb-6 text-pretty">${loc.desc}</p>

                        <div class="mb-6">
                            <div class="text-xs font-bold uppercase tracking-widest text-velora-text mb-3">Key Sub-Markets & Corridors</div>
                            <div class="flex flex-wrap gap-2">
                                ${loc.neighborhoods.map(n => `<span class="px-3 py-1 rounded-lg bg-velora-bg border-none text-xs text-velora-muted">${n}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <a href="/locations/${loc.slug}" class="btn-luxury inline-flex items-center justify-between px-6 py-3.5 min-h-[44px] rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                        <span>Explore ${loc.name} Local Strategy</span>
                        <span>&rarr;</span>
                    </a>
                </div>
            `).join('')}
        </div>
    </section>
    `;

    return { meta, content };
}

function renderLocationDetailPage(location) {
    const meta = {
        title: `Web Design & Local SEO Company in ${location.name} | Velora Digital`,
        description: location.desc,
        schema: [
            generateSchema('Service', {
                name: `Web Design & Local SEO in ${location.name}`,
                description: location.desc,
                url: `${CONFIG.baseUrl}/locations/${location.slug}`,
                areaServed: location.name
            })
        ],
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Locations', link: '/locations' }, { title: location.name, link: `/locations/${location.slug}` }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">${location.region}</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight leading-tight">Web Design & Local SEO for ${location.name}</h1>
            <p class="mt-6 text-xl text-velora-muted leading-relaxed max-w-3xl text-pretty">${location.desc}</p>
        </header>

        <div class="p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-xl mb-16 reveal">
            <h2 class="font-display text-2xl font-bold text-velora-text mb-4 tracking-tight">Market Context & Local Consumer Behavior</h2>
            <p class="text-base text-velora-muted leading-relaxed mb-6 text-pretty">${location.hubContext}</p>
            <p class="text-base text-velora-muted leading-relaxed text-pretty">${location.localStrategy}</p>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-xl mb-16 reveal">
            <h2 class="font-display text-2xl font-bold text-velora-text mb-6 tracking-tight">Target Neighborhoods & Sub-Markets</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${location.neighborhoods.map(n => `
                    <div class="flex items-center gap-3 p-4 rounded-xl bg-velora-surface border-none shadow-md text-sm text-velora-text font-medium">
                        <span class="text-velora-accent">📍</span>
                        <span>${n}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- CTA Box -->
        <div class="p-10 rounded-3xl bg-velora-bg shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">Launch Your ${location.name} Website</h3>
            <p class="text-sm text-velora-muted max-w-md mx-auto mb-8">Get a high-speed website built for local discovery across ${location.name}.</p>
            <a href="/contact" class="btn-luxury inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Get a Free Quote
            </a>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderPortfolioPage() {
    const meta = {
        title: 'Portfolio & Concept Demonstrations | Velora Digital',
        description: 'Explore our honest portfolio of engineered concept projects benchmarking code performance, mobile UX, and conversion architecture.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Portfolio', link: '/portfolio' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-16 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-velora-faint border-none text-[10px] font-bold uppercase tracking-widest text-velora-accent mb-4">
                <span>Honest Transparency Policy</span>
            </div>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Our Work & Technical Benchmarks</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed text-pretty">
                We believe in complete professional honesty. Rather than inventing fake client testimonials or inflated revenue metrics, we showcase fully engineered concept and demo projects that demonstrate our real coding standards, mobile performance, and conversion architecture.
            </p>
        </div>

        <div class="space-y-24">
            ${PORTFOLIO.map((p, idx) => `
                <div id="${p.id}" class="reveal relative group">
                    <div class="absolute -inset-8 bg-velora-accent/5 opacity-0 group-hover:opacity-100 rounded-[3rem] transition-all duration-700 blur-2xl pointer-events-none"></div>
                    <div class="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <div class="lg:w-5/12 space-y-6">
                            <div class="flex items-center gap-3">
                                <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${p.badgeColor}">${p.type}</span>
                                <span class="text-xs font-semibold text-velora-muted">${p.industry}</span>
                            </div>
                            
                            <h2 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight">${p.title}</h2>
                            <p class="text-lg text-velora-muted leading-relaxed text-pretty">${p.summary}</p>
                            
                            <div class="pt-6 border-t border-velora-border">
                                <div class="text-xs font-bold uppercase tracking-widest text-velora-accent mb-3">Core Objective</div>
                                <div class="text-sm text-velora-text leading-relaxed font-medium italic">"${p.demonstrates}"</div>
                            </div>
                        </div>

                        <div class="lg:w-7/12">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                                <div>
                                    <div class="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1.5">Project Goals</div>
                                    <div class="text-sm text-velora-muted leading-relaxed">${p.projectGoals}</div>
                                </div>
                                <div>
                                    <div class="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1.5">Conversion Target</div>
                                    <div class="text-sm text-velora-muted leading-relaxed">${p.conversionObjectives}</div>
                                </div>
                                <div class="sm:col-span-2">
                                    <div class="text-[10px] font-bold uppercase tracking-widest text-velora-accent mb-1.5">Technical Priorities</div>
                                    <div class="text-sm text-velora-muted leading-relaxed">${p.technicalPriorities}</div>
                                </div>
                            </div>

                            <div class="mt-10 p-8 rounded-3xl bg-velora-surface shadow-xl">
                                <div class="text-xs font-bold uppercase tracking-widest text-velora-text mb-4">Key Deliverables</div>
                                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-velora-muted">
                                    ${p.deliverables.map(d => `<li class="flex items-start gap-2"><span class="text-velora-accent font-bold mt-0.5">✓</span> <span class="leading-snug">${d}</span></li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="mt-20 p-10 sm:p-14 rounded-3xl bg-velora-surface shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-velora-text mb-4">Want This Standard of Quality for Your Business?</h3>
            <p class="text-base text-velora-muted max-w-xl mx-auto mb-8">We will build a custom website tailored specifically to your services and target locality.</p>
            <a href="/contact" class="btn-luxury inline-flex items-center px-10 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Discuss Your Project
            </a>
        </div>
    </section>
    `;

    return { meta, content };
}

function renderProcessPage() {
    const meta = {
        title: 'Our Process | Velora Digital',
        description: 'How we deliver production-ready local websites in 2 to 4 weeks with zero hassle.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Process', link: '/process' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Structured Workflow</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">How We Work Together</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed max-w-3xl text-pretty">
                We run a clean, transparent process without bloated agency meetings or confusing jargon. Here is exactly what happens from our first conversation to launch day.
            </p>
        </header>

        <div class="space-y-8 mb-16">
            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl reveal">
                <div class="flex items-center gap-4 mb-4">
                    <span class="font-display text-3xl font-bold text-velora-accent">01</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text">Discovery & Alignment</h2>
                </div>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                    We start with a straightforward discovery call or questionnaire to understand your business, target neighborhoods, primary services, and ideal customer inquiries.
                </p>
                <div class="text-xs text-velora-accent font-semibold">Deliverable: Clear project scope & fixed-price agreement</div>
            </div>

            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl reveal" style="transition-delay: 50ms;">
                <div class="flex items-center gap-4 mb-4">
                    <span class="font-display text-3xl font-bold text-velora-accent">02</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text">Content Architecture & Visual Design</h2>
                </div>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                    We organize your menus, pricing cards, and doctor/practitioner credentials into a clean, mobile-first design layout with high typographic contrast and prominent contact buttons.
                </p>
                <div class="text-xs text-velora-accent font-semibold">Deliverable: Interactive mobile & desktop visual layouts for review</div>
            </div>

            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl reveal" style="transition-delay: 100ms;">
                <div class="flex items-center gap-4 mb-4">
                    <span class="font-display text-3xl font-bold text-velora-accent">03</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text">High-Performance Custom Development</h2>
                </div>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                    We write clean semantic code without slow page builders. Every page is optimized for lightning-fast load times on real 4G/5G mobile networks.
                </p>
                <div class="text-xs text-velora-accent font-semibold">Deliverable: Fully functional staging site ready for testing</div>
            </div>

            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl reveal" style="transition-delay: 150ms;">
                <div class="flex items-center gap-4 mb-4">
                    <span class="font-display text-3xl font-bold text-velora-accent">04</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text">Local SEO & Lead Flow Verification</h2>
                </div>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                    We embed Local Business Schema.org structured data, configure XML sitemaps, verify SSL security, and test contact forms to ensure inquiries reach your inbox reliably.
                </p>
                <div class="text-xs text-velora-accent font-semibold">Deliverable: Form delivery tests & Schema validation</div>
            </div>

            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl reveal" style="transition-delay: 200ms;">
                <div class="flex items-center gap-4 mb-4">
                    <span class="font-display text-3xl font-bold text-velora-accent">05</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text">Live Launch & 100% Asset Handover</h2>
                </div>
                <p class="text-sm text-velora-muted leading-relaxed text-pretty mb-4">
                    We connect your custom domain, deploy to fast cloud servers, and transfer complete ownership of your code and credentials.
                </p>
                <div class="text-xs text-velora-accent font-semibold">Deliverable: Live website + full ownership transfer</div>
            </div>
        </div>

        <div class="p-10 rounded-3xl bg-velora-bg shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">Ready to Begin Step 1?</h3>
            <p class="text-sm text-velora-muted max-w-md mx-auto mb-8">Send us your project details for a fast discovery review.</p>
            <a href="/contact" class="btn-luxury inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Get Started
            </a>
        </div>
    </section>
    `;

    return { meta, content };
}

function renderPricingPage() {
    const meta = {
        title: 'Pricing & Instant Calculator | Velora Digital',
        description: 'Transparent fixed pricing for web design and local SEO. Use our instant calculator to estimate your project investment.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Pricing', link: '/pricing' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="max-w-3xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Transparent Investment</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Fixed Packages & Custom Estimator</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed text-pretty">
                We believe you should know what a professional website costs before having to sit through a sales pitch.
            </p>
        </header>

        <!-- Fixed Packages Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <!-- Essential -->
            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl flex flex-col justify-between reveal">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-velora-muted block mb-2">Starter Package</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2">Essential Web</h2>
                    <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4">₹14,999</div>
                    <p class="text-xs text-velora-muted leading-relaxed mb-6">Clean, fast mobile presence for local single-location businesses.</p>

                    <ul class="space-y-3 text-xs text-velora-muted mb-8">
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Up to 5 Custom Mobile-First Pages</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Click-to-Call & WhatsApp Triggers</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Lightning-fast Mobile Loading Speed</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Secure Contact Form with Email Alerts</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> SSL Certificate & Cloud Deployment</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> 100% Asset & Code Ownership</li>
                    </ul>
                </div>
                <a href="/contact?tier=essential" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText block">Choose Essential</a>
            </div>

            <!-- Professional (Highlighted) -->
            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface border-2 border-velora-accent/50 shadow-2xl relative flex flex-col justify-between reveal" style="transition-delay: 100ms;">
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-velora-accent text-black text-[10px] font-bold uppercase tracking-widest">
                    Recommended For Growth
                </div>
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-velora-accent block mb-2">Complete System</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2">Professional + SEO</h2>
                    <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4">₹34,999</div>
                    <p class="text-xs text-velora-muted leading-relaxed mb-6">Designed for businesses needing top-tier mobile conversions and Google Maps visibility.</p>

                    <ul class="space-y-3 text-xs text-velora-muted mb-8">
                        <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Up to 10 Custom Designed Pages</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Full Local SEO Schema.org Markup</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Google Business Profile Alignment</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Service Menu / Property Showcase Cards</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> Conversion Tracking Setup</li>
                        <li class="flex items-center gap-2"><span class="text-velora-accent font-bold">✓</span> 3 Months Technical Maintenance Included</li>
                    </ul>
                </div>
                <a href="/contact?tier=professional" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-accent text-black block hover:opacity-95">Choose Professional</a>
            </div>

            <!-- Custom -->
            <div class="p-8 sm:p-10 rounded-3xl bg-velora-surface shadow-xl flex flex-col justify-between reveal" style="transition-delay: 200ms;">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-velora-muted block mb-2">Tailored Scale</span>
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-2">Custom & Multi-Location</h2>
                    <div class="text-3xl sm:text-4xl font-bold text-velora-text font-display mb-4">₹69,999+</div>
                    <p class="text-xs text-velora-muted leading-relaxed mb-6">For multi-branch clinics, large property catalogs, or custom software integrations.</p>

                    <ul class="space-y-3 text-xs text-velora-muted mb-8">
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Multi-Branch / Location Page Architecture</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Custom CMS or Catalog Integration</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Advanced Local Directory Structuring</li>
                        <li class="flex items-center gap-2"><span class="text-emerald-500 font-bold">✓</span> Priority WhatsApp Engineering Support</li>
                    </ul>
                </div>
                <a href="/contact?tier=custom" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText block">Request Custom Scope</a>
            </div>
        </div>

        <!-- Interactive Calculator -->
        <div class="p-8 sm:p-14 rounded-3xl bg-velora-surface shadow-xl reveal">
            <div class="max-w-3xl mb-10">
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-2">Interactive Tool</span>
                <h3 class="font-display text-3xl font-bold text-velora-text tracking-tight">Instant Project Cost Calculator</h3>
                <p class="text-sm text-velora-muted mt-2">Adjust your desired page count and optional add-ons to see an instant estimate.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div class="lg:col-span-7 space-y-8">
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <label for="pages-slider" class="text-xs font-bold uppercase tracking-widest text-velora-text">Number of Custom Pages</label>
                            <span id="pages-count-display" class="font-mono text-sm font-bold text-velora-accent px-3 py-1 bg-velora-bg border-none rounded-lg">5 Pages</span>
                        </div>
                        <input type="range" id="pages-slider" min="1" max="25" value="5" class="w-full accent-velora-accent cursor-pointer">
                    </div>

                    <div class="space-y-4">
                        <label class="flex items-center gap-3.5 p-4 rounded-2xl bg-velora-surface border-none shadow-lg cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input type="checkbox" id="calc-seo-addon" class="w-5 h-5 rounded accent-velora-accent cursor-pointer" checked>
                            <div class="flex-grow">
                                <div class="text-xs font-bold text-velora-text uppercase tracking-wider">Local SEO & Schema.org Setup</div>
                                <div class="text-xs text-velora-muted">Google Maps alignment, structured metadata & NAP audit (+₹${CONFIG.pricing.seoAddon.toLocaleString('en-IN')})</div>
                            </div>
                        </label>

                        <label class="flex items-center gap-3.5 p-4 rounded-2xl bg-velora-surface border-none shadow-lg cursor-pointer hover:border-velora-borderStrong transition-colors">
                            <input type="checkbox" id="calc-maint-addon" class="w-5 h-5 rounded accent-velora-accent cursor-pointer">
                            <div class="flex-grow">
                                <div class="text-xs font-bold text-velora-text uppercase tracking-wider">1-Year Cloud Maintenance & Security</div>
                                <div class="text-xs text-velora-muted">Hosting management, SSL renewals & regular content edits (+₹${CONFIG.pricing.maintenanceAddon.toLocaleString('en-IN')})</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div class="lg:col-span-5 p-8 rounded-2xl bg-velora-surface border-2 border-velora-accent/30 text-center relative">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-velora-accent block mb-2">Estimated Investment</span>
                    <div id="calc-estimate-display" class="font-display text-4xl sm:text-5xl font-bold text-velora-text mb-2">~₹${(CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon).toLocaleString('en-IN')}</div>
                    <div id="calc-direction-label" class="inline-block px-3 py-1 bg-velora-accent/10 border border-velora-accent/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-velora-accent mb-4">Professional Build</div>

                    <ul id="calc-includes-list" class="text-left space-y-2.5 text-xs text-velora-muted mb-8 pb-8 border-b border-velora-border">
                        <li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span> <span>5 Custom Designed Pages</span></li>
                        <li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span> <span>Local SEO & Schema.org Setup</span></li>
                    </ul>

                    <a id="calc-quote-btn" href="/contact?pages=5&seo=true&maint=false&est=${CONFIG.pricing.baseCalculator + (5 * CONFIG.pricing.perPage) + CONFIG.pricing.seoAddon}" onclick="if(window.veloraTrack) window.veloraTrack('calculator_submit', { url: this.href })" class="btn-luxury w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-velora-accent text-black block hover:opacity-95 mb-4">
                        Request Quote for this Project &rarr;
                    </a>
                    <p class="text-[10px] text-velora-muted leading-relaxed text-balance mx-auto">
                        Project pricing covers website design & development. Domain, hosting, third-party services and ongoing maintenance are quoted separately where applicable.
                    </p>
                </div>
            </div>
        </div>
    </section>
    `;

    const script = `
        const pagesSlider = document.getElementById('pages-slider');
        const pagesDisplay = document.getElementById('pages-count-display');
        const seoCheckbox = document.getElementById('calc-seo-addon');
        const maintCheckbox = document.getElementById('calc-maint-addon');
        const estimateDisplay = document.getElementById('calc-estimate-display');
        const quoteBtn = document.getElementById('calc-quote-btn');
        const directionLabel = document.getElementById('calc-direction-label');
        const includesList = document.getElementById('calc-includes-list');

        function updateEstimate() {
            if (!pagesSlider) return;
            const pages = parseInt(pagesSlider.value, 10);
            const seo = seoCheckbox ? seoCheckbox.checked : false;
            const maint = maintCheckbox ? maintCheckbox.checked : false;

            if (pagesDisplay) pagesDisplay.innerText = pages + (pages === 1 ? ' Page' : ' Pages');

            let total = ${CONFIG.pricing.baseCalculator} + (pages * ${CONFIG.pricing.perPage});
            if (seo) total += ${CONFIG.pricing.seoAddon};
            if (maint) total += ${CONFIG.pricing.maintenanceAddon};

            if (estimateDisplay) estimateDisplay.innerText = '~₹' + total.toLocaleString('en-IN');

            if (directionLabel) {
                if (total >= ${CONFIG.pricing.customBase}) {
                    directionLabel.innerText = 'Custom Scope';
                    directionLabel.className = 'inline-block px-3 py-1 bg-velora-bg border-none rounded-full text-[10px] font-bold uppercase tracking-widest text-velora-text mb-4';
                } else if (total >= ${CONFIG.pricing.professional}) {
                    directionLabel.innerText = 'Professional Build';
                    directionLabel.className = 'inline-block px-3 py-1 bg-velora-accent/10 border border-velora-accent/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-velora-accent mb-4';
                } else {
                    directionLabel.innerText = 'Essential Build';
                    directionLabel.className = 'inline-block px-3 py-1 bg-velora-bg border-none rounded-full text-[10px] font-bold uppercase tracking-widest text-velora-text mb-4';
                }
            }

            if (includesList) {
                let listHtml = '<li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span> <span>' + pages + ' Custom Designed Pages</span></li>';
                if (seo) {
                    listHtml += '<li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span> <span>Local SEO & Schema.org Setup</span></li>';
                }
                if (maint) {
                    listHtml += '<li class="flex items-start gap-2"><span class="text-emerald-500 font-bold">✓</span> <span>1-Year Cloud Maintenance</span></li>';
                }
                includesList.innerHTML = listHtml;
            }

            if (quoteBtn) {
                let tier = total >= ${CONFIG.pricing.customBase} ? 'custom' : (total >= ${CONFIG.pricing.professional} ? 'professional' : 'essential');
                quoteBtn.href = '/contact?tier=' + tier + '&pages=' + pages + '&seo=' + seo + '&maint=' + maint + '&est=' + total;
            }
        }

        if (pagesSlider) pagesSlider.addEventListener('input', updateEstimate);
        if (seoCheckbox) seoCheckbox.addEventListener('change', updateEstimate);
        if (maintCheckbox) maintCheckbox.addEventListener('change', updateEstimate);

        // Initial setup on load
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            updateEstimate();
        } else {
            document.addEventListener('DOMContentLoaded', updateEstimate);
        }
    `;

    return { meta, content, script };
}

function renderAboutPage() {
    const meta = {
        title: 'About Velora Digital | Independent Web Studio',
        description: 'Learn about Velora Digital, our engineering philosophy, and why we focus on fast, honest web design for local businesses.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'About Us', link: '/about' }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-20 reveal relative">
            <div class="absolute -left-12 top-0 text-[12rem] font-display font-bold text-velora-accent/5 pointer-events-none select-none hidden md:block">"</div>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Studio Philosophy</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight leading-tight">Honest Web Design for Real Local Businesses</h1>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div class="md:col-span-7">
                    <p class="text-xl text-velora-text leading-relaxed text-pretty">
                        Most small businesses have two bad choices when they need a website. They either buy a cheap template that breaks and never gets found on Google, or they hire an expensive agency that charges huge retainers and speaks in confusing jargon.
                    </p>
                    <p class="mt-4 text-xl text-velora-muted leading-relaxed text-pretty">
                        We built Velora Digital to be the practical middle ground: a capable, focused studio delivering fast-loading, high-converting websites without the agency nonsense.
                    </p>
                </div>
                <div class="md:col-span-5 pl-6 md:pl-8 border-l border-velora-accent/20">
                    <p class="text-lg font-display text-velora-muted italic">"Premium design is about knowing what to remove, not what to add."</p>
                </div>
            </div>
        </header>

        <div class="space-y-8 mb-16 reveal">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div class="md:col-span-6 p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-xl">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-6 tracking-tight">What You Can Expect</h2>
                    <ul class="space-y-4 text-sm text-velora-muted leading-relaxed">
                        <li class="flex gap-3"><span class="text-velora-accent">✓</span> <div><strong>Direct Communication:</strong> You work directly with the developers building your site. No account managers or middlemen blocking the way.</div></li>
                        <li class="flex gap-3"><span class="text-velora-accent">✓</span> <div><strong>Transparent Pricing:</strong> No hidden fees, surprise bills, or confusing retainers. What we quote is what you pay.</div></li>
                        <li class="flex gap-3"><span class="text-velora-accent">✓</span> <div><strong>Performance-First Implementation:</strong> Your site is hand-coded for maximum speed and engineered to target Google Core Web Vitals out of the box.</div></li>
                        <li class="flex gap-3"><span class="text-velora-accent">✓</span> <div><strong>Measurable Goals:</strong> We focus on making the phone ring, not just making the site look pretty.</div></li>
                    </ul>
                </div>
                <div class="md:col-span-6 p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-xl md:mt-16">
                    <h2 class="font-display text-2xl font-bold text-velora-text mb-6 tracking-tight">What We Refuse to Do</h2>
                    <ul class="space-y-4 text-sm text-velora-muted leading-relaxed">
                        <li class="flex gap-3"><span class="text-red-500 font-bold">×</span> <div><strong>Use Heavy Page Builders:</strong> We don't drag-and-drop bloated plugins that slow your site down and break during updates.</div></li>
                        <li class="flex gap-3"><span class="text-red-500 font-bold">×</span> <div><strong>Fake SEO Guarantees:</strong> We will never promise a "#1 Ranking on Google overnight" because that is technically impossible and highly unethical.</div></li>
                        <li class="flex gap-3"><span class="text-red-500 font-bold">×</span> <div><strong>Hostage Contracts:</strong> We build on standard, maintainable code. You own your website completely once it's launched.</div></li>
                        <li class="flex gap-3"><span class="text-red-500 font-bold">×</span> <div><strong>Offshore the Work:</strong> We handle architecture, design, and coding strictly in-house to maintain our strict quality standards.</div></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="p-10 rounded-3xl bg-velora-bg shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">Have a Project in Mind?</h3>
            <p class="text-sm text-velora-muted max-w-md mx-auto mb-8">Get a free, brutally honest technical audit of your current website.</p>
            <a href="/contact?audit=true" class="btn-luxury inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Contact Our Studio
            </a>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderBlogPage() {
    const meta = {
        title: 'Journal & Strategic Advice | Velora Digital',
        description: 'Practical guides and articles on web design, local SEO, mobile speed, and conversion strategies for local businesses.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Journal', link: '/blog' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="max-w-3xl mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Knowledge & Strategy</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Practical Guides for Local Businesses</h1>
            <p class="mt-6 text-lg text-velora-muted leading-relaxed text-pretty">
                Actionable advice on how to improve your website, fix conversion leaks, and get discovered on Google Maps.
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${BLOG.map((b, idx) => `
                <article class="bg-velora-surface shadow-xl rounded-3xl p-8 sm:p-10 flex flex-col justify-between reveal group hover:-translate-y-1 transition-transform duration-300" style="transition-delay: ${idx * 50}ms;">
                    <div>
                        <div class="flex items-center gap-3 text-xs text-velora-muted mb-4">
                            <span class="text-velora-accent font-bold uppercase tracking-wider">${b.category}</span>
                            <span>•</span>
                            <span>${b.readTime}</span>
                        </div>
                        <h2 class="font-display text-2xl font-bold text-velora-text mb-4 leading-tight tracking-tight">
                            <a href="/blog/${b.slug}" class="hover:text-velora-accent transition-colors">${b.title}</a>
                        </h2>
                        <p class="text-sm text-velora-muted leading-relaxed mb-6 text-pretty">${b.summary}</p>
                    </div>

                    <div class="pt-6 border-t border-velora-border flex items-center justify-between text-xs text-velora-muted">
                        <time datetime="${new Date(b.date).toISOString()}">${b.date}</time>
                        <a href="/blog/${b.slug}" class="font-bold uppercase tracking-wider text-velora-text hover:text-velora-accent transition-colors flex items-center gap-1">
                            Read Guide &rarr;
                        </a>
                    </div>
                </article>
            `).join('')}
        </div>
    </section>
    `;

    return { meta, content };
}

function renderBlogDetailPage(article) {
    const meta = {
        title: `${article.title} | Velora Digital`,
        description: article.summary,
        ogType: 'article',
        schema: generateSchema('Article', article),
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Journal', link: '/blog' }, { title: article.title, link: `/blog/${article.slug}` }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-12 pb-8 border-b border-velora-border reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-4">${article.category}</span>
            <h1 class="font-display text-3xl sm:text-5xl font-bold text-velora-text leading-tight tracking-tight">${article.title}</h1>
            <div class="flex flex-wrap items-center gap-4 text-xs text-velora-muted mt-6">
                <span>By <strong class="text-velora-text font-medium">${article.author}</strong></span>
                <span>•</span>
                <time datetime="${new Date(article.date).toISOString()}">${article.date}</time>
                <span>•</span>
                <span>${article.readTime}</span>
            </div>
        </header>

        <div class="prose prose-lg max-w-none text-velora-text reveal">
            ${article.content}
        </div>

        <div class="mt-16 p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-2xl text-center reveal">
            <h3 class="font-display text-2xl font-bold text-velora-text mb-3">Want Us to Implement This for Your Business?</h3>
            <p class="text-sm text-velora-muted max-w-md mx-auto mb-6">We can audit your current digital presence and build a fast, high-converting website.</p>
            <a href="/contact" class="btn-luxury inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
                Get in Touch
            </a>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderContactPage() {
    const meta = {
        title: 'Contact Us & Request a Quote | Velora Digital',
        description: 'Get in touch for an honest project estimate. We reply to all inquiries within 24 business hours.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Contact', link: '/contact' }]
    };

    const content = `
    <section class="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center max-w-2xl mx-auto mb-16 reveal">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-velora-accent block mb-3">Let's Connect</span>
            <h1 class="font-display text-4xl sm:text-6xl font-bold text-velora-text tracking-tight">Request a Project Quote</h1>
            <p class="mt-4 text-base text-velora-muted text-pretty">
                Send us your project details or call us directly. We review every inquiry and aim to reply within 24 hours.
            </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <!-- Direct Info -->
            <div class="lg:col-span-4 space-y-5 reveal lg:sticky lg:top-32 self-start h-max">
                <h2 class="font-display text-lg font-bold text-velora-text border-b border-velora-border pb-3 mb-4">Direct Contact</h2>

                <a href="tel:${CONFIG.phone.replace(/\s/g, '')}" onclick="if(window.veloraTrack) window.veloraTrack('phone_click', { url: this.href })" class="flex items-start gap-4 p-5 rounded-2xl bg-velora-surface border-none hover:border-velora-borderStrong transition-all group">
                    <div class="text-2xl mt-0.5">📞</div>
                    <div>
                        <div class="text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-1">Direct Call</div>
                        <div class="text-sm font-semibold text-velora-text group-hover:text-velora-accent transition-colors">${CONFIG.phone}</div>
                    </div>
                </a>

                <a href="mailto:${CONFIG.email}" onclick="if(window.veloraTrack) window.veloraTrack('email_click', { url: this.href })" class="flex items-start gap-4 p-5 rounded-2xl bg-velora-surface border-none hover:border-velora-borderStrong transition-all group">
                    <div class="text-2xl mt-0.5">✉️</div>
                    <div>
                        <div class="text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-1">Email Inquiries</div>
                        <div class="text-sm font-semibold text-velora-text group-hover:text-velora-accent transition-colors">${CONFIG.email}</div>
                    </div>
                </a>

                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-4 p-5 rounded-2xl bg-velora-surface border border-emerald-500/30 hover:border-emerald-500 transition-all group">
                    <div class="text-2xl mt-0.5">💬</div>
                    <div>
                        <div class="text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-1">WhatsApp Chat</div>
                        <div class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Message on WhatsApp</div>
                    </div>
                </a>

                <div class="p-5 rounded-2xl bg-velora-surface border-none text-xs text-velora-muted space-y-2">
                    <div class="font-bold text-velora-text">Studio Operating Hours</div>
                    <div>Monday – Friday: 9:00 AM – 6:00 PM IST</div>
                    <div>Saturday: 10:00 AM – 2:00 PM IST</div>
                </div>
            </div>

            <!-- Form -->
            <div class="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-velora-surface shadow-2xl shadow-xl relative reveal" style="transition-delay: 100ms;">
                <h2 id="contact-form-heading" class="font-display text-2xl font-bold text-velora-text mb-6">Send Us a Message</h2>

                <form id="contact-form" class="space-y-6">
                    <!-- Honeypot field (hidden from users) -->
                    <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden" aria-hidden="true">
                        <input type="text" name="_gotcha" id="_gotcha" tabindex="-1" autocomplete="off">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Your Name *</label>
                            <input type="text" id="name" name="name" maxlength="100" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury" placeholder="e.g. Rahul Sharma">
                        </div>
                        <div>
                            <label for="business" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Business Name *</label>
                            <input type="text" id="business" name="business" maxlength="100" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury" placeholder="e.g. Apex Dental Studio">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="email" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" maxlength="255" required class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury" placeholder="e.g. rahul@apexdental.com">
                        </div>
                        <div>
                            <label for="phone" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Phone / WhatsApp Number (Optional)</label>
                            <input type="tel" id="phone" name="phone" maxlength="25" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury" placeholder="e.g. +91 98765 43210">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="website" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Current Website URL (Optional)</label>
                            <input type="url" id="website" name="website" maxlength="255" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury" placeholder="e.g. www.yourdomain.com">
                        </div>
                        <div>
                            <label for="location" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Primary Target Location (Optional)</label>
                            <input type="text" id="location" name="location" maxlength="100" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury" placeholder="e.g. Gurugram, Sector 14">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="industry" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Industry Sector</label>
                            <select id="industry" name="industry" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury">
                                <option value="real-estate" class="bg-velora-surface text-velora-text">Real Estate & Property</option>
                                <option value="restaurant" class="bg-velora-surface text-velora-text">Restaurants & Hospitality</option>
                                <option value="clinic" class="bg-velora-surface text-velora-text">Clinics & Dentists</option>
                                <option value="salon" class="bg-velora-surface text-velora-text">Salons & Wellness</option>
                                <option value="other" class="bg-velora-surface text-velora-text" selected>Other Local Service</option>
                            </select>
                        </div>
                        <div>
                            <label for="budget" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Budget Preference</label>
                            <select id="budget" name="budget" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury">
                                <option value="essential" class="bg-velora-surface text-velora-text">₹14,999 – Essential Package</option>
                                <option value="professional" class="bg-velora-surface text-velora-text" selected>₹34,999 – Professional Package</option>
                                <option value="custom" class="bg-velora-surface text-velora-text">₹69,999+ – Custom Scope</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="goal" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Primary Goal</label>
                            <select id="goal" name="goal" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury">
                                <option value="more-enquiries" class="bg-velora-surface text-velora-text">More form enquiries / leads</option>
                                <option value="more-calls" class="bg-velora-surface text-velora-text">More direct phone calls</option>
                                <option value="better-visibility" class="bg-velora-surface text-velora-text">Better Google visibility (Local SEO)</option>
                                <option value="stronger-presence" class="bg-velora-surface text-velora-text">Stronger brand presence</option>
                                <option value="other" class="bg-velora-surface text-velora-text" selected>Other</option>
                            </select>
                        </div>
                        <div>
                            <label for="timeline" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Project Timeline</label>
                            <select id="timeline" name="timeline" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury">
                                <option value="asap" class="bg-velora-surface text-velora-text">As soon as possible</option>
                                <option value="1-2-weeks" class="bg-velora-surface text-velora-text">Within 1-2 weeks</option>
                                <option value="1-month" class="bg-velora-surface text-velora-text">Within 1 month</option>
                                <option value="flexible" class="bg-velora-surface text-velora-text" selected>Flexible</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block text-[10px] font-bold uppercase tracking-widest text-velora-muted mb-2">Additional Project Details (Optional)</label>
                        <textarea id="message" name="message" rows="3" maxlength="2000" class="w-full bg-transparent border-b border-velora-borderStrong px-0 py-2.5 text-base md:text-sm text-velora-text focus:outline-none input-luxury resize-none" placeholder="Tell us about what you need and any specific requirements..."></textarea>
                    </div>

                    <div class="pt-2">
                        <button id="contact-submit-btn" type="submit" class="btn-luxury w-full sm:w-auto px-10 py-4 min-h-[48px] rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-velora-button text-velora-buttonText hover:opacity-90 transition-opacity">
                            Send Quote Request
                        </button>
                    </div>

                    <div id="form-error-alert" class="hidden p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold" role="alert"></div>
                </form>

                <!-- Success Screen Overlay -->
                <div id="form-success-overlay" class="hidden absolute inset-0 bg-velora-surface/98 backdrop-blur-md rounded-3xl flex-col items-center justify-center p-8 text-center z-20">
                    <div class="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 class="font-display text-3xl font-bold text-velora-text mb-3">Enquiry Received</h3>
                    <p class="text-sm text-velora-muted max-w-sm mx-auto mb-8 leading-relaxed">
                        Thank you for contacting Velora Digital. We have received your project details and will review them promptly. You will hear back from us within 24 hours.
                    </p>
                    <button id="send-another-quote-btn" type="button" class="px-6 py-2.5 bg-transparent border-none text-xs font-bold uppercase tracking-widest text-velora-text rounded-full hover:bg-velora-faint transition-colors">
                        Send Another Inquiry
                    </button>
                </div>
            </div>
        </div>
    </section>
    `;

    const script = `
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('contact-submit-btn');
        const errorAlert = document.getElementById('form-error-alert');
        const successOverlay = document.getElementById('form-success-overlay');
        const sendAnotherBtn = document.getElementById('send-another-quote-btn');
        const budgetSelect = document.getElementById('budget');
        const industrySelect = document.getElementById('industry');
        const messageTextarea = document.getElementById('message');

        // Prepopulate from URL params if available
        const urlParams = new URLSearchParams(window.location.search);
        const tierParam = urlParams.get('tier');
        const industryParam = urlParams.get('industry');
        const goalParam = urlParams.get('goal');
        const pagesParam = urlParams.get('pages');
        const estParam = urlParams.get('est');
        const seoParam = urlParams.get('seo');
        const maintParam = urlParams.get('maint');
        const auditParam = urlParams.get('audit');

        if (budgetSelect && tierParam) {
            for (let i = 0; i < budgetSelect.options.length; i++) {
                if (budgetSelect.options[i].value === tierParam) {
                    budgetSelect.selectedIndex = i;
                    break;
                }
            }
        }

        if (industrySelect && industryParam) {
            for (let i = 0; i < industrySelect.options.length; i++) {
                if (industrySelect.options[i].value === industryParam) {
                    industrySelect.selectedIndex = i;
                    break;
                }
            }
        }

        const goalSelect = document.getElementById('goal');
        if (goalSelect && goalParam) {
            for (let i = 0; i < goalSelect.options.length; i++) {
                if (goalSelect.options[i].value === goalParam) {
                    goalSelect.selectedIndex = i;
                    break;
                }
            }
        }

        if (messageTextarea && (pagesParam || estParam)) {
            let msg = 'Estimated via calculator: ' + (pagesParam ? pagesParam + ' pages' : '');
            if (seoParam === 'true') msg += ', SEO included';
            if (maintParam === 'true') msg += ', Maintenance included';
            if (estParam) msg += ', ~₹' + Number(estParam).toLocaleString('en-IN');
            messageTextarea.value = msg;
        } else if (messageTextarea && auditParam) {
            const websiteInput = document.getElementById('website');
            if (websiteInput) websiteInput.value = auditParam;
            messageTextarea.value = "Please run a free technical website audit on my site to check speed, mobile UX, and local SEO.";
            const heading = document.getElementById('contact-form-heading');
            if (heading) heading.innerText = 'Request Your Free Website Audit';
        }

        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', () => {
                form.reset();
                successOverlay.classList.add('hidden');
                successOverlay.classList.remove('flex');
            });
        }

        if (form) {
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending...';
                errorAlert.classList.add('hidden');

                const formData = new FormData(form);
                const payload = Object.fromEntries(formData.entries());

                try {
                    const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    const data = await res.json();

                    if (res.ok && data.success) {
                        if (window.veloraTrack) {
                            window.veloraTrack('contact_form_submit', { business: payload.business, budget: payload.budget });
                        }
                        successOverlay.classList.remove('hidden');
                        successOverlay.classList.add('flex');
                    } else {
                        throw new Error(data.message || 'An error occurred while submitting your enquiry.');
                    }
                } catch (err) {
                    errorAlert.innerText = err.message || 'Unable to submit enquiry. Please call or email us directly.';
                    errorAlert.classList.remove('hidden');
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Request &rarr;';
                }
            });
        }
    `;

    return { meta, content, script };
}

function renderPrivacyPage() {
    const meta = {
        title: 'Privacy Policy | Velora Digital',
        description: 'Our privacy commitments and data handling procedures.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Privacy Policy', link: '/privacy-policy' }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight mb-4">Privacy Policy</h1>
        <p class="text-xs text-velora-muted border-b border-velora-border pb-6 mb-8">Last Updated: August 2026</p>
        <div class="prose prose-lg max-w-none text-velora-muted space-y-6">
            <p>At Velora Digital, we value your privacy and only collect information required to evaluate and execute your website project.</p>
            <h2 class="text-xl font-bold text-velora-text">1. Information Collection</h2>
            <p>When you fill out our quote request form, we collect your name, business name, email address, phone number, and project requirements. We use this strictly to prepare estimates and communicate with you.</p>
            <h2 class="text-xl font-bold text-velora-text">2. Data Security & Third Parties</h2>
            <p>We never sell, rent, or trade your contact information to marketing data brokers or third parties.</p>
            <h2 class="text-xl font-bold text-velora-text">3. Contact Us</h2>
            <p>If you have questions regarding your data, contact us at <a href="mailto:${CONFIG.email}" class="text-velora-accent">${CONFIG.email}</a>.</p>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderTermsPage() {
    const meta = {
        title: 'Terms of Service | Velora Digital',
        description: 'Terms of service and engagement agreements for Velora Digital.',
        breadcrumbs: [{ title: 'Home', link: '/' }, { title: 'Terms of Service', link: '/terms' }]
    };

    const content = `
    <article class="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-velora-text tracking-tight mb-4">Terms of Service</h1>
        <p class="text-xs text-velora-muted border-b border-velora-border pb-6 mb-8">Last Updated: August 2026</p>
        <div class="prose prose-lg max-w-none text-velora-muted space-y-6">
            <p>These terms govern your use of the Velora Digital website and our project engagement agreements.</p>
            <h2 class="text-xl font-bold text-velora-text">1. Project Agreements</h2>
            <p>All design and development engagements are governed by a written proposal detailing the scope, timeline, price, and deliverables.</p>
            <h2 class="text-xl font-bold text-velora-text">2. Asset & Code Ownership</h2>
            <p>Upon receipt of final project payment, the client receives 100% full ownership of custom design layouts, written copy, custom code, and domain records.</p>
        </div>
    </article>
    `;

    return { meta, content };
}

function renderNotFoundPage() {
    const meta = {
        title: '404 - Page Not Found | Velora Digital',
        description: 'The requested page does not exist.'
    };

    const content = `
    <section class="py-32 max-w-3xl mx-auto px-4 text-center">
        <h1 class="font-display text-8xl font-bold text-velora-accent mb-2">404</h1>
        <h2 class="font-display text-3xl font-bold text-velora-text mb-4">Page Not Found</h2>
        <p class="text-base text-velora-muted mb-8">The page you are looking for has moved or does not exist.</p>
        <a href="/" class="btn-luxury inline-flex items-center px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
            Return Home
        </a>
    </section>
    `;

    return { meta, content };
}

function renderServerErrorPage() {
    const meta = {
        title: '500 - Server Error | Velora Digital',
        description: 'An unexpected technical error occurred.'
    };

    const content = `
    <section class="py-32 max-w-3xl mx-auto px-4 text-center">
        <h1 class="font-display text-8xl font-bold text-velora-accent mb-2">500</h1>
        <h2 class="font-display text-3xl font-bold text-velora-text mb-4">Unexpected Error</h2>
        <p class="text-base text-velora-muted mb-8">We are currently resolving a technical issue. Please try again shortly.</p>
        <a href="/" class="btn-luxury inline-flex items-center px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-velora-button text-velora-buttonText">
            Return Home
        </a>
    </section>
    `;

    return { meta, content };
}

module.exports = {
    renderHomePage,
    renderServicesPage,
    renderServiceDetailPage,
    renderIndustriesPage,
    renderIndustryDetailPage,
    renderLocationsPage,
    renderLocationDetailPage,
    renderPortfolioPage,
    renderProcessPage,
    renderPricingPage,
    renderAboutPage,
    renderBlogPage,
    renderBlogDetailPage,
    renderContactPage,
    renderPrivacyPage,
    renderTermsPage,
    renderNotFoundPage,
    renderServerErrorPage
};
