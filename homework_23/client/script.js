const form = document.querySelector("form");
const btnAdd = document.querySelector(".form__btn");
const userInput = document.querySelector(".form__input");
const list = document.querySelector(".js--todos-wrapper");
let todos = [];
let taskToEdit = null;

const getTodos = async () => {
  const res = await fetch("http://localhost:8080/todos");
  const todos = await res.json();
  return todos;
};

const createTodo = async (name) => {
  const res = await fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  const todo = await res.json();
  return todo;
};

const updateTodo = async (id, name, isDone = false) => {
  const res = await fetch(`http://localhost:8080/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, isDone }),
  });
  const todo = await res.json();
  return todo;
};

const deleteTodo = async (id) => {
  const res = await fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
  });
  const todo = await res.json();
  return todo;
};

window.addEventListener("load", async () => {
  todos = (await getTodos()) ?? [];
  todos.forEach((element) => {
    createTodoElement(element);
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const value = userInput.value;

  if (btnAdd.classList.contains("modifyMode") && taskToEdit) {
    const id = taskToEdit.getAttribute("data-id");
    const updatedTodo = await updateTodo(id, value);
    taskToEdit.querySelector(".todo-item__description").textContent =
      updatedTodo.name;
    btnAdd.textContent = "Додати";
    btnAdd.classList.remove("modifyMode");
    taskToEdit = null;
  } else {
    if (value.trim() !== "") {
      await addTask(value.trim());
    }
    form.reset();
  }
});

async function addTask(name) {
  const todo = await createTodo(name);
  createTodoElement(todo);
  form.reset();
}

function createTodoElement({ name, _id, isDone }) {
  const task = document.createElement("li");
  task.classList.add("todo-item");
  task.setAttribute("data-id", _id);
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

list.addEventListener("click", async (event) => {
  const targetBtn = event.target.getAttribute("data-name");
  const targetTask = event.target.closest("li");
  const targetTaskId = targetTask.getAttribute("data-id");

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
      await deleteTodo(targetTaskId);
      targetTask.remove();
      break;
    case "checkbox":
      targetTask.classList.toggle("todo-item--checked");
      const isDone = targetTask.classList.contains("todo-item--checked");
      await updateTodo(
        targetTaskId,
        targetTask.querySelector(".todo-item__description").textContent,
        isDone
      );
      break;
    default:
      break;
  }
});
