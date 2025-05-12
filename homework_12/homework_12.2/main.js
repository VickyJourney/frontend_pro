const btnContainer = document.querySelector(".container");

btnContainer.addEventListener("click", function ({ target }) {
  if (target.tagName !== "BUTTON") {
    return;
  }
  const btnColor = target.textContent;
  console.log("User clicked " + btnColor.toLowerCase());
});
