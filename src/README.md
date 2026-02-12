# OpenClaw Private Setup — Landing Page

A premium landing page for OpenClaw Private Setup service.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with fonts & metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Button.tsx       # Primary & secondary button variants
│   ├── BenefitCard.tsx  # Feature/benefit cards
│   ├── ProcessStep.tsx  # Step component for process section
│   ├── ChecklistItem.tsx # Checkmark list items
│   ├── Accordion.tsx    # FAQ accordion
│   ├── NavBar.tsx       # Fixed navigation bar
│   ├── Footer.tsx       # Site footer
│   └── index.ts         # Component exports
└── sections/
    ├── Hero.tsx         # Hero section
    ├── Benefits.tsx     # What You Get section
    ├── Process.tsx      # How It Works section
    ├── WhoItsFor.tsx    # Target audience section
    ├── FAQ.tsx          # FAQ section
    ├── FinalCTA.tsx     # Final call-to-action section
    └── index.ts         # Section exports
```

## Design Tokens

All design tokens are configured in `tailwind.config.ts`:

- **Colors:** Deep Navy, Charcoal, Warm Gold, etc.
- **Typography:** Playfair Display (headings), Inter (body)
- **Spacing:** 8px base grid system
- **Shadows:** sm, md, lg, glow variants

## Accessibility

- Semantic HTML structure
- ARIA attributes on interactive elements
- Keyboard navigation support
- Focus visible states
- Respects `prefers-reduced-motion`
- WCAG AA color contrast compliance

## Deployment

This project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

## Next Steps

- Replace `#contact` links with Cal.com scheduling integration
- Add analytics (Plausible, PostHog, etc.)
- Add optional cookie consent if needed
