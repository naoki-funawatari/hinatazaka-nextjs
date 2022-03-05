import React, { FC, memo } from "react";
import YouTube from "@/components/videos/YouTube";
import { Scrollbars } from "react-custom-scrollbars";

const Main: FC = () => {
  return (
    <div className="main">
      <Scrollbars universal={true}>
        <YouTube />
      </Scrollbars>
    </div>
  );
};

export default memo(Main);
