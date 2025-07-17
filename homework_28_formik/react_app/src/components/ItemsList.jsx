import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const ItemsList = (props) => {
  const { items } = props;
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Divider />
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
