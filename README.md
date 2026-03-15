# Shubham Sonu — Personal Portfolio

Live at: **[shubhamsonu084.github.io](https://shubhamsonu084.github.io)**

Built with React + Vite · Deployed on GitHub Pages

---

## Quick Start

### 1. Install dependencies

```bash
cd ~/Desktop/shubhamsonu084.github.io
npm install
```

### 2. Add your profile photo and resume

Copy these two files into the `public/` folder:

```
public/
├── profile.jpg               ← your headshot (square, min 400×400px recommended)
└── Resume_Shubham_Sonu.pdf   ← your resume PDF
```

### 3. Run locally

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## Updating Content

All content lives in `src/data/` — edit these files without touching any layout code:

| File | What it controls |
|---|---|
| `src/data/projects.js` | Projects section cards |
| `src/data/agents.js` | AI Agents section cards |
| `src/data/competitions.js` | Competitions section cards |

### Adding a new project

Open `src/data/projects.js` and add an entry to the array:

```js
{
  id: 4,
  title: 'My New Project',
  description: 'What it does and why it matters.',
  tags: ['React', 'Python', 'AWS'],
  github: 'https://github.com/shubhamsonu084/repo-name',
  demo: 'https://your-demo-url.com',   // or null
  featured: true,
},
```

---

## Deploy to GitHub Pages

### First-time setup

Make sure your repo is named exactly `shubhamsonu084.github.io` and is public.
GitHub Pages will serve from the `gh-pages` branch automatically.

### Deploy

```bash
npm run deploy
```

This runs `npm run build` (creates `dist/`) then pushes `dist/` to the
`gh-pages` branch automatically via the `gh-pages` package.

Wait ~60 seconds, then visit: **https://shubhamsonu084.github.io**

### Re-deploying after changes

Same command every time:

```bash
npm run deploy
```

---

## Project Structure

```
shubhamsonu084.github.io/
├── public/
│   ├── profile.jpg                 ← add your photo here
│   ├── Resume_Shubham_Sonu.pdf     ← add your resume here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── AIAgents.jsx
│   │   ├── Competitions.jsx
│   │   ├── Resume.jsx
│   │   ├── Schedule.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js             ← edit your projects here
│   │   ├── agents.js               ← edit your AI agents here
│   │   └── competitions.js         ← edit your competitions here
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Tech Stack

- **React 18** — UI framework
- **Vite** — build tool
- **react-calendly** — Calendly embed
- **gh-pages** — GitHub Pages deployment
- **Inter** — typeface (Google Fonts)
- Pure CSS — glassmorphism, animations, responsive layout
