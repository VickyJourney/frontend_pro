const form = document.querySelector("form");
const btnAdd = document.querySelector(".form__btn");
const userInput = document.querySelector(".form__input");
const list = document.querySelector(".js--todos-wrapper");
let todos = [];
let taskToEdit = null;

window.addEventListener("load", () => {
  todos = getCurrentState() ?? [];
  todos.forEach((element) => {
    createTodoElement(element);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  value = userInput.value;

  if (btnAdd.classList.contains("modifyMode") && taskToEdit) {
    updateTask(value);
    btnAdd.textContent = "Додати";
    btnAdd.classList.remove("modifyMode");
    taskToEdit = null;
  } else {
    const uuid = crypto.randomUUID();
    addTask(value, uuid);
  }
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
  task.appendChild(addBtnToTask("Edit", "edit"));
  task.appendChild(addBtnToTask("Видалити", "delete"));
  if (isDone) {
    task.classList.add("todo-item--checked");
    checkbox.checked = true;
  }
  list.appendChild(task);
}

function updateTask(newValue) {
  if (!taskToEdit) return;

  const uuid = taskToEdit.getAttribute("data-uuid");
  taskToEdit.querySelector(".todo-item__description").textContent = newValue;
  todos = todos.map((todo) =>
    todo.uuid === uuid ? { ...todo, name: newValue } : todo
  );

  saveCurrentState(todos);
  form.reset();
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

list.addEventListener("click", (event) => {
  const targetBtn = event.target.getAttribute("data-name");
  const targetTask = event.target.closest("li");
  const targetTaskUuid = targetTask.getAttribute("data-uuid");

  switch (targetBtn) {
    case "edit":
      userInput.focus();
      userInput.value = targetTask.querySelector(
        ".todo-item__description"
      ).textContent;
      btnAdd.classList.add("modifyMode");
      btnAdd.textContent = "Змінити";
      taskToEdit = targetTask;
      break;
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
