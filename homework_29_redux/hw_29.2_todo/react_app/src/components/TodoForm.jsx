import { useFormikContext, Form, Field } from "formik";
import Input from "./Input";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { todos } from "../redux/slice/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { values, resetForm } = useFormikContext();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      todos.actions.addItem({
        id: +new Date(),
        text: values.name,
      })
    );

    resetForm();
  };

  return (
    <Form onSubmit={onFormSubmit} className="form_container">
      <Field name="name" label="name" component={Input} />
      <Button type="submit" variant="outlined" className="btn">
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;
