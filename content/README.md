# Content Directory Structure

This directory contains all externalized content for the Green Desert website, organized by language and component/page for easy management and CMS integration.

## Directory Overview

```
content/
├── i18n/                    # All internationalized content
│   ├── en/                  # English content
│   │   ├── labels.json      # Generic UI labels (buttons, mini nav, CTAs)
│   │   ├── header.json      # Header/navigation specific strings
│   │   ├── footer.json      # Footer specific strings
│   │   ├── home.json        # Home page content (arrays with metadata)
│   │   ├── company.json     # Company page content
│   │   ├── team.json        # Team page content
│   │   ├── sponsors.json    # Sponsors page content
│   │   ├── solutions.json   # Solutions page content (12 sectors)
│   │   └── products.json    # Products page content (3 products)
│   └── ar/                  # Arabic content (same structure)
│       ├── labels.json
│       ├── header.json
│       ├── footer.json
│       ├── home.json
│       ├── company.json
│       ├── team.json
│       ├── sponsors.json
│       ├── solutions.json
│       └── products.json
└── blog/                    # Blog posts (markdown)
    ├── en/                  # English blog posts
    └── ar/                  # Arabic blog posts
```

---

## Content Organization

### By Language First
All content is organized by **language first**, then by **component/page**. This makes it easy to:
- See all content for a specific language in one place
- Maintain translation parity
- Integrate with i18n frameworks
- Prepare for CMS migration

### Component/Page Files
Each page or component has its own JSON file containing all related content:

---

## File Descriptions

### 1. `labels.json` - Generic UI Labels

Contains **generic, reusable UI elements** used across multiple pages:

**Contents:**
- **mini**: Mini navigation labels (Story, Services, Products, etc.)
- **mini.solution**: Solution-specific mini nav items
- **cta**: Call-to-action components (workWithUs)

**Use for:**
- Anchor links
- Section navigation
- Generic CTAs
- Reusable UI strings

**Example:**
```json
{
  "mini": {
    "story": "Story",
    "services": "Services",
    "products": "Products"
  },
  "cta": {
    "workWithUs": {
      "title": "Partner with our team",
      "action": "Work with us"
    }
  }
}
```

---

### 2. `header.json` - Header/Navigation

Contains **all header and navigation menu content**:

**Contents:**
- **nav.home**: Home link
- **nav.about**: About dropdown with submenu items
- **nav.products**: Products dropdown with submenu items
- **nav.solutions**: Solutions dropdown with menu content
- **nav.services**, **nav.blog**: Main nav items
- **contact**: Contact button text

**Structure:**
- Nested objects for dropdown menus
- Labels and descriptions for menu items
- Menu body text and CTAs

**Example:**
```json
{
  "nav": {
    "home": "Home",
    "about": {
      "label": "About",
      "story": {
        "label": "Story",
        "description": "See how Saudi Arabia's first licensed hemp venture came to life"
      }
    }
  },
  "contact": "Contact us"
}
```

---

### 3. `footer.json` - Footer Content

Contains **all footer-related content**:

**Contents:**
- **logo**: Logo path + alt text
- **follow**: Social heading + `links[]` of `{ label, href, icon }` (icon names: twitter, instagram, youtube, linkedin)
- **description**: Company description
- **sections**: Navigation columns with `title` and `links[]` of `{ label, href }`
- **newsletter**: Newsletter signup copy (title, description, placeholder, cta, success, error)
- **legal**: Copyright text

**Example:**
```json
{
  "logo": { "src": "/logo_GD_black_EN.png", "alt": "Green Desert Logo" },
  "follow": {
    "label": "Follow us",
    "links": [
      { "label": "Twitter", "href": "https://twitter.com/Greendesertsa", "icon": "twitter" }
    ]
  },
  "description": "Saudi Arabia's licensed hemp platform...",
  "sections": [
    {
      "title": "Company",
      "links": [
        { "label": "Story", "href": "/company#story" },
        { "label": "Vision & Mission", "href": "/company#vision" }
      ]
    }
  ],
  "newsletter": {
    "title": "Get updates",
    "description": "Quarterly highlights only.",
    "placeholder": "name@example.com",
    "cta": "Subscribe",
    "success": "Thank you for signing up.",
    "error": "Please enter a valid email (e.g., \"name@example.com\")."
  },
  "legal": { "copyright": "© 2024 Green Desert Co. All rights reserved." }
}
```

---

### 4. `home.json` - Home Page Content

Contains **all home page sections**. Every section is represented with a key plus arrays for repeatable items so non-technical editors can add/remove content:

- **miniNav**: Array for the sticky mini navbar (`{ id, label }`)
- **hero**: `titlePrefix`, `subtitle`, `slides[]` (`text`, `color`, `image`), optional `cta` objects
- **story**: Badge/body text, optional `partners[]` (`name`, `logo`, `url`), `process` (title, subtitle, loopLabel, cta, `steps[]` with `id`, `title`, `description`, `accent`, `icon`)
- **kpi**: Badge, heading, subheading, `items[]` (`id`, `label`, `value`, optional `suffix`, `description`)
- **personas**: Badge, heading, subheading, prompt, `items[]` (`id`, `title`, `description`, `href`)
- **news**: Title, subtitle, `viewAllLabel`, `tag`, `items[]` (`id`, `title`, `description`, `image`, `date`, `link`)

**Example snippet:**
```json
{
  "miniNav": [
    { "id": "story", "label": "Story" },
    { "id": "kpis", "label": "Impact" }
  ],
  "hero": {
    "titlePrefix": "Accelerating Saudi Arabia's transition to",
    "slides": [{ "text": "a greener future", "color": "#F2B67D", "image": "/fiber-cover.jpg" }]
  },
  "kpi": {
    "heading": "Impact-ready metrics",
    "items": [{ "id": "co2", "label": "CO₂ SEQUESTERED", "value": "7.8", "suffix": " t", "description": "per hectare, annually" }]
  }
}
```

---

### 5. `company.json` - Company Page Content

Contains **company information** with **arrays for dynamic content**:

**Sections:**
- **badge**, **title**, **intro**: Page header
- **mission**: Mission statement with title, subtitle, body
- **vision**: Vision 2030 commitment with roadmap details
- **presentation**: Interactive presentation section
- **story**: Company story
- **values**: Values array (3 items with id, title, body, icon)
- **team**: Team section heading
- **leadership**: Leadership section
  - committee.items array (3 items with id, title, body)
  - members array (3 items with id, name, role, bio, image)
- **timeline**: Timeline section
  - regions.items array
  - languages.items array
  - milestones array (7 milestones: 2020-2030 with id, year, title, body, details, image)

**Array Example:**
```json
{
  "values": {
    "items": [
      {
        "id": "pioneering",
        "title": "Regulatory pioneers",
        "body": "Licensed to deploy hemp-based systems...",
        "icon": "scale"
      }
    ]
  }
}
```

---

### 6. `team.json` - Team Page Content

Contains **team member information**:

**Sections:**
- **badge**, **title**, **intro**: Page header
- **journey**: Journey section with title and paragraphs array
- **members**: Team members array (2 members with id, name, role, bio, image)

**Example:**
```json
{
  "members": [
    {
      "id": "abdulhadi",
      "name": "Abdulhadi Alamer",
      "role": "Founder",
      "bio": "...",
      "image": "/images/team/abdulhadi.jpg"
    }
  ]
}
```

---

### 7. `sponsors.json` - Sponsors Page Content

Contains **sponsors and partners information**:

**Sections:**
- **badge**, **title**, **intro**: Page header
- **vision**: Partnership vision with title and body
- **journey**: Partnership journey with title and paragraphs array

---

### 8. `solutions.json` - Solutions Page Content

Contains **12 solution sectors** with detailed information:

**Sections:**
- **hero**: Hero section with badge, title, subtitle, body, CTAs, stats
- **pathways**: Pathways section with title, subtitle, toggle
- **details**: Details section headings and action labels
- **sectors**: Object with 12 solution sectors
  - Each sector has: title, tagline, summary
  - **highlights** array (2 items)
  - **business** array (3 items)
  - **useCases** array (3 items)

**Sectors:**
1. cultivation
2. construction
3. textiles
4. energy
5. biocomposites
6. waste
7. agriculture
8. animalCare
9. cosmetics
10. food
11. pharma
12. services

**Example:**
```json
{
  "sectors": {
    "cultivation": {
      "title": "Cultivation",
      "highlights": ["...", "..."],
      "business": ["...", "...", "..."],
      "useCases": ["...", "...", "..."]
    }
  }
}
```

---

### 9. `products.json` - Products Page Content

Contains **3 product details** as an **array**:

**Structure:**
- **products**: Top-level array containing all products

**Each product includes:**
- id, badge, title, slug
- **overview**: title, body
- **features.items** array (3-4 items with id, title, body, icon)
- **quality.paragraphs** array (for seeds)
- **apps.items** array (for bastFiber)
- **why**: title, body

**Products:**
1. hurds - Hemp Hurd Animal Bedding
2. seeds - Premium Certified Hemp Seeds
3. bastFiber - Hemp Bast Fiber

**Example:**
```json
{
  "products": [
    {
      "id": "hurds",
      "badge": "Product",
      "title": "Hemp Hurd Animal Bedding",
      "slug": "hurds",
      "features": {
        "items": [
          {
            "id": "absorption",
            "title": "Superior Absorption",
            "body": "...",
            "icon": "droplet"
          }
        ]
      }
    }
  ]
}
```

---

## Array-Based Content

### Why Arrays?

All repeatable content is structured as **arrays with complete metadata**. This means:

✅ **Adding/removing items in JSON automatically updates the UI**
✅ **No code changes needed** to add a new KPI, persona, team member, etc.
✅ **CMS-ready** - each array item is self-contained
✅ **React-friendly** - easy to map over in components

### Common Array Item Structure

Every array item includes:
- **id**: Unique identifier (for React keys)
- **title**: Display title
- **body/description**: Main content
- **icon**: Icon name (where applicable)
- **image**: Image path (where applicable)
- **link**: URL destination (where applicable)
- **color**: Styling hint (where applicable)
- **order**: Display order (where applicable)

### Examples of Array-Based Content

**Home Page:**
- ✅ Hero rotating phrases
- ✅ Process steps (5 items)
- ✅ Services (3 items)
- ✅ Products (3 items)
- ✅ KPIs (3 items)
- ✅ Personas (4 items)
- ✅ News (2 items)

**Company Page:**
- ✅ Values (3 items)
- ✅ Leadership members (3 items)
- ✅ Committee items (3 items)
- ✅ Timeline milestones (7 items)
- ✅ Regions (3 items)
- ✅ Languages (3 items)

**Team Page:**
- ✅ Team members (2 items)
- ✅ Journey paragraphs

**Products Page:**
- ✅ Products (3 items)
- ✅ Product features
- ✅ Product applications

---

## Usage Guidelines

### For Content Editors

**To edit UI labels:**
```
content/i18n/[en|ar]/labels.json
```

**To edit header/navigation:**
```
content/i18n/[en|ar]/header.json
```

**To edit footer:**
```
content/i18n/[en|ar]/footer.json
```

**To edit page content:**
```
content/i18n/[en|ar]/[page-name].json
```

**To add blog posts:**
```
content/blog/[en|ar]/[post-slug].md
```

### For Developers

**Loading content in Next.js:**
```typescript
// Load page content
import homeContent from '@/content/i18n/en/home.json'

// Use in component
{homeContent.kpi.items.map(kpi => (
  <KPICard key={kpi.id} {...kpi} />
))}
```

**i18n integration:**
```typescript
// In your i18n system
const t = useTranslations('home') // loads content/i18n/[lang]/home.json
```

---

## CMS Integration Preparation

This structure is **ready for headless CMS** integration:

### Migration Strategy

1. **Create CMS Content Models** matching JSON structure
2. **Import JSON files** as seed data
3. **Map CMS fields** to JSON keys
4. **Update API calls** to fetch from CMS instead of local files

### Recommended CMS Structure

**Content Types:**
- UI Labels (from labels.json)
- Header (from header.json)
- Footer (from footer.json)
- Home Page (from home.json)
- Company Page (from company.json)
- Team Page (from team.json)
- Sponsors Page (from sponsors.json)
- Solutions (from solutions.json)
- Products (from products.json)
- Blog Post (from blog/*.md)

**Field Types:**
- Arrays → Repeater/Collection fields
- Objects → Group fields
- Strings → Text/Rich Text fields
- Images → Asset/Media fields

---

## File Naming Conventions

- **Lowercase**: All file names use lowercase
- **Hyphens**: Multi-word files use hyphens (not used currently)
- **Language codes**: ISO 639-1 (`en`, `ar`)
- **Extensions**: `.json` for data, `.md` for markdown

---

## Translation Status

### English (`en/`)
✅ **Complete** - All content translated

### Arabic (`ar/`)
⚠️ **Partial** - Some sections contain English fallbacks

**Arabic Translation Gaps:**
- Header navigation descriptions
- Footer links and newsletter
- Solutions page (some sector descriptions)
- Company page (some sections)
- Products page (some detailed content)

Approximately **30-40% of Arabic content** needs translation.

---

## Maintenance

### Adding New Content Items

**To add a new KPI:**
1. Open `content/i18n/en/home.json`
2. Add to `kpi.items` array:
```json
{
  "id": "water",
  "label": "WATER SAVED",
  "value": "1M L",
  "description": "annually",
  "icon": "droplet",
  "color": "blue"
}
```
3. Repeat for Arabic

**To add a new team member:**
1. Open `content/i18n/en/team.json`
2. Add to `members` array
3. Repeat for Arabic

### Adding New Pages

1. Create JSON file in `content/i18n/en/[page-name].json`
2. Create matching file in `content/i18n/ar/[page-name].json`
3. Follow array-based structure for repeatable items
4. Update this README

### Adding UI Labels

1. Add to `content/i18n/en/labels.json`
2. Add translation to `content/i18n/ar/labels.json`
3. Use nested structure for related labels

---

## Migration Notes

**Previous Structure:**
```
content/
├── i18n/
│   ├── en.json  # Mixed UI + page content
│   └── ar.json  # Mixed UI + page content
└── pages/
    ├── en/      # Page content only
    └── ar/      # Page content only
```

**New Structure:**
```
content/
├── i18n/
│   ├── en/
│   │   ├── labels.json   # Generic UI
│   │   ├── header.json   # Component-specific
│   │   ├── footer.json   # Component-specific
│   │   └── [pages].json  # Page-specific
│   └── ar/
│       └── (same)
└── blog/
```

**Benefits:**
✅ Organized by language first
✅ Separate files per page/component
✅ Clear separation of concerns
✅ Easy to maintain and update
✅ CMS-ready structure

---

## Next Steps

1. ✅ Content extracted and organized
2. ✅ Arrays created as source of truth
3. ✅ Metadata added (images, icons, links)
4. ⏳ Create utility functions to load content
5. ⏳ Update components to use new structure
6. ⏳ Integrate with i18n system
7. ⏳ Test build and deployment
8. ⏳ Plan CMS integration

---

Last Updated: 2026-01-04
