import { configureStore } from "@reduxjs/toolkit";
import { people } from "./slice/swapiSlice";
import { todos } from "./slice/todosSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todos.reducer,
    people: people.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
