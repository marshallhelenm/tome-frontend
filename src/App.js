import React from "react";
import { Grommet } from "grommet";
import grommetTheme from "./grommetTheme";
import Sidebar from "./containers/Sidebar.js";
import Page from "./containers/Page.js";
import { BrowserRouter as Router } from "react-router-dom";

export const setLocal = (label, content) => {
  // console.log(`setting local: ${label}`, content)
  localStorage.setItem(`${label}`, JSON.stringify(content));
};

export const getLocal = (label) => {
  // console.log("getting local " + label, localStorage.getItem(label))
  return JSON.parse(localStorage.getItem(label));
};

export const BASE_URL = "https://wbtome-backend.herokuapp.com/";
// export const BASE_URL = "http://localhost:3000/"

const App = (props) => {
  // console.log("App props: ", props);
  return (
    <Grommet theme={grommetTheme}>
      <Router>
        <Sidebar {...props} />
        <Page {...props} />
      </Router>
    </Grommet>
  );
};

export default App;
