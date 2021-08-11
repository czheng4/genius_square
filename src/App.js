import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Component } from "react";
import { Stage, Layer } from "react-konva";
import Board from "./components/board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num_game: 0 };
  }
  onNewGame = () => {
    this.setState({ num_game: this.state.num_game + 1 });
  };
  render() {
    return (
      <div>
        <div className="ml-5 mt-2 mb-0">
          <h2>Genius Square Game</h2>
          <p>Please move the blocks to fill out the 6x6 grid. You can rotate the block by clicking rotation icons</p>
          <button className="btn btn-primary" onClick={this.onNewGame}>
            Start a new game
          </button>
        </div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Board key={this.state.num_game} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
