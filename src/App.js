import React from "react";
import { connect } from "react-redux";
import Notebook from "./containers/Notebook";
import './css/tome.css'

const App = props => {
  console.log("App props: ", props);
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
