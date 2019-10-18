import React from "react";
import { Link } from "react-router-dom";

const StoriesButton = () => {
  return (
    <Link to={"/tome/stories"} className="menu_04">
      <li>Stories</li>
    </Link>
  );
};

export default StoriesButton;
