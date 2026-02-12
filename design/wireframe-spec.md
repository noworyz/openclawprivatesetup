# OpenClaw Private Setup — Wireframe Specification

> Complete design specification for frontend implementation.  
> Designer: UI/UX Agent | Version 1.0 | February 12, 2026

---

## Table of Contents

1. [Design System](#design-system)
2. [Component Library](#component-library)
3. [Section Wireframes](#section-wireframes)
4. [Responsive Behavior](#responsive-behavior)
5. [Micro-interactions & Animations](#micro-interactions--animations)
6. [Inspiration References](#inspiration-references)

---

# Design System

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Deep Navy** | `#0A1628` | Primary background, hero section |
| **Charcoal** | `#1A202C` | Secondary backgrounds, cards |
| **Slate** | `#2D3748` | Borders, dividers, subtle elements |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Warm Gold** | `#D4A853` | Primary CTAs, highlights, accents |
| **Gold Hover** | `#E5BC6A` | CTA hover states |
| **Gold Subtle** | `rgba(212, 168, 83, 0.15)` | Soft glows, icon backgrounds |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| **White** | `#FFFFFF` | Primary text on dark, light backgrounds |
| **Off-White** | `#F7F8FA` | Light section backgrounds |
| **Muted Gray** | `#A0AEC0` | Secondary text, captions |
| **Light Gray** | `#E2E8F0` | Borders on light backgrounds |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#48BB78` | Checkmarks, confirmations |
| **Error** | `#F56565` | Error states (form validation) |

---

## Typography

### Font Stack

```css
--font-heading: 'Playfair Display', 'Georgia', serif;
--font-body: 'Inter', 'SF Pro', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Fallback note:** If not using custom fonts, substitute:
- Headings: `Georgia, serif`
- Body: System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)

### Type Scale

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---------|------|----------------|---------------|--------|-------------|----------------|
| **H1 (Hero)** | Heading | 64px / 4rem | 40px / 2.5rem | 600 | 1.1 | -0.02em |
| **H2 (Section)** | Heading | 48px / 3rem | 32px / 2rem | 600 | 1.2 | -0.01em |
| **H3 (Card title)** | Body | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.3 | 0 |
| **Body Large** | Body | 20px / 1.25rem | 18px / 1.125rem | 400 | 1.6 | 0 |
| **Body** | Body | 16px / 1rem | 16px / 1rem | 400 | 1.7 | 0 |
| **Caption** | Body | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 | 0.01em |
| **Small** | Body | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.4 | 0.02em |

---

## Spacing System

Use an 8px base grid. All spacing should be multiples of 8.

```css
--space-1: 4px;    /* Tight: icon gaps */
--space-2: 8px;    /* Small: inline elements */
--space-3: 16px;   /* Medium: component padding */
--space-4: 24px;   /* Large: section padding internal */
--space-5: 32px;   /* Card gaps */
--space-6: 48px;   /* Section padding */
--space-7: 64px;   /* Between sections (mobile) */
--space-8: 96px;   /* Between sections (desktop) */
--space-9: 128px;  /* Hero vertical padding */
```

### Container Widths

| Container | Max Width | Padding (Desktop) | Padding (Mobile) |
|-----------|-----------|-------------------|------------------|
| **Full** | 100% | 0 | 0 |
| **Wide** | 1280px | 64px | 24px |
| **Content** | 960px | 64px | 24px |
| **Narrow** | 680px | 64px | 24px |

---

## Border Radius

```css
--radius-sm: 4px;   /* Buttons, small elements */
--radius-md: 8px;   /* Cards, inputs */
--radius-lg: 16px;  /* Large cards, modals */
--radius-xl: 24px;  /* Feature sections */
--radius-full: 9999px; /* Pills, avatars */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-glow: 0 0 40px rgba(212, 168, 83, 0.15);
```

---

# Component Library

## 1. Button — Primary CTA

```
┌─────────────────────────────────────┐
│  Get Started →                      │
└─────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `$warm-gold` |
| Text Color | `$deep-navy` |
| Font | Body, 16px, 600 weight |
| Padding | 16px 32px |
| Border Radius | 8px |
| Min Width | 200px |
| Hover | Background → `$gold-hover`, subtle lift (`translateY(-2px)`), `$shadow-md` |
| Active | `translateY(0)`, `$shadow-sm` |
| Focus | 2px gold outline, 2px offset |

**Arrow:** Use `→` character (not icon) with 8px left margin. On hover, translate arrow 4px right.

---

## 2. Button — Secondary/Ghost

```
┌─────────────────────────────────────┐
│  Learn More                         │
└─────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | Transparent |
| Border | 1px solid `$slate` |
| Text Color | `$white` or `$deep-navy` (context) |
| Padding | 14px 28px |
| Hover | Border → `$warm-gold`, Text → `$warm-gold` |

---

## 3. Benefit Card

```
┌─────────────────────────────────────────┐
│  ┌────┐                                 │
│  │ 🔒 │  ← Icon (32x32, gold accent)    │
│  └────┘                                 │
│                                         │
│  Your Private AI, Your Rules           │
│  ─────────────────────────             │
│  Your assistant runs on infrastructure │
│  you control. Your data stays yours.   │
│  No shared models, no corporate        │
│  eavesdropping, no compromises.        │
│                                         │
└─────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `$charcoal` or `$white` (depending on section bg) |
| Border | 1px solid `$slate` (dark) or `$light-gray` (light) |
| Border Radius | 16px |
| Padding | 32px |
| Icon Container | 48x48px, `$gold-subtle` background, 12px radius |
| Title | H3, 24px, 24px margin-top from icon |
| Body | Body, 16px, `$muted-gray`, 12px margin-top |
| Hover | Border → `$warm-gold` at 50% opacity, subtle `$shadow-glow` |
| Gap between cards | 32px |

**Icons:** Use Lucide icons or similar line-style set. Stroke width 1.5px. Color: `$warm-gold`.

Suggested icons:
- Benefit 1 (Private): `shield-check` or `lock`
- Benefit 2 (Context): `brain` or `sparkles`
- Benefit 3 (Always On): `clock` or `moon-star`
- Benefit 4 (Zero Friction): `wand-2` or `check-circle`

---

## 4. Process Step

```
      ┌───┐
      │ 1 │  ← Number circle
      └───┘
        │
        │    ← Connecting line (dashed)
        │
┌───────────────────┐
│  Discovery Call   │  ← Step title
│                   │
│  15 minutes. We   │  ← Step description
│  learn how you... │
└───────────────────┘
```

| Property | Value |
|----------|-------|
| Number Circle | 48x48px, border 2px `$warm-gold`, text `$warm-gold`, font 20px 600 |
| Connecting Line | 2px dashed `$slate`, 40px height |
| Title | H3, 20px, 600 weight, 16px below line |
| Time Badge | Caption, 14px, `$warm-gold`, displayed before description |
| Description | Body, 16px, `$muted-gray` |

**Horizontal layout (desktop):** Steps side by side, connecting line becomes horizontal (dashed, centered between circles).

---

## 5. Checklist Item

```
✓  Run a company, fund, or portfolio and need to move faster
```

| Property | Value |
|----------|-------|
| Check Icon | 20x20px, `$success` color, stroke 2px |
| Text | Body, 18px, 400 weight |
| Vertical Spacing | 16px between items |
| Check-to-text gap | 12px |

---

## 6. FAQ Accordion

### Collapsed State
```
┌─────────────────────────────────────────────────────────────┐
│  How is this different from ChatGPT?              [  +  ]  │
└─────────────────────────────────────────────────────────────┘
```

### Expanded State
```
┌─────────────────────────────────────────────────────────────┐
│  How is this different from ChatGPT?              [  −  ]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Those are generic tools trained on the internet. Your      │
│  OpenClaw assistant is private, runs on your infrastructure,│
│  and is configured specifically for how *you* work...       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Container | Full width, border-bottom 1px `$slate` |
| Question | Body, 18px, 500 weight |
| Toggle Icon | 24x24px, `$muted-gray`, rotates 45° on expand |
| Padding | 24px vertical |
| Answer | Body, 16px, `$muted-gray`, 16px top padding, max-width 90% |
| Animation | Height transition 300ms ease, opacity 200ms |

---

## 7. Navigation Bar

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [Logo]                                                    [Get Started] │
└──────────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 72px |
| Background | Transparent initially, `$deep-navy` at 95% opacity on scroll |
| Position | Fixed, top 0, z-index 100 |
| Container | Wide (1280px) |
| Logo | Text "OpenClaw" in heading font, 24px, or SVG mark |
| CTA | Secondary button style (smaller: 12px 24px padding) |
| Blur | `backdrop-filter: blur(12px)` on scroll |
| Transition | Background 300ms ease |

---

## 8. Trust Badge / Supporting Text

```
White-glove setup. Usually live within <24 hours.
```

| Property | Value |
|----------|-------|
| Font | Caption, 14px |
| Color | `$muted-gray` |
| Margin Top | 16px from CTA |
| Optional Icon | Small clock or checkmark, 14px, inline |

---

# Section Wireframes

## Section 1: Hero

### Desktop Layout (1440px viewport)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ [Nav Bar - Fixed, Transparent]                                                   │
│  OpenClaw                                                         [Get Started] │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│                                                                                  │
│                                                                                  │
│                    Your Own AI Chief of Staff.                                   │
│                        Set Up For You.                                           │
│                                                                                  │
│           A private AI assistant that knows your business,                       │
│           manages your chaos, and never sleeps — deployed and                    │
│           configured by experts so you can skip the tech and                     │
│                       get straight to results.                                   │
│                                                                                  │
│                       ┌─────────────────────┐                                    │
│                       │   Get Started →     │                                    │
│                       └─────────────────────┘                                    │
│                                                                                  │
│               White-glove setup. Usually live within <24 hours.                   │
│                                                                                  │
│                                                                                  │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Section Height** | 100vh minimum, content centered |
| **Background** | `$deep-navy` with subtle radial gradient (navy → slightly lighter toward center) |
| **Background Accent** | Subtle gold gradient glow behind headline, very low opacity (5-10%) |
| **Headline** | H1, centered, max-width 800px |
| **Subheadline** | Body Large (20px), centered, max-width 640px, `$muted-gray`, 32px below headline |
| **CTA** | Primary button, centered, 48px below subheadline |
| **Trust Text** | Caption, centered, 16px below CTA |
| **Vertical Padding** | 128px top (below nav), 96px bottom |

### Background Detail

Consider adding one of:
- Subtle noise texture overlay (2-3% opacity)
- Very faint grid pattern (think Linear's aesthetic)
- Animated gradient that slowly shifts (optional, performance consideration)

---

## Section 2: What You Get (Benefits)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│                    Everything Handled. Nothing to Configure.                     │
│                                                                                  │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐│
│   │      🔒         │  │      🧠         │  │      🌙         │  │      ✨     ││
│   │                 │  │                 │  │                 │  │             ││
│   │  Your Private   │  │  Trained on     │  │  Always On,     │  │  Expert     ││
│   │  AI, Your Rules │  │  Your Context   │  │  Always Ready   │  │  Setup      ││
│   │                 │  │                 │  │                 │  │             ││
│   │  Your assistant │  │  We configure   │  │  Email triage   │  │  No APIs.   ││
│   │  runs on infra  │  │  your AI with   │  │  at 2 AM...     │  │  No docs... ││
│   │  you control... │  │  your calendar..|  │                 │  │             ││
│   └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────┘│
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Background** | `$off-white` (light section for contrast) |
| **Section Padding** | 96px vertical |
| **Header** | H2, centered, `$deep-navy`, 64px margin-bottom |
| **Card Grid** | 4 columns desktop, 32px gap |
| **Card Style** | White background, shadow-sm, hover shadow-lg |
| **Container** | Wide (1280px) |

### Card Animation

On scroll into view: cards fade in and translate up (20px) with staggered delay (100ms between cards).

---

## Section 3: How It Works (Process)

### Desktop Layout (Horizontal)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│                       Three Steps. Then You're Live.                             │
│                                                                                  │
│        ┌───┐                    ┌───┐                    ┌───┐                   │
│        │ 1 │ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ 2 │ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ 3 │                   │
│        └───┘                    └───┘                    └───┘                   │
│                                                                                  │
│     Discovery Call            We Build It           You Start Delegating        │
│                                                                                  │
│      15 minutes.              24-<24 hours.              Day one.                 │
│    We learn how you          Our team deploys        Your AI is ready.          │
│    work — your tools,        your private AI,        Handoff call included.     │
│    your style, your          configures your         Ongoing support if         │
│    pain points.              integrations...         you need it.               │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Background** | `$deep-navy` |
| **Section Padding** | 96px vertical |
| **Header** | H2, centered, white, 64px margin-bottom |
| **Step Layout** | 3-column grid, equal widths |
| **Connecting Lines** | Dashed, 2px, `$slate`, vertically centered with number circles |
| **Number Circles** | 48px diameter, centered above each column |
| **Step Titles** | H3, white, centered, 32px below circles |
| **Time Badge** | Caption, `$warm-gold`, centered, 8px below title |
| **Description** | Body, `$muted-gray`, centered, 16px below badge, max-width 280px |
| **Container** | Content (960px) |

---

## Section 4: Who It's For

### Desktop Layout (Two Columns)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│   ┌──────────────────────────────┐    ┌────────────────────────────────────────┐│
│   │                              │    │                                        ││
│   │  Built for People Who        │    │  ✓  Run a company, fund, or portfolio ││
│   │  Don't Have Time to Build It │    │     and need to move faster            ││
│   │                              │    │                                        ││
│   │  OpenClaw Private Setup is   │    │  ✓  Want AI assistance but won't      ││
│   │  for executives, founders,   │    │     spend weekends on setup            ││
│   │  and high-net-worth          │    │                                        ││
│   │  individuals who want the    │    │  ✓  Value privacy and don't want      ││
│   │  leverage of AI without the  │    │     your data in someone else's model ││
│   │  learning curve.             │    │                                        ││
│   │                              │    │  ✓  Already have an EA or chief of    ││
│   │                              │    │     staff — and want to 10x them       ││
│   │                              │    │                                        ││
│   │                              │    │  ✓  Make decisions that are too        ││
│   │                              │    │     important for generic chatbots     ││
│   │                              │    │                                        ││
│   └──────────────────────────────┘    └────────────────────────────────────────┘│
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Background** | `$off-white` |
| **Section Padding** | 96px vertical |
| **Layout** | 2 columns, 50/50, 64px gap |
| **Left Column** | Vertically centered |
| **Headline** | H2, `$deep-navy`, left-aligned |
| **Description** | Body Large, `$slate`, 24px below headline, max-width 400px |
| **Right Column** | Checklist, vertically centered |
| **Checklist Item Spacing** | 20px between items |
| **Container** | Content (960px) |

---

## Section 5: FAQ

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│                            Questions We Get                                      │
│                                                                                  │
│   ┌────────────────────────────────────────────────────────────────────────────┐│
│   │  How is this different from ChatGPT or other AI assistants?          [+]  ││
│   └────────────────────────────────────────────────────────────────────────────┘│
│   ┌────────────────────────────────────────────────────────────────────────────┐│
│   │  What do I need to provide?                                          [+]  ││
│   └────────────────────────────────────────────────────────────────────────────┘│
│   ┌────────────────────────────────────────────────────────────────────────────┐│
│   │  Is my data private?                                                 [+]  ││
│   └────────────────────────────────────────────────────────────────────────────┘│
│   ┌────────────────────────────────────────────────────────────────────────────┐│
│   │  How long until I'm up and running?                                  [+]  ││
│   └────────────────────────────────────────────────────────────────────────────┘│
│   ┌────────────────────────────────────────────────────────────────────────────┐│
│   │  What if I need help after setup?                                    [+]  ││
│   └────────────────────────────────────────────────────────────────────────────┘│
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Background** | White |
| **Section Padding** | 96px vertical |
| **Header** | H2, centered, `$deep-navy`, 64px margin-bottom |
| **Accordion Container** | max-width 720px, centered |
| **Item Borders** | Top: none on first, 1px `$light-gray` on others |
| **Expand Icon** | Plus sign, rotates to X on expand |
| **Answer Styling** | `$slate` text, slightly indented (left padding 32px) |

### Interaction

- Only one item expanded at a time (optional: allow multiple)
- Smooth height animation (300ms ease-out)
- First item optionally pre-expanded

---

## Section 6: Final CTA

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│                                                                                  │
│                  Ready to Stop Managing and Start Delegating?                    │
│                                                                                  │
│            Book a discovery call. Fifteen minutes now saves you                  │
│                         hundreds of hours later.                                 │
│                                                                                  │
│                   ┌─────────────────────────────────────┐                        │
│                   │   Schedule Your Discovery Call →   │                        │
│                   └─────────────────────────────────────┘                        │
│                                                                                  │
│                No commitment. No credit card. Just a conversation.               │
│                                                                                  │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Background** | `$deep-navy` with subtle gradient |
| **Optional** | Subtle gold gradient glow behind text (10% opacity) |
| **Section Padding** | 128px vertical |
| **Headline** | H2, white, centered |
| **Subtext** | Body Large, `$muted-gray`, centered, 24px below headline, max-width 500px |
| **CTA** | Primary button, centered, 40px below subtext |
| **Trust Text** | Caption, `$muted-gray`, centered, 16px below CTA |
| **Container** | Narrow (680px) |

---

## Footer

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│   OpenClaw                                          © 2026 OpenClaw Private Setup│
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Element | Spec |
|---------|------|
| **Background** | `$charcoal` |
| **Padding** | 32px vertical |
| **Layout** | Flexbox, space-between |
| **Logo** | Same as nav, 20px, `$white` |
| **Copyright** | Caption, `$muted-gray` |
| **Optional Links** | Privacy, Terms (if needed later) |

---

# Responsive Behavior

## Breakpoints

```css
--bp-sm: 640px;   /* Mobile landscape */
--bp-md: 768px;   /* Tablet */
--bp-lg: 1024px;  /* Desktop */
--bp-xl: 1280px;  /* Large desktop */
```

## Mobile Adaptations (< 768px)

### Global Changes
- Container padding: 24px
- Section padding: 64px vertical
- All multi-column layouts → single column stack

### Navigation
- Logo left, hamburger menu right (or just CTA button, no nav links needed)
- Consider hiding nav CTA and relying on section CTAs

### Hero
- H1: 40px
- Subheadline: 18px
- Reduce vertical padding to 96px top, 64px bottom
- Maintain center alignment

### Benefits (What You Get)
- Cards stack vertically, full width
- 24px gap between cards
- Consider showing only 2 cards initially with "Show more" (optional)

### Process (How It Works)
- Steps stack vertically
- Connecting line runs vertically between steps
- Number circle → Title → Description vertically stacked
- Align everything left (not centered)

### Who It's For
- Stack: Headline + Description, then Checklist below
- Both full width
- 48px gap between sections

### FAQ
- Full width accordions
- Slightly smaller question text (16px)
- Touch-friendly tap targets (min 48px height)

### Final CTA
- Reduce padding to 80px vertical
- Button full width (with 24px side margins)

---

## Tablet Adaptations (768px - 1024px)

### Benefits
- 2x2 grid instead of 4 columns

### Process
- Keep horizontal but tighten spacing
- Reduce description max-width

### Who It's For
- Can remain 2-column but reduce gap to 40px

---

# Micro-interactions & Animations

## Scroll Animations (use Intersection Observer)

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headers | Fade in + translate up 20px | 20% visible |
| Benefit cards | Staggered fade in + translate up | 15% visible, 100ms stagger |
| Process steps | Sequential fade in | 20% visible, 150ms stagger |
| Checklist items | Staggered fade in | 10% visible, 80ms stagger |

## Interactive States

| Element | Hover | Active |
|---------|-------|--------|
| Primary CTA | Lift 2px, shadow increase, arrow slides right 4px | Press down, shadow decrease |
| Benefit cards | Border color change, subtle glow | N/A |
| FAQ items | Background subtle darken | Smooth expand |
| Nav (on scroll) | Background fades in with blur | N/A |

## Transition Defaults

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## Performance Notes
- Use `transform` and `opacity` for animations (GPU accelerated)
- Use `will-change` sparingly and only when animating
- Respect `prefers-reduced-motion` — disable all animations if set

---

# Inspiration References

## 1. Linear (linear.app)

**Why reference:** Best-in-class dark mode, elegant gradients, minimal yet premium feel.

**Elements to study:**
- Hero gradient and glow effects
- Typography hierarchy
- Card hover states with subtle borders
- Grid patterns as background texture

## 2. Vercel (vercel.com)

**Why reference:** Developer-focused but broadly premium, excellent use of whitespace.

**Elements to study:**
- Section transitions (light ↔ dark)
- CTA button styling
- Feature grid layouts
- Micro-interactions on scroll

## 3. Pipe (pipe.com)

**Why reference:** Financial/enterprise service with warm, trustworthy aesthetic.

**Elements to study:**
- Warm accent colors on dark backgrounds
- How they convey trust and premium positioning
- Two-column layouts for features
- Typography choices (serif headlines)

---

# Implementation Notes

## Recommended Stack

- **Framework:** Next.js or Astro (for static generation and performance)
- **Styling:** Tailwind CSS (with custom config matching design tokens above)
- **Animations:** Framer Motion or native CSS (for simpler animations)
- **Icons:** Lucide React or Heroicons
- **Fonts:** Google Fonts (Playfair Display + Inter) or self-hosted

## Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible and distinct
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] FAQ accordions use proper ARIA attributes (`aria-expanded`, `aria-controls`)
- [ ] Reduced motion respected
- [ ] Alt text on any images (if added)
- [ ] Semantic HTML (proper heading hierarchy, landmarks)

## Performance Targets

- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Total page weight: < 500KB (excluding fonts)
- Font loading: Use `font-display: swap`

---

# File Checklist for Developer

After implementation, ensure:

```
/
├── components/
│   ├── Button.tsx (primary + secondary variants)
│   ├── BenefitCard.tsx
│   ├── ProcessStep.tsx
│   ├── ChecklistItem.tsx
│   ├── Accordion.tsx
│   ├── NavBar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── Process.tsx
│   ├── WhoItsFor.tsx
│   ├── FAQ.tsx
│   └── FinalCTA.tsx
├── styles/
│   └── globals.css (or tailwind.config.js tokens)
└── pages/
    └── index.tsx
```

---

*Specification version 1.0 — February 12, 2026*
*Designer: UI/UX Agent*

---

## Questions? 

This spec should be comprehensive. If anything is unclear, the designer notes in the original copy doc provide additional context on tone and intent.
