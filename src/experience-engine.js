// ============================================================================ //
// VELORA DIGITAL — EXPERIENCE ENGINE (MULTI-EXPERIENCE ARCHITECTURE SYSTEM)    //
// ============================================================================ //

const { CONFIG, SERVICES, INDUSTRIES, PORTFOLIO, FAQS } = require('./data');
const { renderArchitectExperience } = require('./experiences/01-architect');
const { renderClassicExperience } = require('./experiences/02-classic');
const { renderEditorialExperience } = require('./experiences/03-editorial');
const { renderModernExperience } = require('./experiences/04-modern');
const { renderAtelierExperience } = require('./experiences/05-atelier');
const { renderNoirExperience } = require('./experiences/06-noir');

const escapeHTML = (str) => {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
};

const SUPPORTED_EXPERIENCES = [
    { id: 'architect', num: '01', name: 'ARCHITECT', subtitle: 'Structured · Refined', status: 'active' },
    { id: 'classic', num: '02', name: 'CLASSIC', subtitle: 'Timeless · Trustworthy', status: 'active' },
    { id: 'editorial', num: '03', name: 'EDITORIAL', subtitle: 'Cultural · Sophisticated', status: 'active' },
    { id: 'modern', num: '04', name: 'MODERN', subtitle: 'Clean · Contemporary', status: 'active' },
    { id: 'atelier', num: '05', name: 'ATELIER', subtitle: 'Warm · Boutique', status: 'active' },
    { id: 'noir', num: '06', name: 'NOIR', subtitle: 'Bold · Luxurious', status: 'active' }
];

/**
 * Parses raw cookie string into key-value map.
 * Zero external dependencies.
 */
function parseCookies(req) {
    const list = {};
    const rc = req && req.headers && req.headers.cookie;
    if (rc) {
        rc.split(';').forEach(cookie => {
            const parts = cookie.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const val = parts.slice(1).join('=').trim();
                list[key] = decodeURIComponent(val);
            }
        });
    }
    return list;
}

/**
 * Resolves active experience with strict hierarchy:
 * 1. URL query parameter (?exp=...)
 * 2. Cookie header (velora_exp)
 * 3. Default fallback ('architect')
 * 
 * In Phase 2A spike, valid experiences are 'architect' and 'classic'.
 * Any unhandled or upcoming values safely resolve to 'architect'.
 */
function resolveExperience(req) {
    let candidate = null;

    // 1. Query parameter
    if (req && req.query && req.query.exp) {
        candidate = String(req.query.exp).trim().toLowerCase();
    }

    // 2. Cookie
    if (!candidate && req) {
        const cookies = parseCookies(req);
        if (cookies.velora_exp) {
            candidate = String(cookies.velora_exp).trim().toLowerCase();
        }
    }

    // Validate active experiences
    if (candidate === 'classic') {
        return 'classic';
    }
    if (candidate === 'editorial') {
        return 'editorial';
    }
    if (candidate === 'modern') {
        return 'modern';
    }
    if (candidate === 'atelier') {
        return 'atelier';
    }
    if (candidate === 'noir') {
        return 'noir';
    }

    return 'architect';
}

/**
 * Renders the top Experience Selector rail.
 * Fully keyboard accessible, screen reader friendly, and responsive.
 */
function renderExperienceSelector(currentExp, currentPath = '/') {
    const desktopItems = SUPPORTED_EXPERIENCES.map(exp => {
        const isActive = exp.id === currentExp;
        const isSpikeActive = exp.id === 'architect' || exp.id === 'classic' || exp.id === 'editorial' || exp.id === 'modern' || exp.id === 'atelier' || exp.id === 'noir';

        if (isActive) {
            return `
            <a href="/?exp=${exp.id}" 
               data-exp="${exp.id}" 
               aria-current="page" 
               class="experience-selector-link group relative flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono tracking-wider transition-all duration-200 bg-velora-accent text-[#070708] font-bold shadow-sm min-h-[36px] focus:outline-none focus:ring-2 focus:ring-velora-accent">
                <span class="opacity-60 text-[10px]">${exp.num}</span>
                <span>${exp.name}</span>
                <span class="w-1.5 h-1.5 rounded-full bg-[#070708]"></span>
            </a>`;
        }

        if (isSpikeActive) {
            return `
            <a href="/?exp=${exp.id}" 
               data-exp="${exp.id}" 
               class="experience-selector-link group relative flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono tracking-wider transition-all duration-200 text-velora-muted hover:text-velora-text hover:bg-velora-faint min-h-[36px] focus:outline-none focus:ring-2 focus:ring-velora-accent">
                <span class="text-velora-accent/70 font-medium text-[10px]">${exp.num}</span>
                <span>${exp.name}</span>
            </a>`;
        }

        // Upcoming experiences
        return `
        <button type="button" 
                data-exp="${exp.id}" 
                aria-disabled="true" 
                class="experience-upcoming-btn flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono tracking-wider text-velora-muted/40 hover:text-velora-muted/70 transition-colors cursor-pointer min-h-[36px] focus:outline-none focus:ring-1 focus:ring-velora-border" 
                title="${exp.name} (${exp.subtitle})">
            <span class="opacity-40 text-[10px]">${exp.num}</span>
            <span>${exp.name}</span>
            <span class="text-[8px] uppercase tracking-wider px-1 py-0.2 rounded border border-velora-border/40 text-velora-muted/60 font-sans">Preview</span>
        </button>`;
    }).join('');

    const mobileOptions = SUPPORTED_EXPERIENCES.map(exp => {
        const isActive = exp.id === currentExp;
        const isSpikeActive = exp.id === 'architect' || exp.id === 'classic' || exp.id === 'editorial' || exp.id === 'modern' || exp.id === 'atelier' || exp.id === 'noir';

        if (isActive) {
            return `
            <a href="/?exp=${exp.id}" 
               data-exp="${exp.id}" 
               aria-current="page" 
               class="experience-selector-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono font-bold bg-velora-accent text-[#070708] min-h-[44px]">
                <div class="flex items-center gap-2">
                    <span class="opacity-70">${exp.num}</span>
                    <span>${exp.name}</span>
                </div>
                <span class="text-[10px] uppercase font-sans tracking-wider">Active</span>
            </a>`;
        }

        if (isSpikeActive) {
            return `
            <a href="/?exp=${exp.id}" 
               data-exp="${exp.id}" 
               class="experience-selector-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono text-velora-muted hover:text-velora-text hover:bg-velora-faint min-h-[44px]">
                <div class="flex items-center gap-2">
                    <span class="text-velora-accent/80">${exp.num}</span>
                    <span>${exp.name}</span>
                </div>
            </a>`;
        }

        return `
        <button type="button" 
                data-exp="${exp.id}" 
                aria-disabled="true" 
                class="experience-upcoming-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono text-velora-muted/40 hover:text-velora-muted/70 hover:bg-velora-faint/50 min-h-[44px] text-left">
            <div class="flex items-center gap-2">
                <span class="opacity-40">${exp.num}</span>
                <span>${exp.name}</span>
            </div>
            <span class="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-velora-border/40 text-velora-muted/60 font-sans">Upcoming</span>
        </button>`;
    }).join('');

    const activeExpObj = SUPPORTED_EXPERIENCES.find(e => e.id === currentExp) || SUPPORTED_EXPERIENCES[0];

    return `
    <!-- Multi-Experience Selector Bar -->
    <div id="velora-experience-bar" class="w-full bg-[#050507] border-b border-velora-border/70 text-xs py-1.5 px-4 sm:px-6 relative z-[51] transition-colors duration-300">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Desktop Architectural Rail -->
            <div class="hidden md:flex items-center gap-3 w-full justify-between">
                <div class="flex items-center gap-2.5 shrink-0">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent animate-pulse" aria-hidden="true"></span>
                    <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-velora-muted">Art Directions</span>
                </div>
                <nav aria-label="Website Art Directions" class="flex items-center gap-1.5 flex-wrap">
                    ${desktopItems}
                </nav>
                <div class="text-[10px] font-mono text-velora-muted/60 hidden lg:block">
                    Multi-Experience Studio System
                </div>
            </div>

            <!-- Mobile Compact Control -->
            <div class="flex md:hidden items-center justify-between w-full">
                <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-velora-accent animate-pulse" aria-hidden="true"></span>
                    <span class="text-[10px] font-mono uppercase tracking-widest text-velora-muted">Art Direction:</span>
                    <span id="mobile-active-exp-label" class="text-xs font-mono font-bold text-velora-accent uppercase">${activeExpObj.num} ${activeExpObj.name}</span>
                </div>
                <button id="mobile-experience-toggle" 
                        type="button" 
                        aria-expanded="false" 
                        aria-controls="mobile-experience-menu" 
                        aria-label="Change Website Art Direction" 
                        class="px-2.5 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center gap-1 text-[11px] font-mono uppercase tracking-wider text-velora-muted hover:text-velora-text focus:outline-none focus:ring-1 focus:ring-velora-accent rounded">
                    <span>Switch</span>
                    <svg class="w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Dropdown Drawer -->
        <div id="mobile-experience-menu" class="hidden md:hidden pt-3 pb-2 border-t border-velora-border/60 mt-2 space-y-1" aria-label="Mobile Art Directions">
            ${mobileOptions}
        </div>
    </div>`;
}



/**
 * Resolves and renders the requested experience presentation.
 * Authoritative presentation registry for Velora Digital.
 */
function renderExperience(expId) {
    if (expId === 'classic') {
        return renderClassicExperience();
    }
    if (expId === 'editorial') {
        return renderEditorialExperience();
    }
    if (expId === 'modern') {
        return renderModernExperience();
    }
    if (expId === 'atelier') {
        return renderAtelierExperience();
    }
    if (expId === 'noir') {
        return renderNoirExperience();
    }
    return renderArchitectExperience();
}

module.exports = {
    SUPPORTED_EXPERIENCES,
    parseCookies,
    resolveExperience,
    renderExperienceSelector,
    renderClassicExperience,
    renderArchitectExperience,
    renderEditorialExperience,
    renderModernExperience,
    renderAtelierExperience,
    renderNoirExperience,
    renderExperience
};
