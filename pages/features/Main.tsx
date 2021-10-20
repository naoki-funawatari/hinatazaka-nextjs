import React from "react";
import YouTube from "./videos/YouTube";

type Props = {
  titlePrefix: string;
  title: string;
  id: string;
};

const Main = ({ titlePrefix, title, id }: Props) => (
  <div className="main">
    <YouTube titlePrefix={titlePrefix} title={title} id={id} />
  </div>
);

export default Main;
