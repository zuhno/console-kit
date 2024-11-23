const $ul = document.querySelector("ul");
const $btns = document.querySelectorAll("button");

let timeoutId = null;

const disableTrigger = new Event("buttonDisable");
const enableTrigger = new Event("buttonEnable");

$ul.addEventListener("click", (e) => {
  if (timeoutId) return;

  if (e.target.tagName === "BUTTON") {
    navigator.clipboard.writeText(e.target.value);
    e.target.innerText = "copied";
    window.dispatchEvent(disableTrigger);
    timeoutId = setTimeout(() => {
      e.target.innerText = "copy";
      window.dispatchEvent(enableTrigger);
      timeoutId = null;
    }, 300);
  }
});

window.addEventListener("buttonDisable", () => {
  $btns.forEach((btn) => {
    btn.style.opacity = 0.5;
    btn.style.pointerEvents = "none";
  });
});
window.addEventListener("buttonEnable", () => {
  $btns.forEach((btn) => {
    btn.style.opacity = 1;
    btn.style.pointerEvents = "initial";
  });
});
