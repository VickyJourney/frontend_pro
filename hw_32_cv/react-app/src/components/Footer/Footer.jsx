import { Box, Container, Stack, Link, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
  <Box component="footer" sx={{ py: 3, backgroundColor: "#f5f5f5" }}>
    <Container>
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {" "}
        <Stack direction="row" alignItems="center" spacing={1}>
          <LinkedInIcon color="primary" />
          <Link
            href="https://www.linkedin.com/in/viktoriadiordiczuk/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            LinkedIn
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <GitHubIcon color="primary" />
          <Link
            href="https://github.com/VickyJourney"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            GitHub
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <EmailIcon color="primary" />
          <Link
            href="mailto:viktoria.diordiczuk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            E-mail
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <TelegramIcon color="primary" />
          <Link
            href="https://t.me/vickyjourney"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            Telegram
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
