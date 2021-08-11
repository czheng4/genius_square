import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Stage, Layer, Rect, Text } from "react-konva";
import GeniusShape, { YellowShape } from "./components/shapes";
import Board from "./components/board";
function App() {
  return (
    <div className="ml-3 mt-2">
      <h1>Genius Square</h1>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Board />
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
