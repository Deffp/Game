import React, { Component } from "react";

import Cell from "../Cells/Cell";
import "./Board.css";

class Board extends Component {
  createGrid = () => {
    const { cells, onSelect } = this.props;
    const grid = cells.map((cell, index) => (
      <Cell
        key={index}
        id={index}
        className={cell ? "cell alive" : "cell dead"}
        onSelect={onSelect}
      />
    ));
    return grid;
  };

  render() {
    const { width } = this.props;
    return (
      <div className='board' style={{ width: width }}>
        {this.createGrid()}
      </div>
    );
  }
}

export default Board;
