import { Chip, Stack } from "@mui/material";
import Item from "./Item";

const List = () => (
  <Stack spacing={2} sx={{ mt: "20px" }}>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
    <Chip
      label={`Count ${3}`}
      color="secondary.light"
      sx={{ width: "90px", backgroundColor: "secondary.light" }}
    />
  </Stack>
);

export default List;
