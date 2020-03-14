import React from "react";
import { connect } from "react-redux";
import Notebook from "./containers/Notebook";
import './css/tome.css'

export const setLocal = (label, content) => {
  console.log(`setting local: ${label}`, content)
  localStorage.setItem(`${label}`, JSON.stringify(content));
}

export const getLocal = (label) => {
  console.log("getting local " + label, localStorage.getItem(label))
  return JSON.parse(localStorage.getItem(label))
}

// export const BASE_URL = "https://wbtome-backend.herokuapp.com/"
export const BASE_URL = "http://localhost:3000/"

const App = props => {
  // console.log("App props: ", props);
  return (
    <div className="App">
      {/* conditionally route based on logged in flag in store or use a higher order component */}
      <Notebook {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    logged_in: state.auth.logged_in,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(App);
