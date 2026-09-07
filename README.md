# ⚡ S Kundhan Rao Pawar — Portfolio

[![React](https://img.shields.io/badge/React-18.x-blue.svg?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black.svg?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, high-performance, and interactive portfolio showcasing engineering at the crossroads of **Data Science, Low-Level Systems Programming, and Embedded IoT Architecture**.

---

## 🌟 Key Highlights & Features

### 🌊🔥 Dual Elemental Themes (Water/Ice vs. Fire)
* **Water / Ice Mode**: Crystalline cyan & glacial blue aesthetics, frost shimmer borders, and cool oceanic particle fields.
* **Fire / Ember Mode**: Blazing oranges, volcanic dark backgrounds, and flickering ember particle animations.
* **Instant Toggle**: Integrated switch in the navigation bar dynamically transforms cards, gradients, and mascot themes.

### 🎮 Interactive Live Simulations
* **Student Performance & Attendance Analytics**: Adjust attendance percentages and weekly study hours via sliders to predict cumulative GPA and academic trajectory based on regression models.
* **Closed-Loop Smart Lighting IoT System**: Real-time slider simulating ambient daylight (Lux) against an LDR sensor, visualizing how C/C++ firmware computes dynamic inverted PWM duty cycles to conserve power.
* **Simulated GitHub Modal**: Inspect simulated repository trees, commit logs, and file structures directly on-page.

### 💻 Deep Code Inspection
* Interactive modal inspector for **Python**, **C**, **C++**, and **Advance C** (custom memory allocators, pointer arithmetic, and sensor register drivers).

### 🤖 Comedic Mascot Tour Guides & Elemental Playground
* **Byte, Sparky, and Prof. Pointer**: Floating interactive companions with contextual commentary, speech bubbles, audio sound-effects synthesized via the Web Audio API, and a random developer joke engine.
* **Infinite Sliding News Ticker**: Smooth continuous marquee highlighting witty developer headlines and campus updates.
* **Elemental Physics Rink**: Interactive sliding puck simulation with low-friction ice gliding and hot-coal particle effects.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 18](https://reactjs.org/) with functional hooks
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-checking)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (smooth spring transitions & exit animations)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Effects**: `canvas-confetti` and native browser **Web Audio API**
* **Bundler & Tooling**: [Vite](https://vitejs.dev/)

---

## the website is live in https://my-website-pi-blue.vercel.app/
## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx            # Academic background & core pillars
│   │   ├── AmbientBackground.tsx       # Theme-reactive floating particles
│   │   ├── CertificationsSection.tsx   # Verified industry credentials
│   │   ├── ContactSection.tsx          # Interactive message transmission form
│   │   ├── Footer.tsx                  # Links, socials, and mascot farewell
│   │   ├── FunnyElementalPlayground.tsx# Interactive sliding puck physics rink
│   │   ├── FunnySlidingTicker.tsx      # Infinite horizontal sliding news ticker
│   │   ├── Hero.tsx                    # Landing view with terminal badge & CTAs
│   │   ├── MascotAvatar.tsx            # Vector mascot representations
│   │   ├── MascotGuide.tsx             # Interactive tour guide dock
│   │   ├── Navbar.tsx                  # Sticky header with theme toggle
│   │   ├── ProjectsSection.tsx         # Showcase with interactive simulators
│   │   └── SkillsSection.tsx           # Bento-grid matrix & code inspector
│   ├── context/
│   │   └── ThemeContext.tsx            # Water-Ice / Fire theme provider
│   ├── data/
│   │   └── portfolioData.ts            # Centralized portfolio content & metadata
│   ├── types.ts                        # TypeScript interfaces and types
│   ├── App.tsx                         # Primary view layout & scroll observer
│   └── main.tsx                        # Root entry point
├── package.json
└── vite.config.ts
