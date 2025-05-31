const timerClock = document.querySelector("p");
let startValue = 5;
let defaultStartValue = startValue;
let intervalId;
const container = document.querySelector("div");
let newP, newButton1, newButton2, buttonContainer;

function setIterator() {
  intervalId = setInterval(() => {
    startValue -= 1;
    updateTimerClock();
  }, 1000);
}

window.onload = () => {
  updateTimerClock();
  setIterator();
  createAdditionalInfo();
};

updateTimerClock = () => {
  if (startValue > 0) {
    const minutes = Math.floor(startValue / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(startValue % 60)
      .toString()
      .padStart(2, "0");
    timerClock.textContent = `${minutes}:${seconds}`;
  } else {
    clearInterval(intervalId);
    timerClock.classList.add("red");
    timerClock.textContent = "00:00";
    showAdditionalInfo();
  }
};

createAdditionalInfo = () => {
  newP = document.createElement("p");
  newP.textContent = "Time over";
  newP.classList.add("red");
  newP.classList.add("hide");
  container.appendChild(newP);

  buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button_container");
  buttonContainer.classList.add("hide");
  newButton1 = document.createElement("button");
  newButton1.textContent = "Restart timer";
  newButton1.classList.add("hide");
  newButton2 = document.createElement("button");
  newButton2.textContent = "Set new timer";
  newButton2.classList.add("hide");
  buttonContainer.appendChild(newButton1);
  buttonContainer.appendChild(newButton2);
  container.appendChild(buttonContainer);

  newButton1.addEventListener("click", () => {
    updateVisibility();
    startValue = defaultStartValue;
    updateTimerClock();
    clearInterval(intervalId);
    setIterator();
  });

  newButton2.addEventListener("click", () => {
    const newTime = prompt("Enter time in seconds");
    if (!isNaN(newTime) && newTime > 0) {
      startValue = parseInt(newTime);
      defaultStartValue = startValue;
      updateVisibility();
      updateTimerClock();
      clearInterval(intervalId);
      setIterator();
    } else {
      alert("Enter valid number greater than 0");
    }
  });

  updateVisibility = () => {
    timerClock.classList.remove("red");
    newButton1.classList.toggle("hide");
    newButton2.classList.toggle("hide");
    newP.classList.toggle("hide");
  };
};

showAdditionalInfo = () => {
  newP.classList.toggle("hide");
  buttonContainer.classList.toggle("hide");
  newButton1.classList.toggle("hide");
  newButton2.classList.toggle("hide");
};
