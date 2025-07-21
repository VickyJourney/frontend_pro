import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import VotingPage from "./redux/VotingPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <VotingPage />
  </Provider>
);

export default App;
