import { Shape } from "./helper";
import React from "react";

export const EarthShape = (props) => {
  const taken0 = [[true, true]];
  const taken1 = [[true], [true]];

  const takens = [taken0, taken1];
  return <Shape {...props} takens={takens} fill="#a66b1f" />;
};
export default EarthShape;
