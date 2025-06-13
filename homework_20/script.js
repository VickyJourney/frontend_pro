let todos = [];
let taskToEdit = null;

$(document).ready(function () {
  todos = getCurrentState() ?? [];
  todos.forEach((element) => {
    createTodoElement(element);
  });
});

$("form").on("submit", (event) => {
  event.preventDefault();

  value = $(".form__input").val();

  if ($(".form__btn").hasClass("modifyMode") && taskToEdit) {
    updateTask(value);
    $(".form__btn").text("Add");
    $(".form__btn").removeClass("modifyMode");
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
  $("form").trigger("reset");
}

function createTodoElement({ name, uuid, isDone }) {
  const task = document.createElement("li");
  $(task).addClass("todo-item");
  $(task).attr("data-uuid", uuid);
  const span = document.createElement("span");
  $(span).addClass("todo-item__description");
  $(span).attr("data-name", "name");
  $(span).text(name);
  $(span).css("cursor", "pointer");

  const checkbox = addCheckbox("checkbox");

  $(task).append(
    checkbox,
    span,
    addBtnToTask("Edit", "edit"),
    addBtnToTask("Delete", "delete")
  );

  if (isDone) {
    $(task).addClass("todo-item--checked");
    checkbox.checked = true;
  }
  $(".js--todos-wrapper").append(task);
}

function updateTask(newValue) {
  if (!taskToEdit) return;

  const uuid = $(taskToEdit).attr("data-uuid");
  $(taskToEdit).find(".todo-item__description").text(newValue);
  todos = todos.map((todo) =>
    todo.uuid === uuid ? { ...todo, name: newValue } : todo
  );

  saveCurrentState(todos);
  $("form").trigger("reset");
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
  $(checkbox).prop("type", "checkbox");
  $(checkbox).attr("data-name", textAttribute);

  return checkbox;
}

function addBtnToTask(textBtn, textAttribute) {
  const btnRemove = document.createElement("button");
  $(btnRemove).addClass("todo-item__btn");
  $(btnRemove).text(textBtn);
  $(btnRemove).attr("data-name", textAttribute);

  return btnRemove;
}

$(".js--todos-wrapper").on("click", function (event) {
  const targetBtn = event.target.getAttribute("data-name");
  const targetTask = event.target.closest("li");
  const targetTaskUuid = targetTask.getAttribute("data-uuid");

  switch (targetBtn) {
    case "name":
      const currentTodo = todos.find(
        (element) => element.uuid === targetTaskUuid
      );
      $("#modal-task-description").text(currentTodo.name);
      $("#exampleModal").modal("show");
      break;
    case "edit":
      $(".form__input").trigger("focus");
      $(".form__input").val(
        $(targetTask).find(".todo-item__description").text()
      );
      $(".form__btn").addClass("modifyMode");
      $(".form__btn").text("Modify");
      taskToEdit = targetTask;
      break;
    case "delete":
      $(targetTask).trigger("remove");
      todos = todos.filter((element) => element.uuid !== targetTaskUuid);
      saveCurrentState(todos);
      break;
    case "checkbox":
      $(targetTask).toggleClass("todo-item--checked");
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
