import React from "react";
import { Link } from "react-router-dom";

const WorldNotesButton = () => {
  return (
    <div className="tab">
      <Link to={"/tome/world_notes"} className="menu_04">
        Notes
      </Link>
    </div>
  );
};

export default WorldNotesButton;
