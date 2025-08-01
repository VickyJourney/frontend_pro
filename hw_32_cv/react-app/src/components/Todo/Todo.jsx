import { Container } from "@mui/material";
// import List from "./List";
import TodoForm from "./Form";
import ItemsList from "./List";

const Todo = () => (
  <Container sx={{ flexGrow: 1 }}>
    <TodoForm />
    <ItemsList />
  </Container>
);

export default Todo;
