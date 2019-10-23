import React from "react";
import { Link } from "react-router-dom";

const LogOutButton = () => {
  return (
    <div className="tab">
      <Link to={"/"} className="menu_04">
        Log Out
      </Link>
    </div>
  );
};

export default LogOutButton;
