import { Component } from "react";
import { Rect, Ellipse, Line } from "react-konva";
import * as Const from "./const";

const x = 50;
const y = 50;

const BlockPiece = ({ i, j }) => {
  return (
    <>
      <Ellipse
        x={x + j * Const.size + Const.size / 2}
        y={y + i * Const.size + Const.size / 2 - 2.5}
        radiusX={Const.size / 2.5}
        radiusY={Const.size / 3.5}
        fill="grey"
      />
      <Ellipse
        x={x + j * Const.size + Const.size / 2}
        y={y + i * Const.size + Const.size / 2 + 2.5}
        radiusX={Const.size / 2.5}
        radiusY={Const.size / 3.5}
        fill="grey"
        opacity={0.5}
        strokeWidth={0}
        stroke="white"
      />
    </>
  );
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block_pieces: [],
      taken: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
    };
    // this.random_game();
  }

  componentDidMount() {
    this.random_game();
  }
  random_game = () => {
    const taken = this.state.taken;
    const block_pieces = [];
    for (let i = 0; i < taken.length; i++) {
      for (let j = 0; j < taken[i].length; j++) taken[i][j] = false;
      block_pieces.push([...taken[i]]);
    }

    var num_block_pieces = 0;
    while (num_block_pieces < 6) {
      let row_i = Math.floor(Math.random() * 6);
      let col_i = Math.floor(Math.random() * 6);
      if (taken[row_i][col_i] == false) {
        taken[row_i][col_i] = true;
        block_pieces[row_i][col_i] = true;
        num_block_pieces++;
      }
    }
    console.log(block_pieces);
    this.setState({ block_pieces: block_pieces, taken: taken });
  };
  render() {
    return (
      <>
        <Rect x={x} y={y} width={Const.size * 6} height={Const.size * 6} stroke={"grey"} strokeWidth={10} />
        {/* <BlockPiece i={3} j={4} /> */}
        {this.state.taken.map((rows, i) => {
          return rows.map((ele, j) => {
            return (
              <Rect
                x={x + j * Const.size + 0.5}
                y={y + i * Const.size + 0.5}
                width={Const.size}
                height={Const.size}
                stroke="grey"
                strokeWidth={1.2}
                key={`${i} ${j}`}
              />
            );
          });
        })}

        {this.state.block_pieces.map((rows, i) => {
          return rows.map((ele, j) => {
            if (ele) {
              return <BlockPiece i={i} j={j} key={`block piece ${i} ${j}`} />;
            } else {
              return null;
            }
          });
        })}
      </>
    );
  }
}

export default Board;
