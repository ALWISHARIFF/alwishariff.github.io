# alwishariff.github.io

My portfolio site. Hand-written HTML, CSS and a small amount of JavaScript — no
framework, no build step, no dependencies.

**Live:** https://alwishariff.github.io/

## Why no framework

The site is static content: text, a handful of images, three links that matter. A
framework would add a build pipeline, a dependency tree and a supply chain to serve
fourteen kilobytes of markup. Plain HTML loads in one round trip and will still work
in ten years.

## Structure

```
.
├── index.html              # the whole site
├── assets/
│   ├── css/style.css       # design tokens + layout
│   ├── js/main.js          # year, reveal-on-scroll, active nav (progressive)
│   └── img/
│       ├── akhistenics.png     # screenshot of a live client site
│       ├── victory-design.png  # screenshot of a live client site
│       └── og.png              # 1200x630 social preview
├── .nojekyll               # serve files as-is, skip Jekyll
└── README.md
```

## Design notes

- **Dark editorial** — deep navy ground, one amber accent (`#F2A03D`). The accent
  matches my LinkedIn banner so the two read as one identity.
- **Fraunces** for display, **Inter** for text, **JetBrains Mono** for labels. Serif
  display keeps it from looking like every other developer portfolio.
- **Accessibility**: skip link, visible focus rings, semantic landmarks, `aria-current`
  on the active nav item, screen-reader text on links that open a new tab, alt text on
  every image, and `prefers-reduced-motion` honoured throughout.
- **Progressive enhancement** — content is fully visible with JavaScript disabled. The
  scroll reveal is decoration, and a failsafe reveals everything after 2.5s regardless,
  so a blocked observer can never hide the page.

## Local preview

Open `index.html` directly, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

GitHub Pages, `main` branch, root. Push and it's live.

## Content policy

Everything on this site is real. The client sites link to live deployments; the open
source projects link to their repositories. No invented metrics, no placeholder
testimonials, no stock "500+ happy clients" numbers.

---

© Alwi Shariff · Mombasa, Kenya
