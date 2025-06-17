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

### Package Management
- Uses `pnpm` as package manager (evidenced by pnpm-lock.yaml)

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Extensive Radix UI components via shadcn/ui
- **Fonts**: Inter (Latin) and Noto Sans Arabic (Arabic)
- **State Management**: React Context for language switching
- **Icons**: Lucide React

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

#### Key Features
- **Language Context**: Centralized translation system with `useLanguage()` hook
- **Responsive Design**: Mobile-first approach with Tailwind
- **SEO Optimization**: Comprehensive metadata in layout.tsx
- **Theme Support**: CSS variables for light/dark mode capability
- **Component Library**: Full shadcn/ui component set available

### File Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (UI components in `ui/` subdirectory)
- `lib/` - Utility functions (cn function for class merging)
- `hooks/` - Custom React hooks
- `public/` - Static assets and images
- `styles/` - Global CSS styles

### Development Notes
- TypeScript strict mode enabled but build errors ignored
- ESLint configured but errors ignored during builds
- Images configured as unoptimized
- Uses CSS variables for theming throughout
- RTL support implemented at the document level

### Styling Approach
- Tailwind CSS with custom design system
- CSS variables for theming (--background, --foreground, etc.)
- shadcn/ui components follow design system
- Responsive utilities throughout
- Support for both LTR and RTL layouts

When working with this codebase:
1. Use the existing shadcn/ui components rather than creating custom ones
2. Follow the established i18n pattern when adding new translatable content
3. Use the `cn()` utility for conditional class merging
4. Maintain the existing CSS variable theming system
5. Consider both English and Arabic layouts when making UI changes