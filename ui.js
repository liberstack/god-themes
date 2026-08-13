import { themes, themeOrder } from "./config.js";

export function renderWorldPanel(key) {
  const theme = themes[key];
  const panel = document.querySelector("[data-world-panel]");
  if (!panel || !theme) return;

  panel.classList.remove("world--pulse");
  void panel.offsetWidth; // reflow, restarts the entrance animation each time
  panel.classList.add("world--pulse");

  panel.querySelector("[data-world-eyebrow]").textContent = theme.element;
  panel.querySelector("[data-world-title]").textContent = theme.title;
  panel.querySelector("[data-world-creature]").textContent = theme.creature;
  panel.querySelector("[data-world-tagline]").textContent = theme.tagline;
  panel.querySelector("[data-world-description]").textContent = theme.description;
}

export function renderProgressDots() {
  const track = document.querySelector("[data-progress]");
  if (!track) return;

  track.innerHTML = "";
  themeOrder.forEach((key) => {
    const dot = document.createElement("span");
    dot.className = "progress__dot";
    dot.dataset.dotKey = key;
    track.appendChild(dot);
  });
}

export function setActiveDot(key) {
  document.querySelectorAll(".progress__dot").forEach((dot) => {
    dot.classList.toggle("progress__dot--active", dot.dataset.dotKey === key);
  });
}

export function setNextLabel(key) {
  const theme = themes[key];
  const label = document.querySelector("[data-next-label]");
  if (label && theme) {
    label.textContent = theme.name;
  }
}
