import { Shape } from "./helper";
import React from "react";

export const RedShape = (props) => {
  const taken0 = [[true, true, true, true]];
  const taken1 = [[true], [true], [true], [true]];

  const takens = [taken0, taken1];
  return <Shape {...props} takens={takens} fill="grey" />;
};
export default RedShape;
