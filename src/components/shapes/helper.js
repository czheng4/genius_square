import { Rect, Line, Arc } from "react-konva";
import * as Const from "../const";
import { Group } from "react-konva";
import React, { Component } from "react";

const size = Const.shape_size;
const padding = 7;
const strokeWidth = 0.5;

export const DeepCopy = (a) => {
  const new_a = a.map((e) => {
    return [...e];
  });
  return new_a;
};

export const Square = ({ x, y, opacity, fill }) => {
  var points = [x + size, y];
  points = [
    ...points,
    x + size + padding,
    y + padding,
    x + size + padding,
    y + padding + size,
    x + padding,
    y + size + padding,
    x,
    y + size,
    x + size,
    y + size,
  ];
  return (
    <>
      <Line points={points} stroke={fill} strokeWidth={0.1} opacity={0.4 * opacity} fill={fill} closed={true} />
      <Rect x={x} y={y} width={size} height={size} stroke="black" strokeWidth={strokeWidth} opacity={0.5 * opacity} />
      <Rect x={x} y={y} width={size} height={size} fill={fill} shadowBlur={1} shadowOpacity={0.5 * opacity} shadowColor={"red"} opacity={opacity} />
    </>
  );
};

export const RotateIcons = ({ x, y, onRotate }) => {
  const radius = 8;
  const arrow_x = x + radius * Math.cos((Math.PI / 180) * 30);
  const arrow_y = y - radius * Math.sin((Math.PI / 180) * 30);
  return (
    <>
      <Rect x={x - radius - 7} y={y - radius - 7} width={radius * 2 + 14} height={radius * 2 + 14} onClick={onRotate} />
      <Line points={[arrow_x, arrow_y - 7, arrow_x, arrow_y, arrow_x - 7, arrow_y]} stroke="black" lineJoin="round" />
      <Arc x={x} y={y} angle={310} rotation={25} innerRadius={radius} outerRadius={radius + 0.5} stroke="black" strokeWidth={1} />
    </>
  );
};

export class Shape extends Component {
  constructor(props) {
    super(props);

    this.takens = props.takens;
    this.state = {
      opacity: 1,
      rotation: 0,
      drag: false,
      taken: DeepCopy(this.takens[0]),
    };

    this.x = props.x;
    this.y = props.y;
    this.offset_x = props.x;
    this.offset_y = props.y;
    this.fill = props.fill;
  }

  onRotate = () => {
    const new_rotation = (this.state.rotation + 1) % this.takens.length;
    this.setState({ rotation: new_rotation, taken: DeepCopy(this.takens[new_rotation]) });
  };

  render() {
    const x = this.props.x;
    const y = this.props.y;
    const rel_x = this.x;
    const rel_y = this.y;
    return (
      <>
        <Group
          draggable={true}
          onMouseEnter={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "pointer";
          }}
          onMouseLeave={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
          }}
          onDragStart={(e) => {
            this.x = e.target.getAbsolutePosition().x + this.offset_x;
            this.y = e.target.getAbsolutePosition().y + this.offset_y;
            this.props.onShapeMoveStart(e, this.props.id);
          }}
          onDragMove={(e) => {
            this.props.onShapeMove(e, this.props.id, this.state.taken);
            this.setState({ opacity: 0.7, drag: true, move_x: 100 });
          }}
          onDragEnd={(e) => {
            this.x = e.target.getAbsolutePosition().x + this.offset_x;
            this.y = e.target.getAbsolutePosition().y + this.offset_y;
            this.props.onShapeDown(e, this.props.id, this.state.taken);
            this.setState({ opacity: 1, drag: false });
          }}
          onMouseDown={(e) => {
            this.setState({ opacity: 0.7 });
          }}
          onMouseUp={(e) => {
            this.setState({ opacity: 1 });
          }}
        >
          {this.state.taken.map((rows, i) => {
            return rows.map((ele, j) => {
              if (ele) return <Square x={x + size * j} y={y + size * i} opacity={this.state.opacity} fill={this.fill} key={`block ${i} ${j}`} />;
              else return null;
            });
          })}
          {this.props.rotation && this.takens.length !== 1 && (
            <RotateIcons x={x + size * this.state.taken[0].length + 20} y={y} opacity={this.state.opacity} onRotate={this.onRotate} />
          )}
        </Group>

        {this.state.drag &&
          this.state.taken.map((rows, i) => {
            return rows.map((ele, j) => {
              if (ele)
                return (
                  <Square x={rel_x + size * j} y={rel_y + size * i} opacity={this.state.opacity} fill={this.fill} key={`original-block ${i} ${j}`} />
                );
              else return null;
            });
          })}
      </>
    );
  }
}
