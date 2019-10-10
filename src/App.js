import React from "react";
import { connect } from "react-redux";
import MainContainer from "./containers/MainContainer.js";


const App = props => {
  console.log("App props: ", props);
  return (
    <div className="App">
      {/* conditionally route based on logged in flag in store or use a higher order component */}
      <MainContainer {...props} />
      
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
