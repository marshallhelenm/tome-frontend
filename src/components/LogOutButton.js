import React from "react";
import { Link } from "react-router-dom";

const LogOutButton = () => {
  

  return (
    <Link to={"/"} className="menu_02">
      <li >Log Out</li>
    </Link>
  );
};

export default LogOutButton;
