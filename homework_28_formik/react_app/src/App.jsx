import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";

function App() {
  const [todos, setTodos] = useState([]);

  const initialValues = { name: "" };

  const validateName = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 5) {
      errors.name = "Minimum lenght is 5 symbols";
    }
    return errors;
  };

  const handleSubmit = (values, actions) => {
    setTodos([...todos, values.name]);
    actions.resetForm();
  };

  return (
    <>
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
      <ItemsList items={todos} />
    </>
  );
}

export default App;
