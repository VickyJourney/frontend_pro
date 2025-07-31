import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "About me", path: "/" },
    { label: "Todo List", path: "/todo" },
    { label: "Swapi", path: "/swapi" },
  ];

  return (
    <Box component="header" sx={{ mb: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viktoria Diordiczuk
          </Typography>
          <Stack direction="row" spacing={2}>
            {navItems.map(({ label, path }) => (
              <Button
                key={path}
                color="inherit"
                component={Link}
                to={path}
                sx={{
                  borderBottom:
                    location.pathname === path ? "2px solid #fff" : "none",
                  borderRadius: 0,
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

// const Header = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Viktoria Diordiczuk
//           </Typography>
//           <Stack direction="row" spacing={2}>
//             <Button color="inherit" component={Link} to="/">
//               About me
//             </Button>
//             <Button color="inherit" component={Link} to="/todo">
//               Todo List
//             </Button>
//             <Button color="inherit" component={Link} to="/swapi">
//               Swapi
//             </Button>
//           </Stack>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Header;
