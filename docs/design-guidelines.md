# Portfolio Design Guidelines

Design system for a personal portfolio aimed at hiring teams in big tech. Follow these rules exactly when designing or building any page, component, or asset for this portfolio. If something is not covered here, choose the quieter, simpler option.

## 1. Personality

- **Warm, precise, a little quirky.** The page should feel crafted and confident, not loud.
- **Readability comes first.** Reviewers skim in under a minute, so personality lives in the details (headline type, one accent color, small mono labels), never at the cost of clarity.
- **It must not look like a generic template or like Claude's own interface.** Avoid default blue/purple gradients, rounded white cards with drop shadows, stock 3D illustrations, and classic book serifs.

## 2. Colors

### Light mode (default)

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#F3F1EC` | Page background (warm off-white) |
| `--color-text` | `#16161A` | Headlines and body text (near-black) |
| `--color-muted` | `#6B6B70` | Secondary text, metadata, captions |
| `--color-accent` | `#6B7A3A` | Olive accent: highlighted headline words, large text, icons, decorative lines |
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
- **Use olive sparingly.** Use it for at most one highlighted word per headline, links, and small labels; it must never be a large background fill.
- **Contrast:** `#6B7A3A` on the background is about 4.1:1, so it is only allowed for text 24px or larger (or bold 19px or larger). Use `#56632C` for smaller olive text, which is about 5.8:1.
- **No gradients, glows, or neon.** Shadows are avoided; separate elements with thin lines and whitespace instead.

## 3. Typography

| Role | Font | Weights | Use |
|---|---|---|---|
| Display | **Fraunces** (variable) | 300–500, usually 400 | Headlines (h1, h2), big statements |
| Body | **Onest** | 400, 500 | Paragraphs, UI text, project titles, buttons |
| Mono | **Martian Mono** | 400 | Small labels, dates, roles, tech stacks, section numbers, code |

All three fonts are free on Google Fonts.

### Fraunces settings (important)

Always set these variable-font axes. They give Fraunces its soft, quirky character and keep it from looking like a classic book serif.

```css
font-variation-settings: 'SOFT' 100, 'WONK' 1;
```

The `opsz` (optical size) axis is applied automatically by the browser based on font size, so leave it unset.

### Type scale

| Element | Font | Desktop | Mobile | Line height | Letter spacing |
|---|---|---|---|---|---|
| h1 (hero) | Fraunces 400 | 56px | 36px | 1.05 | -0.02em |
| h2 (section) | Fraunces 400 | 36px | 28px | 1.1 | -0.02em |
| h3 (project title) | Onest 500 | 20px | 18px | 1.3 | -0.01em |
| Body | Onest 400 | 17px | 16px | 1.6 | 0 |
| Small body | Onest 400 | 15px | 15px | 1.5 | 0 |
| Label / meta | Martian Mono 400 | 12px | 12px | 1.4 | 0 |

### Typography rules

- **Two weights per font at most.** Never use bold 700+ in Onest.
- **Use the italic Fraunces sparingly.** Italic plus olive is reserved for the single emphasized word in a headline, for example: "I build systems that *quietly* scale."
- **Sentence case everywhere**, except optionally the mono labels.
- **Line length:** keep body text to about 65 characters (`max-width: 65ch`).
- **Separators in mono lists:** use ` · ` (middle dot), for example "Go · Kubernetes · Postgres".
- **Section labels pattern:** a number and a name in Martian Mono in olive, for example "01 — Selected work".

## 4. Layout and spacing

- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Use only these values.
- **Content width:** max 1080px, centered. Text columns max 65ch.
- **Side padding:** 24px on mobile, 48px on desktop.
- **Section spacing:** 96–128px between major sections on desktop, 64px on mobile.
- **Grid:** 12 columns on desktop, single column on mobile. Asymmetric layouts (for example a label in the left 3 columns, content in the right 9) are encouraged.
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

### Project list item

- A row with a 1px top border in `--color-line`, padded 16–24px vertically.
- The left side holds the project title (Onest 500, 20px).
- The right side holds the year and role in Martian Mono 12px, `--color-muted`.
- On hover, the title turns olive and an arrow slides in 4px. Transitions are 200ms ease-out.

### Tags and tech stacks

- Plain Martian Mono text joined with ` · `. **No pill-shaped badges.**

### Images and screenshots

- Border-radius 2px with a 1px `--color-line` border and no shadow.
- Use real product screenshots or diagrams, not stock photos or 3D illustrations.

### Corners

- Use **2px** border-radius for everything (buttons, images, inputs). Never use large rounded corners or pill shapes.

## 6. Motion

- Keep it subtle: 150–250ms, `ease-out`.
- Allowed effects are color changes, underline thickness, small translations (≤ 8px), and fade-ins on scroll (once, no bouncing).
- **Respect `prefers-reduced-motion`.** Disable all non-essential motion.

## 7. Content patterns

- **Hero:** a mono label (role), a Fraunces headline with one olive italic word, one sentence of Onest body text with a concrete, measurable achievement, then contact links (CV, GitHub, LinkedIn) visible without scrolling.
- **Projects as short case studies.** Each one covers the problem, what I did, and the result, with numbers where possible.
- **Writing tone:** direct, concrete, first person. Avoid buzzwords ("passionate", "leverage", "synergy").

## 8. Do and don't

| Do | Don't |
|---|---|
| Warm off-white background `#F3F1EC` | Pure white or pure black |
| One olive word per headline | Olive backgrounds or many olive elements |
| Thin lines and whitespace | Cards with drop shadows |
| 2px corners | Rounded pills and bubbly shapes |
| Fraunces with SOFT 100 and WONK 1 | Fraunces with default settings, or other serifs |
| Mono for metadata only | Mono for paragraphs |
| Real screenshots and diagrams | Stock photos, 3D blobs, gradients |
| Measurable results | Vague claims and buzzwords |

## 9. Implementation tokens (CSS)

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..500,0..100,0..1;1,9..144,300..500,0..100,0..1&family=Onest:wght@400;500&family=Martian+Mono&display=swap');

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
  --font-display: 'Fraunces', serif;
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
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.05;
  font-variation-settings: 'SOFT' 100, 'WONK' 1;
}

h1 em, h2 em {
  font-style: italic;
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
