import { Shape } from "./helper";
import React from "react";

export const OrangeShape = (props) => {
  const taken0 = [[true, true, true]];
  const taken1 = [[true], [true], [true]];

  const takens = [taken0, taken1];
  return <Shape {...props} takens={takens} fill="orange" />;
};
export default OrangeShape;
