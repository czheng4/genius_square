import { Shape } from "./helper";
import React from "react";

export const LightblueShape = (props) => {
  const taken0 = [
    [true, true],
    [true, false],
    [true, false],
  ];

  const taken1 = [
    [true, true],
    [false, true],
    [false, true],
  ];

  const taken2 = [
    [false, false, true],
    [true, true, true],
  ];

  const taken3 = [
    [true, false, false],
    [true, true, true],
  ];

  const taken4 = [
    [false, true],
    [false, true],
    [true, true],
  ];

  const taken5 = [
    [true, false],
    [true, false],
    [true, true],
  ];

  const taken6 = [
    [true, true, true],
    [true, false, false],
  ];

  const taken7 = [
    [true, true, true],
    [false, false, true],
  ];

  const takens = [taken0, taken1, taken2, taken3, taken4, taken5, taken6, taken7];
  return <Shape {...props} takens={takens} fill="lightblue" />;
};
export default LightblueShape;
