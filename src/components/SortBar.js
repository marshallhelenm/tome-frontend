import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: 1, text: "A-Z", value: 1 },
  { key: 2, text: "Z-A", value: 2 },
  { key: 3, text: "Newest", value: 3 },
  { key: 3, text: "Oldest", value: 3 },
];

const SortBar = () => (
  <Menu compact>
    <Dropdown text="Sort" options={options} simple item />
  </Menu>
);

export default SortBar;
