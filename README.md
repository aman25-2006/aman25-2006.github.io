# Aman Kumar — Personal Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A personal developer portfolio website engineered for **Aman Kumar** (BCA Candidate, Full-Stack & AI Developer, AWS & Google Student Ambassador, Founder @ BrahmaCode). Tailored specifically for high-level software engineering roles and the **TCS Ignite / Smart Hiring** tracks.

---

## 🚀 Live Website & Deployment
- **Live Website**: [https://aman-kumar-portfolio-silk.vercel.app](https://aman-kumar-portfolio-silk.vercel.app)
- **Deployment Platform**: Vercel (Edge CDN, SSL Active)
- **GitHub Repository**: [https://github.com/aman25-2006/aman25-2006.github.io](https://github.com/aman25-2006/aman25-2006.github.io)
- **Local Dev Server**: `http://localhost:3000`

---

## 👨‍💻 Candidate Overview

- **Name**: Aman Kumar
- **Headline**: BCA Candidate (5th Sem, 74.13% Aggregate) | Full-Stack & AI Developer | AWS & Google Student Ambassador | Founder @ BrahmaCode
- **Contact**:
  - 📞 Phone: `+91 9835934494`
  - ✉️ Email: `asiaaman988@gmail.com`
  - 🌐 LinkedIn: [linkedin.com/in/aman-kumar-964a7b34a](https://linkedin.com/in/aman-kumar-964a7b34a)
  - 💻 GitHub: [github.com/aman25-2006](https://github.com/aman25-2006)
  - 📍 Location: Muzaffarpur, Bihar, India

---

## 🛠️ Tech Stack & Key Features

- **Next.js 14 (App Router)**: Fast Server-Side Rendering (SSR) & optimized client hydration.
- **Tailwind CSS**: Custom Deep Obsidian (`#0B0F19`) theme with neon cyan & electric purple glassmorphic aesthetics.
- **Framer Motion**: Smooth micro-interactions, responsive mobile menu drawer, and animated metric counters.
- **Lucide React**: Clean icons for technical skills, verified certifications, and contact channels.
- **Responsive Layout**: Designed for seamless viewing across smartphones, tablets, and high-resolution desktop displays.

---

## 📁 Project Directory Structure

```
├── public/
│   ├── Aman_Kumar_Resume.pdf    # Direct downloadable resume
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css          # Glassmorphism utilities & dark mode styling
│   │   ├── layout.tsx           # SEO metadata & ambient background glows
│   │   └── page.tsx             # Root assembly of all sections
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Hero.tsx             # Main hero with terminal console & tech stack pills
│   │   ├── MetricsBar.tsx       # Quick stats (74.13%, SIH Lead, Seed Funded, 5+ Certs)
│   │   ├── AboutEducation.tsx   # BCA coursework & TCS Ignite alignment
│   │   ├── SkillsGrid.tsx       # Categorized skills matrix with proficiency tags
│   │   ├── ProjectsShowcase.tsx # Filterable projects (Skill Saarthi, YantraOS, BrahmaCode)
│   │   ├── Certifications.tsx   # Verified badges (NPTEL Silver, Oracle, TCS iON, Azure, IBM)
│   │   ├── Leadership.tsx       # AWS Builder, Google Ambassador, SIH Lead, Founder
│   │   ├── ContactSection.tsx   # Direct contact cards & interactive message form
│   │   └── Footer.tsx           # Dynamic copyright, social links & back-to-top
│   └── data/
│       └── portfolioData.ts     # Centralized typed data layer
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aman25-2006/aman25-2006.github.io.git
   cd aman25-2006.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel (Zero Config)

1. Push all code to your GitHub repository:
   ```bash
   git add -A
   git commit -m "feat: complete Next.js portfolio website"
   git push origin main
   ```

2. Open [Vercel Dashboard](https://vercel.com/new).
3. Connect your GitHub account and select `aman25-2006.github.io`.
4. Vercel will automatically detect **Next.js**. Click **Deploy**.
5. Your portfolio will be live in ~60 seconds with SSL and global CDN!

