import React from "react";
import { Link } from "react-router-dom";

const WorldButton = props => {
  return (
    <div className="tab">
      <Link to={`/tome/worlds/${props.world.id}`} className="menu_04">
        {props.world.name}
      </Link>
    </div>
  );
};

export default WorldButton;
