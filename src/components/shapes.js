import { Rect, Line, Group, Shape, Arrow, Arc } from "react-konva";
import React, { Component } from "react";

const size = 60 - 3;
const padding = 4;
const strokeWidth = 0.5;

const Square = ({ x, y, opacity }) => {
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
      <Line points={points} stroke={"red"} strokeWidth={0.1} opacity={0.3 * opacity} fill={"red"} closed={true} />

      <Rect x={x} y={y} width={size} height={size} stroke="black" strokeWidth={strokeWidth} opacity={0.5 * opacity} />
      <Rect x={x} y={y} width={size} height={size} fill="red" shadowBlur={1} shadowOpacity={0.5 * opacity} shadowColor={"red"} opacity={opacity} />
    </>
  );
};

export const RotateIcons = ({ x, y }) => {
  const radius = 8;
  const arrow_x = x + radius * Math.cos((Math.PI / 180) * 30);
  const arrow_y = y - radius * Math.sin((Math.PI / 180) * 30);

  return (
    <>
      <Rect
        x={x - radius}
        y={y - radius}
        width={radius * 2}
        height={radius * 2}
        onClick={() => {
          console.log(123);
        }}
      />
      <Line points={[arrow_x, arrow_y - 7, arrow_x, arrow_y, arrow_x - 7, arrow_y]} stroke="black" lineJoin="round" />
      <Arc x={x} y={y} angle={310} rotation={25} innerRadius={radius} outerRadius={radius + 0.5} stroke="black" strokeWidth={1} />
    </>
  );
};

export class YellowShape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      opacity: 1,
      drag: false,
      taken: [
        [false, true, false],
        [true, true, true],
      ],
    };
    this.x = props.x;
    this.y = props.y;
    this.offset_x = props.x;
    this.offset_y = props.y;
  }

  render() {
    const x = this.props.x;
    const y = this.props.y;
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
            this.setState({ opacity: 1, drag: false });
            this.props.onShapeDown(e, this.props.id, this.state.taken);
          }}
          onMouseDown={(e) => {
            this.setState({ opacity: 0.7 });
          }}
          onMouseUp={(e) => {
            this.setState({ opacity: 1 });
          }}
        >
          <Square x={x + size} y={y} opacity={this.state.opacity} />
          {[0, 1, 2].map((i) => {
            return <Square x={x + size * i} y={y + size} key={i} opacity={this.state.opacity} />;
          })}
          <RotateIcons x={x + size * 3 + 20} y={y} opacity={this.state.opacity} />
        </Group>

        {this.state.drag && (
          <>
            <Square x={this.x + size} y={this.y} opacity={0.5} />
            {[0, 1, 2].map((i) => {
              return <Square x={this.x + size * i} y={this.y + size} key={i} opacity={0.5} />;
            })}
            <RotateIcons x={this.x + size * 3 + 20} y={this.y} opacity={0.5} />
          </>
        )}
      </>
    );
  }
}

class GeniusShape extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Square x={this.props.x} y={this.props.y} />;
  }
}

export default GeniusShape;
