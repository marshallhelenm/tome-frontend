import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="tab">
      <Link to={"/tome"} className="menu_04">
        Home
      </Link>
    </div>
  );
};

export default HomeButton;
