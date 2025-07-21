import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./slice/todosSlice";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

export default store;
