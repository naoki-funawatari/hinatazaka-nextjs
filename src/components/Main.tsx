import React, { FC, memo } from "react";
import YouTube from "@/components/videos/YouTube";

const Main: FC = () => {
  return (
    <div className="main">
      <YouTube />
    </div>
  );
};

export default memo(Main);
