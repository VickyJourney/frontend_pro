import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import TodoApp from "./components/TodoApp";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <p>
            Something went wrong. <br />
            <a href="/">Click here to return to the main page</a>
          </p>
        }
      >
        <div className="content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<TodoApp />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
