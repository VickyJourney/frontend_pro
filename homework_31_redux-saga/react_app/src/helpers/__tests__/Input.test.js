import App from "../../App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
describe("TodoForm", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("allows typing both letters and numbers into the input", async () => {
    const input = screen.getByLabelText(/name/i);
    const testValue = "Task123";

    await userEvent.clear(input);
    await userEvent.type(input, testValue);

    expect(input).toHaveValue(testValue);
  });

  test("shows 'Required' error when submitting empty input", async () => {
    const input = screen.getByLabelText(/name/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.focus(input);
    fireEvent.blur(input);
    fireEvent.click(addButton);

    const errorMessage = await screen.findByText((content) =>
      content.toLowerCase().includes("required")
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
