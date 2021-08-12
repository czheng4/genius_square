import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Component } from "react";
import { Stage, Layer } from "react-konva";
import Board from "./components/board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num_game: 0, win: false };
  }
  onNewGame = () => {
    this.setState({ num_game: this.state.num_game + 1, win: false });
  };

  onWin = () => {
    this.setState({ win: true });
  };

  render() {
    return (
      <div>
        <div className="ml-5 mt-2 mb-0">
          <h2>Genius Square Game</h2>
          <p>
            Please move the colored shapes to fill out the 6x6 grid. Each game starts with 7 "blockers". You can clock rotation icons to change the
            shape's orientation.
          </p>
          <button className="btn btn-primary" onClick={this.onNewGame}>
            Start a new game
          </button>

          {this.state.win && (
            <span className="ml-5 text-primary" style={{ fontSize: "20px" }}>
              Congratulations! You beat me
            </span>
          )}
        </div>
        <Stage width={1200} height={700}>
          <Layer>
            <Board key={this.state.num_game} onWin={this.onWin} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
