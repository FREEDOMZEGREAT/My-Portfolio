# Netsanet Degu — Developer Portfolio

A single-page personal portfolio built with **React 19** and **Vite**, featuring a light/dark
theme, scroll-triggered animations, a filterable project grid with detail modals, and a
contact form wired to Web3Forms.

Computer Science graduate of Debre Tabor University and Full-Stack Software Development
certificate graduate of IBT College Canada, specializing in Go with hands-on experience in
Node.js, PHP, and .NET.

---

## Features

- **Hero section** with name, title, tagline, and call-to-action buttons
- **About** with bio paragraphs, quick-fact cards, and a downloadable resume
- **Projects** grid with live screenshots, tech stacks, and a modal detail view
- **Skills** grouped into backend, frontend, state, routing, tools, and practices
- **Contact form** with client-side validation, submitting to Web3Forms
- **Dark/light theme** with system-preference detection and no flash-of-wrong-theme
- **Scroll reveal** animations and **scroll-spy** navigation that tracks the active section
- **Fully responsive** with a mobile navigation drawer
- **SEO and Open Graph** meta tags for social sharing

---

## Tech Stack

| Layer     | Technology                                                  |
| --------- | ----------------------------------------------------------- |
| Framework | React 19, React DOM 19                                        |
| Build     | Vite 8, @vitejs/plugin-react                                 |
| Animation | Framer Motion                                                |
| Styling   | Plain CSS with CSS custom properties (light/dark themes)       |
| Routing   | react-router-dom 7 (installed)                               |
| Linting   | ESLint 10 with `react-hooks` and `react-refresh` plugins      |

> **Note:** the current build renders as a single scrolling page with anchor-based navigation
> (`scrollIntoView`) rather than client-side routes. `react-router-dom` is installed and ready
> if the portfolio is later split into pages.

---

## Getting Started

### Prerequisites

- Node.js 18+ (18.18 or 20+ recommended)
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the dev server with Hot Module Replacement at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Bundles the app into `dist/`.

### Preview the Build

```bash
npm run preview
```

Serves the production build locally to verify it before deploying.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

---

## Project Structure

```
netsanet-degu/
├── index.html              # Entry HTML, SEO/OG tags, pre-paint theme script
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   └── images/             # Profile photo + project screenshots
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # Page composition
    ├── App.css
    ├── index.css           # Design tokens, themes, base styles
    ├── components/         # Header, Footer, Layout, Section
    ├── sections/           # Hero, About, Projects, Skills, Contact
    ├── ui/                 # Reusable primitives: Button, Card, Badge, Reveal...
    ├── hooks/              # useTheme, useScrollReveal, useScrollSpy, useIntersection
    ├── data/               # Content: about, skills, projects, social, contact
    └── projects/           # ProjectCard, ProjectModal
```

### Key directories

- **`src/data/`** — all editable content lives here. Change the name, bio, skills, projects,
  or social links without touching any component.
- **`src/ui/`** — small reusable presentational components shared across sections.
- **`src/hooks/`** — custom hooks for theme, scroll reveal, and section tracking.

---

## Customizing

All site content is driven by files in `src/data/`, so you rarely need to edit components.

| What              | Where                        |
| ----------------- | ---------------------------- |
| Name, bio, resume | `src/data/about.js`          |
| Skills            | `src/data/skills.js`         |
| Projects          | `src/data/projects.js`       |
| Social links      | `src/data/social.js`         |
| Contact endpoint  | `src/data/contact.js`        |
| Colors / themes   | `src/index.css`              |

To add a project, append an object to the `projects` array in `src/data/projects.js`.
Set `featured: true` to have it shown first. Drop screenshots in `public/images/` and
reference them with absolute paths (`/images/my-shot.png`).

To add a skill category, add a new key to the `skills` object in `src/data/skills.js` using
the same `{ title, icon, items: [{ name, level }] }` shape.

### Contact form

`src/data/contact.js` holds the Web3Forms endpoint and access key. Replace both with your own
credentials to receive submissions in your inbox.

---

## Theming

Colors are defined as CSS custom properties in `src/index.css` under `:root` (light) and
`[data-theme='dark']`. The active theme is stored in `localStorage` under `portfolio-theme`
and applied to the `<html>` element by a small inline script in `index.html` so the correct
theme renders before React mounts.

---

## Deployment

The app is a static site — build once and host anywhere that serves static files.

```bash
npm run build
```

Then deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

---

## License

This project is for personal portfolio use.
