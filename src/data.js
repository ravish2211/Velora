// ============================================================================ //
// VELORA DIGITAL - SITE CONFIGURATION & DATA SOURCE                            //
// ============================================================================ //

const CONFIG = {
    baseUrl: process.env.BASE_URL || 'https://velora-ds6e.onrender.com',
    phone: process.env.CONTACT_PHONE || '+91 73037 33735',
    whatsapp: process.env.CONTACT_WHATSAPP || '917303733735',
    email: process.env.CONTACT_EMAIL || 'ravishnoob123@gmail.com',
    systemEmail: process.env.SYSTEM_EMAIL || 'jyotimalhotraf9@gmail.com',
    emailFrom: process.env.EMAIL_FROM || 'Velora Digital <onboarding@resend.dev>',
    currencySymbol: '₹',
    pricing: {
        essential: 14999,
        professional: 34999,
        customBase: 69999,
        seoAddon: 7500,
        maintenanceAddon: 5000,
        perPage: 1500,
        baseCalculator: 10000
    }
};

const SERVICES = [
    {
        slug: 'website-design',
        title: 'Website Design & Development',
        short: 'Fast, mobile-first websites engineered to build trust and make contacting your business effortless.',
        icon: '💻',
        heroTag: 'Core Studio Service',
        benefits: [
            'Mobile-first responsive architecture',
            'Direct Click-to-Call & WhatsApp conversion triggers',
            'Sub-second page load times on mobile 4G/5G',
            'Clean semantic markup without heavy page-builder bloat',
            'Clear service menus, price presentations & portfolios',
            'Secure contact forms with instant email notifications'
        ],
        notIncluded: [
            'Paid advertising or ad spend management',
            'Complex native iOS/Android app store packages',
            'Pirated or unsupported third-party themes'
        ],
        timeline: '2 to 4 weeks depending on scope',
        longDesc: 'Your website is usually the first touchpoint a potential client evaluates. If it loads slowly, displays poorly on mobile, or hides your phone number, they immediately leave for a competitor. We build clean, lightweight websites designed to establish credibility instantly and turn visitors into actual calls, bookings, and quote requests.',
        whoNeedsIt: 'Local businesses (clinics, restaurants, real estate firms, salons, professional consultancies) that want a modern, trustworthy digital presence that turns local searches into enquiries.',
        process: [
            { step: '01', title: 'Discovery & Structure Map', desc: 'We identify what your local customers actually search for and map out the pages and call-to-actions needed to win their trust.' },
            { step: '02', title: 'Content & Visual Design', desc: 'We design a clean, responsive layout focusing on readable typography, clear service lists, and prominent contact methods.' },
            { step: '03', title: 'Lightweight Code Development', desc: 'We build the site with lean, production-grade code—no bloated plugins or heavy visual builders slowing down your pages.' },
            { step: '04', title: 'Mobile & Form Testing', desc: 'We test across real mobile screen sizes, verify form delivery, test click-to-call buttons, and validate SSL certificates.' },
            { step: '05', title: 'Launch & Handoff', desc: 'We deploy the site to fast cloud hosting, configure your custom domain, and ensure you have full ownership of your assets.' }
        ],
        faqs: [
            { q: 'How long does a website project take?', a: 'Most Essential and Professional websites take between 2 to 4 weeks from content gathering to launch. Custom projects with deeper integrations take 4 to 6 weeks.' },
            { q: 'Will my website work properly on mobile phones?', a: 'Yes. Over 70% of local searches happen on smartphones. Every layout we build is designed mobile-first and tested rigorously on iOS and Android viewports.' },
            { q: 'Do I own my website and domain when finished?', a: 'Yes, 100%. Once final payment is made, you own all design files, custom code, and domain records. We never hold your assets hostage.' },
            { q: 'Can you update my site after it launches?', a: 'Yes. We offer ongoing maintenance care packages covering hosting, security updates, and monthly content changes, or you can request updates as needed.' }
        ]
    },
    {
        slug: 'local-seo',
        title: 'Local SEO Foundations',
        short: 'Technical search optimization to help your business get discovered on Google Maps and local search.',
        icon: '📍',
        heroTag: 'Search Visibility',
        benefits: [
            'Google Business Profile alignment guidelines',
            'Local Business Schema.org structured data markup',
            'Name, Address & Phone (NAP) consistency audits',
            'Locality & service intent keyword structure',
            'XML sitemap generation & Google Search Console indexing',
            'Core Web Vitals mobile speed compliance'
        ],
        notIncluded: [
            'Guaranteed #1 Google rankings (no honest agency can guarantee this)',
            'Black-hat spam link building or fake review schemes',
            'Mass-generated doorway pages'
        ],
        timeline: '1 to 2 weeks (integrated directly into the site build)',
        longDesc: 'Having a beautiful website is ineffective if nearby customers cannot discover it when searching "dentist near me", "best cafe in Gurugram", or "commercial broker Delhi". We implement rigorous technical local SEO so search engines understand exactly what services you offer, where you operate, and why you are legitimate.',
        whoNeedsIt: 'Brick-and-mortar businesses, service professionals, and local agencies who rely on footfall, local phone calls, and localized search discovery.',
        process: [
            { step: '01', title: 'Local Search Audit', desc: 'We analyze your target localities, competitor search presence, and current business listings.' },
            { step: '02', title: 'Locality & Intent Mapping', desc: 'We organize your website pages around the exact terms and neighborhoods your customers search for.' },
            { step: '03', title: 'Schema & Structured Data', desc: 'We embed Schema.org code that feeds Google structured opening hours, location coordinates, and service categories.' },
            { step: '04', title: 'Google Profile Alignment', desc: 'We ensure your website information matches your Google Maps profile with exact consistency.' },
            { step: '05', title: 'Verification & Monitoring', desc: 'We submit clean XML sitemaps to Google Search Console and confirm proper mobile indexing.' }
        ],
        faqs: [
            { q: 'Can you guarantee that my business will rank #1 on Google?', a: 'No, and you should avoid any agency that makes this claim. Google’s algorithms change constantly and factor in distance and reviews. What we guarantee is a flawless technical foundation that gives your business the strongest possible chance to rank.' },
            { q: 'What is Schema markup and why does it matter?', a: 'Schema is structured code embedded in your website that explicitly tells search engines your business type, address, operating hours, and services, eliminating guesswork.' },
            { q: 'How long before I see local search improvements?', a: 'Google typically re-crawls and indexes properly structured local sites within 2 to 6 weeks. Real ranking growth builds steadily over months as you collect genuine customer reviews.' },
            { q: 'Does website speed affect my Google ranking?', a: 'Yes. Google uses Core Web Vitals as an official ranking factor. Fast-loading mobile sites are prioritized over slow, bloated competitors.' }
        ]
    },
    {
        slug: 'website-maintenance',
        title: 'Website Maintenance & Care',
        short: 'Reliable cloud hosting, security monitoring, and regular updates so your website stays fast and trouble-free.',
        icon: '🛡️',
        heroTag: 'Technical Support',
        benefits: [
            'High-availability cloud hosting management',
            'SSL certificate renewal & security monitoring',
            'Monthly content updates (prices, menus, team, services)',
            'Regular contact form & lead delivery verification',
            'Performance & uptime monitoring',
            'Direct support via WhatsApp and email'
        ],
        notIncluded: [
            'Complete website redesigns within standard maintenance',
            'Third-party paid API subscription costs'
        ],
        timeline: 'Monthly or annual ongoing retainer',
        longDesc: 'A website is a critical business asset. When forms stop sending emails, links break, or prices become outdated, you quietly lose paying customers. Our maintenance service manages the server infrastructure, monitors uptime, and handles your regular content edits so you can focus entirely on running your business.',
        whoNeedsIt: 'Business owners who want the peace of mind that their digital storefront is always fast, secure, and accurate without hiring internal technical staff.',
        process: [
            { step: '01', title: 'Server & Security Setup', desc: 'We migrate or host your site on fast cloud infrastructure with automated SSL and security headers.' },
            { step: '02', title: 'Uptime & Lead Monitoring', desc: 'We run continuous checks to ensure your website and contact pathways are always operating.' },
            { step: '03', title: 'Routine Content Edits', desc: 'Whenever you need to update prices, menus, photos, or staff bios, just message us.' },
            { step: '04', title: 'Performance Checks', desc: 'We ensure image compression and caching stay tuned so your site never slows down over time.' }
        ],
        faqs: [
            { q: 'What kind of content updates are included?', a: 'Text updates, price changes, adding new team members, updating opening hours, uploading new portfolio photos, and adding fresh blog posts.' },
            { q: 'What happens if my site goes down?', a: 'Our uptime monitoring alerts us immediately, and we diagnose and restore service promptly.' },
            { q: 'Am I locked into a long-term contract?', a: 'No. Our maintenance plans operate on straightforward month-to-month or annual terms with no cancellation penalties.' },
            { q: 'Can you maintain a website that someone else built?', a: 'We evaluate existing sites on a case-by-case basis. If the code is clean, we can maintain it; if it is built on a broken, bloated system, we may recommend a clean rebuild.' }
        ]
    }
];

const INDUSTRIES = [
    {
        slug: 'real-estate',
        name: 'Real Estate & Property Agencies',
        shortName: 'Real Estate',
        icon: '🏢',
        desc: 'Clean property showcases, locality guides, and reliable lead capture forms that connect brokers directly with serious buyers.',
        challenges: 'Real estate clients on mobile want instant clarity on unit configurations, pricing, and possession dates. Slow image carousels, intrusive popups, and broken inquiry forms cause high-intent property seekers to leave.',
        expectations: 'Buyers and tenants expect clean photo galleries, clear floor plan specifications, exact neighborhood details, and a one-tap WhatsApp or phone button to reach the broker immediately.',
        solutions: 'We build high-speed property listing pages with clear specs, downloadable brochures, neighborhood context, and direct lead routing to your sales team.',
        conversionElements: [
            'Direct WhatsApp "Inquire on This Unit" button',
            'Downloadable floor plan & brochure triggers',
            'Location highlights & connectivity breakdown',
            'Broker credential & RERA registration badges'
        ],
        mobileConsiderations: 'Fast responsive image galleries that don\'t drain mobile data, sticky bottom call/WhatsApp bar for one-thumb inquiries on 4G networks.',
        seoConsiderations: 'Locality-specific keyword structure (e.g., "3 BHK luxury apartments Golf Course Extension Gurugram", "commercial office space Noida Sector 62").',
        keyFeatures: [
            'Advanced Property Filter System',
            'Interactive Neighborhood Maps',
            'Lead-Capture Floor Plan Downloads'
        ],
        whatWeRecommend: 'We recommend a custom portfolio layout showcasing your best properties, paired with aggressive lead capture forms on every listing. A clean, sub-second mobile experience will out-convert generic broker sites.'
    },
    {
        slug: 'restaurants',
        name: 'Restaurants, Cafes & Hospitality',
        shortName: 'Restaurants',
        icon: '🍽️',
        desc: 'Instant mobile menus, direct table reservations, and clear location directions for dining establishments.',
        challenges: 'Hungry customers searching on mobile will instantly abandon a restaurant website if forced to download a 15MB PDF menu. Outdated opening hours and missing parking details also cost direct walk-ins.',
        expectations: 'Diners want an instant, categorized food menu with clear vegetarian/non-vegetarian indicators, direct table booking or call links, operating hours, and a 1-tap Google Maps directions link.',
        solutions: 'We create native HTML menus that load in under 500ms, integrate direct table booking links, and prominently display location, parking, and timing details on mobile.',
        conversionElements: [
            'Instant mobile-readable menu with dietary filters',
            'Prominent "Reserve a Table" or "Order Online" buttons',
            'Direct Google Maps integration for one-tap navigation',
            'Clear operating hours and private dining inquiry forms'
        ],
        mobileConsiderations: 'Zero-PDF menu architecture; clean, scannable food items with high legibility even in low-light environments.',
        seoConsiderations: 'Restaurant Schema.org markup with menu URLs, opening hours specification, and neighborhood cuisine alignment.',
        keyFeatures: [
            'HTML/CSS Text-Based Menus (No PDFs)',
            'Direct Table Reservation Integration',
            'Sticky Mobile "Call to Book" Bar'
        ],
        whatWeRecommend: 'We recommend a streamlined mobile interface with a sticky "Call to Book" or "WhatsApp Booking" bar, combined with a fast-loading text-based menu to maximize immediate covers.'
    },
    {
        slug: 'clinics',
        name: 'Clinics, Dentists & Aesthetic Practices',
        shortName: 'Clinics & Dentists',
        icon: '🩺',
        desc: 'Professional practitioner profiles, treatment overviews, and simple consultation booking pathways.',
        challenges: 'Patients looking for dental or medical care require genuine trust before booking. Generic templates with stock photos and hidden consultation fees create skepticism.',
        expectations: 'Patients expect verified doctor credentials, clear explanations of treatments, transparent pricing indicators, clinic cleanliness photos, and an easy consultation request flow.',
        solutions: 'We design reassuring practitioner profile pages, step-by-step treatment guides, transparent consultation FAQs, and friction-free appointment request forms.',
        conversionElements: [
            'Practitioner qualification and experience highlights',
            'Clear treatment guides with expected duration and recovery',
            'Frictionless consultation booking form (no complex account creation)',
            'Direct emergency call and clinic location details'
        ],
        mobileConsiderations: 'Fast one-tap appointment request form with date/time preference, direct clinic navigation link, and tap-to-call.',
        seoConsiderations: 'Physician / MedicalBusiness / Dentist Schema.org markup, localized medical service queries (e.g. "root canal specialist Chandigarh Sector 35").',
        keyFeatures: [
            'Verified Practitioner Profiles',
            'HIPAA/Data Compliant Consultation Forms',
            'Before & After Clinical Galleries'
        ],
        whatWeRecommend: 'We recommend featuring doctor credentials, real patient outcomes, and transparent procedures, paired with sticky mobile booking buttons so anxious patients can book consultations instantly.'
    },
    {
        slug: 'salons',
        name: 'Salons, Spas & Wellness Studios',
        shortName: 'Salons & Studios',
        icon: '💇‍♀️',
        desc: 'Visual work portfolios, transparent service menus, and effortless appointment pathways for beauty and wellness studios.',
        challenges: 'Clients struggle to find accurate service pricing, view real styling work, or book without playing phone tag with front desk staff.',
        expectations: 'Clients look for recent work examples, a transparent price breakdown for services (hair, skincare, bridal), stylist bios, and quick booking through WhatsApp.',
        solutions: 'We build organized, aesthetic service cards with price ranges, photo galleries of real client transformations, and quick WhatsApp booking buttons.',
        conversionElements: [
            'Transparent service rate cards with duration estimates',
            'Real styling & bridal work visual galleries',
            'WhatsApp "Book Slot" links pre-filled with the selected service',
            'Client preparation guidelines and studio amenities'
        ],
        mobileConsiderations: 'Lightweight image grids optimized for fast scrolling on mobile phones without layout shifts.',
        seoConsiderations: 'BeautySalon / HealthAndBeautyBusiness Schema markup with localized beauty terms.',
        keyFeatures: [
            'Aesthetic Transformation Galleries',
            'Transparent Service Pricing Menus',
            'Direct WhatsApp Booking Links'
        ],
        whatWeRecommend: 'We recommend an aesthetic, fast-loading gallery of your work paired with a clear, transparent service menu and direct WhatsApp booking links to eliminate pricing confusion.'
    }
];

const RECOMMENDATIONS = {
    'real-estate': {
        'more-enquiries': {
            title: 'Property Showcase + Lead Capture',
            description: 'We recommend a custom portfolio layout showcasing your best properties, paired with aggressive lead capture forms on every listing. A clean, sub-second mobile experience will out-convert generic broker sites.',
            tier: 'professional'
        },
        'better-visibility': {
            title: 'Local SEO Real Estate Authority',
            description: 'We recommend building deep neighborhood-specific landing pages and integrating RealEstateAgent Schema.org markup so you dominate "property dealer near me" searches in your territory.',
            tier: 'professional'
        },
        'default': {
            title: 'Digital Property Authority',
            description: 'We recommend a strong, mobile-first presence featuring your key listings, neighborhood expertise, and direct WhatsApp contact channels to establish immediate trust with buyers and sellers.',
            tier: 'professional'
        }
    },
    'restaurant': {
        'more-calls': {
            title: 'Mobile-First Direct Booking',
            description: 'We recommend a streamlined mobile interface with a sticky "Call to Book" or "WhatsApp Booking" bar, combined with a fast-loading text-based menu (no slow PDF downloads) to maximize immediate covers.',
            tier: 'essential'
        },
        'better-visibility': {
            title: 'Google Business Alignment',
            description: 'We recommend a site heavily optimized with Restaurant and Menu Schema.org JSON-LD, linking perfectly with your Google Maps profile to dominate local dining discovery.',
            tier: 'professional'
        },
        'default': {
            title: 'Modern Dining Experience',
            description: 'We recommend an aesthetic, fast-loading showcase of your ambiance and menu, paired with friction-free reservation or ordering pathways for hungry local searchers.',
            tier: 'essential'
        }
    },
    'clinic': {
        'more-enquiries': {
            title: 'Trust & Direct Booking Engine',
            description: 'We recommend featuring doctor credentials, real patient outcomes, and transparent procedures, paired with sticky mobile booking buttons so anxious patients can book consultations instantly.',
            tier: 'professional'
        },
        'stronger-presence': {
            title: 'Clinical Authority Platform',
            description: 'We recommend a robust, multi-page MedicalClinic structure featuring detailed treatment pages, physician bios, and deep local SEO architecture to establish definitive regional trust.',
            tier: 'custom'
        },
        'default': {
            title: 'Professional Medical Presence',
            description: 'We recommend a clean, accessible layout highlighting your specializations, facility hygiene, and practitioner credentials to reassure patients before they call.',
            tier: 'professional'
        }
    },
    'salon': {
        'more-enquiries': {
            title: 'Visual Portfolio + Pricing',
            description: 'We recommend an aesthetic, fast-loading gallery of your work paired with a clear, transparent service menu and direct WhatsApp booking links to eliminate pricing confusion.',
            tier: 'essential'
        },
        'better-visibility': {
            title: 'Local Beauty Authority',
            description: 'We recommend deep optimization using HealthAndBeautyBusiness Schema, pushing local keywords for your specific treatments (bridal makeup, keratin, etc.) to capture high-intent local searches.',
            tier: 'professional'
        },
        'default': {
            title: 'Premium Wellness Showcase',
            description: 'We recommend a visually striking site that highlights your studio atmosphere, stylist expertise, and clear service pricing to attract high-value clientele.',
            tier: 'essential'
        }
    },
    'other': {
        'more-enquiries': {
            title: 'High-Conversion Local Setup',
            description: 'We recommend our proven local business architecture: a fast-loading, mobile-perfect site with clear service breakdowns, trust signals, and direct call-to-actions to turn visitors into leads.',
            tier: 'essential'
        },
        'stronger-presence': {
            title: 'Brand Authority Build',
            description: 'We recommend a multi-page setup that thoroughly explains your unique value, showcases case studies/testimonials, and utilizes professional layout design to elevate you above local competitors.',
            tier: 'professional'
        },
        'default': {
            title: 'Solid Digital Foundation',
            description: 'We recommend a tailored, high-performance website that clearly communicates what you do, who you serve, and makes it incredibly easy for local customers to contact you.',
            tier: 'essential'
        }
    }
};

const LOCATIONS = [
    {
        slug: 'gurugram',
        name: 'Gurugram',
        region: 'Haryana / Delhi NCR',
        hubContext: 'From Cyber City corporate agencies to Golf Course Road clinics and Sohna Road real estate brokers, Gurugram is one of India\'s most competitive business corridors.',
        desc: 'Professional web design and local SEO for businesses in Gurugram. Stand out in Cyber City, Golf Course Road, Sohna Road, and DLF Phases.',
        localStrategy: 'Consumers and corporate clients in Gurugram expect immediate mobile responsiveness, clean design aesthetics, and direct WhatsApp / phone contact. A slow or broken website instantly loses deals to competitors across the Millennium City.',
        neighborhoods: ['DLF Phase 1-5', 'Golf Course Road & Extension', 'Cyber City / Udyog Vihar', 'Sohna Road', 'Sector 29 & 44', 'MG Road Commercial Hub']
    },
    {
        slug: 'delhi-ncr',
        name: 'Delhi NCR',
        region: 'National Capital Region',
        hubContext: 'Encompassing South Delhi medical practices, Central Delhi dining establishments, and Noida commercial enterprises.',
        desc: 'Fast, high-trust websites built for local discovery across South Delhi, Central Delhi, Noida, and the National Capital Region.',
        localStrategy: 'In Delhi NCR, searchers filter heavily by locality and neighborhood proximity. We structure your website with precise Schema markup and localized service sections so Google clearly associates your business with your specific target areas.',
        neighborhoods: ['South Delhi (GK, South Ex, Saket)', 'Central Delhi (CP, Khan Market)', 'Noida (Sector 18, 62, 137)', 'East Delhi & Mayur Vihar', 'West Delhi (Rajouri Garden, Punjabi Bagh)']
    },
    {
        slug: 'chandigarh',
        name: 'Chandigarh',
        region: 'Punjab & Haryana (Tricity)',
        hubContext: 'Serving established clinics, boutique hospitality, retail, and real estate agencies across Chandigarh, Mohali, and Panchkula.',
        desc: 'Elevating the digital standard for serious businesses across the Chandigarh Tricity with clean custom design and local SEO.',
        localStrategy: 'Tricity customers value reputation, cleanliness, and straightforward pricing. We build websites that showcase authentic credentials, clear rate cards, and seamless appointment booking.',
        neighborhoods: ['Sector 17 & Sector 22 Retail', 'Sector 26 & Sector 35 Dining Corridor', 'Sector 8 & 9 Boutiques', 'Mohali IT & Commercial Hubs', 'Panchkula Commercial Sectors']
    },
    {
        slug: 'bengaluru',
        name: 'Bengaluru',
        region: 'Karnataka',
        hubContext: 'Serving clinics, cafes, boutique agencies, and local services in Koramangala, Indiranagar, Whitefield, and HSR Layout.',
        desc: 'High-speed, mobile-optimized web design for modern businesses in Bengaluru, India\'s technology capital.',
        localStrategy: 'In Bengaluru, customers are exceptionally tech-literate and will immediately dismiss a business with a clunky, slow, or outdated website. We build sub-second loading websites that reflect modern technical standards.',
        neighborhoods: ['Indiranagar & 100ft Road', 'Koramangala 4th-7th Blocks', 'HSR Layout & BTM', 'Whitefield & ITPL Corridor', 'Jayanagar & JP Nagar', 'Lavelle Road & CBD']
    }
];

const PORTFOLIO = [
    {
        id: 'aurora-aesthetics',
        title: 'AURORA CLINIC',
        industry: 'Healthcare & Aesthetics',
        type: 'Concept Project',
        summary: 'A clean, trust-focused clinic website architecture demonstrating transparent treatment menus, practitioner credentials, and one-tap consultation booking.',
        challenge: 'Medical and dental websites frequently suffer from visual clutter, outdated stock photography, and awkward appointment booking forms that discourage hesitant patients.',
        strategy: 'Design a calming visual system with prominent doctor qualifications, treatment timelines, transparent consultation pricing, and direct WhatsApp / form booking.',
        solution: 'Built a lightweight medical clinic template featuring clear treatment overviews, doctor profile cards, and an accessible booking flow that loads in under 400ms.',
        deliverables: [
            'Trust-focused clinical layout',
            'Doctor credential highlight cards',
            'Transparent treatment rate breakdown',
            'Frictionless consultation booking form',
            'MedicalBusiness Schema markup'
        ],
        demonstrates: 'How aesthetic clinics and dental practices can build patient confidence and drive consultation bookings before the first phone call.',
        ui: { hero: 'bg-stone-800', accent: 'bg-emerald-600', layout: 'grid-cols-2' },
        badgeColor: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
    },
    {
        id: 'aarav-estates',
        title: 'AARAV PROPERTIES',
        industry: 'Real Estate & Property',
        type: 'Concept Project',
        summary: 'A structured property showcase built to highlight residential developments, floor plans, and direct broker lead routing without portal bloat.',
        challenge: 'Real estate websites often overwhelm users with bloated search filters and pop-ups that push buyers away on smartphones.',
        strategy: 'Create lightweight property showcase cards with clear specifications (carpet area, possession date, locality) and immediate lead capture.',
        solution: 'Engineered a clean property catalog layout with immediate unit availability data, high-speed image rendering, and direct broker routing.',
        deliverables: [
            'Property catalog & floor plan viewer',
            'Direct broker WhatsApp routing',
            'RERA compliance display structure',
            'Localized neighborhood connectivity map',
            'RealEstateAgent Schema integration'
        ],
        demonstrates: 'How real estate brokers and developers can capture high-intent inquiries without bloated third-party portal dependencies.',
        ui: { hero: 'bg-neutral-800', accent: 'bg-amber-600', layout: 'grid-cols-3' },
        badgeColor: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10'
    },
    {
        id: 'the-spice-room',
        title: 'THE SPICE ROOM',
        industry: 'Restaurants & Hospitality',
        type: 'Demo Project',
        summary: 'A mobile-first culinary website featuring a fast HTML menu, tap-to-reserve functionality, and direct Google Maps directions.',
        challenge: 'Diners on mobile 4G/5G connections frequently abandon restaurants that require downloading 15MB PDF menus just to see food prices.',
        strategy: 'Replace slow PDFs with a structured, categorized HTML menu that loads in 350ms, paired with clear table reservation and navigation buttons.',
        solution: 'Built a lightweight text-based menu with dietary tags, direct table booking integration, and 1-tap Google Maps directions.',
        deliverables: [
            'Sub-second mobile HTML menu',
            'Direct table reservation link',
            'One-tap Google Maps route trigger',
            'Operating hours & parking information',
            'Restaurant Schema.org structured data'
        ],
        demonstrates: 'How restaurants can eliminate friction for hungry local diners searching on mobile phones.',
        ui: { hero: 'bg-orange-950/60', accent: 'bg-orange-600', layout: 'grid-cols-2' },
        badgeColor: 'border-orange-500/30 text-orange-600 dark:text-orange-400 bg-orange-500/10'
    }
];

const BLOG = [
    {
        slug: 'why-local-websites-fail',
        title: 'Why Local Business Websites Lose Enquiries (And How to Fix It)',
        category: 'Conversion Strategy',
        date: 'August 4, 2026',
        readTime: '4 min read',
        author: 'Velora Studio',
        summary: 'Learn why slow loading speeds, hidden phone numbers, and cluttered layouts quietly turn paying customers away to your competitors.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">When a potential customer searches for a local service on their phone, they are usually in a high-intent state. They need a dentist for a toothache, a table for dinner tonight, or a broker for an apartment viewing. If your website makes them wait 6 seconds or hunt through three menus to find your phone number, they simply tap the back button and call your competitor.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">1. The Invisible Friction: Buried Contact Pathways</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">The most common mistake on local business websites is treating the contact information like an afterthought. Your phone number, WhatsApp link, address, and primary call-to-action should be visible within the first two seconds on both mobile and desktop screens. On mobile, a persistent bottom bar with "Call" and "WhatsApp" buttons frequently increases direct inquiries by 25% or more.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">2. The 15MB PDF Menu Disaster</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">If you run a restaurant, salon, or clinic, never force visitors to download a PDF file to view your services or prices. On a smartphone with an average mobile data connection, opening a heavy PDF consumes data, takes multiple taps, and often opens in an external viewer where the text is too small to read. Building your menu in clean, native HTML makes it instant to read and searchable by Google.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">3. Heavy Website Builders That Destroy Mobile Speed</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Many freelance websites are built by slapping dozens of plugins onto heavy theme builders. This loads megabytes of unnecessary JavaScript before the visitor can even see your headline. Clean, hand-crafted semantic code delivers your content in under a second, improving both user conversion and Google search rankings.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">4. Practical Steps to Audit Your Site Today</h2>
            <ul class="list-disc pl-6 space-y-3 text-base text-velora-muted mb-6">
                <li>Open your website on your phone using mobile data (not office Wi-Fi). Count how many seconds pass before you can tap to call.</li>
                <li>Verify that your operating hours and exact address match your Google Business Profile word-for-word.</li>
                <li>Test submitting your contact form. If you don't receive an instant confirmation email, your leads are being lost.</li>
            </ul>
        `
    },
    {
        slug: 'website-cost-indian-businesses',
        title: 'How Much Should a Website Cost for an Indian Local Business in 2026?',
        category: 'Pricing & Value',
        date: 'August 10, 2026',
        readTime: '5 min read',
        author: 'Velora Studio',
        summary: 'A transparent breakdown of website pricing in India, what you actually pay for, and how to avoid being scammed by cheap templates or overpriced agency retainers.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">If you request quotes from ten different web designers in India, you will likely receive numbers ranging from ₹3,000 to ₹3,00,000. This massive spread causes understandable confusion for business owners. Here is an honest breakdown of what these price tiers actually represent.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">The ₹3,000 to ₹8,000 "Template Trap"</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">At this price point, you are paying for an unoptimized, pirated WordPress template that has been installed hundreds of times. These sites are rarely tested on multiple mobile devices, feature broken contact forms, load bloated script libraries, and offer zero SEO foundation. When the site breaks after a month, the freelancer is usually unreachable.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">The ₹15,000 to ₹40,000 "Sweet Spot"</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">For most local businesses—such as clinics, independent real estate firms, restaurants, and salons—this is the realistic, sensible investment level. It gives a competent digital studio the budget to properly plan the layout, write custom lightweight code, optimize Core Web Vitals, integrate Schema.org markup, and thoroughly test contact forms.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">When Does a ₹70,000+ Custom Budget Make Sense?</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Higher budgets are only necessary when you require custom web applications, complex multi-branch booking systems, direct ERP/CRM integrations, or large localized content directories with dozens of bespoke pages.</p>
            
            <div class="p-6 bg-velora-surface border border-velora-borderStrong rounded-2xl my-8">
                <h3 class="font-display font-bold text-lg text-velora-text mb-2">The Velora Standard</h3>
                <p class="text-sm text-velora-muted leading-relaxed">We price our Essential package at ₹14,999 and Professional at ₹34,999 because it gives us the resources to deliver production-grade, fast code without charging inflated agency overhead.</p>
            </div>
        `
    },
    {
        slug: 'local-seo-fundamentals',
        title: 'Local SEO Fundamentals: How to Get Found on Google Maps',
        category: 'SEO & Search',
        date: 'August 12, 2026',
        readTime: '6 min read',
        author: 'Velora Studio',
        summary: 'Getting discovered on Google Maps isn\'t magic or trickery. It requires consistent business data, fast mobile code, and structured local Schema.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">When a nearby user searches for a local service, Google calculates ranking using three primary factors: Relevance, Distance, and Prominence. While you cannot change your physical distance from the searcher, you have direct control over relevance and prominence.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">1. Strict NAP Consistency (Name, Address, Phone)</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Google cross-references your website with your Google Business Profile, directories, and social accounts. If your website says "Shop 12, Sector 29" but Google Maps lists "Unit 12, Sector-29 Market", that mismatch degrades search confidence. Ensure your business name, address, and primary phone number are identical across every platform.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">2. Schema.org Structured Data</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Schema is machine-readable code embedded inside your website. It explicitly communicates your opening hours, exact geo-coordinates, price range, and service list directly to Google crawlers, removing ambiguity.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">3. Mobile Speed & Core Web Vitals</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Since Google operates on mobile-first indexing, a slow website directly impairs your local rankings. Clean code and compressed images ensure fast Largest Contentful Paint (LCP) times, keeping your site in Google's good graces.</p>
        `
    },
    {
        slug: 'clinic-website-mistakes',
        title: '5 Website Mistakes That Make Patients Hesitate to Book Your Clinic',
        category: 'Healthcare UX',
        date: 'August 13, 2026',
        readTime: '5 min read',
        author: 'Velora Studio',
        summary: 'Why medical and dental websites struggle to convert visitors, and how clean practitioner profiles and clear treatment pages build patient trust.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">Healthcare is one of the highest-friction decisions a consumer makes. When patients look for a dental clinic, dermatologist, or specialist, they are looking for reassurance and competence. Cluttered, outdated websites generate immediate doubt.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">Mistake 1: Generic Stock Photos Instead of Real Team Photos</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Patients want to see the actual doctor who will treat them and the real clinic where they will sit. Clean, professional photography of your actual premises builds 10x more trust than generic stock models with perfect smiles.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">Mistake 2: Hiding Doctor Credentials and Experience</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Your doctor profile should clearly state qualifications (e.g. BDS, MDS Orthodontics, AIIMS Fellowships), years of experience, and specialized treatment areas. Transparency creates confidence.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">Mistake 3: Over-Complicated Booking Forms</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Never make patients register an account or create a password just to request a consultation slot. A simple form asking for Name, Phone Number, Preferred Date, and Treatment Required is all you need to initiate the conversation.</p>
        `
    },
    {
        slug: 'restaurant-website-conversion',
        title: 'Why PDF Menus Are Killing Your Restaurant Bookings',
        category: 'Hospitality',
        date: 'August 14, 2026',
        readTime: '4 min read',
        author: 'Velora Studio',
        summary: 'How replacing slow, downloadable PDF menus with instant HTML menus increases table reservations and direct takeaway calls.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">When a couple or group is deciding where to eat on a Friday evening, they check 3 or 4 restaurant websites on their phones. If your menu is a download button that takes 10 seconds to load a multi-page PDF, they leave immediately.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">The Mobile Menu Rule</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">A native HTML menu loads instantly, adapts to screen width, lets visitors search for specific dishes, and allows search engines to index your menu items (e.g. "wood fired pizza in Gurugram").</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">Essential Restaurant Website Elements</h2>
            <ul class="list-disc pl-6 space-y-3 text-base text-velora-muted mb-6">
                <li>Direct tap-to-call button for table reservations</li>
                <li>One-click Google Maps link with valet/parking information</li>
                <li>Clear dietary tags (Vegetarian, Non-Veg, Jain options, Vegan)</li>
                <li>Accurate operating hours including kitchen closing times</li>
            </ul>
        `
    },
    {
        slug: 'real-estate-website-strategy',
        title: 'Real Estate Web Design: Converting Property Browsers into Qualified Inquiries',
        category: 'Real Estate',
        date: 'August 14, 2026',
        readTime: '5 min read',
        author: 'Velora Studio',
        summary: 'How independent property brokers and developers can capture serious homebuyer inquiries without relying entirely on crowded portals.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">Third-party real estate portals charge heavy listing fees and sell your buyer leads to multiple competing brokers. Having your own dedicated, professional property website allows you to own your brand and capture exclusive inquiries.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">Show the Data Buyers Care About</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Serious buyers want immediate answers to four questions: Carpet Area, Pricing Range, Possession Date, and Exact Locality. Hiding these behind a mandatory phone number wall alienates high-intent buyers. Give enough transparent details to prove value, then invite them to schedule a site visit.</p>
        `
    },
    {
        slug: 'mobile-speed-core-web-vitals',
        title: 'Why Website Speed on Mobile Is Your Strongest Competitive Advantage',
        category: 'Technical Performance',
        date: 'August 15, 2026',
        readTime: '5 min read',
        author: 'Velora Studio',
        summary: 'A non-technical explanation of Core Web Vitals, how speed influences conversion rates, and why clean code outperforms heavy site builders.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">Every 1-second delay in mobile page load time reduces conversions by up to 20%. When a website is built with clean HTML, CSS, and minimal JavaScript, pages load virtually instantaneously, keeping potential clients engaged.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">Understanding Google\'s Core Web Vitals</h2>
            <p class="text-base leading-relaxed text-velora-muted mb-6 text-pretty">Google evaluates real-world user experience based on Largest Contentful Paint (how fast primary content appears), Interaction to Next Paint (how quickly the site responds to taps), and Cumulative Layout Shift (preventing buttons from jumping around while loading). We engineer every Velora website to achieve top-tier Core Web Vital metrics.</p>
        `
    },
    {
        slug: 'preparing-to-hire-web-designer',
        title: 'What Local Business Owners Should Prepare Before Hiring a Web Designer',
        category: 'Client Guide',
        date: 'August 15, 2026',
        readTime: '4 min read',
        author: 'Velora Studio',
        summary: 'A simple checklist of photos, domain details, and business information to prepare before starting your website project.',
        content: `
            <p class="text-lg leading-relaxed text-velora-muted mb-6 text-pretty">The single biggest reason website projects face delays is waiting on content and asset handovers. If you prepare these five simple items beforehand, your project can launch smoothly in weeks rather than months.</p>
            
            <h2 class="text-2xl font-display font-bold text-velora-text mt-10 mb-4 tracking-tight">The 5-Item Preparation Checklist</h2>
            <ol class="list-decimal pl-6 space-y-3 text-base text-velora-muted mb-6">
                <li><strong>High-Resolution Logo:</strong> A PNG or SVG vector file with transparent background.</li>
                <li><strong>Real High-Quality Photos:</strong> Pictures of your store, clinic, food, or completed real estate projects.</li>
                <li><strong>Accurate Service List & Pricing:</strong> A finalized list of what you offer and indicative rate structures.</li>
                <li><strong>Google Business Profile Access:</strong> To ensure NAP consistency and location embedding.</li>
                <li><strong>Domain Access / Registrar Credentials:</strong> Login to GoDaddy, Namecheap, or Google Domains if you already own your URL.</li>
            </ol>
        `
    }
];

const FAQS = [
    {
        q: 'What makes Velora Digital different from a freelance developer or large agency?',
        a: 'Unlike freelancers who often use fragile pirated templates and disappear after launch, we write clean, production-grade code that loads fast and remains stable. Unlike large agencies with bloated retainers and confusing marketing jargon, we are a focused, accessible studio offering transparent fixed pricing.'
    },
    {
        q: 'Are your portfolio projects real paying clients?',
        a: 'We are completely honest: our portfolio currently highlights fully engineered concept and demo projects designed to benchmark our technical code quality, mobile performance, and conversion architecture. We never invent fake client testimonials, fake revenue metrics, or fake awards.'
    },
    {
        q: 'How long does it take to launch a website with Velora?',
        a: 'Most Essential and Professional projects launch within 2 to 4 weeks once we receive your business details and photos. Custom projects take 4 to 6 weeks depending on integration requirements.'
    },
    {
        q: 'Do you offer a guarantee on Google search rankings?',
        a: 'No honest agency can guarantee a #1 ranking because Google\'s ranking algorithms consider many factors including distance and authentic user reviews. We guarantee a technically flawless local SEO foundation, clean Schema markup, fast mobile speeds, and exact NAP alignment to give you the highest competitive advantage.'
    },
    {
        q: 'What happens after my website goes live?',
        a: 'You receive full ownership of your code and domain. We offer ongoing maintenance care packages covering fast cloud hosting, regular security patching, uptime monitoring, and monthly content changes so your site stays updated effortlessly.'
    },
    {
        q: 'How do payments work?',
        a: 'We work with clear, milestone-based payments: typically 50% upfront to initiate discovery and design, and 50% upon final testing and approval before live deployment.'
    }
];

module.exports = {
    CONFIG,
    SERVICES,
    INDUSTRIES,
    RECOMMENDATIONS,
    LOCATIONS,
    PORTFOLIO,
    BLOG,
    FAQS
};
