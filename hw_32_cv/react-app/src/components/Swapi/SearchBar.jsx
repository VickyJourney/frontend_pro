import { TextField, InputAdornment, Button, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getData } from "../../redux/slice/swapiSlice";
import { styled } from "@mui/material/styles";

const GetInfoButton = styled(Button)(({ theme }) => ({
  whiteSpace: "nowrap",
  height: 56,
  margin: 0,
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.people.items);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    dispatch(getData(inputValue));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(getData(inputValue));
    }
  };

  return (
    <Stack direction="row" spacing={0} alignItems="center" sx={{ mb: "10px" }}>
      <TextField
        fullWidth
        placeholder="e.g. people/1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              https://swapi.py4e.com/api/
            </InputAdornment>
          ),
        }}
      />

      <GetInfoButton variant="outlined" onClick={handleClick}>
        Get info
      </GetInfoButton>
    </Stack>
  );
};

export default SearchBar;
