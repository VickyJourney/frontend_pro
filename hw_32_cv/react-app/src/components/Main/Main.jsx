import { Box, Container } from "@mui/material";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import SideInfo from "./SideInfo";
import Name from "./Name";

const Main = () => (
  <Box sx={{ display: "flex" }}>
    <Container component="section" sx={{ pt: "16px" }}>
      <Name />
      <AboutMe />
      <Education />
      <WorkExperience />
    </Container>
    <Container
      component="section"
      sx={{ backgroundColor: "#f0f0f0", width: "25%" }}
    >
      <SideInfo />
    </Container>
  </Box>
);

export default Main;
