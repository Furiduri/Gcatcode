# GCatcode - Websites in Guadalajara and Jorge Osvaldo Perez Mendoza's CV

[Español](./README_ES.md) | [English](./README.md)

![GCatcode share image](public/og-gcatcode-en.jpg)

Source code of [gcatcode.com](https://gcatcode.com): the site of **GCatcode**, websites and apps that help businesses in Guadalajara and Zapopan grow, and the CV and portfolio of its owner, Jorge Osvaldo Perez Mendoza, **Software Development Engineer** (Backend, Full Stack Web).

## 📄 Download my Resume

You can find a detailed breakdown of my work experience, skills, and educational background in the following document:

👉 **[Download CV in PDF (English)](./CV%20Jorge%20Osvaldo%20Perez%20Mendoza%20EN.pdf)**

---

## 🌐 About this Project

The site is designed to be fast, accessible, and optimized for search engines (SEO). It is built with a modern static site generation architecture to ensure the best possible response time.

### 🗺️ Site sections

| Section | Spanish (default) | English |
| --- | --- | --- |
| GCatcode landing | `/` | `/en/` |
| CV | `/cv/` | `/en/cv/` |
| Projects | `/projects/` | `/en/projects/` |
| Terms and conditions | `/terminos/` | `/en/terminos/` |
| Privacy notice | `/privacidad/` | `/en/privacidad/` |

### ✨ Features

- **Internationalization (i18n):** Bilingual support (English and Spanish) with one template per route and per-locale translation dictionaries (adding a language means adding a dictionary and registering the locale), plus hreflang alternates in pages and the sitemap. The build fails if the dictionaries drift apart.
- **Search Engine Optimization (SEO):** Comprehensive implementation with Open Graph, dynamic Sitemap, and Twitter Cards. Business pages share a per-locale 1200x630 image whose center square holds the logo, so it still reads well in square link previews such as WhatsApp's.
- **Modern Design:** Responsive and user-friendly interface (Glassmorphism, fluid gradients, and smooth transitions).

### 🛠️ Core Technologies

- **[Astro](https://astro.build/)**: Web framework optimized for speed and content delivery.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first styling through the `@tailwindcss/vite` plugin. Design tokens (colors and fonts) live in `src/styles/global.css`, and only the classes in use end up in the final CSS.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**: Generates the sitemap at build time.
- **[Firebase Hosting](https://firebase.google.com/docs/hosting) + GitHub Actions**: Every pull request gets a preview deployment, and every merge to `main` deploys to production.

---

## 🚀 Installation and Local Execution

If you want to run this project locally, you need Node.js `>= 22.12.0`. Follow these instructions:

1. Clone the repository:

   ```bash
   git clone https://github.com/Furiduri/Gcatcode.git
   cd Gcatcode
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

The site will be available by default at `http://localhost:4321/`, with the routes listed in the site sections table above.

## 🤝 Workflow

Work follows [`AGENTS.md`](./AGENTS.md): one issue per change, one branch per issue, Conventional Commits, and a pull request that the maintainer reviews file by file before merging.

## 📬 Contact

If you want to chat about technology, job opportunities, or my passion for Board Games, feel free to contact me!

- **Email:** contacto@gcatcode.com
- **Live Website:** [gcatcode.com](https://gcatcode.com) (CV at [gcatcode.com/cv](https://gcatcode.com/cv/))
