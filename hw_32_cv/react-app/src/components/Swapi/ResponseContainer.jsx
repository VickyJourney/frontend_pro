import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

const ResponseContainer = () => {
  const items = useSelector((state) => state.people.items);

  const displayText =
    items && items.length > 0 ? JSON.stringify(items, null, 2) : "";

  return (
    <TextField
      multiline
      rows={15}
      value={displayText}
      InputProps={{ readOnly: true }}
      variant="outlined"
      sx={{ mb: 2 }}
    />
  );
};

export default ResponseContainer;
