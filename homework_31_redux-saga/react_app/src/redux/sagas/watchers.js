import { takeEvery } from "redux-saga/effects";
import {
  fetchStart,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../slice/todosSlice";
import {
  fetchItemsSaga,
  addItemSaga,
  deleteItemSaga,
  updateItemSaga,
} from "./workers";

export function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

export function* watchAddTodo() {
  yield takeEvery(addTodo.type, addItemSaga);
}

export function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemSaga);
}

export function* watchUpdateTodo() {
  yield takeEvery(updateTodo.type, updateItemSaga);
}
