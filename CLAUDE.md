# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Green Desert, a Saudi Arabian biotechnology startup focused on environmental solutions. The site features bilingual support (English/Arabic) with RTL layout support for Arabic text.

## Common Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (errors ignored during builds)
- `npx tsc --noEmit` - Check TypeScript compilation without generating files

### Package Management
- Uses `pnpm` as package manager (evidenced by pnpm-lock.yaml)

### Deployment
- **GitHub Pages**: Static export to `/green-desert-website` subdirectory
- Uses `output: "export"` in next.config.mjs
- `basePath` and `assetPrefix` configured for subdirectory deployment
- All static assets require `getAssetPath()` helper for correct prefixing

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router and static export
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Extensive Radix UI components via shadcn/ui
- **Fonts**: Inter (Latin) and Noto Sans Arabic (Arabic)
- **State Management**: React Context for language switching
- **Icons**: Lucide React
- **Content**: Markdown-based blog system with frontmatter
- **Deployment**: GitHub Pages with subdirectory support

### Key Components Structure

#### shadcn/ui Integration
- Complete shadcn/ui setup with components.json configuration
- UI components located in `components/ui/`
- Configured aliases: `@/components`, `@/lib/utils`, `@/hooks`
- Custom Tailwind config with CSS variables for theming

#### Internationalization
- Custom i18n implementation via `LanguageProvider`
- Supports English and Arabic with RTL layout switching
- Translations stored in `components/language-provider.tsx`
- Language persisted in localStorage
- Dynamic font switching between Inter and Noto Sans Arabic
- URL routing: `/en` for English, `/ar-SA` for Arabic
- Blog system supports bilingual content

#### Key Features
- **Language Context**: Centralized translation system with `useLanguage()` hook
- **Responsive Design**: Mobile-first approach with Tailwind
- **SEO Optimization**: Comprehensive metadata in layout.tsx
- **Theme Support**: CSS variables for light/dark mode capability
- **Component Library**: Full shadcn/ui component set available
- **Blog System**: Markdown-based with frontmatter, bilingual support
- **Asset Management**: `getAssetPath()` helper for deployment prefixing
- **Navigation**: Dropdown menus with hover states and language switcher

### File Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (UI components in `ui/` subdirectory)
- `lib/` - Utility functions (cn function for class merging, blog utilities, assets helper)
- `hooks/` - Custom React hooks (use-mobile hook)
- `public/` - Static assets and images
- `styles/` - Global CSS styles
- `content/` - Blog posts in markdown format (en/ and ar/ subdirectories)

#### Key Files
- `lib/assets.ts` - Asset path helper for deployment prefixing
- `lib/blog.ts` - Blog post utilities and markdown processing
- `components/language-provider.tsx` - i18n context and translations
- `components/scroll-header.tsx` - Main navigation with language dropdown
- `next.config.mjs` - Next.js configuration with GitHub Pages setup

### Development Notes
- TypeScript strict mode enabled but build errors ignored
- ESLint configured but errors ignored during builds
- Images configured as unoptimized
- Uses CSS variables for theming throughout
- RTL support implemented at the document level
- Blog posts use gray-matter for frontmatter parsing
- All static assets must use `getAssetPath()` for correct deployment paths
- Language switcher uses hover dropdown with proper state management

### Styling Approach
- Tailwind CSS with custom design system
- CSS variables for theming (--background, --foreground, etc.)
- shadcn/ui components follow design system
- Responsive utilities throughout
- Support for both LTR and RTL layouts

## Important Patterns

### Asset Handling
- **ALWAYS** use `getAssetPath()` for any static asset references
- Import: `import { getAssetPath } from "@/lib/assets"`
- Usage: `src={getAssetPath("/image.png")}` instead of `src="/image.png"`
- This ensures correct paths for GitHub Pages subdirectory deployment

### Blog System
- Blog posts are markdown files in `content/en/` and `content/ar/`
- Use frontmatter for metadata (title, date, excerpt, author, tags, image)
- Blog utilities in `lib/blog.ts` handle parsing and listing
- URL structure: `/[lang]/blog/[slug]`

### Language Switching
- Use `useLanguage()` hook for translations and RTL detection
- Language routes: `/en` and `/ar-SA`
- Consider RTL layouts with conditional classes
- Language switcher uses hover dropdown pattern

When working with this codebase:
1. Use the existing shadcn/ui components rather than creating custom ones
2. Follow the established i18n pattern when adding new translatable content
3. Use the `cn()` utility for conditional class merging
4. Maintain the existing CSS variable theming system
5. Consider both English and Arabic layouts when making UI changes
6. **ALWAYS** use `getAssetPath()` for static assets
7. Follow the existing blog post structure for content
8. Test builds with `pnpm build` to ensure GitHub Pages compatibility