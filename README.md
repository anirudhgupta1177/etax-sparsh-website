# eTax Profilling — Website

> **Professional Tax Filing, Simplified.** — The marketing website for eTax Profilling, an India-focused tax-filing brand pairing expert Chartered Accountants with smart AI tools.

![Status](https://img.shields.io/badge/status-live-12C58B?style=flat-square)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-1B4DFF?style=flat-square)
![Build](https://img.shields.io/badge/build-none-0A1633?style=flat-square)
![Theme](https://img.shields.io/badge/theme-light-EEF3FF?style=flat-square)

---

## About

A modern, responsive, light-themed marketing site for the **eTax Profilling** tax-filing brand (a fully rebranded lookalike inspired by [taxbuddy.com](https://taxbuddy.com)). It is built as a **fast static site** — no build step, no framework, zero runtime dependencies — using semantic HTML5, a custom CSS design system driven by design tokens, and vanilla JavaScript.

The brand positioning: expert Chartered Accountants + smart AI tools that file your Income Tax Return accurately, maximise eligible refunds, and keep you compliant — with zero hidden charges.

---

## Features

- **Expert-assisted content** for ITR filing, GST registration & returns, and year-round tax planning.
- **Animated stat counters** that tick up on scroll (IntersectionObserver-driven).
- **Scroll reveals** — cards and sections fade/slide into view with staggered delays.
- **FAQ accordion** — accessible expand/collapse with rotating plus → × icon.
- **Pricing toggle** — switch plan pricing/periods (e.g. one-time vs. annual) without a page reload.
- **AJAX contact form** — submits via [FormSubmit](https://formsubmit.co) with inline success/error status, no page redirect.
- **Cal.com inline booking embed** — book a discovery call directly on the site.
- **Fully responsive** — mobile-first layout with documented grid breakpoints.
- **Accessible** — real heading hierarchy, semantic landmarks, ARIA labels, keyboard-navigable controls, sufficient colour contrast.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | **HTML5** (semantic, accessible) |
| Styling | **CSS3** with custom properties (design tokens), no preprocessor |
| Behaviour | **Vanilla JavaScript** (no framework, no bundler) |
| Fonts | **Google Fonts** — Plus Jakarta Sans (headings), Inter (body) |
| Booking | **Cal.com** inline embed |
| Forms | **FormSubmit** (AJAX) |
| Dependencies | **None** |

---

## Project Structure

```text
Etax-sparsh-website/
├── index.html              # Home
├── services.html           # Services
├── pricing.html            # Pricing
├── about.html              # About
├── contact.html            # Contact (form + Cal.com embed)
├── style-guide.html        # Design system / component reference
├── 404.html                # Not-found page
├── assets/
│   ├── css/
│   │   └── styles.css      # Full design system + component styles
│   ├── js/
│   │   └── main.js         # Nav, reveals, counters, FAQ, pricing toggle, form
│   └── img/
│       └── *.svg           # Logos, icons & illustrative SVG art
├── BRAND_STYLE_GUIDE.md    # Brand voice, colours, typography, usage rules
├── CNAME                   # Custom domain mapping for GitHub Pages
└── .nojekyll               # Disables Jekyll processing on GitHub Pages
```

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, trust stats, service overview, how-it-works steps, testimonials, FAQ, and primary CTAs. |
| **Services** | `services.html` | Detailed breakdown of ITR filing, GST services, tax planning, notice handling & advisory. |
| **Pricing** | `pricing.html` | Transparent plan tiers with a pricing toggle and an included/excluded feature matrix. |
| **About** | `about.html` | Brand story, values, the team, and a milestone timeline. |
| **Contact** | `contact.html` | AJAX contact form, contact tiles (email/phone/address), and the Cal.com inline booking embed. |
| **Style Guide** | `style-guide.html` | Living reference for colours, typography, and reusable UI components. |
| **404** | `404.html` | Friendly not-found page with a route back home. |

---

## Brand

**eTax Profilling** — wordmark rendered as **eTax** + **Profilling** (the second word in brand blue). Tagline: *"Professional Tax Filing, Simplified."* The full voice, tone, colour, and typography guidelines live in **[BRAND_STYLE_GUIDE.md](BRAND_STYLE_GUIDE.md)**.

**Core colours**

| Token | Hex | Role |
|-------|-----|------|
| `--brand-primary` | `#1B4DFF` | Primary blue |
| `--brand-accent` | `#12C58B` | Mint accent |
| `--ink` | `#0A1633` | Headings / dark navy text |

**Typography** — Plus Jakarta Sans for headings, Inter for body. Light theme throughout.

---

## Run Locally

The site is fully static — there's no build step. Serve the repo root with any static server, or simply open `index.html` in a browser.

```bash
# From the repo root
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

```bash
# Alternatives
npx serve .          # Node
php -S localhost:8000 # PHP
```

> Opening `index.html` directly via `file://` works for most things, but relative links and the Cal.com/FormSubmit integrations behave best over `http://`.

---

## Deployment

The site is deployed via **GitHub Pages** from the repository root.

1. Push the repo to GitHub with all files (including `index.html`) at the **root**.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. Wait for the Pages build to finish; the site goes live shortly after.

**Custom domain & Jekyll**

- The `CNAME` file maps the custom domain **`etaxprofilling.com`**. Configure your DNS to point at GitHub Pages, then confirm the domain (and enable **Enforce HTTPS**) under **Settings → Pages**.
- The `.nojekyll` file disables Jekyll so all files (including any starting with `_`) are served as-is.

---

## Contact & Integrations

| Channel | Value |
|---------|-------|
| **Book a call** | [cal.com/anirudh-gupta/discovery-call](https://cal.com/anirudh-gupta/discovery-call) |
| **Email** | [cesgupta100@gmail.com](mailto:cesgupta100@gmail.com) |
| **Phone** | [+91 76978 60789](tel:+917697860789) |
| **Address** | UG2, Rajkamal Apartment, City Centre, Gwalior 474002, India |

> **FormSubmit note:** The contact form uses FormSubmit, which requires a **one-time email activation** the first time the form is submitted. Check the inbox for `cesgupta100@gmail.com` after the first send and click the activation link to start receiving submissions.

---

## Customisation

| What to change | Where |
|----------------|-------|
| **Colours / spacing / radii / shadows** | The `:root` design tokens (CSS custom properties) at the top of `assets/css/styles.css`. Update a token once and it cascades site-wide. |
| **Contact details** | Search-and-replace the email, phone (incl. the `tel:` link), and address across the `.html` files (primarily `contact.html` and the shared footer). |
| **Booking link** | Replace the Cal.com URL `cal.com/anirudh-gupta/discovery-call` in the CTAs and the embed. |
| **Copy / content** | Edit the `<main>` sections of each page directly — content is plain HTML. |
| **Pricing plans** | Edit the `.price-card` blocks in `pricing.html` (and their `data-*` toggle attributes). |
| **Fonts** | Swap the Google Fonts `<link>` in each page `<head>` and update the font-family tokens in `styles.css`. |

---

## Disclaimer

eTax Profilling is an **independent professional service**. It is **not affiliated with, authorised by, or endorsed by the Income Tax Department or the Government of India**. Any refund, savings, or turnaround figures shown on the site are **illustrative examples** and are not guarantees of results.

---

## License & Credits

© eTax Profilling. All rights reserved. Built as a custom static marketing site — HTML5, CSS3, and vanilla JavaScript, with type by Google Fonts (Plus Jakarta Sans & Inter).
