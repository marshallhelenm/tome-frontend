import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const SortBar = () => (
  <Menu compact>
    <Dropdown text="Sort By" options={options} simple item />
  </Menu>
);

export default SortBar;
