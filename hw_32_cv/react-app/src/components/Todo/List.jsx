import {
  Box,
  Stack,
  Chip,
  Checkbox,
  TextField,
  Button,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  fetchStart,
  deleteTodo,
  updateTodo,
} from "../../redux/slice/todosSlice";
import Item from "./Item";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  useEffect(() => {
    if (editId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  const handleDelete = (id) => dispatch(deleteTodo(id));
  const handleToggle = (todo) =>
    dispatch(updateTodo({ ...todo, isDone: !todo.isDone }));
  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };
  const handleSave = (item) => {
    dispatch(updateTodo({ ...item, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <Box sx={{ mt: "20px" }}>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        {items.map((item) => (
          <Item
            key={item.id}
            sx={{ border: "1px solid lightblue", width: "80%" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Checkbox
                checked={item.isDone}
                onChange={() => handleToggle(item)}
              />
              <Box sx={{ flexGrow: 1 }}>
                {editId === item.id ? (
                  <TextField
                    fullWidth
                    inputRef={inputRef}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSave(item);
                    }}
                  />
                ) : (
                  <ListItemText
                    primary={item.text}
                    sx={{
                      textDecoration: item.isDone ? "line-through" : "none",
                    }}
                  />
                )}
              </Box>
              {editId === item.id ? (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleSave(item)}
                  sx={{ ml: 1 }}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => handleEdit(item)}
                  sx={{ ml: 1 }}
                >
                  Edit
                </Button>
              )}
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(item.id)}
                sx={{ ml: 1 }}
                disabled={isLoading}
              >
                Delete
              </Button>
            </Box>
          </Item>
        ))}
        <Box mt={2} sx={{ width: "80%" }}>
          <Chip
            label={`Count ${items.length}`}
            sx={{ backgroundColor: "secondary.light", width: 90 }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ItemsList;
