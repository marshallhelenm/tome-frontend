import React from "react";

const BASE_URL = "http://localhost:3000/";

const CharactersButton = () => {
  return (
    <li>
      <a href={BASE_URL + 'characters'} className="menu_02">
        Characters
      </a>
    </li>
  );
};

export default CharactersButton;
