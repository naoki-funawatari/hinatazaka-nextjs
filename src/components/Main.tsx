import { Scrollbars } from "react-custom-scrollbars";
import YouTube from "@/components/videos/YouTube";

export default () => {
  return (
    <div className="main">
      <Scrollbars universal={true}>
        <YouTube />
      </Scrollbars>
    </div>
  );
};
