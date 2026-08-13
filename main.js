import { themeOrder } from "./config.js";
import { setTheme } from "./themes.js";
import { renderWorldPanel, renderProgressDots, setActiveDot, setNextLabel } from "./ui.js";

let index = 0;

function currentKey() {
  return themeOrder[index % themeOrder.length];
}

function nextKey() {
  return themeOrder[(index + 1) % themeOrder.length];
}

function show(key) {
  setTheme(key);
  renderWorldPanel(key);
  setActiveDot(key);
  setNextLabel(nextKey());
}

function advance() {
  index += 1;
  show(currentKey());
}

function init() {
  renderProgressDots();
  show(currentKey());

  document.querySelector("[data-next]")?.addEventListener("click", advance);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      event.preventDefault();
      advance();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
