/**
 * Prefix a root-relative path with the configured base path.
 *
 * Production builds use base "/", so paths stay unchanged. Release builds
 * (see .github/workflows/deploy.yaml) are served from /release/<branch>/,
 * so "/projects" must become "/release/<branch>/projects".
 * External URLs, anchors and relative paths are returned as-is.
 */
export function url(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}

/** True when this build is a branch release instead of production. */
export const isRelease = import.meta.env.BASE_URL.replace(/\/$/, "") !== "";
