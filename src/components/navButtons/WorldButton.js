import React from "react";
import { Link } from "react-router-dom";

const WorldButton = props => {

  return (
    <Link to={`/tome/worlds/${props.world.id}`} className="menu_04">
      <li>{props.world.name}</li>
    </Link>
  );
};

export default WorldButton;
