import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to={"/tome"} className="menu_01">
      <li>Home</li>
    </Link>
  );
};

export default HomeButton;
