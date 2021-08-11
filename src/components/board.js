import { Component } from "react";
import { Rect, Ellipse, Line } from "react-konva";
import { YellowShape } from "./shapes";
import * as Const from "./const";

const BlockPiece = ({ i, j }) => {
  return (
    <>
      <Ellipse
        x={Const.x + j * Const.size + Const.size / 2}
        y={Const.y + i * Const.size + Const.size / 2 - 2.5}
        radiusX={Const.size / 2.5}
        radiusY={Const.size / 3.5}
        fill="grey"
      />
      <Ellipse
        x={Const.x + j * Const.size + Const.size / 2}
        y={Const.y + i * Const.size + Const.size / 2 + 2.5}
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
      fill: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
      rotation: [true, true, true, true, true],
    };
    this.shape_positions = [
      [500, 50],
      [500, 100],
    ];
    this.shape_abs_positions = [
      [0, 0],
      [0, 0],
    ];
    // this.random_game();
  }

  onShapeMoveStart = (e, id) => {
    const abs = e.target.getAbsolutePosition();
    this.shape_abs_positions[id][0] = abs.x;
    this.shape_abs_positions[id][1] = abs.y;
  };

  onShapeMove = (e, id, shape_taken) => {
    const fill = this.state.fill;
    const abs = e.target.getAbsolutePosition();
    const x = this.shape_positions[id][0] + abs.x; // relative x
    const y = this.shape_positions[id][1] + abs.y; // relateiv y
    var pos_row, pos_col;

    for (let i = 0; i < fill.length; i++) {
      for (let j = 0; j < fill[i].length; j++) fill[i][j] = false;
    }
    pos_col = Math.round((x - Const.x) / Const.size);
    pos_row = Math.round((y - Const.y) / Const.size);

    for (let i = 0; i < shape_taken.length; i++) {
      for (let j = 0; j < shape_taken[i].length; j++) {
        if (pos_row + i >= 0 && pos_row + i < 6 && pos_col + j >= 0 && pos_col + j < 6 && shape_taken[i][j]) {
          fill[pos_row + i][pos_col + j] = true;
        }
      }
    }
    if (pos_row >= 0 && pos_row < 6 && pos_col >= 0 && pos_col < 6) {
      e.target.setAbsolutePosition({ x: abs.x + pos_col * Const.size + Const.x - x, y: abs.y + pos_row * Const.size + Const.y - y });
    }
    this.setState({ fill: fill });
  };

  onShapeDown = (e, id, shape_taken) => {
    const taken = this.state.taken;
    const rotation = this.state.rotation;
    const abs = e.target.getAbsolutePosition();
    const x = this.shape_positions[id][0] + abs.x; // relative x
    const y = this.shape_positions[id][1] + abs.y; // relateiv y
    const pos_col = Math.round((x - Const.x) / Const.size);
    const pos_row = Math.round((y - Const.y) / Const.size);
    var success = true;

    // free previous taken spot
    const px = this.shape_positions[id][0] + this.shape_abs_positions[id][0];
    const py = this.shape_positions[id][1] + this.shape_abs_positions[id][1];
    const ppos_col = Math.round((px - Const.x) / Const.size);
    const ppos_row = Math.round((py - Const.y) / Const.size);
    var in_board = true;
    for (let i = 0; i < shape_taken.length; i++) {
      for (let j = 0; j < shape_taken[i].length; j++) {
        if (ppos_row + i >= 0 && ppos_row + i < 6 && ppos_col + j >= 0 && ppos_col + j < 6) {
        } else {
          in_board = false;
          break;
        }
      }
    }
    if (in_board) {
      for (let i = 0; i < shape_taken.length; i++) {
        for (let j = 0; j < shape_taken[i].length; j++) {
          taken[ppos_row + i][ppos_col + j] = false;
        }
      }
    }

    if (pos_row >= 6 || pos_col >= 6) {
      rotation[id] = true;
      this.setState({ taken: taken, rotation: rotation });
      return;
    }

    // put it down
    for (let i = 0; i < shape_taken.length; i++) {
      for (let j = 0; j < shape_taken[i].length; j++) {
        if (
          pos_row + i >= 0 &&
          pos_row + i < 6 &&
          pos_col + j >= 0 &&
          pos_col + j < 6 &&
          (shape_taken[i][j] === false || (taken[pos_row + i][pos_col + j] === false && shape_taken[i][j] === true))
        ) {
        } else {
          success = false;
          break;
        }
      }
    }

    if (!success) e.target.setAbsolutePosition({ x: this.shape_abs_positions[id][0], y: this.shape_abs_positions[id][1] });
    else {
      rotation[id] = false;
      for (let i = 0; i < shape_taken.length; i++) {
        for (let j = 0; j < shape_taken[i].length; j++) {
          taken[pos_row + i][pos_col + j] = true;
        }
      }
    }
    this.setState({ taken: taken, rotation: rotation });
    // shape_positions[id][0] = 0;
    // shape_positions[id][1] = 0;
    // console.log("here");
    // this.setState({ shape_positions: shape_positions });

    // console.log(e);
  };

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
    console.log(block_pieces, taken);
    this.setState({ block_pieces: block_pieces, taken: taken });
  };
  render() {
    return (
      <>
        <Rect x={Const.x} y={Const.y} width={Const.size * 6} height={Const.size * 6} stroke={"grey"} strokeWidth={10} />
        {/* <BlockPiece i={3} j={4} /> */}
        {this.state.taken.map((rows, i) => {
          return rows.map((ele, j) => {
            return (
              <Rect
                x={Const.x + j * Const.size}
                y={Const.y + i * Const.size}
                width={Const.size}
                height={Const.size}
                stroke="grey"
                strokeWidth={1.2}
                key={`${i} ${j}`}
                fill={this.state.fill[i][j] ? "#DCDCDC" : "white"}
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
        <YellowShape
          x={this.shape_positions[0][0]}
          y={this.shape_positions[0][1]}
          onShapeMove={this.onShapeMove}
          onShapeDown={this.onShapeDown}
          onShapeMoveStart={this.onShapeMoveStart}
          id={0}
          rotation={this.state.rotation[0]}
        />
        {/* <YellowShape
          x={this.shape_positions[1][0]}
          y={this.shape_positions[1][1]}
          onShapeMove={this.onShapeMove}
          onShapeDown={this.onShapeDown}
          onShapeMoveStart={this.onShapeMoveStart}
          id={1}
        /> */}
      </>
    );
  }
}

export default Board;
