import { Shape } from "./helper";
import React from "react";

export const RedShape = (props) => {
  const taken0 = [
    [true, false],
    [true, true],
    [false, true],
  ];
  const taken1 = [
    [false, true, true],
    [true, true, false],
  ];
  const taken2 = [
    [false, true],
    [true, true],
    [true, false],
  ];
  const taken3 = [
    [true, true, false],
    [false, true, true],
  ];
  const takens = [taken0, taken1, taken2, taken3];
  return <Shape {...props} takens={takens} fill={"red"} />;
};
export default RedShape;
