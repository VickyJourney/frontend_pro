import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { fetchStart, deleteTodo, updateTodo } from "../redux/slice/todosSlice";
import { Button, Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const inputRef = useRef(null);

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const handleSave = (item) => {
    dispatch(updateTodo({ ...item, text: editText }));
    setEditId(null);
    setEditText("");
  };

  useEffect(() => {
    if (editId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChange = (todo) =>
    dispatch(updateTodo({ ...todo, isDone: !todo.isDone }));

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <List>
        {items.map((item) => (
          <div key={item.id}>
            <Divider />
            <ListItem>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Checkbox
                  {...label}
                  checked={item.isDone}
                  onChange={() => handleChange(item)}
                />
                <Box sx={{ flexGrow: 1 }}>
                  {editId === item.id ? (
                    <TextField
                      type="text"
                      ref={inputRef}
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSave(item);
                        }
                      }}
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <ListItemText
                      primary={item.text}
                      style={{
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
                    style={{ height: 56, width: 70, marginLeft: 10 }}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => handleEdit(item)}
                    style={{ height: 56, width: 70, marginLeft: 10 }}
                  >
                    Edit
                  </Button>
                )}
                <Button
                  variant="outlined"
                  color="error"
                  style={{ height: 56, width: 70, marginLeft: 5 }}
                  onClick={() => handleDelete(item.id)}
                  disabled={isLoading}
                >
                  Delete
                </Button>
              </Box>
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
