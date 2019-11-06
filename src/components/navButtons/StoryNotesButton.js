import React from "react";
import { Link } from "react-router-dom";

const StoryNotesButton = () => {
  return (
    <div className="tab">
      <Link to={"/tome/story_notes"} className="menu_04">
        Notes
      </Link>
    </div>
  );
};

export default StoryNotesButton;
