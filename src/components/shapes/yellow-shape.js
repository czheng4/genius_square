import { Shape } from "./helper";
import React from "react";

export const YellowShape = (props) => {
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
  const takens = [taken0, taken1, taken2, taken3];
  return <Shape {...props} takens={takens} fill="#DEC20B" />;
};
export default YellowShape;
