import { Box, Container, Typography } from "@mui/material";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import SideInfo from "./SideInfo";

const Main = () => (
  <Box sx={{ display: "flex" }}>
    <Container component="section" sx={{ pt: "16px" }}>
      <Typography
        component="h2"
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 1,
          mt: 3,
          pr: "80px",
          textAlign: "end",
          color: "#b4b4b4e1",
          textShadow: "2px 2px 4px rgb(0 0 0 / 21%)",
        }}
      >
        Junior Frontend Developer
      </Typography>
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
