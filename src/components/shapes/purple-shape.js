import { Shape } from "./helper";
import React from "react";

export const PurpleShape = (props) => {
  const taken0 = [
    [true, false],
    [true, true],
  ];
  const taken1 = [
    [false, true],
    [true, true],
  ];
  const taken2 = [
    [true, true],
    [true, false],
  ];
  const taken3 = [
    [true, true],
    [false, true],
  ];
  const takens = [taken0, taken1, taken2, taken3];
  return <Shape {...props} takens={takens} fill="#9370DB" />;
};
export default PurpleShape;
