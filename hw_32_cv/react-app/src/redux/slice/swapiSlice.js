import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const people = createSlice({
  name: "people",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    fetchFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearText: (state) => {
      state.items = [];
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, clearText } =
  people.actions;

export const getData = (inputValue) => async (dispatch) => {
  if (!inputValue) return;

  dispatch(fetchStart());

  try {
    const url = `https://swapi.py4e.com/api/${inputValue}/`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const payload = Array.isArray(data.results) ? data.results : [data];

    dispatch(fetchSuccess(payload));
  } catch (e) {
    dispatch(fetchFailure(e.message));
    console.error("Fetch error:", e.message);
  }
};
