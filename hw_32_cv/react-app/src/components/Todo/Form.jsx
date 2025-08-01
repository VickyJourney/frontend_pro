import {
  Typography,
  Paper,
  InputBase,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../redux/slice/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) return;

    dispatch(addTodo(task.trim()));
    setTask("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          mb: 1,
          textAlign: "center",
          color: "#6e6d6de1",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        Todo List
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "20px",
          border: "1px solid lightblue",
          width: "80%",
          p: "8px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={handleChange}
          placeholder="Type your task"
        ></InputBase>
        <Divider orientation="vertical" sx={{ height: 34, m: 0.5 }} />
        <IconButton color="secondary" sx={{ p: 2 }} type="submit">
          <AddIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default TodoForm;
