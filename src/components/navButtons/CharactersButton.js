import React from "react";
import { Link } from "react-router-dom";

const CharactersButton = () => {
  return (
    <div className="tab">
      <Link to={"/tome/characters"} className="menu_04">
        Characters
      </Link>
    </div>
  );
};

export default CharactersButton;
