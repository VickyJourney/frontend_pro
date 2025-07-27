import { call, put } from "redux-saga/effects";
import API from "../constants/constants";
import {
  fetchItems,
  addItem,
  deleteItem,
  updateItem,
} from "../slice/todosSlice";
import { fetchHelper } from "./helpers";

export function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API.URL_TODO);

    yield put(fetchItems(todos));
  } catch (e) {
    console.log("Error", e);
  }
}

export function* addItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, API.URL_TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: action.payload }),
    });

    yield put(addItem(todo));
  } catch (e) {
    console.log("Error", e);
  }
}

export function* deleteItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
      method: "DELETE",
    });

    yield put(deleteItem(todo));
  } catch (e) {
    console.log("Error", e);
  }
}

export function* updateItemSaga(action) {
  try {
    const todo = yield call(
      fetchHelper,
      `${API.URL_TODO}/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );

    yield put(updateItem(todo));
  } catch (e) {
    console.log("Error", e);
  }
}
