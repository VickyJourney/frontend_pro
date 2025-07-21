import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Divider />
            <ListItem>
              <ListItemText primary={item.text} />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
