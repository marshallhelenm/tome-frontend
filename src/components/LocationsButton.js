import React from "react";

const BASE_URL = "http://localhost:3000/";

const LocationsButton = () => {
  return (
    <li>
      <a href={BASE_URL + 'locations'} className="menu_02">
        Locations
      </a>
    </li>
  );
};

export default LocationsButton;
