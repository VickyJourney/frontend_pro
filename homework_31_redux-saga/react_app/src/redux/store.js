import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./slice/todosSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootsaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
export default store;
