import React, { FC, memo } from "react";
import Single from "@/components/singles/Single";
import singles from "@/data/singles.json";
import { Scrollbars } from "react-custom-scrollbars";

const Navigation: FC = () => {
  return (
    <div className="nav">
      <Scrollbars universal={true}>
        <h3>シングル</h3>
        <ul className="list-group list-group-flush">
          {[...singles]
            .sort((a, b) => a.singleOrder - b.singleOrder)
            .map((single, singlesIndex) => (
              <Single key={`single${singlesIndex}`} {...{ single }} />
            ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default memo(Navigation);
