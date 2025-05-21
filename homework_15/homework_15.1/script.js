const form = document.querySelector("form");
const btnAdd = document.querySelector(".form__btn");
const userInput = document.querySelector(".form__input");
const list = document.querySelector(".js--todos-wrapper");
let todos = [];

window.addEventListener("load", () => {
  todos = getCurrentState() ?? [];
  todos.forEach((element) => {
    createTodoElement(element);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  value = userInput.value;
  uuid = crypto.randomUUID();

  addTask(value, uuid);
});

function addTask(name, uuid) {
  const todo = {
    name,
    uuid,
    isDone: false,
  };
  todos = [...todos, todo];
  saveCurrentState(todos);
  createTodoElement(todo);
  form.reset();
}

function createTodoElement({ name, uuid, isDone }) {
  const task = document.createElement("li");
  task.classList.add("todo-item");
  task.setAttribute("data-uuid", uuid);
  const span = document.createElement("span");
  span.classList.add("todo-item__description");
  span.textContent = name;

  const checkbox = addCheckbox("checkbox");

  task.appendChild(checkbox);
  task.appendChild(span);
  // task.appendChild(addBtnToTask("Edit", "edit"));
  task.appendChild(addBtnToTask("Видалити", "delete"));
  if (isDone) {
    task.classList.add("todo-item--checked");
    checkbox.checked = true;
  }
  list.appendChild(task);
}

function saveCurrentState(currentTodos) {
  localStorage.setItem("todos", JSON.stringify(currentTodos));
}

function getCurrentState() {
  const todosString = localStorage.getItem("todos");
  return JSON.parse(todosString);
}

function addCheckbox(textAttribute) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("data-name", textAttribute);

  return checkbox;
}

function addBtnToTask(textBtn, textAttribute) {
  const btnRemove = document.createElement("button");
  btnRemove.classList.add("todo-item__btn");
  btnRemove.textContent = textBtn;
  btnRemove.setAttribute("data-name", textAttribute);

  return btnRemove;
}

// function editTask() {
//   const formToEdit = document.createElement("form");
//   formToEdit.classList.add("formToEdit");

//   inputToEdit = document.createElement("input");
//   inputToEdit.type = "text";
//   inputToEdit.value = value;
//   inputToEdit.classList.add("form__input");

//   const btnToEdit = document.createElement("button");
//   btnToEdit.classList.add("form__btn");
//   btnToEdit.textContent = "Редагувати";
//   btnToEdit.setAttribute("data-name", "edit");

//   formToEdit.appendChild(inputToEdit);
//   formToEdit.appendChild(btnToEdit);
//   // list.insertAdjacentElement("afterend", formToEdit);

//   list.appendChild(formToEdit);

//   formToEdit.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const editedInput = inputToEdit.value;
//     const uuid = localStorage.getItem("data-uuid");

//     document.querySelector(`li[data-uuid='${uuid}'] span`).textContent =
//       editedInput;
//   });
// }

list.addEventListener("click", (event) => {
  const targetBtn = event.target.getAttribute("data-name");
  const targetTask = event.target.closest("li");
  const targetTaskUuid = targetTask.getAttribute("data-uuid");

  switch (targetBtn) {
    // case "edit":
    //   editTask();
    //   inputToEdit.focus();
    //   inputToEdit.value = targetTask.querySelector("li").textContent;

    //   localStorage.setItem("data-uuid", targetTaskUuid);
    //   break;
    case "delete":
      targetTask.remove();
      todos = todos.filter((element) => element.uuid === targetTaskUuid);
      saveCurrentState(todos);
      break;
    case "checkbox":
      targetTask.classList.toggle("todo-item--checked");
      const todo = todos.find((element) => element.uuid === targetTaskUuid);
      if (!todo) {
        return;
      }
      todo.isDone = !todo.isDone;
      saveCurrentState(todos);
      break;
    default:
      break;
  }
});
