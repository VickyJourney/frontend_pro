import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import List from "./List";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const formEl = useRef(null);

  useEffect(() => {
    const jsonTodos = localStorage.getItem("todos");
    const todos = jsonTodos ? JSON.parse(jsonTodos) : [];

    setTodos(todos);
  }, []);

  const addItem = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;

    const jsonTodos = localStorage.getItem("todos");
    const parsedTodos = jsonTodos ? JSON.parse(jsonTodos) : [];

    const newTodo = { name: value, done: false };
    const newTodos = [...parsedTodos, newTodo];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    formEl.current.reset();
  };

  const handleDone = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="main-container">
      <h1>ToDoList</h1>
      <Form addItem={addItem} formEl={formEl} />
      <List todos={todos} onDone={handleDone} onDelete={handleDelete} />
    </div>
  );
};

export default TodoApp;
