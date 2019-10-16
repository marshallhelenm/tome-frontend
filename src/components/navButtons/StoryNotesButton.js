import React from "react";
import { Link } from "react-router-dom";

const StoryNotesButton = () => {
  return (
    <Link to={"/tome/story_notes"} className="menu_02">
      <li>Notes</li>
    </Link>
  );
};

export default StoryNotesButton;
