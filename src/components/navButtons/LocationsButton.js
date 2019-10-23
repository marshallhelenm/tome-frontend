import React from "react";
import { Link } from "react-router-dom";

const LocationsButton = () => {
  return (
    <div className="tab">
      <Link to={"/tome/locations"} className="menu_04">
        Locations
      </Link>
    </div>
  );
};

export default LocationsButton;
