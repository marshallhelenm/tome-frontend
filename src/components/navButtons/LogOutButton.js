import React from "react";
import { Button } from "grommet";
import useAuth from "../../hooks/useAuth";

const LogOutButton = () => {
  const { logOut } = useAuth;
  return (
    <Button href="/" label="Log Out" onClick={() => localStorage.clear()} />
  );
};

export default LogOutButton;
