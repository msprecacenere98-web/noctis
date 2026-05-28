---
name: NOCTIS
description: Fine dining beyond perception — Japanese precision, Western restraint.
colors:
  lacquered-void: "#0A0A0A"
  rice-paper: "#F5F0EB"
  near-white: "#FFFFFF"
  tempered-gold: "#C9A96E"
  carbon-surface: "#1A1A1A"
  deep-border: "#2A2A2A"
  warm-border: "#D5CFC8"
typography:
  display:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "clamp(5rem, 12vw, 14rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "clamp(3rem, 5vw, 7rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "normal"
  title:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "clamp(2.4rem, 4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "15px"
    fontWeight: 300
    lineHeight: 1.85
    letterSpacing: "normal"
  label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "11px"
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: "0.38em"
rounded:
  none: "0"
spacing:
  section: "160px"
  content: "80px"
  element: "28px"
  tight: "14px"
  mobile-section: "80px"
  mobile-content: "24px"
components:
  button-gold:
    backgroundColor: "{colors.tempered-gold}"
    textColor: "{colors.lacquered-void}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-gold-hover:
    backgroundColor: "{colors.near-white}"
    textColor: "{colors.lacquered-void}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-white}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-ghost-hover:
    backgroundColor: "{colors.near-white}"
    textColor: "{colors.lacquered-void}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-submit:
    backgroundColor: "{colors.lacquered-void}"
    textColor: "{colors.rice-paper}"
    rounded: "{rounded.none}"
    padding: "18px 48px"
  button-submit-hover:
    backgroundColor: "{colors.tempered-gold}"
    textColor: "{colors.lacquered-void}"
    rounded: "{rounded.none}"
    padding: "18px 48px"
---

# Design System: NOCTIS

## 1. Overview

**Creative North Star: "The Mineral Interior"**

NOCTIS is not decorated: it is constructed. The visual language belongs to Japanese spatial architecture, not to the fine dining conventions of Mediterranean luxury. Surfaces have mass. Silence is structural, not incidental. When you enter this design system, you are entering a space that was built with the same precision and restraint that governs each dish on the menu.

The system is dark by physical necessity, not by aesthetic trend: a food enthusiast sitting at their screen in the evening, researching a restaurant they already half-desire, needs a room that meets them where they are. The darkness is that room. The gold is not precious, it is mineral, the color of aged brass or tempered stone. The cream appears only where breath is needed: a pause in a long corridor.

This system explicitly rejects every signal of classic Italian fine dining (white marble, ornate gold leaf, soft-focus candlelight, romantic serif lettering on cream) and every SaaS dark-mode reflex (neon accents, gradient glass, glowing UI chrome). The references are closer to the surface quality of a Kengo Kuma interior or a Brutus magazine spread than to any restaurant website.

**Key Characteristics:**
- Zero border-radius across all interactive and structural elements. Sharpness is discipline.
- Single typeface (DM Sans) spanning weight 200 to 800. The range is the hierarchy.
- Gold used as punctuation, never wallpaper. Its rarity is its authority.
- Flat surfaces. No shadows. Depth is achieved through overlay opacity and gradient fades.
- Entrance animations feel like physics: expo out, no bounce, no spring.

## 2. Colors: The Mineral Palette

Four tones, one accent. The palette earns its restraint.

### Primary
- **Lacquered Void** (`#0A0A0A` / `oklch(5% 0.005 75)`): The primary surface. Used as the page background across 70% of the site. This is not generic black — it is warm-tinted, absorptive, like lacquered wood in low light.

### Secondary
- **Rice Paper** (`#F5F0EB` / `oklch(96% 0.007 75)`): The only light surface. Used in the Dishes, Texture, and Reservation sections as a deliberate contrast pause. Never used as a general background for dark-register content.

### Tertiary
- **Carbon Surface** (`#1A1A1A` / `oklch(12% 0.005 75)`): Gallery section background only. One step lighter than Lacquered Void, enough to separate without contrast. Never used for text backgrounds or interactive states.

### Neutral
- **Near-White** (`#FFFFFF`): Text and icons on dark surfaces. Note: future iterations should tint this toward `oklch(99% 0.005 75)` to honor the no-pure-white principle; current state is pure white.
- **Deep Border** (`#2A2A2A`): Structural dividers on dark surfaces. Footer bar, form rules on dark.
- **Warm Border** (`#D5CFC8`): Form field underlines and dividers on Rice Paper sections.
- **Tempered Gold** (`#C9A96E` / `oklch(72% 0.1 75)`): The only chromatic accent. Used for section labels, gold-line dividers, the primary CTA button, carousel navigation arrows, and reservation confirmation elements.

### Named Rules
**The One Touch Rule.** Tempered Gold appears on fewer than 10% of any surface. It marks category labels, functional dividers, and the single primary CTA. When gold appears everywhere, it appears nowhere.

**The Temperature Rule.** Every neutral is warm-tinted toward gold's hue (75° in OKLCH). Cold neutrals — blue-grays, pure blacks, blue-whites — are forbidden. The temperature of the space is consistent throughout.

## 3. Typography

**Display Font:** DM Sans (Google Fonts, sans-serif), weights 200–800

**Character:** A single typeface spanning the full weight axis. The hierarchy is built from contrast within one family: weight 200 for footnotes and brand whispers, weight 800 for the headline that lands like a physical object. No decorative serif, no script, no second family. The restraint is the point.

### Hierarchy
- **Display** (weight 800, `clamp(5rem, 12vw, 14rem)`, line-height 0.9, letter-spacing -0.02em): Hero title only. This scale exists for one element in the entire site. Its negative letter-spacing collapses it into a solid mass. Never reused at lower levels.
- **Headline** (weight 700–800, `clamp(3rem, 5vw, 7rem)`, line-height 1.05): Section-defining titles. "An encounter with the extraordinary." "Ren Takahashi." These carry the emotional weight of each section.
- **Title** (weight 700, `clamp(2.4rem, 4vw, 5rem)`, line-height 1.1): Secondary section titles, reservation heading, gallery heading. Lighter than Headline without losing authority.
- **Body** (weight 300, 15px, line-height 1.85, max ~60ch): All descriptive prose. Weight 300 at 1.85 line-height is deliberately open and unhurried. The text breathes.
- **Label** (weight 300, 11px, letter-spacing 0.38em, uppercase): Section category markers (THE EXPERIENCE, THE CHEF, SIGNATURE DISHES). These are signals, not headings. Their wide tracking is the visual device that separates them from prose.

### Named Rules
**The One Family Rule.** No typeface other than DM Sans is permitted. If the design calls for a contrast or an accent, it is expressed through weight, size, or letter-spacing within the family — never through a second font.

**The Weight Ratio Rule.** Adjacent hierarchy levels must differ by at least one full weight step (e.g., 700 body next to 300 body label is fine; two adjacent elements at weight 300 are not hierarchy, they are noise).

## 4. Elevation

NOCTIS is entirely flat. There are no box-shadows anywhere in the system. Depth is conveyed through three mechanisms only: overlay opacity (RGBA black layers on photography), gradient fades (linear-gradient from Lacquered Void to transparent at image edges), and tonal surface shifts (Lacquered Void / Carbon Surface / Rice Paper as distinct section layers).

### Named Rules
**The No Shadow Rule.** Box-shadow is prohibited. If an element needs to feel elevated, it uses tonal background contrast, not a simulated light source. Shadows communicate a material language (soft, plastic, glowing) that contradicts the mineral identity of this system.

**The Overlay Rule.** Photography is never shown unmodified. All full-bleed images carry at least one overlay: either a solid RGBA layer (typically `rgba(0,0,0,0.35–0.50)`) or a directional gradient fade into the surrounding surface color. This is both aesthetic (materials absorb, not reflect) and functional (text legibility on images).

## 5. Components

### Buttons
Sharp-cornered without exception. The absence of border-radius is a design decision, not an omission.

- **Shape:** 0px radius on all variants
- **Primary (Gold):** Tempered Gold background (`#C9A96E`), Lacquered Void text, padding 14px 32px, font 13px weight 500 letter-spacing 0.15em uppercase. Hover: near-white background.
- **Ghost:** Transparent background, 1px solid near-white border, near-white text, same padding and typography. Hover: near-white fill, Lacquered Void text. Used as secondary action alongside primary.
- **Submit (Form):** Lacquered Void background, Rice Paper text, padding 18px 48px, full width. Hover: Tempered Gold background, Lacquered Void text. The color reversal signals completion.
- **Nav CTA:** Same as Ghost but at 12px weight 300 letter-spacing 0.15em. Reduced visual weight because it lives in the navigation bar.
- **All hover transitions:** `0.3s ease` on background and color only. Never transition border, padding, or size.

### Inputs / Fields
Bottom-border only. No full border, no background fill, no border-radius. The input field is a line, not a box.

- **Style:** 1px solid `#D5CFC8` (Warm Border) on the bottom edge only. Transparent background. Padding 16px 0.
- **Focus:** Bottom border shifts to `#0A0A0A` (Lacquered Void) on focus. No glow, no shadow, no outline.
- **Placeholder:** `rgba(0,0,0,0.30)` text at weight 300.
- **Select:** Custom arrow via SVG background-image. `-webkit-appearance: none` to suppress OS chrome.

### Cards (Dish Cards)
Used only in the scrolling menu carousel. Not a general-purpose container pattern.

- **Shape:** 0px radius, no border, no shadow.
- **Width:** Fixed 300px (desktop), 260px (mobile). Scroll snap alignment start.
- **Image:** 4:5 aspect ratio. On hover, image scales to 1.03 over 0.4s ease. The container clips the overflow — the image grows, the frame stays.
- **Caption:** Number label in Tempered Gold 11px weight 300, dish name 13px weight 500 letter-spacing 0.2em uppercase, description 12px weight 300 `rgba(0,0,0,0.45)`.

### Navigation
Fixed, transparent at top, transitions to `rgba(10,10,10,0.93)` with `backdrop-filter: blur(18px)` when scrolled.

- **Logo:** 14px weight 300 letter-spacing 0.4em uppercase. A whisper of the name, not a declaration.
- **Links:** 12px weight 300 letter-spacing 0.2em uppercase. Hover: opacity drops to 0.45. No underline, no color change.
- **Mobile:** Burger icon (3 horizontal 1px lines) triggers full-screen overlay menu at 26px weight 300 letter-spacing 0.28em. Links hover to Tempered Gold.

### Signature Component: Gold Line Divider
A short horizontal gold rule that precedes every section heading. Implemented as a 1px high element that animates from width 0 to 56px on scroll entry (`transition: width 0.8s ease-out`). It is not decorative — it is a spatial marker, like a scored line in stone.

## 6. Do's and Don'ts

### Do:
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for all entrance animations. It is the expo-out curve that matches the precision of the visual language.
- **Do** apply `prefers-reduced-motion: reduce` to suppress all entrance and scroll animations while preserving static layout.
- **Do** tint every neutral toward hue 75° in OKLCH (warm gold direction). Even borders, overlays, and shadows should carry this temperature.
- **Do** use DM Sans weight 300 for all body copy. Weight 400 is permitted for UI labels and button text only. Weight 200 for purely decorative large-scale text (footer brand name at 32px).
- **Do** separate sections with background color alternation (Lacquered Void / Rice Paper) rather than horizontal rules or dividers.
- **Do** place alt text on all photography. The images carry the entire sensory register of the experience — a screen reader user deserves a sentence that conveys the atmosphere, not just "image of food."
- **Do** use `will-change: transform` on parallax elements and `will-change: left, top` on the custom cursor. These are the two elements where layout-independent compositing is justified.

### Don't:
- **Don't** use border-radius on any element. Not 2px, not 4px. Zero is the doctrine. If rounding feels necessary, the element's structure needs rethinking.
- **Don't** add box-shadow to any element. Depth is expressed through tonal contrast and overlay, never simulated light sources.
- **Don't** use Tempered Gold as a background on large surfaces. It is punctuation only: labels, dividers, one CTA, form success confirmation. The moment it covers more than 10% of a surface it loses its authority.
- **Don't** introduce a second typeface. DM Sans from weight 200 to 800 is the entire typographic system.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent on any element. This is a cross-system absolute ban. Use background tints, full borders, or leading icons instead.
- **Don't** use `background-clip: text` with a gradient. Single solid colors only, expressed through weight and size contrast.
- **Don't** produce anything that reads as Italian fine dining: white marble, gold ornamental serif on cream, candlelight photography, soft-focus romantic tableaux. The visual language is Japanese-Scandinavian material culture, not Mediterranean heritage.
- **Don't** use `ease-in-out` for UI transitions. Ease-out (expo or quart) only. Ease-in-out implies the UI is uncertain about its own direction.
- **Don't** animate CSS layout properties (width, height, padding, margin). Animate transform and opacity only.
