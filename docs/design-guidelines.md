# Portfolio Design Guidelines

Design system for Jakob Fender's personal portfolio (jakob-fender.ch), aimed at hiring teams in big tech. Follow these rules exactly when designing or building any page, component, or asset for this portfolio. If something is not covered here, choose the quieter, simpler option.

**Keep the existing layout and copy.** The current site structure and all text are final. These guidelines define the visual layer only; do not rewrite, shorten, or restructure content.

## 1. Personality

- **Warm, precise, a little playful.** The page should feel crafted and confident, not loud.
- **Readability comes first.** Reviewers skim in under a minute, so personality lives in the details (the heading font, the one highlighted name, one accent color, small mono labels), never at the cost of clarity.
- **It must not look like a generic template, an AI-generated site, or Claude's own interface.** Avoid default blue/purple gradients, rounded white cards with drop shadows, stock 3D illustrations, and the fonts AI tools keep suggesting (Fraunces, Instrument Serif, Playfair Display, DM Serif, Space Grotesk, Syne, Bricolage Grotesque).

## 2. Colors

### Light mode (default)

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#F3F1EC` | Page background (warm off-white) |
| `--color-text` | `#16161A` | Headings and body text (near-black) |
| `--color-muted` | `#6B6B70` | Secondary text, metadata, captions |
| `--color-accent` | `#6B7A3A` | Olive accent: the highlighted first name, large text, icons, decorative lines |
| `--color-accent-strong` | `#56632C` | Darker olive for **small** accent text (labels, links) to meet contrast |
| `--color-line` | `#D9D6CD` | Dividers and borders |
| `--color-surface` | `#EAE7DF` | Subtle raised areas (code blocks, hover backgrounds) |

### Dark mode (optional, same structure)

| Token | Hex |
|---|---|
| `--color-bg` | `#16161A` |
| `--color-text` | `#F3F1EC` |
| `--color-muted` | `#A3A3A8` |
| `--color-accent` | `#A9B86A` |
| `--color-accent-strong` | `#A9B86A` |
| `--color-line` | `#2E2E33` |
| `--color-surface` | `#1F1F24` |

### Color rules

- **Never use pure white `#FFFFFF` or pure black `#000000`.**
- **Use olive sparingly.** Use it for the highlighted first name, links, and small labels; it must never be a large background fill.
- **Contrast:** `#6B7A3A` on the background is about 4.1:1, so it is only allowed for text 24px or larger (or bold 19px or larger). Use `#56632C` for smaller olive text, which is about 5.8:1.
- **No gradients, glows, or neon.** Shadows are avoided; separate elements with thin lines and whitespace instead.

## 3. Typography

| Role | Font | Weights | Use |
|---|---|---|---|
| Display | **Besley** | 500 | Headings (h1, h2), big statements |
| Name highlight | **Petrona** Italic | 800 | **Only** the first name "Jakob" in the hero heading |
| Body | **Onest** | 400, 500 | Paragraphs, UI text, project titles, buttons |
| Mono | **Martian Mono** | 400 | Small labels, dates, roles, tech stacks, section numbers, code |

All four fonts are free on Google Fonts.

### The name highlight (important)

The first name "Jakob" in the hero heading is the **only** highlighted word on the entire site. It is set in Petrona ExtraBold Italic (800) in `--color-accent`, while the rest of the heading stays in Besley 500 in `--color-text`.

```html
<h1>Hi, I'm <em class="name">Jakob</em> Fender.</h1>
```

- Do not highlight any other word anywhere: no olive, no italics, no Petrona. This includes headings that were previously emphasized, such as "I like building things", which is set entirely in plain Besley 500.
- Do not use Petrona for anything else, and do not use Besley's own italic.
- Keep the name at the same font size as the surrounding heading.

### Type scale

| Element | Font | Desktop | Mobile | Line height | Letter spacing |
|---|---|---|---|---|---|
| h1 (hero) | Besley 500 (name: Petrona 800 Italic) | 56px | 36px | 1.1 | -0.01em |
| h2 (section) | Besley 500 | 36px | 28px | 1.15 | -0.01em |
| h3 (project title) | Onest 500 | 20px | 18px | 1.3 | -0.01em |
| Body | Onest 400 | 17px | 16px | 1.6 | 0 |
| Small body | Onest 400 | 15px | 15px | 1.5 | 0 |
| Label / meta | Martian Mono 400 | 12px | 12px | 1.4 | 0 |

### Typography rules

- **Two weights per font at most.** Never use bold 700+ in Onest.
- **No italics anywhere** except the highlighted first name.
- **Sentence case everywhere**, except optionally the mono labels.
- **Line length:** body text spans the full width of its column (no 65ch cap).
- **Separators in mono lists:** use ` · ` (middle dot), for example "PyTorch · Deep Learning · Knowledge Distillation".
- **Section labels pattern:** a number and a name in Martian Mono in olive, above the section heading, for example "01 — Work" above "Work experience".

## 4. Layout and spacing

- **Keep the existing site layout.** The rules below describe its rhythm; they are not a reason to restructure it.
- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Use only these values.
- **Content width:** max 1080px, centered. Text fills its column.
- **Side padding:** 24px on mobile, 48px on desktop.
- **Section spacing:** 96–128px between major sections on desktop, 64px on mobile.
- **Whitespace is the main separator.** Use 1px `--color-line` rules for lists and section breaks instead of boxes or cards.

## 5. Components

### Links

- Color `--color-accent-strong`, with an underline 1px thick and offset 3px.
- On hover, the underline becomes 2px thick and the text becomes `--color-text`.
- External links get a small arrow ( ↗ ) after the text.

### Buttons

- **Primary:** background `--color-text`, text `--color-bg`, Onest 500 at 15px, padding 12px 20px, border-radius 2px.
- **Secondary:** transparent background, 1px `--color-text` border, same sizing.
- **Hover:** primary changes its background to `--color-accent-strong`; secondary fills with `--color-surface`.
- Use **at most one primary button per view.**

### Timeline entries (work and education)

- Date range in Martian Mono 12px, `--color-muted`.
- Role or degree in Onest 500, institution in Onest 400 `--color-muted`.
- Entries are separated by 1px `--color-line` rules, not cards.

### Project entries

- Title in Onest 500, 20px; dates in Martian Mono 12px, `--color-muted`.
- On hover, the title turns `--color-accent-strong` and an arrow slides in 4px. Transitions are 200ms ease-out.

### Tags and tech stacks

- Plain Martian Mono text joined with ` · `. **No pill-shaped badges.**

### Images and screenshots

- Border-radius 2px with a 1px `--color-line` border and no shadow.
- Prefer real project images (figures, screenshots, diagrams) over generated avatars, stock photos, or 3D illustrations.

### Corners

- Use **2px** border-radius for everything (buttons, images, inputs). Never use large rounded corners or pill shapes.

## 6. Motion

- Keep it subtle: 150–250ms, `ease-out`.
- Allowed effects are color changes, underline thickness, small translations (≤ 8px), and fade-ins on scroll (once, no bouncing).
- **Respect `prefers-reduced-motion`.** Disable all non-essential motion.

## 7. Content

- **Use the site's existing copy verbatim.** Do not rewrite, shorten, or "improve" any text.
- **Hero:** role line ("Research Assistant in AI & ML"), the heading "Hi, I'm Jakob Fender." with the highlighted first name, the summary paragraph, location ("Lucerne, Switzerland"), photo, and GitHub and LinkedIn links.
- **Sections, in order:** 01 — Work (Work experience), 02 — Studies (Education), 03 — Projects (Selected projects), 04 — Coursework (I like building things), 05 — Web demos.

## 8. Do and don't

| Do | Don't |
|---|---|
| Warm off-white background `#F3F1EC` | Pure white or pure black |
| Highlight only the first name "Jakob" | Highlight any other word, including "building" |
| Besley 500 for headings | Besley italic, or other display serifs |
| Petrona 800 Italic for the name only | Petrona anywhere else |
| Thin lines and whitespace | Cards with drop shadows |
| 2px corners | Rounded pills and bubbly shapes |
| Mono for metadata only | Mono for paragraphs |
| Real project images | Generated avatars, stock photos, 3D blobs, gradients |
| Existing copy, unchanged | Rewritten or invented text |

## 9. Implementation tokens (CSS)

```css
@import url('https://fonts.googleapis.com/css2?family=Besley:wght@500&family=Petrona:ital,wght@1,800&family=Onest:wght@400;500&family=Martian+Mono&display=swap');

:root {
  /* Colors */
  --color-bg: #F3F1EC;
  --color-text: #16161A;
  --color-muted: #6B6B70;
  --color-accent: #6B7A3A;
  --color-accent-strong: #56632C;
  --color-line: #D9D6CD;
  --color-surface: #EAE7DF;

  /* Fonts */
  --font-display: 'Besley', Georgia, serif;
  --font-name: 'Petrona', Georgia, serif;
  --font-body: 'Onest', system-ui, sans-serif;
  --font-mono: 'Martian Mono', ui-monospace, monospace;

  /* Spacing */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
  --space-9: 96px;  --space-10: 128px;

  /* Shape and motion */
  --radius: 2px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 200ms;
  --max-width: 1080px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #16161A;
    --color-text: #F3F1EC;
    --color-muted: #A3A3A8;
    --color-accent: #A9B86A;
    --color-accent-strong: #A9B86A;
    --color-line: #2E2E33;
    --color-surface: #1F1F24;
  }
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.6;
}

h1, h2 {
  font-family: var(--font-display);
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.01em;
  line-height: 1.1;
}

/* Remove any emphasis styling inherited from the theme */
h1 em, h2 em, h1 i, h2 i {
  font-family: inherit;
  font-style: normal;
  font-weight: inherit;
  color: inherit;
}

/* The one and only highlight: the first name in the hero */
h1 .name {
  font-family: var(--font-name);
  font-style: italic;
  font-weight: 800;
  color: var(--color-accent);
}

.label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-accent-strong);
}

a {
  color: var(--color-accent-strong);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color var(--duration) var(--ease);
}
a:hover {
  color: var(--color-text);
  text-decoration-thickness: 2px;
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```
