# Bangla Puzzle Task - URL Shortener Landing Page

A modern, high-performance, and responsive URL shortener landing page built with **React 19**, **Tailwind CSS v4**, and **Vite**. Inspired by **thetiny.site**, designed and developed for the Bangla Puzzle frontend evaluation task.

---

## 🚀 Live Demo & Preview

- **Development Server:** `http://localhost:5173`
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (native Vite plugin `@tailwindcss/vite`)

---

## 📋 Features

### 1. Sticky Navigation Bar (`Navbar.jsx`)
- Fixed sticky header (`sticky top-0 z-50`) with frosted glass backdrop blur (`backdrop-blur-md`).
- Brand typography, navigation links, and desktop call-to-action buttons (*Log In*, *Get Started Free*).
- Fully responsive mobile slide-down menu with smooth toggling and accessibility tags.

### 2. Hero Section (`Banner.jsx`)
- Trust badge indicator (*"Trusted by thousands of users"*).
- Bold conversion-focused heading and typography.
- Interactive authentication card with action buttons (*Login to Make URL*, *Sign Up Free*).

### 3. Platform Statistics (`Stats.jsx`)
- High-contrast indigo banner showcasing live platform metrics:
  - **100K+** Links Created
  - **1M+** Total Clicks
  - **180+** Countries
  - **99.9%** Uptime

### 4. Most Popular Links (`PopularLinks.jsx`)
- Real-time clickable short link list with truncated destination URLs.
- **One-click copy to clipboard** with dynamic visual feedback (*"Copied!"* state).
- QR code generation trigger button and click metrics badge.

### 5. Premium Growth Tools (`PremiumSection.jsx`)
- Two-column showcase detailing advanced marketing and developer features:
  - Custom branded short links
  - UTM parameter builder
  - Real-time analytics dashboard
  - QR Code generator (PNG/SVG)
  - REST API with complete documentation
- Interactive purple Link Analytics Dashboard mockup card with proportional metric progress bars.

### 6. Transparent Pricing (`PricingSection.jsx`)
- 3-tier subscription cards: **FREE** ($0/forever), **PRO** ($9/month — featured popular card with subtle elevation), and **BUSINESS** ($29/month).
- Comprehensive feature checklist with dedicated CTA buttons for each tier.

### 7. Social Proof & Feature Highlights (`TestimonialFeature.jsx`)
- **Testimonials Section**: 5-star ratings and authentic user testimonials.
- **Why Choose Our Platform**: 6-card feature grid covering:
  - *Lightning Fast* infrastructure
  - *Detailed Analytics* (clicks, referrers, locations, devices)
  - *Global CDN* for fast redirects
  - *QR Code* generation
  - *Enterprise Security* & malware scanning
  - *Expiration Control* with click limits

### 8. Full Directory Footer (`Footer.jsx`)
- Brand identity with concise company description.
- Complete SVG vector social channels (Facebook, LinkedIn, YouTube, WhatsApp).
- Direct contact details (support email and customer service phone).
- Comprehensive navigation links (*Product* & *Company* columns).
- Legal navigation (*Privacy Policy*, *Refund Policy*, *Cookie Policy*, *Terms & Conditions*) and official copyright (*© 2026 Bangla Puzzle Limited. All rights reserved.*).

---

## 📐 Layout & Spacing Standards

The entire website implements a unified design system:
- **Global Container Width:** `max-w-7xl mx-auto` across all sections, aligning every element to a clean vertical grid.
- **Responsive Gutters:** `px-4 sm:px-6 lg:px-8` ensuring optimal viewing across mobile, tablet, and wide desktop screens.
- **Section Spacing Rhythm:** `py-16 sm:py-20 lg:py-24` with subtle dividing borders (`border-t border-gray-100`).
- **Cards & Elements:** Standardized `rounded-2xl` and `rounded-3xl` radii with soft drop shadows.

---

## 🛠️ Tech Stack

- **UI Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Linting:** [ESLint 9](https://eslint.org/) flat configuration

---

## 📁 Project Structure

```text
bangla-puzzle-task/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/             # Images and template SVGs
│   ├── App.jsx             # Main layout shell
│   ├── Banner.jsx          # Hero section with CTA card
│   ├── Components.jsx      # Combined section container
│   ├── Footer.jsx          # Comprehensive footer with legal & contacts
│   ├── Navbar.jsx          # Sticky header with mobile drawer
│   ├── PopularLinks.jsx    # Popular links list with clipboard copy
│   ├── PremiumSection.jsx  # Feature breakdown & analytics dashboard mockup
│   ├── PricingSection.jsx  # 3-tier pricing tables (Free, Pro, Business)
│   ├── Stats.jsx           # Global platform stats banner
│   ├── TestimonialFeature.jsx # Testimonials and feature grid
│   ├── index.css           # Tailwind v4 import entry point
│   └── main.jsx            # React root DOM renderer
├── eslint.config.js        # ESLint flat config
├── index.html              # HTML entry template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite config with React and Tailwind plugins
└── README.md               # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd bangla-puzzle-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with HMR. |
| `npm run build` | Compiles and optimizes assets into `dist/` for production. |
| `npm run lint` | Runs ESLint to check for code quality and syntax errors. |
| `npm run preview` | Locally serves the production build from `dist/` for testing. |

---

## 🛡️ Code Quality & Verification

The project is tested and verified:
- `npm run lint` passes with **0 errors and 0 warnings**.
- `npm run build` generates optimized production bundles cleanly with **0 build warnings**.

---

## 📄 License

This project was developed for the **Bangla Puzzle Limited** technical assessment. All rights reserved.
