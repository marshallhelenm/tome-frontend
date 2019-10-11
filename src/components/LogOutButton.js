import React from "react";

const BASE_URL = "http://localhost:3000/";

const LogOutButton = () => {
  const handleLogOut = () => {
    console.log("navMenu props: ", this.props);
    // this.props.history.push("/tome");
    this.props.setLoggedOut();
  };

  return (
    <li onClick={handleLogOut}>
      <a href={BASE_URL + "stories"} className="menu_02">
        Log Out
      </a>
    </li>
  );
};

export default LogOutButton;
