import React, { memo } from "react";
import Single from "./singles/Single";
import singles from "../data/singles.json";

const Navigation = () => (
  <div className="nav">
    <h3>シングル</h3>
    <ul className="list-group list-group-flush">
      {[...singles]
        .sort((a, b) => a.singleOrder - b.singleOrder)
        .map((single, singlesIndex) => (
          <Single key={`single${singlesIndex}`} {...{ single }} />
        ))}
    </ul>
  </div>
);

export default memo(Navigation);
