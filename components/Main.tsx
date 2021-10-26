import React, { memo } from "react";
import YouTube from "./videos/YouTube";

const Main = () => (
  <div className="main">
    <YouTube />
  </div>
);

export default memo(Main);
