import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../../redux/slice/todosSlice";

describe("Footer", () => {
  it("displays the total number of tasks", () => {
    const mockStore = configureStore({
      reducer: {
        todos: todosReducer,
      },
      preloadedState: {
        todos: {
          items: [
            { id: "1", text: "Task 1", isDone: false },
            { id: "2", text: "Task 2", isDone: true },
            { id: "3", text: "Task 3", isDone: false },
          ],
          isLoading: false,
        },
      },
    });

    render(
      <Provider store={mockStore}>
        <Footer />
      </Provider>
    );

    expect(screen.getByText(/total number of tasks: 3/i)).toBeInTheDocument();
  });
});
