import React from "react";
import { Link } from "react-router-dom";

const WorldsButton = props => {
  return (
    <div>
      <Link to={`/tome/worlds`} className="menu_04">
        Worlds
      </Link>
    </div>
  );
};

export default WorldsButton;
