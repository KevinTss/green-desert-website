# Content Usage Guide

This guide shows how to use the new content structure in your components.

## Language Provider Updates

The `LanguageProvider` has been completely rewritten to use the new content structure from `/content/i18n/`.

### What Changed

**Before:**
```tsx
import en from '@/components/i18n/en'
import ar from '@/components/i18n/ar'

const t = (key: string): string => {
  return translations[language][key] || key
}
```

**After:**
```tsx
import enLabels from '@/content/i18n/en/labels.json'
import enHeader from '@/content/i18n/en/header.json'
// ... all content files

const content = {
  en: { labels, header, footer, home, company, ... },
  ar: { labels, header, footer, home, company, ... }
}

// Supports dot notation
const t = (key: string) => {
  // t('header.nav.home')
  // t('labels.mini.story')
}

// Direct content access
const { content } = useLanguage()
// content.home.kpi.items
```

---

## Using Content in Components

### Method 1: Using the `t()` Function (for simple strings)

```tsx
import { useLanguage } from '@/components/language-provider'

export function Header() {
  const { t } = useLanguage()

  return (
    <nav>
      <a href="/">{t('header.nav.home')}</a>
      <a href="/about">{t('header.nav.about.label')}</a>
      <button>{t('header.contact')}</button>
    </nav>
  )
}
```

### Method 2: Using the `useContent()` Hook (for complex objects/arrays)

```tsx
import { useContent } from '@/components/language-provider'

export function HomePage() {
  const content = useContent()

  return (
    <>
      {/* Hero Section */}
      <section>
        <h1>{content.home.hero.title}</h1>
        <h2>{content.home.hero.subtitle}</h2>
        <div>
          {content.home.hero.rotatingPhrases.map((phrase, index) => (
            <span key={index}>{phrase}</span>
          ))}
        </div>
      </section>

      {/* KPIs - Array automatically renders */}
      <section>
        {content.home.kpi.items.map(kpi => (
          <KPICard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            description={kpi.description}
            icon={kpi.icon}
            color={kpi.color}
          />
        ))}
      </section>
    </>
  )
}
```

### Method 3: Direct Content Import (for server components)

```tsx
// app/[lang]/page.tsx
import homeContentEn from '@/content/i18n/en/home.json'
import homeContentAr from '@/content/i18n/ar/home.json'

export default function Page({ params }: { params: { lang: string } }) {
  const content = params.lang === 'ar-SA' ? homeContentAr : homeContentEn

  return (
    <section>
      <h1>{content.hero.title}</h1>
      {content.kpi.items.map(kpi => (
        <div key={kpi.id}>
          <span>{kpi.label}</span>
          <span>{kpi.value}</span>
        </div>
      ))}
    </section>
  )
}
```

---

## Content Structure Reference

### Available Content Objects

```tsx
const { content } = useContent()

content.labels      // Generic UI labels (mini nav, CTAs)
content.header      // Header/navigation
content.footer      // Footer content
content.home        // Home page content
content.company     // Company page content
content.team        // Team page content
content.sponsors    // Sponsors page content
content.solutions   // Solutions page content
content.products    // Products page content
```

---

## Examples by Page

### Home Page

```tsx
import { useContent } from '@/components/language-provider'

export function HomePage() {
  const content = useContent()
  const { hero, services, kpi, personas } = content.home

  return (
    <>
      {/* Hero */}
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      {hero.rotatingPhrases.map(phrase => <span key={phrase}>{phrase}</span>)}

      {/* Services - Array */}
      {services.items.map(service => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          image={service.image}
        />
      ))}

      {/* KPIs - Array */}
      {kpi.items.map(item => (
        <KPICard key={item.id} {...item} />
      ))}

      {/* Personas - Array */}
      {personas.items.map(persona => (
        <PersonaCard key={persona.id} {...persona} />
      ))}
    </>
  )
}
```

### Company Page

```tsx
import { useContent } from '@/components/language-provider'

export function CompanyPage() {
  const { company } = useContent()

  return (
    <>
      <h1>{company.title}</h1>
      <p>{company.intro}</p>

      {/* Values - Array */}
      {company.values.items.map(value => (
        <ValueCard
          key={value.id}
          title={value.title}
          body={value.body}
          icon={value.icon}
        />
      ))}

      {/* Leadership - Array */}
      {company.leadership.members.map(member => (
        <LeaderCard
          key={member.id}
          name={member.name}
          role={member.role}
          bio={member.bio}
          image={member.image}
        />
      ))}

      {/* Timeline - Array */}
      {company.timeline.milestones.map(milestone => (
        <TimelineItem
          key={milestone.id}
          year={milestone.year}
          title={milestone.title}
          body={milestone.body}
          details={milestone.details}
          image={milestone.image}
        />
      ))}
    </>
  )
}
```

### Team Page

```tsx
import { useContent } from '@/components/language-provider'

export function TeamPage() {
  const { team } = useContent()

  return (
    <>
      <h1>{team.title}</h1>
      <p>{team.intro}</p>

      {/* Journey paragraphs - Array */}
      {team.journey.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {/* Team members - Array */}
      {team.members.map(member => (
        <MemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          bio={member.bio}
          image={member.image}
        />
      ))}
    </>
  )
}
```

### Products Page

```tsx
import { useContent } from '@/components/language-provider'

export function ProductsPage() {
  const { products } = useContent()

  return (
    <>
      {/* Products - Array */}
      {products.products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.overview.body}</p>

          {/* Product features - Array */}
          {product.features.items.map(feature => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              body={feature.body}
              icon={feature.icon}
            />
          ))}
        </div>
      ))}
    </>
  )
}
```

### Solutions Page

```tsx
import { useContent } from '@/components/language-provider'

export function SolutionsPage() {
  const { solutions } = useContent()

  return (
    <>
      {/* Hero */}
      <h1>{solutions.hero.title}</h1>
      <p>{solutions.hero.subtitle}</p>

      {/* Sectors */}
      {Object.entries(solutions.sectors).map(([key, sector]) => (
        <div key={key}>
          <h2>{sector.title}</h2>
          <p>{sector.tagline}</p>
          <p>{sector.summary}</p>

          {/* Highlights - Array */}
          {sector.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}

          {/* Business value - Array */}
          {sector.business.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          {/* Use cases - Array */}
          {sector.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </div>
      ))}
    </>
  )
}
```

### Header Component

```tsx
import { useLanguage } from '@/components/language-provider'

export function Header() {
  const { t, content } = useLanguage()
  const { nav } = content.header

  return (
    <header>
      <nav>
        <a href="/">{nav.home}</a>

        {/* About dropdown */}
        <div>
          <button>{nav.about.label}</button>
          <div>
            <a href="/company#story">
              {nav.about.story.label}
              <span>{nav.about.story.description}</span>
            </a>
            <a href="/company#vision">
              {nav.about.vision.label}
              <span>{nav.about.vision.description}</span>
            </a>
          </div>
        </div>

        <a href="/services">{nav.services}</a>
        <a href="/blog">{nav.blog}</a>
        <button>{t('header.contact')}</button>
      </nav>
    </header>
  )
}
```

### Footer Component

```tsx
import { useContent } from '@/components/language-provider'

export function Footer() {
  const { footer } = useContent()

  return (
    <footer>
      <p>{footer.description}</p>

      <nav>
        <a href="/company">{footer.links.company}</a>
        <a href="/products">{footer.links.products}</a>
        <a href="/services">{footer.links.services}</a>
        <a href="/blog">{footer.links.articles}</a>
      </nav>

      <form>
        <h3>{footer.newsletter.title}</h3>
        <p>{footer.newsletter.description}</p>
        <input placeholder={footer.newsletter.placeholder} />
        <button>{footer.newsletter.cta}</button>
      </form>

      <p>{footer.copyright}</p>
    </footer>
  )
}
```

---

## TypeScript Support

The content structure is fully typed:

```tsx
import { useContent } from '@/components/language-provider'

export function Example() {
  const content = useContent()

  // TypeScript knows the structure!
  content.home.kpi.items // KPI[]
  content.company.values.items // Value[]
  content.team.members // Member[]

  // Autocomplete works
  content.home.hero.title
  content.header.nav.home
  content.footer.newsletter.cta
}
```

---

## Adding New Content Items

### To add a new KPI:

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
3. Do the same in `content/i18n/ar/home.json`
4. **No code changes needed** - it will automatically appear!

### To add a new team member:

1. Open `content/i18n/en/team.json`
2. Add to `members` array:
```json
{
  "id": "jane",
  "name": "Jane Doe",
  "role": "CTO",
  "bio": "...",
  "image": "/images/team/jane.jpg"
}
```
3. Do the same in Arabic
4. **No code changes needed** - it will automatically appear!

---

## Migration Checklist

When updating a component to use the new content structure:

- [ ] Replace `t('old.key')` with `t('component.section.key')`
- [ ] Use `useContent()` for arrays and complex objects
- [ ] Replace hardcoded content with content references
- [ ] Update to use array `.map()` instead of individual elements
- [ ] Remove any direct imports from old `@/components/i18n/`
- [ ] Test in both English and Arabic

---

## Common Patterns

### Pattern 1: Array Mapping
```tsx
{content.home.kpi.items.map(kpi => (
  <div key={kpi.id}>
    <Icon name={kpi.icon} />
    <span>{kpi.label}</span>
    <span>{kpi.value}</span>
  </div>
))}
```

### Pattern 2: Conditional Content
```tsx
{content.home.news.items.length > 0 && (
  <section>
    <h2>{content.home.news.title}</h2>
    {content.home.news.items.map(news => (
      <NewsCard key={news.id} {...news} />
    ))}
  </section>
)}
```

### Pattern 3: Nested Arrays
```tsx
{content.products.products.map(product => (
  <div key={product.id}>
    <h2>{product.title}</h2>
    {product.features.items.map(feature => (
      <Feature key={feature.id} {...feature} />
    ))}
  </div>
))}
```

---

## Best Practices

1. **Use `useContent()` for arrays** - cleaner than deep `t()` calls
2. **Use `t()` for simple strings** - like button labels
3. **Always use `key={item.id}`** for array items
4. **Destructure for readability**:
   ```tsx
   const { home, header, labels } = useContent()
   ```
5. **Type your components** - TypeScript knows the content structure
6. **Test both languages** - make sure Arabic content is complete

---

## Troubleshooting

### "Cannot find module '@/content/i18n/en/...'"
- Make sure you're importing from `content/i18n/`, not `components/i18n/`
- The old folder has been deleted

### "Property does not exist on type..."
- Check that the property exists in both EN and AR JSON files
- The structure must match exactly between languages

### "Cannot read property of undefined"
- Check that the content file is imported in `language-provider.tsx`
- Verify the JSON file has no syntax errors

---

Last Updated: 2026-01-04
