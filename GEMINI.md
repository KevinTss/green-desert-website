# Gemini Project Brief: green-desert-website

This document provides a brief overview of the `green-desert-website` project, intended to be used as a quick reference for the Gemini AI assistant.

## Core Technologies

- **Framework:** Next.js 15.2.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui

## Project Structure

- `app/`: Contains the core application logic, including pages and layouts.
- `components/`: Contains reusable React components.
- `public/`: Contains static assets like images and videos.
- `lib/`: Contains utility functions.
- `hooks/`: Contains custom React hooks.
- `content/`: Contains markdown files for blog posts.
- `styles/`: Contains global CSS styles.

## Development Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase.

## Build & Deployment

The project is configured to be built with `next build`. Note that the Next.js configuration has `eslint` and `typescript` error checking disabled during the build process.
