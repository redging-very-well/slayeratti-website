# Copilot Instructions — Slayeratti Band Website

## Project Overview

This is the official website for **Slayeratti**, a guitar duo who write, sing, and perform original music. The site should showcase the band's identity, music, and upcoming performances while delivering a visually striking, immersive experience.

### Band Identity

- **Name meaning**: "Slayer" means "to do well at" and "atti" is akin to "glitterati". Slayeratti celebrates the excellence of music, life, and everything in between.
- **Members**:
  - Male electric guitar player (blue Fender Stratocaster)
  - Female acoustic guitar player (Taylor acoustic)
- Both members sing and write their own songs.

### Musical Style

The music spans a wide dynamic and emotional range:

- Acoustic fingerpicking and strumming
- Driven electric guitar solos
- Ambient, moody, cinematic pieces
- Fast, high-energy tracks
- Deep, meaningful lyrics — some sad, some joyful
- Rich variety of timbres from delicate acoustic textures to powerful electric tones

---

## Design System

### Visual References

The `design-assets/` folder contains thematic inspiration:

- **`t-shirt-theming.png`** — Ornate botanical illustration with crossed acoustic and electric guitars, surrounded by flowers, ferns, and decorative vines. Elegant serif "slayeratti" typography. White-on-black, hand-drawn/etched art style.
- **`website-theming.png`** — Additional website design direction and mood reference.

Use these as the primary visual north star for all design decisions.

### Color Palette

| Role | Color | Notes |
|------|-------|-------|
| Primary background | Deep black / near-black (`#0a0a0a` – `#121212`) | Moody, cinematic base |
| Secondary background | Dark charcoal (`#1a1a2e` – `#1e1e2e`) | Subtle depth for sections |
| Primary text | Off-white / cream (`#f0ece2` – `#faf7f0`) | Warm, elegant, not harsh white |
| Accent — electric | Stratocaster blue (`#2a6fb0` – `#4a9fd5`) | Inspired by the blue Strat; use for interactive elements, highlights |
| Accent — warm | Gold / amber (`#c9a84c` – `#d4af37`) | Glitterati warmth; use sparingly for emphasis |
| Accent — floral | Muted rose / dusty pink (`#b5667a` – `#c9848e`) | Nods to floral art; use for subtle accents |
| Accent — botanical | Deep sage / forest (`#2d5a3d` – `#4a7c5c`) | Organic, grounding element from vine/fern motifs |

### Typography

- **Headings**: Elegant serif typeface (e.g., Playfair Display, Cormorant Garamond, or similar). Should feel refined and artistic — matching the etched/engraved aesthetic of the design assets.
- **Body text**: Clean, readable sans-serif (e.g., Inter, Source Sans Pro, or similar). Good legibility on all screen sizes.
- **Band name / logo text**: Stylized serif or custom treatment that echoes the ornate design-asset lettering.
- Use generous letter-spacing on headings for an airy, confident feel.

### Visual Motifs & Art Direction

- **Floral / botanical illustrations**: Incorporate vine, fern, and flower elements as decorative borders, dividers, section accents, or background textures. Keep them subtle and elegant — they frame the content, not overwhelm it.
- **Crossed guitars**: The iconic crossed Stratocaster + Taylor acoustic is a core brand mark. Use as a hero element or subtle watermark.
- **Moody cinematic atmosphere**: Think dark backgrounds with soft light, subtle gradients, and atmospheric depth. Parallax scrolling or subtle motion can reinforce this.
- **Fabulous & flamboyant confidence**: The design should feel bold and unapologetic while retaining elegance. Not minimalist — richly textured and detailed.
- **Glitter / shimmer effects**: Subtle particle effects, metallic sheen on text, or light sparkle animations can evoke the "glitterati" feel without being garish.

---

## Website Sections

### 1. Hero / Landing

- Full-viewport immersive hero with atmospheric imagery or video
- Band name prominently displayed with the ornate serif treatment
- Tagline capturing the Slayeratti ethos (celebrating excellence in life and music)
- Subtle animated elements (floating particles, gentle parallax, botanical accents)

### 2. About / Bio

- Dual-focus layout highlighting both members
- Showcase each member's instrument and role
- Tell the story of Slayeratti and what the name means
- Photography or illustrated portraits in the established art style

### 3. Music

- Embedded audio player or links to streaming platforms
- Album/single artwork display
- Track listings with descriptions or lyric snippets
- Visual distinction between acoustic, electric, and ambient tracks if applicable

### 4. Live / Upcoming Performances

- Clean event listing with dates, venues, and ticket links
- Calendar or timeline layout
- Past performances archive (optional)
- Map integration for venue locations (optional)

### 5. Gallery / Visuals

- Photo and video gallery showcasing performances and behind-the-scenes
- Lightbox or modal viewing for media
- Masonry or grid layout that feels curated and editorial

### 6. Contact / Connect

- Social media links (prominent, styled to match aesthetic)
- Booking inquiry form or email link
- Newsletter signup (optional)
- Press kit download (optional)

---

## Technical Requirements

### Responsive Design

- **Mobile-first approach** with fluid scaling to desktop
- Hamburger or slide-out navigation on mobile; elegant horizontal nav on desktop
- Touch-friendly tap targets and swipe interactions on mobile
- Images and media must be optimized for fast loading on all devices
- Test at common breakpoints: 375px (mobile), 768px (tablet), 1024px+ (desktop)

### Performance

- Lazy-load images and media below the fold
- Optimize all assets (compress images, use modern formats like WebP where supported)
- Aim for fast initial paint — defer non-critical CSS/JS
- Keep the site lightweight despite the rich visual design

### Accessibility

- Semantic HTML5 structure
- Sufficient color contrast (especially cream text on dark backgrounds)
- Alt text for all images; ARIA labels for interactive elements
- Keyboard navigable
- Respect `prefers-reduced-motion` for animations

### Hosting — GitHub Pages

This site is hosted on **GitHub Pages**. All architecture and build decisions must respect its constraints:

- **Static output only** — GitHub Pages serves static files. No server-side rendering, backend APIs, or databases at runtime.
- **Build pipeline**: If using a static site generator or bundler (e.g., Jekyll, Astro, Vite, etc.), configure the build output to a `docs/` folder or use a GitHub Actions workflow to deploy from a build artifact.
- **Routing**: GitHub Pages does not support server-side redirects. For single-page app (SPA) routing, include a `404.html` that mirrors `index.html` to handle client-side routes, or use hash-based routing.
- **Base path**: If deployed to `https://<user>.github.io/<repo>/`, assets and links must use relative paths or account for the repository base path.
- **Custom domain**: Support optional custom domain configuration via a `CNAME` file in the deploy root.
- **HTTPS**: GitHub Pages enforces HTTPS by default — all asset references should use protocol-relative or HTTPS URLs.
- **No server-side forms**: Contact or booking forms must use a third-party service (e.g., Formspree, Netlify Forms, Google Forms embed) or a mailto link.

### Code Style

- Clean, well-structured, maintainable code
- Component-based architecture if using a framework
- CSS custom properties for the color palette and typography scale
- BEM or similar naming convention for CSS classes if not using a framework's conventions
- Commented sections for major layout blocks

---

## Content Tone & Voice

When generating copy, descriptions, or placeholder text for the site:

- **Confident and warm** — never arrogant, always inviting
- **Poetic but accessible** — reflect the lyrical depth of the music without being pretentious
- **Celebratory** — embrace the "excellence of life and music" ethos
- **Evocative** — use sensory language that mirrors the musical range (quiet intimacy to electric energy)

---

## Summary of Key Principles

1. **Dark, cinematic, richly textured** — not flat or minimalist
2. **Botanical elegance meets rock confidence** — floral meets Stratocaster
3. **Responsive and performant** — beautiful on every device
4. **Dual identity** — honour both the acoustic and electric sides equally
5. **Celebratory and bold** — this is a band that slays, gloriously
