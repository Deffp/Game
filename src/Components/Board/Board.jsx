import React from 'react';

import Cell from '../Cells/Cell';
import './Board.css';

const Board = (props) => {
  const createGrid = () => {
    const { cells, onSelect } = props;
    const grid = cells.map((cell, index) => (
      <Cell key={index} id={index} className={cell ? 'cell alive' : 'cell dead'} onSelect={onSelect} />
    ));
    return grid;
  };

  const { width } = props;
  return (
    <div className="board" style={{ width: width }}>
      {createGrid()}
    </div>
  );
};

export default Board;
