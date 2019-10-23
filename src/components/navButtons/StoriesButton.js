import React from "react";
import { Link } from "react-router-dom";

const StoriesButton = () => {
  return (
    <div className="tab">
      <Link to={"/tome/stories"} className="menu_04">
        Stories
      </Link>
    </div>
  );
};

export default StoriesButton;
