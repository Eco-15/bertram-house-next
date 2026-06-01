# Bertram House Next

Marketing website for John Bertram Homes — non-profit assisted living with two North Shore MA locations (Salem & Swampscott). 27 routes covering community info, care services, memory care, suites, donations, volunteering, careers, and photo gallery.

## Stack

Next.js 16 (App Router) · React 19 · JavaScript (no TypeScript) · Custom CSS (no Tailwind) · Netlify

## Architecture

```
/ (home) — Hero slider, stats, testimonials, services
├── /salem, /swampscott, /residences — Location-specific details
├── /personalized-care, /memory-care, /dining, /activities, /leadership — Services
├── /suite-studio, /suite-one-bedroom, /suite-companion — Suite types
├── /support, /donate, /ways-to-give, /make-a-tribute, /in-kind-donations — Giving
├── /volunteers, /careers — Engagement
├── /life, /testimonials, /blog, /faq — Content
├── /about, /contact, /directions, /supporters — Info
└── /api/contact — Form submission → Google Sheets via Apps Script
```

## Components (15)

| Component | Purpose |
|-----------|---------|
| `Header.js` | Sticky nav with dropdowns, mobile hamburger, "Schedule a Tour" CTA |
| `Footer.js` | Brand info, social links (FB, LinkedIn, Indeed), quick links, locations |
| `HeroSlider.js` | Auto-rotating image carousel (5s fade transitions) |
| `Lightbox.js` | Image gallery modal with keyboard nav (Escape, arrows) |
| `FadeIn.js` | Scroll-triggered fade animation (IntersectionObserver, threshold 0.15) |
| `FadeInLink.js` | Next/Link wrapper with fade-in on scroll |
| `Counter.js` | Animated number counter (counts up on viewport entry) |
| `ScrollToTop.js` | Floating scroll-to-top button (appears after 400px) |
| `ContactForm.js` | Multi-field form with honeypot spam protection, posts to /api/contact |
| `TestimonialCarousel.js` | Rotating testimonials (5s auto-advance, dots + arrows) |
| `TestimonialsGrid.js` | Grid layout for testimonials page |
| `FAQ.js` | Accordion expand/collapse |
| `Tabs.js` | Tabbed content switcher |
| `ActivityCalendars.js` | Location-switcher for Salem/Swampscott activity calendars |
| `JsonLd.js` | Schema.org structured data (Organization, LocalBusiness) |

## Contact Form Pipeline

```
ContactForm (browser) → POST /api/contact → validate (honeypot, required fields, email regex)
    → map field codes to labels → POST to GOOGLE_SHEETS_WEBHOOK_URL
    → Apps Script doPost() → append row to Google Sheet
```

## Apps Script (`apps-script/`)

Google Apps Script deployed as web app. Receives webhook POST from /api/contact, validates optional shared secret, appends row to Sheet with headers: timestamp, name, email, phone, location, service, interest, resident name, how heard, message.

## Design System (globals.css)

- Colors: navy (#06206B), orange (#E3601A), gold (#C5942A)
- Typography: Raleway (headings, uppercase) + Open Sans (body, 16px/1.7)
- Layout: max-width 1200px container
- Animations: `.fade-in` → `.fade-in.visible` scroll transitions

## Environment

```
GOOGLE_SHEETS_WEBHOOK_URL    # Apps Script web app deployment URL
SHEETS_WEBHOOK_SECRET        # Optional shared secret for webhook auth
```
