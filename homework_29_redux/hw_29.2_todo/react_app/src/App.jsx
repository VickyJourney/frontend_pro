import React from "react";
import { Formik } from "formik";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function App() {
  const initialValues = { name: "" };

  const validateName = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 5) {
      errors.name = "Minimum length is 5 symbols";
    }

    return errors;
  };

  const handleSubmit = () => {};

  return (
    <Provider store={store}>
      <h1>Todo List</h1>
      <Formik
        initialValues={initialValues}
        validate={validateName}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(formikProps) => <TodoForm {...formikProps} />}
      </Formik>
      <ItemsList />
    </Provider>
  );
}

export default App;
