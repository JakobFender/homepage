// Shared by the background dot field (BackgroundDither.astro) and the scene above the footer
// (PilatusScene.astro), so the train, boat and stars line up with the dotted mountain.

// Pilatus as seen from Lucerne, traced from a photo: heights above the lake shore (1 = summit),
// sampled evenly from left to right.
export const PILATUS = [
  0.49, 0.5, 0.5, 0.51, 0.52, 0.54, 0.56, 0.57, 0.57, 0.57, 0.58, 0.59, 0.59, 0.59, 0.6, 0.62, 0.63,
  0.64, 0.64, 0.64, 0.65, 0.66, 0.67, 0.65, 0.66, 0.68, 0.69, 0.7, 0.7, 0.7, 0.72, 0.73, 0.75, 0.76,
  0.76, 0.78, 0.79, 0.8, 0.8, 0.79, 0.79, 0.81, 0.81, 0.83, 0.83, 0.85, 0.87, 0.89, 0.93, 0.93, 0.92,
  0.93, 0.95, 0.95, 0.93, 0.94, 0.93, 0.93, 0.94, 0.96, 0.96, 0.99, 1, 0.96, 0.98, 0.98, 0.99, 0.99,
  0.99, 0.98, 0.96, 0.95, 0.94, 0.94, 0.92, 0.91, 0.91, 0.92, 0.93, 0.93, 0.91, 0.91, 0.89, 0.88,
  0.87, 0.87, 0.87, 0.86, 0.87, 0.87, 0.87, 0.88, 0.87, 0.85, 0.85, 0.82, 0.84, 0.8, 0.78, 0.8, 0.79,
  0.79, 0.78, 0.78, 0.76, 0.75, 0.74, 0.72, 0.71, 0.7, 0.68, 0.66, 0.67, 0.68, 0.67, 0.66, 0.63,
  0.64, 0.64, 0.65, 0.63, 0.67, 0.68, 0.68, 0.69,
];
export const GRID = 4; // CSS px between background dot positions
export const PILATUS_ASPECT = 3; // drawn width as a multiple of the mountain area's height (photo: ~2.5)
export const LAKE = 0.22; // share of the sign-off area at the bottom that is lake

export function sample(profile: number[], t: number) {
  const i = Math.min(Math.max(t, 0), 1) * (profile.length - 1);
  const i0 = Math.floor(i);
  const i1 = Math.min(i0 + 1, profile.length - 1);
  return profile[i0] + (profile[i1] - profile[i0]) * (i - i0);
}

// Ridge height at page x: Pilatus in the middle, low hills easing out towards the edges
export function ridgeAt(x: number, width: number, areaHeight: number) {
  const span = Math.min(width, PILATUS_ASPECT * areaHeight);
  const left = (width - span) / 2;
  const t = (x - left) / span;
  if (t >= 0 && t <= 1) return sample(PILATUS, t);
  // Outside the massif: ease from its edge height down to low hills at the page edge
  const away = t < 0 ? x / left : (width - x) / left; // 1 at the massif, 0 at the page edge
  const ease = (1 - Math.cos(Math.PI * Math.max(0, away))) / 2;
  const low = 0.1;
  return low + (sample(PILATUS, t < 0 ? 0 : 1) - low) * ease;
}

// Mix two #rrggbb colors; falls back to the first color for any other format
export function mix(a: string, b: string, t: number) {
  const parse = (hex: string) => hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)?.slice(1).map((h) => parseInt(h, 16));
  const ca = parse(a);
  const cb = parse(b);
  if (!ca || !cb || t <= 0) return a;
  return `rgb(${ca.map((v, i) => Math.round(v + (cb[i] - v) * t)).join(" ")})`;
}
