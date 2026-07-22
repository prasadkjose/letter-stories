# Letter Stories 

[![Netlify Status](https://api.netlify.com/api/v1/badges/9818157c-d810-4ad6-b218-038707143a3c/deploy-status?style=flat-square)](https://app.netlify.com/sites/prasadkjose/deploys)
[![License](https://img.shields.io/github/license/prasadkjose/letter-stories?style=flat-square)](LICENSE)
[![Repo Size](https://img.shields.io/github/repo-size/prasadkjose/letter-stories?style=flat-square)](https://github.com/prasadkjose/letter-stories)
[![Top Language](https://img.shields.io/github/languages/top/prasadkjose/letter-stories?style=flat-square)](https://github.com/prasadkjose/letter-stories)

[![Live Demo](https://img.shields.io/badge/View%20Live%20Demo-prasadkjose.com-17BB98?style=for-the-badge)](https://prasadkjose.com)

A modern, feature-rich blog and landing page built on the **Andromeda Light Next.js** template — designed for fast performance, beautiful typography, and seamless content management with MDX.

## 🛠️ Tech Stack

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![MDX](https://img.shields.io/badge/MDX-1B1B24?style=flat-square&logo=mdx&logoColor=white)](https://mdxjs.com/)

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (version 18.18 or higher)
- **pnpm** (recommended)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prasadkjose/letter-stories.git
   cd letter-stories
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the site.

### Production Build

```bash
pnpm build
pnpm start
```

## 📝 Features

- **Next.js 16 (App Router)** — The latest React framework with file-based routing, server components, and static generation.
- **React 19** — Leveraging the latest React features for optimal performance.
- **Tailwind CSS v4** — Utility-first CSS framework for rapid UI development.
- **MDX Blog Engine** — Write blog posts in Markdown with embedded JSX components via `next-mdx-remote`.
- **GSAP Animations** — Smooth, high-performance animations for an engaging user experience.
- **Swiper.js** — Touch-friendly sliders and carousels.
- **Syntax Highlighting** — Code blocks rendered with `rehype-highlight` and `react-syntax-highlighter`.
- **Responsive Design** — Fully responsive across all screen sizes.
- **SEO Optimized** — Meta tags, Open Graph images, and semantic HTML.
- **Disqus Comments** — Integrated commenting system for blog posts.
- **Pagination** — Built-in pagination for blog listing pages.
- **Shortcodes** — Reusable MDX components (Accordion, Tabs, Buttons, Notices, Videos, YouTube embeds, etc.).

## ✍️ Adding Content

Blog posts live in `src/content/posts/` as Markdown (`.md`) files with frontmatter:

```markdown
---
title: "My Blog Post"
date: 2026-01-15T10:00:00+00:00
author: "Prasad Koshy Jose"
description: "A brief description of the post"
image: "/images/blog/post-image.jpg"
categories:
  - Technology
tags:
  - nextjs
  - tailwind
---

Post content written in **Markdown** with support for JSX components.
```

## 📁 Project Structure

```
letter-stories/
├── public/                  # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.js        # Root layout
│   │   ├── page.js          # Homepage
│   │   ├── posts/           # Blog routes
│   │   └── [regular]/       # Static pages (about, contact, etc.)
│   ├── config/              # Site configuration (JSON)
│   ├── content/             # MDX/Markdown content
│   │   └── posts/           # Blog posts
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Page layout components
│   │   ├── components/      # Reusable UI components
│   │   ├── partials/        # Partial templates (Header, Footer, etc.)
│   │   └── shortcodes/      # MDX shortcode components
│   ├── lib/                 # Utility functions
│   │   └── utils/           # Helper utilities
│   └── styles/              # Global styles (Tailwind CSS)
├── scripts/                 # Build scripts
│   └── themeGenerator.mjs   # Theme CSS generation
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Prasad Koshy Jose**

[![Website](https://img.shields.io/badge/Website-prasadkjose.com-17BB98?style=for-the-badge)](https://prasadkjose.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prasadkjose)
[![X / Twitter](https://img.shields.io/badge/X-%231DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/prasadkjose)

## 🙏 Acknowledgements

This project is built upon the [Andromeda Light Next.js](https://themefisher.com/products/andromeda-light-nextjs) template by [Themefisher](https://themefisher.com/). Thanks to the Themefisher team for creating and open-sourcing this excellent template.

## 🔗 Quick Links

- [Live Demo](https://prasadkjose.com/letter-stories)
- [GitHub Repository](https://github.com/prasadkjose/letter-stories)
- [Issues](https://github.com/prasadkjose/letter-stories/issues)
- [Pull Requests](https://github.com/prasadkjose/letter-stories/pulls)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS.**