const userList = document.querySelector(".list");
const userInput = document.getElementById("newTask");
const btnAddTask = document.getElementById("addTask");

btnAddTask.addEventListener("click", () => addNewElement());

function addNewElement() {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.textContent = userInput.value;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  newLi.appendChild(newSpan);
  newLi.appendChild(removeBtn);
  userList.appendChild(newLi);
  userInput.value = "";
}

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addNewElement();
  }
});

userList.addEventListener("click", (event) => {
  const target = event.target;
  const parent = target.parentNode;
  if (target.tagName === "BUTTON") {
    userList.removeChild(parent);
  }
});
