import { Container, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import ResponseContainer from "./ResponseContainer";
import ClearButton from "./ClearButton";

const Swapi = () => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "80%",
    }}
  >
    <Typography
      component="h2"
      variant="h4"
      sx={{
        mt: 5,
        mb: 1,
        textAlign: "center",
        color: "#6e6d6de1",
        fontWeight: 700,
        textTransform: "uppercase",
      }}
    >
      Swapi
    </Typography>
    <SearchBar />
    <ResponseContainer />
    <ClearButton />
  </Container>
);

export default Swapi;
