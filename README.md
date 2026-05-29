# Shankar Mupanna | Creative Developer Portfolio

A premium, visually stunning, and highly responsive developer portfolio website built using **React**, **Vite**, **Tailwind CSS v4**, **Redux Toolkit**, and **React Router**. The site is optimized for static hosting (deployed on GitHub Pages) using hash-based routing.

## 🚀 Live Site
Check out the live website here:  
👉 **[https://shankara11y.github.io/shankarportfolio/](https://shankara11y.github.io/shankarportfolio/)**

---

## ✨ Features

- **Multi-Page Routing**: Clean navigation implemented with React Router's `<HashRouter>`, preventing `404 File Not Found` issues when reloading paths on static servers.
- **Global State Management**: Managed via Redux Toolkit slices (`projectsSlice` for project metadata and asset loading; `contactSlice` for contact submission states).
- **Responsive & Premium UI**: Styled with Tailwind CSS v4 using a slate-indigo dark mode theme, glassmorphic visual containers, glow backdrops, and floating animations—**without using Framer Motion**.
- **Hand-Crafted SVGs**: Fully vector-based, high-fidelity custom SVG icons for all languages and frameworks (Python, Flask, Firebase, VS Code, Framer Motion, React, etc.) ensuring fast page loads and visual consistency.
- **Interactive Contact Form**: State-controlled inputs with simulated network submission thunks, loading spinner states, and successful-message prompts.
- **Asset Integration**: High-fidelity AI-generated 3D mockups for all featured project cards (Personal Portfolio, Clean City Citizen App, and DAMS Aerospace).

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit, React-Redux
- **Routing**: React Router (`react-router-dom`)
- **Build Tool**: Vite
- **Deployment**: `gh-pages` (GitHub Pages deploy helper)

---

## 📁 Folder Structure

```text
src/
├── assets/             # Images & visual mockups (e.g. hero_illustration.png)
├── components/         # Reusable UI component blocks
│   ├── Navbar.jsx      # Responsive glassmorphic navigation
│   ├── Hero.jsx        # Name intro, metrics, and workstation mockup
│   ├── About.jsx       # Academic timeline & professional biography
│   ├── Skills.jsx      # Categorized skill grids & custom inline SVGs
│   ├── Projects.jsx    # Projects feed linked to Redux store
│   ├── Contact.jsx     # Contact coordinates & interactive forms
│   └── ScrollToTop.jsx # Router helper resetting window scroll height
├── pages/              # Router page-level wrappers
│   ├── Home.jsx
│   ├── AboutPage.jsx
│   ├── SkillsPage.jsx
│   ├── ProjectsPage.jsx
│   └── ContactPage.jsx
├── store/              # Central Redux Toolkit store configurations
│   ├── index.js        # Root store configuration
│   ├── projectsSlice.js# Project catalog and visual states
│   └── contactSlice.js # Form submission lifecycle slice
├── App.jsx             # Routes controller & layout ambient glow wrappers
├── index.css           # Tailwind v4 import, custom scrollbars & animations
└── main.jsx            # DOM mounting & Provider context wrappers (Redux + Router)
```

---

## 💻 Local Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shankara11y/shankarportfolio.git
   cd shankarportfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Compile Production Build**:
   ```bash
   npm run build
   ```
   This compiles static optimized bundles to the `dist/` folder.

---

## 🚀 How to Deploy Updates

To deploy changes (like changing resume PDF or project details) directly to the live GitHub Pages website:

```bash
npm run deploy
```
*This command runs the `"predeploy"` script (`npm run build`) and uses the `gh-pages` module to push the `dist/` folder content to your remote `gh-pages` branch on GitHub automatically.*
