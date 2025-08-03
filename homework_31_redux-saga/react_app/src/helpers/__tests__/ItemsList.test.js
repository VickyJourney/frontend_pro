import React from "react";
import { render, screen } from "@testing-library/react";
import ItemsList from "../../components/ItemsList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../../redux/slice/todosSlice";

describe("ItemsList", () => {
  test("renders tasks from the Redux store", () => {
    const mockStore = configureStore({
      reducer: { todos: todosReducer },
      preloadedState: {
        todos: {
          items: [
            { id: "1", text: "Learn testing", isDone: false },
            { id: "2", text: "Write tests", isDone: true },
          ],
          isLoading: false,
        },
      },
    });

    render(
      <Provider store={mockStore}>
        <ItemsList />
      </Provider>
    );

    expect(screen.getByText(/learn testing/i)).toBeInTheDocument();
    expect(screen.getByText(/write tests/i)).toBeInTheDocument();
  });
});
