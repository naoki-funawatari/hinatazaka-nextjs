import { Scrollbars } from "react-custom-scrollbars";
import YouTube from "@/components/videos/YouTube";

const Component = () => {
  return (
    <div className="main">
      <Scrollbars universal={true}>
        <YouTube />
      </Scrollbars>
    </div>
  );
};

export default Component;
