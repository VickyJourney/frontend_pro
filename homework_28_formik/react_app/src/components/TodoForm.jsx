import { useFormikContext, Form, Field } from "formik";
import Input from "./Input";
import Button from "@mui/material/Button";

const TodoForm = () => {
  const { handleSubmit } = useFormikContext();

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
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
