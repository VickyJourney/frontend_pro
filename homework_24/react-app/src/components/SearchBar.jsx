import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const SearchBar = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">swapi.info/api/</InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          className="me-auto"
        />
        <Button variant="outline-secondary">Get info</Button>
      </InputGroup>
    </>
  );
};

export default SearchBar;
