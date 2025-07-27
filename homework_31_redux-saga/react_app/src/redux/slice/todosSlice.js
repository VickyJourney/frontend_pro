import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addTodo: (state) => {
      state.isLoading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    deleteTodo: (state) => {
      state.isLoading = true;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isLoading = false;
    },
    updateTodo: (state) => {
      state.isLoading = true;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      state.isLoading = false;
    },
  },
});

export default todos.reducer;
export { todos };

export const {
  addItem,
  addTodo,
  deleteItem,
  deleteTodo,
  fetchItems,
  fetchStart,
  updateTodo,
  updateItem,
} = todos.actions;
