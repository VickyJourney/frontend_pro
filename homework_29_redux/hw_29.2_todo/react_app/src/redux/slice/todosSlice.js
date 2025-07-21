import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = todos.actions;
export default todos.reducer;
export { todos };
