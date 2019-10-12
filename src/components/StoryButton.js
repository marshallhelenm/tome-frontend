import React from "react";
import { Link } from "react-router-dom";

const StoryButton = props => {

  return (
    <Link to={`/tome/stories/${props.story.id}`} className="menu_01">
      <li>{props.story.title}</li>
    </Link>
  );
};

export default StoryButton;
