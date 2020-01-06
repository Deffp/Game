import React, { Component } from 'react';

import Board from '../Board/Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.speed = 100;
    this.state = {
      cells: [],
      rows: 30,
      cols: 50,
    };
  }

  createEmptyBoard() {
    const { rows, cols } = this.state;
    const size = rows * cols;
    const cells = Array(size).fill(false);
    this.setState({ cells });
  }

  run() {
    const { rows, cols, cells } = this.state;
    const size = rows * cols;
    let newCells = cells.slice();

    for (let i = 0; i < size; i++) {
      let counter = 0;

      if (cells[i - 1]) counter++;
      if (cells[i + 1]) counter++;
      if (cells[i - cols]) counter++;
      if (cells[i + cols]) counter++;
      if (cells[i - cols - 1]) counter++;
      if (cells[i - cols + 1]) counter++;
      if (cells[i + cols - 1]) counter++;
      if (cells[i + cols + 1]) counter++;

      if (cells[i] && (counter < 2 || counter > 3)) {
        newCells[i] = false;
      }
      if (!cells[i] && counter === 3) {
        newCells[i] = true;
      }
    }

    this.setState({
      cells: newCells,
    });
  }

  selectCell = (id) => {
    let cells = this.state.cells.slice();
    cells[id] = !cells[id];
    this.setState({
      cells,
    });
  };

  play = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.run(), this.speed);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  componentDidMount() {
    this.createEmptyBoard();
  }

  render() {
    const { cols, cells } = this.state;
    const width = cols * 11;

    return (
      <>
        <Board cells={cells} width={width} onSelect={this.selectCell} />
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </>
    );
  }
}

export default App;
