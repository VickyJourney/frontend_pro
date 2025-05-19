"use strict";

const slider = document.querySelector(".container");
const slides = document.querySelectorAll("img");
let current = 0;
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const dotsContainer = document.querySelector(".dots");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
dotsContainer.addEventListener("click", selectSlide);

function updateCurrentActiveElement(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  document.querySelectorAll(".dot").forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot-active");
    } else {
      dot.classList.remove("dot-active");
    }
  });
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    updateCurrentActiveElement(current);
    removeUnwantedButtons();
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    updateCurrentActiveElement(current);
    removeUnwantedButtons();
  }
}

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

function selectSlide(event) {
  const dot = event.target;
  if (!dot.classList.contains("dot")) {
    return;
  }
  current = Number(dot.dataset.index);
  updateCurrentActiveElement(current);
  removeUnwantedButtons();
}

function removeUnwantedButtons() {
  btnNext.classList.toggle("hide", current >= slides.length - 1);
  btnPrev.classList.toggle("hide", current <= 0);
}

updateCurrentActiveElement(0);
