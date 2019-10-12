import React from "react";
import { Link } from "react-router-dom";

const CharactersButton = () => {
  return (
    <Link to={"/tome/characters"} className="menu_02">
      <li>Characters</li>
    </Link>
  );
};

export default CharactersButton;
