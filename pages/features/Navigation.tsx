import React from "react";
import Single from "./singles/Single";
import SingleInfo from "./singles/SingleInfo";

type Props = {
  singles: SingleInfo[];
};

const Navigation = ({ singles }: Props) => (
  <div className="nav">
    <h3>シングル</h3>
    <ul className="list-group list-group-flush">
      {[...singles]
        .sort((a, b) => a.singleOrder - b.singleOrder)
        .map((single, singlesIndex) => (
          <Single key={`single${singlesIndex}`} single={single} />
        ))}
    </ul>
  </div>
);

export default Navigation;
