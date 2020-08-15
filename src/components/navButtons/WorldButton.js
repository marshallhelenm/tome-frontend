import React from "react";
import { getLocal } from "../../App";
import { Button } from "grommet";

const WorldButton = () => {
  return (
    <Button
      href={`/tome/worlds/${getLocal("world").id}`}
      label={getLocal("world").name}
    />
  );
};

export default WorldButton;
