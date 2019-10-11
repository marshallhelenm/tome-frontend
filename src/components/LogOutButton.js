import React from "react";
import { Link } from "react-router-dom";

const LogOutButton = () => {
  const handleLogOut = () => {
    console.log("navMenu props: ", this.props);
    // this.props.history.push("/tome");
    this.props.setLoggedOut();
  };

  return (
    <Link to={"/"} className="menu_02">
      <li onClick={handleLogOut}>Log Out</li>
    </Link>
  );
};

export default LogOutButton;
