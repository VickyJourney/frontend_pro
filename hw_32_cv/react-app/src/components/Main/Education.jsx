import {
  Box,
  Container,
  Typography,
  Divider,
  Link,
  ListItemIcon,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => (
  <Box sx={{ bgcolor: "#f0f0f0", py: 2, mb: 3 }}>
    <Container sx={{ p: "0" }}>
      <Box sx={{ display: "Flex", alignItems: "center" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>
          <SchoolIcon />
        </ListItemIcon>
        <Typography
          component="h3"
          variant="h6"
          sx={{ fontWeight: "700", mb: "1", textTransform: "uppercase" }}
        >
          Education
        </Typography>
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography>
          Masters Degree of Hotel Management - Cracow University of Economics
        </Typography>
        <Typography sx={{ color: "grey", fontSize: "14px" }}>
          2013 - 2018
        </Typography>
      </Box>
      <Typography component="h3" sx={{ fontWeight: "700" }}>
        Additional courses
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Front-end PRO at Hillel IT School</Typography>
          <Typography sx={{ color: "grey", fontSize: "14px" }}>
            In progress, expected completion: August 2025
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "2px" }}
        >
          <Typography>Front-end Basic at Hillel IT School</Typography>
          <Typography sx={{ color: "grey", fontSize: "14px" }}>
            Completed in March 2025: EXCELLENT
          </Typography>
        </Box>
        <Link
          href="https://certificate.ithillel.ua/view/30460097"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          View Certificate
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Education;
