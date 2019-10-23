import React from "react";
import { Link } from "react-router-dom";

const CharactersButton = () => {
  return (
    <div>
      <Link to={"/tome/characters"} className="menu_04">
        Characters
      </Link>
    </div>
  );
};

export default CharactersButton;
