import React from "react";
import { Link } from "react-router-dom";

const LocationsButton = () => {
  return (
    <Link to={"/tome/locations"} className="menu_04">
      <li>Locations</li>
    </Link>
  );
};

export default LocationsButton;
