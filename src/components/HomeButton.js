import React from "react";

const BASE_URL = "http://localhost:3000/";

const HomeButton = () => {
  return (
    <li>
      <a href={BASE_URL + 'tome'} className="menu_01">
        Home
      </a>
    </li>
  );
};

export default HomeButton;
