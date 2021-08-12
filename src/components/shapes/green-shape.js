import { Shape } from "./helper";
import React from "react";

export const GreenShape = (props) => {
  const taken0 = [
    [true, true],
    [true, true],
  ];

  const takens = [taken0];
  return <Shape {...props} takens={takens} fill="green" />;
};
export default GreenShape;
