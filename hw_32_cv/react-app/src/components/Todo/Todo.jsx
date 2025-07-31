import { Container } from "@mui/material";
import Form from "./Form";
import List from "./List";

const Todo = () => (
  <Container sx={{ flexGrow: 1 }}>
    <Form />
    <List />
  </Container>
);

export default Todo;
