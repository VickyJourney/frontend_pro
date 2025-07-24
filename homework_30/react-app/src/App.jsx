import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Container from "react-bootstrap/Container";
import ResponseContainer from "./components/ResponseContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import ClearButton from "./components/ResetButton";

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <h1>SWAPI</h1>
        <SearchBar />
        <ResponseContainer />
        <ClearButton />
      </Container>
    </Provider>
  );
};

export default App;
