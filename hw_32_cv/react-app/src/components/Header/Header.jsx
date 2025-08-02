import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "About me", path: "/" },
    { label: "Todo List", path: "/todo" },
    { label: "Swapi", path: "/swapi" },
  ];

  return (
    <Box component="header">
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #128f95ff 0%, #0ecad8ff 100%)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CodeIcon sx={{ mr: 1, fontSize: 28, color: "white" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "24px", color: "white" }}
            >
              e-Journey
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            {navItems.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: location.pathname === path ? "#fff" : "#e0e0e0",
                  backgroundColor:
                    location.pathname === path
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                  fontWeight: 600,
                  borderRadius: "20px",
                  px: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
