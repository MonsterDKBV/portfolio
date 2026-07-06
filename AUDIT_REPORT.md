# Visual Audit Report: Original HTML vs Next.js Migration

## Executive Summary
Current Next.js migration has **significant visual deviations** from the original HTML.
Estimated visual diff: **40-60%** - requires complete rewrite.

---

## HERO Section

### Original HTML:
```css
padding: 150px 40px 90px
min-height: 100vh
grid-template-columns: 1.15fr .85fr
gap: 60px
```

### Current Next.js:
```css
pt-20 lg:pt-0  /* ~80px vs 150px */
px-6 lg:px-10  /* 24px/40px vs always 40px */
grid-cols-[1fr,auto]  /* wrong proportions */
gap-12 lg:gap-20  /* 48px/80px vs 60px */
```

### Issues:
| Element | Original | Next.js | Status |
|---------|----------|---------|--------|
| Badge text | "FRONTEND DEVELOPER · БИШКЕК" | "Open to work" | ❌ WRONG |
| Badge style | Mono font, pulsing dot, border | Simple badge | ❌ WRONG |
| H1 font-size | clamp(44px,5.6vw,64px) | text-4xl/5xl/6xl | ❌ WRONG |
| H1 letter-spacing | -.03em | tracking-tight | ⚠️ CLOSE |
| Paragraph color | #a7abac | zinc-400 | ⚠️ DIFFERENT |
| Paragraph font-size | 17px | text-base (16px) | ⚠️ DIFFERENT |
| Paragraph font-weight | 300 | 400 (default) | ❌ WRONG |
| Button icons | None | ArrowDown, Send | ❌ WRONG |
| Button style | Custom gradient borders | Different style | ❌ WRONG |
| Portrait | Real photo with floating chips | Placeholder "ДК" | ❌ MISSING |
| Portrait animation | dsFloat (7s ease-in-out) | None | ❌ MISSING |
| Decorative plates | 3 tilted plates behind | None | ❌ MISSING |
| Deco chips | "React · TS", "Next.js", "production UI" | None | ❌ MISSING |
| Metrics in hero | 3 metrics (2.5 years, 30+, 10+) | Separate section | ❌ WRONG |

---

## NAV Section

### Original HTML:
```css
position: fixed
padding: 18px 40px
border: 1px solid rgba(35,38,42,0)
background: rgba(0,0,0,0)
backdrop-filter: blur(0px)
/* Condenses on scroll */
```

### Issues:
- Missing scroll-based condensing effect
- Missing mobile drawer with animations
- Missing burger menu animation

---

## TECH MARQUEE

### Original HTML:
```css
border-top: 1px solid #17191c
border-bottom: 1px solid #17191c
padding: 20px 0
animation: dsMarquee 34s linear infinite
gap: 44px
font-size: 13px
color: #6b6f72
```

### Current Next.js:
- Animation speed: 40s vs 34s
- Different gap values
- Different styling

---

## SELECTED WORK

### Original:
```css
padding: 110px 40px 60px
section header with description on right
project cards with alternating layouts
proj-grid: .92fr 1.08fr or 1.08fr .92fr
proj-text padding: 38px 34px
proj-media padding: 30px
```

### Issues:
- Different padding values
- Different card structure
- Missing code snippet visualizations
- Missing alternating layouts

---

## COLOR PALETTE (Must Match Exactly)

| Name | Hex | Usage |
|------|-----|-------|
| Background | #000000 | Body, sections |
| Foreground | #f0f0f0 | Main text |
| Violet primary | #9281f7 | Accents, dots |
| Violet light | #baa7ff | Highlights |
| Violet bg | rgba(146,129,247,.10) | Chip backgrounds |
| Border dark | #17191c | Section separators |
| Border light | #1c1f22 | Card borders |
| Border mid | #23262a | Nav, inputs |
| Border light | #2b2f34 | Hover states |
| Text muted | #a7abac | Paragraphs |
| Text secondary | #a1a4a5 | Less important |
| Text label | #6b6f72 | Labels |
| Text dark | #8a8e90 | Captions |

---

## FONTS

### Required:
- Geist: 300, 400, 500, 600
- Geist Mono: 400, 500
- Instrument Serif: 400 italic (for "интересным задачам")

### Issues:
- Missing Instrument Serif for italic accent
- Font weights not precisely applied

---

## ANIMATIONS

### Required:
```css
@keyframes dsFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes dsMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes dsPulse {
  0%,100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

---

## RESPONSIVE BREAKPOINTS

### Original:
- 1024px: hero-grid gap 40px
- 900px: hero-grid 1fr, mobile layout
- 768px: sect padding 22px, nav changes
- 640px: process-grid 1fr, contact-btns full width
- 400px: portrait max-width 300px

### Next.js:
- Using Tailwind defaults (sm: 640, md: 768, lg: 1024, xl: 1280)
- Different breakpoint values

---

## ACTION REQUIRED

1. **Extract exact inline styles from original** - in progress
2. **Rewrite all components pixel-perfectly**
3. **Add missing sections**: full portrait, metrics in hero
4. **Add missing animations**: dsFloat, dsPulse
5. **Fix responsive breakpoints**
6. **Set up Playwright visual regression**
