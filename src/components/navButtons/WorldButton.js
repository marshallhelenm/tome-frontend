import React from "react";
import { Link } from "react-router-dom";
import { getLocal } from "../../App";

const WorldButton = props => {
  return (
    <div className="tab">
      <Link to={`/tome/worlds/${getLocal('world').id}`} className="menu_04">
        {getLocal('world').name}
      </Link>
    </div>
  );
};

export default WorldButton;
