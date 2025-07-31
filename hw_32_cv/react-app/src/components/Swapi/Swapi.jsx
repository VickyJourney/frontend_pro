import { Container } from "@mui/material";
import SearchBar from "./SearchBar";
import ResponseContainer from "./ResponseContainer";
import ClearButton from "./ClearButton";

const Swapi = () => (
  <Container>
    <SearchBar />
    <ResponseContainer />
    <ClearButton />
  </Container>
);

export default Swapi;
