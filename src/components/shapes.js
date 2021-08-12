import { Rect, Line, Group, Shape, Arrow, Arc } from "react-konva";
import React, { Component } from "react";

const size = 60 - 3;
const padding = 7;
const strokeWidth = 0.5;

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
      <Rect x={x - radius - 5} y={y - radius - 5} width={radius * 2 + 10} height={radius * 2 + 10} onClick={onRotate} stroke="black" />
      <Line points={[arrow_x, arrow_y - 7, arrow_x, arrow_y, arrow_x - 7, arrow_y]} stroke="black" lineJoin="round" />
      <Arc x={x} y={y} angle={310} rotation={25} innerRadius={radius} outerRadius={radius + 0.5} stroke="black" strokeWidth={1} />
    </>
  );
};

export class YellowShape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      rotation: 0,
      drag: false,
      taken: [
        [false, true, false],
        [true, true, true],
      ],
    };
    const taken0 = [
      [false, true, false],
      [true, true, true],
    ];
    const taken1 = [
      [true, false],
      [true, true],
      [true, false],
    ];
    const taken2 = [
      [true, true, true],
      [false, true, false],
    ];
    const taken3 = [
      [false, true],
      [true, true],
      [false, true],
    ];
    this.takens = [taken0, taken1, taken2, taken3];
    this.x = props.x;
    this.y = props.y;
    this.offset_x = props.x;
    this.offset_y = props.y;
    this.fill = "#DEC20B";
  }
  onRotate = () => {
    const new_rotation = (this.state.rotation + 1) % 4;
    console.log(this.takens[new_rotation]);
    const new_taken = this.takens[new_rotation].map((e) => {
      return [...e];
    });
    this.setState({ rotation: new_rotation, taken: new_taken });
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
          {this.state.rotation == 0 && (
            <>
              <Square x={x + size} y={y} opacity={this.state.opacity} fill={this.fill} />
              {[0, 1, 2].map((i) => {
                return <Square x={x + size * i} y={y + size} key={i} opacity={this.state.opacity} fill={this.fill} />;
              })}
              {this.props.rotation && <RotateIcons x={x + size * 3 + 20} y={y} opacity={this.state.opacity} onRotate={this.onRotate} />}
            </>
          )}

          {this.state.rotation == 1 && (
            <>
              <Square x={x + size} y={y + size} opacity={this.state.opacity} fill={this.fill} />
              {[0, 1, 2].map((i) => {
                return <Square x={x} y={y + size * i} key={i} opacity={this.state.opacity} fill={this.fill} />;
              })}
              {this.props.rotation && <RotateIcons x={x + size * 2 + 20} y={y} opacity={this.state.opacity} onRotate={this.onRotate} />}
            </>
          )}

          {this.state.rotation == 2 && (
            <>
              <Square x={x + size} y={y + size} opacity={this.state.opacity} fill={this.fill} />
              {[0, 1, 2].map((i) => {
                return <Square x={x + size * i} y={y} key={i} opacity={this.state.opacity} fill={this.fill} />;
              })}
              {this.props.rotation && <RotateIcons x={x + size * 3 + 20} y={y} opacity={this.state.opacity} onRotate={this.onRotate} />}
            </>
          )}

          {this.state.rotation == 3 && (
            <>
              <Square x={x} y={y + size} opacity={this.state.opacity} fill={this.fill} />
              {[0, 1, 2].map((i) => {
                return <Square x={x + size} y={y + size * i} key={i} opacity={this.state.opacity} fill={this.fill} />;
              })}
              {this.props.rotation && <RotateIcons x={x + size * 2 + 20} y={y} opacity={this.state.opacity} onRotate={this.onRotate} />}
            </>
          )}
        </Group>

        {this.state.drag && this.state.rotation === 0 && (
          <>
            <Square x={rel_x + size} y={rel_y} opacity={0.5} fill={this.fill} />
            {[0, 1, 2].map((i) => {
              return <Square x={rel_x + size * i} y={rel_y + size} key={i} opacity={0.5} fill={this.fill} />;
            })}
          </>
        )}

        {this.state.drag && this.state.rotation == 1 && (
          <>
            <Square x={rel_x + size} y={rel_y + size} opacity={this.state.opacity} fill={this.fill} />
            {[0, 1, 2].map((i) => {
              return <Square x={rel_x} y={rel_y + size * i} key={i} opacity={this.state.opacity} fill={this.fill} />;
            })}
          </>
        )}

        {this.state.drag && this.state.rotation == 2 && (
          <>
            <Square x={rel_x + size} y={rel_y + size} opacity={this.state.opacity} fill={this.fill} />
            {[0, 1, 2].map((i) => {
              return <Square x={rel_x + size * i} y={rel_y} key={i} opacity={this.state.opacity} fill={this.fill} />;
            })}
          </>
        )}

        {this.state.drag && this.state.rotation == 3 && (
          <>
            <Square x={rel_x} y={rel_y + size} opacity={this.state.opacity} fill={this.fill} />
            {[0, 1, 2].map((i) => {
              return <Square x={rel_x + size} y={rel_y + size * i} key={i} opacity={this.state.opacity} fill={this.fill} />;
            })}
          </>
        )}
      </>
    );
  }
}
