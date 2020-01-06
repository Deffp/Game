import React from "react";

import "./Cell.css";

const Cell = props => {
  return <div className={props.className} onClick={() => props.onSelect(props.id)}></div>;
};

export default Cell;
