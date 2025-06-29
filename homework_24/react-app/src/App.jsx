import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Container from "react-bootstrap/Container";
import ResponseContainer from "./components/ResponseContainer";

const App = () => {
  return (
    <Container fluid>
      <h1>SWAPI</h1>
      <SearchBar />
      <ResponseContainer />
    </Container>
  );
};

export default App;
