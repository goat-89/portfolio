# Mohit Kurhade — Portfolio

Personal portfolio website of **Mohit Kurhade**, Full Stack Developer — built with React, Vite, and Tailwind CSS.

🔗 **Live:** https://mohit-kurhade.vercel.app *(update after deploying)*

## Features

- Bold single-page design with scroll-reveal animations, typewriter hero, and animated stat counters
- Project cards with live tech-stack filtering
- Experience & education timeline pulled from real internships (CodSoft, Cognifyz)
- Role-specific resume downloads (Full Stack/Java, Python Backend, AI/ML/GenAI)
- Contact form (opens pre-filled email), copy-email button, floating social rail
- Custom favicon + Open Graph share card, responsive, `prefers-reduced-motion` friendly

## Tech Stack

React 19 · Vite 8 · Tailwind CSS 4 · Poppins/Inter (Google Fonts)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

- `src/data/profile.js` — name, tagline, about, skills, experience, education, certifications, resume links
- `src/data/projects.js` — project cards
- `src/components/` — one component per section
- `public/resumes/` — downloadable resume PDFs
