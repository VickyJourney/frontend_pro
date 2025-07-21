import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const emoji = action.payload;
      state[emoji] = (state[emoji] || 0) + 1;
    },
    reset: () => {
      return {};
    },
  },
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
