import React from "react";
import { Link } from "react-router-dom";

const StoryButton = props => {
  return (
    <div className="tab">
      <Link to={`/tome/stories/${props.story.id}`} className="menu_04">
        {props.story.title}
      </Link>
    </div>
  );
};

export default StoryButton;
