# ScrewFast Template - Specific Rules

Project-specific conventions and patterns for the ScrewFast → LOGIKIA adaptation. These rules extend the general Astro guidelines in `astro-instructions.md`.

## Template-Specific Architecture

### Critical File Structure

```
src/
├── components/
│   ├── sections/           # Page-specific sections
│   │   ├── navbar&footer/  # Navigation components
│   │   ├── landing/        # Hero and landing sections  
│   │   ├── features/       # Feature showcase components
│   │   ├── testimonials/   # Social proof sections
│   │   ├── pricing/        # Pricing tables and plans
│   │   └── misc/           # FAQ, contact forms
│   ├── ui/                 # Reusable UI components
│   │   ├── blocks/         # Layout blocks (LeftSection, RightSection, MainSection)
│   │   ├── forms/          # Form components
│   │   ├── buttons/        # CTA and action buttons
│   │   ├── cards/          # Product and content cards
│   │   └── starlight/      # Starlight documentation overrides
│   ├── Meta.astro          # SEO metadata component
│   └── BrandLogo.astro     # Brand-specific components
├── data_files/             # Centralized data and constants
│   ├── constants.ts        # SEO and site-wide constants
│   ├── faqs.json          # FAQ data
│   ├── features.json      # Feature listings
│   └── pricing.json       # Pricing plans
└── images/                 # Optimized static assets
    ├── content/            # Content-specific images (paste behavior)
    ├── blog/              # Blog post images
    ├── insights/          # Insight article images
    └── logikia/           # Brand-specific assets
```

### Naming Conventions (ScrewFast Specific)

#### Components Follow Descriptive Patterns

```astro
<!-- Section Components -->
HeroSection.astro           ✅ Clear page section purpose
FeaturesGeneral.astro       ✅ Feature display component
TestimonialsSection.astro   ✅ Social proof section
PricingSection.astro        ✅ Pricing display

<!-- UI Components -->
MainSection.astro           ✅ Primary content block
LeftSection.astro           ✅ Left-aligned content
RightSection.astro          ✅ Right-aligned content
AnnouncementBanner.astro    ✅ Marketing banner

<!-- Avoid Generic Names -->
Section.astro               ❌ Too generic
Card.astro                  ❌ Use ProductCard.astro, FeatureCard.astro
Button.astro                ❌ Use PrimaryBtn.astro, SecondaryBtn.astro
```

## Starlight Integration Patterns

### Custom Starlight Components

```astro
// src/components/ui/starlight/SiteTitle.astro
// Brand logo integration with proper theming
---
import BrandLogo from "@components/BrandLogo.astro";
---
<BrandLogo />

// src/components/ui/starlight/Head.astro  
// Custom head with Lenis smooth scroll integration
<script>
  import "@scripts/lenisSmoothScroll.js";
</script>

// src/components/ui/starlight/ThemeSelect.astro
// Custom theme switcher matching brand design
```

### Documentation Structure

```markdown
sidebar: [
  {
    label: "Quick Start Guides",
    autogenerate: { directory: "guides" }
  },
  {
    label: "Tools & Equipment", 
    items: [
      { label: "Tool Guides", link: "tools/tool-guides/" },
      { label: "Equipment Care", link: "tools/equipment-care/" }
    ]
  }
]
```

## Styling System (ScrewFast Priority)

### Tailwind CSS Patterns

```astro
<!-- Standard Section Wrapper -->
<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
  <div class="max-w-3xl text-left sm:text-center md:mx-auto">
    <!-- Content -->
  </div>
</section>

<!-- Hero Section Pattern -->
<section class="relative overflow-hidden">
  <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <!-- Hero content with consistent spacing -->
  </div>
</section>

<!-- Card Component Pattern -->
<div class="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800">
  <!-- Card content with hover effects -->
</div>
```

### Color System (LOGIKIA Brand)

```css
/* From tailwind.config.mjs - Use these specific brand colors */
primary: {
  DEFAULT: "#0A2342",    /* Main blue for backgrounds, titles */
  hover: "#1A365D",      /* Blue for hover states */
  text: "#38BDF8"        /* Vibrant blue for dark mode text */
}
accent: {
  green: {
    DEFAULT: "#2ECC71",  /* Precision green (light mode) */
    dark: "#4ADE80"      /* Precision green (dark mode) */
  },
  orange: {
    DEFAULT: "#E67E22",  /* Action orange (light mode) */
    dark: "#F97316"      /* Action orange (dark mode) */
  }
}
```

## Content Collection Schemas (ScrewFast Specific)

### Product Collection Pattern

```typescript
// src/content.config.ts - Products specific to hardware/construction
const productsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/products" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.string(),
      imgCard: image(),        // Product card image
      imgMain: image(),        // Main product image
      imgAlt: z.string(),
    }),
    blueprints: z.object({     // Technical diagrams
      first: image().optional(),
      second: image().optional(),
    }),
    specifications: z.array(   // Technical specs
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    tableData: z.array(        // Specification tables
      z.object({
        feature: z.array(z.string()),
        description: z.array(z.array(z.string())),
      })
    ).optional(),
  }),
});
```

### Blog Collection with Reviews

```typescript
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    contents: z.array(z.string()),      // Article sections
    author: z.string(),
    role: z.string().optional(),
    authorImage: image(),
    authorImageAlt: z.string(),
    pubDate: z.date(),
    cardImage: image(),                 // Blog card image
    cardImageAlt: z.string(),
    readTime: z.number(),              // Reading time in minutes
    tags: z.array(z.string()).optional(),
  }),
});
```

## Internationalization Requirements

### URL Structure (Multi-language Support)

```
/                    # English (default)
/fr/                 # French  
/es/                 # Spanish (primary for LOGIKIA)
/de/                 # German
/ja/                 # Japanese
/zh-cn/              # Chinese
/fa/                 # Farsi
```

### Localized Data Files

```typescript
// Pattern: data_files/[locale]/filename.json
data_files/
├── constants.ts           # Default (English)
├── faqs.json             # Default FAQ
├── features.json         # Default features
├── pricing.json          # Default pricing
└── fr/                   # French localization
    ├── faqs.json
    ├── features.json
    └── pricing.json
```

### Component Localization Pattern

```astro
---
// Localization in components
import enStrings from "@utils/navigation.ts";
import frStrings from "@utils/fr/navigation.ts";

const currentLocale = Astro.currentLocale || "en";
const strings = currentLocale === "fr" ? frStrings : enStrings;
const isSpanish = currentLocale === "es";  // LOGIKIA primary language
---

<nav>
  <a href={`/${currentLocale === "en" ? "" : currentLocale + "/"}services`}>
    {strings.services}
  </a>
</nav>
```

## SEO & Meta Patterns (ScrewFast Specific)

### Centralized Constants Usage

```typescript
// data_files/constants.ts - Always use for consistency
export const SITE = {
  title: "ScrewFast",
  description: "Premium tools and construction services",
  author: "ScrewFast Team",
  url: "https://screwfast.uk"
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  image: "/social.webp"
};

export const OG = {
  title: `${SITE.title}: Hardware Tools & Construction Services`,
  description: "Top-quality hardware tools and expert construction services",
  image: "/social.webp"
};
```

### Page-Level SEO Pattern

```astro
---
import { SITE, SEO } from "@data/constants";

const pageTitle = `Products | ${SITE.title}`;
const metaDescription = "Explore our comprehensive range of premium hardware tools and construction equipment.";
---

<MainLayout
  title={pageTitle}
  customDescription={metaDescription}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/products`,
    "name": "Products",
    "description": metaDescription,
    "url": `${SITE.url}/products`
  }}
>
```

### Product-Specific Structured Data

```astro
structuredData={{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE.url}/products/${slug}`,
  "name": product.title,
  "description": product.description,
  "image": product.main.imgMain.src,
  "brand": {
    "@type": "Brand",
    "name": "ScrewFast"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
}}
```

## Performance Requirements (ScrewFast Specific)

### Image Optimization Patterns

```astro
<!-- Hero Images - High Priority -->
<Image
  src={heroImage}
  alt="Stack of ScrewFast product boxes"
  format="avif"
  loading="eager"          <!-- Above fold -->
  class="w-full h-auto"
  widths={[320, 640, 1024, 1280, 1920]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
/>

<!-- Product Cards - Below Fold -->
<Image
  src={product.main.imgCard}
  alt={product.main.imgAlt}
  format="avif"
  loading="lazy"           <!-- Below fold -->
  class="aspect-square object-cover w-full h-full"
/>

<!-- Content Images - Lazy Load -->
<Image
  src={contentImage}
  alt="Descriptive alt text"
  format="avif"
  loading="lazy"
  class="w-full h-auto rounded-lg"
/>
```

### Client Hydration Strategy

```astro
<!-- Critical Navigation - Load Immediately -->
<Navbar client:load />

<!-- Interactive Forms - Load on Interaction -->
<ContactForm client:visible />
<ProductFilter client:visible />

<!-- Non-Critical Features - Load When Idle -->
<SearchWidget client:idle />
<NewsletterSignup client:idle />
<SocialShare client:idle />

<!-- Background Processes - Load When Idle -->
<AnalyticsTracker client:idle />
<ThemeToggle client:idle />
```

## Development Restrictions & Required Processes

### Build Process Requirements

```bash
# Never modify this build sequence
npm run build    # Runs: astro check && astro build && node process-html.mjs

# Required validation steps
astro sync          # Generate types after schema changes
astro check         # TypeScript validation
npm run dev         # Test development server
npm run preview     # Test production build
```

### Forbidden Patterns

```astro
<!-- ❌ Never bypass Tailwind for basic styling -->
<style>
  .custom-margin { margin: 20px; }     /* Use Tailwind: m-5 */
  .custom-text { color: blue; }        /* Use Tailwind: text-blue-500 */
</style>

<!-- ❌ Never remove required build processes -->
"build": "astro build"                 /* Missing astro check and process-html.mjs */

<!-- ❌ Never create pages outside i18n structure -->
src/pages/custom-page.astro            /* Should be in locale folders */

<!-- ❌ Never modify constants without updating dependents -->
// Changing SITE.title without updating Meta.astro, layouts, etc.
```

### Required Patterns

```astro
<!-- ✅ Always update schemas when changing frontmatter -->
// 1. Add new field to content.config.ts
// 2. Update existing content files
// 3. Run astro sync to generate types
// 4. Test with npm run build

<!-- ✅ Always use centralized constants -->
import { SITE, SEO } from "@data/constants";
const pageTitle = `${customTitle} | ${SITE.title}`;

<!-- ✅ Always test both development and production -->
npm run dev      # Test interactive development
npm run build    # Test complete build process
```

## Component Integration Patterns

### Layout Component Usage

```astro
<!-- MainLayout.astro - Standard page wrapper -->
<MainLayout
  title="Page Title"
  customDescription="Custom meta description"
  customOgTitle="Custom OG title"
  lang="es"        <!-- For non-English pages -->
>
  <slot />         <!-- Page content -->
</MainLayout>

<!-- Navbar Integration -->
<Navbar />         <!-- Auto-detects locale and applies proper links -->

<!-- Footer Integration -->
<FooterSection />  <!-- Includes localized links and social media -->
```

This template maintains the ScrewFast design system, performance characteristics, and development patterns while supporting the LOGIKIA brand adaptation and multi-language requirements.
