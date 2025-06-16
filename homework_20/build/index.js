"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if (
    ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r["@@iterator"]
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var todos = [];
var taskToEdit = null;
$(document).ready(function () {
  var _getCurrentState;
  todos =
    (_getCurrentState = getCurrentState()) !== null &&
    _getCurrentState !== void 0
      ? _getCurrentState
      : [];
  todos.forEach(function (element) {
    createTodoElement(element);
  });
});
$("form").on("submit", function (event) {
  event.preventDefault();
  value = $(".form__input").val();
  if ($(".form__btn").hasClass("modifyMode") && taskToEdit) {
    updateTask(value);
    $(".form__btn").text("Add");
    $(".form__btn").removeClass("modifyMode");
    taskToEdit = null;
  } else {
    var uuid = crypto.randomUUID();
    addTask(value, uuid);
  }
});
function addTask(name, uuid) {
  var todo = {
    name: name,
    uuid: uuid,
    isDone: false,
  };
  todos = [].concat(_toConsumableArray(todos), [todo]);
  saveCurrentState(todos);
  createTodoElement(todo);
  $("form").trigger("reset");
}
function createTodoElement(_ref) {
  var name = _ref.name,
    uuid = _ref.uuid,
    isDone = _ref.isDone;
  var task = document.createElement("li");
  $(task).addClass("todo-item");
  $(task).attr("data-uuid", uuid);
  var span = document.createElement("span");
  $(span).addClass("todo-item__description");
  $(span).attr("data-name", "name");
  $(span).text(name);
  $(span).css("cursor", "pointer");
  var checkbox = addCheckbox("checkbox");
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
  var uuid = $(taskToEdit).attr("data-uuid");
  $(taskToEdit).find(".todo-item__description").text(newValue);
  todos = todos.map(function (todo) {
    return todo.uuid === uuid
      ? _objectSpread(
          _objectSpread({}, todo),
          {},
          {
            name: newValue,
          }
        )
      : todo;
  });
  saveCurrentState(todos);
  $("form").trigger("reset");
}
function saveCurrentState(currentTodos) {
  localStorage.setItem("todos", JSON.stringify(currentTodos));
}
function getCurrentState() {
  var todosString = localStorage.getItem("todos");
  return JSON.parse(todosString);
}
function addCheckbox(textAttribute) {
  var checkbox = document.createElement("input");
  $(checkbox).prop("type", "checkbox");
  $(checkbox).attr("data-name", textAttribute);
  return checkbox;
}
function addBtnToTask(textBtn, textAttribute) {
  var btnRemove = document.createElement("button");
  $(btnRemove).addClass("todo-item__btn");
  $(btnRemove).text(textBtn);
  $(btnRemove).attr("data-name", textAttribute);
  return btnRemove;
}
$(".js--todos-wrapper").on("click", function (event) {
  var targetBtn = event.target.getAttribute("data-name");
  var targetTask = event.target.closest("li");
  var targetTaskUuid = targetTask.getAttribute("data-uuid");
  switch (targetBtn) {
    case "name":
      var currentTodo = todos.find(function (element) {
        return element.uuid === targetTaskUuid;
      });
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
      todos = todos.filter(function (element) {
        return element.uuid !== targetTaskUuid;
      });
      saveCurrentState(todos);
      break;
    case "checkbox":
      $(targetTask).toggleClass("todo-item--checked");
      var todo = todos.find(function (element) {
        return element.uuid === targetTaskUuid;
      });
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
