import React from "react";
import { Link } from "react-router-dom";
import { getLocal } from "../../App";

const StoryButton = props => {
  return (
    <div className="tab">
      <Link to={`/tome/stories/${getLocal('story').id}`} className="menu_04">
        {getLocal('story').title}
      </Link>
    </div>
  );
};

export default StoryButton;
