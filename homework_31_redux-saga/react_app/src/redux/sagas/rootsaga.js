import { all } from "redux-saga/effects";
import {
  watchFetchTodos,
  watchAddTodo,
  watchDeleteTodo,
  watchUpdateTodo,
} from "./watchers";

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchDeleteTodo(),
    watchAddTodo(),
    watchUpdateTodo(),
  ]);
}
