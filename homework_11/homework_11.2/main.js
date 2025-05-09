const button = document.querySelector(".magicBtn");
const text = document.querySelector(".magicText");

button.addEventListener("click", toggleClassOnElement(text, "textNewColor"));

function toggleClassOnElement(element, className) {
  return () => element.classList.toggle(className);
}
