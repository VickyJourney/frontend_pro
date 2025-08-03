import React from "react";
import App from "../../App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("App", () => {
  test("component rendered", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const heading = screen.getByText(/todo list/i);
    expect(heading).toBeInTheDocument();
  });
});
