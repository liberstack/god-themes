import { themes } from "./config.js";

let currentTheme = null;
let activeLayer = "a";

export function getCurrentTheme() {
  return currentTheme;
}

export function setTheme(key) {
  const theme = themes[key];
  if (!theme) return;

  currentTheme = key;

  const root = document.documentElement;
  const body = document.body;

  body.dataset.theme = key;

  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-soft", theme.accentSoft);
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--ink", theme.ink);

  // typography: each god carries its own display face, weight, tracking
  root.style.setProperty("--font-display", theme.fontDisplay);
  root.style.setProperty("--title-weight", theme.titleWeight);
  root.style.setProperty("--title-tracking", theme.titleTracking);
  root.style.setProperty("--tagline-style", theme.taglineStyle);

  // crossfade: swap which of the two backdrop layers is on top
  const nextKey = activeLayer === "a" ? "b" : "a";
  const incoming = document.querySelector(`[data-backdrop="${nextKey}"]`);
  const outgoing = document.querySelector(`[data-backdrop="${activeLayer}"]`);

  if (incoming) {
    incoming.style.backgroundImage = `url("${theme.image}")`;
    incoming.classList.add("backdrop--visible");
  }
  if (outgoing) {
    outgoing.classList.remove("backdrop--visible");
  }

  activeLayer = nextKey;

  document.dispatchEvent(new CustomEvent("theme-changed", { detail: key }));
}
