import { Scrollbars } from "react-custom-scrollbars";
import YouTube from "@/features/videos/YouTube";

const Main = () => {
  return (
    <div className="main">
      <Scrollbars universal={true}>
        <YouTube />
      </Scrollbars>
    </div>
  );
};

export default Main;
