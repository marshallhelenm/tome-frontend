import React from "react";
import { getLocal } from "../../App";
import { Button } from "grommet";

const StoryButton = () => {
  return (
    <Button
      to={`/tome/stories/${getLocal("story").id}`}
      label={getLocal("story").title}
    />
  );
};

export default StoryButton;
