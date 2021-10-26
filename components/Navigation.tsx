import React, { memo, Dispatch } from "react";
import Single from "./singles/Single";
import SingleInfo from "./singles/SingleInfo";
import { DisplayParameter } from "../pages/index";

type Props = {
  singles: SingleInfo[];
  setDisplayParameter: Dispatch<DisplayParameter>;
};

const Navigation = ({ singles, setDisplayParameter }: Props) => (
  <div className="nav">
    <h3>シングル</h3>
    <ul className="list-group list-group-flush">
      {[...singles]
        .sort((a, b) => a.singleOrder - b.singleOrder)
        .map((single, singlesIndex) => (
          <Single
            key={`single${singlesIndex}`}
            {...{ single, setDisplayParameter }}
          />
        ))}
    </ul>
  </div>
);

export default memo(Navigation);
