import React from "react";
import YouTube from "./videos/YouTube";
import { DisplayParameter } from "../index";

const Main = (props: DisplayParameter) => (
  <div className="main">
    <YouTube {...props} />
  </div>
);

export default Main;
