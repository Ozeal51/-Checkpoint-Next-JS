This repository contains a small portfolio website built with Next.js (Pages Router).

**What this project includes:**
- **Pages router** based pages in the `pages/` directory: `index`, `about`, `projects`, `contact`, `address`, and `email`.
- Reusable React components in `components/` (`Navbar`, `Footer`, `Layout`, `ProjectCard`, `ProfileHeader`).
- Styling via **CSS Modules** in `styles/` and one example of `styled-components` (SSR-safe setup).
- Images and SVGs under `public/images/` used with Next.js `Image` component.
- A server-side rendered `projects` page using `getServerSideProps` (see `pages/projects.tsx`).

**Files of note**
- `pages/_app.tsx` — Next.js app wrapper, loads global CSS.
- `pages/_document.tsx` — SSR setup for `styled-components` (important for server rendering of styled-components).
- `pages/projects.tsx` — Implements `getServerSideProps` to demonstrate SSR per-request rendering.
- `components/ProfileHeader.tsx` — Uses `next/image` and a `styled-components` call for the primary CTA.
- `public/images/*` — Profile and project preview images used by the portfolio.

**Local development**
1. Install dependencies:

```powershell
npm install
```

2. Run the development server:

```powershell
npm run dev
```

3. Open http://localhost:3000 in your browser.

**Build and production preview**

```powershell
npm run build
npm run start
```

**Deploy to Vercel**
- Connect your Git repository to Vercel (https://vercel.com/new).
- Vercel auto-detects Next.js projects — the default build command `npm run build` and output directory are correct.
- Ensure `NODE_ENV` is `production` (Vercel sets this automatically).

**Notes & Implementation Details**
- The project intentionally uses the Pages Router (file-based routing under `pages/`) to provide simple, predictable routes.
- `pages/projects.tsx` uses `getServerSideProps` to render the page on the server and inject a `generatedAt` timestamp on every request — this demonstrates server-side rendering.
- `styled-components` is configured for SSR in `pages/_document.tsx` using `ServerStyleSheet`.
- Images live in `public/images/` and are referenced via `/images/...` when passed to Next's `Image` component.

**Project map**
- `pages/` — route files (home, about, projects, contact, address, email)
- `components/` — shared UI components (Navbar, Footer, Layout, ProjectCard, ProfileHeader)
- `styles/` — CSS Modules and global CSS
- `public/images/` — static images and project previews
- `data/projects.ts` — example project data displayed on the Projects page

If you want, I can also:
- Add contact form handling (serverless function or third-party integration).
- Wire up a CMS or Git-based content for projects.
- Create a Vercel deployment and confirm the public URL.

---
Built for a Software Developer portfolio — ready to run locally and deploy to Vercel.
