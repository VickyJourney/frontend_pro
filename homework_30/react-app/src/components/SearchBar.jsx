import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getData } from "../redux/slice/swapiSlice";

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
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://swapi.py4e.com/api/
        </InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          className="me-auto"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. people/1"
        />
        <Button onClick={handleClick} variant="outline-secondary">
          Get info
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchBar;
