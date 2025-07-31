import { configureStore } from "@reduxjs/toolkit";
import { people } from "./slice/swapiSlice";

const store = configureStore({
  reducer: {
    people: people.reducer,
  },
});

export default store;
