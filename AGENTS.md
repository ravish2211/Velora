# VELORA DIGITAL — AGENT GUIDELINES

## Project Overview & Architecture
Velora Digital is a premium, boutique web design and local SEO studio serving high-trust commercial clients (clinics, real estate advisory firms, culinary brands, and professional services).
- **Stack:** Node.js, Express, SSR HTML templates, Tailwind CSS, Vanilla JavaScript.
- **Dependencies:** Strict ₹0 library/license cost, zero runtime UI frameworks (no React, no Next.js, no Vue, no GSAP, no Lenis).
- **Core Principle:** Transition fidelity, structural elegance, and commercial credibility over flashy, ungrounded animations.

---

## 1. Design Authority Order
Always resolve implementation conflicts using this strict hierarchy:
1. **Existing approved Velora design direction**
2. **Existing frozen design decisions** (Hero, Header, Services, Selected Work, Before/After, Standard, Process, Pricing, Review, FAQ, Final CTA, Footer, Theme System)
3. **Accessibility and functional requirements** (WCAG 2.1 AA, keyboard navigability, touch sizing)
4. **Vercel Web Interface Guidelines** (Quality-control layer for interactions, layout, and motion)
5. **Personal aesthetic preference**

---

## 2. Velora Visual Rules
- **Aesthetic:** Architectural, restrained, editorial, and commercially credible.
- **Prohibited Tropes:**
  - No generic SaaS dashboard cards, pill badges, or floating metric widgets.
  - No Web3/crypto aesthetics, neon glows, particle fields, or matrix/glitch text scrambles.
  - No gaming/Awwwards tropes (custom lagging cursors, magnetic buttons, 3D tilt, or scroll-jacking).
  - No architectural cosplay (fake CAD scanning lasers or faux HUD interfaces).
  - No fake testimonials, fabricated metric counters, or invented client logos.
- **Honesty:** Maintain clear concept disclosures ("Signature Design Concept") for editorial showcase projects.
- **Themes:** Respect the three semantic palettes (Onyx/Champagne, Obsidian/Titanium, Midnight/Cobalt). Never hardcode theme colors in utility classes.

---

## 3. Motion & Interaction Rules
- **CSS First:** Prefer native CSS transitions and keyframes. Use JavaScript (`requestAnimationFrame`) only when stateful numerical interpolation is required.
- **Compositor-Friendly:** Animate exclusively `transform` and `opacity`. Strictly avoid animating `height`, `width`, `margin`, `padding`, `top`, or `left`.
- **Never `transition: all`:** Explicitly declare targeted properties (e.g., `transition: opacity 0.22s, transform 0.22s`).
- **No Unthrottled Scroll Listeners:** Use native `IntersectionObserver` with discrete thresholds. Never bind heavy logic to `window.onscroll`.
- **Interruptibility:** All interactive animations must cancel immediately upon user input (pointer, touch, keyboard). User agency always takes precedence.
- **SVG Transforms:** Apply CSS animations to `<g>` wrappers and set `transform-box: fill-box; transform-origin: center;` to ensure cross-browser consistency (Safari/Chrome).
- **Performance & Memory:** Avoid persistent `will-change` on static elements. Never introduce continuous animation loops.

---

## 4. Accessibility & Quality Rules (Vercel Guidelines)
- **Keyboard Operable:** All interactive flows must be fully keyboard navigable with logical tab ordering and visible focus rings (`:focus-visible`).
- **No Focus Leakage:** Hidden or closed drawers/modals must apply `visibility: hidden`, `pointer-events: none`, or `inert` to prevent offscreen keyboard focus.
- **Focus Management:** Modals and drawers must support `Escape` to close and return focus to the triggering element.
- **Reduced Motion:** Honor `prefers-reduced-motion: reduce`. Collapse animation durations to `0.01ms` and render final states immediately. Animations must never carry essential business information.
- **Touch Ergonomics:** Maintain minimum 44x44px touch targets on mobile controls and apply `touch-action: manipulation` where needed to avoid double-tap delays.
- **Tabular Numerics:** Numerical comparisons and animated figures must use `font-variant-numeric: tabular-nums` to prevent horizontal jitter.
- **Screen Reader Decency:** Never spam `aria-live` regions on intermediate animation frames. Update accessible representations only on final settled values.
