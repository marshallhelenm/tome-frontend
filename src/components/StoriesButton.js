import React from "react";

const BASE_URL = "http://localhost:3000/";

const StoriesButton = () => {
  return (
    <li>
      <a href={BASE_URL + 'stories'} className="menu_02">
        Stories
      </a>
    </li>
  );
};

export default StoriesButton;
