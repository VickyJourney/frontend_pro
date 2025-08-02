import { Box, Typography } from "@mui/material";

const Name = () => (
  <>
    <Typography
      component="h2"
      variant="h5"
      color="primary"
      letterSpacing="0.2em"
      sx={{
        fontWeight: 700,
        mt: 3,
        pr: "60px",
        textAlign: "end",
        textShadow: "2px 2px 4px rgb(0 0 0 / 21%)",
      }}
    >
      Viktoria Diordiczuk
    </Typography>
    <Typography
      component="h2"
      variant="h6"
      letterSpacing="0"
      sx={{
        fontWeight: 700,
        mb: 1,
        pr: "90px",
        textAlign: "end",
        color: "#b4b4b4e1",
        textShadow: "2px 2px 4px rgb(0 0 0 / 21%)",
      }}
    >
      Junior Frontend Developer
    </Typography>
  </>
);

export default Name;
