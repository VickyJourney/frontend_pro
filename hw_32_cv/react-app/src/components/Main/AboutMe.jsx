import {
  Container,
  Box,
  Divider,
  Typography,
  ListItemIcon,
  Chip,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Git",
  "Responsive Design",
  "Bootstrap",
  "MUI",
  "Redux",
  "SCSS",
  "Jira",
  "CRM",
  "Communication",
  "Creativity",
  "Time Management",
  "Problem Solving",
];

const AboutMe = () => (
  <Container
    sx={{
      p: "0",
      display: "flex",
      gap: 4,
      position: "relative",
    }}
  >
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>
          <PersonIcon />
        </ListItemIcon>
        <Typography
          component="h3"
          variant="h6"
          sx={{ fontWeight: "700", textTransform: "uppercase" }}
        >
          About me
        </Typography>
      </Box>
      <Divider sx={{ width: "85%", mt: 1, mb: 2 }} />
      <Typography sx={{ mr: "85px", mb: 3 }}>
        I am a highly motivated career switcher, currently enrolled in the
        Frontend PRO course at Hillel IT School. My background in sales has
        sharpened my problem-solving abilities, teamwork and attention to detail
        - qualities I now apply to creating engaging, user-friendly web
        experiences. I have already gained hands-on experience with HTML, CSS.
        Currently developing my skills in JavaScript and React.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>
          <ThumbUpAltIcon />
        </ListItemIcon>
        <Typography
          component="h3"
          variant="h6"
          sx={{ fontWeight: "700", textTransform: "uppercase" }}
        >
          Skills
        </Typography>
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        sx={{ mb: 3 }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            variant="outlined"
            clickable
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
    <Box
      sx={{
        width: { xs: 200, md: 250 },
        height: { xs: 200, md: 250 },
        marginTop: { xs: 2, md: 0 },
        overflow: "hidden",
        flexShrink: 0,
        position: "absolute",
        top: "-50px",
        right: "-150px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img
        src="./src/images/IMG_4617.jpg"
        alt="Viktoria"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </Box>
  </Container>
);

export default AboutMe;
