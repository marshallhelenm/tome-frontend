import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link to={"/tome"} className="menu_04">
        Home
      </Link>
    </div>
  );
};

export default HomeButton;
