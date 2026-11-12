# Abhishek Pradhan — Personal Website

Hello World website - SPA app built with React and Vite. It includes Home, About, Blog, and Contact pages (all content is made up, except contact details)

> [!NOTE]
> This website serves as POC for the Development environment & Technology selected - see below 2 sections for more details.

## Development environment

The website was created using Ubuntu on WSL on a Windows 11 arm64 laptop, with VS Code. GitHub Copilot was used with free models (Nemotron family of models) from OpenRouter and NVIDIA Build.

## Technology

- **React 19** and **React DOM** — user interface
- **React Router 7** — page routing
- **Vite 5** — development server and production bundler
- **Astryx Design System** (`@astryxdesign/core`) — UI components and base styles - An open source design system that's fully customizable and agent ready
- **Astryx CLI** - used by AI agents
- **Astryx theme** (`@astryxdesign/theme-matcha`) — site theme
- **CSS** — site-specific styling
- **npm** — dependency management

## Requirements

- Node.js 18 or later
- npm

## Run locally

Clone the repository, change into the project directory, and install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Vite serves the site at [http://localhost:5173](http://localhost:5173) and opens it in a browser.

## Build and preview

Create a production build:

```bash
npm run build
```

The generated static site is written to `dist/`. To preview that build locally:

```bash
npm run preview
```

## Deploy

This is a static Vite site. Deploy it to a static hosting provider (for example, Netlify or Vercel) with:

- **Build command:** `npm run build`
- **Output / publish directory:** `dist`

If configuring deployment manually, install dependencies with `npm ci` before building. Since the site uses React Router with browser-based URLs, configure the host to serve `index.html` as the fallback for application routes (for example, `/about` and `/contact`). Without this single-page-app rewrite, directly opening or refreshing those routes may return a 404.

After each update, push the changes to the connected Git repository or upload the newly generated `dist/` output, depending on your hosting workflow.
