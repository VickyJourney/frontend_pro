import { Button } from "@mui/material";
import { clearText } from "../../redux/slice/swapiSlice";
import { useDispatch } from "react-redux";

const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearText());
  };

  return (
    <Button
      onClick={handleClear}
      variant="outlined"
      sx={{ mb: 2, width: "80px" }}
    >
      Clear
    </Button>
  );
};

export default ClearButton;
