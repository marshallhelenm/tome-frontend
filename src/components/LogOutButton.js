import React from "react";

const LogOutButton = () => {
  const handleLogOut = () => {
    console.log("navMenu props: ", this.props);
    // this.props.history.push("/tome");
    this.props.setLoggedOut();
  };

  return (
    <li onClick={handleLogOut}>
      <a href={"http://localhost:3001/tome/stories"} className="menu_02">
        Log Out
      </a>
    </li>
  );
};

export default LogOutButton;
