import React from "react";
import { Link } from "react-router-dom";

const WorldsButton = props => {

  return (
    <Link to={`/tome/worlds`} className="menu_01">
      <li>Worlds</li>
    </Link>
  );
};

export default WorldsButton;
