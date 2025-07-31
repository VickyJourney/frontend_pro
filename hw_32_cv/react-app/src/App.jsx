import { Container, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Swapi from "./components/Swapi/Swapi";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2bcdcdff",
    },
    secondary: {
      main: "#0b3965ff",
      light: "#07e4e32b",
      dark: "#094d6aff",
      contrastText: "#fff",
    },
    divider: "rgba(28, 177, 222, 0.63)",
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              padding: "0",
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/swapi" element={<Swapi />} />
              </Routes>
            </main>

            <Footer />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
