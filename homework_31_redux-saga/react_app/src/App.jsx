import React from "react";
import { Formik } from "formik";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/slice/todosSlice";

function App() {
  const dispatch = useDispatch();
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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(addTodo(values.name));
    resetForm();
    setSubmitting(false);
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
      <ItemsList />
      <Footer />
    </>
  );
}

export default App;
