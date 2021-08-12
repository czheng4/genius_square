import { Shape } from "./helper";
import React from "react";

export const RedShape = (props) => {
  const taken0 = [[true]];

  const takens = [taken0];
  return <Shape {...props} takens={takens} fill="#1E90FF" />;
};
export default RedShape;
