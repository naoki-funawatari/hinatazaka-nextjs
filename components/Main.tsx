import React, { memo } from "react";
import YouTube from "./videos/YouTube";
import { DisplayParameter } from "../pages/index";

const Main = (props: DisplayParameter) => (
  <div className="main">
    <YouTube {...props} />
  </div>
);

export default memo(Main);
